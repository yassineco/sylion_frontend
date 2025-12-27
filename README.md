# SylionAI Frontend

> Marketing website for SYLION TECH — AI-powered WhatsApp assistant for SMBs.

**Live:** [www.sylionai.com](https://www.sylionai.com)

---

## Project Overview

This repository contains the **frontend-only** static website for SYLION TECH. It is a marketing landing site built with modern web technologies and deployed as static files behind Nginx.

**Important:** This repository intentionally contains no backend code. Backend services are maintained separately.

---

## Tech Stack

| Layer        | Technology                     |
|--------------|--------------------------------|
| Framework    | React 18                       |
| Build Tool   | Vite 5                         |
| Styling      | Tailwind CSS 3                 |
| UI Library   | Radix UI + shadcn/ui           |
| Routing      | Wouter (client-side)           |
| Deployment   | Static files via SCP to Nginx  |
| Hosting      | VPS (OVH) with Nginx           |

---

## Project Scope

This repository is scoped to:

- ✅ Marketing pages (Home, Services, Pricing, Contact, Enterprise, etc.)
- ✅ Static assets and favicons
- ✅ SEO metadata and Open Graph tags
- ✅ Google Analytics integration
- ✅ Deployment automation (`deploy.sh`)

Out of scope (intentionally excluded):

- ❌ Backend API
- ❌ Database
- ❌ Authentication
- ❌ WhatsApp integration logic

---

## Build & Deploy

### Prerequisites

- Node.js 18+
- npm 9+
- SSH access to production VPS

### Local Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

Output: `./dist/` (static files ready for deployment)

### Deployment

Use the included deployment script:

```bash
./deploy.sh
```

Options:
- `--force` — Deploy even if git working directory is dirty
- `--skip-build` — Use existing `dist/` without rebuilding
- `--no-cleanup` — Keep temp files on VPS for debugging
- `--help` — Show all options

The script will:
1. Build the project locally
2. Upload to VPS via SCP
3. Replace Nginx web root
4. Reload Nginx
5. Verify deployment (HTTP status checks)

---

## Project Structure

```
├── client/              # Frontend source code
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Route pages
│   │   ├── lib/         # Utilities
│   │   └── main.tsx     # Entry point
│   ├── public/          # Static assets
│   └── index.html       # HTML template
├── nginx/               # Nginx configuration
├── dist/                # Build output (git-ignored)
├── deploy.sh            # Production deployment script
├── vite.config.ts       # Vite configuration
└── package.json
```

---

## Notes / Future Evolution

This repository is production-ready for the current marketing website scope.

Potential future additions:
- CI/CD pipeline (GitHub Actions)
- Staging environment
- i18n support (French/Arabic)
- Performance monitoring

Backend and SaaS features are developed in a separate repository.

---

## License

Proprietary — SYLION TECH © 2025
