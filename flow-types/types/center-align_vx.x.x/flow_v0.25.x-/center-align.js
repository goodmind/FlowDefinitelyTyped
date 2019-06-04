declare module "center-align" {
  declare function center_align(val: string, width?: number): string;

  declare function center_align(val: string[], width?: number): string[];

  declare export default typeof center_align;
}
