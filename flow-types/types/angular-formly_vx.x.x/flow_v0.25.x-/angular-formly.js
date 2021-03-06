declare module "AngularFormly" {
  declare module.exports: typeof AngularFormly;
}
declare module "angular-formly" {
  declare var angularFormlyDefaultExport: string;
  declare module.exports: typeof angularFormlyDefaultExport;
}
declare type AngularFormly$IFieldArray = {} & Array<
  AngularFormly$IFieldConfigurationObject | AngularFormly$IFieldGroup
>;

declare interface AngularFormly$IFieldGroup {
  data?: {
    [key: string]: any
  };
  className?: string;
  elementAttributes?: string;
  fieldGroup?: AngularFormly$IFieldArray;
  form?: Object;
  hide?: boolean;
  hideExpression?: string | AngularFormly$IExpressionFunction;
  key?: string | number;
  model?:
    | string
    | {
        [key: string]: any
      };
  options?: AngularFormly$IFormOptionsAPI;
  templateOptions?: AngularFormly$ITemplateOptions;
  wrapper?: string | string[];
}

declare interface AngularFormly$IFormOptionsAPI {
  data?: {
    [key: string]: any
  };
  fieldTransform?: Function | Array<Function>;
  formState?: Object;
  removeChromeAutoComplete?: boolean;
  resetModel?: Function;
  templateManipulators?: AngularFormly$ITemplateManipulators;
  updateInitialValue?: Function;
  wrapper?: string | string[];
}

/**
 * see http://docs.angular-formly.com/docs/formly-expressions#expressionproperties-validators--messages
 */
declare interface AngularFormly$IExpressionFunction {
  ($viewValue: any, $modelValue: any, scope: AngularFormly$ITemplateScope): any;
}

declare interface AngularFormly$IModelOptions {
  updateOn?: string;
  debounce?: number;
  allowInvalid?: boolean;
  getterSetter?: string;
  timezone?: string;
}

declare interface AngularFormly$ITemplateManipulator {
  (
    template: string | HTMLElement,
    options: Object,
    scope: AngularFormly$ITemplateScope
  ): string | HTMLElement;
}

declare interface AngularFormly$ITemplateManipulators {
  preWrapper?: AngularFormly$ITemplateManipulator[];
  postWrapper?: AngularFormly$ITemplateManipulator[];
}

declare interface AngularFormly$ISelectOption {
  name: string;
  value?: string;
  group?: string;
}

/**
 * see http://docs.angular-formly.com/docs/ngmodelattrstemplatemanipulator
 */
declare interface AngularFormly$ITemplateOptions {
  disabled?: boolean;
  maxlength?: number;
  minlength?: number;
  pattern?: string;
  required?: boolean;
  max?: number;
  min?: number;
  placeholder?: number | string;
  tabindex?: number;
  type?: string;
  onBlur?: string | AngularFormly$IExpressionFunction;
  onChange?: string | AngularFormly$IExpressionFunction;
  onClick?: string | AngularFormly$IExpressionFunction;
  onFocus?: string | AngularFormly$IExpressionFunction;
  onKeydown?: string | AngularFormly$IExpressionFunction;
  onKeypress?: string | AngularFormly$IExpressionFunction;
  onKeyup?: string | AngularFormly$IExpressionFunction;
  label?: string;
  description?: string;
  [key: string]: any;
  options?: Array<AngularFormly$ISelectOption>;
  groupProp?: string;
  valueProp?: string;
  labelProp?: string;
}

/**
 * see http://docs.angular-formly.com/docs/field-configuration-object#validators-object
 */
declare interface AngularFormly$IValidator {
  expression: string | AngularFormly$IExpressionFunction;
  message?: string | AngularFormly$IExpressionFunction;
}

/**
 * An object which has at least two properties called expression and listener. The watch.expression
 * is added to the formly-form directive's scope (to allow it to run even when hide is true). You
 * can specify a type ($watchCollection or $watchGroup) via the watcher.type property (defaults to
 * $watch) and whether you want it to be a deep watch via the watcher.deep property (defaults to false).
 *
 * see http://docs.angular-formly.com/docs/field-configuration-object#watcher-objectarray-of-watches
 */
declare interface AngularFormly$IWatcher {
  deep?: boolean;
  expression?:
    | string
    | {
        (field: string, scope: AngularFormly$ITemplateScope): boolean
      };
  listener: (
    field: string,
    newValue: any,
    oldValue: any,
    scope: AngularFormly$ITemplateScope,
    stopWatching: Function
  ) => void;
  type?: string;
}

