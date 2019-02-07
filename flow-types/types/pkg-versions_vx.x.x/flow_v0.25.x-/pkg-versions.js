declare module "pkg-versions" {
  declare module.exports: typeof pkgVersions;

  declare function pkgVersions(name: string): Promise<Set<string>>;
}
