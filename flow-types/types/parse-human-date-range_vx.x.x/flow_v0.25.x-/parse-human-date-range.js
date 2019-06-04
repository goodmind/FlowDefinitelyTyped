declare module "parse-human-date-range" {
  declare export default typeof parse;

  declare function parse(input: string, offset?: Date): Date[];
}
