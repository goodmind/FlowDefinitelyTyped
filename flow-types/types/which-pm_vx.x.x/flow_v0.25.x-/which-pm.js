declare module "which-pm" {
  declare interface PMInfo {
    name: string;
    version?: string;
  }
  declare function whichpm(pkgPath: string): Promise<PMInfo | null>;

  declare module.exports: typeof whichpm;
}
