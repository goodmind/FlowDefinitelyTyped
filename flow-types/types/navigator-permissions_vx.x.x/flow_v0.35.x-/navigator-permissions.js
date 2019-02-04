declare module 'navigator-permissions' {
        
/**
 * Permission state values.
 */
declare type NavigatorPermissions$PermissionState = "granted" | "denied" | "prompt";


/**
 * The `PermissionStatus` interface of the Permissions API provides the state
 * of an object and an event handler for monitoring changes to said state.
 * 
 * This is an experimental technology
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus}
 */
declare type NavigatorPermissions$PermissionStatus = {

/**
 * Returns the state of a requested permission.
 */
+state: NavigatorPermissions$PermissionState,

/**
 * Returns the state of a requested permission.
 * Later versions of the specification replace this with
 * `PermissionStatus.state`.
 * @deprecated
 */
+status: NavigatorPermissions$PermissionState,

/**
 * An event called whenever `PermissionStatus.status` changes.
 */
onchange: ((event: Event) => any) | null
} & EventTarget



/**
 * Permission name options.
 */
declare type NavigatorPermissions$PermissionName = "accelerometer"
| "accessibility-events"
| "ambient-light-sensor"
| "background-sync"
| "camera"
| "clipboard-read"
| "clipboard-write"
| "geolocation"
| "gyroscope"
| "magnetometer"
| "microphone"
| "midi"
| "notifications"
| "payment-handler"
| "persistent-storage"
| "push";


/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query}
 */
declare interface NavigatorPermissions$PermissionDescriptor<N: NavigatorPermissions$PermissionName> {

/**
 * The name of the API whose permissions you want to query.
 * 
 * Please, be aware, that not all of these are supported in every browser
 * that supports the Permissions API. For example, in Firefox you can't query
 * the `'microphone'` or `'camera'` and it'll throw `TypeError`
 */
name: N
} 

declare type NavigatorPermissions$PushPermissionDescriptor = {

/**
 * Indicates whether you want to show a notification for every message
 * or be able to send silent push
 * notifications. The default is `false`. Not supported in Firefox.
 */
userVisibleOnly?: boolean
} & NavigatorPermissions$PermissionDescriptor<"push">


declare type NavigatorPermissions$MidiPermissionDescriptor = {

/**
 * Indicates whether you need and/or receive system exclusive
 * messages. The default is false.
 */
sysex?: boolean
} & NavigatorPermissions$PermissionDescriptor<"midi">


declare interface NavigatorPermissions$QueryNameDescriptorMap {
"accelerometer": NavigatorPermissions$PermissionDescriptor<"accelerometer">,
"accessibility-events": NavigatorPermissions$PermissionDescriptor<"accessibility-events">,
"ambient-light-sensor": NavigatorPermissions$PermissionDescriptor<"ambient-light-sensor">,
"background-sync": NavigatorPermissions$PermissionDescriptor<"background-sync">,
"camera": NavigatorPermissions$PermissionDescriptor<"camera">,
"clipboard-read": NavigatorPermissions$PermissionDescriptor<"clipboard-read">,
"clipboard-write": NavigatorPermissions$PermissionDescriptor<"clipboard-write">,
"geolocation": NavigatorPermissions$PermissionDescriptor<"geolocation">,
"gyroscope": NavigatorPermissions$PermissionDescriptor<"gyroscope">,
"magnetometer": NavigatorPermissions$PermissionDescriptor<"magnetometer">,
"microphone": NavigatorPermissions$PermissionDescriptor<"microphone">,
"notifications": NavigatorPermissions$PermissionDescriptor<"notifications">,
"payment-handler": NavigatorPermissions$PermissionDescriptor<"payment-handler">,
"persistent-storage": NavigatorPermissions$PermissionDescriptor<"persistent-storage">,
"midi": NavigatorPermissions$MidiPermissionDescriptor,
"push": NavigatorPermissions$PushPermissionDescriptor
} 

declare interface NavigatorPermissions$RevokeNameDescriptorMap {
"geolocation": NavigatorPermissions$PermissionDescriptor<"geolocation">,
"notifications": NavigatorPermissions$PermissionDescriptor<"notifications">,
"midi": NavigatorPermissions$MidiPermissionDescriptor,
"push": NavigatorPermissions$PushPermissionDescriptor
} 


/**
 * The `Permissions` interface of the Permissions API provides the core
 * Permission API functionality, such as methods for querying and
 * revoking permissions.
 * 
 * This is an experimental technology.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Permissions}
 */
declare interface NavigatorPermissions$Permissions {

/**
 * The `Permissions.query()` method of the `Permissions` interface returns
 * the state of a user permission on the global scope.
 * @param permissionDescriptor object that sets
options for the query operation consisting of a comma-separated list
of name-value pairs.
(Is comma-separated list really supported? It is mentioned in the docs, but does not work).
 * @returns the user permission status for a given API.
 * @throws `TypeError` Retrieving the `PermissionDescriptor` information
failed in some way, or the permission doesn't exist or is currently
unsupported (e.g. `midi`, or `push` with `userVisibleOnly`).
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query}
 */
query(
permissionDescriptor: $ElementType<NavigatorPermissions$QueryNameDescriptorMap, $Keys<NavigatorPermissions$QueryNameDescriptorMap>>): Promise<NavigatorPermissions$PermissionStatus>,

/**
 * The `Permissions.revoke()` method of the `Permissions` interface reverts a
 * currently set permission back to its default state, which is usually `prompt`.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Permissions/revoke}
 */
revoke(
permissionDescriptor: $ElementType<NavigatorPermissions$RevokeNameDescriptorMap, $Keys<NavigatorPermissions$RevokeNameDescriptorMap>>): Promise<NavigatorPermissions$PermissionStatus>
} 


/**
 * Navigator type definition with possible `permissions` API support.
 * 
 * This interface adds the `permissions` property to the navigator.
 */
declare type NavigatorPermissions$NavigatorPermissions = {

/**
 * Provides the core Permission API functionality, such as querying and revoking permissions.
 * 
 * The typing takes into account that the feature is not widely supported,
 * making code using this API more secure by forcing considering the `undefined` case.
 */
permissions?: NavigatorPermissions$Permissions
} & Navigator

    }
