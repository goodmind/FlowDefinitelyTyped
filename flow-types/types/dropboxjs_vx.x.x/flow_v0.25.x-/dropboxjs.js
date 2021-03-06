declare module "dropboxjs" {
  declare interface Dropbox$QueryParams {
    [key: string]: any;
  }

  declare interface Dropbox$Credentials {
    key: string;
    secret?: string;
    token?: string;
    uid?: string;
  }

  declare interface Dropbox$AuthenticateCallback {
    (err: Dropbox$ApiError, client: Dropbox$Client): void;
    (err: Dropbox$AuthError, client: Dropbox$Client): void;
  }

  declare interface Dropbox$QueryParamsCallback {
    (queryParams: Dropbox$QueryParams): void;
  }

  declare interface Dropbox$ClientFileReadCallback {
    (
      err: Dropbox$ApiError,
      fileContents: string,
      stat: File$File$Stat,
      rangeInfo: Http$Http$RangeInfo
    ): void;
  }

  declare interface Dropbox$ClientFileWriteCallback {
    (err: Dropbox$ApiError, stat: File$File$Stat): void;
  }

  declare interface Dropbox$ResumableUploadStepCallback {
    (err: Dropbox$ApiError, uploadCursor: Http$Http$UploadCursor): void;
  }

  declare interface Dropbox$ReadThumbnailCallback {
    (err: Dropbox$ApiError, imageData: string, stat: File$File$Stat): void;
    (err: Dropbox$ApiError, imageData: Blob, stat: File$File$Stat): void;
  }

  declare interface Dropbox$FileStatCallback {
    (err: Dropbox$ApiError, stat: File$File$Stat): void;
  }

  declare interface Dropbox$AuthenticateOptions {
    interactive: boolean;
  }

  declare interface Dropbox$SingOutOptions {
    mustInvalidate: boolean;
  }

  declare interface Dropbox$AccountInfoOptions {
    httpCache: boolean;
  }

  declare interface Dropbox$ClientFileReadOptions {
    versionTag?: string;
    rev?: string;
    arrayBuffer?: boolean;
    blob?: boolean;
    buffer?: boolean;
    binary?: boolean;
    length?: number;
    start?: number;
    httpCache?: boolean;
  }

  declare interface Dropbox$ClientFileWriteOptions {
    lastVersionTag?: string;
    parentRev?: string;
    noOverwrite?: boolean;
  }

  declare interface Dropbox$ReadDirOptions {
    removed?: boolean;
    deleted?: boolean;
    limit?: any;
    versionTag?: string;
    contentHash?: string;
    httpCache?: boolean;
  }

  declare interface Dropbox$MakeURLOptions {
    download?: boolean;
    downloadHack?: boolean;
    long?: boolean;
    longUrl?: boolean;
  }

  declare interface Dropbox$HistoryOptions {
    limit?: number;
    httpCache?: boolean;
  }

  declare interface Dropbox$ThumbnailUrlOptions {
    png?: boolean;
    format?: string;
    size?: string;
  }

  declare type Dropbox$ReadThumbnailOptions = {
    arrayBuffer?: boolean,
    blob?: boolean,
    buffer?: boolean
  } & Dropbox$ThumbnailUrlOptions;

  declare interface Dropbox$FindByNameOptions {
    limit?: number;
    removed?: boolean;
    deleted?: boolean;
    httpCache?: boolean;
  }

  declare interface Dropbox$RedirectOptions {
    redirectUrl?: string;
    redirectFile?: string;
    scope?: string;
    rememberUser?: boolean;
  }

  declare class Util$EventSource {
    constructor(options: {
      cancelable: boolean
    }): this;
    addListener(listener: (event: any) => void): Util$EventSource;
    removeListener(listener: (event: any) => void): Util$EventSource;
    dispatch(event: {}): boolean;
  }

  declare class Util$Oauth {
    static queryParamsFromUrl(url: string): Dropbox$QueryParams;
    static randomAuthStateParam(): string;
    checkAuthStateParam(stateParam: string): boolean;
  }

  declare class Util$Xhr {
    xhr: XMLHttpRequest;
    onError: (
      error: Dropbox$ApiError,
      callBack: (error: Dropbox$ApiError) => void
    ) => void;
    constructor(method: string, baseUrl: string): this;
    static urlEncode(obj: {}): string;
    static urlEncodeValue(obj: {}): string;
    static urlDecode(string: {}): Dropbox$QueryParams;
    setParams(params: Dropbox$QueryParams): Util$Xhr;
    setCallback(
      callback: (
        err: Dropbox$ApiError,
        responseType: string,
        metadataHeader: {},
        headers: {}
      ) => void
    ): Util$Xhr;
    signWithOauth(oauth: Util$Oauth, cacheFriendly: boolean): Util$Xhr;
    addOauthParams(oauth: Util$Oauth): Util$Xhr;
    addOauthHeader(oauth: Util$Oauth): Util$Xhr;
    setBody(body: string): Util$Xhr;
    setBody(body: Blob): Util$Xhr;
    setBody(body: ArrayBuffer): Util$Xhr;
    setResponseType(responseType: string): Util$Xhr;
    setHeader(headerName: string, value: string): Util$Xhr;
    reportResponseHeaders(): Util$Xhr;
    setFileField(
      fieldName: string,
      fileName: string,
      fileData: string,
      contentType?: string
    ): void;
    setFileField(
      fieldName: string,
      fileName: string,
      fileData: Blob,
      contentType?: string
    ): void;
    setFileField(
      fieldName: string,
      fileName: string,
      fileData: File,
      contentType?: string
    ): void;
    prepare(): Util$Xhr;
    send(
      callback: (
        err: Dropbox$ApiError,
        responseType: string,
        metadataHeader: {}
      ) => void
    ): Util$Xhr;
    onReadyStateChange(): void;
    onXdrLoad(): void;
    onXdrError(): void;
  }

  declare class Http$AppInfo {
    static ICON_SMALL: number;
    static ICON_LARGE: number;
    static parse(appInfo: {}, appKey?: string): Http$AppInfo;
    name: string;
    key: string;
    canUseDatastores: boolean;
    canUseFiles: boolean;
    hasAppFolder: boolean;
    canUseFullDropbox: boolean;
    icon(width: number, height?: number): void;
  }

  declare class Http$PollResult {
    static parse(response: {}): Http$PollResult;
    hasChanges: boolean;
    retryAfter: number;
  }

  declare class Http$PulledChanges {
    static parse(deltaInfo: {}): Http$PulledChanges;
    blankSlate: boolean;
    cursorTag: string;
    shouldPullAgain: boolean;
    shouldBackOff: boolean;
    cursor(): string;
  }

  declare class Http$PulledChange {
    static parse(entry: {}): Http$PulledChange;
    path: string;
    wasRemoved: boolean;
    stat: File$File$Stat;
  }

  declare class Http$RangeInfo {
    static parse(headerValue: string): Http$RangeInfo;
    start: number;
    size: number;
    end: number;
  }

  declare class Http$UploadCursor {
    static parse(cursorData: string): Http$UploadCursor;
    static parse(cursorData: {}): Http$UploadCursor;
    constructor(cursorData: string): this;
    constructor(cursorData: {}): this;
    tag: string;
    offset: number;
    expiresAt: Date;
    toJSON(): {};
  }

  declare interface File$StatOptions {
    version: number;
    removed: boolean;
    deleted: boolean;
    readDir: boolean;
    versionTag: string;
    rev: string;
    contentHash: string;
    hash: string;
    httpCache: boolean;
  }

  declare class File$ShareUrl {
    static parse(urlData: string, isDirect: boolean): File$ShareUrl;
    static parse(urlData: {}, isDirect: boolean): File$ShareUrl;
    url: string;
    expiresAt: Date;
    isDirect: boolean;
    isPreview: boolean;
    toJSON(): {};
  }

  declare class File$CopyReference {
    static parse(refData: string): File$CopyReference;
    static parse(refData: {}): File$CopyReference;
    tag: string;
    expiresAt: Date;
    toJSON(): {};
  }

  declare class File$Stat {
    static parse(metadata: {}): File$Stat;
    path: string;
    name: string;
    inAppFolder: boolean;
    isFolder: boolean;
    isFile: boolean;
    isRemoved: boolean;
    typeIcon: string;
    versionTag: string;
    contentHash: string;
    mimeType: string;
    size: number;
    humanSize: string;
    hasThumbnail: boolean;
    modifiedAt: Date;
    clientModifiedAt: Date;
    toJSON(): {};
  }

  /**
   * Do not use class! TypeScript definition implementation detail : https://github.com/Microsoft/TypeScript/issues/371
   */
  declare class AuthDriver$IAuthDriver {
    doAuthorize(
      authUrl: string,
      stateParam: string,
      client: Dropbox$Client,
      callback?: Dropbox$QueryParamsCallback
    ): void;
  }

  declare class AuthDriver$BrowserBase {
    static localStorage(): Storage;
    static currentLocation(): string;
    static cleanupLocation(): void;
    constructor(options: {
      scope: string,
      rememberUser: boolean
    }): this;
    authType(): string;
    onAuthStepChange(client: Dropbox$Client, callback: () => void): void;
    locationStateParam(url: string): string;
  }

  declare class AuthDriver$Redirect {
    constructor(options?: {
      redirectUrl: string,
      redirectFile: string,
      scope: string,
      rememberUser: boolean
    }): this;
    url(): string;
    doAuthorize(
      authUrl: string,
      stateParam: string,
      client: Dropbox$Client
    ): void;
    resumeAuthorize(
      stateParam: string,
      client: Dropbox$Client,
      callback: Dropbox$QueryParamsCallback
    ): void;
  }

  declare class AuthDriver$Popup mixins AuthDriver$IAuthDriver {
    static locationOrigin(location: string): string;
    static oauthReceiver(): void;
    constructor(options?: Dropbox$RedirectOptions): this;
    url(): string;
  }

  declare class AuthDriver$ChromeApp mixins AuthDriver$IAuthDriver {
    constructor(options?: {
      scope: string
    }): this;
  }

  declare class AuthDriver$ChromeExtension mixins AuthDriver$IAuthDriver {
    static oauthReceiver(): void;
    constructor(options?: {
      scope: string,
      receiverPath: string
    }): this;
  }

  declare class AuthDriver$Cordova mixins AuthDriver$IAuthDriver {
    static oauthReceiver(): void;
    constructor(options?: {
      scope: string,
      receiverPath: string
    }): this;
    url(): string;
  }

  declare class AuthDriver$NodeServer mixins AuthDriver$IAuthDriver {
    constructor(options?: {
      port: number,
      tls?: {}
    }): this;
    authType(): string;
    url(): string;
    openBrowser(url: string): void;
    createApp(): void;
    closeServer(): void;
    doRequest(request: any, response: any): void;
    closeBrowser(response: any): void;
  }

  declare class Dropbox$AuthDriver {
    authType(): string;
    url(): string;
    doAuthorize(
      authUrl: string,
      stateParam: string,
      client: Dropbox$Client,
      callback: Dropbox$QueryParamsCallback
    ): void;
    getStateParam(
      client: Dropbox$Client,
      callback: (state: string) => void
    ): void;
    resumeAuthorize(
      stateParam: string,
      client: Dropbox$Client,
      callback: Dropbox$QueryParamsCallback
    ): void;
    onAuthStepChange(client: Dropbox$Client, callback: () => void): void;
  }

  declare class Dropbox$AccountInfo {
    static parse(acountInfo: {}): Dropbox$AccountInfo;
    name: string;
    email: string;
    countryCode: string;
    uid: string;
    referralUrl: string;
    publicAppUrl: string;
    quota: number;
    usedQuota: number;
    privateBytes: number;
    sharedBytes: number;
    json(): {};
  }

  declare class Dropbox$ApiError {
    status: number;
    method: string;
    url: string;
    responseText: string;
    response: {};
    constructor(xhr: XMLHttpRequest, method: string, url: string): this;
    static NETWORK_ERROR: number;
    static NO_CONTENT: number;
    static INVALID_PARAM: number;
    static INVALID_TOKEN: number;
    static OAUTH_ERROR: number;
    static NOT_FOUND: number;
    static INVALID_METHOD: number;
    static NOT_ACCEPTABLE: number;
    static CONFLICT: number;
    static RATE_LIMITED: number;
    static SERVER_ERROR: number;
    static OVER_QUOTA: number;
  }

  declare class Dropbox$AuthError {
    code: string;
    description: string;
    uri: string;
    constructor(queryString: Dropbox$QueryParams): this;
    static ACCESS_DENIED: string;
    static INVALID_REQUEST: string;
    static UNAUTHORIZED_CLIENT: string;
    static INVALID_GRANT: string;
    static INVALID_SCOPE: string;
    static UNSUPPORTED_GRANT_TYPE: string;
    static UNSUPPORTED_RESPONSE_TYPE: string;
    static SERVER_ERROR: string;
    static TEMPORARILY_UNAVAILABLE: string;
  }

  declare class Dropbox$Client {
    static ERROR: number;
    static RESET: number;
    static PARAM_SET: number;
    static PARAM_LOADED: number;
    static AUTHORIZED: number;
    static DONE: number;
    static SIGNED_OUT: number;
    onXhr: Util$Util$EventSource;
    onError: Util$Util$EventSource;
    onAuthStepChange: Util$Util$EventSource;
    authStep: number;
    constructor(options: Dropbox$Credentials): this;
    authDriver(
      driver: Dropbox$AuthDriver.AuthDriver$IAuthDriver
    ): Dropbox$Client;
    dropboxUid(): string;
    credentials(): Dropbox$Credentials;
    authenticate(): Dropbox$Client;
    authenticate(callback: Dropbox$AuthenticateCallback): Dropbox$Client;
    authenticate(options: Dropbox$AuthenticateOptions): Dropbox$Client;
    authenticate(
      options: Dropbox$AuthenticateOptions,
      callback: Dropbox$AuthenticateCallback
    ): Dropbox$Client;
    isAuthenticated(): boolean;
    signOut(callback: (err: Dropbox$ApiError) => void): XMLHttpRequest;
    signOut(
      options: Dropbox$SingOutOptions,
      callback: (err: Dropbox$ApiError) => void
    ): XMLHttpRequest;
    signOff(callback: (err: Dropbox$ApiError) => void): void;
    signOff(
      options: Dropbox$SingOutOptions,
      callback: (err: Dropbox$ApiError) => void
    ): void;
    getAccountInfo(
      callback: (
        err: Dropbox$ApiError,
        accountInfo: Dropbox$AccountInfo,
        Dropbox$AccountInfo: Dropbox$AccountInfo
      ) => void
    ): XMLHttpRequest;
    getAccountInfo(
      options: Dropbox$AccountInfoOptions,
      callback: (
        err: Dropbox$ApiError,
        accountInfo: Dropbox$AccountInfo,
        Dropbox$AccountInfo: Dropbox$AccountInfo
      ) => void
    ): XMLHttpRequest;
    readFile(
      path: string,
      callback: Dropbox$ClientFileReadCallback
    ): XMLHttpRequest;
    readFile(
      path: string,
      options: Dropbox$ClientFileReadOptions,
      callback: Dropbox$ClientFileReadCallback
    ): XMLHttpRequest;
    writeFile(
      path: string,
      data: any,
      callback: Dropbox$ClientFileWriteCallback
    ): XMLHttpRequest;
    writeFile(
      path: string,
      data: any,
      options: Dropbox$ClientFileWriteOptions,
      callback: Dropbox$ClientFileWriteCallback
    ): XMLHttpRequest;
    resumableUploadStep(
      data: any,
      callback: Dropbox$ResumableUploadStepCallback
    ): XMLHttpRequest;
    resumableUploadStep(
      data: any,
      cursor: Http$Http$UploadCursor,
      callback: Dropbox$ResumableUploadStepCallback
    ): XMLHttpRequest;
    resumableUploadFinish(
      path: string,
      cursor: Http$Http$UploadCursor,
      callback: Dropbox$ClientFileWriteCallback
    ): XMLHttpRequest;
    resumableUploadFinish(
      path: string,
      cursor: Http$Http$UploadCursor,
      options: Dropbox$ClientFileWriteOptions,
      callback: Dropbox$ClientFileWriteCallback
    ): XMLHttpRequest;
    stat(
      path: string,
      callback: (
        err: Dropbox$ApiError,
        stat: File$File$Stat,
        folderEntries: File$File$Stat[]
      ) => void
    ): XMLHttpRequest;
    stat(
      path: string,
      options: File$File$StatOptions,
      callback: (
        err: Dropbox$ApiError,
        stat: File$File$Stat,
        folderEntries: File$File$Stat[]
      ) => void
    ): XMLHttpRequest;
    readdir(
      path: string,
      callback: (
        err: Dropbox$ApiError,
        filenames: string[],
        stat: File$File$Stat,
        folderEntries: File$File$Stat[]
      ) => void
    ): XMLHttpRequest;
    readdir(
      path: string,
      options: Dropbox$ReadDirOptions,
      callback: (
        err: Dropbox$ApiError,
        filenames: string[],
        stat: File$File$Stat,
        folderEntries: File$File$Stat[]
      ) => void
    ): XMLHttpRequest;
    metadata(
      path: string,
      callback: (
        err: Dropbox$ApiError,
        stat: File$File$Stat,
        folderEntries: File$File$Stat[]
      ) => void
    ): void;
    metadata(
      path: string,
      options: File$File$StatOptions,
      callback: (
        err: Dropbox$ApiError,
        stat: File$File$Stat,
        folderEntries: File$File$Stat[]
      ) => void
    ): void;
    makeUrl(
      path: string,
      callback: (err: Dropbox$ApiError, shareUrl: File$File$ShareUrl) => void
    ): XMLHttpRequest;
    makeUrl(
      path: string,
      options: Dropbox$MakeURLOptions,
      callback: (err: Dropbox$ApiError, shareUrl: File$File$ShareUrl) => void
    ): XMLHttpRequest;
    history(
      path: string,
      callback: (err: Dropbox$ApiError, fileVersions: File$File$Stat[]) => void
    ): XMLHttpRequest;
    history(
      path: string,
      options: Dropbox$HistoryOptions,
      callback: (err: Dropbox$ApiError, fileVersions: File$File$Stat[]) => void
    ): XMLHttpRequest;
    revisions(
      path: string,
      options: Dropbox$HistoryOptions,
      callback: (err: Dropbox$ApiError, fileVersions: File$File$Stat[]) => void
    ): void;
    thumbnailUrl(path: string, options?: Dropbox$ThumbnailUrlOptions): string;
    readThumbnail(
      path: string,
      callback: Dropbox$ReadThumbnailCallback
    ): XMLHttpRequest;
    readThumbnail(
      path: string,
      options: Dropbox$ReadThumbnailOptions,
      callback: Dropbox$ReadThumbnailCallback
    ): XMLHttpRequest;
    revertFile(
      path: string,
      versionTag: string,
      callback: Dropbox$FileStatCallback
    ): XMLHttpRequest;
    restore(
      path: string,
      versionTag: string,
      callback: Dropbox$FileStatCallback
    ): void;
    findByName(
      path: string,
      namePattern: string,
      callback: (err: Dropbox$ApiError, resultStats: File$File$Stat[]) => void
    ): XMLHttpRequest;
    findByName(
      path: string,
      namePattern: string,
      options: Dropbox$FindByNameOptions,
      callback: (err: Dropbox$ApiError, resultStats: File$File$Stat[]) => void
    ): XMLHttpRequest;
    search(
      path: string,
      namePattern: string,
      options: Dropbox$FindByNameOptions,
      callback: (err: Dropbox$ApiError, resultStats: File$File$Stat[]) => void
    ): void;
    makeCopyReference(
      path: string,
      callback: (
        err: Dropbox$ApiError,
        copyReference: File$File$CopyReference
      ) => void
    ): XMLHttpRequest;
    copyRef(
      path: string,
      callback: (
        err: Dropbox$ApiError,
        copyReference: File$File$CopyReference
      ) => void
    ): XMLHttpRequest;
    pullChanges(
      callback: (
        err: Dropbox$ApiError,
        changes: Http$Http$PulledChanges
      ) => void
    ): XMLHttpRequest;
    pullChanges(
      cursor: string,
      callback: (
        err: Dropbox$ApiError,
        changes: Http$Http$PulledChanges
      ) => void
    ): XMLHttpRequest;
    pullChanges(
      cursor: Http$Http$PulledChanges,
      callback: (
        err: Dropbox$ApiError,
        changes: Http$Http$PulledChanges
      ) => void
    ): XMLHttpRequest;
    delta(
      cursor: string,
      callback: (
        err: Dropbox$ApiError,
        changes: Http$Http$PulledChanges
      ) => void
    ): void;
    delta(
      cursor: Http$Http$PulledChanges,
      callback: (
        err: Dropbox$ApiError,
        changes: Http$Http$PulledChanges
      ) => void
    ): void;
    pollForChanges(
      cursor: string,
      options: {},
      callback: (err: Dropbox$ApiError, changes: Http$Http$PollResult) => void
    ): void;
    pollForChanges(
      cursor: Http$Http$PulledChanges,
      options: {},
      callback: (err: Dropbox$ApiError, changes: Http$Http$PollResult) => void
    ): void;
    mkdir(path: string, callback: Dropbox$FileStatCallback): XMLHttpRequest;
    remove(path: string, callback: Dropbox$FileStatCallback): XMLHttpRequest;
    unlink(path: string, callback: Dropbox$FileStatCallback): void;
    delete(path: string, callback: Dropbox$FileStatCallback): void;
    copy(
      from: string,
      toPath: string,
      callback: Dropbox$FileStatCallback
    ): XMLHttpRequest;
    copy(
      from: File$File$CopyReference,
      toPath: string,
      callback: Dropbox$FileStatCallback
    ): XMLHttpRequest;
    move(
      fromPath: string,
      toPath: string,
      callback: Dropbox$FileStatCallback
    ): XMLHttpRequest;
    appInfo(
      callback: (err: Dropbox$ApiError, changes: Http$Http$AppInfo) => void
    ): XMLHttpRequest;
    appInfo(
      appKey: string,
      callback: (err: Dropbox$ApiError, changes: Http$Http$AppInfo) => void
    ): XMLHttpRequest;
    isAppDeveloper(
      userId: any,
      callbackcallback: (err: Dropbox$ApiError, isAppDeveloper: boolean) => void
    ): XMLHttpRequest;
    isAppDeveloper(
      userId: any,
      appKey: any,
      callbackcallback: (err: Dropbox$ApiError, isAppDeveloper: boolean) => void
    ): XMLHttpRequest;
    hasOauthRedirectUri(
      redirectUri: string,
      callback: (err: Dropbox$ApiError, hasOauthRedirectUri: boolean) => void
    ): XMLHttpRequest;
    hasOauthRedirectUri(
      redirectUri: string,
      appKey: string,
      callback: (err: Dropbox$ApiError, hasOauthRedirectUri: boolean) => void
    ): XMLHttpRequest;
    hasOauthRedirectUri(
      redirectUri: string,
      appKey: Http$Http$AppInfo,
      callback: (err: Dropbox$ApiError, hasOauthRedirectUri: boolean) => void
    ): XMLHttpRequest;
    reset(): Dropbox$Client;
    setCredentials(credentials: Dropbox$Credentials): Dropbox$Client;
    appHash(): string;
  }
}
