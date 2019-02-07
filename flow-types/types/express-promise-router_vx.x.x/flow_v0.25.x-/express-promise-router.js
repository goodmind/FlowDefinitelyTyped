declare module "express-promise-router" {
  import type { Router } from "express";

  /**
   * A simple wrapper for Express 4's Router that allows middleware to return
   * promises. If the promise is rejected, `express-promise-router` will call next
   * with the reason
   */
  declare var PromiseRouter: typeof Router;
  declare module.exports: typeof PromiseRouter;
}
