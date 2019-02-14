declare module "lusca" {
  declare function lusca(options?: lusca$LuscaOptions): express.RequestHandler;

  declare var npm$namespace$lusca: {
    csrf: typeof lusca$csrf,
    csp: typeof lusca$csp,
    xframe: typeof lusca$xframe,
    p3p: typeof lusca$p3p,
    hsts: typeof lusca$hsts,
    xssProtection: typeof lusca$xssProtection,
    nosniff: typeof lusca$nosniff,
    referrerPolicy: typeof lusca$referrerPolicy
  };
  declare interface lusca$LuscaOptions {
    csrf?: lusca$csrfOptions | boolean;
    csp?: lusca$cspOptions | false;
    xframe?: string | false;
    p3p?: string | false;
    hsts?: lusca$hstsOptions | false;
    xssProtection?: lusca$xssProtectionOptions | boolean;
    nosniff?: boolean;
    referrerPolicy?: string | false;
  }

  declare interface lusca$cspOptions {
    policy?:
      | string
      | { [key: string]: any }
      | Array<{ [key: string]: any } | string>;
    reportOnly?: boolean;
    reportUri?: string;
    styleNonce?: boolean;
    scriptNonce?: boolean;
  }

  declare interface lusca$hstsOptions {
    maxAge?: number;
    includeSubDomains?: boolean;
    preload?: boolean;
  }

  declare type lusca$csrfOptions =
    | lusca$csrfOptionsAngular
    | lusca$csrfOptionsNonAngular;

  declare interface lusca$csrfOptionsAngular {
    key?: string;
    secret?: string;
    impl?: () => any;
    cookie?:
      | string
      | {
          options?: { [key: string]: any }
        };
    angular: true;
  }

  declare interface lusca$csrfOptionsNonAngular {
    key?: string;
    secret?: string;
    impl?: () => any;
    cookie?:
      | string
      | {
          name: string,
          options?: { [key: string]: any }
        };
    angular?: false;
  }

  declare interface lusca$xssProtectionOptions {
    enabled?: boolean;
    mode?: string;
  }

  declare function lusca$csrf(
    options?: lusca$csrfOptions
  ): express.RequestHandler;

  declare function lusca$csp(
    options?: lusca$cspOptions
  ): express.RequestHandler;

  declare function lusca$xframe(value: string): express.RequestHandler;

  declare function lusca$p3p(value: string): express.RequestHandler;

  declare function lusca$hsts(
    options?: lusca$hstsOptions
  ): express.RequestHandler;

  declare function lusca$xssProtection(
    options?: lusca$xssProtectionOptions | true
  ): express.RequestHandler;

  declare function lusca$nosniff(): express.RequestHandler;

  declare function lusca$referrerPolicy(value: string): express.RequestHandler;

  declare export default typeof lusca;
}
