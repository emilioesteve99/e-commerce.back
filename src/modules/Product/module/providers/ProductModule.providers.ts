import { ProductGetService } from "@Product/application/ProductGet.service";
import { ProductGetCategoryProductsService } from "@Product/application/ProductGetCategoryProducts.service";
import { ProductModuleControllers } from "../controllers/ProductModule.controllers";

export const ProductModuleProviders = [
	ProductGetCategoryProductsService,
	ProductGetService,
	...ProductModuleControllers
];