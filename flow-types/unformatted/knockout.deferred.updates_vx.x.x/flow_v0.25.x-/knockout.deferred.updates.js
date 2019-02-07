declare module 'knockout.deferred.updates' {
        declare interface KnockoutDeferredTasks {
processImmediate(evaluator: Function, object?: any, args?: any[]): any,
processDelayed(evaluator: Function, distinct?: boolean, options?: any[]): boolean,
makeProcessedCallback(evaluator: Function): void
} 
	declare interface KnockoutStatic {
processAllDeferredBindingUpdates(): void,
processAllDeferredUpdates(): void,
evaluateAsynchronously(evaluator: Function, timeout?: any): number,
ignoreDependencies<<UNKNOWN PARAM FORMAT>>
} 
	declare interface KnockoutSubscribableFunctions<T> {
deferUpdates: boolean
} 
	declare interface KnockoutComputedStatic {
deferUpdates: boolean
} 
	declare interface KnockoutSubscription {
deferUpdates: boolean
} 
	declare interface KnockoutUtils {
objectForEach(obj: any, action: Function): void,
objectMap(source: any, mapping: Function): any
} 
	declare interface KnockoutExtenders {
deferred(target: any, value: boolean): any
} 
    }
