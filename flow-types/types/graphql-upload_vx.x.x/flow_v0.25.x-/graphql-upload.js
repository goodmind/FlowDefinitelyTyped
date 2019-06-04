declare module "graphql-upload" {
  import type { IncomingMessage, ServerResponse } from "http";

  import type { GraphQLScalarType } from "graphql";

  import type { RequestHandler } from "express";

  import type { Middleware } from "koa";

  declare export interface UploadOptions {
    maxFieldSize?: number;
    maxFileSize?: number;
    maxFiles?: number;
  }
  declare export interface GraphQLOperation {
    query: string;
    operationName?: null | string;
    variables?: null | mixed;
  }
  declare export function processRequest(
    request: IncomingMessage,
    response: ServerResponse,
    uploadOptions?: UploadOptions
  ): Promise<GraphQLOperation | GraphQLOperation[]>;

  declare export function graphqlUploadExpress(
    uploadOptions?: UploadOptions
  ): RequestHandler;

  declare export function graphqlUploadKoa<StateT, CustomT>(
    uploadOptions?: UploadOptions
  ): Middleware<StateT, CustomT>;

  declare export var GraphQLUpload: GraphQLScalarType;
}
