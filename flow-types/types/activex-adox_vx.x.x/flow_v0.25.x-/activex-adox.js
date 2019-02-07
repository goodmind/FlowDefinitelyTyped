declare module "activex-adox" {
  declare class ADOX$ActionEnum {
    constructor(...args: empty): mixed;
    static +adAccessDeny: Class<ADOX$ActionEnum__adAccessDeny> &
      ADOX$ActionEnum__adAccessDeny &
      3; // 3
    static +adAccessGrant: Class<ADOX$ActionEnum__adAccessGrant> &
      ADOX$ActionEnum__adAccessGrant &
      1; // 1
    static +adAccessRevoke: Class<ADOX$ActionEnum__adAccessRevoke> &
      ADOX$ActionEnum__adAccessRevoke &
      4; // 4
    static +adAccessSet: Class<ADOX$ActionEnum__adAccessSet> &
      ADOX$ActionEnum__adAccessSet &
      2; // 2
  }

  declare class ADOX$ActionEnum__adAccessDeny mixins ADOX$ActionEnum {}
  declare class ADOX$ActionEnum__adAccessGrant mixins ADOX$ActionEnum {}
  declare class ADOX$ActionEnum__adAccessRevoke mixins ADOX$ActionEnum {}
  declare class ADOX$ActionEnum__adAccessSet mixins ADOX$ActionEnum {}

  declare class ADOX$AllowNullsEnum {
    constructor(...args: empty): mixed;
    static +adIndexNullsAllow: Class<ADOX$AllowNullsEnum__adIndexNullsAllow> &
      ADOX$AllowNullsEnum__adIndexNullsAllow &
      0; // 0
    static +adIndexNullsDisallow: Class<ADOX$AllowNullsEnum__adIndexNullsDisallow> &
      ADOX$AllowNullsEnum__adIndexNullsDisallow &
      1; // 1
    static +adIndexNullsIgnore: Class<ADOX$AllowNullsEnum__adIndexNullsIgnore> &
      ADOX$AllowNullsEnum__adIndexNullsIgnore &
      2; // 2
    static +adIndexNullsIgnoreAny: Class<ADOX$AllowNullsEnum__adIndexNullsIgnoreAny> &
      ADOX$AllowNullsEnum__adIndexNullsIgnoreAny &
      4; // 4
  }

  declare class ADOX$AllowNullsEnum__adIndexNullsAllow
    mixins ADOX$AllowNullsEnum {}
  declare class ADOX$AllowNullsEnum__adIndexNullsDisallow
    mixins ADOX$AllowNullsEnum {}
  declare class ADOX$AllowNullsEnum__adIndexNullsIgnore
    mixins ADOX$AllowNullsEnum {}
  declare class ADOX$AllowNullsEnum__adIndexNullsIgnoreAny
    mixins ADOX$AllowNullsEnum {}

  declare class ADOX$ColumnAttributesEnum {
    constructor(...args: empty): mixed;
    static +adColFixed: Class<ADOX$ColumnAttributesEnum__adColFixed> &
      ADOX$ColumnAttributesEnum__adColFixed &
      1; // 1
    static +adColNullable: Class<ADOX$ColumnAttributesEnum__adColNullable> &
      ADOX$ColumnAttributesEnum__adColNullable &
      2; // 2
  }

  declare class ADOX$ColumnAttributesEnum__adColFixed
    mixins ADOX$ColumnAttributesEnum {}
  declare class ADOX$ColumnAttributesEnum__adColNullable
    mixins ADOX$ColumnAttributesEnum {}

  declare class ADOX$InheritTypeEnum {
    constructor(...args: empty): mixed;
    static +adInheritBoth: Class<ADOX$InheritTypeEnum__adInheritBoth> &
      ADOX$InheritTypeEnum__adInheritBoth &
      3; // 3
    static +adInheritContainers: Class<ADOX$InheritTypeEnum__adInheritContainers> &
      ADOX$InheritTypeEnum__adInheritContainers &
      2; // 2
    static +adInheritNone: Class<ADOX$InheritTypeEnum__adInheritNone> &
      ADOX$InheritTypeEnum__adInheritNone &
      0; // 0
    static +adInheritNoPropogate: Class<ADOX$InheritTypeEnum__adInheritNoPropogate> &
      ADOX$InheritTypeEnum__adInheritNoPropogate &
      4; // 4
    static +adInheritObjects: Class<ADOX$InheritTypeEnum__adInheritObjects> &
      ADOX$InheritTypeEnum__adInheritObjects &
      1; // 1
  }

  declare class ADOX$InheritTypeEnum__adInheritBoth
    mixins ADOX$InheritTypeEnum {}
  declare class ADOX$InheritTypeEnum__adInheritContainers
    mixins ADOX$InheritTypeEnum {}
  declare class ADOX$InheritTypeEnum__adInheritNone
    mixins ADOX$InheritTypeEnum {}
  declare class ADOX$InheritTypeEnum__adInheritNoPropogate
    mixins ADOX$InheritTypeEnum {}
  declare class ADOX$InheritTypeEnum__adInheritObjects
    mixins ADOX$InheritTypeEnum {}

  declare class ADOX$KeyTypeEnum {
    constructor(...args: empty): mixed;
    static +adKeyForeign: Class<ADOX$KeyTypeEnum__adKeyForeign> &
      ADOX$KeyTypeEnum__adKeyForeign &
      2; // 2
    static +adKeyPrimary: Class<ADOX$KeyTypeEnum__adKeyPrimary> &
      ADOX$KeyTypeEnum__adKeyPrimary &
      1; // 1
    static +adKeyUnique: Class<ADOX$KeyTypeEnum__adKeyUnique> &
      ADOX$KeyTypeEnum__adKeyUnique &
      3; // 3
  }

  declare class ADOX$KeyTypeEnum__adKeyForeign mixins ADOX$KeyTypeEnum {}
  declare class ADOX$KeyTypeEnum__adKeyPrimary mixins ADOX$KeyTypeEnum {}
  declare class ADOX$KeyTypeEnum__adKeyUnique mixins ADOX$KeyTypeEnum {}

  declare class ADOX$ObjectTypeEnum {
    constructor(...args: empty): mixed;
    static +adPermObjColumn: Class<ADOX$ObjectTypeEnum__adPermObjColumn> &
      ADOX$ObjectTypeEnum__adPermObjColumn &
      2; // 2
    static +adPermObjDatabase: Class<ADOX$ObjectTypeEnum__adPermObjDatabase> &
      ADOX$ObjectTypeEnum__adPermObjDatabase &
      3; // 3
    static +adPermObjProcedure: Class<ADOX$ObjectTypeEnum__adPermObjProcedure> &
      ADOX$ObjectTypeEnum__adPermObjProcedure &
      4; // 4
    static +adPermObjProviderSpecific: Class<ADOX$ObjectTypeEnum__adPermObjProviderSpecific> &
      ADOX$ObjectTypeEnum__adPermObjProviderSpecific &
      -1; // -1
    static +adPermObjTable: Class<ADOX$ObjectTypeEnum__adPermObjTable> &
      ADOX$ObjectTypeEnum__adPermObjTable &
      1; // 1
    static +adPermObjView: Class<ADOX$ObjectTypeEnum__adPermObjView> &
      ADOX$ObjectTypeEnum__adPermObjView &
      5; // 5
  }

  declare class ADOX$ObjectTypeEnum__adPermObjColumn
    mixins ADOX$ObjectTypeEnum {}
  declare class ADOX$ObjectTypeEnum__adPermObjDatabase
    mixins ADOX$ObjectTypeEnum {}
  declare class ADOX$ObjectTypeEnum__adPermObjProcedure
    mixins ADOX$ObjectTypeEnum {}
  declare class ADOX$ObjectTypeEnum__adPermObjProviderSpecific
    mixins ADOX$ObjectTypeEnum {}
  declare class ADOX$ObjectTypeEnum__adPermObjTable
    mixins ADOX$ObjectTypeEnum {}
  declare class ADOX$ObjectTypeEnum__adPermObjView mixins ADOX$ObjectTypeEnum {}

  declare class ADOX$RightsEnum {
    constructor(...args: empty): mixed;
    static +adRightCreate: Class<ADOX$RightsEnum__adRightCreate> &
      ADOX$RightsEnum__adRightCreate &
      16384; // 16384
    static +adRightDelete: Class<ADOX$RightsEnum__adRightDelete> &
      ADOX$RightsEnum__adRightDelete &
      65536; // 65536
    static +adRightDrop: Class<ADOX$RightsEnum__adRightDrop> &
      ADOX$RightsEnum__adRightDrop &
      256; // 256
    static +adRightExclusive: Class<ADOX$RightsEnum__adRightExclusive> &
      ADOX$RightsEnum__adRightExclusive &
      512; // 512
    static +adRightExecute: Class<ADOX$RightsEnum__adRightExecute> &
      ADOX$RightsEnum__adRightExecute &
      536870912; // 536870912
    static +adRightFull: Class<ADOX$RightsEnum__adRightFull> &
      ADOX$RightsEnum__adRightFull &
      268435456; // 268435456
    static +adRightInsert: Class<ADOX$RightsEnum__adRightInsert> &
      ADOX$RightsEnum__adRightInsert &
      32768; // 32768
    static +adRightMaximumAllowed: Class<ADOX$RightsEnum__adRightMaximumAllowed> &
      ADOX$RightsEnum__adRightMaximumAllowed &
      33554432; // 33554432
    static +adRightNone: Class<ADOX$RightsEnum__adRightNone> &
      ADOX$RightsEnum__adRightNone &
      0; // 0
    static +adRightRead: Class<ADOX$RightsEnum__adRightRead> &
      ADOX$RightsEnum__adRightRead &
      -2147483648; // -2147483648
    static +adRightReadDesign: Class<ADOX$RightsEnum__adRightReadDesign> &
      ADOX$RightsEnum__adRightReadDesign &
      1024; // 1024
    static +adRightReadPermissions: Class<ADOX$RightsEnum__adRightReadPermissions> &
      ADOX$RightsEnum__adRightReadPermissions &
      131072; // 131072
    static +adRightReference: Class<ADOX$RightsEnum__adRightReference> &
      ADOX$RightsEnum__adRightReference &
      8192; // 8192
    static +adRightUpdate: Class<ADOX$RightsEnum__adRightUpdate> &
      ADOX$RightsEnum__adRightUpdate &
      1073741824; // 1073741824
    static +adRightWithGrant: Class<ADOX$RightsEnum__adRightWithGrant> &
      ADOX$RightsEnum__adRightWithGrant &
      4096; // 4096
    static +adRightWriteDesign: Class<ADOX$RightsEnum__adRightWriteDesign> &
      ADOX$RightsEnum__adRightWriteDesign &
      2048; // 2048
    static +adRightWriteOwner: Class<ADOX$RightsEnum__adRightWriteOwner> &
      ADOX$RightsEnum__adRightWriteOwner &
      524288; // 524288
    static +adRightWritePermissions: Class<ADOX$RightsEnum__adRightWritePermissions> &
      ADOX$RightsEnum__adRightWritePermissions &
      262144; // 262144
  }

  declare class ADOX$RightsEnum__adRightCreate mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightDelete mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightDrop mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightExclusive mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightExecute mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightFull mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightInsert mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightMaximumAllowed mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightNone mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightRead mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightReadDesign mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightReadPermissions
    mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightReference mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightUpdate mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightWithGrant mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightWriteDesign mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightWriteOwner mixins ADOX$RightsEnum {}
  declare class ADOX$RightsEnum__adRightWritePermissions
    mixins ADOX$RightsEnum {}

  declare class ADOX$RuleEnum {
    constructor(...args: empty): mixed;
    static +adRICascade: Class<ADOX$RuleEnum__adRICascade> &
      ADOX$RuleEnum__adRICascade &
      1; // 1
    static +adRINone: Class<ADOX$RuleEnum__adRINone> &
      ADOX$RuleEnum__adRINone &
      0; // 0
    static +adRISetDefault: Class<ADOX$RuleEnum__adRISetDefault> &
      ADOX$RuleEnum__adRISetDefault &
      3; // 3
    static +adRISetNull: Class<ADOX$RuleEnum__adRISetNull> &
      ADOX$RuleEnum__adRISetNull &
      2; // 2
  }

  declare class ADOX$RuleEnum__adRICascade mixins ADOX$RuleEnum {}
  declare class ADOX$RuleEnum__adRINone mixins ADOX$RuleEnum {}
  declare class ADOX$RuleEnum__adRISetDefault mixins ADOX$RuleEnum {}
  declare class ADOX$RuleEnum__adRISetNull mixins ADOX$RuleEnum {}

  declare class ADOX$SortOrderEnum {
    constructor(...args: empty): mixed;
    static +adSortAscending: Class<ADOX$SortOrderEnum__adSortAscending> &
      ADOX$SortOrderEnum__adSortAscending &
      1; // 1
    static +adSortDescending: Class<ADOX$SortOrderEnum__adSortDescending> &
      ADOX$SortOrderEnum__adSortDescending &
      2; // 2
  }

  declare class ADOX$SortOrderEnum__adSortAscending mixins ADOX$SortOrderEnum {}
  declare class ADOX$SortOrderEnum__adSortDescending
    mixins ADOX$SortOrderEnum {}

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
      ObjectType: ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      ObjectTypeId: any
    ): string;
    GetObjectOwner(ObjectName: string, ObjectType: ADOX$ObjectTypeEnum): string;
    ADOX$Groups: ADOX$Groups;
    ADOX$Procedures: ADOX$Procedures;

    /**
     * @param UserName Specifies the name of the **User** or **Group** to own the object
     * @param ObjectTypeId Specifies the GUID for a provider object type that is not defined by the OLE DB specification
     */
    SetObjectOwner(
      ObjectName: string,
      ObjectType: ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      UserName: string,
      ObjectTypeId: any
    ): void;
    SetObjectOwner(
      ObjectName: string,
      ObjectType: ADOX$ObjectTypeEnum,
      UserName: string
    ): void;
    ADOX$Tables: ADOX$Tables;
    ADOX$Users: ADOX$Users;
    ADOX$Views: ADOX$Views;
  }

  declare class ADOX$Column {
    constructor(): this;
    Attributes: ADOX$ColumnAttributesEnum;
    DefinedSize: number;
    Name: string;
    NumericScale: number;
    ParentCatalog: ADOX$Catalog;
    Precision: number;
    Properties: ADODB.Properties;
    RelatedColumn: string;
    SortOrder: ADOX$SortOrderEnum;
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
      ObjectType: ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      ObjectTypeId: any
    ): ADOX$RightsEnum;
    GetPermissions(
      Name: string | null,
      ObjectType: ADOX$ObjectTypeEnum
    ): ADOX$RightsEnum;
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
      ObjectType: ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      Action: ADOX$ActionEnum,
      Rights: ADOX$RightsEnum,
      Inherit: ADOX$InheritTypeEnum,
      ObjectTypeId: any
    ): void;
    SetPermissions(
      Name: string,
      ObjectType: ADOX$ObjectTypeEnum,
      Action: ADOX$ActionEnum,
      Rights: ADOX$RightsEnum,
      Inherit?: ADOX$InheritTypeEnum
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
    IndexNulls: ADOX$AllowNullsEnum;
    Name: string;
    PrimaryKey: boolean;
    Properties: ADODB.Properties;
    Unique: boolean;
  }

  declare interface ADOX$Indexes {
    Append(
      Item: ADOX$Index | string,
      ADOX$Columns?: string | SafeArray<string>
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
    DeleteRule: ADOX$RuleEnum;
    Name: string;
    RelatedTable: string;
    Type: ADOX$KeyTypeEnum;
    UpdateRule: ADOX$RuleEnum;
  }

  declare interface ADOX$Keys {
    /**
     * @param Type [Type=1]
     * @param RelatedTable [RelatedTable='']
     * @param RelatedColumn [RelatedColumn='']
     */
    Append(
      Item: ADOX$Key | string,
      Type?: ADOX$KeyTypeEnum,
      ADOX$Column?: string | SafeArray<string>,
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
      ObjectType: ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      ObjectTypeId: any
    ): ADOX$RightsEnum;
    GetPermissions(
      Name: string | null,
      ObjectType: ADOX$ObjectTypeEnum
    ): ADOX$RightsEnum;
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
      ObjectType: ADOX$ObjectTypeEnum.adPermObjProviderSpecific,
      Action: ADOX$ActionEnum,
      Rights: ADOX$RightsEnum,
      Inherit: ADOX$InheritTypeEnum,
      ObjectTypeId: any
    ): void;
    SetPermissions(
      Name: string,
      ObjectType: ADOX$ObjectTypeEnum,
      Action: ADOX$ActionEnum,
      Rights: ADOX$RightsEnum,
      Inherit?: ADOX$InheritTypeEnum
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
    "ADOX.Catalog": ADOX$ADOX$Catalog;
    "ADOX.Column": ADOX$ADOX$Column;
    "ADOX.Group": ADOX$ADOX$Group;
    "ADOX.Index": ADOX$ADOX$Index;
    "ADOX.Key": ADOX$ADOX$Key;
    "ADOX.Table": ADOX$ADOX$Table;
    "ADOX.User": ADOX$ADOX$User;
  }
}
