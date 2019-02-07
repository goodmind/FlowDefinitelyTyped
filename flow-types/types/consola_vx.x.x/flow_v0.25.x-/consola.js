declare module "consola" {
  declare export interface LevelType {
    level: number;
    color: string;
    isError?: boolean;
  }
  declare export interface Reporter {
    log(logObj: any): void;
  }
  declare export interface Option {
    level?: number;
    types?: LevelType;
    reporters?: Reporter[];
  }
  declare export class Consola {
    constructor(option?: Option): this;
    add(reporter: Reporter): Consola;
    remove(reporter: Reporter): Consola;
    clear(): Consola;
    withScope(scope: string): void;
    start(...arguments: string[]): void;
    success(...arguments: string[]): void;
    info(...arguments: string[]): void;
    error(...arguments: Array<string | Error>): void;
  }
  declare export function start(...arguments: string[]): void;

  declare export function success(...arguments: string[]): void;

  declare export function info(...arguments: string[]): void;

  declare export function error(...arguments: Array<string | Error>): void;
}
