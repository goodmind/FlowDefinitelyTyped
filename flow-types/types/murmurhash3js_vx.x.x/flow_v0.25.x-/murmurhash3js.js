declare module "x64" {
  declare function hash128(val: string, seed?: number): string;
}
declare module "x86" {
  declare function hash32(val: string, seed?: number): number;

  declare function hash128(val: string, seed?: number): string;
}
declare module "murmurhash3js" {
}
