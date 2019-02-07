declare module "detect-character-encoding" {
  declare module.exports: typeof detectCharacterEncoding;

  declare function detectCharacterEncoding(
    buf: Buffer
  ): detectCharacterEncoding$detectCharacterEncoding$Result | null;

  declare interface detectCharacterEncoding$Result {
    encoding: string;
    confidence: number;
  }
}
