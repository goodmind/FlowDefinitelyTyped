declare module "plugins/router" {
  declare var theModule: DurandalRootRouter;
  declare export default typeof theModule;
}
declare module "plugins/widget" {
  declare interface WidgetSettings {
    kind: string;
    model?: any;
    view?: any;
  }

  /**
   * Creates a ko binding handler for the specified kind.
   * @param {string} kind The kind to create a custom binding handler for.
   */
  declare export function registerKind(kind: string): void;

  /**
   * Maps views and module to the kind identifier if a non-standard pattern is desired.
   * @param {string} kind The kind name.
   * @param {string} viewId The unconventional view id to map the kind to.
   * @param {string} moduleId The unconventional module id to map the kind to.
   */
  declare export function mapKind(
    kind: string,
    viewId?: string,
    moduleId?: string
  ): void;

  /**
   * Maps a kind name to it's module id. First it looks up a custom mapped kind, then falls back to `convertKindToModulePath`.
   * @param {string} kind The kind name.
   * @returns {string} The module id.
   */
  declare export function mapKindToModuleId(kind: string): string;

  /**
   * Converts a kind name to it's module path. Used to conventionally map kinds who aren't explicitly mapped through `mapKind`.
   * @param {string} kind The kind name.
   * @returns {string} The module path.
   */
  declare export function convertKindToModulePath(kind: string): string;

  /**
   * Maps a kind name to it's view id. First it looks up a custom mapped kind, then falls back to `convertKindToViewPath`.
   * @param {string} kind The kind name.
   * @returns {string} The view id.
   */
  declare export function mapKindToViewId(kind: string): string;

  /**
   * Converts a kind name to it's view id. Used to conventionally map kinds who aren't explicitly mapped through `mapKind`.
   * @param {string} kind The kind name.
   * @returns {string} The view id.
   */
  declare export function convertKindToViewPath(kind: string): string;

  /**
   * Creates a widget.
   * @param {DOMElement} element The DOMElement or knockout virtual element that serves as the target element for the widget.
   * @param {{[key: string]: any}} settings The widget settings.
   * @param {{[key: string]: any}} bindingContext The current binding context.
   */
  declare export function create(
    element: HTMLElement,
    settings: WidgetSettings,
    bindingContext?: KnockoutBindingContext
  ): void;
}
declare module "plugins/serializer" {
  declare interface SerializerOptions {
    /**
     * The default replacer function used during serialization. By default properties starting with '_' or '$' are removed from the serialized object.
     * @param {string} key The object key to check.
     * @param {{[key: string]: any}} value The object value to check.
     * @returns {{[key: string]: any}} The value to serialize.
     */
    replacer?: (key: string, value: any) => any;

    /**
     * The amount of space to use for indentation when writing out JSON.
     * @default undefined
     */
    space: any;
  }
  declare interface DeserializerOptions {
    /**
     * Gets the type id for an object instance, using the configured `typeAttribute`.
     * @param {{[key: string]: any}} object The object to serialize.
     * @returns {string} The type.
     */
    getTypeId: (object: any) => string;

    /**
     * Gets the constructor based on the type id.
     * @param {string} typeId The type id.
     * @returns {Function} The constructor.
     */
    getConstructor: (typeId: string) => () => any;

    /**
     * The default reviver function used during deserialization. By default is detects type properties on objects and uses them to re-construct the correct object using the provided constructor mapping.
     * @param {string} key The attribute key.
     * @param {{[key: string]: any}} value The object value associated with the key.
     * @returns {{[key: string]: any}} The value.
     */
    reviver: (key: string, value: any) => any;
  }

  /**
   * The name of the attribute that the serializer should use to identify an object's type.
   * @default type
   */
  declare export var typeAttribute: string;

  /**
   * The amount of space to use for indentation when writing out JSON.
   * @default undefined
   */
  declare export var space: any;

  /**
   * The default replacer function used during serialization. By default properties starting with '_' or '$' are removed from the serialized object.
   * @param {string} key The object key to check.
   * @param {{[key: string]: any}} value The object value to check.
   * @returns {{[key: string]: any}} The value to serialize.
   */
  declare export function replacer(key: string, value: any): any;

  /**
   * Serializes the object.
   * @param {{[key: string]: any}} object The object to serialize.
   * @param {{[key: string]: any}} settings Settings can specify a replacer or space to override the serializer defaults.
   * @returns {string} The JSON string.
   */
  declare export function serialize(object: any, settings?: string): string;

  /**
   * Serializes the object.
   * @param {{[key: string]: any}} object The object to serialize.
   * @param {{[key: string]: any}} settings Settings can specify a replacer or space to override the serializer defaults.
   * @returns {string} The JSON string.
   */
  declare export function serialize(object: any, settings?: number): string;

  /**
   * Serializes the object.
   * @param {{[key: string]: any}} object The object to serialize.
   * @param {{[key: string]: any}} settings Settings can specify a replacer or space to override the serializer defaults.
   * @returns {string} The JSON string.
   */
  declare export function serialize(
    object: any,
    settings?: SerializerOptions
  ): string;

  /**
   * Gets the type id for an object instance, using the configured `typeAttribute`.
   * @param {{[key: string]: any}} object The object to serialize.
   * @returns {string} The type.
   */
  declare export function getTypeId(object: any): string;

  /**
   * Maps type ids to object constructor functions. Keys are type ids and values are functions.
   */
  declare export var typeMap: any;

  /**
   * Adds a type id/constructor function mampping to the `typeMap`.
   * @param {string} typeId The type id.
   * @param {function} constructor The constructor.
   */
  declare export function registerType(
    typeId: string,
    constructor: () => any
  ): void;

  /**
   * The default reviver function used during deserialization. By default is detects type properties on objects and uses them to re-construct the correct object using the provided constructor mapping.
   * @param {string} key The attribute key.
   * @param {{[key: string]: any}} value The object value associated with the key.
   * @param {function} getTypeId A custom function used to get the type id from a value.
   * @param {{[key: string]: any}} getConstructor A custom function used to get the constructor function associated with a type id.
   * @returns {{[key: string]: any}} The value.
   */
  declare export function reviver(
    key: string,
    value: any,
    getTypeId: (value: any) => string,
    getConstructor: (id: string) => () => any
  ): any;

  /**
   * Deserialize the JSON.
   * @param {text} text The JSON string.
   * @param {DeserializerOptions} settings Settings can specify a reviver, getTypeId function or getConstructor function.
   * @returns {{[key: string]: any}} The deserialized object.
   */
  declare export function deserialize<T>(
    text: string,
    settings?: DeserializerOptions
  ): T;

  /**
   * Clone the object.
   * @param {{[key: string]: any}} obj The object to clone.
   * @param {{[key: string]: any}} settings Settings can specify any of the options allowed by the serialize or deserialize methods.
   * @return {{[key: string]: any}} The new clone.
   */
  declare export function clone<T>(obj: T, settings?: Object): T;
}
declare module "plugins/observable" {
  declare function observable(
    obj: any,
    property: string
  ): KnockoutObservable<any>;

  declare var npm$namespace$observable: {
    convertObject: typeof observable$convertObject,
    convertProperty: typeof observable$convertProperty,
    defineProperty: typeof observable$defineProperty,
    install: typeof observable$install
  };

  /**
   * Converts an entire object into an observable object by re-writing its attributes using ES5 getters and setters. Attributes beginning with '_' or '$' are ignored.
   * @param {{[key: string]: any}} obj The target object to convert.
   */
  declare export function observable$convertObject(obj: any): void;

