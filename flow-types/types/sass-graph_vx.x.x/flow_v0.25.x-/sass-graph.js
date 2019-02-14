declare module "sass-graph" {
  declare var npm$namespace$SassGraph: {
    parseFile: typeof SassGraph$parseFile,
    parseDir: typeof SassGraph$parseDir
  };
  declare export interface SassGraph$Options {
    loadPath?: string[];
    extensions?: string[];
  }

  declare type SassGraph$Node = {
    [filepath: string]: {
      imports: string[],
      importedBy: string[],
      modified: string
    }
  };

  /**
   * @class Graph
   */
  declare export interface SassGraph$Graph {
    dir: string;
    loadPaths: string[];
    extensions: string[];
    index: SassGraph$Node;

    /**
     * Add a sass file to the graph
     * @param {string} filepath Path to the file to visit
     * @param {string} parent Parent filepath
     */
    addFile(filepath: string, parent?: string): void;

    /**
     * visits all files that are ancestors of the provided file
     * @param {string} filepath Path to the file to visit
     * @param {Function} callback Called when a node is visited
     */
    visitAncestors(
      filepath: string,
      callback: (edge: string, node: SassGraph$Node) => any
    ): void;

    /**
     * Visits all files that are descendents of the provided file
     * @param {string} filepath Path to the file to visit
     * @param {Function} callback Called when a node is visited
     */
    visitDescendents(
      filepath: string,
      callback: (edge: string, node: SassGraph$Node) => any
    ): void;

    /**
     * A generic visitor that uses an edgeCallback to find the edges to traverse
     * for a node
     * @param {string} filepath Path to the file to visit
     * @param {Function} callback Called when a node is visited
     * @param {Function} edgeCallback Called when we reach an edge
     * @param {string[]} visited Visited edges
     */
    visit(
      filepath: string,
      callback: (edge: string, node: SassGraph$Node) => any,
      edgeCallback: (errorMsg: string, node: SassGraph$Node) => any,
      visited?: string[]
    ): void;
  }

  /**
   * @function {parseFile} Get the dependency tree of a single file
   * @param {string} filepath Path to file which should be parsed
   * @param {Object} options Parsing options
   * @return {SassGraph$Graph}
   */
  declare export function SassGraph$parseFile(
    filepath: string,
    options?: SassGraph$Options
  ): SassGraph$Graph;

  /**
   * @function {parseDir} Get the dependency tree of all sass files in a folder
   * @param {string} dirpath Folder which should be parsed
   * @param {Object} options Parsing options
   * @return {SassGraph$Graph}
   */
  declare export function SassGraph$parseDir(
    dirpath: string,
    options?: SassGraph$Options
  ): SassGraph$Graph;

  declare export default typeof SassGraph;
}
