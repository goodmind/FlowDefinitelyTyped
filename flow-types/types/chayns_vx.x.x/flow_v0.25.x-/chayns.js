declare module "chayns" {
  declare var npm$namespace$chayns: {
    register: typeof chayns$register,
    login: typeof chayns$login,
    getUser: typeof chayns$getUser,
    getUacGroups: typeof chayns$getUacGroups,
    startInteractionIdentification: typeof chayns$startInteractionIdentification,
    stopInteractionIdentification: typeof chayns$stopInteractionIdentification,
    allowRefreshScroll: typeof chayns$allowRefreshScroll,
    disallowRefreshScroll: typeof chayns$disallowRefreshScroll,
    showTitleImage: typeof chayns$showTitleImage,
    hideTitleImage: typeof chayns$hideTitleImage,
    setOnActivateCallback: typeof chayns$setOnActivateCallback,
    setNetworkChangeCallback: typeof chayns$setNetworkChangeCallback,
    setNfcCallback: typeof chayns$setNfcCallback,
    removeNfcCallback: typeof chayns$removeNfcCallback,
    startNfcDetection: typeof chayns$startNfcDetection,
    stopNfcDetection: typeof chayns$stopNfcDetection,
    scanQRCode: typeof chayns$scanQRCode,
    createQRCode: typeof chayns$createQRCode,
    showFinetradingQRCode: typeof chayns$showFinetradingQRCode,
    selectTapp: typeof chayns$selectTapp,
    openUrl: typeof chayns$openUrl,
    closeUrl: typeof chayns$closeUrl,
    openUrlInBrowser: typeof chayns$openUrlInBrowser,
    getGeoLocation: typeof chayns$getGeoLocation,
    getLocationBeacons: typeof chayns$getLocationBeacons,
    getBeaconHistory: typeof chayns$getBeaconHistory,
    getBaseColor: typeof chayns$getBaseColor,
    share: typeof chayns$share,
    getAvailableSharingServices: typeof chayns$getAvailableSharingServices,
    navigateBack: typeof chayns$navigateBack,
    updateNavigation: typeof chayns$updateNavigation,
    enableDisplayTimeout: typeof chayns$enableDisplayTimeout,
    disableDisplayTimeout: typeof chayns$disableDisplayTimeout,
    setSpeechToText: typeof chayns$setSpeechToText,
    createTappShortcut: typeof chayns$createTappShortcut,
    setSubTapp: typeof chayns$setSubTapp,
    removeSubTapp: typeof chayns$removeSubTapp,
    vibrate: typeof chayns$vibrate,
    setHeight: typeof chayns$setHeight,
    scrollToY: typeof chayns$scrollToY,
    addToWallet: typeof chayns$addToWallet,
    addScrollListener: typeof chayns$addScrollListener,
    setScreenOrientation: typeof chayns$setScreenOrientation,
    findSite: typeof chayns$findSite,
    showWaitCursor: typeof chayns$showWaitCursor,
    hideWaitCursor: typeof chayns$hideWaitCursor,
    showFloatingButton: typeof chayns$showFloatingButton,
    hideFloatingButton: typeof chayns$hideFloatingButton,
    openImage: typeof chayns$openImage,
    uploadImage: typeof chayns$uploadImage,
    openVideo: typeof chayns$openVideo,
    saveAppointment: typeof chayns$saveAppointment,
    playSound: typeof chayns$playSound,
    addErrorListener: typeof chayns$addErrorListener,
    getGlobalData: typeof chayns$getGlobalData,
    ready: typeof chayns$ready,
    smartShop: typeof chayns$smartShop,

    intercom: typeof npm$namespace$chayns$intercom,
    passKit: typeof npm$namespace$chayns$passKit,
    env: typeof npm$namespace$chayns$env,
    dialog: typeof npm$namespace$chayns$dialog,
    ui: typeof npm$namespace$chayns$ui,
    utils: typeof npm$namespace$chayns$utils,
    storage: typeof npm$namespace$chayns$storage
  };

  /**
   * Getting Started
   * chayns
   */
  declare var chayns$ready: Promise<any>;

  declare function chayns$register(config: RegisterConfig): void;

  /**
   * Basic Functions
   * chayns
   */
  declare function chayns$login(parameters?: string[]): Promise<any>;

  declare function chayns$getUser(config: GetUserConfig): Promise<User>;

  declare function chayns$getUacGroups(
    siteId: number,
    updateCache?: boolean
  ): Promise<UacGroup[]>;

  declare function chayns$startInteractionIdentification(
    config: InteractionIdentificationConfig
  ): Promise<any>;

  declare function chayns$stopInteractionIdentification(): Promise<any>;

  declare function chayns$allowRefreshScroll(): Promise<any>;

  declare function chayns$disallowRefreshScroll(): Promise<any>;

  declare function chayns$showTitleImage(): Promise<any>;

  declare function chayns$hideTitleImage(): Promise<any>;

  declare function chayns$setOnActivateCallback(
    callback: (tappEvent: number) => any
  ): Promise<any>;

  declare function chayns$setNetworkChangeCallback(
    callback: (result: NetworkChangeResult) => any,
    ongoing: boolean
  ): Promise<any>;

  declare function chayns$setNfcCallback(
    callback: (rfid: string) => any
  ): Promise<any>;

  declare function chayns$removeNfcCallback(): Promise<any>;

  declare function chayns$startNfcDetection(
    callback: (result: NfcDetectionResult) => any,
    interval: number,
    vibrate: boolean
  ): Promise<any>;

  declare function chayns$stopNfcDetection(): Promise<any>;

  declare function chayns$scanQRCode(
    cameryType?: number,
    timeout?: number
  ): Promise<any>;

  declare function chayns$createQRCode(text: string): Promise<string>;

  declare function chayns$showFinetradingQRCode(): Promise<any>;

  declare function chayns$selectTapp(
    tapp: SelectTappConfig,
    parameter?: string[]
  ): Promise<any>;

  declare function chayns$openUrl(config: OpenUrlConfig): void;

  declare function chayns$closeUrl(): void;

  declare function chayns$openUrlInBrowser(url: string): void;

  declare function chayns$getGeoLocation(): Promise<GeoLocationResult>;

  declare function chayns$getLocationBeacons(
    forceReload: boolean
  ): Promise<LocationBeacon[]>;

  declare function chayns$getBeaconHistory(
    subNumber?: number
  ): Promise<BeaconHistory[]>;

  declare function chayns$getBaseColor(
    color?: string,
    colorMode?: number
  ): string;

  declare function chayns$share(config: ShareConfig): Promise<any>;

  declare function chayns$getAvailableSharingServices(): Promise<number[]>;

  declare function chayns$navigateBack(): Promise<any>;

  declare function chayns$updateNavigation(
    tappId?: number,
    config?: UpdateNavigationConfig
  ): Promise<any>;

  declare function chayns$enableDisplayTimeout(): Promise<any>;

  declare function chayns$disableDisplayTimeout(): Promise<any>;

  declare function chayns$setSpeechToText(
    callback: (result: SpeechToTextResult) => any,
    title?: string
  ): Promise<any>;

  declare function chayns$createTappShortcut(
    name: string,
    imageUrl: string
  ): Promise<any>;

  declare function chayns$setSubTapp(config: SubTappConfig): void;

  declare function chayns$removeSubTapp(config: RemoveSubTappConfig): void;

  declare function chayns$vibrate(ms: number[]): Promise<any>;

  declare function chayns$setHeight(config: SetHeightConfig): Promise<any>;

  declare function chayns$scrollToY(position: number): Promise<any>;

  declare function chayns$addToWallet(passbook: string): Promise<any>;

  declare function chayns$addScrollListener(
    callback: (data: any) => any,
    throttle?: number
  ): Promise<any>;

  declare function chayns$setScreenOrientation(
    orientation: number
  ): Promise<any>;

  declare function chayns$findSite(
    name: string,
    skip?: number,
    take?: number
  ): Promise<Site[]>;

  /**
   * UI Functions
   * Waitcursor
   * chayns
   */
  declare function chayns$showWaitCursor(
    text?: string,
    timeout?: number
  ): Promise<any>;

  declare function chayns$hideWaitCursor(): Promise<any>;

  /**
   * UI Functions
   * Floating Button
   * chayns
   */
  declare function chayns$showFloatingButton(
    config: FloatingConfig,
    callback: () => any
  ): void;

  declare function chayns$hideFloatingButton(): void;

  /**
   * Media Functions
   * Image
   * chayns
   */
  declare function chayns$openImage(
    urls: string[],
    start?: number
  ): Promise<any>;

  declare function chayns$uploadImage(): Promise<string>;

  /**
   * Media Functions
   * Miscellaneous
   * chayns
   */
  declare function chayns$openVideo(url: string): Promise<any>;

  declare function chayns$saveAppointment(
    config: SaveAppointmentConfig
  ): Promise<any>;

  declare function chayns$playSound(
    url: string,
    playOnMute?: boolean
  ): Promise<any>;

  declare function chayns$addErrorListener(
    logFn: (error: any) => Promise<{}>,
    appName: string
  ): void;

  declare function chayns$getGlobalData(): GlobalData;

  /**
   * chayns.smartShop
   */
  declare var chayns$smartShop: any;

  declare var npm$namespace$chayns$intercom: {
    sendMessageToUser: typeof chayns$intercom$sendMessageToUser,
    sendMessageToGroup: typeof chayns$intercom$sendMessageToGroup,
    sendMessageToPage: typeof chayns$intercom$sendMessageToPage
  };
  declare function chayns$intercom$sendMessageToUser(
    userId: number,
    config: IntercomConfig
  ): Promise<any>;

  declare function chayns$intercom$sendMessageToGroup(
    groupId: number,
    config: IntercomConfig
  ): Promise<any>;

  declare function chayns$intercom$sendMessageToPage(
    config: IntercomConfig
  ): Promise<any>;

  declare var npm$namespace$chayns$passKit: {
    getInstalled: typeof chayns$passKit$getInstalled,
    isInstalled: typeof chayns$passKit$isInstalled
  };
  declare function chayns$passKit$getInstalled(): Promise<any>;

  declare function chayns$passKit$isInstalled(identifier: string): Promise<any>;

  declare var npm$namespace$chayns$env: {
    _parameters: typeof chayns$env$_parameters,
    parameters: typeof chayns$env$parameters,
    isBrowser: typeof chayns$env$isBrowser,
    isChaynsWeb: typeof chayns$env$isChaynsWeb,
    isChaynsWebDesktop: typeof chayns$env$isChaynsWebDesktop,
    isChaynsWebMobile: typeof chayns$env$isChaynsWebMobile,
    isDesktop: typeof chayns$env$isDesktop,
    isMobile: typeof chayns$env$isMobile,
    isApp: typeof chayns$env$isApp,
    isIOS: typeof chayns$env$isIOS,
    isAndroid: typeof chayns$env$isAndroid,
    isTablet: typeof chayns$env$isTablet,
    isWP: typeof chayns$env$isWP,
    appVersion: typeof chayns$env$appVersion,
    os: typeof chayns$env$os,
    apiVersion: typeof chayns$env$apiVersion,
    debugMode: typeof chayns$env$debugMode,
    isChaynsParent: typeof chayns$env$isChaynsParent,
    isChaynsWebLight: typeof chayns$env$isChaynsWebLight,
    isInFacebookFrame: typeof chayns$env$isInFacebookFrame,
    isInFrame: typeof chayns$env$isInFrame,
    isWidget: typeof chayns$env$isWidget,
    language: typeof chayns$env$language,

    user: typeof npm$namespace$chayns$env$user,
    site: typeof npm$namespace$chayns$env$site,
    app: typeof npm$namespace$chayns$env$app,
    device: typeof npm$namespace$chayns$env$device,
    browser: typeof npm$namespace$chayns$env$browser
  };
  declare var chayns$env$_parameters: any;

  declare var chayns$env$parameters: any;

  declare var chayns$env$isBrowser: boolean;

  declare var chayns$env$isChaynsWeb: boolean;

  declare var chayns$env$isChaynsWebDesktop: boolean;

  declare var chayns$env$isChaynsWebMobile: boolean;

  declare var chayns$env$isDesktop: boolean;

  declare var chayns$env$isMobile: boolean;

  declare var chayns$env$isApp: boolean;

  declare var chayns$env$isIOS: boolean;

  declare var chayns$env$isAndroid: boolean;

  declare var chayns$env$isTablet: boolean;

  declare var chayns$env$isWP: boolean;

  declare var chayns$env$appVersion: number;

  declare var chayns$env$os: string;

  declare var chayns$env$apiVersion: number;

  declare var chayns$env$debugMode: boolean;

  declare var chayns$env$isChaynsParent: boolean;

  declare var chayns$env$isChaynsWebLight: boolean;

  declare var chayns$env$isInFacebookFrame: boolean;

  declare var chayns$env$isInFrame: boolean;

  declare var chayns$env$isWidget: boolean;

  declare var chayns$env$language: string;

  declare var npm$namespace$chayns$env$user: {
    tobitAccessToken: typeof chayns$env$user$tobitAccessToken,
    facebookAccessToken: typeof chayns$env$user$facebookAccessToken,
    facebookId: typeof chayns$env$user$facebookId,
    id: typeof chayns$env$user$id,
    name: typeof chayns$env$user$name,
    personId: typeof chayns$env$user$personId,
    isAuthenticated: typeof chayns$env$user$isAuthenticated,
    language: typeof chayns$env$user$language,
    groups: typeof chayns$env$user$groups
  };
  declare var chayns$env$user$tobitAccessToken: string;

  declare var chayns$env$user$facebookAccessToken: string;

  declare var chayns$env$user$facebookId: string;

  declare var chayns$env$user$id: number;

  declare var chayns$env$user$name: string;

  declare var chayns$env$user$personId: string;

  declare var chayns$env$user$isAuthenticated: boolean;

  declare var chayns$env$user$language: string;

  declare var chayns$env$user$groups: UserGroup[];

  declare var npm$namespace$chayns$env$site: {
    color: typeof chayns$env$site$color,
    colorMode: typeof chayns$env$site$colorMode,
    colorScheme: typeof chayns$env$site$colorScheme,
    domain: typeof chayns$env$site$domain,
    facebookAppId: typeof chayns$env$site$facebookAppId,
    facebookPageId: typeof chayns$env$site$facebookPageId,
    id: typeof chayns$env$site$id,
    isAdEnabled: typeof chayns$env$site$isAdEnabled,
    isArEnabled: typeof chayns$env$site$isArEnabled,
    language: typeof chayns$env$site$language,
    locationId: typeof chayns$env$site$locationId,
    locationPersonId: typeof chayns$env$site$locationPersonId,
    tapps: typeof chayns$env$site$tapps,
    title: typeof chayns$env$site$title,
    url: typeof chayns$env$site$url,
    version: typeof chayns$env$site$version,

    tapp: typeof npm$namespace$chayns$env$site$tapp
  };
  declare var chayns$env$site$color: string;

  declare var chayns$env$site$colorMode: number;

  declare var chayns$env$site$colorScheme: number;

  declare var chayns$env$site$domain: string;

  declare var chayns$env$site$facebookAppId: string;

  declare var chayns$env$site$facebookPageId: string;

  declare var chayns$env$site$id: string;

  declare var chayns$env$site$isAdEnabled: boolean;

  declare var chayns$env$site$isArEnabled: boolean;

  declare var chayns$env$site$language: string;

  declare var chayns$env$site$locationId: number;

  declare var chayns$env$site$locationPersonId: string;

  declare var chayns$env$site$tapps: SiteTapp[];

  declare var chayns$env$site$title: string;

  declare var chayns$env$site$url: string;

  declare var chayns$env$site$version: string;

  declare var npm$namespace$chayns$env$site$tapp: {
    customUrl: typeof chayns$env$site$tapp$customUrl,
    id: typeof chayns$env$site$tapp$id,
    internalName: typeof chayns$env$site$tapp$internalName,
    isExclusiveView: typeof chayns$env$site$tapp$isExclusiveView,
    isKioskMode: typeof chayns$env$site$tapp$isKioskMode,
    isSubTapp: typeof chayns$env$site$tapp$isSubTapp,
    showName: typeof chayns$env$site$tapp$showName,
    sortId: typeof chayns$env$site$tapp$sortId,
    userGroupIds: typeof chayns$env$site$tapp$userGroupIds
  };
  declare var chayns$env$site$tapp$customUrl: string;

  declare var chayns$env$site$tapp$id: number;

  declare var chayns$env$site$tapp$internalName: string;

  declare var chayns$env$site$tapp$isExclusiveView: boolean;

  declare var chayns$env$site$tapp$isKioskMode: boolean;

  declare var chayns$env$site$tapp$isSubTapp: boolean;

  declare var chayns$env$site$tapp$showName: string;

  declare var chayns$env$site$tapp$sortId: number;

  declare var chayns$env$site$tapp$userGroupIds: number[];

  declare var npm$namespace$chayns$env$app: {
    flavor: typeof chayns$env$app$flavor,
    languageId: typeof chayns$env$app$languageId,
    model: typeof chayns$env$app$model,
    name: typeof chayns$env$app$name,
    uid: typeof chayns$env$app$uid,
    version: typeof chayns$env$app$version
  };
  declare var chayns$env$app$flavor: string;

  declare var chayns$env$app$languageId: string;

  declare var chayns$env$app$model: string;

  declare var chayns$env$app$name: string;

  declare var chayns$env$app$uid: string;

  declare var chayns$env$app$version: string;

  declare var npm$namespace$chayns$env$device: {
    fontScale: typeof chayns$env$device$fontScale,
    imei: typeof chayns$env$device$imei,
    languageId: typeof chayns$env$device$languageId,
    model: typeof chayns$env$device$model,
    systemName: typeof chayns$env$device$systemName,
    systemVersion: typeof chayns$env$device$systemVersion,
    uid: typeof chayns$env$device$uid
  };
  declare var chayns$env$device$fontScale: any;

  declare var chayns$env$device$imei: string;

  declare var chayns$env$device$languageId: string;

  declare var chayns$env$device$model: string;

  declare var chayns$env$device$systemName: string;

  declare var chayns$env$device$systemVersion: number;

  declare var chayns$env$device$uid: string;

  declare var npm$namespace$chayns$env$browser: {
    name: typeof chayns$env$browser$name,
    version: typeof chayns$env$browser$version
  };
  declare var chayns$env$browser$name: string;

  declare var chayns$env$browser$version: string;

  declare var npm$namespace$chayns$dialog: {
    alert: typeof chayns$dialog$alert,
    confirm: typeof chayns$dialog$confirm,
    date: typeof chayns$dialog$date,
    select: typeof chayns$dialog$select,
    input: typeof chayns$dialog$input,
    facebook: typeof chayns$dialog$facebook,

    buttonType: typeof chayns$dialog$buttonType,
    buttonText: typeof chayns$dialog$buttonText,
    dateType: typeof chayns$dialog$dateType,
    inputType: typeof chayns$dialog$inputType
  };

  declare var chayns$dialog$buttonType: {|
    +CANCEL: -1, // -1
    +NEGATIVE: 0, // 0
    +POSITIVE: 1 // 1
  |};

  declare var chayns$dialog$buttonText: {|
    +CANCEL: "Abbrechen", // "Abbrechen"
    +NO: "Nein", // "Nein"
    +OK: "OK", // "OK"
    +YES: "Ja" // "Ja"
  |};

  declare var chayns$dialog$dateType: {|
    +DATE: 0, // 0
    +TIME: 1, // 1
    +DATE_TIME: 2 // 2
  |};

  declare var chayns$dialog$inputType: {|
    +DEFAULT: 0, // 0
    +PASSWORD: 1 // 1
  |};

  declare function chayns$dialog$alert(
    title: string,
    message?: string
  ): Promise<chayns$dialog$buttonType>;

  declare function chayns$dialog$confirm(
    title: string,
    message?: string,
    buttons?: DialogButton[]
  ): Promise<chayns$dialog$buttonType>;

  declare function chayns$dialog$date(
    config: DialogDateConfig
  ): Promise<DialogDateResult>;

  declare function chayns$dialog$select(
    config: DialogSelectConfig
  ): Promise<DialogSelectResult>;

  declare function chayns$dialog$input(
    config: DialogInputConfig
  ): Promise<DialogInputResult>;

  declare function chayns$dialog$facebook(
    options: DialogFacebookOptions
  ): Promise<DialogFacebookResult>;

  declare var npm$namespace$chayns$ui: {
    modeSwitch: typeof npm$namespace$chayns$ui$modeSwitch,
    gallery: typeof npm$namespace$chayns$ui$gallery,
    tooltip: typeof npm$namespace$chayns$ui$tooltip,
    slider: typeof npm$namespace$chayns$ui$slider
  };

  declare var npm$namespace$chayns$ui$modeSwitch: {
    init: typeof chayns$ui$modeSwitch$init,
    addItem: typeof chayns$ui$modeSwitch$addItem,
    changeMode: typeof chayns$ui$modeSwitch$changeMode,
    remove: typeof chayns$ui$modeSwitch$remove,
    add: typeof chayns$ui$modeSwitch$add
  };
  declare function chayns$ui$modeSwitch$init(config: ModeSwitchConfig): void;

  declare function chayns$ui$modeSwitch$addItem(
    item: ModeSwitchItem,
    index?: number
  ): void;

  declare function chayns$ui$modeSwitch$changeMode(
    item: number | ModeSwitchItem
  ): void;

  declare function chayns$ui$modeSwitch$remove(): void;

  declare function chayns$ui$modeSwitch$add(): void;

  declare var npm$namespace$chayns$ui$gallery: {
    create: typeof chayns$ui$gallery$create,
    setUrls: typeof chayns$ui$gallery$setUrls,
    getUrls: typeof chayns$ui$gallery$getUrls,
    addUrl: typeof chayns$ui$gallery$addUrl,
    removeUrl: typeof chayns$ui$gallery$removeUrl
  };
  declare function chayns$ui$gallery$create(id: string, urls: string[]): void;

  declare function chayns$ui$gallery$setUrls(id: string, urls: string[]): void;

  declare function chayns$ui$gallery$getUrls(id: string): string[];

  declare function chayns$ui$gallery$addUrl(id: string, url: string): void;

  declare function chayns$ui$gallery$removeUrl(id: string, url: string): void;

  declare var npm$namespace$chayns$ui$tooltip: {
    init: typeof chayns$ui$tooltip$init
  };
  declare function chayns$ui$tooltip$init(
    config: UiTooltipInitConfig,
    rootElement: any
  ): Promise<boolean>;

  declare var npm$namespace$chayns$ui$slider: {
    refreshTrack: typeof chayns$ui$slider$refreshTrack
  };
  declare function chayns$ui$slider$refreshTrack(): void;

  declare var npm$namespace$chayns$utils: {
    isHex: typeof chayns$utils$isHex,
    isArray: typeof chayns$utils$isArray,
    isBLEAdress: typeof chayns$utils$isBLEAdress,
    isBlank: typeof chayns$utils$isBlank,
    isDate: typeof chayns$utils$isDate,
    isDefined: typeof chayns$utils$isDefined,
    isFormData: typeof chayns$utils$isFormData,
    isFunction: typeof chayns$utils$isFunction,
    isGUID: typeof chayns$utils$isGUID,
    isMacAdress: typeof chayns$utils$isMacAdress,
    isNumber: typeof chayns$utils$isNumber,
    isObject: typeof chayns$utils$isObject,
    isPromise: typeof chayns$utils$isPromise,
    isString: typeof chayns$utils$isString,
    isUUID: typeof chayns$utils$isUUID,
    isUndefined: typeof chayns$utils$isUndefined,
    isDeferred: typeof chayns$utils$isDeferred,
    isJwt: typeof chayns$utils$isJwt,
    isUrl: typeof chayns$utils$isUrl,
    getJwtPayload: typeof chayns$utils$getJwtPayload,
    mod: typeof chayns$utils$mod,
    trim: typeof chayns$utils$trim,
    replacePlaceholder: typeof chayns$utils$replacePlaceholder,
    mixColor: typeof chayns$utils$mixColor,
    isPresent: typeof chayns$utils$isPresent,
    setLevel: typeof chayns$utils$setLevel,

    ls: typeof npm$namespace$chayns$utils$ls,
    lang: typeof npm$namespace$chayns$utils$lang
  };

  /**
   * Utility Functions
   * Check Types
   * chayns.utils
   */
  declare function chayns$utils$isHex(
    parameter: any,
    shorthand: boolean
  ): boolean;

  declare function chayns$utils$isArray(parameter: any): boolean;

  declare function chayns$utils$isBLEAdress(parameter: any): boolean;

  declare function chayns$utils$isBlank(parameter: any): boolean;

  declare function chayns$utils$isDate(parameter: any): boolean;

  declare function chayns$utils$isDefined(parameter: any): boolean;

  declare function chayns$utils$isFormData(parameter: any): boolean;

  declare function chayns$utils$isFunction(parameter: any): boolean;

  declare function chayns$utils$isGUID(parameter: any): boolean;

  declare function chayns$utils$isMacAdress(parameter: any): boolean;

  declare function chayns$utils$isNumber(parameter: any): boolean;

  declare function chayns$utils$isObject(parameter: any): boolean;

  declare function chayns$utils$isPromise(parameter: any): boolean;

  declare function chayns$utils$isString(parameter: any): boolean;

  declare function chayns$utils$isUUID(parameter: any): boolean;

  declare function chayns$utils$isUndefined(parameter: any): boolean;

  declare function chayns$utils$isDeferred(parameter: any): boolean;

  declare function chayns$utils$isJwt(parameter: any): boolean;

  declare function chayns$utils$isUrl(parameter: any): boolean;

  /**
   * Utility Functions
   * Miscellaneous
   * chayns.utils
   */
  declare function chayns$utils$getJwtPayload(token: string): JwtPaylod;

  declare function chayns$utils$mod(number: number, modulo: number): number;

  declare function chayns$utils$trim(test: string): string;

  declare function chayns$utils$replacePlaceholder(
    text: string,
    parameters: any[]
  ): string;

  declare function chayns$utils$mixColor(
    color1: string,
    color2: string,
    saturation: number
  ): string;

  declare function chayns$utils$isPresent(parameter: any): boolean;

  declare function chayns$utils$setLevel(level: number): void;

  declare var npm$namespace$chayns$utils$ls: {
    set: typeof chayns$utils$ls$set,
    get: typeof chayns$utils$ls$get,
    remove: typeof chayns$utils$ls$remove,
    removeAll: typeof chayns$utils$ls$removeAll
  };
  declare function chayns$utils$ls$set(key: string, value: string): void;

  declare function chayns$utils$ls$get(key: string): string;

  declare function chayns$utils$ls$remove(key: string): void;

  declare function chayns$utils$ls$removeAll(): void;

  declare var npm$namespace$chayns$utils$lang: {
    init: typeof chayns$utils$lang$init,
    renderTextStrings: typeof chayns$utils$lang$renderTextStrings,
    get: typeof chayns$utils$lang$get,
    translateDomStrings: typeof chayns$utils$lang$translateDomStrings
  };
  declare function chayns$utils$lang$init(config: any): void;

  declare function chayns$utils$lang$renderTextStrings(): void;

  declare function chayns$utils$lang$get(textString: string): string;

  declare function chayns$utils$lang$translateDomStrings(): void;

  declare var npm$namespace$chayns$storage: {
    set: typeof chayns$storage$set,
    get: typeof chayns$storage$get,
    remove: typeof chayns$storage$remove,

    accessMode: typeof chayns$storage$accessMode
  };

  declare var chayns$storage$accessMode: {|
    +PUBLIC: 0, // 0
    +PROTECTED: 1, // 1
    +PRIVATE: 2 // 2
  |};

  declare function chayns$storage$set(
    key: string,
    value: any,
    accessMode?: chayns$storage$accessMode,
    tappIds?: number[]
  ): Promise<any>;

  declare function chayns$storage$get(
    key: string,
    accessMode?: chayns$storage$accessMode
  ): any;

  declare function chayns$storage$remove(
    key: string,
    accessMode?: chayns$storage$accessMode
  ): Promise<any>;

  /**
   * Getting Started
   * chayns
   * interfaces
   */
  declare interface RegisterConfig {
    strictMode?: boolean;
    appName?: string;
    cssPrefix?: string;
    callbackPrefix?: string;
    initialHeight?: number;
    autoResize?: boolean;
  }

  /**
   * Basic Functions
   * chayns
   * interfaces
   */
  declare interface GetUserConfig {
    accessToken?: string;
    userId?: number;
    fbId?: string;
    personId?: string;
  }
  declare interface User {
    FacebookID: string;
    FirstName: string;
    LastName: string;
    PersonID: string;
    UserFullName: string;
    UserID: number;
  }
  declare interface UacGroup {
    id: number;
    name: string;
    showName: string;
  }
  declare interface InteractionIdentificationConfig {
    duration: number;
    delay?: number;
    callback: any;
    resetOnInteraction?: boolean;
    foregroundColor: string;
    backgroundColor?: string;
  }
  declare interface NetworkChangeResult {
    isConnected: boolean;
    type: number;
  }
  declare interface NfcDetectionResult {
    connected: boolean;
    rfid: string;
  }
  declare interface SelectTappConfig {
    id?: number;
    internalName?: string;
    showName?: string;
    position?: number;
  }
  declare interface OpenUrlConfig {
    url: string;
    title?: string;
    exclusiveView?: boolean;
    darkenBackground?: boolean;
    fullSize?: boolean;
    width?: number;
  }
  declare interface GeoLocationResult {
    longitude: number;
    latitude: number;
  }
  declare interface LocationBeacon {
    id: number;
    pushMessage: string;
    latitude: number;
    longitude: number;
  }
  declare interface BeaconHistory {
    id: number;
    timestamp: number;
  }
  declare interface ShareConfig {
    title?: string;
    text: string;
    imageUrl?: string;
    sharingApp: number;
    sharingAndroidApp?: string;
  }
  declare interface UpdateNavigationConfig {
    stateOnly?: boolean;
    updateTapp?: boolean;
  }
  declare interface SpeechToTextResult {
    languageCode: string;
    text: string[];
  }
  declare interface SubTappConfig {
    tappID: number;
    name: string;
    color: string;
    colorText?: string;
    sortID: number;
    icon: string;
    callbackURL?: (result: any) => any;
    url: string;
    buttonName: string;
    isExclusiveView?: boolean;
    replaceParent?: boolean;
    boldText?: boolean;
  }
  declare interface RemoveSubTappConfig {
    tappID: number;
    close: boolean;
    remove: boolean;
  }
  declare interface SetHeightConfig {
    height: number;
    growOnly?: boolean;
    full?: boolean;
    fullViewport?: boolean;
  }
  declare interface Site {
    appstoreName: string;
    facebookId: string;
    siteId: string;
    locationId: number;
  }

  /**
   * Basic Functions
   * chayns.intercom
   * interfaces
   */
  declare interface IntercomConfig {
    text: string;
  }

  /**
   * UI Functions
   * chayns.dialog
   * interfaces
   */
  declare interface DialogButton {
    text: string;
    buttonType: chayns$dialogbuttonType;
  }
  declare interface DialogDateConfig {
    dateType: chayns$dialogdateType;
    preSelect?: Date;
    minDate?: Date;
    maxDate?: Date;
  }
  declare interface DialogDateResult {
    timestamp: number;
    buttonType: chayns$dialogbuttonType;
  }
  declare interface DialogSelectConfig {
    title: string;
    message?: string;
    quickfind?: boolean;
    multiselect?: boolean;
    buttons?: any[];
    list: DialogSelectConfigItem[];
  }
  declare interface DialogSelectConfigItem {
    name: string;
    value?: string;
    image?: string;
    isSelected?: boolean;
  }
  declare interface DialogSelectResult {
    buttonType: chayns$dialogbuttonType;
    selection: DialogSelectResultItem[];
  }
  declare interface DialogSelectResultItem {
    name: string;
    value?: string;
  }
  declare interface DialogInputConfig {
    title: string;
    message?: string;
    placeholderText?: string;
    text?: string;
    buttons?: DialogButton[];
  }
  declare interface DialogInputResult {
    buttonType: chayns$dialogbuttonType;
    text: string;
  }

  /**
   * UI Functions
   * chayns.ui.modeswitch
   * interfaces
   */
  declare interface ModeSwitchConfig {
    items: ModeSwitchItem[];
    callback(result: ModeSwitchItem): void;
    headline?: string;
    preventclose?: boolean;
  }
  declare interface ModeSwitchItem {
    name: string;
    value: number;
    default?: boolean;
  }

  /**
   * UI Functions
   * Floating Button
   * chayns
   * interfaces
   */
  declare interface FloatingConfig {
    text?: string;
    color?: string;
    colorText?: string;
    icon?: string;
  }

  /**
   * Media Functions
   * Miscellaneous
   * chayns
   * interfaces
   */
  declare interface SaveAppointmentConfig {
    name: string;
    location: string;
    description: string;
    start: Date;
    end: Date;
  }

  /**
   * Utility Functions
   * Miscellaneous
   * chayns.utils
   * interfaces
   */
  declare interface JwtPaylod {
    FacebookUserID: string;
    FirstName: string;
    LastName: string;
    PersonID: string;
    LocationID: number;
    TobitUserID: number;
    LoginType: number;
    isAdmin: boolean;
  }

  /**
   * Enviroment Variables
   * User
   * interfaces
   */
  declare interface UserGroup {
    id: number;
    isActive?: boolean;
    isSystemGroup?: boolean;
    name: string;
    showName?: string;
  }

  /**
   * Enviroment Variables
   * Site
   * interfaces
   */
  declare interface SiteTapp {
    customUrl: string;
    id: number;
    internalName: string;
    isExclusiveView: boolean;
    isKioskMode: boolean;
    isSubTapp: boolean;
    showName: string;
    sortId: number;
    userGroupIds: number[];
  }
  declare interface GlobalData {
    _result: any;
  }
  declare interface DialogFacebookOptions {
    title: string;
    message?: string;
    quickfind?: number;
    multiselect?: number;
    button?: DialogFacebookButton[];
    preSelected: number[];
  }
  declare interface DialogFacebookButton {
    text: string;
    value: number;
  }
  declare interface DialogFacebookResult {
    buttonType: number;
    selection: DialogFacebookResultSelection[];
  }
  declare interface DialogFacebookResultSelection {
    first_name: string;
    last_name: string;
    id: string;
    gender: string;
    name: string;
  }
  declare interface UiTooltipInitConfig {
    tooltipClass: string;
    preventAnimation: boolean;
  }
}
