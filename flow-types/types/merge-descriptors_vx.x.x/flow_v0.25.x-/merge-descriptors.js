declare module "merge-descriptors" {
  declare function merge(
    destination: Object,
    source: Object,
    redefine?: boolean
  ): Object;

  declare module.exports: typeof merge;
}
