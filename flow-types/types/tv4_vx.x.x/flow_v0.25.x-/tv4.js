declare module "tv4" {
  declare export interface tv4$JsonSchema {
    [key: string]: any;
    title?: string;
    description?: string;
    id?: string;
    $schema?: string;
    type?: string | string[];
    items?: any;
    properties?: any;
    patternProperties?: any;
    additionalProperties?: boolean;
    required?: string[];
    definitions?: any;
    default?: any;
  }

  declare export type tv4$SchemaMap = {
    [uri: string]: tv4$JsonSchema
  };

  declare export type tv4$ErrorMap = {
    [errorCode: string]: string
  };

  declare export interface tv4$ErrorCodes {
    [key: string]: number;
  }

  declare export interface tv4$ValidationError {
    code: number;
    message: any;
    dataPath?: string;
    schemaPath?: string;
    subErrors?: tv4$ValidationError[];
  }

  declare export type tv4$ErrorVar = {
    params: any,
    subErrors: any,
    stack: string
  } & tv4$ValidationError;

  declare export interface tv4$BaseResult {
    missing: string[];
    valid: boolean;
  }

  declare export type tv4$SingleResult = {
    error: tv4$ValidationError
  } & tv4$BaseResult;

  declare export type tv4$MultiResult = {
    errors: tv4$ValidationError[]
  } & tv4$BaseResult;

  declare export type tv4$FormatValidationFunction = (
    data: any,
    schema: tv4$JsonSchema
  ) => string;

  declare export type tv4$KeywordValidationFunction = (
    data: any,
    value: any,
    schema: tv4$JsonSchema,
    dataPointerPath: string
  ) => string | tv4$ValidationError;

  declare export type tv4$AsyncValidationCallback = (
    isValid: boolean,
    error: tv4$ValidationError
  ) => void;

  declare export interface tv4$TV4 {
    error: tv4$ErrorVar;
    missing: string[];
    validate(
      data: any,
      schema: tv4$JsonSchema,
      checkRecursive?: boolean
    ): boolean;
    validate(
      data: any,
      schema: tv4$JsonSchema,
      checkRecursive: boolean,
      banUnknownProperties: boolean
    ): boolean;
    validateResult(
      data: any,
      schema: tv4$JsonSchema,
      checkRecursive?: boolean
    ): tv4$SingleResult;
    validateResult(
      data: any,
      schema: tv4$JsonSchema,
      checkRecursive: boolean,
      banUnknownProperties: boolean
    ): tv4$SingleResult;
    validateMultiple(
      data: any,
      schema: tv4$JsonSchema,
      checkRecursive?: boolean
    ): tv4$MultiResult;
    validateMultiple(
      data: any,
      schema: tv4$JsonSchema,
      checkRecursive: boolean,
      banUnknownProperties: boolean
    ): tv4$MultiResult;
    validate(
      data: any,
      schema: tv4$JsonSchema,
      callback: tv4$AsyncValidationCallback,
      checkRecursive?: boolean
    ): void;
    validate(
      data: any,
      schema: tv4$JsonSchema,
      callback: tv4$AsyncValidationCallback,
      checkRecursive: boolean,
      banUnknownProperties: boolean
    ): void;
    addSchema(schema: tv4$JsonSchema): void;
    addSchema(uri: string, schema: tv4$JsonSchema): void;
    getSchema(uri: string): tv4$JsonSchema;
    getSchemaMap(): tv4$SchemaMap;
    getSchemaUris(filter?: RegExp): string[];
    getMissingUris(filter?: RegExp): string[];
    dropSchemas(): void;
    freshApi(): tv4$TV4;
    reset(): void;
    setErrorReporter(lang: string): void;
    setErrorReporter(
      reporter: (
        error: tv4$ValidationError,
        data: any,
        schema: tv4$JsonSchema
      ) => string
    ): void;
    language(code: string): void;
    addLanguage(code: string, map: tv4$ErrorMap): void;
    addFormat(
      format: string,
      validationFunction: tv4$FormatValidationFunction
    ): void;
    addFormat(formats: {
      [formatName: string]: tv4$FormatValidationFunction
    }): void;
    defineKeyword(
      keyword: string,
      validationFunction: tv4$KeywordValidationFunction
    ): void;
    defineError(
      codeName: string,
      codeNumber: number,
      defaultMessage: string
    ): void;
    normSchema(schema: tv4$JsonSchema, baseUri: string): any;
    resolveUrl(base: string, href: string): string;
    errorCodes: tv4$ErrorCodes;
  }
  declare var tv4: tv4$tv4$TV4;
  declare module.exports: typeof tv4;
}
