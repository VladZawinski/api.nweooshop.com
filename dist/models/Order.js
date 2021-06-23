"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const orderSchema = new mongoose_1.default.Schema({
    shopId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Shop" },
    isDigitalCash: { type: Boolean, required: true },
    transaction: {
        paymentType: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Payment" },
        transactionId: { type: String },
        transactionUsername: { type: String },
    },
    productName: { type: String, required: true },
    paymentStatus: { type: Number },
    productUniqueId: { type: String, required: true },
    itemPrice: { type: Number, required: true },
    itemCount: { type: Number, required: true },
    status: { type: String, default: "pending" },
    customer: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    remarks: { type: String },
}, { timestamps: true });
orderSchema.pre("save", function save(next) {
    const order = this;
    order.orderId = `NS_${nanoid_1.nanoid(6)}`;
    next();
});
const Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
//# sourceMappingURL=Order.js.map