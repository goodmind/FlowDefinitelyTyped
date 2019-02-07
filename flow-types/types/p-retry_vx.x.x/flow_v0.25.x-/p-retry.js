declare module "p-retry" {
  import type { OperationOptions } from "retry";

  declare module.exports: typeof pRetry;

  declare function pRetry<T>(
    input: (attemptCount: number) => PromiseLike<T> | T,
    options?: pRetry$pRetry$Options
  ): Promise<T>;

  declare class pRetry$AbortError mixins Error {
    name: "AbortError";
    originalError: Error;
    constructor(message: string | Error): this;
  }

  declare type pRetry$FailedAttemptError = {
    attemptNumber: number,
    attemptsLeft: number
  } & Error;

  declare type pRetry$Options = {
    onFailedAttempt?: (error: pRetry$FailedAttemptError) => void
  } & OperationOptions;
}
