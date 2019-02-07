declare module "global-dirs" {
  declare export var npm: GlobalDirs;
  declare export var yarn: GlobalDirs;
  declare export interface GlobalDirs {
    packages: string;
    binaries: string;
    prefix: string;
  }
}
