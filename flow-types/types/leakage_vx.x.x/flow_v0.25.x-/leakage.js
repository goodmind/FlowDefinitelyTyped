declare module "leakage" {
  declare export class MemoryLeakError mixins Error {}
  declare export interface IterateOptions {
    iterations?: number;
    gcollections?: number;
  }
  declare export function iterate(
    iteratorFn: () => void,
    options?: IterateOptions
  ): Result;

  declare var npm$namespace$iterate: {
    async: typeof iterate$async
  };
  declare function iterate$async(
    iteratorFn: () => Promise<void>,
    options?: IterateOptions
  ): Promise<Result>;

  declare export interface Result {
    heapDiffs: any[];
    gcollections: number;
    iterations: number;
    printSummary(title: string, log?: (msg: string) => void): void;
  }
}
