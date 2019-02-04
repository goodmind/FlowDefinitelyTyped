declare module 'mustache-express' {
        import type {
          Cache
        } from 'lru-cache';

	declare module.exports: typeof mustacheExpress

	declare function mustacheExpress(
partialsPath?: string,
partialsExt?: string): mustacheExpress$mustacheExpress$ExpessEngine

	declare interface mustacheExpress$ExpessEngine {
(path: string, options: any, cb: (...args: any[]) => any): any,
cache: mustacheExpress$TemplateCache
} 

declare type mustacheExpress$TemplateCache = Cache<string, {
name: string,
data: string,
partials: string[]
}>;
    }
