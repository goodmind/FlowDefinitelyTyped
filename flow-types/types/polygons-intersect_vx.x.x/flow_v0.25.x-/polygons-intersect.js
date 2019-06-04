declare module "polygons-intersect" {
  /**
   * Finds all points where the polygons intersect each other.
   */
  declare function intersection(
    poly1: Array<{
      x: number,
      y: number
    }>,
    poly2: Array<{
      x: number,
      y: number
    }>
  ): Array<{
    x: number,
    y: number
  }>;

  declare export default typeof intersection;
}
