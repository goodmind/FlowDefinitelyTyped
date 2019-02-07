declare module "express-graphql" {
  import type { Request, Response } from "express";

  import type { DocumentNode, GraphQLSchema, GraphQLError } from "graphql";

  declare module.exports: typeof graphqlHTTP;

  /**
   * Used to configure the graphqlHTTP middleware by providing a schema
   * and other configuration options.
   *
   * Options can be provided as an Object, a Promise for an Object, or a Function
   * that returns an Object or a Promise for an Object.
   */
  declare export type graphqlHTTP$Options =
    | ((
        request: Request,
        response: Response,
        params?: graphqlHTTP$GraphQLParams
      ) => graphqlHTTP$OptionsResult)
    | graphqlHTTP$OptionsResult;

  declare export type graphqlHTTP$OptionsResult =
    | graphqlHTTP$OptionsData
    | Promise<graphqlHTTP$OptionsData>;

  declare export interface graphqlHTTP$OptionsData {
    /**
     * A GraphQL schema from graphql-js.
     */
    schema: GraphQLSchema;

    /**
     * A value to pass as the context to the graphql() function.
     */
    context?: any;

    /**
     * An object to pass as the rootValue to the graphql() function.
     */
    rootValue?: any;

    /**
     * A boolean to configure whether the output should be pretty-printed.
     */
    pretty?: boolean | null;

    /**
     * An optional function which will be used to format any errors produced by
     * fulfilling a GraphQL operation. If no function is provided, GraphQL's
     * default spec-compliant `formatError` function will be used.
     */
    formatError?: ((error: GraphQLError) => any) | null;

    /**
     * An optional array of validation rules that will be applied on the document
     * in additional to those defined by the GraphQL spec.
     */
    validationRules?: any[] | null;

    /**
     * An optional function for adding additional metadata to the GraphQL response
     * as a key-value object. The result will be added to "extensions" field in
     * the resulting JSON. This is often a useful place to add development time
     * info such as the runtime of a query or the amount of resources consumed.
     *
     * Information about the request is provided to be used.
     *
     * This function may be async.
     */
    extensions?:
      | ((
          info: graphqlHTTP$RequestInfo
        ) => {
          [key: string]: any
        })
      | null;

    /**
     * A boolean to optionally enable GraphiQL mode.
     */
    graphiql?: boolean | null;
  }

  /**
   * All information about a GraphQL request.
   */
  declare export interface graphqlHTTP$RequestInfo {
    /**
     * The parsed GraphQL document.
     */
    document: DocumentNode | null | void;

    /**
     * The variable values used at runtime.
     */
    variables: {
      [name: string]: any
    } | null | void;

    /**
     * The (optional) operation name requested.
     */
    operationName: string | null | void;

    /**
     * The result of executing the operation.
     */
    result: any;
  }

  declare export interface graphqlHTTP$GraphQLParams {
    query: string | null | void;
    variables: {
      [name: string]: any
    } | null | void;
    operationName: string | null | void;
    raw: boolean | null | void;
  }

  declare type graphqlHTTP$Middleware = (
    request: Request,
    response: Response
  ) => Promise<void>;

  /**
   * Middleware for express; takes an options object or function as input to
   * configure behavior, and returns an express middleware.
   */
  declare function graphqlHTTP(
    options: graphqlHTTP$graphqlHTTP$Options
  ): graphqlHTTP$graphqlHTTP$Middleware;
}
