declare module "jqueryui" {
  declare type JQueryUI$AccordionOptions = {
    active?: any,
    animate?: any,
    collapsible?: boolean,
    disabled?: boolean,
    event?: string,
    header?: string,
    heightStyle?: string,
    icons?: any
  } & JQueryUI$AccordionEvents;

  declare interface JQueryUI$AccordionUIParams {
    newHeader: JQuery;
    oldHeader: JQuery;
    newPanel: JQuery;
    oldPanel: JQuery;
  }

  declare interface JQueryUI$AccordionEvent {
    (event: Event, ui: JQueryUI$AccordionUIParams): void;
  }

  declare interface JQueryUI$AccordionEvents {
    activate?: JQueryUI$AccordionEvent;
    beforeActivate?: JQueryUI$AccordionEvent;
    create?: JQueryUI$AccordionEvent;
  }

  declare type JQueryUI$Accordion = {} & JQueryUI$Widget &
    JQueryUI$AccordionOptions;

  declare type JQueryUI$AutocompleteOptions = {
    appendTo?: any,
    autoFocus?: boolean,
    delay?: number,
    disabled?: boolean,
    minLength?: number,
    position?: any,
    source?: any,
    classes?: JQueryUI$AutocompleteClasses
  } & JQueryUI$AutocompleteEvents;

  declare interface JQueryUI$AutocompleteClasses {
    "ui-autocomplete"?: string;
    "ui-autocomplete-input"?: string;
  }

  declare interface JQueryUI$AutocompleteUIParams {
    /**
     * The item selected from the menu, if any. Otherwise the property is null
     */
    item?: any;
    content?: any;
  }

  declare interface JQueryUI$AutocompleteEvent {
    (event: Event, ui: JQueryUI$AutocompleteUIParams): void;
  }

  declare interface JQueryUI$AutocompleteEvents {
    change?: JQueryUI$AutocompleteEvent;
    close?: JQueryUI$AutocompleteEvent;
    create?: JQueryUI$AutocompleteEvent;
    focus?: JQueryUI$AutocompleteEvent;
    open?: JQueryUI$AutocompleteEvent;
    response?: JQueryUI$AutocompleteEvent;
    search?: JQueryUI$AutocompleteEvent;
    select?: JQueryUI$AutocompleteEvent;
  }

  declare type JQueryUI$Autocomplete = {
    escapeRegex: (value: string) => string,
    filter: (array: any, term: string) => any
  } & JQueryUI$Widget &
    JQueryUI$AutocompleteOptions;

  declare interface JQueryUI$ButtonOptions {
    disabled?: boolean;
    icons?: any;
    label?: string;
    text?: string | boolean;
    click?: (event?: Event) => void;
  }

  declare type JQueryUI$Button = {} & JQueryUI$Widget & JQueryUI$ButtonOptions;

  declare interface JQueryUI$DatepickerOptions {
    /**
     * An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field.
     */
    altField?: any;

    /**
     * The dateFormat to be used for the altField option. This allows one date format to be shown to the user for selection purposes, while a different format is actually sent behind the scenes. For a full list of the possible formats see the formatDate function
     */
    altFormat?: string;

    /**
     * The text to display after each date field, e.g., to show the required format.
     */
    appendText?: string;

    /**
     * Set to true to automatically resize the input field to accommodate dates in the current dateFormat.
     */
    autoSize?: boolean;

    /**
     * A function that takes an input field and current datepicker instance and returns an options object to update the datepicker with. It is called just before the datepicker is displayed.
     */
    beforeShow?: (
      input: Element,
      inst: any
    ) => JQueryUI$JQueryUI$DatepickerOptions;

    /**
     * A function that takes a date as a parameter and must return an array with:
     * [0]: true/false indicating whether or not this date is selectable
     * [1]: a CSS class name to add to the date's cell or "" for the default presentation
     * [2]: an optional popup tooltip for this date
     * The function is called for each day in the datepicker before it is displayed.
     */
    beforeShowDay?: (date: Date) => any[];

    /**
     * A URL of an image to use to display the datepicker when the showOn option is set to "button" or "both". If set, the buttonText option becomes the alt value and is not directly displayed.
     */
    buttonImage?: string;

    /**
     * Whether the button image should be rendered by itself instead of inside a button element. This option is only relevant if the buttonImage option has also been set.
     */
    buttonImageOnly?: boolean;

    /**
     * The text to display on the trigger button. Use in conjunction with the showOn option set to "button" or "both".
     */
    buttonText?: string;

    /**
     * A function to calculate the week of the year for a given date. The default implementation uses the ISO 8601 definition: weeks start on a Monday; the first week of the year contains the first Thursday of the year.
     */
    calculateWeek?: (date: Date) => string;

    /**
     * Whether the month should be rendered as a dropdown instead of text.
     */
    changeMonth?: boolean;

    /**
     * Whether the year should be rendered as a dropdown instead of text. Use the yearRange option to control which years are made available for selection.
     */
    changeYear?: boolean;

    /**
     * The text to display for the close link. Use the showButtonPanel option to display this button.
     */
    closeText?: string;

    /**
     * When true, entry in the input field is constrained to those characters allowed by the current dateFormat option.
     */
    constrainInput?: boolean;

    /**
     * The text to display for the current day link. Use the showButtonPanel option to display this button.
     */
    currentText?: string;

    /**
     * The format for parsed and displayed dates. For a full list of the possible formats see the formatDate function.
     */
    dateFormat?: string;

    /**
     * The list of long day names, starting from Sunday, for use as requested via the dateFormat option.
     */
    dayNames?: string[];

    /**
     * The list of minimised day names, starting from Sunday, for use as column headers within the datepicker.
     */
    dayNamesMin?: string[];

    /**
     * The list of abbreviated day names, starting from Sunday, for use as requested via the dateFormat option.
     */
    dayNamesShort?: string[];

    /**
     * Set the date to highlight on first opening if the field is blank. Specify either an actual date via a Date object or as a string in the current dateFormat, or a number of days from today (e.g. +7) or a string of values and periods ('y' for years, 'm' for months, 'w' for weeks, 'd' for days, e.g. '+1m +7d'), or null for today.
     * Multiple types supported:
     * Date: A date object containing the default date.
     * Number: A number of days from today. For example 2 represents two days from today and -1 represents yesterday.
     * String: A string in the format defined by the dateFormat option, or a relative date. Relative dates must contain value and period pairs; valid periods are "y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
     */
    defaultDate?: any;

    /**
     * Control the speed at which the datepicker appears, it may be a time in milliseconds or a string representing one of the three predefined speeds ("slow", "normal", "fast").
     */
    duration?: string;

    /**
     * Set the first day of the week: Sunday is 0, Monday is 1, etc.
     */
    firstDay?: number;

    /**
     * When true, the current day link moves to the currently selected date instead of today.
     */
    gotoCurrent?: boolean;

    /**
     * Normally the previous and next links are disabled when not applicable (see the minDate and maxDate options). You can hide them altogether by setting this attribute to true.
     */
    hideIfNoPrevNext?: boolean;

    /**
     * Whether the current language is drawn from right to left.
     */
    isRTL?: boolean;

    /**
     * The maximum selectable date. When set to null, there is no maximum.
     * Multiple types supported:
     * Date: A date object containing the maximum date.
     * Number: A number of days from today. For example 2 represents two days from today and -1 represents yesterday.
     * String: A string in the format defined by the dateFormat option, or a relative date. Relative dates must contain value and period pairs; valid periods are "y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
     */
    maxDate?: any;

    /**
     * The minimum selectable date. When set to null, there is no minimum.
     * Multiple types supported:
     * Date: A date object containing the minimum date.
     * Number: A number of days from today. For example 2 represents two days from today and -1 represents yesterday.
     * String: A string in the format defined by the dateFormat option, or a relative date. Relative dates must contain value and period pairs; valid periods are "y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
     */
    minDate?: any;

    /**
     * The list of full month names, for use as requested via the dateFormat option.
     */
    monthNames?: string[];

    /**
     * The list of abbreviated month names, as used in the month header on each datepicker and as requested via the dateFormat option.
     */
    monthNamesShort?: string[];

    /**
     * Whether the prevText and nextText options should be parsed as dates by the formatDate function, allowing them to display the target month names for example.
     */
    navigationAsDateFormat?: boolean;

    /**
     * The text to display for the next month link. With the standard ThemeRoller styling, this value is replaced by an icon.
     */
    nextText?: string;

    /**
     * The number of months to show at once.
     * Multiple types supported:
     * Number: The number of months to display in a single row.
     * Array: An array defining the number of rows and columns to display.
     */
    numberOfMonths?: any;

