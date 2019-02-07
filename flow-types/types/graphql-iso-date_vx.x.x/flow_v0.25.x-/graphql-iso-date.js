declare module "graphql-iso-date" {
  import type { GraphQLScalarType } from "graphql";

  declare export var GraphQLDate: GraphQLScalarType;
  declare export var GraphQLTime: GraphQLScalarType;
  declare export var GraphQLDateTime: GraphQLScalarType;
}
