declare module "steam-client" {
  declare export class CMClient mixins NodeJS$EventEmitter {
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
    constructor(protocol?: $Values<typeof EConnectionProtocol>): this;

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
      msg: $Values<typeof EMsg>,

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
    loggedOff: (eresesult: $Values<typeof EResult>) => void;
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
    eresult: $Values<typeof EResult>;

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

  declare export var EConnectionProtocol: {|
    +TCP: 1, // 1
    +UDP: 2, // 2
    +WebSocket: 3 // 3
  |};

  declare export var EMsg: {|
    +Invalid: 0, // 0
    +Multi: 1, // 1
    +ProtobufWrapped: 2, // 2
    +BaseGeneral: 100, // 100
    +GenericReply: 100, // 100
    +DestJobFailed: 113, // 113
    +Alert: 115, // 115
    +SCIDRequest: 120, // 120
    +SCIDResponse: 121, // 121
    +JobHeartbeat: 123, // 123
    +HubConnect: 124, // 124
    +Subscribe: 126, // 126
    +RouteMessage: 127, // 127
    +RemoteSysID: 128, // 128
    +AMCreateAccountResponse: 129, // 129
    +WGRequest: 130, // 130
    +WGResponse: 131, // 131
    +KeepAlive: 132, // 132
    +WebAPIJobRequest: 133, // 133
    +WebAPIJobResponse: 134, // 134
    +ClientSessionStart: 135, // 135
    +ClientSessionEnd: 136, // 136
    +ClientSessionUpdateAuthTicket: 137, // 137
    +ClientSessionUpdate: 137, // 137
    +StatsDeprecated: 138, // 138
    +Ping: 139, // 139
    +PingResponse: 140, // 140
    +Stats: 141, // 141
    +RequestFullStatsBlock: 142, // 142
    +LoadDBOCacheItem: 143, // 143
    +LoadDBOCacheItemResponse: 144, // 144
    +InvalidateDBOCacheItems: 145, // 145
    +ServiceMethod: 146, // 146
    +ServiceMethodResponse: 147, // 147
    +ClientPackageVersions: 148, // 148
    +TimestampRequest: 149, // 149
    +TimestampResponse: 150, // 150
    +BaseShell: 200, // 200
    +AssignSysID: 200, // 200
    +Exit: 201, // 201
    +DirRequest: 202, // 202
    +DirResponse: 203, // 203
    +ZipRequest: 204, // 204
    +ZipResponse: 205, // 205
    +UpdateRecordResponse: 215, // 215
    +UpdateCreditCardRequest: 221, // 221
    +UpdateUserBanResponse: 225, // 225
    +PrepareToExit: 226, // 226
    +ContentDescriptionUpdate: 227, // 227
    +TestResetServer: 228, // 228
    +UniverseChanged: 229, // 229
    +ShellConfigInfoUpdate: 230, // 230
    +RequestWindowsEventLogEntries: 233, // 233
    +ProvideWindowsEventLogEntries: 234, // 234
    +ShellSearchLogs: 235, // 235
    +ShellSearchLogsResponse: 236, // 236
    +ShellCheckWindowsUpdates: 237, // 237
    +ShellCheckWindowsUpdatesResponse: 238, // 238
    +ShellFlushUserLicenseCache: 239, // 239
    +BaseGM: 300, // 300
    +Heartbeat: 300, // 300
    +ShellFailed: 301, // 301
    +ExitShells: 307, // 307
    +ExitShell: 308, // 308
    +GracefulExitShell: 309, // 309
    +NotifyWatchdog: 314, // 314
    +LicenseProcessingComplete: 316, // 316
    +SetTestFlag: 317, // 317
    +QueuedEmailsComplete: 318, // 318
    +GMReportPHPError: 319, // 319
    +GMDRMSync: 320, // 320
    +PhysicalBoxInventory: 321, // 321
    +UpdateConfigFile: 322, // 322
    +TestInitDB: 323, // 323
    +GMWriteConfigToSQL: 324, // 324
    +GMLoadActivationCodes: 325, // 325
    +GMQueueForFBS: 326, // 326
    +GMSchemaConversionResults: 327, // 327
    +GMSchemaConversionResultsResponse: 328, // 328
    +GMWriteShellFailureToSQL: 329, // 329
    +GMWriteStatsToSOS: 330, // 330
    +GMGetServiceMethodRouting: 331, // 331
    +GMGetServiceMethodRoutingResponse: 332, // 332
    +GMConvertUserWallets: 333, // 333
    +BaseAIS: 400, // 400
    +AISRefreshContentDescription: 401, // 401
    +AISRequestContentDescription: 402, // 402
    +AISUpdateAppInfo: 403, // 403
    +AISUpdatePackageInfo: 404, // 404
    +AISUpdatePackageCosts: 404, // 404
    +AISGetPackageChangeNumber: 405, // 405
    +AISGetPackageChangeNumberResponse: 406, // 406
    +AISAppInfoTableChanged: 407, // 407
    +AISUpdatePackageCostsResponse: 408, // 408
    +AISCreateMarketingMessage: 409, // 409
    +AISCreateMarketingMessageResponse: 410, // 410
    +AISGetMarketingMessage: 411, // 411
    +AISGetMarketingMessageResponse: 412, // 412
    +AISUpdateMarketingMessage: 413, // 413
    +AISUpdateMarketingMessageResponse: 414, // 414
    +AISRequestMarketingMessageUpdate: 415, // 415
    +AISDeleteMarketingMessage: 416, // 416
    +AISGetMarketingTreatments: 419, // 419
    +AISGetMarketingTreatmentsResponse: 420, // 420
    +AISRequestMarketingTreatmentUpdate: 421, // 421
    +AISTestAddPackage: 422, // 422
    +AIGetAppGCFlags: 423, // 423
    +AIGetAppGCFlagsResponse: 424, // 424
    +AIGetAppList: 425, // 425
    +AIGetAppListResponse: 426, // 426
    +AIGetAppInfo: 427, // 427
    +AIGetAppInfoResponse: 428, // 428
    +AISGetCouponDefinition: 429, // 429
    +AISGetCouponDefinitionResponse: 430, // 430
    +AISUpdateSlaveContentDescription: 431, // 431
    +AISUpdateSlaveContentDescriptionResponse: 432, // 432
    +AISTestEnableGC: 433, // 433
    +BaseAM: 500, // 500
    +AMUpdateUserBanRequest: 504, // 504
    +AMAddLicense: 505, // 505
    +AMBeginProcessingLicenses: 507, // 507
    +AMSendSystemIMToUser: 508, // 508
    +AMExtendLicense: 509, // 509
    +AMAddMinutesToLicense: 510, // 510
    +AMCancelLicense: 511, // 511
    +AMInitPurchase: 512, // 512
    +AMPurchaseResponse: 513, // 513
    +AMGetFinalPrice: 514, // 514
    +AMGetFinalPriceResponse: 515, // 515
    +AMGetLegacyGameKey: 516, // 516
    +AMGetLegacyGameKeyResponse: 517, // 517
    +AMFindHungTransactions: 518, // 518
    +AMSetAccountTrustedRequest: 519, // 519
    +AMCompletePurchase: 521, // 521
    +AMCancelPurchase: 522, // 522
    +AMNewChallenge: 523, // 523
    +AMLoadOEMTickets: 524, // 524
    +AMFixPendingPurchase: 525, // 525
    +AMFixPendingPurchaseResponse: 526, // 526
    +AMIsUserBanned: 527, // 527
    +AMRegisterKey: 528, // 528
    +AMLoadActivationCodes: 529, // 529
    +AMLoadActivationCodesResponse: 530, // 530
    +AMLookupKeyResponse: 531, // 531
    +AMLookupKey: 532, // 532
    +AMChatCleanup: 533, // 533
    +AMClanCleanup: 534, // 534
    +AMFixPendingRefund: 535, // 535
    +AMReverseChargeback: 536, // 536
    +AMReverseChargebackResponse: 537, // 537
    +AMClanCleanupList: 538, // 538
    +AMGetLicenses: 539, // 539
    +AMGetLicensesResponse: 540, // 540
    +AllowUserToPlayQuery: 550, // 550
    +AllowUserToPlayResponse: 551, // 551
    +AMVerfiyUser: 552, // 552
    +AMClientNotPlaying: 553, // 553
    +ClientRequestFriendship: 554, // 554
    +AMRelayPublishStatus: 555, // 555
    +AMResetCommunityContent: 556, // 556
    +AMPrimePersonaStateCache: 557, // 557
    +AMAllowUserContentQuery: 558, // 558
    +AMAllowUserContentResponse: 559, // 559
    +AMInitPurchaseResponse: 560, // 560
    +AMRevokePurchaseResponse: 561, // 561
    +AMLockProfile: 562, // 562
    +AMRefreshGuestPasses: 563, // 563
    +AMInviteUserToClan: 564, // 564
    +AMAcknowledgeClanInvite: 565, // 565
    +AMGrantGuestPasses: 566, // 566
    +AMClanDataUpdated: 567, // 567
    +AMReloadAccount: 568, // 568
    +AMClientChatMsgRelay: 569, // 569
    +AMChatMulti: 570, // 570
    +AMClientChatInviteRelay: 571, // 571
    +AMChatInvite: 572, // 572
    +AMClientJoinChatRelay: 573, // 573
    +AMClientChatMemberInfoRelay: 574, // 574
    +AMPublishChatMemberInfo: 575, // 575
    +AMClientAcceptFriendInvite: 576, // 576
    +AMChatEnter: 577, // 577
    +AMClientPublishRemovalFromSource: 578, // 578
    +AMChatActionResult: 579, // 579
    +AMFindAccounts: 580, // 580
    +AMFindAccountsResponse: 581, // 581
    +AMRequestAccountData: 582, // 582
    +AMRequestAccountDataResponse: 583, // 583
    +AMSetAccountFlags: 584, // 584
    +AMCreateClan: 586, // 586
    +AMCreateClanResponse: 587, // 587
    +AMGetClanDetails: 588, // 588
    +AMGetClanDetailsResponse: 589, // 589
    +AMSetPersonaName: 590, // 590
    +AMSetAvatar: 591, // 591
    +AMAuthenticateUser: 592, // 592
    +AMAuthenticateUserResponse: 593, // 593
    +AMGetAccountFriendsCount: 594, // 594
    +AMGetAccountFriendsCountResponse: 595, // 595
    +AMP2PIntroducerMessage: 596, // 596
    +ClientChatAction: 597, // 597
    +AMClientChatActionRelay: 598, // 598
    +BaseVS: 600, // 600
    +ReqChallenge: 600, // 600
    +VACResponse: 601, // 601
    +ReqChallengeTest: 602, // 602
    +VSMarkCheat: 604, // 604
    +VSAddCheat: 605, // 605
    +VSPurgeCodeModDB: 606, // 606
    +VSGetChallengeResults: 607, // 607
    +VSChallengeResultText: 608, // 608
    +VSReportLingerer: 609, // 609
    +VSRequestManagedChallenge: 610, // 610
    +VSLoadDBFinished: 611, // 611
    +BaseDRMS: 625, // 625
    +DRMBuildBlobRequest: 628, // 628
    +DRMBuildBlobResponse: 629, // 629
    +DRMResolveGuidRequest: 630, // 630
    +DRMResolveGuidResponse: 631, // 631
    +DRMVariabilityReport: 633, // 633
    +DRMVariabilityReportResponse: 634, // 634
    +DRMStabilityReport: 635, // 635
    +DRMStabilityReportResponse: 636, // 636
    +DRMDetailsReportRequest: 637, // 637
    +DRMDetailsReportResponse: 638, // 638
    +DRMProcessFile: 639, // 639
    +DRMAdminUpdate: 640, // 640
    +DRMAdminUpdateResponse: 641, // 641
    +DRMSync: 642, // 642
    +DRMSyncResponse: 643, // 643
    +DRMProcessFileResponse: 644, // 644
    +DRMEmptyGuidCache: 645, // 645
    +DRMEmptyGuidCacheResponse: 646, // 646
    +BaseCS: 650, // 650
    +CSUserContentRequest: 652, // 652
    +BaseClient: 700, // 700
    +ClientLogOn_Deprecated: 701, // 701
    +ClientAnonLogOn_Deprecated: 702, // 702
    +ClientHeartBeat: 703, // 703
    +ClientVACResponse: 704, // 704
    +ClientGamesPlayed_obsolete: 705, // 705
    +ClientLogOff: 706, // 706
    +ClientNoUDPConnectivity: 707, // 707
    +ClientInformOfCreateAccount: 708, // 708
    +ClientAckVACBan: 709, // 709
    +ClientConnectionStats: 710, // 710
    +ClientInitPurchase: 711, // 711
    +ClientPingResponse: 712, // 712
    +ClientRemoveFriend: 714, // 714
    +ClientGamesPlayedNoDataBlob: 715, // 715
    +ClientChangeStatus: 716, // 716
    +ClientVacStatusResponse: 717, // 717
    +ClientFriendMsg: 718, // 718
    +ClientGameConnect_obsolete: 719, // 719
    +ClientGamesPlayed2_obsolete: 720, // 720
    +ClientGameEnded_obsolete: 721, // 721
    +ClientGetFinalPrice: 722, // 722
    +ClientSystemIM: 726, // 726
    +ClientSystemIMAck: 727, // 727
    +ClientGetLicenses: 728, // 728
    +ClientCancelLicense: 729, // 729
    +ClientGetLegacyGameKey: 730, // 730
    +ClientContentServerLogOn_Deprecated: 731, // 731
    +ClientAckVACBan2: 732, // 732
    +ClientAckMessageByGID: 735, // 735
    +ClientGetPurchaseReceipts: 736, // 736
    +ClientAckPurchaseReceipt: 737, // 737
    +ClientGamesPlayed3_obsolete: 738, // 738
    +ClientSendGuestPass: 739, // 739
    +ClientAckGuestPass: 740, // 740
    +ClientRedeemGuestPass: 741, // 741
    +ClientGamesPlayed: 742, // 742
    +ClientRegisterKey: 743, // 743
    +ClientInviteUserToClan: 744, // 744
    +ClientAcknowledgeClanInvite: 745, // 745
    +ClientPurchaseWithMachineID: 746, // 746
    +ClientAppUsageEvent: 747, // 747
    +ClientGetGiftTargetList: 748, // 748
    +ClientGetGiftTargetListResponse: 749, // 749
    +ClientLogOnResponse: 751, // 751
    +ClientVACChallenge: 753, // 753
    +ClientSetHeartbeatRate: 755, // 755
    +ClientNotLoggedOnDeprecated: 756, // 756
    +ClientLoggedOff: 757, // 757
    +GSApprove: 758, // 758
    +GSDeny: 759, // 759
    +GSKick: 760, // 760
    +ClientCreateAcctResponse: 761, // 761
    +ClientPurchaseResponse: 763, // 763
    +ClientPing: 764, // 764
    +ClientNOP: 765, // 765
    +ClientPersonaState: 766, // 766
    +ClientFriendsList: 767, // 767
    +ClientAccountInfo: 768, // 768
    +ClientVacStatusQuery: 770, // 770
    +ClientNewsUpdate: 771, // 771
    +ClientGameConnectDeny: 773, // 773
    +GSStatusReply: 774, // 774
    +ClientGetFinalPriceResponse: 775, // 775
    +ClientGameConnectTokens: 779, // 779
    +ClientLicenseList: 780, // 780
    +ClientCancelLicenseResponse: 781, // 781
    +ClientVACBanStatus: 782, // 782
    +ClientCMList: 783, // 783
    +ClientEncryptPct: 784, // 784
    +ClientGetLegacyGameKeyResponse: 785, // 785
    +ClientFavoritesList: 786, // 786
    +CSUserContentApprove: 787, // 787
    +CSUserContentDeny: 788, // 788
    +ClientInitPurchaseResponse: 789, // 789
    +ClientAddFriend: 791, // 791
    +ClientAddFriendResponse: 792, // 792
    +ClientInviteFriend: 793, // 793
    +ClientInviteFriendResponse: 794, // 794
    +ClientSendGuestPassResponse: 795, // 795
    +ClientAckGuestPassResponse: 796, // 796
    +ClientRedeemGuestPassResponse: 797, // 797
    +ClientUpdateGuestPassesList: 798, // 798
    +ClientChatMsg: 799, // 799
    +ClientChatInvite: 800, // 800
    +ClientJoinChat: 801, // 801
    +ClientChatMemberInfo: 802, // 802
    +ClientLogOnWithCredentials_Deprecated: 803, // 803
    +ClientPasswordChangeResponse: 805, // 805
    +ClientChatEnter: 807, // 807
    +ClientFriendRemovedFromSource: 808, // 808
    +ClientCreateChat: 809, // 809
    +ClientCreateChatResponse: 810, // 810
    +ClientUpdateChatMetadata: 811, // 811
    +ClientP2PIntroducerMessage: 813, // 813
    +ClientChatActionResult: 814, // 814
    +ClientRequestFriendData: 815, // 815
    +ClientGetUserStats: 818, // 818
    +ClientGetUserStatsResponse: 819, // 819
    +ClientStoreUserStats: 820, // 820
    +ClientStoreUserStatsResponse: 821, // 821
    +ClientClanState: 822, // 822
    +ClientServiceModule: 830, // 830
    +ClientServiceCall: 831, // 831
    +ClientServiceCallResponse: 832, // 832
    +ClientPackageInfoRequest: 833, // 833
    +ClientPackageInfoResponse: 834, // 834
    +ClientNatTraversalStatEvent: 839, // 839
    +ClientAppInfoRequest: 840, // 840
    +ClientAppInfoResponse: 841, // 841
    +ClientSteamUsageEvent: 842, // 842
    +ClientCheckPassword: 845, // 845
    +ClientResetPassword: 846, // 846
    +ClientCheckPasswordResponse: 848, // 848
    +ClientResetPasswordResponse: 849, // 849
    +ClientSessionToken: 850, // 850
    +ClientDRMProblemReport: 851, // 851
    +ClientSetIgnoreFriend: 855, // 855
    +ClientSetIgnoreFriendResponse: 856, // 856
    +ClientGetAppOwnershipTicket: 857, // 857
    +ClientGetAppOwnershipTicketResponse: 858, // 858
    +ClientGetLobbyListResponse: 860, // 860
    +ClientGetLobbyMetadata: 861, // 861
    +ClientGetLobbyMetadataResponse: 862, // 862
    +ClientVTTCert: 863, // 863
    +ClientAppInfoUpdate: 866, // 866
    +ClientAppInfoChanges: 867, // 867
    +ClientServerList: 880, // 880
    +ClientEmailChangeResponse: 891, // 891
    +ClientSecretQAChangeResponse: 892, // 892
    +ClientDRMBlobRequest: 896, // 896
    +ClientDRMBlobResponse: 897, // 897
    +ClientLookupKey: 898, // 898
    +ClientLookupKeyResponse: 899, // 899
    +BaseGameServer: 900, // 900
    +GSDisconnectNotice: 901, // 901
    +GSStatus: 903, // 903
    +GSUserPlaying: 905, // 905
    +GSStatus2: 906, // 906
    +GSStatusUpdate_Unused: 907, // 907
    +GSServerType: 908, // 908
    +GSPlayerList: 909, // 909
    +GSGetUserAchievementStatus: 910, // 910
    +GSGetUserAchievementStatusResponse: 911, // 911
    +GSGetPlayStats: 918, // 918
    +GSGetPlayStatsResponse: 919, // 919
    +GSGetUserGroupStatus: 920, // 920
    +AMGetUserGroupStatus: 921, // 921
    +AMGetUserGroupStatusResponse: 922, // 922
    +GSGetUserGroupStatusResponse: 923, // 923
    +GSGetReputation: 936, // 936
    +GSGetReputationResponse: 937, // 937
    +GSAssociateWithClan: 938, // 938
    +GSAssociateWithClanResponse: 939, // 939
    +GSComputeNewPlayerCompatibility: 940, // 940
    +GSComputeNewPlayerCompatibilityResponse: 941, // 941
    +BaseAdmin: 1000, // 1000
    +AdminCmd: 1000, // 1000
    +AdminCmdResponse: 1004, // 1004
    +AdminLogListenRequest: 1005, // 1005
    +AdminLogEvent: 1006, // 1006
    +LogSearchRequest: 1007, // 1007
    +LogSearchResponse: 1008, // 1008
    +LogSearchCancel: 1009, // 1009
    +UniverseData: 1010, // 1010
    +RequestStatHistory: 1014, // 1014
    +StatHistory: 1015, // 1015
    +AdminPwLogon: 1017, // 1017
    +AdminPwLogonResponse: 1018, // 1018
    +AdminSpew: 1019, // 1019
    +AdminConsoleTitle: 1020, // 1020
    +AdminGCSpew: 1023, // 1023
    +AdminGCCommand: 1024, // 1024
    +AdminGCGetCommandList: 1025, // 1025
    +AdminGCGetCommandListResponse: 1026, // 1026
    +FBSConnectionData: 1027, // 1027
    +AdminMsgSpew: 1028, // 1028
    +BaseFBS: 1100, // 1100
    +FBSReqVersion: 1100, // 1100
    +FBSVersionInfo: 1101, // 1101
    +FBSForceRefresh: 1102, // 1102
    +FBSForceBounce: 1103, // 1103
    +FBSDeployPackage: 1104, // 1104
    +FBSDeployResponse: 1105, // 1105
    +FBSUpdateBootstrapper: 1106, // 1106
    +FBSSetState: 1107, // 1107
    +FBSApplyOSUpdates: 1108, // 1108
    +FBSRunCMDScript: 1109, // 1109
    +FBSRebootBox: 1110, // 1110
    +FBSSetBigBrotherMode: 1111, // 1111
    +FBSMinidumpServer: 1112, // 1112
    +FBSSetShellCount_obsolete: 1113, // 1113
    +FBSDeployHotFixPackage: 1114, // 1114
    +FBSDeployHotFixResponse: 1115, // 1115
    +FBSDownloadHotFix: 1116, // 1116
    +FBSDownloadHotFixResponse: 1117, // 1117
    +FBSUpdateTargetConfigFile: 1118, // 1118
    +FBSApplyAccountCred: 1119, // 1119
    +FBSApplyAccountCredResponse: 1120, // 1120
    +FBSSetShellCount: 1121, // 1121
    +FBSTerminateShell: 1122, // 1122
    +FBSQueryGMForRequest: 1123, // 1123
    +FBSQueryGMResponse: 1124, // 1124
    +FBSTerminateZombies: 1125, // 1125
    +FBSInfoFromBootstrapper: 1126, // 1126
    +FBSRebootBoxResponse: 1127, // 1127
    +FBSBootstrapperPackageRequest: 1128, // 1128
    +FBSBootstrapperPackageResponse: 1129, // 1129
    +FBSBootstrapperGetPackageChunk: 1130, // 1130
    +FBSBootstrapperGetPackageChunkResponse: 1131, // 1131
    +FBSBootstrapperPackageTransferProgress: 1132, // 1132
    +FBSRestartBootstrapper: 1133, // 1133
    +BaseFileXfer: 1200, // 1200
    +FileXferRequest: 1200, // 1200
    +FileXferResponse: 1201, // 1201
    +FileXferData: 1202, // 1202
    +FileXferEnd: 1203, // 1203
    +FileXferDataAck: 1204, // 1204
    +BaseChannelAuth: 1300, // 1300
    +ChannelAuthChallenge: 1300, // 1300
    +ChannelAuthResponse: 1301, // 1301
    +ChannelAuthResult: 1302, // 1302
    +ChannelEncryptRequest: 1303, // 1303
    +ChannelEncryptResponse: 1304, // 1304
    +ChannelEncryptResult: 1305, // 1305
    +BaseBS: 1400, // 1400
    +BSPurchaseStart: 1401, // 1401
    +BSPurchaseResponse: 1402, // 1402
    +BSSettleNOVA: 1404, // 1404
    +BSSettleComplete: 1406, // 1406
    +BSBannedRequest: 1407, // 1407
    +BSInitPayPalTxn: 1408, // 1408
    +BSInitPayPalTxnResponse: 1409, // 1409
    +BSGetPayPalUserInfo: 1410, // 1410
    +BSGetPayPalUserInfoResponse: 1411, // 1411
    +BSRefundTxn: 1413, // 1413
    +BSRefundTxnResponse: 1414, // 1414
    +BSGetEvents: 1415, // 1415
    +BSChaseRFRRequest: 1416, // 1416
    +BSPaymentInstrBan: 1417, // 1417
    +BSPaymentInstrBanResponse: 1418, // 1418
    +BSProcessGCReports: 1419, // 1419
    +BSProcessPPReports: 1420, // 1420
    +BSInitGCBankXferTxn: 1421, // 1421
    +BSInitGCBankXferTxnResponse: 1422, // 1422
    +BSQueryGCBankXferTxn: 1423, // 1423
    +BSQueryGCBankXferTxnResponse: 1424, // 1424
    +BSCommitGCTxn: 1425, // 1425
    +BSQueryTransactionStatus: 1426, // 1426
    +BSQueryTransactionStatusResponse: 1427, // 1427
    +BSQueryCBOrderStatus: 1428, // 1428
    +BSQueryCBOrderStatusResponse: 1429, // 1429
    +BSRunRedFlagReport: 1430, // 1430
    +BSQueryPaymentInstUsage: 1431, // 1431
    +BSQueryPaymentInstResponse: 1432, // 1432
    +BSQueryTxnExtendedInfo: 1433, // 1433
    +BSQueryTxnExtendedInfoResponse: 1434, // 1434
    +BSUpdateConversionRates: 1435, // 1435
    +BSProcessUSBankReports: 1436, // 1436
    +BSPurchaseRunFraudChecks: 1437, // 1437
    +BSPurchaseRunFraudChecksResponse: 1438, // 1438
    +BSStartShippingJobs: 1439, // 1439
    +BSQueryBankInformation: 1440, // 1440
    +BSQueryBankInformationResponse: 1441, // 1441
    +BSValidateXsollaSignature: 1445, // 1445
    +BSValidateXsollaSignatureResponse: 1446, // 1446
    +BSQiwiWalletInvoice: 1448, // 1448
    +BSQiwiWalletInvoiceResponse: 1449, // 1449
    +BSUpdateInventoryFromProPack: 1450, // 1450
    +BSUpdateInventoryFromProPackResponse: 1451, // 1451
    +BSSendShippingRequest: 1452, // 1452
    +BSSendShippingRequestResponse: 1453, // 1453
    +BSGetProPackOrderStatus: 1454, // 1454
    +BSGetProPackOrderStatusResponse: 1455, // 1455
    +BSCheckJobRunning: 1456, // 1456
    +BSCheckJobRunningResponse: 1457, // 1457
    +BSResetPackagePurchaseRateLimit: 1458, // 1458
    +BSResetPackagePurchaseRateLimitResponse: 1459, // 1459
    +BSUpdatePaymentData: 1460, // 1460
    +BSUpdatePaymentDataResponse: 1461, // 1461
    +BSGetBillingAddress: 1462, // 1462
    +BSGetBillingAddressResponse: 1463, // 1463
    +BSGetCreditCardInfo: 1464, // 1464
    +BSGetCreditCardInfoResponse: 1465, // 1465
    +BSRemoveExpiredPaymentData: 1468, // 1468
    +BSRemoveExpiredPaymentDataResponse: 1469, // 1469
    +BSConvertToCurrentKeys: 1470, // 1470
    +BSConvertToCurrentKeysResponse: 1471, // 1471
    +BSInitPurchase: 1472, // 1472
    +BSInitPurchaseResponse: 1473, // 1473
    +BSCompletePurchase: 1474, // 1474
    +BSCompletePurchaseResponse: 1475, // 1475
    +BSPruneCardUsageStats: 1476, // 1476
    +BSPruneCardUsageStatsResponse: 1477, // 1477
    +BSStoreBankInformation: 1478, // 1478
    +BSStoreBankInformationResponse: 1479, // 1479
    +BSVerifyPOSAKey: 1480, // 1480
    +BSVerifyPOSAKeyResponse: 1481, // 1481
    +BSReverseRedeemPOSAKey: 1482, // 1482
    +BSReverseRedeemPOSAKeyResponse: 1483, // 1483
    +BSQueryFindCreditCard: 1484, // 1484
    +BSQueryFindCreditCardResponse: 1485, // 1485
    +BSStatusInquiryPOSAKey: 1486, // 1486
    +BSStatusInquiryPOSAKeyResponse: 1487, // 1487
    +BSValidateMoPaySignature: 1488, // 1488
    +BSValidateMoPaySignatureResponse: 1489, // 1489
    +BSMoPayConfirmProductDelivery: 1490, // 1490
    +BSMoPayConfirmProductDeliveryResponse: 1491, // 1491
    +BSGenerateMoPayMD5: 1492, // 1492
    +BSGenerateMoPayMD5Response: 1493, // 1493
    +BSBoaCompraConfirmProductDelivery: 1494, // 1494
    +BSBoaCompraConfirmProductDeliveryResponse: 1495, // 1495
    +BSGenerateBoaCompraMD5: 1496, // 1496
    +BSGenerateBoaCompraMD5Response: 1497, // 1497
    +BSCommitWPTxn: 1498, // 1498
    +BaseATS: 1500, // 1500
    +ATSStartStressTest: 1501, // 1501
    +ATSStopStressTest: 1502, // 1502
    +ATSRunFailServerTest: 1503, // 1503
    +ATSUFSPerfTestTask: 1504, // 1504
    +ATSUFSPerfTestResponse: 1505, // 1505
    +ATSCycleTCM: 1506, // 1506
    +ATSInitDRMSStressTest: 1507, // 1507
    +ATSCallTest: 1508, // 1508
    +ATSCallTestReply: 1509, // 1509
    +ATSStartExternalStress: 1510, // 1510
    +ATSExternalStressJobStart: 1511, // 1511
    +ATSExternalStressJobQueued: 1512, // 1512
    +ATSExternalStressJobRunning: 1513, // 1513
    +ATSExternalStressJobStopped: 1514, // 1514
    +ATSExternalStressJobStopAll: 1515, // 1515
    +ATSExternalStressActionResult: 1516, // 1516
    +ATSStarted: 1517, // 1517
    +ATSCSPerfTestTask: 1518, // 1518
    +ATSCSPerfTestResponse: 1519, // 1519
    +BaseDP: 1600, // 1600
    +DPSetPublishingState: 1601, // 1601
    +DPGamePlayedStats: 1602, // 1602
    +DPUniquePlayersStat: 1603, // 1603
    +DPStreamingUniquePlayersStat: 1604, // 1604
    +DPVacInfractionStats: 1605, // 1605
    +DPVacBanStats: 1606, // 1606
    +DPBlockingStats: 1607, // 1607
    +DPNatTraversalStats: 1608, // 1608
    +DPSteamUsageEvent: 1609, // 1609
    +DPVacCertBanStats: 1610, // 1610
    +DPVacCafeBanStats: 1611, // 1611
    +DPCloudStats: 1612, // 1612
    +DPAchievementStats: 1613, // 1613
    +DPAccountCreationStats: 1614, // 1614
    +DPGetPlayerCount: 1615, // 1615
    +DPGetPlayerCountResponse: 1616, // 1616
    +DPGameServersPlayersStats: 1617, // 1617
    +DPDownloadRateStatistics: 1618, // 1618
    +DPFacebookStatistics: 1619, // 1619
    +ClientDPCheckSpecialSurvey: 1620, // 1620
    +ClientDPCheckSpecialSurveyResponse: 1621, // 1621
    +ClientDPSendSpecialSurveyResponse: 1622, // 1622
    +ClientDPSendSpecialSurveyResponseReply: 1623, // 1623
    +DPStoreSaleStatistics: 1624, // 1624
    +ClientDPUpdateAppJobReport: 1625, // 1625
    +ClientDPSteam2AppStarted: 1627, // 1627
    +DPUpdateContentEvent: 1626, // 1626
    +DPPartnerMicroTxns: 1628, // 1628
    +DPPartnerMicroTxnsResponse: 1629, // 1629
    +ClientDPContentStatsReport: 1630, // 1630
    +DPVRUniquePlayersStat: 1631, // 1631
    +BaseCM: 1700, // 1700
    +CMSetAllowState: 1701, // 1701
    +CMSpewAllowState: 1702, // 1702
    +CMAppInfoResponseDeprecated: 1703, // 1703
    +BaseDSS: 1800, // 1800
    +DSSNewFile: 1801, // 1801
    +DSSCurrentFileList: 1802, // 1802
    +DSSSynchList: 1803, // 1803
    +DSSSynchListResponse: 1804, // 1804
    +DSSSynchSubscribe: 1805, // 1805
    +DSSSynchUnsubscribe: 1806, // 1806
    +BaseEPM: 1900, // 1900
    +EPMStartProcess: 1901, // 1901
    +EPMStopProcess: 1902, // 1902
    +EPMRestartProcess: 1903, // 1903
    +BaseGC: 2200, // 2200
    +GCSendClient: 2200, // 2200
    +AMRelayToGC: 2201, // 2201
    +GCUpdatePlayedState: 2202, // 2202
    +GCCmdRevive: 2203, // 2203
    +GCCmdBounce: 2204, // 2204
    +GCCmdForceBounce: 2205, // 2205
    +GCCmdDown: 2206, // 2206
    +GCCmdDeploy: 2207, // 2207
    +GCCmdDeployResponse: 2208, // 2208
    +GCCmdSwitch: 2209, // 2209
    +AMRefreshSessions: 2210, // 2210
    +GCUpdateGSState: 2211, // 2211
    +GCAchievementAwarded: 2212, // 2212
    +GCSystemMessage: 2213, // 2213
    +GCValidateSession: 2214, // 2214
    +GCValidateSessionResponse: 2215, // 2215
    +GCCmdStatus: 2216, // 2216
    +GCRegisterWebInterfaces: 2217, // 2217
    +GCRegisterWebInterfaces_Deprecated: 2217, // 2217
    +GCGetAccountDetails: 2218, // 2218
    +GCGetAccountDetails_DEPRECATED: 2218, // 2218
    +GCInterAppMessage: 2219, // 2219
    +GCGetEmailTemplate: 2220, // 2220
    +GCGetEmailTemplateResponse: 2221, // 2221
    +ISRelayToGCH: 2222, // 2222
    +GCHRelay: 2222, // 2222
    +GCHRelayClientToIS: 2223, // 2223
    +GCHRelayToClient: 2223, // 2223
    +GCHUpdateSession: 2224, // 2224
    +GCHRequestUpdateSession: 2225, // 2225
    +GCHRequestStatus: 2226, // 2226
    +GCHRequestStatusResponse: 2227, // 2227
    +GCHAccountVacStatusChange: 2228, // 2228
    +GCHSpawnGC: 2229, // 2229
    +GCHSpawnGCResponse: 2230, // 2230
    +GCHKillGC: 2231, // 2231
    +GCHKillGCResponse: 2232, // 2232
    +GCHAccountTradeBanStatusChange: 2233, // 2233
    +GCHAccountLockStatusChange: 2234, // 2234
    +GCHVacVerificationChange: 2235, // 2235
    +GCHAccountPhoneNumberChange: 2236, // 2236
    +GCHAccountTwoFactorChange: 2237, // 2237
    +BaseP2P: 2500, // 2500
    +P2PIntroducerMessage: 2502, // 2502
    +BaseSM: 2900, // 2900
    +SMExpensiveReport: 2902, // 2902
    +SMHourlyReport: 2903, // 2903
    +SMFishingReport: 2904, // 2904
    +SMPartitionRenames: 2905, // 2905
    +SMMonitorSpace: 2906, // 2906
    +SMGetSchemaConversionResults: 2907, // 2907
    +SMGetSchemaConversionResultsResponse: 2908, // 2908
    +BaseTest: 3000, // 3000
    +FailServer: 3000, // 3000
    +JobHeartbeatTest: 3001, // 3001
    +JobHeartbeatTestResponse: 3002, // 3002
    +BaseFTSRange: 3100, // 3100
    +FTSGetBrowseCounts: 3101, // 3101
    +FTSGetBrowseCountsResponse: 3102, // 3102
    +FTSBrowseClans: 3103, // 3103
    +FTSBrowseClansResponse: 3104, // 3104
    +FTSSearchClansByLocation: 3105, // 3105
    +FTSSearchClansByLocationResponse: 3106, // 3106
    +FTSSearchPlayersByLocation: 3107, // 3107
    +FTSSearchPlayersByLocationResponse: 3108, // 3108
    +FTSClanDeleted: 3109, // 3109
    +FTSSearch: 3110, // 3110
    +FTSSearchResponse: 3111, // 3111
    +FTSSearchStatus: 3112, // 3112
    +FTSSearchStatusResponse: 3113, // 3113
    +FTSGetGSPlayStats: 3114, // 3114
    +FTSGetGSPlayStatsResponse: 3115, // 3115
    +FTSGetGSPlayStatsForServer: 3116, // 3116
    +FTSGetGSPlayStatsForServerResponse: 3117, // 3117
    +FTSReportIPUpdates: 3118, // 3118
    +BaseCCSRange: 3150, // 3150
    +CCSGetComments: 3151, // 3151
    +CCSGetCommentsResponse: 3152, // 3152
    +CCSAddComment: 3153, // 3153
    +CCSAddCommentResponse: 3154, // 3154
    +CCSDeleteComment: 3155, // 3155
    +CCSDeleteCommentResponse: 3156, // 3156
    +CCSPreloadComments: 3157, // 3157
    +CCSNotifyCommentCount: 3158, // 3158
    +CCSGetCommentsForNews: 3159, // 3159
    +CCSGetCommentsForNewsResponse: 3160, // 3160
    +CCSDeleteAllCommentsByAuthor: 3161, // 3161
    +CCSDeleteAllCommentsByAuthorResponse: 3162, // 3162
    +BaseLBSRange: 3200, // 3200
    +LBSSetScore: 3201, // 3201
    +LBSSetScoreResponse: 3202, // 3202
    +LBSFindOrCreateLB: 3203, // 3203
    +LBSFindOrCreateLBResponse: 3204, // 3204
    +LBSGetLBEntries: 3205, // 3205
    +LBSGetLBEntriesResponse: 3206, // 3206
    +LBSGetLBList: 3207, // 3207
    +LBSGetLBListResponse: 3208, // 3208
    +LBSSetLBDetails: 3209, // 3209
    +LBSDeleteLB: 3210, // 3210
    +LBSDeleteLBEntry: 3211, // 3211
    +LBSResetLB: 3212, // 3212
    +LBSResetLBResponse: 3213, // 3213
    +LBSDeleteLBResponse: 3214, // 3214
    +BaseOGS: 3400, // 3400
    +OGSBeginSession: 3401, // 3401
    +OGSBeginSessionResponse: 3402, // 3402
    +OGSEndSession: 3403, // 3403
    +OGSEndSessionResponse: 3404, // 3404
    +OGSWriteAppSessionRow: 3406, // 3406
    +BaseBRP: 3600, // 3600
    +BRPStartShippingJobs: 3601, // 3601
    +BRPProcessUSBankReports: 3602, // 3602
    +BRPProcessGCReports: 3603, // 3603
    +BRPProcessPPReports: 3604, // 3604
    +BRPSettleNOVA: 3605, // 3605
    +BRPSettleCB: 3606, // 3606
    +BRPCommitGC: 3607, // 3607
    +BRPCommitGCResponse: 3608, // 3608
    +BRPFindHungTransactions: 3609, // 3609
    +BRPCheckFinanceCloseOutDate: 3610, // 3610
    +BRPProcessLicenses: 3611, // 3611
    +BRPProcessLicensesResponse: 3612, // 3612
    +BRPRemoveExpiredPaymentData: 3613, // 3613
    +BRPRemoveExpiredPaymentDataResponse: 3614, // 3614
    +BRPConvertToCurrentKeys: 3615, // 3615
    +BRPConvertToCurrentKeysResponse: 3616, // 3616
    +BRPPruneCardUsageStats: 3617, // 3617
    +BRPPruneCardUsageStatsResponse: 3618, // 3618
    +BRPCheckActivationCodes: 3619, // 3619
    +BRPCheckActivationCodesResponse: 3620, // 3620
    +BRPCommitWP: 3621, // 3621
    +BRPCommitWPResponse: 3622, // 3622
    +BRPProcessWPReports: 3623, // 3623
    +BRPProcessPaymentRules: 3624, // 3624
    +BRPProcessPartnerPayments: 3625, // 3625
    +BRPCheckSettlementReports: 3626, // 3626
    +BRPPostTaxToAvalara: 3628, // 3628
    +BRPPostTransactionTax: 3629, // 3629
    +BRPPostTransactionTaxResponse: 3630, // 3630
    +BRPProcessIMReports: 3631, // 3631
    +BaseAMRange2: 4000, // 4000
    +AMCreateChat: 4001, // 4001
    +AMCreateChatResponse: 4002, // 4002
    +AMUpdateChatMetadata: 4003, // 4003
    +AMPublishChatMetadata: 4004, // 4004
    +AMSetProfileURL: 4005, // 4005
    +AMGetAccountEmailAddress: 4006, // 4006
    +AMGetAccountEmailAddressResponse: 4007, // 4007
    +AMRequestFriendData: 4008, // 4008
    +AMRequestClanData: 4008, // 4008
    +AMRouteToClients: 4009, // 4009
    +AMLeaveClan: 4010, // 4010
    +AMClanPermissions: 4011, // 4011
    +AMClanPermissionsResponse: 4012, // 4012
    +AMCreateClanEvent: 4013, // 4013
    +AMCreateClanEventResponse: 4014, // 4014
    +AMUpdateClanEvent: 4015, // 4015
    +AMUpdateClanEventResponse: 4016, // 4016
    +AMGetClanEvents: 4017, // 4017
    +AMGetClanEventsResponse: 4018, // 4018
    +AMDeleteClanEvent: 4019, // 4019
    +AMDeleteClanEventResponse: 4020, // 4020
    +AMSetClanPermissionSettings: 4021, // 4021
    +AMSetClanPermissionSettingsResponse: 4022, // 4022
    +AMGetClanPermissionSettings: 4023, // 4023
    +AMGetClanPermissionSettingsResponse: 4024, // 4024
    +AMPublishChatRoomInfo: 4025, // 4025
    +ClientChatRoomInfo: 4026, // 4026
    +AMCreateClanAnnouncement: 4027, // 4027
    +AMCreateClanAnnouncementResponse: 4028, // 4028
    +AMUpdateClanAnnouncement: 4029, // 4029
    +AMUpdateClanAnnouncementResponse: 4030, // 4030
    +AMGetClanAnnouncementsCount: 4031, // 4031
    +AMGetClanAnnouncementsCountResponse: 4032, // 4032
    +AMGetClanAnnouncements: 4033, // 4033
    +AMGetClanAnnouncementsResponse: 4034, // 4034
    +AMDeleteClanAnnouncement: 4035, // 4035
    +AMDeleteClanAnnouncementResponse: 4036, // 4036
    +AMGetSingleClanAnnouncement: 4037, // 4037
    +AMGetSingleClanAnnouncementResponse: 4038, // 4038
    +AMGetClanHistory: 4039, // 4039
    +AMGetClanHistoryResponse: 4040, // 4040
    +AMGetClanPermissionBits: 4041, // 4041
    +AMGetClanPermissionBitsResponse: 4042, // 4042
    +AMSetClanPermissionBits: 4043, // 4043
    +AMSetClanPermissionBitsResponse: 4044, // 4044
    +AMSessionInfoRequest: 4045, // 4045
    +AMSessionInfoResponse: 4046, // 4046
    +AMValidateWGToken: 4047, // 4047
    +AMGetSingleClanEvent: 4048, // 4048
    +AMGetSingleClanEventResponse: 4049, // 4049
    +AMGetClanRank: 4050, // 4050
    +AMGetClanRankResponse: 4051, // 4051
    +AMSetClanRank: 4052, // 4052
    +AMSetClanRankResponse: 4053, // 4053
    +AMGetClanPOTW: 4054, // 4054
    +AMGetClanPOTWResponse: 4055, // 4055
    +AMSetClanPOTW: 4056, // 4056
    +AMSetClanPOTWResponse: 4057, // 4057
    +AMRequestChatMetadata: 4058, // 4058
    +AMDumpUser: 4059, // 4059
    +AMKickUserFromClan: 4060, // 4060
    +AMAddFounderToClan: 4061, // 4061
    +AMValidateWGTokenResponse: 4062, // 4062
    +AMSetCommunityState: 4063, // 4063
    +AMSetAccountDetails: 4064, // 4064
    +AMGetChatBanList: 4065, // 4065
    +AMGetChatBanListResponse: 4066, // 4066
    +AMUnBanFromChat: 4067, // 4067
    +AMSetClanDetails: 4068, // 4068
    +AMGetAccountLinks: 4069, // 4069
    +AMGetAccountLinksResponse: 4070, // 4070
    +AMSetAccountLinks: 4071, // 4071
    +AMSetAccountLinksResponse: 4072, // 4072
    +AMGetUserGameStats: 4073, // 4073
    +AMGetUserGameStatsResponse: 4074, // 4074
    +AMCheckClanMembership: 4075, // 4075
    +AMGetClanMembers: 4076, // 4076
    +AMGetClanMembersResponse: 4077, // 4077
    +AMJoinPublicClan: 4078, // 4078
    +AMNotifyChatOfClanChange: 4079, // 4079
    +AMResubmitPurchase: 4080, // 4080
    +AMAddFriend: 4081, // 4081
    +AMAddFriendResponse: 4082, // 4082
    +AMRemoveFriend: 4083, // 4083
    +AMDumpClan: 4084, // 4084
    +AMChangeClanOwner: 4085, // 4085
    +AMCancelEasyCollect: 4086, // 4086
    +AMCancelEasyCollectResponse: 4087, // 4087
    +AMGetClanMembershipList: 4088, // 4088
    +AMGetClanMembershipListResponse: 4089, // 4089
    +AMClansInCommon: 4090, // 4090
    +AMClansInCommonResponse: 4091, // 4091
    +AMIsValidAccountID: 4092, // 4092
    +AMConvertClan: 4093, // 4093
    +AMGetGiftTargetListRelay: 4094, // 4094
    +AMWipeFriendsList: 4095, // 4095
    +AMSetIgnored: 4096, // 4096
    +AMClansInCommonCountResponse: 4097, // 4097
    +AMFriendsList: 4098, // 4098
    +AMFriendsListResponse: 4099, // 4099
    +AMFriendsInCommon: 4100, // 4100
    +AMFriendsInCommonResponse: 4101, // 4101
    +AMFriendsInCommonCountResponse: 4102, // 4102
    +AMClansInCommonCount: 4103, // 4103
    +AMChallengeVerdict: 4104, // 4104
    +AMChallengeNotification: 4105, // 4105
    +AMFindGSByIP: 4106, // 4106
    +AMFoundGSByIP: 4107, // 4107
    +AMGiftRevoked: 4108, // 4108
    +AMCreateAccountRecord: 4109, // 4109
    +AMUserClanList: 4110, // 4110
    +AMUserClanListResponse: 4111, // 4111
    +AMGetAccountDetails2: 4112, // 4112
    +AMGetAccountDetailsResponse2: 4113, // 4113
    +AMSetCommunityProfileSettings: 4114, // 4114
    +AMSetCommunityProfileSettingsResponse: 4115, // 4115
    +AMGetCommunityPrivacyState: 4116, // 4116
    +AMGetCommunityPrivacyStateResponse: 4117, // 4117
    +AMCheckClanInviteRateLimiting: 4118, // 4118
    +AMGetUserAchievementStatus: 4119, // 4119
    +AMGetIgnored: 4120, // 4120
    +AMGetIgnoredResponse: 4121, // 4121
    +AMSetIgnoredResponse: 4122, // 4122
    +AMSetFriendRelationshipNone: 4123, // 4123
    +AMGetFriendRelationship: 4124, // 4124
    +AMGetFriendRelationshipResponse: 4125, // 4125
    +AMServiceModulesCache: 4126, // 4126
    +AMServiceModulesCall: 4127, // 4127
    +AMServiceModulesCallResponse: 4128, // 4128
    +AMGetCaptchaDataForIP: 4129, // 4129
    +AMGetCaptchaDataForIPResponse: 4130, // 4130
    +AMValidateCaptchaDataForIP: 4131, // 4131
    +AMValidateCaptchaDataForIPResponse: 4132, // 4132
    +AMTrackFailedAuthByIP: 4133, // 4133
    +AMGetCaptchaDataByGID: 4134, // 4134
    +AMGetCaptchaDataByGIDResponse: 4135, // 4135
    +AMGetLobbyList: 4136, // 4136
    +AMGetLobbyListResponse: 4137, // 4137
    +AMGetLobbyMetadata: 4138, // 4138
    +AMGetLobbyMetadataResponse: 4139, // 4139
    +CommunityAddFriendNews: 4140, // 4140
    +AMAddClanNews: 4141, // 4141
    +AMWriteNews: 4142, // 4142
    +AMFindClanUser: 4143, // 4143
    +AMFindClanUserResponse: 4144, // 4144
    +AMBanFromChat: 4145, // 4145
    +AMGetUserHistoryResponse: 4146, // 4146
    +AMGetUserNewsSubscriptions: 4147, // 4147
    +AMGetUserNewsSubscriptionsResponse: 4148, // 4148
    +AMSetUserNewsSubscriptions: 4149, // 4149
    +AMGetUserNews: 4150, // 4150
    +AMGetUserNewsResponse: 4151, // 4151
    +AMSendQueuedEmails: 4152, // 4152
    +AMSetLicenseFlags: 4153, // 4153
    +AMGetUserHistory: 4154, // 4154
    +CommunityDeleteUserNews: 4155, // 4155
    +AMAllowUserFilesRequest: 4156, // 4156
    +AMAllowUserFilesResponse: 4157, // 4157
    +AMGetAccountStatus: 4158, // 4158
    +AMGetAccountStatusResponse: 4159, // 4159
    +AMEditBanReason: 4160, // 4160
    +AMCheckClanMembershipResponse: 4161, // 4161
    +AMProbeClanMembershipList: 4162, // 4162
    +AMProbeClanMembershipListResponse: 4163, // 4163
    +AMGetFriendsLobbies: 4165, // 4165
    +AMGetFriendsLobbiesResponse: 4166, // 4166
    +AMGetUserFriendNewsResponse: 4172, // 4172
    +CommunityGetUserFriendNews: 4173, // 4173
    +AMGetUserClansNewsResponse: 4174, // 4174
    +AMGetUserClansNews: 4175, // 4175
    +AMStoreInitPurchase: 4176, // 4176
    +AMStoreInitPurchaseResponse: 4177, // 4177
    +AMStoreGetFinalPrice: 4178, // 4178
    +AMStoreGetFinalPriceResponse: 4179, // 4179
    +AMStoreCompletePurchase: 4180, // 4180
    +AMStoreCancelPurchase: 4181, // 4181
    +AMStorePurchaseResponse: 4182, // 4182
    +AMCreateAccountRecordInSteam3: 4183, // 4183
    +AMGetPreviousCBAccount: 4184, // 4184
    +AMGetPreviousCBAccountResponse: 4185, // 4185
    +AMUpdateBillingAddress: 4186, // 4186
    +AMUpdateBillingAddressResponse: 4187, // 4187
    +AMGetBillingAddress: 4188, // 4188
    +AMGetBillingAddressResponse: 4189, // 4189
    +AMGetUserLicenseHistory: 4190, // 4190
    +AMGetUserLicenseHistoryResponse: 4191, // 4191
    +AMSupportChangePassword: 4194, // 4194
    +AMSupportChangeEmail: 4195, // 4195
    +AMSupportChangeSecretQA: 4196, // 4196
    +AMResetUserVerificationGSByIP: 4197, // 4197
    +AMUpdateGSPlayStats: 4198, // 4198
    +AMSupportEnableOrDisable: 4199, // 4199
    +AMGetComments: 4200, // 4200
    +AMGetCommentsResponse: 4201, // 4201
    +AMAddComment: 4202, // 4202
    +AMAddCommentResponse: 4203, // 4203
    +AMDeleteComment: 4204, // 4204
    +AMDeleteCommentResponse: 4205, // 4205
    +AMGetPurchaseStatus: 4206, // 4206
    +AMSupportIsAccountEnabled: 4209, // 4209
    +AMSupportIsAccountEnabledResponse: 4210, // 4210
    +AMGetUserStats: 4211, // 4211
    +AMSupportKickSession: 4212, // 4212
    +AMGSSearch: 4213, // 4213
    +MarketingMessageUpdate: 4216, // 4216
    +AMRouteFriendMsg: 4219, // 4219
    +AMTicketAuthRequestOrResponse: 4220, // 4220
    +AMVerifyDepotManagementRights: 4222, // 4222
    +AMVerifyDepotManagementRightsResponse: 4223, // 4223
    +AMAddFreeLicense: 4224, // 4224
    +AMGetUserFriendsMinutesPlayed: 4225, // 4225
    +AMGetUserFriendsMinutesPlayedResponse: 4226, // 4226
    +AMGetUserMinutesPlayed: 4227, // 4227
    +AMGetUserMinutesPlayedResponse: 4228, // 4228
    +AMValidateEmailLink: 4231, // 4231
    +AMValidateEmailLinkResponse: 4232, // 4232
    +AMAddUsersToMarketingTreatment: 4234, // 4234
    +AMStoreUserStats: 4236, // 4236
    +AMGetUserGameplayInfo: 4237, // 4237
    +AMGetUserGameplayInfoResponse: 4238, // 4238
    +AMGetCardList: 4239, // 4239
    +AMGetCardListResponse: 4240, // 4240
    +AMDeleteStoredCard: 4241, // 4241
    +AMRevokeLegacyGameKeys: 4242, // 4242
    +AMGetWalletDetails: 4244, // 4244
    +AMGetWalletDetailsResponse: 4245, // 4245
    +AMDeleteStoredPaymentInfo: 4246, // 4246
    +AMGetStoredPaymentSummary: 4247, // 4247
    +AMGetStoredPaymentSummaryResponse: 4248, // 4248
    +AMGetWalletConversionRate: 4249, // 4249
    +AMGetWalletConversionRateResponse: 4250, // 4250
    +AMConvertWallet: 4251, // 4251
    +AMConvertWalletResponse: 4252, // 4252
    +AMRelayGetFriendsWhoPlayGame: 4253, // 4253
    +AMRelayGetFriendsWhoPlayGameResponse: 4254, // 4254
    +AMSetPreApproval: 4255, // 4255
    +AMSetPreApprovalResponse: 4256, // 4256
    +AMMarketingTreatmentUpdate: 4257, // 4257
    +AMCreateRefund: 4258, // 4258
    +AMCreateRefundResponse: 4259, // 4259
    +AMCreateChargeback: 4260, // 4260
    +AMCreateChargebackResponse: 4261, // 4261
    +AMCreateDispute: 4262, // 4262
    +AMCreateDisputeResponse: 4263, // 4263
    +AMClearDispute: 4264, // 4264
    +AMClearDisputeResponse: 4265, // 4265
    +AMPlayerNicknameList: 4266, // 4266
    +AMPlayerNicknameListResponse: 4267, // 4267
    +AMSetDRMTestConfig: 4268, // 4268
    +AMGetUserCurrentGameInfo: 4269, // 4269
    +AMGetUserCurrentGameInfoResponse: 4270, // 4270
    +AMGetGSPlayerList: 4271, // 4271
    +AMGetGSPlayerListResponse: 4272, // 4272
    +AMUpdatePersonaStateCache: 4275, // 4275
    +AMGetGameMembers: 4276, // 4276
    +AMGetGameMembersResponse: 4277, // 4277
    +AMGetSteamIDForMicroTxn: 4278, // 4278
    +AMGetSteamIDForMicroTxnResponse: 4279, // 4279
    +AMAddPublisherUser: 4280, // 4280
    +AMRemovePublisherUser: 4281, // 4281
    +AMGetUserLicenseList: 4282, // 4282
    +AMGetUserLicenseListResponse: 4283, // 4283
    +AMReloadGameGroupPolicy: 4284, // 4284
    +AMAddFreeLicenseResponse: 4285, // 4285
    +AMVACStatusUpdate: 4286, // 4286
    +AMGetAccountDetails: 4287, // 4287
    +AMGetAccountDetailsResponse: 4288, // 4288
    +AMGetPlayerLinkDetails: 4289, // 4289
    +AMGetPlayerLinkDetailsResponse: 4290, // 4290
    +AMSubscribeToPersonaFeed: 4291, // 4291
    +AMGetUserVacBanList: 4292, // 4292
    +AMGetUserVacBanListResponse: 4293, // 4293
    +AMGetAccountFlagsForWGSpoofing: 4294, // 4294
    +AMGetAccountFlagsForWGSpoofingResponse: 4295, // 4295
    +AMGetFriendsWishlistInfo: 4296, // 4296
    +AMGetFriendsWishlistInfoResponse: 4297, // 4297
    +AMGetClanOfficers: 4298, // 4298
    +AMGetClanOfficersResponse: 4299, // 4299
    +AMNameChange: 4300, // 4300
    +AMGetNameHistory: 4301, // 4301
    +AMGetNameHistoryResponse: 4302, // 4302
    +AMUpdateProviderStatus: 4305, // 4305
    +AMClearPersonaMetadataBlob: 4306, // 4306
    +AMSupportRemoveAccountSecurity: 4307, // 4307
    +AMIsAccountInCaptchaGracePeriod: 4308, // 4308
    +AMIsAccountInCaptchaGracePeriodResponse: 4309, // 4309
    +AMAccountPS3Unlink: 4310, // 4310
    +AMAccountPS3UnlinkResponse: 4311, // 4311
    +AMStoreUserStatsResponse: 4312, // 4312
    +AMGetAccountPSNInfo: 4313, // 4313
    +AMGetAccountPSNInfoResponse: 4314, // 4314
    +AMAuthenticatedPlayerList: 4315, // 4315
    +AMGetUserGifts: 4316, // 4316
    +AMGetUserGiftsResponse: 4317, // 4317
    +AMTransferLockedGifts: 4320, // 4320
    +AMTransferLockedGiftsResponse: 4321, // 4321
    +AMPlayerHostedOnGameServer: 4322, // 4322
    +AMGetAccountBanInfo: 4323, // 4323
    +AMGetAccountBanInfoResponse: 4324, // 4324
    +AMRecordBanEnforcement: 4325, // 4325
    +AMRollbackGiftTransfer: 4326, // 4326
    +AMRollbackGiftTransferResponse: 4327, // 4327
    +AMHandlePendingTransaction: 4328, // 4328
    +AMRequestClanDetails: 4329, // 4329
    +AMDeleteStoredPaypalAgreement: 4330, // 4330
    +AMGameServerUpdate: 4331, // 4331
    +AMGameServerRemove: 4332, // 4332
    +AMGetPaypalAgreements: 4333, // 4333
    +AMGetPaypalAgreementsResponse: 4334, // 4334
    +AMGameServerPlayerCompatibilityCheck: 4335, // 4335
    +AMGameServerPlayerCompatibilityCheckResponse: 4336, // 4336
    +AMRenewLicense: 4337, // 4337
    +AMGetAccountCommunityBanInfo: 4338, // 4338
    +AMGetAccountCommunityBanInfoResponse: 4339, // 4339
    +AMGameServerAccountChangePassword: 4340, // 4340
    +AMGameServerAccountDeleteAccount: 4341, // 4341
    +AMRenewAgreement: 4342, // 4342
    +AMSendEmail: 4343, // 4343
    +AMXsollaPayment: 4344, // 4344
    +AMXsollaPaymentResponse: 4345, // 4345
    +AMAcctAllowedToPurchase: 4346, // 4346
    +AMAcctAllowedToPurchaseResponse: 4347, // 4347
    +AMSwapKioskDeposit: 4348, // 4348
    +AMSwapKioskDepositResponse: 4349, // 4349
    +AMSetUserGiftUnowned: 4350, // 4350
    +AMSetUserGiftUnownedResponse: 4351, // 4351
    +AMClaimUnownedUserGift: 4352, // 4352
    +AMClaimUnownedUserGiftResponse: 4353, // 4353
    +AMSetClanName: 4354, // 4354
    +AMSetClanNameResponse: 4355, // 4355
    +AMGrantCoupon: 4356, // 4356
    +AMGrantCouponResponse: 4357, // 4357
    +AMIsPackageRestrictedInUserCountry: 4358, // 4358
    +AMIsPackageRestrictedInUserCountryResponse: 4359, // 4359
    +AMHandlePendingTransactionResponse: 4360, // 4360
    +AMGrantGuestPasses2: 4361, // 4361
    +AMGrantGuestPasses2Response: 4362, // 4362
    +AMSessionQuery: 4363, // 4363
    +AMSessionQueryResponse: 4364, // 4364
    +AMGetPlayerBanDetails: 4365, // 4365
    +AMGetPlayerBanDetailsResponse: 4366, // 4366
    +AMFinalizePurchase: 4367, // 4367
    +AMFinalizePurchaseResponse: 4368, // 4368
    +AMPersonaChangeResponse: 4372, // 4372
    +AMGetClanDetailsForForumCreation: 4373, // 4373
    +AMGetClanDetailsForForumCreationResponse: 4374, // 4374
    +AMGetPendingNotificationCount: 4375, // 4375
    +AMGetPendingNotificationCountResponse: 4376, // 4376
    +AMPasswordHashUpgrade: 4377, // 4377
    +AMMoPayPayment: 4378, // 4378
    +AMMoPayPaymentResponse: 4379, // 4379
    +AMBoaCompraPayment: 4380, // 4380
    +AMBoaCompraPaymentResponse: 4381, // 4381
    +AMExpireCaptchaByGID: 4382, // 4382
    +AMCompleteExternalPurchase: 4383, // 4383
    +AMCompleteExternalPurchaseResponse: 4384, // 4384
    +AMResolveNegativeWalletCredits: 4385, // 4385
    +AMResolveNegativeWalletCreditsResponse: 4386, // 4386
    +AMPayelpPayment: 4387, // 4387
    +AMPayelpPaymentResponse: 4388, // 4388
    +AMPlayerGetClanBasicDetails: 4389, // 4389
    +AMPlayerGetClanBasicDetailsResponse: 4390, // 4390
    +AMMOLPayment: 4391, // 4391
    +AMMOLPaymentResponse: 4392, // 4392
    +GetUserIPCountry: 4393, // 4393
    +GetUserIPCountryResponse: 4394, // 4394
    +NotificationOfSuspiciousActivity: 4395, // 4395
    +AMDegicaPayment: 4396, // 4396
    +AMDegicaPaymentResponse: 4397, // 4397
    +AMEClubPayment: 4398, // 4398
    +AMEClubPaymentResponse: 4399, // 4399
    +AMPayPalPaymentsHubPayment: 4400, // 4400
    +AMPayPalPaymentsHubPaymentResponse: 4401, // 4401
    +AMTwoFactorRecoverAuthenticatorRequest: 4402, // 4402
    +AMTwoFactorRecoverAuthenticatorResponse: 4403, // 4403
    +AMSmart2PayPayment: 4404, // 4404
    +AMSmart2PayPaymentResponse: 4405, // 4405
    +AMValidatePasswordResetCodeAndSendSmsRequest: 4406, // 4406
    +AMValidatePasswordResetCodeAndSendSmsResponse: 4407, // 4407
    +AMGetAccountResetDetailsRequest: 4408, // 4408
    +AMGetAccountResetDetailsResponse: 4409, // 4409
    +AMBitPayPayment: 4410, // 4410
    +AMBitPayPaymentResponse: 4411, // 4411
    +AMSendAccountInfoUpdate: 4412, // 4412
    +BasePSRange: 5000, // 5000
    +PSCreateShoppingCart: 5001, // 5001
    +PSCreateShoppingCartResponse: 5002, // 5002
    +PSIsValidShoppingCart: 5003, // 5003
    +PSIsValidShoppingCartResponse: 5004, // 5004
    +PSAddPackageToShoppingCart: 5005, // 5005
    +PSAddPackageToShoppingCartResponse: 5006, // 5006
    +PSRemoveLineItemFromShoppingCart: 5007, // 5007
    +PSRemoveLineItemFromShoppingCartResponse: 5008, // 5008
    +PSGetShoppingCartContents: 5009, // 5009
    +PSGetShoppingCartContentsResponse: 5010, // 5010
    +PSAddWalletCreditToShoppingCart: 5011, // 5011
    +PSAddWalletCreditToShoppingCartResponse: 5012, // 5012
    +BaseUFSRange: 5200, // 5200
    +ClientUFSUploadFileRequest: 5202, // 5202
    +ClientUFSUploadFileResponse: 5203, // 5203
    +ClientUFSUploadFileChunk: 5204, // 5204
    +ClientUFSUploadFileFinished: 5205, // 5205
    +ClientUFSGetFileListForApp: 5206, // 5206
    +ClientUFSGetFileListForAppResponse: 5207, // 5207
    +ClientUFSDownloadRequest: 5210, // 5210
    +ClientUFSDownloadResponse: 5211, // 5211
    +ClientUFSDownloadChunk: 5212, // 5212
    +ClientUFSLoginRequest: 5213, // 5213
    +ClientUFSLoginResponse: 5214, // 5214
    +UFSReloadPartitionInfo: 5215, // 5215
    +ClientUFSTransferHeartbeat: 5216, // 5216
    +UFSSynchronizeFile: 5217, // 5217
    +UFSSynchronizeFileResponse: 5218, // 5218
    +ClientUFSDeleteFileRequest: 5219, // 5219
    +ClientUFSDeleteFileResponse: 5220, // 5220
    +UFSDownloadRequest: 5221, // 5221
    +UFSDownloadResponse: 5222, // 5222
    +UFSDownloadChunk: 5223, // 5223
    +ClientUFSGetUGCDetails: 5226, // 5226
    +ClientUFSGetUGCDetailsResponse: 5227, // 5227
    +UFSUpdateFileFlags: 5228, // 5228
    +UFSUpdateFileFlagsResponse: 5229, // 5229
    +ClientUFSGetSingleFileInfo: 5230, // 5230
    +ClientUFSGetSingleFileInfoResponse: 5231, // 5231
    +ClientUFSShareFile: 5232, // 5232
    +ClientUFSShareFileResponse: 5233, // 5233
    +UFSReloadAccount: 5234, // 5234
    +UFSReloadAccountResponse: 5235, // 5235
    +UFSUpdateRecordBatched: 5236, // 5236
    +UFSUpdateRecordBatchedResponse: 5237, // 5237
    +UFSMigrateFile: 5238, // 5238
    +UFSMigrateFileResponse: 5239, // 5239
    +UFSGetUGCURLs: 5240, // 5240
    +UFSGetUGCURLsResponse: 5241, // 5241
    +UFSHttpUploadFileFinishRequest: 5242, // 5242
    +UFSHttpUploadFileFinishResponse: 5243, // 5243
    +UFSDownloadStartRequest: 5244, // 5244
    +UFSDownloadStartResponse: 5245, // 5245
    +UFSDownloadChunkRequest: 5246, // 5246
    +UFSDownloadChunkResponse: 5247, // 5247
    +UFSDownloadFinishRequest: 5248, // 5248
    +UFSDownloadFinishResponse: 5249, // 5249
    +UFSFlushURLCache: 5250, // 5250
    +UFSUploadCommit: 5251, // 5251
    +UFSUploadCommitResponse: 5252, // 5252
    +UFSMigrateFileAppID: 5253, // 5253
    +UFSMigrateFileAppIDResponse: 5254, // 5254
    +BaseClient2: 5400, // 5400
    +ClientRequestForgottenPasswordEmail: 5401, // 5401
    +ClientRequestForgottenPasswordEmailResponse: 5402, // 5402
    +ClientCreateAccountResponse: 5403, // 5403
    +ClientResetForgottenPassword: 5404, // 5404
    +ClientResetForgottenPasswordResponse: 5405, // 5405
    +ClientCreateAccount2: 5406, // 5406
    +ClientInformOfResetForgottenPassword: 5407, // 5407
    +ClientInformOfResetForgottenPasswordResponse: 5408, // 5408
    +ClientAnonUserLogOn_Deprecated: 5409, // 5409
    +ClientGamesPlayedWithDataBlob: 5410, // 5410
    +ClientUpdateUserGameInfo: 5411, // 5411
    +ClientFileToDownload: 5412, // 5412
    +ClientFileToDownloadResponse: 5413, // 5413
    +ClientLBSSetScore: 5414, // 5414
    +ClientLBSSetScoreResponse: 5415, // 5415
    +ClientLBSFindOrCreateLB: 5416, // 5416
    +ClientLBSFindOrCreateLBResponse: 5417, // 5417
    +ClientLBSGetLBEntries: 5418, // 5418
    +ClientLBSGetLBEntriesResponse: 5419, // 5419
    +ClientMarketingMessageUpdate: 5420, // 5420
    +ClientChatDeclined: 5426, // 5426
    +ClientFriendMsgIncoming: 5427, // 5427
    +ClientAuthList_Deprecated: 5428, // 5428
    +ClientTicketAuthComplete: 5429, // 5429
    +ClientIsLimitedAccount: 5430, // 5430
    +ClientRequestAuthList: 5431, // 5431
    +ClientAuthList: 5432, // 5432
    +ClientStat: 5433, // 5433
    +ClientP2PConnectionInfo: 5434, // 5434
    +ClientP2PConnectionFailInfo: 5435, // 5435
    +ClientGetNumberOfCurrentPlayers: 5436, // 5436
    +ClientGetNumberOfCurrentPlayersResponse: 5437, // 5437
    +ClientGetDepotDecryptionKey: 5438, // 5438
    +ClientGetDepotDecryptionKeyResponse: 5439, // 5439
    +GSPerformHardwareSurvey: 5440, // 5440
    +ClientGetAppBetaPasswords: 5441, // 5441
    +ClientGetAppBetaPasswordsResponse: 5442, // 5442
    +ClientEnableTestLicense: 5443, // 5443
    +ClientEnableTestLicenseResponse: 5444, // 5444
    +ClientDisableTestLicense: 5445, // 5445
    +ClientDisableTestLicenseResponse: 5446, // 5446
    +ClientRequestValidationMail: 5448, // 5448
    +ClientRequestValidationMailResponse: 5449, // 5449
    +ClientCheckAppBetaPassword: 5450, // 5450
    +ClientCheckAppBetaPasswordResponse: 5451, // 5451
    +ClientToGC: 5452, // 5452
    +ClientFromGC: 5453, // 5453
    +ClientRequestChangeMail: 5454, // 5454
    +ClientRequestChangeMailResponse: 5455, // 5455
    +ClientEmailAddrInfo: 5456, // 5456
    +ClientPasswordChange3: 5457, // 5457
    +ClientEmailChange3: 5458, // 5458
    +ClientPersonalQAChange3: 5459, // 5459
    +ClientResetForgottenPassword3: 5460, // 5460
    +ClientRequestForgottenPasswordEmail3: 5461, // 5461
    +ClientCreateAccount3: 5462, // 5462
    +ClientNewLoginKey: 5463, // 5463
    +ClientNewLoginKeyAccepted: 5464, // 5464
    +ClientLogOnWithHash_Deprecated: 5465, // 5465
    +ClientStoreUserStats2: 5466, // 5466
    +ClientStatsUpdated: 5467, // 5467
    +ClientActivateOEMLicense: 5468, // 5468
    +ClientRegisterOEMMachine: 5469, // 5469
    +ClientRegisterOEMMachineResponse: 5470, // 5470
    +ClientRequestedClientStats: 5480, // 5480
    +ClientStat2Int32: 5481, // 5481
    +ClientStat2: 5482, // 5482
    +ClientVerifyPassword: 5483, // 5483
    +ClientVerifyPasswordResponse: 5484, // 5484
    +ClientDRMDownloadRequest: 5485, // 5485
    +ClientDRMDownloadResponse: 5486, // 5486
    +ClientDRMFinalResult: 5487, // 5487
    +ClientGetFriendsWhoPlayGame: 5488, // 5488
    +ClientGetFriendsWhoPlayGameResponse: 5489, // 5489
    +ClientOGSBeginSession: 5490, // 5490
    +ClientOGSBeginSessionResponse: 5491, // 5491
    +ClientOGSEndSession: 5492, // 5492
    +ClientOGSEndSessionResponse: 5493, // 5493
    +ClientOGSWriteRow: 5494, // 5494
    +ClientDRMTest: 5495, // 5495
    +ClientDRMTestResult: 5496, // 5496
    +ClientServerUnavailable: 5500, // 5500
    +ClientServersAvailable: 5501, // 5501
    +ClientRegisterAuthTicketWithCM: 5502, // 5502
    +ClientGCMsgFailed: 5503, // 5503
    +ClientMicroTxnAuthRequest: 5504, // 5504
    +ClientMicroTxnAuthorize: 5505, // 5505
    +ClientMicroTxnAuthorizeResponse: 5506, // 5506
    +ClientAppMinutesPlayedData: 5507, // 5507
    +ClientGetMicroTxnInfo: 5508, // 5508
    +ClientGetMicroTxnInfoResponse: 5509, // 5509
    +ClientMarketingMessageUpdate2: 5510, // 5510
    +ClientDeregisterWithServer: 5511, // 5511
    +ClientSubscribeToPersonaFeed: 5512, // 5512
    +ClientLogon: 5514, // 5514
    +ClientGetClientDetails: 5515, // 5515
    +ClientGetClientDetailsResponse: 5516, // 5516
    +ClientReportOverlayDetourFailure: 5517, // 5517
    +ClientGetClientAppList: 5518, // 5518
    +ClientGetClientAppListResponse: 5519, // 5519
    +ClientInstallClientApp: 5520, // 5520
    +ClientInstallClientAppResponse: 5521, // 5521
    +ClientUninstallClientApp: 5522, // 5522
    +ClientUninstallClientAppResponse: 5523, // 5523
    +ClientSetClientAppUpdateState: 5524, // 5524
    +ClientSetClientAppUpdateStateResponse: 5525, // 5525
    +ClientRequestEncryptedAppTicket: 5526, // 5526
    +ClientRequestEncryptedAppTicketResponse: 5527, // 5527
    +ClientWalletInfoUpdate: 5528, // 5528
    +ClientLBSSetUGC: 5529, // 5529
    +ClientLBSSetUGCResponse: 5530, // 5530
    +ClientAMGetClanOfficers: 5531, // 5531
    +ClientAMGetClanOfficersResponse: 5532, // 5532
    +ClientCheckFileSignature: 5533, // 5533
    +ClientCheckFileSignatureResponse: 5534, // 5534
    +ClientFriendProfileInfo: 5535, // 5535
    +ClientFriendProfileInfoResponse: 5536, // 5536
    +ClientUpdateMachineAuth: 5537, // 5537
    +ClientUpdateMachineAuthResponse: 5538, // 5538
    +ClientReadMachineAuth: 5539, // 5539
    +ClientReadMachineAuthResponse: 5540, // 5540
    +ClientRequestMachineAuth: 5541, // 5541
    +ClientRequestMachineAuthResponse: 5542, // 5542
    +ClientScreenshotsChanged: 5543, // 5543
    +ClientEmailChange4: 5544, // 5544
    +ClientEmailChangeResponse4: 5545, // 5545
    +ClientGetCDNAuthToken: 5546, // 5546
    +ClientGetCDNAuthTokenResponse: 5547, // 5547
    +ClientDownloadRateStatistics: 5548, // 5548
    +ClientRequestAccountData: 5549, // 5549
    +ClientRequestAccountDataResponse: 5550, // 5550
    +ClientResetForgottenPassword4: 5551, // 5551
    +ClientHideFriend: 5552, // 5552
    +ClientFriendsGroupsList: 5553, // 5553
    +ClientGetClanActivityCounts: 5554, // 5554
    +ClientGetClanActivityCountsResponse: 5555, // 5555
    +ClientOGSReportString: 5556, // 5556
    +ClientOGSReportBug: 5557, // 5557
    +ClientSentLogs: 5558, // 5558
    +ClientLogonGameServer: 5559, // 5559
    +AMClientCreateFriendsGroup: 5560, // 5560
    +AMClientCreateFriendsGroupResponse: 5561, // 5561
    +AMClientDeleteFriendsGroup: 5562, // 5562
    +AMClientDeleteFriendsGroupResponse: 5563, // 5563
    +AMClientRenameFriendsGroup: 5564, // 5564
    +AMClientRenameFriendsGroupResponse: 5565, // 5565
    +AMClientAddFriendToGroup: 5566, // 5566
    +AMClientAddFriendToGroupResponse: 5567, // 5567
    +AMClientRemoveFriendFromGroup: 5568, // 5568
    +AMClientRemoveFriendFromGroupResponse: 5569, // 5569
    +ClientAMGetPersonaNameHistory: 5570, // 5570
    +ClientAMGetPersonaNameHistoryResponse: 5571, // 5571
    +ClientRequestFreeLicense: 5572, // 5572
    +ClientRequestFreeLicenseResponse: 5573, // 5573
    +ClientDRMDownloadRequestWithCrashData: 5574, // 5574
    +ClientAuthListAck: 5575, // 5575
    +ClientItemAnnouncements: 5576, // 5576
    +ClientRequestItemAnnouncements: 5577, // 5577
    +ClientFriendMsgEchoToSender: 5578, // 5578
    +ClientChangeSteamGuardOptions: 5579, // 5579
    +ClientChangeSteamGuardOptionsResponse: 5580, // 5580
    +ClientOGSGameServerPingSample: 5581, // 5581
    +ClientCommentNotifications: 5582, // 5582
    +ClientRequestCommentNotifications: 5583, // 5583
    +ClientPersonaChangeResponse: 5584, // 5584
    +ClientRequestWebAPIAuthenticateUserNonce: 5585, // 5585
    +ClientRequestWebAPIAuthenticateUserNonceResponse: 5586, // 5586
    +ClientPlayerNicknameList: 5587, // 5587
    +AMClientSetPlayerNickname: 5588, // 5588
    +AMClientSetPlayerNicknameResponse: 5589, // 5589
    +ClientRequestOAuthTokenForApp: 5590, // 5590
    +ClientRequestOAuthTokenForAppResponse: 5591, // 5591
    +ClientCreateAccountProto: 5590, // 5590
    +ClientCreateAccountProtoResponse: 5591, // 5591
    +ClientGetNumberOfCurrentPlayersDP: 5592, // 5592
    +ClientGetNumberOfCurrentPlayersDPResponse: 5593, // 5593
    +ClientServiceMethod: 5594, // 5594
    +ClientServiceMethodResponse: 5595, // 5595
    +ClientFriendUserStatusPublished: 5596, // 5596
    +ClientCurrentUIMode: 5597, // 5597
    +ClientVanityURLChangedNotification: 5598, // 5598
    +ClientUserNotifications: 5599, // 5599
    +BaseDFS: 5600, // 5600
    +DFSGetFile: 5601, // 5601
    +DFSInstallLocalFile: 5602, // 5602
    +DFSConnection: 5603, // 5603
    +DFSConnectionReply: 5604, // 5604
    +ClientDFSAuthenticateRequest: 5605, // 5605
    +ClientDFSAuthenticateResponse: 5606, // 5606
    +ClientDFSEndSession: 5607, // 5607
    +DFSPurgeFile: 5608, // 5608
    +DFSRouteFile: 5609, // 5609
    +DFSGetFileFromServer: 5610, // 5610
    +DFSAcceptedResponse: 5611, // 5611
    +DFSRequestPingback: 5612, // 5612
    +DFSRecvTransmitFile: 5613, // 5613
    +DFSSendTransmitFile: 5614, // 5614
    +DFSRequestPingback2: 5615, // 5615
    +DFSResponsePingback2: 5616, // 5616
    +ClientDFSDownloadStatus: 5617, // 5617
    +DFSStartTransfer: 5618, // 5618
    +DFSTransferComplete: 5619, // 5619
    +DFSRouteFileResponse: 5620, // 5620
    +BaseMDS: 5800, // 5800
    +ClientMDSLoginRequest: 5801, // 5801
    +ClientMDSLoginResponse: 5802, // 5802
    +ClientMDSUploadManifestRequest: 5803, // 5803
    +ClientMDSUploadManifestResponse: 5804, // 5804
    +ClientMDSTransmitManifestDataChunk: 5805, // 5805
    +ClientMDSHeartbeat: 5806, // 5806
    +ClientMDSUploadDepotChunks: 5807, // 5807
    +ClientMDSUploadDepotChunksResponse: 5808, // 5808
    +ClientMDSInitDepotBuildRequest: 5809, // 5809
    +ClientMDSInitDepotBuildResponse: 5810, // 5810
    +AMToMDSGetDepotDecryptionKey: 5812, // 5812
    +MDSToAMGetDepotDecryptionKeyResponse: 5813, // 5813
    +MDSGetVersionsForDepot: 5814, // 5814
    +MDSGetVersionsForDepotResponse: 5815, // 5815
    +MDSSetPublicVersionForDepot: 5816, // 5816
    +MDSSetPublicVersionForDepotResponse: 5817, // 5817
    +ClientMDSInitWorkshopBuildRequest: 5816, // 5816
    +ClientMDSInitWorkshopBuildResponse: 5817, // 5817
    +ClientMDSGetDepotManifest: 5818, // 5818
    +ClientMDSGetDepotManifestResponse: 5819, // 5819
    +ClientMDSGetDepotManifestChunk: 5820, // 5820
    +ClientMDSUploadRateTest: 5823, // 5823
    +ClientMDSUploadRateTestResponse: 5824, // 5824
    +MDSDownloadDepotChunksAck: 5825, // 5825
    +MDSContentServerStatsBroadcast: 5826, // 5826
    +MDSContentServerConfigRequest: 5827, // 5827
    +MDSContentServerConfig: 5828, // 5828
    +MDSGetDepotManifest: 5829, // 5829
    +MDSGetDepotManifestResponse: 5830, // 5830
    +MDSGetDepotManifestChunk: 5831, // 5831
    +MDSGetDepotChunk: 5832, // 5832
    +MDSGetDepotChunkResponse: 5833, // 5833
    +MDSGetDepotChunkChunk: 5834, // 5834
    +MDSUpdateContentServerConfig: 5835, // 5835
    +MDSGetServerListForUser: 5836, // 5836
    +MDSGetServerListForUserResponse: 5837, // 5837
    +ClientMDSRegisterAppBuild: 5838, // 5838
    +ClientMDSRegisterAppBuildResponse: 5839, // 5839
    +ClientMDSSetAppBuildLive: 5840, // 5840
    +ClientMDSSetAppBuildLiveResponse: 5841, // 5841
    +ClientMDSGetPrevDepotBuild: 5842, // 5842
    +ClientMDSGetPrevDepotBuildResponse: 5843, // 5843
    +MDSToCSFlushChunk: 5844, // 5844
    +ClientMDSSignInstallScript: 5845, // 5845
    +ClientMDSSignInstallScriptResponse: 5846, // 5846
    +MDSMigrateChunk: 5847, // 5847
    +MDSMigrateChunkResponse: 5848, // 5848
    +CSBase: 6200, // 6200
    +CSPing: 6201, // 6201
    +CSPingResponse: 6202, // 6202
    +GMSBase: 6400, // 6400
    +GMSGameServerReplicate: 6401, // 6401
    +ClientGMSServerQuery: 6403, // 6403
    +GMSClientServerQueryResponse: 6404, // 6404
    +AMGMSGameServerUpdate: 6405, // 6405
    +AMGMSGameServerRemove: 6406, // 6406
    +GameServerOutOfDate: 6407, // 6407
    +DeviceAuthorizationBase: 6500, // 6500
    +ClientAuthorizeLocalDeviceRequest: 6501, // 6501
    +ClientAuthorizeLocalDevice: 6502, // 6502
    +ClientAuthorizeLocalDeviceResponse: 6502, // 6502
    +ClientDeauthorizeDeviceRequest: 6503, // 6503
    +ClientDeauthorizeDevice: 6504, // 6504
    +ClientUseLocalDeviceAuthorizations: 6505, // 6505
    +ClientGetAuthorizedDevices: 6506, // 6506
    +ClientGetAuthorizedDevicesResponse: 6507, // 6507
    +AMNotifySessionDeviceAuthorized: 6508, // 6508
    +ClientAuthorizeLocalDeviceNotification: 6509, // 6509
    +MMSBase: 6600, // 6600
    +ClientMMSCreateLobby: 6601, // 6601
    +ClientMMSCreateLobbyResponse: 6602, // 6602
    +ClientMMSJoinLobby: 6603, // 6603
    +ClientMMSJoinLobbyResponse: 6604, // 6604
    +ClientMMSLeaveLobby: 6605, // 6605
    +ClientMMSLeaveLobbyResponse: 6606, // 6606
    +ClientMMSGetLobbyList: 6607, // 6607
    +ClientMMSGetLobbyListResponse: 6608, // 6608
    +ClientMMSSetLobbyData: 6609, // 6609
    +ClientMMSSetLobbyDataResponse: 6610, // 6610
    +ClientMMSGetLobbyData: 6611, // 6611
    +ClientMMSLobbyData: 6612, // 6612
    +ClientMMSSendLobbyChatMsg: 6613, // 6613
    +ClientMMSLobbyChatMsg: 6614, // 6614
    +ClientMMSSetLobbyOwner: 6615, // 6615
    +ClientMMSSetLobbyOwnerResponse: 6616, // 6616
    +ClientMMSSetLobbyGameServer: 6617, // 6617
    +ClientMMSLobbyGameServerSet: 6618, // 6618
    +ClientMMSUserJoinedLobby: 6619, // 6619
    +ClientMMSUserLeftLobby: 6620, // 6620
    +ClientMMSInviteToLobby: 6621, // 6621
    +ClientMMSFlushFrenemyListCache: 6622, // 6622
    +ClientMMSFlushFrenemyListCacheResponse: 6623, // 6623
    +ClientMMSSetLobbyLinked: 6624, // 6624
    +NonStdMsgBase: 6800, // 6800
    +NonStdMsgMemcached: 6801, // 6801
    +NonStdMsgHTTPServer: 6802, // 6802
    +NonStdMsgHTTPClient: 6803, // 6803
    +NonStdMsgWGResponse: 6804, // 6804
    +NonStdMsgPHPSimulator: 6805, // 6805
    +NonStdMsgChase: 6806, // 6806
    +NonStdMsgDFSTransfer: 6807, // 6807
    +NonStdMsgTests: 6808, // 6808
    +NonStdMsgUMQpipeAAPL: 6809, // 6809
    +NonStdMsgSyslog: 6810, // 6810
    +NonStdMsgLogsink: 6811, // 6811
    +NonStdMsgSteam2Emulator: 6812, // 6812
    +NonStdMsgRTMPServer: 6813, // 6813
    +UDSBase: 7000, // 7000
    +ClientUDSP2PSessionStarted: 7001, // 7001
    +ClientUDSP2PSessionEnded: 7002, // 7002
    +UDSRenderUserAuth: 7003, // 7003
    +UDSRenderUserAuthResponse: 7004, // 7004
    +ClientUDSInviteToGame: 7005, // 7005
    +UDSFindSession: 7006, // 7006
    +UDSHasSession: 7006, // 7006
    +UDSFindSessionResponse: 7007, // 7007
    +UDSHasSessionResponse: 7007, // 7007
    +MPASBase: 7100, // 7100
    +MPASVacBanReset: 7101, // 7101
    +KGSBase: 7200, // 7200
    +KGSAllocateKeyRange: 7201, // 7201
    +KGSAllocateKeyRangeResponse: 7202, // 7202
    +KGSGenerateKeys: 7203, // 7203
    +KGSGenerateKeysResponse: 7204, // 7204
    +KGSRemapKeys: 7205, // 7205
    +KGSRemapKeysResponse: 7206, // 7206
    +KGSGenerateGameStopWCKeys: 7207, // 7207
    +KGSGenerateGameStopWCKeysResponse: 7208, // 7208
    +UCMBase: 7300, // 7300
    +ClientUCMAddScreenshot: 7301, // 7301
    +ClientUCMAddScreenshotResponse: 7302, // 7302
    +UCMValidateObjectExists: 7303, // 7303
    +UCMValidateObjectExistsResponse: 7304, // 7304
    +UCMResetCommunityContent: 7307, // 7307
    +UCMResetCommunityContentResponse: 7308, // 7308
    +ClientUCMDeleteScreenshot: 7309, // 7309
    +ClientUCMDeleteScreenshotResponse: 7310, // 7310
    +ClientUCMPublishFile: 7311, // 7311
    +ClientUCMPublishFileResponse: 7312, // 7312
    +ClientUCMGetPublishedFileDetails: 7313, // 7313
    +ClientUCMGetPublishedFileDetailsResponse: 7314, // 7314
    +ClientUCMDeletePublishedFile: 7315, // 7315
    +ClientUCMDeletePublishedFileResponse: 7316, // 7316
    +ClientUCMEnumerateUserPublishedFiles: 7317, // 7317
    +ClientUCMEnumerateUserPublishedFilesResponse: 7318, // 7318
    +ClientUCMSubscribePublishedFile: 7319, // 7319
    +ClientUCMSubscribePublishedFileResponse: 7320, // 7320
    +ClientUCMEnumerateUserSubscribedFiles: 7321, // 7321
    +ClientUCMEnumerateUserSubscribedFilesResponse: 7322, // 7322
    +ClientUCMUnsubscribePublishedFile: 7323, // 7323
    +ClientUCMUnsubscribePublishedFileResponse: 7324, // 7324
    +ClientUCMUpdatePublishedFile: 7325, // 7325
    +ClientUCMUpdatePublishedFileResponse: 7326, // 7326
    +UCMUpdatePublishedFile: 7327, // 7327
    +UCMUpdatePublishedFileResponse: 7328, // 7328
    +UCMDeletePublishedFile: 7329, // 7329
    +UCMDeletePublishedFileResponse: 7330, // 7330
    +UCMUpdatePublishedFileStat: 7331, // 7331
    +UCMUpdatePublishedFileBan: 7332, // 7332
    +UCMUpdatePublishedFileBanResponse: 7333, // 7333
    +UCMUpdateTaggedScreenshot: 7334, // 7334
    +UCMAddTaggedScreenshot: 7335, // 7335
    +UCMRemoveTaggedScreenshot: 7336, // 7336
    +UCMReloadPublishedFile: 7337, // 7337
    +UCMReloadUserFileListCaches: 7338, // 7338
    +UCMPublishedFileReported: 7339, // 7339
    +UCMUpdatePublishedFileIncompatibleStatus: 7340, // 7340
    +UCMPublishedFilePreviewAdd: 7341, // 7341
    +UCMPublishedFilePreviewAddResponse: 7342, // 7342
    +UCMPublishedFilePreviewRemove: 7343, // 7343
    +UCMPublishedFilePreviewRemoveResponse: 7344, // 7344
    +UCMPublishedFilePreviewChangeSortOrder: 7345, // 7345
    +UCMPublishedFilePreviewChangeSortOrderResponse: 7346, // 7346
    +ClientUCMPublishedFileSubscribed: 7347, // 7347
    +ClientUCMPublishedFileUnsubscribed: 7348, // 7348
    +UCMPublishedFileSubscribed: 7349, // 7349
    +UCMPublishedFileUnsubscribed: 7350, // 7350
    +UCMPublishFile: 7351, // 7351
    +UCMPublishFileResponse: 7352, // 7352
    +UCMPublishedFileChildAdd: 7353, // 7353
    +UCMPublishedFileChildAddResponse: 7354, // 7354
    +UCMPublishedFileChildRemove: 7355, // 7355
    +UCMPublishedFileChildRemoveResponse: 7356, // 7356
    +UCMPublishedFileChildChangeSortOrder: 7357, // 7357
    +UCMPublishedFileChildChangeSortOrderResponse: 7358, // 7358
    +UCMPublishedFileParentChanged: 7359, // 7359
    +ClientUCMGetPublishedFilesForUser: 7360, // 7360
    +ClientUCMGetPublishedFilesForUserResponse: 7361, // 7361
    +UCMGetPublishedFilesForUser: 7362, // 7362
    +UCMGetPublishedFilesForUserResponse: 7363, // 7363
    +ClientUCMSetUserPublishedFileAction: 7364, // 7364
    +ClientUCMSetUserPublishedFileActionResponse: 7365, // 7365
    +ClientUCMEnumeratePublishedFilesByUserAction: 7366, // 7366
    +ClientUCMEnumeratePublishedFilesByUserActionResponse: 7367, // 7367
    +ClientUCMPublishedFileDeleted: 7368, // 7368
    +UCMGetUserSubscribedFiles: 7369, // 7369
    +UCMGetUserSubscribedFilesResponse: 7370, // 7370
    +UCMFixStatsPublishedFile: 7371, // 7371
    +UCMDeleteOldScreenshot: 7372, // 7372
    +UCMDeleteOldScreenshotResponse: 7373, // 7373
    +UCMDeleteOldVideo: 7374, // 7374
    +UCMDeleteOldVideoResponse: 7375, // 7375
    +UCMUpdateOldScreenshotPrivacy: 7376, // 7376
    +UCMUpdateOldScreenshotPrivacyResponse: 7377, // 7377
    +ClientUCMEnumerateUserSubscribedFilesWithUpdates: 7378, // 7378
    +ClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse: 7379, // 7379
    +UCMPublishedFileContentUpdated: 7380, // 7380
    +UCMPublishedFileUpdated: 7381, // 7381
    +ClientWorkshopItemChangesRequest: 7382, // 7382
    +ClientWorkshopItemChangesResponse: 7383, // 7383
    +ClientWorkshopItemInfoRequest: 7384, // 7384
    +ClientWorkshopItemInfoResponse: 7385, // 7385
    +FSBase: 7500, // 7500
    +ClientRichPresenceUpload: 7501, // 7501
    +ClientRichPresenceRequest: 7502, // 7502
    +ClientRichPresenceInfo: 7503, // 7503
    +FSRichPresenceRequest: 7504, // 7504
    +FSRichPresenceResponse: 7505, // 7505
    +FSComputeFrenematrix: 7506, // 7506
    +FSComputeFrenematrixResponse: 7507, // 7507
    +FSPlayStatusNotification: 7508, // 7508
    +FSPublishPersonaStatus: 7509, // 7509
    +FSAddOrRemoveFollower: 7510, // 7510
    +FSAddOrRemoveFollowerResponse: 7511, // 7511
    +FSUpdateFollowingList: 7512, // 7512
    +FSCommentNotification: 7513, // 7513
    +FSCommentNotificationViewed: 7514, // 7514
    +ClientFSGetFollowerCount: 7515, // 7515
    +ClientFSGetFollowerCountResponse: 7516, // 7516
    +ClientFSGetIsFollowing: 7517, // 7517
    +ClientFSGetIsFollowingResponse: 7518, // 7518
    +ClientFSEnumerateFollowingList: 7519, // 7519
    +ClientFSEnumerateFollowingListResponse: 7520, // 7520
    +FSGetPendingNotificationCount: 7521, // 7521
    +FSGetPendingNotificationCountResponse: 7522, // 7522
    +ClientFSOfflineMessageNotification: 7523, // 7523
    +ClientFSRequestOfflineMessageCount: 7524, // 7524
    +ClientFSGetFriendMessageHistory: 7525, // 7525
    +ClientFSGetFriendMessageHistoryResponse: 7526, // 7526
    +ClientFSGetFriendMessageHistoryForOfflineMessages: 7527, // 7527
    +ClientFSGetFriendsSteamLevels: 7528, // 7528
    +ClientFSGetFriendsSteamLevelsResponse: 7529, // 7529
    +FSRequestFriendData: 7530, // 7530
    +DRMRange2: 7600, // 7600
    +CEGVersionSetEnableDisableRequest: 7600, // 7600
    +CEGVersionSetEnableDisableResponse: 7601, // 7601
    +CEGPropStatusDRMSRequest: 7602, // 7602
    +CEGPropStatusDRMSResponse: 7603, // 7603
    +CEGWhackFailureReportRequest: 7604, // 7604
    +CEGWhackFailureReportResponse: 7605, // 7605
    +DRMSFetchVersionSet: 7606, // 7606
    +DRMSFetchVersionSetResponse: 7607, // 7607
    +EconBase: 7700, // 7700
    +EconTrading_InitiateTradeRequest: 7701, // 7701
    +EconTrading_InitiateTradeProposed: 7702, // 7702
    +EconTrading_InitiateTradeResponse: 7703, // 7703
    +EconTrading_InitiateTradeResult: 7704, // 7704
    +EconTrading_StartSession: 7705, // 7705
    +EconTrading_CancelTradeRequest: 7706, // 7706
    +EconFlushInventoryCache: 7707, // 7707
    +EconFlushInventoryCacheResponse: 7708, // 7708
    +EconCDKeyProcessTransaction: 7711, // 7711
    +EconCDKeyProcessTransactionResponse: 7712, // 7712
    +EconGetErrorLogs: 7713, // 7713
    +EconGetErrorLogsResponse: 7714, // 7714
    +RMRange: 7800, // 7800
    +RMTestVerisignOTP: 7800, // 7800
    +RMTestVerisignOTPResponse: 7801, // 7801
    +RMDeleteMemcachedKeys: 7803, // 7803
    +RMRemoteInvoke: 7804, // 7804
    +BadLoginIPList: 7805, // 7805
    +RMMsgTraceAddTrigger: 7806, // 7806
    +RMMsgTraceRemoveTrigger: 7807, // 7807
    +RMMsgTraceEvent: 7808, // 7808
    +UGSBase: 7900, // 7900
    +UGSUpdateGlobalStats: 7900, // 7900
    +ClientUGSGetGlobalStats: 7901, // 7901
    +ClientUGSGetGlobalStatsResponse: 7902, // 7902
    +StoreBase: 8000, // 8000
    +StoreUpdateRecommendationCount: 8000, // 8000
    +UMQBase: 8100, // 8100
    +UMQLogonRequest: 8100, // 8100
    +UMQLogonResponse: 8101, // 8101
    +UMQLogoffRequest: 8102, // 8102
    +UMQLogoffResponse: 8103, // 8103
    +UMQSendChatMessage: 8104, // 8104
    +UMQIncomingChatMessage: 8105, // 8105
    +UMQPoll: 8106, // 8106
    +UMQPollResults: 8107, // 8107
    +UMQ2AM_ClientMsgBatch: 8108, // 8108
    +UMQEnqueueMobileSalePromotions: 8109, // 8109
    +UMQEnqueueMobileAnnouncements: 8110, // 8110
    +WorkshopBase: 8200, // 8200
    +WorkshopAcceptTOSRequest: 8200, // 8200
    +WorkshopAcceptTOSResponse: 8201, // 8201
    +WebAPIBase: 8300, // 8300
    +WebAPIValidateOAuth2Token: 8300, // 8300
    +WebAPIValidateOAuth2TokenResponse: 8301, // 8301
    +WebAPIInvalidateTokensForAccount: 8302, // 8302
    +WebAPIRegisterGCInterfaces: 8303, // 8303
    +WebAPIInvalidateOAuthClientCache: 8304, // 8304
    +WebAPIInvalidateOAuthTokenCache: 8305, // 8305
    +WebAPISetSecrets: 8306, // 8306
    +BackpackBase: 8400, // 8400
    +BackpackAddToCurrency: 8401, // 8401
    +BackpackAddToCurrencyResponse: 8402, // 8402
    +CREBase: 8500, // 8500
    +CRERankByTrend: 8501, // 8501
    +CRERankByTrendResponse: 8502, // 8502
    +CREItemVoteSummary: 8503, // 8503
    +CREItemVoteSummaryResponse: 8504, // 8504
    +CRERankByVote: 8505, // 8505
    +CRERankByVoteResponse: 8506, // 8506
    +CREUpdateUserPublishedItemVote: 8507, // 8507
    +CREUpdateUserPublishedItemVoteResponse: 8508, // 8508
    +CREGetUserPublishedItemVoteDetails: 8509, // 8509
    +CREGetUserPublishedItemVoteDetailsResponse: 8510, // 8510
    +CREEnumeratePublishedFiles: 8511, // 8511
    +CREEnumeratePublishedFilesResponse: 8512, // 8512
    +CREPublishedFileVoteAdded: 8513, // 8513
    +SecretsBase: 8600, // 8600
    +SecretsRequestCredentialPair: 8600, // 8600
    +SecretsCredentialPairResponse: 8601, // 8601
    +SecretsRequestServerIdentity: 8602, // 8602
    +SecretsServerIdentityResponse: 8603, // 8603
    +SecretsUpdateServerIdentities: 8604, // 8604
    +BoxMonitorBase: 8700, // 8700
    +BoxMonitorReportRequest: 8700, // 8700
    +BoxMonitorReportResponse: 8701, // 8701
    +LogsinkBase: 8800, // 8800
    +LogsinkWriteReport: 8800, // 8800
    +PICSBase: 8900, // 8900
    +ClientPICSChangesSinceRequest: 8901, // 8901
    +ClientPICSChangesSinceResponse: 8902, // 8902
    +ClientPICSProductInfoRequest: 8903, // 8903
    +ClientPICSProductInfoResponse: 8904, // 8904
    +ClientPICSAccessTokenRequest: 8905, // 8905
    +ClientPICSAccessTokenResponse: 8906, // 8906
    +WorkerProcess: 9000, // 9000
    +WorkerProcessPingRequest: 9000, // 9000
    +WorkerProcessPingResponse: 9001, // 9001
    +WorkerProcessShutdown: 9002, // 9002
    +DRMWorkerProcess: 9100, // 9100
    +DRMWorkerProcessDRMAndSign: 9100, // 9100
    +DRMWorkerProcessDRMAndSignResponse: 9101, // 9101
    +DRMWorkerProcessSteamworksInfoRequest: 9102, // 9102
    +DRMWorkerProcessSteamworksInfoResponse: 9103, // 9103
    +DRMWorkerProcessInstallDRMDLLRequest: 9104, // 9104
    +DRMWorkerProcessInstallDRMDLLResponse: 9105, // 9105
    +DRMWorkerProcessSecretIdStringRequest: 9106, // 9106
    +DRMWorkerProcessSecretIdStringResponse: 9107, // 9107
    +DRMWorkerProcessGetDRMGuidsFromFileRequest: 9108, // 9108
    +DRMWorkerProcessGetDRMGuidsFromFileResponse: 9109, // 9109
    +DRMWorkerProcessInstallProcessedFilesRequest: 9110, // 9110
    +DRMWorkerProcessInstallProcessedFilesResponse: 9111, // 9111
    +DRMWorkerProcessExamineBlobRequest: 9112, // 9112
    +DRMWorkerProcessExamineBlobResponse: 9113, // 9113
    +DRMWorkerProcessDescribeSecretRequest: 9114, // 9114
    +DRMWorkerProcessDescribeSecretResponse: 9115, // 9115
    +DRMWorkerProcessBackfillOriginalRequest: 9116, // 9116
    +DRMWorkerProcessBackfillOriginalResponse: 9117, // 9117
    +DRMWorkerProcessValidateDRMDLLRequest: 9118, // 9118
    +DRMWorkerProcessValidateDRMDLLResponse: 9119, // 9119
    +DRMWorkerProcessValidateFileRequest: 9120, // 9120
    +DRMWorkerProcessValidateFileResponse: 9121, // 9121
    +DRMWorkerProcessSplitAndInstallRequest: 9122, // 9122
    +DRMWorkerProcessSplitAndInstallResponse: 9123, // 9123
    +DRMWorkerProcessGetBlobRequest: 9124, // 9124
    +DRMWorkerProcessGetBlobResponse: 9125, // 9125
    +DRMWorkerProcessEvaluateCrashRequest: 9126, // 9126
    +DRMWorkerProcessEvaluateCrashResponse: 9127, // 9127
    +DRMWorkerProcessAnalyzeFileRequest: 9128, // 9128
    +DRMWorkerProcessAnalyzeFileResponse: 9129, // 9129
    +DRMWorkerProcessUnpackBlobRequest: 9130, // 9130
    +DRMWorkerProcessUnpackBlobResponse: 9131, // 9131
    +DRMWorkerProcessInstallAllRequest: 9132, // 9132
    +DRMWorkerProcessInstallAllResponse: 9133, // 9133
    +TestWorkerProcess: 9200, // 9200
    +TestWorkerProcessLoadUnloadModuleRequest: 9200, // 9200
    +TestWorkerProcessLoadUnloadModuleResponse: 9201, // 9201
    +TestWorkerProcessServiceModuleCallRequest: 9202, // 9202
    +TestWorkerProcessServiceModuleCallResponse: 9203, // 9203
    +QuestServerBase: 9300, // 9300
    +ClientGetEmoticonList: 9330, // 9330
    +ClientEmoticonList: 9331, // 9331
    +ClientSharedLibraryBase: 9400, // 9400
    +SLCBase: 9400, // 9400
    +SLCUserSessionStatus: 9400, // 9400
    +SLCRequestUserSessionStatus: 9401, // 9401
    +SLCSharedLicensesLockStatus: 9402, // 9402
    +ClientSharedLicensesLockStatus: 9403, // 9403
    +ClientSharedLicensesStopPlaying: 9404, // 9404
    +ClientSharedLibraryLockStatus: 9405, // 9405
    +ClientSharedLibraryStopPlaying: 9406, // 9406
    +SLCOwnerLibraryChanged: 9407, // 9407
    +SLCSharedLibraryChanged: 9408, // 9408
    +RemoteClientBase: 9500, // 9500
    +RemoteClientAuth: 9500, // 9500
    +RemoteClientAuthResponse: 9501, // 9501
    +RemoteClientAppStatus: 9502, // 9502
    +RemoteClientStartStream: 9503, // 9503
    +RemoteClientStartStreamResponse: 9504, // 9504
    +RemoteClientPing: 9505, // 9505
    +RemoteClientPingResponse: 9506, // 9506
    +ClientUnlockStreaming: 9507, // 9507
    +ClientUnlockStreamingResponse: 9508, // 9508
    +RemoteClientAcceptEULA: 9509, // 9509
    +RemoteClientGetControllerConfig: 9510, // 9510
    +RemoteClientGetControllerConfigResposne: 9511, // 9511
    +RemoteClientStreamingEnabled: 9512, // 9512
    +ClientConcurrentSessionsBase: 9600, // 9600
    +ClientPlayingSessionState: 9600, // 9600
    +ClientKickPlayingSession: 9601, // 9601
    +ClientBroadcastBase: 9700, // 9700
    +ClientBroadcastInit: 9700, // 9700
    +ClientBroadcastFrames: 9701, // 9701
    +ClientBroadcastDisconnect: 9702, // 9702
    +ClientBroadcastScreenshot: 9703, // 9703
    +ClientBroadcastUploadConfig: 9704, // 9704
    +BaseClient3: 9800, // 9800
    +ClientVoiceCallPreAuthorize: 9800, // 9800
    +ClientVoiceCallPreAuthorizeResponse: 9801 // 9801
  |};

