declare module "cookie-signature" {
  /**
   * Sign the given `val` with `secret`.
   */
  declare export function sign(value: string, secret: string): string;

  /**
   * Unsign and decode the given `val` with `secret`,
   * returning `false` if the signature is invalid.
   */
  declare export function unsign(
    value: string,
    secret: string
  ): string | boolean;
}
