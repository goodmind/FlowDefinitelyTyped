declare module 'postcss-modules-local-by-default' {
        import type {
          Plugin
        } from 'postcss';

	declare interface localByDefault$Options {
mode?: "global" | "local" | "pure",
rewriteUrl?: (global: boolean, url: string) => string
} 

declare type localByDefault$LocalByDefault = Plugin<localByDefault$Options>;
	declare var localByDefault: localByDefault$localByDefault$LocalByDefault;
	declare module.exports: typeof localByDefault

    }
