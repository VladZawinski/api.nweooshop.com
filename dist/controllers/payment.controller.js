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
exports.destroy = exports.update = exports.create = exports.index = void 0;
const Payment_1 = __importDefault(require("../models/Payment"));
/**
 * @route /api/payments
 * @method GET
 * @description fetch payments
 */
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Payment_1.default.find()
        .then((payments) => {
        return res.status(200).json({ success: true, data: payments });
    })
        .catch(() => {
        return res.status(500).json({ success: false, data: "Error" });
    });
});
exports.index = index;
/**
 * @route /api/payment
 * @method POST
 * @description create new a payment type
 */
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newPaymentType = new Payment_1.default(req.body);
        yield newPaymentType.save();
        return res.status(200).json({ success: true, data: newPaymentType });
    }
    catch (error) {
        return res
            .status(500)
            .json({ success: false, data: "Error while creating payment" });
    }
});
exports.create = create;
/**
 * @route /api/payment/:uniqueId
 * @method UPDATE
 * @description update existed payment
 */
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { uniqueId } = req.params;
    let findPaymentType = yield Payment_1.default.findOne({ uniqueId });
    if (findPaymentType) {
        yield Payment_1.default.findOneAndUpdate({ uniqueId }, {
            $set: Object.assign({}, req.body),
        }, { new: true })
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
});
exports.update = update;
/**
 * @route /api/payment/:uniqueId
 * @method DELETE
 * @description delete a payment
 */
const destroy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { uniqueId } = req.params;
    yield Payment_1.default.findOneAndRemove({ uniqueId })
        .then(() => {
        return res
            .status(200)
            .json({ success: true, data: "Payment is deleted" });
    })
        .catch(() => {
        return res.status(500).json({ success: false, data: "Error" });
    });
});
exports.destroy = destroy;
//# sourceMappingURL=payment.controller.js.map