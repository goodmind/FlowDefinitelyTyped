declare module "locate-path" {
  declare export default typeof locatePath;

  declare function locatePath(
    input: Iterable<string>,
    options?: locatePath$Options
  ): Promise<string | void>;

  declare var npm$namespace$locatePath: {
    sync: typeof locatePath$sync
  };
  declare function locatePath$sync(
    input: Iterable<string>,
    options?: {
      cwd?: string
    }
  ): string | void;

  declare interface locatePath$Options {
    concurrency?: number;
    preserveOrder?: boolean;
    cwd?: string;
  }
}
