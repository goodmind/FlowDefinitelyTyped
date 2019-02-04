declare module 'htmltojsx' {
        declare class HTMLtoJSX  {
constructor(options?: {
createClass?: boolean,
outputClassName?: string,

/**
 * as a string e.g. '    ' or '\t'
 */
indent?: string
}): this;
convert(html: string): string
}
	declare module.exports: typeof HTMLtoJSX

    }
