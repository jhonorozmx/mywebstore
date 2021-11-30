import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";
import { SaleService } from "backend/services"; // This should not be here

export class SalesCreateController implements Controller {
  constructor(private service: SaleService) {}

  async run(req: Request, response: Response): Promise<void> {
    const { itemsPrice, taxPrice, totalPrice, status, user, orderItems } = req.body;
    try {
      const sale = await this.service
        .createSale({ itemsPrice, taxPrice, totalPrice, status, user, orderItems })
        .catch((error) => {
          response
            .status(httpStatus.NOT_FOUND)
            .json({ message: error.toString() });
        });
      response.status(httpStatus.OK).json(sale);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
