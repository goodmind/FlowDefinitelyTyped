declare module 'slimerjs' {
        declare var phantom: Phantom;
	declare var slimer: Slimer;
	declare interface Slimer {
version: number,
geckoVersion: number,
clearHttpAuth(): void,
isExiting(): boolean,
hasFeature(featureName: string): boolean,
exit(returnValue?: number): void,
wait(milliseconds: number): void
} 
	declare interface Phantom {
args: string[],
cookies: Cookie[],
cookiesEnabled: boolean,
libraryPath: string,
scriptName: string,
version: {
major: number,
minor: number,
patch: number
},
addCookie(cookie: Cookie): boolean,
clearCookies(): void,
deleteCookie(cookieName: string): boolean,
exit(returnValue?: any): boolean,
injectJs(filename: string): boolean,
onError(msg: string, trace: string[]): any
} 
	declare interface Std {
read(): any,
write(arg: any): void
} 
	declare interface SystemModule {
pid: number,
platform: string,
os: {
architecture: string,
name: string,
version: string
},
env: {
[name: string]: string
},
args: string[],
standarderr: Std,
standardin: Std,
standardout: Std,
stdout: Std,
stderr: Std,
stdin: Std
} 
	declare interface HttpConf {
operation: string,
data: any,
headers: any
} 
	declare interface WebPage {
canGoBack: boolean,
canGoForward: boolean,
clipRect: ClipRect,
content: string,
cookies: Cookie[],
customHeaders: {
[name: string]: string
},
event: any,
focusedFrameName: string,
frameContent: string,
frameName: string,
framePlainText: string,
frameTitle: string,
frameUrl: string,
framesCount: number,
framesName: any,
libraryPath: string,
navigationLocked: boolean,
offlineStoragePath: string,
offlineStorageQuota: number,
ownsPages: boolean,
pages: WebPage[],
pagesWindowName: string,
paperSize: PaperSize,
plainText: string,
scrollPosition: TopLeft,
settings: WebPageSettings,
title: string,
url: string,
viewportSize: Size,
windowName: string,
zoomFactor: number,
captureContent: RegExp[],
addCookie(cookie: Cookie): boolean,
childFramesCount(): number,
childFramesName(): string,
clearCookies(): void,
close(): Promise<void>,
close(): void,
currentFrameName(): string,
deleteCookie(cookieName: string): boolean,
evaluate<R>(callback: (...args: any[]) => R, ...args: any[]): R,
evaluateAsync(fn: (...args: any[]) => void, delayMilli: number, ...args: any[]): void,
evaluateJavaScript(str: string): any,
getPage(windowName: string): WebPage,
go(index: number): void,
goBack(): void,
goForward(): void,
includeJs(url: string): Promise<void>,
includeJs(url: string, callback: () => void): void,
injectJs(filename: string): Promise<boolean>,
injectJs(filename: string): boolean,
open(url: string, callback?: (status: string) => any): Promise<string>,
open(
url: string,
method: string,
callback: (status: string) => any): Promise<string>,
open(
url: string,
method: string,
data: any,
callback?: (status: string) => any): Promise<string>,
open(
url: string,
method: string,
data: any,
headers: any,
callback: (status: string) => any): Promise<string>,
openUrl(url: string, httpConf: HttpConf, settings: any): Promise<string>,
release(): void,
reload(): void,
render(filename: string): void,
render(
filename: string,
options?: {
format?: string,
quality?: string,
ratio?: number,
onlyViewport?: boolean
}): Promise<void>,
renderBase64(type: string): Promise<string>,
renderBase64(format: string): string,
sendEvent(
mouseEventType: string,
mouseX?: number,
mouseY?: number,
button?: string): Promise<void>,
sendEvent(
keyboardEventType: string,
key: string,
null1?: null,
null2?: null,
modifier?: number): Promise<void>,
sendEvent(
mouseEventType: string,
mouseX?: number,
mouseY?: number,
button?: string): void,
sendEvent(
keyboardEventType: string,
keyOrKeys: any,
aNull?: any,
bNull?: any,
modifier?: number): void,
setContent(html: string, url: string): Promise<string>,
setContent(content: string, url: string): void,
stop(): void,
switchToFocusedFrame(): void,
switchToFrame(framePosOrName: number | string): void,
switchToChildFrame(framePosOrName: number | string): void,
switchToMainFrame(): void,
switchToParentFrame(): void,
uploadFile(selector: string, filename: string): void,
onAlert(msg: string): any,
onCallback(): void,
onClosing(closingPage: WebPage): any,
onConfirm(msg: string): boolean,
onConsoleMessage(msg: string, lineNum?: number, sourceId?: string): any,
onError(msg: string, trace: string[]): any,
onFilePicker(oldFile: string): string,
onInitialized(): any,
onLoadFinished(status: string): any,
onLoadStarted(): any,
onNavigationRequested(url: string, type: string, willNavigate: boolean, main: boolean): any,
onPageCreated(newPage: WebPage): any,
onPrompt(msg: string, defaultVal: string): string,
onResourceError(resourceError: ResourceError): any,
onResourceReceived(response: ResourceResponse): any,
onResourceRequested(requestData: ResourceRequest, networkRequest: NetworkRequest): any,
onUrlChanged(targetUrl: string): any,
closing(closingPage: WebPage): void,
initialized(): void,
javaScriptAlertSent(msg: string): void,
javaScriptConsoleMessageSent(msg: string, lineNum?: number, sourceId?: string): void,
loadFinished(status: string): void,
loadStarted(): void,
navigationRequested(url: string, type: string, willNavigate: boolean, main: boolean): void,
rawPageCreated(newPage: WebPage): void,
resourceReceived(response: ResourceResponse): void,
resourceRequested(requestData: ResourceRequest, networkRequest: NetworkRequest): void,
urlChanged(targetUrl: string): void
} 
	declare interface ResourceError {
id: number,
url: string,
errorCode: string,
errorString: string
} 
	declare interface HttpVersion {
major: number,
minor: number
} 
	declare interface ResourceResponse {
id: number,
url: string,
time: Date,
headers: {
[name: string]: string
},
bodySize: number,
contentType?: string,
redirectURL?: string,
stage: string,
status: number,
statusText: string,
contentCharset: string,
referrer: string,
isFileDownloading: boolean,
body: any,
httpVersion: HttpVersion
} 
	declare interface ResourceRequest {
id: number,
method: string,
url: string,
time: Date,
headers: {
[name: string]: string
}
} 
	declare interface NetworkRequest {
abort(): void,
changeUrl(url: string): void,
setHeader(name: string, value: string): void
} 
	declare interface PaperSize {
width?: string,
height?: string,
border: string,
format?: string,
orientation?: string,
margin?: any
} 
	declare interface WebPageSettings {
javascriptEnabled: boolean,
loadImages: boolean,
localToRemoteUrlAccessEnabled: boolean,
userAgent: string,
userName: string,
password: string,
XSSAuditingEnabled: boolean,
webSecurityEnabled: boolean,
resourceTimeout: number
} 
	declare interface FileSystem {
separator: string,
workingDirectory: string,
list(path: string): string[],
absolute(path: string): string,
exists(path: string): boolean,
isDirectory(path: string): boolean,
isFile(path: string): boolean,
isAbsolute(path: string): boolean,
isExecutable(path: string): boolean,
isReadable(path: string): boolean,
isWritable(path: string): boolean,
isLink(path: string): boolean,
readLink(path: string): string,
changeWorkingDirectory(path: string): void,
makeDirectory(path: string): void,
makeTree(path: string): void,
removeDirectory(path: string): void,
removeTree(path: string): void,
copyTree(source: string, destination: string): void,
open(path: string, mode: string | {
mode: string,
charset?: string
}): Stream,
read(path: string): string,
write(path: string, content: string, mode: string): void,
size(path: string): number,
remove(path: string): void,
copy(source: string, destination: string): void,
move(source: string, destination: string): void,
touch(path: string): void
} 
	declare interface Stream {
atEnd(): boolean,
close(): void,
flush(): void,
read(): string,
readLine(): string,
seek(position: number): void,
write(data: string): void,
writeLine(data: string): void
} 
	declare interface WebServer {
registerDirectory(urlpath: string, directoryPath: string): void,
registerFile(urlpath: string, filePath: string): void,
registerPathHandler(
urlpath: string,
handlerCallback: (request: WebServerRequest, response: WebServerResponse) => void): void,
port: number,
listen(
port: number | string,
cb?: (request: WebServerRequest, response: WebServerResponse) => void): boolean,
close(): void
} 
	declare interface WebServerModule {
create(): WebServer
} 
	declare interface WebServerRequest {
method: string,
url: string,
httpVersion: number,
headers: {
[name: string]: string
},
post: string,
postRaw: string
} 
	declare interface WebServerResponse {
headers: {
[name: string]: string
},
setHeader(name: string, value: string): void,
header(name: string): string,
statusCode: number,
setEncoding(encoding: string): void,
write(data: string): void,
writeHead(statusCode: number, headers?: {
[name: string]: string
}): void,
close(): void,
closeGracefully(): void
} 
	declare interface TopLeft {
top: number,
left: number
} 
	declare interface Size {
width: number,
height: number
} 
	declare type ClipRect = {} & TopLeft & Size

	declare interface Cookie {
name: string,
value: string,
domain?: string,
path: string,
httponly?: boolean,
secure?: boolean,
expires?: string,
expiry: number
} 
	declare interface WebPageModule {
create(): WebPage,
exit(returnValue?: number): void
} 
	declare interface Opts {
mode: string,
charset: string,
nobuffer: boolean
} 
	declare interface FsModule {
changeWorkingDirectory(path: string): void,
workingDirectory: string,
exists(path: string): boolean,
isFile(path: string): boolean,
isDirectory(path: string): boolean,
isReadable(path: string): boolean,
isWritable(path: string): boolean,
isLink(path: string): boolean,
size(path: string): number,
lastModified(path: string): Date,
read(path: string, mode: string): string,
write(path: string, content: any, mode: string): void,
separator: string,
join(basepath: string, dirname: string, ...args: string[]): string,
split(path: string): string[],
directory(path: string): string,
dirname(path: string): string,
base(path: string): string,
basename(path: string): string,
absolute(path: string): string,
extension(path: string, withoutdot: boolean): string,
list(path: string): string[],
open(filename: string, opts: Opts): void,
remove(path: string): void,
makeDirectory(path: string): void,
makeTree(path: string): void,
mkpath(path: string): void,
removeDirectory(path: string): void,
removeTree(path: string): void,
rmdir(path: string): void,
copy(source: string, target: string): void,
copyTree(source: string, target: string): void,
rename(path: string, newname: string): void,
move(source: string, target: string): void,
touch(path: string, date: Date): void,
readLink(path: string): string,
isAbsolute(path: string): boolean,
isExecutable(path: string): boolean
} 
	declare function require(module: "webpage"): WebPageModule

	declare function require(module: "webserver"): WebServerModule

	declare function require(module: "system"): SystemModule

	declare function require(module: "fs"): FsModule

	declare function require(module: any): any

    }
