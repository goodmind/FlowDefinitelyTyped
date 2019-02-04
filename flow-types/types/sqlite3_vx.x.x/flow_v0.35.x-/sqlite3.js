declare module 'sqlite3' {
        declare export var OPEN_READONLY: number;
	declare export var OPEN_READWRITE: number;
	declare export var OPEN_CREATE: number;
	declare export var cached: {
Database(filename: string, callback?: (err: Error | null) => void): Database,
Database(
filename: string,
mode?: number,
callback?: (err: Error | null) => void): Database
};
	declare export type RunResult = {
lastID: number,
changes: number
} & Statement

	declare export class Statement  {
bind(callback?: (err: Error | null) => void): this;
bind(...params: any[]): this;
reset(callback?: (err: null) => void): this;
finalize(callback?: (err: Error) => void): Database;
run(callback?: (err: Error | null) => void): this;
run(params: any, callback?: (err: Error | null) => void): this;
run(...params: any[]): this;
get(callback?: (err: Error | null, row?: any) => void): this;
get(params: any, callback?: (err: Error | null, row?: any) => void): this;
get(...params: any[]): this;
all(callback?: (err: Error | null, rows: any[]) => void): this;
all(params: any, callback?: (err: Error | null, rows: any[]) => void): this;
all(...params: any[]): this;
each(
callback?: (err: Error | null, row: any) => void,
complete?: (err: Error | null, count: number) => void): this;
each(
params: any,
callback?: (err: Error | null, row: any) => void,
complete?: (err: Error | null, count: number) => void): this;
each(...params: any[]): this
}
	declare export class Database mixins events.EventEmitter {
constructor(filename: string, callback?: (err: Error | null) => void): this;
constructor(filename: string, mode?: number, callback?: (err: Error | null) => void): this;
close(callback?: (err: Error | null) => void): void;
run(sql: string, callback?: (err: Error | null) => void): this;
run(sql: string, params: any, callback?: (err: Error | null) => void): this;
run(sql: string, ...params: any[]): this;
get(sql: string, callback?: (err: Error | null, row: any) => void): this;
get(
sql: string,
params: any,
callback?: (err: Error | null, row: any) => void): this;
get(sql: string, ...params: any[]): this;
all(sql: string, callback?: (err: Error | null, rows: any[]) => void): this;
all(
sql: string,
params: any,
callback?: (err: Error | null, rows: any[]) => void): this;
all(sql: string, ...params: any[]): this;
each(
sql: string,
callback?: (err: Error | null, row: any) => void,
complete?: (err: Error | null, count: number) => void): this;
each(
sql: string,
params: any,
callback?: (err: Error | null, row: any) => void,
complete?: (err: Error | null, count: number) => void): this;
each(sql: string, ...params: any[]): this;
exec(sql: string, callback?: (err: Error | null) => void): this;
prepare(sql: string, callback?: (err: Error | null) => void): Statement;
prepare(sql: string, params: any, callback?: (err: Error | null) => void): Statement;
prepare(sql: string, ...params: any[]): Statement;
serialize(callback?: () => void): void;
parallelize(callback?: () => void): void;
on(event: "trace", listener: (sql: string) => void): this;
on(event: "profile", listener: (sql: string, time: number) => void): this;
on(event: "error", listener: (err: Error) => void): this;
on(event: "open" | "close", listener: () => void): this;
on(event: string, listener: (...args: any[]) => void): this;
configure(option: "busyTimeout", value: number): void
}
	declare export function verbose(): sqlite3

	declare export interface sqlite3 {
OPEN_READONLY: number,
OPEN_READWRITE: number,
OPEN_CREATE: number,
cached: typeof cached,
RunResult: RunResult,
Statement: typeof Statement,
Database: typeof Database,
verbose(): this
} 
    }