  /**
   * Converts a normal property into an observable property using ES5 getters and setters.
   * @param {{[key: string]: any}} obj The target object on which the property to convert lives.
   * @param {string} propertyName The name of the property to convert.
   * @param {{[key: string]: any}} original The original value of the property. If not specified, it will be retrieved from the object.
   * @returns {KnockoutObservable} The underlying observable.
   */
  declare export function observable$convertProperty(
    obj: any,
    propertyName: string,
    original?: any
  ): KnockoutObservable<any>;

  /**
   * Defines a computed property using ES5 getters and setters.
   * @param {{[key: string]: any}} obj The target object on which to create the property.
   * @param {string} propertyName The name of the property to define.
   * @param {function | {[key: string]: any}} evaluatorOrOptions The Knockout computed function or computed options object.
   * @returns {KnockoutComputed} The underlying computed observable.
   */
  declare export function observable$defineProperty<T>(
    obj: any,
    propertyName: string,
    evaluatorOrOptions?: KnockoutComputedDefine<T>
  ): KnockoutComputed<T>;

  /**
   * Installs the plugin into the view model binder's `beforeBind` hook so that objects are automatically converted before being bound.
   */
  declare export function observable$install(config: Object): void;

  declare export default typeof observable;
}
declare module "plugins/http" {
  /**
   * The name of the callback parameter to inject into jsonp requests by default.
   * @default callback
   */
  declare export var callbackParam: string;

  /**
   * Converts the data to JSON.
   * @param {{[key: string]: any}} data The data to convert to JSON.
   * @return {string} JSON.
   */
  declare export function toJSON(data: Object): string;

  /**
   * Makes an HTTP GET request.
   * @param {string} url The url to send the get request to.
   * @param {{[key: string]: any}} query An optional key/value object to transform into query string parameters.
   * @param {{[key: string]: any}} headers The data to add to the request header.  It will be converted to JSON. If the data contains Knockout observables, they will be converted into normal properties before serialization.
   * @returns {Promise} A promise of the get response data.
   */
  declare export function get(
    url: string,
    query?: Object,
    headers?: Object
  ): DurandalPromise<any>;

  /**
   * Makes an JSONP request.
   * @param {string} url The url to send the get request to.
   * @param {{[key: string]: any}} query An optional key/value object to transform into query string parameters.
   * @param {string} callbackParam The name of the callback parameter the api expects (overrides the default callbackParam).
   * @param {{[key: string]: any}} headers The data to add to the request header.  It will be converted to JSON. If the data contains Knockout observables, they will be converted into normal properties before serialization.
   * @returns {Promise} A promise of the response data.
   */
  declare export function jsonp(
    url: string,
    query?: Object,
    callbackParam?: string,
    headers?: Object
  ): DurandalPromise<any>;

  /**
   * Makes an HTTP POST request.
   * @param {string} url The url to send the post request to.
   * @param {{[key: string]: any}} data The data to post. It will be converted to JSON. If the data contains Knockout observables, they will be converted into normal properties before serialization.
   * @param {{[key: string]: any}} headers The data to add to the request header.  It will be converted to JSON. If the data contains Knockout observables, they will be converted into normal properties before serialization.
   * @returns {Promise} A promise of the response data.
   */
  declare export function post(
    url: string,
    data: Object,
    headers?: Object
  ): DurandalPromise<any>;

  /**
   * Makes an HTTP PUT request.
   * @method put
   * @param {string} url The url to send the put request to.
   * @param {{[key: string]: any}} data The data to put. It will be converted to JSON. If the data contains Knockout observables, they will be converted into normal properties before serialization.
   * @param {{[key: string]: any}} headers The data to add to the request header.  It will be converted to JSON. If the data contains Knockout observables, they will be converted into normal properties before serialization.
   * @return {Promise} A promise of the response data.
   */
  declare export function put(
    url: string,
    data: Object,
    headers?: Object
  ): DurandalPromise<any>;

  /**
   * Makes an HTTP DELETE request.
   * @method remove
   * @param {string} url The url to send the delete request to.
   * @param {{[key: string]: any}} query An optional key/value object to transform into query string parameters.
   * @param {{[key: string]: any}} headers The data to add to the request header.  It will be converted to JSON. If the data contains Knockout observables, they will be converted into normal properties before serialization.
   * @return {Promise} A promise of the get response data.
   */
  declare export function remove(
    url: string,
    query?: Object,
    headers?: Object
  ): DurandalPromise<any>;
}
declare module "plugins/history" {
  /**
   * The setTimeout interval used when the browser does not support hash change events.
   * @default 50
   */
  declare export var interval: number;

  /**
   * Indicates whether or not the history module is actively tracking history.
   */
  declare export var active: boolean;

  /**
   * Gets the true hash value. Cannot use location.hash directly due to a bug in Firefox where location.hash will always be decoded.
   * @param {string} window The optional window instance
   * @returns {string} The hash.
   */
  declare export function getHash(window?: Window): string;

  /**
   * Get the cross-browser normalized URL fragment, either from the URL, the hash, or the override.
   * @param {string} fragment The fragment.
   * @param {boolean} forcePushState Should we force push state?
   * @returns {string} he fragment.
   */
  declare export function getFragment(
    fragment: string,
    forcePushState: boolean
  ): string;

  /**
   * Activate the hash change handling, returning `true` if the current URL matches an existing route, and `false` otherwise.
   * @param {HistoryOptions}
   * @returns {boolean | void} Returns true/false from loading the url unless the silent option was selected.
   */
  declare export function activate(options: DurandalHistoryOptions): boolean;

  /**
   * Disable history, perhaps temporarily. Not useful in a real app, but possibly useful for unit testing Routers.
   */
  declare export function deactivate(): void;

  /**
   * Checks the current URL to see if it has changed, and if it has, calls `loadUrl`, normalizing across the hidden iframe.
   * @returns {boolean} Returns true/false from loading the url.
   */
  declare export function checkUrl(): boolean;

  /**
   * Attempts to load the current URL fragment. A pass-through to options.routeHandler.
   * @returns {boolean} Returns true/false from the route handler.
   */
  declare export function loadUrl(): boolean;

  /**
   * Save a fragment into the hash history, or replace the URL state if the
   * 'replace' option is passed. You are responsible for properly URL-encoding
   * the fragment in advance.
   * The options object can contain `trigger: false` if you wish to not have the
   * route callback be fired, or `replace: true`, if
   * you wish to modify the current URL without adding an entry to the history.
   * @param {string} fragment The url fragment to navigate to.
   * @param {{[key: string]: any} | boolean} options An options object with optional trigger and replace flags. You can also pass a boolean directly to set the trigger option. Trigger is `true` by default.
   * @return {boolean} Returns true/false from loading the url.
   */
  declare export function navigate(
    fragment: string,
    trigger?: boolean
  ): boolean;

  /**
   * Save a fragment into the hash history, or replace the URL state if the
   * 'replace' option is passed. You are responsible for properly URL-encoding
   * the fragment in advance.
   * The options object can contain `trigger: false` if you wish to not have the
   * route callback be fired, or `replace: true`, if
   * you wish to modify the current URL without adding an entry to the history.
   * @param {string} fragment The url fragment to navigate to.
   * @param {{[key: string]: any} | boolean} options An options object with optional trigger and replace flags. You can also pass a boolean directly to set the trigger option. Trigger is `true` by default.
   * @return {boolean} Returns true/false from loading the url.
   */
  declare export function navigate(
    fragment: string,
    options: DurandalNavigationOptions
  ): boolean;

  /**
   * Navigates back in the browser history.
   */
  declare export function navigateBack(): void;
}
declare module "plugins/dialog" {
  /**
   * Models a message box's message, title and options.
   * @class
   */
  declare class Box {
    constructor(
      message: string,
      title?: string,
      options?: string[],
      autoclose?: boolean,
      settings?: Object
    ): this;

