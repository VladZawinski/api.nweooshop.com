import { Request, Response } from "express";
import User from "../models/User";
import UserInfo from "../models/UserInfo";

/**
 * @route /api/auth/user
 * @method GET
 * @description fetch current User
 */

export const authUser = async (req: Request | any, res: Response) => {
  try {
    if (req.credentials)
      return res.status(200).json({ success: true, data: req.credentials });
  } catch (error) {
    return res.status(400).json({ success: false, data: "Invalid Token!" });
  }
};
