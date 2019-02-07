declare module "list-git-remotes" {
  import type { ExecException, ExecSyncOptions } from "child_process";

  declare module.exports: typeof listGitRemotes;

  declare function listGitRemotes(
    callback: listGitRemotes$listGitRemotes$Callback
  ): void;

  declare function listGitRemotes(
    cwd: string,
    callback: listGitRemotes$listGitRemotes$Callback
  ): void;

  declare var npm$namespace$listGitRemotes: {
    sync: typeof listGitRemotes$sync
  };
  declare function listGitRemotes$sync(
    cwd?: string,
    options?: ExecSyncOptions
  ): listGitRemotes$Remotes;

  declare function listGitRemotes$sync(
    options: ExecSyncOptions
  ): listGitRemotes$Remotes;

  declare type listGitRemotes$Callback = (
    err: ExecException | null,
    remotes: listGitRemotes$Remotes,
    stderr?: string
  ) => void;

  declare interface listGitRemotes$Remotes {
    [key: string]: string;
  }
}
