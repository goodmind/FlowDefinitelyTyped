declare interface JSX$IntrinsicElements {
  [elemName: string]: any;
}

declare type JSX$Element = xml$JSX$Element;
declare module "global" {
}

declare var npm$namespace$xml: {
  x: typeof xml$x,
  escapeXML: typeof xml$escapeXML,
  unescapeXML: typeof xml$unescapeXML,
  escapeXMLText: typeof xml$escapeXMLText,
  unescapeXMLText: typeof xml$unescapeXMLText
};
declare function xml$x(
  name: string,
  attrs?:
    | string
    | {
        [key: string]: any
      },
  ...children: xml$ElementChild[]
): JSX$Element;

declare var xml$escapeXML: typeof undefined;

declare var xml$unescapeXML: typeof undefined;

declare var xml$escapeXMLText: typeof undefined;

declare var xml$unescapeXMLText: typeof undefined;

declare class xml$Element mixins ltx.xml$Element {
  attrs: {
    [key: string]: any
  };
  append(nodes: xml$ElementChild): xml$Element;
  prepend(nodes: xml$ElementChild): xml$Element;
}

declare type xml$ElementChild =
  | xml$Element
  | xml$Element[]
  | string
  | number
  | boolean;

declare class xml$Parser mixins EventEmitter {
  XMLError: typeof XMLError;
  parser: ltx.xml$Parser;
  root: xml$Element | null;
  cursor: xml$Element | null;
  onStartElement(
    name: string,
    attrs?:
      | string
      | {
          [attrName: string]: any
        }
  ): void;
  onEndElement(name: string): void;
  onText(str: string): void;
  write(data: Buffer): void;
  end(data: Buffer): void;
}
declare module "@xmpp/xml" {
  declare module.exports: typeof xml;

  import typeof * as ltx from "ltx";

  import typeof * as escape from "ltx/lib/escape";

  import type { EventEmitter } from "events";

  declare function xml(
    name: string,
    attrs?:
      | string
      | {
          [key: string]: any
        },
    ...children: xml$xml$ElementChild[]
  ): xml$xml$Element;

  declare class XMLError mixins Error {
    name: "XMLError";
  }
}
