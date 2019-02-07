declare module "sqlstring" {
  declare export function format(
    sql: string,
    args: { [key: string]: any } | any[]
  ): string;

  declare export function escape(value: any): string;

  declare export function escapeId(value: any, dotQualifier?: boolean): string;

  declare export function raw(
    sql: string
  ): {
    toSqlString: () => string
  };
}
