declare module "sencha_touch" {
  declare var npm$namespace$Ext: {
    application: typeof Ext$application,
    apply: typeof Ext$apply,
    applyIf: typeof Ext$applyIf,
    bind: typeof Ext$bind,
    callback: typeof Ext$callback,
    clean: typeof Ext$clean,
    clone: typeof Ext$clone,
    copyTo: typeof Ext$copyTo,
    create: typeof Ext$create,
    createByAlias: typeof Ext$createByAlias,
    createInterceptor: typeof Ext$createInterceptor,
    createWidget: typeof Ext$createWidget,
    decode: typeof Ext$decode,
    defer: typeof Ext$defer,
    define: typeof Ext$define,
    destroy: typeof Ext$destroy,
    dispatch: typeof Ext$dispatch,
    each: typeof Ext$each,
    encode: typeof Ext$encode,
    exclude: typeof Ext$exclude,
    extend: typeof Ext$extend,
    factory: typeof Ext$factory,
    flatten: typeof Ext$flatten,
    fly: typeof Ext$fly,
    get: typeof Ext$get,
    getBody: typeof Ext$getBody,
    getClass: typeof Ext$getClass,
    getClassName: typeof Ext$getClassName,
    getCmp: typeof Ext$getCmp,
    getDisplayName: typeof Ext$getDisplayName,
    getDoc: typeof Ext$getDoc,
    getDom: typeof Ext$getDom,
    getHead: typeof Ext$getHead,
    getOrientation: typeof Ext$getOrientation,
    getStore: typeof Ext$getStore,
    htmlDecode: typeof Ext$htmlDecode,
    htmlEncode: typeof Ext$htmlEncode,
    id: typeof Ext$id,
    isArray: typeof Ext$isArray,
    isBoolean: typeof Ext$isBoolean,
    isDate: typeof Ext$isDate,
    isDefined: typeof Ext$isDefined,
    isElement: typeof Ext$isElement,
    isEmpty: typeof Ext$isEmpty,
    isFunction: typeof Ext$isFunction,
    isIterable: typeof Ext$isIterable,
    isMSDate: typeof Ext$isMSDate,
    isNumber: typeof Ext$isNumber,
    isNumeric: typeof Ext$isNumeric,
    isObject: typeof Ext$isObject,
    isPrimitive: typeof Ext$isPrimitive,
    isString: typeof Ext$isString,
    isTextNode: typeof Ext$isTextNode,
    iterate: typeof Ext$iterate,
    max: typeof Ext$max,
    mean: typeof Ext$mean,
    merge: typeof Ext$merge,
    min: typeof Ext$min,
    namespace: typeof Ext$namespace,
    ns: typeof Ext$ns,
    num: typeof Ext$num,
    onReady: typeof Ext$onReady,
    override: typeof Ext$override,
    pass: typeof Ext$pass,
    pluck: typeof Ext$pluck,
    preg: typeof Ext$preg,
    query: typeof Ext$query,
    redirect: typeof Ext$redirect,
    reg: typeof Ext$reg,
    regApplication: typeof Ext$regApplication,
    regController: typeof Ext$regController,
    regLayout: typeof Ext$regLayout,
    regModel: typeof Ext$regModel,
    regStore: typeof Ext$regStore,
    removeNode: typeof Ext$removeNode,
    repaint: typeof Ext$repaint,
    require: typeof Ext$require,
    select: typeof Ext$select,
    setup: typeof Ext$setup,
    sum: typeof Ext$sum,
    syncRequire: typeof Ext$syncRequire,
    toArray: typeof Ext$toArray,
    type: typeof Ext$type,
    typeOf: typeof Ext$typeOf,
    unique: typeof Ext$unique,
    urlAppend: typeof Ext$urlAppend,
    urlDecode: typeof Ext$urlDecode,
    urlEncode: typeof Ext$urlEncode,
    valueFrom: typeof Ext$valueFrom,
    widget: typeof Ext$widget,
    SSL_SECURE_URL: typeof Ext$SSL_SECURE_URL,
    emptyFn: typeof Ext$emptyFn,
    enableGarbageCollector: typeof Ext$enableGarbageCollector,
    enableListenerCollection: typeof Ext$enableListenerCollection,
    enumerables: typeof Ext$enumerables,
    frameStartTime: typeof Ext$frameStartTime,
    isSecure: typeof Ext$isSecure,
    version: typeof Ext$version,

    Ajax: typeof Ext$Ajax,
    Anim: typeof Ext$Anim,
    AnimationQueue: typeof Ext$AnimationQueue,
    Anims: typeof Ext$Anims,
    Array: typeof Ext$Array,
    Base: typeof Ext$Base,
    Browser: typeof Ext$Browser,
    ClassManager: typeof Ext$ClassManager,
    ComponentManager: typeof Ext$ComponentManager,
    ComponentMgr: typeof Ext$ComponentMgr,
    ComponentQuery: typeof Ext$ComponentQuery,
    ModelMgr: typeof Ext$ModelMgr,
    ModelManager: typeof Ext$ModelManager,
    StoreMgr: typeof Ext$StoreMgr,
    StoreManager: typeof Ext$StoreManager,
    Date: typeof Ext$Date,
    DateExtras: typeof Ext$DateExtras,
    Direct: typeof Ext$Direct,
    Element: typeof Ext$Element,
    DomQuery: typeof Ext$DomQuery,
    EventManager: typeof Ext$EventManager,
    Feature: typeof Ext$Feature,
    Function: typeof Ext$Function,
    JSON: typeof Ext$JSON,
    Loader: typeof Ext$Loader,
    Logger: typeof Ext$Logger,
    Msg: typeof Ext$Msg,
    Number: typeof Ext$Number,
    Object: typeof Ext$Object,
    Os: typeof Ext$Os,
    Router: typeof Ext$Router,
    String: typeof Ext$String,
    TaskQueue: typeof Ext$TaskQueue,
    Template: typeof Ext$Template,
    Version: typeof Ext$Version,
    Viewport: typeof Ext$Viewport,
    XTemplate: typeof Ext$XTemplate,
    device: typeof npm$namespace$Ext$device,
    core: typeof npm$namespace$Ext$core,
    draw: typeof npm$namespace$Ext$draw,
    layout: typeof npm$namespace$Ext$layout
  };
  declare export type Ext$IAbstractComponent = {} & Ext$IEvented;

  declare export type Ext$IAbstractManager = {
    /**
     * [Property] (Ext.util.HashMap)
     */
    all?: util$IHashMap,

    /**
     * [Method] Creates and returns an instance of whatever this manager manages based on the supplied type and config object
     * @param config Object The config object.
     * @param defaultType String If no type is discovered in the config object, we fall back to this type.
     * @returns Object The instance of whatever this manager is managing.
     */
    create?: (config?: any, defaultType?: string) => any,

    /**
     * [Method] Executes the specified function once for each item in the collection
     * @param fn Function The function to execute.
     * @param scope Object The scope to execute in.
     */
    each?: (fn?: any, scope?: any) => void,

    /**
     * [Method] Returns an item by id
     * @param id String The id of the item.
     * @returns Object The item, undefined if not found.
     */
    get?: (id?: string) => any,

    /**
     * [Method] Gets the number of items in the collection
     * @returns Number The number of items in the collection.
     */
    getCount?: () => number,

    /**
     * [Method] Checks if an item type is registered
     * @param type String The mnemonic string by which the class may be looked up.
     * @returns Boolean Whether the type is registered.
     */
    isRegistered?: (type?: string) => boolean,

    /**
     * [Method] Registers a function that will be called when an item with the specified id is added to the manager
     * @param id String The item id.
     * @param fn Function The callback function. Called with a single parameter, the item.
     * @param scope Object The scope (this reference) in which the callback is executed. Defaults to the item.
     */
    onAvailable?: (id?: string, fn?: any, scope?: any) => void,

    /**
     * [Method] Registers an item to be managed
     * @param item Object The item to register.
     */
    register?: (item?: any) => void,

    /**
     * [Method] Registers a new item constructor keyed by a type key
     * @param type String The mnemonic string by which the class may be looked up.
     * @param cls Function The new instance class.
     */
    registerType?: (type?: string, cls?: any) => void,

    /**
     * [Method] Unregisters an item by removing it from this manager
     * @param item Object The item to unregister.
     */
    unregister?: (item?: any) => void
  } & Ext$IBase;

  declare export type Ext$IAbstractPlugin = {} & Ext$IBase;

  declare export type Ext$IActionSheet = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Number/String)
     */
    bottom?: any,

    /**
     * [Config Option] (String)
     */
    defaultType?: string,

    /**
     * [Config Option] (Number/String)
     */
    height?: any,

    /**
     * [Config Option] (Number/String)
     */
    left?: any,

    /**
     * [Config Option] (Number/String)
     */
    right?: any,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of bottom
     * @returns Number
     */
    getBottom?: () => number,

    /**
     * [Method] Returns the value of defaultType
     * @returns String
     */
    getDefaultType?: () => string,

    /**
     * [Method] Returns the value of height
     * @returns String
     */
    getHeight?: () => string,

    /**
     * [Method] Returns the value of left
     * @returns Number
     */
    getLeft?: () => number,

    /**
     * [Method] Returns the value of right
     * @returns Number
     */
    getRight?: () => number,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of bottom
     * @param bottom Number The new value.
     */
    setBottom?: (bottom?: number) => void,

    /**
     * [Method] Sets the value of defaultType
     * @param defaultType String The new value.
     */
    setDefaultType?: (defaultType?: string) => void,

    /**
     * [Method] Sets the value of height
     * @param height String The new value.
     */
    setHeight?: (height?: string) => void,

    /**
     * [Method] Sets the value of left
     * @param left Number The new value.
     */
    setLeft?: (left?: number) => void,

    /**
     * [Method] Sets the value of right
     * @param right Number The new value.
     */
    setRight?: (right?: number) => void
  } & Ext$ISheet;

  declare export type Ext$IAjax = {} & undefined.IConnection;

  declare export class Ext$Ajax {
    /**
     * [Property] (Boolean)
     */
    static autoAbort: boolean;

    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Aborts any outstanding request
     * @param request Object Defaults to the last request.
     */
    static abort(request?: any): void;

    /**
     * [Method] Aborts all outstanding requests
     */
    static abortAll(): void;

    /**
     * [Method] Appends an after event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static addAfterListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Appends a before event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static addBeforeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Adds the specified events to the list of events which this Observable may fire
     * @param eventNames Object/String... Either an object with event names as properties with a value of true or the first event name string if multiple event names are being passed as separate parameters.
     */
    static addEvents(eventNames?: any): void;

    /**
     * [Method] Appends an event handler to this object
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    static addListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    static addManagedListener(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method] Removes all listeners for this object
     */
    static clearListeners(): void;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Enables events fired by this Observable to bubble up an owner hierarchy by calling this getBubbleTarget  if present
     * @param events String/String[] The event name to bubble, or an Array of event names.
     */
    static enableBubble(events?: any): void;

    /**
     * [Method] Fires the specified event with the passed parameters and execute a function action at the end if there are no liste
     * @param eventName String The name of the event to fire.
     * @param args Array Arguments to pass to handers.
     * @param fn Function Action.
     * @param scope Object Scope of fn.
     * @returns Object
     */
    static fireAction(
      eventName?: string,
      args?: any[],
      fn?: any,
      scope?: any
    ): any;

    /**
     * [Method] Fires the specified event with the passed parameters minus the event name plus the options object passed to addList
     * @param eventName String The name of the event to fire.
     * @param args Object... Variable number of parameters are passed to handlers.
     * @returns Boolean Returns false if any of the handlers return false.
     */
    static fireEvent(eventName: string, ...args: any[]): boolean;

    /**
     * [Method] Returns the value of async
     * @returns Boolean
     */
    static getAsync(): boolean;

    /**
     * [Method] Returns the value of autoAbort
     * @returns Boolean
     */
    static getAutoAbort(): boolean;

    /**
     * [Method] Returns the value of bubbleEvents
     * @returns String/String[]
     */
    static getBubbleEvents(): any;

    /**
     * [Method] Returns the value of defaultHeaders
     * @returns Object
     */
    static getDefaultHeaders(): any;

    /**
     * [Method] Returns the value of defaultPostHeader
     * @returns String
     */
    static getDefaultPostHeader(): string;

    /**
     * [Method] Returns the value of defaultXhrHeader
     * @returns String
     */
    static getDefaultXhrHeader(): string;

    /**
     * [Method] Returns the value of disableCaching
     * @returns Boolean
     */
    static getDisableCaching(): boolean;

    /**
     * [Method] Returns the value of disableCachingParam
     * @returns String
     */
    static getDisableCachingParam(): string;

    /**
     * [Method] Returns the value of extraParams
     * @returns Object
     */
    static getExtraParams(): any;

    /**
     * [Method] Retrieves the id of this component
     * @returns String id
     */
    static getId(): string;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Returns the value of listeners
     * @returns Object
     */
    static getListeners(): any;

    /**
     * [Method] Returns the value of method
     * @returns String
     */
    static getMethod(): string;

    /**
     * [Method] Returns the value of password
     * @returns String
     */
    static getPassword(): string;

    /**
     * [Method] Returns the value of timeout
     * @returns Number
     */
    static getTimeout(): number;

    /**
     * [Method] Returns the value of url
     * @returns String
     */
    static getUrl(): string;

    /**
     * [Method] Returns the value of useDefaultHeader
     * @returns Boolean
     */
    static getUseDefaultHeader(): boolean;

    /**
     * [Method] Returns the value of useDefaultXhrHeader
     * @returns Boolean
     */
    static getUseDefaultXhrHeader(): boolean;

    /**
     * [Method] Returns the value of username
     * @returns String
     */
    static getUsername(): string;

    /**
     * [Method] Checks to see if this object has any listeners for a specified event
     * @param eventName String The name of the event to check for
     * @returns Boolean True if the event is being listened for, else false
     */
    static hasListener(eventName?: string): boolean;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Determines whether this object has a request outstanding
     * @param request Object The request to check.
     * @returns Boolean True if there is an outstanding request.
     */
    static isLoading(request?: any): boolean;

    /**
     * [Method] Alias for addManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    static mon(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Alias for removeManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    static mun(object?: any, eventName?: any, fn?: any, scope?: any): void;

    /**
     * [Method] Alias for addListener
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    static on(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Alias for addAfterListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;

    /**
     * [Method] Alias for addBeforeListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static onBefore(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Checks if the response status was successful
     * @param status Number The status code.
     * @param xhr XMLHttpRequest
     * @returns Object An object containing success/status state.
     */
    static parseStatus(status?: number, xhr?: XMLHttpRequest): any;

    /**
     * [Method] Relays selected events from the specified Observable as if the events were fired by this
     * @param object Object The Observable whose events this object is to relay.
     * @param events String/Array/Object Array of event names to relay.
     * @returns Ext.mixin.Observable this
     */
    static relayEvents(object?: any, events?: any): Ext$mixin$IObservable;

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static removeAfterListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static removeBeforeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Removes an event handler
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    static removeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    static removeManagedListener(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any
    ): void;

    /**
     * [Method] Sends an HTTP request to a remote server
     * @param options Object An object which may contain the following properties: (The options object may also contain any other property which might be needed to perform post-processing in a callback because it is passed to callback functions.)
     * @returns Object/null The request object. This may be used to cancel the request.
     */
    static request(options?: any): any;

    /**
     * [Method] Resumes firing events see suspendEvents
     * @param discardQueuedEvents Boolean Pass as true to discard any queued events.
     */
    static resumeEvents(discardQueuedEvents?: boolean): void;

    /**
     * [Method] Sets the value of async
     * @param async Boolean The new value.
     */
    static setAsync(async?: boolean): void;

    /**
     * [Method] Sets the value of autoAbort
     * @param autoAbort Boolean The new value.
     */
    static setAutoAbort(autoAbort?: boolean): void;

    /**
     * [Method] Sets the value of bubbleEvents
     * @param bubbleEvents String/String[] The new value.
     */
    static setBubbleEvents(bubbleEvents?: any): void;

    /**
     * [Method] Sets the value of defaultHeaders
     * @param defaultHeaders Object The new value.
     */
    static setDefaultHeaders(defaultHeaders?: any): void;

    /**
     * [Method] Sets the value of defaultPostHeader
     * @param defaultPostHeader String The new value.
     */
    static setDefaultPostHeader(defaultPostHeader?: string): void;

    /**
     * [Method] Sets the value of defaultXhrHeader
     * @param defaultXhrHeader String The new value.
     */
    static setDefaultXhrHeader(defaultXhrHeader?: string): void;

    /**
     * [Method] Sets the value of disableCaching
     * @param disableCaching Boolean The new value.
     */
    static setDisableCaching(disableCaching?: boolean): void;

    /**
     * [Method] Sets the value of disableCachingParam
     * @param disableCachingParam String The new value.
     */
    static setDisableCachingParam(disableCachingParam?: string): void;

    /**
     * [Method] Sets the value of extraParams
     * @param extraParams Object The new value.
     */
    static setExtraParams(extraParams?: any): void;

    /**
     * [Method] Sets the value of listeners
     * @param listeners Object The new value.
     */
    static setListeners(listeners?: any): void;

    /**
     * [Method] Sets the value of method
     * @param method String The new value.
     */
    static setMethod(method?: string): void;

    /**
     * [Method] Sets various options such as the url params for the request
     * @param options Object The initial options.
     * @param scope Object The scope to execute in.
     * @returns Object The params for the request.
     */
    static setOptions(options?: any, scope?: any): any;

    /**
     * [Method] Sets the value of password
     * @param password String The new value.
     */
    static setPassword(password?: string): void;

    /**
     * [Method] Sets the value of timeout
     * @param timeout Number The new value.
     */
    static setTimeout(timeout?: number): void;

    /**
     * [Method] Sets the value of url
     * @param url String The new value.
     */
    static setUrl(url?: string): void;

    /**
     * [Method] Sets the value of useDefaultHeader
     * @param useDefaultHeader Boolean The new value.
     */
    static setUseDefaultHeader(useDefaultHeader?: boolean): void;

    /**
     * [Method] Sets the value of useDefaultXhrHeader
     * @param useDefaultXhrHeader Boolean The new value.
     */
    static setUseDefaultXhrHeader(useDefaultXhrHeader?: boolean): void;

    /**
     * [Method] Sets the value of username
     * @param username String The new value.
     */
    static setUsername(username?: string): void;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;

    /**
     * [Method] Suspends the firing of all events
     */
    static suspendEvents(): void;

    /**
     * [Method] Alias for removeListener
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    static un(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Alias for removeAfterListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;

    /**
     * [Method] Alias for removeBeforeListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static unBefore(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Uploads a form using a hidden iframe
     * @param form String/HTMLElement/Ext.Element The form to upload.
     * @param url String The url to post to.
     * @param params String Any extra parameters to pass.
     * @param options Object The initial options.
     */
    static upload(
      form?: any,
      url?: string,
      params?: string,
      options?: any
    ): void;
  }

  declare export type Ext$IAnim = {} & Ext$IBase;

  declare export class Ext$Anim {
    /**
     * [Config Option] (Function)
     */
    static after: any;

    /**
     * [Config Option] (Boolean)
     */
    static autoClear: boolean;

    /**
     * [Config Option] (Function)
     */
    static before: any;

    /**
     * [Config Option] (Number)
     */
    static delay: number;

    /**
     * [Config Option] (String)
     */
    static direction: string;

    /**
     * [Config Option] (Boolean)
     */
    static disableAnimations: boolean;

    /**
     * [Config Option] (Number)
     */
    static duration: number;

    /**
     * [Config Option] (String)
     */
    static fx$easing: string;

    /**
     * [Config Option] (Object)
     */
    static from: any;

    /**
     * [Config Option] (Boolean)
     */
    static out: boolean;

    /**
     * [Config Option] (Boolean)
     */
    static reverse: boolean;

    /**
     * [Config Option] (Object)
     */
    static scope: any;

    /**
     * [Config Option] (Object)
     */
    static to: any;

    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Initialize configuration for this class
     * @param el Object
     * @param runConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(el?: any, runConfig?: any): any;

    /**
     * [Method] Used to run an animation on a specific element
     * @param el Ext.Element/HTMLElement The element to animate.
     * @param anim String The animation type, defined in Ext.anims.
     * @param config Object The config object for the animation.
     */
    static run(el?: any, anim?: string, config?: any): void;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;
  }

  declare export type Ext$IAnimationQueue = {} & Ext$IBase;

  declare export class Ext$AnimationQueue {
    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method]
     * @param fn Function
     * @param scope Object
     * @param args Object
     */
    static start(fn?: any, scope?: any, args?: any): void;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;

    /**
     * [Method]
     * @param fn Function
     * @param scope Object
     * @param args Object
     */
    static stop(fn?: any, scope?: any, args?: any): void;
  }

  declare export interface Ext$IAnims {}

  declare export class Ext$Anims {
    /**
     * [Property] (Object)
     */
    static cube: any;

    /**
     * [Property] (Object)
     */
    static fade: any;

    /**
     * [Property] (Object)
     */
    static flip: any;

    /**
     * [Property] (Object)
     */
    static pop: any;

    /**
     * [Property] (Object)
     */
    static slide: any;

    /**
     * [Property] (Object)
     */
    static wipe: any;
  }

  declare export type Ext$app$IRouter = {
    /**
     * [Config Option] (Object)
     */
    defaults?: any,

    /**
     * [Config Option] (Array)
     */
    routes?: any[],

    /**
     * [Method] Connects a url based route to a controller action pair plus additional params
     * @param url String The url to recognize.
     * @param params Object Additional parameters.
     */
    connect?: (url?: string, params?: any) => void,

    /**
     * [Method] Convenience method which just calls the supplied function with the Router instance
     * @param fn Function The fn to call
     */
    draw?: (fn?: any) => void,

    /**
     * [Method] Returns the value of defaults
     * @returns Object
     */
    getDefaults?: () => any,

    /**
     * [Method] Returns the value of routes
     * @returns Array
     */
    getRoutes?: () => any[],

    /**
     * [Method] Recognizes a url string connected to the Router return the controller action pair plus any additional config associa
     * @param url String The url to recognize.
     * @returns Object/undefined If the url was recognized, the controller and action to call, else undefined.
     */
    recognize?: (url?: string) => any,

    /**
     * [Method] Sets the value of defaults
     * @param defaults Object The new value.
     */
    setDefaults?: (defaults?: any) => void,

    /**
     * [Method] Sets the value of routes
     * @param routes Array The new value.
     */
    setRoutes?: (routes?: any[]) => void
  } & Ext$IBase;

  declare export interface Ext$IArray {}

  declare export class Ext$Array {
    /**
     * [Method] Filter through an array and remove empty item as defined in Ext isEmpty
     * @param array Array
     * @returns Array results
     */
    static clean(array?: any[]): any[];

    /**
     * [Method] Clone a flat array without referencing the previous one
     * @param array Array The array
     * @returns Array The clone array
     */
    static clone(array?: any[]): any[];

    /**
     * [Method] Checks whether or not the given array contains the specified item
     * @param array Array The array to check.
     * @param item Object The item to look for.
     * @returns Boolean true if the array contains the item, false otherwise.
     */
    static contains(array?: any[], item?: any): boolean;

    /**
     * [Method] Perform a set difference A B by subtracting all items in array B from array A
     * @param arrayA Array
     * @param arrayB Array
     * @returns Array difference
     */
    static difference(arrayA?: any[], arrayB?: any[]): any[];

    /**
     * [Method] Iterates an array or an iterable value and invoke the given callback function for each item
     * @param iterable Array/NodeList/Object The value to be iterated. If this argument is not iterable, the callback function is called once.
     * @param fn Function The callback function. If it returns false, the iteration stops and this method returns the current index.
     * @param scope Object The scope (this reference) in which the specified function is executed.
     * @param reverse Boolean Reverse the iteration order (loop from the end to the beginning).
     * @returns Boolean See description for the fn parameter.
     */
    static each(
      iterable?: any,
      fn?: any,
      scope?: any,
      reverse?: boolean
    ): boolean;

    /**
     * [Method] Removes items from an array
     * @param array Array The Array on which to replace.
     * @param index Number The index in the array at which to operate.
     * @param removeCount Number The number of items to remove at index.
     * @returns Array The array passed.
     */
    static erase(array?: any[], index?: number, removeCount?: number): any[];

    /**
     * [Method] Executes the specified function for each array element until the function returns a falsy value
     * @param array Array
     * @param fn Function Callback function for each item.
     * @param scope Object Callback function scope.
     * @returns Boolean true if no false value is returned by the callback function.
     */
    static every(array?: any[], fn?: any, scope?: any): boolean;

    /**
     * [Method] Creates a new array with all of the elements of this array for which the provided filtering function returns true
     * @param array Array
     * @param fn Function Callback function for each item.
     * @param scope Object Callback function scope.
     * @returns Array results
     */
    static filter(array?: any[], fn?: any, scope?: any): any[];

    /**
     * [Method] Recursively flattens into 1 d Array
     * @param array Array The array to flatten
     * @returns Array The 1-d array.
     */
    static flatten(array?: any[]): any[];

    /**
     * [Method] Iterates an array and invoke the given callback function for each item
     * @param array Array The array to iterate.
     * @param fn Function The callback function.
     * @param scope Object The execution scope (this) in which the specified function is executed.
     */
    static forEach(array?: any[], fn?: any, scope?: any): void;

    /**
     * [Method] Converts a value to an array if it s not already an array returns An empty array if given value is undefined or n
     * @param value Object The value to convert to an array if it's not already is an array.
     * @param newReference Boolean true to clone the given array and return a new reference if necessary.
     * @returns Array array
     */
    static from(value?: any, newReference?: boolean): any[];

    /**
     * [Method] Push an item into the array only if the array doesn t contain it yet
     * @param array Array The array.
     * @param item Object The item to include.
     */
    static include(array?: any[], item?: any): void;

    /**
     * [Method] Get the index of the provided item in the given array a supplement for the missing arrayPrototype indexOf in Interne
     * @param array Array The array to check.
     * @param item Object The item to look for.
     * @param from Number The index at which to begin the search.
     * @returns Number The index of item in the array (or -1 if it is not found).
     */
    static indexOf(array?: any[], item?: any, from?: number): number;

    /**
     * [Method] Inserts items in to an array
     * @param array Array The Array on which to replace.
     * @param index Number The index in the array at which to operate.
     * @param items Array The array of items to insert at index.
     * @returns Array The array passed.
     */
    static insert(array?: any[], index?: number, items?: any[]): any[];

    /**
     * [Method] Merge multiple arrays into one with unique items that exist in all of the arrays
     * @param array1 Array
     * @param array2 Array
     * @param etc Array
     * @returns Array intersect
     */
    static intersect(array1?: any[], array2?: any[], etc?: any[]): any[];

    /**
     * [Method] Creates a new array with the results of calling a provided function on every element in this array
     * @param array Array
     * @param fn Function Callback function for each item.
     * @param scope Object Callback function scope.
     * @returns Array results
     */
    static map(array?: any[], fn?: any, scope?: any): any[];

    /**
     * [Method] Returns the maximum value in the Array
     * @param array Array/NodeList The Array from which to select the maximum value.
     * @param comparisonFn Function a function to perform the comparison which determines maximization. If omitted the ">" operator will be used. Note: gt = 1; eq = 0; lt = -1
     * @returns Object maxValue The maximum value
     */
    static max(array?: any, comparisonFn?: any): any;

    /**
     * [Method] Calculates the mean of all items in the array
     * @param array Array The Array to calculate the mean value of.
     * @returns Number The mean.
     */
    static mean(array?: any[]): number;

    /**
     * [Method] Merge multiple arrays into one with unique items
     * @param array1 Array
     * @param array2 Array
     * @param etc Array
     * @returns Array merged
     */
    static merge(array1?: any[], array2?: any[], etc?: any[]): any[];

    /**
     * [Method] Returns the minimum value in the Array
     * @param array Array/NodeList The Array from which to select the minimum value.
     * @param comparisonFn Function a function to perform the comparison which determines minimization. If omitted the "&lt;" operator will be used. Note: gt = 1; eq = 0; lt = -1
     * @returns Object minValue The minimum value.
     */
    static min(array?: any, comparisonFn?: any): any;

    /**
     * [Method] Plucks the value of a property from each item in the Array
     * @param array Array/NodeList The Array of items to pluck the value from.
     * @param propertyName String The property name to pluck from each element.
     * @returns Array The value from each item in the Array.
     */
    static pluck(array?: any, propertyName?: string): any[];

    /**
     * [Method] Removes the specified item from the array if it exists
     * @param array Array The array.
     * @param item Object The item to remove.
     * @returns Array The passed array itself.
     */
    static remove(array?: any[], item?: any): any[];

    /**
     * [Method] Replaces items in an array
     * @param array Array The Array on which to replace.
     * @param index Number The index in the array at which to operate.
     * @param removeCount Number The number of items to remove at index (can be 0).
     * @param insert Array An array of items to insert at index.
     * @returns Array The array passed.
     */
    static replace(
      array?: any[],
      index?: number,
      removeCount?: number,
      insert?: any[]
    ): any[];

    /**
     * [Method] Returns a shallow copy of a part of an array
     * @param array Array The array (or arguments object).
     * @param begin Number The index at which to begin. Negative values are offsets from the end of the array.
     * @param end Number The index at which to end. The copied items do not include end. Negative values are offsets from the end of the array. If end is omitted, all items up to the end of the array are copied.
     * @returns Array The copied piece of the array.
     */
    static slice(array?: any[], begin?: number, end?: number): any[];

    /**
     * [Method] Executes the specified function for each array element until the function returns a truthy value
     * @param array Array
     * @param fn Function Callback function for each item.
     * @param scope Object Callback function scope.
     * @returns Boolean true if the callback function returns a truthy value.
     */
    static some(array?: any[], fn?: any, scope?: any): boolean;

    /**
     * [Method] Sorts the elements of an Array
     * @param array Array The array to sort.
     * @param sortFn Function The comparison function.
     * @returns Array The sorted array.
     */
    static sort(array?: any[], sortFn?: any): any[];

    /**
     * [Method] Replaces items in an array
     * @param array Array The Array on which to replace.
     * @param index Number The index in the array at which to operate.
     * @param removeCount Number The number of items to remove at index (can be 0).
     * @returns Array An array containing the removed items.
     */
    static splice(array?: any[], index?: number, removeCount?: number): any[];

    /**
     * [Method] Calculates the sum of all items in the given array
     * @param array Array The Array to calculate the sum value of.
     * @returns Number The sum.
     */
    static sum(array?: any[]): number;

    /**
     * [Method] Converts any iterable numeric indices and a length property into a true array
     * @param iterable Object the iterable object to be turned into a true Array.
     * @param start Number a zero-based index that specifies the start of extraction.
     * @param end Number a zero-based index that specifies the end of extraction.
     * @returns Array
     */
    static toArray(iterable?: any, start?: number, end?: number): any[];

    /**
     * [Method] Merge multiple arrays into one with unique items
     * @param array1 Array
     * @param array2 Array
     * @param etc Array
     * @returns Array merged
     */
    static union(array1?: any[], array2?: any[], etc?: any[]): any[];

    /**
     * [Method] Returns a new array with unique items
     * @param array Array
     * @returns Array results
     */
    static unique(array?: any[]): any[];
  }

  declare export type Ext$IAudio = {
    /**
     * [Config Option] (String/String[])
     */
    cls?: any,

    /**
     * [Config Option] (String)
     */
    url?: string,

    /**
     * [Method] Returns the value of cls
     * @returns String
     */
    getCls?: () => string,

    /**
     * [Method] Returns the value of url
     * @returns String
     */
    getUrl?: () => string,

    /**
     * [Method] Sets the value of cls
     * @param cls String The new value.
     */
    setCls?: (cls?: string) => void,

    /**
     * [Method] Sets the value of url
     * @param url String The new value.
     */
    setUrl?: (url?: string) => void
  } & Ext$IMedia;

  declare export type Ext$IBase = {
    /**
     * [Property] (Ext.Class)
     */
    self?: Ext$IClass,

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    callOverridden?: (args?: any) => any,

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    callParent?: (args?: any) => any,

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    callSuper?: (args?: any) => any,

    /**
     * [Method]
     */
    destroy?: () => void,

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    getInitialConfig?: (name?: string) => any,

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    initConfig?: (instanceConfig?: any) => any
  } & Ext$IClass;

  declare export class Ext$Base {
    /**
     * [Method] Add methods  properties to the prototype of this class
     * @param members Object
     */
    static addMembers(members?: any): void;

    /**
     * [Method] Add  override static properties of this class
     * @param members Object
     * @returns Ext.Base this
     */
    static addStatics(members?: any): Ext$IBase;

    /**
     * [Method]
     * @param args Object
     */
    static callParent(args?: any): void;

    /**
     * [Method] Create a new instance of this Class
     * @returns Object the created instance.
     */
    static create(): any;

    /**
     * [Method] Create aliases for existing prototype methods
     * @param alias String/Object The new method name, or an object to set multiple aliases. See flexSetter
     * @param origin String/Object The original method name
     */
    static createAlias(alias?: any, origin?: any): void;

    /**
     * [Method] Get the current class name in string format
     * @returns any className
     */
    static getName(): any;

    /**
     * [Method] Override members of this class
     * @param members Object The properties to add to this class. This should be specified as an object literal containing one or more properties.
     * @returns Ext.Base this class
     */
    static override(members?: any): Ext$IBase;
  }

  declare export type Ext$behavior$ITranslatable = {} & undefined.IBehavior;

  declare export type Ext$IBrowser = {} & undefined.IBrowser;

  declare export class Ext$Browser {
    /**
     * [Property] (String)
     */
    static engineName: string;

    /**
     * [Property] (Ext.Version)
     */
    static engineVersion: Ext$IVersion;

    /**
     * [Property] (Boolean)
     */
    static isSecure: boolean;

    /**
     * [Property] (Boolean)
     */
    static isStrict: boolean;

    /**
     * [Property] (String)
     */
    static name: string;

    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Property] (String)
     */
    static userAgent: string;

    /**
     * [Property] (Ext.Version)
     */
    static version: Ext$IVersion;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] A hybrid property can be either accessed as a method call for example  if Ext browser is IE
     * @param value String The OS name to check.
     * @returns Boolean
     */
    static is(value?: string): boolean;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;
  }

  declare export type Ext$IButton = {
    /**
     * [Config Option] (String)
     */
    autoEvent?: string,

    /**
     * [Config Option] (String)
     */
    badge?: string,

    /**
     * [Config Option] (String)
     */
    badgeCls?: string,

    /**
     * [Config Option] (String)
     */
    badgeText?: string,

    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Function)
     */
    handler?: any,

    /**
     * [Config Option] (String)
     */
    html?: string,

    /**
     * [Config Option] (String)
     */
    icon?: string,

    /**
     * [Config Option] (String)
     */
    iconAlign?: string,

    /**
     * [Config Option] (String)
     */
    iconCls?: string,

    /**
     * [Config Option] (String)
     */
    labelCls?: string,

    /**
     * [Config Option] (String)
     */
    pressedCls?: string,

    /**
     * [Config Option] (Number/Boolean)
     */
    pressedDelay?: any,

    /**
     * [Config Option] (Object)
     */
    scope?: any,

    /**
     * [Config Option] (String)
     */
    text?: string,

    /**
     * [Config Option] (String)
     */
    ui?: string,

    /**
     * [Method] Returns the value of autoEvent
     * @returns String
     */
    getAutoEvent?: () => string,

    /**
     * [Method] Returns the value of badgeCls
     * @returns String
     */
    getBadgeCls?: () => string,

    /**
     * [Method] Returns the value of badgeText
     * @returns String
     */
    getBadgeText?: () => string,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of handler
     * @returns Function
     */
    getHandler?: () => any,

    /**
     * [Method] Returns the value of icon
     * @returns String
     */
    getIcon?: () => string,

    /**
     * [Method] Returns the value of iconAlign
     * @returns String
     */
    getIconAlign?: () => string,

    /**
     * [Method] Returns the value of iconCls
     * @returns String
     */
    getIconCls?: () => string,

    /**
     * [Method] Returns the value of labelCls
     * @returns String
     */
    getLabelCls?: () => string,

    /**
     * [Method] Returns the value of pressedCls
     * @returns String
     */
    getPressedCls?: () => string,

    /**
     * [Method] Returns the value of pressedDelay
     * @returns Number/Boolean
     */
    getPressedDelay?: () => any,

    /**
     * [Method] Returns the value of scope
     * @returns Object
     */
    getScope?: () => any,

    /**
     * [Method] Returns the value of text
     * @returns String
     */
    getText?: () => string,

    /**
     * [Method] Returns the value of ui
     * @returns String
     */
    getUi?: () => string,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Sets the value of autoEvent
     * @param autoEvent String The new value.
     */
    setAutoEvent?: (autoEvent?: string) => void,

    /**
     * [Method] Updates the badge text
     * @param text String
     */
    setBadge?: (text?: string) => void,

    /**
     * [Method] Sets the value of badgeCls
     * @param badgeCls String The new value.
     */
    setBadgeCls?: (badgeCls?: string) => void,

    /**
     * [Method] Sets the value of badgeText
     * @param badgeText String The new value.
     */
    setBadgeText?: (badgeText?: string) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of handler
     * @param handler Function The new value.
     */
    setHandler?: (handler?: any) => void,

    /**
     * [Method] Sets the value of icon
     * @param icon String The new value.
     */
    setIcon?: (icon?: string) => void,

    /**
     * [Method] Sets the value of iconAlign
     * @param iconAlign String The new value.
     */
    setIconAlign?: (iconAlign?: string) => void,

    /**
     * [Method] Updates the icon class
     * @param iconClass String
     */
    setIconClass?: (iconClass?: string) => void,

    /**
     * [Method] Sets the value of iconCls
     * @param iconCls String The new value.
     */
    setIconCls?: (iconCls?: string) => void,

    /**
     * [Method] Sets the value of labelCls
     * @param labelCls String The new value.
     */
    setLabelCls?: (labelCls?: string) => void,

    /**
     * [Method] Sets the value of pressedCls
     * @param pressedCls String The new value.
     */
    setPressedCls?: (pressedCls?: string) => void,

    /**
     * [Method] Sets the value of pressedDelay
     * @param pressedDelay Number/Boolean The new value.
     */
    setPressedDelay?: (pressedDelay?: any) => void,

    /**
     * [Method] Sets the value of scope
     * @param scope Object The new value.
     */
    setScope?: (scope?: any) => void,

    /**
     * [Method] Sets the value of text
     * @param text String The new value.
     */
    setText?: (text?: string) => void,

    /**
     * [Method] Sets the value of ui
     * @param ui String The new value.
     */
    setUi?: (ui?: string) => void
  } & Ext$IComponent;

  declare export type Ext$carousel$IItem = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Object)
     */
    component?: any,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of component
     * @returns Object
     */
    getComponent?: () => any,

    /**
     * [Method] Returns the value of translatable
     * @returns Boolean
     */
    getTranslatable?: () => boolean,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of component
     * @param component Object The new value.
     */
    setComponent?: (component?: any) => void,

    /**
     * [Method] Sets the value of translatable
     * @param translatable Boolean The new value.
     */
    setTranslatable?: (translatable?: boolean) => void
  } & Ext$IDecorator;

  declare export type Ext$ICarousel = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    direction?: string,

    /**
     * [Config Option] (Boolean)
     */
    indicator?: boolean,

    /**
     * [Config Option] (String)
     */
    ui?: string,

    /**
     * [Method]
     */
    destroy?: () => void,

    /**
     * [Method] Returns the index of the currently active card
     * @returns Number The index of the currently active card.
     */
    getActiveIndex?: () => number,

    /**
     * [Method] Returns the value of animation
     * @returns Object
     */
    getAnimation?: () => any,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of bufferSize
     * @returns Number
     */
    getBufferSize?: () => number,

    /**
     * [Method] Returns the value of direction
     * @returns String
     */
    getDirection?: () => string,

    /**
     * [Method] Returns the value of directionLock
     * @returns Boolean
     */
    getDirectionLock?: () => boolean,

    /**
     * [Method] Returns the value of indicator
     * @returns any
     */
    getIndicator?: () => any,

    /**
     * [Method] Returns the value of itemConfig
     * @returns Object
     */
    getItemConfig?: () => any,

    /**
     * [Method] Returns the value of itemLength
     * @returns Object
     */
    getItemLength?: () => any,

    /**
     * [Method] Returns the value of ui
     * @returns String
     */
    getUi?: () => string,

    /**
     * [Method] Returns true when direction is horizontal
     * @returns Boolean
     */
    isHorizontal?: () => boolean,

    /**
     * [Method] Returns true when direction is vertical
     * @returns Boolean
     */
    isVertical?: () => boolean,

    /**
     * [Method] Switches to the next card
     * @returns Ext.carousel.Carousel this
     */
    next?: () => Ext$carousel$ICarousel,

    /**
     * [Method] Switches to the previous card
     * @returns Ext.carousel.Carousel this
     */
    prev?: () => Ext$carousel$ICarousel,

    /**
     * [Method] Switches to the previous card
     * @returns Ext.carousel.Carousel this
     */
    previous?: () => Ext$carousel$ICarousel,

    /**
     * [Method] Sets the value of animation
     * @param animation Object The new value.
     */
    setAnimation?: (animation?: any) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of bufferSize
     * @param bufferSize Number The new value.
     */
    setBufferSize?: (bufferSize?: number) => void,

    /**
     * [Method] Sets the value of direction
     * @param direction String The new value.
     */
    setDirection?: (direction?: string) => void,

    /**
     * [Method] Sets the value of directionLock
     * @param directionLock Boolean The new value.
     */
    setDirectionLock?: (directionLock?: boolean) => void,

    /**
     * [Method] Sets the value of indicator
     * @param indicator Boolean The new value.
     */
    setIndicator?: (indicator?: boolean) => void,

    /**
     * [Method] Sets the value of itemConfig
     * @param itemConfig Object The new value.
     */
    setItemConfig?: (itemConfig?: any) => void,

    /**
     * [Method] Sets the value of itemLength
     * @param itemLength Object The new value.
     */
    setItemLength?: (itemLength?: any) => void,

    /**
     * [Method] Sets the value of ui
     * @param ui String The new value.
     */
    setUi?: (ui?: string) => void
  } & Ext$IContainer;

  declare export type Ext$chart$ISpaceFillingChart = {
    /**
     * [Method] Redraw the chart
     */
    redraw?: () => void
  } & undefined.IAbstractChart;

  declare export interface Ext$IClass {
    /**
     * [Config Option] (String[])
     */
    alias?: string[];

    /**
     * [Config Option] (String/String[])
     */
    alternateClassName?: any;

    /**
     * [Config Option] (Object)
     */
    config?: any;

    /**
     * [Config Option] (String)
     */
    extend?: string;

    /**
     * [Config Option] (Object)
     */
    inheritableStatics?: any;

    /**
     * [Config Option] (Object)
     */
    mixins?: any;

    /**
     * [Config Option] (Object)
     */
    platformConfig?: any;

    /**
     * [Config Option] (Boolean)
     */
    singleton?: boolean;

    /**
     * [Config Option] (Object)
     */
    statics?: any;

    /**
     * [Config Option] (String[])
     */
    uses?: string[];
  }

  declare export interface Ext$IClassManager {}

  declare export class Ext$ClassManager {
    /**
     * [Method] Adds a batch of class name to alias mappings
     * @param aliases Object The set of mappings of the form className : [values...]
     * @returns Ext.ClassManager this
     */
    static addNameAliasMappings(aliases?: any): Ext$IClassManager;

    /**
     * [Method]
     * @param alternates Object The set of mappings of the form className : [values...]
     * @returns Ext.ClassManager this
     */
    static addNameAlternateMappings(alternates?: any): Ext$IClassManager;

    /**
     * [Method] Retrieve a class by its name
     * @param name String
     * @returns Ext.Class class
     */
    static get(name?: string): Ext$IClass;

    /**
     * [Method] Get the aliases of a class by the class name
     * @param name String
     * @returns Array aliases
     */
    static getAliasesByName(name?: string): any[];

    /**
     * [Method] Get a reference to the class by its alias
     * @param alias String
     * @returns Ext.Class class
     */
    static getByAlias(alias?: string): Ext$IClass;

    /**
     * [Method] Get the class of the provided object returns null if it s not an instance of any class created with Ext define
     * @param object Object
     * @returns Ext.Class class
     */
    static getClass(object?: any): Ext$IClass;

    /**
     * [Method] Get the name of the class by its reference or its instance usually invoked by the shorthand Ext getClassName Ext Cl
     * @param object Ext.Class/Object
     * @returns String className
     */
    static getName(object?: any): string;

    /**
     * [Method] Get the name of a class by its alias
     * @param alias String
     * @returns String className
     */
    static getNameByAlias(alias?: string): string;

    /**
     * [Method] Get the name of a class by its alternate name
     * @param alternate String
     * @returns String className
     */
    static getNameByAlternate(alternate?: string): string;

    /**
     * [Method] Converts a string expression to an array of matching class names
     * @param expression String
     * @returns Array classNames
     */
    static getNamesByExpression(expression?: string): any[];

    /**
     * [Method] Instantiate a class by either full name alias or alternate name usually invoked by the convenient shorthand Ext cre
     * @param name String
     * @param args Mixed Additional arguments after the name will be passed to the class' constructor.
     * @returns Object instance
     */
    static instantiate(name?: string, args?: any): any;

    /**
     * [Method] Instantiate a class by its alias usually invoked by the convenient shorthand Ext createByAlias If Ext Loader is enab
     * @param alias String
     * @param args Mixed... Additional arguments after the alias will be passed to the class constructor.
     * @returns Object instance
     */
    static instantiateByAlias(alias: string, ...args: any[]): any;

    /**
     * [Method] Checks if a class has already been created
     * @param className String
     * @returns Boolean exist
     */
    static isCreated(className?: string): boolean;

    /**
     * [Method] Sets a name reference to a class
     * @param name String
     * @param value Object
     * @returns Ext.ClassManager this
     */
    static set(name?: string, value?: any): Ext$IClassManager;

    /**
     * [Method] Register the alias for a class
     * @param cls Ext.Class/String a reference to a class or a className.
     * @param alias String Alias to use when referring to this class.
     * @returns Ext.ClassManager this
     */
    static setAlias(cls?: any, alias?: string): Ext$IClassManager;

    /**
     * [Method] Creates a namespace and assign the value to the created object
     * @param name String
     * @param value Mixed
     */
    static setNamespace(name?: string, value?: any): void;
  }

  declare export type Ext$IComponent = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Number/String)
     */
    border?: any,

    /**
     * [Config Option] (Number/String)
     */
    bottom?: any,

    /**
     * [Config Option] (Boolean)
     */
    centered?: boolean,

    /**
     * [Config Option] (String/String[])
     */
    cls?: any,

    /**
     * [Config Option] (String)
     */
    componentCls?: string,

    /**
     * [Config Option] (Ext.Element/HTMLElement/String)
     */
    contentEl?: any,

    /**
     * [Config Option] (Object)
     */
    data?: any,

    /**
     * [Config Option] (Boolean)
     */
    disabled?: boolean,

    /**
     * [Config Option] (String)
     */
    disabledCls?: string,

    /**
     * [Config Option] (String)
     */
    dock?: string,

    /**
     * [Config Option] (String)
     */
    docked?: string,

    /**
     * [Config Option] (String/Mixed)
     */
    enterAnimation?: any,

    /**
     * [Config Option] (String/Mixed)
     */
    exitAnimation?: any,

    /**
     * [Config Option] (Number)
     */
    flex?: number,

    /**
     * [Config Option] (Boolean)
     */
    floating?: boolean,

    /**
     * [Config Option] (String)
     */
    floatingCls?: string,

    /**
     * [Config Option] (Boolean)
     */
    fullscreen?: boolean,

    /**
     * [Config Option] (Number/String)
     */
    height?: any,

    /**
     * [Config Option] (Boolean)
     */
    hidden?: boolean,

    /**
     * [Config Option] (String)
     */
    hiddenCls?: string,

    /**
     * [Config Option] (String/Mixed)
     */
    hideAnimation?: any,

    /**
     * [Config Option] (Boolean)
     */
    hideOnMaskTap?: boolean,

    /**
     * [Config Option] (String/Ext.Element/HTMLElement)
     */
    html?: any,

    /**
     * [Config Option] (String)
     */
    id?: string,

    /**
     * [Config Option] (String)
     */
    itemId?: string,

    /**
     * [Config Option] (Boolean)
     */
    layoutOnOrientationChange?: boolean,

    /**
     * [Config Option] (Number/String)
     */
    left?: any,

    /**
     * [Config Option] (Number/String)
     */
    margin?: any,

    /**
     * [Config Option] (Number/String)
     */
    maxHeight?: any,

    /**
     * [Config Option] (Number/String)
     */
    maxWidth?: any,

    /**
     * [Config Option] (Number/String)
     */
    minHeight?: any,

    /**
     * [Config Option] (Number/String)
     */
    minWidth?: any,

    /**
     * [Config Option] (Boolean)
     */
    modal?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    monitorOrientation?: boolean,

    /**
     * [Config Option] (Number/String)
     */
    padding?: any,

    /**
     * [Config Option] (Object/Array)
     */
    plugins?: any,

    /**
     * [Config Option] (Ext.data.Model)
     */
    record?: data$IModel,

    /**
     * [Config Option] (Ext.Element)
     */
    renderTo?: Ext$IElement,

    /**
     * [Config Option] (Number/String)
     */
    right?: any,

    /**
     * [Config Option] (Boolean/String/Object)
     */
    scroll?: any,

    /**
     * [Config Option] (String/Mixed)
     */
    showAnimation?: any,

    /**
     * [Config Option] (Boolean)
     */
    stopMaskTapEvent?: boolean,

    /**
     * [Config Option] (String/Object)
     */
    style?: any,

    /**
     * [Config Option] (String)
     */
    styleHtmlCls?: string,

    /**
     * [Config Option] (Boolean)
     */
    styleHtmlContent?: boolean,

    /**
     * [Config Option] (Number/String)
     */
    top?: any,

    /**
     * [Config Option] (String/String[]/Ext.Template/Ext.XTemplate[])
     */
    tpl?: any,

    /**
     * [Config Option] (String)
     */
    tplWriteMode?: string,

    /**
     * [Config Option] (String)
     */
    ui?: string,

    /**
     * [Config Option] (Number/String)
     */
    width?: any,

    /**
     * [Config Option] (String[])
     */
    xtype?: string,

    /**
     * [Config Option] (Number)
     */
    zIndex?: number,

    /**
     * [Method] Adds a CSS class or classes to this Component s rendered element
     * @param cls String The CSS class to add.
     * @param prefix String Optional prefix to add to each class.
     * @param suffix String Optional suffix to add to each class.
     */
    addCls?: (cls?: string, prefix?: string, suffix?: string) => void,

    /**
     * [Method] Destroys this Component
     */
    destroy?: () => void,

    /**
     * [Method] Disables this Component
     */
    disable?: () => void,

    /**
     * [Method] Enables this Component
     */
    enable?: () => void,

    /**
     * [Method] Prepares information on aligning this to component using alignment
     * @param component Object
     * @param alignment Object
     */
    getAlignmentInfo?: (component?: any, alignment?: any) => void,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of border
     * @returns Number/String
     */
    getBorder?: () => any,

    /**
     * [Method] Returns the value of bottom
     * @returns any
     */
    getBottom?: () => any,

    /**
     * [Method] Returns the value of centered
     * @returns Boolean
     */
    getCentered?: () => boolean,

    /**
     * [Method] Returns the value of cls
     * @returns any
     */
    getCls?: () => any,

    /**
     * [Method] Returns the value of contentEl
     * @returns Ext.Element/HTMLElement/String
     */
    getContentEl?: () => any,

    /**
     * [Method] Returns the value of data
     * @returns Object
     */
    getData?: () => any,

    /**
     * [Method] Returns the value of disabled
     * @returns Boolean
     */
    getDisabled?: () => boolean,

    /**
     * [Method] Returns the value of disabledCls
     * @returns String
     */
    getDisabledCls?: () => string,

    /**
     * [Method] Returns the value of docked
     * @returns String
     */
    getDocked?: () => string,

    /**
     * [Method] Retrieves the top level element representing this component
     * @returns Ext.dom.Element
     */
    getEl?: () => dom$IElement,

    /**
     * [Method] Returns the value of enterAnimation
     * @returns String/Mixed
     */
    getEnterAnimation?: () => any,

    /**
     * [Method] Returns the value of exitAnimation
     * @returns String/Mixed
     */
    getExitAnimation?: () => any,

    /**
     * [Method] Returns the value of flex
     * @returns Number
     */
    getFlex?: () => number,

    /**
     * [Method] Returns the value of floatingCls
     * @returns String
     */
    getFloatingCls?: () => string,

    /**
     * [Method] Returns the value of height
     * @returns Number/String
     */
    getHeight?: () => any,

    /**
     * [Method] Returns the value of hidden
     * @returns Boolean
     */
    getHidden?: () => boolean,

    /**
     * [Method] Returns the value of hiddenCls
     * @returns String
     */
    getHiddenCls?: () => string,

    /**
     * [Method] Returns the value of hideAnimation
     * @returns String/Mixed
     */
    getHideAnimation?: () => any,

    /**
     * [Method] Returns the value of html
     * @returns String/Ext.Element/HTMLElement
     */
    getHtml?: () => any,

    /**
     * [Method] Returns the value of itemId
     * @returns String
     */
    getItemId?: () => string,

    /**
     * [Method] Returns the value of left
     * @returns Number/String
     */
    getLeft?: () => any,

    /**
     * [Method] Returns the value of margin
     * @returns Number/String
     */
    getMargin?: () => any,

    /**
     * [Method] Returns the value of maxHeight
     * @returns Number/String
     */
    getMaxHeight?: () => any,

    /**
     * [Method] Returns the value of maxWidth
     * @returns Number/String
     */
    getMaxWidth?: () => any,

    /**
     * [Method] Returns the value of minHeight
     * @returns Number/String
     */
    getMinHeight?: () => any,

    /**
     * [Method] Returns the value of minWidth
     * @returns Number/String
     */
    getMinWidth?: () => any,

    /**
     * [Method] Returns the value of padding
     * @returns Number/String
     */
    getPadding?: () => any,

    /**
     * [Method] Returns the parent of this component if it has one
     * @returns Ext.Component The parent of this component.
     */
    getParent?: () => Ext$IComponent,

    /**
     * [Method] Returns the value of plugins
     * @returns Object/Array
     */
    getPlugins?: () => any,

    /**
     * [Method] Returns the value of record
     * @returns Ext.data.Model
     */
    getRecord?: () => data$IModel,

    /**
     * [Method] Returns the value of renderTo
     * @returns Ext.Element
     */
    getRenderTo?: () => Ext$IElement,

    /**
     * [Method] Returns the value of right
     * @returns Number/String
     */
    getRight?: () => any,

    /**
     * [Method] Returns the value of showAnimation
     * @returns String/Mixed
     */
    getShowAnimation?: () => any,

    /**
     * [Method] Returns the height and width of the Component
     * @returns Object The current height and width of the Component.
     */
    getSize?: () => any,

    /**
     * [Method] Returns the value of style
     * @returns String/Object
     */
    getStyle?: () => any,

    /**
     * [Method] Returns the value of styleHtmlCls
     * @returns String
     */
    getStyleHtmlCls?: () => string,

    /**
     * [Method] Returns the value of styleHtmlContent
     * @returns Boolean
     */
    getStyleHtmlContent?: () => boolean,

    /**
     * [Method] Returns the value of top
     * @returns Number/String
     */
    getTop?: () => any,

    /**
     * [Method] Returns the value of tpl
     * @returns String/String[]/Ext.Template/Ext.XTemplate[]
     */
    getTpl?: () => any,

    /**
     * [Method] Returns the value of tplWriteMode
     * @returns String
     */
    getTplWriteMode?: () => string,

    /**
     * [Method] Returns the value of ui
     * @returns String
     */
    getUi?: () => string,

    /**
     * [Method] Returns the value of width
     * @returns Number/String
     */
    getWidth?: () => any,

    /**
     * [Method] Returns this Component s xtype hierarchy as a slash delimited string
     * @returns String The xtype hierarchy string.
     */
    getXTypes?: () => string,

    /**
     * [Method] Returns the value of zIndex
     * @returns Number
     */
    getZIndex?: () => number,

    /**
     * [Method] Returns true if this component has a parent
     * @returns Boolean true if this component has a parent.
     */
    hasParent?: () => boolean,

    /**
     * [Method] Hides this Component optionally using an animation
     * @param animation Object/Boolean You can specify an animation here or a bool to use the hideAnimation config.
     * @returns Ext.Component
     */
    hide?: (animation?: any) => Ext$IComponent,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Returns true if this Component is currently disabled
     * @returns Boolean true if currently disabled.
     */
    isDisabled?: () => boolean,

    /**
     * [Method] Returns true if this Component is currently hidden
     * @returns Boolean true if currently hidden.
     */
    isHidden?: () => boolean,

    /**
     * [Method] Tests whether or not this Component is of a specific xtype
     * @param xtype String The xtype to check for this Component.
     * @param shallow Boolean false to check whether this Component is descended from the xtype (this is the default), or true to check whether this Component is directly of the specified xtype.
     * @returns Boolean true if this component descends from the specified xtype, false otherwise.
     */
    isXType?: (xtype?: string, shallow?: boolean) => boolean,

    /**
     * [Method] Removes the given CSS class es from this Component s rendered element
     * @param cls String The class(es) to remove.
     * @param prefix String Optional prefix to prepend before each class.
     * @param suffix String Optional suffix to append to each class.
     */
    removeCls?: (cls?: string, prefix?: string, suffix?: string) => void,

    /**
     * [Method] Replaces specified classes with the newly specified classes
     * @param oldCls String The class(es) to remove.
     * @param newCls String The class(es) to add.
     * @param prefix String Optional prefix to prepend before each class.
     * @param suffix String Optional suffix to append to each class.
     */
    replaceCls?: (
      oldCls?: string,
      newCls?: string,
      prefix?: string,
      suffix?: string
    ) => void,

    /**
     * [Method] Resets top right bottom and left configurations to null which will un float this component
     */
    resetFloating?: () => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of border
     * @param border Number/String The new value.
     */
    setBorder?: (border?: any) => void,

    /**
     * [Method] Sets the value of bottom
     * @param bottom Number/String The new value.
     */
    setBottom?: (bottom?: any) => void,

    /**
     * [Method] Sets the value of centered
     * @param centered Boolean The new value.
     */
    setCentered?: (centered?: boolean) => void,

    /**
     * [Method] Sets the value of cls
     * @param cls String/String[] The new value.
     */
    setCls?: (cls?: any) => void,

    /**
     * [Method] Sets the value of contentEl
     * @param contentEl Ext.Element/HTMLElement/String The new value.
     */
    setContentEl?: (contentEl?: any) => void,

    /**
     * [Method] Sets the value of data
     * @param data Object The new value.
     */
    setData?: (data?: any) => void,

    /**
     * [Method] Sets the value of disabled
     * @param disabled Boolean The new value.
     */
    setDisabled?: (disabled?: boolean) => void,

    /**
     * [Method] Sets the value of disabledCls
     * @param disabledCls String The new value.
     */
    setDisabledCls?: (disabledCls?: string) => void,

    /**
     * [Method] Sets the value of docked
     * @param docked String The new value.
     */
    setDocked?: (docked?: string) => void,

    /**
     * [Method] Sets the value of draggable
     * @param draggable Object The new value.
     */
    setDraggable?: (draggable?: any) => void,

    /**
     * [Method] Sets the value of enterAnimation
     * @param enterAnimation String/Mixed The new value.
     */
    setEnterAnimation?: (enterAnimation?: any) => void,

    /**
     * [Method] Sets the value of exitAnimation
     * @param exitAnimation String/Mixed The new value.
     */
    setExitAnimation?: (exitAnimation?: any) => void,

    /**
     * [Method] Sets the value of flex
     * @param flex Number The new value.
     */
    setFlex?: (flex?: number) => void,

    /**
     * [Method] Used to update the floating state of this component
     * @param floating Boolean true if you want to float this component.
     */
    setFloating?: (floating?: boolean) => void,

    /**
     * [Method] Sets the value of floatingCls
     * @param floatingCls String The new value.
     */
    setFloatingCls?: (floatingCls?: string) => void,

    /**
     * [Method] Sets the value of height
     * @param height Number/String The new value.
     */
    setHeight?: (height?: any) => void,

    /**
     * [Method] Sets the value of hidden
     * @param hidden Boolean The new value.
     */
    setHidden?: (hidden?: boolean) => void,

    /**
     * [Method] Sets the value of hiddenCls
     * @param hiddenCls String The new value.
     */
    setHiddenCls?: (hiddenCls?: string) => void,

    /**
     * [Method] Sets the value of hideAnimation
     * @param hideAnimation String/Mixed The new value.
     */
    setHideAnimation?: (hideAnimation?: any) => void,

    /**
     * [Method] Sets the value of html
     * @param html String/Ext.Element/HTMLElement The new value.
     */
    setHtml?: (html?: any) => void,

    /**
     * [Method] Sets the value of itemId
     * @param itemId String The new value.
     */
    setItemId?: (itemId?: string) => void,

    /**
     * [Method] Sets the value of left
     * @param left Number/String The new value.
     */
    setLeft?: (left?: any) => void,

    /**
     * [Method] Sets the value of margin
     * @param margin Number/String The new value.
     */
    setMargin?: (margin?: any) => void,

    /**
     * [Method] Sets the value of maxHeight
     * @param maxHeight Number/String The new value.
     */
    setMaxHeight?: (maxHeight?: any) => void,

    /**
     * [Method] Sets the value of maxWidth
     * @param maxWidth Number/String The new value.
     */
    setMaxWidth?: (maxWidth?: any) => void,

    /**
     * [Method] Sets the value of minHeight
     * @param minHeight Number/String The new value.
     */
    setMinHeight?: (minHeight?: any) => void,

    /**
     * [Method] Sets the value of minWidth
     * @param minWidth Number/String The new value.
     */
    setMinWidth?: (minWidth?: any) => void,

    /**
     * [Method] Sets the value of padding
     * @param padding Number/String The new value.
     */
    setPadding?: (padding?: any) => void,

    /**
     * [Method] Sets the value of plugins
     * @param plugins Object/Array The new value.
     */
    setPlugins?: (plugins?: any) => void,

    /**
     * [Method] Sets the value of record
     * @param record Ext.data.Model The new value.
     */
    setRecord?: (record?: data$IModel) => void,

    /**
     * [Method] Sets the value of renderTo
     * @param renderTo Ext.Element The new value.
     */
    setRenderTo?: (renderTo?: Ext$IElement) => void,

    /**
     * [Method] Sets the value of right
     * @param right Number/String The new value.
     */
    setRight?: (right?: any) => void,

    /**
     * [Method] This method has moved to Ext Container
     */
    setScrollable?: () => void,

    /**
     * [Method] Sets the value of showAnimation
     * @param showAnimation String/Mixed The new value.
     */
    setShowAnimation?: (showAnimation?: any) => void,

    /**
     * [Method] Sets the size of the Component
     * @param width Number The new width for the Component.
     * @param height Number The new height for the Component.
     */
    setSize?: (width?: number, height?: number) => void,

    /**
     * [Method] Sets the value of style
     * @param style String/Object The new value.
     */
    setStyle?: (style?: any) => void,

    /**
     * [Method] Sets the value of styleHtmlCls
     * @param styleHtmlCls String The new value.
     */
    setStyleHtmlCls?: (styleHtmlCls?: string) => void,

    /**
     * [Method] Sets the value of styleHtmlContent
     * @param styleHtmlContent Boolean The new value.
     */
    setStyleHtmlContent?: (styleHtmlContent?: boolean) => void,

    /**
     * [Method] Sets the value of top
     * @param top Number/String The new value.
     */
    setTop?: (top?: any) => void,

    /**
     * [Method] Sets the value of tpl
     * @param tpl String/String[]/Ext.Template/Ext.XTemplate[] The new value.
     */
    setTpl?: (tpl?: any) => void,

    /**
     * [Method] Sets the value of tplWriteMode
     * @param tplWriteMode String The new value.
     */
    setTplWriteMode?: (tplWriteMode?: string) => void,

    /**
     * [Method] Sets the value of ui
     * @param ui String The new value.
     */
    setUi?: (ui?: string) => void,

    /**
     * [Method] Sets the value of width
     * @param width Number/String The new value.
     */
    setWidth?: (width?: any) => void,

    /**
     * [Method] Sets the value of zIndex
     * @param zIndex Number The new value.
     */
    setZIndex?: (zIndex?: number) => void,

    /**
     * [Method] Shows this component optionally using an animation
     * @param animation Object/Boolean You can specify an animation here or a bool to use the showAnimation config.
     * @returns Ext.Component
     */
    show?: (animation?: any) => Ext$IComponent,

    /**
     * [Method] Shows this component by another component
     * @param component Ext.Component The target component to show this component by.
     * @param alignment String The specific alignment.
     */
    showBy?: (component?: Ext$IComponent, alignment?: string) => void,

    /**
     * [Method] Walks up the ownerCt axis looking for an ancestor Container which matches the passed simple selector
     * @param selector String The simple selector to test.
     * @returns Ext.Container The matching ancestor Container (or undefined if no match was found).
     */
    up?: (selector?: string) => Ext$IContainer,

    /**
     * [Method] Updates the HTML content of the Component
     */
    update?: () => void,

    /**
     * [Method] Updates the styleHtmlCls configuration
     * @param newHtmlCls Object
     * @param oldHtmlCls Object
     */
    updateStyleHtmlCls?: (newHtmlCls?: any, oldHtmlCls?: any) => void
  } & Ext$IAbstractComponent &
    undefined.ITraversable;

  declare export type Ext$lib$IPanel = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Number/Boolean/String)
     */
    bodyBorder?: any,

    /**
     * [Config Option] (Number/Boolean/String)
     */
    bodyMargin?: any,

    /**
     * [Config Option] (Number/Boolean/String)
     */
    bodyPadding?: any,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of bodyBorder
     * @returns Number/Boolean/String
     */
    getBodyBorder?: () => any,

    /**
     * [Method] Returns the value of bodyMargin
     * @returns Number/Boolean/String
     */
    getBodyMargin?: () => any,

    /**
     * [Method] Returns the value of bodyPadding
     * @returns Number/Boolean/String
     */
    getBodyPadding?: () => any,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of bodyBorder
     * @param bodyBorder Number/Boolean/String The new value.
     */
    setBodyBorder?: (bodyBorder?: any) => void,

    /**
     * [Method] Sets the value of bodyMargin
     * @param bodyMargin Number/Boolean/String The new value.
     */
    setBodyMargin?: (bodyMargin?: any) => void,

    /**
     * [Method] Sets the value of bodyPadding
     * @param bodyPadding Number/Boolean/String The new value.
     */
    setBodyPadding?: (bodyPadding?: any) => void
  } & Ext$IContainer;

  declare export type Ext$IComponentManager = {} & Ext$IBase;

  declare export class Ext$ComponentManager {
    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method] Creates a new Component from the specified config object using the config object s xtype to determine the class to in
     * @param component Object A configuration object for the Component you wish to create.
     * @param defaultType Function The constructor to provide the default Component type if the config object does not contain a xtype. (Optional if the config contains an xtype).
     * @returns Ext.Component The newly instantiated Component.
     */
    static create(component?: any, defaultType?: any): Ext$IComponent;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Returns an item by id
     * @param id String The id of the item.
     * @returns Object The item, or undefined if not found.
     */
    static get(id?: string): any;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Checks if an item type is registered
     * @param component String The mnemonic string by which the class may be looked up.
     * @returns Boolean Whether the type is registered.
     */
    static isRegistered(component?: string): boolean;

    /**
     * [Method] Registers an item to be managed
     * @param component Object The item to register.
     */
    static register(component?: any): void;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;

    /**
     * [Method] Unregisters an item by removing it from this manager
     * @param component Object The item to unregister.
     */
    static unregister(component?: any): void;
  }

  declare export type Ext$IComponentMgr = {} & Ext$IBase;

  declare export class Ext$ComponentMgr {
    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method] Creates a new Component from the specified config object using the config object s xtype to determine the class to in
     * @param component Object A configuration object for the Component you wish to create.
     * @param defaultType Function The constructor to provide the default Component type if the config object does not contain a xtype. (Optional if the config contains an xtype).
     * @returns Ext.Component The newly instantiated Component.
     */
    static create(component?: any, defaultType?: any): Ext$IComponent;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Returns an item by id
     * @param id String The id of the item.
     * @returns Object The item, or undefined if not found.
     */
    static get(id?: string): any;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Checks if an item type is registered
     * @param component String The mnemonic string by which the class may be looked up.
     * @returns Boolean Whether the type is registered.
     */
    static isRegistered(component?: string): boolean;

    /**
     * [Method] Registers an item to be managed
     * @param component Object The item to register.
     */
    static register(component?: any): void;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;

    /**
     * [Method] Unregisters an item by removing it from this manager
     * @param component Object The item to unregister.
     */
    static unregister(component?: any): void;
  }

  declare export interface Ext$IComponentQuery {}

  declare export class Ext$ComponentQuery {
    /**
     * [Method] Tests whether the passed Component matches the selector string
     * @param component Ext.Component The Component to test.
     * @param selector String The selector string to test against.
     * @returns Boolean true if the Component matches the selector.
     */
    static is(component?: Ext$IComponent, selector?: string): boolean;

    /**
     * [Method] Returns an array of matched Components from within the passed root object
     * @param selector String The selector string to filter returned Components
     * @param root Ext.Container The Container within which to perform the query. If omitted, all Components within the document are included in the search. This parameter may also be an array of Components to filter according to the selector.
     * @returns Ext.Component[] The matched Components.
     */
    static query(selector?: string, root?: Ext$IContainer): Ext$IComponent[];
  }

  declare export type Ext$IContainer = {
    /**
     * [Config Option] (Object/String/Number)
     */
    activeItem?: any,

    /**
     * [Config Option] (Boolean)
     */
    autoDestroy?: boolean,

    /**
     * [Config Option] (String/Object/Boolean)
     */
    cardSwitchAnimation?: any,

    /**
     * [Config Option] (Object)
     */
    control?: any,

    /**
     * [Config Option] (String)
     */
    defaultType?: string,

    /**
     * [Config Option] (Object)
     */
    defaults?: any,

    /**
     * [Config Option] (Boolean)
     */
    hideOnMaskTap?: boolean,

    /**
     * [Config Option] (Array/Object)
     */
    items?: any,

    /**
     * [Config Option] (Object/String)
     */
    layout?: any,

    /**
     * [Config Option] (Boolean/Object/Ext.Mask/Ext.LoadMask)
     */
    masked?: any,

    /**
     * [Config Option] (Boolean)
     */
    modal?: boolean,

    /**
     * [Config Option] (Boolean/String/Object)
     */
    scroll?: any,

    /**
     * [Config Option] (Boolean/String/Object)
     */
    scrollable?: any,

    /**
     * [Method] Adds one or more Components to this Container
     * @param newItems Object/Object[]/Ext.Component/Ext.Component[] The new items to add to the Container.
     * @returns Ext.Component The last item added to the Container from the newItems array.
     */
    add?: (newItems?: any) => Ext$IComponent,

    /**
     * [Method] Adds an array of Components to this Container
     * @param items Array The array of items to add to this container.
     * @returns Array The array of items after they have been added.
     */
    addAll?: (items?: any[]) => any[],

    /**
     * [Method] Animates to the supplied activeItem with a specified animation
     * @param activeItem Object/Number The item or item index to make active.
     * @param animation Object/Ext.fx.layout.Card Card animation configuration or instance.
     */
    animateActiveItem?: (activeItem?: any, animation?: any) => void,

    /**
     * [Method] Changes the masked configuration when its setter is called which will convert the value into a proper object instanc
     * @param masked Boolean/Object/Ext.Mask/Ext.LoadMask
     * @returns Object
     */
    applyMasked?: (masked?: any) => any,

    /**
     * [Method] Retrieves the first direct child of this container which matches the passed selector
     * @param selector String An Ext.ComponentQuery selector.
     * @returns Ext.Component
     */
    child?: (selector?: string) => Ext$IComponent,

    /**
     * [Method]
     */
    destroy?: () => void,

    /**
     * [Method] Retrieves the first descendant of this container which matches the passed selector
     * @param selector String An Ext.ComponentQuery selector.
     * @returns Ext.Component
     */
    down?: (selector?: string) => Ext$IComponent,

    /**
     * [Method] Returns the value of activeItem
     * @returns Object/String/Number
     */
    getActiveItem?: () => any,

    /**
     * [Method] Returns the Component for a given index in the Container s items
     * @param index Number The index of the Component to return.
     * @returns Ext.Component The item at the specified index, if found.
     */
    getAt?: (index?: number) => Ext$IComponent,

    /**
     * [Method] Returns the value of autoDestroy
     * @returns Boolean
     */
    getAutoDestroy?: () => boolean,

    /**
     * [Method] Examines this container s items property and gets a direct child component of this container
     * @param component String/Number This parameter may be any of the following:  {String} : representing the itemId or id of the child component. {Number} : representing the position of the child component within the items property. For additional information see Ext.util.MixedCollection.get.
     * @returns Ext.Component The component (if found).
     */
    getComponent?: (component?: any) => Ext$IComponent,

    /**
     * [Method] Returns the value of control
     * @returns Object
     */
    getControl?: () => any,

    /**
     * [Method] Returns the value of defaultType
     * @returns String
     */
    getDefaultType?: () => string,

    /**
     * [Method] Returns the value of defaults
     * @returns Object
     */
    getDefaults?: () => any,

    /**
     * [Method] Finds a docked item of this container using a reference idor an index of its location in getDockedItems
     * @param component String/Number The id or index of the component to find.
     * @returns Ext.Component/Boolean The docked component, if found.
     */
    getDockedComponent?: (component?: any) => any,

    /**
     * [Method] Returns all the Ext Component docked items in this container
     * @returns Array The docked items of this container.
     */
    getDockedItems?: () => any[],

    /**
     * [Method] Returns the value of hideOnMaskTap
     * @returns Boolean
     */
    getHideOnMaskTap?: () => boolean,

    /**
     * [Method] Returns all inner items of this container
     * @returns Array The inner items of this container.
     */
    getInnerItems?: () => any[],

    /**
     * [Method] Returns the value of items
     * @returns Array/Object
     */
    getItems?: () => any,

    /**
     * [Method] Returns the value of masked
     * @returns Boolean/Object/Ext.Mask/Ext.LoadMask
     */
    getMasked?: () => any,

    /**
     * [Method] Returns the value of modal
     * @returns Boolean
     */
    getModal?: () => boolean,

    /**
     * [Method] Returns an the scrollable instance for this container which is a Ext scroll View class
     * @returns Ext.scroll.View The scroll view.
     */
    getScrollable?: () => Ext$scroll$IView,

    /**
     * [Method] Hides this Component optionally using an animation
     * @returns Ext.Component
     */
    hide?: () => Ext$IComponent,

    /**
     * [Method] Adds a child Component at the given index
     * @param index Number The index to insert the Component at.
     * @param item Object The Component to insert.
     */
    insert?: (index?: number, item?: any) => void,

    /**
     * [Method] Convenience method which calls setMasked with a value of true to show the mask
     * @param mask Object
     */
    mask?: (mask?: any) => void,

    /**
     * [Method] Retrieves all descendant components which match the passed selector
     * @param selector String Selector complying to an Ext.ComponentQuery selector.
     * @returns Array Ext.Component's which matched the selector.
     */
    query?: (selector?: string) => any[],

    /**
     * [Method] Removes an item from this Container optionally destroying it
     * @param item Object The item to remove.
     * @param destroy Boolean Calls the Component's destroy method if true.
     * @returns Ext.Component this
     */
    remove?: (item?: any, destroy?: boolean) => Ext$IComponent,

    /**
     * [Method] Removes all items currently in the Container optionally destroying them all
     * @param destroy Boolean If true, destroys each removed Component.
     * @param everything Boolean If true, completely remove all items including docked / centered and floating items.
     * @returns Ext.Component this
     */
    removeAll?: (destroy?: boolean, everything?: boolean) => Ext$IComponent,

    /**
     * [Method] Removes the Component at the specified index  myContainer removeAt 0 removes the first item
     * @param index Number The index of the Component to remove.
     * @returns Ext.Container this
     */
    removeAt?: (index?: number) => Ext$IContainer,

    /**
     * [Method] Removes a docked item from this Container
     * @param item Object The item to remove.
     * @param destroy Boolean Calls the Component's destroy method if true.
     * @returns Ext.Component this
     */
    removeDocked?: (item?: any, destroy?: boolean) => Ext$IComponent,

    /**
     * [Method] Removes an inner Component at the specified index  myContainer removeInnerAt 0 removes the first item of the in
     * @param index Number The index of the Component to remove.
     * @returns Ext.Container this
     */
    removeInnerAt?: (index?: number) => Ext$IContainer,

    /**
     * [Method] Sets the value of activeItem
     * @param activeItem Object/String/Number The new value.
     */
    setActiveItem?: (activeItem?: any) => void,

    /**
     * [Method] Sets the value of autoDestroy
     * @param autoDestroy Boolean The new value.
     */
    setAutoDestroy?: (autoDestroy?: boolean) => void,

    /**
     * [Method] Sets the value of control
     * @param control Object The new value.
     */
    setControl?: (control?: any) => void,

    /**
     * [Method] Sets the value of defaultType
     * @param defaultType String The new value.
     */
    setDefaultType?: (defaultType?: string) => void,

    /**
     * [Method] Sets the value of defaults
     * @param defaults Object The new value.
     */
    setDefaults?: (defaults?: any) => void,

    /**
     * [Method] Sets the value of hideOnMaskTap
     * @param hideOnMaskTap Boolean The new value.
     */
    setHideOnMaskTap?: (hideOnMaskTap?: boolean) => void,

    /**
     * [Method] Sets the value of items
     * @param items Array/Object The new value.
     */
    setItems?: (items?: any) => void,

    /**
     * [Method] Sets the value of layout
     * @param layout Object/String The new value.
     */
    setLayout?: (layout?: any) => void,

    /**
     * [Method] Sets the value of masked
     * @param masked Boolean/Object/Ext.Mask/Ext.LoadMask The new value.
     */
    setMasked?: (masked?: any) => void,

    /**
     * [Method] Sets the value of modal
     * @param modal Boolean The new value.
     */
    setModal?: (modal?: boolean) => void,

    /**
     * [Method] Sets the value of scrollable
     * @param scrollable Boolean/String/Object The new value.
     * @returns Ext.scroll.View The scroll view.
     */
    setScrollable?: (scrollable?: any) => Ext$scroll$IView,

    /**
     * [Method] Shows this component optionally using an animation
     * @returns Ext.Component
     */
    show?: () => Ext$IComponent,

    /**
     * [Method] Convenience method which calls setMasked with a value of false to hide the mask
     */
    unmask?: () => void
  } & Ext$IComponent;

  declare export type Ext$data$IXmlWriter = {
    /**
     * [Config Option] (String)
     */
    defaultDocumentRoot?: string,

    /**
     * [Config Option] (String)
     */
    documentRoot?: string,

    /**
     * [Config Option] (String)
     */
    header?: string,

    /**
     * [Config Option] (String)
     */
    record?: string,

    /**
     * [Method] Returns the value of defaultDocumentRoot
     * @returns String
     */
    getDefaultDocumentRoot?: () => string,

    /**
     * [Method] Returns the value of documentRoot
     * @returns String
     */
    getDocumentRoot?: () => string,

    /**
     * [Method] Returns the value of header
     * @returns String
     */
    getHeader?: () => string,

    /**
     * [Method] Returns the value of record
     * @returns String
     */
    getRecord?: () => string,

    /**
     * [Method] Sets the value of defaultDocumentRoot
     * @param defaultDocumentRoot String The new value.
     */
    setDefaultDocumentRoot?: (defaultDocumentRoot?: string) => void,

    /**
     * [Method] Sets the value of documentRoot
     * @param documentRoot String The new value.
     */
    setDocumentRoot?: (documentRoot?: string) => void,

    /**
     * [Method] Sets the value of header
     * @param header String The new value.
     */
    setHeader?: (header?: string) => void,

    /**
     * [Method] Sets the value of record
     * @param record String The new value.
     */
    setRecord?: (record?: string) => void,

    /**
     * [Method]
     * @param request Object
     * @param data Array
     * @returns Object
     */
    writeRecords?: (request?: any, data?: any[]) => any
  } & undefined.IWriter;

  declare export type Ext$util$IWrapper = {
    /**
     * [Method]
     */
    destroy?: () => void
  } & Ext$IBase &
    undefined.IBindable;

  declare export type Ext$IModelMgr = {} & Ext$IAbstractManager;

  declare export class Ext$ModelMgr {
    /**
     * [Property] (Ext.util.HashMap)
     */
    static all: util$IHashMap;

    /**
     * [Property] (Object)
     */
    static associationStack: any;

    /**
     * [Property] (Object)
     */
    static defaultProxyType: any;

    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method] Creates a new instance of a Model using the given data
     * @param data Object Data to initialize the Model's fields with.
     * @param name String The name of the model to create.
     * @param id Number Unique id of the Model instance (see Ext.data.Model).
     * @returns Object
     */
    static create(data?: any, name?: string, id?: number): any;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Executes the specified function once for each item in the collection
     * @param fn Function The function to execute.
     * @param scope Object The scope to execute in.
     */
    static each(fn?: any, scope?: any): void;

    /**
     * [Method] Returns an item by id
     * @param id String The id of the item.
     * @returns Object The item, undefined if not found.
     */
    static get(id?: string): any;

    /**
     * [Method] Gets the number of items in the collection
     * @returns Number The number of items in the collection.
     */
    static getCount(): number;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Returns the Ext data Model for a given model name
     * @param id String/Object The id of the model or the model instance.
     * @returns Ext.data.Model A model class.
     */
    static getModel(id?: any): data$IModel;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Checks if an item type is registered
     * @param type String The mnemonic string by which the class may be looked up.
     * @returns Boolean Whether the type is registered.
     */
    static isRegistered(type?: string): boolean;

    /**
     * [Method] Registers a function that will be called when an item with the specified id is added to the manager
     * @param id String The item id.
     * @param fn Function The callback function. Called with a single parameter, the item.
     * @param scope Object The scope (this reference) in which the callback is executed. Defaults to the item.
     */
    static onAvailable(id?: string, fn?: any, scope?: any): void;

    /**
     * [Method] Registers an item to be managed
     * @param item Object The item to register.
     */
    static register(item?: any): void;

    /**
     * [Method] Registers a model definition
     * @param name String
     * @param config Object
     * @returns Object
     */
    static registerType(name?: string, config?: any): any;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;

    /**
     * [Method] Unregisters an item by removing it from this manager
     * @param item Object The item to unregister.
     */
    static unregister(item?: any): void;
  }

  declare export type Ext$IModelManager = {} & Ext$IAbstractManager;

  declare export class Ext$ModelManager {
    /**
     * [Property] (Ext.util.HashMap)
     */
    static all: util$IHashMap;

    /**
     * [Property] (Object)
     */
    static associationStack: any;

    /**
     * [Property] (Object)
     */
    static defaultProxyType: any;

    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method] Creates a new instance of a Model using the given data
     * @param data Object Data to initialize the Model's fields with.
     * @param name String The name of the model to create.
     * @param id Number Unique id of the Model instance (see Ext.data.Model).
     * @returns Object
     */
    static create(data?: any, name?: string, id?: number): any;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Executes the specified function once for each item in the collection
     * @param fn Function The function to execute.
     * @param scope Object The scope to execute in.
     */
    static each(fn?: any, scope?: any): void;

    /**
     * [Method] Returns an item by id
     * @param id String The id of the item.
     * @returns Object The item, undefined if not found.
     */
    static get(id?: string): any;

    /**
     * [Method] Gets the number of items in the collection
     * @returns Number The number of items in the collection.
     */
    static getCount(): number;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Returns the Ext data Model for a given model name
     * @param id String/Object The id of the model or the model instance.
     * @returns Ext.data.Model A model class.
     */
    static getModel(id?: any): data$IModel;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Checks if an item type is registered
     * @param type String The mnemonic string by which the class may be looked up.
     * @returns Boolean Whether the type is registered.
     */
    static isRegistered(type?: string): boolean;

    /**
     * [Method] Registers a function that will be called when an item with the specified id is added to the manager
     * @param id String The item id.
     * @param fn Function The callback function. Called with a single parameter, the item.
     * @param scope Object The scope (this reference) in which the callback is executed. Defaults to the item.
     */
    static onAvailable(id?: string, fn?: any, scope?: any): void;

    /**
     * [Method] Registers an item to be managed
     * @param item Object The item to register.
     */
    static register(item?: any): void;

    /**
     * [Method] Registers a model definition
     * @param name String
     * @param config Object
     * @returns Object
     */
    static registerType(name?: string, config?: any): any;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;

    /**
     * [Method] Unregisters an item by removing it from this manager
     * @param item Object The item to unregister.
     */
    static unregister(item?: any): void;
  }

  declare export type Ext$proxy$IClientProxy = {
    /**
     * [Method] Abstract function that must be implemented by each ClientProxy subclass
     */
    clear?: () => void
  } & undefined.IProxy;

  declare export type Ext$IStoreMgr = {} & undefined.ICollection;

  declare export class Ext$StoreMgr {
    /**
     * [Property] (Array)
     */
    static all: any[];

    /**
     * [Property] (Object)
     */
    static currentSortFn: any;

    /**
     * [Property] (Boolean)
     */
    static dirtyFilterFn: boolean;

    /**
     * [Property] (Boolean)
     */
    static dirtySortFn: boolean;

    /**
     * [Property] (Boolean)
     */
    static filtered: boolean;

    /**
     * [Property] (Object)
     */
    static indices: any;

    /**
     * [Property] (Array)
     */
    static items: any[];

    /**
     * [Property] (Array)
     */
    static keys: any[];

    /**
     * [Property] (Number)
     */
    static length: number;

    /**
     * [Property] (Object)
     */
    static map: any;

    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Property] (Boolean)
     */
    static sorted: boolean;

    /**
     * [Method] Adds an item to the collection
     * @param key String The key to associate with the item, or the new item. If a getKey implementation was specified for this MixedCollection, or if the key of the stored items is in a property called id, the MixedCollection will be able to derive the key for the new item. In this case just pass the new item in this parameter.
     * @param item Object The item to add.
     * @returns Object The item added.
     */
    static add(key?: string, item?: any): any;

    /**
     * [Method] Adds all elements of an Array or an Object to the collection
     * @param addItems Object/Array An Object containing properties which will be added to the collection, or an Array of values, each of which are added to the collection. Functions references will be added to the collection if {@link} Ext.util.MixedCollection.allowFunctions allowFunctions} has been set to true.
     */
    static addAll(addItems?: any): void;

    /**
     * [Method] This method adds a filter
     * @param filter Ext.util.Sorter/Function/Object Can be an instance of Ext.util.Filter, an object representing an Ext.util.Filter configuration, or a filter function.
     */
    static addFilter(filter?: any): void;

    /**
     * [Method] This method adds all the filters in a passed array
     * @param filters Object
     * @returns Object
     */
    static addFilters(filters?: any): any;

    /**
     * [Method] This method adds a sorter
     * @param sorter Ext.util.Sorter/String/Function/Object Can be an instance of Ext.util.Sorter, a string indicating a property name, an object representing an Ext.util.Sorter configuration, or a sort function.
     * @param defaultDirection String The default direction for each sorter in the array. Defaults to the value of defaultSortDirection. Can be either 'ASC' or 'DESC'.
     */
    static addSorter(sorter?: any, defaultDirection?: string): void;

    /**
     * [Method] This method adds all the sorters in a passed array
     * @param sorters Array An array with sorters. A sorter can be an instance of Ext.util.Sorter, a string indicating a property name, an object representing an Ext.util.Sorter configuration, or a sort function.
     * @param defaultDirection String The default direction for each sorter in the array. Defaults to the value of defaultSortDirection. Can be either 'ASC' or 'DESC'.
     */
    static addSorters(sorters?: any[], defaultDirection?: string): void;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method] Removes all items from the collection
     */
    static clear(): void;

    /**
     * [Method] Creates a shallow copy of this collection
     * @returns Ext.util.MixedCollection
     */
    static clone(): util$IMixedCollection;

    /**
     * [Method] Returns true if the collection contains the passed Object as an item
     * @param item Object The Object to look for in the collection.
     * @returns Boolean true if the collection contains the Object as an item.
     */
    static contains(item?: any): boolean;

    /**
     * [Method] Returns true if the collection contains the passed Object as a key
     * @param key String The key to look for in the collection.
     * @returns Boolean true if the collection contains the Object as a key.
     */
    static containsKey(key?: string): boolean;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Executes the specified function once for every item in the collection
     * @param fn Function The function to execute for each item.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the current item in the iteration.
     */
    static each(fn?: any, scope?: any): void;

    /**
     * [Method] Executes the specified function once for every key in the collection passing each key and its associated item as th
     * @param fn Function The function to execute for each item.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the browser window.
     */
    static eachKey(fn?: any, scope?: any): void;

    /**
     * [Method] This method will sort a collection based on the currently configured sorters
     * @param property Object
     * @param value Object
     * @param anyMatch Object
     * @param caseSensitive Object
     * @returns Array
     */
    static filter(
      property?: any,
      value?: any,
      anyMatch?: any,
      caseSensitive?: any
    ): any[];

    /**
     * [Method] Filter by a function
     * @param fn Function The function to be called.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to this MixedCollection.
     * @returns Ext.util.MixedCollection The new filtered collection
     */
    static filterBy(fn?: any, scope?: any): util$IMixedCollection;

    /**
     * [Method] Returns the first item in the collection which elicits a true return value from the passed selection function
     * @param fn Function The selection function to execute for each item.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the browser window.
     * @returns Object The first item in the collection which returned true from the selection function.
     */
    static findBy(fn?: any, scope?: any): any;

    /**
     * [Method] Find the index of the first matching object in this collection by a function
     * @param fn Function The function to be called.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to this MixedCollection.
     * @param start Number The index to start searching at.
     * @returns Number The matched index, or -1 if the item was not found.
     */
    static findIndexBy(fn?: any, scope?: any, start?: number): number;

    /**
     * [Method] This method returns the index that a given item would be inserted into a given array based on the current sorters
     * @param items Array The array that you want to insert the item into.
     * @param item Mixed The item that you want to insert into the items array.
     * @returns Number The index for the given item in the given array based on the current sorters.
     */
    static findInsertionIndex(items?: any[], item?: any): number;

    /**
     * [Method] Returns the first item in the collection
     * @returns Object the first item in the collection.
     */
    static first(): any;

    /**
     * [Method] Returns the item associated with the passed key OR index
     * @param key String/Number The key or index of the item.
     * @returns Object If the item is found, returns the item. If the item was not found, returns undefined. If an item was found, but is a Class, returns null.
     */
    static get(key?: any): any;

    /**
     * [Method] Returns the item at the specified index
     * @param index Number The index of the item.
     * @returns Object The item at the specified index.
     */
    static getAt(index?: number): any;

    /**
     * [Method] Returns the value of autoFilter
     * @returns Boolean
     */
    static getAutoFilter(): boolean;

    /**
     * [Method] Returns the value of autoSort
     * @returns Boolean
     */
    static getAutoSort(): boolean;

    /**
     * [Method] Returns the item associated with the passed key
     * @param key String/Number The key of the item.
     * @returns Object The item associated with the passed key.
     */
    static getByKey(key?: any): any;

    /**
     * [Method] Returns the number of items in the collection
     * @returns Number the number of items in the collection.
     */
    static getCount(): number;

    /**
     * [Method] Returns the value of defaultSortDirection
     * @returns String
     */
    static getDefaultSortDirection(): string;

    /**
     * [Method] Returns an up to date sort function
     * @returns Function sortFn The sort function.
     */
    static getFilterFn(): any;

    /**
     * [Method] Returns the value of filterRoot
     * @returns String
     */
    static getFilterRoot(): string;

    /**
     * [Method] Returns the value of filters
     * @returns Array
     */
    static getFilters(): any[];

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] getKey implementation for MixedCollection
     * @param o Object
     * @returns Object The key for the passed item.
     */
    static getKey(o?: any): any;

    /**
     * [Method] Returns a range of items in this collection
     * @param start Number The starting index.
     * @param end Number The ending index. Defaults to the last item.
     * @returns Array An array of items.
     */
    static getRange(start?: number, end?: number): any[];

    /**
     * [Method] Returns an up to date sort function
     * @returns Function The sort function.
     */
    static getSortFn(): any;

    /**
     * [Method] Returns the value of sortRoot
     * @returns String
     */
    static getSortRoot(): string;

    /**
     * [Method] Returns the value of sorters
     * @returns Array
     */
    static getSorters(): any[];

    /**
     * [Method] Returns index within the collection of the passed Object
     * @param item Object The item to find the index of.
     * @returns Number Index of the item. Returns -1 if not found.
     */
    static indexOf(item?: any): number;

    /**
     * [Method] Returns index within the collection of the passed key
     * @param key String The key to find the index of.
     * @returns Number Index of the key.
     */
    static indexOfKey(key?: string): number;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Inserts an item at the specified index in the collection
     * @param index Number The index to insert the item at.
     * @param key String The key to associate with the new item, or the item itself.
     * @param item Object If the second parameter was a key, the new item.
     * @returns Object The item inserted.
     */
    static insert(index?: number, key?: string, item?: any): any;

    /**
     * [Method] This method adds a filter at a given index
     * @param index Number The index at which to insert the filter.
     * @param filter Ext.util.Sorter/Function/Object Can be an instance of Ext.util.Filter, an object representing an Ext.util.Filter configuration, or a filter function.
     * @returns Object
     */
    static insertFilter(index?: number, filter?: any): any;

    /**
     * [Method] This method inserts all the filters in the passed array at the given index
     * @param index Number The index at which to insert the filters.
     * @param filters Array Each filter can be an instance of Ext.util.Filter, an object representing an Ext.util.Filter configuration, or a filter function.
     * @returns Array
     */
    static insertFilters(index?: number, filters?: any[]): any[];

    /**
     * [Method] This method adds a sorter at a given index
     * @param index Number The index at which to insert the sorter.
     * @param sorter Ext.util.Sorter/String/Function/Object Can be an instance of Ext.util.Sorter, a string indicating a property name, an object representing an Ext.util.Sorter configuration, or a sort function.
     * @param defaultDirection String The default direction for each sorter in the array. Defaults to the value of defaultSortDirection. Can be either 'ASC' or 'DESC'.
     */
    static insertSorter(
      index?: number,
      sorter?: any,
      defaultDirection?: string
    ): void;

    /**
     * [Method] This method inserts all the sorters in the passed array at the given index
     * @returns Ext.util.Collection this
     */
    static insertSorters(): util$ICollection;

    /**
     * [Method] Returns the last item in the collection
     * @returns Object the last item in the collection.
     */
    static last(): any;

    /**
     * [Method] Gets a registered Store by its id returns a passed store instance or returns a new instance of a store created with
     * @param store String/Object The id of the Store, or a Store instance, or a store configuration.
     * @returns Ext.data.Store
     */
    static lookup(store?: any): data$IStore;

    /**
     * [Method] Registers one or more Stores with the StoreManager
     * @param stores Ext.data.Store... Any number of Store instances.
     */
    static register(stores: data$IStore): void;

    /**
     * [Method] Remove an item from the collection
     * @param item Object The item to remove.
     * @returns Object The item removed or false if no item was removed.
     */
    static remove(item?: any): any;

    /**
     * [Method] Remove all items in the passed array from the collection
     * @param items Array An array of items to be removed.
     * @returns Ext.util.MixedCollection this object
     */
    static removeAll(items?: any[]): util$IMixedCollection;

    /**
     * [Method] Remove an item from a specified index in the collection
     * @param index Number The index within the collection of the item to remove.
     * @returns Object The item removed or false if no item was removed.
     */
    static removeAt(index?: number): any;

    /**
     * [Method] Removed an item associated with the passed key from the collection
     * @param key String The key of the item to remove.
     * @returns Object/Boolean The item removed or false if no item was removed.
     */
    static removeAtKey(key?: string): any;

    /**
     * [Method] This method removes all the filters in a passed array
     * @param filters Object
     * @returns Ext.util.Collection this
     */
    static removeFilters(filters?: any): util$ICollection;

    /**
     * [Method] This method removes a sorter
     * @param sorter Ext.util.Sorter/String/Function/Object Can be an instance of Ext.util.Sorter, a string indicating a property name, an object representing an Ext.util.Sorter configuration, or a sort function.
     */
    static removeSorter(sorter?: any): void;

    /**
     * [Method] This method removes all the sorters in a passed array
     * @param sorters Object
     * @returns Ext.util.Collection this
     */
    static removeSorters(sorters?: any): util$ICollection;

    /**
     * [Method] Replaces an item in the collection
     * @param oldKey String The key associated with the item to replace, or the replacement item. If you supplied a getKey implementation for this MixedCollection, or if the key of your stored items is in a property called id, then the MixedCollection will be able to derive the key of the replacement item. If you want to replace an item with one having the same key value, then just pass the replacement item in this parameter.
     * @param item Object {Object} item (optional) If the first parameter passed was a key, the item to associate with that key.
     * @returns Object The new item.
     */
    static replace(oldKey?: string, item?: any): any;

    /**
     * [Method] Sets the value of autoFilter
     * @param autoFilter Boolean The new value.
     */
    static setAutoFilter(autoFilter?: boolean): void;

    /**
     * [Method] Sets the value of autoSort
     * @param autoSort Boolean The new value.
     */
    static setAutoSort(autoSort?: boolean): void;

    /**
     * [Method] Sets the value of defaultSortDirection
     * @param defaultSortDirection String The new value.
     */
    static setDefaultSortDirection(defaultSortDirection?: string): void;

    /**
     * [Method] Sets the value of filterRoot
     * @param filterRoot String The new value.
     */
    static setFilterRoot(filterRoot?: string): void;

    /**
     * [Method] Sets the value of filters
     * @param filters Array The new value.
     */
    static setFilters(filters?: any[]): void;

    /**
     * [Method] Sets the value of sortRoot
     * @param sortRoot String The new value.
     */
    static setSortRoot(sortRoot?: string): void;

    /**
     * [Method] Sets the value of sorters
     * @param sorters Array The new value.
     */
    static setSorters(sorters?: any[]): void;

    /**
     * [Method] This method will sort an array based on the currently configured sorters
     * @param sorters Object
     * @param defaultDirection Object
     * @returns Array The array you passed after it is sorted.
     */
    static sort(sorters?: any, defaultDirection?: any): any[];

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;

    /**
     * [Method] Unregisters one or more Stores with the StoreManager
     * @param stores String/Object... Any number of Store instances or ID-s.
     */
    static unregister(stores?: any): void;
  }

  declare export type Ext$IStoreManager = {} & undefined.ICollection;

  declare export class Ext$StoreManager {
    /**
     * [Property] (Array)
     */
    static all: any[];

    /**
     * [Property] (Object)
     */
    static currentSortFn: any;

    /**
     * [Property] (Boolean)
     */
    static dirtyFilterFn: boolean;

    /**
     * [Property] (Boolean)
     */
    static dirtySortFn: boolean;

    /**
     * [Property] (Boolean)
     */
    static filtered: boolean;

    /**
     * [Property] (Object)
     */
    static indices: any;

    /**
     * [Property] (Array)
     */
    static items: any[];

    /**
     * [Property] (Array)
     */
    static keys: any[];

    /**
     * [Property] (Number)
     */
    static length: number;

    /**
     * [Property] (Object)
     */
    static map: any;

    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Property] (Boolean)
     */
    static sorted: boolean;

    /**
     * [Method] Adds an item to the collection
     * @param key String The key to associate with the item, or the new item. If a getKey implementation was specified for this MixedCollection, or if the key of the stored items is in a property called id, the MixedCollection will be able to derive the key for the new item. In this case just pass the new item in this parameter.
     * @param item Object The item to add.
     * @returns Object The item added.
     */
    static add(key?: string, item?: any): any;

    /**
     * [Method] Adds all elements of an Array or an Object to the collection
     * @param addItems Object/Array An Object containing properties which will be added to the collection, or an Array of values, each of which are added to the collection. Functions references will be added to the collection if {@link} Ext.util.MixedCollection.allowFunctions allowFunctions} has been set to true.
     */
    static addAll(addItems?: any): void;

    /**
     * [Method] This method adds a filter
     * @param filter Ext.util.Sorter/Function/Object Can be an instance of Ext.util.Filter, an object representing an Ext.util.Filter configuration, or a filter function.
     */
    static addFilter(filter?: any): void;

    /**
     * [Method] This method adds all the filters in a passed array
     * @param filters Object
     * @returns Object
     */
    static addFilters(filters?: any): any;

    /**
     * [Method] This method adds a sorter
     * @param sorter Ext.util.Sorter/String/Function/Object Can be an instance of Ext.util.Sorter, a string indicating a property name, an object representing an Ext.util.Sorter configuration, or a sort function.
     * @param defaultDirection String The default direction for each sorter in the array. Defaults to the value of defaultSortDirection. Can be either 'ASC' or 'DESC'.
     */
    static addSorter(sorter?: any, defaultDirection?: string): void;

    /**
     * [Method] This method adds all the sorters in a passed array
     * @param sorters Array An array with sorters. A sorter can be an instance of Ext.util.Sorter, a string indicating a property name, an object representing an Ext.util.Sorter configuration, or a sort function.
     * @param defaultDirection String The default direction for each sorter in the array. Defaults to the value of defaultSortDirection. Can be either 'ASC' or 'DESC'.
     */
    static addSorters(sorters?: any[], defaultDirection?: string): void;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method] Removes all items from the collection
     */
    static clear(): void;

    /**
     * [Method] Creates a shallow copy of this collection
     * @returns Ext.util.MixedCollection
     */
    static clone(): util$IMixedCollection;

    /**
     * [Method] Returns true if the collection contains the passed Object as an item
     * @param item Object The Object to look for in the collection.
     * @returns Boolean true if the collection contains the Object as an item.
     */
    static contains(item?: any): boolean;

    /**
     * [Method] Returns true if the collection contains the passed Object as a key
     * @param key String The key to look for in the collection.
     * @returns Boolean true if the collection contains the Object as a key.
     */
    static containsKey(key?: string): boolean;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Executes the specified function once for every item in the collection
     * @param fn Function The function to execute for each item.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the current item in the iteration.
     */
    static each(fn?: any, scope?: any): void;

    /**
     * [Method] Executes the specified function once for every key in the collection passing each key and its associated item as th
     * @param fn Function The function to execute for each item.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the browser window.
     */
    static eachKey(fn?: any, scope?: any): void;

    /**
     * [Method] This method will sort a collection based on the currently configured sorters
     * @param property Object
     * @param value Object
     * @param anyMatch Object
     * @param caseSensitive Object
     * @returns Array
     */
    static filter(
      property?: any,
      value?: any,
      anyMatch?: any,
      caseSensitive?: any
    ): any[];

    /**
     * [Method] Filter by a function
     * @param fn Function The function to be called.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to this MixedCollection.
     * @returns Ext.util.MixedCollection The new filtered collection
     */
    static filterBy(fn?: any, scope?: any): util$IMixedCollection;

    /**
     * [Method] Returns the first item in the collection which elicits a true return value from the passed selection function
     * @param fn Function The selection function to execute for each item.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the browser window.
     * @returns Object The first item in the collection which returned true from the selection function.
     */
    static findBy(fn?: any, scope?: any): any;

    /**
     * [Method] Find the index of the first matching object in this collection by a function
     * @param fn Function The function to be called.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to this MixedCollection.
     * @param start Number The index to start searching at.
     * @returns Number The matched index, or -1 if the item was not found.
     */
    static findIndexBy(fn?: any, scope?: any, start?: number): number;

    /**
     * [Method] This method returns the index that a given item would be inserted into a given array based on the current sorters
     * @param items Array The array that you want to insert the item into.
     * @param item Mixed The item that you want to insert into the items array.
     * @returns Number The index for the given item in the given array based on the current sorters.
     */
    static findInsertionIndex(items?: any[], item?: any): number;

    /**
     * [Method] Returns the first item in the collection
     * @returns Object the first item in the collection.
     */
    static first(): any;

    /**
     * [Method] Returns the item associated with the passed key OR index
     * @param key String/Number The key or index of the item.
     * @returns Object If the item is found, returns the item. If the item was not found, returns undefined. If an item was found, but is a Class, returns null.
     */
    static get(key?: any): any;

    /**
     * [Method] Returns the item at the specified index
     * @param index Number The index of the item.
     * @returns Object The item at the specified index.
     */
    static getAt(index?: number): any;

    /**
     * [Method] Returns the value of autoFilter
     * @returns Boolean
     */
    static getAutoFilter(): boolean;

    /**
     * [Method] Returns the value of autoSort
     * @returns Boolean
     */
    static getAutoSort(): boolean;

    /**
     * [Method] Returns the item associated with the passed key
     * @param key String/Number The key of the item.
     * @returns Object The item associated with the passed key.
     */
    static getByKey(key?: any): any;

    /**
     * [Method] Returns the number of items in the collection
     * @returns Number the number of items in the collection.
     */
    static getCount(): number;

    /**
     * [Method] Returns the value of defaultSortDirection
     * @returns String
     */
    static getDefaultSortDirection(): string;

    /**
     * [Method] Returns an up to date sort function
     * @returns Function sortFn The sort function.
     */
    static getFilterFn(): any;

    /**
     * [Method] Returns the value of filterRoot
     * @returns String
     */
    static getFilterRoot(): string;

    /**
     * [Method] Returns the value of filters
     * @returns Array
     */
    static getFilters(): any[];

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] getKey implementation for MixedCollection
     * @param o Object
     * @returns Object The key for the passed item.
     */
    static getKey(o?: any): any;

    /**
     * [Method] Returns a range of items in this collection
     * @param start Number The starting index.
     * @param end Number The ending index. Defaults to the last item.
     * @returns Array An array of items.
     */
    static getRange(start?: number, end?: number): any[];

    /**
     * [Method] Returns an up to date sort function
     * @returns Function The sort function.
     */
    static getSortFn(): any;

    /**
     * [Method] Returns the value of sortRoot
     * @returns String
     */
    static getSortRoot(): string;

    /**
     * [Method] Returns the value of sorters
     * @returns Array
     */
    static getSorters(): any[];

    /**
     * [Method] Returns index within the collection of the passed Object
     * @param item Object The item to find the index of.
     * @returns Number Index of the item. Returns -1 if not found.
     */
    static indexOf(item?: any): number;

    /**
     * [Method] Returns index within the collection of the passed key
     * @param key String The key to find the index of.
     * @returns Number Index of the key.
     */
    static indexOfKey(key?: string): number;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Inserts an item at the specified index in the collection
     * @param index Number The index to insert the item at.
     * @param key String The key to associate with the new item, or the item itself.
     * @param item Object If the second parameter was a key, the new item.
     * @returns Object The item inserted.
     */
    static insert(index?: number, key?: string, item?: any): any;

    /**
     * [Method] This method adds a filter at a given index
     * @param index Number The index at which to insert the filter.
     * @param filter Ext.util.Sorter/Function/Object Can be an instance of Ext.util.Filter, an object representing an Ext.util.Filter configuration, or a filter function.
     * @returns Object
     */
    static insertFilter(index?: number, filter?: any): any;

    /**
     * [Method] This method inserts all the filters in the passed array at the given index
     * @param index Number The index at which to insert the filters.
     * @param filters Array Each filter can be an instance of Ext.util.Filter, an object representing an Ext.util.Filter configuration, or a filter function.
     * @returns Array
     */
    static insertFilters(index?: number, filters?: any[]): any[];

    /**
     * [Method] This method adds a sorter at a given index
     * @param index Number The index at which to insert the sorter.
     * @param sorter Ext.util.Sorter/String/Function/Object Can be an instance of Ext.util.Sorter, a string indicating a property name, an object representing an Ext.util.Sorter configuration, or a sort function.
     * @param defaultDirection String The default direction for each sorter in the array. Defaults to the value of defaultSortDirection. Can be either 'ASC' or 'DESC'.
     */
    static insertSorter(
      index?: number,
      sorter?: any,
      defaultDirection?: string
    ): void;

    /**
     * [Method] This method inserts all the sorters in the passed array at the given index
     * @returns Ext.util.Collection this
     */
    static insertSorters(): util$ICollection;

    /**
     * [Method] Returns the last item in the collection
     * @returns Object the last item in the collection.
     */
    static last(): any;

    /**
     * [Method] Gets a registered Store by its id returns a passed store instance or returns a new instance of a store created with
     * @param store String/Object The id of the Store, or a Store instance, or a store configuration.
     * @returns Ext.data.Store
     */
    static lookup(store?: any): data$IStore;

    /**
     * [Method] Registers one or more Stores with the StoreManager
     * @param stores Ext.data.Store... Any number of Store instances.
     */
    static register(stores: data$IStore): void;

    /**
     * [Method] Remove an item from the collection
     * @param item Object The item to remove.
     * @returns Object The item removed or false if no item was removed.
     */
    static remove(item?: any): any;

    /**
     * [Method] Remove all items in the passed array from the collection
     * @param items Array An array of items to be removed.
     * @returns Ext.util.MixedCollection this object
     */
    static removeAll(items?: any[]): util$IMixedCollection;

    /**
     * [Method] Remove an item from a specified index in the collection
     * @param index Number The index within the collection of the item to remove.
     * @returns Object The item removed or false if no item was removed.
     */
    static removeAt(index?: number): any;

    /**
     * [Method] Removed an item associated with the passed key from the collection
     * @param key String The key of the item to remove.
     * @returns Object/Boolean The item removed or false if no item was removed.
     */
    static removeAtKey(key?: string): any;

    /**
     * [Method] This method removes all the filters in a passed array
     * @param filters Object
     * @returns Ext.util.Collection this
     */
    static removeFilters(filters?: any): util$ICollection;

    /**
     * [Method] This method removes a sorter
     * @param sorter Ext.util.Sorter/String/Function/Object Can be an instance of Ext.util.Sorter, a string indicating a property name, an object representing an Ext.util.Sorter configuration, or a sort function.
     */
    static removeSorter(sorter?: any): void;

    /**
     * [Method] This method removes all the sorters in a passed array
     * @param sorters Object
     * @returns Ext.util.Collection this
     */
    static removeSorters(sorters?: any): util$ICollection;

    /**
     * [Method] Replaces an item in the collection
     * @param oldKey String The key associated with the item to replace, or the replacement item. If you supplied a getKey implementation for this MixedCollection, or if the key of your stored items is in a property called id, then the MixedCollection will be able to derive the key of the replacement item. If you want to replace an item with one having the same key value, then just pass the replacement item in this parameter.
     * @param item Object {Object} item (optional) If the first parameter passed was a key, the item to associate with that key.
     * @returns Object The new item.
     */
    static replace(oldKey?: string, item?: any): any;

    /**
     * [Method] Sets the value of autoFilter
     * @param autoFilter Boolean The new value.
     */
    static setAutoFilter(autoFilter?: boolean): void;

    /**
     * [Method] Sets the value of autoSort
     * @param autoSort Boolean The new value.
     */
    static setAutoSort(autoSort?: boolean): void;

    /**
     * [Method] Sets the value of defaultSortDirection
     * @param defaultSortDirection String The new value.
     */
    static setDefaultSortDirection(defaultSortDirection?: string): void;

    /**
     * [Method] Sets the value of filterRoot
     * @param filterRoot String The new value.
     */
    static setFilterRoot(filterRoot?: string): void;

    /**
     * [Method] Sets the value of filters
     * @param filters Array The new value.
     */
    static setFilters(filters?: any[]): void;

    /**
     * [Method] Sets the value of sortRoot
     * @param sortRoot String The new value.
     */
    static setSortRoot(sortRoot?: string): void;

    /**
     * [Method] Sets the value of sorters
     * @param sorters Array The new value.
     */
    static setSorters(sorters?: any[]): void;

    /**
     * [Method] This method will sort an array based on the currently configured sorters
     * @param sorters Object
     * @param defaultDirection Object
     * @returns Array The array you passed after it is sorted.
     */
    static sort(sorters?: any, defaultDirection?: any): any[];

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;

    /**
     * [Method] Unregisters one or more Stores with the StoreManager
     * @param stores String/Object... Any number of Store instances or ID-s.
     */
    static unregister(stores?: any): void;
  }

  declare export type Ext$dataview$INestedList = {
    /**
     * [Config Option] (Boolean)
     */
    allowDeselect?: boolean,

    /**
     * [Config Option] (Object)
     */
    backButton?: any,

    /**
     * [Config Option] (String)
     */
    backText?: string,

    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String/Object/Boolean)
     */
    cardSwitchAnimation?: any,

    /**
     * [Config Option] (Number)
     */
    clearSelectionDelay?: number,

    /**
     * [Config Option] (Ext.Component)
     */
    detailCard?: Ext$IComponent,

    /**
     * [Config Option] (Ext.Container)
     */
    detailContainer?: Ext$IContainer,

    /**
     * [Config Option] (String)
     */
    displayField?: string,

    /**
     * [Config Option] (String)
     */
    emptyText?: string,

    /**
     * [Config Option] (Number)
     */
    itemHeight?: number,

    /**
     * [Config Option] (Object)
     */
    listConfig?: any,

    /**
     * [Config Option] (String)
     */
    loadingText?: string,

    /**
     * [Config Option] (Boolean/Function)
     */
    onItemDisclosure?: any,

    /**
     * [Config Option] (Ext.data.TreeStore/String)
     */
    store?: any,

    /**
     * [Config Option] (String)
     */
    title?: string,

    /**
     * [Config Option] (Ext.Toolbar/Object/Boolean)
     */
    toolbar?: any,

    /**
     * [Config Option] (String)
     */
    ui?: string,

    /**
     * [Config Option] (Boolean)
     */
    updateTitleText?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    useSimpleItems?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    useTitleAsBackText?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    useToolbar?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    variableHeights?: boolean,

    /**
     * [Method] Returns the value of allowDeselect
     * @returns Boolean
     */
    getAllowDeselect?: () => boolean,

    /**
     * [Method] Returns the value of backButton
     * @returns Object
     */
    getBackButton?: () => any,

    /**
     * [Method] Returns the value of backText
     * @returns String
     */
    getBackText?: () => string,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of clearSelectionOnListChange
     * @returns Boolean
     */
    getClearSelectionOnListChange?: () => boolean,

    /**
     * [Method] Returns the value of detailCard
     * @returns Ext.Component
     */
    getDetailCard?: () => Ext$IComponent,

    /**
     * [Method] Returns the value of detailContainer
     * @returns Ext.Container
     */
    getDetailContainer?: () => Ext$IContainer,

    /**
     * [Method] Returns the value of displayField
     * @returns String
     */
    getDisplayField?: () => string,

    /**
     * [Method] Returns the value of emptyText
     * @returns String
     */
    getEmptyText?: () => string,

    /**
     * [Method] Returns the value of itemHeight
     * @returns Number
     */
    getItemHeight?: () => number,

    /**
     * [Method] Override this method to provide custom template rendering of individual nodes
     * @param node Ext.data.Record
     * @returns String
     */
    getItemTextTpl?: (node?: data$IRecord) => string,

    /**
     * [Method] Returns the value of listConfig
     * @returns Object
     */
    getListConfig?: () => any,

    /**
     * [Method] Returns the value of loadingText
     * @returns String
     */
    getLoadingText?: () => string,

    /**
     * [Method] Returns the value of onItemDisclosure
     * @returns Boolean/Function
     */
    getOnItemDisclosure?: () => any,

    /**
     * [Method] Returns the value of store
     * @returns Ext.data.TreeStore/String
     */
    getStore?: () => any,

    /**
     * [Method] Returns the subList for a specified node
     */
    getSubList?: () => void,

    /**
     * [Method] Returns the value of title
     * @returns String
     */
    getTitle?: () => string,

    /**
     * [Method] Override this method to provide custom template rendering of titles back buttons when useTitleAsBackText is enabled
     * @param node Ext.data.Record
     * @returns String
     */
    getTitleTextTpl?: (node?: data$IRecord) => string,

    /**
     * [Method] Returns the value of toolbar
     * @returns Ext.Toolbar/Object/Boolean
     */
    getToolbar?: () => any,

    /**
     * [Method] Returns the value of updateTitleText
     * @returns Boolean
     */
    getUpdateTitleText?: () => boolean,

    /**
     * [Method] Returns the value of useSimpleItems
     * @returns Boolean
     */
    getUseSimpleItems?: () => boolean,

    /**
     * [Method] Returns the value of useTitleAsBackText
     * @returns Boolean
     */
    getUseTitleAsBackText?: () => boolean,

    /**
     * [Method] Returns the value of useToolbar
     * @returns Boolean
     */
    getUseToolbar?: () => boolean,

    /**
     * [Method] Returns the value of variableHeights
     * @returns Boolean
     */
    getVariableHeights?: () => boolean,

    /**
     * [Method] The leaf you want to navigate to
     * @param node Ext.data.NodeInterface The specified node to navigate to.
     */
    goToLeaf?: (node?: data$INodeInterface) => void,

    /**
     * [Method] Method to handle going to a specific node within this nested list
     * @param node Ext.data.NodeInterface The specified node to navigate to.
     */
    goToNode?: (node?: data$INodeInterface) => void,

    /**
     * [Method] Called when the backButton has been tapped
     */
    onBackTap?: () => void,

    /**
     * [Method] Called when an list item has been tapped
     * @param list Ext.List The subList the item is on.
     * @param index Number The id of the item tapped.
     * @param target Ext.Element The list item tapped.
     * @param record Ext.data.Record The record which as tapped.
     * @param e Ext.event.Event The event.
     */
    onItemTap?: (
      list?: Ext$IList,
      index?: number,
      target?: Ext$IElement,
      record?: data$IRecord,
      e?: Ext$event$IEvent
    ) => void,

    /**
     * [Method] Sets the value of allowDeselect
     * @param allowDeselect Boolean The new value.
     */
    setAllowDeselect?: (allowDeselect?: boolean) => void,

    /**
     * [Method] Sets the value of backButton
     * @param backButton Object The new value.
     */
    setBackButton?: (backButton?: any) => void,

    /**
     * [Method] Sets the value of backText
     * @param backText String The new value.
     */
    setBackText?: (backText?: string) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of clearSelectionOnListChange
     * @param clearSelectionOnListChange Boolean The new value.
     */
    setClearSelectionOnListChange?: (
      clearSelectionOnListChange?: boolean
    ) => void,

    /**
     * [Method] Sets the value of detailCard
     * @param detailCard Ext.Component The new value.
     */
    setDetailCard?: (detailCard?: Ext$IComponent) => void,

    /**
     * [Method] Sets the value of detailContainer
     * @param detailContainer Ext.Container The new value.
     */
    setDetailContainer?: (detailContainer?: Ext$IContainer) => void,

    /**
     * [Method] Sets the value of displayField
     * @param displayField String The new value.
     */
    setDisplayField?: (displayField?: string) => void,

    /**
     * [Method] Sets the value of emptyText
     * @param emptyText String The new value.
     */
    setEmptyText?: (emptyText?: string) => void,

    /**
     * [Method] Sets the value of itemHeight
     * @param itemHeight Number The new value.
     */
    setItemHeight?: (itemHeight?: number) => void,

    /**
     * [Method] Sets the value of listConfig
     * @param listConfig Object The new value.
     */
    setListConfig?: (listConfig?: any) => void,

    /**
     * [Method] Sets the value of loadingText
     * @param loadingText String The new value.
     */
    setLoadingText?: (loadingText?: string) => void,

    /**
     * [Method] Sets the value of onItemDisclosure
     * @param onItemDisclosure Boolean/Function The new value.
     */
    setOnItemDisclosure?: (onItemDisclosure?: any) => void,

    /**
     * [Method] Sets the value of store
     * @param store Ext.data.TreeStore/String The new value.
     */
    setStore?: (store?: any) => void,

    /**
     * [Method] Sets the value of title
     * @param title String The new value.
     */
    setTitle?: (title?: string) => void,

    /**
     * [Method] Sets the value of toolbar
     * @param toolbar Ext.Toolbar/Object/Boolean The new value.
     */
    setToolbar?: (toolbar?: any) => void,

    /**
     * [Method] Sets the value of ui
     * @param ui Object The new value.
     */
    setUi?: (ui?: any) => void,

    /**
     * [Method] Sets the value of updateTitleText
     * @param updateTitleText Boolean The new value.
     */
    setUpdateTitleText?: (updateTitleText?: boolean) => void,

    /**
     * [Method] Sets the value of useSimpleItems
     * @param useSimpleItems Boolean The new value.
     */
    setUseSimpleItems?: (useSimpleItems?: boolean) => void,

    /**
     * [Method] Sets the value of useTitleAsBackText
     * @param useTitleAsBackText Boolean The new value.
     */
    setUseTitleAsBackText?: (useTitleAsBackText?: boolean) => void,

    /**
     * [Method] Sets the value of useToolbar
     * @param useToolbar Boolean The new value.
     */
    setUseToolbar?: (useToolbar?: boolean) => void,

    /**
     * [Method] Sets the value of variableHeights
     * @param variableHeights Boolean The new value.
     */
    setVariableHeights?: (variableHeights?: boolean) => void
  } & Ext$IContainer;

  declare export type Ext$IDataView = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Boolean)
     */
    blockRefresh?: boolean,

    /**
     * [Config Option] (Object[])
     */
    data?: any[],

    /**
     * [Config Option] (String)
     */
    defaultType?: string,

    /**
     * [Config Option] (Boolean)
     */
    deferEmptyText?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    deselectOnContainerClick?: boolean,

    /**
     * [Config Option] (String)
     */
    emptyText?: string,

    /**
     * [Config Option] (Boolean/Object)
     */
    inline?: any,

    /**
     * [Config Option] (String)
     */
    itemCls?: string,

    /**
     * [Config Option] (Object)
     */
    itemConfig?: any,

    /**
     * [Config Option] (Boolean)
     */
    itemSelector?: boolean,

    /**
     * [Config Option] (String/String[]/Ext.XTemplate)
     */
    itemTpl?: any,

    /**
     * [Config Option] (String/Boolean)
     */
    loadingText?: any,

    /**
     * [Config Option] (Number)
     */
    maxItemCache?: number,

    /**
     * [Config Option] (Boolean)
     */
    multiSelect?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    overItemCls?: boolean,

    /**
     * [Config Option] (String)
     */
    pressedCls?: string,

    /**
     * [Config Option] (Number)
     */
    pressedDelay?: number,

    /**
     * [Config Option] (Boolean)
     */
    scrollToTopOnRefresh?: boolean,

    /**
     * [Config Option] (Boolean/String/Object)
     */
    scrollable?: any,

    /**
     * [Config Option] (String)
     */
    selectedCls?: string,

    /**
     * [Config Option] (Boolean)
     */
    selectedItemCls?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    simpleSelect?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    singleSelect?: boolean,

    /**
     * [Config Option] (Ext.data.Store/Object)
     */
    store?: any,

    /**
     * [Config Option] (Boolean)
     */
    trackOver?: boolean,

    /**
     * [Config Option] (String)
     */
    triggerCtEvent?: string,

    /**
     * [Config Option] (String)
     */
    triggerEvent?: string,

    /**
     * [Config Option] (Boolean)
     */
    useComponents?: boolean,

    /**
     * [Method] Binds a new Store to this DataView
     */
    bindStore?: () => void,

    /**
     * [Method] Deselects any currently selected records and clears all stored selections
     */
    clearSelections?: () => void,

    /**
     * [Method] Function which can be overridden which returns the data object passed to this DataView s template to render the whole
     */
    collectData?: () => void,

    /**
     * [Method] Deselects the given record s
     * @param records Number/Array/Ext.data.Model The record(s) to deselect. Can also be a number to reference by index.
     * @param suppressEvent Boolean If true the deselect event will not be fired.
     */
    deselect?: (records?: any, suppressEvent?: boolean) => void,

    /**
     * [Method] Deselects all records
     * @param supress Object
     */
    deselectAll?: (supress?: any) => void,

    /**
     * [Method]
     */
    destroy?: () => void,

    /**
     * [Method] Deselects a record instance by record instance or index
     * @param records Ext.data.Model/Number An array of records or an index.
     * @param suppressEvent Boolean Set to false to not fire a deselect event.
     */
    doDeselect?: (records?: any, suppressEvent?: boolean) => void,

    /**
     * [Method] Selects a record instance by record instance or index
     * @param records Ext.data.Model/Number An array of records or an index.
     * @param keepExisting Boolean
     * @param suppressEvent Boolean Set to false to not fire a select event.
     */
    doSelect?: (
      records?: any,
      keepExisting?: boolean,
      suppressEvent?: boolean
    ) => void,

    /**
     * [Method] Returns the template node the passed child belongs to or null if it doesn t belong to one
     */
    findItemByChild?: () => void,

    /**
     * [Method] Returns the template node by the Ext EventObject or null if it is not found
     */
    findTargetByEvent?: () => void,

    /**
     * [Method] Returns the value of allowDeselect
     * @returns Boolean
     */
    getAllowDeselect?: () => boolean,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the number of selections
     * @returns Number
     */
    getCount?: () => number,

    /**
     * [Method] Returns the value of data
     * @returns Object[]
     */
    getData?: () => any[],

    /**
     * [Method] Returns the value of defaultType
     * @returns String
     */
    getDefaultType?: () => string,

    /**
     * [Method] Returns the value of deferEmptyText
     * @returns Boolean
     */
    getDeferEmptyText?: () => boolean,

    /**
     * [Method] Returns the value of deselectOnContainerClick
     * @returns Boolean
     */
    getDeselectOnContainerClick?: () => boolean,

    /**
     * [Method] Returns the value of disableSelection
     * @returns Boolean
     */
    getDisableSelection?: () => boolean,

    /**
     * [Method] Returns the value of emptyText
     * @returns String
     */
    getEmptyText?: () => string,

    /**
     * [Method] Returns the value of inline
     * @returns Boolean/Object
     */
    getInline?: () => any,

    /**
     * [Method] Returns an item at the specified index
     * @param index Number Index of the item.
     * @returns Ext.dom.Element/Ext.dataview.component.DataItem item Item at the specified index.
     */
    getItemAt?: (index?: number) => any,

    /**
     * [Method] Returns the value of itemCls
     * @returns String
     */
    getItemCls?: () => string,

    /**
     * [Method] Returns the value of itemConfig
     * @returns Object
     */
    getItemConfig?: () => any,

    /**
     * [Method] Returns an index for the specified item
     * @param item Number The item to locate.
     * @returns Number Index for the specified item.
     */
    getItemIndex?: (item?: number) => number,

    /**
     * [Method] Returns the value of itemTpl
     * @returns String/String[]/Ext.XTemplate
     */
    getItemTpl?: () => any,

    /**
     * [Method] Returns the array of previously selected items
     * @returns Array The previous selection.
     */
    getLastSelected?: () => any[],

    /**
     * [Method] Returns the value of loadingText
     * @returns String/Boolean
     */
    getLoadingText?: () => any,

    /**
     * [Method] Returns the value of maxItemCache
     * @returns Number
     */
    getMaxItemCache?: () => number,

    /**
     * [Method] Returns the value of mode
     * @returns String
     */
    getMode?: () => string,

    /**
     * [Method] Gets a template node
     */
    getNode?: () => void,

    /**
     * [Method] Gets a range nodes
     */
    getNodes?: () => void,

    /**
     * [Method] Returns the value of pressedCls
     * @returns String
     */
    getPressedCls?: () => string,

    /**
     * [Method] Returns the value of pressedDelay
     * @returns Number
     */
    getPressedDelay?: () => number,

    /**
     * [Method] Gets an array of the records from an array of nodes
     */
    getRecords?: () => void,

    /**
     * [Method] Returns the value of scrollToTopOnRefresh
     * @returns Boolean
     */
    getScrollToTopOnRefresh?: () => boolean,

    /**
     * [Method] Returns the value of scrollable
     * @returns Boolean
     */
    getScrollable?: () => Ext$scroll$IView,

    /**
     * [Method] Returns the value of selectedCls
     * @returns String
     */
    getSelectedCls?: () => string,

    /**
     * [Method] Gets the currently selected nodes
     */
    getSelectedNodes?: () => void,

    /**
     * [Method] Gets an array of the selected records
     */
    getSelectedRecords?: () => void,

    /**
     * [Method] Returns an array of the currently selected records
     * @returns Array An array of selected records.
     */
    getSelection?: () => any[],

    /**
     * [Method] Returns the number of selections
     * @returns Number
     */
    getSelectionCount?: () => number,

    /**
     * [Method] Returns the selection mode currently used by this Selectable
     * @returns String The current mode.
     */
    getSelectionMode?: () => string,

    /**
     * [Method] Returns the value of store
     * @returns Ext.data.Store/Object
     */
    getStore?: () => any,

    /**
     * [Method] Returns the value of triggerCtEvent
     * @returns String
     */
    getTriggerCtEvent?: () => string,

    /**
     * [Method] Returns the value of triggerEvent
     * @returns String
     */
    getTriggerEvent?: () => string,

    /**
     * [Method] Returns the value of useComponents
     * @returns Boolean
     */
    getUseComponents?: () => boolean,

    /**
     * [Method] Returns an array of the current items in the DataView
     * @returns Ext.dom.Element[]/Ext.dataview.component.DataItem[] Array of Items.
     */
    getViewItems?: () => any,

    /**
     * [Method] Method called when the Store s Reader throws an exception
     */
    handleException?: () => void,

    /**
     * [Method] Returns true if there is a selected record
     * @returns Boolean
     */
    hasSelection?: () => boolean,

    /**
     * [Method] Finds the index of the passed node
     */
    indexOf?: () => void,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Returns true if the Selectable is currently locked
     * @returns Boolean True if currently locked
     */
    isLocked?: () => boolean,

    /**
     * [Method] Returns true if the specified row is selected
     * @param record Ext.data.Model/Number The record or index of the record to check.
     * @returns Boolean
     */
    isSelected?: (record?: any) => boolean,

    /**
     * [Method] Function which can be overridden to provide custom formatting for each Record that is used by this DataView s templat
     * @param data Object/Object[] The raw data object that was used to create the Record.
     * @param index Number the index number of the Record being prepared for rendering.
     * @param record Ext.data.Model The Record being prepared for rendering.
     * @returns Array/Object The formatted data in a format expected by the internal template's overwrite() method. (either an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'}))
     */
    prepareData?: (data?: any, index?: number, record?: data$IModel) => any,

    /**
     * [Method] Refreshes the view by reloading the data from the store and re rendering the template
     */
    refresh?: () => void,

    /**
     * [Method] Refreshes an individual node s data from the store
     */
    refreshNode?: () => void,

    /**
     * [Method] Adds the given records to the currently selected set
     * @param records Ext.data.Model/Array/Number The records to select.
     * @param keepExisting Boolean If true, the existing selection will be added to (if not, the old selection is replaced).
     * @param suppressEvent Boolean If true, the select event will not be fired.
     */
    select?: (
      records?: any,
      keepExisting?: boolean,
      suppressEvent?: boolean
    ) => void,

    /**
     * [Method] Selects all records
     * @param silent Boolean true to suppress all select events.
     */
    selectAll?: (silent?: boolean) => void,

    /**
     * [Method] Selects a range of rows if the selection model getDisableSelection is not locked
     * @param startRecord Number The index of the first row in the range.
     * @param endRecord Number The index of the last row in the range.
     * @param keepExisting Boolean true to retain existing selections.
     */
    selectRange?: (
      startRecord?: number,
      endRecord?: number,
      keepExisting?: boolean
    ) => void,

    /**
     * [Method] Sets the value of allowDeselect
     * @param allowDeselect Boolean The new value.
     */
    setAllowDeselect?: (allowDeselect?: boolean) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of data
     * @param data Object[] The new value.
     */
    setData?: (data?: any[]) => void,

    /**
     * [Method] Sets the value of defaultType
     * @param defaultType String The new value.
     */
    setDefaultType?: (defaultType?: string) => void,

    /**
     * [Method] Sets the value of deferEmptyText
     * @param deferEmptyText Boolean The new value.
     */
    setDeferEmptyText?: (deferEmptyText?: boolean) => void,

    /**
     * [Method] Sets the value of deselectOnContainerClick
     * @param deselectOnContainerClick Boolean The new value.
     */
    setDeselectOnContainerClick?: (deselectOnContainerClick?: boolean) => void,

    /**
     * [Method] Sets the value of disableSelection
     * @param disableSelection Boolean The new value.
     */
    setDisableSelection?: (disableSelection?: boolean) => void,

    /**
     * [Method] Sets the value of emptyText
     * @param emptyText String The new value.
     */
    setEmptyText?: (emptyText?: string) => void,

    /**
     * [Method] Sets the value of inline
     * @param inline Boolean/Object The new value.
     */
    setInline?: (inline?: any) => void,

    /**
     * [Method] Sets the value of itemCls
     * @param itemCls String The new value.
     */
    setItemCls?: (itemCls?: string) => void,

    /**
     * [Method] Sets the value of itemConfig
     * @param itemConfig Object The new value.
     */
    setItemConfig?: (itemConfig?: any) => void,

    /**
     * [Method] Sets the value of itemTpl
     * @param itemTpl String/String[]/Ext.XTemplate The new value.
     */
    setItemTpl?: (itemTpl?: any) => void,

    /**
     * [Method] This was an internal function accidentally exposed in 1 x and now deprecated
     */
    setLastFocused?: () => void,

    /**
     * [Method] Sets the value of loadingText
     * @param loadingText String/Boolean The new value.
     */
    setLoadingText?: (loadingText?: any) => void,

    /**
     * [Method] Sets the value of maxItemCache
     * @param maxItemCache Number The new value.
     */
    setMaxItemCache?: (maxItemCache?: number) => void,

    /**
     * [Method] Sets the value of mode
     * @param mode String The new value.
     */
    setMode?: (mode?: string) => void,

    /**
     * [Method] Sets the value of pressedCls
     * @param pressedCls String The new value.
     */
    setPressedCls?: (pressedCls?: string) => void,

    /**
     * [Method] Sets the value of pressedDelay
     * @param pressedDelay Number The new value.
     */
    setPressedDelay?: (pressedDelay?: number) => void,

    /**
     * [Method] Sets the value of scrollToTopOnRefresh
     * @param scrollToTopOnRefresh Boolean The new value.
     */
    setScrollToTopOnRefresh?: (scrollToTopOnRefresh?: boolean) => void,

    /**
     * [Method] Sets the value of selectedCls
     * @param selectedCls String The new value.
     */
    setSelectedCls?: (selectedCls?: string) => void,

    /**
     * [Method] Sets the value of store
     * @param store Ext.data.Store/Object The new value.
     */
    setStore?: (store?: any) => void,

    /**
     * [Method] Sets the value of triggerCtEvent
     * @param triggerCtEvent String The new value.
     */
    setTriggerCtEvent?: (triggerCtEvent?: string) => void,

    /**
     * [Method] Sets the value of triggerEvent
     * @param triggerEvent String The new value.
     */
    setTriggerEvent?: (triggerEvent?: string) => void,

    /**
     * [Method] Sets the value of useComponents
     * @param useComponents Boolean The new value.
     */
    setUseComponents?: (useComponents?: boolean) => void,

    /**
     * [Method] Sets a record as the last focused record
     * @param newRecord Ext.data.Record
     * @param oldRecord Ext.data.Record
     */
    updateLastFocused?: (
      newRecord?: data$IRecord,
      oldRecord?: data$IRecord
    ) => void
  } & Ext$IContainer &
    undefined.ISelectable;

  declare export type Ext$IIndexBar = {
    /**
     * [Config Option] (Boolean)
     */
    alphabet?: boolean,

    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    direction?: string,

    /**
     * [Config Option] (Boolean)
     */
    itemSelector?: boolean,

    /**
     * [Config Option] (Array)
     */
    letters?: any[],

    /**
     * [Config Option] (String)
     */
    listPrefix?: string,

    /**
     * [Config Option] (Boolean)
     */
    store?: boolean,

    /**
     * [Config Option] (String)
     */
    ui?: string,

    /**
     * [Method] Destroys this Component
     */
    destroy?: () => void,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of direction
     * @returns String
     */
    getDirection?: () => string,

    /**
     * [Method] Returns the value of letters
     * @returns Array
     */
    getLetters?: () => any[],

    /**
     * [Method] Returns the value of listPrefix
     * @returns String
     */
    getListPrefix?: () => string,

    /**
     * [Method] Returns the value of ui
     * @returns String
     */
    getUi?: () => string,

    /**
     * [Method] Returns true when direction is horizontal
     */
    isHorizontal?: () => void,

    /**
     * [Method] Returns true when direction is vertical
     */
    isVertical?: () => void,

    /**
     * [Method] Refreshes the view by reloading the data from the store and re rendering the template
     */
    refresh?: () => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of direction
     * @param direction String The new value.
     */
    setDirection?: (direction?: string) => void,

    /**
     * [Method] Sets the value of letters
     * @param letters Array The new value.
     */
    setLetters?: (letters?: any[]) => void,

    /**
     * [Method] Sets the value of listPrefix
     * @param listPrefix String The new value.
     */
    setListPrefix?: (listPrefix?: string) => void,

    /**
     * [Method] Sets the value of ui
     * @param ui String The new value.
     */
    setUi?: (ui?: string) => void
  } & Ext$IComponent;

  declare export type Ext$IList = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    defaultType?: string,

    /**
     * [Config Option] (String)
     */
    disclosureProperty?: string,

    /**
     * [Config Option] (Boolean)
     */
    grouped?: boolean,

    /**
     * [Config Option] (Boolean/Object)
     */
    indexBar?: any,

    /**
     * [Config Option] (Boolean)
     */
    infinite?: boolean,

    /**
     * [Config Option] (Number)
     */
    itemHeight?: number,

    /**
     * [Config Option] (Boolean/Function/Object)
     */
    onItemDisclosure?: any,

    /**
     * [Config Option] (Boolean)
     */
    pinHeaders?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    preventSelectionOnDisclose?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    refreshHeightOnUpdate?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    striped?: boolean,

    /**
     * [Config Option] (String)
     */
    ui?: string,

    /**
     * [Config Option] (Boolean)
     */
    useSimpleItems?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    variableHeights?: boolean,

    /**
     * [Property] (Number)
     */
    bufferSize?: number,

    /**
     * [Method]
     */
    destroy?: () => void,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of defaultType
     * @returns String
     */
    getDefaultType?: () => string,

    /**
     * [Method] Returns the value of disclosureProperty
     * @returns String
     */
    getDisclosureProperty?: () => string,

    /**
     * [Method] Returns the value of grouped
     * @returns Boolean
     */
    getGrouped?: () => boolean,

    /**
     * [Method] Returns the value of icon
     * @returns Object
     */
    getIcon?: () => any,

    /**
     * [Method] Returns the value of indexBar
     * @returns Boolean/Object
     */
    getIndexBar?: () => any,

    /**
     * [Method] Returns the value of infinite
     * @returns Boolean
     */
    getInfinite?: () => boolean,

    /**
     * [Method] Returns an item at the specified index
     * @param index Number Index of the item.
     * @returns Ext.dom.Element/Ext.dataview.component.DataItem item Item at the specified index.
     */
    getItemAt?: (index?: number) => any,

    /**
     * [Method] Returns the value of itemHeight
     * @returns Number
     */
    getItemHeight?: () => number,

    /**
     * [Method] Returns an index for the specified item
     * @param item Number The item to locate.
     * @returns Number Index for the specified item.
     */
    getItemIndex?: (item?: number) => number,

    /**
     * [Method] Returns the value of minimumBufferDistance
     * @returns Number
     */
    getMinimumBufferDistance?: () => number,

    /**
     * [Method] Returns the value of onItemDisclosure
     * @returns Boolean/Function/Object
     */
    getOnItemDisclosure?: () => any,

    /**
     * [Method] Returns the value of pinHeaders
     * @returns Boolean
     */
    getPinHeaders?: () => boolean,

    /**
     * [Method] Returns the value of preventSelectionOnDisclose
     * @returns Boolean
     */
    getPreventSelectionOnDisclose?: () => boolean,

    /**
     * [Method] Returns the value of refreshHeightOnUpdate
     * @returns Boolean
     */
    getRefreshHeightOnUpdate?: () => boolean,

    /**
     * [Method] Returns all the items that are docked in the scroller in this list
     * @returns Array An array of the scrollDock items
     */
    getScrollDockedItems?: () => any[],

    /**
     * [Method] Returns the value of striped
     * @returns Boolean
     */
    getStriped?: () => boolean,

    /**
     * [Method] Returns the value of ui
     * @returns String
     */
    getUi?: () => string,

    /**
     * [Method] Returns the value of useHeaders
     * @returns Boolean
     */
    getUseHeaders?: () => boolean,

    /**
     * [Method] Returns the value of useSimpleItems
     * @returns Boolean
     */
    getUseSimpleItems?: () => boolean,

    /**
     * [Method] Returns the value of variableHeights
     * @returns Boolean
     */
    getVariableHeights?: () => boolean,

    /**
     * [Method] Returns an array of the current items in the DataView
     * @returns Ext.dom.Element[]/Ext.dataview.component.DataItem[] Array of Items.
     */
    getViewItems?: () => any,

    /**
     * [Method] We override DataView s initialize method with an empty function
     */
    initialize?: () => void,

    /**
     * [Method] Scrolls the list so that the specified record is at the top
     * @param record Object {Ext.data.Model} Record in the lists store to scroll to
     * @param animate Object {Boolean} Determines if scrolling is animated to a cut
     * @param overscroll Object {Boolean} Determines if list can be overscrolled
     */
    scrollToRecord?: (record?: any, animate?: any, overscroll?: any) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of defaultType
     * @param defaultType String The new value.
     */
    setDefaultType?: (defaultType?: string) => void,

    /**
     * [Method] Sets the value of disclosureProperty
     * @param disclosureProperty String The new value.
     */
    setDisclosureProperty?: (disclosureProperty?: string) => void,

    /**
     * [Method] Sets the value of grouped
     * @param grouped Boolean The new value.
     */
    setGrouped?: (grouped?: boolean) => void,

    /**
     * [Method] Sets the value of icon
     * @param icon Object The new value.
     */
    setIcon?: (icon?: any) => void,

    /**
     * [Method] Sets the value of indexBar
     * @param indexBar Boolean/Object The new value.
     */
    setIndexBar?: (indexBar?: any) => void,

    /**
     * [Method] Sets the value of infinite
     * @param infinite Boolean The new value.
     */
    setInfinite?: (infinite?: boolean) => void,

    /**
     * [Method] Sets the value of itemHeight
     * @param itemHeight Number The new value.
     */
    setItemHeight?: (itemHeight?: number) => void,

    /**
     * [Method] Sets the value of minimumBufferDistance
     * @param minimumBufferDistance Number The new value.
     */
    setMinimumBufferDistance?: (minimumBufferDistance?: number) => void,

    /**
     * [Method] Sets the value of onItemDisclosure
     * @param onItemDisclosure Boolean/Function/Object The new value.
     */
    setOnItemDisclosure?: (onItemDisclosure?: any) => void,

    /**
     * [Method] Sets the value of pinHeaders
     * @param pinHeaders Boolean The new value.
     */
    setPinHeaders?: (pinHeaders?: boolean) => void,

    /**
     * [Method] Sets the value of preventSelectionOnDisclose
     * @param preventSelectionOnDisclose Boolean The new value.
     */
    setPreventSelectionOnDisclose?: (
      preventSelectionOnDisclose?: boolean
    ) => void,

    /**
     * [Method] Sets the value of refreshHeightOnUpdate
     * @param refreshHeightOnUpdate Boolean The new value.
     */
    setRefreshHeightOnUpdate?: (refreshHeightOnUpdate?: boolean) => void,

    /**
     * [Method] Sets the value of striped
     * @param striped Boolean The new value.
     */
    setStriped?: (striped?: boolean) => void,

    /**
     * [Method] Sets the value of ui
     * @param ui String The new value.
     */
    setUi?: (ui?: string) => void,

    /**
     * [Method] Sets the value of useHeaders
     * @param useHeaders Boolean The new value.
     */
    setUseHeaders?: (useHeaders?: boolean) => void,

    /**
     * [Method] Sets the value of useSimpleItems
     * @param useSimpleItems Boolean The new value.
     */
    setUseSimpleItems?: (useSimpleItems?: boolean) => void,

    /**
     * [Method] Sets the value of variableHeights
     * @param variableHeights Boolean The new value.
     */
    setVariableHeights?: (variableHeights?: boolean) => void
  } & undefined.IDataView &
    undefined.IBindable;

  declare export type Ext$INestedList = {
    /**
     * [Config Option] (Boolean)
     */
    allowDeselect?: boolean,

    /**
     * [Config Option] (Object)
     */
    backButton?: any,

    /**
     * [Config Option] (String)
     */
    backText?: string,

    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String/Object/Boolean)
     */
    cardSwitchAnimation?: any,

    /**
     * [Config Option] (Number)
     */
    clearSelectionDelay?: number,

    /**
     * [Config Option] (Ext.Component)
     */
    detailCard?: Ext$IComponent,

    /**
     * [Config Option] (Ext.Container)
     */
    detailContainer?: Ext$IContainer,

    /**
     * [Config Option] (String)
     */
    displayField?: string,

    /**
     * [Config Option] (String)
     */
    emptyText?: string,

    /**
     * [Config Option] (Number)
     */
    itemHeight?: number,

    /**
     * [Config Option] (Object)
     */
    listConfig?: any,

    /**
     * [Config Option] (String)
     */
    loadingText?: string,

    /**
     * [Config Option] (Boolean/Function)
     */
    onItemDisclosure?: any,

    /**
     * [Config Option] (Ext.data.TreeStore/String)
     */
    store?: any,

    /**
     * [Config Option] (String)
     */
    title?: string,

    /**
     * [Config Option] (Ext.Toolbar/Object/Boolean)
     */
    toolbar?: any,

    /**
     * [Config Option] (String)
     */
    ui?: string,

    /**
     * [Config Option] (Boolean)
     */
    updateTitleText?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    useSimpleItems?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    useTitleAsBackText?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    useToolbar?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    variableHeights?: boolean,

    /**
     * [Method] Returns the value of allowDeselect
     * @returns Boolean
     */
    getAllowDeselect?: () => boolean,

    /**
     * [Method] Returns the value of backButton
     * @returns Object
     */
    getBackButton?: () => any,

    /**
     * [Method] Returns the value of backText
     * @returns String
     */
    getBackText?: () => string,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of clearSelectionOnListChange
     * @returns Boolean
     */
    getClearSelectionOnListChange?: () => boolean,

    /**
     * [Method] Returns the value of detailCard
     * @returns Ext.Component
     */
    getDetailCard?: () => Ext$IComponent,

    /**
     * [Method] Returns the value of detailContainer
     * @returns Ext.Container
     */
    getDetailContainer?: () => Ext$IContainer,

    /**
     * [Method] Returns the value of displayField
     * @returns String
     */
    getDisplayField?: () => string,

    /**
     * [Method] Returns the value of emptyText
     * @returns String
     */
    getEmptyText?: () => string,

    /**
     * [Method] Returns the value of itemHeight
     * @returns Number
     */
    getItemHeight?: () => number,

    /**
     * [Method] Override this method to provide custom template rendering of individual nodes
     * @param node Ext.data.Record
     * @returns String
     */
    getItemTextTpl?: (node?: data$IRecord) => string,

    /**
     * [Method] Returns the value of listConfig
     * @returns Object
     */
    getListConfig?: () => any,

    /**
     * [Method] Returns the value of loadingText
     * @returns String
     */
    getLoadingText?: () => string,

    /**
     * [Method] Returns the value of onItemDisclosure
     * @returns Boolean/Function
     */
    getOnItemDisclosure?: () => any,

    /**
     * [Method] Returns the value of store
     * @returns Ext.data.TreeStore/String
     */
    getStore?: () => any,

    /**
     * [Method] Returns the subList for a specified node
     */
    getSubList?: () => void,

    /**
     * [Method] Returns the value of title
     * @returns String
     */
    getTitle?: () => string,

    /**
     * [Method] Override this method to provide custom template rendering of titles back buttons when useTitleAsBackText is enabled
     * @param node Ext.data.Record
     * @returns String
     */
    getTitleTextTpl?: (node?: data$IRecord) => string,

    /**
     * [Method] Returns the value of toolbar
     * @returns Ext.Toolbar/Object/Boolean
     */
    getToolbar?: () => any,

    /**
     * [Method] Returns the value of updateTitleText
     * @returns Boolean
     */
    getUpdateTitleText?: () => boolean,

    /**
     * [Method] Returns the value of useSimpleItems
     * @returns Boolean
     */
    getUseSimpleItems?: () => boolean,

    /**
     * [Method] Returns the value of useTitleAsBackText
     * @returns Boolean
     */
    getUseTitleAsBackText?: () => boolean,

    /**
     * [Method] Returns the value of useToolbar
     * @returns Boolean
     */
    getUseToolbar?: () => boolean,

    /**
     * [Method] Returns the value of variableHeights
     * @returns Boolean
     */
    getVariableHeights?: () => boolean,

    /**
     * [Method] The leaf you want to navigate to
     * @param node Ext.data.NodeInterface The specified node to navigate to.
     */
    goToLeaf?: (node?: data$INodeInterface) => void,

    /**
     * [Method] Method to handle going to a specific node within this nested list
     * @param node Ext.data.NodeInterface The specified node to navigate to.
     */
    goToNode?: (node?: data$INodeInterface) => void,

    /**
     * [Method] Called when the backButton has been tapped
     */
    onBackTap?: () => void,

    /**
     * [Method] Called when an list item has been tapped
     * @param list Ext.List The subList the item is on.
     * @param index Number The id of the item tapped.
     * @param target Ext.Element The list item tapped.
     * @param record Ext.data.Record The record which as tapped.
     * @param e Ext.event.Event The event.
     */
    onItemTap?: (
      list?: Ext$IList,
      index?: number,
      target?: Ext$IElement,
      record?: data$IRecord,
      e?: Ext$event$IEvent
    ) => void,

    /**
     * [Method] Sets the value of allowDeselect
     * @param allowDeselect Boolean The new value.
     */
    setAllowDeselect?: (allowDeselect?: boolean) => void,

    /**
     * [Method] Sets the value of backButton
     * @param backButton Object The new value.
     */
    setBackButton?: (backButton?: any) => void,

    /**
     * [Method] Sets the value of backText
     * @param backText String The new value.
     */
    setBackText?: (backText?: string) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of clearSelectionOnListChange
     * @param clearSelectionOnListChange Boolean The new value.
     */
    setClearSelectionOnListChange?: (
      clearSelectionOnListChange?: boolean
    ) => void,

    /**
     * [Method] Sets the value of detailCard
     * @param detailCard Ext.Component The new value.
     */
    setDetailCard?: (detailCard?: Ext$IComponent) => void,

    /**
     * [Method] Sets the value of detailContainer
     * @param detailContainer Ext.Container The new value.
     */
    setDetailContainer?: (detailContainer?: Ext$IContainer) => void,

    /**
     * [Method] Sets the value of displayField
     * @param displayField String The new value.
     */
    setDisplayField?: (displayField?: string) => void,

    /**
     * [Method] Sets the value of emptyText
     * @param emptyText String The new value.
     */
    setEmptyText?: (emptyText?: string) => void,

    /**
     * [Method] Sets the value of itemHeight
     * @param itemHeight Number The new value.
     */
    setItemHeight?: (itemHeight?: number) => void,

    /**
     * [Method] Sets the value of listConfig
     * @param listConfig Object The new value.
     */
    setListConfig?: (listConfig?: any) => void,

    /**
     * [Method] Sets the value of loadingText
     * @param loadingText String The new value.
     */
    setLoadingText?: (loadingText?: string) => void,

    /**
     * [Method] Sets the value of onItemDisclosure
     * @param onItemDisclosure Boolean/Function The new value.
     */
    setOnItemDisclosure?: (onItemDisclosure?: any) => void,

    /**
     * [Method] Sets the value of store
     * @param store Ext.data.TreeStore/String The new value.
     */
    setStore?: (store?: any) => void,

    /**
     * [Method] Sets the value of title
     * @param title String The new value.
     */
    setTitle?: (title?: string) => void,

    /**
     * [Method] Sets the value of toolbar
     * @param toolbar Ext.Toolbar/Object/Boolean The new value.
     */
    setToolbar?: (toolbar?: any) => void,

    /**
     * [Method] Sets the value of ui
     * @param ui Object The new value.
     */
    setUi?: (ui?: any) => void,

    /**
     * [Method] Sets the value of updateTitleText
     * @param updateTitleText Boolean The new value.
     */
    setUpdateTitleText?: (updateTitleText?: boolean) => void,

    /**
     * [Method] Sets the value of useSimpleItems
     * @param useSimpleItems Boolean The new value.
     */
    setUseSimpleItems?: (useSimpleItems?: boolean) => void,

    /**
     * [Method] Sets the value of useTitleAsBackText
     * @param useTitleAsBackText Boolean The new value.
     */
    setUseTitleAsBackText?: (useTitleAsBackText?: boolean) => void,

    /**
     * [Method] Sets the value of useToolbar
     * @param useToolbar Boolean The new value.
     */
    setUseToolbar?: (useToolbar?: boolean) => void,

    /**
     * [Method] Sets the value of variableHeights
     * @param variableHeights Boolean The new value.
     */
    setVariableHeights?: (variableHeights?: boolean) => void
  } & Ext$IContainer;

  declare export type Ext$IDate = {} & Ext$IDateExtras;

  declare export class Ext$Date {
    /**
     * [Property] (String)
     */
    static DAY: string;

    /**
     * [Property] (String)
     */
    static HOUR: string;

    /**
     * [Property] (String)
     */
    static MILLI: string;

    /**
     * [Property] (String)
     */
    static MINUTE: string;

    /**
     * [Property] (String)
     */
    static MONTH: string;

    /**
     * [Property] (String)
     */
    static SECOND: string;

    /**
     * [Property] (String)
     */
    static YEAR: string;

    /**
     * [Property] (Array)
     */
    static dayNames: any[];

    /**
     * [Property] (String)
     */
    static defaultFormat: string;

    /**
     * [Property] (Object)
     */
    static defaults: any;

    /**
     * [Property] (Object)
     */
    static formatCodes: any;

    /**
     * [Property] (Object)
     */
    static formatFunctions: any;

    /**
     * [Property] (Array)
     */
    static monthNames: any[];

    /**
     * [Property] (Object)
     */
    static monthNumbers: any;

    /**
     * [Property] (Object)
     */
    static parseFunctions: any;

    /**
     * [Property] (Boolean)
     */
    static useStrict: boolean;

    /**
     * [Method] Provides a convenient method for performing basic date arithmetic
     * @param date Date The date to modify.
     * @param interval String A valid date interval enum value.
     * @param value Number The amount to add to the current date.
     * @returns Date The new Date instance.
     */
    static add(date?: any, interval?: string, value?: number): any;

    /**
     * [Method] Align the date to unit
     * @param date Date The date to be aligned.
     * @param unit String The unit. This unit is compatible with the date interval constants.
     * @returns Date The aligned date.
     */
    static align(date?: any, unit?: string): any;

    /**
     * [Method] Checks if a date falls on or between the given start and end dates
     * @param date Date The date to check.
     * @param start Date Start date.
     * @param end Date End date.
     * @returns Boolean true if this date falls on or between the given start and end dates.
     */
    static between(date?: any, start?: any, end?: any): boolean;

    /**
     * [Method] Attempts to clear all time information from this Date by setting the time to midnight of the same day automatically
     * @param date Date The date.
     * @param clone Boolean true to create a clone of this date, clear the time and return it.
     * @returns Date this or the clone.
     */
    static clearTime(date?: any, clone?: boolean): any;

    /**
     * [Method] Creates and returns a new Date instance with the exact same date value as the called instance
     * @param date Date The date.
     * @returns Date The new Date instance.
     */
    static clone(date?: any): any;

    /**
     * [Method] Calculate how many units are there between two time
     * @param min Date The first time.
     * @param max Date The second time.
     * @param unit String The unit. This unit is compatible with the date interval constants.
     * @returns Number The maximum number n of units that min + n * unit &lt;= max.
     */
    static diff(min?: any, max?: any, unit?: string): number;

    /**
     * [Method] Formats a date given the supplied format string
     * @param date Date The date to format.
     * @param format String The format string.
     * @returns String The formatted date.
     */
    static format(date?: any, format?: string): string;

    /**
     * [Method] Get the numeric day number of the year adjusted for leap year
     * @param date Date The date.
     * @returns Number 0 to 364 (365 in leap years).
     */
    static getDayOfYear(date?: any): number;

    /**
     * [Method] Get the number of days in the current month adjusted for leap year
     * @param date Date The date.
     * @returns Number The number of days in the month.
     */
    static getDaysInMonth(date?: any): number;

    /**
     * [Method] Returns the number of milliseconds between two dates
     * @param dateA Date The first date.
     * @param dateB Date The second date, defaults to now.
     * @returns Number The difference in milliseconds.
     */
    static getElapsed(dateA?: any, dateB?: any): number;

    /**
     * [Method] Get the date of the first day of the month in which this date resides
     * @param date Date The date.
     * @returns Date
     */
    static getFirstDateOfMonth(date?: any): any;

    /**
     * [Method] Get the first day of the current month adjusted for leap year
     * @param date Date The date
     * @returns Number The day number (0-6).
     */
    static getFirstDayOfMonth(date?: any): number;

    /**
     * [Method] Get the offset from GMT of the current date equivalent to the format specifier O
     * @param date Date The date.
     * @param colon Boolean true to separate the hours and minutes with a colon.
     * @returns String The 4-character offset string prefixed with + or - (e.g. '-0600').
     */
    static getGMTOffset(date?: any, colon?: boolean): string;

    /**
     * [Method] Get the date of the last day of the month in which this date resides
     * @param date Date The date.
     * @returns Date
     */
    static getLastDateOfMonth(date?: any): any;

    /**
     * [Method] Get the last day of the current month adjusted for leap year
     * @param date Date The date.
     * @returns Number The day number (0-6).
     */
    static getLastDayOfMonth(date?: any): number;

    /**
     * [Method] Get the zero based JavaScript month number for the given short full month name
     * @param name String The short/full month name.
     * @returns Number The zero-based JavaScript month number.
     */
    static getMonthNumber(name?: string): number;

    /**
     * [Method] Get the short day name for the given day number
     * @param day Number A zero-based JavaScript day number.
     * @returns String The short day name.
     */
    static getShortDayName(day?: number): string;

    /**
     * [Method] Get the short month name for the given month number
     * @param month Number A zero-based JavaScript month number.
     * @returns String The short month name.
     */
    static getShortMonthName(month?: number): string;

    /**
     * [Method] Get the English ordinal suffix of the current day equivalent to the format specifier S
     * @param date Date The date.
     * @returns String 'st', 'nd', 'rd' or 'th'.
     */
    static getSuffix(date?: any): string;

    /**
     * [Method] Get the timezone abbreviation of the current date equivalent to the format specifier T
     * @param date Date The date.
     * @returns String The abbreviated timezone name (e.g. 'CST', 'PDT', 'EDT', 'MPST' ...).
     */
    static getTimezone(date?: any): string;

    /**
     * [Method] Get the numeric ISO 8601 week number of the year equivalent to the format specifier W  but without a leading zero
     * @param date Date The date.
     * @returns Number 1 to 53.
     */
    static getWeekOfYear(date?: any): number;

    /**
     * [Method] Checks if the current date is affected by Daylight Saving Time DST
     * @param date Date The date.
     * @returns Boolean true if the current date is affected by DST.
     */
    static isDST(date?: any): boolean;

    /**
     * [Method] Checks if the current date falls within a leap year
     * @param date Date The date.
     * @returns Boolean true if the current date falls within a leap year, false otherwise.
     */
    static isLeapYear(date?: any): boolean;

    /**
     * [Method] Checks if the passed Date parameters will cause a JavaScript Date rollover
     * @param year Number 4-digit year.
     * @param month Number 1-based month-of-year.
     * @param day Number Day of month.
     * @param hour Number Hour.
     * @param minute Number Minute.
     * @param second Number Second.
     * @param millisecond Number Millisecond.
     * @returns Boolean true if the passed parameters do not cause a Date "rollover", false otherwise.
     */
    static isValid(
      year?: number,
      month?: number,
      day?: number,
      hour?: number,
      minute?: number,
      second?: number,
      millisecond?: number
    ): boolean;

    /**
     * [Method] Returns the current timestamp
     * @returns Number The current timestamp.
     */
    static now(): number;

    /**
     * [Method] Parses the passed string using the specified date format
     * @param input String/Number The raw date string.
     * @param format String The expected date string format.
     * @param strict Boolean true to validate date strings while parsing (i.e. prevents JavaScript Date "rollover"). Invalid date strings will return null when parsed.
     * @returns Date/null The parsed Date, or null if an invalid date string.
     */
    static parse(input?: any, format?: string, strict?: boolean): any;
  }

  declare export interface Ext$IDateExtras {}

  declare export class Ext$DateExtras {
    /**
     * [Property] (String)
     */
    static DAY: string;

    /**
     * [Property] (String)
     */
    static HOUR: string;

    /**
     * [Property] (String)
     */
    static MILLI: string;

    /**
     * [Property] (String)
     */
    static MINUTE: string;

    /**
     * [Property] (String)
     */
    static MONTH: string;

    /**
     * [Property] (String)
     */
    static SECOND: string;

    /**
     * [Property] (String)
     */
    static YEAR: string;

    /**
     * [Property] (Array)
     */
    static dayNames: any[];

    /**
     * [Property] (String)
     */
    static defaultFormat: string;

    /**
     * [Property] (Object)
     */
    static defaults: any;

    /**
     * [Property] (Object)
     */
    static formatCodes: any;

    /**
     * [Property] (Object)
     */
    static formatFunctions: any;

    /**
     * [Property] (Array)
     */
    static monthNames: any[];

    /**
     * [Property] (Object)
     */
    static monthNumbers: any;

    /**
     * [Property] (Object)
     */
    static parseFunctions: any;

    /**
     * [Property] (Boolean)
     */
    static useStrict: boolean;

    /**
     * [Method] Provides a convenient method for performing basic date arithmetic
     * @param date Date The date to modify.
     * @param interval String A valid date interval enum value.
     * @param value Number The amount to add to the current date.
     * @returns Date The new Date instance.
     */
    static add(date?: any, interval?: string, value?: number): any;

    /**
     * [Method] Align the date to unit
     * @param date Date The date to be aligned.
     * @param unit String The unit. This unit is compatible with the date interval constants.
     * @returns Date The aligned date.
     */
    static align(date?: any, unit?: string): any;

    /**
     * [Method] Checks if a date falls on or between the given start and end dates
     * @param date Date The date to check.
     * @param start Date Start date.
     * @param end Date End date.
     * @returns Boolean true if this date falls on or between the given start and end dates.
     */
    static between(date?: any, start?: any, end?: any): boolean;

    /**
     * [Method] Attempts to clear all time information from this Date by setting the time to midnight of the same day automatically
     * @param date Date The date.
     * @param clone Boolean true to create a clone of this date, clear the time and return it.
     * @returns Date this or the clone.
     */
    static clearTime(date?: any, clone?: boolean): any;

    /**
     * [Method] Creates and returns a new Date instance with the exact same date value as the called instance
     * @param date Date The date.
     * @returns Date The new Date instance.
     */
    static clone(date?: any): any;

    /**
     * [Method] Calculate how many units are there between two time
     * @param min Date The first time.
     * @param max Date The second time.
     * @param unit String The unit. This unit is compatible with the date interval constants.
     * @returns Number The maximum number n of units that min + n * unit &lt;= max.
     */
    static diff(min?: any, max?: any, unit?: string): number;

    /**
     * [Method] Formats a date given the supplied format string
     * @param date Date The date to format.
     * @param format String The format string.
     * @returns String The formatted date.
     */
    static format(date?: any, format?: string): string;

    /**
     * [Method] Get the numeric day number of the year adjusted for leap year
     * @param date Date The date.
     * @returns Number 0 to 364 (365 in leap years).
     */
    static getDayOfYear(date?: any): number;

    /**
     * [Method] Get the number of days in the current month adjusted for leap year
     * @param date Date The date.
     * @returns Number The number of days in the month.
     */
    static getDaysInMonth(date?: any): number;

    /**
     * [Method] Returns the number of milliseconds between two dates
     * @param dateA Date The first date.
     * @param dateB Date The second date, defaults to now.
     * @returns Number The difference in milliseconds.
     */
    static getElapsed(dateA?: any, dateB?: any): number;

    /**
     * [Method] Get the date of the first day of the month in which this date resides
     * @param date Date The date.
     * @returns Date
     */
    static getFirstDateOfMonth(date?: any): any;

    /**
     * [Method] Get the first day of the current month adjusted for leap year
     * @param date Date The date
     * @returns Number The day number (0-6).
     */
    static getFirstDayOfMonth(date?: any): number;

    /**
     * [Method] Get the offset from GMT of the current date equivalent to the format specifier O
     * @param date Date The date.
     * @param colon Boolean true to separate the hours and minutes with a colon.
     * @returns String The 4-character offset string prefixed with + or - (e.g. '-0600').
     */
    static getGMTOffset(date?: any, colon?: boolean): string;

    /**
     * [Method] Get the date of the last day of the month in which this date resides
     * @param date Date The date.
     * @returns Date
     */
    static getLastDateOfMonth(date?: any): any;

    /**
     * [Method] Get the last day of the current month adjusted for leap year
     * @param date Date The date.
     * @returns Number The day number (0-6).
     */
    static getLastDayOfMonth(date?: any): number;

    /**
     * [Method] Get the zero based JavaScript month number for the given short full month name
     * @param name String The short/full month name.
     * @returns Number The zero-based JavaScript month number.
     */
    static getMonthNumber(name?: string): number;

    /**
     * [Method] Get the short day name for the given day number
     * @param day Number A zero-based JavaScript day number.
     * @returns String The short day name.
     */
    static getShortDayName(day?: number): string;

    /**
     * [Method] Get the short month name for the given month number
     * @param month Number A zero-based JavaScript month number.
     * @returns String The short month name.
     */
    static getShortMonthName(month?: number): string;

    /**
     * [Method] Get the English ordinal suffix of the current day equivalent to the format specifier S
     * @param date Date The date.
     * @returns String 'st', 'nd', 'rd' or 'th'.
     */
    static getSuffix(date?: any): string;

    /**
     * [Method] Get the timezone abbreviation of the current date equivalent to the format specifier T
     * @param date Date The date.
     * @returns String The abbreviated timezone name (e.g. 'CST', 'PDT', 'EDT', 'MPST' ...).
     */
    static getTimezone(date?: any): string;

    /**
     * [Method] Get the numeric ISO 8601 week number of the year equivalent to the format specifier W  but without a leading zero
     * @param date Date The date.
     * @returns Number 1 to 53.
     */
    static getWeekOfYear(date?: any): number;

    /**
     * [Method] Checks if the current date is affected by Daylight Saving Time DST
     * @param date Date The date.
     * @returns Boolean true if the current date is affected by DST.
     */
    static isDST(date?: any): boolean;

    /**
     * [Method] Checks if the current date falls within a leap year
     * @param date Date The date.
     * @returns Boolean true if the current date falls within a leap year, false otherwise.
     */
    static isLeapYear(date?: any): boolean;

    /**
     * [Method] Checks if the passed Date parameters will cause a JavaScript Date rollover
     * @param year Number 4-digit year.
     * @param month Number 1-based month-of-year.
     * @param day Number Day of month.
     * @param hour Number Hour.
     * @param minute Number Minute.
     * @param second Number Second.
     * @param millisecond Number Millisecond.
     * @returns Boolean true if the passed parameters do not cause a Date "rollover", false otherwise.
     */
    static isValid(
      year?: number,
      month?: number,
      day?: number,
      hour?: number,
      minute?: number,
      second?: number,
      millisecond?: number
    ): boolean;

    /**
     * [Method] Returns the current timestamp
     * @returns Number The current timestamp.
     */
    static now(): number;

    /**
     * [Method] Parses the passed string using the specified date format
     * @param input String/Number The raw date string.
     * @param format String The expected date string format.
     * @param strict Boolean true to validate date strings while parsing (i.e. prevents JavaScript Date "rollover"). Invalid date strings will return null when parsed.
     * @returns Date/null The parsed Date, or null if an invalid date string.
     */
    static parse(input?: any, format?: string, strict?: boolean): any;
  }

  declare export type Ext$IDecorator = {
    /**
     * [Config Option] (Object)
     */
    component?: any,

    /**
     * [Method] Destroys this Component
     */
    destroy?: () => void,

    /**
     * [Method] Returns the value of component
     * @returns Object
     */
    getComponent?: () => any,

    /**
     * [Method] Sets the value of component
     * @param component Object The new value.
     */
    setComponent?: (component?: any) => void
  } & Ext$IComponent;

  declare export type Ext$device$tunnel$IAbstract = {
    /**
     * [Method] Broadcast a message intent to look for receivers who can respond to it
     * @param message String
     * @returns Ext.Promise A promise which provides an array of objects upon fulfilled. Each object contains information about a receiver, with 'id', 'name' and 'icon' keys.
     */
    broadcast?: (message?: string) => Ext$IPromise,

    /**
     * [Method] Create a connection to another application with the given id
     * @param receiverId String The id of the application to connect to. Get this id from broadcast
     * @returns Ext.Promise
     */
    connect?: (receiverId?: string) => Ext$IPromise,

    /**
     * [Method] Assign the callback to handle new connection
     * @param callback Function
     */
    onConnect?: (callback?: any) => void,

    /**
     * [Method] Assign the callback to handling incoming messages
     * @param callback Function
     */
    onMessage?: (callback?: any) => void,

    /**
     * [Method] Send a message
     * @param receiverId String The id of the application to connect to. Get this id from broadcast
     * @param message The message to send, can be an object, as long as it is JSON-able.
     * @param foreground Boolean Whether or not to bring the receiver app to the foreground
     * @returns Ext.Promise
     */
    send?: (
      receiverId?: string,
      message?: any,
      foreground?: boolean
    ) => Ext$IPromise
  } & Ext$IBase;

  declare export type Ext$direct$ITransaction = {
    /**
     * [Method] Returns the value of action
     * @returns Object
     */
    getAction?: () => any,

    /**
     * [Method] Returns the value of args
     * @returns Object
     */
    getArgs?: () => any,

    /**
     * [Method] Returns the value of callback
     * @returns Object
     */
    getCallback?: () => any,

    /**
     * [Method] Returns the value of data
     * @returns Object
     */
    getData?: () => any,

    /**
     * [Method] Returns the value of form
     * @returns Object
     */
    getForm?: () => any,

    /**
     * [Method] Returns the value of id
     * @returns Object
     */
    getId?: () => any,

    /**
     * [Method] Returns the value of method
     * @returns Object
     */
    getMethod?: () => any,

    /**
     * [Method] Returns the value of provider
     * @returns Object
     */
    getProvider?: () => any,

    /**
     * [Method] Returns the value of retryCount
     * @returns Number
     */
    getRetryCount?: () => number,

    /**
     * [Method] Sets the value of action
     * @param action Object The new value.
     */
    setAction?: (action?: any) => void,

    /**
     * [Method] Sets the value of args
     * @param args Object The new value.
     */
    setArgs?: (args?: any) => void,

    /**
     * [Method] Sets the value of callback
     * @param callback Object The new value.
     */
    setCallback?: (callback?: any) => void,

    /**
     * [Method] Sets the value of data
     * @param data Object The new value.
     */
    setData?: (data?: any) => void,

    /**
     * [Method] Sets the value of form
     * @param form Object The new value.
     */
    setForm?: (form?: any) => void,

    /**
     * [Method] Sets the value of id
     * @param id Object The new value.
     */
    setId?: (id?: any) => void,

    /**
     * [Method] Sets the value of method
     * @param method Object The new value.
     */
    setMethod?: (method?: any) => void,

    /**
     * [Method] Sets the value of provider
     * @param provider Object The new value.
     */
    setProvider?: (provider?: any) => void,

    /**
     * [Method] Sets the value of retryCount
     * @param retryCount Number The new value.
     */
    setRetryCount?: (retryCount?: number) => void
  } & Ext$IBase;

  declare export type Ext$IDirect = {} & Ext$IBase & undefined.IObservable;

  declare export class Ext$Direct {
    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Appends an after event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static addAfterListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Appends a before event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static addBeforeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Adds the specified events to the list of events which this Observable may fire
     * @param eventNames Object/String... Either an object with event names as properties with a value of true or the first event name string if multiple event names are being passed as separate parameters.
     */
    static addEvents(eventNames?: any): void;

    /**
     * [Method] Appends an event handler to this object
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    static addListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    static addManagedListener(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Adds an Ext Direct Provider and creates the proxy or stub methods to execute server side methods
     * @param provider Ext.direct.Provider/Object... Accepts any number of Provider descriptions (an instance or config object for a Provider). Each Provider description instructs Ext.Direct how to create client-side stub methods.
     * @returns Object
     */
    static addProvider(provider?: any): any;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method] Removes all listeners for this object
     */
    static clearListeners(): void;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Enables events fired by this Observable to bubble up an owner hierarchy by calling this getBubbleTarget  if present
     * @param events String/String[] The event name to bubble, or an Array of event names.
     */
    static enableBubble(events?: any): void;

    /**
     * [Method] Fires the specified event with the passed parameters and execute a function action at the end if there are no liste
     * @param eventName String The name of the event to fire.
     * @param args Array Arguments to pass to handers.
     * @param fn Function Action.
     * @param scope Object Scope of fn.
     * @returns Object
     */
    static fireAction(
      eventName?: string,
      args?: any[],
      fn?: any,
      scope?: any
    ): any;

    /**
     * [Method] Fires the specified event with the passed parameters minus the event name plus the options object passed to addList
     * @param eventName String The name of the event to fire.
     * @param args Object... Variable number of parameters are passed to handlers.
     * @returns Boolean Returns false if any of the handlers return false.
     */
    static fireEvent(eventName: string, ...args: any[]): boolean;

    /**
     * [Method] Returns the value of bubbleEvents
     * @returns String/String[]
     */
    static getBubbleEvents(): any;

    /**
     * [Method] Retrieves the id of this component
     * @returns String id
     */
    static getId(): string;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Returns the value of listeners
     * @returns Object
     */
    static getListeners(): any;

    /**
     * [Method] Retrieves a provider by the id specified when the provider is added
     * @param id String/Ext.direct.Provider The id of the provider, or the provider instance.
     * @returns Object
     */
    static getProvider(id?: any): any;

    /**
     * [Method] Checks to see if this object has any listeners for a specified event
     * @param eventName String The name of the event to check for
     * @returns Boolean True if the event is being listened for, else false
     */
    static hasListener(eventName?: string): boolean;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Alias for addManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    static mon(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Alias for removeManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    static mun(object?: any, eventName?: any, fn?: any, scope?: any): void;

    /**
     * [Method] Alias for addListener
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    static on(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Alias for addAfterListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;

    /**
     * [Method] Alias for addBeforeListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static onBefore(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Parses a direct function
     * @param fn String/Function The direct function
     * @returns Function The function to use in the direct call. Null if not found
     */
    static parseMethod(fn?: any): any;

    /**
     * [Method] Relays selected events from the specified Observable as if the events were fired by this
     * @param object Object The Observable whose events this object is to relay.
     * @param events String/Array/Object Array of event names to relay.
     * @returns Ext.mixin.Observable this
     */
    static relayEvents(object?: any, events?: any): Ext$mixin$IObservable;

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static removeAfterListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static removeBeforeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Removes an event handler
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    static removeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    static removeManagedListener(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any
    ): void;

    /**
     * [Method] Removes the provider
     * @param provider String/Ext.direct.Provider The provider instance or the id of the provider.
     * @returns Ext.direct.Provider/null The provider, null if not found.
     */
    static removeProvider(provider?: any): any;

    /**
     * [Method] Resumes firing events see suspendEvents
     * @param discardQueuedEvents Boolean Pass as true to discard any queued events.
     */
    static resumeEvents(discardQueuedEvents?: boolean): void;

    /**
     * [Method] Sets the value of bubbleEvents
     * @param bubbleEvents String/String[] The new value.
     */
    static setBubbleEvents(bubbleEvents?: any): void;

    /**
     * [Method] Sets the value of listeners
     * @param listeners Object The new value.
     */
    static setListeners(listeners?: any): void;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;

    /**
     * [Method] Suspends the firing of all events
     */
    static suspendEvents(): void;

    /**
     * [Method] Alias for removeListener
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    static un(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Alias for removeAfterListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;

    /**
     * [Method] Alias for removeBeforeListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static unBefore(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;
  }

  declare export interface Ext$dom$IHelper {
    /**
     * [Method] Creates new DOM element s and appends them to el
     * @param el String/HTMLElement/Ext.Element The context element
     * @param o Object/String The DOM object spec (and children) or raw HTML blob
     * @param returnElement Boolean true to return a Ext.Element
     * @returns HTMLElement/Ext.Element The new node
     */
    append?: (el?: any, o?: any, returnElement?: boolean) => any;

    /**
     * [Method] Applies a style specification to an element
     * @param el String/HTMLElement The element to apply styles to
     * @param styles String/Object/Function A style specification string e.g. 'width:100px', or object in the form {width:'100px'}, or a function which returns such a specification.
     */
    applyStyles?: (el?: any, styles?: any) => void;

    /**
     * [Method] Creates a new Ext Template from the DOM object spec
     * @param o Object The DOM object spec (and children)
     * @returns Ext.Template The new template
     */
    createTemplate?: (o?: any) => Ext$ITemplate;

    /**
     * [Method] Converts the styles from the given object to text
     * @param styles Object The object describing the styles.
     * @param buffer String[] The output buffer.
     * @returns String/String[] If buffer is passed, it is returned. Otherwise the style string is returned.
     */
    generateStyles?: (styles?: any, buffer?: string[]) => any;

    /**
     * [Method] Creates new DOM element s and inserts them after el
     * @param el String/HTMLElement/Ext.Element The context element
     * @param o Object The DOM object spec (and children)
     * @param returnElement Boolean true to return a Ext.Element
     * @returns HTMLElement/Ext.Element The new node
     */
    insertAfter?: (el?: any, o?: any, returnElement?: boolean) => any;

    /**
     * [Method] Creates new DOM element s and inserts them before el
     * @param el String/HTMLElement/Ext.Element The context element
     * @param o Object/String The DOM object spec (and children) or raw HTML blob
     * @param returnElement Boolean true to return a Ext.Element
     * @returns HTMLElement/Ext.Element The new node
     */
    insertBefore?: (el?: any, o?: any, returnElement?: boolean) => any;

    /**
     * [Method] Creates new DOM element s and inserts them as the first child of el
     * @param el String/HTMLElement/Ext.Element The context element
     * @param o Object/String The DOM object spec (and children) or raw HTML blob
     * @param returnElement Boolean true to return a Ext.Element
     * @returns HTMLElement/Ext.Element The new node
     */
    insertFirst?: (el?: any, o?: any, returnElement?: boolean) => any;

    /**
     * [Method] Inserts an HTML fragment into the DOM
     * @param where String Where to insert the html in relation to el - beforeBegin, afterBegin, beforeEnd, afterEnd. For example take the following HTML: &lt;div&gt;Contents&lt;/div&gt; Using different where values inserts element to the following places:  beforeBegin: &lt;HERE&gt;&lt;div&gt;Contents&lt;/div&gt; afterBegin: &lt;div&gt;&lt;HERE&gt;Contents&lt;/div&gt; beforeEnd: &lt;div&gt;Contents&lt;HERE&gt;&lt;/div&gt; afterEnd: &lt;div&gt;Contents&lt;/div&gt;&lt;HERE&gt;
     * @param el HTMLElement/TextNode The context element
     * @param html String The HTML fragment
     * @returns HTMLElement The new node
     */
    insertHtml?: (where?: string, el?: any, html?: string) => HTMLElement;

    /**
     * [Method] Returns the markup for the passed Element s config
     * @param spec Object The DOM object spec (and children).
     * @returns String
     */
    markup?: (spec?: any) => string;

    /**
     * [Method] Creates new DOM element s and overwrites the contents of el with them
     * @param el String/HTMLElement/Ext.Element The context element
     * @param o Object/String The DOM object spec (and children) or raw HTML blob
     * @param returnElement Boolean true to return a Ext.Element
     * @returns HTMLElement/Ext.Element The new node
     */
    overwrite?: (el?: any, o?: any, returnElement?: boolean) => any;
  }

  declare export type Ext$ICompositeElement = {
    /**
     * [Property] (HTMLElement[])
     */
    elements?: HTMLElement[],

    /**
     * [Method] Adds elements to this Composite object
     * @param els HTMLElement[]/Ext.dom.CompositeElementLite Either an Array of DOM elements to add, or another Composite object who's elements should be added.
     * @param root HTMLElement/String The root element of the query or id of the root.
     * @returns Ext.dom.CompositeElementLite This Composite object.
     */
    add?: (els?: any, root?: any) => dom$ICompositeElementLite,

    /**
     * [Method] Adds the given CSS class es to this Element
     * @param names String The CSS class(es) to add to this element.
     * @param prefix String Prefix to prepend to each class.
     * @param suffix String Suffix to append to each class.
     * @returns Ext.dom.Element this
     */
    addCls?: (names?: string, prefix?: string, suffix?: string) => dom$IElement,

    /**
     * [Method] fixes scope with flyweight
     * @param eventName Object
     * @param handler Object
     * @param scope Object
     * @param opt Object
     * @returns Ext.dom.CompositeElementLite this
     */
    addListener?: (
      eventName?: any,
      handler?: any,
      scope?: any,
      opt?: any
    ) => dom$ICompositeElementLite,

    /**
     * [Method] Appends the passed element s to this element
     * @param element HTMLElement/Ext.dom.Element a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    appendChild?: (element?: any) => dom$IElement,

    /**
     * [Method] Appends this element to the passed element
     * @param el String/HTMLElement/Ext.dom.Element The new parent element. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    appendTo?: (el?: any) => dom$IElement,

    /**
     * [Method] More flexible version of setStyle for setting style properties
     * @param styles String/Object/Function A style specification string, e.g. "width:100px", or object in the form {width:"100px"}, or a function which returns such a specification.
     * @returns Ext.dom.Element this
     */
    applyStyles?: (styles?: any) => dom$IElement,

    /**
     * [Method] Selects a single direct child based on the passed CSS selector the selector should not contain an id
     * @param selector String The CSS selector.
     * @param returnDom Boolean true to return the DOM node instead of Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The child Ext.dom.Element (or DOM node if returnDom is true)
     */
    child?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Removes all elements
     */
    clear?: () => void,

    /**
     * [Method] Returns true if this composite contains the passed element
     * @param el String/HTMLElement/Ext.Element/Number The id of an element, or an Ext.Element, or an HtmlElement to find within the composite collection.
     * @returns Boolean
     */
    contains?: (el?: any) => boolean,

    /**
     * [Method] Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child e
     * @param config Object DomHelper element config object. If no tag is specified (e.g., {tag:'input'}) then a div will be automatically generated with the specified attributes.
     * @param insertBefore HTMLElement a child element of this element.
     * @param returnDom Boolean true to return the dom node instead of creating an Element.
     * @returns Ext.dom.Element The new child element.
     */
    createChild?: (
      config?: any,
      insertBefore?: HTMLElement,
      returnDom?: boolean
    ) => dom$IElement,

    /**
     * [Method] Translates an element using CSS 3 in 2D
     */
    cssTranslate?: () => void,

    /**
     * [Method] Removes this element s DOM reference
     */
    destroy?: () => void,

    /**
     * [Method] Selects a single child at any depth below this element based on the passed CSS selector the selector should not cont
     * @param selector String The CSS selector.
     * @param returnDom Boolean true to return the DOM node instead of Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The child Ext.dom.Element (or DOM node if returnDom is true).
     */
    down?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Calls the passed function for each element in this composite
     * @param fn Function The function to call.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the Element.
     * @returns Ext.dom.CompositeElementLite this
     */
    each?: (fn?: any, scope?: any) => dom$ICompositeElementLite,

    /**
     * [Method] Clears this Composite and adds the elements passed
     * @param els HTMLElement[]/Ext.dom.CompositeElementLite Either an array of DOM elements, or another Composite from which to fill this Composite.
     * @returns Ext.dom.CompositeElementLite this
     */
    fill?: (els?: any) => dom$ICompositeElementLite,

    /**
     * [Method] Filters this composite to only elements that match the passed selector
     * @param selector String/Function A string CSS selector or a comparison function. The comparison function will be called with the following arguments:
     * @returns Ext.dom.CompositeElementLite this
     */
    filter?: (selector?: any) => dom$ICompositeElementLite,

    /**
     * [Method] Looks at this node and then at parent nodes for a match of the passed simple selector e g
     * @param simpleSelector String The simple selector to test.
     * @param maxDepth Number/String/HTMLElement/Ext.Element The max depth to search as a number or element (defaults to 50 || document.body)
     * @param returnEl Boolean true to return a Ext.Element object instead of DOM node.
     * @returns HTMLElement/null The matching DOM node (or null if no match was found).
     */
    findParent?: (
      simpleSelector?: string,
      maxDepth?: any,
      returnEl?: boolean
    ) => any,

    /**
     * [Method] Looks at parent nodes for a match of the passed simple selector e g
     * @param simpleSelector String The simple selector to test.
     * @param maxDepth Number/String/HTMLElement/Ext.Element The max depth to search as a number or element (defaults to 10 || document.body).
     * @param returnEl Boolean true to return a Ext.Element object instead of DOM node.
     * @returns HTMLElement/null The matching DOM node (or null if no match was found).
     */
    findParentNode?: (
      simpleSelector?: string,
      maxDepth?: any,
      returnEl?: boolean
    ) => any,

    /**
     * [Method] Gets the x y coordinates to align this element with another element
     * @param element Mixed The element to align to.
     * @param position String The position to align to.
     * @param offsets Array Offset the positioning by [x, y].
     * @returns Array [x, y]
     */
    getAlignToXY?: (element?: any, position?: string, offsets?: any[]) => any[],

    /**
     * [Method] Gets the x y coordinates specified by the anchor position on the element
     * @param anchor String The specified anchor position.
     * @param local Boolean true to get the local (element top/left-relative) anchor position instead of page coordinates.
     * @param size Object An object containing the size to use for calculating anchor position. {width: (target width), height: (target height)} (defaults to the element's current size)
     * @returns Array [x, y] An array containing the element's x and y coordinates.
     */
    getAnchorXY?: (anchor?: string, local?: boolean, size?: any) => any[],

    /**
     * [Method] Returns the value of an attribute from the element s underlying DOM node
     * @param name String The attribute name.
     * @param namespace String The namespace in which to look for the attribute.
     * @returns String The attribute value.
     */
    getAttribute?: (name?: string, namespace?: string) => string,

    /**
     * [Method] Gets the width of the border s for the specified side s
     * @param side String Can be t, l, r, b or any combination of those to add multiple values. For example, passing 'lr' would get the border left width + the border right width.
     * @returns Number The width of the sides passed added together
     */
    getBorderWidth?: (side?: string) => number,

    /**
     * [Method] Gets the bottom Y coordinate of the element element Y position  element height
     * @returns Number
     */
    getBottom?: () => number,

    /**
     * [Method] Return an object defining the area of this Element which can be passed to setBox to set another Element s size locati
     * @param contentBox Boolean If true a box for the content of the element is returned.
     * @param local Boolean If true the element's left and top are returned instead of page x/y.
     * @returns Object An object in the format
     */
    getBox?: (contentBox?: boolean, local?: boolean) => any,

    /**
     * [Method] Returns the number of elements in this Composite
     * @returns Number
     */
    getCount?: () => number,

    /**
     * [Method] Returns the innerHTML of an element
     * @returns String
     */
    getHTML?: () => string,

    /**
     * [Method] Returns the offset height of the element
     * @param contentHeight Boolean true to get the height minus borders and padding.
     * @returns Number The element's height.
     */
    getHeight?: (contentHeight?: boolean) => number,

    /**
     * [Method] Returns the innerHTML of an element
     * @returns String
     */
    getHtml?: () => string,

    /**
     * [Method] Gets the left X coordinate
     * @returns Number
     */
    getLeft?: () => number,

    /**
     * [Method] Returns an object with properties top left right and bottom representing the margins of this element unless sides i
     * @param sides String Any combination of 'l', 'r', 't', 'b' to get the sum of those sides.
     * @returns Object/Number
     */
    getMargin?: (sides?: string) => any,

    /**
     * [Method] Returns the offsets of this element from the passed element
     * @param element Mixed The element to get the offsets from.
     * @returns Array The XY page offsets (e.g. [100, -200])
     */
    getOffsetsTo?: (element?: any) => any[],

    /**
     * [Method] Retrieves the height of the element account for the top and bottom margins
     */
    getOuterHeight?: () => void,

    /**
     * [Method] Retrieves the width of the element accounting for the left and right margins
     */
    getOuterWidth?: () => void,

    /**
     * [Method] Gets the width of the padding s for the specified side s
     * @param side String Can be t, l, r, b or any combination of those to add multiple values. For example, passing 'lr' would get the padding left + the padding right.
     * @returns Number The padding of the sides passed added together.
     */
    getPadding?: (side?: string) => number,

    /**
     * [Method] Return an object defining the area of this Element which can be passed to setBox to set another Element s size locati
     * @param asRegion Boolean If true an Ext.util.Region will be returned.
     * @returns Object box An object in the format: {  x: &lt;Element's X position&gt;,  y: &lt;Element's Y position&gt;,  width: &lt;Element's width&gt;,  height: &lt;Element's height&gt;,  bottom: &lt;Element's lower bound&gt;,  right: &lt;Element's rightmost bound&gt; }  The returned object may also be addressed as an Array where index 0 contains the X position and index 1 contains the Y position. So the result may also be used for setXY.
     */
    getPageBox?: (asRegion?: boolean) => any,

    /**
     * [Method] Gets the right X coordinate of the element element X position  element width
     * @returns Number
     */
    getRight?: () => number,

    /**
     * [Method] Gets the Scroller instance of the first parent that has one
     */
    getScrollParent?: () => void,

    /**
     * [Method] Returns the size of the element
     * @param contentSize Boolean true to get the width/size minus borders and padding.
     * @returns Object An object containing the element's size:
     */
    getSize?: (contentSize?: boolean) => any,

    /**
     * [Method] Normalizes currentStyle and computedStyle
     * @param prop String The style property whose value is returned.
     * @returns String The current value of the style property for this element.
     */
    getStyle?: (prop?: string) => string,

    /**
     * [Method] Gets the top Y coordinate
     * @returns Number
     */
    getTop?: () => number,

    /**
     * [Method] Returns the value of the value attribute
     * @param asNumber Boolean true to parse the value as a number.
     * @returns String/Number
     */
    getValue?: (asNumber?: boolean) => any,

    /**
     * [Method] Returns the dimensions of the element available to lay content out in
     * @returns Object Object describing width and height:
     */
    getViewSize?: () => any,

    /**
     * [Method] Returns the offset width of the element
     * @param contentWidth Boolean true to get the width minus borders and padding.
     * @returns Number The element's width.
     */
    getWidth?: (contentWidth?: boolean) => number,

    /**
     * [Method] Gets the current X position of the element based on page coordinates
     * @returns Number The X position of the element
     */
    getX?: () => number,

    /**
     * [Method] Gets the current position of the element based on page coordinates
     * @returns Array The XY position of the element
     */
    getXY?: () => any[],

    /**
     * [Method] Gets the current Y position of the element based on page coordinates
     * @returns Number The Y position of the element
     */
    getY?: () => number,

    /**
     * [Method] Checks if the specified CSS class exists on this element s DOM node
     * @param name String The CSS class to check for.
     * @returns Boolean true if the class exists, else false.
     */
    hasCls?: (name?: string) => boolean,

    /**
     * [Method] Hides this element
     */
    hide?: () => void,

    /**
     * [Method] Find the index of the passed element within the composite collection
     * @param el String/HTMLElement/Ext.Element/Number The id of an element, or an Ext.dom.Element, or an HtmlElement to find within the composite collection.
     * @returns Number The index of the passed Ext.dom.Element in the composite collection, or -1 if not found.
     */
    indexOf?: (el?: any) => number,

    /**
     * [Method] Inserts this element after the passed element in the DOM
     * @param el String/HTMLElement/Ext.dom.Element The element to insert after. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    insertAfter?: (el?: any) => dom$IElement,

    /**
     * [Method] Inserts this element before the passed element in the DOM
     * @param el String/HTMLElement/Ext.dom.Element The element before which this element will be inserted. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    insertBefore?: (el?: any) => dom$IElement,

    /**
     * [Method] Inserts an element as the first child of this element
     * @param element String/HTMLElement/Ext.dom.Element The id or element to insert.
     * @returns Ext.dom.Element this
     */
    insertFirst?: (element?: any) => dom$IElement,

    /**
     * [Method] Inserts an HTML fragment into this element
     * @param where String Where to insert the HTML in relation to this element - 'beforeBegin', 'afterBegin', 'beforeEnd', 'afterEnd'. See Ext.DomHelper.insertHtml for details.
     * @param html String The HTML fragment
     * @param returnEl Boolean true to return an Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The inserted node (or nearest related if more than 1 inserted).
     */
    insertHtml?: (where?: string, html?: string, returnEl?: boolean) => any,

    /**
     * [Method] Inserts or creates the passed element or DomHelper config as a sibling of this element
     * @param el String/HTMLElement/Ext.dom.Element/Object/Array The id, element to insert or a DomHelper config to create and insert or an array of any of those.
     * @param where String 'before' or 'after'.
     * @param returnDom Boolean true to return the raw DOM element instead of Ext.dom.Element.
     * @returns Ext.dom.Element The inserted Element. If an array is passed, the last inserted element is returned.
     */
    insertSibling?: (
      el?: any,
      where?: string,
      returnDom?: boolean
    ) => dom$IElement,

    /**
     * [Method] Returns true if this element matches the passed simple selector e g
     * @param selector String The simple selector to test.
     * @returns Boolean true if this element matches the selector, else false.
     */
    is?: (selector?: string) => boolean,

    /**
     * [Method] Determines if this element is a descendant of the passed in Element
     */
    isDescendent?: () => void,

    /**
     * [Method] Checks if the current value of a style is equal to a given value
     * @param style String property whose value is returned.
     * @param value String to check against.
     * @returns Boolean true for when the current value equals the given value.
     */
    isStyle?: (style?: string, value?: string) => boolean,

    /**
     * [Method] Returns true if the value of the given property is visually transparent
     * @param prop String The style property whose value is to be tested.
     * @returns Boolean true if the style property is visually transparent.
     */
    isTransparent?: (prop?: string) => boolean,

    /**
     * [Method] Returns a flyweight Element of the dom element object at the specified index
     * @param index Number
     * @returns Ext.dom.Element
     */
    item?: (index?: number) => dom$IElement,

    /**
     * [Method] Puts a mask over this element to disable user interaction
     */
    mask?: () => void,

    /**
     * [Method] Gets the next sibling skipping text nodes
     * @param selector String Find the next sibling that matches the passed simple selector.
     * @param returnDom Boolean true to return a raw dom node instead of an Ext.dom.Element.
     * @returns Ext.dom.Element/HTMLElement/null The next sibling or null.
     */
    next?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Gets the parent node for this element optionally chaining up trying to match a selector
     * @param selector String Find a parent node that matches the passed simple selector.
     * @param returnDom Boolean true to return a raw DOM node instead of an Ext.dom.Element.
     * @returns Ext.dom.Element/HTMLElement/null The parent node or null.
     */
    parent?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Gets the previous sibling skipping text nodes
     * @param selector String Find the previous sibling that matches the passed simple selector.
     * @param returnDom Boolean true to return a raw DOM node instead of an Ext.dom.Element
     * @returns Ext.dom.Element/HTMLElement/null The previous sibling or null.
     */
    prev?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Removes all listeners for this object
     */
    purgeAllListeners?: () => void,

    /**
     * [Method] Selects child nodes based on the passed CSS selector the selector should not contain an id
     * @param selector String The CSS selector.
     * @returns HTMLElement[] An array of the matched nodes.
     */
    query?: (selector?: string) => HTMLElement[],

    /**
     * [Method] Adds one or more CSS classes to this element and removes the same class es from all siblings
     * @param className String/String[] The CSS class to add, or an array of classes.
     * @returns Ext.dom.Element this
     */
    radioCls?: (className?: any) => dom$IElement,

    /**
     * [Method] Removes this element s DOM reference
     */
    remove?: () => void,

    /**
     * [Method] Removes all listeners for this object
     */
    removeAllListeners?: () => void,

    /**
     * [Method] Removes the given CSS class es from this Element
     * @param names String The CSS class(es) to remove from this element.
     * @param prefix String Prefix to prepend to each class to be removed.
     * @param suffix String Suffix to append to each class to be removed.
     * @returns Ext.dom.Element this
     */
    removeCls?: (
      names?: string,
      prefix?: string,
      suffix?: string
    ) => dom$IElement,

    /**
     * [Method] Removes the specified element s
     * @param el String/HTMLElement/Ext.Element/Number The id of an element, the Element itself, the index of the element in this composite or an array of any of those.
     * @param removeDom Boolean true to also remove the element from the document
     * @returns Ext.dom.CompositeElementLite this
     */
    removeElement?: (
      el?: any,
      removeDom?: boolean
    ) => dom$ICompositeElementLite,

    /**
     * [Method] Forces the browser to repaint this element
     * @returns Ext.dom.Element this
     */
    repaint?: () => dom$IElement,

    /**
     * [Method] Replaces the passed element with this element
     * @param element String/HTMLElement/Ext.dom.Element The element to replace. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    replace?: (element?: any) => dom$IElement,

    /**
     * [Method] Replaces a CSS class on the element with another
     * @param oldName String The CSS class to replace.
     * @param newName String The replacement CSS class.
     * @param prefix String Prefix to prepend to each class to be replaced.
     * @param suffix String Suffix to append to each class to be replaced.
     * @returns Ext.dom.Element this
     */
    replaceCls?: (
      oldName?: string,
      newName?: string,
      prefix?: string,
      suffix?: string
    ) => dom$IElement,

    /**
     * [Method] Replaces the specified element with the passed element
     * @param el String/HTMLElement/Ext.Element/Number The id of an element, the Element itself, the index of the element in this composite to replace.
     * @param replacement String/Ext.Element The id of an element or the Element itself.
     * @param domReplace Boolean true to remove and replace the element in the document too.
     * @returns Ext.dom.CompositeElementLite this
     */
    replaceElement?: (
      el?: any,
      replacement?: any,
      domReplace?: boolean
    ) => dom$ICompositeElementLite,

    /**
     * [Method] Replaces this element with the passed element
     * @param el String/HTMLElement/Ext.dom.Element/Object The new element (id of the node, a DOM Node or an existing Element) or a DomHelper config of an element to create.
     * @returns Ext.dom.Element This element.
     */
    replaceWith?: (el?: any) => dom$IElement,

    /**
     * [Method] Selects elements based on the passed CSS selector to enable Element methods to be applied to many related elements in
     * @param selector String/HTMLElement[] The CSS selector or an array of elements
     * @param composite Boolean Return a CompositeElement as opposed to a CompositeElementLite. Defaults to false.
     * @returns Ext.dom.CompositeElementLite/Ext.dom.CompositeElement
     */
    select?: (selector?: any, composite?: boolean) => dom$ICompositeElementLite,

    /**
     * [Method] Serializes a DOM form into a url encoded string
     * @param form Object The form
     * @returns String The url encoded form
     */
    serializeForm?: (form?: any) => string,

    /**
     * [Method] Sets the passed attributes as attributes of this element a style attribute can be a string object or function
     * @param attributes Object The object with the attributes.
     * @param useSet Boolean false to override the default setAttribute to use expandos.
     * @returns Ext.dom.Element this
     */
    set?: (attributes?: any, useSet?: boolean) => dom$IElement,

    /**
     * [Method] Sets the element s CSS bottom style
     * @param bottom String The bottom CSS property value.
     * @returns Ext.dom.Element this
     */
    setBottom?: (bottom?: string) => dom$IElement,

    /**
     * [Method] Sets the element s box
     * @param box Object The box to fill, for example: {  left: ...,  top: ...,  width: ...,  height: ... }
     * @returns Ext.dom.Element this
     */
    setBox?: (box?: any) => dom$IElement,

    /**
     * [Method] Sets the specified CSS class on this element s DOM node
     * @param className String/Array The CSS class to set on this element.
     */
    setCls?: (className?: any) => void,

    /**
     * [Method] Sets the innerHTML of this element
     * @param html String The new HTML.
     */
    setHTML?: (html?: string) => void,

    /**
     * [Method] Set the height of this Element
     * @param height Number/String The new height.
     * @returns Ext.dom.Element this
     */
    setHeight?: (height?: any) => dom$IElement,

    /**
     * [Method] Sets the innerHTML of this element
     * @param html String The new HTML.
     */
    setHtml?: (html?: string) => void,

    /**
     * [Method] Sets the element s left position directly using CSS style instead of setX
     * @param left String The left CSS property value.
     * @returns Ext.dom.Element this
     */
    setLeft?: (left?: string) => dom$IElement,

    /**
     * [Method] Set the maximum height of this Element
     * @param height Number/String The new maximum height.
     * @returns Ext.dom.Element this
     */
    setMaxHeight?: (height?: any) => dom$IElement,

    /**
     * [Method] Set the maximum width of this Element
     * @param width Number/String The new maximum width.
     * @returns Ext.dom.Element this
     */
    setMaxWidth?: (width?: any) => dom$IElement,

    /**
     * [Method] Set the minimum height of this Element
     * @param height Number/String The new minimum height.
     * @returns Ext.dom.Element this
     */
    setMinHeight?: (height?: any) => dom$IElement,

    /**
     * [Method] Set the minimum width of this Element
     * @param width Number/String The new minimum width.
     * @returns Ext.dom.Element this
     */
    setMinWidth?: (width?: any) => dom$IElement,

    /**
     * [Method] Sets the element s CSS right style
     * @param right String The right CSS property value.
     * @returns Ext.dom.Element this
     */
    setRight?: (right?: string) => dom$IElement,

    /**
     * [Method] Set the size of this Element
     * @param width Number/String The new width. This may be one of:  A Number specifying the new width in this Element's defaultUnits (by default, pixels). A String used to set the CSS width style. Animation may not be used. A size object in the format {width: widthValue, height: heightValue}.
     * @param height Number/String The new height. This may be one of:  A Number specifying the new height in this Element's defaultUnits (by default, pixels). A String used to set the CSS height style. Animation may not be used.
     * @returns Ext.dom.Element this
     */
    setSize?: (width?: any, height?: any) => dom$IElement,

    /**
     * [Method] Wrapper for setting style properties also takes single object parameter of multiple styles
     * @param property String/Object The style property to be set, or an object of multiple styles.
     * @param value String The value to apply to the given property, or null if an object was passed.
     * @returns Ext.dom.Element this
     */
    setStyle?: (property?: any, value?: string) => dom$IElement,

    /**
     * [Method] Sets the element s top position directly using CSS style instead of setY
     * @param top String The top CSS property value.
     * @returns Ext.dom.Element this
     */
    setTop?: (top?: string) => dom$IElement,

    /**
     * [Method] Sets the element s top and left positions directly using CSS style
     */
    setTopLeft?: () => void,

    /**
     * [Method] Use this to change the visibility mode between VISIBILITY DISPLAY or OFFSETS
     * @param mode Object
     * @returns Ext.dom.Element this
     */
    setVisibilityMode?: (mode?: any) => dom$IElement,

    /**
     * [Method] Sets the visibility of the element see details
     * @param visible Boolean Whether the element is visible.
     * @returns Ext.Element this
     */
    setVisible?: (visible?: boolean) => Ext$IElement,

    /**
     * [Method] Set the width of this Element
     * @param width Number/String The new width.
     * @returns Ext.dom.Element this
     */
    setWidth?: (width?: any) => dom$IElement,

    /**
     * [Method] Sets the X position of the element based on page coordinates
     * @param x Number The X position of the element
     * @returns Ext.dom.Element this
     */
    setX?: (x?: number) => dom$IElement,

    /**
     * [Method] Sets the position of the element in page coordinates regardless of how the element is positioned
     * @param pos Number[] Contains X &amp; Y [x, y] values for new position (coordinates are page-based).
     * @returns Ext.dom.Element this
     */
    setXY?: (pos?: number[]) => dom$IElement,

    /**
     * [Method] Sets the Y position of the element based on page coordinates
     * @param y Number The Y position of the element.
     * @returns Ext.dom.Element this
     */
    setY?: (y?: number) => dom$IElement,

    /**
     * [Method] Shows this element
     */
    show?: () => void,

    /**
     * [Method] Toggles the specified CSS class on this element removes it if it already exists otherwise adds it
     * @param className String The CSS class to toggle.
     * @returns Ext.dom.Element this
     */
    toggleCls?: (className?: string) => dom$IElement,

    /**
     * [Method] Translates the passed page coordinates into left top CSS values for this element
     * @param x Number/Array The page x or an array containing [x, y].
     * @param y Number The page y, required if x is not an array.
     * @returns Object An object with left and top properties. e.g. {left: (value), top: (value)}.
     */
    translatePoints?: (x?: any, y?: number) => any,

    /**
     * [Method] Removes a previously applied mask
     */
    unmask?: () => void,

    /**
     * [Method] Walks up the dom looking for a parent node that matches the passed simple selector e g
     * @param simpleSelector String The simple selector to test
     * @param maxDepth Number/String/HTMLElement/Ext.Element The max depth to search as a number or element (defaults to 10 || document.body).
     * @returns Ext.dom.Element/null The matching DOM node (or null if no match was found).
     */
    up?: (simpleSelector?: string, maxDepth?: any) => any,

    /**
     * [Method] Sets the innerHTML of this element
     * @param html String The new HTML.
     */
    update?: (html?: string) => void,

    /**
     * [Method] Creates and wraps this element with another element
     * @param config Object DomHelper element config object for the wrapper element or null for an empty div
     * @param domNode Boolean true to return the raw DOM element instead of Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The newly created wrapper element.
     */
    wrap?: (config?: any, domNode?: boolean) => any
  } & undefined.ICompositeElementLite;

  declare export type Ext$ICompositeElementLite = {
    /**
     * [Property] (HTMLElement[])
     */
    elements?: HTMLElement[],

    /**
     * [Method] Adds elements to this Composite object
     * @param els HTMLElement[]/Ext.dom.CompositeElementLite Either an Array of DOM elements to add, or another Composite object who's elements should be added.
     * @param root HTMLElement/String The root element of the query or id of the root.
     * @returns Ext.dom.CompositeElementLite This Composite object.
     */
    add?: (els?: any, root?: any) => dom$ICompositeElementLite,

    /**
     * [Method] Adds the given CSS class es to this Element
     * @param names String The CSS class(es) to add to this element.
     * @param prefix String Prefix to prepend to each class.
     * @param suffix String Suffix to append to each class.
     * @returns Ext.dom.Element this
     */
    addCls?: (names?: string, prefix?: string, suffix?: string) => dom$IElement,

    /**
     * [Method] fixes scope with flyweight
     * @param eventName Object
     * @param handler Object
     * @param scope Object
     * @param opt Object
     * @returns Ext.dom.CompositeElementLite this
     */
    addListener?: (
      eventName?: any,
      handler?: any,
      scope?: any,
      opt?: any
    ) => dom$ICompositeElementLite,

    /**
     * [Method] Appends the passed element s to this element
     * @param element HTMLElement/Ext.dom.Element a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    appendChild?: (element?: any) => dom$IElement,

    /**
     * [Method] Appends this element to the passed element
     * @param el String/HTMLElement/Ext.dom.Element The new parent element. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    appendTo?: (el?: any) => dom$IElement,

    /**
     * [Method] More flexible version of setStyle for setting style properties
     * @param styles String/Object/Function A style specification string, e.g. "width:100px", or object in the form {width:"100px"}, or a function which returns such a specification.
     * @returns Ext.dom.Element this
     */
    applyStyles?: (styles?: any) => dom$IElement,

    /**
     * [Method] Selects a single direct child based on the passed CSS selector the selector should not contain an id
     * @param selector String The CSS selector.
     * @param returnDom Boolean true to return the DOM node instead of Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The child Ext.dom.Element (or DOM node if returnDom is true)
     */
    child?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Removes all elements
     */
    clear?: () => void,

    /**
     * [Method] Returns true if this composite contains the passed element
     * @param el String/HTMLElement/Ext.Element/Number The id of an element, or an Ext.Element, or an HtmlElement to find within the composite collection.
     * @returns Boolean
     */
    contains?: (el?: any) => boolean,

    /**
     * [Method] Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child e
     * @param config Object DomHelper element config object. If no tag is specified (e.g., {tag:'input'}) then a div will be automatically generated with the specified attributes.
     * @param insertBefore HTMLElement a child element of this element.
     * @param returnDom Boolean true to return the dom node instead of creating an Element.
     * @returns Ext.dom.Element The new child element.
     */
    createChild?: (
      config?: any,
      insertBefore?: HTMLElement,
      returnDom?: boolean
    ) => dom$IElement,

    /**
     * [Method] Translates an element using CSS 3 in 2D
     */
    cssTranslate?: () => void,

    /**
     * [Method] Removes this element s DOM reference
     */
    destroy?: () => void,

    /**
     * [Method] Selects a single child at any depth below this element based on the passed CSS selector the selector should not cont
     * @param selector String The CSS selector.
     * @param returnDom Boolean true to return the DOM node instead of Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The child Ext.dom.Element (or DOM node if returnDom is true).
     */
    down?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Calls the passed function for each element in this composite
     * @param fn Function The function to call.
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the Element.
     * @returns Ext.dom.CompositeElementLite this
     */
    each?: (fn?: any, scope?: any) => dom$ICompositeElementLite,

    /**
     * [Method] Clears this Composite and adds the elements passed
     * @param els HTMLElement[]/Ext.dom.CompositeElementLite Either an array of DOM elements, or another Composite from which to fill this Composite.
     * @returns Ext.dom.CompositeElementLite this
     */
    fill?: (els?: any) => dom$ICompositeElementLite,

    /**
     * [Method] Filters this composite to only elements that match the passed selector
     * @param selector String/Function A string CSS selector or a comparison function. The comparison function will be called with the following arguments:
     * @returns Ext.dom.CompositeElementLite this
     */
    filter?: (selector?: any) => dom$ICompositeElementLite,

    /**
     * [Method] Looks at this node and then at parent nodes for a match of the passed simple selector e g
     * @param simpleSelector String The simple selector to test.
     * @param maxDepth Number/String/HTMLElement/Ext.Element The max depth to search as a number or element (defaults to 50 || document.body)
     * @param returnEl Boolean true to return a Ext.Element object instead of DOM node.
     * @returns HTMLElement/null The matching DOM node (or null if no match was found).
     */
    findParent?: (
      simpleSelector?: string,
      maxDepth?: any,
      returnEl?: boolean
    ) => any,

    /**
     * [Method] Looks at parent nodes for a match of the passed simple selector e g
     * @param simpleSelector String The simple selector to test.
     * @param maxDepth Number/String/HTMLElement/Ext.Element The max depth to search as a number or element (defaults to 10 || document.body).
     * @param returnEl Boolean true to return a Ext.Element object instead of DOM node.
     * @returns HTMLElement/null The matching DOM node (or null if no match was found).
     */
    findParentNode?: (
      simpleSelector?: string,
      maxDepth?: any,
      returnEl?: boolean
    ) => any,

    /**
     * [Method] Gets the x y coordinates to align this element with another element
     * @param element Mixed The element to align to.
     * @param position String The position to align to.
     * @param offsets Array Offset the positioning by [x, y].
     * @returns Array [x, y]
     */
    getAlignToXY?: (element?: any, position?: string, offsets?: any[]) => any[],

    /**
     * [Method] Gets the x y coordinates specified by the anchor position on the element
     * @param anchor String The specified anchor position.
     * @param local Boolean true to get the local (element top/left-relative) anchor position instead of page coordinates.
     * @param size Object An object containing the size to use for calculating anchor position. {width: (target width), height: (target height)} (defaults to the element's current size)
     * @returns Array [x, y] An array containing the element's x and y coordinates.
     */
    getAnchorXY?: (anchor?: string, local?: boolean, size?: any) => any[],

    /**
     * [Method] Returns the value of an attribute from the element s underlying DOM node
     * @param name String The attribute name.
     * @param namespace String The namespace in which to look for the attribute.
     * @returns String The attribute value.
     */
    getAttribute?: (name?: string, namespace?: string) => string,

    /**
     * [Method] Gets the width of the border s for the specified side s
     * @param side String Can be t, l, r, b or any combination of those to add multiple values. For example, passing 'lr' would get the border left width + the border right width.
     * @returns Number The width of the sides passed added together
     */
    getBorderWidth?: (side?: string) => number,

    /**
     * [Method] Gets the bottom Y coordinate of the element element Y position  element height
     * @returns Number
     */
    getBottom?: () => number,

    /**
     * [Method] Return an object defining the area of this Element which can be passed to setBox to set another Element s size locati
     * @param contentBox Boolean If true a box for the content of the element is returned.
     * @param local Boolean If true the element's left and top are returned instead of page x/y.
     * @returns Object An object in the format
     */
    getBox?: (contentBox?: boolean, local?: boolean) => any,

    /**
     * [Method] Returns the number of elements in this Composite
     * @returns Number
     */
    getCount?: () => number,

    /**
     * [Method] Returns the innerHTML of an element
     * @returns String
     */
    getHTML?: () => string,

    /**
     * [Method] Returns the offset height of the element
     * @param contentHeight Boolean true to get the height minus borders and padding.
     * @returns Number The element's height.
     */
    getHeight?: (contentHeight?: boolean) => number,

    /**
     * [Method] Returns the innerHTML of an element
     * @returns String
     */
    getHtml?: () => string,

    /**
     * [Method] Gets the left X coordinate
     * @returns Number
     */
    getLeft?: () => number,

    /**
     * [Method] Returns an object with properties top left right and bottom representing the margins of this element unless sides i
     * @param sides String Any combination of 'l', 'r', 't', 'b' to get the sum of those sides.
     * @returns Object/Number
     */
    getMargin?: (sides?: string) => any,

    /**
     * [Method] Returns the offsets of this element from the passed element
     * @param element Mixed The element to get the offsets from.
     * @returns Array The XY page offsets (e.g. [100, -200])
     */
    getOffsetsTo?: (element?: any) => any[],

    /**
     * [Method] Retrieves the height of the element account for the top and bottom margins
     */
    getOuterHeight?: () => void,

    /**
     * [Method] Retrieves the width of the element accounting for the left and right margins
     */
    getOuterWidth?: () => void,

    /**
     * [Method] Gets the width of the padding s for the specified side s
     * @param side String Can be t, l, r, b or any combination of those to add multiple values. For example, passing 'lr' would get the padding left + the padding right.
     * @returns Number The padding of the sides passed added together.
     */
    getPadding?: (side?: string) => number,

    /**
     * [Method] Return an object defining the area of this Element which can be passed to setBox to set another Element s size locati
     * @param asRegion Boolean If true an Ext.util.Region will be returned.
     * @returns Object box An object in the format: {  x: &lt;Element's X position&gt;,  y: &lt;Element's Y position&gt;,  width: &lt;Element's width&gt;,  height: &lt;Element's height&gt;,  bottom: &lt;Element's lower bound&gt;,  right: &lt;Element's rightmost bound&gt; }  The returned object may also be addressed as an Array where index 0 contains the X position and index 1 contains the Y position. So the result may also be used for setXY.
     */
    getPageBox?: (asRegion?: boolean) => any,

    /**
     * [Method] Gets the right X coordinate of the element element X position  element width
     * @returns Number
     */
    getRight?: () => number,

    /**
     * [Method] Gets the Scroller instance of the first parent that has one
     */
    getScrollParent?: () => void,

    /**
     * [Method] Returns the size of the element
     * @param contentSize Boolean true to get the width/size minus borders and padding.
     * @returns Object An object containing the element's size:
     */
    getSize?: (contentSize?: boolean) => any,

    /**
     * [Method] Normalizes currentStyle and computedStyle
     * @param prop String The style property whose value is returned.
     * @returns String The current value of the style property for this element.
     */
    getStyle?: (prop?: string) => string,

    /**
     * [Method] Gets the top Y coordinate
     * @returns Number
     */
    getTop?: () => number,

    /**
     * [Method] Returns the value of the value attribute
     * @param asNumber Boolean true to parse the value as a number.
     * @returns String/Number
     */
    getValue?: (asNumber?: boolean) => any,

    /**
     * [Method] Returns the dimensions of the element available to lay content out in
     * @returns Object Object describing width and height:
     */
    getViewSize?: () => any,

    /**
     * [Method] Returns the offset width of the element
     * @param contentWidth Boolean true to get the width minus borders and padding.
     * @returns Number The element's width.
     */
    getWidth?: (contentWidth?: boolean) => number,

    /**
     * [Method] Gets the current X position of the element based on page coordinates
     * @returns Number The X position of the element
     */
    getX?: () => number,

    /**
     * [Method] Gets the current position of the element based on page coordinates
     * @returns Array The XY position of the element
     */
    getXY?: () => any[],

    /**
     * [Method] Gets the current Y position of the element based on page coordinates
     * @returns Number The Y position of the element
     */
    getY?: () => number,

    /**
     * [Method] Checks if the specified CSS class exists on this element s DOM node
     * @param name String The CSS class to check for.
     * @returns Boolean true if the class exists, else false.
     */
    hasCls?: (name?: string) => boolean,

    /**
     * [Method] Hides this element
     */
    hide?: () => void,

    /**
     * [Method] Find the index of the passed element within the composite collection
     * @param el String/HTMLElement/Ext.Element/Number The id of an element, or an Ext.dom.Element, or an HtmlElement to find within the composite collection.
     * @returns Number The index of the passed Ext.dom.Element in the composite collection, or -1 if not found.
     */
    indexOf?: (el?: any) => number,

    /**
     * [Method] Inserts this element after the passed element in the DOM
     * @param el String/HTMLElement/Ext.dom.Element The element to insert after. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    insertAfter?: (el?: any) => dom$IElement,

    /**
     * [Method] Inserts this element before the passed element in the DOM
     * @param el String/HTMLElement/Ext.dom.Element The element before which this element will be inserted. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    insertBefore?: (el?: any) => dom$IElement,

    /**
     * [Method] Inserts an element as the first child of this element
     * @param element String/HTMLElement/Ext.dom.Element The id or element to insert.
     * @returns Ext.dom.Element this
     */
    insertFirst?: (element?: any) => dom$IElement,

    /**
     * [Method] Inserts an HTML fragment into this element
     * @param where String Where to insert the HTML in relation to this element - 'beforeBegin', 'afterBegin', 'beforeEnd', 'afterEnd'. See Ext.DomHelper.insertHtml for details.
     * @param html String The HTML fragment
     * @param returnEl Boolean true to return an Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The inserted node (or nearest related if more than 1 inserted).
     */
    insertHtml?: (where?: string, html?: string, returnEl?: boolean) => any,

    /**
     * [Method] Inserts or creates the passed element or DomHelper config as a sibling of this element
     * @param el String/HTMLElement/Ext.dom.Element/Object/Array The id, element to insert or a DomHelper config to create and insert or an array of any of those.
     * @param where String 'before' or 'after'.
     * @param returnDom Boolean true to return the raw DOM element instead of Ext.dom.Element.
     * @returns Ext.dom.Element The inserted Element. If an array is passed, the last inserted element is returned.
     */
    insertSibling?: (
      el?: any,
      where?: string,
      returnDom?: boolean
    ) => dom$IElement,

    /**
     * [Method] Returns true if this element matches the passed simple selector e g
     * @param selector String The simple selector to test.
     * @returns Boolean true if this element matches the selector, else false.
     */
    is?: (selector?: string) => boolean,

    /**
     * [Method] Determines if this element is a descendant of the passed in Element
     */
    isDescendent?: () => void,

    /**
     * [Method] Checks if the current value of a style is equal to a given value
     * @param style String property whose value is returned.
     * @param value String to check against.
     * @returns Boolean true for when the current value equals the given value.
     */
    isStyle?: (style?: string, value?: string) => boolean,

    /**
     * [Method] Returns true if the value of the given property is visually transparent
     * @param prop String The style property whose value is to be tested.
     * @returns Boolean true if the style property is visually transparent.
     */
    isTransparent?: (prop?: string) => boolean,

    /**
     * [Method] Returns a flyweight Element of the dom element object at the specified index
     * @param index Number
     * @returns Ext.dom.Element
     */
    item?: (index?: number) => dom$IElement,

    /**
     * [Method] Puts a mask over this element to disable user interaction
     */
    mask?: () => void,

    /**
     * [Method] Gets the next sibling skipping text nodes
     * @param selector String Find the next sibling that matches the passed simple selector.
     * @param returnDom Boolean true to return a raw dom node instead of an Ext.dom.Element.
     * @returns Ext.dom.Element/HTMLElement/null The next sibling or null.
     */
    next?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Gets the parent node for this element optionally chaining up trying to match a selector
     * @param selector String Find a parent node that matches the passed simple selector.
     * @param returnDom Boolean true to return a raw DOM node instead of an Ext.dom.Element.
     * @returns Ext.dom.Element/HTMLElement/null The parent node or null.
     */
    parent?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Gets the previous sibling skipping text nodes
     * @param selector String Find the previous sibling that matches the passed simple selector.
     * @param returnDom Boolean true to return a raw DOM node instead of an Ext.dom.Element
     * @returns Ext.dom.Element/HTMLElement/null The previous sibling or null.
     */
    prev?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Removes all listeners for this object
     */
    purgeAllListeners?: () => void,

    /**
     * [Method] Selects child nodes based on the passed CSS selector the selector should not contain an id
     * @param selector String The CSS selector.
     * @returns HTMLElement[] An array of the matched nodes.
     */
    query?: (selector?: string) => HTMLElement[],

    /**
     * [Method] Adds one or more CSS classes to this element and removes the same class es from all siblings
     * @param className String/String[] The CSS class to add, or an array of classes.
     * @returns Ext.dom.Element this
     */
    radioCls?: (className?: any) => dom$IElement,

    /**
     * [Method] Removes this element s DOM reference
     */
    remove?: () => void,

    /**
     * [Method] Removes all listeners for this object
     */
    removeAllListeners?: () => void,

    /**
     * [Method] Removes the given CSS class es from this Element
     * @param names String The CSS class(es) to remove from this element.
     * @param prefix String Prefix to prepend to each class to be removed.
     * @param suffix String Suffix to append to each class to be removed.
     * @returns Ext.dom.Element this
     */
    removeCls?: (
      names?: string,
      prefix?: string,
      suffix?: string
    ) => dom$IElement,

    /**
     * [Method] Removes the specified element s
     * @param el String/HTMLElement/Ext.Element/Number The id of an element, the Element itself, the index of the element in this composite or an array of any of those.
     * @param removeDom Boolean true to also remove the element from the document
     * @returns Ext.dom.CompositeElementLite this
     */
    removeElement?: (
      el?: any,
      removeDom?: boolean
    ) => dom$ICompositeElementLite,

    /**
     * [Method] Forces the browser to repaint this element
     * @returns Ext.dom.Element this
     */
    repaint?: () => dom$IElement,

    /**
     * [Method] Replaces the passed element with this element
     * @param element String/HTMLElement/Ext.dom.Element The element to replace. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    replace?: (element?: any) => dom$IElement,

    /**
     * [Method] Replaces a CSS class on the element with another
     * @param oldName String The CSS class to replace.
     * @param newName String The replacement CSS class.
     * @param prefix String Prefix to prepend to each class to be replaced.
     * @param suffix String Suffix to append to each class to be replaced.
     * @returns Ext.dom.Element this
     */
    replaceCls?: (
      oldName?: string,
      newName?: string,
      prefix?: string,
      suffix?: string
    ) => dom$IElement,

    /**
     * [Method] Replaces the specified element with the passed element
     * @param el String/HTMLElement/Ext.Element/Number The id of an element, the Element itself, the index of the element in this composite to replace.
     * @param replacement String/Ext.Element The id of an element or the Element itself.
     * @param domReplace Boolean true to remove and replace the element in the document too.
     * @returns Ext.dom.CompositeElementLite this
     */
    replaceElement?: (
      el?: any,
      replacement?: any,
      domReplace?: boolean
    ) => dom$ICompositeElementLite,

    /**
     * [Method] Replaces this element with the passed element
     * @param el String/HTMLElement/Ext.dom.Element/Object The new element (id of the node, a DOM Node or an existing Element) or a DomHelper config of an element to create.
     * @returns Ext.dom.Element This element.
     */
    replaceWith?: (el?: any) => dom$IElement,

    /**
     * [Method] Selects elements based on the passed CSS selector to enable Element methods to be applied to many related elements in
     * @param selector String/HTMLElement[] The CSS selector or an array of elements
     * @param composite Boolean Return a CompositeElement as opposed to a CompositeElementLite. Defaults to false.
     * @returns Ext.dom.CompositeElementLite/Ext.dom.CompositeElement
     */
    select?: (selector?: any, composite?: boolean) => dom$ICompositeElementLite,

    /**
     * [Method] Serializes a DOM form into a url encoded string
     * @param form Object The form
     * @returns String The url encoded form
     */
    serializeForm?: (form?: any) => string,

    /**
     * [Method] Sets the passed attributes as attributes of this element a style attribute can be a string object or function
     * @param attributes Object The object with the attributes.
     * @param useSet Boolean false to override the default setAttribute to use expandos.
     * @returns Ext.dom.Element this
     */
    set?: (attributes?: any, useSet?: boolean) => dom$IElement,

    /**
     * [Method] Sets the element s CSS bottom style
     * @param bottom String The bottom CSS property value.
     * @returns Ext.dom.Element this
     */
    setBottom?: (bottom?: string) => dom$IElement,

    /**
     * [Method] Sets the element s box
     * @param box Object The box to fill, for example: {  left: ...,  top: ...,  width: ...,  height: ... }
     * @returns Ext.dom.Element this
     */
    setBox?: (box?: any) => dom$IElement,

    /**
     * [Method] Sets the specified CSS class on this element s DOM node
     * @param className String/Array The CSS class to set on this element.
     */
    setCls?: (className?: any) => void,

    /**
     * [Method] Sets the innerHTML of this element
     * @param html String The new HTML.
     */
    setHTML?: (html?: string) => void,

    /**
     * [Method] Set the height of this Element
     * @param height Number/String The new height.
     * @returns Ext.dom.Element this
     */
    setHeight?: (height?: any) => dom$IElement,

    /**
     * [Method] Sets the innerHTML of this element
     * @param html String The new HTML.
     */
    setHtml?: (html?: string) => void,

    /**
     * [Method] Sets the element s left position directly using CSS style instead of setX
     * @param left String The left CSS property value.
     * @returns Ext.dom.Element this
     */
    setLeft?: (left?: string) => dom$IElement,

    /**
     * [Method] Set the maximum height of this Element
     * @param height Number/String The new maximum height.
     * @returns Ext.dom.Element this
     */
    setMaxHeight?: (height?: any) => dom$IElement,

    /**
     * [Method] Set the maximum width of this Element
     * @param width Number/String The new maximum width.
     * @returns Ext.dom.Element this
     */
    setMaxWidth?: (width?: any) => dom$IElement,

    /**
     * [Method] Set the minimum height of this Element
     * @param height Number/String The new minimum height.
     * @returns Ext.dom.Element this
     */
    setMinHeight?: (height?: any) => dom$IElement,

    /**
     * [Method] Set the minimum width of this Element
     * @param width Number/String The new minimum width.
     * @returns Ext.dom.Element this
     */
    setMinWidth?: (width?: any) => dom$IElement,

    /**
     * [Method] Sets the element s CSS right style
     * @param right String The right CSS property value.
     * @returns Ext.dom.Element this
     */
    setRight?: (right?: string) => dom$IElement,

    /**
     * [Method] Set the size of this Element
     * @param width Number/String The new width. This may be one of:  A Number specifying the new width in this Element's defaultUnits (by default, pixels). A String used to set the CSS width style. Animation may not be used. A size object in the format {width: widthValue, height: heightValue}.
     * @param height Number/String The new height. This may be one of:  A Number specifying the new height in this Element's defaultUnits (by default, pixels). A String used to set the CSS height style. Animation may not be used.
     * @returns Ext.dom.Element this
     */
    setSize?: (width?: any, height?: any) => dom$IElement,

    /**
     * [Method] Wrapper for setting style properties also takes single object parameter of multiple styles
     * @param property String/Object The style property to be set, or an object of multiple styles.
     * @param value String The value to apply to the given property, or null if an object was passed.
     * @returns Ext.dom.Element this
     */
    setStyle?: (property?: any, value?: string) => dom$IElement,

    /**
     * [Method] Sets the element s top position directly using CSS style instead of setY
     * @param top String The top CSS property value.
     * @returns Ext.dom.Element this
     */
    setTop?: (top?: string) => dom$IElement,

    /**
     * [Method] Sets the element s top and left positions directly using CSS style
     */
    setTopLeft?: () => void,

    /**
     * [Method] Use this to change the visibility mode between VISIBILITY DISPLAY or OFFSETS
     * @param mode Object
     * @returns Ext.dom.Element this
     */
    setVisibilityMode?: (mode?: any) => dom$IElement,

    /**
     * [Method] Sets the visibility of the element see details
     * @param visible Boolean Whether the element is visible.
     * @returns Ext.Element this
     */
    setVisible?: (visible?: boolean) => Ext$IElement,

    /**
     * [Method] Set the width of this Element
     * @param width Number/String The new width.
     * @returns Ext.dom.Element this
     */
    setWidth?: (width?: any) => dom$IElement,

    /**
     * [Method] Sets the X position of the element based on page coordinates
     * @param x Number The X position of the element
     * @returns Ext.dom.Element this
     */
    setX?: (x?: number) => dom$IElement,

    /**
     * [Method] Sets the position of the element in page coordinates regardless of how the element is positioned
     * @param pos Number[] Contains X &amp; Y [x, y] values for new position (coordinates are page-based).
     * @returns Ext.dom.Element this
     */
    setXY?: (pos?: number[]) => dom$IElement,

    /**
     * [Method] Sets the Y position of the element based on page coordinates
     * @param y Number The Y position of the element.
     * @returns Ext.dom.Element this
     */
    setY?: (y?: number) => dom$IElement,

    /**
     * [Method] Shows this element
     */
    show?: () => void,

    /**
     * [Method] Toggles the specified CSS class on this element removes it if it already exists otherwise adds it
     * @param className String The CSS class to toggle.
     * @returns Ext.dom.Element this
     */
    toggleCls?: (className?: string) => dom$IElement,

    /**
     * [Method] Translates the passed page coordinates into left top CSS values for this element
     * @param x Number/Array The page x or an array containing [x, y].
     * @param y Number The page y, required if x is not an array.
     * @returns Object An object with left and top properties. e.g. {left: (value), top: (value)}.
     */
    translatePoints?: (x?: any, y?: number) => any,

    /**
     * [Method] Removes a previously applied mask
     */
    unmask?: () => void,

    /**
     * [Method] Walks up the dom looking for a parent node that matches the passed simple selector e g
     * @param simpleSelector String The simple selector to test
     * @param maxDepth Number/String/HTMLElement/Ext.Element The max depth to search as a number or element (defaults to 10 || document.body).
     * @returns Ext.dom.Element/null The matching DOM node (or null if no match was found).
     */
    up?: (simpleSelector?: string, maxDepth?: any) => any,

    /**
     * [Method] Sets the innerHTML of this element
     * @param html String The new HTML.
     */
    update?: (html?: string) => void,

    /**
     * [Method] Creates and wraps this element with another element
     * @param config Object DomHelper element config object for the wrapper element or null for an empty div
     * @param domNode Boolean true to return the raw DOM element instead of Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The newly created wrapper element.
     */
    wrap?: (config?: any, domNode?: boolean) => any
  } & Ext$IBase &
    undefined.IElement;

  declare export type Ext$IElement = {
    /**
     * [Property] (Number)
     */
    DISPLAY?: number,

    /**
     * [Property] (Number)
     */
    OFFSETS?: number,

    /**
     * [Property] (Number)
     */
    VISIBILITY?: number,

    /**
     * [Property] (String)
     */
    defaultUnit?: string,

    /**
     * [Property] (HTMLElement)
     */
    dom?: HTMLElement,

    /**
     * [Property] (String)
     */
    id?: string,

    /**
     * [Method] Appends an after event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    addAfterListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Appends a before event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    addBeforeListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Adds the given CSS class es to this Element
     * @param names String The CSS class(es) to add to this element.
     * @param prefix String Prefix to prepend to each class.
     * @param suffix String Suffix to append to each class.
     * @returns Ext.dom.Element this
     */
    addCls?: (names?: string, prefix?: string, suffix?: string) => dom$IElement,

    /**
     * [Method] Adds the specified events to the list of events which this Observable may fire
     * @param eventNames Object/String... Either an object with event names as properties with a value of true or the first event name string if multiple event names are being passed as separate parameters.
     */
    addEvents?: (eventNames?: any) => void,

    /**
     * [Method] Appends an event handler to this object
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    addListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    addManagedListener?: (
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Appends the passed element s to this element
     * @param element HTMLElement/Ext.dom.Element a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    appendChild?: (element?: any) => dom$IElement,

    /**
     * [Method] Appends this element to the passed element
     * @param el String/HTMLElement/Ext.dom.Element The new parent element. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    appendTo?: (el?: any) => dom$IElement,

    /**
     * [Method] More flexible version of setStyle for setting style properties
     * @param styles String/Object/Function A style specification string, e.g. "width:100px", or object in the form {width:"100px"}, or a function which returns such a specification.
     * @returns Ext.dom.Element this
     */
    applyStyles?: (styles?: any) => dom$IElement,

    /**
     * [Method] Selects a single direct child based on the passed CSS selector the selector should not contain an id
     * @param selector String The CSS selector.
     * @param returnDom Boolean true to return the DOM node instead of Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The child Ext.dom.Element (or DOM node if returnDom is true)
     */
    child?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Removes all listeners for this object
     */
    clearListeners?: () => void,

    /**
     * [Method] Returns true if this element is an ancestor of the passed element
     * @param element HTMLElement/String The element to check.
     * @returns Boolean true if this element is an ancestor of el, else false.
     */
    contains?: (element?: any) => boolean,

    /**
     * [Method] Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child e
     * @param config Object DomHelper element config object. If no tag is specified (e.g., {tag:'input'}) then a div will be automatically generated with the specified attributes.
     * @param insertBefore HTMLElement a child element of this element.
     * @param returnDom Boolean true to return the dom node instead of creating an Element.
     * @returns Ext.dom.Element The new child element.
     */
    createChild?: (
      config?: any,
      insertBefore?: HTMLElement,
      returnDom?: boolean
    ) => dom$IElement,

    /**
     * [Method] Translates an element using CSS 3 in 2D
     */
    cssTranslate?: () => void,

    /**
     * [Method] Removes this element s DOM reference
     */
    destroy?: () => void,

    /**
     * [Method] Selects a single child at any depth below this element based on the passed CSS selector the selector should not cont
     * @param selector String The CSS selector.
     * @param returnDom Boolean true to return the DOM node instead of Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The child Ext.dom.Element (or DOM node if returnDom is true).
     */
    down?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Enables events fired by this Observable to bubble up an owner hierarchy by calling this getBubbleTarget  if present
     * @param events String/String[] The event name to bubble, or an Array of event names.
     */
    enableBubble?: (events?: any) => void,

    /**
     * [Method] Looks at this node and then at parent nodes for a match of the passed simple selector e g
     * @param simpleSelector String The simple selector to test.
     * @param maxDepth Number/String/HTMLElement/Ext.Element The max depth to search as a number or element (defaults to 50 || document.body)
     * @param returnEl Boolean true to return a Ext.Element object instead of DOM node.
     * @returns HTMLElement/null The matching DOM node (or null if no match was found).
     */
    findParent?: (
      simpleSelector?: string,
      maxDepth?: any,
      returnEl?: boolean
    ) => any,

    /**
     * [Method] Looks at parent nodes for a match of the passed simple selector e g
     * @param simpleSelector String The simple selector to test.
     * @param maxDepth Number/String/HTMLElement/Ext.Element The max depth to search as a number or element (defaults to 10 || document.body).
     * @param returnEl Boolean true to return a Ext.Element object instead of DOM node.
     * @returns HTMLElement/null The matching DOM node (or null if no match was found).
     */
    findParentNode?: (
      simpleSelector?: string,
      maxDepth?: any,
      returnEl?: boolean
    ) => any,

    /**
     * [Method] Fires the specified event with the passed parameters and execute a function action at the end if there are no liste
     * @param eventName String The name of the event to fire.
     * @param args Array Arguments to pass to handers.
     * @param fn Function Action.
     * @param scope Object Scope of fn.
     * @returns Object
     */
    fireAction?: (
      eventName?: string,
      args?: any[],
      fn?: any,
      scope?: any
    ) => any,

    /**
     * [Method] Fires the specified event with the passed parameters minus the event name plus the options object passed to addList
     * @param eventName String The name of the event to fire.
     * @param args Object... Variable number of parameters are passed to handlers.
     * @returns Boolean Returns false if any of the handlers return false.
     */
    fireEvent?: (eventName: string, ...args: any[]) => boolean,

    /**
     * [Method] Gets the first child skipping text nodes
     * @param selector String Find the next sibling that matches the passed simple selector.
     * @param returnDom Boolean true to return a raw DOM node instead of an Ext.dom.Element.
     * @returns Ext.dom.Element/HTMLElement/null The first child or null.
     */
    first?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Gets the x y coordinates to align this element with another element
     * @param element Mixed The element to align to.
     * @param position String The position to align to.
     * @param offsets Array Offset the positioning by [x, y].
     * @returns Array [x, y]
     */
    getAlignToXY?: (element?: any, position?: string, offsets?: any[]) => any[],

    /**
     * [Method] Gets the x y coordinates specified by the anchor position on the element
     * @param anchor String The specified anchor position.
     * @param local Boolean true to get the local (element top/left-relative) anchor position instead of page coordinates.
     * @param size Object An object containing the size to use for calculating anchor position. {width: (target width), height: (target height)} (defaults to the element's current size)
     * @returns Array [x, y] An array containing the element's x and y coordinates.
     */
    getAnchorXY?: (anchor?: string, local?: boolean, size?: any) => any[],

    /**
     * [Method] Returns the value of an attribute from the element s underlying DOM node
     * @param name String The attribute name.
     * @param namespace String The namespace in which to look for the attribute.
     * @returns String The attribute value.
     */
    getAttribute?: (name?: string, namespace?: string) => string,

    /**
     * [Method] Gets the width of the border s for the specified side s
     * @param side String Can be t, l, r, b or any combination of those to add multiple values. For example, passing 'lr' would get the border left width + the border right width.
     * @returns Number The width of the sides passed added together
     */
    getBorderWidth?: (side?: string) => number,

    /**
     * [Method] Gets the bottom Y coordinate of the element element Y position  element height
     * @returns Number
     */
    getBottom?: () => number,

    /**
     * [Method] Return an object defining the area of this Element which can be passed to setBox to set another Element s size locati
     * @param contentBox Boolean If true a box for the content of the element is returned.
     * @param local Boolean If true the element's left and top are returned instead of page x/y.
     * @returns Object An object in the format
     */
    getBox?: (contentBox?: boolean, local?: boolean) => any,

    /**
     * [Method] Returns the value of bubbleEvents
     * @returns String/String[]
     */
    getBubbleEvents?: () => any,

    /**
     * [Method] Returns the innerHTML of an element
     * @returns String
     */
    getHTML?: () => string,

    /**
     * [Method] Returns the offset height of the element
     * @param contentHeight Boolean true to get the height minus borders and padding.
     * @returns Number The element's height.
     */
    getHeight?: (contentHeight?: boolean) => number,

    /**
     * [Method] Returns the innerHTML of an element
     * @returns String
     */
    getHtml?: () => string,

    /**
     * [Method] Gets the left X coordinate
     * @returns Number
     */
    getLeft?: () => number,

    /**
     * [Method] Returns the value of listeners
     * @returns Object
     */
    getListeners?: () => any,

    /**
     * [Method] Returns an object with properties top left right and bottom representing the margins of this element unless sides i
     * @param sides String Any combination of 'l', 'r', 't', 'b' to get the sum of those sides.
     * @returns Object/Number
     */
    getMargin?: (sides?: string) => any,

    /**
     * [Method] Returns the offsets of this element from the passed element
     * @param element Mixed The element to get the offsets from.
     * @returns Array The XY page offsets (e.g. [100, -200])
     */
    getOffsetsTo?: (element?: any) => any[],

    /**
     * [Method] Retrieves the height of the element account for the top and bottom margins
     */
    getOuterHeight?: () => void,

    /**
     * [Method] Retrieves the width of the element accounting for the left and right margins
     */
    getOuterWidth?: () => void,

    /**
     * [Method] Gets the width of the padding s for the specified side s
     * @param side String Can be t, l, r, b or any combination of those to add multiple values. For example, passing 'lr' would get the padding left + the padding right.
     * @returns Number The padding of the sides passed added together.
     */
    getPadding?: (side?: string) => number,

    /**
     * [Method] Return an object defining the area of this Element which can be passed to setBox to set another Element s size locati
     * @param asRegion Boolean If true an Ext.util.Region will be returned.
     * @returns Object box An object in the format: {  x: &lt;Element's X position&gt;,  y: &lt;Element's Y position&gt;,  width: &lt;Element's width&gt;,  height: &lt;Element's height&gt;,  bottom: &lt;Element's lower bound&gt;,  right: &lt;Element's rightmost bound&gt; }  The returned object may also be addressed as an Array where index 0 contains the X position and index 1 contains the Y position. So the result may also be used for setXY.
     */
    getPageBox?: (asRegion?: boolean) => any,

    /**
     * [Method] Gets the right X coordinate of the element element X position  element width
     * @returns Number
     */
    getRight?: () => number,

    /**
     * [Method] Gets the Scroller instance of the first parent that has one
     */
    getScrollParent?: () => void,

    /**
     * [Method] Returns the size of the element
     * @param contentSize Boolean true to get the width/size minus borders and padding.
     * @returns Object An object containing the element's size:
     */
    getSize?: (contentSize?: boolean) => any,

    /**
     * [Method] Normalizes currentStyle and computedStyle
     * @param prop String The style property whose value is returned.
     * @returns String The current value of the style property for this element.
     */
    getStyle?: (prop?: string) => string,

    /**
     * [Method] Gets the top Y coordinate
     * @returns Number
     */
    getTop?: () => number,

    /**
     * [Method] Returns the value of the value attribute
     * @param asNumber Boolean true to parse the value as a number.
     * @returns String/Number
     */
    getValue?: (asNumber?: boolean) => any,

    /**
     * [Method] Returns the dimensions of the element available to lay content out in
     * @returns Object Object describing width and height:
     */
    getViewSize?: () => any,

    /**
     * [Method] Returns the offset width of the element
     * @param contentWidth Boolean true to get the width minus borders and padding.
     * @returns Number The element's width.
     */
    getWidth?: (contentWidth?: boolean) => number,

    /**
     * [Method] Gets the current X position of the element based on page coordinates
     * @returns Number The X position of the element
     */
    getX?: () => number,

    /**
     * [Method] Gets the current position of the element based on page coordinates
     * @returns Array The XY position of the element
     */
    getXY?: () => any[],

    /**
     * [Method] Gets the current Y position of the element based on page coordinates
     * @returns Number The Y position of the element
     */
    getY?: () => number,

    /**
     * [Method] Checks if the specified CSS class exists on this element s DOM node
     * @param name String The CSS class to check for.
     * @returns Boolean true if the class exists, else false.
     */
    hasCls?: (name?: string) => boolean,

    /**
     * [Method] Checks to see if this object has any listeners for a specified event
     * @param eventName String The name of the event to check for
     * @returns Boolean True if the event is being listened for, else false
     */
    hasListener?: (eventName?: string) => boolean,

    /**
     * [Method] Hides this element
     */
    hide?: () => void,

    /**
     * [Method] Inserts this element after the passed element in the DOM
     * @param el String/HTMLElement/Ext.dom.Element The element to insert after. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    insertAfter?: (el?: any) => dom$IElement,

    /**
     * [Method] Inserts this element before the passed element in the DOM
     * @param el String/HTMLElement/Ext.dom.Element The element before which this element will be inserted. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    insertBefore?: (el?: any) => dom$IElement,

    /**
     * [Method] Inserts an element as the first child of this element
     * @param element String/HTMLElement/Ext.dom.Element The id or element to insert.
     * @returns Ext.dom.Element this
     */
    insertFirst?: (element?: any) => dom$IElement,

    /**
     * [Method] Inserts an HTML fragment into this element
     * @param where String Where to insert the HTML in relation to this element - 'beforeBegin', 'afterBegin', 'beforeEnd', 'afterEnd'. See Ext.DomHelper.insertHtml for details.
     * @param html String The HTML fragment
     * @param returnEl Boolean true to return an Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The inserted node (or nearest related if more than 1 inserted).
     */
    insertHtml?: (where?: string, html?: string, returnEl?: boolean) => any,

    /**
     * [Method] Inserts or creates the passed element or DomHelper config as a sibling of this element
     * @param el String/HTMLElement/Ext.dom.Element/Object/Array The id, element to insert or a DomHelper config to create and insert or an array of any of those.
     * @param where String 'before' or 'after'.
     * @param returnDom Boolean true to return the raw DOM element instead of Ext.dom.Element.
     * @returns Ext.dom.Element The inserted Element. If an array is passed, the last inserted element is returned.
     */
    insertSibling?: (
      el?: any,
      where?: string,
      returnDom?: boolean
    ) => dom$IElement,

    /**
     * [Method] Returns true if this element matches the passed simple selector e g
     * @param selector String The simple selector to test.
     * @returns Boolean true if this element matches the selector, else false.
     */
    is?: (selector?: string) => boolean,

    /**
     * [Method] Determines if this element is a descendant of the passed in Element
     */
    isDescendent?: () => void,

    /**
     * [Method] Checks if the current value of a style is equal to a given value
     * @param style String property whose value is returned.
     * @param value String to check against.
     * @returns Boolean true for when the current value equals the given value.
     */
    isStyle?: (style?: string, value?: string) => boolean,

    /**
     * [Method] Returns true if the value of the given property is visually transparent
     * @param prop String The style property whose value is to be tested.
     * @returns Boolean true if the style property is visually transparent.
     */
    isTransparent?: (prop?: string) => boolean,

    /**
     * [Method] Gets the last child skipping text nodes
     * @param selector String Find the previous sibling that matches the passed simple selector.
     * @param returnDom Boolean true to return a raw DOM node instead of an Ext.dom.Element.
     * @returns Ext.dom.Element/HTMLElement/null The last child or null.
     */
    last?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Puts a mask over this element to disable user interaction
     */
    mask?: () => void,

    /**
     * [Method] Alias for addManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    mon?: (
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Alias for removeManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    mun?: (object?: any, eventName?: any, fn?: any, scope?: any) => void,

    /**
     * [Method] Gets the next sibling skipping text nodes
     * @param selector String Find the next sibling that matches the passed simple selector.
     * @param returnDom Boolean true to return a raw dom node instead of an Ext.dom.Element.
     * @returns Ext.dom.Element/HTMLElement/null The next sibling or null.
     */
    next?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Alias for addListener
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    on?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Alias for addAfterListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    onAfter?: (eventName?: any, fn?: any, scope?: any, options?: any) => void,

    /**
     * [Method] Alias for addBeforeListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    onBefore?: (eventName?: any, fn?: any, scope?: any, options?: any) => void,

    /**
     * [Method] Gets the parent node for this element optionally chaining up trying to match a selector
     * @param selector String Find a parent node that matches the passed simple selector.
     * @param returnDom Boolean true to return a raw DOM node instead of an Ext.dom.Element.
     * @returns Ext.dom.Element/HTMLElement/null The parent node or null.
     */
    parent?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Gets the previous sibling skipping text nodes
     * @param selector String Find the previous sibling that matches the passed simple selector.
     * @param returnDom Boolean true to return a raw DOM node instead of an Ext.dom.Element
     * @returns Ext.dom.Element/HTMLElement/null The previous sibling or null.
     */
    prev?: (selector?: string, returnDom?: boolean) => any,

    /**
     * [Method] Removes all listeners for this object
     */
    purgeAllListeners?: () => void,

    /**
     * [Method] Selects child nodes based on the passed CSS selector the selector should not contain an id
     * @param selector String The CSS selector.
     * @returns HTMLElement[] An array of the matched nodes.
     */
    query?: (selector?: string) => HTMLElement[],

    /**
     * [Method] Adds one or more CSS classes to this element and removes the same class es from all siblings
     * @param className String/String[] The CSS class to add, or an array of classes.
     * @returns Ext.dom.Element this
     */
    radioCls?: (className?: any) => dom$IElement,

    /**
     * [Method] Relays selected events from the specified Observable as if the events were fired by this
     * @param object Object The Observable whose events this object is to relay.
     * @param events String/Array/Object Array of event names to relay.
     * @returns Ext.mixin.Observable this
     */
    relayEvents?: (object?: any, events?: any) => Ext$mixin$IObservable,

    /**
     * [Method] Removes this element s DOM reference
     */
    remove?: () => void,

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    removeAfterListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Removes all listeners for this object
     */
    removeAllListeners?: () => void,

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    removeBeforeListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Removes the given CSS class es from this Element
     * @param names String The CSS class(es) to remove from this element.
     * @param prefix String Prefix to prepend to each class to be removed.
     * @param suffix String Suffix to append to each class to be removed.
     * @returns Ext.dom.Element this
     */
    removeCls?: (
      names?: string,
      prefix?: string,
      suffix?: string
    ) => dom$IElement,

    /**
     * [Method] Removes an event handler
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    removeListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    removeManagedListener?: (
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any
    ) => void,

    /**
     * [Method] Forces the browser to repaint this element
     * @returns Ext.dom.Element this
     */
    repaint?: () => dom$IElement,

    /**
     * [Method] Replaces the passed element with this element
     * @param element String/HTMLElement/Ext.dom.Element The element to replace. The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element This element.
     */
    replace?: (element?: any) => dom$IElement,

    /**
     * [Method] Replaces a CSS class on the element with another
     * @param oldName String The CSS class to replace.
     * @param newName String The replacement CSS class.
     * @param prefix String Prefix to prepend to each class to be replaced.
     * @param suffix String Suffix to append to each class to be replaced.
     * @returns Ext.dom.Element this
     */
    replaceCls?: (
      oldName?: string,
      newName?: string,
      prefix?: string,
      suffix?: string
    ) => dom$IElement,

    /**
     * [Method] Replaces this element with the passed element
     * @param el String/HTMLElement/Ext.dom.Element/Object The new element (id of the node, a DOM Node or an existing Element) or a DomHelper config of an element to create.
     * @returns Ext.dom.Element This element.
     */
    replaceWith?: (el?: any) => dom$IElement,

    /**
     * [Method] Resumes firing events see suspendEvents
     * @param discardQueuedEvents Boolean Pass as true to discard any queued events.
     */
    resumeEvents?: (discardQueuedEvents?: boolean) => void,

    /**
     * [Method] Serializes a DOM form into a url encoded string
     * @param form Object The form
     * @returns String The url encoded form
     */
    serializeForm?: (form?: any) => string,

    /**
     * [Method] Sets the passed attributes as attributes of this element a style attribute can be a string object or function
     * @param attributes Object The object with the attributes.
     * @param useSet Boolean false to override the default setAttribute to use expandos.
     * @returns Ext.dom.Element this
     */
    set?: (attributes?: any, useSet?: boolean) => dom$IElement,

    /**
     * [Method] Sets the element s CSS bottom style
     * @param bottom String The bottom CSS property value.
     * @returns Ext.dom.Element this
     */
    setBottom?: (bottom?: string) => dom$IElement,

    /**
     * [Method] Sets the element s box
     * @param box Object The box to fill, for example: {  left: ...,  top: ...,  width: ...,  height: ... }
     * @returns Ext.dom.Element this
     */
    setBox?: (box?: any) => dom$IElement,

    /**
     * [Method] Sets the value of bubbleEvents
     * @param bubbleEvents String/String[] The new value.
     */
    setBubbleEvents?: (bubbleEvents?: any) => void,

    /**
     * [Method] Sets the specified CSS class on this element s DOM node
     * @param className String/Array The CSS class to set on this element.
     */
    setCls?: (className?: any) => void,

    /**
     * [Method] Sets the innerHTML of this element
     * @param html String The new HTML.
     */
    setHTML?: (html?: string) => void,

    /**
     * [Method] Set the height of this Element
     * @param height Number/String The new height.
     * @returns Ext.dom.Element this
     */
    setHeight?: (height?: any) => dom$IElement,

    /**
     * [Method] Sets the innerHTML of this element
     * @param html String The new HTML.
     */
    setHtml?: (html?: string) => void,

    /**
     * [Method] Sets the element s left position directly using CSS style instead of setX
     * @param left String The left CSS property value.
     * @returns Ext.dom.Element this
     */
    setLeft?: (left?: string) => dom$IElement,

    /**
     * [Method] Sets the value of listeners
     * @param listeners Object The new value.
     */
    setListeners?: (listeners?: any) => void,

    /**
     * [Method] Set the maximum height of this Element
     * @param height Number/String The new maximum height.
     * @returns Ext.dom.Element this
     */
    setMaxHeight?: (height?: any) => dom$IElement,

    /**
     * [Method] Set the maximum width of this Element
     * @param width Number/String The new maximum width.
     * @returns Ext.dom.Element this
     */
    setMaxWidth?: (width?: any) => dom$IElement,

    /**
     * [Method] Set the minimum height of this Element
     * @param height Number/String The new minimum height.
     * @returns Ext.dom.Element this
     */
    setMinHeight?: (height?: any) => dom$IElement,

    /**
     * [Method] Set the minimum width of this Element
     * @param width Number/String The new minimum width.
     * @returns Ext.dom.Element this
     */
    setMinWidth?: (width?: any) => dom$IElement,

    /**
     * [Method] Sets the element s CSS right style
     * @param right String The right CSS property value.
     * @returns Ext.dom.Element this
     */
    setRight?: (right?: string) => dom$IElement,

    /**
     * [Method] Set the size of this Element
     * @param width Number/String The new width. This may be one of:  A Number specifying the new width in this Element's defaultUnits (by default, pixels). A String used to set the CSS width style. Animation may not be used. A size object in the format {width: widthValue, height: heightValue}.
     * @param height Number/String The new height. This may be one of:  A Number specifying the new height in this Element's defaultUnits (by default, pixels). A String used to set the CSS height style. Animation may not be used.
     * @returns Ext.dom.Element this
     */
    setSize?: (width?: any, height?: any) => dom$IElement,

    /**
     * [Method] Wrapper for setting style properties also takes single object parameter of multiple styles
     * @param property String/Object The style property to be set, or an object of multiple styles.
     * @param value String The value to apply to the given property, or null if an object was passed.
     * @returns Ext.dom.Element this
     */
    setStyle?: (property?: any, value?: string) => dom$IElement,

    /**
     * [Method] Sets the element s top position directly using CSS style instead of setY
     * @param top String The top CSS property value.
     * @returns Ext.dom.Element this
     */
    setTop?: (top?: string) => dom$IElement,

    /**
     * [Method] Sets the element s top and left positions directly using CSS style
     */
    setTopLeft?: () => void,

    /**
     * [Method] Use this to change the visibility mode between VISIBILITY DISPLAY or OFFSETS
     * @param mode Object
     * @returns Ext.dom.Element this
     */
    setVisibilityMode?: (mode?: any) => dom$IElement,

    /**
     * [Method] Sets the visibility of the element see details
     * @param visible Boolean Whether the element is visible.
     * @returns Ext.Element this
     */
    setVisible?: (visible?: boolean) => Ext$IElement,

    /**
     * [Method] Set the width of this Element
     * @param width Number/String The new width.
     * @returns Ext.dom.Element this
     */
    setWidth?: (width?: any) => dom$IElement,

    /**
     * [Method] Sets the X position of the element based on page coordinates
     * @param x Number The X position of the element
     * @returns Ext.dom.Element this
     */
    setX?: (x?: number) => dom$IElement,

    /**
     * [Method] Sets the position of the element in page coordinates regardless of how the element is positioned
     * @param pos Number[] Contains X &amp; Y [x, y] values for new position (coordinates are page-based).
     * @returns Ext.dom.Element this
     */
    setXY?: (pos?: number[]) => dom$IElement,

    /**
     * [Method] Sets the Y position of the element based on page coordinates
     * @param y Number The Y position of the element.
     * @returns Ext.dom.Element this
     */
    setY?: (y?: number) => dom$IElement,

    /**
     * [Method] Shows this element
     */
    show?: () => void,

    /**
     * [Method] Suspends the firing of all events
     */
    suspendEvents?: () => void,

    /**
     * [Method] Toggles the specified CSS class on this element removes it if it already exists otherwise adds it
     * @param className String The CSS class to toggle.
     * @returns Ext.dom.Element this
     */
    toggleCls?: (className?: string) => dom$IElement,

    /**
     * [Method] Translates the passed page coordinates into left top CSS values for this element
     * @param x Number/Array The page x or an array containing [x, y].
     * @param y Number The page y, required if x is not an array.
     * @returns Object An object with left and top properties. e.g. {left: (value), top: (value)}.
     */
    translatePoints?: (x?: any, y?: number) => any,

    /**
     * [Method] Alias for removeListener
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    un?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Alias for removeAfterListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    unAfter?: (eventName?: any, fn?: any, scope?: any, options?: any) => void,

    /**
     * [Method] Alias for removeBeforeListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    unBefore?: (eventName?: any, fn?: any, scope?: any, options?: any) => void,

    /**
     * [Method] Removes a previously applied mask
     */
    unmask?: () => void,

    /**
     * [Method] Walks up the dom looking for a parent node that matches the passed simple selector e g
     * @param simpleSelector String The simple selector to test
     * @param maxDepth Number/String/HTMLElement/Ext.Element The max depth to search as a number or element (defaults to 10 || document.body).
     * @returns Ext.dom.Element/null The matching DOM node (or null if no match was found).
     */
    up?: (simpleSelector?: string, maxDepth?: any) => any,

    /**
     * [Method] Sets the innerHTML of this element
     * @param html String The new HTML.
     */
    update?: (html?: string) => void,

    /**
     * [Method] Creates and wraps this element with another element
     * @param config Object DomHelper element config object for the wrapper element or null for an empty div
     * @param domNode Boolean true to return the raw DOM element instead of Ext.dom.Element.
     * @returns HTMLElement/Ext.dom.Element The newly created wrapper element.
     */
    wrap?: (config?: any, domNode?: boolean) => any
  } & Ext$IBase &
    undefined.IObservable;

  declare export class Ext$Element {
    /**
     * [Method] Add methods  properties to the prototype of this class
     * @param members Object
     */
    static addMembers(members?: any): void;

    /**
     * [Method] Add  override static properties of this class
     * @param members Object
     * @returns Ext.Base this
     */
    static addStatics(members?: any): Ext$IBase;

    /**
     * [Method]
     * @param args Object
     */
    static callParent(args?: any): void;

    /**
     * [Method] Create aliases for existing prototype methods
     * @param alias String/Object The new method name, or an object to set multiple aliases. See flexSetter
     * @param origin String/Object The original method name
     */
    static createAlias(alias?: any, origin?: any): void;

    /**
     * [Method] Gets the globally shared flyweight Element with the passed node as the active element
     * @param element String/HTMLElement The DOM node or id.
     * @param named String Allows for creation of named reusable flyweights to prevent conflicts (e.g. internally Ext uses "_global").
     * @returns Ext.dom.Element The shared Element object (or null if no matching element was found).
     */
    static fly(element?: any, named?: string): dom$IElement;

    /**
     * [Method] Returns the top Element that is located at the passed coordinates
     * @param x Number The x coordinate
     * @param y Number The y coordinate
     * @returns String The found Element
     */
    static fromPoint(x?: number, y?: number): string;

    /**
     * [Method] Retrieves Ext dom Element objects
     * @param element String/HTMLElement/Ext.Element The id of the node, a DOM Node or an existing Element.
     * @returns Ext.dom.Element The Element object (or null if no matching element was found).
     */
    static get(element?: any): dom$IElement;

    /**
     * [Method] Retrieves the document height
     * @returns Number documentHeight
     */
    static getDocumentHeight(): number;

    /**
     * [Method] Retrieves the document width
     * @returns Number documentWidth
     */
    static getDocumentWidth(): number;

    /**
     * [Method] Get the current class name in string format
     * @returns String className
     */
    static getName(): string;

    /**
     * [Method] Retrieves the current orientation of the window
     * @returns String Orientation of window: 'portrait' or 'landscape'
     */
    static getOrientation(): string;

    /**
     * [Method] Retrieves the viewport size of the window
     * @returns Object object containing width and height properties
     */
    static getViewSize(): any;

    /**
     * [Method] Retrieves the viewport height of the window
     * @returns Number viewportHeight
     */
    static getViewportHeight(): number;

    /**
     * [Method] Retrieves the viewport width of the window
     * @returns Number viewportWidth
     */
    static getViewportWidth(): number;

    /**
     * [Method] Normalizes CSS property keys from dash delimited to camel case JavaScript Syntax
     * @param prop String The property to normalize
     * @returns String The normalized string
     */
    static normalize(prop?: string): string;

    /**
     * [Method] Override members of this class
     * @param members Object The properties to add to this class. This should be specified as an object literal containing one or more properties.
     * @returns Ext.Base this class
     */
    static override(members?: any): Ext$IBase;

    /**
     * [Method] Parses a number or string representing margin sizes into an object
     * @param box Number/String The encoded margins
     * @returns Object An object with margin sizes for top, right, bottom and left containing the unit
     */
    static parseBox(box?: any): any;

    /**
     * [Method] Converts a CSS string into an object with a property for each style
     * @param styles String A CSS string
     * @returns Object styles
     */
    static parseStyles(styles?: string): any;

    /**
     * [Method] Selects elements based on the passed CSS selector to enable Element methods to be applied to many related elements in
     * @param selector String/HTMLElement[] The CSS selector or an array of elements
     * @param composite Boolean Return a CompositeElement as opposed to a CompositeElementLite. Defaults to false.
     * @param root HTMLElement/String The root element of the query or id of the root
     * @returns Ext.dom.CompositeElementLite/Ext.dom.CompositeElement
     */
    static select(
      selector?: any,
      composite?: boolean,
      root?: any
    ): dom$ICompositeElementLite;

    /**
     * [Method] Serializes a DOM form into a url encoded string
     * @param form Object The form
     * @returns String The url encoded form
     */
    static serializeForm(form?: any): string;

    /**
     * [Method] Serializes a DOM element and its children recursively into a string
     * @param node Object DOM element to serialize.
     * @returns String
     */
    static serializeNode(node?: any): string;

    /**
     * [Method] Parses a number or string representing margin sizes into an object
     * @param box Number/String The encoded margins
     * @param units String The type of units to add
     * @returns String An string with unitized (px if units is not specified) metrics for top, right, bottom and left
     */
    static unitizeBox(box?: any, units?: string): string;
  }

  declare export interface Ext$IDomHelper {
    /**
     * [Method] Creates new DOM element s and appends them to el
     * @param el String/HTMLElement/Ext.Element The context element
     * @param o Object/String The DOM object spec (and children) or raw HTML blob
     * @param returnElement Boolean true to return a Ext.Element
     * @returns HTMLElement/Ext.Element The new node
     */
    append?: (el?: any, o?: any, returnElement?: boolean) => any;

    /**
     * [Method] Applies a style specification to an element
     * @param el String/HTMLElement The element to apply styles to
     * @param styles String/Object/Function A style specification string e.g. 'width:100px', or object in the form {width:'100px'}, or a function which returns such a specification.
     */
    applyStyles?: (el?: any, styles?: any) => void;

    /**
     * [Method] Creates a new Ext Template from the DOM object spec
     * @param o Object The DOM object spec (and children)
     * @returns Ext.Template The new template
     */
    createTemplate?: (o?: any) => Ext$ITemplate;

    /**
     * [Method] Converts the styles from the given object to text
     * @param styles Object The object describing the styles.
     * @param buffer String[] The output buffer.
     * @returns String/String[] If buffer is passed, it is returned. Otherwise the style string is returned.
     */
    generateStyles?: (styles?: any, buffer?: string[]) => any;

    /**
     * [Method] Creates new DOM element s and inserts them after el
     * @param el String/HTMLElement/Ext.Element The context element
     * @param o Object The DOM object spec (and children)
     * @param returnElement Boolean true to return a Ext.Element
     * @returns HTMLElement/Ext.Element The new node
     */
    insertAfter?: (el?: any, o?: any, returnElement?: boolean) => any;

    /**
     * [Method] Creates new DOM element s and inserts them before el
     * @param el String/HTMLElement/Ext.Element The context element
     * @param o Object/String The DOM object spec (and children) or raw HTML blob
     * @param returnElement Boolean true to return a Ext.Element
     * @returns HTMLElement/Ext.Element The new node
     */
    insertBefore?: (el?: any, o?: any, returnElement?: boolean) => any;

    /**
     * [Method] Creates new DOM element s and inserts them as the first child of el
     * @param el String/HTMLElement/Ext.Element The context element
     * @param o Object/String The DOM object spec (and children) or raw HTML blob
     * @param returnElement Boolean true to return a Ext.Element
     * @returns HTMLElement/Ext.Element The new node
     */
    insertFirst?: (el?: any, o?: any, returnElement?: boolean) => any;

    /**
     * [Method] Inserts an HTML fragment into the DOM
     * @param where String Where to insert the html in relation to el - beforeBegin, afterBegin, beforeEnd, afterEnd. For example take the following HTML: &lt;div&gt;Contents&lt;/div&gt; Using different where values inserts element to the following places:  beforeBegin: &lt;HERE&gt;&lt;div&gt;Contents&lt;/div&gt; afterBegin: &lt;div&gt;&lt;HERE&gt;Contents&lt;/div&gt; beforeEnd: &lt;div&gt;Contents&lt;HERE&gt;&lt;/div&gt; afterEnd: &lt;div&gt;Contents&lt;/div&gt;&lt;HERE&gt;
     * @param el HTMLElement/TextNode The context element
     * @param html String The HTML fragment
     * @returns HTMLElement The new node
     */
    insertHtml?: (where?: string, el?: any, html?: string) => HTMLElement;

    /**
     * [Method] Returns the markup for the passed Element s config
     * @param spec Object The DOM object spec (and children).
     * @returns String
     */
    markup?: (spec?: any) => string;

    /**
     * [Method] Creates new DOM element s and overwrites the contents of el with them
     * @param el String/HTMLElement/Ext.Element The context element
     * @param o Object/String The DOM object spec (and children) or raw HTML blob
     * @param returnElement Boolean true to return a Ext.Element
     * @returns HTMLElement/Ext.Element The new node
     */
    overwrite?: (el?: any, o?: any, returnElement?: boolean) => any;
  }

  declare export type Ext$IDomQuery = {} & undefined.IQuery;

  declare export class Ext$DomQuery {
    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Returns true if the passed element s match the passed simple selector e g
     * @param el String/HTMLElement/Array An element id, element or array of elements
     * @param selector String The simple selector to test
     * @returns Boolean
     */
    static is(el?: any, selector?: string): boolean;

    /**
     * [Method] Selects a group of elements
     * @param selector String The selector/xpath query (can be a comma separated list of selectors)
     * @param root HTMLElement/String The start of the query (defaults to document).
     * @returns HTMLElement[] An Array of DOM elements which match the selector. If there are no matches, and empty Array is returned.
     */
    static select(selector?: string, root?: any): HTMLElement[];

    /**
     * [Method] Selects a single element
     * @param selector String The selector/xpath query
     * @param root HTMLElement/String The start of the query (defaults to document).
     * @returns HTMLElement The DOM element which matched the selector.
     */
    static selectNode(selector?: string, root?: any): HTMLElement;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;
  }

  declare var npm$namespace$Ext$core: {
    DomQuery: typeof Ext$core$DomQuery
  };
  declare export type Ext$core$IDomQuery = {} & undefined.IQuery;

  declare export class Ext$core$DomQuery {
    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Returns true if the passed element s match the passed simple selector e g
     * @param el String/HTMLElement/Array An element id, element or array of elements
     * @param selector String The simple selector to test
     * @returns Boolean
     */
    static is(el?: any, selector?: string): boolean;

    /**
     * [Method] Selects a group of elements
     * @param selector String The selector/xpath query (can be a comma separated list of selectors)
     * @param root HTMLElement/String The start of the query (defaults to document).
     * @returns HTMLElement[] An Array of DOM elements which match the selector. If there are no matches, and empty Array is returned.
     */
    static select(selector?: string, root?: any): HTMLElement[];

    /**
     * [Method] Selects a single element
     * @param selector String The selector/xpath query
     * @param root HTMLElement/String The start of the query (defaults to document).
     * @returns HTMLElement The DOM element which matched the selector.
     */
    static selectNode(selector?: string, root?: any): HTMLElement;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;
  }

  declare var npm$namespace$Ext$draw: {
    TimingFunctions: typeof Ext$draw$TimingFunctions
  };
  declare export type Ext$draw$ITimingFunctions = {} & Ext$IBase;

  declare export class Ext$draw$TimingFunctions {
    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;
  }

  declare export type Ext$env$IOS = {
    /**
     * [Property] (String)
     */
    name?: string,

    /**
     * [Property] (Ext.Version)
     */
    version?: Ext$IVersion,

    /**
     * [Method] A hybrid property can be either accessed as a method call i e  if Ext os is Android
     * @param value String The OS name to check.
     * @returns Boolean
     */
    is?: (value?: string) => boolean
  } & Ext$IBase;

  declare export type Ext$event$ITouch = {} & undefined.IDom;

  declare export type Ext$IEventObject = {
    /**
     * [Property] (Number)
     */
    angle?: number,

    /**
     * [Property] (Number)
     */
    direction?: number,

    /**
     * [Property] (Number)
     */
    duration?: number,

    /**
     * [Property] (Number)
     */
    rotation?: number,

    /**
     * [Property] (Number)
     */
    scale?: number,

    /**
     * [Method] Stop the event preventDefault and stopPropagation
     * @returns Ext.event.Event this
     */
    stopEvent?: () => Ext$event$IEvent,

    /**
     * [Method] Cancels bubbling of the event
     * @returns Ext.event.Event this
     */
    stopPropagation?: () => Ext$event$IEvent
  } & Ext$IBase &
    undefined.ITouch;

  declare export type Ext$IEvented = {
    /**
     * [Method] Appends an after event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    addAfterListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Appends a before event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    addBeforeListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Adds the specified events to the list of events which this Observable may fire
     * @param eventNames Object/String... Either an object with event names as properties with a value of true or the first event name string if multiple event names are being passed as separate parameters.
     */
    addEvents?: (eventNames?: any) => void,

    /**
     * [Method] Appends an event handler to this object
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    addListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    addManagedListener?: (
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Removes all listeners for this object
     */
    clearListeners?: () => void,

    /**
     * [Method]
     */
    destroy?: () => void,

    /**
     * [Method] Enables events fired by this Observable to bubble up an owner hierarchy by calling this getBubbleTarget  if present
     * @param events String/String[] The event name to bubble, or an Array of event names.
     */
    enableBubble?: (events?: any) => void,

    /**
     * [Method] Fires the specified event with the passed parameters and execute a function action at the end if there are no liste
     * @param eventName String The name of the event to fire.
     * @param args Array Arguments to pass to handers.
     * @param fn Function Action.
     * @param scope Object Scope of fn.
     * @returns Object
     */
    fireAction?: (
      eventName?: string,
      args?: any[],
      fn?: any,
      scope?: any
    ) => any,

    /**
     * [Method] Fires the specified event with the passed parameters minus the event name plus the options object passed to addList
     * @param eventName String The name of the event to fire.
     * @param args Object... Variable number of parameters are passed to handlers.
     * @returns Boolean Returns false if any of the handlers return false.
     */
    fireEvent?: (eventName: string, ...args: any[]) => boolean,

    /**
     * [Method] Returns the value of bubbleEvents
     * @returns String/String[]
     */
    getBubbleEvents?: () => any,

    /**
     * [Method] Returns the value of listeners
     * @returns Object
     */
    getListeners?: () => any,

    /**
     * [Method] Checks to see if this object has any listeners for a specified event
     * @param eventName String The name of the event to check for
     * @returns Boolean True if the event is being listened for, else false
     */
    hasListener?: (eventName?: string) => boolean,

    /**
     * [Method] Alias for addManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    mon?: (
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Alias for removeManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    mun?: (object?: any, eventName?: any, fn?: any, scope?: any) => void,

    /**
     * [Method] Alias for addListener
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    on?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Alias for addAfterListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    onAfter?: (eventName?: any, fn?: any, scope?: any, options?: any) => void,

    /**
     * [Method] Alias for addBeforeListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    onBefore?: (eventName?: any, fn?: any, scope?: any, options?: any) => void,

    /**
     * [Method] Relays selected events from the specified Observable as if the events were fired by this
     * @param object Object The Observable whose events this object is to relay.
     * @param events String/Array/Object Array of event names to relay.
     * @returns Ext.mixin.Observable this
     */
    relayEvents?: (object?: any, events?: any) => Ext$mixin$IObservable,

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    removeAfterListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    removeBeforeListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Removes an event handler
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    removeListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    removeManagedListener?: (
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any
    ) => void,

    /**
     * [Method] Resumes firing events see suspendEvents
     * @param discardQueuedEvents Boolean Pass as true to discard any queued events.
     */
    resumeEvents?: (discardQueuedEvents?: boolean) => void,

    /**
     * [Method] Sets the value of bubbleEvents
     * @param bubbleEvents String/String[] The new value.
     */
    setBubbleEvents?: (bubbleEvents?: any) => void,

    /**
     * [Method] Sets the value of listeners
     * @param listeners Object The new value.
     */
    setListeners?: (listeners?: any) => void,

    /**
     * [Method] Suspends the firing of all events
     */
    suspendEvents?: () => void,

    /**
     * [Method] Alias for removeListener
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    un?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Alias for removeAfterListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    unAfter?: (eventName?: any, fn?: any, scope?: any, options?: any) => void,

    /**
     * [Method] Alias for removeBeforeListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    unBefore?: (eventName?: any, fn?: any, scope?: any, options?: any) => void
  } & Ext$IBase &
    undefined.IObservable;

  declare export type Ext$IEventedBase = {
    /**
     * [Method] Appends an after event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    addAfterListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Appends a before event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    addBeforeListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Adds the specified events to the list of events which this Observable may fire
     * @param eventNames Object/String... Either an object with event names as properties with a value of true or the first event name string if multiple event names are being passed as separate parameters.
     */
    addEvents?: (eventNames?: any) => void,

    /**
     * [Method] Appends an event handler to this object
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    addListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    addManagedListener?: (
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Removes all listeners for this object
     */
    clearListeners?: () => void,

    /**
     * [Method]
     */
    destroy?: () => void,

    /**
     * [Method] Enables events fired by this Observable to bubble up an owner hierarchy by calling this getBubbleTarget  if present
     * @param events String/String[] The event name to bubble, or an Array of event names.
     */
    enableBubble?: (events?: any) => void,

    /**
     * [Method] Fires the specified event with the passed parameters and execute a function action at the end if there are no liste
     * @param eventName String The name of the event to fire.
     * @param args Array Arguments to pass to handers.
     * @param fn Function Action.
     * @param scope Object Scope of fn.
     * @returns Object
     */
    fireAction?: (
      eventName?: string,
      args?: any[],
      fn?: any,
      scope?: any
    ) => any,

    /**
     * [Method] Fires the specified event with the passed parameters minus the event name plus the options object passed to addList
     * @param eventName String The name of the event to fire.
     * @param args Object... Variable number of parameters are passed to handlers.
     * @returns Boolean Returns false if any of the handlers return false.
     */
    fireEvent?: (eventName: string, ...args: any[]) => boolean,

    /**
     * [Method] Returns the value of bubbleEvents
     * @returns String/String[]
     */
    getBubbleEvents?: () => any,

    /**
     * [Method] Returns the value of listeners
     * @returns Object
     */
    getListeners?: () => any,

    /**
     * [Method] Checks to see if this object has any listeners for a specified event
     * @param eventName String The name of the event to check for
     * @returns Boolean True if the event is being listened for, else false
     */
    hasListener?: (eventName?: string) => boolean,

    /**
     * [Method] Alias for addManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    mon?: (
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Alias for removeManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    mun?: (object?: any, eventName?: any, fn?: any, scope?: any) => void,

    /**
     * [Method] Alias for addListener
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    on?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Alias for addAfterListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    onAfter?: (eventName?: any, fn?: any, scope?: any, options?: any) => void,

    /**
     * [Method] Alias for addBeforeListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    onBefore?: (eventName?: any, fn?: any, scope?: any, options?: any) => void,

    /**
     * [Method] Relays selected events from the specified Observable as if the events were fired by this
     * @param object Object The Observable whose events this object is to relay.
     * @param events String/Array/Object Array of event names to relay.
     * @returns Ext.mixin.Observable this
     */
    relayEvents?: (object?: any, events?: any) => Ext$mixin$IObservable,

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    removeAfterListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    removeBeforeListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ) => void,

    /**
     * [Method] Removes an event handler
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    removeListener?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    removeManagedListener?: (
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any
    ) => void,

    /**
     * [Method] Resumes firing events see suspendEvents
     * @param discardQueuedEvents Boolean Pass as true to discard any queued events.
     */
    resumeEvents?: (discardQueuedEvents?: boolean) => void,

    /**
     * [Method] Sets the value of bubbleEvents
     * @param bubbleEvents String/String[] The new value.
     */
    setBubbleEvents?: (bubbleEvents?: any) => void,

    /**
     * [Method] Sets the value of listeners
     * @param listeners Object The new value.
     */
    setListeners?: (listeners?: any) => void,

    /**
     * [Method] Suspends the firing of all events
     */
    suspendEvents?: () => void,

    /**
     * [Method] Alias for removeListener
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    un?: (
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ) => void,

    /**
     * [Method] Alias for removeAfterListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    unAfter?: (eventName?: any, fn?: any, scope?: any, options?: any) => void,

    /**
     * [Method] Alias for removeBeforeListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    unBefore?: (eventName?: any, fn?: any, scope?: any, options?: any) => void
  } & Ext$IBase &
    undefined.IObservable;

  declare export interface Ext$IEventManager {}

  declare export class Ext$EventManager {
    /**
     * [Method] Appends an event handler to an element
     * @param el String/HTMLElement The HTML element or id to assign the event handler to.
     * @param eventName String The name of the event to listen for.
     * @param handler Function The handler function the event invokes. This function is passed the following parameters:
     * @param scope Object The scope (this reference) in which the handler function is executed. Defaults to the Element.
     * @param options Object An object containing handler configuration properties. This may contain any of the following properties:
     */
    static addListener(
      el?: any,
      eventName?: string,
      handler?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Appends an event handler to an element
     * @param el String/HTMLElement The html element or id to assign the event handler to.
     * @param eventName String The name of the event to listen for.
     * @param handler Function The handler function the event invokes.
     * @param scope Object (this reference) in which the handler function executes. Defaults to the Element.
     * @param options Object An object containing standard addListener options
     */
    static on(
      el?: any,
      eventName?: string,
      handler?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Adds a listener to be notified when the document is ready before onload and before images are loaded
     */
    static onDocumentReady(): void;

    /**
     * [Method] Adds a listener to be notified when the browser window is resized and provides resize event buffering 50 millisecond
     * @param fn Function The handler function the window resize event invokes.
     * @param scope Object The scope (this reference) in which the handler function executes. Defaults to the browser window.
     * @param options Boolean Options object as passed to Ext.Element.addListener
     */
    static onWindowResize(fn?: any, scope?: any, options?: boolean): void;

    /**
     * [Method] Removes all event handers from an element
     * @param el String/HTMLElement The id or html element from which to remove all event handlers.
     */
    static removeAll(el?: any): void;

    /**
     * [Method] Removes an event handler from an element
     * @param el String/HTMLElement The id or html element from which to remove the listener.
     * @param eventName String The name of the event.
     * @param fn Function The handler function to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object If a scope (this reference) was specified when the listener was added, then this must refer to the same object.
     */
    static removeListener(
      el?: any,
      eventName?: string,
      fn?: any,
      scope?: any
    ): void;

    /**
     * [Method] Removes an event handler from an element
     * @param el String/HTMLElement The id or html element from which to remove the listener.
     * @param eventName String The name of the event.
     * @param fn Function The handler function to remove. This must be a reference to the function passed into the on call.
     * @param scope Object If a scope (this reference) was specified when the listener was added, then this must refer to the same object.
     */
    static un(el?: any, eventName?: string, fn?: any, scope?: any): void;
  }

  declare export type Ext$IFeature = {} & undefined.IFeature;

  declare export class Ext$Feature {
    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Verifies if a browser feature exists or not on the current device
     * @param value String The feature name to check.
     * @returns Boolean
     */
    static has(value?: string): boolean;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;
  }

  declare export type Ext$field$IUrl = {
    /**
     * [Config Option] (Boolean)
     */
    autoCapitalize?: boolean,

    /**
     * [Config Option] (Object)
     */
    component?: any,

    /**
     * [Method] Returns the value of autoCapitalize
     * @returns Boolean
     */
    getAutoCapitalize?: () => boolean,

    /**
     * [Method] Returns the value of component
     * @returns Object
     */
    getComponent?: () => any,

    /**
     * [Method] Sets the value of autoCapitalize
     * @param autoCapitalize Boolean The new value.
     */
    setAutoCapitalize?: (autoCapitalize?: boolean) => void,

    /**
     * [Method] Sets the value of component
     * @param component Object The new value.
     */
    setComponent?: (component?: any) => void
  } & undefined.IText;

  declare export type Ext$form$IFormPanel = {
    /**
     * [Config Option] (Object)
     */
    api?: any,

    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Object)
     */
    baseParams?: any,

    /**
     * [Config Option] (Boolean)
     */
    enableSubmissionForm?: boolean,

    /**
     * [Config Option] (Object)
     */
    enctype?: any,

    /**
     * [Config Option] (String)
     */
    method?: string,

    /**
     * [Config Option] (Boolean)
     */
    multipartDetection?: boolean,

    /**
     * [Config Option] (String/String[])
     */
    paramOrder?: any,

    /**
     * [Config Option] (Boolean)
     */
    paramsAsHash?: boolean,

    /**
     * [Config Option] (Ext.data.Model)
     */
    record?: data$IModel,

    /**
     * [Config Option] (Boolean/String/Object)
     */
    scrollable?: any,

    /**
     * [Config Option] (Boolean)
     */
    standardSubmit?: boolean,

    /**
     * [Config Option] (Object)
     */
    submitOnAction?: any,

    /**
     * [Config Option] (Number)
     */
    timeout?: number,

    /**
     * [Config Option] (Boolean)
     */
    trackResetOnLoad?: boolean,

    /**
     * [Config Option] (String)
     */
    url?: string,

    /**
     * [Config Option] (Ext.dom.Element)
     */
    waitMsgTarget?: dom$IElement,

    /**
     * [Config Option] (Ext.XTemplate/String/String[])
     */
    waitTpl?: any,

    /**
     * [Method] A convenient method to disable all fields in this form
     * @param newDisabled Object
     * @returns Ext.form.Panel This form.
     */
    doSetDisabled?: (newDisabled?: any) => Ext$form$IPanel,

    /**
     * [Method] Returns the value of api
     * @returns Object
     */
    getApi?: () => any,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of baseParams
     * @returns Object
     */
    getBaseParams?: () => any,

    /**
     * [Method] Returns the value of enableSubmissionForm
     * @returns Boolean
     */
    getEnableSubmissionForm?: () => boolean,

    /**
     * [Method] Returns the value of enctype
     * @returns Object
     */
    getEnctype?: () => any,

    /**
     * [Method] Returns the value of method
     * @returns String
     */
    getMethod?: () => string,

    /**
     * [Method] Returns the value of multipartDetection
     * @returns Boolean
     */
    getMultipartDetection?: () => boolean,

    /**
     * [Method] Returns the value of paramOrder
     * @returns String/String[]
     */
    getParamOrder?: () => any,

    /**
     * [Method] Returns the value of paramsAsHash
     * @returns Boolean
     */
    getParamsAsHash?: () => boolean,

    /**
     * [Method] Returns the value of record
     * @returns Ext.data.Model
     */
    getRecord?: () => data$IModel,

    /**
     * [Method] Returns the value of standardSubmit
     * @returns Boolean
     */
    getStandardSubmit?: () => boolean,

    /**
     * [Method] Returns the value of submitOnAction
     * @returns Object
     */
    getSubmitOnAction?: () => any,

    /**
     * [Method] Returns the value of timeout
     * @returns Number
     */
    getTimeout?: () => number,

    /**
     * [Method] Returns the value of trackResetOnLoad
     * @returns Boolean
     */
    getTrackResetOnLoad?: () => boolean,

    /**
     * [Method] Returns the value of url
     * @returns String
     */
    getUrl?: () => string,

    /**
     * [Method] Returns an object containing the value of each field in the form keyed to the field s name
     * @param enabled Boolean true to return only enabled fields.
     * @param all Boolean true to return all fields even if they don't have a name configured.
     * @returns Object Object mapping field name to its value.
     */
    getValues?: (enabled?: boolean, all?: boolean) => any,

    /**
     * [Method] Hides a previously shown wait mask See showMask
     * @returns Ext.form.Panel this
     */
    hideMask?: () => Ext$form$IPanel,

    /**
     * [Method] Performs an Ajax or Ext Direct call to load values for this form
     * @param options Object The configuration when loading this form. The following are the configurations when loading via Ajax only:
     * @returns Ext.data.Connection The request object.
     */
    load?: (options?: any) => data$IConnection,

    /**
     * [Method] Loads matching fields from a model instance into this form
     * @param record Ext.data.Model The model instance.
     * @returns Ext.form.Panel This form.
     */
    loadModel?: (record?: data$IModel) => Ext$form$IPanel,

    /**
     * [Method] Loads matching fields from a model instance into this form
     * @param record Ext.data.Model The model instance.
     * @returns Ext.form.Panel This form.
     */
    loadRecord?: (record?: data$IModel) => Ext$form$IPanel,

    /**
     * [Method] Resets all fields in the form back to their original values
     * @returns Ext.form.Panel This form.
     */
    reset?: () => Ext$form$IPanel,

    /**
     * [Method] Sets the value of api
     * @param api Object The new value.
     */
    setApi?: (api?: any) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of baseParams
     * @param baseParams Object The new value.
     */
    setBaseParams?: (baseParams?: any) => void,

    /**
     * [Method] Sets the value of enableSubmissionForm
     * @param enableSubmissionForm Boolean The new value.
     */
    setEnableSubmissionForm?: (enableSubmissionForm?: boolean) => void,

    /**
     * [Method] Sets the value of enctype
     * @param enctype Object The new value.
     */
    setEnctype?: (enctype?: any) => void,

    /**
     * [Method] Sets the value of method
     * @param method String The new value.
     */
    setMethod?: (method?: string) => void,

    /**
     * [Method] Sets the value of multipartDetection
     * @param multipartDetection Boolean The new value.
     */
    setMultipartDetection?: (multipartDetection?: boolean) => void,

    /**
     * [Method] Sets the value of paramOrder
     * @param paramOrder String/String[] The new value.
     */
    setParamOrder?: (paramOrder?: any) => void,

    /**
     * [Method] Sets the value of paramsAsHash
     * @param paramsAsHash Boolean The new value.
     */
    setParamsAsHash?: (paramsAsHash?: boolean) => void,

    /**
     * [Method] Loads matching fields from a model instance into this form
     * @param record Ext.data.Model The model instance.
     * @returns Ext.form.Panel This form.
     */
    setRecord?: (record?: data$IModel) => Ext$form$IPanel,

    /**
     * [Method] Sets the value of standardSubmit
     * @param standardSubmit Boolean The new value.
     */
    setStandardSubmit?: (standardSubmit?: boolean) => void,

    /**
     * [Method] Sets the value of submitOnAction
     * @param submitOnAction Object The new value.
     */
    setSubmitOnAction?: (submitOnAction?: any) => void,

    /**
     * [Method] Sets the value of timeout
     * @param timeout Number The new value.
     */
    setTimeout?: (timeout?: number) => void,

    /**
     * [Method] Sets the value of trackResetOnLoad
     * @param trackResetOnLoad Boolean The new value.
     */
    setTrackResetOnLoad?: (trackResetOnLoad?: boolean) => void,

    /**
     * [Method] Sets the value of url
     * @param url String The new value.
     */
    setUrl?: (url?: string) => void,

    /**
     * [Method] Sets the values of form fields in bulk
     * @param values Object field name => value mapping object.
     * @returns Ext.form.Panel This form.
     */
    setValues?: (values?: any) => Ext$form$IPanel,

    /**
     * [Method] Shows a generic custom mask over a designated Element
     * @param cfg String/Object Either a string message or a configuration object supporting the following options: {  message : 'Please Wait',  cls : 'form-mask' }
     * @param target Object
     * @returns Ext.form.Panel This form
     */
    showMask?: (cfg?: any, target?: any) => Ext$form$IPanel,

    /**
     * [Method] Performs a Ajax based submission of form values if standardSubmit is false or otherwise executes a standard HTML Fo
     * @param options Object The configuration when submitting this form. The following are the configurations when submitting via Ajax only:
     * @returns Ext.data.Connection The request object if the standardSubmit config is false. If the standardSubmit config is true, then the return value is undefined.
     */
    submit?: (options?: any) => data$IConnection
  } & Ext$IPanel;

  declare export interface Ext$IFunction {}

  declare export class Ext$Function {
    /**
     * [Method] Create an alias to the provided method property with name methodName of object
     * @param object Object/Function
     * @param methodName String
     * @returns Function aliasFn
     */
    static alias(object?: any, methodName?: string): any;

    /**
     * [Method] Create a new function from the provided fn change this to the provided scope optionally overrides arguments for the
     * @param fn Function The function to delegate.
     * @param scope Object The scope (this reference) in which the function is executed. If omitted, defaults to the browser window.
     * @param args Array Overrides arguments for the call. (Defaults to the arguments passed by the caller)
     * @param appendArgs Boolean/Number if true args are appended to call args instead of overriding, if a number the args are inserted at the specified position.
     * @returns Function The new function.
     */
    static bind(fn?: any, scope?: any, args?: any[], appendArgs?: any): any;

    /**
     * [Method] Create a clone of the provided method
     * @param method Function
     * @returns Function cloneFn
     */
    static clone(method?: any): any;

    /**
     * [Method] Creates a delegate function optionally with a bound scope which when called buffers the execution of the passed fu
     * @param fn Function The function to invoke on a buffered timer.
     * @param buffer Number The number of milliseconds by which to buffer the invocation of the function.
     * @param scope Object The scope (this reference) in which the passed function is executed. If omitted, defaults to the scope specified by the caller.
     * @param args Array Override arguments for the call. Defaults to the arguments passed by the caller.
     * @returns Function A function which invokes the passed function after buffering for the specified time.
     */
    static createBuffered(
      fn?: any,
      buffer?: number,
      scope?: any,
      args?: any[]
    ): any;

    /**
     * [Method] Creates a delegate callback which when called executes after a specific delay
     * @param fn Function The function which will be called on a delay when the returned function is called. Optionally, a replacement (or additional) argument list may be specified.
     * @param delay Number The number of milliseconds to defer execution by whenever called.
     * @param scope Object The scope (this reference) used by the function at execution time.
     * @param args Array Override arguments for the call. (Defaults to the arguments passed by the caller)
     * @param appendArgs Boolean/Number if True args are appended to call args instead of overriding, if a number the args are inserted at the specified position.
     * @returns Function A function which, when called, executes the original function after the specified delay.
     */
    static createDelayed(
      fn?: any,
      delay?: number,
      scope?: any,
      args?: any[],
      appendArgs?: any
    ): any;

    /**
     * [Method] Create a new function from the provided fn change this to the provided scope optionally overrides arguments for the
     * @param fn Function The function to delegate.
     * @param scope Object The scope (this reference) in which the function is executed. If omitted, defaults to the browser window.
     * @param args Array Overrides arguments for the call. (Defaults to the arguments passed by the caller)
     * @param appendArgs Boolean/Number if true args are appended to call args instead of overriding, if a number the args are inserted at the specified position.
     * @returns Function The new function.
     */
    static createDelegate(
      fn?: any,
      scope?: any,
      args?: any[],
      appendArgs?: any
    ): any;

    /**
     * [Method] Creates an interceptor function
     * @param origFn Function The original function.
     * @param newFn Function The function to call before the original.
     * @param scope Object The scope (this reference) in which the passed function is executed. If omitted, defaults to the scope in which the original function is called or the browser window.
     * @param returnValue Object The value to return if the passed function return false.
     * @returns Function The new function.
     */
    static createInterceptor(
      origFn?: any,
      newFn?: any,
      scope?: any,
      returnValue?: any
    ): any;

    /**
     * [Method] Create a combined function call sequence of the original function  the passed function
     * @param originalFn Function The original function.
     * @param newFn Function The function to sequence.
     * @param scope Object The scope (this reference) in which the passed function is executed. If omitted, defaults to the scope in which the original function is called or the browser window.
     * @returns Function The new function.
     */
    static createSequence(originalFn?: any, newFn?: any, scope?: any): any;

    /**
     * [Method] Creates a throttled version of the passed function which when called repeatedly and rapidly invokes the passed func
     * @param fn Function The function to execute at a regular time interval.
     * @param interval Number The interval, in milliseconds, on which the passed function is executed.
     * @param scope Object The scope (this reference) in which the passed function is executed. If omitted, defaults to the scope specified by the caller.
     * @returns Function A function which invokes the passed function at the specified interval.
     */
    static createThrottled(fn?: any, interval?: number, scope?: any): any;

    /**
     * [Method] Calls this function after the number of milliseconds specified optionally in a specific scope
     * @param fn Function The function to defer.
     * @param millis Number The number of milliseconds for the setTimeout() call. If less than or equal to 0 the function is executed immediately.
     * @param scope Object The scope (this reference) in which the function is executed. If omitted, defaults to the browser window.
     * @param args Array Overrides arguments for the call. Defaults to the arguments passed by the caller.
     * @param appendArgs Boolean/Number if true, args are appended to call args instead of overriding, if a number the args are inserted at the specified position.
     * @returns Number The timeout id that can be used with clearTimeout().
     */
    static defer(
      fn?: any,
      millis?: number,
      scope?: any,
      args?: any[],
      appendArgs?: any
    ): number;

    /**
     * [Method] A very commonly used method throughout the framework
     * @param fn Function
     * @returns Function flexSetter
     */
    static flexSetter(fn?: any): any;

    /**
     * [Method] Adds behavior to an existing method that is executed after the original behavior of the function
     * @param object Object The target object
     * @param methodName String Name of the method to override
     * @param fn Function Function with the new behavior. It will be called with the same arguments as the original method. The return value of this function will be the return value of the new method.
     * @param scope Object The scope to execute the interceptor function. Defaults to the object.
     * @returns Function The new function just created.
     */
    static interceptAfter(
      object?: any,
      methodName?: string,
      fn?: any,
      scope?: any
    ): any;

    /**
     * [Method] Adds behavior to an existing method that is executed before the original behavior of the function
     * @param object Object The target object
     * @param methodName String Name of the method to override
     * @param fn Function Function with the new behavior. It will be called with the same arguments as the original method. The return value of this function will be the return value of the new method.
     * @param scope Object The scope to execute the interceptor function. Defaults to the object.
     * @returns Function The new function just created.
     */
    static interceptBefore(
      object?: any,
      methodName?: string,
      fn?: any,
      scope?: any
    ): any;

    /**
     * [Method] Create a new function from the provided fn the arguments of which are pre set to args
     * @param fn Function The original function.
     * @param args Array The arguments to pass to new callback.
     * @param scope Object The scope (this reference) in which the function is executed.
     * @returns Function The new callback function.
     */
    static pass(fn?: any, args?: any[], scope?: any): any;
  }

  declare export type Ext$fx$IState = {} & Ext$IBase;

  declare export type Ext$IImg = {
    /**
     * [Config Option] (String)
     */
    backgroundCls?: string,

    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    imageCls?: string,

    /**
     * [Config Option] (String)
     */
    mode?: string,

    /**
     * [Config Option] (String)
     */
    src?: string,

    /**
     * [Method] Destroys this Component
     */
    destroy?: () => void,

    /**
     * [Method] Returns the value of backgroundCls
     * @returns String
     */
    getBackgroundCls?: () => string,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of imageCls
     * @returns String
     */
    getImageCls?: () => string,

    /**
     * [Method] Returns the value of mode
     * @returns String
     */
    getMode?: () => string,

    /**
     * [Method] Returns the value of src
     * @returns String
     */
    getSrc?: () => string,

    /**
     * [Method] Hides this Component optionally using an animation
     * @returns Ext.Component
     */
    hide?: () => Ext$IComponent,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Sets the value of backgroundCls
     * @param backgroundCls String The new value.
     */
    setBackgroundCls?: (backgroundCls?: string) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of imageCls
     * @param imageCls String The new value.
     */
    setImageCls?: (imageCls?: string) => void,

    /**
     * [Method] Sets the value of mode
     * @param mode String The new value.
     */
    setMode?: (mode?: string) => void,

    /**
     * [Method] Sets the value of src
     * @param src String The new value.
     */
    setSrc?: (src?: string) => void,

    /**
     * [Method] Shows this component optionally using an animation
     * @returns Ext.Component
     */
    show?: () => Ext$IComponent
  } & Ext$IComponent;

  declare export interface Ext$IIs {}

  declare export type Ext$IItemCollection = {
    /**
     * [Method] MixedCollection has a generic way to fetch keys if you implement getKey
     * @param item Object
     * @returns Object The key for the passed item.
     */
    getKey?: (item?: any) => any
  } & undefined.IMixedCollection;

  /**
   * [Property] (Boolean)
   */
  declare export var Ext$SSL_SECURE_URL: boolean;

  /**
   * [Property] (Function)
   */
  declare export var Ext$emptyFn: any;

  /**
   * [Property] (Boolean)
   */
  declare export var Ext$enableGarbageCollector: boolean;

  /**
   * [Property] (Boolean)
   */
  declare export var Ext$enableListenerCollection: boolean;

  /**
   * [Property] (String[])
   */
  declare export var Ext$enumerables: string[];

  /**
   * [Property] (Object)
   */
  declare export var Ext$frameStartTime: any;

  /**
   * [Property] (Boolean)
   */
  declare export var Ext$isSecure: boolean;

  /**
   * [Property] (String)
   */
  declare export var Ext$version: string;

  /**
   * [Method] Loads Ext app Application class and starts it up with given configuration after the page is ready
   * @param config Object An object with the following config options:
   */
  declare export function Ext$application(config?: any): void;

  /**
   * [Method] Copies all the properties of config to the specified object
   * @param object Object The receiver of the properties.
   * @param config Object The source of the properties.
   * @param defaults Object A different object that will also be applied for default values.
   * @returns Object returns obj
   */
  declare export function Ext$apply(
    object?: any,
    config?: any,
    defaults?: any
  ): any;

  /**
   * [Method] Copies all the properties of config to object if they don t already exist
   * @param object Object The receiver of the properties.
   * @param config Object The source of the properties.
   * @returns Object returns obj
   */
  declare export function Ext$applyIf(object?: any, config?: any): any;

  /**
   * [Method] Create a new function from the provided fn change this to the provided scope optionally overrides arguments for the
   * @param fn Function The function to delegate.
   * @param scope Object The scope (this reference) in which the function is executed. If omitted, defaults to the browser window.
   * @param args Array Overrides arguments for the call. (Defaults to the arguments passed by the caller)
   * @param appendArgs Boolean/Number if true args are appended to call args instead of overriding, if a number the args are inserted at the specified position.
   * @returns Function The new function.
   */
  declare export function Ext$bind(
    fn?: any,
    scope?: any,
    args?: any[],
    appendArgs?: any
  ): any;

  /**
   * [Method] Calls function after specified delay or right away when delay 0
   * @param callback Function The callback to execute.
   * @param scope Object The scope to execute in.
   * @param args Array The arguments to pass to the function.
   * @param delay Number Pass a number to delay the call by a number of milliseconds.
   */
  declare export function Ext$callback(
    callback?: any,
    scope?: any,
    args?: any[],
    delay?: number
  ): void;

  /**
   * [Method] Old alias to Ext Array clean
   * @param array Array
   * @returns Array results
   */
  declare export function Ext$clean(array?: any[]): any[];

  /**
   * [Method] Clone almost any type of variable including array object DOM nodes and Date without keeping the old reference
   * @param item Object The variable to clone.
   * @returns Object clone
   */
  declare export function Ext$clone(item?: any): any;

  /**
   * [Method] Copies a set of named properties from the source object to the destination object
   * @param dest Object The destination object.
   * @param source Object The source object.
   * @param names String/String[] Either an Array of property names, or a comma-delimited list of property names to copy.
   * @param usePrototypeKeys Boolean Pass true to copy keys off of the prototype as well as the instance.
   * @returns Object The modified object.
   */
  declare export function Ext$copyTo(
    dest?: any,
    source?: any,
    names?: any,
    usePrototypeKeys?: boolean
  ): any;

  /**
   * [Method] Instantiate a class by either full name alias or alternate name
   * @param name String
   * @param args Mixed Additional arguments after the name will be passed to the class' constructor.
   * @returns Object instance
   */
  declare export function Ext$create(name?: string, args?: any): any;

  /**
   * [Method] Convenient shorthand see Ext ClassManager instantiateByAlias
   * @param alias String
   * @param args Mixed... Additional arguments after the alias will be passed to the class constructor.
   * @returns Object instance
   */
  declare export function Ext$createByAlias(alias: string, ...args: any[]): any;

  /**
   * [Method] Creates an interceptor function
   * @param origFn Function The original function.
   * @param newFn Function The function to call before the original.
   * @param scope Object The scope (this reference) in which the passed function is executed. If omitted, defaults to the scope in which the original function is called or the browser window.
   * @param returnValue Object The value to return if the passed function return false.
   * @returns Function The new function.
   */
  declare export function Ext$createInterceptor(
    origFn?: any,
    newFn?: any,
    scope?: any,
    returnValue?: any
  ): any;

  /**
   * [Method] Old name for widget
   */
  declare export function Ext$createWidget(): void;

  /**
   * [Method] Shorthand for Ext JSON decode
   * @param json String The JSON string.
   * @param safe Boolean Whether to return null or throw an exception if the JSON is invalid.
   * @returns Object/null The resulting object.
   */
  declare export function Ext$decode(json?: string, safe?: boolean): any;

  /**
   * [Method] Calls this function after the number of milliseconds specified optionally in a specific scope
   * @param fn Function The function to defer.
   * @param millis Number The number of milliseconds for the setTimeout() call. If less than or equal to 0 the function is executed immediately.
   * @param scope Object The scope (this reference) in which the function is executed. If omitted, defaults to the browser window.
   * @param args Array Overrides arguments for the call. Defaults to the arguments passed by the caller.
   * @param appendArgs Boolean/Number if true, args are appended to call args instead of overriding, if a number the args are inserted at the specified position.
   * @returns Number The timeout id that can be used with clearTimeout().
   */
  declare export function Ext$defer(
    fn?: any,
    millis?: number,
    scope?: any,
    args?: any[],
    appendArgs?: any
  ): number;

  /**
   * [Method] Defines a class or override
   * @param className String The class name to create in string dot-namespaced format, for example: 'My.very.awesome.Class', 'FeedViewer.plugin.CoolPager' It is highly recommended to follow this simple convention: - The root and the class name are 'CamelCased' - Everything else is lower-cased
   * @param data Object The key - value pairs of properties to apply to this class. Property names can be of any valid strings, except those in the reserved listed below:  mixins statics config alias xtype (for Ext.Components only) self singleton alternateClassName override
   * @param createdFn Function Optional callback to execute after the class (or override) is created. The execution scope (this) will be the newly created class itself.
   * @returns Ext.Base
   */
  declare export function Ext$define(
    className?: string,
    data?: any,
    createdFn?: any
  ): Ext$IBase;

  /**
   * [Method] Attempts to destroy any objects passed to it by removing all event listeners removing them from the DOM if applicab
   * @param args Mixed... An Ext.Element, Ext.Component, or an Array of either of these to destroy.
   */
  declare export function Ext$destroy(...args: any[]): void;

  /**
   * [Method] Dispatches a request to a controller action
   */
  declare export function Ext$dispatch(): void;

  /**
   * [Method] Iterates an array or an iterable value and invoke the given callback function for each item
   * @param iterable Array/NodeList/Object The value to be iterated. If this argument is not iterable, the callback function is called once.
   * @param fn Function The callback function. If it returns false, the iteration stops and this method returns the current index.
   * @param scope Object The scope (this reference) in which the specified function is executed.
   * @param reverse Boolean Reverse the iteration order (loop from the end to the beginning).
   * @returns Boolean See description for the fn parameter.
   */
  declare export function Ext$each(
    iterable?: any,
    fn?: any,
    scope?: any,
    reverse?: boolean
  ): boolean;

  /**
   * [Method] Shorthand for Ext JSON encode
   * @param o Object The variable to encode.
   * @returns String The JSON string.
   */
  declare export function Ext$encode(o?: any): string;

  /**
   * [Method] Convenient shortcut to Ext Loader exclude
   * @param excludes Array
   * @returns Object object contains require method for chaining.
   */
  declare export function Ext$exclude(excludes?: any[]): any;

  /**
   * [Method] This method deprecated
   * @param superclass Function
   * @param overrides Object
   * @returns Function The subclass constructor from the overrides parameter, or a generated one if not provided.
   */
  declare export function Ext$extend(superclass?: any, overrides?: any): any;

  /**
   * [Method] A global factory method to instantiate a class from a config object
   * @param config Object The config object to instantiate or update an instance with.
   * @param classReference String The class to instantiate from.
   * @param instance Object The instance to update.
   * @param aliasNamespace String
   */
  declare export function Ext$factory(
    config?: any,
    classReference?: string,
    instance?: any,
    aliasNamespace?: string
  ): void;

  /**
   * [Method] Old alias to Ext Array flatten
   * @param array Array The array to flatten
   * @returns Array The 1-d array.
   */
  declare export function Ext$flatten(array?: any[]): any[];

  /**
   * [Method] Gets the globally shared flyweight Element with the passed node as the active element
   * @param element String/HTMLElement The DOM node or id.
   * @param named String Allows for creation of named reusable flyweights to prevent conflicts (e.g. internally Ext uses "_global").
   * @returns Ext.dom.Element The shared Element object (or null if no matching element was found).
   */
  declare export function Ext$fly(element?: any, named?: string): dom$IElement;

  /**
   * [Method] Retrieves Ext dom Element objects
   * @param element String/HTMLElement/Ext.Element The id of the node, a DOM Node or an existing Element.
   * @returns Ext.dom.Element The Element object (or null if no matching element was found).
   */
  declare export function Ext$get(element?: any): dom$IElement;

  /**
   * [Method] Returns the current document body as an Ext Element
   * @returns Ext.Element The document body.
   */
  declare export function Ext$getBody(): Ext$IElement;

  /**
   * [Method] Convenient shorthand see Ext ClassManager getClass
   */
  declare export function Ext$getClass(): void;

  /**
   * [Method] Convenient shorthand for Ext ClassManager getName
   * @param object Ext.Class/Object
   * @returns String className
   */
  declare export function Ext$getClassName(object?: any): string;

  /**
   * [Method] This is shorthand reference to Ext ComponentMgr get
   * @param id String The component id
   * @returns Ext.Component The Component, undefined if not found, or null if a Class was found.
   */
  declare export function Ext$getCmp(id?: string): Ext$IComponent;

  /**
   * [Method] Returns the display name for object
   * @param object Mixed The object who's display name to determine.
   * @returns String The determined display name, or "Anonymous" if none found.
   */
  declare export function Ext$getDisplayName(object?: any): string;

  /**
   * [Method] Returns the current HTML document object as an Ext Element
   * @returns Ext.Element The document.
   */
  declare export function Ext$getDoc(): Ext$IElement;

  /**
   * [Method] Return the dom node for the passed String id  dom node or Ext Element
   * @param el Mixed
   * @returns HTMLElement
   */
  declare export function Ext$getDom(el?: any): HTMLElement;

  /**
   * [Method] Returns the current document head as an Ext Element
   * @returns Ext.Element The document head.
   */
  declare export function Ext$getHead(): Ext$IElement;

  /**
   * [Method] Returns the current orientation of the mobile device
   */
  declare export function Ext$getOrientation(): void;

  /**
   * [Method] Shortcut to Ext data StoreManager lookup
   * @param store String/Object The id of the Store, or a Store instance, or a store configuration.
   * @returns Ext.data.Store
   */
  declare export function Ext$getStore(store?: any): data$IStore;

  /**
   * [Method] Old alias to Ext String htmlDecode
   * @param value String The string to decode.
   * @returns String The decoded text.
   */
  declare export function Ext$htmlDecode(value?: string): string;

  /**
   * [Method] Old alias to Ext String htmlEncode
   * @param value String The string to encode.
   * @returns String The encoded text.
   */
  declare export function Ext$htmlEncode(value?: string): string;

  /**
   * [Method] Generates unique ids
   * @param el Mixed The element to generate an id for.
   * @param prefix String The id prefix.
   * @returns String The generated id.
   */
  declare export function Ext$id(el?: any, prefix?: string): string;

  /**
   * [Method] Returns true if the passed value is a JavaScript Array false otherwise
   * @param target Object The target to test.
   * @returns Boolean
   */
  declare export function Ext$isArray(target?: any): boolean;

  /**
   * [Method] Returns true if the passed value is a Boolean
   * @param value Object The value to test.
   * @returns Boolean
   */
  declare export function Ext$isBoolean(value?: any): boolean;

  /**
   * [Method] Returns true if the passed value is a JavaScript Date object false otherwise
   * @param object Object The object to test.
   * @returns Boolean
   */
  declare export function Ext$isDate(object?: any): boolean;

  /**
   * [Method] Returns true if the passed value is defined
   * @param value Object The value to test.
   * @returns Boolean
   */
  declare export function Ext$isDefined(value?: any): boolean;

  /**
   * [Method] Returns true if the passed value is an HTMLElement
   * @param value Object The value to test.
   * @returns Boolean
   */
  declare export function Ext$isElement(value?: any): boolean;

  /**
   * [Method] Returns true if the passed value is empty false otherwise
   * @param value Object The value to test.
   * @param allowEmptyString Boolean true to allow empty strings.
   * @returns Boolean
   */
  declare export function Ext$isEmpty(
    value?: any,
    allowEmptyString?: boolean
  ): boolean;

  /**
   * [Method] Returns true if the passed value is a JavaScript Function false otherwise
   * @param value Object The value to test.
   * @returns Boolean
   */
  declare export function Ext$isFunction(value?: any): boolean;

  /**
   * [Method] Returns true if the passed value is iterable false otherwise
   * @param value Object The value to test.
   * @returns Boolean
   */
  declare export function Ext$isIterable(value?: any): boolean;

  /**
   * [Method] Returns true if the passed value is a String that matches the MS Date JSON encoding format
   * @param value String The string to test
   * @returns Boolean
   */
  declare export function Ext$isMSDate(value?: string): boolean;

  /**
   * [Method] Returns true if the passed value is a number
   * @param value Object The value to test.
   * @returns Boolean
   */
  declare export function Ext$isNumber(value?: any): boolean;

  /**
   * [Method] Validates that a value is numeric
   * @param value Object Examples: 1, '1', '2.34'
   * @returns Boolean true if numeric, false otherwise.
   */
  declare export function Ext$isNumeric(value?: any): boolean;

  /**
   * [Method] Returns true if the passed value is a JavaScript Object false otherwise
   * @param value Object The value to test.
   * @returns Boolean
   */
  declare export function Ext$isObject(value?: any): boolean;

  /**
   * [Method] Returns true if the passed value is a JavaScript primitive  a string number or Boolean
   * @param value Object The value to test.
   * @returns Boolean
   */
  declare export function Ext$isPrimitive(value?: any): boolean;

  /**
   * [Method] Returns true if the passed value is a string
   * @param value Object The value to test.
   * @returns Boolean
   */
  declare export function Ext$isString(value?: any): boolean;

  /**
   * [Method] Returns true if the passed value is a TextNode
   * @param value Object The value to test.
   * @returns Boolean
   */
  declare export function Ext$isTextNode(value?: any): boolean;

  /**
   * [Method] Iterates either an array or an object
   * @param object Object/Array The object or array to be iterated.
   * @param fn Function The function to be called for each iteration. See and Ext.Array.each and Ext.Object.each for detailed lists of arguments passed to this function depending on the given object type that is being iterated.
   * @param scope Object The scope (this reference) in which the specified function is executed. Defaults to the object being iterated itself.
   */
  declare export function Ext$iterate(
    object?: any,
    fn?: any,
    scope?: any
  ): void;

  /**
   * [Method] Old alias to Ext Array max
   * @param array Array/NodeList The Array from which to select the maximum value.
   * @param comparisonFn Function a function to perform the comparison which determines maximization. If omitted the ">" operator will be used. Note: gt = 1; eq = 0; lt = -1
   * @returns Object maxValue The maximum value
   */
  declare export function Ext$max(array?: any, comparisonFn?: any): any;

  /**
   * [Method] Old alias to Ext Array mean
   * @param array Array The Array to calculate the mean value of.
   * @returns Number The mean.
   */
  declare export function Ext$mean(array?: any[]): number;

  /**
   * [Method] A convenient alias method for Ext Object merge
   */
  declare export function Ext$merge(): void;

  /**
   * [Method] Old alias to Ext Array min
   * @param array Array/NodeList The Array from which to select the minimum value.
   * @param comparisonFn Function a function to perform the comparison which determines minimization. If omitted the "&lt;" operator will be used. Note: gt = 1; eq = 0; lt = -1
   * @returns Object minValue The minimum value.
   */
  declare export function Ext$min(array?: any, comparisonFn?: any): any;

  /**
   * [Method] Creates namespaces to be used for scoping variables and classes so that they are not global
   * @param namespace1 String
   * @param namespace2 String
   * @param etc String
   * @returns Object The namespace object. If multiple arguments are passed, this will be the last namespace created.
   */
  declare export function Ext$namespace(
    namespace1?: string,
    namespace2?: string,
    etc?: string
  ): any;

  /**
   * [Method] Convenient alias for Ext namespace
   */
  declare export function Ext$ns(): void;

  /**
   * [Method] This method is deprecated please use Ext Number from instead
   */
  declare export function Ext$num(): void;

  /**
   * [Method] Adds a listener to be notified when the document is ready and all dependencies are loaded
   * @param fn Function The method the event invokes.
   * @param scope Object The scope in which the handler function executes. Defaults to the browser window.
   * @param options Boolean Options object as passed to Ext.Element.addListener. It is recommended that the options {single: true} be used so that the handler is removed on first invocation.
   */
  declare export function Ext$onReady(
    fn?: any,
    scope?: any,
    options?: boolean
  ): void;

  /**
   * [Method] Proxy to Ext Base override
   * @param cls Object The class to override
   * @param overrides Object The properties to add to origClass. This should be specified as an object literal containing one or more properties.
   */
  declare export function Ext$override(cls?: any, overrides?: any): void;

  /**
   * [Method] Create a new function from the provided fn the arguments of which are pre set to args
   * @param fn Function The original function.
   * @param args Array The arguments to pass to new callback.
   * @param scope Object The scope (this reference) in which the function is executed.
   * @returns Function The new callback function.
   */
  declare export function Ext$pass(fn?: any, args?: any[], scope?: any): any;

  /**
   * [Method] Old alias to Ext Array pluck
   * @param array Array/NodeList The Array of items to pluck the value from.
   * @param propertyName String The property name to pluck from each element.
   * @returns Array The value from each item in the Array.
   */
  declare export function Ext$pluck(array?: any, propertyName?: string): any[];

  /**
   * [Method] Registers a new ptype
   */
  declare export function Ext$preg(): void;

  /**
   * [Method] Shorthand of Ext dom Query select
   * @param selector String The selector/xpath query (can be a comma separated list of selectors)
   * @param root HTMLElement/String The start of the query (defaults to document).
   * @returns HTMLElement[] An Array of DOM elements which match the selector. If there are no matches, and empty Array is returned.
   */
  declare export function Ext$query(
    selector?: string,
    root?: any
  ): HTMLElement[];

  /**
   * [Method] Dispatches a request to a controller action adding to the History stack and updating the page url as necessary
   */
  declare export function Ext$redirect(): void;

  /**
   * [Method] Registers a new xtype
   */
  declare export function Ext$reg(): void;

  /**
   * [Method] Creates a new Application class from the specified config object
   */
  declare export function Ext$regApplication(): void;

  /**
   * [Method] Creates a new Controller class from the specified config object
   */
  declare export function Ext$regController(): void;

  /**
   * [Method] Registers new layout type
   */
  declare export function Ext$regLayout(): void;

  /**
   * [Method] Old way for creating Model classes
   * @param name String Name of the Model class.
   * @param config Object A configuration object for the Model you wish to create.
   * @returns Ext.data.Model The newly registered Model.
   */
  declare export function Ext$regModel(
    name?: string,
    config?: any
  ): data$IModel;

  /**
   * [Method] Creates a new store for the given id and config then registers it with the Store Manager
   * @param id String The id to set on the new store.
   * @param config Object The store config.
   */
  declare export function Ext$regStore(id?: string, config?: any): void;

  /**
   * [Method] Removes this element from the document removes all DOM event listeners and deletes the cache reference
   * @param node HTMLElement The node to remove.
   */
  declare export function Ext$removeNode(node?: HTMLElement): void;

  /**
   * [Method] Repaints the whole page
   */
  declare export function Ext$repaint(): void;

  /**
   * [Method] Convenient alias of Ext Loader require
   * @param expressions String/Array Can either be a string or an array of string.
   * @param fn Function The callback function.
   * @param scope Object The execution scope (this) of the callback function.
   * @param excludes String/Array Classes to be excluded, useful when being used with expressions.
   */
  declare export function Ext$require(
    expressions?: any,
    fn?: any,
    scope?: any,
    excludes?: any
  ): void;

  /**
   * [Method] Selects elements based on the passed CSS selector to enable Element methods to be applied to many related elements in
   * @param selector String/HTMLElement[] The CSS selector or an array of elements
   * @param composite Boolean Return a CompositeElement as opposed to a CompositeElementLite. Defaults to false.
   * @returns Ext.dom.CompositeElementLite/Ext.dom.CompositeElement
   */
  declare export function Ext$select(
    selector?: any,
    composite?: boolean
  ): dom$ICompositeElementLite;

  /**
   * [Method] Ext setup  is the entry point to initialize a Sencha Touch application
   * @param config Object An object with the following config options:
   */
  declare export function Ext$setup(config?: any): void;

  /**
   * [Method] Old alias to Ext Array sum
   * @param array Array The Array to calculate the sum value of.
   * @returns Number The sum.
   */
  declare export function Ext$sum(array?: any[]): number;

  /**
   * [Method] Synchronous version of require convenient alias of Ext Loader syncRequire
   * @param expressions String/Array Can either be a string or an array of string
   * @param fn Function The callback function
   * @param scope Object The execution scope (this) of the callback function
   * @param excludes String/Array Classes to be excluded, useful when being used with expressions
   */
  declare export function Ext$syncRequire(
    expressions?: any,
    fn?: any,
    scope?: any,
    excludes?: any
  ): void;

  /**
   * [Method] Converts any iterable numeric indices and a length property into a true array
   * @param iterable Object the iterable object to be turned into a true Array.
   * @param start Number a zero-based index that specifies the start of extraction.
   * @param end Number a zero-based index that specifies the end of extraction.
   * @returns Array
   */
  declare export function Ext$toArray(
    iterable?: any,
    start?: number,
    end?: number
  ): any[];

  /**
   * [Method] Old alias to typeOf
   * @param value Object
   * @returns String
   */
  declare export function Ext$type(value?: any): string;

  /**
   * [Method] Returns the type of the given variable in string format
   * @param value Object
   * @returns String
   */
  declare export function Ext$typeOf(value?: any): string;

  /**
   * [Method] Old alias to Ext Array unique
   * @param array Array
   * @returns Array results
   */
  declare export function Ext$unique(array?: any[]): any[];

  /**
   * [Method] Old alias to Ext String urlAppend
   * @param url String The URL to append to.
   * @param string String The content to append to the URL.
   * @returns String The resulting URL.
   */
  declare export function Ext$urlAppend(url?: string, string?: string): string;

  /**
   * [Method] A convenient alias method for Ext Object fromQueryString
   */
  declare export function Ext$urlDecode(): void;

  /**
   * [Method] A convenient alias method for Ext Object toQueryString
   */
  declare export function Ext$urlEncode(): void;

  /**
   * [Method] Returns the given value itself if it s not empty as described in isEmpty returns the default value second argument
   * @param value Object The value to test.
   * @param defaultValue Object The value to return if the original value is empty.
   * @param allowBlank Boolean true to allow zero length strings to qualify as non-empty.
   * @returns Object value, if non-empty, else defaultValue.
   */
  declare export function Ext$valueFrom(
    value?: any,
    defaultValue?: any,
    allowBlank?: boolean
  ): any;

  /**
   * [Method] Convenient shorthand to create a widget by its xtype also see Ext ClassManager instantiateByAlias var button  Ext
   * @param name String
   * @returns Object instance
   */
  declare export function Ext$widget(name?: string): any;

  declare export interface Ext$IJSON {}

  declare export class Ext$JSON {
    /**
     * [Method] Decodes parses a JSON string to an object
     * @param json String The JSON string.
     * @param safe Boolean Whether to return null or throw an exception if the JSON is invalid.
     * @returns Object/null The resulting object.
     */
    static decode(json?: string, safe?: boolean): any;

    /**
     * [Method] Encodes an Object Array or other value
     * @param o Object The variable to encode.
     * @returns String The JSON string.
     */
    static encode(o?: any): string;

    /**
     * [Method] Encodes a Date
     * @param d Date The Date to encode.
     * @returns String The string literal to use in a JSON string.
     */
    static encodeDate(d?: any): string;
  }

  declare export type Ext$ILabel = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    html?: string,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void
  } & Ext$IComponent;

  declare export type Ext$layout$wrapper$IInner = {
    /**
     * [Method] Returns the value of container
     * @returns Object
     */
    getContainer?: () => any,

    /**
     * [Method] Returns the value of sizeState
     * @returns Object
     */
    getSizeState?: () => any,

    /**
     * [Method] Sets the value of container
     * @param container Object The new value.
     */
    setContainer?: (container?: any) => void,

    /**
     * [Method] Sets the value of sizeState
     * @param sizeState Object The new value.
     */
    setSizeState?: (sizeState?: any) => void
  } & Ext$IBase;

  declare export interface Ext$ILoader {}

  declare export class Ext$Loader {
    /**
     * [Config Option] (Boolean)
     */
    static disableCaching: boolean;

    /**
     * [Config Option] (String)
     */
    static disableCachingParam: string;

    /**
     * [Config Option] (Boolean)
     */
    static enabled: boolean;

    /**
     * [Config Option] (Object)
     */
    static paths: any;

    /**
     * [Property] (Array)
     */
    static history: any[];

    /**
     * [Method] Sets a batch of path entries
     * @param paths Object a set of className: path mappings
     * @returns Ext.Loader this
     */
    static addClassPathMappings(paths?: Ext$Object): Ext$ILoader;

    /**
     * [Method] Explicitly exclude files from being loaded
     * @param excludes Array
     * @returns Object object contains require method for chaining.
     */
    static exclude(excludes?: any[]): any;

    /**
     * [Method] Get the config value corresponding to the specified name
     * @param name String The config property name.
     * @returns Object/Mixed
     */
    static getConfig(name?: string): any;

    /**
     * [Method] Translates a className to a file path by adding the the proper prefix and converting the  s to  s
     * @param className String
     * @returns String path
     */
    static getPath(className?: string): string;

    /**
     * [Method] Add a new listener to be executed when all required scripts are fully loaded
     * @param fn Function The function callback to be executed.
     * @param scope Object The execution scope (this) of the callback function.
     * @param withDomReady Boolean Whether or not to wait for document DOM ready as well.
     */
    static onReady(fn?: any, scope?: any, withDomReady?: boolean): void;

    /**
     * [Method] Loads all classes by the given names and all their direct dependencies optionally executes the given callback functi
     * @param expressions String/Array Can either be a string or an array of string.
     * @param fn Function The callback function.
     * @param scope Object The execution scope (this) of the callback function.
     * @param excludes String/Array Classes to be excluded, useful when being used with expressions.
     */
    static require(
      expressions?: any,
      fn?: any,
      scope?: any,
      excludes?: any
    ): void;

    /**
     * [Method] Set the configuration for the loader
     * @param name Object/String The config object to override the default values or name of a single config setting when also passing the second parameter.
     * @param value Mixed The value for the config setting.
     * @returns Ext.Loader this
     */
    static setConfig(name?: any, value?: any): Ext$ILoader;

    /**
     * [Method] Sets the path of a namespace
     * @param name String/Object See flexSetter
     * @param path String See flexSetter
     * @returns Ext.Loader this
     */
    static setPath(name?: any, path?: string): Ext$ILoader;

    /**
     * [Method] Synchronously loads all classes by the given names and all their direct dependencies optionally executes the given c
     * @param expressions String/Array Can either be a string or an array of string
     * @param fn Function The callback function
     * @param scope Object The execution scope (this) of the callback function
     * @param excludes String/Array Classes to be excluded, useful when being used with expressions
     */
    static syncRequire(
      expressions?: any,
      fn?: any,
      scope?: any,
      excludes?: any
    ): void;
  }

  declare export type Ext$ILoadMask = {
    /**
     * [Config Option] (String)
     */
    cls?: string,

    /**
     * [Config Option] (Boolean)
     */
    indicator?: boolean,

    /**
     * [Config Option] (String)
     */
    message?: string,

    /**
     * [Config Option] (String)
     */
    messageCls?: string,

    /**
     * [Config Option] (String)
     */
    msg?: string,

    /**
     * [Config Option] (String)
     */
    msgCls?: string,

    /**
     * [Config Option] (Ext.data.Store)
     */
    store?: data$IStore,

    /**
     * [Method] Changes the data store bound to this LoadMask
     * @param store Ext.data.Store The store to bind to this LoadMask
     */
    bindStore?: (store?: data$IStore) => void,

    /**
     * [Method] Returns the value of cls
     * @returns String
     */
    getCls?: () => string,

    /**
     * [Method] Returns the value of indicator
     * @returns Boolean
     */
    getIndicator?: () => boolean,

    /**
     * [Method] Returns the value of message
     * @returns String
     */
    getMessage?: () => string,

    /**
     * [Method] Returns the value of messageCls
     * @returns String
     */
    getMessageCls?: () => string,

    /**
     * [Method] Sets the value of cls
     * @param cls String The new value.
     */
    setCls?: (cls?: string) => void,

    /**
     * [Method] Sets the value of indicator
     * @param indicator Boolean The new value.
     */
    setIndicator?: (indicator?: boolean) => void,

    /**
     * [Method] Sets the value of message
     * @param message String The new value.
     */
    setMessage?: (message?: string) => void,

    /**
     * [Method] Sets the value of messageCls
     * @param messageCls String The new value.
     */
    setMessageCls?: (messageCls?: string) => void
  } & Ext$IMask;

  declare export interface Ext$ILogger {}

  declare export class Ext$Logger {
    /**
     * [Method] Convenience method for log with priority deprecate
     */
    static deprecate(): void;

    /**
     * [Method] Convenience method for log with priority error
     */
    static error(): void;

    /**
     * [Method] Convenience method for log with priority info
     */
    static info(): void;

    /**
     * [Method] Logs a message to help with debugging
     * @param message String Message to log.
     * @param priority Number Priority of the log message.
     * @returns Ext.Logger this
     */
    static log(message?: string, priority?: number): Ext$ILogger;

    /**
     * [Method] Convenience method for log with priority verbose
     */
    static verbose(): void;

    /**
     * [Method] Convenience method for log with priority warn
     */
    static warn(): void;
  }

  declare export type Ext$IMap = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Ext.util.Geolocation)
     */
    geo?: util$IGeolocation,

    /**
     * [Config Option] (google.maps.Map)
     */
    map?: any,

    /**
     * [Config Option] (Object)
     */
    mapListeners?: any,

    /**
     * [Config Option] (Object)
     */
    mapOptions?: any,

    /**
     * [Config Option] (Boolean)
     */
    maskMap?: boolean,

    /**
     * [Config Option] (String)
     */
    maskMapCls?: string,

    /**
     * [Config Option] (Boolean/Ext.util.Geolocation)
     */
    useCurrentLocation?: any,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of geo
     * @returns Ext.util.Geolocation
     */
    getGeo?: () => util$IGeolocation,

    /**
     * [Method] Returns the value of map
     * @returns google.maps.Map
     */
    getMap?: () => any,

    /**
     * [Method] Returns the value of mapListeners
     * @returns Object
     */
    getMapListeners?: () => any,

    /**
     * [Method] Returns the state of the Map
     * @returns Object mapOptions
     */
    getState?: () => any,

    /**
     * [Method] Returns the value of useCurrentLocation
     * @returns Boolean/Ext.util.Geolocation
     */
    getUseCurrentLocation?: () => any,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of geo
     * @param geo Ext.util.Geolocation The new value.
     */
    setGeo?: (geo?: util$IGeolocation) => void,

    /**
     * [Method] Sets the value of map
     * @param map google.maps.Map The new value.
     */
    setMap?: (map?: any) => void,

    /**
     * [Method] Moves the map center to the designated coordinates hash of the form  latitude 37 381592 longitude  122 135672
     * @param coordinates Object/google.maps.LatLng Object representing the desired Latitude and longitude upon which to center the map.
     */
    setMapCenter?: (coordinates?: any) => void,

    /**
     * [Method] Sets the value of mapListeners
     * @param mapListeners Object The new value.
     */
    setMapListeners?: (mapListeners?: any) => void,

    /**
     * [Method] Sets the value of mapOptions
     * @param mapOptions Object The new value.
     */
    setMapOptions?: (mapOptions?: any) => void,

    /**
     * [Method] Sets the value of useCurrentLocation
     * @param useCurrentLocation Boolean/Ext.util.Geolocation The new value.
     */
    setUseCurrentLocation?: (useCurrentLocation?: any) => void,

    /**
     * [Method] Moves the map center to the designated coordinates hash of the form  latitude 37 381592 longitude  122 135672
     * @param coordinates Object/google.maps.LatLng Object representing the desired Latitude and longitude upon which to center the map.
     */
    update?: (coordinates?: any) => void
  } & Ext$IContainer;

  declare export type Ext$IMask = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Boolean)
     */
    transparent?: boolean,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of transparent
     * @returns Boolean
     */
    getTransparent?: () => boolean,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of transparent
     * @param transparent Boolean The new value.
     */
    setTransparent?: (transparent?: boolean) => void
  } & Ext$IComponent;

  declare export type Ext$IMedia = {
    /**
     * [Config Option] (Boolean)
     */
    autoPause?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    autoResume?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    enableControls?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    loop?: boolean,

    /**
     * [Config Option] (Ext.Element)
     */
    media?: Ext$IElement,

    /**
     * [Config Option] (Boolean)
     */
    muted?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    preload?: boolean,

    /**
     * [Config Option] (String)
     */
    url?: string,

    /**
     * [Config Option] (Number)
     */
    volume?: number,

    /**
     * [Method] Destroys this Component
     */
    destroy?: () => void,

    /**
     * [Method] Returns the value of autoPause
     * @returns Boolean
     */
    getAutoPause?: () => boolean,

    /**
     * [Method] Returns the value of autoResume
     * @returns Boolean
     */
    getAutoResume?: () => boolean,

    /**
     * [Method] Returns the current time of the media in seconds
     * @returns Number
     */
    getCurrentTime?: () => number,

    /**
     * [Method] Returns the duration of the media in seconds
     * @returns Number
     */
    getDuration?: () => number,

    /**
     * [Method] Returns the value of enableControls
     * @returns Boolean
     */
    getEnableControls?: () => boolean,

    /**
     * [Method] Returns the value of loop
     * @returns Boolean
     */
    getLoop?: () => boolean,

    /**
     * [Method] Returns the value of media
     * @returns Ext.Element
     */
    getMedia?: () => Ext$IElement,

    /**
     * [Method] Returns the value of muted
     * @returns Boolean
     */
    getMuted?: () => boolean,

    /**
     * [Method] Returns the value of preload
     * @returns Boolean
     */
    getPreload?: () => boolean,

    /**
     * [Method] Returns the value of url
     * @returns String
     */
    getUrl?: () => string,

    /**
     * [Method] Returns the value of volume
     * @returns Number
     */
    getVolume?: () => number,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Returns if the media is currently playing
     * @returns Boolean playing true if the media is playing.
     */
    isPlaying?: () => boolean,

    /**
     * [Method] Pauses media playback
     */
    pause?: () => void,

    /**
     * [Method] Starts or resumes media playback
     */
    play?: () => void,

    /**
     * [Method] Sets the value of autoPause
     * @param autoPause Boolean The new value.
     */
    setAutoPause?: (autoPause?: boolean) => void,

    /**
     * [Method] Sets the value of autoResume
     * @param autoResume Boolean The new value.
     */
    setAutoResume?: (autoResume?: boolean) => void,

    /**
     * [Method] Sets the value of enableControls
     * @param enableControls Boolean The new value.
     */
    setEnableControls?: (enableControls?: boolean) => void,

    /**
     * [Method] Sets the value of loop
     * @param loop Boolean The new value.
     */
    setLoop?: (loop?: boolean) => void,

    /**
     * [Method] Sets the value of media
     * @param media Ext.Element The new value.
     */
    setMedia?: (media?: Ext$IElement) => void,

    /**
     * [Method] Sets the value of muted
     * @param muted Boolean The new value.
     */
    setMuted?: (muted?: boolean) => void,

    /**
     * [Method] Sets the value of preload
     * @param preload Boolean The new value.
     */
    setPreload?: (preload?: boolean) => void,

    /**
     * [Method] Sets the value of url
     * @param url String The new value.
     */
    setUrl?: (url?: string) => void,

    /**
     * [Method] Sets the value of volume
     * @param volume Number The new value.
     */
    setVolume?: (volume?: number) => void,

    /**
     * [Method] Stops media playback and returns to the beginning
     */
    stop?: () => void,

    /**
     * [Method] Toggles the media playback state
     */
    toggle?: () => void,

    /**
     * [Method] Updates the controls of the video element
     * @param enableControls Object
     */
    updateEnableControls?: (enableControls?: any) => void,

    /**
     * [Method] Updates the loop setting of the media element
     * @param loop Object
     */
    updateLoop?: (loop?: any) => void,

    /**
     * [Method] Sets the URL of the media element
     * @param newUrl Object
     */
    updateUrl?: (newUrl?: any) => void
  } & Ext$IComponent;

  declare export type Ext$IMenu = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Number/String)
     */
    bottom?: any,

    /**
     * [Config Option] (String)
     */
    defaultType?: string,

    /**
     * [Config Option] (Number/String)
     */
    height?: any,

    /**
     * [Config Option] (Number/String)
     */
    left?: any,

    /**
     * [Config Option] (Number/String)
     */
    right?: any,

    /**
     * [Config Option] (Number/String)
     */
    width?: any,

    /**
     * [Method] Only fire the hide event if it is initialized
     */
    doSetHidden?: () => void,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of bottom
     * @returns Number
     */
    getBottom?: () => number,

    /**
     * [Method] Returns the value of defaultType
     * @returns String
     */
    getDefaultType?: () => string,

    /**
     * [Method] Returns the value of height
     * @returns String
     */
    getHeight?: () => string,

    /**
     * [Method] Returns the value of left
     * @returns Number
     */
    getLeft?: () => number,

    /**
     * [Method] Returns the value of right
     * @returns Number
     */
    getRight?: () => number,

    /**
     * [Method] Returns the value of width
     * @returns String
     */
    getWidth?: () => string,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of bottom
     * @param bottom Number The new value.
     */
    setBottom?: (bottom?: number) => void,

    /**
     * [Method] Sets the value of defaultType
     * @param defaultType String The new value.
     */
    setDefaultType?: (defaultType?: string) => void,

    /**
     * [Method] Sets the value of height
     * @param height String The new value.
     */
    setHeight?: (height?: string) => void,

    /**
     * [Method] Sets the value of left
     * @param left Number The new value.
     */
    setLeft?: (left?: number) => void,

    /**
     * [Method] Sets the value of right
     * @param right Number The new value.
     */
    setRight?: (right?: number) => void,

    /**
     * [Method] Sets the value of width
     * @param width String The new value.
     */
    setWidth?: (width?: string) => void
  } & Ext$ISheet;

  declare export type Ext$IMessageBox = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Array/Object)
     */
    buttons?: any,

    /**
     * [Config Option] (Number)
     */
    defaultTextHeight?: number,

    /**
     * [Config Option] (Object)
     */
    hideAnimation?: any,

    /**
     * [Config Option] (String)
     */
    icon?: string,

    /**
     * [Config Option] (String)
     */
    iconCls?: string,

    /**
     * [Config Option] (Object/String)
     */
    layout?: any,

    /**
     * [Config Option] (String)
     */
    message?: string,

    /**
     * [Config Option] (String)
     */
    msg?: string,

    /**
     * [Config Option] (Object)
     */
    prompt?: any,

    /**
     * [Config Option] (Object)
     */
    showAnimation?: any,

    /**
     * [Config Option] (String)
     */
    title?: string,

    /**
     * [Config Option] (String)
     */
    ui?: string,

    /**
     * [Config Option] (Number)
     */
    zIndex?: number,

    /**
     * [Method] Displays a standard read only message box with an OK button comparable to the basic JavaScript alert prompt
     * @param title String The title bar text.
     * @param message String The message box body text.
     * @param fn Function A callback function which is called when the dialog is dismissed by clicking on the configured buttons.
     * @param scope Object The scope (this reference) in which the callback is executed. Defaults to: the browser window
     * @returns Ext.MessageBox this
     */
    alert?: (
      title?: string,
      message?: string,
      fn?: any,
      scope?: any
    ) => Ext$IMessageBox,

    /**
     * [Method] Displays a confirmation message box with Yes and No buttons comparable to JavaScript s confirm
     * @param title String The title bar text.
     * @param message String The message box body text.
     * @param fn Function A callback function which is called when the dialog is dismissed by clicking on the configured buttons.
     * @param scope Object The scope (this reference) in which the callback is executed. Defaults to: the browser window
     * @returns Ext.MessageBox this
     */
    confirm?: (
      title?: string,
      message?: string,
      fn?: any,
      scope?: any
    ) => Ext$IMessageBox,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of buttons
     * @returns Array/Object
     */
    getButtons?: () => any,

    /**
     * [Method] Returns the value of defaultTextHeight
     * @returns Number
     */
    getDefaultTextHeight?: () => number,

    /**
     * [Method] Returns the value of layout
     * @returns Object
     */
    getLayout?: () => any,

    /**
     * [Method] Returns the value of prompt
     * @returns Object
     */
    getPrompt?: () => any,

    /**
     * [Method] Returns the value of title
     * @returns String
     */
    getTitle?: () => string,

    /**
     * [Method] Returns the value of ui
     * @returns String
     */
    getUi?: () => string,

    /**
     * [Method] Returns the value of zIndex
     * @returns Number
     */
    getZIndex?: () => number,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of buttons
     * @param buttons Array/Object The new value.
     */
    setButtons?: (buttons?: any) => void,

    /**
     * [Method] Sets the value of defaultTextHeight
     * @param defaultTextHeight Number The new value.
     */
    setDefaultTextHeight?: (defaultTextHeight?: number) => void,

    /**
     * [Method] Sets the value of hideAnimation
     * @param hideAnimation Object The new value.
     */
    setHideAnimation?: (hideAnimation?: any) => void,

    /**
     * [Method] Sets icon
     * @param iconCls String A CSS class name or empty string to clear the icon.
     * @returns Ext.MessageBox this
     */
    setIcon?: (iconCls?: string) => Ext$IMessageBox,

    /**
     * [Method] Sets the value of iconCls
     * @param iconCls String The new value.
     */
    setIconCls?: (iconCls?: string) => void,

    /**
     * [Method] Sets the value of layout
     * @param layout Object The new value.
     */
    setLayout?: (layout?: any) => void,

    /**
     * [Method] Sets the value of message
     * @param message String The new value.
     */
    setMessage?: (message?: string) => void,

    /**
     * [Method] Sets the value of prompt
     * @param prompt Object The new value.
     */
    setPrompt?: (prompt?: any) => void,

    /**
     * [Method] Sets the value of showAnimation
     * @param showAnimation Object The new value.
     */
    setShowAnimation?: (showAnimation?: any) => void,

    /**
     * [Method] Sets the value of title
     * @param title String The new value.
     */
    setTitle?: (title?: string) => void,

    /**
     * [Method] Sets the value of ui
     * @param ui String The new value.
     */
    setUi?: (ui?: string) => void,

    /**
     * [Method] Sets the value of zIndex
     * @param zIndex Number The new value.
     */
    setZIndex?: (zIndex?: number) => void,

    /**
     * [Method] Displays the Ext MessageBox with a specified configuration
     * @param config Object An object with the following config options:
     * @returns Ext.MessageBox this
     */
    show?: (config?: any) => Ext$IMessageBox,

    /**
     * [Method] Sets the value of message
     * @param message String The new value.
     * @returns Ext.MessageBox this
     */
    updateText?: (message?: string) => Ext$IMessageBox
  } & Ext$ISheet;

  declare export type Ext$mixin$ITraversable = {} & undefined.IMixin;

  declare export type Ext$IMsg = {} & Ext$IMessageBox;

  declare export class Ext$Msg {
    /**
     * [Property] (Ext.util.MixedCollection)
     */
    static items: util$IMixedCollection;

    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Adds one or more Components to this Container
     * @param newItems Object/Object[]/Ext.Component/Ext.Component[] The new items to add to the Container.
     * @returns Ext.Component The last item added to the Container from the newItems array.
     */
    static add(newItems?: any): Ext$IComponent;

    /**
     * [Method] Appends an after event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static addAfterListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Adds an array of Components to this Container
     * @param items Array The array of items to add to this container.
     * @returns Array The array of items after they have been added.
     */
    static addAll(items?: any[]): any[];

    /**
     * [Method] Appends a before event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static addBeforeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Adds a CSS class or classes to this Component s rendered element
     * @param cls String The CSS class to add.
     * @param prefix String Optional prefix to add to each class.
     * @param suffix String Optional suffix to add to each class.
     */
    static addCls(cls?: string, prefix?: string, suffix?: string): void;

    /**
     * [Method] Adds the specified events to the list of events which this Observable may fire
     * @param eventNames Object/String... Either an object with event names as properties with a value of true or the first event name string if multiple event names are being passed as separate parameters.
     */
    static addEvents(eventNames?: any): void;

    /**
     * [Method] Appends an event handler to this object
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    static addListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    static addManagedListener(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Displays a standard read only message box with an OK button comparable to the basic JavaScript alert prompt
     * @param title String The title bar text.
     * @param message String The message box body text.
     * @param fn Function A callback function which is called when the dialog is dismissed by clicking on the configured buttons.
     * @param scope Object The scope (this reference) in which the callback is executed. Defaults to: the browser window
     * @returns Ext.MessageBox this
     */
    static alert(
      title?: string,
      message?: string,
      fn?: any,
      scope?: any
    ): Ext$IMessageBox;

    /**
     * [Method] Animates to the supplied activeItem with a specified animation
     * @param activeItem Object/Number The item or item index to make active.
     * @param animation Object/Ext.fx.layout.Card Card animation configuration or instance.
     */
    static animateActiveItem(activeItem?: any, animation?: any): void;

    /**
     * [Method] Changes the masked configuration when its setter is called which will convert the value into a proper object instanc
     * @param masked Boolean/Object/Ext.Mask/Ext.LoadMask
     * @returns Object
     */
    static applyMasked(masked?: any): any;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method] Retrieves the first direct child of this container which matches the passed selector
     * @param selector String An Ext.ComponentQuery selector.
     * @returns Ext.Component
     */
    static child(selector?: string): Ext$IComponent;

    /**
     * [Method] Removes all listeners for this object
     */
    static clearListeners(): void;

    /**
     * [Method] Displays a confirmation message box with Yes and No buttons comparable to JavaScript s confirm
     * @param title String The title bar text.
     * @param message String The message box body text.
     * @param fn Function A callback function which is called when the dialog is dismissed by clicking on the configured buttons.
     * @param scope Object The scope (this reference) in which the callback is executed. Defaults to: the browser window
     * @returns Ext.MessageBox this
     */
    static confirm(
      title?: string,
      message?: string,
      fn?: any,
      scope?: any
    ): Ext$IMessageBox;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Disables this Component
     */
    static disable(): void;

    /**
     * [Method] Retrieves the first descendant of this container which matches the passed selector
     * @param selector String An Ext.ComponentQuery selector.
     * @returns Ext.Component
     */
    static down(selector?: string): Ext$IComponent;

    /**
     * [Method] Enables this Component
     */
    static enable(): void;

    /**
     * [Method] Enables events fired by this Observable to bubble up an owner hierarchy by calling this getBubbleTarget  if present
     * @param events String/String[] The event name to bubble, or an Array of event names.
     */
    static enableBubble(events?: any): void;

    /**
     * [Method] Fires the specified event with the passed parameters and execute a function action at the end if there are no liste
     * @param eventName String The name of the event to fire.
     * @param args Array Arguments to pass to handers.
     * @param fn Function Action.
     * @param scope Object Scope of fn.
     * @returns Object
     */
    static fireAction(
      eventName?: string,
      args?: any[],
      fn?: any,
      scope?: any
    ): any;

    /**
     * [Method] Fires the specified event with the passed parameters minus the event name plus the options object passed to addList
     * @param eventName String The name of the event to fire.
     * @param args Object... Variable number of parameters are passed to handlers.
     * @returns Boolean Returns false if any of the handlers return false.
     */
    static fireEvent(eventName: string, ...args: any[]): boolean;

    /**
     * [Method] Returns the value of activeItem
     * @returns Object/String/Number
     */
    static getActiveItem(): any;

    /**
     * [Method] Prepares information on aligning this to component using alignment
     * @param component Object
     * @param alignment Object
     */
    static getAlignmentInfo(component?: any, alignment?: any): void;

    /**
     * [Method] Returns the Component for a given index in the Container s items
     * @param index Number The index of the Component to return.
     * @returns Ext.Component The item at the specified index, if found.
     */
    static getAt(index?: number): Ext$IComponent;

    /**
     * [Method] Returns the value of autoDestroy
     * @returns Boolean
     */
    static getAutoDestroy(): boolean;

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    static getBaseCls(): string;

    /**
     * [Method] Returns the value of bodyBorder
     * @returns Number/Boolean/String
     */
    static getBodyBorder(): any;

    /**
     * [Method] Returns the value of bodyMargin
     * @returns Number/Boolean/String
     */
    static getBodyMargin(): any;

    /**
     * [Method] Returns the value of bodyPadding
     * @returns Number/Boolean/String
     */
    static getBodyPadding(): any;

    /**
     * [Method] Returns the value of border
     * @returns Number/String
     */
    static getBorder(): any;

    /**
     * [Method] Returns the value of bottom
     * @returns Number/String
     */
    static getBottom(): any;

    /**
     * [Method] Returns the value of bubbleEvents
     * @returns String/String[]
     */
    static getBubbleEvents(): any;

    /**
     * [Method] Returns the value of buttons
     * @returns Array/Object
     */
    static getButtons(): any;

    /**
     * [Method] Returns the value of centered
     * @returns Boolean
     */
    static getCentered(): boolean;

    /**
     * [Method] Returns the value of cls
     * @returns String/String[]
     */
    static getCls(): any;

    /**
     * [Method] Examines this container s items property and gets a direct child component of this container
     * @param component String/Number This parameter may be any of the following:  {String} : representing the itemId or id of the child component. {Number} : representing the position of the child component within the items property. For additional information see Ext.util.MixedCollection.get.
     * @returns Ext.Component The component (if found).
     */
    static getComponent(component?: any): Ext$IComponent;

    /**
     * [Method] Returns the value of contentEl
     * @returns Ext.Element/HTMLElement/String
     */
    static getContentEl(): any;

    /**
     * [Method] Returns the value of control
     * @returns Object
     */
    static getControl(): any;

    /**
     * [Method] Returns the value of data
     * @returns Object
     */
    static getData(): any;

    /**
     * [Method] Returns the value of defaultTextHeight
     * @returns Number
     */
    static getDefaultTextHeight(): number;

    /**
     * [Method] Returns the value of defaultType
     * @returns String
     */
    static getDefaultType(): string;

    /**
     * [Method] Returns the value of defaults
     * @returns Object
     */
    static getDefaults(): any;

    /**
     * [Method] Returns the value of disabled
     * @returns Boolean
     */
    static getDisabled(): boolean;

    /**
     * [Method] Returns the value of disabledCls
     * @returns String
     */
    static getDisabledCls(): string;

    /**
     * [Method] Returns the value of docked
     * @returns String
     */
    static getDocked(): string;

    /**
     * [Method] Finds a docked item of this container using a reference idor an index of its location in getDockedItems
     * @param component String/Number The id or index of the component to find.
     * @returns Ext.Component/Boolean The docked component, if found.
     */
    static getDockedComponent(component?: any): any;

    /**
     * [Method] Returns all the Ext Component docked items in this container
     * @returns Array The docked items of this container.
     */
    static getDockedItems(): any[];

    /**
     * [Method] Retrieves the top level element representing this component
     * @returns Ext.dom.Element
     */
    static getEl(): dom$IElement;

    /**
     * [Method] Returns the value of enter
     * @returns String
     */
    static getEnter(): string;

    /**
     * [Method] Returns the value of enterAnimation
     * @returns String/Mixed
     */
    static getEnterAnimation(): any;

    /**
     * [Method] Returns the value of exit
     * @returns String
     */
    static getExit(): string;

    /**
     * [Method] Returns the value of exitAnimation
     * @returns String/Mixed
     */
    static getExitAnimation(): any;

    /**
     * [Method] Returns the value of flex
     * @returns Number
     */
    static getFlex(): number;

    /**
     * [Method] Returns the value of floatingCls
     * @returns String
     */
    static getFloatingCls(): string;

    /**
     * [Method] Returns the value of height
     * @returns Number/String
     */
    static getHeight(): any;

    /**
     * [Method] Returns the value of hidden
     * @returns Boolean
     */
    static getHidden(): boolean;

    /**
     * [Method] Returns the value of hiddenCls
     * @returns String
     */
    static getHiddenCls(): string;

    /**
     * [Method] Returns the value of hideAnimation
     * @returns Object
     */
    static getHideAnimation(): any;

    /**
     * [Method] Returns the value of hideOnMaskTap
     * @returns Boolean
     */
    static getHideOnMaskTap(): boolean;

    /**
     * [Method] Returns the value of html
     * @returns String/Ext.Element/HTMLElement
     */
    static getHtml(): any;

    /**
     * [Method] Retrieves the id of this component
     * @returns String id
     */
    static getId(): string;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Returns all inner items of this container
     * @returns Array The inner items of this container.
     */
    static getInnerItems(): any[];

    /**
     * [Method] Returns the value of itemId
     * @returns String
     */
    static getItemId(): string;

    /**
     * [Method] Returns the value of items
     * @returns Array/Object
     */
    static getItems(): any;

    /**
     * [Method] Returns the value of layout
     * @returns Object
     */
    static getLayout(): any;

    /**
     * [Method] Returns the value of left
     * @returns Number/String
     */
    static getLeft(): any;

    /**
     * [Method] Returns the value of listeners
     * @returns Object
     */
    static getListeners(): any;

    /**
     * [Method] Returns the value of margin
     * @returns Number/String
     */
    static getMargin(): any;

    /**
     * [Method] Returns the value of masked
     * @returns Boolean/Object/Ext.Mask/Ext.LoadMask
     */
    static getMasked(): any;

    /**
     * [Method] Returns the value of maxHeight
     * @returns Number/String
     */
    static getMaxHeight(): any;

    /**
     * [Method] Returns the value of maxWidth
     * @returns Number/String
     */
    static getMaxWidth(): any;

    /**
     * [Method] Returns the value of minHeight
     * @returns Number/String
     */
    static getMinHeight(): any;

    /**
     * [Method] Returns the value of minWidth
     * @returns Number/String
     */
    static getMinWidth(): any;

    /**
     * [Method] Returns the value of padding
     * @returns Number/String
     */
    static getPadding(): any;

    /**
     * [Method] Returns the parent of this component if it has one
     * @returns Ext.Component The parent of this component.
     */
    static getParent(): Ext$IComponent;

    /**
     * [Method] Returns the value of plugins
     * @returns Object/Array
     */
    static getPlugins(): any;

    /**
     * [Method] Returns the value of prompt
     * @returns Object
     */
    static getPrompt(): any;

    /**
     * [Method] Returns the value of record
     * @returns Ext.data.Model
     */
    static getRecord(): data$IModel;

    /**
     * [Method] Returns the value of renderTo
     * @returns Ext.Element
     */
    static getRenderTo(): Ext$IElement;

    /**
     * [Method] Returns the value of right
     * @returns Number/String
     */
    static getRight(): any;

    /**
     * [Method] Returns an the scrollable instance for this container which is a Ext scroll View class
     * @returns Ext.scroll.View The scroll view.
     */
    static getScrollable(): Ext$scroll$IView;

    /**
     * [Method] Returns the value of showAnimation
     * @returns Object
     */
    static getShowAnimation(): any;

    /**
     * [Method] Returns the height and width of the Component
     * @returns Object The current height and width of the Component.
     */
    static getSize(): any;

    /**
     * [Method] Returns the value of stretchX
     * @returns Boolean
     */
    static getStretchX(): boolean;

    /**
     * [Method] Returns the value of stretchY
     * @returns Boolean
     */
    static getStretchY(): boolean;

    /**
     * [Method] Returns the value of style
     * @returns String/Object
     */
    static getStyle(): any;

    /**
     * [Method] Returns the value of styleHtmlCls
     * @returns String
     */
    static getStyleHtmlCls(): string;

    /**
     * [Method] Returns the value of styleHtmlContent
     * @returns Boolean
     */
    static getStyleHtmlContent(): boolean;

    /**
     * [Method] Returns the value of title
     * @returns String
     */
    static getTitle(): string;

    /**
     * [Method] Returns the value of top
     * @returns Number/String
     */
    static getTop(): any;

    /**
     * [Method] Returns the value of tpl
     * @returns String/String[]/Ext.Template/Ext.XTemplate[]
     */
    static getTpl(): any;

    /**
     * [Method] Returns the value of tplWriteMode
     * @returns String
     */
    static getTplWriteMode(): string;

    /**
     * [Method] Returns the value of ui
     * @returns String
     */
    static getUi(): string;

    /**
     * [Method] Returns the value of width
     * @returns Number/String
     */
    static getWidth(): any;

    /**
     * [Method] Returns this Component s xtype hierarchy as a slash delimited string
     * @returns String The xtype hierarchy string.
     */
    static getXTypes(): string;

    /**
     * [Method] Returns the value of zIndex
     * @returns Number
     */
    static getZIndex(): number;

    /**
     * [Method] Checks to see if this object has any listeners for a specified event
     * @param eventName String The name of the event to check for
     * @returns Boolean True if the event is being listened for, else false
     */
    static hasListener(eventName?: string): boolean;

    /**
     * [Method] Returns true if this component has a parent
     * @returns Boolean true if this component has a parent.
     */
    static hasParent(): boolean;

    /**
     * [Method] Hides this Component optionally using an animation
     * @returns Ext.Component
     */
    static hide(): Ext$IComponent;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    static initialize(): void;

    /**
     * [Method] Adds a child Component at the given index
     * @param index Number The index to insert the Component at.
     * @param item Object The Component to insert.
     */
    static insert(index?: number, item?: any): void;

    /**
     * [Method] Returns true if this Component is currently disabled
     * @returns Boolean true if currently disabled.
     */
    static isDisabled(): boolean;

    /**
     * [Method] Returns true if this Component is currently hidden
     * @returns Boolean true if currently hidden.
     */
    static isHidden(): boolean;

    /**
     * [Method] Tests whether or not this Component is of a specific xtype
     * @param xtype String The xtype to check for this Component.
     * @param shallow Boolean false to check whether this Component is descended from the xtype (this is the default), or true to check whether this Component is directly of the specified xtype.
     * @returns Boolean true if this component descends from the specified xtype, false otherwise.
     */
    static isXType(xtype?: string, shallow?: boolean): boolean;

    /**
     * [Method] Convenience method which calls setMasked with a value of true to show the mask
     * @param mask Object
     */
    static mask(mask?: any): void;

    /**
     * [Method] Alias for addManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    static mon(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Alias for removeManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    static mun(object?: any, eventName?: any, fn?: any, scope?: any): void;

    /**
     * [Method] Alias for addListener
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    static on(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Alias for addAfterListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;

    /**
     * [Method] Alias for addBeforeListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static onBefore(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Displays a message box with OK and Cancel buttons prompting the user to enter some text comparable to JavaScript s p
     * @param title String The title bar text.
     * @param message String The message box body text.
     * @param fn Function A callback function which is called when the dialog is dismissed by clicking on the configured buttons.
     * @param scope Object The scope (this reference) in which the callback is executed. Defaults to: the browser window.
     * @param multiLine Boolean/Number true to create a multiline textbox using the defaultTextHeight property, or the height in pixels to create the textbox.
     * @param value String Default value of the text input element.
     * @param prompt Object The configuration for the prompt. See the prompt documentation in Ext.MessageBox for more information.
     * @returns Ext.MessageBox this
     */
    static prompt(
      title?: string,
      message?: string,
      fn?: any,
      scope?: any,
      multiLine?: any,
      value?: string,
      prompt?: any
    ): Ext$IMessageBox;

    /**
     * [Method] Retrieves all descendant components which match the passed selector
     * @param selector String Selector complying to an Ext.ComponentQuery selector.
     * @returns Array Ext.Component's which matched the selector.
     */
    static query(selector?: string): any[];

    /**
     * [Method] Relays selected events from the specified Observable as if the events were fired by this
     * @param object Object The Observable whose events this object is to relay.
     * @param events String/Array/Object Array of event names to relay.
     * @returns Ext.mixin.Observable this
     */
    static relayEvents(object?: any, events?: any): Ext$mixin$IObservable;

    /**
     * [Method] Removes an item from this Container optionally destroying it
     * @param item Object The item to remove.
     * @param destroy Boolean Calls the Component's destroy method if true.
     * @returns Ext.Component this
     */
    static remove(item?: any, destroy?: boolean): Ext$IComponent;

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static removeAfterListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Removes all items currently in the Container optionally destroying them all
     * @param destroy Boolean If true, destroys each removed Component.
     * @param everything Boolean If true, completely remove all items including docked / centered and floating items.
     * @returns Ext.Component this
     */
    static removeAll(destroy?: boolean, everything?: boolean): Ext$IComponent;

    /**
     * [Method] Removes the Component at the specified index  myContainer removeAt 0 removes the first item
     * @param index Number The index of the Component to remove.
     * @returns Ext.Container this
     */
    static removeAt(index?: number): Ext$IContainer;

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static removeBeforeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Removes the given CSS class es from this Component s rendered element
     * @param cls String The class(es) to remove.
     * @param prefix String Optional prefix to prepend before each class.
     * @param suffix String Optional suffix to append to each class.
     */
    static removeCls(cls?: string, prefix?: string, suffix?: string): void;

    /**
     * [Method] Removes a docked item from this Container
     * @param item Object The item to remove.
     * @param destroy Boolean Calls the Component's destroy method if true.
     * @returns Ext.Component this
     */
    static removeDocked(item?: any, destroy?: boolean): Ext$IComponent;

    /**
     * [Method] Removes an inner Component at the specified index  myContainer removeInnerAt 0 removes the first item of the in
     * @param index Number The index of the Component to remove.
     * @returns Ext.Container this
     */
    static removeInnerAt(index?: number): Ext$IContainer;

    /**
     * [Method] Removes an event handler
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    static removeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    static removeManagedListener(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any
    ): void;

    /**
     * [Method] Replaces specified classes with the newly specified classes
     * @param oldCls String The class(es) to remove.
     * @param newCls String The class(es) to add.
     * @param prefix String Optional prefix to prepend before each class.
     * @param suffix String Optional suffix to append to each class.
     */
    static replaceCls(
      oldCls?: string,
      newCls?: string,
      prefix?: string,
      suffix?: string
    ): void;

    /**
     * [Method] Resets top right bottom and left configurations to null which will un float this component
     */
    static resetFloating(): void;

    /**
     * [Method] Resumes firing events see suspendEvents
     * @param discardQueuedEvents Boolean Pass as true to discard any queued events.
     */
    static resumeEvents(discardQueuedEvents?: boolean): void;

    /**
     * [Method] Sets the value of activeItem
     * @param activeItem Object/String/Number The new value.
     */
    static setActiveItem(activeItem?: any): void;

    /**
     * [Method] Sets the value of autoDestroy
     * @param autoDestroy Boolean The new value.
     */
    static setAutoDestroy(autoDestroy?: boolean): void;

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    static setBaseCls(baseCls?: string): void;

    /**
     * [Method] Sets the value of bodyBorder
     * @param bodyBorder Number/Boolean/String The new value.
     */
    static setBodyBorder(bodyBorder?: any): void;

    /**
     * [Method] Sets the value of bodyMargin
     * @param bodyMargin Number/Boolean/String The new value.
     */
    static setBodyMargin(bodyMargin?: any): void;

    /**
     * [Method] Sets the value of bodyPadding
     * @param bodyPadding Number/Boolean/String The new value.
     */
    static setBodyPadding(bodyPadding?: any): void;

    /**
     * [Method] Sets the value of border
     * @param border Number/String The new value.
     */
    static setBorder(border?: any): void;

    /**
     * [Method] Sets the value of bottom
     * @param bottom Number/String The new value.
     */
    static setBottom(bottom?: any): void;

    /**
     * [Method] Sets the value of bubbleEvents
     * @param bubbleEvents String/String[] The new value.
     */
    static setBubbleEvents(bubbleEvents?: any): void;

    /**
     * [Method] Sets the value of buttons
     * @param buttons Array/Object The new value.
     */
    static setButtons(buttons?: any): void;

    /**
     * [Method] Sets the value of centered
     * @param centered Boolean The new value.
     */
    static setCentered(centered?: boolean): void;

    /**
     * [Method] Sets the value of cls
     * @param cls String/String[] The new value.
     */
    static setCls(cls?: any): void;

    /**
     * [Method] Sets the value of contentEl
     * @param contentEl Ext.Element/HTMLElement/String The new value.
     */
    static setContentEl(contentEl?: any): void;

    /**
     * [Method] Sets the value of control
     * @param control Object The new value.
     */
    static setControl(control?: any): void;

    /**
     * [Method] Sets the value of data
     * @param data Object The new value.
     */
    static setData(data?: any): void;

    /**
     * [Method] Sets the value of defaultTextHeight
     * @param defaultTextHeight Number The new value.
     */
    static setDefaultTextHeight(defaultTextHeight?: number): void;

    /**
     * [Method] Sets the value of defaultType
     * @param defaultType String The new value.
     */
    static setDefaultType(defaultType?: string): void;

    /**
     * [Method] Sets the value of defaults
     * @param defaults Object The new value.
     */
    static setDefaults(defaults?: any): void;

    /**
     * [Method] Sets the value of disabled
     * @param disabled Boolean The new value.
     */
    static setDisabled(disabled?: boolean): void;

    /**
     * [Method] Sets the value of disabledCls
     * @param disabledCls String The new value.
     */
    static setDisabledCls(disabledCls?: string): void;

    /**
     * [Method] Sets the value of docked
     * @param docked String The new value.
     */
    static setDocked(docked?: string): void;

    /**
     * [Method] Sets the value of draggable
     * @param draggable Object The new value.
     */
    static setDraggable(draggable?: any): void;

    /**
     * [Method] Sets the value of enter
     * @param enter String The new value.
     */
    static setEnter(enter?: string): void;

    /**
     * [Method] Sets the value of enterAnimation
     * @param enterAnimation String/Mixed The new value.
     */
    static setEnterAnimation(enterAnimation?: any): void;

    /**
     * [Method] Sets the value of exit
     * @param exit String The new value.
     */
    static setExit(exit?: string): void;

    /**
     * [Method] Sets the value of exitAnimation
     * @param exitAnimation String/Mixed The new value.
     */
    static setExitAnimation(exitAnimation?: any): void;

    /**
     * [Method] Sets the value of flex
     * @param flex Number The new value.
     */
    static setFlex(flex?: number): void;

    /**
     * [Method] Used to update the floating state of this component
     * @param floating Boolean true if you want to float this component.
     */
    static setFloating(floating?: boolean): void;

    /**
     * [Method] Sets the value of floatingCls
     * @param floatingCls String The new value.
     */
    static setFloatingCls(floatingCls?: string): void;

    /**
     * [Method] Sets the value of height
     * @param height Number/String The new value.
     */
    static setHeight(height?: any): void;

    /**
     * [Method] Sets the value of hidden
     * @param hidden Boolean The new value.
     */
    static setHidden(hidden?: boolean): void;

    /**
     * [Method] Sets the value of hiddenCls
     * @param hiddenCls String The new value.
     */
    static setHiddenCls(hiddenCls?: string): void;

    /**
     * [Method] Sets the value of hideAnimation
     * @param hideAnimation Object The new value.
     */
    static setHideAnimation(hideAnimation?: any): void;

    /**
     * [Method] Sets the value of hideOnMaskTap
     * @param hideOnMaskTap Boolean The new value.
     */
    static setHideOnMaskTap(hideOnMaskTap?: boolean): void;

    /**
     * [Method] Sets the value of html
     * @param html String/Ext.Element/HTMLElement The new value.
     */
    static setHtml(html?: any): void;

    /**
     * [Method] Sets icon
     * @param iconCls String A CSS class name or empty string to clear the icon.
     * @returns Ext.MessageBox this
     */
    static setIcon(iconCls?: string): Ext$IMessageBox;

    /**
     * [Method] Sets the value of iconCls
     * @param iconCls String The new value.
     */
    static setIconCls(iconCls?: string): void;

    /**
     * [Method] Sets the value of itemId
     * @param itemId String The new value.
     */
    static setItemId(itemId?: string): void;

    /**
     * [Method] Sets the value of items
     * @param items Array/Object The new value.
     */
    static setItems(items?: any): void;

    /**
     * [Method] Sets the value of layout
     * @param layout Object The new value.
     */
    static setLayout(layout?: any): void;

    /**
     * [Method] Sets the value of left
     * @param left Number/String The new value.
     */
    static setLeft(left?: any): void;

    /**
     * [Method] Sets the value of listeners
     * @param listeners Object The new value.
     */
    static setListeners(listeners?: any): void;

    /**
     * [Method] Sets the value of margin
     * @param margin Number/String The new value.
     */
    static setMargin(margin?: any): void;

    /**
     * [Method] Sets the value of masked
     * @param masked Boolean/Object/Ext.Mask/Ext.LoadMask The new value.
     */
    static setMasked(masked?: any): void;

    /**
     * [Method] Sets the value of maxHeight
     * @param maxHeight Number/String The new value.
     */
    static setMaxHeight(maxHeight?: any): void;

    /**
     * [Method] Sets the value of maxWidth
     * @param maxWidth Number/String The new value.
     */
    static setMaxWidth(maxWidth?: any): void;

    /**
     * [Method] Sets the value of message
     * @param message String The new value.
     */
    static setMessage(message?: string): void;

    /**
     * [Method] Sets the value of minHeight
     * @param minHeight Number/String The new value.
     */
    static setMinHeight(minHeight?: any): void;

    /**
     * [Method] Sets the value of minWidth
     * @param minWidth Number/String The new value.
     */
    static setMinWidth(minWidth?: any): void;

    /**
     * [Method] Sets the value of padding
     * @param padding Number/String The new value.
     */
    static setPadding(padding?: any): void;

    /**
     * [Method] Sets the value of plugins
     * @param plugins Object/Array The new value.
     */
    static setPlugins(plugins?: any): void;

    /**
     * [Method] Sets the value of prompt
     * @param prompt Object The new value.
     */
    static setPrompt(prompt?: any): void;

    /**
     * [Method] Sets the value of record
     * @param record Ext.data.Model The new value.
     */
    static setRecord(record?: data$IModel): void;

    /**
     * [Method] Sets the value of renderTo
     * @param renderTo Ext.Element The new value.
     */
    static setRenderTo(renderTo?: Ext$IElement): void;

    /**
     * [Method] Sets the value of right
     * @param right Number/String The new value.
     */
    static setRight(right?: any): void;

    /**
     * [Method] Sets the value of scrollable
     * @param scrollable Boolean/String/Object The new value.
     * @returns Ext.scroll.View The scroll view.
     */
    static setScrollable(scrollable?: any): Ext$scroll$IView;

    /**
     * [Method] Sets the value of showAnimation
     * @param showAnimation Object The new value.
     */
    static setShowAnimation(showAnimation?: any): void;

    /**
     * [Method] Sets the size of the Component
     * @param width Number The new width for the Component.
     * @param height Number The new height for the Component.
     */
    static setSize(width?: number, height?: number): void;

    /**
     * [Method] Sets the value of stretchX
     * @param stretchX Boolean The new value.
     */
    static setStretchX(stretchX?: boolean): void;

    /**
     * [Method] Sets the value of stretchY
     * @param stretchY Boolean The new value.
     */
    static setStretchY(stretchY?: boolean): void;

    /**
     * [Method] Sets the value of style
     * @param style String/Object The new value.
     */
    static setStyle(style?: any): void;

    /**
     * [Method] Sets the value of styleHtmlCls
     * @param styleHtmlCls String The new value.
     */
    static setStyleHtmlCls(styleHtmlCls?: string): void;

    /**
     * [Method] Sets the value of styleHtmlContent
     * @param styleHtmlContent Boolean The new value.
     */
    static setStyleHtmlContent(styleHtmlContent?: boolean): void;

    /**
     * [Method] Sets the value of title
     * @param title String The new value.
     */
    static setTitle(title?: string): void;

    /**
     * [Method] Sets the value of top
     * @param top Number/String The new value.
     */
    static setTop(top?: any): void;

    /**
     * [Method] Sets the value of tpl
     * @param tpl String/String[]/Ext.Template/Ext.XTemplate[] The new value.
     */
    static setTpl(tpl?: any): void;

    /**
     * [Method] Sets the value of tplWriteMode
     * @param tplWriteMode String The new value.
     */
    static setTplWriteMode(tplWriteMode?: string): void;

    /**
     * [Method] Sets the value of ui
     * @param ui String The new value.
     */
    static setUi(ui?: string): void;

    /**
     * [Method] Sets the value of width
     * @param width Number/String The new value.
     */
    static setWidth(width?: any): void;

    /**
     * [Method] Sets the value of zIndex
     * @param zIndex Number The new value.
     */
    static setZIndex(zIndex?: number): void;

    /**
     * [Method] Displays the Ext MessageBox with a specified configuration
     * @param config Object An object with the following config options:
     * @returns Ext.MessageBox this
     */
    static show(config?: any): Ext$IMessageBox;

    /**
     * [Method] Shows this component by another component
     * @param component Ext.Component The target component to show this component by.
     * @param alignment String The specific alignment.
     */
    static showBy(component?: Ext$IComponent, alignment?: string): void;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;

    /**
     * [Method] Suspends the firing of all events
     */
    static suspendEvents(): void;

    /**
     * [Method] Alias for removeListener
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    static un(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Alias for removeAfterListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;

    /**
     * [Method] Alias for removeBeforeListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static unBefore(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Convenience method which calls setMasked with a value of false to hide the mask
     */
    static unmask(): void;

    /**
     * [Method] Walks up the ownerCt axis looking for an ancestor Container which matches the passed simple selector
     * @param selector String The simple selector to test.
     * @returns Ext.Container The matching ancestor Container (or undefined if no match was found).
     */
    static up(selector?: string): Ext$IContainer;

    /**
     * [Method] Updates the HTML content of the Component
     */
    static update(): void;

    /**
     * [Method] Updates the styleHtmlCls configuration
     * @param newHtmlCls Object
     * @param oldHtmlCls Object
     */
    static updateStyleHtmlCls(newHtmlCls?: any, oldHtmlCls?: any): void;

    /**
     * [Method] Sets the value of message
     * @param message String The new value.
     * @returns Ext.MessageBox this
     */
    static updateText(message?: string): Ext$IMessageBox;
  }

  declare export type Ext$navigation$IView = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    defaultBackButtonText?: string,

    /**
     * [Config Option] (Array/Object)
     */
    items?: any,

    /**
     * [Config Option] (Object)
     */
    layout?: any,

    /**
     * [Config Option] (Boolean/Object)
     */
    navigationBar?: any,

    /**
     * [Config Option] (Boolean)
     */
    useTitleForBackButtonText?: boolean,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of defaultBackButtonText
     * @returns String
     */
    getDefaultBackButtonText?: () => string,

    /**
     * [Method] Returns the value of items
     * @returns Array/Object
     */
    getItems?: () => any,

    /**
     * [Method] Returns the value of layout
     * @returns Object
     */
    getLayout?: () => any,

    /**
     * [Method] Returns the value of navigationBar
     * @returns Boolean/Object
     */
    getNavigationBar?: () => any,

    /**
     * [Method] Returns the previous item if one exists
     * @returns Mixed The previous view
     */
    getPreviousItem?: () => any,

    /**
     * [Method] Returns the value of useTitleForBackButtonText
     * @returns Boolean
     */
    getUseTitleForBackButtonText?: () => boolean,

    /**
     * [Method] Removes the current active view from the stack and sets the previous view using the default animation of this view
     * @param count Number/String/Object If a Number, the number of views you want to pop. If a String, the pops to a matching component query. If an Object, the pops to a matching view instance.
     * @returns Ext.Component The new active item
     */
    pop?: (count?: any) => Ext$IComponent,

    /**
     * [Method] Pushes a new view into this navigation view using the default animation that this view has
     * @param view Object The view to push.
     * @returns Ext.Component The new item you just pushed.
     */
    push?: (view?: any) => Ext$IComponent,

    /**
     * [Method] Resets the view by removing all items between the first and last item
     * @returns Ext.Component The view that is now active
     */
    reset?: () => Ext$IComponent,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of defaultBackButtonText
     * @param defaultBackButtonText String The new value.
     */
    setDefaultBackButtonText?: (defaultBackButtonText?: string) => void,

    /**
     * [Method] Sets the value of items
     * @param items Array/Object The new value.
     */
    setItems?: (items?: any) => void,

    /**
     * [Method] Sets the value of layout
     * @param layout Object The new value.
     */
    setLayout?: (layout?: any) => void,

    /**
     * [Method] Sets the value of navigationBar
     * @param navigationBar Boolean/Object The new value.
     */
    setNavigationBar?: (navigationBar?: any) => void,

    /**
     * [Method] Sets the value of useTitleForBackButtonText
     * @param useTitleForBackButtonText Boolean The new value.
     */
    setUseTitleForBackButtonText?: (useTitleForBackButtonText?: boolean) => void
  } & Ext$IContainer;

  declare export type Ext$INavigationView = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    defaultBackButtonText?: string,

    /**
     * [Config Option] (Array/Object)
     */
    items?: any,

    /**
     * [Config Option] (Object)
     */
    layout?: any,

    /**
     * [Config Option] (Boolean/Object)
     */
    navigationBar?: any,

    /**
     * [Config Option] (Boolean)
     */
    useTitleForBackButtonText?: boolean,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of defaultBackButtonText
     * @returns String
     */
    getDefaultBackButtonText?: () => string,

    /**
     * [Method] Returns the value of items
     * @returns Array/Object
     */
    getItems?: () => any,

    /**
     * [Method] Returns the value of layout
     * @returns Object
     */
    getLayout?: () => any,

    /**
     * [Method] Returns the value of navigationBar
     * @returns Boolean/Object
     */
    getNavigationBar?: () => any,

    /**
     * [Method] Returns the previous item if one exists
     * @returns Mixed The previous view
     */
    getPreviousItem?: () => any,

    /**
     * [Method] Returns the value of useTitleForBackButtonText
     * @returns Boolean
     */
    getUseTitleForBackButtonText?: () => boolean,

    /**
     * [Method] Removes the current active view from the stack and sets the previous view using the default animation of this view
     * @param count Number/String/Object If a Number, the number of views you want to pop. If a String, the pops to a matching component query. If an Object, the pops to a matching view instance.
     * @returns Ext.Component The new active item
     */
    pop?: (count?: any) => Ext$IComponent,

    /**
     * [Method] Pushes a new view into this navigation view using the default animation that this view has
     * @param view Object The view to push.
     * @returns Ext.Component The new item you just pushed.
     */
    push?: (view?: any) => Ext$IComponent,

    /**
     * [Method] Resets the view by removing all items between the first and last item
     * @returns Ext.Component The view that is now active
     */
    reset?: () => Ext$IComponent,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of defaultBackButtonText
     * @param defaultBackButtonText String The new value.
     */
    setDefaultBackButtonText?: (defaultBackButtonText?: string) => void,

    /**
     * [Method] Sets the value of items
     * @param items Array/Object The new value.
     */
    setItems?: (items?: any) => void,

    /**
     * [Method] Sets the value of layout
     * @param layout Object The new value.
     */
    setLayout?: (layout?: any) => void,

    /**
     * [Method] Sets the value of navigationBar
     * @param navigationBar Boolean/Object The new value.
     */
    setNavigationBar?: (navigationBar?: any) => void,

    /**
     * [Method] Sets the value of useTitleForBackButtonText
     * @param useTitleForBackButtonText Boolean The new value.
     */
    setUseTitleForBackButtonText?: (useTitleForBackButtonText?: boolean) => void
  } & Ext$IContainer;

  declare export interface Ext$INumber {}

  declare export class Ext$Number {
    /**
     * [Method] Checks whether or not the passed number is within a desired range
     * @param number Number The number to check
     * @param min Number The minimum number in the range
     * @param max Number The maximum number in the range
     * @returns Number The constrained value if outside the range, otherwise the current value
     */
    static constrain(number?: number, min?: number, max?: number): number;

    /**
     * [Method] Validate that a value is numeric and convert it to a number if necessary
     * @param value Object
     * @param defaultValue Number The value to return if the original value is non-numeric
     * @returns Number value, if numeric, defaultValue otherwise
     */
    static from(value?: any, defaultValue?: number): number;

    /**
     * [Method] Snaps the passed number between stopping points based upon a passed increment value
     * @param value Number The unsnapped value.
     * @param increment Number The increment by which the value must move.
     * @param minValue Number The minimum value to which the returned value must be constrained. Overrides the increment..
     * @param maxValue Number The maximum value to which the returned value must be constrained. Overrides the increment..
     * @returns Number The value of the nearest snap target.
     */
    static snap(
      value?: number,
      increment?: number,
      minValue?: number,
      maxValue?: number
    ): number;

    /**
     * [Method] Formats a number using fixed point notation
     * @param value Number The number to format
     * @param precision Number The number of digits to show after the decimal point
     */
    static toFixed(value?: number, precision?: number): void;
  }

  declare export interface Ext$IObject {}

  declare export class Ext$Object {
    /**
     * [Method] Returns a new object with the given object as the prototype chain
     * @param object Object The prototype chain for the new object.
     */
    static chain(object?: any): void;

    /**
     * [Method] Iterate through an object and invoke the given callback function for each iteration
     * @param object Object The object to iterate
     * @param fn Function The callback function.
     * @param scope Object The execution scope (this) of the callback function
     */
    static each(object?: any, fn?: any, scope?: any): void;

    /**
     * [Method] Converts a query string back into an object
     * @param queryString String The query string to decode.
     * @param recursive Boolean Whether or not to recursively decode the string. This format is supported by PHP / Ruby on Rails servers and similar.
     * @returns Object
     */
    static fromQueryString(queryString?: string, recursive?: boolean): any;

    /**
     * [Method] Returns the first matching key corresponding to the given value
     * @param object Object
     * @param value Object The value to find
     */
    static getKey(object?: any, value?: any): void;

    /**
     * [Method] Gets all keys of the given object as an array
     * @param object Object
     * @returns String[] An array of keys from the object.
     */
    static getKeys(object?: any): string[];

    /**
     * [Method] Gets the total number of this object s own properties
     * @param object Object
     * @returns Number size
     */
    static getSize(object?: any): number;

    /**
     * [Method] Gets all values of the given object as an array
     * @param object Object
     * @returns Array An array of values from the object.
     */
    static getValues(object?: any): any[];

    /**
     * [Method] Merges any number of objects recursively without referencing them or their children
     * @param source Object The first object into which to merge the others.
     * @param objs Object... One or more objects to be merged into the first.
     * @returns Object The object that is created as a result of merging all the objects passed in.
     */
    static merge(source: any, ...objs: any[]): any;

    /**
     * [Method]
     * @param source Object
     */
    static mergeIf(source?: any): void;

    /**
     * [Method] Convert a name  value pair to an array of objects with support for nested structures useful to construct query stri
     * @param name String
     * @param value Object
     * @param recursive Boolean true to recursively encode any sub-objects.
     * @returns Object[] Array of objects with name and value fields.
     */
    static toQueryObjects(
      name?: string,
      value?: any,
      recursive?: boolean
    ): any[];

    /**
     * [Method] Takes an object and converts it to an encoded query string
     * @param object Object The object to encode.
     * @param recursive Boolean Whether or not to interpret the object in recursive format. (PHP / Ruby on Rails servers and similar).
     * @returns String queryString
     */
    static toQueryString(object?: any, recursive?: boolean): string;
  }

  declare export type Ext$IOs = {} & undefined.IOS;

  declare export class Ext$Os {
    /**
     * [Property] (String)
     */
    static deviceType: string;

    /**
     * [Property] (String)
     */
    static name: string;

    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Property] (Ext.Version)
     */
    static Ext$version: Ext$IVersion;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] A hybrid property can be either accessed as a method call i e  if Ext os is Android
     * @param value String The OS name to check.
     * @returns Boolean
     */
    static is(value?: string): boolean;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;
  }

  declare export type Ext$IPanel = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Number/Boolean/String)
     */
    bodyBorder?: any,

    /**
     * [Config Option] (Number/Boolean/String)
     */
    bodyMargin?: any,

    /**
     * [Config Option] (Number/Boolean/String)
     */
    bodyPadding?: any,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of bodyBorder
     * @returns Number/Boolean/String
     */
    getBodyBorder?: () => any,

    /**
     * [Method] Returns the value of bodyMargin
     * @returns Number/Boolean/String
     */
    getBodyMargin?: () => any,

    /**
     * [Method] Returns the value of bodyPadding
     * @returns Number/Boolean/String
     */
    getBodyPadding?: () => any,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of bodyBorder
     * @param bodyBorder Number/Boolean/String The new value.
     */
    setBodyBorder?: (bodyBorder?: any) => void,

    /**
     * [Method] Sets the value of bodyMargin
     * @param bodyMargin Number/Boolean/String The new value.
     */
    setBodyMargin?: (bodyMargin?: any) => void,

    /**
     * [Method] Sets the value of bodyPadding
     * @param bodyPadding Number/Boolean/String The new value.
     */
    setBodyPadding?: (bodyPadding?: any) => void
  } & Ext$IContainer;

  declare export type Ext$picker$ISlot = {
    /**
     * [Config Option] (String)
     */
    align?: string,

    /**
     * [Config Option] (String)
     */
    displayField?: string,

    /**
     * [Config Option] (String)
     */
    itemTpl?: string,

    /**
     * [Config Option] (String)
     */
    name?: string,

    /**
     * [Config Option] (String)
     */
    title?: string,

    /**
     * [Config Option] (Number)
     */
    value?: number,

    /**
     * [Config Option] (String)
     */
    valueField?: string,

    /**
     * [Method] Looks at the data configuration and turns it into store
     * @param data Object
     * @returns Object
     */
    applyData?: (data?: any) => any,

    /**
     * [Method] Sets the title for this dataview by creating element
     * @param title String
     * @returns String
     */
    applyTitle?: (title?: string) => string,

    /**
     * [Method] Returns the value of align
     * @returns String
     */
    getAlign?: () => string,

    /**
     * [Method] Returns the value of displayField
     * @returns String
     */
    getDisplayField?: () => string,

    /**
     * [Method] Returns the value of name
     * @returns String
     */
    getName?: () => string,

    /**
     * [Method] Returns the value of title
     * @returns String
     */
    getTitle?: () => string,

    /**
     * [Method] Returns the value of valueField
     * @returns String
     */
    getValueField?: () => string,

    /**
     * [Method] Sets the value of align
     * @param align String The new value.
     */
    setAlign?: (align?: string) => void,

    /**
     * [Method] Sets the value of displayField
     * @param displayField String The new value.
     */
    setDisplayField?: (displayField?: string) => void,

    /**
     * [Method] Sets the value of itemTpl
     * @param itemTpl String The new value.
     */
    setItemTpl?: (itemTpl?: string) => void,

    /**
     * [Method] Sets the value of name
     * @param name String The new value.
     */
    setName?: (name?: string) => void,

    /**
     * [Method] Sets the value of title
     * @param title String The new value.
     */
    setTitle?: (title?: string) => void,

    /**
     * [Method] Sets the value of valueField
     * @param valueField String The new value.
     */
    setValueField?: (valueField?: string) => void,

    /**
     * [Method] Updates the align configuration
     * @param newAlign Object
     * @param oldAlign Object
     */
    updateAlign?: (newAlign?: any, oldAlign?: any) => void
  } & undefined.IDataView;

  declare export type Ext$IDatePicker = {
    /**
     * [Config Option] (String)
     */
    dayText?: string,

    /**
     * [Config Option] (String/Mixed)
     */
    doneButton?: any,

    /**
     * [Config Option] (String)
     */
    monthText?: string,

    /**
     * [Config Option] (Array)
     */
    slotOrder?: any[],

    /**
     * [Config Option] (Object/Date)
     */
    value?: any,

    /**
     * [Config Option] (Number)
     */
    yearFrom?: number,

    /**
     * [Config Option] (String)
     */
    yearText?: string,

    /**
     * [Config Option] (Number)
     */
    yearTo?: number,

    /**
     * [Method] Returns the value of dayText
     * @returns String
     */
    getDayText?: () => string,

    /**
     * [Method] Returns the value of doneButton
     * @returns String/Mixed
     */
    getDoneButton?: () => any,

    /**
     * [Method] Returns the value of monthText
     * @returns String
     */
    getMonthText?: () => string,

    /**
     * [Method] Returns the value of slotOrder
     * @returns Array
     */
    getSlotOrder?: () => any[],

    /**
     * [Method] Returns the values of each of the pickers slots
     * @param useDom Object
     * @returns Object The values of the pickers slots
     */
    getValue?: (useDom?: any) => any,

    /**
     * [Method] Returns the value of yearFrom
     * @returns Number
     */
    getYearFrom?: () => number,

    /**
     * [Method] Returns the value of yearText
     * @returns String
     */
    getYearText?: () => string,

    /**
     * [Method] Returns the value of yearTo
     * @returns Number
     */
    getYearTo?: () => number,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Sets the value of dayText
     * @param dayText String The new value.
     */
    setDayText?: (dayText?: string) => void,

    /**
     * [Method] Sets the value of doneButton
     * @param doneButton String/Mixed The new value.
     */
    setDoneButton?: (doneButton?: any) => void,

    /**
     * [Method] Sets the value of monthText
     * @param monthText String The new value.
     */
    setMonthText?: (monthText?: string) => void,

    /**
     * [Method] Sets the value of slotOrder
     * @param slotOrder Array The new value.
     */
    setSlotOrder?: (slotOrder?: any[]) => void,

    /**
     * [Method] Sets the values of the pickers slots
     * @param value Object
     * @param animated Object
     * @returns Ext.Picker this This picker.
     */
    setValue?: (value?: any, animated?: any) => Ext$IPicker,

    /**
     * [Method] Sets the value of yearFrom
     * @param yearFrom Number The new value.
     */
    setYearFrom?: (yearFrom?: number) => void,

    /**
     * [Method] Sets the value of yearText
     * @param yearText String The new value.
     */
    setYearText?: (yearText?: string) => void,

    /**
     * [Method] Sets the value of yearTo
     * @param yearTo Number The new value.
     */
    setYearTo?: (yearTo?: number) => void,

    /**
     * [Method] Updates the dayText configuration
     * @param newDayText Object
     * @param oldDayText Object
     */
    updateDayText?: (newDayText?: any, oldDayText?: any) => void,

    /**
     * [Method] Updates the monthText configuration
     * @param newMonthText Object
     * @param oldMonthText Object
     */
    updateMonthText?: (newMonthText?: any, oldMonthText?: any) => void,

    /**
     * [Method] Updates the yearFrom configuration
     */
    updateYearFrom?: () => void,

    /**
     * [Method] Updates the yearText configuration
     * @param yearText Object
     */
    updateYearText?: (yearText?: any) => void,

    /**
     * [Method] Updates the yearTo configuration
     */
    updateYearTo?: () => void
  } & undefined.IPicker;

  declare export type Ext$IPicker = {
    /**
     * [Config Option] (String)
     */
    activeCls?: string,

    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Number/String)
     */
    bottom?: any,

    /**
     * [Config Option] (String/Mixed)
     */
    cancelButton?: any,

    /**
     * [Config Option] (String/Mixed)
     */
    doneButton?: any,

    /**
     * [Config Option] (Number)
     */
    height?: number,

    /**
     * [Config Option] (Object/String)
     */
    layout?: any,

    /**
     * [Config Option] (Number/String)
     */
    left?: any,

    /**
     * [Config Option] (Number/String)
     */
    right?: any,

    /**
     * [Config Option] (Array)
     */
    slots?: any[],

    /**
     * [Config Option] (Ext.TitleBar/Ext.Toolbar/Object)
     */
    toolbar?: any,

    /**
     * [Config Option] (Boolean)
     */
    useTitles?: boolean,

    /**
     * [Config Option] (String/Number)
     */
    value?: any,

    /**
     * [Method] Updates the cancelButton configuration
     * @param config Object
     * @returns Object
     */
    applyCancelButton?: (config?: any) => any,

    /**
     * [Method] Updates the doneButton configuration
     * @param config Object
     * @returns Object
     */
    applyDoneButton?: (config?: any) => any,

    /**
     * [Method]
     */
    destroy?: () => void,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of bottom
     * @returns Number
     */
    getBottom?: () => number,

    /**
     * [Method] Returns the value of cancelButton
     * @returns String/Mixed
     */
    getCancelButton?: () => any,

    /**
     * [Method] Returns the value of activeItem
     * @returns Object/String/Number
     */
    getCard?: () => any,

    /**
     * [Method] Returns the value of doneButton
     * @returns String/Mixed
     */
    getDoneButton?: () => any,

    /**
     * [Method] Returns the value of layout
     * @returns Object
     */
    getLayout?: () => any,

    /**
     * [Method] Returns the value of slots
     * @returns Array
     */
    getSlots?: () => any[],

    /**
     * [Method] Returns the value of toolbar
     * @returns Ext.TitleBar/Ext.Toolbar/Object
     */
    getToolbar?: () => any,

    /**
     * [Method] Returns the value of toolbarPosition
     * @returns String
     */
    getToolbarPosition?: () => string,

    /**
     * [Method] Returns the value of useTitles
     * @returns Boolean
     */
    getUseTitles?: () => boolean,

    /**
     * [Method] Returns the values of each of the pickers slots
     * @param useDom Object
     * @returns Object The values of the pickers slots
     */
    getValue?: (useDom?: any) => any,

    /**
     * [Method] Returns the values of each of the pickers slots
     * @returns Object The values of the pickers slots.
     */
    getValues?: () => any,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of bottom
     * @param bottom Number The new value.
     */
    setBottom?: (bottom?: number) => void,

    /**
     * [Method] Sets the value of cancelButton
     * @param cancelButton String/Mixed The new value.
     */
    setCancelButton?: (cancelButton?: any) => void,

    /**
     * [Method] Sets the value of activeItem
     * @param activeItem Object/String/Number The new value.
     */
    setCard?: (activeItem?: any) => void,

    /**
     * [Method] Sets the value of doneButton
     * @param doneButton String/Mixed The new value.
     */
    setDoneButton?: (doneButton?: any) => void,

    /**
     * [Method] Sets the value of height
     * @param height Number The new value.
     */
    setHeight?: (height?: number) => void,

    /**
     * [Method] Sets the value of layout
     * @param layout Object The new value.
     */
    setLayout?: (layout?: any) => void,

    /**
     * [Method] Sets the value of left
     * @param left Number The new value.
     */
    setLeft?: (left?: number) => void,

    /**
     * [Method] Sets the value of right
     * @param right Number The new value.
     */
    setRight?: (right?: number) => void,

    /**
     * [Method] Sets the value of slots
     * @param slots Array The new value.
     */
    setSlots?: (slots?: any[]) => void,

    /**
     * [Method] Sets the value of toolbar
     * @param toolbar Ext.TitleBar/Ext.Toolbar/Object The new value.
     */
    setToolbar?: (toolbar?: any) => void,

    /**
     * [Method] Sets the value of toolbarPosition
     * @param toolbarPosition String The new value.
     */
    setToolbarPosition?: (toolbarPosition?: string) => void,

    /**
     * [Method] Sets the value of useTitles
     * @param useTitles Boolean The new value.
     */
    setUseTitles?: (useTitles?: boolean) => void,

    /**
     * [Method] Sets the values of the pickers slots
     * @param values Object The values in a {name:'value'} format.
     * @param animated Boolean true to animate setting the values.
     * @returns Ext.Picker this This picker.
     */
    setValue?: (values?: any, animated?: boolean) => Ext$IPicker,

    /**
     * [Method] Shows this component optionally using an animation
     * @returns Ext.Component
     */
    show?: () => Ext$IComponent
  } & Ext$ISheet;

  declare export type Ext$plugin$ISortableList = {
    /**
     * [Method] Returns the value of handleSelector
     * @returns String
     */
    getHandleSelector?: () => string,

    /**
     * [Method] Returns the value of list
     * @returns Object
     */
    getList?: () => any,

    /**
     * [Method] Sets the value of handleSelector
     * @param handleSelector String The new value.
     */
    setHandleSelector?: (handleSelector?: string) => void,

    /**
     * [Method] Sets the value of list
     * @param list Object The new value.
     */
    setList?: (list?: any) => void
  } & Ext$IComponent &
    undefined.IBindable;

  declare export type Ext$IProgressIndicator = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Boolean)
     */
    centered?: boolean,

    /**
     * [Config Option] (String/Object)
     */
    fallbackText?: any,

    /**
     * [Config Option] (Boolean)
     */
    hidden?: boolean,

    /**
     * [Config Option] (String/Mixed)
     */
    hideAnimation?: any,

    /**
     * [Config Option] (String/Ext.XTemplate/Object)
     */
    loadingText?: any,

    /**
     * [Config Option] (Boolean)
     */
    modal?: boolean,

    /**
     * [Config Option] (Object)
     */
    monitoredStates?: any,

    /**
     * [Config Option] (String/Mixed)
     */
    showAnimation?: any,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of centered
     * @returns Boolean
     */
    getCentered?: () => boolean,

    /**
     * [Method] Returns the value of dynamic
     * @returns Boolean
     */
    getDynamic?: () => boolean,

    /**
     * [Method] Returns the value of hidden
     * @returns Boolean
     */
    getHidden?: () => boolean,

    /**
     * [Method] Returns the value of hideAnimation
     * @returns Object
     */
    getHideAnimation?: () => any,

    /**
     * [Method] Returns the value of maxProgressInput
     * @returns Number
     */
    getMaxProgressInput?: () => number,

    /**
     * [Method] Returns the value of minProgressInput
     * @returns Number
     */
    getMinProgressInput?: () => number,

    /**
     * [Method] Returns the value of modal
     * @returns Boolean
     */
    getModal?: () => boolean,

    /**
     * [Method] Returns the value of monitoredStates
     * @returns Object
     */
    getMonitoredStates?: () => any,

    /**
     * [Method] Returns the value of showAnimation
     * @returns Object
     */
    getShowAnimation?: () => any,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of centered
     * @param centered Boolean The new value.
     */
    setCentered?: (centered?: boolean) => void,

    /**
     * [Method] Sets the value of dynamic
     * @param dynamic Boolean The new value.
     */
    setDynamic?: (dynamic?: boolean) => void,

    /**
     * [Method] Sets the value of fallbackText
     * @param fallbackText String/Object The new value.
     */
    setFallbackText?: (fallbackText?: any) => void,

    /**
     * [Method] Sets the value of hidden
     * @param hidden Boolean The new value.
     */
    setHidden?: (hidden?: boolean) => void,

    /**
     * [Method] Sets the value of hideAnimation
     * @param hideAnimation Object The new value.
     */
    setHideAnimation?: (hideAnimation?: any) => void,

    /**
     * [Method] Sets the value of loadingText
     * @param loadingText String/Ext.XTemplate/Object The new value.
     */
    setLoadingText?: (loadingText?: any) => void,

    /**
     * [Method] Sets the value of maxProgressInput
     * @param maxProgressInput Number The new value.
     */
    setMaxProgressInput?: (maxProgressInput?: number) => void,

    /**
     * [Method] Sets the value of minProgressInput
     * @param minProgressInput Number The new value.
     */
    setMinProgressInput?: (minProgressInput?: number) => void,

    /**
     * [Method] Sets the value of modal
     * @param modal Boolean The new value.
     */
    setModal?: (modal?: boolean) => void,

    /**
     * [Method] Sets the value of monitoredStates
     * @param monitoredStates Object The new value.
     */
    setMonitoredStates?: (monitoredStates?: any) => void,

    /**
     * [Method] Sets the value of showAnimation
     * @param showAnimation Object The new value.
     */
    setShowAnimation?: (showAnimation?: any) => void
  } & Ext$IContainer &
    undefined.IProgressable;

  declare export type Ext$IPromise = {} & Ext$IBase;

  declare export interface Ext$IRouter {}

  declare export class Ext$Router {
    /**
     * [Method] Application s onDependenciesLoaded has a deprecated wrapped line that calls this
     * @param app Object
     */
    static setAppInstance(app?: any): void;
  }

  declare export type Ext$scroll$IView = {
    /**
     * [Config Option] (String)
     */
    indicatorsUi?: string,

    /**
     * [Method]
     */
    destroy?: () => void,

    /**
     * [Method] Returns the value of cls
     * @returns String
     */
    getCls?: () => string,

    /**
     * [Method] Returns the value of element
     * @returns Object
     */
    getElement?: () => any,

    /**
     * [Method] Returns the value of indicators
     * @returns Object
     */
    getIndicators?: () => any,

    /**
     * [Method] Returns the value of indicatorsHidingDelay
     * @returns Number
     */
    getIndicatorsHidingDelay?: () => number,

    /**
     * [Method] Returns the value of indicatorsUi
     * @returns String
     */
    getIndicatorsUi?: () => string,

    /**
     * [Method] Returns the scroller instance in this view
     * @returns Ext.scroll.View The scroller
     */
    getScroller?: () => Ext$scroll$IView,

    /**
     * [Method] Sets the value of cls
     * @param cls String The new value.
     */
    setCls?: (cls?: string) => void,

    /**
     * [Method] Sets the value of element
     * @param element Object The new value.
     */
    setElement?: (element?: any) => void,

    /**
     * [Method] Sets the value of indicators
     * @param indicators Object The new value.
     */
    setIndicators?: (indicators?: any) => void,

    /**
     * [Method] Sets the value of indicatorsHidingDelay
     * @param indicatorsHidingDelay Number The new value.
     */
    setIndicatorsHidingDelay?: (indicatorsHidingDelay?: number) => void,

    /**
     * [Method] Sets the value of indicatorsUi
     * @param indicatorsUi String The new value.
     */
    setIndicatorsUi?: (indicatorsUi?: string) => void,

    /**
     * [Method] Sets the value of scroller
     * @param scroller Object The new value.
     */
    setScroller?: (scroller?: any) => void
  } & Ext$IEvented;

  declare export type Ext$ISegmentedButton = {
    /**
     * [Config Option] (Boolean)
     */
    allowDepress?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    allowMultiple?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    allowToggle?: boolean,

    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    defaultType?: string,

    /**
     * [Config Option] (Object/String)
     */
    layout?: any,

    /**
     * [Config Option] (Array)
     */
    pressedButtons?: any[],

    /**
     * [Config Option] (String)
     */
    pressedCls?: string,

    /**
     * [Method] We override initItems so we can check for the pressed config
     */
    applyItems?: () => void,

    /**
     * [Method] Returns the value of allowDepress
     * @returns Boolean
     */
    getAllowDepress?: () => boolean,

    /**
     * [Method] Returns the value of allowMultiple
     * @returns Boolean
     */
    getAllowMultiple?: () => boolean,

    /**
     * [Method] Returns the value of allowToggle
     * @returns Boolean
     */
    getAllowToggle?: () => boolean,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of defaultType
     * @returns String
     */
    getDefaultType?: () => string,

    /**
     * [Method] Returns the value of layout
     * @returns Object
     */
    getLayout?: () => any,

    /**
     * [Method] Gets the currently pressed button s
     */
    getPressed?: () => void,

    /**
     * [Method] Returns the value of pressedButtons
     * @returns Array
     */
    getPressedButtons?: () => any[],

    /**
     * [Method] Returns the value of pressedCls
     * @returns String
     */
    getPressedCls?: () => string,

    /**
     * [Method] Returns true if a specified Ext Button is pressed
     * @param button Ext.Button The button to check if pressed.
     * @returns Boolean pressed
     */
    isPressed?: (button?: Ext$IButton) => boolean,

    /**
     * [Method] Sets the value of allowDepress
     * @param allowDepress Boolean The new value.
     */
    setAllowDepress?: (allowDepress?: boolean) => void,

    /**
     * [Method] Sets the value of allowMultiple
     * @param allowMultiple Boolean The new value.
     */
    setAllowMultiple?: (allowMultiple?: boolean) => void,

    /**
     * [Method] Sets the value of allowToggle
     * @param allowToggle Boolean The new value.
     */
    setAllowToggle?: (allowToggle?: boolean) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of defaultType
     * @param defaultType String The new value.
     */
    setDefaultType?: (defaultType?: string) => void,

    /**
     * [Method] Sets the value of layout
     * @param layout Object The new value.
     */
    setLayout?: (layout?: any) => void,

    /**
     * [Method] Activates a button
     * @param button Number/String/Ext.Button The button to activate.
     * @param pressed Boolean If defined, sets the pressed state of the button, otherwise the pressed state is toggled.
     * @param suppressEvents Boolean true to suppress toggle events during the action. If allowMultiple is true, then setPressed will toggle the button state.
     */
    setPressed?: (
      button?: any,
      pressed?: boolean,
      suppressEvents?: boolean
    ) => void,

    /**
     * [Method] Sets the value of pressedButtons
     * @param pressedButtons Array The new value.
     */
    setPressedButtons?: (pressedButtons?: any[]) => void,

    /**
     * [Method] Sets the value of pressedCls
     * @param pressedCls String The new value.
     */
    setPressedCls?: (pressedCls?: string) => void
  } & Ext$IContainer;

  declare export type Ext$ISheet = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (Boolean)
     */
    centered?: boolean,

    /**
     * [Config Option] (String)
     */
    enter?: string,

    /**
     * [Config Option] (String)
     */
    exit?: string,

    /**
     * [Config Option] (String/Mixed)
     */
    hideAnimation?: any,

    /**
     * [Config Option] (Boolean)
     */
    modal?: boolean,

    /**
     * [Config Option] (String/Mixed)
     */
    showAnimation?: any,

    /**
     * [Config Option] (Boolean)
     */
    stretchX?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    stretchY?: boolean,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of centered
     * @returns Boolean
     */
    getCentered?: () => boolean,

    /**
     * [Method] Returns the value of enter
     * @returns String
     */
    getEnter?: () => string,

    /**
     * [Method] Returns the value of exit
     * @returns String
     */
    getExit?: () => string,

    /**
     * [Method] Returns the value of modal
     * @returns Boolean
     */
    getModal?: () => boolean,

    /**
     * [Method] Returns the value of stretchX
     * @returns Boolean
     */
    getStretchX?: () => boolean,

    /**
     * [Method] Returns the value of stretchY
     * @returns Boolean
     */
    getStretchY?: () => boolean,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of centered
     * @param centered Boolean The new value.
     */
    setCentered?: (centered?: boolean) => void,

    /**
     * [Method] Sets the value of enter
     * @param enter String The new value.
     */
    setEnter?: (enter?: string) => void,

    /**
     * [Method] Sets the value of exit
     * @param exit String The new value.
     */
    setExit?: (exit?: string) => void,

    /**
     * [Method] Sets the value of hideAnimation
     * @param hideAnimation Object The new value.
     */
    setHideAnimation?: (hideAnimation?: any) => void,

    /**
     * [Method] Sets the value of modal
     * @param modal Boolean The new value.
     */
    setModal?: (modal?: boolean) => void,

    /**
     * [Method] Sets the value of showAnimation
     * @param showAnimation Object The new value.
     */
    setShowAnimation?: (showAnimation?: any) => void,

    /**
     * [Method] Sets the value of stretchX
     * @param stretchX Boolean The new value.
     */
    setStretchX?: (stretchX?: boolean) => void,

    /**
     * [Method] Sets the value of stretchY
     * @param stretchY Boolean The new value.
     */
    setStretchY?: (stretchY?: boolean) => void
  } & Ext$IPanel;

  declare export type Ext$slider$IToggle = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    maxValueCls?: string,

    /**
     * [Config Option] (String)
     */
    minValueCls?: string,

    /**
     * [Method] Sets the increment configuration
     * @returns Number
     */
    applyIncrement?: () => number,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of maxValueCls
     * @returns String
     */
    getMaxValueCls?: () => string,

    /**
     * [Method] Returns the value of minValueCls
     * @returns String
     */
    getMinValueCls?: () => string,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of maxValueCls
     * @param maxValueCls String The new value.
     */
    setMaxValueCls?: (maxValueCls?: string) => void,

    /**
     * [Method] Sets the value of minValueCls
     * @param minValueCls String The new value.
     */
    setMinValueCls?: (minValueCls?: string) => void,

    /**
     * [Method] Sets the value of value
     * @param newValue Object
     * @param oldValue Object
     */
    setValue?: (newValue?: any, oldValue?: any) => void
  } & undefined.ISlider;

  declare export type Ext$ISpacer = {
    /**
     * [Config Option] (Number)
     */
    flex?: number,

    /**
     * [Config Option] (Number)
     */
    width?: number,

    /**
     * [Method] Returns the value of flex
     * @returns Number
     */
    getFlex?: () => number,

    /**
     * [Method] Sets the value of flex
     * @param flex Number The new value.
     */
    setFlex?: (flex?: number) => void,

    /**
     * [Method] Sets the value of width
     * @param width Number The new value.
     */
    setWidth?: (width?: number) => void
  } & Ext$IComponent;

  declare export interface Ext$IString {}

  declare export class Ext$String {
    /**
     * [Method] Capitalize the given string
     * @param string String
     * @returns String
     */
    static capitalize(string?: string): string;

    /**
     * [Method] Truncate a string and add an ellipsis  to the end if it exceeds the specified length
     * @param value String The string to truncate.
     * @param length Number The maximum length to allow before truncating.
     * @param word Boolean true to try to find a common word break.
     * @returns String The converted text.
     */
    static ellipsis(value?: string, length?: number, word?: boolean): string;

    /**
     * [Method] Escapes the passed string for  and
     * @param string String The string to escape.
     * @returns String The escaped string.
     */
    static escape(string?: string): string;

    /**
     * [Method] Escapes the passed string for use in a regular expression
     * @param string String
     * @returns String
     */
    static escapeRegex(string?: string): string;

    /**
     * [Method] Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens
     * @param string String The tokenized string to be formatted.
     * @param values String... First param value to replace token {0}, then next param to replace {1} etc.
     * @returns String The formatted string.
     */
    static format(string: string, ...values: any[]): string;

    /**
     * [Method] Convert certain characters  amp lt and from their HTML character equivalents
     * @param value String The string to decode.
     * @returns String The decoded text.
     */
    static htmlDecode(value?: string): string;

    /**
     * [Method] Convert certain characters  amp lt and to their HTML character equivalents for literal display in web pages
     * @param value String The string to encode.
     * @returns String The encoded text.
     */
    static htmlEncode(value?: string): string;

    /**
     * [Method] Pads the left side of a string with a specified character
     * @param string String The original string.
     * @param size Number The total length of the output string.
     * @param character String The character with which to pad the original string (defaults to empty string " ").
     * @returns String The padded string.
     */
    static leftPad(string?: string, size?: number, character?: string): string;

    /**
     * [Method] Returns a string with a specified number of repetitions a given string pattern
     * @param pattern String The pattern to repeat.
     * @param count Number The number of times to repeat the pattern (may be 0).
     * @param sep String An option string to separate each pattern.
     */
    static repeat(pattern?: string, count?: number, sep?: string): void;

    /**
     * [Method] Utility function that allows you to easily switch a string between two alternating values
     * @param string String The current string.
     * @param value String The value to compare to the current string.
     * @param other String The new value to use if the string already equals the first value passed in.
     * @returns String The new value.
     */
    static toggle(string?: string, value?: string, other?: string): string;

    /**
     * [Method] Trims whitespace from either end of a string leaving spaces within the string intact
     * @param string String The string to escape
     * @returns String The trimmed string
     */
    static trim(string?: string): string;

    /**
     * [Method] Appends content to the query string of a URL handling logic for whether to place a question mark or ampersand
     * @param url String The URL to append to.
     * @param string String The content to append to the URL.
     * @returns String The resulting URL.
     */
    static urlAppend(url?: string, string?: string): string;
  }

  declare export interface Ext$ISupports {
    /**
     * [Property] (Object)
     */
    AudioTag?: any;

    /**
     * [Property] (Object)
     */
    GeoLocation?: any;

    /**
     * [Property] (Object)
     */
    SVG?: any;

    /**
     * [Property] (Object)
     */
    Transitions?: any;

    /**
     * [Property] (Object)
     */
    VML?: any;
  }

  declare export type Ext$tab$ITab = {
    /**
     * [Config Option] (Boolean)
     */
    active?: boolean,

    /**
     * [Config Option] (String)
     */
    activeCls?: string,

    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    pressedCls?: string,

    /**
     * [Config Option] (String)
     */
    title?: string,

    /**
     * [Method] Returns the value of active
     * @returns Boolean
     */
    getActive?: () => boolean,

    /**
     * [Method] Returns the value of activeCls
     * @returns String
     */
    getActiveCls?: () => string,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of pressedCls
     * @returns String
     */
    getPressedCls?: () => string,

    /**
     * [Method] Returns the value of title
     * @returns String
     */
    getTitle?: () => string,

    /**
     * [Method] Sets the value of active
     * @param active Boolean The new value.
     */
    setActive?: (active?: boolean) => void,

    /**
     * [Method] Sets the value of activeCls
     * @param activeCls String The new value.
     */
    setActiveCls?: (activeCls?: string) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of pressedCls
     * @param pressedCls String The new value.
     */
    setPressedCls?: (pressedCls?: string) => void,

    /**
     * [Method] Sets the value of title
     * @param title String The new value.
     */
    setTitle?: (title?: string) => void
  } & Ext$IButton;

  declare export type Ext$ITabBar = {
    /**
     * [Config Option] (Number/String/Ext.Component)
     */
    activeTab?: any,

    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Method] Returns the value of activeTab
     * @returns Number/String/Ext.Component
     */
    getActiveTab?: () => any,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Sets the value of activeTab
     * @param activeTab Number/String/Ext.Component The new value.
     */
    setActiveTab?: (activeTab?: any) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void
  } & Ext$IToolbar;

  declare export type Ext$ITabPanel = {
    /**
     * [Config Option] (String/String[])
     */
    cls?: any,

    /**
     * [Config Option] (Object/String)
     */
    layout?: any,

    /**
     * [Config Option] (Object)
     */
    tabBar?: any,

    /**
     * [Config Option] (Boolean)
     */
    tabBarDock?: boolean,

    /**
     * [Config Option] (String)
     */
    tabBarPosition?: string,

    /**
     * [Config Option] (String)
     */
    ui?: string,

    /**
     * [Method] Updates this container with the new active item
     * @param tabBar Object
     * @param newTab Object
     * @returns Boolean
     */
    doTabChange?: (tabBar?: any, newTab?: any) => boolean,

    /**
     * [Method] Returns the value of cls
     * @returns String
     */
    getCls?: () => string,

    /**
     * [Method] Returns the value of layout
     * @returns Object
     */
    getLayout?: () => any,

    /**
     * [Method] Returns the value of tabBar
     * @returns Object
     */
    getTabBar?: () => any,

    /**
     * [Method] Returns the value of tabBarPosition
     * @returns String
     */
    getTabBarPosition?: () => string,

    /**
     * [Method] Returns the value of ui
     * @returns String
     */
    getUi?: () => string,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Sets the value of cls
     * @param cls String The new value.
     */
    setCls?: (cls?: string) => void,

    /**
     * [Method] Sets the value of layout
     * @param layout Object The new value.
     */
    setLayout?: (layout?: any) => void,

    /**
     * [Method] Sets the value of tabBar
     * @param tabBar Object The new value.
     */
    setTabBar?: (tabBar?: any) => void,

    /**
     * [Method] Sets the value of tabBarPosition
     * @param tabBarPosition String The new value.
     */
    setTabBarPosition?: (tabBarPosition?: string) => void,

    /**
     * [Method] Sets the value of ui
     * @param ui String The new value.
     */
    setUi?: (ui?: string) => void,

    /**
     * [Method] Updates the Ui for this component and the tabBar
     * @param newUi Object
     * @param oldUi Object
     */
    updateUi?: (newUi?: any, oldUi?: any) => void
  } & Ext$IContainer;

  declare export type Ext$ITab = {
    /**
     * [Config Option] (Boolean)
     */
    active?: boolean,

    /**
     * [Config Option] (String)
     */
    activeCls?: string,

    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    pressedCls?: string,

    /**
     * [Config Option] (String)
     */
    title?: string,

    /**
     * [Method] Returns the value of active
     * @returns Boolean
     */
    getActive?: () => boolean,

    /**
     * [Method] Returns the value of activeCls
     * @returns String
     */
    getActiveCls?: () => string,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of pressedCls
     * @returns String
     */
    getPressedCls?: () => string,

    /**
     * [Method] Returns the value of title
     * @returns String
     */
    getTitle?: () => string,

    /**
     * [Method] Sets the value of active
     * @param active Boolean The new value.
     */
    setActive?: (active?: boolean) => void,

    /**
     * [Method] Sets the value of activeCls
     * @param activeCls String The new value.
     */
    setActiveCls?: (activeCls?: string) => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of pressedCls
     * @param pressedCls String The new value.
     */
    setPressedCls?: (pressedCls?: string) => void,

    /**
     * [Method] Sets the value of title
     * @param title String The new value.
     */
    setTitle?: (title?: string) => void
  } & Ext$IButton;

  declare export type Ext$ITaskQueue = {} & Ext$IBase;

  declare export class Ext$TaskQueue {
    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;
  }

  declare export type Ext$ITemplate = {
    /**
     * [Config Option] (Boolean)
     */
    compiled?: boolean,

    /**
     * [Config Option] (Boolean)
     */
    disableFormats?: boolean,

    /**
     * [Property] (Boolean)
     */
    isTemplate?: boolean,

    /**
     * [Method] Applies the supplied values to the template and appends the new node s to the specified el
     * @param el String/HTMLElement/Ext.Element The context element.
     * @param values Object/Array The template values. See applyTemplate for details.
     * @param returnElement Boolean true to return an Ext.Element.
     * @returns HTMLElement/Ext.Element The new node or Element.
     */
    append?: (el?: any, values?: any, returnElement?: boolean) => any,

    /**
     * [Method] Returns an HTML fragment of this template with the specified values applied
     * @param values Object/Array The template values. Can be an array if your params are numeric:  var tpl = new Ext.Template('Name: {0}, Age: {1}'); tpl.apply(['John', 25]); or an object:  var tpl = new Ext.Template('Name: {name}, Age: {age}'); tpl.apply({name: 'John', age: 25});
     * @returns String The HTML fragment.
     */
    apply?: (values?: any) => string,

    /**
     * [Method] Appends the result of this template to the provided output array
     * @param values Object/Array The template values. See apply.
     * @param out Array The array to which output is pushed.
     * @returns Array The given out array.
     */
    applyOut?: (values?: any, out?: any[]) => any[],

    /**
     * [Method] Alias for apply
     * @param values Object/Array The template values. Can be an array if your params are numeric:  var tpl = new Ext.Template('Name: {0}, Age: {1}'); tpl.apply(['John', 25]); or an object:  var tpl = new Ext.Template('Name: {name}, Age: {age}'); tpl.apply({name: 'John', age: 25});
     * @returns String The HTML fragment.
     */
    applyTemplate?: (values?: any) => string,

    /**
     * [Method] Compiles the template into an internal function eliminating the RegEx overhead
     * @returns Ext.Template this
     */
    compile?: () => Ext$ITemplate,

    /**
     * [Method] Applies the supplied values to the template and inserts the new node s after el
     * @param el String/HTMLElement/Ext.Element The context element.
     * @param values Object/Array The template values. See applyTemplate for details.
     * @param returnElement Boolean true to return a Ext.Element.
     * @returns HTMLElement/Ext.Element The new node or Element.
     */
    insertAfter?: (el?: any, values?: any, returnElement?: boolean) => any,

    /**
     * [Method] Applies the supplied values to the template and inserts the new node s before el
     * @param el String/HTMLElement/Ext.Element The context element.
     * @param values Object/Array The template values. See applyTemplate for details.
     * @param returnElement Boolean true to return an Ext.Element.
     * @returns HTMLElement/Ext.Element The new node or Element
     */
    insertBefore?: (el?: any, values?: any, returnElement?: boolean) => any,

    /**
     * [Method] Applies the supplied values to the template and inserts the new node s as the first child of el
     * @param el String/HTMLElement/Ext.Element The context element.
     * @param values Object/Array The template values. See applyTemplate for details.
     * @param returnElement Boolean true to return a Ext.Element.
     * @returns HTMLElement/Ext.Element The new node or Element.
     */
    insertFirst?: (el?: any, values?: any, returnElement?: boolean) => any,

    /**
     * [Method] Applies the supplied values to the template and overwrites the content of el with the new node s
     * @param el String/HTMLElement/Ext.Element The context element.
     * @param values Object/Array The template values. See applyTemplate for details.
     * @param returnElement Boolean true to return a Ext.Element.
     * @returns HTMLElement/Ext.Element The new node or Element.
     */
    overwrite?: (el?: any, values?: any, returnElement?: boolean) => any,

    /**
     * [Method] Sets the HTML used as the template and optionally compiles it
     * @param html String
     * @param compile Boolean true to compile the template.
     * @returns Ext.Template this
     */
    set?: (html?: string, compile?: boolean) => Ext$ITemplate
  } & Ext$IBase;

  declare export class Ext$Template {
    /**
     * [Method] Add methods  properties to the prototype of this class
     * @param members Object
     */
    static addMembers(members?: any): void;

    /**
     * [Method] Add  override static properties of this class
     * @param members Object
     * @returns Ext.Base this
     */
    static addStatics(members?: any): Ext$IBase;

    /**
     * [Method]
     * @param args Object
     */
    static callParent(args?: any): void;

    /**
     * [Method] Create a new instance of this Class
     * @returns Object the created instance.
     */
    static create(): any;

    /**
     * [Method] Create aliases for existing prototype methods
     * @param alias String/Object The new method name, or an object to set multiple aliases. See flexSetter
     * @param origin String/Object The original method name
     */
    static createAlias(alias?: any, origin?: any): void;

    /**
     * [Method] Creates a template from the passed element s value display none textarea preferred or innerHTML
     * @param el String/HTMLElement A DOM element or its id.
     * @param config Object Config object.
     * @returns Ext.Template The created template.
     */
    static from(el?: any, config?: any): Ext$ITemplate;

    /**
     * [Method] Get the current class name in string format
     * @returns String className
     */
    static getName(): string;

    /**
     * [Method] Override members of this class
     * @param members Object The properties to add to this class. This should be specified as an object literal containing one or more properties.
     * @returns Ext.Base this class
     */
    static override(members?: any): Ext$IBase;
  }

  declare export type Ext$ITitle = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    title?: string,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of title
     * @returns String
     */
    getTitle?: () => string,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of title
     * @param title String The new value.
     */
    setTitle?: (title?: string) => void
  } & Ext$IComponent;

  declare export type Ext$ITitleBar = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String/String[])
     */
    cls?: any,

    /**
     * [Config Option] (String)
     */
    defaultType?: string,

    /**
     * [Config Option] (Array/Object)
     */
    items?: any,

    /**
     * [Config Option] (String)
     */
    maxButtonWidth?: string,

    /**
     * [Config Option] (String)
     */
    minHeight?: string,

    /**
     * [Config Option] (String)
     */
    title?: string,

    /**
     * [Config Option] (String)
     */
    titleAlign?: string,

    /**
     * [Config Option] (String)
     */
    ui?: string,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of cls
     * @returns String
     */
    getCls?: () => string,

    /**
     * [Method] Returns the value of defaultType
     * @returns String
     */
    getDefaultType?: () => string,

    /**
     * [Method] Returns the value of items
     * @returns Array/Object
     */
    getItems?: () => any,

    /**
     * [Method] Returns the value of maxButtonWidth
     * @returns String
     */
    getMaxButtonWidth?: () => string,

    /**
     * [Method] Returns the value of title
     * @returns String
     */
    getTitle?: () => string,

    /**
     * [Method] Returns the value of titleAlign
     * @returns String
     */
    getTitleAlign?: () => string,

    /**
     * [Method] Returns the value of ui
     * @returns String
     */
    getUi?: () => string,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of cls
     * @param cls String The new value.
     */
    setCls?: (cls?: string) => void,

    /**
     * [Method] Sets the value of defaultType
     * @param defaultType String The new value.
     */
    setDefaultType?: (defaultType?: string) => void,

    /**
     * [Method] Sets the value of items
     * @param items Array/Object The new value.
     */
    setItems?: (items?: any) => void,

    /**
     * [Method] Sets the value of maxButtonWidth
     * @param maxButtonWidth String The new value.
     */
    setMaxButtonWidth?: (maxButtonWidth?: string) => void,

    /**
     * [Method] Sets the value of minHeight
     * @param minHeight String The new value.
     */
    setMinHeight?: (minHeight?: string) => void,

    /**
     * [Method] Sets the value of title
     * @param title String The new value.
     */
    setTitle?: (title?: string) => void,

    /**
     * [Method] Sets the value of titleAlign
     * @param titleAlign String The new value.
     */
    setTitleAlign?: (titleAlign?: string) => void,

    /**
     * [Method] Sets the value of ui
     * @param ui String The new value.
     */
    setUi?: (ui?: string) => void
  } & Ext$IContainer;

  declare export type Ext$IToolbar = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    defaultType?: string,

    /**
     * [Config Option] (String)
     */
    docked?: string,

    /**
     * [Config Option] (Object/String)
     */
    layout?: any,

    /**
     * [Config Option] (String)
     */
    minHeight?: string,

    /**
     * [Config Option] (String/Ext.Title)
     */
    title?: any,

    /**
     * [Config Option] (Boolean)
     */
    titleCls?: boolean,

    /**
     * [Config Option] (String)
     */
    ui?: string,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of defaultType
     * @returns String
     */
    getDefaultType?: () => string,

    /**
     * [Method] Returns the value of docked
     * @returns String
     */
    getDocked?: () => string,

    /**
     * [Method] Returns the value of layout
     * @returns Object/String
     */
    getLayout?: () => any,

    /**
     * [Method] Returns an Ext Title component
     * @returns Ext.Title
     */
    getTitle?: () => Ext$ITitle,

    /**
     * [Method] Returns the value of ui
     * @returns String
     */
    getUi?: () => string,

    /**
     * [Method] Hides the title if it exists
     */
    hideTitle?: () => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of defaultType
     * @param defaultType String The new value.
     */
    setDefaultType?: (defaultType?: string) => void,

    /**
     * [Method] Sets the value of docked
     * @param docked String The new value.
     */
    setDocked?: (docked?: string) => void,

    /**
     * [Method] Sets the value of layout
     * @param layout Object/String The new value.
     */
    setLayout?: (layout?: any) => void,

    /**
     * [Method] Sets the value of minHeight
     * @param minHeight String The new value.
     */
    setMinHeight?: (minHeight?: string) => void,

    /**
     * [Method] Use this to update the title configuration
     * @param title String/Ext.Title You can either pass a String, or a config/instance of Ext.Title.
     */
    setTitle?: (title?: any) => void,

    /**
     * [Method] Sets the value of ui
     * @param ui String The new value.
     */
    setUi?: (ui?: string) => void,

    /**
     * [Method] Shows the title if it exists
     */
    showTitle?: () => void
  } & Ext$IContainer;

  declare export type Ext$ux$ITabMenuButton = {
    /**
     * [Property] ()
     */
    menuItems?: any
  } & undefined.IMenuButton;

  declare export interface Ext$IVersion {
    /**
     * [Method] Create a closure for deprecated code
     * @param packageName String The package name.
     * @param since String The last version before it's deprecated.
     * @param closure Function The callback function to be executed with the specified version is less than the current version.
     * @param scope Object The execution scope (this) if the closure
     */
    deprecate?: (
      packageName?: string,
      since?: string,
      closure?: any,
      scope?: any
    ) => void;

    /**
     * [Method] Returns whether this version equals to the supplied argument
     * @param target String/Number The version to compare with.
     * @returns Boolean true if this version equals to the target, false otherwise.
     */
    equals?: (target?: any) => boolean;

    /**
     * [Method] Returns the build component value
     * @returns Number build
     */
    getBuild?: () => number;

    /**
     * [Method] Returns the major component value
     * @returns Number major
     */
    getMajor?: () => number;

    /**
     * [Method] Returns the minor component value
     * @returns Number minor
     */
    getMinor?: () => number;

    /**
     * [Method] Returns the patch component value
     * @returns Number patch
     */
    getPatch?: () => number;

    /**
     * [Method] Returns the release component value
     * @returns Number release
     */
    getRelease?: () => number;

    /**
     * [Method] Returns shortVersion version without dots and release
     * @returns String
     */
    getShortVersion?: () => string;

    /**
     * [Method] Get the version number of the supplied package name will return the last registered version last Ext setVersion  c
     * @param packageName String The package name, for example: 'core', 'touch', 'extjs'.
     * @returns Ext.Version The version.
     */
    getVersion?: (packageName?: string) => Ext$IVersion;

    /**
     * [Method] Convenient alias to isGreaterThan
     * @param target String/Number
     * @returns Boolean
     */
    gt?: (target?: any) => boolean;

    /**
     * [Method] Convenient alias to isGreaterThanOrEqual
     * @param target String/Number
     * @returns Boolean
     */
    gtEq?: (target?: any) => boolean;

    /**
     * [Method] Returns whether this version if greater than the supplied argument
     * @param target String/Number The version to compare with.
     * @returns Boolean true if this version if greater than the target, false otherwise.
     */
    isGreaterThan?: (target?: any) => boolean;

    /**
     * [Method] Returns whether this version if greater than or equal to the supplied argument
     * @param target String/Number The version to compare with.
     * @returns Boolean true if this version if greater than or equal to the target, false otherwise.
     */
    isGreaterThanOrEqual?: (target?: any) => boolean;

    /**
     * [Method] Returns whether this version if smaller than the supplied argument
     * @param target String/Number The version to compare with.
     * @returns Boolean true if this version if smaller than the target, false otherwise.
     */
    isLessThan?: (target?: any) => boolean;

    /**
     * [Method] Returns whether this version if less than or equal to the supplied argument
     * @param target String/Number The version to compare with.
     * @returns Boolean true if this version if less than or equal to the target, false otherwise.
     */
    isLessThanOrEqual?: (target?: any) => boolean;

    /**
     * [Method] Convenient alias to isLessThan
     * @param target String/Number
     * @returns Boolean
     */
    lt?: (target?: any) => boolean;

    /**
     * [Method] Convenient alias to isLessThanOrEqual
     * @param target String/Number
     * @returns Boolean
     */
    ltEq?: (target?: any) => boolean;

    /**
     * [Method] Returns whether this version matches the supplied argument
     * @param target String/Number The version to compare with.
     * @returns Boolean true if this version matches the target, false otherwise.
     */
    match?: (target?: any) => boolean;

    /**
     * [Method] Set version number for the given package name
     * @param packageName String The package name, for example: 'core', 'touch', 'extjs'.
     * @param version String/Ext.Version The version, for example: '1.2.3alpha', '2.4.0-dev'.
     * @returns any
     */
    setVersion?: (packageName?: string, version?: any) => any;

    /**
     * [Method] Returns this format  major minor patch build release
     * @returns Number[]
     */
    toArray?: () => number[];

    /**
     * [Method]
     * @param value Number
     * @returns Number
     */
    toNumber?: (value?: number) => number;
  }

  declare export class Ext$Version {
    /**
     * [Method] Compare 2 specified versions starting from left to right
     * @param current String The current version to compare to.
     * @param target String The target version to compare to.
     * @returns Number Returns -1 if the current version is smaller than the target version, 1 if greater, and 0 if they're equivalent.
     */
    static compare(current?: string, target?: string): number;

    /**
     * [Method] Converts a version component to a comparable value
     * @param value Object The value to convert
     * @returns Object
     */
    static getComponentValue(value?: any): any;
  }

  declare export type Ext$IVideo = {
    /**
     * [Config Option] (String)
     */
    baseCls?: string,

    /**
     * [Config Option] (String)
     */
    posterUrl?: string,

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    getBaseCls?: () => string,

    /**
     * [Method] Returns the value of posterUrl
     * @returns String
     */
    getPosterUrl?: () => string,

    /**
     * [Method] Returns the value of url
     * @returns string
     */
    getUrl?: () => string,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    setBaseCls?: (baseCls?: string) => void,

    /**
     * [Method] Sets the value of posterUrl
     * @param posterUrl String The new value.
     */
    setPosterUrl?: (posterUrl?: string) => void,

    /**
     * [Method] Sets the value of url
     * @param url String/Array The new value.
     */
    setUrl?: (url?: any) => void,

    /**
     * [Method] Updates the URL to the poster even if it is rendered
     * @param newUrl Object
     */
    updatePosterUrl?: (newUrl?: any) => void,

    /**
     * [Method] Sets the URL of the media element
     * @param newUrl Object
     */
    updateUrl?: (newUrl?: any) => void
  } & Ext$IMedia;

  declare export type Ext$viewport$IWP = {
    /**
     * [Method] Returns the value of translatable
     * @returns Object
     */
    getTranslatable?: () => any,

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    initialize?: () => void,

    /**
     * [Method] Sets the value of translatable
     * @param translatable Object The new value.
     */
    setTranslatable?: (translatable?: any) => void
  } & undefined.IDefault;

  declare export type Ext$IViewport = {} & undefined.IDefault;

  declare export class Ext$Viewport {
    /**
     * [Property] (Boolean)
     */
    static isReady: boolean;

    /**
     * [Property] (Ext.util.MixedCollection)
     */
    static items: util$IMixedCollection;

    /**
     * [Property] (Ext.Class)
     */
    static self: Ext$IClass;

    /**
     * [Method] Adds one or more Components to this Container
     * @param newItems Object/Object[]/Ext.Component/Ext.Component[] The new items to add to the Container.
     * @returns Ext.Component The last item added to the Container from the newItems array.
     */
    static add(newItems?: any): Ext$IComponent;

    /**
     * [Method] Appends an after event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static addAfterListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Adds an array of Components to this Container
     * @param items Array The array of items to add to this container.
     * @returns Array The array of items after they have been added.
     */
    static addAll(items?: any[]): any[];

    /**
     * [Method] Appends a before event handler
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static addBeforeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Adds a CSS class or classes to this Component s rendered element
     * @param cls String The CSS class to add.
     * @param prefix String Optional prefix to add to each class.
     * @param suffix String Optional suffix to add to each class.
     */
    static addCls(cls?: string, prefix?: string, suffix?: string): void;

    /**
     * [Method] Adds the specified events to the list of events which this Observable may fire
     * @param eventNames Object/String... Either an object with event names as properties with a value of true or the first event name string if multiple event names are being passed as separate parameters.
     */
    static addEvents(eventNames?: any): void;

    /**
     * [Method] Appends an event handler to this object
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    static addListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    static addManagedListener(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Animates to the supplied activeItem with a specified animation
     * @param activeItem Object/Number The item or item index to make active.
     * @param animation Object/Ext.fx.layout.Card Card animation configuration or instance.
     */
    static animateActiveItem(activeItem?: any, animation?: any): void;

    /**
     * [Method] Changes the masked configuration when its setter is called which will convert the value into a proper object instanc
     * @param masked Boolean/Object/Ext.Mask/Ext.LoadMask
     * @returns Object
     */
    static applyMasked(masked?: any): any;

    /**
     * [Method] Call the original method that was previously overridden with override  This method is deprecated as callParent does
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callOverridden(arguments)
     * @returns Object Returns the result of calling the overridden method
     */
    static callOverridden(args?: any): any;

    /**
     * [Method] Call the parent method of the current method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callParent(arguments)
     * @returns Object Returns the result of calling the parent method
     */
    static callParent(args?: any): any;

    /**
     * [Method] This method is used by an override to call the superclass method but bypass any overridden method
     * @param args Array/Arguments The arguments, either an array or the arguments object from the current method, for example: this.callSuper(arguments)
     * @returns Object Returns the result of calling the superclass method
     */
    static callSuper(args?: any): any;

    /**
     * [Method] Retrieves the first direct child of this container which matches the passed selector
     * @param selector String An Ext.ComponentQuery selector.
     * @returns Ext.Component
     */
    static child(selector?: string): Ext$IComponent;

    /**
     * [Method] Removes all listeners for this object
     */
    static clearListeners(): void;

    /**
     * [Method]
     */
    static destroy(): void;

    /**
     * [Method] Disables this Component
     */
    static disable(): void;

    /**
     * [Method] Retrieves the first descendant of this container which matches the passed selector
     * @param selector String An Ext.ComponentQuery selector.
     * @returns Ext.Component
     */
    static down(selector?: string): Ext$IComponent;

    /**
     * [Method] Enables this Component
     */
    static enable(): void;

    /**
     * [Method] Enables events fired by this Observable to bubble up an owner hierarchy by calling this getBubbleTarget  if present
     * @param events String/String[] The event name to bubble, or an Array of event names.
     */
    static enableBubble(events?: any): void;

    /**
     * [Method] Fires the specified event with the passed parameters and execute a function action at the end if there are no liste
     * @param eventName String The name of the event to fire.
     * @param args Array Arguments to pass to handers.
     * @param fn Function Action.
     * @param scope Object Scope of fn.
     * @returns Object
     */
    static fireAction(
      eventName?: string,
      args?: any[],
      fn?: any,
      scope?: any
    ): any;

    /**
     * [Method] Fires the specified event with the passed parameters minus the event name plus the options object passed to addList
     * @param eventName String The name of the event to fire.
     * @param args Object... Variable number of parameters are passed to handlers.
     * @returns Boolean Returns false if any of the handlers return false.
     */
    static fireEvent(eventName: string, ...args: any[]): boolean;

    /**
     * [Method] Returns the value of activeItem
     * @returns Object/String/Number
     */
    static getActiveItem(): any;

    /**
     * [Method] Prepares information on aligning this to component using alignment
     * @param component Object
     * @param alignment Object
     */
    static getAlignmentInfo(component?: any, alignment?: any): void;

    /**
     * [Method] Returns the Component for a given index in the Container s items
     * @param index Number The index of the Component to return.
     * @returns Ext.Component The item at the specified index, if found.
     */
    static getAt(index?: number): Ext$IComponent;

    /**
     * [Method] Returns the value of autoDestroy
     * @returns Boolean
     */
    static getAutoDestroy(): boolean;

    /**
     * [Method] Returns the value of autoMaximize
     * @returns Boolean
     */
    static getAutoMaximize(): boolean;

    /**
     * [Method] Returns the value of baseCls
     * @returns String
     */
    static getBaseCls(): string;

    /**
     * [Method] Returns the value of border
     * @returns Number/String
     */
    static getBorder(): any;

    /**
     * [Method] Returns the value of bottom
     * @returns Number/String
     */
    static getBottom(): any;

    /**
     * [Method] Returns the value of bubbleEvents
     * @returns String/String[]
     */
    static getBubbleEvents(): any;

    /**
     * [Method] Returns the value of centered
     * @returns Boolean
     */
    static getCentered(): boolean;

    /**
     * [Method] Returns the value of cls
     * @returns String/String[]
     */
    static getCls(): any;

    /**
     * [Method] Examines this container s items property and gets a direct child component of this container
     * @param component String/Number This parameter may be any of the following:  {String} : representing the itemId or id of the child component. {Number} : representing the position of the child component within the items property. For additional information see Ext.util.MixedCollection.get.
     * @returns Ext.Component The component (if found).
     */
    static getComponent(component?: any): Ext$IComponent;

    /**
     * [Method] Returns the value of contentEl
     * @returns Ext.Element/HTMLElement/String
     */
    static getContentEl(): any;

    /**
     * [Method] Returns the value of control
     * @returns Object
     */
    static getControl(): any;

    /**
     * [Method] Returns the value of data
     * @returns Object
     */
    static getData(): any;

    /**
     * [Method] Returns the value of defaultType
     * @returns String
     */
    static getDefaultType(): string;

    /**
     * [Method] Returns the value of defaults
     * @returns Object
     */
    static getDefaults(): any;

    /**
     * [Method] Returns the value of disabled
     * @returns Boolean
     */
    static getDisabled(): boolean;

    /**
     * [Method] Returns the value of disabledCls
     * @returns String
     */
    static getDisabledCls(): string;

    /**
     * [Method] Returns the value of docked
     * @returns String
     */
    static getDocked(): string;

    /**
     * [Method] Finds a docked item of this container using a reference idor an index of its location in getDockedItems
     * @param component String/Number The id or index of the component to find.
     * @returns Ext.Component/Boolean The docked component, if found.
     */
    static getDockedComponent(component?: any): any;

    /**
     * [Method] Returns all the Ext Component docked items in this container
     * @returns Array The docked items of this container.
     */
    static getDockedItems(): any[];

    /**
     * [Method] Retrieves the top level element representing this component
     * @returns Ext.dom.Element
     */
    static getEl(): dom$IElement;

    /**
     * [Method] Returns the value of enterAnimation
     * @returns String/Mixed
     */
    static getEnterAnimation(): any;

    /**
     * [Method] Returns the value of exitAnimation
     * @returns String/Mixed
     */
    static getExitAnimation(): any;

    /**
     * [Method] Returns the value of flex
     * @returns Number
     */
    static getFlex(): number;

    /**
     * [Method] Returns the value of floatingCls
     * @returns String
     */
    static getFloatingCls(): string;

    /**
     * [Method] Returns the value of hidden
     * @returns Boolean
     */
    static getHidden(): boolean;

    /**
     * [Method] Returns the value of hiddenCls
     * @returns String
     */
    static getHiddenCls(): string;

    /**
     * [Method] Returns the value of hideAnimation
     * @returns String/Mixed
     */
    static getHideAnimation(): any;

    /**
     * [Method] Returns the value of hideOnMaskTap
     * @returns Boolean
     */
    static getHideOnMaskTap(): boolean;

    /**
     * [Method] Returns the value of html
     * @returns String/Ext.Element/HTMLElement
     */
    static getHtml(): any;

    /**
     * [Method] Retrieves the id of this component
     * @returns String id
     */
    static getId(): string;

    /**
     * [Method] Returns the initial configuration passed to constructor
     * @param name String When supplied, value for particular configuration option is returned, otherwise the full config object is returned.
     * @returns Object/Mixed
     */
    static getInitialConfig(name?: string): any;

    /**
     * [Method] Returns all inner items of this container
     * @returns Array The inner items of this container.
     */
    static getInnerItems(): any[];

    /**
     * [Method] Returns the value of itemId
     * @returns String
     */
    static getItemId(): string;

    /**
     * [Method] Returns the value of items
     * @returns Array/Object
     */
    static getItems(): any;

    /**
     * [Method] Returns the value of layout
     * @returns Object/String
     */
    static getLayout(): any;

    /**
     * [Method] Returns the value of left
     * @returns Number/String
     */
    static getLeft(): any;

    /**
     * [Method] Returns the value of listeners
     * @returns Object
     */
    static getListeners(): any;

    /**
     * [Method] Returns the value of margin
     * @returns Number/String
     */
    static getMargin(): any;

    /**
     * [Method] Returns the value of masked
     * @returns Boolean/Object/Ext.Mask/Ext.LoadMask
     */
    static getMasked(): any;

    /**
     * [Method] Returns the value of maxHeight
     * @returns Number/String
     */
    static getMaxHeight(): any;

    /**
     * [Method] Returns the value of maxWidth
     * @returns Number/String
     */
    static getMaxWidth(): any;

    /**
     * [Method] Returns the value of minHeight
     * @returns Number/String
     */
    static getMinHeight(): any;

    /**
     * [Method] Returns the value of minWidth
     * @returns Number/String
     */
    static getMinWidth(): any;

    /**
     * [Method] Returns the value of modal
     * @returns Boolean
     */
    static getModal(): boolean;

    /**
     * [Method] Returns the current orientation
     * @returns String portrait or landscape
     */
    static getOrientation(): string;

    /**
     * [Method] Returns the value of padding
     * @returns Number/String
     */
    static getPadding(): any;

    /**
     * [Method] Returns the parent of this component if it has one
     * @returns Ext.Component The parent of this component.
     */
    static getParent(): Ext$IComponent;

    /**
     * [Method] Returns the value of plugins
     * @returns Object/Array
     */
    static getPlugins(): any;

    /**
     * [Method] Returns the value of preventPanning
     * @returns Boolean
     */
    static getPreventPanning(): boolean;

    /**
     * [Method] Returns the value of preventZooming
     * @returns Boolean
     */
    static getPreventZooming(): boolean;

    /**
     * [Method] Returns the value of record
     * @returns Ext.data.Model
     */
    static getRecord(): data$IModel;

    /**
     * [Method] Returns the value of renderTo
     * @returns Ext.Element
     */
    static getRenderTo(): Ext$IElement;

    /**
     * [Method] Returns the value of right
     * @returns Number/String
     */
    static getRight(): any;

    /**
     * [Method] Returns an the scrollable instance for this container which is a Ext scroll View class
     * @returns Ext.scroll.View The scroll view.
     */
    static getScrollable(): Ext$scroll$IView;

    /**
     * [Method] Returns the value of showAnimation
     * @returns String/Mixed
     */
    static getShowAnimation(): any;

    /**
     * [Method] Returns the height and width of the Component
     * @returns Object The current height and width of the Component.
     */
    static getSize(): any;

    /**
     * [Method] Returns the value of style
     * @returns String/Object
     */
    static getStyle(): any;

    /**
     * [Method] Returns the value of styleHtmlCls
     * @returns String
     */
    static getStyleHtmlCls(): string;

    /**
     * [Method] Returns the value of styleHtmlContent
     * @returns Boolean
     */
    static getStyleHtmlContent(): boolean;

    /**
     * [Method] Returns the value of top
     * @returns Number/String
     */
    static getTop(): any;

    /**
     * [Method] Returns the value of tpl
     * @returns String/String[]/Ext.Template/Ext.XTemplate[]
     */
    static getTpl(): any;

    /**
     * [Method] Returns the value of tplWriteMode
     * @returns String
     */
    static getTplWriteMode(): string;

    /**
     * [Method] Returns the value of ui
     * @returns String
     */
    static getUi(): string;

    /**
     * [Method] Returns the value of useBodyElement
     * @returns Boolean
     */
    static getUseBodyElement(): boolean;

    /**
     * [Method] Retrieves the document height
     * @returns Number height in pixels.
     */
    static getWindowHeight(): number;

    /**
     * [Method] Retrieves the document width
     * @returns Number width in pixels.
     */
    static getWindowWidth(): number;

    /**
     * [Method] Returns this Component s xtype hierarchy as a slash delimited string
     * @returns String The xtype hierarchy string.
     */
    static getXTypes(): string;

    /**
     * [Method] Returns the value of zIndex
     * @returns Number
     */
    static getZIndex(): number;

    /**
     * [Method] Checks to see if this object has any listeners for a specified event
     * @param eventName String The name of the event to check for
     * @returns Boolean True if the event is being listened for, else false
     */
    static hasListener(eventName?: string): boolean;

    /**
     * [Method] Returns true if this component has a parent
     * @returns Boolean true if this component has a parent.
     */
    static hasParent(): boolean;

    /**
     * [Method] Hides this Component optionally using an animation
     * @returns Ext.Component
     */
    static hide(): Ext$IComponent;

    /**
     * [Method] Hides all visible menus
     * @param animation Object
     */
    static hideAllMenus(animation?: any): void;

    /**
     * [Method] Hides a menu specified by the menu s side
     * @param side String The side which the menu is placed.
     */
    static hideMenu(side?: string): void;

    /**
     * [Method] Hides all menus except for the side specified
     * @param side String Side(s) not to hide
     * @param animation String Animation to hide with
     */
    static hideOtherMenus(side?: string, animation?: string): void;

    /**
     * [Method] Initialize configuration for this class
     * @param instanceConfig Object
     * @returns Object mixins The mixin prototypes as key - value pairs
     */
    static initConfig(instanceConfig?: any): any;

    /**
     * [Method] Allows addition of behavior to the rendering phase
     */
    static initialize(): void;

    /**
     * [Method] Adds a child Component at the given index
     * @param index Number The index to insert the Component at.
     * @param item Object The Component to insert.
     */
    static insert(index?: number, item?: any): void;

    /**
     * [Method] Returns true if this Component is currently disabled
     * @returns Boolean true if currently disabled.
     */
    static isDisabled(): boolean;

    /**
     * [Method] Returns true if this Component is currently hidden
     * @returns Boolean true if currently hidden.
     */
    static isHidden(): boolean;

    /**
     * [Method] Tests whether or not this Component is of a specific xtype
     * @param xtype String The xtype to check for this Component.
     * @param shallow Boolean false to check whether this Component is descended from the xtype (this is the default), or true to check whether this Component is directly of the specified xtype.
     * @returns Boolean true if this component descends from the specified xtype, false otherwise.
     */
    static isXType(xtype?: string, shallow?: boolean): boolean;

    /**
     * [Method] Convenience method which calls setMasked with a value of true to show the mask
     * @param mask Object
     */
    static mask(mask?: any): void;

    /**
     * [Method] Alias for addManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     * @param options Object If the eventName parameter was an event name, this is the addListener options.
     */
    static mon(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Alias for removeManagedListener
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    static mun(object?: any, eventName?: any, fn?: any, scope?: any): void;

    /**
     * [Method] Alias for addListener
     * @param eventName String/String[]/Object The name of the event to listen for. May also be an object who's property names are event names.
     * @param fn Function/String The method the event invokes. Will be called with arguments given to fireEvent plus the options parameter described below.
     * @param scope Object The scope (this reference) in which the handler function is executed. If omitted, defaults to the object which fired the event.
     * @param options Object An object containing handler configuration.  This object may contain any of the following properties:
     * @param order String The order of when the listener should be added into the listener queue. Possible values are before, current and after.
     */
    static on(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Alias for addAfterListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;

    /**
     * [Method] Alias for addBeforeListener
     * @param eventName String/String[]/Object The name of the event to listen for.
     * @param fn Function/String The method the event invokes.
     * @param scope Object The scope for fn.
     * @param options Object An object containing handler configuration.
     */
    static onBefore(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Retrieves all descendant components which match the passed selector
     * @param selector String Selector complying to an Ext.ComponentQuery selector.
     * @returns Array Ext.Component's which matched the selector.
     */
    static query(selector?: string): any[];

    /**
     * [Method] Relays selected events from the specified Observable as if the events were fired by this
     * @param object Object The Observable whose events this object is to relay.
     * @param events String/Array/Object Array of event names to relay.
     * @returns Ext.mixin.Observable this
     */
    static relayEvents(object?: any, events?: any): Ext$mixin$IObservable;

    /**
     * [Method] Removes an item from this Container optionally destroying it
     * @param item Object The item to remove.
     * @param destroy Boolean Calls the Component's destroy method if true.
     * @returns Ext.Component this
     */
    static remove(item?: any, destroy?: boolean): Ext$IComponent;

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static removeAfterListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Removes all items currently in the Container optionally destroying them all
     * @param destroy Boolean If true, destroys each removed Component.
     * @param everything Boolean If true, completely remove all items including docked / centered and floating items.
     * @returns Ext.Component this
     */
    static removeAll(destroy?: boolean, everything?: boolean): Ext$IComponent;

    /**
     * [Method] Removes the Component at the specified index  myContainer removeAt 0 removes the first item
     * @param index Number The index of the Component to remove.
     * @returns Ext.Container this
     */
    static removeAt(index?: number): Ext$IContainer;

    /**
     * [Method] Removes a before event handler
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static removeBeforeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Removes the given CSS class es from this Component s rendered element
     * @param cls String The class(es) to remove.
     * @param prefix String Optional prefix to prepend before each class.
     * @param suffix String Optional suffix to append to each class.
     */
    static removeCls(cls?: string, prefix?: string, suffix?: string): void;

    /**
     * [Method] Removes a docked item from this Container
     * @param item Object The item to remove.
     * @param destroy Boolean Calls the Component's destroy method if true.
     * @returns Ext.Component this
     */
    static removeDocked(item?: any, destroy?: boolean): Ext$IComponent;

    /**
     * [Method] Removes an inner Component at the specified index  myContainer removeInnerAt 0 removes the first item of the in
     * @param index Number The index of the Component to remove.
     * @returns Ext.Container this
     */
    static removeInnerAt(index?: number): Ext$IContainer;

    /**
     * [Method] Removes an event handler
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    static removeListener(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Adds listeners to any Observable object or Element which are automatically removed when this Component is destroyed
     * @param object Ext.mixin.Observable/HTMLElement The item to which to add a listener/listeners.
     * @param eventName Object/String The event name, or an object containing event name properties.
     * @param fn Function If the eventName parameter was an event name, this is the handler function.
     * @param scope Object If the eventName parameter was an event name, this is the scope in which the handler function is executed.
     */
    static removeManagedListener(
      object?: any,
      eventName?: any,
      fn?: any,
      scope?: any
    ): void;

    /**
     * [Method] Removes a menu from a specified side
     * @param side String The side to remove the menu from
     */
    static removeMenu(side?: string): void;

    /**
     * [Method] Replaces specified classes with the newly specified classes
     * @param oldCls String The class(es) to remove.
     * @param newCls String The class(es) to add.
     * @param prefix String Optional prefix to prepend before each class.
     * @param suffix String Optional suffix to append to each class.
     */
    static replaceCls(
      oldCls?: string,
      newCls?: string,
      prefix?: string,
      suffix?: string
    ): void;

    /**
     * [Method] Resets top right bottom and left configurations to null which will un float this component
     */
    static resetFloating(): void;

    /**
     * [Method] Resumes firing events see suspendEvents
     * @param discardQueuedEvents Boolean Pass as true to discard any queued events.
     */
    static resumeEvents(discardQueuedEvents?: boolean): void;

    /**
     * [Method] Sets the value of activeItem
     * @param activeItem Object/String/Number The new value.
     */
    static setActiveItem(activeItem?: any): void;

    /**
     * [Method] Sets the value of autoDestroy
     * @param autoDestroy Boolean The new value.
     */
    static setAutoDestroy(autoDestroy?: boolean): void;

    /**
     * [Method] Sets the value of autoMaximize
     * @param autoMaximize Boolean The new value.
     */
    static setAutoMaximize(autoMaximize?: boolean): void;

    /**
     * [Method] Sets the value of baseCls
     * @param baseCls String The new value.
     */
    static setBaseCls(baseCls?: string): void;

    /**
     * [Method] Sets the value of border
     * @param border Number/String The new value.
     */
    static setBorder(border?: any): void;

    /**
     * [Method] Sets the value of bottom
     * @param bottom Number/String The new value.
     */
    static setBottom(bottom?: any): void;

    /**
     * [Method] Sets the value of bubbleEvents
     * @param bubbleEvents String/String[] The new value.
     */
    static setBubbleEvents(bubbleEvents?: any): void;

    /**
     * [Method] Sets the value of centered
     * @param centered Boolean The new value.
     */
    static setCentered(centered?: boolean): void;

    /**
     * [Method] Sets the value of cls
     * @param cls String/String[] The new value.
     */
    static setCls(cls?: any): void;

    /**
     * [Method] Sets the value of contentEl
     * @param contentEl Ext.Element/HTMLElement/String The new value.
     */
    static setContentEl(contentEl?: any): void;

    /**
     * [Method] Sets the value of control
     * @param control Object The new value.
     */
    static setControl(control?: any): void;

    /**
     * [Method] Sets the value of data
     * @param data Object The new value.
     */
    static setData(data?: any): void;

    /**
     * [Method] Sets the value of defaultType
     * @param defaultType String The new value.
     */
    static setDefaultType(defaultType?: string): void;

    /**
     * [Method] Sets the value of defaults
     * @param defaults Object The new value.
     */
    static setDefaults(defaults?: any): void;

    /**
     * [Method] Sets the value of disabled
     * @param disabled Boolean The new value.
     */
    static setDisabled(disabled?: boolean): void;

    /**
     * [Method] Sets the value of disabledCls
     * @param disabledCls String The new value.
     */
    static setDisabledCls(disabledCls?: string): void;

    /**
     * [Method] Sets the value of docked
     * @param docked String The new value.
     */
    static setDocked(docked?: string): void;

    /**
     * [Method] Sets the value of draggable
     * @param draggable Object The new value.
     */
    static setDraggable(draggable?: any): void;

    /**
     * [Method] Sets the value of enterAnimation
     * @param enterAnimation String/Mixed The new value.
     */
    static setEnterAnimation(enterAnimation?: any): void;

    /**
     * [Method] Sets the value of exitAnimation
     * @param exitAnimation String/Mixed The new value.
     */
    static setExitAnimation(exitAnimation?: any): void;

    /**
     * [Method] Sets the value of flex
     * @param flex Number The new value.
     */
    static setFlex(flex?: number): void;

    /**
     * [Method] Used to update the floating state of this component
     * @param floating Boolean true if you want to float this component.
     */
    static setFloating(floating?: boolean): void;

    /**
     * [Method] Sets the value of floatingCls
     * @param floatingCls String The new value.
     */
    static setFloatingCls(floatingCls?: string): void;

    /**
     * [Method] Sets the value of hidden
     * @param hidden Boolean The new value.
     */
    static setHidden(hidden?: boolean): void;

    /**
     * [Method] Sets the value of hiddenCls
     * @param hiddenCls String The new value.
     */
    static setHiddenCls(hiddenCls?: string): void;

    /**
     * [Method] Sets the value of hideAnimation
     * @param hideAnimation String/Mixed The new value.
     */
    static setHideAnimation(hideAnimation?: any): void;

    /**
     * [Method] Sets the value of hideOnMaskTap
     * @param hideOnMaskTap Boolean The new value.
     */
    static setHideOnMaskTap(hideOnMaskTap?: boolean): void;

    /**
     * [Method] Sets the value of html
     * @param html String/Ext.Element/HTMLElement The new value.
     */
    static setHtml(html?: any): void;

    /**
     * [Method] Sets the value of itemId
     * @param itemId String The new value.
     */
    static setItemId(itemId?: string): void;

    /**
     * [Method] Sets the value of items
     * @param items Array/Object The new value.
     */
    static setItems(items?: any): void;

    /**
     * [Method] Sets the value of layout
     * @param layout Object/String The new value.
     */
    static setLayout(layout?: any): void;

    /**
     * [Method] Sets the value of left
     * @param left Number/String The new value.
     */
    static setLeft(left?: any): void;

    /**
     * [Method] Sets the value of listeners
     * @param listeners Object The new value.
     */
    static setListeners(listeners?: any): void;

    /**
     * [Method] Sets the value of margin
     * @param margin Number/String The new value.
     */
    static setMargin(margin?: any): void;

    /**
     * [Method] Sets the value of masked
     * @param masked Boolean/Object/Ext.Mask/Ext.LoadMask The new value.
     */
    static setMasked(masked?: any): void;

    /**
     * [Method] Sets the value of maxHeight
     * @param maxHeight Number/String The new value.
     */
    static setMaxHeight(maxHeight?: any): void;

    /**
     * [Method] Sets the value of maxWidth
     * @param maxWidth Number/String The new value.
     */
    static setMaxWidth(maxWidth?: any): void;

    /**
     * [Method] Sets a menu for a given side of the Viewport
     * @param menu Ext.Menu The menu to assign to the viewport
     * @param config Object The configuration for the menu.
     */
    static setMenu(menu?: Ext$IMenu, config?: any): void;

    /**
     * [Method] Sets the value of minHeight
     * @param minHeight Number/String The new value.
     */
    static setMinHeight(minHeight?: any): void;

    /**
     * [Method] Sets the value of minWidth
     * @param minWidth Number/String The new value.
     */
    static setMinWidth(minWidth?: any): void;

    /**
     * [Method] Sets the value of modal
     * @param modal Boolean The new value.
     */
    static setModal(modal?: boolean): void;

    /**
     * [Method] Sets the value of padding
     * @param padding Number/String The new value.
     */
    static setPadding(padding?: any): void;

    /**
     * [Method] Sets the value of plugins
     * @param plugins Object/Array The new value.
     */
    static setPlugins(plugins?: any): void;

    /**
     * [Method] Sets the value of preventPanning
     * @param preventPanning Boolean The new value.
     */
    static setPreventPanning(preventPanning?: boolean): void;

    /**
     * [Method] Sets the value of preventZooming
     * @param preventZooming Boolean The new value.
     */
    static setPreventZooming(preventZooming?: boolean): void;

    /**
     * [Method] Sets the value of record
     * @param record Ext.data.Model The new value.
     */
    static setRecord(record?: data$IModel): void;

    /**
     * [Method] Sets the value of renderTo
     * @param renderTo Ext.Element The new value.
     */
    static setRenderTo(renderTo?: Ext$IElement): void;

    /**
     * [Method] Sets the value of right
     * @param right Number/String The new value.
     */
    static setRight(right?: any): void;

    /**
     * [Method] Sets the value of scrollable
     * @param scrollable Boolean/String/Object The new value.
     * @returns Ext.scroll.View The scroll view.
     */
    static setScrollable(scrollable?: any): Ext$scroll$IView;

    /**
     * [Method] Sets the value of showAnimation
     * @param showAnimation String/Mixed The new value.
     */
    static setShowAnimation(showAnimation?: any): void;

    /**
     * [Method] Sets the size of the Component
     * @param width Number The new width for the Component.
     * @param height Number The new height for the Component.
     */
    static setSize(width?: number, height?: number): void;

    /**
     * [Method] Sets the value of style
     * @param style String/Object The new value.
     */
    static setStyle(style?: any): void;

    /**
     * [Method] Sets the value of styleHtmlCls
     * @param styleHtmlCls String The new value.
     */
    static setStyleHtmlCls(styleHtmlCls?: string): void;

    /**
     * [Method] Sets the value of styleHtmlContent
     * @param styleHtmlContent Boolean The new value.
     */
    static setStyleHtmlContent(styleHtmlContent?: boolean): void;

    /**
     * [Method] Sets the value of top
     * @param top Number/String The new value.
     */
    static setTop(top?: any): void;

    /**
     * [Method] Sets the value of tpl
     * @param tpl String/String[]/Ext.Template/Ext.XTemplate[] The new value.
     */
    static setTpl(tpl?: any): void;

    /**
     * [Method] Sets the value of tplWriteMode
     * @param tplWriteMode String The new value.
     */
    static setTplWriteMode(tplWriteMode?: string): void;

    /**
     * [Method] Sets the value of ui
     * @param ui String The new value.
     */
    static setUi(ui?: string): void;

    /**
     * [Method] Sets the value of useBodyElement
     * @param useBodyElement Boolean The new value.
     */
    static setUseBodyElement(useBodyElement?: boolean): void;

    /**
     * [Method] Sets the value of zIndex
     * @param zIndex Number The new value.
     */
    static setZIndex(zIndex?: number): void;

    /**
     * [Method] Shows this component optionally using an animation
     * @returns Ext.Component
     */
    static show(): Ext$IComponent;

    /**
     * [Method] Shows this component by another component
     * @param component Ext.Component The target component to show this component by.
     * @param alignment String The specific alignment.
     */
    static showBy(component?: Ext$IComponent, alignment?: string): void;

    /**
     * [Method] Shows a menu specified by the menu s side
     * @param side String The side which the menu is placed.
     */
    static showMenu(side?: string): void;

    /**
     * [Method] Get the reference to the class from which this object was instantiated
     * @returns Ext.Class
     */
    static statics(): Ext$IClass;

    /**
     * [Method] Suspends the firing of all events
     */
    static suspendEvents(): void;

    /**
     * [Method] Toggles the menu specified by side
     * @param side String The side which the menu is placed.
     */
    static toggleMenu(side?: string): void;

    /**
     * [Method] Alias for removeListener
     * @param eventName String/String[]/Object The type of event the handler was associated with.
     * @param fn Function/String The handler to remove. This must be a reference to the function passed into the addListener call.
     * @param scope Object The scope originally specified for the handler. It must be the same as the scope argument specified in the original call to addListener or the listener will not be removed.
     * @param options Object Extra options object. See addListener for details.
     * @param order String The order of the listener to remove. Possible values are before, current and after.
     */
    static un(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any,
      order?: string
    ): void;

    /**
     * [Method] Alias for removeAfterListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;

    /**
     * [Method] Alias for removeBeforeListener
     * @param eventName String/String[]/Object The name of the event the handler was associated with.
     * @param fn Function/String The handler to remove.
     * @param scope Object The scope originally specified for fn.
     * @param options Object Extra options object.
     */
    static unBefore(
      eventName?: any,
      fn?: any,
      scope?: any,
      options?: any
    ): void;

    /**
     * [Method] Convenience method which calls setMasked with a value of false to hide the mask
     */
    static unmask(): void;

    /**
     * [Method] Walks up the ownerCt axis looking for an ancestor Container which matches the passed simple selector
     * @param selector String The simple selector to test.
     * @returns Ext.Container The matching ancestor Container (or undefined if no match was found).
     */
    static up(selector?: string): Ext$IContainer;

    /**
     * [Method] Updates the HTML content of the Component
     */
    static update(): void;

    /**
     * [Method] Updates the styleHtmlCls configuration
     * @param newHtmlCls Object
     * @param oldHtmlCls Object
     */
    static updateStyleHtmlCls(newHtmlCls?: any, oldHtmlCls?: any): void;
  }

  declare export type Ext$IXTemplate = {
    /**
     * [Method] Appends the result of this template to the provided output array
     * @param values Object/Array The template values. See apply.
     * @param out Array The array to which output is pushed.
     * @param parent Object
     * @returns Array The given out array.
     */
    applyOut?: (values?: any, out?: any[], parent?: any) => any[]
  } & Ext$ITemplate;

  declare export class Ext$XTemplate {
    /**
     * [Method] Add methods  properties to the prototype of this class
     * @param members Object
     */
    static addMembers(members?: any): void;

    /**
     * [Method] Add  override static properties of this class
     * @param members Object
     * @returns Ext.Base this
     */
    static addStatics(members?: any): Ext$IBase;

    /**
     * [Method]
     * @param args Object
     */
    static callParent(args?: any): void;

    /**
     * [Method] Create a new instance of this Class
     * @returns Object the created instance.
     */
    static create(): any;

    /**
     * [Method] Create aliases for existing prototype methods
     * @param alias String/Object The new method name, or an object to set multiple aliases. See flexSetter
     * @param origin String/Object The original method name
     */
    static createAlias(alias?: any, origin?: any): void;

    /**
     * [Method] Creates a template from the passed element s value display none textarea preferred or innerHTML
     * @param el String/HTMLElement A DOM element or its id.
     * @param config Object Config object.
     * @returns Ext.Template The created template.
     */
    static from(el?: any, config?: any): Ext$ITemplate;

    /**
     * [Method] Get the current class name in string format
     * @returns String className
     */
    static getName(): string;

    /**
     * [Method] Gets an XTemplate from an object an instance of an Ext define d class
     * @param instance Object The object from which to get the XTemplate (must be an instance of an Ext.define'd class).
     * @param name String The name of the property by which to get the XTemplate.
     * @returns Ext.XTemplate The XTemplate instance or null if not found.
     */
    static getTpl(instance?: any, name?: string): Ext$IXTemplate;

    /**
     * [Method] Override members of this class
     * @param members Object The properties to add to this class. This should be specified as an object literal containing one or more properties.
     * @returns Ext.Base this class
     */
    static override(members?: any): Ext$IBase;
  }

  declare export type Ext$IXTemplateCompiler = {
    /**
     * [Method] This method is called to process lt tpl case action gt
     * @param action Object
     */
    doCase?: (action?: any) => void,

    /**
     * [Method] This method is called to process lt tpl default gt
     */
    doDefault?: () => void,

    /**
     * [Method] This method is called to process lt tpl else gt
     */
    doElse?: () => void,

    /**
     * [Method] This method is called to process lt tpl elseif action gt
     * @param action Object
     * @param actions Object
     */
    doElseIf?: (action?: any, actions?: any) => void,

    /**
     * [Method] This method is called to process lt tpl gt
     * @param type Object
     * @param actions Object
     */
    doEnd?: (type?: any, actions?: any) => void,

    /**
     * [Method] This method is called to process text
     * @param text Object
     */
    doEval?: (text?: any) => void,

    /**
     * [Method] This method is called to process lt tpl exec action gt
     * @param action Object
     * @param actions Object
     */
    doExec?: (action?: any, actions?: any) => void,

    /**
     * [Method] This method is called to process expressions like  expr
     * @param expr Object
     */
    doExpr?: (expr?: any) => void,

    /**
     * [Method] This method is called to process lt tpl for action gt
     * @param action Object
     * @param actions Object
     */
    doFor?: (action?: any, actions?: any) => void,

    /**
     * [Method] This method is called to process lt tpl if action gt
     * @param action Object
     * @param actions Object
     */
    doIf?: (action?: any, actions?: any) => void,

    /**
     * [Method] This method is called to process lt tpl switch action gt
     * @param action Object
     */
    doSwitch?: (action?: any) => void,

    /**
     * [Method] This method is called to process simple tags like tag
     * @param tag Object
     */
    doTag?: (tag?: any) => void,

    /**
     * [Method] This method is called to process a piece of raw text from the tpl
     * @param text Object
     */
    doText?: (text?: any) => void
  } & Ext$IXTemplateParser;

  declare export type Ext$IXTemplateParser = {
    /**
     * [Property] (Number)
     */
    level?: number,

    /**
     * [Method] This method is called to process lt tpl case action gt
     * @param action String
     * @param actions Object Other actions keyed by the attribute name (such as 'exec').
     */
    doCase?: (action?: string, actions?: any) => void,

    /**
     * [Method] This method is called to process lt tpl default gt
     */
    doDefault?: () => void,

    /**
     * [Method] This method is called to process lt tpl else gt
     */
    doElse?: () => void,

    /**
     * [Method] This method is called to process lt tpl elseif action gt
     * @param action String
     * @param actions Object Other actions keyed by the attribute name (such as 'exec').
     */
    doElseIf?: (action?: string, actions?: any) => void,

    /**
     * [Method] This method is called to process lt tpl gt
     * @param type String The type of action that is being ended.
     * @param actions Object The other actions keyed by the attribute name (such as 'exec').
     */
    doEnd?: (type?: string, actions?: any) => void,

    /**
     * [Method] This method is called to process text
     * @param text String
     */
    doEval?: (text?: string) => void,

    /**
     * [Method] This method is called to process lt tpl exec action gt
     * @param action String
     * @param actions Object Other actions keyed by the attribute name.
     */
    doExec?: (action?: string, actions?: any) => void,

    /**
     * [Method] This method is called to process expressions like  expr
     * @param expr String The body of the expression (inside "{[" and "]}").
     */
    doExpr?: (expr?: string) => void,

    /**
     * [Method] This method is called to process lt tpl for action gt
     * @param action String
     * @param actions Object Other actions keyed by the attribute name (such as 'exec').
     */
    doFor?: (action?: string, actions?: any) => void,

    /**
     * [Method] This method is called to process lt tpl if action gt
     * @param action String
     * @param actions Object Other actions keyed by the attribute name (such as 'exec').
     */
    doIf?: (action?: string, actions?: any) => void,

    /**
     * [Method] This method is called to process lt tpl switch action gt
     * @param action String
     * @param actions Object Other actions keyed by the attribute name (such as 'exec').
     */
    doSwitch?: (action?: string, actions?: any) => void,

    /**
     * [Method] This method is called to process simple tags like tag
     * @param tag String
     */
    doTag?: (tag?: string) => void,

    /**
     * [Method] This method is called to process a piece of raw text from the tpl
     * @param text String
     */
    doText?: (text?: string) => void,

    /**
     * [Method] This method is called to process an empty lt tpl gt
     */
    doTpl?: () => void
  } & Ext$IBase;
}
