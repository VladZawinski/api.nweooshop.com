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
exports.buyerLogin = exports.buyerRegister = exports.authenticate = exports.register = void 0;
const User_1 = __importDefault(require("../models/User"));
const UserInfo_1 = __importDefault(require("../models/UserInfo"));
const Shop_1 = __importDefault(require("../models/Shop"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const slugify_1 = __importDefault(require("slugify"));
require("dotenv").config();
/**
 * @route /api/register
 * @method POST
 * @description create a new user
 */
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { shopName, city, state } = req.body;
    try {
        let newUser = new User_1.default(req.body);
        yield newUser.save();
        if (((_a = newUser === null || newUser === void 0 ? void 0 : newUser.userType) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "seller") {
            let newShop = new Shop_1.default({
                shopName,
                city,
                state,
                slug: slugify_1.default(shopName, {
                    replacement: "-",
                    lower: true,
                    strict: false,
                }),
                _user: newUser === null || newUser === void 0 ? void 0 : newUser._id,
            });
            yield newShop.save();
        }
        newUser;
        return res.status(200).json({ success: true, data: newUser });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error });
    }
});
exports.register = register;
/**
 * @route /api/authenticate
 * @method POST
 * @description login api for user
 */
const authenticate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.default.findOne({ email }).populate("-_id -__v");
    if (!user)
        return res
            .status(404)
            .json({ success: false, data: "User does not exist" });
    if (user) {
        bcrypt_1.default.compare(password, user.password, (err, isMatch) => __awaiter(void 0, void 0, void 0, function* () {
            if (!isMatch) {
                return res
                    .status(401)
                    .json({ success: false, data: "Email or Password is incorrect" });
            }
            if (isMatch) {
                var token = jsonwebtoken_1.default.sign({ credentials: `${user._id}.${user.fullName}.${user.email}` }, process.env.jwtSecret, {});
                let getUserInfo = yield UserInfo_1.default.findOne({ user: user._id });
                const credentials = {
                    _id: user._id,
                    fullname: user.fullName,
                    email: user.email,
                    city: getUserInfo === null || getUserInfo === void 0 ? void 0 : getUserInfo.city,
                    state: getUserInfo === null || getUserInfo === void 0 ? void 0 : getUserInfo.state,
                    address: getUserInfo === null || getUserInfo === void 0 ? void 0 : getUserInfo.address,
                    type: user.userType,
                    phoneNumbers: getUserInfo === null || getUserInfo === void 0 ? void 0 : getUserInfo.phoneNumbers,
                    token: token,
                };
                return res.status(200).json({ success: true, data: credentials });
            }
        }));
    }
    else {
        return res
            .status(401)
            .json({ success: false, data: "Email or Password is incorrect" });
    }
});
exports.authenticate = authenticate;
/**
 * @route /api/buyer/register
 * @method POST
 * @description create a new buyer account
 */
const buyerRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password, city, state, address, secondaryAddress, phoneNumbers, } = req.body;
    try {
        let newBuyer = new User_1.default({
            fullName,
            email,
            password,
            userType: "buyer",
        });
        yield newBuyer.save();
        if (newBuyer) {
            let saveUserInfo = new UserInfo_1.default({
                user: newBuyer === null || newBuyer === void 0 ? void 0 : newBuyer._id,
                city,
                state,
                address,
                secondaryAddress: secondaryAddress || "",
                phoneNumbers,
                isEmailVerify: false,
            });
            yield saveUserInfo.save();
            if (saveUserInfo) {
                var token = jsonwebtoken_1.default.sign({
                    credentials: {
                        _id: newBuyer._id,
                        fullname: newBuyer.fullName,
                        email: newBuyer.email,
                        city: saveUserInfo.city,
                        state: saveUserInfo.state,
                        address: saveUserInfo === null || saveUserInfo === void 0 ? void 0 : saveUserInfo.address,
                        phoneNumbers: saveUserInfo === null || saveUserInfo === void 0 ? void 0 : saveUserInfo.phoneNumbers,
                    },
                }, process.env.jwtSecret, {});
                return res.status(200).json({ success: true, data: token });
            }
            return res.status(500).json({
                success: false,
                data: "There was en error while creating your account",
            });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error });
    }
});
exports.buyerRegister = buyerRegister;
/**
 * @route /api/buyer/login
 * @method POST
 * @description authenticate buyer account
 */
const buyerLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.default.findOne({ email }).populate("-__v");
    if (!user)
        return res
            .status(404)
            .json({ success: false, data: "User does not exist" });
    if (user) {
        bcrypt_1.default.compare(password, user.password, (err, isMatch) => __awaiter(void 0, void 0, void 0, function* () {
            if (!isMatch) {
                return res
                    .status(401)
                    .json({ success: false, data: "Email or Password is incorrect" });
            }
            if (isMatch) {
                let findUserInfo = yield UserInfo_1.default.findOne({ user: user === null || user === void 0 ? void 0 : user._id });
                var token = jsonwebtoken_1.default.sign({
                    credentials: {
                        _id: user._id,
                        fullname: user.fullName,
                        email: user.email,
                        city: findUserInfo === null || findUserInfo === void 0 ? void 0 : findUserInfo.city,
                        state: findUserInfo === null || findUserInfo === void 0 ? void 0 : findUserInfo.state,
                        address: findUserInfo === null || findUserInfo === void 0 ? void 0 : findUserInfo.address,
                        phoneNumbers: findUserInfo === null || findUserInfo === void 0 ? void 0 : findUserInfo.phoneNumbers,
                    },
                }, process.env.jwtSecret, {});
                return res.status(200).json({ success: true, data: token });
            }
        }));
    }
    else {
        return res
            .status(401)
            .json({ success: false, data: "Email or Password is incorrect" });
    }
});
exports.buyerLogin = buyerLogin;
//# sourceMappingURL=auth.controller.js.map