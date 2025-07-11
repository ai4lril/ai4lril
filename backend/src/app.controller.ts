// Basic controller for root endpoint
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Returns a hello world string for health check
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
