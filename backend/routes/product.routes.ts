import { Router, Request, Response } from 'express';
import { productsGetController, productsSeedController, productsCreateController } from '../controllers'; // This should not be here


export const register = (router: Router) => {

    /**
     * GET /api/products/seedproducts
     * Populate product collection
     */
     router.get('/api/products/seed', (req: Request, res: Response) => productsSeedController.run(req, res));

    /**
     * GET /api/products
     * Get all products
     */
    router.get('/api/products', (req: Request, res: Response) => productsGetController.run(req, res));

    router.post('/api/products', (req: Request, res: Response) => productsCreateController.run(req, res));


};