  declare export var EUniverse: {|
    +Invalid: 0, // 0
    +Public: 1, // 1
    +Beta: 2, // 2
    +Internal: 3, // 3
    +Dev: 4, // 4
    +Max: 5 // 5
  |};

  declare export var EChatEntryType: {|
    +Invalid: 0, // 0
    +ChatMsg: 1, // 1
    +Typing: 2, // 2
    +InviteGame: 3, // 3
    +Emote: 4, // 4
    +LobbyGameStart: 5, // 5
    +LeftConversation: 6, // 6
    +Entered: 7, // 7
    +WasKicked: 8, // 8
    +WasBanned: 9, // 9
    +Disconnected: 10, // 10
    +HistoricalChat: 11, // 11
    +Reserved1: 12, // 12
    +Reserved2: 13, // 13
    +LinkBlocked: 14 // 14
  |};

  declare export var EPersonaState: {|
    +Offline: 0, // 0
    +Online: 1, // 1
    +Busy: 2, // 2
    +Away: 3, // 3
    +Snooze: 4, // 4
    +LookingToTrade: 5, // 5
    +LookingToPlay: 6, // 6
    +Max: 7 // 7
  |};

  declare export var EAccountType: {|
    +Invalid: 0, // 0
    +Individual: 1, // 1
    +Multiseat: 2, // 2
    +GameServer: 3, // 3
    +AnonGameServer: 4, // 4
    +Pending: 5, // 5
    +ContentServer: 6, // 6
    +Clan: 7, // 7
    +Chat: 8, // 8
    +ConsoleUser: 9, // 9
    +AnonUser: 10, // 10
    +Max: 11 // 11
  |};

