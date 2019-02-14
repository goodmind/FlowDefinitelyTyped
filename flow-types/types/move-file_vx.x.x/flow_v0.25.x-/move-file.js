declare module "move-file" {
  declare export default typeof moveFile;

  declare function moveFile(
    source: string,
    destination: string,
    options?: moveFile$Options
  ): Promise<void>;

  declare var npm$namespace$moveFile: {
    sync: typeof moveFile$sync
  };
  declare function moveFile$sync(
    source: string,
    destination: string,
    options?: moveFile$Options
  ): void;

  declare interface moveFile$Options {
    overwrite?: boolean;
  }
}
