declare module "xml" {
  declare interface Option {
    /**
     * String used for tab, defaults to no tabs (compressed)
     */
    indent?: string;

    /**
     * Return the result as a `stream` (default false)
     */
    stream?: boolean;

    /**
     * Add default xml declaration (default false)
     */
    declaration?:
      | boolean
      | {
          encoding?: string,
          standalone?: string
        };
  }
  declare interface XmlAttrs {
    [attr: string]: string;
  }
  declare interface XmlDescArray {
    [index: number]:
      | {
          _attr: XmlAttrs
        }
      | XmlObject;
  }
  declare interface ElementObject {
    push(xmlObject: XmlObject): void;
    close(xmlObject?: XmlObject): void;
  }
  declare type XmlAtom = string | number | boolean;
  declare type XmlDesc =
    | {
        _attr: XmlAttrs
      }
    | {
        _cdata: string
      }
    | {
        _attr: XmlAttrs,
        _cdata: string
      }
    | XmlAtom
    | XmlAtom[]
    | XmlDescArray;
  declare type XmlObject =
    | {
        [tag: string]: ElementObject | XmlDesc
      }
    | XmlDesc;

  declare var npm$namespace$xml: {
    element: typeof xml$element,
    Element: typeof xml$Element
  };
  declare function xml$element(...xmlObjects: XmlObject[]): ElementObject;

  declare function xml$Element(...xmlObjects: XmlObject[]): ElementObject;

  declare function xml(
    xmlObject: XmlObject | XmlObject[],
    options: {
      stream: true,
      indent?: string
    }
  ): NodeJS.ReadableStream;

  declare function xml(
    xmlObject?: XmlObject | XmlObject[],
    options?: boolean | string | Option
  ): string;

  declare module.exports: typeof xml;
}
