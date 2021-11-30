import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { UserService } from 'backend/services'; // This should not be here

export class UsersSignInController implements Controller {
  constructor(private service: UserService) {};

  async run(req: Request, response: Response): Promise<void> {
    const { email, password } = req.body;

    try {
      const user = await this.service.signIn(email, password).catch(
        (error) =>{
          response.status(httpStatus.BAD_REQUEST).json({message: error.toString()});
        }
      );;
      response.status(httpStatus.OK).json(user);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}