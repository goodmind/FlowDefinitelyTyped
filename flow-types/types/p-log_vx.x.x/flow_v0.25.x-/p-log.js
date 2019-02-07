declare module "p-log" {
  declare module.exports: typeof pLog;

  declare var pLog: pLog;
  declare interface pLog {
    (): <T>(value: T) => Promise<T>;
    catch(): (value: any) => Promise<empty>;
  }
}
