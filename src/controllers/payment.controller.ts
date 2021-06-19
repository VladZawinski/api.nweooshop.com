import { Request, Response } from "express";
import Payment from "../models/Payment";

/**
 * @route /api/payments
 * @method GET
 * @description fetch payments
 */

export const index = async (req: Request, res: Response) => {
  await Payment.find()
    .then((payments) => {
      return res.status(200).json({ success: true, data: payments });
    })
    .catch(() => {
      return res.status(500).json({ success: false, data: "Error" });
    });
};

/**
 * @route /api/payment
 * @method POST
 * @description create new a payment type
 */

export const create = async (req: Request, res: Response) => {
  try {
    let newPaymentType = new Payment(req.body);

    await newPaymentType.save();

    return res.status(200).json({ success: true, data: newPaymentType });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, data: "Error while creating payment" });
  }
};

/**
 * @route /api/payment/:uniqueId
 * @method UPDATE
 * @description update existed payment
 */

export const update = async (req: Request, res: Response) => {
  let { uniqueId } = req.params as any;

  let findPaymentType = await Payment.findOne({ uniqueId });

  if (findPaymentType) {
    await Payment.findOneAndUpdate(
      { uniqueId },
      {
        $set: {
          ...req.body,
        },
      },
      { new: true }
    )
      .then(() => {
        return res
          .status(200)
          .json({ success: true, data: "Payment updated successfully" });
      })
      .catch((error) => {
        return res.status(500).json({ success: false, data: error });
      });
  }

  return res.status(404).json({ success: false, data: "Payment not found" });
};

/**
 * @route /api/payment/:uniqueId
 * @method DELETE
 * @description delete a payment
 */

export const destroy = async (req: Request, res: Response) => {
  let { uniqueId } = req.params as any;

  await Payment.findOneAndRemove({ uniqueId })
    .then(() => {
      return res
        .status(200)
        .json({ success: true, data: "Payment is deleted" });
    })
    .catch(() => {
      return res.status(500).json({ success: false, data: "Error" });
    });
};
