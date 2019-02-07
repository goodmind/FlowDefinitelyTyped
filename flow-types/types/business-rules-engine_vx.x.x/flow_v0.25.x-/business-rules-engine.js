declare module "business-rules-engine" {
  import typeof * as Q from "q";

  declare export interface IErrorCustomMessage {
    (config: any, args: any): string;
  }
  declare export interface IPropertyValidator {
    isAcceptable(s: any): boolean;
    customMessage?: IErrorCustomMessage;
    tagName?: string;
  }
  declare export type IStringValidator = {
    isAcceptable(s: string): boolean
  } & IPropertyValidator;

  declare export interface IAsyncPropertyValidator {
    isAcceptable(s: any): Q.Promise<boolean>;
    customMessage?: IErrorCustomMessage;
    isAsync: boolean;
    tagName?: string;
  }
  declare export type IAsyncStringPropertyValidator = {
    isAcceptable(s: string): Q.Promise<boolean>
  } & IAsyncPropertyValidator;

  declare export class CompareOperator {
    constructor(...args: empty): mixed;
    static +LessThan: Class<CompareOperator__LessThan> &
      CompareOperator__LessThan &
      0; // 0
    static +LessThanEqual: Class<CompareOperator__LessThanEqual> &
      CompareOperator__LessThanEqual &
      1; // 1
    static +Equal: Class<CompareOperator__Equal> & CompareOperator__Equal & 2; // 2
    static +NotEqual: Class<CompareOperator__NotEqual> &
      CompareOperator__NotEqual &
      3; // 3
    static +GreaterThanEqual: Class<CompareOperator__GreaterThanEqual> &
      CompareOperator__GreaterThanEqual &
      4; // 4
    static +GreaterThan: Class<CompareOperator__GreaterThan> &
      CompareOperator__GreaterThan &
      5; // 5
  }

  declare class CompareOperator__LessThan mixins CompareOperator {}
  declare class CompareOperator__LessThanEqual mixins CompareOperator {}
  declare class CompareOperator__Equal mixins CompareOperator {}
  declare class CompareOperator__NotEqual mixins CompareOperator {}
  declare class CompareOperator__GreaterThanEqual mixins CompareOperator {}
  declare class CompareOperator__GreaterThan mixins CompareOperator {}

  declare export interface IError {
    HasError: boolean;
    ErrorMessage: string;
    TranslateArgs?: IErrorTranslateArgs;
  }
  declare export interface IErrorTranslateArgs {
    TranslateId: string;
    MessageArgs: any;
    CustomMessage?: IErrorCustomMessage;
  }
  declare export interface IOptional {
    (): boolean;
  }
  declare export type IValidationFailure = {
    IsAsync: boolean,
    Error: IError
  } & IError;

  declare export interface IValidationResult {
    Name: string;
    Add(validationResult: IValidationResult): void;
    Remove(index: number): void;
    Children: IValidationResult[];
    HasErrors: boolean;
    HasErrorsDirty: boolean;
    ErrorMessage: string;
    ErrorCount: number;
    Optional?: IOptional;
    TranslateArgs?: IErrorTranslateArgs[];
  }
  declare export interface IValidate {
    (args: IError): void;
  }
  declare export interface IAsyncValidate {
    (args: IError): Q.Promise<any>;
  }
  declare export interface IValidatorFce {
    Name: string;
    ValidationFce?: IValidate;
    AsyncValidationFce?: IAsyncValidate;
  }
  declare export interface IValidator {
    Validate(context: any): IValidationFailure;
    ValidateAsync(context: any): Q.Promise<IValidationFailure>;
    Error: IError;
  }
  declare export interface IAbstractValidator<T> {
    RuleFor(prop: string, validator: IPropertyValidator): any;
    ValidationFor(prop: string, validatorFce: IValidatorFce): any;
    Validation(validatorFce: IValidatorFce): any;
    ValidatorFor<K>(prop: string, validator: IAbstractValidator<K>): any;
    CreateRule(name: string): IAbstractValidationRule<any>;
    CreateAbstractRule(name: string): IAbstractValidationRule<any>;
    CreateAbstractListRule(name: string): IAbstractValidationRule<any>;
    ForList: boolean;
  }
  declare export interface IAbstractValidationRule<T> {
    Validate(context: T): IValidationResult;
    ValidateAsync(context: T): Q.Promise<IValidationResult>;
    ValidateAll(context: T): Q.Promise<IValidationResult>;
    ValidateProperty(context: T, propName: string): void;
    ValidationResult: IValidationResult;
    Rules: {
      [name: string]: IPropertyValidationRule<T>
    };
    Validators: {
      [name: string]: IValidator
    };
    Children: {
      [name: string]: IAbstractValidationRule<any>
    };
  }
  declare export interface IPropertyValidationRule<T> {
    Validators: {
      [name: string]: any
    };
    Validate(context: IValidationContext<T>): IValidationFailure[];
    ValidateAsync(
      context: IValidationContext<T>
    ): Q.Promise<IValidationFailure[]>;
  }
  declare export interface IValidationContext<T> {
    Value: string;
    Key: string;
    Data: T;
  }
  declare export class Error mixins IError {
    HasError: boolean;
    ErrorMessage: string;
    constructor(): this;
  }
  declare export class ValidationFailure mixins IError {
    Error: IError;
    IsAsync: boolean;
    constructor(Error: IError, IsAsync: boolean): this;
    HasError: boolean;
    ErrorMessage: string;
    TranslateArgs: IErrorTranslateArgs;
  }
  declare export class ValidationResult mixins IValidationResult {
    Name: string;
    constructor(Name: string): this;
    IsDirty: boolean;
    Children: IValidationResult[];
    Add(error: IValidationResult): void;
    Remove(index: number): void;
    Optional: IOptional;
    TranslateArgs: IErrorTranslateArgs[];
    HasErrorsDirty: boolean;
    HasErrors: boolean;
    ErrorCount: number;
    ErrorMessage: string;
  }
  declare export class CompositeValidationResult mixins IValidationResult {
    Name: string;
    Children: IValidationResult[];
    constructor(Name: string): this;
    Optional: IOptional;
    AddFirst(error: IValidationResult): void;
    Add(error: IValidationResult): void;
    Remove(index: number): void;
    HasErrorsDirty: boolean;
    HasErrors: boolean;
    ErrorCount: number;
    ErrorMessage: string;
    TranslateArgs: IErrorTranslateArgs[];
    LogErrors(headerMessage?: string): void;
    Errors: {
      [name: string]: IValidationResult
    };
    SetDirty(): void;
    SetPristine(): void;
  }
  declare export class AbstractValidator<T> mixins IAbstractValidator<T> {
    Validators: {
      [name: string]: IPropertyValidator[]
    };
    AbstractValidators: {
      [name: string]: IAbstractValidator<any>
    };
    ValidationFunctions: {
      [name: string]: IValidatorFce[]
    };
    RuleFor(prop: string, validator: IPropertyValidator): void;
    ValidationFor(prop: string, fce: IValidatorFce): void;
    Validation(fce: IValidatorFce): void;
    ValidatorFor<K>(
      prop: string,
      validator: IAbstractValidator<K>,
      forList?: boolean
    ): void;
    CreateAbstractRule(name: string): IAbstractValidationRule<T>;
    CreateAbstractListRule(name: string): IAbstractValidationRule<T>;
    CreateRule(name: string): IAbstractValidationRule<T>;
    ForList: boolean;
  }
  declare export class MessageLocalization {
    static customMsg: string;
    static defaultMessages: {
      required: string,
      remote: string,
      email: string,
      url: string,
      date: string,
      dateISO: string,
      number: string,
      digits: string,
      signedDigits: string,
      creditcard: string,
      equalTo: string,
      maxlength: string,
      minlength: string,
      rangelength: string,
      range: string,
      max: string,
      min: string,
      step: string,
      contains: string,
      mask: string,
      custom: string
    };
    static ValidationMessages: {
      required: string,
      remote: string,
      email: string,
      url: string,
      date: string,
      dateISO: string,
      number: string,
      digits: string,
      signedDigits: string,
      creditcard: string,
      equalTo: string,
      maxlength: string,
      minlength: string,
      rangelength: string,
      range: string,
      max: string,
      min: string,
      step: string,
      contains: string,
      mask: string,
      custom: string
    };
    static GetValidationMessage(validator: any): string;
  }
}
