import { Controller, Get, Query } from "@nestjs/common";
import { ProductGetDto } from "@Product/application/dto/ProductGet.dto";
import { ProductGetCategoryProductsDto } from "@Product/application/dto/ProductGetCategoryProducts.dto";
import { ProductGetService } from "@Product/application/ProductGet.service";
import { ProductGetCategoryProductsService } from "@Product/application/ProductGetCategoryProducts.service";
import { BaseHttpController } from "@Shared/controller/BaseHttp.controller";

@Controller('product')
export class ProductHttpController extends BaseHttpController {
	constructor(
		private readonly productGetCategoryProductsService: ProductGetCategoryProductsService,
		private readonly productGetService: ProductGetService,
	) {
		super();
	}

	@Get('getCategoryProducts')
	public async getCategoryProducts(@Query() dto: ProductGetCategoryProductsDto) {
		const products = await this.productGetCategoryProductsService.run(dto);
		return this.success({ products });
	}

	@Get('getProduct')
	public async getProduct(@Query() dto: ProductGetDto) {
		const product = await this.productGetService.run(dto);
		return this.success({ product });
	}
}