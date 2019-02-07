declare module "symlink-or-copy" {
  declare export function sync(srcPath: string, destPath: string): void;

  declare export var canSymlink: boolean;
  declare export var canSymlinkFile: boolean;
  declare export var canSymlinkDirectory: boolean;
}
