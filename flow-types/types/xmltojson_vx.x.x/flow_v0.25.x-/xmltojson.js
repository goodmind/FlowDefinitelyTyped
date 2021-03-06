declare module "xmltojson" {
  declare export default typeof xmltojson;

  declare var npm$namespace$xmltojson: {
    grokType: typeof xmltojson$grokType,
    parseString: typeof xmltojson$parseString,
    parseXml: typeof xmltojson$parseXml,
    xmlToString: typeof xmltojson$xmlToString,
    stringToXml: typeof xmltojson$stringToXml
  };
  declare function xmltojson$grokType(sValue: any): any;

  declare function xmltojson$parseString(
    xmlString: string,
    opt: xmltojson$Options
  ): Object;

  declare function xmltojson$parseXml(
    oXMLParent: Document,
    opt: xmltojson$Options
  ): Object;

  declare function xmltojson$xmlToString(xmlDoc: Document): string;

  declare function xmltojson$stringToXml(xmlString: string): Document;

  declare interface xmltojson$Options {
    mergeCDATA?: boolean;
    grokAttr?: boolean;
    grokText?: boolean;
    normalize?: boolean;
    xmlns?: boolean;
    namespaceKey?: string;
    textKey?: string;
    valueKey?: string;
    attrKey?: string;
    cdataKey?: string;
    attrsAsObject?: boolean;
    stripAttrPrefix?: boolean;
    stripElemPrefix?: boolean;
    childrenAsArray?: boolean;
  }
}
