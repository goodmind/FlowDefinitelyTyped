declare module "koa" {
  declare interface Context {
    userAgent: UserAgent$UserAgent.UserAgent$UserAgent;
  }
}

declare var npm$namespace$UserAgent: {
  UserAgent: typeof UserAgent$UserAgent
};
declare interface UserAgent$UserAgent {
  isAuthoritative: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isiPad: boolean;
  isiPod: boolean;
  isiPhone: boolean;
  isAndroid: boolean;
  isBlackberry: boolean;
  isOpera: boolean;
  isIE: boolean;
  isEdge: boolean;
  isIECompatibilityMode: boolean;
  isSafari: boolean;
  isFirefox: boolean;
  isWebkit: boolean;
  isChrome: boolean;
  isKonqueror: boolean;
  isOmniWeb: boolean;
  isSeaMonkey: boolean;
  isFlock: boolean;
  isAmaya: boolean;
  isPhantomJS: boolean;
  isEpiphany: boolean;
  isDesktop: boolean;
  isWindows: boolean;
  isLinux: boolean;
  isLinux64: boolean;
  isMac: boolean;
  isChromeOS: boolean;
  isBada: boolean;
  isSamsung: boolean;
  isRaspberry: boolean;
  isBot: boolean;
  isCurl: boolean;
  isAndroidTablet: boolean;
  isWinJs: boolean;
  isKindleFire: boolean;
  isSilk: boolean;
  isCaptive: boolean;
  isSmartTV: boolean;
  isUC: boolean;
  isElectron: boolean;
  isFacebook: boolean;
  isAlamoFire: boolean;
  silkAccelerated: boolean;
  browser: string;
  version: string;
  os: string;
  platform: string;
  geoIp: { [key: string]: any };
  electronVersion: string;
  source: string;
}

declare var UserAgent$UserAgent: Koa.Middleware;
declare module "koa-useragent" {
  declare module.exports: typeof UserAgent$UserAgent$UserAgent;
}
