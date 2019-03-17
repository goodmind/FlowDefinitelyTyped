declare module "slate-html-serializer" {
  import typeof * as React from "react";

  import type {
    BlockProperties,
    ValueJSON,
    Value,
    Node as SlateNode,
    Mark,
    Leaf
  } from "slate";

  declare export interface Rule {
    deserialize?: (
      el: Element,
      next: (elements: Element[] | NodeList | Array<Node & ChildNode>) => any
    ) => any;
    serialize?: (obj: any, children: string) => React.Node;
  }
  declare export interface HtmlOptions {
    rules?: Rule[];
    defaultBlock?: BlockProperties;
    parseHtml?: (html: string) => HTMLElement;
  }
  declare export default class Html {
    constructor(options?: HtmlOptions): this;
    deserialize(
      html: string,
      options: {
        toJSON: true
      }
    ): ValueJSON;
    deserialize(
      html: string,
      options?: {
        toJSON?: false
      }
    ): Value;
    serialize(
      value: Value,
      options?: {
        render?: true
      }
    ): string;
    serialize(
      value: Value,
      options: {
        render: false
      }
    ): Element[];
    rules: Rule[];
    defaultBlock: BlockProperties;
    parseHtml: (html: string) => HTMLElement;
    deserializeElements: (elements: HTMLElement[]) => SlateNode[];
    deserializeElement: (element: HTMLElement) => any;
    deserializeMark: (mark: Mark) => SlateNode[];
    serializeNode: (node: SlateNode) => string;
    serializeLeaf: (leaf: Leaf) => string;
    serializeString: (string: string) => string;
  }
}
