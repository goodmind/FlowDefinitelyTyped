declare module "knockstrap" {
  declare interface KnockoutUtils {
    uniqueId(prefix: string): string;
    unwrapProperties(wrappedProperies: any): any;
  }
  declare interface KnockoutTemplateSources {
    stringTemplate: {
      prototype: KnockstrapStringTemplate,
      new(template: string): KnockstrapStringTemplate
    };
  }
  declare type KnockstrapStringTemplate = {
    templateName: string
  } & KnockoutTemplateSourcesDomElement;

  declare interface KnockoutStatic {
    stringTemplateEngine: {
      prototype: KnockstrapStringTemplateEngine,
      new(): KnockstrapStringTemplateEngine,
      instance: KnockstrapStringTemplateEngine
    };
  }
  declare type KnockstrapStringTemplateEngine = {
    allowTemplateRewriting: boolean,
    makeTemplateSource(template: string): KnockstrapStringTemplate,
    addTemplate(name: string, template: any): void,
    removeTemplate(name: string): void,
    isTemplateExist(name: string): boolean,
    getTemplate(name: string): any
  } & KnockoutNativeTemplateEngine;

  declare interface KnockoutBindingHandlers {
    alert: AlertKnockoutBindingHandler;
    carousel: CarouselKnockoutBindingHandler;
    checkbox: KnockoutBindingHandler;
    modal: ModalKnockoutBindingHandler;
    popover: PopoverKnockoutBindingHandler;
    progress: ProgressKnockoutBindingHandler;
    radio: KnockoutBindingHandler;
    toggle: KnockoutBindingHandler;
    tooltip: KnockoutBindingHandler;
  }
  declare interface KnockoutControlsDescendantBindings {
    controlsDescendantBindings: boolean;
  }
  declare type AlertKnockoutBindingHandler = {
    init?: (
      element: any,
      valueAccessor: () => any,
      allBindingsAccessor: KnockoutAllBindingsAccessor,
      viewModel: any,
      bindingContext: KnockoutBindingContext
    ) => KnockoutControlsDescendantBindings
  } & KnockoutBindingHandler;

  declare type CarouselKnockoutBindingHandler = {
    init?: (
      element: any,
      valueAccessor: () => any,
      allBindingsAccessor: KnockoutAllBindingsAccessor,
      viewModel: any,
      bindingContext: KnockoutBindingContext
    ) => KnockoutControlsDescendantBindings,
    defaults: KnockstrapCarouselDefaults
  } & KnockoutBindingHandler;

  declare interface KnockstrapCarouselDefaults {
    css: string;
    controlsTemplate: KnockstrapCarouselDefaultsControlsTemplate;
    indicatorsTemplate: KnockstrapCarouselDefaultsIndicatorsTemplate;
    itemTemplate: KnockstrapCarouselDefaultsItemTemplate;
  }
  declare interface KnockstrapDefaultsTemplateBase {
    name: string;
    templateEngine: KnockstrapStringTemplateEngine;
  }
  declare type KnockstrapCarouselDefaultsControlsTemplate = {
    dataConverter(value: any): KnockstrapCarouselDefaultsIdDataConverted
  } & KnockstrapDefaultsTemplateBase;

  declare interface KnockstrapCarouselDefaultsIdDataConverted {
    id: KnockoutComputed<string>;
  }
  declare type KnockstrapCarouselDefaultsIndicatorsTemplate = {
    dataConverter(value: any): KnockstrapCarouselDefaultsIdItemsDataConverted
  } & KnockstrapDefaultsTemplateBase;

  declare type KnockstrapCarouselDefaultsIdItemsDataConverted = {
    items: any
  } & KnockstrapCarouselDefaultsIdDataConverted;

  declare type KnockstrapCarouselDefaultsItemTemplate = {
    converter(value: any): any
  } & KnockstrapDefaultsTemplateBase;

  declare type ModalKnockoutBindingHandler = {
    init?: (
      element: any,
      valueAccessor: () => any,
      allBindingsAccessor: KnockoutAllBindingsAccessor,
      viewModel: any,
      bindingContext: KnockoutBindingContext
    ) => KnockoutControlsDescendantBindings,
    defaults: KnockstrapModalDefaults
  } & KnockoutBindingHandler;

  declare interface KnockstrapModalDefaults {
    css: string;
    attributes: KnockstrapModalDefaultsAttributes;
    headerTemplate: KnockstrapDefaultsTemplateBase;
    bodyTemplate: KnockstrapDefaultsTemplateBase;
    footerTemplate: KnockstrapModalDefaultsFooterTemplate;
  }
  declare interface KnockstrapModalDefaultsAttributes {
    role: string;
  }
  declare type KnockstrapModalDefaultsFooterTemplate = {
    data: KnockstrapModalDefaultsFooterData
  } & KnockstrapDefaultsTemplateBase;

  declare interface KnockstrapModalDefaultsFooterData {
    closeLabel: string;
    primaryLabel: string;
  }
  declare type PopoverKnockoutBindingHandler = {
    init?: (
      element: any,
      valueAccessor: () => any,
      allBindingsAccessor: KnockoutAllBindingsAccessor,
      viewModel: any,
      bindingContext: KnockoutBindingContext
    ) => KnockoutControlsDescendantBindings
  } & KnockoutBindingHandler;

  declare type ProgressKnockoutBindingHandler = {
    init?: (
      element: any,
      valueAccessor: () => any,
      allBindingsAccessor: KnockoutAllBindingsAccessor,
      viewModel: any,
      bindingContext: KnockoutBindingContext
    ) => KnockoutControlsDescendantBindings,
    defaults: KnockstrapProgressDefaults
  } & KnockoutBindingHandler;

  declare interface KnockstrapProgressDefaults {
    css: string;
    text: string;
    textHidden: boolean;
    striped: boolean;
    type: string;
    animated: boolean;
  }
}
