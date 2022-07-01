import { Category } from "@Category/domain/Category";
import { Injectable } from "@nestjs/common";
import { partialAssign } from "@Shared/utils/PartialAssign";
import { CategoryGetDto } from "./dto/CategoryGet.dto";

@Injectable()
export class CategoryGetService {
	constructor() { }

	public async run(dto: CategoryGetDto) {
		return partialAssign(new Category(), {
			id: 1,
			name: 'Phones',
			rewrite: 'Luxury phones',
			images: {
				coverId: 1,
				hoverId: 5,
			},
			dateAdd: new Date(),
		});
	}
}