declare module "string-format" {
  declare function Format(
    template: string,
    ...args: Array<
      | {
          [k: string]: any
        }
      | string
    >
  ): string;

  declare interface Transformers {
    [k: string]: (s: any) => string;
  }

  declare var npm$namespace$Format: {
    create: typeof Format$create,
    extend: typeof Format$extend
  };

  /**
   * create a format function with given transformers
   * @param transformers functions which convert a string, indexed by a name
   */
  declare function Format$create(transformers: Transformers): typeof Format;

  /**
   * @param prototype prototype which should be extended by format (usually String.prototype)
   * @param transformers functions which convert a string, indexed by a name
   */
  declare function Format$extend(
    prototype: any,
    transformers: Transformers
  ): void;

  declare export default typeof Format;
}
