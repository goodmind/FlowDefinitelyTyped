declare module "gulp-coffeeify" {
  declare interface coffeeify$Coffeeify {
    (option?: coffeeify$Option): NodeJS.ReadWriteStream;
  }

  declare interface coffeeify$Option {
    options?: {
      debug?: boolean,
      paths?: string[]
    };

    /**
     * [DEPRECATED]: You should use a 'paths' options of browserify.
     */
    aliases?: coffeeify$Aliases;

    /**
     * [DEPRECATED]
     */
    transforms?: coffeeify$Transforms;
  }

  declare type coffeeify$Aliases = Array<{
    cwd?: string,
    base?: string
  }>;

  declare type coffeeify$Transforms = Array<{
    ext?: string,
    transform?: (data: string) => string
  }>;
  declare var coffeeify: coffeeify$coffeeify$Coffeeify;
  declare module.exports: typeof coffeeify;
}
