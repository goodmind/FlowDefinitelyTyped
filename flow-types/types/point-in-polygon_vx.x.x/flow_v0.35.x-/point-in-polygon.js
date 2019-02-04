declare module 'point-in-polygon' {
        declare function inside(
point: $ReadOnlyArray<number>,
polygon: $ReadOnlyArray<$ReadOnlyArray<number>>): boolean

	declare module.exports: typeof inside

    }
