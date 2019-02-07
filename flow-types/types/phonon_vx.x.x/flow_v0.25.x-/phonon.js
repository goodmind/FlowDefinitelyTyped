declare module "phonon" {
  /**
   * * Main object **
   */
  declare interface Phonon$Phonon {
    device: Phonon$PhononDeviceObject;
    browser: Phonon$PhononBrowserObject;
    event: Phonon$PhononEventObject;
    options(options: Phonon$PhononOptions): void;
    navigator(): Phonon$PhononNavigator;
    i18n(): Phonon$PhononI18n;
    updateLocale(language: string): void;
    ajax(request: Phonon$PhononAjaxObject): Phonon$PhononAjaxReturnObject;
    onReady(callback: () => void): void;
    panel(id: string): Phonon$PhononPanelComponent;
    sidePanel(id: string): Phonon$PhononSidePanelComponent;
    alert(
      text: string,
      title?: string,
      cancelable?: boolean,
      textOk?: string
    ): Phonon$PhononDialogComponent;
    confirm(
      text: string,
      title?: string,
      cancelable?: boolean,
      textOk?: string,
      textCancel?: string
    ): Phonon$PhononDialogComponent;
    prompt(
      text: string,
      title?: string,
      cancelable?: boolean,
      textOk?: string,
      textCancel?: string
    ): Phonon$PhononDialogComponent;
    indicator(
      title: string,
      cancelable?: boolean
    ): Phonon$PhononIndicatorComponent;
    dialog(id: string): Phonon$PhononCustomDialogComponent;
    notif(
      textOrId: string,
      timeout?: number,
      showButton?: boolean,
      textButton?: string
    ): Phonon$PhononNotifComponent;
    popover(id?: string): Phonon$PhononPopoverComponent;
    preloader(element: string | Element): Phonon$PhononPreloaderComponent;
    tab(): Phonon$PhononTabComponent;
    autocomplete(
      input: Element | HTMLElement | string,
      o?: Awesomplete.Options
    ): Awesomplete;
  }

  declare interface Phonon$PhononDeviceObject {
    os: string;
    osVersion: string;
    ANDROID: string;
    IOS: string;
  }

  declare interface Phonon$PhononBrowserObject {
    name: string;
    version: string;
  }

  declare interface Phonon$PhononEventObject {
    animationEnd: string;
    transitionEnd: string;
  }

  declare type Phonon$PhononCustomWindowEvent = {
    detail: Phonon$PhononDetail
  } & Event;

  declare interface Phonon$PhononDetail {
    page: string;
    req: string[];
  }

  /**
   * * Options **
   */
  declare interface Phonon$PhononOptions {
    navigator?: Phonon$PhononNavigatorOptions;
    i18n?: Phonon$PhononI18nOptions | null;
  }

  declare interface Phonon$PhononNavigatorOptions {
    defaultPage?: string;
    hashPrefix?: string;
    animatePages?: boolean;
    enableBrowserBackButton?: boolean;
    templateRootDirectory?: string;
    defaultTemplateExtension?: string;
    useHash?: boolean;
  }

  declare interface Phonon$PhononI18nOptions {
    directory?: string;
    localeFallback?: string;
    localePreferred?: string;
  }

  /**
   * * Navigation **
   */
  declare interface Phonon$PhononNavigator {
    currentPage: string;
    previousPage: string;
    changePage(pageName: string, parameter?: string): void;
    on(
      page: Phonon$PhononPageObject,
      callback?: (activity: Phonon$PhononActivity) => void
    ): void;
    onPage(page: string): Phonon$PhononPageEventObject;
    start(): void;
  }

  declare interface Phonon$PhononActivity {
    onCreate(callback?: () => void): void;
    onReady(callback?: () => void): void;
    onClose(callback?: (self: Phonon$PhononOnCloseObject) => void): void;
    onHidden(callback?: () => void): void;
    onTransitionEnd(callback?: () => void): void;
    onHashChanged(callback?: (...hash: string[]) => void): void;
    onTabChanged(callback?: (tabNumber: number) => void): void;
  }

  declare interface Phonon$PhononPageObject {
    page: string;
    content?: string | null;
    preventClose?: boolean;
    readyDelay?: number;
  }

  declare interface Phonon$PhononOnCloseObject {
    close(): void;
  }

  declare interface Phonon$PhononPageEventObject {
    addEvent(event: string, callback: (parameter?: any) => void): void;
  }

  /**
   * * Internationalization **
   */
  declare interface Phonon$PhononI18n {
    bind(element?: Element, callback?: () => void): void;
    bind(callback?: () => void): void;
    getAll(callback: (json: any) => void): void;
    get(key: string, callback: (value: any) => void): void;
    get(key: string[], callback: (values: any) => void): void;
    getPreference(): string;
    setPreference(newLanguage: string): void;
    getLocale(): string;
  }

  /**
   * * Ajax **
   */
  declare type Phonon$PhononAjaxErrorFlag =
    | "NO_INTERNET_ACCESS"
    | "TIMEOUT_EXCEEDED"
    | "XMLHTTPREQUEST_UNAVAILABLE"
    | "JSON_MALFORMED"
    | "REQUEST_CANCELED";

  declare interface Phonon$PhononAjaxObject {
    method: string;
    url: string;
    crossDomain?: boolean;
    dataType: string;
    contentType?: string;
    data?: any;
    timeout?: number;
    headers?: any;
    success(res: any, xhr: XMLHttpRequest): void;
    error?: (
      res: any,
      flagError: Phonon$PhononAjaxErrorFlag,
      xhr: XMLHttpRequest
    ) => void;
  }

  declare interface Phonon$PhononAjaxReturnObject {
    cancel(): void;
  }

  /**
   * * Components **
   */
  declare type Phonon$PhononColor = "positive" | "negative";

  declare type Phonon$PhononPopoverDirection =
    | "left"
    | "title-left"
    | "right"
    | "title";

  declare interface Phonon$PhononPanelComponent {
    open(): void;
    close(): void;
  }

  declare interface Phonon$PhononSidePanelComponent {
    open(): void;
    close(): void;
  }

  declare interface Phonon$PhononDialogComponent {
    on(
      event: string,
      callback: (value?: any) => void
    ): Phonon$PhononDialogComponent;
  }

  declare type Phonon$PhononCustomDialogComponent = {
    open(): void,
    close(): void
  } & Phonon$PhononDialogComponent;

  declare type Phonon$PhononIndicatorComponent = {
    open(): void,
    close(): void
  } & Phonon$PhononDialogComponent;

  declare interface Phonon$PhononNotifComponent {
    setColor(color: Phonon$PhononColor): Phonon$PhononNotifComponent;
    show(): Phonon$PhononNotifComponent;
    hide(): Phonon$PhononNotifComponent;
  }

  declare interface Phonon$PhononPopoverItem {
    text: string;
    value: string;
  }

  declare interface Phonon$PhononPopoverComponent {
    setList(
      list: string[] | Phonon$PhononPopoverItem[]
    ): Phonon$PhononPopoverComponent;
    setList(
      list: any[],
      itemBuilder?: (item: any) => void
    ): Phonon$PhononPopoverComponent;
    attachButton(
      element: string | Element,
      autoBind?: boolean
    ): Phonon$PhononPopoverComponent;
    open(
      direction: Phonon$PhononPopoverDirection
    ): Phonon$PhononPopoverComponent;
    openFrom(element: string | Element): Phonon$PhononPopoverComponent;
    close(): void;
    onItemChanged(
      callback: (data: Phonon$PhononPopoverItem) => void
    ): Phonon$PhononPopoverComponent;
  }

  declare interface Phonon$PhononPreloaderComponent {
    show(): void;
    hide(): void;
  }

  declare interface Phonon$PhononTabComponent {
    setCurrentTab(pageName: string, tabNumber: number): void;
    init(page?: string): void;
  }
  declare interface Document {
    on(
      event: string,
      callback: (event: Phonon$Phonon.Phonon$PhononCustomWindowEvent) => void,
      useCapture?: boolean
    ): void;
    off(
      event: string,
      callback: (event: Phonon$Phonon.Phonon$PhononCustomWindowEvent) => void,
      useCapture?: boolean
    ): void;
  }
  declare interface Window {
    on(
      event: string,
      callback: (event: Phonon$Phonon.Phonon$PhononCustomWindowEvent) => void,
      useCapture?: boolean
    ): void;
    off(
      event: string,
      callback: (event: Phonon$Phonon.Phonon$PhononCustomWindowEvent) => void,
      useCapture?: boolean
    ): void;
    phonon: Phonon$Phonon.Phonon$Phonon;
  }
  declare interface Element {
    on(
      event: string,
      callback: (event: any) => void,
      useCapture?: boolean
    ): void;
    off(
      event: string,
      callback: (event: any) => void,
      useCapture?: boolean
    ): void;
  }
  declare interface NodeList {
    on(
      event: string,
      callback: (event: any) => void,
      useCapture?: boolean
    ): void;
    off(
      event: string,
      callback: (event: any) => void,
      useCapture?: boolean
    ): void;
  }
  declare var phonon: Phonon$Phonon.Phonon$Phonon;
}