    /**
     * Selects an option and closes the message box, returning the selected option through the dialog system's promise.
     * @param {string} dialogResult The result to select.
     */
    selectOption(dialogResult: string): void;

    /**
     * Provides the view to the composition system.
     * @returns {DOMElement} The view of the message box.
     */
    getView(): HTMLElement;

    /**
     * Configures a custom view to use when displaying message boxes.
     * @method setViewUrl
     * @param {string} viewUrl The view url relative to the base url which the view locator will use to find the message box's view.
     */
    static setViewUrl(viewUrl: string): void;

    /**
     * The title to be used for the message box if one is not provided.
     * @default Application
     * @static
     */
    static defaultTitle: string;

    /**
     * The options to display in the message box if none are specified.
     * @default ['Ok']
     * @static
     */
    static defaultOptions: string[];

    /**
     * Sets the classes and styles used throughout the message box markup.
     * @method setDefaults
     * @param {{[key: string]: any}} settings A settings object containing the following optional properties: buttonClass, primaryButtonClass, secondaryButtonClass, class, style.
     */
    static setDefaults(settings: Object): void;

    /**
     * The markup for the message box's view.
     */
    static defaultViewMarkup: string;
  }
  declare interface DialogContext {
    /**
     * In this function, you are expected to add a DOM element to the tree which will serve as the "host" for the modal's composed view. You must add a property called host to the modalWindow object which references the dom element. It is this host which is passed to the composition module.
     * @param {Dialog} theDialog The dialog model.
     */
    addHost(theDialog: Dialog): void;

    /**
     * This function is expected to remove any DOM machinery associated with the specified dialog and do any other necessary cleanup.
     * @param {Dialog} theDialog The dialog model.
     */
    removeHost(theDialog: Dialog): void;

    /**
     * This function is called after the modal is fully composed into the DOM, allowing your implementation to do any final modifications, such as positioning or animation. You can obtain the original dialog object by using `getDialog` on context.model.
     * @param {DOMElement} child The dialog view.
     * @param {DOMElement} parent The parent view.
     * @param {{[key: string]: any}} context The composition context.
     */
    compositionComplete(
      child: HTMLElement,
      parent: HTMLElement,
      context: composition.CompositionContext
    ): void;

    /**
     * Opacity of the blockout. The default is 0.6.
     */
    blockoutOpacity?: number;
  }
  declare interface Dialog {
    host: HTMLElement;
    owner: any;
    context: DialogContext;
    activator: DurandalActivator<any>;
    close(): DurandalPromise<any>;
    settings: composition.CompositionContext;
  }

  /**
   * The constructor function used to create message boxes.
   */
  declare export var MessageBox: Box;

  /**
   * The css zIndex that the last dialog was displayed at.
   */
  declare export var currentZIndex: number;

  /**
   * Gets the next css zIndex at which a dialog should be displayed.
   * @returns {number} The next usable zIndex.
   */
  declare export function getNextZIndex(): number;

  /**
   * Determines whether or not there are any dialogs open.
   * @returns {boolean} True if a dialog is open. false otherwise.
   */
  declare export function isOpen(): boolean;

  /**
   * Gets the dialog context by name or returns the default context if no name is specified.
   * @param {string} name The name of the context to retrieve.
   * @returns {DialogContext} True context.
   */
  declare export function getContext(name?: string): DialogContext;

  /**
   * Adds (or replaces) a dialog context.
   * @param {string} name The name of the context to add.
   * @param {DialogContext} dialogContext The context to add.
   */
  declare export function addContext(
    name: string,
    modalContext: DialogContext
  ): void;

  /**
   * Gets the dialog model that is associated with the specified object.
   * @param {{[key: string]: any}} obj The object for whom to retrieve the dialog.
   * @returns {Dialog} The dialog model.
   */
  declare export function getDialog(obj: any): Dialog;

  /**
   * Closes the dialog associated with the specified object.
   * @param {{[key: string]: any}} obj The object whose dialog should be closed.
   * @param {{[key: string]: any}} results The results to return back to the dialog caller after closing.
   */
  declare export function close(obj: any, ...results: any[]): void;

  /**
   * Shows a dialog.
   * @param {{[key: string]: any} | string} obj The object (or moduleId) to display as a dialog.
   * @param {{[key: string]: any}} activationData The data that should be passed to the object upon activation.
   * @param {string} context The name of the dialog context to use. Uses the default context if none is specified.
   * @returns {Promise} A promise that resolves when the dialog is closed and returns any data passed at the time of closing.
   */
  declare export function show(
    obj: any,
    activationData?: any,
    context?: string
  ): DurandalPromise<any>;

  /**
   * Shows a message box.
   * @param {string} message The message to display in the dialog.
   * @param {string} title The title message.
   * @param {string[]} options The options to provide to the user.
   * @param {boolean} autoclose Automatically close the the message box when clicking outside?
   * @param {Object} settings Custom settings for this instance of the messsage box, used to change classes and styles.
   * @returns {Promise} A promise that resolves when the message box is closed and returns the selected option.
   */
  declare export function showMessage(
    message: string,
    title?: string,
    options?: string[],
    autoclose?: boolean,
    settings?: Object
  ): DurandalPromise<string>;

  /**
   * Shows a message box.
   * @param {string} message The message to display in the dialog.
   * @param {string} title The title message.
   * @param {DialogButton[]} options The options to provide to the user.
   * @param {boolean} autoclose Automatically close the the message box when clicking outside?
   * @param {Object} settings Custom settings for this instance of the messsage box, used to change classes and styles.
   * @returns {Promise} A promise that resolves when the message box is closed and returns the selected option.
   */
  declare export function showMessage(
    message: string,
    title?: string,
    options?: DialogButton[],
    autoclose?: boolean,
    settings?: Object
  ): DurandalPromise<any>;

  /**
   * Installs this module into Durandal; called by the framework. Adds `app.showDialog` and `app.showMessage` convenience methods.
   * @param {{[key: string]: any}} config Add a `messageBox` property to supply a custom message box constructor. Add a `messageBoxView` property to supply custom view markup for the built-in message box. You can also use messageBoxViewUrl to specify the view url.
   */
  declare export function install(config: Object): void;
}
declare module "durandal/app" {
  declare var theModule: DurandalAppModule;
  declare export default typeof theModule;
}
declare module "durandal/composition" {
  declare interface CompositionTransation {
    /**
     * Registers a callback which will be invoked when the current composition transaction has completed. The transaction includes all parent and children compositions.
     * @param {function} callback The callback to be invoked when composition is complete.
     */
    complete(callback: Function): void;
  }
  declare interface CompositionContext {
    mode: string;
    parent: HTMLElement;
    activeView: HTMLElement;
    triggerAttach(): void;
    bindingContext?: KnockoutBindingContext;
    cacheViews?: boolean;
    viewElements?: HTMLElement[];
    model?: any;
    view?: any;
    area?: string;
    preserveContext?: boolean;
    activate?: boolean;
    strategy?: (context: CompositionContext) => DurandalPromise<HTMLElement>;
    composingNewView: boolean;
    child: HTMLElement;
    binding?: (
      child: HTMLElement,
      parent: HTMLElement,
      context: CompositionContext
    ) => void;
    attached?: (
      child: HTMLElement,
      parent: HTMLElement,
      context: CompositionContext
    ) => void;
    compositionComplete?: (
      child: HTMLElement,
      parent: HTMLElement,
      context: CompositionContext
    ) => void;
    transition?: string;
  }

  /**
   * Converts a transition name to its moduleId.
   * @param {string} name The name of the transtion.
   * @returns {string} The moduleId.
   */
  declare export function convertTransitionToModuleId(name: string): string;

  /**
   * The name of the transition to use in all compositions.
   * @default null
   */
  declare export var defaultTransitionName: string;

