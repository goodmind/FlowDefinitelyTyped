declare module 'navigo' {
        declare type Keys = string;
	declare type State = $ObjMapi<{[k: Keys]: any}, <k>(k) => any>;
	declare type Params = State;
	declare interface NavigoHooks {
before(done: (suppress?: boolean) => void, params?: Params): void,
after(params?: Params): void,
leave(params?: Params): void,
already(params?: Params): void
} 
	declare interface GenericHooks {
before(done: (suppress?: boolean) => void, params?: Params): void,
after(params?: Params): void
} 
	declare type RouteHandler = ((params: Params, query: string) => void) | {
as: string,
uses(params: Params, query: string): void
};
	declare class Navigo  {

/**
 * Constructs the router
 * @param root The main URL of your application.
 * @param useHash If useHash set to true then the router uses an old routing approach with hash in the URL. Navigo anyways falls back to this mode if there is no History API supported.
 */
constructor(root?: string | null, useHash?: boolean, hash?: string): this;
on(location: string, handler: RouteHandler, hooks?: NavigoHooks): Navigo;
on(
location: RegExp,
handler: (...parameters: string[]) => void,
hooks?: NavigoHooks): Navigo;
on(routes: {
[key: string]: RouteHandler
}): Navigo;
on(rootHandler: RouteHandler, hooks?: NavigoHooks): Navigo;
off(location: string, handler: RouteHandler): void;
notFound(handler: ((query: string) => void), hooks?: NavigoHooks): void;
navigate(path: string, absolute?: boolean): void;
updatePageLinks(): void;
generate(path: string, params?: any): string;
getLinkPath(link: any): any;
resolve(currentURL?: string): boolean;
link(path: string): string;
lastRouteResolved(
): {
url: string,
query: string,
hooks: NavigoHooks,
params?: Params,
name?: string
};
disableIfAPINotAvailable(): void;
historyAPIUpdateMethod(method?: string): void;
hooks(hooks: GenericHooks): void;
pause(change?: boolean): void;
resume(): void;
destroy(): void
}
	declare module.exports: typeof Navigo

    }