    /**
     * Called when the datepicker moves to a new month and/or year. The function receives the selected year, month (1-12), and the datepicker instance as parameters. this refers to the associated input field.
     */
    onChangeMonthYear?: (year: number, month: number, inst: any) => void;

    /**
     * Called when the datepicker is closed, whether or not a date is selected. The function receives the selected date as text ("" if none) and the datepicker instance as parameters. this refers to the associated input field.
     */
    onClose?: (dateText: string, inst: any) => void;

    /**
     * Called when the datepicker is selected. The function receives the selected date as text and the datepicker instance as parameters. this refers to the associated input field.
     */
    onSelect?: (dateText: string, inst: any) => void;

    /**
     * The text to display for the previous month link. With the standard ThemeRoller styling, this value is replaced by an icon.
     */
    prevText?: string;

    /**
     * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
     */
    selectOtherMonths?: boolean;

    /**
     * The cutoff year for determining the century for a date (used in conjunction with dateFormat 'y'). Any dates entered with a year value less than or equal to the cutoff year are considered to be in the current century, while those greater than it are deemed to be in the previous century.
     * Multiple types supported:
     * Number: A value between 0 and 99 indicating the cutoff year.
     * String: A relative number of years from the current year, e.g., "+3" or "-5".
     */
    shortYearCutoff?: any;

    /**
     * The name of the animation used to show and hide the datepicker. Use "show" (the default), "slideDown", "fadeIn", any of the jQuery UI effects. Set to an empty string to disable animation.
     */
    showAnim?: string;

    /**
     * Whether to display a button pane underneath the calendar. The button pane contains two buttons, a Today button that links to the current day, and a Done button that closes the datepicker. The buttons' text can be customized using the currentText and closeText options respectively.
     */
    showButtonPanel?: boolean;

    /**
     * When displaying multiple months via the numberOfMonths option, the showCurrentAtPos option defines which position to display the current month in.
     */
    showCurrentAtPos?: number;

    /**
     * Whether to show the month after the year in the header.
     */
    showMonthAfterYear?: boolean;

    /**
     * When the datepicker should appear. The datepicker can appear when the field receives focus ("focus"), when a button is clicked ("button"), or when either event occurs ("both").
     */
    showOn?: string;

    /**
     * If using one of the jQuery UI effects for the showAnim option, you can provide additional settings for that animation via this option.
     */
    showOptions?: any;

    /**
     * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
     */
    showOtherMonths?: boolean;

    /**
     * When true, a column is added to show the week of the year. The calculateWeek option determines how the week of the year is calculated. You may also want to change the firstDay option.
     */
    showWeek?: boolean;

    /**
     * Set how many months to move when clicking the previous/next links.
     */
    stepMonths?: number;

    /**
     * The text to display for the week of the year column heading. Use the showWeek option to display this column.
     */
    weekHeader?: string;

    /**
     * The range of years displayed in the year drop-down: either relative to today's year ("-nn:+nn"), relative to the currently selected year ("c-nn:c+nn"), absolute ("nnnn:nnnn"), or combinations of these formats ("nnnn:-nn"). Note that this option only affects what appears in the drop-down, to restrict which dates may be selected use the minDate and/or maxDate options.
     */
    yearRange?: string;

    /**
     * Additional text to display after the year in the month headers.
     */
    yearSuffix?: string;

    /**
     * Set to true to automatically hide the datepicker.
     */
    autohide?: boolean;

    /**
     * Set to date to automatically enddate the datepicker.
     */
    endDate?: Date;
  }

  declare interface JQueryUI$DatepickerFormatDateOptions {
    dayNamesShort?: string[];
    dayNames?: string[];
    monthNamesShort?: string[];
    monthNames?: string[];
  }

  declare type JQueryUI$Datepicker = {
    regional: {
      [languageCod3: string]: any
    },
    setDefaults(defaults: JQueryUI$DatepickerOptions): void,
    formatDate(
      format: string,
      date: Date,
      settings?: JQueryUI$DatepickerFormatDateOptions
    ): string,
    parseDate(
      format: string,
      date: string,
      settings?: JQueryUI$DatepickerFormatDateOptions
    ): Date,
    iso8601Week(date: Date): number,
    noWeekends(date: Date): any[]
  } & JQueryUI$Widget &
    JQueryUI$DatepickerOptions;

  declare type JQueryUI$DialogOptions = {
    autoOpen?: boolean,
    buttons?:
      | {
          [buttonText: string]: (event?: Event) => void
        }
      | JQueryUI$DialogButtonOptions[],
    closeOnEscape?: boolean,
    classes?: JQueryUI$DialogClasses,
    closeText?: string,
    appendTo?: string,
    dialogClass?: string,
    disabled?: boolean,
    draggable?: boolean,
    height?: number | string,
    hide?: boolean | number | string | JQueryUI$DialogShowHideOptions,
    maxHeight?: number,
    maxWidth?: number,
    minHeight?: number,
    minWidth?: number,
    modal?: boolean,
    position?: any,
    resizable?: boolean,
    show?: boolean | number | string | JQueryUI$DialogShowHideOptions,
    stack?: boolean,
    title?: string,
    width?: any,
    zIndex?: number,
    open?: JQueryUI$DialogEvent,
    close?: JQueryUI$DialogEvent
  } & JQueryUI$DialogEvents;

  declare interface JQueryUI$DialogClasses {
    "ui-dialog"?: string;
    "ui-dialog-content"?: string;
    "ui-dialog-dragging"?: string;
    "ui-dialog-resizing"?: string;
    "ui-dialog-buttons"?: string;
    "ui-dialog-titlebar"?: string;
    "ui-dialog-title"?: string;
    "ui-dialog-titlebar-close"?: string;
    "ui-dialog-buttonpane"?: string;
    "ui-dialog-buttonset"?: string;
    "ui-widget-overlay"?: string;
  }

  declare interface JQueryUI$DialogButtonOptions {
    icons?: any;
    showText?: string | boolean;
    text?: string;
    click?: (eventObject: JQueryEventObject) => any;
    [attr: string]: any;
  }

  declare interface JQueryUI$DialogShowHideOptions {
    effect: string;
    delay?: number;
    duration?: number;
    easing?: string;
  }

  declare interface JQueryUI$DialogUIParams {}

  declare interface JQueryUI$DialogEvent {
    (event: Event, ui: JQueryUI$DialogUIParams): void;
  }

  declare interface JQueryUI$DialogEvents {
    beforeClose?: JQueryUI$DialogEvent;
    close?: JQueryUI$DialogEvent;
    create?: JQueryUI$DialogEvent;
    drag?: JQueryUI$DialogEvent;
    dragStart?: JQueryUI$DialogEvent;
    dragStop?: JQueryUI$DialogEvent;
    focus?: JQueryUI$DialogEvent;
    open?: JQueryUI$DialogEvent;
    resize?: JQueryUI$DialogEvent;
    resizeStart?: JQueryUI$DialogEvent;
    resizeStop?: JQueryUI$DialogEvent;
  }

  declare type JQueryUI$Dialog = {} & JQueryUI$Widget & JQueryUI$DialogOptions;

  declare interface JQueryUI$DraggableEventUIParams {
    helper: JQuery;
    position: {
      top: number,
      left: number
    };
    offset: {
      top: number,
      left: number
    };
  }

  declare interface JQueryUI$DraggableEvent {
    (event: Event, ui: JQueryUI$DraggableEventUIParams): void;
  }

  declare type JQueryUI$DraggableOptions = {
    disabled?: boolean,
    addClasses?: boolean,
    appendTo?: any,
    axis?: string,
    cancel?: string,
    connectToSortable?: Element | Element[] | JQuery | string,
    containment?: any,
    cursor?: string,
    cursorAt?: any,
    delay?: number,
    distance?: number,
    grid?: number[],
    handle?: any,
    helper?: any,
    iframeFix?: any,
    opacity?: number,
    refreshPositions?: boolean,
    revert?: any,
    revertDuration?: number,
    scope?: string,
    scroll?: boolean,
    scrollSensitivity?: number,
    scrollSpeed?: number,
    snap?: any,
    snapMode?: string,
    snapTolerance?: number,
    stack?: string,
    zIndex?: number
  } & JQueryUI$DraggableEvents;

  declare interface JQueryUI$DraggableEvents {
    create?: JQueryUI$DraggableEvent;
    start?: JQueryUI$DraggableEvent;
    drag?: JQueryUI$DraggableEvent;
    stop?: JQueryUI$DraggableEvent;
  }

  declare type JQueryUI$Draggable = {} & JQueryUI$Widget &
    JQueryUI$DraggableOptions &
    JQueryUI$DraggableEvent;

  declare interface JQueryUI$DroppableEventUIParam {
    draggable: JQuery;
    helper: JQuery;
    position: {
      top: number,
      left: number
    };
    offset: {
      top: number,
      left: number
    };
  }

