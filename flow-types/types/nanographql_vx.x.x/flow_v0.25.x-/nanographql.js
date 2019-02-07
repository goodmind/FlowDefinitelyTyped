declare module "nanographql" {
  declare module.exports: typeof nanographql;

  declare function nanographql(
    query: TemplateStringsArray | string
  ): (variables?: { [key: string]: any }) => string;
}
