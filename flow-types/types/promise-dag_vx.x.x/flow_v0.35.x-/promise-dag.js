declare module 'promise-dag' {
        declare export type Step = string | ((...args: any[]) => PromiseLike<any>);
	declare export type Run<P: PromiseLike<any>> = (
steps: {
[name: string]: Step[]
},
required?: string[]) => {
[name: string]: P
};
	declare export interface PromiseImplementation<P: PromiseLike<any>> {
resolve(value: any): P,
reject(value: any): P,
all(values: any[]): P
} 
	declare export var run: Run<Promise<any>>;
	declare export function implement<P: PromiseLike<any>>(implementation: PromiseImplementation<P>): Run<P>

    }
