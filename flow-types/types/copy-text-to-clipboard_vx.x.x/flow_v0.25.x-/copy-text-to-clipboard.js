declare module "copy-text-to-clipboard" {
  declare module.exports: typeof copy;

  declare function copy(text: string): boolean;
}
