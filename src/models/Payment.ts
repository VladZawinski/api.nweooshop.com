import mongoose from "mongoose";
import { nanoid } from "nanoid";

export type PaymentDocument = mongoose.Document & {
  type: string;
  uniqueId: string;
};

const paymentSchema = new mongoose.Schema<PaymentDocument>(
  {
    type: {
      type: String,
      trim: true,
      required: true,
    },
    uniqueId: { type: String },
  },
  { timestamps: true }
);

paymentSchema.pre("save", function save(next) {
  const payment = this as PaymentDocument;

  payment.uniqueId = nanoid(6);
  next();
});

const Payment = mongoose.model<PaymentDocument>("Payment", paymentSchema);

export default Payment;
