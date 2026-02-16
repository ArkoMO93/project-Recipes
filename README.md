# Project Recipes

Full‑stack project with:

- **[Frontend](frontend/README.md)**: Next.js (App Router) + TypeScript + Tailwind
- **[Backend](backend/README.md)**: NestJS + TypeScript

## Project structure

```
project-Recipes/
├── frontend/                 # Next.js app
├── backend/                   # NestJS API
├── docker-compose.yml         # Docker dev
├── docker-compose.prod.yml    # Docker prod
└── package.json               # Root orchestration scripts
```

## Ports (local)

- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:3001`

## Prerequisites

- Node.js \(>= 18\)
- npm \(>= 9\)
- Optional: Docker + Docker Compose

## Quick start (Node)

```bash
npm run install:all
npm run dev:all
```

## Root scripts (normalized)

The root scripts follow the same pattern everywhere:

- **`<cmd>:all`** runs both apps
- **`<cmd>:frontend`** runs only frontend
- **`<cmd>:backend`** runs only backend

Aliases also exist for convenience: `dev`, `build`, `start`, `lint`, `test`.

### Development

```bash
npm run dev:all
npm run dev:frontend
npm run dev:backend
```

### Build + start (production mode)

```bash
npm run build:all
npm run build:frontend
npm run build:backend

npm run start:all
npm run start:frontend
npm run start:backend
```

### Lint

```bash
npm run lint:all
npm run lint:frontend
npm run lint:backend
```

### Tests

```bash
npm run test:all
npm run test:frontend
npm run test:backend
```

Backend e2e:

```bash
npm run test:e2e
```

## Docker (local containers)

### Development (hot reload)

```bash
docker-compose up --build
```

Or via root scripts:

```bash
npm run docker:dev
npm run docker:dev:detached
npm run docker:logs
npm run docker:dev:down
```

Notes:

- Source is mounted into containers for fast iteration.
- Backend **does not** mount `/app/dist` (avoids `EBUSY rmdir /app/dist` in watch mode).

### Production

```bash
docker-compose -f docker-compose.prod.yml up --build
```

Or via root scripts:

```bash
npm run docker:prod
npm run docker:prod:detached
npm run docker:prod:down
```

### Clean volumes

```bash
npm run docker:clean
```

## Environment variables

Root templates:

```bash
cp .env.example .env
cp .env.production.example .env.production
```

Frontend example (`frontend/.env.local`):

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_ENV=development
```

Backend example (`backend/.env`):

```env
PORT=3001
BACKEND_PORT=3001
NODE_ENV=development
DATABASE_URL=
```

## Webpack files

The repo includes `webpack.config.js`, `webpack.dev.js`, `webpack.prod.js` for orchestration/reference.
**Next.js and NestJS handle their own bundling/build**; these files are not required for normal dev/prod runs.

## License

MIT
