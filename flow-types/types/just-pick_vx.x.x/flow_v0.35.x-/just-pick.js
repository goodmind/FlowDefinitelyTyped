declare module 'just-pick' {
        declare function pick<T, U: $Keys<T>>(obj: T, select: U[]): Pick<T, U>

	declare function pick<T, U: $Keys<T>>(obj: T, select1: U, ...selectn: U[]): Pick<T, U>

	declare module.exports: typeof pick

    }
