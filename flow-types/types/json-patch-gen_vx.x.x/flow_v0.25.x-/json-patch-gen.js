declare module "json-patch-gen" {
  declare function diff(
    obj1: { [key: string]: any } | null,
    obj2: { [key: string]: any } | null
  ): diff$diff$JsonPatch[];

  declare type diff$PatchOperation = "replace" | "add" | "remove";

  declare interface diff$JsonPatch {
    op: diff$PatchOperation;
    path: string;
    value: any;
  }
  declare module.exports: typeof diff;
}
