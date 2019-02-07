declare module "decode-entities" {
  declare function decode(encodedString: string): string;

  declare module.exports: typeof decode;
}
