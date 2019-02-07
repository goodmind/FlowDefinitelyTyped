declare interface Traceback {
  name: string;
  path: string;
  file: string;
  line: number;
  col: number;
  pos: number;
  fun: any;
  method: string;
  this: any;
  type: string;
  origin: any;
  is_top: boolean;
  is_eval: boolean;
  is_native: boolean;
  is_ctor: boolean;
}
declare interface TracebackStatic {
  (): Traceback[];
}
declare var traceback: TracebackStatic;
declare module "traceback" {
  declare module.exports: typeof traceback;
}
