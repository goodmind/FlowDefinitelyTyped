declare module "activex-diskquota" {
  declare var npm$namespace$DiskQuotaTypeLibrary: {
    AccountStatusConstants: typeof DiskQuotaTypeLibrary$AccountStatusConstants,
    QuotaStateConstants: typeof DiskQuotaTypeLibrary$QuotaStateConstants,
    UserNameResolutionConstants: typeof DiskQuotaTypeLibrary$UserNameResolutionConstants,
    DIDiskQuotaUser: typeof DiskQuotaTypeLibrary$DIDiskQuotaUser,
    DiskQuotaControl: typeof DiskQuotaTypeLibrary$DiskQuotaControl
  };

  declare var DiskQuotaTypeLibrary$AccountStatusConstants: {|
    +dqAcctDeleted: 2, // 2
    +dqAcctInvalid: 3, // 3
    +dqAcctResolved: 0, // 0
    +dqAcctUnavailable: 1, // 1
    +dqAcctUnknown: 4, // 4
    +dqAcctUnresolved: 5 // 5
  |};

  declare var DiskQuotaTypeLibrary$QuotaStateConstants: {|
    +dqStateDisable: 0, // 0
    +dqStateEnforce: 2, // 2
    +dqStateTrack: 1 // 1
  |};

  declare var DiskQuotaTypeLibrary$UserNameResolutionConstants: {|
    +dqResolveAsync: 2, // 2
    +dqResolveNone: 0, // 0
    +dqResolveSync: 1 // 1
  |};

  /**
   * Automation interface for DiskQuotaUser
   */
  declare class DiskQuotaTypeLibrary$DIDiskQuotaUser {
    constructor(): this;

    /**
     * Name of user's account container
     */
    AccountContainerName: string;

    /**
     * Status of user's account
     */
    AccountStatus: $Values<typeof DiskQuotaTypeLibrary$AccountStatusConstants>;

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
    QuotaUsedText: string;
  }

  /**
   * Microsoft Disk Quota
   */
  declare class DiskQuotaTypeLibrary$DiskQuotaControl {
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
    GiveUserNameResolutionPriority(
      pUser: DiskQuotaTypeLibrary$DIDiskQuotaUser
    ): void;

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
    QuotaState: $Values<typeof DiskQuotaTypeLibrary$QuotaStateConstants>;

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
    UserNameResolution: $Values<
      typeof DiskQuotaTypeLibrary$UserNameResolutionConstants
    >;
  }
  declare interface ActiveXObject {
    on(
      obj: DiskQuotaTypeLibrary$DiskQuotaControl,
      event: "OnUserNameChanged",
      argNames: ["pUser"],
      handler: (parameter: {
        +pUser: DiskQuotaTypeLibrary$DIDiskQuotaUser
      }) => void
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "Microsoft.DiskQuota": DiskQuotaTypeLibrary$DiskQuotaControl;
  }
  declare interface EnumeratorConstructor {
    new(
      col: DiskQuotaTypeLibrary$DiskQuotaControl
    ): Enumerator<DiskQuotaTypeLibrary$DIDiskQuotaUser>;
  }
}
