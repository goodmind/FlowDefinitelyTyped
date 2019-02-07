declare module "to-snake-case" {
  declare function toSnakeCase(str: string): string;

  declare module.exports: typeof toSnakeCase;
}
