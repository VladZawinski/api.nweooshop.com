// Controllers (route handlers)
import * as testController from "./controllers/test.controller";

/**
 * Primary app routes.
 */

module.exports = function (app: any) {
  app.get("/", testController.index);
};
