declare module "express-cluster" {
  declare interface Config {
    count?: number;
    respawn?: boolean;
    verbose?: boolean;
    workerListener?: () => void;
    outputStream?: NodeJS.WritableStream;
  }
  declare type WorkerFunction = (worker: cluster.Worker) => void;
  declare interface Cluster {
    (fn: WorkerFunction, config: Config): void;
    (config: Config, fn: WorkerFunction): void;
  }
  declare var c: Cluster;
  declare module.exports: typeof c;
}
