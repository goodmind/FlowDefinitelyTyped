declare module "cwd" {
  declare module.exports: typeof cwd;

  declare function cwd(pathSegments: string[]): string;

  declare function cwd(...pathSegments: string[]): string;
}
