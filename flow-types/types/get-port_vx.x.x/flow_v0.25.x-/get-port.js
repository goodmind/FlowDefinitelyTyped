declare module "get-port" {
  declare function getPort(options?: {
    port?: number | $ReadOnlyArray<number>,
    host?: string
  }): Promise<number>;

  declare module.exports: typeof getPort;
}
