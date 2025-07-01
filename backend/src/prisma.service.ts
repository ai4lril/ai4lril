import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        super();
    }

    async onModuleInit() {
        await this.$connect();
        console.log('📅 Database connected successfully');
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
