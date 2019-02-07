declare module "react-native-custom-tabs" {
  declare export interface Animations {
    startEnter: string;
    startExit: string;
    endEnter: string;
    endExit: string;
  }
  declare export interface CustomTabsOptions {
    toolbarColor?: string;
    enableUrlBarHiding?: boolean;
    showPageTitle?: boolean;
    enableDefaultShare?: boolean;
    animations?: Animations;
    headers?: any;
  }

  declare var npm$namespace$CustomTabs: {
    openURL: typeof CustomTabs$openURL
  };
  declare function CustomTabs$openURL(
    url: string,
    options?: CustomTabsOptions
  ): Promise<boolean>;
}
