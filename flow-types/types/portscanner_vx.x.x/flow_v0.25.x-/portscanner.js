declare module "portscanner" {
  declare export type Status = "open" | "closed";
  declare export type PortCallback = (
    error: Error | null,
    port: number
  ) => void;
  declare export type StatusCallback = (
    error: Error | null,
    port: Status
  ) => void;
  declare export interface Options {
    host?: string;
    timeout?: number;
  }
  declare export function checkPortStatus(port: number): Promise<Status>;

  declare export function checkPortStatus(
    port: number,
    host: string
  ): Promise<Status>;

  declare export function checkPortStatus(
    port: number,
    opts: Options
  ): Promise<Status>;

  declare export function checkPortStatus(
    port: number,
    checkPortCallback: StatusCallback
  ): void;

  declare export function checkPortStatus(
    port: number,
    host: string,
    opts: Options
  ): Promise<Status>;

  declare export function checkPortStatus(
    port: number,
    host: string,
    checkPortCallback: StatusCallback
  ): void;

  declare export function checkPortStatus(
    port: number,
    opts: Options,
    checkPortCallback: StatusCallback
  ): void;

  declare export function checkPortStatus(
    port: number,
    host: string,
    opts: Options,
    checkPortCallback: StatusCallback
  ): void;

  declare export function findAPortNotInUse(
    portList: number[]
  ): Promise<number>;

  declare export function findAPortNotInUse(startPort: number): Promise<number>;

  declare export function findAPortNotInUse(
    portList: number[],
    findPortCallback: PortCallback
  ): void;

  declare export function findAPortNotInUse(
    portList: number[],
    host: string
  ): Promise<number>;

  declare export function findAPortNotInUse(
    startPort: number,
    findPortCallback: PortCallback
  ): void;

  declare export function findAPortNotInUse(
    startPort: number,
    host: string
  ): Promise<number>;

  declare export function findAPortNotInUse(
    startPort: number,
    endPort: number
  ): Promise<number>;

  declare export function findAPortNotInUse(
    startPort: number,
    endPort: number,
    host: string
  ): Promise<number>;

  declare export function findAPortNotInUse(
    startPort: number,
    endPort: number,
    findPortCallback: PortCallback
  ): void;

  declare export function findAPortNotInUse(
    startPort: number,
    endPort: number,
    host: string,
    findPortCallback: PortCallback
  ): void;

  declare export function findAPortInUse(portList: number[]): Promise<number>;

  declare export function findAPortInUse(startPort: number): Promise<number>;

  declare export function findAPortInUse(
    portList: number[],
    findPortCallback: PortCallback
  ): void;

  declare export function findAPortInUse(
    portList: number[],
    host: string
  ): Promise<number>;

  declare export function findAPortInUse(
    startPort: number,
    findPortCallback: PortCallback
  ): void;

  declare export function findAPortInUse(
    startPort: number,
    host: string
  ): Promise<number>;

  declare export function findAPortInUse(
    startPort: number,
    endPort: number
  ): Promise<number>;

  declare export function findAPortInUse(
    startPort: number,
    endPort: number,
    host: string
  ): Promise<number>;

  declare export function findAPortInUse(
    startPort: number,
    endPort: number,
    findPortCallback: PortCallback
  ): void;

  declare export function findAPortInUse(
    startPort: number,
    endPort: number,
    host: string,
    findPortCallback: PortCallback
  ): void;
}
