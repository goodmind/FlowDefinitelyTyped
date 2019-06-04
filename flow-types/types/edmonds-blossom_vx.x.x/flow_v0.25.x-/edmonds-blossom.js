declare module "edmonds-blossom" {
  declare export default typeof blossom;

  declare function blossom(
    edges: number[][],
    maxCardinality?: number
  ): number[];
}
