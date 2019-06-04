declare module "djv" {
  declare interface DjvStatic {
    (options?: DjvStatic$DjvConfig): DjvStatic$djv;
    new(options?: DjvStatic$DjvConfig): DjvStatic$djv;
    expression(
      strings: string[],
      ...keys: string[]
    ): (...values: string[]) => string;
  }
  declare interface DjvStatic$DjvConfig {
    /**
     * a handler to use for generating custom error messages
     */
    errorHandler?: () => void;

    /**
     * an object containing list of formatters to add for environment
     */
    formats?: Record<string, (...values: string[]) => string>;

    /**
     * generating object should be considered as inner
     *
     * Default value is `false`/`undefined`. If `true`, then it avoid creating variables in a
     * generated function body, however without proper wrapper function approach will not work.
     */
    inner?: boolean;

    /**
     * defines which version of json-schema draft to use, draft-04 by default
     */
    version?: string;

    /**
     * handler to apply for environment version
     */
    versionConfigure?: (object: { [key: string]: any }) => void;
  }

  declare interface DjvStatic$Resolved {
    schema: { [key: string]: any };
    fn: (...args: any[]) => any;
  }

  declare interface DjvStatic$djv {
    resolved: DjvStatic$Resolved;
    addFormat(
      name: string,
      formatter: string | ((schema: { [key: string]: any }, tpl: any) => void)
    ): void;
    addSchema(
      nameOrSchema: string | { [key: string]: any },
      schema?: { [key: string]: any }
    ): DjvStatic$Resolved;
    export(name?: string): string;
    import(config: { [key: string]: any }): void;
    removeSchema(name: string): void;
    resolve(name: string | { [key: string]: any }): DjvStatic$Resolved;
    setErrorHandler(
      errorHandler: (errorType: string, property: any) => string
    ): void;
    useVersion(version: string, configure?: any): void;
    validate(name: string, object: { [key: string]: any }): string | void;
  }
  declare var DjvStatic: DjvStatic;
  declare export default typeof DjvStatic;
}
