# Typography (Northway Signal)

The public site uses a small, three-tier type system. Tokens live in `client/src/index.css` under `@theme inline` (`--font-sans`, `--font-display`, `--font-mono`, `--font-serif`, and `--font-technical` as an alias for the mono stack).

| Role | Family | Use |
| --- | --- | --- |
| UI / body | **Inter** | Default interface and long reading in sans. |
| Display | **Inter Tight** | Headings (`h1`–`h6`), `font-display`, and wordmark. |
| Technical / code | **IBM Plex Mono** | Kickers, labels, monospace UI (`font-mono` / `font-technical`). |
| Long copy (opt-in) | **Source Serif 4** | Credibility paragraphs where `font-serif` is applied. |

**Logo:** the wordmark uses `font-medium` and about **+1.5%** letter-spacing so it feels precise without heavy weight.

**Open Graph images:** `scripts/generate-opengraph.py` renders the title in **Inter Tight** (variable font in `scripts/fonts/`, `OFL-InterTight.txt`). Regenerate with:

```bash
python3 scripts/generate-opengraph.py   # requires: pip install pillow
```

## Upgrading to a paid display face (e.g. Söhne)

1. Purchase a license and obtain WOFF2 files.  
2. Add them under `client/public/fonts/` (names from your license package).  
3. In `index.css`, add `@font-face` rules with `font-display: swap`.  
4. Set `--font-display` to the licensed family, with `Inter Tight` and `Inter` as fallbacks, e.g.  
   `"Söhne", "Inter Tight", "Inter", system-ui, sans-serif`.

No component renames are required as long as headings and the wordmark use `font-display` or the CSS variable.
