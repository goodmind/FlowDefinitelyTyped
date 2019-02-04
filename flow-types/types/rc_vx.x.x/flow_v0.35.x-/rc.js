declare module 'rc' {
        declare function rc(
name: string,
defaults?: {
[key: string]: any
},
argv?: {
[key: string]: any
} | null,
parse?: ((content: string) => {
[key: string]: any
}) | null): {
[key: string]: any
}

	declare module.exports: typeof rc

    }
