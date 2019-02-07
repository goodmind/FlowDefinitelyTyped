declare module "jsonminify" {
  declare function minify(json: string): string;

  declare module.exports: typeof minify;
}
