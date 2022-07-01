import { Customer } from "@Customer/domain/Customer";
import { Injectable } from "@nestjs/common";
import { partialAssign } from "@Shared/utils/PartialAssign";
import { randomUUID } from "crypto";
import { CustomerGetDto } from "./dto/CustomerGet.dto";

@Injectable()
export class CustomerGetService {
	constructor() { }

	public async run(dto: CustomerGetDto) {
		return partialAssign(new Customer(), {
			id: randomUUID(),
			email: 'emespei@icloud.com',
			firstName: 'Emilio',
			lastName: 'Esteve Peiró',
			password: '123456',
			addressess: [],
			dateAdd: new Date(),
		})
	}
}