  /**
   * Represents the currently executing composition transaction.
   */
  declare export var current: CompositionTransation;

  /**
   * Registers a binding handler that will be invoked when the current composition transaction is complete.
   * @param {string} name The name of the binding handler.
   * @param {{[key: string]: any}} config The binding handler instance. If none is provided, the name will be used to look up an existing handler which will then be converted to a composition handler.
   * @param {function} initOptionsFactory If the registered binding needs to return options from its init call back to knockout, this function will server as a factory for those options. It will receive the same parameters that the init function does.
   */
  declare export function addBindingHandler(
    name: string,
    config?: KnockoutBindingHandler,
    initOptionsFactory?: (
      element?: HTMLElement,
      valueAccessor?: any,
      allBindingsAccessor?: any,
      viewModel?: any,
      bindingContext?: KnockoutBindingContext
    ) => any
  ): void;

  /**
   * Gets an object keyed with all the elements that are replacable parts, found within the supplied elements. The key will be the part name and the value will be the element itself.
   * @param {DOMElement[]} elements The elements to search for parts.
   * @returns {{[key: string]: any}} An object keyed by part.
   */
  declare export function getParts(elements: HTMLElement[]): any;

  /**
   * Gets an object keyed with all the elements that are replacable parts, found within the supplied element. The key will be the part name and the value will be the element itself.
   * @param {DOMElement} element The element to search for parts.
   * @returns {{[key: string]: any}} An object keyed by part.
   */
  declare export function getParts(element: HTMLElement): any;

  /**
   * Eecutes the default view location strategy.
   * @param {{[key: string]: any}} context The composition context containing the model and possibly existing viewElements.
   * @returns {promise} A promise for the view.
   */
  declare export var defaultStrategy: (
    context: CompositionContext
  ) => DurandalPromise<HTMLElement>;

  /**
   * Initiates a composition.
   * @param {DOMElement} element The DOMElement or knockout virtual element that serves as the parent for the composition.
   * @param {{[key: string]: any}} settings The composition settings.
   * @param {{[key: string]: any}} bindingContext The current binding context.
   */
  declare export function compose(
    element: HTMLElement,
    settings: CompositionContext,
    bindingContext: KnockoutBindingContext
  ): void;
}
declare module "durandal/viewLocator" {
  declare var theModule: DurandalViewLocatorModule;
  declare export default typeof theModule;
}
declare module "durandal/activator" {
  /**
   * The default settings used by activators.
   * @property {ActivatorSettings} defaults
   */
  declare export var defaults: DurandalActivatorSettings;

  /**
   * Creates a new activator.
   * @method create
   * @param {{[key: string]: any}} initialActiveItem The item which should be immediately activated upon creation of the ativator.
   * @param {ActivatorSettings} settings Per activator overrides of the default activator settings.
   * @returns {Activator} The created activator.
   */
  declare export function create<T>(
    initialActiveItem?: T,
    settings?: DurandalActivatorSettings
  ): DurandalActivator<T>;

  /**
   * Determines whether or not the provided object is an activator or not.
   * @method isActivator
   * @param {{[key: string]: any}} object Any object you wish to verify as an activator or not.
   * @returns {boolean} True if the object is an activator; false otherwise.
   */
  declare export function isActivator(object: any): boolean;
}
declare module "durandal/binder" {
  declare interface BindingInstruction {
    applyBindings: boolean;
  }

  /**
   * Called before every binding operation. Does nothing by default.
   * @param {{[key: string]: any}} data The data that is about to be bound.
   * @param {DOMElement} view The view that is about to be bound.
   * @param {{[key: string]: any}} instruction The object that carries the binding instructions.
   */
  declare export var binding: (
    data: any,
    view: HTMLElement,
    instruction: BindingInstruction
  ) => void;

  /**
   * Called after every binding operation. Does nothing by default.
   * @param {{[key: string]: any}} data The data that has just been bound.
   * @param {DOMElement} view The view that has just been bound.
   * @param {{[key: string]: any}} instruction The object that carries the binding instructions.
   */
  declare export var bindingComplete: (
    data: any,
    view: HTMLElement,
    instruction: BindingInstruction
  ) => void;

  /**
   * Indicates whether or not the binding system should throw errors or not.
   * @default false The binding system will not throw errors by default. Instead it will log them.
   */
  declare export var throwOnErrors: boolean;

  /**
   * Gets the binding instruction that was associated with a view when it was bound.
   * @param {DOMElement} view The view that was previously bound.
   * @returns {{[key: string]: any}} The object that carries the binding instructions.
   */
  declare export function getBindingInstruction(
    view: HTMLElement
  ): BindingInstruction;

  /**
   * Binds the view, preserving the existing binding context. Optionally, a new context can be created, parented to the previous context.
   * @param {KnockoutBindingContext} bindingContext The current binding context.
   * @param {DOMElement} view The view to bind.
   * @param {{[key: string]: any}} obj The data to bind to, causing the creation of a child binding context if present.
   * @param {string} dataAlias An alias for $data if present.
   */
  declare export function bindContext(
    bindingContext: KnockoutBindingContext,
    view: HTMLElement,
    obj?: any,
    dataAlias?: string
  ): BindingInstruction;

  /**
   * Binds the view, preserving the existing binding context. Optionally, a new context can be created, parented to the previous context.
   * @param {{[key: string]: any}} obj The data to bind to.
   * @param {DOMElement} view The view to bind.
   */
  declare export function bind(obj: any, view: HTMLElement): BindingInstruction;
}
declare module "durandal/events" {
  declare var theModule: DurandalEventModule;
  declare export default typeof theModule;
}
declare module "durandal/viewEngine" {
  declare var theModule: DurandalViewEngineModule;
  declare export default typeof theModule;
}
declare module "durandal/system" {
  declare var theModule: DurandalSystemModule;
  declare export default typeof theModule;
}
declare module "durandal" {
  /**
   * Durandal 2.1.0 Copyright (c) 2012 Blue Spire Consulting, Inc. All Rights Reserved.
   * Available via the MIT license.
   * see: http://durandaljs.com or https://github.com/BlueSpire/Durandal for details.
   */
  declare type DurandalPromise<T> = {} & JQueryPromise<T>;

  declare type DurandalDeferred<T> = {} & JQueryDeferred<T>;

  declare interface DurandalSystemModule {
    /**
     * Durandal's version.
     */
    version: string;

    /**
     * A noop function.
     */
    noop: Function;

    /**
     * Gets the module id for the specified object.
     * @param {{[key: string]: any}} obj The object whose module id you wish to determine.
     * @returns {string} The module id.
     */
    getModuleId(obj: any): string;

    /**
     * Sets the module id for the specified object.
     * @param {{[key: string]: any}} obj The object whose module id you wish to set.
     * @param {string} id The id to set for the specified object.
     */
    setModuleId(obj: any, id: string): void;

    /**
     * Resolves the default object instance for a module. If the module is an object, the module is returned. If the module is a function, that function is called with `new` and it's result is returned.
     * @param {{[key: string]: any}} module The module to use to get/create the default object for.
     * @returns {{[key: string]: any}} The default object for the module.
     */
    resolveObject(module: any): any;

    /**
     * Gets/Sets whether or not Durandal is in debug mode.
     * @param {boolean} enable Turns on/off debugging.
     * @returns {boolean} Whether or not Durandal is current debugging.
     */
    debug(enable?: boolean): boolean;

    /**
     * Logs data to the console. Pass any number of parameters to be logged. Log output is not processed if the framework is not running in debug mode.
     * @param {{[key: string]: any}} info The objects to log.
     */
    log(...msgs: any[]): void;

    /**
     * Logs an error.
     * @param {string} obj The error to report.
     */
    error(error: string): void;

