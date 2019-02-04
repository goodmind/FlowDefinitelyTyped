declare module 'jquery.growl' {
        declare interface growl$Options {
message: string,
title?: string,
url?: string,
delayOnHover?: boolean,
duration?: number,
fixed?: boolean,
location?: string,
size?: string,
style?: string
} 
	declare interface growl {
(options: growl$growl$Options): void,
error(options: growl$growl$Options): void,
notice(options: growl$growl$Options): void,
warning(options: growl$growl$Options): void
} 
	declare interface JQueryStatic {
growl: growl
} 
    }
