declare module "spdx-satisfies" {
  declare function spdxSatisfies(first: string, second: string): boolean;

  declare module.exports: typeof spdxSatisfies;
}
