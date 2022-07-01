import { CategoryGetService } from "@Category/application/CategoryGet.service";
import { CategoryModuleControllers } from "../controllers/CategoryModule.controllers";

export const CategoryModuleProviders = [
	CategoryGetService,
	...CategoryModuleControllers,
]