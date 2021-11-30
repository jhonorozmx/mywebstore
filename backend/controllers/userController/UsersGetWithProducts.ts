import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";
import { UserService } from "backend/services"; // This should not be here

export class UsersGetWithProducts implements Controller {
  constructor(private service: UserService) {}

  async run(req: Request, response: Response): Promise<void> {
    const { id } = req.params;
    try {
      const user = await this.service.getUsersAndProducts(id).catch((error) => {
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