  declare export var EFriendRelationship: {|
    +None: 0, // 0
    +Blocked: 1, // 1
    +RequestRecipient: 2, // 2
    +Friend: 3, // 3
    +RequestInitiator: 4, // 4
    +Ignored: 5, // 5
    +IgnoredFriend: 6, // 6
    +SuggestedFriend: 7, // 7
    +Max: 8 // 8
  |};

  declare export var EAccountFlags: {|
    +NormalUser: 0, // 0
    +PersonaNameSet: 1, // 1
    +Unbannable: 2, // 2
    +PasswordSet: 4, // 4
    +Support: 8, // 8
    +Admin: 16, // 16
    +Supervisor: 32, // 32
    +AppEditor: 64, // 64
    +HWIDSet: 128, // 128
    +PersonalQASet: 256, // 256
    +VacBeta: 512, // 512
    +Debug: 1024, // 1024
    +Disabled: 2048, // 2048
    +LimitedUser: 4096, // 4096
    +LimitedUserForce: 8192, // 8192
    +EmailValidated: 16384, // 16384
    +MarketingTreatment: 32768, // 32768
    +OGGInviteOptOut: 65536, // 65536
    +ForcePasswordChange: 131072, // 131072
    +ForceEmailVerification: 262144, // 262144
    +LogonExtraSecurity: 524288, // 524288
    +LogonExtraSecurityDisabled: 1048576, // 1048576
    +Steam2MigrationComplete: 2097152, // 2097152
    +NeedLogs: 4194304, // 4194304
    +Lockdown: 8388608, // 8388608
    +MasterAppEditor: 16777216, // 16777216
    +BannedFromWebAPI: 33554432, // 33554432
    +ClansOnlyFromFriends: 67108864, // 67108864
    +GlobalModerator: 134217728, // 134217728
    +ParentalSettings: 268435456, // 268435456
    +ThirdPartySupport: 536870912, // 536870912
    +NeedsSSANextSteamLogon: 1073741824 // 1073741824
  |};

