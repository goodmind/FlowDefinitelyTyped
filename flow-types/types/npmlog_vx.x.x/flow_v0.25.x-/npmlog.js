declare module "npmlog" {
  declare export var LogLevels: {|
    +silly: "silly", // "silly"
    +verbose: "verbose", // "verbose"
    +info: "info", // "info"
    +http: "http", // "http"
    +warn: "warn", // "warn"
    +error: "error" // "error"
  |};

  declare export interface StyleObject {
    fg?: string;
    bg?: string;
    bold?: boolean;
    inverse?: boolean;
    underline?: boolean;
    bell?: boolean;
  }
  declare export interface MessageObject {
    id: number;
    level: string;
    prefix: string;
    message: string;
    messageRaw: string;
  }
  declare export function log(
    level: LogLevels | string,
    prefix: string,
    message: string,
    ...args: any[]
  ): void;

  declare export function silly(
    prefix: string,
    message: string,
    ...args: any[]
  ): void;

  declare export function verbose(
    prefix: string,
    message: string,
    ...args: any[]
  ): void;

  declare export function info(
    prefix: string,
    message: string,
    ...args: any[]
  ): void;

  declare export function http(
    prefix: string,
    message: string,
    ...args: any[]
  ): void;

  declare export function warn(
    prefix: string,
    message: string,
    ...args: any[]
  ): void;

  declare export function error(
    prefix: string,
    message: string,
    ...args: any[]
  ): void;

  declare export var level: string;
  declare export var record: MessageObject[];
  declare export var maxRecordSize: number;
  declare export var prefixStyle: StyleObject;
  declare export var headingStyle: StyleObject;
  declare export var heading: string;
  declare export var stream: any;
  declare export function enableColor(): void;

  declare export function disableColor(): void;

  declare export function enableProgress(): void;

  declare export function disableProgress(): void;

  declare export function enableUnicode(): void;

  declare export function disableUnicode(): void;

  declare export function pause(): void;

  declare export function resume(): void;

  declare export function addLevel(
    level: string,
    n: number,
    style?: StyleObject,
    disp?: string
  ): void;
}
