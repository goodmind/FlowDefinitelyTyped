declare module "npm-packlist" {
  declare function packlist(options?: packlist$Options): Promise<string[]>;

  declare function packlist<T>(
    options: packlist$Options | void,
    callback: (result: string[]) => T
  ): Promise<T>;

  declare var npm$namespace$packlist: {
    sync: typeof packlist$sync
  };
  declare interface packlist$Options {
    /**
     * Directory to walk recusively. Defaults to `process.cwd()`.
     */
    path?: string;
  }

  declare function packlist$sync(options?: packlist$Options): string[];

  declare export default typeof packlist;
}
