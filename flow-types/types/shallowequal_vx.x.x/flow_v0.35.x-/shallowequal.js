declare module 'shallowequal' {
        declare function shallowEqual<TCtx>(
objA: any,
objB: any,
compare?: (objA: any, objB: any, indexOrKey?: number | string) => boolean | void,
compareContext?: TCtx): boolean

	declare module.exports: typeof shallowEqual

    }
