declare module "swagger-parser" {
  import type { Spec as Swagger } from "swagger-schema-official";

  declare var npm$namespace$SwaggerParser: {
    api: typeof SwaggerParser$api,
    $ref: typeof SwaggerParser$$ref
  };
  declare var SwaggerParser$api: any;

  declare var SwaggerParser$$ref: any;
  declare export interface Options {
    allow?: {
      json?: boolean,
      yaml?: boolean,
      empty?: boolean,
      unknown?: boolean
    };
    $ref?: {
      internal?: boolean,
      external?: boolean,
      circular?: boolean | "ignore"
    };
    validate?: {
      schema?: boolean,
      spec?: boolean
    };
    cache?: {
      fs?: number,
      http?: number,
      https?: number
    };
  }
  declare export function parse(
    api: string | Swagger,
    options?: Options
  ): Promise<any>;

  declare export function parse(
    api: string | Swagger,
    callback: (err: any, result?: any) => void
  ): void;

  declare export function parse(
    api: string | Swagger,
    options: Options,
    callback: (err: any, result?: any) => void
  ): void;

  declare export function validate(
    api: string | Swagger,
    options?: Options
  ): Promise<any>;

  declare export function validate(
    api: string | Swagger,
    callback: (err: any, result?: any) => void
  ): void;

  declare export function validate(
    api: string | Swagger,
    options: Options,
    callback: (err: any, result?: any) => void
  ): void;

  declare export function dereference(
    api: string | Swagger,
    options?: Options
  ): Promise<any>;

  declare export function dereference(
    api: string | Swagger,
    callback: (err: any, result?: any) => void
  ): void;

  declare export function dereference(
    api: string | Swagger,
    options: Options,
    callback: (err: any, result?: any) => void
  ): void;

  declare export function bundle(
    api: string | Swagger,
    options?: Options
  ): Promise<any>;

  declare export function bundle(
    api: string | Swagger,
    callback: (err: any, result?: any) => void
  ): void;

  declare export function bundle(
    api: string | Swagger,
    options: Options,
    callback: (err: any, result?: any) => void
  ): void;

  declare export function resolve(
    api: string | Swagger,
    options?: Options
  ): Promise<any>;

  declare export function resolve(
    api: string | Swagger,
    callback: (err: any, result?: any) => void
  ): void;

  declare export function resolve(
    api: string | Swagger,
    options: Options,
    callback: (err: any, result?: any) => void
  ): void;
}
