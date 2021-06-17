import mongoose from "mongoose";
import { nanoid } from "nanoid";

export type CategoryDocument = mongoose.Document & {
  name: string;
  parent: string;
  path: string;
  uniqueId: string;
};

const categorySchema = new mongoose.Schema<CategoryDocument>(
  {
    name: { type: String, required: true, trim: true },
    parent: { type: String },
    uniqueId: { type: String },
    path: { type: String },
  },
  { timestamps: true }
);

categorySchema.pre("save", function save(next) {
  const category = this as CategoryDocument;

  category.uniqueId = nanoid(6);
  next();
});

const Category = mongoose.model<CategoryDocument>("Category", categorySchema);

export default Category;
