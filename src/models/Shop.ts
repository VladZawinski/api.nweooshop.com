import mongoose from "mongoose";
import { UserDocument } from "./User";

export type ShopDocument = mongoose.Document & {
  shopName: string;
  shortBio: string;
  slug: string;
  _user: UserDocument;
  city: string;
  state: string;
  shopProfile: string;
  shopCoverPhoto: string;
  phoneNumbers: string[];
};

const shopSchema = new mongoose.Schema<ShopDocument>(
  {
    shopName: {
      type: String,
      trim: true,
      required: true,
    },
    shortBio: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
    },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    city: { type: String },
    state: { type: String },
    shopProfile: { type: String },
    shopCoverPhoto: { type: String },
    phoneNumbers: { type: Array },
  },
  { timestamps: true }
);

const Shop = mongoose.model<ShopDocument>("Shop", shopSchema);

export default Shop;