declare interface AngularFormly$IFieldConfigurationObject {
  /**
   * Added in 6.18.0
   *
   * Demo
   * see http://angular-formly.com/#/example/other/unique-value-async-validation
   */
  asyncValidators?: {
    [key: string]:
      | string
      | AngularFormly$IExpressionFunction
      | AngularFormly$IValidator
  };

  /**
   * This is a great way to add custom behavior to a specific field. It is injectable with the $scope of the
   * field, and anything else you have in your injector.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#controller-controller-name-as-string--controller-f
   */
  controller?: string | Function;

  /**
   * This is reserved for the developer. You have our guarantee to be able to use this and not worry about
   * future versions of formly overriding your usage and preventing you from upgrading :-)
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#data-object
   */
  data?: {
    [key: string]: any
  };

  /**
   * Use defaultValue to initialize it the model. If this is provided and the value of the
   * model at compile-time is undefined, then the value of the model will be assigned to defaultValue.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#defaultvalue-any
   */
  defaultValue?: any;

  /**
   * You can specify your own class that will be applied to the formly-field directive (or ng-form of
   * a fieldGroup).
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#classname-string
   */
  className?: string;
  elementAttributes?: {
    [key: string]: string
  };

  /**
   * An object where the key is a property to be set on the main field config and the value is an
   * expression used to assign that property. The value is a formly expressions. The returned value is
   * wrapped in $q.when so you can return a promise from your function :-)
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#expressionproperties-object
   */
  expressionProperties?: {
    [key: string]:
      | string
      | AngularFormly$IExpressionFunction
      | AngularFormly$IValidator
  };

  /**
   * Uses ng-if. Whether to hide the field. Defaults to false. If you wish this to be conditional, use
   * hideExpression. See below.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#hide-boolean
   */
  hide?: boolean;

  /**
   * This is similar to expressionProperties with a slight difference. You should (hopefully) never
   * notice the difference with the most common use case. This is available due to limitations with
   * expressionProperties and ng-if not working together very nicely.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#hideexpression-string--function
   */
  hideExpression?: string | AngularFormly$IExpressionFunction;

  /**
   * This allows you to specify the id of your field (which will be used for its name as well unless
   * a name is provided). Note, you can also override the id generation code using the formlyConfig
   * extra called getFieldId.
   *
   * AVOID THIS
   * If you don't have to do this, don't. Specifying IDs makes it harder to re-use things and it's
   * just extra work. Part of the beauty that angular-formly provides is the fact that you don't need
   * to concern yourself with making sure that this is unique.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#id-string
   */
  id?: string;
  initialValue?: any;

  /**
   * Can be set instead of type or template to use a custom html template form field. Works
   * just like a directive templateUrl and uses the $templateCache
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#key-string
   */
  key?: string | number;

  /**
   * This allows you to specify a link function. It is invoked after your template has finished compiling.
   * You are passed the normal arguments for a normal link function.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#link-link-function
   */
  link?: ng.IDirectiveLinkFn;

  /**
   * By default, the model passed to the formly-field directive is the same as the model passed to the
   * formly-form. However, if the field has a model specified, then it is used for that field (and that
   * field only). In addition, a deep watch is added to the formly-field directive's scope to run the
   * expressionProperties when the specified model changes.
   *
   * Note, the formly-form directive will allow you to specify a string which is an (almost) formly
   * expression which allows you to define the model as relative to the scope of the form.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#model-object--string
   */
  model?:
    | string
    | {
        [key: string]: any
      };

  /**
   * Allows you to take advantage of ng-model-options directive. Formly's built-in templateManipulator (see
   * below) will add this attribute to your ng-model element automatically if this property exists. Note,
   * if you use the getter/setter option, formly's templateManipulator will change the value of ng-model
   * to options.value which is a getterSetter that formly adds to field options.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#modeloptions
   */
  modelOptions?: AngularFormly$IModelOptions;

  /**
   * If you wish to, you can specify a specific name for your ng-model. This is useful if you're posting
   * the form to a server using techniques of yester-year.
   *
   * AVOID THIS
   * If you don't have to do this, don't. It's just extra work. Part of the beauty that angular-formly
   * provides is the fact that you don't need to concern yourself with stuff like this.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#name-string
   */
  name?: string;

  /**
   * This is used by ngModelAttrsTemplateManipulator to automatically add attributes to the ng-model element
   * of field templates. You will likely not use this often. This object is a little complex, but extremely
   * powerful. It's best to explain this api via an example. For more information, see the guide on ngModelAttrs.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#ngmodelattrs-object
   */
  ngModelAttrs?: {
    attribute?: any,
    bound?: any,
    expression?: any,
    value?: any,
    [key: string]: any
  };

