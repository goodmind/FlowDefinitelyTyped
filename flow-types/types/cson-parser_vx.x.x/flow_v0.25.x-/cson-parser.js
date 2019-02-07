declare module "cson-parser" {
  declare export type ReplacerFunction = (key: string, value: any) => any;

  /**
 * Converts a CSON string into an object.
 * @param text A valid CSON string.
 * @param reviver A function that transforms the results. This function is called for each member of the object.
If a member contains nested objects, the nested objects are transformed before the parent object is.
 */
  declare export function parse(
    text: string,
    reviver?: (key: any, value: any) => any
  ): any;

  /**
   * Converts a JavaScript value to a CSON string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer A function that transforms the results or an array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
   * @param space Adds indentation, white space, and line break characters to the return-value CSON text to make it easier to read.
   */
  declare export function stringify(
    value: any,
    replacer?: ReplacerFunction | Array<number | string> | null,
    space?: string | number
  ): string;
}
