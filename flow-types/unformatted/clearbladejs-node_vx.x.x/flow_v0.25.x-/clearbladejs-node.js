declare module 'clearbladejs-node' {
        import type {
          Response,RequestCallback
        } from 'request/index';

	declare export  class MessagingQOS {
  constructor(...args: empty): mixed;
static +MESSAGING_QOS_AT_MOST_ONCE: Class<MessagingQOS__MESSAGING_QOS_AT_MOST_ONCE> & MessagingQOS__MESSAGING_QOS_AT_MOST_ONCE & 0;// 0
static +MESSAGING_QOS_AT_LEAST_ONCE: Class<MessagingQOS__MESSAGING_QOS_AT_LEAST_ONCE> & MessagingQOS__MESSAGING_QOS_AT_LEAST_ONCE & 1;// 1
static +MESSAGING_QOS_EXACTLY_ONCE: Class<MessagingQOS__MESSAGING_QOS_EXACTLY_ONCE> & MessagingQOS__MESSAGING_QOS_EXACTLY_ONCE & 2;// 2

}

declare class MessagingQOS__MESSAGING_QOS_AT_MOST_ONCE mixins MessagingQOS {}
declare class MessagingQOS__MESSAGING_QOS_AT_LEAST_ONCE mixins MessagingQOS {}
declare class MessagingQOS__MESSAGING_QOS_EXACTLY_ONCE mixins MessagingQOS {}

	declare export interface Resp {
error(msg: any): empty,
success(msg: any): empty
} 
	declare export interface InitOptions {
systemKey: string,
systemSecret: string,
logging?: boolean,
callback?: CbCallback,
email?: string,
password?: string,
registerUser?: boolean,
useUser?: APIUser,
URI?: string,
messagingURI?: string,
messagingPort?: number,
defaultQoS?: MessagingQOS,
callTimeout?: number
} 
	declare export interface RequestOptions {
systemKey: string,
systemSecret: string,
method?: string,
endpoint?: string,
body?: string,
qs?: string,
URI?: string,
useUser?: boolean,
authToken?: string,
user?: APIUser
} 
	declare export interface APIUser {
email: string,
authToken: string
} 
	declare export interface KeyValuePair {
[key: string]: any
} 
	declare export type CbCallback = (error: boolean, response: Resp) => void;
	declare export default type ClearBladeGlobal = {
isCurrentUserAuthenticated(callback: CbCallback): void
} & ClearBladeInt

	declare export interface ClearBladeInt {
addToQuery(queryObj: QueryObj, key: string, value: string): void,
addFilterToQuery(
queryObj: QueryObj,
condition: QueryConditions,
key: string,
value: QueryValue): void,
addSortToQuery(queryObj: QueryObj, direction: QuerySortDirections, column: string): void,
Code(): Code,
Collection(
options: string | CollectionOptionsWithName | CollectionOptionsWithID): Collection,
execute(
error: {[key: string]: any},
response: {[key: string]: any},
callback: CbCallback): void,
init(options: InitOptions): void,
isObjectEmpty(obj: {[key: string]: any}): boolean,
Item(data: {[key: string]: any}, options: string | ItemOptions): Item,
logger(message: string): void,
loginAnon(callback: CbCallback): void,
loginUser(email: string, password: string, callback: CbCallback): void,
logoutUser(callback: CbCallback): void,
makeKVPair(key: string, value: string): KeyValuePair,
parseOperationQuery(query: Query): string,
parseQuery(query: Query | QueryObj): string,
Query(
options: string | QueryOptionsWithCollection | QueryOptionsWithName | QueryOptionsWithID): QueryObj,
registerUser(email: string, password: string, callback: CbCallback): void,
request(options: RequestOptions, callback: RequestCallback): void,
setUser(email: string, password: string): void,
User(): AppUser,
Messaging(options: MessagingOptions, callback: CbCallback): Messaging,
sendPush(
users: string[],
payload: {[key: string]: any},
appId: string,
callback: CbCallback): void,
validateEmailPassword(email: string, password: string): void
} 
	declare export interface CollectionOptionsWithName {
collectionName: string
} 
	declare export interface CollectionOptionsWithID {
collectionID: string
} 
	declare export interface Collection {
endpoint: string,
user: APIUser,
URI: string,
systemKey: string,
systemSecret: string,
fetch(query: QueryObj, callback: CbCallback): void,
create(newItem: Item, callback: CbCallback): void,
update(query: Query, changes: {[key: string]: any}, callback: CbCallback): void,
remove(query: Query, callback: CbCallback): void
} 
	declare export  class QuerySortDirections {
  constructor(...args: empty): mixed;
static +QUERY_SORT_ASCENDING: Class<QuerySortDirections__QUERY_SORT_ASCENDING> & QuerySortDirections__QUERY_SORT_ASCENDING & "ASC";// "ASC"
static +QUERY_SORT_DESCENDING: Class<QuerySortDirections__QUERY_SORT_DESCENDING> & QuerySortDirections__QUERY_SORT_DESCENDING & "DESC";// "DESC"

}

declare class QuerySortDirections__QUERY_SORT_ASCENDING mixins QuerySortDirections {}
declare class QuerySortDirections__QUERY_SORT_DESCENDING mixins QuerySortDirections {}

	declare export  class QueryConditions {
  constructor(...args: empty): mixed;
static +QUERY_EQUAL: Class<QueryConditions__QUERY_EQUAL> & QueryConditions__QUERY_EQUAL & "EQ";// "EQ"
static +QUERY_NOTEQUAL: Class<QueryConditions__QUERY_NOTEQUAL> & QueryConditions__QUERY_NOTEQUAL & "NEQ";// "NEQ"
static +QUERY_GREATERTHAN: Class<QueryConditions__QUERY_GREATERTHAN> & QueryConditions__QUERY_GREATERTHAN & "GT";// "GT"
static +QUERY_GREATERTHAN_EQUAL: Class<QueryConditions__QUERY_GREATERTHAN_EQUAL> & QueryConditions__QUERY_GREATERTHAN_EQUAL & "GTE";// "GTE"
static +QUERY_LESSTHAN: Class<QueryConditions__QUERY_LESSTHAN> & QueryConditions__QUERY_LESSTHAN & "LT";// "LT"
static +QUERY_LESSTHAN_EQUAL: Class<QueryConditions__QUERY_LESSTHAN_EQUAL> & QueryConditions__QUERY_LESSTHAN_EQUAL & "LTE";// "LTE"
static +QUERY_MATCHES: Class<QueryConditions__QUERY_MATCHES> & QueryConditions__QUERY_MATCHES & "RE";// "RE"

}

declare class QueryConditions__QUERY_EQUAL mixins QueryConditions {}
declare class QueryConditions__QUERY_NOTEQUAL mixins QueryConditions {}
declare class QueryConditions__QUERY_GREATERTHAN mixins QueryConditions {}
declare class QueryConditions__QUERY_GREATERTHAN_EQUAL mixins QueryConditions {}
declare class QueryConditions__QUERY_LESSTHAN mixins QueryConditions {}
declare class QueryConditions__QUERY_LESSTHAN_EQUAL mixins QueryConditions {}
declare class QueryConditions__QUERY_MATCHES mixins QueryConditions {}

	declare export type QueryValue = string | number | boolean;
	declare export interface QueryOptions {
offset?: number,
limit?: number
} 
	declare export type QueryOptionsWithCollection = {
collection: string
} & QueryOptions

	declare export type QueryOptionsWithName = {} & CollectionOptionsWithName & QueryOptions

	declare export type QueryOptionsWithID = {} & CollectionOptionsWithID & QueryOptions

	declare export interface Query {
SELECTCOLUMNS?: string[],
SORT?: QuerySortDirections,
FILTERS?: QueryFilter[],
PAGESIZE?: number,
PAGENUM?: number
} 
	declare export interface QueryFilter {
[QueryConditions: string]: QueryFilterValue
} 
	declare export interface QueryFilterValue {
[name: string]: QueryValue
} 
	declare export interface QueryObj {
endpoint: string,
user: APIUser,
URI: string,
systemKey: string,
systemSecret: string,
query: Query,
OR: Query[],
offset: number,
limit: number,
ascending(field: string): Query,
descending(field: string): Query,
equalTo(field: string, value: QueryValue): Query,
greaterThan(field: string, value: QueryValue): Query,
greaterThanEqualTo(field: string, value: QueryValue): Query,
lessThan(field: string, value: QueryValue): Query,
lessThanEqualTo(field: string, value: QueryValue): Query,
notEqualTo(field: string, value: QueryValue): Query,
matches(field: string, pattern: string): Query,
or(query: QueryObj): Query,
setPage(pageSize: number, pageNum: number): Query,
fetch(callback: CbCallback): void,
update(changes: {[key: string]: any}, callback: CbCallback): void,
remove(callback: CbCallback): void
} 
	declare export type ItemOptions = {} & CollectionOptionsWithID

	declare export interface Item {
data: {[key: string]: any},
save(): void,
refresh(): void,
destroy(): void
} 
	declare export interface Code {
user: APIUser,
URI: string,
systemKey: string,
systemSecret: string,
callTimeout: number,
URIPrefix: string,
execute(name: string, params: {[key: string]: any}, callback: CbCallback): void
} 
	declare export interface AppUser {
user: APIUser,
URI: string,
systemKey: string,
systemSecret: string,
getUser(callback: CbCallback): void,
setUser(data: {[key: string]: any}, callback: CbCallback): void,
allUsers(query: Query, callback: CbCallback): void
} 
	declare export interface Messaging {
user: APIUser,
URI: string,
systemKey: string,
systemSecret: string,
client: {[key: string]: any},
getMessageHistory(topic: string, startTime: number, count: number, callback: CbCallback): void,
publish(topic: string, payload: {[key: string]: any}): void,
subscribe(
topic: string,
options: MessagingSubscribeOptions,
messageCallback: MessageCallback): void,
unsubscribe(
topic: string,
callback?: (error?: Error, packet?: {[key: string]: any}) => any): void
} 
	declare export interface CommonMessagingProperties {
hosts?: string,
ports?: string
} 
	declare export type MessagingOptions = {
qos?: MessagingQOS
} & CommonMessagingProperties

	declare export interface MessagingSubscribeOptions {
qos?: MessagingQOS,
timeout?: number
} 
	declare export type MessageCallback = (message: string) => void;
	declare export var ClearBlade: ClearBladeGlobal;
    }
