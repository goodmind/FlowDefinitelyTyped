declare module "inline-css" {
  declare export interface InlineCss$Options {
    url: string;
    extraCss?: string;
    applyStyleTags?: boolean;
    applyLinkTags?: boolean;
    removeStyleTags?: boolean;
    removeLinkTags?: boolean;
    preserveMediaQueries?: boolean;
    applyWidthAttributes?: boolean;
    applyTableAttributes?: boolean;
  }
  declare function InlineCss(
    html: string,
    options: InlineCss$InlineCss$Options
  ): Promise<string>;

  declare module.exports: typeof InlineCss;
}
