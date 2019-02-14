declare module "write-json-file" {
  declare function writeJsonFile(
    filepath: string,
    data: any,
    options?: writeJsonFile$Options
  ): Promise<void>;

  declare var npm$namespace$writeJsonFile: {
    sync: typeof writeJsonFile$sync
  };
  declare type writeJsonFile$Replacer = (key: string, value: any) => void;

  declare interface writeJsonFile$Options {
    indent?: string | number | null;
    detectIndent?: boolean;
    sortKeys?: boolean | ((a: string, b: string) => number);
    replacer?: writeJsonFile$Replacer | Array<number | string> | null;
    mode?: number;
  }

  declare function writeJsonFile$sync(
    filepath: string,
    data: any,
    options?: writeJsonFile$Options
  ): void;

  declare export default typeof writeJsonFile;
}
