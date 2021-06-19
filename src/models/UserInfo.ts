import mongoose from "mongoose";
import { UserDocument } from "./User";

export type UserInfoDocument = mongoose.Document & {
  user: UserDocument;
  address: string;
  secondaryAddress: string;
  phoneNumbers: string[];
  isEmailVerify: boolean;
};

const userInfoSchema = new mongoose.Schema<UserInfoDocument>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    secondaryAddress: {
      type: String,
    },
    phoneNumbers: [{ type: String, required: true }],
    isEmailVerify: { type: Boolean, default: false },
  },
  { timestamps: true }
);


const UserInfo = mongoose.model<UserInfoDocument>("UserInfo", userInfoSchema);

export default UserInfo;
