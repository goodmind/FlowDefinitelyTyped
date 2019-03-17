declare module "cipher-base" {
  declare class CipherBase {
    constructor(hashMode?: string): this;
    final(): Buffer;
    update(value: Buffer, inputEnc?: string, outputEnc?: string): Buffer;
  }
  declare export default typeof CipherBase;
}
