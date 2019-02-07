declare module "content-disposition" {
  declare var npm$namespace$contentDisposition: {
    parse: typeof contentDisposition$parse
  };
  declare interface contentDisposition$ContentDisposition {
    type: string;
    parameters: any;
  }

  declare interface contentDisposition$Options {
    type?: string;
    fallback?: string | boolean;
  }

  declare function contentDisposition$parse(
    contentDispositionHeader: string
  ): contentDisposition$ContentDisposition;

  declare function contentDisposition(
    filename?: string,
    options?: contentDisposition$contentDisposition$Options
  ): string;

  declare module.exports: typeof contentDisposition;
}