    /**
     * Logs an error.
     * @param {Error} obj The error to report.
     */
    error(error: Error): void;

    /**
     * Asserts a condition by throwing an error if the condition fails.
     * @param {boolean} condition The condition to check.
     * @param {string} message The message to report in the error if the condition check fails.
     */
    assert(condition: boolean, message: string): void;

    /**
     * Creates a deferred object which can be used to create a promise. Optionally pass a function action to perform which will be passed an object used in resolving the promise.
     * @param {function} action The action to defer. You will be passed the deferred object as a parameter.
     * @returns {Deferred} The deferred object.
     */
    defer<T>(action?: (dfd: DurandalDeferred<T>) => void): DurandalDeferred<T>;

    /**
     * Creates a simple V4 UUID. This should not be used as a PK in your database. It can be used to generate internal, unique ids. For a more robust solution see [node-uuid](https://github.com/broofa/node-uuid).
     * @returns {string} The guid.
     */
    guid(): string;

    /**
     * Uses require.js to obtain a module. This function returns a promise which resolves with the module instance.
     * @param {string} moduleId The id of the module to load.
     * @returns {Promise} A promise for the loaded module.
     */
    acquire(moduleId: string): DurandalPromise<any>;

    /**
     * Uses require.js to obtain an array of modules. This function returns a promise which resolves with the modules instances in an array.
     * @param {string[]} moduleIds The ids of the modules to load.
     * @returns {Promise} A promise for the loaded module.
     */
    acquire(modules: string[]): DurandalPromise<any[]>;

    /**
     * Uses require.js to obtain multiple modules. This function returns a promise which resolves with the module instances in an array.
     * @param {string} moduleIds The ids of the modules to load.
     * @returns {Promise} A promise for the loaded module.
     */
    acquire(...moduleIds: string[]): DurandalPromise<any[]>;

    /**
     * Extends the first object with the properties of the following objects.
     * @param {{[key: string]: any}} obj The target object to extend.
     * @param {{[key: string]: any}} extension Uses to extend the target object.
     */
    extend(obj: any, ...extensions: any[]): any;

    /**
     * Uses a setTimeout to wait the specified milliseconds.
     * @param {number} milliseconds The number of milliseconds to wait.
     * @returns {Promise}
     */
    wait(milliseconds: number): DurandalPromise<any>;

    /**
     * Gets all the owned keys of the specified object.
     * @param {{[key: string]: any}} object The object whose owned keys should be returned.
     * @returns {string[]} The keys.
     */
    keys(obj: any): string[];

    /**
     * Determines if the specified object is an html element.
     * @param {{[key: string]: any}} object The object to check.
     * @returns {boolean} True if matches the type, false otherwise.
     */
    isElement(obj: any): boolean;

    /**
     * Determines if the specified object is an array.
     * @param {{[key: string]: any}} object The object to check.
     * @returns {boolean} True if matches the type, false otherwise.
     */
    isArray(obj: any): boolean;

    /**
     * Determines if the specified object is a boolean.
     * @param {{[key: string]: any}} object The object to check.
     * @returns {boolean} True if matches the type, false otherwise.
     */
    isObject(obj: any): boolean;

    /**
     * Determines if the specified object is a promise.
     * @param {{[key: string]: any}} object The object to check.
     * @returns {boolean} True if matches the type, false otherwise.
     */
    isPromise(obj: any): boolean;

    /**
     * Determines if the specified object is a function arguments object.
     * @param {{[key: string]: any}} object The object to check.
     * @returns {boolean} True if matches the type, false otherwise.
     */
    isArguments(obj: any): boolean;

    /**
     * Determines if the specified object is a function.
     * @param {{[key: string]: any}} object The object to check.
     * @returns {boolean} True if matches the type, false otherwise.
     */
    isFunction(obj: any): boolean;

    /**
     * Determines if the specified object is a string.
     * @param {{[key: string]: any}} object The object to check.
     * @returns {boolean} True if matches the type, false otherwise.
     */
    isString(obj: any): boolean;

    /**
     * Determines if the specified object is a number.
     * @param {{[key: string]: any}} object The object to check.
     * @returns {boolean} True if matches the type, false otherwise.
     */
    isNumber(obj: any): boolean;

    /**
     * Determines if the specified object is a date.
     * @param {{[key: string]: any}} object The object to check.
     * @returns {boolean} True if matches the type, false otherwise.
     */
    isDate(obj: any): boolean;

    /**
     * Determines if the specified object is a boolean.
     * @param {{[key: string]: any}} object The object to check.
     * @returns {boolean} True if matches the type, false otherwise.
     */
    isBoolean(obj: any): boolean;
  }
  declare interface DurandalViewEngineModule {
    /**
     * The file extension that view source files are expected to have.
     * @default .html
     */
    viewExtension: string;

    /**
     * The name of the RequireJS loader plugin used by the viewLocator to obtain the view source. (Use requirejs to map the plugin's full path).
     * @default text
     */
    viewPlugin: string;

    /**
     * Parameters passed to the RequireJS loader plugin used by the viewLocator to obtain the view source.
     * @default The empty string by default.
     */
    viewPluginParameters: string;

    /**
     * Determines if the url is a url for a view, according to the view engine.
     * @param {string} url The potential view url.
     * @returns {boolean} True if the url is a view url, false otherwise.
     */
    isViewUrl(url: string): boolean;

    /**
     * Converts a view url into a view id.
     * @param {string} url The url to convert.
     * @returns {string} The view id.
     */
    convertViewUrlToViewId(url: string): string;

    /**
     * Converts a view id into a full RequireJS path.
     * @param {string} viewId The view id to convert.
     * @returns {string} The require path.
     */
    convertViewIdToRequirePath(viewId: string): string;

    /**
     * Parses the view engine recognized markup and returns DOM elements.
     * @param {string} markup The markup to parse.
     * @returns {HTMLElement[]} The elements.
     */
    parseMarkup(markup: string): Node[];

    /**
     * Calls `parseMarkup` and then pipes the results through `ensureSingleElement`.
     * @param {string} markup The markup to process.
     * @returns {HTMLElement} The view.
     */
    processMarkup(markup: string): HTMLElement;

    /**
     * Converts an array of elements into a single element. White space and comments are removed. If a single element does not remain, then the elements are wrapped.
     * @param {HTMLElement[]} allElements The elements.
     * @returns {HTMLElement} A single element.
     */
    ensureSingleElement(allElements: Node[]): HTMLElement;

    /**
     * Gets the view associated with the id from the cache of parsed views.
     * @param {string} id The view id to lookup in the cache.
     * @return {DOMElement | null} The cached view or null if it's not in the cache.
     */
    tryGetViewFromCache(id: string): HTMLElement;

    /**
     * Puts the view associated with the id into the cache of parsed views.
     * @param {string} id The view id whose view should be cached.
     * @param {DOMElement} view The view to cache.
     */
    putViewInCache(id: string, view: HTMLElement): void;

    /**
     * Creates the view associated with the view id.
     * @param {string} viewId The view id whose view should be created.
     * @returns {DurandalPromise<HTMLElement>} A promise of the view.
     */
    createView(viewId: string): DurandalPromise<HTMLElement>;

    /**
     * Called when a view cannot be found to provide the opportunity to locate or generate a fallback view. Mainly used to ease development.
     * @param {string} viewId The view id whose view should be created.
     * @param {string} requirePath The require path that was attempted.
     * @param {Error} requirePath The error that was returned from the attempt to locate the default view.
     * @returns {Promise} A promise for the fallback view.
     */
    createFallbackView(
      viewId: string,
      requirePath: string,
      err: Error
    ): DurandalPromise<HTMLElement>;
  }
  declare interface DurandalViewLocatorModule {
    /**
     * Allows you to set up a convention for mapping module folders to view folders. It is a convenience method that customizes `convertModuleIdToViewId` and `translateViewIdToArea` under the covers.
     * @param {string} modulesPath A string to match in the path and replace with the viewsPath. If not specified, the match is 'viewmodels'.
     * @param {string} viewsPath The replacement for the modulesPath. If not specified, the replacement is 'views'.
     * @param {string} areasPath Partial views are mapped to the "views" folder if not specified. Use this parameter to change their location.
     */
    useConvention(
      modulesPath?: string,
      viewsPath?: string,
      areasPath?: string
    ): void;

