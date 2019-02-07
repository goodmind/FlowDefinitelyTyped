declare module "path-is-inside" {
  declare function pathIsInside(
    thePath: string,
    potentialParent: string
  ): boolean;

  declare module.exports: typeof pathIsInside;
}
