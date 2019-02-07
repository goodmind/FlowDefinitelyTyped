declare module 'next-redux-wrapper' {
        import type {
          IncomingMessage,ServerResponse
        } from 'http';

	import type {
          ComponentType
        } from 'react';

	import type {
          MapDispatchToPropsParam,MapStateToPropsParam,MergeProps,nextReduxWrapper$Options as ConnectOptions
        } from 'react-redux';

	import type {
          Store
        } from 'redux';

	declare interface nextReduxWrapper$Options {
storeKey?: string,
debug?: boolean,
serializeState?: any,
deserializeState?: any
} 

declare type nextReduxWrapper$StoreCreatorOptions<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps> = {
isServer: boolean,
req?: IncomingMessage,
res?: ServerResponse,
query?: any
} & nextReduxWrapper$Options


declare interface nextReduxWrapper$NextPageComponentMethods {
getInitialProps(props: any): Promise<any>
} 

declare type nextReduxWrapper$NextReduxWrappedComponent<P> = ComponentType<P> & nextReduxWrapper$NextPageComponentMethods;

declare type nextReduxWrapper$NextStoreCreator<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps> = (
initialState: TInitialState,
options: nextReduxWrapper$StoreCreatorOptions<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps>) => Store<TInitialState>;
	declare function nextReduxWrapper<TInitialState= any, TStateProps= any, TDispatchProps= any, TOwnProps= any, TMergedProps= any>(
makeStore: nextReduxWrapper$nextReduxWrapper$NextStoreCreator<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
config?: nextReduxWrapper$nextReduxWrapper$Options): (
ComponentType: ComponentType<TOwnProps & TMergedProps>) => nextReduxWrapper$nextReduxWrapper$NextReduxWrappedComponent<TOwnProps>

	declare export default typeof nextReduxWrapper

    }
