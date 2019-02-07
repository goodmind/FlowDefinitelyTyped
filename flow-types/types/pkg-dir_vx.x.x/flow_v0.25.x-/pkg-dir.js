declare module "pkg-dir" {
  declare module.exports: typeof pkgDir;

  declare function pkgDir(cwd?: string): Promise<string | null>;

  declare var npm$namespace$pkgDir: {
    sync: typeof pkgDir$sync
  };
  declare function pkgDir$sync(cwd?: string): string | null;
}
