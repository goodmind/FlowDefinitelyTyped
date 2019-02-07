declare module "cwise" {
  import type { ArgType } from "cwise-compiler";

  import typeof * as ndarray from "ndarray";

  declare function cwise(a: string | cwise$cwise$UserArgs): cwise$cwise$Return;

  declare type cwise$Arg =
    | ndarray
    | ((row: number, col: number) => number)
    | number[]
    | any;

  declare type cwise$Return = (a: ndarray, ...b: cwise$Arg[]) => void;

  declare interface cwise$UserArgs {
    args: ArgType[];
    pre?: (a: number, ...args: any[]) => void;
    body(a: number, ...args: any[]): void;
    post?: (a: number, ...args: any[]) => void;
    funcName?: string;
    blockSize?: number;
    printCode?: boolean;
  }
  declare module.exports: typeof cwise;
}
