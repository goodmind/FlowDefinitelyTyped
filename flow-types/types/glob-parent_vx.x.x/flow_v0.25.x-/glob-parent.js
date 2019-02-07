declare module "glob-parent" {
  declare function globParent(pattern: string): string;

  declare module.exports: typeof globParent;
}
