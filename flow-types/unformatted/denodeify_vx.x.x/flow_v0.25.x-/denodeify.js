declare module 'denodeify' {
        declare function _<R>(fn: _$F0<R>, transformer?: _$M): () => Promise<R>

	declare function _<A, R>(fn: _$F1<A, R>, transformer?: _$M): (a: A) => Promise<R>

	declare function _<A, B, R>(fn: _$F2<A, B, R>, transformer?: _$M): (a: A, b: B) => Promise<R>

	declare function _<A, B, C, R>(
fn: _$F3<A, B, C, R>,
transformer?: _$M): (a: A, b: B, c: C) => Promise<R>

	declare function _<A, B, C, D, R>(
fn: _$F4<A, B, C, D, R>,
transformer?: _$M): (a: A, b: B, c: C, d: D) => Promise<R>

	declare function _<A, B, C, D, E, R>(
fn: _$F5<A, B, C, D, E, R>,
transformer?: _$M): (a: A, b: B, c: C, d: D, e: E) => Promise<R>

	declare function _<A, B, C, D, E, F, R>(
fn: _$F6<A, B, C, D, E, _$F, R>,
transformer?: _$M): (a: A, b: B, c: C, d: D, e: E, f: _$F) => Promise<R>

	declare function _<A, B, C, D, E, F, G, R>(
fn: _$F7<A, B, C, D, E, _$F, G, R>,
transformer?: _$M): (a: A, b: B, c: C, d: D, e: E, f: _$F, g: G) => Promise<R>

	declare function _<A, B, C, D, E, F, G, H, R>(
fn: _$F8<A, B, C, D, E, _$F, G, H, R>,
transformer?: _$M): (a: A, b: B, c: C, d: D, e: E, f: _$F, g: G, h: H) => Promise<R>

	declare function _(fn: _$F, transformer?: _$M): (...args: any[]) => Promise<any>

	declare type _$Callback<R> = (err: Error, result: R) => any;

declare type _$F0<R> = (cb: _$Callback<R>) => any;

declare type _$F1<A, R> = (a: A, cb: _$Callback<R>) => any;

declare type _$F2<A, B, R> = (a: A, b: B, cb: _$Callback<R>) => any;

declare type _$F3<A, B, C, R> = (a: A, b: B, c: C, cb: _$Callback<R>) => any;

declare type _$F4<A, B, C, D, R> = (a: A, b: B, c: C, d: D, cb: _$Callback<R>) => any;

declare type _$F5<A, B, C, D, E, R> = (a: A, b: B, c: C, d: D, e: E, cb: _$Callback<R>) => any;

declare type _$F6<A, B, C, D, E, F, R> = (a: A, b: B, c: C, d: D, e: E, f: _$F, cb: _$Callback<R>) => any;

declare type _$F7<A, B, C, D, E, F, G, R> = (a: A, b: B, c: C, d: D, e: E, f: _$F, g: G, cb: _$Callback<R>) => any;

declare type _$F8<A, B, C, D, E, F, G, H, R> = (a: A, b: B, c: C, d: D, e: E, f: _$F, g: G, h: H, cb: _$Callback<R>) => any;

declare type _$F = (...args: any[]) => any;

declare type _$M = (err: Error, ...args: any[]) => any[];
	declare export default typeof _

    }
