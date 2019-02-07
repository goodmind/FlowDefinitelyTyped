declare module "activex-adodb" {
  declare class ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM {
    constructor(...args: empty): mixed;
    static +adPriorityAboveNormal: Class<ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityAboveNormal> &
      ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityAboveNormal &
      4; // 4
    static +adPriorityBelowNormal: Class<ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityBelowNormal> &
      ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityBelowNormal &
      2; // 2
    static +adPriorityHighest: Class<ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityHighest> &
      ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityHighest &
      5; // 5
    static +adPriorityLowest: Class<ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityLowest> &
      ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityLowest &
      1; // 1
    static +adPriorityNormal: Class<ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityNormal> &
      ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityNormal &
      3; // 3
  }

  declare class ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityAboveNormal
    mixins ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM {}
  declare class ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityBelowNormal
    mixins ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM {}
  declare class ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityHighest
    mixins ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM {}
  declare class ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityLowest
    mixins ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM {}
  declare class ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM__adPriorityNormal
    mixins ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM {}

  declare class ADODB$ADCPROP_AUTORECALC_ENUM {
    constructor(...args: empty): mixed;
    static +adRecalcAlways: Class<ADODB$ADCPROP_AUTORECALC_ENUM__adRecalcAlways> &
      ADODB$ADCPROP_AUTORECALC_ENUM__adRecalcAlways &
      1; // 1
    static +adRecalcUpFront: Class<ADODB$ADCPROP_AUTORECALC_ENUM__adRecalcUpFront> &
      ADODB$ADCPROP_AUTORECALC_ENUM__adRecalcUpFront &
      0; // 0
  }

  declare class ADODB$ADCPROP_AUTORECALC_ENUM__adRecalcAlways
    mixins ADODB$ADCPROP_AUTORECALC_ENUM {}
  declare class ADODB$ADCPROP_AUTORECALC_ENUM__adRecalcUpFront
    mixins ADODB$ADCPROP_AUTORECALC_ENUM {}

  declare class ADODB$ADCPROP_UPDATECRITERIA_ENUM {
    constructor(...args: empty): mixed;
    static +adCriteriaAllCols: Class<ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaAllCols> &
      ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaAllCols &
      1; // 1
    static +adCriteriaKey: Class<ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaKey> &
      ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaKey &
      0; // 0
    static +adCriteriaTimeStamp: Class<ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaTimeStamp> &
      ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaTimeStamp &
      3; // 3
    static +adCriteriaUpdCols: Class<ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaUpdCols> &
      ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaUpdCols &
      2; // 2
  }

  declare class ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaAllCols
    mixins ADODB$ADCPROP_UPDATECRITERIA_ENUM {}
  declare class ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaKey
    mixins ADODB$ADCPROP_UPDATECRITERIA_ENUM {}
  declare class ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaTimeStamp
    mixins ADODB$ADCPROP_UPDATECRITERIA_ENUM {}
  declare class ADODB$ADCPROP_UPDATECRITERIA_ENUM__adCriteriaUpdCols
    mixins ADODB$ADCPROP_UPDATECRITERIA_ENUM {}

  declare class ADODB$ADCPROP_UPDATERESYNC_ENUM {
    constructor(...args: empty): mixed;
    static +adResyncAll: Class<ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncAll> &
      ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncAll &
      15; // 15
    static +adResyncAutoIncrement: Class<ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncAutoIncrement> &
      ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncAutoIncrement &
      1; // 1
    static +adResyncConflicts: Class<ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncConflicts> &
      ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncConflicts &
      2; // 2
    static +adResyncInserts: Class<ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncInserts> &
      ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncInserts &
      8; // 8
    static +adResyncNone: Class<ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncNone> &
      ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncNone &
      0; // 0
    static +adResyncUpdates: Class<ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncUpdates> &
      ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncUpdates &
      4; // 4
  }

  declare class ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncAll
    mixins ADODB$ADCPROP_UPDATERESYNC_ENUM {}
  declare class ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncAutoIncrement
    mixins ADODB$ADCPROP_UPDATERESYNC_ENUM {}
  declare class ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncConflicts
    mixins ADODB$ADCPROP_UPDATERESYNC_ENUM {}
  declare class ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncInserts
    mixins ADODB$ADCPROP_UPDATERESYNC_ENUM {}
  declare class ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncNone
    mixins ADODB$ADCPROP_UPDATERESYNC_ENUM {}
  declare class ADODB$ADCPROP_UPDATERESYNC_ENUM__adResyncUpdates
    mixins ADODB$ADCPROP_UPDATERESYNC_ENUM {}

  declare class ADODB$AffectEnum {
    constructor(...args: empty): mixed;
    static +adAffectAll: Class<ADODB$AffectEnum__adAffectAll> &
      ADODB$AffectEnum__adAffectAll &
      3; // 3
    static +adAffectAllChapters: Class<ADODB$AffectEnum__adAffectAllChapters> &
      ADODB$AffectEnum__adAffectAllChapters &
      4; // 4
    static +adAffectCurrent: Class<ADODB$AffectEnum__adAffectCurrent> &
      ADODB$AffectEnum__adAffectCurrent &
      1; // 1
    static +adAffectGroup: Class<ADODB$AffectEnum__adAffectGroup> &
      ADODB$AffectEnum__adAffectGroup &
      2; // 2
  }

  declare class ADODB$AffectEnum__adAffectAll mixins ADODB$AffectEnum {}
  declare class ADODB$AffectEnum__adAffectAllChapters mixins ADODB$AffectEnum {}
  declare class ADODB$AffectEnum__adAffectCurrent mixins ADODB$AffectEnum {}
  declare class ADODB$AffectEnum__adAffectGroup mixins ADODB$AffectEnum {}

  declare class ADODB$BookmarkEnum {
    constructor(...args: empty): mixed;
    static +adBookmarkCurrent: Class<ADODB$BookmarkEnum__adBookmarkCurrent> &
      ADODB$BookmarkEnum__adBookmarkCurrent &
      0; // 0
    static +adBookmarkFirst: Class<ADODB$BookmarkEnum__adBookmarkFirst> &
      ADODB$BookmarkEnum__adBookmarkFirst &
      1; // 1
    static +adBookmarkLast: Class<ADODB$BookmarkEnum__adBookmarkLast> &
      ADODB$BookmarkEnum__adBookmarkLast &
      2; // 2
  }

  declare class ADODB$BookmarkEnum__adBookmarkCurrent
    mixins ADODB$BookmarkEnum {}
  declare class ADODB$BookmarkEnum__adBookmarkFirst mixins ADODB$BookmarkEnum {}
  declare class ADODB$BookmarkEnum__adBookmarkLast mixins ADODB$BookmarkEnum {}

  declare class ADODB$CommandTypeEnum {
    constructor(...args: empty): mixed;
    static +adCmdFile: Class<ADODB$CommandTypeEnum__adCmdFile> &
      ADODB$CommandTypeEnum__adCmdFile &
      256; // 256
    static +adCmdStoredProc: Class<ADODB$CommandTypeEnum__adCmdStoredProc> &
      ADODB$CommandTypeEnum__adCmdStoredProc &
      4; // 4
    static +adCmdTable: Class<ADODB$CommandTypeEnum__adCmdTable> &
      ADODB$CommandTypeEnum__adCmdTable &
      2; // 2
    static +adCmdTableDirect: Class<ADODB$CommandTypeEnum__adCmdTableDirect> &
      ADODB$CommandTypeEnum__adCmdTableDirect &
      512; // 512
    static +adCmdText: Class<ADODB$CommandTypeEnum__adCmdText> &
      ADODB$CommandTypeEnum__adCmdText &
      1; // 1
    static +adCmdUnknown: Class<ADODB$CommandTypeEnum__adCmdUnknown> &
      ADODB$CommandTypeEnum__adCmdUnknown &
      8; // 8
    static +adCmdUnspecified: Class<ADODB$CommandTypeEnum__adCmdUnspecified> &
      ADODB$CommandTypeEnum__adCmdUnspecified &
      -1; // -1
  }

  declare class ADODB$CommandTypeEnum__adCmdFile mixins ADODB$CommandTypeEnum {}
  declare class ADODB$CommandTypeEnum__adCmdStoredProc
    mixins ADODB$CommandTypeEnum {}
  declare class ADODB$CommandTypeEnum__adCmdTable
    mixins ADODB$CommandTypeEnum {}
  declare class ADODB$CommandTypeEnum__adCmdTableDirect
    mixins ADODB$CommandTypeEnum {}
  declare class ADODB$CommandTypeEnum__adCmdText mixins ADODB$CommandTypeEnum {}
  declare class ADODB$CommandTypeEnum__adCmdUnknown
    mixins ADODB$CommandTypeEnum {}
  declare class ADODB$CommandTypeEnum__adCmdUnspecified
    mixins ADODB$CommandTypeEnum {}

  declare class ADODB$CompareEnum {
    constructor(...args: empty): mixed;
    static +adCompareEqual: Class<ADODB$CompareEnum__adCompareEqual> &
      ADODB$CompareEnum__adCompareEqual &
      1; // 1
    static +adCompareGreaterThan: Class<ADODB$CompareEnum__adCompareGreaterThan> &
      ADODB$CompareEnum__adCompareGreaterThan &
      2; // 2
    static +adCompareLessThan: Class<ADODB$CompareEnum__adCompareLessThan> &
      ADODB$CompareEnum__adCompareLessThan &
      0; // 0
    static +adCompareNotComparable: Class<ADODB$CompareEnum__adCompareNotComparable> &
      ADODB$CompareEnum__adCompareNotComparable &
      4; // 4
    static +adCompareNotEqual: Class<ADODB$CompareEnum__adCompareNotEqual> &
      ADODB$CompareEnum__adCompareNotEqual &
      3; // 3
  }

  declare class ADODB$CompareEnum__adCompareEqual mixins ADODB$CompareEnum {}
  declare class ADODB$CompareEnum__adCompareGreaterThan
    mixins ADODB$CompareEnum {}
  declare class ADODB$CompareEnum__adCompareLessThan mixins ADODB$CompareEnum {}
  declare class ADODB$CompareEnum__adCompareNotComparable
    mixins ADODB$CompareEnum {}
  declare class ADODB$CompareEnum__adCompareNotEqual mixins ADODB$CompareEnum {}

  declare class ADODB$ConnectModeEnum {
    constructor(...args: empty): mixed;
    static +adModeRead: Class<ADODB$ConnectModeEnum__adModeRead> &
      ADODB$ConnectModeEnum__adModeRead &
      1; // 1
    static +adModeReadWrite: Class<ADODB$ConnectModeEnum__adModeReadWrite> &
      ADODB$ConnectModeEnum__adModeReadWrite &
      3; // 3
    static +adModeRecursive: Class<ADODB$ConnectModeEnum__adModeRecursive> &
      ADODB$ConnectModeEnum__adModeRecursive &
      4194304; // 4194304
    static +adModeShareDenyNone: Class<ADODB$ConnectModeEnum__adModeShareDenyNone> &
      ADODB$ConnectModeEnum__adModeShareDenyNone &
      16; // 16
    static +adModeShareDenyRead: Class<ADODB$ConnectModeEnum__adModeShareDenyRead> &
      ADODB$ConnectModeEnum__adModeShareDenyRead &
      4; // 4
    static +adModeShareDenyWrite: Class<ADODB$ConnectModeEnum__adModeShareDenyWrite> &
      ADODB$ConnectModeEnum__adModeShareDenyWrite &
      8; // 8
    static +adModeShareExclusive: Class<ADODB$ConnectModeEnum__adModeShareExclusive> &
      ADODB$ConnectModeEnum__adModeShareExclusive &
      12; // 12
    static +adModeUnknown: Class<ADODB$ConnectModeEnum__adModeUnknown> &
      ADODB$ConnectModeEnum__adModeUnknown &
      0; // 0
    static +adModeWrite: Class<ADODB$ConnectModeEnum__adModeWrite> &
      ADODB$ConnectModeEnum__adModeWrite &
      2; // 2
  }

  declare class ADODB$ConnectModeEnum__adModeRead
    mixins ADODB$ConnectModeEnum {}
  declare class ADODB$ConnectModeEnum__adModeReadWrite
    mixins ADODB$ConnectModeEnum {}
  declare class ADODB$ConnectModeEnum__adModeRecursive
    mixins ADODB$ConnectModeEnum {}
  declare class ADODB$ConnectModeEnum__adModeShareDenyNone
    mixins ADODB$ConnectModeEnum {}
  declare class ADODB$ConnectModeEnum__adModeShareDenyRead
    mixins ADODB$ConnectModeEnum {}
  declare class ADODB$ConnectModeEnum__adModeShareDenyWrite
    mixins ADODB$ConnectModeEnum {}
  declare class ADODB$ConnectModeEnum__adModeShareExclusive
    mixins ADODB$ConnectModeEnum {}
  declare class ADODB$ConnectModeEnum__adModeUnknown
    mixins ADODB$ConnectModeEnum {}
  declare class ADODB$ConnectModeEnum__adModeWrite
    mixins ADODB$ConnectModeEnum {}

  declare class ADODB$ConnectOptionEnum {
    constructor(...args: empty): mixed;
    static +adAsyncConnect: Class<ADODB$ConnectOptionEnum__adAsyncConnect> &
      ADODB$ConnectOptionEnum__adAsyncConnect &
      16; // 16
    static +adConnectUnspecified: Class<ADODB$ConnectOptionEnum__adConnectUnspecified> &
      ADODB$ConnectOptionEnum__adConnectUnspecified &
      -1; // -1
  }

  declare class ADODB$ConnectOptionEnum__adAsyncConnect
    mixins ADODB$ConnectOptionEnum {}
  declare class ADODB$ConnectOptionEnum__adConnectUnspecified
    mixins ADODB$ConnectOptionEnum {}

  declare class ADODB$ConnectPromptEnum {
    constructor(...args: empty): mixed;
    static +adPromptAlways: Class<ADODB$ConnectPromptEnum__adPromptAlways> &
      ADODB$ConnectPromptEnum__adPromptAlways &
      1; // 1
    static +adPromptComplete: Class<ADODB$ConnectPromptEnum__adPromptComplete> &
      ADODB$ConnectPromptEnum__adPromptComplete &
      2; // 2
    static +adPromptCompleteRequired: Class<ADODB$ConnectPromptEnum__adPromptCompleteRequired> &
      ADODB$ConnectPromptEnum__adPromptCompleteRequired &
      3; // 3
    static +adPromptNever: Class<ADODB$ConnectPromptEnum__adPromptNever> &
      ADODB$ConnectPromptEnum__adPromptNever &
      4; // 4
  }

  declare class ADODB$ConnectPromptEnum__adPromptAlways
    mixins ADODB$ConnectPromptEnum {}
  declare class ADODB$ConnectPromptEnum__adPromptComplete
    mixins ADODB$ConnectPromptEnum {}
  declare class ADODB$ConnectPromptEnum__adPromptCompleteRequired
    mixins ADODB$ConnectPromptEnum {}
  declare class ADODB$ConnectPromptEnum__adPromptNever
    mixins ADODB$ConnectPromptEnum {}

  declare class ADODB$CopyRecordOptionsEnum {
    constructor(...args: empty): mixed;
    static +adCopyAllowEmulation: Class<ADODB$CopyRecordOptionsEnum__adCopyAllowEmulation> &
      ADODB$CopyRecordOptionsEnum__adCopyAllowEmulation &
      4; // 4
    static +adCopyNonRecursive: Class<ADODB$CopyRecordOptionsEnum__adCopyNonRecursive> &
      ADODB$CopyRecordOptionsEnum__adCopyNonRecursive &
      2; // 2
    static +adCopyOverWrite: Class<ADODB$CopyRecordOptionsEnum__adCopyOverWrite> &
      ADODB$CopyRecordOptionsEnum__adCopyOverWrite &
      1; // 1
    static +adCopyUnspecified: Class<ADODB$CopyRecordOptionsEnum__adCopyUnspecified> &
      ADODB$CopyRecordOptionsEnum__adCopyUnspecified &
      -1; // -1
  }

  declare class ADODB$CopyRecordOptionsEnum__adCopyAllowEmulation
    mixins ADODB$CopyRecordOptionsEnum {}
  declare class ADODB$CopyRecordOptionsEnum__adCopyNonRecursive
    mixins ADODB$CopyRecordOptionsEnum {}
  declare class ADODB$CopyRecordOptionsEnum__adCopyOverWrite
    mixins ADODB$CopyRecordOptionsEnum {}
  declare class ADODB$CopyRecordOptionsEnum__adCopyUnspecified
    mixins ADODB$CopyRecordOptionsEnum {}

  declare class ADODB$CursorLocationEnum {
    constructor(...args: empty): mixed;
    static +adUseClient: Class<ADODB$CursorLocationEnum__adUseClient> &
      ADODB$CursorLocationEnum__adUseClient &
      3; // 3
    static +adUseClientBatch: Class<ADODB$CursorLocationEnum__adUseClientBatch> &
      ADODB$CursorLocationEnum__adUseClientBatch &
      3; // 3
    static +adUseNone: Class<ADODB$CursorLocationEnum__adUseNone> &
      ADODB$CursorLocationEnum__adUseNone &
      1; // 1
    static +adUseServer: Class<ADODB$CursorLocationEnum__adUseServer> &
      ADODB$CursorLocationEnum__adUseServer &
      2; // 2
  }

  declare class ADODB$CursorLocationEnum__adUseClient
    mixins ADODB$CursorLocationEnum {}
  declare class ADODB$CursorLocationEnum__adUseClientBatch
    mixins ADODB$CursorLocationEnum {}
  declare class ADODB$CursorLocationEnum__adUseNone
    mixins ADODB$CursorLocationEnum {}
  declare class ADODB$CursorLocationEnum__adUseServer
    mixins ADODB$CursorLocationEnum {}

  declare class ADODB$CursorOptionEnum {
    constructor(...args: empty): mixed;
    static +adAddNew: Class<ADODB$CursorOptionEnum__adAddNew> &
      ADODB$CursorOptionEnum__adAddNew &
      16778240; // 16778240
    static +adApproxPosition: Class<ADODB$CursorOptionEnum__adApproxPosition> &
      ADODB$CursorOptionEnum__adApproxPosition &
      16384; // 16384
    static +adBookmark: Class<ADODB$CursorOptionEnum__adBookmark> &
      ADODB$CursorOptionEnum__adBookmark &
      8192; // 8192
    static +adDelete: Class<ADODB$CursorOptionEnum__adDelete> &
      ADODB$CursorOptionEnum__adDelete &
      16779264; // 16779264
    static +adFind: Class<ADODB$CursorOptionEnum__adFind> &
      ADODB$CursorOptionEnum__adFind &
      524288; // 524288
    static +adHoldRecords: Class<ADODB$CursorOptionEnum__adHoldRecords> &
      ADODB$CursorOptionEnum__adHoldRecords &
      256; // 256
    static +adIndex: Class<ADODB$CursorOptionEnum__adIndex> &
      ADODB$CursorOptionEnum__adIndex &
      8388608; // 8388608
    static +adMovePrevious: Class<ADODB$CursorOptionEnum__adMovePrevious> &
      ADODB$CursorOptionEnum__adMovePrevious &
      512; // 512
    static +adNotify: Class<ADODB$CursorOptionEnum__adNotify> &
      ADODB$CursorOptionEnum__adNotify &
      262144; // 262144
    static +adResync: Class<ADODB$CursorOptionEnum__adResync> &
      ADODB$CursorOptionEnum__adResync &
      131072; // 131072
    static +adSeek: Class<ADODB$CursorOptionEnum__adSeek> &
      ADODB$CursorOptionEnum__adSeek &
      4194304; // 4194304
    static +adUpdate: Class<ADODB$CursorOptionEnum__adUpdate> &
      ADODB$CursorOptionEnum__adUpdate &
      16809984; // 16809984
    static +adUpdateBatch: Class<ADODB$CursorOptionEnum__adUpdateBatch> &
      ADODB$CursorOptionEnum__adUpdateBatch &
      65536; // 65536
  }

  declare class ADODB$CursorOptionEnum__adAddNew
    mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adApproxPosition
    mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adBookmark
    mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adDelete
    mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adFind mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adHoldRecords
    mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adIndex mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adMovePrevious
    mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adNotify
    mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adResync
    mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adSeek mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adUpdate
    mixins ADODB$CursorOptionEnum {}
  declare class ADODB$CursorOptionEnum__adUpdateBatch
    mixins ADODB$CursorOptionEnum {}

  declare class ADODB$CursorTypeEnum {
    constructor(...args: empty): mixed;
    static +adOpenDynamic: Class<ADODB$CursorTypeEnum__adOpenDynamic> &
      ADODB$CursorTypeEnum__adOpenDynamic &
      2; // 2
    static +adOpenForwardOnly: Class<ADODB$CursorTypeEnum__adOpenForwardOnly> &
      ADODB$CursorTypeEnum__adOpenForwardOnly &
      0; // 0
    static +adOpenKeyset: Class<ADODB$CursorTypeEnum__adOpenKeyset> &
      ADODB$CursorTypeEnum__adOpenKeyset &
      1; // 1
    static +adOpenStatic: Class<ADODB$CursorTypeEnum__adOpenStatic> &
      ADODB$CursorTypeEnum__adOpenStatic &
      3; // 3
    static +adOpenUnspecified: Class<ADODB$CursorTypeEnum__adOpenUnspecified> &
      ADODB$CursorTypeEnum__adOpenUnspecified &
      -1; // -1
  }

  declare class ADODB$CursorTypeEnum__adOpenDynamic
    mixins ADODB$CursorTypeEnum {}
  declare class ADODB$CursorTypeEnum__adOpenForwardOnly
    mixins ADODB$CursorTypeEnum {}
  declare class ADODB$CursorTypeEnum__adOpenKeyset
    mixins ADODB$CursorTypeEnum {}
  declare class ADODB$CursorTypeEnum__adOpenStatic
    mixins ADODB$CursorTypeEnum {}
  declare class ADODB$CursorTypeEnum__adOpenUnspecified
    mixins ADODB$CursorTypeEnum {}

  declare class ADODB$DataTypeEnum {
    constructor(...args: empty): mixed;
    static +adArray: Class<ADODB$DataTypeEnum__adArray> &
      ADODB$DataTypeEnum__adArray &
      8192; // 8192
    static +adBigInt: Class<ADODB$DataTypeEnum__adBigInt> &
      ADODB$DataTypeEnum__adBigInt &
      20; // 20
    static +adBinary: Class<ADODB$DataTypeEnum__adBinary> &
      ADODB$DataTypeEnum__adBinary &
      128; // 128
    static +adBoolean: Class<ADODB$DataTypeEnum__adBoolean> &
      ADODB$DataTypeEnum__adBoolean &
      11; // 11
    static +adBSTR: Class<ADODB$DataTypeEnum__adBSTR> &
      ADODB$DataTypeEnum__adBSTR &
      8; // 8
    static +adChapter: Class<ADODB$DataTypeEnum__adChapter> &
      ADODB$DataTypeEnum__adChapter &
      136; // 136
    static +adChar: Class<ADODB$DataTypeEnum__adChar> &
      ADODB$DataTypeEnum__adChar &
      129; // 129
    static +adCurrency: Class<ADODB$DataTypeEnum__adCurrency> &
      ADODB$DataTypeEnum__adCurrency &
      6; // 6
    static +adDate: Class<ADODB$DataTypeEnum__adDate> &
      ADODB$DataTypeEnum__adDate &
      7; // 7
    static +adDBDate: Class<ADODB$DataTypeEnum__adDBDate> &
      ADODB$DataTypeEnum__adDBDate &
      133; // 133
    static +adDBTime: Class<ADODB$DataTypeEnum__adDBTime> &
      ADODB$DataTypeEnum__adDBTime &
      134; // 134
    static +adDBTimeStamp: Class<ADODB$DataTypeEnum__adDBTimeStamp> &
      ADODB$DataTypeEnum__adDBTimeStamp &
      135; // 135
    static +adDecimal: Class<ADODB$DataTypeEnum__adDecimal> &
      ADODB$DataTypeEnum__adDecimal &
      14; // 14
    static +adDouble: Class<ADODB$DataTypeEnum__adDouble> &
      ADODB$DataTypeEnum__adDouble &
      5; // 5
    static +adEmpty: Class<ADODB$DataTypeEnum__adEmpty> &
      ADODB$DataTypeEnum__adEmpty &
      0; // 0
    static +adError: Class<ADODB$DataTypeEnum__adError> &
      ADODB$DataTypeEnum__adError &
      10; // 10
    static +adFileTime: Class<ADODB$DataTypeEnum__adFileTime> &
      ADODB$DataTypeEnum__adFileTime &
      64; // 64
    static +adGUID: Class<ADODB$DataTypeEnum__adGUID> &
      ADODB$DataTypeEnum__adGUID &
      72; // 72
    static +adIDispatch: Class<ADODB$DataTypeEnum__adIDispatch> &
      ADODB$DataTypeEnum__adIDispatch &
      9; // 9
    static +adInteger: Class<ADODB$DataTypeEnum__adInteger> &
      ADODB$DataTypeEnum__adInteger &
      3; // 3
    static +adIUnknown: Class<ADODB$DataTypeEnum__adIUnknown> &
      ADODB$DataTypeEnum__adIUnknown &
      13; // 13
    static +adLongVarBinary: Class<ADODB$DataTypeEnum__adLongVarBinary> &
      ADODB$DataTypeEnum__adLongVarBinary &
      205; // 205
    static +adLongVarChar: Class<ADODB$DataTypeEnum__adLongVarChar> &
      ADODB$DataTypeEnum__adLongVarChar &
      201; // 201
    static +adLongVarWChar: Class<ADODB$DataTypeEnum__adLongVarWChar> &
      ADODB$DataTypeEnum__adLongVarWChar &
      203; // 203
    static +adNumeric: Class<ADODB$DataTypeEnum__adNumeric> &
      ADODB$DataTypeEnum__adNumeric &
      131; // 131
    static +adPropVariant: Class<ADODB$DataTypeEnum__adPropVariant> &
      ADODB$DataTypeEnum__adPropVariant &
      138; // 138
    static +adSingle: Class<ADODB$DataTypeEnum__adSingle> &
      ADODB$DataTypeEnum__adSingle &
      4; // 4
    static +adSmallInt: Class<ADODB$DataTypeEnum__adSmallInt> &
      ADODB$DataTypeEnum__adSmallInt &
      2; // 2
    static +adTinyInt: Class<ADODB$DataTypeEnum__adTinyInt> &
      ADODB$DataTypeEnum__adTinyInt &
      16; // 16
    static +adUnsignedBigInt: Class<ADODB$DataTypeEnum__adUnsignedBigInt> &
      ADODB$DataTypeEnum__adUnsignedBigInt &
      21; // 21
    static +adUnsignedInt: Class<ADODB$DataTypeEnum__adUnsignedInt> &
      ADODB$DataTypeEnum__adUnsignedInt &
      19; // 19
    static +adUnsignedSmallInt: Class<ADODB$DataTypeEnum__adUnsignedSmallInt> &
      ADODB$DataTypeEnum__adUnsignedSmallInt &
      18; // 18
    static +adUnsignedTinyInt: Class<ADODB$DataTypeEnum__adUnsignedTinyInt> &
      ADODB$DataTypeEnum__adUnsignedTinyInt &
      17; // 17
    static +adUserDefined: Class<ADODB$DataTypeEnum__adUserDefined> &
      ADODB$DataTypeEnum__adUserDefined &
      132; // 132
    static +adVarBinary: Class<ADODB$DataTypeEnum__adVarBinary> &
      ADODB$DataTypeEnum__adVarBinary &
      204; // 204
    static +adVarChar: Class<ADODB$DataTypeEnum__adVarChar> &
      ADODB$DataTypeEnum__adVarChar &
      200; // 200
    static +adVariant: Class<ADODB$DataTypeEnum__adVariant> &
      ADODB$DataTypeEnum__adVariant &
      12; // 12
    static +adVarNumeric: Class<ADODB$DataTypeEnum__adVarNumeric> &
      ADODB$DataTypeEnum__adVarNumeric &
      139; // 139
    static +adVarWChar: Class<ADODB$DataTypeEnum__adVarWChar> &
      ADODB$DataTypeEnum__adVarWChar &
      202; // 202
    static +adWChar: Class<ADODB$DataTypeEnum__adWChar> &
      ADODB$DataTypeEnum__adWChar &
      130; // 130
  }

  declare class ADODB$DataTypeEnum__adArray mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adBigInt mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adBinary mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adBoolean mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adBSTR mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adChapter mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adChar mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adCurrency mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adDate mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adDBDate mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adDBTime mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adDBTimeStamp mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adDecimal mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adDouble mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adEmpty mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adError mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adFileTime mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adGUID mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adIDispatch mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adInteger mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adIUnknown mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adLongVarBinary mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adLongVarChar mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adLongVarWChar mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adNumeric mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adPropVariant mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adSingle mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adSmallInt mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adTinyInt mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adUnsignedBigInt
    mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adUnsignedInt mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adUnsignedSmallInt
    mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adUnsignedTinyInt
    mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adUserDefined mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adVarBinary mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adVarChar mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adVariant mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adVarNumeric mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adVarWChar mixins ADODB$DataTypeEnum {}
  declare class ADODB$DataTypeEnum__adWChar mixins ADODB$DataTypeEnum {}

  declare class ADODB$EditModeEnum {
    constructor(...args: empty): mixed;
    static +adEditAdd: Class<ADODB$EditModeEnum__adEditAdd> &
      ADODB$EditModeEnum__adEditAdd &
      2; // 2
    static +adEditDelete: Class<ADODB$EditModeEnum__adEditDelete> &
      ADODB$EditModeEnum__adEditDelete &
      4; // 4
    static +adEditInProgress: Class<ADODB$EditModeEnum__adEditInProgress> &
      ADODB$EditModeEnum__adEditInProgress &
      1; // 1
    static +adEditNone: Class<ADODB$EditModeEnum__adEditNone> &
      ADODB$EditModeEnum__adEditNone &
      0; // 0
  }

  declare class ADODB$EditModeEnum__adEditAdd mixins ADODB$EditModeEnum {}
  declare class ADODB$EditModeEnum__adEditDelete mixins ADODB$EditModeEnum {}
  declare class ADODB$EditModeEnum__adEditInProgress
    mixins ADODB$EditModeEnum {}
  declare class ADODB$EditModeEnum__adEditNone mixins ADODB$EditModeEnum {}

  declare class ADODB$ErrorValueEnum {
    constructor(...args: empty): mixed;
    static +adErrBoundToCommand: Class<ADODB$ErrorValueEnum__adErrBoundToCommand> &
      ADODB$ErrorValueEnum__adErrBoundToCommand &
      3707; // 3707
    static +adErrCannotComplete: Class<ADODB$ErrorValueEnum__adErrCannotComplete> &
      ADODB$ErrorValueEnum__adErrCannotComplete &
      3732; // 3732
    static +adErrCantChangeConnection: Class<ADODB$ErrorValueEnum__adErrCantChangeConnection> &
      ADODB$ErrorValueEnum__adErrCantChangeConnection &
      3748; // 3748
    static +adErrCantChangeProvider: Class<ADODB$ErrorValueEnum__adErrCantChangeProvider> &
      ADODB$ErrorValueEnum__adErrCantChangeProvider &
      3220; // 3220
    static +adErrCantConvertvalue: Class<ADODB$ErrorValueEnum__adErrCantConvertvalue> &
      ADODB$ErrorValueEnum__adErrCantConvertvalue &
      3724; // 3724
    static +adErrCantCreate: Class<ADODB$ErrorValueEnum__adErrCantCreate> &
      ADODB$ErrorValueEnum__adErrCantCreate &
      3725; // 3725
    static +adErrCatalogNotSet: Class<ADODB$ErrorValueEnum__adErrCatalogNotSet> &
      ADODB$ErrorValueEnum__adErrCatalogNotSet &
      3747; // 3747
    static +adErrColumnNotOnThisRow: Class<ADODB$ErrorValueEnum__adErrColumnNotOnThisRow> &
      ADODB$ErrorValueEnum__adErrColumnNotOnThisRow &
      3726; // 3726
    static +adErrConnectionStringTooLong: Class<ADODB$ErrorValueEnum__adErrConnectionStringTooLong> &
      ADODB$ErrorValueEnum__adErrConnectionStringTooLong &
      3754; // 3754
    static +adErrDataConversion: Class<ADODB$ErrorValueEnum__adErrDataConversion> &
      ADODB$ErrorValueEnum__adErrDataConversion &
      3421; // 3421
    static +adErrDataOverflow: Class<ADODB$ErrorValueEnum__adErrDataOverflow> &
      ADODB$ErrorValueEnum__adErrDataOverflow &
      3721; // 3721
    static +adErrDelResOutOfScope: Class<ADODB$ErrorValueEnum__adErrDelResOutOfScope> &
      ADODB$ErrorValueEnum__adErrDelResOutOfScope &
      3738; // 3738
    static +adErrDenyNotSupported: Class<ADODB$ErrorValueEnum__adErrDenyNotSupported> &
      ADODB$ErrorValueEnum__adErrDenyNotSupported &
      3750; // 3750
    static +adErrDenyTypeNotSupported: Class<ADODB$ErrorValueEnum__adErrDenyTypeNotSupported> &
      ADODB$ErrorValueEnum__adErrDenyTypeNotSupported &
      3751; // 3751
    static +adErrFeatureNotAvailable: Class<ADODB$ErrorValueEnum__adErrFeatureNotAvailable> &
      ADODB$ErrorValueEnum__adErrFeatureNotAvailable &
      3251; // 3251
    static +adErrFieldsUpdateFailed: Class<ADODB$ErrorValueEnum__adErrFieldsUpdateFailed> &
      ADODB$ErrorValueEnum__adErrFieldsUpdateFailed &
      3749; // 3749
    static +adErrIllegalOperation: Class<ADODB$ErrorValueEnum__adErrIllegalOperation> &
      ADODB$ErrorValueEnum__adErrIllegalOperation &
      3219; // 3219
    static +adErrIntegrityViolation: Class<ADODB$ErrorValueEnum__adErrIntegrityViolation> &
      ADODB$ErrorValueEnum__adErrIntegrityViolation &
      3719; // 3719
    static +adErrInTransaction: Class<ADODB$ErrorValueEnum__adErrInTransaction> &
      ADODB$ErrorValueEnum__adErrInTransaction &
      3246; // 3246
    static +adErrInvalidArgument: Class<ADODB$ErrorValueEnum__adErrInvalidArgument> &
      ADODB$ErrorValueEnum__adErrInvalidArgument &
      3001; // 3001
    static +adErrInvalidConnection: Class<ADODB$ErrorValueEnum__adErrInvalidConnection> &
      ADODB$ErrorValueEnum__adErrInvalidConnection &
      3709; // 3709
    static +adErrInvalidParamInfo: Class<ADODB$ErrorValueEnum__adErrInvalidParamInfo> &
      ADODB$ErrorValueEnum__adErrInvalidParamInfo &
      3708; // 3708
    static +adErrInvalidTransaction: Class<ADODB$ErrorValueEnum__adErrInvalidTransaction> &
      ADODB$ErrorValueEnum__adErrInvalidTransaction &
      3714; // 3714
    static +adErrInvalidURL: Class<ADODB$ErrorValueEnum__adErrInvalidURL> &
      ADODB$ErrorValueEnum__adErrInvalidURL &
      3729; // 3729
    static +adErrItemNotFound: Class<ADODB$ErrorValueEnum__adErrItemNotFound> &
      ADODB$ErrorValueEnum__adErrItemNotFound &
      3265; // 3265
    static +adErrNoCurrentRecord: Class<ADODB$ErrorValueEnum__adErrNoCurrentRecord> &
      ADODB$ErrorValueEnum__adErrNoCurrentRecord &
      3021; // 3021
    static +adErrNotExecuting: Class<ADODB$ErrorValueEnum__adErrNotExecuting> &
      ADODB$ErrorValueEnum__adErrNotExecuting &
      3715; // 3715
    static +adErrNotReentrant: Class<ADODB$ErrorValueEnum__adErrNotReentrant> &
      ADODB$ErrorValueEnum__adErrNotReentrant &
      3710; // 3710
    static +adErrObjectClosed: Class<ADODB$ErrorValueEnum__adErrObjectClosed> &
      ADODB$ErrorValueEnum__adErrObjectClosed &
      3704; // 3704
    static +adErrObjectInCollection: Class<ADODB$ErrorValueEnum__adErrObjectInCollection> &
      ADODB$ErrorValueEnum__adErrObjectInCollection &
      3367; // 3367
    static +adErrObjectNotSet: Class<ADODB$ErrorValueEnum__adErrObjectNotSet> &
      ADODB$ErrorValueEnum__adErrObjectNotSet &
      3420; // 3420
    static +adErrObjectOpen: Class<ADODB$ErrorValueEnum__adErrObjectOpen> &
      ADODB$ErrorValueEnum__adErrObjectOpen &
      3705; // 3705
    static +adErrOpeningFile: Class<ADODB$ErrorValueEnum__adErrOpeningFile> &
      ADODB$ErrorValueEnum__adErrOpeningFile &
      3002; // 3002
    static +adErrOperationCancelled: Class<ADODB$ErrorValueEnum__adErrOperationCancelled> &
      ADODB$ErrorValueEnum__adErrOperationCancelled &
      3712; // 3712
    static +adErrOutOfSpace: Class<ADODB$ErrorValueEnum__adErrOutOfSpace> &
      ADODB$ErrorValueEnum__adErrOutOfSpace &
      3734; // 3734
    static +adErrPermissionDenied: Class<ADODB$ErrorValueEnum__adErrPermissionDenied> &
      ADODB$ErrorValueEnum__adErrPermissionDenied &
      3720; // 3720
    static +adErrPropConflicting: Class<ADODB$ErrorValueEnum__adErrPropConflicting> &
      ADODB$ErrorValueEnum__adErrPropConflicting &
      3742; // 3742
    static +adErrPropInvalidColumn: Class<ADODB$ErrorValueEnum__adErrPropInvalidColumn> &
      ADODB$ErrorValueEnum__adErrPropInvalidColumn &
      3739; // 3739
    static +adErrPropInvalidOption: Class<ADODB$ErrorValueEnum__adErrPropInvalidOption> &
      ADODB$ErrorValueEnum__adErrPropInvalidOption &
      3740; // 3740
    static +adErrPropInvalidValue: Class<ADODB$ErrorValueEnum__adErrPropInvalidValue> &
      ADODB$ErrorValueEnum__adErrPropInvalidValue &
      3741; // 3741
    static +adErrPropNotAllSettable: Class<ADODB$ErrorValueEnum__adErrPropNotAllSettable> &
      ADODB$ErrorValueEnum__adErrPropNotAllSettable &
      3743; // 3743
    static +adErrPropNotSet: Class<ADODB$ErrorValueEnum__adErrPropNotSet> &
      ADODB$ErrorValueEnum__adErrPropNotSet &
      3744; // 3744
    static +adErrPropNotSettable: Class<ADODB$ErrorValueEnum__adErrPropNotSettable> &
      ADODB$ErrorValueEnum__adErrPropNotSettable &
      3745; // 3745
    static +adErrPropNotSupported: Class<ADODB$ErrorValueEnum__adErrPropNotSupported> &
      ADODB$ErrorValueEnum__adErrPropNotSupported &
      3746; // 3746
    static +adErrProviderFailed: Class<ADODB$ErrorValueEnum__adErrProviderFailed> &
      ADODB$ErrorValueEnum__adErrProviderFailed &
      3000; // 3000
    static +adErrProviderNotFound: Class<ADODB$ErrorValueEnum__adErrProviderNotFound> &
      ADODB$ErrorValueEnum__adErrProviderNotFound &
      3706; // 3706
    static +adErrProviderNotSpecified: Class<ADODB$ErrorValueEnum__adErrProviderNotSpecified> &
      ADODB$ErrorValueEnum__adErrProviderNotSpecified &
      3753; // 3753
    static +adErrReadFile: Class<ADODB$ErrorValueEnum__adErrReadFile> &
      ADODB$ErrorValueEnum__adErrReadFile &
      3003; // 3003
    static +adErrResourceExists: Class<ADODB$ErrorValueEnum__adErrResourceExists> &
      ADODB$ErrorValueEnum__adErrResourceExists &
      3731; // 3731
    static +adErrResourceLocked: Class<ADODB$ErrorValueEnum__adErrResourceLocked> &
      ADODB$ErrorValueEnum__adErrResourceLocked &
      3730; // 3730
    static +adErrResourceOutOfScope: Class<ADODB$ErrorValueEnum__adErrResourceOutOfScope> &
      ADODB$ErrorValueEnum__adErrResourceOutOfScope &
      3735; // 3735
    static +adErrSchemaViolation: Class<ADODB$ErrorValueEnum__adErrSchemaViolation> &
      ADODB$ErrorValueEnum__adErrSchemaViolation &
      3722; // 3722
    static +adErrSignMismatch: Class<ADODB$ErrorValueEnum__adErrSignMismatch> &
      ADODB$ErrorValueEnum__adErrSignMismatch &
      3723; // 3723
    static +adErrStillConnecting: Class<ADODB$ErrorValueEnum__adErrStillConnecting> &
      ADODB$ErrorValueEnum__adErrStillConnecting &
      3713; // 3713
    static +adErrStillExecuting: Class<ADODB$ErrorValueEnum__adErrStillExecuting> &
      ADODB$ErrorValueEnum__adErrStillExecuting &
      3711; // 3711
    static +adErrTreePermissionDenied: Class<ADODB$ErrorValueEnum__adErrTreePermissionDenied> &
      ADODB$ErrorValueEnum__adErrTreePermissionDenied &
      3728; // 3728
    static +adErrUnavailable: Class<ADODB$ErrorValueEnum__adErrUnavailable> &
      ADODB$ErrorValueEnum__adErrUnavailable &
      3736; // 3736
    static +adErrUnsafeOperation: Class<ADODB$ErrorValueEnum__adErrUnsafeOperation> &
      ADODB$ErrorValueEnum__adErrUnsafeOperation &
      3716; // 3716
    static +adErrURLDoesNotExist: Class<ADODB$ErrorValueEnum__adErrURLDoesNotExist> &
      ADODB$ErrorValueEnum__adErrURLDoesNotExist &
      3727; // 3727
    static +adErrURLNamedRowDoesNotExist: Class<ADODB$ErrorValueEnum__adErrURLNamedRowDoesNotExist> &
      ADODB$ErrorValueEnum__adErrURLNamedRowDoesNotExist &
      3737; // 3737
    static +adErrVolumeNotFound: Class<ADODB$ErrorValueEnum__adErrVolumeNotFound> &
      ADODB$ErrorValueEnum__adErrVolumeNotFound &
      3733; // 3733
    static +adErrWriteFile: Class<ADODB$ErrorValueEnum__adErrWriteFile> &
      ADODB$ErrorValueEnum__adErrWriteFile &
      3004; // 3004
    static +adwrnSecurityDialog: Class<ADODB$ErrorValueEnum__adwrnSecurityDialog> &
      ADODB$ErrorValueEnum__adwrnSecurityDialog &
      3717; // 3717
    static +adwrnSecurityDialogHeader: Class<ADODB$ErrorValueEnum__adwrnSecurityDialogHeader> &
      ADODB$ErrorValueEnum__adwrnSecurityDialogHeader &
      3718; // 3718
  }

  declare class ADODB$ErrorValueEnum__adErrBoundToCommand
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrCannotComplete
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrCantChangeConnection
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrCantChangeProvider
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrCantConvertvalue
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrCantCreate
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrCatalogNotSet
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrColumnNotOnThisRow
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrConnectionStringTooLong
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrDataConversion
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrDataOverflow
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrDelResOutOfScope
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrDenyNotSupported
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrDenyTypeNotSupported
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrFeatureNotAvailable
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrFieldsUpdateFailed
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrIllegalOperation
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrIntegrityViolation
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrInTransaction
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrInvalidArgument
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrInvalidConnection
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrInvalidParamInfo
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrInvalidTransaction
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrInvalidURL
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrItemNotFound
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrNoCurrentRecord
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrNotExecuting
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrNotReentrant
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrObjectClosed
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrObjectInCollection
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrObjectNotSet
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrObjectOpen
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrOpeningFile
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrOperationCancelled
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrOutOfSpace
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrPermissionDenied
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrPropConflicting
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrPropInvalidColumn
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrPropInvalidOption
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrPropInvalidValue
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrPropNotAllSettable
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrPropNotSet
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrPropNotSettable
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrPropNotSupported
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrProviderFailed
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrProviderNotFound
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrProviderNotSpecified
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrReadFile
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrResourceExists
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrResourceLocked
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrResourceOutOfScope
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrSchemaViolation
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrSignMismatch
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrStillConnecting
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrStillExecuting
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrTreePermissionDenied
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrUnavailable
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrUnsafeOperation
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrURLDoesNotExist
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrURLNamedRowDoesNotExist
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrVolumeNotFound
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adErrWriteFile
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adwrnSecurityDialog
    mixins ADODB$ErrorValueEnum {}
  declare class ADODB$ErrorValueEnum__adwrnSecurityDialogHeader
    mixins ADODB$ErrorValueEnum {}

  declare class ADODB$EventReasonEnum {
    constructor(...args: empty): mixed;
    static +adRsnAddNew: Class<ADODB$EventReasonEnum__adRsnAddNew> &
      ADODB$EventReasonEnum__adRsnAddNew &
      1; // 1
    static +adRsnClose: Class<ADODB$EventReasonEnum__adRsnClose> &
      ADODB$EventReasonEnum__adRsnClose &
      9; // 9
    static +adRsnDelete: Class<ADODB$EventReasonEnum__adRsnDelete> &
      ADODB$EventReasonEnum__adRsnDelete &
      2; // 2
    static +adRsnFirstChange: Class<ADODB$EventReasonEnum__adRsnFirstChange> &
      ADODB$EventReasonEnum__adRsnFirstChange &
      11; // 11
    static +adRsnMove: Class<ADODB$EventReasonEnum__adRsnMove> &
      ADODB$EventReasonEnum__adRsnMove &
      10; // 10
    static +adRsnMoveFirst: Class<ADODB$EventReasonEnum__adRsnMoveFirst> &
      ADODB$EventReasonEnum__adRsnMoveFirst &
      12; // 12
    static +adRsnMoveLast: Class<ADODB$EventReasonEnum__adRsnMoveLast> &
      ADODB$EventReasonEnum__adRsnMoveLast &
      15; // 15
    static +adRsnMoveNext: Class<ADODB$EventReasonEnum__adRsnMoveNext> &
      ADODB$EventReasonEnum__adRsnMoveNext &
      13; // 13
    static +adRsnMovePrevious: Class<ADODB$EventReasonEnum__adRsnMovePrevious> &
      ADODB$EventReasonEnum__adRsnMovePrevious &
      14; // 14
    static +adRsnRequery: Class<ADODB$EventReasonEnum__adRsnRequery> &
      ADODB$EventReasonEnum__adRsnRequery &
      7; // 7
    static +adRsnResynch: Class<ADODB$EventReasonEnum__adRsnResynch> &
      ADODB$EventReasonEnum__adRsnResynch &
      8; // 8
    static +adRsnUndoAddNew: Class<ADODB$EventReasonEnum__adRsnUndoAddNew> &
      ADODB$EventReasonEnum__adRsnUndoAddNew &
      5; // 5
    static +adRsnUndoDelete: Class<ADODB$EventReasonEnum__adRsnUndoDelete> &
      ADODB$EventReasonEnum__adRsnUndoDelete &
      6; // 6
    static +adRsnUndoUpdate: Class<ADODB$EventReasonEnum__adRsnUndoUpdate> &
      ADODB$EventReasonEnum__adRsnUndoUpdate &
      4; // 4
    static +adRsnUpdate: Class<ADODB$EventReasonEnum__adRsnUpdate> &
      ADODB$EventReasonEnum__adRsnUpdate &
      3; // 3
  }

  declare class ADODB$EventReasonEnum__adRsnAddNew
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnClose
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnDelete
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnFirstChange
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnMove mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnMoveFirst
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnMoveLast
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnMoveNext
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnMovePrevious
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnRequery
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnResynch
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnUndoAddNew
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnUndoDelete
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnUndoUpdate
    mixins ADODB$EventReasonEnum {}
  declare class ADODB$EventReasonEnum__adRsnUpdate
    mixins ADODB$EventReasonEnum {}

  declare class ADODB$EventStatusEnum {
    constructor(...args: empty): mixed;
    static +adStatusCancel: Class<ADODB$EventStatusEnum__adStatusCancel> &
      ADODB$EventStatusEnum__adStatusCancel &
      4; // 4
    static +adStatusCantDeny: Class<ADODB$EventStatusEnum__adStatusCantDeny> &
      ADODB$EventStatusEnum__adStatusCantDeny &
      3; // 3
    static +adStatusErrorsOccurred: Class<ADODB$EventStatusEnum__adStatusErrorsOccurred> &
      ADODB$EventStatusEnum__adStatusErrorsOccurred &
      2; // 2
    static +adStatusOK: Class<ADODB$EventStatusEnum__adStatusOK> &
      ADODB$EventStatusEnum__adStatusOK &
      1; // 1
    static +adStatusUnwantedEvent: Class<ADODB$EventStatusEnum__adStatusUnwantedEvent> &
      ADODB$EventStatusEnum__adStatusUnwantedEvent &
      5; // 5
  }

  declare class ADODB$EventStatusEnum__adStatusCancel
    mixins ADODB$EventStatusEnum {}
  declare class ADODB$EventStatusEnum__adStatusCantDeny
    mixins ADODB$EventStatusEnum {}
  declare class ADODB$EventStatusEnum__adStatusErrorsOccurred
    mixins ADODB$EventStatusEnum {}
  declare class ADODB$EventStatusEnum__adStatusOK
    mixins ADODB$EventStatusEnum {}
  declare class ADODB$EventStatusEnum__adStatusUnwantedEvent
    mixins ADODB$EventStatusEnum {}

  declare class ADODB$ExecuteOptionEnum {
    constructor(...args: empty): mixed;
    static +adAsyncExecute: Class<ADODB$ExecuteOptionEnum__adAsyncExecute> &
      ADODB$ExecuteOptionEnum__adAsyncExecute &
      16; // 16
    static +adAsyncFetch: Class<ADODB$ExecuteOptionEnum__adAsyncFetch> &
      ADODB$ExecuteOptionEnum__adAsyncFetch &
      32; // 32
    static +adAsyncFetchNonBlocking: Class<ADODB$ExecuteOptionEnum__adAsyncFetchNonBlocking> &
      ADODB$ExecuteOptionEnum__adAsyncFetchNonBlocking &
      64; // 64
    static +adExecuteNoRecords: Class<ADODB$ExecuteOptionEnum__adExecuteNoRecords> &
      ADODB$ExecuteOptionEnum__adExecuteNoRecords &
      128; // 128
    static +adExecuteRecord: Class<ADODB$ExecuteOptionEnum__adExecuteRecord> &
      ADODB$ExecuteOptionEnum__adExecuteRecord &
      2048; // 2048
    static +adExecuteStream: Class<ADODB$ExecuteOptionEnum__adExecuteStream> &
      ADODB$ExecuteOptionEnum__adExecuteStream &
      1024; // 1024
    static +adOptionUnspecified: Class<ADODB$ExecuteOptionEnum__adOptionUnspecified> &
      ADODB$ExecuteOptionEnum__adOptionUnspecified &
      -1; // -1
  }

  declare class ADODB$ExecuteOptionEnum__adAsyncExecute
    mixins ADODB$ExecuteOptionEnum {}
  declare class ADODB$ExecuteOptionEnum__adAsyncFetch
    mixins ADODB$ExecuteOptionEnum {}
  declare class ADODB$ExecuteOptionEnum__adAsyncFetchNonBlocking
    mixins ADODB$ExecuteOptionEnum {}
  declare class ADODB$ExecuteOptionEnum__adExecuteNoRecords
    mixins ADODB$ExecuteOptionEnum {}
  declare class ADODB$ExecuteOptionEnum__adExecuteRecord
    mixins ADODB$ExecuteOptionEnum {}
  declare class ADODB$ExecuteOptionEnum__adExecuteStream
    mixins ADODB$ExecuteOptionEnum {}
  declare class ADODB$ExecuteOptionEnum__adOptionUnspecified
    mixins ADODB$ExecuteOptionEnum {}

  declare class ADODB$FieldAttributeEnum {
    constructor(...args: empty): mixed;
    static +adFldCacheDeferred: Class<ADODB$FieldAttributeEnum__adFldCacheDeferred> &
      ADODB$FieldAttributeEnum__adFldCacheDeferred &
      4096; // 4096
    static +adFldFixed: Class<ADODB$FieldAttributeEnum__adFldFixed> &
      ADODB$FieldAttributeEnum__adFldFixed &
      16; // 16
    static +adFldIsChapter: Class<ADODB$FieldAttributeEnum__adFldIsChapter> &
      ADODB$FieldAttributeEnum__adFldIsChapter &
      8192; // 8192
    static +adFldIsCollection: Class<ADODB$FieldAttributeEnum__adFldIsCollection> &
      ADODB$FieldAttributeEnum__adFldIsCollection &
      262144; // 262144
    static +adFldIsDefaultStream: Class<ADODB$FieldAttributeEnum__adFldIsDefaultStream> &
      ADODB$FieldAttributeEnum__adFldIsDefaultStream &
      131072; // 131072
    static +adFldIsNullable: Class<ADODB$FieldAttributeEnum__adFldIsNullable> &
      ADODB$FieldAttributeEnum__adFldIsNullable &
      32; // 32
    static +adFldIsRowURL: Class<ADODB$FieldAttributeEnum__adFldIsRowURL> &
      ADODB$FieldAttributeEnum__adFldIsRowURL &
      65536; // 65536
    static +adFldKeyColumn: Class<ADODB$FieldAttributeEnum__adFldKeyColumn> &
      ADODB$FieldAttributeEnum__adFldKeyColumn &
      32768; // 32768
    static +adFldLong: Class<ADODB$FieldAttributeEnum__adFldLong> &
      ADODB$FieldAttributeEnum__adFldLong &
      128; // 128
    static +adFldMayBeNull: Class<ADODB$FieldAttributeEnum__adFldMayBeNull> &
      ADODB$FieldAttributeEnum__adFldMayBeNull &
      64; // 64
    static +adFldMayDefer: Class<ADODB$FieldAttributeEnum__adFldMayDefer> &
      ADODB$FieldAttributeEnum__adFldMayDefer &
      2; // 2
    static +adFldNegativeScale: Class<ADODB$FieldAttributeEnum__adFldNegativeScale> &
      ADODB$FieldAttributeEnum__adFldNegativeScale &
      16384; // 16384
    static +adFldRowID: Class<ADODB$FieldAttributeEnum__adFldRowID> &
      ADODB$FieldAttributeEnum__adFldRowID &
      256; // 256
    static +adFldRowVersion: Class<ADODB$FieldAttributeEnum__adFldRowVersion> &
      ADODB$FieldAttributeEnum__adFldRowVersion &
      512; // 512
    static +adFldUnknownUpdatable: Class<ADODB$FieldAttributeEnum__adFldUnknownUpdatable> &
      ADODB$FieldAttributeEnum__adFldUnknownUpdatable &
      8; // 8
    static +adFldUnspecified: Class<ADODB$FieldAttributeEnum__adFldUnspecified> &
      ADODB$FieldAttributeEnum__adFldUnspecified &
      -1; // -1
    static +adFldUpdatable: Class<ADODB$FieldAttributeEnum__adFldUpdatable> &
      ADODB$FieldAttributeEnum__adFldUpdatable &
      4; // 4
  }

  declare class ADODB$FieldAttributeEnum__adFldCacheDeferred
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldFixed
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldIsChapter
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldIsCollection
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldIsDefaultStream
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldIsNullable
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldIsRowURL
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldKeyColumn
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldLong
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldMayBeNull
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldMayDefer
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldNegativeScale
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldRowID
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldRowVersion
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldUnknownUpdatable
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldUnspecified
    mixins ADODB$FieldAttributeEnum {}
  declare class ADODB$FieldAttributeEnum__adFldUpdatable
    mixins ADODB$FieldAttributeEnum {}

  declare class ADODB$FieldEnum {
    constructor(...args: empty): mixed;
    static +adDefaultStream: Class<ADODB$FieldEnum__adDefaultStream> &
      ADODB$FieldEnum__adDefaultStream &
      -1; // -1
    static +adRecordURL: Class<ADODB$FieldEnum__adRecordURL> &
      ADODB$FieldEnum__adRecordURL &
      -2; // -2
  }

  declare class ADODB$FieldEnum__adDefaultStream mixins ADODB$FieldEnum {}
  declare class ADODB$FieldEnum__adRecordURL mixins ADODB$FieldEnum {}

  declare class ADODB$FieldStatusEnum {
    constructor(...args: empty): mixed;
    static +adFieldAlreadyExists: Class<ADODB$FieldStatusEnum__adFieldAlreadyExists> &
      ADODB$FieldStatusEnum__adFieldAlreadyExists &
      26; // 26
    static +adFieldBadStatus: Class<ADODB$FieldStatusEnum__adFieldBadStatus> &
      ADODB$FieldStatusEnum__adFieldBadStatus &
      12; // 12
    static +adFieldCannotComplete: Class<ADODB$FieldStatusEnum__adFieldCannotComplete> &
      ADODB$FieldStatusEnum__adFieldCannotComplete &
      20; // 20
    static +adFieldCannotDeleteSource: Class<ADODB$FieldStatusEnum__adFieldCannotDeleteSource> &
      ADODB$FieldStatusEnum__adFieldCannotDeleteSource &
      23; // 23
    static +adFieldCantConvertValue: Class<ADODB$FieldStatusEnum__adFieldCantConvertValue> &
      ADODB$FieldStatusEnum__adFieldCantConvertValue &
      2; // 2
    static +adFieldCantCreate: Class<ADODB$FieldStatusEnum__adFieldCantCreate> &
      ADODB$FieldStatusEnum__adFieldCantCreate &
      7; // 7
    static +adFieldDataOverflow: Class<ADODB$FieldStatusEnum__adFieldDataOverflow> &
      ADODB$FieldStatusEnum__adFieldDataOverflow &
      6; // 6
    static +adFieldDefault: Class<ADODB$FieldStatusEnum__adFieldDefault> &
      ADODB$FieldStatusEnum__adFieldDefault &
      13; // 13
    static +adFieldDoesNotExist: Class<ADODB$FieldStatusEnum__adFieldDoesNotExist> &
      ADODB$FieldStatusEnum__adFieldDoesNotExist &
      16; // 16
    static +adFieldIgnore: Class<ADODB$FieldStatusEnum__adFieldIgnore> &
      ADODB$FieldStatusEnum__adFieldIgnore &
      15; // 15
    static +adFieldIntegrityViolation: Class<ADODB$FieldStatusEnum__adFieldIntegrityViolation> &
      ADODB$FieldStatusEnum__adFieldIntegrityViolation &
      10; // 10
    static +adFieldInvalidURL: Class<ADODB$FieldStatusEnum__adFieldInvalidURL> &
      ADODB$FieldStatusEnum__adFieldInvalidURL &
      17; // 17
    static +adFieldIsNull: Class<ADODB$FieldStatusEnum__adFieldIsNull> &
      ADODB$FieldStatusEnum__adFieldIsNull &
      3; // 3
    static +adFieldOK: Class<ADODB$FieldStatusEnum__adFieldOK> &
      ADODB$FieldStatusEnum__adFieldOK &
      0; // 0
    static +adFieldOutOfSpace: Class<ADODB$FieldStatusEnum__adFieldOutOfSpace> &
      ADODB$FieldStatusEnum__adFieldOutOfSpace &
      22; // 22
    static +adFieldPendingChange: Class<ADODB$FieldStatusEnum__adFieldPendingChange> &
      ADODB$FieldStatusEnum__adFieldPendingChange &
      262144; // 262144
    static +adFieldPendingDelete: Class<ADODB$FieldStatusEnum__adFieldPendingDelete> &
      ADODB$FieldStatusEnum__adFieldPendingDelete &
      131072; // 131072
    static +adFieldPendingInsert: Class<ADODB$FieldStatusEnum__adFieldPendingInsert> &
      ADODB$FieldStatusEnum__adFieldPendingInsert &
      65536; // 65536
    static +adFieldPendingUnknown: Class<ADODB$FieldStatusEnum__adFieldPendingUnknown> &
      ADODB$FieldStatusEnum__adFieldPendingUnknown &
      524288; // 524288
    static +adFieldPendingUnknownDelete: Class<ADODB$FieldStatusEnum__adFieldPendingUnknownDelete> &
      ADODB$FieldStatusEnum__adFieldPendingUnknownDelete &
      1048576; // 1048576
    static +adFieldPermissionDenied: Class<ADODB$FieldStatusEnum__adFieldPermissionDenied> &
      ADODB$FieldStatusEnum__adFieldPermissionDenied &
      9; // 9
    static +adFieldReadOnly: Class<ADODB$FieldStatusEnum__adFieldReadOnly> &
      ADODB$FieldStatusEnum__adFieldReadOnly &
      24; // 24
    static +adFieldResourceExists: Class<ADODB$FieldStatusEnum__adFieldResourceExists> &
      ADODB$FieldStatusEnum__adFieldResourceExists &
      19; // 19
    static +adFieldResourceLocked: Class<ADODB$FieldStatusEnum__adFieldResourceLocked> &
      ADODB$FieldStatusEnum__adFieldResourceLocked &
      18; // 18
    static +adFieldResourceOutOfScope: Class<ADODB$FieldStatusEnum__adFieldResourceOutOfScope> &
      ADODB$FieldStatusEnum__adFieldResourceOutOfScope &
      25; // 25
    static +adFieldSchemaViolation: Class<ADODB$FieldStatusEnum__adFieldSchemaViolation> &
      ADODB$FieldStatusEnum__adFieldSchemaViolation &
      11; // 11
    static +adFieldSignMismatch: Class<ADODB$FieldStatusEnum__adFieldSignMismatch> &
      ADODB$FieldStatusEnum__adFieldSignMismatch &
      5; // 5
    static +adFieldTruncated: Class<ADODB$FieldStatusEnum__adFieldTruncated> &
      ADODB$FieldStatusEnum__adFieldTruncated &
      4; // 4
    static +adFieldUnavailable: Class<ADODB$FieldStatusEnum__adFieldUnavailable> &
      ADODB$FieldStatusEnum__adFieldUnavailable &
      8; // 8
    static +adFieldVolumeNotFound: Class<ADODB$FieldStatusEnum__adFieldVolumeNotFound> &
      ADODB$FieldStatusEnum__adFieldVolumeNotFound &
      21; // 21
  }

  declare class ADODB$FieldStatusEnum__adFieldAlreadyExists
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldBadStatus
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldCannotComplete
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldCannotDeleteSource
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldCantConvertValue
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldCantCreate
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldDataOverflow
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldDefault
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldDoesNotExist
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldIgnore
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldIntegrityViolation
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldInvalidURL
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldIsNull
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldOK mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldOutOfSpace
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldPendingChange
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldPendingDelete
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldPendingInsert
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldPendingUnknown
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldPendingUnknownDelete
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldPermissionDenied
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldReadOnly
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldResourceExists
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldResourceLocked
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldResourceOutOfScope
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldSchemaViolation
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldSignMismatch
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldTruncated
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldUnavailable
    mixins ADODB$FieldStatusEnum {}
  declare class ADODB$FieldStatusEnum__adFieldVolumeNotFound
    mixins ADODB$FieldStatusEnum {}

  declare class ADODB$FilterGroupEnum {
    constructor(...args: empty): mixed;
    static +adFilterAffectedRecords: Class<ADODB$FilterGroupEnum__adFilterAffectedRecords> &
      ADODB$FilterGroupEnum__adFilterAffectedRecords &
      2; // 2
    static +adFilterConflictingRecords: Class<ADODB$FilterGroupEnum__adFilterConflictingRecords> &
      ADODB$FilterGroupEnum__adFilterConflictingRecords &
      5; // 5
    static +adFilterFetchedRecords: Class<ADODB$FilterGroupEnum__adFilterFetchedRecords> &
      ADODB$FilterGroupEnum__adFilterFetchedRecords &
      3; // 3
    static +adFilterNone: Class<ADODB$FilterGroupEnum__adFilterNone> &
      ADODB$FilterGroupEnum__adFilterNone &
      0; // 0
    static +adFilterPendingRecords: Class<ADODB$FilterGroupEnum__adFilterPendingRecords> &
      ADODB$FilterGroupEnum__adFilterPendingRecords &
      1; // 1
    static +adFilterPredicate: Class<ADODB$FilterGroupEnum__adFilterPredicate> &
      ADODB$FilterGroupEnum__adFilterPredicate &
      4; // 4
  }

  declare class ADODB$FilterGroupEnum__adFilterAffectedRecords
    mixins ADODB$FilterGroupEnum {}
  declare class ADODB$FilterGroupEnum__adFilterConflictingRecords
    mixins ADODB$FilterGroupEnum {}
  declare class ADODB$FilterGroupEnum__adFilterFetchedRecords
    mixins ADODB$FilterGroupEnum {}
  declare class ADODB$FilterGroupEnum__adFilterNone
    mixins ADODB$FilterGroupEnum {}
  declare class ADODB$FilterGroupEnum__adFilterPendingRecords
    mixins ADODB$FilterGroupEnum {}
  declare class ADODB$FilterGroupEnum__adFilterPredicate
    mixins ADODB$FilterGroupEnum {}

  declare class ADODB$GetRowsOptionEnum {
    constructor(...args: empty): mixed;
    static +adGetRowsRest: Class<ADODB$GetRowsOptionEnum__adGetRowsRest> &
      ADODB$GetRowsOptionEnum__adGetRowsRest &
      -1; // -1
  }

  declare class ADODB$GetRowsOptionEnum__adGetRowsRest
    mixins ADODB$GetRowsOptionEnum {}

  declare class ADODB$IsolationLevelEnum {
    constructor(...args: empty): mixed;
    static +adXactBrowse: Class<ADODB$IsolationLevelEnum__adXactBrowse> &
      ADODB$IsolationLevelEnum__adXactBrowse &
      256; // 256
    static +adXactChaos: Class<ADODB$IsolationLevelEnum__adXactChaos> &
      ADODB$IsolationLevelEnum__adXactChaos &
      16; // 16
    static +adXactCursorStability: Class<ADODB$IsolationLevelEnum__adXactCursorStability> &
      ADODB$IsolationLevelEnum__adXactCursorStability &
      4096; // 4096
    static +adXactIsolated: Class<ADODB$IsolationLevelEnum__adXactIsolated> &
      ADODB$IsolationLevelEnum__adXactIsolated &
      1048576; // 1048576
    static +adXactReadCommitted: Class<ADODB$IsolationLevelEnum__adXactReadCommitted> &
      ADODB$IsolationLevelEnum__adXactReadCommitted &
      4096; // 4096
    static +adXactReadUncommitted: Class<ADODB$IsolationLevelEnum__adXactReadUncommitted> &
      ADODB$IsolationLevelEnum__adXactReadUncommitted &
      256; // 256
    static +adXactRepeatableRead: Class<ADODB$IsolationLevelEnum__adXactRepeatableRead> &
      ADODB$IsolationLevelEnum__adXactRepeatableRead &
      65536; // 65536
    static +adXactSerializable: Class<ADODB$IsolationLevelEnum__adXactSerializable> &
      ADODB$IsolationLevelEnum__adXactSerializable &
      1048576; // 1048576
    static +adXactUnspecified: Class<ADODB$IsolationLevelEnum__adXactUnspecified> &
      ADODB$IsolationLevelEnum__adXactUnspecified &
      -1; // -1
  }

  declare class ADODB$IsolationLevelEnum__adXactBrowse
    mixins ADODB$IsolationLevelEnum {}
  declare class ADODB$IsolationLevelEnum__adXactChaos
    mixins ADODB$IsolationLevelEnum {}
  declare class ADODB$IsolationLevelEnum__adXactCursorStability
    mixins ADODB$IsolationLevelEnum {}
  declare class ADODB$IsolationLevelEnum__adXactIsolated
    mixins ADODB$IsolationLevelEnum {}
  declare class ADODB$IsolationLevelEnum__adXactReadCommitted
    mixins ADODB$IsolationLevelEnum {}
  declare class ADODB$IsolationLevelEnum__adXactReadUncommitted
    mixins ADODB$IsolationLevelEnum {}
  declare class ADODB$IsolationLevelEnum__adXactRepeatableRead
    mixins ADODB$IsolationLevelEnum {}
  declare class ADODB$IsolationLevelEnum__adXactSerializable
    mixins ADODB$IsolationLevelEnum {}
  declare class ADODB$IsolationLevelEnum__adXactUnspecified
    mixins ADODB$IsolationLevelEnum {}

  declare class ADODB$LineSeparatorEnum {
    constructor(...args: empty): mixed;
    static +adCR: Class<ADODB$LineSeparatorEnum__adCR> &
      ADODB$LineSeparatorEnum__adCR &
      13; // 13
    static +adCRLF: Class<ADODB$LineSeparatorEnum__adCRLF> &
      ADODB$LineSeparatorEnum__adCRLF &
      -1; // -1
    static +adLF: Class<ADODB$LineSeparatorEnum__adLF> &
      ADODB$LineSeparatorEnum__adLF &
      10; // 10
  }

  declare class ADODB$LineSeparatorEnum__adCR mixins ADODB$LineSeparatorEnum {}
  declare class ADODB$LineSeparatorEnum__adCRLF
    mixins ADODB$LineSeparatorEnum {}
  declare class ADODB$LineSeparatorEnum__adLF mixins ADODB$LineSeparatorEnum {}

  declare class ADODB$LockTypeEnum {
    constructor(...args: empty): mixed;
    static +adLockBatchOptimistic: Class<ADODB$LockTypeEnum__adLockBatchOptimistic> &
      ADODB$LockTypeEnum__adLockBatchOptimistic &
      4; // 4
    static +adLockOptimistic: Class<ADODB$LockTypeEnum__adLockOptimistic> &
      ADODB$LockTypeEnum__adLockOptimistic &
      3; // 3
    static +adLockPessimistic: Class<ADODB$LockTypeEnum__adLockPessimistic> &
      ADODB$LockTypeEnum__adLockPessimistic &
      2; // 2
    static +adLockReadOnly: Class<ADODB$LockTypeEnum__adLockReadOnly> &
      ADODB$LockTypeEnum__adLockReadOnly &
      1; // 1
    static +adLockUnspecified: Class<ADODB$LockTypeEnum__adLockUnspecified> &
      ADODB$LockTypeEnum__adLockUnspecified &
      -1; // -1
  }

  declare class ADODB$LockTypeEnum__adLockBatchOptimistic
    mixins ADODB$LockTypeEnum {}
  declare class ADODB$LockTypeEnum__adLockOptimistic
    mixins ADODB$LockTypeEnum {}
  declare class ADODB$LockTypeEnum__adLockPessimistic
    mixins ADODB$LockTypeEnum {}
  declare class ADODB$LockTypeEnum__adLockReadOnly mixins ADODB$LockTypeEnum {}
  declare class ADODB$LockTypeEnum__adLockUnspecified
    mixins ADODB$LockTypeEnum {}

  declare class ADODB$MarshalOptionsEnum {
    constructor(...args: empty): mixed;
    static +adMarshalAll: Class<ADODB$MarshalOptionsEnum__adMarshalAll> &
      ADODB$MarshalOptionsEnum__adMarshalAll &
      0; // 0
    static +adMarshalModifiedOnly: Class<ADODB$MarshalOptionsEnum__adMarshalModifiedOnly> &
      ADODB$MarshalOptionsEnum__adMarshalModifiedOnly &
      1; // 1
  }

  declare class ADODB$MarshalOptionsEnum__adMarshalAll
    mixins ADODB$MarshalOptionsEnum {}
  declare class ADODB$MarshalOptionsEnum__adMarshalModifiedOnly
    mixins ADODB$MarshalOptionsEnum {}

  declare class ADODB$MoveRecordOptionsEnum {
    constructor(...args: empty): mixed;
    static +adMoveAllowEmulation: Class<ADODB$MoveRecordOptionsEnum__adMoveAllowEmulation> &
      ADODB$MoveRecordOptionsEnum__adMoveAllowEmulation &
      4; // 4
    static +adMoveDontUpdateLinks: Class<ADODB$MoveRecordOptionsEnum__adMoveDontUpdateLinks> &
      ADODB$MoveRecordOptionsEnum__adMoveDontUpdateLinks &
      2; // 2
    static +adMoveOverWrite: Class<ADODB$MoveRecordOptionsEnum__adMoveOverWrite> &
      ADODB$MoveRecordOptionsEnum__adMoveOverWrite &
      1; // 1
    static +adMoveUnspecified: Class<ADODB$MoveRecordOptionsEnum__adMoveUnspecified> &
      ADODB$MoveRecordOptionsEnum__adMoveUnspecified &
      -1; // -1
  }

  declare class ADODB$MoveRecordOptionsEnum__adMoveAllowEmulation
    mixins ADODB$MoveRecordOptionsEnum {}
  declare class ADODB$MoveRecordOptionsEnum__adMoveDontUpdateLinks
    mixins ADODB$MoveRecordOptionsEnum {}
  declare class ADODB$MoveRecordOptionsEnum__adMoveOverWrite
    mixins ADODB$MoveRecordOptionsEnum {}
  declare class ADODB$MoveRecordOptionsEnum__adMoveUnspecified
    mixins ADODB$MoveRecordOptionsEnum {}

  declare class ADODB$ObjectStateEnum {
    constructor(...args: empty): mixed;
    static +adStateClosed: Class<ADODB$ObjectStateEnum__adStateClosed> &
      ADODB$ObjectStateEnum__adStateClosed &
      0; // 0
    static +adStateConnecting: Class<ADODB$ObjectStateEnum__adStateConnecting> &
      ADODB$ObjectStateEnum__adStateConnecting &
      2; // 2
    static +adStateExecuting: Class<ADODB$ObjectStateEnum__adStateExecuting> &
      ADODB$ObjectStateEnum__adStateExecuting &
      4; // 4
    static +adStateFetching: Class<ADODB$ObjectStateEnum__adStateFetching> &
      ADODB$ObjectStateEnum__adStateFetching &
      8; // 8
    static +adStateOpen: Class<ADODB$ObjectStateEnum__adStateOpen> &
      ADODB$ObjectStateEnum__adStateOpen &
      1; // 1
  }

  declare class ADODB$ObjectStateEnum__adStateClosed
    mixins ADODB$ObjectStateEnum {}
  declare class ADODB$ObjectStateEnum__adStateConnecting
    mixins ADODB$ObjectStateEnum {}
  declare class ADODB$ObjectStateEnum__adStateExecuting
    mixins ADODB$ObjectStateEnum {}
  declare class ADODB$ObjectStateEnum__adStateFetching
    mixins ADODB$ObjectStateEnum {}
  declare class ADODB$ObjectStateEnum__adStateOpen
    mixins ADODB$ObjectStateEnum {}

  declare class ADODB$ParameterAttributesEnum {
    constructor(...args: empty): mixed;
    static +adParamLong: Class<ADODB$ParameterAttributesEnum__adParamLong> &
      ADODB$ParameterAttributesEnum__adParamLong &
      128; // 128
    static +adParamNullable: Class<ADODB$ParameterAttributesEnum__adParamNullable> &
      ADODB$ParameterAttributesEnum__adParamNullable &
      64; // 64
    static +adParamSigned: Class<ADODB$ParameterAttributesEnum__adParamSigned> &
      ADODB$ParameterAttributesEnum__adParamSigned &
      16; // 16
  }

  declare class ADODB$ParameterAttributesEnum__adParamLong
    mixins ADODB$ParameterAttributesEnum {}
  declare class ADODB$ParameterAttributesEnum__adParamNullable
    mixins ADODB$ParameterAttributesEnum {}
  declare class ADODB$ParameterAttributesEnum__adParamSigned
    mixins ADODB$ParameterAttributesEnum {}

  declare class ADODB$ParameterDirectionEnum {
    constructor(...args: empty): mixed;
    static +adParamInput: Class<ADODB$ParameterDirectionEnum__adParamInput> &
      ADODB$ParameterDirectionEnum__adParamInput &
      1; // 1
    static +adParamInputOutput: Class<ADODB$ParameterDirectionEnum__adParamInputOutput> &
      ADODB$ParameterDirectionEnum__adParamInputOutput &
      3; // 3
    static +adParamOutput: Class<ADODB$ParameterDirectionEnum__adParamOutput> &
      ADODB$ParameterDirectionEnum__adParamOutput &
      2; // 2
    static +adParamReturnValue: Class<ADODB$ParameterDirectionEnum__adParamReturnValue> &
      ADODB$ParameterDirectionEnum__adParamReturnValue &
      4; // 4
    static +adParamUnknown: Class<ADODB$ParameterDirectionEnum__adParamUnknown> &
      ADODB$ParameterDirectionEnum__adParamUnknown &
      0; // 0
  }

  declare class ADODB$ParameterDirectionEnum__adParamInput
    mixins ADODB$ParameterDirectionEnum {}
  declare class ADODB$ParameterDirectionEnum__adParamInputOutput
    mixins ADODB$ParameterDirectionEnum {}
  declare class ADODB$ParameterDirectionEnum__adParamOutput
    mixins ADODB$ParameterDirectionEnum {}
  declare class ADODB$ParameterDirectionEnum__adParamReturnValue
    mixins ADODB$ParameterDirectionEnum {}
  declare class ADODB$ParameterDirectionEnum__adParamUnknown
    mixins ADODB$ParameterDirectionEnum {}

  declare class ADODB$PersistFormatEnum {
    constructor(...args: empty): mixed;
    static +adPersistADTG: Class<ADODB$PersistFormatEnum__adPersistADTG> &
      ADODB$PersistFormatEnum__adPersistADTG &
      0; // 0
    static +adPersistXML: Class<ADODB$PersistFormatEnum__adPersistXML> &
      ADODB$PersistFormatEnum__adPersistXML &
      1; // 1
  }

  declare class ADODB$PersistFormatEnum__adPersistADTG
    mixins ADODB$PersistFormatEnum {}
  declare class ADODB$PersistFormatEnum__adPersistXML
    mixins ADODB$PersistFormatEnum {}

  declare class ADODB$PositionEnum {
    constructor(...args: empty): mixed;
    static +adPosBOF: Class<ADODB$PositionEnum__adPosBOF> &
      ADODB$PositionEnum__adPosBOF &
      -2; // -2
    static +adPosEOF: Class<ADODB$PositionEnum__adPosEOF> &
      ADODB$PositionEnum__adPosEOF &
      -3; // -3
    static +adPosUnknown: Class<ADODB$PositionEnum__adPosUnknown> &
      ADODB$PositionEnum__adPosUnknown &
      -1; // -1
  }

  declare class ADODB$PositionEnum__adPosBOF mixins ADODB$PositionEnum {}
  declare class ADODB$PositionEnum__adPosEOF mixins ADODB$PositionEnum {}
  declare class ADODB$PositionEnum__adPosUnknown mixins ADODB$PositionEnum {}

  declare class ADODB$PositionEnum_Param {
    constructor(...args: empty): mixed;
    static +adPosBOF: Class<ADODB$PositionEnum_Param__adPosBOF> &
      ADODB$PositionEnum_Param__adPosBOF &
      -2; // -2
    static +adPosEOF: Class<ADODB$PositionEnum_Param__adPosEOF> &
      ADODB$PositionEnum_Param__adPosEOF &
      -3; // -3
    static +adPosUnknown: Class<ADODB$PositionEnum_Param__adPosUnknown> &
      ADODB$PositionEnum_Param__adPosUnknown &
      -1; // -1
  }

  declare class ADODB$PositionEnum_Param__adPosBOF
    mixins ADODB$PositionEnum_Param {}
  declare class ADODB$PositionEnum_Param__adPosEOF
    mixins ADODB$PositionEnum_Param {}
  declare class ADODB$PositionEnum_Param__adPosUnknown
    mixins ADODB$PositionEnum_Param {}

  declare class ADODB$PropertyAttributesEnum {
    constructor(...args: empty): mixed;
    static +adPropNotSupported: Class<ADODB$PropertyAttributesEnum__adPropNotSupported> &
      ADODB$PropertyAttributesEnum__adPropNotSupported &
      0; // 0
    static +adPropOptional: Class<ADODB$PropertyAttributesEnum__adPropOptional> &
      ADODB$PropertyAttributesEnum__adPropOptional &
      2; // 2
    static +adPropRead: Class<ADODB$PropertyAttributesEnum__adPropRead> &
      ADODB$PropertyAttributesEnum__adPropRead &
      512; // 512
    static +adPropRequired: Class<ADODB$PropertyAttributesEnum__adPropRequired> &
      ADODB$PropertyAttributesEnum__adPropRequired &
      1; // 1
    static +adPropWrite: Class<ADODB$PropertyAttributesEnum__adPropWrite> &
      ADODB$PropertyAttributesEnum__adPropWrite &
      1024; // 1024
  }

  declare class ADODB$PropertyAttributesEnum__adPropNotSupported
    mixins ADODB$PropertyAttributesEnum {}
  declare class ADODB$PropertyAttributesEnum__adPropOptional
    mixins ADODB$PropertyAttributesEnum {}
  declare class ADODB$PropertyAttributesEnum__adPropRead
    mixins ADODB$PropertyAttributesEnum {}
  declare class ADODB$PropertyAttributesEnum__adPropRequired
    mixins ADODB$PropertyAttributesEnum {}
  declare class ADODB$PropertyAttributesEnum__adPropWrite
    mixins ADODB$PropertyAttributesEnum {}

  declare class ADODB$RecordCreateOptionsEnum {
    constructor(...args: empty): mixed;
    static +adCreateCollection: Class<ADODB$RecordCreateOptionsEnum__adCreateCollection> &
      ADODB$RecordCreateOptionsEnum__adCreateCollection &
      8192; // 8192
    static +adCreateNonCollection: Class<ADODB$RecordCreateOptionsEnum__adCreateNonCollection> &
      ADODB$RecordCreateOptionsEnum__adCreateNonCollection &
      0; // 0
    static +adCreateOverwrite: Class<ADODB$RecordCreateOptionsEnum__adCreateOverwrite> &
      ADODB$RecordCreateOptionsEnum__adCreateOverwrite &
      67108864; // 67108864
    static +adCreateStructDoc: Class<ADODB$RecordCreateOptionsEnum__adCreateStructDoc> &
      ADODB$RecordCreateOptionsEnum__adCreateStructDoc &
      -2147483648; // -2147483648
    static +adFailIfNotExists: Class<ADODB$RecordCreateOptionsEnum__adFailIfNotExists> &
      ADODB$RecordCreateOptionsEnum__adFailIfNotExists &
      -1; // -1
    static +adOpenIfExists: Class<ADODB$RecordCreateOptionsEnum__adOpenIfExists> &
      ADODB$RecordCreateOptionsEnum__adOpenIfExists &
      33554432; // 33554432
  }

  declare class ADODB$RecordCreateOptionsEnum__adCreateCollection
    mixins ADODB$RecordCreateOptionsEnum {}
  declare class ADODB$RecordCreateOptionsEnum__adCreateNonCollection
    mixins ADODB$RecordCreateOptionsEnum {}
  declare class ADODB$RecordCreateOptionsEnum__adCreateOverwrite
    mixins ADODB$RecordCreateOptionsEnum {}
  declare class ADODB$RecordCreateOptionsEnum__adCreateStructDoc
    mixins ADODB$RecordCreateOptionsEnum {}
  declare class ADODB$RecordCreateOptionsEnum__adFailIfNotExists
    mixins ADODB$RecordCreateOptionsEnum {}
  declare class ADODB$RecordCreateOptionsEnum__adOpenIfExists
    mixins ADODB$RecordCreateOptionsEnum {}

  declare class ADODB$RecordOpenOptionsEnum {
    constructor(...args: empty): mixed;
    static +adDelayFetchFields: Class<ADODB$RecordOpenOptionsEnum__adDelayFetchFields> &
      ADODB$RecordOpenOptionsEnum__adDelayFetchFields &
      32768; // 32768
    static +adDelayFetchStream: Class<ADODB$RecordOpenOptionsEnum__adDelayFetchStream> &
      ADODB$RecordOpenOptionsEnum__adDelayFetchStream &
      16384; // 16384
    static +adOpenAsync: Class<ADODB$RecordOpenOptionsEnum__adOpenAsync> &
      ADODB$RecordOpenOptionsEnum__adOpenAsync &
      4096; // 4096
    static +adOpenExecuteCommand: Class<ADODB$RecordOpenOptionsEnum__adOpenExecuteCommand> &
      ADODB$RecordOpenOptionsEnum__adOpenExecuteCommand &
      65536; // 65536
    static +adOpenOutput: Class<ADODB$RecordOpenOptionsEnum__adOpenOutput> &
      ADODB$RecordOpenOptionsEnum__adOpenOutput &
      8388608; // 8388608
    static +adOpenRecordUnspecified: Class<ADODB$RecordOpenOptionsEnum__adOpenRecordUnspecified> &
      ADODB$RecordOpenOptionsEnum__adOpenRecordUnspecified &
      -1; // -1
    static +adOpenSource: Class<ADODB$RecordOpenOptionsEnum__adOpenSource> &
      ADODB$RecordOpenOptionsEnum__adOpenSource &
      8388608; // 8388608
  }

  declare class ADODB$RecordOpenOptionsEnum__adDelayFetchFields
    mixins ADODB$RecordOpenOptionsEnum {}
  declare class ADODB$RecordOpenOptionsEnum__adDelayFetchStream
    mixins ADODB$RecordOpenOptionsEnum {}
  declare class ADODB$RecordOpenOptionsEnum__adOpenAsync
    mixins ADODB$RecordOpenOptionsEnum {}
  declare class ADODB$RecordOpenOptionsEnum__adOpenExecuteCommand
    mixins ADODB$RecordOpenOptionsEnum {}
  declare class ADODB$RecordOpenOptionsEnum__adOpenOutput
    mixins ADODB$RecordOpenOptionsEnum {}
  declare class ADODB$RecordOpenOptionsEnum__adOpenRecordUnspecified
    mixins ADODB$RecordOpenOptionsEnum {}
  declare class ADODB$RecordOpenOptionsEnum__adOpenSource
    mixins ADODB$RecordOpenOptionsEnum {}

  declare class ADODB$RecordStatusEnum {
    constructor(...args: empty): mixed;
    static +adRecCanceled: Class<ADODB$RecordStatusEnum__adRecCanceled> &
      ADODB$RecordStatusEnum__adRecCanceled &
      256; // 256
    static +adRecCantRelease: Class<ADODB$RecordStatusEnum__adRecCantRelease> &
      ADODB$RecordStatusEnum__adRecCantRelease &
      1024; // 1024
    static +adRecConcurrencyViolation: Class<ADODB$RecordStatusEnum__adRecConcurrencyViolation> &
      ADODB$RecordStatusEnum__adRecConcurrencyViolation &
      2048; // 2048
    static +adRecDBDeleted: Class<ADODB$RecordStatusEnum__adRecDBDeleted> &
      ADODB$RecordStatusEnum__adRecDBDeleted &
      262144; // 262144
    static +adRecDeleted: Class<ADODB$RecordStatusEnum__adRecDeleted> &
      ADODB$RecordStatusEnum__adRecDeleted &
      4; // 4
    static +adRecIntegrityViolation: Class<ADODB$RecordStatusEnum__adRecIntegrityViolation> &
      ADODB$RecordStatusEnum__adRecIntegrityViolation &
      4096; // 4096
    static +adRecInvalid: Class<ADODB$RecordStatusEnum__adRecInvalid> &
      ADODB$RecordStatusEnum__adRecInvalid &
      16; // 16
    static +adRecMaxChangesExceeded: Class<ADODB$RecordStatusEnum__adRecMaxChangesExceeded> &
      ADODB$RecordStatusEnum__adRecMaxChangesExceeded &
      8192; // 8192
    static +adRecModified: Class<ADODB$RecordStatusEnum__adRecModified> &
      ADODB$RecordStatusEnum__adRecModified &
      2; // 2
    static +adRecMultipleChanges: Class<ADODB$RecordStatusEnum__adRecMultipleChanges> &
      ADODB$RecordStatusEnum__adRecMultipleChanges &
      64; // 64
    static +adRecNew: Class<ADODB$RecordStatusEnum__adRecNew> &
      ADODB$RecordStatusEnum__adRecNew &
      1; // 1
    static +adRecObjectOpen: Class<ADODB$RecordStatusEnum__adRecObjectOpen> &
      ADODB$RecordStatusEnum__adRecObjectOpen &
      16384; // 16384
    static +adRecOK: Class<ADODB$RecordStatusEnum__adRecOK> &
      ADODB$RecordStatusEnum__adRecOK &
      0; // 0
    static +adRecOutOfMemory: Class<ADODB$RecordStatusEnum__adRecOutOfMemory> &
      ADODB$RecordStatusEnum__adRecOutOfMemory &
      32768; // 32768
    static +adRecPendingChanges: Class<ADODB$RecordStatusEnum__adRecPendingChanges> &
      ADODB$RecordStatusEnum__adRecPendingChanges &
      128; // 128
    static +adRecPermissionDenied: Class<ADODB$RecordStatusEnum__adRecPermissionDenied> &
      ADODB$RecordStatusEnum__adRecPermissionDenied &
      65536; // 65536
    static +adRecSchemaViolation: Class<ADODB$RecordStatusEnum__adRecSchemaViolation> &
      ADODB$RecordStatusEnum__adRecSchemaViolation &
      131072; // 131072
    static +adRecUnmodified: Class<ADODB$RecordStatusEnum__adRecUnmodified> &
      ADODB$RecordStatusEnum__adRecUnmodified &
      8; // 8
  }

  declare class ADODB$RecordStatusEnum__adRecCanceled
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecCantRelease
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecConcurrencyViolation
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecDBDeleted
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecDeleted
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecIntegrityViolation
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecInvalid
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecMaxChangesExceeded
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecModified
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecMultipleChanges
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecNew
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecObjectOpen
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecOK mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecOutOfMemory
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecPendingChanges
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecPermissionDenied
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecSchemaViolation
    mixins ADODB$RecordStatusEnum {}
  declare class ADODB$RecordStatusEnum__adRecUnmodified
    mixins ADODB$RecordStatusEnum {}

  declare class ADODB$RecordTypeEnum {
    constructor(...args: empty): mixed;
    static +adCollectionRecord: Class<ADODB$RecordTypeEnum__adCollectionRecord> &
      ADODB$RecordTypeEnum__adCollectionRecord &
      1; // 1
    static +adSimpleRecord: Class<ADODB$RecordTypeEnum__adSimpleRecord> &
      ADODB$RecordTypeEnum__adSimpleRecord &
      0; // 0
    static +adStructDoc: Class<ADODB$RecordTypeEnum__adStructDoc> &
      ADODB$RecordTypeEnum__adStructDoc &
      2; // 2
  }

  declare class ADODB$RecordTypeEnum__adCollectionRecord
    mixins ADODB$RecordTypeEnum {}
  declare class ADODB$RecordTypeEnum__adSimpleRecord
    mixins ADODB$RecordTypeEnum {}
  declare class ADODB$RecordTypeEnum__adStructDoc mixins ADODB$RecordTypeEnum {}

  declare class ADODB$ResyncEnum {
    constructor(...args: empty): mixed;
    static +adResyncAllValues: Class<ADODB$ResyncEnum__adResyncAllValues> &
      ADODB$ResyncEnum__adResyncAllValues &
      2; // 2
    static +adResyncUnderlyingValues: Class<ADODB$ResyncEnum__adResyncUnderlyingValues> &
      ADODB$ResyncEnum__adResyncUnderlyingValues &
      1; // 1
  }

  declare class ADODB$ResyncEnum__adResyncAllValues mixins ADODB$ResyncEnum {}
  declare class ADODB$ResyncEnum__adResyncUnderlyingValues
    mixins ADODB$ResyncEnum {}

  declare class ADODB$SaveOptionsEnum {
    constructor(...args: empty): mixed;
    static +adSaveCreateNotExist: Class<ADODB$SaveOptionsEnum__adSaveCreateNotExist> &
      ADODB$SaveOptionsEnum__adSaveCreateNotExist &
      1; // 1
    static +adSaveCreateOverWrite: Class<ADODB$SaveOptionsEnum__adSaveCreateOverWrite> &
      ADODB$SaveOptionsEnum__adSaveCreateOverWrite &
      2; // 2
  }

  declare class ADODB$SaveOptionsEnum__adSaveCreateNotExist
    mixins ADODB$SaveOptionsEnum {}
  declare class ADODB$SaveOptionsEnum__adSaveCreateOverWrite
    mixins ADODB$SaveOptionsEnum {}

  declare class ADODB$SchemaEnum {
    constructor(...args: empty): mixed;
    static +adSchemaActions: Class<ADODB$SchemaEnum__adSchemaActions> &
      ADODB$SchemaEnum__adSchemaActions &
      41; // 41
    static +adSchemaAsserts: Class<ADODB$SchemaEnum__adSchemaAsserts> &
      ADODB$SchemaEnum__adSchemaAsserts &
      0; // 0
    static +adSchemaCatalogs: Class<ADODB$SchemaEnum__adSchemaCatalogs> &
      ADODB$SchemaEnum__adSchemaCatalogs &
      1; // 1
    static +adSchemaCharacterSets: Class<ADODB$SchemaEnum__adSchemaCharacterSets> &
      ADODB$SchemaEnum__adSchemaCharacterSets &
      2; // 2
    static +adSchemaCheckConstraints: Class<ADODB$SchemaEnum__adSchemaCheckConstraints> &
      ADODB$SchemaEnum__adSchemaCheckConstraints &
      5; // 5
    static +adSchemaCollations: Class<ADODB$SchemaEnum__adSchemaCollations> &
      ADODB$SchemaEnum__adSchemaCollations &
      3; // 3
    static +adSchemaColumnPrivileges: Class<ADODB$SchemaEnum__adSchemaColumnPrivileges> &
      ADODB$SchemaEnum__adSchemaColumnPrivileges &
      13; // 13
    static +adSchemaColumns: Class<ADODB$SchemaEnum__adSchemaColumns> &
      ADODB$SchemaEnum__adSchemaColumns &
      4; // 4
    static +adSchemaColumnsDomainUsage: Class<ADODB$SchemaEnum__adSchemaColumnsDomainUsage> &
      ADODB$SchemaEnum__adSchemaColumnsDomainUsage &
      11; // 11
    static +adSchemaCommands: Class<ADODB$SchemaEnum__adSchemaCommands> &
      ADODB$SchemaEnum__adSchemaCommands &
      42; // 42
    static +adSchemaConstraintColumnUsage: Class<ADODB$SchemaEnum__adSchemaConstraintColumnUsage> &
      ADODB$SchemaEnum__adSchemaConstraintColumnUsage &
      6; // 6
    static +adSchemaConstraintTableUsage: Class<ADODB$SchemaEnum__adSchemaConstraintTableUsage> &
      ADODB$SchemaEnum__adSchemaConstraintTableUsage &
      7; // 7
    static +adSchemaCubes: Class<ADODB$SchemaEnum__adSchemaCubes> &
      ADODB$SchemaEnum__adSchemaCubes &
      32; // 32
    static +adSchemaDBInfoKeywords: Class<ADODB$SchemaEnum__adSchemaDBInfoKeywords> &
      ADODB$SchemaEnum__adSchemaDBInfoKeywords &
      30; // 30
    static +adSchemaDBInfoLiterals: Class<ADODB$SchemaEnum__adSchemaDBInfoLiterals> &
      ADODB$SchemaEnum__adSchemaDBInfoLiterals &
      31; // 31
    static +adSchemaDimensions: Class<ADODB$SchemaEnum__adSchemaDimensions> &
      ADODB$SchemaEnum__adSchemaDimensions &
      33; // 33
    static +adSchemaForeignKeys: Class<ADODB$SchemaEnum__adSchemaForeignKeys> &
      ADODB$SchemaEnum__adSchemaForeignKeys &
      27; // 27
    static +adSchemaFunctions: Class<ADODB$SchemaEnum__adSchemaFunctions> &
      ADODB$SchemaEnum__adSchemaFunctions &
      40; // 40
    static +adSchemaHierarchies: Class<ADODB$SchemaEnum__adSchemaHierarchies> &
      ADODB$SchemaEnum__adSchemaHierarchies &
      34; // 34
    static +adSchemaIndexes: Class<ADODB$SchemaEnum__adSchemaIndexes> &
      ADODB$SchemaEnum__adSchemaIndexes &
      12; // 12
    static +adSchemaKeyColumnUsage: Class<ADODB$SchemaEnum__adSchemaKeyColumnUsage> &
      ADODB$SchemaEnum__adSchemaKeyColumnUsage &
      8; // 8
    static +adSchemaLevels: Class<ADODB$SchemaEnum__adSchemaLevels> &
      ADODB$SchemaEnum__adSchemaLevels &
      35; // 35
    static +adSchemaMeasures: Class<ADODB$SchemaEnum__adSchemaMeasures> &
      ADODB$SchemaEnum__adSchemaMeasures &
      36; // 36
    static +adSchemaMembers: Class<ADODB$SchemaEnum__adSchemaMembers> &
      ADODB$SchemaEnum__adSchemaMembers &
      38; // 38
    static +adSchemaPrimaryKeys: Class<ADODB$SchemaEnum__adSchemaPrimaryKeys> &
      ADODB$SchemaEnum__adSchemaPrimaryKeys &
      28; // 28
    static +adSchemaProcedureColumns: Class<ADODB$SchemaEnum__adSchemaProcedureColumns> &
      ADODB$SchemaEnum__adSchemaProcedureColumns &
      29; // 29
    static +adSchemaProcedureParameters: Class<ADODB$SchemaEnum__adSchemaProcedureParameters> &
      ADODB$SchemaEnum__adSchemaProcedureParameters &
      26; // 26
    static +adSchemaProcedures: Class<ADODB$SchemaEnum__adSchemaProcedures> &
      ADODB$SchemaEnum__adSchemaProcedures &
      16; // 16
    static +adSchemaProperties: Class<ADODB$SchemaEnum__adSchemaProperties> &
      ADODB$SchemaEnum__adSchemaProperties &
      37; // 37
    static +adSchemaProviderSpecific: Class<ADODB$SchemaEnum__adSchemaProviderSpecific> &
      ADODB$SchemaEnum__adSchemaProviderSpecific &
      -1; // -1
    static +adSchemaProviderTypes: Class<ADODB$SchemaEnum__adSchemaProviderTypes> &
      ADODB$SchemaEnum__adSchemaProviderTypes &
      22; // 22
    static +adSchemaReferentialConstraints: Class<ADODB$SchemaEnum__adSchemaReferentialConstraints> &
      ADODB$SchemaEnum__adSchemaReferentialConstraints &
      9; // 9
    static +adSchemaReferentialContraints: Class<ADODB$SchemaEnum__adSchemaReferentialContraints> &
      ADODB$SchemaEnum__adSchemaReferentialContraints &
      9; // 9
    static +adSchemaSchemata: Class<ADODB$SchemaEnum__adSchemaSchemata> &
      ADODB$SchemaEnum__adSchemaSchemata &
      17; // 17
    static +adSchemaSets: Class<ADODB$SchemaEnum__adSchemaSets> &
      ADODB$SchemaEnum__adSchemaSets &
      43; // 43
    static +adSchemaSQLLanguages: Class<ADODB$SchemaEnum__adSchemaSQLLanguages> &
      ADODB$SchemaEnum__adSchemaSQLLanguages &
      18; // 18
    static +adSchemaStatistics: Class<ADODB$SchemaEnum__adSchemaStatistics> &
      ADODB$SchemaEnum__adSchemaStatistics &
      19; // 19
    static +adSchemaTableConstraints: Class<ADODB$SchemaEnum__adSchemaTableConstraints> &
      ADODB$SchemaEnum__adSchemaTableConstraints &
      10; // 10
    static +adSchemaTablePrivileges: Class<ADODB$SchemaEnum__adSchemaTablePrivileges> &
      ADODB$SchemaEnum__adSchemaTablePrivileges &
      14; // 14
    static +adSchemaTables: Class<ADODB$SchemaEnum__adSchemaTables> &
      ADODB$SchemaEnum__adSchemaTables &
      20; // 20
    static +adSchemaTranslations: Class<ADODB$SchemaEnum__adSchemaTranslations> &
      ADODB$SchemaEnum__adSchemaTranslations &
      21; // 21
    static +adSchemaTrustees: Class<ADODB$SchemaEnum__adSchemaTrustees> &
      ADODB$SchemaEnum__adSchemaTrustees &
      39; // 39
    static +adSchemaUsagePrivileges: Class<ADODB$SchemaEnum__adSchemaUsagePrivileges> &
      ADODB$SchemaEnum__adSchemaUsagePrivileges &
      15; // 15
    static +adSchemaViewColumnUsage: Class<ADODB$SchemaEnum__adSchemaViewColumnUsage> &
      ADODB$SchemaEnum__adSchemaViewColumnUsage &
      24; // 24
    static +adSchemaViews: Class<ADODB$SchemaEnum__adSchemaViews> &
      ADODB$SchemaEnum__adSchemaViews &
      23; // 23
    static +adSchemaViewTableUsage: Class<ADODB$SchemaEnum__adSchemaViewTableUsage> &
      ADODB$SchemaEnum__adSchemaViewTableUsage &
      25; // 25
  }

  declare class ADODB$SchemaEnum__adSchemaActions mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaAsserts mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaCatalogs mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaCharacterSets
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaCheckConstraints
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaCollations mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaColumnPrivileges
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaColumns mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaColumnsDomainUsage
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaCommands mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaConstraintColumnUsage
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaConstraintTableUsage
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaCubes mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaDBInfoKeywords
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaDBInfoLiterals
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaDimensions mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaForeignKeys mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaFunctions mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaHierarchies mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaIndexes mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaKeyColumnUsage
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaLevels mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaMeasures mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaMembers mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaPrimaryKeys mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaProcedureColumns
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaProcedureParameters
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaProcedures mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaProperties mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaProviderSpecific
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaProviderTypes
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaReferentialConstraints
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaReferentialContraints
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaSchemata mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaSets mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaSQLLanguages
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaStatistics mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaTableConstraints
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaTablePrivileges
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaTables mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaTranslations
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaTrustees mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaUsagePrivileges
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaViewColumnUsage
    mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaViews mixins ADODB$SchemaEnum {}
  declare class ADODB$SchemaEnum__adSchemaViewTableUsage
    mixins ADODB$SchemaEnum {}

  declare class ADODB$SearchDirection {
    constructor(...args: empty): mixed;
    static +adSearchBackward: Class<ADODB$SearchDirection__adSearchBackward> &
      ADODB$SearchDirection__adSearchBackward &
      -1; // -1
    static +adSearchForward: Class<ADODB$SearchDirection__adSearchForward> &
      ADODB$SearchDirection__adSearchForward &
      1; // 1
  }

  declare class ADODB$SearchDirection__adSearchBackward
    mixins ADODB$SearchDirection {}
  declare class ADODB$SearchDirection__adSearchForward
    mixins ADODB$SearchDirection {}

  declare class ADODB$SearchDirectionEnum {
    constructor(...args: empty): mixed;
    static +adSearchBackward: Class<ADODB$SearchDirectionEnum__adSearchBackward> &
      ADODB$SearchDirectionEnum__adSearchBackward &
      -1; // -1
    static +adSearchForward: Class<ADODB$SearchDirectionEnum__adSearchForward> &
      ADODB$SearchDirectionEnum__adSearchForward &
      1; // 1
  }

  declare class ADODB$SearchDirectionEnum__adSearchBackward
    mixins ADODB$SearchDirectionEnum {}
  declare class ADODB$SearchDirectionEnum__adSearchForward
    mixins ADODB$SearchDirectionEnum {}

  declare class ADODB$SeekEnum {
    constructor(...args: empty): mixed;
    static +adSeekAfter: Class<ADODB$SeekEnum__adSeekAfter> &
      ADODB$SeekEnum__adSeekAfter &
      8; // 8
    static +adSeekAfterEQ: Class<ADODB$SeekEnum__adSeekAfterEQ> &
      ADODB$SeekEnum__adSeekAfterEQ &
      4; // 4
    static +adSeekBefore: Class<ADODB$SeekEnum__adSeekBefore> &
      ADODB$SeekEnum__adSeekBefore &
      32; // 32
    static +adSeekBeforeEQ: Class<ADODB$SeekEnum__adSeekBeforeEQ> &
      ADODB$SeekEnum__adSeekBeforeEQ &
      16; // 16
    static +adSeekFirstEQ: Class<ADODB$SeekEnum__adSeekFirstEQ> &
      ADODB$SeekEnum__adSeekFirstEQ &
      1; // 1
    static +adSeekLastEQ: Class<ADODB$SeekEnum__adSeekLastEQ> &
      ADODB$SeekEnum__adSeekLastEQ &
      2; // 2
  }

  declare class ADODB$SeekEnum__adSeekAfter mixins ADODB$SeekEnum {}
  declare class ADODB$SeekEnum__adSeekAfterEQ mixins ADODB$SeekEnum {}
  declare class ADODB$SeekEnum__adSeekBefore mixins ADODB$SeekEnum {}
  declare class ADODB$SeekEnum__adSeekBeforeEQ mixins ADODB$SeekEnum {}
  declare class ADODB$SeekEnum__adSeekFirstEQ mixins ADODB$SeekEnum {}
  declare class ADODB$SeekEnum__adSeekLastEQ mixins ADODB$SeekEnum {}

  declare class ADODB$StreamOpenOptionsEnum {
    constructor(...args: empty): mixed;
    static +adOpenStreamAsync: Class<ADODB$StreamOpenOptionsEnum__adOpenStreamAsync> &
      ADODB$StreamOpenOptionsEnum__adOpenStreamAsync &
      1; // 1
    static +adOpenStreamFromRecord: Class<ADODB$StreamOpenOptionsEnum__adOpenStreamFromRecord> &
      ADODB$StreamOpenOptionsEnum__adOpenStreamFromRecord &
      4; // 4
    static +adOpenStreamUnspecified: Class<ADODB$StreamOpenOptionsEnum__adOpenStreamUnspecified> &
      ADODB$StreamOpenOptionsEnum__adOpenStreamUnspecified &
      -1; // -1
  }

  declare class ADODB$StreamOpenOptionsEnum__adOpenStreamAsync
    mixins ADODB$StreamOpenOptionsEnum {}
  declare class ADODB$StreamOpenOptionsEnum__adOpenStreamFromRecord
    mixins ADODB$StreamOpenOptionsEnum {}
  declare class ADODB$StreamOpenOptionsEnum__adOpenStreamUnspecified
    mixins ADODB$StreamOpenOptionsEnum {}

  declare class ADODB$StreamReadEnum {
    constructor(...args: empty): mixed;
    static +adReadAll: Class<ADODB$StreamReadEnum__adReadAll> &
      ADODB$StreamReadEnum__adReadAll &
      -1; // -1
    static +adReadLine: Class<ADODB$StreamReadEnum__adReadLine> &
      ADODB$StreamReadEnum__adReadLine &
      -2; // -2
  }

  declare class ADODB$StreamReadEnum__adReadAll mixins ADODB$StreamReadEnum {}
  declare class ADODB$StreamReadEnum__adReadLine mixins ADODB$StreamReadEnum {}

  declare class ADODB$StreamTypeEnum {
    constructor(...args: empty): mixed;
    static +adTypeBinary: Class<ADODB$StreamTypeEnum__adTypeBinary> &
      ADODB$StreamTypeEnum__adTypeBinary &
      1; // 1
    static +adTypeText: Class<ADODB$StreamTypeEnum__adTypeText> &
      ADODB$StreamTypeEnum__adTypeText &
      2; // 2
  }

  declare class ADODB$StreamTypeEnum__adTypeBinary
    mixins ADODB$StreamTypeEnum {}
  declare class ADODB$StreamTypeEnum__adTypeText mixins ADODB$StreamTypeEnum {}

  declare class ADODB$StreamWriteEnum {
    constructor(...args: empty): mixed;
    static +adWriteChar: Class<ADODB$StreamWriteEnum__adWriteChar> &
      ADODB$StreamWriteEnum__adWriteChar &
      0; // 0
    static +adWriteLine: Class<ADODB$StreamWriteEnum__adWriteLine> &
      ADODB$StreamWriteEnum__adWriteLine &
      1; // 1
    static +stWriteChar: Class<ADODB$StreamWriteEnum__stWriteChar> &
      ADODB$StreamWriteEnum__stWriteChar &
      0; // 0
    static +stWriteLine: Class<ADODB$StreamWriteEnum__stWriteLine> &
      ADODB$StreamWriteEnum__stWriteLine &
      1; // 1
  }

  declare class ADODB$StreamWriteEnum__adWriteChar
    mixins ADODB$StreamWriteEnum {}
  declare class ADODB$StreamWriteEnum__adWriteLine
    mixins ADODB$StreamWriteEnum {}
  declare class ADODB$StreamWriteEnum__stWriteChar
    mixins ADODB$StreamWriteEnum {}
  declare class ADODB$StreamWriteEnum__stWriteLine
    mixins ADODB$StreamWriteEnum {}

  declare class ADODB$StringFormatEnum {
    constructor(...args: empty): mixed;
    static +adClipString: Class<ADODB$StringFormatEnum__adClipString> &
      ADODB$StringFormatEnum__adClipString &
      2; // 2
  }

  declare class ADODB$StringFormatEnum__adClipString
    mixins ADODB$StringFormatEnum {}

  declare class ADODB$XactAttributeEnum {
    constructor(...args: empty): mixed;
    static +adXactAbortRetaining: Class<ADODB$XactAttributeEnum__adXactAbortRetaining> &
      ADODB$XactAttributeEnum__adXactAbortRetaining &
      262144; // 262144
    static +adXactAsyncPhaseOne: Class<ADODB$XactAttributeEnum__adXactAsyncPhaseOne> &
      ADODB$XactAttributeEnum__adXactAsyncPhaseOne &
      524288; // 524288
    static +adXactCommitRetaining: Class<ADODB$XactAttributeEnum__adXactCommitRetaining> &
      ADODB$XactAttributeEnum__adXactCommitRetaining &
      131072; // 131072
    static +adXactSyncPhaseOne: Class<ADODB$XactAttributeEnum__adXactSyncPhaseOne> &
      ADODB$XactAttributeEnum__adXactSyncPhaseOne &
      1048576; // 1048576
  }

  declare class ADODB$XactAttributeEnum__adXactAbortRetaining
    mixins ADODB$XactAttributeEnum {}
  declare class ADODB$XactAttributeEnum__adXactAsyncPhaseOne
    mixins ADODB$XactAttributeEnum {}
  declare class ADODB$XactAttributeEnum__adXactCommitRetaining
    mixins ADODB$XactAttributeEnum {}
  declare class ADODB$XactAttributeEnum__adXactSyncPhaseOne
    mixins ADODB$XactAttributeEnum {}

  declare class ADODB$Bookmark {
    constructor(): this;
  }

  declare class ADODB$Command {
    constructor(): this;

    /**
     * Sets or returns a String value that contains a definition for a connection if the connection is closed, or a Variant containing the current Connection object if the connection is open. Default is a null object reference.
     */
    ActiveConnection: string | ADODB$Connection | null;
    Cancel(): void;
    CommandStream: any;
    CommandText: string;
    CommandTimeout: number;
    CommandType: ADODB$CommandTypeEnum;

    /**
     * @param Name [Name='']
     * @param Type [Type=0]
     * @param Direction [Direction=1]
     * @param Size [Size=0]
     */
    CreateParameter(
      Name?: string,
      Type?: ADODB$DataTypeEnum,
      Direction?: ADODB$ParameterDirectionEnum,
      Size?: number,
      Value?: any
    ): ADODB$Parameter;
    Dialect: string;

    /**
 * @param Options [Options=-1]

The **RecordsAffected** parameter is meant to take a variable to be modified by reference, which is not supported by Javascript

The return value is as follows:

* If the **adExecuteNoRecords** option is passed in, the method will return `null`. Otherwise:
* If the command specifies a row-returning query, then the method will return a new read-only, forward-only **Recordset** object with the results.
* If the command isn't intended to return results (e.g. an `UPDATE` statement), a closed empty **Recordset** will be returned.
 */
    Execute(
      RecordsAffected?: void,
      ADODB$Parameters?: SafeArray,
      Options?: number
    ): ADODB$Recordset | null;
    Name: string;
    NamedParameters: boolean;
    ADODB$Parameters: ADODB$Parameters;
    Prepared: boolean;
    ADODB$Properties: ADODB$Properties;
    State: ADODB$ObjectStateEnum;
  }

  declare class ADODB$Connection {
    constructor(): this;

    /**
     * Sum of one or more of the values in the **XactAttributeEnum** enum
     */
    Attributes: ADODB$XactAttributeEnum;
    BeginTrans(): number;
    Cancel(): void;
    Close(): void;
    CommandTimeout: number;
    CommitTrans(): void;
    ConnectionString: string;
    ConnectionTimeout: number;
    CursorLocation: ADODB$CursorLocationEnum;
    DefaultDatabase: string;
    ADODB$Errors: ADODB$Errors;

    /**
 * @param Options [Options=-1]

The **RecordsAffected** parameter is meant to take a variable to be modified by reference, which is not supported by Javascript

The return value is as follows:

* If the **adExecuteNoRecords** option is passed in, the method will return `null`. Otherwise:
* If **CommandText** specifies a row-returning query, then the method will return a new read-only, forward-only **Recordset** object with the results
* If **CommandText** isn't intended to return results (e.g. an `UPDATE` statement), a closed empty **Recordset** will be returned.
 */
    Execute(
      CommandText: string,
      RecordsAffected?: void,
      Options?: ADODB$CommandTypeEnum | ADODB$ExecuteOptionEnum
    ): ADODB$Recordset | null;
    IsolationLevel: ADODB$IsolationLevelEnum;
    Mode: ADODB$ConnectModeEnum;

    /**
     * @param ConnectionString [ConnectionString='']
     * @param UserID [UserID='']
     * @param Password [Password='']
     * @param Options [Options=-1]
     */
    Open(
      ConnectionString?: string,
      UserID?: string,
      Password?: string,
      Options?: number
    ): void;

    /**
     * Returns a Recordset object that contains schema information
     * @param Schema Type of schema query to run
     * @param Restrictions A SafeArray of query constraints; depends on the [type of the schema query](https://msdn.microsoft.com/en-us/library/jj249359.aspx)
     */
    OpenSchema(
      Schema: ADODB$SchemaEnum,
      Restrictions?: SafeArray<string>
    ): ADODB$Recordset;

    /**
     * Returns a Recordset object that contains schema information, for a provider-specific schema query type
     * @param SchemaID The GUID for a provider-schema query not defined by the OLE DB specification.
     */
    OpenSchema(
      Schema: ADODB$SchemaEnum.adSchemaProviderSpecific,
      Restrictions: SafeArray<string>,
      SchemaID: string
    ): ADODB$Recordset;
    ADODB$Properties: ADODB$Properties;
    Provider: string;
    RollbackTrans(): void;
    State: ADODB$ObjectStateEnum;
    Version: string;
  }

  declare class ADODB$Error {
    constructor(): this;
    Description: string;
    HelpContext: number;
    HelpFile: string;
    NativeError: number;
    Number: number;
    Source: string;
    SQLState: string;
  }

  declare interface ADODB$Errors {
    Clear(): void;
    +Count: number;
    Item(Index: any): ADODB$Error;
    Refresh(): void;
    (Index: any): ADODB$Error;
  }

  declare class ADODB$Field {
    constructor(): this;
    ActualSize: number;
    AppendChunk(Data: any): void;

    /**
     * Sum of one or more of the values in the **FieldAttributeEnum** enum
     */
    Attributes: ADODB$FieldAttributeEnum;
    DataFormat: any;
    DefinedSize: number;
    GetChunk(Length: number): any;
    Name: string;
    NumericScale: number;
    OriginalValue: any;
    Precision: number;
    ADODB$Properties: ADODB$Properties;
    Status: number;
    Type: ADODB$DataTypeEnum;
    UnderlyingValue: any;
    Value: any;
  }

  declare interface ADODB$Fields {
    /**
     * @param DefinedSize [DefinedSize=0]
     * @param Attrib [Attrib=-1]
     */
    _Append(
      Name: string,
      Type: ADODB$DataTypeEnum,
      DefinedSize?: number,
      Attrib?: ADODB$FieldAttributeEnum
    ): void;

    /**
     * @param DefinedSize [DefinedSize=0]
     * @param Attrib [Attrib=-1]
     */
    Append(
      Name: string,
      Type: ADODB$DataTypeEnum,
      DefinedSize?: number,
      Attrib?: ADODB$FieldAttributeEnum,
      FieldValue?: any
    ): void;
    CancelUpdate(): void;
    +Count: number;
    Delete(Index: string | number): void;
    Item(Index: string | number): ADODB$Field;
    Refresh(): void;

    /**
     * @param ResyncValues [ResyncValues=2]
     */
    Resync(ResyncValues?: ADODB$ResyncEnum): void;
    Update(): void;
    (Index: string | number): ADODB$Field;
  }

  declare class ADODB$Parameter {
    constructor(): this;
    AppendChunk(Val: any): void;

    /**
     * Sum of one or more of the values in the **ParameterAttributesEnum** enum
     */
    Attributes: ADODB$ParameterAttributesEnum;
    Direction: ADODB$ParameterDirectionEnum;
    Name: string;
    NumericScale: number;
    Precision: number;
    ADODB$Properties: ADODB$Properties;
    Size: number;
    Type: ADODB$DataTypeEnum;
    Value: any;
  }

  declare interface ADODB$Parameters {
    Append(Object: any): void;
    +Count: number;
    Delete(Index: string | number): void;
    Item(Index: string | number): ADODB$Parameter;
    Refresh(): void;
    (Index: string | number): ADODB$Parameter;
  }

  declare interface ADODB$Properties {
    +Count: number;
    Item(Index: string | number): ADODB$Property;
    Refresh(): void;
    (Index: string | number): ADODB$Property;
  }

  declare class ADODB$Property {
    constructor(): this;

    /**
     * Sum of one or more of the values in the **PropertyAttributesEnum** enum
     */
    Attributes: ADODB$PropertyAttributesEnum;
    Name: string;
    Type: ADODB$DataTypeEnum;
    Value: any;
  }

  declare class ADODB$Record {
    constructor(): this;

    /**
     * Sets or returns a String value that contains a definition for a connection if the connection is closed, or a Variant containing the current Connection object if the connection is open. Default is a null object reference.
     */
    ActiveConnection: string | ADODB$Connection | null;
    Cancel(): void;
    Close(): void;

    /**
     * @param Source [Source='']
     * @param Destination [Destination='']
     * @param UserName [UserName='']
     * @param Password [Password='']
     * @param Options [Options=-1]
     * @param Async [Async=false]
     */
    CopyRecord(
      Source?: string,
      Destination?: string,
      UserName?: string,
      Password?: string,
      Options?: ADODB$CopyRecordOptionsEnum,
      Async?: boolean
    ): string;

    /**
     * @param Source [Source='']
     * @param Async [Async=false]
     */
    DeleteRecord(Source?: string, Async?: boolean): void;
    ADODB$Fields: ADODB$Fields;
    GetChildren(): ADODB$Recordset;
    Mode: ADODB$ConnectModeEnum;

    /**
     * @param Source [Source='']
     * @param Destination [Destination='']
     * @param UserName [UserName='']
     * @param Password [Password='']
     * @param Options [Options=-1]
     * @param Async [Async=false]
     */
    MoveRecord(
      Source?: string,
      Destination?: string,
      UserName?: string,
      Password?: string,
      Options?: ADODB$MoveRecordOptionsEnum,
      Async?: boolean
    ): string;

    /**
     * Source may be:
     * * A URL. If the protocol for the URL is http, then the Internet Provider will be invoked by default. If the URL points to a node that contains an executable script (such as an .ASP page), then a Record containing the source rather than the executed contents is opened by default. Use the Options argument to modify this behavior.
     * * A Record object. A Record object opened from another Record will clone the original Record object.
     * * A Command object. The opened Record object represents the single row returned by executing the Command. If the results contain more than a single row, the contents of the first row are placed in the record and an error may be added to the Errors collection.
     * * A SQL SELECT statement. The opened Record object represents the single row returned by executing the contents of the string. If the results contain more than a single row, the contents of the first row are placed in the record and an error may be added to the Errors collection.
     * * A table name.
     * @param Mode [Mode=0]
     * @param CreateOptions [CreateOptions=-1]
     * @param Options [Options=-1]
     * @param UserName [UserName='']
     * @param Password [Password='']
     */
    Open(
      Source?: string | ADODB$Record | ADODB$Recordset | ADODB$Command,
      ActiveConnection?: string | ADODB$Connection,
      Mode?: ADODB$ConnectModeEnum,
      CreateOptions?: ADODB$RecordCreateOptionsEnum,
      Options?: ADODB$RecordOpenOptionsEnum,
      UserName?: string,
      Password?: string
    ): void;
    ParentURL: string;
    ADODB$Properties: ADODB$Properties;
    RecordType: ADODB$RecordTypeEnum;
    Source: string | ADODB$Recordset | ADODB$Command;
    State: ADODB$ObjectStateEnum;
  }

  declare interface ADODB$Recordset {
    _xClone(): ADODB$Recordset;

    /**
     * @param AffectRecords [AffectRecords=3]
     */
    _xResync(AffectRecords?: ADODB$AffectEnum): void;

    /**
     * @param FileName [FileName='']
     * @param PersistFormat [PersistFormat=0]
     */
    _xSave(FileName?: string, PersistFormat?: ADODB$PersistFormatEnum): void;
    AbsolutePage: ADODB$PositionEnum;
    AbsolutePosition: ADODB$PositionEnum;
    +ActiveCommand?: ADODB$Command;

    /**
     * Sets or returns a String value that contains a definition for a connection if the connection is closed, or a Variant containing the current Connection object if the connection is open. Default is a null object reference.
     */
    ActiveConnection: string | ADODB$Connection | null;
    AddNew(): void;
    AddNew(ADODB$Fields: SafeArray<string | number>, Values: SafeArray): void;
    AddNew(ADODB$Field: string, Value: any): void;
    +BOF: boolean;
    ADODB$Bookmark: ADODB$Bookmark;
    CacheSize: number;
    Cancel(): void;

    /**
     * @param AffectRecords [AffectRecords=3]
     */
    CancelBatch(AffectRecords?: ADODB$AffectEnum): void;
    CancelUpdate(): void;

    /**
     * @param LockType [LockType=-1]
     */
    Clone(LockType?: ADODB$LockTypeEnum): ADODB$Recordset;
    Close(): void;
    Collect(Index: any): any;
    CompareBookmarks(
      Bookmark1: ADODB$Bookmark,
      Bookmark2: ADODB$Bookmark
    ): ADODB$CompareEnum;
    CursorLocation: ADODB$CursorLocationEnum;
    CursorType: ADODB$CursorTypeEnum;
    DataMember: string;
    DataSource: any;

    /**
     * @param AffectRecords [AffectRecords=1]
     */
    Delete(AffectRecords?: ADODB$AffectEnum): void;
    +EditMode: ADODB$EditModeEnum;
    +EOF: boolean;
    +ADODB$Fields: ADODB$Fields;

    /**
     * Sets or returns one of the following:
     * * Criteria string — a string made up of one or more individual clauses concatenated with AND or OR operators.
     * * Array of bookmarks — an array of unique bookmark values that point to records in the Recordset object.
     * * A FilterGroupEnum value
     */
    Filter: string | SafeArray<ADODB$Bookmark> | ADODB$FilterGroupEnum;

    /**
     * @param SkipRecords [SkipRecords=0]
     * @param SearchDirection [SearchDirection=1]
     */
    Find(
      Criteria: string,
      SkipRecords?: number,
      ADODB$SearchDirection?: ADODB$SearchDirectionEnum,
      Start?: ADODB$Bookmark
    ): void;

    /**
     * @param Rows [Rows=-1]
     */
    GetRows(
      Rows?: number,
      Start?: string | ADODB$Bookmark | ADODB$BookmarkEnum,
      ADODB$Fields?: string | SafeArray<string | number>
    ): SafeArray;

    /**
     * @param StringFormat [StringFormat=2]
     * @param NumRows [NumRows=-1]
     * @param ColumnDelimeter [ColumnDelimeter='']
     * @param RowDelimeter [RowDelimeter='']
     * @param NullExpr [NullExpr='']
     */
    GetString(
      StringFormat?: ADODB$StringFormatEnum,
      NumRows?: number,
      ColumnDelimeter?: string,
      RowDelimeter?: string,
      NullExpr?: string
    ): string;
    Index: string;
    LockType: ADODB$LockTypeEnum;
    MarshalOptions: ADODB$MarshalOptionsEnum;
    MaxRecords: number;
    Move(
      NumRecords: number,
      Start?: string | ADODB$Bookmark | ADODB$BookmarkEnum
    ): void;
    MoveFirst(): void;
    MoveLast(): void;
    MoveNext(): void;
    MovePrevious(): void;

    /**
     * Since Javascript doesn't support byref parameters, the RecordsAffected parameter cannot be used
     */
    NextRecordset(): ADODB$Recordset;

    /**
     * @param CursorType [CursorType=-1]
     * @param LockType [LockType=-1]
     * @param Options [Options=-1]
     */
    Open(
      Source: ADODB$Command,
      ActiveConnection: null,
      CursorType?: ADODB$CursorTypeEnum,
      LockType?: ADODB$LockTypeEnum,
      Options?: ADODB$CommandTypeEnum | ADODB$ExecuteOptionEnum
    ): void;
    Open(Source?: ADODB$Stream): void;

    /**
     * @param CursorType [CursorType=-1]
     * @param LockType [LockType=-1]
     * @param Options [Options=-1]
     */
    Open(
      Source: string,
      ActiveConnection: string | ADODB$Connection,
      CursorType?: ADODB$CursorTypeEnum,
      LockType?: ADODB$LockTypeEnum,
      Options?: ADODB$CommandTypeEnum | ADODB$ExecuteOptionEnum
    ): void;
    +PageCount: number;
    PageSize: number;
    +ADODB$Properties: ADODB$Properties;
    +RecordCount: number;

    /**
     * @param Options [Options=-1]
     */
    Requery(Options?: number): void;

    /**
     * @param AffectRecords [AffectRecords=3]
     * @param ResyncValues [ResyncValues=2]
     */
    Resync(
      AffectRecords?: ADODB$AffectEnum,
      ResyncValues?: ADODB$ResyncEnum
    ): void;

    /**
     * @param PersistFormat [PersistFormat=0]
     */
    Save(
      Destination: string | ADODB$Stream,
      PersistFormat?: ADODB$PersistFormatEnum
    ): void;

    /**
 * @param SeekOption [SeekOption=1]

For a single-column index, pass in a single value to seek in the column of the index

For a multi-column index, pass in a SafeArray containing the multiple values to seek in the columns of the index.
 */
    Seek(KeyValues: any, SeekOption?: ADODB$SeekEnum): void;
    Sort: string;
    Source: string | ADODB$Command;
    +State: ADODB$ObjectStateEnum;
    +Status: number;
    StayInSync: boolean;
    Supports(CursorOptions: ADODB$CursorOptionEnum): boolean;
    Update(): void;
    Update(ADODB$Fields: SafeArray<string | number>, Values: SafeArray): void;
    Update(ADODB$Field: string, Value: any): void;

    /**
     * @param AffectRecords [AffectRecords=3]
     */
    UpdateBatch(AffectRecords?: ADODB$AffectEnum): void;
    (FieldIndex: string | number): ADODB$Field;
  }

  declare class ADODB$Stream {
    constructor(): this;
    Cancel(): void;
    Charset: string;
    Close(): void;

    /**
     * @param CharNumber [CharNumber=-1]
     */
    CopyTo(DestStream: ADODB$Stream, CharNumber?: number): void;
    EOS: boolean;
    Flush(): void;
    LineSeparator: ADODB$LineSeparatorEnum;
    LoadFromFile(FileName: string): void;
    Mode: ADODB$ConnectModeEnum;

    /**
     * @param Mode [Mode=0]
     * @param Options [Options=-1]
     * @param UserName [UserName='']
     * @param Password [Password='']
     */
    Open(
      Source?: string | ADODB$Record,
      Mode?: ADODB$ConnectModeEnum,
      Options?: ADODB$StreamOpenOptionsEnum,
      UserName?: string,
      Password?: string
    ): void;
    Position: number;

    /**
     * @param NumBytes [NumBytes=-1]
     */
    Read(NumBytes?: number): any;

    /**
     * @param NumChars [NumChars=-1]
     */
    ReadText(NumChars?: number): string;

    /**
     * @param Options [Options=1]
     */
    SaveToFile(FileName: string, Options?: ADODB$SaveOptionsEnum): void;
    SetEOS(): void;
    Size: number;
    SkipLine(): void;
    State: ADODB$ObjectStateEnum;
    Type: ADODB$StreamTypeEnum;
    Write(Buffer: any): void;

    /**
     * @param Options [Options=0]
     */
    WriteText(Data: string, Options?: ADODB$StreamWriteEnum): void;
  }

  declare type EventHelperTypes$Connection_ExecuteComplete_ArgNames = [
    "RecordsAffected",
    "pError",
    "adStatus",
    "pCommand",
    "pRecordset",
    "pConnection"
  ];

  declare type EventHelperTypes$Connection_WillConnect_ArgNames = [
    "ConnectionString",
    "UserID",
    "Password",
    "Options",
    "adStatus",
    "pConnection"
  ];

  declare type EventHelperTypes$Connection_WillExecute_ArgNames = [
    "Source",
    "CursorType",
    "LockType",
    "Options",
    "adStatus",
    "pCommand",
    "pRecordset",
    "pConnection"
  ];

  declare interface EventHelperTypes$Connection_ExecuteComplete_Parameter {
    adStatus: ADODB$EventStatusEnum;
    +pCommand: ADODB$Command;
    +pConnection: ADODB$Connection;
    +pError: ADODB$Error;
    +pRecordset: ADODB$Recordset;
    +RecordsAffected: number;
  }

  declare interface EventHelperTypes$Connection_WillConnect_Parameter {
    adStatus: ADODB$EventStatusEnum;
    ConnectionString: string;
    Options: number;
    Password: string;
    +pConnection: ADODB$Connection;
    UserID: string;
  }

  declare interface EventHelperTypes$Connection_WillExecute_Parameter {
    adStatus: ADODB$EventStatusEnum;
    CursorType: ADODB$CursorTypeEnum;
    LockType: ADODB$LockTypeEnum;
    Options: number;
    +pCommand: ADODB$Command;
    +pConnection: ADODB$Connection;
    +pRecordset: ADODB$Recordset;
    Source: string;
  }
  declare interface ActiveXObject {
    on(
      obj: ADODB$ADODB$Connection,
      event: "BeginTransComplete",
      argNames: ["TransactionLevel", "pError", "adStatus", "pConnection"],
      handler: (parameter: {
        +TransactionLevel: number,
        +pError: ADODB$ADODB$Error,
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pConnection: ADODB$ADODB$Connection
      }) => void
    ): void;
    on(
      obj: ADODB$ADODB$Connection,
      event:
        | "CommitTransComplete"
        | "ConnectComplete"
        | "InfoMessage"
        | "RollbackTransComplete",
      argNames: ["pError", "adStatus", "pConnection"],
      handler: (parameter: {
        +pError: ADODB$ADODB$Error,
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pConnection: ADODB$ADODB$Connection
      }) => void
    ): void;
    on(
      obj: ADODB$ADODB$Connection,
      event: "Disconnect",
      argNames: ["adStatus", "pConnection"],
      handler: (parameter: {
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pConnection: ADODB$ADODB$Connection
      }) => void
    ): void;
    on(
      obj: ADODB$ADODB$Connection,
      event: "ExecuteComplete",
      argNames: ADODB$EventHelperTypes.EventHelperTypes$Connection_ExecuteComplete_ArgNames,
      handler: (
        parameter: ADODB$EventHelperTypes.EventHelperTypes$Connection_ExecuteComplete_Parameter
      ) => void
    ): void;
    on(
      obj: ADODB$ADODB$Connection,
      event: "WillConnect",
      argNames: ADODB$EventHelperTypes.EventHelperTypes$Connection_WillConnect_ArgNames,
      handler: (
        parameter: ADODB$EventHelperTypes.EventHelperTypes$Connection_WillConnect_Parameter
      ) => void
    ): void;
    on(
      obj: ADODB$ADODB$Connection,
      event: "WillExecute",
      argNames: ADODB$EventHelperTypes.EventHelperTypes$Connection_WillExecute_ArgNames,
      handler: (
        parameter: ADODB$EventHelperTypes.EventHelperTypes$Connection_WillExecute_Parameter
      ) => void
    ): void;
    on(
      obj: ADODB$ADODB$Recordset,
      event: "EndOfRecordset",
      argNames: ["fMoreData", "adStatus", "pRecordset"],
      handler: (parameter: {
        fMoreData: boolean,
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pRecordset: ADODB$ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$ADODB$Recordset,
      event: "FetchComplete",
      argNames: ["pError", "adStatus", "pRecordset"],
      handler: (parameter: {
        +pError: ADODB$ADODB$Error,
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pRecordset: ADODB$ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$ADODB$Recordset,
      event: "FetchProgress",
      argNames: ["Progress", "MaxProgress", "adStatus", "pRecordset"],
      handler: (parameter: {
        +Progress: number,
        +MaxProgress: number,
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pRecordset: ADODB$ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$ADODB$Recordset,
      event: "FieldChangeComplete",
      argNames: ["cFields", "Fields", "pError", "adStatus", "pRecordset"],
      handler: (parameter: {
        +cFields: number,
        +ADODB$Fields: any,
        +pError: ADODB$ADODB$Error,
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pRecordset: ADODB$ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$ADODB$Recordset,
      event: "MoveComplete" | "RecordsetChangeComplete",
      argNames: ["adReason", "pError", "adStatus", "pRecordset"],
      handler: (parameter: {
        +adReason: ADODB$ADODB$EventReasonEnum,
        +pError: ADODB$ADODB$Error,
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pRecordset: ADODB$ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$ADODB$Recordset,
      event: "RecordChangeComplete",
      argNames: ["adReason", "cRecords", "pError", "adStatus", "pRecordset"],
      handler: (parameter: {
        +adReason: ADODB$ADODB$EventReasonEnum,
        +cRecords: number,
        +pError: ADODB$ADODB$Error,
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pRecordset: ADODB$ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$ADODB$Recordset,
      event: "WillChangeField",
      argNames: ["cFields", "Fields", "adStatus", "pRecordset"],
      handler: (parameter: {
        +cFields: number,
        +ADODB$Fields: any,
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pRecordset: ADODB$ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$ADODB$Recordset,
      event: "WillChangeRecord",
      argNames: ["adReason", "cRecords", "adStatus", "pRecordset"],
      handler: (parameter: {
        +adReason: ADODB$ADODB$EventReasonEnum,
        +cRecords: number,
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pRecordset: ADODB$ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$ADODB$Recordset,
      event: "WillChangeRecordset" | "WillMove",
      argNames: ["adReason", "adStatus", "pRecordset"],
      handler: (parameter: {
        +adReason: ADODB$ADODB$EventReasonEnum,
        adStatus: ADODB$ADODB$EventStatusEnum,
        +pRecordset: ADODB$ADODB$Recordset
      }) => void
    ): void;
    set(
      obj: ADODB$ADODB$Recordset,
      propertyName: "Collect",
      parameterTypes: [any],
      newValue: any
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "ADODB.Command": ADODB$ADODB$Command;
    "ADODB.Connection": ADODB$ADODB$Connection;
    "ADODB.Parameter": ADODB$ADODB$Parameter;
    "ADODB.Record": ADODB$ADODB$Record;
    "ADODB.Recordset": ADODB$ADODB$Recordset;
    "ADODB.Stream": ADODB$ADODB$Stream;
  }
}
