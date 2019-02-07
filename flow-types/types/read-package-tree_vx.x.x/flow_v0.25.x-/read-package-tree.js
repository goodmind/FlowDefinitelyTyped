declare module "read-package-tree" {
  declare function rpt(
    root: string,
    cb: (er: Error | null, data: rpt$rpt$Node) => void
  ): void;

  declare function rpt(
    root: string,
    filterWith: (node: rpt$rpt$Node, kidName: string) => void | void | boolean,
    cb: (er: Error | null, data: rpt$rpt$Node) => void
  ): void;

  declare class rpt$Node {
    id: number;
    name: string;
    package: any;
    children: rpt$Node[];
    parent: rpt$Node | null;
    path: string;
    realpath: string;
    error: Error | null;
    isLink: boolean;
    constructor(
      pkg: any,
      logical: string,
      physical: string,
      er: Error | null,
      cache: {
        [physical: string]: rpt$Node
      },
      fromLink?: boolean
    ): this;
  }

  declare class rpt$Link mixins rpt$Node {
    isLink: true;
    target: rpt$Node;
    constructor(
      pkg: any,
      logical: string,
      physical: string,
      realpath: string,
      er: Error | null,
      cache: {
        [physical: string]: rpt$Node
      }
    ): this;
  }
  declare module.exports: typeof rpt;
}
