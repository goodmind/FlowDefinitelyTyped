declare module 'form-serialize' {
        declare interface ResultHash {
[key: string]: string | string[] | ResultHash
} 
	declare interface Options<Result> {

/**
 * Configure the output type. If true, the output will be a js object.
 */
hash?: boolean,

/**
 * Optional serializer function to override the default one. The function takes 3 arguments (result, key,
 * value) and should return new result hash and url encoded str serializers are provided with this module
 */
serializer?: (result: Result, key: string, value: string) => Result,

/**
 * If true serialize disabled fields.
 */
disabled?: boolean,

/**
 * If true serialize empty fields
 */
empty?: boolean
} 
	declare type OptionsHash = {
hash: true
} & Options<ResultHash>

	declare type OptionsString = {
hash: false
} & Options<string>

	declare function serialize(form: HTMLFormElement, options: OptionsHash | true): ResultHash

	declare function serialize(form: HTMLFormElement, options?: OptionsString | false): string

	declare function serialize<Result>(form: HTMLFormElement, options?: Options<Result> | boolean): Result

	declare module.exports: typeof serialize

    }
