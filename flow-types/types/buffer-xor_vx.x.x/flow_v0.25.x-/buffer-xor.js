declare module "buffer-xor" {
  declare function xor(a: Buffer, b: Buffer): Buffer;

  declare module.exports: typeof xor;
}