  declare export var EClanPermission: {|
    +Nobody: 0, // 0
    +Owner: 1, // 1
    +Officer: 2, // 2
    +OwnerAndOfficer: 3, // 3
    +Member: 4, // 4
    +Moderator: 8, // 8
    +OwnerOfficerModerator: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +AllMembers: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +OGGGameOwner: 16, // 16
    +NonMember: 128, // 128
    +MemberAllowed: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +ModeratorAllowed: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +OfficerAllowed: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +OwnerAllowed: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +Anybody: "NO PRINT IMPLEMENTED: BinaryExpression" // "NO PRINT IMPLEMENTED: BinaryExpression"
  |};

  declare export var EChatPermission: {|
    +Close: 1, // 1
    +Invite: 2, // 2
    +Talk: 8, // 8
    +Kick: 16, // 16
    +Mute: 32, // 32
    +SetMetadata: 64, // 64
    +ChangePermissions: 128, // 128
    +Ban: 256, // 256
    +ChangeAccess: 512, // 512
    +EveryoneNotInClanDefault: Talk, // Talk
    +EveryoneDefault: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +MemberDefault: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +OfficerDefault: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +OwnerDefault: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +Mask: 1019 // 1019
  |};

  declare export var EFriendFlags: {|
    +None: 0, // 0
    +Blocked: 1, // 1
    +FriendshipRequested: 2, // 2
    +Immediate: 4, // 4
    +ClanMember: 8, // 8
    +OnGameServer: 16, // 16
    +RequestingFriendship: 128, // 128
    +RequestingInfo: 256, // 256
    +Ignored: 512, // 512
    +IgnoredFriend: 1024, // 1024
    +Suggested: 2048, // 2048
    +ChatMember: 4096, // 4096
    +FlagAll: 65535 // 65535
  |};

