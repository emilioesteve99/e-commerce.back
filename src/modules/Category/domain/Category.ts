export class Category {
	id: number;
	name: string;
	rewrite: string;
	images: {
		coverId: number;
		hoverId: number;
	};
	dateAdd: Date;
}