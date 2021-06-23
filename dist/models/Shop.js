"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const shopSchema = new mongoose_1.default.Schema({
    shopName: {
        type: String,
        trim: true,
        required: true,
    },
    shortBio: {
        type: String,
        trim: true,
    },
    slug: {
        type: String,
    },
    _user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    city: { type: String },
    state: { type: String },
    uniqueId: { type: String },
    shopProfile: { type: String },
    shopCoverPhoto: { type: String },
    phoneNumbers: [{ type: Array }],
}, { timestamps: true });
shopSchema.pre("save", function save(next) {
    const shop = this;
    shop.uniqueId = nanoid_1.nanoid(6);
    next();
});
shopSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
const Shop = mongoose_1.default.model("Shop", shopSchema);
exports.default = Shop;
//# sourceMappingURL=Shop.js.map