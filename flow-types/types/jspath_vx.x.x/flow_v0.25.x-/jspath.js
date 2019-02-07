declare module "jspath" {
  /**
   * @param path path expression
   * @param data input JSON document
   * @param replacement substitutions
   */
  declare export function apply(
    path: string,
    data: any,
    replacement?: any
  ): any[];
}
