declare module 'ensure-error' {
        declare module.exports: typeof ensureError

	declare function ensureError<T>(input: T): "There was Conditional Type, use $Call utility type"

	declare type ensureError$NonError = {
name: "NonError"
} & Error

    }
