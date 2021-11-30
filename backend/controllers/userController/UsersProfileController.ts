import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";
import { UserService } from "backend/services"; // This should not be here

export class UsersProfileController implements Controller {
  constructor(private service: UserService) {}

  async run(req: Request, response: Response): Promise<void> {
    const { userId , name, email, password } = req.body;
    try {
      const user = await this.service
        .updateProfile(userId,name, email, password)
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
