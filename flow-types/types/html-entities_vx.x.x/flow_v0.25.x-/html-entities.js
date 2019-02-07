declare module "html-entities" {
  declare class Entities {
    encode(toEncode: string): string;
    encodeNonUTF(toEncode: string): string;
    encodeNonASCII(toEncode: string): string;
    decode(toDecode: string): string;
  }
  declare export class XmlEntities mixins Entities {}
  declare export class Html4Entities mixins Entities {}
  declare export class Html5Entities mixins Entities {}
  declare export class AllHtmlEntities mixins Entities {}
}
