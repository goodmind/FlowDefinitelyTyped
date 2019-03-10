declare module "activex-faxcomexlib" {
  declare var npm$namespace$FAXCOMEXLib: {
    FAX_ACCESS_RIGHTS_ENUM: typeof FAXCOMEXLib$FAX_ACCESS_RIGHTS_ENUM,
    FAX_ACCESS_RIGHTS_ENUM_2: typeof FAXCOMEXLib$FAX_ACCESS_RIGHTS_ENUM_2,
    FAX_ACCOUNT_EVENTS_TYPE_ENUM: typeof FAXCOMEXLib$FAX_ACCOUNT_EVENTS_TYPE_ENUM,
    FAX_COVERPAGE_TYPE_ENUM: typeof FAXCOMEXLib$FAX_COVERPAGE_TYPE_ENUM,
    FAX_DEVICE_RECEIVE_MODE_ENUM: typeof FAXCOMEXLib$FAX_DEVICE_RECEIVE_MODE_ENUM,
    FAX_GROUP_STATUS_ENUM: typeof FAXCOMEXLib$FAX_GROUP_STATUS_ENUM,
    FAX_JOB_EXTENDED_STATUS_ENUM: typeof FAXCOMEXLib$FAX_JOB_EXTENDED_STATUS_ENUM,
    FAX_JOB_OPERATIONS_ENUM: typeof FAXCOMEXLib$FAX_JOB_OPERATIONS_ENUM,
    FAX_JOB_STATUS_ENUM: typeof FAXCOMEXLib$FAX_JOB_STATUS_ENUM,
    FAX_JOB_TYPE_ENUM: typeof FAXCOMEXLib$FAX_JOB_TYPE_ENUM,
    FAX_LOG_LEVEL_ENUM: typeof FAXCOMEXLib$FAX_LOG_LEVEL_ENUM,
    FAX_PRIORITY_TYPE_ENUM: typeof FAXCOMEXLib$FAX_PRIORITY_TYPE_ENUM,
    FAX_PROVIDER_STATUS_ENUM: typeof FAXCOMEXLib$FAX_PROVIDER_STATUS_ENUM,
    FAX_RECEIPT_TYPE_ENUM: typeof FAXCOMEXLib$FAX_RECEIPT_TYPE_ENUM,
    FAX_ROUTING_RULE_CODE_ENUM: typeof FAXCOMEXLib$FAX_ROUTING_RULE_CODE_ENUM,
    FAX_RULE_STATUS_ENUM: typeof FAXCOMEXLib$FAX_RULE_STATUS_ENUM,
    FAX_SCHEDULE_TYPE_ENUM: typeof FAXCOMEXLib$FAX_SCHEDULE_TYPE_ENUM,
    FAX_SERVER_APIVERSION_ENUM: typeof FAXCOMEXLib$FAX_SERVER_APIVERSION_ENUM,
    FAX_SERVER_EVENTS_TYPE_ENUM: typeof FAXCOMEXLib$FAX_SERVER_EVENTS_TYPE_ENUM,
    FAX_SMTP_AUTHENTICATION_TYPE_ENUM: typeof FAXCOMEXLib$FAX_SMTP_AUTHENTICATION_TYPE_ENUM,
    FaxConstants: typeof FAXCOMEXLib$FaxConstants,
    FaxAccount: typeof FAXCOMEXLib$FaxAccount,
    FaxAccountFolders: typeof FAXCOMEXLib$FaxAccountFolders,
    FaxAccountIncomingArchive: typeof FAXCOMEXLib$FaxAccountIncomingArchive,
    FaxAccountIncomingQueue: typeof FAXCOMEXLib$FaxAccountIncomingQueue,
    FaxAccountOutgoingArchive: typeof FAXCOMEXLib$FaxAccountOutgoingArchive,
    FaxAccountOutgoingQueue: typeof FAXCOMEXLib$FaxAccountOutgoingQueue,
    FaxAccountSet: typeof FAXCOMEXLib$FaxAccountSet,
    FaxActivity: typeof FAXCOMEXLib$FaxActivity,
    FaxActivityLogging: typeof FAXCOMEXLib$FaxActivityLogging,
    FaxConfiguration: typeof FAXCOMEXLib$FaxConfiguration,
    FaxDevice: typeof FAXCOMEXLib$FaxDevice,
    FaxDeviceProvider: typeof FAXCOMEXLib$FaxDeviceProvider,
    FaxDocument: typeof FAXCOMEXLib$FaxDocument,
    FaxEventLogging: typeof FAXCOMEXLib$FaxEventLogging,
    FaxFolders: typeof FAXCOMEXLib$FaxFolders,
    FaxInboundRouting: typeof FAXCOMEXLib$FaxInboundRouting,
    FaxInboundRoutingExtension: typeof FAXCOMEXLib$FaxInboundRoutingExtension,
    FaxInboundRoutingMethod: typeof FAXCOMEXLib$FaxInboundRoutingMethod,
    FaxIncomingArchive: typeof FAXCOMEXLib$FaxIncomingArchive,
    FaxIncomingJob: typeof FAXCOMEXLib$FaxIncomingJob,
    FaxIncomingMessage: typeof FAXCOMEXLib$FaxIncomingMessage,
    FaxIncomingMessageIterator: typeof FAXCOMEXLib$FaxIncomingMessageIterator,
    FaxIncomingQueue: typeof FAXCOMEXLib$FaxIncomingQueue,
    FaxJobStatus: typeof FAXCOMEXLib$FaxJobStatus,
    FaxLoggingOptions: typeof FAXCOMEXLib$FaxLoggingOptions,
    FaxOutboundRouting: typeof FAXCOMEXLib$FaxOutboundRouting,
    FaxOutboundRoutingGroup: typeof FAXCOMEXLib$FaxOutboundRoutingGroup,
    FaxOutboundRoutingRule: typeof FAXCOMEXLib$FaxOutboundRoutingRule,
    FaxOutgoingArchive: typeof FAXCOMEXLib$FaxOutgoingArchive,
    FaxOutgoingJob: typeof FAXCOMEXLib$FaxOutgoingJob,
    FaxOutgoingMessage: typeof FAXCOMEXLib$FaxOutgoingMessage,
    FaxOutgoingMessageIterator: typeof FAXCOMEXLib$FaxOutgoingMessageIterator,
    FaxOutgoingQueue: typeof FAXCOMEXLib$FaxOutgoingQueue,
    FaxReceiptOptions: typeof FAXCOMEXLib$FaxReceiptOptions,
    FaxRecipient: typeof FAXCOMEXLib$FaxRecipient,
    FaxSecurity: typeof FAXCOMEXLib$FaxSecurity,
    FaxSecurity2: typeof FAXCOMEXLib$FaxSecurity2,
    FaxSender: typeof FAXCOMEXLib$FaxSender,
    FaxServer: typeof FAXCOMEXLib$FaxServer,
    IFaxIncomingMessage: typeof FAXCOMEXLib$IFaxIncomingMessage,
    IFaxOutgoingJob: typeof FAXCOMEXLib$IFaxOutgoingJob,
    IFaxOutgoingMessage: typeof FAXCOMEXLib$IFaxOutgoingMessage,
    IFaxServer: typeof FAXCOMEXLib$IFaxServer
  };

  declare var FAXCOMEXLib$FAX_ACCESS_RIGHTS_ENUM: {|
    +farMANAGE_CONFIG: 64, // 64
    +farMANAGE_IN_ARCHIVE: 256, // 256
    +farMANAGE_JOBS: 16, // 16
    +farMANAGE_OUT_ARCHIVE: 1024, // 1024
    +farQUERY_CONFIG: 32, // 32
    +farQUERY_IN_ARCHIVE: 128, // 128
    +farQUERY_JOBS: 8, // 8
    +farQUERY_OUT_ARCHIVE: 512, // 512
    +farSUBMIT_HIGH: 4, // 4
    +farSUBMIT_LOW: 1, // 1
    +farSUBMIT_NORMAL: 2 // 2
  |};

  declare var FAXCOMEXLib$FAX_ACCESS_RIGHTS_ENUM_2: {|
    +far2MANAGE_ARCHIVES: 256, // 256
    +far2MANAGE_CONFIG: 64, // 64
    +far2MANAGE_OUT_JOBS: 16, // 16
    +far2MANAGE_RECEIVE_FOLDER: 512, // 512
    +far2QUERY_ARCHIVES: 128, // 128
    +far2QUERY_CONFIG: 32, // 32
    +far2QUERY_OUT_JOBS: 8, // 8
    +far2SUBMIT_HIGH: 4, // 4
    +far2SUBMIT_LOW: 1, // 1
    +far2SUBMIT_NORMAL: 2 // 2
  |};

  declare var FAXCOMEXLib$FAX_ACCOUNT_EVENTS_TYPE_ENUM: {|
    +faetFXSSVC_ENDED: 16, // 16
    +faetIN_ARCHIVE: 4, // 4
    +faetIN_QUEUE: 1, // 1
    +faetNONE: 0, // 0
    +faetOUT_ARCHIVE: 8, // 8
    +faetOUT_QUEUE: 2 // 2
  |};

  declare var FAXCOMEXLib$FAX_COVERPAGE_TYPE_ENUM: {|
    +fcptLOCAL: 1, // 1
    +fcptNONE: 0, // 0
    +fcptSERVER: 2 // 2
  |};

  declare var FAXCOMEXLib$FAX_DEVICE_RECEIVE_MODE_ENUM: {|
    +fdrmAUTO_ANSWER: 1, // 1
    +fdrmMANUAL_ANSWER: 2, // 2
    +fdrmNO_ANSWER: 0 // 0
  |};

  declare var FAXCOMEXLib$FAX_GROUP_STATUS_ENUM: {|
    +fgsALL_DEV_NOT_VALID: 2, // 2
    +fgsALL_DEV_VALID: 0, // 0
    +fgsEMPTY: 1, // 1
    +fgsSOME_DEV_NOT_VALID: 3 // 3
  |};

  declare var FAXCOMEXLib$FAX_JOB_EXTENDED_STATUS_ENUM: {|
    +fjesANSWERED: 5, // 5
    +fjesBAD_ADDRESS: 10, // 10
    +fjesBUSY: 8, // 8
    +fjesCALL_ABORTED: 19, // 19
    +fjesCALL_BLACKLISTED: 14, // 14
    +fjesCALL_COMPLETED: 18, // 18
    +fjesCALL_DELAYED: 13, // 13
    +fjesDIALING: 3, // 3
    +fjesDISCONNECTED: 1, // 1
    +fjesFATAL_ERROR: 12, // 12
    +fjesHANDLED: 17, // 17
    +fjesINITIALIZING: 2, // 2
    +fjesLINE_UNAVAILABLE: 7, // 7
    +fjesNO_ANSWER: 9, // 9
    +fjesNO_DIAL_TONE: 11, // 11
    +fjesNONE: 0, // 0
    +fjesNOT_FAX_CALL: 15, // 15
    +fjesPARTIALLY_RECEIVED: 16, // 16
    +fjesPROPRIETARY: 16777216, // 16777216
    +fjesRECEIVING: 6, // 6
    +fjesTRANSMITTING: 4 // 4
  |};

  declare var FAXCOMEXLib$FAX_JOB_OPERATIONS_ENUM: {|
    +fjoDELETE: 16, // 16
    +fjoPAUSE: 2, // 2
    +fjoRECIPIENT_INFO: 32, // 32
    +fjoRESTART: 8, // 8
    +fjoRESUME: 4, // 4
    +fjoSENDER_INFO: 64, // 64
    +fjoVIEW: 1 // 1
  |};

  declare var FAXCOMEXLib$FAX_JOB_STATUS_ENUM: {|
    +fjsCANCELED: 512, // 512
    +fjsCANCELING: 1024, // 1024
    +fjsCOMPLETED: 256, // 256
    +fjsFAILED: 8, // 8
    +fjsINPROGRESS: 2, // 2
    +fjsNOLINE: 32, // 32
    +fjsPAUSED: 16, // 16
    +fjsPENDING: 1, // 1
    +fjsRETRIES_EXCEEDED: 128, // 128
    +fjsRETRYING: 64, // 64
    +fjsROUTING: 2048 // 2048
  |};

  declare var FAXCOMEXLib$FAX_JOB_TYPE_ENUM: {|
    +fjtRECEIVE: 1, // 1
    +fjtROUTING: 2, // 2
    +fjtSEND: 0 // 0
  |};

  declare var FAXCOMEXLib$FAX_LOG_LEVEL_ENUM: {|
    +fllMAX: 3, // 3
    +fllMED: 2, // 2
    +fllMIN: 1, // 1
    +fllNONE: 0 // 0
  |};

  declare var FAXCOMEXLib$FAX_PRIORITY_TYPE_ENUM: {|
    +fptHIGH: 2, // 2
    +fptLOW: 0, // 0
    +fptNORMAL: 1 // 1
  |};

  declare var FAXCOMEXLib$FAX_PROVIDER_STATUS_ENUM: {|
    +fpsBAD_GUID: 2, // 2
    +fpsBAD_VERSION: 3, // 3
    +fpsCANT_INIT: 6, // 6
    +fpsCANT_LINK: 5, // 5
    +fpsCANT_LOAD: 4, // 4
    +fpsSERVER_ERROR: 1, // 1
    +fpsSUCCESS: 0 // 0
  |};

  declare var FAXCOMEXLib$FAX_RECEIPT_TYPE_ENUM: {|
    +frtMAIL: 1, // 1
    +frtMSGBOX: 4, // 4
    +frtNONE: 0 // 0
  |};

  declare var FAXCOMEXLib$FAX_ROUTING_RULE_CODE_ENUM: {|
    +frrcANY_CODE: 0 // 0
  |};

  declare var FAXCOMEXLib$FAX_RULE_STATUS_ENUM: {|
    +frsALL_GROUP_DEV_NOT_VALID: 2, // 2
    +frsBAD_DEVICE: 4, // 4
    +frsEMPTY_GROUP: 1, // 1
    +frsSOME_GROUP_DEV_NOT_VALID: 3, // 3
    +frsVALID: 0 // 0
  |};

  declare var FAXCOMEXLib$FAX_SCHEDULE_TYPE_ENUM: {|
    +fstDISCOUNT_PERIOD: 2, // 2
    +fstNOW: 0, // 0
    +fstSPECIFIC_TIME: 1 // 1
  |};

  declare var FAXCOMEXLib$FAX_SERVER_APIVERSION_ENUM: {|
    +fsAPI_VERSION_0: 0, // 0
    +fsAPI_VERSION_1: 65536, // 65536
    +fsAPI_VERSION_2: 131072, // 131072
    +fsAPI_VERSION_3: 196608 // 196608
  |};

  declare var FAXCOMEXLib$FAX_SERVER_EVENTS_TYPE_ENUM: {|
    +fsetACTIVITY: 8, // 8
    +fsetCONFIG: 4, // 4
    +fsetDEVICE_STATUS: 256, // 256
    +fsetFXSSVC_ENDED: 128, // 128
    +fsetIN_ARCHIVE: 32, // 32
    +fsetIN_QUEUE: 1, // 1
    +fsetINCOMING_CALL: 512, // 512
    +fsetNONE: 0, // 0
    +fsetOUT_ARCHIVE: 64, // 64
    +fsetOUT_QUEUE: 2, // 2
    +fsetQUEUE_STATE: 16 // 16
  |};

  declare var FAXCOMEXLib$FAX_SMTP_AUTHENTICATION_TYPE_ENUM: {|
    +fsatANONYMOUS: 0, // 0
    +fsatBASIC: 1, // 1
    +fsatNTLM: 2 // 2
  |};

  declare var FAXCOMEXLib$FaxConstants: {|
    +bstrGROUPNAME_ALLDEVICES: "<All Devices>", // "<All Devices>"
    +lDEFAULT_PREFETCH_SIZE: 100, // 100
    +wcharREASSIGN_RECIPIENTS_DELIMITER: 59 // 59
  |};

  /**
   * FaxAccount Class
   */
  declare class FAXCOMEXLib$FaxAccount {
    constructor(): this;

    /**
     * Name of the fax account
     */
    AccountName: string;

    /**
     * Folders belonging to the account
     */
    Folders: FAXCOMEXLib$FaxAccountFolders;

    /**
     * Set bit-wise combination of events the fax account listens to
     */
    ListenToAccountEvents(
      EventTypes: $Values<typeof FAXCOMEXLib$FAX_ACCOUNT_EVENTS_TYPE_ENUM>
    ): void;

    /**
     * Events the fax account is listening to
     */
    RegisteredEvents: $Values<typeof FAXCOMEXLib$FAX_ACCOUNT_EVENTS_TYPE_ENUM>;
  }

  /**
   * FaxAccountFolders Class
   */
  declare class FAXCOMEXLib$FaxAccountFolders {
    constructor(): this;

    /**
     * Incoming archive
     */
    IncomingArchive: FAXCOMEXLib$FaxAccountIncomingArchive;

    /**
     * Incoming queue
     */
    IncomingQueue: FAXCOMEXLib$FaxAccountIncomingQueue;

    /**
     * Outgoing archive
     */
    OutgoingArchive: FAXCOMEXLib$FaxAccountOutgoingArchive;

    /**
     * Outgoing queue
     */
    OutgoingQueue: FAXCOMEXLib$FaxAccountOutgoingQueue;
  }

  /**
   * FaxAccountIncomingArchive Class
   */
  declare class FAXCOMEXLib$FaxAccountIncomingArchive {
    constructor(): this;

    /**
     * Get an archived message by its ID
     */
    GetMessage(bstrMessageId: string): FAXCOMEXLib$IFaxIncomingMessage;

    /**
     * Iterator on the archived messages
     * @param number [lPrefetchSize=100]
     */
    GetMessages(lPrefetchSize?: number): FAXCOMEXLib$FaxIncomingMessageIterator;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * The high 32-bit value of the archive size
     */
    SizeHigh: number;

    /**
     * The low 32-bit value of the archive size
     */
    SizeLow: number;
  }

  /**
   * FaxAccountIncomingQueue Class
   */
  declare class FAXCOMEXLib$FaxAccountIncomingQueue {
    constructor(): this;

    /**
     * Get incoming job by ID
     */
    GetJob(bstrJobId: string): FAXCOMEXLib$FaxIncomingJob;

    /**
     * Collection of incoming jobs
     */
    GetJobs(): FAXCOMEXLib$FaxIncomingJobs;
  }

  /**
   * FaxAccountOutgoingArchive Class
   */
  declare class FAXCOMEXLib$FaxAccountOutgoingArchive {
    constructor(): this;

    /**
     * Get an archived message by its ID
     */
    GetMessage(bstrMessageId: string): FAXCOMEXLib$IFaxOutgoingMessage;

    /**
     * Iterator on the archived messages
     * @param number [lPrefetchSize=100]
     */
    GetMessages(lPrefetchSize?: number): FAXCOMEXLib$FaxOutgoingMessageIterator;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * The high 32-bit value of the archive size
     */
    SizeHigh: number;

    /**
     * The low 32-bit value of the archive size
     */
    SizeLow: number;
  }

  /**
   * FaxAccountOutgoingQueue Class
   */
  declare class FAXCOMEXLib$FaxAccountOutgoingQueue {
    constructor(): this;

    /**
     * Get outgoing job by ID
     */
    GetJob(bstrJobId: string): FAXCOMEXLib$IFaxOutgoingJob;

    /**
     * Collection of outgoing jobs
     */
    GetJobs(): FAXCOMEXLib$FaxOutgoingJobs;
  }

  /**
   * FaxAccounts Class
   */
  declare interface FAXCOMEXLib$FaxAccounts {
    +Count: number;
    Item(vIndex: any): FAXCOMEXLib$FaxAccount;
    (vIndex: any): FAXCOMEXLib$FaxAccount;
  }

  /**
   * FaxAccountSet Class
   */
  declare class FAXCOMEXLib$FaxAccountSet {
    constructor(): this;

    /**
     * Adds a fax account
     */
    AddAccount(bstrAccountName: string): FAXCOMEXLib$FaxAccount;

    /**
     * Get fax account by name
     */
    GetAccount(bstrAccountName: string): FAXCOMEXLib$FaxAccount;

    /**
     * Collection of fax accounts
     */
    GetAccounts(): FAXCOMEXLib$FaxAccounts;

    /**
     * Removes a fax account by name
     */
    RemoveAccount(bstrAccountName: string): void;
  }

  /**
   * FaxActivity Class
   */
  declare class FAXCOMEXLib$FaxActivity {
    constructor(): this;

    /**
     * Number of incoming messages
     */
    IncomingMessages: number;

    /**
     * Number of outgoing messages
     */
    OutgoingMessages: number;

    /**
     * Number of queued messages
     */
    QueuedMessages: number;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Number of routed incoming messages
     */
    RoutingMessages: number;
  }

  /**
   * FaxActivityLogging Class
   */
  declare class FAXCOMEXLib$FaxActivityLogging {
    constructor(): this;

    /**
     * Activity log database files path
     */
    DatabasePath: string;

    /**
     * Does the server log incoming fax activity
     */
    LogIncoming: boolean;

    /**
     * Does the server log outgoing fax activity
     */
    LogOutgoing: boolean;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;
  }

  /**
   * FaxConfiguration Class
   */
  declare class FAXCOMEXLib$FaxConfiguration {
    constructor(): this;

    /**
     * Are personal cover pages allowed
     */
    AllowPersonalCoverPages: boolean;

    /**
     * Indicates how long the fax message is kept on the server
     */
    ArchiveAgeLimit: number;

    /**
     * Location of the archive on the server
     */
    ArchiveLocation: string;

    /**
     * The high 32-bit value of the archive size
     */
    ArchiveSizeHigh: number;

    /**
     * The low 32-bit value of the archive size
     */
    ArchiveSizeLow: number;

    /**
     * Does the server auto-create fax account on connect
     */
    AutoCreateAccountOnConnect: boolean;

    /**
     * Does the server generate a brand
     */
    Branding: boolean;

    /**
     * End of the discount rate period
     */
    DiscountRateEnd: VarDate;

    /**
     * Start of the discount rate period
     */
    DiscountRateStart: VarDate;

    /**
     * High quota water mark
     */
    HighQuotaWaterMark: number;

    /**
     * Are incoming faxes viewable by everyone
     */
    IncomingFaxesArePublic: boolean;

    /**
     * Is queue blocked for incoming faxes
     */
    IncomingQueueBlocked: boolean;

    /**
     * Low quota water mark
     */
    LowQuotaWaterMark: number;

    /**
     * How long the failed fax job is kept on the server
     */
    OutgoingQueueAgeLimit: number;

    /**
     * Is queue blocked for outgoing faxes
     */
    OutgoingQueueBlocked: boolean;

    /**
     * Is queue paused for outgoing faxes
     */
    OutgoingQueuePaused: boolean;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Number of retries
     */
    Retries: number;

    /**
     * Retry delay
     */
    RetryDelay: number;

    /**
     * Save the object
     */
    Save(): void;

    /**
     * Is size quota warning on
     */
    SizeQuotaWarning: boolean;

    /**
     * Whether faxes should be archived
     */
    UseArchive: boolean;

    /**
     * Is device Transmitting Station ID used
     */
    UseDeviceTSID: boolean;
  }

  /**
   * FaxDevice Class
   */
  declare class FAXCOMEXLib$FaxDevice {
    constructor(): this;

    /**
     * Answer the call
     */
    AnswerCall(): void;

    /**
     * Device's Called Station ID
     */
    CSID: string;

    /**
     * Description of the device
     */
    Description: string;

    /**
     * Device name
     */
    DeviceName: string;

    /**
     * Get the device level extention property
     */
    GetExtensionProperty(bstrGUID: string): SafeArray;

    /**
     * Unique device ID
     */
    Id: number;

    /**
     * Is the device is turned off
     */
    PoweredOff: boolean;

    /**
     * Device provider
     */
    ProviderUniqueName: string;

    /**
     * The receive mode of the device
     */
    ReceiveMode: $Values<typeof FAXCOMEXLib$FAX_DEVICE_RECEIVE_MODE_ENUM>;

    /**
     * Is the device receiving now
     */
    ReceivingNow: boolean;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Is the device ringing now
     */
    RingingNow: boolean;

    /**
     * Number of rings before the device answers
     */
    RingsBeforeAnswer: number;

    /**
     * Save the object
     */
    Save(): void;

    /**
     * Is the device is enabled to send
     */
    SendEnabled: boolean;

    /**
     * Is the device sending now
     */
    SendingNow: boolean;

    /**
     * Set the device level extention property
     */
    SetExtensionProperty(bstrGUID: string, vProperty: SafeArray): void;

    /**
     * Device's Transmitting Station ID
     */
    TSID: string;

    /**
     * Array of routing methods GUIDs
     */
    UsedRoutingMethods: SafeArray<string>;

    /**
     * Adds or removes routing method
     */
    UseRoutingMethod(bstrMethodGUID: string, bUse: boolean): void;
  }

  /**
   * FaxDeviceIds Class
   */
  declare interface FAXCOMEXLib$FaxDeviceIds {
    /**
     * Add a device
     */
    Add(lDeviceId: number): void;
    +Count: number;
    Item(lIndex: number): number;

    /**
     * Remove a device
     */
    Remove(lIndex: number): void;

    /**
     * Set order of the device
     */
    SetOrder(lDeviceId: number, lNewOrder: number): void;
    (lIndex: number): number;
  }

  /**
   * FaxDeviceProvider Class
   */
  declare class FAXCOMEXLib$FaxDeviceProvider {
    constructor(): this;

    /**
     * Is device provider built in debug environment
     */
    Debug: boolean;

    /**
     * Array of device IDs exposed by the provider
     */
    DeviceIds: SafeArray<number>;

    /**
     * Provider's friendly name
     */
    FriendlyName: string;

    /**
     * Full path and file name of the provider DLL
     */
    ImageName: string;

    /**
     * Last error code at load or initialization
     */
    InitErrorCode: number;

    /**
     * The major part of the device provider's build number
     */
    MajorBuild: number;

    /**
     * The major part of the device provider's version number
     */
    MajorVersion: number;

    /**
     * The minor part of the device provider's build number
     */
    MinorBuild: number;

    /**
     * The minor part of the device provider's version number
     */
    MinorVersion: number;

    /**
     * Status of the device provider
     */
    Status: $Values<typeof FAXCOMEXLib$FAX_PROVIDER_STATUS_ENUM>;

    /**
     * TSP name used by the provider
     */
    TapiProviderName: string;

    /**
     * Unique name of the provider
     */
    UniqueName: string;
  }

  /**
   * FaxDeviceProviders Class
   */
  declare interface FAXCOMEXLib$FaxDeviceProviders {
    +Count: number;
    Item(vIndex: any): FAXCOMEXLib$FaxDeviceProvider;
    (vIndex: any): FAXCOMEXLib$FaxDeviceProvider;
  }

  /**
   * FaxDevices Class
   */
  declare interface FAXCOMEXLib$FaxDevices {
    +Count: number;
    Item(vIndex: any): FAXCOMEXLib$FaxDevice;

    /**
     * Get device by its ID
     */
    ItemById(lId: number): FAXCOMEXLib$FaxDevice;
    (vIndex: any): FAXCOMEXLib$FaxDevice;
  }

  /**
   * FaxDocument Class
   */
  declare class FAXCOMEXLib$FaxDocument {
    constructor(): this;

    /**
     * Whether to attach a fax to the receipt
     */
    AttachFaxToReceipt: boolean;

    /**
     * Full paths to the fax document body files
     */
    Bodies: any;

    /**
     * Full path to the fax document body file
     */
    Body: string;

    /**
     * Call handle
     */
    CallHandle: number;

    /**
     * Submit the fax document on the already connected server
     */
    ConnectedSubmit(pFaxServer: FAXCOMEXLib$IFaxServer): SafeArray<string>;

    /**
     * Submit the fax document on the already connected server
     */
    ConnectedSubmit2(
      pFaxServer: FAXCOMEXLib$IFaxServer,
      pvFaxOutgoingJobIDs: SafeArray<string>
    ): number;

    /**
     * Cover page file path
     */
    CoverPage: string;

    /**
     * Is server, local, or no cover page used
     */
    CoverPageType: $Values<typeof FAXCOMEXLib$FAX_COVERPAGE_TYPE_ENUM>;

    /**
     * The document name
     */
    DocumentName: string;

    /**
     * Whether to group the broadcast receipts
     */
    GroupBroadcastReceipts: boolean;

    /**
     * Contents of cover page note field
     */
    Note: string;

    /**
     * Priority of the fax
     */
    Priority: $Values<typeof FAXCOMEXLib$FAX_PRIORITY_TYPE_ENUM>;

    /**
     * Address of the receipt
     */
    ReceiptAddress: string;

    /**
     * Type of the receipt
     */
    ReceiptType: $Values<typeof FAXCOMEXLib$FAX_RECEIPT_TYPE_ENUM>;

    /**
     * Collection of recipients
     */
    Recipients: FAXCOMEXLib$FaxRecipients;

    /**
     * Time to send the fax
     */
    ScheduleTime: VarDate;

    /**
     * When to send the fax
     */
    ScheduleType: $Values<typeof FAXCOMEXLib$FAX_SCHEDULE_TYPE_ENUM>;

    /**
     * Sender information object
     */
    Sender: FAXCOMEXLib$FaxSender;

    /**
     * Contents of cover page subject field
     */
    Subject: string;

    /**
     * Submission Id for the Fax document
     */
    SubmissionId: string;

    /**
     * Connect to server, submit the fax document, disconnect
     */
    Submit(bstrFaxServerName: string): SafeArray<number>;

    /**
     * Connect to server, submit the fax document, disconnect
     */
    Submit2(bstrFaxServerName: string, pvFaxOutgoingJobIDs: any): number;

    /**
     * Tapi connection
     */
    TapiConnection: any;
  }

  /**
   * FaxEventLogging Class
   */
  declare class FAXCOMEXLib$FaxEventLogging {
    constructor(): this;

    /**
     * Detail level of event logs for general (other) events
     */
    GeneralEventsLevel: $Values<typeof FAXCOMEXLib$FAX_LOG_LEVEL_ENUM>;

    /**
     * Detail level of event logs for inbound fax events
     */
    InboundEventsLevel: $Values<typeof FAXCOMEXLib$FAX_LOG_LEVEL_ENUM>;

    /**
     * Detail level of event logs for initialization events
     */
    InitEventsLevel: $Values<typeof FAXCOMEXLib$FAX_LOG_LEVEL_ENUM>;

    /**
     * Detail level of event logs for outbound fax events
     */
    OutboundEventsLevel: $Values<typeof FAXCOMEXLib$FAX_LOG_LEVEL_ENUM>;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;
  }

  /**
   * FaxFolders Class
   */
  declare class FAXCOMEXLib$FaxFolders {
    constructor(): this;

    /**
     * Incoming archive
     */
    IncomingArchive: FAXCOMEXLib$FaxIncomingArchive;

    /**
     * Incoming queue
     */
    IncomingQueue: FAXCOMEXLib$FaxIncomingQueue;

    /**
     * Outgoing archive
     */
    OutgoingArchive: FAXCOMEXLib$FaxOutgoingArchive;

    /**
     * Outgoing queue
     */
    OutgoingQueue: FAXCOMEXLib$FaxOutgoingQueue;
  }

  /**
   * FaxInboundRouting Class
   */
  declare class FAXCOMEXLib$FaxInboundRouting {
    constructor(): this;

    /**
     * Registered inbound routing extensions collection
     */
    GetExtensions(): FAXCOMEXLib$FaxInboundRoutingExtensions;

    /**
     * Ordered collection of all the registered methods
     */
    GetMethods(): FAXCOMEXLib$FaxInboundRoutingMethods;
  }

  /**
   * FaxInboundRoutingExtension Class
   */
  declare class FAXCOMEXLib$FaxInboundRoutingExtension {
    constructor(): this;

    /**
     * Is extension built in debug environment
     */
    Debug: boolean;

    /**
     * Extension's friendly name
     */
    FriendlyName: string;

    /**
     * Full path and file name of the extension DLL
     */
    ImageName: string;

    /**
     * Last error code at load or initialization
     */
    InitErrorCode: number;

    /**
     * The major part of extension's build number
     */
    MajorBuild: number;

    /**
     * The major part of extension's version number
     */
    MajorVersion: number;

    /**
     * Array of methods exposed by extension
     */
    Methods: SafeArray<string>;

    /**
     * The minor part of extension's build number
     */
    MinorBuild: number;

    /**
     * The minor part of extension's version number
     */
    MinorVersion: number;

    /**
     * Load and initialization status of the extension
     */
    Status: $Values<typeof FAXCOMEXLib$FAX_PROVIDER_STATUS_ENUM>;

    /**
     * Extension's unique name
     */
    UniqueName: string;
  }

  /**
   * FaxInboundRoutingExtensions Class
   */
  declare interface FAXCOMEXLib$FaxInboundRoutingExtensions {
    +Count: number;
    Item(vIndex: any): FAXCOMEXLib$FaxInboundRoutingExtension;
    (vIndex: any): FAXCOMEXLib$FaxInboundRoutingExtension;
  }

  /**
   * FaxInboundRoutingMethod Class
   */
  declare class FAXCOMEXLib$FaxInboundRoutingMethod {
    constructor(): this;

    /**
     * Friendly name of the extension exposing this method
     */
    ExtensionFriendlyName: string;

    /**
     * Image name of the extension exposing this method
     */
    ExtensionImageName: string;

    /**
     * Internal function name
     */
    FunctionName: string;

    /**
     * GUID of the method
     */
    GUID: string;

    /**
     * The name of the method
     */
    Name: string;

    /**
     * Priority of the method
     */
    Priority: number;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;
  }

  /**
   * FaxInboundRoutingMethods Class
   */
  declare interface FAXCOMEXLib$FaxInboundRoutingMethods {
    +Count: number;
    Item(vIndex: any): FAXCOMEXLib$FaxInboundRoutingMethod;
    (vIndex: any): FAXCOMEXLib$FaxInboundRoutingMethod;
  }

  /**
   * FaxIncomingArchive Class
   */
  declare class FAXCOMEXLib$FaxIncomingArchive {
    constructor(): this;

    /**
     * How long the fax message is kept on the Server
     */
    AgeLimit: number;

    /**
     * Location of the archive folder on the server
     */
    ArchiveFolder: string;

    /**
     * Get archived message by its ID
     */
    GetMessage(bstrMessageId: string): FAXCOMEXLib$IFaxIncomingMessage;

    /**
     * Iterator on the archived messages
     * @param number [lPrefetchSize=100]
     */
    GetMessages(lPrefetchSize?: number): FAXCOMEXLib$FaxIncomingMessageIterator;

    /**
     * High quota water mark
     */
    HighQuotaWaterMark: number;

    /**
     * Low quota water mark
     */
    LowQuotaWaterMark: number;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;

    /**
     * The high 32-bit value of the archive size
     */
    SizeHigh: number;

    /**
     * The low 32-bit value of the archive size
     */
    SizeLow: number;

    /**
     * Is size quota warning on
     */
    SizeQuotaWarning: boolean;

    /**
     * Whether received faxes should be archived
     */
    UseArchive: boolean;
  }

  /**
   * FaxIncomingJob Class
   */
  declare class FAXCOMEXLib$FaxIncomingJob {
    constructor(): this;

    /**
     * Available operations, a bit-wise combination of FAX_JOB_OPERATIONS values
     */
    AvailableOperations: $Values<typeof FAXCOMEXLib$FAX_JOB_OPERATIONS_ENUM>;

    /**
     * Caller ID
     */
    CallerId: string;

    /**
     * Cancel the incoming job
     */
    Cancel(): void;

    /**
     * Copy TIFF image to the local file
     */
    CopyTiff(bstrTiffPath: string): void;

    /**
     * Called Station ID
     */
    CSID: string;

    /**
     * Page currently in transmision
     */
    CurrentPage: number;

    /**
     * Device ID that transmits the job
     */
    DeviceId: number;

    /**
     * Extended status description
     */
    ExtendedStatus: string;

    /**
     * Code of the job's extended status
     */
    ExtendedStatusCode: $Values<
      typeof FAXCOMEXLib$FAX_JOB_EXTENDED_STATUS_ENUM
    >;

    /**
     * Unique message ID
     */
    Id: string;

    /**
     * Job type
     */
    JobType: $Values<typeof FAXCOMEXLib$FAX_JOB_TYPE_ENUM>;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Number of failed transmission retries
     */
    Retries: number;

    /**
     * Routing information
     */
    RoutingInformation: string;

    /**
     * Size in bytes of the message's TIFF file
     */
    Size: number;

    /**
     * Current queue status of the job, a bit-wise combination of FAX_JOB_STATUS values
     */
    Status: $Values<typeof FAXCOMEXLib$FAX_JOB_STATUS_ENUM>;

    /**
     * Transmission end time
     */
    TransmissionEnd: VarDate;

    /**
     * Transmission start time
     */
    TransmissionStart: VarDate;

    /**
     * Transmitting Station ID
     */
    TSID: string;
  }

  /**
   * FaxIncomingJobs Class
   */
  declare interface FAXCOMEXLib$FaxIncomingJobs {
    +Count: number;
    Item(vIndex: any): FAXCOMEXLib$FaxIncomingJob;
    (vIndex: any): FAXCOMEXLib$FaxIncomingJob;
  }

  /**
   * FaxIncomingMessage Class
   */
  declare class FAXCOMEXLib$FaxIncomingMessage
    mixins FAXCOMEXLib$IFaxIncomingMessage {
    constructor(): this;

    /**
     * Has Cover page
     */
    HasCoverPage: boolean;

    /**
     * Read flag on the message
     */
    Read: boolean;

    /**
     * Reassigns the message
     */
    ReAssign(): void;

    /**
     * Set of recipient names
     */
    Recipients: string;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;

    /**
     * Sender's fax number
     */
    SenderFaxNumber: string;

    /**
     * Sender's name
     */
    SenderName: string;

    /**
     * Contents of cover page subject field
     */
    Subject: string;

    /**
     * Is message reassigned?
     */
    WasReAssigned: boolean;
  }

  /**
   * FaxIncomingMessageIterator Class
   */
  declare class FAXCOMEXLib$FaxIncomingMessageIterator {
    constructor(): this;

    /**
     * End of archive marker
     */
    AtEOF: boolean;

    /**
     * The current message
     */
    Message: FAXCOMEXLib$IFaxIncomingMessage;

    /**
     * Move to the first message in the archive
     */
    MoveFirst(): void;

    /**
     * Move to the next message in the archive
     */
    MoveNext(): void;

    /**
     * Size of the prefetch buffer
     */
    PrefetchSize: number;
  }

  /**
   * FaxIncomingQueue Class
   */
  declare class FAXCOMEXLib$FaxIncomingQueue {
    constructor(): this;

    /**
     * Is queue blocked
     */
    Blocked: boolean;

    /**
     * Get incoming job by ID
     */
    GetJob(bstrJobId: string): FAXCOMEXLib$FaxIncomingJob;

    /**
     * Collection of incoming jobs
     */
    GetJobs(): FAXCOMEXLib$FaxIncomingJobs;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;
  }

  /**
   * FaxJobStatus Class
   */
  declare class FAXCOMEXLib$FaxJobStatus {
    constructor(): this;

    /**
     * Available operations, a bit-wise combination of FAX_JOB_OPERATIONS values
     */
    AvailableOperations: $Values<typeof FAXCOMEXLib$FAX_JOB_OPERATIONS_ENUM>;

    /**
     * Caller ID
     */
    CallerId: string;

    /**
     * Called Station ID
     */
    CSID: string;

    /**
     * Page currently in transmision
     */
    CurrentPage: number;

    /**
     * Device ID of device that transmits the job
     */
    DeviceId: number;

    /**
     * Extended status description
     */
    ExtendedStatus: string;

    /**
     * Code of the job's extended status
     */
    ExtendedStatusCode: $Values<
      typeof FAXCOMEXLib$FAX_JOB_EXTENDED_STATUS_ENUM
    >;

    /**
     * Job type
     */
    JobType: $Values<typeof FAXCOMEXLib$FAX_JOB_TYPE_ENUM>;

    /**
     * Total number of pages
     */
    Pages: number;

    /**
     * Number of failed transmission retries
     */
    Retries: number;

    /**
     * Routing information
     */
    RoutingInformation: string;

    /**
     * The time the fax job is scheduled to be transmitted
     */
    ScheduledTime: VarDate;

    /**
     * Size in bytes of TIFF file
     */
    Size: number;

    /**
     * Current queue status of the job, a bit-wise combination of FAX_JOB_STATUS values
     */
    Status: $Values<typeof FAXCOMEXLib$FAX_JOB_STATUS_ENUM>;

    /**
     * The time the fax job finished its transmission
     */
    TransmissionEnd: VarDate;

    /**
     * The time the fax job started its transmission
     */
    TransmissionStart: VarDate;

    /**
     * Transmitting Station ID
     */
    TSID: string;
  }

  /**
   * FaxLoggingOptions Class
   */
  declare class FAXCOMEXLib$FaxLoggingOptions {
    constructor(): this;

    /**
     * Activity logging configuration object
     */
    ActivityLogging: FAXCOMEXLib$FaxActivityLogging;

    /**
     * Event logging configuration object
     */
    EventLogging: FAXCOMEXLib$FaxEventLogging;
  }

  /**
   * FaxOutboundRouting Class
   */
  declare class FAXCOMEXLib$FaxOutboundRouting {
    constructor(): this;

    /**
     * Configuration of the outbound routing groups
     */
    GetGroups(): FAXCOMEXLib$FaxOutboundRoutingGroups;

    /**
     * Configuration of the outbound routing rules
     */
    GetRules(): FAXCOMEXLib$FaxOutboundRoutingRules;
  }

  /**
   * FaxOutboundRoutingGroup Class
   */
  declare class FAXCOMEXLib$FaxOutboundRoutingGroup {
    constructor(): this;

    /**
     * Ordered collection of device IDs
     */
    DeviceIds: FAXCOMEXLib$FaxDeviceIds;

    /**
     * Name of the group
     */
    Name: string;

    /**
     * Status of the group
     */
    Status: $Values<typeof FAXCOMEXLib$FAX_GROUP_STATUS_ENUM>;
  }

  /**
   * FaxOutboundRoutingGroups Class
   */
  declare interface FAXCOMEXLib$FaxOutboundRoutingGroups {
    /**
     * Add a group
     */
    Add(bstrName: string): FAXCOMEXLib$FaxOutboundRoutingGroup;
    +Count: number;
    Item(vIndex: number | string): FAXCOMEXLib$FaxOutboundRoutingGroup;

    /**
     * Remove a group
     */
    Remove(vIndex: number | string): void;
    (vIndex: number | string): FAXCOMEXLib$FaxOutboundRoutingGroup;
  }

  /**
   * FaxOutboundRoutingRule Class
   */
  declare class FAXCOMEXLib$FaxOutboundRoutingRule {
    constructor(): this;

    /**
     * Area code
     */
    AreaCode: number;

    /**
     * Country code
     */
    CountryCode: number;

    /**
     * Destination device
     */
    DeviceId: number;

    /**
     * Group name
     */
    GroupName: string;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;

    /**
     * Status
     */
    Status: $Values<typeof FAXCOMEXLib$FAX_RULE_STATUS_ENUM>;

    /**
     * Uses single device or group
     */
    UseDevice: boolean;
  }

  /**
   * FaxOutboundRoutingRules Class
   */
  declare interface FAXCOMEXLib$FaxOutboundRoutingRules {
    /**
     * Add a rule
     */
    Add(
      lCountryCode: number,
      lAreaCode: number,
      bUseDevice: boolean,
      bstrGroupName: string,
      lDeviceId: number
    ): FAXCOMEXLib$FaxOutboundRoutingRule;
    +Count: number;
    Item(lIndex: number): FAXCOMEXLib$FaxOutboundRoutingRule;

    /**
     * Get a rule by criteria
     */
    ItemByCountryAndArea(
      lCountryCode: number,
      lAreaCode: number
    ): FAXCOMEXLib$FaxOutboundRoutingRule;

    /**
     * Remove a rule
     */
    Remove(lIndex: number): void;

    /**
     * Remove a rule by criteria
     */
    RemoveByCountryAndArea(lCountryCode: number, lAreaCode: number): void;
    (lIndex: number): FAXCOMEXLib$FaxOutboundRoutingRule;
  }

  /**
   * FaxOutgoingArchive Class
   */
  declare class FAXCOMEXLib$FaxOutgoingArchive {
    constructor(): this;

    /**
     * Indicates how long the fax message is kept on the server
     */
    AgeLimit: number;

    /**
     * Location of the outgoing archive on the server
     */
    ArchiveFolder: string;

    /**
     * Get an archived message by its ID
     */
    GetMessage(bstrMessageId: string): FAXCOMEXLib$IFaxOutgoingMessage;

    /**
     * Iterator on the archived messages
     * @param number [lPrefetchSize=100]
     */
    GetMessages(lPrefetchSize?: number): FAXCOMEXLib$FaxOutgoingMessageIterator;

    /**
     * High quota water mark
     */
    HighQuotaWaterMark: number;

    /**
     * Low quota water mark
     */
    LowQuotaWaterMark: number;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;

    /**
     * The high 32-bit value of the archive size
     */
    SizeHigh: number;

    /**
     * The low 32-bit value of the archive size
     */
    SizeLow: number;

    /**
     * Is the size quota warning on or off
     */
    SizeQuotaWarning: boolean;

    /**
     * Whether sent faxes should be archived
     */
    UseArchive: boolean;
  }

  /**
   * FaxOutgoingJob Class
   */
  declare class FAXCOMEXLib$FaxOutgoingJob {
    constructor(): this;

    /**
     * Available operations, a bit-wise combination of FAX_JOB_OPERATIONS values
     */
    AvailableOperations: $Values<typeof FAXCOMEXLib$FAX_JOB_OPERATIONS_ENUM>;

    /**
     * Cancel the outbound job
     */
    Cancel(): void;

    /**
     * Copy the job's TIFF image
     */
    CopyTiff(bstrTiffPath: string): void;

    /**
     * Called Station ID
     */
    CSID: string;

    /**
     * Page currently in transmision
     */
    CurrentPage: number;

    /**
     * Device ID that transmits the job
     */
    DeviceId: number;

    /**
     * Document's friendly name
     */
    DocumentName: string;

    /**
     * Extended status description
     */
    ExtendedStatus: string;

    /**
     * Code of the job's extended status
     */
    ExtendedStatusCode: $Values<
      typeof FAXCOMEXLib$FAX_JOB_EXTENDED_STATUS_ENUM
    >;

    /**
     * Whether to group broadcast receipts
     */
    GroupBroadcastReceipts: boolean;

    /**
     * Has Cover page
     */
    HasCoverPage: boolean;

    /**
     * Unique job ID
     */
    Id: string;

    /**
     * Time the job was originally scheduled to be transmitted
     */
    OriginalScheduledTime: VarDate;

    /**
     * Total number of pages
     */
    Pages: number;

    /**
     * Pause the outbound job
     */
    Pause(): void;

    /**
     * Priority of the fax
     */
    Priority: $Values<typeof FAXCOMEXLib$FAX_PRIORITY_TYPE_ENUM>;

    /**
     * Address of the receipt
     */
    ReceiptAddress: string;

    /**
     * Type of receipt
     */
    ReceiptType: $Values<typeof FAXCOMEXLib$FAX_RECEIPT_TYPE_ENUM>;

    /**
     * Recipient information object
     */
    Recipient: FAXCOMEXLib$FaxRecipient;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Restart the outbound job
     */
    Restart(): void;

    /**
     * Resume the outbound job
     */
    Resume(): void;

    /**
     * Number of failed transmission retries
     */
    Retries: number;

    /**
     * The time the fax job is scheduled to be transmitted
     */
    ScheduledTime: VarDate;

    /**
     * When to send the fax
     */
    ScheduleType: $Values<typeof FAXCOMEXLib$FAX_SCHEDULE_TYPE_ENUM>;

    /**
     * Sender information object
     */
    Sender: FAXCOMEXLib$FaxSender;

    /**
     * Size in bytes of TIFF file
     */
    Size: number;

    /**
     * Current queue status of the job
     */
    Status: $Values<typeof FAXCOMEXLib$FAX_JOB_STATUS_ENUM>;

    /**
     * Cover page's subject field
     */
    Subject: string;

    /**
     * Unique ID the submission process created for the Job
     */
    SubmissionId: string;

    /**
     * Time the job was submitted
     */
    SubmissionTime: VarDate;

    /**
     * The time the fax job finished its transmission
     */
    TransmissionEnd: VarDate;

    /**
     * The time the fax job started its transmission
     */
    TransmissionStart: VarDate;

    /**
     * Transmitting Station ID
     */
    TSID: string;
  }

  /**
   * FaxOutgoingJobs Class
   */
  declare interface FAXCOMEXLib$FaxOutgoingJobs {
    +Count: number;
    Item(vIndex: any): FAXCOMEXLib$IFaxOutgoingJob;
    (vIndex: any): FAXCOMEXLib$IFaxOutgoingJob;
  }

  /**
   * FaxOutgoingMessage Class
   */
  declare class FAXCOMEXLib$FaxOutgoingMessage
    mixins FAXCOMEXLib$IFaxOutgoingMessage {
    constructor(): this;

    /**
     * Copy Tiff image to the local file
     */
    CopyTiff(bstrTiffPath: string): void;

    /**
     * Has Cover page
     */
    HasCoverPage: boolean;

    /**
     * Read flag on the message
     */
    Read: boolean;

    /**
     * Address of the receipt
     */
    ReceiptAddress: string;

    /**
     * Type of the receipt
     */
    ReceiptType: $Values<typeof FAXCOMEXLib$FAX_RECEIPT_TYPE_ENUM>;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;
  }

  /**
   * FaxOutgoingMessageIterator Class
   */
  declare class FAXCOMEXLib$FaxOutgoingMessageIterator {
    constructor(): this;

    /**
     * End of archive marker
     */
    AtEOF: boolean;

    /**
     * Current message
     */
    Message: FAXCOMEXLib$IFaxOutgoingMessage;

    /**
     * Move to the first message
     */
    MoveFirst(): void;

    /**
     * Move to the next message
     */
    MoveNext(): void;

    /**
     * Size of prefetch buffer
     */
    PrefetchSize: number;
  }

  /**
   * FaxOutgoingQueue Class
   */
  declare class FAXCOMEXLib$FaxOutgoingQueue {
    constructor(): this;

    /**
     * How long the failed fax message is kept on the server
     */
    AgeLimit: number;

    /**
     * Are personal cover pages allowed
     */
    AllowPersonalCoverPages: boolean;

    /**
     * Is the queue blocked
     */
    Blocked: boolean;

    /**
     * Does the server generate a brand
     */
    Branding: boolean;

    /**
     * End of the discount rate period
     */
    DiscountRateEnd: VarDate;

    /**
     * Start of the discount rate period
     */
    DiscountRateStart: VarDate;

    /**
     * Outgoing job by ID
     */
    GetJob(bstrJobId: string): FAXCOMEXLib$IFaxOutgoingJob;

    /**
     * Collection of outgoing jobs
     */
    GetJobs(): FAXCOMEXLib$FaxOutgoingJobs;

    /**
     * Is the queue paused
     */
    Paused: boolean;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Number of retries
     */
    Retries: number;

    /**
     * Retry delay
     */
    RetryDelay: number;

    /**
     * Save the object
     */
    Save(): void;

    /**
     * Is device Transmitting Station ID used
     */
    UseDeviceTSID: boolean;
  }

  /**
   * FaxReceiptOptions Class
   */
  declare class FAXCOMEXLib$FaxReceiptOptions {
    constructor(): this;

    /**
     * Allowed receipt types, a bit-wise combination of FAX_RECEIPT_TYPE values
     */
    AllowedReceipts: $Values<typeof FAXCOMEXLib$FAX_RECEIPT_TYPE_ENUM>;

    /**
     * Authentication type used by server
     */
    AuthenticationType: $Values<
      typeof FAXCOMEXLib$FAX_SMTP_AUTHENTICATION_TYPE_ENUM
    >;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;

    /**
     * SMTP password
     */
    SMTPPassword: string;

    /**
     * SMTP port number
     */
    SMTPPort: number;

    /**
     * SMTP sender e-mail address
     */
    SMTPSender: string;

    /**
     * Name of the SMTP server
     */
    SMTPServer: string;

    /**
     * SMTP user name
     */
    SMTPUser: string;

    /**
     * Whether to use the IFaxReceiptOptions settings for MS routing extension
     */
    UseForInboundRouting: boolean;
  }

  /**
   * FaxRecipient Class
   */
  declare class FAXCOMEXLib$FaxRecipient {
    constructor(): this;

    /**
     * Recipient's fax number
     */
    FaxNumber: string;

    /**
     * Recipient's name
     */
    Name: string;
  }

  /**
   * FaxRecipients Class
   */
  declare interface FAXCOMEXLib$FaxRecipients {
    /**
     * Add a recipient
     * @param string [bstrRecipientName='']
     */
    Add(
      bstrFaxNumber: string,
      bstrRecipientName?: string
    ): FAXCOMEXLib$FaxRecipient;
    +Count: number;
    Item(lIndex: number): FAXCOMEXLib$FaxRecipient;

    /**
     * Remove a recipient
     */
    Remove(lIndex: number): void;
    (lIndex: number): FAXCOMEXLib$FaxRecipient;
  }

  /**
   * FaxSecurity Class
   */
  declare class FAXCOMEXLib$FaxSecurity {
    constructor(): this;

    /**
     * Security descriptor
     */
    Descriptor: any;

    /**
     * Granted rights, a bit-wise combination of FAX_ACCESS_RIGHTS values
     */
    GrantedRights: $Values<typeof FAXCOMEXLib$FAX_ACCESS_RIGHTS_ENUM>;

    /**
     * Security Information Type
     */
    InformationType: number;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;
  }

  /**
   * FaxSecurity2 Class
   */
  declare class FAXCOMEXLib$FaxSecurity2 {
    constructor(): this;

    /**
     * Security descriptor
     */
    Descriptor: any;

    /**
     * Granted rights, a bit-wise combination
     */
    GrantedRights: $Values<typeof FAXCOMEXLib$FAX_ACCESS_RIGHTS_ENUM_2>;

    /**
     * Security Information Type
     */
    InformationType: number;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Save the object
     */
    Save(): void;
  }

  /**
   * FaxSender Class
   */
  declare class FAXCOMEXLib$FaxSender {
    constructor(): this;

    /**
     * Sender's billing code
     */
    BillingCode: string;

    /**
     * City
     */
    City: string;

    /**
     * Sender's company
     */
    Company: string;

    /**
     * Sender's country or region
     */
    Country: string;

    /**
     * Sender's department
     */
    Department: string;

    /**
     * Sender's e-mail address
     */
    Email: string;

    /**
     * Sender's fax number
     */
    FaxNumber: string;

    /**
     * Sender's home phone
     */
    HomePhone: string;

    /**
     * Load default sender
     */
    LoadDefaultSender(): void;

    /**
     * Sender's name
     */
    Name: string;

    /**
     * Sender's office location
     */
    OfficeLocation: string;

    /**
     * Sender's office phone
     */
    OfficePhone: string;

    /**
     * Save default sender
     */
    SaveDefaultSender(): void;

    /**
     * Sender's state
     */
    State: string;

    /**
     * Sender's street address
     */
    StreetAddress: string;

    /**
     * Sender's title
     */
    Title: string;

    /**
     * Transmitting Station ID
     */
    TSID: string;

    /**
     * Sender's zip code
     */
    ZipCode: string;
  }

  /**
   * FaxServer Class
   */
  declare class FAXCOMEXLib$FaxServer mixins FAXCOMEXLib$IFaxServer {
    constructor(): this;

    /**
     * Fax server configuration
     */
    Configuration: FAXCOMEXLib$FaxConfiguration;

    /**
     * FaxAccount for the current connection
     */
    CurrentAccount: FAXCOMEXLib$FaxAccount;

    /**
     * The FaxAccountSet configuration object
     */
    FAXCOMEXLib$FaxAccountSet: FAXCOMEXLib$FaxAccountSet;

    /**
     * The security configuration object
     */
    Security2: FAXCOMEXLib$FaxSecurity2;
  }

  /**
   * IFaxIncomingMessage interface
   */
  declare class FAXCOMEXLib$IFaxIncomingMessage {
    /**
     * Caller ID
     */
    CallerId: string;

    /**
     * Copy Tiff image to the local file
     */
    CopyTiff(bstrTiffPath: string): void;

    /**
     * Called Station ID
     */
    CSID: string;

    /**
     * Delete the message from the archive
     */
    Delete(): void;

    /**
     * Name of the device that received the message
     */
    DeviceName: string;

    /**
     * Unique message ID
     */
    Id: string;

    /**
     * Total number of pages
     */
    Pages: number;

    /**
     * Number of failed routing retries
     */
    Retries: number;

    /**
     * Routing information
     */
    RoutingInformation: string;

    /**
     * Size in bytes of the message's TIFF file
     */
    Size: number;

    /**
     * Transmission end time
     */
    TransmissionEnd: VarDate;

    /**
     * Transmission start time
     */
    TransmissionStart: VarDate;

    /**
     * Transmitting Station ID
     */
    TSID: string;
  }

  /**
   * IFaxOutgoingJob interface
   */
  declare class FAXCOMEXLib$IFaxOutgoingJob {
    constructor(): this;

    /**
     * Available operations, a bit-wise combination of FAX_JOB_OPERATIONS values
     */
    AvailableOperations: $Values<typeof FAXCOMEXLib$FAX_JOB_OPERATIONS_ENUM>;

    /**
     * Cancel the outbound job
     */
    Cancel(): void;

    /**
     * Copy the job's TIFF image
     */
    CopyTiff(bstrTiffPath: string): void;

    /**
     * Called Station ID
     */
    CSID: string;

    /**
     * Page currently in transmision
     */
    CurrentPage: number;

    /**
     * Device ID that transmits the job
     */
    DeviceId: number;

    /**
     * Document's friendly name
     */
    DocumentName: string;

    /**
     * Extended status description
     */
    ExtendedStatus: string;

    /**
     * Code of the job's extended status
     */
    ExtendedStatusCode: $Values<
      typeof FAXCOMEXLib$FAX_JOB_EXTENDED_STATUS_ENUM
    >;

    /**
     * Whether to group broadcast receipts
     */
    GroupBroadcastReceipts: boolean;

    /**
     * Unique job ID
     */
    Id: string;

    /**
     * Time the job was originally scheduled to be transmitted
     */
    OriginalScheduledTime: VarDate;

    /**
     * Total number of pages
     */
    Pages: number;

    /**
     * Pause the outbound job
     */
    Pause(): void;

    /**
     * Priority of the fax
     */
    Priority: $Values<typeof FAXCOMEXLib$FAX_PRIORITY_TYPE_ENUM>;

    /**
     * Type of receipt
     */
    ReceiptType: $Values<typeof FAXCOMEXLib$FAX_RECEIPT_TYPE_ENUM>;

    /**
     * Recipient information object
     */
    Recipient: FAXCOMEXLib$FaxRecipient;

    /**
     * Refresh the object
     */
    Refresh(): void;

    /**
     * Restart the outbound job
     */
    Restart(): void;

    /**
     * Resume the outbound job
     */
    Resume(): void;

    /**
     * Number of failed transmission retries
     */
    Retries: number;

    /**
     * The time the fax job is scheduled to be transmitted
     */
    ScheduledTime: VarDate;

    /**
     * Sender information object
     */
    Sender: FAXCOMEXLib$FaxSender;

    /**
     * Size in bytes of TIFF file
     */
    Size: number;

    /**
     * Current queue status of the job
     */
    Status: $Values<typeof FAXCOMEXLib$FAX_JOB_STATUS_ENUM>;

    /**
     * Cover page's subject field
     */
    Subject: string;

    /**
     * Unique ID the submission process created for the Job
     */
    SubmissionId: string;

    /**
     * Time the job was submitted
     */
    SubmissionTime: VarDate;

    /**
     * The time the fax job finished its transmission
     */
    TransmissionEnd: VarDate;

    /**
     * The time the fax job started its transmission
     */
    TransmissionStart: VarDate;

    /**
     * Transmitting Station ID
     */
    TSID: string;
  }

  /**
   * IFaxOutgoingMessage interface
   */
  declare class FAXCOMEXLib$IFaxOutgoingMessage {
    /**
     * Copy Tiff image to the local file
     */
    CopyTiff(bstrTiffPath: string): void;

    /**
     * Called Station ID
     */
    CSID: string;

    /**
     * Delete the message from the archive
     */
    Delete(): void;

    /**
     * Name of the device transmitting the message
     */
    DeviceName: string;

    /**
     * Document's friendly name
     */
    DocumentName: string;

    /**
     * Unique message ID
     */
    Id: string;

    /**
     * Time the job was originally scheduled to be transmitted
     */
    OriginalScheduledTime: VarDate;

    /**
     * Total number of pages
     */
    Pages: number;

    /**
     * Priority of the fax
     */
    Priority: $Values<typeof FAXCOMEXLib$FAX_PRIORITY_TYPE_ENUM>;

    /**
     * Recipient information object
     */
    Recipient: FAXCOMEXLib$FaxRecipient;

    /**
     * Number of failed routing retries
     */
    Retries: number;

    /**
     * Sender information object
     */
    Sender: FAXCOMEXLib$FaxSender;

    /**
     * Size in bytes of TIFF file
     */
    Size: number;

    /**
     * Cover page's subject field
     */
    Subject: string;

    /**
     * Unique ID the submission process created for the job
     */
    SubmissionId: string;

    /**
     * Time the job was submitted
     */
    SubmissionTime: VarDate;

    /**
     * Transmission end time
     */
    TransmissionEnd: VarDate;

    /**
     * Transmission start time
     */
    TransmissionStart: VarDate;

    /**
     * Transmitting Station ID
     */
    TSID: string;
  }

  /**
   * IFaxServer interface
   */
  declare class FAXCOMEXLib$IFaxServer {
    /**
     * The fax server activity status object
     */
    Activity: FAXCOMEXLib$FaxActivity;

    /**
     * Version of the fax server API
     */
    APIVersion: $Values<typeof FAXCOMEXLib$FAX_SERVER_APIVERSION_ENUM>;

    /**
     * Connect to the fax server
     */
    Connect(bstrServerName: string): void;

    /**
     * Is fax server built in debug environment
     */
    Debug: boolean;

    /**
     * Disconnect from the fax server
     */
    Disconnect(): void;

    /**
     * The fax folders object
     */
    Folders: FAXCOMEXLib$FaxFolders;

    /**
     * The collection of device providers
     */
    GetDeviceProviders(): FAXCOMEXLib$FaxDeviceProviders;

    /**
     * The collection of all available devices
     */
    GetDevices(): FAXCOMEXLib$FaxDevices;

    /**
     * Return server level extention property
     */
    GetExtensionProperty(bstrGUID: string): any;

    /**
     * The inbound routing configuration object
     */
    InboundRouting: FAXCOMEXLib$FaxInboundRouting;

    /**
     * Set bit-wise combination of events the fax server listens to
     */
    ListenToServerEvents(
      EventTypes: $Values<typeof FAXCOMEXLib$FAX_SERVER_EVENTS_TYPE_ENUM>
    ): void;

    /**
     * The logging options configuration object
     */
    LoggingOptions: FAXCOMEXLib$FaxLoggingOptions;

    /**
     * The major part of the fax server's build number
     */
    MajorBuild: number;

    /**
     * The major part of the fax server's version number
     */
    MajorVersion: number;

    /**
     * The minor part of the fax server's build number
     */
    MinorBuild: number;

    /**
     * The minor part of the fax server's version number
     */
    MinorVersion: number;

    /**
     * The outbound routing configuration object
     */
    OutboundRouting: FAXCOMEXLib$FaxOutboundRouting;

    /**
     * The receipt options configuration object
     */
    ReceiptOptions: FAXCOMEXLib$FaxReceiptOptions;

    /**
     * Register device provider
     */
    RegisterDeviceProvider(
      bstrGUID: string,
      bstrFriendlyName: string,
      bstrImageName: string,
      TspName: string,
      lFSPIVersion: number
    ): void;

    /**
     * Events the fax Server is listening to
     */
    RegisteredEvents: $Values<typeof FAXCOMEXLib$FAX_SERVER_EVENTS_TYPE_ENUM>;

    /**
     * Register inbound routing extension
     */
    RegisterInboundRoutingExtension(
      bstrExtensionName: string,
      bstrFriendlyName: string,
      bstrImageName: string,
      vMethods: any
    ): void;

    /**
     * The security configuration object
     */
    Security: FAXCOMEXLib$FaxSecurity;

    /**
     * The name of the fax server
     */
    ServerName: string;

    /**
     * Set server level extention property
     */
    SetExtensionProperty(bstrGUID: string, vProperty: SafeArray): void;

    /**
     * Unregister device provider
     */
    UnregisterDeviceProvider(bstrUniqueName: string): void;

    /**
     * Unregister inbound routing extension
     */
    UnregisterInboundRoutingExtension(bstrExtensionUniqueName: string): void;
  }

  declare type FAXCOMEXLib$EventHelperTypes$FaxAccount_Invoke_ArgNames = [
    "dispidMember",
    "riid",
    "lcid",
    "wFlags",
    "pdispparams",
    "pvarResult",
    "pexcepinfo",
    "puArgErr"
  ];

  declare type FAXCOMEXLib$EventHelperTypes$FaxServer_Invoke_ArgNames = [
    "dispidMember",
    "riid",
    "lcid",
    "wFlags",
    "pdispparams",
    "pvarResult",
    "pexcepinfo",
    "puArgErr"
  ];

  declare type FAXCOMEXLib$EventHelperTypes$FaxServer_OnDeviceStatusChange_ArgNames = [
    "pFaxServer",
    "lDeviceId",
    "bPoweredOff",
    "bSending",
    "bReceiving",
    "bRinging"
  ];

  declare interface FAXCOMEXLib$EventHelperTypes$FaxAccount_Invoke_Parameter {
    +dispidMember: number;
    +lcid: number;
    +pdispparams: stdole.DISPPARAMS;
    pexcepinfo: stdole.EXCEPINFO;
    puArgErr: number;
    pvarResult: any;
    +riid: stdole.GUID;
    +wFlags: number;
  }

  declare interface FAXCOMEXLib$EventHelperTypes$FaxServer_Invoke_Parameter {
    +dispidMember: number;
    +lcid: number;
    +pdispparams: stdole.DISPPARAMS;
    pexcepinfo: stdole.EXCEPINFO;
    puArgErr: number;
    pvarResult: any;
    +riid: stdole.GUID;
    +wFlags: number;
  }

  declare interface FAXCOMEXLib$EventHelperTypes$FaxServer_OnDeviceStatusChange_Parameter {
    +bPoweredOff: boolean;
    +bReceiving: boolean;
    +bRinging: boolean;
    +bSending: boolean;
    +lDeviceId: number;
    +pFaxServer: FAXCOMEXLib$FaxServer;
  }
  declare interface ActiveXObject {
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event: "GetIDsOfNames",
      argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
      handler: (parameter: {
        +riid: stdole.GUID,
        +rgszNames: number,
        +cNames: number,
        +lcid: number,
        rgdispid: number
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event: "GetTypeInfo",
      argNames: ["itinfo", "lcid", "pptinfo"],
      handler: (parameter: {
        +itinfo: number,
        +lcid: number,
        pptinfo: void
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event: "GetTypeInfoCount",
      argNames: ["pctinfo"],
      handler: (parameter: {
        pctinfo: number
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event: "Invoke",
      argNames: FAXCOMEXLib$EventHelperTypes$FaxAccount_Invoke_ArgNames,
      handler: (
        parameter: FAXCOMEXLib$EventHelperTypes$FaxAccount_Invoke_Parameter
      ) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event:
        | "OnIncomingJobAdded"
        | "OnIncomingJobRemoved"
        | "OnOutgoingJobAdded"
        | "OnOutgoingJobRemoved",
      argNames: ["pFaxAccount", "bstrJobId"],
      handler: (parameter: {
        +pFaxAccount: FAXCOMEXLib$FaxAccount,
        +bstrJobId: string
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event: "OnIncomingJobChanged" | "OnOutgoingJobChanged",
      argNames: ["pFaxAccount", "bstrJobId", "pJobStatus"],
      handler: (parameter: {
        +pFaxAccount: FAXCOMEXLib$FaxAccount,
        +bstrJobId: string,
        +pJobStatus: FAXCOMEXLib$FaxJobStatus
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event: "OnIncomingMessageAdded",
      argNames: ["pFaxAccount", "bstrMessageId", "fAddedToReceiveFolder"],
      handler: (parameter: {
        +pFaxAccount: FAXCOMEXLib$FaxAccount,
        +bstrMessageId: string,
        +fAddedToReceiveFolder: boolean
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event: "OnIncomingMessageRemoved",
      argNames: ["pFaxAccount", "bstrMessageId", "fRemovedFromReceiveFolder"],
      handler: (parameter: {
        +pFaxAccount: FAXCOMEXLib$FaxAccount,
        +bstrMessageId: string,
        +fRemovedFromReceiveFolder: boolean
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event: "OnOutgoingMessageAdded" | "OnOutgoingMessageRemoved",
      argNames: ["pFaxAccount", "bstrMessageId"],
      handler: (parameter: {
        +pFaxAccount: FAXCOMEXLib$FaxAccount,
        +bstrMessageId: string
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event: "OnServerShutDown",
      argNames: ["pFaxServer"],
      handler: (parameter: {
        +pFaxServer: FAXCOMEXLib$FaxServer
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event: "QueryInterface",
      argNames: ["riid", "ppvObj"],
      handler: (parameter: {
        +riid: stdole.GUID,
        ppvObj: void
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event: "GetIDsOfNames",
      argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
      handler: (parameter: {
        +riid: stdole.GUID,
        +rgszNames: number,
        +cNames: number,
        +lcid: number,
        rgdispid: number
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event: "GetTypeInfo",
      argNames: ["itinfo", "lcid", "pptinfo"],
      handler: (parameter: {
        +itinfo: number,
        +lcid: number,
        pptinfo: void
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event: "GetTypeInfoCount",
      argNames: ["pctinfo"],
      handler: (parameter: {
        pctinfo: number
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event: "Invoke",
      argNames: FAXCOMEXLib$EventHelperTypes$FaxServer_Invoke_ArgNames,
      handler: (
        parameter: FAXCOMEXLib$EventHelperTypes$FaxServer_Invoke_Parameter
      ) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event:
        | "OnActivityLoggingConfigChange"
        | "OnDevicesConfigChange"
        | "OnEventLoggingConfigChange"
        | "OnGeneralServerConfigChanged"
        | "OnIncomingArchiveConfigChange"
        | "OnOutboundRoutingGroupsConfigChange"
        | "OnOutboundRoutingRulesConfigChange"
        | "OnOutgoingArchiveConfigChange"
        | "OnOutgoingQueueConfigChange"
        | "OnReceiptOptionsChange"
        | "OnSecurityConfigChange"
        | "OnServerShutDown",
      argNames: ["pFaxServer"],
      handler: (parameter: {
        +pFaxServer: FAXCOMEXLib$FaxServer
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event: "OnDeviceStatusChange",
      argNames: FAXCOMEXLib$EventHelperTypes$FaxServer_OnDeviceStatusChange_ArgNames,
      handler: (
        parameter: FAXCOMEXLib$EventHelperTypes$FaxServer_OnDeviceStatusChange_Parameter
      ) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event:
        | "OnIncomingJobAdded"
        | "OnIncomingJobRemoved"
        | "OnOutgoingJobAdded"
        | "OnOutgoingJobRemoved",
      argNames: ["pFaxServer", "bstrJobId"],
      handler: (parameter: {
        +pFaxServer: FAXCOMEXLib$FaxServer,
        +bstrJobId: string
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event: "OnIncomingJobChanged" | "OnOutgoingJobChanged",
      argNames: ["pFaxServer", "bstrJobId", "pJobStatus"],
      handler: (parameter: {
        +pFaxServer: FAXCOMEXLib$FaxServer,
        +bstrJobId: string,
        +pJobStatus: FAXCOMEXLib$FaxJobStatus
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event:
        | "OnIncomingMessageAdded"
        | "OnIncomingMessageRemoved"
        | "OnOutgoingMessageAdded"
        | "OnOutgoingMessageRemoved",
      argNames: ["pFaxServer", "bstrMessageId"],
      handler: (parameter: {
        +pFaxServer: FAXCOMEXLib$FaxServer,
        +bstrMessageId: string
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event: "OnNewCall",
      argNames: ["pFaxServer", "lCallId", "lDeviceId", "bstrCallerId"],
      handler: (parameter: {
        +pFaxServer: FAXCOMEXLib$FaxServer,
        +lCallId: number,
        +lDeviceId: number,
        +bstrCallerId: string
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event: "OnQueuesStatusChange",
      argNames: [
        "pFaxServer",
        "bOutgoingQueueBlocked",
        "bOutgoingQueuePaused",
        "bIncomingQueueBlocked"
      ],
      handler: (parameter: {
        +pFaxServer: FAXCOMEXLib$FaxServer,
        +bOutgoingQueueBlocked: boolean,
        +bOutgoingQueuePaused: boolean,
        +bIncomingQueueBlocked: boolean
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event: "OnServerActivityChange",
      argNames: [
        "pFaxServer",
        "lIncomingMessages",
        "lRoutingMessages",
        "lOutgoingMessages",
        "lQueuedMessages"
      ],
      handler: (parameter: {
        +pFaxServer: FAXCOMEXLib$FaxServer,
        +lIncomingMessages: number,
        +lRoutingMessages: number,
        +lOutgoingMessages: number,
        +lQueuedMessages: number
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event: "QueryInterface",
      argNames: ["riid", "ppvObj"],
      handler: (parameter: {
        +riid: stdole.GUID,
        ppvObj: void
      }) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxAccount,
      event: "AddRef" | "Release",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: FAXCOMEXLib$FaxServer,
      event: "AddRef" | "Release",
      handler: (parameter: {}) => void
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "FaxComEx.FaxDocument": FAXCOMEXLib$FaxDocument;
    "FaxComEx.FaxServer": FAXCOMEXLib$FaxServer;
  }
}
