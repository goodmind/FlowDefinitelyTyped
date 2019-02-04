declare module 'sheetify' {
        
      declare var npm$namespace$sheetify: {
        getPrefix: typeof sheetify$getPrefix,
        
      }
declare function sheetify$getPrefix(css: string): string

	declare function sheetify(
src: string | TemplateStringsArray,
filename?: string,
options?: {
[prop: string]: any
},
done?: (err: Error, css: string, prefix: string) => void): string

	declare function sheetify(src: string | TemplateStringsArray, options: {
[prop: string]: any
}): void

	declare module.exports: typeof sheetify

    }
