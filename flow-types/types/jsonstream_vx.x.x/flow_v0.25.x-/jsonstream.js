declare module "jsonstream" {
  declare export interface Options {
    recurse: boolean;
  }
  declare export function parse(pattern: any): NodeJS.ReadWriteStream;

  declare export function parse(patterns: any[]): NodeJS.ReadWriteStream;

  /**
   * Create a writable stream.
   * you may pass in custom open, close, and seperator strings. But, by default,
   * JSONStream.stringify() will create an array,
   * (with default options open='[\n', sep='\n,\n', close='\n]\n')
   */
  declare export function stringify(): NodeJS.ReadWriteStream;

  /**
   * If you call JSONStream.stringify(false) the elements will only be seperated by a newline.
   */
  declare export function stringify(
    newlineOnly: NewlineOnlyIndicator
  ): NodeJS.ReadWriteStream;

  declare type NewlineOnlyIndicator = false;

  /**
   * Create a writable stream.
   * you may pass in custom open, close, and seperator strings. But, by default,
   * JSONStream.stringify() will create an array,
   * (with default options open='[\n', sep='\n,\n', close='\n]\n')
   */
  declare export function stringify(
    open: string,
    sep: string,
    close: string
  ): NodeJS.ReadWriteStream;

  declare export function stringifyObject(): NodeJS.ReadWriteStream;

  declare export function stringifyObject(
    open: string,
    sep: string,
    close: string
  ): NodeJS.ReadWriteStream;
}
