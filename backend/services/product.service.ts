import {
  Product,
  ProductAttributes,
  ProductCreationAttributes,
} from "../models/Product";
import { User } from "../models/User";
import data from "../infrastructure/persistence/data";
import { Types } from "mongoose";

export class ProductService {
  async getProducts(): Promise<Array<ProductAttributes>> {
    try {
      return await Product.find({});
    } catch (error) {
      throw new Error("Error getting products");
    }
  }

  async getProductsByOwner(id: string): Promise<Array<ProductAttributes>> {
    try {
      return await Product.find({ owner: id });
    } catch (error) {
      throw new Error("Error getting this user products");
    }
  }

  async seedProducts(): Promise<Array<ProductAttributes>> {
    try {
      const user = await User.findOne({ email: "admin@example.com" });
      if (user) {
        data.products.map((p, index) => {
          p.owner = user.id;
        });
        const createdProducts = await Product.insertMany(data.products);
        createdProducts.map((p, index) => {
          user!.products?.push(p.id);
        });
        user!.save();
        return createdProducts;
      }
      throw new Error("Can seed products first seed the default users first.");
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async createProduct(
    infoProduct: ProductCreationAttributes
  ): Promise<ProductAttributes> {
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

  async updateProduct(
    id: string,
    name: string,
    price: number,
    brand: string
  ): Promise<ProductAttributes> {
    try {
      const valid = Types.ObjectId.isValid(id);
      if (valid) {
        const objId = new Types.ObjectId(id);
        const res = await Product.exists({ _id: objId });
        if (res) {
          const product = await Product.findById(id);

          product!.name = name || product!.name;
          product!.price = price || product!.price;
          product!.brand = brand || product!.brand;

          const updatedProduct = await product!.save();
          return updatedProduct!;
        } else {
          throw new Error("Product not found");
        }
      } else {
        throw new Error("Invalid Id Object");
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteProduct(id: string): Promise<String> {
    try {
      const valid = Types.ObjectId.isValid(id);
      if (valid) {
        const product = await Product.findByIdAndRemove(id);
        if (product !== null) {
          await User.updateOne(
            { _id: product.owner },
            { $pullAll: { products: [id] } }
          );
          return "Product Deleted";
        } else {
          throw new Error("Product not found");
        }
      }
      throw new Error("Invalid Id Object");
    } catch (error) {
      throw new Error("Error deleting Product");
    }
  }
}
