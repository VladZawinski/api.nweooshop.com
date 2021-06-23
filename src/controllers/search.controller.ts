import { Request, Response } from "express";
import Product from "../models/Product";

/**
 * @route /api/search
 * @method POST
 * @description search products
 */

export const search = async (req: Request, res: Response) => {
  await Product.find({
    $text: { $search: req.body.name },
  })
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((error) => {
      return res.status(500).json({ success: false, data: "Error" });
    });
};
