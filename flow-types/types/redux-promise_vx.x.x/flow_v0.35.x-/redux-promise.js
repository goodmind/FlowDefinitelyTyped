declare module 'redux-promise' {
        import typeof * as Redux from 'redux';

	declare var promise: ReduxPromise$ReduxPromise$Promise;
	declare module.exports: typeof promise

	declare export type ReduxPromise$Promise = {} & Redux.Middleware

	declare module 'redux' {
        declare type PromiseAction<S> = (dispatch: Redux.Dispatch<S>, getState?: () => S) => any;
	declare interface Dispatch<S> {
(asyncAction: PromiseAction<S>): R
} 
    }

    }
