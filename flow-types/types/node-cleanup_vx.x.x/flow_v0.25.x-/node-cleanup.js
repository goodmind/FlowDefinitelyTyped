declare module "node-cleanup" {
  declare module.exports: typeof install;

  declare function install(
    cleanupHandler?: (
      exitCode: number | null,
      signal: string | null
    ) => boolean | void,
    stderrMessages?: {
      ctrl_C: string,
      uncaughtException: string
    }
  ): void;

  declare var npm$namespace$install: {
    uninstall: typeof install$uninstall
  };
  declare function install$uninstall(): void;
}
