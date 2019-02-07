declare module "gulp-espower" {
  declare interface espower$Espower {
    /**
     * @param options Target patterns for power assert feature instrumentation.
     */
    (options?: espower$Options): NodeJS.ReadWriteStream;
  }

  declare interface espower$Options {
    patterns: string[];
  }
  declare var espower: espower$espower$Espower;
  declare module.exports: typeof espower;
}
