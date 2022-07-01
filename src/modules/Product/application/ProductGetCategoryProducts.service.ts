import { Injectable } from "@nestjs/common";
import { Product } from "@Product/domain/Product";
import { partialAssign } from "@Shared/utils/PartialAssign";
import { ProductGetCategoryProductsDto } from "./dto/ProductGetCategoryProducts.dto";

@Injectable()
export class ProductGetCategoryProductsService {
	constructor() { }

	public async run(dto: ProductGetCategoryProductsDto) {
		return [].map(e => partialAssign(new Product(), e));
	}
}