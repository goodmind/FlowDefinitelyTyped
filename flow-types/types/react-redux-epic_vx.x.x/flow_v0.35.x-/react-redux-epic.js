declare module 'react-redux-epic' {
        import typeof * as React from 'react';

	import type {
          Observable
        } from 'rxjs/Observable';

	import type {
          Action
        } from 'redux';

	import type {
          Epic
        } from 'redux-observable';

	declare export interface Action {
type: string
} 
	declare export function wrapRootEpic<T: Action, S, D, O: T>(epic: Epic<T, S, D, O>): Epic<T, S, D, O>

	declare export function renderToString(
element: React.ReactElement<any>,
wrappedEpic: Epic<any, any>): Observable<{
markup: string
}>

    }
