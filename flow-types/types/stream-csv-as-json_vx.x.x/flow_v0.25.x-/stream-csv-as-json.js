declare module "stream-csv-as-json" {
  import typeof * as AsObjects from "./AsObjects";

  import typeof * as Parser from "./Parser";

  import typeof * as Stringer from "./Stringer";

  declare export default typeof make;

  declare function make(options?: Parser.ParserOptions): make$Parser;

  declare type ParserClass = make$Parser;
  declare type ParserType = typeof Parser;

  declare var npm$namespace$make: {
    parser: typeof make$parser,
    Parser: typeof make$Parser
  };
  declare type make$Parser = ParserClass;

  declare var make$Parser: ParserType;

  declare function make$parser(options?: Parser.ParserOptions): make$Parser;
}
