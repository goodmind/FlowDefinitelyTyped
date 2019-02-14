declare module "first-run" {
  declare export default typeof firstRun;

  /**
   * Check if it's the first time the process is run.
   */
  declare function firstRun(options?: firstRun$Options): boolean;

  declare var npm$namespace$firstRun: {
    clear: typeof firstRun$clear
  };

  /**
   * Clear the state.
   */
  declare function firstRun$clear(): void;

  declare interface firstRun$Options {
    /**
     * The name used to identify it.
     * @default name field in your package.json
     */
    name: string;
  }
}
