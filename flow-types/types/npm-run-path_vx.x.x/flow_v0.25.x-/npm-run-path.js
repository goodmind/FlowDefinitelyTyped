declare module "npm-run-path" {
  declare module.exports: typeof npmRunPath;

  /**
   * Get your [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) prepended with locally installed binaries.
   */
  declare function npmRunPath(options?: npmRunPath$npmRunPath$Options): string;

  declare var npm$namespace$npmRunPath: {
    env: typeof npmRunPath$env
  };
  declare function npmRunPath$env(
    options?: npmRunPath$EnvOptions
  ): npmRunPath$ProcessEnv;

  declare interface npmRunPath$Options {
    /**
     * Working directory.
     */
    cwd?: string;

    /**
     * PATH to be appended.
     * Set it to an empty string to exclude the default [PATH](https://github.com/sindresorhus/path-key).
     * @default PATH
     */
    path?: string;
  }

  declare interface npmRunPath$EnvOptions {
    /**
     * Working directory.
     */
    cwd?: string;

    /**
     * Accepts an object of environment variables, like `process.env`, and modifies the PATH using the correct
     * [PATH key](https://github.com/sindresorhus/path-key). Use this if you're modifying the PATH for use
     * in the `child_process` options.
     */
    npmRunPath$env?: npmRunPath$ProcessEnv;
  }

  declare interface npmRunPath$ProcessEnv {
    [key: string]: string | void;
  }
}
