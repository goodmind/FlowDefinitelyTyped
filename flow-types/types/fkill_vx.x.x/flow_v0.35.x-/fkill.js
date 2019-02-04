declare module 'fkill' {
        declare module.exports: typeof fkill

	
/**
 * Fabulously kill processes. Cross-platform.
 * @param input One or more process IDs/names/ports to kill.
To kill a port, prefix it with a colon. For example: `:8080`.
 */
declare function fkill(
input: number | string | Array<string | number>,
options?: fkill$fkill$Options): Promise<void>

	declare interface fkill$Options {

/**
 * Force kill the process.
 * @default false
 */
force?: boolean,

/**
 * Kill all child processes along with the parent process. *(Windows only)*
 * @default true
 */
tree?: boolean,

/**
 * Ignore capitalization when killing a process.
 * Note that the case is always ignored on Windows.
 * @default false
 */
ignoreCase?: boolean
} 
    }
