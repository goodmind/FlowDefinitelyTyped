declare module "express-routemap" {
  import type { Application } from "express";

  declare function displayRoutes(app: Application, filename?: string): void;

  declare module.exports: typeof displayRoutes;
}
