declare module 'frisby' {
        declare export class FrisbySpec  {
constructor(...args: any[]): this;
catch(onRejected?: (error: Error) => void): FrisbySpec;
del(url: string, params?: {}): FrisbySpec;
done(doneFn: (...args: any[]) => void): FrisbySpec;
expect(expectName: string, ...args: any[]): FrisbySpec;
expectNot(expectName: string): FrisbySpec;
fetch(url: string, params?: {}, options?: {}): FrisbySpec;
fromJSON(json: {}): FrisbySpec;
get(url: string, params?: {}): FrisbySpec;
getBaseUrl(): string | boolean;
inspectBody(): FrisbySpec;
inspectHeaders(): FrisbySpec;
inspectJSON(): FrisbySpec;
inspectLog(...args: any[]): FrisbySpec;
inspectRequest(): FrisbySpec;
inspectRequestHeaders(): FrisbySpec;
inspectResponse(): FrisbySpec;
inspectStatus(): FrisbySpec;
patch(url: string, params?: {}): FrisbySpec;
post(url: string, params?: {}): FrisbySpec;
promise(): Promise<nodeFetch.Response>;
put(url: string, params?: {}): FrisbySpec;
setup(opts: {}, replace: boolean): FrisbySpec;
then(
onFulfilled: {} | ((...args: any[]) => void),
onRejected?: (...args: any[]) => void): FrisbySpec;
timeout(timeout: number): number;
use(fn: (...args: any[]) => void): FrisbySpec;
static addExpectHandler(expectName: string, expectFn: (...args: any[]) => any): void;
static removeExpectHandler(expectName: string): void
}
	declare export var version: string;
	declare export function addExpectHandler(expectName: string, expectFn: (...args: any[]) => any): FrisbySpec

	declare export function baseUrl(url: string): void

	declare export function create(name: string): void

	declare export function del(...args: any[]): FrisbySpec

	declare export function fetch(...args: any[]): FrisbySpec

	declare export function formData(): FormData

	declare export function fromJSON(...args: any[]): FrisbySpec

	declare export function get(...args: any[]): FrisbySpec

	declare export function globalSetup(opts: {}): void

	declare export function patch(...args: any[]): FrisbySpec

	declare export function post(...args: any[]): FrisbySpec

	declare export function put(...args: any[]): FrisbySpec

	declare export function removeExpectHandler(expectName: string, expectFn: (...args: any[]) => any): FrisbySpec

	declare export function setup(...args: any[]): FrisbySpec

	declare export function timeout(...args: any[]): FrisbySpec

	declare export function use(...args: any[]): FrisbySpec

    }