  declare interface JQueryUI$DroppableEvent {
    (event: Event, ui: JQueryUI$DroppableEventUIParam): void;
  }

  declare type JQueryUI$DroppableOptions = {
    accept?: any,
    activeClass?: string,
    addClasses?: boolean,
    disabled?: boolean,
    greedy?: boolean,
    hoverClass?: string,
    scope?: string,
    tolerance?: string
  } & JQueryUI$DroppableEvents;

  declare interface JQueryUI$DroppableEvents {
    create?: JQueryUI$DroppableEvent;
    activate?: JQueryUI$DroppableEvent;
    deactivate?: JQueryUI$DroppableEvent;
    over?: JQueryUI$DroppableEvent;
    out?: JQueryUI$DroppableEvent;
    drop?: JQueryUI$DroppableEvent;
  }

  declare type JQueryUI$Droppable = {} & JQueryUI$Widget &
    JQueryUI$DroppableOptions;

  declare type JQueryUI$MenuOptions = {
    disabled?: boolean,
    icons?: any,
    menus?: string,
    position?: any,
    role?: string
  } & JQueryUI$MenuEvents;

  declare interface JQueryUI$MenuUIParams {
    item?: JQuery;
  }

  declare interface JQueryUI$MenuEvent {
    (event: Event, ui: JQueryUI$MenuUIParams): void;
  }

  declare interface JQueryUI$MenuEvents {
    blur?: JQueryUI$MenuEvent;
    create?: JQueryUI$MenuEvent;
    focus?: JQueryUI$MenuEvent;
    select?: JQueryUI$MenuEvent;
  }

  declare type JQueryUI$Menu = {} & JQueryUI$Widget & JQueryUI$MenuOptions;

  declare type JQueryUI$ProgressbarOptions = {
    disabled?: boolean,
    value?: number | boolean,
    max?: number
  } & JQueryUI$ProgressbarEvents;

  declare interface JQueryUI$ProgressbarUIParams {}

  declare interface JQueryUI$ProgressbarEvent {
    (event: Event, ui: JQueryUI$ProgressbarUIParams): void;
  }

  declare interface JQueryUI$ProgressbarEvents {
    change?: JQueryUI$ProgressbarEvent;
    complete?: JQueryUI$ProgressbarEvent;
    create?: JQueryUI$ProgressbarEvent;
  }

  declare type JQueryUI$Progressbar = {} & JQueryUI$Widget &
    JQueryUI$ProgressbarOptions;

  declare type JQueryUI$ResizableOptions = {
    alsoResize?: any,
    animate?: boolean,
    animateDuration?: any,
    animateEasing?: string,
    aspectRatio?: any,
    autoHide?: boolean,
    cancel?: string,
    containment?: any,
    delay?: number,
    disabled?: boolean,
    distance?: number,
    ghost?: boolean,
    grid?: any,
    handles?: any,
    helper?: string,
    maxHeight?: number,
    maxWidth?: number,
    minHeight?: number,
    minWidth?: number
  } & JQueryUI$ResizableEvents;

  declare interface JQueryUI$ResizableUIParams {
    element: JQuery;
    helper: JQuery;
    originalElement: JQuery;
    originalPosition: any;
    originalSize: any;
    position: any;
    size: any;
  }

  declare interface JQueryUI$ResizableEvent {
    (event: Event, ui: JQueryUI$ResizableUIParams): void;
  }

  declare interface JQueryUI$ResizableEvents {
    resize?: JQueryUI$ResizableEvent;
    start?: JQueryUI$ResizableEvent;
    stop?: JQueryUI$ResizableEvent;
    create?: JQueryUI$ResizableEvent;
  }

  declare type JQueryUI$Resizable = {} & JQueryUI$Widget &
    JQueryUI$ResizableOptions;

  declare type JQueryUI$SelectableOptions = {
    autoRefresh?: boolean,
    cancel?: string,
    delay?: number,
    disabled?: boolean,
    distance?: number,
    filter?: string,
    tolerance?: string
  } & JQueryUI$SelectableEvents;

  declare interface JQueryUI$SelectableEvents {
    selected?: (
      event: Event,
      ui: {
        selected?: Element
      }
    ) => void;
    selecting?: (
      event: Event,
      ui: {
        selecting?: Element
      }
    ) => void;
    start?: (event: Event, ui: any) => void;
    stop?: (event: Event, ui: any) => void;
    unselected?: (
      event: Event,
      ui: {
        unselected: Element
      }
    ) => void;
    unselecting?: (
      event: Event,
      ui: {
        unselecting: Element
      }
    ) => void;
  }

  declare type JQueryUI$Selectable = {} & JQueryUI$Widget &
    JQueryUI$SelectableOptions;

  declare type JQueryUI$SelectMenuOptions = {
    appendTo?: string,
    disabled?: boolean,
    icons?: any,
    position?: JQueryUI$JQueryPositionOptions,
    width?: number
  } & JQueryUI$SelectMenuEvents;

  declare interface JQueryUI$SelectMenuUIParams {
    item?: JQuery;
  }

  declare interface JQueryUI$SelectMenuEvent {
    (event: Event, ui: JQueryUI$SelectMenuUIParams): void;
  }

  declare interface JQueryUI$SelectMenuEvents {
    change?: JQueryUI$SelectMenuEvent;
    close?: JQueryUI$SelectMenuEvent;
    create?: JQueryUI$SelectMenuEvent;
    focus?: JQueryUI$SelectMenuEvent;
    open?: JQueryUI$SelectMenuEvent;
    select?: JQueryUI$SelectMenuEvent;
  }

  declare type JQueryUI$SelectMenu = {} & JQueryUI$Widget &
    JQueryUI$SelectMenuOptions;

  declare type JQueryUI$SliderOptions = {
    animate?: any,
    disabled?: boolean,
    max?: number,
    min?: number,
    orientation?: string,
    range?: any,
    step?: number,
    value?: number,
    values?: number[],
    highlight?: boolean,
    classes?: JQueryUI$SliderClasses
  } & JQueryUI$SliderEvents;

  declare interface JQueryUI$SliderClasses {
    "ui-slider"?: string;
    "ui-slider-horizontal"?: string;
    "ui-slider-vertical"?: string;
    "ui-slider-handle"?: string;
    "ui-slider-range"?: string;
    "ui-slider-range-min"?: string;
    "ui-slider-range-max"?: string;
  }

  declare interface JQueryUI$SliderUIParams {
    handle?: JQuery;
    value?: number;
    values?: number[];
  }

  declare interface JQueryUI$SliderEvent {
    (event: Event, ui: JQueryUI$SliderUIParams): void;
  }

  declare interface JQueryUI$SliderEvents {
    change?: JQueryUI$SliderEvent;
    create?: JQueryUI$SliderEvent;
    slide?: JQueryUI$SliderEvent;
    start?: JQueryUI$SliderEvent;
    stop?: JQueryUI$SliderEvent;
  }

  declare type JQueryUI$Slider = {} & JQueryUI$Widget & JQueryUI$SliderOptions;

  declare type JQueryUI$SortableOptions = {
    appendTo?: any,
    attribute?: string,
    axis?: string,
    cancel?: any,
    connectWith?: any,
    containment?: any,
    cursor?: string,
    cursorAt?: any,
    delay?: number,
    disabled?: boolean,
    distance?: number,
    dropOnEmpty?: boolean,
    forceHelperSize?: boolean,
    forcePlaceholderSize?: boolean,
    grid?: number[],
    helper?: string | ((event: Event, element: JQueryUI$Sortable) => Element),
    handle?: any,
    items?: any,
    opacity?: number,
    placeholder?: string,
    revert?: any,
    scroll?: boolean,
    scrollSensitivity?: number,
    scrollSpeed?: number,
    tolerance?: string,
    zIndex?: number
  } & JQueryUI$SortableEvents;

  declare interface JQueryUI$SortableUIParams {
    helper: JQuery;
    item: JQuery;
    offset: any;
    position: any;
    originalPosition: any;
    sender: JQuery;
    placeholder: JQuery;
  }

  declare interface JQueryUI$SortableEvent {
    (event: JQueryEventObject, ui: JQueryUI$SortableUIParams): void;
  }

  declare interface JQueryUI$SortableEvents {
    activate?: JQueryUI$SortableEvent;
    beforeStop?: JQueryUI$SortableEvent;
    change?: JQueryUI$SortableEvent;
    deactivate?: JQueryUI$SortableEvent;
    out?: JQueryUI$SortableEvent;
    over?: JQueryUI$SortableEvent;
    receive?: JQueryUI$SortableEvent;
    remove?: JQueryUI$SortableEvent;
    sort?: JQueryUI$SortableEvent;
    start?: JQueryUI$SortableEvent;
    stop?: JQueryUI$SortableEvent;
    update?: JQueryUI$SortableEvent;
  }

