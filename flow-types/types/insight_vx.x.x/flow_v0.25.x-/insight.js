declare module "insight" {
  declare interface insight$IPackage {
    name: string;
    version: string;
  }

  declare interface insight$IOptions {
    trackingCode: string;
    trackingProvider?: string;
    pkg?: insight$IPackage;
    packageName?: string;
    packageVersion?: string;
    config?: insight$IConfigstore;
  }

  declare interface insight$IConfigstore {
    path: string;
    all: any;
    get(key: string): any;
    set(key: string, val: any): void;
    del(key: string): void;
  }

  declare interface insight$IEvent {
    category: string;
    action: string;
    label?: string;
    value?: number | string;
  }
  declare class Insight {
    trackingCode: string;
    trackingProvider: string;
    packageName: string;
    packageVersion: string;
    os: string;
    nodeVersion: string;
    appVersion: string;
    config: insight$IConfigstore;
    optOut: boolean;
    clientId: string;
    constructor(options: insight$IOptions): this;
    track(...args: string[]): void;
    trackEvent(event: insight$IEvent): void;
    askPermission(msg?: string, cb?: Function): void;
  }
  declare module.exports: typeof Insight;
}
