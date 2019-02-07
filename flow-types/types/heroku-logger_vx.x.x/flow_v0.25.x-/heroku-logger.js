declare module "heroku-logger" {
  declare export function trace(
    message: string,
    data?: { [key: string]: any }
  ): void;

  declare export function debug(
    message: string,
    data?: { [key: string]: any }
  ): void;

  declare export function info(
    message: string,
    data?: { [key: string]: any }
  ): void;

  declare export function warn(
    message: string,
    data?: { [key: string]: any }
  ): void;

  declare export function error(
    message: string,
    data?: { [key: string]: any }
  ): void;

  declare export function fatal(
    message: string,
    data?: { [key: string]: any }
  ): void;

  declare export var Logger: Logger;
  declare export interface LoggerConfig {
    level?: string;
    color?: boolean;
    readable?: boolean;
    prefix?: boolean;
  }
  declare export interface Logger {
    trace(message: string, data?: { [key: string]: any }): void;
    debug(message: string, data?: { [key: string]: any }): void;
    info(message: string, data?: { [key: string]: any }): void;
    warn(message: string, data?: { [key: string]: any }): void;
    error(message: string, data?: { [key: string]: any }): void;
    fatal(message: string, data?: { [key: string]: any }): void;
    new(config: LoggerConfig): LoggerConfig;
  }
}
