declare interface ValidatorOptions$IsStringOptions {
  regex?: RegExp;
  message?: String;
}

declare interface ValidatorOptions$IsNumberOptions {
  min?: Number;
  max?: Number;
}

declare interface ValidatorOptions$IsDateOptions {
  format?: String;
  message?: String;
}

declare type ValidatorOptions$Options =
  | ValidatorOptions$IsStringOptions
  | ValidatorOptions$IsNumberOptions
  | ValidatorOptions$IsDateOptions;
declare var Validator: typeof npm$namespace$Validator;

declare var npm$namespace$Validator: {
  express: typeof Validator$express,
  bodyValidator: typeof Validator$bodyValidator,
  expressParams: typeof Validator$expressParams,
  paramsValidator: typeof Validator$paramsValidator,
  expressQuery: typeof Validator$expressQuery,
  queryValidator: typeof Validator$queryValidator,
  run: typeof Validator$run,
  isObject: typeof Validator$isObject,
  isString: typeof Validator$isString,
  isStringOrNull: typeof Validator$isStringOrNull,
  isBoolean: typeof Validator$isBoolean,
  isNumber: typeof Validator$isNumber,
  isInteger: typeof Validator$isInteger,
  isDate: typeof Validator$isDate,
  isIsoDate: typeof Validator$isIsoDate,
  isIsoDateTime: typeof Validator$isIsoDateTime,
  isArray: typeof Validator$isArray,
  isAnyObject: typeof Validator$isAnyObject
};
declare type Validator$ValidateFn = (
  value: any,
  onError: (message: String, childName: String, childValie: any) => void
) => void;

declare interface Validator$Validatable {
  validate: Validator$ValidateFn;
}

declare type Validator$IsObjectValidator = {
  withRequired: (
    name: String,
    validator: Validator$Validatable
  ) => Validator$IsObjectValidator,
  withOptional: (
    name: String,
    validator: Validator$Validatable
  ) => Validator$IsObjectValidator,
  withCustom: (
    customValidator: Validator$ValidateFn
  ) => Validator$IsObjectValidator,
  validate: Validator$ValidateFn
} & Validator$Validatable;

declare function Validator$express(validator: Validator$Validatable): any;

declare function Validator$bodyValidator(validator: Validator$Validatable): any;

declare function Validator$expressParams(validator: Validator$Validatable): any;

declare function Validator$paramsValidator(
  validator: Validator$Validatable
): any;

declare function Validator$expressQuery(validator: Validator$Validatable): any;

declare function Validator$queryValidator(
  validator: Validator$Validatable
): any;

declare function Validator$run(
  validator: Validator$Validatable,
  value: any,
  callback: (errorCount: Number, errors: Array<any>) => void
): void;

declare function Validator$isObject(): Validator$IsObjectValidator;

declare function Validator$isString(
  options?: ValidatorOptions$IsStringOptions
): Validator$Validatable;

declare function Validator$isStringOrNull(
  options?: ValidatorOptions$IsStringOptions
): Validator$Validatable;

declare function Validator$isBoolean(): Validator$Validatable;

declare function Validator$isNumber(
  options?: ValidatorOptions$IsNumberOptions
): Validator$Validatable;

declare function Validator$isInteger(
  options?: ValidatorOptions$IsNumberOptions
): Validator$Validatable;

declare function Validator$isDate(
  options?: ValidatorOptions$IsDateOptions
): Validator$Validatable;

declare function Validator$isIsoDate(
  options?: ValidatorOptions$IsDateOptions
): Validator$Validatable;

declare function Validator$isIsoDateTime(
  options?: ValidatorOptions$IsDateOptions
): Validator$Validatable;

declare function Validator$isArray(
  validator?: Validator$Validatable,
  options?: ValidatorOptions$Options
): Validator$Validatable;

declare function Validator$isAnyObject(): Validator$IsObjectValidator;
declare module "node-validator" {
  declare export default typeof Validator;
}
