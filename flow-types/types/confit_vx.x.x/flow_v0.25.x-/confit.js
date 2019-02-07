declare module "confit" {
  declare interface ProtocolsSetPrivate {
    [protocol: string]: (value: any, callback?: any) => void;
  }
  declare interface ConfigStore {
    get(name: string): any;
    set<T>(name: string, newValue: T): T;
    use(newSettings: Object): void;
  }
  declare type options = {
    basedir: string,
    protocols: ProtocolsSetPrivate
  };
  declare interface ConfigFactory {
    create(callback: (err: any, config: ConfigStore) => any): void;
    addOverride(filepathOrSettingsObj: string | Object): this;
    addDefault(filepathOrSettingsObj: string | Object): this;
  }
  declare function confit(optionsOrBaseDir: options | string): ConfigFactory;

  declare export type confit$ProtocolsSet = {} & ProtocolsSetPrivate;

  declare module.exports: typeof confit;
}
