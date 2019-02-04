declare module 'koa-better-body' {
        import type {
          Context
        } from 'koa';

	declare function KoaBetterBody(
options?: KoaBetterBody$KoaBetterBody$Options): KoaBetterBody$KoaBetterBody$Body

	declare interface KoaBetterBody$Options {
fields?: boolean | string,
files?: boolean | string,
multipart?: boolean,
textLimit?: string,
formLimit?: string,
urlencodedLimit?: string,
jsonLimit?: string,
bufferLimit?: string,
jsonStrict?: boolean,
detectJSON?: () => any,
strict?: boolean,
delimiter?: Symbol,
decodeURIComponent?: any,
maxKeys?: number,
buffer?: boolean
} 

declare type KoaBetterBody$Body = (context: Context, next: () => void) => Generator;
	declare module.exports: typeof KoaBetterBody

    }
