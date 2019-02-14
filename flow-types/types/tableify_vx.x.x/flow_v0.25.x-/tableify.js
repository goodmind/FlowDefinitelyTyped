declare module "tableify" {
  declare export default typeof tableify;

  declare function tableify<T: Record<string, any>>(
    obj: T | $ReadOnlyArray<T>,
    columns?: $ReadOnlyArray<$Keys<T>> | false,
    parents?: any[]
  ): string;

  declare function tableify(obj: any): string;

  declare var npm$namespace$tableify: {
    defaults: typeof tableify$defaults
  };
  declare interface tableify$Config {
    classes?: boolean;
    classPrefix?: string;
  }

  declare function tableify$defaults(
    config: tableify$Config
  ): {
    <T: Record<string, any>>(
      obj: T | $ReadOnlyArray<T>,
      columns?: $ReadOnlyArray<$Keys<T>> | false,
      parents?: any[]
    ): string,
    (obj: any): string
  };
}
