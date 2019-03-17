declare module "json2mq" {
  declare export default typeof json2mq;

  declare function json2mq(
    query: json2mq$QueryObject | json2mq$QueryObject[]
  ): string;

  declare interface json2mq$QueryObject {
    [property: string]: string | number | boolean;
  }
}
