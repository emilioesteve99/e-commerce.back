import { Global, Module } from "@nestjs/common";
import { ProductModuleControllers } from "./controllers/ProductModule.controllers";
import { ProductModuleProviders } from "./providers/ProductModule.providers";

@Global()
@Module({
	controllers: ProductModuleControllers,
	providers: ProductModuleProviders,
	exports: ProductModuleProviders,
})
export class ProductModule { };