declare module "dav" {
  declare export var version: string;

  /**
   * Perform an initial download of a caldav or carddav account's data.
   * @param options
   * @returns a Promise which will be fulfilled with a dav.Account object.
   */
  declare export function createAccount(
    options: CreateAccountOptions
  ): Promise<Account>;

  declare export interface CreateAccountOptions {
    /**
     * one of 'caldav' or 'carddav'. Defaults to 'caldav'.
     */
    accountType?: "caldav" | "carddav";

    /**
     * list of caldav filters to send with request.
     */
    filters?: { [key: string]: any }[];

    /**
     * whether or not to load dav collections.
     */
    loadCollections?: boolean;

    /**
     * whether or not to load dav objects.
     */
    loadObjects?: boolean;

    /**
     * request sandox.
     */
    sandbox?: Sandbox | {};

    /**
     * some url for server (needn't be base url).
     */
    server: string;

    /**
     * VTIMEZONE calendar object.
     */
    timezone?: string;

    /**
     * request sender.
     */
    xhr?: transport$Transport;
  }

  /**
   * Create a calendar object on the parameter calendar.
   * @param calendar the calendar to put the object on.
   * @param options
   * @returns a Promise which will be fulfilled when the calendar has been created.
   */
  declare export function createCalendarObject(
    calendar: Calendar,
    options: CreateCalendarObjectOptions
  ): Promise<CalendarObject>;

  declare export interface CreateCalendarObjectOptions {
    /**
     * rfc 5545 VCALENDAR object.
     */
    data: string;

    /**
     * name for the calendar ics file.
     */
    filename: string;

    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * request sender.
     */
    xhr?: transport$Transport;
  }

  /**
   * Persist updates to the parameter calendar object to the server.
   * @param calendarObject updated calendar object.
   * @param options
   * @returns a Promise which will be fulfilled when the calendar has been updated.
   */
  declare export function updateCalendarObject(
    calendarObject: CalendarObject,
    options: UpdateCalendarObjectOptions
  ): Promise<CalendarObject>;

