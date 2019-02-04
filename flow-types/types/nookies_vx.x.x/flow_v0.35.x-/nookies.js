declare module 'nookies' {
        import type {
          NextContext
        } from 'next';

	import type {
          CookieParseOptions,CookieSerializeOptions
        } from 'cookie';

	declare export function parseCookies(ctx: NextContext, options?: CookieParseOptions): {
[key: string]: string
}

	declare export function setCookie(
ctx: NextContext,
name: string,
value: string,
options?: CookieSerializeOptions): void

	declare export function destroyCookie(ctx: NextContext, name: string): void

	declare var Nookies: {
set(
ctx: NextContext,
name: string,
value: string,
options?: CookieSerializeOptions): void,
get(ctx: NextContext, options?: CookieParseOptions): {
[key: string]: string
},
destroy(ctx: NextContext, name: string): void
};
	declare export default typeof Nookies

    }
