declare module "mocha-phantomjs" {
  declare type MochaPhantomJsWindowOptions = {
    env: any,
    failures: number,
    ended: boolean,
    started: boolean,
    run(): void
  } & Window;

  declare interface Window {
    mochaPhantomJS(): MochaPhantomJsWindowOptions;
  }
  declare interface MochaPhantomJSOptions {
    headers?: any;
    cookies?: any[];
    viewportSize?: number;
    timeout?: number;
    file?: string;
  }
  declare interface MochaPhantomJS {
    url: string;
    columns: number;
    mochaStartWait: number;
    startTime: Date;
    output: any;
    run(): void;
    customizeMocha(options: MochaPhantomJSOptions): void;
  }
  declare var mochaPhantomJS: MochaPhantomJS;
}
