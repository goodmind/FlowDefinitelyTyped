declare module "gapi.people" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    people: typeof npm$namespace$gapi$client$people
  };

  declare var npm$namespace$gapi$client$people: {
    people: typeof npm$namespace$gapi$client$people$people
  };

  declare var npm$namespace$gapi$client$people$people: {
    get: typeof gapi$client$people$people$get,
    getBatchGet: typeof gapi$client$people$people$getBatchGet,

    connections: typeof npm$namespace$gapi$client$people$people$connections
  };
  declare interface gapi$client$people$people$GetParameters {
    resourceName: string;
    personFields: string;
  }

  declare function gapi$client$people$people$get(
    parameters: gapi$client$people$people$GetParameters
  ): HttpRequest<people$Person>;

  declare interface gapi$client$people$people$GetBatchGetParameters {
    resourcesName?: string;
    personFields: string;
  }

  declare function gapi$client$people$people$getBatchGet(
    parameters: gapi$client$people$people$GetBatchGetParameters
  ): HttpRequest<people$BatchGetResponse>;

  declare interface gapi$client$people$people$BatchGetResponse {
    responses: people$PersonResponse[];
  }

  declare interface gapi$client$people$people$PersonResponse {
    httpStatusCode: number;
    person: people$Person;
    requestedResourceName: string;
  }

  declare var npm$namespace$gapi$client$people$people$connections: {
    list: typeof gapi$client$people$people$connections$list
  };
  declare function gapi$client$people$people$connections$list(
    parameters: connections$ListParameters
  ): HttpRequest<connections$Response>;

  declare type gapi$client$people$people$connections$SortOrder =
    | "LAST_MODIFIED_ASCENDING"
    | "FIRST_NAME_ASCENDING"
    | "LAST_NAME_ASCENDING";

  declare interface gapi$client$people$people$connections$ListParameters {
    resourceName: string;
    pageToken?: string;
    pageSize?: number;
    sortOrder?: gapi$client$people$people$connections$SortOrder;
    syncToken?: string;
    personFields: string;
  }

  declare interface gapi$client$people$people$connections$Response {
    connections: people$Person[];
    nextPageToken: string;
    nextSyncToken: string;
  }

  declare type gapi$client$people$SourceType =
    | "SOURCE_TYPE_UNSPECIFIED"
    | "ACCOUNT"
    | "PROFILE"
    | "DOMAIN_PROFILE"
    | "CONTACT";

  declare interface gapi$client$people$Source {
    type: gapi$client$people$SourceType;
    id: string;
    etag: string;
    resourceName: string;
  }

  declare type gapi$client$people$ObjectType =
    | "OBJECT_TYPE_UNSPECIFIED"
    | "PERSON"
    | "PAGE";

  declare interface gapi$client$people$PersonMetadata {
    sources: gapi$client$people$Source[];
    previousResourceNames: string[];
    linkedPeopleResourceNames: string[];
    deleted: boolean;
    objectType: gapi$client$people$ObjectType;
  }

  declare interface gapi$client$people$FieldMetadata {
    primary: boolean;
    verified: boolean;
    source: gapi$client$people$Source;
  }

  declare interface gapi$client$people$Locale {
    metadata: gapi$client$people$FieldMetadata;
    value: string;
  }

  declare interface gapi$client$people$Name {
    metadata: gapi$client$people$FieldMetadata;
    displayName: string;
    displayNameLastFirst: string;
    familyName: string;
    givenName: string;
    middleName: string;
    honorificPrefix: string;
    honorificSuffix: string;
    phoneticFullName: string;
    phoneticFamilyName: string;
    phoneticGivenName: string;
    phoneticMiddleName: string;
    phoneticHonorificPrefix: string;
    phoneticHonorificSuffix: string;
  }

  declare type gapi$client$people$NicknameType =
    | "DEFAULT"
    | "MAIDEN_NAME"
    | "INITIALS"
    | "GPLUS"
    | "OTHER_NAME";

  declare interface gapi$client$people$Nickname {
    metadata: gapi$client$people$FieldMetadata;
    value: string;
    type: gapi$client$people$NicknameType;
  }

  declare interface gapi$client$people$CoverPhoto {
    metadata: gapi$client$people$FieldMetadata;
    url: string;
  }

  declare interface gapi$client$people$Photo {
    metadata: gapi$client$people$FieldMetadata;
    url: string;
  }

  declare interface gapi$client$people$Gender {}

  declare interface gapi$client$people$AgeRange {}

  declare interface gapi$client$people$Birthday {}

  declare interface gapi$client$people$Event {}

  declare interface gapi$client$people$Address {
    metadata: gapi$client$people$FieldMetadata;
    formattedValue: string;
    type: string;
    formattedType: string;
    poBox: string;
    streetAddress: string;
    extendedAddress: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    countryCode: string;
  }

  declare interface gapi$client$people$Residence {
    metadata: gapi$client$people$FieldMetadata;
    value: string;
    current: boolean;
  }

  declare interface gapi$client$people$EmailAddress {
    metadata: gapi$client$people$FieldMetadata;
    value: string;
    type: string;
    formattedType: string;
    displayName: string;
  }

  declare interface gapi$client$people$PhoneNumber {
    metadata: gapi$client$people$FieldMetadata;
    value: string;
    canonicalForm: string;
    type: string;
    formattedType: string;
  }

  declare interface gapi$client$people$ImClient {}

  declare interface gapi$client$people$Tagline {}

  declare interface gapi$client$people$Biography {}

  declare interface gapi$client$people$Url {}

  declare interface gapi$client$people$Organization {}

  declare interface gapi$client$people$Occupation {}

  declare interface gapi$client$people$Interest {}

  declare interface gapi$client$people$Skill {}

  declare interface gapi$client$people$BraggingRights {}

  declare interface gapi$client$people$Relation {}

  declare interface gapi$client$people$RelationshipInterest {}

  declare interface gapi$client$people$RelationshipStatus {}

  declare interface gapi$client$people$Membership {}

  declare interface gapi$client$people$Person {
    resourceName: string;
    etag: string;
    metadata: gapi$client$people$PersonMetadata;
    locales: gapi$client$people$Locale[];
    names: gapi$client$people$Name[];
    nicknames?: gapi$client$people$Nickname[];
    coverPhotos: gapi$client$people$CoverPhoto[];
    photos?: gapi$client$people$Photo[];
    genders?: gapi$client$people$Gender[];
    ageRange?: gapi$client$people$AgeRange;
    birthdays?: gapi$client$people$Birthday[];
    events?: gapi$client$people$Event[];
    addresses?: gapi$client$people$Address[];
    residences?: gapi$client$people$Residence[];
    emailAddresses?: gapi$client$people$EmailAddress[];
    phoneNumbers?: gapi$client$people$PhoneNumber[];
    imClients?: gapi$client$people$ImClient[];
    taglines?: gapi$client$people$Tagline[];
    biographies?: gapi$client$people$Biography[];
    urls?: gapi$client$people$Url[];
    organizations?: gapi$client$people$Organization[];
    occupations?: gapi$client$people$Occupation[];
    interests?: gapi$client$people$Interest[];
    skills?: gapi$client$people$Skill[];
    BraggingRights?: gapi$client$people$BraggingRights[];
    relations?: gapi$client$people$Relation[];
    relationshipInterests?: gapi$client$people$RelationshipInterest[];
    relationshipStatuses?: gapi$client$people$RelationshipStatus[];
    memberships?: gapi$client$people$Membership[];
  }
}
