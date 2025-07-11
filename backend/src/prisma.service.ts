// Prisma service for database connection and lifecycle hooks
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  // Connect to database on module init
  async onModuleInit() {
    await this.$connect();
    console.log('\u1f4c5 Database connected successfully');
  }

  // Disconnect on module destroy
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
