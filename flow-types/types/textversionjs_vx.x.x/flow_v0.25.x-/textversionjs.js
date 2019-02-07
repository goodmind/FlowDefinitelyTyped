declare module "textversionjs" {
  declare function textversionjs(
    html: string,
    textversionjs$styleConfig?: textversionjs$textversionjs$styleConfig
  ): string;

  declare type textversionjs$linkProcess = (
    href: string,
    linkText: string
  ) => string;

  declare type textversionjs$imgProcess = (src: string, alt: string) => string;

  declare interface textversionjs$styleConfig {
    textversionjs$linkProcess?: textversionjs$linkProcess;
    textversionjs$imgProcess?: textversionjs$imgProcess;
    headingStyle?: "underline" | "linebreak" | "hashify";
    listStyle?: "indentation" | "linebreak";
    uIndentionChar?: string;
    oIndentionChar?: string;
    listIndentionTabs?: number;
    keepNbsps?: boolean;
  }
  declare module.exports: typeof textversionjs;
}
