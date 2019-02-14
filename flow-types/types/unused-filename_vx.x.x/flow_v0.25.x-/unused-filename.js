declare module "unused-filename" {
  declare export default typeof unusedFilename;

  declare function unusedFilename(filepath: string): Promise<string>;

  declare var npm$namespace$unusedFilename: {
    sync: typeof unusedFilename$sync
  };
  declare function unusedFilename$sync(filepath: string): string;
}
