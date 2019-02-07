declare module "koa-helmet" {
  import type {
    IHelmetConfiguration,
    IHelmetFrameguardConfiguration,
    IHelmetHstsConfiguration,
    IHelmetXssFilterConfiguration,
    IHelmetDnsPrefetchControlConfiguration,
    IHelmetHpkpConfiguration,
    IHelmetReferrerPolicyConfiguration
  } from "helmet";

  import type { Middleware, Context } from "koa";

  declare type koaHelmet$KoaHelmetContentSecurityPolicyDirectiveFunction = (
    ctx: Context
  ) => string;

  declare type koaHelmet$KoaHelmetCspDirectiveValue =
    | string
    | koaHelmet$KoaHelmetContentSecurityPolicyDirectiveFunction;

  declare interface koaHelmet$KoaHelmetContentSecurityPolicyDirectives {
    baseUri?: koaHelmet$KoaHelmetCspDirectiveValue[];
    childSrc?: koaHelmet$KoaHelmetCspDirectiveValue[];
    connectSrc?: koaHelmet$KoaHelmetCspDirectiveValue[];
    defaultSrc?: koaHelmet$KoaHelmetCspDirectiveValue[];
    fontSrc?: koaHelmet$KoaHelmetCspDirectiveValue[];
    formAction?: koaHelmet$KoaHelmetCspDirectiveValue[];
    frameAncestors?: koaHelmet$KoaHelmetCspDirectiveValue[];
    frameSrc?: koaHelmet$KoaHelmetCspDirectiveValue[];
    imgSrc?: koaHelmet$KoaHelmetCspDirectiveValue[];
    mediaSrc?: koaHelmet$KoaHelmetCspDirectiveValue[];
    objectSrc?: koaHelmet$KoaHelmetCspDirectiveValue[];
    pluginTypes?: koaHelmet$KoaHelmetCspDirectiveValue[];
    reportUri?: string;
    sandbox?: koaHelmet$KoaHelmetCspDirectiveValue[];
    scriptSrc?: koaHelmet$KoaHelmetCspDirectiveValue[];
    styleSrc?: koaHelmet$KoaHelmetCspDirectiveValue[];
  }

  declare interface koaHelmet$KoaHelmetContentSecurityPolicyConfiguration {
    reportOnly?: boolean;
    setAllHeaders?: boolean;
    disableAndroid?: boolean;
    browserSniff?: boolean;
    directives?: koaHelmet$KoaHelmetContentSecurityPolicyDirectives;
  }

  declare interface koaHelmet$KoaHelmet {
    (options?: IHelmetConfiguration): Middleware;
    contentSecurityPolicy(
      options?: koaHelmet$KoaHelmetContentSecurityPolicyConfiguration
    ): Middleware;
    dnsPrefetchControl(
      options?: IHelmetDnsPrefetchControlConfiguration
    ): Middleware;
    frameguard(options?: IHelmetFrameguardConfiguration): Middleware;
    hpkp(options?: IHelmetHpkpConfiguration): Middleware;
    hsts(options?: IHelmetHstsConfiguration): Middleware;
    ieNoOpen(): Middleware;
    noCache(options?: any): Middleware;
    noSniff(): Middleware;
    referrerPolicy(options?: IHelmetReferrerPolicyConfiguration): Middleware;
    xssFilter(options?: IHelmetXssFilterConfiguration): Middleware;
  }
  declare var koaHelmet: koaHelmet$koaHelmet$KoaHelmet;
  declare module.exports: typeof koaHelmet;
}
