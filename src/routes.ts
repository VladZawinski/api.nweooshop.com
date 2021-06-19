// Controllers (route handlers)
import * as authController from "./controllers/auth.controller";
import * as shopController from "./controllers/shop.controller";
import * as productController from "./controllers/product.controller";
import * as categoryController from "./controllers/category.controller";
import * as paymentController from "./controllers/payment.controller";
import verifyToken from "./libs/verifyToken";

/**
 * Primary app routes.
 */
module.exports = function (app: any) {
  app.post("/api/register", authController.register);
  app.post("/api/authenticate", authController.authenticate);

  /* shop */
  app.get("/api/shops", verifyToken, shopController.index);
  app.get("/api/shops/:uniqueId", verifyToken, shopController.detail);
  /* shop */

  /* Product */
  app.get("/api/products", verifyToken, productController.index);
  app.get("/api/products/latest", verifyToken, productController.latest);
  app.get("/api/products/:uniqueId", verifyToken, productController.detail);
  app.post("/api/product", verifyToken, productController.create);
  app.get(
    "/api/products/category/:uniqueId",
    verifyToken,
    productController.categoryProducts
  );
  /* Product */

  /* Payments */
  app.get("/api/payments", verifyToken, paymentController.index);
  app.post("/api/payment", verifyToken, paymentController.create);
  app.put("/api/payments/:uniqueId", verifyToken, paymentController.update);
  app.delete("/api/payments/:uniqueId", verifyToken, paymentController.destroy);
  /* Payments */

  /* Category */
  app.post("/api/category", verifyToken, categoryController.create);
  app.get(
    "/api/parent/categories",
    verifyToken,
    categoryController.parentCategory
  );
  /* Category */
};
