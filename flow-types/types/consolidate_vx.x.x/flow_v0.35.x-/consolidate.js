declare module 'consolidate' {
        declare var cons: Consolidate;
	declare module.exports: typeof cons

	declare interface Consolidate {

/**
 * expose the instance of the engine
 */
requires: Object,

/**
 * Clear the cache.
 * @api public
 */
clearCache(): void,
atpl: RendererInterface,
dot: RendererInterface,
dust: RendererInterface,
eco: RendererInterface,
ejs: RendererInterface,
ect: RendererInterface,
haml: RendererInterface,
hamlet: RendererInterface,
handlebars: RendererInterface,
hogan: RendererInterface,
htmling: RendererInterface,
jade: RendererInterface,
jazz: RendererInterface,
jqtpl: RendererInterface,
just: RendererInterface,
liquid: RendererInterface,
liquor: RendererInterface,
lodash: RendererInterface,
mote: RendererInterface,
mustache: RendererInterface,
nunjucks: RendererInterface,
pug: RendererInterface,
qejs: RendererInterface,
ractive: RendererInterface,
react: RendererInterface,
swig: RendererInterface,
templayed: RendererInterface,
toffee: RendererInterface,
underscore: RendererInterface,
walrus: RendererInterface,
whiskers: RendererInterface
} 
	declare interface RendererInterface {
render(path: string, fn: (err: Error, html: string) => any): any,
render(
path: string,
options: {
cache?: boolean,
[otherOptions: string]: any
},
fn: (err: Error, html: string) => any): any,
render(
path: string,
options?: {
cache?: boolean,
[otherOptions: string]: any
}): Promise<string>,
(path: string, fn: (err: Error, html: string) => any): any,
(path: string, options: {
cache?: boolean,
[otherOptions: string]: any
}, fn: (err: Error, html: string) => any): any,
(path: string, options?: {
cache?: boolean,
[otherOptions: string]: any
}): Promise<string>
} 
    }
