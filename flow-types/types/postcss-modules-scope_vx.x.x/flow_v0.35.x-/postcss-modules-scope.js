declare module 'postcss-modules-scope' {
        import type {
          Plugin
        } from 'postcss';

	declare interface scope$Options {
generateScopedName?: (exportedName: string, path: string, css: string) => string
} 

declare type scope$Scope = Plugin<scope$Options>;
	declare var scope: scope$scope$Scope;
	declare module.exports: typeof scope

    }
