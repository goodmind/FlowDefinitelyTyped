declare module 'get-urls' {
        import type {
          NormalizeUrlOptions
        } from 'normalize-url';

	declare module.exports: typeof getUrls

	declare function getUrls(text: string, options?: getUrls$getUrls$Options): Set<string>

	declare type getUrls$Options = {
extractFromQueryString?: boolean,
exclude?: string[]
} & NormalizeUrlOptions

    }
