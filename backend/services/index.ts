import { ProductService } from "./product.service";
import { UserService } from "./user.service";
import { SaleService } from "./sale.service";

const productService = new ProductService();
const userService = new UserService();
const saleService = new SaleService();

export { ProductService, productService, UserService, userService,SaleService, saleService }