declare module 'mongration' {
        import type {
          Db
        } from 'mongodb';

	declare export interface DbConfig {
hosts?: string,
db?: string,
user?: string,
password?: string,
mongoUri?: string,
migrationCollection: string,
replicaSet?: string
} 
	declare export interface MigrationResponse {
id: string,
status: "not-run"
| "skipped"
| "pending"
| "ok"
| "error"
| "rollback"
| "rollback-error"
} 
	declare export class Migration  {
constructor(dbConfig: DbConfig): this;
add: (paths: string | string[]) => void;
addAllFromPath: (path: string) => void;
migrate: (doneCb?: (err: Error | null, response: MigrationResponse[]) => void) => void
}
	declare export interface MigrationStep {
id: string,
up: (db: Db, cb: (err?: Error) => void) => void,
down?: (db: Db, cb: (err?: Error) => void) => void
} 
    }
