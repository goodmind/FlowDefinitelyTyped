declare module 'koa-compose' {
        declare function compose<T>(
middleware: Array<compose$compose$Middleware<T>>): compose$compose$ComposedMiddleware<T>

	declare type compose$Middleware<T> = (context: T, next: () => Promise<any>) => any;

declare type compose$ComposedMiddleware<T> = (context: T, next?: () => Promise<any>) => Promise<void>;
	declare module.exports: typeof compose

    }
