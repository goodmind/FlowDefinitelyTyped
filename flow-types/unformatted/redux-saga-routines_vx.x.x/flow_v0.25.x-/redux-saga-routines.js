declare module 'redux-saga-routines' {
        import type {
          Dispatch
        } from 'redux';

	import type {
          Action,ActionMeta,createAction,ActionFunction0,ActionFunction1,ActionFunction2,ActionFunction3,ActionFunction4,ActionFunctionAny
        } from 'redux-actions';

	import type {
          FormSubmitHandler
        } from 'redux-form';

	import type {
          string
        } from 'prop-types';

	declare export function routinePromiseWatcherSaga(): IterableIterator<any>

	declare export type RoutineStages = "TRIGGER"
| "REQUEST"
| "SUCCESS"
| "FAILURE"
| "FULFILL";
	declare export type ActionCreatorFunction<Payload= any, Meta= any> = ActionFunctionAny<Action<Payload> | ActionMeta<Payload, Meta>>;
	declare export type Routine<TTriggerActionCreator= ActionCreatorFunction<>, TRequestActionCreator= ActionCreatorFunction<>, TSuccessActionCreator= ActionCreatorFunction<>, TFailureActionCreator= ActionCreatorFunction<>, TFulfillActionCreator= ActionCreatorFunction<>> = TTriggerActionCreator & $ObjMapi<{[k: RoutineStages]: any}, <key>(key) => string> & {
trigger: TTriggerActionCreator,
request: TRequestActionCreator,
success: TSuccessActionCreator,
failure: TFailureActionCreator,
fulfill: TFulfillActionCreator
};
	declare export type UnifiedRoutine<TActionCreator= ActionCreatorFunction<>> = Routine<TActionCreator, TActionCreator, TActionCreator, TActionCreator, TActionCreator>;
	declare export type ResolveFunctionReturnType<TFunction> = /* Flow doesn't support conditional types, use $Call utility type */ any;
	declare export type ResolveFunctionArg1Type<TFunction> = /* Flow doesn't support conditional types, use $Call utility type */ any;
	declare export type ResolveFunctionArg2Type<TFunction> = /* Flow doesn't support conditional types, use $Call utility type */ any;
	declare export type ResolveFunctionArg3Type<TFunction> = /* Flow doesn't support conditional types, use $Call utility type */ any;
	declare export type ResolveFunctionArg4Type<TFunction> = /* Flow doesn't support conditional types, use $Call utility type */ any;
	declare export type ResolveActionCreatorByPayload<TPayloadCreator, TPayload= ResolveFunctionReturnType<TPayloadCreator>, TArg1= ResolveFunctionArg1Type<TPayloadCreator>, TArg2= ResolveFunctionArg2Type<TPayloadCreator>, TArg3= ResolveFunctionArg3Type<TPayloadCreator>, TArg4= ResolveFunctionArg4Type<TPayloadCreator>> = /* Flow doesn't support conditional types, use $Call utility type */ any;
	declare export type ResolveActionCreatorByMeta<TMetaCreator, TMeta= ResolveFunctionReturnType<TMetaCreator>, TArg1= ResolveFunctionArg1Type<TMetaCreator>, TArg2= ResolveFunctionArg2Type<TMetaCreator>, TArg3= ResolveFunctionArg3Type<TMetaCreator>, TArg4= ResolveFunctionArg4Type<TMetaCreator>> = /* Flow doesn't support conditional types, use $Call utility type */ any;
	declare export type ResolveActionCreatorByPayloadMeta<TPayloadCreator, TMetaCreator, TPayload= ResolveFunctionReturnType<TPayloadCreator>, TMeta= ResolveFunctionReturnType<TMetaCreator>, TArg1= ResolveFunctionArg1Type<TPayloadCreator>, TArg2= ResolveFunctionArg2Type<TPayloadCreator>, TArg3= ResolveFunctionArg3Type<TPayloadCreator>, TArg4= ResolveFunctionArg4Type<TPayloadCreator>> = /* Flow doesn't support conditional types, use $Call utility type */ any;
	declare export interface ReduxFormPayload<TFormData= {}, TProps= {}> {
values: TFormData,
props: TProps
} 
	declare export function bindRoutineToReduxForm<TFormData, TProps>(
routine: Routine<ActionFunction1<ReduxFormPayload<TFormData, TProps>, Action<ReduxFormPayload<TFormData, TProps>>>> | Routine<ActionFunction1<ReduxFormPayload<TFormData, TProps>, ActionMeta<ReduxFormPayload<TFormData, TProps>, any>>>,
noSuccessPayload?: boolean): FormSubmitHandler<TFormData, TProps>

	declare export type PromiseCreator<TPayload= {}> = (payload: TPayload, dispatch: Dispatch) => PromiseLike<any>;
	declare export function promisifyRoutine(routine: Routine<>): PromiseCreator<>

	declare export type BoundPromiseCreator<TPayload= {}> = (payload: TPayload) => PromiseLike<any>;
	declare export function bindPromiseCreators<TPayload>(
promiseCreator: PromiseCreator<TPayload>,
dispatch: Dispatch): BoundPromiseCreator<TPayload>

	declare export function bindPromiseCreators(
promiseCreators: {
[key: string]: PromiseCreator<>
},
dispatch: Dispatch): {
[key: string]: BoundPromiseCreator<>
}

	declare export function bindPromiseCreators(
promiseCreators: {
[key: number]: PromiseCreator<>
},
dispatch: Dispatch): {
[key: number]: BoundPromiseCreator<>
}

	declare export var ROUTINE_PROMISE_ACTION: string;
	declare export function createRoutine<Payload>(
typePrefix: string): UnifiedRoutine<(payload?: Payload) => Action<Payload | void>>

	declare export function createRoutine<Payload>(
typePrefix: string,
payloadCreator: ActionFunction0<Payload>): UnifiedRoutine<ActionFunction0<Action<Payload>>>

	declare export function createRoutine<Payload, Arg1>(
typePrefix: string,
payloadCreator: ActionFunction1<Arg1, Payload>): UnifiedRoutine<ActionFunction1<Arg1, Action<Payload>>>

	declare export function createRoutine<Payload, Arg1, Arg2>(
typePrefix: string,
payloadCreator: ActionFunction2<Arg1, Arg2, Payload>): UnifiedRoutine<ActionFunction2<Arg1, Arg2, Action<Payload>>>

	declare export function createRoutine<Payload, Arg1, Arg2, Arg3>(
typePrefix: string,
payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>): UnifiedRoutine<ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>>

	declare export function createRoutine<Payload, Arg1, Arg2, Arg3, Arg4>(
typePrefix: string,
payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>): UnifiedRoutine<ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>>

	declare export function createRoutine<Meta>(
typePrefix: string,
payloadCreator: null | void,
metaCreator: ActionFunctionAny<Meta>): UnifiedRoutine<(payload?: any) => ActionMeta<any, Meta>>

	declare export function createRoutine<Payload, Meta>(
typePrefix: string,
payloadCreator: ActionFunctionAny<Payload>,
metaCreator: ActionFunctionAny<Meta>): UnifiedRoutine<ActionFunctionAny<ActionMeta<Payload, Meta>>>

	declare export function createRoutine<Payload, Meta, Arg1>(
typePrefix: string,
payloadCreator: ActionFunction1<Arg1, Payload>,
metaCreator: ActionFunction1<Arg1, Meta>): UnifiedRoutine<ActionFunction1<Arg1, ActionMeta<Payload, Meta>>>

	declare export function createRoutine<Payload, Meta, Arg1, Arg2>(
typePrefix: string,
payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
metaCreator: ActionFunction2<Arg1, Arg2, Meta>): UnifiedRoutine<ActionFunction2<Arg1, Arg2, ActionMeta<Payload, Meta>>>

	declare export function createRoutine<Payload, Meta, Arg1, Arg2, Arg3>(
typePrefix: string,
payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
metaCreator: ActionFunction3<Arg1, Arg2, Arg3, Meta>): UnifiedRoutine<ActionFunction3<Arg1, Arg2, Arg3, ActionMeta<Payload, Meta>>>

	declare export function createRoutine<Payload, Meta, Arg1, Arg2, Arg3, Arg4>(
typePrefix: string,
payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
metaCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Meta>): UnifiedRoutine<ActionFunction4<Arg1, Arg2, Arg3, Arg4, ActionMeta<Payload, Meta>>>

	declare export function createRoutine<TTriggerPayloadCreator, TRequestPayloadCreator, TSuccessPayloadCreator, TFailurePayloadCreator, TFulfillPayloadCreator>(
typePrefix: string,
payloadCreator: {
TRIGGER?: TTriggerPayloadCreator,
trigger?: TTriggerPayloadCreator,
REQUEST?: TRequestPayloadCreator,
request?: TRequestPayloadCreator,
SUCCESS?: TSuccessPayloadCreator,
success?: TSuccessPayloadCreator,
FAILURE?: TFailurePayloadCreator,
failure?: TFailurePayloadCreator,
FULFILL?: TFulfillPayloadCreator,
fulfill?: TFulfillPayloadCreator
}): Routine<ResolveActionCreatorByPayload<TTriggerPayloadCreator>, ResolveActionCreatorByPayload<TRequestPayloadCreator>, ResolveActionCreatorByPayload<TSuccessPayloadCreator>, ResolveActionCreatorByPayload<TFailurePayloadCreator>, ResolveActionCreatorByPayload<TFulfillPayloadCreator>>

	declare export function createRoutine<TTriggerMetaCreator, TRequestMetaCreator, TSuccessMetaCreator, TFailureMetaCreator, TFulfillMetaCreator>(
typePrefix: string,
payloadCreator: null | void,
metaCreator: {
TRIGGER?: TTriggerMetaCreator,
trigger?: TTriggerMetaCreator,
REQUEST?: TRequestMetaCreator,
request?: TRequestMetaCreator,
SUCCESS?: TSuccessMetaCreator,
success?: TSuccessMetaCreator,
FAILURE?: TFailureMetaCreator,
failure?: TFailureMetaCreator,
FULFILL?: TFulfillMetaCreator,
fulfill?: TFulfillMetaCreator
}): Routine<ResolveActionCreatorByMeta<TTriggerMetaCreator>, ResolveActionCreatorByMeta<TRequestMetaCreator>, ResolveActionCreatorByMeta<TSuccessMetaCreator>, ResolveActionCreatorByMeta<TFailureMetaCreator>, ResolveActionCreatorByMeta<TFulfillMetaCreator>>

	declare export function createRoutine<TTriggerPayloadCreator, TRequestPayloadCreator, TSuccessPayloadCreator, TFailurePayloadCreator, TFulfillPayloadCreator, TTriggerMetaCreator, TRequestMetaCreator, TSuccessMetaCreator, TFailureMetaCreator, TFulfillMetaCreator>(
typePrefix: string,
payloadCreator: {
TRIGGER?: TTriggerPayloadCreator,
trigger?: TTriggerPayloadCreator,
REQUEST?: TRequestPayloadCreator,
request?: TRequestPayloadCreator,
SUCCESS?: TSuccessPayloadCreator,
success?: TSuccessPayloadCreator,
FAILURE?: TFailurePayloadCreator,
failure?: TFailurePayloadCreator,
FULFILL?: TFulfillPayloadCreator,
fulfill?: TFulfillPayloadCreator
},
metaCreator: {
TRIGGER?: TTriggerMetaCreator,
trigger?: TTriggerMetaCreator,
REQUEST?: TRequestMetaCreator,
request?: TRequestMetaCreator,
SUCCESS?: TSuccessMetaCreator,
success?: TSuccessMetaCreator,
FAILURE?: TFailureMetaCreator,
failure?: TFailureMetaCreator,
FULFILL?: TFulfillMetaCreator,
fulfill?: TFulfillMetaCreator
}): Routine<ResolveActionCreatorByPayloadMeta<TTriggerPayloadCreator, TTriggerMetaCreator>, ResolveActionCreatorByPayloadMeta<TRequestPayloadCreator, TRequestMetaCreator>, ResolveActionCreatorByPayloadMeta<TSuccessPayloadCreator, TSuccessMetaCreator>, ResolveActionCreatorByPayloadMeta<TFailurePayloadCreator, TFailureMetaCreator>, ResolveActionCreatorByPayloadMeta<TFulfillPayloadCreator, TFulfillMetaCreator>>

    }
