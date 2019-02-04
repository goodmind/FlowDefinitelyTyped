declare module 'standard-error' {
        declare module.exports: typeof StandardError

	declare class StandardError mixins Error {
[key: string]: any;
constructor(message: string, props?: any): this;
constructor(props: any): this
}
    }
