declare module "p-tap" {
  declare module.exports: typeof pTap;

  declare var pTap: pTap;
  declare interface pTap {
    <T>(fn: (value: T) => any): (value: T) => Promise<T>;
    catch(fn: (value: any) => any): (value: any) => Promise<empty>;
  }
}
