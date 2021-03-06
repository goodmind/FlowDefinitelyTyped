declare module "bardjs" {
  declare var npm$namespace$bard: {
    $httpBackend: typeof bard$$httpBackend,
    $q: typeof bard$$q,
    addGlobals: typeof bard$addGlobals,
    appModule: typeof bard$appModule,
    assertFail: typeof bard$assertFail,
    asyncModule: typeof bard$asyncModule,
    debugging: typeof bard$debugging,
    fakeLogger: typeof bard$fakeLogger,
    fakeRouteHelperProvider: typeof bard$fakeRouteHelperProvider,
    fakeRouteProvider: typeof bard$fakeRouteProvider,
    fakeStateProvider: typeof bard$fakeStateProvider,
    fakeToastr: typeof bard$fakeToastr,
    inject: typeof bard$inject,
    log: typeof bard$log,
    mochaRunnerListener: typeof bard$mochaRunnerListener,
    mockService: typeof bard$mockService,
    replaceAccentChars: typeof bard$replaceAccentChars,
    verifyNoOutstandingHttpRequests: typeof bard$verifyNoOutstandingHttpRequests,
    wrapWithDone: typeof bard$wrapWithDone
  };

  /**
   * Replaces the ngMock'ed $httpBackend with the real one from ng thus
   * restoring the ability to issue AJAX calls to the backend with $http.
   *
   * Note that $q remains ngMocked so you must flush $http calls ($rootScope.$digest).
   * Use $rootScope.$apply() for this purpose.
   *
   * Could restore $q with $qReal in which case don't need to flush.
   */
  declare function bard$$httpBackend(
    $provide: angular.autoIProvideService
  ): any;

  /**
   * Replaces the ngMock'ed $q with the real one from ng thus
   * obviating the need to flush $http and $q queues
   * at the expense of ability to control $q timing.
   */
  declare function bard$$q($provide: angular.autoIProvideService): any;

  /**
   * Add names of globals to list of OK globals for this mocha spec
   * NB: Call this method ONLY if you're using mocha!
   * NB: Turn off browser-sync else mocha detects the browser-sync globals
   * like ` ___browserSync___`
   */
  declare function bard$addGlobals(...globals: any[]): void;

  /**
   * Prepare ngMocked application feature module
   * along with faked toastr, routehelper,
   * and faked router services.
   * Especially useful for controller testing
   * Use it as you would the ngMocks#module method
   *
   * DO NOT USE IF YOU NEED THE REAL ROUTER SERVICES!
   * Fall back to `angular.mock.module(...)` or just `module(...)`
   */
  declare function bard$appModule(
    ...fns: (string | Function | Object)[]
  ): () => void;

  /**
   * Assert a failure in mocha, without condition
   */
  declare function bard$assertFail(message: string): Chai.AssertionError;

  /**
   * Prepare ngMocked module definition that makes real $http and $q calls
   * Also adds fakeLogger to the end of the definition
   * Use it as you would the ngMocks#module method
   */
  declare function bard$asyncModule(
    ...fns: (string | Function | Object)[]
  ): () => void;

  /**
   * Get or set bard debugging flag
   */
  declare function bard$debugging(newFlag?: any): boolean;

  /**
   * Registers a fake logger service that you can spy on
   */
  declare function bard$fakeLogger($provide: angular.autoIProvideService): void;

  /**
   * Registers a fake route helper provider service that you can spy on
   */
  declare function bard$fakeRouteHelperProvider(
    $provide: angular.autoIProvideService
  ): void;

  /**
   * Stub out the $routeProvider so we avoid
   * all routing calls, including the default route
   * which runs on every test otherwise.
   * Make sure this goes before the inject in the spec.
   */
  declare function bard$fakeRouteProvider(
    $provide: angular.autoIProvideService
  ): void;

  /**
   * Stub out the $stateProvider so we avoid
   * all routing calls, including the default state
   * which runs on every test otherwise.
   * Make sure this goes before the inject in the spec.
   */
  declare function bard$fakeStateProvider(
    $provide: angular.autoIProvideService
  ): void;

  /**
   * Registers a fake toastr service that you can spy on
   */
  declare function bard$fakeToastr($provide: angular.autoIProvideService): void;

  /**
   * Inject selected services into the windows object during test
   * then remove them when test ends with an `afterEach`.
   *
   * spares us the repetition of creating common service vars and injecting them
   *
   * Option: the first argument may be the mocha spec context object (`this`)
   *          It MUST be `this` if you what to check for mocha global leaks.
   *          Do NOT supply `this` as the first arg if you're not running mocha specs.
   *
   * remaining inject arguments may take one of 3 forms :
   *
   *     function    - This fn will be passed to ngMocks.inject.
   *                   Annotations extracted after inject does its thing.
   *     [strings]   - same string array you'd use to set fn.$inject
   *     (...string) - string arguments turned into a string array
   */
  declare function bard$inject(
    context?: Function | Mocha.IHookCallbackContext,
    ...args: string[]
  ): void;

  /**
   * Write to console if bard debugging flag is on
   */
  declare function bard$log(message: any): void;

  /**
   * Listen to mocha test runner events
   * Usage in browser:
   *     var runner = mocha.run();
   *     bard.mochaRunnerListener(runner);
   */
  declare function bard$mochaRunnerListener(runner: Mocha.IRunner): void;

  /**
   * Mocks out a service with sinon stubbed functions
   * that return the values specified in the config
   *
   * If the config value is `undefined`,
   * stub the service method with a dummy that doesn't return a value
   *
   * If the config value is a function, set service property with it
   *
   * If a service member is a property, not a function,
   * set it with the config value
   * If a service member name is not a key in config,
   * follow the same logic as above to set its members
   * using the config._default value (which is `undefined` if omitted)
   *
   * If there is a config entry that is NOT a member of the service
   * add mocked function to the service using the config value
   */
  declare function bard$mockService(service: any, config: any): any;

  /**
   * Replaces the accented characters of many European languages w/ unaccented chars
   * Use it in JavaScript string sorts where such characters may be encountered
   * Matches the default string comparers of most databases.
   * Ex: replaceAccentChars(a.Name) < replaceAccentChars(b.Name)
   * instead of:            a.Name  <                    b.Name
   */
  declare function bard$replaceAccentChars(text: string): string;

  /**
   * Assert that there are no outstanding HTTP requests after test is complete
   * For use with ngMocks; doesn't work for async server integration tests
   */
  declare function bard$verifyNoOutstandingHttpRequests(): void;

  /**
   * Returns a function that execute a callback function
   * (typically a fn making asserts) within a try/catch
   * The try/catch then calls the ambient "done" function
   * in the appropriate way for both success and failure
   */
  declare function bard$wrapWithDone(
    callback: Function,
    done: Function
  ): Function;
}
