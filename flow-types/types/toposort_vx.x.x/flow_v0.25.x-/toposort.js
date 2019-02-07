declare module "toposort" {
  declare function toposort(
    graph: $ReadOnlyArray<[string, string]>
  ): $ReadOnlyArray<string>;

  declare module.exports: typeof toposort;
}
