declare module "gapi.client.dfareporting" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    accountActiveAdSummaries: typeof client$accountActiveAdSummaries,
    accountPermissionGroups: typeof client$accountPermissionGroups,
    accountPermissions: typeof client$accountPermissions,
    accountUserProfiles: typeof client$accountUserProfiles,
    accounts: typeof client$accounts,
    ads: typeof client$ads,
    advertiserGroups: typeof client$advertiserGroups,
    advertisers: typeof client$advertisers,
    browsers: typeof client$browsers,
    campaignCreativeAssociations: typeof client$campaignCreativeAssociations,
    campaigns: typeof client$campaigns,
    changeLogs: typeof client$changeLogs,
    cities: typeof client$cities,
    connectionTypes: typeof client$connectionTypes,
    contentCategories: typeof client$contentCategories,
    conversions: typeof client$conversions,
    countries: typeof client$countries,
    creativeAssets: typeof client$creativeAssets,
    creativeFieldValues: typeof client$creativeFieldValues,
    creativeFields: typeof client$creativeFields,
    creativeGroups: typeof client$creativeGroups,
    creatives: typeof client$creatives,
    dimensionValues: typeof client$dimensionValues,
    directorySiteContacts: typeof client$directorySiteContacts,
    directorySites: typeof client$directorySites,
    dynamicTargetingKeys: typeof client$dynamicTargetingKeys,
    eventTags: typeof client$eventTags,
    files: typeof client$files,
    floodlightActivities: typeof client$floodlightActivities,
    floodlightActivityGroups: typeof client$floodlightActivityGroups,
    floodlightConfigurations: typeof client$floodlightConfigurations,
    inventoryItems: typeof client$inventoryItems,
    landingPages: typeof client$landingPages,
    languages: typeof client$languages,
    metros: typeof client$metros,
    mobileCarriers: typeof client$mobileCarriers,
    operatingSystemVersions: typeof client$operatingSystemVersions,
    operatingSystems: typeof client$operatingSystems,
    orderDocuments: typeof client$orderDocuments,
    orders: typeof client$orders,
    placementGroups: typeof client$placementGroups,
    placementStrategies: typeof client$placementStrategies,
    placements: typeof client$placements,
    platformTypes: typeof client$platformTypes,
    postalCodes: typeof client$postalCodes,
    projects: typeof client$projects,
    regions: typeof client$regions,
    remarketingListShares: typeof client$remarketingListShares,
    remarketingLists: typeof client$remarketingLists,
    reports: typeof client$reports,
    sites: typeof client$sites,
    sizes: typeof client$sizes,
    subaccounts: typeof client$subaccounts,
    targetableRemarketingLists: typeof client$targetableRemarketingLists,
    targetingTemplates: typeof client$targetingTemplates,
    userProfiles: typeof client$userProfiles,
    userRolePermissionGroups: typeof client$userRolePermissionGroups,
    userRolePermissions: typeof client$userRolePermissions,
    userRoles: typeof client$userRoles,
    videoFormats: typeof client$videoFormats
  };

  /**
   * Load DCM/DFA Reporting And Trafficking API v2.8
   */
  declare function client$load(
    name: "dfareporting",
    version: "v2.8"
  ): PromiseLike<void>;

  declare function client$load(
    name: "dfareporting",
    version: "v2.8",
    callback: () => any
  ): void;

  declare var client$accountActiveAdSummaries: dfareporting$dfareporting$AccountActiveAdSummariesResource;

  declare var client$accountPermissionGroups: dfareporting$dfareporting$AccountPermissionGroupsResource;

  declare var client$accountPermissions: dfareporting$dfareporting$AccountPermissionsResource;

  declare var client$accountUserProfiles: dfareporting$dfareporting$AccountUserProfilesResource;

  declare var client$accounts: dfareporting$dfareporting$AccountsResource;

  declare var client$ads: dfareporting$dfareporting$AdsResource;

  declare var client$advertiserGroups: dfareporting$dfareporting$AdvertiserGroupsResource;

  declare var client$advertisers: dfareporting$dfareporting$AdvertisersResource;

  declare var client$browsers: dfareporting$dfareporting$BrowsersResource;

  declare var client$campaignCreativeAssociations: dfareporting$dfareporting$CampaignCreativeAssociationsResource;

  declare var client$campaigns: dfareporting$dfareporting$CampaignsResource;

  declare var client$changeLogs: dfareporting$dfareporting$ChangeLogsResource;

  declare var client$cities: dfareporting$dfareporting$CitiesResource;

  declare var client$connectionTypes: dfareporting$dfareporting$ConnectionTypesResource;

  declare var client$contentCategories: dfareporting$dfareporting$ContentCategoriesResource;

  declare var client$conversions: dfareporting$dfareporting$ConversionsResource;

  declare var client$countries: dfareporting$dfareporting$CountriesResource;

  declare var client$creativeAssets: dfareporting$dfareporting$CreativeAssetsResource;

  declare var client$creativeFieldValues: dfareporting$dfareporting$CreativeFieldValuesResource;

  declare var client$creativeFields: dfareporting$dfareporting$CreativeFieldsResource;

  declare var client$creativeGroups: dfareporting$dfareporting$CreativeGroupsResource;

  declare var client$creatives: dfareporting$dfareporting$CreativesResource;

  declare var client$dimensionValues: dfareporting$dfareporting$DimensionValuesResource;

  declare var client$directorySiteContacts: dfareporting$dfareporting$DirectorySiteContactsResource;

  declare var client$directorySites: dfareporting$dfareporting$DirectorySitesResource;

  declare var client$dynamicTargetingKeys: dfareporting$dfareporting$DynamicTargetingKeysResource;

  declare var client$eventTags: dfareporting$dfareporting$EventTagsResource;

  declare var client$files: dfareporting$dfareporting$FilesResource;

  declare var client$floodlightActivities: dfareporting$dfareporting$FloodlightActivitiesResource;

  declare var client$floodlightActivityGroups: dfareporting$dfareporting$FloodlightActivityGroupsResource;

  declare var client$floodlightConfigurations: dfareporting$dfareporting$FloodlightConfigurationsResource;

  declare var client$inventoryItems: dfareporting$dfareporting$InventoryItemsResource;

  declare var client$landingPages: dfareporting$dfareporting$LandingPagesResource;

  declare var client$languages: dfareporting$dfareporting$LanguagesResource;

  declare var client$metros: dfareporting$dfareporting$MetrosResource;

  declare var client$mobileCarriers: dfareporting$dfareporting$MobileCarriersResource;

  declare var client$operatingSystemVersions: dfareporting$dfareporting$OperatingSystemVersionsResource;

  declare var client$operatingSystems: dfareporting$dfareporting$OperatingSystemsResource;

  declare var client$orderDocuments: dfareporting$dfareporting$OrderDocumentsResource;

  declare var client$orders: dfareporting$dfareporting$OrdersResource;

  declare var client$placementGroups: dfareporting$dfareporting$PlacementGroupsResource;

  declare var client$placementStrategies: dfareporting$dfareporting$PlacementStrategiesResource;

  declare var client$placements: dfareporting$dfareporting$PlacementsResource;

  declare var client$platformTypes: dfareporting$dfareporting$PlatformTypesResource;

  declare var client$postalCodes: dfareporting$dfareporting$PostalCodesResource;

  declare var client$projects: dfareporting$dfareporting$ProjectsResource;

  declare var client$regions: dfareporting$dfareporting$RegionsResource;

  declare var client$remarketingListShares: dfareporting$dfareporting$RemarketingListSharesResource;

  declare var client$remarketingLists: dfareporting$dfareporting$RemarketingListsResource;

  declare var client$reports: dfareporting$dfareporting$ReportsResource;

  declare var client$sites: dfareporting$dfareporting$SitesResource;

  declare var client$sizes: dfareporting$dfareporting$SizesResource;

  declare var client$subaccounts: dfareporting$dfareporting$SubaccountsResource;

  declare var client$targetableRemarketingLists: dfareporting$dfareporting$TargetableRemarketingListsResource;

  declare var client$targetingTemplates: dfareporting$dfareporting$TargetingTemplatesResource;

  declare var client$userProfiles: dfareporting$dfareporting$UserProfilesResource;

  declare var client$userRolePermissionGroups: dfareporting$dfareporting$UserRolePermissionGroupsResource;

  declare var client$userRolePermissions: dfareporting$dfareporting$UserRolePermissionsResource;

  declare var client$userRoles: dfareporting$dfareporting$UserRolesResource;

  declare var client$videoFormats: dfareporting$dfareporting$VideoFormatsResource;

  declare interface dfareporting$Account {
    /**
     * Account permissions assigned to this account.
     */
    accountPermissionIds?: string[];

    /**
     * Profile for this account. This is a read-only field that can be left blank.
     */
    accountProfile?: string;

    /**
     * Whether this account is active.
     */
    active?: boolean;

    /**
     * Maximum number of active ads allowed for this account.
     */
    activeAdsLimitTier?: string;

    /**
     * Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions.
     */
    activeViewOptOut?: boolean;

    /**
     * User role permissions available to the user roles of this account.
     */
    availablePermissionIds?: string[];

    /**
     * ID of the country associated with this account.
     */
    countryId?: string;

    /**
     * ID of currency associated with this account. This is a required field.
     * Acceptable values are:
     * - "1" for USD
     * - "2" for GBP
     * - "3" for ESP
     * - "4" for SEK
     * - "5" for CAD
     * - "6" for JPY
     * - "7" for DEM
     * - "8" for AUD
     * - "9" for FRF
     * - "10" for ITL
     * - "11" for DKK
     * - "12" for NOK
     * - "13" for FIM
     * - "14" for ZAR
     * - "15" for IEP
     * - "16" for NLG
     * - "17" for EUR
     * - "18" for KRW
     * - "19" for TWD
     * - "20" for SGD
     * - "21" for CNY
     * - "22" for HKD
     * - "23" for NZD
     * - "24" for MYR
     * - "25" for BRL
     * - "26" for PTE
     * - "27" for MXP
     * - "28" for CLP
     * - "29" for TRY
     * - "30" for ARS
     * - "31" for PEN
     * - "32" for ILS
     * - "33" for CHF
     * - "34" for VEF
     * - "35" for COP
     * - "36" for GTQ
     * - "37" for PLN
     * - "39" for INR
     * - "40" for THB
     * - "41" for IDR
     * - "42" for CZK
     * - "43" for RON
     * - "44" for HUF
     * - "45" for RUB
     * - "46" for AED
     * - "47" for BGN
     * - "48" for HRK
     * - "49" for MXN
     */
    currencyId?: string;

    /**
     * Default placement dimensions for this account.
     */
    defaultCreativeSizeId?: string;

    /**
     * Description of this account.
     */
    description?: string;

    /**
     * ID of this account. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#account".
     */
    kind?: string;

    /**
     * Locale of this account.
     * Acceptable values are:
     * - "cs" (Czech)
     * - "de" (German)
     * - "en" (English)
     * - "en-GB" (English United Kingdom)
     * - "es" (Spanish)
     * - "fr" (French)
     * - "it" (Italian)
     * - "ja" (Japanese)
     * - "ko" (Korean)
     * - "pl" (Polish)
     * - "pt-BR" (Portuguese Brazil)
     * - "ru" (Russian)
     * - "sv" (Swedish)
     * - "tr" (Turkish)
     * - "zh-CN" (Chinese Simplified)
     * - "zh-TW" (Chinese Traditional)
     */
    locale?: string;

    /**
     * Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1.
     */
    maximumImageSize?: string;

    /**
     * Name of this account. This is a required field, and must be less than 128 characters long and be globally unique.
     */
    name?: string;

    /**
     * Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default.
     */
    nielsenOcrEnabled?: boolean;

    /**
     * Reporting configuration of this account.
     */
    reportsConfiguration?: dfareporting$ReportsConfiguration;

    /**
     * Share Path to Conversion reports with Twitter.
     */
    shareReportsWithTwitter?: boolean;

    /**
     * File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive.
     */
    teaserSizeLimit?: string;
  }

  declare interface dfareporting$AccountActiveAdSummary {
    /**
     * ID of the account.
     */
    accountId?: string;

    /**
     * Ads that have been activated for the account
     */
    activeAds?: string;

    /**
     * Maximum number of active ads allowed for the account.
     */
    activeAdsLimitTier?: string;

    /**
     * Ads that can be activated for the account.
     */
    availableAds?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary".
     */
    kind?: string;
  }

  declare interface dfareporting$AccountPermission {
    /**
     * Account profiles associated with this account permission.
     *
     * Possible values are:
     * - "ACCOUNT_PROFILE_BASIC"
     * - "ACCOUNT_PROFILE_STANDARD"
     */
    accountProfiles?: string[];

    /**
     * ID of this account permission.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission".
     */
    kind?: string;

    /**
     * Administrative level required to enable this account permission.
     */
    level?: string;

    /**
     * Name of this account permission.
     */
    name?: string;

    /**
     * Permission group of this account permission.
     */
    permissionGroupId?: string;
  }

  declare interface dfareporting$AccountPermissionGroup {
    /**
     * ID of this account permission group.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup".
     */
    kind?: string;

    /**
     * Name of this account permission group.
     */
    name?: string;
  }

  declare interface dfareporting$AccountPermissionGroupsListResponse {
    /**
     * Account permission group collection.
     */
    client$accountPermissionGroups?: dfareporting$AccountPermissionGroup[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupsListResponse".
     */
    kind?: string;
  }

  declare interface dfareporting$AccountPermissionsListResponse {
    /**
     * Account permission collection.
     */
    client$accountPermissions?: dfareporting$AccountPermission[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse".
     */
    kind?: string;
  }

  declare interface dfareporting$AccountUserProfile {
    /**
     * Account ID of the user profile. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable.
     */
    active?: boolean;

    /**
     * Filter that describes which advertisers are visible to the user profile.
     */
    advertiserFilter?: dfareporting$ObjectFilter;

    /**
     * Filter that describes which campaigns are visible to the user profile.
     */
    campaignFilter?: dfareporting$ObjectFilter;

    /**
     * Comments for this user profile.
     */
    comments?: string;

    /**
     * Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion and is read-only after insertion.
     */
    email?: string;

    /**
     * ID of the user profile. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile".
     */
    kind?: string;

    /**
     * Locale of the user profile. This is a required field.
     * Acceptable values are:
     * - "cs" (Czech)
     * - "de" (German)
     * - "en" (English)
     * - "en-GB" (English United Kingdom)
     * - "es" (Spanish)
     * - "fr" (French)
     * - "it" (Italian)
     * - "ja" (Japanese)
     * - "ko" (Korean)
     * - "pl" (Polish)
     * - "pt-BR" (Portuguese Brazil)
     * - "ru" (Russian)
     * - "sv" (Swedish)
     * - "tr" (Turkish)
     * - "zh-CN" (Chinese Simplified)
     * - "zh-TW" (Chinese Traditional)
     */
    locale?: string;

    /**
     * Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any
     * of the following characters: "&;"#%,".
     */
    name?: string;

    /**
     * Filter that describes which sites are visible to the user profile.
     */
    siteFilter?: dfareporting$ObjectFilter;

    /**
     * Subaccount ID of the user profile. This is a read-only field that can be left blank.
     */
    subaccountId?: string;

    /**
     * Trafficker type of this user profile.
     */
    traffickerType?: string;

    /**
     * User type of the user profile. This is a read-only field that can be left blank.
     */
    userAccessType?: string;

    /**
     * Filter that describes which user roles are visible to the user profile.
     */
    userRoleFilter?: dfareporting$ObjectFilter;

    /**
     * User role ID of the user profile. This is a required field.
     */
    userRoleId?: string;
  }

  declare interface dfareporting$AccountUserProfilesListResponse {
    /**
     * Account user profile collection.
     */
    client$accountUserProfiles?: dfareporting$AccountUserProfile[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$AccountsListResponse {
    /**
     * Account collection.
     */
    client$accounts?: dfareporting$Account[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$Activities {
    /**
     * List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup".
     */
    filters?: dfareporting$DimensionValue[];

    /**
     * The kind of resource this is, in this case dfareporting#activities.
     */
    kind?: string;

    /**
     * List of names of floodlight activity metrics.
     */
    metricNames?: string[];
  }

  declare interface dfareporting$Ad {
    /**
     * Account ID of this ad. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Whether this ad is active. When true, archived must be false.
     */
    active?: boolean;

    /**
     * Advertiser ID of this ad. This is a required field on insertion.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Whether this ad is archived. When true, active must be false.
     */
    archived?: boolean;

    /**
     * Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD.
     */
    audienceSegmentId?: string;

    /**
     * Campaign ID of this ad. This is a required field on insertion.
     */
    campaignId?: string;

    /**
     * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
     */
    campaignIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Click-through URL for this ad. This is a required field on insertion. Applicable when type is AD_SERVING_CLICK_TRACKER.
     */
    clickThroughUrl?: dfareporting$ClickThroughUrl;

    /**
     * Click-through URL suffix properties for this ad. Applies to the URL in the ad or (if overriding ad properties) the URL in the creative.
     */
    clickThroughUrlSuffixProperties?: dfareporting$ClickThroughUrlSuffixProperties;

    /**
     * Comments for this ad.
     */
    comments?: string;

    /**
     * Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on
     * mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New
     * mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility
     * types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard.
     */
    compatibility?: string;

    /**
     * Information about the creation of this ad. This is a read-only field.
     */
    createInfo?: dfareporting$LastModifiedInfo;

    /**
     * Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per creative group number is allowed for
     * a maximum of two assignments.
     */
    creativeGroupAssignments?: dfareporting$CreativeGroupAssignment[];

    /**
     * Creative rotation for this ad. Applicable when type is AD_SERVING_DEFAULT_AD, AD_SERVING_STANDARD_AD, or AD_SERVING_TRACKING. When type is
     * AD_SERVING_DEFAULT_AD, this field should have exactly one creativeAssignment.
     */
    creativeRotation?: dfareporting$CreativeRotation;

    /**
     * Time and day targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is
     * AD_SERVING_STANDARD_AD.
     */
    dayPartTargeting?: dfareporting$DayPartTargeting;

    /**
     * Default click-through event tag properties for this ad.
     */
    defaultClickThroughEventTagProperties?: dfareporting$DefaultClickThroughEventTagProperties;

    /**
     * Delivery schedule information for this ad. Applicable when type is AD_SERVING_STANDARD_AD or AD_SERVING_TRACKING. This field along with subfields
     * priority and impressionRatio are required on insertion when type is AD_SERVING_STANDARD_AD.
     */
    deliverySchedule?: dfareporting$DeliverySchedule;

    /**
     * Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only
     * after insert.
     */
    dynamicClickTracker?: boolean;

    /**
     * Date and time that this ad should stop serving. Must be later than the start time. This is a required field on insertion.
     */
    endTime?: string;

    /**
     * Event tag overrides for this ad.
     */
    eventTagOverrides?: dfareporting$EventTagOverride[];

    /**
     * Geographical targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is
     * AD_SERVING_STANDARD_AD.
     */
    geoTargeting?: dfareporting$GeoTargeting;

    /**
     * ID of this ad. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Dimension value for the ID of this ad. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Key-value targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is
     * AD_SERVING_STANDARD_AD.
     */
    keyValueTargetingExpression?: dfareporting$KeyValueTargetingExpression;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad".
     */
    kind?: string;

    /**
     * Language targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is
     * AD_SERVING_STANDARD_AD.
     */
    languageTargeting?: dfareporting$LanguageTargeting;

    /**
     * Information about the most recent modification of this ad. This is a read-only field.
     */
    lastModifiedInfo?: dfareporting$LastModifiedInfo;

    /**
     * Name of this ad. This is a required field and must be less than 256 characters long.
     */
    name?: string;

    /**
     * Placement assignments for this ad.
     */
    placementAssignments?: dfareporting$PlacementAssignment[];

    /**
     * Remarketing list targeting expression for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is
     * AD_SERVING_STANDARD_AD.
     */
    remarketingListExpression?: dfareporting$ListTargetingExpression;

    /**
     * Size of this ad. Applicable when type is AD_SERVING_DEFAULT_AD.
     */
    size?: dfareporting$Size;

    /**
     * Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslCompliant?: boolean;

    /**
     * Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslRequired?: boolean;

    /**
     * Date and time that this ad should start serving. If creating an ad, this field must be a time in the future. This is a required field on insertion.
     */
    startTime?: string;

    /**
     * Subaccount ID of this ad. This is a read-only field that can be left blank.
     */
    subaccountId?: string;

    /**
     * Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting,
     * keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is
     * AD_SERVING_STANDARD_AD.
     */
    targetingTemplateId?: string;

    /**
     * Technology platform targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is
     * AD_SERVING_STANDARD_AD.
     */
    technologyTargeting?: dfareporting$TechnologyTargeting;

    /**
     * Type of ad. This is a required field on insertion. Note that default ads (AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource).
     */
    type?: string;
  }

  declare interface dfareporting$AdBlockingConfiguration {
    /**
     * Click-through URL used by brand-neutral ads. This is a required field when overrideClickThroughUrl is set to true.
     */
    clickThroughUrl?: string;

    /**
     * ID of a creative bundle to use for this campaign. If set, brand-neutral ads will select creatives from this bundle. Otherwise, a default transparent
     * pixel will be used.
     */
    creativeBundleId?: string;

    /**
     * Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and
     * placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings.
     */
    enabled?: boolean;

    /**
     * Whether the brand-neutral ad's click-through URL comes from the campaign's creative bundle or the override URL. Must be set to true if ad blocking is
     * enabled and no creative bundle is configured.
     */
    overrideClickThroughUrl?: boolean;
  }

  declare interface dfareporting$AdSlot {
    /**
     * Comment for this ad slot.
     */
    comment?: string;

    /**
     * Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or
     * interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads
     * developed with the VAST standard.
     */
    compatibility?: string;

    /**
     * Height of this ad slot.
     */
    height?: string;

    /**
     * ID of the placement from an external platform that is linked to this ad slot.
     */
    linkedPlacementId?: string;

    /**
     * Name of this ad slot.
     */
    name?: string;

    /**
     * Payment source type of this ad slot.
     */
    paymentSourceType?: string;

    /**
     * Primary ad slot of a roadblock inventory item.
     */
    primary?: boolean;

    /**
     * Width of this ad slot.
     */
    width?: string;
  }

  declare interface dfareporting$AdsListResponse {
    /**
     * Ad collection.
     */
    client$ads?: dfareporting$Ad[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$Advertiser {
    /**
     * Account ID of this advertiser.This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for
     * all advertisers in each group.
     */
    advertiserGroupId?: string;

    /**
     * Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long.
     */
    clickThroughUrlSuffix?: string;

    /**
     * ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns.
     */
    defaultClickThroughEventTagId?: string;

    /**
     * Default email address used in sender field for tag emails.
     */
    defaultEmail?: string;

    /**
     * Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left
     * blank. This field can be set to another advertiser's floodlight configuration ID in order to share that advertiser's floodlight configuration with this
     * advertiser, so long as:
     * - This advertiser's original floodlight configuration is not already associated with floodlight activities or floodlight activity groups.
     * - This advertiser's original floodlight configuration is not already shared with another advertiser.
     */
    floodlightConfigurationId?: string;

    /**
     * Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
     */
    floodlightConfigurationIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * ID of this advertiser. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Dimension value for the ID of this advertiser. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser".
     */
    kind?: string;

    /**
     * Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account.
     */
    name?: string;

    /**
     * Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to
     * originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an advertiser's floodlight
     * configuration if the shared configuration has activities associated with any campaign or placement.
     */
    originalFloodlightConfigurationId?: string;

    /**
     * Status of this advertiser.
     */
    status?: string;

    /**
     * Subaccount ID of this advertiser.This is a read-only field that can be left blank.
     */
    subaccountId?: string;

    /**
     * Suspension status of this advertiser.
     */
    suspended?: boolean;
  }

  declare interface dfareporting$AdvertiserGroup {
    /**
     * Account ID of this advertiser group. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * ID of this advertiser group. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup".
     */
    kind?: string;

    /**
     * Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same
     * account.
     */
    name?: string;
  }

  declare interface dfareporting$AdvertiserGroupsListResponse {
    /**
     * Advertiser group collection.
     */
    client$advertiserGroups?: dfareporting$AdvertiserGroup[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$AdvertisersListResponse {
    /**
     * Advertiser collection.
     */
    client$advertisers?: dfareporting$Advertiser[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$AudienceSegment {
    /**
     * Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment
     * group. Acceptable values are 1 to 1000, inclusive.
     */
    allocation?: number;

    /**
     * ID of this audience segment. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Name of this audience segment. This is a required field and must be less than 65 characters long.
     */
    name?: string;
  }

  declare interface dfareporting$AudienceSegmentGroup {
    /**
     * Audience segments assigned to this group. The number of segments must be between 2 and 100.
     */
    audienceSegments?: dfareporting$AudienceSegment[];

    /**
     * ID of this audience segment group. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Name of this audience segment group. This is a required field and must be less than 65 characters long.
     */
    name?: string;
  }

  declare interface dfareporting$Browser {
    /**
     * ID referring to this grouping of browser and version numbers. This is the ID used for targeting.
     */
    browserVersionId?: string;

    /**
     * DART ID of this browser. This is the ID used when generating reports.
     */
    dartId?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser".
     */
    kind?: string;

    /**
     * Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (&#42;) may be
     * used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example,
     * Chrome &#42;.&#42; targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.&#42; targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where
     * the ad server knows the browser is Firefox but can't tell which version it is.
     */
    majorVersion?: string;

    /**
     * Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An
     * asterisk (&#42;) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be
     * identified. For example, Chrome &#42;.&#42; targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.&#42; targets Chrome 3.1, 3.5, but not 4.0. Firefox
     * ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is.
     */
    minorVersion?: string;

    /**
     * Name of this browser.
     */
    name?: string;
  }

  declare interface dfareporting$BrowsersListResponse {
    /**
     * Browser collection.
     */
    client$browsers?: dfareporting$Browser[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse".
     */
    kind?: string;
  }

  declare interface dfareporting$Campaign {
    /**
     * Account ID of this campaign. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Ad blocking settings for this campaign.
     */
    adBlockingConfiguration?: dfareporting$AdBlockingConfiguration;

    /**
     * Additional creative optimization configurations for the campaign.
     */
    additionalCreativeOptimizationConfigurations?: dfareporting$CreativeOptimizationConfiguration[];

    /**
     * Advertiser group ID of the associated advertiser.
     */
    advertiserGroupId?: string;

    /**
     * Advertiser ID of this campaign. This is a required field.
     */
    advertiserId?: string;

    /**
     * Dimension value for the advertiser ID of this campaign. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Whether this campaign has been archived.
     */
    archived?: boolean;

    /**
     * Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups.
     */
    audienceSegmentGroups?: dfareporting$AudienceSegmentGroup[];

    /**
     * Billing invoice code included in the DCM client billing invoices associated with the campaign.
     */
    billingInvoiceCode?: string;

    /**
     * Click-through URL suffix override properties for this campaign.
     */
    clickThroughUrlSuffixProperties?: dfareporting$ClickThroughUrlSuffixProperties;

    /**
     * Arbitrary comments about this campaign. Must be less than 256 characters long.
     */
    comment?: string;

    /**
     * Information about the creation of this campaign. This is a read-only field.
     */
    createInfo?: dfareporting$LastModifiedInfo;

    /**
     * List of creative group IDs that are assigned to the campaign.
     */
    creativeGroupIds?: string[];

    /**
     * Creative optimization configuration for the campaign.
     */
    creativeOptimizationConfiguration?: dfareporting$CreativeOptimizationConfiguration;

    /**
     * Click-through event tag ID override properties for this campaign.
     */
    defaultClickThroughEventTagProperties?: dfareporting$DefaultClickThroughEventTagProperties;

    /**
     * Date on which the campaign will stop running. On insert, the end date must be today or a future date. The end date must be later than or be the same as
     * the start date. If, for example, you set 6/25/2015 as both the start and end dates, the effective campaign run date is just that day only, 6/25/2015.
     * The hours, minutes, and seconds of the end date should not be set, as doing so will result in an error. This is a required field.
     */
    endDate?: string;

    /**
     * Overrides that can be used to activate or deactivate advertiser event tags.
     */
    eventTagOverrides?: dfareporting$EventTagOverride[];

    /**
     * External ID for this campaign.
     */
    externalId?: string;

    /**
     * ID of this campaign. This is a read-only auto-generated field.
     */
    id?: string;

    /**
     * Dimension value for the ID of this campaign. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign".
     */
    kind?: string;

    /**
     * Information about the most recent modification of this campaign. This is a read-only field.
     */
    lastModifiedInfo?: dfareporting$LastModifiedInfo;

    /**
     * Lookback window settings for the campaign.
     */
    lookbackConfiguration?: dfareporting$LookbackConfiguration;

    /**
     * Name of this campaign. This is a required field and must be less than 256 characters long and unique among campaigns of the same advertiser.
     */
    name?: string;

    /**
     * Whether Nielsen reports are enabled for this campaign.
     */
    nielsenOcrEnabled?: boolean;

    /**
     * Date on which the campaign starts running. The start date can be any date. The hours, minutes, and seconds of the start date should not be set, as
     * doing so will result in an error. This is a required field.
     */
    startDate?: string;

    /**
     * Subaccount ID of this campaign. This is a read-only field that can be left blank.
     */
    subaccountId?: string;

    /**
     * Campaign trafficker contact emails.
     */
    traffickerEmails?: string[];
  }

  declare interface dfareporting$CampaignCreativeAssociation {
    /**
     * ID of the creative associated with the campaign. This is a required field.
     */
    creativeId?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation".
     */
    kind?: string;
  }

  declare interface dfareporting$CampaignCreativeAssociationsListResponse {
    /**
     * Campaign creative association collection
     */
    client$campaignCreativeAssociations?: dfareporting$CampaignCreativeAssociation[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociationsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$CampaignsListResponse {
    /**
     * Campaign collection.
     */
    client$campaigns?: dfareporting$Campaign[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$ChangeLog {
    /**
     * Account ID of the modified object.
     */
    accountId?: string;

    /**
     * Action which caused the change.
     */
    action?: string;

    /**
     * Time when the object was modified.
     */
    changeTime?: string;

    /**
     * Field name of the object which changed.
     */
    fieldName?: string;

    /**
     * ID of this change log.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog".
     */
    kind?: string;

    /**
     * New value of the object field.
     */
    newValue?: string;

    /**
     * ID of the object of this change log. The object could be a campaign, placement, ad, or other type.
     */
    objectId?: string;

    /**
     * Object type of the change log.
     */
    objectType?: string;

    /**
     * Old value of the object field.
     */
    oldValue?: string;

    /**
     * Subaccount ID of the modified object.
     */
    subaccountId?: string;

    /**
     * Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share
     * the same transactionId.
     */
    transactionId?: string;

    /**
     * ID of the user who modified the object.
     */
    userProfileId?: string;

    /**
     * User profile name of the user who modified the object.
     */
    userProfileName?: string;
  }

  declare interface dfareporting$ChangeLogsListResponse {
    /**
     * Change log collection.
     */
    client$changeLogs?: dfareporting$ChangeLog[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$CitiesListResponse {
    /**
     * City collection.
     */
    client$cities?: dfareporting$City[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse".
     */
    kind?: string;
  }

  declare interface dfareporting$City {
    /**
     * Country code of the country to which this city belongs.
     */
    countryCode?: string;

    /**
     * DART ID of the country to which this city belongs.
     */
    countryDartId?: string;

    /**
     * DART ID of this city. This is the ID used for targeting and generating reports.
     */
    dartId?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#city".
     */
    kind?: string;

    /**
     * Metro region code of the metro region (DMA) to which this city belongs.
     */
    metroCode?: string;

    /**
     * ID of the metro region (DMA) to which this city belongs.
     */
    metroDmaId?: string;

    /**
     * Name of this city.
     */
    name?: string;

    /**
     * Region code of the region to which this city belongs.
     */
    regionCode?: string;

    /**
     * DART ID of the region to which this city belongs.
     */
    regionDartId?: string;
  }

  declare interface dfareporting$ClickTag {
    /**
     * Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when
     * the primary asset type is not HTML_IMAGE.
     */
    eventName?: string;

    /**
     * Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's
     * creativeAssetId.name field.
     */
    name?: string;

    /**
     * Parameter value for the specified click tag. This field contains a click-through url.
     */
    value?: string;
  }

  declare interface dfareporting$ClickThroughUrl {
    /**
     * Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows:
     * - If defaultLandingPage is enabled then the campaign's default landing page URL is assigned to this field.
     * - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page's URL is assigned to this field.
     * - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field.
     */
    computedClickThroughUrl?: string;

    /**
     * Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset.
     */
    customClickThroughUrl?: string;

    /**
     * Whether the campaign default landing page is used.
     */
    defaultLandingPage?: boolean;

    /**
     * ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false.
     */
    landingPageId?: string;
  }

  declare interface dfareporting$ClickThroughUrlSuffixProperties {
    /**
     * Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long.
     */
    clickThroughUrlSuffix?: string;

    /**
     * Whether this entity should override the inherited click-through URL suffix with its own defined value.
     */
    overrideInheritedSuffix?: boolean;
  }

  declare interface dfareporting$CompanionClickThroughOverride {
    /**
     * Click-through URL of this companion click-through override.
     */
    clickThroughUrl?: dfareporting$ClickThroughUrl;

    /**
     * ID of the creative for this companion click-through override.
     */
    creativeId?: string;
  }

  declare interface dfareporting$CompanionSetting {
    /**
     * Whether companions are disabled for this placement.
     */
    companionsDisabled?: boolean;

    /**
     * Whitelist of companion sizes to be served to this placement. Set this list to null or empty to serve all companion sizes.
     */
    enabledSizes?: dfareporting$Size[];

    /**
     * Whether to serve only static images as companions.
     */
    imageOnly?: boolean;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#companionSetting".
     */
    kind?: string;
  }

  declare interface dfareporting$CompatibleFields {
    /**
     * Contains items that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
     */
    crossDimensionReachReportCompatibleFields?: dfareporting$CrossDimensionReachReportCompatibleFields;

    /**
     * Contains items that are compatible to be selected for a report of type "FLOODLIGHT".
     */
    floodlightReportCompatibleFields?: dfareporting$FloodlightReportCompatibleFields;

    /**
     * The kind of resource this is, in this case dfareporting#compatibleFields.
     */
    kind?: string;

    /**
     * Contains items that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
     */
    pathToConversionReportCompatibleFields?: dfareporting$PathToConversionReportCompatibleFields;

    /**
     * Contains items that are compatible to be selected for a report of type "REACH".
     */
    reachReportCompatibleFields?: dfareporting$ReachReportCompatibleFields;

    /**
     * Contains items that are compatible to be selected for a report of type "STANDARD".
     */
    reportCompatibleFields?: dfareporting$ReportCompatibleFields;
  }

  declare interface dfareporting$ConnectionType {
    /**
     * ID of this connection type.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType".
     */
    kind?: string;

    /**
     * Name of this connection type.
     */
    name?: string;
  }

  declare interface dfareporting$ConnectionTypesListResponse {
    /**
     * Collection of connection types such as broadband and mobile.
     */
    client$connectionTypes?: dfareporting$ConnectionType[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse".
     */
    kind?: string;
  }

  declare interface dfareporting$ContentCategoriesListResponse {
    /**
     * Content category collection.
     */
    client$contentCategories?: dfareporting$ContentCategory[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$ContentCategory {
    /**
     * Account ID of this content category. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * ID of this content category. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory".
     */
    kind?: string;

    /**
     * Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same
     * account.
     */
    name?: string;
  }

  declare interface dfareporting$Conversion {
    /**
     * Whether the conversion was directed toward children.
     */
    childDirectedTreatment?: boolean;

    /**
     * Custom floodlight variables.
     */
    customVariables?: dfareporting$CustomFloodlightVariable[];

    /**
     * The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive with
     * encryptedUserIdCandidates[], mobileDeviceId and gclid. This or encryptedUserIdCandidates[] or mobileDeviceId or gclid is a required field.
     */
    encryptedUserId?: string;

    /**
     * A list of the alphanumeric encrypted user IDs. Any user ID with exposure prior to the conversion timestamp will be used in the inserted conversion. If
     * no such user ID is found then the conversion will be rejected with NO_COOKIE_MATCH_FOUND error. When set, encryptionInfo should also be specified. This
     * field may only be used when calling batchinsert; it is not supported by batchupdate. This field is mutually exclusive with encryptedUserId,
     * mobileDeviceId and gclid. This or encryptedUserId or mobileDeviceId or gclid is a required field.
     */
    encryptedUserIdCandidates?: string[];

    /**
     * Floodlight Activity ID of this conversion. This is a required field.
     */
    floodlightActivityId?: string;

    /**
     * Floodlight Configuration ID of this conversion. This is a required field.
     */
    floodlightConfigurationId?: string;

    /**
     * The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[] and mobileDeviceId. This or encryptedUserId or
     * encryptedUserIdCandidates[] or mobileDeviceId is a required field.
     */
    gclid?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversion".
     */
    kind?: string;

    /**
     * Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting. This will prevent remarketing.
     */
    limitAdTracking?: boolean;

    /**
     * The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[] and gclid. This or encryptedUserId or
     * encryptedUserIdCandidates[] or gclid is a required field.
     */
    mobileDeviceId?: string;

    /**
     * The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated. This is a required field.
     */
    ordinal?: string;

    /**
     * The quantity of the conversion.
     */
    quantity?: string;

    /**
     * The timestamp of conversion, in Unix epoch micros. This is a required field.
     */
    timestampMicros?: string;

    /**
     * The value of the conversion.
     */
    value?: number;
  }

  declare interface dfareporting$ConversionError {
    /**
     * The error code.
     */
    code?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionError".
     */
    kind?: string;

    /**
     * A description of the error.
     */
    message?: string;
  }

  declare interface dfareporting$ConversionStatus {
    /**
     * The original conversion that was inserted or updated.
     */
    conversion?: dfareporting$Conversion;

    /**
     * A list of errors related to this conversion.
     */
    errors?: dfareporting$ConversionError[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionStatus".
     */
    kind?: string;
  }

  declare interface dfareporting$ConversionsBatchInsertRequest {
    /**
     * The set of conversions to insert.
     */
    client$conversions?: dfareporting$Conversion[];

    /**
     * Describes how encryptedUserId or encryptedUserIdCandidates[] is encrypted. This is a required field if encryptedUserId or encryptedUserIdCandidates[]
     * is used.
     */
    encryptionInfo?: dfareporting$EncryptionInfo;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertRequest".
     */
    kind?: string;
  }

  declare interface dfareporting$ConversionsBatchInsertResponse {
    /**
     * Indicates that some or all conversions failed to insert.
     */
    hasFailures?: boolean;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertResponse".
     */
    kind?: string;

    /**
     * The insert status of each conversion. Statuses are returned in the same order that conversions are inserted.
     */
    status?: dfareporting$ConversionStatus[];
  }

  declare interface dfareporting$ConversionsBatchUpdateRequest {
    /**
     * The set of conversions to update.
     */
    client$conversions?: dfareporting$Conversion[];

    /**
     * Describes how encryptedUserId is encrypted. This is a required field if encryptedUserId is used.
     */
    encryptionInfo?: dfareporting$EncryptionInfo;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateRequest".
     */
    kind?: string;
  }

  declare interface dfareporting$ConversionsBatchUpdateResponse {
    /**
     * Indicates that some or all conversions failed to update.
     */
    hasFailures?: boolean;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateResponse".
     */
    kind?: string;

    /**
     * The update status of each conversion. Statuses are returned in the same order that conversions are updated.
     */
    status?: dfareporting$ConversionStatus[];
  }

  declare interface dfareporting$CountriesListResponse {
    /**
     * Country collection.
     */
    client$countries?: dfareporting$Country[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse".
     */
    kind?: string;
  }

  declare interface dfareporting$Country {
    /**
     * Country code.
     */
    countryCode?: string;

    /**
     * DART ID of this country. This is the ID used for targeting and generating reports.
     */
    dartId?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#country".
     */
    kind?: string;

    /**
     * Name of this country.
     */
    name?: string;

    /**
     * Whether ad serving supports secure servers in this country.
     */
    sslEnabled?: boolean;
  }

  declare interface dfareporting$Creative {
    /**
     * Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types.
     */
    accountId?: string;

    /**
     * Whether the creative is active. Applicable to all creative types.
     */
    active?: boolean;

    /**
     * Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID.
     */
    adParameters?: string;

    /**
     * Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your site without having to contact
     * the advertiser. You can use keywords to dynamically change the look or functionality of a creative. Applicable to the following creative types: all
     * RICH_MEDIA, and all VPAID.
     */
    adTagKeys?: string[];

    /**
     * Advertiser ID of this creative. This is a required field. Applicable to all creative types.
     */
    advertiserId?: string;

    /**
     * Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update.
     * Applicable to the following creative types: FLASH_INPAGE.
     */
    allowScriptAccess?: boolean;

    /**
     * Whether the creative is archived. Applicable to all creative types.
     */
    archived?: boolean;

    /**
     * Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
     */
    artworkType?: string;

    /**
     * Source application where creative was authored. Presently, only DBM authored creatives will have this field set. Applicable to all creative types.
     */
    authoringSource?: string;

    /**
     * Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
     */
    authoringTool?: string;

    /**
     * Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY.
     */
    autoAdvanceImages?: boolean;

    /**
     * The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white.
     * Applicable to the following creative types: FLASH_INPAGE.
     */
    backgroundColor?: string;

    /**
     * Click-through URL for backup image. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. Applicable to DISPLAY when the primary
     * asset type is not HTML_IMAGE.
     */
    backupImageClickThroughUrl?: string;

    /**
     * List of feature dependencies that will cause a backup image to be served if the browser that serves the ad does not support them. Feature dependencies
     * are features that a browser must be able to support in order to render your HTML5 creative asset correctly. This field is initially auto-generated to
     * contain all features detected by DCM for all the assets of this creative and can then be modified by the client. To reset this field, copy over all the
     * creativeAssets' detected features. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not
     * HTML_IMAGE.
     */
    backupImageFeatures?: string[];

    /**
     * Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    backupImageReportingLabel?: string;

    /**
     * Target window for backup image. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. Applicable to DISPLAY when the primary asset
     * type is not HTML_IMAGE.
     */
    backupImageTargetWindow?: dfareporting$TargetWindow;

    /**
     * Click tags of the creative. For DISPLAY, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click tags for the assets associated
     * with this creative. After creating a flash asset, detected click tags will be returned in the creativeAssetMetadata. When inserting the creative,
     * populate the creative clickTags field using the creativeAssetMetadata.clickTags field. For DISPLAY_IMAGE_GALLERY creatives, there should be exactly one
     * entry in this list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the clickTag.name field with
     * the creativeAsset.assetIdentifier.name field. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER. Applicable
     * to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    clickTags?: dfareporting$ClickTag[];

    /**
     * Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives.
     */
    commercialId?: string;

    /**
     * List of companion creatives assigned to an in-Stream videocreative. Acceptable values include IDs of existing flash and image creatives. Applicable to
     * the following creative types: all VPAID and all INSTREAM_VIDEO with dynamicAssetSelection set to false.
     */
    companionCreatives?: string[];

    /**
     * Compatibilities associated with this creative. This is a read-only field. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on
     * mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. Only
     * pre-existing creatives may have these compatibilities since new creatives will either be assigned DISPLAY or DISPLAY_INTERSTITIAL instead.
     * IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. Applicable to all creative types.
     *
     * Acceptable values are:
     * - "APP"
     * - "APP_INTERSTITIAL"
     * - "IN_STREAM_VIDEO"
     * - "DISPLAY"
     * - "DISPLAY_INTERSTITIAL"
     */
    compatibility?: string[];

    /**
     * Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to
     * disable it if they don't want the system to generate and use HTML5 asset for this creative. Applicable to the following creative type: FLASH_INPAGE.
     * Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    convertFlashToHtml5?: boolean;

    /**
     * List of counter events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags.
     * Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID.
     */
    counterCustomEvents?: dfareporting$CreativeCustomEvent[];

    /**
     * Required if dynamicAssetSelection is true.
     */
    creativeAssetSelection?: dfareporting$CreativeAssetSelection;

    /**
     * Assets associated with a creative. Applicable to all but the following creative types: INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and REDIRECT
     */
    client$creativeAssets?: dfareporting$CreativeAsset[];

    /**
     * Creative field assignments for this creative. Applicable to all creative types.
     */
    creativeFieldAssignments?: dfareporting$CreativeFieldAssignment[];

    /**
     * Custom key-values for a Rich Media creative. Key-values let you customize the creative settings of a Rich Media ad running on your site without having
     * to contact the advertiser. You can use key-values to dynamically change the look or functionality of a creative. Applicable to the following creative
     * types: all RICH_MEDIA, and all VPAID.
     */
    customKeyValues?: string[];

    /**
     * Set this to true to enable the use of rules to target individual assets in this creative. When set to true creativeAssetSelection must be set. This
     * also controls asset-level companions. When this is true, companion creatives should be assigned to creative assets. Learn more. Applicable to
     * INSTREAM_VIDEO creatives.
     */
    dynamicAssetSelection?: boolean;

    /**
     * List of exit events configured for the creative. For DISPLAY and DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from
     * clickTags, For DISPLAY, an event is also created from the backupImageReportingLabel. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY,
     * all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    exitCustomEvents?: dfareporting$CreativeCustomEvent[];

    /**
     * OpenWindow FSCommand of this creative. This lets the SWF file communicate with either Flash Player or the program hosting Flash Player, such as a web
     * browser. This is only triggered if allowScriptAccess field is true. Applicable to the following creative types: FLASH_INPAGE.
     */
    fsCommand?: dfareporting$FsCommand;

    /**
     * HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true. Applicable to the following
     * creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA.
     */
    htmlCode?: string;

    /**
     * Whether HTML code is DCM-generated or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types:
     * FLASH_INPAGE and HTML5_BANNER.
     */
    htmlCodeLocked?: boolean;

    /**
     * ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types.
     */
    id?: string;

    /**
     * Dimension value for the ID of this creative. This is a read-only field. Applicable to all creative types.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creative".
     */
    kind?: string;

    /**
     * Creative last modification information. This is a read-only field. Applicable to all creative types.
     */
    lastModifiedInfo?: dfareporting$LastModifiedInfo;

    /**
     * Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative
     * types: all RICH_MEDIA, and all VPAID.
     */
    latestTraffickedCreativeId?: string;

    /**
     * Name of the creative. This is a required field and must be less than 256 characters long. Applicable to all creative types.
     */
    name?: string;

    /**
     * Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA.
     */
    overrideCss?: string;

    /**
     * Amount of time to play the video before counting a view. Applicable to the following creative types: all INSTREAM_VIDEO.
     */
    progressOffset?: dfareporting$VideoOffset;

    /**
     * URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for
     * a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable.
     * Applicable to the following creative types: DISPLAY_REDIRECT, INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT
     */
    redirectUrl?: string;

    /**
     * ID of current rendering version. This is a read-only field. Applicable to all creative types.
     */
    renderingId?: string;

    /**
     * Dimension value for the rendering ID of this creative. This is a read-only field. Applicable to all creative types.
     */
    renderingIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative
     * types: all RICH_MEDIA, and all VPAID.
     */
    requiredFlashPluginVersion?: string;

    /**
     * The internal Flash version for this creative as calculated by DoubleClick Studio. This is a read-only field. Applicable to the following creative
     * types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    requiredFlashVersion?: number;

    /**
     * Size associated with this creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. This is
     * a required field when applicable; however for IMAGE, FLASH_INPAGE creatives, and for DISPLAY creatives with a primary asset of type HTML_IMAGE, if left
     * blank, this field will be automatically set using the actual size of the associated image assets. Applicable to the following creative types: DISPLAY,
     * DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA.
     */
    size?: dfareporting$Size;

    /**
     * Amount of time to play the video before the skip button appears. Applicable to the following creative types: all INSTREAM_VIDEO.
     */
    skipOffset?: dfareporting$VideoOffset;

    /**
     * Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.
     */
    skippable?: boolean;

    /**
     * Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types.
     */
    sslCompliant?: boolean;

    /**
     * Whether creative should be treated as SSL compliant even if the system scan shows it's not. Applicable to all creative types.
     */
    sslOverride?: boolean;

    /**
     * Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all
     * RICH_MEDIA, and all VPAID.
     */
    studioAdvertiserId?: string;

    /**
     * Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all
     * RICH_MEDIA, and all VPAID.
     */
    studioCreativeId?: string;

    /**
     * Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types:
     * all RICH_MEDIA, and all VPAID.
     */
    studioTraffickedCreativeId?: string;

    /**
     * Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative
     * types.
     */
    subaccountId?: string;

    /**
     * Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA.
     */
    thirdPartyBackupImageImpressionsUrl?: string;

    /**
     * Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA.
     */
    thirdPartyRichMediaImpressionsUrl?: string;

    /**
     * Third-party URLs for tracking in-stream video creative events. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.
     */
    thirdPartyUrls?: dfareporting$ThirdPartyTrackingUrl[];

    /**
     * List of timer events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags.
     * Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset is not
     * HTML_IMAGE.
     */
    timerCustomEvents?: dfareporting$CreativeCustomEvent[];

    /**
     * Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
     */
    totalFileSize?: string;

    /**
     * Type of this creative. This is a required field. Applicable to all creative types.
     *
     * Note: FLASH_INPAGE, HTML5_BANNER, and IMAGE are only used for existing creatives. New creatives should use DISPLAY as a replacement for these types.
     */
    type?: string;

    /**
     * A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_VIDEO and VPAID.
     */
    universalAdId?: dfareporting$UniversalAdId;

    /**
     * The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during
     * insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the
     * version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich
     * Media creative merging. Applicable to all creative types.
     */
    version?: number;

    /**
     * Description of the video ad. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.
     */
    videoDescription?: string;

    /**
     * Creative video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, all RICH_MEDIA, and all
     * VPAID.
     */
    videoDuration?: number;
  }

  declare interface dfareporting$CreativeAsset {
    /**
     * Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative type: FLASH_INPAGE. Applicable to
     * DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    actionScript3?: boolean;

    /**
     * Whether the video asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to the following creative types:
     * INSTREAM_VIDEO and all VPAID.
     */
    active?: boolean;

    /**
     * Possible alignments for an asset. This is a read-only field. Applicable to the following creative types:
     * RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL.
     */
    alignment?: string;

    /**
     * Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    artworkType?: string;

    /**
     * Identifier of this asset. This is the same identifier returned during creative asset insert operation. This is a required field. Applicable to all but
     * the following creative types: all REDIRECT and TRACKING_TEXT.
     */
    assetIdentifier?: dfareporting$CreativeAssetId;

    /**
     * Exit event configured for the backup image. Applicable to the following creative types: all RICH_MEDIA.
     */
    backupImageExit?: dfareporting$CreativeCustomEvent;

    /**
     * Detected bit-rate for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    bitRate?: number;

    /**
     * Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID.
     */
    childAssetType?: string;

    /**
     * Size of an asset when collapsed. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally,
     * applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN.
     */
    collapsedSize?: dfareporting$Size;

    /**
     * List of companion creatives assigned to an in-stream video creative asset. Acceptable values include IDs of existing flash and image creatives.
     * Applicable to INSTREAM_VIDEO creative type with dynamicAssetSelection set to true.
     */
    companionCreativeIds?: string[];

    /**
     * Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA. Value must be greater than or
     * equal to 0.
     */
    customStartTimeValue?: number;

    /**
     * List of feature dependencies for the creative asset that are detected by DCM. Feature dependencies are features that a browser must be able to support
     * in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. Applicable to the following creative types: HTML5_BANNER.
     * Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    detectedFeatures?: string[];

    /**
     * Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    displayType?: string;

    /**
     * Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must
     * be greater than or equal to 1.
     */
    duration?: number;

    /**
     * Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA.
     */
    durationType?: string;

    /**
     * Detected expanded dimension for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    expandedDimension?: dfareporting$Size;

    /**
     * File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and
     * TRACKING_TEXT.
     */
    fileSize?: string;

    /**
     * Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all RICH_MEDIA, and all VPAID.
     * Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    flashVersion?: number;

    /**
     * Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
     */
    hideFlashObjects?: boolean;

    /**
     * Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
     */
    hideSelectionBoxes?: boolean;

    /**
     * Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    horizontallyLocked?: boolean;

    /**
     * Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all
     * REDIRECT and TRACKING_TEXT.
     */
    id?: string;

    /**
     * Dimension value for the ID of the asset. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Detected MIME type for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    mimeType?: string;

    /**
     * Offset position for an asset in collapsed mode. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID.
     * Additionally, only applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN.
     */
    offset?: dfareporting$OffsetPosition;

    /**
     * Whether the backup asset is original or changed by the user in DCM. Applicable to the following creative types: all RICH_MEDIA.
     */
    originalBackup?: boolean;

    /**
     * Offset position for an asset. Applicable to the following creative types: all RICH_MEDIA.
     */
    position?: dfareporting$OffsetPosition;

    /**
     * Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    positionLeftUnit?: string;

    /**
     * Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative
     * types: all RICH_MEDIA.
     */
    positionTopUnit?: string;

    /**
     * Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    progressiveServingUrl?: string;

    /**
     * Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset
     * offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height.
     */
    pushdown?: boolean;

    /**
     * Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset
     * pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height.
     * Acceptable values are 0 to 9.99, inclusive.
     */
    pushdownDuration?: number;

    /**
     * Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required
     * field.
     * PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE, DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and
     * all VPAID creatives.
     * BACKUP_IMAGE applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary asset type is not
     * HTML_IMAGE.
     * ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives.
     * OTHER refers to assets from sources other than DCM, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives.
     * PARENT_VIDEO refers to videos uploaded by the user in DCM and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives.
     * TRANSCODED_VIDEO refers to videos transcoded by DCM from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives.
     * ALTERNATE_VIDEO refers to the DCM representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives. These cannot be
     * added or removed within DCM.
     * For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID
     * creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative.
     */
    role?: string;

    /**
     * Size associated with this creative asset. This is a required field when applicable; however for IMAGE and FLASH_INPAGE, creatives if left blank, this
     * field will be automatically set using the actual size of the associated image asset. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY,
     * FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    size?: dfareporting$Size;

    /**
     * Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
     */
    sslCompliant?: boolean;

    /**
     * Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA.
     */
    startTimeType?: string;

    /**
     * Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    streamingServingUrl?: string;

    /**
     * Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets.
     */
    transparency?: boolean;

    /**
     * Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    verticallyLocked?: boolean;

    /**
     * Detected video duration for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    videoDuration?: number;

    /**
     * Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND,
     * RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING.
     */
    windowMode?: string;

    /**
     * zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT
     * one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY. Acceptable values are -999999999 to 999999999, inclusive.
     */
    zIndex?: number;

    /**
     * File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
     */
    zipFilename?: string;

    /**
     * Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
     */
    zipFilesize?: string;
  }

  declare interface dfareporting$CreativeAssetId {
    /**
     * Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded
     * asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed.
     */
    name?: string;

    /**
     * Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE.
     */
    type?: string;
  }

  declare interface dfareporting$CreativeAssetMetadata {
    /**
     * ID of the creative asset. This is a required field.
     */
    assetIdentifier?: dfareporting$CreativeAssetId;

    /**
     * List of detected click tags for assets. This is a read-only auto-generated field.
     */
    clickTags?: dfareporting$ClickTag[];

    /**
     * List of feature dependencies for the creative asset that are detected by DCM. Feature dependencies are features that a browser must be able to support
     * in order to render your HTML5 creative correctly. This is a read-only, auto-generated field.
     */
    detectedFeatures?: string[];

    /**
     * Numeric ID of the asset. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Dimension value for the numeric ID of the asset. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata".
     */
    kind?: string;

    /**
     * Rules validated during code generation that generated a warning. This is a read-only, auto-generated field.
     *
     * Possible values are:
     * - "ADMOB_REFERENCED"
     * - "ASSET_FORMAT_UNSUPPORTED_DCM"
     * - "ASSET_INVALID"
     * - "CLICK_TAG_HARD_CODED"
     * - "CLICK_TAG_INVALID"
     * - "CLICK_TAG_IN_GWD"
     * - "CLICK_TAG_MISSING"
     * - "CLICK_TAG_MORE_THAN_ONE"
     * - "CLICK_TAG_NON_TOP_LEVEL"
     * - "COMPONENT_UNSUPPORTED_DCM"
     * - "ENABLER_UNSUPPORTED_METHOD_DCM"
     * - "EXTERNAL_FILE_REFERENCED"
     * - "FILE_DETAIL_EMPTY"
     * - "FILE_TYPE_INVALID"
     * - "GWD_PROPERTIES_INVALID"
     * - "HTML5_FEATURE_UNSUPPORTED"
     * - "LINKED_FILE_NOT_FOUND"
     * - "MAX_FLASH_VERSION_11"
     * - "MRAID_REFERENCED"
     * - "NOT_SSL_COMPLIANT"
     * - "ORPHANED_ASSET"
     * - "PRIMARY_HTML_MISSING"
     * - "SVG_INVALID"
     * - "ZIP_INVALID"
     */
    warnedValidationRules?: string[];
  }

  declare interface dfareporting$CreativeAssetSelection {
    /**
     * A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the rules match. This is a
     * required field.
     */
    defaultAssetId?: string;

    /**
     * Rules determine which asset will be served to a viewer. Rules will be evaluated in the order in which they are stored in this list. This list must
     * contain at least one rule. Applicable to INSTREAM_VIDEO creatives.
     */
    rules?: dfareporting$Rule[];
  }

  declare interface dfareporting$CreativeAssignment {
    /**
     * Whether this creative assignment is active. When true, the creative will be included in the ad's rotation.
     */
    active?: boolean;

    /**
     * Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will
     * default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO.
     */
    applyEventTags?: boolean;

    /**
     * Click-through URL of the creative assignment.
     */
    clickThroughUrl?: dfareporting$ClickThroughUrl;

    /**
     * Companion creative overrides for this creative assignment. Applicable to video ads.
     */
    companionCreativeOverrides?: dfareporting$CompanionClickThroughOverride[];

    /**
     * Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments.
     */
    creativeGroupAssignments?: dfareporting$CreativeGroupAssignment[];

    /**
     * ID of the creative to be assigned. This is a required field.
     */
    creativeId?: string;

    /**
     * Dimension value for the ID of the creative. This is a read-only, auto-generated field.
     */
    creativeIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Date and time that the assigned creative should stop serving. Must be later than the start time.
     */
    endTime?: string;

    /**
     * Rich media exit overrides for this creative assignment.
     * Applicable when the creative type is any of the following:
     * - DISPLAY
     * - RICH_MEDIA_INPAGE
     * - RICH_MEDIA_INPAGE_FLOATING
     * - RICH_MEDIA_IM_EXPAND
     * - RICH_MEDIA_EXPANDING
     * - RICH_MEDIA_INTERSTITIAL_FLOAT
     * - RICH_MEDIA_MOBILE_IN_APP
     * - RICH_MEDIA_MULTI_FLOATING
     * - RICH_MEDIA_PEEL_DOWN
     * - VPAID_LINEAR
     * - VPAID_NON_LINEAR
     */
    richMediaExitOverrides?: dfareporting$RichMediaExitOverride[];

    /**
     * Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535,
     * inclusive.
     */
    sequence?: number;

    /**
     * Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslCompliant?: boolean;

    /**
     * Date and time that the assigned creative should start serving.
     */
    startTime?: string;

    /**
     * Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1.
     */
    weight?: number;
  }

  declare interface dfareporting$CreativeCustomEvent {
    /**
     * Unique ID of this event used by DDM Reporting and Data Transfer. This is a read-only field.
     */
    advertiserCustomEventId?: string;

    /**
     * User-entered name for the event.
     */
    advertiserCustomEventName?: string;

    /**
     * Type of the event. This is a read-only field.
     */
    advertiserCustomEventType?: string;

    /**
     * Artwork label column, used to link events in DCM back to events in Studio. This is a required field and should not be modified after insertion.
     */
    artworkLabel?: string;

    /**
     * Artwork type used by the creative.This is a read-only field.
     */
    artworkType?: string;

    /**
     * Exit URL of the event. This field is used only for exit events.
     */
    exitUrl?: string;

    /**
     * ID of this event. This is a required field and should not be modified after insertion.
     */
    id?: string;

    /**
     * Properties for rich media popup windows. This field is used only for exit events.
     */
    popupWindowProperties?: dfareporting$PopupWindowProperties;

    /**
     * Target type used by the event.
     */
    targetType?: string;

    /**
     * Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field.
     */
    videoReportingId?: string;
  }

  declare interface dfareporting$CreativeField {
    /**
     * Account ID of this creative field. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Advertiser ID of this creative field. This is a required field on insertion.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * ID of this creative field. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField".
     */
    kind?: string;

    /**
     * Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same
     * advertiser.
     */
    name?: string;

    /**
     * Subaccount ID of this creative field. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
  }

  declare interface dfareporting$CreativeFieldAssignment {
    /**
     * ID of the creative field.
     */
    creativeFieldId?: string;

    /**
     * ID of the creative field value.
     */
    creativeFieldValueId?: string;
  }

  declare interface dfareporting$CreativeFieldValue {
    /**
     * ID of this creative field value. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue".
     */
    kind?: string;

    /**
     * Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field.
     */
    value?: string;
  }

  declare interface dfareporting$CreativeFieldValuesListResponse {
    /**
     * Creative field value collection.
     */
    client$creativeFieldValues?: dfareporting$CreativeFieldValue[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$CreativeFieldsListResponse {
    /**
     * Creative field collection.
     */
    client$creativeFields?: dfareporting$CreativeField[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$CreativeGroup {
    /**
     * Account ID of this creative group. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Advertiser ID of this creative group. This is a required field on insertion.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on
     * insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive.
     */
    groupNumber?: number;

    /**
     * ID of this creative group. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup".
     */
    kind?: string;

    /**
     * Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same
     * advertiser.
     */
    name?: string;

    /**
     * Subaccount ID of this creative group. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
  }

  declare interface dfareporting$CreativeGroupAssignment {
    /**
     * ID of the creative group to be assigned.
     */
    creativeGroupId?: string;

    /**
     * Creative group number of the creative group assignment.
     */
    creativeGroupNumber?: string;
  }

  declare interface dfareporting$CreativeGroupsListResponse {
    /**
     * Creative group collection.
     */
    client$creativeGroups?: dfareporting$CreativeGroup[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$CreativeOptimizationConfiguration {
    /**
     * ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns.
     */
    id?: string;

    /**
     * Name of this creative optimization config. This is a required field and must be less than 129 characters long.
     */
    name?: string;

    /**
     * List of optimization activities associated with this configuration.
     */
    optimizationActivitys?: dfareporting$OptimizationActivity[];

    /**
     * Optimization model for this configuration.
     */
    optimizationModel?: string;
  }

  declare interface dfareporting$CreativeRotation {
    /**
     * Creative assignments in this creative rotation.
     */
    creativeAssignments?: dfareporting$CreativeAssignment[];

    /**
     * Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad's campaign.
     * If it is unset or set to 0, then the campaign's default optimization configuration will be used for this ad.
     */
    creativeOptimizationConfigurationId?: string;

    /**
     * Type of creative rotation. Can be used to specify whether to use sequential or random rotation.
     */
    type?: string;

    /**
     * Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM.
     */
    weightCalculationStrategy?: string;
  }

  declare interface dfareporting$CreativeSettings {
    /**
     * Header text for iFrames for this site. Must be less than or equal to 2000 characters long.
     */
    iFrameFooter?: string;

    /**
     * Header text for iFrames for this site. Must be less than or equal to 2000 characters long.
     */
    iFrameHeader?: string;
  }

  declare interface dfareporting$CreativesListResponse {
    /**
     * Creative collection.
     */
    client$creatives?: dfareporting$Creative[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$CrossDimensionReachReportCompatibleFields {
    /**
     * Dimensions which are compatible to be selected in the "breakdown" section of the report.
     */
    breakdown?: dfareporting$Dimension[];

    /**
     * Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
     */
    dimensionFilters?: dfareporting$Dimension[];

    /**
     * The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields.
     */
    kind?: string;

    /**
     * Metrics which are compatible to be selected in the "metricNames" section of the report.
     */
    metrics?: dfareporting$Metric[];

    /**
     * Metrics which are compatible to be selected in the "overlapMetricNames" section of the report.
     */
    overlapMetrics?: dfareporting$Metric[];
  }

  declare interface dfareporting$CustomFloodlightVariable {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customFloodlightVariable".
     */
    kind?: string;

    /**
     * The type of custom floodlight variable to supply a value for. These map to the "u[1-20]=" in the tags.
     */
    type?: string;

    /**
     * The value of the custom floodlight variable. The length of string must not exceed 50 characters.
     */
    value?: string;
  }

  declare interface dfareporting$CustomRichMediaEvents {
    /**
     * List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.
     */
    filteredEventIds?: dfareporting$DimensionValue[];

    /**
     * The kind of resource this is, in this case dfareporting#customRichMediaEvents.
     */
    kind?: string;
  }

  declare interface dfareporting$DateRange {
    /**
     * The end date of the date range, inclusive. A string of the format: "yyyy-MM-dd".
     */
    endDate?: string;

    /**
     * The kind of resource this is, in this case dfareporting#dateRange.
     */
    kind?: string;

    /**
     * The date range relative to the date of when the report is run.
     */
    relativeDateRange?: string;

    /**
     * The start date of the date range, inclusive. A string of the format: "yyyy-MM-dd".
     */
    startDate?: string;
  }

  declare interface dfareporting$DayPartTargeting {
    /**
     * Days of the week when the ad will serve.
     *
     * Acceptable values are:
     * - "SUNDAY"
     * - "MONDAY"
     * - "TUESDAY"
     * - "WEDNESDAY"
     * - "THURSDAY"
     * - "FRIDAY"
     * - "SATURDAY"
     */
    daysOfWeek?: string[];

    /**
     * Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with days of week, in which case the
     * ad would serve during these hours on the specified days. For example if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm
     * (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive.
     */
    hoursOfDay?: number[];

    /**
     * Whether or not to use the user's local time. If false, the America/New York time zone applies.
     */
    userLocalTime?: boolean;
  }

  declare interface dfareporting$DefaultClickThroughEventTagProperties {
    /**
     * ID of the click-through event tag to apply to all ads in this entity's scope.
     */
    defaultClickThroughEventTagId?: string;

    /**
     * Whether this entity should override the inherited default click-through event tag with its own defined value.
     */
    overrideInheritedEventTag?: boolean;
  }

  declare interface dfareporting$DeliverySchedule {
    /**
     * Limit on the number of times an individual user can be served the ad within a specified period of time.
     */
    frequencyCap?: dfareporting$FrequencyCap;

    /**
     * Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it
     * has reached its delivery goals.
     */
    hardCutoff?: boolean;

    /**
     * Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of
     * 1 and ad B has an impression ratio of 3, then DCM will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive.
     */
    impressionRatio?: string;

    /**
     * Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served.
     */
    priority?: string;
  }

  declare interface dfareporting$DfpSettings {
    /**
     * DFP network code for this directory site.
     */
    dfpNetworkCode?: string;

    /**
     * DFP network name for this directory site.
     */
    dfpNetworkName?: string;

    /**
     * Whether this directory site accepts programmatic placements.
     */
    programmaticPlacementAccepted?: boolean;

    /**
     * Whether this directory site accepts publisher-paid tags.
     */
    pubPaidPlacementAccepted?: boolean;

    /**
     * Whether this directory site is available only via DoubleClick Publisher Portal.
     */
    publisherPortalOnly?: boolean;
  }

  declare interface dfareporting$Dimension {
    /**
     * The kind of resource this is, in this case dfareporting#dimension.
     */
    kind?: string;

    /**
     * The dimension name, e.g. dfa:advertiser
     */
    name?: string;
  }

  declare interface dfareporting$DimensionFilter {
    /**
     * The name of the dimension to filter.
     */
    dimensionName?: string;

    /**
     * The kind of resource this is, in this case dfareporting#dimensionFilter.
     */
    kind?: string;

    /**
     * The value of the dimension to filter.
     */
    value?: string;
  }

  declare interface dfareporting$DimensionValue {
    /**
     * The name of the dimension.
     */
    dimensionName?: string;

    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The ID associated with the value if available.
     */
    id?: string;

    /**
     * The kind of resource this is, in this case dfareporting#dimensionValue.
     */
    kind?: string;

    /**
     * Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '&#42;' is allowed as a
     * placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch&#42;')
     * allow a matchType other than EXACT.
     */
    matchType?: string;

    /**
     * The value of the dimension.
     */
    value?: string;
  }

  declare interface dfareporting$DimensionValueList {
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The dimension values returned in this response.
     */
    items?: dfareporting$DimensionValue[];

    /**
     * The kind of list this is, in this case dfareporting#dimensionValueList.
     */
    kind?: string;

    /**
     * Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this
     * field. The page token is only valid for a limited amount of time and should not be persisted.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$DimensionValueRequest {
    /**
     * The name of the dimension for which values should be requested.
     */
    dimensionName?: string;

    /**
     * The end date of the date range for which to retrieve dimension values. A string of the format "yyyy-MM-dd".
     */
    endDate?: string;

    /**
     * The list of filters by which to filter values. The filters are ANDed.
     */
    filters?: dfareporting$DimensionFilter[];

    /**
     * The kind of request this is, in this case dfareporting#dimensionValueRequest.
     */
    kind?: string;

    /**
     * The start date of the date range for which to retrieve dimension values. A string of the format "yyyy-MM-dd".
     */
    startDate?: string;
  }

  declare interface dfareporting$DirectorySite {
    /**
     * Whether this directory site is active.
     */
    active?: boolean;

    /**
     * Directory site contacts.
     */
    contactAssignments?: dfareporting$DirectorySiteContactAssignment[];

    /**
     * Country ID of this directory site. This is a read-only field.
     */
    countryId?: string;

    /**
     * Currency ID of this directory site. This is a read-only field.
     * Possible values are:
     * - "1" for USD
     * - "2" for GBP
     * - "3" for ESP
     * - "4" for SEK
     * - "5" for CAD
     * - "6" for JPY
     * - "7" for DEM
     * - "8" for AUD
     * - "9" for FRF
     * - "10" for ITL
     * - "11" for DKK
     * - "12" for NOK
     * - "13" for FIM
     * - "14" for ZAR
     * - "15" for IEP
     * - "16" for NLG
     * - "17" for EUR
     * - "18" for KRW
     * - "19" for TWD
     * - "20" for SGD
     * - "21" for CNY
     * - "22" for HKD
     * - "23" for NZD
     * - "24" for MYR
     * - "25" for BRL
     * - "26" for PTE
     * - "27" for MXP
     * - "28" for CLP
     * - "29" for TRY
     * - "30" for ARS
     * - "31" for PEN
     * - "32" for ILS
     * - "33" for CHF
     * - "34" for VEF
     * - "35" for COP
     * - "36" for GTQ
     * - "37" for PLN
     * - "39" for INR
     * - "40" for THB
     * - "41" for IDR
     * - "42" for CZK
     * - "43" for RON
     * - "44" for HUF
     * - "45" for RUB
     * - "46" for AED
     * - "47" for BGN
     * - "48" for HRK
     * - "49" for MXN
     */
    currencyId?: string;

    /**
     * Description of this directory site. This is a read-only field.
     */
    description?: string;

    /**
     * ID of this directory site. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Dimension value for the ID of this directory site. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Tag types for regular placements.
     *
     * Acceptable values are:
     * - "STANDARD"
     * - "IFRAME_JAVASCRIPT_INPAGE"
     * - "INTERNAL_REDIRECT_INPAGE"
     * - "JAVASCRIPT_INPAGE"
     */
    inpageTagFormats?: string[];

    /**
     * Tag types for interstitial placements.
     *
     * Acceptable values are:
     * - "IFRAME_JAVASCRIPT_INTERSTITIAL"
     * - "INTERNAL_REDIRECT_INTERSTITIAL"
     * - "JAVASCRIPT_INTERSTITIAL"
     */
    interstitialTagFormats?: string[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite".
     */
    kind?: string;

    /**
     * Name of this directory site.
     */
    name?: string;

    /**
     * Parent directory site ID.
     */
    parentId?: string;

    /**
     * Directory site settings.
     */
    settings?: dfareporting$DirectorySiteSettings;

    /**
     * URL of this directory site.
     */
    url?: string;
  }

  declare interface dfareporting$DirectorySiteContact {
    /**
     * Address of this directory site contact.
     */
    address?: string;

    /**
     * Email address of this directory site contact.
     */
    email?: string;

    /**
     * First name of this directory site contact.
     */
    firstName?: string;

    /**
     * ID of this directory site contact. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySiteContact".
     */
    kind?: string;

    /**
     * Last name of this directory site contact.
     */
    lastName?: string;

    /**
     * Phone number of this directory site contact.
     */
    phone?: string;

    /**
     * Directory site contact role.
     */
    role?: string;

    /**
     * Title or designation of this directory site contact.
     */
    title?: string;

    /**
     * Directory site contact type.
     */
    type?: string;
  }

  declare interface dfareporting$DirectorySiteContactAssignment {
    /**
     * ID of this directory site contact. This is a read-only, auto-generated field.
     */
    contactId?: string;

    /**
     * Visibility of this directory site contact assignment. When set to PUBLIC this contact assignment is visible to all account and agency users; when set
     * to PRIVATE it is visible only to the site.
     */
    visibility?: string;
  }

  declare interface dfareporting$DirectorySiteContactsListResponse {
    /**
     * Directory site contact collection
     */
    client$directorySiteContacts?: dfareporting$DirectorySiteContact[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySiteContactsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$DirectorySiteSettings {
    /**
     * Whether this directory site has disabled active view creatives.
     */
    activeViewOptOut?: boolean;

    /**
     * Directory site DFP settings.
     */
    dfpSettings?: dfareporting$DfpSettings;

    /**
     * Whether this site accepts in-stream video ads.
     */
    instreamVideoPlacementAccepted?: boolean;

    /**
     * Whether this site accepts interstitial ads.
     */
    interstitialPlacementAccepted?: boolean;

    /**
     * Whether this directory site has disabled Nielsen OCR reach ratings.
     */
    nielsenOcrOptOut?: boolean;

    /**
     * Whether this directory site has disabled generation of Verification ins tags.
     */
    verificationTagOptOut?: boolean;

    /**
     * Whether this directory site has disabled active view for in-stream video creatives. This is a read-only field.
     */
    videoActiveViewOptOut?: boolean;
  }

  declare interface dfareporting$DirectorySitesListResponse {
    /**
     * Directory site collection.
     */
    client$directorySites?: dfareporting$DirectorySite[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySitesListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$DynamicTargetingKey {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKey".
     */
    kind?: string;

    /**
     * Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are
     * converted to lowercase.
     */
    name?: string;

    /**
     * ID of the object of this dynamic targeting key. This is a required field.
     */
    objectId?: string;

    /**
     * Type of the object of this dynamic targeting key. This is a required field.
     */
    objectType?: string;
  }

  declare interface dfareporting$DynamicTargetingKeysListResponse {
    /**
     * Dynamic targeting key collection.
     */
    client$dynamicTargetingKeys?: dfareporting$DynamicTargetingKey[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKeysListResponse".
     */
    kind?: string;
  }

  declare interface dfareporting$EncryptionInfo {
    /**
     * The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer.
     */
    encryptionEntityId?: string;

    /**
     * The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer.
     */
    encryptionEntityType?: string;

    /**
     * Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer.
     */
    encryptionSource?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#encryptionInfo".
     */
    kind?: string;
  }

  declare interface dfareporting$EventTag {
    /**
     * Account ID of this event tag. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Advertiser ID of this event tag. This field or the campaignId field is required on insertion.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Campaign ID of this event tag. This field or the advertiserId field is required on insertion.
     */
    campaignId?: string;

    /**
     * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
     */
    campaignIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads.
     */
    enabledByDefault?: boolean;

    /**
     * Whether to remove this event tag from ads that are trafficked through DoubleClick Bid Manager to Ad Exchange. This may be useful if the event tag uses
     * a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network.
     */
    excludeFromAdxRequests?: boolean;

    /**
     * ID of this event tag. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag".
     */
    kind?: string;

    /**
     * Name of this event tag. This is a required field and must be less than 256 characters long.
     */
    name?: string;

    /**
     * Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites.
     */
    siteFilterType?: string;

    /**
     * Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a whitelist or blacklist filter.
     */
    siteIds?: string[];

    /**
     * Whether this tag is SSL-compliant or not. This is a read-only field.
     */
    sslCompliant?: boolean;

    /**
     * Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field.
     */
    status?: string;

    /**
     * Subaccount ID of this event tag. This is a read-only field that can be left blank.
     */
    subaccountId?: string;

    /**
     * Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either
     * impression or click tracking. This is a required field.
     */
    type?: string;

    /**
     * Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required
     * on insertion.
     */
    url?: string;

    /**
     * Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through
     * event tags as specified by the event tag type.
     */
    urlEscapeLevels?: number;
  }

  declare interface dfareporting$EventTagOverride {
    /**
     * Whether this override is enabled.
     */
    enabled?: boolean;

    /**
     * ID of this event tag override. This is a read-only, auto-generated field.
     */
    id?: string;
  }

  declare interface dfareporting$EventTagsListResponse {
    /**
     * Event tag collection.
     */
    client$eventTags?: dfareporting$EventTag[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse".
     */
    kind?: string;
  }

  declare interface dfareporting$File {
    /**
     * The date range for which the file has report data. The date range will always be the absolute date range for which the report is run.
     */
    dateRange?: dfareporting$DateRange;

    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The filename of the file.
     */
    fileName?: string;

    /**
     * The output format of the report. Only available once the file is available.
     */
    format?: string;

    /**
     * The unique ID of this report file.
     */
    id?: string;

    /**
     * The kind of resource this is, in this case dfareporting#file.
     */
    kind?: string;

    /**
     * The timestamp in milliseconds since epoch when this file was last modified.
     */
    lastModifiedTime?: string;

    /**
     * The ID of the report this file was generated from.
     */
    reportId?: string;

    /**
     * The status of the report file.
     */
    status?: string;

    /**
     * The URLs where the completed report file can be downloaded.
     */
    urls?: {
      /**
       * The URL for downloading the report data through the API.
       */
      apiUrl?: string,

      /**
       * The URL for downloading the report data through a browser.
       */
      browserUrl?: string
    };
  }

  declare interface dfareporting$FileList {
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The files returned in this response.
     */
    items?: dfareporting$File[];

    /**
     * The kind of list this is, in this case dfareporting#fileList.
     */
    kind?: string;

    /**
     * Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The
     * page token is only valid for a limited amount of time and should not be persisted.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$Flight {
    /**
     * Inventory item flight end date.
     */
    endDate?: string;

    /**
     * Rate or cost of this flight.
     */
    rateOrCost?: string;

    /**
     * Inventory item flight start date.
     */
    startDate?: string;

    /**
     * Units of this flight.
     */
    units?: string;
  }

  declare interface dfareporting$FloodlightActivitiesGenerateTagResponse {
    /**
     * Generated tag for this floodlight activity.
     */
    floodlightActivityTag?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesGenerateTagResponse".
     */
    kind?: string;
  }

  declare interface dfareporting$FloodlightActivitiesListResponse {
    /**
     * Floodlight activity collection.
     */
    client$floodlightActivities?: dfareporting$FloodlightActivity[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$FloodlightActivity {
    /**
     * Account ID of this floodlight activity. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's advertiser or
     * the existing activity's advertiser.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and countingMethod is
     * STANDARD_COUNTING or UNIQUE_COUNTING.
     */
    cacheBustingType?: string;

    /**
     * Counting method for conversions for this floodlight activity. This is a required field.
     */
    countingMethod?: string;

    /**
     * Dynamic floodlight tags.
     */
    defaultTags?: dfareporting$FloodlightActivityDynamicTag[];

    /**
     * URL where this tag will be deployed. If specified, must be less than 256 characters long.
     */
    expectedUrl?: string;

    /**
     * Floodlight activity group ID of this floodlight activity. This is a required field.
     */
    floodlightActivityGroupId?: string;

    /**
     * Name of the associated floodlight activity group. This is a read-only field.
     */
    floodlightActivityGroupName?: string;

    /**
     * Tag string of the associated floodlight activity group. This is a read-only field.
     */
    floodlightActivityGroupTagString?: string;

    /**
     * Type of the associated floodlight activity group. This is a read-only field.
     */
    floodlightActivityGroupType?: string;

    /**
     * Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's
     * floodlight configuration or from the existing activity's floodlight configuration.
     */
    floodlightConfigurationId?: string;

    /**
     * Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
     */
    floodlightConfigurationIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Whether this activity is archived.
     */
    hidden?: boolean;

    /**
     * ID of this floodlight activity. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Dimension value for the ID of this floodlight activity. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Whether the image tag is enabled for this activity.
     */
    imageTagEnabled?: boolean;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivity".
     */
    kind?: string;

    /**
     * Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes.
     */
    name?: string;

    /**
     * General notes or implementation instructions for the tag.
     */
    notes?: string;

    /**
     * Publisher dynamic floodlight tags.
     */
    publisherTags?: dfareporting$FloodlightActivityPublisherDynamicTag[];

    /**
     * Whether this tag should use SSL.
     */
    secure?: boolean;

    /**
     * Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the floodlight tags.
     */
    sslCompliant?: boolean;

    /**
     * Whether this floodlight activity must be SSL-compliant.
     */
    sslRequired?: boolean;

    /**
     * Subaccount ID of this floodlight activity. This is a read-only field that can be left blank.
     */
    subaccountId?: string;

    /**
     * Tag format type for the floodlight activity. If left blank, the tag format will default to HTML.
     */
    tagFormat?: string;

    /**
     * Value of the cat= parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will
     * be generated for you. This string must be 1 to 8 characters long, with valid characters being [a-z][A-Z][0-9][-][ _ ]. This tag string must also be
     * unique among activities of the same activity group. This field is read-only after insertion.
     */
    tagString?: string;

    /**
     * List of the user-defined variables used by this conversion tag. These map to the "u[1-100]=" in the tags. Each of these can have a user defined type.
     * Acceptable values are U1 to U100, inclusive.
     */
    userDefinedVariableTypes?: string[];
  }

  declare interface dfareporting$FloodlightActivityDynamicTag {
    /**
     * ID of this dynamic tag. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Name of this tag.
     */
    name?: string;

    /**
     * Tag code.
     */
    tag?: string;
  }

  declare interface dfareporting$FloodlightActivityGroup {
    /**
     * Account ID of this floodlight activity group. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration's
     * advertiser or from the existing activity group's advertiser.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Floodlight configuration ID of this floodlight activity group. This is a required field.
     */
    floodlightConfigurationId?: string;

    /**
     * Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
     */
    floodlightConfigurationIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * ID of this floodlight activity group. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Dimension value for the ID of this floodlight activity group. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup".
     */
    kind?: string;

    /**
     * Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes.
     */
    name?: string;

    /**
     * Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank.
     */
    subaccountId?: string;

    /**
     * Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is
     * optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being
     * [a-z][A-Z][0-9][-][ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after
     * insertion.
     */
    tagString?: string;

    /**
     * Type of the floodlight activity group. This is a required field that is read-only after insertion.
     */
    type?: string;
  }

  declare interface dfareporting$FloodlightActivityGroupsListResponse {
    /**
     * Floodlight activity group collection.
     */
    client$floodlightActivityGroups?: dfareporting$FloodlightActivityGroup[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$FloodlightActivityPublisherDynamicTag {
    /**
     * Whether this tag is applicable only for click-throughs.
     */
    clickThrough?: boolean;

    /**
     * Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is
     * retrieved, only the siteId field will be populated.
     */
    directorySiteId?: string;

    /**
     * Dynamic floodlight tag.
     */
    dynamicTag?: dfareporting$FloodlightActivityDynamicTag;

    /**
     * Site ID of this dynamic tag.
     */
    siteId?: string;

    /**
     * Dimension value for the ID of the site. This is a read-only, auto-generated field.
     */
    siteIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Whether this tag is applicable only for view-throughs.
     */
    viewThrough?: boolean;
  }

  declare interface dfareporting$FloodlightConfiguration {
    /**
     * Account ID of this floodlight configuration. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Advertiser ID of the parent advertiser of this floodlight configuration.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Whether advertiser data is shared with Google Analytics.
     */
    analyticsDataSharingEnabled?: boolean;

    /**
     * Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen
     * by a user before converting.
     */
    exposureToConversionEnabled?: boolean;

    /**
     * Day that will be counted as the first day of the week in reports. This is a required field.
     */
    firstDayOfWeek?: string;

    /**
     * ID of this floodlight configuration. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Dimension value for the ID of this floodlight configuration. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Whether in-app attribution tracking is enabled.
     */
    inAppAttributionTrackingEnabled?: boolean;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration".
     */
    kind?: string;

    /**
     * Lookback window settings for this floodlight configuration.
     */
    lookbackConfiguration?: dfareporting$LookbackConfiguration;

    /**
     * Types of attribution options for natural search conversions.
     */
    naturalSearchConversionAttributionOption?: string;

    /**
     * Settings for DCM Omniture integration.
     */
    omnitureSettings?: dfareporting$OmnitureSettings;

    /**
     * Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank.
     */
    subaccountId?: string;

    /**
     * Configuration settings for dynamic and image floodlight tags.
     */
    tagSettings?: dfareporting$TagSettings;

    /**
     * List of third-party authentication tokens enabled for this configuration.
     */
    thirdPartyAuthenticationTokens?: dfareporting$ThirdPartyAuthenticationToken[];

    /**
     * List of user defined variables enabled for this configuration.
     */
    userDefinedVariableConfigurations?: dfareporting$UserDefinedVariableConfiguration[];
  }

  declare interface dfareporting$FloodlightConfigurationsListResponse {
    /**
     * Floodlight configuration collection.
     */
    client$floodlightConfigurations?: dfareporting$FloodlightConfiguration[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse".
     */
    kind?: string;
  }

  declare interface dfareporting$FloodlightReportCompatibleFields {
    /**
     * Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
     */
    dimensionFilters?: dfareporting$Dimension[];

    /**
     * Dimensions which are compatible to be selected in the "dimensions" section of the report.
     */
    dimensions?: dfareporting$Dimension[];

    /**
     * The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields.
     */
    kind?: string;

    /**
     * Metrics which are compatible to be selected in the "metricNames" section of the report.
     */
    metrics?: dfareporting$Metric[];
  }

  declare interface dfareporting$FrequencyCap {
    /**
     * Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive.
     */
    duration?: string;

    /**
     * Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive.
     */
    impressions?: string;
  }

  declare interface dfareporting$FsCommand {
    /**
     * Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
     */
    left?: number;

    /**
     * Position in the browser where the window will open.
     */
    positionOption?: string;

    /**
     * Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
     */
    top?: number;

    /**
     * Height of the window.
     */
    windowHeight?: number;

    /**
     * Width of the window.
     */
    windowWidth?: number;
  }

  declare interface dfareporting$GeoTargeting {
    /**
     * Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If
     * targeting a city, do not target or exclude the country of the city, and do not target the metro or region of the city.
     */
    client$cities?: dfareporting$City[];

    /**
     * Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each country only dartId is required.
     * The other fields are populated automatically when the ad is inserted or updated. If targeting or excluding a country, do not target regions, cities,
     * metros, or postal codes in the same country.
     */
    client$countries?: dfareporting$Country[];

    /**
     * Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted
     * by the ad.
     */
    excludeCountries?: boolean;

    /**
     * Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad is inserted or updated. If
     * targeting a metro, do not target or exclude the country of the metro.
     */
    client$metros?: dfareporting$Metro[];

    /**
     * Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when the ad is inserted or updated.
     * If targeting a postal code, do not target or exclude the country of the postal code.
     */
    client$postalCodes?: dfareporting$PostalCode[];

    /**
     * Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If
     * targeting a region, do not target or exclude the country of the region.
     */
    client$regions?: dfareporting$Region[];
  }

  declare interface dfareporting$InventoryItem {
    /**
     * Account ID of this inventory item.
     */
    accountId?: string;

    /**
     * Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad slot. If this inventory item
     * represents a placement group, there will be more than one ad slot, each representing one child placement in that placement group.
     */
    adSlots?: dfareporting$AdSlot[];

    /**
     * Advertiser ID of this inventory item.
     */
    advertiserId?: string;

    /**
     * Content category ID of this inventory item.
     */
    contentCategoryId?: string;

    /**
     * Estimated click-through rate of this inventory item.
     */
    estimatedClickThroughRate?: string;

    /**
     * Estimated conversion rate of this inventory item.
     */
    estimatedConversionRate?: string;

    /**
     * ID of this inventory item.
     */
    id?: string;

    /**
     * Whether this inventory item is in plan.
     */
    inPlan?: boolean;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItem".
     */
    kind?: string;

    /**
     * Information about the most recent modification of this inventory item.
     */
    lastModifiedInfo?: dfareporting$LastModifiedInfo;

    /**
     * Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can
     * differ from the name of any of its ad slots.
     */
    name?: string;

    /**
     * Negotiation channel ID of this inventory item.
     */
    negotiationChannelId?: string;

    /**
     * Order ID of this inventory item.
     */
    orderId?: string;

    /**
     * Placement strategy ID of this inventory item.
     */
    placementStrategyId?: string;

    /**
     * Pricing of this inventory item.
     */
    pricing?: dfareporting$Pricing;

    /**
     * Project ID of this inventory item.
     */
    projectId?: string;

    /**
     * RFP ID of this inventory item.
     */
    rfpId?: string;

    /**
     * ID of the site this inventory item is associated with.
     */
    siteId?: string;

    /**
     * Subaccount ID of this inventory item.
     */
    subaccountId?: string;

    /**
     * Type of inventory item.
     */
    type?: string;
  }

  declare interface dfareporting$InventoryItemsListResponse {
    /**
     * Inventory item collection
     */
    client$inventoryItems?: dfareporting$InventoryItem[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItemsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$KeyValueTargetingExpression {
    /**
     * Keyword expression being targeted by the ad.
     */
    expression?: string;
  }

  declare interface dfareporting$LandingPage {
    /**
     * Whether or not this landing page will be assigned to any ads or creatives that do not have a landing page assigned explicitly. Only one default landing
     * page is allowed per campaign.
     */
    default?: boolean;

    /**
     * ID of this landing page. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage".
     */
    kind?: string;

    /**
     * Name of this landing page. This is a required field. It must be less than 256 characters long, and must be unique among landing pages of the same
     * campaign.
     */
    name?: string;

    /**
     * URL of this landing page. This is a required field.
     */
    url?: string;
  }

  declare interface dfareporting$LandingPagesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPagesListResponse".
     */
    kind?: string;

    /**
     * Landing page collection
     */
    client$landingPages?: dfareporting$LandingPage[];
  }

  declare interface dfareporting$Language {
    /**
     * Language ID of this language. This is the ID used for targeting and generating reports.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#language".
     */
    kind?: string;

    /**
     * Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO 3166 code. Examples are "en" for
     * English or "zh_CN" for Simplified Chinese.
     */
    languageCode?: string;

    /**
     * Name of this language.
     */
    name?: string;
  }

  declare interface dfareporting$LanguageTargeting {
    /**
     * Languages that this ad targets. For each language only languageId is required. The other fields are populated automatically when the ad is inserted or
     * updated.
     */
    client$languages?: dfareporting$Language[];
  }

  declare interface dfareporting$LanguagesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse".
     */
    kind?: string;

    /**
     * Language collection.
     */
    client$languages?: dfareporting$Language[];
  }

  declare interface dfareporting$LastModifiedInfo {
    /**
     * Timestamp of the last change in milliseconds since epoch.
     */
    time?: string;
  }

  declare interface dfareporting$ListPopulationClause {
    /**
     * Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs.
     */
    terms?: dfareporting$ListPopulationTerm[];
  }

  declare interface dfareporting$ListPopulationRule {
    /**
     * Floodlight activity ID associated with this rule. This field can be left blank.
     */
    floodlightActivityId?: string;

    /**
     * Name of floodlight activity associated with this rule. This is a read-only, auto-generated field.
     */
    floodlightActivityName?: string;

    /**
     * Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are
     * joined by ORs.
     */
    listPopulationClauses?: dfareporting$ListPopulationClause[];
  }

  declare interface dfareporting$ListPopulationTerm {
    /**
     * Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only
     * relevant when type is set to LIST_MEMBERSHIP_TERM. False by default.
     */
    contains?: boolean;

    /**
     * Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to
     * CUSTOM_VARIABLE_TERM or REFERRER_TERM.
     */
    negation?: boolean;

    /**
     * Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
     */
    operator?: string;

    /**
     * ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM.
     */
    remarketingListId?: string;

    /**
     * List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName,
     * variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable.
     * If set to REFERRER_TERM then operator, value, and negation are applicable.
     */
    type?: string;

    /**
     * Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
     */
    value?: string;

    /**
     * Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to
     * CUSTOM_VARIABLE_TERM.
     */
    variableFriendlyName?: string;

    /**
     * Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or
     * REFERRER_TERM.
     */
    variableName?: string;
  }

  declare interface dfareporting$ListTargetingExpression {
    /**
     * Expression describing which lists are being targeted by the ad.
     */
    expression?: string;
  }

  declare interface dfareporting$LookbackConfiguration {
    /**
     * Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering
     * events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90,
     * inclusive.
     */
    clickDuration?: number;

    /**
     * Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering
     * events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90,
     * inclusive.
     */
    postImpressionActivitiesDuration?: number;
  }

  declare interface dfareporting$Metric {
    /**
     * The kind of resource this is, in this case dfareporting#metric.
     */
    kind?: string;

    /**
     * The metric name, e.g. dfa:impressions
     */
    name?: string;
  }

  declare interface dfareporting$Metro {
    /**
     * Country code of the country to which this metro region belongs.
     */
    countryCode?: string;

    /**
     * DART ID of the country to which this metro region belongs.
     */
    countryDartId?: string;

    /**
     * DART ID of this metro region.
     */
    dartId?: string;

    /**
     * DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code.
     */
    dmaId?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro".
     */
    kind?: string;

    /**
     * Metro code of this metro region. This is equivalent to dma_id.
     */
    metroCode?: string;

    /**
     * Name of this metro region.
     */
    name?: string;
  }

  declare interface dfareporting$MetrosListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse".
     */
    kind?: string;

    /**
     * Metro collection.
     */
    client$metros?: dfareporting$Metro[];
  }

  declare interface dfareporting$MobileCarrier {
    /**
     * Country code of the country to which this mobile carrier belongs.
     */
    countryCode?: string;

    /**
     * DART ID of the country to which this mobile carrier belongs.
     */
    countryDartId?: string;

    /**
     * ID of this mobile carrier.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier".
     */
    kind?: string;

    /**
     * Name of this mobile carrier.
     */
    name?: string;
  }

  declare interface dfareporting$MobileCarriersListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse".
     */
    kind?: string;

    /**
     * Mobile carrier collection.
     */
    client$mobileCarriers?: dfareporting$MobileCarrier[];
  }

  declare interface dfareporting$ObjectFilter {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter".
     */
    kind?: string;

    /**
     * Applicable when status is ASSIGNED. The user has access to objects with these object IDs.
     */
    objectIds?: string[];

    /**
     * Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has
     * access to the objects with IDs in the objectIds list.
     */
    status?: string;
  }

  declare interface dfareporting$OffsetPosition {
    /**
     * Offset distance from left side of an asset or a window.
     */
    left?: number;

    /**
     * Offset distance from top side of an asset or a window.
     */
    top?: number;
  }

  declare interface dfareporting$OmnitureSettings {
    /**
     * Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true.
     */
    omnitureCostDataEnabled?: boolean;

    /**
     * Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account setting is enabled.
     */
    omnitureIntegrationEnabled?: boolean;
  }

  declare interface dfareporting$OperatingSystem {
    /**
     * DART ID of this operating system. This is the ID used for targeting.
     */
    dartId?: string;

    /**
     * Whether this operating system is for desktop.
     */
    desktop?: boolean;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem".
     */
    kind?: string;

    /**
     * Whether this operating system is for mobile.
     */
    mobile?: boolean;

    /**
     * Name of this operating system.
     */
    name?: string;
  }

  declare interface dfareporting$OperatingSystemVersion {
    /**
     * ID of this operating system version.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion".
     */
    kind?: string;

    /**
     * Major version (leftmost number) of this operating system version.
     */
    majorVersion?: string;

    /**
     * Minor version (number after the first dot) of this operating system version.
     */
    minorVersion?: string;

    /**
     * Name of this operating system version.
     */
    name?: string;

    /**
     * Operating system of this operating system version.
     */
    operatingSystem?: dfareporting$OperatingSystem;
  }

  declare interface dfareporting$OperatingSystemVersionsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse".
     */
    kind?: string;

    /**
     * Operating system version collection.
     */
    client$operatingSystemVersions?: dfareporting$OperatingSystemVersion[];
  }

  declare interface dfareporting$OperatingSystemsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse".
     */
    kind?: string;

    /**
     * Operating system collection.
     */
    client$operatingSystems?: dfareporting$OperatingSystem[];
  }

  declare interface dfareporting$OptimizationActivity {
    /**
     * Floodlight activity ID of this optimization activity. This is a required field.
     */
    floodlightActivityId?: string;

    /**
     * Dimension value for the ID of the floodlight activity. This is a read-only, auto-generated field.
     */
    floodlightActivityIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization
     * activities. Value must be greater than or equal to 1.
     */
    weight?: number;
  }

  declare interface dfareporting$Order {
    /**
     * Account ID of this order.
     */
    accountId?: string;

    /**
     * Advertiser ID of this order.
     */
    advertiserId?: string;

    /**
     * IDs for users that have to approve documents created for this order.
     */
    approverUserProfileIds?: string[];

    /**
     * Buyer invoice ID associated with this order.
     */
    buyerInvoiceId?: string;

    /**
     * Name of the buyer organization.
     */
    buyerOrganizationName?: string;

    /**
     * Comments in this order.
     */
    comments?: string;

    /**
     * Contacts for this order.
     */
    contacts?: dfareporting$OrderContact[];

    /**
     * ID of this order. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#order".
     */
    kind?: string;

    /**
     * Information about the most recent modification of this order.
     */
    lastModifiedInfo?: dfareporting$LastModifiedInfo;

    /**
     * Name of this order.
     */
    name?: string;

    /**
     * Notes of this order.
     */
    notes?: string;

    /**
     * ID of the terms and conditions template used in this order.
     */
    planningTermId?: string;

    /**
     * Project ID of this order.
     */
    projectId?: string;

    /**
     * Seller order ID associated with this order.
     */
    sellerOrderId?: string;

    /**
     * Name of the seller organization.
     */
    sellerOrganizationName?: string;

    /**
     * Site IDs this order is associated with.
     */
    siteId?: string[];

    /**
     * Free-form site names this order is associated with.
     */
    siteNames?: string[];

    /**
     * Subaccount ID of this order.
     */
    subaccountId?: string;

    /**
     * Terms and conditions of this order.
     */
    termsAndConditions?: string;
  }

  declare interface dfareporting$OrderContact {
    /**
     * Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user
     * profile ID.
     */
    contactInfo?: string;

    /**
     * Name of this contact.
     */
    contactName?: string;

    /**
     * Title of this contact.
     */
    contactTitle?: string;

    /**
     * Type of this contact.
     */
    contactType?: string;

    /**
     * ID of the user profile containing the signature that will be embedded into order documents.
     */
    signatureUserProfileId?: string;
  }

  declare interface dfareporting$OrderDocument {
    /**
     * Account ID of this order document.
     */
    accountId?: string;

    /**
     * Advertiser ID of this order document.
     */
    advertiserId?: string;

    /**
     * The amended order document ID of this order document. An order document can be created by optionally amending another order document so that the change
     * history can be preserved.
     */
    amendedOrderDocumentId?: string;

    /**
     * IDs of users who have approved this order document.
     */
    approvedByUserProfileIds?: string[];

    /**
     * Whether this order document is cancelled.
     */
    cancelled?: boolean;

    /**
     * Information about the creation of this order document.
     */
    createdInfo?: dfareporting$LastModifiedInfo;

    /**
     * Effective date of this order document.
     */
    effectiveDate?: string;

    /**
     * ID of this order document.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocument".
     */
    kind?: string;

    /**
     * List of email addresses that received the last sent document.
     */
    lastSentRecipients?: string[];

    /**
     * Timestamp of the last email sent with this order document.
     */
    lastSentTime?: string;

    /**
     * ID of the order from which this order document is created.
     */
    orderId?: string;

    /**
     * Project ID of this order document.
     */
    projectId?: string;

    /**
     * Whether this order document has been signed.
     */
    signed?: boolean;

    /**
     * Subaccount ID of this order document.
     */
    subaccountId?: string;

    /**
     * Title of this order document.
     */
    title?: string;

    /**
     * Type of this order document
     */
    type?: string;
  }

  declare interface dfareporting$OrderDocumentsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocumentsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * Order document collection
     */
    client$orderDocuments?: dfareporting$OrderDocument[];
  }

  declare interface dfareporting$OrdersListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#ordersListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * Order collection.
     */
    client$orders?: dfareporting$Order[];
  }

  declare interface dfareporting$PathToConversionReportCompatibleFields {
    /**
     * Conversion dimensions which are compatible to be selected in the "conversionDimensions" section of the report.
     */
    conversionDimensions?: dfareporting$Dimension[];

    /**
     * Custom floodlight variables which are compatible to be selected in the "customFloodlightVariables" section of the report.
     */
    customFloodlightVariables?: dfareporting$Dimension[];

    /**
     * The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields.
     */
    kind?: string;

    /**
     * Metrics which are compatible to be selected in the "metricNames" section of the report.
     */
    metrics?: dfareporting$Metric[];

    /**
     * Per-interaction dimensions which are compatible to be selected in the "perInteractionDimensions" section of the report.
     */
    perInteractionDimensions?: dfareporting$Dimension[];
  }

  declare interface dfareporting$Placement {
    /**
     * Account ID of this placement. This field can be left blank.
     */
    accountId?: string;

    /**
     * Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take
     * effect.
     */
    adBlockingOptOut?: boolean;

    /**
     * Advertiser ID of this placement. This field can be left blank.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Whether this placement is archived.
     */
    archived?: boolean;

    /**
     * Campaign ID of this placement. This field is a required field on insertion.
     */
    campaignId?: string;

    /**
     * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
     */
    campaignIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Comments for this placement.
     */
    comment?: string;

    /**
     * Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or
     * interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or
     * DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion.
     */
    compatibility?: string;

    /**
     * ID of the content category assigned to this placement.
     */
    contentCategoryId?: string;

    /**
     * Information about the creation of this placement. This is a read-only field.
     */
    createInfo?: dfareporting$LastModifiedInfo;

    /**
     * Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement.
     * This is a required field that is read-only after insertion.
     */
    directorySiteId?: string;

    /**
     * Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
     */
    directorySiteIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * External ID for this placement.
     */
    externalId?: string;

    /**
     * ID of this placement. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Dimension value for the ID of this placement. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Key name of this placement. This is a read-only, auto-generated field.
     */
    keyName?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement".
     */
    kind?: string;

    /**
     * Information about the most recent modification of this placement. This is a read-only field.
     */
    lastModifiedInfo?: dfareporting$LastModifiedInfo;

    /**
     * Lookback window settings for this placement.
     */
    lookbackConfiguration?: dfareporting$LookbackConfiguration;

    /**
     * Name of this placement.This is a required field and must be less than 256 characters long.
     */
    name?: string;

    /**
     * Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements.
     */
    paymentApproved?: boolean;

    /**
     * Payment source for this placement. This is a required field that is read-only after insertion.
     */
    paymentSource?: string;

    /**
     * ID of this placement's group, if applicable.
     */
    placementGroupId?: string;

    /**
     * Dimension value for the ID of the placement group. This is a read-only, auto-generated field.
     */
    placementGroupIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * ID of the placement strategy assigned to this placement.
     */
    placementStrategyId?: string;

    /**
     * Pricing schedule of this placement. This field is required on insertion, specifically subfields startDate, endDate and pricingType.
     */
    pricingSchedule?: dfareporting$PricingSchedule;

    /**
     * Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field
     * to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the
     * roadblock's primaryPlacementId field to the ID of this placement.
     */
    primary?: boolean;

    /**
     * Information about the last publisher update. This is a read-only field.
     */
    publisherUpdateInfo?: dfareporting$LastModifiedInfo;

    /**
     * Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this
     * placement. This is a required field that is read-only after insertion.
     */
    siteId?: string;

    /**
     * Dimension value for the ID of the site. This is a read-only, auto-generated field.
     */
    siteIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Size associated with this placement. When inserting or updating a placement, only the size ID field is used. This field is required on insertion.
     */
    size?: dfareporting$Size;

    /**
     * Whether creatives assigned to this placement must be SSL-compliant.
     */
    sslRequired?: boolean;

    /**
     * Third-party placement status.
     */
    status?: string;

    /**
     * Subaccount ID of this placement. This field can be left blank.
     */
    subaccountId?: string;

    /**
     * Tag formats to generate for this placement. This field is required on insertion.
     * Acceptable values are:
     * - "PLACEMENT_TAG_STANDARD"
     * - "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
     * - "PLACEMENT_TAG_IFRAME_ILAYER"
     * - "PLACEMENT_TAG_INTERNAL_REDIRECT"
     * - "PLACEMENT_TAG_JAVASCRIPT"
     * - "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
     * - "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
     * - "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
     * - "PLACEMENT_TAG_CLICK_COMMANDS"
     * - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
     * - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
     * - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
     * - "PLACEMENT_TAG_TRACKING"
     * - "PLACEMENT_TAG_TRACKING_IFRAME"
     * - "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
     */
    tagFormats?: string[];

    /**
     * Tag settings for this placement.
     */
    tagSetting?: dfareporting$TagSetting;

    /**
     * Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the
     * site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or
     * Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display
     * ads, from Verification and ActiveView.
     */
    videoActiveViewOptOut?: boolean;

    /**
     * A collection of settings which affect video creatives served through this placement. Applicable to placements with IN_STREAM_VIDEO compatibility.
     */
    videoSettings?: dfareporting$VideoSettings;

    /**
     * VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this
     * placement.
     *
     * Note: Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
     */
    vpaidAdapterChoice?: string;
  }

  declare interface dfareporting$PlacementAssignment {
    /**
     * Whether this placement assignment is active. When true, the placement will be included in the ad's rotation.
     */
    active?: boolean;

    /**
     * ID of the placement to be assigned. This is a required field.
     */
    placementId?: string;

    /**
     * Dimension value for the ID of the placement. This is a read-only, auto-generated field.
     */
    placementIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslRequired?: boolean;
  }

  declare interface dfareporting$PlacementGroup {
    /**
     * Account ID of this placement group. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Advertiser ID of this placement group. This is a required field on insertion.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Whether this placement group is archived.
     */
    archived?: boolean;

    /**
     * Campaign ID of this placement group. This field is required on insertion.
     */
    campaignId?: string;

    /**
     * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
     */
    campaignIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field.
     */
    childPlacementIds?: string[];

    /**
     * Comments for this placement group.
     */
    comment?: string;

    /**
     * ID of the content category assigned to this placement group.
     */
    contentCategoryId?: string;

    /**
     * Information about the creation of this placement group. This is a read-only field.
     */
    createInfo?: dfareporting$LastModifiedInfo;

    /**
     * Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated
     * with this placement group. This is a required field that is read-only after insertion.
     */
    directorySiteId?: string;

    /**
     * Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
     */
    directorySiteIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * External ID for this placement.
     */
    externalId?: string;

    /**
     * ID of this placement group. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Dimension value for the ID of this placement group. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup".
     */
    kind?: string;

    /**
     * Information about the most recent modification of this placement group. This is a read-only field.
     */
    lastModifiedInfo?: dfareporting$LastModifiedInfo;

    /**
     * Name of this placement group. This is a required field and must be less than 256 characters long.
     */
    name?: string;

    /**
     * Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group
     * of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock
     * requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion.
     */
    placementGroupType?: string;

    /**
     * ID of the placement strategy assigned to this placement group.
     */
    placementStrategyId?: string;

    /**
     * Pricing schedule of this placement group. This field is required on insertion.
     */
    pricingSchedule?: dfareporting$PricingSchedule;

    /**
     * ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the
     * primary field on all affected roadblock child placements.
     */
    primaryPlacementId?: string;

    /**
     * Dimension value for the ID of the primary placement. This is a read-only, auto-generated field.
     */
    primaryPlacementIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated
     * with this placement group. This is a required field that is read-only after insertion.
     */
    siteId?: string;

    /**
     * Dimension value for the ID of the site. This is a read-only, auto-generated field.
     */
    siteIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Subaccount ID of this placement group. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
  }

  declare interface dfareporting$PlacementGroupsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * Placement group collection.
     */
    client$placementGroups?: dfareporting$PlacementGroup[];
  }

  declare interface dfareporting$PlacementStrategiesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * Placement strategy collection.
     */
    client$placementStrategies?: dfareporting$PlacementStrategy[];
  }

  declare interface dfareporting$PlacementStrategy {
    /**
     * Account ID of this placement strategy.This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * ID of this placement strategy. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy".
     */
    kind?: string;

    /**
     * Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same
     * account.
     */
    name?: string;
  }

  declare interface dfareporting$PlacementTag {
    /**
     * Placement ID
     */
    placementId?: string;

    /**
     * Tags generated for this placement.
     */
    tagDatas?: dfareporting$TagData[];
  }

  declare interface dfareporting$PlacementsGenerateTagsResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse".
     */
    kind?: string;

    /**
     * Set of generated tags for the specified placements.
     */
    placementTags?: dfareporting$PlacementTag[];
  }

  declare interface dfareporting$PlacementsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * Placement collection.
     */
    client$placements?: dfareporting$Placement[];
  }

  declare interface dfareporting$PlatformType {
    /**
     * ID of this platform type.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformType".
     */
    kind?: string;

    /**
     * Name of this platform type.
     */
    name?: string;
  }

  declare interface dfareporting$PlatformTypesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse".
     */
    kind?: string;

    /**
     * Platform type collection.
     */
    client$platformTypes?: dfareporting$PlatformType[];
  }

  declare interface dfareporting$PopupWindowProperties {
    /**
     * Popup dimension for a creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID
     */
    dimension?: dfareporting$Size;

    /**
     * Upper-left corner coordinates of the popup window. Applicable if positionType is COORDINATES.
     */
    offset?: dfareporting$OffsetPosition;

    /**
     * Popup window position either centered or at specific coordinate.
     */
    positionType?: string;

    /**
     * Whether to display the browser address bar.
     */
    showAddressBar?: boolean;

    /**
     * Whether to display the browser menu bar.
     */
    showMenuBar?: boolean;

    /**
     * Whether to display the browser scroll bar.
     */
    showScrollBar?: boolean;

    /**
     * Whether to display the browser status bar.
     */
    showStatusBar?: boolean;

    /**
     * Whether to display the browser tool bar.
     */
    showToolBar?: boolean;

    /**
     * Title of popup window.
     */
    title?: string;
  }

  declare interface dfareporting$PostalCode {
    /**
     * Postal code. This is equivalent to the id field.
     */
    code?: string;

    /**
     * Country code of the country to which this postal code belongs.
     */
    countryCode?: string;

    /**
     * DART ID of the country to which this postal code belongs.
     */
    countryDartId?: string;

    /**
     * ID of this postal code.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode".
     */
    kind?: string;
  }

  declare interface dfareporting$PostalCodesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse".
     */
    kind?: string;

    /**
     * Postal code collection.
     */
    client$postalCodes?: dfareporting$PostalCode[];
  }

  declare interface dfareporting$Pricing {
    /**
     * Cap cost type of this inventory item.
     */
    capCostType?: string;

    /**
     * End date of this inventory item.
     */
    endDate?: string;

    /**
     * Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a specific period of time.
     */
    flights?: dfareporting$Flight[];

    /**
     * Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups:
     * PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags.
     * PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags
     * in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary.
     */
    groupType?: string;

    /**
     * Pricing type of this inventory item.
     */
    pricingType?: string;

    /**
     * Start date of this inventory item.
     */
    startDate?: string;
  }

  declare interface dfareporting$PricingSchedule {
    /**
     * Placement cap cost option.
     */
    capCostOption?: string;

    /**
     * Whether cap costs are ignored by ad serving.
     */
    disregardOverdelivery?: boolean;

    /**
     * Placement end date. This date must be later than, or the same day as, the placement start date, but not later than the campaign end date. If, for
     * example, you set 6/25/2015 as both the start and end dates, the effective placement date is just that day only, 6/25/2015. The hours, minutes, and
     * seconds of the end date should not be set, as doing so will result in an error. This field is required on insertion.
     */
    endDate?: string;

    /**
     * Whether this placement is flighted. If true, pricing periods will be computed automatically.
     */
    flighted?: boolean;

    /**
     * Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA.
     */
    floodlightActivityId?: string;

    /**
     * Pricing periods for this placement.
     */
    pricingPeriods?: dfareporting$PricingSchedulePricingPeriod[];

    /**
     * Placement pricing type. This field is required on insertion.
     */
    pricingType?: string;

    /**
     * Placement start date. This date must be later than, or the same day as, the campaign start date. The hours, minutes, and seconds of the start date
     * should not be set, as doing so will result in an error. This field is required on insertion.
     */
    startDate?: string;

    /**
     * Testing start date of this placement. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error.
     */
    testingStartDate?: string;
  }

  declare interface dfareporting$PricingSchedulePricingPeriod {
    /**
     * Pricing period end date. This date must be later than, or the same day as, the pricing period start date, but not later than the placement end date.
     * The period end date can be the same date as the period start date. If, for example, you set 6/25/2015 as both the start and end dates, the effective
     * pricing period date is just that day only, 6/25/2015. The hours, minutes, and seconds of the end date should not be set, as doing so will result in an
     * error.
     */
    endDate?: string;

    /**
     * Comments for this pricing period.
     */
    pricingComment?: string;

    /**
     * Rate or cost of this pricing period in nanos (i.e., multipled by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive.
     */
    rateOrCostNanos?: string;

    /**
     * Pricing period start date. This date must be later than, or the same day as, the placement start date. The hours, minutes, and seconds of the start
     * date should not be set, as doing so will result in an error.
     */
    startDate?: string;

    /**
     * Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive.
     */
    units?: string;
  }

  declare interface dfareporting$Project {
    /**
     * Account ID of this project.
     */
    accountId?: string;

    /**
     * Advertiser ID of this project.
     */
    advertiserId?: string;

    /**
     * Audience age group of this project.
     */
    audienceAgeGroup?: string;

    /**
     * Audience gender of this project.
     */
    audienceGender?: string;

    /**
     * Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For
     * example, for USD, the smallest value that can be represented by this field is 1 US dollar.
     */
    budget?: string;

    /**
     * Client billing code of this project.
     */
    clientBillingCode?: string;

    /**
     * Name of the project client.
     */
    clientName?: string;

    /**
     * End date of the project.
     */
    endDate?: string;

    /**
     * ID of this project. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#project".
     */
    kind?: string;

    /**
     * Information about the most recent modification of this project.
     */
    lastModifiedInfo?: dfareporting$LastModifiedInfo;

    /**
     * Name of this project.
     */
    name?: string;

    /**
     * Overview of this project.
     */
    overview?: string;

    /**
     * Start date of the project.
     */
    startDate?: string;

    /**
     * Subaccount ID of this project.
     */
    subaccountId?: string;

    /**
     * Number of clicks that the advertiser is targeting.
     */
    targetClicks?: string;

    /**
     * Number of conversions that the advertiser is targeting.
     */
    targetConversions?: string;

    /**
     * CPA that the advertiser is targeting.
     */
    targetCpaNanos?: string;

    /**
     * CPC that the advertiser is targeting.
     */
    targetCpcNanos?: string;

    /**
     * vCPM from Active View that the advertiser is targeting.
     */
    targetCpmActiveViewNanos?: string;

    /**
     * CPM that the advertiser is targeting.
     */
    targetCpmNanos?: string;

    /**
     * Number of impressions that the advertiser is targeting.
     */
    targetImpressions?: string;
  }

  declare interface dfareporting$ProjectsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * Project collection.
     */
    client$projects?: dfareporting$Project[];
  }

  declare interface dfareporting$ReachReportCompatibleFields {
    /**
     * Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
     */
    dimensionFilters?: dfareporting$Dimension[];

    /**
     * Dimensions which are compatible to be selected in the "dimensions" section of the report.
     */
    dimensions?: dfareporting$Dimension[];

    /**
     * The kind of resource this is, in this case dfareporting#reachReportCompatibleFields.
     */
    kind?: string;

    /**
     * Metrics which are compatible to be selected in the "metricNames" section of the report.
     */
    metrics?: dfareporting$Metric[];

    /**
     * Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.
     */
    pivotedActivityMetrics?: dfareporting$Metric[];

    /**
     * Metrics which are compatible to be selected in the "reachByFrequencyMetricNames" section of the report.
     */
    reachByFrequencyMetrics?: dfareporting$Metric[];
  }

  declare interface dfareporting$Recipient {
    /**
     * The delivery type for the recipient.
     */
    deliveryType?: string;

    /**
     * The email address of the recipient.
     */
    email?: string;

    /**
     * The kind of resource this is, in this case dfareporting#recipient.
     */
    kind?: string;
  }

  declare interface dfareporting$Region {
    /**
     * Country code of the country to which this region belongs.
     */
    countryCode?: string;

    /**
     * DART ID of the country to which this region belongs.
     */
    countryDartId?: string;

    /**
     * DART ID of this region.
     */
    dartId?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#region".
     */
    kind?: string;

    /**
     * Name of this region.
     */
    name?: string;

    /**
     * Region code.
     */
    regionCode?: string;
  }

  declare interface dfareporting$RegionsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse".
     */
    kind?: string;

    /**
     * Region collection.
     */
    client$regions?: dfareporting$Region[];
  }

  declare interface dfareporting$RemarketingList {
    /**
     * Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    accountId?: string;

    /**
     * Whether this remarketing list is active.
     */
    active?: boolean;

    /**
     * Dimension value for the advertiser ID that owns this remarketing list. This is a required field.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Remarketing list description.
     */
    description?: string;

    /**
     * Remarketing list ID. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList".
     */
    kind?: string;

    /**
     * Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive.
     */
    lifeSpan?: string;

    /**
     * Rule used to populate the remarketing list with users.
     */
    listPopulationRule?: dfareporting$ListPopulationRule;

    /**
     * Number of users currently in the list. This is a read-only field.
     */
    listSize?: string;

    /**
     * Product from which this remarketing list was originated.
     */
    listSource?: string;

    /**
     * Name of the remarketing list. This is a required field. Must be no greater than 128 characters long.
     */
    name?: string;

    /**
     * Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    subaccountId?: string;
  }

  declare interface dfareporting$RemarketingListShare {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare".
     */
    kind?: string;

    /**
     * Remarketing list ID. This is a read-only, auto-generated field.
     */
    remarketingListId?: string;

    /**
     * Accounts that the remarketing list is shared with.
     */
    sharedAccountIds?: string[];

    /**
     * Advertisers that the remarketing list is shared with.
     */
    sharedAdvertiserIds?: string[];
  }

  declare interface dfareporting$RemarketingListsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * Remarketing list collection.
     */
    client$remarketingLists?: dfareporting$RemarketingList[];
  }

  declare interface dfareporting$Report {
    /**
     * The account ID to which this report belongs.
     */
    accountId?: string;

    /**
     * The report criteria for a report of type "STANDARD".
     */
    criteria?: {
      /**
       * Activity group.
       */
      activities?: dfareporting$Activities,

      /**
       * Custom Rich Media Events group.
       */
      customRichMediaEvents?: dfareporting$CustomRichMediaEvents,

      /**
       * The date range for which this report should be run.
       */
      dateRange?: dfareporting$DateRange,

      /**
       * The list of filters on which dimensions are filtered.
       * Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
       */
      dimensionFilters?: dfareporting$DimensionValue[],

      /**
       * The list of standard dimensions the report should include.
       */
      dimensions?: dfareporting$SortedDimension[],

      /**
       * The list of names of metrics the report should include.
       */
      metricNames?: string[]
    };

    /**
     * The report criteria for a report of type "CROSS_DIMENSION_REACH".
     */
    crossDimensionReachCriteria?: {
      /**
       * The list of dimensions the report should include.
       */
      breakdown?: dfareporting$SortedDimension[],

      /**
       * The date range this report should be run for.
       */
      dateRange?: dfareporting$DateRange,

      /**
       * The dimension option.
       */
      dimension?: string,

      /**
       * The list of filters on which dimensions are filtered.
       */
      dimensionFilters?: dfareporting$DimensionValue[],

      /**
       * The list of names of metrics the report should include.
       */
      metricNames?: string[],

      /**
       * The list of names of overlap metrics the report should include.
       */
      overlapMetricNames?: string[],

      /**
       * Whether the report is pivoted or not. Defaults to true.
       */
      pivoted?: boolean
    };

    /**
     * The report's email delivery settings.
     */
    delivery?: {
      /**
       * Whether the report should be emailed to the report owner.
       */
      emailOwner?: boolean,

      /**
       * The type of delivery for the owner to receive, if enabled.
       */
      emailOwnerDeliveryType?: string,

      /**
       * The message to be sent with each email.
       */
      message?: string,

      /**
       * The list of recipients to which to email the report.
       */
      recipients?: dfareporting$Recipient[]
    };

    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The filename used when generating report files for this report.
     */
    fileName?: string;

    /**
     * The report criteria for a report of type "FLOODLIGHT".
     */
    floodlightCriteria?: {
      /**
       * The list of custom rich media events to include.
       */
      customRichMediaEvents?: dfareporting$DimensionValue[],

      /**
       * The date range this report should be run for.
       */
      dateRange?: dfareporting$DateRange,

      /**
       * The list of filters on which dimensions are filtered.
       * Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
       */
      dimensionFilters?: dfareporting$DimensionValue[],

      /**
       * The list of dimensions the report should include.
       */
      dimensions?: dfareporting$SortedDimension[],

      /**
       * The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be added. The dimension of the
       * value needs to be 'dfa:floodlightConfigId'.
       */
      floodlightConfigId?: dfareporting$DimensionValue,

      /**
       * The list of names of metrics the report should include.
       */
      metricNames?: string[],

      /**
       * The properties of the report.
       */
      reportProperties?: {
        /**
         * Include conversions that have no cookie, but do have an exposure path.
         */
        includeAttributedIPConversions?: boolean,

        /**
         * Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser
         * within the Floodlight group, or that the interaction happened outside the lookback window.
         */
        includeUnattributedCookieConversions?: boolean,

        /**
         * Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the
         * lookback window prior to a conversion.
         */
        includeUnattributedIPConversions?: boolean
      }
    };

    /**
     * The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if
     * for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format.
     */
    format?: string;

    /**
     * The unique ID identifying this report resource.
     */
    id?: string;

    /**
     * The kind of resource this is, in this case dfareporting#report.
     */
    kind?: string;

    /**
     * The timestamp (in milliseconds since epoch) of when this report was last modified.
     */
    lastModifiedTime?: string;

    /**
     * The name of the report.
     */
    name?: string;

    /**
     * The user profile id of the owner of this report.
     */
    ownerProfileId?: string;

    /**
     * The report criteria for a report of type "PATH_TO_CONVERSION".
     */
    pathToConversionCriteria?: {
      /**
       * The list of 'dfa:activity' values to filter on.
       */
      activityFilters?: dfareporting$DimensionValue[],

      /**
       * The list of conversion dimensions the report should include.
       */
      conversionDimensions?: dfareporting$SortedDimension[],

      /**
       * The list of custom floodlight variables the report should include.
       */
      customFloodlightVariables?: dfareporting$SortedDimension[],

      /**
       * The list of custom rich media events to include.
       */
      customRichMediaEvents?: dfareporting$DimensionValue[],

      /**
       * The date range this report should be run for.
       */
      dateRange?: dfareporting$DateRange,

      /**
       * The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be added. The dimension of the
       * value needs to be 'dfa:floodlightConfigId'.
       */
      floodlightConfigId?: dfareporting$DimensionValue,

      /**
       * The list of names of metrics the report should include.
       */
      metricNames?: string[],

      /**
       * The list of per interaction dimensions the report should include.
       */
      perInteractionDimensions?: dfareporting$SortedDimension[],

      /**
       * The properties of the report.
       */
      reportProperties?: {
        /**
         * DFA checks to see if a click interaction occurred within the specified period of time before a conversion. By default the value is pulled from
         * Floodlight or you can manually enter a custom value. Valid values: 1-90.
         */
        clicksLookbackWindow?: number,

        /**
         * DFA checks to see if an impression interaction occurred within the specified period of time before a conversion. By default the value is pulled from
         * Floodlight or you can manually enter a custom value. Valid values: 1-90.
         */
        impressionsLookbackWindow?: number,

        /**
         * Deprecated: has no effect.
         */
        includeAttributedIPConversions?: boolean,

        /**
         * Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser
         * within the Floodlight group, or that the interaction happened outside the lookback window.
         */
        includeUnattributedCookieConversions?: boolean,

        /**
         * Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the
         * lookback window prior to a conversion.
         */
        includeUnattributedIPConversions?: boolean,

        /**
         * The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100
         * impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.
         */
        maximumClickInteractions?: number,

        /**
         * The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100
         * impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.
         */
        maximumImpressionInteractions?: number,

        /**
         * The maximum amount of time that can take place between interactions (clicks or impressions) by the same user. Valid values: 1-90.
         */
        maximumInteractionGap?: number,

        /**
         * Enable pivoting on interaction path.
         */
        pivotOnInteractionPath?: boolean
      }
    };

    /**
     * The report criteria for a report of type "REACH".
     */
    reachCriteria?: {
      /**
       * Activity group.
       */
      activities?: dfareporting$Activities,

      /**
       * Custom Rich Media Events group.
       */
      customRichMediaEvents?: dfareporting$CustomRichMediaEvents,

      /**
       * The date range this report should be run for.
       */
      dateRange?: dfareporting$DateRange,

      /**
       * The list of filters on which dimensions are filtered.
       * Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
       */
      dimensionFilters?: dfareporting$DimensionValue[],

      /**
       * The list of dimensions the report should include.
       */
      dimensions?: dfareporting$SortedDimension[],

      /**
       * Whether to enable all reach dimension combinations in the report. Defaults to false. If enabled, the date range of the report should be within the last
       * three months.
       */
      enableAllDimensionCombinations?: boolean,

      /**
       * The list of names of metrics the report should include.
       */
      metricNames?: string[],

      /**
       * The list of names of  Reach By Frequency metrics the report should include.
       */
      reachByFrequencyMetricNames?: string[]
    };

    /**
     * The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
     */
    schedule?: {
      /**
       * Whether the schedule is active or not. Must be set to either true or false.
       */
      active?: boolean,

      /**
       * Defines every how many days, weeks or months the report should be run. Needs to be set when "repeats" is either "DAILY", "WEEKLY" or "MONTHLY".
       */
      every?: number,

      /**
       * The expiration date when the scheduled report stops running.
       */
      expirationDate?: string,

      /**
       * The interval for which the report is repeated. Note:
       * - "DAILY" also requires field "every" to be set.
       * - "WEEKLY" also requires fields "every" and "repeatsOnWeekDays" to be set.
       * - "MONTHLY" also requires fields "every" and "runsOnDayOfMonth" to be set.
       */
      repeats?: string,

      /**
       * List of week days "WEEKLY" on which scheduled reports should run.
       */
      repeatsOnWeekDays?: string[],

      /**
       * Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as "startDate" or the same day of the
       * week of the month.
       * Example: If 'startDate' is Monday, April 2nd 2012 (2012-04-02), "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and
       * "WEEK_OF_MONTH" would run subsequent reports on the first Monday of the month.
       */
      runsOnDayOfMonth?: string,

      /**
       * Start date of date range for which scheduled reports should be run.
       */
      startDate?: string
    };

    /**
     * The subaccount ID to which this report belongs if applicable.
     */
    subAccountId?: string;

    /**
     * The type of the report.
     */
    type?: string;
  }

  declare interface dfareporting$ReportCompatibleFields {
    /**
     * Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
     */
    dimensionFilters?: dfareporting$Dimension[];

    /**
     * Dimensions which are compatible to be selected in the "dimensions" section of the report.
     */
    dimensions?: dfareporting$Dimension[];

    /**
     * The kind of resource this is, in this case dfareporting#reportCompatibleFields.
     */
    kind?: string;

    /**
     * Metrics which are compatible to be selected in the "metricNames" section of the report.
     */
    metrics?: dfareporting$Metric[];

    /**
     * Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.
     */
    pivotedActivityMetrics?: dfareporting$Metric[];
  }

  declare interface dfareporting$ReportList {
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The reports returned in this response.
     */
    items?: dfareporting$Report[];

    /**
     * The kind of list this is, in this case dfareporting#reportList.
     */
    kind?: string;

    /**
     * Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field.
     * The page token is only valid for a limited amount of time and should not be persisted.
     */
    nextPageToken?: string;
  }

  declare interface dfareporting$ReportsConfiguration {
    /**
     * Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen
     * by a user before converting.
     */
    exposureToConversionEnabled?: boolean;

    /**
     * Default lookback windows for new advertisers in this account.
     */
    lookbackConfiguration?: dfareporting$LookbackConfiguration;

    /**
     * Report generation time zone ID of this account. This is a required field that can only be changed by a superuser.
     * Acceptable values are:
     *
     * - "1" for "America/New_York"
     * - "2" for "Europe/London"
     * - "3" for "Europe/Paris"
     * - "4" for "Africa/Johannesburg"
     * - "5" for "Asia/Jerusalem"
     * - "6" for "Asia/Shanghai"
     * - "7" for "Asia/Hong_Kong"
     * - "8" for "Asia/Tokyo"
     * - "9" for "Australia/Sydney"
     * - "10" for "Asia/Dubai"
     * - "11" for "America/Los_Angeles"
     * - "12" for "Pacific/Auckland"
     * - "13" for "America/Sao_Paulo"
     */
    reportGenerationTimeZoneId?: string;
  }

  declare interface dfareporting$RichMediaExitOverride {
    /**
     * Click-through URL of this rich media exit override. Applicable if the enabled field is set to true.
     */
    clickThroughUrl?: dfareporting$ClickThroughUrl;

    /**
     * Whether to use the clickThroughUrl. If false, the creative-level exit will be used.
     */
    enabled?: boolean;

    /**
     * ID for the override to refer to a specific exit in the creative.
     */
    exitId?: string;
  }

  declare interface dfareporting$Rule {
    /**
     * A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field.
     */
    assetId?: string;

    /**
     * A user-friendly name for this rule. This is a required field.
     */
    name?: string;

    /**
     * A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should be served. This is a required
     * field.
     */
    targetingTemplateId?: string;
  }

  declare interface dfareporting$Site {
    /**
     * Account ID of this site. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Whether this site is approved.
     */
    approved?: boolean;

    /**
     * Directory site associated with this site. This is a required field that is read-only after insertion.
     */
    directorySiteId?: string;

    /**
     * Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
     */
    directorySiteIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * ID of this site. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Dimension value for the ID of this site. This is a read-only, auto-generated field.
     */
    idDimensionValue?: dfareporting$DimensionValue;

    /**
     * Key name of this site. This is a read-only, auto-generated field.
     */
    keyName?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#site".
     */
    kind?: string;

    /**
     * Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among
     * sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account.
     */
    name?: string;

    /**
     * Site contacts.
     */
    siteContacts?: dfareporting$SiteContact[];

    /**
     * Site-wide settings.
     */
    siteSettings?: dfareporting$SiteSettings;

    /**
     * Subaccount ID of this site. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
  }

  declare interface dfareporting$SiteContact {
    /**
     * Address of this site contact.
     */
    address?: string;

    /**
     * Site contact type.
     */
    contactType?: string;

    /**
     * Email address of this site contact. This is a required field.
     */
    email?: string;

    /**
     * First name of this site contact.
     */
    firstName?: string;

    /**
     * ID of this site contact. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Last name of this site contact.
     */
    lastName?: string;

    /**
     * Primary phone number of this site contact.
     */
    phone?: string;

    /**
     * Title or designation of this site contact.
     */
    title?: string;
  }

  declare interface dfareporting$SiteSettings {
    /**
     * Whether active view creatives are disabled for this site.
     */
    activeViewOptOut?: boolean;

    /**
     * Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement
     * settings. When false, the campaign and placement settings take effect.
     */
    adBlockingOptOut?: boolean;

    /**
     * Site-wide creative settings.
     */
    creativeSettings?: dfareporting$CreativeSettings;

    /**
     * Whether new cookies are disabled for this site.
     */
    disableNewCookie?: boolean;

    /**
     * Lookback window settings for this site.
     */
    lookbackConfiguration?: dfareporting$LookbackConfiguration;

    /**
     * Configuration settings for dynamic and image floodlight tags.
     */
    tagSetting?: dfareporting$TagSetting;

    /**
     * Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will
     * be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement.
     */
    videoActiveViewOptOutTemplate?: boolean;

    /**
     * Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field,
     * when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned
     * to the placement. The publisher's specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID
     * format (HTML5 VPAID creatives use the HTML5 adapter).
     *
     * Note: Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
     */
    vpaidAdapterChoiceTemplate?: string;
  }

  declare interface dfareporting$SitesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * Site collection.
     */
    client$sites?: dfareporting$Site[];
  }

  declare interface dfareporting$Size {
    /**
     * Height of this size. Acceptable values are 0 to 32767, inclusive.
     */
    height?: number;

    /**
     * IAB standard size. This is a read-only, auto-generated field.
     */
    iab?: boolean;

    /**
     * ID of this size. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#size".
     */
    kind?: string;

    /**
     * Width of this size. Acceptable values are 0 to 32767, inclusive.
     */
    width?: number;
  }

  declare interface dfareporting$SizesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse".
     */
    kind?: string;

    /**
     * Size collection.
     */
    client$sizes?: dfareporting$Size[];
  }

  declare interface dfareporting$SkippableSetting {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#skippableSetting".
     */
    kind?: string;

    /**
     * Amount of time to play videos served to this placement before counting a view. Applicable when skippable is true.
     */
    progressOffset?: dfareporting$VideoOffset;

    /**
     * Amount of time to play videos served to this placement before the skip button should appear. Applicable when skippable is true.
     */
    skipOffset?: dfareporting$VideoOffset;

    /**
     * Whether the user can skip creatives served to this placement.
     */
    skippable?: boolean;
  }

  declare interface dfareporting$SortedDimension {
    /**
     * The kind of resource this is, in this case dfareporting#sortedDimension.
     */
    kind?: string;

    /**
     * The name of the dimension.
     */
    name?: string;

    /**
     * An optional sort order for the dimension column.
     */
    sortOrder?: string;
  }

  declare interface dfareporting$Subaccount {
    /**
     * ID of the account that contains this subaccount. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * IDs of the available user role permissions for this subaccount.
     */
    availablePermissionIds?: string[];

    /**
     * ID of this subaccount. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount".
     */
    kind?: string;

    /**
     * Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account.
     */
    name?: string;
  }

  declare interface dfareporting$SubaccountsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * Subaccount collection.
     */
    client$subaccounts?: dfareporting$Subaccount[];
  }

  declare interface dfareporting$TagData {
    /**
     * Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.
     */
    adId?: string;

    /**
     * Tag string to record a click.
     */
    clickTag?: string;

    /**
     * Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.
     */
    creativeId?: string;

    /**
     * TagData tag format of this tag.
     */
    format?: string;

    /**
     * Tag string for serving an ad.
     */
    impressionTag?: string;
  }

  declare interface dfareporting$TagSetting {
    /**
     * Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys
     * and values must not contain commas. For example, id=2;color=red is a valid value for this field.
     */
    additionalKeyValues?: string;

    /**
     * Whether static landing page URLs should be included in the tags. This setting applies only to placements.
     */
    includeClickThroughUrls?: boolean;

    /**
     * Whether click-tracking string should be included in the tags.
     */
    includeClickTracking?: boolean;

    /**
     * Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags
     * for this site. Publishers can then add keywords to those placeholders.
     */
    keywordOption?: string;
  }

  declare interface dfareporting$TagSettings {
    /**
     * Whether dynamic floodlight tags are enabled.
     */
    dynamicTagEnabled?: boolean;

    /**
     * Whether image tags are enabled.
     */
    imageTagEnabled?: boolean;
  }

  declare interface dfareporting$TargetWindow {
    /**
     * User-entered value.
     */
    customHtml?: string;

    /**
     * Type of browser window for which the backup image of the flash creative can be displayed.
     */
    targetWindowOption?: string;
  }

  declare interface dfareporting$TargetableRemarketingList {
    /**
     * Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    accountId?: string;

    /**
     * Whether this targetable remarketing list is active.
     */
    active?: boolean;

    /**
     * Dimension value for the advertiser ID that owns this targetable remarketing list.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Targetable remarketing list description.
     */
    description?: string;

    /**
     * Targetable remarketing list ID.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList".
     */
    kind?: string;

    /**
     * Number of days that a user should remain in the targetable remarketing list without an impression.
     */
    lifeSpan?: string;

    /**
     * Number of users currently in the list. This is a read-only field.
     */
    listSize?: string;

    /**
     * Product from which this targetable remarketing list was originated.
     */
    listSource?: string;

    /**
     * Name of the targetable remarketing list. Is no greater than 128 characters long.
     */
    name?: string;

    /**
     * Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    subaccountId?: string;
  }

  declare interface dfareporting$TargetableRemarketingListsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * Targetable remarketing list collection.
     */
    client$targetableRemarketingLists?: dfareporting$TargetableRemarketingList[];
  }

  declare interface dfareporting$TargetingTemplate {
    /**
     * Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.
     */
    accountId?: string;

    /**
     * Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert.
     */
    advertiserId?: string;

    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: dfareporting$DimensionValue;

    /**
     * Time and day targeting criteria.
     */
    dayPartTargeting?: dfareporting$DayPartTargeting;

    /**
     * Geographical targeting criteria.
     */
    geoTargeting?: dfareporting$GeoTargeting;

    /**
     * ID of this targeting template. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Key-value targeting criteria.
     */
    keyValueTargetingExpression?: dfareporting$KeyValueTargetingExpression;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplate".
     */
    kind?: string;

    /**
     * Language targeting criteria.
     */
    languageTargeting?: dfareporting$LanguageTargeting;

    /**
     * Remarketing list targeting criteria.
     */
    listTargetingExpression?: dfareporting$ListTargetingExpression;

    /**
     * Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser.
     */
    name?: string;

    /**
     * Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.
     */
    subaccountId?: string;

    /**
     * Technology platform targeting criteria.
     */
    technologyTargeting?: dfareporting$TechnologyTargeting;
  }

  declare interface dfareporting$TargetingTemplatesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplatesListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * Targeting template collection.
     */
    client$targetingTemplates?: dfareporting$TargetingTemplate[];
  }

  declare interface dfareporting$TechnologyTargeting {
    /**
     * Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If both are specified, only
     * browserVersionId will be used. The other fields are populated automatically when the ad is inserted or updated.
     */
    client$browsers?: dfareporting$Browser[];

    /**
     * Connection types that this ad targets. For each connection type only id is required. The other fields are populated automatically when the ad is
     * inserted or updated.
     */
    client$connectionTypes?: dfareporting$ConnectionType[];

    /**
     * Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated automatically when the ad is
     * inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes.
     */
    client$mobileCarriers?: dfareporting$MobileCarrier[];

    /**
     * Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system version, only id is required.
     * The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system version, do not set targeting for the
     * corresponding operating system in operatingSystems.
     */
    client$operatingSystemVersions?: dfareporting$OperatingSystemVersion[];

    /**
     * Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating system only dartId is required.
     * The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system, do not set targeting for operating
     * system versions for the same operating system.
     */
    client$operatingSystems?: dfareporting$OperatingSystem[];

    /**
     * Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is required, and the other fields are
     * populated automatically when the ad is inserted or updated.
     */
    client$platformTypes?: dfareporting$PlatformType[];
  }

  declare interface dfareporting$ThirdPartyAuthenticationToken {
    /**
     * Name of the third-party authentication token.
     */
    name?: string;

    /**
     * Value of the third-party authentication token. This is a read-only, auto-generated field.
     */
    value?: string;
  }

  declare interface dfareporting$ThirdPartyTrackingUrl {
    /**
     * Third-party URL type for in-stream video creatives.
     */
    thirdPartyUrlType?: string;

    /**
     * URL for the specified third-party URL type.
     */
    url?: string;
  }

  declare interface dfareporting$TranscodeSetting {
    /**
     * Whitelist of video formats to be served to this placement. Set this list to null or empty to serve all video formats.
     */
    enabledVideoFormats?: number[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#transcodeSetting".
     */
    kind?: string;
  }

  declare interface dfareporting$UniversalAdId {
    /**
     * Registry used for the Ad ID value.
     */
    registry?: string;

    /**
     * ID value for this creative. Only alphanumeric characters and the following symbols are valid: "_/\-". Maximum length is 64 characters. Read only when
     * registry is DCM.
     */
    value?: string;
  }

  declare interface dfareporting$UserDefinedVariableConfiguration {
    /**
     * Data type for the variable. This is a required field.
     */
    dataType?: string;

    /**
     * User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain
     * the following characters: ""<>".
     */
    reportName?: string;

    /**
     * Variable name in the tag. This is a required field.
     */
    variableType?: string;
  }

  declare interface dfareporting$UserProfile {
    /**
     * The account ID to which this profile belongs.
     */
    accountId?: string;

    /**
     * The account name this profile belongs to.
     */
    accountName?: string;

    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The kind of resource this is, in this case dfareporting#userProfile.
     */
    kind?: string;

    /**
     * The unique ID of the user profile.
     */
    profileId?: string;

    /**
     * The sub account ID this profile belongs to if applicable.
     */
    subAccountId?: string;

    /**
     * The sub account name this profile belongs to if applicable.
     */
    subAccountName?: string;

    /**
     * The user name.
     */
    userName?: string;
  }

  declare interface dfareporting$UserProfileList {
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The user profiles returned in this response.
     */
    items?: dfareporting$UserProfile[];

    /**
     * The kind of list this is, in this case dfareporting#userProfileList.
     */
    kind?: string;
  }

  declare interface dfareporting$UserRole {
    /**
     * Account ID of this user role. This is a read-only field that can be left blank.
     */
    accountId?: string;

    /**
     * Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each
     * default user role comes with a basic set of preassigned permissions.
     */
    defaultUserRole?: boolean;

    /**
     * ID of this user role. This is a read-only, auto-generated field.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole".
     */
    kind?: string;

    /**
     * Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be
     * unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles
     * of the same account.
     */
    name?: string;

    /**
     * ID of the user role that this user role is based on or copied from. This is a required field.
     */
    parentUserRoleId?: string;

    /**
     * List of permissions associated with this user role.
     */
    permissions?: dfareporting$UserRolePermission[];

    /**
     * Subaccount ID of this user role. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
  }

  declare interface dfareporting$UserRolePermission {
    /**
     * Levels of availability for a user role permission.
     */
    availability?: string;

    /**
     * ID of this user role permission.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission".
     */
    kind?: string;

    /**
     * Name of this user role permission.
     */
    name?: string;

    /**
     * ID of the permission group that this user role permission belongs to.
     */
    permissionGroupId?: string;
  }

  declare interface dfareporting$UserRolePermissionGroup {
    /**
     * ID of this user role permission.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup".
     */
    kind?: string;

    /**
     * Name of this user role permission group.
     */
    name?: string;
  }

  declare interface dfareporting$UserRolePermissionGroupsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse".
     */
    kind?: string;

    /**
     * User role permission group collection.
     */
    client$userRolePermissionGroups?: dfareporting$UserRolePermissionGroup[];
  }

  declare interface dfareporting$UserRolePermissionsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse".
     */
    kind?: string;

    /**
     * User role permission collection.
     */
    client$userRolePermissions?: dfareporting$UserRolePermission[];
  }

  declare interface dfareporting$UserRolesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse".
     */
    kind?: string;

    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;

    /**
     * User role collection.
     */
    client$userRoles?: dfareporting$UserRole[];
  }

  declare interface dfareporting$VideoFormat {
    /**
     * File type of the video format.
     */
    fileType?: string;

    /**
     * ID of the video format.
     */
    id?: number;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat".
     */
    kind?: string;

    /**
     * The resolution of this video format.
     */
    resolution?: dfareporting$Size;

    /**
     * The target bit rate of this video format.
     */
    targetBitRate?: number;
  }

  declare interface dfareporting$VideoFormatsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormatsListResponse".
     */
    kind?: string;

    /**
     * Video format collection.
     */
    client$videoFormats?: dfareporting$VideoFormat[];
  }

  declare interface dfareporting$VideoOffset {
    /**
     * Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive.
     */
    offsetPercentage?: number;

    /**
     * Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive.
     */
    offsetSeconds?: number;
  }

  declare interface dfareporting$VideoSettings {
    /**
     * Settings for the companion creatives of video creatives served to this placement.
     */
    companionSettings?: dfareporting$CompanionSetting;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoSettings".
     */
    kind?: string;

    /**
     * Settings for the skippability of video creatives served to this placement. If this object is provided, the creative-level skippable settings will be
     * overridden.
     */
    skippableSettings?: dfareporting$SkippableSetting;

    /**
     * Settings for the transcodes of video creatives served to this placement. If this object is provided, the creative-level transcode settings will be
     * overridden.
     */
    transcodeSettings?: dfareporting$TranscodeSetting;
  }

  declare interface dfareporting$AccountActiveAdSummariesResource {
    /**
     * Gets the account's active ad summary by account ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Account ID.
       */
      summaryAccountId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AccountActiveAdSummary>;
  }

  declare interface dfareporting$AccountPermissionGroupsResource {
    /**
     * Gets one account permission group by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Account permission group ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AccountPermissionGroup>;

    /**
     * Retrieves the list of account permission groups.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AccountPermissionGroupsListResponse>;
  }

  declare interface dfareporting$AccountPermissionsResource {
    /**
     * Gets one account permission by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Account permission ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AccountPermission>;

    /**
     * Retrieves the list of account permissions.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AccountPermissionsListResponse>;
  }

  declare interface dfareporting$AccountUserProfilesResource {
    /**
     * Gets one account user profile by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * User profile ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AccountUserProfile>;

    /**
     * Inserts a new account user profile.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AccountUserProfile>;

    /**
     * Retrieves a list of account user profiles, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only active user profiles.
       */
      active?: boolean,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only user profiles with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name, ID or email. Wildcards (&#42;) are allowed. For example, "user profile&#42;2015" will return objects with names like
       * "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and
       * the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or
       * simply "user profile".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * Select only user profiles with the specified subaccount ID.
       */
      subaccountId?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * Select only user profiles with the specified user role ID.
       */
      userRoleId?: string
    }): Request<dfareporting$AccountUserProfilesListResponse>;

    /**
     * Updates an existing account user profile. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * User profile ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AccountUserProfile>;

    /**
     * Updates an existing account user profile.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AccountUserProfile>;
  }

  declare interface dfareporting$AccountsResource {
    /**
     * Gets one account by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Account ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Account>;

    /**
     * Retrieves the list of accounts, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only active accounts. Don't set this field to select both active and non-active accounts.
       */
      active?: boolean,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only accounts with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "account&#42;2015" will return objects with names like "account June
       * 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search
       * string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AccountsListResponse>;

    /**
     * Updates an existing account. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Account ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Account>;

    /**
     * Updates an existing account.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Account>;
  }

  declare interface dfareporting$AdsResource {
    /**
     * Gets one ad by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Ad ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Ad>;

    /**
     * Inserts a new ad.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Ad>;

    /**
     * Retrieves a list of ads, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only active ads.
       */
      active?: boolean,

      /**
       * Select only ads with this advertiser ID.
       */
      advertiserId?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Select only archived ads.
       */
      archived?: boolean,

      /**
       * Select only ads with these audience segment IDs.
       */
      audienceSegmentIds?: string,

      /**
       * Select only ads with these campaign IDs.
       */
      campaignIds?: string,

      /**
       * Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering
       * either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps.
       * IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
       */
      compatibility?: string,

      /**
       * Select only ads with these creative IDs assigned.
       */
      creativeIds?: string,

      /**
       * Select only ads with these creative optimization configuration IDs.
       */
      creativeOptimizationConfigurationIds?: string,

      /**
       * Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static
       * click trackers. Leave unset to select both.
       */
      dynamicClickTracker?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only ads with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Select only ads with these landing page IDs.
       */
      landingPageIds?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Select only ads with this event tag override ID.
       */
      overriddenEventTagId?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Select only ads with these placement IDs assigned.
       */
      placementIds?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Select only ads whose list targeting expression use these remarketing list IDs.
       */
      remarketingListIds?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "ad&#42;2015" will return objects with names like "ad June 2015", "ad
       * April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a
       * search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
       */
      searchString?: string,

      /**
       * Select only ads with these size IDs.
       */
      sizeIds?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * Select only ads that are SSL-compliant.
       */
      sslCompliant?: boolean,

      /**
       * Select only ads that require SSL.
       */
      sslRequired?: boolean,

      /**
       * Select only ads with these types.
       */
      type?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AdsListResponse>;

    /**
     * Updates an existing ad. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Ad ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Ad>;

    /**
     * Updates an existing ad.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Ad>;
  }

  declare interface dfareporting$AdvertiserGroupsResource {
    /**
     * Deletes an existing advertiser group.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Advertiser group ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets one advertiser group by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Advertiser group ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AdvertiserGroup>;

    /**
     * Inserts a new advertiser group.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AdvertiserGroup>;

    /**
     * Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only advertiser groups with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "advertiser&#42;2015" will return objects with names like "advertiser
       * group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and
       * the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup
       * 2015", or simply "advertisergroup".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AdvertiserGroupsListResponse>;

    /**
     * Updates an existing advertiser group. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Advertiser group ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AdvertiserGroup>;

    /**
     * Updates an existing advertiser group.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AdvertiserGroup>;
  }

  declare interface dfareporting$AdvertisersResource {
    /**
     * Gets one advertiser by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Advertiser ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Advertiser>;

    /**
     * Inserts a new advertiser.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Advertiser>;

    /**
     * Retrieves a list of advertisers, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only advertisers with these advertiser group IDs.
       */
      advertiserGroupIds?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only advertisers with these floodlight configuration IDs.
       */
      floodlightConfigurationIds?: string,

      /**
       * Select only advertisers with these IDs.
       */
      ids?: string,

      /**
       * Select only advertisers which do not belong to any advertiser group.
       */
      includeAdvertisersWithoutGroupsOnly?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Select only advertisers which use another advertiser's floodlight configuration.
       */
      onlyParent?: boolean,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "advertiser&#42;2015" will return objects with names like "advertiser
       * June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the
       * search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * Select only advertisers with the specified status.
       */
      status?: string,

      /**
       * Select only advertisers with these subaccount IDs.
       */
      subaccountId?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$AdvertisersListResponse>;

    /**
     * Updates an existing advertiser. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Advertiser ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Advertiser>;

    /**
     * Updates an existing advertiser.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Advertiser>;
  }

  declare interface dfareporting$BrowsersResource {
    /**
     * Retrieves a list of browsers.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$BrowsersListResponse>;
  }

  declare interface dfareporting$CampaignCreativeAssociationsResource {
    /**
     * Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a
     * default ad does not exist already.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Campaign ID in this association.
       */
      campaignId: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CampaignCreativeAssociation>;

    /**
     * Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Campaign ID in this association.
       */
      campaignId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CampaignCreativeAssociationsListResponse>;
  }

  declare interface dfareporting$CampaignsResource {
    /**
     * Gets one campaign by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Campaign ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Campaign>;

    /**
     * Inserts a new campaign.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Default landing page name for this new campaign. Must be less than 256 characters long.
       */
      defaultLandingPageName: string,

      /**
       * Default landing page URL for this new campaign.
       */
      defaultLandingPageUrl: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Campaign>;

    /**
     * Retrieves a list of campaigns, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only campaigns whose advertisers belong to these advertiser groups.
       */
      advertiserGroupIds?: string,

      /**
       * Select only campaigns that belong to these advertisers.
       */
      advertiserIds?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
       */
      archived?: boolean,

      /**
       * Select only campaigns that have at least one optimization activity.
       */
      atLeastOneOptimizationActivity?: boolean,

      /**
       * Exclude campaigns with these IDs.
       */
      excludedIds?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only campaigns with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Select only campaigns that have overridden this event tag ID.
       */
      overriddenEventTagId?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for campaigns by name or ID. Wildcards (&#42;) are allowed. For example, "campaign&#42;2015" will return campaigns with names like "campaign
       * June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search
       * string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * Select only campaigns that belong to this subaccount.
       */
      subaccountId?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CampaignsListResponse>;

    /**
     * Updates an existing campaign. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Campaign ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Campaign>;

    /**
     * Updates an existing campaign.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Campaign>;
  }

  declare interface dfareporting$ChangeLogsResource {
    /**
     * Gets one change log by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Change log ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ChangeLog>;

    /**
     * Retrieves a list of change logs. This method supports paging.
     */
    list(request: {
      /**
       * Select only change logs with the specified action.
       */
      action?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only change logs with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For
       * example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year,
       * month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
       */
      maxChangeTime?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * Select only change logs whose change time is before the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For
       * example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year,
       * month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
       */
      minChangeTime?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Select only change logs with these object IDs.
       */
      objectIds?: string,

      /**
       * Select only change logs with the specified object type.
       */
      objectType?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Select only change logs whose object ID, user name, old or new values match the search string.
       */
      searchString?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * Select only change logs with these user profile IDs.
       */
      userProfileIds?: string
    }): Request<dfareporting$ChangeLogsListResponse>;
  }

  declare interface dfareporting$CitiesResource {
    /**
     * Retrieves a list of cities, possibly filtered.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Select only cities from these countries.
       */
      countryDartIds?: string,

      /**
       * Select only cities with these DART IDs.
       */
      dartIds?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Select only cities with names starting with this prefix.
       */
      namePrefix?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Select only cities from these regions.
       */
      regionDartIds?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CitiesListResponse>;
  }

  declare interface dfareporting$ConnectionTypesResource {
    /**
     * Gets one connection type by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Connection type ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ConnectionType>;

    /**
     * Retrieves a list of connection types.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ConnectionTypesListResponse>;
  }

  declare interface dfareporting$ContentCategoriesResource {
    /**
     * Deletes an existing content category.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Content category ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets one content category by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Content category ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ContentCategory>;

    /**
     * Inserts a new content category.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ContentCategory>;

    /**
     * Retrieves a list of content categories, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only content categories with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "contentcategory&#42;2015" will return objects with names like
       * "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the
       * start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory",
       * "contentcategory 2015", or simply "contentcategory".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ContentCategoriesListResponse>;

    /**
     * Updates an existing content category. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Content category ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ContentCategory>;

    /**
     * Updates an existing content category.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ContentCategory>;
  }

  declare interface dfareporting$ConversionsResource {
    /**
     * Inserts conversions.
     */
    batchinsert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ConversionsBatchInsertResponse>;

    /**
     * Updates existing conversions.
     */
    batchupdate(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ConversionsBatchUpdateResponse>;
  }

  declare interface dfareporting$CountriesResource {
    /**
     * Gets one country by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Country DART ID.
       */
      dartId: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Country>;

    /**
     * Retrieves a list of countries.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CountriesListResponse>;
  }

  declare interface dfareporting$CreativeAssetsResource {
    /**
     * Inserts a new creative asset.
     */
    insert(request: {
      /**
       * Advertiser ID of this creative. This is a required field.
       */
      advertiserId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeAssetMetadata>;
  }

  declare interface dfareporting$CreativeFieldValuesResource {
    /**
     * Deletes an existing creative field value.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Creative field ID for this creative field value.
       */
      creativeFieldId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Creative Field Value ID
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets one creative field value by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Creative field ID for this creative field value.
       */
      creativeFieldId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Creative Field Value ID
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeFieldValue>;

    /**
     * Inserts a new creative field value.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Creative field ID for this creative field value.
       */
      creativeFieldId: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeFieldValue>;

    /**
     * Retrieves a list of creative field values, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Creative field ID for this creative field value.
       */
      creativeFieldId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only creative field values with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for creative field values by their values. Wildcards (e.g. &#42;) are not allowed.
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeFieldValuesListResponse>;

    /**
     * Updates an existing creative field value. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Creative field ID for this creative field value.
       */
      creativeFieldId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Creative Field Value ID
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeFieldValue>;

    /**
     * Updates an existing creative field value.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Creative field ID for this creative field value.
       */
      creativeFieldId: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeFieldValue>;
  }

  declare interface dfareporting$CreativeFieldsResource {
    /**
     * Deletes an existing creative field.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Creative Field ID
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets one creative field by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Creative Field ID
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeField>;

    /**
     * Inserts a new creative field.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeField>;

    /**
     * Retrieves a list of creative fields, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only creative fields that belong to these advertisers.
       */
      advertiserIds?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only creative fields with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for creative fields by name or ID. Wildcards (&#42;) are allowed. For example, "creativefield&#42;2015" will return creative fields with names
       * like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the
       * start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield",
       * "creativefield 2015", or simply "creativefield".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeFieldsListResponse>;

    /**
     * Updates an existing creative field. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Creative Field ID
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeField>;

    /**
     * Updates an existing creative field.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeField>;
  }

  declare interface dfareporting$CreativeGroupsResource {
    /**
     * Gets one creative group by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Creative group ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeGroup>;

    /**
     * Inserts a new creative group.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeGroup>;

    /**
     * Retrieves a list of creative groups, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only creative groups that belong to these advertisers.
       */
      advertiserIds?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only creative groups that belong to this subgroup.
       */
      groupNumber?: number,

      /**
       * Select only creative groups with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for creative groups by name or ID. Wildcards (&#42;) are allowed. For example, "creativegroup&#42;2015" will return creative groups with names
       * like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the
       * start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup",
       * "creativegroup 2015", or simply "creativegroup".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeGroupsListResponse>;

    /**
     * Updates an existing creative group. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Creative group ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeGroup>;

    /**
     * Updates an existing creative group.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativeGroup>;
  }

  declare interface dfareporting$CreativesResource {
    /**
     * Gets one creative by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Creative ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Creative>;

    /**
     * Inserts a new creative.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Creative>;

    /**
     * Retrieves a list of creatives, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only active creatives. Leave blank to select active and inactive creatives.
       */
      active?: boolean,

      /**
       * Select only creatives with this advertiser ID.
       */
      advertiserId?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Select only archived creatives. Leave blank to select archived and unarchived creatives.
       */
      archived?: boolean,

      /**
       * Select only creatives with this campaign ID.
       */
      campaignId?: string,

      /**
       * Select only in-stream video creatives with these companion IDs.
       */
      companionCreativeIds?: string,

      /**
       * Select only creatives with these creative field IDs.
       */
      creativeFieldIds?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only creatives with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Select only creatives with these rendering IDs.
       */
      renderingIds?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "creative&#42;2015" will return objects with names like "creative June
       * 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search
       * string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
       */
      searchString?: string,

      /**
       * Select only creatives with these size IDs.
       */
      sizeIds?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * Select only creatives corresponding to this Studio creative ID.
       */
      studioCreativeId?: string,

      /**
       * Select only creatives with these creative types.
       */
      types?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CreativesListResponse>;

    /**
     * Updates an existing creative. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Creative ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Creative>;

    /**
     * Updates an existing creative.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Creative>;
  }

  declare interface dfareporting$DimensionValuesResource {
    /**
     * Retrieves list of report dimension values for a list of filters.
     */
    query(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The value of the nextToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA user profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$DimensionValueList>;
  }

  declare interface dfareporting$DirectorySiteContactsResource {
    /**
     * Gets one directory site contact by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Directory site contact ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$DirectorySiteContact>;

    /**
     * Retrieves a list of directory site contacts, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Select only directory site contacts with these directory site IDs. This is a required field.
       */
      directorySiteIds?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only directory site contacts with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name, ID or email. Wildcards (&#42;) are allowed. For example, "directory site contact&#42;2015" will return objects with names
       * like "directory site contact June 2015", "directory site contact April 2015", or simply "directory site contact 2015". Most of the searches also add
       * wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site contact" will match objects with
       * name "my directory site contact", "directory site contact 2015", or simply "directory site contact".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$DirectorySiteContactsListResponse>;
  }

  declare interface dfareporting$DirectorySitesResource {
    /**
     * Gets one directory site by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Directory site ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$DirectorySite>;

    /**
     * Inserts a new directory site.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$DirectorySite>;

    /**
     * Retrieves a list of directory sites, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * This search filter is no longer supported and will have no effect on the results returned.
       */
      acceptsInStreamVideoPlacements?: boolean,

      /**
       * This search filter is no longer supported and will have no effect on the results returned.
       */
      acceptsInterstitialPlacements?: boolean,

      /**
       * Select only directory sites that accept publisher paid placements. This field can be left blank.
       */
      acceptsPublisherPaidPlacements?: boolean,

      /**
       * Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
       */
      active?: boolean,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Select only directory sites with this country ID.
       */
      countryId?: string,

      /**
       * Select only directory sites with this DFP network code.
       */
      dfpNetworkCode?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only directory sites with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Select only directory sites with this parent ID.
       */
      parentId?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name, ID or URL. Wildcards (&#42;) are allowed. For example, "directory site&#42;2015" will return objects with names like
       * "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the
       * start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory
       * site 2015" or simply, "directory site".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$DirectorySitesListResponse>;
  }

  declare interface dfareporting$DynamicTargetingKeysResource {
    /**
     * Deletes an existing dynamic targeting key.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are
       * converted to lowercase.
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * ID of the object of this dynamic targeting key. This is a required field.
       */
      objectId: string,

      /**
       * Type of the object of this dynamic targeting key. This is a required field.
       */
      objectType: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or
     * placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$DynamicTargetingKey>;

    /**
     * Retrieves a list of dynamic targeting keys.
     */
    list(request: {
      /**
       * Select only dynamic targeting keys whose object has this advertiser ID.
       */
      advertiserId?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Select only dynamic targeting keys exactly matching these names.
       */
      names?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Select only dynamic targeting keys with this object ID.
       */
      objectId?: string,

      /**
       * Select only dynamic targeting keys with this object type.
       */
      objectType?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$DynamicTargetingKeysListResponse>;
  }

  declare interface dfareporting$EventTagsResource {
    /**
     * Deletes an existing event tag.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Event tag ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets one event tag by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Event tag ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$EventTag>;

    /**
     * Inserts a new event tag.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$EventTag>;

    /**
     * Retrieves a list of event tags, possibly filtered.
     */
    list(request: {
      /**
       * Select only event tags that belong to this ad.
       */
      adId?: string,

      /**
       * Select only event tags that belong to this advertiser.
       */
      advertiserId?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Select only event tags that belong to this campaign.
       */
      campaignId?: string,

      /**
       * Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent
       * campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the
       * enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
       */
      definitionsOnly?: boolean,

      /**
       * Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true,
       * only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or
       * specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
       */
      enabled?: boolean,

      /**
       * Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party
       * JavaScript URL, or a third-party click-through URL for either impression or click tracking.
       */
      eventTagTypes?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only event tags with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "eventtag&#42;2015" will return objects with names like "eventtag June
       * 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search
       * string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$EventTagsListResponse>;

    /**
     * Updates an existing event tag. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Event tag ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$EventTag>;

    /**
     * Updates an existing event tag.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$EventTag>;
  }

  declare interface dfareporting$FilesResource {
    /**
     * Retrieves a report file by its report ID and file ID. This method supports media download.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the report file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the report.
       */
      reportId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$File>;

    /**
     * Lists files for a user profile.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The value of the nextToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The scope that defines which results are returned.
       */
      scope?: string,

      /**
       * The field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FileList>;

    /**
     * Retrieves a report file. This method supports media download.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the report file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the report.
       */
      reportId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$File>;

    /**
     * Lists files for a report.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The value of the nextToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the parent report.
       */
      reportId: string,

      /**
       * The field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FileList>;
  }

  declare interface dfareporting$FloodlightActivitiesResource {
    /**
     * Deletes an existing floodlight activity.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Floodlight activity ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Generates a tag for a floodlight activity.
     */
    generatetag(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Floodlight activity ID for which we want to generate a tag.
       */
      floodlightActivityId?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightActivitiesGenerateTagResponse>;

    /**
     * Gets one floodlight activity by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Floodlight activity ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightActivity>;

    /**
     * Inserts a new floodlight activity.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightActivity>;

    /**
     * Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty
       * result.
       */
      advertiserId?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only floodlight activities with the specified floodlight activity group IDs.
       */
      floodlightActivityGroupIds?: string,

      /**
       * Select only floodlight activities with the specified floodlight activity group name.
       */
      floodlightActivityGroupName?: string,

      /**
       * Select only floodlight activities with the specified floodlight activity group tag string.
       */
      floodlightActivityGroupTagString?: string,

      /**
       * Select only floodlight activities with the specified floodlight activity group type.
       */
      floodlightActivityGroupType?: string,

      /**
       * Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId
       * for a non-empty result.
       */
      floodlightConfigurationId?: string,

      /**
       * Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "floodlightactivity&#42;2015" will return objects with names like
       * "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards
       * implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my
       * floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * Select only floodlight activities with the specified tag string.
       */
      tagString?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightActivitiesListResponse>;

    /**
     * Updates an existing floodlight activity. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Floodlight activity ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightActivity>;

    /**
     * Updates an existing floodlight activity.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightActivity>;
  }

  declare interface dfareporting$FloodlightActivityGroupsResource {
    /**
     * Gets one floodlight activity group by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Floodlight activity Group ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightActivityGroup>;

    /**
     * Inserts a new floodlight activity group.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightActivityGroup>;

    /**
     * Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty
       * result.
       */
      advertiserId?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId
       * for a non-empty result.
       */
      floodlightConfigurationId?: string,

      /**
       * Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "floodlightactivitygroup&#42;2015" will return objects with names like
       * "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add
       * wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with
       * name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * Select only floodlight activity groups with the specified floodlight activity group type.
       */
      type?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightActivityGroupsListResponse>;

    /**
     * Updates an existing floodlight activity group. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Floodlight activity Group ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightActivityGroup>;

    /**
     * Updates an existing floodlight activity group.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightActivityGroup>;
  }

  declare interface dfareporting$FloodlightConfigurationsResource {
    /**
     * Gets one floodlight configuration by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Floodlight configuration ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightConfiguration>;

    /**
     * Retrieves a list of floodlight configurations, possibly filtered.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightConfigurationsListResponse>;

    /**
     * Updates an existing floodlight configuration. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Floodlight configuration ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightConfiguration>;

    /**
     * Updates an existing floodlight configuration.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$FloodlightConfiguration>;
  }

  declare interface dfareporting$InventoryItemsResource {
    /**
     * Gets one inventory item by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Inventory item ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Project ID for order documents.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$InventoryItem>;

    /**
     * Retrieves a list of inventory items, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only inventory items with these IDs.
       */
      ids?: string,

      /**
       * Select only inventory items that are in plan.
       */
      inPlan?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Select only inventory items that belong to specified orders.
       */
      orderId?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Project ID for order documents.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Select only inventory items that are associated with these sites.
       */
      siteId?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * Select only inventory items with this type.
       */
      type?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$InventoryItemsListResponse>;
  }

  declare interface dfareporting$LandingPagesResource {
    /**
     * Deletes an existing campaign landing page.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Landing page campaign ID.
       */
      campaignId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Landing page ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets one campaign landing page by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Landing page campaign ID.
       */
      campaignId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Landing page ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$LandingPage>;

    /**
     * Inserts a new landing page for the specified campaign.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Landing page campaign ID.
       */
      campaignId: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$LandingPage>;

    /**
     * Retrieves the list of landing pages for the specified campaign.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Landing page campaign ID.
       */
      campaignId: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$LandingPagesListResponse>;

    /**
     * Updates an existing campaign landing page. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Landing page campaign ID.
       */
      campaignId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Landing page ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$LandingPage>;

    /**
     * Updates an existing campaign landing page.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Landing page campaign ID.
       */
      campaignId: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$LandingPage>;
  }

  declare interface dfareporting$LanguagesResource {
    /**
     * Retrieves a list of languages.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$LanguagesListResponse>;
  }

  declare interface dfareporting$MetrosResource {
    /**
     * Retrieves a list of metros.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$MetrosListResponse>;
  }

  declare interface dfareporting$MobileCarriersResource {
    /**
     * Gets one mobile carrier by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Mobile carrier ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$MobileCarrier>;

    /**
     * Retrieves a list of mobile carriers.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$MobileCarriersListResponse>;
  }

  declare interface dfareporting$OperatingSystemVersionsResource {
    /**
     * Gets one operating system version by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Operating system version ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$OperatingSystemVersion>;

    /**
     * Retrieves a list of operating system versions.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$OperatingSystemVersionsListResponse>;
  }

  declare interface dfareporting$OperatingSystemsResource {
    /**
     * Gets one operating system by DART ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Operating system DART ID.
       */
      dartId: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$OperatingSystem>;

    /**
     * Retrieves a list of operating systems.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$OperatingSystemsListResponse>;
  }

  declare interface dfareporting$OrderDocumentsResource {
    /**
     * Gets one order document by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Order document ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Project ID for order documents.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$OrderDocument>;

    /**
     * Retrieves a list of order documents, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Select only order documents that have been approved by at least one user.
       */
      approved?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only order documents with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Select only order documents for specified orders.
       */
      orderId?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Project ID for order documents.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for order documents by name or ID. Wildcards (&#42;) are allowed. For example, "orderdocument&#42;2015" will return order documents with names
       * like "orderdocument June 2015", "orderdocument April 2015", or simply "orderdocument 2015". Most of the searches also add wildcards implicitly at the
       * start and the end of the search string. For example, a search string of "orderdocument" will match order documents with name "my orderdocument",
       * "orderdocument 2015", or simply "orderdocument".
       */
      searchString?: string,

      /**
       * Select only order documents that are associated with these sites.
       */
      siteId?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$OrderDocumentsListResponse>;
  }

  declare interface dfareporting$OrdersResource {
    /**
     * Gets one order by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Order ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Project ID for orders.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Order>;

    /**
     * Retrieves a list of orders, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only orders with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Project ID for orders.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for orders by name or ID. Wildcards (&#42;) are allowed. For example, "order&#42;2015" will return orders with names like "order June 2015",
       * "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For
       * example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
       */
      searchString?: string,

      /**
       * Select only orders that are associated with these site IDs.
       */
      siteId?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$OrdersListResponse>;
  }

  declare interface dfareporting$PlacementGroupsResource {
    /**
     * Gets one placement group by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Placement group ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementGroup>;

    /**
     * Inserts a new placement group.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementGroup>;

    /**
     * Retrieves a list of placement groups, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only placement groups that belong to these advertisers.
       */
      advertiserIds?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Select only archived placements. Don't set this field to select both archived and non-archived placements.
       */
      archived?: boolean,

      /**
       * Select only placement groups that belong to these campaigns.
       */
      campaignIds?: string,

      /**
       * Select only placement groups that are associated with these content categories.
       */
      contentCategoryIds?: string,

      /**
       * Select only placement groups that are associated with these directory sites.
       */
      directorySiteIds?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only placement groups with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
       */
      maxEndDate?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
       */
      maxStartDate?: string,

      /**
       * Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
       */
      minEndDate?: string,

      /**
       * Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
       */
      minStartDate?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group
       * of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at
       * the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
       */
      placementGroupType?: string,

      /**
       * Select only placement groups that are associated with these placement strategies.
       */
      placementStrategyIds?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Select only placement groups with these pricing types.
       */
      pricingTypes?: string,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for placement groups by name or ID. Wildcards (&#42;) are allowed. For example, "placement&#42;2015" will return placement groups with names
       * like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the
       * start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup",
       * "placementgroup 2015", or simply "placementgroup".
       */
      searchString?: string,

      /**
       * Select only placement groups that are associated with these sites.
       */
      siteIds?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementGroupsListResponse>;

    /**
     * Updates an existing placement group. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Placement group ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementGroup>;

    /**
     * Updates an existing placement group.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementGroup>;
  }

  declare interface dfareporting$PlacementStrategiesResource {
    /**
     * Deletes an existing placement strategy.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Placement strategy ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets one placement strategy by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Placement strategy ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementStrategy>;

    /**
     * Inserts a new placement strategy.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementStrategy>;

    /**
     * Retrieves a list of placement strategies, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only placement strategies with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "placementstrategy&#42;2015" will return objects with names like
       * "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly
       * at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy",
       * "placementstrategy 2015", or simply "placementstrategy".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementStrategiesListResponse>;

    /**
     * Updates an existing placement strategy. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Placement strategy ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementStrategy>;

    /**
     * Updates an existing placement strategy.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementStrategy>;
  }

  declare interface dfareporting$PlacementsResource {
    /**
     * Generates tags for a placement.
     */
    generatetags(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Generate placements belonging to this campaign. This is a required field.
       */
      campaignId?: string,

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
       * Generate tags for these placements.
       */
      placementIds?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Tag formats to generate for these placements.
       *
       * Note: PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.
       */
      tagFormats?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementsGenerateTagsResponse>;

    /**
     * Gets one placement by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Placement ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Placement>;

    /**
     * Inserts a new placement.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Placement>;

    /**
     * Retrieves a list of placements, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only placements that belong to these advertisers.
       */
      advertiserIds?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Select only archived placements. Don't set this field to select both archived and non-archived placements.
       */
      archived?: boolean,

      /**
       * Select only placements that belong to these campaigns.
       */
      campaignIds?: string,

      /**
       * Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on
       * mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to
       * rendering in in-stream video ads developed with the VAST standard.
       */
      compatibilities?: string,

      /**
       * Select only placements that are associated with these content categories.
       */
      contentCategoryIds?: string,

      /**
       * Select only placements that are associated with these directory sites.
       */
      directorySiteIds?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only placements that belong to these placement groups.
       */
      groupIds?: string,

      /**
       * Select only placements with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
       */
      maxEndDate?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
       */
      maxStartDate?: string,

      /**
       * Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
       */
      minEndDate?: string,

      /**
       * Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
       */
      minStartDate?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Select only placements with this payment source.
       */
      paymentSource?: string,

      /**
       * Select only placements that are associated with these placement strategies.
       */
      placementStrategyIds?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Select only placements with these pricing types.
       */
      pricingTypes?: string,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for placements by name or ID. Wildcards (&#42;) are allowed. For example, "placement&#42;2015" will return placements with names like
       * "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end
       * of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply
       * "placement".
       */
      searchString?: string,

      /**
       * Select only placements that are associated with these sites.
       */
      siteIds?: string,

      /**
       * Select only placements that are associated with these sizes.
       */
      sizeIds?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlacementsListResponse>;

    /**
     * Updates an existing placement. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Placement ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Placement>;

    /**
     * Updates an existing placement.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Placement>;
  }

  declare interface dfareporting$PlatformTypesResource {
    /**
     * Gets one platform type by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Platform type ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlatformType>;

    /**
     * Retrieves a list of platform types.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PlatformTypesListResponse>;
  }

  declare interface dfareporting$PostalCodesResource {
    /**
     * Gets one postal code by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Postal code ID.
       */
      code: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PostalCode>;

    /**
     * Retrieves a list of postal codes.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$PostalCodesListResponse>;
  }

  declare interface dfareporting$ProjectsResource {
    /**
     * Gets one project by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Project ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Project>;

    /**
     * Retrieves a list of projects, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only projects with these advertiser IDs.
       */
      advertiserIds?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only projects with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for projects by name or ID. Wildcards (&#42;) are allowed. For example, "project&#42;2015" will return projects with names like "project June
       * 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search
       * string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ProjectsListResponse>;
  }

  declare interface dfareporting$RegionsResource {
    /**
     * Retrieves a list of regions.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$RegionsListResponse>;
  }

  declare interface dfareporting$RemarketingListSharesResource {
    /**
     * Gets one remarketing list share by remarketing list ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Remarketing list ID.
       */
      remarketingListId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$RemarketingListShare>;

    /**
     * Updates an existing remarketing list share. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Remarketing list ID.
       */
      remarketingListId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$RemarketingListShare>;

    /**
     * Updates an existing remarketing list share.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$RemarketingListShare>;
  }

  declare interface dfareporting$RemarketingListsResource {
    /**
     * Gets one remarketing list by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Remarketing list ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$RemarketingList>;

    /**
     * Inserts a new remarketing list.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$RemarketingList>;

    /**
     * Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only active or only inactive remarketing lists.
       */
      active?: boolean,

      /**
       * Select only remarketing lists owned by this advertiser.
       */
      advertiserId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only remarketing lists that have this floodlight activity ID.
       */
      floodlightActivityId?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "remarketing list&#42;2015" will return objects with names like
       * "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at
       * the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list",
       * "remarketing list 2015", or simply "remarketing list".
       */
      name?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$RemarketingListsListResponse>;

    /**
     * Updates an existing remarketing list. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Remarketing list ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$RemarketingList>;

    /**
     * Updates an existing remarketing list.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$RemarketingList>;
  }

  declare interface dfareporting$CompatibleFieldsResource {
    /**
     * Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input
     * report and user permissions.
     */
    query(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA user profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$CompatibleFields>;
  }

  declare interface dfareporting$ReportsResource {
    /**
     * Deletes a report by its ID.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA user profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the report.
       */
      reportId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Retrieves a report by its ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA user profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the report.
       */
      reportId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Report>;

    /**
     * Creates a report.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA user profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Report>;

    /**
     * Retrieves list of reports.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The value of the nextToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA user profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The scope that defines which results are returned.
       */
      scope?: string,

      /**
       * The field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$ReportList>;

    /**
     * Updates a report. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA user profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the report.
       */
      reportId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Report>;

    /**
     * Runs a report.
     */
    run(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the report.
       */
      reportId: string,

      /**
       * If set and true, tries to run the report synchronously.
       */
      synchronous?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$File>;

    /**
     * Updates a report.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The DFA user profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the report.
       */
      reportId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Report>;
    compatibleFields: dfareporting$CompatibleFieldsResource;
    client$files: dfareporting$FilesResource;
  }

  declare interface dfareporting$SitesResource {
    /**
     * Gets one site by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Site ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Site>;

    /**
     * Inserts a new site.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Site>;

    /**
     * Retrieves a list of sites, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * This search filter is no longer supported and will have no effect on the results returned.
       */
      acceptsInStreamVideoPlacements?: boolean,

      /**
       * This search filter is no longer supported and will have no effect on the results returned.
       */
      acceptsInterstitialPlacements?: boolean,

      /**
       * Select only sites that accept publisher paid placements.
       */
      acceptsPublisherPaidPlacements?: boolean,

      /**
       * Select only AdWords sites.
       */
      adWordsSite?: boolean,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Select only approved sites.
       */
      approved?: boolean,

      /**
       * Select only sites with these campaign IDs.
       */
      campaignIds?: string,

      /**
       * Select only sites with these directory site IDs.
       */
      directorySiteIds?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only sites with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name, ID or keyName. Wildcards (&#42;) are allowed. For example, "site&#42;2015" will return objects with names like "site June
       * 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For
       * example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * Select only sites with this subaccount ID.
       */
      subaccountId?: string,

      /**
       * Select only sites that have not been mapped to a directory site.
       */
      unmappedSite?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$SitesListResponse>;

    /**
     * Updates an existing site. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Site ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Site>;

    /**
     * Updates an existing site.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Site>;
  }

  declare interface dfareporting$SizesResource {
    /**
     * Gets one size by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Size ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Size>;

    /**
     * Inserts a new size.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Size>;

    /**
     * Retrieves a list of sizes, possibly filtered.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only sizes with this height.
       */
      height?: number,

      /**
       * Select only IAB standard sizes.
       */
      iabStandard?: boolean,

      /**
       * Select only sizes with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * Select only sizes with this width.
       */
      width?: number
    }): Request<dfareporting$SizesListResponse>;
  }

  declare interface dfareporting$SubaccountsResource {
    /**
     * Gets one subaccount by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Subaccount ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Subaccount>;

    /**
     * Inserts a new subaccount.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Subaccount>;

    /**
     * Gets a list of subaccounts, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only subaccounts with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "subaccount&#42;2015" will return objects with names like "subaccount
       * June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the
       * search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$SubaccountsListResponse>;

    /**
     * Updates an existing subaccount. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Subaccount ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Subaccount>;

    /**
     * Updates an existing subaccount.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$Subaccount>;
  }

  declare interface dfareporting$TargetableRemarketingListsResource {
    /**
     * Gets one remarketing list by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Remarketing list ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$TargetableRemarketingList>;

    /**
     * Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only active or only inactive targetable remarketing lists.
       */
      active?: boolean,

      /**
       * Select only targetable remarketing lists targetable by these advertisers.
       */
      advertiserId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "remarketing list&#42;2015" will return objects with names like
       * "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at
       * the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list",
       * "remarketing list 2015", or simply "remarketing list".
       */
      name?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$TargetableRemarketingListsListResponse>;
  }

  declare interface dfareporting$TargetingTemplatesResource {
    /**
     * Gets one targeting template by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Targeting template ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$TargetingTemplate>;

    /**
     * Inserts a new targeting template.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$TargetingTemplate>;

    /**
     * Retrieves a list of targeting templates, optionally filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only targeting templates with this advertiser ID.
       */
      advertiserId?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only targeting templates with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "template&#42;2015" will return objects with names like "template June
       * 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search
       * string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$TargetingTemplatesListResponse>;

    /**
     * Updates an existing targeting template. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Targeting template ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$TargetingTemplate>;

    /**
     * Updates an existing targeting template.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$TargetingTemplate>;
  }

  declare interface dfareporting$UserProfilesResource {
    /**
     * Gets one user profile by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The user profile ID.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$UserProfile>;

    /**
     * Retrieves list of user profiles for a user.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$UserProfileList>;
  }

  declare interface dfareporting$UserRolePermissionGroupsResource {
    /**
     * Gets one user role permission group by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * User role permission group ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$UserRolePermissionGroup>;

    /**
     * Gets a list of all supported user role permission groups.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$UserRolePermissionGroupsListResponse>;
  }

  declare interface dfareporting$UserRolePermissionsResource {
    /**
     * Gets one user role permission by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * User role permission ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$UserRolePermission>;

    /**
     * Gets a list of user role permissions, possibly filtered.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only user role permissions with these IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$UserRolePermissionsListResponse>;
  }

  declare interface dfareporting$UserRolesResource {
    /**
     * Deletes an existing user role.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * User role ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets one user role by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * User role ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$UserRole>;

    /**
     * Inserts a new user role.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$UserRole>;

    /**
     * Retrieves a list of user roles, possibly filtered. This method supports paging.
     */
    list(request: {
      /**
       * Select only account level user roles not associated with any specific subaccount.
       */
      accountUserRoleOnly?: boolean,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Select only user roles with the specified IDs.
       */
      ids?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Value of the nextPageToken from the previous result page.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Allows searching for objects by name or ID. Wildcards (&#42;) are allowed. For example, "userrole&#42;2015" will return objects with names like "userrole June
       * 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search
       * string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
       */
      searchString?: string,

      /**
       * Field by which to sort the list.
       */
      sortField?: string,

      /**
       * Order of sorted results.
       */
      sortOrder?: string,

      /**
       * Select only user roles that belong to this subaccount.
       */
      subaccountId?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$UserRolesListResponse>;

    /**
     * Updates an existing user role. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * User role ID.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$UserRole>;

    /**
     * Updates an existing user role.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$UserRole>;
  }

  declare interface dfareporting$VideoFormatsResource {
    /**
     * Gets one video format by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Video format ID.
       */
      id: number,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$VideoFormat>;

    /**
     * Lists available video formats.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * User profile ID associated with this request.
       */
      profileId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<dfareporting$VideoFormatsListResponse>;
  }
}
