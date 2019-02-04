declare module 'gulp-strip-comments' {
        declare interface stripComments$StripOptions {
safe?: boolean,
ignore?: RegExp | RegExp[],
space?: boolean,
trim?: boolean
} 

declare interface stripComments$Strip {
(options?: stripComments$StripOptions): NodeJS.ReadWriteStream,
text(options?: stripComments$StripOptions): NodeJS.ReadWriteStream,
html(options?: stripComments$StripOptions): NodeJS.ReadWriteStream,
getEOL(): string
} 
	declare var strip: stripComments$stripComments$Strip;
	declare module.exports: typeof strip

    }
