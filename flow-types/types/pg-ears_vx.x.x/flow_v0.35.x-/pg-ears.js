declare module 'pg-ears' {
        import type {
          ClientConfig
        } from 'pg';

	declare interface PgEars {
listen(channel: string, cb: (err: Error | null, payload?: string) => void): null,
notify(channel: string, payload: any, cb?: (err: Error) => void): void
} 
	declare function pg_ears(opts: ClientConfig & {
maxAttempts?: number,
checkInterval?: number
}): PgEars

	declare module.exports: typeof pg_ears

    }
