"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CitySchema = new mongoose_1.default.Schema({
    state_id: {
        type: Number,
    },
    name: {
        type: String,
        trim: true,
    },
}, { timestamps: true, _id: false });
const City = mongoose_1.default.model("City", CitySchema);
exports.default = City;
//# sourceMappingURL=City.js.map