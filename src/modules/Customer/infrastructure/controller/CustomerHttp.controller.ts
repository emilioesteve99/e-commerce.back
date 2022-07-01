import { CustomerGetService } from "@Customer/application/CustomerGet.service";
import { CustomerGetDto } from "@Customer/application/dto/CustomerGet.dto";
import { Controller, Get, Query } from "@nestjs/common";
import { BaseHttpController } from "@Shared/controller/BaseHttp.controller";

@Controller('customer')
export class CustomerHttpController extends BaseHttpController {
	constructor(
		private readonly customerGetService: CustomerGetService,
	) {
		super();
	}

	@Get('getCustomer')
	public async getCustomer(@Query() dto: CustomerGetDto) {
		const customer = await this.customerGetService.run(dto);
		return this.success({ customer });
	}
}