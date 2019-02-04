declare module 'object-map' {
        declare function objectMap<TInput, TOutput, TThis>(
target: {
[k: string]: TInput
},
callback: (currentValue: TInput, key: string, object: {
[k: string]: TInput
}) => TOutput,
thisArg?: TThis): {
[k: string]: TOutput
}

	declare module.exports: typeof objectMap

    }
