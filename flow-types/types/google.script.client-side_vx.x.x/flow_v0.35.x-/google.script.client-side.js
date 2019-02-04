declare module 'google.script.client-side' {
        
      declare var npm$namespace$script: {
        
        run: typeof script$run,
      }
declare interface script$UrlLocation {

/**
 * The string value of URL fragment after the # character, or an emptry string if no URL fragment is present
 */
hash: string,

/**
 * An object of key/value pairs that correspond to the URL request parameters.
 * Only the first value will be returned for parameters that have multiple values.
 * If no parameters are present, this will be an empty object.
 */
parameter: {
[key: string]: string
},

/**
 * An object similar to location.parameter, but with an array of values for each key.
 * If no parameters are present, this will be an empty object.
 */
parameters: {
[key: string]: $ReadOnlyArray<string>
}
} 


      declare var npm$namespace$url: {
        getLocation: typeof url$getLocation,
        
      }

/**
 * Gets a URL location object and passes it to the specified callback function (as the only argument).
 * @param callback a client-side callback function to run, using the location object as the only argument.
 */
declare function url$getLocation(callback: (location: script$UrlLocation) => void): void



      declare var npm$namespace$history: {
        push: typeof history$push,
replace: typeof history$replace,
setChangeHandler: typeof history$setChangeHandler,
        
      }
declare type history$State = {[key: string]: any} | null;

declare interface history$Query {
[key: string]: string | $ReadOnlyArray<string>
} 


/**
 * Pushes the provided state object, URL parameters and URL fragment onto the browser history stack.
 * @param stateObject An developer-defined object to be associated with a browser history event, and which resurfaces when the state is popped.
Typically used to store application state information (such as page data) for future retrieval.
 * @param params An object containing URL parameters to associate with this state.
For example, {foo: “bar”, fiz: “baz”} equates to "?foo=bar&fiz=baz".
Alternatively, arrays can be used: {foo: [“bar”, “cat”], fiz: “baz”} equates to "?foo=bar&foo=cat&fiz=baz".
If null or undefined, the current URL parameters are not changed. If empty, the URL parameters are cleared.
 * @param hash The string URL fragment appearing after the '#' character.
If null or undefined, the current URL fragment is not changed. If empty, the URL fragment is cleared.
 */
declare function history$push(stateObject: history$State, params?: history$Query, hash?: string): void



/**
 * Replaces the top event on the browser history stack with the provided (developer-defined) state object, URL parameters and URL fragment.
 * @param stateObject An developer-defined object to be associated with a browser history event, and which resurfaces when the state is popped.
Typically used to store application state information (such as page data) for future retrieval.
 * @param params An object containing URL parameters to associate with this state.
For example, {foo: “bar”, fiz: “baz”} equates to "?foo=bar&fiz=baz".
Alternatively, arrays can be used: {foo: [“bar”, “cat”], fiz: “baz”} equates to "?foo=bar&foo=cat&fiz=baz".
If null or undefined, the current URL parameters are not changed. If empty, the URL parameters are cleared.
 * @param hash The string URL fragment appearing after the '#' character.
If null or undefined, the current URL fragment is not changed. If empty, the URL fragment is cleared.
 */
declare function history$replace(stateObject: history$State, params?: history$Query, hash?: string): void


declare interface history$HistoryChangeEvent {

/**
 * The state object associated with the popped event.
 * This object is identical to the state object that used in the corresponding push() or replace() method that added the popped state to the history stack.
 */
state: history$State,

/**
 * A location object associated with the popped event
 */
location: script$UrlLocation
} 


/**
 * Sets a callback function to respond to changes in the browser history.
 * @param callback a client-side callback function to run upon a history change event, using the event object as the only argument.
 */
declare function history$setChangeHandler(handler: (event: history$HistoryChangeEvent) => void): void



      declare var npm$namespace$host: {
        close: typeof host$close,
setHeight: typeof host$setHeight,
setWidth: typeof host$setWidth,
        origin: typeof host$origin,
      }

/**
 * Provides the host domain, so scripts can set their origin correctly.
 */
declare var host$origin: string;


/**
 * Closes the current dialog or sidebar.
 */
declare function host$close(): void



      declare var npm$namespace$editor: {
        focus: typeof editor$focus,
        
      }

/**
 * Switches browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.
 */
declare function editor$focus(): void



/**
 * Sets the height of the current dialog.
 * @param height the new height, in pixels
 */
declare function host$setHeight(height: number): void



/**
 * Sets the width of the current dialog.
 * @param width the new width, in pixels
 */
declare function host$setWidth(width: number): void


declare var script$run: script$Runner;

declare interface script$Runner {

/**
 * Executes the server-side Apps Script function with the corresponding name.
 */
[functionName: string]: (...args: any[]) => void,

/**
 * Sets a callback function to run if the server-side function throws an exception.
 * Without a failure handler, failures are logged to the JavaScript console.
 * To override this, call withFailureHandler(null) or supply a failure handler that does nothing.
 * @param handler a client-side callback function to run if the server-side function throws an exception;
the Error object is passed to the function as the first argument, and the user object (if any) is passed as a second argument
 */
withFailureHandler(handler: (error: Error, object?: any) => void): script$Runner,

/**
 * Sets a callback function to run if the server-side function returns successfully.
 * @param handler a client-side callback function to run if the server-side function returns successfully;
the server's return value is passed to the function as the first argument, and the user object (if any) is passed as a second argument
 */
withSuccessHandler(handler: (value?: any, object?: any) => void): script$Runner,

/**
 * Sets an object to pass as a second parameter to the success and failure handlers.
 * @param object an object to pass as a second parameter to the success and failure handlers;
because user objects are not sent to the server, they are not subject to the restrictions on parameters and return values for server calls.
User objects cannot, however, be objects constructed with the new operator
 */
withUserObject(object: any): script$Runner
} 
    }
