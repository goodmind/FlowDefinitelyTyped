declare module "protractor-http-mock" {
  import typeof * as webdriver from "selenium-webdriver";

  declare interface mock$ProtractorHttpMock {
    /**
     * Instantiate mock module. This must be done before the browser connects.
     * @param mocks An array of mock modules to load into the application.
     * @param plugins An array of Plugin objects.
     * @param skipDefaults Set true to skip loading of default mocks.
     */
    <TResponse, TPayload>(
      mocks?: Array<requests$requests$AllRequests<TResponse, TPayload>>,
      plugins?: Array<mock$Plugin>,
      skipDefaults?: boolean
    ): mock$ProtractorHttpMock;

    /**
     * Instantiate mock module. This must be done before the browser connects.
     * @param mocks An array of mock modules to load into the application.
     * @param plugins An array of NPM modules as strings.
     * @param skipDefaults Set true to skip loading of default mocks.
     */
    <TResponse, TPayload>(
      mocks?: Array<requests$requests$AllRequests<TResponse, TPayload>>,
      plugins?: Array<string>,
      skipDefaults?: boolean
    ): mock$ProtractorHttpMock;

    /**
     * Instantiate mock modules from files. This must be done before the browser connects.
     * @param mocks An array of mock module names relative to the rootDirectory configuration.
     * @param plugins An array of Plugin objects.
     * @param skipDefaults Set true to skip loading of default mocks.
     */
    (
      mocks: Array<string>,
      plugins?: Array<mock$Plugin>,
      skipDefaults?: boolean
    ): mock$ProtractorHttpMock;

    /**
     * Instantiate mock modules from files. This must be done before the browser connects.
     * @param mocks An array of mock module names relative to the rootDirectory configuration.
     * @param plugins An array of NPM modules as strings.
     * @param skipDefaults Set true to skip loading of default mocks.
     */
    (
      mocks: Array<string>,
      plugins?: Array<string>,
      skipDefaults?: boolean
    ): mock$ProtractorHttpMock;

    /**
     * Clean up.
     * Typically done in the afterEach call to ensure the teardown
     * is executed regardless of what happens in the test execution.
     */
    teardown(): void;

    /**
     * Returns a promise that will be resolved with an array of
     * all matched HTTP requests.
     */
    requestsMade(): webdriver.promise.Promise<Array<mock$ReceivedRequest>>;

    /**
     * Returns a promise that will be resolved with a true boolean
     * when all matched HTTP requests are cleared.
     */
    clearRequests(): webdriver.promise.Promise<boolean>;

    /**
     * Module configuration to setup
     */
    config: {
      /**
       * Mocks directory where mock files are located.
       * Default: process.cwd()
       */
      rootDirectory?: string,

      /**
       * Path to protractor configuration file.
       * Default: protractor.conf
       */
      protractorConfig?: string
    };

    /**
     * Add mocks during test execution.
     * Returns a promise that will be resolved with a true boolean
     * when mocks are added.
     * @param mocks An array of mock modules to load into the application.
     */
    add<T1, T2>(
      mocks: Array<requests$requests$AllRequests<T1, T2>>
    ): webdriver.promise.Promise<boolean>;

    /**
     * Remove mocks during test execution.
     * Returns a promise that will be resolved with a true boolean
     * when the supplied mocks are removed.
     * @param mocks An array of mock modules to remove from the application.
     */
    remove<T1, T2>(
      mocks: Array<requests$requests$AllRequests<T1, T2>>
    ): webdriver.promise.Promise<boolean>;
  }

  /**
   * Matched request.
   */
  declare interface mock$ReceivedRequest {
    url: string;
    method: requests$requests$Method;
  }

  /**
   * Plugin for custom matching logic.
   */
  declare interface mock$Plugin {
    /**
     * Match function.
     * Return a truthy value to indicate successfull match.
     * @param mockRequest The mock to compare request with.
     * @param requestConfig The request object to compare mock with.
     */
    match<T1, T2>(
      mockRequest: requests$requests$AllRequests<T1, T2>,
      requestConfig: requests$requests$AllRequests<T1, T2>
    ): boolean;

    /**
     * Match function.
     * Return a truthy value to indicate successfull match.
     * @param mockRequest The mock to compare request with.
     * @param requestConfig The request object to compare mock with.
     */
    match<T1, T2>(
      mockRequest: requests$requests$AllRequests<T1, T2>,
      requestConfig: requests$requests$AllRequests<T1, T2>
    ): boolean;
  }

  /**
   * Request methods type
   */
  declare type requests$Method =
    | "GET"
    | "POST"
    | "DELETE"
    | "PUT"
    | "HEAD"
    | "PATCH"
    | "JSONP";

  /**
   * All available request types.
   */
  declare type requests$AllRequests<T1, T2> =
    | requests$Get<T1>
    | requests$PostData<T1, T2>
    | requests$Post<T1>
    | requests$Head<T1>
    | requests$Delete<T1>
    | requests$Put<T1>
    | requests$Patch<T1>
    | requests$Jsonp<T1>;

  /**
   * GET request mock.
   */
  declare interface requests$Get<TResponse> {
    request: {
      method: requests$Method,
      path: string,
      regex?: boolean,
      params?: Object,
      queryString?: Object,
      headers?: Object,
      interceptedRequest?: boolean,
      interceptedAnonymousRequest?: boolean
    };
    response: {
      status?: number,
      data: TResponse
    };
  }

  /**
   * POST request mock with payload.
   */
  declare interface requests$PostData<TResponse, TPayload> {
    request: {
      method: requests$Method,
      path: string,
      regex?: boolean,
      data: TPayload
    };
    response: {
      status?: number,
      data: TResponse
    };
  }

  /**
   * POST request mock.
   */
  declare interface requests$Post<TResponse> {
    request: {
      method: requests$Method,
      path: string,
      regex?: boolean
    };
    response: {
      status?: number,
      data: TResponse
    };
  }

  /**
   * HEAD request mock.
   */
  declare interface requests$Head<TResponse> {
    request: {
      method: requests$Method,
      path: string,
      regex?: boolean
    };
    response: {
      status?: number,
      data: TResponse
    };
  }

  /**
   * HTTP Delete request mock.
   */
  declare interface requests$Delete<TResponse> {
    request: {
      method: requests$Method,
      path: string,
      regex?: boolean
    };
    response: {
      status?: number,
      data: TResponse
    };
  }

  /**
   * PUT request mock.
   */
  declare interface requests$Put<TResponse> {
    request: {
      method: requests$Method,
      path: string,
      regex?: boolean
    };
    response: {
      status?: number,
      data: TResponse
    };
  }

  /**
   * PATCH request mock.
   */
  declare interface requests$Patch<TResponse> {
    request: {
      method: requests$Method,
      path: string,
      regex?: boolean
    };
    response: {
      status?: number,
      data: TResponse
    };
  }

  /**
   * JSONP request mock.
   */
  declare interface requests$Jsonp<TResponse> {
    request: {
      method: requests$Method,
      path: string,
      regex?: boolean
    };
    response: {
      status?: number,
      data: TResponse
    };
  }
  declare var mock: mock$mock$ProtractorHttpMock;
  declare module.exports: typeof mock;
}
