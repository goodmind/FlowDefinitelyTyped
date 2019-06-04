declare module "rebind-host" {
  import type { Handler } from "express";

  declare function createRebindHost(forceHost?: string): Handler;

  declare export default typeof createRebindHost;
}
