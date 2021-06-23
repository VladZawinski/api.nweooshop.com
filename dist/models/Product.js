"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const slugify_1 = __importDefault(require("slugify"));
const productSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String },
    slug: { type: String },
    _user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    _shop: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Shop" },
    uniqueId: { type: String },
    productImages: [
        {
            type: String,
        },
    ],
    tags: [{ type: String }],
    price: { type: String },
    estimatedPrice: { type: Number, required: true },
    delivery: { type: String },
    payment: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Payment" }],
    _category: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Category" },
    categoryId: { type: String },
}, { timestamps: true });
productSchema.pre("save", function save(next) {
    const product = this;
    product.uniqueId = nanoid_1.nanoid(6);
    product.slug = slugify_1.default(this.title, {
        replacement: "-",
        lower: true,
        strict: false,
    });
    next();
});
productSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
const Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
//# sourceMappingURL=Product.js.map