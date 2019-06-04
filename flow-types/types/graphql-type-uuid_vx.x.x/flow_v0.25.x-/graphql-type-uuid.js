declare module "graphql-type-uuid" {
  import type { GraphQLScalarType } from "graphql";

  declare var GraphQLJSON: GraphQLScalarType;
  declare export default typeof GraphQLJSON;
}