  declare export var EPersonaStateFlag: {|
    +HasRichPresence: 1, // 1
    +InJoinableGame: 2, // 2
    +Golden: 4, // 4
    +OnlineUsingWeb: 256, // 256
    +ClientTypeWeb: 256, // 256
    +OnlineUsingMobile: 512, // 512
    +ClientTypeMobile: 512, // 512
    +OnlineUsingBigPicture: 1024, // 1024
    +ClientTypeTenfoot: 1024, // 1024
    +OnlineUsingVR: 2048, // 2048
    +ClientTypeVR: 2048, // 2048
    +LaunchTypeGamepad: 4096 // 4096
  |};

  declare export var EClientPersonaStateFlag: {|
    +Status: 1, // 1
    +PlayerName: 2, // 2
    +QueryPort: 4, // 4
    +SourceID: 8, // 8
    +Presence: 16, // 16
    +Metadata: 32, // 32
    +LastSeen: 64, // 64
    +ClanInfo: 128, // 128
    +GameExtraInfo: 256, // 256
    +GameDataBlob: 512, // 512
    +ClanTag: 1024, // 1024
    +Facebook: 2048 // 2048
  |};

  declare export var EAppUsageEvent: {|
    +GameLaunch: 1, // 1
    +GameLaunchTrial: 2, // 2
    +Media: 3, // 3
    +PreloadStart: 4, // 4
    +PreloadFinish: 5, // 5
    +MarketingMessageView: 6, // 6
    +InGameAdViewed: 7, // 7
    +GameLaunchFreeWeekend: 8 // 8
  |};

