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
exports.getBuyerOrders = exports.authUser = void 0;
const Order_1 = __importDefault(require("../models/Order"));
/**
 * @route /api/auth/user
 * @method GET
 * @description fetch current User
 */
const authUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.credentials)
            return res.status(200).json({ success: true, data: req.credentials });
    }
    catch (error) {
        return res.status(400).json({ success: false, data: "Invalid Token!" });
    }
});
exports.authUser = authUser;
/**
 * @route /api/buyer/:id/orders
 * @method GET
 * @description fetch auth user's order list
 */
const getBuyerOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Order_1.default.find({ customer: id })
        .populate("customer", "-password -userType -createdAt -updatedAt -__v")
        .populate("shop")
        .populate("transaction.paymentType", "-_id -createdAt -updatedAt -__v")
        .then((data) => {
        return res.status(200).json({ success: true, data });
    })
        .catch((error) => {
        return res
            .status(500)
            .json({ success: false, data: "Error while fetching orders" });
    });
});
exports.getBuyerOrders = getBuyerOrders;
//# sourceMappingURL=user.controller.js.map