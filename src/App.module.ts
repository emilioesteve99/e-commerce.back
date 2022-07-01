import { Global, Module } from '@nestjs/common';
import { SharedModule } from '@Shared/Shared.module';
import { CategoryModule } from '@Category/module/Category.module';
import { ProductModule } from '@Product/module/Product.module';
import { CustomerModule } from '@Customer/module/Customer.module';

@Global()
@Module({
  imports: [
    SharedModule,
    CategoryModule,
    ProductModule,
    CustomerModule,
  ],
  providers: [],
})
export class AppModule { }
