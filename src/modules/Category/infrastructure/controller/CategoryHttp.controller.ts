import { CategoryGetDto } from "@Category/application/dto/CategoryGet.dto";
import { Controller, Get, Query } from "@nestjs/common";
import { BaseHttpController } from "@Shared/controller/BaseHttp.controller";

@Controller('category')
export class CategoryHttpController extends BaseHttpController {
	constructor() {
		super();
	}

	@Get('getCategory')
	public async getCategory(@Query() dto: CategoryGetDto) {

	}
}