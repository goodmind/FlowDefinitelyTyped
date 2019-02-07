declare module "cwise-parser" {
  declare interface cwise_parser$CompiledArgument {
    name: string;
    lvalue: boolean;
    rvalue: boolean;
    count: number;
  }

  declare interface cwise_parser$CompiledRoutine {
    body: string;
    args: cwise_parser$CompiledArgument[];
    thisVars: string[];
    localVars: string[];
  }
  declare function cwise_parser<T>(
    func: (a: number, ...args: T[]) => any
  ): cwise_parser$cwise_parser$CompiledRoutine;

  declare module.exports: typeof cwise_parser;
}
