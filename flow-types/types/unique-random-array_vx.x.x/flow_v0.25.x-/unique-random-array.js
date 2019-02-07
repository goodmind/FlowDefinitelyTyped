declare module "unique-random-array" {
  declare module.exports: typeof uniqueRandomArray;

  declare function uniqueRandomArray<T>(input: T[]): () => T;
}
