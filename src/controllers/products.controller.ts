import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProduct(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`,
    };
  }
  @Get('products/filter')
  getProductFilter() {
    return {
      message: `este es un filtro de productos`,
    };
  }

  @Get(':productId')
  getProducts(@Param('productId') productId: string) {
    return {
      message: `producto ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
