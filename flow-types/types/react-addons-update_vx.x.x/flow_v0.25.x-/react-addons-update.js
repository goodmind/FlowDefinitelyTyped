declare var npm$namespace$__Addons: {
  update: typeof __Addons$update
};
declare export function __Addons$update(
  value: any[],
  spec: UpdateArraySpec
): any[];

declare export function __Addons$update(value: {}, spec: UpdateSpec): any;
declare module "react" {
  declare interface UpdateSpecCommand {
    $set?: any;
    $merge?: {};
    $apply?: (value: any) => any;
  }
  declare interface UpdateSpecPath {
    [key: string]: UpdateSpec;
  }
  declare type UpdateSpec = number[][] | UpdateSpecCommand | UpdateSpecPath;
  declare type UpdateArraySpec = {
    $push?: any[],
    $unshift?: any[],
    $splice?: any[][]
  } & UpdateSpecCommand;
}
declare module "react-addons-update" {
  import typeof * as React from "react";

  declare module.exports: typeof undefined.__Addons$update;
}
