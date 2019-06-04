declare module "rehype-react" {
  import typeof * as React from "react";

  declare interface Options {
    createElement: typeof React.createElement;
    components: {
      [tagName: string]: React.ComponentType<any>
    };
    prefix?: string;
  }
  declare class RehypeReact {
    constructor(options: Options): this;
    Compiler: (node: any) => any;
  }
  declare export default typeof RehypeReact;
}
