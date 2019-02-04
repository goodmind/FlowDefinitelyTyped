declare module 'routie' {
        declare interface routie$Route {
constructor(path: string, name: string): routie$Route,
addHandler(fn: Function): void,
removeHandler(fn: Function): void,
run(params: any): void,
match(path: string, params: any): boolean,
toURL(params: any): string
} 

declare type routie$Routie = {
(path: string): void,
(path: string, fn: Function): void,
(routes: {
[key: string]: Function
}): void
} & routie$RoutieStatic


declare interface routie$RoutieStatic {
lookup(name: string, fn: Function): string,
remove(path: string, fn: Function): void,
removeAll(): void,
navigate(path: string, options?: routie$RouteOptions): void,
noConflict(): routie$Routie
} 

declare interface routie$RouteOptions {
silent?: boolean
} 
	declare var routie: routie$routie$Routie;
    }
