declare module "keygrip" {
  declare interface Keygrip {
    sign(data: any): string;
    verify(data: any, digest: string): boolean;
    index(data: any, digest: string): number;
  }
  declare interface KeygripFunction {
    new(keys: string[], algorithm?: string, encoding?: string): Keygrip;
    (keys: string[], algorithm?: string, encoding?: string): Keygrip;
  }
  declare var Keygrip: KeygripFunction;
  declare module.exports: typeof Keygrip;
}
