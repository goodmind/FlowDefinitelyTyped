declare module "xdg-basedir" {
  declare export var data: string | null;
  declare export var config: string | null;
  declare export var cache: string | null;
  declare export var runtime: string | null;
  declare export var dataDirs: string[];
  declare export var configDirs: string[];
}
