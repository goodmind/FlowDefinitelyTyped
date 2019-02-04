declare module 'jump.js' {
        declare module.exports: typeof jump

	declare function jump(target: string | Element | number, opts?: jump$jump$Options): void

	declare type jump$TransitionFunc = (t: number, b: number, c: number, d: number) => number;

declare interface jump$Options {
duration?: number,
offset?: number,
callback(): void,
easing?: jump$TransitionFunc,
a11y?: boolean
} 
    }
