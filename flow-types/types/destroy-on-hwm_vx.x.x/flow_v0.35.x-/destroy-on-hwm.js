declare module 'destroy-on-hwm' {
        import type {
          Writable
        } from 'stream';

	declare module.exports: typeof destroyOnHwm

	declare function destroyOnHwm<T: Writable>(stream: T, callback?: (stream: T) => void): T

    }
