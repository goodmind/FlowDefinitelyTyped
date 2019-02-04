declare module 'mssql' {
        declare export interface ISqlType {
type: ISqlTypeFactory
} 
	declare export type ISqlTypeWithNoParams = {
type: ISqlTypeFactoryWithNoParams
} & ISqlType

	declare export type ISqlTypeWithLength = {
type: ISqlTypeFactoryWithLength,
length: number
} & ISqlType

	declare export type ISqlTypeWithScale = {
type: ISqlTypeFactoryWithScale,
scale: number
} & ISqlType

	declare export type ISqlTypeWithPrecisionScale = {
type: ISqlTypeFactoryWithPrecisionScale,
precision: number,
scale: number
} & ISqlType

	declare export type ISqlTypeWithTvpType = {
type: ISqlTypeFactoryWithTvpType,
tvpType: any
} & ISqlType

	declare export interface ISqlTypeFactory {} 
	declare export type ISqlTypeFactoryWithNoParams = {
(): ISqlTypeWithNoParams
} & ISqlTypeFactory

	declare export type ISqlTypeFactoryWithLength = {
(length?: number): ISqlTypeWithLength
} & ISqlTypeFactory

	declare export type ISqlTypeFactoryWithScale = {
(scale?: number): ISqlTypeWithScale
} & ISqlTypeFactory

	declare export type ISqlTypeFactoryWithPrecisionScale = {
(precision?: number, scale?: number): ISqlTypeWithPrecisionScale
} & ISqlTypeFactory

	declare export type ISqlTypeFactoryWithTvpType = {
(tvpType: any): ISqlTypeWithTvpType
} & ISqlTypeFactory

	declare export var VarChar: ISqlTypeFactoryWithLength;
	declare export var NVarChar: ISqlTypeFactoryWithLength;
	declare export var Text: ISqlTypeFactoryWithNoParams;
	declare export var Int: ISqlTypeFactoryWithNoParams;
	declare export var BigInt: ISqlTypeFactoryWithNoParams;
	declare export var TinyInt: ISqlTypeFactoryWithNoParams;
	declare export var SmallInt: ISqlTypeFactoryWithNoParams;
	declare export var Bit: ISqlTypeFactoryWithNoParams;
	declare export var Float: ISqlTypeFactoryWithNoParams;
	declare export var Numeric: ISqlTypeFactoryWithPrecisionScale;
	declare export var Decimal: ISqlTypeFactoryWithPrecisionScale;
	declare export var Real: ISqlTypeFactoryWithNoParams;
	declare export var Date: ISqlTypeFactoryWithNoParams;
	declare export var DateTime: ISqlTypeFactoryWithNoParams;
	declare export var DateTime2: ISqlTypeFactoryWithScale;
	declare export var DateTimeOffset: ISqlTypeFactoryWithScale;
	declare export var SmallDateTime: ISqlTypeFactoryWithNoParams;
	declare export var Time: ISqlTypeFactoryWithScale;
	declare export var UniqueIdentifier: ISqlTypeFactoryWithNoParams;
	declare export var SmallMoney: ISqlTypeFactoryWithNoParams;
	declare export var Money: ISqlTypeFactoryWithNoParams;
	declare export var Binary: ISqlTypeFactoryWithNoParams;
	declare export var VarBinary: ISqlTypeFactoryWithLength;
	declare export var Image: ISqlTypeFactoryWithNoParams;
	declare export var Xml: ISqlTypeFactoryWithNoParams;
	declare export var Char: ISqlTypeFactoryWithLength;
	declare export var NChar: ISqlTypeFactoryWithLength;
	declare export var NText: ISqlTypeFactoryWithNoParams;
	declare export var TVP: ISqlTypeFactoryWithTvpType;
	declare export var UDT: ISqlTypeFactoryWithNoParams;
	declare export var Geography: ISqlTypeFactoryWithNoParams;
	declare export var Geometry: ISqlTypeFactoryWithNoParams;
	declare export var Variant: ISqlTypeFactoryWithNoParams;
	declare export var TYPES: {
VarChar: ISqlTypeFactoryWithLength,
NVarChar: ISqlTypeFactoryWithLength,
Text: ISqlTypeFactoryWithNoParams,
Int: ISqlTypeFactoryWithNoParams,
BigInt: ISqlTypeFactoryWithNoParams,
TinyInt: ISqlTypeFactoryWithNoParams,
SmallInt: ISqlTypeFactoryWithNoParams,
Bit: ISqlTypeFactoryWithNoParams,
Float: ISqlTypeFactoryWithNoParams,
Numeric: ISqlTypeFactoryWithPrecisionScale,
Decimal: ISqlTypeFactoryWithPrecisionScale,
Real: ISqlTypeFactoryWithNoParams,
Date: ISqlTypeFactoryWithNoParams,
DateTime: ISqlTypeFactoryWithNoParams,
DateTime2: ISqlTypeFactoryWithScale,
DateTimeOffset: ISqlTypeFactoryWithScale,
SmallDateTime: ISqlTypeFactoryWithNoParams,
Time: ISqlTypeFactoryWithScale,
UniqueIdentifier: ISqlTypeFactoryWithNoParams,
SmallMoney: ISqlTypeFactoryWithNoParams,
Money: ISqlTypeFactoryWithNoParams,
Binary: ISqlTypeFactoryWithNoParams,
VarBinary: ISqlTypeFactoryWithLength,
Image: ISqlTypeFactoryWithNoParams,
Xml: ISqlTypeFactoryWithNoParams,
Char: ISqlTypeFactoryWithLength,
NChar: ISqlTypeFactoryWithLength,
NText: ISqlTypeFactoryWithNoParams,
TVP: ISqlTypeFactoryWithTvpType,
UDT: ISqlTypeFactoryWithNoParams,
Geography: ISqlTypeFactoryWithNoParams,
Geometry: ISqlTypeFactoryWithNoParams,
Variant: ISqlTypeFactoryWithNoParams
};
	declare export var MAX: number;
	declare export var fix: boolean;
	declare export var Promise: any;
	declare type IMap = {
register(jstype: any, sql: any): void
} & Array<{
js: any,
sql: any
}>

	declare export var map: IMap;
	declare export var DRIVERS: string[];
	declare export interface IColumnMetadata {
[name: string]: {
index: number,
name: string,
length: number,
type: (() => ISqlType) | ISqlType,
udt?: any
}
} 
	declare export interface IResult<T> {
recordsets: IRecordSet<T>[],
recordset: IRecordSet<T>,
rowsAffected: number[],
output: {
[key: string]: any
}
} 
	declare export type IProcedureResult<T> = {
returnValue: any
} & IResult<T>

	declare export type IRecordSet<T> = {
columns: IColumnMetadata,
toTable(): Table
} & Array<T>

	declare type IIsolationLevel = number;
	declare export var ISOLATION_LEVEL: {
READ_UNCOMMITTED: IIsolationLevel,
READ_COMMITTED: IIsolationLevel,
REPEATABLE_READ: IIsolationLevel,
SERIALIZABLE: IIsolationLevel,
SNAPSHOT: IIsolationLevel
};
	declare export interface IOptions {
encrypt?: boolean,
instanceName?: string,
useUTC?: boolean,
tdsVersion?: string,
appName?: string,
abortTransactionOnError?: boolean,
trustedConnection?: boolean
} 
	declare export interface IPool {
min?: number,
max?: number,
idleTimeoutMillis?: number,
maxWaitingClients?: number,
testOnBorrow?: boolean,
acquireTimeoutMillis?: number,
fifo?: boolean,
priorityRange?: number,
autostart?: boolean,
evictionRunIntervalMillis?: number,
numTestsPerRun?: number,
softIdleTimeoutMillis?: number,
Promise?: any
} 
	declare export var pool: IPool;
	declare export interface config {
driver?: string,
user?: string,
password?: string,
server: string,
port?: number,
domain?: string,
database: string,
connectionTimeout?: number,
requestTimeout?: number,
stream?: boolean,
parseJSON?: boolean,
options?: IOptions,
pool?: IPool
} 
	declare export class ConnectionPool mixins events.EventEmitter {
connected: boolean;
connecting: boolean;
driver: string;
constructor(config: config, callback?: (err?: any) => void): this;
constructor(connectionString: string, callback?: (err?: any) => void): this;
query(strings: TemplateStringsArray, ...interpolations: any[]): Promise<IResult<any>>;
connect(): Promise<ConnectionPool>;
connect(callback: (err: any) => void): void;
close(): Promise<void>;
close(callback: (err: any) => void): void;
request(): Request;
transaction(): Transaction
}
	declare export class ConnectionError mixins Error {
constructor(message: string, code?: any): this;
name: string;
message: string;
code: string
}
	declare export interface IColumnOptions {
nullable?: boolean,
primary?: boolean
} 
	declare export type IColumn = {
name: string,
nullable: boolean,
primary: boolean
} & ISqlType

	declare class columns mixins Array {
add(
name: string,
type: (() => ISqlType) | ISqlType,
options?: IColumnOptions): number
}
	declare type IRow = (string
| number
| boolean
| Date
| Buffer
| void)[];
	declare class rows mixins Array {
add(...row: IRow): number
}
	declare export class Table  {
create: boolean;
columns: columns;
rows: rows;
constructor(tableName?: string): this
}
	declare interface IRequestParameters {
[name: string]: {
name: string,
type: (() => ISqlType) | ISqlType,
io: number,
value: any,
length: number,
scale: number,
precision: number,
tvpType: any
}
} 
	declare export class Request mixins events.EventEmitter {
transaction: Transaction;
pstatement: PreparedStatement;
parameters: IRequestParameters;
verbose: boolean;
canceled: boolean;
multiple: boolean;
stream: any;
constructor(connection?: ConnectionPool): this;
constructor(transaction: Transaction): this;
constructor(preparedStatement: PreparedStatement): this;
execute(procedure: string): Promise<IProcedureResult<any>>;
execute<Entity>(procedure: string): Promise<IProcedureResult<Entity>>;
execute<Entity>(
procedure: string,
callback: (err?: any, recordsets?: IProcedureResult<Entity>, returnValue?: any) => void): void;
input(name: string, value: any): Request;
input(name: string, type: (() => ISqlType) | ISqlType, value: any): Request;
output(name: string, type: (() => ISqlType) | ISqlType, value?: any): Request;
pipe(stream: NodeJS.WritableStream): NodeJS.WritableStream;
query(command: string): Promise<IResult<any>>;
query<Entity>(command: string): Promise<IResult<Entity>>;
query<Entity>(
command: string,
callback: (err?: Error, recordset?: IResult<Entity>) => void): void;
batch(batch: string): Promise<IResult<any>>;
batch<Entity>(batch: string): Promise<IResult<Entity>>;
batch(batch: string, callback: (err?: Error, recordset?: IResult<any>) => void): void;
batch<Entity>(
batch: string,
callback: (err?: any, recordset?: IResult<Entity>) => void): void;
bulk(table: Table): Promise<number>;
bulk(table: Table, callback: (err: Error, rowCount: any) => void): void;
cancel(): void
}
	declare export class RequestError mixins Error {
constructor(message: string, code?: any): this;
name: string;
message: string;
code: string;
number: number;
state: number;
class: number;
lineNumber: number;
serverName: string;
procName: string
}
	declare export class Transaction mixins events.EventEmitter {
isolationLevel: IIsolationLevel;
constructor(connection?: ConnectionPool): this;
begin(isolationLevel?: IIsolationLevel): Promise<void>;
begin(isolationLevel?: IIsolationLevel, callback?: (err?: any) => void): void;
commit(): Promise<void>;
commit(callback: (err?: any) => void): void;
rollback(): Promise<void>;
rollback(callback: (err?: any) => void): void;
request(): Request
}
	declare export class TransactionError mixins Error {
constructor(message: string, code?: any): this;
name: string;
message: string;
code: string
}
	declare export class PreparedStatement mixins events.EventEmitter {
transaction: Transaction;
prepared: boolean;
statement: string;
parameters: IRequestParameters;
stream: any;
constructor(connection?: ConnectionPool): this;
constructor(transaction: Transaction): this;
input(name: string, type: (() => ISqlType) | ISqlType): PreparedStatement;
output(name: string, type: (() => ISqlType) | ISqlType): PreparedStatement;
prepare(statement?: string): Promise<void>;
prepare(statement?: string, callback?: (err?: Error) => void): PreparedStatement;
execute(values: Object): Promise<IProcedureResult<any>>;
execute<Entity>(values: Object): Promise<IProcedureResult<Entity>>;
execute(
values: Object,
callback: (err?: Error, result?: IProcedureResult<any>) => void): Request;
execute<Entity>(
values: Object,
callback: (err?: Error, result?: IProcedureResult<Entity>) => void): Request;
unprepare(): Promise<void>;
unprepare(callback: (err?: Error) => void): PreparedStatement
}
	declare export class PreparedStatementError mixins Error {
constructor(message: string, code?: any): this;
name: string;
message: string;
code: string
}
    }
