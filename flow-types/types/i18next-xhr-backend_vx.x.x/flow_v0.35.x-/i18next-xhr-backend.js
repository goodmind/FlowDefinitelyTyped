declare module 'i18next-xhr-backend' {
        declare type I18NextXhrBackend$LoadPathOption = string | ((lngs: string[], namespaces: string[]) => string);

declare interface I18NextXhrBackend$BackendOptions {

/**
 * path where resources get loaded from, or a function
 * returning a path:
 * function(lngs, namespaces) { return customPath; }
 * the returned path will interpolate lng, ns if provided like giving a static path
 */
loadPath?: I18NextXhrBackend$LoadPathOption,

/**
 * path to post missing resources
 */
addPath?: string,

/**
 * your backend server supports multiLoading
 * locales/resources.json?lng=de+en&ns=ns1+ns2
 * set loadPath: '/locales/resources.json?lng={{lng}}&ns={{ns}}' to adapt to multiLoading
 */
allowMultiLoading?: boolean,

/**
 * parse data after it has been fetched
 * in example use https://www.npmjs.com/package/json5
 * here it removes the letter a from the json (bad idea)
 */
parse(data: string): string,

/**
 * allow cross domain requests
 */
crossDomain?: boolean,

/**
 * allow credentials on cross domain requests
 */
withCredentials?: boolean,

/**
 * define a custom xhr function
 * can be used to support XDomainRequest in IE 8 and 9
 */
ajax(
url: string,
options: I18NextXhrBackend$BackendOptions,
callback: I18NextXhrBackend$AjaxRequestCallback,
data: {} | string,
cache: boolean): void,

/**
 * adds parameters to resource URL. 'example.com' -> 'example.com?v=1.3.5'
 */
queryStringParams?: {
[key: string]: string
},

/**
 * @see https://github.com/i18next/i18next-xhr-backend/blob/281c7e235e1157b33122adacef1957252e5700f1/src/ajax.js#L52
 */
customHeaders?: {
[key: string]: string
}
} 

declare type I18NextXhrBackend$AjaxRequestCallback = (response: string, x: XMLHttpRequest) => void;

declare type I18NextXhrBackend$LoadCallback = (error: any, result: string | false) => void;
	declare class I18NextXhrBackend  {
constructor(services?: any, options?: I18NextXhrBackend$I18NextXhrBackend$BackendOptions): this;
init(options?: I18NextXhrBackend$I18NextXhrBackend$BackendOptions): void;
readMulti(
languages: string[],
namespaces: string[],
callback: I18NextXhrBackend$I18NextXhrBackend$LoadCallback): void;
read(
language: string,
namespace: string,
callback: I18NextXhrBackend$I18NextXhrBackend$LoadCallback): void;
loadUrl(url: string, callback: I18NextXhrBackend$I18NextXhrBackend$LoadCallback): void;
create(
languages: string | string[],
namespace: string,
key: string,
fallbackValue: string): void;
type: "backend";
services: any;
options: I18NextXhrBackend$I18NextXhrBackend$BackendOptions
}
	declare module.exports: typeof I18NextXhrBackend

    }
