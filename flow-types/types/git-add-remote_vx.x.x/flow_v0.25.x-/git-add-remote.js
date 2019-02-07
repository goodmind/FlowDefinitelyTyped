declare module "git-add-remote" {
  import type { ExecException } from "child_process";

  declare module.exports: typeof prepare;

  declare function prepare(cwd?: string): prepare$prepare$AddRemote;

  declare interface prepare$AddRemote {
    (
      name: string,
      url: string,
      callback: (
        error: ExecException | null,
        stdout: string,
        stderr: string
      ) => void
    ): void;
    sync(name: string, url: string): void;
  }
}
