declare module "cross-spawn" {
  import typeof * as child_process from "child_process";

  declare function spawn(
    command: string,
    args?: string[],
    options?: child_process.SpawnOptions
  ): child_process.ChildProcess;

  declare var npm$namespace$spawn: {
    sync: typeof spawn$sync
  };
  declare var spawn$sync: typeof undefined;
  declare module.exports: typeof spawn;
}
