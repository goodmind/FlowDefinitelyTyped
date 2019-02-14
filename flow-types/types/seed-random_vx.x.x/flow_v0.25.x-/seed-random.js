declare module "seed-random" {
  declare export default typeof SeedRandom;

  declare function SeedRandom(
    seed?: string,
    options?: SeedRandom$Options
  ): () => number;

  declare var npm$namespace$SeedRandom: {
    resetGlobal: typeof SeedRandom$resetGlobal
  };
  declare interface SeedRandom$Options {
    global?: boolean;
    entropy?: boolean;
  }

  declare function SeedRandom$resetGlobal(): void;
}
