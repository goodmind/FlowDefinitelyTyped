declare module "global" {
  declare var npm$namespace$graphlibDot: {
    read: typeof graphlibDot$read,
    readMany: typeof graphlibDot$readMany,
    write: typeof graphlibDot$write,
    graphlib: typeof graphlibDot$graphlib
  };

  /**
   * Reads a single DOT graph from the str and returns it a Graph representation.
   * @param str a string in the DOT language representing a graph
   */
  declare function graphlibDot$read(str: string): Graph;

  /**
   * Parses one or more DOT graphs from str in a manner similar to that used by parse for individual graphs.
   * @param str a string in the DOT language representing one or more graphs
   */
  declare function graphlibDot$readMany(str: string): Graph[];

  /**
   * Writes a String representation of the given graph in the DOT language.
   * @param g a graphlib Graph object
   */
  declare function graphlibDot$write(g: Graph): string;

  /**
   * Contains the version of the graphlib library used by graphlib-dot.
   */
  declare var graphlibDot$graphlib: any;
}
declare module "graphlib-dot" {
  import type { Graph } from "graphlib";

  /**
   * Reads a single DOT graph from the str and returns it a Graph representation.
   * @param str a string in the DOT language representing a graph
   */
  declare export function read(str: string): Graph;

  /**
   * Parses one or more DOT graphs from str in a manner similar to that used by parse for individual graphs.
   * @param str a string in the DOT language representing one or more graphs
   */
  declare export function readMany(str: string): Graph[];

  /**
   * Writes a String representation of the given graph in the DOT language.
   * @param g a graphlib Graph object
   */
  declare export function write(g: Graph): string;

  /**
   * Contains the version of the graphlib library used by graphlib-dot.
   */
  declare export var graphlibDot$graphlib: any;
}
