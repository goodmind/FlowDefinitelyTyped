declare module 'sort-object-keys' {
        declare module.exports: typeof sortObjectByKeyNameList

	declare function sortObjectByKeyNameList<T>(
object: T,
sortWith?: $ReadOnlyArray<$Keys<T>> | ((a: $Keys<T>, b: $Keys<T>) => number)): T

    }
