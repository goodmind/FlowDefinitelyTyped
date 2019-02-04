declare module 'grpc-error' {
        declare class GRPCError mixins Error {
constructor(value: string | {[key: string]: any}): this;
constructor(message: string, value: number | {[key: string]: any}): this;
constructor(message: string, code: number, metadata: {[key: string]: any}): this;
code: number;
metadata: {[key: string]: any}
}
	declare module.exports: typeof GRPCError

    }
