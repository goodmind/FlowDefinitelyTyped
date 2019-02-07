declare module "stoppable" {
  import type { Server } from "http";

  declare type stoppable$StoppableServer = {
    stop(callback?: (e: Error, gracefully: boolean) => void): void
  } & Server;

  declare function stoppable(
    server: Server,
    grace?: number
  ): stoppable$stoppable$StoppableServer;

  declare module.exports: typeof stoppable;
}
