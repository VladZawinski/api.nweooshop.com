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
exports.detail = exports.index = void 0;
const Shop_1 = __importDefault(require("../models/Shop"));
/**
 * @route /api/shops
 * @method GET
 * @description fetch shops by custom limit
 */
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { limit } = req.query;
    let limitting = parseInt(limit);
    yield Shop_1.default.find()
        .limit(limitting || 10)
        .sort({ createdAt: -1 })
        .then((shops) => {
        return res.status(200).json({ success: true, data: shops });
    })
        .catch((error) => {
        return res.status(500).json({ success: false, data: "Error" });
    });
});
exports.index = index;
/**
 * @route /api/shops/:uniqueId
 * @method GET
 * @description fetch shop detail by uniqueId
 */
const detail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { uniqueId } = req.params;
    yield Shop_1.default.findOne({ uniqueId })
        .then((shop) => {
        return res.status(200).json({ success: true, data: shop });
    })
        .catch((error) => {
        return res.status(500).json({ success: false, data: "Error" });
    });
});
exports.detail = detail;
//# sourceMappingURL=shop.controller.js.map