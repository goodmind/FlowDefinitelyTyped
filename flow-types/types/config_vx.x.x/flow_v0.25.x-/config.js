declare module "config" {
  declare var c: c$c$IConfig;
  declare interface c$IUtil {
    extendDeep(mergeInto: any, mergeFrom: any, depth?: number): any;
    cloneDeep(copyFrom: any, depth?: number): any;
    equalsDeep(object1: any, object2: any, dept?: number): boolean;
    diffDeep(object1: any, object2: any, depth?: number): any;
    makeImmutable(
      object: any,
      propertyName?: string,
      propertyValue?: string
    ): any;
    makeHidden(object: any, propertyName: string, propertyValue?: string): any;
    getEnv(varName: string): string;
    loadFileConfigs(configDir: string): any;
    getConfigSources(): c$IConfigSource[];
    toObject(config?: any): any;

    /**
     * This allows module developers to attach their configurations onto
     * the 6 years agoInitial 0.4 checkin default configuration object so
     * they can be configured by the consumers of the module.
     */
    setModuleDefaults(moduleName: string, defaults: any): any;
  }

  declare interface c$IConfig {
    get<T>(setting: string): T;
    has(setting: string): boolean;
    util: c$IUtil;
  }

  declare interface c$IConfigSource {
    name: string;
    original?: string;
    parsed: any;
  }
  declare module.exports: typeof c;
}
