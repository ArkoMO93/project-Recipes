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

## License

MIT
