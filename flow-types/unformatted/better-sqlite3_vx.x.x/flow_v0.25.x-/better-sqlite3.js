declare module 'better-sqlite3' {
        declare type VariableArgFunction = (...params: any[]) => any;
	declare type ArgumentTypes<F: VariableArgFunction> = "There was Conditional Type, use $Call utility type";
	declare interface BetterSqlite3$Statement {
database: Database$Database,
source: string,
reader: boolean,
run(...params: any[]): Database$Database.Database$RunResult,
get(...params: any[]): any,
all(...params: any[]): any[],
iterate(...params: any[]): IterableIterator<any>,
pluck(toggleState?: boolean): this,
expand(toggleState?: boolean): this,
raw(toggleState?: boolean): this,
bind(...params: any[]): this,
columns(): Database$ColumnDefinition[],
safeIntegers(toggleState?: boolean): this,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface BetterSqlite3$ColumnDefinition {
name: string,
column: string | null,
table: string | null,
database: string | null,
type: string | null,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface BetterSqlite3$Transaction<F: VariableArgFunction> {
(...params: ArgumentTypes<F>): any,
default(...params: ArgumentTypes<F>): any,
deferred(...params: ArgumentTypes<F>): any,
immediate(...params: ArgumentTypes<F>): any,
exclusive(...params: ArgumentTypes<F>): any,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface BetterSqlite3$Database {
memory: boolean,
readonly: boolean,
name: string,
open: boolean,
inTransaction: boolean,
prepare(source: string): BetterSqlite3$Statement,
transaction<F: VariableArgFunction>(fn: F): BetterSqlite3$Transaction<F>,
exec(source: string): this,
pragma(source: string, options?: BetterSqlite3$Database.Database$PragmaOptions): any,
checkpoint(databaseName?: string): this,
function(name: string, cb: (...params: any[]) => any): this,
function(
name: string,
options: BetterSqlite3$Database.Database$RegistrationOptions,
cb: (...params: any[]) => any): this,
aggregate(name: string, options: BetterSqlite3$Database.Database$AggregateOptions): this,
loadExtension(path: string): this,
close(): this,
defaultSafeIntegers(toggleState?: boolean): this,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface BetterSqlite3$DatabaseConstructor {
new (
filename: string,
options?: BetterSqlite3$Database.Database$Options): BetterSqlite3$Database,
(filename: string, options?: BetterSqlite3$Database.Database$Options): BetterSqlite3$Database,
prototype: BetterSqlite3$Database,
Database$Integer: typeof Integer,
Database$SqliteError: typeof SqliteError
} 
	declare class SqliteError mixins Error {
name: string;
message: string;
code: string;
constructor(message: string, code: string): this
}
	declare interface Database$RunResult {
changes: number,
lastInsertRowid: Database$Integer.IntLike
} 

declare interface Database$Options {
memory?: boolean,
readonly?: boolean,
fileMustExist?: boolean,
timeout?: number
} 

declare interface Database$PragmaOptions {
simple?: boolean
} 

declare interface Database$RegistrationOptions {
varargs?: boolean,
deterministic?: boolean,
safeIntegers?: boolean
} 

declare type Database$AggregateOptions = {
start?: any,
step: (total: any, next: any) => any,
inverse?: (total: any, dropped: any) => any,
result?: (total: any) => any
} & Database$RegistrationOptions


declare type Database$Integer = typeof Integer;

declare type Database$SqliteError = typeof SqliteError;

declare interface Database$Statement {
database: BetterSqlite3$Database,
source: string,
reader: boolean,
run(...params: any[]): BetterSqlite3$Database.Database$RunResult,
get(...params: any[]): any,
all(...params: any[]): any[],
iterate(...params: any[]): IterableIterator<any>,
pluck(toggleState?: boolean): this,
expand(toggleState?: boolean): this,
raw(toggleState?: boolean): this,
bind(...params: any[]): this,
columns(): BetterSqlite3$ColumnDefinition[],
safeIntegers(toggleState?: boolean): this,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface Database$ColumnDefinition {
name: string,
column: string | null,
table: string | null,
database: string | null,
type: string | null,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface Database$Transaction<F: VariableArgFunction> {
(...params: ArgumentTypes<F>): any,
default(...params: ArgumentTypes<F>): any,
deferred(...params: ArgumentTypes<F>): any,
immediate(...params: ArgumentTypes<F>): any,
exclusive(...params: ArgumentTypes<F>): any,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface Database$Database {
memory: boolean,
readonly: boolean,
name: string,
open: boolean,
inTransaction: boolean,
prepare(source: string): Database$Statement,
transaction<F: VariableArgFunction>(fn: F): Database$Transaction<F>,
exec(source: string): this,
pragma(source: string, options?: Database$Database.Database$PragmaOptions): any,
checkpoint(databaseName?: string): this,
function(name: string, cb: (...params: any[]) => any): this,
function(
name: string,
options: Database$Database.Database$RegistrationOptions,
cb: (...params: any[]) => any): this,
aggregate(name: string, options: Database$Database.Database$AggregateOptions): this,
loadExtension(path: string): this,
close(): this,
defaultSafeIntegers(toggleState?: boolean): this,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 
	declare var Database$Database: BetterSqlite3$BetterSqlite3$DatabaseConstructor;
	declare module.exports: typeof Database$Database

    }