    /**
     * Maps an object instance to a view instance.
     * @param {{[key: string]: any}} obj The object to locate the view for.
     * @param {string} area The area to translate the view to.
     * @param {DOMElement[]} elementsToSearch An existing set of elements to search first.
     * @returns {Promise} A promise of the view.
     */
    locateViewForObject(
      obj: any,
      area: string,
      elementsToSearch?: HTMLElement[]
    ): DurandalPromise<HTMLElement>;

    /**
     * Converts a module id into a view id. By default the ids are the same.
     * @param {string} moduleId The module id.
     * @returns {string} The view id.
     */
    convertModuleIdToViewId(moduleId: string): string;

    /**
     * If no view id can be determined, this function is called to genreate one. By default it attempts to determine the object's type and use that.
     * @param {{[key: string]: any}} obj The object to determine the fallback id for.
     * @returns {string} The view id.
     */
    determineFallbackViewId(obj: any): string;

    /**
     * Takes a view id and translates it into a particular area. By default, no translation occurs.
     * @param {string} viewId The view id.
     * @param {string} area The area to translate the view to.
     * @returns {string} The translated view id.
     */
    translateViewIdToArea(viewId: string, area: string): string;

    /**
     * Locates the specified view.
     * @param {string | DOMElement} view A view. It will be immediately returned.
     * @param {string} area The area to translate the view to.
     * @param {DOMElement[]} elementsToSearch An existing set of elements to search first.
     * @returns {Promise} A promise of the view.
     */
    locateView(
      view: HTMLElement,
      area?: string,
      elementsToSearch?: HTMLElement[]
    ): DurandalPromise<HTMLElement>;

    /**
     * Locates the specified view.
     * @param {string | DOMElement} viewUrlOrId A view url or view id to locate.
     * @param {string} area The area to translate the view to.
     * @param {DOMElement[]} elementsToSearch An existing set of elements to search first.
     * @returns {Promise} A promise of the view.
     */
    locateView(
      viewUrlOrId: string,
      area?: string,
      elementsToSearch?: HTMLElement[]
    ): DurandalPromise<HTMLElement>;
  }
  declare interface DurandalEventSubscription {
    /**
     * Attaches a callback to the event subscription.
     * @param {function} callback The callback function to invoke when the event is triggered.
     * @param {{[key: string]: any}} context An object to use as `this` when invoking the `callback`.
     * @chainable
     */
    then(thenCallback: Function, context?: any): DurandalEventSubscription;

    /**
     * Attaches a callback to the event subscription.
     * @param {function} callback The callback function to invoke when the event is triggered. If `callback` is not provided, the previous callback will be re-activated.
     * @param {{[key: string]: any}} context An object to use as `this` when invoking the `callback`.
     * @chainable
     */
    on(thenCallback: Function, context?: any): DurandalEventSubscription;

    /**
     * Cancels the subscription.
     * @chainable
     */
    off(): DurandalEventSubscription;
  }
  declare interface DurandalEventSupport<T> {
    /**
     * Creates a subscription or registers a callback for the specified event.
     * @param {string} events One or more events, separated by white space.
     * @returns {Subscription} A subscription is returned.
     */
    on(events: string): DurandalEventSubscription;

    /**
     * Creates a subscription or registers a callback for the specified event.
     * @param {string} events One or more events, separated by white space.
     * @param {function} callback The callback function to invoke when the event is triggered.
     * @param {{[key: string]: any}} context An object to use as `this` when invoking the `callback`.
     * @returns {Events} The events object is returned for chaining.
     */
    on(events: string, callback: Function, context?: any): T;

    /**
     * Removes the callbacks for the specified events.
     * @param {string} events One or more events, separated by white space to turn off. If no events are specified, then the callbacks will be removed.
     * @param {function} callback The callback function to remove. If `callback` is not provided, all callbacks for the specified events will be removed.
     * @param {{[key: string]: any}} context The object that was used as `this`. Callbacks with this context will be removed.
     * @chainable
     */
    off(events: string, callback: Function, context?: any): T;

    /**
     * Triggers the specified events.
     * @param {string} events One or more events, separated by white space to trigger.
     * @chainable
     */
    trigger(events: string, ...eventArgs: any[]): T;

    /**
     * Creates a function that will trigger the specified events when called. Simplifies proxying jQuery (or other) events through to the events object.
     * @param {string} events One or more events, separated by white space to trigger by invoking the returned function.
     * @returns {function} Calling the function will invoke the previously specified events on the events object.
     */
    proxy(events: string): Function;
  }
  declare interface DurandalEventModule {
    new(): DurandalEventSupport<Object>;
    includeIn(targetObject: any): void;
  }
  declare interface DialogButton {
    text: string;
    value: any;
  }
  declare type DurandalAppModule = {
    /**
     * The title of your application.
     */
    title: string,

    /**
     * Shows a dialog via the dialog plugin.
     * @param {{[key: string]: any} | string} obj The object (or moduleId) to display as a dialog.
     * @param {{[key: string]: any}} activationData The data that should be passed to the object upon activation.
     * @param {string} context The name of the dialog context to use. Uses the default context if none is specified.
     * @returns {Promise} A promise that resolves when the dialog is closed and returns any data passed at the time of closing.
     */
    showDialog(
      obj: any,
      activationData?: any,
      context?: string
    ): DurandalPromise<any>,

    /**
     * Closes the dialog associated with the specified object. via the dialog plugin.
     * @param {{[key: string]: any}} obj The object whose dialog should be closed.
     * @param {{[key: string]: any}} results The results to return back to the dialog caller after closing.
     */
    closeDialog(obj: any, ...results: any[]): void,

    /**
     * Shows a message box via the dialog plugin.
     * @param {string} message The message to display in the dialog.
     * @param {string} title The title message.
     * @param {string[]} options The options to provide to the user.
     * @param {boolean} autoclose Automatically close the the message box when clicking outside?
     * @param {Object} settings Custom settings for this instance of the messsage box, used to change classes and styles.
     * @returns {Promise} A promise that resolves when the message box is closed and returns the selected option.
     */
    showMessage(
      message: string,
      title?: string,
      options?: string[],
      autoclose?: boolean,
      settings?: Object
    ): DurandalPromise<string>,

    /**
     * Shows a message box.
     * @param {string} message The message to display in the dialog.
     * @param {string} title The title message.
     * @param {DialogButton[]} options The options to provide to the user.
     * @param {boolean} autoclose Automatically close the the message box when clicking outside?
     * @param {Object} settings Custom settings for this instance of the messsage box, used to change classes and styles.
     * @returns {Promise} A promise that resolves when the message box is closed and returns the selected option.
     */
    showMessage(
      message: string,
      title?: string,
      options?: DialogButton[],
      autoclose?: boolean,
      settings?: Object
    ): DurandalPromise<any>,

    /**
     * Configures one or more plugins to be loaded and installed into the application.
     * @method configurePlugins
     * @param {{[key: string]: any}} config Keys are plugin names. Values can be truthy, to simply install the plugin, or a configuration object to pass to the plugin.
     * @param {string} baseUrl The base url to load the plugins from.
     */
    configurePlugins(config: Object, baseUrl?: string): void,

    /**
     * Starts the application.
     * @returns {promise}
     */
    start(): DurandalPromise<any>,

    /**
     * Sets the root module/view for the application.
     * @param {string} root The root view or module.
     * @param {string} transition The transition to use from the previous root (or splash screen) into the new root.
     * @param {string} applicationHost The application host element id. By default the id 'applicationHost' will be used.
     */
    setRoot(root: any, transition?: string, applicationHost?: string): void,

    /**
     * Sets the root module/view for the application.
     * @param {string} root The root view or module.
     * @param {string} transition The transition to use from the previous root (or splash screen) into the new root.
     * @param {string} applicationHost The application host element. By default the id 'applicationHost' will be used.
     */
    setRoot(root: any, transition?: string, applicationHost?: HTMLElement): void
  } & DurandalEventSupport<DurandalAppModule>;

