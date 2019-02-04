declare module 'angular-ui-router' {
        import typeof * as angular from 'angular';

	declare var exportedString: "ui.router";
	declare export default typeof exportedString

	declare export type IState = angular.ui.ui$IState;
	declare export type IStateProvider = angular.ui.ui$IStateProvider;
	declare export type IUrlMatcher = angular.ui.ui$IUrlMatcher;
	declare export type IUrlRouterProvider = angular.ui.ui$IUrlRouterProvider;
	declare export type IStateOptions = angular.ui.ui$IStateOptions;
	declare export type IHrefOptions = angular.ui.ui$IHrefOptions;
	declare export type IStateService = angular.ui.ui$IStateService;
	declare export type IResolvedState = angular.ui.ui$IResolvedState;
	declare export type IStateParamsService = angular.ui.ui$IStateParamsService;
	declare export type IUrlRouterService = angular.ui.ui$IUrlRouterService;
	declare export type IUiViewScrollProvider = angular.ui.ui$IUiViewScrollProvider;
	declare export type IType = angular.ui.ui$IType;
	declare module 'angular' {
        declare interface ui$IState {
name?: string,

/**
 * String HTML content, or function that returns an HTML string
 */
template?: string | {
(params: ui$IStateParamsService): string
},

/**
 * String URL path to template file OR Function, returns URL path string
 */
templateUrl?: string | {
(params: ui$IStateParamsService): string
},

/**
 * Function, returns HTML content string
 */
templateProvider?: Function | Array<string | Function>,

/**
 * String, component name
 */
component?: string,

/**
 * A controller paired to the state. Function, annotated array or name as String
 */
controller?: Function | string | Array<string | Function>,
controllerAs?: string,

/**
 * Function (injectable), returns the actual controller function or string.
 */
controllerProvider?: Function | Array<string | Function>,

/**
 * Specifies the parent state of this state
 */
parent?: string | ui$IState,
resolve?: {
[name: string]: any
},

/**
 * A url with optional parameters. When a state is navigated or transitioned to, the $stateParams service will be populated with any parameters that were passed.
 */
url?: string | ui$IUrlMatcher,

/**
 * A map which optionally configures parameters declared in the url, or defines additional non-url parameters. Only use this within a state if you are not using url. Otherwise you can specify your parameters within the url. When a state is navigated or transitioned to, the $stateParams service will be populated with any parameters that were passed.
 */
params?: any,

/**
 * Use the views property to set up multiple views. If you don't need multiple views within a single state this property is not needed. Tip: remember that often nested views are more useful and powerful than multiple sibling views.
 */
views?: {
[name: string]: ui$IState
},
abstract?: boolean,

/**
 * Callback function for when a state is entered. Good way to trigger an action or dispatch an event, such as opening a dialog.
 * If minifying your scripts, make sure to explicitly annotate this function, because it won't be automatically annotated by your build tools.
 */
onEnter?: Function | Array<string | Function>,

/**
 * Callback functions for when a state is entered and exited. Good way to trigger an action or dispatch an event, such as opening a dialog.
 * If minifying your scripts, make sure to explicitly annotate this function, because it won't be automatically annotated by your build tools.
 */
onExit?: Function | Array<string | Function>,

/**
 * Arbitrary data object, useful for custom configuration.
 */
data?: any,

/**
 * Boolean (default true). If false will not re-trigger the same state just because a search/query parameter has changed. Useful for when you'd like to modify $location.search() without triggering a reload.
 */
reloadOnSearch?: boolean,

/**
 * Boolean (default true). If false will reload state on everytransitions. Useful for when you'd like to restore all data  to its initial state.
 */
cache?: boolean,

/**
 * string | function | object
 * Synchronously or asynchronously redirects Transitions to a different state/params
 */
redirectTo?: string | Function | ui$IState
} 

declare interface ui$IUnfoundState {
to: string,
toParams: {},
options: ui$IStateOptions
} 

declare type ui$IStateProvider = {
state(name: string, config: ui$IState): ui$IStateProvider,
state(config: ui$IState): ui$IStateProvider,
decorator(name?: string, decorator?: (state: ui$IState, parent: Function) => any): any
} & angular.IServiceProvider


declare interface ui$IUrlMatcher {
concat(pattern: string): ui$IUrlMatcher,
exec(path: string, search?: any, hash?: string, options?: any): {},
parameters(): string[],
format(values: {}): string
} 

declare interface ui$IUrlMatcherFactory {

/**
 * Creates a UrlMatcher for the specified pattern.
 * @param {string} pattern The URL pattern.
 * @returns {ui$IUrlMatcher} The UrlMatcher.
 */
compile(pattern: string): ui$IUrlMatcher,

/**
 * Returns true if the specified object is a UrlMatcher, or false otherwise.
 * @param {any} o The object to perform the type check against.
 * @returns {boolean} Returns true if the object matches the IUrlMatcher interface, by implementing all the same methods.
 */
isMatcher(o: any): boolean,

/**
 * Returns a type definition for the specified name
 * @param {string} name The type definition name
 * @returns {ui$IType} The type definition
 */
type(name: string): ui$IType,

/**
 * Registers a custom Type object that can be used to generate URLs with typed parameters.
 * @param {ui$IType} definition The type definition.
 * @param {any[]} inlineAnnotedDefinitionFn A function that is injected before the app runtime starts. The result of this function is merged into the existing definition.
 * @returns {ui$IUrlMatcherFactory} Returns $urlMatcherFactoryProvider.
 */
type(
name: string,
definition: ui$IType,
inlineAnnotedDefinitionFn?: any[]): ui$IUrlMatcherFactory,

/**
 * Registers a custom Type object that can be used to generate URLs with typed parameters.
 * @param {ui$IType} definition The type definition.
 * @param {any[]} inlineAnnotedDefinitionFn A function that is injected before the app runtime starts. The result of this function is merged into the existing definition.
 * @returns {ui$IUrlMatcherFactory} Returns $urlMatcherFactoryProvider.
 */
type(
name: string,
definition: ui$IType,
definitionFn?: (...args: any[]) => ui$IType): ui$IUrlMatcherFactory,

/**
 * Defines whether URL matching should be case sensitive (the default behavior), or not.
 * @param {boolean} value false to match URL in a case sensitive manner; otherwise true;
 * @returns {boolean} the current value of caseInsensitive
 */
caseInsensitive(value?: boolean): boolean,

/**
 * Sets the default behavior when generating or matching URLs with default parameter values
 * @param {string} value A string that defines the default parameter URL squashing behavior. nosquash: When generating an href with a default parameter value, do not squash the parameter value from the URL slash: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the parameter is surrounded by slashes, squash (remove) one slash from the URL any other string, e.g. "~": When generating an href with a default parameter value, squash (remove) the parameter value from the URL and replace it with this string.
 */
defaultSquashPolicy(value: string): void,

/**
 * Defines whether URLs should match trailing slashes, or not (the default behavior).
 * @param {boolean} value false to match trailing slashes in URLs, otherwise true.
 * @returns {boolean} the current value of strictMode
 */
strictMode(value?: boolean): boolean
} 

declare type ui$IUrlRouterProvider = {
when(whenPath: RegExp, handler: Function): ui$IUrlRouterProvider,
when(whenPath: RegExp, handler: any[]): ui$IUrlRouterProvider,
when(whenPath: RegExp, toPath: string): ui$IUrlRouterProvider,
when(whenPath: ui$IUrlMatcher, hanlder: Function): ui$IUrlRouterProvider,
when(whenPath: ui$IUrlMatcher, handler: any[]): ui$IUrlRouterProvider,
when(whenPath: ui$IUrlMatcher, toPath: string): ui$IUrlRouterProvider,
when(whenPath: string, handler: Function): ui$IUrlRouterProvider,
when(whenPath: string, handler: any[]): ui$IUrlRouterProvider,
when(whenPath: string, toPath: string): ui$IUrlRouterProvider,
otherwise(handler: Function): ui$IUrlRouterProvider,
otherwise(handler: any[]): ui$IUrlRouterProvider,
otherwise(path: string): ui$IUrlRouterProvider,
rule(handler: Function): ui$IUrlRouterProvider,
rule(handler: any[]): ui$IUrlRouterProvider,

/**
 * Disables (or enables) deferring location change interception.
 * 
 * If you wish to customize the behavior of syncing the URL (for example, if you wish to defer a transition but maintain the current URL), call this method at configuration time. Then, at run time, call $urlRouter.listen() after you have configured your own $locationChangeSuccess event handler.
 * @param {boolean} defer Indicates whether to defer location change interception. Passing no parameter is equivalent to true.
 */
deferIntercept(defer?: boolean): void
} & angular.IServiceProvider


declare interface ui$IStateOptions {

/**
 * {boolean=true|string=} - If true will update the url in the location bar, if false will not. If string, must be "replace", which will update url and also replace last history record.
 */
location?: boolean | string,

/**
 * {boolean=true}, If true will inherit url parameters from current url.
 */
inherit?: boolean,

/**
 * {object=$state.$current}, When transitioning with relative path (e.g '^'), defines which state to be relative from.
 */
relative?: ui$IState,

/**
 * {boolean=true}, If true will broadcast $stateChangeStart and $stateChangeSuccess events.
 */
notify?: boolean,

/**
 * {boolean=false|string|IState}, If true will force transition even if the state or params have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd use this when you want to force a reload when everything is the same, including search params.
 */
reload?: boolean | string | ui$IState
} 

declare interface ui$IHrefOptions {
lossy?: boolean,
inherit?: boolean,
relative?: ui$IState,
absolute?: boolean
} 

declare interface ui$IStateService {

/**
 * Convenience method for transitioning to a new state. $state.go calls $state.transitionTo internally but automatically sets options to { location: true, inherit: true, relative: $state.$current, notify: true }. This allows you to easily use an absolute or relative to path and specify only the parameters you'd like to update (while letting unspecified parameters inherit from the currently active ancestor states).
 * @param to Absolute state name or relative state path. Some examples:

$state.go('contact.detail') - will go to the contact.detail state
$state.go('^') - will go to a parent state
$state.go('^.sibling') - will go to a sibling state
$state.go('.child.grandchild') - will go to grandchild state
 * @param params A map of the parameters that will be sent to the state, will populate $stateParams. Any parameters that are not specified will be inherited from currently defined parameters. This allows, for example, going to a sibling state that shares parameters specified in a parent state. Parameter inheritance only works between common ancestor states, I.e. transitioning to a sibling will get you the parameters for all parents, transitioning to a child will get you all current parameters, etc.
 * @param options Options object.
 */
go(to: string, params?: {}, options?: ui$IStateOptions): angular.IPromise<any>,
go(to: ui$IState, params?: {}, options?: ui$IStateOptions): angular.IPromise<any>,
transitionTo(state: string, params?: {}, updateLocation?: boolean): angular.IPromise<any>,
transitionTo(state: ui$IState, params?: {}, updateLocation?: boolean): angular.IPromise<any>,
transitionTo(state: string, params?: {}, options?: ui$IStateOptions): angular.IPromise<any>,
transitionTo(
state: ui$IState,
params?: {},
options?: ui$IStateOptions): angular.IPromise<any>,
includes(state: string, params?: {}): boolean,
includes(state: string, params?: {}, options?: any): boolean,
is(state: string, params?: {}): boolean,
is(state: ui$IState, params?: {}): boolean,
href(state: ui$IState, params?: {}, options?: ui$IHrefOptions): string,
href(state: string, params?: {}, options?: ui$IHrefOptions): string,
get(state: string | ui$IState, context?: string | ui$IState): ui$IState,
get(): ui$IState[],

/**
 * A reference to the state's config object. However you passed it in. Useful for accessing custom data.
 */
current: ui$IState,

/**
 * A param object, e.g. {sectionId: section.id)}, that you'd like to test against the current active state.
 */
params: ui$IStateParamsService,
reload(reloadState?: string | ui$IState): angular.IPromise<any>,

/**
 * Currently pending transition. A promise that'll resolve or reject.
 */
transition: angular.IPromise<{}>,
$current: ui$IResolvedState
} 

declare interface ui$IResolvedState {
locals: {

/**
 * Currently resolved "resolve" values from the current state
 */
globals: {
[key: string]: any
}
}
} 

declare interface ui$IStateParamsService {
[key: string]: any
} 

declare interface ui$IUrlRouterService {
sync(): void,
listen(): Function,
href(
urlMatcher: ui$IUrlMatcher,
params?: ui$IStateParamsService,
options?: ui$IHrefOptions): string,
update(read?: boolean): void,
push(
urlMatcher: ui$IUrlMatcher,
params?: ui$IStateParamsService,
options?: ui$IHrefOptions): void
} 

declare interface ui$IUiViewScrollProvider {
useAnchorScroll(): void
} 

declare interface ui$IType {

/**
 * Converts a parameter value (from URL string or transition param) to a custom/native value.
 * @param {string} val The URL parameter value to decode.
 * @param {string} key The name of the parameter in which val is stored. Can be used for meta-programming of Type objects.
 * @returns {any} Returns a custom representation of the URL parameter value.
 */
decode(val: string, key: string): any,

/**
 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the return value does not need to be URL-safe (i.e. passed through encodeURIComponent()), it only needs to be a representation of val that has been coerced to a string.
 * @param {any} val The value to encode.
 * @param {string} key The name of the parameter in which val is stored. Can be used for meta-programming of Type objects.
 * @returns {string} Returns a string representation of val that can be encoded in a URL.
 */
encode(val: any, key: string): string,

/**
 * Determines whether two decoded values are equivalent.
 * @param {any} a A value to compare against.
 * @param {any} b A value to compare against.
 * @returns {boolean} Returns true if the values are equivalent/equal, otherwise false.
 */
equals(a: any, b: any): boolean,

/**
 * Detects whether a value is of a particular type. Accepts a native (decoded) value and determines whether it matches the current Type object.
 * @param {any} val The value to check.
 * @param {any} key Optional. If the type check is happening in the context of a specific UrlMatcher object, this is the name of the parameter in which val is stored. Can be used for meta-programming of Type objects.
 * @returns {boolean} Returns true if the value matches the type, otherwise false.
 */
is(val: any, key: string): boolean,

/**
 * The regular expression pattern used to match values of this type when coming from a substring of a URL.
 */
pattern?: RegExp
} 
    }

    }
