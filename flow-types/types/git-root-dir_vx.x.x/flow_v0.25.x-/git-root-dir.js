declare module "git-root-dir" {
  declare function gitRootDir(cwd?: string): Promise<string | null>;

  declare module.exports: typeof gitRootDir;
}
