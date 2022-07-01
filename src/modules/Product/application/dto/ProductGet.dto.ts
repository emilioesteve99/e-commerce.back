import { Type } from "class-transformer";

export class ProductGetDto {
	@Type(() => Number)
	productId: number;
}