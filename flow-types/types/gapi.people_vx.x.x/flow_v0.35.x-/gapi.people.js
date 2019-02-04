declare module 'gapi.people' {
        
      declare var npm$namespace$people: {
        get: typeof people$get,
getBatchGet: typeof people$getBatchGet,
        
      }
declare interface people$GetParameters {
resourceName: string,
personFields: string
} 

declare function people$get(parameters: people$GetParameters): HttpRequest<people$Person>


declare interface people$GetBatchGetParameters {
resourcesName?: string,
personFields: string
} 

declare function people$getBatchGet(parameters: people$GetBatchGetParameters): HttpRequest<people$BatchGetResponse>


declare interface people$BatchGetResponse {
responses: people$PersonResponse[]
} 

declare interface people$PersonResponse {
httpStatusCode: number,
person: people$Person,
requestedResourceName: string
} 


      declare var npm$namespace$connections: {
        list: typeof connections$list,
        
      }
declare function connections$list(parameters: connections$ListParameters): HttpRequest<connections$Response>


declare type connections$SortOrder = "LAST_MODIFIED_ASCENDING" | "FIRST_NAME_ASCENDING" | "LAST_NAME_ASCENDING";

declare interface connections$ListParameters {
resourceName: string,
pageToken?: string,
pageSize?: number,
sortOrder?: connections$SortOrder,
syncToken?: string,
personFields: string
} 

declare interface connections$Response {
connections: people$Person[],
nextPageToken: string,
nextSyncToken: string
} 

declare type people$SourceType = "SOURCE_TYPE_UNSPECIFIED"
| "ACCOUNT"
| "PROFILE"
| "DOMAIN_PROFILE"
| "CONTACT";

declare interface people$Source {
type: people$SourceType,
id: string,
etag: string,
resourceName: string
} 

declare type people$ObjectType = "OBJECT_TYPE_UNSPECIFIED" | "PERSON" | "PAGE";

declare interface people$PersonMetadata {
sources: people$Source[],
previousResourceNames: string[],
linkedPeopleResourceNames: string[],
deleted: boolean,
objectType: people$ObjectType
} 

declare interface people$FieldMetadata {
primary: boolean,
verified: boolean,
source: people$Source
} 

declare interface people$Locale {
metadata: people$FieldMetadata,
value: string
} 

declare interface people$Name {
metadata: people$FieldMetadata,
displayName: string,
displayNameLastFirst: string,
familyName: string,
givenName: string,
middleName: string,
honorificPrefix: string,
honorificSuffix: string,
phoneticFullName: string,
phoneticFamilyName: string,
phoneticGivenName: string,
phoneticMiddleName: string,
phoneticHonorificPrefix: string,
phoneticHonorificSuffix: string
} 

declare type people$NicknameType = "DEFAULT"
| "MAIDEN_NAME"
| "INITIALS"
| "GPLUS"
| "OTHER_NAME";

declare interface people$Nickname {
metadata: people$FieldMetadata,
value: string,
type: people$NicknameType
} 

declare interface people$CoverPhoto {
metadata: people$FieldMetadata,
url: string
} 

declare interface people$Photo {
metadata: people$FieldMetadata,
url: string
} 

declare interface people$Gender {} 

declare interface people$AgeRange {} 

declare interface people$Birthday {} 

declare interface people$Event {} 

declare interface people$Address {
metadata: people$FieldMetadata,
formattedValue: string,
type: string,
formattedType: string,
poBox: string,
streetAddress: string,
extendedAddress: string,
city: string,
region: string,
postalCode: string,
country: string,
countryCode: string
} 

declare interface people$Residence {
metadata: people$FieldMetadata,
value: string,
current: boolean
} 

declare interface people$EmailAddress {
metadata: people$FieldMetadata,
value: string,
type: string,
formattedType: string,
displayName: string
} 

declare interface people$PhoneNumber {
metadata: people$FieldMetadata,
value: string,
canonicalForm: string,
type: string,
formattedType: string
} 

declare interface people$ImClient {} 

declare interface people$Tagline {} 

declare interface people$Biography {} 

declare interface people$Url {} 

declare interface people$Organization {} 

declare interface people$Occupation {} 

declare interface people$Interest {} 

declare interface people$Skill {} 

declare interface people$BraggingRights {} 

declare interface people$Relation {} 

declare interface people$RelationshipInterest {} 

declare interface people$RelationshipStatus {} 

declare interface people$Membership {} 

declare interface people$Person {
resourceName: string,
etag: string,
metadata: people$PersonMetadata,
locales: people$Locale[],
names: people$Name[],
nicknames?: people$Nickname[],
coverPhotos: people$CoverPhoto[],
photos?: people$Photo[],
genders?: people$Gender[],
ageRange?: people$AgeRange,
birthdays?: people$Birthday[],
events?: people$Event[],
addresses?: people$Address[],
residences?: people$Residence[],
emailAddresses?: people$EmailAddress[],
phoneNumbers?: people$PhoneNumber[],
imClients?: people$ImClient[],
taglines?: people$Tagline[],
biographies?: people$Biography[],
urls?: people$Url[],
organizations?: people$Organization[],
occupations?: people$Occupation[],
interests?: people$Interest[],
skills?: people$Skill[],
people$BraggingRights?: people$BraggingRights[],
relations?: people$Relation[],
relationshipInterests?: people$RelationshipInterest[],
relationshipStatuses?: people$RelationshipStatus[],
memberships?: people$Membership[]
} 
    }
