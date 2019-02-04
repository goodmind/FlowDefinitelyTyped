declare module 'angular-resource' {
        declare var _: string;
	declare module.exports: typeof _

	import typeof * as angular from 'angular';

	declare module 'angular' {
        
/**
 * Currently supported options for the $resource factory options argument.
 */
declare interface resource$IResourceOptions {

/**
 * If true then the trailing slashes from any calculated URL will be stripped (defaults to true)
 */
stripTrailingSlashes?: boolean,

/**
 * If true, the request made by a "non-instance" call will be cancelled (if not already completed) by calling
 * $cancelRequest() on the call's return value. This can be overwritten per action. (Defaults to false.)
 */
cancellable?: boolean
} 

declare interface resource$IResourceService {

/**
 * A factory which creates a resource object that lets you interact with RESTful server-side data sources.
 * @param url A parameterized URL template with parameters prefixed by : as in /user/:username
 * @param paramDefaults Default values for url parameters.
 * @param actions example: {update: { method: 'PUT' }, delete: deleteDescriptor } where deleteDescriptor: IActionDescriptor
 * @param options Hash with custom settings that should extend the default $resourceProvider behavior
 */
(url: string, paramDefaults?: any, actions?: resource$IActionHash, options?: resource$IResourceOptions): resource$IResourceClass<resource$IResource<any>>,
(url: string, paramDefaults?: any, actions?: resource$IActionHash, options?: resource$IResourceOptions): resource$IResourceClass<T>,
(url: string, paramDefaults?: any, actions?: resource$IActionHash, options?: resource$IResourceOptions): U
} 

declare interface resource$IActionHash {
[action: string]: resource$IActionDescriptor
} 

declare interface resource$IResourceResponse {
config: any,
data: any,
headers: any,
resource: any,
status: number,
statusText: string
} 

declare interface resource$IResourceInterceptor {
response(response: resource$IResourceResponse): any,
responseError(rejection: any): any
} 

declare interface resource$IActionDescriptor {
method: string,
params?: any,
url?: string,
isArray?: boolean,
transformRequest?: IHttpRequestTransformer | IHttpRequestTransformer[],
transformResponse?: IHttpResponseTransformer | IHttpResponseTransformer[],
headers?: any,
cache?: boolean | ICacheObject,

/**
 * Note: In contrast to $http.config, promises are not supported in $resource, because the same value
 * would be used for multiple requests. If you are looking for a way to cancel requests, you should
 * use the cancellable option.
 */
timeout?: number,
cancellable?: boolean,
withCredentials?: boolean,
responseType?: string,
interceptor?: resource$IResourceInterceptor,
hasBody?: boolean
} 

declare interface resource$IResourceMethod<T> {
(): T,
(params: Object): T,
(success: Function, error?: Function): T,
(params: Object, success: Function, error?: Function): T,
(params: Object, data: Object, success?: Function, error?: Function): T
} 

declare interface resource$IResourceArrayMethod<T> {
(): resource$IResourceArray<T>,
(params: Object): resource$IResourceArray<T>,
(success: Function, error?: Function): resource$IResourceArray<T>,
(params: Object, success: Function, error?: Function): resource$IResourceArray<T>,
(params: Object, data: Object, success?: Function, error?: Function): resource$IResourceArray<T>
} 

declare interface resource$IResourceClass<T> {
new (dataOrParams?: any): T & resource$IResource<T>,
get: resource$IResourceMethod<T>,
query: resource$IResourceArrayMethod<T>,
save: resource$IResourceMethod<T>,
remove: resource$IResourceMethod<T>,
delete: resource$IResourceMethod<T>
} 

declare interface resource$IResource<T> {
$get(): IPromise<T>,
$get(params?: Object, success?: Function, error?: Function): IPromise<T>,
$get(success: Function, error?: Function): IPromise<T>,
$query(): IPromise<resource$IResourceArray<T>>,
$query(
params?: Object,
success?: Function,
error?: Function): IPromise<resource$IResourceArray<T>>,
$query(success: Function, error?: Function): IPromise<resource$IResourceArray<T>>,
$save(): IPromise<T>,
$save(params?: Object, success?: Function, error?: Function): IPromise<T>,
$save(success: Function, error?: Function): IPromise<T>,
$remove(): IPromise<T>,
$remove(params?: Object, success?: Function, error?: Function): IPromise<T>,
$remove(success: Function, error?: Function): IPromise<T>,
$delete(): IPromise<T>,
$delete(params?: Object, success?: Function, error?: Function): IPromise<T>,
$delete(success: Function, error?: Function): IPromise<T>,
$cancelRequest(): void,

/**
 * The promise of the original server interaction that created this instance.
 */
$promise: IPromise<T>,
$resolved: boolean,
toJSON(): T
} 


/**
 * Really just a regular Array object with $promise and $resolve attached to it
 */
declare type resource$IResourceArray<T> = {
$cancelRequest(): void,

/**
 * The promise of the original server interaction that created this collection.
 */
$promise: IPromise<resource$IResourceArray<T>>,
$resolved: boolean
} & Array<T & resource$IResource<T>>



/**
 * when creating a resource factory via IModule.factory
 */
declare interface resource$IResourceServiceFactoryFunction<T> {
($resource: resource$IResourceService): resource$IResourceClass<T>,
($resource: resource$IResourceService): U
} 

declare type resource$IResourceServiceProvider = {
defaults: resource$IResourceOptions
} & IServiceProvider

	
/**
 * extensions to base ng based on using angular-resource
 */
declare interface IModule {

/**
 * creating a resource service factory
 */
factory(
name: string,
resourceServiceFactoryFunction: resource$resource$IResourceServiceFactoryFunction<any>): IModule
} 
	declare interface auto$IInjectorService {
get(name: "$resource"): resource$resource$IResourceService
} 
    }

	declare module 'global' {
        declare interface Array<T> {

/**
 * The promise of the original server interaction that created this collection.
 */
$promise: angular.IPromise<T[]>,
$resolved: boolean
} 
    }

    }
