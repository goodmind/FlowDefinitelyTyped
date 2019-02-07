declare module "sticky-cluster" {
  import typeof * as http from "http";

  declare type stickyCluster$InitializeFn = (
    callback: stickyCluster$Callback
  ) => void;

  declare type stickyCluster$Callback = (server: http.Server) => void;

  declare interface stickyCluster$Options {
    concurrency?: number;
    port?: number;
    debug?: boolean;
    prefix?: string;
    env?: (
      index: number
    ) => {
      stickycluster_worker_index: number
    };
    hardShutdownDelay?: number;
    errorHandler?: (err: any) => void;
  }
  declare function stickyCluster(
    callback: stickyCluster$stickyCluster$InitializeFn,
    options?: stickyCluster$stickyCluster$Options
  ): void;

  declare module.exports: typeof stickyCluster;
}
