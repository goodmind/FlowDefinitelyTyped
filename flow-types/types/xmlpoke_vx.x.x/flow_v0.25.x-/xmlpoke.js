declare module "XmlPoke" {
  declare interface Transform {
    (node: Node, value: string): Value;
  }
  declare type Value =
    | string
    | boolean
    | number
    | XmlValue
    | CDataValue
    | PathToValueMap
    | Transform;
  declare type PathToValueMap = {
    [xpath: string]: Value
  };
  declare interface API {
    add(xpath: string, value: Value): API;
    add(map: PathToValueMap): API;
    set(xpath: string, value: Value): API;
    set(map: PathToValueMap): API;
    setOrAdd(xpath: string, value: Value): API;
    setOrAdd(map: PathToValueMap): API;
    remove(xpath: string): API;
    clear(xpath: string): API;
    withBasePath(xpath: string): API;
    addNamespace(prefix: string, uri: string): API;
    errorOnNoMatches(): API;
    ensure(xpath: string): API;
  }
  declare interface CDataValue {
    value: string;
  }
  declare interface XmlValue {
    value: string;
  }
}
declare module "xmlpoke" {
  declare var xmlpoke: {
    (xml: string, modify: (api: XmlPoke.API) => void): string,
    CDataValue: (value: string) => XmlPoke.CDataValue,
    XmlString: (value: string) => XmlPoke.XmlValue
  };

  declare module.exports: typeof xmlpoke;
}
