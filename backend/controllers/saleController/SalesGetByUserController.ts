import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";
import { SaleService } from "backend/services"; // This should not be here

export class SalesGetByUserController implements Controller {
  constructor(private service: SaleService) {}

  async run(req: Request, response: Response): Promise<void> {
    const { id } = req.params;
    try {
      const user = await this.service.getSaleByUserId(id).catch((error) => {
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
