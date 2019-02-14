declare module "pkg-up" {
  declare export default typeof pkgUp;

  declare function pkgUp(cwd?: string): Promise<string>;

  declare var npm$namespace$pkgUp: {
    sync: typeof pkgUp$sync
  };
  declare function pkgUp$sync(cwd?: string): string;
}
