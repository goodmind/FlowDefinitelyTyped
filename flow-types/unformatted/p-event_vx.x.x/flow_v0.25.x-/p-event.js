declare module 'p-event' {
        declare module.exports: typeof pEvent

	declare function pEvent<T, TRest= T>(
emitter: pEvent$pEvent$Emitter<T, TRest>,
event: string | Symbol,
options: MultiArgsOptions<T | TRest>): Promise<Array<T | TRest>>

	declare function pEvent<T>(
emitter: pEvent$pEvent$Emitter<T>,
event: string | Symbol,
filter: FilterFn<T>): Promise<T>

	declare function pEvent<T>(
emitter: pEvent$pEvent$Emitter<T>,
event: string | Symbol,
options?: pEvent$pEvent$Options<T>): Promise<T>

	declare interface pEvent$Emitter<T= any, TRest= T> {
on?: AddRmListenerFn<T, TRest>,
addListener?: AddRmListenerFn<T, TRest>,
addEventListener?: AddRmListenerFn<T, TRest>,
off?: AddRmListenerFn<T, TRest>,
removeListener?: AddRmListenerFn<T, TRest>,
removeEventListener?: AddRmListenerFn<T, TRest>
} 

declare interface pEvent$Options<T> {
rejectionEvents?: string[],
multiArgs?: boolean,
timeout?: number,
filter?: FilterFn<T>
} 
	declare type AddRmListenerFn<T, TRest> = (event: string | Symbol, listener: (arg1: T, ...args: TRest[]) => void) => void;
	declare type FilterFn<T> = (el: T) => boolean;
	declare type MultiArgsOptions<T> = {
multiArgs: true
} & pEvent$pEvent$Options<T>

    }
