declare module 'activex-diskquota' {
        declare  class DiskQuotaTypeLibrary$AccountStatusConstants {
  constructor(...args: empty): mixed;
static +dqAcctDeleted: Class<DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctDeleted> & DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctDeleted & 2;// 2
static +dqAcctInvalid: Class<DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctInvalid> & DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctInvalid & 3;// 3
static +dqAcctResolved: Class<DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctResolved> & DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctResolved & 0;// 0
static +dqAcctUnavailable: Class<DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctUnavailable> & DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctUnavailable & 1;// 1
static +dqAcctUnknown: Class<DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctUnknown> & DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctUnknown & 4;// 4
static +dqAcctUnresolved: Class<DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctUnresolved> & DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctUnresolved & 5;// 5

}

declare class DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctDeleted mixins DiskQuotaTypeLibrary$AccountStatusConstants {}
declare class DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctInvalid mixins DiskQuotaTypeLibrary$AccountStatusConstants {}
declare class DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctResolved mixins DiskQuotaTypeLibrary$AccountStatusConstants {}
declare class DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctUnavailable mixins DiskQuotaTypeLibrary$AccountStatusConstants {}
declare class DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctUnknown mixins DiskQuotaTypeLibrary$AccountStatusConstants {}
declare class DiskQuotaTypeLibrary$AccountStatusConstants__dqAcctUnresolved mixins DiskQuotaTypeLibrary$AccountStatusConstants {}


declare  class DiskQuotaTypeLibrary$QuotaStateConstants {
  constructor(...args: empty): mixed;
static +dqStateDisable: Class<DiskQuotaTypeLibrary$QuotaStateConstants__dqStateDisable> & DiskQuotaTypeLibrary$QuotaStateConstants__dqStateDisable & 0;// 0
static +dqStateEnforce: Class<DiskQuotaTypeLibrary$QuotaStateConstants__dqStateEnforce> & DiskQuotaTypeLibrary$QuotaStateConstants__dqStateEnforce & 2;// 2
static +dqStateTrack: Class<DiskQuotaTypeLibrary$QuotaStateConstants__dqStateTrack> & DiskQuotaTypeLibrary$QuotaStateConstants__dqStateTrack & 1;// 1

}

declare class DiskQuotaTypeLibrary$QuotaStateConstants__dqStateDisable mixins DiskQuotaTypeLibrary$QuotaStateConstants {}
declare class DiskQuotaTypeLibrary$QuotaStateConstants__dqStateEnforce mixins DiskQuotaTypeLibrary$QuotaStateConstants {}
declare class DiskQuotaTypeLibrary$QuotaStateConstants__dqStateTrack mixins DiskQuotaTypeLibrary$QuotaStateConstants {}


declare  class DiskQuotaTypeLibrary$UserNameResolutionConstants {
  constructor(...args: empty): mixed;
static +dqResolveAsync: Class<DiskQuotaTypeLibrary$UserNameResolutionConstants__dqResolveAsync> & DiskQuotaTypeLibrary$UserNameResolutionConstants__dqResolveAsync & 2;// 2
static +dqResolveNone: Class<DiskQuotaTypeLibrary$UserNameResolutionConstants__dqResolveNone> & DiskQuotaTypeLibrary$UserNameResolutionConstants__dqResolveNone & 0;// 0
static +dqResolveSync: Class<DiskQuotaTypeLibrary$UserNameResolutionConstants__dqResolveSync> & DiskQuotaTypeLibrary$UserNameResolutionConstants__dqResolveSync & 1;// 1

}

declare class DiskQuotaTypeLibrary$UserNameResolutionConstants__dqResolveAsync mixins DiskQuotaTypeLibrary$UserNameResolutionConstants {}
declare class DiskQuotaTypeLibrary$UserNameResolutionConstants__dqResolveNone mixins DiskQuotaTypeLibrary$UserNameResolutionConstants {}
declare class DiskQuotaTypeLibrary$UserNameResolutionConstants__dqResolveSync mixins DiskQuotaTypeLibrary$UserNameResolutionConstants {}



/**
 * Automation interface for DiskQuotaUser
 */
declare class DiskQuotaTypeLibrary$DIDiskQuotaUser  {
constructor(): this;

/**
 * Name of user's account container
 */
AccountContainerName: string;

/**
 * Status of user's account
 */
AccountStatus: DiskQuotaTypeLibrary$AccountStatusConstants;

/**
 * User's display name
 */
DisplayName: string;

/**
 * Unique ID number
 */
ID: number;

/**
 * Invalidate data cached in user object
 */
Invalidate(): void;

/**
 * User's logon account name
 */
LogonName: string;

/**
 * User's quota limit (bytes)
 */
QuotaLimit: number;

/**
 * User's quota limit (text)
 */
QuotaLimitText: string;

/**
 * User's quota warning threshold (bytes)
 */
QuotaThreshold: number;

/**
 * User's quota warning threshold (text)
 */
QuotaThresholdText: string;

/**
 * Quota charged to user (bytes)
 */
QuotaUsed: number;

/**
 * Quota charged to user (text)
 */
QuotaUsedText: string
}


/**
 * Microsoft Disk Quota
 */
declare class DiskQuotaTypeLibrary$DiskQuotaControl  {
constructor(): this;

/**
 * Add a user quota entry by Name
 */
AddUser(LogonName: string): DiskQuotaTypeLibrary$DIDiskQuotaUser;

/**
 * Default quota limit applied to new volume users (byte value)
 */
DefaultQuotaLimit: number;

/**
 * Default quota limit applied to new volume users (text string)
 */
DefaultQuotaLimitText: string;

/**
 * Default warning threshold applied to new volume users (byte value)
 */
DefaultQuotaThreshold: number;

/**
 * Default warning threshold applied to new volume users (text string)
 */
DefaultQuotaThresholdText: string;

/**
 * Delete a user quota entry
 */
DeleteUser(pUser: DiskQuotaTypeLibrary$DIDiskQuotaUser): void;

/**
 * Find a user quota entry by Name
 */
FindUser(LogonName: string): DiskQuotaTypeLibrary$DIDiskQuotaUser;

/**
 * Promote a user quota entry to the head of the name resolution queue
 */
GiveUserNameResolutionPriority(pUser: DiskQuotaTypeLibrary$DIDiskQuotaUser): void;

/**
 * Initialize the quota control object for a specified volume
 */
Initialize(path: string, bReadWrite: boolean): void;

/**
 * Invalidate the cache of user name information
 */
InvalidateSidNameCache(): void;

/**
 * Write event log entry when user exceeds quota limit
 */
LogQuotaLimit: boolean;

/**
 * Write event log entry when user exceeds quota warning threshold
 */
LogQuotaThreshold: boolean;

/**
 * Indicates if quota information is out of date
 */
QuotaFileIncomplete: boolean;

/**
 * Indicates if quota information is being rebuilt
 */
QuotaFileRebuilding: boolean;

/**
 * State of the volume's disk quota system
 */
QuotaState: DiskQuotaTypeLibrary$QuotaStateConstants;

/**
 * Terminate the user name resolution thread
 */
ShutdownNameResolution(): void;

/**
 * Translates a user logon name to a security ID
 */
TranslateLogonNameToSID(LogonName: string): string;

/**
 * Control the resolution of user Security IDs to user Names
 */
UserNameResolution: DiskQuotaTypeLibrary$UserNameResolutionConstants
}
	declare interface ActiveXObject {
on(
obj: DiskQuotaTypeLibrary$DiskQuotaTypeLibrary$DiskQuotaControl,
event: "OnUserNameChanged",
argNames: ["pUser"],
handler: (
parameter: {
+pUser: DiskQuotaTypeLibrary$DiskQuotaTypeLibrary$DIDiskQuotaUser
}) => void): void
} 
	declare interface ActiveXObjectNameMap {
"Microsoft.DiskQuota": DiskQuotaTypeLibrary$DiskQuotaTypeLibrary$DiskQuotaControl
} 
	declare interface EnumeratorConstructor {
new (
col: DiskQuotaTypeLibrary$DiskQuotaTypeLibrary$DiskQuotaControl): Enumerator<DiskQuotaTypeLibrary$DiskQuotaTypeLibrary$DIDiskQuotaUser>
} 
    }
