declare module "@hapi/sntp" {
  declare export interface Options {
    host?: string;
    port?: number;
    resolveReference?: boolean;
    timeout?: number;
  }
  declare export interface TimeOptions {
    isValid: boolean;
    leapIndicator: string;
    version: number;
    mode: string;
    stratum: string;
    pollInterval: number;
    precision: number;
    rootDelay: number;
    rootDispersion: number;
    referenceId: string;
    referenceTimestamp: number;
    originateTimestamp: number;
    receiveTimestamp: number;
    transmitTimestamp: number;
    d: number;
    t: number;
    receivedLocally: number;
  }
  declare export function start(options?: Options): Promise<void>;

  declare export function stop(): void;

  declare export function offset(): Promise<number>;

  declare export function time(options?: Options): Promise<TimeOptions>;

  declare export function now(): number;
}
