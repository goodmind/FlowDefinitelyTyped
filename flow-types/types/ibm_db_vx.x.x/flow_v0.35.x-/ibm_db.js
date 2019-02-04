declare module 'ibm_db' {
        declare export interface ConnStr {
DATABASE: string,
HOSTNAME: string,
PORT: number | string,
PROTOCOL: string,
UID: string,
PWD: string
} 
	declare export interface Options {
odbc?: ODBC,
queue?: SimpleQueue | any[],
fetchMode?: number | null,
conected?: boolean,
connectTimeout?: number | null,
systemNaming?: boolean
} 
	declare export interface DescribeObject {
database: string,
schema?: string,
type?: string,
table?: string,
column?: string
} 
	declare export interface PoolOptions {
idleTimeout?: number,
autoCleanIdle?: boolean,
maxPoolSize?: number,
connectTimeout?: number,
systemNaming?: any
} 
	declare export class SimpleQueue  {
fifo: any[];
executing: boolean;
push(fn: (foo: any, bar: any) => void): void;
maybeNext(): void;
next(): void
}
	declare export default function Database(options?: Options): Database

	declare export class Database mixins Options {
odbc: ODBC;
queue: SimpleQueue | any[];
fetchMode: number | null;
connected: boolean;
connectTimeout: number | null;
conn: ODBCConnection;
constructor(options?: Options): this;
open(connStr: string | ConnStr): Promise<ODBCConnection>;
open(
connStr: string | ConnStr,
cb: (err: Error, conn?: ODBCConnection) => void): void;
openSync(connStr: string | ConnStr): boolean;
close(cb?: (err: Error, db: Database) => any): void;
close(): Promise<void>;
closeSync(): boolean;
query(query: string, params: any[], cb: (err: Error, res: any[]) => void): void;
query(
query: string | {
sql: string,
params: any[]
},
cb: (err: Error, res: any[]) => void): void;
query(query: string | {
sql: string,
params: any[]
}, params?: any[]): Promise<any[]>;
queryResult(query: string, params: any[], cb: (err: Error, res: ODBCResult) => void): void;
queryResult(
query: string | {
sql: string,
params: any[]
},
cb: (err: Error, res: ODBCResult) => void): void;
queryResult(query: string, params?: any[]): Promise<ODBCResult>;
queryResultSync(query: string | {
sql: string,
params: any[]
}, params?: any[]): ODBCResult;
querySync(query: string | {
sql: string,
params: any[]
}, params?: any[]): any[];
queryStream(sql: string, params: any[]): any;
fetchStreamingResults(results: any, stream: any): any;
beginTransaction(cb: (err: Error, res: any) => void): void;
beginTransaction(): Promise<void>;
endTransaction(rollback: boolean, cb: (foo: any, bar: any) => any): any;
endTransaction(): Promise<void>;
commitTransaction(cb: (err: Error, res: any) => void): void;
commitTransaction(): Promise<void>;
rollbackTransaction(cb: (err: Error, res: any) => void): void;
rollbackTransaction(): Promise<void>;
beginTransactionSync(): Database;
endTransactionSync(rollback: boolean): Database;
commitTransactionSync(): Database;
rollbackTransactionSync(): Database;
columns(
catalog: string | null,
schema: string | null,
table: string | null,
column: string | null,
cb: (error: Error, res: any[]) => void): void;
tables(
catalog: string | null,
schema: string | null,
table: string | null,
type: string | null,
cb: (error: Error, res: any[]) => void): void;
describe(obj: DescribeObject, cb: (error: Error, res: any[]) => void): void;
prepare(sql: string, cb: (err: Error, stmt: ODBCStatement) => void): void;
prepare(sql: string): Promise<ODBCStatement>;
prepareSync(sql: string): ODBCStatement;
setIsolationLevel(isolationLevel: number): boolean
}
	declare export class ODBC  {
SQSQL_CLOSE: string;
SQL_DROP: string;
SQL_UNBIND: string;
SQL_RESET_PARAMS: string;
SQL_DESTROY: string;
FETCH_ARRAY: string;
FETCH_OBJECT: string
}
	declare export var SQSQL_CLOSE: string;
	declare export var SQL_DROP: string;
	declare export var SQL_UNBIND: string;
	declare export var SQL_RESET_PARAMS: string;
	declare export var SQL_DESTROY: string;
	declare export var FETCH_ARRAY: string;
	declare export var FETCH_OBJECT: string;
	declare export class ODBCConnection  {
loginTimeout: number;
connectTimeout: number;
connected: boolean;
systemNaming: boolean
}
	declare export class ODBCStatement  {
queue: SimpleQueue;
bindQueue: SimpleQueue;
_execute(cb: (err: Error, result: any[]) => void): void;
_executeSync(params?: any[]): ODBCResult;
_executeDirect(sql: string, cb: (err: Error, result: any[]) => void): void;
_executeNonQuery(cb: (err: Error, res: any[]) => void): void;
_prepare(sql: string, cb: (err: Error) => void): void;
_bind(params: any[], cb: (err: Error) => void): void;
_bindSync(ary: any[]): void;
execute(params: any[], cb: (err: Error, result: any[], outparams: any) => void): void;
execute(cb: (err: Error, result: any[], outparams: any) => void): void;
execute(params: any[]): Promise<{
result: any[],
outparams: any
}>;
executeSync(params?: any[]): ODBCResult;
executeDirect(sql: string, cb: (err: Error, result: any[]) => void): void;
executeNonQuery(params: any[], cb: (err: Error, res: any[]) => void): void;
executeNonQuery(cb: (err: Error, res: any[]) => void): void;
executeNonQuery(params?: any[]): Promise<void>;
prepare(sql: string, cb: (err: Error, result: any[]) => void): void;
bind(ary: any[], cb: (err: Error) => void): void;
bindSync(ary: any[]): void
}
	declare export class ODBCResult  {
fetchMode: number;
fetchSync(): any[];
fetchAllSync(): any[];
moreResultsSync(): any[];
closeSync(): void
}
	declare export function getElapsedTime(): string

	declare export function debug(x: boolean): void

	declare export function open(
connStr: string | ConnStr,
options: Options,
cb: (err: Error, db: Database) => void): void

	declare export function open(connStr: string | ConnStr, cb: (err: Error, db: Database) => void): void

	declare export function open(connStr: string | ConnStr, options?: Options): Promise<Database>

	declare export function openSync(connStr: string | ConnStr, options?: Options): Database

	declare export function close(db: Database): void

	declare export class Pool mixins PoolOptions {
idleTimeout: number;
autoCleanIdle: boolean;
maxPoolSize: number;
connectTimeout: number;
systemNaming: any;
options: PoolOptions;
index: number;
availablePool: {[key: string]: any};
usedPool: {[key: string]: any};
poolsize: number;
odbc: ODBC;
constructor(options?: PoolOptions): this;
open(connStr: string, cb: (err: Error, db: Database) => void): void;
init(count: number, connStr: string): boolean;
setMaxPoolSize(count: number): boolean;
setConnectTimeout(timeout: number): boolean;
cleanup(connStr: string): boolean;
close(cb: (foo: any, bar: any) => any): void
}
    }
