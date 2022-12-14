import { Controller, Post, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
