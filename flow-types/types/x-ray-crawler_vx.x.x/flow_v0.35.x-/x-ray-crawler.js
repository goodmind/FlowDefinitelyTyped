declare module 'x-ray-crawler' {
        declare module.exports: typeof XRayCrawler

	declare function XRayCrawler(driver?: XRayCrawler$XRayCrawler$Driver): XRayCrawler$XRayCrawler$Instance

	declare type XRayCrawler$Callback<T> = (err: Error, obj: T) => void;

declare type XRayCrawler$Driver = (
context: HttpContext.Context,
callback: XRayCrawler$Callback<HttpContext.Context>) => void;

declare type XRayCrawler$RequestHook = (request: HttpContext.Request) => void;

declare type XRayCrawler$ResponseHook = (response: HttpContext.Response) => void;

declare type XRayCrawler$RandomDelay = () => number;

declare interface XRayCrawler$Instance {
(url: string, callback: XRayCrawler$Callback<HttpContext.Context>): void,
driver(): XRayCrawler$Driver,
driver(driver: XRayCrawler$Driver): this,
throttle(): number,
throttle(requests: string | number, rate: string | number): this,
delay(): XRayCrawler$RandomDelay,
delay(from: string | number, to?: string | number): this,
timeout(): number,
timeout(n: string | number): this,
concurrency(): number,
concurrency(n: number): this,
request(): XRayCrawler$RequestHook,
request(fn: XRayCrawler$RequestHook): this,
response(): XRayCrawler$ResponseHook,
response(fn: XRayCrawler$ResponseHook): this,
limit(): number,
limit(n: number): this
} 
    }
