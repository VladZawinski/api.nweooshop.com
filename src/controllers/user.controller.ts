import { Request, Response } from "express";
import User from "../models/User";
import UserInfo from "../models/UserInfo";

/**
 * @route /api/user/:id
 * @method GET
 * @description fetch user detail by object id
 */

export const detail = async (req: Request, res: Response) => {
  let { id } = req.params as any;

  try {
    let findUser = await User.findById(id);

    if (!findUser)
      return res.status(404).json({ success: false, data: "User Not Found" });

    let getUserInfo = await UserInfo.findOne({ user: findUser?._id });
    return res.status(200).json({ success: true, data: getUserInfo });
  } catch (error) {
    return res.status(500).json({ success: false, data: "Error" });
  }
};
