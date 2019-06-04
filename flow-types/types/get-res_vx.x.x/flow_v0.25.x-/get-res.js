declare module "get-res" {
  declare export default typeof getRes;

  declare interface Resolution {
    item: string;
    percent: string;
  }

  /**
   * Get ten most popular screen resolutions
   * @returns An array with the details of ten most popular screen resolutions
   */
  declare function getRes(): Promise<Resolution[]>;
}
