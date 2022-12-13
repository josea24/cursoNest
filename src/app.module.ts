import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { UsersController } from './controllers/users.controller';
import { BrandController } from './controllers/brand.controller';
import { OrdersController } from './controllers/orders.controller';
import { CustomerController } from './controllers/customer.controller';
import { OrdersController } from './controllers/orders.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, UsersController, BrandController, OrdersController, CustomerController],
  providers: [AppService],
})
export class AppModule {}