  declare export var ELicenseFlags: {|
    +None: 0, // 0
    +Renew: 1, // 1
    +RenewalFailed: 2, // 2
    +Pending: 4, // 4
    +Expired: 8, // 8
    +CancelledByUser: 16, // 16
    +CancelledByAdmin: 32, // 32
    +LowViolenceContent: 64, // 64
    +ImportedFromSteam2: 128, // 128
    +ForceRunRestriction: 256, // 256
    +RegionRestrictionExpired: 512, // 512
    +CancelledByFriendlyFraudLock: 1024, // 1024
    +NotActivated: 2048 // 2048
  |};

  declare export var ELicenseType: {|
    +NoLicense: 0, // 0
    +SinglePurchase: 1, // 1
    +SinglePurchaseLimitedUse: 2, // 2
    +RecurringCharge: 3, // 3
    +RecurringChargeLimitedUse: 4, // 4
    +RecurringChargeLimitedUseWithOverages: 5, // 5
    +RecurringOption: 6, // 6
    +LimitedUseDelayedActivation: 7 // 7
  |};

  declare export var EPaymentMethod: {|
    +None: 0, // 0
    +ActivationCode: 1, // 1
    +CreditCard: 2, // 2
    +Giropay: 3, // 3
    +PayPal: 4, // 4
    +Ideal: 5, // 5
    +PaySafeCard: 6, // 6
    +Sofort: 7, // 7
    +GuestPass: 8, // 8
    +WebMoney: 9, // 9
    +MoneyBookers: 10, // 10
    +AliPay: 11, // 11
    +Yandex: 12, // 12
    +Kiosk: 13, // 13
    +Qiwi: 14, // 14
    +GameStop: 15, // 15
    +HardwarePromo: 16, // 16
    +MoPay: 17, // 17
    +BoletoBancario: 18, // 18
    +BoaCompraGold: 19, // 19
    +BancoDoBrasilOnline: 20, // 20
    +ItauOnline: 21, // 21
    +BradescoOnline: 22, // 22
    +Pagseguro: 23, // 23
    +VisaBrazil: 24, // 24
    +AmexBrazil: 25, // 25
    +Aura: 26, // 26
    +Hipercard: 27, // 27
    +MastercardBrazil: 28, // 28
    +DinersCardBrazil: 29, // 29
    +AuthorizedDevice: 30, // 30
    +MOLPoints: 31, // 31
    +ClickAndBuy: 32, // 32
    +Beeline: 33, // 33
    +Konbini: 34, // 34
    +EClubPoints: 35, // 35
    +CreditCardJapan: 36, // 36
    +BankTransferJapan: 37, // 37
    +PayEasyJapan: 38, // 38
    +PayEasy: 38, // 38
    +Zong: 39, // 39
    +CultureVoucher: 40, // 40
    +BookVoucher: 41, // 41
    +HappymoneyVoucher: 42, // 42
    +ConvenientStoreVoucher: 43, // 43
    +GameVoucher: 44, // 44
    +Multibanco: 45, // 45
    +Payshop: 46, // 46
    +Maestro: 47, // 47
    +MaestroBoaCompra: 47, // 47
    +OXXO: 48, // 48
    +ToditoCash: 49, // 49
    +Carnet: 50, // 50
    +SPEI: 51, // 51
    +ThreePay: 52, // 52
    +IsBank: 53, // 53
    +Garanti: 54, // 54
    +Akbank: 55, // 55
    +YapiKredi: 56, // 56
    +Halkbank: 57, // 57
    +BankAsya: 58, // 58
    +Finansbank: 59, // 59
    +DenizBank: 60, // 60
    +PTT: 61, // 61
    +CashU: 62, // 62
    +AutoGrant: 64, // 64
    +WebMoneyJapan: 65, // 65
    +OneCard: 66, // 66
    +PSE: 67, // 67
    +Exito: 68, // 68
    +Efecty: 69, // 69
    +Paloto: 70, // 70
    +PinValidda: 71, // 71
    +MangirKart: 72, // 72
    +BancoCreditoDePeru: 73, // 73
    +BBVAContinental: 74, // 74
    +SafetyPay: 75, // 75
    +PagoEfectivo: 76, // 76
    +Trustly: 77, // 77
    +UnionPay: 78, // 78
    +BitCoin: 79, // 79
    +Wallet: 128, // 128
    +Valve: 129, // 129
    +SteamPressMaster: 130, // 130
    +MasterComp: 130, // 130
    +StorePromotion: 131, // 131
    +Promotional: 131, // 131
    +OEMTicket: 256, // 256
    +Split: 512, // 512
    +Complimentary: 1024 // 1024
  |};

