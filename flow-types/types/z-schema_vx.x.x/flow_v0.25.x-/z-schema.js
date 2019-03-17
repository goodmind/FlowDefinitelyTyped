declare module "z-schema" {
  declare export interface Validator$Options {
    asyncTimeout?: number;
    forceAdditional?: boolean;
    assumeAdditional?: boolean;
    forceItems?: boolean;
    forceMinItems?: boolean;
    forceMaxItems?: boolean;
    forceMinLength?: boolean;
    forceMaxLength?: boolean;
    forceProperties?: boolean;
    ignoreUnresolvableReferences?: boolean;
    noExtraKeywords?: boolean;
    noTypeless?: boolean;
    noEmptyStrings?: boolean;
    noEmptyArrays?: boolean;
    strictUris?: boolean;
    strictMode?: boolean;
    reportPathAsArray?: boolean;
    breakOnFirstError?: boolean;
    pedanticCheck?: boolean;
    ignoreUnknownFormats?: boolean;
    customValidator?: (report: Report, schema: any, json: any) => void;
  }

  declare export type Validator$SchemaError = {
    /**
     * Implements the Error.name contract.  The value is always "z-schema validation error".
     */
    name: string,

    /**
     * An identifier indicating the type of error.
     * Example: "JSON_OBJECT_VALIDATION_FAILED"
     */
    message: string,

    /**
     * Returns details for each error that occurred during validation.
     * See Options.breakOnFirstError.
     */
    details: Validator$SchemaErrorDetail[]
  } & Error;

  declare export interface Validator$SchemaErrorDetail {
    /**
     * Example: "Expected type string but found type array"
     */
    message: string;

    /**
     * An error identifier that can be used to format a custom error message.
     * Example: "INVALID_TYPE"
     */
    code: string;

    /**
     * Format parameters that can be used to format a custom error message.
     * Example: ["string","array"]
     */
    params: Array<string>;

    /**
     * A JSON path indicating the location of the error.
     * Example: "#/projects/1"
     */
    path: string;

    /**
     * The schema rule description, which is included for certain errors where
     * this information is useful (e.g. to describe a constraint).
     */
    description: string;

    /**
     * Returns details for sub-schemas that failed to match.  For example, if the schema
     * uses the "oneOf" constraint to accept several alternative possibilities, each
     * alternative will have its own inner detail object explaining why it failed to match.
     */
    inner: Validator$SchemaErrorDetail[];
  }
  declare class Validator {
    /**
     * Register a custom format.
     * @param name - name of the custom format
     * @param validatorFunction - custom format validator function.
     * Returns `true` if `value` matches the custom format.
     */
    static registerFormat(
      formatName: string,
      validatorFunction: (value: any) => boolean
    ): void;

    /**
     * Unregister a format.
     * @param name - name of the custom format
     */
    static unregisterFormat(name: string): void;

    /**
     * Get the list of all registered formats.
     *
     * Both the names of the burned-in formats and the custom format names are
     * returned by this function.
     * @returns {string[]} the list of all registered format names.
     */
    static getRegisteredFormats(): string[];
    static getDefaultOptions(): Validator$Options;
    constructor(options: Validator$Options): this;

    /**
     * @param schema - JSON object representing schema
     * @returns {boolean} true if schema is valid.
     */
    validateSchema(schema: any): boolean;

    /**
     * @param json - either a JSON string or a parsed JSON object
     * @param schema - the JSON object representing the schema
     * @returns true if json matches schema
     */
    validate(json: any, schema: any): boolean;

    /**
     * @param json - either a JSON string or a parsed JSON object
     * @param schema - the JSON object representing the schema
     */
    validate(
      json: any,
      schema: any,
      callback: (err: any, valid: boolean) => void
    ): void;

    /**
     * Returns an Error object for the most recent failed validation, or null if the validation was successful.
     */
    getLastError(): Validator$SchemaError;

    /**
     * Returns the error details for the most recent validation, or undefined if the validation was successful.
     * This is the same list as the SchemaError.details property.
     */
    getLastErrors(): Validator$SchemaErrorDetail[];
  }

  /**
   * Basic representation of the Report class -- just enough to support customValidator
   */
  declare class Report {
    /**
     * @param errorCode - a string representing the code for the custom error, e.g. INVALID_VALUE_SET
     * @param errorMessage - string with the message to be returned in the error
     * @param params - an array of relevant params for the error, e.g. [fieldName, fieldValue]
     * @param subReports - sub-schema involved in the error
     * @param schemaDescription - description from the schema used in the validation
     * Adds custom error to the errors array in the validation instance and sets valid to false if it is not already set as false
     */
    addCustomError: (
      errorCode: string,
      errorMessage: string,
      params: string[],
      subReports: string,
      schemaDescription: string
    ) => void;
  }
  declare export default typeof Validator;
}
