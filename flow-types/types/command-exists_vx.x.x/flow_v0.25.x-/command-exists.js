declare module "command-exists" {
  declare export default typeof commandExists;

  declare function commandExists(commandName: string): Promise<string>;

  declare function commandExists(
    commandName: string,
    cb: (error: null, exists: boolean) => void
  ): void;

  declare var npm$namespace$commandExists: {
    sync: typeof commandExists$sync
  };
  declare function commandExists$sync(commandName: string): boolean;
}
