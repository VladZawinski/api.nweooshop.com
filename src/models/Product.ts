import mongoose from "mongoose";
import { UserDocument } from "./User";
import { ShopDocument } from "./Shop";
import { CategoryDocument } from "./Category";
import { nanoid } from "nanoid";
import slugify from "slugify";

export type ProductDocument = mongoose.Document & {
  title: string;
  description: string;
  slug: string;
  _user: UserDocument;
  _shop: ShopDocument;
  uniqueId: string;
  productImages: string[];
  tags: string[];
  price: string;
  estimatedPrice: number;
  delivery: string;
  payment: string;
  _category: CategoryDocument;
  categoryName: string;
};

const productSchema = new mongoose.Schema<ProductDocument>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String },
    slug: { type: String },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    _shop: { type: mongoose.Schema.Types.ObjectId, ref: "Shop" },
    uniqueId: { type: String },
    productImages: [
      {
        type: String,
      },
    ],
    tags: [{ type: String }],
    price: { type: String },
    estimatedPrice: { type: Number, required: true },
    delivery: { type: String },
    payment: { type: String },
    _category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    categoryName: { type: String },
  },
  { timestamps: true }
);

productSchema.pre("save", function save(next) {
  const product = this as ProductDocument;

  product.uniqueId = nanoid(6);
  product.slug = slugify(this.title, {
    replacement: "-",
    lower: true,
    strict: false,
  });
  next();
});

const Product = mongoose.model<ProductDocument>("Product", productSchema);

export default Product;
