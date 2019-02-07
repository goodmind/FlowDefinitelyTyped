declare module "swig-email-templates" {
  declare type SwigRender<T> = (
    file: string,
    context: T,
    callback: (err: any, html: string, text: string) => any
  ) => any;
  declare type SwigEmailTemplatesOptions = {
    root?: string,
    juice?: any,
    rewriteUrl?: (href: string) => string,
    rewrite?: ($: JQueryStatic) => void
  } & swig.SwigOptions;

  declare class EmailTemplates {
    constructor(options?: SwigEmailTemplatesOptions): this;
    generateText(
      templatePath: string,
      context: any,
      html: string,
      cb: (error: any, text: string | null) => void
    ): void;
    generateSubject(
      templatePath: string,
      context: any,
      cb: (error: any, text: string | null) => void
    ): void;
    rewriteUrls($: JQueryStatic, rewrite: (href: string) => void): void;
    render(
      templatePath: string,
      context: any,
      cb: (
        error: any,
        inlinedHTML?: string,
        text?: string,
        subject?: string
      ) => void
    ): void;
  }
  declare module.exports: typeof EmailTemplates;
}
