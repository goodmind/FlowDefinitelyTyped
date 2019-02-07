declare module "rfc2047" {
  /**
   * Decode
   * @param encodedText Encoded Text
   * @return Decoded Text
   */
  declare export function decode(encodedText: string): string;

  /**
   * Encode
   * @param decodedText Decoded Text
   * @return Encoded Text
   */
  declare export function encode(decodedText: string): string;
}
