declare module 'spatialite' {
        declare export {
          OPEN_READONLY,OPEN_READWRITE,OPEN_CREATE,cached,RunResult,Statement,verbose
        }from 'sqlite3';

	import type {
          OriginalDatabase
        } from 'sqlite3';

	declare export class Database mixins OriginalDatabase {
spatialite(cb: (err: Error) => void): void
}
    }
