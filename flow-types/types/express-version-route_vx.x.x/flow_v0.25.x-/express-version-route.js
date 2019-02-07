declare module "express-version-route" {
  import type { Handler } from "express";

  declare export function route(versionsMap: Map<string, Handler>): Handler;
}
