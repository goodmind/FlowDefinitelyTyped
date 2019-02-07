declare module "is-charging" {
  declare module.exports: typeof isCharging;

  declare function isCharging(): Promise<boolean>;
}
