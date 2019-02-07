declare module "jquery-validation-unobtrusive" {
  declare type MicrosoftJQueryUnobtrusiveValidation$JQuerySelector =
    | string
    | Document
    | Element
    | JQuery;

  declare interface MicrosoftJQueryUnobtrusiveValidation$Adapter {
    name: string;
    params: string[];
    adapt: Function;
  }

  declare type MicrosoftJQueryUnobtrusiveValidation$Adapters = {
    add(
      adapterName: string,
      fn: Function
    ): MicrosoftJQueryUnobtrusiveValidation$Adapters,
    add(
      adapterName: string,
      params: string[],
      fn: Function
    ): MicrosoftJQueryUnobtrusiveValidation$Adapters,
    addMinMax(
      adapterName: string,
      minRuleName: string,
      maxRuleName: string,
      minMaxRuleName: string,
      minAttribute?: string,
      maxAttribute?: string
    ): MicrosoftJQueryUnobtrusiveValidation$Adapters,
    addSingleVal(
      adapterName: string,
      ruleName: string
    ): MicrosoftJQueryUnobtrusiveValidation$Adapters,
    addSingleVal(
      adapterName: string,
      attribute: string,
      ruleName: string
    ): MicrosoftJQueryUnobtrusiveValidation$Adapters,
    addBool(
      adapterName: string,
      ruleName?: string
    ): MicrosoftJQueryUnobtrusiveValidation$Adapters,
    addMethod(
      adapterName: string,
      fn: (value: string, element: Element, params: any) => any
    ): MicrosoftJQueryUnobtrusiveValidation$Adapters
  } & Array<MicrosoftJQueryUnobtrusiveValidation$Adapter>;

  declare interface MicrosoftJQueryUnobtrusiveValidation$Validator {
    adapters: MicrosoftJQueryUnobtrusiveValidation$Adapters;
    parseElement(
      element: MicrosoftJQueryUnobtrusiveValidation$JQuerySelector,
      skipAttach?: boolean
    ): void;
    parse(selector: MicrosoftJQueryUnobtrusiveValidation$JQuerySelector): void;
  }
  declare interface JQueryValidation$ValidatorStatic {
    unobtrusive: MicrosoftJQueryUnobtrusiveValidation$MicrosoftJQueryUnobtrusiveValidation$Validator;
  }
}
