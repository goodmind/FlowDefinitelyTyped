declare module "urlparser" {
  declare interface UrlData {
    host: {
      protocol: string,
      username: string,
      password: string,
      hostname: string,
      port: string | number
    };
    path: {
      base: string,
      name: string,
      hash: string
    };
    query: {
      parts: string[],
      params: { [key: string]: any }
    };
    toString: () => string;
  }
  declare interface UrlParser {
    url: (o: UrlData | void) => string;
    host: (o: UrlData | void) => string;
    path: (o: UrlData | void) => string;
    query: (o: UrlData | void) => string;
    parse: (parse: string) => UrlData;
  }
  declare var urlParser: UrlParser;
  declare module.exports: typeof urlParser;
}
