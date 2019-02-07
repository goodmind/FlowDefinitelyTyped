declare module "jwt-simple" {
  /**
   * Decode jwt
   * @param token
   * @param key
   * @param noVerify
   * @param algorithm default is HS256
   * @api public
   */
  declare export function decode(
    token: any,
    key: string,
    noVerify?: boolean,
    algorithm?: string
  ): any;

  /**
   * Encode jwt
   * @param payload
   * @param key
   * @param algorithm default is HS256
   * @param options
   * @api public
   */
  declare export function encode(
    payload: any,
    key: string,
    algorithm?: string
  ): string;
}
