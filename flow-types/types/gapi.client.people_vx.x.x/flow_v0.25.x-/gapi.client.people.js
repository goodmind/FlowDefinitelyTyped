declare module "gapi.client.people" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    contactGroups: typeof client$contactGroups,
    people: typeof client$people
  };

  /**
   * Load Google People API v1
   */
  declare function client$load(
    name: "people",
    version: "v1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "people",
    version: "v1",
    callback: () => any
  ): void;

  declare var client$contactGroups: people$people$ContactGroupsResource;

  declare var client$people: client$people.people$PeopleResource;

  declare interface people$Address {
    /**
     * The city of the address.
     */
    city?: string;

    /**
     * The country of the address.
     */
    country?: string;

    /**
     * The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country
     * code of the address.
     */
    countryCode?: string;

    /**
     * The extended address of the address; for example, the apartment number.
     */
    extendedAddress?: string;

    /**
     * The read-only type of the address translated and formatted in the viewer's
     * account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;

    /**
     * The unstructured value of the address. If this is not set by the user it
     * will be automatically constructed from structured values.
     */
    formattedValue?: string;

    /**
     * Metadata about the address.
     */
    metadata?: people$FieldMetadata;

    /**
     * The P.O. box of the address.
     */
    poBox?: string;

    /**
     * The postal code of the address.
     */
    postalCode?: string;

    /**
     * The region of the address; for example, the state or province.
     */
    region?: string;

    /**
     * The street address.
     */
    streetAddress?: string;

    /**
     * The type of the address. The type can be custom or predefined.
     * Possible values include, but are not limited to, the following:
     *
     * &#42; `home`
     * &#42; `work`
     * &#42; `other`
     */
    type?: string;
  }

  declare interface people$AgeRangeType {
    /**
     * The age range.
     */
    ageRange?: string;

    /**
     * Metadata about the age range.
     */
    metadata?: people$FieldMetadata;
  }

  declare interface people$BatchGetContactGroupsResponse {
    /**
     * The list of responses for each requested contact group resource.
     */
    responses?: people$ContactGroupResponse[];
  }

  declare interface people$Biography {
    /**
     * The content type of the biography.
     */
    contentType?: string;

    /**
     * Metadata about the biography.
     */
    metadata?: people$FieldMetadata;

    /**
     * The short biography.
     */
    value?: string;
  }

  declare interface people$Birthday {
    /**
     * The date of the birthday.
     */
    date?: people$Date;

    /**
     * Metadata about the birthday.
     */
    metadata?: people$FieldMetadata;

    /**
     * A free-form string representing the user's birthday.
     */
    text?: string;
  }

  declare interface people$BraggingRights {
    /**
     * Metadata about the bragging rights.
     */
    metadata?: people$FieldMetadata;

    /**
     * The bragging rights; for example, `climbed mount everest`.
     */
    value?: string;
  }

  declare interface people$ContactGroup {
    /**
     * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
     * resource. Used for web cache validation.
     */
    etag?: string;

    /**
     * The read-only name translated and formatted in the viewer's account locale
     * or the `Accept-Language` HTTP header locale for system groups names.
     * Group names set by the owner are the same as name.
     */
    formattedName?: string;

    /**
     * The read-only contact group type.
     */
    groupType?: string;

    /**
     * The total number of contacts in the group irrespective of max members in
     * specified in the request.
     */
    memberCount?: number;

    /**
     * The list of contact person resource names that are members of the contact
     * group. The field is not populated for LIST requests and can only be updated
     * through the
     * [ModifyContactGroupMembers](/people/api/rest/v1/contactgroups/members/modify).
     */
    memberResourceNames?: string[];

    /**
     * Metadata about the contact group.
     */
    metadata?: people$ContactGroupMetadata;

    /**
     * The contact group name set by the group owner or a system provided name
     * for system groups.
     */
    name?: string;

    /**
     * The resource name for the contact group, assigned by the server. An ASCII
     * string, in the form of `contactGroups/`<var>contact_group_id</var>.
     */
    resourceName?: string;
  }

  declare interface people$ContactGroupMembership {
    /**
     * The contact group ID for the contact group membership. The contact group
     * ID can be custom or predefined. Possible values include, but are not
     * limited to, the following:
     *
     * &#42;  `myContacts`
     * &#42;  `starred`
     * &#42;  A numerical ID for user-created groups.
     */
    contactGroupId?: string;
  }

  declare interface people$ContactGroupMetadata {
    /**
     * True if the contact group resource has been deleted. Populated only for
     * [`ListContactGroups`](/people/api/rest/v1/contactgroups/list) requests
     * that include a sync token.
     */
    deleted?: boolean;

    /**
     * The time the group was last updated.
     */
    updateTime?: string;
  }

  declare interface people$ContactGroupResponse {
    /**
     * The contact group.
     */
    contactGroup?: people$ContactGroup;

    /**
     * The original requested resource name.
     */
    requestedResourceName?: string;

    /**
     * The status of the response.
     */
    status?: people$Status;
  }

  declare interface people$CoverPhoto {
    /**
     * True if the cover photo is the default cover photo;
     * false if the cover photo is a user-provided cover photo.
     */
    default?: boolean;

    /**
     * Metadata about the cover photo.
     */
    metadata?: people$FieldMetadata;

    /**
     * The URL of the cover photo.
     */
    url?: string;
  }

  declare interface people$CreateContactGroupRequest {
    /**
     * The contact group to create.
     */
    contactGroup?: people$ContactGroup;
  }

  declare interface people$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
     * if specifying a year/month where the day is not significant.
     */
    day?: number;

    /**
     * Month of year. Must be from 1 to 12.
     */
    month?: number;

    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
     * a year.
     */
    year?: number;
  }

  declare interface people$DomainMembership {
    /**
     * True if the person is in the viewer's Google Apps domain.
     */
    inViewerDomain?: boolean;
  }

  declare interface people$EmailAddress {
    /**
     * The display name of the email.
     */
    displayName?: string;

    /**
     * The read-only type of the email address translated and formatted in the
     * viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;

    /**
     * Metadata about the email address.
     */
    metadata?: people$FieldMetadata;

    /**
     * The type of the email address. The type can be custom or predefined.
     * Possible values include, but are not limited to, the following:
     *
     * &#42; `home`
     * &#42; `work`
     * &#42; `other`
     */
    type?: string;

    /**
     * The email address.
     */
    value?: string;
  }

  declare interface people$Event {
    /**
     * The date of the event.
     */
    date?: people$Date;

    /**
     * The read-only type of the event translated and formatted in the
     * viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;

    /**
     * Metadata about the event.
     */
    metadata?: people$FieldMetadata;

    /**
     * The type of the event. The type can be custom or predefined.
     * Possible values include, but are not limited to, the following:
     *
     * &#42; `anniversary`
     * &#42; `other`
     */
    type?: string;
  }

  declare interface people$FieldMetadata {
    /**
     * True if the field is the primary field; false if the field is a secondary
     * field.
     */
    primary?: boolean;

    /**
     * The source of the field.
     */
    source?: people$Source;

    /**
     * True if the field is verified; false if the field is unverified. A
     * verified field is typically a name, email address, phone number, or
     * website that has been confirmed to be owned by the person.
     */
    verified?: boolean;
  }

  declare interface people$Gender {
    /**
     * The read-only value of the gender translated and formatted in the viewer's
     * account locale or the `Accept-Language` HTTP header locale.
     */
    formattedValue?: string;

    /**
     * Metadata about the gender.
     */
    metadata?: people$FieldMetadata;

    /**
     * The gender for the person. The gender can be custom or predefined.
     * Possible values include, but are not limited to, the
     * following:
     *
     * &#42; `male`
     * &#42; `female`
     * &#42; `other`
     * &#42; `unknown`
     */
    value?: string;
  }

  declare interface people$GetPeopleResponse {
    /**
     * The response for each requested resource name.
     */
    responses?: people$PersonResponse[];
  }

  declare interface people$ImClient {
    /**
     * The read-only protocol of the IM client formatted in the viewer's account
     * locale or the `Accept-Language` HTTP header locale.
     */
    formattedProtocol?: string;

    /**
     * The read-only type of the IM client translated and formatted in the
     * viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;

    /**
     * Metadata about the IM client.
     */
    metadata?: people$FieldMetadata;

    /**
     * The protocol of the IM client. The protocol can be custom or predefined.
     * Possible values include, but are not limited to, the following:
     *
     * &#42; `aim`
     * &#42; `msn`
     * &#42; `yahoo`
     * &#42; `skype`
     * &#42; `qq`
     * &#42; `googleTalk`
     * &#42; `icq`
     * &#42; `jabber`
     * &#42; `netMeeting`
     */
    protocol?: string;

    /**
     * The type of the IM client. The type can be custom or predefined.
     * Possible values include, but are not limited to, the following:
     *
     * &#42; `home`
     * &#42; `work`
     * &#42; `other`
     */
    type?: string;

    /**
     * The user name used in the IM client.
     */
    username?: string;
  }

  declare interface people$Interest {
    /**
     * Metadata about the interest.
     */
    metadata?: people$FieldMetadata;

    /**
     * The interest; for example, `stargazing`.
     */
    value?: string;
  }

  declare interface people$ListConnectionsResponse {
    /**
     * The list of people that the requestor is connected to.
     */
    connections?: people$Person[];

    /**
     * The token that can be used to retrieve the next page of results.
     */
    nextPageToken?: string;

    /**
     * The token that can be used to retrieve changes since the last request.
     */
    nextSyncToken?: string;

    /**
     * The total number of items in the list without pagination.
     */
    totalItems?: number;

    /**
     * &#42;&#42;DEPRECATED&#42;&#42; (Please use totalItems)
     * The total number of people in the list without pagination.
     */
    totalPeople?: number;
  }

  declare interface people$ListContactGroupsResponse {
    /**
     * The list of contact groups. Members of the contact groups are not
     * populated.
     */
    client$contactGroups?: people$ContactGroup[];

    /**
     * The token that can be used to retrieve the next page of results.
     */
    nextPageToken?: string;

    /**
     * The token that can be used to retrieve changes since the last request.
     */
    nextSyncToken?: string;

    /**
     * The total number of items in the list without pagination.
     */
    totalItems?: number;
  }

  declare interface people$Locale {
    /**
     * Metadata about the locale.
     */
    metadata?: people$FieldMetadata;

    /**
     * The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47)
     * language tag representing the locale.
     */
    value?: string;
  }

  declare interface people$Membership {
    /**
     * The contact group membership.
     */
    contactGroupMembership?: people$ContactGroupMembership;

    /**
     * The domain membership.
     */
    domainMembership?: people$DomainMembership;

    /**
     * Metadata about the membership.
     */
    metadata?: people$FieldMetadata;
  }

  declare interface people$ModifyContactGroupMembersRequest {
    /**
     * The resource names of the contact people to add in the form of in the form
     * `people/`<var>person_id</var>.
     */
    resourceNamesToAdd?: string[];

    /**
     * The resource names of the contact people to remove in the form of in the
     * form of `people/`<var>person_id</var>.
     */
    resourceNamesToRemove?: string[];
  }

  declare interface people$ModifyContactGroupMembersResponse {
    /**
     * The contact people resource names that were not found.
     */
    notFoundResourceNames?: string[];
  }

  declare interface people$Name {
    /**
     * The read-only display name formatted according to the locale specified by
     * the viewer's account or the `Accept-Language` HTTP header.
     */
    displayName?: string;

    /**
     * The read-only display name with the last name first formatted according to
     * the locale specified by the viewer's account or the
     * `Accept-Language` HTTP header.
     */
    displayNameLastFirst?: string;

    /**
     * The family name.
     */
    familyName?: string;

    /**
     * The given name.
     */
    givenName?: string;

    /**
     * The honorific prefixes, such as `Mrs.` or `Dr.`
     */
    honorificPrefix?: string;

    /**
     * The honorific suffixes, such as `Jr.`
     */
    honorificSuffix?: string;

    /**
     * Metadata about the name.
     */
    metadata?: people$FieldMetadata;

    /**
     * The middle name(s).
     */
    middleName?: string;

    /**
     * The family name spelled as it sounds.
     */
    phoneticFamilyName?: string;

    /**
     * The full name spelled as it sounds.
     */
    phoneticFullName?: string;

    /**
     * The given name spelled as it sounds.
     */
    phoneticGivenName?: string;

    /**
     * The honorific prefixes spelled as they sound.
     */
    phoneticHonorificPrefix?: string;

    /**
     * The honorific suffixes spelled as they sound.
     */
    phoneticHonorificSuffix?: string;

    /**
     * The middle name(s) spelled as they sound.
     */
    phoneticMiddleName?: string;
  }

  declare interface people$Nickname {
    /**
     * Metadata about the nickname.
     */
    metadata?: people$FieldMetadata;

    /**
     * The type of the nickname.
     */
    type?: string;

    /**
     * The nickname.
     */
    value?: string;
  }

  declare interface people$Occupation {
    /**
     * Metadata about the occupation.
     */
    metadata?: people$FieldMetadata;

    /**
     * The occupation; for example, `carpenter`.
     */
    value?: string;
  }

  declare interface people$Organization {
    /**
     * True if the organization is the person's current organization;
     * false if the organization is a past organization.
     */
    current?: boolean;

    /**
     * The person's department at the organization.
     */
    department?: string;

    /**
     * The domain name associated with the organization; for example, `google.com`.
     */
    domain?: string;

    /**
     * The end date when the person left the organization.
     */
    endDate?: people$Date;

    /**
     * The read-only type of the organization translated and formatted in the
     * viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;

    /**
     * The person's job description at the organization.
     */
    jobDescription?: string;

    /**
     * The location of the organization office the person works at.
     */
    location?: string;

    /**
     * Metadata about the organization.
     */
    metadata?: people$FieldMetadata;

    /**
     * The name of the organization.
     */
    name?: string;

    /**
     * The phonetic name of the organization.
     */
    phoneticName?: string;

    /**
     * The start date when the person joined the organization.
     */
    startDate?: people$Date;

    /**
     * The symbol associated with the organization; for example, a stock ticker
     * symbol, abbreviation, or acronym.
     */
    symbol?: string;

    /**
     * The person's job title at the organization.
     */
    title?: string;

    /**
     * The type of the organization. The type can be custom or predefined.
     * Possible values include, but are not limited to, the following:
     *
     * &#42; `work`
     * &#42; `school`
     */
    type?: string;
  }

  declare interface people$Person {
    /**
     * The person's street addresses.
     */
    addresses?: people$Address[];

    /**
     * &#42;&#42;DEPRECATED&#42;&#42; (Please use `person.ageRanges` instead)&#42;&#42;
     *
     * The person's read-only age range.
     */
    ageRange?: string;

    /**
     * The person's read-only age ranges.
     */
    ageRanges?: people$AgeRangeType[];

    /**
     * The person's biographies.
     */
    biographies?: people$Biography[];

    /**
     * The person's birthdays.
     */
    birthdays?: people$Birthday[];

    /**
     * The person's bragging rights.
     */
    braggingRights?: people$BraggingRights[];

    /**
     * The person's read-only cover photos.
     */
    coverPhotos?: people$CoverPhoto[];

    /**
     * The person's email addresses.
     */
    emailAddresses?: people$EmailAddress[];

    /**
     * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
     * resource. Used for web cache validation.
     */
    etag?: string;

    /**
     * The person's events.
     */
    events?: people$Event[];

    /**
     * The person's genders.
     */
    genders?: people$Gender[];

    /**
     * The person's instant messaging clients.
     */
    imClients?: people$ImClient[];

    /**
     * The person's interests.
     */
    interests?: people$Interest[];

    /**
     * The person's locale preferences.
     */
    locales?: people$Locale[];

    /**
     * The person's read-only group memberships.
     */
    memberships?: people$Membership[];

    /**
     * Read-only metadata about the person.
     */
    metadata?: people$PersonMetadata;

    /**
     * The person's names.
     */
    names?: people$Name[];

    /**
     * The person's nicknames.
     */
    nicknames?: people$Nickname[];

    /**
     * The person's occupations.
     */
    occupations?: people$Occupation[];

    /**
     * The person's past or current organizations.
     */
    organizations?: people$Organization[];

    /**
     * The person's phone numbers.
     */
    phoneNumbers?: people$PhoneNumber[];

    /**
     * The person's read-only photos.
     */
    photos?: people$Photo[];

    /**
     * The person's relations.
     */
    relations?: people$Relation[];

    /**
     * The person's read-only relationship interests.
     */
    relationshipInterests?: people$RelationshipInterest[];

    /**
     * The person's read-only relationship statuses.
     */
    relationshipStatuses?: people$RelationshipStatus[];

    /**
     * The person's residences.
     */
    residences?: people$Residence[];

    /**
     * The resource name for the person, assigned by the server. An ASCII string
     * with a max length of 27 characters, in the form of
     * `people/`<var>person_id</var>.
     */
    resourceName?: string;

    /**
     * The person's skills.
     */
    skills?: people$Skill[];

    /**
     * The person's read-only taglines.
     */
    taglines?: people$Tagline[];

    /**
     * The person's associated URLs.
     */
    urls?: people$Url[];

    /**
     * The person's user defined data.
     */
    userDefined?: people$UserDefined[];
  }

  declare interface people$PersonMetadata {
    /**
     * True if the person resource has been deleted. Populated only for
     * [`connections.list`](/people/api/rest/v1/people.connections/list) requests
     * that include a sync token.
     */
    deleted?: boolean;

    /**
     * Resource names of people linked to this resource.
     */
    linkedPeopleResourceNames?: string[];

    /**
     * &#42;&#42;DEPRECATED&#42;&#42; (Please use
     * `person.metadata.sources.profileMetadata.objectType` instead)
     *
     * The type of the person object.
     */
    objectType?: string;

    /**
     * Any former resource names this person has had. Populated only for
     * [`connections.list`](/people/api/rest/v1/people.connections/list) requests
     * that include a sync token.
     *
     * The resource name may change when adding or removing fields that link a
     * contact and profile such as a verified email, verified phone number, or
     * profile URL.
     */
    previousResourceNames?: string[];

    /**
     * The sources of data for the person.
     */
    sources?: people$Source[];
  }

  declare interface people$PersonResponse {
    /**
     * &#42;&#42;DEPRECATED&#42;&#42; (Please use status instead)
     *
     * [HTTP 1.1 status code]
     * (http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
     */
    httpStatusCode?: number;

    /**
     * The person.
     */
    person?: people$Person;

    /**
     * The original requested resource name. May be different than the resource
     * name on the returned person.
     *
     * The resource name can change when adding or removing fields that link a
     * contact and profile such as a verified email, verified phone number, or a
     * profile URL.
     */
    requestedResourceName?: string;

    /**
     * The status of the response.
     */
    status?: people$Status;
  }

  declare interface people$PhoneNumber {
    /**
     * The read-only canonicalized [ITU-T E.164](https://law.resource.org/pub/us/cfr/ibr/004/itu-t.E.164.1.2008.pdf)
     * form of the phone number.
     */
    canonicalForm?: string;

    /**
     * The read-only type of the phone number translated and formatted in the
     * viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;

    /**
     * Metadata about the phone number.
     */
    metadata?: people$FieldMetadata;

    /**
     * The type of the phone number. The type can be custom or predefined.
     * Possible values include, but are not limited to, the following:
     *
     * &#42; `home`
     * &#42; `work`
     * &#42; `mobile`
     * &#42; `homeFax`
     * &#42; `workFax`
     * &#42; `otherFax`
     * &#42; `pager`
     * &#42; `workMobile`
     * &#42; `workPager`
     * &#42; `main`
     * &#42; `googleVoice`
     * &#42; `other`
     */
    type?: string;

    /**
     * The phone number.
     */
    value?: string;
  }

  declare interface people$Photo {
    /**
     * True if the photo is a default photo;
     * false if the photo is a user-provided photo.
     */
    default?: boolean;

    /**
     * Metadata about the photo.
     */
    metadata?: people$FieldMetadata;

    /**
     * The URL of the photo. You can change the desired size by appending a query
     * parameter `sz=`<var>size</var> at the end of the url. Example:
     * `https://lh3.googleusercontent.com/-T_wVWLlmg7w/AAAAAAAAAAI/AAAAAAAABa8/00gzXvDBYqw/s100/photo.jpg?sz=50`
     */
    url?: string;
  }

  declare interface people$ProfileMetadata {
    /**
     * The profile object type.
     */
    objectType?: string;

    /**
     * The user types.
     */
    userTypes?: string[];
  }

  declare interface people$Relation {
    /**
     * The type of the relation translated and formatted in the viewer's account
     * locale or the locale specified in the Accept-Language HTTP header.
     */
    formattedType?: string;

    /**
     * Metadata about the relation.
     */
    metadata?: people$FieldMetadata;

    /**
     * The name of the other person this relation refers to.
     */
    person?: string;

    /**
     * The person's relation to the other person. The type can be custom or predefined.
     * Possible values include, but are not limited to, the following values:
     *
     * &#42; `spouse`
     * &#42; `child`
     * &#42; `mother`
     * &#42; `father`
     * &#42; `parent`
     * &#42; `brother`
     * &#42; `sister`
     * &#42; `friend`
     * &#42; `relative`
     * &#42; `domesticPartner`
     * &#42; `manager`
     * &#42; `assistant`
     * &#42; `referredBy`
     * &#42; `partner`
     */
    type?: string;
  }

  declare interface people$RelationshipInterest {
    /**
     * The value of the relationship interest translated and formatted in the
     * viewer's account locale or the locale specified in the Accept-Language
     * HTTP header.
     */
    formattedValue?: string;

    /**
     * Metadata about the relationship interest.
     */
    metadata?: people$FieldMetadata;

    /**
     * The kind of relationship the person is looking for. The value can be custom
     * or predefined. Possible values include, but are not limited to, the
     * following values:
     *
     * &#42; `friend`
     * &#42; `date`
     * &#42; `relationship`
     * &#42; `networking`
     */
    value?: string;
  }

  declare interface people$RelationshipStatus {
    /**
     * The read-only value of the relationship status translated and formatted in
     * the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedValue?: string;

    /**
     * Metadata about the relationship status.
     */
    metadata?: people$FieldMetadata;

    /**
     * The relationship status. The value can be custom or predefined.
     * Possible values include, but are not limited to, the following:
     *
     * &#42; `single`
     * &#42; `inARelationship`
     * &#42; `engaged`
     * &#42; `married`
     * &#42; `itsComplicated`
     * &#42; `openRelationship`
     * &#42; `widowed`
     * &#42; `inDomesticPartnership`
     * &#42; `inCivilUnion`
     */
    value?: string;
  }

  declare interface people$Residence {
    /**
     * True if the residence is the person's current residence;
     * false if the residence is a past residence.
     */
    current?: boolean;

    /**
     * Metadata about the residence.
     */
    metadata?: people$FieldMetadata;

    /**
     * The address of the residence.
     */
    value?: string;
  }

  declare interface people$Skill {
    /**
     * Metadata about the skill.
     */
    metadata?: people$FieldMetadata;

    /**
     * The skill; for example, `underwater basket weaving`.
     */
    value?: string;
  }

  declare interface people$Source {
    /**
     * &#42;&#42;Only populated in `person.metadata.sources`.&#42;&#42;
     *
     * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
     * source. Used for web cache validation.
     */
    etag?: string;

    /**
     * The unique identifier within the source type generated by the server.
     */
    id?: string;

    /**
     * &#42;&#42;Only populated in `person.metadata.sources`.&#42;&#42;
     *
     * Metadata about a source of type PROFILE.
     */
    profileMetadata?: people$ProfileMetadata;

    /**
     * The source type.
     */
    type?: string;

    /**
     * &#42;&#42;Only populated in `person.metadata.sources`.&#42;&#42;
     *
     * Last update timestamp of this source.
     */
    updateTime?: string;
  }

  declare interface people$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;

    /**
     * A list of messages that carry the error details.  There is a common set of
     * message types for APIs to use.
     */
    details?: Array<Record<string, any>>;

    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }

  declare interface people$Tagline {
    /**
     * Metadata about the tagline.
     */
    metadata?: people$FieldMetadata;

    /**
     * The tagline.
     */
    value?: string;
  }

  declare interface people$UpdateContactGroupRequest {
    /**
     * The contact group to update.
     */
    contactGroup?: people$ContactGroup;
  }

  declare interface people$Url {
    /**
     * The read-only type of the URL translated and formatted in the viewer's
     * account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;

    /**
     * Metadata about the URL.
     */
    metadata?: people$FieldMetadata;

    /**
     * The type of the URL. The type can be custom or predefined.
     * Possible values include, but are not limited to, the following:
     *
     * &#42; `home`
     * &#42; `work`
     * &#42; `blog`
     * &#42; `profile`
     * &#42; `homePage`
     * &#42; `ftp`
     * &#42; `reservations`
     * &#42; `appInstallPage`: website for a Google+ application.
     * &#42; `other`
     */
    type?: string;

    /**
     * The URL.
     */
    value?: string;
  }

  declare interface people$UserDefined {
    /**
     * The end user specified key of the user defined data.
     */
    key?: string;

    /**
     * Metadata about the user defined data.
     */
    metadata?: people$FieldMetadata;

    /**
     * The end user specified value of the user defined data.
     */
    value?: string;
  }

  declare interface people$MembersResource {
    /**
     * Modify the members of a contact group owned by the authenticated user.
     */
    modify(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The resource name of the contact group to modify.
       */
      resourceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<people$ModifyContactGroupMembersResponse>;
  }

  declare interface people$ContactGroupsResource {
    /**
     * Get a list of contact groups owned by the authenticated user by specifying
     * a list of contact group resource names.
     */
    batchGet(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Specifies the maximum number of members to return for each group.
       */
      maxMembers?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The resource names of the contact groups to get.
       */
      resourceNames?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<people$BatchGetContactGroupsResponse>;

    /**
     * Create a new contact group owned by the authenticated user.
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<people$ContactGroup>;

    /**
     * Delete an existing contact group owned by the authenticated user by
     * specifying a contact group resource name.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Set to true to also delete the contacts in the specified group.
       */
      deleteContacts?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The resource name of the contact group to delete.
       */
      resourceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Get a specific contact group owned by the authenticated user by specifying
     * a contact group resource name.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Specifies the maximum number of members to return.
       */
      maxMembers?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The resource name of the contact group to get.
       */
      resourceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<people$ContactGroup>;

    /**
     * List all contact groups owned by the authenticated user. Members of the
     * contact groups are not populated.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The maximum number of resources to return.
       */
      pageSize?: number,

      /**
       * The next_page_token value returned from a previous call to
       * [ListContactGroups](/people/api/rest/v1/contactgroups/list).
       * Requests the next page of resources.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * A sync token, returned by a previous call to `contactgroups.list`.
       * Only resources changed since the sync token was created will be returned.
       */
      syncToken?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<people$ListContactGroupsResponse>;

    /**
     * Update the name of an existing contact group owned by the authenticated
     * user.
     */
    update(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The resource name for the contact group, assigned by the server. An ASCII
       * string, in the form of `contactGroups/`<var>contact_group_id</var>.
       */
      resourceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<people$ContactGroup>;
    members: people$MembersResource;
  }

  declare interface people$ConnectionsResource {
    /**
     * Provides a list of the authenticated user's contacts merged with any
     * connected profiles.
     * <br>
     * The request throws a 400 error if 'personFields' is not specified.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The number of connections to include in the response. Valid values are
       * between 1 and 2000, inclusive. Defaults to 100.
       */
      pageSize?: number,

      /**
       * The token of the page to be returned.
       */
      pageToken?: string,

      /**
       * &#42;&#42;Required.&#42;&#42; A field mask to restrict which fields on each person are
       * returned. Valid values are:
       *
       * &#42; addresses
       * &#42; ageRanges
       * &#42; biographies
       * &#42; birthdays
       * &#42; braggingRights
       * &#42; coverPhotos
       * &#42; emailAddresses
       * &#42; events
       * &#42; genders
       * &#42; imClients
       * &#42; interests
       * &#42; locales
       * &#42; memberships
       * &#42; metadata
       * &#42; names
       * &#42; nicknames
       * &#42; occupations
       * &#42; organizations
       * &#42; phoneNumbers
       * &#42; photos
       * &#42; relations
       * &#42; relationshipInterests
       * &#42; relationshipStatuses
       * &#42; residences
       * &#42; skills
       * &#42; taglines
       * &#42; urls
       */
      personFields?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * &#42;&#42;Required.&#42;&#42; Comma-separated list of person fields to be included in the
       * response. Each path should start with `person.`: for example,
       * `person.names` or `person.photos`.
       */
      "requestMask.includeField"?: string,

      /**
       * Whether the response should include a sync token, which can be used to get
       * all changes since the last request.
       */
      requestSyncToken?: boolean,

      /**
       * The resource name to return connections for. Only `people/me` is valid.
       */
      resourceName: string,

      /**
       * The order in which the connections should be sorted. Defaults to
       * `LAST_MODIFIED_ASCENDING`.
       */
      sortOrder?: string,

      /**
       * A sync token, returned by a previous call to `people.connections.list`.
       * Only resources changed since the sync token was created will be returned.
       */
      syncToken?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<people$ListConnectionsResponse>;
  }

  declare interface people$PeopleResource {
    /**
     * Create a new contact and return the person resource for that contact.
     */
    createContact(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The resource name of the owning person resource.
       */
      parent?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<people$Person>;

    /**
     * Delete a contact person. Any non-contact data will not be deleted.
     */
    deleteContact(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The resource name of the contact to delete.
       */
      resourceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Provides information about a person by specifying a resource name. Use
     * `people/me` to indicate the authenticated user.
     * <br>
     * The request throws a 400 error if 'personFields' is not specified.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * &#42;&#42;Required.&#42;&#42; A field mask to restrict which fields on the person are
       * returned. Valid values are:
       *
       * &#42; addresses
       * &#42; ageRanges
       * &#42; biographies
       * &#42; birthdays
       * &#42; braggingRights
       * &#42; coverPhotos
       * &#42; emailAddresses
       * &#42; events
       * &#42; genders
       * &#42; imClients
       * &#42; interests
       * &#42; locales
       * &#42; memberships
       * &#42; metadata
       * &#42; names
       * &#42; nicknames
       * &#42; occupations
       * &#42; organizations
       * &#42; phoneNumbers
       * &#42; photos
       * &#42; relations
       * &#42; relationshipInterests
       * &#42; relationshipStatuses
       * &#42; residences
       * &#42; skills
       * &#42; taglines
       * &#42; urls
       */
      personFields?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * &#42;&#42;Required.&#42;&#42; Comma-separated list of person fields to be included in the
       * response. Each path should start with `person.`: for example,
       * `person.names` or `person.photos`.
       */
      "requestMask.includeField"?: string,

      /**
       * The resource name of the person to provide information about.
       *
       * - To get information about the authenticated user, specify `people/me`.
       * - To get information about a google account, specify
       * `people/`<var>account_id</var>.
       * - To get information about a contact, specify the resource name that
       * identifies the contact as returned by
       * [`people.connections.list`](/people/api/rest/v1/people.connections/list).
       */
      resourceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<people$Person>;

    /**
     * Provides information about a list of specific people by specifying a list
     * of requested resource names. Use `people/me` to indicate the authenticated
     * user.
     * <br>
     * The request throws a 400 error if 'personFields' is not specified.
     */
    getBatchGet(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * &#42;&#42;Required.&#42;&#42; A field mask to restrict which fields on each person are
       * returned. Valid values are:
       *
       * &#42; addresses
       * &#42; ageRanges
       * &#42; biographies
       * &#42; birthdays
       * &#42; braggingRights
       * &#42; coverPhotos
       * &#42; emailAddresses
       * &#42; events
       * &#42; genders
       * &#42; imClients
       * &#42; interests
       * &#42; locales
       * &#42; memberships
       * &#42; metadata
       * &#42; names
       * &#42; nicknames
       * &#42; occupations
       * &#42; organizations
       * &#42; phoneNumbers
       * &#42; photos
       * &#42; relations
       * &#42; relationshipInterests
       * &#42; relationshipStatuses
       * &#42; residences
       * &#42; skills
       * &#42; taglines
       * &#42; urls
       */
      personFields?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * &#42;&#42;Required.&#42;&#42; Comma-separated list of person fields to be included in the
       * response. Each path should start with `person.`: for example,
       * `person.names` or `person.photos`.
       */
      "requestMask.includeField"?: string,

      /**
       * The resource names of the people to provide information about.
       *
       * - To get information about the authenticated user, specify `people/me`.
       * - To get information about a google account, specify
       * `people/`<var>account_id</var>.
       * - To get information about a contact, specify the resource name that
       * identifies the contact as returned by
       * [`people.connections.list`](/people/api/rest/v1/people.connections/list).
       *
       * You can include up to 50 resource names in one request.
       */
      resourceNames?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<people$GetPeopleResponse>;

    /**
     * Update contact data for an existing contact person. Any non-contact data
     * will not be modified.
     *
     * The request throws a 400 error if `updatePersonFields` is not specified.
     * <br>
     * The request throws a 400 error if `person.metadata.sources` is not
     * specified for the contact to be updated.
     * <br>
     * The request throws a 412 error if `person.metadata.sources.etag` is
     * different than the contact's etag, which indicates the contact has changed
     * since its data was read. Clients should get the latest person and re-apply
     * their updates to the latest person.
     */
    updateContact(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The resource name for the person, assigned by the server. An ASCII string
       * with a max length of 27 characters, in the form of
       * `people/`<var>person_id</var>.
       */
      resourceName: string,

      /**
       * &#42;&#42;Required.&#42;&#42; A field mask to restrict which fields on the person are
       * updated. Valid values are:
       *
       * &#42; addresses
       * &#42; biographies
       * &#42; birthdays
       * &#42; braggingRights
       * &#42; emailAddresses
       * &#42; events
       * &#42; genders
       * &#42; imClients
       * &#42; interests
       * &#42; locales
       * &#42; names
       * &#42; nicknames
       * &#42; occupations
       * &#42; organizations
       * &#42; phoneNumbers
       * &#42; relations
       * &#42; residences
       * &#42; skills
       * &#42; urls
       */
      updatePersonFields?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<people$Person>;
    connections: people$ConnectionsResource;
  }
}
