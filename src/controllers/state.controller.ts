import { Request, Response } from "express";
import State from "../models/State";

/**
 * @route /api/states
 * @method GET
 * @description fetch states
 */

export const index = async (req: Request, res: Response) => {
  await State.find()
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ success: false, data: "Error while fetching states" });
    });
};
