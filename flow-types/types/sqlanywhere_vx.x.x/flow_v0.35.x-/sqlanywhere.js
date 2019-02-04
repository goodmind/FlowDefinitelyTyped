declare module 'sqlanywhere' {
        declare export function createConnection(): SybaseConnection

	declare export interface SybaseConnection {
connect(params: ConnectionParameters, cb: (err: Error | void) => void): void,
close(cb: (err?: Error) => void): void,
disconnect(cb: (err?: Error) => void): void,
connected(): boolean,
exec(query: string, cb: (err: Error | void, result: any) => void): void,
exec(
query: string,
placeholders: any[],
cb: (err: Error | void, result: any) => void): void,
prepare(query: string, cb: (err: Error | void, stmt: Statement) => void): void,
prepare(query: string): Statement,
commit(cb: (err: Error | void) => void): void,
rollback(cb: (err: Error | void) => void): void
} 
	declare export interface ConnectionParameters {
Server: string,
UserId: string,
DatabaseFile?: string,
AutoStart?: string,
Password: string,
Host?: string
} 
	declare export interface Statement {
exec(args: any[], cb: (err: Error | void, rows: any[]) => void): void,
exec(args: any[]): any[],
getMoreResults(): any[],
drop(cb: (err: Error | void) => void): void
} 
	declare var _default: {
createConnection: typeof createConnection
};
	declare export default typeof _default

    }
