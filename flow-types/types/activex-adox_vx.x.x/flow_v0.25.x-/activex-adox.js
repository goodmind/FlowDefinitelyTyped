declare module "activex-adox" {
  declare var npm$namespace$ADOX: {
    ActionEnum: typeof ADOX$ActionEnum,
    AllowNullsEnum: typeof ADOX$AllowNullsEnum,
    ColumnAttributesEnum: typeof ADOX$ColumnAttributesEnum,
    InheritTypeEnum: typeof ADOX$InheritTypeEnum,
    KeyTypeEnum: typeof ADOX$KeyTypeEnum,
    ObjectTypeEnum: typeof ADOX$ObjectTypeEnum,
    RightsEnum: typeof ADOX$RightsEnum,
    RuleEnum: typeof ADOX$RuleEnum,
    SortOrderEnum: typeof ADOX$SortOrderEnum,
    Catalog: typeof ADOX$Catalog,
    Column: typeof ADOX$Column,
    Group: typeof ADOX$Group,
    Index: typeof ADOX$Index,
    Key: typeof ADOX$Key,
    Procedure: typeof ADOX$Procedure,
    Table: typeof ADOX$Table,
    User: typeof ADOX$User,
    View: typeof ADOX$View
  };

  declare var ADOX$ActionEnum: {|
    +adAccessDeny: 3, // 3
    +adAccessGrant: 1, // 1
    +adAccessRevoke: 4, // 4
    +adAccessSet: 2 // 2
  |};

  declare var ADOX$AllowNullsEnum: {|
    +adIndexNullsAllow: 0, // 0
    +adIndexNullsDisallow: 1, // 1
    +adIndexNullsIgnore: 2, // 2
    +adIndexNullsIgnoreAny: 4 // 4
  |};

  declare var ADOX$ColumnAttributesEnum: {|
    +adColFixed: 1, // 1
    +adColNullable: 2 // 2
  |};

  declare var ADOX$InheritTypeEnum: {|
    +adInheritBoth: 3, // 3
    +adInheritContainers: 2, // 2
    +adInheritNone: 0, // 0
    +adInheritNoPropogate: 4, // 4
    +adInheritObjects: 1 // 1
  |};

  declare var ADOX$KeyTypeEnum: {|
    +adKeyForeign: 2, // 2
    +adKeyPrimary: 1, // 1
    +adKeyUnique: 3 // 3
  |};

  declare var ADOX$ObjectTypeEnum: {|
    +adPermObjColumn: 2, // 2
    +adPermObjDatabase: 3, // 3
    +adPermObjProcedure: 4, // 4
    +adPermObjProviderSpecific: -1, // -1
    +adPermObjTable: 1, // 1
    +adPermObjView: 5 // 5
  |};

  declare var ADOX$RightsEnum: {|
    +adRightCreate: 16384, // 16384
    +adRightDelete: 65536, // 65536
    +adRightDrop: 256, // 256
    +adRightExclusive: 512, // 512
    +adRightExecute: 536870912, // 536870912
    +adRightFull: 268435456, // 268435456
    +adRightInsert: 32768, // 32768
    +adRightMaximumAllowed: 33554432, // 33554432
    +adRightNone: 0, // 0
    +adRightRead: -2147483648, // -2147483648
    +adRightReadDesign: 1024, // 1024
    +adRightReadPermissions: 131072, // 131072
    +adRightReference: 8192, // 8192
    +adRightUpdate: 1073741824, // 1073741824
    +adRightWithGrant: 4096, // 4096
    +adRightWriteDesign: 2048, // 2048
    +adRightWriteOwner: 524288, // 524288
    +adRightWritePermissions: 262144 // 262144
  |};

  declare var ADOX$RuleEnum: {|
    +adRICascade: 1, // 1
    +adRINone: 0, // 0
    +adRISetDefault: 3, // 3
    +adRISetNull: 2 // 2
  |};

  declare var ADOX$SortOrderEnum: {|
    +adSortAscending: 1, // 1
    +adSortDescending: 2 // 2
  |};

  declare class ADOX$Catalog {
    constructor(): this;

    /**
     * Can be set to a Connection object or a string. Returns the active Connection object, or `null`
     */
    ActiveConnection: string | ADODB.Connection | null;

    /**
     * The **Create** method creates and opens a new ADO Connection to the data source specified in _ConnectString_. If successful, the new **Connection** object is assigned to the **ActiveConnection** property.
     *
     * An error will occur if the provider does not support creating new catalogs.
     * @param ConnectString Connection string
     */
    Create(ConnectString: string): void;

    /**
     * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification
     */
    GetObjectOwner(
      ObjectName: string,
      ObjectType: typeof ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      ObjectTypeId: any
    ): string;
    GetObjectOwner(
      ObjectName: string,
      ObjectType: $Values<typeof ADOX$ObjectTypeEnum>
    ): string;
    ADOX$Groups: ADOX$Groups;
    ADOX$Procedures: ADOX$Procedures;

    /**
     * @param UserName Specifies the name of the **User** or **Group** to own the object
     * @param ObjectTypeId Specifies the GUID for a provider object type that is not defined by the OLE DB specification
     */
    SetObjectOwner(
      ObjectName: string,
      ObjectType: typeof ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      UserName: string,
      ObjectTypeId: any
    ): void;
    SetObjectOwner(
      ObjectName: string,
      ObjectType: $Values<typeof ADOX$ObjectTypeEnum>,
      UserName: string
    ): void;
    ADOX$Tables: ADOX$Tables;
    ADOX$Users: ADOX$Users;
    ADOX$Views: ADOX$Views;
  }

  declare class ADOX$Column {
    constructor(): this;
    Attributes: $Values<typeof ADOX$ColumnAttributesEnum>;
    DefinedSize: number;
    Name: string;
    NumericScale: number;
    ParentCatalog: ADOX$Catalog;
    Precision: number;
    Properties: ADODB.Properties;
    RelatedColumn: string;
    SortOrder: $Values<typeof ADOX$SortOrderEnum>;
    Type: ADODB.DataTypeEnum;
  }

  declare interface ADOX$Columns {
    /**
     * @param Type [Type=202]
     * @param DefinedSize [DefinedSize=0]
     */
    Append(
      Item: ADOX$Column | string,
      Type?: ADODB.DataTypeEnum,
      DefinedSize?: number
    ): void;
    +Count: number;
    Delete(Item: string | number): void;
    Item(Item: string | number): ADOX$Column;
    Refresh(): void;
    (Item: string | number): ADOX$Column;
  }

  declare class ADOX$Group {
    constructor(): this;

    /**
     * @param Name Specifies the name of the object for which to set permissions. Pass `null` if you want to get the permissions for the object container.
     * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification.
     */
    GetPermissions(
      Name: string | null,
      ObjectType: typeof ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      ObjectTypeId: any
    ): $Values<typeof ADOX$RightsEnum>;
    GetPermissions(
      Name: string | null,
      ObjectType: $Values<typeof ADOX$ObjectTypeEnum>
    ): $Values<typeof ADOX$RightsEnum>;
    Name: string;
    ParentCatalog: ADOX$Catalog;
    Properties: ADODB.Properties;

    /**
     * @param Rights A bitmask of one or more of the **RightsEnum** constants, that indicates the rights to set.
     * @param Inherit [Inherit=0]
     * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification.
     */
    SetPermissions(
      Name: string,
      ObjectType: typeof ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      Action: $Values<typeof ADOX$ActionEnum>,
      Rights: $Values<typeof ADOX$RightsEnum>,
      Inherit: $Values<typeof ADOX$InheritTypeEnum>,
      ObjectTypeId: any
    ): void;
    SetPermissions(
      Name: string,
      ObjectType: $Values<typeof ADOX$ObjectTypeEnum>,
      Action: $Values<typeof ADOX$ActionEnum>,
      Rights: $Values<typeof ADOX$RightsEnum>,
      Inherit?: $Values<typeof ADOX$InheritTypeEnum>
    ): void;
    ADOX$Users: ADOX$Users;
  }

  declare interface ADOX$Groups {
    Append(Item: ADOX$Group | string): void;
    +Count: number;
    Delete(Item: string | number): void;
    Item(Item: string | number): ADOX$Group;
    Refresh(): void;
    (Item: string | number): ADOX$Group;
  }

  declare class ADOX$Index {
    constructor(): this;
    Clustered: boolean;
    ADOX$Columns: ADOX$Columns;
    IndexNulls: $Values<typeof ADOX$AllowNullsEnum>;
    Name: string;
    PrimaryKey: boolean;
    Properties: ADODB.Properties;
    Unique: boolean;
  }

  declare interface ADOX$Indexes {
    Append(
      Item: ADOX$Index | string,
      Columns?: string | SafeArray<string>
    ): void;
    +Count: number;
    Delete(Item: string | number): void;
    Item(Item: string | number): ADOX$Index;
    Refresh(): void;
    (Item: string | number): ADOX$Index;
  }

  declare class ADOX$Key {
    constructor(): this;
    ADOX$Columns: ADOX$Columns;
    DeleteRule: $Values<typeof ADOX$RuleEnum>;
    Name: string;
    RelatedTable: string;
    Type: $Values<typeof ADOX$KeyTypeEnum>;
    UpdateRule: $Values<typeof ADOX$RuleEnum>;
  }

  declare interface ADOX$Keys {
    /**
     * @param Type [Type=1]
     * @param RelatedTable [RelatedTable='']
     * @param RelatedColumn [RelatedColumn='']
     */
    Append(
      Item: ADOX$Key | string,
      Type?: $Values<typeof ADOX$KeyTypeEnum>,
      Column?: string | SafeArray<string>,
      RelatedTable?: string,
      RelatedColumn?: string
    ): void;
    +Count: number;
    Delete(Item: string | number): void;
    Item(Item: string | number): ADOX$Key;
    Refresh(): void;
    (Item: string | number): ADOX$Key;
  }

  declare class ADOX$Procedure {
    constructor(): this;
    Command: ADODB.Command;
    DateCreated: VarDate | null;
    DateModified: VarDate | null;
    Name: string;
  }

  declare interface ADOX$Procedures {
    Append(Name: string, Command: ADODB.Command): void;
    +Count: number;
    Delete(Item: string | number): void;
    Item(Item: string | number): ADOX$Procedure;
    Refresh(): void;
    (Item: string | number): ADOX$Procedure;
  }

  declare class ADOX$Table {
    constructor(): this;
    ADOX$Columns: ADOX$Columns;
    DateCreated: VarDate;
    DateModified: VarDate;
    ADOX$Indexes: ADOX$Indexes;
    ADOX$Keys: ADOX$Keys;
    Name: string;
    ParentCatalog: ADOX$Catalog;
    Properties: ADODB.Properties;
    Type: string;
  }

  declare interface ADOX$Tables {
    Append(Item: ADOX$Table | string): void;
    +Count: number;
    Delete(Item: string | number): void;
    Item(Item: string | number): ADOX$Table;
    Refresh(): void;
    (Item: string | number): ADOX$Table;
  }

  declare class ADOX$User {
    constructor(): this;
    ChangePassword(OldPassword: string, NewPassword: string): void;

    /**
     * @param Name Specifies the name of the object for which to set permissions. Pass `null` if you want to get the permissions for the object container.
     * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification.
     */
    GetPermissions(
      Name: string | null,
      ObjectType: typeof ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      ObjectTypeId: any
    ): $Values<typeof ADOX$RightsEnum>;
    GetPermissions(
      Name: string | null,
      ObjectType: $Values<typeof ADOX$ObjectTypeEnum>
    ): $Values<typeof ADOX$RightsEnum>;
    ADOX$Groups: ADOX$Groups;
    Name: string;
    ParentCatalog: ADOX$Catalog;
    Properties: ADODB.Properties;

    /**
     * @param Rights A bitmask of one or more of the **RightsEnum** constants, that indicates the rights to set.
     * @param Inherit [Inherit=0]
     * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification.
     */
    SetPermissions(
      Name: string,
      ObjectType: typeof ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      Action: $Values<typeof ADOX$ActionEnum>,
      Rights: $Values<typeof ADOX$RightsEnum>,
      Inherit: $Values<typeof ADOX$InheritTypeEnum>,
      ObjectTypeId: any
    ): void;
    SetPermissions(
      Name: string,
      ObjectType: $Values<typeof ADOX$ObjectTypeEnum>,
      Action: $Values<typeof ADOX$ActionEnum>,
      Rights: $Values<typeof ADOX$RightsEnum>,
      Inherit?: $Values<typeof ADOX$InheritTypeEnum>
    ): void;
  }

  declare interface ADOX$Users {
    /**
     * @param Password [Password='']
     */
    Append(Item: ADOX$User | string, Password?: string): void;
    +Count: number;
    Delete(Item: string | number): void;
    Item(Item: string | number): ADOX$User;
    Refresh(): void;
    (Item: string | number): ADOX$User;
  }

  declare class ADOX$View {
    constructor(): this;
    Command: ADODB.Command;
    DateCreated: VarDate;
    DateModified: VarDate;
    Name: string;
  }

  declare interface ADOX$Views {
    Append(Name: string, Command: ADODB.Command): void;
    +Count: number;
    Delete(Item: string | number): void;
    Item(Item: string | number): ADOX$View;
    Refresh(): void;
    (Item: string | number): ADOX$View;
  }
  declare interface ActiveXObjectNameMap {
    "ADOX.Catalog": ADOX$Catalog;
    "ADOX.Column": ADOX$Column;
    "ADOX.Group": ADOX$Group;
    "ADOX.Index": ADOX$Index;
    "ADOX.Key": ADOX$Key;
    "ADOX.Table": ADOX$Table;
    "ADOX.User": ADOX$User;
  }
}
