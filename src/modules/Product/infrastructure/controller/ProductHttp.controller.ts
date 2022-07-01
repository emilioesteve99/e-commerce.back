import { Controller, Get } from "@nestjs/common";
import { BaseHttpController } from "@Shared/controller/BaseHttp.controller";

@Controller('product')
export class ProductHttpController extends BaseHttpController {
	constructor() {
		super();
	}

	@Get('getCategoryProducts')
	public async getCategoryProducts() {

	}
}