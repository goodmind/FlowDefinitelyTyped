declare module 'jasmine-ajax' {
        declare interface JasmineAjaxResponse {
status?: number,
statusText?: string,
responseText?: string,
response?: string,
contentType?: string,
responseHeaders?: {
[key: string]: string
}
} 
	declare type JasmineAjaxRequest = {
url: string,
method: string,
params: any,
username: string,
password: string,
requestHeaders: {
[key: string]: string
},
overriddenMimeType: string,
data(): string,
respondWith(response: JasmineAjaxResponse): void,
responseTimeout(): void,
responseError(): void
} & XMLHttpRequest

	declare interface JasmineAjaxRequestTracker {
track(request: JasmineAjaxRequest): void,
first(): JasmineAjaxRequest,
count(): number,
reset(): void,
mostRecent(): JasmineAjaxRequest,
at(index: number): JasmineAjaxRequest,
filter(urlToMatch: RegExp): JasmineAjaxRequest[],
filter(urlToMatch: Function): JasmineAjaxRequest[],
filter(urlToMatch: string): JasmineAjaxRequest[]
} 
	declare interface JasmineAjaxRequestStubReturnOptions {
status?: number,
contentType?: string,
response?: string,
responseText?: string,
responseHeaders?: {
[key: string]: string
}
} 
	declare interface JasmineAjaxRequestStub {
data?: string,
method?: string,
andReturn(options: JasmineAjaxRequestStubReturnOptions): void,
matches(fullUrl: string, data: string, method: string): boolean
} 
	declare interface JasmineAjaxStubTracker {
addStub(stub: JasmineAjaxRequestStub): void,
reset(): void,
findStub(url: string, data?: string, method?: string): JasmineAjaxRequestStub
} 
	declare interface JasmineAjaxParamParser {
test(xhr: XMLHttpRequest): boolean,
parse(paramString: string): any
} 
	declare class MockAjax  {
constructor(globals: any): this;
install(): void;
uninstall(): void;
withMock(closure: () => void): void;
addCustomParamParser(parser: JasmineAjaxParamParser): void;
stubRequest(url: RegExp, data?: string, method?: string): JasmineAjaxRequestStub;
stubRequest(url: string, data?: string, method?: string): JasmineAjaxRequestStub;
stubRequest(url: RegExp, data?: RegExp, method?: string): JasmineAjaxRequestStub;
stubRequest(url: string, data?: RegExp, method?: string): JasmineAjaxRequestStub;
requests: JasmineAjaxRequestTracker;
stubs: JasmineAjaxStubTracker
}
	
      declare var npm$namespace$jasmine: {
        
        Ajax: typeof jasmine$Ajax,
      }
declare var jasmine$Ajax: MockAjax;
    }
