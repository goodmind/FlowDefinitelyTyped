declare module 'reduce-reducers' {
        import type {
          Reducer
        } from 'redux';

	declare export default function reduceReducer<S>(...reducers: Array<Reducer<S>>): Reducer<S>

    }
