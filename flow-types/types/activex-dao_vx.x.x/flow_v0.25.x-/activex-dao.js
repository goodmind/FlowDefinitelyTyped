declare module "activex-dao" {
  declare var npm$namespace$DAO: {
    _DAOSuppHelp: typeof DAO$_DAOSuppHelp,
    CollatingOrderEnum: typeof DAO$CollatingOrderEnum,
    CommitTransOptionsEnum: typeof DAO$CommitTransOptionsEnum,
    CursorDriverEnum: typeof DAO$CursorDriverEnum,
    DatabaseTypeEnum: typeof DAO$DatabaseTypeEnum,
    DataTypeEnum: typeof DAO$DataTypeEnum,
    DriverPromptEnum: typeof DAO$DriverPromptEnum,
    EditModeEnum: typeof DAO$EditModeEnum,
    FieldAttributeEnum: typeof DAO$FieldAttributeEnum,
    IdleEnum: typeof DAO$IdleEnum,
    ISAMStatsEnum: typeof DAO$ISAMStatsEnum,
    LanguageConstants: typeof DAO$LanguageConstants,
    LockTypeEnum: typeof DAO$LockTypeEnum,
    ParameterDirectionEnum: typeof DAO$ParameterDirectionEnum,
    PermissionEnum: typeof DAO$PermissionEnum,
    QueryDefStateEnum: typeof DAO$QueryDefStateEnum,
    QueryDefTypeEnum: typeof DAO$QueryDefTypeEnum,
    RecordsetOptionEnum: typeof DAO$RecordsetOptionEnum,
    RecordsetTypeEnum: typeof DAO$RecordsetTypeEnum,
    RecordStatusEnum: typeof DAO$RecordStatusEnum,
    RelationAttributeEnum: typeof DAO$RelationAttributeEnum,
    ReplicaTypeEnum: typeof DAO$ReplicaTypeEnum,
    SetOptionEnum: typeof DAO$SetOptionEnum,
    SynchronizeTypeEnum: typeof DAO$SynchronizeTypeEnum,
    TableDefAttributeEnum: typeof DAO$TableDefAttributeEnum,
    UpdateCriteriaEnum: typeof DAO$UpdateCriteriaEnum,
    UpdateTypeEnum: typeof DAO$UpdateTypeEnum,
    WorkspaceTypeEnum: typeof DAO$WorkspaceTypeEnum,
    ComplexType: typeof DAO$ComplexType,
    Connection: typeof DAO$Connection,
    Container: typeof DAO$Container,
    Database: typeof DAO$Database,
    DBEngine: typeof DAO$DBEngine,
    Document: typeof DAO$Document,
    Error: typeof DAO$Error,
    Field: typeof DAO$Field,
    Group: typeof DAO$Group,
    Index: typeof DAO$Index,
    Parameter: typeof DAO$Parameter,
    Property: typeof DAO$Property,
    QueryDef: typeof DAO$QueryDef,
    Relation: typeof DAO$Relation,
    TableDef: typeof DAO$TableDef,
    User: typeof DAO$User,
    Workspace: typeof DAO$Workspace
  };

  declare var DAO$_DAOSuppHelp: {|
    +KeepLocal: 0, // 0
    +LogMessages: 0, // 0
    +Replicable: 0, // 0
    +ReplicableBool: 0, // 0
    +V1xNullBehavior: 0 // 0
  |};

  declare var DAO$CollatingOrderEnum: {|
    +dbSortArabic: 1025, // 1025
    +dbSortChineseSimplified: 2052, // 2052
    +dbSortChineseTraditional: 1028, // 1028
    +dbSortCyrillic: 1049, // 1049
    +dbSortCzech: 1029, // 1029
    +dbSortDutch: 1043, // 1043
    +dbSortGeneral: 1033, // 1033
    +dbSortGreek: 1032, // 1032
    +dbSortHebrew: 1037, // 1037
    +dbSortHindi: 1081, // 1081
    +dbSortHungarian: 1038, // 1038
    +dbSortIcelandic: 1039, // 1039
    +dbSortJapanese: 1041, // 1041
    +dbSortJapaneseRadicalStrokeCount: 263185, // 263185
    +dbSortKorean: 1042, // 1042
    +dbSortNeutral: 1024, // 1024
    +dbSortNorwdan: 1030, // 1030
    +dbSortPDXIntl: 1033, // 1033
    +dbSortPDXNor: 1030, // 1030
    +dbSortPDXSwe: 1053, // 1053
    +dbSortPolish: 1045, // 1045
    +dbSortSlovenian: 1060, // 1060
    +dbSortSpanish: 1034, // 1034
    +dbSortSwedFin: 1053, // 1053
    +dbSortThai: 1054, // 1054
    +dbSortTurkish: 1055, // 1055
    +dbSortUndefined: -1 // -1
  |};

  declare var DAO$CommitTransOptionsEnum: {|
    +dbForceOSFlush: 1 // 1
  |};

  declare var DAO$CursorDriverEnum: {|
    +dbUseClientBatchCursor: 3, // 3
    +dbUseDefaultCursor: -1, // -1
    +dbUseNoCursor: 4, // 4
    +dbUseODBCCursor: 1, // 1
    +dbUseServerCursor: 2 // 2
  |};

  declare var DAO$DatabaseTypeEnum: {|
    +dbDecrypt: 4, // 4
    +dbEncrypt: 2, // 2
    +dbVersion10: 1, // 1
    +dbVersion11: 8, // 8
    +dbVersion120: 128, // 128
    +dbVersion140: 256, // 256
    +dbVersion150: 512, // 512
    +dbVersion20: 16, // 16
    +dbVersion30: 32, // 32
    +dbVersion40: 64 // 64
  |};

  declare var DAO$DataTypeEnum: {|
    +dbAttachment: 101, // 101
    +dbBigInt: 16, // 16
    +dbBinary: 9, // 9
    +dbBoolean: 1, // 1
    +dbByte: 2, // 2
    +dbChar: 18, // 18
    +dbComplexByte: 102, // 102
    +dbComplexDecimal: 108, // 108
    +dbComplexDouble: 106, // 106
    +dbComplexGUID: 107, // 107
    +dbComplexInteger: 103, // 103
    +dbComplexLong: 104, // 104
    +dbComplexSingle: 105, // 105
    +dbComplexText: 109, // 109
    +dbCurrency: 5, // 5
    +dbDate: 8, // 8
    +dbDecimal: 20, // 20
    +dbDouble: 7, // 7
    +dbFloat: 21, // 21
    +dbGUID: 15, // 15
    +dbInteger: 3, // 3
    +dbLong: 4, // 4
    +dbLongBinary: 11, // 11
    +dbMemo: 12, // 12
    +dbNumeric: 19, // 19
    +dbSingle: 6, // 6
    +dbText: 10, // 10
    +dbTime: 22, // 22
    +dbTimeStamp: 23, // 23
    +dbVarBinary: 17 // 17
  |};

  declare var DAO$DriverPromptEnum: {|
    +dbDriverComplete: 0, // 0
    +dbDriverCompleteRequired: 3, // 3
    +dbDriverNoPrompt: 1, // 1
    +dbDriverPrompt: 2 // 2
  |};

  declare var DAO$EditModeEnum: {|
    +dbEditAdd: 2, // 2
    +dbEditInProgress: 1, // 1
    +dbEditNone: 0 // 0
  |};

  declare var DAO$FieldAttributeEnum: {|
    +dbAutoIncrField: 16, // 16
    +dbDescending: 1, // 1
    +dbFixedField: 1, // 1
    +dbHyperlinkField: 32768, // 32768
    +dbSystemField: 8192, // 8192
    +dbUpdatableField: 32, // 32
    +dbVariableField: 2 // 2
  |};

  declare var DAO$IdleEnum: {|
    +dbFreeLocks: 1, // 1
    +dbRefreshCache: 8 // 8
  |};

  declare var DAO$ISAMStatsEnum: {|
    +DiskReads: 0, // 0
    +DiskWrites: 1, // 1
    +LocksPlaced: 4, // 4
    +LocksReleased: 5, // 5
    +ReadsFromCache: 2, // 2
    +ReadsFromReadAheadCache: 3 // 3
  |};

  declare var DAO$LanguageConstants: {|
    +dbLangArabic: ";LANGID=0x0401;CP=1256;COUNTRY=0", // ";LANGID=0x0401;CP=1256;COUNTRY=0"
    +dbLangChineseSimplified: ";LANGID=0x0804;CP=936;COUNTRY=0", // ";LANGID=0x0804;CP=936;COUNTRY=0"
    +dbLangChineseTraditional: ";LANGID=0x0404;CP=950;COUNTRY=0", // ";LANGID=0x0404;CP=950;COUNTRY=0"
    +dbLangCyrillic: ";LANGID=0x0419;CP=1251;COUNTRY=0", // ";LANGID=0x0419;CP=1251;COUNTRY=0"
    +dbLangCzech: ";LANGID=0x0405;CP=1250;COUNTRY=0", // ";LANGID=0x0405;CP=1250;COUNTRY=0"
    +dbLangDutch: ";LANGID=0x0413;CP=1252;COUNTRY=0", // ";LANGID=0x0413;CP=1252;COUNTRY=0"
    +dbLangGeneral: ";LANGID=0x0409;CP=1252;COUNTRY=0", // ";LANGID=0x0409;CP=1252;COUNTRY=0"
    +dbLangGreek: ";LANGID=0x0408;CP=1253;COUNTRY=0", // ";LANGID=0x0408;CP=1253;COUNTRY=0"
    +dbLangHebrew: ";LANGID=0x040D;CP=1255;COUNTRY=0", // ";LANGID=0x040D;CP=1255;COUNTRY=0"
    +dbLangHindi: ";LANGID=0x00000439;CP=65001;COUNTRY=0", // ";LANGID=0x00000439;CP=65001;COUNTRY=0"
    +dbLangHungarian: ";LANGID=0x040E;CP=1250;COUNTRY=0", // ";LANGID=0x040E;CP=1250;COUNTRY=0"
    +dbLangIcelandic: ";LANGID=0x040F;CP=1252;COUNTRY=0", // ";LANGID=0x040F;CP=1252;COUNTRY=0"
    +dbLangJapanese: ";LANGID=0x0411;CP=932;COUNTRY=0", // ";LANGID=0x0411;CP=932;COUNTRY=0"
    +dbLangJapaneseRadicalStrokeCount: ";LANGID=0x00040411;CP=65001;COUNTRY=0", // ";LANGID=0x00040411;CP=65001;COUNTRY=0"
    +dbLangKorean: ";LANGID=0x0412;CP=949;COUNTRY=0", // ";LANGID=0x0412;CP=949;COUNTRY=0"
    +dbLangNordic: ";LANGID=0x041D;CP=1252;COUNTRY=0", // ";LANGID=0x041D;CP=1252;COUNTRY=0"
    +dbLangNorwDan: ";LANGID=0x0406;CP=1252;COUNTRY=0", // ";LANGID=0x0406;CP=1252;COUNTRY=0"
    +dbLangPolish: ";LANGID=0x0415;CP=1250;COUNTRY=0", // ";LANGID=0x0415;CP=1250;COUNTRY=0"
    +dbLangSlovenian: ";LANGID=0x0424;CP=1250;COUNTRY=0", // ";LANGID=0x0424;CP=1250;COUNTRY=0"
    +dbLangSpanish: ";LANGID=0x040A;CP=1252;COUNTRY=0", // ";LANGID=0x040A;CP=1252;COUNTRY=0"
    +dbLangSwedFin: ";LANGID=0x041D;CP=1252;COUNTRY=0", // ";LANGID=0x041D;CP=1252;COUNTRY=0"
    +dbLangThai: ";LANGID=0x041E;CP=874;COUNTRY=0", // ";LANGID=0x041E;CP=874;COUNTRY=0"
    +dbLangTurkish: ";LANGID=0x041F;CP=1254;COUNTRY=0" // ";LANGID=0x041F;CP=1254;COUNTRY=0"
  |};

  declare var DAO$LockTypeEnum: {|
    +dbOptimistic: 3, // 3
    +dbOptimisticBatch: 5, // 5
    +dbOptimisticValue: 1, // 1
    +dbPessimistic: 2 // 2
  |};

  declare var DAO$ParameterDirectionEnum: {|
    +dbParamInput: 1, // 1
    +dbParamInputOutput: 3, // 3
    +dbParamOutput: 2, // 2
    +dbParamReturnValue: 4 // 4
  |};

  declare var DAO$PermissionEnum: {|
    +dbSecCreate: 1, // 1
    +dbSecDBAdmin: 8, // 8
    +dbSecDBCreate: 1, // 1
    +dbSecDBExclusive: 4, // 4
    +dbSecDBOpen: 2, // 2
    +dbSecDelete: 65536, // 65536
    +dbSecDeleteData: 128, // 128
    +dbSecFullAccess: 1048575, // 1048575
    +dbSecInsertData: 32, // 32
    +dbSecNoAccess: 0, // 0
    +dbSecReadDef: 4, // 4
    +dbSecReadSec: 131072, // 131072
    +dbSecReplaceData: 64, // 64
    +dbSecRetrieveData: 20, // 20
    +dbSecWriteDef: 65548, // 65548
    +dbSecWriteOwner: 524288, // 524288
    +dbSecWriteSec: 262144 // 262144
  |};

  declare var DAO$QueryDefStateEnum: {|
    +dbQPrepare: 1, // 1
    +dbQUnprepare: 2 // 2
  |};

  declare var DAO$QueryDefTypeEnum: {|
    +dbQAction: 240, // 240
    +dbQAppend: 64, // 64
    +dbQCompound: 160, // 160
    +dbQCrosstab: 16, // 16
    +dbQDDL: 96, // 96
    +dbQDelete: 32, // 32
    +dbQMakeTable: 80, // 80
    +dbQProcedure: 224, // 224
    +dbQSelect: 0, // 0
    +dbQSetOperation: 128, // 128
    +dbQSPTBulk: 144, // 144
    +dbQSQLPassThrough: 112, // 112
    +dbQUpdate: 48 // 48
  |};

  declare var DAO$RecordsetOptionEnum: {|
    +dbAppendOnly: 8, // 8
    +dbConsistent: 32, // 32
    +dbDenyRead: 2, // 2
    +dbDenyWrite: 1, // 1
    +dbExecDirect: 2048, // 2048
    +dbFailOnError: 128, // 128
    +dbForwardOnly: 256, // 256
    +dbInconsistent: 16, // 16
    +dbReadOnly: 4, // 4
    +dbRunAsync: 1024, // 1024
    +dbSeeChanges: 512, // 512
    +dbSQLPassThrough: 64 // 64
  |};

  declare var DAO$RecordsetTypeEnum: {|
    +dbOpenDynamic: 16, // 16
    +dbOpenDynaset: 2, // 2
    +dbOpenForwardOnly: 8, // 8
    +dbOpenSnapshot: 4, // 4
    +dbOpenTable: 1 // 1
  |};

  declare var DAO$RecordStatusEnum: {|
    +dbRecordDBDeleted: 4, // 4
    +dbRecordDeleted: 3, // 3
    +dbRecordModified: 1, // 1
    +dbRecordNew: 2, // 2
    +dbRecordUnmodified: 0 // 0
  |};

  declare var DAO$RelationAttributeEnum: {|
    +dbRelationDeleteCascade: 4096, // 4096
    +dbRelationDontEnforce: 2, // 2
    +dbRelationInherited: 4, // 4
    +dbRelationLeft: 16777216, // 16777216
    +dbRelationRight: 33554432, // 33554432
    +dbRelationUnique: 1, // 1
    +dbRelationUpdateCascade: 256 // 256
  |};

  declare var DAO$ReplicaTypeEnum: {|
    +dbRepMakePartial: 1, // 1
    +dbRepMakeReadOnly: 2 // 2
  |};

  declare var DAO$SetOptionEnum: {|
    +dbExclusiveAsyncDelay: 60, // 60
    +dbFlushTransactionTimeout: 66, // 66
    +dbImplicitCommitSync: 59, // 59
    +dbLockDelay: 63, // 63
    +dbLockRetry: 57, // 57
    +dbMaxBufferSize: 8, // 8
    +dbMaxLocksPerFile: 62, // 62
    +dbPageTimeout: 6, // 6
    +dbPasswordEncryptionAlgorithm: 81, // 81
    +dbPasswordEncryptionKeyLength: 82, // 82
    +dbPasswordEncryptionProvider: 80, // 80
    +dbRecycleLVs: 65, // 65
    +dbSharedAsyncDelay: 61, // 61
    +dbUserCommitSync: 58 // 58
  |};

  declare var DAO$SynchronizeTypeEnum: {|
    +dbRepExportChanges: 1, // 1
    +dbRepImpExpChanges: 4, // 4
    +dbRepImportChanges: 2, // 2
    +dbRepSyncInternet: 16 // 16
  |};

  declare var DAO$TableDefAttributeEnum: {|
    +dbAttachedODBC: 536870912, // 536870912
    +dbAttachedTable: 1073741824, // 1073741824
    +dbAttachExclusive: 65536, // 65536
    +dbAttachSavePWD: 131072, // 131072
    +dbHiddenObject: 1, // 1
    +dbSystemObject: -2147483646 // -2147483646
  |};

  declare var DAO$UpdateCriteriaEnum: {|
    +dbCriteriaAllCols: 4, // 4
    +dbCriteriaDeleteInsert: 16, // 16
    +dbCriteriaKey: 1, // 1
    +dbCriteriaModValues: 2, // 2
    +dbCriteriaTimestamp: 8, // 8
    +dbCriteriaUpdate: 32 // 32
  |};

  declare var DAO$UpdateTypeEnum: {|
    +dbUpdateBatch: 4, // 4
    +dbUpdateCurrentRecord: 2, // 2
    +dbUpdateRegular: 1 // 1
  |};

  declare var DAO$WorkspaceTypeEnum: {|
    +dbUseJet: 2, // 2
    +dbUseODBC: 1 // 1
  |};

  declare type DAO$Bookmark = SafeArray<number>;

  declare class DAO$ComplexType {
    constructor(): this;
    DAO$Fields: DAO$Fields;
  }

  declare class DAO$Connection {
    constructor(): this;
    Cancel(): void;
    Close(): void;
    Connect: string;
    CreateQueryDef(Name?: string, SQLText?: string): DAO$QueryDef;
    DAO$Database: DAO$Database;
    Execute(
      Query: string,
      Options?: $Values<typeof DAO$RecordsetOptionEnum>
    ): void;
    hDbc: number;
    Name: string;
    OpenRecordset(
      Name: string,
      Type?: $Values<typeof DAO$RecordsetTypeEnum>,
      Options?: $Values<typeof DAO$RecordsetOptionEnum>,
      LockEdit?: $Values<typeof DAO$LockTypeEnum>
    ): DAO$Recordset;
    DAO$QueryDefs: DAO$QueryDefs;
    QueryTimeout: number;
    RecordsAffected: number;
    DAO$Recordsets: DAO$Recordsets;
    StillExecuting: boolean;
    Transactions: boolean;
    Updatable: boolean;
  }

  declare interface DAO$Connections {
    +Count: number;
    Item(Item: number | string): DAO$Connection;
    Refresh(): void;
    (Item: number | string): DAO$Connection;
  }

  declare class DAO$Container {
    constructor(): this;
    AllPermissions: number;
    DAO$Documents: DAO$Documents;
    Inherit: boolean;
    Name: string;
    Owner: string;
    Permissions: number;
    DAO$Properties: DAO$Properties;
    UserName: string;
  }

  declare interface DAO$Containers {
    +Count: number;
    Item(Item: number | string): DAO$Container;
    Refresh(): void;
    (Item: number | string): DAO$Container;
  }

  declare class DAO$Database {
    constructor(): this;
    Close(): void;
    CollatingOrder: number;
    Connect: string;
    DAO$Connection: DAO$Connection;
    DAO$Containers: DAO$Containers;
    CreateProperty(
      Name?: string,
      Type?: $Values<typeof DAO$DataTypeEnum>,
      Value?: any,
      DDL?: boolean
    ): DAO$Property;
    CreateQueryDef(Name?: string, SQLText?: string): DAO$QueryDef;
    CreateRelation(
      Name?: string,
      Table?: string,
      ForeignTable?: string,
      Attributes?: $Values<typeof DAO$RelationAttributeEnum>
    ): DAO$Relation;
    CreateTableDef(
      Name?: string,
      Attributes?: $Values<typeof DAO$TableDefAttributeEnum>,
      SourceTableName?: string,
      Connect?: string
    ): DAO$TableDef;
    DesignMasterID: string;
    Execute(
      Query: string,
      Options?: $Values<typeof DAO$RecordsetOptionEnum>
    ): void;
    MakeReplica(
      PathName: string,
      Description: string,
      Options?: $Values<typeof DAO$ReplicaTypeEnum>
    ): void;
    Name: string;
    NewPassword(bstrOld: string, bstrNew: string): void;
    OpenRecordset(
      Name: string,
      Type?: $Values<typeof DAO$RecordsetTypeEnum>,
      Options?: $Values<typeof DAO$RecordsetOptionEnum>,
      LockEdit?: $Values<typeof DAO$LockTypeEnum>
    ): DAO$Recordset;
    PopulatePartial(DbPathName: string): void;
    DAO$Properties: DAO$Properties;
    DAO$QueryDefs: DAO$QueryDefs;
    QueryTimeout: number;
    RecordsAffected: number;
    DAO$Recordsets: DAO$Recordsets;
    DAO$Relations: DAO$Relations;
    ReplicaID: string;
    Synchronize(
      DbPathName: string,
      ExchangeType?: $Values<typeof DAO$SynchronizeTypeEnum>
    ): void;
    DAO$TableDefs: DAO$TableDefs;
    Transactions: boolean;
    Updatable: boolean;
    Version: string;
  }

  declare interface DAO$Databases {
    +Count: number;
    Item(Item: number | string): DAO$Database;
    Refresh(): void;
    (Item: number | string): DAO$Database;
  }

  declare class DAO$DBEngine {
    constructor(): this;
    BeginTrans(): void;

    /**
     * @param Option [Option=0]
     */
    CommitTrans(Option?: number): void;

    /**
     * Compact a closed database
     * @param DstLocale Specify one of the following:
     * *  the locale, using one of the language constants
     * * the password, in the form `;pwd=MyNewPassword'`
     * * both the constant and a password, e.g. `dbLangGreek + ';pwd=MyNewPassword'`
     * @param Options `dbEncrypt` and `dbDecrypt` are deprecated, and unsupported for ACCDB
     * @param password Deprecated, and unsupported for ACCDB
     */
    CompactDatabase(
      SrcName: string,
      DstName: string,
      DstLocale?: $Values<typeof DAO$LanguageConstants> | string,
      Options?: $Values<typeof DAO$DatabaseTypeEnum>,
      password?: string
    ): void;

    /**
     * @param Locale Specify one of the following:
     * *  the locale, using one of the language constants
     * * the password, in the form `;pwd=MyNewPassword'`
     * * both the constant and a password, e.g. `dbLangGreek + ';pwd=MyNewPassword'`
     */
    CreateDatabase(
      Name: string,
      Locale: $Values<typeof DAO$LanguageConstants> | string,
      Option?: $Values<typeof DAO$DatabaseTypeEnum>
    ): DAO$Database;
    CreateWorkspace(
      Name: string,
      UserName: string,
      Password: string,
      UseType?: $Values<typeof DAO$WorkspaceTypeEnum>
    ): DAO$Workspace;
    DefaultPassword: string;
    DefaultType: number;
    DefaultUser: string;
    DAO$Errors: DAO$Errors;
    Idle(Action?: $Values<typeof DAO$IdleEnum>): void;
    IniPath: string;

    /**
     * Returns various statistics from the Jet engine
     */
    ISAMStats(
      StatNum: $Values<typeof DAO$ISAMStatsEnum>,
      Reset?: boolean
    ): number;
    LoginTimeout: number;

    /**
     * @param Connect ODBC connection string; prepend with `ODBC;`
     */
    OpenConnection(
      Name: string,
      Options?:
        | $Values<typeof DAO$DriverPromptEnum>
        | typeof DAO$RecordsetOptionEnum.dbRunAsync,
      ReadOnly?: boolean,
      Connect?: string
    ): DAO$Connection;
    OpenDatabase(
      Name: string,
      Exclusive?: boolean,
      ReadOnly?: boolean,
      Connect?: string
    ): DAO$Database;
    DAO$Properties: DAO$Properties;
    RegisterDatabase(
      Dsn: string,
      Driver: string,
      Silent: boolean,
      Attributes: string
    ): void;
    RepairDatabase(Name: string): void;
    Rollback(): void;
    SetOption(Option: $Values<typeof DAO$SetOptionEnum>, Value: any): void;
    SystemDB: string;
    Version: string;
    DAO$Workspaces: DAO$Workspaces;
  }

  declare class DAO$Document {
    constructor(): this;
    AllPermissions: number;
    DAO$Container: string;
    CreateProperty(
      Name?: string,
      Type?: $Values<typeof DAO$DataTypeEnum>,
      Value?: any,
      DDL?: boolean
    ): DAO$Property;
    DateCreated: VarDate;
    LastUpdated: VarDate;
    Name: string;
    Owner: string;
    Permissions: number;
    DAO$Properties: DAO$Properties;
    UserName: string;
  }

  declare interface DAO$Documents {
    +Count: number;
    Item(Item: number | string): DAO$Document;
    Refresh(): void;
    (Item: number | string): DAO$Document;
  }

  declare class DAO$Error {
    constructor(): this;
    Description: string;
    HelpContext: number;
    HelpFile: string;
    Number: number;
    Source: string;
  }

  declare interface DAO$Errors {
    +Count: number;
    Item(Item: any): DAO$Error;
    Refresh(): void;
    (Item: any): DAO$Error;
  }

  declare class DAO$Field {
    constructor(): this;
    AllowZeroLength: boolean;
    AppendChunk(Val: any): void;
    AppendOnly: boolean;
    Attributes: number;
    CollatingOrder: number;
    CollectionIndex: number;
    DAO$ComplexType: DAO$ComplexType;
    CreateProperty(
      Name?: string,
      Type?: $Values<typeof DAO$DataTypeEnum>,
      Value?: any,
      DDL?: boolean
    ): DAO$Property;
    DataUpdatable: boolean;
    DefaultValue: any;
    Expression: string;
    FieldSize: number;
    ForeignName: string;
    GetChunk(Offset: number, Bytes: number): any;
    IsComplex: boolean;
    LoadFromFile(FileName: string): void;
    Name: string;
    OrdinalPosition: number;
    OriginalValue: any;
    DAO$Properties: DAO$Properties;
    Required: boolean;
    SaveToFile(FileName: string): void;
    Size: number;
    SourceField: string;
    SourceTable: string;
    Type: number;
    ValidateOnSet: boolean;
    ValidationRule: string;
    ValidationText: string;
    Value: any;
    VisibleValue: any;
  }

  declare interface DAO$Fields {
    Append(Field: DAO$Field): void;
    +Count: number;
    Delete(Name: string): void;
    Item(Item: number | string): DAO$Field;
    Refresh(): void;
    (Item: number | string): DAO$Field;
  }

  declare class DAO$Group {
    constructor(): this;
    CreateUser(Name?: string, PID?: string, Password?: string): DAO$User;
    Name: string;
    PID: string;
    DAO$Properties: DAO$Properties;
    DAO$Users: DAO$Users;
  }

  declare interface DAO$Groups {
    Append(Group: DAO$Group): void;
    +Count: number;
    Delete(Name: string): void;
    Item(Item: number | string): DAO$Group;
    Refresh(): void;
    (Item: number | string): DAO$Group;
  }

  declare class DAO$Index {
    constructor(): this;
    Clustered: boolean;
    CreateField(Name?: string): DAO$Field;
    CreateProperty(
      Name?: string,
      Type?: $Values<typeof DAO$DataTypeEnum>,
      Value?: any,
      DDL?: boolean
    ): DAO$Property;
    DistinctCount: number;
    DAO$Fields: DAO$Fields;
    Foreign: boolean;
    IgnoreNulls: boolean;
    Name: string;
    Primary: boolean;
    DAO$Properties: DAO$Properties;
    Required: boolean;
    Unique: boolean;
  }

  declare interface DAO$Indexes {
    Append(Index: DAO$Index): void;
    +Count: number;
    Delete(Name: string): void;
    Item(Item: number | string): DAO$Index;
    Refresh(): void;
    (Item: number | string): DAO$Index;
  }

  declare class DAO$Parameter {
    constructor(): this;
    Direction: number;
    Name: string;
    DAO$Properties: DAO$Properties;
    Type: number;
    Value: any;
  }

  declare interface DAO$Parameters {
    +Count: number;
    Item(Item: number | string): DAO$Parameter;
    Refresh(): void;
    (Item: number | string): DAO$Parameter;
  }

  declare interface DAO$Properties {
    Append(Property: DAO$Property): void;
    +Count: number;
    Delete(Name: string): void;
    Item(Item: number | string): DAO$Property;
    Refresh(): void;
    (Item: number | string): DAO$Property;
  }

  declare class DAO$Property {
    constructor(): this;
    Inherited: boolean;
    Name: string;
    DAO$Properties: DAO$Properties;
    Type: number;
    Value: any;
  }

  declare class DAO$QueryDef {
    constructor(): this;
    CacheSize: number;
    Cancel(): void;
    Close(): void;
    Connect: string;
    CreateProperty(
      Name?: string,
      Type?: $Values<typeof DAO$DataTypeEnum>,
      Value?: any,
      DDL?: boolean
    ): DAO$Property;
    DateCreated: VarDate;
    Execute(Options?: $Values<typeof DAO$RecordsetOptionEnum>): void;
    DAO$Fields: DAO$Fields;
    hStmt: number;
    LastUpdated: VarDate;
    MaxRecords: number;
    Name: string;
    ODBCTimeout: number;
    OpenRecordset(
      Type?: $Values<typeof DAO$RecordsetTypeEnum>,
      Options?: $Values<typeof DAO$RecordsetOptionEnum>,
      LockEdit?: $Values<typeof DAO$LockTypeEnum>
    ): DAO$Recordset;
    DAO$Parameters: DAO$Parameters;
    Prepare: $Values<typeof DAO$QueryDefStateEnum>;
    DAO$Properties: DAO$Properties;
    RecordsAffected: number;
    ReturnsRecords: boolean;
    SQL: string;
    StillExecuting: boolean;
    Type: $Values<typeof DAO$QueryDefTypeEnum>;
    Updatable: boolean;
  }

  declare interface DAO$QueryDefs {
    Append(QueryDef: DAO$QueryDef): void;
    +Count: number;
    Delete(Name: string): void;
    Item(Item: number | string): DAO$QueryDef;
    Refresh(): void;
    (Item: number | string): DAO$QueryDef;
  }

  declare interface DAO$Recordset {
    AbsolutePosition: number;
    AddNew(): void;
    +BatchCollisionCount: number;
    +BatchCollisions: SafeArray<DAO$Bookmark>;
    BatchSize: number;
    +BOF: boolean;
    Bookmark: DAO$Bookmark;
    +Bookmarkable: boolean;
    CacheSize: number;
    CacheStart: DAO$Bookmark;
    Cancel(): void;

    /**
     * @param UpdateType [UpdateType=1]
     */
    CancelUpdate(UpdateType?: number): void;
    Clone(): DAO$Recordset;
    Close(): void;
    Collect(Item: any): any;
    Connection: DAO$Connection;
    CopyQueryDef(): DAO$QueryDef;
    +DateCreated: VarDate;
    Delete(): void;
    Edit(): void;
    +EditMode: $Values<typeof DAO$EditModeEnum>;
    +EOF: boolean;
    +Fields: DAO$Fields;
    FillCache(Rows?: number, StartBookmark?: string): void;
    Filter: string;
    FindFirst(Criteria: string): void;
    FindLast(Criteria: string): void;
    FindNext(Criteria: string): void;
    FindPrevious(Criteria: string): void;
    GetRows(NumRows?: number): any;
    +hStmt: number;
    Index: string;
    +LastModified: DAO$Bookmark;
    +LastUpdated: VarDate;
    LockEdits: boolean;
    Move(Rows: number, StartBookmark?: DAO$Bookmark): void;
    MoveFirst(): void;

    /**
     * @param Options [Options=0]
     */
    MoveLast(Options?: number): void;
    MoveNext(): void;
    MovePrevious(): void;
    +Name: string;
    NextRecordset(): boolean;
    +NoMatch: boolean;
    +ODBCFetchCount: number;
    +ODBCFetchDelay: number;
    OpenRecordset(
      Type?: $Values<typeof DAO$RecordsetTypeEnum>,
      Options?: $Values<typeof DAO$RecordsetOptionEnum>
    ): DAO$Recordset;
    +Parent: DAO$Database;
    PercentPosition: number;
    +Properties: DAO$Properties;
    +RecordCount: number;
    +RecordStatus: number;
    Requery(NewQueryDef?: DAO$QueryDef): void;
    +Restartable: boolean;
    Seek(
      Comparison: string,
      Key1: any,
      Key2?: any,
      Key3?: any,
      Key4?: any,
      Key5?: any,
      Key6?: any,
      Key7?: any,
      Key8?: any,
      Key9?: any,
      Key10?: any,
      Key11?: any,
      Key12?: any,
      Key13?: any
    ): void;
    Sort: string;
    +StillExecuting: boolean;
    +Transactions: boolean;
    +Type: $Values<typeof DAO$RecordsetTypeEnum>;
    +Updatable: boolean;

    /**
     * @param UpdateType [UpdateType=1]
     * @param Force [Force=false]
     */
    Update(
      UpdateType?: $Values<typeof DAO$UpdateTypeEnum>,
      Force?: boolean
    ): void;
    UpdateOptions: $Values<typeof DAO$UpdateCriteriaEnum>;
    +ValidationRule: string;
    +ValidationText: string;
    (FieldIndex: number | string): DAO$Field;
  }

  declare interface DAO$Recordsets {
    +Count: number;
    Item(Item: number | string): DAO$Recordset;
    Refresh(): void;
    (Item: number | string): DAO$Recordset;
  }

  declare class DAO$Relation {
    constructor(): this;
    Attributes: $Values<typeof DAO$RelationAttributeEnum>;
    CreateField(Name?: string): DAO$Field;
    DAO$Fields: DAO$Fields;
    ForeignTable: string;
    Name: string;
    PartialReplica: boolean;
    DAO$Properties: DAO$Properties;
    Table: string;
  }

  declare interface DAO$Relations {
    Append(Relation: DAO$Relation): void;
    +Count: number;
    Delete(Name: string): void;
    Item(Item: number | string): DAO$Relation;
    Refresh(): void;
    (Item: number | string): DAO$Relation;
  }

  declare class DAO$TableDef {
    constructor(): this;
    Attributes: $Values<typeof DAO$TableDefAttributeEnum>;
    ConflictTable: string;
    Connect: string;
    CreateField(
      Name?: string,
      Type?: $Values<typeof DAO$DataTypeEnum>,
      Size?: number
    ): DAO$Field;
    CreateIndex(Name?: string): DAO$Index;
    CreateProperty(
      Name?: string,
      Type?: $Values<typeof DAO$DataTypeEnum>,
      Value?: any,
      DDL?: boolean
    ): DAO$Property;
    DateCreated: VarDate;
    DAO$Fields: DAO$Fields;
    DAO$Indexes: DAO$Indexes;
    LastUpdated: VarDate;
    Name: string;
    OpenRecordset(
      Type?: $Values<typeof DAO$RecordsetTypeEnum>,
      Options?: $Values<typeof DAO$RecordsetOptionEnum>
    ): DAO$Recordset;
    DAO$Properties: DAO$Properties;
    RecordCount: number;
    RefreshLink(): void;
    ReplicaFilter: string | boolean;
    SourceTableName: string;
    Updatable: boolean;
    ValidationRule: string;
    ValidationText: string;
  }

  declare interface DAO$TableDefs {
    Append(TableDef: DAO$TableDef): void;
    +Count: number;
    Delete(Name: string): void;
    Item(Item: number | string): DAO$TableDef;
    Refresh(): void;
    (Item: number | string): DAO$TableDef;
  }

  declare class DAO$User {
    constructor(): this;
    CreateGroup(Name?: string, PID?: string): DAO$Group;
    DAO$Groups: DAO$Groups;
    Name: string;
    NewPassword(bstrOld: string, bstrNew: string): void;
    Password: string;
    PID: string;
    DAO$Properties: DAO$Properties;
  }

  declare interface DAO$Users {
    Append(User: DAO$User): void;
    +Count: number;
    Delete(Name: string): void;
    Item(Item: number | string): DAO$User;
    Refresh(): void;
    (Item: number | string): DAO$User;
  }

  declare class DAO$Workspace {
    constructor(): this;
    BeginTrans(): void;
    Close(): void;

    /**
     * @param Options [Options=0]
     */
    CommitTrans(Options?: number): void;
    DAO$Connections: DAO$Connections;

    /**
     * @param Connect Specify one of the following:
     * *  the locale, using one of the language constants
     * * the password, in the form `;pwd=MyNewPassword'`
     * * both the constant and a password, e.g. `dbLangGreek + ';pwd=MyNewPassword'`
     */
    CreateDatabase(
      Name: string,
      Connect: string,
      Option?: $Values<typeof DAO$DatabaseTypeEnum>
    ): DAO$Database;
    CreateGroup(Name?: string, PID?: string): DAO$Group;
    CreateUser(Name?: string, PID?: string, Password?: string): DAO$User;
    DAO$Databases: DAO$Databases;
    DefaultCursorDriver: number;
    DAO$Groups: DAO$Groups;
    hEnv: number;
    IsolateODBCTrans: number;
    LoginTimeout: number;
    Name: string;

    /**
     * @param Connect ODBC connection string; prepend with `ODBC;`
     */
    OpenConnection(
      Name: string,
      Options?:
        | $Values<typeof DAO$DriverPromptEnum>
        | typeof DAO$RecordsetOptionEnum.dbRunAsync,
      ReadOnly?: boolean,
      Connect?: string
    ): DAO$Connection;
    OpenDatabase(
      Name: string,
      Exclusive?: boolean,
      ReadOnly?: boolean,
      Connect?: string
    ): DAO$Database;
    DAO$Properties: DAO$Properties;
    Rollback(): void;
    Type: number;
    UserName: string;
    DAO$Users: DAO$Users;
  }

  declare interface DAO$Workspaces {
    Append(Workspace: DAO$Workspace): void;
    +Count: number;
    Delete(Name: string): void;
    Item(Item: number | string): DAO$Workspace;
    Refresh(): void;
    (Item: number | string): DAO$Workspace;
  }
  declare interface ActiveXObjectNameMap {
    "DAO.DBEngine": DAO$DBEngine;
    "DAO.Field": DAO$Field;
    "DAO.Group": DAO$Group;
    "DAO.Index": DAO$Index;
    "DAO.PrivateDBEngine": DAO$DBEngine;
    "DAO.QueryDef": DAO$QueryDef;
    "DAO.Relation": DAO$Relation;
    "DAO.TableDef": DAO$TableDef;
    "DAO.User": DAO$User;
  }
}
