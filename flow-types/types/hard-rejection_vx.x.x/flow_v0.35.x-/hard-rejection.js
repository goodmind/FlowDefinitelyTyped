declare module 'hard-rejection' {
        declare module.exports: typeof hardRejection

	declare function hardRejection(log?: (stack?: string) => void): void

    }
