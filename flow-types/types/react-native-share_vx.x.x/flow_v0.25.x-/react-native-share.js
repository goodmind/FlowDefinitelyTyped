declare module "react-native-share" {
  declare var npm$namespace$Share: {
    open: typeof Share$open,
    shareSingle: typeof Share$shareSingle
  };
  declare function Share$open(
    options: Options | MultipleOptions
  ): Promise<OpenReturn>;

  declare function Share$shareSingle(
    options: Options & {
      social: SupportedSocialApps
    }
  ): Promise<ShareSingleReturn>;

  declare export default typeof Share;

  declare interface OpenReturn {
    app?: string;
    dismissedAction?: boolean;
  }
  declare interface ShareSingleReturn {
    message: string;
  }
  declare interface Options {
    url: string;
    urls?: string[];
    type?: string;
    message?: string;
    title?: string;
    subject?: string;
    excludedActivityTypes?: string;
    failOnCancel?: boolean;
    showAppsToView?: boolean;
  }
  declare interface MultipleOptions {
    url?: string;
    urls: string[];
    type?: string;
    message?: string;
    title?: string;
    subject?: string;
    excludedActivityTypes?: string;
    failOnCancel?: boolean;
    showAppsToView?: boolean;
  }
  declare type SupportedSocialApps =
    | "facebook"
    | "pagesmanager"
    | "twitter"
    | "whatsapp"
    | "instagram"
    | "googleplus"
    | "email";
}
