"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const categorySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, trim: true },
    parent: { type: String },
    uniqueId: { type: String },
    path: { type: String },
}, { timestamps: true });
categorySchema.pre("save", function save(next) {
    const category = this;
    category.uniqueId = nanoid_1.nanoid(6);
    next();
});
const Category = mongoose_1.default.model("Category", categorySchema);
exports.default = Category;
//# sourceMappingURL=Category.js.map