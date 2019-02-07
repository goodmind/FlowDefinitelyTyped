declare module "run-parallel" {
  declare type RunParallel$TaskCallback<T> = (
    err: Error | null,
    results?: T
  ) => void;

  declare type RunParallel$Task<T> = (
    callback: RunParallel$TaskCallback<T>
  ) => void;

  declare type RunParallel$TaskObj<T> = Record<string, RunParallel$Task<T>>;

  declare type RunParallel$Callback<T> = (err: Error, results: T) => void;
  declare function RunParallel<T>(
    tasks: Array<RunParallel$RunParallel$Task<T>>
  ): T[];

  declare function RunParallel<T>(
    tasks: Array<RunParallel$RunParallel$Task<T>>,
    callback: RunParallel$RunParallel$Callback<T[]>
  ): void;

  declare function RunParallel<T>(
    tasks: RunParallel$RunParallel$TaskObj<T>
  ): Record<string, T>;

  declare function RunParallel<T>(
    tasks: RunParallel$RunParallel$TaskObj<T>,
    callback: RunParallel$RunParallel$Callback<Record<string, T>>
  ): void;

  declare module.exports: typeof RunParallel;
}
