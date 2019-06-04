declare module "global" {
  declare interface HTMLElement {
    /**
     * A value indicating whether the tablesorter has initialized.
     */
    hasInitialized: boolean;

    /**
     * The configuration of the tablesorter.
     */
    config: TablesorterConfigurationStore<this>;
  }
  declare interface JQueryStatic<TElement = HTMLElement> {
    /**
     * The tablesorter.
     */
    tablesorter: Tablesorter<TElement>;
  }
  declare interface JQuery<TElement = HTMLElement> {
    /**
     * Initializes a new `tablesorter`.
     * @param options The options for the tablesorter.
     */
    tablesorter(options?: TablesorterConfiguration<TElement>): this;

    /**
     * Initializes a pager for a tablesorter.
     */
    tablesorterPager(options?: PagerConfiguration<TElement>): this;
    trigger<T: $Keys<TriggerNameMap<TElement>>>(
      name: T,
      extraParameters: $ElementType<TriggerNameMap<TElement>, T>
    ): this;
    trigger(name: ParameterlessTriggerNameMap): this;
    bind(name: EventMap, callback: TablesorterEventHandler<TElement>): this;
    bind(name: ConfigEventMap, callback: ConfigEventHandler<TElement>): this;
    bind(name: "filterStart", callback: FilterEventHandler<TElement>): this;
    bind(name: PagerEventMap, callback: PagerEventHandler<TElement>): this;
    bind(
      name: "stickyHeadersInit",
      callback: CommonEventHandler<TElement>
    ): this;
  }
}
declare module "tablesorter" {
  import type { CoreTheme } from "./Design/CoreTheme";

  import type { Theme } from "./Design/Theme";

  import type { ThemeCollection } from "./Design/ThemeCollection";

  import type { ColumnFilter } from "./Filtering/ColumnFilter";

  import type { FilterBox } from "./Filtering/FilterBox";

  import type { FilterEventHandler } from "./Filtering/FilterEventHandler";

  import type { FilterFunction } from "./Filtering/FilterFunction";

  import type { FilterFunctionCollection } from "./Filtering/FilterFunctionCollection";

  import type { FilterPlaceholders } from "./Filtering/FilterPlaceholders";

  import type { FilterStatic } from "./Filtering/FilterStatic";

  import type { FilterControlFactory } from "./Filtering/Formatter/FilterControlFactory";

  import type { FilterFormatter } from "./Filtering/Formatter/FilterFormatter";

  import type { ComparableOptions } from "./Filtering/Formatter/Options/ComparableOptions";

  import type { ControlOptions } from "./Filtering/Formatter/Options/ControlOptions";

  import type { DateOptions } from "./Filtering/Formatter/Options/DateOptions";

  import type { DefaultValueOptions } from "./Filtering/Formatter/Options/DefaultValueOptions";

  import type { DelayableOptions } from "./Filtering/Formatter/Options/DelayableOptions";

  import type { Html5ColorOptions } from "./Filtering/Formatter/Options/Html5ColorOptions";

  import type { Html5NumberOptions } from "./Filtering/Formatter/Options/Html5NumberOptions";

  import type { Html5RangeOptions } from "./Filtering/Formatter/Options/Html5RangeOptions";

  import type { IntervalOptions } from "./Filtering/Formatter/Options/IntervalOptions";

  import type { NumericOptions } from "./Filtering/Formatter/Options/NumericOptions";

  import type { PreviewableOptions } from "./Filtering/Formatter/Options/PreviewableOptions";

  import type { RangeOptions } from "./Filtering/Formatter/Options/RangeOptions";

  import type { Select2Options } from "./Filtering/Formatter/Options/Select2Options";

  import type { StrictOptions } from "./Filtering/Formatter/Options/StrictOptions";

  import type { TestableOptions } from "./Filtering/Formatter/Options/TestableOptions";

  import type { ToggleableOptions } from "./Filtering/Formatter/Options/ToggleableOptions";

  import type { UIDateCompareOptions } from "./Filtering/Formatter/Options/UIDateCompareOptions";

  import type { UIDateRangeOptions } from "./Filtering/Formatter/Options/UIDateRangeOptions";

  import type { UIRangeOptions } from "./Filtering/Formatter/Options/UIRangeOptions";

  import type { UISliderOptions } from "./Filtering/Formatter/Options/UISliderOptions";

  import type { UISpinnerOptions } from "./Filtering/Formatter/Options/UISpinnerOptions";

  import type { FunctionSelectSource } from "./Filtering/FunctionSelectSource";

  import type { MatchType } from "./Filtering/MatchType";

  import type { MatchTypeSettings } from "./Filtering/MatchTypeSettings";

  import type { SelectSource } from "./Filtering/SelectSource";

  import type { SelectSources } from "./Filtering/SelectSources";

  import type { GlobalizeSettings } from "./Globalization/GlobalizeSettings";

  import type { AjaxDataProcessor } from "./Paging/AjaxDataProcessor";

  import type { AjaxErrorHandler } from "./Paging/AjaxErrorHandler";

  import type { AjaxUrlProcessor } from "./Paging/AjaxUrlProcessor";

  import type { PagerClasses } from "./Paging/PagerClasses";

  import type { PagerConfiguration } from "./Paging/PagerConfiguration";

  import type { PagerConfigurationStore } from "./Paging/PagerConfigurationStore";

  import type { PagerDataPart } from "./Paging/PagerDataPart";

  import type { PagerEventHandler } from "./Paging/PagerEventHandler";

  import type { PagerEventMap } from "./Paging/PagerEventMap";

  import type { PagerInitialRows } from "./Paging/PagerInitialRows";

