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
exports.fetchCities = exports.index = void 0;
const State_1 = __importDefault(require("../models/State"));
const City_1 = __importDefault(require("../models/City"));
/**
 * @route /api/states
 * @method GET
 * @description fetch states
 */
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield State_1.default.find()
        .then((data) => {
        return res.status(200).json({ success: true, data });
    })
        .catch((err) => {
        return res
            .status(500)
            .json({ success: false, data: "Error while fetching states" });
    });
});
exports.index = index;
/**
 * @route /api/cities/:stateId
 * @method GET
 * @description fetch cities that belong to state
 */
const fetchCities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { stateId } = req.params;
    yield City_1.default.find({ state_id: stateId })
        .then((data) => {
        return res.status(200).json({ success: true, data });
    })
        .catch((err) => {
        return res
            .status(500)
            .json({ success: false, data: "Error while fetching states" });
    });
});
exports.fetchCities = fetchCities;
//# sourceMappingURL=state.controller.js.map