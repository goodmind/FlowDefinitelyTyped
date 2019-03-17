declare module "natural-compare" {
  declare function naturalCompare(a: string, b: string): -1 | 0 | 1;

  declare export default typeof naturalCompare;
}
