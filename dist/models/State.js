"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const stateSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        trim: true,
    },
}, { timestamps: true, _id: false });
const State = mongoose_1.default.model("State", stateSchema);
exports.default = State;
//# sourceMappingURL=State.js.map