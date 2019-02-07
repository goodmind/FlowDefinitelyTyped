declare module "all-property-names" {
  declare module.exports: typeof allPropertyNames;

  declare function allPropertyNames(input: { [key: string]: any }): Set<string>;
}
