declare module "sc-hot-reboot" {
  import type { WatchOptions } from "chokidar";

  declare export function attach(
    scMasterInstance: SocketCluster,
    options?: WatchOptions
  ): void;
}
