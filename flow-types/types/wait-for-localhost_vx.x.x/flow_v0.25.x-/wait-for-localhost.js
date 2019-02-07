declare module "wait-for-localhost" {
  declare module.exports: typeof waitForLocalhost;

  declare function waitForLocalhost(port?: number): Promise<void>;
}
