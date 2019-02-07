declare module "tempfile" {
  declare module.exports: typeof tempfile;

  declare function tempfile(extension?: string): string;
}
