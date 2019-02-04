declare module 'redux-pack' {
        import type {
          ReduxAction,Middleware,Reducer
        } from 'redux';

	declare export var KEY: {
+LIFECYCLE: "redux-pack/LIFECYCLE",
+TRANSACTION: "redux-pack/TRANSACTION"
};
	declare export var LIFECYCLE: {
+START: "start",
+SUCCESS: "success",
+FAILURE: "failure"
};
	declare export type LIFECYCLEValues = "start" | "succes" | "failure";
	declare export var middleware: Middleware;
	declare export type MetaPayload<M> = M & {
"NO PRINT IMPLEMENTED: ComputedPropertyName"?: LIFECYCLEValues,
"NO PRINT IMPLEMENTED: ComputedPropertyName"?: string
};
	declare export type PackActionPayload<Payload, M> = ReduxAction & {
payload: Payload,
meta: MetaPayload<M>
};
	declare export type handlerReducer<S, A> = (state: S, action: A) => S;
	declare export interface Handlers<S, TSuccessPayload, TErrorPayload, TStartPayload, TMetaPayload> {
start?: handlerReducer<S, PackActionPayload<TStartPayload, TMetaPayload>>,
finish?: handlerReducer<S, ReduxAction>,
failure?: handlerReducer<S, PackActionPayload<TErrorPayload, TMetaPayload>>,
success?: handlerReducer<S, PackActionPayload<TSuccessPayload, TMetaPayload>>,
always?: handlerReducer<S, ReduxAction>
} 
	declare export type GetState<S> = () => S;
	declare export interface ActionMeta<TFullState, TSuccessPayload, TErrorPayload, TStartPayload> {
startPayload?: TStartPayload,
onStart(payload: TStartPayload, getState: GetState<TFullState>): void,
onFinish(resolved: boolean, getState: GetState<TFullState>): void,
onSuccess(response: TSuccessPayload, getState: GetState<TFullState>): void,
onFailure(error: TErrorPayload, getState: GetState<TFullState>): void,
"NO PRINT IMPLEMENTED: ComputedPropertyName"?: LIFECYCLEValues,
"NO PRINT IMPLEMENTED: ComputedPropertyName"?: string
} 
	declare export interface PackError {
error: boolean,
payload: any
} 
	declare export type Action<TFullState, TSuccessPayload, TErrorPayload, TStartPayload, TMetaPayload> = {
promise?: Promise<TSuccessPayload>,
payload?: TSuccessPayload | TErrorPayload | TStartPayload,
meta?: ActionMeta<TFullState, TSuccessPayload, TErrorPayload, TStartPayload> & TMetaPayload,
error?: boolean | null
} & ReduxAction

	declare export interface TFullState {
[key: string]: any
} 
	declare export function handle<TState, TSuccessPayload, TErrorPayload, TStartPayload, TMetaPayload>(
state: TState,
action: Action<TFullState, TSuccessPayload, TErrorPayload, TStartPayload, TMetaPayload>,
handlers: Handlers<TState, TSuccessPayload, TErrorPayload, TStartPayload, TMetaPayload>): TState

    }
