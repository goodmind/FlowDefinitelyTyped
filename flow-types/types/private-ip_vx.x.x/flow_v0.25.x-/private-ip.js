declare module "private-ip" {
  declare module.exports: typeof isIpPrivate;

  declare function isIpPrivate(ip: string): boolean;
}
