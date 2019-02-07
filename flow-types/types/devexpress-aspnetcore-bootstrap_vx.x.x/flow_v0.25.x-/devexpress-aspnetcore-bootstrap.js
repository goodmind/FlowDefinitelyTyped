declare module "devexpress-aspnetcore-bootstrap" {
  declare var npm$namespace$AspNetCore: {
    Utils: typeof AspNetCore$Utils
  };
  declare class AspNetCore$BootstrapSchedulerGroupType {
    constructor(...args: empty): mixed;
    static +Date: Class<AspNetCore$BootstrapSchedulerGroupType__Date> &
      AspNetCore$BootstrapSchedulerGroupType__Date &
      "Date"; // "Date"
    static +None: Class<AspNetCore$BootstrapSchedulerGroupType__None> &
      AspNetCore$BootstrapSchedulerGroupType__None &
      "None"; // "None"
    static +Resource: Class<AspNetCore$BootstrapSchedulerGroupType__Resource> &
      AspNetCore$BootstrapSchedulerGroupType__Resource &
      "Resource"; // "Resource"
  }

  declare class AspNetCore$BootstrapSchedulerGroupType__Date
    mixins AspNetCore$BootstrapSchedulerGroupType {}
  declare class AspNetCore$BootstrapSchedulerGroupType__None
    mixins AspNetCore$BootstrapSchedulerGroupType {}
  declare class AspNetCore$BootstrapSchedulerGroupType__Resource
    mixins AspNetCore$BootstrapSchedulerGroupType {}

  declare class AspNetCore$BootstrapSchedulerViewType {
    constructor(...args: empty): mixed;
    static +Day: Class<AspNetCore$BootstrapSchedulerViewType__Day> &
      AspNetCore$BootstrapSchedulerViewType__Day &
      "Day"; // "Day"
    static +WorkWeek: Class<AspNetCore$BootstrapSchedulerViewType__WorkWeek> &
      AspNetCore$BootstrapSchedulerViewType__WorkWeek &
      "WorkWeek"; // "WorkWeek"
    static +Week: Class<AspNetCore$BootstrapSchedulerViewType__Week> &
      AspNetCore$BootstrapSchedulerViewType__Week &
      "Week"; // "Week"
    static +Month: Class<AspNetCore$BootstrapSchedulerViewType__Month> &
      AspNetCore$BootstrapSchedulerViewType__Month &
      "Month"; // "Month"
    static +Timeline: Class<AspNetCore$BootstrapSchedulerViewType__Timeline> &
      AspNetCore$BootstrapSchedulerViewType__Timeline &
      "Timeline"; // "Timeline"
    static +FullWeek: Class<AspNetCore$BootstrapSchedulerViewType__FullWeek> &
      AspNetCore$BootstrapSchedulerViewType__FullWeek &
      "FullWeek"; // "FullWeek"
    static +Agenda: Class<AspNetCore$BootstrapSchedulerViewType__Agenda> &
      AspNetCore$BootstrapSchedulerViewType__Agenda &
      "Agenda"; // "Agenda"
  }

  declare class AspNetCore$BootstrapSchedulerViewType__Day
    mixins AspNetCore$BootstrapSchedulerViewType {}
  declare class AspNetCore$BootstrapSchedulerViewType__WorkWeek
    mixins AspNetCore$BootstrapSchedulerViewType {}
  declare class AspNetCore$BootstrapSchedulerViewType__Week
    mixins AspNetCore$BootstrapSchedulerViewType {}
  declare class AspNetCore$BootstrapSchedulerViewType__Month
    mixins AspNetCore$BootstrapSchedulerViewType {}
  declare class AspNetCore$BootstrapSchedulerViewType__Timeline
    mixins AspNetCore$BootstrapSchedulerViewType {}
  declare class AspNetCore$BootstrapSchedulerViewType__FullWeek
    mixins AspNetCore$BootstrapSchedulerViewType {}
  declare class AspNetCore$BootstrapSchedulerViewType__Agenda
    mixins AspNetCore$BootstrapSchedulerViewType {}

  declare class AspNetCore$BootstrapSchedulerAppointmentType {
    constructor(...args: empty): mixed;
    static +Normal: Class<AspNetCore$BootstrapSchedulerAppointmentType__Normal> &
      AspNetCore$BootstrapSchedulerAppointmentType__Normal &
      "Normal"; // "Normal"
    static +Pattern: Class<AspNetCore$BootstrapSchedulerAppointmentType__Pattern> &
      AspNetCore$BootstrapSchedulerAppointmentType__Pattern &
      "Pattern"; // "Pattern"
    static +Occurrence: Class<AspNetCore$BootstrapSchedulerAppointmentType__Occurrence> &
      AspNetCore$BootstrapSchedulerAppointmentType__Occurrence &
      "Occurrence"; // "Occurrence"
    static +ChangedOccurrence: Class<AspNetCore$BootstrapSchedulerAppointmentType__ChangedOccurrence> &
      AspNetCore$BootstrapSchedulerAppointmentType__ChangedOccurrence &
      "ChangedOccurrence"; // "ChangedOccurrence"
    static +DeletedOccurrence: Class<AspNetCore$BootstrapSchedulerAppointmentType__DeletedOccurrence> &
      AspNetCore$BootstrapSchedulerAppointmentType__DeletedOccurrence &
      "DeletedOccurrence"; // "DeletedOccurrence"
  }

  declare class AspNetCore$BootstrapSchedulerAppointmentType__Normal
    mixins AspNetCore$BootstrapSchedulerAppointmentType {}
  declare class AspNetCore$BootstrapSchedulerAppointmentType__Pattern
    mixins AspNetCore$BootstrapSchedulerAppointmentType {}
  declare class AspNetCore$BootstrapSchedulerAppointmentType__Occurrence
    mixins AspNetCore$BootstrapSchedulerAppointmentType {}
  declare class AspNetCore$BootstrapSchedulerAppointmentType__ChangedOccurrence
    mixins AspNetCore$BootstrapSchedulerAppointmentType {}
  declare class AspNetCore$BootstrapSchedulerAppointmentType__DeletedOccurrence
    mixins AspNetCore$BootstrapSchedulerAppointmentType {}

  declare class AspNetCore$BootstrapSchedulerRecurrenceRange {
    constructor(...args: empty): mixed;
    static +NoEndDate: Class<AspNetCore$BootstrapSchedulerRecurrenceRange__NoEndDate> &
      AspNetCore$BootstrapSchedulerRecurrenceRange__NoEndDate &
      "NoEndDate"; // "NoEndDate"
    static +OccurrenceCount: Class<AspNetCore$BootstrapSchedulerRecurrenceRange__OccurrenceCount> &
      AspNetCore$BootstrapSchedulerRecurrenceRange__OccurrenceCount &
      "OccurrenceCount"; // "OccurrenceCount"
    static +EndByDate: Class<AspNetCore$BootstrapSchedulerRecurrenceRange__EndByDate> &
      AspNetCore$BootstrapSchedulerRecurrenceRange__EndByDate &
      "EndByDate"; // "EndByDate"
  }

  declare class AspNetCore$BootstrapSchedulerRecurrenceRange__NoEndDate
    mixins AspNetCore$BootstrapSchedulerRecurrenceRange {}
  declare class AspNetCore$BootstrapSchedulerRecurrenceRange__OccurrenceCount
    mixins AspNetCore$BootstrapSchedulerRecurrenceRange {}
  declare class AspNetCore$BootstrapSchedulerRecurrenceRange__EndByDate
    mixins AspNetCore$BootstrapSchedulerRecurrenceRange {}

  declare class AspNetCore$BootstrapSchedulerRecurrenceType {
    constructor(...args: empty): mixed;
    static +Daily: Class<AspNetCore$BootstrapSchedulerRecurrenceType__Daily> &
      AspNetCore$BootstrapSchedulerRecurrenceType__Daily &
      "Daily"; // "Daily"
    static +Weekly: Class<AspNetCore$BootstrapSchedulerRecurrenceType__Weekly> &
      AspNetCore$BootstrapSchedulerRecurrenceType__Weekly &
      "Weekly"; // "Weekly"
    static +Monthly: Class<AspNetCore$BootstrapSchedulerRecurrenceType__Monthly> &
      AspNetCore$BootstrapSchedulerRecurrenceType__Monthly &
      "Monthly"; // "Monthly"
    static +Yearly: Class<AspNetCore$BootstrapSchedulerRecurrenceType__Yearly> &
      AspNetCore$BootstrapSchedulerRecurrenceType__Yearly &
      "Yearly"; // "Yearly"
    static +Hourly: Class<AspNetCore$BootstrapSchedulerRecurrenceType__Hourly> &
      AspNetCore$BootstrapSchedulerRecurrenceType__Hourly &
      "Hourly"; // "Hourly"
  }

  declare class AspNetCore$BootstrapSchedulerRecurrenceType__Daily
    mixins AspNetCore$BootstrapSchedulerRecurrenceType {}
  declare class AspNetCore$BootstrapSchedulerRecurrenceType__Weekly
    mixins AspNetCore$BootstrapSchedulerRecurrenceType {}
  declare class AspNetCore$BootstrapSchedulerRecurrenceType__Monthly
    mixins AspNetCore$BootstrapSchedulerRecurrenceType {}
  declare class AspNetCore$BootstrapSchedulerRecurrenceType__Yearly
    mixins AspNetCore$BootstrapSchedulerRecurrenceType {}
  declare class AspNetCore$BootstrapSchedulerRecurrenceType__Hourly
    mixins AspNetCore$BootstrapSchedulerRecurrenceType {}

  declare class AspNetCore$WeekDays {
    constructor(...args: empty): mixed;
    static +Sunday: Class<AspNetCore$WeekDays__Sunday> &
      AspNetCore$WeekDays__Sunday &
      1; // 1
    static +Monday: Class<AspNetCore$WeekDays__Monday> &
      AspNetCore$WeekDays__Monday &
      2; // 2
    static +Tuesday: Class<AspNetCore$WeekDays__Tuesday> &
      AspNetCore$WeekDays__Tuesday &
      4; // 4
    static +Wednesday: Class<AspNetCore$WeekDays__Wednesday> &
      AspNetCore$WeekDays__Wednesday &
      8; // 8
    static +Thursday: Class<AspNetCore$WeekDays__Thursday> &
      AspNetCore$WeekDays__Thursday &
      16; // 16
    static +Friday: Class<AspNetCore$WeekDays__Friday> &
      AspNetCore$WeekDays__Friday &
      32; // 32
    static +Saturday: Class<AspNetCore$WeekDays__Saturday> &
      AspNetCore$WeekDays__Saturday &
      64; // 64
    static +WeekendDays: Class<AspNetCore$WeekDays__WeekendDays> &
      AspNetCore$WeekDays__WeekendDays &
      65; // 65
    static +WorkDays: Class<AspNetCore$WeekDays__WorkDays> &
      AspNetCore$WeekDays__WorkDays &
      62; // 62
    static +EveryDay: Class<AspNetCore$WeekDays__EveryDay> &
      AspNetCore$WeekDays__EveryDay &
      127; // 127
  }

  declare class AspNetCore$WeekDays__Sunday mixins AspNetCore$WeekDays {}
  declare class AspNetCore$WeekDays__Monday mixins AspNetCore$WeekDays {}
  declare class AspNetCore$WeekDays__Tuesday mixins AspNetCore$WeekDays {}
  declare class AspNetCore$WeekDays__Wednesday mixins AspNetCore$WeekDays {}
  declare class AspNetCore$WeekDays__Thursday mixins AspNetCore$WeekDays {}
  declare class AspNetCore$WeekDays__Friday mixins AspNetCore$WeekDays {}
  declare class AspNetCore$WeekDays__Saturday mixins AspNetCore$WeekDays {}
  declare class AspNetCore$WeekDays__WeekendDays mixins AspNetCore$WeekDays {}
  declare class AspNetCore$WeekDays__WorkDays mixins AspNetCore$WeekDays {}
  declare class AspNetCore$WeekDays__EveryDay mixins AspNetCore$WeekDays {}

  declare class AspNetCore$WeekOfMonth {
    constructor(...args: empty): mixed;
    static +None: Class<AspNetCore$WeekOfMonth__None> &
      AspNetCore$WeekOfMonth__None &
      0; // 0
    static +First: Class<AspNetCore$WeekOfMonth__First> &
      AspNetCore$WeekOfMonth__First &
      1; // 1
    static +Second: Class<AspNetCore$WeekOfMonth__Second> &
      AspNetCore$WeekOfMonth__Second &
      2; // 2
    static +Third: Class<AspNetCore$WeekOfMonth__Third> &
      AspNetCore$WeekOfMonth__Third &
      3; // 3
    static +Fourth: Class<AspNetCore$WeekOfMonth__Fourth> &
      AspNetCore$WeekOfMonth__Fourth &
      4; // 4
    static +Last: Class<AspNetCore$WeekOfMonth__Last> &
      AspNetCore$WeekOfMonth__Last &
      5; // 5
  }

  declare class AspNetCore$WeekOfMonth__None mixins AspNetCore$WeekOfMonth {}
  declare class AspNetCore$WeekOfMonth__First mixins AspNetCore$WeekOfMonth {}
  declare class AspNetCore$WeekOfMonth__Second mixins AspNetCore$WeekOfMonth {}
  declare class AspNetCore$WeekOfMonth__Third mixins AspNetCore$WeekOfMonth {}
  declare class AspNetCore$WeekOfMonth__Fourth mixins AspNetCore$WeekOfMonth {}
  declare class AspNetCore$WeekOfMonth__Last mixins AspNetCore$WeekOfMonth {}

  declare class AspNetCore$BootstrapPopupControlCloseReason {
    constructor(...args: empty): mixed;
    static +API: Class<AspNetCore$BootstrapPopupControlCloseReason__API> &
      AspNetCore$BootstrapPopupControlCloseReason__API &
      "API"; // "API"
    static +CloseButton: Class<AspNetCore$BootstrapPopupControlCloseReason__CloseButton> &
      AspNetCore$BootstrapPopupControlCloseReason__CloseButton &
      "CloseButton"; // "CloseButton"
    static +OuterMouseClick: Class<AspNetCore$BootstrapPopupControlCloseReason__OuterMouseClick> &
      AspNetCore$BootstrapPopupControlCloseReason__OuterMouseClick &
      "OuterMouseClick"; // "OuterMouseClick"
    static +MouseOut: Class<AspNetCore$BootstrapPopupControlCloseReason__MouseOut> &
      AspNetCore$BootstrapPopupControlCloseReason__MouseOut &
      "MouseOut"; // "MouseOut"
    static +Escape: Class<AspNetCore$BootstrapPopupControlCloseReason__Escape> &
      AspNetCore$BootstrapPopupControlCloseReason__Escape &
      "Escape"; // "Escape"
  }

  declare class AspNetCore$BootstrapPopupControlCloseReason__API
    mixins AspNetCore$BootstrapPopupControlCloseReason {}
  declare class AspNetCore$BootstrapPopupControlCloseReason__CloseButton
    mixins AspNetCore$BootstrapPopupControlCloseReason {}
  declare class AspNetCore$BootstrapPopupControlCloseReason__OuterMouseClick
    mixins AspNetCore$BootstrapPopupControlCloseReason {}
  declare class AspNetCore$BootstrapPopupControlCloseReason__MouseOut
    mixins AspNetCore$BootstrapPopupControlCloseReason {}
  declare class AspNetCore$BootstrapPopupControlCloseReason__Escape
    mixins AspNetCore$BootstrapPopupControlCloseReason {}

  declare var AspNetCore$Utils: {
    getControls: () => AspNetCore$Control[],
    getSerializedEditorValuesInContainer: (
      containerOrId: string | HTMLElement,
      processInvisibleEditors?: boolean
    ) => any,
    getEditorValuesInContainer: (
      containerOrId: string | HTMLElement,
      processInvisibleEditors?: boolean
    ) => any
  };

  declare interface AspNetCore$EventArgs {
    +sender: AspNetCore$Control;
  }

  declare type AspNetCore$CancelEventArgs = {
    cancel: boolean
  } & AspNetCore$EventArgs;

  declare type AspNetCore$BeginCallbackEventArgs = {
    +command: string
  } & AspNetCore$EventArgs;

  declare type AspNetCore$ProcessingModeEventArgs = {
    processOnServer: boolean
  } & AspNetCore$EventArgs;

  declare type AspNetCore$ProcessingModeCancelEventArgs = {
    cancel: boolean
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$GlobalBeginCallbackEventArgs = {
    +control: AspNetCore$Control
  } & AspNetCore$BeginCallbackEventArgs;

  declare type AspNetCore$EndCallbackEventArgs = {} & AspNetCore$EventArgs;

  declare type AspNetCore$GlobalEndCallbackEventArgs = {
    +control: AspNetCore$Control
  } & AspNetCore$EndCallbackEventArgs;

  declare type AspNetCore$CustomDataCallbackEventArgs = {
    result: string
  } & AspNetCore$EventArgs;

  declare type AspNetCore$CallbackErrorEventArgs = {
    handled: boolean,
    message: string
  } & AspNetCore$EventArgs;

  declare type AspNetCore$GlobalCallbackErrorEventArgs = {
    +control: AspNetCore$Control
  } & AspNetCore$CallbackErrorEventArgs;

  declare type AspNetCore$EditValidationEventArgs = {
    errorText: string,
    isValid: boolean,
    value: string
  } & AspNetCore$EventArgs;

  declare type AspNetCore$ValidationCompletedEventArgs = {
    +container: any,
    +firstInvalidControl: AspNetCore$Control,
    +firstVisibleInvalidControl: AspNetCore$Control,
    +invisibleControlsValidated: boolean,
    isValid: boolean,
    +validationGroup: string
  } & AspNetCore$EventArgs;

  declare type AspNetCore$EditClickEventArgs = {
    +htmlElement: any,
    +htmlEvent: any
  } & AspNetCore$EventArgs;

  declare type AspNetCore$EditKeyEventArgs = {
    +htmlEvent: any
  } & AspNetCore$EventArgs;

  declare class AspNetCore$Control {
    instance: any;
    constructor(instance: any): this;
    name: string;
    adjustControl(): void;
    getHeight(): number;
    getMainElement(): any;
    getParentControl(): any;
    getVisible(): boolean;
    getWidth(): number;
    inCallback(): boolean;
    sendMessageToAssistiveTechnology(message: string): void;
    setHeight(height: number): void;
    setVisible(visible: boolean): void;
    setWidth(width: number): void;
    on<K: $Keys<AspNetCore$ControlEventMap>>(
      eventName: K,
      callback: (args?: $ElementType<AspNetCore$ControlEventMap, K>) => void
    ): this;
    once<K: $Keys<AspNetCore$ControlEventMap>>(
      eventName: K,
      callback: (args?: $ElementType<AspNetCore$ControlEventMap, K>) => void
    ): this;
    off<K: $Keys<AspNetCore$ControlEventMap>>(): this;
    off<K: $Keys<AspNetCore$ControlEventMap>>(eventName: K): this;
    off<K: $Keys<AspNetCore$ControlEventMap>>(
      eventName: K,
      callback: (args?: $ElementType<AspNetCore$ControlEventMap, K>) => void
    ): this;
  }

  declare interface AspNetCore$ControlEventMap {
    init: AspNetCore$EventArgs;
  }

  declare class AspNetCore$BootstrapClientEdit mixins AspNetCore$Control {
    focus(): void;
    getCaption(): string;
    getEnabled(): boolean;
    getErrorText(): string;
    getInputElement(): any;
    getIsValid(): boolean;
    getReadOnly(): boolean;
    getValue(): any;
    setCaption(caption: string): void;
    setEnabled(value: boolean): void;
    setErrorText(errorText: string): void;
    setIsValid(isValid: boolean): void;
    setReadOnly(readOnly: boolean): void;
    setValue(value: any): void;
    validate(): void;
    on<K: $Keys<AspNetCore$BootstrapClientEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapClientEditEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapClientEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapClientEditEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapClientEditEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapClientEditEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapClientEditEventMap = {
    gotFocus: AspNetCore$EventArgs,
    lostFocus: AspNetCore$EventArgs,
    validation: AspNetCore$EditValidationEventArgs,
    valueChanged: AspNetCore$ProcessingModeEventArgs
  } & AspNetCore$ControlEventMap;

  declare type AspNetCore$AccordionItemEventArgs = {
    +htmlElement: { [key: string]: any },
    +htmlEvent: { [key: string]: any },
    +item: AspNetCore$BootstrapAccordionItem
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$AccordionGroupEventArgs = {
    +group: AspNetCore$BootstrapAccordionGroup
  } & AspNetCore$EventArgs;

  declare type AspNetCore$AccordionGroupCancelEventArgs = {
    +group: AspNetCore$BootstrapAccordionGroup
  } & AspNetCore$ProcessingModeCancelEventArgs;

  declare type AspNetCore$AccordionGroupClickEventArgs = {
    +htmlElement: { [key: string]: any },
    +htmlEvent: { [key: string]: any }
  } & AspNetCore$AccordionGroupCancelEventArgs;

  declare class AspNetCore$BootstrapAccordion mixins AspNetCore$Control {
    collapseAll(): void;
    expandAll(): void;
    getActiveGroup(): AspNetCore$BootstrapAccordionGroup | null;
    getGroup(index: number): AspNetCore$BootstrapAccordionGroup | null;
    getGroupByName(name: string): AspNetCore$BootstrapAccordionGroup | null;
    getGroupCount(): number;
    getItemByName(name: string): AspNetCore$BootstrapAccordionItem | null;
    getSelectedItem(): AspNetCore$BootstrapAccordionItem | null;
    setActiveGroup(group: AspNetCore$BootstrapAccordionGroup): void;
    setSelectedItem(item: AspNetCore$BootstrapAccordionItem): void;
    on<K: $Keys<AspNetCore$BootstrapAccordionEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapAccordionEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapAccordionEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapAccordionEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapAccordionEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapAccordionEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapAccordionEventMap = {
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs,
    expandedChanged: AspNetCore$AccordionGroupEventArgs,
    expandedChanging: AspNetCore$AccordionGroupCancelEventArgs,
    headerClick: AspNetCore$AccordionGroupClickEventArgs,
    itemClick: AspNetCore$AccordionItemEventArgs
  } & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapAccordionGroup {
    instance: any;
    constructor(instance: any): this;
    index: number;
    name: string;
    navBar: AspNetCore$BootstrapAccordion | null;
    getEnabled(): boolean;
    getExpanded(): boolean;
    getHeaderBadgeIconCssClass(): string;
    getHeaderBadgeText(): string;
    getItem(index: number): AspNetCore$BootstrapAccordionItem | null;
    getItemByName(name: string): AspNetCore$BootstrapAccordionItem | null;
    getItemCount(): number;
    getText(): string;
    getVisible(): boolean;
    setExpanded(value: boolean): void;
    setHeaderBadgeIconCssClass(cssClass: string): void;
    setHeaderBadgeText(text: string): void;
    setText(text: string): void;
    setVisible(value: boolean): void;
  }

  declare class AspNetCore$BootstrapAccordionItem {
    instance: any;
    constructor(instance: any): this;
    group: AspNetCore$BootstrapAccordionGroup | null;
    index: number;
    name: string;
    navBar: AspNetCore$BootstrapAccordion | null;
    getBadgeIconCssClass(): string;
    getBadgeText(): string;
    getEnabled(): boolean;
    getIconCssClass(): string;
    getImageUrl(): string;
    getNavigateUrl(): string;
    getText(): string;
    getVisible(): boolean;
    setBadgeIconCssClass(cssClass: string): void;
    setBadgeText(text: string): void;
    setEnabled(value: boolean): void;
    setIconCssClass(cssClass: string): void;
    setImageUrl(value: string): void;
    setNavigateUrl(value: string): void;
    setText(value: string): void;
    setVisible(value: boolean): void;
  }

  declare class AspNetCore$BootstrapBinaryImage
    mixins AspNetCore$BootstrapClientEdit {
    clear(): void;
    getUploadedFileName(): string;
    getValue(): any;
    performCallback(data: any): Promise<void>;
    performCallback(data: any, onSuccess: () => void): void;
    setSize(width: number, height: number): void;
    setValue(value: any): void;
    on<K: $Keys<AspNetCore$BootstrapBinaryImageEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapBinaryImageEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapBinaryImageEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapBinaryImageEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapBinaryImageEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapBinaryImageEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapBinaryImageEventMap = {
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    click: AspNetCore$EditClickEventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare type AspNetCore$ButtonClickEventArgs = {
    +cancelEventAndBubble: boolean
  } & AspNetCore$ProcessingModeEventArgs;

  declare class AspNetCore$BootstrapButton mixins AspNetCore$Control {
    doClick(): void;
    focus(): void;
    getBadgeIconCssClass(): string;
    getBadgeText(): string;
    getChecked(): boolean;
    getEnabled(): boolean;
    getImageUrl(): string;
    getText(): string;
    setBadgeIconCssClass(cssClass: string): void;
    setBadgeText(text: string): void;
    setChecked(value: boolean): void;
    setEnabled(value: boolean): void;
    setImageUrl(value: string): void;
    setText(value: string): void;
    on<K: $Keys<AspNetCore$BootstrapButtonEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapButtonEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapButtonEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapButtonEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapButtonEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapButtonEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapButtonEventMap = {
    checkedChanged: AspNetCore$ProcessingModeEventArgs,
    click: AspNetCore$ButtonClickEventArgs,
    gotFocus: AspNetCore$EventArgs,
    lostFocus: AspNetCore$EventArgs
  } & AspNetCore$ControlEventMap;

  declare type AspNetCore$CalendarCustomDisabledDateEventArgs = {
    +date: Date,
    isDisabled: boolean
  } & AspNetCore$EventArgs;

  declare class AspNetCore$BootstrapCalendar
    mixins AspNetCore$BootstrapClientEdit {
    clearSelection(): void;
    deselectDate(date: Date): void;
    deselectRange(start: Date, end: Date): void;
    getEnabled(): boolean;
    getMaxDate(): Date;
    getMinDate(): Date;
    getSelectedDate(): Date;
    getSelectedDates(): Date[];
    getVisibleDate(): Date;
    isDateSelected(date: Date): boolean;
    selectDate(date: Date): void;
    selectRange(start: Date, end: Date): void;
    setEnabled(enabled: boolean): void;
    setMaxDate(date: Date): void;
    setMinDate(date: Date): void;
    setSelectedDate(date: Date): void;
    setVisibleDate(date: Date): void;
    on<K: $Keys<AspNetCore$BootstrapCalendarEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapCalendarEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapCalendarEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapCalendarEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapCalendarEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapCalendarEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapCalendarEventMap = {
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    customDisabledDate: AspNetCore$CalendarCustomDisabledDateEventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs,
    keyDown: AspNetCore$EditKeyEventArgs,
    keyPress: AspNetCore$EditKeyEventArgs,
    keyUp: AspNetCore$EditKeyEventArgs,
    selectionChanged: AspNetCore$ProcessingModeEventArgs,
    visibleMonthChanged: AspNetCore$ProcessingModeEventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare type AspNetCore$GridToolbarItemClickEventArgs = {
    +item: AspNetCore$BootstrapMenuItem,
    +toolbarIndex: number,
    +toolbarName: string,
    usePostBack: boolean
  } & AspNetCore$ProcessingModeEventArgs;

  declare class AspNetCore$BootstrapGridBase mixins AspNetCore$Control {
    getToolbar(index: number): AspNetCore$BootstrapMenu | null;
    getToolbarByName(name: string): AspNetCore$BootstrapMenu | null;
    on<K: $Keys<AspNetCore$BootstrapGridBaseEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapGridBaseEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapGridBaseEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapGridBaseEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapGridBaseEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapGridBaseEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapGridBaseEventMap = {
    toolbarItemClick: AspNetCore$GridToolbarItemClickEventArgs
  } & AspNetCore$ControlEventMap;

  declare type AspNetCore$CardViewColumnCancelEventArgs = {
    +column: AspNetCore$BootstrapCardViewColumn
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$CardViewCardFocusingEventArgs = {
    +htmlEvent: any,
    +visibleIndex: number
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$CardViewCardClickEventArgs = {
    +htmlEvent: any,
    +visibleIndex: number
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$CardViewCustomButtonEventArgs = {
    +buttonID: string,
    +visibleIndex: number
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$CardViewSelectionEventArgs = {
    +isAllRecordsOnPage: boolean,
    +isChangedOnServer: boolean,
    +isSelected: boolean,
    +visibleIndex: number
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$CardViewFocusEventArgs = {
    +isChangedOnServer: boolean
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$CardViewBatchEditStartEditingEventArgs = {
    +cardValues: any,
    focusedColumn: AspNetCore$BootstrapCardViewColumn,
    +visibleIndex: number
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$CardViewBatchEditEndEditingEventArgs = {
    +cardValues: any,
    +visibleIndex: number
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$CardViewBatchEditCardValidatingEventArgs = {
    +validationInfo: any,
    +visibleIndex: number
  } & AspNetCore$EventArgs;

  declare type AspNetCore$CardViewBatchEditConfirmShowingEventArgs = {
    +requestTriggerID: string
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$CardViewBatchEditTemplateCellFocusedEventArgs = {
    +column: AspNetCore$BootstrapCardViewColumn,
    handled: boolean
  } & AspNetCore$EventArgs;

  declare type AspNetCore$CardViewBatchEditChangesSavingEventArgs = {
    +deletedValues: any,
    +insertedValues: any,
    +updatedValues: any
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$CardViewBatchEditChangesCancelingEventArgs = {
    +deletedValues: any,
    +insertedValues: any,
    +updatedValues: any
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$CardViewBatchEditCardInsertingEventArgs = {
    +visibleIndex: number
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$CardViewBatchEditCardDeletingEventArgs = {
    +cardValues: any,
    +visibleIndex: number
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$CardViewFocusedCellChangingEventArgs = {
    +cellInfo: AspNetCore$BootstrapCardViewCellInfo
  } & AspNetCore$CancelEventArgs;

  declare class AspNetCore$BootstrapCardView
    mixins AspNetCore$BootstrapGridBase {
    batchEditApi: AspNetCore$BootstrapCardViewBatchEditApi | null;
    addNewCard(): void;
    applyFilter(filterExpression: string): void;
    applySearchPanelFilter(value: string): void;
    cancelEdit(): void;
    clearFilter(): void;
    closeFilterControl(): void;
    deleteCard(visibleIndex: number): void;
    deleteCardByKey(key: any): void;
    focus(): void;
    focusEditor(column: AspNetCore$BootstrapCardViewColumn): void;
    focusEditor(columnIndex: number): void;
    focusEditor(columnFieldNameOrId: string): void;
    getCardKey(visibleIndex: number): string;
    getColumn(columnIndex: number): AspNetCore$BootstrapCardViewColumn | null;
    getColumnByField(
      columnFieldName: string
    ): AspNetCore$BootstrapCardViewColumn | null;
    getColumnById(columnId: string): AspNetCore$BootstrapCardViewColumn | null;
    getColumnCount(): number;
    getEditValue(column: AspNetCore$BootstrapCardViewColumn): string;
    getEditValue(columnIndex: number): string;
    getEditValue(columnFieldNameOrId: string): string;
    getEditor(
      column: AspNetCore$BootstrapCardViewColumn
    ): AspNetCore$BootstrapClientEdit;
    getEditor(columnIndex: number): AspNetCore$BootstrapClientEdit;
    getEditor(columnFieldNameOrId: string): AspNetCore$BootstrapClientEdit;
    getFocusedCardIndex(): number;
    getFocusedCell(): AspNetCore$BootstrapCardViewCellInfo | null;
    getPageCount(): number;
    getPageIndex(): number;
    getPopupEditForm(): AspNetCore$BootstrapPopupControl | null;
    getSelectedCardCount(): number;
    getSelectedKeysOnPage(): any[];
    getTopVisibleIndex(): number;
    getVerticalScrollPosition(): number;
    getVisibleCardsOnPage(): number;
    gotoPage(pageIndex: number): void;
    hideCustomizationWindow(): void;
    isCardSelectedOnPage(visibleIndex: number): boolean;
    isCustomizationWindowVisible(): boolean;
    isEditing(): boolean;
    isNewCardEditing(): boolean;
    moveColumn(column: AspNetCore$BootstrapCardViewColumn): void;
    moveColumn(columnIndex: number): void;
    moveColumn(columnFieldNameOrId: string): void;
    moveColumn(
      column: AspNetCore$BootstrapCardViewColumn,
      moveToColumnVisibleIndex: number
    ): void;
    moveColumn(columnIndex: number, moveToColumnVisibleIndex: number): void;
    moveColumn(
      columnFieldNameOrId: string,
      moveToColumnVisibleIndex: number
    ): void;
    moveColumn(
      column: AspNetCore$BootstrapCardViewColumn,
      moveToColumnVisibleIndex: number,
      moveBefore: boolean
    ): void;
    moveColumn(
      columnIndex: number,
      moveToColumnVisibleIndex: number,
      moveBefore: boolean
    ): void;
    moveColumn(
      columnFieldNameOrId: string,
      moveToColumnVisibleIndex: number,
      moveBefore: boolean
    ): void;
    nextPage(): void;
    performCallback(data: any): Promise<void>;
    performCallback(data: any, onSuccess: () => void): void;
    prevPage(): void;
    refresh(): void;
    selectAllCardsOnPage(): void;
    selectCardOnPage(visibleIndex: number): void;
    selectCardOnPage(visibleIndex: number, selected: boolean): void;
    selectCards(): void;
    selectCardsByKey(keys: any[]): void;
    selectCardsByKey(key: any): void;
    selectCardsByKey(keys: any[], selected: boolean): void;
    selectCardsByKey(key: any, selected: boolean): void;
    setEditValue(
      column: AspNetCore$BootstrapCardViewColumn,
      value: string
    ): void;
    setEditValue(columnIndex: number, value: string): void;
    setEditValue(columnFieldNameOrId: string, value: string): void;
    setFilterEnabled(isFilterEnabled: boolean): void;
    setFocusedCardIndex(visibleIndex: number): void;
    setFocusedCell(cardVisibleIndex: number, columnIndex: number): void;
    setSearchPanelCustomEditor(editor: AspNetCore$BootstrapClientEdit): void;
    setVerticalScrollPosition(position: number): void;
    showCustomizationWindow(): void;
    showFilterControl(): void;
    sortBy(column: AspNetCore$BootstrapCardViewColumn): void;
    sortBy(columnIndex: number): void;
    sortBy(columnFieldNameOrId: string): void;
    sortBy(column: AspNetCore$BootstrapCardViewColumn, sortOrder: string): void;
    sortBy(columnIndex: number, sortOrder: string): void;
    sortBy(columnFieldNameOrId: string, sortOrder: string): void;
    sortBy(
      column: AspNetCore$BootstrapCardViewColumn,
      sortOrder: string,
      reset: boolean
    ): void;
    sortBy(columnIndex: number, sortOrder: string, reset: boolean): void;
    sortBy(
      columnFieldNameOrId: string,
      sortOrder: string,
      reset: boolean
    ): void;
    sortBy(
      column: AspNetCore$BootstrapCardViewColumn,
      sortOrder: string,
      reset: boolean,
      sortIndex: number
    ): void;
    sortBy(
      columnIndex: number,
      sortOrder: string,
      reset: boolean,
      sortIndex: number
    ): void;
    sortBy(
      columnFieldNameOrId: string,
      sortOrder: string,
      reset: boolean,
      sortIndex: number
    ): void;
    startEditCard(visibleIndex: number): void;
    startEditCardByKey(key: any): void;
    unselectAllCardsOnPage(): void;
    unselectCardOnPage(visibleIndex: number): void;
    unselectCards(): void;
    unselectCardsByKey(keys: any[]): void;
    unselectCardsByKey(key: any): void;
    unselectFilteredCards(): void;
    updateEdit(): void;
    on<K: $Keys<AspNetCore$BootstrapCardViewEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapCardViewEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapCardViewEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapCardViewEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapCardViewEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapCardViewEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapCardViewEventMap = {
    batchEditCardDeleting: AspNetCore$CardViewBatchEditCardDeletingEventArgs,
    batchEditCardInserting: AspNetCore$CardViewBatchEditCardInsertingEventArgs,
    batchEditCardValidating: AspNetCore$CardViewBatchEditCardValidatingEventArgs,
    batchEditChangesCanceling: AspNetCore$CardViewBatchEditChangesCancelingEventArgs,
    batchEditChangesSaving: AspNetCore$CardViewBatchEditChangesSavingEventArgs,
    batchEditConfirmShowing: AspNetCore$CardViewBatchEditConfirmShowingEventArgs,
    batchEditEndEditing: AspNetCore$CardViewBatchEditEndEditingEventArgs,
    batchEditStartEditing: AspNetCore$CardViewBatchEditStartEditingEventArgs,
    batchEditTemplateCellFocused: AspNetCore$CardViewBatchEditTemplateCellFocusedEventArgs,
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    cardClick: AspNetCore$CardViewCardClickEventArgs,
    cardDblClick: AspNetCore$CardViewCardClickEventArgs,
    cardFocusing: AspNetCore$CardViewCardFocusingEventArgs,
    columnSorting: AspNetCore$CardViewColumnCancelEventArgs,
    customButtonClick: AspNetCore$CardViewCustomButtonEventArgs,
    customizationWindowCloseUp: AspNetCore$EventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs,
    focusedCardChanged: AspNetCore$CardViewFocusEventArgs,
    focusedCellChanging: AspNetCore$CardViewFocusedCellChangingEventArgs,
    selectionChanged: AspNetCore$CardViewSelectionEventArgs
  } & AspNetCore$BootstrapGridBaseEventMap;

  declare class AspNetCore$BootstrapCardViewBatchEditApi {
    instance: any;
    constructor(instance: any): this;
    addNewCard(): void;
    deleteCard(visibleIndex: number): void;
    deleteCardByKey(key: any): void;
    getCardVisibleIndices(includeDeleted: boolean): number[];
    getDeletedCardIndices(): number[];
    getInsertedCardIndices(): number[];
    isDeletedCard(visibleIndex: number): boolean;
    isNewCard(visibleIndex: number): boolean;
    recoverCard(visibleIndex: number): void;
    recoverCardByKey(key: any): void;
    validateCard(visibleIndex: number): boolean;
    validateCards(validateOnlyModified: boolean): boolean;
  }

  declare class AspNetCore$BootstrapCardViewColumn {
    instance: any;
    constructor(instance: any): this;
  }

  declare class AspNetCore$BootstrapCardViewCellInfo {
    instance: any;
    constructor(instance: any): this;
    cardVisibleIndex: number;
    endEdit(): void;
    getCellTextContainer(
      visibleIndex: number,
      columnFieldNameOrId: string
    ): any;
    getCellValue(
      visibleIndex: number,
      columnFieldNameOrId: string,
      initial: boolean
    ): any;
    getColumnDisplayText(columnFieldNameOrId: string, value: any): string;
    getEditCellInfo(): AspNetCore$BootstrapCardViewCellInfo | null;
    hasChanges(): boolean;
    moveFocusBackward(): boolean;
    moveFocusForward(): boolean;
    resetChanges(visibleIndex: number): void;
    resetChanges(visibleIndex: number, columnIndex: number): void;
    setCellValue(
      visibleIndex: number,
      columnFieldNameOrId: string,
      value: any
    ): void;
    setCellValue(
      visibleIndex: number,
      columnFieldNameOrId: string,
      value: any,
      displayText: string,
      cancelCellHighlighting: boolean
    ): void;
    startEdit(visibleIndex: number, columnIndex: number): void;
  }

  declare type AspNetCore$BootstrapChartEventArgsBase = {
    +component: any,
    +element: any
  } & AspNetCore$EventArgs;

  declare type AspNetCore$BootstrapChartErrorEventArgs = {
    +target: any
  } & AspNetCore$BootstrapChartEventArgsBase;

  declare type AspNetCore$BootstrapChartElementActionEventArgs = {
    +target: any
  } & AspNetCore$BootstrapChartEventArgsBase;

  declare type AspNetCore$BootstrapChartElementClickEventArgs = {
    +jQueryEvent: any
  } & AspNetCore$BootstrapChartElementActionEventArgs;

  declare type AspNetCore$BootstrapChartExportEventArgs = {
    cancel: boolean,
    +data: any,
    +fileName: string,
    +format: string
  } & AspNetCore$BootstrapChartEventArgsBase;

  declare type AspNetCore$BootstrapChartOptionChangedEventArgs = {
    +fullName: string,
    +name: string,
    +previousValue: any,
    +value: any
  } & AspNetCore$BootstrapChartEventArgsBase;

  declare type AspNetCore$BootstrapChartZoomEndEventArgs = {
    +rangeEnd: any,
    +rangeStart: any
  } & AspNetCore$BootstrapChartEventArgsBase;

  declare class AspNetCore$BootstrapChart mixins AspNetCore$Control {
    exportTo(format: string, fileName: string): void;
    getDataSource(): any;
    getInstance(): any;
    print(): void;
    setDataSource(dataSource: any): void;
    setOptions(options: any): void;
    on<K: $Keys<AspNetCore$BootstrapChartEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapChartEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapChartEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapChartEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapChartEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapChartEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapChartEventMap = {
    argumentAxisClick: AspNetCore$BootstrapChartElementClickEventArgs,
    disposing: AspNetCore$BootstrapChartEventArgsBase,
    done: AspNetCore$BootstrapChartEventArgsBase,
    drawn: AspNetCore$BootstrapChartEventArgsBase,
    exported: AspNetCore$BootstrapChartEventArgsBase,
    exporting: AspNetCore$BootstrapChartExportEventArgs,
    fileSaving: AspNetCore$BootstrapChartExportEventArgs,
    incidentOccurred: AspNetCore$BootstrapChartErrorEventArgs,
    init: AspNetCore$BootstrapChartEventArgsBase,
    legendClick: AspNetCore$BootstrapChartElementClickEventArgs,
    optionChanged: AspNetCore$BootstrapChartOptionChangedEventArgs,
    pointClick: AspNetCore$BootstrapChartElementClickEventArgs,
    pointHoverChanged: AspNetCore$BootstrapChartElementActionEventArgs,
    pointSelectionChanged: AspNetCore$BootstrapChartElementActionEventArgs,
    seriesClick: AspNetCore$BootstrapChartElementClickEventArgs,
    seriesHoverChanged: AspNetCore$BootstrapChartElementActionEventArgs,
    seriesSelectionChanged: AspNetCore$BootstrapChartElementActionEventArgs,
    tooltipHidden: AspNetCore$BootstrapChartElementActionEventArgs,
    tooltipShown: AspNetCore$BootstrapChartElementActionEventArgs,
    zoomEnd: AspNetCore$BootstrapChartZoomEndEventArgs,
    zoomStart: AspNetCore$BootstrapChartEventArgsBase
  } & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapPolarChart mixins AspNetCore$Control {
    exportTo(format: string, fileName: string): void;
    getDataSource(): any;
    getInstance(): any;
    print(): void;
    setDataSource(dataSource: any): void;
    setOptions(options: any): void;
    on<K: $Keys<AspNetCore$BootstrapPolarChartEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapPolarChartEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapPolarChartEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapPolarChartEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapPolarChartEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapPolarChartEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapPolarChartEventMap = {
    argumentAxisClick: AspNetCore$BootstrapChartElementClickEventArgs,
    disposing: AspNetCore$BootstrapChartEventArgsBase,
    done: AspNetCore$BootstrapChartEventArgsBase,
    drawn: AspNetCore$BootstrapChartEventArgsBase,
    exported: AspNetCore$BootstrapChartEventArgsBase,
    exporting: AspNetCore$BootstrapChartExportEventArgs,
    fileSaving: AspNetCore$BootstrapChartExportEventArgs,
    incidentOccurred: AspNetCore$BootstrapChartErrorEventArgs,
    init: AspNetCore$BootstrapChartEventArgsBase,
    legendClick: AspNetCore$BootstrapChartElementClickEventArgs,
    optionChanged: AspNetCore$BootstrapChartOptionChangedEventArgs,
    pointClick: AspNetCore$BootstrapChartElementClickEventArgs,
    pointHoverChanged: AspNetCore$BootstrapChartElementActionEventArgs,
    pointSelectionChanged: AspNetCore$BootstrapChartElementActionEventArgs,
    seriesClick: AspNetCore$BootstrapChartElementClickEventArgs,
    seriesHoverChanged: AspNetCore$BootstrapChartElementActionEventArgs,
    seriesSelectionChanged: AspNetCore$BootstrapChartElementActionEventArgs,
    tooltipHidden: AspNetCore$BootstrapChartElementActionEventArgs,
    tooltipShown: AspNetCore$BootstrapChartElementActionEventArgs
  } & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapPieChart mixins AspNetCore$Control {
    exportTo(format: string, fileName: string): void;
    getDataSource(): any;
    getInstance(): any;
    print(): void;
    setDataSource(dataSource: any): void;
    setOptions(options: any): void;
    on<K: $Keys<AspNetCore$BootstrapPieChartEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapPieChartEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapPieChartEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapPieChartEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapPieChartEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapPieChartEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapPieChartEventMap = {
    disposing: AspNetCore$BootstrapChartEventArgsBase,
    done: AspNetCore$BootstrapChartEventArgsBase,
    drawn: AspNetCore$BootstrapChartEventArgsBase,
    exported: AspNetCore$BootstrapChartEventArgsBase,
    exporting: AspNetCore$BootstrapChartExportEventArgs,
    fileSaving: AspNetCore$BootstrapChartExportEventArgs,
    incidentOccurred: AspNetCore$BootstrapChartErrorEventArgs,
    init: AspNetCore$BootstrapChartEventArgsBase,
    legendClick: AspNetCore$BootstrapChartElementClickEventArgs,
    optionChanged: AspNetCore$BootstrapChartOptionChangedEventArgs,
    pointClick: AspNetCore$BootstrapChartElementClickEventArgs,
    pointHoverChanged: AspNetCore$BootstrapChartElementActionEventArgs,
    pointSelectionChanged: AspNetCore$BootstrapChartElementActionEventArgs,
    tooltipHidden: AspNetCore$BootstrapChartElementActionEventArgs,
    tooltipShown: AspNetCore$BootstrapChartElementActionEventArgs
  } & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapCheckBox
    mixins AspNetCore$BootstrapClientEdit {
    getCheckState(): string;
    getChecked(): boolean;
    getText(): string;
    setCheckState(checkState: string): void;
    setChecked(isChecked: boolean): void;
    setText(text: string): void;
    on<K: $Keys<AspNetCore$BootstrapCheckBoxEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapCheckBoxEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapCheckBoxEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapCheckBoxEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapCheckBoxEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapCheckBoxEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapCheckBoxEventMap = {
    checkedChanged: AspNetCore$ProcessingModeEventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare class AspNetCore$BootstrapRadioButton
    mixins AspNetCore$BootstrapClientEdit {
    getCheckState(): string;
    getChecked(): boolean;
    getText(): string;
    setCheckState(checkState: string): void;
    setChecked(isChecked: boolean): void;
    setText(text: string): void;
    on<K: $Keys<AspNetCore$BootstrapRadioButtonEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapRadioButtonEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapRadioButtonEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapRadioButtonEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapRadioButtonEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapRadioButtonEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapRadioButtonEventMap = {
    checkedChanged: AspNetCore$ProcessingModeEventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare class AspNetCore$BootstrapComboBox
    mixins AspNetCore$BootstrapClientEdit {
    addItem(texts: string[]): number;
    addItem(text: string): number;
    addItem(texts: string[], value: any): number;
    addItem(text: string, value: any): number;
    addItem(texts: string[], value: any, iconCssClass: string): number;
    addItem(text: string, value: any, iconCssClass: string): number;
    addItemCssClass(index: number, className: string): void;
    addItemTextCellCssClass(
      itemIndex: number,
      textCellIndex: number,
      className: string
    ): void;
    adjustDropDownWindow(): void;
    beginUpdate(): void;
    clearItems(): void;
    endUpdate(): void;
    ensureDropDownLoaded(callbackFunction: any): void;
    findItemByText(text: string): AspNetCore$BootstrapListBoxItem | null;
    findItemByValue(value: any): AspNetCore$BootstrapListBoxItem | null;
    getButtonVisible(number: number): boolean;
    getCaretPosition(): number;
    getItem(index: number): AspNetCore$BootstrapListBoxItem | null;
    getItemBadgeIconCssClass(index: number): string;
    getItemBadgeText(index: number): string;
    getItemCount(): number;
    getSelectedIndex(): number;
    getSelectedItem(): AspNetCore$BootstrapListBoxItem | null;
    getText(): string;
    hideDropDown(): void;
    insertItem(index: number, texts: string[]): void;
    insertItem(index: number, text: string): void;
    insertItem(index: number, texts: string[], value: any): void;
    insertItem(index: number, text: string, value: any): void;
    insertItem(
      index: number,
      texts: string[],
      value: any,
      iconCssClass: string
    ): void;
    insertItem(
      index: number,
      text: string,
      value: any,
      iconCssClass: string
    ): void;
    makeItemVisible(index: number): void;
    performCallback(data: any): Promise<void>;
    performCallback(data: any, onSuccess: () => void): void;
    removeItem(index: number): void;
    removeItemCssClass(index: number, className: string): void;
    removeItemTextCellCssClass(
      itemIndex: number,
      textCellIndex: number,
      className: string
    ): void;
    selectAll(): void;
    setButtonVisible(number: number, value: boolean): void;
    setCaretPosition(position: number): void;
    setItemBadgeIconCssClass(index: number, cssClass: string): void;
    setItemBadgeText(index: number, text: string): void;
    setItemHtml(index: number, html: string): void;
    setItemTextCellHtml(
      itemIndex: number,
      textCellIndex: number,
      html: string
    ): void;
    setItemTextCellTooltip(
      itemIndex: number,
      textCellIndex: number,
      tooltip: string
    ): void;
    setItemTooltip(index: number, tooltip: string): void;
    setSelectedIndex(index: number): void;
    setSelectedItem(item: AspNetCore$BootstrapListBoxItem): void;
    setSelection(
      startPos: number,
      endPos: number,
      scrollToSelection: boolean
    ): void;
    setText(text: string, applyFilter: boolean): void;
    showDropDown(): void;
    on<K: $Keys<AspNetCore$BootstrapComboBoxEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapComboBoxEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapComboBoxEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapComboBoxEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapComboBoxEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapComboBoxEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapComboBoxEventMap = {
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    buttonClick: AspNetCore$ButtonEditClickEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    closeUp: AspNetCore$EventArgs,
    customHighlighting: AspNetCore$ListEditCustomHighlightingEventArgs,
    dropDown: AspNetCore$EventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs,
    itemFiltering: AspNetCore$ListEditItemFilteringEventArgs,
    keyDown: AspNetCore$EditKeyEventArgs,
    keyPress: AspNetCore$EditKeyEventArgs,
    keyUp: AspNetCore$EditKeyEventArgs,
    queryCloseUp: AspNetCore$CancelEventArgs,
    selectedIndexChanged: AspNetCore$ProcessingModeEventArgs,
    textChanged: AspNetCore$ProcessingModeEventArgs,
    userInput: AspNetCore$EventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare type AspNetCore$ParseDateEventArgs = {
    +date: Date,
    +handled: boolean,
    +value: string
  } & AspNetCore$EventArgs;

  declare class AspNetCore$BootstrapDateEdit
    mixins AspNetCore$BootstrapClientEdit {
    adjustDropDownWindow(): void;
    getButtonVisible(number: number): boolean;
    getCalendar(): AspNetCore$BootstrapCalendar | null;
    getCaretPosition(): number;
    getDate(): Date;
    getMaxDate(): Date;
    getMinDate(): Date;
    getRangeDayCount(): number;
    getText(): string;
    getTimeEdit(): AspNetCore$BootstrapTimeEdit | null;
    hideDropDown(): void;
    selectAll(): void;
    setButtonVisible(number: number, value: boolean): void;
    setCaretPosition(position: number): void;
    setDate(date: Date): void;
    setMaxDate(date: Date): void;
    setMinDate(date: Date): void;
    setSelection(
      startPos: number,
      endPos: number,
      scrollToSelection: boolean
    ): void;
    setText(text: string): void;
    showDropDown(): void;
    on<K: $Keys<AspNetCore$BootstrapDateEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapDateEditEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapDateEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapDateEditEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapDateEditEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapDateEditEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapDateEditEventMap = {
    buttonClick: AspNetCore$ButtonEditClickEventArgs,
    calendarCustomDisabledDate: AspNetCore$CalendarCustomDisabledDateEventArgs,
    closeUp: AspNetCore$EventArgs,
    dateChanged: AspNetCore$ProcessingModeEventArgs,
    dropDown: AspNetCore$EventArgs,
    keyDown: AspNetCore$EditKeyEventArgs,
    keyPress: AspNetCore$EditKeyEventArgs,
    keyUp: AspNetCore$EditKeyEventArgs,
    parseDate: AspNetCore$ParseDateEventArgs,
    queryCloseUp: AspNetCore$CancelEventArgs,
    textChanged: AspNetCore$ProcessingModeEventArgs,
    userInput: AspNetCore$EventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare class AspNetCore$BootstrapDropDownEdit
    mixins AspNetCore$BootstrapClientEdit {
    adjustDropDownWindow(): void;
    getButtonVisible(number: number): boolean;
    getCaretPosition(): number;
    getKeyValue(): string;
    getText(): string;
    hideDropDown(): void;
    selectAll(): void;
    setButtonVisible(number: number, value: boolean): void;
    setCaretPosition(position: number): void;
    setKeyValue(keyValue: string): void;
    setSelection(
      startPos: number,
      endPos: number,
      scrollToSelection: boolean
    ): void;
    setText(text: string): void;
    showDropDown(): void;
    on<K: $Keys<AspNetCore$BootstrapDropDownEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapDropDownEditEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapDropDownEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapDropDownEditEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapDropDownEditEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapDropDownEditEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapDropDownEditEventMap = {
    buttonClick: AspNetCore$ButtonEditClickEventArgs,
    closeUp: AspNetCore$EventArgs,
    dropDown: AspNetCore$EventArgs,
    keyDown: AspNetCore$EditKeyEventArgs,
    keyPress: AspNetCore$EditKeyEventArgs,
    keyUp: AspNetCore$EditKeyEventArgs,
    queryCloseUp: AspNetCore$CancelEventArgs,
    textChanged: AspNetCore$ProcessingModeEventArgs,
    userInput: AspNetCore$EventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare class AspNetCore$BootstrapFormLayout mixins AspNetCore$Control {
    getItemByName(name: string): AspNetCore$BootstrapFormLayoutItem | null;
    on<K: $Keys<AspNetCore$BootstrapFormLayoutEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapFormLayoutEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapFormLayoutEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapFormLayoutEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapFormLayoutEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapFormLayoutEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapFormLayoutEventMap = {} & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapFormLayoutItem {
    instance: any;
    constructor(instance: any): this;
    formLayout: AspNetCore$BootstrapFormLayout | null;
    name: string;
    parent: AspNetCore$BootstrapFormLayoutItem | null;
    getCaption(): string;
    getItemByName(name: string): AspNetCore$BootstrapFormLayoutItem | null;
    getVisible(): boolean;
    setCaption(caption: string): void;
    setVisible(value: boolean): void;
  }

  declare type AspNetCore$GridViewColumnCancelEventArgs = {
    +column: AspNetCore$BootstrapGridViewColumn
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$GridViewColumnProcessingModeEventArgs = {
    +column: AspNetCore$BootstrapGridViewColumn
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$GridViewRowCancelEventArgs = {
    +visibleIndex: number
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$GridViewSelectionEventArgs = {
    +isAllRecordsOnPage: boolean,
    +isChangedOnServer: boolean,
    +isSelected: boolean,
    +visibleIndex: number
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$GridViewFocusEventArgs = {
    +isChangedOnServer: boolean
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$GridViewRowFocusingEventArgs = {
    +htmlEvent: any
  } & AspNetCore$GridViewRowCancelEventArgs;

  declare type AspNetCore$GridViewRowClickEventArgs = {
    +htmlEvent: any
  } & AspNetCore$GridViewRowCancelEventArgs;

  declare type AspNetCore$GridViewContextMenuEventArgs = {
    +htmlEvent: any,
    +index: number,
    +menu: any,
    +objectType: string,
    showBrowserMenu: boolean
  } & AspNetCore$EventArgs;

  declare type AspNetCore$GridViewContextMenuItemClickEventArgs = {
    +elementIndex: number,
    handled: boolean,
    +item: AspNetCore$BootstrapMenuItem,
    +objectType: string,
    usePostBack: boolean
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$GridViewCustomButtonEventArgs = {
    +buttonID: string,
    +visibleIndex: number
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$GridViewColumnMovingEventArgs = {
    allow: boolean,
    +destinationColumn: AspNetCore$BootstrapGridViewColumn,
    +isDropBefore: boolean,
    +isGroupPanel: boolean,
    +sourceColumn: AspNetCore$BootstrapGridViewColumn
  } & AspNetCore$EventArgs;

  declare type AspNetCore$GridViewBatchEditConfirmShowingEventArgs = {
    +requestTriggerID: string
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$GridViewBatchEditStartEditingEventArgs = {
    focusedColumn: AspNetCore$BootstrapGridViewColumn,
    +rowValues: any,
    +visibleIndex: number
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$GridViewBatchEditEndEditingEventArgs = {
    +rowValues: any,
    +visibleIndex: number
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$GridViewBatchEditRowValidatingEventArgs = {
    +validationInfo: any,
    +visibleIndex: number
  } & AspNetCore$EventArgs;

  declare type AspNetCore$GridViewBatchEditTemplateCellFocusedEventArgs = {
    +column: AspNetCore$BootstrapGridViewColumn,
    handled: boolean
  } & AspNetCore$EventArgs;

  declare type AspNetCore$GridViewBatchEditChangesSavingEventArgs = {
    +deletedValues: any,
    +insertedValues: any,
    +updatedValues: any
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$GridViewBatchEditChangesCancelingEventArgs = {
    +deletedValues: any,
    +insertedValues: any,
    +updatedValues: any
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$GridViewBatchEditRowInsertingEventArgs = {
    +visibleIndex: number
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$GridViewBatchEditRowDeletingEventArgs = {
    +rowValues: any,
    +visibleIndex: number
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$GridViewFocusedCellChangingEventArgs = {
    +cellInfo: AspNetCore$BootstrapGridViewCellInfo
  } & AspNetCore$CancelEventArgs;

  declare class AspNetCore$BootstrapGridView
    mixins AspNetCore$BootstrapGridBase {
    batchEditApi: AspNetCore$BootstrapGridViewBatchEditApi | null;
    addNewRow(): void;
    applyFilter(filterExpression: string): void;
    applyOnClickRowFilter(): void;
    applySearchPanelFilter(value: string): void;
    autoFilterByColumn(
      column: AspNetCore$BootstrapGridViewColumn,
      val: string
    ): void;
    autoFilterByColumn(columnIndex: number, val: string): void;
    autoFilterByColumn(columnFieldNameOrId: string, val: string): void;
    cancelEdit(): void;
    clearFilter(): void;
    closeFilterControl(): void;
    collapseAll(): void;
    collapseAllDetailRows(): void;
    collapseDetailRow(visibleIndex: number): void;
    collapseRow(visibleIndex: number): void;
    collapseRow(visibleIndex: number, recursive: boolean): void;
    deleteRow(visibleIndex: number): void;
    deleteRowByKey(key: any): void;
    expandAll(): void;
    expandAllDetailRows(): void;
    expandDetailRow(visibleIndex: number): void;
    expandRow(visibleIndex: number): void;
    expandRow(visibleIndex: number, recursive: boolean): void;
    focus(): void;
    focusEditor(column: AspNetCore$BootstrapGridViewColumn): void;
    focusEditor(columnIndex: number): void;
    focusEditor(columnFieldNameOrId: string): void;
    getAutoFilterEditor(column: AspNetCore$BootstrapGridViewColumn): any;
    getAutoFilterEditor(columnIndex: number): any;
    getAutoFilterEditor(columnFieldNameOrId: string): any;
    getColumn(columnIndex: number): AspNetCore$BootstrapGridViewColumn | null;
    getColumnByField(
      columnFieldName: string
    ): AspNetCore$BootstrapGridViewColumn | null;
    getColumnById(columnId: string): AspNetCore$BootstrapGridViewColumn | null;
    getColumnCount(): number;
    getColumnLayout(): any;
    getEditValue(column: AspNetCore$BootstrapGridViewColumn): string;
    getEditValue(columnIndex: number): string;
    getEditValue(columnFieldNameOrId: string): string;
    getEditor(
      column: AspNetCore$BootstrapGridViewColumn
    ): AspNetCore$BootstrapClientEdit;
    getEditor(columnIndex: number): AspNetCore$BootstrapClientEdit;
    getEditor(columnFieldNameOrId: string): AspNetCore$BootstrapClientEdit;
    getFocusedCell(): AspNetCore$BootstrapGridViewCellInfo | null;
    getFocusedRowIndex(): number;
    getHorizontalScrollPosition(): number;
    getPageCount(): number;
    getPageIndex(): number;
    getPopupEditForm(): AspNetCore$BootstrapPopupControl | null;
    getRowIndicesVisibleInViewPort(includePartiallyVisible: boolean): number[];
    getRowKey(visibleIndex: number): string;
    getSelectedKeysOnPage(): any[];
    getSelectedRowCount(): number;
    getTopVisibleIndex(): number;
    getVerticalScrollPosition(): number;
    getVisibleRowsOnPage(): number;
    gotoPage(pageIndex: number): void;
    groupBy(column: AspNetCore$BootstrapGridViewColumn): void;
    groupBy(columnIndex: number): void;
    groupBy(columnFieldNameOrId: string): void;
    groupBy(
      column: AspNetCore$BootstrapGridViewColumn,
      groupIndex: number
    ): void;
    groupBy(columnIndex: number, groupIndex: number): void;
    groupBy(columnFieldNameOrId: string, groupIndex: number): void;
    groupBy(
      column: AspNetCore$BootstrapGridViewColumn,
      groupIndex: number,
      sortOrder: string
    ): void;
    groupBy(columnIndex: number, groupIndex: number, sortOrder: string): void;
    groupBy(
      columnFieldNameOrId: string,
      groupIndex: number,
      sortOrder: string
    ): void;
    hideCustomizationWindow(): void;
    isCustomizationWindowVisible(): boolean;
    isDataRow(visibleIndex: number): boolean;
    isEditing(): boolean;
    isGroupRow(visibleIndex: number): boolean;
    isGroupRowExpanded(visibleIndex: number): boolean;
    isNewRowEditing(): boolean;
    isRowSelectedOnPage(visibleIndex: number): boolean;
    makeRowVisible(visibleIndex: number): void;
    nextPage(): void;
    performCallback(data: any): Promise<void>;
    performCallback(data: any, onSuccess: () => void): void;
    prevPage(): void;
    refresh(): void;
    selectAllRowsOnPage(): void;
    selectRowOnPage(visibleIndex: number): void;
    selectRowOnPage(visibleIndex: number, selected: boolean): void;
    selectRows(): void;
    selectRowsByKey(keys: any[]): void;
    selectRowsByKey(key: any): void;
    selectRowsByKey(keys: any[], selected: boolean): void;
    selectRowsByKey(key: any, selected: boolean): void;
    setColumnLayout(columnLayout: any): void;
    setEditValue(
      column: AspNetCore$BootstrapGridViewColumn,
      value: string
    ): void;
    setEditValue(columnIndex: number, value: string): void;
    setEditValue(columnFieldNameOrId: string, value: string): void;
    setFilterEnabled(isFilterEnabled: boolean): void;
    setFixedColumnScrollableRows(scrollableRowSettings: any): void;
    setFocusedCell(rowVisibleIndex: number, columnIndex: number): void;
    setFocusedRowIndex(visibleIndex: number): void;
    setHorizontalScrollPosition(position: number): void;
    setSearchPanelCustomEditor(editor: AspNetCore$BootstrapClientEdit): void;
    setVerticalScrollPosition(position: number): void;
    showCustomizationDialog(): void;
    showCustomizationWindow(): void;
    showFilterControl(): void;
    sortBy(column: AspNetCore$BootstrapGridViewColumn): void;
    sortBy(columnIndex: number): void;
    sortBy(columnFieldNameOrId: string): void;
    sortBy(column: AspNetCore$BootstrapGridViewColumn, sortOrder: string): void;
    sortBy(columnIndex: number, sortOrder: string): void;
    sortBy(columnFieldNameOrId: string, sortOrder: string): void;
    sortBy(
      column: AspNetCore$BootstrapGridViewColumn,
      sortOrder: string,
      reset: boolean
    ): void;
    sortBy(columnIndex: number, sortOrder: string, reset: boolean): void;
    sortBy(
      columnFieldNameOrId: string,
      sortOrder: string,
      reset: boolean
    ): void;
    sortBy(
      column: AspNetCore$BootstrapGridViewColumn,
      sortOrder: string,
      reset: boolean,
      sortIndex: number
    ): void;
    sortBy(
      columnIndex: number,
      sortOrder: string,
      reset: boolean,
      sortIndex: number
    ): void;
    sortBy(
      columnFieldNameOrId: string,
      sortOrder: string,
      reset: boolean,
      sortIndex: number
    ): void;
    startEditRow(visibleIndex: number): void;
    startEditRowByKey(key: any): void;
    ungroup(column: AspNetCore$BootstrapGridViewColumn): void;
    ungroup(columnIndex: number): void;
    ungroup(columnFieldNameOrId: string): void;
    unselectAllRowsOnPage(): void;
    unselectFilteredRows(): void;
    unselectRowOnPage(visibleIndex: number): void;
    unselectRows(): void;
    unselectRowsByKey(keys: any[]): void;
    unselectRowsByKey(key: any): void;
    updateEdit(): void;
    on<K: $Keys<AspNetCore$BootstrapGridViewEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapGridViewEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapGridViewEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapGridViewEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapGridViewEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapGridViewEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapGridViewEventMap = {
    batchEditChangesCanceling: AspNetCore$GridViewBatchEditChangesCancelingEventArgs,
    batchEditChangesSaving: AspNetCore$GridViewBatchEditChangesSavingEventArgs,
    batchEditConfirmShowing: AspNetCore$GridViewBatchEditConfirmShowingEventArgs,
    batchEditEndEditing: AspNetCore$GridViewBatchEditEndEditingEventArgs,
    batchEditRowDeleting: AspNetCore$GridViewBatchEditRowDeletingEventArgs,
    batchEditRowInserting: AspNetCore$GridViewBatchEditRowInsertingEventArgs,
    batchEditRowValidating: AspNetCore$GridViewBatchEditRowValidatingEventArgs,
    batchEditStartEditing: AspNetCore$GridViewBatchEditStartEditingEventArgs,
    batchEditTemplateCellFocused: AspNetCore$GridViewBatchEditTemplateCellFocusedEventArgs,
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    columnGrouping: AspNetCore$GridViewColumnCancelEventArgs,
    columnMoving: AspNetCore$GridViewColumnMovingEventArgs,
    columnResized: AspNetCore$GridViewColumnProcessingModeEventArgs,
    columnResizing: AspNetCore$GridViewColumnCancelEventArgs,
    columnSorting: AspNetCore$GridViewColumnCancelEventArgs,
    columnStartDragging: AspNetCore$GridViewColumnCancelEventArgs,
    contextMenu: AspNetCore$GridViewContextMenuEventArgs,
    contextMenuItemClick: AspNetCore$GridViewContextMenuItemClickEventArgs,
    customButtonClick: AspNetCore$GridViewCustomButtonEventArgs,
    customizationWindowCloseUp: AspNetCore$EventArgs,
    detailRowCollapsing: AspNetCore$GridViewRowCancelEventArgs,
    detailRowExpanding: AspNetCore$GridViewRowCancelEventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs,
    focusedCellChanging: AspNetCore$GridViewFocusedCellChangingEventArgs,
    focusedRowChanged: AspNetCore$GridViewFocusEventArgs,
    rowClick: AspNetCore$GridViewRowClickEventArgs,
    rowCollapsing: AspNetCore$GridViewRowCancelEventArgs,
    rowDblClick: AspNetCore$GridViewRowClickEventArgs,
    rowExpanding: AspNetCore$GridViewRowCancelEventArgs,
    rowFocusing: AspNetCore$GridViewRowFocusingEventArgs,
    selectionChanged: AspNetCore$GridViewSelectionEventArgs
  } & AspNetCore$BootstrapGridBaseEventMap;

  declare class AspNetCore$BootstrapGridViewBatchEditApi {
    instance: any;
    constructor(instance: any): this;
    addNewRow(): void;
    deleteRow(visibleIndex: number): void;
    deleteRowByKey(key: any): void;
    endEdit(): void;
    getCellTextContainer(
      visibleIndex: number,
      columnFieldNameOrId: string
    ): any;
    getCellValue(
      visibleIndex: number,
      columnFieldNameOrId: string,
      initial: boolean
    ): any;
    getColumnDisplayText(columnFieldNameOrId: string, value: any): string;
    getDeletedRowIndices(): number[];
    getEditCellInfo(): AspNetCore$BootstrapGridViewCellInfo | null;
    getInsertedRowIndices(): number[];
    getRowVisibleIndices(includeDeleted: boolean): number[];
    hasChanges(): boolean;
    isDeletedRow(visibleIndex: number): boolean;
    isNewRow(visibleIndex: number): boolean;
    moveFocusBackward(): boolean;
    moveFocusForward(): boolean;
    recoverRow(visibleIndex: number): void;
    recoverRowByKey(key: any): void;
    resetChanges(visibleIndex: number): void;
    resetChanges(visibleIndex: number, columnIndex: number): void;
    setCellValue(
      visibleIndex: number,
      columnFieldNameOrId: string,
      value: any
    ): void;
    setCellValue(
      visibleIndex: number,
      columnFieldNameOrId: string,
      value: any,
      displayText: string,
      cancelCellHighlighting: boolean
    ): void;
    startEdit(visibleIndex: number, columnIndex: number): void;
    validateRow(visibleIndex: number): boolean;
    validateRows(validateOnlyModified: boolean): boolean;
  }

  declare class AspNetCore$BootstrapGridViewColumn {
    instance: any;
    constructor(instance: any): this;
    fieldName: string;
    index: number;
    name: string;
    visible: boolean;
  }

  declare class AspNetCore$BootstrapGridViewCellInfo {
    instance: any;
    constructor(instance: any): this;
    rowVisibleIndex: number;
  }

  declare class AspNetCore$BootstrapHyperLink mixins AspNetCore$Control {
    getBadgeIconCssClass(): string;
    getBadgeText(): string;
    getCaption(): string;
    getEnabled(): boolean;
    getNavigateUrl(): string;
    getText(): string;
    getValue(): any;
    setBadgeIconCssClass(cssClass: string): void;
    setBadgeText(text: string): void;
    setCaption(caption: string): void;
    setEnabled(value: boolean): void;
    setNavigateUrl(url: string): void;
    setText(text: string): void;
    setValue(value: any): void;
    on<K: $Keys<AspNetCore$BootstrapHyperLinkEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapHyperLinkEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapHyperLinkEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapHyperLinkEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapHyperLinkEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapHyperLinkEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapHyperLinkEventMap = {
    click: AspNetCore$EditClickEventArgs
  } & AspNetCore$ControlEventMap;

  declare type AspNetCore$ListEditItemSelectedChangedEventArgs = {
    +index: number,
    +isSelected: boolean
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$ListEditCustomHighlightingEventArgs = {
    +filter: string,
    highlighting: any
  } & AspNetCore$EventArgs;

  declare type AspNetCore$ListEditItemFilteringEventArgs = {
    +filter: string,
    isFit: boolean,
    +item: AspNetCore$BootstrapListBoxItem
  } & AspNetCore$EventArgs;

  declare class AspNetCore$BootstrapListBox
    mixins AspNetCore$BootstrapClientEdit {
    addItem(texts: string[]): number;
    addItem(text: string): number;
    addItem(texts: string[], value: any): number;
    addItem(text: string, value: any): number;
    addItem(texts: string[], value: any, iconCssClass: string): number;
    addItem(text: string, value: any, iconCssClass: string): number;
    addItemCssClass(index: number, className: string): void;
    addItemTextCellCssClass(
      itemIndex: number,
      textCellIndex: number,
      className: string
    ): void;
    beginUpdate(): void;
    clearItems(): void;
    endUpdate(): void;
    findItemByText(text: string): AspNetCore$BootstrapListBoxItem | null;
    findItemByValue(value: any): AspNetCore$BootstrapListBoxItem | null;
    getItem(index: number): AspNetCore$BootstrapListBoxItem | null;
    getItemBadgeIconCssClass(index: number): string;
    getItemBadgeText(index: number): string;
    getItemCount(): number;
    getSelectedIndex(): number;
    getSelectedIndices(): number[];
    getSelectedItem(): AspNetCore$BootstrapListBoxItem | null;
    getSelectedItems(): AspNetCore$BootstrapListBoxItem[];
    getSelectedValues(): any[];
    insertItem(index: number, texts: string[]): void;
    insertItem(index: number, text: string): void;
    insertItem(index: number, texts: string[], value: any): void;
    insertItem(index: number, text: string, value: any): void;
    insertItem(
      index: number,
      texts: string[],
      value: any,
      iconCssClass: string
    ): void;
    insertItem(
      index: number,
      text: string,
      value: any,
      iconCssClass: string
    ): void;
    makeItemVisible(index: number): void;
    performCallback(data: any): Promise<void>;
    performCallback(data: any, onSuccess: () => void): void;
    removeItem(index: number): void;
    removeItemCssClass(index: number, className: string): void;
    removeItemTextCellCssClass(
      itemIndex: number,
      textCellIndex: number,
      className: string
    ): void;
    selectAll(): void;
    selectIndices(indices: number[]): void;
    selectItems(items: AspNetCore$BootstrapListBoxItem[]): void;
    selectValues(values: any[]): void;
    setItemBadgeIconCssClass(index: number, cssClass: string): void;
    setItemBadgeText(index: number, text: string): void;
    setItemHtml(index: number, html: string): void;
    setItemTextCellHtml(
      itemIndex: number,
      textCellIndex: number,
      html: string
    ): void;
    setItemTextCellTooltip(
      itemIndex: number,
      textCellIndex: number,
      tooltip: string
    ): void;
    setItemTooltip(index: number, tooltip: string): void;
    setSelectedIndex(index: number): void;
    setSelectedItem(item: AspNetCore$BootstrapListBoxItem): void;
    unselectAll(): void;
    unselectIndices(indices: number[]): void;
    unselectItems(items: AspNetCore$BootstrapListBoxItem[]): void;
    unselectValues(values: any[]): void;
    on<K: $Keys<AspNetCore$BootstrapListBoxEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapListBoxEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapListBoxEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapListBoxEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapListBoxEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapListBoxEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapListBoxEventMap = {
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    customHighlighting: AspNetCore$ListEditCustomHighlightingEventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs,
    itemDoubleClick: AspNetCore$EventArgs,
    itemFiltering: AspNetCore$ListEditItemFilteringEventArgs,
    keyDown: AspNetCore$EditKeyEventArgs,
    keyPress: AspNetCore$EditKeyEventArgs,
    keyUp: AspNetCore$EditKeyEventArgs,
    selectedIndexChanged: AspNetCore$ProcessingModeEventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare class AspNetCore$BootstrapListBoxItem {
    instance: any;
    constructor(instance: any): this;
    iconCssClass: string;
    imageUrl: string;
    index: number;
    listEditBase: AspNetCore$BootstrapListBox | null;
    text: string;
    value: any;
    getColumnText(columnIndex: number): string;
    getColumnText(columnName: string): string;
    getFieldText(fieldIndex: number): string;
    getFieldText(fieldName: string): string;
  }

  declare class AspNetCore$BootstrapCheckBoxList
    mixins AspNetCore$BootstrapListBox {
    getItem(index: number): AspNetCore$BootstrapListBoxItem | null;
    getItemCount(): number;
    getSelectedIndices(): number[];
    getSelectedItems(): AspNetCore$BootstrapListBoxItem[];
    getSelectedValues(): any[];
    selectAll(): void;
    selectIndices(indices: number[]): void;
    selectItems(items: AspNetCore$BootstrapListBoxItem[]): void;
    selectValues(values: any[]): void;
    unselectAll(): void;
    unselectIndices(indices: number[]): void;
    unselectItems(items: AspNetCore$BootstrapListBoxItem[]): void;
    unselectValues(values: any[]): void;
    on<K: $Keys<AspNetCore$BootstrapCheckBoxListEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapCheckBoxListEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapCheckBoxListEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapCheckBoxListEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapCheckBoxListEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapCheckBoxListEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapCheckBoxListEventMap = {} & AspNetCore$BootstrapListBoxEventMap;

  declare class AspNetCore$BootstrapRadioButtonList
    mixins AspNetCore$BootstrapListBox {
    getItem(index: number): AspNetCore$BootstrapListBoxItem | null;
    getItemCount(): number;
    on<K: $Keys<AspNetCore$BootstrapRadioButtonListEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapRadioButtonListEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapRadioButtonListEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapRadioButtonListEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapRadioButtonListEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapRadioButtonListEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapRadioButtonListEventMap = {} & AspNetCore$BootstrapListBoxEventMap;

  declare type AspNetCore$MenuItemEventArgs = {
    +item: AspNetCore$BootstrapMenuItem
  } & AspNetCore$EventArgs;

  declare type AspNetCore$MenuItemMouseEventArgs = {} & AspNetCore$MenuItemEventArgs;

  declare type AspNetCore$MenuItemClickEventArgs = {
    +htmlElement: { [key: string]: any },
    +htmlEvent: { [key: string]: any },
    +item: AspNetCore$BootstrapMenuItem
  } & AspNetCore$ProcessingModeEventArgs;

  declare class AspNetCore$BootstrapMenu mixins AspNetCore$Control {
    getItem(index: number): AspNetCore$BootstrapMenuItem | null;
    getItemByName(name: string): AspNetCore$BootstrapMenuItem | null;
    getItemCount(): number;
    getOrientation(): string;
    getRootItem(): AspNetCore$BootstrapMenuItem | null;
    getSelectedItem(): AspNetCore$BootstrapMenuItem | null;
    setOrientation(orientation: string): void;
    setSelectedItem(item: AspNetCore$BootstrapMenuItem): void;
    on<K: $Keys<AspNetCore$BootstrapMenuEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapMenuEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapMenuEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapMenuEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapMenuEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapMenuEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapMenuEventMap = {
    closeUp: AspNetCore$MenuItemEventArgs,
    itemClick: AspNetCore$MenuItemClickEventArgs,
    itemMouseOut: AspNetCore$MenuItemMouseEventArgs,
    itemMouseOver: AspNetCore$MenuItemMouseEventArgs,
    popUp: AspNetCore$MenuItemEventArgs
  } & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapMenuItem {
    instance: any;
    constructor(instance: any): this;
    index: number;
    indexPath: string;
    menu: AspNetCore$BootstrapMenu | null;
    name: string;
    parent: AspNetCore$BootstrapMenuItem | null;
    getBadgeIconCssClass(): string;
    getBadgeText(): string;
    getChecked(): boolean;
    getEnabled(): boolean;
    getIconCssClass(): string;
    getImageUrl(): string;
    getItem(index: number): AspNetCore$BootstrapMenuItem | null;
    getItemByName(name: string): AspNetCore$BootstrapMenuItem | null;
    getItemCount(): number;
    getNavigateUrl(): string;
    getText(): string;
    getVisible(): boolean;
    setBadgeIconCssClass(cssClass: string): void;
    setBadgeText(text: string): void;
    setChecked(value: boolean): void;
    setEnabled(value: boolean): void;
    setIconCssClass(cssClass: string): void;
    setImageUrl(value: string): void;
    setNavigateUrl(value: string): void;
    setText(value: string): void;
    setVisible(value: boolean): void;
  }

  declare type AspNetCore$PopupWindowEventArgs = {
    +window: AspNetCore$BootstrapPopupWindow
  } & AspNetCore$EventArgs;

  declare type AspNetCore$PopupWindowCloseUpEventArgs = {
    +closeReason: AspNetCore$BootstrapPopupControlCloseReason
  } & AspNetCore$PopupWindowEventArgs;

  declare type AspNetCore$PopupWindowCancelEventArgs = {
    +closeReason: AspNetCore$BootstrapPopupControlCloseReason,
    +window: AspNetCore$BootstrapPopupWindow
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$PopupWindowPinnedChangedEventArgs = {
    +pinned: boolean
  } & AspNetCore$PopupWindowEventArgs;

  declare type AspNetCore$PopupWindowResizeEventArgs = {
    +resizeState: number
  } & AspNetCore$PopupWindowEventArgs;

  declare class AspNetCore$BootstrapPopupControl mixins AspNetCore$Control {
    adjustSize(): void;
    bringToFront(): void;
    bringWindowToFront(window: AspNetCore$BootstrapPopupWindow): void;
    getCollapsed(): boolean;
    getContentHeight(): number;
    getContentHtml(): string;
    getContentIFrame(): any;
    getContentIFrameWindow(): any;
    getContentUrl(): string;
    getContentWidth(): number;
    getCurrentPopupElement(): any;
    getCurrentPopupElementIndex(): number;
    getFooterImageUrl(): string;
    getFooterNavigateUrl(): string;
    getFooterText(): string;
    getHeaderImageUrl(): string;
    getHeaderNavigateUrl(): string;
    getHeaderText(): string;
    getMainElement(): any;
    getMaximized(): boolean;
    getPinned(): boolean;
    getPopUpReasonMouseEvent(): any;
    getWindow(index: number): AspNetCore$BootstrapPopupWindow | null;
    getWindowByName(name: string): AspNetCore$BootstrapPopupWindow | null;
    getWindowCollapsed(window: AspNetCore$BootstrapPopupWindow): boolean;
    getWindowContentHeight(window: AspNetCore$BootstrapPopupWindow): number;
    getWindowContentHtml(window: AspNetCore$BootstrapPopupWindow): string;
    getWindowContentIFrame(window: AspNetCore$BootstrapPopupWindow): any;
    getWindowContentUrl(window: AspNetCore$BootstrapPopupWindow): string;
    getWindowContentWidth(window: AspNetCore$BootstrapPopupWindow): number;
    getWindowCount(): number;
    getWindowCurrentPopupElement(window: AspNetCore$BootstrapPopupWindow): any;
    getWindowCurrentPopupElementIndex(
      window: AspNetCore$BootstrapPopupWindow
    ): number;
    getWindowHeight(window: AspNetCore$BootstrapPopupWindow): number;
    getWindowMaximized(window: AspNetCore$BootstrapPopupWindow): boolean;
    getWindowPinned(window: AspNetCore$BootstrapPopupWindow): boolean;
    getWindowPopUpReasonMouseEvent(
      window: AspNetCore$BootstrapPopupWindow
    ): any;
    getWindowWidth(window: AspNetCore$BootstrapPopupWindow): number;
    hide(): void;
    hideWindow(window: AspNetCore$BootstrapPopupWindow): void;
    isVisible(): boolean;
    isWindowVisible(window: AspNetCore$BootstrapPopupWindow): boolean;
    performCallback(data: any): Promise<void>;
    performCallback(data: any, onSuccess: () => void): void;
    refreshContentUrl(): void;
    refreshPopupElementConnection(): void;
    refreshWindowContentUrl(window: AspNetCore$BootstrapPopupWindow): void;
    setAdaptiveMaxHeight(maxHeight: number): void;
    setAdaptiveMaxHeight(maxHeight: string): void;
    setAdaptiveMaxWidth(maxWidth: number): void;
    setAdaptiveMaxWidth(maxWidth: string): void;
    setAdaptiveMinHeight(minHeight: number): void;
    setAdaptiveMinHeight(minHeight: string): void;
    setAdaptiveMinWidth(minWidth: number): void;
    setAdaptiveMinWidth(minWidth: string): void;
    setCollapsed(value: boolean): void;
    setContentHtml(html: string): void;
    setContentUrl(url: string): void;
    setFooterImageUrl(value: string): void;
    setFooterNavigateUrl(value: string): void;
    setFooterText(value: string): void;
    setHeaderImageUrl(value: string): void;
    setHeaderNavigateUrl(value: string): void;
    setHeaderText(value: string): void;
    setMaximized(value: boolean): void;
    setPinned(value: boolean): void;
    setPopupElementCssSelector(selector: string): void;
    setPopupElementID(popupElementId: string): void;
    setSize(width: number, height: number): void;
    setWindowAdaptiveMaxHeight(
      window: AspNetCore$BootstrapPopupWindow,
      maxHeight: number
    ): void;
    setWindowAdaptiveMaxHeight(
      window: AspNetCore$BootstrapPopupWindow,
      maxHeight: string
    ): void;
    setWindowAdaptiveMaxWidth(
      window: AspNetCore$BootstrapPopupWindow,
      maxWidth: number
    ): void;
    setWindowAdaptiveMaxWidth(
      window: AspNetCore$BootstrapPopupWindow,
      maxWidth: string
    ): void;
    setWindowAdaptiveMinHeight(
      window: AspNetCore$BootstrapPopupWindow,
      minHeight: number
    ): void;
    setWindowAdaptiveMinHeight(
      window: AspNetCore$BootstrapPopupWindow,
      minHeight: string
    ): void;
    setWindowAdaptiveMinWidth(
      window: AspNetCore$BootstrapPopupWindow,
      minWidth: number
    ): void;
    setWindowAdaptiveMinWidth(
      window: AspNetCore$BootstrapPopupWindow,
      minWidth: string
    ): void;
    setWindowCollapsed(
      window: AspNetCore$BootstrapPopupWindow,
      value: boolean
    ): void;
    setWindowContentHtml(
      window: AspNetCore$BootstrapPopupWindow,
      html: string
    ): void;
    setWindowContentUrl(
      window: AspNetCore$BootstrapPopupWindow,
      url: string
    ): void;
    setWindowMaximized(
      window: AspNetCore$BootstrapPopupWindow,
      value: boolean
    ): void;
    setWindowPinned(
      window: AspNetCore$BootstrapPopupWindow,
      value: boolean
    ): void;
    setWindowPopupElementID(
      window: AspNetCore$BootstrapPopupWindow,
      popupElementId: string
    ): void;
    setWindowSize(
      window: AspNetCore$BootstrapPopupWindow,
      width: number,
      height: number
    ): void;
    show(): void;
    showAtElement(htmlElement: any): void;
    showAtElementByID(id: string): void;
    showAtPos(x: number, y: number): void;
    showWindow(window: AspNetCore$BootstrapPopupWindow): void;
    showWindow(
      window: AspNetCore$BootstrapPopupWindow,
      popupElementIndex: number
    ): void;
    showWindowAtElement(
      window: AspNetCore$BootstrapPopupWindow,
      htmlElement: any
    ): void;
    showWindowAtElementByID(
      window: AspNetCore$BootstrapPopupWindow,
      id: string
    ): void;
    showWindowAtPos(
      window: AspNetCore$BootstrapPopupWindow,
      x: number,
      y: number
    ): void;
    stretchVertically(): void;
    updatePosition(): void;
    updatePositionAtElement(htmlElement: any): void;
    updateWindowPosition(window: AspNetCore$BootstrapPopupWindow): void;
    updateWindowPositionAtElement(
      window: AspNetCore$BootstrapPopupWindow,
      htmlElement: any
    ): void;
    windowStretchVertically(window: AspNetCore$BootstrapPopupWindow): void;
    on<K: $Keys<AspNetCore$BootstrapPopupControlEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapPopupControlEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapPopupControlEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapPopupControlEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapPopupControlEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapPopupControlEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapPopupControlEventMap = {
    afterResizing: AspNetCore$PopupWindowEventArgs,
    beforeResizing: AspNetCore$PopupWindowEventArgs,
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    closeUp: AspNetCore$PopupWindowCloseUpEventArgs,
    closing: AspNetCore$PopupWindowCancelEventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs,
    pinnedChanged: AspNetCore$PopupWindowPinnedChangedEventArgs,
    popUp: AspNetCore$PopupWindowEventArgs,
    resize: AspNetCore$PopupWindowResizeEventArgs,
    shown: AspNetCore$PopupWindowEventArgs
  } & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapPopupWindow {
    instance: any;
    constructor(instance: any): this;
    index: number;
    name: string;
    popupControl: AspNetCore$BootstrapPopupControl | null;
    getFooterImageUrl(): string;
    getFooterNavigateUrl(): string;
    getFooterText(): string;
    getHeaderImageUrl(): string;
    getHeaderNavigateUrl(): string;
    getHeaderText(): string;
    setFooterImageUrl(value: string): void;
    setFooterNavigateUrl(value: string): void;
    setFooterText(value: string): void;
    setHeaderImageUrl(value: string): void;
    setHeaderNavigateUrl(value: string): void;
    setHeaderText(value: string): void;
  }

  declare class AspNetCore$BootstrapPopupMenu mixins AspNetCore$BootstrapMenu {
    getCurrentPopupElement(): any;
    getCurrentPopupElementIndex(): number;
    getItem(index: number): AspNetCore$BootstrapMenuItem | null;
    getItemByName(name: string): AspNetCore$BootstrapMenuItem | null;
    getRootItem(): AspNetCore$BootstrapMenuItem | null;
    getSelectedItem(): AspNetCore$BootstrapMenuItem | null;
    hide(): void;
    refreshPopupElementConnection(): void;
    setPopupElementCssSelector(selector: string): void;
    setPopupElementID(popupElementId: string): void;
    setSelectedItem(item: AspNetCore$BootstrapMenuItem): void;
    show(): void;
    showAtElement(htmlElement: any): void;
    showAtElementByID(id: string): void;
    showAtPos(x: number, y: number): void;
    on<K: $Keys<AspNetCore$BootstrapPopupMenuEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapPopupMenuEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapPopupMenuEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapPopupMenuEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapPopupMenuEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapPopupMenuEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapPopupMenuEventMap = {} & AspNetCore$BootstrapMenuEventMap;

  declare class AspNetCore$BootstrapProgressBar mixins AspNetCore$Control {
    getCaption(): string;
    getDisplayText(): string;
    getEnabled(): boolean;
    getMaximum(): number;
    getMinimum(): number;
    getPercent(): number;
    getPosition(): number;
    getValue(): any;
    setCaption(caption: string): void;
    setCustomDisplayFormat(text: string): void;
    setEnabled(value: boolean): void;
    setMaximum(max: number): void;
    setMinMaxValues(minValue: number, maxValue: number): void;
    setMinimum(min: number): void;
    setPosition(position: number): void;
    setValue(value: any): void;
    on<K: $Keys<AspNetCore$BootstrapProgressBarEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapProgressBarEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapProgressBarEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapProgressBarEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapProgressBarEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapProgressBarEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapProgressBarEventMap = {} & AspNetCore$ControlEventMap;

  declare type AspNetCore$ActiveViewChangingEventArgs = {
    cancel: boolean,
    +newView: AspNetCore$BootstrapSchedulerViewType,
    +oldView: AspNetCore$BootstrapSchedulerViewType
  } & AspNetCore$EventArgs;

  declare type AspNetCore$AppointmentClickEventArgs = {
    +appointmentId: string,
    +handled: boolean,
    +htmlElement: { [key: string]: any }
  } & AspNetCore$EventArgs;

  declare type AspNetCore$AppointmentDeletingEventArgs = {
    +appointmentIds: { [key: string]: any }[]
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$AppointmentDragEventArgs = {
    allow: boolean,
    +dragInformation: AspNetCore$BootstrapSchedulerAppointmentDragInfo[],
    +mouseEvent: any
  } & AspNetCore$EventArgs;

  declare type AspNetCore$AppointmentDropEventArgs = {
    +dragInformation: AspNetCore$BootstrapSchedulerAppointmentDragInfo[],
    handled: boolean,
    +operation: AspNetCore$BootstrapSchedulerAppointmentOperation
  } & AspNetCore$EventArgs;

  declare type AspNetCore$AppointmentResizeEventArgs = {
    +appointmentId: string,
    handled: boolean,
    +newInterval: AspNetCore$BootstrapTimeInterval,
    +oldInterval: AspNetCore$BootstrapTimeInterval,
    +operation: AspNetCore$BootstrapSchedulerAppointmentOperation
  } & AspNetCore$EventArgs;

  declare type AspNetCore$AppointmentResizingEventArgs = {
    allow: boolean,
    +appointmentId: string,
    +mouseEvent: any,
    +newInterval: AspNetCore$BootstrapTimeInterval,
    +oldInterval: AspNetCore$BootstrapTimeInterval
  } & AspNetCore$EventArgs;

  declare type AspNetCore$AppointmentToolTipShowingEventArgs = {
    +appointment: AspNetCore$BootstrapSchedulerAppointment
  } & AspNetCore$CancelEventArgs;

  declare type AspNetCore$AppointmentsSelectionEventArgs = {
    +appointmentIds: string[]
  } & AspNetCore$EventArgs;

  declare type AspNetCore$CellClickEventArgs = {
    +htmlElement: { [key: string]: any },
    +interval: AspNetCore$BootstrapTimeInterval,
    +resource: string
  } & AspNetCore$EventArgs;

  declare type AspNetCore$MenuItemClickedEventArgs = {
    handled: boolean,
    +itemName: string
  } & AspNetCore$EventArgs;

  declare type AspNetCore$MoreButtonClickedEventArgs = {
    handled: boolean,
    +interval: AspNetCore$BootstrapTimeInterval,
    +resource: string,
    +targetDateTime: Date
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$ShortcutEventArgs = {
    +commandName: string,
    +handled: boolean,
    +htmlEvent: { [key: string]: any }
  } & AspNetCore$EventArgs;

  declare class AspNetCore$BootstrapScheduler mixins AspNetCore$Control {
    appointmentFormCancel(): void;
    appointmentFormDelete(): void;
    appointmentFormSave(): void;
    changeFormContainer(container: any): void;
    changePopupMenuContainer(container: any): void;
    changeTimeZoneId(timeZoneId: string): void;
    changeToolTipContainer(container: any): void;
    deleteAppointment(apt: AspNetCore$BootstrapSchedulerAppointment): void;
    deselectAppointmentById(aptId: any): void;
    getActiveViewType(): AspNetCore$BootstrapSchedulerViewType;
    getAllDayAreaHeight(): number;
    getAppointmentById(
      id: any
    ): AspNetCore$BootstrapSchedulerAppointment | null;
    getAppointmentProperties(
      aptId: number,
      propertyNames: string[],
      onCallBack: any
    ): string[];
    getGroupType(): AspNetCore$BootstrapSchedulerGroupType;
    getResourceNavigatorVisible(): boolean;
    getScrollAreaHeight(): number;
    getSelectedAppointmentIds(): string[];
    getSelectedInterval(): AspNetCore$BootstrapTimeInterval | null;
    getSelectedResource(): string;
    getToolbarVisible(): boolean;
    getTopRowTime(viewType: AspNetCore$BootstrapSchedulerViewType): number;
    getVisibleAppointments(): AspNetCore$BootstrapSchedulerAppointment[];
    getVisibleIntervals(): AspNetCore$BootstrapTimeInterval[];
    goToDateFormApply(): void;
    goToDateFormCancel(): void;
    gotoDate(date: Date): void;
    gotoToday(): void;
    hideLoadingPanel(): void;
    inplaceEditFormCancel(): void;
    inplaceEditFormSave(): void;
    inplaceEditFormShowMore(): void;
    insertAppointment(apt: AspNetCore$BootstrapSchedulerAppointment): void;
    navigateBackward(): void;
    navigateForward(): void;
    performCallback(parameter: string): void;
    refresh(): void;
    refreshClientAppointmentProperties(
      clientAppointment: AspNetCore$BootstrapSchedulerAppointment,
      propertyNames: string[],
      onCallBack: any
    ): void;
    reminderFormCancel(): void;
    reminderFormDismiss(): void;
    reminderFormDismissAll(): void;
    reminderFormSnooze(): void;
    selectAppointmentById(aptId: any): void;
    selectAppointmentById(aptId: any, scrollToSelection: boolean): void;
    setActiveViewType(value: AspNetCore$BootstrapSchedulerViewType): void;
    setAllDayAreaHeight(height: number): void;
    setGroupType(value: AspNetCore$BootstrapSchedulerGroupType): void;
    setHeight(height: number): void;
    setResourceNavigatorVisible(visible: boolean): void;
    setSelection(interval: AspNetCore$BootstrapTimeInterval): void;
    setSelection(
      interval: AspNetCore$BootstrapTimeInterval,
      resourceId: string
    ): void;
    setSelection(
      interval: AspNetCore$BootstrapTimeInterval,
      resourceId: string,
      scrollToSelection: boolean
    ): void;
    setToolbarVisible(visible: boolean): void;
    setTopRowTime(duration: number): void;
    setTopRowTime(
      duration: number,
      viewType: AspNetCore$BootstrapSchedulerViewType
    ): void;
    setVisibleResources(resourceIds: string[]): void;
    showAppointmentFormByClientId(aptClientId: string): void;
    showAppointmentFormByServerId(aptServerId: string): void;
    showInplaceEditor(start: Date, end: Date): void;
    showInplaceEditor(start: Date, end: Date, resourceId: string): void;
    showLoadingPanel(): void;
    showSelectionToolTip(x: number, y: number): void;
    updateAppointment(apt: AspNetCore$BootstrapSchedulerAppointment): void;
    on<K: $Keys<AspNetCore$BootstrapSchedulerEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapSchedulerEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapSchedulerEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapSchedulerEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapSchedulerEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapSchedulerEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapSchedulerEventMap = {
    activeViewChanged: AspNetCore$EventArgs,
    activeViewChanging: AspNetCore$ActiveViewChangingEventArgs,
    appointmentClick: AspNetCore$AppointmentClickEventArgs,
    appointmentDeleting: AspNetCore$AppointmentDeletingEventArgs,
    appointmentDoubleClick: AspNetCore$AppointmentClickEventArgs,
    appointmentDrag: AspNetCore$AppointmentDragEventArgs,
    appointmentDrop: AspNetCore$AppointmentDropEventArgs,
    appointmentResize: AspNetCore$AppointmentResizeEventArgs,
    appointmentResizing: AspNetCore$AppointmentResizingEventArgs,
    appointmentToolTipShowing: AspNetCore$AppointmentToolTipShowingEventArgs,
    appointmentsSelectionChanged: AspNetCore$AppointmentsSelectionEventArgs,
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    cellClick: AspNetCore$CellClickEventArgs,
    cellDoubleClick: AspNetCore$CellClickEventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs,
    menuItemClicked: AspNetCore$MenuItemClickedEventArgs,
    moreButtonClicked: AspNetCore$MoreButtonClickedEventArgs,
    selectionChanged: AspNetCore$EventArgs,
    selectionChanging: AspNetCore$EventArgs,
    shortcut: AspNetCore$ShortcutEventArgs,
    visibleIntervalChanged: AspNetCore$EventArgs
  } & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapTimeInterval {
    instance: any;
    constructor(instance: any): this;
    contains(interval: AspNetCore$BootstrapTimeInterval): boolean;
    equals(interval: AspNetCore$BootstrapTimeInterval): boolean;
    getAllDay(): boolean;
    getDuration(): number;
    getEnd(): Date;
    getStart(): Date;
    intersectsWith(interval: AspNetCore$BootstrapTimeInterval): boolean;
    intersectsWithExcludingBounds(
      interval: AspNetCore$BootstrapTimeInterval
    ): boolean;
    setAllDay(allDayValue: boolean): void;
    setDuration(value: number): void;
    setEnd(value: Date): void;
    setStart(value: Date): void;
  }

  declare class AspNetCore$BootstrapSchedulerAppointment {
    instance: any;
    constructor(instance: any): this;
    appointmentId: string;
    appointmentType: AspNetCore$BootstrapSchedulerAppointmentType;
    interval: AspNetCore$BootstrapTimeInterval | null;
    labelIndex: number;
    resources: string[];
    statusIndex: number;
    addResource(resourceId: { [key: string]: any }): void;
    getAllDay(): boolean;
    getAppointmentType(): AspNetCore$BootstrapSchedulerAppointmentType;
    getDescription(): string;
    getDuration(): number;
    getEnd(): Date;
    getId(): any;
    getLabelId(): number;
    getLocation(): string;
    getRecurrenceInfo(): AspNetCore$BootstrapSchedulerRecurrenceInfo | null;
    getRecurrencePattern(): AspNetCore$BootstrapSchedulerAppointment | null;
    getResource(index: number): any;
    getStart(): Date;
    getStatusId(): number;
    getSubject(): string;
    setAllDay(allDay: boolean): void;
    setAppointmentType(
      type: AspNetCore$BootstrapSchedulerAppointmentType
    ): void;
    setDescription(description: string): void;
    setDuration(duration: number): void;
    setEnd(end: Date): void;
    setId(id: any): void;
    setLabelId(statusId: number): void;
    setLocation(location: string): void;
    setRecurrenceInfo(
      recurrenceInfo: AspNetCore$BootstrapSchedulerRecurrenceInfo
    ): void;
    setStart(start: Date): void;
    setStatusId(statusId: number): void;
    setSubject(subject: string): void;
  }

  declare class AspNetCore$BootstrapSchedulerAppointmentDragInfo {
    instance: any;
    constructor(instance: any): this;
    appointmentId: string;
    newInterval: AspNetCore$BootstrapTimeInterval | null;
    oldInterval: AspNetCore$BootstrapTimeInterval | null;
  }

  declare class AspNetCore$BootstrapSchedulerAppointmentOperation {
    instance: any;
    constructor(instance: any): this;
    apply(): void;
    cancel(): void;
  }

  declare class AspNetCore$BootstrapSchedulerRecurrenceInfo {
    instance: any;
    constructor(instance: any): this;
    getDayNumber(): number;
    getDuration(): number;
    getEnd(): Date;
    getMonth(): number;
    getOccurrenceCount(): number;
    getPeriodicity(): number;
    getRange(): AspNetCore$BootstrapSchedulerRecurrenceRange;
    getRecurrenceType(): AspNetCore$BootstrapSchedulerRecurrenceType;
    getStart(): Date;
    getWeekDays(): AspNetCore$WeekDays;
    getWeekOfMonth(): AspNetCore$WeekOfMonth;
    setDayNumber(dayNumber: number): void;
    setDuration(duration: number): void;
    setEnd(end: Date): void;
    setMonth(month: number): void;
    setOccurrenceCount(occurrenceCount: number): void;
    setPeriodicity(periodicity: number): void;
    setRange(range: AspNetCore$BootstrapSchedulerRecurrenceRange): void;
    setRecurrenceType(type: AspNetCore$BootstrapSchedulerRecurrenceType): void;
    setStart(start: Date): void;
    setWeekDays(weekDays: AspNetCore$WeekDays): void;
    setWeekOfMonth(weekOfMonth: AspNetCore$WeekOfMonth): void;
  }

  declare class AspNetCore$BootstrapSparkline mixins AspNetCore$Control {
    exportTo(fileName: string, format: string): void;
    getDataSource(): any;
    getInstance(): any;
    print(): void;
    setDataSource(dataSource: any): void;
    setOptions(options: any): void;
    on<K: $Keys<AspNetCore$BootstrapSparklineEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapSparklineEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapSparklineEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapSparklineEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapSparklineEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapSparklineEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapSparklineEventMap = {
    disposing: AspNetCore$BootstrapChartEventArgsBase,
    drawn: AspNetCore$BootstrapChartEventArgsBase,
    exported: AspNetCore$BootstrapChartEventArgsBase,
    exporting: AspNetCore$BootstrapChartExportEventArgs,
    fileSaving: AspNetCore$BootstrapChartExportEventArgs,
    incidentOccurred: AspNetCore$BootstrapChartErrorEventArgs,
    init: AspNetCore$BootstrapChartEventArgsBase,
    optionChanged: AspNetCore$BootstrapChartOptionChangedEventArgs,
    tooltipHidden: AspNetCore$BootstrapChartEventArgsBase,
    tooltipShown: AspNetCore$BootstrapChartEventArgsBase
  } & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapTimeEdit
    mixins AspNetCore$BootstrapClientEdit {
    getButtonVisible(number: number): boolean;
    getCaretPosition(): number;
    getDate(): Date;
    getText(): string;
    selectAll(): void;
    setButtonVisible(number: number, value: boolean): void;
    setCaretPosition(position: number): void;
    setDate(date: Date): void;
    setSelection(
      startPos: number,
      endPos: number,
      scrollToSelection: boolean
    ): void;
    setText(text: string): void;
    on<K: $Keys<AspNetCore$BootstrapTimeEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTimeEditEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapTimeEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTimeEditEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapTimeEditEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapTimeEditEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapTimeEditEventMap = {
    buttonClick: AspNetCore$ButtonEditClickEventArgs,
    dateChanged: AspNetCore$ProcessingModeEventArgs,
    keyDown: AspNetCore$EditKeyEventArgs,
    keyPress: AspNetCore$EditKeyEventArgs,
    keyUp: AspNetCore$EditKeyEventArgs,
    textChanged: AspNetCore$ProcessingModeEventArgs,
    userInput: AspNetCore$EventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare class AspNetCore$BootstrapSpinEdit
    mixins AspNetCore$BootstrapClientEdit {
    getButtonVisible(number: number): boolean;
    getCaretPosition(): number;
    getMaxValue(): number;
    getMinValue(): number;
    getNumber(): number;
    getText(): string;
    selectAll(): void;
    setButtonVisible(number: number, value: boolean): void;
    setCaretPosition(position: number): void;
    setMaxValue(value: number): void;
    setMinValue(value: number): void;
    setNumber(number: number): void;
    setSelection(
      startPos: number,
      endPos: number,
      scrollToSelection: boolean
    ): void;
    setText(text: string): void;
    setValue(number: number): void;
    on<K: $Keys<AspNetCore$BootstrapSpinEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapSpinEditEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapSpinEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapSpinEditEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapSpinEditEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapSpinEditEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapSpinEditEventMap = {
    buttonClick: AspNetCore$ButtonEditClickEventArgs,
    keyDown: AspNetCore$EditKeyEventArgs,
    keyPress: AspNetCore$EditKeyEventArgs,
    keyUp: AspNetCore$EditKeyEventArgs,
    numberChanged: AspNetCore$ProcessingModeEventArgs,
    textChanged: AspNetCore$ProcessingModeEventArgs,
    userInput: AspNetCore$EventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare type AspNetCore$TabControlTabEventArgs = {
    +tab: AspNetCore$BootstrapTab
  } & AspNetCore$EventArgs;

  declare type AspNetCore$TabControlTabCancelEventArgs = {
    reloadContentOnCallback: boolean,
    +tab: AspNetCore$BootstrapTab
  } & AspNetCore$ProcessingModeCancelEventArgs;

  declare type AspNetCore$TabControlTabClickEventArgs = {
    +htmlElement: { [key: string]: any },
    +htmlEvent: { [key: string]: any }
  } & AspNetCore$TabControlTabCancelEventArgs;

  declare class AspNetCore$BootstrapTabControl mixins AspNetCore$Control {
    adjustSize(): void;
    getActiveTab(): AspNetCore$BootstrapTab | null;
    getActiveTabIndex(): number;
    getTab(index: number): AspNetCore$BootstrapTab | null;
    getTabByName(name: string): AspNetCore$BootstrapTab | null;
    getTabCount(): number;
    setActiveTab(tab: AspNetCore$BootstrapTab): void;
    setActiveTabIndex(index: number): void;
    on<K: $Keys<AspNetCore$BootstrapTabControlEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTabControlEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapTabControlEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTabControlEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapTabControlEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapTabControlEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapTabControlEventMap = {
    activeTabChanged: AspNetCore$TabControlTabEventArgs,
    activeTabChanging: AspNetCore$TabControlTabCancelEventArgs,
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs,
    tabClick: AspNetCore$TabControlTabClickEventArgs
  } & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapTab {
    instance: any;
    constructor(instance: any): this;
    index: number;
    name: string;
    tabControl: AspNetCore$BootstrapTabControl | null;
    getActiveIconCssClass(): string;
    getActiveImageUrl(): string;
    getBadgeIconCssClass(): string;
    getBadgeText(): string;
    getEnabled(): boolean;
    getIconCssClass(): string;
    getImageUrl(): string;
    getNavigateUrl(): string;
    getText(): string;
    getVisible(): boolean;
    setActiveIconCssClass(cssClass: string): void;
    setActiveImageUrl(value: string): void;
    setBadgeIconCssClass(cssClass: string): void;
    setBadgeText(text: string): void;
    setEnabled(value: boolean): void;
    setIconCssClass(cssClass: string): void;
    setImageUrl(value: string): void;
    setNavigateUrl(value: string): void;
    setText(value: string): void;
    setVisible(value: boolean): void;
  }

  declare class AspNetCore$BootstrapPageControl
    mixins AspNetCore$BootstrapTabControl {
    getActiveTab(): AspNetCore$BootstrapTab | null;
    getTab(index: number): AspNetCore$BootstrapTab | null;
    getTabByName(name: string): AspNetCore$BootstrapTab | null;
    getTabContentHTML(tab: AspNetCore$BootstrapTab): string;
    performCallback(data: any): Promise<void>;
    performCallback(data: any, onSuccess: () => void): void;
    setActiveTab(tab: AspNetCore$BootstrapTab): void;
    setTabContentHTML(tab: AspNetCore$BootstrapTab, html: string): void;
    on<K: $Keys<AspNetCore$BootstrapPageControlEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapPageControlEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapPageControlEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapPageControlEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapPageControlEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapPageControlEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapPageControlEventMap = {} & AspNetCore$BootstrapTabControlEventMap;

  declare class AspNetCore$BootstrapTagBox
    mixins AspNetCore$BootstrapClientEdit {
    addItem(texts: string[]): number;
    addItem(text: string): number;
    addItem(texts: string[], value: any): number;
    addItem(text: string, value: any): number;
    addItem(texts: string[], value: any, iconCssClass: string): number;
    addItem(text: string, value: any, iconCssClass: string): number;
    addItemCssClass(index: number, className: string): void;
    addItemTextCellCssClass(
      itemIndex: number,
      textCellIndex: number,
      className: string
    ): void;
    addTag(text: string): void;
    adjustDropDownWindow(): void;
    beginUpdate(): void;
    clearItems(): void;
    clearTagCollection(): void;
    endUpdate(): void;
    ensureDropDownLoaded(callbackFunction: any): void;
    findItemByText(text: string): AspNetCore$BootstrapListBoxItem | null;
    findItemByValue(value: any): AspNetCore$BootstrapListBoxItem | null;
    getButtonVisible(number: number): boolean;
    getCaretPosition(): number;
    getItem(index: number): AspNetCore$BootstrapListBoxItem | null;
    getItemBadgeIconCssClass(index: number): string;
    getItemBadgeText(index: number): string;
    getItemCount(): number;
    getSelectedIndex(): number;
    getSelectedItem(): AspNetCore$BootstrapListBoxItem | null;
    getTagCollection(): string[];
    getTagHtmlElement(index: number): any;
    getTagIndexByText(text: string): number;
    getTagRemoveButtonHtmlElement(index: number): any;
    getTagTextHtmlElement(index: number): any;
    getText(): string;
    getValue(): string;
    hideDropDown(): void;
    insertItem(index: number, texts: string[]): void;
    insertItem(index: number, text: string): void;
    insertItem(index: number, texts: string[], value: any): void;
    insertItem(index: number, text: string, value: any): void;
    insertItem(
      index: number,
      texts: string[],
      value: any,
      iconCssClass: string
    ): void;
    insertItem(
      index: number,
      text: string,
      value: any,
      iconCssClass: string
    ): void;
    isCustomTag(text: string, caseSensitive: boolean): boolean;
    makeItemVisible(index: number): void;
    performCallback(data: any): Promise<void>;
    performCallback(data: any, onSuccess: () => void): void;
    removeItem(index: number): void;
    removeItemCssClass(index: number, className: string): void;
    removeItemTextCellCssClass(
      itemIndex: number,
      textCellIndex: number,
      className: string
    ): void;
    removeTag(index: number): void;
    removeTagByText(text: string): void;
    selectAll(): void;
    setButtonVisible(number: number, value: boolean): void;
    setCaretPosition(position: number): void;
    setItemBadgeIconCssClass(index: number, cssClass: string): void;
    setItemBadgeText(index: number, text: string): void;
    setItemHtml(index: number, html: string): void;
    setItemTextCellHtml(
      itemIndex: number,
      textCellIndex: number,
      html: string
    ): void;
    setItemTextCellTooltip(
      itemIndex: number,
      textCellIndex: number,
      tooltip: string
    ): void;
    setItemTooltip(index: number, tooltip: string): void;
    setSelectedIndex(index: number): void;
    setSelectedItem(item: AspNetCore$BootstrapListBoxItem): void;
    setSelection(
      startPos: number,
      endPos: number,
      scrollToSelection: boolean
    ): void;
    setTagCollection(collection: string[]): void;
    setText(text: string): void;
    setValue(value: string): void;
    showDropDown(): void;
    on<K: $Keys<AspNetCore$BootstrapTagBoxEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTagBoxEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapTagBoxEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTagBoxEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapTagBoxEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapTagBoxEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapTagBoxEventMap = {
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    buttonClick: AspNetCore$ButtonEditClickEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    closeUp: AspNetCore$EventArgs,
    customHighlighting: AspNetCore$ListEditCustomHighlightingEventArgs,
    dropDown: AspNetCore$EventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs,
    itemFiltering: AspNetCore$ListEditItemFilteringEventArgs,
    keyDown: AspNetCore$EditKeyEventArgs,
    keyPress: AspNetCore$EditKeyEventArgs,
    keyUp: AspNetCore$EditKeyEventArgs,
    queryCloseUp: AspNetCore$CancelEventArgs,
    selectedIndexChanged: AspNetCore$ProcessingModeEventArgs,
    tagsChanged: AspNetCore$EventArgs,
    textChanged: AspNetCore$ProcessingModeEventArgs,
    userInput: AspNetCore$EventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare type AspNetCore$ButtonEditClickEventArgs = {
    +buttonIndex: number
  } & AspNetCore$ProcessingModeEventArgs;

  declare class AspNetCore$BootstrapButtonEdit
    mixins AspNetCore$BootstrapClientEdit {
    getButtonVisible(number: number): boolean;
    getCaretPosition(): number;
    getText(): string;
    selectAll(): void;
    setButtonVisible(number: number, value: boolean): void;
    setCaretPosition(position: number): void;
    setSelection(
      startPos: number,
      endPos: number,
      scrollToSelection: boolean
    ): void;
    setText(text: string): void;
    on<K: $Keys<AspNetCore$BootstrapButtonEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapButtonEditEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapButtonEditEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapButtonEditEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapButtonEditEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapButtonEditEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapButtonEditEventMap = {
    buttonClick: AspNetCore$ButtonEditClickEventArgs,
    keyDown: AspNetCore$EditKeyEventArgs,
    keyPress: AspNetCore$EditKeyEventArgs,
    keyUp: AspNetCore$EditKeyEventArgs,
    textChanged: AspNetCore$ProcessingModeEventArgs,
    userInput: AspNetCore$EventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare class AspNetCore$BootstrapMemo mixins AspNetCore$BootstrapClientEdit {
    getCaretPosition(): number;
    getText(): string;
    selectAll(): void;
    setCaretPosition(position: number): void;
    setSelection(
      startPos: number,
      endPos: number,
      scrollToSelection: boolean
    ): void;
    setText(text: string): void;
    on<K: $Keys<AspNetCore$BootstrapMemoEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapMemoEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapMemoEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapMemoEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapMemoEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapMemoEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapMemoEventMap = {
    keyDown: AspNetCore$EditKeyEventArgs,
    keyPress: AspNetCore$EditKeyEventArgs,
    keyUp: AspNetCore$EditKeyEventArgs,
    textChanged: AspNetCore$ProcessingModeEventArgs,
    userInput: AspNetCore$EventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare class AspNetCore$BootstrapTextBox
    mixins AspNetCore$BootstrapClientEdit {
    getCaretPosition(): number;
    getText(): string;
    selectAll(): void;
    setCaretPosition(position: number): void;
    setSelection(
      startPos: number,
      endPos: number,
      scrollToSelection: boolean
    ): void;
    setText(text: string): void;
    on<K: $Keys<AspNetCore$BootstrapTextBoxEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTextBoxEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapTextBoxEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTextBoxEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapTextBoxEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapTextBoxEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapTextBoxEventMap = {
    keyDown: AspNetCore$EditKeyEventArgs,
    keyPress: AspNetCore$EditKeyEventArgs,
    keyUp: AspNetCore$EditKeyEventArgs,
    textChanged: AspNetCore$ProcessingModeEventArgs,
    userInput: AspNetCore$EventArgs
  } & AspNetCore$BootstrapClientEditEventMap;

  declare class AspNetCore$BootstrapToolbar mixins AspNetCore$BootstrapMenu {
    on<K: $Keys<AspNetCore$BootstrapToolbarEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapToolbarEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapToolbarEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapToolbarEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapToolbarEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapToolbarEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapToolbarEventMap = {} & AspNetCore$BootstrapMenuEventMap;

  declare type AspNetCore$TreeViewNodeProcessingModeEventArgs = {
    +node: AspNetCore$BootstrapTreeViewNode
  } & AspNetCore$ProcessingModeEventArgs;

  declare type AspNetCore$TreeViewNodeClickEventArgs = {
    +htmlElement: any,
    +htmlEvent: any
  } & AspNetCore$TreeViewNodeProcessingModeEventArgs;

  declare type AspNetCore$TreeViewNodeEventArgs = {
    +node: AspNetCore$BootstrapTreeViewNode
  } & AspNetCore$EventArgs;

  declare type AspNetCore$TreeViewNodeCancelEventArgs = {
    +node: AspNetCore$BootstrapTreeViewNode
  } & AspNetCore$ProcessingModeCancelEventArgs;

  declare class AspNetCore$BootstrapTreeView mixins AspNetCore$Control {
    collapseAll(): void;
    expandAll(): void;
    getNode(index: number): AspNetCore$BootstrapTreeViewNode | null;
    getNodeByName(name: string): AspNetCore$BootstrapTreeViewNode | null;
    getNodeByText(text: string): AspNetCore$BootstrapTreeViewNode | null;
    getNodeCount(): number;
    getRootNode(): AspNetCore$BootstrapTreeViewNode | null;
    getSelectedNode(): AspNetCore$BootstrapTreeViewNode | null;
    setSelectedNode(node: AspNetCore$BootstrapTreeViewNode): void;
    on<K: $Keys<AspNetCore$BootstrapTreeViewEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTreeViewEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapTreeViewEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTreeViewEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapTreeViewEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapTreeViewEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapTreeViewEventMap = {
    beginCallback: AspNetCore$BeginCallbackEventArgs,
    callbackError: AspNetCore$CallbackErrorEventArgs,
    checkedChanged: AspNetCore$TreeViewNodeProcessingModeEventArgs,
    endCallback: AspNetCore$EndCallbackEventArgs,
    expandedChanged: AspNetCore$TreeViewNodeEventArgs,
    expandedChanging: AspNetCore$TreeViewNodeCancelEventArgs,
    nodeClick: AspNetCore$TreeViewNodeClickEventArgs
  } & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapTreeViewNode mixins AspNetCore$Control {
    index: number;
    name: string;
    parent: AspNetCore$BootstrapTreeViewNode | null;
    treeView: AspNetCore$BootstrapTreeView | null;
    getBadgeIconCssClass(): string;
    getBadgeText(): string;
    getCheckState(): string;
    getChecked(): boolean;
    getEnabled(): boolean;
    getExpanded(): boolean;
    getHtmlElement(): any;
    getIconCssClass(): string;
    getImageUrl(): string;
    getNavigateUrl(): string;
    getNode(index: number): AspNetCore$BootstrapTreeViewNode | null;
    getNodeByName(name: string): AspNetCore$BootstrapTreeViewNode | null;
    getNodeByText(text: string): AspNetCore$BootstrapTreeViewNode | null;
    getNodeCount(): number;
    getText(): string;
    getVisible(): boolean;
    setBadgeIconCssClass(cssClass: string): void;
    setBadgeText(text: string): void;
    setChecked(value: boolean): void;
    setEnabled(value: boolean): void;
    setExpanded(value: boolean): void;
    setIconCssClass(cssClass: string): void;
    setImageUrl(value: string): void;
    setNavigateUrl(value: string): void;
    setText(value: string): void;
    setVisible(value: boolean): void;
    on<K: $Keys<AspNetCore$BootstrapTreeViewNodeEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTreeViewNodeEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapTreeViewNodeEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapTreeViewNodeEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapTreeViewNodeEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapTreeViewNodeEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapTreeViewNodeEventMap = {} & AspNetCore$ControlEventMap;

  declare type AspNetCore$UploadControlFilesUploadStartEventArgs = {
    +cancel: boolean
  } & AspNetCore$EventArgs;

  declare type AspNetCore$UploadControlFileUploadCompleteEventArgs = {
    +callbackData: string,
    +errorText: string,
    +inputIndex: number,
    +isValid: boolean
  } & AspNetCore$EventArgs;

  declare type AspNetCore$UploadControlFilesUploadCompleteEventArgs = {
    +callbackData: string,
    +errorText: string
  } & AspNetCore$EventArgs;

  declare type AspNetCore$UploadControlTextChangedEventArgs = {
    +inputIndex: number
  } & AspNetCore$EventArgs;

  declare type AspNetCore$UploadControlUploadingProgressChangedEventArgs = {
    +currentFileContentLength: number,
    +currentFileName: string,
    +currentFileProgress: number,
    +currentFileUploadedContentLength: number,
    +fileCount: number,
    +progress: number,
    +totalContentLength: number,
    +uploadedContentLength: number
  } & AspNetCore$EventArgs;

  declare type AspNetCore$UploadControlValidationErrorOccurredEventArgs = {
    errorText: string,
    +invalidFiles: AspNetCore$BootstrapUploadControlInvalidFileInfo[],
    showAlert: boolean,
    +validationSettings: AspNetCore$BootstrapUploadControlValidationSettings
  } & AspNetCore$EventArgs;

  declare type AspNetCore$UploadControlDropZoneEnterEventArgs = {
    +dropZone: any
  } & AspNetCore$EventArgs;

  declare type AspNetCore$UploadControlDropZoneLeaveEventArgs = {
    +dropZone: any
  } & AspNetCore$EventArgs;

  declare class AspNetCore$BootstrapUploadControl mixins AspNetCore$Control {
    addFileInput(): void;
    cancel(): void;
    clearText(): void;
    getAddButtonText(): string;
    getEnabled(): boolean;
    getFileInputCount(): number;
    getSelectedFiles(
      inputIndex: number
    ): AspNetCore$BootstrapUploadControlFile[];
    getText(index: number): string;
    getUploadButtonText(): string;
    removeFileFromSelection(fileIndex: number): void;
    removeFileFromSelection(file: AspNetCore$BootstrapUploadControlFile): void;
    removeFileInput(index: number): void;
    setAddButtonText(text: string): void;
    setDialogTriggerID(ids: string): void;
    setEnabled(enabled: boolean): void;
    setFileInputCount(count: number): void;
    setUploadButtonText(text: string): void;
    upload(): void;
    on<K: $Keys<AspNetCore$BootstrapUploadControlEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapUploadControlEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapUploadControlEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapUploadControlEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapUploadControlEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapUploadControlEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapUploadControlEventMap = {
    dropZoneEnter: AspNetCore$UploadControlDropZoneEnterEventArgs,
    dropZoneLeave: AspNetCore$UploadControlDropZoneLeaveEventArgs,
    fileInputCountChanged: AspNetCore$EventArgs,
    fileUploadComplete: AspNetCore$UploadControlFileUploadCompleteEventArgs,
    filesUploadComplete: AspNetCore$UploadControlFilesUploadCompleteEventArgs,
    filesUploadStart: AspNetCore$UploadControlFilesUploadStartEventArgs,
    textChanged: AspNetCore$UploadControlTextChangedEventArgs,
    uploadingProgressChanged: AspNetCore$UploadControlUploadingProgressChangedEventArgs,
    validationErrorOccurred: AspNetCore$UploadControlValidationErrorOccurredEventArgs
  } & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapUploadControlFile
    mixins AspNetCore$Control {
    name: string;
    size: number;
    sourceFileObject: any;
    on<K: $Keys<AspNetCore$BootstrapUploadControlFileEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapUploadControlFileEventMap, K>
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapUploadControlFileEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<AspNetCore$BootstrapUploadControlFileEventMap, K>
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapUploadControlFileEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<AspNetCore$BootstrapUploadControlFileEventMap, K>
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapUploadControlFileEventMap = {} & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapUploadControlInvalidFileInfo
    mixins AspNetCore$Control {
    fileName: string;
    fileSize: number;
    on<K: $Keys<AspNetCore$BootstrapUploadControlInvalidFileInfoEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<
          AspNetCore$BootstrapUploadControlInvalidFileInfoEventMap,
          K
        >
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapUploadControlInvalidFileInfoEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<
          AspNetCore$BootstrapUploadControlInvalidFileInfoEventMap,
          K
        >
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapUploadControlInvalidFileInfoEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<
          AspNetCore$BootstrapUploadControlInvalidFileInfoEventMap,
          K
        >
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapUploadControlInvalidFileInfoEventMap = {} & AspNetCore$ControlEventMap;

  declare class AspNetCore$BootstrapUploadControlValidationSettings
    mixins AspNetCore$Control {
    allowedFileExtensions: string[];
    invalidFileNameCharacters: string[];
    maxFileCount: number;
    maxFileSize: number;
    on<K: $Keys<AspNetCore$BootstrapUploadControlValidationSettingsEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<
          AspNetCore$BootstrapUploadControlValidationSettingsEventMap,
          K
        >
      ) => void
    ): this;
    once<K: $Keys<AspNetCore$BootstrapUploadControlValidationSettingsEventMap>>(
      eventName: K,
      callback: (
        args?: $ElementType<
          AspNetCore$BootstrapUploadControlValidationSettingsEventMap,
          K
        >
      ) => void
    ): this;
    off<K: $Keys<AspNetCore$BootstrapUploadControlValidationSettingsEventMap>>(
      eventName?: K,
      callback?: (
        args?: $ElementType<
          AspNetCore$BootstrapUploadControlValidationSettingsEventMap,
          K
        >
      ) => void
    ): this;
  }

  declare type AspNetCore$BootstrapUploadControlValidationSettingsEventMap = {} & AspNetCore$ControlEventMap;
}
