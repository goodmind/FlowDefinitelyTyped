declare module "react-json-tree" {
  import type { Component, Props } from "react";

  declare export type JSONTreeProps = {
    data: [any] | {},
    hideRoot?: boolean,
    theme?: {} | string,
    invertTheme?: boolean,
    keyPath?: [string | number],
    sortObjectKeys?: Function | boolean,
    shouldExpandNode?: (
      keyPath: (string | number)[],
      data: [any] | {},
      level: number
    ) => boolean,
    getItemString?: (
      type: string,
      data: [any] | {},
      itemType: string,
      itemString: string
    ) => React$Node,
    labelRenderer?: (
      keyPath: string[],
      nodeType?: string,
      expanded?: boolean,
      expandable?: boolean
    ) => React$Node,
    valueRenderer?: (
      displayValue: string | number,
      rawValue?: string | number | boolean | null,
      ...keyPath: (string | number)[]
    ) => React$Node,
    postprocessValue?: (raw: string) => React$Node,
    isCustomNode?: () => boolean,
    collectionLimit?: number
  } & Props<JSONTreeComponent>;

  declare export default class JSONTreeComponent
    mixins Component<JSONTreeProps, {}> {}
}
