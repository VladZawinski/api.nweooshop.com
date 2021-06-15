// Controllers (route handlers)
import * as authController from "./controllers/auth.controller";

/**
 * Primary app routes.
 */

module.exports = function (app: any) {
  app.post("/api/register", authController.register);
  app.post("/api/authenticate", authController.authenticate);
};
