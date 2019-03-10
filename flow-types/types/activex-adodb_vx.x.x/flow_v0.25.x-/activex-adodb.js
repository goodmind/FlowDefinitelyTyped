declare module "activex-adodb" {
  declare var npm$namespace$ADODB: {
    ADCPROP_ASYNCTHREADPRIORITY_ENUM: typeof ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM,
    ADCPROP_AUTORECALC_ENUM: typeof ADODB$ADCPROP_AUTORECALC_ENUM,
    ADCPROP_UPDATECRITERIA_ENUM: typeof ADODB$ADCPROP_UPDATECRITERIA_ENUM,
    ADCPROP_UPDATERESYNC_ENUM: typeof ADODB$ADCPROP_UPDATERESYNC_ENUM,
    AffectEnum: typeof ADODB$AffectEnum,
    BookmarkEnum: typeof ADODB$BookmarkEnum,
    CommandTypeEnum: typeof ADODB$CommandTypeEnum,
    CompareEnum: typeof ADODB$CompareEnum,
    ConnectModeEnum: typeof ADODB$ConnectModeEnum,
    ConnectOptionEnum: typeof ADODB$ConnectOptionEnum,
    ConnectPromptEnum: typeof ADODB$ConnectPromptEnum,
    CopyRecordOptionsEnum: typeof ADODB$CopyRecordOptionsEnum,
    CursorLocationEnum: typeof ADODB$CursorLocationEnum,
    CursorOptionEnum: typeof ADODB$CursorOptionEnum,
    CursorTypeEnum: typeof ADODB$CursorTypeEnum,
    DataTypeEnum: typeof ADODB$DataTypeEnum,
    EditModeEnum: typeof ADODB$EditModeEnum,
    ErrorValueEnum: typeof ADODB$ErrorValueEnum,
    EventReasonEnum: typeof ADODB$EventReasonEnum,
    EventStatusEnum: typeof ADODB$EventStatusEnum,
    ExecuteOptionEnum: typeof ADODB$ExecuteOptionEnum,
    FieldAttributeEnum: typeof ADODB$FieldAttributeEnum,
    FieldEnum: typeof ADODB$FieldEnum,
    FieldStatusEnum: typeof ADODB$FieldStatusEnum,
    FilterGroupEnum: typeof ADODB$FilterGroupEnum,
    GetRowsOptionEnum: typeof ADODB$GetRowsOptionEnum,
    IsolationLevelEnum: typeof ADODB$IsolationLevelEnum,
    LineSeparatorEnum: typeof ADODB$LineSeparatorEnum,
    LockTypeEnum: typeof ADODB$LockTypeEnum,
    MarshalOptionsEnum: typeof ADODB$MarshalOptionsEnum,
    MoveRecordOptionsEnum: typeof ADODB$MoveRecordOptionsEnum,
    ObjectStateEnum: typeof ADODB$ObjectStateEnum,
    ParameterAttributesEnum: typeof ADODB$ParameterAttributesEnum,
    ParameterDirectionEnum: typeof ADODB$ParameterDirectionEnum,
    PersistFormatEnum: typeof ADODB$PersistFormatEnum,
    PositionEnum: typeof ADODB$PositionEnum,
    PositionEnum_Param: typeof ADODB$PositionEnum_Param,
    PropertyAttributesEnum: typeof ADODB$PropertyAttributesEnum,
    RecordCreateOptionsEnum: typeof ADODB$RecordCreateOptionsEnum,
    RecordOpenOptionsEnum: typeof ADODB$RecordOpenOptionsEnum,
    RecordStatusEnum: typeof ADODB$RecordStatusEnum,
    RecordTypeEnum: typeof ADODB$RecordTypeEnum,
    ResyncEnum: typeof ADODB$ResyncEnum,
    SaveOptionsEnum: typeof ADODB$SaveOptionsEnum,
    SchemaEnum: typeof ADODB$SchemaEnum,
    SearchDirection: typeof ADODB$SearchDirection,
    SearchDirectionEnum: typeof ADODB$SearchDirectionEnum,
    SeekEnum: typeof ADODB$SeekEnum,
    StreamOpenOptionsEnum: typeof ADODB$StreamOpenOptionsEnum,
    StreamReadEnum: typeof ADODB$StreamReadEnum,
    StreamTypeEnum: typeof ADODB$StreamTypeEnum,
    StreamWriteEnum: typeof ADODB$StreamWriteEnum,
    StringFormatEnum: typeof ADODB$StringFormatEnum,
    XactAttributeEnum: typeof ADODB$XactAttributeEnum,
    Bookmark: typeof ADODB$Bookmark,
    Command: typeof ADODB$Command,
    Connection: typeof ADODB$Connection,
    Error: typeof ADODB$Error,
    Field: typeof ADODB$Field,
    Parameter: typeof ADODB$Parameter,
    Property: typeof ADODB$Property,
    Record: typeof ADODB$Record,
    Stream: typeof ADODB$Stream
  };

  declare var ADODB$ADCPROP_ASYNCTHREADPRIORITY_ENUM: {|
    +adPriorityAboveNormal: 4, // 4
    +adPriorityBelowNormal: 2, // 2
    +adPriorityHighest: 5, // 5
    +adPriorityLowest: 1, // 1
    +adPriorityNormal: 3 // 3
  |};

  declare var ADODB$ADCPROP_AUTORECALC_ENUM: {|
    +adRecalcAlways: 1, // 1
    +adRecalcUpFront: 0 // 0
  |};

  declare var ADODB$ADCPROP_UPDATECRITERIA_ENUM: {|
    +adCriteriaAllCols: 1, // 1
    +adCriteriaKey: 0, // 0
    +adCriteriaTimeStamp: 3, // 3
    +adCriteriaUpdCols: 2 // 2
  |};

  declare var ADODB$ADCPROP_UPDATERESYNC_ENUM: {|
    +adResyncAll: 15, // 15
    +adResyncAutoIncrement: 1, // 1
    +adResyncConflicts: 2, // 2
    +adResyncInserts: 8, // 8
    +adResyncNone: 0, // 0
    +adResyncUpdates: 4 // 4
  |};

  declare var ADODB$AffectEnum: {|
    +adAffectAll: 3, // 3
    +adAffectAllChapters: 4, // 4
    +adAffectCurrent: 1, // 1
    +adAffectGroup: 2 // 2
  |};

  declare var ADODB$BookmarkEnum: {|
    +adBookmarkCurrent: 0, // 0
    +adBookmarkFirst: 1, // 1
    +adBookmarkLast: 2 // 2
  |};

  declare var ADODB$CommandTypeEnum: {|
    +adCmdFile: 256, // 256
    +adCmdStoredProc: 4, // 4
    +adCmdTable: 2, // 2
    +adCmdTableDirect: 512, // 512
    +adCmdText: 1, // 1
    +adCmdUnknown: 8, // 8
    +adCmdUnspecified: -1 // -1
  |};

  declare var ADODB$CompareEnum: {|
    +adCompareEqual: 1, // 1
    +adCompareGreaterThan: 2, // 2
    +adCompareLessThan: 0, // 0
    +adCompareNotComparable: 4, // 4
    +adCompareNotEqual: 3 // 3
  |};

  declare var ADODB$ConnectModeEnum: {|
    +adModeRead: 1, // 1
    +adModeReadWrite: 3, // 3
    +adModeRecursive: 4194304, // 4194304
    +adModeShareDenyNone: 16, // 16
    +adModeShareDenyRead: 4, // 4
    +adModeShareDenyWrite: 8, // 8
    +adModeShareExclusive: 12, // 12
    +adModeUnknown: 0, // 0
    +adModeWrite: 2 // 2
  |};

  declare var ADODB$ConnectOptionEnum: {|
    +adAsyncConnect: 16, // 16
    +adConnectUnspecified: -1 // -1
  |};

  declare var ADODB$ConnectPromptEnum: {|
    +adPromptAlways: 1, // 1
    +adPromptComplete: 2, // 2
    +adPromptCompleteRequired: 3, // 3
    +adPromptNever: 4 // 4
  |};

  declare var ADODB$CopyRecordOptionsEnum: {|
    +adCopyAllowEmulation: 4, // 4
    +adCopyNonRecursive: 2, // 2
    +adCopyOverWrite: 1, // 1
    +adCopyUnspecified: -1 // -1
  |};

  declare var ADODB$CursorLocationEnum: {|
    +adUseClient: 3, // 3
    +adUseClientBatch: 3, // 3
    +adUseNone: 1, // 1
    +adUseServer: 2 // 2
  |};

  declare var ADODB$CursorOptionEnum: {|
    +adAddNew: 16778240, // 16778240
    +adApproxPosition: 16384, // 16384
    +adBookmark: 8192, // 8192
    +adDelete: 16779264, // 16779264
    +adFind: 524288, // 524288
    +adHoldRecords: 256, // 256
    +adIndex: 8388608, // 8388608
    +adMovePrevious: 512, // 512
    +adNotify: 262144, // 262144
    +adResync: 131072, // 131072
    +adSeek: 4194304, // 4194304
    +adUpdate: 16809984, // 16809984
    +adUpdateBatch: 65536 // 65536
  |};

  declare var ADODB$CursorTypeEnum: {|
    +adOpenDynamic: 2, // 2
    +adOpenForwardOnly: 0, // 0
    +adOpenKeyset: 1, // 1
    +adOpenStatic: 3, // 3
    +adOpenUnspecified: -1 // -1
  |};

  declare var ADODB$DataTypeEnum: {|
    +adArray: 8192, // 8192
    +adBigInt: 20, // 20
    +adBinary: 128, // 128
    +adBoolean: 11, // 11
    +adBSTR: 8, // 8
    +adChapter: 136, // 136
    +adChar: 129, // 129
    +adCurrency: 6, // 6
    +adDate: 7, // 7
    +adDBDate: 133, // 133
    +adDBTime: 134, // 134
    +adDBTimeStamp: 135, // 135
    +adDecimal: 14, // 14
    +adDouble: 5, // 5
    +adEmpty: 0, // 0
    +adError: 10, // 10
    +adFileTime: 64, // 64
    +adGUID: 72, // 72
    +adIDispatch: 9, // 9
    +adInteger: 3, // 3
    +adIUnknown: 13, // 13
    +adLongVarBinary: 205, // 205
    +adLongVarChar: 201, // 201
    +adLongVarWChar: 203, // 203
    +adNumeric: 131, // 131
    +adPropVariant: 138, // 138
    +adSingle: 4, // 4
    +adSmallInt: 2, // 2
    +adTinyInt: 16, // 16
    +adUnsignedBigInt: 21, // 21
    +adUnsignedInt: 19, // 19
    +adUnsignedSmallInt: 18, // 18
    +adUnsignedTinyInt: 17, // 17
    +adUserDefined: 132, // 132
    +adVarBinary: 204, // 204
    +adVarChar: 200, // 200
    +adVariant: 12, // 12
    +adVarNumeric: 139, // 139
    +adVarWChar: 202, // 202
    +adWChar: 130 // 130
  |};

  declare var ADODB$EditModeEnum: {|
    +adEditAdd: 2, // 2
    +adEditDelete: 4, // 4
    +adEditInProgress: 1, // 1
    +adEditNone: 0 // 0
  |};

  declare var ADODB$ErrorValueEnum: {|
    +adErrBoundToCommand: 3707, // 3707
    +adErrCannotComplete: 3732, // 3732
    +adErrCantChangeConnection: 3748, // 3748
    +adErrCantChangeProvider: 3220, // 3220
    +adErrCantConvertvalue: 3724, // 3724
    +adErrCantCreate: 3725, // 3725
    +adErrCatalogNotSet: 3747, // 3747
    +adErrColumnNotOnThisRow: 3726, // 3726
    +adErrConnectionStringTooLong: 3754, // 3754
    +adErrDataConversion: 3421, // 3421
    +adErrDataOverflow: 3721, // 3721
    +adErrDelResOutOfScope: 3738, // 3738
    +adErrDenyNotSupported: 3750, // 3750
    +adErrDenyTypeNotSupported: 3751, // 3751
    +adErrFeatureNotAvailable: 3251, // 3251
    +adErrFieldsUpdateFailed: 3749, // 3749
    +adErrIllegalOperation: 3219, // 3219
    +adErrIntegrityViolation: 3719, // 3719
    +adErrInTransaction: 3246, // 3246
    +adErrInvalidArgument: 3001, // 3001
    +adErrInvalidConnection: 3709, // 3709
    +adErrInvalidParamInfo: 3708, // 3708
    +adErrInvalidTransaction: 3714, // 3714
    +adErrInvalidURL: 3729, // 3729
    +adErrItemNotFound: 3265, // 3265
    +adErrNoCurrentRecord: 3021, // 3021
    +adErrNotExecuting: 3715, // 3715
    +adErrNotReentrant: 3710, // 3710
    +adErrObjectClosed: 3704, // 3704
    +adErrObjectInCollection: 3367, // 3367
    +adErrObjectNotSet: 3420, // 3420
    +adErrObjectOpen: 3705, // 3705
    +adErrOpeningFile: 3002, // 3002
    +adErrOperationCancelled: 3712, // 3712
    +adErrOutOfSpace: 3734, // 3734
    +adErrPermissionDenied: 3720, // 3720
    +adErrPropConflicting: 3742, // 3742
    +adErrPropInvalidColumn: 3739, // 3739
    +adErrPropInvalidOption: 3740, // 3740
    +adErrPropInvalidValue: 3741, // 3741
    +adErrPropNotAllSettable: 3743, // 3743
    +adErrPropNotSet: 3744, // 3744
    +adErrPropNotSettable: 3745, // 3745
    +adErrPropNotSupported: 3746, // 3746
    +adErrProviderFailed: 3000, // 3000
    +adErrProviderNotFound: 3706, // 3706
    +adErrProviderNotSpecified: 3753, // 3753
    +adErrReadFile: 3003, // 3003
    +adErrResourceExists: 3731, // 3731
    +adErrResourceLocked: 3730, // 3730
    +adErrResourceOutOfScope: 3735, // 3735
    +adErrSchemaViolation: 3722, // 3722
    +adErrSignMismatch: 3723, // 3723
    +adErrStillConnecting: 3713, // 3713
    +adErrStillExecuting: 3711, // 3711
    +adErrTreePermissionDenied: 3728, // 3728
    +adErrUnavailable: 3736, // 3736
    +adErrUnsafeOperation: 3716, // 3716
    +adErrURLDoesNotExist: 3727, // 3727
    +adErrURLNamedRowDoesNotExist: 3737, // 3737
    +adErrVolumeNotFound: 3733, // 3733
    +adErrWriteFile: 3004, // 3004
    +adwrnSecurityDialog: 3717, // 3717
    +adwrnSecurityDialogHeader: 3718 // 3718
  |};

  declare var ADODB$EventReasonEnum: {|
    +adRsnAddNew: 1, // 1
    +adRsnClose: 9, // 9
    +adRsnDelete: 2, // 2
    +adRsnFirstChange: 11, // 11
    +adRsnMove: 10, // 10
    +adRsnMoveFirst: 12, // 12
    +adRsnMoveLast: 15, // 15
    +adRsnMoveNext: 13, // 13
    +adRsnMovePrevious: 14, // 14
    +adRsnRequery: 7, // 7
    +adRsnResynch: 8, // 8
    +adRsnUndoAddNew: 5, // 5
    +adRsnUndoDelete: 6, // 6
    +adRsnUndoUpdate: 4, // 4
    +adRsnUpdate: 3 // 3
  |};

  declare var ADODB$EventStatusEnum: {|
    +adStatusCancel: 4, // 4
    +adStatusCantDeny: 3, // 3
    +adStatusErrorsOccurred: 2, // 2
    +adStatusOK: 1, // 1
    +adStatusUnwantedEvent: 5 // 5
  |};

  declare var ADODB$ExecuteOptionEnum: {|
    +adAsyncExecute: 16, // 16
    +adAsyncFetch: 32, // 32
    +adAsyncFetchNonBlocking: 64, // 64
    +adExecuteNoRecords: 128, // 128
    +adExecuteRecord: 2048, // 2048
    +adExecuteStream: 1024, // 1024
    +adOptionUnspecified: -1 // -1
  |};

  declare var ADODB$FieldAttributeEnum: {|
    +adFldCacheDeferred: 4096, // 4096
    +adFldFixed: 16, // 16
    +adFldIsChapter: 8192, // 8192
    +adFldIsCollection: 262144, // 262144
    +adFldIsDefaultStream: 131072, // 131072
    +adFldIsNullable: 32, // 32
    +adFldIsRowURL: 65536, // 65536
    +adFldKeyColumn: 32768, // 32768
    +adFldLong: 128, // 128
    +adFldMayBeNull: 64, // 64
    +adFldMayDefer: 2, // 2
    +adFldNegativeScale: 16384, // 16384
    +adFldRowID: 256, // 256
    +adFldRowVersion: 512, // 512
    +adFldUnknownUpdatable: 8, // 8
    +adFldUnspecified: -1, // -1
    +adFldUpdatable: 4 // 4
  |};

  declare var ADODB$FieldEnum: {|
    +adDefaultStream: -1, // -1
    +adRecordURL: -2 // -2
  |};

  declare var ADODB$FieldStatusEnum: {|
    +adFieldAlreadyExists: 26, // 26
    +adFieldBadStatus: 12, // 12
    +adFieldCannotComplete: 20, // 20
    +adFieldCannotDeleteSource: 23, // 23
    +adFieldCantConvertValue: 2, // 2
    +adFieldCantCreate: 7, // 7
    +adFieldDataOverflow: 6, // 6
    +adFieldDefault: 13, // 13
    +adFieldDoesNotExist: 16, // 16
    +adFieldIgnore: 15, // 15
    +adFieldIntegrityViolation: 10, // 10
    +adFieldInvalidURL: 17, // 17
    +adFieldIsNull: 3, // 3
    +adFieldOK: 0, // 0
    +adFieldOutOfSpace: 22, // 22
    +adFieldPendingChange: 262144, // 262144
    +adFieldPendingDelete: 131072, // 131072
    +adFieldPendingInsert: 65536, // 65536
    +adFieldPendingUnknown: 524288, // 524288
    +adFieldPendingUnknownDelete: 1048576, // 1048576
    +adFieldPermissionDenied: 9, // 9
    +adFieldReadOnly: 24, // 24
    +adFieldResourceExists: 19, // 19
    +adFieldResourceLocked: 18, // 18
    +adFieldResourceOutOfScope: 25, // 25
    +adFieldSchemaViolation: 11, // 11
    +adFieldSignMismatch: 5, // 5
    +adFieldTruncated: 4, // 4
    +adFieldUnavailable: 8, // 8
    +adFieldVolumeNotFound: 21 // 21
  |};

  declare var ADODB$FilterGroupEnum: {|
    +adFilterAffectedRecords: 2, // 2
    +adFilterConflictingRecords: 5, // 5
    +adFilterFetchedRecords: 3, // 3
    +adFilterNone: 0, // 0
    +adFilterPendingRecords: 1, // 1
    +adFilterPredicate: 4 // 4
  |};

  declare var ADODB$GetRowsOptionEnum: {|
    +adGetRowsRest: -1 // -1
  |};

  declare var ADODB$IsolationLevelEnum: {|
    +adXactBrowse: 256, // 256
    +adXactChaos: 16, // 16
    +adXactCursorStability: 4096, // 4096
    +adXactIsolated: 1048576, // 1048576
    +adXactReadCommitted: 4096, // 4096
    +adXactReadUncommitted: 256, // 256
    +adXactRepeatableRead: 65536, // 65536
    +adXactSerializable: 1048576, // 1048576
    +adXactUnspecified: -1 // -1
  |};

  declare var ADODB$LineSeparatorEnum: {|
    +adCR: 13, // 13
    +adCRLF: -1, // -1
    +adLF: 10 // 10
  |};

  declare var ADODB$LockTypeEnum: {|
    +adLockBatchOptimistic: 4, // 4
    +adLockOptimistic: 3, // 3
    +adLockPessimistic: 2, // 2
    +adLockReadOnly: 1, // 1
    +adLockUnspecified: -1 // -1
  |};

  declare var ADODB$MarshalOptionsEnum: {|
    +adMarshalAll: 0, // 0
    +adMarshalModifiedOnly: 1 // 1
  |};

  declare var ADODB$MoveRecordOptionsEnum: {|
    +adMoveAllowEmulation: 4, // 4
    +adMoveDontUpdateLinks: 2, // 2
    +adMoveOverWrite: 1, // 1
    +adMoveUnspecified: -1 // -1
  |};

  declare var ADODB$ObjectStateEnum: {|
    +adStateClosed: 0, // 0
    +adStateConnecting: 2, // 2
    +adStateExecuting: 4, // 4
    +adStateFetching: 8, // 8
    +adStateOpen: 1 // 1
  |};

  declare var ADODB$ParameterAttributesEnum: {|
    +adParamLong: 128, // 128
    +adParamNullable: 64, // 64
    +adParamSigned: 16 // 16
  |};

  declare var ADODB$ParameterDirectionEnum: {|
    +adParamInput: 1, // 1
    +adParamInputOutput: 3, // 3
    +adParamOutput: 2, // 2
    +adParamReturnValue: 4, // 4
    +adParamUnknown: 0 // 0
  |};

  declare var ADODB$PersistFormatEnum: {|
    +adPersistADTG: 0, // 0
    +adPersistXML: 1 // 1
  |};

  declare var ADODB$PositionEnum: {|
    +adPosBOF: -2, // -2
    +adPosEOF: -3, // -3
    +adPosUnknown: -1 // -1
  |};

  declare var ADODB$PositionEnum_Param: {|
    +adPosBOF: -2, // -2
    +adPosEOF: -3, // -3
    +adPosUnknown: -1 // -1
  |};

  declare var ADODB$PropertyAttributesEnum: {|
    +adPropNotSupported: 0, // 0
    +adPropOptional: 2, // 2
    +adPropRead: 512, // 512
    +adPropRequired: 1, // 1
    +adPropWrite: 1024 // 1024
  |};

  declare var ADODB$RecordCreateOptionsEnum: {|
    +adCreateCollection: 8192, // 8192
    +adCreateNonCollection: 0, // 0
    +adCreateOverwrite: 67108864, // 67108864
    +adCreateStructDoc: -2147483648, // -2147483648
    +adFailIfNotExists: -1, // -1
    +adOpenIfExists: 33554432 // 33554432
  |};

  declare var ADODB$RecordOpenOptionsEnum: {|
    +adDelayFetchFields: 32768, // 32768
    +adDelayFetchStream: 16384, // 16384
    +adOpenAsync: 4096, // 4096
    +adOpenExecuteCommand: 65536, // 65536
    +adOpenOutput: 8388608, // 8388608
    +adOpenRecordUnspecified: -1, // -1
    +adOpenSource: 8388608 // 8388608
  |};

  declare var ADODB$RecordStatusEnum: {|
    +adRecCanceled: 256, // 256
    +adRecCantRelease: 1024, // 1024
    +adRecConcurrencyViolation: 2048, // 2048
    +adRecDBDeleted: 262144, // 262144
    +adRecDeleted: 4, // 4
    +adRecIntegrityViolation: 4096, // 4096
    +adRecInvalid: 16, // 16
    +adRecMaxChangesExceeded: 8192, // 8192
    +adRecModified: 2, // 2
    +adRecMultipleChanges: 64, // 64
    +adRecNew: 1, // 1
    +adRecObjectOpen: 16384, // 16384
    +adRecOK: 0, // 0
    +adRecOutOfMemory: 32768, // 32768
    +adRecPendingChanges: 128, // 128
    +adRecPermissionDenied: 65536, // 65536
    +adRecSchemaViolation: 131072, // 131072
    +adRecUnmodified: 8 // 8
  |};

  declare var ADODB$RecordTypeEnum: {|
    +adCollectionRecord: 1, // 1
    +adSimpleRecord: 0, // 0
    +adStructDoc: 2 // 2
  |};

  declare var ADODB$ResyncEnum: {|
    +adResyncAllValues: 2, // 2
    +adResyncUnderlyingValues: 1 // 1
  |};

  declare var ADODB$SaveOptionsEnum: {|
    +adSaveCreateNotExist: 1, // 1
    +adSaveCreateOverWrite: 2 // 2
  |};

  declare var ADODB$SchemaEnum: {|
    +adSchemaActions: 41, // 41
    +adSchemaAsserts: 0, // 0
    +adSchemaCatalogs: 1, // 1
    +adSchemaCharacterSets: 2, // 2
    +adSchemaCheckConstraints: 5, // 5
    +adSchemaCollations: 3, // 3
    +adSchemaColumnPrivileges: 13, // 13
    +adSchemaColumns: 4, // 4
    +adSchemaColumnsDomainUsage: 11, // 11
    +adSchemaCommands: 42, // 42
    +adSchemaConstraintColumnUsage: 6, // 6
    +adSchemaConstraintTableUsage: 7, // 7
    +adSchemaCubes: 32, // 32
    +adSchemaDBInfoKeywords: 30, // 30
    +adSchemaDBInfoLiterals: 31, // 31
    +adSchemaDimensions: 33, // 33
    +adSchemaForeignKeys: 27, // 27
    +adSchemaFunctions: 40, // 40
    +adSchemaHierarchies: 34, // 34
    +adSchemaIndexes: 12, // 12
    +adSchemaKeyColumnUsage: 8, // 8
    +adSchemaLevels: 35, // 35
    +adSchemaMeasures: 36, // 36
    +adSchemaMembers: 38, // 38
    +adSchemaPrimaryKeys: 28, // 28
    +adSchemaProcedureColumns: 29, // 29
    +adSchemaProcedureParameters: 26, // 26
    +adSchemaProcedures: 16, // 16
    +adSchemaProperties: 37, // 37
    +adSchemaProviderSpecific: -1, // -1
    +adSchemaProviderTypes: 22, // 22
    +adSchemaReferentialConstraints: 9, // 9
    +adSchemaReferentialContraints: 9, // 9
    +adSchemaSchemata: 17, // 17
    +adSchemaSets: 43, // 43
    +adSchemaSQLLanguages: 18, // 18
    +adSchemaStatistics: 19, // 19
    +adSchemaTableConstraints: 10, // 10
    +adSchemaTablePrivileges: 14, // 14
    +adSchemaTables: 20, // 20
    +adSchemaTranslations: 21, // 21
    +adSchemaTrustees: 39, // 39
    +adSchemaUsagePrivileges: 15, // 15
    +adSchemaViewColumnUsage: 24, // 24
    +adSchemaViews: 23, // 23
    +adSchemaViewTableUsage: 25 // 25
  |};

  declare var ADODB$SearchDirection: {|
    +adSearchBackward: -1, // -1
    +adSearchForward: 1 // 1
  |};

  declare var ADODB$SearchDirectionEnum: {|
    +adSearchBackward: -1, // -1
    +adSearchForward: 1 // 1
  |};

  declare var ADODB$SeekEnum: {|
    +adSeekAfter: 8, // 8
    +adSeekAfterEQ: 4, // 4
    +adSeekBefore: 32, // 32
    +adSeekBeforeEQ: 16, // 16
    +adSeekFirstEQ: 1, // 1
    +adSeekLastEQ: 2 // 2
  |};

  declare var ADODB$StreamOpenOptionsEnum: {|
    +adOpenStreamAsync: 1, // 1
    +adOpenStreamFromRecord: 4, // 4
    +adOpenStreamUnspecified: -1 // -1
  |};

  declare var ADODB$StreamReadEnum: {|
    +adReadAll: -1, // -1
    +adReadLine: -2 // -2
  |};

  declare var ADODB$StreamTypeEnum: {|
    +adTypeBinary: 1, // 1
    +adTypeText: 2 // 2
  |};

  declare var ADODB$StreamWriteEnum: {|
    +adWriteChar: 0, // 0
    +adWriteLine: 1, // 1
    +stWriteChar: 0, // 0
    +stWriteLine: 1 // 1
  |};

  declare var ADODB$StringFormatEnum: {|
    +adClipString: 2 // 2
  |};

  declare var ADODB$XactAttributeEnum: {|
    +adXactAbortRetaining: 262144, // 262144
    +adXactAsyncPhaseOne: 524288, // 524288
    +adXactCommitRetaining: 131072, // 131072
    +adXactSyncPhaseOne: 1048576 // 1048576
  |};

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
    CommandType: $Values<typeof ADODB$CommandTypeEnum>;

    /**
     * @param Name [Name='']
     * @param Type [Type=0]
     * @param Direction [Direction=1]
     * @param Size [Size=0]
     */
    CreateParameter(
      Name?: string,
      Type?: $Values<typeof ADODB$DataTypeEnum>,
      Direction?: $Values<typeof ADODB$ParameterDirectionEnum>,
      Size?: number,
      Value?: any
    ): ADODB$Parameter;
    Dialect: string;

    /**
     * @param Options [Options=-1]
     *
     * The **RecordsAffected** parameter is meant to take a variable to be modified by reference, which is not supported by Javascript
     *
     * The return value is as follows:
     *
     * * If the **adExecuteNoRecords** option is passed in, the method will return `null`. Otherwise:
     * * If the command specifies a row-returning query, then the method will return a new read-only, forward-only **Recordset** object with the results.
     * * If the command isn't intended to return results (e.g. an `UPDATE` statement), a closed empty **Recordset** will be returned.
     */
    Execute(
      RecordsAffected?: void,
      Parameters?: SafeArray,
      Options?: number
    ): ADODB$Recordset | null;
    Name: string;
    NamedParameters: boolean;
    ADODB$Parameters: ADODB$Parameters;
    Prepared: boolean;
    ADODB$Properties: ADODB$Properties;
    State: $Values<typeof ADODB$ObjectStateEnum>;
  }

  declare class ADODB$Connection {
    constructor(): this;

    /**
     * Sum of one or more of the values in the **XactAttributeEnum** enum
     */
    Attributes: $Values<typeof ADODB$XactAttributeEnum>;
    BeginTrans(): number;
    Cancel(): void;
    Close(): void;
    CommandTimeout: number;
    CommitTrans(): void;
    ConnectionString: string;
    ConnectionTimeout: number;
    CursorLocation: $Values<typeof ADODB$CursorLocationEnum>;
    DefaultDatabase: string;
    ADODB$Errors: ADODB$Errors;

    /**
     * @param Options [Options=-1]
     *
     * The **RecordsAffected** parameter is meant to take a variable to be modified by reference, which is not supported by Javascript
     *
     * The return value is as follows:
     *
     * * If the **adExecuteNoRecords** option is passed in, the method will return `null`. Otherwise:
     * * If **CommandText** specifies a row-returning query, then the method will return a new read-only, forward-only **Recordset** object with the results
     * * If **CommandText** isn't intended to return results (e.g. an `UPDATE` statement), a closed empty **Recordset** will be returned.
     */
    Execute(
      CommandText: string,
      RecordsAffected?: void,
      Options?:
        | $Values<typeof ADODB$CommandTypeEnum>
        | $Values<typeof ADODB$ExecuteOptionEnum>
    ): ADODB$Recordset | null;
    IsolationLevel: $Values<typeof ADODB$IsolationLevelEnum>;
    Mode: $Values<typeof ADODB$ConnectModeEnum>;

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
      Schema: $Values<typeof ADODB$SchemaEnum>,
      Restrictions?: SafeArray<string>
    ): ADODB$Recordset;

    /**
     * Returns a Recordset object that contains schema information, for a provider-specific schema query type
     * @param SchemaID The GUID for a provider-schema query not defined by the OLE DB specification.
     */
    OpenSchema(
      Schema: typeof ADODB$SchemaEnum.adSchemaProviderSpecific,
      Restrictions: SafeArray<string>,
      SchemaID: string
    ): ADODB$Recordset;
    ADODB$Properties: ADODB$Properties;
    Provider: string;
    RollbackTrans(): void;
    State: $Values<typeof ADODB$ObjectStateEnum>;
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
    Attributes: $Values<typeof ADODB$FieldAttributeEnum>;
    DataFormat: any;
    DefinedSize: number;
    GetChunk(Length: number): any;
    Name: string;
    NumericScale: number;
    OriginalValue: any;
    Precision: number;
    ADODB$Properties: ADODB$Properties;
    Status: number;
    Type: $Values<typeof ADODB$DataTypeEnum>;
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
      Type: $Values<typeof ADODB$DataTypeEnum>,
      DefinedSize?: number,
      Attrib?: $Values<typeof ADODB$FieldAttributeEnum>
    ): void;

    /**
     * @param DefinedSize [DefinedSize=0]
     * @param Attrib [Attrib=-1]
     */
    Append(
      Name: string,
      Type: $Values<typeof ADODB$DataTypeEnum>,
      DefinedSize?: number,
      Attrib?: $Values<typeof ADODB$FieldAttributeEnum>,
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
    Resync(ResyncValues?: $Values<typeof ADODB$ResyncEnum>): void;
    Update(): void;
    (Index: string | number): ADODB$Field;
  }

  declare class ADODB$Parameter {
    constructor(): this;
    AppendChunk(Val: any): void;

    /**
     * Sum of one or more of the values in the **ParameterAttributesEnum** enum
     */
    Attributes: $Values<typeof ADODB$ParameterAttributesEnum>;
    Direction: $Values<typeof ADODB$ParameterDirectionEnum>;
    Name: string;
    NumericScale: number;
    Precision: number;
    ADODB$Properties: ADODB$Properties;
    Size: number;
    Type: $Values<typeof ADODB$DataTypeEnum>;
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
    Attributes: $Values<typeof ADODB$PropertyAttributesEnum>;
    Name: string;
    Type: $Values<typeof ADODB$DataTypeEnum>;
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
      Options?: $Values<typeof ADODB$CopyRecordOptionsEnum>,
      Async?: boolean
    ): string;

    /**
     * @param Source [Source='']
     * @param Async [Async=false]
     */
    DeleteRecord(Source?: string, Async?: boolean): void;
    ADODB$Fields: ADODB$Fields;
    GetChildren(): ADODB$Recordset;
    Mode: $Values<typeof ADODB$ConnectModeEnum>;

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
      Options?: $Values<typeof ADODB$MoveRecordOptionsEnum>,
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
      Mode?: $Values<typeof ADODB$ConnectModeEnum>,
      CreateOptions?: $Values<typeof ADODB$RecordCreateOptionsEnum>,
      Options?: $Values<typeof ADODB$RecordOpenOptionsEnum>,
      UserName?: string,
      Password?: string
    ): void;
    ParentURL: string;
    ADODB$Properties: ADODB$Properties;
    RecordType: $Values<typeof ADODB$RecordTypeEnum>;
    Source: string | ADODB$Recordset | ADODB$Command;
    State: $Values<typeof ADODB$ObjectStateEnum>;
  }

  declare interface ADODB$Recordset {
    _xClone(): ADODB$Recordset;

    /**
     * @param AffectRecords [AffectRecords=3]
     */
    _xResync(AffectRecords?: $Values<typeof ADODB$AffectEnum>): void;

    /**
     * @param FileName [FileName='']
     * @param PersistFormat [PersistFormat=0]
     */
    _xSave(
      FileName?: string,
      PersistFormat?: $Values<typeof ADODB$PersistFormatEnum>
    ): void;
    AbsolutePage: $Values<typeof ADODB$PositionEnum>;
    AbsolutePosition: $Values<typeof ADODB$PositionEnum>;
    +ActiveCommand?: ADODB$Command;

    /**
     * Sets or returns a String value that contains a definition for a connection if the connection is closed, or a Variant containing the current Connection object if the connection is open. Default is a null object reference.
     */
    ActiveConnection: string | ADODB$Connection | null;
    AddNew(): void;
    AddNew(Fields: SafeArray<string | number>, Values: SafeArray): void;
    AddNew(Field: string, Value: any): void;
    +BOF: boolean;
    Bookmark: ADODB$Bookmark;
    CacheSize: number;
    Cancel(): void;

    /**
     * @param AffectRecords [AffectRecords=3]
     */
    CancelBatch(AffectRecords?: $Values<typeof ADODB$AffectEnum>): void;
    CancelUpdate(): void;

    /**
     * @param LockType [LockType=-1]
     */
    Clone(LockType?: $Values<typeof ADODB$LockTypeEnum>): ADODB$Recordset;
    Close(): void;
    Collect(Index: any): any;
    CompareBookmarks(
      Bookmark1: ADODB$Bookmark,
      Bookmark2: ADODB$Bookmark
    ): $Values<typeof ADODB$CompareEnum>;
    CursorLocation: $Values<typeof ADODB$CursorLocationEnum>;
    CursorType: $Values<typeof ADODB$CursorTypeEnum>;
    DataMember: string;
    DataSource: any;

    /**
     * @param AffectRecords [AffectRecords=1]
     */
    Delete(AffectRecords?: $Values<typeof ADODB$AffectEnum>): void;
    +EditMode: $Values<typeof ADODB$EditModeEnum>;
    +EOF: boolean;
    +Fields: ADODB$Fields;

    /**
     * Sets or returns one of the following:
     * * Criteria string — a string made up of one or more individual clauses concatenated with AND or OR operators.
     * * Array of bookmarks — an array of unique bookmark values that point to records in the Recordset object.
     * * A FilterGroupEnum value
     */
    Filter:
      | string
      | SafeArray<ADODB$Bookmark>
      | $Values<typeof ADODB$FilterGroupEnum>;

    /**
     * @param SkipRecords [SkipRecords=0]
     * @param SearchDirection [SearchDirection=1]
     */
    Find(
      Criteria: string,
      SkipRecords?: number,
      SearchDirection?: $Values<typeof ADODB$SearchDirectionEnum>,
      Start?: ADODB$Bookmark
    ): void;

    /**
     * @param Rows [Rows=-1]
     */
    GetRows(
      Rows?: number,
      Start?: string | ADODB$Bookmark | $Values<typeof ADODB$BookmarkEnum>,
      Fields?: string | SafeArray<string | number>
    ): SafeArray;

    /**
     * @param StringFormat [StringFormat=2]
     * @param NumRows [NumRows=-1]
     * @param ColumnDelimeter [ColumnDelimeter='']
     * @param RowDelimeter [RowDelimeter='']
     * @param NullExpr [NullExpr='']
     */
    GetString(
      StringFormat?: $Values<typeof ADODB$StringFormatEnum>,
      NumRows?: number,
      ColumnDelimeter?: string,
      RowDelimeter?: string,
      NullExpr?: string
    ): string;
    Index: string;
    LockType: $Values<typeof ADODB$LockTypeEnum>;
    MarshalOptions: $Values<typeof ADODB$MarshalOptionsEnum>;
    MaxRecords: number;
    Move(
      NumRecords: number,
      Start?: string | ADODB$Bookmark | $Values<typeof ADODB$BookmarkEnum>
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
      CursorType?: $Values<typeof ADODB$CursorTypeEnum>,
      LockType?: $Values<typeof ADODB$LockTypeEnum>,
      Options?:
        | $Values<typeof ADODB$CommandTypeEnum>
        | $Values<typeof ADODB$ExecuteOptionEnum>
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
      CursorType?: $Values<typeof ADODB$CursorTypeEnum>,
      LockType?: $Values<typeof ADODB$LockTypeEnum>,
      Options?:
        | $Values<typeof ADODB$CommandTypeEnum>
        | $Values<typeof ADODB$ExecuteOptionEnum>
    ): void;
    +PageCount: number;
    PageSize: number;
    +Properties: ADODB$Properties;
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
      AffectRecords?: $Values<typeof ADODB$AffectEnum>,
      ResyncValues?: $Values<typeof ADODB$ResyncEnum>
    ): void;

    /**
     * @param PersistFormat [PersistFormat=0]
     */
    Save(
      Destination: string | ADODB$Stream,
      PersistFormat?: $Values<typeof ADODB$PersistFormatEnum>
    ): void;

    /**
     * @param SeekOption [SeekOption=1]
     *
     * For a single-column index, pass in a single value to seek in the column of the index
     *
     * For a multi-column index, pass in a SafeArray containing the multiple values to seek in the columns of the index.
     */
    Seek(KeyValues: any, SeekOption?: $Values<typeof ADODB$SeekEnum>): void;
    Sort: string;
    Source: string | ADODB$Command;
    +State: $Values<typeof ADODB$ObjectStateEnum>;
    +Status: number;
    StayInSync: boolean;
    Supports(CursorOptions: $Values<typeof ADODB$CursorOptionEnum>): boolean;
    Update(): void;
    Update(Fields: SafeArray<string | number>, Values: SafeArray): void;
    Update(Field: string, Value: any): void;

    /**
     * @param AffectRecords [AffectRecords=3]
     */
    UpdateBatch(AffectRecords?: $Values<typeof ADODB$AffectEnum>): void;
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
    LineSeparator: $Values<typeof ADODB$LineSeparatorEnum>;
    LoadFromFile(FileName: string): void;
    Mode: $Values<typeof ADODB$ConnectModeEnum>;

    /**
     * @param Mode [Mode=0]
     * @param Options [Options=-1]
     * @param UserName [UserName='']
     * @param Password [Password='']
     */
    Open(
      Source?: string | ADODB$Record,
      Mode?: $Values<typeof ADODB$ConnectModeEnum>,
      Options?: $Values<typeof ADODB$StreamOpenOptionsEnum>,
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
    SaveToFile(
      FileName: string,
      Options?: $Values<typeof ADODB$SaveOptionsEnum>
    ): void;
    SetEOS(): void;
    Size: number;
    SkipLine(): void;
    State: $Values<typeof ADODB$ObjectStateEnum>;
    Type: $Values<typeof ADODB$StreamTypeEnum>;
    Write(Buffer: any): void;

    /**
     * @param Options [Options=0]
     */
    WriteText(
      Data: string,
      Options?: $Values<typeof ADODB$StreamWriteEnum>
    ): void;
  }

  declare type ADODB$EventHelperTypes$Connection_ExecuteComplete_ArgNames = [
    "RecordsAffected",
    "pError",
    "adStatus",
    "pCommand",
    "pRecordset",
    "pConnection"
  ];

  declare type ADODB$EventHelperTypes$Connection_WillConnect_ArgNames = [
    "ConnectionString",
    "UserID",
    "Password",
    "Options",
    "adStatus",
    "pConnection"
  ];

  declare type ADODB$EventHelperTypes$Connection_WillExecute_ArgNames = [
    "Source",
    "CursorType",
    "LockType",
    "Options",
    "adStatus",
    "pCommand",
    "pRecordset",
    "pConnection"
  ];

  declare interface ADODB$EventHelperTypes$Connection_ExecuteComplete_Parameter {
    adStatus: $Values<typeof ADODB$EventStatusEnum>;
    +pCommand: ADODB$Command;
    +pConnection: ADODB$Connection;
    +pError: ADODB$Error;
    +pRecordset: ADODB$Recordset;
    +RecordsAffected: number;
  }

  declare interface ADODB$EventHelperTypes$Connection_WillConnect_Parameter {
    adStatus: $Values<typeof ADODB$EventStatusEnum>;
    ConnectionString: string;
    Options: number;
    Password: string;
    +pConnection: ADODB$Connection;
    UserID: string;
  }

  declare interface ADODB$EventHelperTypes$Connection_WillExecute_Parameter {
    adStatus: $Values<typeof ADODB$EventStatusEnum>;
    CursorType: $Values<typeof ADODB$CursorTypeEnum>;
    LockType: $Values<typeof ADODB$LockTypeEnum>;
    Options: number;
    +pCommand: ADODB$Command;
    +pConnection: ADODB$Connection;
    +pRecordset: ADODB$Recordset;
    Source: string;
  }
  declare interface ActiveXObject {
    on(
      obj: ADODB$Connection,
      event: "BeginTransComplete",
      argNames: ["TransactionLevel", "pError", "adStatus", "pConnection"],
      handler: (parameter: {
        +TransactionLevel: number,
        +pError: ADODB$Error,
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pConnection: ADODB$Connection
      }) => void
    ): void;
    on(
      obj: ADODB$Connection,
      event:
        | "CommitTransComplete"
        | "ConnectComplete"
        | "InfoMessage"
        | "RollbackTransComplete",
      argNames: ["pError", "adStatus", "pConnection"],
      handler: (parameter: {
        +pError: ADODB$Error,
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pConnection: ADODB$Connection
      }) => void
    ): void;
    on(
      obj: ADODB$Connection,
      event: "Disconnect",
      argNames: ["adStatus", "pConnection"],
      handler: (parameter: {
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pConnection: ADODB$Connection
      }) => void
    ): void;
    on(
      obj: ADODB$Connection,
      event: "ExecuteComplete",
      argNames: ADODB$EventHelperTypes$Connection_ExecuteComplete_ArgNames,
      handler: (
        parameter: ADODB$EventHelperTypes$Connection_ExecuteComplete_Parameter
      ) => void
    ): void;
    on(
      obj: ADODB$Connection,
      event: "WillConnect",
      argNames: ADODB$EventHelperTypes$Connection_WillConnect_ArgNames,
      handler: (
        parameter: ADODB$EventHelperTypes$Connection_WillConnect_Parameter
      ) => void
    ): void;
    on(
      obj: ADODB$Connection,
      event: "WillExecute",
      argNames: ADODB$EventHelperTypes$Connection_WillExecute_ArgNames,
      handler: (
        parameter: ADODB$EventHelperTypes$Connection_WillExecute_Parameter
      ) => void
    ): void;
    on(
      obj: ADODB$Recordset,
      event: "EndOfRecordset",
      argNames: ["fMoreData", "adStatus", "pRecordset"],
      handler: (parameter: {
        fMoreData: boolean,
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pRecordset: ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$Recordset,
      event: "FetchComplete",
      argNames: ["pError", "adStatus", "pRecordset"],
      handler: (parameter: {
        +pError: ADODB$Error,
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pRecordset: ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$Recordset,
      event: "FetchProgress",
      argNames: ["Progress", "MaxProgress", "adStatus", "pRecordset"],
      handler: (parameter: {
        +Progress: number,
        +MaxProgress: number,
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pRecordset: ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$Recordset,
      event: "FieldChangeComplete",
      argNames: ["cFields", "Fields", "pError", "adStatus", "pRecordset"],
      handler: (parameter: {
        +cFields: number,
        +Fields: any,
        +pError: ADODB$Error,
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pRecordset: ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$Recordset,
      event: "MoveComplete" | "RecordsetChangeComplete",
      argNames: ["adReason", "pError", "adStatus", "pRecordset"],
      handler: (parameter: {
        +adReason: $Values<typeof ADODB$EventReasonEnum>,
        +pError: ADODB$Error,
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pRecordset: ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$Recordset,
      event: "RecordChangeComplete",
      argNames: ["adReason", "cRecords", "pError", "adStatus", "pRecordset"],
      handler: (parameter: {
        +adReason: $Values<typeof ADODB$EventReasonEnum>,
        +cRecords: number,
        +pError: ADODB$Error,
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pRecordset: ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$Recordset,
      event: "WillChangeField",
      argNames: ["cFields", "Fields", "adStatus", "pRecordset"],
      handler: (parameter: {
        +cFields: number,
        +Fields: any,
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pRecordset: ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$Recordset,
      event: "WillChangeRecord",
      argNames: ["adReason", "cRecords", "adStatus", "pRecordset"],
      handler: (parameter: {
        +adReason: $Values<typeof ADODB$EventReasonEnum>,
        +cRecords: number,
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pRecordset: ADODB$Recordset
      }) => void
    ): void;
    on(
      obj: ADODB$Recordset,
      event: "WillChangeRecordset" | "WillMove",
      argNames: ["adReason", "adStatus", "pRecordset"],
      handler: (parameter: {
        +adReason: $Values<typeof ADODB$EventReasonEnum>,
        adStatus: $Values<typeof ADODB$EventStatusEnum>,
        +pRecordset: ADODB$Recordset
      }) => void
    ): void;
    set(
      obj: ADODB$Recordset,
      propertyName: "Collect",
      parameterTypes: [any],
      newValue: any
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "ADODB.Command": ADODB$Command;
    "ADODB.Connection": ADODB$Connection;
    "ADODB.Parameter": ADODB$Parameter;
    "ADODB.Record": ADODB$Record;
    "ADODB.Recordset": ADODB$Recordset;
    "ADODB.Stream": ADODB$Stream;
  }
}
