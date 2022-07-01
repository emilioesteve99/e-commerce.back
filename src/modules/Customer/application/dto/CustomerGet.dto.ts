import { IsString } from "class-validator";

export class CustomerGetDto {
	@IsString()
	customerId: string;
}