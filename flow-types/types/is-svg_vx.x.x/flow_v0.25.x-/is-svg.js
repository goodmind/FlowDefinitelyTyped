declare module "is-svg" {
  declare function isSvg(input?: string | Buffer | false | null): boolean;

  declare module.exports: typeof isSvg;
}
