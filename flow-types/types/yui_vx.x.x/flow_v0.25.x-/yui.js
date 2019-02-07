declare module "yui" {
  declare interface YUI {
    Test: YUITest.YUITestStatic;
    Assert: YUITest.IAssert;
    add(
      name: string,
      fn: (Y: YUI, name: string) => any,
      version: string,
      details?: Y$Y$IConfig
    ): YUI;
    mix(
      receiver: Function,
      supplier: Function,
      overwrite?: boolean,
      whitelist?: string[],
      mode?: number,
      merge?: boolean
    ): any;
    mix(
      receiver: Object,
      supplier: Function,
      overwrite?: boolean,
      whitelist?: string[],
      mode?: number,
      merge?: boolean
    ): any;
    mix(
      receiver: Function,
      supplier: Object,
      overwrite?: boolean,
      whitelist?: string[],
      mode?: number,
      merge?: boolean
    ): any;
    mix(
      receiver: Object,
      supplier: Object,
      overwrite?: boolean,
      whitelist?: string[],
      mode?: number,
      merge?: boolean
    ): any;
  }
  declare interface Y$IConfig {
    requires: string[];
    optional: string[];
    use: string[];
  }
  declare var Y: YUI;
  declare var YUI: YUI;
}
