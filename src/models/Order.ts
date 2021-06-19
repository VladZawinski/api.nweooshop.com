import mongoose from "mongoose";
import { PaymentDocument } from "./Payment";
import { UserDocument } from "./User";
import { ProductDocument } from "./Product";
import { nanoid } from "nanoid";

export type OrderDocument = mongoose.Document & {
  orderId: string;
  paymentMethod: PaymentDocument;
  status: string; // 'pending', 'confirmed', 'processing', 'deliver', 'done'
  customer: UserDocument;
  products: ProductDocument;
  uniqueId: string;
};

const orderSchema = new mongoose.Schema<OrderDocument>(
  {
    orderId: { type: String },
    paymentMethod: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
    status: { type: String, default: "pending" },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
    uniqueId: { type: String },
  },
  { timestamps: true }
);

orderSchema.pre("save", function save(next) {
  const order = this as OrderDocument;

  order.uniqueId = nanoid(6);
  next();
});

const Order = mongoose.model<OrderDocument>("Order", orderSchema);

export default Order;