  declare interface DurandalActivatorSettings {
    /**
     * The default value passed to an object's deactivate function as its close parameter.
     * @default true
     */
    closeOnDeactivate: boolean;

    /**
     * Lower-cased words which represent a truthy value.
     * @default ['yes', 'ok', 'true']
     */
    affirmations: string[];

    /**
     * Interprets the response of a `canActivate` or `canDeactivate` call using the known affirmative values in the `affirmations` array.
     * @param {{[key: string]: any}} value
     * @returns {boolean}
     */
    interpretResponse(value: any): boolean;

    /**
     * Determines whether or not the current item and the new item are the same.
     * @param {{[key: string]: any}} currentItem
     * @param {{[key: string]: any}} newItem
     * @param {{[key: string]: any}} currentActivationData
     * @param {{[key: string]: any}} newActivationData
     * @returns {boolean}
     */
    areSameItem(
      currentItem: any,
      newItem: any,
      currentActivationData: any,
      newActivationData: any
    ): boolean;

    /**
     * Called immediately before the new item is activated.
     * @param {{[key: string]: any}} newItem
     */
    beforeActivate(newItem: any): any;

    /**
     * Called immediately after the old item is deactivated.
     * @param {{[key: string]: any}} oldItem The previous item.
     * @param {boolean} close Whether or not the previous item was closed.
     * @param {function} setter The activate item setter function.
     */
    afterDeactivate(oldItem: any, close: boolean, setter: Function): void;
  }
  declare type DurandalActivator<T> = {
    /**
     * The settings for this activator.
     */
    settings: DurandalActivatorSettings,

    /**
     * An observable which indicates whether or not the activator is currently in the process of activating an instance.
     * @returns {boolean}
     */
    isActivating: KnockoutObservable<boolean>,

    /**
     * Determines whether or not the specified item can be deactivated.
     * @param {{[key: string]: any}} item The item to check.
     * @param {boolean} close Whether or not to check if close is possible.
     * @returns {promise}
     */
    canDeactivateItem(item: T, close: boolean): DurandalPromise<boolean>,

    /**
     * Deactivates the specified item.
     * @param {{[key: string]: any}} item The item to deactivate.
     * @param {boolean} close Whether or not to close the item.
     * @returns {promise}
     */
    deactivateItem(item: T, close: boolean): DurandalPromise<boolean>,

    /**
     * Determines whether or not the specified item can be activated.
     * @param {{[key: string]: any}} item The item to check.
     * @param {{[key: string]: any}} activationData Data associated with the activation.
     * @returns {promise}
     */
    canActivateItem(newItem: T, activationData?: any): DurandalPromise<boolean>,

    /**
     * Activates the specified item.
     * @param {{[key: string]: any}} newItem The item to activate.
     * @param {{[key: string]: any}} newActivationData Data associated with the activation.
     * @returns {promise}
     */
    activateItem(newItem: T, activationData?: any): DurandalPromise<boolean>,

    /**
     * Determines whether or not the activator, in its current state, can be activated.
     * @returns {promise}
     */
    canActivate(): DurandalPromise<boolean>,

    /**
     * Activates the activator, in its current state.
     * @returns {promise}
     */
    activate(): DurandalPromise<boolean>,

    /**
     * Determines whether or not the activator, in its current state, can be deactivated.
     * @returns {promise}
     */
    canDeactivate(close: boolean): DurandalPromise<boolean>,

    /**
     * Deactivates the activator, in its current state.
     * @returns {promise}
     */
    deactivate(close: boolean): DurandalPromise<boolean>,

    /**
     * Adds canActivate, activate, canDeactivate and deactivate functions to the provided model which pass through to the corresponding functions on the activator.
     */
    includeIn(includeIn: any): void,

    /**
     * Sets up a collection representing a pool of objects which the activator will activate. See below for details. Activators without an item bool always close their values on deactivate. Activators with an items pool only deactivate, but do not close them.
     */
    forItems(items: any[]): DurandalActivator<T>
  } & KnockoutComputed<T>;

  declare interface DurandalHistoryOptions {
    /**
     * The function that will be called back when the fragment changes.
     */
    routeHandler?: (fragment: string) => void;

    /**
     * The url root used to extract the fragment when using push state.
     */
    root?: string;

    /**
     * Use hash change when present.
     * @default true
     */
    hashChange?: boolean;

    /**
     * Use push state when present.
     * @default false
     */
    pushState?: boolean;

    /**
     * Prevents loading of the current url when activating history.
     * @default false
     */
    silent?: boolean;

