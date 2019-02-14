declare module "avoscloud-sdk" {
  declare var npm$namespace$AV: {
    initialize: typeof AV$initialize,
    applicationId: typeof AV$applicationId,
    applicationKey: typeof AV$applicationKey,
    masterKey: typeof AV$masterKey,
    ErrorCode: typeof AV$ErrorCode,
    Promise: typeof AV$Promise,
    BaseObject: typeof AV$BaseObject,
    ACL: typeof AV$ACL,
    File: typeof AV$File,
    GeoPoint: typeof AV$GeoPoint,
    Relation: typeof AV$Relation,
    Object: typeof AV$Object,
    Installation: typeof AV$Installation,
    Collection: typeof AV$Collection,
    Events: typeof AV$Events,
    Query: typeof AV$Query,
    Role: typeof AV$Role,
    User: typeof AV$User,
    Error: typeof AV$Error,
    Analytics: typeof npm$namespace$AV$Analytics,
    Push: typeof npm$namespace$AV$Push
  };
  declare var AV$applicationId: string;

  declare var AV$applicationKey: string;

  declare var AV$masterKey: string;

  declare interface AV$SuccessOption {
    success?: Function;
  }

  declare interface AV$ErrorOption {
    error?: Function;
  }

  declare type AV$SuccessFailureOptions = {} & SuccessOption & ErrorOption;

  declare interface AV$WaitOption {
    /**
     * Set to true to wait for the server to confirm success
     * before triggering an event.
     */
    wait?: boolean;
  }

  declare interface AV$UseMasterKeyOption {
    /**
     * In Cloud Code and Node only, causes the Master Key to be used for this request.
     */
    useMasterKey?: boolean;
  }

  declare interface AV$SilentOption {
    /**
     * Set to true to avoid firing the event.
     */
    silent?: boolean;
  }

  /**
   * A Promise is returned by async methods as a hook to provide callbacks to be
   * called when the async task is fulfilled.
   *
   * <p>Typical usage would be like:<pre>
   *     query.find().then(function(results) {
   *       results[0].set("foo", "bar");
   *       return results[0].saveAsync();
   *     }).then(function(result) {
   *       console.log("Updated " + result.id);
   *     });
   * </pre></p>
   * @see AV.Promise.prototype.then
   * @class
   */
  declare interface AV$IPromise<T> {
    then<U>(
      resolvedCallback: (value: T) => AV$IPromise<U>,
      rejectedCallback?: (reason: any) => AV$IPromise<U>
    ): AV$IPromise<T>;
    then<U>(
      resolvedCallback: (value: T) => U,
      rejectedCallback?: (reason: any) => AV$IPromise<U>
    ): AV$IPromise<U>;
    then<U>(
      resolvedCallback: (value: T) => U,
      rejectedCallback?: (reason: any) => U
    ): AV$IPromise<U>;
  }

  declare class AV$Promise<T> {
    static as<U>(resolvedValue: U): AV$Promise<U>;
    static error<U>(error: U): AV$Promise<U>;
    static is(possiblePromise: any): Boolean;
    static when(promises: AV$Promise<any>[]): AV$Promise<any>;
    always(callback: Function): AV$Promise<T>;
    done(callback: Function): AV$Promise<T>;
    fail(callback: Function): AV$Promise<T>;
    reject(error: any): void;
    resolve(result: any): void;
    then<U>(
      resolvedCallback: (value: T) => AV$Promise<U>,
      rejectedCallback?: (reason: any) => AV$Promise<U>
    ): AV$IPromise<T>;
    then<U>(
      resolvedCallback: (value: T) => U,
      rejectedCallback?: (reason: any) => AV$IPromise<U>
    ): AV$IPromise<T>;
    then<U>(
      resolvedCallback: (value: T) => U,
      rejectedCallback?: (reason: any) => U
    ): AV$IPromise<T>;
  }

  declare interface AV$IBaseObject {
    toJSON(): any;
  }

  declare class AV$BaseObject mixins IBaseObject {
    toJSON(): any;
  }

  /**
   * Creates a new ACL.
   * If no argument is given, the ACL has no permissions for anyone.
   * If the argument is a AV.User, the ACL will have read and write
   *    permission for only that user.
   * If the argument is any other JSON object, that object will be interpretted
   *    as a serialized ACL created with toJSON().
   * @see AV.Object#setACL
   * @class <p>An ACL, or Access Control List can be added to any
   * <code>AV.Object</code> to restrict access to only a subset of users
   * of your application.</p>
   */
  declare class AV$ACL mixins BaseObject {
    permissionsById: any;
    constructor(arg1?: any): this;
    setPublicReadAccess(allowed: boolean): void;
    getPublicReadAccess(): boolean;
    setPublicWriteAccess(allowed: boolean): void;
    getPublicWriteAccess(): boolean;
    setReadAccess(userId: AV$User, allowed: boolean): void;
    getReadAccess(userId: AV$User): boolean;
    setReadAccess(userId: string, allowed: boolean): void;
    getReadAccess(userId: string): boolean;
    setRoleReadAccess(role: AV$Role, allowed: boolean): void;
    setRoleReadAccess(role: string, allowed: boolean): void;
    getRoleReadAccess(role: AV$Role): boolean;
    getRoleReadAccess(role: string): boolean;
    setRoleWriteAccess(role: AV$Role, allowed: boolean): void;
    setRoleWriteAccess(role: string, allowed: boolean): void;
    getRoleWriteAccess(role: AV$Role): boolean;
    getRoleWriteAccess(role: string): boolean;
    setWriteAccess(userId: AV$User, allowed: boolean): void;
    setWriteAccess(userId: string, allowed: boolean): void;
    getWriteAccess(userId: AV$User): boolean;
    getWriteAccess(userId: string): boolean;
  }

  /**
   * A AV.File is a local representation of a file that is saved to the AV
   * cloud.
   * @class
   * @param {String} name The file's name. This will be prefixed by a unique
   * value once the file has finished saving. The file name must begin with
   * an alphanumeric character, and consist of alphanumeric characters,
   * periods, spaces, underscores, or dashes.
   * @param {Array} data The data for the file, as either:
   * 1. an Array of byte value Numbers, or
   * 2. an Object like { base64: "..." } with a base64-encoded String.
   * 3. a File object selected with a file upload control. (3) only works
   * in Firefox 3.6+, Safari 6.0.2+, Chrome 7+, and IE 10+.
   * For example:<pre>
   * var fileUploadControl = $("#profilePhotoFileUpload")[0];
   * if (fileUploadControl.files.length > 0) {
   * var file = fileUploadControl.files[0];
   * var name = "photo.jpg";
   * var AVFile = new AV.File(name, file);
   * AVFile.save().then(function() {
   * // The file has been saved to AV.
   * }, function(error) {
   * // The file either could not be read, or could not be saved to AV.
   * });
   * }</pre>
   * @param {String} type Optional Content-Type header to use for the file. If
   * this is omitted, the content type will be inferred from the name's
   * extension.
   */
  declare class AV$File {
    constructor(name: string, data: any, type?: string): this;
    name(): string;
    url(): string;
    save<T>(options?: AV$SuccessFailureOptions): AV$Promise<T>;
  }

  /**
   * Creates a new GeoPoint with any of the following forms:<br>
   *    <pre>
   *    new GeoPoint(otherGeoPoint)
   *    new GeoPoint(30, 30)
   *    new GeoPoint([30, 30])
   *    new GeoPoint({latitude: 30, longitude: 30})
   *    new GeoPoint()  // defaults to (0, 0)
   *    </pre>
   * @class <p>Represents a latitude / longitude point that may be associated
   * with a key in a AVObject or used as a reference point for geo queries.
   * This allows proximity-based queries on the key.</p>
   *
   * <p>Only one key in a class may contain a GeoPoint.</p>
   *
   * <p>Example:<pre>
   * var point = new AV.GeoPoint(30.0, -20.0);
   * var object = new AV.Object("PlaceObject");
   * object.set("location", point);
   * object.save();</pre></p>
   */
  declare class AV$GeoPoint mixins BaseObject {
    latitude: number;
    longitude: number;
    constructor(arg1?: any, arg2?: any): this;
    current(options?: AV$SuccessFailureOptions): AV$GeoPoint;
    radiansTo(point: AV$GeoPoint): number;
    kilometersTo(point: AV$GeoPoint): number;
    milesTo(point: AV$GeoPoint): number;
  }

  /**
   * A class that is used to access all of the children of a many-to-many relationship.
   * Each instance of AV.Relation is associated with a particular parent object and key.
   */
  declare class AV$Relation mixins BaseObject {
    parent: AV$Object;
    key: string;
    targetClassName: string;
    constructor(parent?: AV$Object, key?: string): this;
    add(object: AV$Object): void;
    query(): AV$Query;
    remove(object: AV$Object): void;
  }

  /**
   * Creates a new model with defined attributes. A client id (cid) is
   * automatically generated and assigned for you.
   *
   * <p>You won't normally call this method directly.  It is recommended that
   * you use a subclass of <code>AV.Object</code> instead, created by calling
   * <code>extend</code>.</p>
   *
   * <p>However, if you don't want to use a subclass, or aren't sure which
   * subclass is appropriate, you can use this form:<pre>
   *      var object = new AV.Object("ClassName");
   * </pre>
   * That is basically equivalent to:<pre>
   *      var MyClass = AV.Object.extend("ClassName");
   *      var object = new MyClass();
   * </pre></p>
   * @param {AV$Object} attributes The initial set of data to store in the object.
   * @param {AV$Object} options A set of Backbone-like options for creating the
   * object.  The only option currently supported is "collection".
   * @see AV.Object.extend
   * @class <p>The fundamental unit of AV data, which implements the Backbone Model
   * interface.</p>
   */
  declare class AV$Object mixins BaseObject {
    id: any;
    createdAt: any;
    updatedAt: any;
    attributes: any;
    cid: string;
    changed: boolean;
    className: string;
    constructor(className?: string, options?: any): this;
    constructor(attributes?: string[], options?: any): this;
    static extend(className: string, protoProps?: any, classProps?: any): any;
    static fetchAll<T>(
      list: AV$Object[],
      options: AV$SuccessFailureOptions
    ): AV$Promise<T>;
    static fetchAllIfNeeded<T>(
      list: AV$Object[],
      options: AV$SuccessFailureOptions
    ): AV$Promise<T>;
    static destroyAll<T>(
      list: AV$Object[],
      options?: Object$DestroyAllOptions
    ): AV$Promise<T>;
    static saveAll<T>(
      list: AV$Object[],
      options?: Object$SaveAllOptions
    ): AV$Promise<T>;
    initialize(): void;
    add(attr: string, item: any): AV$Object;
    addUnique(attr: string, item: any): any;
    change(options: any): AV$Object;
    changedAttributes(diff: any): boolean;
    clear(options: any): any;
    clone(): AV$Object;
    destroy<T>(options?: Object$DestroyOptions): AV$Promise<T>;
    dirty(attr: String): boolean;
    dirtyKeys(): string[];
    escape(attr: string): string;
    existed(): boolean;
    fetch<T>(options?: Object$FetchOptions): AV$Promise<T>;
    get(attr: string): any;
    getACL(): AV$ACL;
    getObjectId(): string;
    has(attr: string): boolean;
    hasChanged(attr: string): boolean;
    increment(attr: string, amount?: number): any;
    isValid(): boolean;
    op(attr: string): any;
    previous(attr: string): any;
    previousAttributes(): any;
    relation(attr: string): AV$Relation;
    remove(attr: string, item: any): any;
    save<T>(
      options?: Object$SaveOptions,
      arg2?: any,
      arg3?: any
    ): AV$Promise<T>;
    set(key: string, value: any, options?: Object$SetOptions): boolean;
    setACL(acl: AV$ACL, options?: AV$SuccessFailureOptions): boolean;
    unset(attr: string, options?: any): any;
    validate(attrs: any, options?: AV$SuccessFailureOptions): boolean;
  }

  declare type AV$Object$DestroyOptions = {} & SuccessFailureOptions &
    WaitOption &
    UseMasterKeyOption;

  declare type AV$Object$DestroyAllOptions = {} & SuccessFailureOptions &
    UseMasterKeyOption;

  declare type AV$Object$FetchOptions = {} & SuccessFailureOptions &
    UseMasterKeyOption;

  declare type AV$Object$SaveOptions = {} & SuccessFailureOptions &
    SilentOption &
    UseMasterKeyOption &
    WaitOption;

  declare type AV$Object$SaveAllOptions = {} & SuccessFailureOptions &
    UseMasterKeyOption;

  declare type AV$Object$SetOptions = {
    promise?: any
  } & ErrorOption &
    SilentOption;

  /**
   * Every AV application installed on a device registered for
   * push notifications has an associated Installation object.
   */
  declare class AV$Installation mixins Object {
    badge: any;
    channels: string[];
    timeZone: any;
    deviceType: string;
    pushType: string;
    installationId: string;
    deviceToken: string;
    channelUris: string;
    appName: string;
    appVersion: string;
    AVVersion: string;
    appIdentifier: string;
  }

  /**
   * Creates a new instance with the given models and options.  Typically, you
   * will not call this method directly, but will instead make a subclass using
   * <code>AV.Collection.extend</code>.
   * @param {Array} models An array of instances of <code>AV.Object</code>.
   * @param {AV$Object} options An optional object with Backbone-style options.
   * Valid options are:<ul>
   * <li>model: The AV.Object subclass that this collection contains.
   * <li>query: An instance of AV.Query to use when fetching items.
   * <li>comparator: A string property name or function to sort by.
   * </ul>
   * @see AV.Collection.extend
   * @class <p>Provides a standard collection class for our sets of models, ordered
   * or unordered.  For more information, see the
   * <a href="http://documentcloud.github.com/backbone/#Collection">Backbone
   * documentation</a>.</p>
   */
  declare class AV$Collection<T> mixins Events, IBaseObject {
    model: AV$Object;
    models: AV$Object[];
    query: AV$Query;
    comparator: (object: AV$Object) => any;
    constructor(models?: AV$Object[], options?: Collection$Options): this;
    static extend(instanceProps: any, classProps: any): any;
    initialize(): void;
    add(models: any[], options?: Collection$AddOptions): AV$Collection<T>;
    at(index: number): AV$Object;
    fetch(options?: Collection$FetchOptions): AV$Promise<T>;
    create(model: AV$Object, options?: Collection$CreateOptions): AV$Object;
    get(id: string): AV$Object;
    getByCid(cid: any): any;
    pluck(attr: string): any[];
    remove(model: any, options?: Collection$RemoveOptions): AV$Collection<T>;
    remove(models: any[], options?: Collection$RemoveOptions): AV$Collection<T>;
    reset(models: any[], options?: Collection$ResetOptions): AV$Collection<T>;
    sort(options?: Collection$SortOptions): AV$Collection<T>;
    toJSON(): any;
  }

  declare interface AV$Collection$Options {
    model?: AV$Object;
    query?: AV$Query;
    comparator?: string;
  }

  declare type AV$Collection$AddOptions = {
    /**
     * The index at which to add the models.
     */
    at?: number
  } & SilentOption;

  declare type AV$Collection$CreateOptions = {} & SuccessFailureOptions &
    WaitOption &
    SilentOption &
    UseMasterKeyOption;

  declare type AV$Collection$FetchOptions = {} & SuccessFailureOptions &
    UseMasterKeyOption;

  declare type AV$Collection$RemoveOptions = {} & SilentOption;

  declare type AV$Collection$ResetOptions = {} & SilentOption;

  declare type AV$Collection$SortOptions = {} & SilentOption;

  /**
   * @class <p>AV.Events is a fork of Backbone's Events module, provided for your
   * convenience.</p>
   *
   * <p>A module that can be mixed in to any object in order to provide
   * it with custom events. You may bind callback functions to an event
   * with `on`, or remove these functions with `off`.
   * Triggering an event fires all callbacks in the order that `on` was
   * called.
   *
   * <pre>
   * var object = {};
   * _.extend(object, AV.Events);
   * object.on('expand', function(){ alert('expanded'); });
   * object.trigger('expand');</pre></p>
   *
   * <p>For more information, see the
   * <a href="http://documentcloud.github.com/backbone/#Events">Backbone
   * documentation</a>.</p>
   */
  declare class AV$Events {
    static off(events: string[], callback?: Function, context?: any): AV$Events;
    static on(events: string[], callback?: Function, context?: any): AV$Events;
    static trigger(events: string[]): AV$Events;
    static bind(): AV$Events;
    static unbind(): AV$Events;
    on(eventName: string, callback?: Function, context?: any): AV$Events;
    off(eventName?: string, callback?: Function, context?: any): AV$Events;
    trigger(eventName: string, ...args: any[]): AV$Events;
    bind(eventName: string, callback: Function, context?: any): AV$Events;
    unbind(eventName?: string, callback?: Function, context?: any): AV$Events;
  }

  /**
   * Creates a new AV AV.Query for the given AV.Object subclass.
   * @param objectClass -
   * An instance of a subclass of AV.Object, or a AV className string.
   * @class <p>AV.Query defines a query that is used to fetch AV.Objects. The
   * most common use case is finding all objects that match a query through the
   * <code>find</code> method. For example, this sample code fetches all objects
   * of class <code>MyClass</code>. It calls a different function depending on
   * whether the fetch succeeded or not.
   *
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.find({
   * success: function(results) {
   * // results is an array of AV.Object.
   * },
   *
   * error: function(error) {
   * // error is an instance of AV.Error.
   * }
   * });</pre></p>
   *
   * <p>A AV.Query can also be used to retrieve a single object whose id is
   * known, through the get method. For example, this sample code fetches an
   * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
   * different function depending on whether the fetch succeeded or not.
   *
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.get(myId, {
   * success: function(object) {
   * // object is an instance of AV.Object.
   * },
   *
   * error: function(object, error) {
   * // error is an instance of AV.Error.
   * }
   * });</pre></p>
   *
   * <p>A AV.Query can also be used to count the number of objects that match
   * the query without retrieving all of those objects. For example, this
   * sample code counts the number of objects of the class <code>MyClass</code>
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.count({
   * success: function(number) {
   * // There are number instances of MyClass.
   * },
   *
   * error: function(error) {
   * // error is an instance of AV.Error.
   * }
   * });</pre></p>
   */
  declare class AV$Query mixins BaseObject {
    objectClass: any;
    className: string;
    constructor(objectClass: any): this;
    static and(...var_args: AV$Query[]): AV$Query;
    static or(...var_args: AV$Query[]): AV$Query;
    addAscending(key: string): AV$Query;
    addAscending(key: string[]): AV$Query;
    addDescending(key: string): AV$Query;
    addDescending(key: string[]): AV$Query;
    ascending(key: string): AV$Query;
    ascending(key: string[]): AV$Query;
    collection(
      items?: AV$Object[],
      options?: Collection$Options
    ): AV$Collection<AV$Object>;
    containedIn(key: string, values: any[]): AV$Query;
    contains(key: string, substring: string): AV$Query;
    containsAll(key: string, values: any[]): AV$Query;
    count<T>(options?: Query$CountOptions): AV$Promise<T>;
    descending(key: string): AV$Query;
    descending(key: string[]): AV$Query;
    doesNotExist(key: string): AV$Query;
    doesNotMatchKeyInQuery(
      key: string,
      queryKey: string,
      query: AV$Query
    ): AV$Query;
    doesNotMatchQuery(key: string, query: AV$Query): AV$Query;
    each<T>(
      callback: Function,
      options?: AV$SuccessFailureOptions
    ): AV$Promise<T>;
    endsWith(key: string, suffix: string): AV$Query;
    equalTo(key: string, value: any): AV$Query;
    exists(key: string): AV$Query;
    find<T>(options?: Query$FindOptions): AV$Promise<T>;
    first<T>(options?: Query$FirstOptions): AV$Promise<T>;
    get(objectId: string, options?: Query$GetOptions): AV$Promise<any>;
    greaterThan(key: string, value: any): AV$Query;
    greaterThanOrEqualTo(key: string, value: any): AV$Query;
    include(key: string): AV$Query;
    include(keys: string[]): AV$Query;
    lessThan(key: string, value: any): AV$Query;
    lessThanOrEqualTo(key: string, value: any): AV$Query;
    limit(n: number): AV$Query;
    matches(key: string, regex: RegExp, modifiers: any): AV$Query;
    matchesKeyInQuery(key: string, queryKey: string, query: AV$Query): AV$Query;
    matchesQuery(key: string, query: AV$Query): AV$Query;
    near(key: string, point: AV$GeoPoint): AV$Query;
    notContainedIn(key: string, values: any[]): AV$Query;
    notEqualTo(key: string, value: any): AV$Query;
    select(...keys: string[]): AV$Query;
    skip(n: number): AV$Query;
    startsWith(key: string, prefix: string): AV$Query;
    withinGeoBox(
      key: string,
      southwest: AV$GeoPoint,
      northeast: AV$GeoPoint
    ): AV$Query;
    withinKilometers(
      key: string,
      point: AV$GeoPoint,
      maxDistance: number
    ): AV$Query;
    withinMiles(key: string, point: AV$GeoPoint, maxDistance: number): AV$Query;
    withinRadians(
      key: string,
      point: AV$GeoPoint,
      maxDistance: number
    ): AV$Query;
  }

  declare type AV$Query$CountOptions = {} & SuccessFailureOptions &
    UseMasterKeyOption;

  declare type AV$Query$FindOptions = {} & SuccessFailureOptions &
    UseMasterKeyOption;

  declare type AV$Query$FirstOptions = {} & SuccessFailureOptions &
    UseMasterKeyOption;

  declare type AV$Query$GetOptions = {} & SuccessFailureOptions &
    UseMasterKeyOption;

  /**
   * Represents a Role on the AV server. Roles represent groupings of
   * Users for the purposes of granting permissions (e.g. specifying an ACL
   * for an Object). Roles are specified by their sets of child users and
   * child roles, all of which are granted any permissions that the parent
   * role has.
   *
   * <p>Roles must have a name (which cannot be changed after creation of the
   * role), and must specify an ACL.</p>
   * @class A AV.Role is a local representation of a role persisted to the AV
   * cloud.
   */
  declare class AV$Role mixins Object {
    constructor(name: string, acl: AV$ACL): this;
    getRoles(): AV$Relation;
    getUsers(): AV$Relation;
    getName(): string;
    setName(name: string, options?: AV$SuccessFailureOptions): any;
  }

  /**
   * @class <p>A AV.User object is a local representation of a user persisted to the
   * AV cloud. This class is a subclass of a AV.Object, and retains the
   * same functionality of a AV.Object, but also extends it with various
   * user specific methods, like authentication, signing up, and validation of
   * uniqueness.</p>
   */
  declare class AV$User mixins Object {
    static current(): AV$User;
    static signUp<T>(
      username: string,
      password: string,
      attrs: any,
      options?: AV$SuccessFailureOptions
    ): AV$Promise<T>;
    static logIn<T>(
      username: string,
      password: string,
      options?: AV$SuccessFailureOptions
    ): AV$Promise<T>;
    static logOut<T>(): AV$Promise<T>;
    static allowCustomUserClass(isAllowed: boolean): void;
    static become<T>(
      sessionToken: string,
      options?: AV$SuccessFailureOptions
    ): AV$Promise<T>;
    static requestPasswordReset<T>(
      email: string,
      options?: AV$SuccessFailureOptions
    ): AV$Promise<T>;
    signUp<T>(attrs: any, options?: AV$SuccessFailureOptions): AV$Promise<T>;
    logIn<T>(options?: AV$SuccessFailureOptions): AV$Promise<T>;
    fetch<T>(options?: AV$SuccessFailureOptions): AV$Promise<T>;
    save<T>(arg1?: any, arg2?: any, arg3?: any): AV$Promise<T>;
    authenticated(): boolean;
    isCurrent(): boolean;
    getEmail(): string;
    setEmail(email: string, options: AV$SuccessFailureOptions): boolean;
    getUsername(): string;
    setUsername(username: string, options?: AV$SuccessFailureOptions): boolean;
    setPassword(password: string, options?: AV$SuccessFailureOptions): boolean;
    getSessionToken(): string;
  }

  declare var npm$namespace$AV$Analytics: {
    track: typeof AV$Analytics$track
  };
  declare function AV$Analytics$track<T>(
    name: string,
    dimensions: any
  ): AV$Promise<T>;

  declare class AV$Error {
    code: AV$ErrorCode;
    message: string;
    constructor(code: AV$ErrorCode, message: string): this;
  }

  declare var AV$ErrorCode: {|
    +OTHER_CAUSE: -1, // -1
    +INTERNAL_SERVER_ERROR: 1, // 1
    +CONNECTION_FAILED: 100, // 100
    +OBJECT_NOT_FOUND: 101, // 101
    +INVALID_QUERY: 102, // 102
    +INVALID_CLASS_NAME: 103, // 103
    +MISSING_OBJECT_ID: 104, // 104
    +INVALID_KEY_NAME: 105, // 105
    +INVALID_POINTER: 106, // 106
    +INVALID_JSON: 107, // 107
    +COMMAND_UNAVAILABLE: 108, // 108
    +NOT_INITIALIZED: 109, // 109
    +INCORRECT_TYPE: 111, // 111
    +INVALID_CHANNEL_NAME: 112, // 112
    +PUSH_MISCONFIGURED: 115, // 115
    +OBJECT_TOO_LARGE: 116, // 116
    +OPERATION_FORBIDDEN: 119, // 119
    +CACHE_MISS: 120, // 120
    +INVALID_NESTED_KEY: 121, // 121
    +INVALID_FILE_NAME: 122, // 122
    +INVALID_ACL: 123, // 123
    +TIMEOUT: 124, // 124
    +INVALID_EMAIL_ADDRESS: 125, // 125
    +MISSING_CONTENT_TYPE: 126, // 126
    +MISSING_CONTENT_LENGTH: 127, // 127
    +INVALID_CONTENT_LENGTH: 128, // 128
    +FILE_TOO_LARGE: 129, // 129
    +FILE_SAVE_ERROR: 130, // 130
    +DUPLICATE_VALUE: 137, // 137
    +INVALID_ROLE_NAME: 139, // 139
    +EXCEEDED_QUOTA: 140, // 140
    +SCRIPT_FAILED: 141, // 141
    +VALIDATION_ERROR: 142, // 142
    +INVALID_IMAGE_DATA: 150, // 150
    +UNSAVED_FILE_ERROR: 151, // 151
    +INVALID_PUSH_TIME_ERROR: 152, // 152
    +FILE_DELETE_ERROR: 153, // 153
    +REQUEST_LIMIT_EXCEEDED: 155, // 155
    +INVALID_EVENT_NAME: 160, // 160
    +USERNAME_MISSING: 200, // 200
    +PASSWORD_MISSING: 201, // 201
    +USERNAME_TAKEN: 202, // 202
    +EMAIL_TAKEN: 203, // 203
    +EMAIL_MISSING: 204, // 204
    +EMAIL_NOT_FOUND: 205, // 205
    +SESSION_MISSING: 206, // 206
    +MUST_CREATE_USER_THROUGH_SIGNUP: 207, // 207
    +ACCOUNT_ALREADY_LINKED: 208, // 208
    +INVALID_SESSION_TOKEN: 209, // 209
    +LINKED_ID_MISSING: 250, // 250
    +INVALID_LINKED_SESSION: 251, // 251
    +UNSUPPORTED_SERVICE: 252, // 252
    +AGGREGATE_ERROR: 600, // 600
    +FILE_READ_ERROR: 601, // 601
    +X_DOMAIN_REQUEST: 602 // 602
  |};

  declare type AV$Op$BaseOperation = {
    objects(): any[]
  } & IBaseObject;

  declare type AV$Op$Add = {} & BaseOperation;

  declare type AV$Op$AddUnique = {} & BaseOperation;

  declare type AV$Op$Increment = {
    amount: number
  } & IBaseObject;

  declare type AV$Op$Relation = {
    added(): AV$Object[],
    removed: AV$Object[]
  } & IBaseObject;

  declare type AV$Op$Set = {
    value(): any
  } & IBaseObject;

  declare type AV$Op$Unset = {} & IBaseObject;

  declare var npm$namespace$AV$Push: {
    send: typeof AV$Push$send
  };
  declare function AV$Push$send<T>(
    data: Push$PushData,
    options?: Push$SendOptions
  ): AV$Promise<T>;

  declare interface AV$Push$PushData {
    channels?: string[];
    push_time?: Date;
    expiration_time?: Date;
    expiration_interval?: number;
    where?: AV$Query;
    data?: any;
    alert?: string;
    badge?: string;
    sound?: string;
    title?: string;
  }

  declare interface AV$Push$SendOptions {
    success?: () => void;
    error?: (error: AV$Error) => void;
  }

  /**
   * Call this method first to set up your authentication tokens for AV.
   * @param {String} applicationId Your Application ID.
   * @param {String} applicationKey Your Application Key.
   * @param {String} masterKey (optional) Your Application Master Key. (Node.js only!)
   */
  declare function AV$initialize(
    applicationId: string,
    applicationKey: string,
    masterKey?: string
  ): void;

  declare export default typeof AV;
}
declare module "leanengine" {
  declare export default typeof alias;
}
