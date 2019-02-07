declare module "mjml" {
  declare interface MJMLParsingOpts {
    fonts?: {
      [key: string]: string
    };
    keepComments?: boolean;
    beautify?: boolean;
    minify?: boolean;
    validationLevel?: "strict" | "soft" | "skip";
    filePath?: string;
  }
  declare interface MJMLParseError {
    line: number;
    message: string;
    tagName: string;
    formattedMessage: string;
  }
  declare interface MJMLParseResults {
    html: string;
    errors: MJMLParseError[];
  }
  declare function mjml2html(
    inp: string,
    opts?: MJMLParsingOpts
  ): MJMLParseResults;

  declare module.exports: typeof mjml2html;
}
