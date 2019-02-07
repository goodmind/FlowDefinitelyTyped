declare module 'chai-http' {
        import typeof * as request from 'superagent';

	declare module 'global' {
        declare interface Chai$ChaiStatic {
request: Chai$ChaiHttpRequest
} 

declare interface Chai$ChaiHttpRequest {
(server: any): ChaiHttp$ChaiHttp$Agent,
agent(server: any): ChaiHttp$ChaiHttp$Agent,
addPromises(promiseConstructor: any): void
} 

declare interface Chai$Assertion {
status(code: number): Chai$Assertion,
header(key: string, value?: string | RegExp): Chai$Assertion,
headers: Chai$Assertion,
json: Chai$Assertion,
text: Chai$Assertion,
html: Chai$Assertion,
redirect: Chai$Assertion,
redirectTo(location: string): Chai$Assertion,
param(key: string, value?: string): Chai$Assertion,
cookie(key: string, value?: string): Chai$Assertion
} 

declare interface Chai$TypeComparison {
ip: Chai$Assertion,
ip: any
} 
	declare interface ChaiHttp$Promise<T> {
then<U>(
onFulfilled: (value: T) => U,
onRejected?: (reason: any) => U): ChaiHttp$Promise<U>
} 

declare interface ChaiHttp$Response {
body: any,
type: string,
status: number,
text: string,
setEncoding(encoding: string): void,
on(event: string, fn: (...args: any[]) => void): void
} 

declare interface ChaiHttp$Agent {
get(
url: string,
callback?: (err: any, res: ChaiHttp$Response) => void): request.Request,
post(
url: string,
callback?: (err: any, res: ChaiHttp$Response) => void): request.Request,
put(
url: string,
callback?: (err: any, res: ChaiHttp$Response) => void): request.Request,
head(
url: string,
callback?: (err: any, res: ChaiHttp$Response) => void): request.Request,
del(
url: string,
callback?: (err: any, res: ChaiHttp$Response) => void): request.Request,
options(
url: string,
callback?: (err: any, res: ChaiHttp$Response) => void): request.Request,
patch(
url: string,
callback?: (err: any, res: ChaiHttp$Response) => void): request.Request,
keepOpen(): ChaiHttp$Agent,
close(callback?: (err: any) => void): ChaiHttp$Agent
} 

declare interface ChaiHttp$TypeComparison {
ip: Chai$Assertion,
ip: any
} 
    }

	declare function chaiHttp(chai: any, utils: any): void

	declare module.exports: typeof chaiHttp

    }
