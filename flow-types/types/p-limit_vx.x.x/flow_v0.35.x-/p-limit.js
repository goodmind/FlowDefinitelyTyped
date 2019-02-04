declare module 'p-limit' {
        declare module.exports: typeof pLimit

	declare function limit<T, A, B, C, D, E, F>(
cb: (a: A, b: B, c: C, d: D, e: E, f: F, ...args: any[]) => PromiseLike<T> | T,
a: A,
b: B,
c: C,
d: D,
e: E,
f: F,
...args: any[]): Promise<T>

	declare function limit<T, A, B, C, D, E, F>(
cb: (a: A, b: B, c: C, d: D, e: E, f: F) => PromiseLike<T> | T,
a: A,
b: B,
c: C,
d: D,
e: E,
f: F): Promise<T>

	declare function limit<T, A, B, C, D, E>(
cb: (a: A, b: B, c: C, d: D, e: E) => PromiseLike<T> | T,
a: A,
b: B,
c: C,
d: D,
e: E): Promise<T>

	declare function limit<T, A, B, C, D>(
cb: (a: A, b: B, c: C, d: D) => PromiseLike<T> | T,
a: A,
b: B,
c: C,
d: D): Promise<T>

	declare function limit<T, A, B, C>(
cb: (a: A, b: B, c: C) => PromiseLike<T> | T,
a: A,
b: B,
c: C): Promise<T>

	declare function limit<T, A, B>(cb: (a: A, b: B) => PromiseLike<T> | T, a: A, b: B): Promise<T>

	declare function limit<T, A>(cb: (a: A) => PromiseLike<T> | T, a: A): Promise<T>

	declare function limit<T>(cb: () => PromiseLike<T> | T): Promise<T>

	declare function pLimit(concurrency: number): typeof limit

    }
