declare module "jest-validate" {
  declare export class ValidationError mixins Error {
    name: string;
    message: string;
    constructor(name: string, message: string, comment?: string): this;
  }
  declare export function createDidYouMeanMessage(
    unrecognized: string,
    allowedOptions: string[]
  ): string;

  declare export function format(value: any): string;

  declare export function logValidationWarning(
    name: string,
    message: string,
    commant?: string
  ): void;

  declare export interface Title {
    deprecation?: string;
    error?: string;
    warning?: string;
  }
  declare export interface DeprecatedConfig {
    [key: string]: (config: { [key: string]: any }) => string;
  }
  declare export interface ValidationOptions {
    /**
     * optional string to be rendered below error/warning message.
     */
    comment?: string;

    /**
     * an optional function with validation condition.
     */
    condition?: (value: any, exampleValue: any) => boolean;

    /**
     * optional object with deprecated config keys.
     */
    deprecatedConfig?: DeprecatedConfig;

    /**
     * the only **required** option with configuration against which you'd like to test.
     */
    exampleConfig: { [key: string]: any };

    /**
     * optional object of titles for errors and messages.
     */
    title?: Title;

    /**
     * optional functions responsible for displaying warning and error messages.
     */
    deprecate?: (
      config: { [key: string]: any },
      key: string,
      deprecatedConfig: DeprecatedConfig,
      options: ValidationOptions
    ) => boolean;

    /**
     * optional functions responsible for displaying warning and error messages.
     */
    error?: (
      key: string,
      received: any,
      exampleValue: any,
      options: ValidationOptions
    ) => void;

    /**
     * optional functions responsible for displaying warning and error messages.
     */
    unknown?: (
      config: { [key: string]: any },
      exampleConfig: { [key: string]: any },
      key: string,
      options: ValidationOptions
    ) => void;
  }

  /**
   * By default jest-validate will print generic warning and error messages.
   * You can however customize this behavior by providing `options: ValidationOptions` object as a second argument:
   *
   * Almost anything can be overwritten to suite your needs.
   */
  declare export function validate(
    config: { [key: string]: any },
    options: ValidationOptions
  ): {
    hasDeprecationWarnings: boolean,
    isValid: boolean
  };
}
