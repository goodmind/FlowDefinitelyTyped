declare module "pretty" {
  declare interface PrettyOptions {
    ocd: boolean;
  }
  declare function pretty(str: string, options?: PrettyOptions): string;

  declare export default typeof pretty;
}
