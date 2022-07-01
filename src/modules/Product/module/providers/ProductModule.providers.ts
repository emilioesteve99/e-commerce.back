import { ProductGetCategoryProductsService } from "@Product/application/ProductGetCategoryProducts.service";
import { ProductModuleControllers } from "../controllers/ProductModule.controllers";

export const ProductModuleProviders = [
	ProductGetCategoryProductsService,
	...ProductModuleControllers
];