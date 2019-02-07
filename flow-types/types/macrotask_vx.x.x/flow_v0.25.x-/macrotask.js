declare module "macrotask" {
  declare export function run<TArgs: any[]>(
    task: (...args: TArgs) => void,
    ...args: TArgs
  ): CancelToken;

  declare export function clear(cancel: CancelToken): void;

  declare export class CancelToken {}
}
