import { ProductsGetController } from './productController/ProductsGetController';
import { ProductsSeedController } from './productController/ProductsSeedController';
import { ProductsCreateController } from './productController/ProductsCreateController';
import { ProductsUpdateController } from './productController/ProductsUpdateController';
import { ProductsDeleteController } from './productController/ProductsDeleteController';

import { UsersSeedController } from './userController/UsersSeedController';
import { UsersGetController } from './userController/UsersGetController';
import { UsersSignInController } from './userController/UsersSignInController';
import { UsersRegisterController } from './userController/UsersRegisterController';
import { UsersGetByIdController } from './userController/UsersGetByIdController';
import { UsersProfileController } from './userController/UsersProfileController';
import { UsersGetWithProducts } from './userController/UsersGetWithProducts';

import { SalesCreateController } from './saleController/SalesCreateController';
import { SalesGetByIdController } from './saleController/SalesGetByIdController';
import { SalesGetByUserController } from './saleController/SalesGetByUserController';
import { productService, userService, saleService} from '../services'; 

export const productsGetController = new ProductsGetController(productService);
export const productsSeedController = new ProductsSeedController(productService);
export const productsCreateController = new ProductsCreateController(productService);
export const productsUpdateController = new ProductsUpdateController(productService);
export const productsDeleteController = new ProductsDeleteController(productService);

export const usersSeedController = new UsersSeedController(userService);
export const usersGetController = new UsersGetController(userService);
export const usersSignInController = new UsersSignInController(userService);
export const usersRegisterController = new UsersRegisterController(userService);
export const usersGetByIdController = new UsersGetByIdController(userService);
export const usersProfileController = new UsersProfileController(userService);
export const usersGetWithProducts = new UsersGetWithProducts(userService);

export const salesCreateController = new SalesCreateController(saleService);
export const salesGetByIdController = new SalesGetByIdController(saleService);
export const salesGetByUserController = new SalesGetByUserController(saleService);