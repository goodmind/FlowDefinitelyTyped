declare module "delete-empty" {
  declare function deleteEmpty(dir: string): Promise<string[]>;

  declare function deleteEmpty(
    dir: string,
    cb: (err: Error | void | null, deleted: string[]) => void
  ): void;

  declare var npm$namespace$deleteEmpty: {
    sync: typeof deleteEmpty$sync
  };
  declare function deleteEmpty$sync(dir: string): string[];

  declare export default typeof deleteEmpty;
}
