# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- **Typography** — Default stack: **Inter** (body), **Inter Tight** (display / headings / wordmark), **IBM Plex Mono** (technical), **Source Serif 4** (opt-in long copy). Removed Plus Jakarta Sans and JetBrains Mono from the default stack. Documented in `docs/TYPOGRAPHY.md`. Open Graph art uses the Inter Tight variable font in `scripts/fonts/`; regenerate with `python3 scripts/generate-opengraph.py` (`pip install pillow`).
- **Favicon** — Replaced the default Replit icon with a Northway-branded mark (signal bars on site background, matching `LogoMark`).
- **CI** — `permissions: contents: write` on the caller workflow (required for `raolivei/github-workflows` `docker-build.yml`, which includes an optional git-tag job that requests `contents: write`; `contents: read` invalidates the workflow).
- **Social / WhatsApp preview** — 1200×630 `opengraph.png` with layered graphic; copy is **“Northway Signal”** / **“Cloud, Platform, Scale, AI”**.

## [0.1.0] - 2026-01-07

### Added
- Initial project structure migrated from Replit.
- Vite + React frontend with Tailwind CSS 4.
- Express backend with Drizzle ORM.
- Project conventions setup (VERSION, CHANGELOG, GitHub Actions).



