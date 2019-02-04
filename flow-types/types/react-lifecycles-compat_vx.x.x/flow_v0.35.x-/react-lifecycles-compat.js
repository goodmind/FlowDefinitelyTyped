declare module 'react-lifecycles-compat' {
        import typeof * as React from 'react';

	declare export function polyfill<T: React.ComponentType<any>>(
Comp: T): T & $ObjMapi<T, <K>(K) => $ElementType<T, K>>

    }
