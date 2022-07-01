import { Global, Module } from "@nestjs/common";
import { CategoryGetService } from "@Category/application/CategoryGet.service";
import { CategoryHttpController } from "@Category/infrastructure/controller/CategoryHttp.controller";
import { CategoryModuleProviders } from "./providers/Module.providers";
import { CategoryModuleControllers } from "./controllers/CategoryModule.controllers";

@Global()
@Module({
	controllers: CategoryModuleControllers,
	providers: CategoryModuleProviders,
	exports: CategoryModuleProviders
})
export class CategoryModule { };