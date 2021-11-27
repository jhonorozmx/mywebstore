import { ProductService } from "./product.service";
import { UserService } from "./user.service";

const productService = new ProductService();
const userService = new UserService();

export { ProductService, productService, UserService, userService }