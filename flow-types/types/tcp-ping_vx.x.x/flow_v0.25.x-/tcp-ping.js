declare module "tcp-ping" {
  declare export interface Options {
    address?: string;
    port?: number;
    attempts?: number;
    timeout?: number;
  }
  declare export interface Results {
    seq: number | void;
    time: number | void;
    error?: Error;
  }
  declare export interface Result {
    address: string;
    port: number;
    attempts: number;
    avg: number;
    max: number;
    min: number;
    results: Results[];
  }
  declare export function ping(
    options: Options,
    callback: (error: Error, result: Result) => void
  ): void;

  declare export function probe(
    address: string,
    port: number,
    callback: (error: Error, result: Result) => void
  ): void;
}
