declare module 'sharedb' {
        import typeof * as ShareDB from './lib/sharedb';

	declare interface PubSubOptions {
prefix?: string
} 
	declare interface Stream {
id: string
} 
	declare module.exports: typeof sharedb

	declare class sharedb  {
constructor(options?: {
db?: any,
pubsub?: sharedb$sharedb$PubSub,
disableDocAction?: boolean,
disableSpaceDelimitedActions?: boolean
}): this;
connect: () => sharedb$sharedb$Connection;
addProjection(name: string, collection: string, fields: {}): any;
listen(stream: any): void;
close(callback?: (err: sharedb$Error) => any): void;
use(action: sharedb$sharedb$UseAction, fn: sharedb$sharedb$UseCallback): void;
static types: {
register: (type: {
name?: string,
uri?: string,
[key: string]: any
}) => void
}
}
	declare type sharedb$UseAction = "connect"
| "op"
| "doc"
| "query"
| "submit"
| "apply"
| "commit"
| "after submit"
| "receive";

declare type sharedb$UseCallback = ((
request: {
action: sharedb$UseAction,
agent: any,
req: any,
collection: string,
id: string,
query: any,
op: ShareDB.RawOp
},
callback: () => void) => void);

declare class sharedb$DB  {
projectsSnapshots: boolean;
disableSubscribe: boolean;
close(callback?: () => void): void;
commit(
collection: string,
id: string,
op: sharedb$Op,
snapshot: any,
options: any,
callback: (...args: any[]) => any): void;
getSnapshot(
collection: string,
id: string,
fields: any,
options: any,
callback: (...args: any[]) => any): void;
getSnapshotBulk(
collection: string,
ids: string,
fields: any,
options: any,
callback: (...args: any[]) => any): void;
getOps(
collection: string,
id: string,
from: number,
to: number,
options: any,
callback: (...args: any[]) => any): void;
getOpsToSnapshot(
collection: string,
id: string,
from: number,
snapshot: number,
options: any,
callback: (...args: any[]) => any): void;
getOpsBulk(
collection: string,
fromMap: any,
toMap: any,
options: any,
callback: (...args: any[]) => any): void;
getCommittedOpVersion(
collection: string,
id: string,
snapshot: any,
op: any,
options: any,
callback: (...args: any[]) => any): void;
query(
collection: string,
query: sharedb$Query,
fields: any,
options: any,
callback: (...args: any[]) => any): void;
queryPoll(
collection: string,
query: sharedb$Query,
options: any,
callback: (...args: any[]) => any): void;
queryPollDoc(
collection: string,
id: string,
query: sharedb$Query,
options: any,
callback: (...args: any[]) => any): void;
canPollDoc(): boolean;
skipPoll(): boolean
}

declare class sharedb$MemoryDB mixins sharedb$DB {}

declare class sharedb$PubSub  {
prefix: string;
nextStreamId: number;
streamsCount: number;
streams: {
[channel: string]: Stream
};
subscribed: {
[channel: string]: boolean
};
constructor(options?: PubSubOptions): this;
close(callback?: (err: sharedb$Error | null) => void): void;
publish(
channels: string[],
data: {
[k: string]: any
},
callback: (err: sharedb$Error | null) => void): void;
subscribe(
channel: string,
callback: (err: sharedb$Error | null, stream?: Stream) => void): void;
_subscribe(channel: string, callback: (err: sharedb$Error | null) => void): void;
_unsubscribe(channel: string, callback: (err: sharedb$Error | null) => void): void;
_publish(
channels: string[],
data: any,
callback: (err: sharedb$Error | null) => void): void;
_emit(channel: string, data: {
[k: string]: any
}): void
}

declare class sharedb$Connection  {
constructor(ws: WebSocket): this;
get(collectionName: string, documentID: string): ShareDB.sharedb$Doc;
createFetchQuery(
collectionName: string,
query: string,
options: {
results?: ShareDB.sharedb$Query[]
},
callback: (err: sharedb$Error, results: any) => any): ShareDB.sharedb$Query;
createSubscribeQuery(
collectionName: string,
query: string,
options: {
results?: ShareDB.sharedb$Query[]
},
callback: (err: sharedb$Error, results: any) => any): ShareDB.sharedb$Query
}

declare type sharedb$Doc = ShareDB.sharedb$Doc;

declare type sharedb$Query = ShareDB.sharedb$Query;

declare type sharedb$Error = ShareDB.sharedb$Error;

declare type sharedb$Op = ShareDB.sharedb$Op;

declare type sharedb$AddNumOp = ShareDB.sharedb$AddNumOp;

declare type sharedb$ListMoveOp = ShareDB.sharedb$ListMoveOp;

declare type sharedb$ListInsertOp = ShareDB.sharedb$ListInsertOp;

declare type sharedb$ListDeleteOp = ShareDB.sharedb$ListDeleteOp;

declare type sharedb$ListReplaceOp = ShareDB.sharedb$ListReplaceOp;

declare type sharedb$StringInsertOp = ShareDB.sharedb$StringInsertOp;

declare type sharedb$StringDeleteOp = ShareDB.sharedb$StringDeleteOp;

declare type sharedb$ObjectInsertOp = ShareDB.sharedb$ObjectInsertOp;

declare type sharedb$ObjectDeleteOp = ShareDB.sharedb$ObjectDeleteOp;

declare type sharedb$ObjectReplaceOp = ShareDB.sharedb$ObjectReplaceOp;

declare type sharedb$SubtypeOp = ShareDB.sharedb$SubtypeOp;

declare type sharedb$Path = ShareDB.sharedb$Path;

declare type sharedb$ShareDBSourceOptions = ShareDB.sharedb$ShareDBSourceOptions;
    }
