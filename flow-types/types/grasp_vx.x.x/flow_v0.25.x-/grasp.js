declare module "grasp" {
  import typeof * as fs from "fs";

  import typeof * as cliColor from "cli-color";

  import type { Node } from "estree";

  declare export default typeof grasp;

  declare function grasp(options: {
    args: string[] | Record<string, any> | string,
    error?: (message: string) => void,
    callback?: (result: string) => void,
    exit?: (code: number) => void,
    input?: string,
    fs?: typeof fs,
    console?: typeof console,
    textFormat?: typeof cliColor,
    stdin?: typeof process.stdin
  }): void;

  declare var npm$namespace$grasp: {
    search: typeof grasp$search,
    replace: typeof grasp$replace,
    VERSION: typeof grasp$VERSION
  };
  declare var grasp$VERSION: string;

  declare function grasp$search(
    engine: grasp$QueryEngineType,
    selector: string,
    input: string
  ): Node[];

  declare function grasp$search(
    engine: grasp$QueryEngineType,
    selector: string
  ): (input: string) => Node[];

  declare function grasp$search(
    engine: grasp$QueryEngineType
  ): grasp$GraspSearchWithQueryEngine;

  declare function grasp$replace(
    engine: grasp$QueryEngineType,
    selector: string,
    replacement: grasp$Replacement,
    input: string
  ): string;

  declare function grasp$replace(
    engine: grasp$QueryEngineType,
    selector: string,
    replacement: grasp$Replacement
  ): (input: string) => string;

  declare function grasp$replace(
    engine: grasp$QueryEngineType,
    selector: string
  ): grasp$GraspReplaceWithSelector;

  declare function grasp$replace(
    engine: grasp$QueryEngineType
  ): grasp$GraspReplaceWithQueryEngine;

  declare type grasp$QueryEngineType = "squery" | "equery";

  declare type grasp$Replacement =
    | string
    | ((
        getRaw: (node: Node) => string,
        node: Node,
        query: (q: string) => Node[],
        named: {
          [key: string]: string | Node
        }
      ) => string);

  declare type grasp$GraspSearchWithQueryEngine = ((
    selector: string,
    input: string
  ) => Node[]) &
    ((selector: string) => (input: string) => Node[]);

  declare type grasp$GraspReplaceWithQueryEngine = ((
    selector: string
  ) => grasp$GraspReplaceWithSelector) &
    ((
      selector: string,
      replacement: grasp$Replacement
    ) => (input: string) => string) &
    ((
      selector: string,
      replacement: grasp$Replacement,
      input: string
    ) => string);

  declare type grasp$GraspReplaceWithSelector = ((
    replacement: grasp$Replacement
  ) => (input: string) => string) &
    ((replacement: grasp$Replacement, input: string) => string);
}
