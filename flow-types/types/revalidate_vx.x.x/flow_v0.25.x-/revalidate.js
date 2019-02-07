declare module "revalidate" {
  declare export interface CombineValidatorsOptions {
    serializeValues?: (values: any) => any;
  }
  declare export interface Config {
    field?: any;
    message?: string;
  }
  declare export interface Multiple {
    multiple?: boolean;
  }
  declare export type ComposeConfig = Config & Multiple;
  declare export interface ParsedField {
    isArray: boolean;
    baseName: string;
    fullName: string;
  }
  declare export type MessageCreator = ((field: any) => any) | string;
  declare export type ValidatorImpl = (
    message: any
  ) => (value: any, allValues?: any) => any;
  declare export type Comparer = (a: any, b: any) => boolean;
  declare export type ConfiguredValidator = (
    value?: any,
    allValues?: any
  ) => any;
  declare export type UnconfiguredValidator = (
    config?: string | Config,
    value?: any,
    allValues?: any
  ) => any;
  declare export type ConfiguredCombinedValidator = (
    value?: any,
    allValues?: any
  ) => any;
  declare export type CurryableValidator = (
    config?: string | Config
  ) => ConfiguredValidator;
  declare export type ComposedCurryableValidator = (
    config?: string | ComposeConfig
  ) => ConfiguredValidator;
  declare export type ConfigurableValidator = UnconfiguredValidator &
    CurryableValidator;
  declare export type Validator = ConfiguredValidator & UnconfiguredValidator;
  declare export function createValidator(
    curriedDefinition: ValidatorImpl,
    defaultMessageCreator?: MessageCreator
  ): ConfigurableValidator;

  declare export function composeValidators(
    firstValidator: Validator | any,
    ...validators: Validator[]
  ): ComposedCurryableValidator;

  declare export function combineValidators(
    validators: any,
    options?: CombineValidatorsOptions
  ): ConfiguredCombinedValidator;

  declare export function hasLengthBetween(
    min: number,
    max: number
  ): ConfigurableValidator;

  declare export function hasLengthGreaterThan(
    min: number
  ): ConfigurableValidator;

  declare export function hasLengthLessThan(max: number): ConfigurableValidator;

  declare export function isAlphabetic(
    config?: string | Config,
    value?: any,
    allValues?: any
  ): ConfiguredValidator | any;

  declare export function isAlphaNumeric(
    config?: string | Config,
    value?: any,
    allValues?: any
  ): ConfiguredValidator | any;

  declare export function isNumeric(
    config?: string | Config,
    value?: any,
    allValues?: any
  ): ConfiguredValidator | any;

  declare export function isOneOf(
    config?: string | Config,
    value?: any,
    allValues?: any
  ): ConfiguredValidator | any;

  declare export function isRequired(
    config?: string | Config,
    value?: any,
    allValues?: any
  ): ConfiguredValidator | any;

  declare export function isRequiredIf(
    config?: string | Config,
    value?: any,
    allValues?: any
  ): ConfiguredValidator | any;

  declare export function matchesField(
    otherField: string,
    otherFieldLabel: string
  ): ConfigurableValidator;

  declare export function matchesPattern(regex: RegExp): ConfigurableValidator;
}
