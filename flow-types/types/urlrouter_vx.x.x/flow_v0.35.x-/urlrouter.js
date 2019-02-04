declare module 'urlrouter' {
        declare function UrlRouterInternal(
handler: (app: UrlRouterInternal$UrlRouterInternal$App) => void): UrlRouterInternal$UrlRouterInternal$HttpHandler

	
      declare var npm$namespace$UrlRouterInternal: {
        _UrlRouterfunc: typeof UrlRouterInternal$_UrlRouterfunc,
        
      }
declare type UrlRouterInternal$ServerRequest = {
params: any
} & http.IncomingMessage


declare type UrlRouterInternal$ServerResponse = {} & http.UrlRouterInternal$ServerResponse


declare interface UrlRouterInternal$App {
get(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
post(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
put(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
head(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
delete(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
options(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
trace(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
copy(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
lock(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
mkcol(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
move(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
propfind(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
proppatch(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
unlock(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
report(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
mkactivity(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
checkout(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
merge(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
m-search(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
notify(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
subscribe(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
unsubscribe(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
patch(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
search(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
all(urlpattern: string, handler: UrlRouterInternal$HttpHandler): void,
redirect(urlpattern: string, to: string): void
} 

declare interface UrlRouterInternal$Options {
paramsName?: string,
pageNotFound?: (
req: UrlRouterInternal$ServerRequest,
res: UrlRouterInternal$ServerResponse) => void,
errorHandler?: (
err: Error,
req: UrlRouterInternal$ServerRequest,
res: UrlRouterInternal$ServerResponse) => void
} 

declare function UrlRouterInternal$_UrlRouterfunc(handler: (app: UrlRouterInternal$App) => void, options?: any): void


declare interface UrlRouterInternal$HttpHandler {
(req: UrlRouterInternal$ServerRequest, res: UrlRouterInternal$ServerResponse, next?: () => void): void
} 
	declare module.exports: typeof UrlRouterInternal

    }