  /**
   * This allows you to place attributes with string values on the ng-model element.
   * Easy to use alternative to ngModelAttrs option.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#ngmodelelattrs-object
   */
  ngModelElAttrs?: {
    [key: string]: string
  };

  /**
   * Used to tell angular-formly to not attempt to add the formControl property to your object. This is useful
   * for things like validation, but not necessary if your "field" doesn't use ng-model (if it's just a horizontal
   * line for example). Defaults to undefined.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#noformcontrol-boolean
   */
  noFormControl?: boolean;

  /**
   * Allows you to specify extra types to get options from. Duplicate options are overridden in later priority
   * (index 1 will override index 0 properties). Also, these are applied after the type's defaultOptions and
   * hence will override any duplicates of those properties as well.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#optionstypes-string--array-of-strings
   */
  optionsTypes?: string | string[];

  /**
   * Can be set instead of type or templateUrl to use a custom html
   * template form field. Recommended to be used with one-liners mostly
   * (like a directive), or if you're using webpack with the ability to require templates :-)
   *
   * If a function is passed, it is invoked with the field configuration object and can return
   * either a string for the template or a promise that resolves to a string.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#template-string--function
   */
  template?:
    | string
    | {
        (
          fieldConfiguration: AngularFormly$IFieldConfigurationObject
        ): string | ng.IPromise<string>
      };

  /**
   * Allows you to specify custom template manipulators for this specific field. (use defaultOptions in a
   * type configuration if you want it to apply to all fields of a certain type).
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#templatemanipulator-object-of-arrays-of-functions
   */
  templateManipulators?: AngularFormly$ITemplateManipulators;

  /**
   * This is reserved for the templates. Any template-specific options go in here. Look at your specific
   * template implementation to know the options required for this.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#templateoptions-object
   */
  templateOptions?: AngularFormly$ITemplateOptions;

  /**
   * Can be set instead of type or template to use a custom html template form field. Works
   * just like a directive templateUrl and uses the $templateCache
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#templateurl-string--function
   */
  templateUrl?:
    | string
    | {
        (
          fieldConfiguration: AngularFormly$IFieldConfigurationObject
        ): string | ng.IPromise<string>
      };

  /**
   * The type of field to be rendered. This is the recommended method
   * for defining fields. Types must be pre-defined using formlyConfig.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#type-string
   */
  type?: string;

  /**
   * An object with a few useful properties mostly handy when used in combination with ng-messages
   */
  validation?: {
    /**
     * This is set by angular-formly. This is a boolean indicating whether an error message should be shown. Because
     * you generally only want to show error messages when the user has interacted with a specific field, this value
     * is set to true based on this rule: field invalid && (field touched || validation.show) (with slight difference
     * for pre-angular 1.3 because it doesn't have touched support).
     */
    errorExistsAndShouldBeVisible?: boolean,

    /**
     * A map of Formly Expressions mapped to message names. This is really useful when you're using ng-messages
     * like in this example.
     */
    messages?: {
      [key: string]: AngularFormly$IExpressionFunction | string
    },

    /**
     * A boolean you as the developer can set to specify to force options.validation.errorExistsAndShouldBeVisible
     * to be set to true when there are $errors. This is useful when you're trying to call the user's attention to
     * some fields for some reason.
     */
    show?: boolean
  };

  /**
   * An object where the keys are the name of the validator and the values are Formly Expressions;
   *
   * Async Validation
   * All function validators can return true/false/Promise. A validator passes if it returns true or a promise
   * that is resolved. A validator fails if it returns false or a promise that is rejected.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#validators-object
   */
  validators?: {
    [key: string]:
      | string
      | AngularFormly$IExpressionFunction
      | AngularFormly$IValidator
  };

  /**
   * This is a getter/setter function for the value that your field is representing. Useful when using getterSetter: true
   * in the modelOptions (in fact, if you don't disable the ngModelAttrsTemplateManipulator that comes built-in with formly,
   * it will automagically change your field's ng-model attribute to use options.value.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#value-gettersetter-function
   */
  value?: () => any;
  value?: (val: any) => void;

  /**
   * An object which has at least two properties called expression and listener. The watch.expression is added
   * to the formly-form directive's scope (to allow it to run even when hide is true). You can specify a type
   * ($watchCollection or $watchGroup) via the watcher.type property (defaults to $watch) and whether you want
   * it to be a deep watch via the watcher.deep property (defaults to false).
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#watcher-objectarray-of-watches
   */
  watcher?: AngularFormly$IWatcher | AngularFormly$IWatcher[];

