declare module 'create-error' {
        declare type Err = createError$Error;
	declare type createError$Error<T: Err> = {
new (message?: string, obj?: any): T
} & Err

	declare function createError(): createError$createError$Error<createError$Error>

	declare function createError<T: createError$createError$Error<createError$Error>>(
name: string,
properties?: any): T

	declare function createError<T: createError$createError$Error<createError$Error>>(
Target: createError$createError$Error<createError$Error>,
name?: string,
properties?: any): T

	declare module.exports: typeof createError

    }