  declare export var EPurchaseResultDetail: {|
    +NoDetail: 0, // 0
    +AVSFailure: 1, // 1
    +InsufficientFunds: 2, // 2
    +ContactSupport: 3, // 3
    +Timeout: 4, // 4
    +InvalidPackage: 5, // 5
    +InvalidPaymentMethod: 6, // 6
    +InvalidData: 7, // 7
    +OthersInProgress: 8, // 8
    +AlreadyPurchased: 9, // 9
    +WrongPrice: 10, // 10
    +FraudCheckFailed: 11, // 11
    +CancelledByUser: 12, // 12
    +RestrictedCountry: 13, // 13
    +BadActivationCode: 14, // 14
    +DuplicateActivationCode: 15, // 15
    +UseOtherPaymentMethod: 16, // 16
    +UseOtherFunctionSource: 17, // 17
    +InvalidShippingAddress: 18, // 18
    +RegionNotSupported: 19, // 19
    +AcctIsBlocked: 20, // 20
    +AcctNotVerified: 21, // 21
    +InvalidAccount: 22, // 22
    +StoreBillingCountryMismatch: 23, // 23
    +DoesNotOwnRequiredApp: 24, // 24
    +CanceledByNewTransaction: 25, // 25
    +ForceCanceledPending: 26, // 26
    +FailCurrencyTransProvider: 27, // 27
    +FailedCyberCafe: 28, // 28
    +NeedsPreApproval: 29, // 29
    +PreApprovalDenied: 30, // 30
    +WalletCurrencyMismatch: 31, // 31
    +EmailNotValidated: 32, // 32
    +ExpiredCard: 33, // 33
    +TransactionExpired: 34, // 34
    +WouldExceedMaxWallet: 35, // 35
    +MustLoginPS3AppForPurchase: 36, // 36
    +CannotShipToPOBox: 37, // 37
    +InsufficientInventory: 38, // 38
    +CannotGiftShippedGoods: 39, // 39
    +CannotShipInternationally: 40, // 40
    +BillingAgreementCancelled: 41, // 41
    +InvalidCoupon: 42, // 42
    +ExpiredCoupon: 43, // 43
    +AccountLocked: 44, // 44
    +OtherAbortableInProgress: 45, // 45
    +ExceededSteamLimit: 46, // 46
    +OverlappingPackagesInCart: 47, // 47
    +NoWallet: 48, // 48
    +NoCachedPaymentMethod: 49, // 49
    +CannotRedeemCodeFromClient: 50, // 50
    +PurchaseAmountNoSupportedByProvider: 51, // 51
    +OverlappingPackagesInPendingTransaction: 52, // 52
    +RateLimited: 53, // 53
    +OwnsExcludedApp: 54, // 54
    +CreditCardBinMismatchesType: 55, // 55
    +CartValueTooHigh: 56, // 56
    +BillingAgreementAlreadyExists: 57, // 57
    +POSACodeNotActivated: 58, // 58
    +CannotShipToCountry: 59, // 59
    +HungTransactionCancelled: 60, // 60
    +PaypalInternalError: 61, // 61
    +UnknownGlobalCollectError: 62, // 62
    +InvalidTaxAddress: 63, // 63
    +PhysicalProductLimitExceeded: 64, // 64
    +PurchaseCannotBeReplayed: 65, // 65
    +DelayedCompletion: 66, // 66
    +BundleTypeCannotBeGifted: 67 // 67
  |};

  declare export var EIntroducerRouting: {|
    +FileShare: 0, // 0
    +P2PVoiceChat: 1, // 1
    +P2PNetworking: 2 // 2
  |};

  declare export var EServerFlags: {|
    +None: 0, // 0
    +Active: 1, // 1
    +Secure: 2, // 2
    +Dedicated: 4, // 4
    +Linux: 8, // 8
    +Passworded: 16, // 16
    +Private: 32 // 32
  |};

  declare export var EDenyReason: {|
    +InvalidVersion: 1, // 1
    +Generic: 2, // 2
    +NotLoggedOn: 3, // 3
    +NoLicense: 4, // 4
    +Cheater: 5, // 5
    +LoggedInElseWhere: 6, // 6
    +UnknownText: 7, // 7
    +IncompatibleAnticheat: 8, // 8
    +MemoryCorruption: 9, // 9
    +IncompatibleSoftware: 10, // 10
    +SteamConnectionLost: 11, // 11
    +SteamConnectionError: 12, // 12
    +SteamResponseTimedOut: 13, // 13
    +SteamValidationStalled: 14, // 14
    +SteamOwnerLeftGuestUser: 15 // 15
  |};

  declare export var EClanRank: {|
    +None: 0, // 0
    +Owner: 1, // 1
    +Officer: 2, // 2
    +Member: 3, // 3
    +Moderator: 4 // 4
  |};

  declare export var EClanRelationship: {|
    +None: 0, // 0
    +Blocked: 1, // 1
    +Invited: 2, // 2
    +Member: 3, // 3
    +Kicked: 4, // 4
    +KickAcknowledged: 5 // 5
  |};

  declare export var EAuthSessionResponse: {|
    +OK: 0, // 0
    +UserNotConnectedToSteam: 1, // 1
    +NoLicenseOrExpired: 2, // 2
    +VACBanned: 3, // 3
    +LoggedInElseWhere: 4, // 4
    +VACCheckTimedOut: 5, // 5
    +AuthTicketCanceled: 6, // 6
    +AuthTicketInvalidAlreadyUsed: 7, // 7
    +AuthTicketInvalid: 8, // 8
    +PublisherIssuedBan: 9 // 9
  |};

  declare export var EChatRoomEnterResponse: {|
    +Success: 1, // 1
    +DoesntExist: 2, // 2
    +NotAllowed: 3, // 3
    +Full: 4, // 4
    +Error: 5, // 5
    +Banned: 6, // 6
    +Limited: 7, // 7
    +ClanDisabled: 8, // 8
    +CommunityBan: 9, // 9
    +MemberBlockedYou: 10, // 10
    +YouBlockedMember: 11, // 11
    +NoRankingDataLobby: 12, // 12
    +NoRankingDataUser: 13, // 13
    +RankOutOfRange: 14 // 14
  |};

  declare export var EChatRoomType: {|
    +Friend: 1, // 1
    +MUC: 2, // 2
    +Lobby: 3 // 3
  |};

  declare export var EChatInfoType: {|
    +StateChange: 1, // 1
    +InfoUpdate: 2, // 2
    +MemberLimitChange: 3 // 3
  |};

  declare export var EChatAction: {|
    +InviteChat: 1, // 1
    +Kick: 2, // 2
    +Ban: 3, // 3
    +UnBan: 4, // 4
    +StartVoiceSpeak: 5, // 5
    +EndVoiceSpeak: 6, // 6
    +LockChat: 7, // 7
    +UnlockChat: 8, // 8
    +CloseChat: 9, // 9
    +SetJoinable: 10, // 10
    +SetUnjoinable: 11, // 11
    +SetOwner: 12, // 12
    +SetInvisibleToFriends: 13, // 13
    +SetVisibleToFriends: 14, // 14
    +SetModerated: 15, // 15
    +SetUnmoderated: 16 // 16
  |};

  declare export var EChatActionResult: {|
    +Success: 1, // 1
    +Error: 2, // 2
    +NotPermitted: 3, // 3
    +NotAllowedOnClanMember: 4, // 4
    +NotAllowedOnBannedUser: 5, // 5
    +NotAllowedOnChatOwner: 6, // 6
    +NotAllowedOnSelf: 7, // 7
    +ChatDoesntExist: 8, // 8
    +ChatFull: 9, // 9
    +VoiceSlotsFull: 10 // 10
  |};

  declare export var EAppInfoSection: {|
    +Unknown: 0, // 0
    +All: 1, // 1
    +First: 2, // 2
    +Common: 2, // 2
    +Extended: 3, // 3
    +Config: 4, // 4
    +Stats: 5, // 5
    +Install: 6, // 6
    +Depots: 7, // 7
    +VAC: 8, // 8
    +VAC_UNUSED: 8, // 8
    +DRM: 9, // 9
    +DRM_UNUSED: 9, // 9
    +UFS: 10, // 10
    +OGG: 11, // 11
    +Items: 12, // 12
    +ItemsUNUSED: 12, // 12
    +Policies: 13, // 13
    +SysReqs: 14, // 14
    +Community: 15, // 15
    +Store: 16, // 16
    +Max: 17 // 17
  |};

  declare export var EContentDownloadSourceType: {|
    +Invalid: 0, // 0
    +CS: 1, // 1
    +CDN: 2, // 2
    +LCS: 3, // 3
    +ProxyCache: 4, // 4
    +LANPeer: 5, // 5
    +Max: 5 // 5
  |};

  declare export var EPlatformType: {|
    +Unknown: 0, // 0
    +Win32: 1, // 1
    +Win64: 2, // 2
    +Linux: 3, // 3
    +Linux64: 3, // 3
    +OSX: 4, // 4
    +PS3: 5, // 5
    +Linux32: 6, // 6
    +Max: 6 // 6
  |};

  declare export var EOSType: {|
    +Unknown: -1, // -1
    +IOSUnknown: -600, // -600
    +AndroidUnknown: -500, // -500
    +UMQ: -400, // -400
    +PS3: -300, // -300
    +MacOSUnknown: -102, // -102
    +MacOS104: -101, // -101
    +MacOS105: -100, // -100
    +MacOS1058: -99, // -99
    +MacOS106: -95, // -95
    +MacOS1063: -94, // -94
    +MacOS1064_slgu: -93, // -93
    +MacOS1067: -92, // -92
    +MacOS107: -90, // -90
    +MacOS108: -89, // -89
    +MacOS109: -88, // -88
    +MacOS1010: -87, // -87
    +MacOS1011: -86, // -86
    +MacOS1012: -85, // -85
    +MacOSMax: -1, // -1
    +LinuxUnknown: -203, // -203
    +Linux22: -202, // -202
    +Linux24: -201, // -201
    +Linux26: -200, // -200
    +Linux32: -199, // -199
    +Linux35: -198, // -198
    +Linux36: -197, // -197
    +Linux310: -196, // -196
    +LinuxMax: -103, // -103
    +WinUnknown: 0, // 0
    +Win311: 1, // 1
    +Win95: 2, // 2
    +Win98: 3, // 3
    +WinME: 4, // 4
    +WinNT: 5, // 5
    +Win200: 6, // 6
    +Win2000: 6, // 6
    +WinXP: 7, // 7
    +Win2003: 8, // 8
    +WinVista: 9, // 9
    +Win7: 10, // 10
    +Windows7: 10, // 10
    +Win2008: 11, // 11
    +Win2012: 12, // 12
    +Win8: 13, // 13
    +Windows8: 13, // 13
    +Win81: 14, // 14
    +Windows81: 14, // 14
    +Win2012R2: 15, // 15
    +Win10: 16, // 16
    +Windows10: 16, // 16
    +WinMAX: 15, // 15
    +Max: 26 // 26
  |};

