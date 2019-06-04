declare module "child-process-promise" {
  import type {
    ChildProcess,
    ExecFileOptionsWithBufferEncoding,
    ExecFileOptionsWithOtherEncoding,
    ExecFileOptionsWithStringEncoding,
    ExecOptions,
    ForkOptions,
    SpawnOptions
  } from "child_process";

  /**
   * Simple wrapper around the child_process module that makes use of promises
   */
  declare export interface PromiseResult<Enc: string | Buffer> {
    childProcess: ChildProcess;
    stdout: Enc;
    stderr: Enc;
  }
  declare export type SpawnPromiseResult = {
    code: number
  } & PromiseResult<string>;

  declare export type ChildProcessPromise<T> = {
    childProcess: ChildProcess
  } & Promise<T>;

  declare export interface Options {
    /**
     * Pass an additional capture option to buffer the result of stdout and/or stderr
     * Default: []
     */
    capture?:
      | []
      | ["stdout" | "stderr"]
      | ["stdout", "stderr"]
      | ["stderr", "stdout"];

    /**
     * Array of the numbers that should be interpreted as successful execution codes
     * Default: [0]
     */
    successfulExitCodes?: number[];
  }
  declare export function exec(
    command: $ReadOnly<string>,
    options: $ReadOnly<
      Options & {
        encoding: "buffer" | null
      } & ExecOptions
    >
  ): ChildProcessPromise<PromiseResult<Buffer>>;

  declare export function exec(
    command: $ReadOnly<string>,
    options: $ReadOnly<
      Options & {
        encoding?: BufferEncoding
      } & ExecOptions
    >
  ): ChildProcessPromise<PromiseResult<string>>;

  declare export function exec(
    command: $ReadOnly<string>,
    options: $ReadOnly<
      Options & {
        encoding?: string
      } & ExecOptions
    >
  ): ChildProcessPromise<PromiseResult<string | Buffer>>;

  declare export function exec(
    command: $ReadOnly<string>,
    options?: $ReadOnly<Options & ExecOptions>
  ): ChildProcessPromise<PromiseResult<string>>;

  declare export function execFile(
    file: $ReadOnly<string>,
    options: $ReadOnly<Options & ExecFileOptionsWithBufferEncoding>
  ): ChildProcessPromise<PromiseResult<Buffer>>;

  declare export function execFile(
    file: $ReadOnly<string>,
    args: $ReadOnlyArray<string> | null,
    options: $ReadOnly<Options & ExecFileOptionsWithBufferEncoding>
  ): ChildProcessPromise<PromiseResult<Buffer>>;

  declare export function execFile(
    file: $ReadOnly<string>,
    options: $ReadOnly<Options & ExecFileOptionsWithStringEncoding>
  ): ChildProcessPromise<PromiseResult<string>>;

  declare export function execFile(
    file: $ReadOnly<string>,
    options: $ReadOnly<Options & ExecFileOptionsWithOtherEncoding>
  ): ChildProcessPromise<PromiseResult<string | Buffer>>;

  declare export function execFile(
    file: $ReadOnly<string>,
    args: $ReadOnlyArray<string> | null,
    options: $ReadOnly<Options & ExecFileOptionsWithOtherEncoding>
  ): ChildProcessPromise<PromiseResult<string | Buffer>>;

  declare export function execFile(
    file: $ReadOnly<string>,
    args?: $ReadOnlyArray<string> | null,
    options?: $ReadOnly<Options & ExecFileOptionsWithStringEncoding>
  ): ChildProcessPromise<PromiseResult<string>>;

  declare export function spawn(
    command: $ReadOnly<string>,
    args?: $ReadOnlyArray<string> | null,
    options?: $ReadOnly<Options & SpawnOptions>
  ): ChildProcessPromise<SpawnPromiseResult>;

  declare export function fork(
    modulePath: string,
    args?: $ReadOnlyArray<string>,
    options?: $ReadOnly<Options & ForkOptions>
  ): ChildProcessPromise<SpawnPromiseResult>;
}
