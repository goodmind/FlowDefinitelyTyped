declare module "decorum" {
  declare export default typeof decorum;

  declare var npm$namespace$decorum: {
    Validation: typeof decorum$Validation,
    Email: typeof decorum$Email,
    FieldName: typeof decorum$FieldName,
    Length: typeof decorum$Length,
    MaxLength: typeof decorum$MaxLength,
    MinLength: typeof decorum$MinLength,
    Pattern: typeof decorum$Pattern,
    Required: typeof decorum$Required,
    Alpha: typeof decorum$Alpha,
    AlphaNumeric: typeof decorum$AlphaNumeric,
    MessageHandlers: typeof decorum$MessageHandlers,

    Validator: typeof decorum$Validator,
    ModelValidator: typeof decorum$ModelValidator,
    CustomValidator: typeof decorum$CustomValidator,
    EmailValidator: typeof decorum$EmailValidator,
    LengthValidator: typeof decorum$LengthValidator,
    MaxLengthValidator: typeof decorum$MaxLengthValidator,
    MinLengthValidator: typeof decorum$MinLengthValidator,
    PatternValidator: typeof decorum$PatternValidator,
    RequiredFieldValidator: typeof decorum$RequiredFieldValidator,
    BaseValidator: typeof decorum$BaseValidator,
    FieldOptions: typeof decorum$FieldOptions
  };

  /**
   * A generic custom validation. Takes a predicate that will receive the proposed value as the first parameter and
   * the current model state as the second.
   * @param message The message to display when the predicate fails.
   * @param predicate A lambda expression/function that determines if the value is valid. If it returns a falsy
   * value, the field will be considered invalid and will return the passed error message upon validation.
   * @returns {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A field validation decorator.
   */
  declare export function decorum$Validation<TModel>(
    message: string | decorum$MessageHandler<decorum$CustomValidator<TModel>>,
    predicate: (value: any, model: TModel) => boolean
  ): PropertyDecorator;

  /**
   * Validate's that the field is a valid email address. The format used is the same as the webkit browser's internal
   * email validation format. For looser or stricter formats, use your own validation based on the @Pattern decorator.
   * @param message [Optional] Overrides the default validation error message.
   * @returns {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A field validation decorator.
   */
  declare export function decorum$Email(
    message?: string | decorum$MessageHandler<decorum$EmailValidator>
  ): PropertyDecorator;

  /**
   * Sets the field's "friendly" name in validation error messages.
   * @param name The field's friendly name
   * @returns {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A field validation decorator.
   */
  declare export function decorum$FieldName(name: string): PropertyDecorator;

  /**
   * Validate's a field's EXACT length. Validation fails if the field is not EXACTLY the length passed.
   * @param length The exact length the field must be.
   * @param message [Optional] Overrides the default validation error message.
   * @returns {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A field validation decorator.
   */
  declare export function decorum$Length(
    length: number,
    message?: string | decorum$MessageHandler<decorum$LengthValidator>
  ): PropertyDecorator;

  /**
   * Validates a field's maximum length.
   * @param maxLength The field's maximum length. Must be a positive integer greater than 1.
   * @param message [Optional] Overrides the default validation error message.
   * @returns {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A field validation decorator.
   */
  declare export function decorum$MaxLength(
    maxLength: number,
    message?: string | decorum$MessageHandler<decorum$MaxLengthValidator>
  ): PropertyDecorator;

  /**
   * Validates the field's minimum length.
   * @param minLength The field's minimum length. Must be a positive integer greater than 0
   * @param message [Optional] Overrides the default validation error message.
   * @returns {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A field validation decorator.
   */
  declare export function decorum$MinLength(
    minLength: number,
    message?: string | decorum$MessageHandler<decorum$MinLengthValidator>
  ): PropertyDecorator;

  /**
   * Validates the field against a regular expression pattern.
   * @param regex The regex to validate against. Should be a valid JavaScript {RegExp} instance.
   * @param message [Optional] Overrides the default validation error message.
   * @returns {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A field validation decorator.
   */
  declare export function decorum$Pattern(
    regex: RegExp,
    message?: string | decorum$MessageHandler<decorum$PatternValidator>
  ): PropertyDecorator;

  /**
   * Marks the field as required.
   * @param message [Optional] Overrides the default validation error message.
   * @returns {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A field validation decorator.
   */
  declare export function decorum$Required(
    message?: string | decorum$MessageHandler<decorum$RequiredFieldValidator>
  ): PropertyDecorator;

  /**
   * Validates that a given field only contains alpha values.
   * @param message [Optional] Overrides the default validation error message.
   * @returns {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A field validation decorator.
   */
  declare export function decorum$Alpha(
    message?: string | decorum$MessageHandler<decorum$PatternValidator>
  ): PropertyDecorator;

  /**
   * Validates that a given field only contains alphanumeric values.
   * @param message [Optional] Overrides the default validation error message.
   * @returns {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A field validation decorator.
   */
  declare export function decorum$AlphaNumeric(
    message?: string | decorum$MessageHandler<decorum$PatternValidator>
  ): PropertyDecorator;

  /**
   * A map from field name to array of field validation decorators.
   */
  declare export type decorum$ValidationDefinitions = {
    [field: string]: PropertyDecorator[]
  };

  /**
   * Static container for convenience methods related to field validation.
   */
  declare export class decorum$Validator {
    /**
     * Creates a new model validator for the given model. Model should be a valid class that has a valid constructor
     * and a prototype.
     * @param model The model to create the validator for.
     * @returns {decorum$ModelValidator} An instance of {ModelValidator}
     */
    static new(model: any): decorum$ModelValidator;

    /**
     * Decorates the passed class with model validations. Use this when you do not have access to ES7 decorators.
     * The object passed should be a valid class (ES6 class or ES5 function constructor).
     * @param objectType The class to decorate.
     * @param definitions One or more field validation definitions of the form { "fieldName": [ decorators ] }.
     */
    static decorate(
      objectType: any,
      definitions: decorum$ValidationDefinitions
    ): void;

    /**
     * Creates an anonymous validator, immediately validates the model, and returns any validation errors on the
     * model as a result.
     * @param model The model to validate.
     */
    static validate(model: any): decorum$IValidationResult;

    /**
     * Adds a validator to the given object prototype for the given property. Meant to be used inside of validation
     * decorators to inject the validation onto the object property.
     * @param targetPrototype A valid object prototype to add to.
     * @param property The property to add the validator for.
     * @param validator The validator to add.
     */
    static addValidator(
      targetPrototype: Object,
      property: string,
      validator: decorum$BaseValidator
    ): void;
  }

  /**
   * Details about validation errors on a field.
   */
  declare export interface decorum$IFieldValidationError {
    /**
     * The property name of the field on the model.
     */
    field: string;

    /**
     * The "friendly" name of the field. If not set on the model via @FieldName(...), it will default to "Field".
     */
    fieldName: string;

    /**
     * One or more field validation errors. Empty if no errors.
     */
    errors: string[];
  }

  /**
   * Result returned when a model is validated.
   */
  declare export interface decorum$IValidationResult {
    /**
     * Whether or not the model is valid.
     */
    isValid: boolean;

    /**
     * A map of field name to validation errors.
     */
    errors: decorum$IFieldValidationError[];
  }

  /**
   * Wraps a model to allow the consuming class to call validation methods.
   */
  declare export class decorum$ModelValidator {
    /**
     * Creates a new model validator.
     * @param model The model to validate. Should be a class that has a valid constructor function and prototype.
     */
    constructor(model: any): this;

    /**
     * Gets the validation options for the given field name.
     * @param fieldKey The name of the field to get options for.
     * @returns {decorum$FieldOptions} The field options associated with that field or null if no validations defined
     * for the field.
     */
    getValidationOptions(fieldKey: string): decorum$FieldOptions;

    /**
     * Validates the given field on this {ModelValidator}'s model. If a proposed value is passed, validate
     * against that passed value; otherwise, use the field's current value on the model.
     * @param fieldKey The name of the field to validate.
     * @param proposedValue [Optional] The proposed value to set on the field.
     * @returns {string[]} An array of field validation error messages if the field is invalid; otherwise,
     * an empty array.
     */
    validateField(fieldKey: string, proposedValue?: any): string[];

    /**
     * Validate the entire model and return a result that indicates whether the model is valid or not and any
     * errors
     * that have occurred in an object indexed by field name on the model.
     * @returns {decorum$IValidationResult} An object that contains whether the model is valid or not and errors by field
     * name.
     */
    validate(): decorum$IValidationResult;
  }

  /**
   * Callback invoked when a validation needs to return an error. The first parameter is an object
   * wrapping metadata about the field such as the field name, friendly name, value, etc.
   * The second parameter is the validator instance that triggered the error.
   */
  declare export interface decorum$MessageHandler<
    TValidator: decorum$BaseValidator
  > {
    (opts: decorum$IMessageOpts, validator: TValidator): string;
  }

  /**
   * Options passed to a field to aid in generating a message. Contains data about
   * the field such as name, friendly name, and value.
   */
  declare export interface decorum$IMessageOpts {
    /**
     * The property name from the model. I.e. 'emailAddress', 'username', etc.
     */
    property: string;

    /**
     * The friendly name for the field. I.e. 'Email address', 'Password Confirmation', etc.
     */
    friendlyName: string;

    /**
     * The current value of the field at the time the validation error was generated.
     */
    value: string;
  }

  /**
   * A map of validation "key" (unique name for a given type of validation) to message handler callback.
   */
  declare export interface decorum$IMessageHandlerMap {
    [key: string]: decorum$MessageHandler<any>;
  }

  /**
 * Mechanism for overriding validation errors to provide for custom or localized error messages.
 * @type {{
IMessageHandlerMap: any
}}
 */
  declare export var decorum$MessageHandlers: decorum$IMessageHandlerMap;

  /**
   * Custom validation class.
   */
  declare export class decorum$CustomValidator<TModel> mixins BaseValidator {
    constructor(
      predicate: (value: any, model: TModel) => boolean,
      message: string | decorum$MessageHandler<decorum$CustomValidator<TModel>>
    ): this;
    getMessage(opts: decorum$IMessageOpts): string;
    isValid(value: any, model: any): boolean;
  }

  /**
   * An email validator.
   */
  declare export class decorum$EmailValidator mixins PatternValidator {
    static EmailRegex: RegExp;
    constructor(
      message?: string | decorum$MessageHandler<decorum$EmailValidator>
    ): this;
    getMessage(opts: decorum$IMessageOpts): string;
    getKey(): string;
  }

  /**
   * An exact length validator.
   */
  declare export class decorum$LengthValidator mixins BaseValidator {
    length: number;
    constructor(
      length: number,
      message?: string | decorum$MessageHandler<decorum$LengthValidator>
    ): this;
    getMessage(opts: decorum$IMessageOpts): string;
    isValid(value: any): boolean;
  }

  /**
   * A maximum length validator.
   */
  declare export class decorum$MaxLengthValidator mixins BaseValidator {
    maxLength: number;
    constructor(
      maxLength: number,
      message?: string | decorum$MessageHandler<decorum$MaxLengthValidator>
    ): this;
    getMessage(opts: decorum$IMessageOpts): string;
    isValid(value: string): boolean;
  }

  /**
   * A minimum length validator.
   */
  declare export class decorum$MinLengthValidator mixins BaseValidator {
    minLength: number;
    constructor(
      minLength: number,
      message?: string | decorum$MessageHandler<decorum$MinLengthValidator>
    ): this;
    getMessage(opts: decorum$IMessageOpts): string;
    isValid(value: string): boolean;
  }

  /**
   * A regular expression validator.
   */
  declare export class decorum$PatternValidator mixins BaseValidator {
    pattern: RegExp;
    constructor(
      pattern: RegExp,
      message?: string | decorum$MessageHandler<decorum$PatternValidator>
    ): this;
    getMessage(opts: decorum$IMessageOpts): string;
    isValid(value: any): boolean;
  }

  /**
   * A field requiredness validator.
   */
  declare export class decorum$RequiredFieldValidator mixins BaseValidator {
    constructor(
      message?: string | decorum$MessageHandler<decorum$RequiredFieldValidator>
    ): this;
    validatesEmptyValue(): boolean;
    getMessage(opts: decorum$IMessageOpts): string;
    isValid(value: any): boolean;
  }

  /**
   * Base abstract class for all validators. Methods that must be overridden:
   *   getMessage(...) - Get error message to return when field is invalid.
   *   isValid(...)    - Check validity of field given proposed value and the rest of the model.
   */
  declare export class decorum$BaseValidator {
    /**
     * Initializes the {BaseValidator}
     * @param validatorKey A unique "key" by which to identify this field validator i.e. length, maxlength,
     * required. Should be a valid JS property name.
     * @param message A custom error message to return. Should be passed down from concrete class' constructors to
     * enable customizing error messages.
     */
    constructor(
      validatorKey: string,
      message: string | decorum$MessageHandler<any>
    ): this;

    /**
     * Returns true if the validator instance was passed a custom error message.
     */
    hasCustomMessage: boolean;

    /**
     * Check whether this validator should process an "empty" value (i.e. null, undefined, empty string). Override
     * this in derived classes to skip validators if the field value hasn't been set. Things like email, min/max
     * length, and pattern should return false for this to ensure they don't get fired when the model is initially
     * empty before a user has had a chance to input a value. Things like required should override this to true so
     * that they are fired for empty values. Base implementation defaults to false
     * @returns {boolean}
     */
    validatesEmptyValue(): boolean;

    /**
     * Gets the custom error message set on this validator.
     * @param opts Metadata about the field such as name and friendly name.
     * @returns {string} The custom error message or null if none has been set.
     */
    getCustomMessage(opts: decorum$IMessageOpts): string;

    /**
     * Gets the unique name for this validator.
     * @returns {string} The unique name for this validator.
     */
    getKey(): string;

    /**
     * [Abstract] Gets the error message to display when a field fails validation by this validator.
     * @param opts Metadata about the field such as name and friendly name.
     */
    getMessage(opts: decorum$IMessageOpts): string;

    /**
     * [Abstract] Checks the passed value for validity.
     * @param value The field's proposed value.
     * @param model The rest of the model if cross-field validity checks are necessary.
     */
    isValid(value: any, model: any): boolean;
  }

  /**
   * Validation options for a given field including actual validators and meta data such as the field name.
   */
  declare export class decorum$FieldOptions {
    constructor(property: string): this;

    /**
     * Gets the "friendly" name of the field for use in validation error messages. Defaults to just "Field".
     * @returns {string}
     */
    getFriendlyName(): string;

    /**
     * Sets the "friendly" name of the field for use in validation error messages. This name will be used in the
     * text of validation errors.
     * @param name The new name to set.
     */
    setFriendlyName(name: string): void;

    /**
     * Add a validator to the list of validators for this field.
     * @param validator The validator to add. Should be a class that extends from {BaseValidator}.
     */
    addValidator(validator: decorum$BaseValidator): void;

    /**
     * Gets the validators assigned to this field.
     * @returns {decorum$BaseValidator[]} The validators for this field.
     */
    getValidators(): decorum$BaseValidator[];

    /**
     * Runs through all of the validators for the field given a particular value and returns any validation errors
     * that may have occurred.
     * @param value The value to validate.
     * @param model The rest of the model. Used in custom cross-field validations.
     * @returns {string[]} Any validation errors that may have occurred or an empty array if the value passed is
     * valid for the field.
     */
    validateValue(value: any, model: any): string[];
  }
}
