import { Router, Request, Response } from "express";
import {
  usersSeedController,
  usersGetController,
  usersSignInController,
  usersRegisterController,
  usersGetByIdController,
  usersProfileController,
  usersGetWithProducts,
} from "../controllers"; // This should not be here

export const register = (router: Router) => {
  /**
   * GET /api/users/seed
   * Pupulate user collection
   */
  router.get("/api/users/seed", (req: Request, res: Response) =>
    usersSeedController.run(req, res)
  );

  /**
   * GET /api/users
   * Get all user
   */
  router.get("/api/users", (req: Request, res: Response) =>
    usersGetController.run(req, res)
  );

  /**
   * POST /api/users/signin
   * signin user
   */
  router.post("/api/users/signin", (req: Request, res: Response) =>
    usersSignInController.run(req, res)
  );

  /**
   * POST /api/users/signin
   * register
   */
  router.post("/api/users/register", (req: Request, res: Response) =>
    usersRegisterController.run(req, res)
  );

  /**
   * GET /api/users/:id
   * get user by id
   */
  router.get("/api/users/:id", (req: Request, res: Response) =>
    usersGetByIdController.run(req, res)
  );

  /**
   * PUT /api/users/:id
   * update user
   */
  router.put("/api/users/profile", (req: Request, res: Response) =>
    usersProfileController.run(req, res)
  );

  /**
   * GET /api/users/:id/products
   * get user and list of products
   */
  router.get("/api/users/:id/products", (req: Request, res: Response) =>
    usersGetWithProducts.run(req, res)
  );
};
