# Voice Data Collection Backend

A NestJS API server for the voice data collection application.

## Description

This is the backend API for the voice data collection platform. It provides RESTful endpoints for managing voice recordings, user authentication, and data analytics.

## Features

- RESTful API endpoints
- User authentication and authorization
- Voice recording management
- Data analytics and reporting
- Prisma ORM with PostgreSQL
- Docker support

## Project setup

```bash
cd backend
npm install
```

## Database Setup

1. Make sure you have PostgreSQL installed and running
2. Copy `.env.example` to `.env` and configure your database connection
3. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

## Compile and run the project

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Run tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Docker

To run the application with Docker:

```bash
docker-compose up
```

## API Documentation

The API documentation will be available at `http://localhost:3001/api` when the server is running.

## Development

This is a NestJS application with TypeScript, Prisma ORM, and PostgreSQL.

### Available Scripts

- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot reload
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start in production mode
- `npm run build` - Build the application
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:cov` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

Private project - not licensed for public use.
