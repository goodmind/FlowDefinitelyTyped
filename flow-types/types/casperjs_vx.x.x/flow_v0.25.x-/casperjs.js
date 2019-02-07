declare module "casperjs" {
  declare export function create(options?: CasperOptions): Casper;

  declare export function selectXPath(
    expression: string
  ): { [key: string]: any };

  declare export class Casper {
    constructor(options: CasperOptions): this;
    test: Tester;
    options: CasperOptions;
    __utils__: ClientUtils;
    back(): Casper;
    base64encode(url: string, method?: string, data?: any): string;
    bypass(nb: number): Casper;
    click(selector: string, X?: number | string, Y?: number | string): boolean;
    clickLabel(label: string, tag?: string): boolean;
    capture(
      targetFilePath: string,
      clipRect?: ClipRect,
      imgOptions?: ImgOptions
    ): Casper;
    captureBase64(
      format: string,
      area?: string | ClipRect | CasperSelector
    ): string;
    captureSelector(
      targetFile: string,
      selector: string,
      imgOptions?: ImgOptions
    ): Casper;
    clear(): Casper;
    clearCache(): Casper;
    clearMemoryCache(): Casper;
    debugHTML(selector?: string, outer?: boolean): Casper;
    debugPage(): Casper;
    die(message: string, status?: number): Casper;
    download(url: string, target: string, method?: string, data?: any): Casper;
    each<T>(array: T[], fn: (item: T, index: number) => void): Casper;
    eachThen(array: any[], then?: FunctionThen): Casper;
    echo(message: string, style?: string): Casper;
    evaluate<T>(fn: (...args: any[]) => T, ...args: any[]): T;
    evaluateOrDie(fn: () => any, message?: string, status?: number): Casper;
    exit(status?: number): Casper;
    exists(selector: string): boolean;
    fetchText(selector: string): string;
    forward(): Casper;
    log(message: string, level?: string, space?: string): Casper;
    fill(selector: string, values: any, submit?: boolean): void;
    fillSelectors(selector: string, values: any, submit?: boolean): void;
    fillXPath(selector: string, values: any, submit?: boolean): void;
    getCurrentUrl(): string;
    getElementAttribute(selector: string, attribute: string): string;
    getElementsAttribute(selector: string, attribute: string): string;
    getElementBounds(selector: string, page?: boolean): ElementBounds | null;
    getElementsBounds(selector: string): ElementBounds[];
    getElementInfo(selector: string): ElementInfo;
    getElementsInfo(selector: string): ElementInfo;
    getFormValues(selector: string): any;
    getGlobal(name: string): any;
    getHTML(selector?: string, outer?: boolean): string;
    getPageContent(): string;
    getTitle(): string;
    mouseEvent(
      type: string,
      selector: string,
      X?: number | string,
      Y?: number | string
    ): boolean;
    newPage(): any;
    open(location: string, settings: OpenSettings): Casper;
    reload(then?: FunctionThen): Casper;
    repeat(times: number, then: FunctionThen): Casper;
    resourceExists(test: string | Function | RegExp): boolean;
    run(onComplete?: Function, time?: number): Casper;
    scrollTo(x: number, y: number): Casper;
    scrollToBottom(): Casper;
    sendKeys(selector: string, keys: string, options?: KeyOptions): Casper;
    setHttpAuth(username: string, password: string): Casper;
    setMaxListeners(maxListeners: number): Casper;
    start(url?: string, then?: FunctionThen): Casper;
    status(asString?: false): number;
    status(asString: true): string;
    switchToFrame(frameInfo: string | number): Casper;
    switchToMainFrame(): Casper;
    switchToParentFrame(): Casper;
    then(fn: () => void): Casper;
    thenBypass(nb: number): Casper;
    thenBypassIf(condition: any, nb: number): Casper;
    thenBypassUnless(condition: any, nb: number): Casper;
    thenClick(selector: string, then?: FunctionThen): Casper;
    thenEvaluate(fn: () => any, ...args: any[]): Casper;
    thenOpen(location: string, then?: (response: HttpResponse) => void): Casper;
    thenOpen(
      location: string,
      options?: OpenSettings,
      then?: (response: HttpResponse) => void
    ): Casper;
    thenOpenAndEvaluate(
      location: string,
      then?: FunctionThen,
      ...args: any[]
    ): Casper;
    toString(): string;
    unwait(): Casper;
    userAgent(agent: string): Casper;
    viewport(width: number, height: number, then?: FunctionThen): Casper;
    visible(selector: string): boolean;
    wait(timeout: number, then?: FunctionThen): Casper;
    waitFor(
      testFx: Function,
      then?: FunctionThen,
      onTimeout?: FunctionOnTimeout,
      timeout?: number,
      details?: any
    ): Casper;
    waitForAlert(
      then: FunctionThen,
      onTimeout?: FunctionOnTimeout,
      timeout?: number
    ): Casper;
    waitForExec(
      command: string | null,
      parameter: string[],
      then?: FunctionThen,
      onTimeout?: FunctionOnTimeout,
      timeout?: number
    ): Casper;
    waitForPopup(
      urlPattern: RegExp | string | number | FindByUrlNameTitle,
      then?: FunctionThen,
      onTimeout?: Function,
      timeout?: number
    ): Casper;
    waitForResource(
      testFx:
        | RegExp
        | string
        | ((resource: {
            url: string
          }) => boolean),
      then?: FunctionThen,
      onTimeout?: Function,
      timeout?: number
    ): Casper;
    waitForUrl(
      url: RegExp | string,
      then?: FunctionThen,
      onTimeout?: FunctionOnTimeout,
      timeout?: number
    ): Casper;
    waitForSelector(
      selector: string,
      then?: FunctionThen,
      onTimeout?: FunctionOnTimeout,
      timeout?: number
    ): Casper;
    waitWhileSelector(
      selector: string,
      then?: FunctionThen,
      onTimeout?: FunctionOnTimeout,
      timeout?: number
    ): Casper;
    waitForSelectorTextChange(
      selectors: string,
      then?: FunctionThen,
      onTimeout?: FunctionOnTimeout,
      timeout?: number
    ): Casper;
    waitForText(
      pattern: RegExp | string,
      then?: FunctionThen,
      onTimeout?: FunctionOnTimeout,
      timeout?: number
    ): Casper;
    waitUntilVisible(
      selector: string,
      then?: FunctionThen,
      onTimeout?: FunctionOnTimeout,
      timeout?: number
    ): Casper;
    waitWhileVisible(
      selector: string,
      then?: FunctionThen,
      onTimeout?: FunctionOnTimeout,
      timeout?: number
    ): Casper;
    warn(message: string): Casper;
    withFrame(frameInfo: string | number, then: FunctionThen): Casper;
    withPopup(
      popupInfo: RegExp | string | number | FindByUrlNameTitle,
      step: FunctionThen
    ): Casper;
    withSelectorScope(selector: string, then: FunctionThen): Casper;
    zoom(factor: number): Casper;
  }
  declare export type FunctionThen = (response: HttpResponse) => void;
  declare export type FunctionOnTimeout = (
    timeout: number,
    details: any
  ) => void;
  declare export interface ImgOptions {
    format?: string;
    quality?: number;
  }
  declare export interface FindByUrlNameTitle {
    url?: string;
    title?: string;
    windowName?: string;
  }
  declare export interface Header {
    name: string;
    value: string;
  }
  declare export interface CasperSelector {
    type?: "xpath" | "css";
    path: string;
  }
  declare export interface KeyOptions {
    reset?: boolean;
    keepFocus?: boolean;
    modifiers?: string;
  }
  declare export interface HttpResponse {
    contentType: string;
    headers: Header[];
    id: number;
    redirectURL: string | null;
    stage: string;
    status: number;
    statusText: string;
    time: string;
    url: string;
    data: any;
  }
  declare export interface OpenSettings {
    method: string;
    data: any;
    headers: any;
  }
  declare export interface ElementBounds {
    top: number;
    left: number;
    width: number;
    height: number;
  }
  declare export interface ElementInfo {
    nodeName: string;
    attributes: any;
    tag: string;
    html: string;
    text: string;
    x: number;
    y: number;
    width: number;
    height: number;
    visible: boolean;
  }
  declare export interface CasperOptions {
    clientScripts?: any[];
    exitOnError?: boolean;
    httpStatusHandlers?: any;
    logLevel?: string;
    onAlert?: Function;
    onDie?: Function;
    onError?: Function;
    onLoadError?: Function;
    onPageInitialized?: Function;
    onResourceReceived?: Function;
    onResourceRequested?: Function;
    onStepComplete?: Function;
    onStepTimeout?: Function;
    onTimeout?: Function;
    onWaitTimeout?: Function;
    page?: WebPage;
    pageSettings?: any;
    remoteScripts?: any[];
    safeLogs?: boolean;
    silentErrors?: boolean;
    stepTimeout?: number;
    timeout?: number;
    verbose?: boolean;
    viewportSize?: any;
    retryTimeout?: number;
    waitTimeout?: number;
  }
  declare export interface ClientUtils {
    echo(message: string): void;
    encode(contents: string): void;
    exists(selector: string): void;
    findAll(selector: string): void;
    findOne(selector: string): void;
    getBase64(url: string, method?: string, data?: any): void;
    getBinary(url: string, method?: string, data?: any): void;
    getDocumentHeight(): void;
    getElementBounds(selector: string): void;
    getElementsBounds(selector: string): void;
    getElementByXPath(expression: string, scope?: HTMLElement): void;
    getElementsByXPath(expression: string, scope?: HTMLElement): void;
    getFieldValue(inputName: string): void;
    getFormValues(selector: string): void;
    mouseEvent(type: string, selector: string): void;
    removeElementsByXPath(expression: string): void;
    sendAJAX(url: string, method?: string, data?: any, async?: boolean): void;
    visible(selector: string): void;
  }
  declare export interface Colorizer {
    colorize(text: string, styleName: string): void;
    format(text: string, style: any): void;
  }
  declare export interface Tester {
    assert(condition: boolean, message?: string): any;
    assertDoesntExist(selector: string, message?: string): any;
    assertElementCount(
      selctor: string,
      expected: number,
      message?: string
    ): any;
    assertEquals(testValue: any, expected: any, message?: string): any;
    assertEval(fn: Function, message: string, args: any): any;
    assertEvalEquals(
      fn: Function,
      expected: any,
      message?: string,
      args?: any
    ): any;
    assertExists(selector: string, message?: string): any;
    assertFalsy(subject: any, message?: string): any;
    assertField(inputName: string, expected: string, message?: string): any;
    assertFieldName(
      inputName: string,
      expected: string,
      message?: string,
      options?: any
    ): any;
    assertFieldCSS(
      cssSelector: string,
      expected: string,
      message?: string
    ): any;
    assertFieldXPath(
      xpathSelector: string,
      expected: string,
      message?: string
    ): any;
    assertHttpStatus(status: number, message?: string): any;
    assertMatch(subject: any, pattern: RegExp, message?: string): any;
    assertNot(subject: any, message?: string): any;
    assertNotEquals(testValue: any, expected: any, message?: string): any;
    assertNotVisible(selector: string, message?: string): any;
    assertRaises(fn: Function, args: any[], message?: string): any;
    assertSelectorDoesntHaveText(
      selector: string,
      text: string,
      message?: string
    ): any;
    assertSelectorExists(selector: string, message?: string): any;
    assertSelectorHasText(
      selector: string,
      text: string,
      message?: string
    ): any;
    assertResourceExists(testFx: Function, message?: string): any;
    assertTextExists(expected: string, message?: string): any;
    assertTextDoesntExist(unexpected: string, message: string): any;
    assertTitle(expected: string, message?: string): any;
    assertTitleMatch(pattern: RegExp, message?: string): any;
    assertTruthy(subject: any, message?: string): any;
    assertType(input: any, type: string, message?: string): any;
    assertInstanceOf(input: any, ctor: Function, message?: string): any;
    assertUrlMatch(pattern: RegExp | string, message?: string): any;
    assertVisible(selector: string, message?: string): any;
    begin(description: string, planned: number, suite: Function): any;
    begin(description: string, suite: Function): any;
    begin(
      description: string,
      planned: number,
      config: { [key: string]: any }
    ): any;
    begin(description: string, config: { [key: string]: any }): any;
    colorize(message: string, style: string): any;
    comment(message: string): any;
    done(expected?: number): any;
    error(message: string): any;
    fail(message: string): any;
    formatMessage(message: string, style: string): any;
    getFailures(): Cases;
    getPasses(): Cases;
    info(message: string): any;
    pass(message: string): any;
    renderResults(exit: boolean, status: number, save: string): any;
    setup(fn: Function): any;
    skip(nb: number, message: string): any;
    tearDown(fn: Function): any;
  }
  declare export interface Cases {
    length: number;
    cases: Case[];
  }
  declare export interface Case {
    success: boolean;
    type: string;
    standard: string;
    file: string;
    values: CaseValues;
  }
  declare export interface CaseValues {
    subject: boolean;
    expected: boolean;
  }
  declare export interface Utils {
    betterTypeOf(input: any): any;
    dump(value: any): any;
    fileExt(file: string): any;
    fillBlanks(text: string, pad: number): any;
    format(f: string, ...args: any[]): any;
    getPropertyPath(obj: any, path: string): any;
    inherits(ctor: any, superCtor: any): any;
    isArray(value: any): any;
    isCasperObject(value: any): any;
    isClipRect(value: any): any;
    isFalsy(subject: any): any;
    isFunction(value: any): any;
    isJsFile(file: string): any;
    isNull(value: any): any;
    isNumber(value: any): any;
    isObject(value: any): any;
    isRegExp(value: any): any;
    isString(value: any): any;
    isTruthy(subject: any): any;
    isType(what: any, type: string): any;
    isUndefined(value: any): any;
    isWebPage(what: any): any;
    mergeObjects(origin: any, add: any): any;
    node(name: string, attributes: any): any;
    serialize(value: any): any;
    unique(array: any[]): any;
  }
}
