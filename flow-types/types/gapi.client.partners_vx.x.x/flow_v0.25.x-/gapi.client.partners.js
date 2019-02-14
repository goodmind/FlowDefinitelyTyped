declare module "gapi.client.partners" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    analytics: typeof gapi$client$analytics,
    clientMessages: typeof gapi$client$clientMessages,
    companies: typeof gapi$client$companies,
    exams: typeof gapi$client$exams,
    leads: typeof gapi$client$leads,
    offers: typeof gapi$client$offers,
    userEvents: typeof gapi$client$userEvents,
    userStates: typeof gapi$client$userStates,
    users: typeof gapi$client$users,
    v2: typeof gapi$client$v2
  };

  /**
   * Load Google Partners API v2
   */
  declare function gapi$client$load(
    name: "partners",
    version: "v2"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "partners",
    version: "v2",
    callback: () => any
  ): void;

  declare var gapi$client$analytics: partners$AnalyticsResource;

  declare var gapi$client$clientMessages: partners$ClientMessagesResource;

  declare var gapi$client$companies: partners$CompaniesResource;

  declare var gapi$client$exams: partners$ExamsResource;

  declare var gapi$client$leads: partners$LeadsResource;

  declare var gapi$client$offers: partners$OffersResource;

  declare var gapi$client$userEvents: partners$UserEventsResource;

  declare var gapi$client$userStates: partners$UserStatesResource;

  declare var gapi$client$users: partners$UsersResource;

  declare var gapi$client$v2: partners$V2Resource;

  declare interface gapi$client$partners$AdWordsManagerAccountInfo {
    /**
     * Name of the customer this account represents.
     */
    customerName?: string;

    /**
     * The AdWords Manager Account id.
     */
    id?: string;
  }

  declare interface gapi$client$partners$Analytics {
    /**
     * Instances of users contacting the `Company`
     * on the specified date.
     */
    contacts?: partners$AnalyticsDataPoint;

    /**
     * Date on which these events occurred.
     */
    eventDate?: partners$Date;

    /**
     * Instances of users viewing the `Company` profile
     * on the specified date.
     */
    profileViews?: partners$AnalyticsDataPoint;

    /**
     * Instances of users seeing the `Company` in Google Partners Search results
     * on the specified date.
     */
    searchViews?: partners$AnalyticsDataPoint;
  }

  declare interface gapi$client$partners$AnalyticsDataPoint {
    /**
     * Number of times the type of event occurred.
     * Meaning depends on context (e.g. profile views, contacts, etc.).
     */
    eventCount?: number;

    /**
     * Location information of where these events occurred.
     */
    eventLocations?: partners$LatLng[];
  }

  declare interface gapi$client$partners$AnalyticsSummary {
    /**
     * Aggregated number of times users contacted the `Company`
     * for given date range.
     */
    contactsCount?: number;

    /**
     * Aggregated number of profile views for the `Company` for given date range.
     */
    profileViewsCount?: number;

    /**
     * Aggregated number of times users saw the `Company`
     * in Google Partners Search results for given date range.
     */
    searchViewsCount?: number;
  }

  declare interface gapi$client$partners$AvailableOffer {
    /**
     * The number of codes for this offer that are available for distribution.
     */
    available?: number;

    /**
     * Offer info by country.
     */
    countryOfferInfos?: partners$CountryOfferInfo[];

    /**
     * Description of the offer.
     */
    description?: string;

    /**
     * ID of this offer.
     */
    id?: string;

    /**
     * The maximum age of an account [in days] to be eligible.
     */
    maxAccountAge?: number;

    /**
     * Name of the offer.
     */
    name?: string;

    /**
     * Level of this offer.
     */
    offerLevel?: string;

    /**
     * Type of offer.
     */
    offerType?: string;

    /**
     * Customers who qualify for this offer.
     */
    qualifiedCustomer?: partners$OfferCustomer[];

    /**
     * Whether or not the list of qualified customers is definitely complete.
     */
    qualifiedCustomersComplete?: boolean;

    /**
     * Should special text be shown on the offers page.
     */
    showSpecialOfferCopy?: boolean;

    /**
     * Terms of the offer.
     */
    terms?: string;
  }

  declare interface gapi$client$partners$Certification {
    /**
     * Whether this certification has been achieved.
     */
    achieved?: boolean;

    /**
     * The type of certification, the area of expertise.
     */
    certificationType?: string;

    /**
     * Date this certification is due to expire.
     */
    expiration?: string;

    /**
     * The date the user last achieved certification.
     */
    lastAchieved?: string;

    /**
     * Whether this certification is in the state of warning.
     */
    warning?: boolean;
  }

  declare interface gapi$client$partners$CertificationExamStatus {
    /**
     * The number of people who have passed the certification exam.
     */
    numberUsersPass?: number;

    /**
     * The type of certification exam.
     */
    type?: string;
  }

  declare interface gapi$client$partners$CertificationStatus {
    /**
     * List of certification exam statuses.
     */
    examStatuses?: gapi$client$partners$CertificationExamStatus[];

    /**
     * Whether certification is passing.
     */
    isCertified?: boolean;

    /**
     * The type of the certification.
     */
    type?: string;

    /**
     * Number of people who are certified,
     */
    userCount?: number;
  }

  declare interface gapi$client$partners$Company {
    /**
     * URL of the company's additional websites used to verify the dynamic badges.
     * These are stored as full URLs as entered by the user, but only the TLD will
     * be used for the actual verification.
     */
    additionalWebsites?: string[];

    /**
     * Email domains that allow users with a matching email address to get
     * auto-approved for associating with this company.
     */
    autoApprovalEmailDomains?: string[];

    /**
     * Partner badge tier
     */
    badgeTier?: string;

    /**
     * The list of Google Partners certification statuses for the company.
     */
    certificationStatuses?: gapi$client$partners$CertificationStatus[];

    /**
     * Company type labels listed on the company's profile.
     */
    companyTypes?: string[];

    /**
     * The minimum monthly budget that the company accepts for partner business,
     * converted to the requested currency code.
     */
    convertedMinMonthlyBudget?: partners$Money;

    /**
     * The ID of the company.
     */
    id?: string;

    /**
     * Industries the company can help with.
     */
    industries?: string[];

    /**
     * The list of localized info for the company.
     */
    localizedInfos?: partners$LocalizedCompanyInfo[];

    /**
     * The list of all company locations.
     * If set, must include the
     * primary_location
     * in the list.
     */
    locations?: partners$Location[];

    /**
     * The name of the company.
     */
    name?: string;

    /**
     * The unconverted minimum monthly budget that the company accepts for partner
     * business.
     */
    originalMinMonthlyBudget?: partners$Money;

    /**
     * The Primary AdWords Manager Account id.
     */
    primaryAdwordsManagerAccountId?: string;

    /**
     * The primary language code of the company, as defined by
     * <a href="https://tools.ietf.org/html/bcp47">BCP 47</a>
     * (IETF BCP 47, "Tags for Identifying Languages").
     */
    primaryLanguageCode?: string;

    /**
     * The primary location of the company.
     */
    primaryLocation?: partners$Location;

    /**
     * The public viewability status of the company's profile.
     */
    profileStatus?: string;

    /**
     * Basic information from the company's public profile.
     */
    publicProfile?: partners$PublicProfile;

    /**
     * Information related to the ranking of the company within the list of
     * companies.
     */
    ranks?: partners$Rank[];

    /**
     * Services the company can help with.
     */
    services?: string[];

    /**
     * The list of Google Partners specialization statuses for the company.
     */
    specializationStatus?: partners$SpecializationStatus[];

    /**
     * URL of the company's website.
     */
    websiteUrl?: string;
  }

  declare interface gapi$client$partners$CompanyRelation {
    /**
     * The primary address for this company.
     */
    address?: string;

    /**
     * Whether the company is a Partner.
     */
    badgeTier?: string;

    /**
     * Indicates if the user is an admin for this company.
     */
    companyAdmin?: boolean;

    /**
     * The ID of the company. There may be no id if this is a
     * pending company.5
     */
    companyId?: string;

    /**
     * The timestamp of when affiliation was requested.
     * @OutputOnly
     */
    creationTime?: string;

    /**
     * The internal company ID.
     * Only available for a whitelisted set of api clients.
     */
    internalCompanyId?: string;

    /**
     * The flag that indicates if the company is pending verification.
     */
    isPending?: boolean;

    /**
     * A URL to a profile photo, e.g. a G+ profile photo.
     */
    logoUrl?: string;

    /**
     * The AdWords manager account # associated this company.
     */
    managerAccount?: string;

    /**
     * The name (in the company's primary language) for the company.
     */
    name?: string;

    /**
     * The phone number for the company's primary address.
     */
    phoneNumber?: string;

    /**
     * The primary location of the company.
     */
    primaryAddress?: partners$Location;

    /**
     * The primary country code of the company.
     */
    primaryCountryCode?: string;

    /**
     * The primary language code of the company.
     */
    primaryLanguageCode?: string;

    /**
     * The timestamp when the user was approved.
     * @OutputOnly
     */
    resolvedTimestamp?: string;

    /**
     * The segment the company is classified as.
     */
    segment?: string[];

    /**
     * The list of Google Partners specialization statuses for the company.
     */
    specializationStatus?: partners$SpecializationStatus[];

    /**
     * The state of relationship, in terms of approvals.
     */
    state?: string;

    /**
     * The website URL for this company.
     */
    website?: string;
  }

  declare interface gapi$client$partners$CountryOfferInfo {
    /**
     * (localized) Get Y amount for that country's offer.
     */
    getYAmount?: string;

    /**
     * Country code for which offer codes may be requested.
     */
    offerCountryCode?: string;

    /**
     * Type of offer country is eligible for.
     */
    offerType?: string;

    /**
     * (localized) Spend X amount for that country's offer.
     */
    spendXAmount?: string;
  }

  declare interface gapi$client$partners$CreateLeadRequest {
    /**
     * The lead resource. The `LeadType` must not be `LEAD_TYPE_UNSPECIFIED`
     * and either `email` or `phone_number` must be provided.
     */
    lead?: partners$Lead;

    /**
     * <a href="https://www.google.com/recaptcha/">reCaptcha</a> challenge info.
     */
    recaptchaChallenge?: partners$RecaptchaChallenge;

    /**
     * Current request metadata.
     */
    requestMetadata?: partners$RequestMetadata;
  }

  declare interface gapi$client$partners$CreateLeadResponse {
    /**
     * Lead that was created depending on the outcome of
     * <a href="https://www.google.com/recaptcha/">reCaptcha</a> validation.
     */
    lead?: partners$Lead;

    /**
     * The outcome of <a href="https://www.google.com/recaptcha/">reCaptcha</a>
     * validation.
     */
    recaptchaStatus?: string;

    /**
     * Current response metadata.
     */
    responseMetadata?: partners$ResponseMetadata;
  }

  declare interface gapi$client$partners$Date {
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

  declare interface gapi$client$partners$DebugInfo {
    /**
     * Info about the server that serviced this request.
     */
    serverInfo?: string;

    /**
     * Server-side debug stack trace.
     */
    serverTraceInfo?: string;

    /**
     * URL of the service that handled this request.
     */
    serviceUrl?: string;
  }

  declare interface gapi$client$partners$EventData {
    /**
     * Data type.
     */
    key?: string;

    /**
     * Data values.
     */
    values?: string[];
  }

  declare interface gapi$client$partners$ExamStatus {
    /**
     * The type of the exam.
     */
    examType?: string;

    /**
     * Date this exam is due to expire.
     */
    expiration?: string;

    /**
     * The date the user last passed this exam.
     */
    lastPassed?: string;

    /**
     * Whether this exam has been passed and not expired.
     */
    passed?: boolean;

    /**
     * The date the user last taken this exam.
     */
    taken?: string;

    /**
     * Whether this exam is in the state of warning.
     */
    warning?: boolean;
  }

  declare interface gapi$client$partners$ExamToken {
    /**
     * The id of the exam the token is for.
     */
    examId?: string;

    /**
     * The type of the exam the token belongs to.
     */
    examType?: string;

    /**
     * The token, only present if the user has access to the exam.
     */
    token?: string;
  }

  declare interface gapi$client$partners$GetCompanyResponse {
    /**
     * The company.
     */
    company?: gapi$client$partners$Company;

    /**
     * Current response metadata.
     */
    responseMetadata?: partners$ResponseMetadata;
  }

  declare interface gapi$client$partners$GetPartnersStatusResponse {
    /**
     * Current response metadata.
     */
    responseMetadata?: partners$ResponseMetadata;
  }

  declare interface gapi$client$partners$HistoricalOffer {
    /**
     * Client's AdWords page URL.
     */
    adwordsUrl?: string;

    /**
     * Email address for client.
     */
    clientEmail?: string;

    /**
     * ID of client.
     */
    clientId?: string;

    /**
     * Name of the client.
     */
    clientName?: string;

    /**
     * Time offer was first created.
     */
    creationTime?: string;

    /**
     * Time this offer expires.
     */
    expirationTime?: string;

    /**
     * Time last action was taken.
     */
    lastModifiedTime?: string;

    /**
     * Offer code.
     */
    offerCode?: string;

    /**
     * Country Code for the offer country.
     */
    offerCountryCode?: string;

    /**
     * Type of offer.
     */
    offerType?: string;

    /**
     * Name (First + Last) of the partners user to whom the incentive is allocated.
     */
    senderName?: string;

    /**
     * Status of the offer.
     */
    status?: string;
  }

  declare interface gapi$client$partners$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number;

    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number;
  }

  declare interface gapi$client$partners$Lead {
    /**
     * The AdWords Customer ID of the lead.
     */
    adwordsCustomerId?: string;

    /**
     * Comments lead source gave.
     */
    comments?: string;

    /**
     * Timestamp of when this lead was created.
     */
    createTime?: string;

    /**
     * Email address of lead source.
     */
    email?: string;

    /**
     * Last name of lead source.
     */
    familyName?: string;

    /**
     * First name of lead source.
     */
    givenName?: string;

    /**
     * List of reasons for using Google Partner Search and creating a lead.
     */
    gpsMotivations?: string[];

    /**
     * ID of the lead.
     */
    id?: string;

    /**
     * Language code of the lead's language preference, as defined by
     * <a href="https://tools.ietf.org/html/bcp47">BCP 47</a>
     * (IETF BCP 47, "Tags for Identifying Languages").
     */
    languageCode?: string;

    /**
     * Whether or not the lead signed up for marketing emails
     */
    marketingOptIn?: boolean;

    /**
     * The minimum monthly budget lead source is willing to spend.
     */
    minMonthlyBudget?: partners$Money;

    /**
     * Phone number of lead source.
     */
    phoneNumber?: string;

    /**
     * The lead's state in relation to the company.
     */
    state?: string;

    /**
     * Type of lead.
     */
    type?: string;

    /**
     * Website URL of lead source.
     */
    websiteUrl?: string;
  }

  declare interface gapi$client$partners$ListAnalyticsResponse {
    /**
     * The list of analytics.
     * Sorted in ascending order of
     * Analytics.event_date.
     */
    analytics?: gapi$client$partners$Analytics[];

    /**
     * Aggregated information across the response's
     * analytics.
     */
    analyticsSummary?: gapi$client$partners$AnalyticsSummary;

    /**
     * A token to retrieve next page of results.
     * Pass this value in the `ListAnalyticsRequest.page_token` field in the
     * subsequent call to
     * ListAnalytics to retrieve the
     * next page of results.
     */
    nextPageToken?: string;

    /**
     * Current response metadata.
     */
    responseMetadata?: partners$ResponseMetadata;
  }

  declare interface gapi$client$partners$ListCompaniesResponse {
    /**
     * The list of companies.
     */
    companies?: gapi$client$partners$Company[];

    /**
     * A token to retrieve next page of results.
     * Pass this value in the `ListCompaniesRequest.page_token` field in the
     * subsequent call to
     * ListCompanies to retrieve the
     * next page of results.
     */
    nextPageToken?: string;

    /**
     * Current response metadata.
     */
    responseMetadata?: partners$ResponseMetadata;
  }

  declare interface gapi$client$partners$ListLeadsResponse {
    /**
     * The list of leads.
     */
    leads?: gapi$client$partners$Lead[];

    /**
     * A token to retrieve next page of results.
     * Pass this value in the `ListLeadsRequest.page_token` field in the
     * subsequent call to
     * ListLeads to retrieve the
     * next page of results.
     */
    nextPageToken?: string;

    /**
     * Current response metadata.
     */
    responseMetadata?: partners$ResponseMetadata;

    /**
     * The total count of leads for the given company.
     */
    totalSize?: number;
  }

  declare interface gapi$client$partners$ListOffersHistoryResponse {
    /**
     * True if the user has the option to show entire company history.
     */
    canShowEntireCompany?: boolean;

    /**
     * Supply this token in a ListOffersHistoryRequest to retrieve the next page.
     */
    nextPageToken?: string;

    /**
     * Historical offers meeting request.
     */
    offers?: gapi$client$partners$HistoricalOffer[];

    /**
     * Current response metadata.
     */
    responseMetadata?: partners$ResponseMetadata;

    /**
     * True if this response is showing entire company history.
     */
    showingEntireCompany?: boolean;

    /**
     * Number of results across all pages.
     */
    totalResults?: number;
  }

  declare interface gapi$client$partners$ListOffersResponse {
    /**
     * Available Offers to be distributed.
     */
    availableOffers?: gapi$client$partners$AvailableOffer[];

    /**
     * Reason why no Offers are available.
     */
    noOfferReason?: string;

    /**
     * Current response metadata.
     */
    responseMetadata?: partners$ResponseMetadata;
  }

  declare interface gapi$client$partners$ListUserStatesResponse {
    /**
     * Current response metadata.
     */
    responseMetadata?: partners$ResponseMetadata;

    /**
     * User's states.
     */
    userStates?: string[];
  }

  declare interface gapi$client$partners$LocalizedCompanyInfo {
    /**
     * List of country codes for the localized company info.
     */
    countryCodes?: string[];

    /**
     * Localized display name.
     */
    displayName?: string;

    /**
     * Language code of the localized company info, as defined by
     * <a href="https://tools.ietf.org/html/bcp47">BCP 47</a>
     * (IETF BCP 47, "Tags for Identifying Languages").
     */
    languageCode?: string;

    /**
     * Localized brief description that the company uses to advertise themselves.
     */
    overview?: string;
  }

  declare interface gapi$client$partners$Location {
    /**
     * The single string version of the address.
     */
    address?: string;

    /**
     * The following address lines represent the most specific part of any
     * address.
     */
    addressLine?: string[];

    /**
     * Top-level administrative subdivision of this country.
     */
    administrativeArea?: string;

    /**
     * Dependent locality or sublocality. Used for UK dependent localities, or
     * neighborhoods or boroughs in other locations.
     */
    dependentLocality?: string;

    /**
     * Language code of the address. Should be in BCP 47 format.
     */
    languageCode?: string;

    /**
     * The latitude and longitude of the location, in degrees.
     */
    latLng?: gapi$client$partners$LatLng;

    /**
     * Generally refers to the city/town portion of an address.
     */
    locality?: string;

    /**
     * Values are frequently alphanumeric.
     */
    postalCode?: string;

    /**
     * CLDR (Common Locale Data Repository) region code .
     */
    regionCode?: string;

    /**
     * Use of this code is very country-specific, but will refer to a secondary
     * classification code for sorting mail.
     */
    sortingCode?: string;
  }

  declare interface gapi$client$partners$LogMessageRequest {
    /**
     * Map of client info, such as URL, browser navigator, browser platform, etc.
     */
    clientInfo?: Record<string, string>;

    /**
     * Details about the client message.
     */
    details?: string;

    /**
     * Message level of client message.
     */
    level?: string;

    /**
     * Current request metadata.
     */
    requestMetadata?: partners$RequestMetadata;
  }

  declare interface gapi$client$partners$LogMessageResponse {
    /**
     * Current response metadata.
     */
    responseMetadata?: partners$ResponseMetadata;
  }

  declare interface gapi$client$partners$LogUserEventRequest {
    /**
     * The action that occurred.
     */
    eventAction?: string;

    /**
     * The category the action belongs to.
     */
    eventCategory?: string;

    /**
     * List of event data for the event.
     */
    eventDatas?: gapi$client$partners$EventData[];

    /**
     * The scope of the event.
     */
    eventScope?: string;

    /**
     * Advertiser lead information.
     */
    lead?: gapi$client$partners$Lead;

    /**
     * Current request metadata.
     */
    requestMetadata?: partners$RequestMetadata;

    /**
     * The URL where the event occurred.
     */
    url?: string;
  }

  declare interface gapi$client$partners$LogUserEventResponse {
    /**
     * Current response metadata.
     */
    responseMetadata?: partners$ResponseMetadata;
  }

  declare interface gapi$client$partners$Money {
    /**
     * The 3-letter currency code defined in ISO 4217.
     */
    currencyCode?: string;

    /**
     * Number of nano (10^-9) units of the amount.
     * The value must be between -999,999,999 and +999,999,999 inclusive.
     * If `units` is positive, `nanos` must be positive or zero.
     * If `units` is zero, `nanos` can be positive, zero, or negative.
     * If `units` is negative, `nanos` must be negative or zero.
     * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number;

    /**
     * The whole units of the amount.
     * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string;
  }

  declare interface gapi$client$partners$OfferCustomer {
    /**
     * URL to the customer's AdWords page.
     */
    adwordsUrl?: string;

    /**
     * Country code of the customer.
     */
    countryCode?: string;

    /**
     * Time the customer was created.
     */
    creationTime?: string;

    /**
     * Days the customer is still eligible.
     */
    eligibilityDaysLeft?: number;

    /**
     * External CID for the customer.
     */
    externalCid?: string;

    /**
     * Formatted Get Y amount with currency code.
     */
    getYAmount?: string;

    /**
     * Name of the customer.
     */
    name?: string;

    /**
     * Type of the offer
     */
    offerType?: string;

    /**
     * Formatted Spend X amount with currency code.
     */
    spendXAmount?: string;
  }

  declare interface gapi$client$partners$OptIns {
    /**
     * An opt-in about receiving email from Partners marketing teams. Includes
     * member-only events and special promotional offers for Google products.
     */
    marketComm?: boolean;

    /**
     * An opt-in about receiving email with customized AdWords campaign management
     * tips.
     */
    performanceSuggestions?: boolean;

    /**
     * An opt-in to allow recieivng phone calls about their Partners account.
     */
    phoneContact?: boolean;

    /**
     * An opt-in to receive special promotional gifts and material in the mail.
     */
    physicalMail?: boolean;

    /**
     * An opt-in about receiving email regarding new features and products.
     */
    specialOffers?: boolean;
  }

  declare interface gapi$client$partners$PublicProfile {
    /**
     * The URL to the main display image of the public profile. Being deprecated.
     */
    displayImageUrl?: string;

    /**
     * The display name of the public profile.
     */
    displayName?: string;

    /**
     * The ID which can be used to retrieve more details about the public profile.
     */
    id?: string;

    /**
     * The URL to the main profile image of the public profile.
     */
    profileImage?: string;

    /**
     * The URL of the public profile.
     */
    url?: string;
  }

  declare interface gapi$client$partners$Rank {
    /**
     * The type of rank.
     */
    type?: string;

    /**
     * The numerical value of the rank.
     */
    value?: number;
  }

  declare interface gapi$client$partners$RecaptchaChallenge {
    /**
     * The ID of the reCaptcha challenge.
     */
    id?: string;

    /**
     * The response to the reCaptcha challenge.
     */
    response?: string;
  }

  declare interface gapi$client$partners$RequestMetadata {
    /**
     * Experiment IDs the current request belongs to.
     */
    experimentIds?: string[];

    /**
     * Locale to use for the current request.
     */
    locale?: string;

    /**
     * Google Partners session ID.
     */
    partnersSessionId?: string;

    /**
     * Source of traffic for the current request.
     */
    trafficSource?: partners$TrafficSource;

    /**
     * Values to use instead of the user's respective defaults for the current
     * request. These are only honored by whitelisted products.
     */
    userOverrides?: partners$UserOverrides;
  }

  declare interface gapi$client$partners$ResponseMetadata {
    /**
     * Debug information about this request.
     */
    debugInfo?: gapi$client$partners$DebugInfo;
  }

  declare interface gapi$client$partners$SpecializationStatus {
    /**
     * The specialization this status is for.
     */
    badgeSpecialization?: string;

    /**
     * State of agency specialization.
     */
    badgeSpecializationState?: string;
  }

  declare interface gapi$client$partners$TrafficSource {
    /**
     * Identifier to indicate where the traffic comes from.
     * An identifier has multiple letters created by a team which redirected the
     * traffic to us.
     */
    trafficSourceId?: string;

    /**
     * Second level identifier to indicate where the traffic comes from.
     * An identifier has multiple letters created by a team which redirected the
     * traffic to us.
     */
    trafficSubId?: string;
  }

  declare interface gapi$client$partners$User {
    /**
     * This is the list of AdWords Manager Accounts the user has edit access to.
     * If the user has edit access to multiple accounts, the user can choose the
     * preferred account and we use this when a personal account is needed. Can
     * be empty meaning the user has access to no accounts.
     * @OutputOnly
     */
    availableAdwordsManagerAccounts?: gapi$client$partners$AdWordsManagerAccountInfo[];

    /**
     * The list of achieved certifications. These are calculated based on exam
     * results and other requirements.
     * @OutputOnly
     */
    certificationStatus?: gapi$client$partners$Certification[];

    /**
     * The company that the user is associated with.
     * If not present, the user is not associated with any company.
     */
    company?: gapi$client$partners$CompanyRelation;

    /**
     * The email address used by the user used for company verification.
     * @OutputOnly
     */
    companyVerificationEmail?: string;

    /**
     * The list of exams the user ever taken. For each type of exam, only one
     * entry is listed.
     */
    examStatus?: gapi$client$partners$ExamStatus[];

    /**
     * The ID of the user.
     */
    id?: string;

    /**
     * The internal user ID.
     * Only available for a whitelisted set of api clients.
     */
    internalId?: string;

    /**
     * The most recent time the user interacted with the Partners site.
     * @OutputOnly
     */
    lastAccessTime?: string;

    /**
     * The list of emails the user has access to/can select as primary.
     * @OutputOnly
     */
    primaryEmails?: string[];

    /**
     * The profile information of a Partners user, contains all the directly
     * editable user information.
     */
    profile?: partners$UserProfile;

    /**
     * Information about a user's external public profile outside Google Partners.
     */
    publicProfile?: gapi$client$partners$PublicProfile;
  }

  declare interface gapi$client$partners$UserOverrides {
    /**
     * IP address to use instead of the user's geo-located IP address.
     */
    ipAddress?: string;

    /**
     * Logged-in user ID to impersonate instead of the user's ID.
     */
    userId?: string;
  }

  declare interface gapi$client$partners$UserProfile {
    /**
     * The user's mailing address, contains multiple fields.
     */
    address?: gapi$client$partners$Location;

    /**
     * If the user has edit access to multiple accounts, the user can choose the
     * preferred account and it is used when a personal account is needed. Can
     * be empty.
     */
    adwordsManagerAccount?: string;

    /**
     * A list of ids representing which channels the user selected they were in.
     */
    channels?: string[];

    /**
     * The email address the user has selected on the Partners site as primary.
     */
    emailAddress?: string;

    /**
     * The list of opt-ins for the user, related to communication preferences.
     */
    emailOptIns?: gapi$client$partners$OptIns;

    /**
     * The user's family name.
     */
    familyName?: string;

    /**
     * The user's given name.
     */
    givenName?: string;

    /**
     * A list of ids representing which industries the user selected.
     */
    industries?: string[];

    /**
     * A list of ids represnting which job categories the user selected.
     */
    jobFunctions?: string[];

    /**
     * The list of languages this user understands.
     */
    languages?: string[];

    /**
     * A list of ids representing which markets the user was interested in.
     */
    markets?: string[];

    /**
     * The user's phone number.
     */
    phoneNumber?: string;

    /**
     * The user's primary country, an ISO 2-character code.
     */
    primaryCountryCode?: string;

    /**
     * Whether the user's public profile is visible to anyone with the URL.
     */
    profilePublic?: boolean;
  }

  declare interface gapi$client$partners$AnalyticsResource {
    /**
     * Lists analytics data for a user's associated company.
     * Should only be called within the context of an authorized logged in user.
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
       * Requested page size. Server may return fewer analytics than requested.
       * If unspecified or set to 0, default value is 30.
       * Specifies the number of days in the date range when querying analytics.
       * The `page_token` represents the end date of the date range
       * and the start date is calculated using the `page_size` as the number
       * of days BEFORE the end date.
       * Must be a non-negative integer.
       */
      pageSize?: number,

      /**
       * A token identifying a page of results that the server returns.
       * Typically, this is the value of `ListAnalyticsResponse.next_page_token`
       * returned from the previous call to
       * ListAnalytics.
       * Will be a date string in `YYYY-MM-DD` format representing the end date
       * of the date range of results to return.
       * If unspecified or set to "", default value is the current date.
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$partners$ListAnalyticsResponse>;
  }

  declare interface gapi$client$partners$ClientMessagesResource {
    /**
     * Logs a generic message from the client, such as
     * `Failed to render component`, `Profile page is running slow`,
     * `More than 500 users have accessed this result.`, etc.
     */
    log(request: {
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
    }): Request<gapi$client$partners$LogMessageResponse>;
  }

  declare interface gapi$client$partners$LeadsResource {
    /**
     * Creates an advertiser lead for the given company ID.
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
       * The ID of the company to contact.
       */
      companyId: string,

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
    }): Request<gapi$client$partners$CreateLeadResponse>;

    /**
     * Lists advertiser leads for a user's associated company.
     * Should only be called within the context of an authorized logged in user.
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
       * How to order Leads. Currently, only `create_time`
       * and `create_time desc` are supported
       */
      orderBy?: string,

      /**
       * Requested page size. Server may return fewer leads than requested.
       * If unspecified, server picks an appropriate default.
       */
      pageSize?: number,

      /**
       * A token identifying a page of results that the server returns.
       * Typically, this is the value of `ListLeadsResponse.next_page_token`
       * returned from the previous call to
       * ListLeads.
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$partners$ListLeadsResponse>;
  }

  declare interface gapi$client$partners$CompaniesResource {
    /**
     * Gets a company.
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
       * The address to use for sorting the company's addresses by proximity.
       * If not given, the geo-located address of the request is used.
       * Used when order_by is set.
       */
      address?: string,

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
       * The ID of the company to retrieve.
       */
      companyId: string,

      /**
       * If the company's budget is in a different currency code than this one, then
       * the converted budget is converted to this currency code.
       */
      currencyCode?: string,

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
       * How to order addresses within the returned company. Currently, only
       * `address` and `address desc` is supported which will sorted by closest to
       * farthest in distance from given address and farthest to closest distance
       * from given address respectively.
       */
      orderBy?: string,

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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * The view of `Company` resource to be returned. This must not be
       * `COMPANY_VIEW_UNSPECIFIED`.
       */
      view?: string
    }): Request<gapi$client$partners$GetCompanyResponse>;

    /**
     * Lists companies.
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
       * The address to use when searching for companies.
       * If not given, the geo-located address of the request is used.
       */
      address?: string,

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
       * Company name to search for.
       */
      companyName?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * List of reasons for using Google Partner Search to get companies.
       */
      gpsMotivations?: string,

      /**
       * List of industries the company can help with.
       */
      industries?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * List of language codes that company can support. Only primary language
       * subtags are accepted as defined by
       * <a href="https://tools.ietf.org/html/bcp47">BCP 47</a>
       * (IETF BCP 47, "Tags for Identifying Languages").
       */
      languageCodes?: string,

      /**
       * The 3-letter currency code defined in ISO 4217.
       */
      "maxMonthlyBudget.currencyCode"?: string,

      /**
       * Number of nano (10^-9) units of the amount.
       * The value must be between -999,999,999 and +999,999,999 inclusive.
       * If `units` is positive, `nanos` must be positive or zero.
       * If `units` is zero, `nanos` can be positive, zero, or negative.
       * If `units` is negative, `nanos` must be negative or zero.
       * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
       */
      "maxMonthlyBudget.nanos"?: number,

      /**
       * The whole units of the amount.
       * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
       */
      "maxMonthlyBudget.units"?: string,

      /**
       * The 3-letter currency code defined in ISO 4217.
       */
      "minMonthlyBudget.currencyCode"?: string,

      /**
       * Number of nano (10^-9) units of the amount.
       * The value must be between -999,999,999 and +999,999,999 inclusive.
       * If `units` is positive, `nanos` must be positive or zero.
       * If `units` is zero, `nanos` can be positive, zero, or negative.
       * If `units` is negative, `nanos` must be negative or zero.
       * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
       */
      "minMonthlyBudget.nanos"?: number,

      /**
       * The whole units of the amount.
       * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
       */
      "minMonthlyBudget.units"?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * How to order addresses within the returned companies. Currently, only
       * `address` and `address desc` is supported which will sorted by closest to
       * farthest in distance from given address and farthest to closest distance
       * from given address respectively.
       */
      orderBy?: string,

      /**
       * Requested page size. Server may return fewer companies than requested.
       * If unspecified, server picks an appropriate default.
       */
      pageSize?: number,

      /**
       * A token identifying a page of results that the server returns.
       * Typically, this is the value of `ListCompaniesResponse.next_page_token`
       * returned from the previous call to
       * ListCompanies.
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * List of services that the returned agencies should provide. If this is
       * not empty, any returned agency must have at least one of these services,
       * or one of the specializations in the "specializations" field.
       */
      services?: string,

      /**
       * List of specializations that the returned agencies should provide. If this
       * is not empty, any returned agency must have at least one of these
       * specializations, or one of the services in the "services" field.
       */
      specializations?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * The view of the `Company` resource to be returned. This must not be
       * `COMPANY_VIEW_UNSPECIFIED`.
       */
      view?: string,

      /**
       * Website URL that will help to find a better matched company.
       * .
       */
      websiteUrl?: string
    }): Request<gapi$client$partners$ListCompaniesResponse>;
    leads: gapi$client$partners$LeadsResource;
  }

  declare interface gapi$client$partners$ExamsResource {
    /**
     * Gets an Exam Token for a Partner's user to take an exam in the Exams System
     */
    getToken(request: {
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
       * The exam type we are requesting a token for.
       */
      examType: string,

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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$partners$ExamToken>;
  }

  declare interface gapi$client$partners$HistoryResource {
    /**
     * Lists the Historical Offers for the current user (or user's entire company)
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
       * if true, show history for the entire company.  Requires user to be admin.
       */
      entireCompany?: boolean,

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
       * Comma-separated list of fields to order by, e.g.: "foo,bar,baz".
       * Use "foo desc" to sort descending.
       * List of valid field names is: name, offer_code, expiration_time, status,
       * last_modified_time, sender_name, creation_time, country_code,
       * offer_type.
       */
      orderBy?: string,

      /**
       * Maximum number of rows to return per page.
       */
      pageSize?: number,

      /**
       * Token to retrieve a specific page.
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$partners$ListOffersHistoryResponse>;
  }

  declare interface gapi$client$partners$OffersResource {
    /**
     * Lists the Offers available for the current user
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$partners$ListOffersResponse>;
    history: gapi$client$partners$HistoryResource;
  }

  declare interface gapi$client$partners$UserEventsResource {
    /**
     * Logs a user event.
     */
    log(request: {
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
    }): Request<gapi$client$partners$LogUserEventResponse>;
  }

  declare interface gapi$client$partners$UserStatesResource {
    /**
     * Lists states for current user.
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$partners$ListUserStatesResponse>;
  }

  declare interface gapi$client$partners$UsersResource {
    /**
     * Creates a user's company relation. Affiliates the user to a company.
     */
    createCompanyRelation(request: {
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * The ID of the user. Can be set to <code>me</code> to mean
       * the currently authenticated user.
       */
      userId: string
    }): Request<gapi$client$partners$CompanyRelation>;

    /**
     * Deletes a user's company relation. Unaffiliaites the user from a company.
     */
    deleteCompanyRelation(request: {
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * The ID of the user. Can be set to <code>me</code> to mean
       * the currently authenticated user.
       */
      userId: string
    }): Request<{}>;

    /**
     * Gets a user.
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * Identifier of the user. Can be set to <code>me</code> to mean the currently
       * authenticated user.
       */
      userId: string,

      /**
       * Specifies what parts of the user information to return.
       */
      userView?: string
    }): Request<gapi$client$partners$User>;

    /**
     * Updates a user's profile. A user can only update their own profile and
     * should only be called within the context of a logged in user.
     */
    updateProfile(request: {
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$partners$UserProfile>;
  }

  declare interface gapi$client$partners$V2Resource {
    /**
     * Gets Partners Status of the logged in user's agency.
     * Should only be called if the logged in user is the admin of the agency.
     */
    getPartnersstatus(request: {
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$partners$GetPartnersStatusResponse>;

    /**
     * Update company.
     * Should only be called within the context of an authorized logged in user.
     */
    updateCompanies(request: {
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Standard field mask for the set of fields to be updated.
       * Required with at least 1 value in FieldMask's paths.
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$partners$Company>;

    /**
     * Updates the specified lead.
     */
    updateLeads(request: {
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
       * Experiment IDs the current request belongs to.
       */
      "requestMetadata.experimentIds"?: string,

      /**
       * Locale to use for the current request.
       */
      "requestMetadata.locale"?: string,

      /**
       * Google Partners session ID.
       */
      "requestMetadata.partnersSessionId"?: string,

      /**
       * Identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSourceId"?: string,

      /**
       * Second level identifier to indicate where the traffic comes from.
       * An identifier has multiple letters created by a team which redirected the
       * traffic to us.
       */
      "requestMetadata.trafficSource.trafficSubId"?: string,

      /**
       * IP address to use instead of the user's geo-located IP address.
       */
      "requestMetadata.userOverrides.ipAddress"?: string,

      /**
       * Logged-in user ID to impersonate instead of the user's ID.
       */
      "requestMetadata.userOverrides.userId"?: string,

      /**
       * Standard field mask for the set of fields to be updated.
       * Required with at least 1 value in FieldMask's paths.
       * Only `state` and `adwords_customer_id` are currently supported.
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$partners$Lead>;
  }
}
