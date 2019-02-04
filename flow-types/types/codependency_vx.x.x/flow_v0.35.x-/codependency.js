declare module 'codependency' {
        declare export interface DependencyInfo {
supportedRange: string | null,
installedVersion: string | null,
isInstalled: boolean | null,
isValid: boolean | null,
pkgPath: string
} 
	declare export interface RequirePeerFunctionOptions {
optional?: boolean,
dontThrow?: boolean
} 
	declare export interface RequirePeerFunction {
(name: string, options?: RequirePeerFunctionOptions): any,
resolve(name: string): DependencyInfo
} 
	declare export function register(baseModule: NodeModule, options?: {
index: string[]
}): RequirePeerFunction

	declare export function get(middlewareName: string): RequirePeerFunction

    }
