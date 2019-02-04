declare module 'standard-http-error' {
        declare module.exports: typeof HttpError

	declare class HttpError mixins StandardError {
code: number;
constructor(code: number | string, message?: string, props?: {[key: string]: any}): this;
constructor(code: number | string, props?: {[key: string]: any}): this
}
    }
