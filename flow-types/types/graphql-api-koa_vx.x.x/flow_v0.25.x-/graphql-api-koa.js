declare module "graphql-api-koa" {
  import type { GraphQLSchema } from "graphql";

  import type { Middleware, ParameterizedContext } from "koa";

  declare export interface ExecuteOptions {
    schema?: GraphQLSchema;
    rootValue?: any;
    contextValue?: any;
    fieldResolver?: any;
  }
  declare export function errorHandler(): Middleware;

  declare export function execute<StateT, CustomT>(
    options: ExecuteOptions & {
      override?: (ctx: ParameterizedContext<StateT, CustomT>) => ExecuteOptions
    }
  ): Middleware<StateT, CustomT>;
}
