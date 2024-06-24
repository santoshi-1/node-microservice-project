import express, { Request, Response, NextFunction } from "express";
const catalogRouter = express.Router();

catalogRouter.post(
  "/product",
  async (_req: Request, _res: Response, _next: NextFunction) => {
    return _res.status;
  }
);

export default catalogRouter;
