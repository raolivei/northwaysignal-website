#!/usr/bin/env python3
"""
Generate opengraph.png (1200x630) for social previews.
Cloud + network + typography (Inter Tight variable font in scripts/fonts/, OFL — see OFL-InterTight.txt).

Keep `client/src/index.css` --font-display in sync: OG art should use the same display
family as the live site (currently Inter Tight).

  python3 scripts/generate-opengraph.py

Requires: pip install pillow
"""
from __future__ import annotations

import math
import os
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
BG_A = (6, 20, 18)  # deep green-charcoal
BG_B = (2, 5, 5)
ACCENT = (232, 106, 69)  # Pitanga
CYAN = (64, 170, 198)
MINT = (100, 198, 160)
TEXT = (240, 248, 244)
MUTED = (150, 175, 160)


def lerp(a: tuple, b: tuple, t: float) -> tuple[int, int, int]:
    t = max(0.0, min(1.0, t))
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def main() -> None:
    random.seed(2026)
    root = Path(__file__).resolve().parents[1]
    out = root / "client" / "public" / "opengraph.png"
    out.parent.mkdir(parents=True, exist_ok=True)

    # 1) Atmospheric base (vignette + top cool highlight)
    im = Image.new("RGB", (W, H), BG_B)
    px = im.load()
    cx, cy = W * 0.3, H * 0.22
    for y in range(H):
        for x in range(W):
            t = (y / max(H - 1, 1)) ** 0.95
            c = lerp(BG_A, BG_B, 0.25 + 0.75 * t)
            dist = math.hypot(x - cx, y - cy) / 1000.0
            c = lerp(c, (12, 40, 52), min(0.5, 0.55 * (1.0 - min(1.0, dist))))
            vx = (2.0 * x / W) - 1.0
            vy = (2.0 * y / H) - 1.0
            vig = 0.4 + 0.6 * (1.0 - 0.35 * (vx**2 + vy**2))
            c = tuple(int(xi * vig) for xi in c)
            px[x, y] = c

    # 2) Film grain
    nlayer = im.copy()
    npx = nlayer.load()
    for y in range(0, H, 1):
        for x in range(0, W, 1):
            if (x + y) % 3:
                continue
            n = random.randint(-2, 2)
            a, b, c = npx[x, y]
            npx[x, y] = (max(0, a + n), max(0, b + n), max(0, c + n))
    im = Image.blend(im, nlayer, 0.09)

    # 3) Soft “clouds”
    im = im.convert("RGBA")
    cl = Image.new("RGBA", (W, H), 0)
    cd = ImageDraw.Draw(cl)
    blobs = [
        (-120, -80, 520, 300, (35, 110, 120, 28)),
        (280, -40, 520, 260, (30, 70, 85, 20)),
        (W // 2 - 100, 40, 500, 240, (25, 60, 70, 16)),
        (W - 400, 0, 450, 200, (20, 50, 55, 12)),
    ]
    for b in blobs:
        x1, y1, x2, y2, col = b
        cd.ellipse((x1, y1, x1 + x2, y1 + y2), fill=col)
    cl = cl.filter(ImageFilter.GaussianBlur(50))
    im = Image.alpha_composite(im, cl)
    d = ImageDraw.Draw(im)

    # 4) Sparse isometric grid dots
    for y in range(0, H, 26):
        o = 0 if (y // 26) % 2 == 0 else 13
        for x in range(-o, W, 26):
            if 0 <= x < W and random.random() > 0.4:
                col = lerp((6, 18, 16), (50, 140, 150), 0.08 * random.random())
                d.ellipse((x, y, x + 1, y + 1), fill=col)

    # 5) Network graph
    net = Image.new("RGBA", (W, H), 0)
    nd = ImageDraw.Draw(net)
    nodes: list[tuple[int, int]] = []
    for _ in range(50):
        nodes.append((random.randint(50, W - 50), random.randint(40, H - 200)))
    max_d = 130.0
    for i, p in enumerate(nodes):
        for q in nodes[i + 1 :]:
            dxy = math.hypot(p[0] - q[0], p[1] - q[1])
            if dxy < 8 or dxy > max_d:
                continue
            s = 1.0 - (dxy / max_d) ** 1.2
            a = int(20 + 110 * s**2)
            c = lerp((60, 160, 170), (95, 195, 150), 0.5 * s)
            w = 1 if s < 0.45 else 2
            nd.line([p, q], fill=(*c, a), width=w)
    for p in nodes:
        if random.random() < 0.4:
            continue
        r = 2 + ((p[0] * 7 + p[1] * 13) % 2)
        c = lerp((8, 30, 28), ACCENT, 0.12 * random.random())
        nd.ellipse(
            (p[0] - r, p[1] - r, p[0] + r, p[1] + r), fill=(*c, 230)
        )
    im = im.convert("RGBA")
    im = Image.alpha_composite(im, net)
    d = ImageDraw.Draw(im)

    # 6) Glowing “signal” arcs (accent) — concentric wide arcs, top right
    arc_layer = Image.new("RGBA", (W, H), 0)
    ad = ImageDraw.Draw(arc_layer)
    for k, width in enumerate((32, 22, 14, 4)):
        a0 = 15 + k * 5
        x0 = W - 360 - k * 28
        y0 = 40
        w0 = 300 + k * 40
        h0 = 200 + k * 25
        a = 35 - k * 6
        c = (ACCENT[0], ACCENT[1], ACCENT[2], a)
        ad.arc((x0, y0, x0 + w0, y0 + h0), a0, 210, width=width, fill=c)
    arc_layer = arc_layer.filter(ImageFilter.GaussianBlur(2.5))
    im = im.convert("RGBA")
    im = Image.alpha_composite(im, arc_layer)
    d = ImageDraw.Draw(im)

    # 7) Bottom text panel (two lines: title + tag)
    panel = Image.new("RGBA", (W, H), 0)
    ph = 150
    pd = ImageDraw.Draw(panel)
    for y in range(ph):
        a = min(200, int(100 + 120 * (y / ph) ** 0.7))
        pd.line([(0, y), (W, y)], fill=(2, 6, 4, a), width=1)
    panel = panel.filter(ImageFilter.GaussianBlur(0.3))
    im = im.convert("RGBA")
    fullp = Image.new("RGBA", (W, H), 0)
    fullp.paste(panel, (0, H - ph))
    im = Image.alpha_composite(im, fullp)
    d = ImageDraw.Draw(im)

    # 8) Typography (Inter Tight, matches site display font in index.css)
    font_title, font_sub = _load_fonts()
    title = "Northway Signal"
    sub = "Cloud, Platform, Scale, AI"
    x = 56
    y_title = H - 122
    for ox, oy in ((3, 3), (1, 1)):
        d.text(
            (x + ox, y_title + oy),
            title,
            font=font_title,
            fill=(0, 10, 8, 190),
        )
    d.text((x, y_title), title, font=font_title, fill=(*TEXT, 255))
    d.text((x, y_title + 72), sub, font=font_sub, fill=(*lerp(MUTED, ACCENT, 0.2), 255))

    im = im.convert("RGB")
    im.save(out, "PNG", optimize=True, compress_level=9)
    print("Wrote", out)


def _load_fonts() -> tuple:
    """Inter Tight variable font (OFL) from scripts/fonts; weights match the site (600 / 500)."""
    root = Path(__file__).resolve().parents[1]
    ttf = root / "scripts" / "fonts"
    vpath = ttf / "InterTight[wght].ttf"
    if vpath.is_file():
        f_title = ImageFont.truetype(str(vpath), 60)
        f_sub = ImageFont.truetype(str(vpath), 28)
        f_title.set_variation_by_axes([600])
        f_sub.set_variation_by_axes([500])
        return (f_title, f_sub)
    # macOS / Linux fallbacks
    for pair in (
        (
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
            "/System/Library/Fonts/Supplemental/Arial.ttf",
        ),
        (
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        ),
    ):
        a, b = pair
        if os.path.isfile(a) and os.path.isfile(b):
            return (
                ImageFont.truetype(a, 58),
                ImageFont.truetype(b, 26),
            )
    f = ImageFont.load_default()
    return (f, f)


if __name__ == "__main__":
    main()
