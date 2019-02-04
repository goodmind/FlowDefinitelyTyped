declare module 'redux-devtools' {
        import typeof * as React from 'react';

	import type {
          GenericStoreEnhancer
        } from 'redux';

	declare export interface IDevTools {
new (): JSX.ElementClass,
instrument(): GenericStoreEnhancer
} 
	declare export function createDevTools(el: React.ReactElement<any>): IDevTools

	declare export function persistState(debugSessionKey: string): GenericStoreEnhancer

	declare var factory: {
instrument(): (opts: any) => any
};
	declare export default typeof factory

    }
