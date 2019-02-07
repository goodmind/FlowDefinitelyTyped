declare module "hbs" {
  declare type handlebarsModule = typeof handlebars;
  declare interface hbsModule {
    +handlebars: handlebarsModule;
    localsAsTemplateData(app: any): void;
    registerHelper(
      helperName: string,
      helperFunction: (...args: any[]) => any
    ): void;
    registerPartial(partialName: string, partialValue: string): void;
    registerPartials(directoryName: string, callback?: () => void): void;
    __express(filename: string, options: any, cb: (...args: any[]) => any): any;
  }
  declare type hbsModuleWithCreate = {
    create(handlebars?: handlebarsModule): hbsModule
  } & hbsModule;

  declare var baseModule: hbsModuleWithCreate;
  declare module.exports: typeof baseModule;
}
