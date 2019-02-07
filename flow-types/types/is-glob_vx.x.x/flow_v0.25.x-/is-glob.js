declare module "is-glob" {
  declare function isGlob(
    pattern?: string | string[] | null,
    options?: isGlob$isGlob$Options
  ): boolean;

  declare interface isGlob$Options {
    /**
     * When `false` the behavior is less strict in determining if a pattern is a glob. Meaning that some patterns
     * that would return false may return true. This is done so that matching libraries like micromatch
     * have a chance at determining if the pattern is a glob or not.
     */
    strict?: boolean;
  }
  declare module.exports: typeof isGlob;
}
