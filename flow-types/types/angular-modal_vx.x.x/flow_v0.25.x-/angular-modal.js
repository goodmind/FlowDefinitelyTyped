declare module "angular-modal" {
  declare type angularModal$AngularModalControllerDefinition =
    | ((...args: any[]) => any)
    | Function
    | string;

  declare type angularModal$AngularModalJQuerySelector =
    | string
    | Element
    | Element[]
    | JQuery
    | Function
    | any[]
    | {};

  declare interface angularModal$AngularModalSettings {
    controller?: angularModal$AngularModalControllerDefinition;
    controllerAs?: string;
    container?: angularModal$AngularModalJQuerySelector;
  }

  declare export type angularModal$AngularModalSettingsWithTemplate = {
    template: any
  } & angularModal$AngularModalSettings;

  declare export type angularModal$AngularModalSettingsWithTemplateUrl = {
    templateUrl: string
  } & angularModal$AngularModalSettings;

  declare export interface angularModal$AngularModal {
    activate(locals?: {}): angular.IPromise<void>;
    activate<T>(locals: T): angular.IPromise<void>;
    deactivate(): angular.IPromise<void>;
    active(): boolean;
  }

  declare export interface angularModal$AngularModalFactory {
    (
      settings:
        | angularModal$AngularModalSettingsWithTemplate
        | angularModal$AngularModalSettingsWithTemplateUrl
    ): angularModal$AngularModal;
  }
}
