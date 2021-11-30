import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";
import { ProductService } from "backend/services";

export class ProductsUpdateController implements Controller {
  constructor(private service: ProductService) {}

  async run(req: Request, response: Response): Promise<void> {
    const { productId, name, price, brand } = req.body;
    try {
      const updatedProduct = await this.service
        .updateProduct(productId, name, price, brand)
        .catch((error) => {
          response
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .json({ message: error.toString() });
        });
      response.status(httpStatus.OK).json(updatedProduct);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
