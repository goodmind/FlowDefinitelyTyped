declare module "shelljs-exec-proxy" {
  import typeof * as shelljs from "shelljs";

  declare interface Exec {
    (...command: string[]): shelljs.ExecOutputReturnValue;
    [k: string]: Exec;
  }
  declare type ShelljsExecProxy = {
    [k: string]: Exec
  } & typeof shelljs;
  declare var shelljsExecProxy: ShelljsExecProxy;
  declare module.exports: typeof shelljsExecProxy;
}
