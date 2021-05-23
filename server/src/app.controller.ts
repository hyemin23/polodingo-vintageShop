import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/notice')
  getHello(@Request() req): string {
    console.log('notice 들어옴');
    return req.user;
  }
}
