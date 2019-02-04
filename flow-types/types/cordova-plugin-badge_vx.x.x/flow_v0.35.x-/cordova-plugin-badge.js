declare module 'cordova-plugin-badge' {
        declare interface CordovaPlugins {
notification: {
badge: CordovaPluginBadge
}
} 
	declare interface CordovaPluginBadgeOptions {
autoClear: boolean
} 
	declare interface CordovaPluginBadge {
clear(callback?: (badge: number) => void, scope?: any): void,
set(badge?: number, callback?: (badge: number) => void, scope?: any): void,
get(callback?: (badge: number) => void, scope?: any): void,
increase(count?: number, callback?: (badge: number) => void, scope?: any): void,
decrease(count?: number, callback?: (badge: number) => void, scope?: any): void,
hasPermission(callback?: (granted: boolean) => void, scope?: any): void,
requestPermission(callback?: (granted: boolean) => void, scope?: any): void,
configure(config: CordovaPluginBadgeOptions): CordovaPluginBadgeOptions
} 
    }
