declare module 'redux-recycle' {
        import type {
          Reducer
        } from 'redux';

	declare export default function recycleState<A>(
reducer: Reducer<A>,
actions: string[],
initialState?: A | Reducer<A>): Reducer<A>

    }
