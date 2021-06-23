"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userInfoSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    secondaryAddress: {
        type: String,
    },
    phoneNumbers: [{ type: String, required: true }],
    isEmailVerify: { type: Boolean, default: false },
}, { timestamps: true });
const UserInfo = mongoose_1.default.model("UserInfo", userInfoSchema);
exports.default = UserInfo;
//# sourceMappingURL=UserInfo.js.map