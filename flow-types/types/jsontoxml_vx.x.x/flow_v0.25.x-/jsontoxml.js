declare module "jsontoxml" {
  declare var npm$namespace$jsontoxml: {
    escape: typeof jsontoxml$escape,
    cdata: typeof jsontoxml$cdata
  };
  declare function jsontoxml$escape(str: string): string;

  declare function jsontoxml$cdata(str: string): string;

  declare interface jsontoxml$JsonToXmlOptions {
    escape?: boolean;
    xmlHeader?:
      | boolean
      | {
          standalone?: boolean
        };
    docType?: string;
    prettyPrint?: boolean;
    indent?: string;
    removeIllegalNameCharacters?: boolean;
    html?: boolean;
  }
  declare function jsontoxml(
    data: any,
    options?: jsontoxml$JsonToXmlOptions
  ): string;

  declare export default typeof jsontoxml;
}
