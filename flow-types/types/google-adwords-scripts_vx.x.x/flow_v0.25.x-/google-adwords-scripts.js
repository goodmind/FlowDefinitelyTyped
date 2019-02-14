declare module "google-adwords-scripts" {
  declare interface AdWordsEntity {
    getEntityType?: () => string;
  }
  declare interface AdWordsIterator<E> {
    hasNext(): boolean;
    next(): E;
    totalNumEntities(): number;
  }
  declare interface AdWordsSelector<E> {
    get(): AdWordsIterator<E>;
    withCondition(condition: string): AdWordsSelector<E>;
    withIds(ids: number[][] | number[]): AdWordsSelector<E>;
    forDateRange(dateRange: string): AdWordsSelector<E>;
    forDateRange(
      dateFrom: AdWordsDate | string,
      dateTo: AdWordsDate | string
    ): AdWordsSelector<E>;
    orderBy(orderBy: string): AdWordsSelector<E>;
    withLimit(limit: number): AdWordsSelector<E>;
  }
  declare interface AdWordsBuilder<E> {
    build(): AdWordsOperation<E>;
  }
  declare interface AdWordsOperation<E> {
    getErrors(): string[];
    getResult(): E;
    isSuccessful(): boolean;
  }
  declare interface AdWordsStats {
    getAverageCpc(): number;
    getAverageCpm(): number;
    getAverageCpv(): number;
    getAveragePageviews(): number;
    getAveragePosition(): number;
    getAverageTimeOnSite(): number;
    getBounceRage(): number;
    getClicks(): number;
    getConversionRate(): number;
    getConversions(): number;
    getCost(): number;
    getCtr(): number;
    getImpressions(): number;
    getViewRate(): number;
    getViews(): number;
  }
  declare interface AdWordsUrls {
    getCustomParameters(): {};
    getTrackingTemplate(): string;
  }
  declare interface AdWordsBidding {
    getStrategy(): BiddingStrategy;
    getStrategySource(): BiddingStrategySource;
    getStrategyType(): string;
  }
  declare interface AdWordsTargeting<A, E> {
    audiences(): AdWordsSelector<A>;
    exculdedAudiences(): AdWordsSelector<E>;
  }
  declare type AdCustomizerItem = {
    clearTargetAdGroup(): void,
    clearTargetCampaign(): void,
    clearTargetKeyword(): void,
    getAttributeValue(name: string): number | string,
    getAttributeValues(): {},
    getId(): number,
    getTargetAdGroupName(): string,
    getTargetCampaignName(): string,
    getTargetKeywordText(): string,
    remove(): void,
    setAttributeValue(name: string, value: string | number): void,
    setAttributeValues(attributeValues: {}): void,
    setTargetAdGroup(campaignName: string, adGroupName: string): void,
    setTargetCampaign(campaignName: string): void,
    setTargetKeyword(keyword?: string): void
  } & AdWordsEntity &
    hasMobilePreferred &
    hasStartAndEndDate &
    hasSchedules;

  declare type AdCustomizerItemBuilder<AdCustomizerItem> = {
    withAttributeValue(
      name: string,
      value: {}
    ): AdCustomizerItemBuilder<AdCustomizerItem>,
    withAttributeValues(attributeValues: {}): AdCustomizerItemBuilder<AdCustomizerItem>,
    withTargetAdGroup(
      campaignName: string,
      adGroup: string
    ): AdCustomizerItemBuilder<AdCustomizerItem>,
    withTargetCampaign(
      campaignName: string
    ): AdCustomizerItemBuilder<AdCustomizerItem>,
    withTargetKeyword(
      keyword: string
    ): AdCustomizerItemBuilder<AdCustomizerItem>
  } & AdWordsBuilder<AdCustomizerItem> &
    hasMobilePreferredBuilder<AdCustomizerItemBuilder<AdCustomizerItem>> &
    hasSchedulesBuilder<AdCustomizerItemBuilder<AdCustomizerItem>> &
    hasStartAndEndDateBuilder<AdCustomizerItemBuilder<AdCustomizerItem>>;

  declare type AdCustomizerSource = {
    adCustomizerItemBuilder(): AdCustomizerItemBuilder<AdCustomizerItem>,
    getAttributes(): {},
    getName(): string,
    items(): AdWordsSelector<AdCustomizerItem>
  } & AdWordsEntity;

  declare type AdCustomizerSourceBuilder<AdCustomizerSource> = {
    addAttribute(
      name: string,
      type: string
    ): AdCustomizerSourceBuilder<AdCustomizerSource>,
    addAttributes(attributes: {}): AdCustomizerSourceBuilder<AdCustomizerSource>,
    withName(name: string): AdCustomizerSourceBuilder<AdCustomizerSource>
  } & AdWordsBuilder<AdCustomizerSource>;

  declare interface AccountExtensions {
    callouts(): AdWordsSelector<Callout>;
    message(): AdWordsSelector<Message>;
    mobileApps(): AdWordsSelector<MobileApp>;
    reviews(): AdWordsSelector<Review>;
    sitelinks(): AdWordsSelector<Sitelink>;
    snippets(): AdWordsSelector<Snippet>;
  }
  declare type AdGroupExtensions = {
    phoneNumbers(): AdWordsSelector<PhoneNumber>
  } & AccountExtensions;

  declare type CampaignExtensions = {
    phoneNumbers(): AdWordsSelector<PhoneNumber>
  } & AccountExtensions;

  declare type AdWordsAdExtensions = {
    newCalloutBuilder(): CalloutBuilder<Callout>,
    newMessageBuilder(): MessageBuilder<Message>,
    newMobileAppBuilder(): MobileAppBuilder<MobileApp>,
    newPhoneNumberBuilder(): PhoneNumberBuilder<PhoneNumber>,
    newReviewBuilder(): ReviewBuilder<Review>,
    newSitelinkBuilder(): SitelinkBuilder<Sitelink>,
    newSnippetBuilder(): SnippetBuilder<Snippet>
  } & AdGroupExtensions;

  declare type Callout = {
    getId(): number,
    getText(): string,
    setText(text: string): void
  } & AdWordsEntity &
    hasMobilePreferred &
    hasStartAndEndDate &
    hasSchedules &
    hasStats &
    isAdGroupChild;

  declare type CalloutBuilder<Callout> = {
    withText(text: string): CalloutBuilder<Callout>
  } & AdWordsBuilder<Callout> &
    hasMobilePreferredBuilder<CalloutBuilder<Callout>> &
    hasSchedulesBuilder<CalloutBuilder<Callout>> &
    hasStartAndEndDateBuilder<CalloutBuilder<Callout>>;

  declare type Message = {
    getBusinessName(): string,
    getCountryCode(): string,
    getExtensionText(): string,
    getId(): number,
    getMessageText(): string,
    getPhoneNumber(): string,
    setBusinessName(businessName: string): void,
    setCountryCode(countryCode: string): void,
    setExtensionText(extensionText: string): void,
    setMessageText(messageText: string): void,
    setPhoneNumber(phoneNumber: string): void
  } & AdWordsEntity &
    hasMobilePreferred &
    hasStartAndEndDate &
    hasSchedules &
    hasStats &
    isAdGroupChild;

  declare type MessageBuilder<Message> = {
    withBusinessName(businessName: string): MessageBuilder<Message>,
    withCountryCode(countryCode: string): MessageBuilder<Message>,
    withExtensionText(extensionText: string): MessageBuilder<Message>,
    withMessageText(messageText: string): MessageBuilder<Message>,
    withPhoneNumber(phoneNumber: string): MessageBuilder<Message>
  } & AdWordsBuilder<Message> &
    hasMobilePreferredBuilder<MessageBuilder<Message>> &
    hasStartAndEndDateBuilder<MessageBuilder<Message>> &
    hasSchedulesBuilder<MessageBuilder<Message>>;

  declare type MobileApp = {
    clearLinkUrl(): void,
    getAppId(): string,
    getId(): number,
    getLinkText(): string,
    getStore(): AppStore,
    setAppId(appId: string): void,
    setLinkText(linkText: string): void,
    setStore(): AppStore,
    urls(): MobileAppUrls
  } & AdWordsEntity &
    hasMobilePreferred &
    hasStartAndEndDate &
    hasSchedules &
    hasStats &
    isAdGroupChild;

  declare type MobileAppUrls = {
    clearMobileFinalUrl(): void,
    clearTrackingTemplate(): void
  } & AdWordsUrls &
    hasGetFinalUrl &
    hasSetFinalUrl &
    hasSetTrackingTemplate;

  declare type MobileAppBuilder<MobileApp> = {
    withAppId(appId: string): MobileAppBuilder<MobileApp>,
    withLinkText(linkText: string): MobileAppBuilder<MobileApp>,
    withStore(store: AppStore): MobileAppBuilder<MobileApp>
  } & AdWordsBuilder<MobileApp> &
    hasMobilePreferredBuilder<MobileAppBuilder<MobileApp>> &
    hasStartAndEndDateBuilder<MobileAppBuilder<MobileApp>> &
    hasSchedulesBuilder<MobileAppBuilder<MobileApp>> &
    hasTrackingTemplateBuilder<MobileAppBuilder<MobileApp>> &
    hasFinalUrlBuilder<MobileAppBuilder<MobileApp>>;

  declare type PhoneNumber = {
    getCountry(): string,
    getId(): number,
    getPhoneNumber(): string,
    setCountry(country: string): void,
    setPhoneNumber(phoneNumber: string): void
  } & AdWordsEntity &
    hasMobilePreferred &
    hasSchedules &
    hasStartAndEndDate &
    hasStats &
    isAdGroupChild;

  declare type PhoneNumberBuilder<PhoneNumber> = {
    withCountry(country: string): PhoneNumberBuilder<PhoneNumber>,
    withPhoneNumber(phoneNumber: string): PhoneNumberBuilder<PhoneNumber>
  } & AdWordsBuilder<PhoneNumber> &
    hasMobilePreferredBuilder<PhoneNumberBuilder<PhoneNumber>> &
    hasStartAndEndDateBuilder<PhoneNumberBuilder<PhoneNumber>> &
    hasSchedulesBuilder<PhoneNumberBuilder<PhoneNumber>>;

  declare type Review = {
    getId(): number,
    getSourceName(): string,
    getSourceUrl(): string,
    getText(): string,
    isExactlyQuoted(): boolean,
    setExactlyQuoted(isExactlyQuoted: boolean): void,
    setSourceName(sourceName: string): void,
    setSourceUrl(sourceUrl: string): void,
    setText(text: string): void
  } & AdWordsEntity &
    hasMobilePreferred &
    hasSchedules &
    hasStartAndEndDate &
    hasStats &
    isAdGroupChild;

  declare type ReviewBuilder<Review> = {
    withExactlyQuoted(exactlyQuoted: boolean): ReviewBuilder<Review>,
    withSourceName(sourceName: string): ReviewBuilder<Review>,
    withSourceUrl(sourceUrl: string): ReviewBuilder<Review>,
    withText(text: string): ReviewBuilder<Review>
  } & AdWordsBuilder<Review> &
    hasMobilePreferredBuilder<ReviewBuilder<Review>> &
    hasStartAndEndDateBuilder<ReviewBuilder<Review>> &
    hasSchedulesBuilder<ReviewBuilder<Review>>;

  declare type Sitelink = {
    clearDescription1(): void,
    clearDescription2(): void,
    clearLinkUrl(): void,
    getDescription1(): string,
    getDescription2(): string,
    getId(): number,
    getLinkText(): string,
    setDescription1(description1: string): void,
    setDescription2(description2: string): void,
    setLinkText(linkText: string): void,
    urls(): SitelinkUrls
  } & AdWordsEntity &
    hasMobilePreferred &
    hasSchedules &
    hasStartAndEndDate &
    hasStats &
    isAdGroupChild;

  declare type SitelinkUrls = {
    clearMobileFinalUrl(): void
  } & AdWordsUrls &
    hasSetTrackingTemplate &
    hasGetFinalUrl &
    hasSetFinalUrl;

  declare type SitelinkBuilder<Sitelink> = {
    withDescription1(description1: string): SitelinkBuilder<Sitelink>,
    withDescription2(description2: string): SitelinkBuilder<Sitelink>,
    withLinkText(linkText: string): SitelinkBuilder<Sitelink>
  } & AdWordsBuilder<Sitelink> &
    hasMobilePreferredBuilder<SitelinkBuilder<Sitelink>> &
    hasStartAndEndDateBuilder<SitelinkBuilder<Sitelink>> &
    hasSchedulesBuilder<SitelinkBuilder<Sitelink>> &
    hasTrackingTemplateBuilder<SitelinkBuilder<Sitelink>> &
    hasFinalUrlBuilder<SitelinkBuilder<Sitelink>>;

  declare type Snippet = {
    getHeader(): string,
    getId(): number,
    getValues(): string[],
    setHeader(header: string): void,
    setValues(values: string[]): void
  } & AdWordsEntity &
    hasMobilePreferred &
    hasSchedules &
    hasStartAndEndDate &
    hasStats &
    isAdGroupChild;

  declare type SnippetBuilder<Snippet> = {
    withHeader(header: string): SnippetBuilder<Snippet>,
    withValues(values: string[]): SnippetBuilder<Snippet>
  } & AdWordsBuilder<Snippet> &
    hasMobilePreferredBuilder<SnippetBuilder<Snippet>> &
    hasStartAndEndDateBuilder<SnippetBuilder<Snippet>> &
    hasSchedulesBuilder<SnippetBuilder<Snippet>>;

  declare type AdGroup = {
    adParams(): AdWordsSelector<AdParam>,
    ads(): AdWordsSelector<Ad>,
    bidding(): AdGroupBidding,
    clearNegativeKeyword(keywordText: string): void,
    devices(): AdGroupDevices,
    display(): AdGroupDisplay,
    extensions(): AdGroupExtensions,
    getId(): number,
    getName(): string,
    isRemoved(): boolean,
    keywords(): AdWordsSelector<Keyword>,
    negativeKeywords(): AdWordsSelector<NegativeKeyword>,
    newAd(): AdBuilderSpace,
    newKeywordBuilder(): KeywordBuilder<Keyword>,
    setName(name: string): void,
    targeting(): AdGroupTargeting<
      SearchAdGroupAudience,
      SearchAdGroupExcludedAudience
    >,
    urls(): AdGroupUrls
  } & AdWordsEntity &
    canBeEnabled &
    hasExtensions &
    hasLabels &
    hasStats &
    isCampaignChild;

  declare type AdGroupUrls = {
    clearTrackingTemplate(): void
  } & AdWordsUrls &
    hasSetTrackingTemplate;

  declare type AdGroupBuilder<AdGroup> = {
    withCpa(cpa: number): AdGroupBuilder<AdGroup>,
    withCpc(cpc: number): AdGroupBuilder<AdGroup>,
    withCpm(cpm: number): AdGroupBuilder<AdGroup>,
    withName(name: string): AdGroupBuilder<AdGroup>,
    withStatus(status: string): AdGroupBuilder<AdGroup>
  } & AdWordsBuilder<AdGroup> &
    hasBiddingStrategyBuilder<AdGroupBuilder<AdGroup>> &
    hasTrackingTemplateBuilder<AdGroupBuilder<AdGroup>>;

  declare type AdGroupBidding = {
    getCpa(): number,
    setCpa(cpa: number): void
  } & KeywordBidding;

  declare interface AdGroupDevices {
    clearDesktopBidModifier(): void;
    clearMobileBidModifier(): void;
    clearTabletBidModifier(): void;
    getDesktopBidModifier(): number;
    getMobileBidModifier(): number;
    getTabletBidModifier(): number;
    setDesktopBidModifier(modifier: number): void;
    setMobileBidModifier(modifier: number): void;
    setTabletBidModifier(modifier: number): void;
  }
  declare type AdGroupTargeting<
    SearchAdGroupAudience,
    SearchAdGroupExcludedAudience
  > = {
    getTargetingSetting(): string,
    newUserListBuilder(): SearchAdGroupAudienceBuilder<SearchAdGroupAudience>,
    setTargetingSetting(
      criterionTypeGroup: CriterionTypeGroup,
      targetingSetting: TargetingSetting
    ): void
  } & AdWordsTargeting<SearchAdGroupAudience, SearchAdGroupExcludedAudience>;

  declare type AdParam = {
    getAdGroup(): AdGroup,
    getInde(): number,
    getInsertionText(): string,
    getKeyword(): Keyword,
    remove(): void,
    setInsertionText(insertionText: string): void
  } & AdWordsEntity;

  declare type Ad = {
    asType(): AdViewSpace,
    getApprovalStatus(): ApprovalStatus,
    getDisapprovalReasons(): string[],
    getId(): number,
    getPolicyApprovalStatus(): PolicyApprovalStatus,
    getPolicyTopics(): PolicyTopic[],
    getType(): AdType,
    isType(): AdTypeSpace,
    remove(): void,
    urls(): AdUrls
  } & AdWordsEntity &
    canBeEnabled &
    hasLabels &
    hasStats &
    isAdGroupChild;

  declare type AdBuilder<T> = {} & AdWordsBuilder<T> &
    hasFinalUrlBuilder<T> &
    hasTrackingTemplateBuilder<T>;

  declare interface AdBuilderSpace {
    expandedTextAdBuilder(): ExpandedTextAdBuilder<ExpandedTextAd>;
    gmailImageAdBuilder(): GmailImageAdBuilder<GmailImageAd>;
    gmailMultiProductAdBuilder(): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    gmailSinglePromotionAdBuilder(): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    html5AdBuilder(): Html5AdBuilder<Html5Ad>;
    imageAdBuilder(): ImageAdBuilder<ImageAd>;
    responsiveDisplayAdBuilder(): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>;
  }
  declare interface AdTypeSpace {
    expandedTextAd(): boolean;
    gmailImageAd(): boolean;
    gmailMultiProductAd(): boolean;
    gmailSinglePromotionAd(): boolean;
    html5Ad(): boolean;
    imageAd(): boolean;
    responsiveDisplayAd(): boolean;
  }
  declare type AdUrls = {} & AdWordsUrls & hasGetFinalUrl;

  declare interface AdViewSpace {
    expandedTextAd(): ExpandedTextAd;
    gmailImageAd(): GmailImageAd;
    gmailMultiProductAd(): GmailMultiProductAd;
    gmailSinglePromotionAd(): GmailSinglePromotionAd;
    html5Ad(): Html5Ad;
    imageAd(): ImageAd;
    responsiveDisplayAd(): ResponsiveDisplayAd;
  }
  declare type ExpandedTextAd = {
    getDescription(): string,
    getHeadlinePart1(): string,
    getHeadlinePart2(): string,
    getPath1(): string,
    getPath2(): string
  } & Ad;

  declare type ExpandedTextAdBuilder<ExpandedTextAd> = {
    withDescription(
      descriptions: string
    ): ExpandedTextAdBuilder<ExpandedTextAd>,
    withHeadlinePart1(headline1: string): ExpandedTextAdBuilder<ExpandedTextAd>,
    withHeadlinePart2(headline2: string): ExpandedTextAdBuilder<ExpandedTextAd>,
    withPath1(path1: string): ExpandedTextAdBuilder<ExpandedTextAd>,
    withPath2(path2: string): ExpandedTextAdBuilder<ExpandedTextAd>
  } & AdBuilder<ExpandedTextAdBuilder<ExpandedTextAd>>;

  declare type GmailImageAd = {
    getAdvertiser(): string,
    getDescription(): string,
    getImage(): Media,
    getLogo(): Media,
    getName(): string,
    getSubject(): string
  } & Ad;

  declare type GmailImageAdBuilder<GmailImageAd> = {
    withAdvertiser(advertiser: string): GmailImageAdBuilder<GmailImageAd>,
    withDescription(description: string): GmailImageAdBuilder<GmailImageAd>,
    withDisplayUrl(displayUrl: string): GmailImageAdBuilder<GmailImageAd>,
    withImage(image: Media): GmailImageAdBuilder<GmailImageAd>,
    withLogo(logo: Media): GmailImageAdBuilder<GmailImageAd>,
    withName(name: string): GmailImageAdBuilder<GmailImageAd>,
    withSubject(subject: string): GmailImageAdBuilder<GmailImageAd>
  } & AdBuilder<GmailImageAdBuilder<GmailImageAd>>;

  declare type GmailMultiProductAd = {
    getAdvertiser(): string,
    getContent(): string,
    getDescription(): string,
    getHeader(): Media,
    getHeadline(): string,
    getHeadlineColor(): string,
    getItemButtonCallsToAction(): string[],
    getItemButtonColor(): string[],
    getItemButtonFinalMobileUrls(): string[],
    getItemButtonFinalUrls(): string[],
    getItemButtonTextColors(): string[],
    getItemButtonTrackingTemplates(): string[],
    getItemImages(): Media[],
    getItemTitleColors(): string[],
    getItemTitles(): string[],
    getLogo(): Media,
    getName(): string,
    getSubject(): string
  } & Ad;

  declare type GmailMultiProductAdBuilder<GmailMultiProductAd> = {
    withAdvertiser(
      advertiser: string
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withContent(
      content: string
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withDescription(
      description: string
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withHeader(header: Media): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withHeadline(
      headline: string
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withHeadlineColor(
      headlineColor: string
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withItemButtonCallsToAction(
      itemCallsToAction: string[]
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withItemButtonFinalMobileUrls(
      itemButtonFinalMobileUrls: string[]
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withItemButtonFinalUrls(
      itemButtonFinalUrls: string[]
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withItemButtonTrackingTemplates(
      itemButtonTrackingTemplates: string[]
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withItemImages(
      itemImages: Media[]
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withItemTitle(
      itemTitles: string[]
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withLogo(logo: Media): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withName(name: string): GmailMultiProductAdBuilder<GmailMultiProductAd>,
    withSubject(
      subject: string
    ): GmailMultiProductAdBuilder<GmailMultiProductAd>
  } & AdBuilder<GmailMultiProductAdBuilder<GmailImageAd>>;

  declare type GmailSinglePromotionAd = {
    getAdvertiser(): string,
    getCallToAction(): string,
    getCallToActionButtonColor(): string,
    getCallToActionTextColor(): string,
    getContent(): string,
    getDescription(): string,
    getHeader(): Media,
    getHeadline(): string,
    getHeadlineColor(): string,
    getImage(): Media,
    getLogo(): Media,
    getName(): string,
    getSubject(): string
  } & Ad;

  declare type GmailSinglePromotionAdBuilder<GmailSinglePromotionAd> = {
    withAdvertiser(
      advertiser: string
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withCallToAction(
      callToAction: string
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withCallToActionButtonColor(
      callToActionButtonColor: string
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withCallToActionTextColor(
      callToActionTextColor: string
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withContent(
      content: string
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withDescription(
      description: string
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withDisplayUrl(
      displayUrl: string
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withHeader(
      header: Media
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withHeadline(
      headline: string
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withHeadlineColor(
      headlineColor: string
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withImage(
      image: Media
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withLogo(
      logo: Media
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withName(
      name: string
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>,
    withSubject(
      subject: string
    ): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>
  } & AdBuilder<GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>>;

  declare type Html5Ad = {
    getEntryPoint(): string,
    getMediaBundle(): Media,
    getName(): string
  } & Ad;

  declare type Html5AdBuilder<Html5Ad> = {
    withDisplayUrl(displayUrl: string): Html5AdBuilder<Html5Ad>,
    withEntryPoint(entryPoint: string): Html5AdBuilder<Html5Ad>,
    withMediaBundle(mediaBundle: Media): Html5AdBuilder<Html5Ad>,
    withName(name: string): Html5AdBuilder<Html5Ad>,
    withDimensions(dimensions: string): Html5AdBuilder<Html5Ad>
  } & AdBuilder<Html5AdBuilder<Html5Ad>>;

  declare type ImageAd = {
    getImage(): Media,
    getName(): string
  } & Ad;

  declare type ImageAdBuilder<ImageAd> = {
    withDisplayUrl(displayUrl: string): ImageAdBuilder<ImageAd>,
    withImage(image: Media): ImageAdBuilder<ImageAd>,
    withName(name: string): ImageAdBuilder<ImageAd>
  } & AdBuilder<ImageAdBuilder<ImageAd>>;

  declare interface PolicyTopic {
    getId(): string;
    getName(): string;
    getType(): string;
  }
  declare type ResponsiveDisplayAd = {
    getBusinessName(): string,
    getDescription(): string,
    getLogoImage(): Media,
    getLongHeadline(): string,
    getMarketingImage(): Media,
    getShortHeadline(): string
  } & Ad;

  declare type ResponsiveDisplayAdBuilder<ResponsiveDisplayAd> = {
    withBusinessName(
      businessName: string
    ): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>,
    withDescription(
      description: string
    ): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>,
    withLogoImage(logo: Media): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>,
    withLongHeadline(
      longHeadline: string
    ): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>,
    withMarketingImage(
      marketingImage: Media
    ): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>,
    withShortHeadline(
      shortHeadline: string
    ): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>
  } & AdBuilder<ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>>;

  declare type BiddingStrategy = {
    adGroups(): AdWordsSelector<AdGroup>,
    campaigns(): AdWordsSelector<Campaign>,
    getId(): number,
    getName(): string,
    getType(): string,
    keywords(): AdWordsSelector<Keyword>,
    shoppingAdGroups(): AdWordsSelector<AdWordsEntity>,
    shoppingCampaigns(): AdWordsSelector<AdWordsEntity>
  } & hasStats;

  declare interface BillingAccount {
    getId(): number;
    getName(): string;
    getPrimaryBillingId(): string;
    getSecondaryBillingId(): string;
  }
  declare interface BudgetOrder {
    getBillingAccount(): BillingAccount;
    getEndDatetime(): AdWordsDate;
    getId(): number;
    getName(): string;
    getPoNumber(): number;
    getSpendingLimit(): number;
    getStartDateTime(): AdWordsDate;
    getTotalAdjustments(): number;
  }
  declare type Budget = {
    campaigns(): AdWordsSelector<Campaign>,
    getAmount(): number,
    getDeliveryMethod(): string,
    getId(): number,
    getName(): string,
    isExplicitlyShared(): boolean,
    setAmount(amount: number): void
  } & AdWordsEntity &
    hasStats;

  declare interface BulkUploads {
    newCsvUpload(
      columnNames: string[],
      optArgs: FileUploadArguments
    ): CsvUpload;
    newFileUpload(
      file:
        | GoogleAppsScript.SpreadsheetSheet
        | GoogleAppsScript.BaseBlob
        | GoogleAppsScript.DriveFile,
      optArgs: FileUploadArguments
    ): FileUpload;
  }
  declare interface BulkUpload<T> {
    forCampaignManagement(): T;
    forOfflineConversions(): T;
    preview(): void;
    setFileName(fileName: string): T;
  }
  declare type FileUpload = {
    apply(): void
  } & BulkUpload<FileUpload>;

  declare type CsvUpload = {
    apply(): void,
    append(row: {}): CsvUpload
  } & BulkUpload<CsvUpload>;

  declare interface FileUploadArguments {
    fileLocale?: string;
    moneyInMicros?: boolean;
    timeZone?: string;
  }
  declare type Campaign = {
    adGroups(): AdWordsSelector<AdGroup>,
    addAdSchedule(adSchedule: AdSchedule): AdWordsOperation<AdSchedule>,
    addAdSchedule(
      dayOfWeek: DayOfWeekString,
      startHour: number,
      startMinute: number,
      endHour: number,
      endMinute: number,
      bidModifier: number
    ): AdWordsOperation<AdSchedule>,
    addCallout(calloutExtension: Callout): AdWordsOperation<Callout>,
    addExcludedPlacementList(
      excludedPlacementList: ExcludedPlacementList
    ): void,
    addLocation(
      locationId: number | TargetedLocation | LocationObject
    ): AdWordsOperation<TargetedLocation>,
    addLocation(
      locationId: number,
      bidModifier: number
    ): AdWordsOperation<TargetedLocation>,
    addMessage(messageExtension: Message): AdWordsOperation<Message>,
    addMobileApp(mobileAppExtension: MobileApp): AdWordsOperation<MobileApp>,
    addNegativeKeywordLIst(negativeKeywordList: NegativeKeywordList): void,
    addPhoneNumber(
      phoneNumberExtension: PhoneNumber
    ): AdWordsOperation<PhoneNumber>,
    addProximity(
      proximity: ProximityObject | TargetedProximity
    ): AdWordsOperation<TargetedProximity>,
    addProximity(
      latitude: number,
      longitude: number,
      radius: number,
      radiusUnits: RadiusUnits,
      optArgs: {
        bidModifier: number,
        address: AddressObject
      }
    ): AdWordsOperation<TargetedProximity>,
    addReview(reviewExtension: Review): AdWordsOperation<Review>,
    addSiteLink(sitelinkExtension: Sitelink): AdWordsOperation<Sitelink>,
    addSnippet(snippetExtension: Snippet): AdWordsOperation<Snippet>,
    ads(): AdWordsSelector<Ad>,
    bidding(): CampaignBidding,
    createNegativeKeyword(keywordText: string): void,
    display(): CampaignDisplay,
    excludeLocation(
      location:
        | ExcludedLocation
        | number
        | {
            id: number
          }
    ): AdWordsOperation<ExcludedLocation>,
    excludedPlacementLists(): AdWordsSelector<ExcludedPlacementList>,
    extensions(): CampaignExtensions,
    getAdRotationType(): AdRotationType,
    getBiddingStrategyType(): BiddingStrategyString,
    getBudget(): Budget,
    getId(): number,
    getName(): string,
    isRemoved(): boolean,
    keywords(): AdWordsSelector<Keyword>,
    negativeKeywordLists(): AdWordsSelector<NegativeKeywordList>,
    negativeKeywords(): AdWordsSelector<NegativeKeyword>,
    newAdGroupBuilder(): AdGroupBuilder<AdGroup>,
    removeCallout(calloutExtension: Callout): void,
    removeExcludedPlacementList(
      excludedPlacementList: ExcludedPlacementList
    ): void,
    removeMessage(message: Message): void,
    removeMobileApp(mobileApp: MobileApp): void,
    removeNegativeKeywordList(negativeKeywordList: NegativeKeywordList): void,
    removePhoneNumber(phoneNumber: PhoneNumber): void,
    removeReview(review: Review): void,
    removeSitelink(sitelkin: Sitelink): void,
    removeSnippet(snippet: Snippet): void,
    setAdRotationType(adRotationType: AdRotationType): void,
    setName(name: string): void,
    targeting(): CampaignTargeting<
      SearchCampaignAudience,
      SearchCampaignExcludedAudience
    >,
    urls(): CampaignUrls
  } & AdWordsEntity &
    canBeEnabled &
    hasLabels &
    hasStartAndEndDate &
    hasStats;

  declare type CampaignBidding = {} & AdWordsBidding & canSetBiddingStrategy;

  declare type CampaignTargeting<
    SearchCampaignAudience,
    SearchCampaignExcludedAudience
  > = {
    adSchedules(): AdWordsSelector<AdSchedule>,
    excludedContentLabels(): AdWordsSelector<ExcludedContentLabel>,
    excludedLocations(): AdWordsSelector<ExcludedLocation>,
    getTargetingSetting(
      criterionTypeGroup: CriterionTypeGroup
    ): TargetingSetting,
    languages(): AdWordsSelector<Language>,
    newUserListBuilder(): SearchCampaignAudienceBuilder<SearchCampaignAudience>,
    platforms(): AdWordsSelector<Platform>,
    setTargetingSetting(
      criterionTypeGroup: CriterionTypeGroup,
      targetingSetting: TargetingSetting
    ): void,
    targetedLocations(): AdWordsSelector<TargetedLocation>,
    targetedProximities(): AdWordsSelector<TargetedProximity>
  } & AdWordsTargeting<AdWordsEntity, AdWordsEntity>;

  declare type CampaignUrls = {
    clearTrackingTemplate(): void
  } & AdWordsUrls &
    hasSetTrackingTemplate;

  declare type CurrentAccount = {
    addCallout(calloutExtension: Callout): AdWordsOperation<Callout>,
    addMobileApp(mobileAppExtension: MobileApp): AdWordsOperation<MobileApp>,
    addReview(reviewExtension: Review): AdWordsOperation<Review>,
    addSnippet(snippetExtension: Snippet): AdWordsOperation<Snippet>,
    extensions(): AccountExtensions,
    getCurrencyCode(): string,
    getCustomerId(): string,
    getName(): string,
    getTimeZone(): string,
    removeCallout(calloutExtension: Callout): void,
    removeMobileApp(mobileAppExtension: MobileApp): void,
    removeReview(reviewExtension: Review): void,
    removeSnippet(snippetExtension: Snippet): void
  } & AdWordsEntity &
    hasStats;

  declare interface ExecutionInfo {
    getRemainingCreateQuota(): number;
    getRemainingGetQuota(): number;
    getRemainingTime(): number;
    isPreview(): boolean;
  }
  declare type DisplayBuilder<T> = {
    exclude(): AdWordsOperation<T>,
    withCpc(cpc: number): T,
    withCpm(cpm: number): T
  } & AdWordsBuilder<T>;

  declare type DisplayBidding = {
    clearCpc(): void,
    clearCpm(): void,
    getCpc(): number,
    getCpm(): number,
    setCpc(cpc: number): void,
    setCpm(cpm: number): void
  } & AdWordsBidding;

  declare type Audience = {
    bidding(): AudienceBidding,
    isEnabled(): boolean,
    isPaused(): boolean
  } & ExcludedAudience &
    hasStats;

  declare type ExcludedAudience = {
    getAudienceId(): number,
    getAudienceType(): AudienceType,
    getId(): number,
    remove(): void
  } & isAdGroupChild;

  declare type AudienceBuilder<Audience> = {
    withAudience(userList: UserList): AudienceBuilder<Audience>,
    withAudienceId(audienceId: number): AudienceBuilder<Audience>,
    withAudienceType(audienceType: AudienceType): AudienceBuilder<Audience>
  } & DisplayBuilder<AudienceBuilder<Audience>>;

  declare type AudienceBidding = {
    clearCpc(): void,
    clearCpm(): void,
    getCpc(): number,
    getCpm(): number,
    setCpc(cpc: number): void,
    setCpm(cpm: number): void
  } & AdWordsBidding;

  declare type DisplayKeyword = {
    bidding(): DisplayKeywordBidding
  } & ExcludedDisplayKeyword &
    hasStats;

  declare type ExcludedDisplayKeyword = {
    getId(): number,
    getText(): string,
    remove(): void
  } & isAdGroupChild;

  declare type DisplayKeywordBuilder<DisplayKeyword> = {
    withText(text: string): DisplayKeywordBuilder<DisplayKeyword>
  } & DisplayBuilder<DisplayKeywordBuilder<DisplayKeyword>>;

  declare type DisplayKeywordBidding = {
    clearStrategy(): void
  } & DisplayBidding &
    canSetBiddingStrategy;

  declare type Placement = {
    bidding(): PlacementBidding,
    isEnabled(): boolean,
    isManaged(): boolean,
    isPaused(): boolean
  } & ExcludedPlacement &
    hasStats;

  declare type ExcludedPlacement = {
    getId(): number,
    getUrl(): string,
    remove(): void
  } & isAdGroupChild;

  declare type PlacementBuilder<Placement> = {
    withUrl(url: string): PlacementBuilder<Placement>
  } & DisplayBuilder<PlacementBuilder<Placement>>;

  declare type PlacementBidding = {
    clearStrategy(): void
  } & DisplayBidding &
    canSetBiddingStrategy;

  declare type Topic = {
    bidding(): TopicBidding,
    isEnabled(): boolean,
    isPaused(): boolean
  } & ExcludedTopic &
    hasStats;

  declare type ExcludedTopic = {
    getId(): number,
    getTopicId(): number,
    remove(): void
  } & isAdGroupChild;

  declare type TopicBuilder<Topic> = {
    withTopicId(topicId: number): TopicBuilder<Topic>
  } & DisplayBuilder<TopicBuilder<Topic>>;

  declare type TopicBidding = {
    clearCpc(): void,
    clearCpm(): void,
    getCpc(): number,
    getCpm(): number,
    setCpc(cpc: number): void,
    setCpm(cpm: number): void
  } & AdWordsBidding;

  declare type AdGroupDisplay = {
    excludedAudiences(): AdWordsSelector<ExcludedAudience>,
    excludedKeywords(): AdWordsSelector<ExcludedDisplayKeyword>,
    excludedPlacements(): AdWordsSelector<ExcludedPlacement>,
    excludedTopics(): AdWordsSelector<Topic>,
    newAudienceBuilder(): AudienceBuilder<Audience>,
    newKeywordBuilder(): DisplayKeywordBuilder<DisplayKeyword>,
    newPlacementBuilder(): PlacementBuilder<Placement>,
    newTopicBuilder(): TopicBuilder<Topic>
  } & Display;

  declare type CampaignDisplay = {
    excludedAudiences(): AdWordsSelector<ExcludedAudience>,
    excludedKeywords(): AdWordsSelector<ExcludedDisplayKeyword>,
    excludedPlacements(): AdWordsSelector<ExcludedPlacement>,
    excludedTopics(): AdWordsSelector<Topic>,
    newAudienceBuilder(): AudienceBuilder<Audience>,
    newKeywordBuilder(): DisplayKeywordBuilder<DisplayKeyword>,
    newPlacementBuilder(): PlacementBuilder<Placement>,
    newTopicBuilder(): TopicBuilder<Topic>
  } & Display;

  declare interface Display {
    audiences(): AdWordsSelector<Audience>;
    keywords(): AdWordsSelector<DisplayKeyword>;
    placements(): AdWordsSelector<Placement>;
    topics(): AdWordsSelector<Topic>;
  }
  declare type Keyword = {
    adParams(): AdWordsSelector<AdParam>,
    bidding(): KeywordBidding,
    clearDesinationUrl(): void,
    getApprovalStatus(): ApprovalStatus,
    getFirstPageCpc(): number,
    getId(): number,
    getMatchType(): MatchType,
    getQualityScore(): number,
    getText(): string,
    getTopOfPageCpc(): number,
    remove(): void,
    setAdParam(index: number, insertionText: string): void,
    urls(): KeywordUrls
  } & AdWordsEntity &
    canBeEnabled &
    hasLabels &
    hasStats &
    isAdGroupChild;

  declare type KeywordBidding = {
    clearStrategy(): void,
    getCpc(): number,
    getCpm(): number,
    setCpc(cpc: number): void,
    setCpm(cpm: number): void
  } & AdWordsBidding &
    canSetBiddingStrategy;

  declare type KeywordBuilder<Keyword> = {
    withCpc(cpc: number): KeywordBuilder<Keyword>,
    withCpm(cpm: number): KeywordBuilder<Keyword>,
    withText(text: string): KeywordBuilder<Keyword>
  } & AdWordsBuilder<Keyword> &
    hasBiddingStrategyBuilder<KeywordBuilder<Keyword>> &
    hasTrackingTemplateBuilder<KeywordBuilder<Keyword>> &
    hasFinalUrlBuilder<KeywordBuilder<Keyword>>;

  declare type KeywordUrls = {
    clearFinalUrl(): void,
    clearMobileFinalUrl(): void,
    clearTrackingTemplate(): void
  } & AdWordsUrls &
    hasGetFinalUrl &
    hasSetTrackingTemplate &
    hasSetFinalUrl;

  declare type Label = {
    adGroups(): AdWordsSelector<AdGroup>,
    ads(): AdWordsSelector<Ad>,
    campaigns(): AdWordsSelector<Campaign>,
    getColor(): string,
    getDescription(): string,
    getId(): string,
    getName(): string,
    keywords(): AdWordsSelector<Keyword>,
    remove(): void,
    setColor(color: string): void,
    setDescription(description: string): void,
    setName(name: string): void
  } & AdWordsEntity;

  declare interface AdMedia {
    media(): AdWordsSelector<Media>;
    newImageBuilder(): ImageBuilder<Media>;
    newMediaBundleBuilder(): MediaBundleBuilder<Media>;
    newVideoBuilder(): VideoBuilder<Media>;
  }
  declare interface Dimensions {
    getHeight(): number;
    getWidth(): number;
  }
  declare type ImageBuilder<Media> = {
    withData(data: GoogleAppsScript.BaseBlob): ImageBuilder<Media>,
    withName(name: string): ImageBuilder<Media>
  } & AdWordsBuilder<Media>;

  declare interface Media {
    getDimensions(): MediaDimensions;
    getFileSize(): number;
    getId(): number;
    getMimeType(): string;
    getName(): string;
    getReferenceId(): string;
    getSourceUrl(): string;
    getType(): MediaType;
    getUrls(): MediaUrls;
    getYouTubeVideoId(): string | void;
  }
  declare type MediaBundleBuilder<Media> = {
    withData(data: GoogleAppsScript.BaseBlob): MediaBundleBuilder<Media>,
    withName(name: string): MediaBundleBuilder<Media>
  } & AdWordsBuilder<Media>;

  declare interface MediaDimensions {
    getFullMediaDimensions(): Dimensions;
    getPreviewMediaDimensions(): Dimensions;
    getShrunkenMediaDimensions(): Dimensions;
    getVideoThumbnailDimensions(): Dimensions;
  }
  declare interface MediaUrls {
    getFullMediaUrl(): string;
    getPreviewMediaUrl(): string;
    getShrunkenMediaUrl(): string;
    getVideoThumbnailMediaUrl(): string;
  }
  declare type VideoBuilder<Media> = {
    withYouTubeVideoId(youTubeVideoId: string): VideoBuilder<Media>
  } & AdWordsBuilder<Media>;

  declare type NegativeKeyword = {
    getMatchType(): MatchType,
    getText(): string,
    remove(): void
  } & AdWordsEntity &
    isAdGroupChild;

  declare interface AdWordsReport {
    exportToSheet(sheet: GoogleAppsScript.SpreadsheetSheet): void;
    getColumnHeader(awqlColumnName: string): AdWordsReportColumnHeader;
    rows(): AdWordsReportRowIterator;
  }
  declare interface AdWordsReportRow {
    formatForUpload(): {};
  }
  declare interface AdWordsReportRowIterator {
    hasNext(): boolean;
    next(): AdWordsReportRow;
  }
  declare interface AdWordsReportColumnHeader {
    getBulkUploadColumnName(): string;
    getReportColumnName(): string;
  }
  declare type ExcludedPlacementList = {
    addExcludedPlacement(url: string): void,
    addExcludedPlacements(urls: string[]): void,
    campaigns(): AdWordsSelector<Campaign>,
    excludedPlacements(): AdWordsSelector<SharedExcludedPlacement>,
    getId(): number,
    getName(): string,
    setName(name: string): void
  } & AdWordsEntity;

  declare type ExcludedPlacementListBuilder<ExcludedPlacementList> = {
    withName(name: string): ExcludedPlacementListBuilder<ExcludedPlacementList>
  } & AdWordsBuilder<ExcludedPlacementList>;

  declare type SharedExcludedPlacement = {
    getExcludedPlacementList(): ExcludedPlacementList,
    getUrl(): string,
    remove(): void
  } & AdWordsEntity;

  declare type NegativeKeywordList = {
    addNegativeKeyword(keywordText: string): void,
    addNegativeKeywords(keywordTexts: string[]): void,
    campaigns(): AdWordsSelector<Campaign>,
    getId(): number,
    getName(): string,
    negativeKeywords(): AdWordsSelector<SharedNegativeKeyword>,
    setName(): string
  } & AdWordsEntity;

  declare type NegativeKeywordListBuilder<NegativeKeywordList> = {
    withName(name: string): NegativeKeywordListBuilder<NegativeKeywordList>
  } & AdWordsBuilder<NegativeKeywordList>;

  declare type SharedNegativeKeyword = {
    getMatchType(): MatchType,
    getNegativeKeywordList(): NegativeKeywordList,
    getText(): string,
    remove(): void
  } & AdWordsEntity;

  declare type AdSchedule = {
    getCampaignType(): CampaignType,
    getDayOfWeek(): DayOfWeekString,
    getEndHour(): number,
    getEndMinute(): number,
    getId(): number,
    getStartHour(): number,
    getStartMinute(): number,
    getVideoCampaign(): Campaign,
    remove(): void
  } & AdWordsEntity &
    canSetBidModifier &
    hasStats &
    isCampaignChild;

  declare type SearchAdGroupAudience = {
    bidding(): SearchAudienceBidding,
    isEnabled(): boolean,
    isPaused(): boolean
  } & SearchAdGroupExcludedAudience &
    hasStats;

  declare type SearchAdGroupAudienceBuilder<SearchAdGroupAudience> = {
    exclude(): AdWordsOperation<SearchAdGroupAudience>,
    withAudience(
      userList: UserList
    ): SearchAdGroupAudienceBuilder<SearchAdGroupAudience>,
    withAudienceId(
      audienceId: number
    ): SearchAdGroupAudienceBuilder<SearchAdGroupAudience>,
    withBidModifier(
      modifier: number
    ): SearchAdGroupAudienceBuilder<SearchAdGroupAudience>
  } & AdWordsBuilder<SearchAdGroupAudience>;

  declare type SearchAdGroupExcludedAudience = {
    getAudienceId(): number,
    getId(): number,
    getName(): string,
    remove(): void
  } & isAdGroupChild;

  declare type SearchAudienceBidding = {
    clearBidModifier(): void
  } & canSetBidModifier;

  declare type SearchCampaignAudience = {
    bidding(): SearchAudienceBidding,
    isEnabled(): boolean,
    isPaused(): boolean
  } & SearchCampaignExcludedAudience;

  declare type SearchCampaignAudienceBuilder<SearchCampaignAudience> = {
    exclude(): AdWordsOperation<SearchCampaignAudience>,
    withAudience(
      userList: UserList
    ): SearchCampaignAudienceBuilder<SearchCampaignAudience>,
    withAudienceId(
      audienceId: number
    ): SearchCampaignAudienceBuilder<SearchCampaignAudience>,
    withBidModifier(
      modifier: number
    ): SearchCampaignAudienceBuilder<SearchCampaignAudience>
  } & AdWordsBuilder<SearchCampaignAudience>;

  declare type SearchCampaignExcludedAudience = {
    getAudienceId(): number,
    getId(): number,
    getName(): string,
    remove(): void
  } & isCampaignChild;

  declare type ExcludedContentLabel = {
    getCampaignType(): CampaignType,
    getContentLabelType(): string,
    getId(): number,
    getVideoCampaign(): Campaign,
    remove(): void
  } & AdWordsEntity &
    isCampaignChild;

  declare type ExcludedLocation = {
    getCampaignType(): CampaignType,
    getCountryCode(): string,
    getId(): number,
    getName(): string,
    getTargetType(): TargetType,
    getTargetingStatus(): TargetingStatus,
    getVideoCampaign(): Campaign,
    remove(): void
  } & AdWordsEntity &
    isCampaignChild;

  declare type Language = {
    getCampaignType(): CampaignType,
    getId(): number,
    getName(): string,
    getVideoCampaign(): Campaign,
    remove(): void
  } & AdWordsEntity &
    isCampaignChild;

  declare type TargetedLocation = {} & ExcludedLocation &
    canSetBidModifier &
    hasStats;

  declare type Platform = {
    getCampaignType(): CampaignType,
    getId(): number,
    getName(): string,
    getVideoCampaign(): Campaign
  } & AdWordsEntity &
    canSetBidModifier &
    hasStats &
    isCampaignChild;

  declare interface Address {
    getCityName(): string;
    getCountryCode(): string;
    getPostalCode(): string;
    getProvinceCode(): string;
    getProvinceName(): string;
    getStreetAddress(): string;
    getStreetAddress2(): string;
  }
  declare type TargetedProximity = {
    getAddress(): Address,
    getCampaignType(): CampaignType,
    getId(): number,
    getLatitude(): number,
    getLongitude(): number,
    getRadius(): number,
    getRadiusUnits(): RadiusUnits,
    getVideoCampaign(): Campaign,
    remove(): void
  } & AdWordsEntity &
    canSetBidModifier &
    hasStats &
    isCampaignChild;

  declare type Targeting = {
    audiences(): AdWordsSelector<SearchCampaignAudience>,
    excludedAudiences(): AdWordsSelector<SearchCampaignExcludedAudience>
  } & VideoCampaignTargeting;

  declare interface VideoCampaignTargeting {
    adSchedules(): AdWordsSelector<AdSchedule>;
    excludedContentLabels(): AdWordsSelector<ExcludedContentLabel>;
    excludedLocations(): AdWordsSelector<ExcludedLocation>;
    languages(): AdWordsSelector<Language>;
    platforms(): AdWordsSelector<Platform>;
    targetedLocations(): AdWordsSelector<TargetedLocation>;
    targetedProximities(): AdWordsSelector<TargetedProximity>;
  }
  declare interface UserList {
    close(): void;
    excludedAdGroups(): AdWordsSelector<AdGroup>;
    excludedCampaigns(): AdWordsSelector<Campaign>;
    getDescription(): string;
    getId(): number;
    getMembershipLifeSpan(): number;
    getName(): string;
    getSizeForDisplay(): number;
    getSizeForSearch(): number;
    getSizeRangeForDisplay(): UserListSizeRange;
    getSizeRangeForSearch(): UserListSizeRange;
    getType(): UserListType;
    isClosed(): boolean;
    isEligibleForDisplay(): boolean;
    isEligibleForSearch(): boolean;
    isOpen(): boolean;
    isReadOnly(): boolean;
    open(): void;
    setDescription(description: string): void;
    setMembershipLifeSpan(membershipLifeSpan: number): void;
    setName(name: string): void;
    targetedAdGroups(): AdWordsSelector<AdGroup>;
    targetedCampaigns(): AdWordsSelector<Campaign>;
  }
  declare interface ExtensionSchedule {
    getDayOfWeek(): DayOfWeekString;
    getEndHour(): number;
    getEndMinute(): number;
    getStartHour(): number;
    getStartMinute(): number;
  }
  declare interface ExtensionScheduleInput {
    dayOfWeek?: DayOfWeekString;
    startHour?: number;
    startMinute?: number;
    endHour?: number;
    endMinute?: number;
  }
  declare interface LocationObject {
    id: number;
    bidModifier?: number;
  }
  declare interface ProximityObject {
    latitude: number;
    longitude: number;
    radius: number;
    radiusUnits: RadiusUnits;
    bidModifier?: number;
    address?: AddressObject;
  }
  declare interface AddressObject {
    streetAddress: string;
    streetAddress2: string;
    cityName: string;
    provinceName: string;
    provinceCode: string;
    postalCode: string;
    countryCode: string;
  }
  declare interface ReportOptionArguments {
    includeZeroImpressions?: boolean;
    returnMoneyInMicros?: boolean;
    apiVersion?: string;
    resolveGeoNames?: boolean;
  }
  declare interface canBeEnabled {
    enable(): void;
    isEnabled(): boolean;
    isPaused(): boolean;
    pause(): void;
  }
  declare interface canSetBiddingStrategy {
    setStrategy(biddingStrategy: BiddingStrategyString | BiddingStrategy): void;
  }
  declare interface canSetBidModifier {
    getBidModifier(): number;
    setBidModifier(modifier: number): void;
  }
  declare interface hasBiddingStrategyBuilder<B> {
    withBiddingStrategy(
      biddingStrategy: BiddingStrategyString | BiddingStrategy
    ): B;
  }
  declare interface hasExtensions {
    addCallout(calloutExtension: Callout): AdWordsOperation<Callout>;
    addMessage(messageExtension: Message): AdWordsOperation<Message>;
    addMobileApp(mobileAppExtension: MobileApp): AdWordsOperation<MobileApp>;
    addPhoneNumber(
      phoneNumberExtension: PhoneNumber
    ): AdWordsOperation<PhoneNumber>;
    addReview(reviewExtension: Review): AdWordsOperation<Review>;
    addSitelink(sitelinkExtension: Sitelink): AdWordsOperation<Sitelink>;
    addSnippet(snippetExtension: Snippet): AdWordsOperation<Snippet>;
    removeCallout(calloutExtension: Callout): void;
    removeMessage(messageExtension: Message): void;
    removeMobileApp(mobileAppExtension: MobileApp): void;
    removePhoneNumber(phoneNumberExtension: PhoneNumber): void;
    removeReview(reviewExtension: Review): void;
    removeSitelink(sitelinkExtension: Sitelink): void;
    removeSnippet(snippetExtension: Snippet): void;
  }
  declare interface hasGetFinalUrl {
    getFinalUrl(): string;
    getMobileFinalUrl(): string;
  }
  declare interface hasSetFinalUrl {
    setFinalUrl(url: string): void;
    setMobileFinalUrl(url: string): void;
  }
  declare interface hasFinalUrlBuilder<B> {
    withFinalUrl(url: string): B;
    withMobileFinalUrl(url: string): B;
  }
  declare interface hasLabels {
    applyLabel(name: string): void;
    labels(): AdWordsSelector<Label>;
    removeLabel(name: string): void;
  }
  declare interface hasMobilePreferred {
    isMobilePreferred(): boolean;
    setMobilePreferred(isMobilePreferred: boolean): void;
  }
  declare interface hasMobilePreferredBuilder<B> {
    withMobilePreferred(): B;
  }
  declare interface hasSchedules {
    getSchedules(): ExtensionSchedule;
    setSchedules(schedules: ExtensionScheduleInput): void;
  }
  declare interface hasSchedulesBuilder<B> {
    withSchedules(schedules: ExtensionScheduleInput): B;
  }
  declare interface hasSetTrackingTemplate {
    setCustomParameters(customParameters: {}): void;
    setTrackingTemplate(trackingTemplate: string): void;
  }
  declare interface hasTrackingTemplateBuilder<B> {
    withCustomParameters(customParameters: {}): B;
    withTrackingTemplate(trackingTemplate: string): B;
  }
  declare interface hasStartAndEndDate {
    getEndDate(): AdWordsDate;
    getStartDate(): AdWordsDate;
    setEndDate(date: AdWordsDate | string): void;
    setStartDate(date: AdWordsDate | string): void;
  }
  declare interface hasStartAndEndDateBuilder<B> {
    withEndDate(date: AdWordsDate | string): B;
    withStartDate(date: AdWordsDate | string): B;
  }
  declare interface hasStats {
    getStatsFor(dateRange: DateRange): AdWordsStats;
    getStatsFor(
      dateFrom: AdWordsDate | string,
      dateTo: AdWordsDate | string
    ): AdWordsStats;
  }
  declare interface isCampaignChild {
    getCampaign(): Campaign;
  }
  declare type isAdGroupChild = {
    getAdGroup(): AdGroup
  } & isCampaignChild;

  declare interface AdWordsDate {
    year: number;
    month: number;
    day: number;
  }
  declare type DateRange =
    | "TODAY"
    | "YESTERDAY"
    | "LAST_7_DAYS"
    | "THIS_WEEK_SUN_TODAY"
    | "LAST_WEEK"
    | "LAST_14_DAYS"
    | "LAST_30_DAYS"
    | "LAST_BUSINESS_WEEK"
    | "LAST_WEEK_SUN_SAT"
    | "THIS_MONTH"
    | "LAST_MONTH"
    | "ALL_TIME";
  declare type DayOfWeekString =
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  declare type AppStore = "iOS" | "Android";
  declare type ApprovalStatus =
    | "APPROVED"
    | "DISAPPROVED"
    | "FAMILY_SAFE"
    | "NON_FAMILY_SAFE"
    | "PORN"
    | "UNCHECKED";
  declare type PolicyApprovalStatus =
    | "UNKNOWN"
    | "APPROVED"
    | "APPROVED_LIMITED"
    | "ELIGIBLE"
    | "UNDER_REVIEW"
    | "DISAPPROVED"
    | "SITE_SUSPENDED";
  declare type AdType =
    | "EXPANDED_TEXT_AD"
    | "IMAGE_AD"
    | "MOBILE_AD"
    | "MOBILE_IMAGE_AD"
    | "PRODUCT_AD"
    | "RICH_MEDIA_AD"
    | "TEMPLATE_AD"
    | "TEXT_AD";
  declare type BiddingStrategySource = "CAMPAIGN" | "ADGROUP" | "CRITERION";
  declare type TargetingSetting = "TARGET_ALL_TRUE" | "TARGET_ALL_FALSE";
  declare type AudienceType = "USER_INTEREST" | "USER_LIST";
  declare type RadiusUnits = "MILES" | "KILOMETERS";
  declare type AdRotationType =
    | "OPTIMIZE"
    | "CONVERSION_OPTIMIZE"
    | "ROTATE"
    | "ROTATE_FOREVER";
  declare type BiddingStrategyString =
    | "MANUAL_CPC"
    | "MANUAL_CPM"
    | "BUDGET_OPTIMIZER"
    | "CONVERSION_OPTIMIZER"
    | "PERCENT_CPA";
  declare type CriterionTypeGroup = "USER_INTEREST_AND_LIST";
  declare type MatchType = "BROAD" | "PHRASE" | "EXACT";
  declare type MediaType =
    | "AUDIO"
    | "DYNAMIC_IMAGE"
    | "ICON"
    | "IMAGE"
    | "STANDARD_ICON"
    | "VIDEO"
    | "MEDIA_BUNDLE";
  declare type CampaignType = "SEARCH_OR_DISPLAY" | "VIDEO" | "SHOPPING";
  declare type TargetType =
    | "Airport"
    | "Autonomous Community"
    | "Borough"
    | "Canton"
    | "City"
    | "City Region"
    | "Congressional District"
    | "Country"
    | "County"
    | "Department"
    | "District"
    | "Governorate"
    | "Municipality"
    | "National Park"
    | "Neighborhood"
    | "Okrug"
    | "Postal Code"
    | "Prefecture"
    | "Province"
    | "Region"
    | "State"
    | "Territory"
    | "TV Region"
    | "Union Territory"
    | "University";
  declare type TargetingStatus = "ACTIVE" | "PHASING_OUT" | "OBSOLETE";
  declare type UserListType =
    | "UNKNOWN0"
    | "REMARKETING"
    | "LOGICAL"
    | "EXTERNAL_REMARKETING"
    | "RULE_BASED"
    | "SIMILAR"
    | "CRM_BASED";
  declare type UserListSizeRange =
    | "LESS_THAN_FIVE_HUNDRED"
    | "LESS_THAN_ONE_THOUSAND"
    | "ONE_THOUSAND_TO_TEN_THOUSAND"
    | "TEN_THOUSAND_TO_FIFTY_THOUSAND"
    | "FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND"
    | "ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND"
    | "THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND"
    | "FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION"
    | "ONE_MILLION_TO_TWO_MILLION"
    | "TWO_MILLION_TO_THREE_MILLION"
    | "THREE_MILLION_TO_FIVE_MILLION"
    | "FIVE_MILLION_TO_TEN_MILLION"
    | "TEN_MILLION_TO_TWENTY_MILLION"
    | "TWENTY_MILLION_TO_THIRTY_MILLION"
    | "THIRTY_MILLION_TO_FIFTY_MILLION"
    | "OVER_FIFTY_MILLION";

  declare var npm$namespace$AdWordsApp: {
    adCustomizerSources: typeof AdWordsApp$adCustomizerSources,
    adGroups: typeof AdWordsApp$adGroups,
    adGroupTargeting: typeof AdWordsApp$adGroupTargeting,
    adMedia: typeof AdWordsApp$adMedia,
    adParams: typeof AdWordsApp$adParams,
    ads: typeof AdWordsApp$ads,
    biddingStrategies: typeof AdWordsApp$biddingStrategies,
    budgetOrders: typeof AdWordsApp$budgetOrders,
    budgets: typeof AdWordsApp$budgets,
    bulkUploads: typeof AdWordsApp$bulkUploads,
    campaigns: typeof AdWordsApp$campaigns,
    createLabel: typeof AdWordsApp$createLabel,
    currentAccount: typeof AdWordsApp$currentAccount,
    display: typeof AdWordsApp$display,
    excludedPlacementLists: typeof AdWordsApp$excludedPlacementLists,
    extensions: typeof AdWordsApp$extensions,
    getExecutionInfo: typeof AdWordsApp$getExecutionInfo,
    keywords: typeof AdWordsApp$keywords,
    labels: typeof AdWordsApp$labels,
    negativeKeywordLists: typeof AdWordsApp$negativeKeywordLists,
    newAdCustomizerSourceBuilder: typeof AdWordsApp$newAdCustomizerSourceBuilder,
    newExcludedPlacementListBuilder: typeof AdWordsApp$newExcludedPlacementListBuilder,
    newNegativeKeywordListBuilder: typeof AdWordsApp$newNegativeKeywordListBuilder,
    productAds: typeof AdWordsApp$productAds,
    productGroups: typeof AdWordsApp$productGroups,
    report: typeof AdWordsApp$report,
    shoppingAdGroupTargeting: typeof AdWordsApp$shoppingAdGroupTargeting,
    shoppingAdGroups: typeof AdWordsApp$shoppingAdGroups,
    shoppingCampaignTargeting: typeof AdWordsApp$shoppingCampaignTargeting,
    shoppingCampaigns: typeof AdWordsApp$shoppingCampaigns,
    targeting: typeof AdWordsApp$targeting,
    userlists: typeof AdWordsApp$userlists,
    videoAdGroups: typeof AdWordsApp$videoAdGroups,
    videoAds: typeof AdWordsApp$videoAds,
    videoCampaigns: typeof AdWordsApp$videoCampaigns,
    videoTargeting: typeof AdWordsApp$videoTargeting
  };
  declare function AdWordsApp$adCustomizerSources(): AdWordsSelector<AdCustomizerSource>;

  declare function AdWordsApp$adGroups(): AdWordsSelector<AdGroup>;

  declare function AdWordsApp$adGroupTargeting(): AdWordsTargeting<
    SearchAdGroupAudience,
    SearchAdGroupExcludedAudience
  >;

  declare function AdWordsApp$adMedia(): AdMedia;

  declare function AdWordsApp$adParams(): AdWordsSelector<AdParam>;

  declare function AdWordsApp$ads(): AdWordsSelector<Ad>;

  declare function AdWordsApp$biddingStrategies(): AdWordsSelector<BiddingStrategy>;

  declare function AdWordsApp$budgetOrders(): AdWordsSelector<BudgetOrder>;

  declare function AdWordsApp$budgets(): AdWordsSelector<Budget>;

  declare function AdWordsApp$bulkUploads(): BulkUploads;

  declare function AdWordsApp$campaigns(): AdWordsSelector<Campaign>;

  declare function AdWordsApp$createLabel(
    name: string,
    description?: string,
    backgroundColor?: string
  ): void;

  declare function AdWordsApp$currentAccount(): CurrentAccount;

  declare function AdWordsApp$display(): Display;

  declare function AdWordsApp$excludedPlacementLists(): AdWordsSelector<ExcludedPlacementList>;

  declare function AdWordsApp$extensions(): AdWordsAdExtensions;

  declare function AdWordsApp$getExecutionInfo(): ExecutionInfo;

  declare function AdWordsApp$keywords(): AdWordsSelector<Keyword>;

  declare function AdWordsApp$labels(): AdWordsSelector<Label>;

  declare function AdWordsApp$negativeKeywordLists(): AdWordsSelector<NegativeKeywordList>;

  declare function AdWordsApp$newAdCustomizerSourceBuilder(): AdCustomizerSourceBuilder<AdCustomizerSource>;

  declare function AdWordsApp$newExcludedPlacementListBuilder(): ExcludedPlacementListBuilder<ExcludedPlacementList>;

  declare function AdWordsApp$newNegativeKeywordListBuilder(): NegativeKeywordListBuilder<NegativeKeywordList>;

  declare function AdWordsApp$productAds(): AdWordsSelector<AdWordsEntity>;

  declare function AdWordsApp$productGroups(): AdWordsSelector<AdWordsEntity>;

  declare function AdWordsApp$report(
    query: string,
    options?: ReportOptionArguments
  ): AdWordsReport;

  declare function AdWordsApp$shoppingAdGroupTargeting(): any;

  declare function AdWordsApp$shoppingAdGroups(): AdWordsSelector<AdWordsEntity>;

  declare function AdWordsApp$shoppingCampaignTargeting(): any;

  declare function AdWordsApp$shoppingCampaigns(): AdWordsSelector<AdWordsEntity>;

  declare function AdWordsApp$targeting(): AdWordsSelector<Targeting>;

  declare function AdWordsApp$userlists(): AdWordsSelector<UserList>;

  declare function AdWordsApp$videoAdGroups(): AdWordsSelector<AdWordsEntity>;

  declare function AdWordsApp$videoAds(): AdWordsSelector<AdWordsEntity>;

  declare function AdWordsApp$videoCampaigns(): AdWordsSelector<AdWordsEntity>;

  declare function AdWordsApp$videoTargeting(): any;

  declare var npm$namespace$MccApp: {
    accountLabels: typeof MccApp$accountLabels,
    accounts: typeof MccApp$accounts,
    createAccountLabel: typeof MccApp$createAccountLabel,
    select: typeof MccApp$select
  };
  declare function MccApp$accountLabels(): AdWordsSelector<AdWordsEntity>;

  declare function MccApp$accounts(): AdWordsSelector<AdWordsEntity>;

  declare function MccApp$createAccountLabel(name: string): void;

  declare function MccApp$select(account: AdWordsEntity): void;
}
