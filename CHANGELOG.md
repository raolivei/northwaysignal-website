# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- **CI** — `permissions: contents: write` on the caller workflow (required for `raolivei/github-workflows` `docker-build.yml`, which includes an optional git-tag job that requests `contents: write`; `contents: read` invalidates the workflow).
- **Social / WhatsApp preview** — Replaced Replit `og:image` and `twitter:image` with a Northway-branded 1200×630 `opengraph.png`, added `og:url`, `canonical` link, and `og:image:alt`. The Vite meta plugin now defaults the deployment base URL to `https://northwaysignal.pitanga.cloud` (or `SITE_URL` / Replit env). Removed the extra `opengraph.jpg` in `public/`.

## [0.1.0] - 2026-01-07

### Added
- Initial project structure migrated from Replit.
- Vite + React frontend with Tailwind CSS 4.
- Express backend with Drizzle ORM.
- Project conventions setup (VERSION, CHANGELOG, GitHub Actions).