  declare type JQueryUI$Sortable = {} & JQueryUI$Widget &
    JQueryUI$SortableOptions &
    JQueryUI$SortableEvents;

  declare type JQueryUI$SpinnerOptions = {
    culture?: string,
    disabled?: boolean,
    icons?: any,
    incremental?: any,
    max?: any,
    min?: any,
    numberFormat?: string,
    page?: number,
    step?: any
  } & JQueryUI$SpinnerEvents;

  declare interface JQueryUI$SpinnerUIParam {
    value: number;
  }

  declare interface JQueryUI$SpinnerEvent<T> {
    (event: Event, ui: T): void;
  }

  declare interface JQueryUI$SpinnerEvents {
    change?: JQueryUI$SpinnerEvent<{}>;
    create?: JQueryUI$SpinnerEvent<{}>;
    spin?: JQueryUI$SpinnerEvent<JQueryUI$SpinnerUIParam>;
    start?: JQueryUI$SpinnerEvent<{}>;
    stop?: JQueryUI$SpinnerEvent<{}>;
  }

  declare type JQueryUI$Spinner = {} & JQueryUI$Widget &
    JQueryUI$SpinnerOptions;

  declare type JQueryUI$TabsOptions = {
    active?: any,
    classes?: JQueryUI$TabClasses,
    collapsible?: boolean,
    disabled?: any,
    event?: string,
    heightStyle?: string,
    hide?: any,
    show?: any
  } & JQueryUI$TabsEvents;

  declare interface JQueryUI$TabClasses {
    "ui-tabs"?: string;
    "ui-tabs-collapsible"?: string;
    "ui-tabs-nav"?: string;
    "ui-tabs-tab"?: string;
    "ui-tabs-active"?: string;
    "ui-tabs-loading"?: string;
    "ui-tabs-anchor"?: string;
    "ui-tabs-panel"?: string;
  }

  declare interface JQueryUI$TabsActivationUIParams {
    newTab: JQuery;
    oldTab: JQuery;
    newPanel: JQuery;
    oldPanel: JQuery;
  }

  declare interface JQueryUI$TabsBeforeLoadUIParams {
    tab: JQuery;
    panel: JQuery;
    jqXHR: JQueryXHR;
    ajaxSettings: any;
  }

  declare interface JQueryUI$TabsCreateOrLoadUIParams {
    tab: JQuery;
    panel: JQuery;
  }

  declare interface JQueryUI$TabsEvent<UI> {
    (event: Event, ui: JQueryUI$UI): void;
  }

  declare interface JQueryUI$TabsEvents {
    activate?: JQueryUI$TabsEvent<JQueryUI$TabsActivationUIParams>;
    beforeActivate?: JQueryUI$TabsEvent<JQueryUI$TabsActivationUIParams>;
    beforeLoad?: JQueryUI$TabsEvent<JQueryUI$TabsBeforeLoadUIParams>;
    load?: JQueryUI$TabsEvent<JQueryUI$TabsCreateOrLoadUIParams>;
    create?: JQueryUI$TabsEvent<JQueryUI$TabsCreateOrLoadUIParams>;
  }

  declare type JQueryUI$Tabs = {} & JQueryUI$Widget & JQueryUI$TabsOptions;

  declare type JQueryUI$TooltipOptions = {
    content?: any,
    disabled?: boolean,
    hide?: any,
    items?: string,
    position?: any,
    show?: any,
    tooltipClass?: string,
    track?: boolean
  } & JQueryUI$TooltipEvents;

  declare interface JQueryUI$TooltipUIParams {}

  declare interface JQueryUI$TooltipEvent {
    (event: Event, ui: JQueryUI$TooltipUIParams): void;
  }

  declare interface JQueryUI$TooltipEvents {
    close?: JQueryUI$TooltipEvent;
    open?: JQueryUI$TooltipEvent;
  }

  declare type JQueryUI$Tooltip = {} & JQueryUI$Widget &
    JQueryUI$TooltipOptions;

  declare interface JQueryUI$EffectOptions {
    effect: string;
    easing?: string;
    duration?: number;
    complete: Function;
  }

  declare interface JQueryUI$BlindEffect {
    direction?: string;
  }

  declare interface JQueryUI$BounceEffect {
    distance?: number;
    times?: number;
  }

  declare interface JQueryUI$ClipEffect {
    direction?: number;
  }

  declare interface JQueryUI$DropEffect {
    direction?: number;
  }

  declare interface JQueryUI$ExplodeEffect {
    pieces?: number;
  }

  declare interface JQueryUI$FadeEffect {}

  declare interface JQueryUI$FoldEffect {
    size?: any;
    horizFirst?: boolean;
  }

  declare interface JQueryUI$HighlightEffect {
    color?: string;
  }

  declare interface JQueryUI$PuffEffect {
    percent?: number;
  }

  declare interface JQueryUI$PulsateEffect {
    times?: number;
  }

  declare interface JQueryUI$ScaleEffect {
    direction?: string;
    origin?: string[];
    percent?: number;
    scale?: string;
  }

  declare interface JQueryUI$ShakeEffect {
    direction?: string;
    distance?: number;
    times?: number;
  }

  declare interface JQueryUI$SizeEffect {
    to?: any;
    origin?: string[];
    scale?: string;
  }

  declare interface JQueryUI$SlideEffect {
    direction?: string;
    distance?: number;
  }

  declare interface JQueryUI$TransferEffect {
    className?: string;
    to?: string;
  }

  declare interface JQueryUI$JQueryPositionOptions {
    my?: string;
    at?: string;
    of?: any;
    collision?: string;
    using?: Function;
    within?: any;
  }

  declare interface JQueryUI$MouseOptions {
    cancel?: string;
    delay?: number;
    distance?: number;
  }

  declare interface JQueryUI$KeyCode {
    BACKSPACE: number;
    COMMA: number;
    DELETE: number;
    DOWN: number;
    END: number;
    ENTER: number;
    ESCAPE: number;
    HOME: number;
    LEFT: number;
    NUMPAD_ADD: number;
    NUMPAD_DECIMAL: number;
    NUMPAD_DIVIDE: number;
    NUMPAD_ENTER: number;
    NUMPAD_MULTIPLY: number;
    NUMPAD_SUBTRACT: number;
    PAGE_DOWN: number;
    PAGE_UP: number;
    PERIOD: number;
    RIGHT: number;
    SPACE: number;
    TAB: number;
    UP: number;
  }

  declare interface JQueryUI$UI {
    mouse(method: string): JQuery;
    mouse(options: JQueryUI$MouseOptions): JQuery;
    mouse(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    mouse(optionLiteral: string, optionValue: any): any;
    accordion: JQueryUI$Accordion;
    autocomplete: JQueryUI$Autocomplete;
    button: JQueryUI$Button;
    buttonset: JQueryUI$Button;
    datepicker: JQueryUI$Datepicker;
    dialog: JQueryUI$Dialog;
    keyCode: JQueryUI$KeyCode;
    menu: JQueryUI$Menu;
    progressbar: JQueryUI$Progressbar;
    selectmenu: JQueryUI$SelectMenu;
    slider: JQueryUI$Slider;
    spinner: JQueryUI$Spinner;
    tabs: JQueryUI$Tabs;
    tooltip: JQueryUI$Tooltip;
    version: string;
  }

  declare interface JQueryUI$WidgetOptions {
    disabled?: boolean;
    hide?: any;
    show?: any;
  }

  declare interface JQueryUI$WidgetCommonProperties {
    element: JQuery;
    defaultElement: string;
    document: Document;
    namespace: string;
    uuid: string;
    widgetEventPrefix: string;
    widgetFullName: string;
    window: Window;
  }

