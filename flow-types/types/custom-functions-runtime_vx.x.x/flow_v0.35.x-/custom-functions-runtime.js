declare module 'custom-functions-runtime' {
        
      declare var npm$namespace$CustomFunctions: {
        associate: typeof CustomFunctions$associate,
        
      }

/**
 * @beta Associates the JavaScript function to the name given by the "id" property in the metadata JSON file.
 */
declare function CustomFunctions$associate(id: string, functionObject: Function): void



/**
 * @beta Associates the JavaScript functions to the names given by the "id" properties in the metadata JSON file.
 */
declare function CustomFunctions$associate(mappings: {
[key: string]: Function
}): void



/**
 * A handler passed automatically as the last parameter
 * to a streaming function. With this parameter, a
 * function can use handler.setResult to set a cell value
 * or hook into the handler.onCanceled event to
 * to handle what happens when the function stops streaming.
 * @beta
 */
declare type CustomFunctions$StreamingHandler<T> = {

/**
 * Sets the returned result for a streaming custom function.
 * @beta
 */
setResult: (value: T | Error) => void
} & CustomFunctions$CancelableHandler



/**
 * @beta CancelableHandler interface
 */
declare interface CustomFunctions$CancelableHandler {

/**
 * Handles what should occur when a custom function is canceled.
 * @beta
 */
onCanceled: () => void
} 
    }