    /**
     * Override default history init behavior by navigating directly to this route.
     */
    startRoute?: string;
  }
  declare interface DurandalNavigationOptions {
    trigger: boolean;
    replace: boolean;
  }
  declare interface DurandalRouteConfiguration {
    title?: any;
    moduleId?: string;
    hash?: string;
    route?: string | string[];
    routePattern?: RegExp;
    isActive?: KnockoutComputed<boolean>;
    nav?: any;
    hasChildRoutes?: boolean;
    viewUrl?: string;
  }
  declare interface DurandalRouteInstruction {
    fragment: string;
    queryString: string;
    config: DurandalRouteConfiguration;
    params: any[];
    queryParams: {
      [index: string]: any
    };
  }
  declare interface DurandalRelativeRouteSettings {
    moduleId?: string;
    route?: string;
    fromParent?: boolean;
    dynamicHash?: string;
  }
  declare type DurandalRouterBase<T> = {
    /**
     * The route handlers that are registered. Each handler consists of a `routePattern` and a `callback`.
     */
    handlers: {
      routePattern: RegExp,
      callback: (fragment: string) => void
    }[],

    /**
     * The route configs that are registered.
     */
    routes: DurandalRouteConfiguration[],

    /**
     * The active item/screen based on the current navigation state.
     */
    activeItem: DurandalActivator<any>,

    /**
     * The route configurations that have been designated as displayable in a nav ui (nav:true).
     */
    navigationModel: KnockoutObservableArray<DurandalRouteConfiguration>,

    /**
     * Indicates that the router (or a child router) is currently in the process of navigating.
     */
    isNavigating: KnockoutComputed<boolean>,

    /**
     * An observable surfacing the active routing instruction that is currently being processed or has recently finished processing.
     * The instruction object has `config`, `fragment`, `queryString`, `params` and `queryParams` properties.
     */
    activeInstruction: KnockoutObservable<DurandalRouteInstruction>,

    /**
     * Parses a query string into an object.
     * @param {string} queryString The query string to parse.
     * @returns {{[key: string]: any}} An object keyed according to the query string parameters.
     */
    parseQueryString(queryString: string): Object,

    /**
     * Add a route to be tested when the url fragment changes.
     * @param {RegEx} routePattern The route pattern to test against.
     * @param {function} callback The callback to execute when the route pattern is matched.
     */
    route(routePattern: RegExp, callback: (fragment: string) => void): void,

    /**
     * Attempt to load the specified URL fragment. If a route succeeds with a match, returns `true`. If no defined routes matches the fragment, returns `false`.
     * @param {string} fragment The URL fragment to find a match for.
     * @returns {boolean} True if a match was found, false otherwise.
     */
    loadUrl(fragment: string): boolean,

    /**
     * Updates the document title based on the activated module instance, the routing instruction and the app.title.
     * @param {{[key: string]: any}} instance The activated module.
     * @param {{[key: string]: any}} instruction The routing instruction associated with the action. It has a `config` property that references the original route mapping config.
     */
    updateDocumentTitle(
      instance: Object,
      instruction: DurandalRouteInstruction
    ): void,

    /**
     * Save a fragment into the hash history, or replace the URL state if the
     * 'replace' option is passed. You are responsible for properly URL-encoding
     * the fragment in advance.
     * The options object can contain `trigger: false` if you wish to not have the
     * route callback be fired, or `replace: true`, if
     * you wish to modify the current URL without adding an entry to the history.
     * @param {string} fragment The url fragment to navigate to.
     * @param {{[key: string]: any} | boolean} options An options object with optional trigger and replace flags. You can also pass a boolean directly to set the trigger option. Trigger is `true` by default.
     * @return {boolean} Returns true/false from loading the url.
     */
    navigate(fragment: string, trigger?: boolean): boolean,

    /**
     * Save a fragment into the hash history, or replace the URL state if the
     * 'replace' option is passed. You are responsible for properly URL-encoding
     * the fragment in advance.
     * The options object can contain `trigger: false` if you wish to not have the
     * route callback be fired, or `replace: true`, if
     * you wish to modify the current URL without adding an entry to the history.
     * @param {string} fragment The url fragment to navigate to.
     * @param {{[key: string]: any} | boolean} options An options object with optional trigger and replace flags. You can also pass a boolean directly to set the trigger option. Trigger is `true` by default.
     * @return {boolean} Returns true/false from loading the url.
     */
    navigate(fragment: string, options: DurandalNavigationOptions): boolean,

    /**
     * Navigates back in the browser history.
     */
    navigateBack(): void,

    /**
     * Converts a route to a hash suitable for binding to a link's href.
     * @param {string} route
     * @returns {string} The hash.
     */
    convertRouteToHash(route: string): string,

    /**
     * Converts a route to a module id. This is only called if no module id is supplied as part of the route mapping.
     * @param {string} route
     * @returns {string} The module id.
     */
    convertRouteToModuleId(route: string): string,

    /**
     * Converts a route to a displayable title. This is only called if no title is specified as part of the route mapping.
     * @method convertRouteToTitle
     * @param {string} route
     * @returns {string} The title.
     */
    convertRouteToTitle(route: string): string,

    /**
     * Maps route patterns to modules.
     * @param {string} route A route.
     * @chainable
     */
    map(route: string): T,

    /**
     * Maps route patterns to modules.
     * @param {string} route A route pattern.
     * @param {string} moduleId The module id to map the route to.
     * @chainable
     */
    map(route: string, moduleId: string): T,

    /**
     * Maps route patterns to modules.
     * @param {RegExp} route A route pattern.
     * @param {string} moduleId The module id to map the route to.
     * @chainable
     */
    map(route: RegExp, moduleId: string): T,

    /**
     * Maps route patterns to modules.
     * @param {string} route A route pattern.
     * @param {RouteConfiguration} config The route's configuration.
     * @chainable
     */
    map(route: string, config: DurandalRouteConfiguration): T,

    /**
     * Maps route patterns to modules.
     * @method map
     * @param {RegExp} route A route pattern.
     * @param {RouteConfiguration} config The route's configuration.
     * @chainable
     */
    map(route: RegExp, config: DurandalRouteConfiguration): T,

    /**
     * Maps route patterns to modules.
     * @param {RouteConfiguration} config The route's configuration.
     * @chainable
     */
    map(config: DurandalRouteConfiguration): T,

    /**
     * Maps route patterns to modules.
     * @param {RouteConfiguration[]} configs An array of route configurations.
     * @chainable
     */
    map(configs: DurandalRouteConfiguration[]): T,

    /**
     * Builds an observable array designed to bind a navigation UI to. The model will exist in the `navigationModel` property.
     * @param {number} defaultOrder The default order to use for navigation visible routes that don't specify an order. The defualt is 100.
     * @chainable
     */
    buildNavigationModel(defaultOrder?: number): T,

    /**
     * Configures the router to map unknown routes to modules at the same path.
     * @chainable
     */
    mapUnknownRoutes(): T,

    /**
     * Configures the router use the specified module id for all unknown routes.
     * @param {string} notFoundModuleId Represents the module id to route all unknown routes to.
     * @param {string} replaceRoute Optionally provide a route to replace the url with.
     * @chainable
     */
    mapUnknownRoutes(notFoundModuleId: string, replaceRoute?: string): T,

    /**
     * Configures how the router will handle unknown routes.
     * @param {function} callback Called back with the route instruction containing the route info. The function can then modify the instruction by adding a moduleId and the router will take over from there.
     * @chainable
     */
    mapUnknownRoutes(
      callback: (instruction: DurandalRouteInstruction) => void
    ): T,

    /**
     * Configures how the router will handle unknown routes.
     * @param {RouteConfiguration} config The route configuration to use for unknown routes.
     * @chainable
     */
    mapUnknownRoutes(config: DurandalRouteConfiguration): T,

    /**
     * Resets the router by removing handlers, routes, event handlers and previously configured options.
     * @chainable
     */
    reset(): T,

    /**
     * Makes all configured routes and/or module ids relative to a certain base url.
     * @param {string} settings The value is used as the base for routes and module ids.
     * @chainable
     */
    makeRelative(settings: string): T,

    /**
     * Makes all configured routes and/or module ids relative to a certain base url.
     * @param {RelativeRouteSettings} settings If an object, you can specify `route` and `moduleId` separately. In place of specifying route, you can set `fromParent:true` to make routes automatically relative to the parent router's active route.
     * @chainable
     */
    makeRelative(settings: DurandalRelativeRouteSettings): T,

    /**
     * Creates a child router.
     * @returns {Router} The child router.
     */
    createChildRouter(): T,

    /**
     * Inspects routes and modules before activation. Can be used to protect access by cancelling navigation or redirecting.
     * @param {{[key: string]: any}} instance The module instance that is about to be activated by the router.
     * @param {{[key: string]: any}} instruction The route instruction. The instruction object has config, fragment, queryString, params and queryParams properties.
     * @returns {Promise | Boolean | String} If a boolean, determines whether or not the route should activate or be cancelled. If a string, causes a redirect to the specified route. Can also be a promise for either of these value types.
     */
    guardRoute?: (
      instance: Object,
      instruction: DurandalRouteInstruction
    ) => DurandalPromise<boolean | string> | boolean | string,

    /**
     * Parent router of the current child router.
     */
    parent?: DurandalRouter
  } & DurandalEventSupport<T>;

  declare type DurandalRouter = {} & DurandalRouterBase<DurandalRouter>;

  declare type DurandalRootRouter = {
    /**
     * Makes the RegExp generated for routes case sensitive, rather than the default of case insensitive.
     */
    makeRoutesCaseSensitive(): void,

    /**
     * Activates the router and the underlying history tracking mechanism.
     * @returns {Promise} A promise that resolves when the router is ready.
     */
    activate(options?: DurandalHistoryOptions): DurandalPromise<any>,

    /**
     * Disable history, perhaps temporarily. Not useful in a real app, but possibly useful for unit testing Routers.
     */
    deactivate(): void,

    /**
     * Installs the router's custom ko binding handler.
     */
    install(): void
  } & DurandalRouterBase<DurandalRootRouter>;
}
