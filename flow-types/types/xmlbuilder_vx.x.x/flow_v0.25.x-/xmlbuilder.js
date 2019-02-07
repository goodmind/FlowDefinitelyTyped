declare module "xmlbuilder" {
  declare module.exports: typeof xmlbuilder;

  declare var npm$namespace$xmlbuilder: {
    create: typeof xmlbuilder$create,
    begin: typeof xmlbuilder$begin
  };
  declare class xmlbuilder$XMLDocType {
    clone(): xmlbuilder$XMLDocType;
    element(name: string, value?: Object): xmlbuilder$XMLDocType;
    attList(
      elementName: string,
      attributeName: string,
      attributeType: string,
      defaultValueType?: string,
      defaultValue?: any
    ): xmlbuilder$XMLDocType;
    entity(name: string, value: any): xmlbuilder$XMLDocType;
    pEntity(name: string, value: any): xmlbuilder$XMLDocType;
    notation(name: string, value: any): xmlbuilder$XMLDocType;
    cdata(value: string): xmlbuilder$XMLDocType;
    comment(value: string): xmlbuilder$XMLDocType;
    instruction(target: string, value: any): xmlbuilder$XMLDocType;
    root(): xmlbuilder$XMLDocType;
    document(): any;
    toString(options?: xmlbuilder$XMLToStringOptions, level?: Number): string;
    ele(name: string, value?: Object): xmlbuilder$XMLDocType;
    att(
      elementName: string,
      attributeName: string,
      attributeType: string,
      defaultValueType?: string,
      defaultValue?: any
    ): xmlbuilder$XMLDocType;
    ent(name: string, value: any): xmlbuilder$XMLDocType;
    pent(name: string, value: any): xmlbuilder$XMLDocType;
    not(name: string, value: any): xmlbuilder$XMLDocType;
    dat(value: string): xmlbuilder$XMLDocType;
    com(value: string): xmlbuilder$XMLDocType;
    ins(target: string, value: any): xmlbuilder$XMLDocType;
    up(): xmlbuilder$XMLDocType;
    doc(): any;
  }

  declare class xmlbuilder$XMLElementOrXMLNode {
    clone(): xmlbuilder$XMLElementOrXMLNode;
    attribute(name: any, value?: any): xmlbuilder$XMLElementOrXMLNode;
    att(name: any, value?: any): xmlbuilder$XMLElementOrXMLNode;
    removeAttribute(name: string): xmlbuilder$XMLElementOrXMLNode;
    instruction(target: string, value: any): xmlbuilder$XMLElementOrXMLNode;
    instruction(array: Array<any>): xmlbuilder$XMLElementOrXMLNode;
    instruction(obj: Object): xmlbuilder$XMLElementOrXMLNode;
    ins(target: string, value: any): xmlbuilder$XMLElementOrXMLNode;
    ins(array: Array<any>): xmlbuilder$XMLElementOrXMLNode;
    ins(obj: Object): xmlbuilder$XMLElementOrXMLNode;
    a(name: any, value?: any): xmlbuilder$XMLElementOrXMLNode;
    i(target: string, value: any): xmlbuilder$XMLElementOrXMLNode;
    i(array: Array<any>): xmlbuilder$XMLElementOrXMLNode;
    i(obj: Object): xmlbuilder$XMLElementOrXMLNode;
    toString(options?: xmlbuilder$XMLToStringOptions, level?: Number): string;
    element(
      name: any,
      attributes?: Object,
      text?: any
    ): xmlbuilder$XMLElementOrXMLNode;
    ele(
      name: any,
      attributes?: Object,
      text?: any
    ): xmlbuilder$XMLElementOrXMLNode;
    insertBefore(
      name: any,
      attributes?: Object,
      text?: any
    ): xmlbuilder$XMLElementOrXMLNode;
    insertAfter(
      name: any,
      attributes?: Object,
      text?: any
    ): xmlbuilder$XMLElementOrXMLNode;
    remove(): xmlbuilder$XMLElementOrXMLNode;
    node(
      name: any,
      attributes?: Object,
      text?: any
    ): xmlbuilder$XMLElementOrXMLNode;
    text(value: string): xmlbuilder$XMLElementOrXMLNode;
    cdata(value: string): xmlbuilder$XMLElementOrXMLNode;
    comment(value: string): xmlbuilder$XMLElementOrXMLNode;
    raw(value: string): xmlbuilder$XMLElementOrXMLNode;
    declaration(
      version: string,
      encoding: string,
      standalone: boolean
    ): xmlbuilder$XMLElementOrXMLNode;
    doctype(pubID: string, sysID: string): xmlbuilder$XMLDocType;
    up(): xmlbuilder$XMLElementOrXMLNode;
    importDocument(
      input: xmlbuilder$XMLElementOrXMLNode
    ): xmlbuilder$XMLElementOrXMLNode;
    root(): xmlbuilder$XMLElementOrXMLNode;
    document(): any;
    end(options?: xmlbuilder$XMLEndOptions): string;
    prev(): xmlbuilder$XMLElementOrXMLNode;
    next(): xmlbuilder$XMLElementOrXMLNode;
    nod(
      name: any,
      attributes?: Object,
      text?: any
    ): xmlbuilder$XMLElementOrXMLNode;
    txt(value: string): xmlbuilder$XMLElementOrXMLNode;
    dat(value: string): xmlbuilder$XMLElementOrXMLNode;
    com(value: string): xmlbuilder$XMLElementOrXMLNode;
    doc(): xmlbuilder$XMLElementOrXMLNode;
    dec(
      version: string,
      encoding: string,
      standalone: boolean
    ): xmlbuilder$XMLElementOrXMLNode;
    dtd(pubID: string, sysID: string): xmlbuilder$XMLDocType;
    e(
      name: any,
      attributes?: Object,
      text?: any
    ): xmlbuilder$XMLElementOrXMLNode;
    n(
      name: any,
      attributes?: Object,
      text?: any
    ): xmlbuilder$XMLElementOrXMLNode;
    t(value: string): xmlbuilder$XMLElementOrXMLNode;
    d(value: string): xmlbuilder$XMLElementOrXMLNode;
    c(value: string): xmlbuilder$XMLElementOrXMLNode;
    r(value: string): xmlbuilder$XMLElementOrXMLNode;
    u(): xmlbuilder$XMLElementOrXMLNode;
  }

  declare interface xmlbuilder$XMLDec {
    version?: string;
    encoding?: string;
    standalone?: boolean;
  }

  declare interface xmlbuilder$XMLDtd {
    pubID?: string;
    sysID?: string;
  }

  declare interface xmlbuilder$XMLStringifier {
    [x: string]: ((v: any) => string) | string;
  }

  declare interface xmlbuilder$XMLWriter {
    [x: string]: (e: xmlbuilder$XMLElementOrXMLNode, level?: number) => void;
  }

  declare interface xmlbuilder$XMLCreateOptions {
    headless?: boolean;
    skipNullNodes?: boolean;
    skipNullAttributes?: boolean;
    ignoreDecorators?: boolean;
    separateArrayItems?: boolean;
    noDoubleEncoding?: boolean;
    stringify?: xmlbuilder$XMLStringifier;
  }

  declare interface xmlbuilder$XMLToStringOptions {
    pretty?: boolean;
    indent?: string;
    offset?: number;
    newline?: string;
    allowEmpty?: boolean;
    spacebeforeslash?: string;
  }

  declare type xmlbuilder$XMLEndOptions = {
    writer?: xmlbuilder$XMLWriter
  } & xmlbuilder$XMLToStringOptions;

  declare function xmlbuilder$create(
    nameOrObjSpec:
      | string
      | {
          [name: string]: Object
        },
    xmldecOrOptions?: xmlbuilder$XMLDec | xmlbuilder$XMLCreateOptions,
    doctypeOrOptions?: xmlbuilder$XMLDtd | xmlbuilder$XMLCreateOptions,
    options?: xmlbuilder$XMLCreateOptions
  ): xmlbuilder$XMLElementOrXMLNode;

  declare function xmlbuilder$begin(): xmlbuilder$XMLElementOrXMLNode;
}
