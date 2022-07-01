import { CustomerAddress } from "./CustomerAddress";

export class Customer {
	id: string;
	email: string;
	addressess: CustomerAddress[];
	password: string;
	firstName: string;
	lastName: string;
	dateAdd: Date;
}