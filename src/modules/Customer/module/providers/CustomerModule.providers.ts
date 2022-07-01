import { CustomerGetService } from "@Customer/application/CustomerGet.service";
import { CustomerModuleControllers } from "../controllers/CustomerModule.controllers";

export const CustomerModuleProviders = [
	CustomerGetService,
	...CustomerModuleControllers,
];