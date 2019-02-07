declare module "graphql-list-fields" {
  import type { GraphQLResolveInfo } from "graphql";

  declare function getFieldList(info: GraphQLResolveInfo): string[];

  declare module.exports: typeof getFieldList;
}
