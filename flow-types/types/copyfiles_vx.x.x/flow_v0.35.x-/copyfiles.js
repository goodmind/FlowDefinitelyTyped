declare module 'copyfiles' {
        declare interface copyfiles$Options {

/**
 * include files & directories begining with a dot (.)
 */
all?: boolean,

/**
 * throw error if nothing is copied
 */
error?: boolean,

/**
 * pattern or glob to exclude
 */
exclude?: string,

/**
 * flatten the output
 */
flat?: boolean,

/**
 * do not overwrite destination files if they exist
 */
soft?: boolean,

/**
 * slice a path off the bottom of the paths
 */
up?: number,

/**
 * print more information to console
 */
verbose?: boolean
} 

declare type copyfiles$Callback = (error?: Error) => void;
	declare function copyfiles(
paths: string[],
options: copyfiles$copyfiles$Options | number,
callback: copyfiles$copyfiles$Callback): void

	declare function copyfiles(paths: string[], callback: copyfiles$copyfiles$Callback): void

	declare module.exports: typeof copyfiles

    }
