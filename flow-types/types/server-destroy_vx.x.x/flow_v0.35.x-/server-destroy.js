declare module 'server-destroy' {
        import typeof * as http from 'http';

	declare module 'http' {
        declare interface Server {
destroy(callback?: () => void): void
} 
    }

	declare function enableDestroy(server: http.Server): void

	declare module.exports: typeof enableDestroy

    }
