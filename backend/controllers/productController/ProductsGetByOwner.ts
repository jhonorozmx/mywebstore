import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";
import { ProductService } from "backend/services";

export class ProductsGetByOwner implements Controller {
  constructor(private service: ProductService) {}

  async run(req: Request, response: Response): Promise<void> {
    const { userId } = req.params;
    try {
      const user = await this.service
        .getProductsByOwner(userId)
        .catch((error) => {
          response
            .status(httpStatus.NOT_FOUND)
            .json({ message: error.toString() });
        });
      response.status(httpStatus.OK).json(user);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
