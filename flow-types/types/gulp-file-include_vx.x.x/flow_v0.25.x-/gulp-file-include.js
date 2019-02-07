declare module "gulp-file-include" {
  declare function fileinclude(prefix: string): NodeJS.ReadWriteStream;

  declare function fileinclude(
    opts: fileinclude$fileinclude$Options
  ): NodeJS.ReadWriteStream;

  declare export interface fileinclude$Options {
    /**
     * default: "@@"
     */
    prefix?: string;

    /**
     * default: ""
     */
    suffix?: string;

    /**
     * Can be "@file" or "@root" or some base path.
     * default: "@file"
     */
    basepath?: "@file" | "@root" | string;

    /**
     * Filters basically look like functions that get passed into '@@include'.
     * When one of these functions is called, something of that name is looked
     * up in this object and called to get the contents of that include.
     */
    filters?: {
      [filter: string]: (arg: any) => string
    };

    /**
     * Effectively a context for variables used in 'if' statements.
     */
    context?: {
      [contextVarName: string]: any
    };

    /**
     * default: false
     */
    indent?: boolean;
  }
  declare module.exports: typeof fileinclude;
}
