declare module "dir-glob" {
  declare module.exports: typeof dirGlob;

  declare function dirGlob(
    input: string | string[],
    options?: dirGlob$dirGlob$Options
  ): Promise<string[]>;

  declare var npm$namespace$dirGlob: {
    sync: typeof dirGlob$sync
  };
  declare function dirGlob$sync(
    input: string | string[],
    options?: dirGlob$Options
  ): string[];

  declare interface dirGlob$Options {
    extensions?: string[];
    files?: string[];
    cwd?: string;
  }
}
