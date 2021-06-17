import { Request, Response } from "express";
import Category from "../models/Category";

/**
 * @route /api/category
 * @method POST
 * @description create new category
 */

export const create = async (req: Request, res: Response) => {
  try {
    let newCategory = new Category(req.body);

    await newCategory.save();

    return res.status(200).json({ success: true, data: newCategory });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, data: "Error while creating category" });
  }
};
