import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
/**
 * POST /api/register
 * @route create a new user
 */
export const register = async (req: Request, res: Response) => {
  try {
    let newUser = new User(req.body);
    await newUser.save();
    return res.status(200).json({ success: true, data: newUser });
  } catch (error) {
    return res.status(500).json({ success: false, data: error });
  }
};

/**
 * POST /api/authenticate
 * @route log in api
 */
export const authenticate = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).populate("-_id -__v");

  if (!user)
    return res
      .status(404)
      .json({ success: false, data: "User does not exist" });

  if (user) {
    bcrypt.compare(
      password,
      user.password,
      async (err: mongoose.Error, isMatch: boolean) => {
        if (!isMatch) {
          return res
            .status(401)
            .json({ success: false, data: "Email or Password is incorrect" });
        }
        if (isMatch) {
          var token = jwt.sign(
            { credentials: `${user._id}.${user.fullName}.${user.email}` },
            "API_VERSION_0_1",
            {}
          );

          const credentials = {
            id: user._id,
            fullname: user.fullName,
            email: user.email,
            token: token,
          };
          return res.status(200).json({ success: true, data: credentials });
        }
      }
    );
  } else {
    return res
      .status(401)
      .json({ success: false, data: "Email or Password is incorrect" });
  }
};
