declare module "doubleclick-gpt" {
  declare type googletag$SingleSizeArray = number[];

  declare type googletag$NamedSize = string | string[];

  declare type googletag$SingleSize =
    | googletag$SingleSizeArray
    | googletag$NamedSize;

  declare type googletag$MultiSize = googletag$SingleSize[];

  declare type googletag$GeneralSize =
    | googletag$SingleSize
    | googletag$MultiSize;

  declare type googletag$SizeMapping = googletag$GeneralSize[];

  declare type googletag$SizeMappingArray = googletag$SizeMapping[];

  declare interface googletag$CommandArray {
    push(f: () => void): number;
  }

  declare interface googletag$Service {
    addEventListener(
      eventType: string,
      listener: (
        event:
          | events$events$ImpressionViewableEvent
          | events$events$SlotOnloadEvent
          | events$events$SlotRenderEndedEvent
          | events$events$slotVisibilityChangedEvent
      ) => void
    ): void;
    getSlots(): googletag$Slot[];
  }

  declare type googletag$CompanionAdsService = {
    enableSyncLoading(): void,
    setRefreshUnfilledSlots(value: boolean): void
  } & googletag$Service;

  declare type googletag$ContentService = {
    setContent(slot: googletag$Slot, content: string): void
  } & googletag$Service;

  declare interface googletag$LazyLoadOptionsConfig {
    fetchMarginPercent?: number;
    renderMarginPercent?: number;
    mobileScaling?: number;
  }

  declare interface googletag$ResponseInformation {
    advertiserId: string;
    campaignId: string;
    creativeId?: number;
    lineItemId?: number;
  }

  declare interface googletag$SafeFrameConfig {
    allowOverlayExpansion?: boolean;
    allowPushExpansion?: boolean;
    sandbox?: boolean;
  }

  declare interface googletag$Googletag {
    apiReady: boolean;
    cmd: googletag$CommandArray;
    companionAds(): googletag$CompanionAdsService;
    content(): googletag$ContentService;
    defineOutOfPageSlot(adUnitPath: string, opt_div?: string): googletag$Slot;
    defineSlot(
      adUnitPath: string,
      size: googletag$GeneralSize,
      opt_div?: string
    ): googletag$Slot;
    destroySlots(opt_slots?: googletag$Slot[]): boolean;
    disablePublisherConsole(): void;
    display(div?: string | Element): void;
    enableServices(): void;
    getVersion(): string;
    openConsole(opt_div?: string): void;
    pubads(): googletag$PubAdsService;
    pubadsReady: boolean;
    setAdIframeTitle(title: string): void;
    sizeMapping(): googletag$SizeMappingBuilder;
  }

  declare interface googletag$Slot {
    addService(service: googletag$Service): googletag$Slot;
    clearCategoryExclusions(): googletag$Slot;
    clearTargeting(opt_key?: string): googletag$Slot;
    defineSizeMapping(sizeMapping: googletag$SizeMappingArray): googletag$Slot;
    get(key: string): string | null;
    getAdUnitPath(): string;
    getAttributeKeys(): string[];
    getCategoryExclusions(): string[];
    getResponseInformation(): googletag$ResponseInformation;
    getSlotElementId(): string;
    getTargeting(key: string): string[];
    getTargetingKeys(): string[];
    set(key: string, value: string): googletag$Slot;
    setCategoryExclusion(categoryExclusion: string): googletag$Slot;
    setClickUrl(value: string): googletag$Slot;
    setCollapseEmptyDiv(
      collapse: boolean,
      opt_collapseBeforeAdFetch?: boolean
    ): googletag$Slot;
    setForceSafeFrame(forceSafeFrame: boolean): googletag$Slot;
    setSafeFrameConfig(config: googletag$SafeFrameConfig): googletag$Slot;
    setTargeting(key: string, value: string | string[]): googletag$Slot;
  }

