declare module 'redux-localstorage' {
        import typeof * as Redux from 'redux';

	declare export interface ActionTypes {
INIT: string
} 
	declare export type AdapterCallback = <A>(err?: any, result?: A) => void;
	declare export interface StorageAdapter<A> {
0: A,
put(key: string, value: any, callback: AdapterCallback): void,
get(key: string, callback: AdapterCallback): void,
del(key: string, callback: AdapterCallback): void
} 
	declare export type StorageAdapterCreator<A> = (storage: A) => StorageAdapter<A>;
	declare export interface StorageAdapterEnhancer {} 
	declare export function mergePersistedState(
merge?: <A1, A2>(initialState: A1, persistentState: A2) => A1 & A2): <A>(next: Redux.Reducer<A>) => Redux.Reducer<A>

	declare export default function persistState<A>(
storage?: StorageAdapter<A>,
key?: string,
callback?: Function): Redux.GenericStoreEnhancer

	declare export function transformState<A1, A2>(
down: ((state: A1) => A2) | Array<(state: any) => any>,
up: ((state: A2) => A1) | Array<(state: any) => any>): (storage: StorageAdapter<A1>) => A2

	declare export var actionTypes: ActionTypes;
    }
