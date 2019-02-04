declare module 'cloneable-readable' {
        import type {
          Readable
        } from 'stream';

	declare type Cloneable<T> = T & {
clone(): Cloneable<T>
};
	declare interface CloneableFn {
(x: T): Cloneable<T>,
isCloneable(x: Readable): boolean
} 
	declare var cloneable: CloneableFn;
	declare module.exports: typeof cloneable

    }
