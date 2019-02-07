declare module "is-docker" {
  declare function isDocker(): boolean;

  declare module.exports: typeof isDocker;
}
