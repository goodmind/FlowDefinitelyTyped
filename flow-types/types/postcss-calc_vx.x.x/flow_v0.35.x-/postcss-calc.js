declare module 'postcss-calc' {
        import type {
          Plugin
        } from 'postcss';

	declare interface calc$Options {
precision?: number,
preserve?: boolean,
warnWhenCannotResolve?: boolean,
mediaQueries?: boolean,
selectors?: boolean
} 

declare type calc$Calc = Plugin<calc$Options>;
	declare var calc: calc$calc$Calc;
	declare module.exports: typeof calc

    }
