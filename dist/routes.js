"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Controllers (route handlers)
const authController = __importStar(require("./controllers/auth.controller"));
const userController = __importStar(require("./controllers/user.controller"));
const shopController = __importStar(require("./controllers/shop.controller"));
const productController = __importStar(require("./controllers/product.controller"));
const categoryController = __importStar(require("./controllers/category.controller"));
const paymentController = __importStar(require("./controllers/payment.controller"));
const orderController = __importStar(require("./controllers/order.controller"));
const stateController = __importStar(require("./controllers/state.controller"));
const verifyToken_1 = __importDefault(require("./libs/verifyToken"));
/**
 * Primary app routes.
 */
module.exports = function (app) {
    app.post("/api/register", authController.register);
    app.post("/api/authenticate", authController.authenticate);
    app.post("/api/buyer/register", authController.buyerRegister);
    app.post("/api/buyer/login", authController.buyerLogin);
    app.get("/api/auth/user", verifyToken_1.default, userController.authUser);
    /* shop */
    app.get("/api/shops", verifyToken_1.default, shopController.index);
    app.get("/api/shops/:uniqueId", verifyToken_1.default, shopController.detail);
    /* shop */
    /* Product */
    app.get("/api/products", verifyToken_1.default, productController.index);
    app.get("/api/products/latest", verifyToken_1.default, productController.latest);
    app.get("/api/products/:uniqueId", verifyToken_1.default, productController.detail);
    app.post("/api/product", verifyToken_1.default, productController.create);
    app.get("/api/products/category/:uniqueId", verifyToken_1.default, productController.categoryProducts);
    app.get("/api/products/shop/:id", verifyToken_1.default, productController.shopProducts);
    /* Product */
    /* Payments */
    app.get("/api/payments", verifyToken_1.default, paymentController.index);
    app.post("/api/payment", verifyToken_1.default, paymentController.create);
    app.put("/api/payments/:uniqueId", verifyToken_1.default, paymentController.update);
    app.delete("/api/payments/:uniqueId", verifyToken_1.default, paymentController.destroy);
    /* Payments */
    /* Category */
    app.post("/api/category", verifyToken_1.default, categoryController.create);
    app.get("/api/parent/categories", verifyToken_1.default, categoryController.parentCategory);
    /* Category */
    /* Order */
    app.post("/api/order", verifyToken_1.default, orderController.create);
    app.get("/api/buyer/:id/orders", verifyToken_1.default, userController.getBuyerOrders);
    /* Order */
    app.get("/api/states", stateController.index);
    app.get("/api/cities/:stateId", stateController.fetchCities);
};
//# sourceMappingURL=routes.js.map