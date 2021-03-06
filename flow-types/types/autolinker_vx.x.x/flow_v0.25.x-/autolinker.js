declare interface __Autolinker$ConfigOptions {
  className?: string;
  email?: boolean;
  hashtag?: boolean | string;
  newWindow?: boolean;
  phone?: boolean;
  replaceFn?: (autolinker: __Autolinker$Autolinker, match: any) => string;
  stripPrefix?: boolean;
  truncate?:
    | number
    | {
        length?: number,
        location?: string
      };
  twitter?: boolean;
  urls?:
    | boolean
    | {
        schemeMatches: boolean,
        wwwMatches: boolean,
        tldMatches: boolean
      };
}

declare interface __Autolinker$Autolinker {
  getTagBuilder(): any;

  /**
   * Automatically links URLs, Email addresses, Phone numbers, Twitter handles, and Hashtags found in the given chunk of HTML. Does not link URLs found within HTML tags.
   */
  link(textOrHtml: string): string;

  /**
   * Parses the input textOrHtml looking for URLs, email addresses, phone numbers, username handles, and hashtags (depending on the configuration of the Autolinker instance), and returns an array of Autolinker.match.Match objects describing those matches.
   */
  parse(textOrHtml: string): any[];
}

declare interface __Autolinker$Static {
  new(cfg?: __Autolinker$ConfigOptions): __Autolinker$Autolinker;

  /**
   * Automatically links URLs, Email addresses, Phone Numbers, Twitter handles, and Hashtags found in the given chunk of HTML. Does not link URLs found within HTML tags.
   */
  link(textOrHtml: string, options?: __Autolinker$ConfigOptions): string;
}
declare var __Autolinker$Autolinker: __Autolinker$__Autolinker$Static;
declare module "autolinker" {
  declare module.exports: typeof __Autolinker$Autolinker;
}
