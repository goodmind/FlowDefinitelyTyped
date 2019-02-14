declare module "is-ip" {
  /**
   * Check if input is IPv4 or IPv6.
   */
  declare function isIp(input: string): boolean;

  declare var npm$namespace$isIp: {
    v4: typeof isIp$v4,
    v6: typeof isIp$v6
  };

  /**
   * Check if input is IPv4.
   */
  declare function isIp$v4(input: string): boolean;

  /**
   * Check if input is IPv6.
   */
  declare function isIp$v6(input: string): boolean;

  declare export default typeof isIp;
}
