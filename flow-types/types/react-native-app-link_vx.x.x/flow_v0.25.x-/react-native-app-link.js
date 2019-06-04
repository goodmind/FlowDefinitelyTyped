declare module "react-native-app-link" {
  declare export interface AppLinkOptions {
    +appName: string;
    +appStoreId: number;
    +appStoreLocale: string;
    +playStoreId: string;
  }
  declare var AppLink: typeof npm$namespace$AppLink;

  declare var npm$namespace$AppLink: {
    maybeOpenURL: typeof AppLink$maybeOpenURL,
    openInStore: typeof AppLink$openInStore
  };
  declare function AppLink$maybeOpenURL(
    url: string,
    options: AppLinkOptions
  ): Promise<void>;

  declare function AppLink$openInStore(options: AppLinkOptions): Promise<void>;

  declare export default typeof AppLink;

  declare var maybeOpenURL: typeof AppLink$maybeOpenURL;
  declare var openInStore: typeof AppLink$openInStore;
  declare export { maybeOpenURL, openInStore };
}
