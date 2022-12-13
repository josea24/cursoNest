import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('prueba')
  newEndpoint() {
    return 'probando creacion de endpoint';
  }

  @Get('/ruta/')
  newEndpoint2() {
    return 'probando creacion de endpoint2';
  }
}
