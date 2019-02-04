declare module 'selenium-standalone' {
        import typeof * as http from 'http';

	import type {
          URL
        } from 'url';

	import type {
          ChildProcess,SpawnOptions
        } from 'child_process';

	declare export function install(cb: (error: Error | void, fsPaths: FsPaths) => void): void

	declare export function install(opts: InstallOpts, cb: (error: Error | void, fsPaths: FsPaths) => void): void

	declare export function install(
optsCb: InstallOpts | ((error: Error | void, fsPaths: FsPaths) => void),
cb?: (error: Error | void, fsPaths: FsPaths) => void): void

	declare export function start(cb: (error: Error | null, selenium: ChildProcess) => void): void

	declare export function start(
opts: StartOpts,
cb: (error: Error | null, selenium: ChildProcess) => void): void

	declare export function start(
optsCb: StartOpts | ((error: Error | null, selenium: ChildProcess) => void),
cb?: (error: Error | null, selenium: ChildProcess) => void): void

	declare export interface InstallOpts {
baseURL?: string,
basePath?: string,
version?: string,
drivers?: {
[browser: string]: {
version?: string,
arch: string | "ia32" | "x64",
baseURL: string
}
},
progressCb?: (totalLength: number, progressLength: number, chunkLength: number) => void,
logger?: (message: string) => void,
requestOpts?: http.RequestOptions | string | URL,
cb?: (error: Error) => void
} 
	declare export interface StartOpts {
basePath?: string,
version?: string,
drivers?: {
[browser: string]: {
version?: string,
arch: string | "ia32" | "x64",
baseURL: string
}
},
seleniumArgs?: string[],
javaArgs?: string[],
spawnOptions?: SpawnOptions,
spawnCb?: (selenium?: ChildProcess) => void,
javaPath?: string,
requestOpts?: http.RequestOptions | string | URL,
cb?: (error: Error, child: ChildProcess) => void
} 
	declare export interface FsPaths {
[x: string]: any,
chrome?: {
[x: string]: any,
installPath: string
},
ie?: {
[x: string]: any,
installPath: string
},
edge?: {
[x: string]: any,
installPath: string
},
firefox?: {
[x: string]: any,
installPath: string
},
selenium?: {
[x: string]: any,
installPath: string
}
} 
	declare export {
          ChildProcess,SpawnOptions
        }from 'child_process';

    }
