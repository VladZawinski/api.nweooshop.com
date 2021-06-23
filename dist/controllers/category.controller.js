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
exports.parentCategory = exports.create = void 0;
const Category_1 = __importDefault(require("../models/Category"));
/**
 * @route /api/category
 * @method POST
 * @description create new category
 */
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newCategory = new Category_1.default(req.body);
        yield newCategory.save();
        return res.status(200).json({ success: true, data: newCategory });
    }
    catch (error) {
        return res
            .status(500)
            .json({ success: false, data: "Error while creating category" });
    }
});
exports.create = create;
/**
 * @route /api/parent/categories
 * @method GET
 * @description fetch parent categories
 */
const parentCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Category_1.default.find({ parent: "/" })
        .then((data) => {
        return res.status(200).json({ success: true, data });
    })
        .catch((err) => {
        return res
            .status(500)
            .json({ success: false, data: "Error while creating category" });
    });
});
exports.parentCategory = parentCategory;
//# sourceMappingURL=category.controller.js.map