import { Controller, Get } from '@nestjs/common';

@Controller('api/health')
export class AppController {
  @Get()
  getHealth() {
    return { status: 'OK' };
  }
}