  /**
   * This makes reference to setWrapper in formlyConfig. It is expected to be the name of the wrapper. If
   * given an array, the formly field template will be wrapped by the first wrapper, then the second, then
   * the third, etc. You can also specify these as part of a type (which is the recommended approach).
   * Specifying this property will override the wrappers for the type for this field.
   *
   * http://docs.angular-formly.com/docs/field-configuration-object#wrapper-string--array-of-strings
   */
  wrapper?: string | string[];

  /**
   * This is the NgModelController for the field. It provides you with awesome stuff like $errors :-)
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#formcontrol-ngmodelcontroller
   */
  formControl?: ng.IFormController | ng.IFormController[];

  /**
   * Will reset the field's model and the field control to the last initialValue. This is used by the
   * formly-form's options.resetModel function.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#resetmodel-function
   */
  resetModel?: () => void;

  /**
   * It is not likely that you'll ever want to invoke this function. It simply runs the expressionProperties expressions.
   * It is used internally and you shouldn't have to use it, but you can if you want to, and any breaking changes to the
   * way it works will result in a major version change, so you can rely on its api.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#runexpressions-function
   */
  runExpressions?: () => void;

  /**
   * Will reset the field's initialValue to the current state of the model. Useful if you load the model asynchronously.
   * Invoke this when the model gets set. This is used by the formly-form's options.updateInitialValue function.
   *
   * see http://docs.angular-formly.com/docs/field-configuration-object#updateinitialvalue-function
   */
  updateInitialValue?: () => void;
}

/**
 * see http://docs.angular-formly.com/docs/custom-templates#section-formlyconfig-settype-options
 */
declare interface AngularFormly$ITypeOptions {
  apiCheck?: {
    [key: string]: Function
  };
  apiCheckFunction?: string;
  apiCheckInstance?: any;
  apiCheckOptions?: Object;
  defaultOptions?: AngularFormly$IFieldConfigurationObject | Function;
  controller?: Function | string | any[];
  data?: {
    [key: string]: any
  };
  extends?: string;
  link?: ng.IDirectiveLinkFn;
  overwriteOk?: boolean;
  name: string;
  template?: Function | string;
  templateUrl?: Function | string;
  validateOptions?: Function;
  wrapper?: string | string[];
}

declare interface AngularFormly$IWrapperOptions {
  apiCheck?: {
    [key: string]: Function
  };
  apiCheckFunction?: string;
  apiCheckInstance?: any;
  apiCheckOptions?: Object;
  overwriteOk?: boolean;
  name?: string;
  template?: string;
  templateUrl?: string;
  types?: string[];
  validateOptions?: Function;
}

declare interface AngularFormly$IFormlyConfigExtras {
  disableNgModelAttrsManipulator: boolean;
  apiCheckInstance: any;
  ngModelAttrsManipulatorPreferUnbound: boolean;
  removeChromeAutoComplete: boolean;
  defaultHideDirective: string;
  errorExistsAndShouldBeVisibleExpression: any;
  getFieldId: Function;
  fieldTransform: Function | Array<Function>;
  explicitAsync: boolean;
}

declare interface AngularFormly$IFormlyConfig {
  disableWarnings: boolean;
  extras: AngularFormly$IFormlyConfigExtras;
  setType(typeOptions: AngularFormly$ITypeOptions): void;
  setWrapper(
    wrapperOptions:
      | AngularFormly$IWrapperOptions
      | Array<AngularFormly$IWrapperOptions>
  ): void;
  templateManipulators: AngularFormly$ITemplateManipulators;
}

declare interface AngularFormly$ITemplateScopeOptions {
  formControl: ng.IFormController | ng.IFormController[];
  templateOptions: AngularFormly$ITemplateOptions;
  validation: Object;
}

/**
 * see http://docs.angular-formly.com/docs/custom-templates#templates-scope
 */
declare interface AngularFormly$ITemplateScope {
  options: AngularFormly$ITemplateScopeOptions;
  fc: ng.IFormController | ng.IFormController[];
  fields: AngularFormly$IFieldArray;
  form: any;
  formState: Object;
  id: string;
  index: number;
  model?:
    | string
    | {
        [key: string]: any
      };
  showError: boolean;
  to: AngularFormly$ITemplateOptions;
}

/**
 * see http://docs.angular-formly.com/docs/formlyvalidationmessages#addtemplateoptionvaluemessage
 */
declare interface AngularFormly$IValidationMessages {
  addTemplateOptionValueMessage(
    name: string,
    prop: string,
    prefix: string,
    suffix: string,
    alternate: string
  ): void;
  addStringMessage(name: string, string: string): void;
  messages: {
    [key: string]: (
      $viewValue: any,
      $modelValue: any,
      scope: AngularFormly$ITemplateScope
    ) => string
  };
}