  import type { PagerMemory } from "./Paging/PagerMemory";

  import type { PagerOutputProcessor } from "./Paging/PagerOutputProcessor";

  import type { PagerSelectors } from "./Paging/PagerSelectors";

  import type { PageSize } from "./Paging/PageSize";

  import type { ParsedCell } from "./Parsing/ParsedCell";

  import type { ParsedData } from "./Parsing/ParsedData";

  import type { ParsedOption } from "./Parsing/ParsedOption";

  import type { Parser } from "./Parsing/Parser";

  import type { ParserType } from "./Parsing/ParserType";

  import type { TextExtractor } from "./Parsing/TextExtractor";

  import type { EmptySorting } from "./Sorting/EmptySorting";

  import type { NumberSorter } from "./Sorting/NumberSorter";

  import type { RelativeSortDefinition } from "./Sorting/RelativeSortDefinition";

  import type { RelativeSorting } from "./Sorting/RelativeSorting";

  import type { SortDefinition } from "./Sorting/SortDefinition";

  import type { SortDefinitionOrder } from "./Sorting/SortDefinitionOrder";

  import type { SortInitiator } from "./Sorting/SortInitiator";

  import type { SortOrder } from "./Sorting/SortOrder";

  import type { StringSorting } from "./Sorting/StringSorting";

  import type { TableSorting } from "./Sorting/TableSorting";

  import type { TextSorter } from "./Sorting/TextSorter";

  import type { StorageConfiguration } from "./Storage/StorageConfiguration";

  import type { StorageType } from "./Storage/StorageType";

  import type { CommonEventHandler } from "./System/CommonEventHandler";

  import type { ConfigEventHandler } from "./System/ConfigEventHandler";

  import type { ConfigEventMap } from "./System/ConfigEventMap";

  import type { EventMap } from "./System/EventMap";

  import type { HeaderResizeOptions } from "./System/HeaderResizeOptions";

  import type { InitializationEventHandler } from "./System/InitializationEventHandler";

  import type { Locale } from "./System/Locale";

  import type { MappedSettings } from "./System/MappedSettings";

  import type { ParameterlessTriggerNameMap } from "./System/ParameterlessTriggerNameMap";

  import type { RenderHeaderEventHandler } from "./System/RenderHeaderEventHandler";

  import type { RenderTemplateEventHandler } from "./System/RenderTemplateEventHandler";

  import type { TablesorterCache } from "./System/TablesorterCache";

  import type { TablesorterConfiguration } from "./System/TablesorterConfiguration";

  import type { TablesorterConfigurationStore } from "./System/TablesorterConfigurationStore";

  import type { TablesorterEventHandler } from "./System/TablesorterEventHandler";

  import type { TablesorterHeading } from "./System/TablesorterHeading";

  import type { TriggerCallbackHandler } from "./System/TriggerCallbackHandler";

  import type { TriggerNameMap } from "./System/TriggerNameMap";

  import type { Tablesorter } from "./Tablesorter";

  import type { Widget } from "./Widgets/Widget";

  import type { WidgetOptions } from "./Widgets/WidgetOptions";

  import type { WidgetOptionStore } from "./Widgets/WidgetOptionStore";

  declare export {
    CoreTheme,
    Theme,
    ThemeCollection,
    ColumnFilter,
    FilterBox,
    FilterFunction,
    FilterEventHandler,
    FilterFunctionCollection,
    FilterPlaceholders,
    FilterStatic,
    FilterControlFactory,
    FilterFormatter,
    ComparableOptions,
    ControlOptions,
    DateOptions,
    DefaultValueOptions,
    DelayableOptions,
    Html5ColorOptions,
    Html5NumberOptions,
    Html5RangeOptions,
    IntervalOptions,
    NumericOptions,
    PreviewableOptions,
    RangeOptions,
    Select2Options,
    StrictOptions,
    TestableOptions,
    ToggleableOptions,
    UIDateCompareOptions,
    UIDateRangeOptions,
    UIRangeOptions,
    UISliderOptions,
    UISpinnerOptions,
    FunctionSelectSource,
    MatchType,
    MatchTypeSettings,
    SelectSource,
    SelectSources,
    GlobalizeSettings,
    AjaxDataProcessor,
    AjaxErrorHandler,
    AjaxUrlProcessor,
    PagerClasses,
    PagerConfiguration,
    PagerConfigurationStore,
    PagerDataPart,
    PagerEventHandler,
    PagerEventMap,
    PagerInitialRows,
    PagerMemory,
    PagerOutputProcessor,
    PagerSelectors,
    PageSize,
    ParsedCell,
    ParsedData,
    ParsedOption,
    Parser,
    ParserType,
    TextExtractor,
    EmptySorting,
    NumberSorter,
    RelativeSortDefinition,
    RelativeSorting,
    SortDefinition,
    SortDefinitionOrder,
    SortInitiator,
    SortOrder,
    StringSorting,
    TableSorting,
    TextSorter,
    StorageConfiguration,
    StorageType,
    CommonEventHandler,
    ConfigEventHandler,
    ConfigEventMap,
    EventMap,
    HeaderResizeOptions,
    InitializationEventHandler,
    Locale,
    MappedSettings,
    ParameterlessTriggerNameMap,
    RenderHeaderEventHandler,
    RenderTemplateEventHandler,
    TablesorterCache,
    TablesorterConfiguration,
    TablesorterConfigurationStore,
    TablesorterEventHandler,
    TablesorterHeading,
    TriggerCallbackHandler,
    TriggerNameMap,
    Tablesorter,
    Widget,
    WidgetOptions,
    WidgetOptionStore
  };
}
