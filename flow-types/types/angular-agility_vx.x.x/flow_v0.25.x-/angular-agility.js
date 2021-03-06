declare module "angular-agility" {
  declare export interface aa$ILabelStrategies {
    [strategyName: string]: (
      element: ng.IAugmentedJQueryStatic,
      labelText: string,
      isRequired: boolean
    ) => void;
  }

  declare export interface aa$IFieldGroupStrategies {
    [strategyName: string]: (element: ng.IAugmentedJQueryStatic) => void;
  }

  declare export interface aa$IValMsgPlacementStrategies {
    [strategyName: string]: (
      formFieldElement: ng.IAugmentedJQueryStatic,
      formName: string,
      formFieldName: string
    ) => void;
  }

  declare export interface aa$IValidIconStrategy {
    validIcon: string;
    invalidIcon: string;
    getContainer(element: ng.IAugmentedJQueryStatic): void;
  }

  declare export interface aa$ISpinnerClickStrategies {
    [strategyName: string]: (element: ng.IAugmentedJQueryStatic) => void;
  }

  declare export interface aa$IOnNavigateAwayStrategies {
    [strategyName: string]: (
      rootFormScope: ng.IScope,
      rootForm: ng.IAugmentedJQueryStatic,
      $injector: ng.auto.IInjectorService
    ) => void;
  }

  declare export interface aa$IValidationMessages {
    [validationKey: string]: string;
  }

  declare export interface aa$IGlobalSettings {
    [settingName: string]: any;
  }

  declare export type aa$IFormExtensionsProvider = {
    defaultLabelStrategy: string,
    defaultFieldGroupStrategy: string,
    defaultValMsgPlacementStrategy: string,
    validIconStrategy: aa$IValidIconStrategy,
    defaultSpinnerClickStrategy: string,
    defaultNotifyTarget: string,
    defaultOnNavigateAwayStrategy: string,
    validationMessages: aa$IValidationMessages,
    valMsgForTemplate: string,
    confirmResetStrategy: () => boolean,
    globalSettings: aa$IGlobalSettings,
    labelStrategies: aa$ILabelStrategies,
    fieldGroupStrategies: aa$IFieldGroupStrategies,
    valMsgPlacementStrategies: aa$IValMsgPlacementStrategies,
    spinnerClickStrategies: aa$ISpinnerClickStrategies,
    onNavigateAwayStrategies: aa$IOnNavigateAwayStrategies
  } & ng.IServiceProvider;

  declare export interface aa$INotifyPredicate {
    (message: string, options: any, notifier: any): any;
  }

  declare export interface aa$INotifyDefaults {
    success: aa$INotifyPredicate;
    info: aa$INotifyPredicate;
    warning: aa$INotifyPredicate;
    danger: aa$INotifyPredicate;
    error: aa$INotifyPredicate;
  }

  declare export interface aa$INotifyConfig {
    name: string;
    template?: string;
    templateName?: string;
    options: aa$INotifyOptions;
    namedDefaults: aa$INotifyDefaults;
  }

  declare export interface aa$INotifyOptions {
    cssClasses?: string;
    messageType: string;
    allowHtml: boolean;
    message: string;
  }

  declare export type aa$INotifyConfigProvider = {
    notifyConfigs: any,
    defaultTargetContainerName: string,
    defaultNotifyConfig: string,
    addOrUpdateNotifyConfig(name: string, opts: aa$INotifyConfig): void,
    optionsTransformer(options: aa$INotifyOptions, $sce: ng.ISCEService): void
  } & ng.IServiceProvider;

  declare export interface aa$IExternalFormValidationConfig {
    validations: any;
    ignore?: any;
    globals?: any;
    resolve?: any;
    resolveFn?: (modelValue: string) => string;
  }
}
