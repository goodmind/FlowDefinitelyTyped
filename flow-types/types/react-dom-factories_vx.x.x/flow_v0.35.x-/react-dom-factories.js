declare module 'react-dom-factories' {
        declare module.exports: typeof ReactDOMFactories

	import type {
          ReactDOM
        } from 'react';

	declare var ReactDOMFactories: ReactDOM;
    }
