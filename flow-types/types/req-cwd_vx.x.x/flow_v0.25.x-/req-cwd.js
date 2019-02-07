declare module "req-cwd" {
  /**
   * Like require(), throws when the module can't be found.
   */
  declare function reqCwd(moduleId: string): any;

  declare var npm$namespace$reqCwd: {
    silent: typeof reqCwd$silent
  };

  /**
   * Returns null instead of throwing when the module can't be found.
   */
  declare function reqCwd$silent(moduleId: string): any;

  declare module.exports: typeof reqCwd;
}