  declare export var EServerType: {|
    +Invalid: -1, // -1
    +First: 0, // 0
    +Shell: 0, // 0
    +GM: 1, // 1
    +BUM: 2, // 2
    +BUMOBOSOLETE: 2, // 2
    +AM: 3, // 3
    +BS: 4, // 4
    +VS: 5, // 5
    +ATS: 6, // 6
    +CM: 7, // 7
    +FBS: 8, // 8
    +FG: 9, // 9
    +BoxMonitor: 9, // 9
    +SS: 10, // 10
    +DRMS: 11, // 11
    +HubOBSOLETE: 12, // 12
    +Console: 13, // 13
    +ASBOBSOLETE: 14, // 14
    +PICS: 14, // 14
    +Client: 15, // 15
    +BootstrapOBSOLETE: 16, // 16
    +DP: 17, // 17
    +WG: 18, // 18
    +SM: 19, // 19
    +SLC: 20, // 20
    +UFS: 21, // 21
    +Util: 23, // 23
    +DSS: 24, // 24
    +Community: 24, // 24
    +P2PRelayOBSOLETE: 25, // 25
    +AppInformation: 26, // 26
    +Spare: 27, // 27
    +FTS: 28, // 28
    +EPM: 29, // 29
    +EPMOBSOLETE: 29, // 29
    +PS: 30, // 30
    +IS: 31, // 31
    +CCS: 32, // 32
    +DFS: 33, // 33
    +LBS: 34, // 34
    +MDS: 35, // 35
    +CS: 36, // 36
    +GC: 37, // 37
    +NS: 38, // 38
    +OGS: 39, // 39
    +WebAPI: 40, // 40
    +UDS: 41, // 41
    +MMS: 42, // 42
    +GMS: 43, // 43
    +KGS: 44, // 44
    +UCM: 45, // 45
    +RM: 46, // 46
    +FS: 47, // 47
    +Econ: 48, // 48
    +Backpack: 49, // 49
    +UGS: 50, // 50
    +Store: 51, // 51
    +StoreFeature: 51, // 51
    +MoneyStats: 52, // 52
    +CRE: 53, // 53
    +UMQ: 54, // 54
    +Workshop: 55, // 55
    +BRP: 56, // 56
    +GCH: 57, // 57
    +MPAS: 58, // 58
    +Trade: 59, // 59
    +Secrets: 60, // 60
    +Logsink: 61, // 61
    +Market: 62, // 62
    +Quest: 63, // 63
    +WDS: 64, // 64
    +ACS: 65, // 65
    +PNP: 66, // 66
    +TaxForm: 67, // 67
    +ExternalMonitor: 68, // 68
    +Parental: 69, // 69
    +PartnerUpload: 70, // 70
    +Partner: 71, // 71
    +ES: 72, // 72
    +DepotWebContent: 73, // 73
    +ExternalConfig: 74, // 74
    +GameNotifications: 75, // 75
    +MarketRepl: 76, // 76
    +MarketSearch: 77, // 77
    +Localization: 78, // 78
    +Steam2Emulator: 79, // 79
    +PublicTest: 80, // 80
    +SolrMgr: 81, // 81
    +BroadcastRelay: 82, // 82
    +BroadcastDirectory: 83, // 83
    +VideoManager: 84, // 84
    +TradeOffer: 85, // 85
    +BroadcastChat: 86, // 86
    +Phone: 87, // 87
    +AccountScore: 88, // 88
    +Support: 89, // 89
    +LogRequest: 90, // 90
    +LogWorker: 91, // 91
    +EmailDelivery: 92, // 92
    +InventoryManagement: 93, // 93
    +Auth: 94, // 94
    +StoreCatalog: 95, // 95
    +HLTVRelay: 96, // 96
    +Max: 97 // 97
  |};

  declare export var EBillingType: {|
    +NoCost: 0, // 0
    +BillOnceOnly: 1, // 1
    +BillMonthly: 2, // 2
    +ProofOfPrepurchaseOnly: 3, // 3
    +GuestPass: 4, // 4
    +HardwarePromo: 5, // 5
    +Gift: 6, // 6
    +AutoGrant: 7, // 7
    +OEMTicket: 8, // 8
    +RecurringOption: 9, // 9
    +BillOnceOrCDKey: 10, // 10
    +Repurchaseable: 11, // 11
    +FreeOnDemand: 12, // 12
    +Rental: 13, // 13
    +CommercialLicense: 14, // 14
    +FreeCommercialLicense: 15, // 15
    +NumBillingTypes: 16 // 16
  |};

  declare export var EActivationCodeClass: {|
    +WonCDKey: 0, // 0
    +ValveCDKey: 1, // 1
    +Doom3CDKey: 2, // 2
    +DBLookup: 3, // 3
    +Steam2010Key: 4, // 4
    +Max: 5, // 5
    +Test: 2147483647, // 2147483647
    +Invalid: 4294967295 // 4294967295
  |};

  declare export var EChatMemberStateChange: {|
    +Entered: 1, // 1
    +Left: 2, // 2
    +Disconnected: 4, // 4
    +Kicked: 8, // 8
    +Banned: 16, // 16
    +VoiceSpeaking: 4096, // 4096
    +VoiceDoneSpeaking: 8192 // 8192
  |};

  declare export var ERegionCode: {|
    +USEast: 0, // 0
    +USWest: 1, // 1
    +SouthAmerica: 2, // 2
    +Europe: 3, // 3
    +Asia: 4, // 4
    +Australia: 5, // 5
    +MiddleEast: 6, // 6
    +Africa: 7, // 7
    +World: 255 // 255
  |};

  declare export var ECurrencyCode: {|
    +Invalid: 0, // 0
    +USD: 1, // 1
    +GBP: 2, // 2
    +EUR: 3, // 3
    +CHF: 4, // 4
    +RUB: 5, // 5
    +PLN: 6, // 6
    +BRL: 7, // 7
    +JPY: 8, // 8
    +NOK: 9, // 9
    +IDR: 10, // 10
    +MYR: 11, // 11
    +PHP: 12, // 12
    +SGD: 13, // 13
    +THB: 14, // 14
    +VND: 15, // 15
    +KRW: 16, // 16
    +TRY: 17, // 17
    +UAH: 18, // 18
    +MXN: 19, // 19
    +CAD: 20, // 20
    +AUD: 21, // 21
    +NZD: 22, // 22
    +CNY: 23, // 23
    +INR: 24, // 24
    +CLP: 25, // 25
    +PEN: 26, // 26
    +COP: 27, // 27
    +ZAR: 28, // 28
    +HKD: 29, // 29
    +TWD: 30, // 30
    +SAR: 31, // 31
    +AED: 32, // 32
    +ARS: 34, // 34
    +ILS: 35, // 35
    +BYN: 36, // 36
    +KZT: 37, // 37
    +KWD: 38, // 38
    +QAR: 39, // 39
    +CRC: 40, // 40
    +UYU: 41, // 41
    +Max: 42 // 42
  |};

  declare export var EDepotFileFlag: {|
    +UserConfig: 1, // 1
    +VersionedUserConfig: 2, // 2
    +Encrypted: 4, // 4
    +ReadOnly: 8, // 8
    +Hidden: 16, // 16
    +Executable: 32, // 32
    +Directory: 64, // 64
    +CustomExecutable: 128, // 128
    +InstallScript: 256, // 256
    +Symlink: 512 // 512
  |};

  declare export var EWorkshopEnumerationType: {|
    +RankedByVote: 0, // 0
    +Recent: 1, // 1
    +Trending: 2, // 2
    +FavoriteOfFriends: 3, // 3
    +VotedByFriends: 4, // 4
    +ContentByFriends: 5, // 5
    +RecentFromFollowedUsers: 6 // 6
  |};

  declare export var EPublishedFileVisibility: {|
    +Public: 0, // 0
    +FriendsOnly: 1, // 1
    +Private: 2 // 2
  |};

  declare export var EWorkshopFileType: {|
    +First: 0, // 0
    +Community: 0, // 0
    +Microtransaction: 1, // 1
    +Collection: 2, // 2
    +Art: 3, // 3
    +Video: 4, // 4
    +Screenshot: 5, // 5
    +Game: 6, // 6
    +Software: 7, // 7
    +Concept: 8, // 8
    +WebGuide: 9, // 9
    +IntegratedGuide: 10, // 10
    +Merch: 11, // 11
    +ControllerBinding: 12, // 12
    +SteamworksAccessInvite: 13, // 13
    +SteamVideo: 14, // 14
    +GameManagedItem: 15, // 15
    +Max: 16 // 16
  |};

  declare export var EWorkshopFileAction: {|
    +Played: 0, // 0
    +Completed: 1 // 1
  |};

  declare export var EEconTradeResponse: {|
    +Accepted: 0, // 0
    +Declined: 1, // 1
    +TradeBannedInitiator: 2, // 2
    +TradeBannedTarget: 3, // 3
    +TargetAlreadyTrading: 4, // 4
    +Disabled: 5, // 5
    +NotLoggedIn: 6, // 6
    +Cancel: 7, // 7
    +TooSoon: 8, // 8
    +TooSoonPenalty: 9, // 9
    +ConnectionFailed: 10, // 10
    +AlreadyTrading: 11, // 11
    +AlreadyHasTradeRequest: 12, // 12
    +NoResponse: 13, // 13
    +CyberCafeInitiator: 14, // 14
    +CyberCafeTarget: 15, // 15
    +SchoolLabInitiator: 16, // 16
    +SchoolLabTarget: 16, // 16
    +InitiatorBlockedTarget: 18, // 18
    +InitiatorNeedsVerifiedEmail: 20, // 20
    +InitiatorNeedsSteamGuard: 21, // 21
    +TargetAccountCannotTrade: 22, // 22
    +InitiatorSteamGuardDuration: 23, // 23
    +InitiatorPasswordResetProbation: 24, // 24
    +InitiatorNewDeviceCooldown: 25, // 25
    +InitiatorSentInvalidCookie: 26, // 26
    +NeedsEmailConfirmation: 27, // 27
    +InitiatorRecentEmailChange: 28, // 28
    +NeedsMobileConfirmation: 29, // 29
    +TradingHoldForClearedTradeOffersInitiator: 30, // 30
    +WouldExceedMaxAssetCount: 31, // 31
    +OKToDeliver: 50 // 50
  |};

  declare export var EMarketingMessageFlags: {|
    +None: 0, // 0
    +HighPriority: 1, // 1
    +PlatformWindows: 2, // 2
    +PlatformMac: 4, // 4
    +PlatformLinux: 8, // 8
    +PlatformRestrictions: "NO PRINT IMPLEMENTED: BinaryExpression" // "NO PRINT IMPLEMENTED: BinaryExpression"
  |};

  declare export var ENewsUpdateType: {|
    +AppNews: 0, // 0
    +SteamAds: 1, // 1
    +SteamNews: 2, // 2
    +CDDBUpdate: 3, // 3
    +ClientUpdate: 4 // 4
  |};

  declare export var ESystemIMType: {|
    +RawText: 0, // 0
    +InvalidCard: 1, // 1
    +RecurringPurchaseFailed: 2, // 2
    +CardWillExpire: 3, // 3
    +SubscriptionExpired: 4, // 4
    +GuestPassReceived: 5, // 5
    +GuestPassGranted: 6, // 6
    +GiftRevoked: 7, // 7
    +SupportMessage: 8, // 8
    +SupportMessageClearAlert: 9, // 9
    +Max: 10 // 10
  |};

  declare export var EChatFlags: {|
    +Locked: 1, // 1
    +InvisibleToFriends: 2, // 2
    +Moderated: 4, // 4
    +Unjoinable: 8 // 8
  |};

  declare export var ERemoteStoragePlatform: {|
    +None: 0, // 0
    +Windows: 1, // 1
    +OSX: 2, // 2
    +PS3: 4, // 4
    +Linux: 8, // 8
    +Reserved1: 8, // 8
    +Reserved2: 16, // 16
    +All: -1 // -1
  |};

  declare export var EDRMBlobDownloadType: {|
    +Error: 0, // 0
    +File: 1, // 1
    +Parts: 2, // 2
    +Compressed: 4, // 4
    +AllMask: 7, // 7
    +IsJob: 8, // 8
    +HighPriority: 16, // 16
    +AddTimestamp: 32, // 32
    +LowPriority: 64 // 64
  |};

  declare export var EDRMBlobDownloadErrorDetail: {|
    +None: 0, // 0
    +DownloadFailed: 1, // 1
    +TargetLocked: 2, // 2
    +OpenZip: 3, // 3
    +ReadZipDirectory: 4, // 4
    +UnexpectedZipEntry: 5, // 5
    +UnzipFullFile: 6, // 6
    +UnknownBlobType: 7, // 7
    +UnzipStrips: 8, // 8
    +UnzipMergeGuid: 9, // 9
    +UnzipSignature: 10, // 10
    +ApplyStrips: 11, // 11
    +ApplyMergeGuid: 12, // 12
    +ApplySignature: 13, // 13
    +AppIdMismatch: 14, // 14
    +AppIdUnexpected: 15, // 15
    +AppliedSignatureCorrupt: 16, // 16
    +ApplyValveSignatureHeader: 17, // 17
    +UnzipValveSignatureHeader: 18, // 18
    +PathManipulationError: 19, // 19
    +TargetLocked_Base: 65536, // 65536
    +TargetLocked_Max: 131071, // 131071
    +NextBase: 131072 // 131072
  |};

  declare export var EClientStat: {|
    +P2PConnectionsUDP: 0, // 0
    +P2PConnectionsRelay: 1, // 1
    +P2PGameConnections: 2, // 2
    +P2PVoiceConnections: 3, // 3
    +BytesDownloaded: 4, // 4
    +Max: 5 // 5
  |};

  declare export var EClientStatAggregateMethod: {|
    +LatestOnly: 0, // 0
    +Sum: 1, // 1
    +Event: 2, // 2
    +Scalar: 3 // 3
  |};

  declare export var ELeaderboardDataRequest: {|
    +Global: 0, // 0
    +GlobalAroundUser: 1, // 1
    +Friends: 2, // 2
    +Users: 3 // 3
  |};

  declare export var ELeaderboardSortMethod: {|
    +None: 0, // 0
    +Ascending: 1, // 1
    +Descending: 2 // 2
  |};

  declare export var ELeaderboardDisplayType: {|
    +None: 0, // 0
    +Numeric: 1, // 1
    +TimeSeconds: 2, // 2
    +TimeMilliSeconds: 3 // 3
  |};

  declare export var ELeaderboardUploadScoreMethod: {|
    +None: 0, // 0
    +KeepBest: 1, // 1
    +ForceUpdate: 2 // 2
  |};

  declare export var EUCMFilePrivacyState: {|
    +Invalid: -1, // -1
    +Private: 2, // 2
    +FriendsOnly: 4, // 4
    +Public: 8, // 8
    +All: "NO PRINT IMPLEMENTED: BinaryExpression" // "NO PRINT IMPLEMENTED: BinaryExpression"
  |};

  declare export var EResult: {|
    +Invalid: 0, // 0
    +OK: 1, // 1
    +Fail: 2, // 2
    +NoConnection: 3, // 3
    +InvalidPassword: 5, // 5
    +LoggedInElsewhere: 6, // 6
    +InvalidProtocolVer: 7, // 7
    +InvalidParam: 8, // 8
    +FileNotFound: 9, // 9
    +Busy: 10, // 10
    +InvalidState: 11, // 11
    +InvalidName: 12, // 12
    +InvalidEmail: 13, // 13
    +DuplicateName: 14, // 14
    +AccessDenied: 15, // 15
    +Timeout: 16, // 16
    +Banned: 17, // 17
    +AccountNotFound: 18, // 18
    +InvalidSteamID: 19, // 19
    +ServiceUnavailable: 20, // 20
    +NotLoggedOn: 21, // 21
    +Pending: 22, // 22
    +EncryptionFailure: 23, // 23
    +InsufficientPrivilege: 24, // 24
    +LimitExceeded: 25, // 25
    +Revoked: 26, // 26
    +Expired: 27, // 27
    +AlreadyRedeemed: 28, // 28
    +DuplicateRequest: 29, // 29
    +AlreadyOwned: 30, // 30
    +IPNotFound: 31, // 31
    +PersistFailed: 32, // 32
    +LockingFailed: 33, // 33
    +LogonSessionReplaced: 34, // 34
    +ConnectFailed: 35, // 35
    +HandshakeFailed: 36, // 36
    +IOFailure: 37, // 37
    +RemoteDisconnect: 38, // 38
    +ShoppingCartNotFound: 39, // 39
    +Blocked: 40, // 40
    +Ignored: 41, // 41
    +NoMatch: 42, // 42
    +AccountDisabled: 43, // 43
    +ServiceReadOnly: 44, // 44
    +AccountNotFeatured: 45, // 45
    +AdministratorOK: 46, // 46
    +ContentVersion: 47, // 47
    +TryAnotherCM: 48, // 48
    +PasswordRequiredToKickSession: 49, // 49
    +AlreadyLoggedInElsewhere: 50, // 50
    +Suspended: 51, // 51
    +Cancelled: 52, // 52
    +DataCorruption: 53, // 53
    +DiskFull: 54, // 54
    +RemoteCallFailed: 55, // 55
    +PasswordNotSet: 56, // 56
    +PasswordUnset: 56, // 56
    +ExternalAccountUnlinked: 57, // 57
    +PSNTicketInvalid: 58, // 58
    +ExternalAccountAlreadyLinked: 59, // 59
    +RemoteFileConflict: 60, // 60
    +IllegalPassword: 61, // 61
    +SameAsPreviousValue: 62, // 62
    +AccountLogonDenied: 63, // 63
    +CannotUseOldPassword: 64, // 64
    +InvalidLoginAuthCode: 65, // 65
    +AccountLogonDeniedNoMailSent: 66, // 66
    +AccountLogonDeniedNoMail: 66, // 66
    +HardwareNotCapableOfIPT: 67, // 67
    +IPTInitError: 68, // 68
    +ParentalControlRestricted: 69, // 69
    +FacebookQueryError: 70, // 70
    +ExpiredLoginAuthCode: 71, // 71
    +IPLoginRestrictionFailed: 72, // 72
    +AccountLocked: 73, // 73
    +AccountLockedDown: 73, // 73
    +AccountLogonDeniedVerifiedEmailRequired: 74, // 74
    +NoMatchingURL: 75, // 75
    +BadResponse: 76, // 76
    +RequirePasswordReEntry: 77, // 77
    +ValueOutOfRange: 78, // 78
    +UnexpectedError: 79, // 79
    +Disabled: 80, // 80
    +InvalidCEGSubmission: 81, // 81
    +RestrictedDevice: 82, // 82
    +RegionLocked: 83, // 83
    +RateLimitExceeded: 84, // 84
    +AccountLogonDeniedNeedTwoFactorCode: 85, // 85
    +AccountLoginDeniedNeedTwoFactor: 85, // 85
    +ItemOrEntryHasBeenDeleted: 86, // 86
    +ItemDeleted: 86, // 86
    +AccountLoginDeniedThrottle: 87, // 87
    +TwoFactorCodeMismatch: 88, // 88
    +TwoFactorActivationCodeMismatch: 89, // 89
    +AccountAssociatedToMultiplePlayers: 90, // 90
    +AccountAssociatedToMultiplePartners: 90, // 90
    +NotModified: 91, // 91
    +NoMobileDeviceAvailable: 92, // 92
    +NoMobileDevice: 92, // 92
    +TimeIsOutOfSync: 93, // 93
    +TimeNotSynced: 93, // 93
    +SMSCodeFailed: 94, // 94
    +TooManyAccountsAccessThisResource: 95, // 95
    +AccountLimitExceeded: 95, // 95
    +AccountActivityLimitExceeded: 96, // 96
    +PhoneActivityLimitExceeded: 97, // 97
    +RefundToWallet: 98, // 98
    +EmailSendFailure: 99, // 99
    +NotSettled: 100, // 100
    +NeedCaptcha: 101, // 101
    +GSLTDenied: 102, // 102
    +GSOwnerDenied: 103, // 103
    +InvalidItemType: 104, // 104
    +IPBanned: 105, // 105
    +GSLTExpired: 106, // 106
    +InsufficientFunds: 107, // 107
    +TooManyPending: 108, // 108
    +NoSiteLicensesFound: 109, // 109
    +WGNetworkSendExceeded: 110 // 110
  |};
}
