// Controllers (route handlers)
import * as authController from "./controllers/auth.controller";
import * as shopController from "./controllers/shop.controller";
import * as productController from "./controllers/product.controller";

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
  app.get("/api/products/lastest", verifyToken, productController.lastest);
  app.get("/api/products/:uniqueId", verifyToken, productController.detail);
  app.post("/api/product", verifyToken, productController.create);
  /* Product */
};
