declare module "passport-steam" {
  declare module.exports: typeof passport_steam;

  declare function passport_steam(options: any, validate: any): any;

  declare var npm$namespace$passport_steam: {
    Strategy: typeof passport_steam$Strategy,
    version: typeof passport_steam$version
  };
  declare var passport_steam$Strategy: any;

  declare var passport_steam$version: string;

  declare var npm$namespace$prototype: {
    authenticate: typeof prototype$authenticate,
    loadAssociation: typeof prototype$loadAssociation,
    loadDiscoveredInfo: typeof prototype$loadDiscoveredInfo,
    loadDiscoveredInformation: typeof prototype$loadDiscoveredInformation,
    saveAssociation: typeof prototype$saveAssociation,
    saveDiscoveredInfo: typeof prototype$saveDiscoveredInfo,
    saveDiscoveredInformation: typeof prototype$saveDiscoveredInformation
  };
  declare function prototype$authenticate(req: any): any;

  declare function prototype$loadAssociation(fn: any): any;

  declare function prototype$loadDiscoveredInfo(fn: any): any;

  declare function prototype$loadDiscoveredInformation(fn: any): any;

  declare function prototype$saveAssociation(fn: any): any;

  declare function prototype$saveDiscoveredInfo(fn: any): any;

  declare function prototype$saveDiscoveredInformation(fn: any): any;

  declare var npm$namespace$authenticate: {
    prototype: typeof authenticate$prototype
  };
  declare var authenticate$prototype: {};

  declare var npm$namespace$loadAssociation: {
    prototype: typeof loadAssociation$prototype
  };
  declare var loadAssociation$prototype: {};

  declare var npm$namespace$loadDiscoveredInfo: {
    prototype: typeof loadDiscoveredInfo$prototype
  };
  declare var loadDiscoveredInfo$prototype: {};

  declare var npm$namespace$loadDiscoveredInformation: {
    prototype: typeof loadDiscoveredInformation$prototype
  };
  declare var loadDiscoveredInformation$prototype: {};

  declare var npm$namespace$saveAssociation: {
    prototype: typeof saveAssociation$prototype
  };
  declare var saveAssociation$prototype: {};

  declare var npm$namespace$saveDiscoveredInfo: {
    prototype: typeof saveDiscoveredInfo$prototype
  };
  declare var saveDiscoveredInfo$prototype: {};

  declare var npm$namespace$saveDiscoveredInformation: {
    prototype: typeof saveDiscoveredInformation$prototype
  };
  declare var saveDiscoveredInformation$prototype: {};
}
