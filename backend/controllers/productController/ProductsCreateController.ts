import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";
import { ProductService } from "backend/services"; // This should not be here

export class ProductsCreateController implements Controller {
  constructor(private service: ProductService) {}

  async run(req: Request, response: Response): Promise<void> {
    const { name, price, brand, owner } = req.body;
    try {
      const user = await this.service
        .createProduct({ name, price, brand, owner })
        .catch((error) => {
          response
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .json({ message: error.toString() });
        });
      response.status(httpStatus.OK).json(user);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
