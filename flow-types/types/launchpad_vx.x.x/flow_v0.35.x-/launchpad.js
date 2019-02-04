declare module 'launchpad' {
        
/**
 * For launching local browsers. The callback will be given a Launcher to
 * perform the actual launching.
 */
declare export function local(cb: (err: any, localBrowsers: Launcher) => void): void

	
      declare var npm$namespace$local: {
        
        platform: typeof local$platform,
      }
declare export var local$platform: {
chrome?: BrowserPlatformDetails,
chromium?: BrowserPlatformDetails,
canary?: BrowserPlatformDetails,
firefox?: BrowserPlatformDetails,
aurora?: BrowserPlatformDetails,
opera?: BrowserPlatformDetails,
ie?: BrowserPlatformDetails,
edge?: BrowserPlatformDetails,
safari?: BrowserPlatformDetails,
phantom?: BrowserPlatformDetails,
nodeWebkit?: BrowserPlatformDetails
};
	declare interface BrowserstackAuth {
username: string,
password: string
} 
	declare export function browserstack(
authCreds: BrowserstackAuth,
cb: (err: any, browserstack: Launcher) => void): void

	declare interface BrowserPlatformDetails {
pathQuery?: string,
plistPath?: string,
command?: string,
process?: string,
versionKey?: string,
defaultLocation?: string,
args?: string[],
opensTab?: boolean,
multi?: boolean,
getCommand?: (browser: BrowserPlatformDetails, url: string, args: string[]) => string,
cwd?: string,
imageName?: string
} 
	declare interface LaunchOptions {
browser: string,
version?: string
} 
	declare interface Launcher {
(url: string, options: LaunchOptions, callback: (err: any, instance: Instance) => void): void,
browsers(cb: (error: any, browsers?: Browser[]) => void): void,
chrome: BrowserFunction,
chromium: BrowserFunction,
canary: BrowserFunction,
firefox: BrowserFunction,
aurora: BrowserFunction,
opera: BrowserFunction,
ie: BrowserFunction,
edge: BrowserFunction,
safari: BrowserFunction,
phantom: BrowserFunction,
nodeWebkit: BrowserFunction
} 
	declare interface Browser {
name: string,
version: string,
binPath: string
} 
	declare interface BrowserFunction {
(url: string, callback: (err: any, instance: Instance) => void): void
} 
	declare export interface Instance {
id: string,
stop(cb: (err: any) => void): void,
status(cb: (err: any, status: any) => void): void,
addListener(event: string, listener: Function): this,
on(event: string, listener: Function): this,
once(event: string, listener: Function): this,
removeListener(event: string, listener: Function): this,
removeAllListeners(event?: string): this,
setMaxListeners(n: number): void,
listeners(event: string): Function[],
emit(event: string, ...args: any[]): boolean
} 
    }
