declare module "global" {
  declare interface Window {
    jQBrowser: Matchs;
  }
  declare interface JQueryStatic {
    browser: Matchs;
  }
}
declare module "jquery.browser" {
  declare export interface Matchs {
    version?: string;
    versionNumber?: number;
    platform?: string;
    mobile?: boolean;
    desktop?: boolean;
    webkit?: boolean;
    name?: string;
    android?: boolean;
    bb?: boolean;
    blackberry?: boolean;
    ipad?: boolean;
    iphone?: boolean;
    ipod?: boolean;
    kindle?: boolean;
    playbook?: boolean;
    silk?: boolean;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"?: boolean;
    cros?: boolean;
    mac?: boolean;
    linux?: boolean;
    win?: boolean;
    chrome?: boolean;
    opr?: boolean;
    safari?: boolean;
    rv?: boolean;
    iemobile?: boolean;
    msie?: boolean;
    msedge?: boolean;
    uaMatch: (ua?: string) => Matchs;
  }
}
