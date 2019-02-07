declare module "venn" {
  import typeof * as d3 from "d3";

  /**
   * Typing for Point object.
   */
  declare export interface Point {
    x: number;
    y: number;
  }

  /**
   * Typing for Circle object.
   */
  declare export interface Circle {
    x: number;
    y: number;
    radius: number;
  }

  /**
   * Typing for Overlap object.
   */
  declare export interface Overlap {
    sets: string[];
    size: number;
    weight?: number;
  }

  /**
   * Typing for Area object.
   */
  declare export interface Area {
    sets: string[];
    size: number;
  }

  /**
   * Typing for layout function parameter.
   */
  declare export interface LayoutParameter {
    lossFunction?: (
      sets: {
        [key: string]: Circle
      },
      overlaps: Overlap[]
    ) => number;
    restarts?: number;
  }

  /**
   * Typing for the VennDiagram instance.
   */
  declare export interface VennDiagram {
    (selection: d3.Selection<d3.BaseType, {}, d3.BaseType, {} | void>): {};
    width: (w: number) => VennDiagram;
    height: (h: number) => VennDiagram;
    duration: (d: number) => VennDiagram;
    layoutFunction: (
      f: (areas: Area[], parameters: LayoutParameter) => void
    ) => VennDiagram;
    lossFunction: (
      f: (
        sets: {
          [key: string]: Circle
        },
        overlaps: Overlap[]
      ) => number
    ) => VennDiagram;
    orientationOrder: (
      f: (
        a: {
          setid: string
        },
        b: {
          setid: string
        }
      ) => number
    ) => VennDiagram;
  }

  /**
   * Typing for venn.intersectionArea that returns the intersection area of a
   * bunch of circles (where each circle is an object having an x,y and radius
   * property).
   */
  declare export function intersectionArea(
    circles: Array<{}>,
    stats?: {}
  ): number;

  /**
   * Typing for venn.distance that returns euclidean distance between two points.
   */
  declare export function distance(p1: Point, p2: Point): number;

  /**
   * Typing for venn.circleOverlap that returns the overlap area of two circles
   * of radius r1 and r2 - that have their centers separated by distance d.
   * Simpler faster circle intersection for only two circles.
   */
  declare export function circleOverlap(
    r1: number,
    r2: number,
    d: number
  ): number;

  /**
   * Typing for venn.circleFromPath that returns a circle object from an svg path.
   */
  declare export function circleFromPath(path: string): Circle;

  /**
   * Typing for venn.sortAreas that sorts all areas in the venn diagram, so that
   * a particular area is on top (relativeTo) - and all other areas are so that
   * the smallest areas are on top.
   */
  declare export function sortAreas(
    div: d3.Selection<d3.BaseType, {}, d3.BaseType, {} | void>,
    relativeTo: Area
  ): void;

  /**
   * Typing for venn.bestInitialLayout that takes the best working variant of
   * either constrained MDS or greedy.
   */
  declare export function bestInitialLayout(
    areas: Area[],
    params: LayoutParameter
  ): Circle[];

  /**
   * Typing for venn.venn, which given a list of set objects, and their
   * corresponding overlaps, updates the (x, y, radius) attribute on each set such
   * that their positions roughly correspond to the desired overlaps.
   */
  declare export function venn(areas: Area[], parameters: {}): Circle[];

  /**
   * Typing for the constructor.
   */
  declare export function VennDiagram(): VennDiagram;
}
