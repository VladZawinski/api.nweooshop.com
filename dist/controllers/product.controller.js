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
exports.shopProducts = exports.categoryProducts = exports.create = exports.detail = exports.latest = exports.index = void 0;
const Product_1 = __importDefault(require("../models/Product"));
/**
 * @route /api/products
 * @method GET
 * @description fetch products by custom limit
 */
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { limit } = req.query;
    yield Product_1.default.find()
        .populate("_user", "-email -password -userType -_id -createdAt -updatedAt -__v")
        .populate("_shop", "-_id -_user -createdAt -updatedAt -__v")
        .populate("_category", "-_id -updatedAt -createdAt -__v")
        .populate("payment", "-_id -updatedAt -createdAt -__v")
        .limit(limit)
        .sort({ createdAt: -1 })
        .then((products) => {
        return res.status(200).json({ success: true, data: products });
    })
        .catch((error) => {
        return res.status(500).json({ success: true, data: "Error" });
    });
});
exports.index = index;
/**
 * @route /api/products/latest?limit=5
 * @method GET
 * @description fetch latest products by created Date
 */
const latest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { limit } = req.query;
    let limitting = parseInt(limit);
    yield Product_1.default.find()
        .populate("_shop", "-_id -_user -createdAt -updatedAt -__v")
        .populate("_user", "-email -password -userType -_id -createdAt -updatedAt -__v")
        .populate("_category", "-_id -updatedAt -createdAt -__v")
        .populate("payment", "-_id -updatedAt -createdAt -__v")
        .limit(limitting || 8)
        .sort({ _id: -1 })
        .then((products) => {
        return res.status(200).json({ success: true, data: products || [] });
    })
        .catch((error) => {
        return res.status(500).json({ success: true, data: "Error" });
    });
});
exports.latest = latest;
/**
 * @route /api/products/:uniqueId
 * @method GET
 * @description fetch product detail by uniqueId
 */
const detail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { uniqueId } = req.params;
    yield Product_1.default.findOne({ uniqueId })
        .populate("_user", "-email -password -userType -_id -createdAt -updatedAt -__v")
        .populate("_shop", "-_id -_user -createdAt -updatedAt -__v")
        .populate("payment", "-updatedAt -createdAt -__v")
        .then((product) => {
        return res.status(200).json({ success: true, data: product });
    })
        .catch((error) => {
        return res.status(500).json({ success: true, data: "Error" });
    });
});
exports.detail = detail;
/**
 * @route /api/product
 * @method POST
 * @description create product
 */
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newProduct = new Product_1.default(req.body);
        yield newProduct.save();
        return res.status(200).json({ success: true, data: newProduct });
    }
    catch (error) {
        return res.status(500).json({ success: true, data: "Error" });
    }
});
exports.create = create;
/**
 * @route /api/products/category/:uniqueId?limit=5
 * @method GET
 * @description fetch products that related to request category uniqueId
 */
const categoryProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { limit } = req.query;
    let { uniqueId } = req.params;
    let limitting = parseInt(limit);
    yield Product_1.default.find({ categoryId: uniqueId })
        .populate("_shop", "-_id -_user -createdAt -updatedAt -__v")
        .populate("_user", "-email -password -userType -_id -createdAt -updatedAt -__v")
        .populate("_category", "-_id -updatedAt -createdAt -__v")
        .populate("payment", "-_id -updatedAt -createdAt -__v")
        .limit(limitting || 8)
        .sort({ _id: -1 })
        .then((products) => {
        return res.status(200).json({ success: true, data: products });
    })
        .catch((error) => {
        return res.status(500).json({ success: true, data: "Error" });
    });
});
exports.categoryProducts = categoryProducts;
/**
 * @route /api/products/shop/:id?limit=5
 * @method GET
 * @description fetch products that related to request shop uniqueId
 */
const shopProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { limit } = req.query;
    let { id } = req.params;
    let limitting = parseInt(limit);
    yield Product_1.default.find({ _shop: id })
        .populate("_shop", "-_id -_user -createdAt -updatedAt -__v")
        .populate("_user", "-email -password -userType -_id -createdAt -updatedAt -__v")
        .populate("_category", "-_id -updatedAt -createdAt -__v")
        .populate("payment", "-_id -updatedAt -createdAt -__v")
        .limit(limitting || 8)
        .sort({ _id: -1 })
        .then((products) => {
        return res.status(200).json({ success: true, data: products });
    })
        .catch((error) => {
        return res.status(500).json({ success: true, data: "Error" });
    });
});
exports.shopProducts = shopProducts;
//# sourceMappingURL=product.controller.js.map