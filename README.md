# Project Recipes

A full-stack application with Next.js frontend and NestJS backend.

## Project Structure

```
project-Recipes/
├── frontend/          # Next.js frontend application
└── backend/           # NestJS backend API
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Docker and Docker Compose (for containerized deployment)

## Getting Started

### Quick Start (Recommended)

1. Install all dependencies from the root directory:
```bash
npm run install:all
```

2. Run both frontend and backend in development mode:
```bash
npm run dev
```

This will start:
- **Frontend** at [http://localhost:3000](http://localhost:3000)
- **Backend** at [http://localhost:3001](http://localhost:3001)

### Individual Project Setup

#### Frontend (Next.js)

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000)

#### Backend (NestJS)

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run start:dev
```

The backend API will be available at [http://localhost:3001](http://localhost:3001)

## Docker Deployment

### Prerequisites
- Docker Desktop (or Docker Engine + Docker Compose)
- Docker version 20.10 or higher

### Development with Docker

Run both frontend and backend in Docker containers for development:

```bash
# Build and start containers
docker-compose up --build

# Or run in detached mode (background)
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

This will start:
- **Frontend** at [http://localhost:3000](http://localhost:3000)
- **Backend** at [http://localhost:3001](http://localhost:3001)

### Production with Docker

Build and run production containers:

```bash
# Build and start production containers
docker-compose -f docker-compose.prod.yml up --build

# Or run in detached mode
docker-compose -f docker-compose.prod.yml up -d --build

# Stop production containers
docker-compose -f docker-compose.prod.yml down
```

### Docker Commands

```bash
# Build individual services
docker-compose build frontend
docker-compose build backend

# Start specific service
docker-compose up frontend
docker-compose up backend

# View running containers
docker-compose ps

# Execute commands in containers
docker-compose exec frontend npm run lint
docker-compose exec backend npm run test

# Rebuild without cache
docker-compose build --no-cache

# Remove containers and volumes
docker-compose down -v
```

### Dockerfile Details

- **Frontend**: Multi-stage build with Next.js standalone output
  - Development: `frontend/Dockerfile.dev` - Hot reload enabled
  - Production: `frontend/Dockerfile` - Optimized build
  
- **Backend**: Multi-stage build for NestJS
  - Development: `backend/Dockerfile.dev` - Watch mode enabled
  - Production: `backend/Dockerfile` - Optimized build

### Volume Mounts (Development)

In development mode, volumes are mounted for hot reload:
- Source code is mounted for live updates
- `node_modules` are excluded from mounts for performance
- Build artifacts (`.next`, `dist`) are excluded

## Root-Level Commands

All commands can be run from the root directory:

### Development
```bash
npm run dev              # Run both frontend and backend in development mode
npm run dev:frontend     # Run only frontend in development mode
npm run dev:backend      # Run only backend in development mode
```

### Production
```bash
npm run build            # Build both frontend and backend for production
npm run build:frontend   # Build only frontend
npm run build:backend    # Build only backend
npm run start            # Run both frontend and backend in production mode
npm run start:frontend   # Run only frontend in production mode
npm run start:backend    # Run only backend in production mode
```

### Utilities
```bash
npm run install:all      # Install dependencies for root, frontend, and backend
npm run lint             # Run linters for both projects
npm run lint:frontend    # Run linter for frontend only
npm run lint:backend    # Run linter for backend only
npm run test             # Run backend tests
npm run test:e2e         # Run backend end-to-end tests
```

### Docker
```bash
npm run docker:dev           # Start development containers
npm run docker:dev:detached  # Start development containers in background
npm run docker:dev:down      # Stop development containers
npm run docker:prod          # Start production containers
npm run docker:prod:detached # Start production containers in background
npm run docker:prod:down     # Stop production containers
npm run docker:logs         # View container logs
npm run docker:clean        # Stop containers and remove volumes
```

## Webpack Configuration

This project includes webpack configuration files for build orchestration:

- `webpack.config.js` - Base webpack configuration
- `webpack.dev.js` - Development-specific configuration
- `webpack.prod.js` - Production-specific configuration

**Note:** Next.js uses Turbopack/SWC for bundling and NestJS handles its own build process. The webpack configs are provided for reference and potential custom build orchestration.

## Available Scripts

### Root-Level Scripts (Run from project root)
- `npm run dev` - Run both frontend and backend in development mode
- `npm run build` - Build both projects for production
- `npm run start` - Run both projects in production mode
- `npm run install:all` - Install all dependencies
- `npm run lint` - Run linters for both projects
- `npm run test` - Run backend tests

### Frontend Scripts (Run from `frontend/` directory)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend Scripts (Run from `backend/` directory)
- `npm run start` - Start production server
- `npm run start:dev` - Start development server with hot reload
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start production server
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:cov` - Run tests with coverage

## Technologies

### Frontend
- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **Express** - Web framework (underlying NestJS)

## Environment Variables

### Root-Level Configuration

Copy `.env.example` to `.env` and configure as needed:
```bash
cp .env.example .env
```

For production, copy `.env.production.example`:
```bash
cp .env.production.example .env.production
```

### Frontend Environment Variables

Create `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_ENV=development
```

### Backend Environment Variables

Create `backend/.env`:
```env
PORT=3001
BACKEND_PORT=3001
NODE_ENV=development
DATABASE_URL=
```

**Note:** The backend runs on port 3001 by default to avoid conflicts with the frontend (port 3000).

### Docker Environment Variables

When using Docker, environment variables can be set in:
- `docker-compose.yml` (development)
- `docker-compose.prod.yml` (production)
- `.env` file (loaded automatically by docker-compose)

## License

MIT
