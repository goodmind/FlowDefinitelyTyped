declare module 'clearbladejs-server' {
        
      declare var npm$namespace$CbServer: {
        
        req: typeof CbServer$req,
resp: typeof CbServer$resp,
ClearBlade: typeof CbServer$ClearBlade,
      }
declare interface CbServer$BasicReq {
+isLogging: boolean,
+params: {
[id: string]: any
},
+systemKey: string,
+systemSecret: string,
+userEmail: string,
+userToken: string,
+userid: string
} 

declare type CbServer$ReqTypes = CbServer$BasicReq;

declare var CbServer$req: CbServer$ReqTypes;

declare interface CbServer$Resp {
error(msg: any): empty,
success(msg: any): empty
} 

declare var CbServer$resp: CbServer$Resp;

declare  class CbServer$MessagingQOS {
  constructor(...args: empty): mixed;
static +MESSAGING_QOS_AT_MOST_ONCE: Class<CbServer$MessagingQOS__MESSAGING_QOS_AT_MOST_ONCE> & CbServer$MessagingQOS__MESSAGING_QOS_AT_MOST_ONCE & 0;// 0
static +MESSAGING_QOS_AT_LEAST_ONCE: Class<CbServer$MessagingQOS__MESSAGING_QOS_AT_LEAST_ONCE> & CbServer$MessagingQOS__MESSAGING_QOS_AT_LEAST_ONCE & 1;// 1
static +MESSAGING_QOS_EXACTLY_ONCE: Class<CbServer$MessagingQOS__MESSAGING_QOS_EXACTLY_ONCE> & CbServer$MessagingQOS__MESSAGING_QOS_EXACTLY_ONCE & 2;// 2

}

declare class CbServer$MessagingQOS__MESSAGING_QOS_AT_MOST_ONCE mixins CbServer$MessagingQOS {}
declare class CbServer$MessagingQOS__MESSAGING_QOS_AT_LEAST_ONCE mixins CbServer$MessagingQOS {}
declare class CbServer$MessagingQOS__MESSAGING_QOS_EXACTLY_ONCE mixins CbServer$MessagingQOS {}


declare interface CbServer$InitOptions {
systemKey: string,
systemSecret: string,
logging?: boolean,
callback?: CbServer$CbCallback,
authToken?: string,
userToken?: string,
email?: string,
password?: string,
registerUser?: boolean,
useUser?: CbServer$APIUser,
URI?: string,
messagingURI?: string,
messagingPort?: number,
defaultQoS?: CbServer$MessagingQOS,
callTimeout?: number
} 

declare interface CbServer$APIUser {
email: string,
authToken: string,
user_id?: string
} 

declare interface CbServer$KeyValuePair {
[key: string]: any
} 

declare type CbServer$CbCallback = (error: boolean, response: CbServer$Resp) => void;

declare type CbServer$ClearBladeGlobal = {
user: CbServer$APIUser
} & CbServer$ClearBladeInt


declare interface CbServer$ClearBladeInt {
Trigger: CbServer$TriggerClass,
Timer: CbServer$TimerClass,
about(): string,
addToQuery(queryObj: CbServer$QueryObj, key: string, value: string): void,
addFilterToQuery(
queryObj: CbServer$QueryObj,
condition: CbServer$QueryConditions,
key: string,
value: CbServer$QueryValue): void,
addSortToQuery(
queryObj: CbServer$QueryObj,
direction: CbServer$QuerySortDirections,
column: string): void,
Code(): CbServer$Code,
Collection(
options: string | CbServer$CollectionOptionsWithName | CbServer$CollectionOptionsWithID | CbServer$CollectionOptionsWithCollection): CbServer$Collection,
Deployment(): CbServer$Deployment,
Device(): CbServer$Device,
edgeId(): string,
execute(
error: {[key: string]: any},
response: {[key: string]: any},
callback: CbServer$CbCallback): any,
getAllCollections(callback: CbServer$CbCallback): void,
http(): {[key: string]: any},
init(options: CbServer$InitOptions | {
request: CbServer$BasicReq
}): void,
isEdge(callback: CbServer$CbCallback): boolean,
isCurrentUserAuthenticated(callback: CbServer$CbCallback): void,
isObjectEmpty(obj: {[key: string]: any}): boolean,
Item(
data: {[key: string]: any},
options: string | CbServer$ItemOptions): CbServer$Item,
logger(message: string): void,
loginAnon(callback: CbServer$CbCallback): void,
loginUser(email: string, password: string, callback: CbServer$CbCallback): void,
logoutUser(callback: CbServer$CbCallback): void,
makeKVPair(key: string, value: string): CbServer$KeyValuePair,
Messaging(
options: CbServer$MessagingOptions,
callback: CbServer$CbCallback): CbServer$Messaging,
newCollection(name: string, callback: CbServer$CbCallback): void,
Query(
options: CbServer$QueryOptionsWithCollection | CbServer$QueryOptionsWithName | CbServer$QueryOptionsWithID): CbServer$QueryObj,
parseOperationQuery(query: CbServer$Query): string,
parseQuery(query: CbServer$Query | CbServer$QueryObj): string,
registerUser(email: string, password: string, callback: CbServer$CbCallback): void,
setUser(email: string, authToken: string, userId: string): void,
User(): CbServer$AppUser,
createDevice(
name: string,
data: {[key: string]: any},
causeTrigger: boolean,
callback: CbServer$CbCallback): void,
deleteDevice(name: string, causeTrigger: boolean, callback: CbServer$CbCallback): void,
updateDevice(
name: string,
data: {[key: string]: any},
causeTrigger: boolean,
callback: CbServer$CbCallback): void,
getDeviceByName(name: string, callback: CbServer$CbCallback): void,
getAllDevicesForSystem(callback: CbServer$CbCallback): void,
validateEmailPassword(email: string, password: string): void
} 

declare interface CbServer$CollectionOptionsWithCollection {
collection: string
} 

declare interface CbServer$CollectionOptionsWithName {
collectionName: string
} 

declare interface CbServer$CollectionOptionsWithID {
collectionID: string
} 

declare interface CbServer$Collection {
user: CbServer$APIUser,
URI: string,
systemKey: string,
systemSecret: string,
addColumn(options: {[key: string]: any}, callback: CbServer$CbCallback): void,
dropColumn(name: string, callback: CbServer$CbCallback): void,
deleteCollection(callback: CbServer$CbCallback): void,
fetch(query: CbServer$Query, callback: CbServer$CbCallback): void,
create(newItem: CbServer$Item, callback: CbServer$CbCallback): void,
update(
query: CbServer$Query,
changes: {[key: string]: any},
callback: CbServer$CbCallback): void,
remove(query: CbServer$Query, callback: CbServer$CbCallback): void,
columns(callback: CbServer$CbCallback): void,
count(query: CbServer$Query, callback: CbServer$CbCallback): void
} 

declare  class CbServer$QuerySortDirections {
  constructor(...args: empty): mixed;
static +QUERY_SORT_ASCENDING: Class<CbServer$QuerySortDirections__QUERY_SORT_ASCENDING> & CbServer$QuerySortDirections__QUERY_SORT_ASCENDING & "ASC";// "ASC"
static +QUERY_SORT_DESCENDING: Class<CbServer$QuerySortDirections__QUERY_SORT_DESCENDING> & CbServer$QuerySortDirections__QUERY_SORT_DESCENDING & "DESC";// "DESC"

}

declare class CbServer$QuerySortDirections__QUERY_SORT_ASCENDING mixins CbServer$QuerySortDirections {}
declare class CbServer$QuerySortDirections__QUERY_SORT_DESCENDING mixins CbServer$QuerySortDirections {}


declare  class CbServer$QueryConditions {
  constructor(...args: empty): mixed;
static +QUERY_EQUAL: Class<CbServer$QueryConditions__QUERY_EQUAL> & CbServer$QueryConditions__QUERY_EQUAL & "EQ";// "EQ"
static +QUERY_NOTEQUAL: Class<CbServer$QueryConditions__QUERY_NOTEQUAL> & CbServer$QueryConditions__QUERY_NOTEQUAL & "NEQ";// "NEQ"
static +QUERY_GREATERTHAN: Class<CbServer$QueryConditions__QUERY_GREATERTHAN> & CbServer$QueryConditions__QUERY_GREATERTHAN & "GT";// "GT"
static +QUERY_GREATERTHAN_EQUAL: Class<CbServer$QueryConditions__QUERY_GREATERTHAN_EQUAL> & CbServer$QueryConditions__QUERY_GREATERTHAN_EQUAL & "GTE";// "GTE"
static +QUERY_LESSTHAN: Class<CbServer$QueryConditions__QUERY_LESSTHAN> & CbServer$QueryConditions__QUERY_LESSTHAN & "LT";// "LT"
static +QUERY_LESSTHAN_EQUAL: Class<CbServer$QueryConditions__QUERY_LESSTHAN_EQUAL> & CbServer$QueryConditions__QUERY_LESSTHAN_EQUAL & "LTE";// "LTE"
static +QUERY_MATCHES: Class<CbServer$QueryConditions__QUERY_MATCHES> & CbServer$QueryConditions__QUERY_MATCHES & "RE";// "RE"

}

declare class CbServer$QueryConditions__QUERY_EQUAL mixins CbServer$QueryConditions {}
declare class CbServer$QueryConditions__QUERY_NOTEQUAL mixins CbServer$QueryConditions {}
declare class CbServer$QueryConditions__QUERY_GREATERTHAN mixins CbServer$QueryConditions {}
declare class CbServer$QueryConditions__QUERY_GREATERTHAN_EQUAL mixins CbServer$QueryConditions {}
declare class CbServer$QueryConditions__QUERY_LESSTHAN mixins CbServer$QueryConditions {}
declare class CbServer$QueryConditions__QUERY_LESSTHAN_EQUAL mixins CbServer$QueryConditions {}
declare class CbServer$QueryConditions__QUERY_MATCHES mixins CbServer$QueryConditions {}


declare type CbServer$QueryValue = string | number | boolean;

declare interface CbServer$QueryOptions {
offset?: number,
limit?: number
} 

declare type CbServer$QueryOptionsWithCollection = {} & CbServer$CollectionOptionsWithCollection & CbServer$QueryOptions


declare type CbServer$QueryOptionsWithName = {} & CbServer$CollectionOptionsWithName & CbServer$QueryOptions


declare type CbServer$QueryOptionsWithID = {} & CbServer$CollectionOptionsWithID & CbServer$QueryOptions


declare interface CbServer$Query {
SELECTCOLUMNS?: string[],
SORT?: CbServer$QuerySortDirections,
FILTERS?: CbServer$QueryFilter[],
PAGESIZE?: number,
PAGENUM?: number
} 

declare interface CbServer$QueryFilter {
[CbServer$QueryConditions: string]: CbServer$QueryFilterValue
} 

declare interface CbServer$QueryFilterValue {
[name: string]: CbServer$QueryValue
} 

declare interface CbServer$QueryObj {
id: string,
user: CbServer$APIUser,
URI: string,
systemKey: string,
systemSecret: string,
query: CbServer$Query,
OR: CbServer$Query[],
offset: number,
limit: number,
ascending(field: string): void,
descending(field: string): void,
equalTo(field: string, value: CbServer$QueryValue): void,
greaterThan(field: string, value: CbServer$QueryValue): void,
greaterThanEqualTo(field: string, value: CbServer$QueryValue): void,
lessThan(field: string, value: CbServer$QueryValue): void,
lessThanEqualTo(field: string, value: CbServer$QueryValue): void,
notEqualTo(field: string, value: CbServer$QueryValue): void,
matches(field: string, pattern: CbServer$QueryValue): void,
or(query: CbServer$QueryObj): void,
setPage(pageSize: number, pageNum: number): void,
fetch(callback: CbServer$CbCallback): void,
update(changes: {[key: string]: any}, callback: CbServer$CbCallback): void,
columns(columnsArray: string[]): void,
remove(callback: CbServer$CbCallback): void
} 

declare type CbServer$ItemOptions = {} & CbServer$CollectionOptionsWithID


declare interface CbServer$Item {
data: {[key: string]: any},
save(): void,
refresh(): void,
destroy(): void
} 

declare interface CbServer$Code {
user: CbServer$APIUser,
systemKey: string,
systemSecret: string,
execute(
name: string,
params: {[key: string]: any},
loggingEnabled: boolean,
callback: CbServer$CbCallback): void,
getAllServices(callback: CbServer$CbCallback): void
} 

declare interface CbServer$DeploymentOptions {} 

declare interface CbServer$Deployment {
user: CbServer$APIUser,
systemKey: string,
systemSecret: string,
create(
name: string,
description: string,
options: CbServer$DeploymentOptions,
callback: CbServer$CbCallback): void,
update(
name: string,
options: CbServer$DeploymentOptions,
callback: CbServer$CbCallback): void,
delete(name: string, callback: CbServer$CbCallback): void,
read(name: string, callback: CbServer$CbCallback): void,
readAll(query: CbServer$QueryObj, callback: CbServer$CbCallback): void
} 

declare interface CbServer$AppUser {
user: CbServer$APIUser,
URI: string,
systemKey: string,
systemSecret: string,
getUser(callback: CbServer$CbCallback): void,
setUser(data: {[key: string]: any}, callback: CbServer$CbCallback): void,
setUsers(
query: CbServer$QueryObj,
data: {[key: string]: any},
callback: CbServer$CbCallback): void,
allUsers(query: CbServer$QueryObj, callback: CbServer$CbCallback): void,
count(query: CbServer$QueryObj, callback: CbServer$CbCallback): void
} 

declare interface CbServer$Messaging {
user: CbServer$APIUser,
systemKey: string,
systemSecret: string,
getMessageHistoryWithTimeFrame(
topic: string,
count: number,
last: number,
start: number,
stop: number,
callback: CbServer$CbCallback): void,
getMessageHistory(
topic: string,
start: number,
count: number,
callback: CbServer$CbCallback): void,
getAndDeleteMessageHistory(
topic: string,
count: number,
last: number,
start: number,
stop: number,
callback: CbServer$CbCallback): void,
getCurrentTopics(callback: CbServer$CbCallback): void,
publish(topic: string, payload: string | ArrayBuffer): void
} 

declare interface CbServer$MessagingOptions {} 

declare interface CbServer$Device {
URI: string,
systemKey: string,
systemSecret: string,
fetch(query: CbServer$Query, callback: CbServer$CbCallback): void,
update(
query: CbServer$Query,
changes: {[key: string]: any},
callback: CbServer$CbCallback): void,
delete(query: CbServer$Query, callback: CbServer$CbCallback): void,
create(newDevice: {[key: string]: any}, callback: CbServer$CbCallback): void
} 

declare  class CbServer$TriggerModule {
  constructor(...args: empty): mixed;
static +DEVICE: Class<CbServer$TriggerModule__DEVICE> & CbServer$TriggerModule__DEVICE & "Device";// "Device"
static +Data: Class<CbServer$TriggerModule__Data> & CbServer$TriggerModule__Data & "Data";// "Data"
static +MESSAGING: Class<CbServer$TriggerModule__MESSAGING> & CbServer$TriggerModule__MESSAGING & "Messaging";// "Messaging"
static +USER: Class<CbServer$TriggerModule__USER> & CbServer$TriggerModule__USER & "User";// "User"

}

declare class CbServer$TriggerModule__DEVICE mixins CbServer$TriggerModule {}
declare class CbServer$TriggerModule__Data mixins CbServer$TriggerModule {}
declare class CbServer$TriggerModule__MESSAGING mixins CbServer$TriggerModule {}
declare class CbServer$TriggerModule__USER mixins CbServer$TriggerModule {}


declare interface CbServer$TriggerCreateOptions {
system_key: string,
name: string,
def_module: CbServer$TriggerModule,
def_name: string,
key_value_pairs: CbServer$KeyValuePair[],
service_name: string
} 

declare interface CbServer$TriggerClass {
Create(
name: string,
options: CbServer$TriggerCreateOptions,
callback: CbServer$CbCallback): void,
Fetch(name: string, callback: CbServer$CbCallback): void
} 

declare interface CbServer$TimerCreateOptions {
description?: string,
start_time?: Date,
repeats?: number,
frequency?: number,
service_name?: string,
user_id?: string,
user_token?: string
} 

declare interface CbServer$TimerClass {
Create(
name: string,
options: CbServer$TimerCreateOptions,
callback: CbServer$CbCallback): void,
Fetch(name: string, callback: CbServer$CbCallback): void
} 

declare interface CbServer$TriggerInstance {
name: string,
systemKey: string,
Update(options: {[key: string]: any}, callback: CbServer$CbCallback): void,
Delete(callback: CbServer$CbCallback): void
} 

declare interface CbServer$TimerInstance {
name: string,
systemKey: string,
Update(options: {[key: string]: any}, callback: CbServer$CbCallback): void,
Delete(callback: CbServer$CbCallback): void
} 

declare var CbServer$ClearBlade: CbServer$ClearBladeGlobal;
    }
