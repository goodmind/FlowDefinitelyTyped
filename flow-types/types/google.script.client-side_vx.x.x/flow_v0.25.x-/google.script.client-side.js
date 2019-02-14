declare module "google.script.client-side" {
  declare var npm$namespace$google: {
    script: typeof npm$namespace$google$script
  };

  declare var npm$namespace$google$script: {
    run: typeof google$script$run,

    url: typeof npm$namespace$google$script$url,
    history: typeof npm$namespace$google$script$history,
    host: typeof npm$namespace$google$script$host
  };
  declare interface google$script$UrlLocation {
    /**
     * The string value of URL fragment after the # character, or an emptry string if no URL fragment is present
     */
    hash: string;

    /**
     * An object of key/value pairs that correspond to the URL request parameters.
     * Only the first value will be returned for parameters that have multiple values.
     * If no parameters are present, this will be an empty object.
     */
    parameter: {
      [key: string]: string
    };

    /**
     * An object similar to location.parameter, but with an array of values for each key.
     * If no parameters are present, this will be an empty object.
     */
    parameters: {
      [key: string]: $ReadOnlyArray<string>
    };
  }

  declare var npm$namespace$google$script$url: {
    getLocation: typeof google$script$url$getLocation
  };

  /**
   * Gets a URL location object and passes it to the specified callback function (as the only argument).
   * @param callback a client-side callback function to run, using the location object as the only argument.
   */
  declare function google$script$url$getLocation(
    callback: (location: google$script$UrlLocation) => void
  ): void;

  declare var npm$namespace$google$script$history: {
    push: typeof google$script$history$push,
    replace: typeof google$script$history$replace,
    setChangeHandler: typeof google$script$history$setChangeHandler
  };
  declare type google$script$history$State = { [key: string]: any } | null;

  declare interface google$script$history$Query {
    [key: string]: string | $ReadOnlyArray<string>;
  }

  /**
   * Pushes the provided state object, URL parameters and URL fragment onto the browser history stack.
   * @param stateObject An developer-defined object to be associated with a browser history event, and which resurfaces when the state is popped.
   * Typically used to store application state information (such as page data) for future retrieval.
   * @param params An object containing URL parameters to associate with this state.
   * For example, {foo: “bar”, fiz: “baz”} equates to "?foo=bar&fiz=baz".
   * Alternatively, arrays can be used: {foo: [“bar”, “cat”], fiz: “baz”} equates to "?foo=bar&foo=cat&fiz=baz".
   * If null or undefined, the current URL parameters are not changed. If empty, the URL parameters are cleared.
   * @param hash The string URL fragment appearing after the '#' character.
   * If null or undefined, the current URL fragment is not changed. If empty, the URL fragment is cleared.
   */
  declare function google$script$history$push(
    stateObject: google$script$history$State,
    params?: google$script$history$Query,
    hash?: string
  ): void;

  /**
   * Replaces the top event on the browser history stack with the provided (developer-defined) state object, URL parameters and URL fragment.
   * @param stateObject An developer-defined object to be associated with a browser history event, and which resurfaces when the state is popped.
   * Typically used to store application state information (such as page data) for future retrieval.
   * @param params An object containing URL parameters to associate with this state.
   * For example, {foo: “bar”, fiz: “baz”} equates to "?foo=bar&fiz=baz".
   * Alternatively, arrays can be used: {foo: [“bar”, “cat”], fiz: “baz”} equates to "?foo=bar&foo=cat&fiz=baz".
   * If null or undefined, the current URL parameters are not changed. If empty, the URL parameters are cleared.
   * @param hash The string URL fragment appearing after the '#' character.
   * If null or undefined, the current URL fragment is not changed. If empty, the URL fragment is cleared.
   */
  declare function google$script$history$replace(
    stateObject: google$script$history$State,
    params?: google$script$history$Query,
    hash?: string
  ): void;

  declare interface google$script$history$HistoryChangeEvent {
    /**
     * The state object associated with the popped event.
     * This object is identical to the state object that used in the corresponding push() or replace() method that added the popped state to the history stack.
     */
    state: google$script$history$State;

    /**
     * A location object associated with the popped event
     */
    location: google$script$UrlLocation;
  }

  /**
   * Sets a callback function to respond to changes in the browser history.
   * @param callback a client-side callback function to run upon a history change event, using the event object as the only argument.
   */
  declare function google$script$history$setChangeHandler(
    handler: (event: google$script$history$HistoryChangeEvent) => void
  ): void;

  declare var npm$namespace$google$script$host: {
    close: typeof google$script$host$close,
    setHeight: typeof google$script$host$setHeight,
    setWidth: typeof google$script$host$setWidth,
    origin: typeof google$script$host$origin,

    editor: typeof npm$namespace$google$script$host$editor
  };

  /**
   * Provides the host domain, so scripts can set their origin correctly.
   */
  declare var google$script$host$origin: string;

  /**
   * Closes the current dialog or sidebar.
   */
  declare function google$script$host$close(): void;

  declare var npm$namespace$google$script$host$editor: {
    focus: typeof google$script$host$editor$focus
  };

  /**
   * Switches browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.
   */
  declare function google$script$host$editor$focus(): void;

  /**
   * Sets the height of the current dialog.
   * @param height the new height, in pixels
   */
  declare function google$script$host$setHeight(height: number): void;

  /**
   * Sets the width of the current dialog.
   * @param width the new width, in pixels
   */
  declare function google$script$host$setWidth(width: number): void;

  declare var google$script$run: script$Runner;

  declare interface google$script$Runner {
    /**
     * Executes the server-side Apps Script function with the corresponding name.
     */
    [functionName: string]: (...args: any[]) => void;

    /**
     * Sets a callback function to run if the server-side function throws an exception.
     * Without a failure handler, failures are logged to the JavaScript console.
     * To override this, call withFailureHandler(null) or supply a failure handler that does nothing.
     * @param handler a client-side callback function to run if the server-side function throws an exception;
     * the Error object is passed to the function as the first argument, and the user object (if any) is passed as a second argument
     */
    withFailureHandler(
      handler: (error: Error, object?: any) => void
    ): google$script$Runner;

    /**
     * Sets a callback function to run if the server-side function returns successfully.
     * @param handler a client-side callback function to run if the server-side function returns successfully;
     * the server's return value is passed to the function as the first argument, and the user object (if any) is passed as a second argument
     */
    withSuccessHandler(
      handler: (value?: any, object?: any) => void
    ): google$script$Runner;

    /**
     * Sets an object to pass as a second parameter to the success and failure handlers.
     * @param object an object to pass as a second parameter to the success and failure handlers;
     * because user objects are not sent to the server, they are not subject to the restrictions on parameters and return values for server calls.
     * User objects cannot, however, be objects constructed with the new operator
     */
    withUserObject(object: any): google$script$Runner;
  }
}
