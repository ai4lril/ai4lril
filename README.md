# Voice Data Collection
A voice data collection application with a Next.js frontend and NestJS backend.

## Project Structure

```
voice-data-collection/
├── frontend/          # Next.js application
├── backend/           # NestJS API server
├── package.json       # Root npm scripts
└── README.md         # This file
```

## Quick Start

### Option 1: Use Root NPM Scripts (Recommended)

First, install all dependencies:
```bash
npm run install:all
```

Then choose how to start the applications:

```bash
# Start both frontend and backend in development mode
npm run dev

# Start only frontend (Next.js on port 3000)
npm run dev:frontend

# Start only backend (NestJS on port 3001)
npm run dev:backend

# Start backend with Docker (PostgreSQL + NestJS)
npm run dev:docker

# Start both in production mode
npm run start

# Build both applications
npm run build

# Run tests for both applications
npm run test

# Lint both applications
npm run lint
```

### Option 2: Manual Start

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

#### Backend

```bash
cd backend
npm install
npm run start:dev
```

The backend API will be available at `http://localhost:3001`

## Docker Setup

**Docker is NOT started automatically.** It's only used for the PostgreSQL database.

### Docker Usage:

```bash
# Start PostgreSQL in Docker + Backend locally
npm run dev:docker

# Manual Docker commands:
cd backend

# Start only PostgreSQL in Docker
docker-compose up -d

# Stop PostgreSQL
docker-compose down

# View PostgreSQL logs
docker-compose logs postgres

# Check running containers
docker ps
```

### What Runs Where:
- **Frontend**: Runs locally on port 3000
- **Backend**: Runs locally on port 3001  
- **PostgreSQL**: Runs in Docker container on port 5432

## Error Handling & Debugging

### When Running Both Servers (`npm run dev`):
Both servers output to the same terminal, making it hard to distinguish errors.

### For Better Error Visibility:

#### Option 1: Run Servers Separately (Recommended for Debugging)
```bash
# Terminal 1 - Frontend
npm run dev:frontend

# Terminal 2 - Backend
npm run dev:backend
```

#### Option 2: Check Individual Logs
```bash
# Frontend errors will show in the frontend terminal
# Backend errors will show in the backend terminal
# Database errors will show in Docker logs
docker-compose -f backend/docker-compose.yml logs postgres
```

## Available NPM Scripts

### Development
- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:frontend` - Start only frontend
- `npm run dev:backend` - Start only backend
- `npm run dev:docker` - Start backend with Docker (PostgreSQL + NestJS)

### Production
- `npm run start` - Start both applications in production mode
- `npm run start:frontend` - Start only frontend in production
- `npm run start:backend` - Start only backend in production

### Build
- `npm run build` - Build both applications
- `npm run build:frontend` - Build only frontend
- `npm run build:backend` - Build only backend

### Utilities
- `npm run install:all` - Install dependencies for all applications
- `npm run test` - Run tests for both applications
- `npm run lint` - Lint both applications
- `npm run clean` - Clean build artifacts

## Development

Each folder is independent and can be used outside of this workspace:

- **Frontend**: Standard Next.js application with TypeScript and Tailwind CSS
- **Backend**: NestJS application with Prisma ORM and PostgreSQL

## Technologies Used

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

### Backend
- NestJS
- Prisma ORM
- PostgreSQL (Docker)
- TypeScript

## License

Private project - not licensed for public use. 