declare module "i18next-sprintf-postprocessor/dist/commonjs" {
  declare export default typeof sprintf;
}
declare module "i18next" {
  declare interface I18n {
    t(key: string, ...args: any[]): string;
  }
}
declare module "i18next-sprintf-postprocessor" {
  declare interface I18nextSprintfPostProcessor {
    name: string;
    type: string;
    process(value: any, key: string, options: any): any;
    overloadTranslationOptionHandler(
      args: string[]
    ): {
      postProcess: "sprintf",
      sprintf: string[]
    };
  }
  declare var sprintf: I18nextSprintfPostProcessor;
  declare module.exports: typeof sprintf;
}
