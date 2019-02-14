declare module "global" {
  declare var npm$namespace$Sdk: {
    Q: typeof Sdk$Q,
    ColumnSet: typeof Sdk$ColumnSet,
    ValueType: typeof Sdk$ValueType,
    Collection: typeof Sdk$Collection,
    EntityCollection: typeof Sdk$EntityCollection,
    EntityReferenceCollection: typeof Sdk$EntityReferenceCollection,
    RelatedEntityCollection: typeof Sdk$RelatedEntityCollection,
    AttributeCollection: typeof Sdk$AttributeCollection,
    FormattedValueCollection: typeof Sdk$FormattedValueCollection,
    RelatedEntitiesCollection: typeof Sdk$RelatedEntitiesCollection,
    AttributeBase: typeof Sdk$AttributeBase,
    Boolean: typeof Sdk$Boolean,
    DateTime: typeof Sdk$DateTime,
    Decimal: typeof Sdk$Decimal,
    Double: typeof Sdk$Double,
    Guid: typeof Sdk$Guid,
    Int: typeof Sdk$Int,
    Long: typeof Sdk$Long,
    Lookup: typeof Sdk$Lookup,
    Money: typeof Sdk$Money,
    OptionSet: typeof Sdk$OptionSet,
    PartyList: typeof Sdk$PartyList,
    String: typeof Sdk$String,
    EntityState: typeof Sdk$EntityState,
    Entity: typeof Sdk$Entity,
    EntityReference: typeof Sdk$EntityReference,
    OrganizationRequest: typeof Sdk$OrganizationRequest,
    OrganizationResponse: typeof Sdk$OrganizationResponse,
    FetchXmlToQueryExpressionRequest: typeof Sdk$FetchXmlToQueryExpressionRequest,
    FetchXmlToQueryExpressionResponse: typeof Sdk$FetchXmlToQueryExpressionResponse,
    QueryExpressionToFetchXmlRequest: typeof Sdk$QueryExpressionToFetchXmlRequest,
    QueryExpressionToFetchXmlResponse: typeof Sdk$QueryExpressionToFetchXmlResponse,
    RetrieveMetadataChangesRequest: typeof Sdk$RetrieveMetadataChangesRequest,
    RetrieveMetadataChangesResponse: typeof Sdk$RetrieveMetadataChangesResponse,
    SetStateRequest: typeof Sdk$SetStateRequest,
    SetStateResponse: typeof Sdk$SetStateResponse,
    Query: typeof npm$namespace$Sdk$Query,
    Util: typeof npm$namespace$Sdk$Util,
    Mdq: typeof npm$namespace$Sdk$Mdq
  };
  declare interface Sdk$IEntityView {
    attributes: Sdk$AttributeCollection;
    entityState: Sdk$EntityState;
    id: string;
    logicalName: string;
    relatedEntities: Sdk$RelatedEntityCollection;
  }

  declare interface Sdk$IEntityCollectionView {
    entityName: string;
    entities: Array<Sdk$IEntityView>;
    minActiveRowVersion: string;
    moreRecords: boolean;
    pagingCookie: string;
    totalRecordCount: number;
    totalRecordCountLimitExceeded: boolean;
  }

  declare interface Sdk$IEntityReferenceView {
    Id: string;
    Type: string;
    Name: string;
  }

  declare type Sdk$IEntityReferenceCollectionView = {} & Array<Sdk$IEntityReferenceView>;

  declare class Sdk$Q {
    /**
     * Creates a link between records.
     * @param entityName The logical name of the entity that is specified in the entityId parameter.
     * @param entityId The ID of the record to which the related records are associated.
     * @param relationship The name of the relationship to be used to create the link.
     * @param relatedEntities A collection of Sdk.EntityReference objects to be associated.
     */
    static associate(
      entityName: string,
      entityId: string,
      relationship: string,
      relatedEntities: Sdk$Collection<Sdk$EntityReference>
    ): Q.Promise<void>;

    /**
     * Creates an entity record and returns a string representation of the GUID value that is the Id of the created entity.
     * @param entity An entity instance.
     */
    static create(entity: Sdk$Entity): Q.Promise<string>;

    /**
     * Deletes an entity record
     * @param entityName The LogicalName of the entity to delete.
     * @param id An ID of the record to delete.
     */
    static del(entityName: string, id: string): Q.Promise<void>;

    /**
     * Removes a link between records.
     * @param entityName The logical name of the entity that is specified in the entityId parameter.
     * @param entityId The ID of the record to which the related records are disassociated.
     * @param relationship The name of the relationship to be used to remove the link.
     * @param relatedEntities A collection of Sdk.EntityReference objects to be disassociated.
     */
    static disassociate(
      entityName: string,
      entityId: string,
      relationship: string,
      relatedEntities: Sdk$Collection<Sdk$EntityReference>
    ): Q.Promise<void>;

    /**
     * Executes a SOAP Request using the SOAPAction Execute.
     * @param request A request object.
     */
    static execute(
      request: Sdk$OrganizationRequest
    ): Q.Promise<Sdk$OrganizationResponse>;

    /**
     * Retrieves an entity instance.
     * @param entityName The logical name of the entity to retrieve.
     * @param id The id of the entity to retrieve.
     * @param columnSet The columns of the entities to retrieve.
     */
    static retrieve(
      entityName: string,
      id: string,
      columnSet: Sdk$ColumnSet
    ): Q.Promise<Sdk$Entity>;

    /**
     * Retrieves the results of a query
     * @param query An Sdk.Query.QueryByAttribute query.
     */
    static retrieveMultiple(
      query: Sdk$QueryQueryByAttribute
    ): Q.Promise<Sdk$EntityCollection>;

    /**
     * Retrieves the results of a query
     * @param query An Sdk.Query.QueryExpression query.
     */
    static retrieveMultiple(
      query: Sdk$QueryQueryExpression
    ): Q.Promise<Sdk$EntityCollection>;

    /**
     * Retrieves the results of a query
     * @param query An Sdk.Query.FetchExpression query.
     */
    static retrieveMultiple(
      query: Sdk$QueryFetchExpression
    ): Q.Promise<Sdk$EntityCollection>;

    /**
     * Updates an entity instance.
     * @param entity An entity instance to update.
     */
    static update(entity: Sdk$Entity): Q.Promise<boolean>;
  }

  declare class Sdk$ColumnSet {
    /**
     * Specifies the attributes for which non- null values are returned from a query.
     * @param columns Comma separated string values for attribute logical names.
     */
    constructor(...columns: string[]): this;

    /**
     * Specifies the attributes for which non- null values are returned from a query.
     * @param columns An array of string values.
     */
    constructor(columns: string[]): this;

    /**
     * Specifies the attributes for which non- null values are returned from a query.
     * @param allColumns If Boolean true value is passed as the first parameter all columns will be included. (Not recommended for production code).
     */
    constructor(allColumns: boolean): this;

    /**
     * Gets the collection of column names.
     * @returns The collection of column names.
     */
    getColumns(): Sdk$Collection<string>;

    /**
     * Adds a column to the collection.
     * @param column The logical name of the attribute to add.
     */
    addColumn(column: string): void;

    /**
     * Adds a string array of column names.
     * @param columns A string array of column names.
     */
    addColumns(columns: Array<string>): void;

    /**
     * Sets the AllColumns property.
     * @params allColumns A boolean value.
     */
    setAllColumns(allColumns: boolean): void;

    /**
     * Whether all columns will be returned.
     */
    getAllColumns(): boolean;

    /**
     * Gets the number of columns.
     */
    getCount(): number;

    /**
     * Removes a column from the ColumnSet.
     * @param columnName The logical name of an attribute to be removed from the ColumnSet.
     * @param errorIfNotFound Whether to throw an error when the column to remove is not found. The default is false
     */
    removeColumn(columnName: string, errorIfNotFound?: boolean): void;

    /**
     * The XML node with "<d:columnSet>" as the root element.
     */
    toXml(): string;

    /**
     * XML nodes for columnSet properties.
     */
    toValueXml(): string;
  }

  declare class Sdk$ValueType {}

  declare class Sdk$Collection<T> {
    /**
     * A Collection for a specified type.
     * @param type The function that specifies the type.
     * @param items An array of items to add to the collection.
     */
    constructor(type: T, items?: Array<T>): this;

    /**
     * Gets the type defined for the collection.
     */
    getType(): T;

    /**
     * Adds an item to the collection.
     * @param item An item to add to the collection.
     */
    add(item: T): void;

    /**
     * Adds an array of objects to the collection.
     * @param items An array of items to add to the collection.
     */
    addRange(items: any[]): void;

    /**
     * Removes all items from the collection.
     */
    clear(): void;

    /**
     * Returns whether an object exists within the collection.
     * @param item The item to search in the collection.
     */
    contains(item: T): boolean;

    /**
     * Returns whether an object exists within the collection.
     * @param predicate A comparer function which is invoked for each item of the collection.
     */
    contains(predicate: (item: T) => boolean): boolean;

    /**
     * Returns an Sdk.Collection that contains all the items of this collection that satisfy the specified predicate function.
     * @param predicate A predicate function that takes a collection item as argument and returns a boolean.
     */
    select(predicate: (item: T) => boolean): Sdk$Collection<T>;

    /**
     * Applies the action contained within a delegate function.
     * @param fn Delegate function with parameters for item and index.
     */
    forEach(fn: (item: T, index: number) => any): void;

    /**
     * Gets the item in the collection at the specified index.
     * @param index The index of the item to return.
     */
    getByIndex(index: number): T;

    /**
     * Removes an item from the collection.
     * @param item A reference to the item to be removed.
     */
    remove(item: T): void;

    /**
     * Gets a copy of the array of items in the collection.
     */
    toArray(): Array<T>;

    /**
     * Returns the number of items in the collection.
     */
    getCount(): number;
  }

  declare class Sdk$EntityCollection {
    /**
     * Contains a collection of entity instances.
     * @param entities Initializes a new instance of the EntityCollection class setting the Sdk.Collection of Sdk.Entity objects.
     */
    constructor(entities: Sdk$Collection<Sdk$Entity>): this;

    /**
     * Adds an entity to the collection.
     * @param entity
     */
    addEntity(entity: Sdk$Entity): void;

    /**
     * Gets the collection of entities.
     */
    getEntities(): Sdk$Collection<Sdk$Entity>;

    /**
     * Gets an entity in the collection.
     * @param index The index of the entity in the collection.
     */
    getEntity(index: number): Sdk$Entity;

    /**
     * Gets an entity in the collection.
     * @param id The id of the entity in the collection.
     */
    getEntity(id: Sdk$Guid): Sdk$Entity;

    /**
     * Sets an item in the collection.
     * @param index The index of the entity in the collection.
     * @param value The Sdk.Entity value to set.
     */
    setEntity(index: number, value: Sdk$Entity): void;

    /**
     * Sets an item in the collection.
     * @param id The Sdk.Guid id of the entity in the collection.
     * @param value The Sdk.Entity value to set.
     */
    setEntity(id: Sdk$Guid, value: Sdk$Entity): void;

    /**
     * Gets the logical name of the entity.
     */
    getEntityName(): string;

    /**
     * Sets the logical name of the entity.
     * @param name The logical name of the entity.
     */
    setEntityName(name: string): void;

    /**
     * Gets the lowest active row version value.
     */
    getMinActiveRowVersion(): string;

    /**
     * Sets the lowest active row version value.
     * @param minActiveRowVersion The lowest active row version value.
     */
    setMinActiveRowVersion(minActiveRowVersion: string): void;

    /**
     * Gets whether there are more records available.
     */
    getMoreRecords(): boolean;

    /**
     * Sets whether there are more records available.
     * @param moreRecords Whether there are more records available.
     */
    setMoreRecords(moreRecords: boolean): void;

    /**
     * Gets the current paging information.
     */
    getPagingCookie(): string;

    /**
     * Sets the current paging information.
     * @param pagingCookie The current paging information.
     */
    setPagingCookie(pagingCookie: string): void;

    /**
     * Gets the total number of records in the collection if ReturnTotalRecordCount was true when the query was executed.
     */
    getTotalRecordCount(): number;

    /**
     * Sets the total number of records in the collection if ReturnTotalRecordCount was true when the query was executed.
     * @param totalRecordCount The total number of records in the collection if ReturnTotalRecordCount was true when the query was executed.
     */
    setTotalRecordCount(totalRecordCount: number): void;

    /**
     * Gets whether the results of the query exceeds the total record count.
     */
    getTotalRecordCountLimitExceeded(): boolean;

    /**
     * Sets whether the results of the query exceeds the total record count.
     * @param totalRecordCountLimitExceeded Whether the results of the query exceeds the total record count.
     */
    setTotalRecordCountLimitExceeded(
      totalRecordCountLimitExceeded: boolean
    ): void;

    /**
     * XML definition of an the child nodes of an entity.
     */
    toValueXml(): string;

    /**
     * Returns a view of the entity collection
     */
    view(): Sdk$IEntityCollectionView;
  }

  declare class Sdk$EntityReferenceCollection {
    /**
     * Contains a collection of EntityReference instances.
     * @param entityReferences Initializes a new instance of the EntityReferenceCollection class setting the Sdk.Collection of Sdk.EntityReference objects.
     */
    constructor(entityReferences?: Sdk$Collection<Sdk$EntityReference>): this;

    /**
     * Gets the collection of entity references.
     */
    getEntityReferences(): Sdk$Collection<Sdk$EntityReference>;

    /**
     * Sets the collection of entity references.
     * @param entityReferences The entity references
     */
    setEntityReferences(
      entityReferences: Sdk$Collection<Sdk$EntityReference>
    ): void;

    /**
     * Removes an entity reference to the collection.
     * @param entityReference The entity reference to remove.
     */
    remove(entityReference: Sdk$EntityReference): void;

    /**
     * Returns a view of the data in an entity reference collection instance.
     */
    view(): Sdk$IEntityReferenceCollectionView;

    /**
     * Returns the values of serialized entity reference collection as XML nodes.
     */
    toValueXml(): string;
  }

  declare class Sdk$RelatedEntityCollection mixins EntityCollection {}

  declare class Sdk$AttributeCollection mixins Collection<Sdk$AttributeBase> {
    constructor(): this;

    /**
     * Adds an attribute to the Attribute Collection.
     * @param attribute The attribute to add.
     * @param isChanged Override the the attribute IsChanged value.
     */
    add(attribute: Sdk$AttributeBase, isChanged?: boolean): void;

    /**
     * Gets the attributes in the collection.
     */
    getAttributes(): Sdk$Collection<Sdk$AttributeBase>;

    /**
     * Allows for a delegate function to be applied to each attribute in the collection.
     * @param fm The function to be applied. Function should have parameters for the attribute and the iterator i.e.: '(att,i)'
     */
    forEach(fn: (attribute: Sdk$AttributeBase, index: number) => any): void;

    /**
     * Returns all attributes in the collection.
     */
    get(): Sdk$Collection<Sdk$AttributeBase>;

    /**
     * Returns the attribute with matching name.
     * @param attribuetName
     */
    get(attribuetName: string): Sdk$AttributeBase;

    /**
     * Returns the attribute with matching index.
     * @param attribuetName
     */
    get(index: number): Sdk$AttributeBase;

    /**
     * Gets an attribute at a given index.
     * @param index The index.
     */
    getAttributeByIndex(index: number): Sdk$AttributeBase;

    /**
     * Gets an attribute with a given name.
     * @param name The Logical name of the attribute.
     */
    getAttributeByName(name: string): Sdk$AttributeBase;

    /**
     * Gets an array of the names of attributes in a collection.
     */
    getNames(): Array<string>;

    /**
     * The XML for an attribute collection.
     */
    toXml(action: string): string;
  }

  declare class Sdk$FormattedValueCollection {}

  declare class Sdk$RelatedEntitiesCollection {}

  declare class Sdk$AttributeBase {
    /**
     * Gets whether the value of the attribute has changed.
     */
    getIsChanged(): boolean;

    /**
     * Gets the logical name of the attribute.
     */
    getName(): string;

    /**
     * Gets the value type of the attribute.
     */
    getType(): Sdk$ValueType;

    /**
     * Gets the value of the attribute.
     * The type of value depends on the type of attribute.
     */
    getValue(): any;

    /**
     * Whether the value of the attribute is set.
     */
    isValueSet(): boolean;

    /**
     * Sets whether the value of the attribute has changed.
     * @param isChanged Whether the value of the attribute has changed.
     */
    setIsChanged(isChanged: boolean): void;

    /**
     * Sets the name of the attribute
     * @param name The name of the attribute.
     */
    setName(name: string): void;

    /**
     * For internal use only.
     * @param type The type of the attribute.
     */
    setType(type: Sdk$ValueType): void;

    /**
     * Sets the general value of the attribute
     * @param name The value of the attribute.
     */
    setValue(value: any): void;

    /**
     * XML node for Attribute.
     */
    toXml(action: string): string;
  }

  declare class Sdk$Boolean mixins AttributeBase {
    /**
     * A Boolean Attribute.
     * @param name The logical name of the attribute .
     * @param value The value of the managed property.
     */
    constructor(name: string, value?: boolean): this;

    /**
     * Gets the value of a Boolean attribute.
     */
    getValue(): boolean;

    /**
     * Sets the value of a Boolean attribute.
     * @param value
     */
    setValue(value: boolean): void;
  }

  declare class Sdk$DateTime mixins AttributeBase {
    /**
     * A DateTime Attribute.
     * @param name The logical name of the attribute.
     * @param value The value of the attribute.
     */
    constructor(name: string, value?: Date): this;

    /**
     * Gets the value of a DateTime attribute.
     */
    getValue(): Date;

    /**
     * Sets the value of a DateTime attribute.
     * @param value The value to set.
     */
    setValue(value: Date): void;
  }

  declare class Sdk$Decimal mixins AttributeBase {
    /**
     * A Decimal Attribute.
     * @param name The logical name of the attribute.
     * @param value The value of the attribute.
     */
    constructor(name: string, value?: number): this;

    /**
     * Gets the value of a Decimal attribute.
     */
    getValue(): number;

    /**
     * Sets the value of a Decimal attribute.
     * @param value The value to set.
     */
    setValue(value: number): void;
  }

  declare class Sdk$Double {
    /**
     * A Double Attribute.
     * @param name The logical name of the attribute.
     * @param value The value of the attribute.
     */
    constructor(name: string, value?: number): this;

    /**
     * Gets the value of a Double attribute.
     */
    getValue(): number;

    /**
     * Sets the value of a Double attribute.
     * @param value The value to set.
     */
    setValue(value: number): void;
  }

  declare class Sdk$Guid mixins AttributeBase {
    /**
     * A Guid Attribute.
     * @param name The logical name of the attribute.
     * @param value " The value of the attribute
     */
    constructor(name: string, value?: string): this;

    /**
     * Gets the value of a Guid attribute.
     */
    getValue(): string;

    /**
     * Sets the value of a Guid attribute.
     * @param value The value to set.
     */
    setValue(value: string): void;
  }

  declare class Sdk$Int mixins AttributeBase {
    /**
     * An Integer Attribute.
     * @param name The logical name of the attribute.
     * @param value The value of the attribute.
     */
    constructor(name: string, value?: number): this;

    /**
     * Gets the value of an Integer attribute.
     */
    getValue(): number;

    /**
     * Sets the value of an Integer attribute.
     * @param value The value to set.
     */
    setValue(value: number): void;
  }

  declare class Sdk$Long mixins AttributeBase {
    /**
     * A Long Attribute.
     * @param name The logical name of the attribute.
     * @param value The value of the attribute.
     */
    constructor(name: string, value?: number): this;

    /**
     * Gets the value of a Long attribute.
     */
    getValue(): number;

    /**
     * Sets the value of a Long attribute.
     * @param value The value to set.
     */
    setValue(value: number): void;
  }

  declare class Sdk$Lookup mixins AttributeBase {
    /**
     * A Lookup Attribute.
     * @param name The logical name of the attribute.
     * @param value The value of the attribute.
     */
    constructor(name: string, value?: Sdk$EntityReference): this;

    /**
     * Gets the value of a Lookup attribute.
     */
    getValue(): Sdk$EntityReference;

    /**
     * Sets the value of a Lookup attribute.
     * @param value The value to set.
     */
    setValue(value: Sdk$EntityReference): void;
  }

  declare class Sdk$Money mixins AttributeBase {
    /**
     * A Money Attribute.
     * @param name The logical name of the attribute.
     * @param value The value of the attribute.
     */
    constructor(name: string, value?: number): this;

    /**
     * Gets the value of a Money attribute.
     */
    getValue(): number;

    /**
     * Sets the value of a Money attribute.
     * @param value The value to set.
     */
    setValue(value: number): void;
  }

  declare class Sdk$OptionSet mixins AttributeBase {
    /**
     * An OptionSet Attribute.
     * @param name The logical name of the attribute.
     * @param value The value of the attribute.
     */
    constructor(name: string, value?: number): this;

    /**
     * Gets the value of a OptionSet attribute.
     */
    getValue(): number;

    /**
     * Sets the value of an OptionSet attribute.
     * @param value The value to set.
     */
    setValue(value: number): void;
  }

  declare class Sdk$PartyList mixins AttributeBase {
    /**
     * A PartyList Attribute.
     * @param name The logical name of the attribute.
     * @param value The value of the attribute.
     */
    constructor(name: string, value?: Sdk$EntityCollection): this;

    /**
     * Gets the value of a PartyList attribute.
     */
    getValue(): Sdk$EntityCollection;

    /**
     * Sets the value of a PartyList attribute.
     * @param value The value to set.
     */
    setValue(value: Sdk$EntityCollection): void;
  }

  declare class Sdk$String mixins AttributeBase {
    /**
     * A String Attribute.
     * @param name The logical name of the attribute.
     * @param value The value of the attribute.
     */
    constructor(name: string, value?: string): this;

    /**
     * Gets the value of a String attribute.
     */
    getValue(): string;

    /**
     * Sets the value of a String attribute.
     * @param value The value to set.
     */
    setValue(value: string): void;
  }

  declare class Sdk$EntityState {}

  declare class Sdk$Entity {
    /**
     * Represents an instance of an entity (a record).
     * @param type The logical name of the entity.
     */
    constructor(type: string): this;

    /**
     * Gets the collection of attributes for the entity.
     */
    getAttributes(): Sdk$AttributeCollection;

    /**
     * Gets the collection of attributes for the entity.
     * @param attributeName The attribute with matching name is returned.
     */
    getAttributes(attributeName: string): Sdk$AttributeBase;

    /**
     * Gets the collection of attributes for the entity.
     * @param index The attribute with matching index is returned.
     */
    getAttributes(index: number): Sdk$AttributeBase;

    /**
     * Checks whether the entity has an attribute that satisfies the specified predicate.
     * @param A comparer function that takes an Sdk.AttributeBase as argument and returns a boolean.
     */
    containsAttribute(
      predicate: (attribute: Sdk$AttributeBase) => boolean
    ): boolean;

    /**
     * Checks whether the entity has an attribute with the specified name.
     * @param The name of the attribute.
     */
    containsAttribute(name: string): boolean;

    /**
     * Sets the collection of attributes for the entity.
     * @param attributes The collection of attributes for the entity.
     */
    setAttributes(attributes: Sdk$AttributeCollection): void;

    /**
     * Gets the state of the entity.
     */
    getEntityState(): Sdk$EntityState;

    /**
     * Sets the state of the entity.
     * @param state The state of the entity.
     */
    setEntityState(state: Sdk$EntityState): void;

    /**
     * Gets the collection of formatted values for the entity attributes.
     */
    getFormattedValues(): Sdk$FormattedValueCollection;

    /**
     * Sets the collection of formatted values for the entity attributes.
     * @param values " The collection of formatted values for the entity attributes.
     */
    setFormattedValues(values: Sdk$FormattedValueCollection): void;

    /**
     * Gets the Id of the record represented by this entity instance.
     */
    getId(): string;

    /**
     * Sets the Id of the record represented by this entity instance.
     * @param id The Id of the record represented by this entity instance.
     * @param override Allow setting the Id property, for example when creating a new record from an existing one.
     */
    setId(id: string, override?: boolean): void;

    /**
     * Gets the logical name of the entity.
     */
    getType(): string;

    /**
     * Sets the logical name of the entity.
     * @param type The logical name of the entity.
     */
    setType(type: string): void;

    /**
     * Gets a collection of related entities.
     */
    getRelatedEntities(): Sdk$RelatedEntitiesCollection;

    /**
     * Sets a collection of related entities.
     * @param relatedEntities A collection of related entities.
     */
    setRelatedEntities(relatedEntities: Sdk$RelatedEntitiesCollection): void;

    /**
     * Adds an attribute with an optional value to a newly instantiated Sdk.Entity
     * @param attribute The attribute to add
     * @param isChanged Whether the attribute should be considered changed, the default is true.
     */
    addAttribute(attribute: Sdk$AttributeBase, isChanged?: boolean): void;

    /**
     * Adds an entity to the related entities.
     * @param relationshipSchemaName The relationship SchemaName.
     * @param entity The entity to add.
     */
    addRelatedEntity(relationshipSchemaName: string, entity: Sdk$Entity): void;

    /**
     * Gets the value to indicate whether data for the entity has changed.
     */
    getIsChanged(): boolean;

    /**
     * Sets the value to indicate whether data for the entity has changed.
     * @param isChanged The value to indicate whether data for the entity has changed.
     */
    setIsChanged(isChanged: boolean): void;

    /**
     * Gets the value of the specified attribute.
     * @param logicalName The logical name of the attribute.
     */
    getValue(logicalName: string): any;

    /**
     * Generates properties for the entity based on metadata.
     */
    initializeSubClass(metadata: Sdk$MdqIEntityMetadata): void;

    /**
     * Sets the value of the specified attribute.
     * @param logicalName The logical name of the attribute.
     * @param value The value for the attribute. Simple JavaScript types may be used for most attribute types. Sdk.EntityReference, Sdk.EntityCollection, and Sdk.BooleanManagedPropertyValue cannot use simple JavaScript types.
     */
    setValue(logicalName: string, value: Object): void;

    /**
     * Generates an entity reference.
     */
    toEntityReference(): Sdk$EntityReference;

    /**
     * Overrides the default toString method.
     */
    toString(): string;

    /**
     * XML definition of an the child nodes of an entity.
     * @param action
     */
    toValueXml(action: string): string;

    /**
     * XML definition of an entity where the root node is <entity>.
     */
    toXml(action: string): string;

    /**
     * Returns a view of the data in an entity instance
     */
    view(): Sdk$IEntityView;
  }

  declare class Sdk$EntityReference {
    /**
     * Identifies a record.
     * @param logicalName The logical name of the entity.
     * @param id The id of the record.
     * @param name The value of the primary attribute of the entity instance. This property can contain a value or null. This property is not automatically populated unless the EntityReference object has been retrieved from the server.
     */
    constructor(logicalName: string, id: string, name?: string): this;

    /**
     * Gets the logicalName representing the type of referenced entity.
     */
    getType(): string;

    /**
     * Gets the Id value of the referenced entity.
     */
    getId(): string;

    /**
     * Gets the primary attribute value of the referenced entity.
     */
    getName(): string;

    /**
     * Sets the logicalName representing the type of referenced entity.
     * @param type The logicalName representing the type of referenced entity.
     */
    setType(type: string): void;

    /**
     * Sets the Id value of the entity.
     * @param id The Id value of the entity.
     */
    setId(id: string): void;

    /**
     * Sets the primary attribute value of the referenced entity.
     * @param name The primary attribute value of the referenced entity.
     */
    setName(name: string): void;

    /**
     * Returns a serialized entity reference where the root element is <a:EntityReference>.
     */
    toXml(): string;

    /**
     * Returns the values of serialized entity reference as XML nodes.
     */
    toValueXml(): string;

    /**
     * Returns a view of the data in an EntityReference
     */
    view(): Sdk$IEntityReferenceView;
  }

  declare class Sdk$OrganizationRequest {
    /**
     * Sets the request XML.
     * @param xml The request XML.
     */
    setRequestXml(xml: string): void;

    /**
     * Gets the request XML.
     */
    getRequestXml(): string;

    /**
     * Sets the response type.
     * @param type A class that inherits from Sdk.OrganizationResponse.
     */
    setResponseType(type: Sdk$OrganizationResponse): void;

    /**
     * Gets the response type.
     */
    getResponseType(): Sdk$OrganizationResponse;
  }

  declare class Sdk$OrganizationResponse {}

  /**
   * Contains the data that is needed to convert a query in FetchXML to a QueryExpression.
   * @param fetchXml Sets the query to convert.
   */
  declare class Sdk$FetchXmlToQueryExpressionRequest
    mixins Sdk$OrganizationRequest {
    constructor(fetchXml: string): this;

    /**
     * Sets the query to convert.
     * @param The query to convert.
     */
    setFetchXml(value: string): void;
  }

  /**
   * Response to FetchXmlToQueryExpressionRequest.
   * @param responseXml The response XML to the FetchXmlToQueryExpressionRequest.
   */
  declare class Sdk$FetchXmlToQueryExpressionResponse
    mixins Sdk$OrganizationResponse {
    constructor(responseXml: string): this;

    /**
     * Gets the results of the query conversion.
     */
    getQuery(): Query$QueryExpression;
  }

  /**
   * Contains the data that is needed to  convert a query, which is represented as a QueryExpression class, to its equivalent query, which is represented as FetchXML.
   * @param query The query.
   */
  declare class Sdk$QueryExpressionToFetchXmlRequest
    mixins Sdk$OrganizationRequest {
    constructor(query: Sdk$QueryQueryBase): this;

    /**
     * Sets the query to convert.
     * @param query The query.
     * @param query
     */
    setQuery(query: Sdk$QueryQueryBase): void;
  }

  /**
   * Response to QueryExpressionToFetchXmlRequest.
   */
  declare class Sdk$QueryExpressionToFetchXmlResponse
    mixins Sdk$OrganizationResponse {
    constructor(responseXml: string): this;

    /**
     * Gets the results of the query conversion.
     */
    getFetchXml(): string;
  }

  /**
   * Request to retrieve metadata and metadata changes.
   * @param query The Sdk.Mdq.EntityQueryExpression that defines the query.
   * @param clientVersionStamp The Sdk.Mdq.RetrieveMetadataChangesResponse.ServerVersionStamp value from a previous request. When included only the metadata changes since the previous request will be returned.
   * @param deletedMetadataFilters An Sdk.Mdq.DeletedMetadataFilters enumeration value. When included the deleted metadata changes will be limited to the types defined by the enumeration.
   */
  declare class Sdk$RetrieveMetadataChangesRequest
    mixins Sdk$OrganizationRequest {
    constructor(
      query: Sdk$MdqEntityQueryExpression,
      clientVersionStamp?: string,
      deletedMetadataFilters?: Sdk$MdqDeletedMetadataFilters
    ): this;
    getEntityMetadata(): Sdk$MdqIEntityMetadata[];
    getServerVersionStamp(): string;
    getDeletedMetadata(): Object;
  }

  /**
   * Response to RetrieveMetadataChangesRequest.
   * @param resopnseXml The response XML.
   */
  declare class Sdk$RetrieveMetadataChangesResponse {
    constructor(responseXml: string): this;

    /**
     * *
     */
    getEntityMetadata(): Array<Mdq$IEntityMetadata>;

    /**
     * *
     */
    getServerVersionStamp(): string;

    /**
     * *
     */
    getDeletedMetadata(): any;
  }

  /**
   * Contains the data that is needed to set the state of an entity record.
   * @param entityMoniker Sets the entity.
   * @param state Sets the state of the entity record.
   * @param status Sets the status that corresponds to the State property.
   */
  declare class Sdk$SetStateRequest mixins Sdk$OrganizationRequest {
    constructor(
      entityMoniker: Sdk$EntityReference,
      state: number,
      status: number
    ): this;

    /**
     * Sets the entity.
     * @param value The entity.
     */
    setEntityMoniker(value: Sdk$EntityReference): void;

    /**
     * Sets the state of the entity record.
     * @param value The state of the entity record.
     */
    setState(value: number): void;

    /**
     * Sets the status that corresponds to the State property.
     * @param value The status that corresponds to the State property.
     */
    setStatus(value: number): void;
  }

  /**
   * Response to SetStateRequest.
   */
  declare class Sdk$SetStateResponse {
    constructor(responseXml: string): this;
  }

  declare var npm$namespace$Sdk$Query: {
    ConditionOperator: typeof Sdk$Query$ConditionOperator,
    JoinOperator: typeof Sdk$Query$JoinOperator,
    OrderType: typeof Sdk$Query$OrderType,
    LogicalOperator: typeof Sdk$Query$LogicalOperator,
    QueryBase: typeof Sdk$Query$QueryBase,
    QueryByAttribute: typeof Sdk$Query$QueryByAttribute,
    QueryExpression: typeof Sdk$Query$QueryExpression,
    OrderExpression: typeof Sdk$Query$OrderExpression,
    ConditionExpression: typeof Sdk$Query$ConditionExpression,
    FilterExpression: typeof Sdk$Query$FilterExpression,
    FetchExpression: typeof Sdk$Query$FetchExpression,
    LinkEntity: typeof Sdk$Query$LinkEntity,
    PagingInfo: typeof Sdk$Query$PagingInfo,
    ValueBase: typeof Sdk$Query$ValueBase,
    Booleans: typeof Sdk$Query$Booleans,
    Dates: typeof Sdk$Query$Dates,
    Decimals: typeof Sdk$Query$Decimals,
    Doubles: typeof Sdk$Query$Doubles,
    Ints: typeof Sdk$Query$Ints,
    Longs: typeof Sdk$Query$Longs,
    EntityReferences: typeof Sdk$Query$EntityReferences,
    Guids: typeof Sdk$Query$Guids,
    Money: typeof Sdk$Query$Money,
    OptionSets: typeof Sdk$Query$OptionSets,
    Strings: typeof Sdk$Query$Strings
  };
  declare class Sdk$Query$QueryBase {
    /**
     * Internal Use Only.
     * @param type An Abstract class for different query classes to inherit from.
     */
    constructor(type: string): this;

    /**
     * Gets the columns to include.
     */
    getColumnSet(): Sdk$ColumnSet;

    /**
     * Sets the columns to include.
     * @param columns An Sdk.ColumnSet instance.
     */
    setColumnSet(columns: Sdk$ColumnSet): void;

    /**
     * Sets the columns to include.
     * @param columns An array of attribute logical names for the columns to return.
     */
    setColumnSet(columns: Array<string>): void;

    /**
     * Sets the columns to include.
     * @param columns Pass each attribute logical name as an argument.
     */
    setColumnSet(...columns: string[]): void;

    /**
     */
    getQueryType(): string;

    /**
     * Gets the logical name of the entity.
     */
    getEntityName(): string;

    /**
     * Sets the logical name of the entity.
     * @param name The logical name of the entity.
     */
    setEntityName(name: string): void;

    /**
     * Gets the number of pages and the number of entity instances per page returned from the query.
     */
    getPageInfo(): Sdk$QueryPagingInfo;

    /**
     * Sets the number of pages and the number of entity instances per page returned from the query.
     * @param pageInfo The number of pages and the number of entity instances per page returned from the query.
     */
    setPageInfo(pageInfo: Sdk$QueryPagingInfo): void;

    /**
     * Adds the specified column to the column set.
     * @param columnName The logical name of the column to add.
     */
    addColumn(columnName: string): void;

    /**
     * Removes a column from the ColumnSet used by the query.
     * @param columnName The logical name of an attribute to be removed from the ColumnSet.
     * @param errorIfNotFound Whether to throw an error when the column to remove is not found. The default is false.
     */
    removeColumn(columnName: string, errorIfNotFound?: boolean): void;

    /**
     * Gets an Sdk.Collection of Sdk.Query.OrderExpression instances that define the order in which the entity instances are returned from the query.
     */
    getOrders(): Sdk$Collection<Sdk$QueryOrderExpression>;

    /**
     * Gets the number of rows to be returned.
     */
    getTopCount(): number;

    /**
     * Sets the number of rows to be returned.
     * @param count The number of rows to be returned.
     */
    setTopCount(count: number): void;

    /**
     * Gets the serialized QueryExpression.
     */
    toXml(): string;

    /**
     * Gets the serialized QueryExpression values.
     */
    toValueXml(): string;
  }

  declare class Sdk$Query$QueryByAttribute mixins QueryBase {
    /**
     * Initializes a new instance of the QueryByAttribute class setting the entity name.
     * @param entityName The logical name of the entity.
     */
    constructor(entityName: string): this;

    /**
     * Gets An Sdk.Collection of Sdk.AttributeBase attributes.
     */
    getAttributeValues(): Sdk$Collection<Sdk$AttributeBase>;

    /**
     * Sets an Sdk.Collection of Sdk.Query.OrderExpression instances that define the order in which the entity instances are returned from the query.
     * @param orders An Sdk.Collection of Sdk.Query.OrderExpression instances that define the order in which the entity instances are returned from the query.
     */
    setOrders(orders: Sdk$Collection<Sdk$QueryOrderExpression>): void;

    /**
     * Adds the attribute with values to include in the query.
     * @param attributeValue One of the classes that inherit from Sdk.AttributeBase including the value to use as criteria.
     */
    addAttributeValue(attributeValue: Sdk$AttributeBase): void;

    /**
     * Adds an order to apply to the results of the query.
     * @param order An order expression.
     */
    addOrder(order: Sdk$QueryOrderExpression): void;

    /**
     * Removes an attribute with values to include in the query.
     * @param attributeValue One of the classes that inherit from Sdk.AttributeBase including the value to use as criteria.
     * @param errorIfNotFound Whether to throw an error when the attribute to remove is not found. The default is false.
     */
    removeAttributeValue(
      attributeValue: Sdk$AttributeBase,
      errorIfNotFound?: boolean
    ): void;
  }

  declare class Sdk$Query$QueryExpression mixins QueryBase {
    /**
     * Initializes a new instance of the QueryExpression class setting the entity name.
     * @param entityName The name of the entity.
     */
    constructor(entityName: string): this;

    /**
     * Gets the complex condition and logical filter expressions that filter the results of the query.
     */
    getCriteria(): Query$FilterExpression;

    /**
     * Sets the complex condition and logical filter expressions that filter the results of the query.
     * @param criteria The query condition and filter criteria.
     */
    setCriteria(criteria: Query$FilterExpression): void;

    /**
     * Gets whether the results of the query contain duplicate entity instances.
     */
    getDistinct(): boolean;

    /**
     * Sets whether the results of the query contain duplicate entity instances.
     */
    setDistinct(isDistinct: boolean): void;

    /**
     * Gets an Sdk.Collection of Sdk.Query.LinkEntity instances.
     */
    getLinkEntities(): Sdk$Collection<Query$LinkEntity>;

    /**
     * Gets a value that indicates that no shared locks are issued against the data that would prohibit other transactions from modifying the data in the records returned from the query.
     */
    getNoLock(): boolean;

    /**
     * Sets a value that indicates that no shared locks are issued against the data that would prohibit other transactions from modifying the data in the records returned from the query.
     * @param isNoLock True if there are no shared locks are issued against the data that would prohibit other transactions from modifying the data in the records returned from the query; otherwise, false.
     */
    setNoLock(isNoLock: boolean): void;

    /**
     * Contains a condition expression used to filter the results of the query.
     * @param entityName The logical name of the entity in the condition expression.
     * @param attributeName The logical name of the attribute in the condition expression.
     * @param operator The condition operator.
     * @param values The value(s) to compare. Use one of the following classes that inherit from Sdk.Query.ValueBase:
     * Sdk.Query.Booleans
     * Sdk.Query.BooleanManagedProperties
     * Sdk.Query.Dates
     * Sdk.Query.Decimals
     * Sdk.Query.Doubles
     * Sdk.Query.EntityReferences
     * Sdk.Query.Guids
     * Sdk.Query.Ints
     * Sdk.Query.Longs
     * Sdk.Query.Money
     * Sdk.Query.OptionSets
     * Sdk.Query.Strings
     */
    addCondition(
      entityName: string,
      attributeName: string,
      conditionOperator: Sdk$QueryConditionOperator,
      values: Sdk$QueryValueBase
    ): void;

    /**
     * Adds the specified link to the query expression setting the entity name to link to, the attribute name to link from and the attribute name to link to.
     * @param firstParam An Sdk.Query.LinkEntity instance.
     */
    addLink(firstParam: Sdk$QueryLinkEntity): void;

    /**
     * Adds the specified link to the query expression setting the entity name to link to, the attribute name to link from and the attribute name to link to.
     * @param firstParam The name of entity to link from.
     * @param linkFromAttributeName The name of the attribute to link from.
     * @param linkToAttributeName The name of the attribute to link to.
     * @param joinOperator The join operator. The default value is Inner
     */
    addLink(
      firstParam: string,
      linkFromAttributeName: string,
      linkToAttributeName: string,
      joinOperator: Sdk$QueryJoinOperator
    ): void;

    /**
     * Adds the specified order expression to the query expression.
     * @param attributeName The name of the attribute.
     * @param orderType The order, ascending or descending. Ascending is the default if not specified.
     */
    addOrder(attributeName: string, orderType: Sdk$QueryOrderType): void;
  }

  declare class Sdk$Query$OrderExpression {}

  declare class Sdk$Query$ConditionExpression {
    /**
     * Contains a condition expression used to filter the results of the query.
     * @param name entityName The logical name of the entity in the condition expression.
     * @param name attributeName The logical name of the attribute in the condition expression.
     * @param name operator The condition operator.
     * @param name values The value(s) to compare.
     * Use one of the following classes that inherit from Sdk.Query.ValueBase: </para>
     * - Sdk.Query.Booleans </para>
     * - Sdk.Query.BooleanManagedProperties </para>
     * - Sdk.Query.Dates </para>
     * - Sdk.Query.Decimals </para>
     * - Sdk.Query.Doubles </para>
     * - Sdk.Query.EntityReferences </para>
     * - Sdk.Query.Guids </para>
     * - Sdk.Query.Ints </para>
     * - Sdk.Query.Longs </para>
     * - Sdk.Query.Money </para>
     * - Sdk.Query.OptionSets </para>
     * - Sdk.Query.Strings </para>
     */
    constructor(
      entityName: string,
      attributeName: string,
      operator: Query$ConditionOperator,
      values?: Query$ValueBase
    ): this;

    /**
     * Returns the logical name of the entity in the condition expression.
     */
    getEntityName(): string;

    /**
     * Sets the logical name of the entity in the condition expression.
     * @param name The logical name of the entity in the condition expression.
     */
    setEntityName(name: string): void;

    /**
     * Returns the logical name of the attribute in the condition expression.
     */
    getAttributeName(): string;

    /**
     * Sets the logical name of the attribute in the condition expression.
     * @param name The logical name of the attribute in the condition expression.
     */
    setAttributeName(name: string): void;

    /**
     * Returns the condition operator.
     */
    getOperator(): Query$ConditionOperator;

    /**
     * Sets the condition operator.
     * @param operator The condition operator.
     */
    setOperator(operator: Query$ConditionOperator): void;

    /**
     * Returns the values for the attribute.
     */
    getValues(): Query$ValueBase;

    /**
     * Sets the values for the attribute.
     * @param The value(s) to compare
     * Use one of the following classes that inherit from Sdk.Query.ValueBase:
     * - Sdk.Query.Booleans
     * - Sdk.Query.BooleanManagedProperties
     * - Sdk.Query.Dates
     * - Sdk.Query.Decimals
     * - Sdk.Query.Doubles
     * - Sdk.Query.EntityReferences
     * - Sdk.Query.Guids
     * - Sdk.Query.Ints
     * - Sdk.Query.Longs
     * - Sdk.Query.Money
     * - Sdk.Query.OptionSets
     * - Sdk.Query.Strings
     */
    setValues(values: Query$ValueBase): void;
  }

  /**
   * Specifies complex condition and logical filter expressions used for filtering the results of the query.
   * @param logicalOperator The filter operator.
   */
  declare class Sdk$Query$FilterExpression {
    constructor(logicalOperator: Mdq$LogicalOperator): this;

    /**
     * Adds a condition to the filter expression setting the attribute name, condition operator, and values.
     * @param conditionExpression The expression that will set the condition.
     */
    addCondition(firstParam: Sdk$Query$ConditionExpression): void;

    /**
     * Adds a condition to the filter expression setting the attribute name, condition operator, and values.
     * @param entityName The entityName of the new ConditionExpression that will be instantiated using the other parameters.
     * @param attributeName The attribute name to use in the condition expression.
     * @param conditionOperator The condition operator if the first parameter is a string.
     * @param values The value(s) to compare.
     * Use one of the following classes that
     * - Sdk.Query.Booleans
     * - Sdk.Query.BooleanManagedProperties
     * - Sdk.Query.Dates
     * - Sdk.Query.Decimals
     * - Sdk.Query.Doubles
     * - Sdk.Query.EntityReferences
     * - Sdk.Query.Guids
     * - Sdk.Query.Ints
     * - Sdk.Query.Longs
     * - Sdk.Query.Money
     * - Sdk.Query.OptionSets
     * - Sdk.Query.Strings
     */
    addCondition(
      entityName: string,
      attributeName: string,
      conditionOperator: Query$ConditionOperator,
      values?: Query$ValueBase
    ): void;

    /**
     * Adds a child filter to the filter expression.
     * @param filterExpression The filter to add.
     */
    addFilter(filterExpression: Sdk$Query$FilterExpression): void;

    /**
     * Adds a child filter to the filter expression.
     * @param logicalOperator Creates new FilterExpression with the specified logical operator and adds it.
     */
    addFilter(logicalOperator: Mdq$LogicalOperator): void;

    /**
     * Returns a collection of Sdk.Query.ConditionExpression values.
     */
    getConditions(): Sdk$Collection<Sdk$Query$ConditionExpression>;

    /**
     * Gets the logical AND/OR filter operator.
     */
    getFilterOperator(): Mdq$LogicalOperator;

    /**
     * Returns an Sdk.Collection of Sdk.Query.FilterExpression.
     */
    getFilters(): Sdk$Collection<Sdk$Query$FilterExpression>;

    /**
     * Gets whether the expression is part of a quick find query.
     */
    getIsQuickFindFilter(): boolean;

    /**
     * Sets the filter operator.
     * @param filterOperator The filter operator.
     */
    setFilterOperator(filterOperator: Mdq$LogicalOperator): void;

    /**
     * Sets whether the expression is part of a quick find query.
     * @param isQuickFind True if the filter is part of a quick find query; otherwise, false.
     */
    setIsQuickFindFilter(isQuickFind: boolean): void;
  }

  declare class Sdk$Query$FetchExpression {
    /**
     * @param fetchXml The FetchXml to be used in a query.
     */
    constructor(fetchXml: string): this;

    /**
     * Gets the FetchXml to be used in a query.
     */
    getFetchXml(): string;

    /**
     * Sets the FetchXml to be used in a query.
     * @param fetchXml The FetchXml to be used in a query.
     */
    setFetchXml(fetchXml: string): void;
  }

  declare class Sdk$Query$LinkEntity {
    /**
     * Initializes a new instance of the Sdk.Query.LinkEntity class setting the required properties.
     * @param linkFromEntityName The logical name of the entity to link from.
     * @param linkToEntityName The logical name of the entity to link to.
     * @param linkFromAttributeName The name of the attribute to link from.
     * @param linkToAttributeName The name of the attribute to link to.
     * @param joinOperator The join operator.
     * @param entityAlias The string representing an alias for the linkToEntityName.
     */
    constructor(
      linkFromEntityName: string,
      linkToEntityName: string,
      linkFromAttributeName: string,
      linkToAttributeName: string,
      joinOperator: Sdk$QueryJoinOperator,
      entityAlias: string
    ): this;

    /**
     * Adds a linked entity.
     * @param linkEntity An Sdk.Query.LinkEntity to add.
     */
    addLink(linkEntity: Sdk$QueryLinkEntity): void;

    /**
     * Gets the column set.
     */
    getColumns(): Sdk$ColumnSet;

    /**
     * Sets the columns to include.
     * @param columns An Sdk.ColumnSet instance.
     */
    setColumns(columns: Sdk$ColumnSet): void;

    /**
     * Sets the columns to include.
     * @param columns An Array of attribute logical names for the columns to return.
     */
    setColumns(columns: string[]): void;

    /**
     * Sets the columns to include.
     * @param columns Pass each attribute logical name as an argument.
     */
    setColumns(...columns: string[]): void;

    /**
     * Gets the alias for the entity.
     */
    getEntityAlias(): string;

    /**
     * Sets the alias for the entity.
     * @param alias The alias for the entity.
     */
    setEntityAlias(alias: string): void;

    /**
     * Gets the join operator.
     */
    getJoinOperator(): Sdk$QueryJoinOperator;

    /**
     * Sets the join operator.
     * @param operator The join operator.
     */
    setJoinOperator(operator: Sdk$QueryJoinOperator): void;

    /**
     * Gets the complex condition and logical filter expressions that filter the results of the query.
     */
    getLinkCriteria(): Sdk$QueryFilterExpression;

    /**
     * Sets the complex condition and logical filter expressions that filter the results of the query.
     * @param criteria The complex condition and logical filter expressions that filter the results of the query.
     */
    setLinkCriteria(criteria: Sdk$QueryFilterExpression): void;

    /**
     * Gets the collection of Sdk.Query.LinkEntity that define links between multiple entity types.
     */
    getLinkEntities(): Sdk$Collection<Sdk$QueryLinkEntity>;

    /**
     * Gets the logical name of the attribute of the entity that you are linking from.
     */
    getLinkFromAttributeName(): string;

    /**
     * Sets the logical name of the attribute of the entity that you are linking from.
     * @param name The logical name of the attribute of the entity that you are linking from.
     */
    setLinkFromAttributeName(name: string): void;

    /**
     * Gets the logical name of the entity that you are linking from.
     */
    getLinkFromEntityName(): string;

    /**
     * Sets the logical name of the entity that you are linking from.
     * @param name The logical name of the entity that you are linking from.
     */
    setLinkFromEntityName(name: string): void;

    /**
     * Gets the logical name of the attribute of the entity that you are linking to
     */
    getLinkToAttributeName(): string;

    /**
     * Sets the logical name of the attribute of the entity that you are linking to.
     * @param name The logical name of the attribute of the entity that you are linking to.
     */
    setLinkToAttributeName(name: string): void;

    /**
     * Gets the logical name of the entity that you are linking to.
     */
    getLinkToEntityName(): string;

    /**
     * Sets the logical name of the entity that you are linking to.
     * @param name The logical name of the entity that you are linking to.
     */
    setLinkToEntityName(name: string): void;

    /**
     * Gets the serialized link entity.
     */
    toXml(): string;

    /**
     * Gets the serialized link entity values.
     */
    toValueXml(): string;
  }

  declare class Sdk$Query$PagingInfo {
    /**
     * Gets the number of entity instances returned per page.
     */
    getCount(): number;

    /**
     * Sets the number of entity instances returned per page.
     * @param The number of entity instances returned per page
     */
    setCount(count: number): void;

    /**
     * Gets the number of pages returned from the query.
     */
    getPageNumber(): number;

    /**
     * Sets the number of pages returned from the query.
     * @param The number of pages returned from the query.
     */
    setPageNumber(pages: number): void;

    /**
     * Gets the info used to page large result sets.
     */
    getPagingCookie(): string;

    /**
     * Sets the info used to page large result sets.
     */
    setPagingCookie(cookie: string): void;

    /**
     * Gets whether the total number of records should be returned from the query.
     */
    getReturnTotalRecordCount(): boolean;

    /**
     * Sets whether the total number of records should be returned from the query.
     * @param Specifies whether the TotalRecordCount should be set when the query is executed.
     */
    setReturnTotalRecordCount(returnTotalRecordsCount: boolean): void;

    /**
     * Gets the serialized paging info.
     *
     * toXml():string;
     *
     * /**
     * Gets the serialized paging info values.
     */
    toValueXml(): string;
  }

  declare export var Sdk$Query$ConditionOperator: {|
    +Equal: 0, // 0
    +NotEqual: 1, // 1
    +GreaterThan: 2, // 2
    +LessThan: 3, // 3
    +GreaterEqual: 4, // 4
    +LessEqual: 5, // 5
    +Like: 6, // 6
    +NotLike: 7, // 7
    +In: 8, // 8
    +NotIn: 9, // 9
    +Between: 10, // 10
    +NotBetween: 11, // 11
    +Null: 12, // 12
    +NotNull: 13, // 13
    +Yesterday: 14, // 14
    +Today: 15, // 15
    +Tomorrow: 16, // 16
    +Last7Days: 17, // 17
    +Next7Days: 18, // 18
    +LastWeek: 19, // 19
    +ThisWeek: 20, // 20
    +NextWeek: 21, // 21
    +LastMonth: 22, // 22
    +ThisMonth: 23, // 23
    +NextMonth: 24, // 24
    +On: 25, // 25
    +OnOrBefore: 26, // 26
    +OnOrAfter: 27, // 27
    +LastYear: 28, // 28
    +ThisYear: 29, // 29
    +NextYear: 30, // 30
    +LastXHours: 31, // 31
    +NextXHours: 32, // 32
    +LastXDays: 33, // 33
    +NextXDays: 34, // 34
    +LastXWeeks: 35, // 35
    +NextXWeeks: 36, // 36
    +LastXMonths: 37, // 37
    +NextXMonths: 38, // 38
    +LastXYears: 39, // 39
    +NextXYears: 40, // 40
    +EqualUserId: 41, // 41
    +NotEqualUserId: 42, // 42
    +EqualBusinessId: 43, // 43
    +NotEqualBusinessId: 44, // 44
    +Mask: 45, // 45
    +NotMask: 46, // 46
    +Contains: 47, // 47
    +DoesNotContain: 48, // 48
    +EqualUserLanguage: 49, // 49
    +NotOn: 50, // 50
    +OlderThanXMonths: 51, // 51
    +BeginsWith: 52, // 52
    +DoesNotBeginWith: 53, // 53
    +EndsWith: 54, // 54
    +DoesNotEndWith: 55, // 55
    +ThisFiscalYear: 56, // 56
    +ThisFiscalPeriod: 57, // 57
    +NextFiscalYear: 58, // 58
    +NextFiscalPeriod: 59, // 59
    +LastFiscalYear: 60, // 60
    +LastFiscalPeriod: 61, // 61
    +LastXFiscalYears: 62, // 62
    +LastXFiscalPeriods: 63, // 63
    +NextXFiscalYears: 64, // 64
    +NextXFiscalPeriods: 65, // 65
    +InFiscalYear: 66, // 66
    +InFiscalPeriod: 67, // 67
    +InFiscalPeriodAndYear: 68, // 68
    +InOrBeforeFiscalPeriodAndYear: 69, // 69
    +InOrAfterFiscalPeriodAndYear: 70, // 70
    +EqualUserOrUserTeams: 71, // 71
    +EqualUserTeams: 72 // 72
  |};

  declare export var Sdk$Query$JoinOperator: {|
    +Inner: 0, // 0
    +LeftOuter: 1, // 1
    +Natural: 2 // 2
  |};

  declare export var Sdk$Query$OrderType: {|
    +Ascending: 0, // 0
    +Descending: 1 // 1
  |};

  declare export class Sdk$Query$ValueBase {}

  /**
   * Specifies Boolean values to be compared in the query.
   * @param args An array of Boolean values.
   */
  declare class Sdk$Query$Booleans mixins ValueBase {
    constructor(args: boolean[]): this;

    /**
     * Returns the type of value with namespace prefix.
     */
    getType(): string;

    /**
     * Returns an Sdk.Collection of boolean values.
     */
    getValues(): Sdk$Collection<boolean>;

    /**
     * Specifies a Boolean value to be compared in the query.
     * @param setValueArgs An array of boolean values.
     */
    setValues(setValueArgs: boolean[]): void;
  }

  /**
   * Specifies the Date values to be compared in the query.
   * @param args An array of Date values.
   */
  declare class Sdk$Query$Dates mixins ValueBase {
    constructor(args: Date[]): this;

    /**
     * Returns the type of value with namespace prefix.
     */
    getType(): string;

    /**
     * Returns an Sdk.Collection of Date values.
     */
    getValues(): Sdk$Collection<Date>;

    /**
     * Specifies the Date values to be compared in the query.
     * @param setValueArgs An array of Date values.
     */
    setValues(setValueArgs: Date[]): void;
  }

  /**
   * Specifies the Decimal values to be compared in the query.
   * @param args An array of Decimal values.
   */
  declare class Sdk$Query$Decimals mixins ValueBase {
    constructor(args: number[]): this;

    /**
     * Returns the type of value with namespace prefix.
     */
    getType(): string;

    /**
     * Returns an Sdk.Collection of number values.
     */
    getValues(): Sdk$Collection<number>;

    /**
     * Specifies the Decimal values to be compared in the query.
     * @param setValueArgs An array of number values.
     */
    setValues(setValueArgs: number[]): void;
  }

  /**
   * Specifies the Double values to be compared in the query.
   * @param args An array of Double values.
   */
  declare class Sdk$Query$Doubles mixins ValueBase {
    constructor(args: number[]): this;

    /**
     * Returns the type of value with namespace prefix.
     */
    getType(): string;

    /**
     * Returns an Sdk.Collection of number values.
     */
    getValues(): Sdk$Collection<number>;

    /**
     * Specifies the Double values to be compared in the query.
     * @param setValueArgs An array of number values.
     */
    setValues(setValueArgs: number[]): void;
  }

  /**
   * Specifies the Int values to be compared in the query.
   * @param args An array of Int values.
   */
  declare class Sdk$Query$Ints mixins ValueBase {
    constructor(args: number[]): this;

    /**
     * Returns the type of value with namespace prefix.
     */
    getType(): string;

    /**
     * Returns an Sdk.Collection of number values.
     */
    getValues(): Sdk$Collection<number>;

    /**
     * Specifies the Int values to be compared in the query
     * @param setValueArgs An array of number values.
     */
    setValues(setValueArgs: number[]): void;
  }

  /**
   * Specifies the Long values to be compared in the query.
   * @param args An array of Long values.
   */
  declare class Sdk$Query$Longs mixins ValueBase {
    constructor(args: number[]): this;

    /**
     * Returns the type of value with namespace prefix.
     */
    getType(): string;

    /**
     * Returns an Sdk.Collection of number values.
     */
    getValues(): Sdk$Collection<number>;

    /**
     * Specifies the Long values to be compared in the query.
     * @param setValueArgs An array of number values.
     */
    setValues(setValueArgs: number[]): void;
  }

  /**
   * Specifies the Sdk.EntityReference values to be compared in the query.
   * @param args An array of Sdk.EntityReference values.
   */
  declare class Sdk$Query$EntityReferences mixins ValueBase {
    constructor(args: Sdk$EntityReference[]): this;

    /**
     * Returns the type of value with namespace prefix.
     */
    getType(): string;

    /**
     * Returns an Sdk.Collection of Sdk.EntityReference values.
     */
    getValues(): Sdk$Collection<number>;

    /**
     * Specifies the Long values to be compared in the query.
     * @param setValueArgs An array of Sdk.EntityReference values.
     */
    setValues(setValueArgs: Sdk$EntityReference[]): void;
  }

  /**
   * Specifies the Sdk.Query.Guids values to be compared in the query.
   * @param args An array of GUID string values.
   */
  declare class Sdk$Query$Guids mixins ValueBase {
    constructor(args: string[]): this;

    /**
     * Returns the type of value with namespace prefix.
     */
    getType(): string;

    /**
     * Returns an Sdk.Collection of GUID string values.
     */
    getValues(): Sdk$Collection<string>;

    /**
     * Specifies the Long values to be compared in the query.
     * @param setValueArgs An array of GUID string values.
     */
    setValues(setValueArgs: string[]): void;
  }

  /**
   * Specifies the Money values to be compared in the query.
   * @param args An array of number values.
   */
  declare class Sdk$Query$Money mixins ValueBase {
    constructor(args: number[]): this;

    /**
     * Returns the type of value with namespace prefix.
     */
    getType(): string;

    /**
     * Returns an Sdk.Collection of number values.
     */
    getValues(): Sdk$Collection<number>;

    /**
     * Specifies the Money values to be compared in the query.
     * @param setValueArgs An array of number values.
     */
    setValues(setValueArgs: number[]): void;
  }

  /**
   * Specifies the OptionSet values to be compared in the query.
   * @param args An array of number values.
   */
  declare class Sdk$Query$OptionSets mixins ValueBase {
    constructor(args: number[]): this;

    /**
     * Returns the type of value with namespace prefix.
     */
    getType(): string;

    /**
     * Returns an Sdk.Collection of number values.
     */
    getValues(): Sdk$Collection<number>;

    /**
     * Specifies the OptionSet values to be compared in the query.
     * @param setValueArgs An array of number values.
     */
    setValues(setValueArgs: number[]): void;
  }

  /**
   * Specifies the String values to be compared in the query.
   * @param args An array of String values.
   */
  declare class Sdk$Query$Strings mixins ValueBase {
    constructor(args: string[]): this;

    /**
     * Returns the type of value with namespace prefix.
     */
    getType(): string;

    /**
     * Returns an Sdk.Collection of String values.
     */
    getValues(): Sdk$Collection<string>;

    /**
     * Specifies the String values to be compared in the query.
     * @param setValueArgs An array of String values.
     */
    setValues(setValueArgs: string[]): void;
  }

  declare export var Sdk$Query$LogicalOperator: {|
    +Or: 0, // 0
    +And: 1 // 1
  |};

  declare var npm$namespace$Sdk$Util: {
    isGuid: typeof Sdk$Util$isGuid,
    isGuidOrNull: typeof Sdk$Util$isGuidOrNull,
    getEmptyGuid: typeof Sdk$Util$getEmptyGuid,
    format: typeof Sdk$Util$format,
    getError: typeof Sdk$Util$getError,
    getClientUrl: typeof Sdk$Util$getClientUrl,
    setClientUrl: typeof Sdk$Util$setClientUrl,
    getXMLHttpRequest: typeof Sdk$Util$getXMLHttpRequest,
    createEntityFromNode: typeof Sdk$Util$createEntityFromNode
  };

  /**
   * Verifies the parameter is a string formatted as a GUID.
   * @param value The value to check.
   */
  declare function Sdk$Util$isGuid(value: string): boolean;

  /**
   * Verifies the parameter is a string formatted as a GUID or null.
   * @param value The value to check.
   */
  declare function Sdk$Util$isGuidOrNull(value: string): boolean;

  /**
   * Verifies the parameter is a valid enum value.
   * @param enumeration The enumeration.
   * @param value The value to check.
   * Returns an empty GUID.
   */
  declare function Sdk$Util$getEmptyGuid(): string;

  /**
   * Formats a string with the arguments from an array.
   * @param string The string containing placeholders for items in the array.
   * @param args An array of strings to replace the placeholders.
   */
  declare function Sdk$Util$format(string: string, args: string[]): string;

  /**
   */
  declare function Sdk$Util$getError(resp: any): string;

  /**
   * Returns the clinent URL.
   */
  declare function Sdk$Util$getClientUrl(): string;

  /**
   * Provides a way to override the client Url when a client-side context is not available.
   * @param url The client URL to use instead of the default.
   */
  declare function Sdk$Util$setClientUrl(url: string): void;

  /**
   */
  declare function Sdk$Util$getXMLHttpRequest(
    action: string,
    async: boolean
  ): any;

  /**
   * Creates an entity from XML.
   * @param The serialized entity returned from the SOAP service as XML.
   */
  declare function Sdk$Util$createEntityFromNode(node: string): void;
}
declare module "microsoft-sdk-soap" {
  import typeof * as Q from "q";
}
