declare module 'obj-str' {
        declare module.exports: typeof objstr

	declare function objstr(obj: {
[name: string]: boolean
}): string

    }
