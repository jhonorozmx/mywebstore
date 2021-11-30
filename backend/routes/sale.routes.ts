import { Router, Request, Response } from "express";
import {
  salesCreateController,
  salesGetByIdController,
  salesGetByUserController,
} from "../controllers"; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /api/sales/
   * create a sale
   */
  router.post("/api/sales/", (req: Request, res: Response) =>
    salesCreateController.run(req, res)
  );

  /**
   * GET /api/sales/:id
   * get order by id
   */
  router.get("/api/sales/:id", (req: Request, res: Response) =>
    salesGetByIdController.run(req, res)
  );

  /**
   * GET /api/sales/myorders
   * get order by user
   */
  router.get("/api/sales/myorders/:id", (req: Request, res: Response) =>
    salesGetByUserController.run(req, res)
  );
};