  declare export interface UpdateCalendarObjectOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * request sender.
     */
    xhr?: transport$Transport;
  }

  /**
   * Delete the parameter calendar object on the server.
   * @param calendarObject target calendar object.
   * @param options
   * @returns a Promise which will be fulfilled when the calendar has been deleted.
   */
  declare export function deleteCalendarObject(
    calendarObject: CalendarObject,
    options: DeleteCalendarObjectOptions
  ): Promise<CalendarObject>;

  declare export interface DeleteCalendarObjectOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * request sender.
     */
    xhr?: transport$Transport;
  }

  /**
   * Fetch changes from the remote server to the parameter calendar.
   * @param calendar the calendar to fetch changes for.
   * @param options
   * @returns a Promise which will be fulfilled with an updated dav.Calendar object once sync is complete.
   */
  declare export function syncCalendar(
    calendar: Calendar,
    options: SyncCalendarOptions
  ): Promise<Calendar>;

  declare export interface SyncCalendarOptions {
    /**
     * list of caldav filters to send with request.
     */
    filters?: { [key: string]: any }[];

    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * either 'basic' or 'webdav'. If unspecified, will try to do webdav sync
     * and failover to basic sync if rfc 6578 is not supported by the server.
     */
    syncMethod?: "basic" | "webdav";

    /**
     * VTIMEZONE calendar object.
     */
    timezone?: string;

    /**
     * request sender.
     */
    xhr?: transport$Transport;
  }

  /**
   * Fetch changes from the remote server to the account's calendars.
   * @param account the calendar account to sync.
   * @param options
   * @returns a Promise which will be fulfilled with an updated dav.Account object once sync is complete.
   */
  declare export function syncCaldavAccount(
    account: Account,
    options: SyncCaldavAccountOptions
  ): Promise<Account>;

  declare export interface SyncCaldavAccountOptions {
    /**
     * list of caldav filters to send with request.
     */
    filters?: { [key: string]: any }[];

    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * either 'basic' or 'webdav'. If unspecified, will try to do webdav sync
     * and failover to basic sync if rfc 6578 is not supported by the server.
     */
    syncMethod?: "basic" | "webdav";

    /**
     * VTIMEZONE calendar object.
     */
    timezone?: string;

    /**
     * request sender.
     */
    xhr?: transport$Transport;
  }

  /**
   * Create a vcard object on the parameter address book.
   * @param addressBook the address book to put the object on.
   * @param options
   * @returns a Promise which will be fulfilled when the vcard has been created.
   */
  declare export function createCard(
    addressBook: AddressBook,
    options: CreateCardOptions
  ): Promise<AddressBook>;

  declare export interface CreateCardOptions {
    /**
     * VCARD object.
     */
    data: string;

    /**
     * name for the vcard vcf file.
     */
    filename: string;

    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * request sender.
     */
    xhr?: transport$Transport;
  }

  /**
   * Persist updates to the parameter vcard object to the server.
   * @param card updated vcard object.
   * @param options
   * @returns a Promise which will be fulfilled when the vcard has been updated.
   */
  declare export function updateCard(
    card: VCard,
    options: UpdateCardOptions
  ): Promise<VCard>;

  declare export interface UpdateCardOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * request sender.
     */
    xhr?: transport$Transport;
  }

  /**
   * Delete the parameter vcard object on the server.
   * @param card target vcard object.
   * @param options
   * @returns a Promise which will be fulfilled when the vcard has been deleted.
   */
  declare export function deleteCard(
    card: VCard,
    options: DeleteCardOptions
  ): Promise<VCard>;

  declare export interface DeleteCardOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * request sender.
     */
    xhr?: transport$Transport;
  }

  /**
   * Fetch changes from the remote server to the parameter address books.
   * @param addressBook the address book to fetch changes for.
   * @param options
   * @returns a Promise which will be fulfilled with an updated AddressBook object once sync is complete.
   */
  declare export function syncAddressBook(
    addressBook: AddressBook,
    options: SyncAddressBookOptions
  ): Promise<AddressBook>;

  declare export interface SyncAddressBookOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * either 'basic' or 'webdav'.If unspecified, will try to do webdav sync
     * and failover to basic sync if rfc 6578 is not supported by the server.
     */
    syncMethod?: "basic" | "webdav";

    /**
     * request sender.
     */
    xhr?: transport$Transport;
  }

  /**
   * Fetch changes from the remote server to the account's address books.
   * @param account the address book account to sync.
   * @param options
   * @returns a Promise which will be fulfilled with an updated Account object once sync is complete.
   */
  declare export function syncCarddavAccount(
    account: Account,
    options: SyncCarddavAccountOptions
  ): Promise<Account>;

  declare export interface SyncCarddavAccountOptions {
    /**
     * list of caldav filters to send with request.
     */
    filters?: { [key: string]: any }[];

    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * either 'basic' or 'webdav'. If unspecified, will try to do webdav sync
     * and failover to basic sync if rfc 6578 is not supported by the server.
     */
    syncMethod?: "basic" | "webdav";

    /**
     * VTIMEZONE calendar object.
     */
    timezone?: string;

    /**
     * request sender.
     */
    xhr?: transport$Transport;
  }

  /**
   * Create a request sandbox.
   */
  declare export class Sandbox {
    constructor(): this;
    requestList: any[];
    add(request: any): void;

    /**
     * abort sandboxed requests as a group.
     */
    abort(): void;
  }

  /**
   * @deprecated
   */
  declare export function createSandbox(): Sandbox;

  declare var npm$namespace$transport: {
    Transport: typeof transport$Transport,
    Basic: typeof transport$Basic,
    OAuth2: typeof transport$OAuth2
  };
  declare class transport$Transport {
    /**
     * @param credentials user authorization.
     */
    constructor(credentials: Credentials): this;
    send(
      request: Request,
      url: string,
      options?: transport$TransportOptions
    ): Promise<any>;
  }

  declare interface transport$TransportOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;
    retry?: boolean;
  }

  declare class transport$Basic mixins Transport {
    /**
     * Create a new Basic object. This sends dav requests using http basic authentication.
     * @param credentials user authorization.
     */
    constructor(credentials: Credentials): this;

    /**
     * @param request object with request info.
     * @param url
     * @param options
     * @return a promise that will be resolved with an xhr request after
     * its readyState is 4 or the result of applying an optional request
     * `transformResponse` function to the xhr object after its readyState
     * is 4.
     */
    send(
      request: Request,
      url: string,
      options?: transport$TransportOptions
    ): Promise<any>;
  }

  /**
   * Create a new OAuth2 object.This sends dav requests authorized via rfc 6749 oauth2.
   * @param credentials user authorization.
   */
  declare class transport$OAuth2 mixins Transport {
    constructor(credentials: Credentials): this;

    /**
     * @param request object with request info.
     * @param url
     * @param options
     * @return a promise that will be resolved with an xhr request after
     * its readyState is 4 or the result of applying an optional request
     * `transformResponse` function to the xhr object after its readyState
     * is 4.
     */
    send(
      request: Request,
      url: string,
      options?: transport$TransportOptions
    ): Promise<any>;
  }

  declare var npm$namespace$request: {
    addressBookQuery: typeof request$addressBookQuery,
    basic: typeof request$basic,
    calendarQuery: typeof request$calendarQuery,
    propfind: typeof request$propfind,
    syncCollection: typeof request$syncCollection
  };

  /**
   * @param options
   * @returns
   */
  declare function request$addressBookQuery(
    options: request$AddressBookQueryOptions
  ): string;

  declare interface request$AddressBookQueryOptions {
    /**
     * value for Depth header.
     */
    depth?: string;

    /**
     * list of props to request.
     */
    props: { [key: string]: any }[];
  }

  /**
   * @param options
   * @returns
   */
  declare function request$basic(options: request$BasicOptions): Request;

  declare interface request$BasicOptions {
    /**
     * put request body.
     */
    data: string;

    /**
     * http method.
     */
    method: string;

    /**
     * cached calendar object etag.
     */
    etag: string;
  }

  /**
   * @param options
   * @returns
   */
  declare function request$calendarQuery(
    options: request$CalendarQueryOptions
  ): string;

  declare interface request$CalendarQueryOptions {
    /**
     * value for Depth header.
     */
    depth?: string;

    /**
     * list of filters to send with request.
     */
    filters: { [key: string]: any }[];

    /**
     * list of props to request.
     */
    props: { [key: string]: any }[];

    /**
     * VTIMEZONE calendar object.
     */
    timezone: string;
  }

  /**
   * @param options
   * @returns
   */
  declare function request$propfind(options: request$PropfindOptions): string;

  declare interface request$PropfindOptions {
    /**
     * value for Depth header.
     */
    depth?: string;

    /**
     * list of props to request.
     */
    props: { [key: string]: any }[];
  }

  /**
   * @param options
   * @returns
   */
  declare function request$syncCollection(
    options: request$SyncCollectionOptions
  ): string;

  declare interface request$SyncCollectionOptions {
    /**
     * option value for Depth header.
     */
    depth?: string;

    /**
     * list of props to request.
     */
    props: { [key: string]: any }[];

    /**
     * indicates scope of the sync report request.
     */
    syncLevel: number;

    /**
     * synchronization token provided by the server.
     */
    syncToken: string;
  }
  declare export class Client {
    /**
     * Create a new Client object. The client interface allows consumers to set
     * their credentials and transport once and then make authorized requests
     * without passing them to each request. Each of the other, public API
     * methods should be available on Client objects.
     * @param xhr request sender.
     * @param options
     */
    constructor(xhr: transport$Transport, options?: ClientOptions): this;

    /**
     * Send a request using this client's transport (and perhaps baseUrl).
     * @param req dav request.
     * @param options
     * @return a promise that will be resolved with an xhr request after
     * its readyState is 4 or the result of applying an optional request
     * `transformResponse` function to the xhr object after its readyState
     * is 4.
     */
    send(req: Request, uri: string, options?: ClientSendOptions): Promise<any>;

    /**
     * Perform an initial download of a caldav or carddav account's data.
     * @param options
     * @returns a Promise which will be fulfilled with a dav.Account object.
     */
    createAccount(options?: CreateAccountOptions): Promise<Account>;

    /**
     * Create a calendar object on the parameter calendar.
     * @param calendar the calendar to put the object on.
     * @param options
     * @returns a Promise which will be fulfilled when the calendar has been created.
     */
    createCalendarObject(
      calendar: Calendar,
      options?: CreateCalendarObjectOptions
    ): Promise<CalendarObject>;

    /**
     * Persist updates to the parameter calendar object to the server.
     * @param calendarObject updated calendar object.
     * @param options
     * @returns a Promise which will be fulfilled when the calendar has been updated.
     */
    updateCalendarObject(
      calendarObject: CalendarObject,
      options?: UpdateCalendarObjectOptions
    ): Promise<CalendarObject>;

    /**
     * Delete the parameter calendar object on the server.
     * @param calendarObject target calendar object.
     * @param options
     * @returns a Promise which will be fulfilled when the calendar has been deleted.
     */
    deleteCalendarObject(
      calendarObject: CalendarObject,
      options?: DeleteCalendarObjectOptions
    ): Promise<CalendarObject>;

    /**
     * Fetch changes from the remote server to the parameter calendar.
     * @param calendar the calendar to fetch changes for.
     * @param options
     * @returns a Promise which will be fulfilled with an updated dav.Calendar object once sync is complete.
     */
    syncCalendar(
      calendar: Calendar,
      options?: SyncCalendarOptions
    ): Promise<Calendar>;

    /**
     * Fetch changes from the remote server to the account's calendars.
     * @param account the calendar account to sync.
     * @param options
     * @returns a Promise which will be fulfilled with an updated dav.Account object once sync is complete.
     */
    syncCaldavAccount(
      account: Account,
      options?: SyncCaldavAccountOptions
    ): Promise<Account>;

    /**
     * Create a vcard object on the parameter address book.
     * @param addressBook the address book to put the object on.
     * @param options
     * @returns a Promise which will be fulfilled when the vcard has been created.
     */
    createCard(
      addressBook: AddressBook,
      options?: CreateCardOptions
    ): Promise<AddressBook>;

    /**
     * Persist updates to the parameter vcard object to the server.
     * @param card updated vcard object.
     * @param options
     * @returns a Promise which will be fulfilled when the vcard has been updated.
     */
    updateCard(card: VCard, options?: UpdateCardOptions): Promise<VCard>;

    /**
     * Delete the parameter vcard object on the server.
     * @param card target vcard object.
     * @param options
     * @returns a Promise which will be fulfilled when the vcard has been deleted.
     */
    deleteCard(card: VCard, options?: DeleteCardOptions): Promise<VCard>;

    /**
     * Fetch changes from the remote server to the parameter address books.
     * @param addressBook the address book to fetch changes for.
     * @param options
     * @returns a Promise which will be fulfilled with an updated AddressBook object once sync is complete.
     */
    syncAddressBook(
      addressBook: AddressBook,
      options?: SyncAddressBookOptions
    ): Promise<AddressBook>;

    /**
     * Fetch changes from the remote server to the account's address books.
     * @param account the address book account to sync.
     * @param options
     * @returns a Promise which will be fulfilled with an updated Account object once sync is complete.
     */
    syncCarddavAccount(
      account: Account,
      options?: SyncCarddavAccountOptions
    ): Promise<Account>;
  }
  declare export interface ClientOptions {
    /**
     * root url to resolve relative request urls with.
     */
    baseUrl: string;
  }
  declare export interface ClientSendOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * relative url for request.
     */
    url?: string;
  }
  declare export type Partial<T> = $ObjMapi<T, <P>(P) => $ElementType<T, P>>;
  declare export class Account {
    constructor(options?: AccountOptions): this;
    server: string;
    credentials: Credentials;
    rootUrl: string;
    principalUrl: string;
    homeUrl: string;
    calendars: Calendar[];
    addressBooks: AddressBook[];
  }
  declare export type AccountOptions = $Shape<Account>;
  declare export class Credentials {
    constructor(options?: CredentialsOptions): this;

    /**
     * username (perhaps email) for calendar user.
     */
    username: string;

    /**
     * plaintext password for calendar user.
     */
    password: string;

    /**
     * oauth client id.
     */
    clientId: string;

    /**
     * oauth client secret.
     */
    clientSecret: string;

    /**
     * oauth code.
     */
    authorizationCode: string;

    /**
     * oauth redirect url.
     */
    redirectUrl: string;

    /**
     * oauth token url.
     */
    tokenUrl: string;

    /**
     * oauth access token.
     */
    accessToken: string;

    /**
     * oauth refresh token.
     */
    refreshToken: string;

    /**
     * unix time for access token expiration.
     */
    expiration: number;
  }
  declare export type CredentialsOptions = $Shape<Credentials>;
  declare export class DAVCollection<T> {
    constructor(options: DAVCollectionOptions<T>): this;
    data: string;
    objects: T[];
    account: Account;
    ctag: string;
    description: string;
    displayName: string;
    reports: string[];
    resourcetype: string;
    syncToken: string;
    url: string;
  }
  declare export type DAVCollectionOptions<T> = $Shape<DAVCollection<T>>;
  declare export class AddressBook mixins DAVCollection<VCard> {
    constructor(options?: AddressBookOptions): this;
  }
  declare export type AddressBookOptions = $Shape<AddressBook>;
  declare export class Calendar mixins DAVCollection<CalendarObject> {
    constructor(options?: CalendarOptions): this;
    components: string[];
    timezone: string;
  }
  declare export type CalendarOptions = $Shape<Calendar>;
  declare export class DAVObject {
    constructor(options: DAVObjectOptions): this;
    data: string;
    etag: string;
    url: string;
  }
  declare export type DAVObjectOptions = $Shape<DAVObject>;
  declare export class CalendarObject mixins DAVObject {
    constructor(options?: CalendarObjectOptions): this;
    calendar: Calendar;
    calendarData: string;
  }
  declare export type CalendarObjectOptions = $Shape<CalendarObject>;
  declare export class VCard mixins DAVObject {
    constructor(options?: VCardOptions): this;
    addressBook: AddressBook;
    addressData: string;
  }
  declare export type VCardOptions = $Shape<VCard>;
  declare export class Request {
    constructor(options?: RequestOptions): this;
    method: string;
    requestData: string;
    transformRequest: (xhr: any) => any;
    transformResponse: (xhr: any) => any;
    onerror: (error: Error) => any;
  }
  declare export type RequestOptions = $Shape<Request>;

  declare var npm$namespace$debug: {
    enabled: typeof debug$enabled
  };
  declare var debug$enabled: boolean;

  declare var npm$namespace$ns: {
    CALENDAR_SERVER: typeof ns$CALENDAR_SERVER,
    CALDAV_APPLE: typeof ns$CALDAV_APPLE,
    CALDAV: typeof ns$CALDAV,
    CARDDAV: typeof ns$CARDDAV,
    DAV: typeof ns$DAV
  };
  declare var ns$CALENDAR_SERVER: any; // "http://calendarserver.org/ns/";

  declare var ns$CALDAV_APPLE: any; // "http://apple.com/ns/ical/";

  declare var ns$CALDAV: any; // "urn:ietf:params:xml:ns:caldav";

  declare var ns$CARDDAV: any; // "urn:ietf:params:xml:ns:carddav";

  declare var ns$DAV: any; // "DAV:";
}
