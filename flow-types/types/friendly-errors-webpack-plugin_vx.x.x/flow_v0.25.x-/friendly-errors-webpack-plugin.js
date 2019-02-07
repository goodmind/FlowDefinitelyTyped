declare module "friendly-errors-webpack-plugin" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof FriendlyErrorsWebpackPlugin;

  declare class FriendlyErrorsWebpackPlugin mixins Plugin {
    constructor(
      options?: FriendlyErrorsWebpackPlugin$FriendlyErrorsWebpackPlugin$Options
    ): this;
  }
  declare class FriendlyErrorsWebpackPlugin$Severity {
    constructor(...args: empty): mixed;
    static +Error: Class<FriendlyErrorsWebpackPlugin$Severity__Error> &
      FriendlyErrorsWebpackPlugin$Severity__Error &
      "error"; // "error"
    static +Warning: Class<FriendlyErrorsWebpackPlugin$Severity__Warning> &
      FriendlyErrorsWebpackPlugin$Severity__Warning &
      "warning"; // "warning"
  }

  declare class FriendlyErrorsWebpackPlugin$Severity__Error
    mixins FriendlyErrorsWebpackPlugin$Severity {}
  declare class FriendlyErrorsWebpackPlugin$Severity__Warning
    mixins FriendlyErrorsWebpackPlugin$Severity {}

  declare interface FriendlyErrorsWebpackPlugin$Options {
    compilationSuccessInfo?: {
      messages: string[],
      notes: string[]
    };
    onErrors?: (
      severity: FriendlyErrorsWebpackPlugin$Severity,
      errors: string
    ) => void;
    clearConsole?: boolean;
    additionalFormatters?: Array<
      (
        errors: FriendlyErrorsWebpackPlugin$WebpackError[],
        type: FriendlyErrorsWebpackPlugin$Severity
      ) => string[]
    >;
    additionalTransformers?: Array<(error: any) => any>;
  }

  declare interface FriendlyErrorsWebpackPlugin$WebpackError {
    message: string;
    file: string;
    origin: string;
    name: string;
    severity: FriendlyErrorsWebpackPlugin$Severity;
    webpackError: any;
  }
}
