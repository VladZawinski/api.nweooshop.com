// Controllers (route handlers)
import * as authController from "./controllers/auth.controller";
// import * as testController from "./controllers/test.controller";

import verifyToken from "./libs/verifyToken";
/**
 * Primary app routes.
 */

module.exports = function (app: any) {
  app.post("/api/register", authController.register);
  app.post("/api/authenticate", authController.authenticate);

  // app.get("/api/test", verifyToken, testController.index);
};
