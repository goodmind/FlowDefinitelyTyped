declare module 'whitelist-object' {
        declare module.exports: typeof whitelistObject

	declare function whitelistObject(
object: {
[key: string]: any
},
keys: $ReadOnlyArray<string>,
shallow?: boolean): {
[key: string]: any
}

    }
