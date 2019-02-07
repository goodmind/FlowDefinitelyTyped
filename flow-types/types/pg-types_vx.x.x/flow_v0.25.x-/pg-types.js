declare module "pg-types" {
  declare export type TypeParser = (value: any) => any;
  declare export function getTypeParser(
    oid: number,
    format: string
  ): TypeParser;

  declare export function setTypeParser(
    oid: number,
    format: string,
    parseFn: TypeParser
  ): void;

  declare export function setTypeParser(oid: number, parseFn: TypeParser): void;

  declare var npm$namespace$arrayParser: {
    create: typeof arrayParser$create
  };
  declare function arrayParser$create(
    source: any,
    transform: TypeParser
  ): {
    parse(): any[]
  };
}
