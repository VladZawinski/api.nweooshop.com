"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const paymentSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        trim: true,
        required: true,
    },
    uniqueId: { type: String },
}, { timestamps: true });
paymentSchema.pre("save", function save(next) {
    const payment = this;
    payment.uniqueId = nanoid_1.nanoid(6);
    next();
});
const Payment = mongoose_1.default.model("Payment", paymentSchema);
exports.default = Payment;
//# sourceMappingURL=Payment.js.map