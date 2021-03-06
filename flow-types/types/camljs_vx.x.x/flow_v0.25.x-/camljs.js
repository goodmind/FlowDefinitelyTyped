declare module "camljs" {
  declare class CamlBuilder {
    constructor(): this;

    /**
     * Generate CAML Query, starting from <Where> tag
     */
    Where(): CamlBuilder$CamlBuilder$IFieldExpression;

    /**
 * Generate <View> tag for SP.CamlQuery
 * @param viewFields If omitted, default view fields are requested; otherwise, only values for the fields with the specified internal names are returned.
Specifying view fields is a good practice, as it decreases traffic between server and client.
 */
    View(viewFields?: string[]): CamlBuilder$CamlBuilder$IView;

    /**
     * Generate <ViewFields> tag for SPServices
     */
    ViewFields(
      viewFields: string[]
    ): CamlBuilder$CamlBuilder$IFinalizableToString;

    /**
     * Use for:
     * 1. SPServices CAMLQuery attribute
     * 2. Creating partial expressions
     * 3. In conjunction with Any & All clauses
     */
    static Expression(): CamlBuilder$CamlBuilder$IFieldExpression;
    static FromXml(xml: string): CamlBuilder$CamlBuilder$IRawQuery;
  }
  declare type CamlBuilder$IView = {
    Query(): CamlBuilder$IQuery,
    RowLimit(limit: number, paged?: boolean): CamlBuilder$IView,
    Scope(scope: CamlBuilder$ViewScope): CamlBuilder$IView
  } & CamlBuilder$IJoinable &
    CamlBuilder$IFinalizable;

  declare interface CamlBuilder$IJoinable {
    /**
     * Join the list you're querying with another list.
     * Joins are only allowed through a lookup field relation.
     * @param lookupFieldInternalName Internal name of the lookup field, that points to the list you're going to join in.
     * @alias alias for the joined list
     */
    InnerJoin(
      lookupFieldInternalName: string,
      alias: string
    ): CamlBuilder$IJoin;

    /**
     * Join the list you're querying with another list.
     * Joins are only allowed through a lookup field relation.
     * @param lookupFieldInternalName Internal name of the lookup field, that points to the list you're going to join in.
     * @alias alias for the joined list
     */
    LeftJoin(lookupFieldInternalName: string, alias: string): CamlBuilder$IJoin;
  }

  declare type CamlBuilder$IJoin = {
    /**
     * Select projected field for using in the main Query body
     * @param remoteFieldAlias By this alias, the field can be used in the main Query body.
     */
    Select(
      remoteFieldInternalName: string,
      remoteFieldAlias: string
    ): CamlBuilder$IProjectableView
  } & CamlBuilder$IJoinable;

  declare type CamlBuilder$IProjectableView = {
    /**
     * Select projected field for using in the main Query body
     * @param remoteFieldAlias By this alias, the field can be used in the main Query body.
     */
    Select(
      remoteFieldInternalName: string,
      remoteFieldAlias: string
    ): CamlBuilder$IProjectableView
  } & CamlBuilder$IView;

  declare class CamlBuilder$ViewScope {
    constructor(...args: empty): mixed;
    static +Recursive: Class<CamlBuilder$ViewScope__Recursive> &
      CamlBuilder$ViewScope__Recursive &
      0; // 0
    static +RecursiveAll: Class<CamlBuilder$ViewScope__RecursiveAll> &
      CamlBuilder$ViewScope__RecursiveAll &
      1; // 1
    static +FilesOnly: Class<CamlBuilder$ViewScope__FilesOnly> &
      CamlBuilder$ViewScope__FilesOnly &
      2; // 2
  }

  declare class CamlBuilder$ViewScope__Recursive mixins CamlBuilder$ViewScope {}
  declare class CamlBuilder$ViewScope__RecursiveAll
    mixins CamlBuilder$ViewScope {}
  declare class CamlBuilder$ViewScope__FilesOnly mixins CamlBuilder$ViewScope {}

  declare type CamlBuilder$IQuery = {
    Where(): CamlBuilder$IFieldExpression
  } & CamlBuilder$IGroupable;

  declare interface CamlBuilder$IFinalizableToString {
    /**
     * Get the resulting CAML query as string
     */
    ToString(): string;
  }

  declare type CamlBuilder$IFinalizable = {
    /**
     * Get the resulting CAML query as SP.CamlQuery object
     */
    ToCamlQuery(): any
  } & CamlBuilder$IFinalizableToString;

  declare type CamlBuilder$ISortable = {
    /**
     * Adds OrderBy clause to the query
     * @param fieldInternalName Internal field of the first field by that the data will be sorted (ascending)
     * @param override This is only necessary for large lists. DON'T use it unless you know what it is for!
     * @param useIndexForOrderBy This is only necessary for large lists. DON'T use it unless you know what it is for!
     */
    OrderBy(
      fieldInternalName: string,
      override?: boolean,
      useIndexForOrderBy?: boolean
    ): CamlBuilder$ISortedQuery,

    /**
     * Adds OrderBy clause to the query (using descending order for the first field).
     * @param fieldInternalName Internal field of the first field by that the data will be sorted (descending)
     * @param override This is only necessary for large lists. DON'T use it unless you know what it is for!
     * @param useIndexForOrderBy This is only necessary for large lists. DON'T use it unless you know what it is for!
     */
    OrderByDesc(
      fieldInternalName: string,
      override?: boolean,
      useIndexForOrderBy?: boolean
    ): CamlBuilder$ISortedQuery
  } & CamlBuilder$IFinalizable;

  declare type CamlBuilder$IGroupable = {
    /**
     * Adds GroupBy clause to the query.
     * @param collapse If true, only information about the groups is retrieved, otherwise items are also retrieved.
     */
    GroupBy(fieldInternalName: any): CamlBuilder$IGroupedQuery
  } & CamlBuilder$ISortable;

  declare type CamlBuilder$IExpression = {
    /**
     * Adds And clause to the query.
     */
    And(): CamlBuilder$IFieldExpression,

    /**
     * Adds Or clause to the query.
     */
    Or(): CamlBuilder$IFieldExpression
  } & CamlBuilder$IGroupable;

  declare type CamlBuilder$IGroupedQuery = {} & CamlBuilder$ISortable;

  declare type CamlBuilder$ISortedQuery = {
    /**
     * Specifies next order field (ascending)
     */
    ThenBy(fieldInternalName: string): any,

    /**
     * Specifies next order field (descending)
     */
    ThenByDesc(fieldInternalName: string): any
  } & CamlBuilder$IFinalizable;

  declare interface CamlBuilder$IFieldExpression {
    /**
     * Adds And clauses to the query. Use for creating bracket-expressions in conjuction with CamlBuilder.Expression().
     */
    All(...conditions: CamlBuilder$IExpression[]): CamlBuilder$IExpression;

    /**
     * Adds Or clauses to the query. Use for creating bracket-expressions in conjuction with CamlBuilder.Expression().
     */
    Any(...conditions: CamlBuilder$IExpression[]): CamlBuilder$IExpression;

    /**
     * Adds And clauses to the query. Use for creating bracket-expressions in conjuction with CamlBuilder.Expression().
     */
    All(conditions: CamlBuilder$IExpression[]): CamlBuilder$IExpression;

    /**
     * Adds Or clauses to the query. Use for creating bracket-expressions in conjuction with CamlBuilder.Expression().
     */
    Any(conditions: CamlBuilder$IExpression[]): CamlBuilder$IExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Text
     */
    TextField(internalName: string): CamlBuilder$ITextFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Boolean
     */
    BooleanField(internalName: string): CamlBuilder$IBooleanFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is URL
     */
    UrlField(internalName: string): CamlBuilder$ITextFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Number
     */
    NumberField(internalName: string): CamlBuilder$INumberFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Counter (usually ID fields)
     */
    CounterField(internalName: string): CamlBuilder$INumberFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Integer
     */
    IntegerField(internalName: string): CamlBuilder$INumberFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is User
     */
    UserField(internalName: string): CamlBuilder$IUserFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Lookup
     */
    LookupField(internalName: string): CamlBuilder$ILookupFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is LookupMulti
     */
    LookupMultiField(
      internalName: string
    ): CamlBuilder$ILookupMultiFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is UserMulti
     */
    UserMultiField(internalName: string): CamlBuilder$IUserMultiFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Date
     */
    DateField(internalName: string): CamlBuilder$IDateTimeFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is DateTime
     */
    DateTimeField(internalName: string): CamlBuilder$IDateTimeFieldExpression;

    /**
     * Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is ModStat (moderation status)
     */
    ModStatField(internalName: string): CamlBuilder$IModStatFieldExpression;

    /**
 * Used in queries for retrieving recurring calendar events.
 * NOTICE: DateRangesOverlap with overlapType other than Now cannot be used with SP.CamlQuery, because it doesn't support
 * CalendarDate and ExpandRecurrence query options. Lists.asmx, however, supports them, so you can still use DateRangesOverlap
 * with SPServices.
 * @param overlapType Defines type of overlap: return all events for a day, for a week, for a month or for a year
 * @param calendarDate Defines date that will be used for determining events for which exactly day/week/month/year will be returned.
This value is ignored for overlapType=Now, but for the other overlap types it is mandatory.
 * @param eventDateField Internal name of "Start Time" field (default: "EventDate" - all OOTB Calendar lists use this name)
 * @param endDateField Internal name of "End Time" field (default: "EndDate" - all OOTB Calendar lists use this name)
 * @param recurrenceIDField Internal name of "Recurrence ID" field (default: "RecurrenceID" - all OOTB Calendar lists use this name)
 */
    DateRangesOverlap(
      overlapType: CamlBuilder$DateRangesOverlapType,
      calendarDate: string,
      eventDateField?: string,
      endDateField?: string,
      recurrenceIDField?: string
    ): CamlBuilder$IExpression;
  }

  declare interface CamlBuilder$IBooleanFieldExpression {
    /**
     * Checks whether the value of the field is True
     */
    IsTrue(): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is False
     */
    IsFalse(): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is equal to the specified value
     */
    EqualTo(value: boolean): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is not equal to the specified value
     */
    NotEqualTo(value: boolean): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field was specified by user
     */
    IsNull(): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field was not specified by user
     */
    IsNotNull(): CamlBuilder$IExpression;
  }

  declare interface CamlBuilder$INumberFieldExpression {
    /**
     * Checks whether the value of the field is equal to the specified value
     */
    EqualTo(value: number): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is not equal to the specified value
     */
    NotEqualTo(value: number): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is greater than the specified value
     */
    GreaterThan(value: number): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is less than the specified value
     */
    LessThan(value: number): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is greater than or equal to the specified value
     */
    GreaterThanOrEqualTo(value: number): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is less than or equal to the specified value
     */
    LessThanOrEqualTo(value: number): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field was specified by user
     */
    IsNull(): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field was not specified by user
     */
    IsNotNull(): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is equal to one of the specified values
     */
    In(arrayOfValues: number[]): CamlBuilder$IExpression;
  }

  declare interface CamlBuilder$IDateTimeFieldExpression {
    /**
     * Checks whether the value of the field was specified by user
     */
    IsNull(): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field was not specified by user
     */
    IsNotNull(): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is equal to the specified value
     */
    EqualTo(value: Date): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is not equal to the specified value
     */
    NotEqualTo(value: Date): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is greater than the specified value
     */
    GreaterThan(value: Date): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is less than the specified value
     */
    LessThan(value: Date): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is greater than or equal to the specified value
     */
    GreaterThanOrEqualTo(value: Date): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is less than or equal to the specified value
     */
    LessThanOrEqualTo(value: Date): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is equal to one of the specified values
     */
    In(arrayOfValues: Date[]): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is equal to the specified value.
     * The datetime value should be defined in ISO 8601 format!
     */
    EqualTo(value: string): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is not equal to the specified value.
     * The datetime value should be defined in ISO 8601 format!
     */
    NotEqualTo(value: string): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is greater than the specified value.
     * The datetime value should be defined in ISO 8601 format!
     */
    GreaterThan(value: string): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is less than the specified value.
     * The datetime value should be defined in ISO 8601 format!
     */
    LessThan(value: string): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is greater than or equal to the specified value.
     * The datetime value should be defined in ISO 8601 format!
     */
    GreaterThanOrEqualTo(value: string): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is less than or equal to the specified value.
     * The datetime value should be defined in ISO 8601 format!
     */
    LessThanOrEqualTo(value: string): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is equal to one of the specified values.
     * The datetime value should be defined in ISO 8601 format!
     */
    In(arrayOfValues: string[]): CamlBuilder$IExpression;
  }

  declare interface CamlBuilder$ITextFieldExpression {
    /**
     * Checks whether the value of the field is equal to the specified value
     */
    EqualTo(value: string): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is not equal to the specified value
     */
    NotEqualTo(value: string): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field contains the specified substring
     */
    Contains(value: string): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field begins with the specified substring
     */
    BeginsWith(value: string): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field was specified by user
     */
    IsNull(): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field was not specified by user
     */
    IsNotNull(): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is equal to one of the specified values
     */
    In(arrayOfValues: string[]): CamlBuilder$IExpression;
  }

  declare interface CamlBuilder$IUserFieldExpression {
    /**
     * DEPRECATED. Please use IsIn* methods instead. This property will be removed in next release(!!)
     */
    Membership: CamlBuilder$IMembership;

    /**
     * Checks whether the value of the User field is equal to id of the current user
     */
    EqualToCurrentUser(): CamlBuilder$IExpression;

    /**
     * Checks whether the group specified by the value of the field includes the current user.
     */
    IsInCurrentUserGroups(): CamlBuilder$IExpression;

    /**
     * Checks whether the user specified by the value of the field is member of the specified SharePoint Group.
     */
    IsInSPGroup(groupId: number): CamlBuilder$IExpression;

    /**
     * Checks whether the user specified by the value of the field is member of current SPWeb groups.
     */
    IsInSPWebGroups(): CamlBuilder$IExpression;

    /**
     * Checks whether the user specified by the value of the field is in current SPWeb users.
     */
    IsInSPWebAllUsers(): CamlBuilder$IExpression;

    /**
     * Checks whether the user specified by the value of the field has received the rights to the site directly (not through a group).
     */
    IsInSPWebUsers(): CamlBuilder$IExpression;

    /**
     * Specifies that id of the user will be used for further comparisons.
     */
    Id(): CamlBuilder$INumberFieldExpression;

    /**
     * Specifies that lookup target field value will be used for further comparisons.
     */
    ValueAsText(): CamlBuilder$ITextFieldExpression;
  }

  /**
   * DEPRECATED!! Please use UserField(...).IsIn* methods instead. This interface will be removed in the next release
   */
  declare interface CamlBuilder$IMembership {
    /**
     * DEPRECATED. Please use UserField(...).IsInCurrentUserGroups() instead
     */
    CurrentUserGroups(): CamlBuilder$IExpression;

    /**
     * DEPRECATED. Please use UserField(...).IsInSPGroup() instead
     */
    SPGroup(groupId: number): CamlBuilder$IExpression;

    /**
     * DEPRECATED. Please use UserField(...).IsInSPWeb* methods instead
     */
    SPWeb: CamlBuilder$IMembershipSPWeb;
  }

  /**
   * DEPRECATED!! Please use UserField(...).IsInSPWeb* methods instead. This interface will be removed in the next release
   */
  declare interface CamlBuilder$IMembershipSPWeb {
    /**
     * DEPRECATED. Please use UserField(...).IsInSPWebAllUsers() instead
     */
    AllUsers(): CamlBuilder$IExpression;

    /**
     * DEPRECATED. Please use UserField(...).IsInSPWebUsers() instead
     */
    Users(): CamlBuilder$IExpression;

    /**
     * DEPRECATED. Please use UserField(...).IsInSPWebGroups() instead
     */
    Groups(): CamlBuilder$IExpression;
  }

  declare interface CamlBuilder$ILookupFieldExpression {
    /**
     * Specifies that lookup id value will be used.
     */
    Id(): CamlBuilder$INumberFieldExpression;

    /**
     * Specifies that lookup value will be used and this value is of type Text
     */
    ValueAsText(): CamlBuilder$ITextFieldExpression;

    /**
     * Specifies that lookup value will be used and this value is of type Number
     */
    ValueAsNumber(): CamlBuilder$INumberFieldExpression;

    /**
     * Specifies that lookup value will be used and this value is of type Date
     */
    ValueAsDate(): CamlBuilder$IDateTimeFieldExpression;

    /**
     * Specifies that lookup value will be used and this value is of type DateTime
     */
    ValueAsDateTime(): CamlBuilder$IDateTimeFieldExpression;

    /**
     * Specifies that lookup value will be used and this value is of type Boolean
     */
    ValueAsBoolean(): CamlBuilder$IBooleanFieldExpression;
  }

  declare interface CamlBuilder$ILookupMultiFieldExpression {
    /**
     * Checks a condition against every item in the multi lookup value
     */
    IncludesSuchItemThat(): CamlBuilder$ILookupFieldExpression;

    /**
     * Checks whether the field values collection is empty
     */
    IsNull(): CamlBuilder$IExpression;

    /**
     * Checks whether the field values collection is not empty
     */
    IsNotNull(): CamlBuilder$IExpression;

    /**
     * DEPRECATED: use "IncludesSuchItemThat().ValueAsText().EqualTo(value)" instead.
     */
    Includes(value: any): CamlBuilder$IExpression;

    /**
     * DEPRECATED: use "IncludesSuchItemThat().ValueAsText().NotEqualTo(value)" instead.
     */
    NotIncludes(value: any): CamlBuilder$IExpression;

    /**
     * DEPRECATED: "Eq" operation in CAML works exactly the same as "Includes". To avoid confusion, please use Includes.
     */
    EqualTo(value: any): CamlBuilder$IExpression;

    /**
     * DEPRECATED: "Neq" operation in CAML works exactly the same as "NotIncludes". To avoid confusion, please use NotIncludes.
     */
    NotEqualTo(value: any): CamlBuilder$IExpression;
  }

  declare interface CamlBuilder$IUserMultiFieldExpression {
    /**
     * Checks a condition against every item in the multi lookup value
     */
    IncludesSuchItemThat(): CamlBuilder$IUserFieldExpression;

    /**
     * Checks whether the field values collection is empty
     */
    IsNull(): CamlBuilder$IExpression;

    /**
     * Checks whether the field values collection is not empty
     */
    IsNotNull(): CamlBuilder$IExpression;

    /**
     * DEPRECATED: use "IncludesSuchItemThat().ValueAsText().EqualTo(value)" instead.
     */
    Includes(value: any): CamlBuilder$IExpression;

    /**
     * DEPRECATED: use "IncludesSuchItemThat().ValueAsText().NotEqualTo(value)" instead.
     */
    NotIncludes(value: any): CamlBuilder$IExpression;

    /**
     * DEPRECATED: "Eq" operation in CAML works exactly the same as "Includes". To avoid confusion, please use Includes.
     */
    EqualTo(value: any): CamlBuilder$IExpression;

    /**
     * DEPRECATED: "Neq" operation in CAML works exactly the same as "NotIncludes". To avoid confusion, please use NotIncludes.
     */
    NotEqualTo(value: any): CamlBuilder$IExpression;
  }

  declare interface CamlBuilder$IModStatFieldExpression {
    /**
     * Represents moderation status ID.
     */
    ModStatId(): CamlBuilder$INumberFieldExpression;

    /**
     * Checks whether the value of the field is Approved - same as ModStatId.EqualTo(0)
     */
    IsApproved(): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is Rejected - same as ModStatId.EqualTo(1)
     */
    IsRejected(): CamlBuilder$IExpression;

    /**
     * Checks whether the value of the field is Pending - same as ModStatId.EqualTo(2)
     */
    IsPending(): CamlBuilder$IExpression;

    /**
     * Represents moderation status as localized text. In most cases it is better to use ModStatId in the queries instead of ValueAsText.
     */
    ValueAsText(): CamlBuilder$ITextFieldExpression;
  }

  declare interface CamlBuilder$IRawQuery {
    /**
     * Change Where clause
     */
    ReplaceWhere(): CamlBuilder$IFieldExpression;
    ModifyWhere(): CamlBuilder$IRawQueryModify;
  }

  declare interface CamlBuilder$IRawQueryModify {
    AppendOr(): CamlBuilder$IFieldExpression;
    AppendAnd(): CamlBuilder$IFieldExpression;
  }

  declare class CamlBuilder$DateRangesOverlapType {
    constructor(...args: empty): mixed;
    static +Now: Class<CamlBuilder$DateRangesOverlapType__Now> &
      CamlBuilder$DateRangesOverlapType__Now &
      0; // 0
    static +Day: Class<CamlBuilder$DateRangesOverlapType__Day> &
      CamlBuilder$DateRangesOverlapType__Day &
      1; // 1
    static +Week: Class<CamlBuilder$DateRangesOverlapType__Week> &
      CamlBuilder$DateRangesOverlapType__Week &
      2; // 2
    static +Month: Class<CamlBuilder$DateRangesOverlapType__Month> &
      CamlBuilder$DateRangesOverlapType__Month &
      3; // 3
    static +Year: Class<CamlBuilder$DateRangesOverlapType__Year> &
      CamlBuilder$DateRangesOverlapType__Year &
      4; // 4
  }

  declare class CamlBuilder$DateRangesOverlapType__Now
    mixins CamlBuilder$DateRangesOverlapType {}
  declare class CamlBuilder$DateRangesOverlapType__Day
    mixins CamlBuilder$DateRangesOverlapType {}
  declare class CamlBuilder$DateRangesOverlapType__Week
    mixins CamlBuilder$DateRangesOverlapType {}
  declare class CamlBuilder$DateRangesOverlapType__Month
    mixins CamlBuilder$DateRangesOverlapType {}
  declare class CamlBuilder$DateRangesOverlapType__Year
    mixins CamlBuilder$DateRangesOverlapType {}

  declare class CamlBuilder$Internal {
    static createView(viewFields?: string[]): CamlBuilder$IView;
    static createViewFields(
      viewFields: string[]
    ): CamlBuilder$IFinalizableToString;
    static createWhere(): CamlBuilder$IFieldExpression;
    static createExpression(): CamlBuilder$IFieldExpression;
    static createRawQuery(xml: string): CamlBuilder$IRawQuery;
  }

  declare class CamlBuilder$CamlValues {
    /**
     * Dynamic value that represents Id of the current user
     */
    static UserID: string;

    /**
     * Dynamic value that represents current date
     */
    static Today: string;

    /**
     * Dynamic value that represents current date with specified offset (may be negative)
     */
    static TodayWithOffset(offsetDays: number): string;
    static Now: string;

    /**
     * Dynamic value that represents a property of the current list
     */
    static ListProperty: {
      Created: string,
      DefaultViewUrl: string,
      Description: string,
      EnableSyndication: string,
      ItemCount: string,
      LinkTitle: string,
      MajorVersionLimit: string,
      MajorWithMinorVersionsLimit: string,
      RelativeFolderPath: string,
      Title: string,
      ViewSelector: string
    };

    /**
     * Dynamic value that represents a property of the current SPWeb
     */
    static ProjectProperty: {
      BlogCategoryTitle: string,
      BlogPostTitle: string,
      Description: string,
      RecycleBinEnabled: string,
      SiteOwnerName: string,
      SiteUrl: string,
      Title: string,
      Url: string
    };
  }
}
