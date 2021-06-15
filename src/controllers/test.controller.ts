import { Request, Response } from "express";

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
  return res.status(200).json({ success: true, data: "Welcome" });
};
