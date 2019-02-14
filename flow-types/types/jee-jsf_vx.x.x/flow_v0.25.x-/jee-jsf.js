declare module "jee-jsf" {
  declare var npm$namespace$jsf: {
    ajax: typeof npm$namespace$jsf$ajax
  };

  declare var npm$namespace$jsf$ajax: {
    addOnEvent: typeof jsf$ajax$addOnEvent,
    addOnError: typeof jsf$ajax$addOnError,
    request: typeof jsf$ajax$request,
    response: typeof jsf$ajax$response
  };
  declare interface jsf$ajax$RequestData {
    status: string;
    description: string;
  }

  declare interface jsf$ajax$RequestOptions {
    /**
     * space seperated list of client identifiers
     */
    execute?: String;

    /**
     * space seperated list of client identifiers
     */
    render?: String;

    /**
     * function to callback for event
     * @param callback the callback function
     */
    onevent?: (callback: (data: jsf$ajax$RequestData) => void) => void;

    /**
     * function to callback for error
     * @param callback the callback function
     */
    onerror?: (callback: (data: jsf$ajax$RequestData) => void) => void;

    /**
     * object containing parameters to include in the request
     */
    params?: any;

    /**
     * client behavior event name from the request parameter
     */
    "javax.faces.behavior.event"?: any;
  }

  /**
   * Register a callback for event handling.
   * @param callback a reference to a function to call on an event
   */
  declare function jsf$ajax$addOnEvent(
    callback: (data: jsf$ajax$RequestData) => void
  ): void;

  /**
   * Register a callback for error handling.
   * @param callback a reference to a function to call on an error
   */
  declare function jsf$ajax$addOnError(
    callback: (data: jsf$ajax$RequestData) => void
  ): void;

  /**
   * Send an asynchronous Ajax request to the server.
   * @param source The DOM element that triggered this Ajax request, or an id string of the element to use as the triggering element.
   * @param event The DOM event that triggered this Ajax request. The event argument is optional.
   * @param options The set of available options that can be sent as request parameters to control client and/or server side request processing.
   */
  declare function jsf$ajax$request(
    source: any,
    event?: String,
    options?: jsf$ajax$RequestOptions
  ): void;

  /**
   * Receive an Ajax response from the server.
   * @param request The XMLHttpRequest instance that contains the status code and response message from the server.
   * @param context An object containing the request context, including the following properties: the source element, per call onerror callback function, and per call onevent callback function.
   * @throws EmptyResponse error if request contains no data
   */
  declare function jsf$ajax$response(request: any, context: any): void;
}
