import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class ProductGetCategoryProductsDto {
	@Type(() => Number)
	@IsNumber()
	categoryId: number;
}