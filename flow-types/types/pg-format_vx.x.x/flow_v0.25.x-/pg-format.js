declare module "pg-format" {
  declare export default typeof format;

  declare function format(fmt: string, ...args: any[]): string;

  declare var npm$namespace$format: {
    config: typeof format$config,
    ident: typeof format$ident,
    literal: typeof format$literal,
    string: typeof format$string,
    withArray: typeof format$withArray
  };
  declare function format$config(config?: {
    pattern: {
      ident?: string,
      literal?: string,
      string?: string
    }
  }): void;

  declare function format$ident(
    val: string | number | boolean | any[] | Date
  ): string;

  declare function format$literal(
    val:
      | string
      | number
      | boolean
      | any[]
      | Date
      | { [key: string]: any }
      | null
      | void
  ): string;

  declare function format$string(
    val:
      | string
      | number
      | boolean
      | any[]
      | Date
      | { [key: string]: any }
      | null
      | void
  ): string;

  declare function format$withArray(fmt: string, array: any[]): string;
}
