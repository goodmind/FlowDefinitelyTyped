declare module "bloom-filter" {
  declare class Filter {
    constructor(options: Filter$FilterOptions): this;
    static create(
      elements: number,
      falsePositiveRate: number,
      nTweak?: number,
      nFlags?: number
    ): Filter;
    toObject(): Filter$FilterOptions;
    hash(nHashNum: number, vDataToHash: Buffer): number;
    insert(data: Buffer): void;
    contains(data: Buffer): boolean;
    clear(): void;
    inspect(): string;
    BLOOM_UPDATE_NONE: number;
    BLOOM_UPDATE_ALL: number;
    BLOOM_UPDATE_P2PUBKEY_ONLY: number;
    MAX_BLOOM_FILTER_SIZE: number;
    MAX_HASH_FUNCS: number;
    MIN_HASH_FUNCS: number;
    LN2SQUARED: number;
    LN2: number;
  }

  declare var npm$namespace$Filter: {
    MurmurHash3: typeof Filter$MurmurHash3
  };
  declare interface Filter$FilterOptions {
    vData: Buffer;
    nHashFuncs: number;
    nTweak?: number;
    nFlags?: number;
  }

  declare function Filter$MurmurHash3(seed: number, data: Buffer): number;

  declare export default typeof Filter;
}
