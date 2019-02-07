declare module "jsonrpc-serializer" {
  declare export type PayloadType =
    | "request"
    | "notification"
    | "success"
    | "error";
  declare export interface DeserializeObject {
    type: PayloadType;
    payload:
      | RequestPayloadObject
      | NotificationPayloadObject
      | SuccessPayloadObject
      | ErrorPayloadObject;
  }
  declare export interface PayloadObject {
    id?: string | number;
    method?: string;
    params?: any;
    result?: any;
    error?: SerializerError;
  }
  declare export type RequestPayloadObject = {
    id: string,
    method: string,
    params: any
  } & PayloadObject;

  declare export type NotificationPayloadObject = {
    method: string,
    params: any
  } & PayloadObject;

  declare export type SuccessPayloadObject = {
    id: string | number,
    result: any
  } & PayloadObject;

  declare export type ErrorPayloadObject = {
    id: string | number,
    error: SerializerError
  } & PayloadObject;

  declare export type SerializerError = {
    name: string,
    code: number,
    message: string,
    data?: any[]
  } & Error;

  declare export function request(
    id: string | number,
    method: string,
    params?: any
  ): string;

  declare export function notification(method: string, params?: any): string;

  declare export function success(id: string | number, result: any): string;

  declare export function error(
    id: string | number,
    error: err$err$JsonRpcError
  ): string;

  declare export function deserialize(msg: string): DeserializeObject;

  declare export function requestObject(
    id: string | number,
    method: string,
    params?: any
  ): PayloadObject;

  declare export function notificationObject(
    method: string,
    params?: any
  ): PayloadObject;

  declare export function successObject(
    id: string | number,
    result: any
  ): PayloadObject;

  declare export function errorObject(
    id: string | number,
    error: SerializerError
  ): PayloadObject;

  declare export function deserializeObject(
    msg: PayloadObject
  ): DeserializeObject;

  declare export type errorHandler = (errors: string[] | null) => void;
  declare type err$ErrorName =
    | "JsonRpcError"
    | "ParseError"
    | "InvalidRequestError"
    | "MethodNotFoundError"
    | "InvalidParamsError";

  declare type err$ErrorCode = -32603 | -32700 | -32600 | -32601 | -32602;

  declare class err$JsonRpcError mixins Error, SerializerError {
    name: string | err$ErrorName;
    code: number | err$ErrorCode;
    message: string;
    data: any[];
    constructor(msg: string, ...args: any[]): this;
    serialize(): string;
  }

  declare class err$InvalidParamsError mixins err$JsonRpcError {
    constructor(...args: any[]): this;
  }

  declare class err$InvalidRequestError mixins err$JsonRpcError {
    constructor(...args: any[]): this;
  }

  declare class err$MethodNotFoundError mixins err$JsonRpcError {
    constructor(...args: any[]): this;
  }

  declare class err$ParseError mixins err$JsonRpcError {
    constructor(...args: any[]): this;
  }
}
