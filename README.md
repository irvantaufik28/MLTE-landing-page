# PES 2017 Master League Transfer Engine (MLTE) Landing Page

This repository contains the Next.js + TypeScript + Tailwind CSS landing page for the PES 2017 Master League Transfer Engine (MLTE). It is configured as a standalone application that can be run locally, inside Docker on port 3000, or deployed to hosting platforms like Vercel.

---

## Tech Stack and Design Architecture

- Framework: Next.js App Router (Standalone configuration)
- Language: TypeScript
- Styling: Tailwind CSS (Visual Theme: Dark Football Transfer Desk with pitch green accents)
- Icons: Lucide React
- Docker: Node 20 LTS Multi-Stage production standalone server and Development hot-reload environments

---

## Local Development and Build Scripts

Make sure you have Node.js 20 LTS installed locally.

### Standard Scripts

```bash
# Install local dependencies cleanly
npm ci

# Run local development server
npm run dev

# Run build (generates files in the standalone output directory)
npm run build

# Run linting check
npm run lint

# Run TypeScript compilation checks
npm run typecheck
```

---

## Docker Container Workflows

We provide multi-stage, production-ready, and development-friendly Docker scripts.

### 1. Local Development (Hot Reloading)

Using Docker Compose, you can run the live Next.js development server with file watchers mounting your local directories:

```bash
# Start dev container
docker compose up --build

# Stop dev container
docker compose down
```

Once started, open http://localhost:3000 to view the live landing page. Any changes made to app/page.tsx or styling files will immediately hot-reload in the browser.

### 2. Standalone Production Docker Container

To build a production-grade container containing the standalone Next.js build:

```bash
# Build the Docker image
docker build -t mlte-landing-page:local .

# Run the container (binds standalone Next.js port 3000 to host port 3000)
docker run --rm -p 3000:3000 mlte-landing-page:local
```

Once run, navigate to http://localhost:3000 to inspect the standalone production container build.

Alternatively, you can build and run using Docker Compose:

```bash
# Build and start production service with Docker Compose
docker compose --profile prod up --build prod
```

---

## How to Update Release URLs and Metadata

All release links, tags, and file assets are centralized in one object. If you compile a new executable (e.g., Beta v1.0.2), you do not need to search throughout the HTML.

Open lib/release.ts and edit the RELEASE_METADATA constant:

```typescript
export const RELEASE_METADATA = {
  version: "Beta v1.0.1",
  branchRef: "beta-v1.0.0",
  platform: "Windows x64",
  filename: "MLTE-beta-v1.0.1.zip",
  releaseUrl: "https://github.com/irvantaufik28/PES2017-Master-League-Transfer-Engine/releases",
  githubRepoUrl: "https://github.com/irvantaufik28/PES2017-Master-League-Transfer-Engine",
  supportUrl: "https://buymeacoffee.com/irvantaufik28",
  lastUpdated: "August 2026"
};
```

Saving this file will automatically update:
- Nav CTAs and Hero badges.
- Filenames and platform cards in the Download block.
- Links to GitHub and Buy Me A Coffee in header, body, and footer.

---

## Vercel Hobby Deployment Workflow

Since this site is compatible with Vercel's Next.js deployment, deploying to the Vercel Hobby tier is simple and cost-effective.

### Deploying via Vercel Git Integration (Recommended)

1. Commit and push this repository to your GitHub account.
2. Log into your Vercel Dashboard (https://vercel.com).
3. Click "Add New" -> "Project".
4. Import your mlte-landing-page repository.
5. In the Build and Development Settings:
   - Vercel automatically detects Next.js.
   - Build Command: next build (which automatically maps to npm run build).
6. Click "Deploy". Vercel will build, package, and serve your landing page via their Global Edge Network.

---

## Production Blocker: GitHub Release Verification

Before going live on the production site, a formal GitHub Release asset (corresponding to the filename specified in lib/release.ts) must be created and verified on the main repository. This is a strict blocker to ensure end-users do not download unverified or missing assets.
