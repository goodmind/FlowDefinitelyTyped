declare module "fs-readdir-recursive" {
  declare function readdirRecursive(
    path: string,
    filter?: (path: string) => boolean
  ): string[];

  declare module.exports: typeof readdirRecursive;
}
