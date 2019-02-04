declare module 'react-timeout' {
        import typeof * as React from 'react';

	declare module.exports: typeof ReactTimeout

	declare function ReactTimeout<T>(
SourceComponent: React.ComponentClass<T> | React.StatelessComponent<T>): React.ComponentClass<T>

	declare type ReactTimeout$Timer = NodeJS.ReactTimeout$Timer | number;

declare type ReactTimeout$Id = number;

declare interface ReactTimeout$ReactTimeoutProps {
setTimeout?: (
callback: (...args: any[]) => void,
ms: number,
...args: any[]) => ReactTimeout$Timer,
clearTimeout?: (timer: ReactTimeout$Timer) => void,
setInterval?: (
callback: (...args: any[]) => void,
ms: number,
...args: any[]) => ReactTimeout$Id,
clearInterval?: (id: ReactTimeout$Id) => void,
setImmediate?: (callback: (...args: any[]) => void, ...args: any[]) => ReactTimeout$Id,
clearImmediate?: (id: ReactTimeout$Id) => void,
requestAnimationFrame?: (callback: (...args: any[]) => void) => ReactTimeout$Id,
cancelAnimationFrame?: (id: ReactTimeout$Id) => void
} 
    }
