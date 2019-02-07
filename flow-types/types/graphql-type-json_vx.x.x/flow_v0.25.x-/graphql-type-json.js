declare module "graphql-type-json" {
  import type { GraphQLScalarType } from "graphql";

  declare var GraphQLJSON: GraphQLScalarType;
  declare module.exports: typeof GraphQLJSON;
}
