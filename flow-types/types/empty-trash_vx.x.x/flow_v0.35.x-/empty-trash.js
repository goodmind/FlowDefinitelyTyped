declare module 'empty-trash' {
        declare module.exports: typeof emptyTrash

	declare function emptyTrash(): Promise<void>

    }
