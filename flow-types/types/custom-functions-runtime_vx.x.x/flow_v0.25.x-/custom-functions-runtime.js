declare module "custom-functions-runtime" {
  declare var npm$namespace$CustomFunctions: {
    associate: typeof CustomFunctions$associate
  };

  /**
   * @beta Associates the JavaScript function to the name given by the "id" property in the metadata JSON file.
   */
  declare function CustomFunctions$associate(
    id: string,
    functionObject: Function
  ): void;

  /**
   * @beta Associates the JavaScript functions to the names given by the "id" properties in the metadata JSON file.
   */
  declare function CustomFunctions$associate(mappings: {
    [key: string]: Function
  }): void;

  /**
   * @beta Provides information about the invocation of a custom function.
   */
  declare interface CustomFunctions$Invocation {
    /**
 * @beta The cell address where the function is being called, if requested, otherwise undefined.

To request the address for the function, in the metadata JSON file, the function options should specify:
`{ "requiresAddress": true }`

If the metadata JSON file is being generated from JSDoc comments, include the tag `@requiresAddress`.
 */
    address?: string;
  }

  /**
 * @beta Provides information about the invocation of a cancelable custom function.
A cancelable custom function can provide a handler for the onCanceled event.

To indicate that a function is cancelable, in the metadata JSON file, the function options should specify:
`{ "cancelable": true }`

If the metadata JSON file is being generated from JSDoc comments, include the tag `@cancelable`.
 */
  declare type CustomFunctions$CancelableInvocation = {
    /**
     * @beta Event handler called when the custom function is canceled.
     */
    onCanceled: () => void
  } & CustomFunctions$Invocation;

  /**
   * @beta
   * @deprecated Use `CancelableInvocation` instead.
   */
  declare type CustomFunctions$CancelableHandler = {} & CustomFunctions$CancelableInvocation;

  /**
 * @beta Provides information about the invocation of a streaming custom function.
A streaming custom function can provide results which can change over time.

Call `setResult()` one or more times to provide the result instead of returning
a result from the function.
 */
  declare type CustomFunctions$StreamingInvocation<ResultType> = {
    /**
     * @beta Set the result for the custom function. May be called more than once.
     */
    setResult: (value: ResultType | Error) => void
  } & CustomFunctions$CancelableInvocation;

  /**
   * @beta
   * @deprecated Use `StreamingInvocation<ResultType>` instead.
   */
  declare type CustomFunctions$StreamingHandler<
    ResultType
  > = {} & CustomFunctions$StreamingInvocation<ResultType>;
}
