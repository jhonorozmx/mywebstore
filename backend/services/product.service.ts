import { Product,  ProductAttributes, ProductCreationAttributes } from '../models/Product';
import { User } from "../models/User";
import data from "../infrastructure/persistence/data";

export class ProductService {
  
    async getProducts(): Promise<Array<ProductAttributes>> {
        try {
            return await Product.find({});
        } catch (error) {
            throw new Error('Error getting products');
        }
    }

    async seedProducts(): Promise<Array<ProductAttributes>>{
        try {
            const createdProducts = await Product.insertMany(data.products);
            return createdProducts;
        } catch (error) {
            throw new Error('Error creating products');
        }
    }

    async createProduct(infoProduct:ProductCreationAttributes ): Promise<ProductAttributes>{
        try {
            const createdProducts = await Product.create(infoProduct);
            const user = await User.findById(infoProduct.owner);
            if (user) {
                user!.products?.push(createdProducts.id);
                user!.save();
            }
            return createdProducts;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}
