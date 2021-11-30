import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";
import { ProductService } from "backend/services";

export class ProductsDeleteController implements Controller {
  constructor(private service: ProductService) {}

  async run(req: Request, response: Response): Promise<void> {
    const { id } = req.params;
    try {
      const product = await this.service.deleteProduct(id).catch((error) => {
        response
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: error.toString() });
      });
      response.status(httpStatus.OK).json(product);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
