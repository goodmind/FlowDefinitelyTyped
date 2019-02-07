declare module "parent-package-json" {
  declare module.exports: typeof ParentPackageJson;

  declare function ParentPackageJson(
    startPath?: string | null,
    ignore?: number
  ): ParentPackageJson$ParentPackageJson$ParentPackage | false;

  declare interface ParentPackageJson$ParentPackage {
    read(): string;
    path: string;
    parse(): {
      [key: string]: any
    };
  }
}
