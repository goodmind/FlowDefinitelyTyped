declare module 'autoprefixer' {
        import type {
          Plugin
        } from 'postcss';

	declare interface autoprefixer$Options {
browsers?: string[] | string,
env?: string,
cascade?: boolean,
add?: boolean,
remove?: boolean,
supports?: boolean,
flexbox?: boolean | "no-2009",
grid?: boolean,
stats?: any,
ignoreUnknownVersions?: boolean
} 

declare type autoprefixer$Autoprefixer = Plugin<autoprefixer$Options>;
	declare var autoprefixer: autoprefixer$autoprefixer$Autoprefixer;
	declare module.exports: typeof autoprefixer

    }
