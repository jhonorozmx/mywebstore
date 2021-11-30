import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { UserService } from 'backend/services'; // This should not be here

export class UsersSeedController implements Controller {
    constructor(private service: UserService) {};

    async run(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.service.seedUsers();
            res.status(httpStatus.CREATED).json(users);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
