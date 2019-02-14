declare module "gfc" {
  import type {
    ExecOptions,
    ExecException,
    ExecSyncOptions
  } from "child_process";

  declare export default typeof gitFirstCommit;

  declare function gitFirstCommit(
    options?: gitFirstCommit$Options<gitFirstCommit$ExecOptionsWithEncoding>
  ): Promise<{
    stdout: string | Buffer,
    stderr: string | Buffer
  }>;

  declare function gitFirstCommit(
    cwd: string,
    options?: gitFirstCommit$Options<gitFirstCommit$ExecOptionsWithEncoding>
  ): Promise<{
    stdout: string | Buffer,
    stderr: string | Buffer
  }>;

  declare function gitFirstCommit(
    cwd: string,
    callback: (
      error: ExecException | null,
      stdout: string | Buffer,
      stderr: string | Buffer
    ) => void
  ): void;

  declare function gitFirstCommit(
    cwd: string,
    options: gitFirstCommit$Options<gitFirstCommit$ExecOptionsWithEncoding>,
    callback: (
      error: ExecException | null,
      stdout: string | Buffer,
      stderr: string | Buffer
    ) => void
  ): void;

  declare var npm$namespace$gitFirstCommit: {
    sync: typeof gitFirstCommit$sync
  };
  declare function gitFirstCommit$sync(
    options?: gitFirstCommit$Options<ExecSyncOptions>
  ): string | Buffer;

  declare function gitFirstCommit$sync(
    cwd: string,
    options?: gitFirstCommit$Options<ExecSyncOptions>
  ): string | Buffer;

  declare type gitFirstCommit$ExecOptionsWithEncoding = {
    encoding?: BufferEncoding | "buffer" | null
  } & ExecOptions;

  declare interface gitFirstCommit$Options<TExecOptions> {
    cwd?: string;
    exec?: TExecOptions;
    message?: string;
    file?:
      | {
          path: string,
          contents?: string
        }
      | false;
    commit?: boolean;
    forceFile?: boolean;
    remote?: string;
    push?: boolean;
  }
}
