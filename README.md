# Northway Signal Website

<!-- Badges - Update these URLs after creating your repository -->
<!--
[![Build and Push](https://github.com/raolivei/northwaysignal-website/actions/workflows/build-and-push.yml/badge.svg)](https://github.com/raolivei/northwaysignal-website/actions/workflows/build-and-push.yml)
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](VERSION)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
-->

**High-leverage cloud consulting, built for scale.**

Northway Signal provides specialized support in cloud infrastructure, platform reliability, and large-scale systems operations. We work with technology organizations that require dependable execution, clear accountability, and minimal friction.

## Features

- ✅ **Modern Stack**: React 19, TypeScript, Vite, Tailwind CSS
- ✅ **Production Ready**: Docker containerization with ARM64 support
- ✅ **Kubernetes Deployment**: Full k8s manifests for eldertree cluster
- ✅ **CI/CD Pipeline**: Automated Docker builds and pushes to GHCR
- ✅ **Health Checks**: Kubernetes liveness and readiness probes
- ✅ **Responsive Design**: Mobile-first, modern UI with Framer Motion
- ✅ **Type Safety**: Full TypeScript coverage

## Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn
- Docker (for containerized deployment)
- Kubernetes cluster (for production deployment)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# The application will be available at http://localhost:5000
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Docker

```bash
# Build Docker image
docker build -t northwaysignal-website:latest .

# Run container
docker run -p 5000:5000 northwaysignal-website:latest
```

## Project Structure

```
northwaysignal-website/
├── .github/
│   └── workflows/
│       └── build-and-push.yml    # CI/CD workflow for Docker builds
├── client/                        # React frontend
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── pages/                # Page components
│   │   └── lib/                  # Utilities
│   └── public/                   # Static assets
├── server/                        # Express backend
│   ├── index.ts                  # Server entry point
│   ├── routes.ts                 # API routes
│   └── static.ts                 # Static file serving
├── shared/                        # Shared TypeScript types
├── k8s/                           # Kubernetes manifests
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   └── kustomization.yaml
├── github/                        # GitHub configuration
│   ├── branch-protection-config.json
│   └── setup-branch-protection.sh
├── Dockerfile                     # Production Docker image
├── VERSION                        # Semantic version (0.1.0)
├── CHANGELOG.md                   # Change log
└── README.md                      # This file
```

## Deployment

### Kubernetes (eldertree cluster)

The application is configured for deployment on the `eldertree` ARM64 k3s cluster:

```bash
# Apply Kubernetes manifests
kubectl apply -k k8s/

# Verify deployment
kubectl get pods -n northway-signal
kubectl get ingress -n northway-signal
```

**Access:**
- Local: `https://northway.eldertree.local`
- Health check: `https://northway.eldertree.local/api/health`

### Docker Images

Images are automatically built and pushed to GitHub Container Registry:

```bash
# Pull latest image
docker pull ghcr.io/raolivei/northwaysignal-website:latest

# Run with custom port
docker run -p 8080:5000 ghcr.io/raolivei/northwaysignal-website:latest
```

**Image Tags:**
- `main` branch → `main`, `latest`, `main-<sha>`
- `dev` branch → `dev`, `dev-<sha>`
- Git tags `v1.2.3` → `v1.2.3`, `v1.2`, `v1`, `<sha>`
- PRs → `pr-<number>` (build only)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run dev:client` - Start Vite dev server only (port 5000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

### Environment Variables

- `NODE_ENV` - Environment mode (`development` or `production`)
- `PORT` - Server port (default: 5000)

## Architecture

```
┌─────────────┐         ┌──────────────┐
│   React +   │   HTTP  │   Express    │
│   Vite      │ ◄─────► │   Server     │
│  Frontend   │         │              │
└─────────────┘         └──────────────┘
                               │
                               ▼
                        ┌──────────────┐
                        │   Static     │
                        │   Assets     │
                        └──────────────┘
```

**Tech Stack:**
- **Frontend**: React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI
- **Backend**: Express, TypeScript
- **Build**: esbuild for production bundling
- **Deployment**: Docker, Kubernetes (K3s), ARM64

## CI/CD

The repository includes automated CI/CD workflows:

- **Build and Push**: Automatically builds ARM64 Docker images on push to `main`/`dev` branches or tags
- **Security Scanning**: Trivy scans Docker images for vulnerabilities
- **Branch Protection**: Enforced PR reviews and status checks

See [.github/workflows/build-and-push.yml](.github/workflows/build-and-push.yml) for workflow details.

## Versioning

This project follows [Semantic Versioning](https://semver.org/). The current version is tracked in the `VERSION` file.

- **Pre-1.0**: Breaking changes may occur in minor versions
- **Post-1.0**: Breaking changes only in major versions

See [CHANGELOG.md](./CHANGELOG.md) for detailed release notes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues or questions:

1. Check workflow logs in GitHub Actions
2. Review [CHANGELOG.md](./CHANGELOG.md) for recent changes
3. Open an issue on GitHub

---

**Built with ❤️ for reliable cloud infrastructure**

