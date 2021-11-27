import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";
import { UserService } from "backend/services"; // This should not be here

export class UsersRegisterController implements Controller {
  constructor(private service: UserService) {}

  async run(req: Request, response: Response): Promise<void> {
    const { name, email, password } = req.body;
    const isAdmin = false;
    const token = "";
    const creation_date = new Date();
    try {
      const user = await this.service
        .createUser({ name, email, password, isAdmin, token, creation_date })
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
