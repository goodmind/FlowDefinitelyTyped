declare module "xxhashjs" {
  declare interface UINT {
    toNumber(): number;
    toString(radix?: number): string;
  }
  declare export interface HashObject {
    init(seed: number): this;
    update(data: string | ArrayBuffer | Buffer): this;
    digest(): UINT;
  }
  declare export interface HashInterface {
    (seed?: number): HashObject;
    (data: string | ArrayBuffer | Buffer, seed: number): UINT;
  }
  declare export var h32: HashInterface;
  declare export var h64: HashInterface;
  declare var defaultExport: {
    h32: typeof h32,
    h64: typeof h64
  };
  declare export default typeof defaultExport;
}
