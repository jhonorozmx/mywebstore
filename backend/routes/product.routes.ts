import { Router, Request, Response } from "express";
import {
  productsGetController,
  productsGetByOwner,
  productsSeedController,
  productsCreateController,
  productsUpdateController,
  productsDeleteController,
} from "../controllers"; // This should not be here

export const register = (router: Router) => {
  /**
   * GET /api/products/seedproducts
   * Populate product collection
   */
  router.get("/api/products/seed", (req: Request, res: Response) =>
    productsSeedController.run(req, res)
  );

  /**
   * GET /api/products
   * Get all products
   */
  router.get("/api/products", (req: Request, res: Response) =>
    productsGetController.run(req, res)
  );

  /**
   * GET /api/users/:id/products
   * Products By Owner Id
   */
  router.get("/api/users/:userId/products", (req: Request, res: Response) =>
    productsGetByOwner.run(req, res)
  );

  /**
   * POST /api/products
   * create a product
   */
  router.post("/api/products", (req: Request, res: Response) =>
    productsCreateController.run(req, res)
  );

  /**
   * PUT /api/products
   * update a product
   */
  router.put("/api/products", (req: Request, res: Response) =>
    productsUpdateController.run(req, res)
  );

  /**
   * DELETE /api/products/:id
   * Delete a product
   */
  router.delete("/api/products/:id", (req: Request, res: Response) =>
    productsDeleteController.run(req, res)
  );
};
