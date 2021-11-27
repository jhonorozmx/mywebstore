import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { ProductService } from 'backend/services'; // This should not be here

export class ProductsSeedController implements Controller {
    constructor(private service: ProductService) {};

    async run(req: Request, res: Response): Promise<void> {
        try {
            const products = await this.service.seedProducts();
            res.status(httpStatus.CREATED).json(products);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