  declare interface JQueryUI$Widget {
    (methodName: string): JQuery;
    (options: JQueryUI$WidgetOptions): JQuery;
    (options: JQueryUI$AccordionOptions): JQuery;
    (optionLiteral: string, optionName: string): any;
    (optionLiteral: string, options: JQueryUI$WidgetOptions): any;
    (optionLiteral: string, optionName: string, optionValue: any): JQuery;
    <T>(
      name: string,
      prototype: T & ThisType<T & JQueryUI$WidgetCommonProperties>
    ): JQuery;
    <T>(
      name: string,
      base: Function,
      prototype: T & ThisType<T & JQueryUI$WidgetCommonProperties>
    ): JQuery;
  }
  declare interface JQuery {
    accordion(): JQuery;
    accordion(methodName: "destroy"): void;
    accordion(methodName: "disable"): void;
    accordion(methodName: "enable"): void;
    accordion(methodName: "refresh"): void;
    accordion(methodName: "widget"): JQuery;
    accordion(methodName: string): JQuery;
    accordion(options: JQueryUI$JQueryUI$AccordionOptions): JQuery;
    accordion(optionLiteral: string, optionName: string): any;
    accordion(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$AccordionOptions
    ): any;
    accordion(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;
    autocomplete(): JQuery;
    autocomplete(methodName: "close"): void;
    autocomplete(methodName: "destroy"): void;
    autocomplete(methodName: "disable"): void;
    autocomplete(methodName: "enable"): void;
    autocomplete(methodName: "search", value?: string): void;
    autocomplete(methodName: "widget"): JQuery;
    autocomplete(methodName: string): JQuery;
    autocomplete(options: JQueryUI$JQueryUI$AutocompleteOptions): JQuery;
    autocomplete(optionLiteral: string, optionName: string): any;
    autocomplete(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$AutocompleteOptions
    ): any;
    autocomplete(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;
    button(): JQuery;
    button(methodName: "destroy"): void;
    button(methodName: "disable"): void;
    button(methodName: "enable"): void;
    button(methodName: "refresh"): void;
    button(methodName: "widget"): JQuery;
    button(methodName: string): JQuery;
    button(options: JQueryUI$JQueryUI$ButtonOptions): JQuery;
    button(optionLiteral: string, optionName: string): any;
    button(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$ButtonOptions
    ): any;
    button(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    buttonset(): JQuery;
    buttonset(methodName: "destroy"): void;
    buttonset(methodName: "disable"): void;
    buttonset(methodName: "enable"): void;
    buttonset(methodName: "refresh"): void;
    buttonset(methodName: "widget"): JQuery;
    buttonset(methodName: string): JQuery;
    buttonset(options: JQueryUI$JQueryUI$ButtonOptions): JQuery;
    buttonset(optionLiteral: string, optionName: string): any;
    buttonset(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$ButtonOptions
    ): any;
    buttonset(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;

    /**
     * Initialize a datepicker
     */
    datepicker(): JQuery;

    /**
     * Removes the datepicker functionality completely. This will return the element back to its pre-init state.
     * @param methodName 'destroy'
     */
    datepicker(methodName: "destroy"): JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * @param methodName 'dialog'
     * @param date The initial date.
     * @param onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param settings The new settings for the date picker.
     * @param pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     */
    datepicker(
      methodName: "dialog",
      date: Date,
      onSelect?: () => void,
      settings?: JQueryUI$JQueryUI$DatepickerOptions,
      pos?: number[]
    ): JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * @param methodName 'dialog'
     * @param date The initial date.
     * @param onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param settings The new settings for the date picker.
     * @param pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     */
    datepicker(
      methodName: "dialog",
      date: Date,
      onSelect?: () => void,
      settings?: JQueryUI$JQueryUI$DatepickerOptions,
      pos?: MouseEvent
    ): JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * @param methodName 'dialog'
     * @param date The initial date.
     * @param onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param settings The new settings for the date picker.
     * @param pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     */
    datepicker(
      methodName: "dialog",
      date: string,
      onSelect?: () => void,
      settings?: JQueryUI$JQueryUI$DatepickerOptions,
      pos?: number[]
    ): JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * @param methodName 'dialog'
     * @param date The initial date.
     * @param onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param settings The new settings for the date picker.
     * @param pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     */
    datepicker(
      methodName: "dialog",
      date: string,
      onSelect?: () => void,
      settings?: JQueryUI$JQueryUI$DatepickerOptions,
      pos?: MouseEvent
    ): JQuery;

    /**
     * Returns the current date for the datepicker or null if no date has been selected.
     * @param methodName 'getDate'
     */
    datepicker(methodName: "getDate"): Date;

    /**
     * Close a previously opened date picker.
     * @param methodName 'hide'
     */
    datepicker(methodName: "hide"): JQuery;

    /**
     * Determine whether a date picker has been disabled.
     * @param methodName 'isDisabled'
     */
    datepicker(methodName: "isDisabled"): boolean;

    /**
     * Redraw the date picker, after having made some external modifications.
     * @param methodName 'refresh'
     */
    datepicker(methodName: "refresh"): JQuery;

    /**
     * Sets the date for the datepicker. The new date may be a Date object or a string in the current date format (e.g., "01/26/2009"), a number of days from today (e.g., +7) or a string of values and periods ("y" for years, "m" for months, "w" for weeks, "d" for days, e.g., "+1m +7d"), or null to clear the selected date.
     * @param methodName 'setDate'
     * @param date The new date.
     */
    datepicker(methodName: "setDate", date: Date): JQuery;

    /**
     * Sets the date for the datepicker. The new date may be a Date object or a string in the current date format (e.g., "01/26/2009"), a number of days from today (e.g., +7) or a string of values and periods ("y" for years, "m" for months, "w" for weeks, "d" for days, e.g., "+1m +7d"), or null to clear the selected date.
     * @param methodName 'setDate'
     * @param date The new date.
     */
    datepicker(methodName: "setDate", date: string): JQuery;

    /**
     * Open the date picker. If the datepicker is attached to an input, the input must be visible for the datepicker to be shown.
     * @param methodName 'show'
     */
    datepicker(methodName: "show"): JQuery;

    /**
     * Returns a jQuery object containing the datepicker.
     * @param methodName 'widget'
     */
    datepicker(methodName: "widget"): JQuery;

    /**
     * Get the altField option, after initialization
     * @param methodName 'option'
     * @param optionName 'altField'
     */
    datepicker(methodName: "option", optionName: "altField"): any;

    /**
     * Set the altField option, after initialization
     * @param methodName 'option'
     * @param optionName 'altField'
     * @param altFieldValue An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field.
     */
    datepicker(
      methodName: "option",
      optionName: "altField",
      altFieldValue: string
    ): JQuery;

    /**
     * Set the altField option, after initialization
     * @param methodName 'option'
     * @param optionName 'altField'
     * @param altFieldValue An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field.
     */
    datepicker(
      methodName: "option",
      optionName: "altField",
      altFieldValue: JQuery
    ): JQuery;

    /**
     * Set the altField option, after initialization
     * @param methodName 'option'
     * @param optionName 'altField'
     * @param altFieldValue An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field.
     */
    datepicker(
      methodName: "option",
      optionName: "altField",
      altFieldValue: Element
    ): JQuery;

    /**
     * Get the altFormat option, after initialization
     * @param methodName 'option'
     * @param optionName 'altFormat'
     */
    datepicker(methodName: "option", optionName: "altFormat"): string;

    /**
     * Set the altFormat option, after initialization
     * @param methodName 'option'
     * @param optionName 'altFormat'
     * @param altFormatValue The dateFormat to be used for the altField option. This allows one date format to be shown to the user for selection purposes, while a different format is actually sent behind the scenes. For a full list of the possible formats see the formatDate function
     */
    datepicker(
      methodName: "option",
      optionName: "altFormat",
      altFormatValue: string
    ): JQuery;

    /**
     * Get the appendText option, after initialization
     * @param methodName 'option'
     * @param optionName 'appendText'
     */
    datepicker(methodName: "option", optionName: "appendText"): string;

    /**
     * Set the appendText option, after initialization
     * @param methodName 'option'
     * @param optionName 'appendText'
     * @param appendTextValue The text to display after each date field, e.g., to show the required format.
     */
    datepicker(
      methodName: "option",
      optionName: "appendText",
      appendTextValue: string
    ): JQuery;

    /**
     * Get the autoSize option, after initialization
     * @param methodName 'option'
     * @param optionName 'autoSize'
     */
    datepicker(methodName: "option", optionName: "autoSize"): boolean;

    /**
     * Set the autoSize option, after initialization
     * @param methodName 'option'
     * @param optionName 'autoSize'
     * @param autoSizeValue Set to true to automatically resize the input field to accommodate dates in the current dateFormat.
     */
    datepicker(
      methodName: "option",
      optionName: "autoSize",
      autoSizeValue: boolean
    ): JQuery;

    /**
     * Get the beforeShow option, after initialization
     * @param methodName 'option'
     * @param optionName 'beforeShow'
     */
    datepicker(
      methodName: "option",
      optionName: "beforeShow"
    ): (input: Element, inst: any) => JQueryUI$JQueryUI$DatepickerOptions;

    /**
     * Set the beforeShow option, after initialization
     * @param methodName 'option'
     * @param optionName 'beforeShow'
     * @param beforeShowValue A function that takes an input field and current datepicker instance and returns an options object to update the datepicker with. It is called just before the datepicker is displayed.
     */
    datepicker(
      methodName: "option",
      optionName: "beforeShow",
      beforeShowValue: (
        input: Element,
        inst: any
      ) => JQueryUI$JQueryUI$DatepickerOptions
    ): JQuery;

    /**
     * Get the beforeShow option, after initialization
     * @param methodName 'option'
     * @param optionName 'beforeShowDay'
     */
    datepicker(
      methodName: "option",
      optionName: "beforeShowDay"
    ): (date: Date) => any[];

    /**
 * Set the beforeShow option, after initialization
 * @param methodName 'option'
 * @param optionName 'beforeShowDay'
 * @param beforeShowDayValue A function that takes a date as a parameter and must return an array with:
[0]: true/false indicating whether or not this date is selectable
[1]: a CSS class name to add to the date's cell or "" for the default presentation
[2]: an optional popup tooltip for this date
The function is called for each day in the datepicker before it is displayed.
 */
    datepicker(
      methodName: "option",
      optionName: "beforeShowDay",
      beforeShowDayValue: (date: Date) => any[]
    ): JQuery;

    /**
     * Get the buttonImage option, after initialization
     * @param methodName 'option'
     * @param optionName 'buttonImage'
     */
    datepicker(methodName: "option", optionName: "buttonImage"): string;

    /**
     * Set the buttonImage option, after initialization
     * @param methodName 'option'
     * @param optionName 'buttonImage'
     * @param buttonImageValue A URL of an image to use to display the datepicker when the showOn option is set to "button" or "both". If set, the buttonText option becomes the alt value and is not directly displayed.
     */
    datepicker(
      methodName: "option",
      optionName: "buttonImage",
      buttonImageValue: string
    ): JQuery;

    /**
     * Get the buttonImageOnly option, after initialization
     * @param methodName 'option'
     * @param optionName 'buttonImageOnly'
     */
    datepicker(methodName: "option", optionName: "buttonImageOnly"): boolean;

    /**
     * Set the buttonImageOnly option, after initialization
     * @param methodName 'option'
     * @param optionName 'buttonImageOnly'
     * @param buttonImageOnlyValue Whether the button image should be rendered by itself instead of inside a button element. This option is only relevant if the buttonImage option has also been set.
     */
    datepicker(
      methodName: "option",
      optionName: "buttonImageOnly",
      buttonImageOnlyValue: boolean
    ): JQuery;

    /**
     * Get the buttonText option, after initialization
     * @param methodName 'option'
     * @param optionName 'buttonText'
     */
    datepicker(methodName: "option", optionName: "buttonText"): string;

    /**
     * Get the autohide option, after initialization
     * @param methodName 'option'
     * @param optionName 'autohide'
     */
    datepicker(methodName: "option", optionName: "autohide"): boolean;

    /**
     * Get the endDate after initialization
     * @param methodName 'option'
     * @param optionName 'endDate'
     */
    datepicker(methodName: "option", optionName: "endDate"): Date;

    /**
     * Set the buttonText option, after initialization
     * @param methodName 'option'
     * @param optionName 'buttonText'
     * @param buttonTextValue The text to display on the trigger button. Use in conjunction with the showOn option set to "button" or "both".
     */
    datepicker(
      methodName: "option",
      optionName: "buttonText",
      buttonTextValue: string
    ): JQuery;

    /**
     * Get the calculateWeek option, after initialization
     * @param methodName 'option'
     * @param optionName 'calculateWeek'
     */
    datepicker(
      methodName: "option",
      optionName: "calculateWeek"
    ): (date: Date) => string;

    /**
     * Set the calculateWeek option, after initialization
     * @param methodName 'option'
     * @param optionName 'calculateWeek'
     * @param calculateWeekValue A function to calculate the week of the year for a given date. The default implementation uses the ISO 8601 definition: weeks start on a Monday; the first week of the year contains the first Thursday of the year.
     */
    datepicker(
      methodName: "option",
      optionName: "calculateWeek",
      calculateWeekValue: (date: Date) => string
    ): JQuery;

    /**
     * Get the changeMonth option, after initialization
     * @param methodName 'option'
     * @param optionName 'changeMonth'
     */
    datepicker(methodName: "option", optionName: "changeMonth"): boolean;

    /**
     * Set the changeMonth option, after initialization
     * @param methodName 'option'
     * @param optionName 'changeMonth'
     * @param changeMonthValue Whether the month should be rendered as a dropdown instead of text.
     */
    datepicker(
      methodName: "option",
      optionName: "changeMonth",
      changeMonthValue: boolean
    ): JQuery;

    /**
     * Get the changeYear option, after initialization
     * @param methodName 'option'
     * @param optionName 'changeYear'
     */
    datepicker(methodName: "option", optionName: "changeYear"): boolean;

    /**
     * Set the changeYear option, after initialization
     * @param methodName 'option'
     * @param optionName 'changeYear'
     * @param changeYearValue Whether the year should be rendered as a dropdown instead of text. Use the yearRange option to control which years are made available for selection.
     */
    datepicker(
      methodName: "option",
      optionName: "changeYear",
      changeYearValue: boolean
    ): JQuery;

    /**
     * Get the closeText option, after initialization
     * @param methodName 'option'
     * @param optionName 'closeText'
     */
    datepicker(methodName: "option", optionName: "closeText"): string;

    /**
     * Set the closeText option, after initialization
     * @param methodName 'option'
     * @param optionName 'closeText'
     * @param closeTextValue The text to display for the close link. Use the showButtonPanel option to display this button.
     */
    datepicker(
      methodName: "option",
      optionName: "closeText",
      closeTextValue: string
    ): JQuery;

    /**
     * Get the constrainInput option, after initialization
     * @param methodName 'option'
     * @param optionName 'constrainInput'
     */
    datepicker(methodName: "option", optionName: "constrainInput"): boolean;

    /**
     * Set the constrainInput option, after initialization
     * @param methodName 'option'
     * @param optionName 'constrainInput'
     * @param constrainInputValue When true, entry in the input field is constrained to those characters allowed by the current dateFormat option.
     */
    datepicker(
      methodName: "option",
      optionName: "constrainInput",
      constrainInputValue: boolean
    ): JQuery;

    /**
     * Get the currentText option, after initialization
     * @param methodName 'option'
     * @param optionName 'currentText'
     */
    datepicker(methodName: "option", optionName: "currentText"): string;

    /**
     * Set the currentText option, after initialization
     * @param methodName 'option'
     * @param optionName 'currentText'
     * @param currentTextValue The text to display for the current day link. Use the showButtonPanel option to display this button.
     */
    datepicker(
      methodName: "option",
      optionName: "currentText",
      currentTextValue: string
    ): JQuery;

    /**
     * Get the dateFormat option, after initialization
     * @param methodName 'option'
     * @param optionName 'dateFormat'
     */
    datepicker(methodName: "option", optionName: "dateFormat"): string;

    /**
     * Set the dateFormat option, after initialization
     * @param methodName 'option'
     * @param optionName 'dateFormat'
     * @param dateFormatValue The format for parsed and displayed dates. For a full list of the possible formats see the formatDate function.
     */
    datepicker(
      methodName: "option",
      optionName: "dateFormat",
      dateFormatValue: string
    ): JQuery;

    /**
     * Get the dayNames option, after initialization
     * @param methodName 'option'
     * @param optionName 'dayNames'
     */
    datepicker(methodName: "option", optionName: "dayNames"): string[];

    /**
     * Set the dayNames option, after initialization
     * @param methodName 'option'
     * @param optionName 'dayNames'
     * @param dayNamesValue The list of long day names, starting from Sunday, for use as requested via the dateFormat option.
     */
    datepicker(
      methodName: "option",
      optionName: "dayNames",
      dayNamesValue: string[]
    ): JQuery;

    /**
     * Get the dayNamesMin option, after initialization
     * @param methodName 'option'
     * @param optionName 'dayNamesMin'
     */
    datepicker(methodName: "option", optionName: "dayNamesMin"): string[];

    /**
     * Set the dayNamesMin option, after initialization
     * @param methodName 'option'
     * @param optionName 'dayNamesMin'
     * @param dayNamesMinValue The list of minimised day names, starting from Sunday, for use as column headers within the datepicker.
     */
    datepicker(
      methodName: "option",
      optionName: "dayNamesMin",
      dayNamesMinValue: string[]
    ): JQuery;

    /**
     * Get the dayNamesShort option, after initialization
     * @param methodName 'option'
     * @param optionName 'dayNamesShort'
     */
    datepicker(methodName: "option", optionName: "dayNamesShort"): string[];

    /**
     * Set the dayNamesShort option, after initialization
     * @param methodName 'option'
     * @param optionName 'dayNamesShort'
     * @param dayNamesShortValue The list of abbreviated day names, starting from Sunday, for use as requested via the dateFormat option.
     */
    datepicker(
      methodName: "option",
      optionName: "dayNamesShort",
      dayNamesShortValue: string[]
    ): JQuery;

    /**
     * Get the defaultDate option, after initialization
     * @param methodName 'option'
     * @param optionName 'defaultDate'
     */
    datepicker(methodName: "option", optionName: "defaultDate"): any;

    /**
     * Set the defaultDate option, after initialization
     * @param methodName 'option'
     * @param optionName 'defaultDate'
     * @param defaultDateValue A date object containing the default date.
     */
    datepicker(
      methodName: "option",
      optionName: "defaultDate",
      defaultDateValue: Date
    ): JQuery;

    /**
     * Set the defaultDate option, after initialization
     * @param methodName 'option'
     * @param optionName 'defaultDate'
     * @param defaultDateValue A number of days from today. For example 2 represents two days from today and -1 represents yesterday.
     */
    datepicker(
      methodName: "option",
      optionName: "defaultDate",
      defaultDateValue: number
    ): JQuery;

    /**
     * Set the defaultDate option, after initialization
     * @param methodName 'option'
     * @param optionName 'defaultDate'
     * @param defaultDateValue A string in the format defined by the dateFormat option, or a relative date. Relative dates must contain value and period pairs; valid periods are "y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
     */
    datepicker(
      methodName: "option",
      optionName: "defaultDate",
      defaultDateValue: string
    ): JQuery;

    /**
     * Get the duration option, after initialization
     * @param methodName 'option'
     * @param optionName 'duration'
     */
    datepicker(methodName: "option", optionName: "duration"): string;

    /**
     * Set the duration option, after initialization
     * @param methodName 'option'
     * @param optionName 'duration'
     * @param durationValue Control the speed at which the datepicker appears, it may be a time in milliseconds or a string representing one of the three predefined speeds ("slow", "normal", "fast").
     */
    datepicker(
      methodName: "option",
      optionName: "duration",
      durationValue: string
    ): JQuery;

    /**
     * Get the firstDay option, after initialization
     * @param methodName 'option'
     * @param optionName 'firstDay'
     */
    datepicker(methodName: "option", optionName: "firstDay"): number;

    /**
     * Set the firstDay option, after initialization
     * @param methodName 'option'
     * @param optionName 'firstDay'
     * @param firstDayValue Set the first day of the week: Sunday is 0, Monday is 1, etc.
     */
    datepicker(
      methodName: "option",
      optionName: "firstDay",
      firstDayValue: number
    ): JQuery;

    /**
     * Get the gotoCurrent option, after initialization
     * @param methodName 'option'
     * @param optionName 'gotoCurrent'
     */
    datepicker(methodName: "option", optionName: "gotoCurrent"): boolean;

    /**
     * Set the gotoCurrent option, after initialization
     * @param methodName 'option'
     * @param optionName 'gotoCurrent'
     * @param gotoCurrentValue When true, the current day link moves to the currently selected date instead of today.
     */
    datepicker(
      methodName: "option",
      optionName: "gotoCurrent",
      gotoCurrentValue: boolean
    ): JQuery;

    /**
     * Gets the value currently associated with the specified optionName.
     * @param methodName 'option'
     * @param optionName The name of the option to get.
     */
    datepicker(methodName: "option", optionName: string): any;
    datepicker(
      methodName: "option",
      optionName: string,
      ...otherParams: any[]
    ): any;
    datepicker(methodName: string, ...otherParams: any[]): any;

    /**
     * Initialize a datepicker with the given options
     */
    datepicker(options: JQueryUI$JQueryUI$DatepickerOptions): JQuery;
    dialog(): JQuery;
    dialog(methodName: "close"): JQuery;
    dialog(methodName: "destroy"): JQuery;
    dialog(methodName: "isOpen"): boolean;
    dialog(methodName: "moveToTop"): JQuery;
    dialog(methodName: "open"): JQuery;
    dialog(methodName: "widget"): JQuery;
    dialog(methodName: string): JQuery;
    dialog(options: JQueryUI$JQueryUI$DialogOptions): JQuery;
    dialog(optionLiteral: string, optionName: string): any;
    dialog(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$DialogOptions
    ): any;
    dialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    draggable(): JQuery;
    draggable(methodName: "destroy"): void;
    draggable(methodName: "disable"): void;
    draggable(methodName: "enable"): void;
    draggable(methodName: "widget"): JQuery;
    draggable(methodName: string): JQuery;
    draggable(options: JQueryUI$JQueryUI$DraggableOptions): JQuery;
    draggable(optionLiteral: string, optionName: string): any;
    draggable(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$DraggableOptions
    ): any;
    draggable(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;
    droppable(): JQuery;
    droppable(methodName: "destroy"): void;
    droppable(methodName: "disable"): void;
    droppable(methodName: "enable"): void;
    droppable(methodName: "widget"): JQuery;
    droppable(methodName: string): JQuery;
    droppable(options: JQueryUI$JQueryUI$DroppableOptions): JQuery;
    droppable(optionLiteral: string, optionName: string): any;
    droppable(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$DraggableOptions
    ): any;
    droppable(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;
    menu: {
      (): JQuery,
      (methodName: "blur"): void,
      (methodName: "collapse", event?: JQueryEventObject): void,
      (
        methodName: "collapseAll",
        event?: JQueryEventObject,
        all?: boolean
      ): void,
      (methodName: "destroy"): void,
      (methodName: "disable"): void,
      (methodName: "enable"): void,
      (methodName: string, event: JQueryEventObject, item: JQuery): void,
      (methodName: "focus", event: JQueryEventObject, item: JQuery): void,
      (methodName: "isFirstItem"): boolean,
      (methodName: "isLastItem"): boolean,
      (methodName: "next", event?: JQueryEventObject): void,
      (methodName: "nextPage", event?: JQueryEventObject): void,
      (methodName: "previous", event?: JQueryEventObject): void,
      (methodName: "previousPage", event?: JQueryEventObject): void,
      (methodName: "refresh"): void,
      (methodName: "select", event?: JQueryEventObject): void,
      (methodName: "widget"): JQuery,
      (methodName: string): JQuery,
      (options: JQueryUI$JQueryUI$MenuOptions): JQuery,
      (optionLiteral: string, optionName: string): any,
      (optionLiteral: string, options: JQueryUI$JQueryUI$MenuOptions): any,
      (optionLiteral: string, optionName: string, optionValue: any): JQuery,
      active: boolean
    };
    progressbar(): JQuery;
    progressbar(methodName: "destroy"): void;
    progressbar(methodName: "disable"): void;
    progressbar(methodName: "enable"): void;
    progressbar(methodName: "refresh"): void;
    progressbar(methodName: "value"): any;
    progressbar(methodName: "value", value: number): void;
    progressbar(methodName: "value", value: boolean): void;
    progressbar(methodName: "widget"): JQuery;
    progressbar(methodName: string): JQuery;
    progressbar(options: JQueryUI$JQueryUI$ProgressbarOptions): JQuery;
    progressbar(optionLiteral: string, optionName: string): any;
    progressbar(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$ProgressbarOptions
    ): any;
    progressbar(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;
    resizable(): JQuery;
    resizable(methodName: "destroy"): void;
    resizable(methodName: "disable"): void;
    resizable(methodName: "enable"): void;
    resizable(methodName: "widget"): JQuery;
    resizable(methodName: string): JQuery;
    resizable(options: JQueryUI$JQueryUI$ResizableOptions): JQuery;
    resizable(optionLiteral: string, optionName: string): any;
    resizable(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$ResizableOptions
    ): any;
    resizable(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;
    selectable(): JQuery;
    selectable(methodName: "destroy"): void;
    selectable(methodName: "disable"): void;
    selectable(methodName: "enable"): void;
    selectable(methodName: "widget"): JQuery;
    selectable(methodName: string): JQuery;
    selectable(options: JQueryUI$JQueryUI$SelectableOptions): JQuery;
    selectable(optionLiteral: string, optionName: string): any;
    selectable(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$SelectableOptions
    ): any;
    selectable(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;
    selectmenu(): JQuery;
    selectmenu(methodName: "close"): JQuery;
    selectmenu(methodName: "destroy"): JQuery;
    selectmenu(methodName: "disable"): JQuery;
    selectmenu(methodName: "enable"): JQuery;
    selectmenu(methodName: "instance"): any;
    selectmenu(methodName: "menuWidget"): JQuery;
    selectmenu(methodName: "open"): JQuery;
    selectmenu(methodName: "refresh"): JQuery;
    selectmenu(methodName: "widget"): JQuery;
    selectmenu(methodName: string): JQuery;
    selectmenu(options: JQueryUI$JQueryUI$SelectMenuOptions): JQuery;
    selectmenu(optionLiteral: string, optionName: string): any;
    selectmenu(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$SelectMenuOptions
    ): any;
    selectmenu(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;
    slider(): JQuery;
    slider(methodName: "destroy"): void;
    slider(methodName: "disable"): void;
    slider(methodName: "enable"): void;
    slider(methodName: "refresh"): void;
    slider(methodName: "value"): number;
    slider(methodName: "value", value: number): void;
    slider(methodName: "values"): Array<number>;
    slider(methodName: "values", index: number): number;
    slider(methodName: string, index: number, value: number): void;
    slider(methodName: "values", index: number, value: number): void;
    slider(methodName: string, values: Array<number>): void;
    slider(methodName: "values", values: Array<number>): void;
    slider(methodName: "widget"): JQuery;
    slider(methodName: string): JQuery;
    slider(options: JQueryUI$JQueryUI$SliderOptions): JQuery;
    slider(optionLiteral: string, optionName: string): any;
    slider(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$SliderOptions
    ): any;
    slider(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    sortable(): JQuery;
    sortable(methodName: "destroy"): void;
    sortable(methodName: "disable"): void;
    sortable(methodName: "enable"): void;
    sortable(methodName: "widget"): JQuery;
    sortable(
      methodName: "toArray",
      options?: {
        attribute?: string
      }
    ): string[];
    sortable(methodName: string): JQuery;
    sortable(options: JQueryUI$JQueryUI$SortableOptions): JQuery;
    sortable(optionLiteral: string, optionName: string): any;
    sortable(
      methodName: "serialize",
      options?: {
        key?: string,
        attribute?: string,
        expression?: RegExp
      }
    ): string;
    sortable(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$SortableOptions
    ): any;
    sortable(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;
    spinner(): JQuery;
    spinner(methodName: "destroy"): void;
    spinner(methodName: "disable"): void;
    spinner(methodName: "enable"): void;
    spinner(methodName: "pageDown", pages?: number): void;
    spinner(methodName: "pageUp", pages?: number): void;
    spinner(methodName: "stepDown", steps?: number): void;
    spinner(methodName: "stepUp", steps?: number): void;
    spinner(methodName: "value"): number;
    spinner(methodName: "value", value: number): void;
    spinner(methodName: "widget"): JQuery;
    spinner(methodName: string): JQuery;
    spinner(options: JQueryUI$JQueryUI$SpinnerOptions): JQuery;
    spinner(optionLiteral: string, optionName: string): any;
    spinner(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$SpinnerOptions
    ): any;
    spinner(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;
    tabs(): JQuery;
    tabs(methodName: "destroy"): void;
    tabs(methodName: "disable"): void;
    tabs(methodName: "disable", index: number): void;
    tabs(methodName: "enable"): void;
    tabs(methodName: "enable", index: number): void;
    tabs(methodName: "load", index: number): void;
    tabs(methodName: "refresh"): void;
    tabs(methodName: "widget"): JQuery;
    tabs(methodName: "select", index: number): JQuery;
    tabs(methodName: string): JQuery;
    tabs(options: JQueryUI$JQueryUI$TabsOptions): JQuery;
    tabs(optionLiteral: string, optionName: string): any;
    tabs(optionLiteral: string, options: JQueryUI$JQueryUI$TabsOptions): any;
    tabs(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    tooltip(): JQuery;
    tooltip(methodName: "destroy"): void;
    tooltip(methodName: "disable"): void;
    tooltip(methodName: "enable"): void;
    tooltip(methodName: "open"): void;
    tooltip(methodName: "close"): void;
    tooltip(methodName: "widget"): JQuery;
    tooltip(methodName: string): JQuery;
    tooltip(options: JQueryUI$JQueryUI$TooltipOptions): JQuery;
    tooltip(optionLiteral: string, optionName: string): any;
    tooltip(
      optionLiteral: string,
      options: JQueryUI$JQueryUI$TooltipOptions
    ): any;
    tooltip(
      optionLiteral: string,
      optionName: string,
      optionValue: any
    ): JQuery;
    addClass(classNames: string, speed?: number, callback?: Function): JQuery;
    addClass(classNames: string, speed?: string, callback?: Function): JQuery;
    addClass(
      classNames: string,
      speed?: number,
      easing?: string,
      callback?: Function
    ): JQuery;
    addClass(
      classNames: string,
      speed?: string,
      easing?: string,
      callback?: Function
    ): JQuery;
    removeClass(
      classNames: string,
      speed?: number,
      callback?: Function
    ): JQuery;
    removeClass(
      classNames: string,
      speed?: string,
      callback?: Function
    ): JQuery;
    removeClass(
      classNames: string,
      speed?: number,
      easing?: string,
      callback?: Function
    ): JQuery;
    removeClass(
      classNames: string,
      speed?: string,
      easing?: string,
      callback?: Function
    ): JQuery;
    switchClass(
      removeClassName: string,
      addClassName: string,
      duration?: number,
      easing?: string,
      complete?: Function
    ): JQuery;
    switchClass(
      removeClassName: string,
      addClassName: string,
      duration?: string,
      easing?: string,
      complete?: Function
    ): JQuery;
    toggleClass(
      className: string,
      duration?: number,
      easing?: string,
      complete?: Function
    ): JQuery;
    toggleClass(
      className: string,
      duration?: string,
      easing?: string,
      complete?: Function
    ): JQuery;
    toggleClass(
      className: string,
      aswitch?: boolean,
      duration?: number,
      easing?: string,
      complete?: Function
    ): JQuery;
    toggleClass(
      className: string,
      aswitch?: boolean,
      duration?: string,
      easing?: string,
      complete?: Function
    ): JQuery;
    effect(options: any): JQuery;
    effect(
      effect: string,
      options?: any,
      duration?: number,
      complete?: Function
    ): JQuery;
    effect(
      effect: string,
      options?: any,
      duration?: string,
      complete?: Function
    ): JQuery;
    hide(options: any): JQuery;
    hide(
      effect: string,
      options?: any,
      duration?: number,
      complete?: Function
    ): JQuery;
    hide(
      effect: string,
      options?: any,
      duration?: string,
      complete?: Function
    ): JQuery;
    show(options: any): JQuery;
    show(
      effect: string,
      options?: any,
      duration?: number,
      complete?: Function
    ): JQuery;
    show(
      effect: string,
      options?: any,
      duration?: string,
      complete?: Function
    ): JQuery;
    toggle(options: any): JQuery;
    toggle(
      effect: string,
      options?: any,
      duration?: number,
      complete?: Function
    ): JQuery;
    toggle(
      effect: string,
      options?: any,
      duration?: string,
      complete?: Function
    ): JQuery;
    position(options: JQueryUI$JQueryUI$JQueryPositionOptions): JQuery;
    enableSelection(): JQuery;
    disableSelection(): JQuery;
    focus(delay: number, callback?: Function): JQuery;
    uniqueId(): JQuery;
    removeUniqueId(): JQuery;
    scrollParent(): JQuery;
    zIndex(): number;
    zIndex(zIndex: number): JQuery;
    widget: JQueryUI$JQueryUI$Widget;
    jQuery: JQueryStatic;
  }
  declare interface JQueryStatic {
    ui: JQueryUI$JQueryUI$UI;
    datepicker: JQueryUI$JQueryUI$Datepicker;
    widget: JQueryUI$JQueryUI$Widget;
    JQueryUI$Widget: JQueryUI$JQueryUI$Widget;
  }
  declare interface JQueryEasingFunctions {
    easeInQuad: JQueryEasingFunction;
    easeOutQuad: JQueryEasingFunction;
    easeInOutQuad: JQueryEasingFunction;
    easeInCubic: JQueryEasingFunction;
    easeOutCubic: JQueryEasingFunction;
    easeInOutCubic: JQueryEasingFunction;
    easeInQuart: JQueryEasingFunction;
    easeOutQuart: JQueryEasingFunction;
    easeInOutQuart: JQueryEasingFunction;
    easeInQuint: JQueryEasingFunction;
    easeOutQuint: JQueryEasingFunction;
    easeInOutQuint: JQueryEasingFunction;
    easeInExpo: JQueryEasingFunction;
    easeOutExpo: JQueryEasingFunction;
    easeInOutExpo: JQueryEasingFunction;
    easeInSine: JQueryEasingFunction;
    easeOutSine: JQueryEasingFunction;
    easeInOutSine: JQueryEasingFunction;
    easeInCirc: JQueryEasingFunction;
    easeOutCirc: JQueryEasingFunction;
    easeInOutCirc: JQueryEasingFunction;
    easeInElastic: JQueryEasingFunction;
    easeOutElastic: JQueryEasingFunction;
    easeInOutElastic: JQueryEasingFunction;
    easeInBack: JQueryEasingFunction;
    easeOutBack: JQueryEasingFunction;
    easeInOutBack: JQueryEasingFunction;
    easeInBounce: JQueryEasingFunction;
    easeOutBounce: JQueryEasingFunction;
    easeInOutBounce: JQueryEasingFunction;
  }
}
