declare module "express-winston" {
  import type {
    ErrorRequestHandler,
    Handler,
    Request,
    Response
  } from "express";

  import typeof * as winston from "winston";

  import typeof * as Transport from "winston-transport";

  declare export type DynamicMetaFunction = (
    req: Request,
    res: Response,
    err: Error
  ) => { [key: string]: any };
  declare export type DynamicLevelFunction = (
    req: Request,
    res: Response,
    err: Error
  ) => string;
  declare export type RequestFilter = (
    req: Request,
    propName: string
  ) => boolean;
  declare export type ResponseFilter = (
    res: Response,
    propName: string
  ) => boolean;
  declare export type RouteFilter = (req: Request, res: Response) => boolean;
  declare export interface BaseLoggerOptions {
    baseMeta?: { [key: string]: any };
    bodyBlacklist?: string[];
    bodyWhitelist?: string[];
    colorize?: boolean;
    dynamicMeta?: DynamicMetaFunction;
    expressFormat?: boolean;
    ignoreRoute?: RouteFilter;
    ignoredRoutes?: string[];
    level?: string | DynamicLevelFunction;
    meta?: boolean;
    metaField?: string;
    msg?: string;
    requestFilter?: RequestFilter;
    requestWhitelist?: string[];
    responseFilter?: ResponseFilter;
    responseWhitelist?: string[];
    skip?: RouteFilter;
    statusLevels?: {
      error?: string,
      success?: string,
      warn?: string
    };
  }
  declare export type LoggerOptionsWithTransports = {
    transports: Transport[]
  } & BaseLoggerOptions;

  declare export type LoggerOptionsWithWinstonInstance = {
    winstonInstance: winston.Logger
  } & BaseLoggerOptions;

  declare export type LoggerOptions =
    | LoggerOptionsWithTransports
    | LoggerOptionsWithWinstonInstance;
  declare export function logger(options: LoggerOptions): Handler;

  declare export interface BaseErrorLoggerOptions {
    baseMeta?: { [key: string]: any };
    dynamicMeta?: DynamicMetaFunction;
    level?: string | DynamicLevelFunction;
    metaField?: string;
    msg?: string;
    requestFilter?: RequestFilter;
    requestWhitelist?: string[];
  }
  declare export type ErrorLoggerOptionsWithTransports = {
    transports: Transport[]
  } & BaseErrorLoggerOptions;

  declare export type ErrorLoggerOptionsWithWinstonInstance = {
    winstonInstance: winston.Logger
  } & BaseErrorLoggerOptions;

  declare export type ErrorLoggerOptions =
    | ErrorLoggerOptionsWithTransports
    | ErrorLoggerOptionsWithWinstonInstance;
  declare export function errorLogger(
    options: ErrorLoggerOptions
  ): ErrorRequestHandler;

  declare export var requestWhitelist: string[];
  declare export var bodyWhitelist: string[];
  declare export var bodyBlacklist: string[];
  declare export var responseWhitelist: string[];
  declare export var ignoredRoutes: string[];
  declare export var defaultRequestFilter: RequestFilter;
  declare export var defaultResponseFilter: ResponseFilter;
  declare export function defaultSkip(): boolean;

  declare export type ExpressWinstonRequest = {
    _routeWhitelists: {
      body: string[],
      req: string[],
      res: string[]
    }
  } & Request;
}
