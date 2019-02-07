declare module "gulp-inject" {
  declare function inject(
    sources: NodeJS.ReadableStream,
    options?: inject$inject$IOptions
  ): NodeJS.ReadWriteStream;

  declare interface inject$ITagFunction {
    (targetExt: string, sourceExt: string): string;
  }

  declare interface inject$ITransformFunction {
    (
      filepath: string,
      file?: File,
      index?: number,
      length?: number,
      targetFile?: File
    ): string;
  }

  declare interface inject$IOptions {
    ignorePath?: string | string[];
    relative?: boolean;
    addPrefix?: string;
    addSuffix?: string;
    addRootSlash?: boolean;
    name?: string;
    removeTags?: boolean;
    empty?: boolean;
    starttag?: string | inject$ITagFunction;
    endtag?: string | inject$ITagFunction;
    transform?: inject$ITransformFunction;
    selfClosingTag?: boolean;
  }
  declare module.exports: typeof inject;
}