  declare interface googletag$PassbackSlot {
    display(): void;
    get(key: string): string;
    set(key: string, value: string): googletag$PassbackSlot;
    setClickUrl(url: string): googletag$PassbackSlot;
    setForceSafeFrame(forceSafeFrame: boolean): googletag$PassbackSlot;
    setTagForChildDirectedTreatment(value: number): googletag$PassbackSlot;
    setTagForUnderAgeOfConsent(value: number): googletag$PassbackSlot;
    setTargeting(key: string, value: string | string[]): googletag$PassbackSlot;
    updateTargetingFromMap(map: { [key: string]: any }): googletag$PassbackSlot;
  }

  declare type googletag$PubAdsService = {
    clear(opt_slots?: googletag$Slot[]): boolean,
    clearCategoryExclusions(): googletag$PubAdsService,
    clearTagForChildDirectedTreatment(): googletag$PubAdsService,
    clearTargeting(opt_key?: string): googletag$PubAdsService,
    collapseEmptyDivs(opt_collapseBeforeAdFetch?: boolean): boolean,
    defineOutOfPagePassback(adUnitPath: string): googletag$PassbackSlot,
    definePassback(
      adUnitPath: string,
      size: googletag$GeneralSize
    ): googletag$PassbackSlot,
    disableInitialLoad(): void,
    display(
      adUnitPath: string,
      size: googletag$GeneralSize,
      opt_div?: string | Element,
      opt_clickUrl?: string
    ): googletag$Slot,
    enableAsyncRendering(): boolean,
    enableLazyLoad(opt_config?: googletag$LazyLoadOptionsConfig): void,
    enableSingleRequest(): boolean,
    enableSyncRendering(): boolean,
    enableVideoAds(): void,
    get(key: string): string | null,
    getAttributeKeys(): string[],
    getTargeting(key: string): string[],
    getTargetingKeys(): string[],
    refresh(
      opt_slots?: googletag$Slot[],
      opt_options?: {
        changeCorrelator: boolean
      }
    ): void,
    set(key: string, value: string): googletag$PubAdsService,
    setCategoryExclusion(categoryExclusion: string): googletag$PubAdsService,
    setCentering(centerAds: boolean): void,
    setCookieOptions(cookieOptions: number): googletag$PubAdsService,
    setForceSafeFrame(forceSafeFrame: boolean): googletag$PubAdsService,
    setLocation(
      latitudeOrAddress: string | number,
      opt_longitude?: number,
      opt_radius?: number
    ): googletag$PubAdsService,
    setPublisherProvidedId(ppid: string): googletag$PubAdsService,
    setRequestNonPersonalizedAds(
      nonPersonalizedAds: 0 | 1
    ): googletag$PubAdsService,
    setSafeFrameConfig(
      config: googletag$SafeFrameConfig
    ): googletag$PubAdsService,
    setTagForChildDirectedTreatment(value: number): googletag$PubAdsService,
    setTagForUnderAgeOfConsent(opt_value?: number): googletag$PubAdsService,
    setTargeting(
      key: string,
      value: string | string[]
    ): googletag$PubAdsService,
    setVideoContent(videoContentId: string, videoCmsId: string): void,
    updateCorrelator(): googletag$PubAdsService
  } & googletag$Service;

  declare interface googletag$SizeMappingBuilder {
    addSize(
      viewportSize: googletag$SingleSizeArray,
      slotSize: googletag$GeneralSize
    ): googletag$SizeMappingBuilder;
    build(): googletag$SizeMappingArray;
  }

  declare interface events$ImpressionViewableEvent {
    serviceName: string;
    slot: googletag$Slot;
  }

  declare interface events$SlotOnloadEvent {
    serviceName: string;
    slot: googletag$Slot;
  }

  declare interface events$SlotRenderEndedEvent {
    advertiserId?: number;
    creativeId?: number;
    isEmpty: boolean;
    lineItemId?: number;
    serviceName: string;
    size: number[] | string;
    slot: googletag$Slot;
    sourceAgnosticCreativeId?: number;
    sourceAgnosticLineItemId?: number;
  }

  declare interface events$slotVisibilityChangedEvent {
    inViewPercentage: number;
    serviceName: string;
    slot: googletag$Slot;
  }
  declare var googletag: googletag$googletag$Googletag;
}
