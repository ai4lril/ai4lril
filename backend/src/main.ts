// NestJS application entry point: sets up Fastify, CORS, and cookie support
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Register Fastify cookie plugin for signed cookies
  await app.register(require('@fastify/cookie'), {
    secret: process.env.COOKIE_SECRET || 'your-cookie-secret-key',
  });

  // Enable CORS for frontend-backend communication
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(3001, '0.0.0.0');
  console.log('680 Backend server running on http://localhost:3001');
}
bootstrap();
