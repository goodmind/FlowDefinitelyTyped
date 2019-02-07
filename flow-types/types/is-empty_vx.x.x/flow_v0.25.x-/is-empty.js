declare module "is-empty" {
  /**
   * Test if a value is empty
   */
  declare function isEmpty(value: any): boolean;

  declare module.exports: typeof isEmpty;
}
