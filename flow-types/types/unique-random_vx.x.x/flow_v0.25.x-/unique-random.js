declare module "unique-random" {
  declare function uniqueRandom(min: number, max: number): () => number;

  declare module.exports: typeof uniqueRandom;
}
