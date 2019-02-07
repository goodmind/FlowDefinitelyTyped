declare module "steam-client" {
  declare export class CMClient mixins NodeJS.EventEmitter {
    /**
     * A boolean that indicates whether you are currently connected and the encryption handshake is complete.
     * 'connected' is emitted when it changes to true, and 'error' is emitted when it changes to false unless you called disconnect.
     * Sending any client messages is only allowed while this is true.
     */
    connected: boolean;

    /**
     * A boolean that indicates whether you are currently logged on.
     * Calling any handler methods except for methods to log on is only allowed while logged on.
     */
    loggedOn: boolean;

    /**
     * Your own SteamID while logged on, otherwise unspecified.
     * Must be set to a valid initial value before sending a logon message.
     */
    steamID: string;

    /**
     * If we've initiated a connection previously, a string containing "ipv4:port" for the server we're connecting/connected to.
     * Also contains the address of the last host we were connected to if we're currently disconnected.
     */
    remoteAddress: string;
    constructor(protocol?: EConnectionProtocol): this;

    /**
     * Override the address and/or port that will be used for the outgoing connection.
     * Takes effect the next time you connect.
     * @param localAddress The local IP address you want to use for the outgoing connection
     * @param localPort The local port you want to use for the outgoing connection
     */
    bind(localAddress?: string, localPort?: string | number): void;

    /**
     * Connects to Steam.It will keep trying to reconnect (provided autoRetry is not false) until encryption handshake is complete (see 'connected'), unless you cancel it with disconnect.
     *
     * You can call this method at any time. If you are already connected, disconnects you first. If there is an ongoing connection attempt, cancels it.
     * @param server If you want to connect to a specific CM server, provide an object here containing host and port properties. Default is a random value from the servers property.
     * @param autoRetry true if you want to automatically retry connection until successful, or false if you want an error event if connection fails. Default true
     */
    connect(server?: Server, autoRetry?: boolean): void;

    /**
     * Immediately terminates the connection and prevents any events (including 'error') from being emitted until you connect again.
     * If you are already disconnected, does nothing.
     * If there is an ongoing connection attempt, cancels it.
     */
    disconnect(): void;

    /**
     * Send a logon message to the CM.
     * You must first be connected and set steamID to a valid initial value.
     * You will receive the response in the logOnResponse event.
     * @param details An object containing your logon parameters
     */
    logOn(details: CMsgClientLogonPassword | CMsgClientLogonLoginKey): void;

    /**
     * @param header
     * @param body
     * @param callback
     */
    send: SendMessage;
    on<T: $Keys<CMEventCallback>>(
      eventType: T,
      callback: $ElementType<CMEventCallback, T>
    ): this;
  }

  /**
   * Steam.servers contains the list of CM servers that CMClient will attempt to connect to.
   * The bootstrapped list is not always up-to-date and might contain dead servers.
   * To avoid timeouts, replace it with your own list before logging in if you have one (see 'servers' event).
   */
  declare export var servers: Server[];
  declare export type SendMessage = (
    header: {
      /**
       * A value from EMsg
       */
      msg: EMsg,

      /**
       * A CMsgProtoBufHeader object if this message is protobuf-backed, otherwise header.proto is falsy.
       */
      proto?: CMsgProtoBufHeader | false
    },
    body: Buffer | ByteBuffer,
    callback?: SendMessage | false
  ) => void;
  declare export interface CMEventCallback {
    /**
     * Connection closed by the server.
     * Only emitted if the encryption handshake is complete, otherwise it will reconnect automatically (unless you disabled autoRetry).
     * loggedOn is now false.
     * @param err An Error object. May contain an eresult property.
     */
    error: (err: Error) => void;

    /**
     * Encryption handshake complete.
     * From now on, it's your responsibility to handle disconnections and reconnect (see error).
     * You'll likely want to log on now.
     * @param serverLoad The load value of the CM server you're connected to. Only available if you're connecting using UDP. It's unclear at this time what scale this value uses.
     */
    connected: (serverLoad: string) => void;

    /**
     * Logon response received. If eresult is EResult.OK, loggedOn is now true.
     * @param response An object with the properties in CMsgClientLogonResponse
     */
    logOnResponse: (response: CMsgClientLogonResponse) => void;

    /**
     * CMClient will use this new list when reconnecting, but it will be lost when your application restarts.
     * You might want to save it to a file or a database and assign it to Steam.servers before logging in next time.
     *
     * Note that Steam.servers will be automatically updated after this event is emitted.
     * This will be useful if you want to compare the old list with the new one for some reason - otherwise it shouldn't matter.
     * @param servers An array containing the up-to-date server list
     */
    servers: (servers: Server[]) => void;

    /**
     * You were logged off from Steam. loggedOn is now false.
     * @param eresesult A value from EResult
     */
    loggedOff: (eresesult: EResult) => void;
    message: SendMessage;
  }
  declare export interface Server {
    host: string;
    port: string | number;
  }
  declare export interface CMsgClientLogon {
    /**
     * Your steam login
     */
    account_name: string;

    /**
     * Steam Guard code. Must be valid if provided, otherwise the logon will fail. Note that Steam Guard codes expire after a short while
     */
    auth_code?: string;

    /**
     * Two-factor authentication code provided by the Steam mobile application. You will have to provide this code every time you log in if your account uses 2FA.
     */
    two_factor_code?: string;

    /**
     * SHA1 hash of your sentry file.
     * If not provided, Steam will send you a sentry file through the ClientUpdateMachineAuth message
     * (unless a limit for registered sentries is reached? see https://github.com/seishun/node-steam/issues/178).
     * If no Steam Guard code is provided, the hash must be already registered with this account, otherwise it's ignored.
     * This value will be ignored if you enable 2FA.
     */
    sha_sentryfile?: string;
  }
  declare export type CMsgClientLogonPassword = {
    /**
     * Required unless login_key is used
     */
    password: string
  } & CMsgClientLogon;

  declare export type CMsgClientLogonLoginKey = {
    /**
     * Alternative to password
     */
    login_key: string
  } & CMsgClientLogon;

  declare export interface CMsgClientLogonResponse {
    /**
     * The logon was successful if equal to EResult.OK
     */
    eresult: EResult;

    /**
     * "loginkey" to be used with WebAPI's AuthenticateUser."
     */
    webapi_authenticate_user_nonce: string;
  }
  declare export interface CMsgProtoBufHeader {
    steamid?: string;
    client_sessionid?: number;
    routing_appid?: number;
    jobid_source?: string;
    jobid_target?: string;
    target_job_name?: string;
    seq_num?: number;
    eresult?: number;
    error_message?: string;
    ip?: number;
    auth_account_flags?: number;
    token_source?: number;
    admin_spoofing_user?: boolean;
    transport_error?: number;
    messageid?: string;
    publisher_group_id?: number;
    sysid?: number;
    trace_tag?: string;
    webapi_key_id?: number;
    is_from_external_source?: boolean;
    forward_to_sysid?: number[];
  }
  declare export class EConnectionProtocol {
    constructor(...args: empty): mixed;
    static +TCP: Class<EConnectionProtocol__TCP> & EConnectionProtocol__TCP & 1; // 1
    static +UDP: Class<EConnectionProtocol__UDP> & EConnectionProtocol__UDP & 2; // 2
    static +WebSocket: Class<EConnectionProtocol__WebSocket> &
      EConnectionProtocol__WebSocket &
      3; // 3
  }

  declare class EConnectionProtocol__TCP mixins EConnectionProtocol {}
  declare class EConnectionProtocol__UDP mixins EConnectionProtocol {}
  declare class EConnectionProtocol__WebSocket mixins EConnectionProtocol {}

  declare export class EMsg {
    constructor(...args: empty): mixed;
    static +Invalid: Class<EMsg__Invalid> & EMsg__Invalid & 0; // 0
    static +Multi: Class<EMsg__Multi> & EMsg__Multi & 1; // 1
    static +ProtobufWrapped: Class<EMsg__ProtobufWrapped> &
      EMsg__ProtobufWrapped &
      2; // 2
    static +BaseGeneral: Class<EMsg__BaseGeneral> & EMsg__BaseGeneral & 100; // 100
    static +GenericReply: Class<EMsg__GenericReply> & EMsg__GenericReply & 100; // 100
    static +DestJobFailed: Class<EMsg__DestJobFailed> &
      EMsg__DestJobFailed &
      113; // 113
    static +Alert: Class<EMsg__Alert> & EMsg__Alert & 115; // 115
    static +SCIDRequest: Class<EMsg__SCIDRequest> & EMsg__SCIDRequest & 120; // 120
    static +SCIDResponse: Class<EMsg__SCIDResponse> & EMsg__SCIDResponse & 121; // 121
    static +JobHeartbeat: Class<EMsg__JobHeartbeat> & EMsg__JobHeartbeat & 123; // 123
    static +HubConnect: Class<EMsg__HubConnect> & EMsg__HubConnect & 124; // 124
    static +Subscribe: Class<EMsg__Subscribe> & EMsg__Subscribe & 126; // 126
    static +RouteMessage: Class<EMsg__RouteMessage> & EMsg__RouteMessage & 127; // 127
    static +RemoteSysID: Class<EMsg__RemoteSysID> & EMsg__RemoteSysID & 128; // 128
    static +AMCreateAccountResponse: Class<EMsg__AMCreateAccountResponse> &
      EMsg__AMCreateAccountResponse &
      129; // 129
    static +WGRequest: Class<EMsg__WGRequest> & EMsg__WGRequest & 130; // 130
    static +WGResponse: Class<EMsg__WGResponse> & EMsg__WGResponse & 131; // 131
    static +KeepAlive: Class<EMsg__KeepAlive> & EMsg__KeepAlive & 132; // 132
    static +WebAPIJobRequest: Class<EMsg__WebAPIJobRequest> &
      EMsg__WebAPIJobRequest &
      133; // 133
    static +WebAPIJobResponse: Class<EMsg__WebAPIJobResponse> &
      EMsg__WebAPIJobResponse &
      134; // 134
    static +ClientSessionStart: Class<EMsg__ClientSessionStart> &
      EMsg__ClientSessionStart &
      135; // 135
    static +ClientSessionEnd: Class<EMsg__ClientSessionEnd> &
      EMsg__ClientSessionEnd &
      136; // 136
    static +ClientSessionUpdateAuthTicket: Class<EMsg__ClientSessionUpdateAuthTicket> &
      EMsg__ClientSessionUpdateAuthTicket &
      137; // 137
    static +ClientSessionUpdate: Class<EMsg__ClientSessionUpdate> &
      EMsg__ClientSessionUpdate &
      137; // 137
    static +StatsDeprecated: Class<EMsg__StatsDeprecated> &
      EMsg__StatsDeprecated &
      138; // 138
    static +Ping: Class<EMsg__Ping> & EMsg__Ping & 139; // 139
    static +PingResponse: Class<EMsg__PingResponse> & EMsg__PingResponse & 140; // 140
    static +Stats: Class<EMsg__Stats> & EMsg__Stats & 141; // 141
    static +RequestFullStatsBlock: Class<EMsg__RequestFullStatsBlock> &
      EMsg__RequestFullStatsBlock &
      142; // 142
    static +LoadDBOCacheItem: Class<EMsg__LoadDBOCacheItem> &
      EMsg__LoadDBOCacheItem &
      143; // 143
    static +LoadDBOCacheItemResponse: Class<EMsg__LoadDBOCacheItemResponse> &
      EMsg__LoadDBOCacheItemResponse &
      144; // 144
    static +InvalidateDBOCacheItems: Class<EMsg__InvalidateDBOCacheItems> &
      EMsg__InvalidateDBOCacheItems &
      145; // 145
    static +ServiceMethod: Class<EMsg__ServiceMethod> &
      EMsg__ServiceMethod &
      146; // 146
    static +ServiceMethodResponse: Class<EMsg__ServiceMethodResponse> &
      EMsg__ServiceMethodResponse &
      147; // 147
    static +ClientPackageVersions: Class<EMsg__ClientPackageVersions> &
      EMsg__ClientPackageVersions &
      148; // 148
    static +TimestampRequest: Class<EMsg__TimestampRequest> &
      EMsg__TimestampRequest &
      149; // 149
    static +TimestampResponse: Class<EMsg__TimestampResponse> &
      EMsg__TimestampResponse &
      150; // 150
    static +BaseShell: Class<EMsg__BaseShell> & EMsg__BaseShell & 200; // 200
    static +AssignSysID: Class<EMsg__AssignSysID> & EMsg__AssignSysID & 200; // 200
    static +Exit: Class<EMsg__Exit> & EMsg__Exit & 201; // 201
    static +DirRequest: Class<EMsg__DirRequest> & EMsg__DirRequest & 202; // 202
    static +DirResponse: Class<EMsg__DirResponse> & EMsg__DirResponse & 203; // 203
    static +ZipRequest: Class<EMsg__ZipRequest> & EMsg__ZipRequest & 204; // 204
    static +ZipResponse: Class<EMsg__ZipResponse> & EMsg__ZipResponse & 205; // 205
    static +UpdateRecordResponse: Class<EMsg__UpdateRecordResponse> &
      EMsg__UpdateRecordResponse &
      215; // 215
    static +UpdateCreditCardRequest: Class<EMsg__UpdateCreditCardRequest> &
      EMsg__UpdateCreditCardRequest &
      221; // 221
    static +UpdateUserBanResponse: Class<EMsg__UpdateUserBanResponse> &
      EMsg__UpdateUserBanResponse &
      225; // 225
    static +PrepareToExit: Class<EMsg__PrepareToExit> &
      EMsg__PrepareToExit &
      226; // 226
    static +ContentDescriptionUpdate: Class<EMsg__ContentDescriptionUpdate> &
      EMsg__ContentDescriptionUpdate &
      227; // 227
    static +TestResetServer: Class<EMsg__TestResetServer> &
      EMsg__TestResetServer &
      228; // 228
    static +UniverseChanged: Class<EMsg__UniverseChanged> &
      EMsg__UniverseChanged &
      229; // 229
    static +ShellConfigInfoUpdate: Class<EMsg__ShellConfigInfoUpdate> &
      EMsg__ShellConfigInfoUpdate &
      230; // 230
    static +RequestWindowsEventLogEntries: Class<EMsg__RequestWindowsEventLogEntries> &
      EMsg__RequestWindowsEventLogEntries &
      233; // 233
    static +ProvideWindowsEventLogEntries: Class<EMsg__ProvideWindowsEventLogEntries> &
      EMsg__ProvideWindowsEventLogEntries &
      234; // 234
    static +ShellSearchLogs: Class<EMsg__ShellSearchLogs> &
      EMsg__ShellSearchLogs &
      235; // 235
    static +ShellSearchLogsResponse: Class<EMsg__ShellSearchLogsResponse> &
      EMsg__ShellSearchLogsResponse &
      236; // 236
    static +ShellCheckWindowsUpdates: Class<EMsg__ShellCheckWindowsUpdates> &
      EMsg__ShellCheckWindowsUpdates &
      237; // 237
    static +ShellCheckWindowsUpdatesResponse: Class<EMsg__ShellCheckWindowsUpdatesResponse> &
      EMsg__ShellCheckWindowsUpdatesResponse &
      238; // 238
    static +ShellFlushUserLicenseCache: Class<EMsg__ShellFlushUserLicenseCache> &
      EMsg__ShellFlushUserLicenseCache &
      239; // 239
    static +BaseGM: Class<EMsg__BaseGM> & EMsg__BaseGM & 300; // 300
    static +Heartbeat: Class<EMsg__Heartbeat> & EMsg__Heartbeat & 300; // 300
    static +ShellFailed: Class<EMsg__ShellFailed> & EMsg__ShellFailed & 301; // 301
    static +ExitShells: Class<EMsg__ExitShells> & EMsg__ExitShells & 307; // 307
    static +ExitShell: Class<EMsg__ExitShell> & EMsg__ExitShell & 308; // 308
    static +GracefulExitShell: Class<EMsg__GracefulExitShell> &
      EMsg__GracefulExitShell &
      309; // 309
    static +NotifyWatchdog: Class<EMsg__NotifyWatchdog> &
      EMsg__NotifyWatchdog &
      314; // 314
    static +LicenseProcessingComplete: Class<EMsg__LicenseProcessingComplete> &
      EMsg__LicenseProcessingComplete &
      316; // 316
    static +SetTestFlag: Class<EMsg__SetTestFlag> & EMsg__SetTestFlag & 317; // 317
    static +QueuedEmailsComplete: Class<EMsg__QueuedEmailsComplete> &
      EMsg__QueuedEmailsComplete &
      318; // 318
    static +GMReportPHPError: Class<EMsg__GMReportPHPError> &
      EMsg__GMReportPHPError &
      319; // 319
    static +GMDRMSync: Class<EMsg__GMDRMSync> & EMsg__GMDRMSync & 320; // 320
    static +PhysicalBoxInventory: Class<EMsg__PhysicalBoxInventory> &
      EMsg__PhysicalBoxInventory &
      321; // 321
    static +UpdateConfigFile: Class<EMsg__UpdateConfigFile> &
      EMsg__UpdateConfigFile &
      322; // 322
    static +TestInitDB: Class<EMsg__TestInitDB> & EMsg__TestInitDB & 323; // 323
    static +GMWriteConfigToSQL: Class<EMsg__GMWriteConfigToSQL> &
      EMsg__GMWriteConfigToSQL &
      324; // 324
    static +GMLoadActivationCodes: Class<EMsg__GMLoadActivationCodes> &
      EMsg__GMLoadActivationCodes &
      325; // 325
    static +GMQueueForFBS: Class<EMsg__GMQueueForFBS> &
      EMsg__GMQueueForFBS &
      326; // 326
    static +GMSchemaConversionResults: Class<EMsg__GMSchemaConversionResults> &
      EMsg__GMSchemaConversionResults &
      327; // 327
    static +GMSchemaConversionResultsResponse: Class<EMsg__GMSchemaConversionResultsResponse> &
      EMsg__GMSchemaConversionResultsResponse &
      328; // 328
    static +GMWriteShellFailureToSQL: Class<EMsg__GMWriteShellFailureToSQL> &
      EMsg__GMWriteShellFailureToSQL &
      329; // 329
    static +GMWriteStatsToSOS: Class<EMsg__GMWriteStatsToSOS> &
      EMsg__GMWriteStatsToSOS &
      330; // 330
    static +GMGetServiceMethodRouting: Class<EMsg__GMGetServiceMethodRouting> &
      EMsg__GMGetServiceMethodRouting &
      331; // 331
    static +GMGetServiceMethodRoutingResponse: Class<EMsg__GMGetServiceMethodRoutingResponse> &
      EMsg__GMGetServiceMethodRoutingResponse &
      332; // 332
    static +GMConvertUserWallets: Class<EMsg__GMConvertUserWallets> &
      EMsg__GMConvertUserWallets &
      333; // 333
    static +BaseAIS: Class<EMsg__BaseAIS> & EMsg__BaseAIS & 400; // 400
    static +AISRefreshContentDescription: Class<EMsg__AISRefreshContentDescription> &
      EMsg__AISRefreshContentDescription &
      401; // 401
    static +AISRequestContentDescription: Class<EMsg__AISRequestContentDescription> &
      EMsg__AISRequestContentDescription &
      402; // 402
    static +AISUpdateAppInfo: Class<EMsg__AISUpdateAppInfo> &
      EMsg__AISUpdateAppInfo &
      403; // 403
    static +AISUpdatePackageInfo: Class<EMsg__AISUpdatePackageInfo> &
      EMsg__AISUpdatePackageInfo &
      404; // 404
    static +AISUpdatePackageCosts: Class<EMsg__AISUpdatePackageCosts> &
      EMsg__AISUpdatePackageCosts &
      404; // 404
    static +AISGetPackageChangeNumber: Class<EMsg__AISGetPackageChangeNumber> &
      EMsg__AISGetPackageChangeNumber &
      405; // 405
    static +AISGetPackageChangeNumberResponse: Class<EMsg__AISGetPackageChangeNumberResponse> &
      EMsg__AISGetPackageChangeNumberResponse &
      406; // 406
    static +AISAppInfoTableChanged: Class<EMsg__AISAppInfoTableChanged> &
      EMsg__AISAppInfoTableChanged &
      407; // 407
    static +AISUpdatePackageCostsResponse: Class<EMsg__AISUpdatePackageCostsResponse> &
      EMsg__AISUpdatePackageCostsResponse &
      408; // 408
    static +AISCreateMarketingMessage: Class<EMsg__AISCreateMarketingMessage> &
      EMsg__AISCreateMarketingMessage &
      409; // 409
    static +AISCreateMarketingMessageResponse: Class<EMsg__AISCreateMarketingMessageResponse> &
      EMsg__AISCreateMarketingMessageResponse &
      410; // 410
    static +AISGetMarketingMessage: Class<EMsg__AISGetMarketingMessage> &
      EMsg__AISGetMarketingMessage &
      411; // 411
    static +AISGetMarketingMessageResponse: Class<EMsg__AISGetMarketingMessageResponse> &
      EMsg__AISGetMarketingMessageResponse &
      412; // 412
    static +AISUpdateMarketingMessage: Class<EMsg__AISUpdateMarketingMessage> &
      EMsg__AISUpdateMarketingMessage &
      413; // 413
    static +AISUpdateMarketingMessageResponse: Class<EMsg__AISUpdateMarketingMessageResponse> &
      EMsg__AISUpdateMarketingMessageResponse &
      414; // 414
    static +AISRequestMarketingMessageUpdate: Class<EMsg__AISRequestMarketingMessageUpdate> &
      EMsg__AISRequestMarketingMessageUpdate &
      415; // 415
    static +AISDeleteMarketingMessage: Class<EMsg__AISDeleteMarketingMessage> &
      EMsg__AISDeleteMarketingMessage &
      416; // 416
    static +AISGetMarketingTreatments: Class<EMsg__AISGetMarketingTreatments> &
      EMsg__AISGetMarketingTreatments &
      419; // 419
    static +AISGetMarketingTreatmentsResponse: Class<EMsg__AISGetMarketingTreatmentsResponse> &
      EMsg__AISGetMarketingTreatmentsResponse &
      420; // 420
    static +AISRequestMarketingTreatmentUpdate: Class<EMsg__AISRequestMarketingTreatmentUpdate> &
      EMsg__AISRequestMarketingTreatmentUpdate &
      421; // 421
    static +AISTestAddPackage: Class<EMsg__AISTestAddPackage> &
      EMsg__AISTestAddPackage &
      422; // 422
    static +AIGetAppGCFlags: Class<EMsg__AIGetAppGCFlags> &
      EMsg__AIGetAppGCFlags &
      423; // 423
    static +AIGetAppGCFlagsResponse: Class<EMsg__AIGetAppGCFlagsResponse> &
      EMsg__AIGetAppGCFlagsResponse &
      424; // 424
    static +AIGetAppList: Class<EMsg__AIGetAppList> & EMsg__AIGetAppList & 425; // 425
    static +AIGetAppListResponse: Class<EMsg__AIGetAppListResponse> &
      EMsg__AIGetAppListResponse &
      426; // 426
    static +AIGetAppInfo: Class<EMsg__AIGetAppInfo> & EMsg__AIGetAppInfo & 427; // 427
    static +AIGetAppInfoResponse: Class<EMsg__AIGetAppInfoResponse> &
      EMsg__AIGetAppInfoResponse &
      428; // 428
    static +AISGetCouponDefinition: Class<EMsg__AISGetCouponDefinition> &
      EMsg__AISGetCouponDefinition &
      429; // 429
    static +AISGetCouponDefinitionResponse: Class<EMsg__AISGetCouponDefinitionResponse> &
      EMsg__AISGetCouponDefinitionResponse &
      430; // 430
    static +AISUpdateSlaveContentDescription: Class<EMsg__AISUpdateSlaveContentDescription> &
      EMsg__AISUpdateSlaveContentDescription &
      431; // 431
    static +AISUpdateSlaveContentDescriptionResponse: Class<EMsg__AISUpdateSlaveContentDescriptionResponse> &
      EMsg__AISUpdateSlaveContentDescriptionResponse &
      432; // 432
    static +AISTestEnableGC: Class<EMsg__AISTestEnableGC> &
      EMsg__AISTestEnableGC &
      433; // 433
    static +BaseAM: Class<EMsg__BaseAM> & EMsg__BaseAM & 500; // 500
    static +AMUpdateUserBanRequest: Class<EMsg__AMUpdateUserBanRequest> &
      EMsg__AMUpdateUserBanRequest &
      504; // 504
    static +AMAddLicense: Class<EMsg__AMAddLicense> & EMsg__AMAddLicense & 505; // 505
    static +AMBeginProcessingLicenses: Class<EMsg__AMBeginProcessingLicenses> &
      EMsg__AMBeginProcessingLicenses &
      507; // 507
    static +AMSendSystemIMToUser: Class<EMsg__AMSendSystemIMToUser> &
      EMsg__AMSendSystemIMToUser &
      508; // 508
    static +AMExtendLicense: Class<EMsg__AMExtendLicense> &
      EMsg__AMExtendLicense &
      509; // 509
    static +AMAddMinutesToLicense: Class<EMsg__AMAddMinutesToLicense> &
      EMsg__AMAddMinutesToLicense &
      510; // 510
    static +AMCancelLicense: Class<EMsg__AMCancelLicense> &
      EMsg__AMCancelLicense &
      511; // 511
    static +AMInitPurchase: Class<EMsg__AMInitPurchase> &
      EMsg__AMInitPurchase &
      512; // 512
    static +AMPurchaseResponse: Class<EMsg__AMPurchaseResponse> &
      EMsg__AMPurchaseResponse &
      513; // 513
    static +AMGetFinalPrice: Class<EMsg__AMGetFinalPrice> &
      EMsg__AMGetFinalPrice &
      514; // 514
    static +AMGetFinalPriceResponse: Class<EMsg__AMGetFinalPriceResponse> &
      EMsg__AMGetFinalPriceResponse &
      515; // 515
    static +AMGetLegacyGameKey: Class<EMsg__AMGetLegacyGameKey> &
      EMsg__AMGetLegacyGameKey &
      516; // 516
    static +AMGetLegacyGameKeyResponse: Class<EMsg__AMGetLegacyGameKeyResponse> &
      EMsg__AMGetLegacyGameKeyResponse &
      517; // 517
    static +AMFindHungTransactions: Class<EMsg__AMFindHungTransactions> &
      EMsg__AMFindHungTransactions &
      518; // 518
    static +AMSetAccountTrustedRequest: Class<EMsg__AMSetAccountTrustedRequest> &
      EMsg__AMSetAccountTrustedRequest &
      519; // 519
    static +AMCompletePurchase: Class<EMsg__AMCompletePurchase> &
      EMsg__AMCompletePurchase &
      521; // 521
    static +AMCancelPurchase: Class<EMsg__AMCancelPurchase> &
      EMsg__AMCancelPurchase &
      522; // 522
    static +AMNewChallenge: Class<EMsg__AMNewChallenge> &
      EMsg__AMNewChallenge &
      523; // 523
    static +AMLoadOEMTickets: Class<EMsg__AMLoadOEMTickets> &
      EMsg__AMLoadOEMTickets &
      524; // 524
    static +AMFixPendingPurchase: Class<EMsg__AMFixPendingPurchase> &
      EMsg__AMFixPendingPurchase &
      525; // 525
    static +AMFixPendingPurchaseResponse: Class<EMsg__AMFixPendingPurchaseResponse> &
      EMsg__AMFixPendingPurchaseResponse &
      526; // 526
    static +AMIsUserBanned: Class<EMsg__AMIsUserBanned> &
      EMsg__AMIsUserBanned &
      527; // 527
    static +AMRegisterKey: Class<EMsg__AMRegisterKey> &
      EMsg__AMRegisterKey &
      528; // 528
    static +AMLoadActivationCodes: Class<EMsg__AMLoadActivationCodes> &
      EMsg__AMLoadActivationCodes &
      529; // 529
    static +AMLoadActivationCodesResponse: Class<EMsg__AMLoadActivationCodesResponse> &
      EMsg__AMLoadActivationCodesResponse &
      530; // 530
    static +AMLookupKeyResponse: Class<EMsg__AMLookupKeyResponse> &
      EMsg__AMLookupKeyResponse &
      531; // 531
    static +AMLookupKey: Class<EMsg__AMLookupKey> & EMsg__AMLookupKey & 532; // 532
    static +AMChatCleanup: Class<EMsg__AMChatCleanup> &
      EMsg__AMChatCleanup &
      533; // 533
    static +AMClanCleanup: Class<EMsg__AMClanCleanup> &
      EMsg__AMClanCleanup &
      534; // 534
    static +AMFixPendingRefund: Class<EMsg__AMFixPendingRefund> &
      EMsg__AMFixPendingRefund &
      535; // 535
    static +AMReverseChargeback: Class<EMsg__AMReverseChargeback> &
      EMsg__AMReverseChargeback &
      536; // 536
    static +AMReverseChargebackResponse: Class<EMsg__AMReverseChargebackResponse> &
      EMsg__AMReverseChargebackResponse &
      537; // 537
    static +AMClanCleanupList: Class<EMsg__AMClanCleanupList> &
      EMsg__AMClanCleanupList &
      538; // 538
    static +AMGetLicenses: Class<EMsg__AMGetLicenses> &
      EMsg__AMGetLicenses &
      539; // 539
    static +AMGetLicensesResponse: Class<EMsg__AMGetLicensesResponse> &
      EMsg__AMGetLicensesResponse &
      540; // 540
    static +AllowUserToPlayQuery: Class<EMsg__AllowUserToPlayQuery> &
      EMsg__AllowUserToPlayQuery &
      550; // 550
    static +AllowUserToPlayResponse: Class<EMsg__AllowUserToPlayResponse> &
      EMsg__AllowUserToPlayResponse &
      551; // 551
    static +AMVerfiyUser: Class<EMsg__AMVerfiyUser> & EMsg__AMVerfiyUser & 552; // 552
    static +AMClientNotPlaying: Class<EMsg__AMClientNotPlaying> &
      EMsg__AMClientNotPlaying &
      553; // 553
    static +ClientRequestFriendship: Class<EMsg__ClientRequestFriendship> &
      EMsg__ClientRequestFriendship &
      554; // 554
    static +AMRelayPublishStatus: Class<EMsg__AMRelayPublishStatus> &
      EMsg__AMRelayPublishStatus &
      555; // 555
    static +AMResetCommunityContent: Class<EMsg__AMResetCommunityContent> &
      EMsg__AMResetCommunityContent &
      556; // 556
    static +AMPrimePersonaStateCache: Class<EMsg__AMPrimePersonaStateCache> &
      EMsg__AMPrimePersonaStateCache &
      557; // 557
    static +AMAllowUserContentQuery: Class<EMsg__AMAllowUserContentQuery> &
      EMsg__AMAllowUserContentQuery &
      558; // 558
    static +AMAllowUserContentResponse: Class<EMsg__AMAllowUserContentResponse> &
      EMsg__AMAllowUserContentResponse &
      559; // 559
    static +AMInitPurchaseResponse: Class<EMsg__AMInitPurchaseResponse> &
      EMsg__AMInitPurchaseResponse &
      560; // 560
    static +AMRevokePurchaseResponse: Class<EMsg__AMRevokePurchaseResponse> &
      EMsg__AMRevokePurchaseResponse &
      561; // 561
    static +AMLockProfile: Class<EMsg__AMLockProfile> &
      EMsg__AMLockProfile &
      562; // 562
    static +AMRefreshGuestPasses: Class<EMsg__AMRefreshGuestPasses> &
      EMsg__AMRefreshGuestPasses &
      563; // 563
    static +AMInviteUserToClan: Class<EMsg__AMInviteUserToClan> &
      EMsg__AMInviteUserToClan &
      564; // 564
    static +AMAcknowledgeClanInvite: Class<EMsg__AMAcknowledgeClanInvite> &
      EMsg__AMAcknowledgeClanInvite &
      565; // 565
    static +AMGrantGuestPasses: Class<EMsg__AMGrantGuestPasses> &
      EMsg__AMGrantGuestPasses &
      566; // 566
    static +AMClanDataUpdated: Class<EMsg__AMClanDataUpdated> &
      EMsg__AMClanDataUpdated &
      567; // 567
    static +AMReloadAccount: Class<EMsg__AMReloadAccount> &
      EMsg__AMReloadAccount &
      568; // 568
    static +AMClientChatMsgRelay: Class<EMsg__AMClientChatMsgRelay> &
      EMsg__AMClientChatMsgRelay &
      569; // 569
    static +AMChatMulti: Class<EMsg__AMChatMulti> & EMsg__AMChatMulti & 570; // 570
    static +AMClientChatInviteRelay: Class<EMsg__AMClientChatInviteRelay> &
      EMsg__AMClientChatInviteRelay &
      571; // 571
    static +AMChatInvite: Class<EMsg__AMChatInvite> & EMsg__AMChatInvite & 572; // 572
    static +AMClientJoinChatRelay: Class<EMsg__AMClientJoinChatRelay> &
      EMsg__AMClientJoinChatRelay &
      573; // 573
    static +AMClientChatMemberInfoRelay: Class<EMsg__AMClientChatMemberInfoRelay> &
      EMsg__AMClientChatMemberInfoRelay &
      574; // 574
    static +AMPublishChatMemberInfo: Class<EMsg__AMPublishChatMemberInfo> &
      EMsg__AMPublishChatMemberInfo &
      575; // 575
    static +AMClientAcceptFriendInvite: Class<EMsg__AMClientAcceptFriendInvite> &
      EMsg__AMClientAcceptFriendInvite &
      576; // 576
    static +AMChatEnter: Class<EMsg__AMChatEnter> & EMsg__AMChatEnter & 577; // 577
    static +AMClientPublishRemovalFromSource: Class<EMsg__AMClientPublishRemovalFromSource> &
      EMsg__AMClientPublishRemovalFromSource &
      578; // 578
    static +AMChatActionResult: Class<EMsg__AMChatActionResult> &
      EMsg__AMChatActionResult &
      579; // 579
    static +AMFindAccounts: Class<EMsg__AMFindAccounts> &
      EMsg__AMFindAccounts &
      580; // 580
    static +AMFindAccountsResponse: Class<EMsg__AMFindAccountsResponse> &
      EMsg__AMFindAccountsResponse &
      581; // 581
    static +AMRequestAccountData: Class<EMsg__AMRequestAccountData> &
      EMsg__AMRequestAccountData &
      582; // 582
    static +AMRequestAccountDataResponse: Class<EMsg__AMRequestAccountDataResponse> &
      EMsg__AMRequestAccountDataResponse &
      583; // 583
    static +AMSetAccountFlags: Class<EMsg__AMSetAccountFlags> &
      EMsg__AMSetAccountFlags &
      584; // 584
    static +AMCreateClan: Class<EMsg__AMCreateClan> & EMsg__AMCreateClan & 586; // 586
    static +AMCreateClanResponse: Class<EMsg__AMCreateClanResponse> &
      EMsg__AMCreateClanResponse &
      587; // 587
    static +AMGetClanDetails: Class<EMsg__AMGetClanDetails> &
      EMsg__AMGetClanDetails &
      588; // 588
    static +AMGetClanDetailsResponse: Class<EMsg__AMGetClanDetailsResponse> &
      EMsg__AMGetClanDetailsResponse &
      589; // 589
    static +AMSetPersonaName: Class<EMsg__AMSetPersonaName> &
      EMsg__AMSetPersonaName &
      590; // 590
    static +AMSetAvatar: Class<EMsg__AMSetAvatar> & EMsg__AMSetAvatar & 591; // 591
    static +AMAuthenticateUser: Class<EMsg__AMAuthenticateUser> &
      EMsg__AMAuthenticateUser &
      592; // 592
    static +AMAuthenticateUserResponse: Class<EMsg__AMAuthenticateUserResponse> &
      EMsg__AMAuthenticateUserResponse &
      593; // 593
    static +AMGetAccountFriendsCount: Class<EMsg__AMGetAccountFriendsCount> &
      EMsg__AMGetAccountFriendsCount &
      594; // 594
    static +AMGetAccountFriendsCountResponse: Class<EMsg__AMGetAccountFriendsCountResponse> &
      EMsg__AMGetAccountFriendsCountResponse &
      595; // 595
    static +AMP2PIntroducerMessage: Class<EMsg__AMP2PIntroducerMessage> &
      EMsg__AMP2PIntroducerMessage &
      596; // 596
    static +ClientChatAction: Class<EMsg__ClientChatAction> &
      EMsg__ClientChatAction &
      597; // 597
    static +AMClientChatActionRelay: Class<EMsg__AMClientChatActionRelay> &
      EMsg__AMClientChatActionRelay &
      598; // 598
    static +BaseVS: Class<EMsg__BaseVS> & EMsg__BaseVS & 600; // 600
    static +ReqChallenge: Class<EMsg__ReqChallenge> & EMsg__ReqChallenge & 600; // 600
    static +VACResponse: Class<EMsg__VACResponse> & EMsg__VACResponse & 601; // 601
    static +ReqChallengeTest: Class<EMsg__ReqChallengeTest> &
      EMsg__ReqChallengeTest &
      602; // 602
    static +VSMarkCheat: Class<EMsg__VSMarkCheat> & EMsg__VSMarkCheat & 604; // 604
    static +VSAddCheat: Class<EMsg__VSAddCheat> & EMsg__VSAddCheat & 605; // 605
    static +VSPurgeCodeModDB: Class<EMsg__VSPurgeCodeModDB> &
      EMsg__VSPurgeCodeModDB &
      606; // 606
    static +VSGetChallengeResults: Class<EMsg__VSGetChallengeResults> &
      EMsg__VSGetChallengeResults &
      607; // 607
    static +VSChallengeResultText: Class<EMsg__VSChallengeResultText> &
      EMsg__VSChallengeResultText &
      608; // 608
    static +VSReportLingerer: Class<EMsg__VSReportLingerer> &
      EMsg__VSReportLingerer &
      609; // 609
    static +VSRequestManagedChallenge: Class<EMsg__VSRequestManagedChallenge> &
      EMsg__VSRequestManagedChallenge &
      610; // 610
    static +VSLoadDBFinished: Class<EMsg__VSLoadDBFinished> &
      EMsg__VSLoadDBFinished &
      611; // 611
    static +BaseDRMS: Class<EMsg__BaseDRMS> & EMsg__BaseDRMS & 625; // 625
    static +DRMBuildBlobRequest: Class<EMsg__DRMBuildBlobRequest> &
      EMsg__DRMBuildBlobRequest &
      628; // 628
    static +DRMBuildBlobResponse: Class<EMsg__DRMBuildBlobResponse> &
      EMsg__DRMBuildBlobResponse &
      629; // 629
    static +DRMResolveGuidRequest: Class<EMsg__DRMResolveGuidRequest> &
      EMsg__DRMResolveGuidRequest &
      630; // 630
    static +DRMResolveGuidResponse: Class<EMsg__DRMResolveGuidResponse> &
      EMsg__DRMResolveGuidResponse &
      631; // 631
    static +DRMVariabilityReport: Class<EMsg__DRMVariabilityReport> &
      EMsg__DRMVariabilityReport &
      633; // 633
    static +DRMVariabilityReportResponse: Class<EMsg__DRMVariabilityReportResponse> &
      EMsg__DRMVariabilityReportResponse &
      634; // 634
    static +DRMStabilityReport: Class<EMsg__DRMStabilityReport> &
      EMsg__DRMStabilityReport &
      635; // 635
    static +DRMStabilityReportResponse: Class<EMsg__DRMStabilityReportResponse> &
      EMsg__DRMStabilityReportResponse &
      636; // 636
    static +DRMDetailsReportRequest: Class<EMsg__DRMDetailsReportRequest> &
      EMsg__DRMDetailsReportRequest &
      637; // 637
    static +DRMDetailsReportResponse: Class<EMsg__DRMDetailsReportResponse> &
      EMsg__DRMDetailsReportResponse &
      638; // 638
    static +DRMProcessFile: Class<EMsg__DRMProcessFile> &
      EMsg__DRMProcessFile &
      639; // 639
    static +DRMAdminUpdate: Class<EMsg__DRMAdminUpdate> &
      EMsg__DRMAdminUpdate &
      640; // 640
    static +DRMAdminUpdateResponse: Class<EMsg__DRMAdminUpdateResponse> &
      EMsg__DRMAdminUpdateResponse &
      641; // 641
    static +DRMSync: Class<EMsg__DRMSync> & EMsg__DRMSync & 642; // 642
    static +DRMSyncResponse: Class<EMsg__DRMSyncResponse> &
      EMsg__DRMSyncResponse &
      643; // 643
    static +DRMProcessFileResponse: Class<EMsg__DRMProcessFileResponse> &
      EMsg__DRMProcessFileResponse &
      644; // 644
    static +DRMEmptyGuidCache: Class<EMsg__DRMEmptyGuidCache> &
      EMsg__DRMEmptyGuidCache &
      645; // 645
    static +DRMEmptyGuidCacheResponse: Class<EMsg__DRMEmptyGuidCacheResponse> &
      EMsg__DRMEmptyGuidCacheResponse &
      646; // 646
    static +BaseCS: Class<EMsg__BaseCS> & EMsg__BaseCS & 650; // 650
    static +CSUserContentRequest: Class<EMsg__CSUserContentRequest> &
      EMsg__CSUserContentRequest &
      652; // 652
    static +BaseClient: Class<EMsg__BaseClient> & EMsg__BaseClient & 700; // 700
    static +ClientLogOn_Deprecated: Class<EMsg__ClientLogOn_Deprecated> &
      EMsg__ClientLogOn_Deprecated &
      701; // 701
    static +ClientAnonLogOn_Deprecated: Class<EMsg__ClientAnonLogOn_Deprecated> &
      EMsg__ClientAnonLogOn_Deprecated &
      702; // 702
    static +ClientHeartBeat: Class<EMsg__ClientHeartBeat> &
      EMsg__ClientHeartBeat &
      703; // 703
    static +ClientVACResponse: Class<EMsg__ClientVACResponse> &
      EMsg__ClientVACResponse &
      704; // 704
    static +ClientGamesPlayed_obsolete: Class<EMsg__ClientGamesPlayed_obsolete> &
      EMsg__ClientGamesPlayed_obsolete &
      705; // 705
    static +ClientLogOff: Class<EMsg__ClientLogOff> & EMsg__ClientLogOff & 706; // 706
    static +ClientNoUDPConnectivity: Class<EMsg__ClientNoUDPConnectivity> &
      EMsg__ClientNoUDPConnectivity &
      707; // 707
    static +ClientInformOfCreateAccount: Class<EMsg__ClientInformOfCreateAccount> &
      EMsg__ClientInformOfCreateAccount &
      708; // 708
    static +ClientAckVACBan: Class<EMsg__ClientAckVACBan> &
      EMsg__ClientAckVACBan &
      709; // 709
    static +ClientConnectionStats: Class<EMsg__ClientConnectionStats> &
      EMsg__ClientConnectionStats &
      710; // 710
    static +ClientInitPurchase: Class<EMsg__ClientInitPurchase> &
      EMsg__ClientInitPurchase &
      711; // 711
    static +ClientPingResponse: Class<EMsg__ClientPingResponse> &
      EMsg__ClientPingResponse &
      712; // 712
    static +ClientRemoveFriend: Class<EMsg__ClientRemoveFriend> &
      EMsg__ClientRemoveFriend &
      714; // 714
    static +ClientGamesPlayedNoDataBlob: Class<EMsg__ClientGamesPlayedNoDataBlob> &
      EMsg__ClientGamesPlayedNoDataBlob &
      715; // 715
    static +ClientChangeStatus: Class<EMsg__ClientChangeStatus> &
      EMsg__ClientChangeStatus &
      716; // 716
    static +ClientVacStatusResponse: Class<EMsg__ClientVacStatusResponse> &
      EMsg__ClientVacStatusResponse &
      717; // 717
    static +ClientFriendMsg: Class<EMsg__ClientFriendMsg> &
      EMsg__ClientFriendMsg &
      718; // 718
    static +ClientGameConnect_obsolete: Class<EMsg__ClientGameConnect_obsolete> &
      EMsg__ClientGameConnect_obsolete &
      719; // 719
    static +ClientGamesPlayed2_obsolete: Class<EMsg__ClientGamesPlayed2_obsolete> &
      EMsg__ClientGamesPlayed2_obsolete &
      720; // 720
    static +ClientGameEnded_obsolete: Class<EMsg__ClientGameEnded_obsolete> &
      EMsg__ClientGameEnded_obsolete &
      721; // 721
    static +ClientGetFinalPrice: Class<EMsg__ClientGetFinalPrice> &
      EMsg__ClientGetFinalPrice &
      722; // 722
    static +ClientSystemIM: Class<EMsg__ClientSystemIM> &
      EMsg__ClientSystemIM &
      726; // 726
    static +ClientSystemIMAck: Class<EMsg__ClientSystemIMAck> &
      EMsg__ClientSystemIMAck &
      727; // 727
    static +ClientGetLicenses: Class<EMsg__ClientGetLicenses> &
      EMsg__ClientGetLicenses &
      728; // 728
    static +ClientCancelLicense: Class<EMsg__ClientCancelLicense> &
      EMsg__ClientCancelLicense &
      729; // 729
    static +ClientGetLegacyGameKey: Class<EMsg__ClientGetLegacyGameKey> &
      EMsg__ClientGetLegacyGameKey &
      730; // 730
    static +ClientContentServerLogOn_Deprecated: Class<EMsg__ClientContentServerLogOn_Deprecated> &
      EMsg__ClientContentServerLogOn_Deprecated &
      731; // 731
    static +ClientAckVACBan2: Class<EMsg__ClientAckVACBan2> &
      EMsg__ClientAckVACBan2 &
      732; // 732
    static +ClientAckMessageByGID: Class<EMsg__ClientAckMessageByGID> &
      EMsg__ClientAckMessageByGID &
      735; // 735
    static +ClientGetPurchaseReceipts: Class<EMsg__ClientGetPurchaseReceipts> &
      EMsg__ClientGetPurchaseReceipts &
      736; // 736
    static +ClientAckPurchaseReceipt: Class<EMsg__ClientAckPurchaseReceipt> &
      EMsg__ClientAckPurchaseReceipt &
      737; // 737
    static +ClientGamesPlayed3_obsolete: Class<EMsg__ClientGamesPlayed3_obsolete> &
      EMsg__ClientGamesPlayed3_obsolete &
      738; // 738
    static +ClientSendGuestPass: Class<EMsg__ClientSendGuestPass> &
      EMsg__ClientSendGuestPass &
      739; // 739
    static +ClientAckGuestPass: Class<EMsg__ClientAckGuestPass> &
      EMsg__ClientAckGuestPass &
      740; // 740
    static +ClientRedeemGuestPass: Class<EMsg__ClientRedeemGuestPass> &
      EMsg__ClientRedeemGuestPass &
      741; // 741
    static +ClientGamesPlayed: Class<EMsg__ClientGamesPlayed> &
      EMsg__ClientGamesPlayed &
      742; // 742
    static +ClientRegisterKey: Class<EMsg__ClientRegisterKey> &
      EMsg__ClientRegisterKey &
      743; // 743
    static +ClientInviteUserToClan: Class<EMsg__ClientInviteUserToClan> &
      EMsg__ClientInviteUserToClan &
      744; // 744
    static +ClientAcknowledgeClanInvite: Class<EMsg__ClientAcknowledgeClanInvite> &
      EMsg__ClientAcknowledgeClanInvite &
      745; // 745
    static +ClientPurchaseWithMachineID: Class<EMsg__ClientPurchaseWithMachineID> &
      EMsg__ClientPurchaseWithMachineID &
      746; // 746
    static +ClientAppUsageEvent: Class<EMsg__ClientAppUsageEvent> &
      EMsg__ClientAppUsageEvent &
      747; // 747
    static +ClientGetGiftTargetList: Class<EMsg__ClientGetGiftTargetList> &
      EMsg__ClientGetGiftTargetList &
      748; // 748
    static +ClientGetGiftTargetListResponse: Class<EMsg__ClientGetGiftTargetListResponse> &
      EMsg__ClientGetGiftTargetListResponse &
      749; // 749
    static +ClientLogOnResponse: Class<EMsg__ClientLogOnResponse> &
      EMsg__ClientLogOnResponse &
      751; // 751
    static +ClientVACChallenge: Class<EMsg__ClientVACChallenge> &
      EMsg__ClientVACChallenge &
      753; // 753
    static +ClientSetHeartbeatRate: Class<EMsg__ClientSetHeartbeatRate> &
      EMsg__ClientSetHeartbeatRate &
      755; // 755
    static +ClientNotLoggedOnDeprecated: Class<EMsg__ClientNotLoggedOnDeprecated> &
      EMsg__ClientNotLoggedOnDeprecated &
      756; // 756
    static +ClientLoggedOff: Class<EMsg__ClientLoggedOff> &
      EMsg__ClientLoggedOff &
      757; // 757
    static +GSApprove: Class<EMsg__GSApprove> & EMsg__GSApprove & 758; // 758
    static +GSDeny: Class<EMsg__GSDeny> & EMsg__GSDeny & 759; // 759
    static +GSKick: Class<EMsg__GSKick> & EMsg__GSKick & 760; // 760
    static +ClientCreateAcctResponse: Class<EMsg__ClientCreateAcctResponse> &
      EMsg__ClientCreateAcctResponse &
      761; // 761
    static +ClientPurchaseResponse: Class<EMsg__ClientPurchaseResponse> &
      EMsg__ClientPurchaseResponse &
      763; // 763
    static +ClientPing: Class<EMsg__ClientPing> & EMsg__ClientPing & 764; // 764
    static +ClientNOP: Class<EMsg__ClientNOP> & EMsg__ClientNOP & 765; // 765
    static +ClientPersonaState: Class<EMsg__ClientPersonaState> &
      EMsg__ClientPersonaState &
      766; // 766
    static +ClientFriendsList: Class<EMsg__ClientFriendsList> &
      EMsg__ClientFriendsList &
      767; // 767
    static +ClientAccountInfo: Class<EMsg__ClientAccountInfo> &
      EMsg__ClientAccountInfo &
      768; // 768
    static +ClientVacStatusQuery: Class<EMsg__ClientVacStatusQuery> &
      EMsg__ClientVacStatusQuery &
      770; // 770
    static +ClientNewsUpdate: Class<EMsg__ClientNewsUpdate> &
      EMsg__ClientNewsUpdate &
      771; // 771
    static +ClientGameConnectDeny: Class<EMsg__ClientGameConnectDeny> &
      EMsg__ClientGameConnectDeny &
      773; // 773
    static +GSStatusReply: Class<EMsg__GSStatusReply> &
      EMsg__GSStatusReply &
      774; // 774
    static +ClientGetFinalPriceResponse: Class<EMsg__ClientGetFinalPriceResponse> &
      EMsg__ClientGetFinalPriceResponse &
      775; // 775
    static +ClientGameConnectTokens: Class<EMsg__ClientGameConnectTokens> &
      EMsg__ClientGameConnectTokens &
      779; // 779
    static +ClientLicenseList: Class<EMsg__ClientLicenseList> &
      EMsg__ClientLicenseList &
      780; // 780
    static +ClientCancelLicenseResponse: Class<EMsg__ClientCancelLicenseResponse> &
      EMsg__ClientCancelLicenseResponse &
      781; // 781
    static +ClientVACBanStatus: Class<EMsg__ClientVACBanStatus> &
      EMsg__ClientVACBanStatus &
      782; // 782
    static +ClientCMList: Class<EMsg__ClientCMList> & EMsg__ClientCMList & 783; // 783
    static +ClientEncryptPct: Class<EMsg__ClientEncryptPct> &
      EMsg__ClientEncryptPct &
      784; // 784
    static +ClientGetLegacyGameKeyResponse: Class<EMsg__ClientGetLegacyGameKeyResponse> &
      EMsg__ClientGetLegacyGameKeyResponse &
      785; // 785
    static +ClientFavoritesList: Class<EMsg__ClientFavoritesList> &
      EMsg__ClientFavoritesList &
      786; // 786
    static +CSUserContentApprove: Class<EMsg__CSUserContentApprove> &
      EMsg__CSUserContentApprove &
      787; // 787
    static +CSUserContentDeny: Class<EMsg__CSUserContentDeny> &
      EMsg__CSUserContentDeny &
      788; // 788
    static +ClientInitPurchaseResponse: Class<EMsg__ClientInitPurchaseResponse> &
      EMsg__ClientInitPurchaseResponse &
      789; // 789
    static +ClientAddFriend: Class<EMsg__ClientAddFriend> &
      EMsg__ClientAddFriend &
      791; // 791
    static +ClientAddFriendResponse: Class<EMsg__ClientAddFriendResponse> &
      EMsg__ClientAddFriendResponse &
      792; // 792
    static +ClientInviteFriend: Class<EMsg__ClientInviteFriend> &
      EMsg__ClientInviteFriend &
      793; // 793
    static +ClientInviteFriendResponse: Class<EMsg__ClientInviteFriendResponse> &
      EMsg__ClientInviteFriendResponse &
      794; // 794
    static +ClientSendGuestPassResponse: Class<EMsg__ClientSendGuestPassResponse> &
      EMsg__ClientSendGuestPassResponse &
      795; // 795
    static +ClientAckGuestPassResponse: Class<EMsg__ClientAckGuestPassResponse> &
      EMsg__ClientAckGuestPassResponse &
      796; // 796
    static +ClientRedeemGuestPassResponse: Class<EMsg__ClientRedeemGuestPassResponse> &
      EMsg__ClientRedeemGuestPassResponse &
      797; // 797
    static +ClientUpdateGuestPassesList: Class<EMsg__ClientUpdateGuestPassesList> &
      EMsg__ClientUpdateGuestPassesList &
      798; // 798
    static +ClientChatMsg: Class<EMsg__ClientChatMsg> &
      EMsg__ClientChatMsg &
      799; // 799
    static +ClientChatInvite: Class<EMsg__ClientChatInvite> &
      EMsg__ClientChatInvite &
      800; // 800
    static +ClientJoinChat: Class<EMsg__ClientJoinChat> &
      EMsg__ClientJoinChat &
      801; // 801
    static +ClientChatMemberInfo: Class<EMsg__ClientChatMemberInfo> &
      EMsg__ClientChatMemberInfo &
      802; // 802
    static +ClientLogOnWithCredentials_Deprecated: Class<EMsg__ClientLogOnWithCredentials_Deprecated> &
      EMsg__ClientLogOnWithCredentials_Deprecated &
      803; // 803
    static +ClientPasswordChangeResponse: Class<EMsg__ClientPasswordChangeResponse> &
      EMsg__ClientPasswordChangeResponse &
      805; // 805
    static +ClientChatEnter: Class<EMsg__ClientChatEnter> &
      EMsg__ClientChatEnter &
      807; // 807
    static +ClientFriendRemovedFromSource: Class<EMsg__ClientFriendRemovedFromSource> &
      EMsg__ClientFriendRemovedFromSource &
      808; // 808
    static +ClientCreateChat: Class<EMsg__ClientCreateChat> &
      EMsg__ClientCreateChat &
      809; // 809
    static +ClientCreateChatResponse: Class<EMsg__ClientCreateChatResponse> &
      EMsg__ClientCreateChatResponse &
      810; // 810
    static +ClientUpdateChatMetadata: Class<EMsg__ClientUpdateChatMetadata> &
      EMsg__ClientUpdateChatMetadata &
      811; // 811
    static +ClientP2PIntroducerMessage: Class<EMsg__ClientP2PIntroducerMessage> &
      EMsg__ClientP2PIntroducerMessage &
      813; // 813
    static +ClientChatActionResult: Class<EMsg__ClientChatActionResult> &
      EMsg__ClientChatActionResult &
      814; // 814
    static +ClientRequestFriendData: Class<EMsg__ClientRequestFriendData> &
      EMsg__ClientRequestFriendData &
      815; // 815
    static +ClientGetUserStats: Class<EMsg__ClientGetUserStats> &
      EMsg__ClientGetUserStats &
      818; // 818
    static +ClientGetUserStatsResponse: Class<EMsg__ClientGetUserStatsResponse> &
      EMsg__ClientGetUserStatsResponse &
      819; // 819
    static +ClientStoreUserStats: Class<EMsg__ClientStoreUserStats> &
      EMsg__ClientStoreUserStats &
      820; // 820
    static +ClientStoreUserStatsResponse: Class<EMsg__ClientStoreUserStatsResponse> &
      EMsg__ClientStoreUserStatsResponse &
      821; // 821
    static +ClientClanState: Class<EMsg__ClientClanState> &
      EMsg__ClientClanState &
      822; // 822
    static +ClientServiceModule: Class<EMsg__ClientServiceModule> &
      EMsg__ClientServiceModule &
      830; // 830
    static +ClientServiceCall: Class<EMsg__ClientServiceCall> &
      EMsg__ClientServiceCall &
      831; // 831
    static +ClientServiceCallResponse: Class<EMsg__ClientServiceCallResponse> &
      EMsg__ClientServiceCallResponse &
      832; // 832
    static +ClientPackageInfoRequest: Class<EMsg__ClientPackageInfoRequest> &
      EMsg__ClientPackageInfoRequest &
      833; // 833
    static +ClientPackageInfoResponse: Class<EMsg__ClientPackageInfoResponse> &
      EMsg__ClientPackageInfoResponse &
      834; // 834
    static +ClientNatTraversalStatEvent: Class<EMsg__ClientNatTraversalStatEvent> &
      EMsg__ClientNatTraversalStatEvent &
      839; // 839
    static +ClientAppInfoRequest: Class<EMsg__ClientAppInfoRequest> &
      EMsg__ClientAppInfoRequest &
      840; // 840
    static +ClientAppInfoResponse: Class<EMsg__ClientAppInfoResponse> &
      EMsg__ClientAppInfoResponse &
      841; // 841
    static +ClientSteamUsageEvent: Class<EMsg__ClientSteamUsageEvent> &
      EMsg__ClientSteamUsageEvent &
      842; // 842
    static +ClientCheckPassword: Class<EMsg__ClientCheckPassword> &
      EMsg__ClientCheckPassword &
      845; // 845
    static +ClientResetPassword: Class<EMsg__ClientResetPassword> &
      EMsg__ClientResetPassword &
      846; // 846
    static +ClientCheckPasswordResponse: Class<EMsg__ClientCheckPasswordResponse> &
      EMsg__ClientCheckPasswordResponse &
      848; // 848
    static +ClientResetPasswordResponse: Class<EMsg__ClientResetPasswordResponse> &
      EMsg__ClientResetPasswordResponse &
      849; // 849
    static +ClientSessionToken: Class<EMsg__ClientSessionToken> &
      EMsg__ClientSessionToken &
      850; // 850
    static +ClientDRMProblemReport: Class<EMsg__ClientDRMProblemReport> &
      EMsg__ClientDRMProblemReport &
      851; // 851
    static +ClientSetIgnoreFriend: Class<EMsg__ClientSetIgnoreFriend> &
      EMsg__ClientSetIgnoreFriend &
      855; // 855
    static +ClientSetIgnoreFriendResponse: Class<EMsg__ClientSetIgnoreFriendResponse> &
      EMsg__ClientSetIgnoreFriendResponse &
      856; // 856
    static +ClientGetAppOwnershipTicket: Class<EMsg__ClientGetAppOwnershipTicket> &
      EMsg__ClientGetAppOwnershipTicket &
      857; // 857
    static +ClientGetAppOwnershipTicketResponse: Class<EMsg__ClientGetAppOwnershipTicketResponse> &
      EMsg__ClientGetAppOwnershipTicketResponse &
      858; // 858
    static +ClientGetLobbyListResponse: Class<EMsg__ClientGetLobbyListResponse> &
      EMsg__ClientGetLobbyListResponse &
      860; // 860
    static +ClientGetLobbyMetadata: Class<EMsg__ClientGetLobbyMetadata> &
      EMsg__ClientGetLobbyMetadata &
      861; // 861
    static +ClientGetLobbyMetadataResponse: Class<EMsg__ClientGetLobbyMetadataResponse> &
      EMsg__ClientGetLobbyMetadataResponse &
      862; // 862
    static +ClientVTTCert: Class<EMsg__ClientVTTCert> &
      EMsg__ClientVTTCert &
      863; // 863
    static +ClientAppInfoUpdate: Class<EMsg__ClientAppInfoUpdate> &
      EMsg__ClientAppInfoUpdate &
      866; // 866
    static +ClientAppInfoChanges: Class<EMsg__ClientAppInfoChanges> &
      EMsg__ClientAppInfoChanges &
      867; // 867
    static +ClientServerList: Class<EMsg__ClientServerList> &
      EMsg__ClientServerList &
      880; // 880
    static +ClientEmailChangeResponse: Class<EMsg__ClientEmailChangeResponse> &
      EMsg__ClientEmailChangeResponse &
      891; // 891
    static +ClientSecretQAChangeResponse: Class<EMsg__ClientSecretQAChangeResponse> &
      EMsg__ClientSecretQAChangeResponse &
      892; // 892
    static +ClientDRMBlobRequest: Class<EMsg__ClientDRMBlobRequest> &
      EMsg__ClientDRMBlobRequest &
      896; // 896
    static +ClientDRMBlobResponse: Class<EMsg__ClientDRMBlobResponse> &
      EMsg__ClientDRMBlobResponse &
      897; // 897
    static +ClientLookupKey: Class<EMsg__ClientLookupKey> &
      EMsg__ClientLookupKey &
      898; // 898
    static +ClientLookupKeyResponse: Class<EMsg__ClientLookupKeyResponse> &
      EMsg__ClientLookupKeyResponse &
      899; // 899
    static +BaseGameServer: Class<EMsg__BaseGameServer> &
      EMsg__BaseGameServer &
      900; // 900
    static +GSDisconnectNotice: Class<EMsg__GSDisconnectNotice> &
      EMsg__GSDisconnectNotice &
      901; // 901
    static +GSStatus: Class<EMsg__GSStatus> & EMsg__GSStatus & 903; // 903
    static +GSUserPlaying: Class<EMsg__GSUserPlaying> &
      EMsg__GSUserPlaying &
      905; // 905
    static +GSStatus2: Class<EMsg__GSStatus2> & EMsg__GSStatus2 & 906; // 906
    static +GSStatusUpdate_Unused: Class<EMsg__GSStatusUpdate_Unused> &
      EMsg__GSStatusUpdate_Unused &
      907; // 907
    static +GSServerType: Class<EMsg__GSServerType> & EMsg__GSServerType & 908; // 908
    static +GSPlayerList: Class<EMsg__GSPlayerList> & EMsg__GSPlayerList & 909; // 909
    static +GSGetUserAchievementStatus: Class<EMsg__GSGetUserAchievementStatus> &
      EMsg__GSGetUserAchievementStatus &
      910; // 910
    static +GSGetUserAchievementStatusResponse: Class<EMsg__GSGetUserAchievementStatusResponse> &
      EMsg__GSGetUserAchievementStatusResponse &
      911; // 911
    static +GSGetPlayStats: Class<EMsg__GSGetPlayStats> &
      EMsg__GSGetPlayStats &
      918; // 918
    static +GSGetPlayStatsResponse: Class<EMsg__GSGetPlayStatsResponse> &
      EMsg__GSGetPlayStatsResponse &
      919; // 919
    static +GSGetUserGroupStatus: Class<EMsg__GSGetUserGroupStatus> &
      EMsg__GSGetUserGroupStatus &
      920; // 920
    static +AMGetUserGroupStatus: Class<EMsg__AMGetUserGroupStatus> &
      EMsg__AMGetUserGroupStatus &
      921; // 921
    static +AMGetUserGroupStatusResponse: Class<EMsg__AMGetUserGroupStatusResponse> &
      EMsg__AMGetUserGroupStatusResponse &
      922; // 922
    static +GSGetUserGroupStatusResponse: Class<EMsg__GSGetUserGroupStatusResponse> &
      EMsg__GSGetUserGroupStatusResponse &
      923; // 923
    static +GSGetReputation: Class<EMsg__GSGetReputation> &
      EMsg__GSGetReputation &
      936; // 936
    static +GSGetReputationResponse: Class<EMsg__GSGetReputationResponse> &
      EMsg__GSGetReputationResponse &
      937; // 937
    static +GSAssociateWithClan: Class<EMsg__GSAssociateWithClan> &
      EMsg__GSAssociateWithClan &
      938; // 938
    static +GSAssociateWithClanResponse: Class<EMsg__GSAssociateWithClanResponse> &
      EMsg__GSAssociateWithClanResponse &
      939; // 939
    static +GSComputeNewPlayerCompatibility: Class<EMsg__GSComputeNewPlayerCompatibility> &
      EMsg__GSComputeNewPlayerCompatibility &
      940; // 940
    static +GSComputeNewPlayerCompatibilityResponse: Class<EMsg__GSComputeNewPlayerCompatibilityResponse> &
      EMsg__GSComputeNewPlayerCompatibilityResponse &
      941; // 941
    static +BaseAdmin: Class<EMsg__BaseAdmin> & EMsg__BaseAdmin & 1000; // 1000
    static +AdminCmd: Class<EMsg__AdminCmd> & EMsg__AdminCmd & 1000; // 1000
    static +AdminCmdResponse: Class<EMsg__AdminCmdResponse> &
      EMsg__AdminCmdResponse &
      1004; // 1004
    static +AdminLogListenRequest: Class<EMsg__AdminLogListenRequest> &
      EMsg__AdminLogListenRequest &
      1005; // 1005
    static +AdminLogEvent: Class<EMsg__AdminLogEvent> &
      EMsg__AdminLogEvent &
      1006; // 1006
    static +LogSearchRequest: Class<EMsg__LogSearchRequest> &
      EMsg__LogSearchRequest &
      1007; // 1007
    static +LogSearchResponse: Class<EMsg__LogSearchResponse> &
      EMsg__LogSearchResponse &
      1008; // 1008
    static +LogSearchCancel: Class<EMsg__LogSearchCancel> &
      EMsg__LogSearchCancel &
      1009; // 1009
    static +UniverseData: Class<EMsg__UniverseData> & EMsg__UniverseData & 1010; // 1010
    static +RequestStatHistory: Class<EMsg__RequestStatHistory> &
      EMsg__RequestStatHistory &
      1014; // 1014
    static +StatHistory: Class<EMsg__StatHistory> & EMsg__StatHistory & 1015; // 1015
    static +AdminPwLogon: Class<EMsg__AdminPwLogon> & EMsg__AdminPwLogon & 1017; // 1017
    static +AdminPwLogonResponse: Class<EMsg__AdminPwLogonResponse> &
      EMsg__AdminPwLogonResponse &
      1018; // 1018
    static +AdminSpew: Class<EMsg__AdminSpew> & EMsg__AdminSpew & 1019; // 1019
    static +AdminConsoleTitle: Class<EMsg__AdminConsoleTitle> &
      EMsg__AdminConsoleTitle &
      1020; // 1020
    static +AdminGCSpew: Class<EMsg__AdminGCSpew> & EMsg__AdminGCSpew & 1023; // 1023
    static +AdminGCCommand: Class<EMsg__AdminGCCommand> &
      EMsg__AdminGCCommand &
      1024; // 1024
    static +AdminGCGetCommandList: Class<EMsg__AdminGCGetCommandList> &
      EMsg__AdminGCGetCommandList &
      1025; // 1025
    static +AdminGCGetCommandListResponse: Class<EMsg__AdminGCGetCommandListResponse> &
      EMsg__AdminGCGetCommandListResponse &
      1026; // 1026
    static +FBSConnectionData: Class<EMsg__FBSConnectionData> &
      EMsg__FBSConnectionData &
      1027; // 1027
    static +AdminMsgSpew: Class<EMsg__AdminMsgSpew> & EMsg__AdminMsgSpew & 1028; // 1028
    static +BaseFBS: Class<EMsg__BaseFBS> & EMsg__BaseFBS & 1100; // 1100
    static +FBSReqVersion: Class<EMsg__FBSReqVersion> &
      EMsg__FBSReqVersion &
      1100; // 1100
    static +FBSVersionInfo: Class<EMsg__FBSVersionInfo> &
      EMsg__FBSVersionInfo &
      1101; // 1101
    static +FBSForceRefresh: Class<EMsg__FBSForceRefresh> &
      EMsg__FBSForceRefresh &
      1102; // 1102
    static +FBSForceBounce: Class<EMsg__FBSForceBounce> &
      EMsg__FBSForceBounce &
      1103; // 1103
    static +FBSDeployPackage: Class<EMsg__FBSDeployPackage> &
      EMsg__FBSDeployPackage &
      1104; // 1104
    static +FBSDeployResponse: Class<EMsg__FBSDeployResponse> &
      EMsg__FBSDeployResponse &
      1105; // 1105
    static +FBSUpdateBootstrapper: Class<EMsg__FBSUpdateBootstrapper> &
      EMsg__FBSUpdateBootstrapper &
      1106; // 1106
    static +FBSSetState: Class<EMsg__FBSSetState> & EMsg__FBSSetState & 1107; // 1107
    static +FBSApplyOSUpdates: Class<EMsg__FBSApplyOSUpdates> &
      EMsg__FBSApplyOSUpdates &
      1108; // 1108
    static +FBSRunCMDScript: Class<EMsg__FBSRunCMDScript> &
      EMsg__FBSRunCMDScript &
      1109; // 1109
    static +FBSRebootBox: Class<EMsg__FBSRebootBox> & EMsg__FBSRebootBox & 1110; // 1110
    static +FBSSetBigBrotherMode: Class<EMsg__FBSSetBigBrotherMode> &
      EMsg__FBSSetBigBrotherMode &
      1111; // 1111
    static +FBSMinidumpServer: Class<EMsg__FBSMinidumpServer> &
      EMsg__FBSMinidumpServer &
      1112; // 1112
    static +FBSSetShellCount_obsolete: Class<EMsg__FBSSetShellCount_obsolete> &
      EMsg__FBSSetShellCount_obsolete &
      1113; // 1113
    static +FBSDeployHotFixPackage: Class<EMsg__FBSDeployHotFixPackage> &
      EMsg__FBSDeployHotFixPackage &
      1114; // 1114
    static +FBSDeployHotFixResponse: Class<EMsg__FBSDeployHotFixResponse> &
      EMsg__FBSDeployHotFixResponse &
      1115; // 1115
    static +FBSDownloadHotFix: Class<EMsg__FBSDownloadHotFix> &
      EMsg__FBSDownloadHotFix &
      1116; // 1116
    static +FBSDownloadHotFixResponse: Class<EMsg__FBSDownloadHotFixResponse> &
      EMsg__FBSDownloadHotFixResponse &
      1117; // 1117
    static +FBSUpdateTargetConfigFile: Class<EMsg__FBSUpdateTargetConfigFile> &
      EMsg__FBSUpdateTargetConfigFile &
      1118; // 1118
    static +FBSApplyAccountCred: Class<EMsg__FBSApplyAccountCred> &
      EMsg__FBSApplyAccountCred &
      1119; // 1119
    static +FBSApplyAccountCredResponse: Class<EMsg__FBSApplyAccountCredResponse> &
      EMsg__FBSApplyAccountCredResponse &
      1120; // 1120
    static +FBSSetShellCount: Class<EMsg__FBSSetShellCount> &
      EMsg__FBSSetShellCount &
      1121; // 1121
    static +FBSTerminateShell: Class<EMsg__FBSTerminateShell> &
      EMsg__FBSTerminateShell &
      1122; // 1122
    static +FBSQueryGMForRequest: Class<EMsg__FBSQueryGMForRequest> &
      EMsg__FBSQueryGMForRequest &
      1123; // 1123
    static +FBSQueryGMResponse: Class<EMsg__FBSQueryGMResponse> &
      EMsg__FBSQueryGMResponse &
      1124; // 1124
    static +FBSTerminateZombies: Class<EMsg__FBSTerminateZombies> &
      EMsg__FBSTerminateZombies &
      1125; // 1125
    static +FBSInfoFromBootstrapper: Class<EMsg__FBSInfoFromBootstrapper> &
      EMsg__FBSInfoFromBootstrapper &
      1126; // 1126
    static +FBSRebootBoxResponse: Class<EMsg__FBSRebootBoxResponse> &
      EMsg__FBSRebootBoxResponse &
      1127; // 1127
    static +FBSBootstrapperPackageRequest: Class<EMsg__FBSBootstrapperPackageRequest> &
      EMsg__FBSBootstrapperPackageRequest &
      1128; // 1128
    static +FBSBootstrapperPackageResponse: Class<EMsg__FBSBootstrapperPackageResponse> &
      EMsg__FBSBootstrapperPackageResponse &
      1129; // 1129
    static +FBSBootstrapperGetPackageChunk: Class<EMsg__FBSBootstrapperGetPackageChunk> &
      EMsg__FBSBootstrapperGetPackageChunk &
      1130; // 1130
    static +FBSBootstrapperGetPackageChunkResponse: Class<EMsg__FBSBootstrapperGetPackageChunkResponse> &
      EMsg__FBSBootstrapperGetPackageChunkResponse &
      1131; // 1131
    static +FBSBootstrapperPackageTransferProgress: Class<EMsg__FBSBootstrapperPackageTransferProgress> &
      EMsg__FBSBootstrapperPackageTransferProgress &
      1132; // 1132
    static +FBSRestartBootstrapper: Class<EMsg__FBSRestartBootstrapper> &
      EMsg__FBSRestartBootstrapper &
      1133; // 1133
    static +BaseFileXfer: Class<EMsg__BaseFileXfer> & EMsg__BaseFileXfer & 1200; // 1200
    static +FileXferRequest: Class<EMsg__FileXferRequest> &
      EMsg__FileXferRequest &
      1200; // 1200
    static +FileXferResponse: Class<EMsg__FileXferResponse> &
      EMsg__FileXferResponse &
      1201; // 1201
    static +FileXferData: Class<EMsg__FileXferData> & EMsg__FileXferData & 1202; // 1202
    static +FileXferEnd: Class<EMsg__FileXferEnd> & EMsg__FileXferEnd & 1203; // 1203
    static +FileXferDataAck: Class<EMsg__FileXferDataAck> &
      EMsg__FileXferDataAck &
      1204; // 1204
    static +BaseChannelAuth: Class<EMsg__BaseChannelAuth> &
      EMsg__BaseChannelAuth &
      1300; // 1300
    static +ChannelAuthChallenge: Class<EMsg__ChannelAuthChallenge> &
      EMsg__ChannelAuthChallenge &
      1300; // 1300
    static +ChannelAuthResponse: Class<EMsg__ChannelAuthResponse> &
      EMsg__ChannelAuthResponse &
      1301; // 1301
    static +ChannelAuthResult: Class<EMsg__ChannelAuthResult> &
      EMsg__ChannelAuthResult &
      1302; // 1302
    static +ChannelEncryptRequest: Class<EMsg__ChannelEncryptRequest> &
      EMsg__ChannelEncryptRequest &
      1303; // 1303
    static +ChannelEncryptResponse: Class<EMsg__ChannelEncryptResponse> &
      EMsg__ChannelEncryptResponse &
      1304; // 1304
    static +ChannelEncryptResult: Class<EMsg__ChannelEncryptResult> &
      EMsg__ChannelEncryptResult &
      1305; // 1305
    static +BaseBS: Class<EMsg__BaseBS> & EMsg__BaseBS & 1400; // 1400
    static +BSPurchaseStart: Class<EMsg__BSPurchaseStart> &
      EMsg__BSPurchaseStart &
      1401; // 1401
    static +BSPurchaseResponse: Class<EMsg__BSPurchaseResponse> &
      EMsg__BSPurchaseResponse &
      1402; // 1402
    static +BSSettleNOVA: Class<EMsg__BSSettleNOVA> & EMsg__BSSettleNOVA & 1404; // 1404
    static +BSSettleComplete: Class<EMsg__BSSettleComplete> &
      EMsg__BSSettleComplete &
      1406; // 1406
    static +BSBannedRequest: Class<EMsg__BSBannedRequest> &
      EMsg__BSBannedRequest &
      1407; // 1407
    static +BSInitPayPalTxn: Class<EMsg__BSInitPayPalTxn> &
      EMsg__BSInitPayPalTxn &
      1408; // 1408
    static +BSInitPayPalTxnResponse: Class<EMsg__BSInitPayPalTxnResponse> &
      EMsg__BSInitPayPalTxnResponse &
      1409; // 1409
    static +BSGetPayPalUserInfo: Class<EMsg__BSGetPayPalUserInfo> &
      EMsg__BSGetPayPalUserInfo &
      1410; // 1410
    static +BSGetPayPalUserInfoResponse: Class<EMsg__BSGetPayPalUserInfoResponse> &
      EMsg__BSGetPayPalUserInfoResponse &
      1411; // 1411
    static +BSRefundTxn: Class<EMsg__BSRefundTxn> & EMsg__BSRefundTxn & 1413; // 1413
    static +BSRefundTxnResponse: Class<EMsg__BSRefundTxnResponse> &
      EMsg__BSRefundTxnResponse &
      1414; // 1414
    static +BSGetEvents: Class<EMsg__BSGetEvents> & EMsg__BSGetEvents & 1415; // 1415
    static +BSChaseRFRRequest: Class<EMsg__BSChaseRFRRequest> &
      EMsg__BSChaseRFRRequest &
      1416; // 1416
    static +BSPaymentInstrBan: Class<EMsg__BSPaymentInstrBan> &
      EMsg__BSPaymentInstrBan &
      1417; // 1417
    static +BSPaymentInstrBanResponse: Class<EMsg__BSPaymentInstrBanResponse> &
      EMsg__BSPaymentInstrBanResponse &
      1418; // 1418
    static +BSProcessGCReports: Class<EMsg__BSProcessGCReports> &
      EMsg__BSProcessGCReports &
      1419; // 1419
    static +BSProcessPPReports: Class<EMsg__BSProcessPPReports> &
      EMsg__BSProcessPPReports &
      1420; // 1420
    static +BSInitGCBankXferTxn: Class<EMsg__BSInitGCBankXferTxn> &
      EMsg__BSInitGCBankXferTxn &
      1421; // 1421
    static +BSInitGCBankXferTxnResponse: Class<EMsg__BSInitGCBankXferTxnResponse> &
      EMsg__BSInitGCBankXferTxnResponse &
      1422; // 1422
    static +BSQueryGCBankXferTxn: Class<EMsg__BSQueryGCBankXferTxn> &
      EMsg__BSQueryGCBankXferTxn &
      1423; // 1423
    static +BSQueryGCBankXferTxnResponse: Class<EMsg__BSQueryGCBankXferTxnResponse> &
      EMsg__BSQueryGCBankXferTxnResponse &
      1424; // 1424
    static +BSCommitGCTxn: Class<EMsg__BSCommitGCTxn> &
      EMsg__BSCommitGCTxn &
      1425; // 1425
    static +BSQueryTransactionStatus: Class<EMsg__BSQueryTransactionStatus> &
      EMsg__BSQueryTransactionStatus &
      1426; // 1426
    static +BSQueryTransactionStatusResponse: Class<EMsg__BSQueryTransactionStatusResponse> &
      EMsg__BSQueryTransactionStatusResponse &
      1427; // 1427
    static +BSQueryCBOrderStatus: Class<EMsg__BSQueryCBOrderStatus> &
      EMsg__BSQueryCBOrderStatus &
      1428; // 1428
    static +BSQueryCBOrderStatusResponse: Class<EMsg__BSQueryCBOrderStatusResponse> &
      EMsg__BSQueryCBOrderStatusResponse &
      1429; // 1429
    static +BSRunRedFlagReport: Class<EMsg__BSRunRedFlagReport> &
      EMsg__BSRunRedFlagReport &
      1430; // 1430
    static +BSQueryPaymentInstUsage: Class<EMsg__BSQueryPaymentInstUsage> &
      EMsg__BSQueryPaymentInstUsage &
      1431; // 1431
    static +BSQueryPaymentInstResponse: Class<EMsg__BSQueryPaymentInstResponse> &
      EMsg__BSQueryPaymentInstResponse &
      1432; // 1432
    static +BSQueryTxnExtendedInfo: Class<EMsg__BSQueryTxnExtendedInfo> &
      EMsg__BSQueryTxnExtendedInfo &
      1433; // 1433
    static +BSQueryTxnExtendedInfoResponse: Class<EMsg__BSQueryTxnExtendedInfoResponse> &
      EMsg__BSQueryTxnExtendedInfoResponse &
      1434; // 1434
    static +BSUpdateConversionRates: Class<EMsg__BSUpdateConversionRates> &
      EMsg__BSUpdateConversionRates &
      1435; // 1435
    static +BSProcessUSBankReports: Class<EMsg__BSProcessUSBankReports> &
      EMsg__BSProcessUSBankReports &
      1436; // 1436
    static +BSPurchaseRunFraudChecks: Class<EMsg__BSPurchaseRunFraudChecks> &
      EMsg__BSPurchaseRunFraudChecks &
      1437; // 1437
    static +BSPurchaseRunFraudChecksResponse: Class<EMsg__BSPurchaseRunFraudChecksResponse> &
      EMsg__BSPurchaseRunFraudChecksResponse &
      1438; // 1438
    static +BSStartShippingJobs: Class<EMsg__BSStartShippingJobs> &
      EMsg__BSStartShippingJobs &
      1439; // 1439
    static +BSQueryBankInformation: Class<EMsg__BSQueryBankInformation> &
      EMsg__BSQueryBankInformation &
      1440; // 1440
    static +BSQueryBankInformationResponse: Class<EMsg__BSQueryBankInformationResponse> &
      EMsg__BSQueryBankInformationResponse &
      1441; // 1441
    static +BSValidateXsollaSignature: Class<EMsg__BSValidateXsollaSignature> &
      EMsg__BSValidateXsollaSignature &
      1445; // 1445
    static +BSValidateXsollaSignatureResponse: Class<EMsg__BSValidateXsollaSignatureResponse> &
      EMsg__BSValidateXsollaSignatureResponse &
      1446; // 1446
    static +BSQiwiWalletInvoice: Class<EMsg__BSQiwiWalletInvoice> &
      EMsg__BSQiwiWalletInvoice &
      1448; // 1448
    static +BSQiwiWalletInvoiceResponse: Class<EMsg__BSQiwiWalletInvoiceResponse> &
      EMsg__BSQiwiWalletInvoiceResponse &
      1449; // 1449
    static +BSUpdateInventoryFromProPack: Class<EMsg__BSUpdateInventoryFromProPack> &
      EMsg__BSUpdateInventoryFromProPack &
      1450; // 1450
    static +BSUpdateInventoryFromProPackResponse: Class<EMsg__BSUpdateInventoryFromProPackResponse> &
      EMsg__BSUpdateInventoryFromProPackResponse &
      1451; // 1451
    static +BSSendShippingRequest: Class<EMsg__BSSendShippingRequest> &
      EMsg__BSSendShippingRequest &
      1452; // 1452
    static +BSSendShippingRequestResponse: Class<EMsg__BSSendShippingRequestResponse> &
      EMsg__BSSendShippingRequestResponse &
      1453; // 1453
    static +BSGetProPackOrderStatus: Class<EMsg__BSGetProPackOrderStatus> &
      EMsg__BSGetProPackOrderStatus &
      1454; // 1454
    static +BSGetProPackOrderStatusResponse: Class<EMsg__BSGetProPackOrderStatusResponse> &
      EMsg__BSGetProPackOrderStatusResponse &
      1455; // 1455
    static +BSCheckJobRunning: Class<EMsg__BSCheckJobRunning> &
      EMsg__BSCheckJobRunning &
      1456; // 1456
    static +BSCheckJobRunningResponse: Class<EMsg__BSCheckJobRunningResponse> &
      EMsg__BSCheckJobRunningResponse &
      1457; // 1457
    static +BSResetPackagePurchaseRateLimit: Class<EMsg__BSResetPackagePurchaseRateLimit> &
      EMsg__BSResetPackagePurchaseRateLimit &
      1458; // 1458
    static +BSResetPackagePurchaseRateLimitResponse: Class<EMsg__BSResetPackagePurchaseRateLimitResponse> &
      EMsg__BSResetPackagePurchaseRateLimitResponse &
      1459; // 1459
    static +BSUpdatePaymentData: Class<EMsg__BSUpdatePaymentData> &
      EMsg__BSUpdatePaymentData &
      1460; // 1460
    static +BSUpdatePaymentDataResponse: Class<EMsg__BSUpdatePaymentDataResponse> &
      EMsg__BSUpdatePaymentDataResponse &
      1461; // 1461
    static +BSGetBillingAddress: Class<EMsg__BSGetBillingAddress> &
      EMsg__BSGetBillingAddress &
      1462; // 1462
    static +BSGetBillingAddressResponse: Class<EMsg__BSGetBillingAddressResponse> &
      EMsg__BSGetBillingAddressResponse &
      1463; // 1463
    static +BSGetCreditCardInfo: Class<EMsg__BSGetCreditCardInfo> &
      EMsg__BSGetCreditCardInfo &
      1464; // 1464
    static +BSGetCreditCardInfoResponse: Class<EMsg__BSGetCreditCardInfoResponse> &
      EMsg__BSGetCreditCardInfoResponse &
      1465; // 1465
    static +BSRemoveExpiredPaymentData: Class<EMsg__BSRemoveExpiredPaymentData> &
      EMsg__BSRemoveExpiredPaymentData &
      1468; // 1468
    static +BSRemoveExpiredPaymentDataResponse: Class<EMsg__BSRemoveExpiredPaymentDataResponse> &
      EMsg__BSRemoveExpiredPaymentDataResponse &
      1469; // 1469
    static +BSConvertToCurrentKeys: Class<EMsg__BSConvertToCurrentKeys> &
      EMsg__BSConvertToCurrentKeys &
      1470; // 1470
    static +BSConvertToCurrentKeysResponse: Class<EMsg__BSConvertToCurrentKeysResponse> &
      EMsg__BSConvertToCurrentKeysResponse &
      1471; // 1471
    static +BSInitPurchase: Class<EMsg__BSInitPurchase> &
      EMsg__BSInitPurchase &
      1472; // 1472
    static +BSInitPurchaseResponse: Class<EMsg__BSInitPurchaseResponse> &
      EMsg__BSInitPurchaseResponse &
      1473; // 1473
    static +BSCompletePurchase: Class<EMsg__BSCompletePurchase> &
      EMsg__BSCompletePurchase &
      1474; // 1474
    static +BSCompletePurchaseResponse: Class<EMsg__BSCompletePurchaseResponse> &
      EMsg__BSCompletePurchaseResponse &
      1475; // 1475
    static +BSPruneCardUsageStats: Class<EMsg__BSPruneCardUsageStats> &
      EMsg__BSPruneCardUsageStats &
      1476; // 1476
    static +BSPruneCardUsageStatsResponse: Class<EMsg__BSPruneCardUsageStatsResponse> &
      EMsg__BSPruneCardUsageStatsResponse &
      1477; // 1477
    static +BSStoreBankInformation: Class<EMsg__BSStoreBankInformation> &
      EMsg__BSStoreBankInformation &
      1478; // 1478
    static +BSStoreBankInformationResponse: Class<EMsg__BSStoreBankInformationResponse> &
      EMsg__BSStoreBankInformationResponse &
      1479; // 1479
    static +BSVerifyPOSAKey: Class<EMsg__BSVerifyPOSAKey> &
      EMsg__BSVerifyPOSAKey &
      1480; // 1480
    static +BSVerifyPOSAKeyResponse: Class<EMsg__BSVerifyPOSAKeyResponse> &
      EMsg__BSVerifyPOSAKeyResponse &
      1481; // 1481
    static +BSReverseRedeemPOSAKey: Class<EMsg__BSReverseRedeemPOSAKey> &
      EMsg__BSReverseRedeemPOSAKey &
      1482; // 1482
    static +BSReverseRedeemPOSAKeyResponse: Class<EMsg__BSReverseRedeemPOSAKeyResponse> &
      EMsg__BSReverseRedeemPOSAKeyResponse &
      1483; // 1483
    static +BSQueryFindCreditCard: Class<EMsg__BSQueryFindCreditCard> &
      EMsg__BSQueryFindCreditCard &
      1484; // 1484
    static +BSQueryFindCreditCardResponse: Class<EMsg__BSQueryFindCreditCardResponse> &
      EMsg__BSQueryFindCreditCardResponse &
      1485; // 1485
    static +BSStatusInquiryPOSAKey: Class<EMsg__BSStatusInquiryPOSAKey> &
      EMsg__BSStatusInquiryPOSAKey &
      1486; // 1486
    static +BSStatusInquiryPOSAKeyResponse: Class<EMsg__BSStatusInquiryPOSAKeyResponse> &
      EMsg__BSStatusInquiryPOSAKeyResponse &
      1487; // 1487
    static +BSValidateMoPaySignature: Class<EMsg__BSValidateMoPaySignature> &
      EMsg__BSValidateMoPaySignature &
      1488; // 1488
    static +BSValidateMoPaySignatureResponse: Class<EMsg__BSValidateMoPaySignatureResponse> &
      EMsg__BSValidateMoPaySignatureResponse &
      1489; // 1489
    static +BSMoPayConfirmProductDelivery: Class<EMsg__BSMoPayConfirmProductDelivery> &
      EMsg__BSMoPayConfirmProductDelivery &
      1490; // 1490
    static +BSMoPayConfirmProductDeliveryResponse: Class<EMsg__BSMoPayConfirmProductDeliveryResponse> &
      EMsg__BSMoPayConfirmProductDeliveryResponse &
      1491; // 1491
    static +BSGenerateMoPayMD5: Class<EMsg__BSGenerateMoPayMD5> &
      EMsg__BSGenerateMoPayMD5 &
      1492; // 1492
    static +BSGenerateMoPayMD5Response: Class<EMsg__BSGenerateMoPayMD5Response> &
      EMsg__BSGenerateMoPayMD5Response &
      1493; // 1493
    static +BSBoaCompraConfirmProductDelivery: Class<EMsg__BSBoaCompraConfirmProductDelivery> &
      EMsg__BSBoaCompraConfirmProductDelivery &
      1494; // 1494
    static +BSBoaCompraConfirmProductDeliveryResponse: Class<EMsg__BSBoaCompraConfirmProductDeliveryResponse> &
      EMsg__BSBoaCompraConfirmProductDeliveryResponse &
      1495; // 1495
    static +BSGenerateBoaCompraMD5: Class<EMsg__BSGenerateBoaCompraMD5> &
      EMsg__BSGenerateBoaCompraMD5 &
      1496; // 1496
    static +BSGenerateBoaCompraMD5Response: Class<EMsg__BSGenerateBoaCompraMD5Response> &
      EMsg__BSGenerateBoaCompraMD5Response &
      1497; // 1497
    static +BSCommitWPTxn: Class<EMsg__BSCommitWPTxn> &
      EMsg__BSCommitWPTxn &
      1498; // 1498
    static +BaseATS: Class<EMsg__BaseATS> & EMsg__BaseATS & 1500; // 1500
    static +ATSStartStressTest: Class<EMsg__ATSStartStressTest> &
      EMsg__ATSStartStressTest &
      1501; // 1501
    static +ATSStopStressTest: Class<EMsg__ATSStopStressTest> &
      EMsg__ATSStopStressTest &
      1502; // 1502
    static +ATSRunFailServerTest: Class<EMsg__ATSRunFailServerTest> &
      EMsg__ATSRunFailServerTest &
      1503; // 1503
    static +ATSUFSPerfTestTask: Class<EMsg__ATSUFSPerfTestTask> &
      EMsg__ATSUFSPerfTestTask &
      1504; // 1504
    static +ATSUFSPerfTestResponse: Class<EMsg__ATSUFSPerfTestResponse> &
      EMsg__ATSUFSPerfTestResponse &
      1505; // 1505
    static +ATSCycleTCM: Class<EMsg__ATSCycleTCM> & EMsg__ATSCycleTCM & 1506; // 1506
    static +ATSInitDRMSStressTest: Class<EMsg__ATSInitDRMSStressTest> &
      EMsg__ATSInitDRMSStressTest &
      1507; // 1507
    static +ATSCallTest: Class<EMsg__ATSCallTest> & EMsg__ATSCallTest & 1508; // 1508
    static +ATSCallTestReply: Class<EMsg__ATSCallTestReply> &
      EMsg__ATSCallTestReply &
      1509; // 1509
    static +ATSStartExternalStress: Class<EMsg__ATSStartExternalStress> &
      EMsg__ATSStartExternalStress &
      1510; // 1510
    static +ATSExternalStressJobStart: Class<EMsg__ATSExternalStressJobStart> &
      EMsg__ATSExternalStressJobStart &
      1511; // 1511
    static +ATSExternalStressJobQueued: Class<EMsg__ATSExternalStressJobQueued> &
      EMsg__ATSExternalStressJobQueued &
      1512; // 1512
    static +ATSExternalStressJobRunning: Class<EMsg__ATSExternalStressJobRunning> &
      EMsg__ATSExternalStressJobRunning &
      1513; // 1513
    static +ATSExternalStressJobStopped: Class<EMsg__ATSExternalStressJobStopped> &
      EMsg__ATSExternalStressJobStopped &
      1514; // 1514
    static +ATSExternalStressJobStopAll: Class<EMsg__ATSExternalStressJobStopAll> &
      EMsg__ATSExternalStressJobStopAll &
      1515; // 1515
    static +ATSExternalStressActionResult: Class<EMsg__ATSExternalStressActionResult> &
      EMsg__ATSExternalStressActionResult &
      1516; // 1516
    static +ATSStarted: Class<EMsg__ATSStarted> & EMsg__ATSStarted & 1517; // 1517
    static +ATSCSPerfTestTask: Class<EMsg__ATSCSPerfTestTask> &
      EMsg__ATSCSPerfTestTask &
      1518; // 1518
    static +ATSCSPerfTestResponse: Class<EMsg__ATSCSPerfTestResponse> &
      EMsg__ATSCSPerfTestResponse &
      1519; // 1519
    static +BaseDP: Class<EMsg__BaseDP> & EMsg__BaseDP & 1600; // 1600
    static +DPSetPublishingState: Class<EMsg__DPSetPublishingState> &
      EMsg__DPSetPublishingState &
      1601; // 1601
    static +DPGamePlayedStats: Class<EMsg__DPGamePlayedStats> &
      EMsg__DPGamePlayedStats &
      1602; // 1602
    static +DPUniquePlayersStat: Class<EMsg__DPUniquePlayersStat> &
      EMsg__DPUniquePlayersStat &
      1603; // 1603
    static +DPStreamingUniquePlayersStat: Class<EMsg__DPStreamingUniquePlayersStat> &
      EMsg__DPStreamingUniquePlayersStat &
      1604; // 1604
    static +DPVacInfractionStats: Class<EMsg__DPVacInfractionStats> &
      EMsg__DPVacInfractionStats &
      1605; // 1605
    static +DPVacBanStats: Class<EMsg__DPVacBanStats> &
      EMsg__DPVacBanStats &
      1606; // 1606
    static +DPBlockingStats: Class<EMsg__DPBlockingStats> &
      EMsg__DPBlockingStats &
      1607; // 1607
    static +DPNatTraversalStats: Class<EMsg__DPNatTraversalStats> &
      EMsg__DPNatTraversalStats &
      1608; // 1608
    static +DPSteamUsageEvent: Class<EMsg__DPSteamUsageEvent> &
      EMsg__DPSteamUsageEvent &
      1609; // 1609
    static +DPVacCertBanStats: Class<EMsg__DPVacCertBanStats> &
      EMsg__DPVacCertBanStats &
      1610; // 1610
    static +DPVacCafeBanStats: Class<EMsg__DPVacCafeBanStats> &
      EMsg__DPVacCafeBanStats &
      1611; // 1611
    static +DPCloudStats: Class<EMsg__DPCloudStats> & EMsg__DPCloudStats & 1612; // 1612
    static +DPAchievementStats: Class<EMsg__DPAchievementStats> &
      EMsg__DPAchievementStats &
      1613; // 1613
    static +DPAccountCreationStats: Class<EMsg__DPAccountCreationStats> &
      EMsg__DPAccountCreationStats &
      1614; // 1614
    static +DPGetPlayerCount: Class<EMsg__DPGetPlayerCount> &
      EMsg__DPGetPlayerCount &
      1615; // 1615
    static +DPGetPlayerCountResponse: Class<EMsg__DPGetPlayerCountResponse> &
      EMsg__DPGetPlayerCountResponse &
      1616; // 1616
    static +DPGameServersPlayersStats: Class<EMsg__DPGameServersPlayersStats> &
      EMsg__DPGameServersPlayersStats &
      1617; // 1617
    static +DPDownloadRateStatistics: Class<EMsg__DPDownloadRateStatistics> &
      EMsg__DPDownloadRateStatistics &
      1618; // 1618
    static +DPFacebookStatistics: Class<EMsg__DPFacebookStatistics> &
      EMsg__DPFacebookStatistics &
      1619; // 1619
    static +ClientDPCheckSpecialSurvey: Class<EMsg__ClientDPCheckSpecialSurvey> &
      EMsg__ClientDPCheckSpecialSurvey &
      1620; // 1620
    static +ClientDPCheckSpecialSurveyResponse: Class<EMsg__ClientDPCheckSpecialSurveyResponse> &
      EMsg__ClientDPCheckSpecialSurveyResponse &
      1621; // 1621
    static +ClientDPSendSpecialSurveyResponse: Class<EMsg__ClientDPSendSpecialSurveyResponse> &
      EMsg__ClientDPSendSpecialSurveyResponse &
      1622; // 1622
    static +ClientDPSendSpecialSurveyResponseReply: Class<EMsg__ClientDPSendSpecialSurveyResponseReply> &
      EMsg__ClientDPSendSpecialSurveyResponseReply &
      1623; // 1623
    static +DPStoreSaleStatistics: Class<EMsg__DPStoreSaleStatistics> &
      EMsg__DPStoreSaleStatistics &
      1624; // 1624
    static +ClientDPUpdateAppJobReport: Class<EMsg__ClientDPUpdateAppJobReport> &
      EMsg__ClientDPUpdateAppJobReport &
      1625; // 1625
    static +ClientDPSteam2AppStarted: Class<EMsg__ClientDPSteam2AppStarted> &
      EMsg__ClientDPSteam2AppStarted &
      1627; // 1627
    static +DPUpdateContentEvent: Class<EMsg__DPUpdateContentEvent> &
      EMsg__DPUpdateContentEvent &
      1626; // 1626
    static +DPPartnerMicroTxns: Class<EMsg__DPPartnerMicroTxns> &
      EMsg__DPPartnerMicroTxns &
      1628; // 1628
    static +DPPartnerMicroTxnsResponse: Class<EMsg__DPPartnerMicroTxnsResponse> &
      EMsg__DPPartnerMicroTxnsResponse &
      1629; // 1629
    static +ClientDPContentStatsReport: Class<EMsg__ClientDPContentStatsReport> &
      EMsg__ClientDPContentStatsReport &
      1630; // 1630
    static +DPVRUniquePlayersStat: Class<EMsg__DPVRUniquePlayersStat> &
      EMsg__DPVRUniquePlayersStat &
      1631; // 1631
    static +BaseCM: Class<EMsg__BaseCM> & EMsg__BaseCM & 1700; // 1700
    static +CMSetAllowState: Class<EMsg__CMSetAllowState> &
      EMsg__CMSetAllowState &
      1701; // 1701
    static +CMSpewAllowState: Class<EMsg__CMSpewAllowState> &
      EMsg__CMSpewAllowState &
      1702; // 1702
    static +CMAppInfoResponseDeprecated: Class<EMsg__CMAppInfoResponseDeprecated> &
      EMsg__CMAppInfoResponseDeprecated &
      1703; // 1703
    static +BaseDSS: Class<EMsg__BaseDSS> & EMsg__BaseDSS & 1800; // 1800
    static +DSSNewFile: Class<EMsg__DSSNewFile> & EMsg__DSSNewFile & 1801; // 1801
    static +DSSCurrentFileList: Class<EMsg__DSSCurrentFileList> &
      EMsg__DSSCurrentFileList &
      1802; // 1802
    static +DSSSynchList: Class<EMsg__DSSSynchList> & EMsg__DSSSynchList & 1803; // 1803
    static +DSSSynchListResponse: Class<EMsg__DSSSynchListResponse> &
      EMsg__DSSSynchListResponse &
      1804; // 1804
    static +DSSSynchSubscribe: Class<EMsg__DSSSynchSubscribe> &
      EMsg__DSSSynchSubscribe &
      1805; // 1805
    static +DSSSynchUnsubscribe: Class<EMsg__DSSSynchUnsubscribe> &
      EMsg__DSSSynchUnsubscribe &
      1806; // 1806
    static +BaseEPM: Class<EMsg__BaseEPM> & EMsg__BaseEPM & 1900; // 1900
    static +EPMStartProcess: Class<EMsg__EPMStartProcess> &
      EMsg__EPMStartProcess &
      1901; // 1901
    static +EPMStopProcess: Class<EMsg__EPMStopProcess> &
      EMsg__EPMStopProcess &
      1902; // 1902
    static +EPMRestartProcess: Class<EMsg__EPMRestartProcess> &
      EMsg__EPMRestartProcess &
      1903; // 1903
    static +BaseGC: Class<EMsg__BaseGC> & EMsg__BaseGC & 2200; // 2200
    static +GCSendClient: Class<EMsg__GCSendClient> & EMsg__GCSendClient & 2200; // 2200
    static +AMRelayToGC: Class<EMsg__AMRelayToGC> & EMsg__AMRelayToGC & 2201; // 2201
    static +GCUpdatePlayedState: Class<EMsg__GCUpdatePlayedState> &
      EMsg__GCUpdatePlayedState &
      2202; // 2202
    static +GCCmdRevive: Class<EMsg__GCCmdRevive> & EMsg__GCCmdRevive & 2203; // 2203
    static +GCCmdBounce: Class<EMsg__GCCmdBounce> & EMsg__GCCmdBounce & 2204; // 2204
    static +GCCmdForceBounce: Class<EMsg__GCCmdForceBounce> &
      EMsg__GCCmdForceBounce &
      2205; // 2205
    static +GCCmdDown: Class<EMsg__GCCmdDown> & EMsg__GCCmdDown & 2206; // 2206
    static +GCCmdDeploy: Class<EMsg__GCCmdDeploy> & EMsg__GCCmdDeploy & 2207; // 2207
    static +GCCmdDeployResponse: Class<EMsg__GCCmdDeployResponse> &
      EMsg__GCCmdDeployResponse &
      2208; // 2208
    static +GCCmdSwitch: Class<EMsg__GCCmdSwitch> & EMsg__GCCmdSwitch & 2209; // 2209
    static +AMRefreshSessions: Class<EMsg__AMRefreshSessions> &
      EMsg__AMRefreshSessions &
      2210; // 2210
    static +GCUpdateGSState: Class<EMsg__GCUpdateGSState> &
      EMsg__GCUpdateGSState &
      2211; // 2211
    static +GCAchievementAwarded: Class<EMsg__GCAchievementAwarded> &
      EMsg__GCAchievementAwarded &
      2212; // 2212
    static +GCSystemMessage: Class<EMsg__GCSystemMessage> &
      EMsg__GCSystemMessage &
      2213; // 2213
    static +GCValidateSession: Class<EMsg__GCValidateSession> &
      EMsg__GCValidateSession &
      2214; // 2214
    static +GCValidateSessionResponse: Class<EMsg__GCValidateSessionResponse> &
      EMsg__GCValidateSessionResponse &
      2215; // 2215
    static +GCCmdStatus: Class<EMsg__GCCmdStatus> & EMsg__GCCmdStatus & 2216; // 2216
    static +GCRegisterWebInterfaces: Class<EMsg__GCRegisterWebInterfaces> &
      EMsg__GCRegisterWebInterfaces &
      2217; // 2217
    static +GCRegisterWebInterfaces_Deprecated: Class<EMsg__GCRegisterWebInterfaces_Deprecated> &
      EMsg__GCRegisterWebInterfaces_Deprecated &
      2217; // 2217
    static +GCGetAccountDetails: Class<EMsg__GCGetAccountDetails> &
      EMsg__GCGetAccountDetails &
      2218; // 2218
    static +GCGetAccountDetails_DEPRECATED: Class<EMsg__GCGetAccountDetails_DEPRECATED> &
      EMsg__GCGetAccountDetails_DEPRECATED &
      2218; // 2218
    static +GCInterAppMessage: Class<EMsg__GCInterAppMessage> &
      EMsg__GCInterAppMessage &
      2219; // 2219
    static +GCGetEmailTemplate: Class<EMsg__GCGetEmailTemplate> &
      EMsg__GCGetEmailTemplate &
      2220; // 2220
    static +GCGetEmailTemplateResponse: Class<EMsg__GCGetEmailTemplateResponse> &
      EMsg__GCGetEmailTemplateResponse &
      2221; // 2221
    static +ISRelayToGCH: Class<EMsg__ISRelayToGCH> & EMsg__ISRelayToGCH & 2222; // 2222
    static +GCHRelay: Class<EMsg__GCHRelay> & EMsg__GCHRelay & 2222; // 2222
    static +GCHRelayClientToIS: Class<EMsg__GCHRelayClientToIS> &
      EMsg__GCHRelayClientToIS &
      2223; // 2223
    static +GCHRelayToClient: Class<EMsg__GCHRelayToClient> &
      EMsg__GCHRelayToClient &
      2223; // 2223
    static +GCHUpdateSession: Class<EMsg__GCHUpdateSession> &
      EMsg__GCHUpdateSession &
      2224; // 2224
    static +GCHRequestUpdateSession: Class<EMsg__GCHRequestUpdateSession> &
      EMsg__GCHRequestUpdateSession &
      2225; // 2225
    static +GCHRequestStatus: Class<EMsg__GCHRequestStatus> &
      EMsg__GCHRequestStatus &
      2226; // 2226
    static +GCHRequestStatusResponse: Class<EMsg__GCHRequestStatusResponse> &
      EMsg__GCHRequestStatusResponse &
      2227; // 2227
    static +GCHAccountVacStatusChange: Class<EMsg__GCHAccountVacStatusChange> &
      EMsg__GCHAccountVacStatusChange &
      2228; // 2228
    static +GCHSpawnGC: Class<EMsg__GCHSpawnGC> & EMsg__GCHSpawnGC & 2229; // 2229
    static +GCHSpawnGCResponse: Class<EMsg__GCHSpawnGCResponse> &
      EMsg__GCHSpawnGCResponse &
      2230; // 2230
    static +GCHKillGC: Class<EMsg__GCHKillGC> & EMsg__GCHKillGC & 2231; // 2231
    static +GCHKillGCResponse: Class<EMsg__GCHKillGCResponse> &
      EMsg__GCHKillGCResponse &
      2232; // 2232
    static +GCHAccountTradeBanStatusChange: Class<EMsg__GCHAccountTradeBanStatusChange> &
      EMsg__GCHAccountTradeBanStatusChange &
      2233; // 2233
    static +GCHAccountLockStatusChange: Class<EMsg__GCHAccountLockStatusChange> &
      EMsg__GCHAccountLockStatusChange &
      2234; // 2234
    static +GCHVacVerificationChange: Class<EMsg__GCHVacVerificationChange> &
      EMsg__GCHVacVerificationChange &
      2235; // 2235
    static +GCHAccountPhoneNumberChange: Class<EMsg__GCHAccountPhoneNumberChange> &
      EMsg__GCHAccountPhoneNumberChange &
      2236; // 2236
    static +GCHAccountTwoFactorChange: Class<EMsg__GCHAccountTwoFactorChange> &
      EMsg__GCHAccountTwoFactorChange &
      2237; // 2237
    static +BaseP2P: Class<EMsg__BaseP2P> & EMsg__BaseP2P & 2500; // 2500
    static +P2PIntroducerMessage: Class<EMsg__P2PIntroducerMessage> &
      EMsg__P2PIntroducerMessage &
      2502; // 2502
    static +BaseSM: Class<EMsg__BaseSM> & EMsg__BaseSM & 2900; // 2900
    static +SMExpensiveReport: Class<EMsg__SMExpensiveReport> &
      EMsg__SMExpensiveReport &
      2902; // 2902
    static +SMHourlyReport: Class<EMsg__SMHourlyReport> &
      EMsg__SMHourlyReport &
      2903; // 2903
    static +SMFishingReport: Class<EMsg__SMFishingReport> &
      EMsg__SMFishingReport &
      2904; // 2904
    static +SMPartitionRenames: Class<EMsg__SMPartitionRenames> &
      EMsg__SMPartitionRenames &
      2905; // 2905
    static +SMMonitorSpace: Class<EMsg__SMMonitorSpace> &
      EMsg__SMMonitorSpace &
      2906; // 2906
    static +SMGetSchemaConversionResults: Class<EMsg__SMGetSchemaConversionResults> &
      EMsg__SMGetSchemaConversionResults &
      2907; // 2907
    static +SMGetSchemaConversionResultsResponse: Class<EMsg__SMGetSchemaConversionResultsResponse> &
      EMsg__SMGetSchemaConversionResultsResponse &
      2908; // 2908
    static +BaseTest: Class<EMsg__BaseTest> & EMsg__BaseTest & 3000; // 3000
    static +FailServer: Class<EMsg__FailServer> & EMsg__FailServer & 3000; // 3000
    static +JobHeartbeatTest: Class<EMsg__JobHeartbeatTest> &
      EMsg__JobHeartbeatTest &
      3001; // 3001
    static +JobHeartbeatTestResponse: Class<EMsg__JobHeartbeatTestResponse> &
      EMsg__JobHeartbeatTestResponse &
      3002; // 3002
    static +BaseFTSRange: Class<EMsg__BaseFTSRange> & EMsg__BaseFTSRange & 3100; // 3100
    static +FTSGetBrowseCounts: Class<EMsg__FTSGetBrowseCounts> &
      EMsg__FTSGetBrowseCounts &
      3101; // 3101
    static +FTSGetBrowseCountsResponse: Class<EMsg__FTSGetBrowseCountsResponse> &
      EMsg__FTSGetBrowseCountsResponse &
      3102; // 3102
    static +FTSBrowseClans: Class<EMsg__FTSBrowseClans> &
      EMsg__FTSBrowseClans &
      3103; // 3103
    static +FTSBrowseClansResponse: Class<EMsg__FTSBrowseClansResponse> &
      EMsg__FTSBrowseClansResponse &
      3104; // 3104
    static +FTSSearchClansByLocation: Class<EMsg__FTSSearchClansByLocation> &
      EMsg__FTSSearchClansByLocation &
      3105; // 3105
    static +FTSSearchClansByLocationResponse: Class<EMsg__FTSSearchClansByLocationResponse> &
      EMsg__FTSSearchClansByLocationResponse &
      3106; // 3106
    static +FTSSearchPlayersByLocation: Class<EMsg__FTSSearchPlayersByLocation> &
      EMsg__FTSSearchPlayersByLocation &
      3107; // 3107
    static +FTSSearchPlayersByLocationResponse: Class<EMsg__FTSSearchPlayersByLocationResponse> &
      EMsg__FTSSearchPlayersByLocationResponse &
      3108; // 3108
    static +FTSClanDeleted: Class<EMsg__FTSClanDeleted> &
      EMsg__FTSClanDeleted &
      3109; // 3109
    static +FTSSearch: Class<EMsg__FTSSearch> & EMsg__FTSSearch & 3110; // 3110
    static +FTSSearchResponse: Class<EMsg__FTSSearchResponse> &
      EMsg__FTSSearchResponse &
      3111; // 3111
    static +FTSSearchStatus: Class<EMsg__FTSSearchStatus> &
      EMsg__FTSSearchStatus &
      3112; // 3112
    static +FTSSearchStatusResponse: Class<EMsg__FTSSearchStatusResponse> &
      EMsg__FTSSearchStatusResponse &
      3113; // 3113
    static +FTSGetGSPlayStats: Class<EMsg__FTSGetGSPlayStats> &
      EMsg__FTSGetGSPlayStats &
      3114; // 3114
    static +FTSGetGSPlayStatsResponse: Class<EMsg__FTSGetGSPlayStatsResponse> &
      EMsg__FTSGetGSPlayStatsResponse &
      3115; // 3115
    static +FTSGetGSPlayStatsForServer: Class<EMsg__FTSGetGSPlayStatsForServer> &
      EMsg__FTSGetGSPlayStatsForServer &
      3116; // 3116
    static +FTSGetGSPlayStatsForServerResponse: Class<EMsg__FTSGetGSPlayStatsForServerResponse> &
      EMsg__FTSGetGSPlayStatsForServerResponse &
      3117; // 3117
    static +FTSReportIPUpdates: Class<EMsg__FTSReportIPUpdates> &
      EMsg__FTSReportIPUpdates &
      3118; // 3118
    static +BaseCCSRange: Class<EMsg__BaseCCSRange> & EMsg__BaseCCSRange & 3150; // 3150
    static +CCSGetComments: Class<EMsg__CCSGetComments> &
      EMsg__CCSGetComments &
      3151; // 3151
    static +CCSGetCommentsResponse: Class<EMsg__CCSGetCommentsResponse> &
      EMsg__CCSGetCommentsResponse &
      3152; // 3152
    static +CCSAddComment: Class<EMsg__CCSAddComment> &
      EMsg__CCSAddComment &
      3153; // 3153
    static +CCSAddCommentResponse: Class<EMsg__CCSAddCommentResponse> &
      EMsg__CCSAddCommentResponse &
      3154; // 3154
    static +CCSDeleteComment: Class<EMsg__CCSDeleteComment> &
      EMsg__CCSDeleteComment &
      3155; // 3155
    static +CCSDeleteCommentResponse: Class<EMsg__CCSDeleteCommentResponse> &
      EMsg__CCSDeleteCommentResponse &
      3156; // 3156
    static +CCSPreloadComments: Class<EMsg__CCSPreloadComments> &
      EMsg__CCSPreloadComments &
      3157; // 3157
    static +CCSNotifyCommentCount: Class<EMsg__CCSNotifyCommentCount> &
      EMsg__CCSNotifyCommentCount &
      3158; // 3158
    static +CCSGetCommentsForNews: Class<EMsg__CCSGetCommentsForNews> &
      EMsg__CCSGetCommentsForNews &
      3159; // 3159
    static +CCSGetCommentsForNewsResponse: Class<EMsg__CCSGetCommentsForNewsResponse> &
      EMsg__CCSGetCommentsForNewsResponse &
      3160; // 3160
    static +CCSDeleteAllCommentsByAuthor: Class<EMsg__CCSDeleteAllCommentsByAuthor> &
      EMsg__CCSDeleteAllCommentsByAuthor &
      3161; // 3161
    static +CCSDeleteAllCommentsByAuthorResponse: Class<EMsg__CCSDeleteAllCommentsByAuthorResponse> &
      EMsg__CCSDeleteAllCommentsByAuthorResponse &
      3162; // 3162
    static +BaseLBSRange: Class<EMsg__BaseLBSRange> & EMsg__BaseLBSRange & 3200; // 3200
    static +LBSSetScore: Class<EMsg__LBSSetScore> & EMsg__LBSSetScore & 3201; // 3201
    static +LBSSetScoreResponse: Class<EMsg__LBSSetScoreResponse> &
      EMsg__LBSSetScoreResponse &
      3202; // 3202
    static +LBSFindOrCreateLB: Class<EMsg__LBSFindOrCreateLB> &
      EMsg__LBSFindOrCreateLB &
      3203; // 3203
    static +LBSFindOrCreateLBResponse: Class<EMsg__LBSFindOrCreateLBResponse> &
      EMsg__LBSFindOrCreateLBResponse &
      3204; // 3204
    static +LBSGetLBEntries: Class<EMsg__LBSGetLBEntries> &
      EMsg__LBSGetLBEntries &
      3205; // 3205
    static +LBSGetLBEntriesResponse: Class<EMsg__LBSGetLBEntriesResponse> &
      EMsg__LBSGetLBEntriesResponse &
      3206; // 3206
    static +LBSGetLBList: Class<EMsg__LBSGetLBList> & EMsg__LBSGetLBList & 3207; // 3207
    static +LBSGetLBListResponse: Class<EMsg__LBSGetLBListResponse> &
      EMsg__LBSGetLBListResponse &
      3208; // 3208
    static +LBSSetLBDetails: Class<EMsg__LBSSetLBDetails> &
      EMsg__LBSSetLBDetails &
      3209; // 3209
    static +LBSDeleteLB: Class<EMsg__LBSDeleteLB> & EMsg__LBSDeleteLB & 3210; // 3210
    static +LBSDeleteLBEntry: Class<EMsg__LBSDeleteLBEntry> &
      EMsg__LBSDeleteLBEntry &
      3211; // 3211
    static +LBSResetLB: Class<EMsg__LBSResetLB> & EMsg__LBSResetLB & 3212; // 3212
    static +LBSResetLBResponse: Class<EMsg__LBSResetLBResponse> &
      EMsg__LBSResetLBResponse &
      3213; // 3213
    static +LBSDeleteLBResponse: Class<EMsg__LBSDeleteLBResponse> &
      EMsg__LBSDeleteLBResponse &
      3214; // 3214
    static +BaseOGS: Class<EMsg__BaseOGS> & EMsg__BaseOGS & 3400; // 3400
    static +OGSBeginSession: Class<EMsg__OGSBeginSession> &
      EMsg__OGSBeginSession &
      3401; // 3401
    static +OGSBeginSessionResponse: Class<EMsg__OGSBeginSessionResponse> &
      EMsg__OGSBeginSessionResponse &
      3402; // 3402
    static +OGSEndSession: Class<EMsg__OGSEndSession> &
      EMsg__OGSEndSession &
      3403; // 3403
    static +OGSEndSessionResponse: Class<EMsg__OGSEndSessionResponse> &
      EMsg__OGSEndSessionResponse &
      3404; // 3404
    static +OGSWriteAppSessionRow: Class<EMsg__OGSWriteAppSessionRow> &
      EMsg__OGSWriteAppSessionRow &
      3406; // 3406
    static +BaseBRP: Class<EMsg__BaseBRP> & EMsg__BaseBRP & 3600; // 3600
    static +BRPStartShippingJobs: Class<EMsg__BRPStartShippingJobs> &
      EMsg__BRPStartShippingJobs &
      3601; // 3601
    static +BRPProcessUSBankReports: Class<EMsg__BRPProcessUSBankReports> &
      EMsg__BRPProcessUSBankReports &
      3602; // 3602
    static +BRPProcessGCReports: Class<EMsg__BRPProcessGCReports> &
      EMsg__BRPProcessGCReports &
      3603; // 3603
    static +BRPProcessPPReports: Class<EMsg__BRPProcessPPReports> &
      EMsg__BRPProcessPPReports &
      3604; // 3604
    static +BRPSettleNOVA: Class<EMsg__BRPSettleNOVA> &
      EMsg__BRPSettleNOVA &
      3605; // 3605
    static +BRPSettleCB: Class<EMsg__BRPSettleCB> & EMsg__BRPSettleCB & 3606; // 3606
    static +BRPCommitGC: Class<EMsg__BRPCommitGC> & EMsg__BRPCommitGC & 3607; // 3607
    static +BRPCommitGCResponse: Class<EMsg__BRPCommitGCResponse> &
      EMsg__BRPCommitGCResponse &
      3608; // 3608
    static +BRPFindHungTransactions: Class<EMsg__BRPFindHungTransactions> &
      EMsg__BRPFindHungTransactions &
      3609; // 3609
    static +BRPCheckFinanceCloseOutDate: Class<EMsg__BRPCheckFinanceCloseOutDate> &
      EMsg__BRPCheckFinanceCloseOutDate &
      3610; // 3610
    static +BRPProcessLicenses: Class<EMsg__BRPProcessLicenses> &
      EMsg__BRPProcessLicenses &
      3611; // 3611
    static +BRPProcessLicensesResponse: Class<EMsg__BRPProcessLicensesResponse> &
      EMsg__BRPProcessLicensesResponse &
      3612; // 3612
    static +BRPRemoveExpiredPaymentData: Class<EMsg__BRPRemoveExpiredPaymentData> &
      EMsg__BRPRemoveExpiredPaymentData &
      3613; // 3613
    static +BRPRemoveExpiredPaymentDataResponse: Class<EMsg__BRPRemoveExpiredPaymentDataResponse> &
      EMsg__BRPRemoveExpiredPaymentDataResponse &
      3614; // 3614
    static +BRPConvertToCurrentKeys: Class<EMsg__BRPConvertToCurrentKeys> &
      EMsg__BRPConvertToCurrentKeys &
      3615; // 3615
    static +BRPConvertToCurrentKeysResponse: Class<EMsg__BRPConvertToCurrentKeysResponse> &
      EMsg__BRPConvertToCurrentKeysResponse &
      3616; // 3616
    static +BRPPruneCardUsageStats: Class<EMsg__BRPPruneCardUsageStats> &
      EMsg__BRPPruneCardUsageStats &
      3617; // 3617
    static +BRPPruneCardUsageStatsResponse: Class<EMsg__BRPPruneCardUsageStatsResponse> &
      EMsg__BRPPruneCardUsageStatsResponse &
      3618; // 3618
    static +BRPCheckActivationCodes: Class<EMsg__BRPCheckActivationCodes> &
      EMsg__BRPCheckActivationCodes &
      3619; // 3619
    static +BRPCheckActivationCodesResponse: Class<EMsg__BRPCheckActivationCodesResponse> &
      EMsg__BRPCheckActivationCodesResponse &
      3620; // 3620
    static +BRPCommitWP: Class<EMsg__BRPCommitWP> & EMsg__BRPCommitWP & 3621; // 3621
    static +BRPCommitWPResponse: Class<EMsg__BRPCommitWPResponse> &
      EMsg__BRPCommitWPResponse &
      3622; // 3622
    static +BRPProcessWPReports: Class<EMsg__BRPProcessWPReports> &
      EMsg__BRPProcessWPReports &
      3623; // 3623
    static +BRPProcessPaymentRules: Class<EMsg__BRPProcessPaymentRules> &
      EMsg__BRPProcessPaymentRules &
      3624; // 3624
    static +BRPProcessPartnerPayments: Class<EMsg__BRPProcessPartnerPayments> &
      EMsg__BRPProcessPartnerPayments &
      3625; // 3625
    static +BRPCheckSettlementReports: Class<EMsg__BRPCheckSettlementReports> &
      EMsg__BRPCheckSettlementReports &
      3626; // 3626
    static +BRPPostTaxToAvalara: Class<EMsg__BRPPostTaxToAvalara> &
      EMsg__BRPPostTaxToAvalara &
      3628; // 3628
    static +BRPPostTransactionTax: Class<EMsg__BRPPostTransactionTax> &
      EMsg__BRPPostTransactionTax &
      3629; // 3629
    static +BRPPostTransactionTaxResponse: Class<EMsg__BRPPostTransactionTaxResponse> &
      EMsg__BRPPostTransactionTaxResponse &
      3630; // 3630
    static +BRPProcessIMReports: Class<EMsg__BRPProcessIMReports> &
      EMsg__BRPProcessIMReports &
      3631; // 3631
    static +BaseAMRange2: Class<EMsg__BaseAMRange2> & EMsg__BaseAMRange2 & 4000; // 4000
    static +AMCreateChat: Class<EMsg__AMCreateChat> & EMsg__AMCreateChat & 4001; // 4001
    static +AMCreateChatResponse: Class<EMsg__AMCreateChatResponse> &
      EMsg__AMCreateChatResponse &
      4002; // 4002
    static +AMUpdateChatMetadata: Class<EMsg__AMUpdateChatMetadata> &
      EMsg__AMUpdateChatMetadata &
      4003; // 4003
    static +AMPublishChatMetadata: Class<EMsg__AMPublishChatMetadata> &
      EMsg__AMPublishChatMetadata &
      4004; // 4004
    static +AMSetProfileURL: Class<EMsg__AMSetProfileURL> &
      EMsg__AMSetProfileURL &
      4005; // 4005
    static +AMGetAccountEmailAddress: Class<EMsg__AMGetAccountEmailAddress> &
      EMsg__AMGetAccountEmailAddress &
      4006; // 4006
    static +AMGetAccountEmailAddressResponse: Class<EMsg__AMGetAccountEmailAddressResponse> &
      EMsg__AMGetAccountEmailAddressResponse &
      4007; // 4007
    static +AMRequestFriendData: Class<EMsg__AMRequestFriendData> &
      EMsg__AMRequestFriendData &
      4008; // 4008
    static +AMRequestClanData: Class<EMsg__AMRequestClanData> &
      EMsg__AMRequestClanData &
      4008; // 4008
    static +AMRouteToClients: Class<EMsg__AMRouteToClients> &
      EMsg__AMRouteToClients &
      4009; // 4009
    static +AMLeaveClan: Class<EMsg__AMLeaveClan> & EMsg__AMLeaveClan & 4010; // 4010
    static +AMClanPermissions: Class<EMsg__AMClanPermissions> &
      EMsg__AMClanPermissions &
      4011; // 4011
    static +AMClanPermissionsResponse: Class<EMsg__AMClanPermissionsResponse> &
      EMsg__AMClanPermissionsResponse &
      4012; // 4012
    static +AMCreateClanEvent: Class<EMsg__AMCreateClanEvent> &
      EMsg__AMCreateClanEvent &
      4013; // 4013
    static +AMCreateClanEventResponse: Class<EMsg__AMCreateClanEventResponse> &
      EMsg__AMCreateClanEventResponse &
      4014; // 4014
    static +AMUpdateClanEvent: Class<EMsg__AMUpdateClanEvent> &
      EMsg__AMUpdateClanEvent &
      4015; // 4015
    static +AMUpdateClanEventResponse: Class<EMsg__AMUpdateClanEventResponse> &
      EMsg__AMUpdateClanEventResponse &
      4016; // 4016
    static +AMGetClanEvents: Class<EMsg__AMGetClanEvents> &
      EMsg__AMGetClanEvents &
      4017; // 4017
    static +AMGetClanEventsResponse: Class<EMsg__AMGetClanEventsResponse> &
      EMsg__AMGetClanEventsResponse &
      4018; // 4018
    static +AMDeleteClanEvent: Class<EMsg__AMDeleteClanEvent> &
      EMsg__AMDeleteClanEvent &
      4019; // 4019
    static +AMDeleteClanEventResponse: Class<EMsg__AMDeleteClanEventResponse> &
      EMsg__AMDeleteClanEventResponse &
      4020; // 4020
    static +AMSetClanPermissionSettings: Class<EMsg__AMSetClanPermissionSettings> &
      EMsg__AMSetClanPermissionSettings &
      4021; // 4021
    static +AMSetClanPermissionSettingsResponse: Class<EMsg__AMSetClanPermissionSettingsResponse> &
      EMsg__AMSetClanPermissionSettingsResponse &
      4022; // 4022
    static +AMGetClanPermissionSettings: Class<EMsg__AMGetClanPermissionSettings> &
      EMsg__AMGetClanPermissionSettings &
      4023; // 4023
    static +AMGetClanPermissionSettingsResponse: Class<EMsg__AMGetClanPermissionSettingsResponse> &
      EMsg__AMGetClanPermissionSettingsResponse &
      4024; // 4024
    static +AMPublishChatRoomInfo: Class<EMsg__AMPublishChatRoomInfo> &
      EMsg__AMPublishChatRoomInfo &
      4025; // 4025
    static +ClientChatRoomInfo: Class<EMsg__ClientChatRoomInfo> &
      EMsg__ClientChatRoomInfo &
      4026; // 4026
    static +AMCreateClanAnnouncement: Class<EMsg__AMCreateClanAnnouncement> &
      EMsg__AMCreateClanAnnouncement &
      4027; // 4027
    static +AMCreateClanAnnouncementResponse: Class<EMsg__AMCreateClanAnnouncementResponse> &
      EMsg__AMCreateClanAnnouncementResponse &
      4028; // 4028
    static +AMUpdateClanAnnouncement: Class<EMsg__AMUpdateClanAnnouncement> &
      EMsg__AMUpdateClanAnnouncement &
      4029; // 4029
    static +AMUpdateClanAnnouncementResponse: Class<EMsg__AMUpdateClanAnnouncementResponse> &
      EMsg__AMUpdateClanAnnouncementResponse &
      4030; // 4030
    static +AMGetClanAnnouncementsCount: Class<EMsg__AMGetClanAnnouncementsCount> &
      EMsg__AMGetClanAnnouncementsCount &
      4031; // 4031
    static +AMGetClanAnnouncementsCountResponse: Class<EMsg__AMGetClanAnnouncementsCountResponse> &
      EMsg__AMGetClanAnnouncementsCountResponse &
      4032; // 4032
    static +AMGetClanAnnouncements: Class<EMsg__AMGetClanAnnouncements> &
      EMsg__AMGetClanAnnouncements &
      4033; // 4033
    static +AMGetClanAnnouncementsResponse: Class<EMsg__AMGetClanAnnouncementsResponse> &
      EMsg__AMGetClanAnnouncementsResponse &
      4034; // 4034
    static +AMDeleteClanAnnouncement: Class<EMsg__AMDeleteClanAnnouncement> &
      EMsg__AMDeleteClanAnnouncement &
      4035; // 4035
    static +AMDeleteClanAnnouncementResponse: Class<EMsg__AMDeleteClanAnnouncementResponse> &
      EMsg__AMDeleteClanAnnouncementResponse &
      4036; // 4036
    static +AMGetSingleClanAnnouncement: Class<EMsg__AMGetSingleClanAnnouncement> &
      EMsg__AMGetSingleClanAnnouncement &
      4037; // 4037
    static +AMGetSingleClanAnnouncementResponse: Class<EMsg__AMGetSingleClanAnnouncementResponse> &
      EMsg__AMGetSingleClanAnnouncementResponse &
      4038; // 4038
    static +AMGetClanHistory: Class<EMsg__AMGetClanHistory> &
      EMsg__AMGetClanHistory &
      4039; // 4039
    static +AMGetClanHistoryResponse: Class<EMsg__AMGetClanHistoryResponse> &
      EMsg__AMGetClanHistoryResponse &
      4040; // 4040
    static +AMGetClanPermissionBits: Class<EMsg__AMGetClanPermissionBits> &
      EMsg__AMGetClanPermissionBits &
      4041; // 4041
    static +AMGetClanPermissionBitsResponse: Class<EMsg__AMGetClanPermissionBitsResponse> &
      EMsg__AMGetClanPermissionBitsResponse &
      4042; // 4042
    static +AMSetClanPermissionBits: Class<EMsg__AMSetClanPermissionBits> &
      EMsg__AMSetClanPermissionBits &
      4043; // 4043
    static +AMSetClanPermissionBitsResponse: Class<EMsg__AMSetClanPermissionBitsResponse> &
      EMsg__AMSetClanPermissionBitsResponse &
      4044; // 4044
    static +AMSessionInfoRequest: Class<EMsg__AMSessionInfoRequest> &
      EMsg__AMSessionInfoRequest &
      4045; // 4045
    static +AMSessionInfoResponse: Class<EMsg__AMSessionInfoResponse> &
      EMsg__AMSessionInfoResponse &
      4046; // 4046
    static +AMValidateWGToken: Class<EMsg__AMValidateWGToken> &
      EMsg__AMValidateWGToken &
      4047; // 4047
    static +AMGetSingleClanEvent: Class<EMsg__AMGetSingleClanEvent> &
      EMsg__AMGetSingleClanEvent &
      4048; // 4048
    static +AMGetSingleClanEventResponse: Class<EMsg__AMGetSingleClanEventResponse> &
      EMsg__AMGetSingleClanEventResponse &
      4049; // 4049
    static +AMGetClanRank: Class<EMsg__AMGetClanRank> &
      EMsg__AMGetClanRank &
      4050; // 4050
    static +AMGetClanRankResponse: Class<EMsg__AMGetClanRankResponse> &
      EMsg__AMGetClanRankResponse &
      4051; // 4051
    static +AMSetClanRank: Class<EMsg__AMSetClanRank> &
      EMsg__AMSetClanRank &
      4052; // 4052
    static +AMSetClanRankResponse: Class<EMsg__AMSetClanRankResponse> &
      EMsg__AMSetClanRankResponse &
      4053; // 4053
    static +AMGetClanPOTW: Class<EMsg__AMGetClanPOTW> &
      EMsg__AMGetClanPOTW &
      4054; // 4054
    static +AMGetClanPOTWResponse: Class<EMsg__AMGetClanPOTWResponse> &
      EMsg__AMGetClanPOTWResponse &
      4055; // 4055
    static +AMSetClanPOTW: Class<EMsg__AMSetClanPOTW> &
      EMsg__AMSetClanPOTW &
      4056; // 4056
    static +AMSetClanPOTWResponse: Class<EMsg__AMSetClanPOTWResponse> &
      EMsg__AMSetClanPOTWResponse &
      4057; // 4057
    static +AMRequestChatMetadata: Class<EMsg__AMRequestChatMetadata> &
      EMsg__AMRequestChatMetadata &
      4058; // 4058
    static +AMDumpUser: Class<EMsg__AMDumpUser> & EMsg__AMDumpUser & 4059; // 4059
    static +AMKickUserFromClan: Class<EMsg__AMKickUserFromClan> &
      EMsg__AMKickUserFromClan &
      4060; // 4060
    static +AMAddFounderToClan: Class<EMsg__AMAddFounderToClan> &
      EMsg__AMAddFounderToClan &
      4061; // 4061
    static +AMValidateWGTokenResponse: Class<EMsg__AMValidateWGTokenResponse> &
      EMsg__AMValidateWGTokenResponse &
      4062; // 4062
    static +AMSetCommunityState: Class<EMsg__AMSetCommunityState> &
      EMsg__AMSetCommunityState &
      4063; // 4063
    static +AMSetAccountDetails: Class<EMsg__AMSetAccountDetails> &
      EMsg__AMSetAccountDetails &
      4064; // 4064
    static +AMGetChatBanList: Class<EMsg__AMGetChatBanList> &
      EMsg__AMGetChatBanList &
      4065; // 4065
    static +AMGetChatBanListResponse: Class<EMsg__AMGetChatBanListResponse> &
      EMsg__AMGetChatBanListResponse &
      4066; // 4066
    static +AMUnBanFromChat: Class<EMsg__AMUnBanFromChat> &
      EMsg__AMUnBanFromChat &
      4067; // 4067
    static +AMSetClanDetails: Class<EMsg__AMSetClanDetails> &
      EMsg__AMSetClanDetails &
      4068; // 4068
    static +AMGetAccountLinks: Class<EMsg__AMGetAccountLinks> &
      EMsg__AMGetAccountLinks &
      4069; // 4069
    static +AMGetAccountLinksResponse: Class<EMsg__AMGetAccountLinksResponse> &
      EMsg__AMGetAccountLinksResponse &
      4070; // 4070
    static +AMSetAccountLinks: Class<EMsg__AMSetAccountLinks> &
      EMsg__AMSetAccountLinks &
      4071; // 4071
    static +AMSetAccountLinksResponse: Class<EMsg__AMSetAccountLinksResponse> &
      EMsg__AMSetAccountLinksResponse &
      4072; // 4072
    static +AMGetUserGameStats: Class<EMsg__AMGetUserGameStats> &
      EMsg__AMGetUserGameStats &
      4073; // 4073
    static +AMGetUserGameStatsResponse: Class<EMsg__AMGetUserGameStatsResponse> &
      EMsg__AMGetUserGameStatsResponse &
      4074; // 4074
    static +AMCheckClanMembership: Class<EMsg__AMCheckClanMembership> &
      EMsg__AMCheckClanMembership &
      4075; // 4075
    static +AMGetClanMembers: Class<EMsg__AMGetClanMembers> &
      EMsg__AMGetClanMembers &
      4076; // 4076
    static +AMGetClanMembersResponse: Class<EMsg__AMGetClanMembersResponse> &
      EMsg__AMGetClanMembersResponse &
      4077; // 4077
    static +AMJoinPublicClan: Class<EMsg__AMJoinPublicClan> &
      EMsg__AMJoinPublicClan &
      4078; // 4078
    static +AMNotifyChatOfClanChange: Class<EMsg__AMNotifyChatOfClanChange> &
      EMsg__AMNotifyChatOfClanChange &
      4079; // 4079
    static +AMResubmitPurchase: Class<EMsg__AMResubmitPurchase> &
      EMsg__AMResubmitPurchase &
      4080; // 4080
    static +AMAddFriend: Class<EMsg__AMAddFriend> & EMsg__AMAddFriend & 4081; // 4081
    static +AMAddFriendResponse: Class<EMsg__AMAddFriendResponse> &
      EMsg__AMAddFriendResponse &
      4082; // 4082
    static +AMRemoveFriend: Class<EMsg__AMRemoveFriend> &
      EMsg__AMRemoveFriend &
      4083; // 4083
    static +AMDumpClan: Class<EMsg__AMDumpClan> & EMsg__AMDumpClan & 4084; // 4084
    static +AMChangeClanOwner: Class<EMsg__AMChangeClanOwner> &
      EMsg__AMChangeClanOwner &
      4085; // 4085
    static +AMCancelEasyCollect: Class<EMsg__AMCancelEasyCollect> &
      EMsg__AMCancelEasyCollect &
      4086; // 4086
    static +AMCancelEasyCollectResponse: Class<EMsg__AMCancelEasyCollectResponse> &
      EMsg__AMCancelEasyCollectResponse &
      4087; // 4087
    static +AMGetClanMembershipList: Class<EMsg__AMGetClanMembershipList> &
      EMsg__AMGetClanMembershipList &
      4088; // 4088
    static +AMGetClanMembershipListResponse: Class<EMsg__AMGetClanMembershipListResponse> &
      EMsg__AMGetClanMembershipListResponse &
      4089; // 4089
    static +AMClansInCommon: Class<EMsg__AMClansInCommon> &
      EMsg__AMClansInCommon &
      4090; // 4090
    static +AMClansInCommonResponse: Class<EMsg__AMClansInCommonResponse> &
      EMsg__AMClansInCommonResponse &
      4091; // 4091
    static +AMIsValidAccountID: Class<EMsg__AMIsValidAccountID> &
      EMsg__AMIsValidAccountID &
      4092; // 4092
    static +AMConvertClan: Class<EMsg__AMConvertClan> &
      EMsg__AMConvertClan &
      4093; // 4093
    static +AMGetGiftTargetListRelay: Class<EMsg__AMGetGiftTargetListRelay> &
      EMsg__AMGetGiftTargetListRelay &
      4094; // 4094
    static +AMWipeFriendsList: Class<EMsg__AMWipeFriendsList> &
      EMsg__AMWipeFriendsList &
      4095; // 4095
    static +AMSetIgnored: Class<EMsg__AMSetIgnored> & EMsg__AMSetIgnored & 4096; // 4096
    static +AMClansInCommonCountResponse: Class<EMsg__AMClansInCommonCountResponse> &
      EMsg__AMClansInCommonCountResponse &
      4097; // 4097
    static +AMFriendsList: Class<EMsg__AMFriendsList> &
      EMsg__AMFriendsList &
      4098; // 4098
    static +AMFriendsListResponse: Class<EMsg__AMFriendsListResponse> &
      EMsg__AMFriendsListResponse &
      4099; // 4099
    static +AMFriendsInCommon: Class<EMsg__AMFriendsInCommon> &
      EMsg__AMFriendsInCommon &
      4100; // 4100
    static +AMFriendsInCommonResponse: Class<EMsg__AMFriendsInCommonResponse> &
      EMsg__AMFriendsInCommonResponse &
      4101; // 4101
    static +AMFriendsInCommonCountResponse: Class<EMsg__AMFriendsInCommonCountResponse> &
      EMsg__AMFriendsInCommonCountResponse &
      4102; // 4102
    static +AMClansInCommonCount: Class<EMsg__AMClansInCommonCount> &
      EMsg__AMClansInCommonCount &
      4103; // 4103
    static +AMChallengeVerdict: Class<EMsg__AMChallengeVerdict> &
      EMsg__AMChallengeVerdict &
      4104; // 4104
    static +AMChallengeNotification: Class<EMsg__AMChallengeNotification> &
      EMsg__AMChallengeNotification &
      4105; // 4105
    static +AMFindGSByIP: Class<EMsg__AMFindGSByIP> & EMsg__AMFindGSByIP & 4106; // 4106
    static +AMFoundGSByIP: Class<EMsg__AMFoundGSByIP> &
      EMsg__AMFoundGSByIP &
      4107; // 4107
    static +AMGiftRevoked: Class<EMsg__AMGiftRevoked> &
      EMsg__AMGiftRevoked &
      4108; // 4108
    static +AMCreateAccountRecord: Class<EMsg__AMCreateAccountRecord> &
      EMsg__AMCreateAccountRecord &
      4109; // 4109
    static +AMUserClanList: Class<EMsg__AMUserClanList> &
      EMsg__AMUserClanList &
      4110; // 4110
    static +AMUserClanListResponse: Class<EMsg__AMUserClanListResponse> &
      EMsg__AMUserClanListResponse &
      4111; // 4111
    static +AMGetAccountDetails2: Class<EMsg__AMGetAccountDetails2> &
      EMsg__AMGetAccountDetails2 &
      4112; // 4112
    static +AMGetAccountDetailsResponse2: Class<EMsg__AMGetAccountDetailsResponse2> &
      EMsg__AMGetAccountDetailsResponse2 &
      4113; // 4113
    static +AMSetCommunityProfileSettings: Class<EMsg__AMSetCommunityProfileSettings> &
      EMsg__AMSetCommunityProfileSettings &
      4114; // 4114
    static +AMSetCommunityProfileSettingsResponse: Class<EMsg__AMSetCommunityProfileSettingsResponse> &
      EMsg__AMSetCommunityProfileSettingsResponse &
      4115; // 4115
    static +AMGetCommunityPrivacyState: Class<EMsg__AMGetCommunityPrivacyState> &
      EMsg__AMGetCommunityPrivacyState &
      4116; // 4116
    static +AMGetCommunityPrivacyStateResponse: Class<EMsg__AMGetCommunityPrivacyStateResponse> &
      EMsg__AMGetCommunityPrivacyStateResponse &
      4117; // 4117
    static +AMCheckClanInviteRateLimiting: Class<EMsg__AMCheckClanInviteRateLimiting> &
      EMsg__AMCheckClanInviteRateLimiting &
      4118; // 4118
    static +AMGetUserAchievementStatus: Class<EMsg__AMGetUserAchievementStatus> &
      EMsg__AMGetUserAchievementStatus &
      4119; // 4119
    static +AMGetIgnored: Class<EMsg__AMGetIgnored> & EMsg__AMGetIgnored & 4120; // 4120
    static +AMGetIgnoredResponse: Class<EMsg__AMGetIgnoredResponse> &
      EMsg__AMGetIgnoredResponse &
      4121; // 4121
    static +AMSetIgnoredResponse: Class<EMsg__AMSetIgnoredResponse> &
      EMsg__AMSetIgnoredResponse &
      4122; // 4122
    static +AMSetFriendRelationshipNone: Class<EMsg__AMSetFriendRelationshipNone> &
      EMsg__AMSetFriendRelationshipNone &
      4123; // 4123
    static +AMGetFriendRelationship: Class<EMsg__AMGetFriendRelationship> &
      EMsg__AMGetFriendRelationship &
      4124; // 4124
    static +AMGetFriendRelationshipResponse: Class<EMsg__AMGetFriendRelationshipResponse> &
      EMsg__AMGetFriendRelationshipResponse &
      4125; // 4125
    static +AMServiceModulesCache: Class<EMsg__AMServiceModulesCache> &
      EMsg__AMServiceModulesCache &
      4126; // 4126
    static +AMServiceModulesCall: Class<EMsg__AMServiceModulesCall> &
      EMsg__AMServiceModulesCall &
      4127; // 4127
    static +AMServiceModulesCallResponse: Class<EMsg__AMServiceModulesCallResponse> &
      EMsg__AMServiceModulesCallResponse &
      4128; // 4128
    static +AMGetCaptchaDataForIP: Class<EMsg__AMGetCaptchaDataForIP> &
      EMsg__AMGetCaptchaDataForIP &
      4129; // 4129
    static +AMGetCaptchaDataForIPResponse: Class<EMsg__AMGetCaptchaDataForIPResponse> &
      EMsg__AMGetCaptchaDataForIPResponse &
      4130; // 4130
    static +AMValidateCaptchaDataForIP: Class<EMsg__AMValidateCaptchaDataForIP> &
      EMsg__AMValidateCaptchaDataForIP &
      4131; // 4131
    static +AMValidateCaptchaDataForIPResponse: Class<EMsg__AMValidateCaptchaDataForIPResponse> &
      EMsg__AMValidateCaptchaDataForIPResponse &
      4132; // 4132
    static +AMTrackFailedAuthByIP: Class<EMsg__AMTrackFailedAuthByIP> &
      EMsg__AMTrackFailedAuthByIP &
      4133; // 4133
    static +AMGetCaptchaDataByGID: Class<EMsg__AMGetCaptchaDataByGID> &
      EMsg__AMGetCaptchaDataByGID &
      4134; // 4134
    static +AMGetCaptchaDataByGIDResponse: Class<EMsg__AMGetCaptchaDataByGIDResponse> &
      EMsg__AMGetCaptchaDataByGIDResponse &
      4135; // 4135
    static +AMGetLobbyList: Class<EMsg__AMGetLobbyList> &
      EMsg__AMGetLobbyList &
      4136; // 4136
    static +AMGetLobbyListResponse: Class<EMsg__AMGetLobbyListResponse> &
      EMsg__AMGetLobbyListResponse &
      4137; // 4137
    static +AMGetLobbyMetadata: Class<EMsg__AMGetLobbyMetadata> &
      EMsg__AMGetLobbyMetadata &
      4138; // 4138
    static +AMGetLobbyMetadataResponse: Class<EMsg__AMGetLobbyMetadataResponse> &
      EMsg__AMGetLobbyMetadataResponse &
      4139; // 4139
    static +CommunityAddFriendNews: Class<EMsg__CommunityAddFriendNews> &
      EMsg__CommunityAddFriendNews &
      4140; // 4140
    static +AMAddClanNews: Class<EMsg__AMAddClanNews> &
      EMsg__AMAddClanNews &
      4141; // 4141
    static +AMWriteNews: Class<EMsg__AMWriteNews> & EMsg__AMWriteNews & 4142; // 4142
    static +AMFindClanUser: Class<EMsg__AMFindClanUser> &
      EMsg__AMFindClanUser &
      4143; // 4143
    static +AMFindClanUserResponse: Class<EMsg__AMFindClanUserResponse> &
      EMsg__AMFindClanUserResponse &
      4144; // 4144
    static +AMBanFromChat: Class<EMsg__AMBanFromChat> &
      EMsg__AMBanFromChat &
      4145; // 4145
    static +AMGetUserHistoryResponse: Class<EMsg__AMGetUserHistoryResponse> &
      EMsg__AMGetUserHistoryResponse &
      4146; // 4146
    static +AMGetUserNewsSubscriptions: Class<EMsg__AMGetUserNewsSubscriptions> &
      EMsg__AMGetUserNewsSubscriptions &
      4147; // 4147
    static +AMGetUserNewsSubscriptionsResponse: Class<EMsg__AMGetUserNewsSubscriptionsResponse> &
      EMsg__AMGetUserNewsSubscriptionsResponse &
      4148; // 4148
    static +AMSetUserNewsSubscriptions: Class<EMsg__AMSetUserNewsSubscriptions> &
      EMsg__AMSetUserNewsSubscriptions &
      4149; // 4149
    static +AMGetUserNews: Class<EMsg__AMGetUserNews> &
      EMsg__AMGetUserNews &
      4150; // 4150
    static +AMGetUserNewsResponse: Class<EMsg__AMGetUserNewsResponse> &
      EMsg__AMGetUserNewsResponse &
      4151; // 4151
    static +AMSendQueuedEmails: Class<EMsg__AMSendQueuedEmails> &
      EMsg__AMSendQueuedEmails &
      4152; // 4152
    static +AMSetLicenseFlags: Class<EMsg__AMSetLicenseFlags> &
      EMsg__AMSetLicenseFlags &
      4153; // 4153
    static +AMGetUserHistory: Class<EMsg__AMGetUserHistory> &
      EMsg__AMGetUserHistory &
      4154; // 4154
    static +CommunityDeleteUserNews: Class<EMsg__CommunityDeleteUserNews> &
      EMsg__CommunityDeleteUserNews &
      4155; // 4155
    static +AMAllowUserFilesRequest: Class<EMsg__AMAllowUserFilesRequest> &
      EMsg__AMAllowUserFilesRequest &
      4156; // 4156
    static +AMAllowUserFilesResponse: Class<EMsg__AMAllowUserFilesResponse> &
      EMsg__AMAllowUserFilesResponse &
      4157; // 4157
    static +AMGetAccountStatus: Class<EMsg__AMGetAccountStatus> &
      EMsg__AMGetAccountStatus &
      4158; // 4158
    static +AMGetAccountStatusResponse: Class<EMsg__AMGetAccountStatusResponse> &
      EMsg__AMGetAccountStatusResponse &
      4159; // 4159
    static +AMEditBanReason: Class<EMsg__AMEditBanReason> &
      EMsg__AMEditBanReason &
      4160; // 4160
    static +AMCheckClanMembershipResponse: Class<EMsg__AMCheckClanMembershipResponse> &
      EMsg__AMCheckClanMembershipResponse &
      4161; // 4161
    static +AMProbeClanMembershipList: Class<EMsg__AMProbeClanMembershipList> &
      EMsg__AMProbeClanMembershipList &
      4162; // 4162
    static +AMProbeClanMembershipListResponse: Class<EMsg__AMProbeClanMembershipListResponse> &
      EMsg__AMProbeClanMembershipListResponse &
      4163; // 4163
    static +AMGetFriendsLobbies: Class<EMsg__AMGetFriendsLobbies> &
      EMsg__AMGetFriendsLobbies &
      4165; // 4165
    static +AMGetFriendsLobbiesResponse: Class<EMsg__AMGetFriendsLobbiesResponse> &
      EMsg__AMGetFriendsLobbiesResponse &
      4166; // 4166
    static +AMGetUserFriendNewsResponse: Class<EMsg__AMGetUserFriendNewsResponse> &
      EMsg__AMGetUserFriendNewsResponse &
      4172; // 4172
    static +CommunityGetUserFriendNews: Class<EMsg__CommunityGetUserFriendNews> &
      EMsg__CommunityGetUserFriendNews &
      4173; // 4173
    static +AMGetUserClansNewsResponse: Class<EMsg__AMGetUserClansNewsResponse> &
      EMsg__AMGetUserClansNewsResponse &
      4174; // 4174
    static +AMGetUserClansNews: Class<EMsg__AMGetUserClansNews> &
      EMsg__AMGetUserClansNews &
      4175; // 4175
    static +AMStoreInitPurchase: Class<EMsg__AMStoreInitPurchase> &
      EMsg__AMStoreInitPurchase &
      4176; // 4176
    static +AMStoreInitPurchaseResponse: Class<EMsg__AMStoreInitPurchaseResponse> &
      EMsg__AMStoreInitPurchaseResponse &
      4177; // 4177
    static +AMStoreGetFinalPrice: Class<EMsg__AMStoreGetFinalPrice> &
      EMsg__AMStoreGetFinalPrice &
      4178; // 4178
    static +AMStoreGetFinalPriceResponse: Class<EMsg__AMStoreGetFinalPriceResponse> &
      EMsg__AMStoreGetFinalPriceResponse &
      4179; // 4179
    static +AMStoreCompletePurchase: Class<EMsg__AMStoreCompletePurchase> &
      EMsg__AMStoreCompletePurchase &
      4180; // 4180
    static +AMStoreCancelPurchase: Class<EMsg__AMStoreCancelPurchase> &
      EMsg__AMStoreCancelPurchase &
      4181; // 4181
    static +AMStorePurchaseResponse: Class<EMsg__AMStorePurchaseResponse> &
      EMsg__AMStorePurchaseResponse &
      4182; // 4182
    static +AMCreateAccountRecordInSteam3: Class<EMsg__AMCreateAccountRecordInSteam3> &
      EMsg__AMCreateAccountRecordInSteam3 &
      4183; // 4183
    static +AMGetPreviousCBAccount: Class<EMsg__AMGetPreviousCBAccount> &
      EMsg__AMGetPreviousCBAccount &
      4184; // 4184
    static +AMGetPreviousCBAccountResponse: Class<EMsg__AMGetPreviousCBAccountResponse> &
      EMsg__AMGetPreviousCBAccountResponse &
      4185; // 4185
    static +AMUpdateBillingAddress: Class<EMsg__AMUpdateBillingAddress> &
      EMsg__AMUpdateBillingAddress &
      4186; // 4186
    static +AMUpdateBillingAddressResponse: Class<EMsg__AMUpdateBillingAddressResponse> &
      EMsg__AMUpdateBillingAddressResponse &
      4187; // 4187
    static +AMGetBillingAddress: Class<EMsg__AMGetBillingAddress> &
      EMsg__AMGetBillingAddress &
      4188; // 4188
    static +AMGetBillingAddressResponse: Class<EMsg__AMGetBillingAddressResponse> &
      EMsg__AMGetBillingAddressResponse &
      4189; // 4189
    static +AMGetUserLicenseHistory: Class<EMsg__AMGetUserLicenseHistory> &
      EMsg__AMGetUserLicenseHistory &
      4190; // 4190
    static +AMGetUserLicenseHistoryResponse: Class<EMsg__AMGetUserLicenseHistoryResponse> &
      EMsg__AMGetUserLicenseHistoryResponse &
      4191; // 4191
    static +AMSupportChangePassword: Class<EMsg__AMSupportChangePassword> &
      EMsg__AMSupportChangePassword &
      4194; // 4194
    static +AMSupportChangeEmail: Class<EMsg__AMSupportChangeEmail> &
      EMsg__AMSupportChangeEmail &
      4195; // 4195
    static +AMSupportChangeSecretQA: Class<EMsg__AMSupportChangeSecretQA> &
      EMsg__AMSupportChangeSecretQA &
      4196; // 4196
    static +AMResetUserVerificationGSByIP: Class<EMsg__AMResetUserVerificationGSByIP> &
      EMsg__AMResetUserVerificationGSByIP &
      4197; // 4197
    static +AMUpdateGSPlayStats: Class<EMsg__AMUpdateGSPlayStats> &
      EMsg__AMUpdateGSPlayStats &
      4198; // 4198
    static +AMSupportEnableOrDisable: Class<EMsg__AMSupportEnableOrDisable> &
      EMsg__AMSupportEnableOrDisable &
      4199; // 4199
    static +AMGetComments: Class<EMsg__AMGetComments> &
      EMsg__AMGetComments &
      4200; // 4200
    static +AMGetCommentsResponse: Class<EMsg__AMGetCommentsResponse> &
      EMsg__AMGetCommentsResponse &
      4201; // 4201
    static +AMAddComment: Class<EMsg__AMAddComment> & EMsg__AMAddComment & 4202; // 4202
    static +AMAddCommentResponse: Class<EMsg__AMAddCommentResponse> &
      EMsg__AMAddCommentResponse &
      4203; // 4203
    static +AMDeleteComment: Class<EMsg__AMDeleteComment> &
      EMsg__AMDeleteComment &
      4204; // 4204
    static +AMDeleteCommentResponse: Class<EMsg__AMDeleteCommentResponse> &
      EMsg__AMDeleteCommentResponse &
      4205; // 4205
    static +AMGetPurchaseStatus: Class<EMsg__AMGetPurchaseStatus> &
      EMsg__AMGetPurchaseStatus &
      4206; // 4206
    static +AMSupportIsAccountEnabled: Class<EMsg__AMSupportIsAccountEnabled> &
      EMsg__AMSupportIsAccountEnabled &
      4209; // 4209
    static +AMSupportIsAccountEnabledResponse: Class<EMsg__AMSupportIsAccountEnabledResponse> &
      EMsg__AMSupportIsAccountEnabledResponse &
      4210; // 4210
    static +AMGetUserStats: Class<EMsg__AMGetUserStats> &
      EMsg__AMGetUserStats &
      4211; // 4211
    static +AMSupportKickSession: Class<EMsg__AMSupportKickSession> &
      EMsg__AMSupportKickSession &
      4212; // 4212
    static +AMGSSearch: Class<EMsg__AMGSSearch> & EMsg__AMGSSearch & 4213; // 4213
    static +MarketingMessageUpdate: Class<EMsg__MarketingMessageUpdate> &
      EMsg__MarketingMessageUpdate &
      4216; // 4216
    static +AMRouteFriendMsg: Class<EMsg__AMRouteFriendMsg> &
      EMsg__AMRouteFriendMsg &
      4219; // 4219
    static +AMTicketAuthRequestOrResponse: Class<EMsg__AMTicketAuthRequestOrResponse> &
      EMsg__AMTicketAuthRequestOrResponse &
      4220; // 4220
    static +AMVerifyDepotManagementRights: Class<EMsg__AMVerifyDepotManagementRights> &
      EMsg__AMVerifyDepotManagementRights &
      4222; // 4222
    static +AMVerifyDepotManagementRightsResponse: Class<EMsg__AMVerifyDepotManagementRightsResponse> &
      EMsg__AMVerifyDepotManagementRightsResponse &
      4223; // 4223
    static +AMAddFreeLicense: Class<EMsg__AMAddFreeLicense> &
      EMsg__AMAddFreeLicense &
      4224; // 4224
    static +AMGetUserFriendsMinutesPlayed: Class<EMsg__AMGetUserFriendsMinutesPlayed> &
      EMsg__AMGetUserFriendsMinutesPlayed &
      4225; // 4225
    static +AMGetUserFriendsMinutesPlayedResponse: Class<EMsg__AMGetUserFriendsMinutesPlayedResponse> &
      EMsg__AMGetUserFriendsMinutesPlayedResponse &
      4226; // 4226
    static +AMGetUserMinutesPlayed: Class<EMsg__AMGetUserMinutesPlayed> &
      EMsg__AMGetUserMinutesPlayed &
      4227; // 4227
    static +AMGetUserMinutesPlayedResponse: Class<EMsg__AMGetUserMinutesPlayedResponse> &
      EMsg__AMGetUserMinutesPlayedResponse &
      4228; // 4228
    static +AMValidateEmailLink: Class<EMsg__AMValidateEmailLink> &
      EMsg__AMValidateEmailLink &
      4231; // 4231
    static +AMValidateEmailLinkResponse: Class<EMsg__AMValidateEmailLinkResponse> &
      EMsg__AMValidateEmailLinkResponse &
      4232; // 4232
    static +AMAddUsersToMarketingTreatment: Class<EMsg__AMAddUsersToMarketingTreatment> &
      EMsg__AMAddUsersToMarketingTreatment &
      4234; // 4234
    static +AMStoreUserStats: Class<EMsg__AMStoreUserStats> &
      EMsg__AMStoreUserStats &
      4236; // 4236
    static +AMGetUserGameplayInfo: Class<EMsg__AMGetUserGameplayInfo> &
      EMsg__AMGetUserGameplayInfo &
      4237; // 4237
    static +AMGetUserGameplayInfoResponse: Class<EMsg__AMGetUserGameplayInfoResponse> &
      EMsg__AMGetUserGameplayInfoResponse &
      4238; // 4238
    static +AMGetCardList: Class<EMsg__AMGetCardList> &
      EMsg__AMGetCardList &
      4239; // 4239
    static +AMGetCardListResponse: Class<EMsg__AMGetCardListResponse> &
      EMsg__AMGetCardListResponse &
      4240; // 4240
    static +AMDeleteStoredCard: Class<EMsg__AMDeleteStoredCard> &
      EMsg__AMDeleteStoredCard &
      4241; // 4241
    static +AMRevokeLegacyGameKeys: Class<EMsg__AMRevokeLegacyGameKeys> &
      EMsg__AMRevokeLegacyGameKeys &
      4242; // 4242
    static +AMGetWalletDetails: Class<EMsg__AMGetWalletDetails> &
      EMsg__AMGetWalletDetails &
      4244; // 4244
    static +AMGetWalletDetailsResponse: Class<EMsg__AMGetWalletDetailsResponse> &
      EMsg__AMGetWalletDetailsResponse &
      4245; // 4245
    static +AMDeleteStoredPaymentInfo: Class<EMsg__AMDeleteStoredPaymentInfo> &
      EMsg__AMDeleteStoredPaymentInfo &
      4246; // 4246
    static +AMGetStoredPaymentSummary: Class<EMsg__AMGetStoredPaymentSummary> &
      EMsg__AMGetStoredPaymentSummary &
      4247; // 4247
    static +AMGetStoredPaymentSummaryResponse: Class<EMsg__AMGetStoredPaymentSummaryResponse> &
      EMsg__AMGetStoredPaymentSummaryResponse &
      4248; // 4248
    static +AMGetWalletConversionRate: Class<EMsg__AMGetWalletConversionRate> &
      EMsg__AMGetWalletConversionRate &
      4249; // 4249
    static +AMGetWalletConversionRateResponse: Class<EMsg__AMGetWalletConversionRateResponse> &
      EMsg__AMGetWalletConversionRateResponse &
      4250; // 4250
    static +AMConvertWallet: Class<EMsg__AMConvertWallet> &
      EMsg__AMConvertWallet &
      4251; // 4251
    static +AMConvertWalletResponse: Class<EMsg__AMConvertWalletResponse> &
      EMsg__AMConvertWalletResponse &
      4252; // 4252
    static +AMRelayGetFriendsWhoPlayGame: Class<EMsg__AMRelayGetFriendsWhoPlayGame> &
      EMsg__AMRelayGetFriendsWhoPlayGame &
      4253; // 4253
    static +AMRelayGetFriendsWhoPlayGameResponse: Class<EMsg__AMRelayGetFriendsWhoPlayGameResponse> &
      EMsg__AMRelayGetFriendsWhoPlayGameResponse &
      4254; // 4254
    static +AMSetPreApproval: Class<EMsg__AMSetPreApproval> &
      EMsg__AMSetPreApproval &
      4255; // 4255
    static +AMSetPreApprovalResponse: Class<EMsg__AMSetPreApprovalResponse> &
      EMsg__AMSetPreApprovalResponse &
      4256; // 4256
    static +AMMarketingTreatmentUpdate: Class<EMsg__AMMarketingTreatmentUpdate> &
      EMsg__AMMarketingTreatmentUpdate &
      4257; // 4257
    static +AMCreateRefund: Class<EMsg__AMCreateRefund> &
      EMsg__AMCreateRefund &
      4258; // 4258
    static +AMCreateRefundResponse: Class<EMsg__AMCreateRefundResponse> &
      EMsg__AMCreateRefundResponse &
      4259; // 4259
    static +AMCreateChargeback: Class<EMsg__AMCreateChargeback> &
      EMsg__AMCreateChargeback &
      4260; // 4260
    static +AMCreateChargebackResponse: Class<EMsg__AMCreateChargebackResponse> &
      EMsg__AMCreateChargebackResponse &
      4261; // 4261
    static +AMCreateDispute: Class<EMsg__AMCreateDispute> &
      EMsg__AMCreateDispute &
      4262; // 4262
    static +AMCreateDisputeResponse: Class<EMsg__AMCreateDisputeResponse> &
      EMsg__AMCreateDisputeResponse &
      4263; // 4263
    static +AMClearDispute: Class<EMsg__AMClearDispute> &
      EMsg__AMClearDispute &
      4264; // 4264
    static +AMClearDisputeResponse: Class<EMsg__AMClearDisputeResponse> &
      EMsg__AMClearDisputeResponse &
      4265; // 4265
    static +AMPlayerNicknameList: Class<EMsg__AMPlayerNicknameList> &
      EMsg__AMPlayerNicknameList &
      4266; // 4266
    static +AMPlayerNicknameListResponse: Class<EMsg__AMPlayerNicknameListResponse> &
      EMsg__AMPlayerNicknameListResponse &
      4267; // 4267
    static +AMSetDRMTestConfig: Class<EMsg__AMSetDRMTestConfig> &
      EMsg__AMSetDRMTestConfig &
      4268; // 4268
    static +AMGetUserCurrentGameInfo: Class<EMsg__AMGetUserCurrentGameInfo> &
      EMsg__AMGetUserCurrentGameInfo &
      4269; // 4269
    static +AMGetUserCurrentGameInfoResponse: Class<EMsg__AMGetUserCurrentGameInfoResponse> &
      EMsg__AMGetUserCurrentGameInfoResponse &
      4270; // 4270
    static +AMGetGSPlayerList: Class<EMsg__AMGetGSPlayerList> &
      EMsg__AMGetGSPlayerList &
      4271; // 4271
    static +AMGetGSPlayerListResponse: Class<EMsg__AMGetGSPlayerListResponse> &
      EMsg__AMGetGSPlayerListResponse &
      4272; // 4272
    static +AMUpdatePersonaStateCache: Class<EMsg__AMUpdatePersonaStateCache> &
      EMsg__AMUpdatePersonaStateCache &
      4275; // 4275
    static +AMGetGameMembers: Class<EMsg__AMGetGameMembers> &
      EMsg__AMGetGameMembers &
      4276; // 4276
    static +AMGetGameMembersResponse: Class<EMsg__AMGetGameMembersResponse> &
      EMsg__AMGetGameMembersResponse &
      4277; // 4277
    static +AMGetSteamIDForMicroTxn: Class<EMsg__AMGetSteamIDForMicroTxn> &
      EMsg__AMGetSteamIDForMicroTxn &
      4278; // 4278
    static +AMGetSteamIDForMicroTxnResponse: Class<EMsg__AMGetSteamIDForMicroTxnResponse> &
      EMsg__AMGetSteamIDForMicroTxnResponse &
      4279; // 4279
    static +AMAddPublisherUser: Class<EMsg__AMAddPublisherUser> &
      EMsg__AMAddPublisherUser &
      4280; // 4280
    static +AMRemovePublisherUser: Class<EMsg__AMRemovePublisherUser> &
      EMsg__AMRemovePublisherUser &
      4281; // 4281
    static +AMGetUserLicenseList: Class<EMsg__AMGetUserLicenseList> &
      EMsg__AMGetUserLicenseList &
      4282; // 4282
    static +AMGetUserLicenseListResponse: Class<EMsg__AMGetUserLicenseListResponse> &
      EMsg__AMGetUserLicenseListResponse &
      4283; // 4283
    static +AMReloadGameGroupPolicy: Class<EMsg__AMReloadGameGroupPolicy> &
      EMsg__AMReloadGameGroupPolicy &
      4284; // 4284
    static +AMAddFreeLicenseResponse: Class<EMsg__AMAddFreeLicenseResponse> &
      EMsg__AMAddFreeLicenseResponse &
      4285; // 4285
    static +AMVACStatusUpdate: Class<EMsg__AMVACStatusUpdate> &
      EMsg__AMVACStatusUpdate &
      4286; // 4286
    static +AMGetAccountDetails: Class<EMsg__AMGetAccountDetails> &
      EMsg__AMGetAccountDetails &
      4287; // 4287
    static +AMGetAccountDetailsResponse: Class<EMsg__AMGetAccountDetailsResponse> &
      EMsg__AMGetAccountDetailsResponse &
      4288; // 4288
    static +AMGetPlayerLinkDetails: Class<EMsg__AMGetPlayerLinkDetails> &
      EMsg__AMGetPlayerLinkDetails &
      4289; // 4289
    static +AMGetPlayerLinkDetailsResponse: Class<EMsg__AMGetPlayerLinkDetailsResponse> &
      EMsg__AMGetPlayerLinkDetailsResponse &
      4290; // 4290
    static +AMSubscribeToPersonaFeed: Class<EMsg__AMSubscribeToPersonaFeed> &
      EMsg__AMSubscribeToPersonaFeed &
      4291; // 4291
    static +AMGetUserVacBanList: Class<EMsg__AMGetUserVacBanList> &
      EMsg__AMGetUserVacBanList &
      4292; // 4292
    static +AMGetUserVacBanListResponse: Class<EMsg__AMGetUserVacBanListResponse> &
      EMsg__AMGetUserVacBanListResponse &
      4293; // 4293
    static +AMGetAccountFlagsForWGSpoofing: Class<EMsg__AMGetAccountFlagsForWGSpoofing> &
      EMsg__AMGetAccountFlagsForWGSpoofing &
      4294; // 4294
    static +AMGetAccountFlagsForWGSpoofingResponse: Class<EMsg__AMGetAccountFlagsForWGSpoofingResponse> &
      EMsg__AMGetAccountFlagsForWGSpoofingResponse &
      4295; // 4295
    static +AMGetFriendsWishlistInfo: Class<EMsg__AMGetFriendsWishlistInfo> &
      EMsg__AMGetFriendsWishlistInfo &
      4296; // 4296
    static +AMGetFriendsWishlistInfoResponse: Class<EMsg__AMGetFriendsWishlistInfoResponse> &
      EMsg__AMGetFriendsWishlistInfoResponse &
      4297; // 4297
    static +AMGetClanOfficers: Class<EMsg__AMGetClanOfficers> &
      EMsg__AMGetClanOfficers &
      4298; // 4298
    static +AMGetClanOfficersResponse: Class<EMsg__AMGetClanOfficersResponse> &
      EMsg__AMGetClanOfficersResponse &
      4299; // 4299
    static +AMNameChange: Class<EMsg__AMNameChange> & EMsg__AMNameChange & 4300; // 4300
    static +AMGetNameHistory: Class<EMsg__AMGetNameHistory> &
      EMsg__AMGetNameHistory &
      4301; // 4301
    static +AMGetNameHistoryResponse: Class<EMsg__AMGetNameHistoryResponse> &
      EMsg__AMGetNameHistoryResponse &
      4302; // 4302
    static +AMUpdateProviderStatus: Class<EMsg__AMUpdateProviderStatus> &
      EMsg__AMUpdateProviderStatus &
      4305; // 4305
    static +AMClearPersonaMetadataBlob: Class<EMsg__AMClearPersonaMetadataBlob> &
      EMsg__AMClearPersonaMetadataBlob &
      4306; // 4306
    static +AMSupportRemoveAccountSecurity: Class<EMsg__AMSupportRemoveAccountSecurity> &
      EMsg__AMSupportRemoveAccountSecurity &
      4307; // 4307
    static +AMIsAccountInCaptchaGracePeriod: Class<EMsg__AMIsAccountInCaptchaGracePeriod> &
      EMsg__AMIsAccountInCaptchaGracePeriod &
      4308; // 4308
    static +AMIsAccountInCaptchaGracePeriodResponse: Class<EMsg__AMIsAccountInCaptchaGracePeriodResponse> &
      EMsg__AMIsAccountInCaptchaGracePeriodResponse &
      4309; // 4309
    static +AMAccountPS3Unlink: Class<EMsg__AMAccountPS3Unlink> &
      EMsg__AMAccountPS3Unlink &
      4310; // 4310
    static +AMAccountPS3UnlinkResponse: Class<EMsg__AMAccountPS3UnlinkResponse> &
      EMsg__AMAccountPS3UnlinkResponse &
      4311; // 4311
    static +AMStoreUserStatsResponse: Class<EMsg__AMStoreUserStatsResponse> &
      EMsg__AMStoreUserStatsResponse &
      4312; // 4312
    static +AMGetAccountPSNInfo: Class<EMsg__AMGetAccountPSNInfo> &
      EMsg__AMGetAccountPSNInfo &
      4313; // 4313
    static +AMGetAccountPSNInfoResponse: Class<EMsg__AMGetAccountPSNInfoResponse> &
      EMsg__AMGetAccountPSNInfoResponse &
      4314; // 4314
    static +AMAuthenticatedPlayerList: Class<EMsg__AMAuthenticatedPlayerList> &
      EMsg__AMAuthenticatedPlayerList &
      4315; // 4315
    static +AMGetUserGifts: Class<EMsg__AMGetUserGifts> &
      EMsg__AMGetUserGifts &
      4316; // 4316
    static +AMGetUserGiftsResponse: Class<EMsg__AMGetUserGiftsResponse> &
      EMsg__AMGetUserGiftsResponse &
      4317; // 4317
    static +AMTransferLockedGifts: Class<EMsg__AMTransferLockedGifts> &
      EMsg__AMTransferLockedGifts &
      4320; // 4320
    static +AMTransferLockedGiftsResponse: Class<EMsg__AMTransferLockedGiftsResponse> &
      EMsg__AMTransferLockedGiftsResponse &
      4321; // 4321
    static +AMPlayerHostedOnGameServer: Class<EMsg__AMPlayerHostedOnGameServer> &
      EMsg__AMPlayerHostedOnGameServer &
      4322; // 4322
    static +AMGetAccountBanInfo: Class<EMsg__AMGetAccountBanInfo> &
      EMsg__AMGetAccountBanInfo &
      4323; // 4323
    static +AMGetAccountBanInfoResponse: Class<EMsg__AMGetAccountBanInfoResponse> &
      EMsg__AMGetAccountBanInfoResponse &
      4324; // 4324
    static +AMRecordBanEnforcement: Class<EMsg__AMRecordBanEnforcement> &
      EMsg__AMRecordBanEnforcement &
      4325; // 4325
    static +AMRollbackGiftTransfer: Class<EMsg__AMRollbackGiftTransfer> &
      EMsg__AMRollbackGiftTransfer &
      4326; // 4326
    static +AMRollbackGiftTransferResponse: Class<EMsg__AMRollbackGiftTransferResponse> &
      EMsg__AMRollbackGiftTransferResponse &
      4327; // 4327
    static +AMHandlePendingTransaction: Class<EMsg__AMHandlePendingTransaction> &
      EMsg__AMHandlePendingTransaction &
      4328; // 4328
    static +AMRequestClanDetails: Class<EMsg__AMRequestClanDetails> &
      EMsg__AMRequestClanDetails &
      4329; // 4329
    static +AMDeleteStoredPaypalAgreement: Class<EMsg__AMDeleteStoredPaypalAgreement> &
      EMsg__AMDeleteStoredPaypalAgreement &
      4330; // 4330
    static +AMGameServerUpdate: Class<EMsg__AMGameServerUpdate> &
      EMsg__AMGameServerUpdate &
      4331; // 4331
    static +AMGameServerRemove: Class<EMsg__AMGameServerRemove> &
      EMsg__AMGameServerRemove &
      4332; // 4332
    static +AMGetPaypalAgreements: Class<EMsg__AMGetPaypalAgreements> &
      EMsg__AMGetPaypalAgreements &
      4333; // 4333
    static +AMGetPaypalAgreementsResponse: Class<EMsg__AMGetPaypalAgreementsResponse> &
      EMsg__AMGetPaypalAgreementsResponse &
      4334; // 4334
    static +AMGameServerPlayerCompatibilityCheck: Class<EMsg__AMGameServerPlayerCompatibilityCheck> &
      EMsg__AMGameServerPlayerCompatibilityCheck &
      4335; // 4335
    static +AMGameServerPlayerCompatibilityCheckResponse: Class<EMsg__AMGameServerPlayerCompatibilityCheckResponse> &
      EMsg__AMGameServerPlayerCompatibilityCheckResponse &
      4336; // 4336
    static +AMRenewLicense: Class<EMsg__AMRenewLicense> &
      EMsg__AMRenewLicense &
      4337; // 4337
    static +AMGetAccountCommunityBanInfo: Class<EMsg__AMGetAccountCommunityBanInfo> &
      EMsg__AMGetAccountCommunityBanInfo &
      4338; // 4338
    static +AMGetAccountCommunityBanInfoResponse: Class<EMsg__AMGetAccountCommunityBanInfoResponse> &
      EMsg__AMGetAccountCommunityBanInfoResponse &
      4339; // 4339
    static +AMGameServerAccountChangePassword: Class<EMsg__AMGameServerAccountChangePassword> &
      EMsg__AMGameServerAccountChangePassword &
      4340; // 4340
    static +AMGameServerAccountDeleteAccount: Class<EMsg__AMGameServerAccountDeleteAccount> &
      EMsg__AMGameServerAccountDeleteAccount &
      4341; // 4341
    static +AMRenewAgreement: Class<EMsg__AMRenewAgreement> &
      EMsg__AMRenewAgreement &
      4342; // 4342
    static +AMSendEmail: Class<EMsg__AMSendEmail> & EMsg__AMSendEmail & 4343; // 4343
    static +AMXsollaPayment: Class<EMsg__AMXsollaPayment> &
      EMsg__AMXsollaPayment &
      4344; // 4344
    static +AMXsollaPaymentResponse: Class<EMsg__AMXsollaPaymentResponse> &
      EMsg__AMXsollaPaymentResponse &
      4345; // 4345
    static +AMAcctAllowedToPurchase: Class<EMsg__AMAcctAllowedToPurchase> &
      EMsg__AMAcctAllowedToPurchase &
      4346; // 4346
    static +AMAcctAllowedToPurchaseResponse: Class<EMsg__AMAcctAllowedToPurchaseResponse> &
      EMsg__AMAcctAllowedToPurchaseResponse &
      4347; // 4347
    static +AMSwapKioskDeposit: Class<EMsg__AMSwapKioskDeposit> &
      EMsg__AMSwapKioskDeposit &
      4348; // 4348
    static +AMSwapKioskDepositResponse: Class<EMsg__AMSwapKioskDepositResponse> &
      EMsg__AMSwapKioskDepositResponse &
      4349; // 4349
    static +AMSetUserGiftUnowned: Class<EMsg__AMSetUserGiftUnowned> &
      EMsg__AMSetUserGiftUnowned &
      4350; // 4350
    static +AMSetUserGiftUnownedResponse: Class<EMsg__AMSetUserGiftUnownedResponse> &
      EMsg__AMSetUserGiftUnownedResponse &
      4351; // 4351
    static +AMClaimUnownedUserGift: Class<EMsg__AMClaimUnownedUserGift> &
      EMsg__AMClaimUnownedUserGift &
      4352; // 4352
    static +AMClaimUnownedUserGiftResponse: Class<EMsg__AMClaimUnownedUserGiftResponse> &
      EMsg__AMClaimUnownedUserGiftResponse &
      4353; // 4353
    static +AMSetClanName: Class<EMsg__AMSetClanName> &
      EMsg__AMSetClanName &
      4354; // 4354
    static +AMSetClanNameResponse: Class<EMsg__AMSetClanNameResponse> &
      EMsg__AMSetClanNameResponse &
      4355; // 4355
    static +AMGrantCoupon: Class<EMsg__AMGrantCoupon> &
      EMsg__AMGrantCoupon &
      4356; // 4356
    static +AMGrantCouponResponse: Class<EMsg__AMGrantCouponResponse> &
      EMsg__AMGrantCouponResponse &
      4357; // 4357
    static +AMIsPackageRestrictedInUserCountry: Class<EMsg__AMIsPackageRestrictedInUserCountry> &
      EMsg__AMIsPackageRestrictedInUserCountry &
      4358; // 4358
    static +AMIsPackageRestrictedInUserCountryResponse: Class<EMsg__AMIsPackageRestrictedInUserCountryResponse> &
      EMsg__AMIsPackageRestrictedInUserCountryResponse &
      4359; // 4359
    static +AMHandlePendingTransactionResponse: Class<EMsg__AMHandlePendingTransactionResponse> &
      EMsg__AMHandlePendingTransactionResponse &
      4360; // 4360
    static +AMGrantGuestPasses2: Class<EMsg__AMGrantGuestPasses2> &
      EMsg__AMGrantGuestPasses2 &
      4361; // 4361
    static +AMGrantGuestPasses2Response: Class<EMsg__AMGrantGuestPasses2Response> &
      EMsg__AMGrantGuestPasses2Response &
      4362; // 4362
    static +AMSessionQuery: Class<EMsg__AMSessionQuery> &
      EMsg__AMSessionQuery &
      4363; // 4363
    static +AMSessionQueryResponse: Class<EMsg__AMSessionQueryResponse> &
      EMsg__AMSessionQueryResponse &
      4364; // 4364
    static +AMGetPlayerBanDetails: Class<EMsg__AMGetPlayerBanDetails> &
      EMsg__AMGetPlayerBanDetails &
      4365; // 4365
    static +AMGetPlayerBanDetailsResponse: Class<EMsg__AMGetPlayerBanDetailsResponse> &
      EMsg__AMGetPlayerBanDetailsResponse &
      4366; // 4366
    static +AMFinalizePurchase: Class<EMsg__AMFinalizePurchase> &
      EMsg__AMFinalizePurchase &
      4367; // 4367
    static +AMFinalizePurchaseResponse: Class<EMsg__AMFinalizePurchaseResponse> &
      EMsg__AMFinalizePurchaseResponse &
      4368; // 4368
    static +AMPersonaChangeResponse: Class<EMsg__AMPersonaChangeResponse> &
      EMsg__AMPersonaChangeResponse &
      4372; // 4372
    static +AMGetClanDetailsForForumCreation: Class<EMsg__AMGetClanDetailsForForumCreation> &
      EMsg__AMGetClanDetailsForForumCreation &
      4373; // 4373
    static +AMGetClanDetailsForForumCreationResponse: Class<EMsg__AMGetClanDetailsForForumCreationResponse> &
      EMsg__AMGetClanDetailsForForumCreationResponse &
      4374; // 4374
    static +AMGetPendingNotificationCount: Class<EMsg__AMGetPendingNotificationCount> &
      EMsg__AMGetPendingNotificationCount &
      4375; // 4375
    static +AMGetPendingNotificationCountResponse: Class<EMsg__AMGetPendingNotificationCountResponse> &
      EMsg__AMGetPendingNotificationCountResponse &
      4376; // 4376
    static +AMPasswordHashUpgrade: Class<EMsg__AMPasswordHashUpgrade> &
      EMsg__AMPasswordHashUpgrade &
      4377; // 4377
    static +AMMoPayPayment: Class<EMsg__AMMoPayPayment> &
      EMsg__AMMoPayPayment &
      4378; // 4378
    static +AMMoPayPaymentResponse: Class<EMsg__AMMoPayPaymentResponse> &
      EMsg__AMMoPayPaymentResponse &
      4379; // 4379
    static +AMBoaCompraPayment: Class<EMsg__AMBoaCompraPayment> &
      EMsg__AMBoaCompraPayment &
      4380; // 4380
    static +AMBoaCompraPaymentResponse: Class<EMsg__AMBoaCompraPaymentResponse> &
      EMsg__AMBoaCompraPaymentResponse &
      4381; // 4381
    static +AMExpireCaptchaByGID: Class<EMsg__AMExpireCaptchaByGID> &
      EMsg__AMExpireCaptchaByGID &
      4382; // 4382
    static +AMCompleteExternalPurchase: Class<EMsg__AMCompleteExternalPurchase> &
      EMsg__AMCompleteExternalPurchase &
      4383; // 4383
    static +AMCompleteExternalPurchaseResponse: Class<EMsg__AMCompleteExternalPurchaseResponse> &
      EMsg__AMCompleteExternalPurchaseResponse &
      4384; // 4384
    static +AMResolveNegativeWalletCredits: Class<EMsg__AMResolveNegativeWalletCredits> &
      EMsg__AMResolveNegativeWalletCredits &
      4385; // 4385
    static +AMResolveNegativeWalletCreditsResponse: Class<EMsg__AMResolveNegativeWalletCreditsResponse> &
      EMsg__AMResolveNegativeWalletCreditsResponse &
      4386; // 4386
    static +AMPayelpPayment: Class<EMsg__AMPayelpPayment> &
      EMsg__AMPayelpPayment &
      4387; // 4387
    static +AMPayelpPaymentResponse: Class<EMsg__AMPayelpPaymentResponse> &
      EMsg__AMPayelpPaymentResponse &
      4388; // 4388
    static +AMPlayerGetClanBasicDetails: Class<EMsg__AMPlayerGetClanBasicDetails> &
      EMsg__AMPlayerGetClanBasicDetails &
      4389; // 4389
    static +AMPlayerGetClanBasicDetailsResponse: Class<EMsg__AMPlayerGetClanBasicDetailsResponse> &
      EMsg__AMPlayerGetClanBasicDetailsResponse &
      4390; // 4390
    static +AMMOLPayment: Class<EMsg__AMMOLPayment> & EMsg__AMMOLPayment & 4391; // 4391
    static +AMMOLPaymentResponse: Class<EMsg__AMMOLPaymentResponse> &
      EMsg__AMMOLPaymentResponse &
      4392; // 4392
    static +GetUserIPCountry: Class<EMsg__GetUserIPCountry> &
      EMsg__GetUserIPCountry &
      4393; // 4393
    static +GetUserIPCountryResponse: Class<EMsg__GetUserIPCountryResponse> &
      EMsg__GetUserIPCountryResponse &
      4394; // 4394
    static +NotificationOfSuspiciousActivity: Class<EMsg__NotificationOfSuspiciousActivity> &
      EMsg__NotificationOfSuspiciousActivity &
      4395; // 4395
    static +AMDegicaPayment: Class<EMsg__AMDegicaPayment> &
      EMsg__AMDegicaPayment &
      4396; // 4396
    static +AMDegicaPaymentResponse: Class<EMsg__AMDegicaPaymentResponse> &
      EMsg__AMDegicaPaymentResponse &
      4397; // 4397
    static +AMEClubPayment: Class<EMsg__AMEClubPayment> &
      EMsg__AMEClubPayment &
      4398; // 4398
    static +AMEClubPaymentResponse: Class<EMsg__AMEClubPaymentResponse> &
      EMsg__AMEClubPaymentResponse &
      4399; // 4399
    static +AMPayPalPaymentsHubPayment: Class<EMsg__AMPayPalPaymentsHubPayment> &
      EMsg__AMPayPalPaymentsHubPayment &
      4400; // 4400
    static +AMPayPalPaymentsHubPaymentResponse: Class<EMsg__AMPayPalPaymentsHubPaymentResponse> &
      EMsg__AMPayPalPaymentsHubPaymentResponse &
      4401; // 4401
    static +AMTwoFactorRecoverAuthenticatorRequest: Class<EMsg__AMTwoFactorRecoverAuthenticatorRequest> &
      EMsg__AMTwoFactorRecoverAuthenticatorRequest &
      4402; // 4402
    static +AMTwoFactorRecoverAuthenticatorResponse: Class<EMsg__AMTwoFactorRecoverAuthenticatorResponse> &
      EMsg__AMTwoFactorRecoverAuthenticatorResponse &
      4403; // 4403
    static +AMSmart2PayPayment: Class<EMsg__AMSmart2PayPayment> &
      EMsg__AMSmart2PayPayment &
      4404; // 4404
    static +AMSmart2PayPaymentResponse: Class<EMsg__AMSmart2PayPaymentResponse> &
      EMsg__AMSmart2PayPaymentResponse &
      4405; // 4405
    static +AMValidatePasswordResetCodeAndSendSmsRequest: Class<EMsg__AMValidatePasswordResetCodeAndSendSmsRequest> &
      EMsg__AMValidatePasswordResetCodeAndSendSmsRequest &
      4406; // 4406
    static +AMValidatePasswordResetCodeAndSendSmsResponse: Class<EMsg__AMValidatePasswordResetCodeAndSendSmsResponse> &
      EMsg__AMValidatePasswordResetCodeAndSendSmsResponse &
      4407; // 4407
    static +AMGetAccountResetDetailsRequest: Class<EMsg__AMGetAccountResetDetailsRequest> &
      EMsg__AMGetAccountResetDetailsRequest &
      4408; // 4408
    static +AMGetAccountResetDetailsResponse: Class<EMsg__AMGetAccountResetDetailsResponse> &
      EMsg__AMGetAccountResetDetailsResponse &
      4409; // 4409
    static +AMBitPayPayment: Class<EMsg__AMBitPayPayment> &
      EMsg__AMBitPayPayment &
      4410; // 4410
    static +AMBitPayPaymentResponse: Class<EMsg__AMBitPayPaymentResponse> &
      EMsg__AMBitPayPaymentResponse &
      4411; // 4411
    static +AMSendAccountInfoUpdate: Class<EMsg__AMSendAccountInfoUpdate> &
      EMsg__AMSendAccountInfoUpdate &
      4412; // 4412
    static +BasePSRange: Class<EMsg__BasePSRange> & EMsg__BasePSRange & 5000; // 5000
    static +PSCreateShoppingCart: Class<EMsg__PSCreateShoppingCart> &
      EMsg__PSCreateShoppingCart &
      5001; // 5001
    static +PSCreateShoppingCartResponse: Class<EMsg__PSCreateShoppingCartResponse> &
      EMsg__PSCreateShoppingCartResponse &
      5002; // 5002
    static +PSIsValidShoppingCart: Class<EMsg__PSIsValidShoppingCart> &
      EMsg__PSIsValidShoppingCart &
      5003; // 5003
    static +PSIsValidShoppingCartResponse: Class<EMsg__PSIsValidShoppingCartResponse> &
      EMsg__PSIsValidShoppingCartResponse &
      5004; // 5004
    static +PSAddPackageToShoppingCart: Class<EMsg__PSAddPackageToShoppingCart> &
      EMsg__PSAddPackageToShoppingCart &
      5005; // 5005
    static +PSAddPackageToShoppingCartResponse: Class<EMsg__PSAddPackageToShoppingCartResponse> &
      EMsg__PSAddPackageToShoppingCartResponse &
      5006; // 5006
    static +PSRemoveLineItemFromShoppingCart: Class<EMsg__PSRemoveLineItemFromShoppingCart> &
      EMsg__PSRemoveLineItemFromShoppingCart &
      5007; // 5007
    static +PSRemoveLineItemFromShoppingCartResponse: Class<EMsg__PSRemoveLineItemFromShoppingCartResponse> &
      EMsg__PSRemoveLineItemFromShoppingCartResponse &
      5008; // 5008
    static +PSGetShoppingCartContents: Class<EMsg__PSGetShoppingCartContents> &
      EMsg__PSGetShoppingCartContents &
      5009; // 5009
    static +PSGetShoppingCartContentsResponse: Class<EMsg__PSGetShoppingCartContentsResponse> &
      EMsg__PSGetShoppingCartContentsResponse &
      5010; // 5010
    static +PSAddWalletCreditToShoppingCart: Class<EMsg__PSAddWalletCreditToShoppingCart> &
      EMsg__PSAddWalletCreditToShoppingCart &
      5011; // 5011
    static +PSAddWalletCreditToShoppingCartResponse: Class<EMsg__PSAddWalletCreditToShoppingCartResponse> &
      EMsg__PSAddWalletCreditToShoppingCartResponse &
      5012; // 5012
    static +BaseUFSRange: Class<EMsg__BaseUFSRange> & EMsg__BaseUFSRange & 5200; // 5200
    static +ClientUFSUploadFileRequest: Class<EMsg__ClientUFSUploadFileRequest> &
      EMsg__ClientUFSUploadFileRequest &
      5202; // 5202
    static +ClientUFSUploadFileResponse: Class<EMsg__ClientUFSUploadFileResponse> &
      EMsg__ClientUFSUploadFileResponse &
      5203; // 5203
    static +ClientUFSUploadFileChunk: Class<EMsg__ClientUFSUploadFileChunk> &
      EMsg__ClientUFSUploadFileChunk &
      5204; // 5204
    static +ClientUFSUploadFileFinished: Class<EMsg__ClientUFSUploadFileFinished> &
      EMsg__ClientUFSUploadFileFinished &
      5205; // 5205
    static +ClientUFSGetFileListForApp: Class<EMsg__ClientUFSGetFileListForApp> &
      EMsg__ClientUFSGetFileListForApp &
      5206; // 5206
    static +ClientUFSGetFileListForAppResponse: Class<EMsg__ClientUFSGetFileListForAppResponse> &
      EMsg__ClientUFSGetFileListForAppResponse &
      5207; // 5207
    static +ClientUFSDownloadRequest: Class<EMsg__ClientUFSDownloadRequest> &
      EMsg__ClientUFSDownloadRequest &
      5210; // 5210
    static +ClientUFSDownloadResponse: Class<EMsg__ClientUFSDownloadResponse> &
      EMsg__ClientUFSDownloadResponse &
      5211; // 5211
    static +ClientUFSDownloadChunk: Class<EMsg__ClientUFSDownloadChunk> &
      EMsg__ClientUFSDownloadChunk &
      5212; // 5212
    static +ClientUFSLoginRequest: Class<EMsg__ClientUFSLoginRequest> &
      EMsg__ClientUFSLoginRequest &
      5213; // 5213
    static +ClientUFSLoginResponse: Class<EMsg__ClientUFSLoginResponse> &
      EMsg__ClientUFSLoginResponse &
      5214; // 5214
    static +UFSReloadPartitionInfo: Class<EMsg__UFSReloadPartitionInfo> &
      EMsg__UFSReloadPartitionInfo &
      5215; // 5215
    static +ClientUFSTransferHeartbeat: Class<EMsg__ClientUFSTransferHeartbeat> &
      EMsg__ClientUFSTransferHeartbeat &
      5216; // 5216
    static +UFSSynchronizeFile: Class<EMsg__UFSSynchronizeFile> &
      EMsg__UFSSynchronizeFile &
      5217; // 5217
    static +UFSSynchronizeFileResponse: Class<EMsg__UFSSynchronizeFileResponse> &
      EMsg__UFSSynchronizeFileResponse &
      5218; // 5218
    static +ClientUFSDeleteFileRequest: Class<EMsg__ClientUFSDeleteFileRequest> &
      EMsg__ClientUFSDeleteFileRequest &
      5219; // 5219
    static +ClientUFSDeleteFileResponse: Class<EMsg__ClientUFSDeleteFileResponse> &
      EMsg__ClientUFSDeleteFileResponse &
      5220; // 5220
    static +UFSDownloadRequest: Class<EMsg__UFSDownloadRequest> &
      EMsg__UFSDownloadRequest &
      5221; // 5221
    static +UFSDownloadResponse: Class<EMsg__UFSDownloadResponse> &
      EMsg__UFSDownloadResponse &
      5222; // 5222
    static +UFSDownloadChunk: Class<EMsg__UFSDownloadChunk> &
      EMsg__UFSDownloadChunk &
      5223; // 5223
    static +ClientUFSGetUGCDetails: Class<EMsg__ClientUFSGetUGCDetails> &
      EMsg__ClientUFSGetUGCDetails &
      5226; // 5226
    static +ClientUFSGetUGCDetailsResponse: Class<EMsg__ClientUFSGetUGCDetailsResponse> &
      EMsg__ClientUFSGetUGCDetailsResponse &
      5227; // 5227
    static +UFSUpdateFileFlags: Class<EMsg__UFSUpdateFileFlags> &
      EMsg__UFSUpdateFileFlags &
      5228; // 5228
    static +UFSUpdateFileFlagsResponse: Class<EMsg__UFSUpdateFileFlagsResponse> &
      EMsg__UFSUpdateFileFlagsResponse &
      5229; // 5229
    static +ClientUFSGetSingleFileInfo: Class<EMsg__ClientUFSGetSingleFileInfo> &
      EMsg__ClientUFSGetSingleFileInfo &
      5230; // 5230
    static +ClientUFSGetSingleFileInfoResponse: Class<EMsg__ClientUFSGetSingleFileInfoResponse> &
      EMsg__ClientUFSGetSingleFileInfoResponse &
      5231; // 5231
    static +ClientUFSShareFile: Class<EMsg__ClientUFSShareFile> &
      EMsg__ClientUFSShareFile &
      5232; // 5232
    static +ClientUFSShareFileResponse: Class<EMsg__ClientUFSShareFileResponse> &
      EMsg__ClientUFSShareFileResponse &
      5233; // 5233
    static +UFSReloadAccount: Class<EMsg__UFSReloadAccount> &
      EMsg__UFSReloadAccount &
      5234; // 5234
    static +UFSReloadAccountResponse: Class<EMsg__UFSReloadAccountResponse> &
      EMsg__UFSReloadAccountResponse &
      5235; // 5235
    static +UFSUpdateRecordBatched: Class<EMsg__UFSUpdateRecordBatched> &
      EMsg__UFSUpdateRecordBatched &
      5236; // 5236
    static +UFSUpdateRecordBatchedResponse: Class<EMsg__UFSUpdateRecordBatchedResponse> &
      EMsg__UFSUpdateRecordBatchedResponse &
      5237; // 5237
    static +UFSMigrateFile: Class<EMsg__UFSMigrateFile> &
      EMsg__UFSMigrateFile &
      5238; // 5238
    static +UFSMigrateFileResponse: Class<EMsg__UFSMigrateFileResponse> &
      EMsg__UFSMigrateFileResponse &
      5239; // 5239
    static +UFSGetUGCURLs: Class<EMsg__UFSGetUGCURLs> &
      EMsg__UFSGetUGCURLs &
      5240; // 5240
    static +UFSGetUGCURLsResponse: Class<EMsg__UFSGetUGCURLsResponse> &
      EMsg__UFSGetUGCURLsResponse &
      5241; // 5241
    static +UFSHttpUploadFileFinishRequest: Class<EMsg__UFSHttpUploadFileFinishRequest> &
      EMsg__UFSHttpUploadFileFinishRequest &
      5242; // 5242
    static +UFSHttpUploadFileFinishResponse: Class<EMsg__UFSHttpUploadFileFinishResponse> &
      EMsg__UFSHttpUploadFileFinishResponse &
      5243; // 5243
    static +UFSDownloadStartRequest: Class<EMsg__UFSDownloadStartRequest> &
      EMsg__UFSDownloadStartRequest &
      5244; // 5244
    static +UFSDownloadStartResponse: Class<EMsg__UFSDownloadStartResponse> &
      EMsg__UFSDownloadStartResponse &
      5245; // 5245
    static +UFSDownloadChunkRequest: Class<EMsg__UFSDownloadChunkRequest> &
      EMsg__UFSDownloadChunkRequest &
      5246; // 5246
    static +UFSDownloadChunkResponse: Class<EMsg__UFSDownloadChunkResponse> &
      EMsg__UFSDownloadChunkResponse &
      5247; // 5247
    static +UFSDownloadFinishRequest: Class<EMsg__UFSDownloadFinishRequest> &
      EMsg__UFSDownloadFinishRequest &
      5248; // 5248
    static +UFSDownloadFinishResponse: Class<EMsg__UFSDownloadFinishResponse> &
      EMsg__UFSDownloadFinishResponse &
      5249; // 5249
    static +UFSFlushURLCache: Class<EMsg__UFSFlushURLCache> &
      EMsg__UFSFlushURLCache &
      5250; // 5250
    static +UFSUploadCommit: Class<EMsg__UFSUploadCommit> &
      EMsg__UFSUploadCommit &
      5251; // 5251
    static +UFSUploadCommitResponse: Class<EMsg__UFSUploadCommitResponse> &
      EMsg__UFSUploadCommitResponse &
      5252; // 5252
    static +UFSMigrateFileAppID: Class<EMsg__UFSMigrateFileAppID> &
      EMsg__UFSMigrateFileAppID &
      5253; // 5253
    static +UFSMigrateFileAppIDResponse: Class<EMsg__UFSMigrateFileAppIDResponse> &
      EMsg__UFSMigrateFileAppIDResponse &
      5254; // 5254
    static +BaseClient2: Class<EMsg__BaseClient2> & EMsg__BaseClient2 & 5400; // 5400
    static +ClientRequestForgottenPasswordEmail: Class<EMsg__ClientRequestForgottenPasswordEmail> &
      EMsg__ClientRequestForgottenPasswordEmail &
      5401; // 5401
    static +ClientRequestForgottenPasswordEmailResponse: Class<EMsg__ClientRequestForgottenPasswordEmailResponse> &
      EMsg__ClientRequestForgottenPasswordEmailResponse &
      5402; // 5402
    static +ClientCreateAccountResponse: Class<EMsg__ClientCreateAccountResponse> &
      EMsg__ClientCreateAccountResponse &
      5403; // 5403
    static +ClientResetForgottenPassword: Class<EMsg__ClientResetForgottenPassword> &
      EMsg__ClientResetForgottenPassword &
      5404; // 5404
    static +ClientResetForgottenPasswordResponse: Class<EMsg__ClientResetForgottenPasswordResponse> &
      EMsg__ClientResetForgottenPasswordResponse &
      5405; // 5405
    static +ClientCreateAccount2: Class<EMsg__ClientCreateAccount2> &
      EMsg__ClientCreateAccount2 &
      5406; // 5406
    static +ClientInformOfResetForgottenPassword: Class<EMsg__ClientInformOfResetForgottenPassword> &
      EMsg__ClientInformOfResetForgottenPassword &
      5407; // 5407
    static +ClientInformOfResetForgottenPasswordResponse: Class<EMsg__ClientInformOfResetForgottenPasswordResponse> &
      EMsg__ClientInformOfResetForgottenPasswordResponse &
      5408; // 5408
    static +ClientAnonUserLogOn_Deprecated: Class<EMsg__ClientAnonUserLogOn_Deprecated> &
      EMsg__ClientAnonUserLogOn_Deprecated &
      5409; // 5409
    static +ClientGamesPlayedWithDataBlob: Class<EMsg__ClientGamesPlayedWithDataBlob> &
      EMsg__ClientGamesPlayedWithDataBlob &
      5410; // 5410
    static +ClientUpdateUserGameInfo: Class<EMsg__ClientUpdateUserGameInfo> &
      EMsg__ClientUpdateUserGameInfo &
      5411; // 5411
    static +ClientFileToDownload: Class<EMsg__ClientFileToDownload> &
      EMsg__ClientFileToDownload &
      5412; // 5412
    static +ClientFileToDownloadResponse: Class<EMsg__ClientFileToDownloadResponse> &
      EMsg__ClientFileToDownloadResponse &
      5413; // 5413
    static +ClientLBSSetScore: Class<EMsg__ClientLBSSetScore> &
      EMsg__ClientLBSSetScore &
      5414; // 5414
    static +ClientLBSSetScoreResponse: Class<EMsg__ClientLBSSetScoreResponse> &
      EMsg__ClientLBSSetScoreResponse &
      5415; // 5415
    static +ClientLBSFindOrCreateLB: Class<EMsg__ClientLBSFindOrCreateLB> &
      EMsg__ClientLBSFindOrCreateLB &
      5416; // 5416
    static +ClientLBSFindOrCreateLBResponse: Class<EMsg__ClientLBSFindOrCreateLBResponse> &
      EMsg__ClientLBSFindOrCreateLBResponse &
      5417; // 5417
    static +ClientLBSGetLBEntries: Class<EMsg__ClientLBSGetLBEntries> &
      EMsg__ClientLBSGetLBEntries &
      5418; // 5418
    static +ClientLBSGetLBEntriesResponse: Class<EMsg__ClientLBSGetLBEntriesResponse> &
      EMsg__ClientLBSGetLBEntriesResponse &
      5419; // 5419
    static +ClientMarketingMessageUpdate: Class<EMsg__ClientMarketingMessageUpdate> &
      EMsg__ClientMarketingMessageUpdate &
      5420; // 5420
    static +ClientChatDeclined: Class<EMsg__ClientChatDeclined> &
      EMsg__ClientChatDeclined &
      5426; // 5426
    static +ClientFriendMsgIncoming: Class<EMsg__ClientFriendMsgIncoming> &
      EMsg__ClientFriendMsgIncoming &
      5427; // 5427
    static +ClientAuthList_Deprecated: Class<EMsg__ClientAuthList_Deprecated> &
      EMsg__ClientAuthList_Deprecated &
      5428; // 5428
    static +ClientTicketAuthComplete: Class<EMsg__ClientTicketAuthComplete> &
      EMsg__ClientTicketAuthComplete &
      5429; // 5429
    static +ClientIsLimitedAccount: Class<EMsg__ClientIsLimitedAccount> &
      EMsg__ClientIsLimitedAccount &
      5430; // 5430
    static +ClientRequestAuthList: Class<EMsg__ClientRequestAuthList> &
      EMsg__ClientRequestAuthList &
      5431; // 5431
    static +ClientAuthList: Class<EMsg__ClientAuthList> &
      EMsg__ClientAuthList &
      5432; // 5432
    static +ClientStat: Class<EMsg__ClientStat> & EMsg__ClientStat & 5433; // 5433
    static +ClientP2PConnectionInfo: Class<EMsg__ClientP2PConnectionInfo> &
      EMsg__ClientP2PConnectionInfo &
      5434; // 5434
    static +ClientP2PConnectionFailInfo: Class<EMsg__ClientP2PConnectionFailInfo> &
      EMsg__ClientP2PConnectionFailInfo &
      5435; // 5435
    static +ClientGetNumberOfCurrentPlayers: Class<EMsg__ClientGetNumberOfCurrentPlayers> &
      EMsg__ClientGetNumberOfCurrentPlayers &
      5436; // 5436
    static +ClientGetNumberOfCurrentPlayersResponse: Class<EMsg__ClientGetNumberOfCurrentPlayersResponse> &
      EMsg__ClientGetNumberOfCurrentPlayersResponse &
      5437; // 5437
    static +ClientGetDepotDecryptionKey: Class<EMsg__ClientGetDepotDecryptionKey> &
      EMsg__ClientGetDepotDecryptionKey &
      5438; // 5438
    static +ClientGetDepotDecryptionKeyResponse: Class<EMsg__ClientGetDepotDecryptionKeyResponse> &
      EMsg__ClientGetDepotDecryptionKeyResponse &
      5439; // 5439
    static +GSPerformHardwareSurvey: Class<EMsg__GSPerformHardwareSurvey> &
      EMsg__GSPerformHardwareSurvey &
      5440; // 5440
    static +ClientGetAppBetaPasswords: Class<EMsg__ClientGetAppBetaPasswords> &
      EMsg__ClientGetAppBetaPasswords &
      5441; // 5441
    static +ClientGetAppBetaPasswordsResponse: Class<EMsg__ClientGetAppBetaPasswordsResponse> &
      EMsg__ClientGetAppBetaPasswordsResponse &
      5442; // 5442
    static +ClientEnableTestLicense: Class<EMsg__ClientEnableTestLicense> &
      EMsg__ClientEnableTestLicense &
      5443; // 5443
    static +ClientEnableTestLicenseResponse: Class<EMsg__ClientEnableTestLicenseResponse> &
      EMsg__ClientEnableTestLicenseResponse &
      5444; // 5444
    static +ClientDisableTestLicense: Class<EMsg__ClientDisableTestLicense> &
      EMsg__ClientDisableTestLicense &
      5445; // 5445
    static +ClientDisableTestLicenseResponse: Class<EMsg__ClientDisableTestLicenseResponse> &
      EMsg__ClientDisableTestLicenseResponse &
      5446; // 5446
    static +ClientRequestValidationMail: Class<EMsg__ClientRequestValidationMail> &
      EMsg__ClientRequestValidationMail &
      5448; // 5448
    static +ClientRequestValidationMailResponse: Class<EMsg__ClientRequestValidationMailResponse> &
      EMsg__ClientRequestValidationMailResponse &
      5449; // 5449
    static +ClientCheckAppBetaPassword: Class<EMsg__ClientCheckAppBetaPassword> &
      EMsg__ClientCheckAppBetaPassword &
      5450; // 5450
    static +ClientCheckAppBetaPasswordResponse: Class<EMsg__ClientCheckAppBetaPasswordResponse> &
      EMsg__ClientCheckAppBetaPasswordResponse &
      5451; // 5451
    static +ClientToGC: Class<EMsg__ClientToGC> & EMsg__ClientToGC & 5452; // 5452
    static +ClientFromGC: Class<EMsg__ClientFromGC> & EMsg__ClientFromGC & 5453; // 5453
    static +ClientRequestChangeMail: Class<EMsg__ClientRequestChangeMail> &
      EMsg__ClientRequestChangeMail &
      5454; // 5454
    static +ClientRequestChangeMailResponse: Class<EMsg__ClientRequestChangeMailResponse> &
      EMsg__ClientRequestChangeMailResponse &
      5455; // 5455
    static +ClientEmailAddrInfo: Class<EMsg__ClientEmailAddrInfo> &
      EMsg__ClientEmailAddrInfo &
      5456; // 5456
    static +ClientPasswordChange3: Class<EMsg__ClientPasswordChange3> &
      EMsg__ClientPasswordChange3 &
      5457; // 5457
    static +ClientEmailChange3: Class<EMsg__ClientEmailChange3> &
      EMsg__ClientEmailChange3 &
      5458; // 5458
    static +ClientPersonalQAChange3: Class<EMsg__ClientPersonalQAChange3> &
      EMsg__ClientPersonalQAChange3 &
      5459; // 5459
    static +ClientResetForgottenPassword3: Class<EMsg__ClientResetForgottenPassword3> &
      EMsg__ClientResetForgottenPassword3 &
      5460; // 5460
    static +ClientRequestForgottenPasswordEmail3: Class<EMsg__ClientRequestForgottenPasswordEmail3> &
      EMsg__ClientRequestForgottenPasswordEmail3 &
      5461; // 5461
    static +ClientCreateAccount3: Class<EMsg__ClientCreateAccount3> &
      EMsg__ClientCreateAccount3 &
      5462; // 5462
    static +ClientNewLoginKey: Class<EMsg__ClientNewLoginKey> &
      EMsg__ClientNewLoginKey &
      5463; // 5463
    static +ClientNewLoginKeyAccepted: Class<EMsg__ClientNewLoginKeyAccepted> &
      EMsg__ClientNewLoginKeyAccepted &
      5464; // 5464
    static +ClientLogOnWithHash_Deprecated: Class<EMsg__ClientLogOnWithHash_Deprecated> &
      EMsg__ClientLogOnWithHash_Deprecated &
      5465; // 5465
    static +ClientStoreUserStats2: Class<EMsg__ClientStoreUserStats2> &
      EMsg__ClientStoreUserStats2 &
      5466; // 5466
    static +ClientStatsUpdated: Class<EMsg__ClientStatsUpdated> &
      EMsg__ClientStatsUpdated &
      5467; // 5467
    static +ClientActivateOEMLicense: Class<EMsg__ClientActivateOEMLicense> &
      EMsg__ClientActivateOEMLicense &
      5468; // 5468
    static +ClientRegisterOEMMachine: Class<EMsg__ClientRegisterOEMMachine> &
      EMsg__ClientRegisterOEMMachine &
      5469; // 5469
    static +ClientRegisterOEMMachineResponse: Class<EMsg__ClientRegisterOEMMachineResponse> &
      EMsg__ClientRegisterOEMMachineResponse &
      5470; // 5470
    static +ClientRequestedClientStats: Class<EMsg__ClientRequestedClientStats> &
      EMsg__ClientRequestedClientStats &
      5480; // 5480
    static +ClientStat2Int32: Class<EMsg__ClientStat2Int32> &
      EMsg__ClientStat2Int32 &
      5481; // 5481
    static +ClientStat2: Class<EMsg__ClientStat2> & EMsg__ClientStat2 & 5482; // 5482
    static +ClientVerifyPassword: Class<EMsg__ClientVerifyPassword> &
      EMsg__ClientVerifyPassword &
      5483; // 5483
    static +ClientVerifyPasswordResponse: Class<EMsg__ClientVerifyPasswordResponse> &
      EMsg__ClientVerifyPasswordResponse &
      5484; // 5484
    static +ClientDRMDownloadRequest: Class<EMsg__ClientDRMDownloadRequest> &
      EMsg__ClientDRMDownloadRequest &
      5485; // 5485
    static +ClientDRMDownloadResponse: Class<EMsg__ClientDRMDownloadResponse> &
      EMsg__ClientDRMDownloadResponse &
      5486; // 5486
    static +ClientDRMFinalResult: Class<EMsg__ClientDRMFinalResult> &
      EMsg__ClientDRMFinalResult &
      5487; // 5487
    static +ClientGetFriendsWhoPlayGame: Class<EMsg__ClientGetFriendsWhoPlayGame> &
      EMsg__ClientGetFriendsWhoPlayGame &
      5488; // 5488
    static +ClientGetFriendsWhoPlayGameResponse: Class<EMsg__ClientGetFriendsWhoPlayGameResponse> &
      EMsg__ClientGetFriendsWhoPlayGameResponse &
      5489; // 5489
    static +ClientOGSBeginSession: Class<EMsg__ClientOGSBeginSession> &
      EMsg__ClientOGSBeginSession &
      5490; // 5490
    static +ClientOGSBeginSessionResponse: Class<EMsg__ClientOGSBeginSessionResponse> &
      EMsg__ClientOGSBeginSessionResponse &
      5491; // 5491
    static +ClientOGSEndSession: Class<EMsg__ClientOGSEndSession> &
      EMsg__ClientOGSEndSession &
      5492; // 5492
    static +ClientOGSEndSessionResponse: Class<EMsg__ClientOGSEndSessionResponse> &
      EMsg__ClientOGSEndSessionResponse &
      5493; // 5493
    static +ClientOGSWriteRow: Class<EMsg__ClientOGSWriteRow> &
      EMsg__ClientOGSWriteRow &
      5494; // 5494
    static +ClientDRMTest: Class<EMsg__ClientDRMTest> &
      EMsg__ClientDRMTest &
      5495; // 5495
    static +ClientDRMTestResult: Class<EMsg__ClientDRMTestResult> &
      EMsg__ClientDRMTestResult &
      5496; // 5496
    static +ClientServerUnavailable: Class<EMsg__ClientServerUnavailable> &
      EMsg__ClientServerUnavailable &
      5500; // 5500
    static +ClientServersAvailable: Class<EMsg__ClientServersAvailable> &
      EMsg__ClientServersAvailable &
      5501; // 5501
    static +ClientRegisterAuthTicketWithCM: Class<EMsg__ClientRegisterAuthTicketWithCM> &
      EMsg__ClientRegisterAuthTicketWithCM &
      5502; // 5502
    static +ClientGCMsgFailed: Class<EMsg__ClientGCMsgFailed> &
      EMsg__ClientGCMsgFailed &
      5503; // 5503
    static +ClientMicroTxnAuthRequest: Class<EMsg__ClientMicroTxnAuthRequest> &
      EMsg__ClientMicroTxnAuthRequest &
      5504; // 5504
    static +ClientMicroTxnAuthorize: Class<EMsg__ClientMicroTxnAuthorize> &
      EMsg__ClientMicroTxnAuthorize &
      5505; // 5505
    static +ClientMicroTxnAuthorizeResponse: Class<EMsg__ClientMicroTxnAuthorizeResponse> &
      EMsg__ClientMicroTxnAuthorizeResponse &
      5506; // 5506
    static +ClientAppMinutesPlayedData: Class<EMsg__ClientAppMinutesPlayedData> &
      EMsg__ClientAppMinutesPlayedData &
      5507; // 5507
    static +ClientGetMicroTxnInfo: Class<EMsg__ClientGetMicroTxnInfo> &
      EMsg__ClientGetMicroTxnInfo &
      5508; // 5508
    static +ClientGetMicroTxnInfoResponse: Class<EMsg__ClientGetMicroTxnInfoResponse> &
      EMsg__ClientGetMicroTxnInfoResponse &
      5509; // 5509
    static +ClientMarketingMessageUpdate2: Class<EMsg__ClientMarketingMessageUpdate2> &
      EMsg__ClientMarketingMessageUpdate2 &
      5510; // 5510
    static +ClientDeregisterWithServer: Class<EMsg__ClientDeregisterWithServer> &
      EMsg__ClientDeregisterWithServer &
      5511; // 5511
    static +ClientSubscribeToPersonaFeed: Class<EMsg__ClientSubscribeToPersonaFeed> &
      EMsg__ClientSubscribeToPersonaFeed &
      5512; // 5512
    static +ClientLogon: Class<EMsg__ClientLogon> & EMsg__ClientLogon & 5514; // 5514
    static +ClientGetClientDetails: Class<EMsg__ClientGetClientDetails> &
      EMsg__ClientGetClientDetails &
      5515; // 5515
    static +ClientGetClientDetailsResponse: Class<EMsg__ClientGetClientDetailsResponse> &
      EMsg__ClientGetClientDetailsResponse &
      5516; // 5516
    static +ClientReportOverlayDetourFailure: Class<EMsg__ClientReportOverlayDetourFailure> &
      EMsg__ClientReportOverlayDetourFailure &
      5517; // 5517
    static +ClientGetClientAppList: Class<EMsg__ClientGetClientAppList> &
      EMsg__ClientGetClientAppList &
      5518; // 5518
    static +ClientGetClientAppListResponse: Class<EMsg__ClientGetClientAppListResponse> &
      EMsg__ClientGetClientAppListResponse &
      5519; // 5519
    static +ClientInstallClientApp: Class<EMsg__ClientInstallClientApp> &
      EMsg__ClientInstallClientApp &
      5520; // 5520
    static +ClientInstallClientAppResponse: Class<EMsg__ClientInstallClientAppResponse> &
      EMsg__ClientInstallClientAppResponse &
      5521; // 5521
    static +ClientUninstallClientApp: Class<EMsg__ClientUninstallClientApp> &
      EMsg__ClientUninstallClientApp &
      5522; // 5522
    static +ClientUninstallClientAppResponse: Class<EMsg__ClientUninstallClientAppResponse> &
      EMsg__ClientUninstallClientAppResponse &
      5523; // 5523
    static +ClientSetClientAppUpdateState: Class<EMsg__ClientSetClientAppUpdateState> &
      EMsg__ClientSetClientAppUpdateState &
      5524; // 5524
    static +ClientSetClientAppUpdateStateResponse: Class<EMsg__ClientSetClientAppUpdateStateResponse> &
      EMsg__ClientSetClientAppUpdateStateResponse &
      5525; // 5525
    static +ClientRequestEncryptedAppTicket: Class<EMsg__ClientRequestEncryptedAppTicket> &
      EMsg__ClientRequestEncryptedAppTicket &
      5526; // 5526
    static +ClientRequestEncryptedAppTicketResponse: Class<EMsg__ClientRequestEncryptedAppTicketResponse> &
      EMsg__ClientRequestEncryptedAppTicketResponse &
      5527; // 5527
    static +ClientWalletInfoUpdate: Class<EMsg__ClientWalletInfoUpdate> &
      EMsg__ClientWalletInfoUpdate &
      5528; // 5528
    static +ClientLBSSetUGC: Class<EMsg__ClientLBSSetUGC> &
      EMsg__ClientLBSSetUGC &
      5529; // 5529
    static +ClientLBSSetUGCResponse: Class<EMsg__ClientLBSSetUGCResponse> &
      EMsg__ClientLBSSetUGCResponse &
      5530; // 5530
    static +ClientAMGetClanOfficers: Class<EMsg__ClientAMGetClanOfficers> &
      EMsg__ClientAMGetClanOfficers &
      5531; // 5531
    static +ClientAMGetClanOfficersResponse: Class<EMsg__ClientAMGetClanOfficersResponse> &
      EMsg__ClientAMGetClanOfficersResponse &
      5532; // 5532
    static +ClientCheckFileSignature: Class<EMsg__ClientCheckFileSignature> &
      EMsg__ClientCheckFileSignature &
      5533; // 5533
    static +ClientCheckFileSignatureResponse: Class<EMsg__ClientCheckFileSignatureResponse> &
      EMsg__ClientCheckFileSignatureResponse &
      5534; // 5534
    static +ClientFriendProfileInfo: Class<EMsg__ClientFriendProfileInfo> &
      EMsg__ClientFriendProfileInfo &
      5535; // 5535
    static +ClientFriendProfileInfoResponse: Class<EMsg__ClientFriendProfileInfoResponse> &
      EMsg__ClientFriendProfileInfoResponse &
      5536; // 5536
    static +ClientUpdateMachineAuth: Class<EMsg__ClientUpdateMachineAuth> &
      EMsg__ClientUpdateMachineAuth &
      5537; // 5537
    static +ClientUpdateMachineAuthResponse: Class<EMsg__ClientUpdateMachineAuthResponse> &
      EMsg__ClientUpdateMachineAuthResponse &
      5538; // 5538
    static +ClientReadMachineAuth: Class<EMsg__ClientReadMachineAuth> &
      EMsg__ClientReadMachineAuth &
      5539; // 5539
    static +ClientReadMachineAuthResponse: Class<EMsg__ClientReadMachineAuthResponse> &
      EMsg__ClientReadMachineAuthResponse &
      5540; // 5540
    static +ClientRequestMachineAuth: Class<EMsg__ClientRequestMachineAuth> &
      EMsg__ClientRequestMachineAuth &
      5541; // 5541
    static +ClientRequestMachineAuthResponse: Class<EMsg__ClientRequestMachineAuthResponse> &
      EMsg__ClientRequestMachineAuthResponse &
      5542; // 5542
    static +ClientScreenshotsChanged: Class<EMsg__ClientScreenshotsChanged> &
      EMsg__ClientScreenshotsChanged &
      5543; // 5543
    static +ClientEmailChange4: Class<EMsg__ClientEmailChange4> &
      EMsg__ClientEmailChange4 &
      5544; // 5544
    static +ClientEmailChangeResponse4: Class<EMsg__ClientEmailChangeResponse4> &
      EMsg__ClientEmailChangeResponse4 &
      5545; // 5545
    static +ClientGetCDNAuthToken: Class<EMsg__ClientGetCDNAuthToken> &
      EMsg__ClientGetCDNAuthToken &
      5546; // 5546
    static +ClientGetCDNAuthTokenResponse: Class<EMsg__ClientGetCDNAuthTokenResponse> &
      EMsg__ClientGetCDNAuthTokenResponse &
      5547; // 5547
    static +ClientDownloadRateStatistics: Class<EMsg__ClientDownloadRateStatistics> &
      EMsg__ClientDownloadRateStatistics &
      5548; // 5548
    static +ClientRequestAccountData: Class<EMsg__ClientRequestAccountData> &
      EMsg__ClientRequestAccountData &
      5549; // 5549
    static +ClientRequestAccountDataResponse: Class<EMsg__ClientRequestAccountDataResponse> &
      EMsg__ClientRequestAccountDataResponse &
      5550; // 5550
    static +ClientResetForgottenPassword4: Class<EMsg__ClientResetForgottenPassword4> &
      EMsg__ClientResetForgottenPassword4 &
      5551; // 5551
    static +ClientHideFriend: Class<EMsg__ClientHideFriend> &
      EMsg__ClientHideFriend &
      5552; // 5552
    static +ClientFriendsGroupsList: Class<EMsg__ClientFriendsGroupsList> &
      EMsg__ClientFriendsGroupsList &
      5553; // 5553
    static +ClientGetClanActivityCounts: Class<EMsg__ClientGetClanActivityCounts> &
      EMsg__ClientGetClanActivityCounts &
      5554; // 5554
    static +ClientGetClanActivityCountsResponse: Class<EMsg__ClientGetClanActivityCountsResponse> &
      EMsg__ClientGetClanActivityCountsResponse &
      5555; // 5555
    static +ClientOGSReportString: Class<EMsg__ClientOGSReportString> &
      EMsg__ClientOGSReportString &
      5556; // 5556
    static +ClientOGSReportBug: Class<EMsg__ClientOGSReportBug> &
      EMsg__ClientOGSReportBug &
      5557; // 5557
    static +ClientSentLogs: Class<EMsg__ClientSentLogs> &
      EMsg__ClientSentLogs &
      5558; // 5558
    static +ClientLogonGameServer: Class<EMsg__ClientLogonGameServer> &
      EMsg__ClientLogonGameServer &
      5559; // 5559
    static +AMClientCreateFriendsGroup: Class<EMsg__AMClientCreateFriendsGroup> &
      EMsg__AMClientCreateFriendsGroup &
      5560; // 5560
    static +AMClientCreateFriendsGroupResponse: Class<EMsg__AMClientCreateFriendsGroupResponse> &
      EMsg__AMClientCreateFriendsGroupResponse &
      5561; // 5561
    static +AMClientDeleteFriendsGroup: Class<EMsg__AMClientDeleteFriendsGroup> &
      EMsg__AMClientDeleteFriendsGroup &
      5562; // 5562
    static +AMClientDeleteFriendsGroupResponse: Class<EMsg__AMClientDeleteFriendsGroupResponse> &
      EMsg__AMClientDeleteFriendsGroupResponse &
      5563; // 5563
    static +AMClientRenameFriendsGroup: Class<EMsg__AMClientRenameFriendsGroup> &
      EMsg__AMClientRenameFriendsGroup &
      5564; // 5564
    static +AMClientRenameFriendsGroupResponse: Class<EMsg__AMClientRenameFriendsGroupResponse> &
      EMsg__AMClientRenameFriendsGroupResponse &
      5565; // 5565
    static +AMClientAddFriendToGroup: Class<EMsg__AMClientAddFriendToGroup> &
      EMsg__AMClientAddFriendToGroup &
      5566; // 5566
    static +AMClientAddFriendToGroupResponse: Class<EMsg__AMClientAddFriendToGroupResponse> &
      EMsg__AMClientAddFriendToGroupResponse &
      5567; // 5567
    static +AMClientRemoveFriendFromGroup: Class<EMsg__AMClientRemoveFriendFromGroup> &
      EMsg__AMClientRemoveFriendFromGroup &
      5568; // 5568
    static +AMClientRemoveFriendFromGroupResponse: Class<EMsg__AMClientRemoveFriendFromGroupResponse> &
      EMsg__AMClientRemoveFriendFromGroupResponse &
      5569; // 5569
    static +ClientAMGetPersonaNameHistory: Class<EMsg__ClientAMGetPersonaNameHistory> &
      EMsg__ClientAMGetPersonaNameHistory &
      5570; // 5570
    static +ClientAMGetPersonaNameHistoryResponse: Class<EMsg__ClientAMGetPersonaNameHistoryResponse> &
      EMsg__ClientAMGetPersonaNameHistoryResponse &
      5571; // 5571
    static +ClientRequestFreeLicense: Class<EMsg__ClientRequestFreeLicense> &
      EMsg__ClientRequestFreeLicense &
      5572; // 5572
    static +ClientRequestFreeLicenseResponse: Class<EMsg__ClientRequestFreeLicenseResponse> &
      EMsg__ClientRequestFreeLicenseResponse &
      5573; // 5573
    static +ClientDRMDownloadRequestWithCrashData: Class<EMsg__ClientDRMDownloadRequestWithCrashData> &
      EMsg__ClientDRMDownloadRequestWithCrashData &
      5574; // 5574
    static +ClientAuthListAck: Class<EMsg__ClientAuthListAck> &
      EMsg__ClientAuthListAck &
      5575; // 5575
    static +ClientItemAnnouncements: Class<EMsg__ClientItemAnnouncements> &
      EMsg__ClientItemAnnouncements &
      5576; // 5576
    static +ClientRequestItemAnnouncements: Class<EMsg__ClientRequestItemAnnouncements> &
      EMsg__ClientRequestItemAnnouncements &
      5577; // 5577
    static +ClientFriendMsgEchoToSender: Class<EMsg__ClientFriendMsgEchoToSender> &
      EMsg__ClientFriendMsgEchoToSender &
      5578; // 5578
    static +ClientChangeSteamGuardOptions: Class<EMsg__ClientChangeSteamGuardOptions> &
      EMsg__ClientChangeSteamGuardOptions &
      5579; // 5579
    static +ClientChangeSteamGuardOptionsResponse: Class<EMsg__ClientChangeSteamGuardOptionsResponse> &
      EMsg__ClientChangeSteamGuardOptionsResponse &
      5580; // 5580
    static +ClientOGSGameServerPingSample: Class<EMsg__ClientOGSGameServerPingSample> &
      EMsg__ClientOGSGameServerPingSample &
      5581; // 5581
    static +ClientCommentNotifications: Class<EMsg__ClientCommentNotifications> &
      EMsg__ClientCommentNotifications &
      5582; // 5582
    static +ClientRequestCommentNotifications: Class<EMsg__ClientRequestCommentNotifications> &
      EMsg__ClientRequestCommentNotifications &
      5583; // 5583
    static +ClientPersonaChangeResponse: Class<EMsg__ClientPersonaChangeResponse> &
      EMsg__ClientPersonaChangeResponse &
      5584; // 5584
    static +ClientRequestWebAPIAuthenticateUserNonce: Class<EMsg__ClientRequestWebAPIAuthenticateUserNonce> &
      EMsg__ClientRequestWebAPIAuthenticateUserNonce &
      5585; // 5585
    static +ClientRequestWebAPIAuthenticateUserNonceResponse: Class<EMsg__ClientRequestWebAPIAuthenticateUserNonceResponse> &
      EMsg__ClientRequestWebAPIAuthenticateUserNonceResponse &
      5586; // 5586
    static +ClientPlayerNicknameList: Class<EMsg__ClientPlayerNicknameList> &
      EMsg__ClientPlayerNicknameList &
      5587; // 5587
    static +AMClientSetPlayerNickname: Class<EMsg__AMClientSetPlayerNickname> &
      EMsg__AMClientSetPlayerNickname &
      5588; // 5588
    static +AMClientSetPlayerNicknameResponse: Class<EMsg__AMClientSetPlayerNicknameResponse> &
      EMsg__AMClientSetPlayerNicknameResponse &
      5589; // 5589
    static +ClientRequestOAuthTokenForApp: Class<EMsg__ClientRequestOAuthTokenForApp> &
      EMsg__ClientRequestOAuthTokenForApp &
      5590; // 5590
    static +ClientRequestOAuthTokenForAppResponse: Class<EMsg__ClientRequestOAuthTokenForAppResponse> &
      EMsg__ClientRequestOAuthTokenForAppResponse &
      5591; // 5591
    static +ClientCreateAccountProto: Class<EMsg__ClientCreateAccountProto> &
      EMsg__ClientCreateAccountProto &
      5590; // 5590
    static +ClientCreateAccountProtoResponse: Class<EMsg__ClientCreateAccountProtoResponse> &
      EMsg__ClientCreateAccountProtoResponse &
      5591; // 5591
    static +ClientGetNumberOfCurrentPlayersDP: Class<EMsg__ClientGetNumberOfCurrentPlayersDP> &
      EMsg__ClientGetNumberOfCurrentPlayersDP &
      5592; // 5592
    static +ClientGetNumberOfCurrentPlayersDPResponse: Class<EMsg__ClientGetNumberOfCurrentPlayersDPResponse> &
      EMsg__ClientGetNumberOfCurrentPlayersDPResponse &
      5593; // 5593
    static +ClientServiceMethod: Class<EMsg__ClientServiceMethod> &
      EMsg__ClientServiceMethod &
      5594; // 5594
    static +ClientServiceMethodResponse: Class<EMsg__ClientServiceMethodResponse> &
      EMsg__ClientServiceMethodResponse &
      5595; // 5595
    static +ClientFriendUserStatusPublished: Class<EMsg__ClientFriendUserStatusPublished> &
      EMsg__ClientFriendUserStatusPublished &
      5596; // 5596
    static +ClientCurrentUIMode: Class<EMsg__ClientCurrentUIMode> &
      EMsg__ClientCurrentUIMode &
      5597; // 5597
    static +ClientVanityURLChangedNotification: Class<EMsg__ClientVanityURLChangedNotification> &
      EMsg__ClientVanityURLChangedNotification &
      5598; // 5598
    static +ClientUserNotifications: Class<EMsg__ClientUserNotifications> &
      EMsg__ClientUserNotifications &
      5599; // 5599
    static +BaseDFS: Class<EMsg__BaseDFS> & EMsg__BaseDFS & 5600; // 5600
    static +DFSGetFile: Class<EMsg__DFSGetFile> & EMsg__DFSGetFile & 5601; // 5601
    static +DFSInstallLocalFile: Class<EMsg__DFSInstallLocalFile> &
      EMsg__DFSInstallLocalFile &
      5602; // 5602
    static +DFSConnection: Class<EMsg__DFSConnection> &
      EMsg__DFSConnection &
      5603; // 5603
    static +DFSConnectionReply: Class<EMsg__DFSConnectionReply> &
      EMsg__DFSConnectionReply &
      5604; // 5604
    static +ClientDFSAuthenticateRequest: Class<EMsg__ClientDFSAuthenticateRequest> &
      EMsg__ClientDFSAuthenticateRequest &
      5605; // 5605
    static +ClientDFSAuthenticateResponse: Class<EMsg__ClientDFSAuthenticateResponse> &
      EMsg__ClientDFSAuthenticateResponse &
      5606; // 5606
    static +ClientDFSEndSession: Class<EMsg__ClientDFSEndSession> &
      EMsg__ClientDFSEndSession &
      5607; // 5607
    static +DFSPurgeFile: Class<EMsg__DFSPurgeFile> & EMsg__DFSPurgeFile & 5608; // 5608
    static +DFSRouteFile: Class<EMsg__DFSRouteFile> & EMsg__DFSRouteFile & 5609; // 5609
    static +DFSGetFileFromServer: Class<EMsg__DFSGetFileFromServer> &
      EMsg__DFSGetFileFromServer &
      5610; // 5610
    static +DFSAcceptedResponse: Class<EMsg__DFSAcceptedResponse> &
      EMsg__DFSAcceptedResponse &
      5611; // 5611
    static +DFSRequestPingback: Class<EMsg__DFSRequestPingback> &
      EMsg__DFSRequestPingback &
      5612; // 5612
    static +DFSRecvTransmitFile: Class<EMsg__DFSRecvTransmitFile> &
      EMsg__DFSRecvTransmitFile &
      5613; // 5613
    static +DFSSendTransmitFile: Class<EMsg__DFSSendTransmitFile> &
      EMsg__DFSSendTransmitFile &
      5614; // 5614
    static +DFSRequestPingback2: Class<EMsg__DFSRequestPingback2> &
      EMsg__DFSRequestPingback2 &
      5615; // 5615
    static +DFSResponsePingback2: Class<EMsg__DFSResponsePingback2> &
      EMsg__DFSResponsePingback2 &
      5616; // 5616
    static +ClientDFSDownloadStatus: Class<EMsg__ClientDFSDownloadStatus> &
      EMsg__ClientDFSDownloadStatus &
      5617; // 5617
    static +DFSStartTransfer: Class<EMsg__DFSStartTransfer> &
      EMsg__DFSStartTransfer &
      5618; // 5618
    static +DFSTransferComplete: Class<EMsg__DFSTransferComplete> &
      EMsg__DFSTransferComplete &
      5619; // 5619
    static +DFSRouteFileResponse: Class<EMsg__DFSRouteFileResponse> &
      EMsg__DFSRouteFileResponse &
      5620; // 5620
    static +BaseMDS: Class<EMsg__BaseMDS> & EMsg__BaseMDS & 5800; // 5800
    static +ClientMDSLoginRequest: Class<EMsg__ClientMDSLoginRequest> &
      EMsg__ClientMDSLoginRequest &
      5801; // 5801
    static +ClientMDSLoginResponse: Class<EMsg__ClientMDSLoginResponse> &
      EMsg__ClientMDSLoginResponse &
      5802; // 5802
    static +ClientMDSUploadManifestRequest: Class<EMsg__ClientMDSUploadManifestRequest> &
      EMsg__ClientMDSUploadManifestRequest &
      5803; // 5803
    static +ClientMDSUploadManifestResponse: Class<EMsg__ClientMDSUploadManifestResponse> &
      EMsg__ClientMDSUploadManifestResponse &
      5804; // 5804
    static +ClientMDSTransmitManifestDataChunk: Class<EMsg__ClientMDSTransmitManifestDataChunk> &
      EMsg__ClientMDSTransmitManifestDataChunk &
      5805; // 5805
    static +ClientMDSHeartbeat: Class<EMsg__ClientMDSHeartbeat> &
      EMsg__ClientMDSHeartbeat &
      5806; // 5806
    static +ClientMDSUploadDepotChunks: Class<EMsg__ClientMDSUploadDepotChunks> &
      EMsg__ClientMDSUploadDepotChunks &
      5807; // 5807
    static +ClientMDSUploadDepotChunksResponse: Class<EMsg__ClientMDSUploadDepotChunksResponse> &
      EMsg__ClientMDSUploadDepotChunksResponse &
      5808; // 5808
    static +ClientMDSInitDepotBuildRequest: Class<EMsg__ClientMDSInitDepotBuildRequest> &
      EMsg__ClientMDSInitDepotBuildRequest &
      5809; // 5809
    static +ClientMDSInitDepotBuildResponse: Class<EMsg__ClientMDSInitDepotBuildResponse> &
      EMsg__ClientMDSInitDepotBuildResponse &
      5810; // 5810
    static +AMToMDSGetDepotDecryptionKey: Class<EMsg__AMToMDSGetDepotDecryptionKey> &
      EMsg__AMToMDSGetDepotDecryptionKey &
      5812; // 5812
    static +MDSToAMGetDepotDecryptionKeyResponse: Class<EMsg__MDSToAMGetDepotDecryptionKeyResponse> &
      EMsg__MDSToAMGetDepotDecryptionKeyResponse &
      5813; // 5813
    static +MDSGetVersionsForDepot: Class<EMsg__MDSGetVersionsForDepot> &
      EMsg__MDSGetVersionsForDepot &
      5814; // 5814
    static +MDSGetVersionsForDepotResponse: Class<EMsg__MDSGetVersionsForDepotResponse> &
      EMsg__MDSGetVersionsForDepotResponse &
      5815; // 5815
    static +MDSSetPublicVersionForDepot: Class<EMsg__MDSSetPublicVersionForDepot> &
      EMsg__MDSSetPublicVersionForDepot &
      5816; // 5816
    static +MDSSetPublicVersionForDepotResponse: Class<EMsg__MDSSetPublicVersionForDepotResponse> &
      EMsg__MDSSetPublicVersionForDepotResponse &
      5817; // 5817
    static +ClientMDSInitWorkshopBuildRequest: Class<EMsg__ClientMDSInitWorkshopBuildRequest> &
      EMsg__ClientMDSInitWorkshopBuildRequest &
      5816; // 5816
    static +ClientMDSInitWorkshopBuildResponse: Class<EMsg__ClientMDSInitWorkshopBuildResponse> &
      EMsg__ClientMDSInitWorkshopBuildResponse &
      5817; // 5817
    static +ClientMDSGetDepotManifest: Class<EMsg__ClientMDSGetDepotManifest> &
      EMsg__ClientMDSGetDepotManifest &
      5818; // 5818
    static +ClientMDSGetDepotManifestResponse: Class<EMsg__ClientMDSGetDepotManifestResponse> &
      EMsg__ClientMDSGetDepotManifestResponse &
      5819; // 5819
    static +ClientMDSGetDepotManifestChunk: Class<EMsg__ClientMDSGetDepotManifestChunk> &
      EMsg__ClientMDSGetDepotManifestChunk &
      5820; // 5820
    static +ClientMDSUploadRateTest: Class<EMsg__ClientMDSUploadRateTest> &
      EMsg__ClientMDSUploadRateTest &
      5823; // 5823
    static +ClientMDSUploadRateTestResponse: Class<EMsg__ClientMDSUploadRateTestResponse> &
      EMsg__ClientMDSUploadRateTestResponse &
      5824; // 5824
    static +MDSDownloadDepotChunksAck: Class<EMsg__MDSDownloadDepotChunksAck> &
      EMsg__MDSDownloadDepotChunksAck &
      5825; // 5825
    static +MDSContentServerStatsBroadcast: Class<EMsg__MDSContentServerStatsBroadcast> &
      EMsg__MDSContentServerStatsBroadcast &
      5826; // 5826
    static +MDSContentServerConfigRequest: Class<EMsg__MDSContentServerConfigRequest> &
      EMsg__MDSContentServerConfigRequest &
      5827; // 5827
    static +MDSContentServerConfig: Class<EMsg__MDSContentServerConfig> &
      EMsg__MDSContentServerConfig &
      5828; // 5828
    static +MDSGetDepotManifest: Class<EMsg__MDSGetDepotManifest> &
      EMsg__MDSGetDepotManifest &
      5829; // 5829
    static +MDSGetDepotManifestResponse: Class<EMsg__MDSGetDepotManifestResponse> &
      EMsg__MDSGetDepotManifestResponse &
      5830; // 5830
    static +MDSGetDepotManifestChunk: Class<EMsg__MDSGetDepotManifestChunk> &
      EMsg__MDSGetDepotManifestChunk &
      5831; // 5831
    static +MDSGetDepotChunk: Class<EMsg__MDSGetDepotChunk> &
      EMsg__MDSGetDepotChunk &
      5832; // 5832
    static +MDSGetDepotChunkResponse: Class<EMsg__MDSGetDepotChunkResponse> &
      EMsg__MDSGetDepotChunkResponse &
      5833; // 5833
    static +MDSGetDepotChunkChunk: Class<EMsg__MDSGetDepotChunkChunk> &
      EMsg__MDSGetDepotChunkChunk &
      5834; // 5834
    static +MDSUpdateContentServerConfig: Class<EMsg__MDSUpdateContentServerConfig> &
      EMsg__MDSUpdateContentServerConfig &
      5835; // 5835
    static +MDSGetServerListForUser: Class<EMsg__MDSGetServerListForUser> &
      EMsg__MDSGetServerListForUser &
      5836; // 5836
    static +MDSGetServerListForUserResponse: Class<EMsg__MDSGetServerListForUserResponse> &
      EMsg__MDSGetServerListForUserResponse &
      5837; // 5837
    static +ClientMDSRegisterAppBuild: Class<EMsg__ClientMDSRegisterAppBuild> &
      EMsg__ClientMDSRegisterAppBuild &
      5838; // 5838
    static +ClientMDSRegisterAppBuildResponse: Class<EMsg__ClientMDSRegisterAppBuildResponse> &
      EMsg__ClientMDSRegisterAppBuildResponse &
      5839; // 5839
    static +ClientMDSSetAppBuildLive: Class<EMsg__ClientMDSSetAppBuildLive> &
      EMsg__ClientMDSSetAppBuildLive &
      5840; // 5840
    static +ClientMDSSetAppBuildLiveResponse: Class<EMsg__ClientMDSSetAppBuildLiveResponse> &
      EMsg__ClientMDSSetAppBuildLiveResponse &
      5841; // 5841
    static +ClientMDSGetPrevDepotBuild: Class<EMsg__ClientMDSGetPrevDepotBuild> &
      EMsg__ClientMDSGetPrevDepotBuild &
      5842; // 5842
    static +ClientMDSGetPrevDepotBuildResponse: Class<EMsg__ClientMDSGetPrevDepotBuildResponse> &
      EMsg__ClientMDSGetPrevDepotBuildResponse &
      5843; // 5843
    static +MDSToCSFlushChunk: Class<EMsg__MDSToCSFlushChunk> &
      EMsg__MDSToCSFlushChunk &
      5844; // 5844
    static +ClientMDSSignInstallScript: Class<EMsg__ClientMDSSignInstallScript> &
      EMsg__ClientMDSSignInstallScript &
      5845; // 5845
    static +ClientMDSSignInstallScriptResponse: Class<EMsg__ClientMDSSignInstallScriptResponse> &
      EMsg__ClientMDSSignInstallScriptResponse &
      5846; // 5846
    static +MDSMigrateChunk: Class<EMsg__MDSMigrateChunk> &
      EMsg__MDSMigrateChunk &
      5847; // 5847
    static +MDSMigrateChunkResponse: Class<EMsg__MDSMigrateChunkResponse> &
      EMsg__MDSMigrateChunkResponse &
      5848; // 5848
    static +CSBase: Class<EMsg__CSBase> & EMsg__CSBase & 6200; // 6200
    static +CSPing: Class<EMsg__CSPing> & EMsg__CSPing & 6201; // 6201
    static +CSPingResponse: Class<EMsg__CSPingResponse> &
      EMsg__CSPingResponse &
      6202; // 6202
    static +GMSBase: Class<EMsg__GMSBase> & EMsg__GMSBase & 6400; // 6400
    static +GMSGameServerReplicate: Class<EMsg__GMSGameServerReplicate> &
      EMsg__GMSGameServerReplicate &
      6401; // 6401
    static +ClientGMSServerQuery: Class<EMsg__ClientGMSServerQuery> &
      EMsg__ClientGMSServerQuery &
      6403; // 6403
    static +GMSClientServerQueryResponse: Class<EMsg__GMSClientServerQueryResponse> &
      EMsg__GMSClientServerQueryResponse &
      6404; // 6404
    static +AMGMSGameServerUpdate: Class<EMsg__AMGMSGameServerUpdate> &
      EMsg__AMGMSGameServerUpdate &
      6405; // 6405
    static +AMGMSGameServerRemove: Class<EMsg__AMGMSGameServerRemove> &
      EMsg__AMGMSGameServerRemove &
      6406; // 6406
    static +GameServerOutOfDate: Class<EMsg__GameServerOutOfDate> &
      EMsg__GameServerOutOfDate &
      6407; // 6407
    static +DeviceAuthorizationBase: Class<EMsg__DeviceAuthorizationBase> &
      EMsg__DeviceAuthorizationBase &
      6500; // 6500
    static +ClientAuthorizeLocalDeviceRequest: Class<EMsg__ClientAuthorizeLocalDeviceRequest> &
      EMsg__ClientAuthorizeLocalDeviceRequest &
      6501; // 6501
    static +ClientAuthorizeLocalDevice: Class<EMsg__ClientAuthorizeLocalDevice> &
      EMsg__ClientAuthorizeLocalDevice &
      6502; // 6502
    static +ClientAuthorizeLocalDeviceResponse: Class<EMsg__ClientAuthorizeLocalDeviceResponse> &
      EMsg__ClientAuthorizeLocalDeviceResponse &
      6502; // 6502
    static +ClientDeauthorizeDeviceRequest: Class<EMsg__ClientDeauthorizeDeviceRequest> &
      EMsg__ClientDeauthorizeDeviceRequest &
      6503; // 6503
    static +ClientDeauthorizeDevice: Class<EMsg__ClientDeauthorizeDevice> &
      EMsg__ClientDeauthorizeDevice &
      6504; // 6504
    static +ClientUseLocalDeviceAuthorizations: Class<EMsg__ClientUseLocalDeviceAuthorizations> &
      EMsg__ClientUseLocalDeviceAuthorizations &
      6505; // 6505
    static +ClientGetAuthorizedDevices: Class<EMsg__ClientGetAuthorizedDevices> &
      EMsg__ClientGetAuthorizedDevices &
      6506; // 6506
    static +ClientGetAuthorizedDevicesResponse: Class<EMsg__ClientGetAuthorizedDevicesResponse> &
      EMsg__ClientGetAuthorizedDevicesResponse &
      6507; // 6507
    static +AMNotifySessionDeviceAuthorized: Class<EMsg__AMNotifySessionDeviceAuthorized> &
      EMsg__AMNotifySessionDeviceAuthorized &
      6508; // 6508
    static +ClientAuthorizeLocalDeviceNotification: Class<EMsg__ClientAuthorizeLocalDeviceNotification> &
      EMsg__ClientAuthorizeLocalDeviceNotification &
      6509; // 6509
    static +MMSBase: Class<EMsg__MMSBase> & EMsg__MMSBase & 6600; // 6600
    static +ClientMMSCreateLobby: Class<EMsg__ClientMMSCreateLobby> &
      EMsg__ClientMMSCreateLobby &
      6601; // 6601
    static +ClientMMSCreateLobbyResponse: Class<EMsg__ClientMMSCreateLobbyResponse> &
      EMsg__ClientMMSCreateLobbyResponse &
      6602; // 6602
    static +ClientMMSJoinLobby: Class<EMsg__ClientMMSJoinLobby> &
      EMsg__ClientMMSJoinLobby &
      6603; // 6603
    static +ClientMMSJoinLobbyResponse: Class<EMsg__ClientMMSJoinLobbyResponse> &
      EMsg__ClientMMSJoinLobbyResponse &
      6604; // 6604
    static +ClientMMSLeaveLobby: Class<EMsg__ClientMMSLeaveLobby> &
      EMsg__ClientMMSLeaveLobby &
      6605; // 6605
    static +ClientMMSLeaveLobbyResponse: Class<EMsg__ClientMMSLeaveLobbyResponse> &
      EMsg__ClientMMSLeaveLobbyResponse &
      6606; // 6606
    static +ClientMMSGetLobbyList: Class<EMsg__ClientMMSGetLobbyList> &
      EMsg__ClientMMSGetLobbyList &
      6607; // 6607
    static +ClientMMSGetLobbyListResponse: Class<EMsg__ClientMMSGetLobbyListResponse> &
      EMsg__ClientMMSGetLobbyListResponse &
      6608; // 6608
    static +ClientMMSSetLobbyData: Class<EMsg__ClientMMSSetLobbyData> &
      EMsg__ClientMMSSetLobbyData &
      6609; // 6609
    static +ClientMMSSetLobbyDataResponse: Class<EMsg__ClientMMSSetLobbyDataResponse> &
      EMsg__ClientMMSSetLobbyDataResponse &
      6610; // 6610
    static +ClientMMSGetLobbyData: Class<EMsg__ClientMMSGetLobbyData> &
      EMsg__ClientMMSGetLobbyData &
      6611; // 6611
    static +ClientMMSLobbyData: Class<EMsg__ClientMMSLobbyData> &
      EMsg__ClientMMSLobbyData &
      6612; // 6612
    static +ClientMMSSendLobbyChatMsg: Class<EMsg__ClientMMSSendLobbyChatMsg> &
      EMsg__ClientMMSSendLobbyChatMsg &
      6613; // 6613
    static +ClientMMSLobbyChatMsg: Class<EMsg__ClientMMSLobbyChatMsg> &
      EMsg__ClientMMSLobbyChatMsg &
      6614; // 6614
    static +ClientMMSSetLobbyOwner: Class<EMsg__ClientMMSSetLobbyOwner> &
      EMsg__ClientMMSSetLobbyOwner &
      6615; // 6615
    static +ClientMMSSetLobbyOwnerResponse: Class<EMsg__ClientMMSSetLobbyOwnerResponse> &
      EMsg__ClientMMSSetLobbyOwnerResponse &
      6616; // 6616
    static +ClientMMSSetLobbyGameServer: Class<EMsg__ClientMMSSetLobbyGameServer> &
      EMsg__ClientMMSSetLobbyGameServer &
      6617; // 6617
    static +ClientMMSLobbyGameServerSet: Class<EMsg__ClientMMSLobbyGameServerSet> &
      EMsg__ClientMMSLobbyGameServerSet &
      6618; // 6618
    static +ClientMMSUserJoinedLobby: Class<EMsg__ClientMMSUserJoinedLobby> &
      EMsg__ClientMMSUserJoinedLobby &
      6619; // 6619
    static +ClientMMSUserLeftLobby: Class<EMsg__ClientMMSUserLeftLobby> &
      EMsg__ClientMMSUserLeftLobby &
      6620; // 6620
    static +ClientMMSInviteToLobby: Class<EMsg__ClientMMSInviteToLobby> &
      EMsg__ClientMMSInviteToLobby &
      6621; // 6621
    static +ClientMMSFlushFrenemyListCache: Class<EMsg__ClientMMSFlushFrenemyListCache> &
      EMsg__ClientMMSFlushFrenemyListCache &
      6622; // 6622
    static +ClientMMSFlushFrenemyListCacheResponse: Class<EMsg__ClientMMSFlushFrenemyListCacheResponse> &
      EMsg__ClientMMSFlushFrenemyListCacheResponse &
      6623; // 6623
    static +ClientMMSSetLobbyLinked: Class<EMsg__ClientMMSSetLobbyLinked> &
      EMsg__ClientMMSSetLobbyLinked &
      6624; // 6624
    static +NonStdMsgBase: Class<EMsg__NonStdMsgBase> &
      EMsg__NonStdMsgBase &
      6800; // 6800
    static +NonStdMsgMemcached: Class<EMsg__NonStdMsgMemcached> &
      EMsg__NonStdMsgMemcached &
      6801; // 6801
    static +NonStdMsgHTTPServer: Class<EMsg__NonStdMsgHTTPServer> &
      EMsg__NonStdMsgHTTPServer &
      6802; // 6802
    static +NonStdMsgHTTPClient: Class<EMsg__NonStdMsgHTTPClient> &
      EMsg__NonStdMsgHTTPClient &
      6803; // 6803
    static +NonStdMsgWGResponse: Class<EMsg__NonStdMsgWGResponse> &
      EMsg__NonStdMsgWGResponse &
      6804; // 6804
    static +NonStdMsgPHPSimulator: Class<EMsg__NonStdMsgPHPSimulator> &
      EMsg__NonStdMsgPHPSimulator &
      6805; // 6805
    static +NonStdMsgChase: Class<EMsg__NonStdMsgChase> &
      EMsg__NonStdMsgChase &
      6806; // 6806
    static +NonStdMsgDFSTransfer: Class<EMsg__NonStdMsgDFSTransfer> &
      EMsg__NonStdMsgDFSTransfer &
      6807; // 6807
    static +NonStdMsgTests: Class<EMsg__NonStdMsgTests> &
      EMsg__NonStdMsgTests &
      6808; // 6808
    static +NonStdMsgUMQpipeAAPL: Class<EMsg__NonStdMsgUMQpipeAAPL> &
      EMsg__NonStdMsgUMQpipeAAPL &
      6809; // 6809
    static +NonStdMsgSyslog: Class<EMsg__NonStdMsgSyslog> &
      EMsg__NonStdMsgSyslog &
      6810; // 6810
    static +NonStdMsgLogsink: Class<EMsg__NonStdMsgLogsink> &
      EMsg__NonStdMsgLogsink &
      6811; // 6811
    static +NonStdMsgSteam2Emulator: Class<EMsg__NonStdMsgSteam2Emulator> &
      EMsg__NonStdMsgSteam2Emulator &
      6812; // 6812
    static +NonStdMsgRTMPServer: Class<EMsg__NonStdMsgRTMPServer> &
      EMsg__NonStdMsgRTMPServer &
      6813; // 6813
    static +UDSBase: Class<EMsg__UDSBase> & EMsg__UDSBase & 7000; // 7000
    static +ClientUDSP2PSessionStarted: Class<EMsg__ClientUDSP2PSessionStarted> &
      EMsg__ClientUDSP2PSessionStarted &
      7001; // 7001
    static +ClientUDSP2PSessionEnded: Class<EMsg__ClientUDSP2PSessionEnded> &
      EMsg__ClientUDSP2PSessionEnded &
      7002; // 7002
    static +UDSRenderUserAuth: Class<EMsg__UDSRenderUserAuth> &
      EMsg__UDSRenderUserAuth &
      7003; // 7003
    static +UDSRenderUserAuthResponse: Class<EMsg__UDSRenderUserAuthResponse> &
      EMsg__UDSRenderUserAuthResponse &
      7004; // 7004
    static +ClientUDSInviteToGame: Class<EMsg__ClientUDSInviteToGame> &
      EMsg__ClientUDSInviteToGame &
      7005; // 7005
    static +UDSFindSession: Class<EMsg__UDSFindSession> &
      EMsg__UDSFindSession &
      7006; // 7006
    static +UDSHasSession: Class<EMsg__UDSHasSession> &
      EMsg__UDSHasSession &
      7006; // 7006
    static +UDSFindSessionResponse: Class<EMsg__UDSFindSessionResponse> &
      EMsg__UDSFindSessionResponse &
      7007; // 7007
    static +UDSHasSessionResponse: Class<EMsg__UDSHasSessionResponse> &
      EMsg__UDSHasSessionResponse &
      7007; // 7007
    static +MPASBase: Class<EMsg__MPASBase> & EMsg__MPASBase & 7100; // 7100
    static +MPASVacBanReset: Class<EMsg__MPASVacBanReset> &
      EMsg__MPASVacBanReset &
      7101; // 7101
    static +KGSBase: Class<EMsg__KGSBase> & EMsg__KGSBase & 7200; // 7200
    static +KGSAllocateKeyRange: Class<EMsg__KGSAllocateKeyRange> &
      EMsg__KGSAllocateKeyRange &
      7201; // 7201
    static +KGSAllocateKeyRangeResponse: Class<EMsg__KGSAllocateKeyRangeResponse> &
      EMsg__KGSAllocateKeyRangeResponse &
      7202; // 7202
    static +KGSGenerateKeys: Class<EMsg__KGSGenerateKeys> &
      EMsg__KGSGenerateKeys &
      7203; // 7203
    static +KGSGenerateKeysResponse: Class<EMsg__KGSGenerateKeysResponse> &
      EMsg__KGSGenerateKeysResponse &
      7204; // 7204
    static +KGSRemapKeys: Class<EMsg__KGSRemapKeys> & EMsg__KGSRemapKeys & 7205; // 7205
    static +KGSRemapKeysResponse: Class<EMsg__KGSRemapKeysResponse> &
      EMsg__KGSRemapKeysResponse &
      7206; // 7206
    static +KGSGenerateGameStopWCKeys: Class<EMsg__KGSGenerateGameStopWCKeys> &
      EMsg__KGSGenerateGameStopWCKeys &
      7207; // 7207
    static +KGSGenerateGameStopWCKeysResponse: Class<EMsg__KGSGenerateGameStopWCKeysResponse> &
      EMsg__KGSGenerateGameStopWCKeysResponse &
      7208; // 7208
    static +UCMBase: Class<EMsg__UCMBase> & EMsg__UCMBase & 7300; // 7300
    static +ClientUCMAddScreenshot: Class<EMsg__ClientUCMAddScreenshot> &
      EMsg__ClientUCMAddScreenshot &
      7301; // 7301
    static +ClientUCMAddScreenshotResponse: Class<EMsg__ClientUCMAddScreenshotResponse> &
      EMsg__ClientUCMAddScreenshotResponse &
      7302; // 7302
    static +UCMValidateObjectExists: Class<EMsg__UCMValidateObjectExists> &
      EMsg__UCMValidateObjectExists &
      7303; // 7303
    static +UCMValidateObjectExistsResponse: Class<EMsg__UCMValidateObjectExistsResponse> &
      EMsg__UCMValidateObjectExistsResponse &
      7304; // 7304
    static +UCMResetCommunityContent: Class<EMsg__UCMResetCommunityContent> &
      EMsg__UCMResetCommunityContent &
      7307; // 7307
    static +UCMResetCommunityContentResponse: Class<EMsg__UCMResetCommunityContentResponse> &
      EMsg__UCMResetCommunityContentResponse &
      7308; // 7308
    static +ClientUCMDeleteScreenshot: Class<EMsg__ClientUCMDeleteScreenshot> &
      EMsg__ClientUCMDeleteScreenshot &
      7309; // 7309
    static +ClientUCMDeleteScreenshotResponse: Class<EMsg__ClientUCMDeleteScreenshotResponse> &
      EMsg__ClientUCMDeleteScreenshotResponse &
      7310; // 7310
    static +ClientUCMPublishFile: Class<EMsg__ClientUCMPublishFile> &
      EMsg__ClientUCMPublishFile &
      7311; // 7311
    static +ClientUCMPublishFileResponse: Class<EMsg__ClientUCMPublishFileResponse> &
      EMsg__ClientUCMPublishFileResponse &
      7312; // 7312
    static +ClientUCMGetPublishedFileDetails: Class<EMsg__ClientUCMGetPublishedFileDetails> &
      EMsg__ClientUCMGetPublishedFileDetails &
      7313; // 7313
    static +ClientUCMGetPublishedFileDetailsResponse: Class<EMsg__ClientUCMGetPublishedFileDetailsResponse> &
      EMsg__ClientUCMGetPublishedFileDetailsResponse &
      7314; // 7314
    static +ClientUCMDeletePublishedFile: Class<EMsg__ClientUCMDeletePublishedFile> &
      EMsg__ClientUCMDeletePublishedFile &
      7315; // 7315
    static +ClientUCMDeletePublishedFileResponse: Class<EMsg__ClientUCMDeletePublishedFileResponse> &
      EMsg__ClientUCMDeletePublishedFileResponse &
      7316; // 7316
    static +ClientUCMEnumerateUserPublishedFiles: Class<EMsg__ClientUCMEnumerateUserPublishedFiles> &
      EMsg__ClientUCMEnumerateUserPublishedFiles &
      7317; // 7317
    static +ClientUCMEnumerateUserPublishedFilesResponse: Class<EMsg__ClientUCMEnumerateUserPublishedFilesResponse> &
      EMsg__ClientUCMEnumerateUserPublishedFilesResponse &
      7318; // 7318
    static +ClientUCMSubscribePublishedFile: Class<EMsg__ClientUCMSubscribePublishedFile> &
      EMsg__ClientUCMSubscribePublishedFile &
      7319; // 7319
    static +ClientUCMSubscribePublishedFileResponse: Class<EMsg__ClientUCMSubscribePublishedFileResponse> &
      EMsg__ClientUCMSubscribePublishedFileResponse &
      7320; // 7320
    static +ClientUCMEnumerateUserSubscribedFiles: Class<EMsg__ClientUCMEnumerateUserSubscribedFiles> &
      EMsg__ClientUCMEnumerateUserSubscribedFiles &
      7321; // 7321
    static +ClientUCMEnumerateUserSubscribedFilesResponse: Class<EMsg__ClientUCMEnumerateUserSubscribedFilesResponse> &
      EMsg__ClientUCMEnumerateUserSubscribedFilesResponse &
      7322; // 7322
    static +ClientUCMUnsubscribePublishedFile: Class<EMsg__ClientUCMUnsubscribePublishedFile> &
      EMsg__ClientUCMUnsubscribePublishedFile &
      7323; // 7323
    static +ClientUCMUnsubscribePublishedFileResponse: Class<EMsg__ClientUCMUnsubscribePublishedFileResponse> &
      EMsg__ClientUCMUnsubscribePublishedFileResponse &
      7324; // 7324
    static +ClientUCMUpdatePublishedFile: Class<EMsg__ClientUCMUpdatePublishedFile> &
      EMsg__ClientUCMUpdatePublishedFile &
      7325; // 7325
    static +ClientUCMUpdatePublishedFileResponse: Class<EMsg__ClientUCMUpdatePublishedFileResponse> &
      EMsg__ClientUCMUpdatePublishedFileResponse &
      7326; // 7326
    static +UCMUpdatePublishedFile: Class<EMsg__UCMUpdatePublishedFile> &
      EMsg__UCMUpdatePublishedFile &
      7327; // 7327
    static +UCMUpdatePublishedFileResponse: Class<EMsg__UCMUpdatePublishedFileResponse> &
      EMsg__UCMUpdatePublishedFileResponse &
      7328; // 7328
    static +UCMDeletePublishedFile: Class<EMsg__UCMDeletePublishedFile> &
      EMsg__UCMDeletePublishedFile &
      7329; // 7329
    static +UCMDeletePublishedFileResponse: Class<EMsg__UCMDeletePublishedFileResponse> &
      EMsg__UCMDeletePublishedFileResponse &
      7330; // 7330
    static +UCMUpdatePublishedFileStat: Class<EMsg__UCMUpdatePublishedFileStat> &
      EMsg__UCMUpdatePublishedFileStat &
      7331; // 7331
    static +UCMUpdatePublishedFileBan: Class<EMsg__UCMUpdatePublishedFileBan> &
      EMsg__UCMUpdatePublishedFileBan &
      7332; // 7332
    static +UCMUpdatePublishedFileBanResponse: Class<EMsg__UCMUpdatePublishedFileBanResponse> &
      EMsg__UCMUpdatePublishedFileBanResponse &
      7333; // 7333
    static +UCMUpdateTaggedScreenshot: Class<EMsg__UCMUpdateTaggedScreenshot> &
      EMsg__UCMUpdateTaggedScreenshot &
      7334; // 7334
    static +UCMAddTaggedScreenshot: Class<EMsg__UCMAddTaggedScreenshot> &
      EMsg__UCMAddTaggedScreenshot &
      7335; // 7335
    static +UCMRemoveTaggedScreenshot: Class<EMsg__UCMRemoveTaggedScreenshot> &
      EMsg__UCMRemoveTaggedScreenshot &
      7336; // 7336
    static +UCMReloadPublishedFile: Class<EMsg__UCMReloadPublishedFile> &
      EMsg__UCMReloadPublishedFile &
      7337; // 7337
    static +UCMReloadUserFileListCaches: Class<EMsg__UCMReloadUserFileListCaches> &
      EMsg__UCMReloadUserFileListCaches &
      7338; // 7338
    static +UCMPublishedFileReported: Class<EMsg__UCMPublishedFileReported> &
      EMsg__UCMPublishedFileReported &
      7339; // 7339
    static +UCMUpdatePublishedFileIncompatibleStatus: Class<EMsg__UCMUpdatePublishedFileIncompatibleStatus> &
      EMsg__UCMUpdatePublishedFileIncompatibleStatus &
      7340; // 7340
    static +UCMPublishedFilePreviewAdd: Class<EMsg__UCMPublishedFilePreviewAdd> &
      EMsg__UCMPublishedFilePreviewAdd &
      7341; // 7341
    static +UCMPublishedFilePreviewAddResponse: Class<EMsg__UCMPublishedFilePreviewAddResponse> &
      EMsg__UCMPublishedFilePreviewAddResponse &
      7342; // 7342
    static +UCMPublishedFilePreviewRemove: Class<EMsg__UCMPublishedFilePreviewRemove> &
      EMsg__UCMPublishedFilePreviewRemove &
      7343; // 7343
    static +UCMPublishedFilePreviewRemoveResponse: Class<EMsg__UCMPublishedFilePreviewRemoveResponse> &
      EMsg__UCMPublishedFilePreviewRemoveResponse &
      7344; // 7344
    static +UCMPublishedFilePreviewChangeSortOrder: Class<EMsg__UCMPublishedFilePreviewChangeSortOrder> &
      EMsg__UCMPublishedFilePreviewChangeSortOrder &
      7345; // 7345
    static +UCMPublishedFilePreviewChangeSortOrderResponse: Class<EMsg__UCMPublishedFilePreviewChangeSortOrderResponse> &
      EMsg__UCMPublishedFilePreviewChangeSortOrderResponse &
      7346; // 7346
    static +ClientUCMPublishedFileSubscribed: Class<EMsg__ClientUCMPublishedFileSubscribed> &
      EMsg__ClientUCMPublishedFileSubscribed &
      7347; // 7347
    static +ClientUCMPublishedFileUnsubscribed: Class<EMsg__ClientUCMPublishedFileUnsubscribed> &
      EMsg__ClientUCMPublishedFileUnsubscribed &
      7348; // 7348
    static +UCMPublishedFileSubscribed: Class<EMsg__UCMPublishedFileSubscribed> &
      EMsg__UCMPublishedFileSubscribed &
      7349; // 7349
    static +UCMPublishedFileUnsubscribed: Class<EMsg__UCMPublishedFileUnsubscribed> &
      EMsg__UCMPublishedFileUnsubscribed &
      7350; // 7350
    static +UCMPublishFile: Class<EMsg__UCMPublishFile> &
      EMsg__UCMPublishFile &
      7351; // 7351
    static +UCMPublishFileResponse: Class<EMsg__UCMPublishFileResponse> &
      EMsg__UCMPublishFileResponse &
      7352; // 7352
    static +UCMPublishedFileChildAdd: Class<EMsg__UCMPublishedFileChildAdd> &
      EMsg__UCMPublishedFileChildAdd &
      7353; // 7353
    static +UCMPublishedFileChildAddResponse: Class<EMsg__UCMPublishedFileChildAddResponse> &
      EMsg__UCMPublishedFileChildAddResponse &
      7354; // 7354
    static +UCMPublishedFileChildRemove: Class<EMsg__UCMPublishedFileChildRemove> &
      EMsg__UCMPublishedFileChildRemove &
      7355; // 7355
    static +UCMPublishedFileChildRemoveResponse: Class<EMsg__UCMPublishedFileChildRemoveResponse> &
      EMsg__UCMPublishedFileChildRemoveResponse &
      7356; // 7356
    static +UCMPublishedFileChildChangeSortOrder: Class<EMsg__UCMPublishedFileChildChangeSortOrder> &
      EMsg__UCMPublishedFileChildChangeSortOrder &
      7357; // 7357
    static +UCMPublishedFileChildChangeSortOrderResponse: Class<EMsg__UCMPublishedFileChildChangeSortOrderResponse> &
      EMsg__UCMPublishedFileChildChangeSortOrderResponse &
      7358; // 7358
    static +UCMPublishedFileParentChanged: Class<EMsg__UCMPublishedFileParentChanged> &
      EMsg__UCMPublishedFileParentChanged &
      7359; // 7359
    static +ClientUCMGetPublishedFilesForUser: Class<EMsg__ClientUCMGetPublishedFilesForUser> &
      EMsg__ClientUCMGetPublishedFilesForUser &
      7360; // 7360
    static +ClientUCMGetPublishedFilesForUserResponse: Class<EMsg__ClientUCMGetPublishedFilesForUserResponse> &
      EMsg__ClientUCMGetPublishedFilesForUserResponse &
      7361; // 7361
    static +UCMGetPublishedFilesForUser: Class<EMsg__UCMGetPublishedFilesForUser> &
      EMsg__UCMGetPublishedFilesForUser &
      7362; // 7362
    static +UCMGetPublishedFilesForUserResponse: Class<EMsg__UCMGetPublishedFilesForUserResponse> &
      EMsg__UCMGetPublishedFilesForUserResponse &
      7363; // 7363
    static +ClientUCMSetUserPublishedFileAction: Class<EMsg__ClientUCMSetUserPublishedFileAction> &
      EMsg__ClientUCMSetUserPublishedFileAction &
      7364; // 7364
    static +ClientUCMSetUserPublishedFileActionResponse: Class<EMsg__ClientUCMSetUserPublishedFileActionResponse> &
      EMsg__ClientUCMSetUserPublishedFileActionResponse &
      7365; // 7365
    static +ClientUCMEnumeratePublishedFilesByUserAction: Class<EMsg__ClientUCMEnumeratePublishedFilesByUserAction> &
      EMsg__ClientUCMEnumeratePublishedFilesByUserAction &
      7366; // 7366
    static +ClientUCMEnumeratePublishedFilesByUserActionResponse: Class<EMsg__ClientUCMEnumeratePublishedFilesByUserActionResponse> &
      EMsg__ClientUCMEnumeratePublishedFilesByUserActionResponse &
      7367; // 7367
    static +ClientUCMPublishedFileDeleted: Class<EMsg__ClientUCMPublishedFileDeleted> &
      EMsg__ClientUCMPublishedFileDeleted &
      7368; // 7368
    static +UCMGetUserSubscribedFiles: Class<EMsg__UCMGetUserSubscribedFiles> &
      EMsg__UCMGetUserSubscribedFiles &
      7369; // 7369
    static +UCMGetUserSubscribedFilesResponse: Class<EMsg__UCMGetUserSubscribedFilesResponse> &
      EMsg__UCMGetUserSubscribedFilesResponse &
      7370; // 7370
    static +UCMFixStatsPublishedFile: Class<EMsg__UCMFixStatsPublishedFile> &
      EMsg__UCMFixStatsPublishedFile &
      7371; // 7371
    static +UCMDeleteOldScreenshot: Class<EMsg__UCMDeleteOldScreenshot> &
      EMsg__UCMDeleteOldScreenshot &
      7372; // 7372
    static +UCMDeleteOldScreenshotResponse: Class<EMsg__UCMDeleteOldScreenshotResponse> &
      EMsg__UCMDeleteOldScreenshotResponse &
      7373; // 7373
    static +UCMDeleteOldVideo: Class<EMsg__UCMDeleteOldVideo> &
      EMsg__UCMDeleteOldVideo &
      7374; // 7374
    static +UCMDeleteOldVideoResponse: Class<EMsg__UCMDeleteOldVideoResponse> &
      EMsg__UCMDeleteOldVideoResponse &
      7375; // 7375
    static +UCMUpdateOldScreenshotPrivacy: Class<EMsg__UCMUpdateOldScreenshotPrivacy> &
      EMsg__UCMUpdateOldScreenshotPrivacy &
      7376; // 7376
    static +UCMUpdateOldScreenshotPrivacyResponse: Class<EMsg__UCMUpdateOldScreenshotPrivacyResponse> &
      EMsg__UCMUpdateOldScreenshotPrivacyResponse &
      7377; // 7377
    static +ClientUCMEnumerateUserSubscribedFilesWithUpdates: Class<EMsg__ClientUCMEnumerateUserSubscribedFilesWithUpdates> &
      EMsg__ClientUCMEnumerateUserSubscribedFilesWithUpdates &
      7378; // 7378
    static +ClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse: Class<EMsg__ClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse> &
      EMsg__ClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse &
      7379; // 7379
    static +UCMPublishedFileContentUpdated: Class<EMsg__UCMPublishedFileContentUpdated> &
      EMsg__UCMPublishedFileContentUpdated &
      7380; // 7380
    static +UCMPublishedFileUpdated: Class<EMsg__UCMPublishedFileUpdated> &
      EMsg__UCMPublishedFileUpdated &
      7381; // 7381
    static +ClientWorkshopItemChangesRequest: Class<EMsg__ClientWorkshopItemChangesRequest> &
      EMsg__ClientWorkshopItemChangesRequest &
      7382; // 7382
    static +ClientWorkshopItemChangesResponse: Class<EMsg__ClientWorkshopItemChangesResponse> &
      EMsg__ClientWorkshopItemChangesResponse &
      7383; // 7383
    static +ClientWorkshopItemInfoRequest: Class<EMsg__ClientWorkshopItemInfoRequest> &
      EMsg__ClientWorkshopItemInfoRequest &
      7384; // 7384
    static +ClientWorkshopItemInfoResponse: Class<EMsg__ClientWorkshopItemInfoResponse> &
      EMsg__ClientWorkshopItemInfoResponse &
      7385; // 7385
    static +FSBase: Class<EMsg__FSBase> & EMsg__FSBase & 7500; // 7500
    static +ClientRichPresenceUpload: Class<EMsg__ClientRichPresenceUpload> &
      EMsg__ClientRichPresenceUpload &
      7501; // 7501
    static +ClientRichPresenceRequest: Class<EMsg__ClientRichPresenceRequest> &
      EMsg__ClientRichPresenceRequest &
      7502; // 7502
    static +ClientRichPresenceInfo: Class<EMsg__ClientRichPresenceInfo> &
      EMsg__ClientRichPresenceInfo &
      7503; // 7503
    static +FSRichPresenceRequest: Class<EMsg__FSRichPresenceRequest> &
      EMsg__FSRichPresenceRequest &
      7504; // 7504
    static +FSRichPresenceResponse: Class<EMsg__FSRichPresenceResponse> &
      EMsg__FSRichPresenceResponse &
      7505; // 7505
    static +FSComputeFrenematrix: Class<EMsg__FSComputeFrenematrix> &
      EMsg__FSComputeFrenematrix &
      7506; // 7506
    static +FSComputeFrenematrixResponse: Class<EMsg__FSComputeFrenematrixResponse> &
      EMsg__FSComputeFrenematrixResponse &
      7507; // 7507
    static +FSPlayStatusNotification: Class<EMsg__FSPlayStatusNotification> &
      EMsg__FSPlayStatusNotification &
      7508; // 7508
    static +FSPublishPersonaStatus: Class<EMsg__FSPublishPersonaStatus> &
      EMsg__FSPublishPersonaStatus &
      7509; // 7509
    static +FSAddOrRemoveFollower: Class<EMsg__FSAddOrRemoveFollower> &
      EMsg__FSAddOrRemoveFollower &
      7510; // 7510
    static +FSAddOrRemoveFollowerResponse: Class<EMsg__FSAddOrRemoveFollowerResponse> &
      EMsg__FSAddOrRemoveFollowerResponse &
      7511; // 7511
    static +FSUpdateFollowingList: Class<EMsg__FSUpdateFollowingList> &
      EMsg__FSUpdateFollowingList &
      7512; // 7512
    static +FSCommentNotification: Class<EMsg__FSCommentNotification> &
      EMsg__FSCommentNotification &
      7513; // 7513
    static +FSCommentNotificationViewed: Class<EMsg__FSCommentNotificationViewed> &
      EMsg__FSCommentNotificationViewed &
      7514; // 7514
    static +ClientFSGetFollowerCount: Class<EMsg__ClientFSGetFollowerCount> &
      EMsg__ClientFSGetFollowerCount &
      7515; // 7515
    static +ClientFSGetFollowerCountResponse: Class<EMsg__ClientFSGetFollowerCountResponse> &
      EMsg__ClientFSGetFollowerCountResponse &
      7516; // 7516
    static +ClientFSGetIsFollowing: Class<EMsg__ClientFSGetIsFollowing> &
      EMsg__ClientFSGetIsFollowing &
      7517; // 7517
    static +ClientFSGetIsFollowingResponse: Class<EMsg__ClientFSGetIsFollowingResponse> &
      EMsg__ClientFSGetIsFollowingResponse &
      7518; // 7518
    static +ClientFSEnumerateFollowingList: Class<EMsg__ClientFSEnumerateFollowingList> &
      EMsg__ClientFSEnumerateFollowingList &
      7519; // 7519
    static +ClientFSEnumerateFollowingListResponse: Class<EMsg__ClientFSEnumerateFollowingListResponse> &
      EMsg__ClientFSEnumerateFollowingListResponse &
      7520; // 7520
    static +FSGetPendingNotificationCount: Class<EMsg__FSGetPendingNotificationCount> &
      EMsg__FSGetPendingNotificationCount &
      7521; // 7521
    static +FSGetPendingNotificationCountResponse: Class<EMsg__FSGetPendingNotificationCountResponse> &
      EMsg__FSGetPendingNotificationCountResponse &
      7522; // 7522
    static +ClientFSOfflineMessageNotification: Class<EMsg__ClientFSOfflineMessageNotification> &
      EMsg__ClientFSOfflineMessageNotification &
      7523; // 7523
    static +ClientFSRequestOfflineMessageCount: Class<EMsg__ClientFSRequestOfflineMessageCount> &
      EMsg__ClientFSRequestOfflineMessageCount &
      7524; // 7524
    static +ClientFSGetFriendMessageHistory: Class<EMsg__ClientFSGetFriendMessageHistory> &
      EMsg__ClientFSGetFriendMessageHistory &
      7525; // 7525
    static +ClientFSGetFriendMessageHistoryResponse: Class<EMsg__ClientFSGetFriendMessageHistoryResponse> &
      EMsg__ClientFSGetFriendMessageHistoryResponse &
      7526; // 7526
    static +ClientFSGetFriendMessageHistoryForOfflineMessages: Class<EMsg__ClientFSGetFriendMessageHistoryForOfflineMessages> &
      EMsg__ClientFSGetFriendMessageHistoryForOfflineMessages &
      7527; // 7527
    static +ClientFSGetFriendsSteamLevels: Class<EMsg__ClientFSGetFriendsSteamLevels> &
      EMsg__ClientFSGetFriendsSteamLevels &
      7528; // 7528
    static +ClientFSGetFriendsSteamLevelsResponse: Class<EMsg__ClientFSGetFriendsSteamLevelsResponse> &
      EMsg__ClientFSGetFriendsSteamLevelsResponse &
      7529; // 7529
    static +FSRequestFriendData: Class<EMsg__FSRequestFriendData> &
      EMsg__FSRequestFriendData &
      7530; // 7530
    static +DRMRange2: Class<EMsg__DRMRange2> & EMsg__DRMRange2 & 7600; // 7600
    static +CEGVersionSetEnableDisableRequest: Class<EMsg__CEGVersionSetEnableDisableRequest> &
      EMsg__CEGVersionSetEnableDisableRequest &
      7600; // 7600
    static +CEGVersionSetEnableDisableResponse: Class<EMsg__CEGVersionSetEnableDisableResponse> &
      EMsg__CEGVersionSetEnableDisableResponse &
      7601; // 7601
    static +CEGPropStatusDRMSRequest: Class<EMsg__CEGPropStatusDRMSRequest> &
      EMsg__CEGPropStatusDRMSRequest &
      7602; // 7602
    static +CEGPropStatusDRMSResponse: Class<EMsg__CEGPropStatusDRMSResponse> &
      EMsg__CEGPropStatusDRMSResponse &
      7603; // 7603
    static +CEGWhackFailureReportRequest: Class<EMsg__CEGWhackFailureReportRequest> &
      EMsg__CEGWhackFailureReportRequest &
      7604; // 7604
    static +CEGWhackFailureReportResponse: Class<EMsg__CEGWhackFailureReportResponse> &
      EMsg__CEGWhackFailureReportResponse &
      7605; // 7605
    static +DRMSFetchVersionSet: Class<EMsg__DRMSFetchVersionSet> &
      EMsg__DRMSFetchVersionSet &
      7606; // 7606
    static +DRMSFetchVersionSetResponse: Class<EMsg__DRMSFetchVersionSetResponse> &
      EMsg__DRMSFetchVersionSetResponse &
      7607; // 7607
    static +EconBase: Class<EMsg__EconBase> & EMsg__EconBase & 7700; // 7700
    static +EconTrading_InitiateTradeRequest: Class<EMsg__EconTrading_InitiateTradeRequest> &
      EMsg__EconTrading_InitiateTradeRequest &
      7701; // 7701
    static +EconTrading_InitiateTradeProposed: Class<EMsg__EconTrading_InitiateTradeProposed> &
      EMsg__EconTrading_InitiateTradeProposed &
      7702; // 7702
    static +EconTrading_InitiateTradeResponse: Class<EMsg__EconTrading_InitiateTradeResponse> &
      EMsg__EconTrading_InitiateTradeResponse &
      7703; // 7703
    static +EconTrading_InitiateTradeResult: Class<EMsg__EconTrading_InitiateTradeResult> &
      EMsg__EconTrading_InitiateTradeResult &
      7704; // 7704
    static +EconTrading_StartSession: Class<EMsg__EconTrading_StartSession> &
      EMsg__EconTrading_StartSession &
      7705; // 7705
    static +EconTrading_CancelTradeRequest: Class<EMsg__EconTrading_CancelTradeRequest> &
      EMsg__EconTrading_CancelTradeRequest &
      7706; // 7706
    static +EconFlushInventoryCache: Class<EMsg__EconFlushInventoryCache> &
      EMsg__EconFlushInventoryCache &
      7707; // 7707
    static +EconFlushInventoryCacheResponse: Class<EMsg__EconFlushInventoryCacheResponse> &
      EMsg__EconFlushInventoryCacheResponse &
      7708; // 7708
    static +EconCDKeyProcessTransaction: Class<EMsg__EconCDKeyProcessTransaction> &
      EMsg__EconCDKeyProcessTransaction &
      7711; // 7711
    static +EconCDKeyProcessTransactionResponse: Class<EMsg__EconCDKeyProcessTransactionResponse> &
      EMsg__EconCDKeyProcessTransactionResponse &
      7712; // 7712
    static +EconGetErrorLogs: Class<EMsg__EconGetErrorLogs> &
      EMsg__EconGetErrorLogs &
      7713; // 7713
    static +EconGetErrorLogsResponse: Class<EMsg__EconGetErrorLogsResponse> &
      EMsg__EconGetErrorLogsResponse &
      7714; // 7714
    static +RMRange: Class<EMsg__RMRange> & EMsg__RMRange & 7800; // 7800
    static +RMTestVerisignOTP: Class<EMsg__RMTestVerisignOTP> &
      EMsg__RMTestVerisignOTP &
      7800; // 7800
    static +RMTestVerisignOTPResponse: Class<EMsg__RMTestVerisignOTPResponse> &
      EMsg__RMTestVerisignOTPResponse &
      7801; // 7801
    static +RMDeleteMemcachedKeys: Class<EMsg__RMDeleteMemcachedKeys> &
      EMsg__RMDeleteMemcachedKeys &
      7803; // 7803
    static +RMRemoteInvoke: Class<EMsg__RMRemoteInvoke> &
      EMsg__RMRemoteInvoke &
      7804; // 7804
    static +BadLoginIPList: Class<EMsg__BadLoginIPList> &
      EMsg__BadLoginIPList &
      7805; // 7805
    static +RMMsgTraceAddTrigger: Class<EMsg__RMMsgTraceAddTrigger> &
      EMsg__RMMsgTraceAddTrigger &
      7806; // 7806
    static +RMMsgTraceRemoveTrigger: Class<EMsg__RMMsgTraceRemoveTrigger> &
      EMsg__RMMsgTraceRemoveTrigger &
      7807; // 7807
    static +RMMsgTraceEvent: Class<EMsg__RMMsgTraceEvent> &
      EMsg__RMMsgTraceEvent &
      7808; // 7808
    static +UGSBase: Class<EMsg__UGSBase> & EMsg__UGSBase & 7900; // 7900
    static +UGSUpdateGlobalStats: Class<EMsg__UGSUpdateGlobalStats> &
      EMsg__UGSUpdateGlobalStats &
      7900; // 7900
    static +ClientUGSGetGlobalStats: Class<EMsg__ClientUGSGetGlobalStats> &
      EMsg__ClientUGSGetGlobalStats &
      7901; // 7901
    static +ClientUGSGetGlobalStatsResponse: Class<EMsg__ClientUGSGetGlobalStatsResponse> &
      EMsg__ClientUGSGetGlobalStatsResponse &
      7902; // 7902
    static +StoreBase: Class<EMsg__StoreBase> & EMsg__StoreBase & 8000; // 8000
    static +StoreUpdateRecommendationCount: Class<EMsg__StoreUpdateRecommendationCount> &
      EMsg__StoreUpdateRecommendationCount &
      8000; // 8000
    static +UMQBase: Class<EMsg__UMQBase> & EMsg__UMQBase & 8100; // 8100
    static +UMQLogonRequest: Class<EMsg__UMQLogonRequest> &
      EMsg__UMQLogonRequest &
      8100; // 8100
    static +UMQLogonResponse: Class<EMsg__UMQLogonResponse> &
      EMsg__UMQLogonResponse &
      8101; // 8101
    static +UMQLogoffRequest: Class<EMsg__UMQLogoffRequest> &
      EMsg__UMQLogoffRequest &
      8102; // 8102
    static +UMQLogoffResponse: Class<EMsg__UMQLogoffResponse> &
      EMsg__UMQLogoffResponse &
      8103; // 8103
    static +UMQSendChatMessage: Class<EMsg__UMQSendChatMessage> &
      EMsg__UMQSendChatMessage &
      8104; // 8104
    static +UMQIncomingChatMessage: Class<EMsg__UMQIncomingChatMessage> &
      EMsg__UMQIncomingChatMessage &
      8105; // 8105
    static +UMQPoll: Class<EMsg__UMQPoll> & EMsg__UMQPoll & 8106; // 8106
    static +UMQPollResults: Class<EMsg__UMQPollResults> &
      EMsg__UMQPollResults &
      8107; // 8107
    static +UMQ2AM_ClientMsgBatch: Class<EMsg__UMQ2AM_ClientMsgBatch> &
      EMsg__UMQ2AM_ClientMsgBatch &
      8108; // 8108
    static +UMQEnqueueMobileSalePromotions: Class<EMsg__UMQEnqueueMobileSalePromotions> &
      EMsg__UMQEnqueueMobileSalePromotions &
      8109; // 8109
    static +UMQEnqueueMobileAnnouncements: Class<EMsg__UMQEnqueueMobileAnnouncements> &
      EMsg__UMQEnqueueMobileAnnouncements &
      8110; // 8110
    static +WorkshopBase: Class<EMsg__WorkshopBase> & EMsg__WorkshopBase & 8200; // 8200
    static +WorkshopAcceptTOSRequest: Class<EMsg__WorkshopAcceptTOSRequest> &
      EMsg__WorkshopAcceptTOSRequest &
      8200; // 8200
    static +WorkshopAcceptTOSResponse: Class<EMsg__WorkshopAcceptTOSResponse> &
      EMsg__WorkshopAcceptTOSResponse &
      8201; // 8201
    static +WebAPIBase: Class<EMsg__WebAPIBase> & EMsg__WebAPIBase & 8300; // 8300
    static +WebAPIValidateOAuth2Token: Class<EMsg__WebAPIValidateOAuth2Token> &
      EMsg__WebAPIValidateOAuth2Token &
      8300; // 8300
    static +WebAPIValidateOAuth2TokenResponse: Class<EMsg__WebAPIValidateOAuth2TokenResponse> &
      EMsg__WebAPIValidateOAuth2TokenResponse &
      8301; // 8301
    static +WebAPIInvalidateTokensForAccount: Class<EMsg__WebAPIInvalidateTokensForAccount> &
      EMsg__WebAPIInvalidateTokensForAccount &
      8302; // 8302
    static +WebAPIRegisterGCInterfaces: Class<EMsg__WebAPIRegisterGCInterfaces> &
      EMsg__WebAPIRegisterGCInterfaces &
      8303; // 8303
    static +WebAPIInvalidateOAuthClientCache: Class<EMsg__WebAPIInvalidateOAuthClientCache> &
      EMsg__WebAPIInvalidateOAuthClientCache &
      8304; // 8304
    static +WebAPIInvalidateOAuthTokenCache: Class<EMsg__WebAPIInvalidateOAuthTokenCache> &
      EMsg__WebAPIInvalidateOAuthTokenCache &
      8305; // 8305
    static +WebAPISetSecrets: Class<EMsg__WebAPISetSecrets> &
      EMsg__WebAPISetSecrets &
      8306; // 8306
    static +BackpackBase: Class<EMsg__BackpackBase> & EMsg__BackpackBase & 8400; // 8400
    static +BackpackAddToCurrency: Class<EMsg__BackpackAddToCurrency> &
      EMsg__BackpackAddToCurrency &
      8401; // 8401
    static +BackpackAddToCurrencyResponse: Class<EMsg__BackpackAddToCurrencyResponse> &
      EMsg__BackpackAddToCurrencyResponse &
      8402; // 8402
    static +CREBase: Class<EMsg__CREBase> & EMsg__CREBase & 8500; // 8500
    static +CRERankByTrend: Class<EMsg__CRERankByTrend> &
      EMsg__CRERankByTrend &
      8501; // 8501
    static +CRERankByTrendResponse: Class<EMsg__CRERankByTrendResponse> &
      EMsg__CRERankByTrendResponse &
      8502; // 8502
    static +CREItemVoteSummary: Class<EMsg__CREItemVoteSummary> &
      EMsg__CREItemVoteSummary &
      8503; // 8503
    static +CREItemVoteSummaryResponse: Class<EMsg__CREItemVoteSummaryResponse> &
      EMsg__CREItemVoteSummaryResponse &
      8504; // 8504
    static +CRERankByVote: Class<EMsg__CRERankByVote> &
      EMsg__CRERankByVote &
      8505; // 8505
    static +CRERankByVoteResponse: Class<EMsg__CRERankByVoteResponse> &
      EMsg__CRERankByVoteResponse &
      8506; // 8506
    static +CREUpdateUserPublishedItemVote: Class<EMsg__CREUpdateUserPublishedItemVote> &
      EMsg__CREUpdateUserPublishedItemVote &
      8507; // 8507
    static +CREUpdateUserPublishedItemVoteResponse: Class<EMsg__CREUpdateUserPublishedItemVoteResponse> &
      EMsg__CREUpdateUserPublishedItemVoteResponse &
      8508; // 8508
    static +CREGetUserPublishedItemVoteDetails: Class<EMsg__CREGetUserPublishedItemVoteDetails> &
      EMsg__CREGetUserPublishedItemVoteDetails &
      8509; // 8509
    static +CREGetUserPublishedItemVoteDetailsResponse: Class<EMsg__CREGetUserPublishedItemVoteDetailsResponse> &
      EMsg__CREGetUserPublishedItemVoteDetailsResponse &
      8510; // 8510
    static +CREEnumeratePublishedFiles: Class<EMsg__CREEnumeratePublishedFiles> &
      EMsg__CREEnumeratePublishedFiles &
      8511; // 8511
    static +CREEnumeratePublishedFilesResponse: Class<EMsg__CREEnumeratePublishedFilesResponse> &
      EMsg__CREEnumeratePublishedFilesResponse &
      8512; // 8512
    static +CREPublishedFileVoteAdded: Class<EMsg__CREPublishedFileVoteAdded> &
      EMsg__CREPublishedFileVoteAdded &
      8513; // 8513
    static +SecretsBase: Class<EMsg__SecretsBase> & EMsg__SecretsBase & 8600; // 8600
    static +SecretsRequestCredentialPair: Class<EMsg__SecretsRequestCredentialPair> &
      EMsg__SecretsRequestCredentialPair &
      8600; // 8600
    static +SecretsCredentialPairResponse: Class<EMsg__SecretsCredentialPairResponse> &
      EMsg__SecretsCredentialPairResponse &
      8601; // 8601
    static +SecretsRequestServerIdentity: Class<EMsg__SecretsRequestServerIdentity> &
      EMsg__SecretsRequestServerIdentity &
      8602; // 8602
    static +SecretsServerIdentityResponse: Class<EMsg__SecretsServerIdentityResponse> &
      EMsg__SecretsServerIdentityResponse &
      8603; // 8603
    static +SecretsUpdateServerIdentities: Class<EMsg__SecretsUpdateServerIdentities> &
      EMsg__SecretsUpdateServerIdentities &
      8604; // 8604
    static +BoxMonitorBase: Class<EMsg__BoxMonitorBase> &
      EMsg__BoxMonitorBase &
      8700; // 8700
    static +BoxMonitorReportRequest: Class<EMsg__BoxMonitorReportRequest> &
      EMsg__BoxMonitorReportRequest &
      8700; // 8700
    static +BoxMonitorReportResponse: Class<EMsg__BoxMonitorReportResponse> &
      EMsg__BoxMonitorReportResponse &
      8701; // 8701
    static +LogsinkBase: Class<EMsg__LogsinkBase> & EMsg__LogsinkBase & 8800; // 8800
    static +LogsinkWriteReport: Class<EMsg__LogsinkWriteReport> &
      EMsg__LogsinkWriteReport &
      8800; // 8800
    static +PICSBase: Class<EMsg__PICSBase> & EMsg__PICSBase & 8900; // 8900
    static +ClientPICSChangesSinceRequest: Class<EMsg__ClientPICSChangesSinceRequest> &
      EMsg__ClientPICSChangesSinceRequest &
      8901; // 8901
    static +ClientPICSChangesSinceResponse: Class<EMsg__ClientPICSChangesSinceResponse> &
      EMsg__ClientPICSChangesSinceResponse &
      8902; // 8902
    static +ClientPICSProductInfoRequest: Class<EMsg__ClientPICSProductInfoRequest> &
      EMsg__ClientPICSProductInfoRequest &
      8903; // 8903
    static +ClientPICSProductInfoResponse: Class<EMsg__ClientPICSProductInfoResponse> &
      EMsg__ClientPICSProductInfoResponse &
      8904; // 8904
    static +ClientPICSAccessTokenRequest: Class<EMsg__ClientPICSAccessTokenRequest> &
      EMsg__ClientPICSAccessTokenRequest &
      8905; // 8905
    static +ClientPICSAccessTokenResponse: Class<EMsg__ClientPICSAccessTokenResponse> &
      EMsg__ClientPICSAccessTokenResponse &
      8906; // 8906
    static +WorkerProcess: Class<EMsg__WorkerProcess> &
      EMsg__WorkerProcess &
      9000; // 9000
    static +WorkerProcessPingRequest: Class<EMsg__WorkerProcessPingRequest> &
      EMsg__WorkerProcessPingRequest &
      9000; // 9000
    static +WorkerProcessPingResponse: Class<EMsg__WorkerProcessPingResponse> &
      EMsg__WorkerProcessPingResponse &
      9001; // 9001
    static +WorkerProcessShutdown: Class<EMsg__WorkerProcessShutdown> &
      EMsg__WorkerProcessShutdown &
      9002; // 9002
    static +DRMWorkerProcess: Class<EMsg__DRMWorkerProcess> &
      EMsg__DRMWorkerProcess &
      9100; // 9100
    static +DRMWorkerProcessDRMAndSign: Class<EMsg__DRMWorkerProcessDRMAndSign> &
      EMsg__DRMWorkerProcessDRMAndSign &
      9100; // 9100
    static +DRMWorkerProcessDRMAndSignResponse: Class<EMsg__DRMWorkerProcessDRMAndSignResponse> &
      EMsg__DRMWorkerProcessDRMAndSignResponse &
      9101; // 9101
    static +DRMWorkerProcessSteamworksInfoRequest: Class<EMsg__DRMWorkerProcessSteamworksInfoRequest> &
      EMsg__DRMWorkerProcessSteamworksInfoRequest &
      9102; // 9102
    static +DRMWorkerProcessSteamworksInfoResponse: Class<EMsg__DRMWorkerProcessSteamworksInfoResponse> &
      EMsg__DRMWorkerProcessSteamworksInfoResponse &
      9103; // 9103
    static +DRMWorkerProcessInstallDRMDLLRequest: Class<EMsg__DRMWorkerProcessInstallDRMDLLRequest> &
      EMsg__DRMWorkerProcessInstallDRMDLLRequest &
      9104; // 9104
    static +DRMWorkerProcessInstallDRMDLLResponse: Class<EMsg__DRMWorkerProcessInstallDRMDLLResponse> &
      EMsg__DRMWorkerProcessInstallDRMDLLResponse &
      9105; // 9105
    static +DRMWorkerProcessSecretIdStringRequest: Class<EMsg__DRMWorkerProcessSecretIdStringRequest> &
      EMsg__DRMWorkerProcessSecretIdStringRequest &
      9106; // 9106
    static +DRMWorkerProcessSecretIdStringResponse: Class<EMsg__DRMWorkerProcessSecretIdStringResponse> &
      EMsg__DRMWorkerProcessSecretIdStringResponse &
      9107; // 9107
    static +DRMWorkerProcessGetDRMGuidsFromFileRequest: Class<EMsg__DRMWorkerProcessGetDRMGuidsFromFileRequest> &
      EMsg__DRMWorkerProcessGetDRMGuidsFromFileRequest &
      9108; // 9108
    static +DRMWorkerProcessGetDRMGuidsFromFileResponse: Class<EMsg__DRMWorkerProcessGetDRMGuidsFromFileResponse> &
      EMsg__DRMWorkerProcessGetDRMGuidsFromFileResponse &
      9109; // 9109
    static +DRMWorkerProcessInstallProcessedFilesRequest: Class<EMsg__DRMWorkerProcessInstallProcessedFilesRequest> &
      EMsg__DRMWorkerProcessInstallProcessedFilesRequest &
      9110; // 9110
    static +DRMWorkerProcessInstallProcessedFilesResponse: Class<EMsg__DRMWorkerProcessInstallProcessedFilesResponse> &
      EMsg__DRMWorkerProcessInstallProcessedFilesResponse &
      9111; // 9111
    static +DRMWorkerProcessExamineBlobRequest: Class<EMsg__DRMWorkerProcessExamineBlobRequest> &
      EMsg__DRMWorkerProcessExamineBlobRequest &
      9112; // 9112
    static +DRMWorkerProcessExamineBlobResponse: Class<EMsg__DRMWorkerProcessExamineBlobResponse> &
      EMsg__DRMWorkerProcessExamineBlobResponse &
      9113; // 9113
    static +DRMWorkerProcessDescribeSecretRequest: Class<EMsg__DRMWorkerProcessDescribeSecretRequest> &
      EMsg__DRMWorkerProcessDescribeSecretRequest &
      9114; // 9114
    static +DRMWorkerProcessDescribeSecretResponse: Class<EMsg__DRMWorkerProcessDescribeSecretResponse> &
      EMsg__DRMWorkerProcessDescribeSecretResponse &
      9115; // 9115
    static +DRMWorkerProcessBackfillOriginalRequest: Class<EMsg__DRMWorkerProcessBackfillOriginalRequest> &
      EMsg__DRMWorkerProcessBackfillOriginalRequest &
      9116; // 9116
    static +DRMWorkerProcessBackfillOriginalResponse: Class<EMsg__DRMWorkerProcessBackfillOriginalResponse> &
      EMsg__DRMWorkerProcessBackfillOriginalResponse &
      9117; // 9117
    static +DRMWorkerProcessValidateDRMDLLRequest: Class<EMsg__DRMWorkerProcessValidateDRMDLLRequest> &
      EMsg__DRMWorkerProcessValidateDRMDLLRequest &
      9118; // 9118
    static +DRMWorkerProcessValidateDRMDLLResponse: Class<EMsg__DRMWorkerProcessValidateDRMDLLResponse> &
      EMsg__DRMWorkerProcessValidateDRMDLLResponse &
      9119; // 9119
    static +DRMWorkerProcessValidateFileRequest: Class<EMsg__DRMWorkerProcessValidateFileRequest> &
      EMsg__DRMWorkerProcessValidateFileRequest &
      9120; // 9120
    static +DRMWorkerProcessValidateFileResponse: Class<EMsg__DRMWorkerProcessValidateFileResponse> &
      EMsg__DRMWorkerProcessValidateFileResponse &
      9121; // 9121
    static +DRMWorkerProcessSplitAndInstallRequest: Class<EMsg__DRMWorkerProcessSplitAndInstallRequest> &
      EMsg__DRMWorkerProcessSplitAndInstallRequest &
      9122; // 9122
    static +DRMWorkerProcessSplitAndInstallResponse: Class<EMsg__DRMWorkerProcessSplitAndInstallResponse> &
      EMsg__DRMWorkerProcessSplitAndInstallResponse &
      9123; // 9123
    static +DRMWorkerProcessGetBlobRequest: Class<EMsg__DRMWorkerProcessGetBlobRequest> &
      EMsg__DRMWorkerProcessGetBlobRequest &
      9124; // 9124
    static +DRMWorkerProcessGetBlobResponse: Class<EMsg__DRMWorkerProcessGetBlobResponse> &
      EMsg__DRMWorkerProcessGetBlobResponse &
      9125; // 9125
    static +DRMWorkerProcessEvaluateCrashRequest: Class<EMsg__DRMWorkerProcessEvaluateCrashRequest> &
      EMsg__DRMWorkerProcessEvaluateCrashRequest &
      9126; // 9126
    static +DRMWorkerProcessEvaluateCrashResponse: Class<EMsg__DRMWorkerProcessEvaluateCrashResponse> &
      EMsg__DRMWorkerProcessEvaluateCrashResponse &
      9127; // 9127
    static +DRMWorkerProcessAnalyzeFileRequest: Class<EMsg__DRMWorkerProcessAnalyzeFileRequest> &
      EMsg__DRMWorkerProcessAnalyzeFileRequest &
      9128; // 9128
    static +DRMWorkerProcessAnalyzeFileResponse: Class<EMsg__DRMWorkerProcessAnalyzeFileResponse> &
      EMsg__DRMWorkerProcessAnalyzeFileResponse &
      9129; // 9129
    static +DRMWorkerProcessUnpackBlobRequest: Class<EMsg__DRMWorkerProcessUnpackBlobRequest> &
      EMsg__DRMWorkerProcessUnpackBlobRequest &
      9130; // 9130
    static +DRMWorkerProcessUnpackBlobResponse: Class<EMsg__DRMWorkerProcessUnpackBlobResponse> &
      EMsg__DRMWorkerProcessUnpackBlobResponse &
      9131; // 9131
    static +DRMWorkerProcessInstallAllRequest: Class<EMsg__DRMWorkerProcessInstallAllRequest> &
      EMsg__DRMWorkerProcessInstallAllRequest &
      9132; // 9132
    static +DRMWorkerProcessInstallAllResponse: Class<EMsg__DRMWorkerProcessInstallAllResponse> &
      EMsg__DRMWorkerProcessInstallAllResponse &
      9133; // 9133
    static +TestWorkerProcess: Class<EMsg__TestWorkerProcess> &
      EMsg__TestWorkerProcess &
      9200; // 9200
    static +TestWorkerProcessLoadUnloadModuleRequest: Class<EMsg__TestWorkerProcessLoadUnloadModuleRequest> &
      EMsg__TestWorkerProcessLoadUnloadModuleRequest &
      9200; // 9200
    static +TestWorkerProcessLoadUnloadModuleResponse: Class<EMsg__TestWorkerProcessLoadUnloadModuleResponse> &
      EMsg__TestWorkerProcessLoadUnloadModuleResponse &
      9201; // 9201
    static +TestWorkerProcessServiceModuleCallRequest: Class<EMsg__TestWorkerProcessServiceModuleCallRequest> &
      EMsg__TestWorkerProcessServiceModuleCallRequest &
      9202; // 9202
    static +TestWorkerProcessServiceModuleCallResponse: Class<EMsg__TestWorkerProcessServiceModuleCallResponse> &
      EMsg__TestWorkerProcessServiceModuleCallResponse &
      9203; // 9203
    static +QuestServerBase: Class<EMsg__QuestServerBase> &
      EMsg__QuestServerBase &
      9300; // 9300
    static +ClientGetEmoticonList: Class<EMsg__ClientGetEmoticonList> &
      EMsg__ClientGetEmoticonList &
      9330; // 9330
    static +ClientEmoticonList: Class<EMsg__ClientEmoticonList> &
      EMsg__ClientEmoticonList &
      9331; // 9331
    static +ClientSharedLibraryBase: Class<EMsg__ClientSharedLibraryBase> &
      EMsg__ClientSharedLibraryBase &
      9400; // 9400
    static +SLCBase: Class<EMsg__SLCBase> & EMsg__SLCBase & 9400; // 9400
    static +SLCUserSessionStatus: Class<EMsg__SLCUserSessionStatus> &
      EMsg__SLCUserSessionStatus &
      9400; // 9400
    static +SLCRequestUserSessionStatus: Class<EMsg__SLCRequestUserSessionStatus> &
      EMsg__SLCRequestUserSessionStatus &
      9401; // 9401
    static +SLCSharedLicensesLockStatus: Class<EMsg__SLCSharedLicensesLockStatus> &
      EMsg__SLCSharedLicensesLockStatus &
      9402; // 9402
    static +ClientSharedLicensesLockStatus: Class<EMsg__ClientSharedLicensesLockStatus> &
      EMsg__ClientSharedLicensesLockStatus &
      9403; // 9403
    static +ClientSharedLicensesStopPlaying: Class<EMsg__ClientSharedLicensesStopPlaying> &
      EMsg__ClientSharedLicensesStopPlaying &
      9404; // 9404
    static +ClientSharedLibraryLockStatus: Class<EMsg__ClientSharedLibraryLockStatus> &
      EMsg__ClientSharedLibraryLockStatus &
      9405; // 9405
    static +ClientSharedLibraryStopPlaying: Class<EMsg__ClientSharedLibraryStopPlaying> &
      EMsg__ClientSharedLibraryStopPlaying &
      9406; // 9406
    static +SLCOwnerLibraryChanged: Class<EMsg__SLCOwnerLibraryChanged> &
      EMsg__SLCOwnerLibraryChanged &
      9407; // 9407
    static +SLCSharedLibraryChanged: Class<EMsg__SLCSharedLibraryChanged> &
      EMsg__SLCSharedLibraryChanged &
      9408; // 9408
    static +RemoteClientBase: Class<EMsg__RemoteClientBase> &
      EMsg__RemoteClientBase &
      9500; // 9500
    static +RemoteClientAuth: Class<EMsg__RemoteClientAuth> &
      EMsg__RemoteClientAuth &
      9500; // 9500
    static +RemoteClientAuthResponse: Class<EMsg__RemoteClientAuthResponse> &
      EMsg__RemoteClientAuthResponse &
      9501; // 9501
    static +RemoteClientAppStatus: Class<EMsg__RemoteClientAppStatus> &
      EMsg__RemoteClientAppStatus &
      9502; // 9502
    static +RemoteClientStartStream: Class<EMsg__RemoteClientStartStream> &
      EMsg__RemoteClientStartStream &
      9503; // 9503
    static +RemoteClientStartStreamResponse: Class<EMsg__RemoteClientStartStreamResponse> &
      EMsg__RemoteClientStartStreamResponse &
      9504; // 9504
    static +RemoteClientPing: Class<EMsg__RemoteClientPing> &
      EMsg__RemoteClientPing &
      9505; // 9505
    static +RemoteClientPingResponse: Class<EMsg__RemoteClientPingResponse> &
      EMsg__RemoteClientPingResponse &
      9506; // 9506
    static +ClientUnlockStreaming: Class<EMsg__ClientUnlockStreaming> &
      EMsg__ClientUnlockStreaming &
      9507; // 9507
    static +ClientUnlockStreamingResponse: Class<EMsg__ClientUnlockStreamingResponse> &
      EMsg__ClientUnlockStreamingResponse &
      9508; // 9508
    static +RemoteClientAcceptEULA: Class<EMsg__RemoteClientAcceptEULA> &
      EMsg__RemoteClientAcceptEULA &
      9509; // 9509
    static +RemoteClientGetControllerConfig: Class<EMsg__RemoteClientGetControllerConfig> &
      EMsg__RemoteClientGetControllerConfig &
      9510; // 9510
    static +RemoteClientGetControllerConfigResposne: Class<EMsg__RemoteClientGetControllerConfigResposne> &
      EMsg__RemoteClientGetControllerConfigResposne &
      9511; // 9511
    static +RemoteClientStreamingEnabled: Class<EMsg__RemoteClientStreamingEnabled> &
      EMsg__RemoteClientStreamingEnabled &
      9512; // 9512
    static +ClientConcurrentSessionsBase: Class<EMsg__ClientConcurrentSessionsBase> &
      EMsg__ClientConcurrentSessionsBase &
      9600; // 9600
    static +ClientPlayingSessionState: Class<EMsg__ClientPlayingSessionState> &
      EMsg__ClientPlayingSessionState &
      9600; // 9600
    static +ClientKickPlayingSession: Class<EMsg__ClientKickPlayingSession> &
      EMsg__ClientKickPlayingSession &
      9601; // 9601
    static +ClientBroadcastBase: Class<EMsg__ClientBroadcastBase> &
      EMsg__ClientBroadcastBase &
      9700; // 9700
    static +ClientBroadcastInit: Class<EMsg__ClientBroadcastInit> &
      EMsg__ClientBroadcastInit &
      9700; // 9700
    static +ClientBroadcastFrames: Class<EMsg__ClientBroadcastFrames> &
      EMsg__ClientBroadcastFrames &
      9701; // 9701
    static +ClientBroadcastDisconnect: Class<EMsg__ClientBroadcastDisconnect> &
      EMsg__ClientBroadcastDisconnect &
      9702; // 9702
    static +ClientBroadcastScreenshot: Class<EMsg__ClientBroadcastScreenshot> &
      EMsg__ClientBroadcastScreenshot &
      9703; // 9703
    static +ClientBroadcastUploadConfig: Class<EMsg__ClientBroadcastUploadConfig> &
      EMsg__ClientBroadcastUploadConfig &
      9704; // 9704
    static +BaseClient3: Class<EMsg__BaseClient3> & EMsg__BaseClient3 & 9800; // 9800
    static +ClientVoiceCallPreAuthorize: Class<EMsg__ClientVoiceCallPreAuthorize> &
      EMsg__ClientVoiceCallPreAuthorize &
      9800; // 9800
    static +ClientVoiceCallPreAuthorizeResponse: Class<EMsg__ClientVoiceCallPreAuthorizeResponse> &
      EMsg__ClientVoiceCallPreAuthorizeResponse &
      9801; // 9801
  }

  declare class EMsg__Invalid mixins EMsg {}
  declare class EMsg__Multi mixins EMsg {}
  declare class EMsg__ProtobufWrapped mixins EMsg {}
  declare class EMsg__BaseGeneral mixins EMsg {}
  declare class EMsg__GenericReply mixins EMsg {}
  declare class EMsg__DestJobFailed mixins EMsg {}
  declare class EMsg__Alert mixins EMsg {}
  declare class EMsg__SCIDRequest mixins EMsg {}
  declare class EMsg__SCIDResponse mixins EMsg {}
  declare class EMsg__JobHeartbeat mixins EMsg {}
  declare class EMsg__HubConnect mixins EMsg {}
  declare class EMsg__Subscribe mixins EMsg {}
  declare class EMsg__RouteMessage mixins EMsg {}
  declare class EMsg__RemoteSysID mixins EMsg {}
  declare class EMsg__AMCreateAccountResponse mixins EMsg {}
  declare class EMsg__WGRequest mixins EMsg {}
  declare class EMsg__WGResponse mixins EMsg {}
  declare class EMsg__KeepAlive mixins EMsg {}
  declare class EMsg__WebAPIJobRequest mixins EMsg {}
  declare class EMsg__WebAPIJobResponse mixins EMsg {}
  declare class EMsg__ClientSessionStart mixins EMsg {}
  declare class EMsg__ClientSessionEnd mixins EMsg {}
  declare class EMsg__ClientSessionUpdateAuthTicket mixins EMsg {}
  declare class EMsg__ClientSessionUpdate mixins EMsg {}
  declare class EMsg__StatsDeprecated mixins EMsg {}
  declare class EMsg__Ping mixins EMsg {}
  declare class EMsg__PingResponse mixins EMsg {}
  declare class EMsg__Stats mixins EMsg {}
  declare class EMsg__RequestFullStatsBlock mixins EMsg {}
  declare class EMsg__LoadDBOCacheItem mixins EMsg {}
  declare class EMsg__LoadDBOCacheItemResponse mixins EMsg {}
  declare class EMsg__InvalidateDBOCacheItems mixins EMsg {}
  declare class EMsg__ServiceMethod mixins EMsg {}
  declare class EMsg__ServiceMethodResponse mixins EMsg {}
  declare class EMsg__ClientPackageVersions mixins EMsg {}
  declare class EMsg__TimestampRequest mixins EMsg {}
  declare class EMsg__TimestampResponse mixins EMsg {}
  declare class EMsg__BaseShell mixins EMsg {}
  declare class EMsg__AssignSysID mixins EMsg {}
  declare class EMsg__Exit mixins EMsg {}
  declare class EMsg__DirRequest mixins EMsg {}
  declare class EMsg__DirResponse mixins EMsg {}
  declare class EMsg__ZipRequest mixins EMsg {}
  declare class EMsg__ZipResponse mixins EMsg {}
  declare class EMsg__UpdateRecordResponse mixins EMsg {}
  declare class EMsg__UpdateCreditCardRequest mixins EMsg {}
  declare class EMsg__UpdateUserBanResponse mixins EMsg {}
  declare class EMsg__PrepareToExit mixins EMsg {}
  declare class EMsg__ContentDescriptionUpdate mixins EMsg {}
  declare class EMsg__TestResetServer mixins EMsg {}
  declare class EMsg__UniverseChanged mixins EMsg {}
  declare class EMsg__ShellConfigInfoUpdate mixins EMsg {}
  declare class EMsg__RequestWindowsEventLogEntries mixins EMsg {}
  declare class EMsg__ProvideWindowsEventLogEntries mixins EMsg {}
  declare class EMsg__ShellSearchLogs mixins EMsg {}
  declare class EMsg__ShellSearchLogsResponse mixins EMsg {}
  declare class EMsg__ShellCheckWindowsUpdates mixins EMsg {}
  declare class EMsg__ShellCheckWindowsUpdatesResponse mixins EMsg {}
  declare class EMsg__ShellFlushUserLicenseCache mixins EMsg {}
  declare class EMsg__BaseGM mixins EMsg {}
  declare class EMsg__Heartbeat mixins EMsg {}
  declare class EMsg__ShellFailed mixins EMsg {}
  declare class EMsg__ExitShells mixins EMsg {}
  declare class EMsg__ExitShell mixins EMsg {}
  declare class EMsg__GracefulExitShell mixins EMsg {}
  declare class EMsg__NotifyWatchdog mixins EMsg {}
  declare class EMsg__LicenseProcessingComplete mixins EMsg {}
  declare class EMsg__SetTestFlag mixins EMsg {}
  declare class EMsg__QueuedEmailsComplete mixins EMsg {}
  declare class EMsg__GMReportPHPError mixins EMsg {}
  declare class EMsg__GMDRMSync mixins EMsg {}
  declare class EMsg__PhysicalBoxInventory mixins EMsg {}
  declare class EMsg__UpdateConfigFile mixins EMsg {}
  declare class EMsg__TestInitDB mixins EMsg {}
  declare class EMsg__GMWriteConfigToSQL mixins EMsg {}
  declare class EMsg__GMLoadActivationCodes mixins EMsg {}
  declare class EMsg__GMQueueForFBS mixins EMsg {}
  declare class EMsg__GMSchemaConversionResults mixins EMsg {}
  declare class EMsg__GMSchemaConversionResultsResponse mixins EMsg {}
  declare class EMsg__GMWriteShellFailureToSQL mixins EMsg {}
  declare class EMsg__GMWriteStatsToSOS mixins EMsg {}
  declare class EMsg__GMGetServiceMethodRouting mixins EMsg {}
  declare class EMsg__GMGetServiceMethodRoutingResponse mixins EMsg {}
  declare class EMsg__GMConvertUserWallets mixins EMsg {}
  declare class EMsg__BaseAIS mixins EMsg {}
  declare class EMsg__AISRefreshContentDescription mixins EMsg {}
  declare class EMsg__AISRequestContentDescription mixins EMsg {}
  declare class EMsg__AISUpdateAppInfo mixins EMsg {}
  declare class EMsg__AISUpdatePackageInfo mixins EMsg {}
  declare class EMsg__AISUpdatePackageCosts mixins EMsg {}
  declare class EMsg__AISGetPackageChangeNumber mixins EMsg {}
  declare class EMsg__AISGetPackageChangeNumberResponse mixins EMsg {}
  declare class EMsg__AISAppInfoTableChanged mixins EMsg {}
  declare class EMsg__AISUpdatePackageCostsResponse mixins EMsg {}
  declare class EMsg__AISCreateMarketingMessage mixins EMsg {}
  declare class EMsg__AISCreateMarketingMessageResponse mixins EMsg {}
  declare class EMsg__AISGetMarketingMessage mixins EMsg {}
  declare class EMsg__AISGetMarketingMessageResponse mixins EMsg {}
  declare class EMsg__AISUpdateMarketingMessage mixins EMsg {}
  declare class EMsg__AISUpdateMarketingMessageResponse mixins EMsg {}
  declare class EMsg__AISRequestMarketingMessageUpdate mixins EMsg {}
  declare class EMsg__AISDeleteMarketingMessage mixins EMsg {}
  declare class EMsg__AISGetMarketingTreatments mixins EMsg {}
  declare class EMsg__AISGetMarketingTreatmentsResponse mixins EMsg {}
  declare class EMsg__AISRequestMarketingTreatmentUpdate mixins EMsg {}
  declare class EMsg__AISTestAddPackage mixins EMsg {}
  declare class EMsg__AIGetAppGCFlags mixins EMsg {}
  declare class EMsg__AIGetAppGCFlagsResponse mixins EMsg {}
  declare class EMsg__AIGetAppList mixins EMsg {}
  declare class EMsg__AIGetAppListResponse mixins EMsg {}
  declare class EMsg__AIGetAppInfo mixins EMsg {}
  declare class EMsg__AIGetAppInfoResponse mixins EMsg {}
  declare class EMsg__AISGetCouponDefinition mixins EMsg {}
  declare class EMsg__AISGetCouponDefinitionResponse mixins EMsg {}
  declare class EMsg__AISUpdateSlaveContentDescription mixins EMsg {}
  declare class EMsg__AISUpdateSlaveContentDescriptionResponse mixins EMsg {}
  declare class EMsg__AISTestEnableGC mixins EMsg {}
  declare class EMsg__BaseAM mixins EMsg {}
  declare class EMsg__AMUpdateUserBanRequest mixins EMsg {}
  declare class EMsg__AMAddLicense mixins EMsg {}
  declare class EMsg__AMBeginProcessingLicenses mixins EMsg {}
  declare class EMsg__AMSendSystemIMToUser mixins EMsg {}
  declare class EMsg__AMExtendLicense mixins EMsg {}
  declare class EMsg__AMAddMinutesToLicense mixins EMsg {}
  declare class EMsg__AMCancelLicense mixins EMsg {}
  declare class EMsg__AMInitPurchase mixins EMsg {}
  declare class EMsg__AMPurchaseResponse mixins EMsg {}
  declare class EMsg__AMGetFinalPrice mixins EMsg {}
  declare class EMsg__AMGetFinalPriceResponse mixins EMsg {}
  declare class EMsg__AMGetLegacyGameKey mixins EMsg {}
  declare class EMsg__AMGetLegacyGameKeyResponse mixins EMsg {}
  declare class EMsg__AMFindHungTransactions mixins EMsg {}
  declare class EMsg__AMSetAccountTrustedRequest mixins EMsg {}
  declare class EMsg__AMCompletePurchase mixins EMsg {}
  declare class EMsg__AMCancelPurchase mixins EMsg {}
  declare class EMsg__AMNewChallenge mixins EMsg {}
  declare class EMsg__AMLoadOEMTickets mixins EMsg {}
  declare class EMsg__AMFixPendingPurchase mixins EMsg {}
  declare class EMsg__AMFixPendingPurchaseResponse mixins EMsg {}
  declare class EMsg__AMIsUserBanned mixins EMsg {}
  declare class EMsg__AMRegisterKey mixins EMsg {}
  declare class EMsg__AMLoadActivationCodes mixins EMsg {}
  declare class EMsg__AMLoadActivationCodesResponse mixins EMsg {}
  declare class EMsg__AMLookupKeyResponse mixins EMsg {}
  declare class EMsg__AMLookupKey mixins EMsg {}
  declare class EMsg__AMChatCleanup mixins EMsg {}
  declare class EMsg__AMClanCleanup mixins EMsg {}
  declare class EMsg__AMFixPendingRefund mixins EMsg {}
  declare class EMsg__AMReverseChargeback mixins EMsg {}
  declare class EMsg__AMReverseChargebackResponse mixins EMsg {}
  declare class EMsg__AMClanCleanupList mixins EMsg {}
  declare class EMsg__AMGetLicenses mixins EMsg {}
  declare class EMsg__AMGetLicensesResponse mixins EMsg {}
  declare class EMsg__AllowUserToPlayQuery mixins EMsg {}
  declare class EMsg__AllowUserToPlayResponse mixins EMsg {}
  declare class EMsg__AMVerfiyUser mixins EMsg {}
  declare class EMsg__AMClientNotPlaying mixins EMsg {}
  declare class EMsg__ClientRequestFriendship mixins EMsg {}
  declare class EMsg__AMRelayPublishStatus mixins EMsg {}
  declare class EMsg__AMResetCommunityContent mixins EMsg {}
  declare class EMsg__AMPrimePersonaStateCache mixins EMsg {}
  declare class EMsg__AMAllowUserContentQuery mixins EMsg {}
  declare class EMsg__AMAllowUserContentResponse mixins EMsg {}
  declare class EMsg__AMInitPurchaseResponse mixins EMsg {}
  declare class EMsg__AMRevokePurchaseResponse mixins EMsg {}
  declare class EMsg__AMLockProfile mixins EMsg {}
  declare class EMsg__AMRefreshGuestPasses mixins EMsg {}
  declare class EMsg__AMInviteUserToClan mixins EMsg {}
  declare class EMsg__AMAcknowledgeClanInvite mixins EMsg {}
  declare class EMsg__AMGrantGuestPasses mixins EMsg {}
  declare class EMsg__AMClanDataUpdated mixins EMsg {}
  declare class EMsg__AMReloadAccount mixins EMsg {}
  declare class EMsg__AMClientChatMsgRelay mixins EMsg {}
  declare class EMsg__AMChatMulti mixins EMsg {}
  declare class EMsg__AMClientChatInviteRelay mixins EMsg {}
  declare class EMsg__AMChatInvite mixins EMsg {}
  declare class EMsg__AMClientJoinChatRelay mixins EMsg {}
  declare class EMsg__AMClientChatMemberInfoRelay mixins EMsg {}
  declare class EMsg__AMPublishChatMemberInfo mixins EMsg {}
  declare class EMsg__AMClientAcceptFriendInvite mixins EMsg {}
  declare class EMsg__AMChatEnter mixins EMsg {}
  declare class EMsg__AMClientPublishRemovalFromSource mixins EMsg {}
  declare class EMsg__AMChatActionResult mixins EMsg {}
  declare class EMsg__AMFindAccounts mixins EMsg {}
  declare class EMsg__AMFindAccountsResponse mixins EMsg {}
  declare class EMsg__AMRequestAccountData mixins EMsg {}
  declare class EMsg__AMRequestAccountDataResponse mixins EMsg {}
  declare class EMsg__AMSetAccountFlags mixins EMsg {}
  declare class EMsg__AMCreateClan mixins EMsg {}
  declare class EMsg__AMCreateClanResponse mixins EMsg {}
  declare class EMsg__AMGetClanDetails mixins EMsg {}
  declare class EMsg__AMGetClanDetailsResponse mixins EMsg {}
  declare class EMsg__AMSetPersonaName mixins EMsg {}
  declare class EMsg__AMSetAvatar mixins EMsg {}
  declare class EMsg__AMAuthenticateUser mixins EMsg {}
  declare class EMsg__AMAuthenticateUserResponse mixins EMsg {}
  declare class EMsg__AMGetAccountFriendsCount mixins EMsg {}
  declare class EMsg__AMGetAccountFriendsCountResponse mixins EMsg {}
  declare class EMsg__AMP2PIntroducerMessage mixins EMsg {}
  declare class EMsg__ClientChatAction mixins EMsg {}
  declare class EMsg__AMClientChatActionRelay mixins EMsg {}
  declare class EMsg__BaseVS mixins EMsg {}
  declare class EMsg__ReqChallenge mixins EMsg {}
  declare class EMsg__VACResponse mixins EMsg {}
  declare class EMsg__ReqChallengeTest mixins EMsg {}
  declare class EMsg__VSMarkCheat mixins EMsg {}
  declare class EMsg__VSAddCheat mixins EMsg {}
  declare class EMsg__VSPurgeCodeModDB mixins EMsg {}
  declare class EMsg__VSGetChallengeResults mixins EMsg {}
  declare class EMsg__VSChallengeResultText mixins EMsg {}
  declare class EMsg__VSReportLingerer mixins EMsg {}
  declare class EMsg__VSRequestManagedChallenge mixins EMsg {}
  declare class EMsg__VSLoadDBFinished mixins EMsg {}
  declare class EMsg__BaseDRMS mixins EMsg {}
  declare class EMsg__DRMBuildBlobRequest mixins EMsg {}
  declare class EMsg__DRMBuildBlobResponse mixins EMsg {}
  declare class EMsg__DRMResolveGuidRequest mixins EMsg {}
  declare class EMsg__DRMResolveGuidResponse mixins EMsg {}
  declare class EMsg__DRMVariabilityReport mixins EMsg {}
  declare class EMsg__DRMVariabilityReportResponse mixins EMsg {}
  declare class EMsg__DRMStabilityReport mixins EMsg {}
  declare class EMsg__DRMStabilityReportResponse mixins EMsg {}
  declare class EMsg__DRMDetailsReportRequest mixins EMsg {}
  declare class EMsg__DRMDetailsReportResponse mixins EMsg {}
  declare class EMsg__DRMProcessFile mixins EMsg {}
  declare class EMsg__DRMAdminUpdate mixins EMsg {}
  declare class EMsg__DRMAdminUpdateResponse mixins EMsg {}
  declare class EMsg__DRMSync mixins EMsg {}
  declare class EMsg__DRMSyncResponse mixins EMsg {}
  declare class EMsg__DRMProcessFileResponse mixins EMsg {}
  declare class EMsg__DRMEmptyGuidCache mixins EMsg {}
  declare class EMsg__DRMEmptyGuidCacheResponse mixins EMsg {}
  declare class EMsg__BaseCS mixins EMsg {}
  declare class EMsg__CSUserContentRequest mixins EMsg {}
  declare class EMsg__BaseClient mixins EMsg {}
  declare class EMsg__ClientLogOn_Deprecated mixins EMsg {}
  declare class EMsg__ClientAnonLogOn_Deprecated mixins EMsg {}
  declare class EMsg__ClientHeartBeat mixins EMsg {}
  declare class EMsg__ClientVACResponse mixins EMsg {}
  declare class EMsg__ClientGamesPlayed_obsolete mixins EMsg {}
  declare class EMsg__ClientLogOff mixins EMsg {}
  declare class EMsg__ClientNoUDPConnectivity mixins EMsg {}
  declare class EMsg__ClientInformOfCreateAccount mixins EMsg {}
  declare class EMsg__ClientAckVACBan mixins EMsg {}
  declare class EMsg__ClientConnectionStats mixins EMsg {}
  declare class EMsg__ClientInitPurchase mixins EMsg {}
  declare class EMsg__ClientPingResponse mixins EMsg {}
  declare class EMsg__ClientRemoveFriend mixins EMsg {}
  declare class EMsg__ClientGamesPlayedNoDataBlob mixins EMsg {}
  declare class EMsg__ClientChangeStatus mixins EMsg {}
  declare class EMsg__ClientVacStatusResponse mixins EMsg {}
  declare class EMsg__ClientFriendMsg mixins EMsg {}
  declare class EMsg__ClientGameConnect_obsolete mixins EMsg {}
  declare class EMsg__ClientGamesPlayed2_obsolete mixins EMsg {}
  declare class EMsg__ClientGameEnded_obsolete mixins EMsg {}
  declare class EMsg__ClientGetFinalPrice mixins EMsg {}
  declare class EMsg__ClientSystemIM mixins EMsg {}
  declare class EMsg__ClientSystemIMAck mixins EMsg {}
  declare class EMsg__ClientGetLicenses mixins EMsg {}
  declare class EMsg__ClientCancelLicense mixins EMsg {}
  declare class EMsg__ClientGetLegacyGameKey mixins EMsg {}
  declare class EMsg__ClientContentServerLogOn_Deprecated mixins EMsg {}
  declare class EMsg__ClientAckVACBan2 mixins EMsg {}
  declare class EMsg__ClientAckMessageByGID mixins EMsg {}
  declare class EMsg__ClientGetPurchaseReceipts mixins EMsg {}
  declare class EMsg__ClientAckPurchaseReceipt mixins EMsg {}
  declare class EMsg__ClientGamesPlayed3_obsolete mixins EMsg {}
  declare class EMsg__ClientSendGuestPass mixins EMsg {}
  declare class EMsg__ClientAckGuestPass mixins EMsg {}
  declare class EMsg__ClientRedeemGuestPass mixins EMsg {}
  declare class EMsg__ClientGamesPlayed mixins EMsg {}
  declare class EMsg__ClientRegisterKey mixins EMsg {}
  declare class EMsg__ClientInviteUserToClan mixins EMsg {}
  declare class EMsg__ClientAcknowledgeClanInvite mixins EMsg {}
  declare class EMsg__ClientPurchaseWithMachineID mixins EMsg {}
  declare class EMsg__ClientAppUsageEvent mixins EMsg {}
  declare class EMsg__ClientGetGiftTargetList mixins EMsg {}
  declare class EMsg__ClientGetGiftTargetListResponse mixins EMsg {}
  declare class EMsg__ClientLogOnResponse mixins EMsg {}
  declare class EMsg__ClientVACChallenge mixins EMsg {}
  declare class EMsg__ClientSetHeartbeatRate mixins EMsg {}
  declare class EMsg__ClientNotLoggedOnDeprecated mixins EMsg {}
  declare class EMsg__ClientLoggedOff mixins EMsg {}
  declare class EMsg__GSApprove mixins EMsg {}
  declare class EMsg__GSDeny mixins EMsg {}
  declare class EMsg__GSKick mixins EMsg {}
  declare class EMsg__ClientCreateAcctResponse mixins EMsg {}
  declare class EMsg__ClientPurchaseResponse mixins EMsg {}
  declare class EMsg__ClientPing mixins EMsg {}
  declare class EMsg__ClientNOP mixins EMsg {}
  declare class EMsg__ClientPersonaState mixins EMsg {}
  declare class EMsg__ClientFriendsList mixins EMsg {}
  declare class EMsg__ClientAccountInfo mixins EMsg {}
  declare class EMsg__ClientVacStatusQuery mixins EMsg {}
  declare class EMsg__ClientNewsUpdate mixins EMsg {}
  declare class EMsg__ClientGameConnectDeny mixins EMsg {}
  declare class EMsg__GSStatusReply mixins EMsg {}
  declare class EMsg__ClientGetFinalPriceResponse mixins EMsg {}
  declare class EMsg__ClientGameConnectTokens mixins EMsg {}
  declare class EMsg__ClientLicenseList mixins EMsg {}
  declare class EMsg__ClientCancelLicenseResponse mixins EMsg {}
  declare class EMsg__ClientVACBanStatus mixins EMsg {}
  declare class EMsg__ClientCMList mixins EMsg {}
  declare class EMsg__ClientEncryptPct mixins EMsg {}
  declare class EMsg__ClientGetLegacyGameKeyResponse mixins EMsg {}
  declare class EMsg__ClientFavoritesList mixins EMsg {}
  declare class EMsg__CSUserContentApprove mixins EMsg {}
  declare class EMsg__CSUserContentDeny mixins EMsg {}
  declare class EMsg__ClientInitPurchaseResponse mixins EMsg {}
  declare class EMsg__ClientAddFriend mixins EMsg {}
  declare class EMsg__ClientAddFriendResponse mixins EMsg {}
  declare class EMsg__ClientInviteFriend mixins EMsg {}
  declare class EMsg__ClientInviteFriendResponse mixins EMsg {}
  declare class EMsg__ClientSendGuestPassResponse mixins EMsg {}
  declare class EMsg__ClientAckGuestPassResponse mixins EMsg {}
  declare class EMsg__ClientRedeemGuestPassResponse mixins EMsg {}
  declare class EMsg__ClientUpdateGuestPassesList mixins EMsg {}
  declare class EMsg__ClientChatMsg mixins EMsg {}
  declare class EMsg__ClientChatInvite mixins EMsg {}
  declare class EMsg__ClientJoinChat mixins EMsg {}
  declare class EMsg__ClientChatMemberInfo mixins EMsg {}
  declare class EMsg__ClientLogOnWithCredentials_Deprecated mixins EMsg {}
  declare class EMsg__ClientPasswordChangeResponse mixins EMsg {}
  declare class EMsg__ClientChatEnter mixins EMsg {}
  declare class EMsg__ClientFriendRemovedFromSource mixins EMsg {}
  declare class EMsg__ClientCreateChat mixins EMsg {}
  declare class EMsg__ClientCreateChatResponse mixins EMsg {}
  declare class EMsg__ClientUpdateChatMetadata mixins EMsg {}
  declare class EMsg__ClientP2PIntroducerMessage mixins EMsg {}
  declare class EMsg__ClientChatActionResult mixins EMsg {}
  declare class EMsg__ClientRequestFriendData mixins EMsg {}
  declare class EMsg__ClientGetUserStats mixins EMsg {}
  declare class EMsg__ClientGetUserStatsResponse mixins EMsg {}
  declare class EMsg__ClientStoreUserStats mixins EMsg {}
  declare class EMsg__ClientStoreUserStatsResponse mixins EMsg {}
  declare class EMsg__ClientClanState mixins EMsg {}
  declare class EMsg__ClientServiceModule mixins EMsg {}
  declare class EMsg__ClientServiceCall mixins EMsg {}
  declare class EMsg__ClientServiceCallResponse mixins EMsg {}
  declare class EMsg__ClientPackageInfoRequest mixins EMsg {}
  declare class EMsg__ClientPackageInfoResponse mixins EMsg {}
  declare class EMsg__ClientNatTraversalStatEvent mixins EMsg {}
  declare class EMsg__ClientAppInfoRequest mixins EMsg {}
  declare class EMsg__ClientAppInfoResponse mixins EMsg {}
  declare class EMsg__ClientSteamUsageEvent mixins EMsg {}
  declare class EMsg__ClientCheckPassword mixins EMsg {}
  declare class EMsg__ClientResetPassword mixins EMsg {}
  declare class EMsg__ClientCheckPasswordResponse mixins EMsg {}
  declare class EMsg__ClientResetPasswordResponse mixins EMsg {}
  declare class EMsg__ClientSessionToken mixins EMsg {}
  declare class EMsg__ClientDRMProblemReport mixins EMsg {}
  declare class EMsg__ClientSetIgnoreFriend mixins EMsg {}
  declare class EMsg__ClientSetIgnoreFriendResponse mixins EMsg {}
  declare class EMsg__ClientGetAppOwnershipTicket mixins EMsg {}
  declare class EMsg__ClientGetAppOwnershipTicketResponse mixins EMsg {}
  declare class EMsg__ClientGetLobbyListResponse mixins EMsg {}
  declare class EMsg__ClientGetLobbyMetadata mixins EMsg {}
  declare class EMsg__ClientGetLobbyMetadataResponse mixins EMsg {}
  declare class EMsg__ClientVTTCert mixins EMsg {}
  declare class EMsg__ClientAppInfoUpdate mixins EMsg {}
  declare class EMsg__ClientAppInfoChanges mixins EMsg {}
  declare class EMsg__ClientServerList mixins EMsg {}
  declare class EMsg__ClientEmailChangeResponse mixins EMsg {}
  declare class EMsg__ClientSecretQAChangeResponse mixins EMsg {}
  declare class EMsg__ClientDRMBlobRequest mixins EMsg {}
  declare class EMsg__ClientDRMBlobResponse mixins EMsg {}
  declare class EMsg__ClientLookupKey mixins EMsg {}
  declare class EMsg__ClientLookupKeyResponse mixins EMsg {}
  declare class EMsg__BaseGameServer mixins EMsg {}
  declare class EMsg__GSDisconnectNotice mixins EMsg {}
  declare class EMsg__GSStatus mixins EMsg {}
  declare class EMsg__GSUserPlaying mixins EMsg {}
  declare class EMsg__GSStatus2 mixins EMsg {}
  declare class EMsg__GSStatusUpdate_Unused mixins EMsg {}
  declare class EMsg__GSServerType mixins EMsg {}
  declare class EMsg__GSPlayerList mixins EMsg {}
  declare class EMsg__GSGetUserAchievementStatus mixins EMsg {}
  declare class EMsg__GSGetUserAchievementStatusResponse mixins EMsg {}
  declare class EMsg__GSGetPlayStats mixins EMsg {}
  declare class EMsg__GSGetPlayStatsResponse mixins EMsg {}
  declare class EMsg__GSGetUserGroupStatus mixins EMsg {}
  declare class EMsg__AMGetUserGroupStatus mixins EMsg {}
  declare class EMsg__AMGetUserGroupStatusResponse mixins EMsg {}
  declare class EMsg__GSGetUserGroupStatusResponse mixins EMsg {}
  declare class EMsg__GSGetReputation mixins EMsg {}
  declare class EMsg__GSGetReputationResponse mixins EMsg {}
  declare class EMsg__GSAssociateWithClan mixins EMsg {}
  declare class EMsg__GSAssociateWithClanResponse mixins EMsg {}
  declare class EMsg__GSComputeNewPlayerCompatibility mixins EMsg {}
  declare class EMsg__GSComputeNewPlayerCompatibilityResponse mixins EMsg {}
  declare class EMsg__BaseAdmin mixins EMsg {}
  declare class EMsg__AdminCmd mixins EMsg {}
  declare class EMsg__AdminCmdResponse mixins EMsg {}
  declare class EMsg__AdminLogListenRequest mixins EMsg {}
  declare class EMsg__AdminLogEvent mixins EMsg {}
  declare class EMsg__LogSearchRequest mixins EMsg {}
  declare class EMsg__LogSearchResponse mixins EMsg {}
  declare class EMsg__LogSearchCancel mixins EMsg {}
  declare class EMsg__UniverseData mixins EMsg {}
  declare class EMsg__RequestStatHistory mixins EMsg {}
  declare class EMsg__StatHistory mixins EMsg {}
  declare class EMsg__AdminPwLogon mixins EMsg {}
  declare class EMsg__AdminPwLogonResponse mixins EMsg {}
  declare class EMsg__AdminSpew mixins EMsg {}
  declare class EMsg__AdminConsoleTitle mixins EMsg {}
  declare class EMsg__AdminGCSpew mixins EMsg {}
  declare class EMsg__AdminGCCommand mixins EMsg {}
  declare class EMsg__AdminGCGetCommandList mixins EMsg {}
  declare class EMsg__AdminGCGetCommandListResponse mixins EMsg {}
  declare class EMsg__FBSConnectionData mixins EMsg {}
  declare class EMsg__AdminMsgSpew mixins EMsg {}
  declare class EMsg__BaseFBS mixins EMsg {}
  declare class EMsg__FBSReqVersion mixins EMsg {}
  declare class EMsg__FBSVersionInfo mixins EMsg {}
  declare class EMsg__FBSForceRefresh mixins EMsg {}
  declare class EMsg__FBSForceBounce mixins EMsg {}
  declare class EMsg__FBSDeployPackage mixins EMsg {}
  declare class EMsg__FBSDeployResponse mixins EMsg {}
  declare class EMsg__FBSUpdateBootstrapper mixins EMsg {}
  declare class EMsg__FBSSetState mixins EMsg {}
  declare class EMsg__FBSApplyOSUpdates mixins EMsg {}
  declare class EMsg__FBSRunCMDScript mixins EMsg {}
  declare class EMsg__FBSRebootBox mixins EMsg {}
  declare class EMsg__FBSSetBigBrotherMode mixins EMsg {}
  declare class EMsg__FBSMinidumpServer mixins EMsg {}
  declare class EMsg__FBSSetShellCount_obsolete mixins EMsg {}
  declare class EMsg__FBSDeployHotFixPackage mixins EMsg {}
  declare class EMsg__FBSDeployHotFixResponse mixins EMsg {}
  declare class EMsg__FBSDownloadHotFix mixins EMsg {}
  declare class EMsg__FBSDownloadHotFixResponse mixins EMsg {}
  declare class EMsg__FBSUpdateTargetConfigFile mixins EMsg {}
  declare class EMsg__FBSApplyAccountCred mixins EMsg {}
  declare class EMsg__FBSApplyAccountCredResponse mixins EMsg {}
  declare class EMsg__FBSSetShellCount mixins EMsg {}
  declare class EMsg__FBSTerminateShell mixins EMsg {}
  declare class EMsg__FBSQueryGMForRequest mixins EMsg {}
  declare class EMsg__FBSQueryGMResponse mixins EMsg {}
  declare class EMsg__FBSTerminateZombies mixins EMsg {}
  declare class EMsg__FBSInfoFromBootstrapper mixins EMsg {}
  declare class EMsg__FBSRebootBoxResponse mixins EMsg {}
  declare class EMsg__FBSBootstrapperPackageRequest mixins EMsg {}
  declare class EMsg__FBSBootstrapperPackageResponse mixins EMsg {}
  declare class EMsg__FBSBootstrapperGetPackageChunk mixins EMsg {}
  declare class EMsg__FBSBootstrapperGetPackageChunkResponse mixins EMsg {}
  declare class EMsg__FBSBootstrapperPackageTransferProgress mixins EMsg {}
  declare class EMsg__FBSRestartBootstrapper mixins EMsg {}
  declare class EMsg__BaseFileXfer mixins EMsg {}
  declare class EMsg__FileXferRequest mixins EMsg {}
  declare class EMsg__FileXferResponse mixins EMsg {}
  declare class EMsg__FileXferData mixins EMsg {}
  declare class EMsg__FileXferEnd mixins EMsg {}
  declare class EMsg__FileXferDataAck mixins EMsg {}
  declare class EMsg__BaseChannelAuth mixins EMsg {}
  declare class EMsg__ChannelAuthChallenge mixins EMsg {}
  declare class EMsg__ChannelAuthResponse mixins EMsg {}
  declare class EMsg__ChannelAuthResult mixins EMsg {}
  declare class EMsg__ChannelEncryptRequest mixins EMsg {}
  declare class EMsg__ChannelEncryptResponse mixins EMsg {}
  declare class EMsg__ChannelEncryptResult mixins EMsg {}
  declare class EMsg__BaseBS mixins EMsg {}
  declare class EMsg__BSPurchaseStart mixins EMsg {}
  declare class EMsg__BSPurchaseResponse mixins EMsg {}
  declare class EMsg__BSSettleNOVA mixins EMsg {}
  declare class EMsg__BSSettleComplete mixins EMsg {}
  declare class EMsg__BSBannedRequest mixins EMsg {}
  declare class EMsg__BSInitPayPalTxn mixins EMsg {}
  declare class EMsg__BSInitPayPalTxnResponse mixins EMsg {}
  declare class EMsg__BSGetPayPalUserInfo mixins EMsg {}
  declare class EMsg__BSGetPayPalUserInfoResponse mixins EMsg {}
  declare class EMsg__BSRefundTxn mixins EMsg {}
  declare class EMsg__BSRefundTxnResponse mixins EMsg {}
  declare class EMsg__BSGetEvents mixins EMsg {}
  declare class EMsg__BSChaseRFRRequest mixins EMsg {}
  declare class EMsg__BSPaymentInstrBan mixins EMsg {}
  declare class EMsg__BSPaymentInstrBanResponse mixins EMsg {}
  declare class EMsg__BSProcessGCReports mixins EMsg {}
  declare class EMsg__BSProcessPPReports mixins EMsg {}
  declare class EMsg__BSInitGCBankXferTxn mixins EMsg {}
  declare class EMsg__BSInitGCBankXferTxnResponse mixins EMsg {}
  declare class EMsg__BSQueryGCBankXferTxn mixins EMsg {}
  declare class EMsg__BSQueryGCBankXferTxnResponse mixins EMsg {}
  declare class EMsg__BSCommitGCTxn mixins EMsg {}
  declare class EMsg__BSQueryTransactionStatus mixins EMsg {}
  declare class EMsg__BSQueryTransactionStatusResponse mixins EMsg {}
  declare class EMsg__BSQueryCBOrderStatus mixins EMsg {}
  declare class EMsg__BSQueryCBOrderStatusResponse mixins EMsg {}
  declare class EMsg__BSRunRedFlagReport mixins EMsg {}
  declare class EMsg__BSQueryPaymentInstUsage mixins EMsg {}
  declare class EMsg__BSQueryPaymentInstResponse mixins EMsg {}
  declare class EMsg__BSQueryTxnExtendedInfo mixins EMsg {}
  declare class EMsg__BSQueryTxnExtendedInfoResponse mixins EMsg {}
  declare class EMsg__BSUpdateConversionRates mixins EMsg {}
  declare class EMsg__BSProcessUSBankReports mixins EMsg {}
  declare class EMsg__BSPurchaseRunFraudChecks mixins EMsg {}
  declare class EMsg__BSPurchaseRunFraudChecksResponse mixins EMsg {}
  declare class EMsg__BSStartShippingJobs mixins EMsg {}
  declare class EMsg__BSQueryBankInformation mixins EMsg {}
  declare class EMsg__BSQueryBankInformationResponse mixins EMsg {}
  declare class EMsg__BSValidateXsollaSignature mixins EMsg {}
  declare class EMsg__BSValidateXsollaSignatureResponse mixins EMsg {}
  declare class EMsg__BSQiwiWalletInvoice mixins EMsg {}
  declare class EMsg__BSQiwiWalletInvoiceResponse mixins EMsg {}
  declare class EMsg__BSUpdateInventoryFromProPack mixins EMsg {}
  declare class EMsg__BSUpdateInventoryFromProPackResponse mixins EMsg {}
  declare class EMsg__BSSendShippingRequest mixins EMsg {}
  declare class EMsg__BSSendShippingRequestResponse mixins EMsg {}
  declare class EMsg__BSGetProPackOrderStatus mixins EMsg {}
  declare class EMsg__BSGetProPackOrderStatusResponse mixins EMsg {}
  declare class EMsg__BSCheckJobRunning mixins EMsg {}
  declare class EMsg__BSCheckJobRunningResponse mixins EMsg {}
  declare class EMsg__BSResetPackagePurchaseRateLimit mixins EMsg {}
  declare class EMsg__BSResetPackagePurchaseRateLimitResponse mixins EMsg {}
  declare class EMsg__BSUpdatePaymentData mixins EMsg {}
  declare class EMsg__BSUpdatePaymentDataResponse mixins EMsg {}
  declare class EMsg__BSGetBillingAddress mixins EMsg {}
  declare class EMsg__BSGetBillingAddressResponse mixins EMsg {}
  declare class EMsg__BSGetCreditCardInfo mixins EMsg {}
  declare class EMsg__BSGetCreditCardInfoResponse mixins EMsg {}
  declare class EMsg__BSRemoveExpiredPaymentData mixins EMsg {}
  declare class EMsg__BSRemoveExpiredPaymentDataResponse mixins EMsg {}
  declare class EMsg__BSConvertToCurrentKeys mixins EMsg {}
  declare class EMsg__BSConvertToCurrentKeysResponse mixins EMsg {}
  declare class EMsg__BSInitPurchase mixins EMsg {}
  declare class EMsg__BSInitPurchaseResponse mixins EMsg {}
  declare class EMsg__BSCompletePurchase mixins EMsg {}
  declare class EMsg__BSCompletePurchaseResponse mixins EMsg {}
  declare class EMsg__BSPruneCardUsageStats mixins EMsg {}
  declare class EMsg__BSPruneCardUsageStatsResponse mixins EMsg {}
  declare class EMsg__BSStoreBankInformation mixins EMsg {}
  declare class EMsg__BSStoreBankInformationResponse mixins EMsg {}
  declare class EMsg__BSVerifyPOSAKey mixins EMsg {}
  declare class EMsg__BSVerifyPOSAKeyResponse mixins EMsg {}
  declare class EMsg__BSReverseRedeemPOSAKey mixins EMsg {}
  declare class EMsg__BSReverseRedeemPOSAKeyResponse mixins EMsg {}
  declare class EMsg__BSQueryFindCreditCard mixins EMsg {}
  declare class EMsg__BSQueryFindCreditCardResponse mixins EMsg {}
  declare class EMsg__BSStatusInquiryPOSAKey mixins EMsg {}
  declare class EMsg__BSStatusInquiryPOSAKeyResponse mixins EMsg {}
  declare class EMsg__BSValidateMoPaySignature mixins EMsg {}
  declare class EMsg__BSValidateMoPaySignatureResponse mixins EMsg {}
  declare class EMsg__BSMoPayConfirmProductDelivery mixins EMsg {}
  declare class EMsg__BSMoPayConfirmProductDeliveryResponse mixins EMsg {}
  declare class EMsg__BSGenerateMoPayMD5 mixins EMsg {}
  declare class EMsg__BSGenerateMoPayMD5Response mixins EMsg {}
  declare class EMsg__BSBoaCompraConfirmProductDelivery mixins EMsg {}
  declare class EMsg__BSBoaCompraConfirmProductDeliveryResponse mixins EMsg {}
  declare class EMsg__BSGenerateBoaCompraMD5 mixins EMsg {}
  declare class EMsg__BSGenerateBoaCompraMD5Response mixins EMsg {}
  declare class EMsg__BSCommitWPTxn mixins EMsg {}
  declare class EMsg__BaseATS mixins EMsg {}
  declare class EMsg__ATSStartStressTest mixins EMsg {}
  declare class EMsg__ATSStopStressTest mixins EMsg {}
  declare class EMsg__ATSRunFailServerTest mixins EMsg {}
  declare class EMsg__ATSUFSPerfTestTask mixins EMsg {}
  declare class EMsg__ATSUFSPerfTestResponse mixins EMsg {}
  declare class EMsg__ATSCycleTCM mixins EMsg {}
  declare class EMsg__ATSInitDRMSStressTest mixins EMsg {}
  declare class EMsg__ATSCallTest mixins EMsg {}
  declare class EMsg__ATSCallTestReply mixins EMsg {}
  declare class EMsg__ATSStartExternalStress mixins EMsg {}
  declare class EMsg__ATSExternalStressJobStart mixins EMsg {}
  declare class EMsg__ATSExternalStressJobQueued mixins EMsg {}
  declare class EMsg__ATSExternalStressJobRunning mixins EMsg {}
  declare class EMsg__ATSExternalStressJobStopped mixins EMsg {}
  declare class EMsg__ATSExternalStressJobStopAll mixins EMsg {}
  declare class EMsg__ATSExternalStressActionResult mixins EMsg {}
  declare class EMsg__ATSStarted mixins EMsg {}
  declare class EMsg__ATSCSPerfTestTask mixins EMsg {}
  declare class EMsg__ATSCSPerfTestResponse mixins EMsg {}
  declare class EMsg__BaseDP mixins EMsg {}
  declare class EMsg__DPSetPublishingState mixins EMsg {}
  declare class EMsg__DPGamePlayedStats mixins EMsg {}
  declare class EMsg__DPUniquePlayersStat mixins EMsg {}
  declare class EMsg__DPStreamingUniquePlayersStat mixins EMsg {}
  declare class EMsg__DPVacInfractionStats mixins EMsg {}
  declare class EMsg__DPVacBanStats mixins EMsg {}
  declare class EMsg__DPBlockingStats mixins EMsg {}
  declare class EMsg__DPNatTraversalStats mixins EMsg {}
  declare class EMsg__DPSteamUsageEvent mixins EMsg {}
  declare class EMsg__DPVacCertBanStats mixins EMsg {}
  declare class EMsg__DPVacCafeBanStats mixins EMsg {}
  declare class EMsg__DPCloudStats mixins EMsg {}
  declare class EMsg__DPAchievementStats mixins EMsg {}
  declare class EMsg__DPAccountCreationStats mixins EMsg {}
  declare class EMsg__DPGetPlayerCount mixins EMsg {}
  declare class EMsg__DPGetPlayerCountResponse mixins EMsg {}
  declare class EMsg__DPGameServersPlayersStats mixins EMsg {}
  declare class EMsg__DPDownloadRateStatistics mixins EMsg {}
  declare class EMsg__DPFacebookStatistics mixins EMsg {}
  declare class EMsg__ClientDPCheckSpecialSurvey mixins EMsg {}
  declare class EMsg__ClientDPCheckSpecialSurveyResponse mixins EMsg {}
  declare class EMsg__ClientDPSendSpecialSurveyResponse mixins EMsg {}
  declare class EMsg__ClientDPSendSpecialSurveyResponseReply mixins EMsg {}
  declare class EMsg__DPStoreSaleStatistics mixins EMsg {}
  declare class EMsg__ClientDPUpdateAppJobReport mixins EMsg {}
  declare class EMsg__ClientDPSteam2AppStarted mixins EMsg {}
  declare class EMsg__DPUpdateContentEvent mixins EMsg {}
  declare class EMsg__DPPartnerMicroTxns mixins EMsg {}
  declare class EMsg__DPPartnerMicroTxnsResponse mixins EMsg {}
  declare class EMsg__ClientDPContentStatsReport mixins EMsg {}
  declare class EMsg__DPVRUniquePlayersStat mixins EMsg {}
  declare class EMsg__BaseCM mixins EMsg {}
  declare class EMsg__CMSetAllowState mixins EMsg {}
  declare class EMsg__CMSpewAllowState mixins EMsg {}
  declare class EMsg__CMAppInfoResponseDeprecated mixins EMsg {}
  declare class EMsg__BaseDSS mixins EMsg {}
  declare class EMsg__DSSNewFile mixins EMsg {}
  declare class EMsg__DSSCurrentFileList mixins EMsg {}
  declare class EMsg__DSSSynchList mixins EMsg {}
  declare class EMsg__DSSSynchListResponse mixins EMsg {}
  declare class EMsg__DSSSynchSubscribe mixins EMsg {}
  declare class EMsg__DSSSynchUnsubscribe mixins EMsg {}
  declare class EMsg__BaseEPM mixins EMsg {}
  declare class EMsg__EPMStartProcess mixins EMsg {}
  declare class EMsg__EPMStopProcess mixins EMsg {}
  declare class EMsg__EPMRestartProcess mixins EMsg {}
  declare class EMsg__BaseGC mixins EMsg {}
  declare class EMsg__GCSendClient mixins EMsg {}
  declare class EMsg__AMRelayToGC mixins EMsg {}
  declare class EMsg__GCUpdatePlayedState mixins EMsg {}
  declare class EMsg__GCCmdRevive mixins EMsg {}
  declare class EMsg__GCCmdBounce mixins EMsg {}
  declare class EMsg__GCCmdForceBounce mixins EMsg {}
  declare class EMsg__GCCmdDown mixins EMsg {}
  declare class EMsg__GCCmdDeploy mixins EMsg {}
  declare class EMsg__GCCmdDeployResponse mixins EMsg {}
  declare class EMsg__GCCmdSwitch mixins EMsg {}
  declare class EMsg__AMRefreshSessions mixins EMsg {}
  declare class EMsg__GCUpdateGSState mixins EMsg {}
  declare class EMsg__GCAchievementAwarded mixins EMsg {}
  declare class EMsg__GCSystemMessage mixins EMsg {}
  declare class EMsg__GCValidateSession mixins EMsg {}
  declare class EMsg__GCValidateSessionResponse mixins EMsg {}
  declare class EMsg__GCCmdStatus mixins EMsg {}
  declare class EMsg__GCRegisterWebInterfaces mixins EMsg {}
  declare class EMsg__GCRegisterWebInterfaces_Deprecated mixins EMsg {}
  declare class EMsg__GCGetAccountDetails mixins EMsg {}
  declare class EMsg__GCGetAccountDetails_DEPRECATED mixins EMsg {}
  declare class EMsg__GCInterAppMessage mixins EMsg {}
  declare class EMsg__GCGetEmailTemplate mixins EMsg {}
  declare class EMsg__GCGetEmailTemplateResponse mixins EMsg {}
  declare class EMsg__ISRelayToGCH mixins EMsg {}
  declare class EMsg__GCHRelay mixins EMsg {}
  declare class EMsg__GCHRelayClientToIS mixins EMsg {}
  declare class EMsg__GCHRelayToClient mixins EMsg {}
  declare class EMsg__GCHUpdateSession mixins EMsg {}
  declare class EMsg__GCHRequestUpdateSession mixins EMsg {}
  declare class EMsg__GCHRequestStatus mixins EMsg {}
  declare class EMsg__GCHRequestStatusResponse mixins EMsg {}
  declare class EMsg__GCHAccountVacStatusChange mixins EMsg {}
  declare class EMsg__GCHSpawnGC mixins EMsg {}
  declare class EMsg__GCHSpawnGCResponse mixins EMsg {}
  declare class EMsg__GCHKillGC mixins EMsg {}
  declare class EMsg__GCHKillGCResponse mixins EMsg {}
  declare class EMsg__GCHAccountTradeBanStatusChange mixins EMsg {}
  declare class EMsg__GCHAccountLockStatusChange mixins EMsg {}
  declare class EMsg__GCHVacVerificationChange mixins EMsg {}
  declare class EMsg__GCHAccountPhoneNumberChange mixins EMsg {}
  declare class EMsg__GCHAccountTwoFactorChange mixins EMsg {}
  declare class EMsg__BaseP2P mixins EMsg {}
  declare class EMsg__P2PIntroducerMessage mixins EMsg {}
  declare class EMsg__BaseSM mixins EMsg {}
  declare class EMsg__SMExpensiveReport mixins EMsg {}
  declare class EMsg__SMHourlyReport mixins EMsg {}
  declare class EMsg__SMFishingReport mixins EMsg {}
  declare class EMsg__SMPartitionRenames mixins EMsg {}
  declare class EMsg__SMMonitorSpace mixins EMsg {}
  declare class EMsg__SMGetSchemaConversionResults mixins EMsg {}
  declare class EMsg__SMGetSchemaConversionResultsResponse mixins EMsg {}
  declare class EMsg__BaseTest mixins EMsg {}
  declare class EMsg__FailServer mixins EMsg {}
  declare class EMsg__JobHeartbeatTest mixins EMsg {}
  declare class EMsg__JobHeartbeatTestResponse mixins EMsg {}
  declare class EMsg__BaseFTSRange mixins EMsg {}
  declare class EMsg__FTSGetBrowseCounts mixins EMsg {}
  declare class EMsg__FTSGetBrowseCountsResponse mixins EMsg {}
  declare class EMsg__FTSBrowseClans mixins EMsg {}
  declare class EMsg__FTSBrowseClansResponse mixins EMsg {}
  declare class EMsg__FTSSearchClansByLocation mixins EMsg {}
  declare class EMsg__FTSSearchClansByLocationResponse mixins EMsg {}
  declare class EMsg__FTSSearchPlayersByLocation mixins EMsg {}
  declare class EMsg__FTSSearchPlayersByLocationResponse mixins EMsg {}
  declare class EMsg__FTSClanDeleted mixins EMsg {}
  declare class EMsg__FTSSearch mixins EMsg {}
  declare class EMsg__FTSSearchResponse mixins EMsg {}
  declare class EMsg__FTSSearchStatus mixins EMsg {}
  declare class EMsg__FTSSearchStatusResponse mixins EMsg {}
  declare class EMsg__FTSGetGSPlayStats mixins EMsg {}
  declare class EMsg__FTSGetGSPlayStatsResponse mixins EMsg {}
  declare class EMsg__FTSGetGSPlayStatsForServer mixins EMsg {}
  declare class EMsg__FTSGetGSPlayStatsForServerResponse mixins EMsg {}
  declare class EMsg__FTSReportIPUpdates mixins EMsg {}
  declare class EMsg__BaseCCSRange mixins EMsg {}
  declare class EMsg__CCSGetComments mixins EMsg {}
  declare class EMsg__CCSGetCommentsResponse mixins EMsg {}
  declare class EMsg__CCSAddComment mixins EMsg {}
  declare class EMsg__CCSAddCommentResponse mixins EMsg {}
  declare class EMsg__CCSDeleteComment mixins EMsg {}
  declare class EMsg__CCSDeleteCommentResponse mixins EMsg {}
  declare class EMsg__CCSPreloadComments mixins EMsg {}
  declare class EMsg__CCSNotifyCommentCount mixins EMsg {}
  declare class EMsg__CCSGetCommentsForNews mixins EMsg {}
  declare class EMsg__CCSGetCommentsForNewsResponse mixins EMsg {}
  declare class EMsg__CCSDeleteAllCommentsByAuthor mixins EMsg {}
  declare class EMsg__CCSDeleteAllCommentsByAuthorResponse mixins EMsg {}
  declare class EMsg__BaseLBSRange mixins EMsg {}
  declare class EMsg__LBSSetScore mixins EMsg {}
  declare class EMsg__LBSSetScoreResponse mixins EMsg {}
  declare class EMsg__LBSFindOrCreateLB mixins EMsg {}
  declare class EMsg__LBSFindOrCreateLBResponse mixins EMsg {}
  declare class EMsg__LBSGetLBEntries mixins EMsg {}
  declare class EMsg__LBSGetLBEntriesResponse mixins EMsg {}
  declare class EMsg__LBSGetLBList mixins EMsg {}
  declare class EMsg__LBSGetLBListResponse mixins EMsg {}
  declare class EMsg__LBSSetLBDetails mixins EMsg {}
  declare class EMsg__LBSDeleteLB mixins EMsg {}
  declare class EMsg__LBSDeleteLBEntry mixins EMsg {}
  declare class EMsg__LBSResetLB mixins EMsg {}
  declare class EMsg__LBSResetLBResponse mixins EMsg {}
  declare class EMsg__LBSDeleteLBResponse mixins EMsg {}
  declare class EMsg__BaseOGS mixins EMsg {}
  declare class EMsg__OGSBeginSession mixins EMsg {}
  declare class EMsg__OGSBeginSessionResponse mixins EMsg {}
  declare class EMsg__OGSEndSession mixins EMsg {}
  declare class EMsg__OGSEndSessionResponse mixins EMsg {}
  declare class EMsg__OGSWriteAppSessionRow mixins EMsg {}
  declare class EMsg__BaseBRP mixins EMsg {}
  declare class EMsg__BRPStartShippingJobs mixins EMsg {}
  declare class EMsg__BRPProcessUSBankReports mixins EMsg {}
  declare class EMsg__BRPProcessGCReports mixins EMsg {}
  declare class EMsg__BRPProcessPPReports mixins EMsg {}
  declare class EMsg__BRPSettleNOVA mixins EMsg {}
  declare class EMsg__BRPSettleCB mixins EMsg {}
  declare class EMsg__BRPCommitGC mixins EMsg {}
  declare class EMsg__BRPCommitGCResponse mixins EMsg {}
  declare class EMsg__BRPFindHungTransactions mixins EMsg {}
  declare class EMsg__BRPCheckFinanceCloseOutDate mixins EMsg {}
  declare class EMsg__BRPProcessLicenses mixins EMsg {}
  declare class EMsg__BRPProcessLicensesResponse mixins EMsg {}
  declare class EMsg__BRPRemoveExpiredPaymentData mixins EMsg {}
  declare class EMsg__BRPRemoveExpiredPaymentDataResponse mixins EMsg {}
  declare class EMsg__BRPConvertToCurrentKeys mixins EMsg {}
  declare class EMsg__BRPConvertToCurrentKeysResponse mixins EMsg {}
  declare class EMsg__BRPPruneCardUsageStats mixins EMsg {}
  declare class EMsg__BRPPruneCardUsageStatsResponse mixins EMsg {}
  declare class EMsg__BRPCheckActivationCodes mixins EMsg {}
  declare class EMsg__BRPCheckActivationCodesResponse mixins EMsg {}
  declare class EMsg__BRPCommitWP mixins EMsg {}
  declare class EMsg__BRPCommitWPResponse mixins EMsg {}
  declare class EMsg__BRPProcessWPReports mixins EMsg {}
  declare class EMsg__BRPProcessPaymentRules mixins EMsg {}
  declare class EMsg__BRPProcessPartnerPayments mixins EMsg {}
  declare class EMsg__BRPCheckSettlementReports mixins EMsg {}
  declare class EMsg__BRPPostTaxToAvalara mixins EMsg {}
  declare class EMsg__BRPPostTransactionTax mixins EMsg {}
  declare class EMsg__BRPPostTransactionTaxResponse mixins EMsg {}
  declare class EMsg__BRPProcessIMReports mixins EMsg {}
  declare class EMsg__BaseAMRange2 mixins EMsg {}
  declare class EMsg__AMCreateChat mixins EMsg {}
  declare class EMsg__AMCreateChatResponse mixins EMsg {}
  declare class EMsg__AMUpdateChatMetadata mixins EMsg {}
  declare class EMsg__AMPublishChatMetadata mixins EMsg {}
  declare class EMsg__AMSetProfileURL mixins EMsg {}
  declare class EMsg__AMGetAccountEmailAddress mixins EMsg {}
  declare class EMsg__AMGetAccountEmailAddressResponse mixins EMsg {}
  declare class EMsg__AMRequestFriendData mixins EMsg {}
  declare class EMsg__AMRequestClanData mixins EMsg {}
  declare class EMsg__AMRouteToClients mixins EMsg {}
  declare class EMsg__AMLeaveClan mixins EMsg {}
  declare class EMsg__AMClanPermissions mixins EMsg {}
  declare class EMsg__AMClanPermissionsResponse mixins EMsg {}
  declare class EMsg__AMCreateClanEvent mixins EMsg {}
  declare class EMsg__AMCreateClanEventResponse mixins EMsg {}
  declare class EMsg__AMUpdateClanEvent mixins EMsg {}
  declare class EMsg__AMUpdateClanEventResponse mixins EMsg {}
  declare class EMsg__AMGetClanEvents mixins EMsg {}
  declare class EMsg__AMGetClanEventsResponse mixins EMsg {}
  declare class EMsg__AMDeleteClanEvent mixins EMsg {}
  declare class EMsg__AMDeleteClanEventResponse mixins EMsg {}
  declare class EMsg__AMSetClanPermissionSettings mixins EMsg {}
  declare class EMsg__AMSetClanPermissionSettingsResponse mixins EMsg {}
  declare class EMsg__AMGetClanPermissionSettings mixins EMsg {}
  declare class EMsg__AMGetClanPermissionSettingsResponse mixins EMsg {}
  declare class EMsg__AMPublishChatRoomInfo mixins EMsg {}
  declare class EMsg__ClientChatRoomInfo mixins EMsg {}
  declare class EMsg__AMCreateClanAnnouncement mixins EMsg {}
  declare class EMsg__AMCreateClanAnnouncementResponse mixins EMsg {}
  declare class EMsg__AMUpdateClanAnnouncement mixins EMsg {}
  declare class EMsg__AMUpdateClanAnnouncementResponse mixins EMsg {}
  declare class EMsg__AMGetClanAnnouncementsCount mixins EMsg {}
  declare class EMsg__AMGetClanAnnouncementsCountResponse mixins EMsg {}
  declare class EMsg__AMGetClanAnnouncements mixins EMsg {}
  declare class EMsg__AMGetClanAnnouncementsResponse mixins EMsg {}
  declare class EMsg__AMDeleteClanAnnouncement mixins EMsg {}
  declare class EMsg__AMDeleteClanAnnouncementResponse mixins EMsg {}
  declare class EMsg__AMGetSingleClanAnnouncement mixins EMsg {}
  declare class EMsg__AMGetSingleClanAnnouncementResponse mixins EMsg {}
  declare class EMsg__AMGetClanHistory mixins EMsg {}
  declare class EMsg__AMGetClanHistoryResponse mixins EMsg {}
  declare class EMsg__AMGetClanPermissionBits mixins EMsg {}
  declare class EMsg__AMGetClanPermissionBitsResponse mixins EMsg {}
  declare class EMsg__AMSetClanPermissionBits mixins EMsg {}
  declare class EMsg__AMSetClanPermissionBitsResponse mixins EMsg {}
  declare class EMsg__AMSessionInfoRequest mixins EMsg {}
  declare class EMsg__AMSessionInfoResponse mixins EMsg {}
  declare class EMsg__AMValidateWGToken mixins EMsg {}
  declare class EMsg__AMGetSingleClanEvent mixins EMsg {}
  declare class EMsg__AMGetSingleClanEventResponse mixins EMsg {}
  declare class EMsg__AMGetClanRank mixins EMsg {}
  declare class EMsg__AMGetClanRankResponse mixins EMsg {}
  declare class EMsg__AMSetClanRank mixins EMsg {}
  declare class EMsg__AMSetClanRankResponse mixins EMsg {}
  declare class EMsg__AMGetClanPOTW mixins EMsg {}
  declare class EMsg__AMGetClanPOTWResponse mixins EMsg {}
  declare class EMsg__AMSetClanPOTW mixins EMsg {}
  declare class EMsg__AMSetClanPOTWResponse mixins EMsg {}
  declare class EMsg__AMRequestChatMetadata mixins EMsg {}
  declare class EMsg__AMDumpUser mixins EMsg {}
  declare class EMsg__AMKickUserFromClan mixins EMsg {}
  declare class EMsg__AMAddFounderToClan mixins EMsg {}
  declare class EMsg__AMValidateWGTokenResponse mixins EMsg {}
  declare class EMsg__AMSetCommunityState mixins EMsg {}
  declare class EMsg__AMSetAccountDetails mixins EMsg {}
  declare class EMsg__AMGetChatBanList mixins EMsg {}
  declare class EMsg__AMGetChatBanListResponse mixins EMsg {}
  declare class EMsg__AMUnBanFromChat mixins EMsg {}
  declare class EMsg__AMSetClanDetails mixins EMsg {}
  declare class EMsg__AMGetAccountLinks mixins EMsg {}
  declare class EMsg__AMGetAccountLinksResponse mixins EMsg {}
  declare class EMsg__AMSetAccountLinks mixins EMsg {}
  declare class EMsg__AMSetAccountLinksResponse mixins EMsg {}
  declare class EMsg__AMGetUserGameStats mixins EMsg {}
  declare class EMsg__AMGetUserGameStatsResponse mixins EMsg {}
  declare class EMsg__AMCheckClanMembership mixins EMsg {}
  declare class EMsg__AMGetClanMembers mixins EMsg {}
  declare class EMsg__AMGetClanMembersResponse mixins EMsg {}
  declare class EMsg__AMJoinPublicClan mixins EMsg {}
  declare class EMsg__AMNotifyChatOfClanChange mixins EMsg {}
  declare class EMsg__AMResubmitPurchase mixins EMsg {}
  declare class EMsg__AMAddFriend mixins EMsg {}
  declare class EMsg__AMAddFriendResponse mixins EMsg {}
  declare class EMsg__AMRemoveFriend mixins EMsg {}
  declare class EMsg__AMDumpClan mixins EMsg {}
  declare class EMsg__AMChangeClanOwner mixins EMsg {}
  declare class EMsg__AMCancelEasyCollect mixins EMsg {}
  declare class EMsg__AMCancelEasyCollectResponse mixins EMsg {}
  declare class EMsg__AMGetClanMembershipList mixins EMsg {}
  declare class EMsg__AMGetClanMembershipListResponse mixins EMsg {}
  declare class EMsg__AMClansInCommon mixins EMsg {}
  declare class EMsg__AMClansInCommonResponse mixins EMsg {}
  declare class EMsg__AMIsValidAccountID mixins EMsg {}
  declare class EMsg__AMConvertClan mixins EMsg {}
  declare class EMsg__AMGetGiftTargetListRelay mixins EMsg {}
  declare class EMsg__AMWipeFriendsList mixins EMsg {}
  declare class EMsg__AMSetIgnored mixins EMsg {}
  declare class EMsg__AMClansInCommonCountResponse mixins EMsg {}
  declare class EMsg__AMFriendsList mixins EMsg {}
  declare class EMsg__AMFriendsListResponse mixins EMsg {}
  declare class EMsg__AMFriendsInCommon mixins EMsg {}
  declare class EMsg__AMFriendsInCommonResponse mixins EMsg {}
  declare class EMsg__AMFriendsInCommonCountResponse mixins EMsg {}
  declare class EMsg__AMClansInCommonCount mixins EMsg {}
  declare class EMsg__AMChallengeVerdict mixins EMsg {}
  declare class EMsg__AMChallengeNotification mixins EMsg {}
  declare class EMsg__AMFindGSByIP mixins EMsg {}
  declare class EMsg__AMFoundGSByIP mixins EMsg {}
  declare class EMsg__AMGiftRevoked mixins EMsg {}
  declare class EMsg__AMCreateAccountRecord mixins EMsg {}
  declare class EMsg__AMUserClanList mixins EMsg {}
  declare class EMsg__AMUserClanListResponse mixins EMsg {}
  declare class EMsg__AMGetAccountDetails2 mixins EMsg {}
  declare class EMsg__AMGetAccountDetailsResponse2 mixins EMsg {}
  declare class EMsg__AMSetCommunityProfileSettings mixins EMsg {}
  declare class EMsg__AMSetCommunityProfileSettingsResponse mixins EMsg {}
  declare class EMsg__AMGetCommunityPrivacyState mixins EMsg {}
  declare class EMsg__AMGetCommunityPrivacyStateResponse mixins EMsg {}
  declare class EMsg__AMCheckClanInviteRateLimiting mixins EMsg {}
  declare class EMsg__AMGetUserAchievementStatus mixins EMsg {}
  declare class EMsg__AMGetIgnored mixins EMsg {}
  declare class EMsg__AMGetIgnoredResponse mixins EMsg {}
  declare class EMsg__AMSetIgnoredResponse mixins EMsg {}
  declare class EMsg__AMSetFriendRelationshipNone mixins EMsg {}
  declare class EMsg__AMGetFriendRelationship mixins EMsg {}
  declare class EMsg__AMGetFriendRelationshipResponse mixins EMsg {}
  declare class EMsg__AMServiceModulesCache mixins EMsg {}
  declare class EMsg__AMServiceModulesCall mixins EMsg {}
  declare class EMsg__AMServiceModulesCallResponse mixins EMsg {}
  declare class EMsg__AMGetCaptchaDataForIP mixins EMsg {}
  declare class EMsg__AMGetCaptchaDataForIPResponse mixins EMsg {}
  declare class EMsg__AMValidateCaptchaDataForIP mixins EMsg {}
  declare class EMsg__AMValidateCaptchaDataForIPResponse mixins EMsg {}
  declare class EMsg__AMTrackFailedAuthByIP mixins EMsg {}
  declare class EMsg__AMGetCaptchaDataByGID mixins EMsg {}
  declare class EMsg__AMGetCaptchaDataByGIDResponse mixins EMsg {}
  declare class EMsg__AMGetLobbyList mixins EMsg {}
  declare class EMsg__AMGetLobbyListResponse mixins EMsg {}
  declare class EMsg__AMGetLobbyMetadata mixins EMsg {}
  declare class EMsg__AMGetLobbyMetadataResponse mixins EMsg {}
  declare class EMsg__CommunityAddFriendNews mixins EMsg {}
  declare class EMsg__AMAddClanNews mixins EMsg {}
  declare class EMsg__AMWriteNews mixins EMsg {}
  declare class EMsg__AMFindClanUser mixins EMsg {}
  declare class EMsg__AMFindClanUserResponse mixins EMsg {}
  declare class EMsg__AMBanFromChat mixins EMsg {}
  declare class EMsg__AMGetUserHistoryResponse mixins EMsg {}
  declare class EMsg__AMGetUserNewsSubscriptions mixins EMsg {}
  declare class EMsg__AMGetUserNewsSubscriptionsResponse mixins EMsg {}
  declare class EMsg__AMSetUserNewsSubscriptions mixins EMsg {}
  declare class EMsg__AMGetUserNews mixins EMsg {}
  declare class EMsg__AMGetUserNewsResponse mixins EMsg {}
  declare class EMsg__AMSendQueuedEmails mixins EMsg {}
  declare class EMsg__AMSetLicenseFlags mixins EMsg {}
  declare class EMsg__AMGetUserHistory mixins EMsg {}
  declare class EMsg__CommunityDeleteUserNews mixins EMsg {}
  declare class EMsg__AMAllowUserFilesRequest mixins EMsg {}
  declare class EMsg__AMAllowUserFilesResponse mixins EMsg {}
  declare class EMsg__AMGetAccountStatus mixins EMsg {}
  declare class EMsg__AMGetAccountStatusResponse mixins EMsg {}
  declare class EMsg__AMEditBanReason mixins EMsg {}
  declare class EMsg__AMCheckClanMembershipResponse mixins EMsg {}
  declare class EMsg__AMProbeClanMembershipList mixins EMsg {}
  declare class EMsg__AMProbeClanMembershipListResponse mixins EMsg {}
  declare class EMsg__AMGetFriendsLobbies mixins EMsg {}
  declare class EMsg__AMGetFriendsLobbiesResponse mixins EMsg {}
  declare class EMsg__AMGetUserFriendNewsResponse mixins EMsg {}
  declare class EMsg__CommunityGetUserFriendNews mixins EMsg {}
  declare class EMsg__AMGetUserClansNewsResponse mixins EMsg {}
  declare class EMsg__AMGetUserClansNews mixins EMsg {}
  declare class EMsg__AMStoreInitPurchase mixins EMsg {}
  declare class EMsg__AMStoreInitPurchaseResponse mixins EMsg {}
  declare class EMsg__AMStoreGetFinalPrice mixins EMsg {}
  declare class EMsg__AMStoreGetFinalPriceResponse mixins EMsg {}
  declare class EMsg__AMStoreCompletePurchase mixins EMsg {}
  declare class EMsg__AMStoreCancelPurchase mixins EMsg {}
  declare class EMsg__AMStorePurchaseResponse mixins EMsg {}
  declare class EMsg__AMCreateAccountRecordInSteam3 mixins EMsg {}
  declare class EMsg__AMGetPreviousCBAccount mixins EMsg {}
  declare class EMsg__AMGetPreviousCBAccountResponse mixins EMsg {}
  declare class EMsg__AMUpdateBillingAddress mixins EMsg {}
  declare class EMsg__AMUpdateBillingAddressResponse mixins EMsg {}
  declare class EMsg__AMGetBillingAddress mixins EMsg {}
  declare class EMsg__AMGetBillingAddressResponse mixins EMsg {}
  declare class EMsg__AMGetUserLicenseHistory mixins EMsg {}
  declare class EMsg__AMGetUserLicenseHistoryResponse mixins EMsg {}
  declare class EMsg__AMSupportChangePassword mixins EMsg {}
  declare class EMsg__AMSupportChangeEmail mixins EMsg {}
  declare class EMsg__AMSupportChangeSecretQA mixins EMsg {}
  declare class EMsg__AMResetUserVerificationGSByIP mixins EMsg {}
  declare class EMsg__AMUpdateGSPlayStats mixins EMsg {}
  declare class EMsg__AMSupportEnableOrDisable mixins EMsg {}
  declare class EMsg__AMGetComments mixins EMsg {}
  declare class EMsg__AMGetCommentsResponse mixins EMsg {}
  declare class EMsg__AMAddComment mixins EMsg {}
  declare class EMsg__AMAddCommentResponse mixins EMsg {}
  declare class EMsg__AMDeleteComment mixins EMsg {}
  declare class EMsg__AMDeleteCommentResponse mixins EMsg {}
  declare class EMsg__AMGetPurchaseStatus mixins EMsg {}
  declare class EMsg__AMSupportIsAccountEnabled mixins EMsg {}
  declare class EMsg__AMSupportIsAccountEnabledResponse mixins EMsg {}
  declare class EMsg__AMGetUserStats mixins EMsg {}
  declare class EMsg__AMSupportKickSession mixins EMsg {}
  declare class EMsg__AMGSSearch mixins EMsg {}
  declare class EMsg__MarketingMessageUpdate mixins EMsg {}
  declare class EMsg__AMRouteFriendMsg mixins EMsg {}
  declare class EMsg__AMTicketAuthRequestOrResponse mixins EMsg {}
  declare class EMsg__AMVerifyDepotManagementRights mixins EMsg {}
  declare class EMsg__AMVerifyDepotManagementRightsResponse mixins EMsg {}
  declare class EMsg__AMAddFreeLicense mixins EMsg {}
  declare class EMsg__AMGetUserFriendsMinutesPlayed mixins EMsg {}
  declare class EMsg__AMGetUserFriendsMinutesPlayedResponse mixins EMsg {}
  declare class EMsg__AMGetUserMinutesPlayed mixins EMsg {}
  declare class EMsg__AMGetUserMinutesPlayedResponse mixins EMsg {}
  declare class EMsg__AMValidateEmailLink mixins EMsg {}
  declare class EMsg__AMValidateEmailLinkResponse mixins EMsg {}
  declare class EMsg__AMAddUsersToMarketingTreatment mixins EMsg {}
  declare class EMsg__AMStoreUserStats mixins EMsg {}
  declare class EMsg__AMGetUserGameplayInfo mixins EMsg {}
  declare class EMsg__AMGetUserGameplayInfoResponse mixins EMsg {}
  declare class EMsg__AMGetCardList mixins EMsg {}
  declare class EMsg__AMGetCardListResponse mixins EMsg {}
  declare class EMsg__AMDeleteStoredCard mixins EMsg {}
  declare class EMsg__AMRevokeLegacyGameKeys mixins EMsg {}
  declare class EMsg__AMGetWalletDetails mixins EMsg {}
  declare class EMsg__AMGetWalletDetailsResponse mixins EMsg {}
  declare class EMsg__AMDeleteStoredPaymentInfo mixins EMsg {}
  declare class EMsg__AMGetStoredPaymentSummary mixins EMsg {}
  declare class EMsg__AMGetStoredPaymentSummaryResponse mixins EMsg {}
  declare class EMsg__AMGetWalletConversionRate mixins EMsg {}
  declare class EMsg__AMGetWalletConversionRateResponse mixins EMsg {}
  declare class EMsg__AMConvertWallet mixins EMsg {}
  declare class EMsg__AMConvertWalletResponse mixins EMsg {}
  declare class EMsg__AMRelayGetFriendsWhoPlayGame mixins EMsg {}
  declare class EMsg__AMRelayGetFriendsWhoPlayGameResponse mixins EMsg {}
  declare class EMsg__AMSetPreApproval mixins EMsg {}
  declare class EMsg__AMSetPreApprovalResponse mixins EMsg {}
  declare class EMsg__AMMarketingTreatmentUpdate mixins EMsg {}
  declare class EMsg__AMCreateRefund mixins EMsg {}
  declare class EMsg__AMCreateRefundResponse mixins EMsg {}
  declare class EMsg__AMCreateChargeback mixins EMsg {}
  declare class EMsg__AMCreateChargebackResponse mixins EMsg {}
  declare class EMsg__AMCreateDispute mixins EMsg {}
  declare class EMsg__AMCreateDisputeResponse mixins EMsg {}
  declare class EMsg__AMClearDispute mixins EMsg {}
  declare class EMsg__AMClearDisputeResponse mixins EMsg {}
  declare class EMsg__AMPlayerNicknameList mixins EMsg {}
  declare class EMsg__AMPlayerNicknameListResponse mixins EMsg {}
  declare class EMsg__AMSetDRMTestConfig mixins EMsg {}
  declare class EMsg__AMGetUserCurrentGameInfo mixins EMsg {}
  declare class EMsg__AMGetUserCurrentGameInfoResponse mixins EMsg {}
  declare class EMsg__AMGetGSPlayerList mixins EMsg {}
  declare class EMsg__AMGetGSPlayerListResponse mixins EMsg {}
  declare class EMsg__AMUpdatePersonaStateCache mixins EMsg {}
  declare class EMsg__AMGetGameMembers mixins EMsg {}
  declare class EMsg__AMGetGameMembersResponse mixins EMsg {}
  declare class EMsg__AMGetSteamIDForMicroTxn mixins EMsg {}
  declare class EMsg__AMGetSteamIDForMicroTxnResponse mixins EMsg {}
  declare class EMsg__AMAddPublisherUser mixins EMsg {}
  declare class EMsg__AMRemovePublisherUser mixins EMsg {}
  declare class EMsg__AMGetUserLicenseList mixins EMsg {}
  declare class EMsg__AMGetUserLicenseListResponse mixins EMsg {}
  declare class EMsg__AMReloadGameGroupPolicy mixins EMsg {}
  declare class EMsg__AMAddFreeLicenseResponse mixins EMsg {}
  declare class EMsg__AMVACStatusUpdate mixins EMsg {}
  declare class EMsg__AMGetAccountDetails mixins EMsg {}
  declare class EMsg__AMGetAccountDetailsResponse mixins EMsg {}
  declare class EMsg__AMGetPlayerLinkDetails mixins EMsg {}
  declare class EMsg__AMGetPlayerLinkDetailsResponse mixins EMsg {}
  declare class EMsg__AMSubscribeToPersonaFeed mixins EMsg {}
  declare class EMsg__AMGetUserVacBanList mixins EMsg {}
  declare class EMsg__AMGetUserVacBanListResponse mixins EMsg {}
  declare class EMsg__AMGetAccountFlagsForWGSpoofing mixins EMsg {}
  declare class EMsg__AMGetAccountFlagsForWGSpoofingResponse mixins EMsg {}
  declare class EMsg__AMGetFriendsWishlistInfo mixins EMsg {}
  declare class EMsg__AMGetFriendsWishlistInfoResponse mixins EMsg {}
  declare class EMsg__AMGetClanOfficers mixins EMsg {}
  declare class EMsg__AMGetClanOfficersResponse mixins EMsg {}
  declare class EMsg__AMNameChange mixins EMsg {}
  declare class EMsg__AMGetNameHistory mixins EMsg {}
  declare class EMsg__AMGetNameHistoryResponse mixins EMsg {}
  declare class EMsg__AMUpdateProviderStatus mixins EMsg {}
  declare class EMsg__AMClearPersonaMetadataBlob mixins EMsg {}
  declare class EMsg__AMSupportRemoveAccountSecurity mixins EMsg {}
  declare class EMsg__AMIsAccountInCaptchaGracePeriod mixins EMsg {}
  declare class EMsg__AMIsAccountInCaptchaGracePeriodResponse mixins EMsg {}
  declare class EMsg__AMAccountPS3Unlink mixins EMsg {}
  declare class EMsg__AMAccountPS3UnlinkResponse mixins EMsg {}
  declare class EMsg__AMStoreUserStatsResponse mixins EMsg {}
  declare class EMsg__AMGetAccountPSNInfo mixins EMsg {}
  declare class EMsg__AMGetAccountPSNInfoResponse mixins EMsg {}
  declare class EMsg__AMAuthenticatedPlayerList mixins EMsg {}
  declare class EMsg__AMGetUserGifts mixins EMsg {}
  declare class EMsg__AMGetUserGiftsResponse mixins EMsg {}
  declare class EMsg__AMTransferLockedGifts mixins EMsg {}
  declare class EMsg__AMTransferLockedGiftsResponse mixins EMsg {}
  declare class EMsg__AMPlayerHostedOnGameServer mixins EMsg {}
  declare class EMsg__AMGetAccountBanInfo mixins EMsg {}
  declare class EMsg__AMGetAccountBanInfoResponse mixins EMsg {}
  declare class EMsg__AMRecordBanEnforcement mixins EMsg {}
  declare class EMsg__AMRollbackGiftTransfer mixins EMsg {}
  declare class EMsg__AMRollbackGiftTransferResponse mixins EMsg {}
  declare class EMsg__AMHandlePendingTransaction mixins EMsg {}
  declare class EMsg__AMRequestClanDetails mixins EMsg {}
  declare class EMsg__AMDeleteStoredPaypalAgreement mixins EMsg {}
  declare class EMsg__AMGameServerUpdate mixins EMsg {}
  declare class EMsg__AMGameServerRemove mixins EMsg {}
  declare class EMsg__AMGetPaypalAgreements mixins EMsg {}
  declare class EMsg__AMGetPaypalAgreementsResponse mixins EMsg {}
  declare class EMsg__AMGameServerPlayerCompatibilityCheck mixins EMsg {}
  declare class EMsg__AMGameServerPlayerCompatibilityCheckResponse
    mixins EMsg {}
  declare class EMsg__AMRenewLicense mixins EMsg {}
  declare class EMsg__AMGetAccountCommunityBanInfo mixins EMsg {}
  declare class EMsg__AMGetAccountCommunityBanInfoResponse mixins EMsg {}
  declare class EMsg__AMGameServerAccountChangePassword mixins EMsg {}
  declare class EMsg__AMGameServerAccountDeleteAccount mixins EMsg {}
  declare class EMsg__AMRenewAgreement mixins EMsg {}
  declare class EMsg__AMSendEmail mixins EMsg {}
  declare class EMsg__AMXsollaPayment mixins EMsg {}
  declare class EMsg__AMXsollaPaymentResponse mixins EMsg {}
  declare class EMsg__AMAcctAllowedToPurchase mixins EMsg {}
  declare class EMsg__AMAcctAllowedToPurchaseResponse mixins EMsg {}
  declare class EMsg__AMSwapKioskDeposit mixins EMsg {}
  declare class EMsg__AMSwapKioskDepositResponse mixins EMsg {}
  declare class EMsg__AMSetUserGiftUnowned mixins EMsg {}
  declare class EMsg__AMSetUserGiftUnownedResponse mixins EMsg {}
  declare class EMsg__AMClaimUnownedUserGift mixins EMsg {}
  declare class EMsg__AMClaimUnownedUserGiftResponse mixins EMsg {}
  declare class EMsg__AMSetClanName mixins EMsg {}
  declare class EMsg__AMSetClanNameResponse mixins EMsg {}
  declare class EMsg__AMGrantCoupon mixins EMsg {}
  declare class EMsg__AMGrantCouponResponse mixins EMsg {}
  declare class EMsg__AMIsPackageRestrictedInUserCountry mixins EMsg {}
  declare class EMsg__AMIsPackageRestrictedInUserCountryResponse mixins EMsg {}
  declare class EMsg__AMHandlePendingTransactionResponse mixins EMsg {}
  declare class EMsg__AMGrantGuestPasses2 mixins EMsg {}
  declare class EMsg__AMGrantGuestPasses2Response mixins EMsg {}
  declare class EMsg__AMSessionQuery mixins EMsg {}
  declare class EMsg__AMSessionQueryResponse mixins EMsg {}
  declare class EMsg__AMGetPlayerBanDetails mixins EMsg {}
  declare class EMsg__AMGetPlayerBanDetailsResponse mixins EMsg {}
  declare class EMsg__AMFinalizePurchase mixins EMsg {}
  declare class EMsg__AMFinalizePurchaseResponse mixins EMsg {}
  declare class EMsg__AMPersonaChangeResponse mixins EMsg {}
  declare class EMsg__AMGetClanDetailsForForumCreation mixins EMsg {}
  declare class EMsg__AMGetClanDetailsForForumCreationResponse mixins EMsg {}
  declare class EMsg__AMGetPendingNotificationCount mixins EMsg {}
  declare class EMsg__AMGetPendingNotificationCountResponse mixins EMsg {}
  declare class EMsg__AMPasswordHashUpgrade mixins EMsg {}
  declare class EMsg__AMMoPayPayment mixins EMsg {}
  declare class EMsg__AMMoPayPaymentResponse mixins EMsg {}
  declare class EMsg__AMBoaCompraPayment mixins EMsg {}
  declare class EMsg__AMBoaCompraPaymentResponse mixins EMsg {}
  declare class EMsg__AMExpireCaptchaByGID mixins EMsg {}
  declare class EMsg__AMCompleteExternalPurchase mixins EMsg {}
  declare class EMsg__AMCompleteExternalPurchaseResponse mixins EMsg {}
  declare class EMsg__AMResolveNegativeWalletCredits mixins EMsg {}
  declare class EMsg__AMResolveNegativeWalletCreditsResponse mixins EMsg {}
  declare class EMsg__AMPayelpPayment mixins EMsg {}
  declare class EMsg__AMPayelpPaymentResponse mixins EMsg {}
  declare class EMsg__AMPlayerGetClanBasicDetails mixins EMsg {}
  declare class EMsg__AMPlayerGetClanBasicDetailsResponse mixins EMsg {}
  declare class EMsg__AMMOLPayment mixins EMsg {}
  declare class EMsg__AMMOLPaymentResponse mixins EMsg {}
  declare class EMsg__GetUserIPCountry mixins EMsg {}
  declare class EMsg__GetUserIPCountryResponse mixins EMsg {}
  declare class EMsg__NotificationOfSuspiciousActivity mixins EMsg {}
  declare class EMsg__AMDegicaPayment mixins EMsg {}
  declare class EMsg__AMDegicaPaymentResponse mixins EMsg {}
  declare class EMsg__AMEClubPayment mixins EMsg {}
  declare class EMsg__AMEClubPaymentResponse mixins EMsg {}
  declare class EMsg__AMPayPalPaymentsHubPayment mixins EMsg {}
  declare class EMsg__AMPayPalPaymentsHubPaymentResponse mixins EMsg {}
  declare class EMsg__AMTwoFactorRecoverAuthenticatorRequest mixins EMsg {}
  declare class EMsg__AMTwoFactorRecoverAuthenticatorResponse mixins EMsg {}
  declare class EMsg__AMSmart2PayPayment mixins EMsg {}
  declare class EMsg__AMSmart2PayPaymentResponse mixins EMsg {}
  declare class EMsg__AMValidatePasswordResetCodeAndSendSmsRequest
    mixins EMsg {}
  declare class EMsg__AMValidatePasswordResetCodeAndSendSmsResponse
    mixins EMsg {}
  declare class EMsg__AMGetAccountResetDetailsRequest mixins EMsg {}
  declare class EMsg__AMGetAccountResetDetailsResponse mixins EMsg {}
  declare class EMsg__AMBitPayPayment mixins EMsg {}
  declare class EMsg__AMBitPayPaymentResponse mixins EMsg {}
  declare class EMsg__AMSendAccountInfoUpdate mixins EMsg {}
  declare class EMsg__BasePSRange mixins EMsg {}
  declare class EMsg__PSCreateShoppingCart mixins EMsg {}
  declare class EMsg__PSCreateShoppingCartResponse mixins EMsg {}
  declare class EMsg__PSIsValidShoppingCart mixins EMsg {}
  declare class EMsg__PSIsValidShoppingCartResponse mixins EMsg {}
  declare class EMsg__PSAddPackageToShoppingCart mixins EMsg {}
  declare class EMsg__PSAddPackageToShoppingCartResponse mixins EMsg {}
  declare class EMsg__PSRemoveLineItemFromShoppingCart mixins EMsg {}
  declare class EMsg__PSRemoveLineItemFromShoppingCartResponse mixins EMsg {}
  declare class EMsg__PSGetShoppingCartContents mixins EMsg {}
  declare class EMsg__PSGetShoppingCartContentsResponse mixins EMsg {}
  declare class EMsg__PSAddWalletCreditToShoppingCart mixins EMsg {}
  declare class EMsg__PSAddWalletCreditToShoppingCartResponse mixins EMsg {}
  declare class EMsg__BaseUFSRange mixins EMsg {}
  declare class EMsg__ClientUFSUploadFileRequest mixins EMsg {}
  declare class EMsg__ClientUFSUploadFileResponse mixins EMsg {}
  declare class EMsg__ClientUFSUploadFileChunk mixins EMsg {}
  declare class EMsg__ClientUFSUploadFileFinished mixins EMsg {}
  declare class EMsg__ClientUFSGetFileListForApp mixins EMsg {}
  declare class EMsg__ClientUFSGetFileListForAppResponse mixins EMsg {}
  declare class EMsg__ClientUFSDownloadRequest mixins EMsg {}
  declare class EMsg__ClientUFSDownloadResponse mixins EMsg {}
  declare class EMsg__ClientUFSDownloadChunk mixins EMsg {}
  declare class EMsg__ClientUFSLoginRequest mixins EMsg {}
  declare class EMsg__ClientUFSLoginResponse mixins EMsg {}
  declare class EMsg__UFSReloadPartitionInfo mixins EMsg {}
  declare class EMsg__ClientUFSTransferHeartbeat mixins EMsg {}
  declare class EMsg__UFSSynchronizeFile mixins EMsg {}
  declare class EMsg__UFSSynchronizeFileResponse mixins EMsg {}
  declare class EMsg__ClientUFSDeleteFileRequest mixins EMsg {}
  declare class EMsg__ClientUFSDeleteFileResponse mixins EMsg {}
  declare class EMsg__UFSDownloadRequest mixins EMsg {}
  declare class EMsg__UFSDownloadResponse mixins EMsg {}
  declare class EMsg__UFSDownloadChunk mixins EMsg {}
  declare class EMsg__ClientUFSGetUGCDetails mixins EMsg {}
  declare class EMsg__ClientUFSGetUGCDetailsResponse mixins EMsg {}
  declare class EMsg__UFSUpdateFileFlags mixins EMsg {}
  declare class EMsg__UFSUpdateFileFlagsResponse mixins EMsg {}
  declare class EMsg__ClientUFSGetSingleFileInfo mixins EMsg {}
  declare class EMsg__ClientUFSGetSingleFileInfoResponse mixins EMsg {}
  declare class EMsg__ClientUFSShareFile mixins EMsg {}
  declare class EMsg__ClientUFSShareFileResponse mixins EMsg {}
  declare class EMsg__UFSReloadAccount mixins EMsg {}
  declare class EMsg__UFSReloadAccountResponse mixins EMsg {}
  declare class EMsg__UFSUpdateRecordBatched mixins EMsg {}
  declare class EMsg__UFSUpdateRecordBatchedResponse mixins EMsg {}
  declare class EMsg__UFSMigrateFile mixins EMsg {}
  declare class EMsg__UFSMigrateFileResponse mixins EMsg {}
  declare class EMsg__UFSGetUGCURLs mixins EMsg {}
  declare class EMsg__UFSGetUGCURLsResponse mixins EMsg {}
  declare class EMsg__UFSHttpUploadFileFinishRequest mixins EMsg {}
  declare class EMsg__UFSHttpUploadFileFinishResponse mixins EMsg {}
  declare class EMsg__UFSDownloadStartRequest mixins EMsg {}
  declare class EMsg__UFSDownloadStartResponse mixins EMsg {}
  declare class EMsg__UFSDownloadChunkRequest mixins EMsg {}
  declare class EMsg__UFSDownloadChunkResponse mixins EMsg {}
  declare class EMsg__UFSDownloadFinishRequest mixins EMsg {}
  declare class EMsg__UFSDownloadFinishResponse mixins EMsg {}
  declare class EMsg__UFSFlushURLCache mixins EMsg {}
  declare class EMsg__UFSUploadCommit mixins EMsg {}
  declare class EMsg__UFSUploadCommitResponse mixins EMsg {}
  declare class EMsg__UFSMigrateFileAppID mixins EMsg {}
  declare class EMsg__UFSMigrateFileAppIDResponse mixins EMsg {}
  declare class EMsg__BaseClient2 mixins EMsg {}
  declare class EMsg__ClientRequestForgottenPasswordEmail mixins EMsg {}
  declare class EMsg__ClientRequestForgottenPasswordEmailResponse mixins EMsg {}
  declare class EMsg__ClientCreateAccountResponse mixins EMsg {}
  declare class EMsg__ClientResetForgottenPassword mixins EMsg {}
  declare class EMsg__ClientResetForgottenPasswordResponse mixins EMsg {}
  declare class EMsg__ClientCreateAccount2 mixins EMsg {}
  declare class EMsg__ClientInformOfResetForgottenPassword mixins EMsg {}
  declare class EMsg__ClientInformOfResetForgottenPasswordResponse
    mixins EMsg {}
  declare class EMsg__ClientAnonUserLogOn_Deprecated mixins EMsg {}
  declare class EMsg__ClientGamesPlayedWithDataBlob mixins EMsg {}
  declare class EMsg__ClientUpdateUserGameInfo mixins EMsg {}
  declare class EMsg__ClientFileToDownload mixins EMsg {}
  declare class EMsg__ClientFileToDownloadResponse mixins EMsg {}
  declare class EMsg__ClientLBSSetScore mixins EMsg {}
  declare class EMsg__ClientLBSSetScoreResponse mixins EMsg {}
  declare class EMsg__ClientLBSFindOrCreateLB mixins EMsg {}
  declare class EMsg__ClientLBSFindOrCreateLBResponse mixins EMsg {}
  declare class EMsg__ClientLBSGetLBEntries mixins EMsg {}
  declare class EMsg__ClientLBSGetLBEntriesResponse mixins EMsg {}
  declare class EMsg__ClientMarketingMessageUpdate mixins EMsg {}
  declare class EMsg__ClientChatDeclined mixins EMsg {}
  declare class EMsg__ClientFriendMsgIncoming mixins EMsg {}
  declare class EMsg__ClientAuthList_Deprecated mixins EMsg {}
  declare class EMsg__ClientTicketAuthComplete mixins EMsg {}
  declare class EMsg__ClientIsLimitedAccount mixins EMsg {}
  declare class EMsg__ClientRequestAuthList mixins EMsg {}
  declare class EMsg__ClientAuthList mixins EMsg {}
  declare class EMsg__ClientStat mixins EMsg {}
  declare class EMsg__ClientP2PConnectionInfo mixins EMsg {}
  declare class EMsg__ClientP2PConnectionFailInfo mixins EMsg {}
  declare class EMsg__ClientGetNumberOfCurrentPlayers mixins EMsg {}
  declare class EMsg__ClientGetNumberOfCurrentPlayersResponse mixins EMsg {}
  declare class EMsg__ClientGetDepotDecryptionKey mixins EMsg {}
  declare class EMsg__ClientGetDepotDecryptionKeyResponse mixins EMsg {}
  declare class EMsg__GSPerformHardwareSurvey mixins EMsg {}
  declare class EMsg__ClientGetAppBetaPasswords mixins EMsg {}
  declare class EMsg__ClientGetAppBetaPasswordsResponse mixins EMsg {}
  declare class EMsg__ClientEnableTestLicense mixins EMsg {}
  declare class EMsg__ClientEnableTestLicenseResponse mixins EMsg {}
  declare class EMsg__ClientDisableTestLicense mixins EMsg {}
  declare class EMsg__ClientDisableTestLicenseResponse mixins EMsg {}
  declare class EMsg__ClientRequestValidationMail mixins EMsg {}
  declare class EMsg__ClientRequestValidationMailResponse mixins EMsg {}
  declare class EMsg__ClientCheckAppBetaPassword mixins EMsg {}
  declare class EMsg__ClientCheckAppBetaPasswordResponse mixins EMsg {}
  declare class EMsg__ClientToGC mixins EMsg {}
  declare class EMsg__ClientFromGC mixins EMsg {}
  declare class EMsg__ClientRequestChangeMail mixins EMsg {}
  declare class EMsg__ClientRequestChangeMailResponse mixins EMsg {}
  declare class EMsg__ClientEmailAddrInfo mixins EMsg {}
  declare class EMsg__ClientPasswordChange3 mixins EMsg {}
  declare class EMsg__ClientEmailChange3 mixins EMsg {}
  declare class EMsg__ClientPersonalQAChange3 mixins EMsg {}
  declare class EMsg__ClientResetForgottenPassword3 mixins EMsg {}
  declare class EMsg__ClientRequestForgottenPasswordEmail3 mixins EMsg {}
  declare class EMsg__ClientCreateAccount3 mixins EMsg {}
  declare class EMsg__ClientNewLoginKey mixins EMsg {}
  declare class EMsg__ClientNewLoginKeyAccepted mixins EMsg {}
  declare class EMsg__ClientLogOnWithHash_Deprecated mixins EMsg {}
  declare class EMsg__ClientStoreUserStats2 mixins EMsg {}
  declare class EMsg__ClientStatsUpdated mixins EMsg {}
  declare class EMsg__ClientActivateOEMLicense mixins EMsg {}
  declare class EMsg__ClientRegisterOEMMachine mixins EMsg {}
  declare class EMsg__ClientRegisterOEMMachineResponse mixins EMsg {}
  declare class EMsg__ClientRequestedClientStats mixins EMsg {}
  declare class EMsg__ClientStat2Int32 mixins EMsg {}
  declare class EMsg__ClientStat2 mixins EMsg {}
  declare class EMsg__ClientVerifyPassword mixins EMsg {}
  declare class EMsg__ClientVerifyPasswordResponse mixins EMsg {}
  declare class EMsg__ClientDRMDownloadRequest mixins EMsg {}
  declare class EMsg__ClientDRMDownloadResponse mixins EMsg {}
  declare class EMsg__ClientDRMFinalResult mixins EMsg {}
  declare class EMsg__ClientGetFriendsWhoPlayGame mixins EMsg {}
  declare class EMsg__ClientGetFriendsWhoPlayGameResponse mixins EMsg {}
  declare class EMsg__ClientOGSBeginSession mixins EMsg {}
  declare class EMsg__ClientOGSBeginSessionResponse mixins EMsg {}
  declare class EMsg__ClientOGSEndSession mixins EMsg {}
  declare class EMsg__ClientOGSEndSessionResponse mixins EMsg {}
  declare class EMsg__ClientOGSWriteRow mixins EMsg {}
  declare class EMsg__ClientDRMTest mixins EMsg {}
  declare class EMsg__ClientDRMTestResult mixins EMsg {}
  declare class EMsg__ClientServerUnavailable mixins EMsg {}
  declare class EMsg__ClientServersAvailable mixins EMsg {}
  declare class EMsg__ClientRegisterAuthTicketWithCM mixins EMsg {}
  declare class EMsg__ClientGCMsgFailed mixins EMsg {}
  declare class EMsg__ClientMicroTxnAuthRequest mixins EMsg {}
  declare class EMsg__ClientMicroTxnAuthorize mixins EMsg {}
  declare class EMsg__ClientMicroTxnAuthorizeResponse mixins EMsg {}
  declare class EMsg__ClientAppMinutesPlayedData mixins EMsg {}
  declare class EMsg__ClientGetMicroTxnInfo mixins EMsg {}
  declare class EMsg__ClientGetMicroTxnInfoResponse mixins EMsg {}
  declare class EMsg__ClientMarketingMessageUpdate2 mixins EMsg {}
  declare class EMsg__ClientDeregisterWithServer mixins EMsg {}
  declare class EMsg__ClientSubscribeToPersonaFeed mixins EMsg {}
  declare class EMsg__ClientLogon mixins EMsg {}
  declare class EMsg__ClientGetClientDetails mixins EMsg {}
  declare class EMsg__ClientGetClientDetailsResponse mixins EMsg {}
  declare class EMsg__ClientReportOverlayDetourFailure mixins EMsg {}
  declare class EMsg__ClientGetClientAppList mixins EMsg {}
  declare class EMsg__ClientGetClientAppListResponse mixins EMsg {}
  declare class EMsg__ClientInstallClientApp mixins EMsg {}
  declare class EMsg__ClientInstallClientAppResponse mixins EMsg {}
  declare class EMsg__ClientUninstallClientApp mixins EMsg {}
  declare class EMsg__ClientUninstallClientAppResponse mixins EMsg {}
  declare class EMsg__ClientSetClientAppUpdateState mixins EMsg {}
  declare class EMsg__ClientSetClientAppUpdateStateResponse mixins EMsg {}
  declare class EMsg__ClientRequestEncryptedAppTicket mixins EMsg {}
  declare class EMsg__ClientRequestEncryptedAppTicketResponse mixins EMsg {}
  declare class EMsg__ClientWalletInfoUpdate mixins EMsg {}
  declare class EMsg__ClientLBSSetUGC mixins EMsg {}
  declare class EMsg__ClientLBSSetUGCResponse mixins EMsg {}
  declare class EMsg__ClientAMGetClanOfficers mixins EMsg {}
  declare class EMsg__ClientAMGetClanOfficersResponse mixins EMsg {}
  declare class EMsg__ClientCheckFileSignature mixins EMsg {}
  declare class EMsg__ClientCheckFileSignatureResponse mixins EMsg {}
  declare class EMsg__ClientFriendProfileInfo mixins EMsg {}
  declare class EMsg__ClientFriendProfileInfoResponse mixins EMsg {}
  declare class EMsg__ClientUpdateMachineAuth mixins EMsg {}
  declare class EMsg__ClientUpdateMachineAuthResponse mixins EMsg {}
  declare class EMsg__ClientReadMachineAuth mixins EMsg {}
  declare class EMsg__ClientReadMachineAuthResponse mixins EMsg {}
  declare class EMsg__ClientRequestMachineAuth mixins EMsg {}
  declare class EMsg__ClientRequestMachineAuthResponse mixins EMsg {}
  declare class EMsg__ClientScreenshotsChanged mixins EMsg {}
  declare class EMsg__ClientEmailChange4 mixins EMsg {}
  declare class EMsg__ClientEmailChangeResponse4 mixins EMsg {}
  declare class EMsg__ClientGetCDNAuthToken mixins EMsg {}
  declare class EMsg__ClientGetCDNAuthTokenResponse mixins EMsg {}
  declare class EMsg__ClientDownloadRateStatistics mixins EMsg {}
  declare class EMsg__ClientRequestAccountData mixins EMsg {}
  declare class EMsg__ClientRequestAccountDataResponse mixins EMsg {}
  declare class EMsg__ClientResetForgottenPassword4 mixins EMsg {}
  declare class EMsg__ClientHideFriend mixins EMsg {}
  declare class EMsg__ClientFriendsGroupsList mixins EMsg {}
  declare class EMsg__ClientGetClanActivityCounts mixins EMsg {}
  declare class EMsg__ClientGetClanActivityCountsResponse mixins EMsg {}
  declare class EMsg__ClientOGSReportString mixins EMsg {}
  declare class EMsg__ClientOGSReportBug mixins EMsg {}
  declare class EMsg__ClientSentLogs mixins EMsg {}
  declare class EMsg__ClientLogonGameServer mixins EMsg {}
  declare class EMsg__AMClientCreateFriendsGroup mixins EMsg {}
  declare class EMsg__AMClientCreateFriendsGroupResponse mixins EMsg {}
  declare class EMsg__AMClientDeleteFriendsGroup mixins EMsg {}
  declare class EMsg__AMClientDeleteFriendsGroupResponse mixins EMsg {}
  declare class EMsg__AMClientRenameFriendsGroup mixins EMsg {}
  declare class EMsg__AMClientRenameFriendsGroupResponse mixins EMsg {}
  declare class EMsg__AMClientAddFriendToGroup mixins EMsg {}
  declare class EMsg__AMClientAddFriendToGroupResponse mixins EMsg {}
  declare class EMsg__AMClientRemoveFriendFromGroup mixins EMsg {}
  declare class EMsg__AMClientRemoveFriendFromGroupResponse mixins EMsg {}
  declare class EMsg__ClientAMGetPersonaNameHistory mixins EMsg {}
  declare class EMsg__ClientAMGetPersonaNameHistoryResponse mixins EMsg {}
  declare class EMsg__ClientRequestFreeLicense mixins EMsg {}
  declare class EMsg__ClientRequestFreeLicenseResponse mixins EMsg {}
  declare class EMsg__ClientDRMDownloadRequestWithCrashData mixins EMsg {}
  declare class EMsg__ClientAuthListAck mixins EMsg {}
  declare class EMsg__ClientItemAnnouncements mixins EMsg {}
  declare class EMsg__ClientRequestItemAnnouncements mixins EMsg {}
  declare class EMsg__ClientFriendMsgEchoToSender mixins EMsg {}
  declare class EMsg__ClientChangeSteamGuardOptions mixins EMsg {}
  declare class EMsg__ClientChangeSteamGuardOptionsResponse mixins EMsg {}
  declare class EMsg__ClientOGSGameServerPingSample mixins EMsg {}
  declare class EMsg__ClientCommentNotifications mixins EMsg {}
  declare class EMsg__ClientRequestCommentNotifications mixins EMsg {}
  declare class EMsg__ClientPersonaChangeResponse mixins EMsg {}
  declare class EMsg__ClientRequestWebAPIAuthenticateUserNonce mixins EMsg {}
  declare class EMsg__ClientRequestWebAPIAuthenticateUserNonceResponse
    mixins EMsg {}
  declare class EMsg__ClientPlayerNicknameList mixins EMsg {}
  declare class EMsg__AMClientSetPlayerNickname mixins EMsg {}
  declare class EMsg__AMClientSetPlayerNicknameResponse mixins EMsg {}
  declare class EMsg__ClientRequestOAuthTokenForApp mixins EMsg {}
  declare class EMsg__ClientRequestOAuthTokenForAppResponse mixins EMsg {}
  declare class EMsg__ClientCreateAccountProto mixins EMsg {}
  declare class EMsg__ClientCreateAccountProtoResponse mixins EMsg {}
  declare class EMsg__ClientGetNumberOfCurrentPlayersDP mixins EMsg {}
  declare class EMsg__ClientGetNumberOfCurrentPlayersDPResponse mixins EMsg {}
  declare class EMsg__ClientServiceMethod mixins EMsg {}
  declare class EMsg__ClientServiceMethodResponse mixins EMsg {}
  declare class EMsg__ClientFriendUserStatusPublished mixins EMsg {}
  declare class EMsg__ClientCurrentUIMode mixins EMsg {}
  declare class EMsg__ClientVanityURLChangedNotification mixins EMsg {}
  declare class EMsg__ClientUserNotifications mixins EMsg {}
  declare class EMsg__BaseDFS mixins EMsg {}
  declare class EMsg__DFSGetFile mixins EMsg {}
  declare class EMsg__DFSInstallLocalFile mixins EMsg {}
  declare class EMsg__DFSConnection mixins EMsg {}
  declare class EMsg__DFSConnectionReply mixins EMsg {}
  declare class EMsg__ClientDFSAuthenticateRequest mixins EMsg {}
  declare class EMsg__ClientDFSAuthenticateResponse mixins EMsg {}
  declare class EMsg__ClientDFSEndSession mixins EMsg {}
  declare class EMsg__DFSPurgeFile mixins EMsg {}
  declare class EMsg__DFSRouteFile mixins EMsg {}
  declare class EMsg__DFSGetFileFromServer mixins EMsg {}
  declare class EMsg__DFSAcceptedResponse mixins EMsg {}
  declare class EMsg__DFSRequestPingback mixins EMsg {}
  declare class EMsg__DFSRecvTransmitFile mixins EMsg {}
  declare class EMsg__DFSSendTransmitFile mixins EMsg {}
  declare class EMsg__DFSRequestPingback2 mixins EMsg {}
  declare class EMsg__DFSResponsePingback2 mixins EMsg {}
  declare class EMsg__ClientDFSDownloadStatus mixins EMsg {}
  declare class EMsg__DFSStartTransfer mixins EMsg {}
  declare class EMsg__DFSTransferComplete mixins EMsg {}
  declare class EMsg__DFSRouteFileResponse mixins EMsg {}
  declare class EMsg__BaseMDS mixins EMsg {}
  declare class EMsg__ClientMDSLoginRequest mixins EMsg {}
  declare class EMsg__ClientMDSLoginResponse mixins EMsg {}
  declare class EMsg__ClientMDSUploadManifestRequest mixins EMsg {}
  declare class EMsg__ClientMDSUploadManifestResponse mixins EMsg {}
  declare class EMsg__ClientMDSTransmitManifestDataChunk mixins EMsg {}
  declare class EMsg__ClientMDSHeartbeat mixins EMsg {}
  declare class EMsg__ClientMDSUploadDepotChunks mixins EMsg {}
  declare class EMsg__ClientMDSUploadDepotChunksResponse mixins EMsg {}
  declare class EMsg__ClientMDSInitDepotBuildRequest mixins EMsg {}
  declare class EMsg__ClientMDSInitDepotBuildResponse mixins EMsg {}
  declare class EMsg__AMToMDSGetDepotDecryptionKey mixins EMsg {}
  declare class EMsg__MDSToAMGetDepotDecryptionKeyResponse mixins EMsg {}
  declare class EMsg__MDSGetVersionsForDepot mixins EMsg {}
  declare class EMsg__MDSGetVersionsForDepotResponse mixins EMsg {}
  declare class EMsg__MDSSetPublicVersionForDepot mixins EMsg {}
  declare class EMsg__MDSSetPublicVersionForDepotResponse mixins EMsg {}
  declare class EMsg__ClientMDSInitWorkshopBuildRequest mixins EMsg {}
  declare class EMsg__ClientMDSInitWorkshopBuildResponse mixins EMsg {}
  declare class EMsg__ClientMDSGetDepotManifest mixins EMsg {}
  declare class EMsg__ClientMDSGetDepotManifestResponse mixins EMsg {}
  declare class EMsg__ClientMDSGetDepotManifestChunk mixins EMsg {}
  declare class EMsg__ClientMDSUploadRateTest mixins EMsg {}
  declare class EMsg__ClientMDSUploadRateTestResponse mixins EMsg {}
  declare class EMsg__MDSDownloadDepotChunksAck mixins EMsg {}
  declare class EMsg__MDSContentServerStatsBroadcast mixins EMsg {}
  declare class EMsg__MDSContentServerConfigRequest mixins EMsg {}
  declare class EMsg__MDSContentServerConfig mixins EMsg {}
  declare class EMsg__MDSGetDepotManifest mixins EMsg {}
  declare class EMsg__MDSGetDepotManifestResponse mixins EMsg {}
  declare class EMsg__MDSGetDepotManifestChunk mixins EMsg {}
  declare class EMsg__MDSGetDepotChunk mixins EMsg {}
  declare class EMsg__MDSGetDepotChunkResponse mixins EMsg {}
  declare class EMsg__MDSGetDepotChunkChunk mixins EMsg {}
  declare class EMsg__MDSUpdateContentServerConfig mixins EMsg {}
  declare class EMsg__MDSGetServerListForUser mixins EMsg {}
  declare class EMsg__MDSGetServerListForUserResponse mixins EMsg {}
  declare class EMsg__ClientMDSRegisterAppBuild mixins EMsg {}
  declare class EMsg__ClientMDSRegisterAppBuildResponse mixins EMsg {}
  declare class EMsg__ClientMDSSetAppBuildLive mixins EMsg {}
  declare class EMsg__ClientMDSSetAppBuildLiveResponse mixins EMsg {}
  declare class EMsg__ClientMDSGetPrevDepotBuild mixins EMsg {}
  declare class EMsg__ClientMDSGetPrevDepotBuildResponse mixins EMsg {}
  declare class EMsg__MDSToCSFlushChunk mixins EMsg {}
  declare class EMsg__ClientMDSSignInstallScript mixins EMsg {}
  declare class EMsg__ClientMDSSignInstallScriptResponse mixins EMsg {}
  declare class EMsg__MDSMigrateChunk mixins EMsg {}
  declare class EMsg__MDSMigrateChunkResponse mixins EMsg {}
  declare class EMsg__CSBase mixins EMsg {}
  declare class EMsg__CSPing mixins EMsg {}
  declare class EMsg__CSPingResponse mixins EMsg {}
  declare class EMsg__GMSBase mixins EMsg {}
  declare class EMsg__GMSGameServerReplicate mixins EMsg {}
  declare class EMsg__ClientGMSServerQuery mixins EMsg {}
  declare class EMsg__GMSClientServerQueryResponse mixins EMsg {}
  declare class EMsg__AMGMSGameServerUpdate mixins EMsg {}
  declare class EMsg__AMGMSGameServerRemove mixins EMsg {}
  declare class EMsg__GameServerOutOfDate mixins EMsg {}
  declare class EMsg__DeviceAuthorizationBase mixins EMsg {}
  declare class EMsg__ClientAuthorizeLocalDeviceRequest mixins EMsg {}
  declare class EMsg__ClientAuthorizeLocalDevice mixins EMsg {}
  declare class EMsg__ClientAuthorizeLocalDeviceResponse mixins EMsg {}
  declare class EMsg__ClientDeauthorizeDeviceRequest mixins EMsg {}
  declare class EMsg__ClientDeauthorizeDevice mixins EMsg {}
  declare class EMsg__ClientUseLocalDeviceAuthorizations mixins EMsg {}
  declare class EMsg__ClientGetAuthorizedDevices mixins EMsg {}
  declare class EMsg__ClientGetAuthorizedDevicesResponse mixins EMsg {}
  declare class EMsg__AMNotifySessionDeviceAuthorized mixins EMsg {}
  declare class EMsg__ClientAuthorizeLocalDeviceNotification mixins EMsg {}
  declare class EMsg__MMSBase mixins EMsg {}
  declare class EMsg__ClientMMSCreateLobby mixins EMsg {}
  declare class EMsg__ClientMMSCreateLobbyResponse mixins EMsg {}
  declare class EMsg__ClientMMSJoinLobby mixins EMsg {}
  declare class EMsg__ClientMMSJoinLobbyResponse mixins EMsg {}
  declare class EMsg__ClientMMSLeaveLobby mixins EMsg {}
  declare class EMsg__ClientMMSLeaveLobbyResponse mixins EMsg {}
  declare class EMsg__ClientMMSGetLobbyList mixins EMsg {}
  declare class EMsg__ClientMMSGetLobbyListResponse mixins EMsg {}
  declare class EMsg__ClientMMSSetLobbyData mixins EMsg {}
  declare class EMsg__ClientMMSSetLobbyDataResponse mixins EMsg {}
  declare class EMsg__ClientMMSGetLobbyData mixins EMsg {}
  declare class EMsg__ClientMMSLobbyData mixins EMsg {}
  declare class EMsg__ClientMMSSendLobbyChatMsg mixins EMsg {}
  declare class EMsg__ClientMMSLobbyChatMsg mixins EMsg {}
  declare class EMsg__ClientMMSSetLobbyOwner mixins EMsg {}
  declare class EMsg__ClientMMSSetLobbyOwnerResponse mixins EMsg {}
  declare class EMsg__ClientMMSSetLobbyGameServer mixins EMsg {}
  declare class EMsg__ClientMMSLobbyGameServerSet mixins EMsg {}
  declare class EMsg__ClientMMSUserJoinedLobby mixins EMsg {}
  declare class EMsg__ClientMMSUserLeftLobby mixins EMsg {}
  declare class EMsg__ClientMMSInviteToLobby mixins EMsg {}
  declare class EMsg__ClientMMSFlushFrenemyListCache mixins EMsg {}
  declare class EMsg__ClientMMSFlushFrenemyListCacheResponse mixins EMsg {}
  declare class EMsg__ClientMMSSetLobbyLinked mixins EMsg {}
  declare class EMsg__NonStdMsgBase mixins EMsg {}
  declare class EMsg__NonStdMsgMemcached mixins EMsg {}
  declare class EMsg__NonStdMsgHTTPServer mixins EMsg {}
  declare class EMsg__NonStdMsgHTTPClient mixins EMsg {}
  declare class EMsg__NonStdMsgWGResponse mixins EMsg {}
  declare class EMsg__NonStdMsgPHPSimulator mixins EMsg {}
  declare class EMsg__NonStdMsgChase mixins EMsg {}
  declare class EMsg__NonStdMsgDFSTransfer mixins EMsg {}
  declare class EMsg__NonStdMsgTests mixins EMsg {}
  declare class EMsg__NonStdMsgUMQpipeAAPL mixins EMsg {}
  declare class EMsg__NonStdMsgSyslog mixins EMsg {}
  declare class EMsg__NonStdMsgLogsink mixins EMsg {}
  declare class EMsg__NonStdMsgSteam2Emulator mixins EMsg {}
  declare class EMsg__NonStdMsgRTMPServer mixins EMsg {}
  declare class EMsg__UDSBase mixins EMsg {}
  declare class EMsg__ClientUDSP2PSessionStarted mixins EMsg {}
  declare class EMsg__ClientUDSP2PSessionEnded mixins EMsg {}
  declare class EMsg__UDSRenderUserAuth mixins EMsg {}
  declare class EMsg__UDSRenderUserAuthResponse mixins EMsg {}
  declare class EMsg__ClientUDSInviteToGame mixins EMsg {}
  declare class EMsg__UDSFindSession mixins EMsg {}
  declare class EMsg__UDSHasSession mixins EMsg {}
  declare class EMsg__UDSFindSessionResponse mixins EMsg {}
  declare class EMsg__UDSHasSessionResponse mixins EMsg {}
  declare class EMsg__MPASBase mixins EMsg {}
  declare class EMsg__MPASVacBanReset mixins EMsg {}
  declare class EMsg__KGSBase mixins EMsg {}
  declare class EMsg__KGSAllocateKeyRange mixins EMsg {}
  declare class EMsg__KGSAllocateKeyRangeResponse mixins EMsg {}
  declare class EMsg__KGSGenerateKeys mixins EMsg {}
  declare class EMsg__KGSGenerateKeysResponse mixins EMsg {}
  declare class EMsg__KGSRemapKeys mixins EMsg {}
  declare class EMsg__KGSRemapKeysResponse mixins EMsg {}
  declare class EMsg__KGSGenerateGameStopWCKeys mixins EMsg {}
  declare class EMsg__KGSGenerateGameStopWCKeysResponse mixins EMsg {}
  declare class EMsg__UCMBase mixins EMsg {}
  declare class EMsg__ClientUCMAddScreenshot mixins EMsg {}
  declare class EMsg__ClientUCMAddScreenshotResponse mixins EMsg {}
  declare class EMsg__UCMValidateObjectExists mixins EMsg {}
  declare class EMsg__UCMValidateObjectExistsResponse mixins EMsg {}
  declare class EMsg__UCMResetCommunityContent mixins EMsg {}
  declare class EMsg__UCMResetCommunityContentResponse mixins EMsg {}
  declare class EMsg__ClientUCMDeleteScreenshot mixins EMsg {}
  declare class EMsg__ClientUCMDeleteScreenshotResponse mixins EMsg {}
  declare class EMsg__ClientUCMPublishFile mixins EMsg {}
  declare class EMsg__ClientUCMPublishFileResponse mixins EMsg {}
  declare class EMsg__ClientUCMGetPublishedFileDetails mixins EMsg {}
  declare class EMsg__ClientUCMGetPublishedFileDetailsResponse mixins EMsg {}
  declare class EMsg__ClientUCMDeletePublishedFile mixins EMsg {}
  declare class EMsg__ClientUCMDeletePublishedFileResponse mixins EMsg {}
  declare class EMsg__ClientUCMEnumerateUserPublishedFiles mixins EMsg {}
  declare class EMsg__ClientUCMEnumerateUserPublishedFilesResponse
    mixins EMsg {}
  declare class EMsg__ClientUCMSubscribePublishedFile mixins EMsg {}
  declare class EMsg__ClientUCMSubscribePublishedFileResponse mixins EMsg {}
  declare class EMsg__ClientUCMEnumerateUserSubscribedFiles mixins EMsg {}
  declare class EMsg__ClientUCMEnumerateUserSubscribedFilesResponse
    mixins EMsg {}
  declare class EMsg__ClientUCMUnsubscribePublishedFile mixins EMsg {}
  declare class EMsg__ClientUCMUnsubscribePublishedFileResponse mixins EMsg {}
  declare class EMsg__ClientUCMUpdatePublishedFile mixins EMsg {}
  declare class EMsg__ClientUCMUpdatePublishedFileResponse mixins EMsg {}
  declare class EMsg__UCMUpdatePublishedFile mixins EMsg {}
  declare class EMsg__UCMUpdatePublishedFileResponse mixins EMsg {}
  declare class EMsg__UCMDeletePublishedFile mixins EMsg {}
  declare class EMsg__UCMDeletePublishedFileResponse mixins EMsg {}
  declare class EMsg__UCMUpdatePublishedFileStat mixins EMsg {}
  declare class EMsg__UCMUpdatePublishedFileBan mixins EMsg {}
  declare class EMsg__UCMUpdatePublishedFileBanResponse mixins EMsg {}
  declare class EMsg__UCMUpdateTaggedScreenshot mixins EMsg {}
  declare class EMsg__UCMAddTaggedScreenshot mixins EMsg {}
  declare class EMsg__UCMRemoveTaggedScreenshot mixins EMsg {}
  declare class EMsg__UCMReloadPublishedFile mixins EMsg {}
  declare class EMsg__UCMReloadUserFileListCaches mixins EMsg {}
  declare class EMsg__UCMPublishedFileReported mixins EMsg {}
  declare class EMsg__UCMUpdatePublishedFileIncompatibleStatus mixins EMsg {}
  declare class EMsg__UCMPublishedFilePreviewAdd mixins EMsg {}
  declare class EMsg__UCMPublishedFilePreviewAddResponse mixins EMsg {}
  declare class EMsg__UCMPublishedFilePreviewRemove mixins EMsg {}
  declare class EMsg__UCMPublishedFilePreviewRemoveResponse mixins EMsg {}
  declare class EMsg__UCMPublishedFilePreviewChangeSortOrder mixins EMsg {}
  declare class EMsg__UCMPublishedFilePreviewChangeSortOrderResponse
    mixins EMsg {}
  declare class EMsg__ClientUCMPublishedFileSubscribed mixins EMsg {}
  declare class EMsg__ClientUCMPublishedFileUnsubscribed mixins EMsg {}
  declare class EMsg__UCMPublishedFileSubscribed mixins EMsg {}
  declare class EMsg__UCMPublishedFileUnsubscribed mixins EMsg {}
  declare class EMsg__UCMPublishFile mixins EMsg {}
  declare class EMsg__UCMPublishFileResponse mixins EMsg {}
  declare class EMsg__UCMPublishedFileChildAdd mixins EMsg {}
  declare class EMsg__UCMPublishedFileChildAddResponse mixins EMsg {}
  declare class EMsg__UCMPublishedFileChildRemove mixins EMsg {}
  declare class EMsg__UCMPublishedFileChildRemoveResponse mixins EMsg {}
  declare class EMsg__UCMPublishedFileChildChangeSortOrder mixins EMsg {}
  declare class EMsg__UCMPublishedFileChildChangeSortOrderResponse
    mixins EMsg {}
  declare class EMsg__UCMPublishedFileParentChanged mixins EMsg {}
  declare class EMsg__ClientUCMGetPublishedFilesForUser mixins EMsg {}
  declare class EMsg__ClientUCMGetPublishedFilesForUserResponse mixins EMsg {}
  declare class EMsg__UCMGetPublishedFilesForUser mixins EMsg {}
  declare class EMsg__UCMGetPublishedFilesForUserResponse mixins EMsg {}
  declare class EMsg__ClientUCMSetUserPublishedFileAction mixins EMsg {}
  declare class EMsg__ClientUCMSetUserPublishedFileActionResponse mixins EMsg {}
  declare class EMsg__ClientUCMEnumeratePublishedFilesByUserAction
    mixins EMsg {}
  declare class EMsg__ClientUCMEnumeratePublishedFilesByUserActionResponse
    mixins EMsg {}
  declare class EMsg__ClientUCMPublishedFileDeleted mixins EMsg {}
  declare class EMsg__UCMGetUserSubscribedFiles mixins EMsg {}
  declare class EMsg__UCMGetUserSubscribedFilesResponse mixins EMsg {}
  declare class EMsg__UCMFixStatsPublishedFile mixins EMsg {}
  declare class EMsg__UCMDeleteOldScreenshot mixins EMsg {}
  declare class EMsg__UCMDeleteOldScreenshotResponse mixins EMsg {}
  declare class EMsg__UCMDeleteOldVideo mixins EMsg {}
  declare class EMsg__UCMDeleteOldVideoResponse mixins EMsg {}
  declare class EMsg__UCMUpdateOldScreenshotPrivacy mixins EMsg {}
  declare class EMsg__UCMUpdateOldScreenshotPrivacyResponse mixins EMsg {}
  declare class EMsg__ClientUCMEnumerateUserSubscribedFilesWithUpdates
    mixins EMsg {}
  declare class EMsg__ClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse
    mixins EMsg {}
  declare class EMsg__UCMPublishedFileContentUpdated mixins EMsg {}
  declare class EMsg__UCMPublishedFileUpdated mixins EMsg {}
  declare class EMsg__ClientWorkshopItemChangesRequest mixins EMsg {}
  declare class EMsg__ClientWorkshopItemChangesResponse mixins EMsg {}
  declare class EMsg__ClientWorkshopItemInfoRequest mixins EMsg {}
  declare class EMsg__ClientWorkshopItemInfoResponse mixins EMsg {}
  declare class EMsg__FSBase mixins EMsg {}
  declare class EMsg__ClientRichPresenceUpload mixins EMsg {}
  declare class EMsg__ClientRichPresenceRequest mixins EMsg {}
  declare class EMsg__ClientRichPresenceInfo mixins EMsg {}
  declare class EMsg__FSRichPresenceRequest mixins EMsg {}
  declare class EMsg__FSRichPresenceResponse mixins EMsg {}
  declare class EMsg__FSComputeFrenematrix mixins EMsg {}
  declare class EMsg__FSComputeFrenematrixResponse mixins EMsg {}
  declare class EMsg__FSPlayStatusNotification mixins EMsg {}
  declare class EMsg__FSPublishPersonaStatus mixins EMsg {}
  declare class EMsg__FSAddOrRemoveFollower mixins EMsg {}
  declare class EMsg__FSAddOrRemoveFollowerResponse mixins EMsg {}
  declare class EMsg__FSUpdateFollowingList mixins EMsg {}
  declare class EMsg__FSCommentNotification mixins EMsg {}
  declare class EMsg__FSCommentNotificationViewed mixins EMsg {}
  declare class EMsg__ClientFSGetFollowerCount mixins EMsg {}
  declare class EMsg__ClientFSGetFollowerCountResponse mixins EMsg {}
  declare class EMsg__ClientFSGetIsFollowing mixins EMsg {}
  declare class EMsg__ClientFSGetIsFollowingResponse mixins EMsg {}
  declare class EMsg__ClientFSEnumerateFollowingList mixins EMsg {}
  declare class EMsg__ClientFSEnumerateFollowingListResponse mixins EMsg {}
  declare class EMsg__FSGetPendingNotificationCount mixins EMsg {}
  declare class EMsg__FSGetPendingNotificationCountResponse mixins EMsg {}
  declare class EMsg__ClientFSOfflineMessageNotification mixins EMsg {}
  declare class EMsg__ClientFSRequestOfflineMessageCount mixins EMsg {}
  declare class EMsg__ClientFSGetFriendMessageHistory mixins EMsg {}
  declare class EMsg__ClientFSGetFriendMessageHistoryResponse mixins EMsg {}
  declare class EMsg__ClientFSGetFriendMessageHistoryForOfflineMessages
    mixins EMsg {}
  declare class EMsg__ClientFSGetFriendsSteamLevels mixins EMsg {}
  declare class EMsg__ClientFSGetFriendsSteamLevelsResponse mixins EMsg {}
  declare class EMsg__FSRequestFriendData mixins EMsg {}
  declare class EMsg__DRMRange2 mixins EMsg {}
  declare class EMsg__CEGVersionSetEnableDisableRequest mixins EMsg {}
  declare class EMsg__CEGVersionSetEnableDisableResponse mixins EMsg {}
  declare class EMsg__CEGPropStatusDRMSRequest mixins EMsg {}
  declare class EMsg__CEGPropStatusDRMSResponse mixins EMsg {}
  declare class EMsg__CEGWhackFailureReportRequest mixins EMsg {}
  declare class EMsg__CEGWhackFailureReportResponse mixins EMsg {}
  declare class EMsg__DRMSFetchVersionSet mixins EMsg {}
  declare class EMsg__DRMSFetchVersionSetResponse mixins EMsg {}
  declare class EMsg__EconBase mixins EMsg {}
  declare class EMsg__EconTrading_InitiateTradeRequest mixins EMsg {}
  declare class EMsg__EconTrading_InitiateTradeProposed mixins EMsg {}
  declare class EMsg__EconTrading_InitiateTradeResponse mixins EMsg {}
  declare class EMsg__EconTrading_InitiateTradeResult mixins EMsg {}
  declare class EMsg__EconTrading_StartSession mixins EMsg {}
  declare class EMsg__EconTrading_CancelTradeRequest mixins EMsg {}
  declare class EMsg__EconFlushInventoryCache mixins EMsg {}
  declare class EMsg__EconFlushInventoryCacheResponse mixins EMsg {}
  declare class EMsg__EconCDKeyProcessTransaction mixins EMsg {}
  declare class EMsg__EconCDKeyProcessTransactionResponse mixins EMsg {}
  declare class EMsg__EconGetErrorLogs mixins EMsg {}
  declare class EMsg__EconGetErrorLogsResponse mixins EMsg {}
  declare class EMsg__RMRange mixins EMsg {}
  declare class EMsg__RMTestVerisignOTP mixins EMsg {}
  declare class EMsg__RMTestVerisignOTPResponse mixins EMsg {}
  declare class EMsg__RMDeleteMemcachedKeys mixins EMsg {}
  declare class EMsg__RMRemoteInvoke mixins EMsg {}
  declare class EMsg__BadLoginIPList mixins EMsg {}
  declare class EMsg__RMMsgTraceAddTrigger mixins EMsg {}
  declare class EMsg__RMMsgTraceRemoveTrigger mixins EMsg {}
  declare class EMsg__RMMsgTraceEvent mixins EMsg {}
  declare class EMsg__UGSBase mixins EMsg {}
  declare class EMsg__UGSUpdateGlobalStats mixins EMsg {}
  declare class EMsg__ClientUGSGetGlobalStats mixins EMsg {}
  declare class EMsg__ClientUGSGetGlobalStatsResponse mixins EMsg {}
  declare class EMsg__StoreBase mixins EMsg {}
  declare class EMsg__StoreUpdateRecommendationCount mixins EMsg {}
  declare class EMsg__UMQBase mixins EMsg {}
  declare class EMsg__UMQLogonRequest mixins EMsg {}
  declare class EMsg__UMQLogonResponse mixins EMsg {}
  declare class EMsg__UMQLogoffRequest mixins EMsg {}
  declare class EMsg__UMQLogoffResponse mixins EMsg {}
  declare class EMsg__UMQSendChatMessage mixins EMsg {}
  declare class EMsg__UMQIncomingChatMessage mixins EMsg {}
  declare class EMsg__UMQPoll mixins EMsg {}
  declare class EMsg__UMQPollResults mixins EMsg {}
  declare class EMsg__UMQ2AM_ClientMsgBatch mixins EMsg {}
  declare class EMsg__UMQEnqueueMobileSalePromotions mixins EMsg {}
  declare class EMsg__UMQEnqueueMobileAnnouncements mixins EMsg {}
  declare class EMsg__WorkshopBase mixins EMsg {}
  declare class EMsg__WorkshopAcceptTOSRequest mixins EMsg {}
  declare class EMsg__WorkshopAcceptTOSResponse mixins EMsg {}
  declare class EMsg__WebAPIBase mixins EMsg {}
  declare class EMsg__WebAPIValidateOAuth2Token mixins EMsg {}
  declare class EMsg__WebAPIValidateOAuth2TokenResponse mixins EMsg {}
  declare class EMsg__WebAPIInvalidateTokensForAccount mixins EMsg {}
  declare class EMsg__WebAPIRegisterGCInterfaces mixins EMsg {}
  declare class EMsg__WebAPIInvalidateOAuthClientCache mixins EMsg {}
  declare class EMsg__WebAPIInvalidateOAuthTokenCache mixins EMsg {}
  declare class EMsg__WebAPISetSecrets mixins EMsg {}
  declare class EMsg__BackpackBase mixins EMsg {}
  declare class EMsg__BackpackAddToCurrency mixins EMsg {}
  declare class EMsg__BackpackAddToCurrencyResponse mixins EMsg {}
  declare class EMsg__CREBase mixins EMsg {}
  declare class EMsg__CRERankByTrend mixins EMsg {}
  declare class EMsg__CRERankByTrendResponse mixins EMsg {}
  declare class EMsg__CREItemVoteSummary mixins EMsg {}
  declare class EMsg__CREItemVoteSummaryResponse mixins EMsg {}
  declare class EMsg__CRERankByVote mixins EMsg {}
  declare class EMsg__CRERankByVoteResponse mixins EMsg {}
  declare class EMsg__CREUpdateUserPublishedItemVote mixins EMsg {}
  declare class EMsg__CREUpdateUserPublishedItemVoteResponse mixins EMsg {}
  declare class EMsg__CREGetUserPublishedItemVoteDetails mixins EMsg {}
  declare class EMsg__CREGetUserPublishedItemVoteDetailsResponse mixins EMsg {}
  declare class EMsg__CREEnumeratePublishedFiles mixins EMsg {}
  declare class EMsg__CREEnumeratePublishedFilesResponse mixins EMsg {}
  declare class EMsg__CREPublishedFileVoteAdded mixins EMsg {}
  declare class EMsg__SecretsBase mixins EMsg {}
  declare class EMsg__SecretsRequestCredentialPair mixins EMsg {}
  declare class EMsg__SecretsCredentialPairResponse mixins EMsg {}
  declare class EMsg__SecretsRequestServerIdentity mixins EMsg {}
  declare class EMsg__SecretsServerIdentityResponse mixins EMsg {}
  declare class EMsg__SecretsUpdateServerIdentities mixins EMsg {}
  declare class EMsg__BoxMonitorBase mixins EMsg {}
  declare class EMsg__BoxMonitorReportRequest mixins EMsg {}
  declare class EMsg__BoxMonitorReportResponse mixins EMsg {}
  declare class EMsg__LogsinkBase mixins EMsg {}
  declare class EMsg__LogsinkWriteReport mixins EMsg {}
  declare class EMsg__PICSBase mixins EMsg {}
  declare class EMsg__ClientPICSChangesSinceRequest mixins EMsg {}
  declare class EMsg__ClientPICSChangesSinceResponse mixins EMsg {}
  declare class EMsg__ClientPICSProductInfoRequest mixins EMsg {}
  declare class EMsg__ClientPICSProductInfoResponse mixins EMsg {}
  declare class EMsg__ClientPICSAccessTokenRequest mixins EMsg {}
  declare class EMsg__ClientPICSAccessTokenResponse mixins EMsg {}
  declare class EMsg__WorkerProcess mixins EMsg {}
  declare class EMsg__WorkerProcessPingRequest mixins EMsg {}
  declare class EMsg__WorkerProcessPingResponse mixins EMsg {}
  declare class EMsg__WorkerProcessShutdown mixins EMsg {}
  declare class EMsg__DRMWorkerProcess mixins EMsg {}
  declare class EMsg__DRMWorkerProcessDRMAndSign mixins EMsg {}
  declare class EMsg__DRMWorkerProcessDRMAndSignResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessSteamworksInfoRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessSteamworksInfoResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessInstallDRMDLLRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessInstallDRMDLLResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessSecretIdStringRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessSecretIdStringResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessGetDRMGuidsFromFileRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessGetDRMGuidsFromFileResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessInstallProcessedFilesRequest
    mixins EMsg {}
  declare class EMsg__DRMWorkerProcessInstallProcessedFilesResponse
    mixins EMsg {}
  declare class EMsg__DRMWorkerProcessExamineBlobRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessExamineBlobResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessDescribeSecretRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessDescribeSecretResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessBackfillOriginalRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessBackfillOriginalResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessValidateDRMDLLRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessValidateDRMDLLResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessValidateFileRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessValidateFileResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessSplitAndInstallRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessSplitAndInstallResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessGetBlobRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessGetBlobResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessEvaluateCrashRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessEvaluateCrashResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessAnalyzeFileRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessAnalyzeFileResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessUnpackBlobRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessUnpackBlobResponse mixins EMsg {}
  declare class EMsg__DRMWorkerProcessInstallAllRequest mixins EMsg {}
  declare class EMsg__DRMWorkerProcessInstallAllResponse mixins EMsg {}
  declare class EMsg__TestWorkerProcess mixins EMsg {}
  declare class EMsg__TestWorkerProcessLoadUnloadModuleRequest mixins EMsg {}
  declare class EMsg__TestWorkerProcessLoadUnloadModuleResponse mixins EMsg {}
  declare class EMsg__TestWorkerProcessServiceModuleCallRequest mixins EMsg {}
  declare class EMsg__TestWorkerProcessServiceModuleCallResponse mixins EMsg {}
  declare class EMsg__QuestServerBase mixins EMsg {}
  declare class EMsg__ClientGetEmoticonList mixins EMsg {}
  declare class EMsg__ClientEmoticonList mixins EMsg {}
  declare class EMsg__ClientSharedLibraryBase mixins EMsg {}
  declare class EMsg__SLCBase mixins EMsg {}
  declare class EMsg__SLCUserSessionStatus mixins EMsg {}
  declare class EMsg__SLCRequestUserSessionStatus mixins EMsg {}
  declare class EMsg__SLCSharedLicensesLockStatus mixins EMsg {}
  declare class EMsg__ClientSharedLicensesLockStatus mixins EMsg {}
  declare class EMsg__ClientSharedLicensesStopPlaying mixins EMsg {}
  declare class EMsg__ClientSharedLibraryLockStatus mixins EMsg {}
  declare class EMsg__ClientSharedLibraryStopPlaying mixins EMsg {}
  declare class EMsg__SLCOwnerLibraryChanged mixins EMsg {}
  declare class EMsg__SLCSharedLibraryChanged mixins EMsg {}
  declare class EMsg__RemoteClientBase mixins EMsg {}
  declare class EMsg__RemoteClientAuth mixins EMsg {}
  declare class EMsg__RemoteClientAuthResponse mixins EMsg {}
  declare class EMsg__RemoteClientAppStatus mixins EMsg {}
  declare class EMsg__RemoteClientStartStream mixins EMsg {}
  declare class EMsg__RemoteClientStartStreamResponse mixins EMsg {}
  declare class EMsg__RemoteClientPing mixins EMsg {}
  declare class EMsg__RemoteClientPingResponse mixins EMsg {}
  declare class EMsg__ClientUnlockStreaming mixins EMsg {}
  declare class EMsg__ClientUnlockStreamingResponse mixins EMsg {}
  declare class EMsg__RemoteClientAcceptEULA mixins EMsg {}
  declare class EMsg__RemoteClientGetControllerConfig mixins EMsg {}
  declare class EMsg__RemoteClientGetControllerConfigResposne mixins EMsg {}
  declare class EMsg__RemoteClientStreamingEnabled mixins EMsg {}
  declare class EMsg__ClientConcurrentSessionsBase mixins EMsg {}
  declare class EMsg__ClientPlayingSessionState mixins EMsg {}
  declare class EMsg__ClientKickPlayingSession mixins EMsg {}
  declare class EMsg__ClientBroadcastBase mixins EMsg {}
  declare class EMsg__ClientBroadcastInit mixins EMsg {}
  declare class EMsg__ClientBroadcastFrames mixins EMsg {}
  declare class EMsg__ClientBroadcastDisconnect mixins EMsg {}
  declare class EMsg__ClientBroadcastScreenshot mixins EMsg {}
  declare class EMsg__ClientBroadcastUploadConfig mixins EMsg {}
  declare class EMsg__BaseClient3 mixins EMsg {}
  declare class EMsg__ClientVoiceCallPreAuthorize mixins EMsg {}
  declare class EMsg__ClientVoiceCallPreAuthorizeResponse mixins EMsg {}

  declare export class EUniverse {
    constructor(...args: empty): mixed;
    static +Invalid: Class<EUniverse__Invalid> & EUniverse__Invalid & 0; // 0
    static +Public: Class<EUniverse__Public> & EUniverse__Public & 1; // 1
    static +Beta: Class<EUniverse__Beta> & EUniverse__Beta & 2; // 2
    static +Internal: Class<EUniverse__Internal> & EUniverse__Internal & 3; // 3
    static +Dev: Class<EUniverse__Dev> & EUniverse__Dev & 4; // 4
    static +Max: Class<EUniverse__Max> & EUniverse__Max & 5; // 5
  }

  declare class EUniverse__Invalid mixins EUniverse {}
  declare class EUniverse__Public mixins EUniverse {}
  declare class EUniverse__Beta mixins EUniverse {}
  declare class EUniverse__Internal mixins EUniverse {}
  declare class EUniverse__Dev mixins EUniverse {}
  declare class EUniverse__Max mixins EUniverse {}

  declare export class EChatEntryType {
    constructor(...args: empty): mixed;
    static +Invalid: Class<EChatEntryType__Invalid> &
      EChatEntryType__Invalid &
      0; // 0
    static +ChatMsg: Class<EChatEntryType__ChatMsg> &
      EChatEntryType__ChatMsg &
      1; // 1
    static +Typing: Class<EChatEntryType__Typing> & EChatEntryType__Typing & 2; // 2
    static +InviteGame: Class<EChatEntryType__InviteGame> &
      EChatEntryType__InviteGame &
      3; // 3
    static +Emote: Class<EChatEntryType__Emote> & EChatEntryType__Emote & 4; // 4
    static +LobbyGameStart: Class<EChatEntryType__LobbyGameStart> &
      EChatEntryType__LobbyGameStart &
      5; // 5
    static +LeftConversation: Class<EChatEntryType__LeftConversation> &
      EChatEntryType__LeftConversation &
      6; // 6
    static +Entered: Class<EChatEntryType__Entered> &
      EChatEntryType__Entered &
      7; // 7
    static +WasKicked: Class<EChatEntryType__WasKicked> &
      EChatEntryType__WasKicked &
      8; // 8
    static +WasBanned: Class<EChatEntryType__WasBanned> &
      EChatEntryType__WasBanned &
      9; // 9
    static +Disconnected: Class<EChatEntryType__Disconnected> &
      EChatEntryType__Disconnected &
      10; // 10
    static +HistoricalChat: Class<EChatEntryType__HistoricalChat> &
      EChatEntryType__HistoricalChat &
      11; // 11
    static +Reserved1: Class<EChatEntryType__Reserved1> &
      EChatEntryType__Reserved1 &
      12; // 12
    static +Reserved2: Class<EChatEntryType__Reserved2> &
      EChatEntryType__Reserved2 &
      13; // 13
    static +LinkBlocked: Class<EChatEntryType__LinkBlocked> &
      EChatEntryType__LinkBlocked &
      14; // 14
  }

  declare class EChatEntryType__Invalid mixins EChatEntryType {}
  declare class EChatEntryType__ChatMsg mixins EChatEntryType {}
  declare class EChatEntryType__Typing mixins EChatEntryType {}
  declare class EChatEntryType__InviteGame mixins EChatEntryType {}
  declare class EChatEntryType__Emote mixins EChatEntryType {}
  declare class EChatEntryType__LobbyGameStart mixins EChatEntryType {}
  declare class EChatEntryType__LeftConversation mixins EChatEntryType {}
  declare class EChatEntryType__Entered mixins EChatEntryType {}
  declare class EChatEntryType__WasKicked mixins EChatEntryType {}
  declare class EChatEntryType__WasBanned mixins EChatEntryType {}
  declare class EChatEntryType__Disconnected mixins EChatEntryType {}
  declare class EChatEntryType__HistoricalChat mixins EChatEntryType {}
  declare class EChatEntryType__Reserved1 mixins EChatEntryType {}
  declare class EChatEntryType__Reserved2 mixins EChatEntryType {}
  declare class EChatEntryType__LinkBlocked mixins EChatEntryType {}

  declare export class EPersonaState {
    constructor(...args: empty): mixed;
    static +Offline: Class<EPersonaState__Offline> & EPersonaState__Offline & 0; // 0
    static +Online: Class<EPersonaState__Online> & EPersonaState__Online & 1; // 1
    static +Busy: Class<EPersonaState__Busy> & EPersonaState__Busy & 2; // 2
    static +Away: Class<EPersonaState__Away> & EPersonaState__Away & 3; // 3
    static +Snooze: Class<EPersonaState__Snooze> & EPersonaState__Snooze & 4; // 4
    static +LookingToTrade: Class<EPersonaState__LookingToTrade> &
      EPersonaState__LookingToTrade &
      5; // 5
    static +LookingToPlay: Class<EPersonaState__LookingToPlay> &
      EPersonaState__LookingToPlay &
      6; // 6
    static +Max: Class<EPersonaState__Max> & EPersonaState__Max & 7; // 7
  }

  declare class EPersonaState__Offline mixins EPersonaState {}
  declare class EPersonaState__Online mixins EPersonaState {}
  declare class EPersonaState__Busy mixins EPersonaState {}
  declare class EPersonaState__Away mixins EPersonaState {}
  declare class EPersonaState__Snooze mixins EPersonaState {}
  declare class EPersonaState__LookingToTrade mixins EPersonaState {}
  declare class EPersonaState__LookingToPlay mixins EPersonaState {}
  declare class EPersonaState__Max mixins EPersonaState {}

  declare export class EAccountType {
    constructor(...args: empty): mixed;
    static +Invalid: Class<EAccountType__Invalid> & EAccountType__Invalid & 0; // 0
    static +Individual: Class<EAccountType__Individual> &
      EAccountType__Individual &
      1; // 1
    static +Multiseat: Class<EAccountType__Multiseat> &
      EAccountType__Multiseat &
      2; // 2
    static +GameServer: Class<EAccountType__GameServer> &
      EAccountType__GameServer &
      3; // 3
    static +AnonGameServer: Class<EAccountType__AnonGameServer> &
      EAccountType__AnonGameServer &
      4; // 4
    static +Pending: Class<EAccountType__Pending> & EAccountType__Pending & 5; // 5
    static +ContentServer: Class<EAccountType__ContentServer> &
      EAccountType__ContentServer &
      6; // 6
    static +Clan: Class<EAccountType__Clan> & EAccountType__Clan & 7; // 7
    static +Chat: Class<EAccountType__Chat> & EAccountType__Chat & 8; // 8
    static +ConsoleUser: Class<EAccountType__ConsoleUser> &
      EAccountType__ConsoleUser &
      9; // 9
    static +AnonUser: Class<EAccountType__AnonUser> &
      EAccountType__AnonUser &
      10; // 10
    static +Max: Class<EAccountType__Max> & EAccountType__Max & 11; // 11
  }

  declare class EAccountType__Invalid mixins EAccountType {}
  declare class EAccountType__Individual mixins EAccountType {}
  declare class EAccountType__Multiseat mixins EAccountType {}
  declare class EAccountType__GameServer mixins EAccountType {}
  declare class EAccountType__AnonGameServer mixins EAccountType {}
  declare class EAccountType__Pending mixins EAccountType {}
  declare class EAccountType__ContentServer mixins EAccountType {}
  declare class EAccountType__Clan mixins EAccountType {}
  declare class EAccountType__Chat mixins EAccountType {}
  declare class EAccountType__ConsoleUser mixins EAccountType {}
  declare class EAccountType__AnonUser mixins EAccountType {}
  declare class EAccountType__Max mixins EAccountType {}

  declare export class EFriendRelationship {
    constructor(...args: empty): mixed;
    static +None: Class<EFriendRelationship__None> &
      EFriendRelationship__None &
      0; // 0
    static +Blocked: Class<EFriendRelationship__Blocked> &
      EFriendRelationship__Blocked &
      1; // 1
    static +RequestRecipient: Class<EFriendRelationship__RequestRecipient> &
      EFriendRelationship__RequestRecipient &
      2; // 2
    static +Friend: Class<EFriendRelationship__Friend> &
      EFriendRelationship__Friend &
      3; // 3
    static +RequestInitiator: Class<EFriendRelationship__RequestInitiator> &
      EFriendRelationship__RequestInitiator &
      4; // 4
    static +Ignored: Class<EFriendRelationship__Ignored> &
      EFriendRelationship__Ignored &
      5; // 5
    static +IgnoredFriend: Class<EFriendRelationship__IgnoredFriend> &
      EFriendRelationship__IgnoredFriend &
      6; // 6
    static +SuggestedFriend: Class<EFriendRelationship__SuggestedFriend> &
      EFriendRelationship__SuggestedFriend &
      7; // 7
    static +Max: Class<EFriendRelationship__Max> & EFriendRelationship__Max & 8; // 8
  }

  declare class EFriendRelationship__None mixins EFriendRelationship {}
  declare class EFriendRelationship__Blocked mixins EFriendRelationship {}
  declare class EFriendRelationship__RequestRecipient
    mixins EFriendRelationship {}
  declare class EFriendRelationship__Friend mixins EFriendRelationship {}
  declare class EFriendRelationship__RequestInitiator
    mixins EFriendRelationship {}
  declare class EFriendRelationship__Ignored mixins EFriendRelationship {}
  declare class EFriendRelationship__IgnoredFriend mixins EFriendRelationship {}
  declare class EFriendRelationship__SuggestedFriend
    mixins EFriendRelationship {}
  declare class EFriendRelationship__Max mixins EFriendRelationship {}

  declare export class EAccountFlags {
    constructor(...args: empty): mixed;
    static +NormalUser: Class<EAccountFlags__NormalUser> &
      EAccountFlags__NormalUser &
      0; // 0
    static +PersonaNameSet: Class<EAccountFlags__PersonaNameSet> &
      EAccountFlags__PersonaNameSet &
      1; // 1
    static +Unbannable: Class<EAccountFlags__Unbannable> &
      EAccountFlags__Unbannable &
      2; // 2
    static +PasswordSet: Class<EAccountFlags__PasswordSet> &
      EAccountFlags__PasswordSet &
      4; // 4
    static +Support: Class<EAccountFlags__Support> & EAccountFlags__Support & 8; // 8
    static +Admin: Class<EAccountFlags__Admin> & EAccountFlags__Admin & 16; // 16
    static +Supervisor: Class<EAccountFlags__Supervisor> &
      EAccountFlags__Supervisor &
      32; // 32
    static +AppEditor: Class<EAccountFlags__AppEditor> &
      EAccountFlags__AppEditor &
      64; // 64
    static +HWIDSet: Class<EAccountFlags__HWIDSet> &
      EAccountFlags__HWIDSet &
      128; // 128
    static +PersonalQASet: Class<EAccountFlags__PersonalQASet> &
      EAccountFlags__PersonalQASet &
      256; // 256
    static +VacBeta: Class<EAccountFlags__VacBeta> &
      EAccountFlags__VacBeta &
      512; // 512
    static +Debug: Class<EAccountFlags__Debug> & EAccountFlags__Debug & 1024; // 1024
    static +Disabled: Class<EAccountFlags__Disabled> &
      EAccountFlags__Disabled &
      2048; // 2048
    static +LimitedUser: Class<EAccountFlags__LimitedUser> &
      EAccountFlags__LimitedUser &
      4096; // 4096
    static +LimitedUserForce: Class<EAccountFlags__LimitedUserForce> &
      EAccountFlags__LimitedUserForce &
      8192; // 8192
    static +EmailValidated: Class<EAccountFlags__EmailValidated> &
      EAccountFlags__EmailValidated &
      16384; // 16384
    static +MarketingTreatment: Class<EAccountFlags__MarketingTreatment> &
      EAccountFlags__MarketingTreatment &
      32768; // 32768
    static +OGGInviteOptOut: Class<EAccountFlags__OGGInviteOptOut> &
      EAccountFlags__OGGInviteOptOut &
      65536; // 65536
    static +ForcePasswordChange: Class<EAccountFlags__ForcePasswordChange> &
      EAccountFlags__ForcePasswordChange &
      131072; // 131072
    static +ForceEmailVerification: Class<EAccountFlags__ForceEmailVerification> &
      EAccountFlags__ForceEmailVerification &
      262144; // 262144
    static +LogonExtraSecurity: Class<EAccountFlags__LogonExtraSecurity> &
      EAccountFlags__LogonExtraSecurity &
      524288; // 524288
    static +LogonExtraSecurityDisabled: Class<EAccountFlags__LogonExtraSecurityDisabled> &
      EAccountFlags__LogonExtraSecurityDisabled &
      1048576; // 1048576
    static +Steam2MigrationComplete: Class<EAccountFlags__Steam2MigrationComplete> &
      EAccountFlags__Steam2MigrationComplete &
      2097152; // 2097152
    static +NeedLogs: Class<EAccountFlags__NeedLogs> &
      EAccountFlags__NeedLogs &
      4194304; // 4194304
    static +Lockdown: Class<EAccountFlags__Lockdown> &
      EAccountFlags__Lockdown &
      8388608; // 8388608
    static +MasterAppEditor: Class<EAccountFlags__MasterAppEditor> &
      EAccountFlags__MasterAppEditor &
      16777216; // 16777216
    static +BannedFromWebAPI: Class<EAccountFlags__BannedFromWebAPI> &
      EAccountFlags__BannedFromWebAPI &
      33554432; // 33554432
    static +ClansOnlyFromFriends: Class<EAccountFlags__ClansOnlyFromFriends> &
      EAccountFlags__ClansOnlyFromFriends &
      67108864; // 67108864
    static +GlobalModerator: Class<EAccountFlags__GlobalModerator> &
      EAccountFlags__GlobalModerator &
      134217728; // 134217728
    static +ParentalSettings: Class<EAccountFlags__ParentalSettings> &
      EAccountFlags__ParentalSettings &
      268435456; // 268435456
    static +ThirdPartySupport: Class<EAccountFlags__ThirdPartySupport> &
      EAccountFlags__ThirdPartySupport &
      536870912; // 536870912
    static +NeedsSSANextSteamLogon: Class<EAccountFlags__NeedsSSANextSteamLogon> &
      EAccountFlags__NeedsSSANextSteamLogon &
      1073741824; // 1073741824
  }

  declare class EAccountFlags__NormalUser mixins EAccountFlags {}
  declare class EAccountFlags__PersonaNameSet mixins EAccountFlags {}
  declare class EAccountFlags__Unbannable mixins EAccountFlags {}
  declare class EAccountFlags__PasswordSet mixins EAccountFlags {}
  declare class EAccountFlags__Support mixins EAccountFlags {}
  declare class EAccountFlags__Admin mixins EAccountFlags {}
  declare class EAccountFlags__Supervisor mixins EAccountFlags {}
  declare class EAccountFlags__AppEditor mixins EAccountFlags {}
  declare class EAccountFlags__HWIDSet mixins EAccountFlags {}
  declare class EAccountFlags__PersonalQASet mixins EAccountFlags {}
  declare class EAccountFlags__VacBeta mixins EAccountFlags {}
  declare class EAccountFlags__Debug mixins EAccountFlags {}
  declare class EAccountFlags__Disabled mixins EAccountFlags {}
  declare class EAccountFlags__LimitedUser mixins EAccountFlags {}
  declare class EAccountFlags__LimitedUserForce mixins EAccountFlags {}
  declare class EAccountFlags__EmailValidated mixins EAccountFlags {}
  declare class EAccountFlags__MarketingTreatment mixins EAccountFlags {}
  declare class EAccountFlags__OGGInviteOptOut mixins EAccountFlags {}
  declare class EAccountFlags__ForcePasswordChange mixins EAccountFlags {}
  declare class EAccountFlags__ForceEmailVerification mixins EAccountFlags {}
  declare class EAccountFlags__LogonExtraSecurity mixins EAccountFlags {}
  declare class EAccountFlags__LogonExtraSecurityDisabled
    mixins EAccountFlags {}
  declare class EAccountFlags__Steam2MigrationComplete mixins EAccountFlags {}
  declare class EAccountFlags__NeedLogs mixins EAccountFlags {}
  declare class EAccountFlags__Lockdown mixins EAccountFlags {}
  declare class EAccountFlags__MasterAppEditor mixins EAccountFlags {}
  declare class EAccountFlags__BannedFromWebAPI mixins EAccountFlags {}
  declare class EAccountFlags__ClansOnlyFromFriends mixins EAccountFlags {}
  declare class EAccountFlags__GlobalModerator mixins EAccountFlags {}
  declare class EAccountFlags__ParentalSettings mixins EAccountFlags {}
  declare class EAccountFlags__ThirdPartySupport mixins EAccountFlags {}
  declare class EAccountFlags__NeedsSSANextSteamLogon mixins EAccountFlags {}

  declare export class EClanPermission {
    constructor(...args: empty): mixed;
    static +Nobody: Class<EClanPermission__Nobody> &
      EClanPermission__Nobody &
      0; // 0
    static +Owner: Class<EClanPermission__Owner> & EClanPermission__Owner & 1; // 1
    static +Officer: Class<EClanPermission__Officer> &
      EClanPermission__Officer &
      2; // 2
    static +OwnerAndOfficer: Class<EClanPermission__OwnerAndOfficer> &
      EClanPermission__OwnerAndOfficer &
      3; // 3
    static +Member: Class<EClanPermission__Member> &
      EClanPermission__Member &
      4; // 4
    static +Moderator: Class<EClanPermission__Moderator> &
      EClanPermission__Moderator &
      8; // 8
    static +OwnerOfficerModerator: Class<EClanPermission__OwnerOfficerModerator> &
      EClanPermission__OwnerOfficerModerator &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
    static +AllMembers: Class<EClanPermission__AllMembers> &
      EClanPermission__AllMembers &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
    static +OGGGameOwner: Class<EClanPermission__OGGGameOwner> &
      EClanPermission__OGGGameOwner &
      16; // 16
    static +NonMember: Class<EClanPermission__NonMember> &
      EClanPermission__NonMember &
      128; // 128
    static +MemberAllowed: Class<EClanPermission__MemberAllowed> &
      EClanPermission__MemberAllowed &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
    static +ModeratorAllowed: Class<EClanPermission__ModeratorAllowed> &
      EClanPermission__ModeratorAllowed &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
    static +OfficerAllowed: Class<EClanPermission__OfficerAllowed> &
      EClanPermission__OfficerAllowed &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
    static +OwnerAllowed: Class<EClanPermission__OwnerAllowed> &
      EClanPermission__OwnerAllowed &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
    static +Anybody: Class<EClanPermission__Anybody> &
      EClanPermission__Anybody &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
  }

  declare class EClanPermission__Nobody mixins EClanPermission {}
  declare class EClanPermission__Owner mixins EClanPermission {}
  declare class EClanPermission__Officer mixins EClanPermission {}
  declare class EClanPermission__OwnerAndOfficer mixins EClanPermission {}
  declare class EClanPermission__Member mixins EClanPermission {}
  declare class EClanPermission__Moderator mixins EClanPermission {}
  declare class EClanPermission__OwnerOfficerModerator mixins EClanPermission {}
  declare class EClanPermission__AllMembers mixins EClanPermission {}
  declare class EClanPermission__OGGGameOwner mixins EClanPermission {}
  declare class EClanPermission__NonMember mixins EClanPermission {}
  declare class EClanPermission__MemberAllowed mixins EClanPermission {}
  declare class EClanPermission__ModeratorAllowed mixins EClanPermission {}
  declare class EClanPermission__OfficerAllowed mixins EClanPermission {}
  declare class EClanPermission__OwnerAllowed mixins EClanPermission {}
  declare class EClanPermission__Anybody mixins EClanPermission {}

  declare export class EChatPermission {
    constructor(...args: empty): mixed;
    static +Close: Class<EChatPermission__Close> & EChatPermission__Close & 1; // 1
    static +Invite: Class<EChatPermission__Invite> &
      EChatPermission__Invite &
      2; // 2
    static +Talk: Class<EChatPermission__Talk> & EChatPermission__Talk & 8; // 8
    static +Kick: Class<EChatPermission__Kick> & EChatPermission__Kick & 16; // 16
    static +Mute: Class<EChatPermission__Mute> & EChatPermission__Mute & 32; // 32
    static +SetMetadata: Class<EChatPermission__SetMetadata> &
      EChatPermission__SetMetadata &
      64; // 64
    static +ChangePermissions: Class<EChatPermission__ChangePermissions> &
      EChatPermission__ChangePermissions &
      128; // 128
    static +Ban: Class<EChatPermission__Ban> & EChatPermission__Ban & 256; // 256
    static +ChangeAccess: Class<EChatPermission__ChangeAccess> &
      EChatPermission__ChangeAccess &
      512; // 512
    static +EveryoneNotInClanDefault: Class<EChatPermission__EveryoneNotInClanDefault> &
      EChatPermission__EveryoneNotInClanDefault &
      Talk; // Talk
    static +EveryoneDefault: Class<EChatPermission__EveryoneDefault> &
      EChatPermission__EveryoneDefault &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
    static +MemberDefault: Class<EChatPermission__MemberDefault> &
      EChatPermission__MemberDefault &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
    static +OfficerDefault: Class<EChatPermission__OfficerDefault> &
      EChatPermission__OfficerDefault &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
    static +OwnerDefault: Class<EChatPermission__OwnerDefault> &
      EChatPermission__OwnerDefault &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
    static +Mask: Class<EChatPermission__Mask> & EChatPermission__Mask & 1019; // 1019
  }

  declare class EChatPermission__Close mixins EChatPermission {}
  declare class EChatPermission__Invite mixins EChatPermission {}
  declare class EChatPermission__Talk mixins EChatPermission {}
  declare class EChatPermission__Kick mixins EChatPermission {}
  declare class EChatPermission__Mute mixins EChatPermission {}
  declare class EChatPermission__SetMetadata mixins EChatPermission {}
  declare class EChatPermission__ChangePermissions mixins EChatPermission {}
  declare class EChatPermission__Ban mixins EChatPermission {}
  declare class EChatPermission__ChangeAccess mixins EChatPermission {}
  declare class EChatPermission__EveryoneNotInClanDefault
    mixins EChatPermission {}
  declare class EChatPermission__EveryoneDefault mixins EChatPermission {}
  declare class EChatPermission__MemberDefault mixins EChatPermission {}
  declare class EChatPermission__OfficerDefault mixins EChatPermission {}
  declare class EChatPermission__OwnerDefault mixins EChatPermission {}
  declare class EChatPermission__Mask mixins EChatPermission {}

  declare export class EFriendFlags {
    constructor(...args: empty): mixed;
    static +None: Class<EFriendFlags__None> & EFriendFlags__None & 0; // 0
    static +Blocked: Class<EFriendFlags__Blocked> & EFriendFlags__Blocked & 1; // 1
    static +FriendshipRequested: Class<EFriendFlags__FriendshipRequested> &
      EFriendFlags__FriendshipRequested &
      2; // 2
    static +Immediate: Class<EFriendFlags__Immediate> &
      EFriendFlags__Immediate &
      4; // 4
    static +ClanMember: Class<EFriendFlags__ClanMember> &
      EFriendFlags__ClanMember &
      8; // 8
    static +OnGameServer: Class<EFriendFlags__OnGameServer> &
      EFriendFlags__OnGameServer &
      16; // 16
    static +RequestingFriendship: Class<EFriendFlags__RequestingFriendship> &
      EFriendFlags__RequestingFriendship &
      128; // 128
    static +RequestingInfo: Class<EFriendFlags__RequestingInfo> &
      EFriendFlags__RequestingInfo &
      256; // 256
    static +Ignored: Class<EFriendFlags__Ignored> & EFriendFlags__Ignored & 512; // 512
    static +IgnoredFriend: Class<EFriendFlags__IgnoredFriend> &
      EFriendFlags__IgnoredFriend &
      1024; // 1024
    static +Suggested: Class<EFriendFlags__Suggested> &
      EFriendFlags__Suggested &
      2048; // 2048
    static +ChatMember: Class<EFriendFlags__ChatMember> &
      EFriendFlags__ChatMember &
      4096; // 4096
    static +FlagAll: Class<EFriendFlags__FlagAll> &
      EFriendFlags__FlagAll &
      65535; // 65535
  }

  declare class EFriendFlags__None mixins EFriendFlags {}
  declare class EFriendFlags__Blocked mixins EFriendFlags {}
  declare class EFriendFlags__FriendshipRequested mixins EFriendFlags {}
  declare class EFriendFlags__Immediate mixins EFriendFlags {}
  declare class EFriendFlags__ClanMember mixins EFriendFlags {}
  declare class EFriendFlags__OnGameServer mixins EFriendFlags {}
  declare class EFriendFlags__RequestingFriendship mixins EFriendFlags {}
  declare class EFriendFlags__RequestingInfo mixins EFriendFlags {}
  declare class EFriendFlags__Ignored mixins EFriendFlags {}
  declare class EFriendFlags__IgnoredFriend mixins EFriendFlags {}
  declare class EFriendFlags__Suggested mixins EFriendFlags {}
  declare class EFriendFlags__ChatMember mixins EFriendFlags {}
  declare class EFriendFlags__FlagAll mixins EFriendFlags {}

  declare export class EPersonaStateFlag {
    constructor(...args: empty): mixed;
    static +HasRichPresence: Class<EPersonaStateFlag__HasRichPresence> &
      EPersonaStateFlag__HasRichPresence &
      1; // 1
    static +InJoinableGame: Class<EPersonaStateFlag__InJoinableGame> &
      EPersonaStateFlag__InJoinableGame &
      2; // 2
    static +Golden: Class<EPersonaStateFlag__Golden> &
      EPersonaStateFlag__Golden &
      4; // 4
    static +OnlineUsingWeb: Class<EPersonaStateFlag__OnlineUsingWeb> &
      EPersonaStateFlag__OnlineUsingWeb &
      256; // 256
    static +ClientTypeWeb: Class<EPersonaStateFlag__ClientTypeWeb> &
      EPersonaStateFlag__ClientTypeWeb &
      256; // 256
    static +OnlineUsingMobile: Class<EPersonaStateFlag__OnlineUsingMobile> &
      EPersonaStateFlag__OnlineUsingMobile &
      512; // 512
    static +ClientTypeMobile: Class<EPersonaStateFlag__ClientTypeMobile> &
      EPersonaStateFlag__ClientTypeMobile &
      512; // 512
    static +OnlineUsingBigPicture: Class<EPersonaStateFlag__OnlineUsingBigPicture> &
      EPersonaStateFlag__OnlineUsingBigPicture &
      1024; // 1024
    static +ClientTypeTenfoot: Class<EPersonaStateFlag__ClientTypeTenfoot> &
      EPersonaStateFlag__ClientTypeTenfoot &
      1024; // 1024
    static +OnlineUsingVR: Class<EPersonaStateFlag__OnlineUsingVR> &
      EPersonaStateFlag__OnlineUsingVR &
      2048; // 2048
    static +ClientTypeVR: Class<EPersonaStateFlag__ClientTypeVR> &
      EPersonaStateFlag__ClientTypeVR &
      2048; // 2048
    static +LaunchTypeGamepad: Class<EPersonaStateFlag__LaunchTypeGamepad> &
      EPersonaStateFlag__LaunchTypeGamepad &
      4096; // 4096
  }

  declare class EPersonaStateFlag__HasRichPresence mixins EPersonaStateFlag {}
  declare class EPersonaStateFlag__InJoinableGame mixins EPersonaStateFlag {}
  declare class EPersonaStateFlag__Golden mixins EPersonaStateFlag {}
  declare class EPersonaStateFlag__OnlineUsingWeb mixins EPersonaStateFlag {}
  declare class EPersonaStateFlag__ClientTypeWeb mixins EPersonaStateFlag {}
  declare class EPersonaStateFlag__OnlineUsingMobile mixins EPersonaStateFlag {}
  declare class EPersonaStateFlag__ClientTypeMobile mixins EPersonaStateFlag {}
  declare class EPersonaStateFlag__OnlineUsingBigPicture
    mixins EPersonaStateFlag {}
  declare class EPersonaStateFlag__ClientTypeTenfoot mixins EPersonaStateFlag {}
  declare class EPersonaStateFlag__OnlineUsingVR mixins EPersonaStateFlag {}
  declare class EPersonaStateFlag__ClientTypeVR mixins EPersonaStateFlag {}
  declare class EPersonaStateFlag__LaunchTypeGamepad mixins EPersonaStateFlag {}

  declare export class EClientPersonaStateFlag {
    constructor(...args: empty): mixed;
    static +Status: Class<EClientPersonaStateFlag__Status> &
      EClientPersonaStateFlag__Status &
      1; // 1
    static +PlayerName: Class<EClientPersonaStateFlag__PlayerName> &
      EClientPersonaStateFlag__PlayerName &
      2; // 2
    static +QueryPort: Class<EClientPersonaStateFlag__QueryPort> &
      EClientPersonaStateFlag__QueryPort &
      4; // 4
    static +SourceID: Class<EClientPersonaStateFlag__SourceID> &
      EClientPersonaStateFlag__SourceID &
      8; // 8
    static +Presence: Class<EClientPersonaStateFlag__Presence> &
      EClientPersonaStateFlag__Presence &
      16; // 16
    static +Metadata: Class<EClientPersonaStateFlag__Metadata> &
      EClientPersonaStateFlag__Metadata &
      32; // 32
    static +LastSeen: Class<EClientPersonaStateFlag__LastSeen> &
      EClientPersonaStateFlag__LastSeen &
      64; // 64
    static +ClanInfo: Class<EClientPersonaStateFlag__ClanInfo> &
      EClientPersonaStateFlag__ClanInfo &
      128; // 128
    static +GameExtraInfo: Class<EClientPersonaStateFlag__GameExtraInfo> &
      EClientPersonaStateFlag__GameExtraInfo &
      256; // 256
    static +GameDataBlob: Class<EClientPersonaStateFlag__GameDataBlob> &
      EClientPersonaStateFlag__GameDataBlob &
      512; // 512
    static +ClanTag: Class<EClientPersonaStateFlag__ClanTag> &
      EClientPersonaStateFlag__ClanTag &
      1024; // 1024
    static +Facebook: Class<EClientPersonaStateFlag__Facebook> &
      EClientPersonaStateFlag__Facebook &
      2048; // 2048
  }

  declare class EClientPersonaStateFlag__Status
    mixins EClientPersonaStateFlag {}
  declare class EClientPersonaStateFlag__PlayerName
    mixins EClientPersonaStateFlag {}
  declare class EClientPersonaStateFlag__QueryPort
    mixins EClientPersonaStateFlag {}
  declare class EClientPersonaStateFlag__SourceID
    mixins EClientPersonaStateFlag {}
  declare class EClientPersonaStateFlag__Presence
    mixins EClientPersonaStateFlag {}
  declare class EClientPersonaStateFlag__Metadata
    mixins EClientPersonaStateFlag {}
  declare class EClientPersonaStateFlag__LastSeen
    mixins EClientPersonaStateFlag {}
  declare class EClientPersonaStateFlag__ClanInfo
    mixins EClientPersonaStateFlag {}
  declare class EClientPersonaStateFlag__GameExtraInfo
    mixins EClientPersonaStateFlag {}
  declare class EClientPersonaStateFlag__GameDataBlob
    mixins EClientPersonaStateFlag {}
  declare class EClientPersonaStateFlag__ClanTag
    mixins EClientPersonaStateFlag {}
  declare class EClientPersonaStateFlag__Facebook
    mixins EClientPersonaStateFlag {}

  declare export class EAppUsageEvent {
    constructor(...args: empty): mixed;
    static +GameLaunch: Class<EAppUsageEvent__GameLaunch> &
      EAppUsageEvent__GameLaunch &
      1; // 1
    static +GameLaunchTrial: Class<EAppUsageEvent__GameLaunchTrial> &
      EAppUsageEvent__GameLaunchTrial &
      2; // 2
    static +Media: Class<EAppUsageEvent__Media> & EAppUsageEvent__Media & 3; // 3
    static +PreloadStart: Class<EAppUsageEvent__PreloadStart> &
      EAppUsageEvent__PreloadStart &
      4; // 4
    static +PreloadFinish: Class<EAppUsageEvent__PreloadFinish> &
      EAppUsageEvent__PreloadFinish &
      5; // 5
    static +MarketingMessageView: Class<EAppUsageEvent__MarketingMessageView> &
      EAppUsageEvent__MarketingMessageView &
      6; // 6
    static +InGameAdViewed: Class<EAppUsageEvent__InGameAdViewed> &
      EAppUsageEvent__InGameAdViewed &
      7; // 7
    static +GameLaunchFreeWeekend: Class<EAppUsageEvent__GameLaunchFreeWeekend> &
      EAppUsageEvent__GameLaunchFreeWeekend &
      8; // 8
  }

  declare class EAppUsageEvent__GameLaunch mixins EAppUsageEvent {}
  declare class EAppUsageEvent__GameLaunchTrial mixins EAppUsageEvent {}
  declare class EAppUsageEvent__Media mixins EAppUsageEvent {}
  declare class EAppUsageEvent__PreloadStart mixins EAppUsageEvent {}
  declare class EAppUsageEvent__PreloadFinish mixins EAppUsageEvent {}
  declare class EAppUsageEvent__MarketingMessageView mixins EAppUsageEvent {}
  declare class EAppUsageEvent__InGameAdViewed mixins EAppUsageEvent {}
  declare class EAppUsageEvent__GameLaunchFreeWeekend mixins EAppUsageEvent {}

  declare export class ELicenseFlags {
    constructor(...args: empty): mixed;
    static +None: Class<ELicenseFlags__None> & ELicenseFlags__None & 0; // 0
    static +Renew: Class<ELicenseFlags__Renew> & ELicenseFlags__Renew & 1; // 1
    static +RenewalFailed: Class<ELicenseFlags__RenewalFailed> &
      ELicenseFlags__RenewalFailed &
      2; // 2
    static +Pending: Class<ELicenseFlags__Pending> & ELicenseFlags__Pending & 4; // 4
    static +Expired: Class<ELicenseFlags__Expired> & ELicenseFlags__Expired & 8; // 8
    static +CancelledByUser: Class<ELicenseFlags__CancelledByUser> &
      ELicenseFlags__CancelledByUser &
      16; // 16
    static +CancelledByAdmin: Class<ELicenseFlags__CancelledByAdmin> &
      ELicenseFlags__CancelledByAdmin &
      32; // 32
    static +LowViolenceContent: Class<ELicenseFlags__LowViolenceContent> &
      ELicenseFlags__LowViolenceContent &
      64; // 64
    static +ImportedFromSteam2: Class<ELicenseFlags__ImportedFromSteam2> &
      ELicenseFlags__ImportedFromSteam2 &
      128; // 128
    static +ForceRunRestriction: Class<ELicenseFlags__ForceRunRestriction> &
      ELicenseFlags__ForceRunRestriction &
      256; // 256
    static +RegionRestrictionExpired: Class<ELicenseFlags__RegionRestrictionExpired> &
      ELicenseFlags__RegionRestrictionExpired &
      512; // 512
    static +CancelledByFriendlyFraudLock: Class<ELicenseFlags__CancelledByFriendlyFraudLock> &
      ELicenseFlags__CancelledByFriendlyFraudLock &
      1024; // 1024
    static +NotActivated: Class<ELicenseFlags__NotActivated> &
      ELicenseFlags__NotActivated &
      2048; // 2048
  }

  declare class ELicenseFlags__None mixins ELicenseFlags {}
  declare class ELicenseFlags__Renew mixins ELicenseFlags {}
  declare class ELicenseFlags__RenewalFailed mixins ELicenseFlags {}
  declare class ELicenseFlags__Pending mixins ELicenseFlags {}
  declare class ELicenseFlags__Expired mixins ELicenseFlags {}
  declare class ELicenseFlags__CancelledByUser mixins ELicenseFlags {}
  declare class ELicenseFlags__CancelledByAdmin mixins ELicenseFlags {}
  declare class ELicenseFlags__LowViolenceContent mixins ELicenseFlags {}
  declare class ELicenseFlags__ImportedFromSteam2 mixins ELicenseFlags {}
  declare class ELicenseFlags__ForceRunRestriction mixins ELicenseFlags {}
  declare class ELicenseFlags__RegionRestrictionExpired mixins ELicenseFlags {}
  declare class ELicenseFlags__CancelledByFriendlyFraudLock
    mixins ELicenseFlags {}
  declare class ELicenseFlags__NotActivated mixins ELicenseFlags {}

  declare export class ELicenseType {
    constructor(...args: empty): mixed;
    static +NoLicense: Class<ELicenseType__NoLicense> &
      ELicenseType__NoLicense &
      0; // 0
    static +SinglePurchase: Class<ELicenseType__SinglePurchase> &
      ELicenseType__SinglePurchase &
      1; // 1
    static +SinglePurchaseLimitedUse: Class<ELicenseType__SinglePurchaseLimitedUse> &
      ELicenseType__SinglePurchaseLimitedUse &
      2; // 2
    static +RecurringCharge: Class<ELicenseType__RecurringCharge> &
      ELicenseType__RecurringCharge &
      3; // 3
    static +RecurringChargeLimitedUse: Class<ELicenseType__RecurringChargeLimitedUse> &
      ELicenseType__RecurringChargeLimitedUse &
      4; // 4
    static +RecurringChargeLimitedUseWithOverages: Class<ELicenseType__RecurringChargeLimitedUseWithOverages> &
      ELicenseType__RecurringChargeLimitedUseWithOverages &
      5; // 5
    static +RecurringOption: Class<ELicenseType__RecurringOption> &
      ELicenseType__RecurringOption &
      6; // 6
    static +LimitedUseDelayedActivation: Class<ELicenseType__LimitedUseDelayedActivation> &
      ELicenseType__LimitedUseDelayedActivation &
      7; // 7
  }

  declare class ELicenseType__NoLicense mixins ELicenseType {}
  declare class ELicenseType__SinglePurchase mixins ELicenseType {}
  declare class ELicenseType__SinglePurchaseLimitedUse mixins ELicenseType {}
  declare class ELicenseType__RecurringCharge mixins ELicenseType {}
  declare class ELicenseType__RecurringChargeLimitedUse mixins ELicenseType {}
  declare class ELicenseType__RecurringChargeLimitedUseWithOverages
    mixins ELicenseType {}
  declare class ELicenseType__RecurringOption mixins ELicenseType {}
  declare class ELicenseType__LimitedUseDelayedActivation mixins ELicenseType {}

  declare export class EPaymentMethod {
    constructor(...args: empty): mixed;
    static +None: Class<EPaymentMethod__None> & EPaymentMethod__None & 0; // 0
    static +ActivationCode: Class<EPaymentMethod__ActivationCode> &
      EPaymentMethod__ActivationCode &
      1; // 1
    static +CreditCard: Class<EPaymentMethod__CreditCard> &
      EPaymentMethod__CreditCard &
      2; // 2
    static +Giropay: Class<EPaymentMethod__Giropay> &
      EPaymentMethod__Giropay &
      3; // 3
    static +PayPal: Class<EPaymentMethod__PayPal> & EPaymentMethod__PayPal & 4; // 4
    static +Ideal: Class<EPaymentMethod__Ideal> & EPaymentMethod__Ideal & 5; // 5
    static +PaySafeCard: Class<EPaymentMethod__PaySafeCard> &
      EPaymentMethod__PaySafeCard &
      6; // 6
    static +Sofort: Class<EPaymentMethod__Sofort> & EPaymentMethod__Sofort & 7; // 7
    static +GuestPass: Class<EPaymentMethod__GuestPass> &
      EPaymentMethod__GuestPass &
      8; // 8
    static +WebMoney: Class<EPaymentMethod__WebMoney> &
      EPaymentMethod__WebMoney &
      9; // 9
    static +MoneyBookers: Class<EPaymentMethod__MoneyBookers> &
      EPaymentMethod__MoneyBookers &
      10; // 10
    static +AliPay: Class<EPaymentMethod__AliPay> & EPaymentMethod__AliPay & 11; // 11
    static +Yandex: Class<EPaymentMethod__Yandex> & EPaymentMethod__Yandex & 12; // 12
    static +Kiosk: Class<EPaymentMethod__Kiosk> & EPaymentMethod__Kiosk & 13; // 13
    static +Qiwi: Class<EPaymentMethod__Qiwi> & EPaymentMethod__Qiwi & 14; // 14
    static +GameStop: Class<EPaymentMethod__GameStop> &
      EPaymentMethod__GameStop &
      15; // 15
    static +HardwarePromo: Class<EPaymentMethod__HardwarePromo> &
      EPaymentMethod__HardwarePromo &
      16; // 16
    static +MoPay: Class<EPaymentMethod__MoPay> & EPaymentMethod__MoPay & 17; // 17
    static +BoletoBancario: Class<EPaymentMethod__BoletoBancario> &
      EPaymentMethod__BoletoBancario &
      18; // 18
    static +BoaCompraGold: Class<EPaymentMethod__BoaCompraGold> &
      EPaymentMethod__BoaCompraGold &
      19; // 19
    static +BancoDoBrasilOnline: Class<EPaymentMethod__BancoDoBrasilOnline> &
      EPaymentMethod__BancoDoBrasilOnline &
      20; // 20
    static +ItauOnline: Class<EPaymentMethod__ItauOnline> &
      EPaymentMethod__ItauOnline &
      21; // 21
    static +BradescoOnline: Class<EPaymentMethod__BradescoOnline> &
      EPaymentMethod__BradescoOnline &
      22; // 22
    static +Pagseguro: Class<EPaymentMethod__Pagseguro> &
      EPaymentMethod__Pagseguro &
      23; // 23
    static +VisaBrazil: Class<EPaymentMethod__VisaBrazil> &
      EPaymentMethod__VisaBrazil &
      24; // 24
    static +AmexBrazil: Class<EPaymentMethod__AmexBrazil> &
      EPaymentMethod__AmexBrazil &
      25; // 25
    static +Aura: Class<EPaymentMethod__Aura> & EPaymentMethod__Aura & 26; // 26
    static +Hipercard: Class<EPaymentMethod__Hipercard> &
      EPaymentMethod__Hipercard &
      27; // 27
    static +MastercardBrazil: Class<EPaymentMethod__MastercardBrazil> &
      EPaymentMethod__MastercardBrazil &
      28; // 28
    static +DinersCardBrazil: Class<EPaymentMethod__DinersCardBrazil> &
      EPaymentMethod__DinersCardBrazil &
      29; // 29
    static +AuthorizedDevice: Class<EPaymentMethod__AuthorizedDevice> &
      EPaymentMethod__AuthorizedDevice &
      30; // 30
    static +MOLPoints: Class<EPaymentMethod__MOLPoints> &
      EPaymentMethod__MOLPoints &
      31; // 31
    static +ClickAndBuy: Class<EPaymentMethod__ClickAndBuy> &
      EPaymentMethod__ClickAndBuy &
      32; // 32
    static +Beeline: Class<EPaymentMethod__Beeline> &
      EPaymentMethod__Beeline &
      33; // 33
    static +Konbini: Class<EPaymentMethod__Konbini> &
      EPaymentMethod__Konbini &
      34; // 34
    static +EClubPoints: Class<EPaymentMethod__EClubPoints> &
      EPaymentMethod__EClubPoints &
      35; // 35
    static +CreditCardJapan: Class<EPaymentMethod__CreditCardJapan> &
      EPaymentMethod__CreditCardJapan &
      36; // 36
    static +BankTransferJapan: Class<EPaymentMethod__BankTransferJapan> &
      EPaymentMethod__BankTransferJapan &
      37; // 37
    static +PayEasyJapan: Class<EPaymentMethod__PayEasyJapan> &
      EPaymentMethod__PayEasyJapan &
      38; // 38
    static +PayEasy: Class<EPaymentMethod__PayEasy> &
      EPaymentMethod__PayEasy &
      38; // 38
    static +Zong: Class<EPaymentMethod__Zong> & EPaymentMethod__Zong & 39; // 39
    static +CultureVoucher: Class<EPaymentMethod__CultureVoucher> &
      EPaymentMethod__CultureVoucher &
      40; // 40
    static +BookVoucher: Class<EPaymentMethod__BookVoucher> &
      EPaymentMethod__BookVoucher &
      41; // 41
    static +HappymoneyVoucher: Class<EPaymentMethod__HappymoneyVoucher> &
      EPaymentMethod__HappymoneyVoucher &
      42; // 42
    static +ConvenientStoreVoucher: Class<EPaymentMethod__ConvenientStoreVoucher> &
      EPaymentMethod__ConvenientStoreVoucher &
      43; // 43
    static +GameVoucher: Class<EPaymentMethod__GameVoucher> &
      EPaymentMethod__GameVoucher &
      44; // 44
    static +Multibanco: Class<EPaymentMethod__Multibanco> &
      EPaymentMethod__Multibanco &
      45; // 45
    static +Payshop: Class<EPaymentMethod__Payshop> &
      EPaymentMethod__Payshop &
      46; // 46
    static +Maestro: Class<EPaymentMethod__Maestro> &
      EPaymentMethod__Maestro &
      47; // 47
    static +MaestroBoaCompra: Class<EPaymentMethod__MaestroBoaCompra> &
      EPaymentMethod__MaestroBoaCompra &
      47; // 47
    static +OXXO: Class<EPaymentMethod__OXXO> & EPaymentMethod__OXXO & 48; // 48
    static +ToditoCash: Class<EPaymentMethod__ToditoCash> &
      EPaymentMethod__ToditoCash &
      49; // 49
    static +Carnet: Class<EPaymentMethod__Carnet> & EPaymentMethod__Carnet & 50; // 50
    static +SPEI: Class<EPaymentMethod__SPEI> & EPaymentMethod__SPEI & 51; // 51
    static +ThreePay: Class<EPaymentMethod__ThreePay> &
      EPaymentMethod__ThreePay &
      52; // 52
    static +IsBank: Class<EPaymentMethod__IsBank> & EPaymentMethod__IsBank & 53; // 53
    static +Garanti: Class<EPaymentMethod__Garanti> &
      EPaymentMethod__Garanti &
      54; // 54
    static +Akbank: Class<EPaymentMethod__Akbank> & EPaymentMethod__Akbank & 55; // 55
    static +YapiKredi: Class<EPaymentMethod__YapiKredi> &
      EPaymentMethod__YapiKredi &
      56; // 56
    static +Halkbank: Class<EPaymentMethod__Halkbank> &
      EPaymentMethod__Halkbank &
      57; // 57
    static +BankAsya: Class<EPaymentMethod__BankAsya> &
      EPaymentMethod__BankAsya &
      58; // 58
    static +Finansbank: Class<EPaymentMethod__Finansbank> &
      EPaymentMethod__Finansbank &
      59; // 59
    static +DenizBank: Class<EPaymentMethod__DenizBank> &
      EPaymentMethod__DenizBank &
      60; // 60
    static +PTT: Class<EPaymentMethod__PTT> & EPaymentMethod__PTT & 61; // 61
    static +CashU: Class<EPaymentMethod__CashU> & EPaymentMethod__CashU & 62; // 62
    static +AutoGrant: Class<EPaymentMethod__AutoGrant> &
      EPaymentMethod__AutoGrant &
      64; // 64
    static +WebMoneyJapan: Class<EPaymentMethod__WebMoneyJapan> &
      EPaymentMethod__WebMoneyJapan &
      65; // 65
    static +OneCard: Class<EPaymentMethod__OneCard> &
      EPaymentMethod__OneCard &
      66; // 66
    static +PSE: Class<EPaymentMethod__PSE> & EPaymentMethod__PSE & 67; // 67
    static +Exito: Class<EPaymentMethod__Exito> & EPaymentMethod__Exito & 68; // 68
    static +Efecty: Class<EPaymentMethod__Efecty> & EPaymentMethod__Efecty & 69; // 69
    static +Paloto: Class<EPaymentMethod__Paloto> & EPaymentMethod__Paloto & 70; // 70
    static +PinValidda: Class<EPaymentMethod__PinValidda> &
      EPaymentMethod__PinValidda &
      71; // 71
    static +MangirKart: Class<EPaymentMethod__MangirKart> &
      EPaymentMethod__MangirKart &
      72; // 72
    static +BancoCreditoDePeru: Class<EPaymentMethod__BancoCreditoDePeru> &
      EPaymentMethod__BancoCreditoDePeru &
      73; // 73
    static +BBVAContinental: Class<EPaymentMethod__BBVAContinental> &
      EPaymentMethod__BBVAContinental &
      74; // 74
    static +SafetyPay: Class<EPaymentMethod__SafetyPay> &
      EPaymentMethod__SafetyPay &
      75; // 75
    static +PagoEfectivo: Class<EPaymentMethod__PagoEfectivo> &
      EPaymentMethod__PagoEfectivo &
      76; // 76
    static +Trustly: Class<EPaymentMethod__Trustly> &
      EPaymentMethod__Trustly &
      77; // 77
    static +UnionPay: Class<EPaymentMethod__UnionPay> &
      EPaymentMethod__UnionPay &
      78; // 78
    static +BitCoin: Class<EPaymentMethod__BitCoin> &
      EPaymentMethod__BitCoin &
      79; // 79
    static +Wallet: Class<EPaymentMethod__Wallet> &
      EPaymentMethod__Wallet &
      128; // 128
    static +Valve: Class<EPaymentMethod__Valve> & EPaymentMethod__Valve & 129; // 129
    static +SteamPressMaster: Class<EPaymentMethod__SteamPressMaster> &
      EPaymentMethod__SteamPressMaster &
      130; // 130
    static +MasterComp: Class<EPaymentMethod__MasterComp> &
      EPaymentMethod__MasterComp &
      130; // 130
    static +StorePromotion: Class<EPaymentMethod__StorePromotion> &
      EPaymentMethod__StorePromotion &
      131; // 131
    static +Promotional: Class<EPaymentMethod__Promotional> &
      EPaymentMethod__Promotional &
      131; // 131
    static +OEMTicket: Class<EPaymentMethod__OEMTicket> &
      EPaymentMethod__OEMTicket &
      256; // 256
    static +Split: Class<EPaymentMethod__Split> & EPaymentMethod__Split & 512; // 512
    static +Complimentary: Class<EPaymentMethod__Complimentary> &
      EPaymentMethod__Complimentary &
      1024; // 1024
  }

  declare class EPaymentMethod__None mixins EPaymentMethod {}
  declare class EPaymentMethod__ActivationCode mixins EPaymentMethod {}
  declare class EPaymentMethod__CreditCard mixins EPaymentMethod {}
  declare class EPaymentMethod__Giropay mixins EPaymentMethod {}
  declare class EPaymentMethod__PayPal mixins EPaymentMethod {}
  declare class EPaymentMethod__Ideal mixins EPaymentMethod {}
  declare class EPaymentMethod__PaySafeCard mixins EPaymentMethod {}
  declare class EPaymentMethod__Sofort mixins EPaymentMethod {}
  declare class EPaymentMethod__GuestPass mixins EPaymentMethod {}
  declare class EPaymentMethod__WebMoney mixins EPaymentMethod {}
  declare class EPaymentMethod__MoneyBookers mixins EPaymentMethod {}
  declare class EPaymentMethod__AliPay mixins EPaymentMethod {}
  declare class EPaymentMethod__Yandex mixins EPaymentMethod {}
  declare class EPaymentMethod__Kiosk mixins EPaymentMethod {}
  declare class EPaymentMethod__Qiwi mixins EPaymentMethod {}
  declare class EPaymentMethod__GameStop mixins EPaymentMethod {}
  declare class EPaymentMethod__HardwarePromo mixins EPaymentMethod {}
  declare class EPaymentMethod__MoPay mixins EPaymentMethod {}
  declare class EPaymentMethod__BoletoBancario mixins EPaymentMethod {}
  declare class EPaymentMethod__BoaCompraGold mixins EPaymentMethod {}
  declare class EPaymentMethod__BancoDoBrasilOnline mixins EPaymentMethod {}
  declare class EPaymentMethod__ItauOnline mixins EPaymentMethod {}
  declare class EPaymentMethod__BradescoOnline mixins EPaymentMethod {}
  declare class EPaymentMethod__Pagseguro mixins EPaymentMethod {}
  declare class EPaymentMethod__VisaBrazil mixins EPaymentMethod {}
  declare class EPaymentMethod__AmexBrazil mixins EPaymentMethod {}
  declare class EPaymentMethod__Aura mixins EPaymentMethod {}
  declare class EPaymentMethod__Hipercard mixins EPaymentMethod {}
  declare class EPaymentMethod__MastercardBrazil mixins EPaymentMethod {}
  declare class EPaymentMethod__DinersCardBrazil mixins EPaymentMethod {}
  declare class EPaymentMethod__AuthorizedDevice mixins EPaymentMethod {}
  declare class EPaymentMethod__MOLPoints mixins EPaymentMethod {}
  declare class EPaymentMethod__ClickAndBuy mixins EPaymentMethod {}
  declare class EPaymentMethod__Beeline mixins EPaymentMethod {}
  declare class EPaymentMethod__Konbini mixins EPaymentMethod {}
  declare class EPaymentMethod__EClubPoints mixins EPaymentMethod {}
  declare class EPaymentMethod__CreditCardJapan mixins EPaymentMethod {}
  declare class EPaymentMethod__BankTransferJapan mixins EPaymentMethod {}
  declare class EPaymentMethod__PayEasyJapan mixins EPaymentMethod {}
  declare class EPaymentMethod__PayEasy mixins EPaymentMethod {}
  declare class EPaymentMethod__Zong mixins EPaymentMethod {}
  declare class EPaymentMethod__CultureVoucher mixins EPaymentMethod {}
  declare class EPaymentMethod__BookVoucher mixins EPaymentMethod {}
  declare class EPaymentMethod__HappymoneyVoucher mixins EPaymentMethod {}
  declare class EPaymentMethod__ConvenientStoreVoucher mixins EPaymentMethod {}
  declare class EPaymentMethod__GameVoucher mixins EPaymentMethod {}
  declare class EPaymentMethod__Multibanco mixins EPaymentMethod {}
  declare class EPaymentMethod__Payshop mixins EPaymentMethod {}
  declare class EPaymentMethod__Maestro mixins EPaymentMethod {}
  declare class EPaymentMethod__MaestroBoaCompra mixins EPaymentMethod {}
  declare class EPaymentMethod__OXXO mixins EPaymentMethod {}
  declare class EPaymentMethod__ToditoCash mixins EPaymentMethod {}
  declare class EPaymentMethod__Carnet mixins EPaymentMethod {}
  declare class EPaymentMethod__SPEI mixins EPaymentMethod {}
  declare class EPaymentMethod__ThreePay mixins EPaymentMethod {}
  declare class EPaymentMethod__IsBank mixins EPaymentMethod {}
  declare class EPaymentMethod__Garanti mixins EPaymentMethod {}
  declare class EPaymentMethod__Akbank mixins EPaymentMethod {}
  declare class EPaymentMethod__YapiKredi mixins EPaymentMethod {}
  declare class EPaymentMethod__Halkbank mixins EPaymentMethod {}
  declare class EPaymentMethod__BankAsya mixins EPaymentMethod {}
  declare class EPaymentMethod__Finansbank mixins EPaymentMethod {}
  declare class EPaymentMethod__DenizBank mixins EPaymentMethod {}
  declare class EPaymentMethod__PTT mixins EPaymentMethod {}
  declare class EPaymentMethod__CashU mixins EPaymentMethod {}
  declare class EPaymentMethod__AutoGrant mixins EPaymentMethod {}
  declare class EPaymentMethod__WebMoneyJapan mixins EPaymentMethod {}
  declare class EPaymentMethod__OneCard mixins EPaymentMethod {}
  declare class EPaymentMethod__PSE mixins EPaymentMethod {}
  declare class EPaymentMethod__Exito mixins EPaymentMethod {}
  declare class EPaymentMethod__Efecty mixins EPaymentMethod {}
  declare class EPaymentMethod__Paloto mixins EPaymentMethod {}
  declare class EPaymentMethod__PinValidda mixins EPaymentMethod {}
  declare class EPaymentMethod__MangirKart mixins EPaymentMethod {}
  declare class EPaymentMethod__BancoCreditoDePeru mixins EPaymentMethod {}
  declare class EPaymentMethod__BBVAContinental mixins EPaymentMethod {}
  declare class EPaymentMethod__SafetyPay mixins EPaymentMethod {}
  declare class EPaymentMethod__PagoEfectivo mixins EPaymentMethod {}
  declare class EPaymentMethod__Trustly mixins EPaymentMethod {}
  declare class EPaymentMethod__UnionPay mixins EPaymentMethod {}
  declare class EPaymentMethod__BitCoin mixins EPaymentMethod {}
  declare class EPaymentMethod__Wallet mixins EPaymentMethod {}
  declare class EPaymentMethod__Valve mixins EPaymentMethod {}
  declare class EPaymentMethod__SteamPressMaster mixins EPaymentMethod {}
  declare class EPaymentMethod__MasterComp mixins EPaymentMethod {}
  declare class EPaymentMethod__StorePromotion mixins EPaymentMethod {}
  declare class EPaymentMethod__Promotional mixins EPaymentMethod {}
  declare class EPaymentMethod__OEMTicket mixins EPaymentMethod {}
  declare class EPaymentMethod__Split mixins EPaymentMethod {}
  declare class EPaymentMethod__Complimentary mixins EPaymentMethod {}

  declare export class EPurchaseResultDetail {
    constructor(...args: empty): mixed;
    static +NoDetail: Class<EPurchaseResultDetail__NoDetail> &
      EPurchaseResultDetail__NoDetail &
      0; // 0
    static +AVSFailure: Class<EPurchaseResultDetail__AVSFailure> &
      EPurchaseResultDetail__AVSFailure &
      1; // 1
    static +InsufficientFunds: Class<EPurchaseResultDetail__InsufficientFunds> &
      EPurchaseResultDetail__InsufficientFunds &
      2; // 2
    static +ContactSupport: Class<EPurchaseResultDetail__ContactSupport> &
      EPurchaseResultDetail__ContactSupport &
      3; // 3
    static +Timeout: Class<EPurchaseResultDetail__Timeout> &
      EPurchaseResultDetail__Timeout &
      4; // 4
    static +InvalidPackage: Class<EPurchaseResultDetail__InvalidPackage> &
      EPurchaseResultDetail__InvalidPackage &
      5; // 5
    static +InvalidPaymentMethod: Class<EPurchaseResultDetail__InvalidPaymentMethod> &
      EPurchaseResultDetail__InvalidPaymentMethod &
      6; // 6
    static +InvalidData: Class<EPurchaseResultDetail__InvalidData> &
      EPurchaseResultDetail__InvalidData &
      7; // 7
    static +OthersInProgress: Class<EPurchaseResultDetail__OthersInProgress> &
      EPurchaseResultDetail__OthersInProgress &
      8; // 8
    static +AlreadyPurchased: Class<EPurchaseResultDetail__AlreadyPurchased> &
      EPurchaseResultDetail__AlreadyPurchased &
      9; // 9
    static +WrongPrice: Class<EPurchaseResultDetail__WrongPrice> &
      EPurchaseResultDetail__WrongPrice &
      10; // 10
    static +FraudCheckFailed: Class<EPurchaseResultDetail__FraudCheckFailed> &
      EPurchaseResultDetail__FraudCheckFailed &
      11; // 11
    static +CancelledByUser: Class<EPurchaseResultDetail__CancelledByUser> &
      EPurchaseResultDetail__CancelledByUser &
      12; // 12
    static +RestrictedCountry: Class<EPurchaseResultDetail__RestrictedCountry> &
      EPurchaseResultDetail__RestrictedCountry &
      13; // 13
    static +BadActivationCode: Class<EPurchaseResultDetail__BadActivationCode> &
      EPurchaseResultDetail__BadActivationCode &
      14; // 14
    static +DuplicateActivationCode: Class<EPurchaseResultDetail__DuplicateActivationCode> &
      EPurchaseResultDetail__DuplicateActivationCode &
      15; // 15
    static +UseOtherPaymentMethod: Class<EPurchaseResultDetail__UseOtherPaymentMethod> &
      EPurchaseResultDetail__UseOtherPaymentMethod &
      16; // 16
    static +UseOtherFunctionSource: Class<EPurchaseResultDetail__UseOtherFunctionSource> &
      EPurchaseResultDetail__UseOtherFunctionSource &
      17; // 17
    static +InvalidShippingAddress: Class<EPurchaseResultDetail__InvalidShippingAddress> &
      EPurchaseResultDetail__InvalidShippingAddress &
      18; // 18
    static +RegionNotSupported: Class<EPurchaseResultDetail__RegionNotSupported> &
      EPurchaseResultDetail__RegionNotSupported &
      19; // 19
    static +AcctIsBlocked: Class<EPurchaseResultDetail__AcctIsBlocked> &
      EPurchaseResultDetail__AcctIsBlocked &
      20; // 20
    static +AcctNotVerified: Class<EPurchaseResultDetail__AcctNotVerified> &
      EPurchaseResultDetail__AcctNotVerified &
      21; // 21
    static +InvalidAccount: Class<EPurchaseResultDetail__InvalidAccount> &
      EPurchaseResultDetail__InvalidAccount &
      22; // 22
    static +StoreBillingCountryMismatch: Class<EPurchaseResultDetail__StoreBillingCountryMismatch> &
      EPurchaseResultDetail__StoreBillingCountryMismatch &
      23; // 23
    static +DoesNotOwnRequiredApp: Class<EPurchaseResultDetail__DoesNotOwnRequiredApp> &
      EPurchaseResultDetail__DoesNotOwnRequiredApp &
      24; // 24
    static +CanceledByNewTransaction: Class<EPurchaseResultDetail__CanceledByNewTransaction> &
      EPurchaseResultDetail__CanceledByNewTransaction &
      25; // 25
    static +ForceCanceledPending: Class<EPurchaseResultDetail__ForceCanceledPending> &
      EPurchaseResultDetail__ForceCanceledPending &
      26; // 26
    static +FailCurrencyTransProvider: Class<EPurchaseResultDetail__FailCurrencyTransProvider> &
      EPurchaseResultDetail__FailCurrencyTransProvider &
      27; // 27
    static +FailedCyberCafe: Class<EPurchaseResultDetail__FailedCyberCafe> &
      EPurchaseResultDetail__FailedCyberCafe &
      28; // 28
    static +NeedsPreApproval: Class<EPurchaseResultDetail__NeedsPreApproval> &
      EPurchaseResultDetail__NeedsPreApproval &
      29; // 29
    static +PreApprovalDenied: Class<EPurchaseResultDetail__PreApprovalDenied> &
      EPurchaseResultDetail__PreApprovalDenied &
      30; // 30
    static +WalletCurrencyMismatch: Class<EPurchaseResultDetail__WalletCurrencyMismatch> &
      EPurchaseResultDetail__WalletCurrencyMismatch &
      31; // 31
    static +EmailNotValidated: Class<EPurchaseResultDetail__EmailNotValidated> &
      EPurchaseResultDetail__EmailNotValidated &
      32; // 32
    static +ExpiredCard: Class<EPurchaseResultDetail__ExpiredCard> &
      EPurchaseResultDetail__ExpiredCard &
      33; // 33
    static +TransactionExpired: Class<EPurchaseResultDetail__TransactionExpired> &
      EPurchaseResultDetail__TransactionExpired &
      34; // 34
    static +WouldExceedMaxWallet: Class<EPurchaseResultDetail__WouldExceedMaxWallet> &
      EPurchaseResultDetail__WouldExceedMaxWallet &
      35; // 35
    static +MustLoginPS3AppForPurchase: Class<EPurchaseResultDetail__MustLoginPS3AppForPurchase> &
      EPurchaseResultDetail__MustLoginPS3AppForPurchase &
      36; // 36
    static +CannotShipToPOBox: Class<EPurchaseResultDetail__CannotShipToPOBox> &
      EPurchaseResultDetail__CannotShipToPOBox &
      37; // 37
    static +InsufficientInventory: Class<EPurchaseResultDetail__InsufficientInventory> &
      EPurchaseResultDetail__InsufficientInventory &
      38; // 38
    static +CannotGiftShippedGoods: Class<EPurchaseResultDetail__CannotGiftShippedGoods> &
      EPurchaseResultDetail__CannotGiftShippedGoods &
      39; // 39
    static +CannotShipInternationally: Class<EPurchaseResultDetail__CannotShipInternationally> &
      EPurchaseResultDetail__CannotShipInternationally &
      40; // 40
    static +BillingAgreementCancelled: Class<EPurchaseResultDetail__BillingAgreementCancelled> &
      EPurchaseResultDetail__BillingAgreementCancelled &
      41; // 41
    static +InvalidCoupon: Class<EPurchaseResultDetail__InvalidCoupon> &
      EPurchaseResultDetail__InvalidCoupon &
      42; // 42
    static +ExpiredCoupon: Class<EPurchaseResultDetail__ExpiredCoupon> &
      EPurchaseResultDetail__ExpiredCoupon &
      43; // 43
    static +AccountLocked: Class<EPurchaseResultDetail__AccountLocked> &
      EPurchaseResultDetail__AccountLocked &
      44; // 44
    static +OtherAbortableInProgress: Class<EPurchaseResultDetail__OtherAbortableInProgress> &
      EPurchaseResultDetail__OtherAbortableInProgress &
      45; // 45
    static +ExceededSteamLimit: Class<EPurchaseResultDetail__ExceededSteamLimit> &
      EPurchaseResultDetail__ExceededSteamLimit &
      46; // 46
    static +OverlappingPackagesInCart: Class<EPurchaseResultDetail__OverlappingPackagesInCart> &
      EPurchaseResultDetail__OverlappingPackagesInCart &
      47; // 47
    static +NoWallet: Class<EPurchaseResultDetail__NoWallet> &
      EPurchaseResultDetail__NoWallet &
      48; // 48
    static +NoCachedPaymentMethod: Class<EPurchaseResultDetail__NoCachedPaymentMethod> &
      EPurchaseResultDetail__NoCachedPaymentMethod &
      49; // 49
    static +CannotRedeemCodeFromClient: Class<EPurchaseResultDetail__CannotRedeemCodeFromClient> &
      EPurchaseResultDetail__CannotRedeemCodeFromClient &
      50; // 50
    static +PurchaseAmountNoSupportedByProvider: Class<EPurchaseResultDetail__PurchaseAmountNoSupportedByProvider> &
      EPurchaseResultDetail__PurchaseAmountNoSupportedByProvider &
      51; // 51
    static +OverlappingPackagesInPendingTransaction: Class<EPurchaseResultDetail__OverlappingPackagesInPendingTransaction> &
      EPurchaseResultDetail__OverlappingPackagesInPendingTransaction &
      52; // 52
    static +RateLimited: Class<EPurchaseResultDetail__RateLimited> &
      EPurchaseResultDetail__RateLimited &
      53; // 53
    static +OwnsExcludedApp: Class<EPurchaseResultDetail__OwnsExcludedApp> &
      EPurchaseResultDetail__OwnsExcludedApp &
      54; // 54
    static +CreditCardBinMismatchesType: Class<EPurchaseResultDetail__CreditCardBinMismatchesType> &
      EPurchaseResultDetail__CreditCardBinMismatchesType &
      55; // 55
    static +CartValueTooHigh: Class<EPurchaseResultDetail__CartValueTooHigh> &
      EPurchaseResultDetail__CartValueTooHigh &
      56; // 56
    static +BillingAgreementAlreadyExists: Class<EPurchaseResultDetail__BillingAgreementAlreadyExists> &
      EPurchaseResultDetail__BillingAgreementAlreadyExists &
      57; // 57
    static +POSACodeNotActivated: Class<EPurchaseResultDetail__POSACodeNotActivated> &
      EPurchaseResultDetail__POSACodeNotActivated &
      58; // 58
    static +CannotShipToCountry: Class<EPurchaseResultDetail__CannotShipToCountry> &
      EPurchaseResultDetail__CannotShipToCountry &
      59; // 59
    static +HungTransactionCancelled: Class<EPurchaseResultDetail__HungTransactionCancelled> &
      EPurchaseResultDetail__HungTransactionCancelled &
      60; // 60
    static +PaypalInternalError: Class<EPurchaseResultDetail__PaypalInternalError> &
      EPurchaseResultDetail__PaypalInternalError &
      61; // 61
    static +UnknownGlobalCollectError: Class<EPurchaseResultDetail__UnknownGlobalCollectError> &
      EPurchaseResultDetail__UnknownGlobalCollectError &
      62; // 62
    static +InvalidTaxAddress: Class<EPurchaseResultDetail__InvalidTaxAddress> &
      EPurchaseResultDetail__InvalidTaxAddress &
      63; // 63
    static +PhysicalProductLimitExceeded: Class<EPurchaseResultDetail__PhysicalProductLimitExceeded> &
      EPurchaseResultDetail__PhysicalProductLimitExceeded &
      64; // 64
    static +PurchaseCannotBeReplayed: Class<EPurchaseResultDetail__PurchaseCannotBeReplayed> &
      EPurchaseResultDetail__PurchaseCannotBeReplayed &
      65; // 65
    static +DelayedCompletion: Class<EPurchaseResultDetail__DelayedCompletion> &
      EPurchaseResultDetail__DelayedCompletion &
      66; // 66
    static +BundleTypeCannotBeGifted: Class<EPurchaseResultDetail__BundleTypeCannotBeGifted> &
      EPurchaseResultDetail__BundleTypeCannotBeGifted &
      67; // 67
  }

  declare class EPurchaseResultDetail__NoDetail mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__AVSFailure
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__InsufficientFunds
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__ContactSupport
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__Timeout mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__InvalidPackage
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__InvalidPaymentMethod
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__InvalidData
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__OthersInProgress
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__AlreadyPurchased
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__WrongPrice
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__FraudCheckFailed
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__CancelledByUser
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__RestrictedCountry
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__BadActivationCode
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__DuplicateActivationCode
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__UseOtherPaymentMethod
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__UseOtherFunctionSource
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__InvalidShippingAddress
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__RegionNotSupported
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__AcctIsBlocked
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__AcctNotVerified
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__InvalidAccount
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__StoreBillingCountryMismatch
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__DoesNotOwnRequiredApp
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__CanceledByNewTransaction
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__ForceCanceledPending
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__FailCurrencyTransProvider
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__FailedCyberCafe
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__NeedsPreApproval
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__PreApprovalDenied
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__WalletCurrencyMismatch
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__EmailNotValidated
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__ExpiredCard
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__TransactionExpired
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__WouldExceedMaxWallet
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__MustLoginPS3AppForPurchase
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__CannotShipToPOBox
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__InsufficientInventory
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__CannotGiftShippedGoods
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__CannotShipInternationally
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__BillingAgreementCancelled
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__InvalidCoupon
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__ExpiredCoupon
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__AccountLocked
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__OtherAbortableInProgress
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__ExceededSteamLimit
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__OverlappingPackagesInCart
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__NoWallet mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__NoCachedPaymentMethod
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__CannotRedeemCodeFromClient
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__PurchaseAmountNoSupportedByProvider
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__OverlappingPackagesInPendingTransaction
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__RateLimited
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__OwnsExcludedApp
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__CreditCardBinMismatchesType
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__CartValueTooHigh
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__BillingAgreementAlreadyExists
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__POSACodeNotActivated
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__CannotShipToCountry
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__HungTransactionCancelled
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__PaypalInternalError
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__UnknownGlobalCollectError
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__InvalidTaxAddress
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__PhysicalProductLimitExceeded
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__PurchaseCannotBeReplayed
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__DelayedCompletion
    mixins EPurchaseResultDetail {}
  declare class EPurchaseResultDetail__BundleTypeCannotBeGifted
    mixins EPurchaseResultDetail {}

  declare export class EIntroducerRouting {
    constructor(...args: empty): mixed;
    static +FileShare: Class<EIntroducerRouting__FileShare> &
      EIntroducerRouting__FileShare &
      0; // 0
    static +P2PVoiceChat: Class<EIntroducerRouting__P2PVoiceChat> &
      EIntroducerRouting__P2PVoiceChat &
      1; // 1
    static +P2PNetworking: Class<EIntroducerRouting__P2PNetworking> &
      EIntroducerRouting__P2PNetworking &
      2; // 2
  }

  declare class EIntroducerRouting__FileShare mixins EIntroducerRouting {}
  declare class EIntroducerRouting__P2PVoiceChat mixins EIntroducerRouting {}
  declare class EIntroducerRouting__P2PNetworking mixins EIntroducerRouting {}

  declare export class EServerFlags {
    constructor(...args: empty): mixed;
    static +None: Class<EServerFlags__None> & EServerFlags__None & 0; // 0
    static +Active: Class<EServerFlags__Active> & EServerFlags__Active & 1; // 1
    static +Secure: Class<EServerFlags__Secure> & EServerFlags__Secure & 2; // 2
    static +Dedicated: Class<EServerFlags__Dedicated> &
      EServerFlags__Dedicated &
      4; // 4
    static +Linux: Class<EServerFlags__Linux> & EServerFlags__Linux & 8; // 8
    static +Passworded: Class<EServerFlags__Passworded> &
      EServerFlags__Passworded &
      16; // 16
    static +Private: Class<EServerFlags__Private> & EServerFlags__Private & 32; // 32
  }

  declare class EServerFlags__None mixins EServerFlags {}
  declare class EServerFlags__Active mixins EServerFlags {}
  declare class EServerFlags__Secure mixins EServerFlags {}
  declare class EServerFlags__Dedicated mixins EServerFlags {}
  declare class EServerFlags__Linux mixins EServerFlags {}
  declare class EServerFlags__Passworded mixins EServerFlags {}
  declare class EServerFlags__Private mixins EServerFlags {}

  declare export class EDenyReason {
    constructor(...args: empty): mixed;
    static +InvalidVersion: Class<EDenyReason__InvalidVersion> &
      EDenyReason__InvalidVersion &
      1; // 1
    static +Generic: Class<EDenyReason__Generic> & EDenyReason__Generic & 2; // 2
    static +NotLoggedOn: Class<EDenyReason__NotLoggedOn> &
      EDenyReason__NotLoggedOn &
      3; // 3
    static +NoLicense: Class<EDenyReason__NoLicense> &
      EDenyReason__NoLicense &
      4; // 4
    static +Cheater: Class<EDenyReason__Cheater> & EDenyReason__Cheater & 5; // 5
    static +LoggedInElseWhere: Class<EDenyReason__LoggedInElseWhere> &
      EDenyReason__LoggedInElseWhere &
      6; // 6
    static +UnknownText: Class<EDenyReason__UnknownText> &
      EDenyReason__UnknownText &
      7; // 7
    static +IncompatibleAnticheat: Class<EDenyReason__IncompatibleAnticheat> &
      EDenyReason__IncompatibleAnticheat &
      8; // 8
    static +MemoryCorruption: Class<EDenyReason__MemoryCorruption> &
      EDenyReason__MemoryCorruption &
      9; // 9
    static +IncompatibleSoftware: Class<EDenyReason__IncompatibleSoftware> &
      EDenyReason__IncompatibleSoftware &
      10; // 10
    static +SteamConnectionLost: Class<EDenyReason__SteamConnectionLost> &
      EDenyReason__SteamConnectionLost &
      11; // 11
    static +SteamConnectionError: Class<EDenyReason__SteamConnectionError> &
      EDenyReason__SteamConnectionError &
      12; // 12
    static +SteamResponseTimedOut: Class<EDenyReason__SteamResponseTimedOut> &
      EDenyReason__SteamResponseTimedOut &
      13; // 13
    static +SteamValidationStalled: Class<EDenyReason__SteamValidationStalled> &
      EDenyReason__SteamValidationStalled &
      14; // 14
    static +SteamOwnerLeftGuestUser: Class<EDenyReason__SteamOwnerLeftGuestUser> &
      EDenyReason__SteamOwnerLeftGuestUser &
      15; // 15
  }

  declare class EDenyReason__InvalidVersion mixins EDenyReason {}
  declare class EDenyReason__Generic mixins EDenyReason {}
  declare class EDenyReason__NotLoggedOn mixins EDenyReason {}
  declare class EDenyReason__NoLicense mixins EDenyReason {}
  declare class EDenyReason__Cheater mixins EDenyReason {}
  declare class EDenyReason__LoggedInElseWhere mixins EDenyReason {}
  declare class EDenyReason__UnknownText mixins EDenyReason {}
  declare class EDenyReason__IncompatibleAnticheat mixins EDenyReason {}
  declare class EDenyReason__MemoryCorruption mixins EDenyReason {}
  declare class EDenyReason__IncompatibleSoftware mixins EDenyReason {}
  declare class EDenyReason__SteamConnectionLost mixins EDenyReason {}
  declare class EDenyReason__SteamConnectionError mixins EDenyReason {}
  declare class EDenyReason__SteamResponseTimedOut mixins EDenyReason {}
  declare class EDenyReason__SteamValidationStalled mixins EDenyReason {}
  declare class EDenyReason__SteamOwnerLeftGuestUser mixins EDenyReason {}

  declare export class EClanRank {
    constructor(...args: empty): mixed;
    static +None: Class<EClanRank__None> & EClanRank__None & 0; // 0
    static +Owner: Class<EClanRank__Owner> & EClanRank__Owner & 1; // 1
    static +Officer: Class<EClanRank__Officer> & EClanRank__Officer & 2; // 2
    static +Member: Class<EClanRank__Member> & EClanRank__Member & 3; // 3
    static +Moderator: Class<EClanRank__Moderator> & EClanRank__Moderator & 4; // 4
  }

  declare class EClanRank__None mixins EClanRank {}
  declare class EClanRank__Owner mixins EClanRank {}
  declare class EClanRank__Officer mixins EClanRank {}
  declare class EClanRank__Member mixins EClanRank {}
  declare class EClanRank__Moderator mixins EClanRank {}

  declare export class EClanRelationship {
    constructor(...args: empty): mixed;
    static +None: Class<EClanRelationship__None> & EClanRelationship__None & 0; // 0
    static +Blocked: Class<EClanRelationship__Blocked> &
      EClanRelationship__Blocked &
      1; // 1
    static +Invited: Class<EClanRelationship__Invited> &
      EClanRelationship__Invited &
      2; // 2
    static +Member: Class<EClanRelationship__Member> &
      EClanRelationship__Member &
      3; // 3
    static +Kicked: Class<EClanRelationship__Kicked> &
      EClanRelationship__Kicked &
      4; // 4
    static +KickAcknowledged: Class<EClanRelationship__KickAcknowledged> &
      EClanRelationship__KickAcknowledged &
      5; // 5
  }

  declare class EClanRelationship__None mixins EClanRelationship {}
  declare class EClanRelationship__Blocked mixins EClanRelationship {}
  declare class EClanRelationship__Invited mixins EClanRelationship {}
  declare class EClanRelationship__Member mixins EClanRelationship {}
  declare class EClanRelationship__Kicked mixins EClanRelationship {}
  declare class EClanRelationship__KickAcknowledged mixins EClanRelationship {}

  declare export class EAuthSessionResponse {
    constructor(...args: empty): mixed;
    static +OK: Class<EAuthSessionResponse__OK> & EAuthSessionResponse__OK & 0; // 0
    static +UserNotConnectedToSteam: Class<EAuthSessionResponse__UserNotConnectedToSteam> &
      EAuthSessionResponse__UserNotConnectedToSteam &
      1; // 1
    static +NoLicenseOrExpired: Class<EAuthSessionResponse__NoLicenseOrExpired> &
      EAuthSessionResponse__NoLicenseOrExpired &
      2; // 2
    static +VACBanned: Class<EAuthSessionResponse__VACBanned> &
      EAuthSessionResponse__VACBanned &
      3; // 3
    static +LoggedInElseWhere: Class<EAuthSessionResponse__LoggedInElseWhere> &
      EAuthSessionResponse__LoggedInElseWhere &
      4; // 4
    static +VACCheckTimedOut: Class<EAuthSessionResponse__VACCheckTimedOut> &
      EAuthSessionResponse__VACCheckTimedOut &
      5; // 5
    static +AuthTicketCanceled: Class<EAuthSessionResponse__AuthTicketCanceled> &
      EAuthSessionResponse__AuthTicketCanceled &
      6; // 6
    static +AuthTicketInvalidAlreadyUsed: Class<EAuthSessionResponse__AuthTicketInvalidAlreadyUsed> &
      EAuthSessionResponse__AuthTicketInvalidAlreadyUsed &
      7; // 7
    static +AuthTicketInvalid: Class<EAuthSessionResponse__AuthTicketInvalid> &
      EAuthSessionResponse__AuthTicketInvalid &
      8; // 8
    static +PublisherIssuedBan: Class<EAuthSessionResponse__PublisherIssuedBan> &
      EAuthSessionResponse__PublisherIssuedBan &
      9; // 9
  }

  declare class EAuthSessionResponse__OK mixins EAuthSessionResponse {}
  declare class EAuthSessionResponse__UserNotConnectedToSteam
    mixins EAuthSessionResponse {}
  declare class EAuthSessionResponse__NoLicenseOrExpired
    mixins EAuthSessionResponse {}
  declare class EAuthSessionResponse__VACBanned mixins EAuthSessionResponse {}
  declare class EAuthSessionResponse__LoggedInElseWhere
    mixins EAuthSessionResponse {}
  declare class EAuthSessionResponse__VACCheckTimedOut
    mixins EAuthSessionResponse {}
  declare class EAuthSessionResponse__AuthTicketCanceled
    mixins EAuthSessionResponse {}
  declare class EAuthSessionResponse__AuthTicketInvalidAlreadyUsed
    mixins EAuthSessionResponse {}
  declare class EAuthSessionResponse__AuthTicketInvalid
    mixins EAuthSessionResponse {}
  declare class EAuthSessionResponse__PublisherIssuedBan
    mixins EAuthSessionResponse {}

  declare export class EChatRoomEnterResponse {
    constructor(...args: empty): mixed;
    static +Success: Class<EChatRoomEnterResponse__Success> &
      EChatRoomEnterResponse__Success &
      1; // 1
    static +DoesntExist: Class<EChatRoomEnterResponse__DoesntExist> &
      EChatRoomEnterResponse__DoesntExist &
      2; // 2
    static +NotAllowed: Class<EChatRoomEnterResponse__NotAllowed> &
      EChatRoomEnterResponse__NotAllowed &
      3; // 3
    static +Full: Class<EChatRoomEnterResponse__Full> &
      EChatRoomEnterResponse__Full &
      4; // 4
    static +Error: Class<EChatRoomEnterResponse__Error> &
      EChatRoomEnterResponse__Error &
      5; // 5
    static +Banned: Class<EChatRoomEnterResponse__Banned> &
      EChatRoomEnterResponse__Banned &
      6; // 6
    static +Limited: Class<EChatRoomEnterResponse__Limited> &
      EChatRoomEnterResponse__Limited &
      7; // 7
    static +ClanDisabled: Class<EChatRoomEnterResponse__ClanDisabled> &
      EChatRoomEnterResponse__ClanDisabled &
      8; // 8
    static +CommunityBan: Class<EChatRoomEnterResponse__CommunityBan> &
      EChatRoomEnterResponse__CommunityBan &
      9; // 9
    static +MemberBlockedYou: Class<EChatRoomEnterResponse__MemberBlockedYou> &
      EChatRoomEnterResponse__MemberBlockedYou &
      10; // 10
    static +YouBlockedMember: Class<EChatRoomEnterResponse__YouBlockedMember> &
      EChatRoomEnterResponse__YouBlockedMember &
      11; // 11
    static +NoRankingDataLobby: Class<EChatRoomEnterResponse__NoRankingDataLobby> &
      EChatRoomEnterResponse__NoRankingDataLobby &
      12; // 12
    static +NoRankingDataUser: Class<EChatRoomEnterResponse__NoRankingDataUser> &
      EChatRoomEnterResponse__NoRankingDataUser &
      13; // 13
    static +RankOutOfRange: Class<EChatRoomEnterResponse__RankOutOfRange> &
      EChatRoomEnterResponse__RankOutOfRange &
      14; // 14
  }

  declare class EChatRoomEnterResponse__Success mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__DoesntExist
    mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__NotAllowed
    mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__Full mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__Error mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__Banned mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__Limited mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__ClanDisabled
    mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__CommunityBan
    mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__MemberBlockedYou
    mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__YouBlockedMember
    mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__NoRankingDataLobby
    mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__NoRankingDataUser
    mixins EChatRoomEnterResponse {}
  declare class EChatRoomEnterResponse__RankOutOfRange
    mixins EChatRoomEnterResponse {}

  declare export class EChatRoomType {
    constructor(...args: empty): mixed;
    static +Friend: Class<EChatRoomType__Friend> & EChatRoomType__Friend & 1; // 1
    static +MUC: Class<EChatRoomType__MUC> & EChatRoomType__MUC & 2; // 2
    static +Lobby: Class<EChatRoomType__Lobby> & EChatRoomType__Lobby & 3; // 3
  }

  declare class EChatRoomType__Friend mixins EChatRoomType {}
  declare class EChatRoomType__MUC mixins EChatRoomType {}
  declare class EChatRoomType__Lobby mixins EChatRoomType {}

  declare export class EChatInfoType {
    constructor(...args: empty): mixed;
    static +StateChange: Class<EChatInfoType__StateChange> &
      EChatInfoType__StateChange &
      1; // 1
    static +InfoUpdate: Class<EChatInfoType__InfoUpdate> &
      EChatInfoType__InfoUpdate &
      2; // 2
    static +MemberLimitChange: Class<EChatInfoType__MemberLimitChange> &
      EChatInfoType__MemberLimitChange &
      3; // 3
  }

  declare class EChatInfoType__StateChange mixins EChatInfoType {}
  declare class EChatInfoType__InfoUpdate mixins EChatInfoType {}
  declare class EChatInfoType__MemberLimitChange mixins EChatInfoType {}

  declare export class EChatAction {
    constructor(...args: empty): mixed;
    static +InviteChat: Class<EChatAction__InviteChat> &
      EChatAction__InviteChat &
      1; // 1
    static +Kick: Class<EChatAction__Kick> & EChatAction__Kick & 2; // 2
    static +Ban: Class<EChatAction__Ban> & EChatAction__Ban & 3; // 3
    static +UnBan: Class<EChatAction__UnBan> & EChatAction__UnBan & 4; // 4
    static +StartVoiceSpeak: Class<EChatAction__StartVoiceSpeak> &
      EChatAction__StartVoiceSpeak &
      5; // 5
    static +EndVoiceSpeak: Class<EChatAction__EndVoiceSpeak> &
      EChatAction__EndVoiceSpeak &
      6; // 6
    static +LockChat: Class<EChatAction__LockChat> & EChatAction__LockChat & 7; // 7
    static +UnlockChat: Class<EChatAction__UnlockChat> &
      EChatAction__UnlockChat &
      8; // 8
    static +CloseChat: Class<EChatAction__CloseChat> &
      EChatAction__CloseChat &
      9; // 9
    static +SetJoinable: Class<EChatAction__SetJoinable> &
      EChatAction__SetJoinable &
      10; // 10
    static +SetUnjoinable: Class<EChatAction__SetUnjoinable> &
      EChatAction__SetUnjoinable &
      11; // 11
    static +SetOwner: Class<EChatAction__SetOwner> & EChatAction__SetOwner & 12; // 12
    static +SetInvisibleToFriends: Class<EChatAction__SetInvisibleToFriends> &
      EChatAction__SetInvisibleToFriends &
      13; // 13
    static +SetVisibleToFriends: Class<EChatAction__SetVisibleToFriends> &
      EChatAction__SetVisibleToFriends &
      14; // 14
    static +SetModerated: Class<EChatAction__SetModerated> &
      EChatAction__SetModerated &
      15; // 15
    static +SetUnmoderated: Class<EChatAction__SetUnmoderated> &
      EChatAction__SetUnmoderated &
      16; // 16
  }

  declare class EChatAction__InviteChat mixins EChatAction {}
  declare class EChatAction__Kick mixins EChatAction {}
  declare class EChatAction__Ban mixins EChatAction {}
  declare class EChatAction__UnBan mixins EChatAction {}
  declare class EChatAction__StartVoiceSpeak mixins EChatAction {}
  declare class EChatAction__EndVoiceSpeak mixins EChatAction {}
  declare class EChatAction__LockChat mixins EChatAction {}
  declare class EChatAction__UnlockChat mixins EChatAction {}
  declare class EChatAction__CloseChat mixins EChatAction {}
  declare class EChatAction__SetJoinable mixins EChatAction {}
  declare class EChatAction__SetUnjoinable mixins EChatAction {}
  declare class EChatAction__SetOwner mixins EChatAction {}
  declare class EChatAction__SetInvisibleToFriends mixins EChatAction {}
  declare class EChatAction__SetVisibleToFriends mixins EChatAction {}
  declare class EChatAction__SetModerated mixins EChatAction {}
  declare class EChatAction__SetUnmoderated mixins EChatAction {}

  declare export class EChatActionResult {
    constructor(...args: empty): mixed;
    static +Success: Class<EChatActionResult__Success> &
      EChatActionResult__Success &
      1; // 1
    static +Error: Class<EChatActionResult__Error> &
      EChatActionResult__Error &
      2; // 2
    static +NotPermitted: Class<EChatActionResult__NotPermitted> &
      EChatActionResult__NotPermitted &
      3; // 3
    static +NotAllowedOnClanMember: Class<EChatActionResult__NotAllowedOnClanMember> &
      EChatActionResult__NotAllowedOnClanMember &
      4; // 4
    static +NotAllowedOnBannedUser: Class<EChatActionResult__NotAllowedOnBannedUser> &
      EChatActionResult__NotAllowedOnBannedUser &
      5; // 5
    static +NotAllowedOnChatOwner: Class<EChatActionResult__NotAllowedOnChatOwner> &
      EChatActionResult__NotAllowedOnChatOwner &
      6; // 6
    static +NotAllowedOnSelf: Class<EChatActionResult__NotAllowedOnSelf> &
      EChatActionResult__NotAllowedOnSelf &
      7; // 7
    static +ChatDoesntExist: Class<EChatActionResult__ChatDoesntExist> &
      EChatActionResult__ChatDoesntExist &
      8; // 8
    static +ChatFull: Class<EChatActionResult__ChatFull> &
      EChatActionResult__ChatFull &
      9; // 9
    static +VoiceSlotsFull: Class<EChatActionResult__VoiceSlotsFull> &
      EChatActionResult__VoiceSlotsFull &
      10; // 10
  }

  declare class EChatActionResult__Success mixins EChatActionResult {}
  declare class EChatActionResult__Error mixins EChatActionResult {}
  declare class EChatActionResult__NotPermitted mixins EChatActionResult {}
  declare class EChatActionResult__NotAllowedOnClanMember
    mixins EChatActionResult {}
  declare class EChatActionResult__NotAllowedOnBannedUser
    mixins EChatActionResult {}
  declare class EChatActionResult__NotAllowedOnChatOwner
    mixins EChatActionResult {}
  declare class EChatActionResult__NotAllowedOnSelf mixins EChatActionResult {}
  declare class EChatActionResult__ChatDoesntExist mixins EChatActionResult {}
  declare class EChatActionResult__ChatFull mixins EChatActionResult {}
  declare class EChatActionResult__VoiceSlotsFull mixins EChatActionResult {}

  declare export class EAppInfoSection {
    constructor(...args: empty): mixed;
    static +Unknown: Class<EAppInfoSection__Unknown> &
      EAppInfoSection__Unknown &
      0; // 0
    static +All: Class<EAppInfoSection__All> & EAppInfoSection__All & 1; // 1
    static +First: Class<EAppInfoSection__First> & EAppInfoSection__First & 2; // 2
    static +Common: Class<EAppInfoSection__Common> &
      EAppInfoSection__Common &
      2; // 2
    static +Extended: Class<EAppInfoSection__Extended> &
      EAppInfoSection__Extended &
      3; // 3
    static +Config: Class<EAppInfoSection__Config> &
      EAppInfoSection__Config &
      4; // 4
    static +Stats: Class<EAppInfoSection__Stats> & EAppInfoSection__Stats & 5; // 5
    static +Install: Class<EAppInfoSection__Install> &
      EAppInfoSection__Install &
      6; // 6
    static +Depots: Class<EAppInfoSection__Depots> &
      EAppInfoSection__Depots &
      7; // 7
    static +VAC: Class<EAppInfoSection__VAC> & EAppInfoSection__VAC & 8; // 8
    static +VAC_UNUSED: Class<EAppInfoSection__VAC_UNUSED> &
      EAppInfoSection__VAC_UNUSED &
      8; // 8
    static +DRM: Class<EAppInfoSection__DRM> & EAppInfoSection__DRM & 9; // 9
    static +DRM_UNUSED: Class<EAppInfoSection__DRM_UNUSED> &
      EAppInfoSection__DRM_UNUSED &
      9; // 9
    static +UFS: Class<EAppInfoSection__UFS> & EAppInfoSection__UFS & 10; // 10
    static +OGG: Class<EAppInfoSection__OGG> & EAppInfoSection__OGG & 11; // 11
    static +Items: Class<EAppInfoSection__Items> & EAppInfoSection__Items & 12; // 12
    static +ItemsUNUSED: Class<EAppInfoSection__ItemsUNUSED> &
      EAppInfoSection__ItemsUNUSED &
      12; // 12
    static +Policies: Class<EAppInfoSection__Policies> &
      EAppInfoSection__Policies &
      13; // 13
    static +SysReqs: Class<EAppInfoSection__SysReqs> &
      EAppInfoSection__SysReqs &
      14; // 14
    static +Community: Class<EAppInfoSection__Community> &
      EAppInfoSection__Community &
      15; // 15
    static +Store: Class<EAppInfoSection__Store> & EAppInfoSection__Store & 16; // 16
    static +Max: Class<EAppInfoSection__Max> & EAppInfoSection__Max & 17; // 17
  }

  declare class EAppInfoSection__Unknown mixins EAppInfoSection {}
  declare class EAppInfoSection__All mixins EAppInfoSection {}
  declare class EAppInfoSection__First mixins EAppInfoSection {}
  declare class EAppInfoSection__Common mixins EAppInfoSection {}
  declare class EAppInfoSection__Extended mixins EAppInfoSection {}
  declare class EAppInfoSection__Config mixins EAppInfoSection {}
  declare class EAppInfoSection__Stats mixins EAppInfoSection {}
  declare class EAppInfoSection__Install mixins EAppInfoSection {}
  declare class EAppInfoSection__Depots mixins EAppInfoSection {}
  declare class EAppInfoSection__VAC mixins EAppInfoSection {}
  declare class EAppInfoSection__VAC_UNUSED mixins EAppInfoSection {}
  declare class EAppInfoSection__DRM mixins EAppInfoSection {}
  declare class EAppInfoSection__DRM_UNUSED mixins EAppInfoSection {}
  declare class EAppInfoSection__UFS mixins EAppInfoSection {}
  declare class EAppInfoSection__OGG mixins EAppInfoSection {}
  declare class EAppInfoSection__Items mixins EAppInfoSection {}
  declare class EAppInfoSection__ItemsUNUSED mixins EAppInfoSection {}
  declare class EAppInfoSection__Policies mixins EAppInfoSection {}
  declare class EAppInfoSection__SysReqs mixins EAppInfoSection {}
  declare class EAppInfoSection__Community mixins EAppInfoSection {}
  declare class EAppInfoSection__Store mixins EAppInfoSection {}
  declare class EAppInfoSection__Max mixins EAppInfoSection {}

  declare export class EContentDownloadSourceType {
    constructor(...args: empty): mixed;
    static +Invalid: Class<EContentDownloadSourceType__Invalid> &
      EContentDownloadSourceType__Invalid &
      0; // 0
    static +CS: Class<EContentDownloadSourceType__CS> &
      EContentDownloadSourceType__CS &
      1; // 1
    static +CDN: Class<EContentDownloadSourceType__CDN> &
      EContentDownloadSourceType__CDN &
      2; // 2
    static +LCS: Class<EContentDownloadSourceType__LCS> &
      EContentDownloadSourceType__LCS &
      3; // 3
    static +ProxyCache: Class<EContentDownloadSourceType__ProxyCache> &
      EContentDownloadSourceType__ProxyCache &
      4; // 4
    static +LANPeer: Class<EContentDownloadSourceType__LANPeer> &
      EContentDownloadSourceType__LANPeer &
      5; // 5
    static +Max: Class<EContentDownloadSourceType__Max> &
      EContentDownloadSourceType__Max &
      5; // 5
  }

  declare class EContentDownloadSourceType__Invalid
    mixins EContentDownloadSourceType {}
  declare class EContentDownloadSourceType__CS
    mixins EContentDownloadSourceType {}
  declare class EContentDownloadSourceType__CDN
    mixins EContentDownloadSourceType {}
  declare class EContentDownloadSourceType__LCS
    mixins EContentDownloadSourceType {}
  declare class EContentDownloadSourceType__ProxyCache
    mixins EContentDownloadSourceType {}
  declare class EContentDownloadSourceType__LANPeer
    mixins EContentDownloadSourceType {}
  declare class EContentDownloadSourceType__Max
    mixins EContentDownloadSourceType {}

  declare export class EPlatformType {
    constructor(...args: empty): mixed;
    static +Unknown: Class<EPlatformType__Unknown> & EPlatformType__Unknown & 0; // 0
    static +Win32: Class<EPlatformType__Win32> & EPlatformType__Win32 & 1; // 1
    static +Win64: Class<EPlatformType__Win64> & EPlatformType__Win64 & 2; // 2
    static +Linux: Class<EPlatformType__Linux> & EPlatformType__Linux & 3; // 3
    static +Linux64: Class<EPlatformType__Linux64> & EPlatformType__Linux64 & 3; // 3
    static +OSX: Class<EPlatformType__OSX> & EPlatformType__OSX & 4; // 4
    static +PS3: Class<EPlatformType__PS3> & EPlatformType__PS3 & 5; // 5
    static +Linux32: Class<EPlatformType__Linux32> & EPlatformType__Linux32 & 6; // 6
    static +Max: Class<EPlatformType__Max> & EPlatformType__Max & 6; // 6
  }

  declare class EPlatformType__Unknown mixins EPlatformType {}
  declare class EPlatformType__Win32 mixins EPlatformType {}
  declare class EPlatformType__Win64 mixins EPlatformType {}
  declare class EPlatformType__Linux mixins EPlatformType {}
  declare class EPlatformType__Linux64 mixins EPlatformType {}
  declare class EPlatformType__OSX mixins EPlatformType {}
  declare class EPlatformType__PS3 mixins EPlatformType {}
  declare class EPlatformType__Linux32 mixins EPlatformType {}
  declare class EPlatformType__Max mixins EPlatformType {}

  declare export class EOSType {
    constructor(...args: empty): mixed;
    static +Unknown: Class<EOSType__Unknown> & EOSType__Unknown & -1; // -1
    static +IOSUnknown: Class<EOSType__IOSUnknown> & EOSType__IOSUnknown & -600; // -600
    static +AndroidUnknown: Class<EOSType__AndroidUnknown> &
      EOSType__AndroidUnknown &
      -500; // -500
    static +UMQ: Class<EOSType__UMQ> & EOSType__UMQ & -400; // -400
    static +PS3: Class<EOSType__PS3> & EOSType__PS3 & -300; // -300
    static +MacOSUnknown: Class<EOSType__MacOSUnknown> &
      EOSType__MacOSUnknown &
      -102; // -102
    static +MacOS104: Class<EOSType__MacOS104> & EOSType__MacOS104 & -101; // -101
    static +MacOS105: Class<EOSType__MacOS105> & EOSType__MacOS105 & -100; // -100
    static +MacOS1058: Class<EOSType__MacOS1058> & EOSType__MacOS1058 & -99; // -99
    static +MacOS106: Class<EOSType__MacOS106> & EOSType__MacOS106 & -95; // -95
    static +MacOS1063: Class<EOSType__MacOS1063> & EOSType__MacOS1063 & -94; // -94
    static +MacOS1064_slgu: Class<EOSType__MacOS1064_slgu> &
      EOSType__MacOS1064_slgu &
      -93; // -93
    static +MacOS1067: Class<EOSType__MacOS1067> & EOSType__MacOS1067 & -92; // -92
    static +MacOS107: Class<EOSType__MacOS107> & EOSType__MacOS107 & -90; // -90
    static +MacOS108: Class<EOSType__MacOS108> & EOSType__MacOS108 & -89; // -89
    static +MacOS109: Class<EOSType__MacOS109> & EOSType__MacOS109 & -88; // -88
    static +MacOS1010: Class<EOSType__MacOS1010> & EOSType__MacOS1010 & -87; // -87
    static +MacOS1011: Class<EOSType__MacOS1011> & EOSType__MacOS1011 & -86; // -86
    static +MacOS1012: Class<EOSType__MacOS1012> & EOSType__MacOS1012 & -85; // -85
    static +MacOSMax: Class<EOSType__MacOSMax> & EOSType__MacOSMax & -1; // -1
    static +LinuxUnknown: Class<EOSType__LinuxUnknown> &
      EOSType__LinuxUnknown &
      -203; // -203
    static +Linux22: Class<EOSType__Linux22> & EOSType__Linux22 & -202; // -202
    static +Linux24: Class<EOSType__Linux24> & EOSType__Linux24 & -201; // -201
    static +Linux26: Class<EOSType__Linux26> & EOSType__Linux26 & -200; // -200
    static +Linux32: Class<EOSType__Linux32> & EOSType__Linux32 & -199; // -199
    static +Linux35: Class<EOSType__Linux35> & EOSType__Linux35 & -198; // -198
    static +Linux36: Class<EOSType__Linux36> & EOSType__Linux36 & -197; // -197
    static +Linux310: Class<EOSType__Linux310> & EOSType__Linux310 & -196; // -196
    static +LinuxMax: Class<EOSType__LinuxMax> & EOSType__LinuxMax & -103; // -103
    static +WinUnknown: Class<EOSType__WinUnknown> & EOSType__WinUnknown & 0; // 0
    static +Win311: Class<EOSType__Win311> & EOSType__Win311 & 1; // 1
    static +Win95: Class<EOSType__Win95> & EOSType__Win95 & 2; // 2
    static +Win98: Class<EOSType__Win98> & EOSType__Win98 & 3; // 3
    static +WinME: Class<EOSType__WinME> & EOSType__WinME & 4; // 4
    static +WinNT: Class<EOSType__WinNT> & EOSType__WinNT & 5; // 5
    static +Win200: Class<EOSType__Win200> & EOSType__Win200 & 6; // 6
    static +Win2000: Class<EOSType__Win2000> & EOSType__Win2000 & 6; // 6
    static +WinXP: Class<EOSType__WinXP> & EOSType__WinXP & 7; // 7
    static +Win2003: Class<EOSType__Win2003> & EOSType__Win2003 & 8; // 8
    static +WinVista: Class<EOSType__WinVista> & EOSType__WinVista & 9; // 9
    static +Win7: Class<EOSType__Win7> & EOSType__Win7 & 10; // 10
    static +Windows7: Class<EOSType__Windows7> & EOSType__Windows7 & 10; // 10
    static +Win2008: Class<EOSType__Win2008> & EOSType__Win2008 & 11; // 11
    static +Win2012: Class<EOSType__Win2012> & EOSType__Win2012 & 12; // 12
    static +Win8: Class<EOSType__Win8> & EOSType__Win8 & 13; // 13
    static +Windows8: Class<EOSType__Windows8> & EOSType__Windows8 & 13; // 13
    static +Win81: Class<EOSType__Win81> & EOSType__Win81 & 14; // 14
    static +Windows81: Class<EOSType__Windows81> & EOSType__Windows81 & 14; // 14
    static +Win2012R2: Class<EOSType__Win2012R2> & EOSType__Win2012R2 & 15; // 15
    static +Win10: Class<EOSType__Win10> & EOSType__Win10 & 16; // 16
    static +Windows10: Class<EOSType__Windows10> & EOSType__Windows10 & 16; // 16
    static +WinMAX: Class<EOSType__WinMAX> & EOSType__WinMAX & 15; // 15
    static +Max: Class<EOSType__Max> & EOSType__Max & 26; // 26
  }

  declare class EOSType__Unknown mixins EOSType {}
  declare class EOSType__IOSUnknown mixins EOSType {}
  declare class EOSType__AndroidUnknown mixins EOSType {}
  declare class EOSType__UMQ mixins EOSType {}
  declare class EOSType__PS3 mixins EOSType {}
  declare class EOSType__MacOSUnknown mixins EOSType {}
  declare class EOSType__MacOS104 mixins EOSType {}
  declare class EOSType__MacOS105 mixins EOSType {}
  declare class EOSType__MacOS1058 mixins EOSType {}
  declare class EOSType__MacOS106 mixins EOSType {}
  declare class EOSType__MacOS1063 mixins EOSType {}
  declare class EOSType__MacOS1064_slgu mixins EOSType {}
  declare class EOSType__MacOS1067 mixins EOSType {}
  declare class EOSType__MacOS107 mixins EOSType {}
  declare class EOSType__MacOS108 mixins EOSType {}
  declare class EOSType__MacOS109 mixins EOSType {}
  declare class EOSType__MacOS1010 mixins EOSType {}
  declare class EOSType__MacOS1011 mixins EOSType {}
  declare class EOSType__MacOS1012 mixins EOSType {}
  declare class EOSType__MacOSMax mixins EOSType {}
  declare class EOSType__LinuxUnknown mixins EOSType {}
  declare class EOSType__Linux22 mixins EOSType {}
  declare class EOSType__Linux24 mixins EOSType {}
  declare class EOSType__Linux26 mixins EOSType {}
  declare class EOSType__Linux32 mixins EOSType {}
  declare class EOSType__Linux35 mixins EOSType {}
  declare class EOSType__Linux36 mixins EOSType {}
  declare class EOSType__Linux310 mixins EOSType {}
  declare class EOSType__LinuxMax mixins EOSType {}
  declare class EOSType__WinUnknown mixins EOSType {}
  declare class EOSType__Win311 mixins EOSType {}
  declare class EOSType__Win95 mixins EOSType {}
  declare class EOSType__Win98 mixins EOSType {}
  declare class EOSType__WinME mixins EOSType {}
  declare class EOSType__WinNT mixins EOSType {}
  declare class EOSType__Win200 mixins EOSType {}
  declare class EOSType__Win2000 mixins EOSType {}
  declare class EOSType__WinXP mixins EOSType {}
  declare class EOSType__Win2003 mixins EOSType {}
  declare class EOSType__WinVista mixins EOSType {}
  declare class EOSType__Win7 mixins EOSType {}
  declare class EOSType__Windows7 mixins EOSType {}
  declare class EOSType__Win2008 mixins EOSType {}
  declare class EOSType__Win2012 mixins EOSType {}
  declare class EOSType__Win8 mixins EOSType {}
  declare class EOSType__Windows8 mixins EOSType {}
  declare class EOSType__Win81 mixins EOSType {}
  declare class EOSType__Windows81 mixins EOSType {}
  declare class EOSType__Win2012R2 mixins EOSType {}
  declare class EOSType__Win10 mixins EOSType {}
  declare class EOSType__Windows10 mixins EOSType {}
  declare class EOSType__WinMAX mixins EOSType {}
  declare class EOSType__Max mixins EOSType {}

  declare export class EServerType {
    constructor(...args: empty): mixed;
    static +Invalid: Class<EServerType__Invalid> & EServerType__Invalid & -1; // -1
    static +First: Class<EServerType__First> & EServerType__First & 0; // 0
    static +Shell: Class<EServerType__Shell> & EServerType__Shell & 0; // 0
    static +GM: Class<EServerType__GM> & EServerType__GM & 1; // 1
    static +BUM: Class<EServerType__BUM> & EServerType__BUM & 2; // 2
    static +BUMOBOSOLETE: Class<EServerType__BUMOBOSOLETE> &
      EServerType__BUMOBOSOLETE &
      2; // 2
    static +AM: Class<EServerType__AM> & EServerType__AM & 3; // 3
    static +BS: Class<EServerType__BS> & EServerType__BS & 4; // 4
    static +VS: Class<EServerType__VS> & EServerType__VS & 5; // 5
    static +ATS: Class<EServerType__ATS> & EServerType__ATS & 6; // 6
    static +CM: Class<EServerType__CM> & EServerType__CM & 7; // 7
    static +FBS: Class<EServerType__FBS> & EServerType__FBS & 8; // 8
    static +FG: Class<EServerType__FG> & EServerType__FG & 9; // 9
    static +BoxMonitor: Class<EServerType__BoxMonitor> &
      EServerType__BoxMonitor &
      9; // 9
    static +SS: Class<EServerType__SS> & EServerType__SS & 10; // 10
    static +DRMS: Class<EServerType__DRMS> & EServerType__DRMS & 11; // 11
    static +HubOBSOLETE: Class<EServerType__HubOBSOLETE> &
      EServerType__HubOBSOLETE &
      12; // 12
    static +Console: Class<EServerType__Console> & EServerType__Console & 13; // 13
    static +ASBOBSOLETE: Class<EServerType__ASBOBSOLETE> &
      EServerType__ASBOBSOLETE &
      14; // 14
    static +PICS: Class<EServerType__PICS> & EServerType__PICS & 14; // 14
    static +Client: Class<EServerType__Client> & EServerType__Client & 15; // 15
    static +BootstrapOBSOLETE: Class<EServerType__BootstrapOBSOLETE> &
      EServerType__BootstrapOBSOLETE &
      16; // 16
    static +DP: Class<EServerType__DP> & EServerType__DP & 17; // 17
    static +WG: Class<EServerType__WG> & EServerType__WG & 18; // 18
    static +SM: Class<EServerType__SM> & EServerType__SM & 19; // 19
    static +SLC: Class<EServerType__SLC> & EServerType__SLC & 20; // 20
    static +UFS: Class<EServerType__UFS> & EServerType__UFS & 21; // 21
    static +Util: Class<EServerType__Util> & EServerType__Util & 23; // 23
    static +DSS: Class<EServerType__DSS> & EServerType__DSS & 24; // 24
    static +Community: Class<EServerType__Community> &
      EServerType__Community &
      24; // 24
    static +P2PRelayOBSOLETE: Class<EServerType__P2PRelayOBSOLETE> &
      EServerType__P2PRelayOBSOLETE &
      25; // 25
    static +AppInformation: Class<EServerType__AppInformation> &
      EServerType__AppInformation &
      26; // 26
    static +Spare: Class<EServerType__Spare> & EServerType__Spare & 27; // 27
    static +FTS: Class<EServerType__FTS> & EServerType__FTS & 28; // 28
    static +EPM: Class<EServerType__EPM> & EServerType__EPM & 29; // 29
    static +EPMOBSOLETE: Class<EServerType__EPMOBSOLETE> &
      EServerType__EPMOBSOLETE &
      29; // 29
    static +PS: Class<EServerType__PS> & EServerType__PS & 30; // 30
    static +IS: Class<EServerType__IS> & EServerType__IS & 31; // 31
    static +CCS: Class<EServerType__CCS> & EServerType__CCS & 32; // 32
    static +DFS: Class<EServerType__DFS> & EServerType__DFS & 33; // 33
    static +LBS: Class<EServerType__LBS> & EServerType__LBS & 34; // 34
    static +MDS: Class<EServerType__MDS> & EServerType__MDS & 35; // 35
    static +CS: Class<EServerType__CS> & EServerType__CS & 36; // 36
    static +GC: Class<EServerType__GC> & EServerType__GC & 37; // 37
    static +NS: Class<EServerType__NS> & EServerType__NS & 38; // 38
    static +OGS: Class<EServerType__OGS> & EServerType__OGS & 39; // 39
    static +WebAPI: Class<EServerType__WebAPI> & EServerType__WebAPI & 40; // 40
    static +UDS: Class<EServerType__UDS> & EServerType__UDS & 41; // 41
    static +MMS: Class<EServerType__MMS> & EServerType__MMS & 42; // 42
    static +GMS: Class<EServerType__GMS> & EServerType__GMS & 43; // 43
    static +KGS: Class<EServerType__KGS> & EServerType__KGS & 44; // 44
    static +UCM: Class<EServerType__UCM> & EServerType__UCM & 45; // 45
    static +RM: Class<EServerType__RM> & EServerType__RM & 46; // 46
    static +FS: Class<EServerType__FS> & EServerType__FS & 47; // 47
    static +Econ: Class<EServerType__Econ> & EServerType__Econ & 48; // 48
    static +Backpack: Class<EServerType__Backpack> & EServerType__Backpack & 49; // 49
    static +UGS: Class<EServerType__UGS> & EServerType__UGS & 50; // 50
    static +Store: Class<EServerType__Store> & EServerType__Store & 51; // 51
    static +StoreFeature: Class<EServerType__StoreFeature> &
      EServerType__StoreFeature &
      51; // 51
    static +MoneyStats: Class<EServerType__MoneyStats> &
      EServerType__MoneyStats &
      52; // 52
    static +CRE: Class<EServerType__CRE> & EServerType__CRE & 53; // 53
    static +UMQ: Class<EServerType__UMQ> & EServerType__UMQ & 54; // 54
    static +Workshop: Class<EServerType__Workshop> & EServerType__Workshop & 55; // 55
    static +BRP: Class<EServerType__BRP> & EServerType__BRP & 56; // 56
    static +GCH: Class<EServerType__GCH> & EServerType__GCH & 57; // 57
    static +MPAS: Class<EServerType__MPAS> & EServerType__MPAS & 58; // 58
    static +Trade: Class<EServerType__Trade> & EServerType__Trade & 59; // 59
    static +Secrets: Class<EServerType__Secrets> & EServerType__Secrets & 60; // 60
    static +Logsink: Class<EServerType__Logsink> & EServerType__Logsink & 61; // 61
    static +Market: Class<EServerType__Market> & EServerType__Market & 62; // 62
    static +Quest: Class<EServerType__Quest> & EServerType__Quest & 63; // 63
    static +WDS: Class<EServerType__WDS> & EServerType__WDS & 64; // 64
    static +ACS: Class<EServerType__ACS> & EServerType__ACS & 65; // 65
    static +PNP: Class<EServerType__PNP> & EServerType__PNP & 66; // 66
    static +TaxForm: Class<EServerType__TaxForm> & EServerType__TaxForm & 67; // 67
    static +ExternalMonitor: Class<EServerType__ExternalMonitor> &
      EServerType__ExternalMonitor &
      68; // 68
    static +Parental: Class<EServerType__Parental> & EServerType__Parental & 69; // 69
    static +PartnerUpload: Class<EServerType__PartnerUpload> &
      EServerType__PartnerUpload &
      70; // 70
    static +Partner: Class<EServerType__Partner> & EServerType__Partner & 71; // 71
    static +ES: Class<EServerType__ES> & EServerType__ES & 72; // 72
    static +DepotWebContent: Class<EServerType__DepotWebContent> &
      EServerType__DepotWebContent &
      73; // 73
    static +ExternalConfig: Class<EServerType__ExternalConfig> &
      EServerType__ExternalConfig &
      74; // 74
    static +GameNotifications: Class<EServerType__GameNotifications> &
      EServerType__GameNotifications &
      75; // 75
    static +MarketRepl: Class<EServerType__MarketRepl> &
      EServerType__MarketRepl &
      76; // 76
    static +MarketSearch: Class<EServerType__MarketSearch> &
      EServerType__MarketSearch &
      77; // 77
    static +Localization: Class<EServerType__Localization> &
      EServerType__Localization &
      78; // 78
    static +Steam2Emulator: Class<EServerType__Steam2Emulator> &
      EServerType__Steam2Emulator &
      79; // 79
    static +PublicTest: Class<EServerType__PublicTest> &
      EServerType__PublicTest &
      80; // 80
    static +SolrMgr: Class<EServerType__SolrMgr> & EServerType__SolrMgr & 81; // 81
    static +BroadcastRelay: Class<EServerType__BroadcastRelay> &
      EServerType__BroadcastRelay &
      82; // 82
    static +BroadcastDirectory: Class<EServerType__BroadcastDirectory> &
      EServerType__BroadcastDirectory &
      83; // 83
    static +VideoManager: Class<EServerType__VideoManager> &
      EServerType__VideoManager &
      84; // 84
    static +TradeOffer: Class<EServerType__TradeOffer> &
      EServerType__TradeOffer &
      85; // 85
    static +BroadcastChat: Class<EServerType__BroadcastChat> &
      EServerType__BroadcastChat &
      86; // 86
    static +Phone: Class<EServerType__Phone> & EServerType__Phone & 87; // 87
    static +AccountScore: Class<EServerType__AccountScore> &
      EServerType__AccountScore &
      88; // 88
    static +Support: Class<EServerType__Support> & EServerType__Support & 89; // 89
    static +LogRequest: Class<EServerType__LogRequest> &
      EServerType__LogRequest &
      90; // 90
    static +LogWorker: Class<EServerType__LogWorker> &
      EServerType__LogWorker &
      91; // 91
    static +EmailDelivery: Class<EServerType__EmailDelivery> &
      EServerType__EmailDelivery &
      92; // 92
    static +InventoryManagement: Class<EServerType__InventoryManagement> &
      EServerType__InventoryManagement &
      93; // 93
    static +Auth: Class<EServerType__Auth> & EServerType__Auth & 94; // 94
    static +StoreCatalog: Class<EServerType__StoreCatalog> &
      EServerType__StoreCatalog &
      95; // 95
    static +HLTVRelay: Class<EServerType__HLTVRelay> &
      EServerType__HLTVRelay &
      96; // 96
    static +Max: Class<EServerType__Max> & EServerType__Max & 97; // 97
  }

  declare class EServerType__Invalid mixins EServerType {}
  declare class EServerType__First mixins EServerType {}
  declare class EServerType__Shell mixins EServerType {}
  declare class EServerType__GM mixins EServerType {}
  declare class EServerType__BUM mixins EServerType {}
  declare class EServerType__BUMOBOSOLETE mixins EServerType {}
  declare class EServerType__AM mixins EServerType {}
  declare class EServerType__BS mixins EServerType {}
  declare class EServerType__VS mixins EServerType {}
  declare class EServerType__ATS mixins EServerType {}
  declare class EServerType__CM mixins EServerType {}
  declare class EServerType__FBS mixins EServerType {}
  declare class EServerType__FG mixins EServerType {}
  declare class EServerType__BoxMonitor mixins EServerType {}
  declare class EServerType__SS mixins EServerType {}
  declare class EServerType__DRMS mixins EServerType {}
  declare class EServerType__HubOBSOLETE mixins EServerType {}
  declare class EServerType__Console mixins EServerType {}
  declare class EServerType__ASBOBSOLETE mixins EServerType {}
  declare class EServerType__PICS mixins EServerType {}
  declare class EServerType__Client mixins EServerType {}
  declare class EServerType__BootstrapOBSOLETE mixins EServerType {}
  declare class EServerType__DP mixins EServerType {}
  declare class EServerType__WG mixins EServerType {}
  declare class EServerType__SM mixins EServerType {}
  declare class EServerType__SLC mixins EServerType {}
  declare class EServerType__UFS mixins EServerType {}
  declare class EServerType__Util mixins EServerType {}
  declare class EServerType__DSS mixins EServerType {}
  declare class EServerType__Community mixins EServerType {}
  declare class EServerType__P2PRelayOBSOLETE mixins EServerType {}
  declare class EServerType__AppInformation mixins EServerType {}
  declare class EServerType__Spare mixins EServerType {}
  declare class EServerType__FTS mixins EServerType {}
  declare class EServerType__EPM mixins EServerType {}
  declare class EServerType__EPMOBSOLETE mixins EServerType {}
  declare class EServerType__PS mixins EServerType {}
  declare class EServerType__IS mixins EServerType {}
  declare class EServerType__CCS mixins EServerType {}
  declare class EServerType__DFS mixins EServerType {}
  declare class EServerType__LBS mixins EServerType {}
  declare class EServerType__MDS mixins EServerType {}
  declare class EServerType__CS mixins EServerType {}
  declare class EServerType__GC mixins EServerType {}
  declare class EServerType__NS mixins EServerType {}
  declare class EServerType__OGS mixins EServerType {}
  declare class EServerType__WebAPI mixins EServerType {}
  declare class EServerType__UDS mixins EServerType {}
  declare class EServerType__MMS mixins EServerType {}
  declare class EServerType__GMS mixins EServerType {}
  declare class EServerType__KGS mixins EServerType {}
  declare class EServerType__UCM mixins EServerType {}
  declare class EServerType__RM mixins EServerType {}
  declare class EServerType__FS mixins EServerType {}
  declare class EServerType__Econ mixins EServerType {}
  declare class EServerType__Backpack mixins EServerType {}
  declare class EServerType__UGS mixins EServerType {}
  declare class EServerType__Store mixins EServerType {}
  declare class EServerType__StoreFeature mixins EServerType {}
  declare class EServerType__MoneyStats mixins EServerType {}
  declare class EServerType__CRE mixins EServerType {}
  declare class EServerType__UMQ mixins EServerType {}
  declare class EServerType__Workshop mixins EServerType {}
  declare class EServerType__BRP mixins EServerType {}
  declare class EServerType__GCH mixins EServerType {}
  declare class EServerType__MPAS mixins EServerType {}
  declare class EServerType__Trade mixins EServerType {}
  declare class EServerType__Secrets mixins EServerType {}
  declare class EServerType__Logsink mixins EServerType {}
  declare class EServerType__Market mixins EServerType {}
  declare class EServerType__Quest mixins EServerType {}
  declare class EServerType__WDS mixins EServerType {}
  declare class EServerType__ACS mixins EServerType {}
  declare class EServerType__PNP mixins EServerType {}
  declare class EServerType__TaxForm mixins EServerType {}
  declare class EServerType__ExternalMonitor mixins EServerType {}
  declare class EServerType__Parental mixins EServerType {}
  declare class EServerType__PartnerUpload mixins EServerType {}
  declare class EServerType__Partner mixins EServerType {}
  declare class EServerType__ES mixins EServerType {}
  declare class EServerType__DepotWebContent mixins EServerType {}
  declare class EServerType__ExternalConfig mixins EServerType {}
  declare class EServerType__GameNotifications mixins EServerType {}
  declare class EServerType__MarketRepl mixins EServerType {}
  declare class EServerType__MarketSearch mixins EServerType {}
  declare class EServerType__Localization mixins EServerType {}
  declare class EServerType__Steam2Emulator mixins EServerType {}
  declare class EServerType__PublicTest mixins EServerType {}
  declare class EServerType__SolrMgr mixins EServerType {}
  declare class EServerType__BroadcastRelay mixins EServerType {}
  declare class EServerType__BroadcastDirectory mixins EServerType {}
  declare class EServerType__VideoManager mixins EServerType {}
  declare class EServerType__TradeOffer mixins EServerType {}
  declare class EServerType__BroadcastChat mixins EServerType {}
  declare class EServerType__Phone mixins EServerType {}
  declare class EServerType__AccountScore mixins EServerType {}
  declare class EServerType__Support mixins EServerType {}
  declare class EServerType__LogRequest mixins EServerType {}
  declare class EServerType__LogWorker mixins EServerType {}
  declare class EServerType__EmailDelivery mixins EServerType {}
  declare class EServerType__InventoryManagement mixins EServerType {}
  declare class EServerType__Auth mixins EServerType {}
  declare class EServerType__StoreCatalog mixins EServerType {}
  declare class EServerType__HLTVRelay mixins EServerType {}
  declare class EServerType__Max mixins EServerType {}

  declare export class EBillingType {
    constructor(...args: empty): mixed;
    static +NoCost: Class<EBillingType__NoCost> & EBillingType__NoCost & 0; // 0
    static +BillOnceOnly: Class<EBillingType__BillOnceOnly> &
      EBillingType__BillOnceOnly &
      1; // 1
    static +BillMonthly: Class<EBillingType__BillMonthly> &
      EBillingType__BillMonthly &
      2; // 2
    static +ProofOfPrepurchaseOnly: Class<EBillingType__ProofOfPrepurchaseOnly> &
      EBillingType__ProofOfPrepurchaseOnly &
      3; // 3
    static +GuestPass: Class<EBillingType__GuestPass> &
      EBillingType__GuestPass &
      4; // 4
    static +HardwarePromo: Class<EBillingType__HardwarePromo> &
      EBillingType__HardwarePromo &
      5; // 5
    static +Gift: Class<EBillingType__Gift> & EBillingType__Gift & 6; // 6
    static +AutoGrant: Class<EBillingType__AutoGrant> &
      EBillingType__AutoGrant &
      7; // 7
    static +OEMTicket: Class<EBillingType__OEMTicket> &
      EBillingType__OEMTicket &
      8; // 8
    static +RecurringOption: Class<EBillingType__RecurringOption> &
      EBillingType__RecurringOption &
      9; // 9
    static +BillOnceOrCDKey: Class<EBillingType__BillOnceOrCDKey> &
      EBillingType__BillOnceOrCDKey &
      10; // 10
    static +Repurchaseable: Class<EBillingType__Repurchaseable> &
      EBillingType__Repurchaseable &
      11; // 11
    static +FreeOnDemand: Class<EBillingType__FreeOnDemand> &
      EBillingType__FreeOnDemand &
      12; // 12
    static +Rental: Class<EBillingType__Rental> & EBillingType__Rental & 13; // 13
    static +CommercialLicense: Class<EBillingType__CommercialLicense> &
      EBillingType__CommercialLicense &
      14; // 14
    static +FreeCommercialLicense: Class<EBillingType__FreeCommercialLicense> &
      EBillingType__FreeCommercialLicense &
      15; // 15
    static +NumBillingTypes: Class<EBillingType__NumBillingTypes> &
      EBillingType__NumBillingTypes &
      16; // 16
  }

  declare class EBillingType__NoCost mixins EBillingType {}
  declare class EBillingType__BillOnceOnly mixins EBillingType {}
  declare class EBillingType__BillMonthly mixins EBillingType {}
  declare class EBillingType__ProofOfPrepurchaseOnly mixins EBillingType {}
  declare class EBillingType__GuestPass mixins EBillingType {}
  declare class EBillingType__HardwarePromo mixins EBillingType {}
  declare class EBillingType__Gift mixins EBillingType {}
  declare class EBillingType__AutoGrant mixins EBillingType {}
  declare class EBillingType__OEMTicket mixins EBillingType {}
  declare class EBillingType__RecurringOption mixins EBillingType {}
  declare class EBillingType__BillOnceOrCDKey mixins EBillingType {}
  declare class EBillingType__Repurchaseable mixins EBillingType {}
  declare class EBillingType__FreeOnDemand mixins EBillingType {}
  declare class EBillingType__Rental mixins EBillingType {}
  declare class EBillingType__CommercialLicense mixins EBillingType {}
  declare class EBillingType__FreeCommercialLicense mixins EBillingType {}
  declare class EBillingType__NumBillingTypes mixins EBillingType {}

  declare export class EActivationCodeClass {
    constructor(...args: empty): mixed;
    static +WonCDKey: Class<EActivationCodeClass__WonCDKey> &
      EActivationCodeClass__WonCDKey &
      0; // 0
    static +ValveCDKey: Class<EActivationCodeClass__ValveCDKey> &
      EActivationCodeClass__ValveCDKey &
      1; // 1
    static +Doom3CDKey: Class<EActivationCodeClass__Doom3CDKey> &
      EActivationCodeClass__Doom3CDKey &
      2; // 2
    static +DBLookup: Class<EActivationCodeClass__DBLookup> &
      EActivationCodeClass__DBLookup &
      3; // 3
    static +Steam2010Key: Class<EActivationCodeClass__Steam2010Key> &
      EActivationCodeClass__Steam2010Key &
      4; // 4
    static +Max: Class<EActivationCodeClass__Max> &
      EActivationCodeClass__Max &
      5; // 5
    static +Test: Class<EActivationCodeClass__Test> &
      EActivationCodeClass__Test &
      2147483647; // 2147483647
    static +Invalid: Class<EActivationCodeClass__Invalid> &
      EActivationCodeClass__Invalid &
      4294967295; // 4294967295
  }

  declare class EActivationCodeClass__WonCDKey mixins EActivationCodeClass {}
  declare class EActivationCodeClass__ValveCDKey mixins EActivationCodeClass {}
  declare class EActivationCodeClass__Doom3CDKey mixins EActivationCodeClass {}
  declare class EActivationCodeClass__DBLookup mixins EActivationCodeClass {}
  declare class EActivationCodeClass__Steam2010Key
    mixins EActivationCodeClass {}
  declare class EActivationCodeClass__Max mixins EActivationCodeClass {}
  declare class EActivationCodeClass__Test mixins EActivationCodeClass {}
  declare class EActivationCodeClass__Invalid mixins EActivationCodeClass {}

  declare export class EChatMemberStateChange {
    constructor(...args: empty): mixed;
    static +Entered: Class<EChatMemberStateChange__Entered> &
      EChatMemberStateChange__Entered &
      1; // 1
    static +Left: Class<EChatMemberStateChange__Left> &
      EChatMemberStateChange__Left &
      2; // 2
    static +Disconnected: Class<EChatMemberStateChange__Disconnected> &
      EChatMemberStateChange__Disconnected &
      4; // 4
    static +Kicked: Class<EChatMemberStateChange__Kicked> &
      EChatMemberStateChange__Kicked &
      8; // 8
    static +Banned: Class<EChatMemberStateChange__Banned> &
      EChatMemberStateChange__Banned &
      16; // 16
    static +VoiceSpeaking: Class<EChatMemberStateChange__VoiceSpeaking> &
      EChatMemberStateChange__VoiceSpeaking &
      4096; // 4096
    static +VoiceDoneSpeaking: Class<EChatMemberStateChange__VoiceDoneSpeaking> &
      EChatMemberStateChange__VoiceDoneSpeaking &
      8192; // 8192
  }

  declare class EChatMemberStateChange__Entered mixins EChatMemberStateChange {}
  declare class EChatMemberStateChange__Left mixins EChatMemberStateChange {}
  declare class EChatMemberStateChange__Disconnected
    mixins EChatMemberStateChange {}
  declare class EChatMemberStateChange__Kicked mixins EChatMemberStateChange {}
  declare class EChatMemberStateChange__Banned mixins EChatMemberStateChange {}
  declare class EChatMemberStateChange__VoiceSpeaking
    mixins EChatMemberStateChange {}
  declare class EChatMemberStateChange__VoiceDoneSpeaking
    mixins EChatMemberStateChange {}

  declare export class ERegionCode {
    constructor(...args: empty): mixed;
    static +USEast: Class<ERegionCode__USEast> & ERegionCode__USEast & 0; // 0
    static +USWest: Class<ERegionCode__USWest> & ERegionCode__USWest & 1; // 1
    static +SouthAmerica: Class<ERegionCode__SouthAmerica> &
      ERegionCode__SouthAmerica &
      2; // 2
    static +Europe: Class<ERegionCode__Europe> & ERegionCode__Europe & 3; // 3
    static +Asia: Class<ERegionCode__Asia> & ERegionCode__Asia & 4; // 4
    static +Australia: Class<ERegionCode__Australia> &
      ERegionCode__Australia &
      5; // 5
    static +MiddleEast: Class<ERegionCode__MiddleEast> &
      ERegionCode__MiddleEast &
      6; // 6
    static +Africa: Class<ERegionCode__Africa> & ERegionCode__Africa & 7; // 7
    static +World: Class<ERegionCode__World> & ERegionCode__World & 255; // 255
  }

  declare class ERegionCode__USEast mixins ERegionCode {}
  declare class ERegionCode__USWest mixins ERegionCode {}
  declare class ERegionCode__SouthAmerica mixins ERegionCode {}
  declare class ERegionCode__Europe mixins ERegionCode {}
  declare class ERegionCode__Asia mixins ERegionCode {}
  declare class ERegionCode__Australia mixins ERegionCode {}
  declare class ERegionCode__MiddleEast mixins ERegionCode {}
  declare class ERegionCode__Africa mixins ERegionCode {}
  declare class ERegionCode__World mixins ERegionCode {}

  declare export class ECurrencyCode {
    constructor(...args: empty): mixed;
    static +Invalid: Class<ECurrencyCode__Invalid> & ECurrencyCode__Invalid & 0; // 0
    static +USD: Class<ECurrencyCode__USD> & ECurrencyCode__USD & 1; // 1
    static +GBP: Class<ECurrencyCode__GBP> & ECurrencyCode__GBP & 2; // 2
    static +EUR: Class<ECurrencyCode__EUR> & ECurrencyCode__EUR & 3; // 3
    static +CHF: Class<ECurrencyCode__CHF> & ECurrencyCode__CHF & 4; // 4
    static +RUB: Class<ECurrencyCode__RUB> & ECurrencyCode__RUB & 5; // 5
    static +PLN: Class<ECurrencyCode__PLN> & ECurrencyCode__PLN & 6; // 6
    static +BRL: Class<ECurrencyCode__BRL> & ECurrencyCode__BRL & 7; // 7
    static +JPY: Class<ECurrencyCode__JPY> & ECurrencyCode__JPY & 8; // 8
    static +NOK: Class<ECurrencyCode__NOK> & ECurrencyCode__NOK & 9; // 9
    static +IDR: Class<ECurrencyCode__IDR> & ECurrencyCode__IDR & 10; // 10
    static +MYR: Class<ECurrencyCode__MYR> & ECurrencyCode__MYR & 11; // 11
    static +PHP: Class<ECurrencyCode__PHP> & ECurrencyCode__PHP & 12; // 12
    static +SGD: Class<ECurrencyCode__SGD> & ECurrencyCode__SGD & 13; // 13
    static +THB: Class<ECurrencyCode__THB> & ECurrencyCode__THB & 14; // 14
    static +VND: Class<ECurrencyCode__VND> & ECurrencyCode__VND & 15; // 15
    static +KRW: Class<ECurrencyCode__KRW> & ECurrencyCode__KRW & 16; // 16
    static +TRY: Class<ECurrencyCode__TRY> & ECurrencyCode__TRY & 17; // 17
    static +UAH: Class<ECurrencyCode__UAH> & ECurrencyCode__UAH & 18; // 18
    static +MXN: Class<ECurrencyCode__MXN> & ECurrencyCode__MXN & 19; // 19
    static +CAD: Class<ECurrencyCode__CAD> & ECurrencyCode__CAD & 20; // 20
    static +AUD: Class<ECurrencyCode__AUD> & ECurrencyCode__AUD & 21; // 21
    static +NZD: Class<ECurrencyCode__NZD> & ECurrencyCode__NZD & 22; // 22
    static +CNY: Class<ECurrencyCode__CNY> & ECurrencyCode__CNY & 23; // 23
    static +INR: Class<ECurrencyCode__INR> & ECurrencyCode__INR & 24; // 24
    static +CLP: Class<ECurrencyCode__CLP> & ECurrencyCode__CLP & 25; // 25
    static +PEN: Class<ECurrencyCode__PEN> & ECurrencyCode__PEN & 26; // 26
    static +COP: Class<ECurrencyCode__COP> & ECurrencyCode__COP & 27; // 27
    static +ZAR: Class<ECurrencyCode__ZAR> & ECurrencyCode__ZAR & 28; // 28
    static +HKD: Class<ECurrencyCode__HKD> & ECurrencyCode__HKD & 29; // 29
    static +TWD: Class<ECurrencyCode__TWD> & ECurrencyCode__TWD & 30; // 30
    static +SAR: Class<ECurrencyCode__SAR> & ECurrencyCode__SAR & 31; // 31
    static +AED: Class<ECurrencyCode__AED> & ECurrencyCode__AED & 32; // 32
    static +ARS: Class<ECurrencyCode__ARS> & ECurrencyCode__ARS & 34; // 34
    static +ILS: Class<ECurrencyCode__ILS> & ECurrencyCode__ILS & 35; // 35
    static +BYN: Class<ECurrencyCode__BYN> & ECurrencyCode__BYN & 36; // 36
    static +KZT: Class<ECurrencyCode__KZT> & ECurrencyCode__KZT & 37; // 37
    static +KWD: Class<ECurrencyCode__KWD> & ECurrencyCode__KWD & 38; // 38
    static +QAR: Class<ECurrencyCode__QAR> & ECurrencyCode__QAR & 39; // 39
    static +CRC: Class<ECurrencyCode__CRC> & ECurrencyCode__CRC & 40; // 40
    static +UYU: Class<ECurrencyCode__UYU> & ECurrencyCode__UYU & 41; // 41
    static +Max: Class<ECurrencyCode__Max> & ECurrencyCode__Max & 42; // 42
  }

  declare class ECurrencyCode__Invalid mixins ECurrencyCode {}
  declare class ECurrencyCode__USD mixins ECurrencyCode {}
  declare class ECurrencyCode__GBP mixins ECurrencyCode {}
  declare class ECurrencyCode__EUR mixins ECurrencyCode {}
  declare class ECurrencyCode__CHF mixins ECurrencyCode {}
  declare class ECurrencyCode__RUB mixins ECurrencyCode {}
  declare class ECurrencyCode__PLN mixins ECurrencyCode {}
  declare class ECurrencyCode__BRL mixins ECurrencyCode {}
  declare class ECurrencyCode__JPY mixins ECurrencyCode {}
  declare class ECurrencyCode__NOK mixins ECurrencyCode {}
  declare class ECurrencyCode__IDR mixins ECurrencyCode {}
  declare class ECurrencyCode__MYR mixins ECurrencyCode {}
  declare class ECurrencyCode__PHP mixins ECurrencyCode {}
  declare class ECurrencyCode__SGD mixins ECurrencyCode {}
  declare class ECurrencyCode__THB mixins ECurrencyCode {}
  declare class ECurrencyCode__VND mixins ECurrencyCode {}
  declare class ECurrencyCode__KRW mixins ECurrencyCode {}
  declare class ECurrencyCode__TRY mixins ECurrencyCode {}
  declare class ECurrencyCode__UAH mixins ECurrencyCode {}
  declare class ECurrencyCode__MXN mixins ECurrencyCode {}
  declare class ECurrencyCode__CAD mixins ECurrencyCode {}
  declare class ECurrencyCode__AUD mixins ECurrencyCode {}
  declare class ECurrencyCode__NZD mixins ECurrencyCode {}
  declare class ECurrencyCode__CNY mixins ECurrencyCode {}
  declare class ECurrencyCode__INR mixins ECurrencyCode {}
  declare class ECurrencyCode__CLP mixins ECurrencyCode {}
  declare class ECurrencyCode__PEN mixins ECurrencyCode {}
  declare class ECurrencyCode__COP mixins ECurrencyCode {}
  declare class ECurrencyCode__ZAR mixins ECurrencyCode {}
  declare class ECurrencyCode__HKD mixins ECurrencyCode {}
  declare class ECurrencyCode__TWD mixins ECurrencyCode {}
  declare class ECurrencyCode__SAR mixins ECurrencyCode {}
  declare class ECurrencyCode__AED mixins ECurrencyCode {}
  declare class ECurrencyCode__ARS mixins ECurrencyCode {}
  declare class ECurrencyCode__ILS mixins ECurrencyCode {}
  declare class ECurrencyCode__BYN mixins ECurrencyCode {}
  declare class ECurrencyCode__KZT mixins ECurrencyCode {}
  declare class ECurrencyCode__KWD mixins ECurrencyCode {}
  declare class ECurrencyCode__QAR mixins ECurrencyCode {}
  declare class ECurrencyCode__CRC mixins ECurrencyCode {}
  declare class ECurrencyCode__UYU mixins ECurrencyCode {}
  declare class ECurrencyCode__Max mixins ECurrencyCode {}

  declare export class EDepotFileFlag {
    constructor(...args: empty): mixed;
    static +UserConfig: Class<EDepotFileFlag__UserConfig> &
      EDepotFileFlag__UserConfig &
      1; // 1
    static +VersionedUserConfig: Class<EDepotFileFlag__VersionedUserConfig> &
      EDepotFileFlag__VersionedUserConfig &
      2; // 2
    static +Encrypted: Class<EDepotFileFlag__Encrypted> &
      EDepotFileFlag__Encrypted &
      4; // 4
    static +ReadOnly: Class<EDepotFileFlag__ReadOnly> &
      EDepotFileFlag__ReadOnly &
      8; // 8
    static +Hidden: Class<EDepotFileFlag__Hidden> & EDepotFileFlag__Hidden & 16; // 16
    static +Executable: Class<EDepotFileFlag__Executable> &
      EDepotFileFlag__Executable &
      32; // 32
    static +Directory: Class<EDepotFileFlag__Directory> &
      EDepotFileFlag__Directory &
      64; // 64
    static +CustomExecutable: Class<EDepotFileFlag__CustomExecutable> &
      EDepotFileFlag__CustomExecutable &
      128; // 128
    static +InstallScript: Class<EDepotFileFlag__InstallScript> &
      EDepotFileFlag__InstallScript &
      256; // 256
    static +Symlink: Class<EDepotFileFlag__Symlink> &
      EDepotFileFlag__Symlink &
      512; // 512
  }

  declare class EDepotFileFlag__UserConfig mixins EDepotFileFlag {}
  declare class EDepotFileFlag__VersionedUserConfig mixins EDepotFileFlag {}
  declare class EDepotFileFlag__Encrypted mixins EDepotFileFlag {}
  declare class EDepotFileFlag__ReadOnly mixins EDepotFileFlag {}
  declare class EDepotFileFlag__Hidden mixins EDepotFileFlag {}
  declare class EDepotFileFlag__Executable mixins EDepotFileFlag {}
  declare class EDepotFileFlag__Directory mixins EDepotFileFlag {}
  declare class EDepotFileFlag__CustomExecutable mixins EDepotFileFlag {}
  declare class EDepotFileFlag__InstallScript mixins EDepotFileFlag {}
  declare class EDepotFileFlag__Symlink mixins EDepotFileFlag {}

  declare export class EWorkshopEnumerationType {
    constructor(...args: empty): mixed;
    static +RankedByVote: Class<EWorkshopEnumerationType__RankedByVote> &
      EWorkshopEnumerationType__RankedByVote &
      0; // 0
    static +Recent: Class<EWorkshopEnumerationType__Recent> &
      EWorkshopEnumerationType__Recent &
      1; // 1
    static +Trending: Class<EWorkshopEnumerationType__Trending> &
      EWorkshopEnumerationType__Trending &
      2; // 2
    static +FavoriteOfFriends: Class<EWorkshopEnumerationType__FavoriteOfFriends> &
      EWorkshopEnumerationType__FavoriteOfFriends &
      3; // 3
    static +VotedByFriends: Class<EWorkshopEnumerationType__VotedByFriends> &
      EWorkshopEnumerationType__VotedByFriends &
      4; // 4
    static +ContentByFriends: Class<EWorkshopEnumerationType__ContentByFriends> &
      EWorkshopEnumerationType__ContentByFriends &
      5; // 5
    static +RecentFromFollowedUsers: Class<EWorkshopEnumerationType__RecentFromFollowedUsers> &
      EWorkshopEnumerationType__RecentFromFollowedUsers &
      6; // 6
  }

  declare class EWorkshopEnumerationType__RankedByVote
    mixins EWorkshopEnumerationType {}
  declare class EWorkshopEnumerationType__Recent
    mixins EWorkshopEnumerationType {}
  declare class EWorkshopEnumerationType__Trending
    mixins EWorkshopEnumerationType {}
  declare class EWorkshopEnumerationType__FavoriteOfFriends
    mixins EWorkshopEnumerationType {}
  declare class EWorkshopEnumerationType__VotedByFriends
    mixins EWorkshopEnumerationType {}
  declare class EWorkshopEnumerationType__ContentByFriends
    mixins EWorkshopEnumerationType {}
  declare class EWorkshopEnumerationType__RecentFromFollowedUsers
    mixins EWorkshopEnumerationType {}

  declare export class EPublishedFileVisibility {
    constructor(...args: empty): mixed;
    static +Public: Class<EPublishedFileVisibility__Public> &
      EPublishedFileVisibility__Public &
      0; // 0
    static +FriendsOnly: Class<EPublishedFileVisibility__FriendsOnly> &
      EPublishedFileVisibility__FriendsOnly &
      1; // 1
    static +Private: Class<EPublishedFileVisibility__Private> &
      EPublishedFileVisibility__Private &
      2; // 2
  }

  declare class EPublishedFileVisibility__Public
    mixins EPublishedFileVisibility {}
  declare class EPublishedFileVisibility__FriendsOnly
    mixins EPublishedFileVisibility {}
  declare class EPublishedFileVisibility__Private
    mixins EPublishedFileVisibility {}

  declare export class EWorkshopFileType {
    constructor(...args: empty): mixed;
    static +First: Class<EWorkshopFileType__First> &
      EWorkshopFileType__First &
      0; // 0
    static +Community: Class<EWorkshopFileType__Community> &
      EWorkshopFileType__Community &
      0; // 0
    static +Microtransaction: Class<EWorkshopFileType__Microtransaction> &
      EWorkshopFileType__Microtransaction &
      1; // 1
    static +Collection: Class<EWorkshopFileType__Collection> &
      EWorkshopFileType__Collection &
      2; // 2
    static +Art: Class<EWorkshopFileType__Art> & EWorkshopFileType__Art & 3; // 3
    static +Video: Class<EWorkshopFileType__Video> &
      EWorkshopFileType__Video &
      4; // 4
    static +Screenshot: Class<EWorkshopFileType__Screenshot> &
      EWorkshopFileType__Screenshot &
      5; // 5
    static +Game: Class<EWorkshopFileType__Game> & EWorkshopFileType__Game & 6; // 6
    static +Software: Class<EWorkshopFileType__Software> &
      EWorkshopFileType__Software &
      7; // 7
    static +Concept: Class<EWorkshopFileType__Concept> &
      EWorkshopFileType__Concept &
      8; // 8
    static +WebGuide: Class<EWorkshopFileType__WebGuide> &
      EWorkshopFileType__WebGuide &
      9; // 9
    static +IntegratedGuide: Class<EWorkshopFileType__IntegratedGuide> &
      EWorkshopFileType__IntegratedGuide &
      10; // 10
    static +Merch: Class<EWorkshopFileType__Merch> &
      EWorkshopFileType__Merch &
      11; // 11
    static +ControllerBinding: Class<EWorkshopFileType__ControllerBinding> &
      EWorkshopFileType__ControllerBinding &
      12; // 12
    static +SteamworksAccessInvite: Class<EWorkshopFileType__SteamworksAccessInvite> &
      EWorkshopFileType__SteamworksAccessInvite &
      13; // 13
    static +SteamVideo: Class<EWorkshopFileType__SteamVideo> &
      EWorkshopFileType__SteamVideo &
      14; // 14
    static +GameManagedItem: Class<EWorkshopFileType__GameManagedItem> &
      EWorkshopFileType__GameManagedItem &
      15; // 15
    static +Max: Class<EWorkshopFileType__Max> & EWorkshopFileType__Max & 16; // 16
  }

  declare class EWorkshopFileType__First mixins EWorkshopFileType {}
  declare class EWorkshopFileType__Community mixins EWorkshopFileType {}
  declare class EWorkshopFileType__Microtransaction mixins EWorkshopFileType {}
  declare class EWorkshopFileType__Collection mixins EWorkshopFileType {}
  declare class EWorkshopFileType__Art mixins EWorkshopFileType {}
  declare class EWorkshopFileType__Video mixins EWorkshopFileType {}
  declare class EWorkshopFileType__Screenshot mixins EWorkshopFileType {}
  declare class EWorkshopFileType__Game mixins EWorkshopFileType {}
  declare class EWorkshopFileType__Software mixins EWorkshopFileType {}
  declare class EWorkshopFileType__Concept mixins EWorkshopFileType {}
  declare class EWorkshopFileType__WebGuide mixins EWorkshopFileType {}
  declare class EWorkshopFileType__IntegratedGuide mixins EWorkshopFileType {}
  declare class EWorkshopFileType__Merch mixins EWorkshopFileType {}
  declare class EWorkshopFileType__ControllerBinding mixins EWorkshopFileType {}
  declare class EWorkshopFileType__SteamworksAccessInvite
    mixins EWorkshopFileType {}
  declare class EWorkshopFileType__SteamVideo mixins EWorkshopFileType {}
  declare class EWorkshopFileType__GameManagedItem mixins EWorkshopFileType {}
  declare class EWorkshopFileType__Max mixins EWorkshopFileType {}

  declare export class EWorkshopFileAction {
    constructor(...args: empty): mixed;
    static +Played: Class<EWorkshopFileAction__Played> &
      EWorkshopFileAction__Played &
      0; // 0
    static +Completed: Class<EWorkshopFileAction__Completed> &
      EWorkshopFileAction__Completed &
      1; // 1
  }

  declare class EWorkshopFileAction__Played mixins EWorkshopFileAction {}
  declare class EWorkshopFileAction__Completed mixins EWorkshopFileAction {}

  declare export class EEconTradeResponse {
    constructor(...args: empty): mixed;
    static +Accepted: Class<EEconTradeResponse__Accepted> &
      EEconTradeResponse__Accepted &
      0; // 0
    static +Declined: Class<EEconTradeResponse__Declined> &
      EEconTradeResponse__Declined &
      1; // 1
    static +TradeBannedInitiator: Class<EEconTradeResponse__TradeBannedInitiator> &
      EEconTradeResponse__TradeBannedInitiator &
      2; // 2
    static +TradeBannedTarget: Class<EEconTradeResponse__TradeBannedTarget> &
      EEconTradeResponse__TradeBannedTarget &
      3; // 3
    static +TargetAlreadyTrading: Class<EEconTradeResponse__TargetAlreadyTrading> &
      EEconTradeResponse__TargetAlreadyTrading &
      4; // 4
    static +Disabled: Class<EEconTradeResponse__Disabled> &
      EEconTradeResponse__Disabled &
      5; // 5
    static +NotLoggedIn: Class<EEconTradeResponse__NotLoggedIn> &
      EEconTradeResponse__NotLoggedIn &
      6; // 6
    static +Cancel: Class<EEconTradeResponse__Cancel> &
      EEconTradeResponse__Cancel &
      7; // 7
    static +TooSoon: Class<EEconTradeResponse__TooSoon> &
      EEconTradeResponse__TooSoon &
      8; // 8
    static +TooSoonPenalty: Class<EEconTradeResponse__TooSoonPenalty> &
      EEconTradeResponse__TooSoonPenalty &
      9; // 9
    static +ConnectionFailed: Class<EEconTradeResponse__ConnectionFailed> &
      EEconTradeResponse__ConnectionFailed &
      10; // 10
    static +AlreadyTrading: Class<EEconTradeResponse__AlreadyTrading> &
      EEconTradeResponse__AlreadyTrading &
      11; // 11
    static +AlreadyHasTradeRequest: Class<EEconTradeResponse__AlreadyHasTradeRequest> &
      EEconTradeResponse__AlreadyHasTradeRequest &
      12; // 12
    static +NoResponse: Class<EEconTradeResponse__NoResponse> &
      EEconTradeResponse__NoResponse &
      13; // 13
    static +CyberCafeInitiator: Class<EEconTradeResponse__CyberCafeInitiator> &
      EEconTradeResponse__CyberCafeInitiator &
      14; // 14
    static +CyberCafeTarget: Class<EEconTradeResponse__CyberCafeTarget> &
      EEconTradeResponse__CyberCafeTarget &
      15; // 15
    static +SchoolLabInitiator: Class<EEconTradeResponse__SchoolLabInitiator> &
      EEconTradeResponse__SchoolLabInitiator &
      16; // 16
    static +SchoolLabTarget: Class<EEconTradeResponse__SchoolLabTarget> &
      EEconTradeResponse__SchoolLabTarget &
      16; // 16
    static +InitiatorBlockedTarget: Class<EEconTradeResponse__InitiatorBlockedTarget> &
      EEconTradeResponse__InitiatorBlockedTarget &
      18; // 18
    static +InitiatorNeedsVerifiedEmail: Class<EEconTradeResponse__InitiatorNeedsVerifiedEmail> &
      EEconTradeResponse__InitiatorNeedsVerifiedEmail &
      20; // 20
    static +InitiatorNeedsSteamGuard: Class<EEconTradeResponse__InitiatorNeedsSteamGuard> &
      EEconTradeResponse__InitiatorNeedsSteamGuard &
      21; // 21
    static +TargetAccountCannotTrade: Class<EEconTradeResponse__TargetAccountCannotTrade> &
      EEconTradeResponse__TargetAccountCannotTrade &
      22; // 22
    static +InitiatorSteamGuardDuration: Class<EEconTradeResponse__InitiatorSteamGuardDuration> &
      EEconTradeResponse__InitiatorSteamGuardDuration &
      23; // 23
    static +InitiatorPasswordResetProbation: Class<EEconTradeResponse__InitiatorPasswordResetProbation> &
      EEconTradeResponse__InitiatorPasswordResetProbation &
      24; // 24
    static +InitiatorNewDeviceCooldown: Class<EEconTradeResponse__InitiatorNewDeviceCooldown> &
      EEconTradeResponse__InitiatorNewDeviceCooldown &
      25; // 25
    static +InitiatorSentInvalidCookie: Class<EEconTradeResponse__InitiatorSentInvalidCookie> &
      EEconTradeResponse__InitiatorSentInvalidCookie &
      26; // 26
    static +NeedsEmailConfirmation: Class<EEconTradeResponse__NeedsEmailConfirmation> &
      EEconTradeResponse__NeedsEmailConfirmation &
      27; // 27
    static +InitiatorRecentEmailChange: Class<EEconTradeResponse__InitiatorRecentEmailChange> &
      EEconTradeResponse__InitiatorRecentEmailChange &
      28; // 28
    static +NeedsMobileConfirmation: Class<EEconTradeResponse__NeedsMobileConfirmation> &
      EEconTradeResponse__NeedsMobileConfirmation &
      29; // 29
    static +TradingHoldForClearedTradeOffersInitiator: Class<EEconTradeResponse__TradingHoldForClearedTradeOffersInitiator> &
      EEconTradeResponse__TradingHoldForClearedTradeOffersInitiator &
      30; // 30
    static +WouldExceedMaxAssetCount: Class<EEconTradeResponse__WouldExceedMaxAssetCount> &
      EEconTradeResponse__WouldExceedMaxAssetCount &
      31; // 31
    static +OKToDeliver: Class<EEconTradeResponse__OKToDeliver> &
      EEconTradeResponse__OKToDeliver &
      50; // 50
  }

  declare class EEconTradeResponse__Accepted mixins EEconTradeResponse {}
  declare class EEconTradeResponse__Declined mixins EEconTradeResponse {}
  declare class EEconTradeResponse__TradeBannedInitiator
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__TradeBannedTarget
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__TargetAlreadyTrading
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__Disabled mixins EEconTradeResponse {}
  declare class EEconTradeResponse__NotLoggedIn mixins EEconTradeResponse {}
  declare class EEconTradeResponse__Cancel mixins EEconTradeResponse {}
  declare class EEconTradeResponse__TooSoon mixins EEconTradeResponse {}
  declare class EEconTradeResponse__TooSoonPenalty mixins EEconTradeResponse {}
  declare class EEconTradeResponse__ConnectionFailed
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__AlreadyTrading mixins EEconTradeResponse {}
  declare class EEconTradeResponse__AlreadyHasTradeRequest
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__NoResponse mixins EEconTradeResponse {}
  declare class EEconTradeResponse__CyberCafeInitiator
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__CyberCafeTarget mixins EEconTradeResponse {}
  declare class EEconTradeResponse__SchoolLabInitiator
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__SchoolLabTarget mixins EEconTradeResponse {}
  declare class EEconTradeResponse__InitiatorBlockedTarget
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__InitiatorNeedsVerifiedEmail
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__InitiatorNeedsSteamGuard
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__TargetAccountCannotTrade
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__InitiatorSteamGuardDuration
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__InitiatorPasswordResetProbation
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__InitiatorNewDeviceCooldown
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__InitiatorSentInvalidCookie
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__NeedsEmailConfirmation
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__InitiatorRecentEmailChange
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__NeedsMobileConfirmation
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__TradingHoldForClearedTradeOffersInitiator
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__WouldExceedMaxAssetCount
    mixins EEconTradeResponse {}
  declare class EEconTradeResponse__OKToDeliver mixins EEconTradeResponse {}

  declare export class EMarketingMessageFlags {
    constructor(...args: empty): mixed;
    static +None: Class<EMarketingMessageFlags__None> &
      EMarketingMessageFlags__None &
      0; // 0
    static +HighPriority: Class<EMarketingMessageFlags__HighPriority> &
      EMarketingMessageFlags__HighPriority &
      1; // 1
    static +PlatformWindows: Class<EMarketingMessageFlags__PlatformWindows> &
      EMarketingMessageFlags__PlatformWindows &
      2; // 2
    static +PlatformMac: Class<EMarketingMessageFlags__PlatformMac> &
      EMarketingMessageFlags__PlatformMac &
      4; // 4
    static +PlatformLinux: Class<EMarketingMessageFlags__PlatformLinux> &
      EMarketingMessageFlags__PlatformLinux &
      8; // 8
    static +PlatformRestrictions: Class<EMarketingMessageFlags__PlatformRestrictions> &
      EMarketingMessageFlags__PlatformRestrictions &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
  }

  declare class EMarketingMessageFlags__None mixins EMarketingMessageFlags {}
  declare class EMarketingMessageFlags__HighPriority
    mixins EMarketingMessageFlags {}
  declare class EMarketingMessageFlags__PlatformWindows
    mixins EMarketingMessageFlags {}
  declare class EMarketingMessageFlags__PlatformMac
    mixins EMarketingMessageFlags {}
  declare class EMarketingMessageFlags__PlatformLinux
    mixins EMarketingMessageFlags {}
  declare class EMarketingMessageFlags__PlatformRestrictions
    mixins EMarketingMessageFlags {}

  declare export class ENewsUpdateType {
    constructor(...args: empty): mixed;
    static +AppNews: Class<ENewsUpdateType__AppNews> &
      ENewsUpdateType__AppNews &
      0; // 0
    static +SteamAds: Class<ENewsUpdateType__SteamAds> &
      ENewsUpdateType__SteamAds &
      1; // 1
    static +SteamNews: Class<ENewsUpdateType__SteamNews> &
      ENewsUpdateType__SteamNews &
      2; // 2
    static +CDDBUpdate: Class<ENewsUpdateType__CDDBUpdate> &
      ENewsUpdateType__CDDBUpdate &
      3; // 3
    static +ClientUpdate: Class<ENewsUpdateType__ClientUpdate> &
      ENewsUpdateType__ClientUpdate &
      4; // 4
  }

  declare class ENewsUpdateType__AppNews mixins ENewsUpdateType {}
  declare class ENewsUpdateType__SteamAds mixins ENewsUpdateType {}
  declare class ENewsUpdateType__SteamNews mixins ENewsUpdateType {}
  declare class ENewsUpdateType__CDDBUpdate mixins ENewsUpdateType {}
  declare class ENewsUpdateType__ClientUpdate mixins ENewsUpdateType {}

  declare export class ESystemIMType {
    constructor(...args: empty): mixed;
    static +RawText: Class<ESystemIMType__RawText> & ESystemIMType__RawText & 0; // 0
    static +InvalidCard: Class<ESystemIMType__InvalidCard> &
      ESystemIMType__InvalidCard &
      1; // 1
    static +RecurringPurchaseFailed: Class<ESystemIMType__RecurringPurchaseFailed> &
      ESystemIMType__RecurringPurchaseFailed &
      2; // 2
    static +CardWillExpire: Class<ESystemIMType__CardWillExpire> &
      ESystemIMType__CardWillExpire &
      3; // 3
    static +SubscriptionExpired: Class<ESystemIMType__SubscriptionExpired> &
      ESystemIMType__SubscriptionExpired &
      4; // 4
    static +GuestPassReceived: Class<ESystemIMType__GuestPassReceived> &
      ESystemIMType__GuestPassReceived &
      5; // 5
    static +GuestPassGranted: Class<ESystemIMType__GuestPassGranted> &
      ESystemIMType__GuestPassGranted &
      6; // 6
    static +GiftRevoked: Class<ESystemIMType__GiftRevoked> &
      ESystemIMType__GiftRevoked &
      7; // 7
    static +SupportMessage: Class<ESystemIMType__SupportMessage> &
      ESystemIMType__SupportMessage &
      8; // 8
    static +SupportMessageClearAlert: Class<ESystemIMType__SupportMessageClearAlert> &
      ESystemIMType__SupportMessageClearAlert &
      9; // 9
    static +Max: Class<ESystemIMType__Max> & ESystemIMType__Max & 10; // 10
  }

  declare class ESystemIMType__RawText mixins ESystemIMType {}
  declare class ESystemIMType__InvalidCard mixins ESystemIMType {}
  declare class ESystemIMType__RecurringPurchaseFailed mixins ESystemIMType {}
  declare class ESystemIMType__CardWillExpire mixins ESystemIMType {}
  declare class ESystemIMType__SubscriptionExpired mixins ESystemIMType {}
  declare class ESystemIMType__GuestPassReceived mixins ESystemIMType {}
  declare class ESystemIMType__GuestPassGranted mixins ESystemIMType {}
  declare class ESystemIMType__GiftRevoked mixins ESystemIMType {}
  declare class ESystemIMType__SupportMessage mixins ESystemIMType {}
  declare class ESystemIMType__SupportMessageClearAlert mixins ESystemIMType {}
  declare class ESystemIMType__Max mixins ESystemIMType {}

  declare export class EChatFlags {
    constructor(...args: empty): mixed;
    static +Locked: Class<EChatFlags__Locked> & EChatFlags__Locked & 1; // 1
    static +InvisibleToFriends: Class<EChatFlags__InvisibleToFriends> &
      EChatFlags__InvisibleToFriends &
      2; // 2
    static +Moderated: Class<EChatFlags__Moderated> & EChatFlags__Moderated & 4; // 4
    static +Unjoinable: Class<EChatFlags__Unjoinable> &
      EChatFlags__Unjoinable &
      8; // 8
  }

  declare class EChatFlags__Locked mixins EChatFlags {}
  declare class EChatFlags__InvisibleToFriends mixins EChatFlags {}
  declare class EChatFlags__Moderated mixins EChatFlags {}
  declare class EChatFlags__Unjoinable mixins EChatFlags {}

  declare export class ERemoteStoragePlatform {
    constructor(...args: empty): mixed;
    static +None: Class<ERemoteStoragePlatform__None> &
      ERemoteStoragePlatform__None &
      0; // 0
    static +Windows: Class<ERemoteStoragePlatform__Windows> &
      ERemoteStoragePlatform__Windows &
      1; // 1
    static +OSX: Class<ERemoteStoragePlatform__OSX> &
      ERemoteStoragePlatform__OSX &
      2; // 2
    static +PS3: Class<ERemoteStoragePlatform__PS3> &
      ERemoteStoragePlatform__PS3 &
      4; // 4
    static +Linux: Class<ERemoteStoragePlatform__Linux> &
      ERemoteStoragePlatform__Linux &
      8; // 8
    static +Reserved1: Class<ERemoteStoragePlatform__Reserved1> &
      ERemoteStoragePlatform__Reserved1 &
      8; // 8
    static +Reserved2: Class<ERemoteStoragePlatform__Reserved2> &
      ERemoteStoragePlatform__Reserved2 &
      16; // 16
    static +All: Class<ERemoteStoragePlatform__All> &
      ERemoteStoragePlatform__All &
      -1; // -1
  }

  declare class ERemoteStoragePlatform__None mixins ERemoteStoragePlatform {}
  declare class ERemoteStoragePlatform__Windows mixins ERemoteStoragePlatform {}
  declare class ERemoteStoragePlatform__OSX mixins ERemoteStoragePlatform {}
  declare class ERemoteStoragePlatform__PS3 mixins ERemoteStoragePlatform {}
  declare class ERemoteStoragePlatform__Linux mixins ERemoteStoragePlatform {}
  declare class ERemoteStoragePlatform__Reserved1
    mixins ERemoteStoragePlatform {}
  declare class ERemoteStoragePlatform__Reserved2
    mixins ERemoteStoragePlatform {}
  declare class ERemoteStoragePlatform__All mixins ERemoteStoragePlatform {}

  declare export class EDRMBlobDownloadType {
    constructor(...args: empty): mixed;
    static +Error: Class<EDRMBlobDownloadType__Error> &
      EDRMBlobDownloadType__Error &
      0; // 0
    static +File: Class<EDRMBlobDownloadType__File> &
      EDRMBlobDownloadType__File &
      1; // 1
    static +Parts: Class<EDRMBlobDownloadType__Parts> &
      EDRMBlobDownloadType__Parts &
      2; // 2
    static +Compressed: Class<EDRMBlobDownloadType__Compressed> &
      EDRMBlobDownloadType__Compressed &
      4; // 4
    static +AllMask: Class<EDRMBlobDownloadType__AllMask> &
      EDRMBlobDownloadType__AllMask &
      7; // 7
    static +IsJob: Class<EDRMBlobDownloadType__IsJob> &
      EDRMBlobDownloadType__IsJob &
      8; // 8
    static +HighPriority: Class<EDRMBlobDownloadType__HighPriority> &
      EDRMBlobDownloadType__HighPriority &
      16; // 16
    static +AddTimestamp: Class<EDRMBlobDownloadType__AddTimestamp> &
      EDRMBlobDownloadType__AddTimestamp &
      32; // 32
    static +LowPriority: Class<EDRMBlobDownloadType__LowPriority> &
      EDRMBlobDownloadType__LowPriority &
      64; // 64
  }

  declare class EDRMBlobDownloadType__Error mixins EDRMBlobDownloadType {}
  declare class EDRMBlobDownloadType__File mixins EDRMBlobDownloadType {}
  declare class EDRMBlobDownloadType__Parts mixins EDRMBlobDownloadType {}
  declare class EDRMBlobDownloadType__Compressed mixins EDRMBlobDownloadType {}
  declare class EDRMBlobDownloadType__AllMask mixins EDRMBlobDownloadType {}
  declare class EDRMBlobDownloadType__IsJob mixins EDRMBlobDownloadType {}
  declare class EDRMBlobDownloadType__HighPriority
    mixins EDRMBlobDownloadType {}
  declare class EDRMBlobDownloadType__AddTimestamp
    mixins EDRMBlobDownloadType {}
  declare class EDRMBlobDownloadType__LowPriority mixins EDRMBlobDownloadType {}

  declare export class EDRMBlobDownloadErrorDetail {
    constructor(...args: empty): mixed;
    static +None: Class<EDRMBlobDownloadErrorDetail__None> &
      EDRMBlobDownloadErrorDetail__None &
      0; // 0
    static +DownloadFailed: Class<EDRMBlobDownloadErrorDetail__DownloadFailed> &
      EDRMBlobDownloadErrorDetail__DownloadFailed &
      1; // 1
    static +TargetLocked: Class<EDRMBlobDownloadErrorDetail__TargetLocked> &
      EDRMBlobDownloadErrorDetail__TargetLocked &
      2; // 2
    static +OpenZip: Class<EDRMBlobDownloadErrorDetail__OpenZip> &
      EDRMBlobDownloadErrorDetail__OpenZip &
      3; // 3
    static +ReadZipDirectory: Class<EDRMBlobDownloadErrorDetail__ReadZipDirectory> &
      EDRMBlobDownloadErrorDetail__ReadZipDirectory &
      4; // 4
    static +UnexpectedZipEntry: Class<EDRMBlobDownloadErrorDetail__UnexpectedZipEntry> &
      EDRMBlobDownloadErrorDetail__UnexpectedZipEntry &
      5; // 5
    static +UnzipFullFile: Class<EDRMBlobDownloadErrorDetail__UnzipFullFile> &
      EDRMBlobDownloadErrorDetail__UnzipFullFile &
      6; // 6
    static +UnknownBlobType: Class<EDRMBlobDownloadErrorDetail__UnknownBlobType> &
      EDRMBlobDownloadErrorDetail__UnknownBlobType &
      7; // 7
    static +UnzipStrips: Class<EDRMBlobDownloadErrorDetail__UnzipStrips> &
      EDRMBlobDownloadErrorDetail__UnzipStrips &
      8; // 8
    static +UnzipMergeGuid: Class<EDRMBlobDownloadErrorDetail__UnzipMergeGuid> &
      EDRMBlobDownloadErrorDetail__UnzipMergeGuid &
      9; // 9
    static +UnzipSignature: Class<EDRMBlobDownloadErrorDetail__UnzipSignature> &
      EDRMBlobDownloadErrorDetail__UnzipSignature &
      10; // 10
    static +ApplyStrips: Class<EDRMBlobDownloadErrorDetail__ApplyStrips> &
      EDRMBlobDownloadErrorDetail__ApplyStrips &
      11; // 11
    static +ApplyMergeGuid: Class<EDRMBlobDownloadErrorDetail__ApplyMergeGuid> &
      EDRMBlobDownloadErrorDetail__ApplyMergeGuid &
      12; // 12
    static +ApplySignature: Class<EDRMBlobDownloadErrorDetail__ApplySignature> &
      EDRMBlobDownloadErrorDetail__ApplySignature &
      13; // 13
    static +AppIdMismatch: Class<EDRMBlobDownloadErrorDetail__AppIdMismatch> &
      EDRMBlobDownloadErrorDetail__AppIdMismatch &
      14; // 14
    static +AppIdUnexpected: Class<EDRMBlobDownloadErrorDetail__AppIdUnexpected> &
      EDRMBlobDownloadErrorDetail__AppIdUnexpected &
      15; // 15
    static +AppliedSignatureCorrupt: Class<EDRMBlobDownloadErrorDetail__AppliedSignatureCorrupt> &
      EDRMBlobDownloadErrorDetail__AppliedSignatureCorrupt &
      16; // 16
    static +ApplyValveSignatureHeader: Class<EDRMBlobDownloadErrorDetail__ApplyValveSignatureHeader> &
      EDRMBlobDownloadErrorDetail__ApplyValveSignatureHeader &
      17; // 17
    static +UnzipValveSignatureHeader: Class<EDRMBlobDownloadErrorDetail__UnzipValveSignatureHeader> &
      EDRMBlobDownloadErrorDetail__UnzipValveSignatureHeader &
      18; // 18
    static +PathManipulationError: Class<EDRMBlobDownloadErrorDetail__PathManipulationError> &
      EDRMBlobDownloadErrorDetail__PathManipulationError &
      19; // 19
    static +TargetLocked_Base: Class<EDRMBlobDownloadErrorDetail__TargetLocked_Base> &
      EDRMBlobDownloadErrorDetail__TargetLocked_Base &
      65536; // 65536
    static +TargetLocked_Max: Class<EDRMBlobDownloadErrorDetail__TargetLocked_Max> &
      EDRMBlobDownloadErrorDetail__TargetLocked_Max &
      131071; // 131071
    static +NextBase: Class<EDRMBlobDownloadErrorDetail__NextBase> &
      EDRMBlobDownloadErrorDetail__NextBase &
      131072; // 131072
  }

  declare class EDRMBlobDownloadErrorDetail__None
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__DownloadFailed
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__TargetLocked
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__OpenZip
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__ReadZipDirectory
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__UnexpectedZipEntry
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__UnzipFullFile
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__UnknownBlobType
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__UnzipStrips
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__UnzipMergeGuid
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__UnzipSignature
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__ApplyStrips
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__ApplyMergeGuid
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__ApplySignature
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__AppIdMismatch
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__AppIdUnexpected
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__AppliedSignatureCorrupt
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__ApplyValveSignatureHeader
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__UnzipValveSignatureHeader
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__PathManipulationError
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__TargetLocked_Base
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__TargetLocked_Max
    mixins EDRMBlobDownloadErrorDetail {}
  declare class EDRMBlobDownloadErrorDetail__NextBase
    mixins EDRMBlobDownloadErrorDetail {}

  declare export class EClientStat {
    constructor(...args: empty): mixed;
    static +P2PConnectionsUDP: Class<EClientStat__P2PConnectionsUDP> &
      EClientStat__P2PConnectionsUDP &
      0; // 0
    static +P2PConnectionsRelay: Class<EClientStat__P2PConnectionsRelay> &
      EClientStat__P2PConnectionsRelay &
      1; // 1
    static +P2PGameConnections: Class<EClientStat__P2PGameConnections> &
      EClientStat__P2PGameConnections &
      2; // 2
    static +P2PVoiceConnections: Class<EClientStat__P2PVoiceConnections> &
      EClientStat__P2PVoiceConnections &
      3; // 3
    static +BytesDownloaded: Class<EClientStat__BytesDownloaded> &
      EClientStat__BytesDownloaded &
      4; // 4
    static +Max: Class<EClientStat__Max> & EClientStat__Max & 5; // 5
  }

  declare class EClientStat__P2PConnectionsUDP mixins EClientStat {}
  declare class EClientStat__P2PConnectionsRelay mixins EClientStat {}
  declare class EClientStat__P2PGameConnections mixins EClientStat {}
  declare class EClientStat__P2PVoiceConnections mixins EClientStat {}
  declare class EClientStat__BytesDownloaded mixins EClientStat {}
  declare class EClientStat__Max mixins EClientStat {}

  declare export class EClientStatAggregateMethod {
    constructor(...args: empty): mixed;
    static +LatestOnly: Class<EClientStatAggregateMethod__LatestOnly> &
      EClientStatAggregateMethod__LatestOnly &
      0; // 0
    static +Sum: Class<EClientStatAggregateMethod__Sum> &
      EClientStatAggregateMethod__Sum &
      1; // 1
    static +Event: Class<EClientStatAggregateMethod__Event> &
      EClientStatAggregateMethod__Event &
      2; // 2
    static +Scalar: Class<EClientStatAggregateMethod__Scalar> &
      EClientStatAggregateMethod__Scalar &
      3; // 3
  }

  declare class EClientStatAggregateMethod__LatestOnly
    mixins EClientStatAggregateMethod {}
  declare class EClientStatAggregateMethod__Sum
    mixins EClientStatAggregateMethod {}
  declare class EClientStatAggregateMethod__Event
    mixins EClientStatAggregateMethod {}
  declare class EClientStatAggregateMethod__Scalar
    mixins EClientStatAggregateMethod {}

  declare export class ELeaderboardDataRequest {
    constructor(...args: empty): mixed;
    static +Global: Class<ELeaderboardDataRequest__Global> &
      ELeaderboardDataRequest__Global &
      0; // 0
    static +GlobalAroundUser: Class<ELeaderboardDataRequest__GlobalAroundUser> &
      ELeaderboardDataRequest__GlobalAroundUser &
      1; // 1
    static +Friends: Class<ELeaderboardDataRequest__Friends> &
      ELeaderboardDataRequest__Friends &
      2; // 2
    static +Users: Class<ELeaderboardDataRequest__Users> &
      ELeaderboardDataRequest__Users &
      3; // 3
  }

  declare class ELeaderboardDataRequest__Global
    mixins ELeaderboardDataRequest {}
  declare class ELeaderboardDataRequest__GlobalAroundUser
    mixins ELeaderboardDataRequest {}
  declare class ELeaderboardDataRequest__Friends
    mixins ELeaderboardDataRequest {}
  declare class ELeaderboardDataRequest__Users mixins ELeaderboardDataRequest {}

  declare export class ELeaderboardSortMethod {
    constructor(...args: empty): mixed;
    static +None: Class<ELeaderboardSortMethod__None> &
      ELeaderboardSortMethod__None &
      0; // 0
    static +Ascending: Class<ELeaderboardSortMethod__Ascending> &
      ELeaderboardSortMethod__Ascending &
      1; // 1
    static +Descending: Class<ELeaderboardSortMethod__Descending> &
      ELeaderboardSortMethod__Descending &
      2; // 2
  }

  declare class ELeaderboardSortMethod__None mixins ELeaderboardSortMethod {}
  declare class ELeaderboardSortMethod__Ascending
    mixins ELeaderboardSortMethod {}
  declare class ELeaderboardSortMethod__Descending
    mixins ELeaderboardSortMethod {}

  declare export class ELeaderboardDisplayType {
    constructor(...args: empty): mixed;
    static +None: Class<ELeaderboardDisplayType__None> &
      ELeaderboardDisplayType__None &
      0; // 0
    static +Numeric: Class<ELeaderboardDisplayType__Numeric> &
      ELeaderboardDisplayType__Numeric &
      1; // 1
    static +TimeSeconds: Class<ELeaderboardDisplayType__TimeSeconds> &
      ELeaderboardDisplayType__TimeSeconds &
      2; // 2
    static +TimeMilliSeconds: Class<ELeaderboardDisplayType__TimeMilliSeconds> &
      ELeaderboardDisplayType__TimeMilliSeconds &
      3; // 3
  }

  declare class ELeaderboardDisplayType__None mixins ELeaderboardDisplayType {}
  declare class ELeaderboardDisplayType__Numeric
    mixins ELeaderboardDisplayType {}
  declare class ELeaderboardDisplayType__TimeSeconds
    mixins ELeaderboardDisplayType {}
  declare class ELeaderboardDisplayType__TimeMilliSeconds
    mixins ELeaderboardDisplayType {}

  declare export class ELeaderboardUploadScoreMethod {
    constructor(...args: empty): mixed;
    static +None: Class<ELeaderboardUploadScoreMethod__None> &
      ELeaderboardUploadScoreMethod__None &
      0; // 0
    static +KeepBest: Class<ELeaderboardUploadScoreMethod__KeepBest> &
      ELeaderboardUploadScoreMethod__KeepBest &
      1; // 1
    static +ForceUpdate: Class<ELeaderboardUploadScoreMethod__ForceUpdate> &
      ELeaderboardUploadScoreMethod__ForceUpdate &
      2; // 2
  }

  declare class ELeaderboardUploadScoreMethod__None
    mixins ELeaderboardUploadScoreMethod {}
  declare class ELeaderboardUploadScoreMethod__KeepBest
    mixins ELeaderboardUploadScoreMethod {}
  declare class ELeaderboardUploadScoreMethod__ForceUpdate
    mixins ELeaderboardUploadScoreMethod {}

  declare export class EUCMFilePrivacyState {
    constructor(...args: empty): mixed;
    static +Invalid: Class<EUCMFilePrivacyState__Invalid> &
      EUCMFilePrivacyState__Invalid &
      -1; // -1
    static +Private: Class<EUCMFilePrivacyState__Private> &
      EUCMFilePrivacyState__Private &
      2; // 2
    static +FriendsOnly: Class<EUCMFilePrivacyState__FriendsOnly> &
      EUCMFilePrivacyState__FriendsOnly &
      4; // 4
    static +Public: Class<EUCMFilePrivacyState__Public> &
      EUCMFilePrivacyState__Public &
      8; // 8
    static +All: Class<EUCMFilePrivacyState__All> &
      EUCMFilePrivacyState__All &
      "NO PRINT IMPLEMENTED: BinaryExpression"; // "NO PRINT IMPLEMENTED: BinaryExpression"
  }

  declare class EUCMFilePrivacyState__Invalid mixins EUCMFilePrivacyState {}
  declare class EUCMFilePrivacyState__Private mixins EUCMFilePrivacyState {}
  declare class EUCMFilePrivacyState__FriendsOnly mixins EUCMFilePrivacyState {}
  declare class EUCMFilePrivacyState__Public mixins EUCMFilePrivacyState {}
  declare class EUCMFilePrivacyState__All mixins EUCMFilePrivacyState {}

  declare export class EResult {
    constructor(...args: empty): mixed;
    static +Invalid: Class<EResult__Invalid> & EResult__Invalid & 0; // 0
    static +OK: Class<EResult__OK> & EResult__OK & 1; // 1
    static +Fail: Class<EResult__Fail> & EResult__Fail & 2; // 2
    static +NoConnection: Class<EResult__NoConnection> &
      EResult__NoConnection &
      3; // 3
    static +InvalidPassword: Class<EResult__InvalidPassword> &
      EResult__InvalidPassword &
      5; // 5
    static +LoggedInElsewhere: Class<EResult__LoggedInElsewhere> &
      EResult__LoggedInElsewhere &
      6; // 6
    static +InvalidProtocolVer: Class<EResult__InvalidProtocolVer> &
      EResult__InvalidProtocolVer &
      7; // 7
    static +InvalidParam: Class<EResult__InvalidParam> &
      EResult__InvalidParam &
      8; // 8
    static +FileNotFound: Class<EResult__FileNotFound> &
      EResult__FileNotFound &
      9; // 9
    static +Busy: Class<EResult__Busy> & EResult__Busy & 10; // 10
    static +InvalidState: Class<EResult__InvalidState> &
      EResult__InvalidState &
      11; // 11
    static +InvalidName: Class<EResult__InvalidName> &
      EResult__InvalidName &
      12; // 12
    static +InvalidEmail: Class<EResult__InvalidEmail> &
      EResult__InvalidEmail &
      13; // 13
    static +DuplicateName: Class<EResult__DuplicateName> &
      EResult__DuplicateName &
      14; // 14
    static +AccessDenied: Class<EResult__AccessDenied> &
      EResult__AccessDenied &
      15; // 15
    static +Timeout: Class<EResult__Timeout> & EResult__Timeout & 16; // 16
    static +Banned: Class<EResult__Banned> & EResult__Banned & 17; // 17
    static +AccountNotFound: Class<EResult__AccountNotFound> &
      EResult__AccountNotFound &
      18; // 18
    static +InvalidSteamID: Class<EResult__InvalidSteamID> &
      EResult__InvalidSteamID &
      19; // 19
    static +ServiceUnavailable: Class<EResult__ServiceUnavailable> &
      EResult__ServiceUnavailable &
      20; // 20
    static +NotLoggedOn: Class<EResult__NotLoggedOn> &
      EResult__NotLoggedOn &
      21; // 21
    static +Pending: Class<EResult__Pending> & EResult__Pending & 22; // 22
    static +EncryptionFailure: Class<EResult__EncryptionFailure> &
      EResult__EncryptionFailure &
      23; // 23
    static +InsufficientPrivilege: Class<EResult__InsufficientPrivilege> &
      EResult__InsufficientPrivilege &
      24; // 24
    static +LimitExceeded: Class<EResult__LimitExceeded> &
      EResult__LimitExceeded &
      25; // 25
    static +Revoked: Class<EResult__Revoked> & EResult__Revoked & 26; // 26
    static +Expired: Class<EResult__Expired> & EResult__Expired & 27; // 27
    static +AlreadyRedeemed: Class<EResult__AlreadyRedeemed> &
      EResult__AlreadyRedeemed &
      28; // 28
    static +DuplicateRequest: Class<EResult__DuplicateRequest> &
      EResult__DuplicateRequest &
      29; // 29
    static +AlreadyOwned: Class<EResult__AlreadyOwned> &
      EResult__AlreadyOwned &
      30; // 30
    static +IPNotFound: Class<EResult__IPNotFound> & EResult__IPNotFound & 31; // 31
    static +PersistFailed: Class<EResult__PersistFailed> &
      EResult__PersistFailed &
      32; // 32
    static +LockingFailed: Class<EResult__LockingFailed> &
      EResult__LockingFailed &
      33; // 33
    static +LogonSessionReplaced: Class<EResult__LogonSessionReplaced> &
      EResult__LogonSessionReplaced &
      34; // 34
    static +ConnectFailed: Class<EResult__ConnectFailed> &
      EResult__ConnectFailed &
      35; // 35
    static +HandshakeFailed: Class<EResult__HandshakeFailed> &
      EResult__HandshakeFailed &
      36; // 36
    static +IOFailure: Class<EResult__IOFailure> & EResult__IOFailure & 37; // 37
    static +RemoteDisconnect: Class<EResult__RemoteDisconnect> &
      EResult__RemoteDisconnect &
      38; // 38
    static +ShoppingCartNotFound: Class<EResult__ShoppingCartNotFound> &
      EResult__ShoppingCartNotFound &
      39; // 39
    static +Blocked: Class<EResult__Blocked> & EResult__Blocked & 40; // 40
    static +Ignored: Class<EResult__Ignored> & EResult__Ignored & 41; // 41
    static +NoMatch: Class<EResult__NoMatch> & EResult__NoMatch & 42; // 42
    static +AccountDisabled: Class<EResult__AccountDisabled> &
      EResult__AccountDisabled &
      43; // 43
    static +ServiceReadOnly: Class<EResult__ServiceReadOnly> &
      EResult__ServiceReadOnly &
      44; // 44
    static +AccountNotFeatured: Class<EResult__AccountNotFeatured> &
      EResult__AccountNotFeatured &
      45; // 45
    static +AdministratorOK: Class<EResult__AdministratorOK> &
      EResult__AdministratorOK &
      46; // 46
    static +ContentVersion: Class<EResult__ContentVersion> &
      EResult__ContentVersion &
      47; // 47
    static +TryAnotherCM: Class<EResult__TryAnotherCM> &
      EResult__TryAnotherCM &
      48; // 48
    static +PasswordRequiredToKickSession: Class<EResult__PasswordRequiredToKickSession> &
      EResult__PasswordRequiredToKickSession &
      49; // 49
    static +AlreadyLoggedInElsewhere: Class<EResult__AlreadyLoggedInElsewhere> &
      EResult__AlreadyLoggedInElsewhere &
      50; // 50
    static +Suspended: Class<EResult__Suspended> & EResult__Suspended & 51; // 51
    static +Cancelled: Class<EResult__Cancelled> & EResult__Cancelled & 52; // 52
    static +DataCorruption: Class<EResult__DataCorruption> &
      EResult__DataCorruption &
      53; // 53
    static +DiskFull: Class<EResult__DiskFull> & EResult__DiskFull & 54; // 54
    static +RemoteCallFailed: Class<EResult__RemoteCallFailed> &
      EResult__RemoteCallFailed &
      55; // 55
    static +PasswordNotSet: Class<EResult__PasswordNotSet> &
      EResult__PasswordNotSet &
      56; // 56
    static +PasswordUnset: Class<EResult__PasswordUnset> &
      EResult__PasswordUnset &
      56; // 56
    static +ExternalAccountUnlinked: Class<EResult__ExternalAccountUnlinked> &
      EResult__ExternalAccountUnlinked &
      57; // 57
    static +PSNTicketInvalid: Class<EResult__PSNTicketInvalid> &
      EResult__PSNTicketInvalid &
      58; // 58
    static +ExternalAccountAlreadyLinked: Class<EResult__ExternalAccountAlreadyLinked> &
      EResult__ExternalAccountAlreadyLinked &
      59; // 59
    static +RemoteFileConflict: Class<EResult__RemoteFileConflict> &
      EResult__RemoteFileConflict &
      60; // 60
    static +IllegalPassword: Class<EResult__IllegalPassword> &
      EResult__IllegalPassword &
      61; // 61
    static +SameAsPreviousValue: Class<EResult__SameAsPreviousValue> &
      EResult__SameAsPreviousValue &
      62; // 62
    static +AccountLogonDenied: Class<EResult__AccountLogonDenied> &
      EResult__AccountLogonDenied &
      63; // 63
    static +CannotUseOldPassword: Class<EResult__CannotUseOldPassword> &
      EResult__CannotUseOldPassword &
      64; // 64
    static +InvalidLoginAuthCode: Class<EResult__InvalidLoginAuthCode> &
      EResult__InvalidLoginAuthCode &
      65; // 65
    static +AccountLogonDeniedNoMailSent: Class<EResult__AccountLogonDeniedNoMailSent> &
      EResult__AccountLogonDeniedNoMailSent &
      66; // 66
    static +AccountLogonDeniedNoMail: Class<EResult__AccountLogonDeniedNoMail> &
      EResult__AccountLogonDeniedNoMail &
      66; // 66
    static +HardwareNotCapableOfIPT: Class<EResult__HardwareNotCapableOfIPT> &
      EResult__HardwareNotCapableOfIPT &
      67; // 67
    static +IPTInitError: Class<EResult__IPTInitError> &
      EResult__IPTInitError &
      68; // 68
    static +ParentalControlRestricted: Class<EResult__ParentalControlRestricted> &
      EResult__ParentalControlRestricted &
      69; // 69
    static +FacebookQueryError: Class<EResult__FacebookQueryError> &
      EResult__FacebookQueryError &
      70; // 70
    static +ExpiredLoginAuthCode: Class<EResult__ExpiredLoginAuthCode> &
      EResult__ExpiredLoginAuthCode &
      71; // 71
    static +IPLoginRestrictionFailed: Class<EResult__IPLoginRestrictionFailed> &
      EResult__IPLoginRestrictionFailed &
      72; // 72
    static +AccountLocked: Class<EResult__AccountLocked> &
      EResult__AccountLocked &
      73; // 73
    static +AccountLockedDown: Class<EResult__AccountLockedDown> &
      EResult__AccountLockedDown &
      73; // 73
    static +AccountLogonDeniedVerifiedEmailRequired: Class<EResult__AccountLogonDeniedVerifiedEmailRequired> &
      EResult__AccountLogonDeniedVerifiedEmailRequired &
      74; // 74
    static +NoMatchingURL: Class<EResult__NoMatchingURL> &
      EResult__NoMatchingURL &
      75; // 75
    static +BadResponse: Class<EResult__BadResponse> &
      EResult__BadResponse &
      76; // 76
    static +RequirePasswordReEntry: Class<EResult__RequirePasswordReEntry> &
      EResult__RequirePasswordReEntry &
      77; // 77
    static +ValueOutOfRange: Class<EResult__ValueOutOfRange> &
      EResult__ValueOutOfRange &
      78; // 78
    static +UnexpectedError: Class<EResult__UnexpectedError> &
      EResult__UnexpectedError &
      79; // 79
    static +Disabled: Class<EResult__Disabled> & EResult__Disabled & 80; // 80
    static +InvalidCEGSubmission: Class<EResult__InvalidCEGSubmission> &
      EResult__InvalidCEGSubmission &
      81; // 81
    static +RestrictedDevice: Class<EResult__RestrictedDevice> &
      EResult__RestrictedDevice &
      82; // 82
    static +RegionLocked: Class<EResult__RegionLocked> &
      EResult__RegionLocked &
      83; // 83
    static +RateLimitExceeded: Class<EResult__RateLimitExceeded> &
      EResult__RateLimitExceeded &
      84; // 84
    static +AccountLogonDeniedNeedTwoFactorCode: Class<EResult__AccountLogonDeniedNeedTwoFactorCode> &
      EResult__AccountLogonDeniedNeedTwoFactorCode &
      85; // 85
    static +AccountLoginDeniedNeedTwoFactor: Class<EResult__AccountLoginDeniedNeedTwoFactor> &
      EResult__AccountLoginDeniedNeedTwoFactor &
      85; // 85
    static +ItemOrEntryHasBeenDeleted: Class<EResult__ItemOrEntryHasBeenDeleted> &
      EResult__ItemOrEntryHasBeenDeleted &
      86; // 86
    static +ItemDeleted: Class<EResult__ItemDeleted> &
      EResult__ItemDeleted &
      86; // 86
    static +AccountLoginDeniedThrottle: Class<EResult__AccountLoginDeniedThrottle> &
      EResult__AccountLoginDeniedThrottle &
      87; // 87
    static +TwoFactorCodeMismatch: Class<EResult__TwoFactorCodeMismatch> &
      EResult__TwoFactorCodeMismatch &
      88; // 88
    static +TwoFactorActivationCodeMismatch: Class<EResult__TwoFactorActivationCodeMismatch> &
      EResult__TwoFactorActivationCodeMismatch &
      89; // 89
    static +AccountAssociatedToMultiplePlayers: Class<EResult__AccountAssociatedToMultiplePlayers> &
      EResult__AccountAssociatedToMultiplePlayers &
      90; // 90
    static +AccountAssociatedToMultiplePartners: Class<EResult__AccountAssociatedToMultiplePartners> &
      EResult__AccountAssociatedToMultiplePartners &
      90; // 90
    static +NotModified: Class<EResult__NotModified> &
      EResult__NotModified &
      91; // 91
    static +NoMobileDeviceAvailable: Class<EResult__NoMobileDeviceAvailable> &
      EResult__NoMobileDeviceAvailable &
      92; // 92
    static +NoMobileDevice: Class<EResult__NoMobileDevice> &
      EResult__NoMobileDevice &
      92; // 92
    static +TimeIsOutOfSync: Class<EResult__TimeIsOutOfSync> &
      EResult__TimeIsOutOfSync &
      93; // 93
    static +TimeNotSynced: Class<EResult__TimeNotSynced> &
      EResult__TimeNotSynced &
      93; // 93
    static +SMSCodeFailed: Class<EResult__SMSCodeFailed> &
      EResult__SMSCodeFailed &
      94; // 94
    static +TooManyAccountsAccessThisResource: Class<EResult__TooManyAccountsAccessThisResource> &
      EResult__TooManyAccountsAccessThisResource &
      95; // 95
    static +AccountLimitExceeded: Class<EResult__AccountLimitExceeded> &
      EResult__AccountLimitExceeded &
      95; // 95
    static +AccountActivityLimitExceeded: Class<EResult__AccountActivityLimitExceeded> &
      EResult__AccountActivityLimitExceeded &
      96; // 96
    static +PhoneActivityLimitExceeded: Class<EResult__PhoneActivityLimitExceeded> &
      EResult__PhoneActivityLimitExceeded &
      97; // 97
    static +RefundToWallet: Class<EResult__RefundToWallet> &
      EResult__RefundToWallet &
      98; // 98
    static +EmailSendFailure: Class<EResult__EmailSendFailure> &
      EResult__EmailSendFailure &
      99; // 99
    static +NotSettled: Class<EResult__NotSettled> & EResult__NotSettled & 100; // 100
    static +NeedCaptcha: Class<EResult__NeedCaptcha> &
      EResult__NeedCaptcha &
      101; // 101
    static +GSLTDenied: Class<EResult__GSLTDenied> & EResult__GSLTDenied & 102; // 102
    static +GSOwnerDenied: Class<EResult__GSOwnerDenied> &
      EResult__GSOwnerDenied &
      103; // 103
    static +InvalidItemType: Class<EResult__InvalidItemType> &
      EResult__InvalidItemType &
      104; // 104
    static +IPBanned: Class<EResult__IPBanned> & EResult__IPBanned & 105; // 105
    static +GSLTExpired: Class<EResult__GSLTExpired> &
      EResult__GSLTExpired &
      106; // 106
    static +InsufficientFunds: Class<EResult__InsufficientFunds> &
      EResult__InsufficientFunds &
      107; // 107
    static +TooManyPending: Class<EResult__TooManyPending> &
      EResult__TooManyPending &
      108; // 108
    static +NoSiteLicensesFound: Class<EResult__NoSiteLicensesFound> &
      EResult__NoSiteLicensesFound &
      109; // 109
    static +WGNetworkSendExceeded: Class<EResult__WGNetworkSendExceeded> &
      EResult__WGNetworkSendExceeded &
      110; // 110
  }

  declare class EResult__Invalid mixins EResult {}
  declare class EResult__OK mixins EResult {}
  declare class EResult__Fail mixins EResult {}
  declare class EResult__NoConnection mixins EResult {}
  declare class EResult__InvalidPassword mixins EResult {}
  declare class EResult__LoggedInElsewhere mixins EResult {}
  declare class EResult__InvalidProtocolVer mixins EResult {}
  declare class EResult__InvalidParam mixins EResult {}
  declare class EResult__FileNotFound mixins EResult {}
  declare class EResult__Busy mixins EResult {}
  declare class EResult__InvalidState mixins EResult {}
  declare class EResult__InvalidName mixins EResult {}
  declare class EResult__InvalidEmail mixins EResult {}
  declare class EResult__DuplicateName mixins EResult {}
  declare class EResult__AccessDenied mixins EResult {}
  declare class EResult__Timeout mixins EResult {}
  declare class EResult__Banned mixins EResult {}
  declare class EResult__AccountNotFound mixins EResult {}
  declare class EResult__InvalidSteamID mixins EResult {}
  declare class EResult__ServiceUnavailable mixins EResult {}
  declare class EResult__NotLoggedOn mixins EResult {}
  declare class EResult__Pending mixins EResult {}
  declare class EResult__EncryptionFailure mixins EResult {}
  declare class EResult__InsufficientPrivilege mixins EResult {}
  declare class EResult__LimitExceeded mixins EResult {}
  declare class EResult__Revoked mixins EResult {}
  declare class EResult__Expired mixins EResult {}
  declare class EResult__AlreadyRedeemed mixins EResult {}
  declare class EResult__DuplicateRequest mixins EResult {}
  declare class EResult__AlreadyOwned mixins EResult {}
  declare class EResult__IPNotFound mixins EResult {}
  declare class EResult__PersistFailed mixins EResult {}
  declare class EResult__LockingFailed mixins EResult {}
  declare class EResult__LogonSessionReplaced mixins EResult {}
  declare class EResult__ConnectFailed mixins EResult {}
  declare class EResult__HandshakeFailed mixins EResult {}
  declare class EResult__IOFailure mixins EResult {}
  declare class EResult__RemoteDisconnect mixins EResult {}
  declare class EResult__ShoppingCartNotFound mixins EResult {}
  declare class EResult__Blocked mixins EResult {}
  declare class EResult__Ignored mixins EResult {}
  declare class EResult__NoMatch mixins EResult {}
  declare class EResult__AccountDisabled mixins EResult {}
  declare class EResult__ServiceReadOnly mixins EResult {}
  declare class EResult__AccountNotFeatured mixins EResult {}
  declare class EResult__AdministratorOK mixins EResult {}
  declare class EResult__ContentVersion mixins EResult {}
  declare class EResult__TryAnotherCM mixins EResult {}
  declare class EResult__PasswordRequiredToKickSession mixins EResult {}
  declare class EResult__AlreadyLoggedInElsewhere mixins EResult {}
  declare class EResult__Suspended mixins EResult {}
  declare class EResult__Cancelled mixins EResult {}
  declare class EResult__DataCorruption mixins EResult {}
  declare class EResult__DiskFull mixins EResult {}
  declare class EResult__RemoteCallFailed mixins EResult {}
  declare class EResult__PasswordNotSet mixins EResult {}
  declare class EResult__PasswordUnset mixins EResult {}
  declare class EResult__ExternalAccountUnlinked mixins EResult {}
  declare class EResult__PSNTicketInvalid mixins EResult {}
  declare class EResult__ExternalAccountAlreadyLinked mixins EResult {}
  declare class EResult__RemoteFileConflict mixins EResult {}
  declare class EResult__IllegalPassword mixins EResult {}
  declare class EResult__SameAsPreviousValue mixins EResult {}
  declare class EResult__AccountLogonDenied mixins EResult {}
  declare class EResult__CannotUseOldPassword mixins EResult {}
  declare class EResult__InvalidLoginAuthCode mixins EResult {}
  declare class EResult__AccountLogonDeniedNoMailSent mixins EResult {}
  declare class EResult__AccountLogonDeniedNoMail mixins EResult {}
  declare class EResult__HardwareNotCapableOfIPT mixins EResult {}
  declare class EResult__IPTInitError mixins EResult {}
  declare class EResult__ParentalControlRestricted mixins EResult {}
  declare class EResult__FacebookQueryError mixins EResult {}
  declare class EResult__ExpiredLoginAuthCode mixins EResult {}
  declare class EResult__IPLoginRestrictionFailed mixins EResult {}
  declare class EResult__AccountLocked mixins EResult {}
  declare class EResult__AccountLockedDown mixins EResult {}
  declare class EResult__AccountLogonDeniedVerifiedEmailRequired
    mixins EResult {}
  declare class EResult__NoMatchingURL mixins EResult {}
  declare class EResult__BadResponse mixins EResult {}
  declare class EResult__RequirePasswordReEntry mixins EResult {}
  declare class EResult__ValueOutOfRange mixins EResult {}
  declare class EResult__UnexpectedError mixins EResult {}
  declare class EResult__Disabled mixins EResult {}
  declare class EResult__InvalidCEGSubmission mixins EResult {}
  declare class EResult__RestrictedDevice mixins EResult {}
  declare class EResult__RegionLocked mixins EResult {}
  declare class EResult__RateLimitExceeded mixins EResult {}
  declare class EResult__AccountLogonDeniedNeedTwoFactorCode mixins EResult {}
  declare class EResult__AccountLoginDeniedNeedTwoFactor mixins EResult {}
  declare class EResult__ItemOrEntryHasBeenDeleted mixins EResult {}
  declare class EResult__ItemDeleted mixins EResult {}
  declare class EResult__AccountLoginDeniedThrottle mixins EResult {}
  declare class EResult__TwoFactorCodeMismatch mixins EResult {}
  declare class EResult__TwoFactorActivationCodeMismatch mixins EResult {}
  declare class EResult__AccountAssociatedToMultiplePlayers mixins EResult {}
  declare class EResult__AccountAssociatedToMultiplePartners mixins EResult {}
  declare class EResult__NotModified mixins EResult {}
  declare class EResult__NoMobileDeviceAvailable mixins EResult {}
  declare class EResult__NoMobileDevice mixins EResult {}
  declare class EResult__TimeIsOutOfSync mixins EResult {}
  declare class EResult__TimeNotSynced mixins EResult {}
  declare class EResult__SMSCodeFailed mixins EResult {}
  declare class EResult__TooManyAccountsAccessThisResource mixins EResult {}
  declare class EResult__AccountLimitExceeded mixins EResult {}
  declare class EResult__AccountActivityLimitExceeded mixins EResult {}
  declare class EResult__PhoneActivityLimitExceeded mixins EResult {}
  declare class EResult__RefundToWallet mixins EResult {}
  declare class EResult__EmailSendFailure mixins EResult {}
  declare class EResult__NotSettled mixins EResult {}
  declare class EResult__NeedCaptcha mixins EResult {}
  declare class EResult__GSLTDenied mixins EResult {}
  declare class EResult__GSOwnerDenied mixins EResult {}
  declare class EResult__InvalidItemType mixins EResult {}
  declare class EResult__IPBanned mixins EResult {}
  declare class EResult__GSLTExpired mixins EResult {}
  declare class EResult__InsufficientFunds mixins EResult {}
  declare class EResult__TooManyPending mixins EResult {}
  declare class EResult__NoSiteLicensesFound mixins EResult {}
  declare class EResult__WGNetworkSendExceeded mixins EResult {}
}
