import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProduct(
    @Query('limit') limit: 100,
    @Query('offset') offset: 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`;
  }
  @Get('products/filter')
  getProductFilter() {
    return `este es un filtro de productos`;
  }

  @Get(':productId')
  getProducts(@Param('productId') productId: string) {
    return `producto ${productId}`;
  }
}
