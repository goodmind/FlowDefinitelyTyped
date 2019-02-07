declare module "stack-utils" {
  declare module.exports: typeof StackUtils;

  declare class StackUtils {
    static nodeInternals(): RegExp[];
    constructor(options?: StackUtils$StackUtils$Options): this;
    clean(stack: string | string[]): string;
    capture(
      limit?: number,
      startStackFunction?: Function
    ): StackUtils$StackUtils$CallSite[];
    capture(startStackFunction: Function): StackUtils$StackUtils$CallSite[];
    captureString(limit?: number, startStackFunction?: Function): string;
    captureString(startStackFunction: Function): string;
    at(startStackFunction?: Function): StackUtils$StackUtils$CallSiteLike;
    parseLine(line: string): StackUtils$StackUtils$StackLineData | null;
  }
  declare interface StackUtils$Options {
    internals?: RegExp[];
    cwd?: string;
    wrapCallSite?: (callSite: StackUtils$CallSite) => StackUtils$CallSite;
  }

  declare interface StackUtils$CallSite {
    getThis(): { [key: string]: any } | void;
    getTypeName(): string;
    getFunction(): Function | void;
    getFunctionName(): string;
    getMethodName(): string | null;
    getFileName(): string | void;
    getLineNumber(): number;
    getColumnNumber(): number;
    getEvalOrigin(): StackUtils$CallSite | string;
    isToplevel(): boolean;
    isEval(): boolean;
    isNative(): boolean;
    isConstructor(): boolean;
  }

  declare type StackUtils$CallSiteLike = {
    type?: string
  } & StackUtils$StackData;

  declare type StackUtils$StackLineData = {
    evalLine?: number,
    evalColumn?: number,
    evalFile?: string
  } & StackUtils$StackData;

  declare interface StackUtils$StackData {
    line?: number;
    column?: number;
    file?: string;
    constructor?: boolean;
    evalOrigin?: string;
    native?: boolean;
    function?: string;
    method?: string;
  }
}
