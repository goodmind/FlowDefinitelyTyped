declare module "get-caller-file" {
  declare function getCallerFile(position?: number): string;

  declare module.exports: typeof getCallerFile;
}
