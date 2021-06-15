import { Request, Response } from "express";

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
  let items = [
    {
      id: 1,
      name: 'Test',
    },
    {
      id: 2,
      name: 'Now, u see me',
    },
  ]
  return res.status(200).json({ success: true, data: items });
};
