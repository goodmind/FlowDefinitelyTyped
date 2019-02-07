declare module "ipify" {
  declare module.exports: typeof ipify;

  declare function ipify(endpoint?: string): Promise<string>;
}
