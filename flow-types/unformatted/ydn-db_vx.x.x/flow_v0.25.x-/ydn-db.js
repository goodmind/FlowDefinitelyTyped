declare module 'ydn-db' {
        declare interface FullTextSource {
storeName: string,
keyPath: string,
weight?: number
} 
	declare interface FullTextCatalog {
name: string,
lang: string,
sources: FullTextSource[]
} 
	declare interface IndexSchemaJson {
name?: string,
keyPath: string | string[],
type?: string,
unique?: boolean,
multiEntry?: boolean
} 
	declare interface StoreSchemaJson {
autoIncrement?: boolean,
dispatchEvents?: boolean,
name?: string,
indexes?: IndexSchemaJson[],
keyPath?: string,
type?: string
} 
	declare interface DatabaseSchemaJson {
version?: number,
stores: StoreSchemaJson[],
fullTextCatalogs?: FullTextCatalog[]
} 
	declare interface StorageOptions {
mechanisms?: string[],
size?: number,
autoSchema?: boolean,
isSerial?: boolean,
requestType?: string
} 
	declare var ydn: typeof npm$namespace$ydn;

      declare var npm$namespace$ydn: {
        
        
        
        
        db: typeof npm$namespace$ydn$db,
      }

      declare var npm$namespace$ydn$db: {
        cmp: typeof ydn$db$cmp,
deleteDatabase: typeof ydn$db$deleteDatabase,
        
        EventType: typeof ydn$db$EventType,
Policy: typeof ydn$db$Policy,
TransactionMode: typeof ydn$db$TransactionMode,
Op: typeof ydn$db$Op,
        Request: typeof ydn$db$Request,
Key: typeof ydn$db$Key,
Iterator: typeof ydn$db$Iterator,
IndexKeyIterator: typeof ydn$db$IndexKeyIterator,
KeyIterator: typeof ydn$db$KeyIterator,
ValueIterator: typeof ydn$db$ValueIterator,
IndexValueIterator: typeof ydn$db$IndexValueIterator,
Streamer: typeof ydn$db$Streamer,
ICursor: typeof ydn$db$ICursor,
Query: typeof ydn$db$Query,
DbOperator: typeof ydn$db$DbOperator,
Storage: typeof ydn$db$Storage,
        events: typeof npm$namespace$ydn$db$events,
      }
declare export class ydn$db$Request  {
abort(): any;
always(callback: (data: any) => void): any;
done(callback: (data: any) => void): any;
fail(callback: (data: any) => void): any;
then(
success_callback: (data: any) => any,
error_callback: (data: Error) => any): any;
canAbort(): boolean
}

declare export function ydn$db$cmp(first: any, second: any): number


declare export function ydn$db$deleteDatabase(db_name: string, type?: string): void


declare export class ydn$db$Key  {
constructor(json: Object): this;
constructor(key_string: string): this;
constructor(store_name: string, id: any, parent_key?: ydn$db$Key): this
}

declare export class ydn$db$Iterator  {
join(peer_store_name: string, peer_field_name?: string, value?: any): any;
getKey(): any;
getPrimaryKey(): any;
reset(): ydn$db$Iterator;
restrict(peer_field_name: string, value: any): any;
resume(key: any, index_key: any): ydn$db$Iterator;
reverse(key: any, index_key: any): ydn$db$Iterator
}


declare  var ydn$db$EventType: {|
  +created: 0,// 0
+deleted: 1,// 1
+error: 2,// 2
+fail: 3,// 3
+ready: 4,// 4
+updated: 5,// 5

|};



declare  var ydn$db$Policy: {|
  +all: 0,// 0
+atomic: 1,// 1
+multi: 2,// 2
+repeat: 3,// 3
+single: 4,// 4

|};



declare  var ydn$db$TransactionMode: {|
  +readonly: 0,// 0
+readwrite: 1,// 1

|};



declare  var ydn$db$Op: {|
  +>: 0,// 0
+<: 1,// 1
+=: 2,// 2
+>=: 3,// 3
+<=: 4,// 4
+^: 5,// 5

|};


declare export class ydn$db$IndexKeyIterator mixins ydn$db$Iterator {
constructor(store_name: string, index_name: string, key_range?: any, reverse?: boolean): this;
static where(
store_name: string,
index_name: string,
op: $Values<typeof ydn$db$Op>,
value: any,
op2: $Values<typeof ydn$db$Op>,
value2: any): any
}

declare export class ydn$db$KeyIterator mixins ydn$db$Iterator {
constructor(store_name: string, key_range?: any, reverse?: boolean): this;
static where(
store_name: string,
op: $Values<typeof ydn$db$Op>,
value: any,
op2: $Values<typeof ydn$db$Op>,
value2: any): any
}

declare export class ydn$db$ValueIterator mixins ydn$db$Iterator {
constructor(store_name: string, key_range?: any, reverse?: boolean): this;
static where(
store_name: string,
op: $Values<typeof ydn$db$Op>,
value: any,
op2: $Values<typeof ydn$db$Op>,
value2: any): any
}

declare export class ydn$db$IndexValueIterator mixins ydn$db$Iterator {
constructor(store_name: string, index_name: string, key_range?: any, reverse?: boolean): this;
static where(
store_name: string,
index_name: string,
op: $Values<typeof ydn$db$Op>,
value: any,
op2: $Values<typeof ydn$db$Op>,
value2: any): any
}

declare export class ydn$db$Streamer  {
constructor(storage: ydn$db$Storage, store_name: string, opt_field_name?: string): this;
push(key: any, value?: any): any;
collect(callback: (values: any[]) => void): any;
setSink(callback: (key: any, value: any, toWait: () => boolean) => void): any
}

declare export class ydn$db$ICursor  {
getKey(i?: number): any;
getPrimaryKey(i?: number): any;
getValue(i?: number): any;
clear(i?: number): ydn$db$Request;
update(value: Object, i?: number): ydn$db$Request
}

declare export class ydn$db$Query  {
count(): ydn$db$Request;
open(
callback: (ICursor: any) => void,
Iterator: any,
TransactionMode: any): ydn$db$Request;
patch(Object: any): ydn$db$Request;
patch(field_name: string, value: any): ydn$db$Request;
patch(field_names: string[], value: any[]): ydn$db$Request;
order(field_name: string): ydn$db$Query;
order(field_name: string, descending: boolean): ydn$db$Query;
order(field_names: string[]): ydn$db$Query;
order(field_names: string[], descending: boolean): ydn$db$Query;
reverse(): ydn$db$Query;
list(): ydn$db$Request;
list(limit: number): ydn$db$Request;
where(field_name: string, op: $Values<typeof ydn$db$Op>, value: any): any;
where(
field_name: string,
op: $Values<typeof ydn$db$Op>,
value: any,
op2: $Values<typeof ydn$db$Op>,
value2: any): any
}

declare export class ydn$db$DbOperator  {
add(store_name: string, value: any, key: any): ydn$db$Request;
add(store_name: string, value: any): ydn$db$Request;
clear(store_name: string, key_or_key_range: any): ydn$db$Request;
clear(store_name: string): ydn$db$Request;
clear(store_names: string[]): ydn$db$Request;
count(store_name: string, key_range?: any): ydn$db$Request;
count(store_name: string, index_name: string, key_range: any): ydn$db$Request;
count(store_names: string[]): ydn$db$Request;
executeSql(sql: string, params?: any[]): ydn$db$Request;
from(store_name: string): ydn$db$Query;
from(store_name: string, op: $Values<typeof ydn$db$Op>, value: any): ydn$db$Query;
from(
store_name: string,
op: $Values<typeof ydn$db$Op>,
value: any,
op2: $Values<typeof ydn$db$Op>,
value2: any): ydn$db$Query;
get(store_name: string, key: any): ydn$db$Request;
keys(iter: ydn$db$Iterator, limit?: number): ydn$db$Request;
keys(
store_name: string,
key_range?: Object,
limit?: number,
offset?: number,
reverse?: boolean): ydn$db$Request;
keys(
store_name: string,
index_name: string,
key_range?: Object,
limit?: number,
offset?: number,
reverse?: boolean): ydn$db$Request;
keys(store_name: string, limit?: boolean, offset?: number): ydn$db$Request;
open(
next_callback: (cursor: ydn$db$ICursor) => any,
iterator: ydn$db$Iterator,
mode: $Values<typeof ydn$db$TransactionMode>): ydn$db$Request;
put(store_name: string, value: any, key: any): ydn$db$Request;
put(store_name: string, value: any[], key: any[]): ydn$db$Request;
put(store_name: string, value: any): ydn$db$Request;
put(store_name: string, value: any[]): ydn$db$Request;
remove(store_name: string, id_or_key_range: any): ydn$db$Request;
remove(store_name: string, index_name: string, id_or_key_range: any): ydn$db$Request;
clear(store_name: string, key_or_key_range: any): ydn$db$Request;
scan(
solver: (keys: any[], values: any[]) => any,
iterators: ydn$db$Iterator[]): ydn$db$Request;
values(iter: ydn$db$Iterator, limit?: number): ydn$db$Request;
values(
store_name: string,
key_range?: Object,
limit?: number,
offset?: number,
reverse?: boolean): ydn$db$Request;
values(
store_name: string,
index_name: string,
key_range?: Object,
limit?: number,
offset?: number,
reverse?: boolean): ydn$db$Request;
values(store_name: string, ids?: Array<any>): ydn$db$Request;
values(keys?: Array<any>): ydn$db$Request
}

declare export class ydn$db$Storage mixins ydn$db$DbOperator {
constructor(db_name?: string, schema?: DatabaseSchemaJson, options?: StorageOptions): this;
addEventListener(
type: $Values<typeof ydn$db$EventType>,
handler: (event: any) => void,
capture?: boolean): any;
addEventListener(
type: $Values<typeof ydn$db$EventType>[],
handler: (event: any) => void,
capture?: boolean): any;
branch(
thread: $Values<typeof ydn$db$Policy>,
isSerial: boolean,
scope: string[],
mode: $Values<typeof ydn$db$TransactionMode>,
maxRequest: number): ydn$db$DbOperator;
close(): any;
get(store_name: string, key: any): ydn$db$Request;
getName(callback: any): string;
getSchema(callback: any): DatabaseSchemaJson;
getType(): string;
onReady(Error?: any): any;
removeEventListener(
type: $Values<typeof ydn$db$EventType>,
handler: (event: any) => void,
capture?: boolean): any;
removeEventListener(
type: $Values<typeof ydn$db$EventType>[],
handler: (event: any) => void,
capture?: boolean): any;
run(
callback: (iStorage: ydn$db$Storage) => void,
store_names: string[],
mode: $Values<typeof ydn$db$TransactionMode>): ydn$db$Request;
search(
catalog_name: string,
query: string,
limit?: number,
threshold?: number): ydn$db$Request;
setName(name: string): any;
transaction(
callback: (tx: any) => void,
store_names: string[],
mode: $Values<typeof ydn$db$TransactionMode>,
completed_handler: (type: string, e?: Error) => void): any
}


      declare var npm$namespace$ydn$db$events: {
        
        
        
        Event: typeof ydn$db$events$Event,
RecordEvent: typeof ydn$db$events$RecordEvent,
StorageEvent: typeof ydn$db$events$StorageEvent,
StoreEvent: typeof ydn$db$events$StoreEvent,
        
      }
declare export class ydn$db$events$Event  {
name: string;
type: $Values<typeof ydn$db$EventType>
}

declare export class ydn$db$events$RecordEvent mixins ydn$db$events$Event {
getStoreName(): string;
getKey(): any;
getValue(): any
}

declare export class ydn$db$events$StorageEvent mixins ydn$db$events$Event {
getError(): Error;
getVersion(): number;
getOldVersion(): number
}

declare export class ydn$db$events$StoreEvent mixins ydn$db$events$Event {
getStoreName(): string;
getKeys(): any[];
getValues(): any[]
}
	declare var ydb: typeof npm$namespace$ydb;

      declare var npm$namespace$ydb: {
        
        
        
        
        db: typeof npm$namespace$ydb$db,
      }

      declare var npm$namespace$ydb$db: {
        
        
        
        
        algo: typeof npm$namespace$ydb$db$algo,
      }

      declare var npm$namespace$ydb$db$algo: {
        
        
        
        Solver: typeof ydb$db$algo$Solver,
NestedLoop: typeof ydb$db$algo$NestedLoop,
SortedMerge: typeof ydb$db$algo$SortedMerge,
ZigzagMerge: typeof ydb$db$algo$ZigzagMerge,
        
      }
declare export class ydb$db$algo$Solver  {}

declare export class ydb$db$algo$NestedLoop mixins ydb$db$algo$Solver {
constructor(out: {
push: (value: any) => void
}, limit?: number): this
}

declare export class ydb$db$algo$SortedMerge mixins ydb$db$algo$Solver {
constructor(out: {
push: (value: any) => void
}, limit?: number): this
}

declare export class ydb$db$algo$ZigzagMerge mixins ydb$db$algo$Solver {
constructor(out: {
push: (value: any) => void
}, limit?: number): this
}
    }
