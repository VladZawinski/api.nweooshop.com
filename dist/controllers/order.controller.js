"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const Order_1 = __importDefault(require("../models/Order"));
/**
 * @route /api/order
 * @method POST
 * @description create order from buyer to seller
 */
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { credentials } = req;
    const { shopId, transaction, productUniqueId, isDigitalCash, remarks, itemPrice, itemCount, productName, } = req.body;
    try {
        let newOrder = new Order_1.default({
            shopId,
            transaction,
            productName,
            productUniqueId,
            isDigitalCash,
            paymentStatus: isDigitalCash ? 1 : 0,
            itemPrice,
            itemCount,
            customer: credentials._id,
            remarks,
        });
        yield newOrder.save();
        return res.status(200).json({ success: true, data: newOrder });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: "Error" });
    }
});
exports.create = create;
//# sourceMappingURL=order.controller.js.map