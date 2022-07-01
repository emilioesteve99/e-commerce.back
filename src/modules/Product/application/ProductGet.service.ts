import { Injectable } from "@nestjs/common";
import { Product } from "@Product/domain/Product";
import { partialAssign } from "@Shared/utils/PartialAssign";
import { ProductGetDto } from "./dto/ProductGet.dto";

@Injectable()
export class ProductGetService {
	constructor() { }

	public async run(dto: ProductGetDto) {
		return partialAssign(new Product(), {
			id: 1,
			name: 'Iphone 13',
			combinations: [],
			price: 1300,
		})
	}
}