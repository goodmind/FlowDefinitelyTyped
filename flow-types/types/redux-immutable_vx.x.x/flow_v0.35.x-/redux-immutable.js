declare module 'redux-immutable' {
        import type {
          ReducersMapObject,Reducer,Action
        } from 'redux';

	import type {
          Collection
        } from 'immutable';

	declare export function combineReducers<S, A: Action, T>(
reducers: ReducersMapObject<S, A>,
getDefaultState?: () => Collection.Keyed<T, S>): Reducer<S, A>

	declare export function combineReducers<S, A: Action>(
reducers: ReducersMapObject<S, A>,
getDefaultState?: () => Collection.Indexed<S>): Reducer<S, A>

	declare export function combineReducers<S>(
reducers: ReducersMapObject<S, any>,
getDefaultState?: () => Collection.Indexed<S>): Reducer<S>

    }
