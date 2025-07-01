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

    // Register Fastify cookie plugin
    await app.register(require('@fastify/cookie'), {
        secret: process.env.COOKIE_SECRET || 'your-cookie-secret-key', // for cookies signature
    });

    // Enable CORS for frontend communication
    app.enableCors({
        origin: 'http://localhost:3000', // Frontend URL
        credentials: true, // Allow cookies
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });

    await app.listen(3001, '0.0.0.0');
    console.log('🚀 Backend server running on http://localhost:3001');
}
bootstrap();
