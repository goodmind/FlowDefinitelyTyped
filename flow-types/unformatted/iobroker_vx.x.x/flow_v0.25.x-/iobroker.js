declare module 'iobroker' {
        import typeof * as fs from 'fs';

	declare module 'global' {
        declare  class ioBroker$StateQuality {
  constructor(...args: empty): mixed;
static +good: Class<ioBroker$StateQuality__good> & ioBroker$StateQuality__good & 0;// 0
static +bad: Class<ioBroker$StateQuality__bad> & ioBroker$StateQuality__bad & 1;// 1
static +general_problem: Class<ioBroker$StateQuality__general_problem> & ioBroker$StateQuality__general_problem & 1;// 1
static +general_device_problem: Class<ioBroker$StateQuality__general_device_problem> & ioBroker$StateQuality__general_device_problem & 65;// 65
static +general_sensor_problem: Class<ioBroker$StateQuality__general_sensor_problem> & ioBroker$StateQuality__general_sensor_problem & 129;// 129
static +device_not_connected: Class<ioBroker$StateQuality__device_not_connected> & ioBroker$StateQuality__device_not_connected & 66;// 66
static +sensor_not_connected: Class<ioBroker$StateQuality__sensor_not_connected> & ioBroker$StateQuality__sensor_not_connected & 130;// 130
static +device_reports_error: Class<ioBroker$StateQuality__device_reports_error> & ioBroker$StateQuality__device_reports_error & 68;// 68
static +sensor_reports_error: Class<ioBroker$StateQuality__sensor_reports_error> & ioBroker$StateQuality__sensor_reports_error & 132;// 132

}

declare class ioBroker$StateQuality__good mixins ioBroker$StateQuality {}
declare class ioBroker$StateQuality__bad mixins ioBroker$StateQuality {}
declare class ioBroker$StateQuality__general_problem mixins ioBroker$StateQuality {}
declare class ioBroker$StateQuality__general_device_problem mixins ioBroker$StateQuality {}
declare class ioBroker$StateQuality__general_sensor_problem mixins ioBroker$StateQuality {}
declare class ioBroker$StateQuality__device_not_connected mixins ioBroker$StateQuality {}
declare class ioBroker$StateQuality__sensor_not_connected mixins ioBroker$StateQuality {}
declare class ioBroker$StateQuality__device_reports_error mixins ioBroker$StateQuality {}
declare class ioBroker$StateQuality__sensor_reports_error mixins ioBroker$StateQuality {}


declare interface ioBroker$State {

/**
 * The value of the state.
 */
val: any,

/**
 * Direction flag: false for desired value and true for actual value. Default: false.
 */
ack: boolean,

/**
 * Unix timestamp. Default: current time
 */
ts: number,

/**
 * Unix timestamp of the last time the value changed
 */
lc: number,

/**
 * Name of the adapter instance which set the value, e.g. "system.adapter.web.0"
 */
from: string,

/**
 * Optional time in seconds after which the state is reset to null
 */
expire?: number,

/**
 * Optional quality of the state value
 */
q?: ioBroker$StateQuality,

/**
 * Optional comment
 */
c?: string
} 


/**
 * Provides low-level access to the ioBroker states DB
 */
declare interface ioBroker$States {

/**
 * Returns a list of states with the given ids
 * @param keys IDs of the states to be retrieved
 * @param callback Is called when the operation has finished (successfully or not)
 * @param dontModify unused
 */
getStates(keys: string[], callback: ioBroker$GetStatesCallback2, dontModify?: any): void,

/**
 * Returns the state with the given id
 * @param id ID of the state to be retrieved
 * @param callback Is called when the operation has finished (successfully or not)
 */
getState(id: string, callback: ioBroker$GetStateCallback): void,

/**
 * Stores a state in the db
 * @param id ID of the state to be stored
 * @param state The state to be stored in the db
 * @param callback Is called when the operation has finished (successfully or not)
 */
setState(
id: string,
state?: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
callback?: ioBroker$SetStateCallback): void,

/**
 * Updates a state in memory without triggering a save
 * @param id ID of the state to be stored
 * @param state The state to be updated
 * @param callback Is called when the operation has finished (successfully or not)
 */
setRawState(id: string, state: ioBroker$State, callback?: ioBroker$SetStateCallback): void,

/**
 * Deletes a state
 * @param id ID of the state to be stored
 * @param callback Is called when the operation has finished (successfully or not)
 */
delState(id: string, callback: ioBroker$DeleteStateCallback): void,

/**
 * Retrieves all ids of states matching @link{pattern}
 * @param pattern The pattern to match against
 * @param callback Is called when the operation has finished (successfully or not)
 * @param dontModify unused
 */
getKeys(
pattern: string,
callback: ioBroker$GetConfigKeysCallback,
dontModify?: any): void,

/**
 * Subscribe to changes of all states matching @link{pattern}
 * @param pattern The pattern to match against
 * @param callback Is called when the operation has finished (successfully or not)
 */
subscribe(pattern: string, cb: ioBroker$EmptyCallback): void,

/**
 * Unsubscribe from changes of all states matching @link{pattern}
 * @param pattern The pattern to match against
 * @param callback Is called when the operation has finished (successfully or not)
 */
unsubscribe(pattern: string, cb: ioBroker$EmptyCallback): void,

/**
 * Register an adapter instance as subscribable.
 * This means that the instance can read information about all subscriptions to its states
 * and will be notified of changes.
 * @param instance Adapter instance to register, e.g. "admin.0"
 * @param cb Is called when the operation has finished (successfully or not)
 */
registerAdapterSubs(instance: string, cb?: (error: null, success: boolean) => void): void,

/**
 * Unregister an adapter instance as subscribable.
 * @param instance Adapter instance to unregister, e.g. "admin.0"
 * @param cb Is called when the operation has finished (successfully or not)
 */
unregisterAdapterSubs(instance: string, cb?: (error: null, success: boolean) => void): void,

/**
 * EDUCATED GUESS: Notify all clients about changes to an object
 * @param type object type
 * @param id State/object id
 * @param obj The changed object
 */
publishAll(type: string, id: string, obj: ioBroker$Message): void,
pushMessage(id: string, state: ioBroker$Message, callback: ioBroker$SetStateCallback): void,
lenMessage(id: string, callback: ioBroker$GenericCallback<number>): void,
getMessage(id: string, callback: ioBroker$GenericCallback<ioBroker$Message>): void,
delMessage(id: string, messageId: number, callback: ioBroker$ErrorCallback): void,
clearAllMessages(callback?: ioBroker$EmptyCallback): void,
subscribeMessage(id: string, cb: ioBroker$EmptyCallback): void,
unsubscribeMessage(id: string, cb: ioBroker$EmptyCallback): void,
pushLog(id: string, log: ioBroker$Log, callback: ioBroker$SetStateCallback): void,
lenLog(id: string, callback: ioBroker$GenericCallback<number>): void,
getLog(id: string, callback: ioBroker$GenericCallback<ioBroker$Log>): void,
delLog(id: string, logId: string, callback: ioBroker$ErrorCallback): void,
clearAllLogs(callback?: ioBroker$EmptyCallback): void,
subscribeLog(id: string, cb: ioBroker$EmptyCallback): void,
unsubscribeLog(id: string, cb: ioBroker$EmptyCallback): void,
getSession(id: string, callback: ioBroker$GetSessionCallback): void,
setSession(id: string, expire: number, callback?: ioBroker$EmptyCallback): void,
setSession(
id: string,
expire: number,
obj: ioBroker$Session,
callback?: ioBroker$EmptyCallback): void,
destroySession(id: string, callback?: ioBroker$EmptyCallback): void,

/**
 * Retrieves a copy of the object with the given ID
 * @param id Id of the object to find
 * @param callback Is called when the operation has finished (successfully or not)
 */
getConfig(id: string, callback: ioBroker$GetObjectCallback): void,

/**
 * Returns a list of config keys matching <pattern>
 * @param pattern Pattern to match against
 * @param callback Is called when the operation has finished (successfully or not)
 * @param dontModify unused
 */
getConfigKeys(
pattern: string,
callback: ioBroker$GetConfigKeysCallback,
dontModify?: any): void,

/**
 * Returns a list of objects with the given ids
 * @param keys IDs of the objects to be retrieved
 * @param callback Is called when the operation has finished (successfully or not)
 * @param dontModify unused
 */
getConfigs(keys: string[], callback: ioBroker$GetObjectsCallback2, dontModify?: any): void,

/**
 * Creates or overwrites a config object in the object db
 * @param id ID of the object
 * @param obj Object to store
 * @param callback Is called when the operation has finished (successfully or not)
 */
setConfig(
id: string,
obj: ioBroker$ioBroker$Object,
callback: ioBroker$SetObjectCallback): void,

/**
 * Deletes a config object in the object db
 * @param id ID of the object
 * @param callback Is called when the operation has finished (successfully or not)
 */
delConfig(id: string, callback: ioBroker$ErrorCallback): void,

/**
 * Subscribe to config object changes
 * @param pattern The pattern to match against
 */
subscribeConfig(pattern: string, callback: ioBroker$EmptyCallback): void,

/**
 * Unsubscribe from config object changes
 * @param pattern The pattern to match against
 */
unsubscribeConfig(pattern: string, callback: ioBroker$EmptyCallback): void,

/**
 * Writes a binary state into Redis
 * @param id The id of the state
 * @param data The data to be written
 * @param callback Is called when the operation has finished (successfully or not)
 */
setBinaryState(id: string, data: Buffer, callback: ioBroker$SetStateCallback): void,

/**
 * Reads a binary state from Redis
 * @param id The id of the state
 * @param callback Is called when the operation has finished (successfully or not)
 */
getBinaryState(id: string, callback: ioBroker$GetBinaryStateCallback): void,

/**
 * Deletes a binary state from Redis
 * @param id The id of the state to be deleted
 * @param callback Is called when the operation has finished (successfully or not)
 */
delBinaryState(id: string, callback: ioBroker$DeleteStateCallback): void,

/**
 * Destructor of the class. Call this before shutting down
 */
destroy(): void
} 

declare type ioBroker$Session = any;

declare type ioBroker$ObjectType = "state" | "channel" | "device";

declare type ioBroker$CommonType = "number"
| "string"
| "boolean"
| "array"
| "object"
| "mixed"
| "file";

declare interface ioBroker$ObjectCommon {

/**
 * name of this object
 */
name: string,

/**
 * Icon for this object
 */
icon?: string,

/**
 * role of the object
 */
role?: string
} 

declare type ioBroker$StateCommon = {

/**
 * Type of this state. See https://github.com/ioBroker/ioBroker/blob/master/doc/SCHEMA.md#state-commonrole for a detailed description
 */
type?: ioBroker$CommonType,

/**
 * minimum value
 */
min?: number,

/**
 * maximum value
 */
max?: number,

/**
 * unit of the value
 */
unit?: string,

/**
 * the default value
 */
def?: any,

/**
 * description of this state
 */
desc?: string,

/**
 * if this state is readable
 */
read: boolean,

/**
 * if this state is writable
 */
write: boolean,

/**
 * role of the state (used in user interfaces to indicate which widget to choose)
 */
role: string,

/**
 * Dictionary of possible values for this state in the form
 * <pre>
 * {
 *      "internal value 1": "displayed value 1",
 *      "internal value 2": "displayed value 2",
 *      ...
 * }
 * </pre>
 * In old ioBroker versions, this could also be a string of the form
 * "val1:text1;val2:text2" (now deprecated)
 */
states?: Record<string, string> | string,

/**
 * ID of a helper state indicating if the handler of this state is working
 */
workingID?: string,

/**
 * attached history information
 */
history?: any
} & ioBroker$ObjectCommon


declare type ioBroker$ChannelCommon = {

/**
 * description of this channel
 */
desc?: string
} & ioBroker$ObjectCommon


declare type ioBroker$OtherCommon = ioBroker$ObjectCommon & {
[propName: string]: any
};

declare interface ioBroker$BaseObject {

/**
 * The ID of this object
 */
_id: string,
native: Record<string, any>,
enums?: Record<string, string>,
type: string,
common: ioBroker$ObjectCommon,
acl?: ioBroker$ObjectACL
} 

declare type ioBroker$StateObject = {
type: "state",
common: ioBroker$StateCommon,
acl?: ioBroker$StateACL
} & ioBroker$BaseObject


declare type ioBroker$PartialStateObject = {
common?: $Shape<ioBroker$StateCommon>,
acl?: $Shape<ioBroker$StateACL>
} & $Shape<Pick<ioBroker$StateObject, "_id" | "native" | "enums" | "type">>


declare type ioBroker$ChannelObject = {
type: "channel",
common: ioBroker$ChannelCommon
} & ioBroker$BaseObject


declare type ioBroker$PartialChannelObject = {
common?: $Shape<ioBroker$ChannelCommon>
} & $Shape<Pick<ioBroker$ChannelObject, "_id"
| "native"
| "enums"
| "type"
| "acl">>


declare type ioBroker$DeviceObject = {
type: "device",
common: ioBroker$ObjectCommon
} & ioBroker$BaseObject


declare type ioBroker$PartialDeviceObject = {
common?: $Shape<ioBroker$ObjectCommon>
} & $Shape<Pick<ioBroker$DeviceObject, "_id"
| "native"
| "enums"
| "type"
| "acl">>


declare type ioBroker$OtherObject = {
type: "adapter"
| "config"
| "enum"
| "group"
| "host"
| "info"
| "instance"
| "meta"
| "script"
| "user",
common: ioBroker$OtherCommon
} & ioBroker$BaseObject


declare type ioBroker$PartialOtherObject = {
common?: $Shape<ioBroker$ObjectCommon>
} & $Shape<Pick<ioBroker$OtherObject, "_id"
| "native"
| "enums"
| "type"
| "acl">>


declare type ioBroker$Object = ioBroker$StateObject | ioBroker$ChannelObject | ioBroker$DeviceObject | ioBroker$OtherObject;

declare type ioBroker$SettableObject = {
_id?: $ElementType<ioBroker$ioBroker$Object, "_id">,
acl?: $ElementType<ioBroker$ioBroker$Object, "acl">
} & Pick<ioBroker$ioBroker$Object, Exclude<$Keys<ioBroker$ioBroker$Object>, "_id" | "acl">>


declare type ioBroker$PartialObject = ioBroker$PartialStateObject | ioBroker$PartialChannelObject | ioBroker$PartialDeviceObject | ioBroker$PartialOtherObject;


/**
 * Defines access rights for a single file
 */
declare interface ioBroker$FileACL {

/**
 * Full name of the user who owns this file, e.g. "system.user.admin"
 */
owner: string,

/**
 * Full name of the group who owns this file, e.g. "system.group.administrator"
 */
ownerGroup: string,

/**
 * Linux-type permissions defining access to this file
 */
permissions: number
} 


/**
 * Defines access rights for a single file, applied to a user or group
 */
declare type ioBroker$EvaluatedFileACL = {

/**
 * Whether the user may read the file
 */
read: boolean,

/**
 * Whether the user may write the file
 */
write: boolean
} & ioBroker$FileACL



/**
 * Defines access rights for a single object
 */
declare interface ioBroker$ObjectACL {

/**
 * Full name of the user who owns this object, e.g. "system.user.admin"
 */
owner: string,

/**
 * Full name of the group who owns this object, e.g. "system.group.administrator"
 */
ownerGroup: string,

/**
 * Linux-type permissions defining access to this object
 */
object: number
} 


/**
 * Defines access rights for a single state object
 */
declare type ioBroker$StateACL = {

/**
 * Linux-type permissions defining access to this state
 */
state: number
} & ioBroker$ObjectACL



/**
 * Defines access rights for a single object type
 */
declare interface ioBroker$ObjectOperationPermissions {

/**
 * Whether a user may enumerate objects of this type
 */
list: boolean,

/**
 * Whether a user may read objects of this type
 */
read: boolean,

/**
 * Whether a user may write objects of this type
 */
write: boolean,

/**
 * Whether a user may create objects of this type
 */
create: boolean,

/**
 * Whether a user may delete objects of this type
 */
"delete": boolean
} 


/**
 * Defines the rights a user or group has to change objects
 */
declare interface ioBroker$ObjectPermissions {

/**
 * The access rights for files
 */
file: ioBroker$ObjectOperationPermissions,

/**
 * The access rights for objects
 */
object: ioBroker$ObjectOperationPermissions,

/**
 * The access rights for users/groups
 */
users: ioBroker$ObjectOperationPermissions,

/**
 * The access rights for states
 */
state?: ioBroker$ObjectOperationPermissions
} 


/**
 * Defined the complete set of access rights a user has
 */
declare type ioBroker$PermissionSet = {

/**
 * The name of the user this ACL is for
 */
user: string,

/**
 * The name of the groups this ACL was merged from
 */
groups: string[],

/**
 * The access rights for certain commands
 */
other: {
execute: boolean,
http: boolean,
sendto: boolean
}
} & ioBroker$ObjectPermissions


declare interface ioBroker$Permission {

/**
 * The type of the permission
 */
type: string,

/**
 * Which kind of operation is required
 */
operation: string
} 

declare type ioBroker$ObjectOrStatePermission = {
type: "object" | "file" | "users" | "state",
operation: "list"
| "read"
| "write"
| "create"
| "delete"
} & ioBroker$Permission


declare type ioBroker$OtherPermission = {
type: "other",
operation: "execute" | "http" | "sendto"
} & ioBroker$Permission


declare interface ioBroker$CommandsPermissions {
getObject: ioBroker$ObjectOrStatePermission,
getObjects: ioBroker$ObjectOrStatePermission,
getObjectView: ioBroker$ObjectOrStatePermission,
setObject: ioBroker$ObjectOrStatePermission,
subscribeObjects: ioBroker$ObjectOrStatePermission,
unsubscribeObjects: ioBroker$ObjectOrStatePermission,
getStates: ioBroker$ObjectOrStatePermission,
getState: ioBroker$ObjectOrStatePermission,
setState: ioBroker$ObjectOrStatePermission,
getStateHistory: ioBroker$ObjectOrStatePermission,
subscribe: ioBroker$ObjectOrStatePermission,
unsubscribe: ioBroker$ObjectOrStatePermission,
getVersion: ioBroker$Permission,
httpGet: ioBroker$OtherPermission,
sendTo: ioBroker$OtherPermission,
sendToHost: ioBroker$OtherPermission,
readFile: ioBroker$ObjectOrStatePermission,
readFile64: ioBroker$ObjectOrStatePermission,
writeFile: ioBroker$ObjectOrStatePermission,
writeFile64: ioBroker$ObjectOrStatePermission,
unlink: ioBroker$ObjectOrStatePermission,
rename: ioBroker$ObjectOrStatePermission,
mkdir: ioBroker$ObjectOrStatePermission,
readDir: ioBroker$ObjectOrStatePermission,
chmodFile: ioBroker$ObjectOrStatePermission,
authEnabled: ioBroker$Permission,
disconnect: ioBroker$Permission,
listPermissions: ioBroker$Permission,
getUserPermissions: ioBroker$ObjectOrStatePermission
} 

declare type ioBroker$UserGroup = any;


/**
 * Contains information about a user
 */
declare interface ioBroker$User {

/**
 * Which groups this user belongs to
 */
groups: ioBroker$UserGroup[],

/**
 * Access rights of this user
 */
acl: ioBroker$ObjectPermissions
} 


/**
 * Parameters for @link{Objects.getObjectView}
 */
declare interface ioBroker$GetObjectViewParams {

/**
 * First id to include in the return list
 */
startkey: string,

/**
 * Last id to include in the return list
 */
endkey: string
} 


/**
 * Parameters for @link{Objects.getObjectList}
 */
declare type ioBroker$GetObjectListParams = {

/**
 * Whether docs should be included in the return list
 */
include_docs: boolean
} & ioBroker$GetObjectViewParams



/**
 * Provides low-level access to the ioBroker objects db
 */
declare interface ioBroker$Objects {

/**
 * For a given user, returns the groups he belongs to, and his access rights
 * @param user Name of the user. Has to start with "system.user."
 * @param callback The callback function to be invoked with the return values
 */
getUserGroup(user: string, callback: ioBroker$GetUserGroupCallback): void,

/**
 * Determines the mime type for a given file extension
 * @param ext File extension, including the leading dot, e.g. ".zip"
 */
getMimeType(ext: string): {
mimeType: string,
isBinary: boolean
},

/**
 * Writes a file.
 * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
 * @param name File name
 * @param data Contents of the file
 * @param options (optional) MIME type of the file (string). Or some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
writeFile(
id: string,
name: string,
data: Buffer | string,
callback: ioBroker$ErrorCallback): void,
writeFile(
id: string,
name: string,
data: Buffer | string,
options: string | mixed,
callback: ioBroker$ErrorCallback): void,

/**
 * Reads a file.
 * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
 * @param name File name
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
readFile(id: string, name: string, callback: ioBroker$ReadFileCallback): void,
readFile(
id: string,
name: string,
options: mixed,
callback: ioBroker$ReadFileCallback): void,

/**
 * Deletes a file.
 * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
 * @param name File name
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
unlink(id: string, name: string, callback: ioBroker$ErrorCallback): void,
unlink(
id: string,
name: string,
options: mixed,
callback: ioBroker$ErrorCallback): void,

/**
 * Deletes a file.
 * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
 * @param name File name
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
delFile(id: string, name: string, callback: ioBroker$ErrorCallback): void,
delFile(
id: string,
name: string,
options: mixed,
callback: ioBroker$ErrorCallback): void,

/**
 * Finds all files and directories starting with <name>
 * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
 * @param name File or directory name
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
readDir(id: string, name: string, callback: ioBroker$ReadDirCallback): void,
readDir(
id: string,
name: string,
options: mixed,
callback: ioBroker$ReadDirCallback): void,

/**
 * Renames a file or directory
 * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
 * @param oldName Old file or directory name
 * @param newName Name to rename to
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
rename(
id: string,
oldName: string,
newName: string,
callback: ioBroker$ErrorCallback): void,
rename(
id: string,
oldName: string,
newName: string,
options: mixed,
callback: ioBroker$ErrorCallback): void,

/**
 * Creates an empty file with the given name
 * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
 * @param name File name
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
touch(id: string, name: string, callback: ioBroker$ErrorCallback): void,
touch(
id: string,
name: string,
options: mixed,
callback: ioBroker$ErrorCallback): void,

/**
 * Deletes all files in the root directory matching <name>
 * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
 * @param name Pattern to match against
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
rm(id: string, name: string, callback: ioBroker$RmCallback): void,
rm(id: string, name: string, options: mixed, callback: ioBroker$RmCallback): void,

/**
 * Creates an empty directory with the given name
 * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
 * @param name Directory name
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
mkDir(id: string, name: string, callback: ioBroker$ErrorCallback): void,
mkDir(
id: string,
name: string,
options: mixed,
callback: ioBroker$ErrorCallback): void,

/**
 * Takes possession all files in the root directory matching <name>
 * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
 * @param name Pattern to match against
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
chownFile(id: string, name: string, callback: ioBroker$ChownFileCallback): void,
chownFile(
id: string,
name: string,
options: mixed,
callback: ioBroker$ChownFileCallback): void,

/**
 * Changes access rights of all files in the root directory matching <name>
 * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
 * @param name Pattern to match against
 * @param options Mode of the access change as a number or hexadecimal string
 * @param callback Is called when the operation has finished (successfully or not)
 */
chmodFile(
id: string,
name: string,
options: {
mode: number | string
} | Record<string, any>,
callback: ioBroker$ChownFileCallback): void,

/**
 * Subscribe to object changes
 * @param pattern The pattern to match against
 */
subscribeConfig(pattern: string, callback: ioBroker$EmptyCallback): void,
subscribeConfig(pattern: string, options: mixed, callback: ioBroker$EmptyCallback): void,

/**
 * Subscribe to object changes
 * @param pattern The pattern to match against
 */
subscribe(pattern: string, callback: ioBroker$EmptyCallback): void,
subscribe(pattern: string, options: mixed, callback: ioBroker$EmptyCallback): void,

/**
 * Unsubscribe from object changes
 * @param pattern The pattern to match against
 */
unsubscribeConfig(pattern: string, callback: ioBroker$EmptyCallback): void,
unsubscribeConfig(pattern: string, options: mixed, callback: ioBroker$EmptyCallback): void,

/**
 * Unsubscribe from object changes
 * @param pattern The pattern to match against
 */
unsubscribe(pattern: string, callback: ioBroker$EmptyCallback): void,
unsubscribe(pattern: string, options: mixed, callback: ioBroker$EmptyCallback): void,

/**
 * Takes possession of all objects matching <pattern>
 * @param pattern Pattern to match against
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
chownObject(pattern: string, callback: ioBroker$ChownObjectCallback): void,
chownObject(pattern: string, options: mixed, callback: ioBroker$ChownObjectCallback): void,

/**
 * Changes access rights of all objects matching <pattern>
 * @param pattern Pattern to match against
 * @param options Mode of the access change as a number or hexadecimal string
 * @param callback Is called when the operation has finished (successfully or not)
 */
chmodObject(pattern: string, callback: ioBroker$ChownObjectCallback): void,
chmodObject(pattern: string, options: mixed, callback: ioBroker$ChownObjectCallback): void,

/**
 * Retrieves a copy of the object with the given ID
 * @param id Id of the object to find
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
getObject(id: string, callback: ioBroker$GetObjectCallback): void,
getObject(id: string, options: mixed, callback: ioBroker$GetObjectCallback): void,

/**
 * Retrieves a copy of the object with the given ID
 * @param id Id of the object to find
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
getConfig(id: string, callback: ioBroker$GetObjectCallback): void,
getConfig(id: string, options: mixed, callback: ioBroker$GetObjectCallback): void,

/**
 * Returns a list of config keys matching <pattern>
 * @param pattern Pattern to match against
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 * @param dontModify unused
 */
getConfigKeys(
pattern: string,
callback: ioBroker$GetConfigKeysCallback,
dontModify?: any): void,
getConfigKeys(
pattern: string,
options: mixed,
callback: ioBroker$GetConfigKeysCallback,
dontModify?: any): void,

/**
 * Returns a list of objects with the given ids
 * @param keys IDs of the objects to be retrieved
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 * @param dontModify unused
 */
getObjects(keys: string[], callback: ioBroker$GetObjectsCallback2, dontModify?: any): void,
getObjects(
keys: string[],
options: mixed,
callback: ioBroker$GetObjectsCallback2,
dontModify?: any): void,

/**
 * Returns a list of objects with the given ids
 * @param keys IDs of the objects to be retrieved
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 * @param dontModify unused
 */
getConfigs(keys: string[], callback: ioBroker$GetObjectsCallback2, dontModify?: any): void,
getConfigs(
keys: string[],
options: mixed,
callback: ioBroker$GetObjectsCallback2,
dontModify?: any): void,

/**
 * Creates or overwrites an object in the object db
 * @param id ID of the object
 * @param obj Object to store
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
setObject(
id: string,
obj: ioBroker$ioBroker$SettableObject,
callback: ioBroker$SetObjectCallback): void,
setObject(
id: string,
obj: ioBroker$ioBroker$SettableObject,
options: mixed,
callback: ioBroker$SetObjectCallback): void,

/**
 * Creates or overwrites an object in the object db
 * @param id ID of the object
 * @param obj Object to store
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
setConfig(
id: string,
obj: ioBroker$ioBroker$SettableObject,
callback: ioBroker$SetObjectCallback): void,
setConfig(
id: string,
obj: ioBroker$ioBroker$SettableObject,
options: mixed,
callback: ioBroker$SetObjectCallback): void,

/**
 * Deletes an object in the object db
 * @param id ID of the object
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
delObject(id: string, callback: ioBroker$ErrorCallback): void,
delObject(id: string, options: mixed, callback: ioBroker$ErrorCallback): void,

/**
 * Deletes an object in the object db
 * @param id ID of the object
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
delConfig(id: string, callback: ioBroker$ErrorCallback): void,
delConfig(id: string, options: mixed, callback: ioBroker$ErrorCallback): void,

/**
 * Returns a list of objects with id between params.startkey and params.endkey
 * @param params Parameters determining the objects included in the return list. Null to include all objects
 * @param options (optional) If the returned list should be sorted. And some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
getObjectList(
params: ioBroker$GetObjectListParams | null,
callback: ioBroker$GetObjectListCallback): void,
getObjectList(
params: ioBroker$GetObjectListParams | null,
options: {
sorted?: boolean
} | Record<string, any>,
callback: ioBroker$GetObjectListCallback): void,

/**
 * Query a predefined object view (similar to SQL stored procedures) and return the results
 * For a detailed description refer to https://github.com/ioBroker/ioBroker/wiki/Adapter-Development-Documentation#object-fields
 * or http://guide.couchdb.org/editions/1/en/views.html
 * @param design The namespace of the object view, as defined in io-package.json. Usually the adapter name, e.g. "hm-rpc"
 * @param search The name of the object view.
 * @param params Parameters to additionally filter out objects from the return list. Null to include all objects
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
getObjectView(
design: string,
search: string,
params: ioBroker$GetObjectViewParams | null,
callback: ioBroker$GetObjectViewCallback): void,
getObjectView(
design: string,
search: string,
params: ioBroker$GetObjectViewParams | null,
options: mixed,
callback: ioBroker$GetObjectViewCallback): void,

/**
 * Extends an object in the object db with new properties
 * @param id ID of the object
 * @param obj Object to extend the original one with. May be just parts of an object.
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
extendObject(
id: string,
obj: ioBroker$PartialObject,
callback: ioBroker$ExtendObjectCallback): void,
extendObject(
id: string,
obj: ioBroker$PartialObject,
options: mixed,
callback: ioBroker$ExtendObjectCallback): void,

/**
 * Finds an object by ID or name. If multiple objects were found, return the first one
 * @param idOrName ID or name of the object
 * @param type If != null, only return an object with a common.type equal to this
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
findObject(
idOrName: string,
type: ioBroker$CommonType | null,
callback: ioBroker$FindObjectCallback): void,
findObject(
idOrName: string,
type: ioBroker$CommonType | null,
options: mixed,
callback: ioBroker$FindObjectCallback): void,

/**
 * Destructor of the class. Call this before shutting down.
 */
destroy(): void
} 

declare type ioBroker$LogLevel = "silly"
| "debug"
| "info"
| "warn"
| "error";

declare interface ioBroker$Logger {

/**
 * log message with silly level
 */
silly(message: string): void,

/**
 * log message with debug level
 */
debug(message: string): void,

/**
 * log message with info level (default output level for all adapters)
 */
info(message: string): void,

/**
 * log message with warning severity
 */
warn(message: string): void,

/**
 * log message with error severity
 */
error(message: string): void,

/**
 * Verbosity of the log output
 */
level: ioBroker$LogLevel
} 

declare interface ioBroker$Certificates {

/**
 * private key file
 */
key: string | Buffer,

/**
 * public certificate
 */
cert: string | Buffer,

/**
 * chained CA certificates
 */
ca: Array<string | Buffer>
} 

declare type ioBroker$MessagePayload = string | Record<string, any>;


/**
 * Callback information for a passed message
 */
declare interface ioBroker$MessageCallbackInfo {

/**
 * The original message payload
 */
message: ioBroker$MessagePayload,

/**
 * ID of this callback
 */
id: number,
ack: boolean,

/**
 * Timestamp of this message
 */
time: number
} 


/**
 * A message being passed between adapter instances
 */
declare interface ioBroker$Message {

/**
 * The command to be executed
 */
command: string,

/**
 * The message payload
 */
message: ioBroker$MessagePayload,

/**
 * The source of this message
 */
from: string,

/**
 * ID of this message
 */
_id: number,

/**
 * Callback information. This is set when the source expects a response
 */
callback: ioBroker$MessageCallbackInfo
} 

declare type ioBroker$Log = any;

declare type ioBroker$EnumList = string | string[];

declare type ioBroker$Enum = any;

declare interface ioBroker$DirectoryEntry {
file: string,
stats: fs.Stats,
isDir: boolean,
acl: any,
modifiedAt: number,
createdAt: number
} 

declare interface ioBroker$GetHistoryOptions {
instance?: string,
start?: number,
end?: number,
step?: number,
count?: number,
from?: boolean,
ack?: boolean,
q?: boolean,
addID?: boolean,
limit?: number,
ignoreNull: boolean,
sessionId?: any,
aggregate?: "minmax"
| "min"
| "max"
| "average"
| "total"
| "count"
| "none"
} 

declare interface ioBroker$AdapterOptions {

/**
 * The name of the adapter
 */
name: string,

/**
 * path to adapter
 */
dirname?: string,

/**
 * if the global system config should be included in the created object. Default: false
 */
systemConfig?: boolean,

/**
 * provide alternative global configuration for the adapter. Default: null
 */
config?: any,

/**
 * instance of the created adapter. Default: null
 */
instance?: number,

/**
 * If the adapter needs access to the formatDate function to format dates according to the global settings. Default: false
 */
useFormatDate?: boolean,

/**
 * If the adapter collects logs from all adapters (experts only). Default: false
 */
logTransporter?: boolean,

/**
 * Handler for changes of subscribed objects
 */
objectChange?: ioBroker$ObjectChangeHandler,

/**
 * Handler for received adapter messages. Can only be used if messagebox in io-package.json is set to true.
 */
message?: ioBroker$MessageHandler,

/**
 * Handler for changes of subscribed states
 */
stateChange?: ioBroker$StateChangeHandler,

/**
 * Will be called when the adapter is intialized
 */
ready?: ioBroker$ReadyHandler,

/**
 * Will be called on adapter termination
 */
unload?: ioBroker$UnloadHandler,

/**
 * if true, stateChange will be called with an id that has no namespace, e.g. "state" instead of "adapter.0.state". Default: false
 */
noNamespace?: boolean
} 

declare interface ioBroker$AdapterConfig {} 

declare interface ioBroker$Adapter {

/**
 * The name of the adapter
 */
name: string,

/**
 * The name of the host where the adapter is running
 */
host: string,

/**
 * instance number of this adapter instance
 */
instance: number,

/**
 * Namespace of adapter objects: "<name>.<instance>"
 */
+namespace: string,

/**
 * native part of the adapter settings
 */
config: ioBroker$AdapterConfig,

/**
 * common part of the adapter settings
 */
common: any,

/**
 * system part of the adapter settings
 */
systemConfig?: any,

/**
 * path to the adapter folder
 */
adapterDir: string,

/**
 * content of io-package.json
 */
ioPack: any,

/**
 * content of package.json
 */
pack: any,

/**
 * access to the logging functions
 */
log: ioBroker$Logger,

/**
 * adapter version
 */
version: any,
states: ioBroker$States,
objects: ioBroker$Objects,

/**
 * if the adapter is connected to the host
 */
connected: boolean,

/**
 * Helper function that looks for first free TCP port starting with the given one.
 * @param port - The port to start with
 * @param callback - gets called when a free port is found
 */
getPort(port: number, callback: (port: number) => void): void,

/**
 * Helper function that looks for first free TCP port starting with the given one.
 * @param port - The port to start with
 */
getPortAsync(port: number): Promise<number>,

/**
 * Stops the adapter. Note: Is not always defined.
 */
stop?: () => void,

/**
 * Validates username and password
 */
checkPassword(user: string, password: string, callback: (result: boolean) => void): void,
checkPassword(
user: string,
password: string,
options: mixed,
callback: (result: boolean) => void): void,

/**
 * Validates username and password
 */
checkPasswordAsync(user: string, password: string, options?: mixed): Promise<boolean>,

/**
 * Sets a new password for the given user
 */
setPassword(user: string, password: string, callback?: (err?: any) => void): void,
setPassword(
user: string,
password: string,
options: mixed,
callback?: (err?: any) => void): void,

/**
 * Sets a new password for the given user
 */
setPasswordAsync(user: string, password: string, options?: mixed): Promise<void>,

/**
 * <INTERNAL> Checks if a user exists and is in the given group.
 */
checkGroup(user: string, group: string, callback: (result: boolean) => void): void,
checkGroup(
user: string,
group: string,
options: mixed,
callback: (result: boolean) => void): void,

/**
 * <INTERNAL> Checks if a user exists and is in the given group.
 */
checkGroupAsync(user: string, group: string, options?: mixed): Promise<boolean>,

/**
 * <INTERNAL> Determines the users permissions
 */
calculatePermissions(
user: string,
commandsPermissions: ioBroker$CommandsPermissions,
callback: (result: ioBroker$PermissionSet) => void): void,
calculatePermissions(
user: string,
commandsPermissions: ioBroker$CommandsPermissions,
options: mixed,
callback: (result: ioBroker$PermissionSet) => void): void,

/**
 * <INTERNAL> Determines the users permissions
 */
calculatePermissionsAsync(
user: string,
commandsPermissions: ioBroker$CommandsPermissions,
options?: mixed): Promise<ioBroker$PermissionSet>,

/**
 * Returns SSL certificates by name (private key, public cert and chained certificate) for creation of HTTPS servers
 */
getCertificates(
publicName: string,
privateName: string,
chainedName: string,
callback: (
err: string | null,
certs?: ioBroker$Certificates,
useLetsEncryptCert?: boolean) => void): void,

/**
 * Terminates the adapter execution but does not disable the adapter
 * @param reason (optional) A message to print into the log prior to termination
 */
terminate(reason?: string): empty,

/**
 * Restarts the adapter
 */
restart(): empty,

/**
 * Disables and stops the adapter instance.
 * It is recommended that you leave the current method (e.g. by using `return`) after calling this.
 */
disable(): void,

/**
 * Updates the adapter config with new values. Only a subset of the configuration has to be provided,
 * since merging with the existing config is done automatically.
 * 
 * After updating the configuration, the adapter is automatically restarted. It is recommended that you
 * leave the current method (e.g. by using `return`) after calling this.
 * @param newConfig The new config values to be stored
 */
updateConfig(newConfig: $Shape<ioBroker$AdapterConfig>): void,

/**
 * Sends a message to a specific instance or all instances of some specific adapter.
 * @param instanceName The instance to send this message to.
If the ID of an instance is given (e.g. "admin.0"), only this instance will receive the message.
If the name of an adapter is given (e.g. "admin"), all instances of this adapter will receive it.
 * @param command (optional) Command name of the target instance. Default: "send"
 * @param message The message (e.g. params) to send.
 */
sendTo(
instanceName: string,
message: ioBroker$MessagePayload,
callback?: ioBroker$MessageCallback | ioBroker$MessageCallbackInfo): void,
sendTo(
instanceName: string,
command: string,
message: ioBroker$MessagePayload,
callback?: ioBroker$MessageCallback | ioBroker$MessageCallbackInfo): void,

/**
 * Sends a message to a specific instance or all instances of some specific adapter.
 * @param instanceName The instance to send this message to.
If the ID of an instance is given (e.g. "admin.0"), only this instance will receive the message.
If the name of an adapter is given (e.g. "admin"), all instances of this adapter will receive it.
 * @param command (optional) Command name of the target instance. Default: "send"
 * @param message The message (e.g. params) to send.
 */
sendToAsync(
instanceName: string,
message: ioBroker$MessagePayload): Promise<ioBroker$Message | void>,
sendToAsync(
instanceName: string,
command: string,
message: ioBroker$MessagePayload): Promise<ioBroker$Message | void>,

/**
 * Sends a message to a specific host or all hosts.
 */
sendToHost(
hostName: string,
message: ioBroker$MessagePayload,
callback?: ioBroker$MessageCallback | ioBroker$MessageCallbackInfo): void,
sendToHost(
hostName: string,
command: string,
message: ioBroker$MessagePayload,
callback?: ioBroker$MessageCallback | ioBroker$MessageCallbackInfo): void,

/**
 * Sends a message to a specific host or all hosts.
 */
sendToHostAsync(
hostName: string,
message: ioBroker$MessagePayload): Promise<ioBroker$Message | void>,
sendToHostAsync(
hostName: string,
command: string,
message: ioBroker$MessagePayload): Promise<ioBroker$Message | void>,

/**
 * Convert ID to {device: D, channel: C, state: S}
 */
idToDCS(id: string): {
device: string,
channel: string,
state: string
},

/**
 * Reads an object from the object db
 */
getObject(id: string, callback: ioBroker$GetObjectCallback): void,
getObject(id: string, options: mixed, callback: ioBroker$GetObjectCallback): void,

/**
 * Reads an object from the object db
 */
getObjectAsync(
id: string,
options?: mixed): Promise<ioBroker$CallbackReturnTypeOf<ioBroker$GetObjectCallback>>,

/**
 * Creates or overwrites an object in the object db
 */
setObject(
id: string,
obj: ioBroker$ioBroker$SettableObject,
callback?: ioBroker$SetObjectCallback): void,
setObject(
id: string,
obj: ioBroker$ioBroker$SettableObject,
options: mixed,
callback?: ioBroker$SetObjectCallback): void,

/**
 * Creates or overwrites an object in the object db
 */
setObjectAsync(
id: string,
obj: ioBroker$ioBroker$SettableObject,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,

/**
 * Creates an object in the object db. Existing objects are not overwritten.
 */
setObjectNotExists(
id: string,
obj: ioBroker$ioBroker$SettableObject,
callback?: ioBroker$SetObjectCallback): void,
setObjectNotExists(
id: string,
obj: ioBroker$ioBroker$SettableObject,
options: mixed,
callback?: ioBroker$SetObjectCallback): void,

/**
 * Creates an object in the object db. Existing objects are not overwritten.
 */
setObjectNotExistsAsync(
id: string,
obj: ioBroker$ioBroker$SettableObject,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,

/**
 * Get all states, channels and devices of this adapter
 */
getAdapterObjects(callback: (objects: Record<string, ioBroker$ioBroker$Object>) => void): void,

/**
 * Get all states, channels and devices of this adapter
 */
getAdapterObjectsAsync(): Promise<Record<string, ioBroker$ioBroker$Object>>,

/**
 * Extend an object and create it if it might not exist
 */
extendObject(
id: string,
objPart: ioBroker$PartialObject,
callback?: ioBroker$SetObjectCallback): void,
extendObject(
id: string,
objPart: ioBroker$PartialObject,
options: mixed,
callback?: ioBroker$SetObjectCallback): void,

/**
 * Extend an object and create it if it might not exist
 */
extendObjectAsync(
id: string,
objPart: ioBroker$PartialObject,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,

/**
 * Deletes an object from the object db
 * @param id - The id of the object without namespace
 */
delObject(id: string, callback?: ioBroker$ErrorCallback): void,
delObject(id: string, options: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Deletes an object from the object db
 * @param id - The id of the object without namespace
 */
delObjectAsync(id: string, options?: mixed): Promise<void>,

/**
 * Reads an object (which might not belong to this adapter) from the object db
 */
getForeignObject(id: string, callback: ioBroker$GetObjectCallback): void,
getForeignObject(id: string, options: mixed, callback: ioBroker$GetObjectCallback): void,

/**
 * Reads an object (which might not belong to this adapter) from the object db
 */
getForeignObjectAsync(
id: string,
options?: mixed): Promise<ioBroker$CallbackReturnTypeOf<ioBroker$GetObjectCallback>>,

/**
 * Get foreign objects by pattern, by specific type and resolve their enums.
 */
getForeignObjects(pattern: string, callback: ioBroker$GetObjectsCallback): void,
getForeignObjects(pattern: string, options: mixed, callback: ioBroker$GetObjectsCallback): void,
getForeignObjects(
pattern: string,
type: ioBroker$ObjectType,
callback: ioBroker$GetObjectsCallback): void,
getForeignObjects(
pattern: string,
type: ioBroker$ObjectType,
enums: ioBroker$EnumList,
callback: ioBroker$GetObjectsCallback): void,
getForeignObjects(
pattern: string,
type: ioBroker$ObjectType,
options: mixed,
callback: ioBroker$GetObjectsCallback): void,
getForeignObjects(
pattern: string,
type: ioBroker$ObjectType,
enums: ioBroker$EnumList,
options: mixed,
callback: ioBroker$GetObjectsCallback): void,

/**
 * Get foreign objects by pattern, by specific type and resolve their enums.
 */
getForeignObjectsAsync(
pattern: string,
options?: mixed): Promise<ioBroker$CallbackReturnTypeOf<ioBroker$GetObjectsCallback>>,
getForeignObjectsAsync(
pattern: string,
type: ioBroker$ObjectType,
options?: mixed): Promise<ioBroker$CallbackReturnTypeOf<ioBroker$GetObjectsCallback>>,
getForeignObjectsAsync(
pattern: string,
type: ioBroker$ObjectType,
enums: ioBroker$EnumList,
options?: mixed): Promise<ioBroker$CallbackReturnTypeOf<ioBroker$GetObjectsCallback>>,

/**
 * Creates or overwrites an object (which might not belong to this adapter) in the object db
 */
setForeignObject(
id: string,
obj: ioBroker$ioBroker$SettableObject,
callback?: ioBroker$SetObjectCallback): void,
setForeignObject(
id: string,
obj: ioBroker$ioBroker$SettableObject,
options: mixed,
callback?: ioBroker$SetObjectCallback): void,

/**
 * Creates or overwrites an object (which might not belong to this adapter) in the object db
 */
setForeignObjectAsync(
id: string,
obj: ioBroker$ioBroker$SettableObject,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,

/**
 * Creates an object (which might not belong to this adapter) in the object db. Existing objects are not overwritten.
 */
setForeignObjectNotExists(
id: string,
obj: ioBroker$ioBroker$SettableObject,
callback?: ioBroker$SetObjectCallback): void,
setForeignObjectNotExists(
id: string,
obj: ioBroker$ioBroker$SettableObject,
options: mixed,
callback?: ioBroker$SetObjectCallback): void,

/**
 * Creates an object (which might not belong to this adapter) in the object db. Existing objects are not overwritten.
 */
setForeignObjectNotExistsAsync(
id: string,
obj: ioBroker$ioBroker$SettableObject,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,

/**
 * Extend an object (which might not belong to this adapter) and create it if it might not exist
 */
extendForeignObject(
id: string,
objPart: ioBroker$PartialObject,
callback?: ioBroker$SetObjectCallback): void,
extendForeignObject(
id: string,
objPart: ioBroker$PartialObject,
options: mixed,
callback?: ioBroker$SetObjectCallback): void,

/**
 * Extend an object (which might not belong to this adapter) and create it if it might not exist
 */
extendForeignObjectAsync(
id: string,
objPart: ioBroker$PartialObject,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,

/**
 * Finds an object by its ID or name
 * @param type - common.type of the state
 */
findForeignObject(idOrName: string, type: string, callback: ioBroker$FindObjectCallback): void,
findForeignObject(
idOrName: string,
type: string,
options: mixed,
callback: ioBroker$FindObjectCallback): void,

/**
 * Finds an object by its ID or name
 * @param type - common.type of the state
 */
findForeignObjectAsync(idOrName: string, type: string): Promise<{
id: string,
name: string
}>,

/**
 * Deletes an object (which might not belong to this adapter) from the object db
 * @param id - The id of the object including namespace
 */
delForeignObject(id: string, callback?: ioBroker$ErrorCallback): void,
delForeignObject(id: string, options: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Deletes an object (which might not belong to this adapter) from the object db
 * @param id - The id of the object including namespace
 */
delForeignObjectAsync(id: string, options?: mixed): Promise<void>,

/**
 * Writes a value into the states DB.
 */
setState(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
callback?: ioBroker$SetStateCallback): void,
setState(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
callback?: ioBroker$SetStateCallback): void,
setState(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
options: mixed,
callback?: ioBroker$SetStateCallback): void,
setState(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
options: mixed,
callback?: ioBroker$SetStateCallback): void,

/**
 * Writes a value into the states DB.
 */
setStateAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack?: boolean): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateCallback>>,
setStateAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateCallback>>,
setStateAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
options: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateCallback>>,

/**
 * Writes a value into the states DB only if it has changed.
 */
setStateChanged(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
callback?: ioBroker$SetStateChangedCallback): void,
setStateChanged(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
callback?: ioBroker$SetStateChangedCallback): void,
setStateChanged(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
options: mixed,
callback?: ioBroker$SetStateChangedCallback): void,
setStateChanged(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
options: mixed,
callback?: ioBroker$SetStateChangedCallback): void,

/**
 * Writes a value into the states DB only if it has changed.
 */
setStateChangedAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack?: boolean): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateChangedCallback>>,
setStateChangedAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateChangedCallback>>,
setStateChangedAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
options: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateChangedCallback>>,

/**
 * Writes a value (which might not belong to this adapter) into the states DB.
 */
setForeignState(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
callback?: ioBroker$SetStateCallback): void,
setForeignState(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
callback?: ioBroker$SetStateCallback): void,
setForeignState(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
options: mixed,
callback?: ioBroker$SetStateCallback): void,
setForeignState(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
options: mixed,
callback?: ioBroker$SetStateCallback): void,

/**
 * Writes a value (which might not belong to this adapter) into the states DB.
 */
setForeignStateAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack?: boolean): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateCallback>>,
setForeignStateAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateCallback>>,
setForeignStateAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
options: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateCallback>>,

/**
 * Writes a value (which might not belong to this adapter) into the states DB only if it has changed.
 */
setForeignStateChanged(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
callback?: ioBroker$SetStateChangedCallback): void,
setForeignStateChanged(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
callback?: ioBroker$SetStateChangedCallback): void,
setForeignStateChanged(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
options: mixed,
callback?: ioBroker$SetStateChangedCallback): void,
setForeignStateChanged(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
options: mixed,
callback?: ioBroker$SetStateChangedCallback): void,

/**
 * Writes a value (which might not belong to this adapter) into the states DB only if it has changed.
 */
setForeignStateChangedAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack?: boolean): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateChangedCallback>>,
setForeignStateChangedAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateChangedCallback>>,
setForeignStateChangedAsync(
id: string,
state: string
| number
| boolean
| ioBroker$State
| $Shape<ioBroker$State>,
ack: boolean,
options: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateChangedCallback>>,

/**
 * Read a value from the states DB.
 */
getState(id: string, callback: ioBroker$GetStateCallback): void,
getState(id: string, options: mixed, callback: ioBroker$GetStateCallback): void,

/**
 * Read a value from the states DB.
 */
getStateAsync(
id: string,
options?: mixed): Promise<ioBroker$CallbackReturnTypeOf<ioBroker$GetStateCallback>>,

/**
 * Read a value (which might not belong to this adapter) from the states DB.
 */
getForeignState(id: string, callback: ioBroker$GetStateCallback): void,
getForeignState(id: string, options: mixed, callback: ioBroker$GetStateCallback): void,

/**
 * Read a value (which might not belong to this adapter) from the states DB.
 */
getForeignStateAsync(
id: string,
options?: mixed): Promise<ioBroker$CallbackReturnTypeOf<ioBroker$GetStateCallback>>,

/**
 * Read all states of this adapter which match the given pattern
 */
getStates(pattern: string, callback: ioBroker$GetStatesCallback): void,
getStates(pattern: string, options: mixed, callback: ioBroker$GetStatesCallback): void,

/**
 * Read all states of this adapter which match the given pattern
 */
getStatesAsync(
pattern: string,
options?: mixed): Promise<ioBroker$CallbackReturnTypeOf<ioBroker$GetStatesCallback>>,

/**
 * Read all states (which might not belong to this adapter) which match the given pattern
 */
getForeignStates(pattern: string, callback: ioBroker$GetStatesCallback): void,
getForeignStates(pattern: string, options: mixed, callback: ioBroker$GetStatesCallback): void,

/**
 * Read all states (which might not belong to this adapter) which match the given pattern
 */
getForeignStatesAsync(
pattern: string,
options?: mixed): Promise<ioBroker$CallbackReturnTypeOf<ioBroker$GetStatesCallback>>,

/**
 * Deletes a state from the states DB, but not the associated object. Consider using @link{deleteState} instead
 */
delState(id: string, callback?: ioBroker$ErrorCallback): void,
delState(id: string, options: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Deletes a state from the states DB, but not the associated object. Consider using @link{deleteState} instead
 */
delStateAsync(id: string, options?: mixed): Promise<void>,

/**
 * Deletes a state from the states DB, but not the associated object
 */
delForeignState(id: string, callback?: ioBroker$ErrorCallback): void,
delForeignState(id: string, options: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Deletes a state from the states DB, but not the associated object
 */
delForeignStateAsync(id: string, options?: mixed): Promise<void>,
getHistory(
id: string,
options: ioBroker$GetHistoryOptions,
callback: ioBroker$GetHistoryCallback): void,

/**
 * Writes a binary state into Redis
 * @param id The id of the state
 * @param binary The data to be written
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
setBinaryState(id: string, binary: Buffer, callback: ioBroker$SetStateCallback): void,
setBinaryState(
id: string,
binary: Buffer,
options: mixed,
callback: ioBroker$SetStateCallback): void,

/**
 * Writes a binary state into Redis
 * @param id The id of the state
 * @param binary The data to be written
 * @param options (optional) Some internal options.
 */
setBinaryStateAsync(
id: string,
binary: Buffer,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetStateCallback>>,

/**
 * Reads a binary state from Redis
 * @param id The id of the state
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
getBinaryState(id: string, callback: ioBroker$GetBinaryStateCallback): void,
getBinaryState(id: string, options: mixed, callback: ioBroker$GetBinaryStateCallback): void,

/**
 * Reads a binary state from Redis
 * @param id The id of the state
 * @param options (optional) Some internal options.
 */
getBinaryStateAsync(
id: string,
options?: mixed): Promise<ioBroker$CallbackReturnTypeOf<ioBroker$GetBinaryStateCallback>>,

/**
 * Returns the enum tree, filtered by the optional enum name
 */
getEnum(callback: ioBroker$GetEnumCallback): void,
getEnum(name: string, callback: ioBroker$GetEnumCallback): void,
getEnum(name: string, options: mixed, callback: ioBroker$GetEnumCallback): void,

/**
 * Returns the enum tree, filtered by the optional enum name
 */
getEnumAsync(
name: string,
options?: mixed): Promise<{
result: Record<string, any>,
requestEnum: string
}>,

/**
 * Returns the enum tree, filtered by the optional enum name
 */
getEnums(callback: ioBroker$GetEnumsCallback): void,
getEnums(enumList: ioBroker$EnumList, callback: ioBroker$GetEnumsCallback): void,
getEnums(
enumList: ioBroker$EnumList,
options: mixed,
callback: ioBroker$GetEnumsCallback): void,

/**
 * Returns the enum tree, filtered by the optional enum name
 */
getEnumsAsync(
enumList: ioBroker$EnumList,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$GetEnumsCallback>>,
addChannelToEnum(
enumName: string,
addTo: string,
parentDevice: string,
channelName: string,
callback?: ioBroker$ErrorCallback): void,
addChannelToEnum(
enumName: string,
addTo: string,
parentDevice: string,
channelName: string,
options: mixed,
callback?: ioBroker$ErrorCallback): void,
addChannelToEnumAsync(
enumName: string,
addTo: string,
parentDevice: string,
channelName: string,
options?: mixed): Promise<void>,
deleteChannelFromEnum(
enumName: string,
parentDevice: string,
channelName: string,
callback?: ioBroker$ErrorCallback): void,
deleteChannelFromEnum(
enumName: string,
parentDevice: string,
channelName: string,
options: mixed,
callback?: ioBroker$ErrorCallback): void,
deleteChannelFromEnumAsync(
enumName: string,
parentDevice: string,
channelName: string,
options?: mixed): Promise<void>,
addStateToEnum(
enumName: string,
addTo: string,
parentDevice: string,
parentChannel: string,
stateName: string,
callback?: ioBroker$ErrorCallback): void,
addStateToEnum(
enumName: string,
addTo: string,
parentDevice: string,
parentChannel: string,
stateName: string,
options: mixed,
callback?: ioBroker$ErrorCallback): void,
addStateToEnumAsync(
enumName: string,
addTo: string,
parentDevice: string,
parentChannel: string,
stateName: string,
options?: mixed): Promise<void>,
deleteStateFromEnum(
enumName: string,
parentDevice: string,
parentChannel: string,
stateName: string,
callback?: ioBroker$ErrorCallback): void,
deleteStateFromEnum(
enumName: string,
parentDevice: string,
parentChannel: string,
stateName: string,
options: mixed,
callback?: ioBroker$ErrorCallback): void,
deleteStateFromEnumAsync(
enumName: string,
parentDevice: string,
parentChannel: string,
stateName: string,
options?: mixed): Promise<void>,

/**
 * Subscribe to changes of objects in this instance
 */
subscribeObjects(pattern: string, options?: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Subscribe to changes of objects (which might not belong to this adapter)
 */
subscribeForeignObjects(pattern: string, options?: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Unsubscribe from changes of objects in this instance
 */
unsubscribeObjects(pattern: string, options?: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Unsubscribe from changes of objects (which might not belong to this adapter)
 */
unsubscribeForeignObjects(pattern: string, options?: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Subscribe to changes of states in this instance
 */
subscribeStates(pattern: string, callback?: ioBroker$ErrorCallback): void,
subscribeStates(pattern: string, options: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Subscribe to changes of states in this instance
 */
subscribeStatesAsync(pattern: string, options?: mixed): Promise<void>,

/**
 * Subscribe to changes of states (which might not belong to this adapter)
 */
subscribeForeignStates(pattern: string, callback?: ioBroker$ErrorCallback): void,
subscribeForeignStates(pattern: string, options: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Subscribe to changes of states (which might not belong to this adapter)
 */
subscribeForeignStatesAsync(pattern: string, options?: mixed): Promise<void>,

/**
 * Subscribe from changes of states in this instance
 * @param pattern - Must match the pattern used to subscribe
 */
unsubscribeStates(pattern: string, callback?: ioBroker$ErrorCallback): void,
unsubscribeStates(pattern: string, options: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Subscribe from changes of states in this instance
 * @param pattern - Must match the pattern used to subscribe
 */
unsubscribeStatesAsync(pattern: string, options?: mixed): Promise<void>,

/**
 * Subscribe from changes of states (which might not belong to this adapter)
 * @param pattern - Must match the pattern used to subscribe
 */
unsubscribeForeignStates(pattern: string, callback?: ioBroker$ErrorCallback): void,
unsubscribeForeignStates(pattern: string, options: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * Subscribe from changes of states (which might not belong to this adapter)
 * @param pattern - Must match the pattern used to subscribe
 */
unsubscribeForeignStatesAsync(pattern: string, options?: mixed): Promise<void>,

/**
 * creates an object with type device
 */
createDevice(deviceName: string, callback?: ioBroker$SetObjectCallback): void,
createDevice(
deviceName: string,
common: $Shape<ioBroker$ioBroker$ObjectCommon>,
callback?: ioBroker$SetObjectCallback): void,
createDevice(
deviceName: string,
common: $Shape<ioBroker$ioBroker$ObjectCommon>,
native: Record<string, any>,
callback?: ioBroker$SetObjectCallback): void,
createDevice(
deviceName: string,
common: $Shape<ioBroker$ioBroker$ObjectCommon>,
native: Record<string, any>,
options: mixed,
callback?: ioBroker$SetObjectCallback): void,

/**
 * creates an object with type device
 */
createDeviceAsync(
deviceName: string,
common?: $Shape<ioBroker$ioBroker$ObjectCommon>): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,
createDeviceAsync(
deviceName: string,
common: $Shape<ioBroker$ioBroker$ObjectCommon>,
native?: Record<string, any>): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,
createDeviceAsync(
deviceName: string,
common: $Shape<ioBroker$ioBroker$ObjectCommon>,
native: Record<string, any>,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,

/**
 * deletes a device, its channels and states
 */
deleteDevice(deviceName: string, callback?: ioBroker$ErrorCallback): void,
deleteDevice(deviceName: string, options: mixed, callback?: ioBroker$ErrorCallback): void,

/**
 * deletes a device, its channels and states
 */
deleteDeviceAsync(deviceName: string, options?: mixed): Promise<void>,

/**
 * Creates an object with type channel. It must be located under a device
 */
createChannel(
parentDevice: string,
channelName: string,
callback?: ioBroker$SetObjectCallback): void,
createChannel(
parentDevice: string,
channelName: string,
roleOrCommon: string | $Shape<ioBroker$ioBroker$ChannelCommon>,
callback?: ioBroker$SetObjectCallback): void,
createChannel(
parentDevice: string,
channelName: string,
roleOrCommon: string | $Shape<ioBroker$ioBroker$ChannelCommon>,
native: Record<string, any>,
callback?: ioBroker$SetObjectCallback): void,
createChannel(
parentDevice: string,
channelName: string,
roleOrCommon: string | $Shape<ioBroker$ioBroker$ChannelCommon>,
native: Record<string, any>,
options: mixed,
callback?: ioBroker$SetObjectCallback): void,

/**
 * Creates an object with type channel. It must be located under a device
 */
createChannelAsync(
parentDevice: string,
channelName: string,
roleOrCommon?: string | $Shape<ioBroker$ioBroker$ChannelCommon>): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,
createChannelAsync(
parentDevice: string,
channelName: string,
roleOrCommon: string | $Shape<ioBroker$ioBroker$ChannelCommon>,
native?: Record<string, any>): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,
createChannelAsync(
parentDevice: string,
channelName: string,
roleOrCommon: string | $Shape<ioBroker$ioBroker$ChannelCommon>,
native: Record<string, any>,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,

/**
 * Deletes a channel and its states. It must have been created with `createChannel`
 */
deleteChannel(channelName: string, options?: mixed, callback?: ioBroker$ErrorCallback): void,
deleteChannel(
parentDevice: string,
channelName: string,
options?: mixed,
callback?: ioBroker$ErrorCallback): void,

/**
 * Deletes a channel and its states. It must have been created with `createChannel`
 */
deleteChannelAsync(channelName: string, options?: mixed): Promise<void>,
deleteChannelAsync(parentDevice: string, channelName: string, options?: mixed): Promise<void>,

/**
 * Creates a state and the corresponding object. It must be located in a channel under a device
 */
createState(
parentDevice: string,
parentChannel: string,
stateName: string,
callback?: ioBroker$SetObjectCallback): void,
createState(
parentDevice: string,
parentChannel: string,
stateName: string,
roleOrCommon: string | $Shape<ioBroker$ioBroker$StateCommon>,
callback?: ioBroker$SetObjectCallback): void,
createState(
parentDevice: string,
parentChannel: string,
stateName: string,
roleOrCommon: string | $Shape<ioBroker$ioBroker$StateCommon>,
native: Record<string, any>,
callback?: ioBroker$SetObjectCallback): void,
createState(
parentDevice: string,
parentChannel: string,
stateName: string,
roleOrCommon: string | $Shape<ioBroker$ioBroker$StateCommon>,
native: Record<string, any>,
options: mixed,
callback?: ioBroker$SetObjectCallback): void,

/**
 * Creates a state and the corresponding object. It must be located in a channel under a device
 */
createStateAsync(
parentDevice: string,
parentChannel: string,
stateName: string,
roleOrCommon?: string | $Shape<ioBroker$ioBroker$StateCommon>): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,
createStateAsync(
parentDevice: string,
parentChannel: string,
stateName: string,
roleOrCommon: string | $Shape<ioBroker$ioBroker$StateCommon>,
native?: Record<string, any>): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,
createStateAsync(
parentDevice: string,
parentChannel: string,
stateName: string,
roleOrCommon: string | $Shape<ioBroker$ioBroker$StateCommon>,
native: Record<string, any>,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$SetObjectCallback>>,

/**
 * Deletes a state. It must have been created with `createState`
 */
deleteState(stateName: string, options?: mixed, callback?: ioBroker$ErrorCallback): void,
deleteState(
parentChannel: string,
stateName: string,
options?: mixed,
callback?: ioBroker$ErrorCallback): void,
deleteState(
parentDevice: string,
parentChannel: string,
stateName: string,
options?: mixed,
callback?: ioBroker$ErrorCallback): void,

/**
 * Deletes a state. It must have been created with `createState`
 */
deleteStateAsync(stateName: string, options?: mixed): Promise<void>,
deleteStateAsync(parentChannel: string, stateName: string, options?: mixed): Promise<void>,
deleteStateAsync(
parentDevice: string,
parentChannel: string,
stateName: string,
options?: mixed): Promise<void>,

/**
 * Returns a list of all devices in this adapter instance
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
getDevices(callback: ioBroker$GetObjectsCallback3<ioBroker$DeviceObject>): void,
getDevices(
options: mixed,
callback: ioBroker$GetObjectsCallback3<ioBroker$DeviceObject>): void,

/**
 * Returns a list of all devices in this adapter instance
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
getDevicesAsync(
options?: mixed): Promise<Array<ioBroker$GetObjectsItem<ioBroker$DeviceObject>>>,

/**
 * Returns a list of all channels in this adapter instance
 * @param parentDevice (optional) Name of the parent device to filter the channels by
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
getChannels(callback: ioBroker$GetObjectsCallback3<ioBroker$ChannelObject>): void,
getChannels(
parentDevice: string,
callback: ioBroker$GetObjectsCallback3<ioBroker$ChannelObject>): void,
getChannels(
parentDevice: string,
options: mixed,
callback: ioBroker$GetObjectsCallback3<ioBroker$ChannelObject>): void,

/**
 * Returns a list of all channels in this adapter instance
 * @param parentDevice (optional) Name of the parent device to filter the channels by
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
getChannelsOf(callback: ioBroker$GetObjectsCallback3<ioBroker$ChannelObject>): void,
getChannelsOf(
parentDevice: string,
callback: ioBroker$GetObjectsCallback3<ioBroker$ChannelObject>): void,
getChannelsOf(
parentDevice: string,
options: mixed,
callback: ioBroker$GetObjectsCallback3<ioBroker$ChannelObject>): void,

/**
 * Returns a list of all channels in this adapter instance
 * @param parentDevice (optional) Name of the parent device to filter the channels by
 * @param options (optional) Some internal options.
 */
getChannelsOfAsync(): Promise<Array<ioBroker$GetObjectsItem<ioBroker$ChannelObject>>>,
getChannelsOfAsync(
parentDevice: string,
options?: mixed): Promise<Array<ioBroker$GetObjectsItem<ioBroker$ChannelObject>>>,

/**
 * Returns a list of all states in this adapter instance
 * @param parentDevice (optional) Name of the parent device to filter the channels by
 * @param parentChannel (optional) Name of the parent channel to filter the channels by
 * @param options (optional) Some internal options.
 * @param callback Is called when the operation has finished (successfully or not)
 */
getStatesOf(callback: ioBroker$GetObjectsCallback3<ioBroker$StateObject>): void,
getStatesOf(
parentDevice: string,
callback: ioBroker$GetObjectsCallback3<ioBroker$StateObject>): void,
getStatesOf(
parentDevice: string,
parentChannel: string,
callback: ioBroker$GetObjectsCallback3<ioBroker$StateObject>): void,
getStatesOf(
parentDevice: string,
parentChannel: string,
options: mixed,
callback: ioBroker$GetObjectsCallback3<ioBroker$StateObject>): void,

/**
 * Returns a list of all states in this adapter instance
 * @param parentDevice (optional) Name of the parent device to filter the channels by
 * @param parentChannel (optional) Name of the parent channel to filter the channels by
 * @param options (optional) Some internal options.
 */
getStatesOfAsync(): Promise<Array<ioBroker$GetObjectsItem<ioBroker$StateObject>>>,
getStatesOfAsync(
parentDevice: string,
parentChannel?: string): Promise<Array<ioBroker$GetObjectsItem<ioBroker$StateObject>>>,
getStatesOfAsync(
parentDevice: string,
parentChannel: string,
options?: mixed): Promise<Array<ioBroker$GetObjectsItem<ioBroker$StateObject>>>,

/**
 * reads the content of directory from DB for given adapter and path
 * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
 * @param path - path to directory without adapter name. E.g. If you want to read "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
 */
readDir(
adapterName: string | null,
path: string,
callback: ioBroker$ReadDirCallback): void,
readDir(
adapterName: string | null,
path: string,
options: mixed,
callback: ioBroker$ReadDirCallback): void,

/**
 * reads the content of directory from DB for given adapter and path
 * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
 * @param path - path to directory without adapter name. E.g. If you want to read "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
 */
readDirAsync(
adapterName: string | null,
path: string,
options?: mixed): Promise<ioBroker$NonNullCallbackReturnTypeOf<ioBroker$ReadDirCallback>>,
mkDir(
adapterName: string | null,
path: string,
callback: ioBroker$ErrorCallback): void,
mkDir(
adapterName: string | null,
path: string,
options: mixed,
callback: ioBroker$ErrorCallback): void,
mkDirAsync(adapterName: string | null, path: string, options?: mixed): Promise<void>,
readFile(
adapterName: string | null,
path: string,
callback: ioBroker$ReadFileCallback): void,
readFile(
adapterName: string | null,
path: string,
options: mixed,
callback: ioBroker$ReadFileCallback): void,
readFileAsync(
adapterName: string | null,
path: string,
options?: mixed): Promise<{
file: string | Buffer,
mimeType: string
}>,
writeFile(
adapterName: string | null,
path: string,
data: Buffer | string,
callback: ioBroker$ErrorCallback): void,
writeFile(
adapterName: string | null,
path: string,
data: Buffer | string,
options: mixed,
callback: ioBroker$ErrorCallback): void,
writeFileAsync(
adapterName: string | null,
path: string,
data: Buffer | string,
options?: mixed): Promise<void>,

/**
 * Deletes a given file
 * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
 * @param path - path to directory without adapter name. E.g. If you want to delete "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
 */
delFile(
adapterName: string | null,
path: string,
callback: ioBroker$ErrorCallback): void,
delFile(
adapterName: string | null,
path: string,
options: mixed,
callback: ioBroker$ErrorCallback): void,

/**
 * Deletes a given file
 * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
 * @param path - path to directory without adapter name. E.g. If you want to delete "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
 */
delFileAsync(adapterName: string | null, path: string, options?: mixed): Promise<void>,

/**
 * Deletes a given file
 * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
 * @param path - path to directory without adapter name. E.g. If you want to delete "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
 */
unlink(
adapterName: string | null,
path: string,
callback: ioBroker$ErrorCallback): void,
unlink(
adapterName: string | null,
path: string,
options: mixed,
callback: ioBroker$ErrorCallback): void,

/**
 * Deletes a given file
 * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
 * @param path - path to directory without adapter name. E.g. If you want to delete "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
 */
unlinkAsync(adapterName: string | null, path: string, options?: mixed): Promise<void>,
rename(
adapterName: string | null,
oldName: string,
newName: string,
callback: ioBroker$ErrorCallback): void,
rename(
adapterName: string | null,
oldName: string,
newName: string,
options: mixed,
callback: ioBroker$ErrorCallback): void,
renameAsync(
adapterName: string | null,
oldName: string,
newName: string,
options?: mixed): Promise<void>,

/**
 * Changes access rights of all files in the adapter directory
 * @param adapter Name of the adapter instance, e.g. "admin.0". Defaults to the namespace of this adapter.
 * @param path Pattern to match the file path against
 * @param options Mode of the access change as a number or hexadecimal string
 * @param callback Is called when the operation has finished (successfully or not)
 */
chmodFile(
adapter: string | null,
path: string,
options: {
mode: number | string
} | Record<string, any>,
callback: ioBroker$ChownFileCallback): void,
chmodFileAsync(
adapter: string | null,
path: string,
options: {
mode: number | string
} | Record<string, any>): Promise<{
entries: ioBroker$ChownFileResult[],
id: string
}>,
formatValue(value: number | string, format: any): string,
formatValue(value: number | string, decimals: number, format: any): string,
formatDate(dateObj: string | Date | number, format: string): string,
formatDate(
dateObj: string | Date | number,
isDuration: boolean | string,
format: string): string,
on(event: "ready", handler: ioBroker$ReadyHandler): this,
on(event: "unload", handler: ioBroker$UnloadHandler): this,
on(event: "stateChange", handler: ioBroker$StateChangeHandler): this,
on(event: "objectChange", handler: ioBroker$ObjectChangeHandler): this,
on(event: "message", handler: ioBroker$MessageHandler): this,
removeListener(event: "ready", handler: ioBroker$ReadyHandler): this,
removeListener(event: "unload", handler: ioBroker$UnloadHandler): this,
removeListener(event: "stateChange", handler: ioBroker$StateChangeHandler): this,
removeListener(event: "objectChange", handler: ioBroker$ObjectChangeHandler): this,
removeListener(event: "message", handler: ioBroker$MessageHandler): this,
removeAllListeners(event?: "ready"
| "unload"
| "stateChange"
| "objectChange"
| "message"): this
} 

declare type ioBroker$ReadyHandler = () => void;

declare type ioBroker$ObjectChangeHandler = (id: string, obj: ioBroker$ioBroker$Object | null | void) => void;

declare type ioBroker$StateChangeHandler = (id: string, obj: ioBroker$State | null | void) => void;

declare type ioBroker$MessageHandler = (obj: ioBroker$Message) => void;

declare type ioBroker$UnloadHandler = (callback: ioBroker$EmptyCallback) => void;

declare type ioBroker$EmptyCallback = () => void;

declare type ioBroker$ErrorCallback = (err?: string) => void;

declare type ioBroker$GenericCallback<T> = (err: string | null, result?: T) => void;

declare type ioBroker$MessageCallback = (response?: ioBroker$Message) => void;

declare type ioBroker$SetObjectCallback = (err: string | null, obj: {
id: string
}) => void;

declare type ioBroker$GetObjectCallback = (err: string | null, obj: ioBroker$ioBroker$Object | null | void) => void;

declare type ioBroker$GetEnumCallback = (
err: string | null,
enums: Record<string, ioBroker$Enum>,
requestedEnum: string) => void;

declare type ioBroker$GetEnumsCallback = (
err: string | null,
result: {
[groupName: string]: Record<string, ioBroker$Enum>
}) => void;

declare type ioBroker$GetObjectsCallback = (err: string | null, objects: Record<string, ioBroker$ioBroker$Object>) => void;

declare type ioBroker$FindObjectCallback = (err: string | null, id?: string, name?: string) => void;

declare interface ioBroker$GetObjectsItem<T: ioBroker$BaseObject> {

/**
 * The ID of this object
 */
id: string,

/**
 * A copy of the object from the DB
 */
value: T
} 

declare type ioBroker$GetObjectsCallback3<T: ioBroker$BaseObject> = (err: string | null, result?: Array<ioBroker$GetObjectsItem<T>>) => void;

declare type ioBroker$SecondParameterOf<T: (...args: any[]) => any> = "There was Conditional Type, use $Call utility type";


/**
 * Infers the return type from a callback-style API and strips out null and undefined
 */
declare type ioBroker$NonNullCallbackReturnTypeOf<T: (...args: any[]) => any> = Exclude<ioBroker$SecondParameterOf<T>, null | void>;


/**
 * Infers the return type from a callback-style API and and leaves null and undefined in
 */
declare type ioBroker$CallbackReturnTypeOf<T: (...args: any[]) => any> = ioBroker$SecondParameterOf<T>;

declare type ioBroker$GetStateCallback = (err: string | null, state: ioBroker$State | null | void) => void;

declare type ioBroker$GetStatesCallback = (err: string | null, states: Record<string, ioBroker$State>) => void;


/**
 * Version of the callback used by States.getStates
 */
declare type ioBroker$GetStatesCallback2 = (err: string | null, states: ioBroker$State[]) => void;

declare type ioBroker$GetBinaryStateCallback = (err: string | null, state?: Buffer) => void;

declare type ioBroker$SetStateCallback = (err: string | null, id?: string) => void;

declare type ioBroker$SetStateChangedCallback = (err: string | null, id: string, notChanged: boolean) => void;

declare type ioBroker$DeleteStateCallback = (err: string | null, id?: string) => void;

declare type ioBroker$GetHistoryCallback = (
err: string | null,
result: Array<(ioBroker$State & {
id?: string
})>,
step: number,
sessionId?: string) => void;


/**
 * Contains the return values of readDir
 */
declare interface ioBroker$ReadDirResult {

/**
 * Name of the file or directory
 */
file: string,

/**
 * File system stats
 */
stats: fs.Stats,

/**
 * Whether this is a directory or a file
 */
isDir: boolean,

/**
 * Access rights
 */
acl: ioBroker$EvaluatedFileACL,

/**
 * Date of last modification
 */
modifiedAt: number,

/**
 * Date of creation
 */
createdAt: number
} 

declare type ioBroker$ReadDirCallback = (err: string | null, entries?: ioBroker$ReadDirResult[]) => void;

declare type ioBroker$ReadFileCallback = (err: string | null, file?: Buffer | string, mimeType?: string) => void;


/**
 * Contains the return values of chownFile
 */
declare interface ioBroker$ChownFileResult {

/**
 * The parent directory of the processed file or directory
 */
path: string,

/**
 * Name of the file or directory
 */
file: string,

/**
 * File system stats
 */
stats: fs.Stats,

/**
 * Whether this is a directory or a file
 */
isDir: boolean,

/**
 * Access rights
 */
acl: ioBroker$FileACL,

/**
 * Date of last modification
 */
modifiedAt: number,

/**
 * Date of creation
 */
createdAt: number
} 

declare type ioBroker$ChownFileCallback = (err: string | null, entries?: ioBroker$ChownFileResult[], id?: string) => void;


/**
 * Contains the return values of rm
 */
declare interface ioBroker$RmResult {

/**
 * The parent directory of the deleted file or directory
 */
path: string,

/**
 * The name of the deleted file or directory
 */
file: string,

/**
 * Whether the deleted object was a directory or a file
 */
isDir: boolean
} 

declare type ioBroker$RmCallback = (err: string | null, entries?: ioBroker$RmResult[]) => void;

declare type ioBroker$GetUserGroupCallback = (
objectsInstance: ioBroker$Objects,
user: ioBroker$User,
groups: ioBroker$UserGroup[],
acl: ioBroker$ObjectPermissions) => void;

declare type ioBroker$ChownObjectCallback = (err: string | null, list?: ioBroker$ioBroker$Object[]) => void;

declare type ioBroker$GetConfigKeysCallback = (err: string | null, list?: string[]) => void;

declare type ioBroker$GetObjectsCallback2 = (
err: string | null,
objects?: Array<(ioBroker$ioBroker$Object | {
err: string
})>) => void;

declare interface ioBroker$GetObjectViewItem {

/**
 * The ID of this object
 */
id: string,

/**
 * A copy of the object from the DB or some aggregation result
 */
value: ioBroker$ioBroker$Object | mixed
} 

declare type ioBroker$GetObjectViewCallback = (err: string | null, result?: {
rows: ioBroker$GetObjectViewItem[]
}) => void;

declare type ioBroker$GetObjectListItem = {

/**
 * A copy of the object
 */
value: ioBroker$ioBroker$Object,

/**
 * The same as @link{value}
 */
doc: ioBroker$ioBroker$Object
} & ioBroker$GetObjectViewItem


declare type ioBroker$GetObjectListCallback = (err: string | null, result?: {
rows: ioBroker$GetObjectListItem[]
}) => void;

declare type ioBroker$ExtendObjectCallback = (
err: string | null,
result?: {
id: string,
value: ioBroker$ioBroker$Object
},
id?: string) => void;

declare type ioBroker$GetSessionCallback = (session: ioBroker$Session) => void;
    }

    }
