declare module "ngkookies" {
  declare type kookies$Options = {
    expires?: number | Date,
    path?: string,
    domain?: string,
    secure?: boolean
  };

  declare interface kookies$IKookiesService {
    set(name: string, value: string, optopns?: kookies$Options): void;
    get(): any;
    get(name: string): any;
    get(name: string, converter: any): any;
    get<T>(name: string, converter: any): T;
    remove(name: string, options?: kookies$Options): boolean;
  }

  declare type kookies$Config = {
    raw?: boolean,
    json?: boolean
  };

  declare interface kookies$IKookiesProvider {
    config: kookies$Config;
    setConfig(config: kookies$Config): void;
    defaults: kookies$Options;
    setDefaults(options: kookies$Options): void;
  }
}
