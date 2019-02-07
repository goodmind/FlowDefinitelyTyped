declare module "express-route-fs" {
  /**
   * Sets up file system-based routing in Express.
   * @param {Object} app Express application object.
   * @param {Object[]} options Options for setting up routes.
   */
  declare function routeFs(app: any, options?: any): void;

  declare module.exports: typeof routeFs;
}
