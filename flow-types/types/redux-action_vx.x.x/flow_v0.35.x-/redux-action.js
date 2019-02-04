declare module 'redux-action' {
        import typeof * as Redux from 'redux';

	declare export interface BaseAction {
type: string
} 
	declare export type Action<Payload> = {
payload: Payload
} & BaseAction

	declare export type MetaAction<Payload, Meta> = {
meta: Meta
} & Action<Payload>

	declare export type ThunkAction<Payload> = (dispatch: Redux.Dispatch<any>, getState: () => any) => Promise<Action<Payload>>;
	declare export type ThunkMetaAction<Payload, Meta> = (
dispatch: Redux.Dispatch<any>,
getState: () => any) => Promise<MetaAction<Payload, Meta>>;
	
/**
 * argument inferring borrowed from redux-actions definitions
 */
declare export type ActionFunction0<R> = () => R;
	declare export type ActionFunction1<T1, R> = (t1: T1) => R;
	declare export type ActionFunction2<T1, T2, R> = (t1: T1, t2: T2) => R;
	declare export type ActionFunction3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
	declare export type ActionFunctionAny<R> = (...args: any[]) => R;
	declare export type ReducerHandler<State> = (payload: any, state?: State, action?: BaseAction) => State;
	declare export interface ReducerHandlers<State> {
[type: string]: ReducerHandler<State>
} 
	declare export function createAction<Payload>(
type: string,
payloadCreator: ActionFunctionAny<Promise<Payload> | Payload>): ActionFunctionAny<ThunkAction<Payload>>

	declare export function createAction<Payload>(
payloadCreator: ActionFunctionAny<Promise<Payload> | Payload>): ActionFunctionAny<ThunkAction<Payload>>

	declare export function createAction<Payload, Arg>(
payloadCreator: ActionFunction1<Arg, Promise<Payload> | Payload>): ActionFunction1<Arg, ThunkAction<Payload>>

	declare export function createAction<Payload, Arg1, Arg2>(
payloadCreator: ActionFunction2<Arg1, Arg2, Promise<Payload> | Payload>): ActionFunction2<Arg1, Arg2, ThunkAction<Payload>>

	declare export function createAction<Payload, Arg1, Arg2, Arg3>(
payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Promise<Payload> | Payload>): ActionFunction3<Arg1, Arg2, Arg3, ThunkAction<Payload>>

	declare export function createAction<Payload, Meta>(
type: string,
payloadCreator: ActionFunctionAny<Promise<Payload> | Payload>,
metaCreator: ActionFunctionAny<Meta>): ActionFunctionAny<ThunkMetaAction<Payload, Meta>>

	declare export function createAction<Payload, Meta>(
payloadCreator: ActionFunctionAny<Promise<Payload> | Payload>,
metaCreator: ActionFunctionAny<Meta>): ActionFunctionAny<ThunkMetaAction<Payload, Meta>>

	declare export function createAction<Payload>(type?: string): ActionFunction1<any, ThunkAction<Payload>>

	declare export function createAction<Payload, Arg>(type?: string): ActionFunction1<Arg, ThunkAction<Payload>>

	declare export function createSyncAction<Payload>(
type: string,
payloadCreator?: ActionFunctionAny<Payload>): ActionFunctionAny<Action<Payload>>

	declare export function createSyncAction<Payload, Meta>(
type: string,
payloadCreator: ActionFunctionAny<Payload>,
metaCreator: ActionFunctionAny<Meta>): ActionFunctionAny<MetaAction<Payload, Meta>>

	declare export function createReducer<State>(
defaultState: State,
handlers: ReducerHandlers<State>): Redux.Reducer<State>

    }
