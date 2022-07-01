import { IsNotEmpty, IsString } from "class-validator";

export class CategoryGetDto {
	@IsString()
	@IsNotEmpty()
	categoryId: string;
}