declare module "murmurhash-js" {
  declare var murmur: typeof murmur3 & {
    murmur3: typeof murmur3,
    murmur2: typeof murmur2
  };
  declare module.exports: typeof murmur;
}
