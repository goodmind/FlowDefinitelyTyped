declare module "mathjax" {
  declare var npm$namespace$MathJax: {
    Hub: typeof MathJax$Hub,
    Ajax: typeof MathJax$Ajax,
    Message: typeof MathJax$Message,
    HTML: typeof MathJax$HTML,
    Callback: typeof MathJax$Callback,
    Localization: typeof MathJax$Localization,
    InputJax: typeof MathJax$InputJax,
    OutputJax: typeof MathJax$OutputJax
  };
  declare export var MathJax$Hub: MathJax$Hub;

  declare export var MathJax$Ajax: MathJax$Ajax;

  declare export var MathJax$Message: MathJax$Message;

  declare export var MathJax$HTML: MathJax$HTML;

  declare export var MathJax$Callback: MathJax$Callback;

  declare export var MathJax$Localization: MathJax$Localization;

  declare export var MathJax$InputJax: MathJax$InputJax;

  declare export var MathJax$OutputJax: MathJax$OutputJax;

  declare export interface MathJax$Callback {
    (fn: Function): MathJax$CallbackObject;
    (fns: Function[]): MathJax$CallbackObject;
    (objs: any[]): MathJax$CallbackObject;
    (obj: any): MathJax$CallbackObject;
    (code: string): MathJax$CallbackObject;
    Delay(time: number, callback: any): MathJax$CallbackObject;
    Queue(...args: any[]): MathJax$Queue;
    Signal(name: string): MathJax$Signal;
    ExecuteHooks(
      hooks: any[],
      data: any[],
      reset: boolean
    ): MathJax$CallbackObject;
    Hooks(reset: boolean): MathJax$Hooks;
  }

  declare export interface MathJax$Hooks {
    Add(hook: any, priority: number): MathJax$CallbackObject;
    Remove(hook: MathJax$CallbackObject): void;
    Execute(): MathJax$CallbackObject;
  }

  declare export interface MathJax$Queue {
    pending: number;
    running: number;
    queue: any[];
    Push(specs: any[]): MathJax$CallbackObject;
    Process(): void;
    Suspend(): void;
    Resume(): void;
    wait(callback: Function): Function;
    call(): void;
  }

  declare export interface MathJax$Signal {
    name: string;
    posted: any[];
    listeners: MathJax$CallbackObject[];
    Post(message: string): MathJax$CallbackObject;
    Post(
      message: string,
      callback: MathJax$CallbackObject
    ): MathJax$CallbackObject;
    Clear(): MathJax$CallbackObject;
    Clear(callback: MathJax$CallbackObject): MathJax$CallbackObject;
    Interest(callback: MathJax$CallbackObject): MathJax$CallbackObject;
    Interest(
      callback: MathJax$CallbackObject,
      ignorePast: boolean
    ): MathJax$CallbackObject;
    NoInterest(callback: MathJax$CallbackObject): void;
    MessageHook(
      message: string,
      callback: MathJax$CallbackObject
    ): MathJax$CallbackObject;
    ExecuteHook(message: string): void;
  }

  declare export interface MathJax$CallbackObject {
    hook: number;
    data: any[];
    object: any;
    called: boolean;
    autoReset: boolean;
    reset(): void;
  }

  declare export interface MathJax$Hub {
    config?: MathJax$Config;
    processSectionDelay?: number;
    processUpdateTime?: number;
    processUpdateDelay?: number;
    signal?: MathJax$Signal;
    queue?: any;
    Browser?: MathJax$BrowserInfo;
    inputJax?: any;
    outputJax?: any;
    Register?: MathJax$Register;
    Config(config: MathJax$Config): void;
    Configured(): void;
    Queue(callBack: any): any;
    Typeset(element: any, callBack: any): any;
    PreProcess(element: any, callBack: any): any;
    Process(element: any, callBack: any): any;
    Update(element: any, callBack: any): any;
    Reprocess(element: any, callBack: any): any;
    Rerender(element: any, callBack: any): any;
    getAllJax(element: any): any[];
    getJaxByType(type: string, element: any): void;
    getJaxByInputType(type: string, element: any): void;
    getJaxFor(element: any): any;
    isJax(element: any): number;
    setRenderer(renderer: string, type: string): void;
    Insert(dst: any, src: any): any;
    formatError(script: any, error: any): void;
  }

  declare export interface MathJax$Register {
    PreProcessor(callBack: any): void;
    MessageHook(type: string, callBack: any): void;
    StartupHook(type: string, callBack: any): void;
    LoadHook(file: string, callBack: Function): void;
  }

  declare export interface MathJax$BrowserInfo {
    version: string;
    isMac?: boolean;
    isPC?: boolean;
    isMobile?: boolean;
    isFirefox?: boolean;
    isSafari?: boolean;
    isChrome?: boolean;
    isOpera?: boolean;
    isMSIE?: boolean;
    isKonqueror?: boolean;
    versionAtLeast(version: string): void;
    Select(choices: any): void;
  }

  declare export interface MathJax$Ajax {
    timeout?: number;
    STATUS: MathJax$STATUS;
    loaded: any;
    loading: boolean;
    loadHooks: any;
    Require(file: string, callBack: any): any;
    Load(file: string, callBack: any): any;
    loadComplete(file: string): void;
    loadTimeout(file: string): void;
    loadError(file: string): void;
    LoadHook(file: string, callBack: any): any;
    Preloading(...args: any[]): void;
    Styles(styles: any, callback: any): any;
    fileURL(file: string): string;
  }

  declare export interface MathJax$STATUS {
    OK: string;
    ERROR: string;
  }

  declare export interface MathJax$Message {
    Set(message: string, n: number, delay: number): number;
    Clear(n: number, delay: number): void;
    Remove(): void;
    File(file: string): number;
    filterText(text: string, n: number): string;
    Log(): string;
  }

  declare export interface MathJax$HTML {
    Cookie?: MathJax$Cookie;
    Element(type: string, attributes: any, contents: any): any;
    addElement(parent: any, type: string, attributes: any, content: any): any;
    TextNode(text: string): any;
    addText(parent: any, text: string): any;
    setScript(script: string, text: string): void;
    getScript(script: string): string;
  }

  declare export interface MathJax$Cookie {
    prefix?: string;
    expires?: number;
    Set(name: string, data: any): void;
    Get(name: string): any;
    Get(name: string, obj: any): any;
  }

  declare export interface MathJax$MenuSettings {
    zoom?: string;
    CTRL?: boolean;
    ALT?: boolean;
    CMD?: boolean;
    Shift?: boolean;
    zscale?: string;
    context?: string;
    texHints?: boolean;
    mpContext?: boolean;
    mpMouse?: boolean;
  }

  declare export interface MathJax$ErrorSettings {
    message?: string[];
    style?: any;
  }

  declare export interface MathJax$Config {
    MathZoom?: MathJax$MathZoom;
    MathMenu?: MathJax$MathMenu;
    MathEvents?: MathJax$MathEvents;
    FontWarnings?: MathJax$FontWarnings;
    Safe?: MathJax$Safe;
    MatchWebFonts?: MathJax$MatchWebFonts;
    SVG?: MathJax$SVGOutputProcessor;
    MMLorHTML?: MathJax$MMLorHTMLConfiguration;
    NativeMML?: MathJax$NativeMMLOutputProcessor;
    "HTML-CSS"?: MathJax$HTMLCSSOutputProcessor;
    CommonHTML?: MathJax$CommonHTMLOutputProcessor;
    AsciiMath?: MathJax$AsciiMathInputProcessor;
    MathML?: MathJax$MathMLInputProcessor;
    TeX?: MathJax$TeXInputProcessor;
    jsMath2jax?: MathJax$JSMath2jaxPreprocessor;
    asciimath2jax?: MathJax$Asciimath2jaxPreprocessor;
    mml2jax?: MathJax$MML2jaxPreprocessor;
    tex2jax?: MathJax$TEX2jaxPreprocessor;
    jax?: string[];
    extensions?: string[];
    config?: string[];
    styleSheets?: string[];
    styles?: any;
    preJax?: any;
    postJax?: any;
    preRemoveClass?: string;
    showProcessingMessages?: boolean;
    messageStyle?: string;
    displayAlign?: string;
    displayIndent?: string;
    delayStartupUntil?: string;
    skipStartupTypeset?: boolean;
    elements?: string[];
    positionToHash?: boolean;
    showMathMenu?: boolean;
    showMathMenuMSIE?: boolean;
    menuSettings?: MathJax$MenuSettings;
    errorSettings?: MathJax$ErrorSettings;
    "v1.0-compatible"?: boolean;
  }

  declare export interface MathJax$MathZoom {
    styles: any;
  }

  declare export interface MathJax$MathMenu {
    delay?: number;
    helpURL?: string;
    showRenderer?: boolean;
    showFontMenu?: boolean;
    showLocale?: boolean;
    showMathPlayer?: boolean;
    showContext?: boolean;
    semanticsAnnotations?: any;
    windowSettings?: any;
    styles?: any;
  }

  declare export interface MathJax$MathEvents {
    hover?: number;
    styles?: any;
  }

  declare export interface MathJax$FontWarnings {
    messageStyle?: any;
    Message?: MathJax$HTMLMessages;
    HTML?: MathJax$HTMLSnippets;
    removeAfter?: number;
    fadeoutSteps?: number;
    fadeoutTime?: number;
  }

  declare export interface MathJax$HTMLMessages {
    webFont?: any[];
    imageFonts?: any[];
    noFonts?: any[];
  }

  declare export interface MathJax$HTMLSnippets {
    closeBox?: string;
    webfonts?: string;
    fonts?: string;
    STIXfonts?: string;
    TeXfonts?: string;
  }

  declare export interface MathJax$Safe {
    allow?: MathJax$SafeAllow;
    sizeMin?: number;
    sizeMax?: number;
    safeProtocols?: MathJax$SafeProtocols;
    safeStyles?: MathJax$SafeStyles;
    safeRequire?: MathJax$SafeRequire;
  }

  declare export interface MathJax$SafeAllow {
    URLs?: string;
    classes?: string;
    cssIDs?: string;
    styles?: string;
    require?: string;
    fontsize?: string;
  }

  declare export interface MathJax$SafeProtocols {
    http?: boolean;
    https?: boolean;
    file?: boolean;
    javascript?: boolean;
  }

  declare export interface MathJax$SafeStyles {
    color?: boolean;
    backgroundColor?: boolean;
    border?: boolean;
    cursor?: boolean;
    margin?: boolean;
    padding?: boolean;
    textShadow?: boolean;
    fontFamily?: boolean;
    fontSize?: boolean;
    fontStyle?: boolean;
    fontWeight?: boolean;
    opacity?: boolean;
    outline?: boolean;
  }

  declare export interface MathJax$SafeRequire {
    action?: boolean;
    amscd?: boolean;
    amsmath?: boolean;
    amssymbols?: boolean;
    autobold?: boolean;
    "autoload-all"?: boolean;
    bbox?: boolean;
    begingroup?: boolean;
    boldsymbol?: boolean;
    cancel?: boolean;
    color?: boolean;
    enclose?: boolean;
    extpfeil?: boolean;
    HTML?: boolean;
    mathchoice?: boolean;
    mhchem?: boolean;
    newcommand?: boolean;
    noErrors?: boolean;
    noUndefined?: boolean;
    unicode?: boolean;
    verb?: boolean;
  }

  declare export interface MathJax$MatchWebFonts {
    matchFor?: MathJax$MatchFor;
    fontCheckDelay?: number;
    fontCheckTimeout?: number;
  }

  declare export interface MathJax$MatchFor {
    "HTML-CSS"?: boolean;
    NativeMML?: boolean;
    SVG?: boolean;
  }

  declare export interface MathJax$SVGOutputProcessor {
    scale?: number;
    minScaleAdjust?: number;
    font?: string;
    blacker?: number;
    undefinedFamily?: string;
    mtextFontInherit?: boolean;
    addMMLclasses?: boolean;
    useFontCache?: boolean;
    useGlobalCache?: boolean;
    EqnChunk?: number;
    EqnChunkFactor?: number;
    EqnChunkDelay?: number;
    matchFontHeight?: boolean;
    linebreaks?: MathJax$LineBreaks;
    styles?: any;
    tooltip?: MathJax$ToolTip;
  }

  declare export interface MathJax$LineBreaks {
    automatic?: boolean;
    width?: string;
  }

  declare export interface MathJax$ToolTip {
    delayPost: number;
    delayClear: number;
    offsetX: number;
    offsetY: number;
  }

  declare export interface MathJax$MMLorHTMLConfiguration {
    prefer?: MathJax$BrowserPreference;
  }

  declare export interface MathJax$BrowserPreference {
    MSIE?: string;
    Firefox?: string;
    Safari?: string;
    Chrome?: string;
    Opera?: string;
    other?: string;
  }

  declare export interface MathJax$NativeMMLOutputProcessor {
    scale?: number;
    minScaleAdjust?: number;
    matchFontHeight?: boolean;
    styles?: any;
  }

  declare export interface MathJax$HTMLCSSOutputProcessor {
    scale?: number;
    minScaleAdjust?: number;
    availableFonts?: string[];
    preferredFont?: string;
    webFont?: string;
    imageFont?: string;
    undefinedFamily?: string[];
    mtextFontInherit?: boolean;
    EqnChunk?: number;
    EqnChunkFactor?: number;
    EqnChunkDelay?: number;
    matchFontHeight?: boolean;
    linebreaks?: MathJax$LineBreaks;
    styles?: any;
    showMathMenu?: boolean;
    tooltip?: MathJax$ToolTip;
  }

  declare export interface MathJax$CommonHTMLOutputProcessor {
    scale?: number;
    minScaleAdjust?: number;
    mtextFontInherit?: boolean;
    linebreaks?: MathJax$LineBreaks;
  }

  declare export interface MathJax$AsciiMathInputProcessor {
    displaystyle?: boolean;
    decimal?: string;
  }

  declare export interface MathJax$MathMLInputProcessor {
    useMathMLspacing?: boolean;
  }

  declare export interface MathJax$TeXInputProcessor {
    TagSide?: string;
    TagIndent?: string;
    MultLineWidth?: string;
    equationNumbers?: MathJax$EquationNumbers;
    Macros?: any;
    MAXMACROS?: number;
    MAXBUFFER?: number;
    extensions?: string[];
  }

  declare export interface MathJax$EquationNumbers {
    autoNumber?: string;
    formatNumber?: (n: number) => string;
    formatTag?: (n: number) => string;
    formatID?: () => string;
    formatURL?: (id: string) => string;
    useLabelIds?: boolean;
  }

  declare export interface MathJax$JSMath2jaxPreprocessor {
    preview: any;
  }

  declare export interface MathJax$Asciimath2jaxPreprocessor {
    delimiters?: any;
    preview?: any;
    skipTags?: string[];
    ignoreClass?: string;
    processClass?: string;
  }

  declare export interface MathJax$MML2jaxPreprocessor {
    preview?: any;
  }

  declare export interface MathJax$TEX2jaxPreprocessor {
    inlineMath?: any;
    displayMath?: any;
    balanceBraces?: boolean;
    processEscapes?: boolean;
    processEnvironments?: boolean;
    preview?: any;
    skipTags?: string[];
    ignoreClass?: string;
    processClass?: string;
  }

  declare export interface MathJax$Localization {
    locale: string;
    directory: string;
    strings: any;
    _(id: number, message: string, ...args: any[]): void;
    setLocale(locale: string): void;
    addTranslation(locale: string, domain: string, def: any): void;
    setCSS(div: any): any;
    fontFamily(): string;
    fontDirection(): string;
    plural(value: any): number;
    number(value: number): string;
    loadDomain(domain: string): MathJax$CallbackObject;
    loadDomain(
      domain: string,
      callback: MathJax$CallbackObject
    ): MathJax$CallbackObject;
    Try(spec: any): void;
  }

  declare export interface MathJax$InputJax {
    id: string;
    version: string;
    directory: string;
    elementJax: string;
    Process(script: any, state: any): any;
    Translate(script: any, state: any): MathJax$ElementJax;
    Register(mimetype: string): void;
    needsUpdate(element: any): boolean;
  }

  declare export interface MathJax$OutputJax {
    id: string;
    version: string;
    directory: string;
    fontDir: string;
    imageDir: string;
    preProcess(state: any): void;
    preTranslate(state: any): void;
    Translate(script: any, state: any): MathJax$ElementJax;
    postTranslate(state: any): void;
    Register(mimetype: string): void;
    Remove(jax: any): void;
    getJaxFromMath(math: any): MathJax$ElementJax;
    Zoom(
      jax: any,
      span: any,
      math: any,
      Mw: number,
      Mh: number
    ): MathJax$ZoomStruct;
  }

  declare export interface MathJax$ZoomStruct {
    Y: number;
    mW: number;
    mH: number;
    zW: number;
    zH: number;
  }

  declare export interface MathJax$ElementJax {
    id: string;
    version: string;
    directory: string;
    inputJax: string;
    outputJax: string;
    inputID: string;
    originalText: string;
    mimeType: string;
    Text(text: string): MathJax$CallbackObject;
    Text(text: string, callback: any): MathJax$CallbackObject;
    Rerender(callback: any): MathJax$CallbackObject;
    Reprocess(callback: any): MathJax$CallbackObject;
    Remove(): void;
    SourceElement(): any;
    needsUpdate(): boolean;
  }
}
