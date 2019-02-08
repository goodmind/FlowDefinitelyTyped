declare module 'angular' {
        declare interface route$IRouteParamsService {
[key: string]: any
} 

declare interface route$IRouteService {
reload(): void,
routes: any,
current?: route$ICurrentRoute,

/**
 * Causes $route service to update the current URL, replacing current route parameters with those specified in newParams.
 * Provided property names that match the route's path segment definitions will be interpolated into the
 * location's path, while remaining properties will be treated as query params.
 * @param newParams
 * Object.<string, string> mapping of URL parameter names to values
 */
updateParams(newParams: {
[key: string]: string
}): void
} 

declare type route$InlineAnnotatedFunction = Function | Array<string | Function>;


/**
 * see http://docs.angularjs.org/api/ngRoute/provider/$routeProvider#when for API documentation
 */
declare interface route$IRoute {

/**
 * {(string|Function)=}
 * Controller fn that should be associated with newly created scope or the name of a registered controller if passed as a string.
 */
controller?: string | route$InlineAnnotatedFunction,

/**
 * A controller alias name. If present the controller will be published to scope under the controllerAs name.
 */
controllerAs?: string,

/**
 * {(string|Function)=}
 * Html template as a string or a function that returns an html template as a string which should be used by ngView or ngInclude directives. This property takes precedence over templateUrl.
 * 
 * If template is a function, it will be called with the following parameters:
 * 
 * {Array.<Object>} - route parameters extracted from the current $location.path() by applying the current route
 */
template?: string | {
($routeParams?: route$IRouteParamsService): string
},

/**
 * {(string|Function)=}
 * Path or function that returns a path to an html template that should be used by ngView.
 * 
 * If templateUrl is a function, it will be called with the following parameters:
 * 
 * {Array.<Object>} - route parameters extracted from the current $location.path() by applying the current route
 */
templateUrl?: string | {
($routeParams?: route$IRouteParamsService): string
},

/**
 * {Object.<string, Function>=}
 * An optional map of dependencies which should be injected into the controller. If any of these
 * dependencies are promises, the router will wait for them all to be resolved or one to be rejected before
 * the controller is instantiated.
 * If all the promises are resolved successfully, the values of the resolved promises are injected and
 * `$routeChangeSuccess` event is fired. If any of the promises are rejected the `$routeChangeError` event
 * is fired.
 * For easier access to the resolved dependencies from the template, the `resolve` map will be available on
 * the scope of the route, under `$resolve` (by default) or a custom name specified by the `resolveAs`
 * property (see below). This can be particularly useful, when working with components as route templates.
 * 
 * > **Note:** If your scope already contains a property with this name, it will be hidden or overwritten.
 * > Make sure, you specify an appropriate name for this property, that does not collide with other
 * > properties on the scope.
 * 
 * The map object is:
 * 
 * - `key` – `{string}`: a name of a dependency to be injected into the controller.
 * - `factory` - `{string|Function}`: If `string` then it is an alias for a service. Otherwise if function,
 *    then it is called with `$injector#invoke()` and the return value is treated as the dependency. If the
 *    result is a promise, it is resolved before its value is injected into the controller. Be aware that
 *    `ngRoute.$routeParams` will still refer to the previous route within these resolve functions.  Use
 *    `$route.current.params` to access the new route parameters, instead.
 */
resolve?: {
[key: string]: any
},

/**
 * {string=}
 * The name under which the `resolve` map will be available on the scope of the route. If omitted, defaults
 * to `$resolve`.
 */
resolveAs?: string,

/**
 * {(string|Function)=}
 * Value to update `$location` path with and trigger route redirection.
 * 
 * If `redirectTo` is a function, it will be called with the following parameters:
 * 
 * - `{Object.<string>}` - route parameters extracted from the current `$location.path()` by applying the
 *    current route templateUrl.
 * - `{string}` - current `$location.path()`
 * - `{Object}` - current `$location.search()`
 * 
 * The custom `redirectTo` function is expected to return a string which will be used to update
 * `$location.url()`. If the function throws an error, no further processing will take place and the
 * `$routeChangeError` event will be fired.
 * 
 * Routes that specify `redirectTo` will not have their controllers, template functions or resolves called,
 * the `$location` will be changed to the redirect url and route processing will stop. The exception to this
 * is if the `redirectTo` is a function that returns `undefined`. In this case the route transition occurs
 * as though there was no redirection.
 */
redirectTo?: string | {
($routeParams?: route$IRouteParamsService, $locationPath?: string, $locationSearch?: any): string
},

/**
 * {Function=}
 * A function that will (eventually) return the value to update `$location` URL with and trigger route
 * redirection. In contrast to `redirectTo`, dependencies can be injected into `resolveRedirectTo` and the
 * return value can be either a string or a promise that will be resolved to a string.
 * 
 * Similar to `redirectTo`, if the return value is `undefined` (or a promise that gets resolved to
 * `undefined`), no redirection takes place and the route transition occurs as though there was no
 * redirection.
 * 
 * If the function throws an error or the returned promise gets rejected, no further processing will take
 * place and the `$routeChangeError` event will be fired.
 * 
 * `redirectTo` takes precedence over `resolveRedirectTo`, so specifying both on the same route definition,
 * will cause the latter to be ignored.
 */
resolveRedirectTo?: angular.Injectable<(...deps: any[]) => angular.IPromise<string | void> | string | void>,

/**
 * {boolean=true}
 * Reload route when any part of the URL changes (including the path) even if the new URL maps to the same
 * route.
 * 
 * If the option is set to `false` and the URL in the browser changes, but the new URL maps to the same
 * route, then a `$routeUpdate` event is broadcasted on the root scope (without reloading the route).
 * 
 * Defaults to `true`.
 */
reloadOnUrl?: boolean,

/**
 * {boolean=true}
 * Reload route when only `$location.search()` or `$location.hash()` changes.
 * 
 * If the option is set to `false` and the URL in the browser changes, then a `$routeUpdate` event is
 * broadcasted on the root scope (without reloading the route).
 * 
 * > Note: This option has no effect if `reloadOnUrl` is set to `false`.
 * 
 * Defaults to `true`.
 */
reloadOnSearch?: boolean,

/**
 * {boolean=false}
 * Match routes without being case sensitive.
 * If the option is set to `true`, then the particular route can be matched without being case sensitive.
 * 
 * Defaults to `false`.
 */
caseInsensitiveMatch?: boolean
} 

declare type route$ICurrentRoute = {
locals: {
[index: string]: any,
$scope: angular.IScope,
$template: string
},
params: any
} & route$IRoute


declare type route$IRouteProvider = {

/**
 * Match routes without being case sensitive
 * 
 * This option defaults to false. If the option is set to true, then the particular route can be matched without being case sensitive
 */
caseInsensitiveMatch?: boolean,

/**
 * Sets route definition that will be used on route change when no other route definition is matched.
 * @params
 * Mapping information to be assigned to $route.current.
 */
otherwise(params: route$IRoute | string): route$IRouteProvider,

/**
 * Adds a new route definition to the $route service.
 * @param path
 * Route path (matched against $location.path). If $location.path contains redundant trailing slash or is missing one, the route will still match and the $location.path will be updated to add or drop the trailing slash to exactly match the route definition.
 * 
 * - path can contain named groups starting with a colon: e.g. :name. All characters up to the next slash are matched and stored in $routeParams under the given name when the route matches.
 * - path can contain named groups starting with a colon and ending with a star: e.g.:name*. All characters are eagerly stored in $routeParams under the given name when the route matches.
 * - path can contain optional named groups with a question mark: e.g.:name?.
 * 
 * For example, routes like /color/:color/largecode/:largecode*\/edit will match /color/brown/largecode/code/with/slashes/edit and extract: color: brown and largecode: code/with/slashes.
 * @param route
 * Mapping information to be assigned to $route.current on route match.
 */
when(path: string, route: route$IRoute): route$IRouteProvider
} & angular.IServiceProvider

    }
declare module 'angular-route' {
        declare var _: string;
	declare export default typeof _

	import typeof * as angular from 'angular';

    }
