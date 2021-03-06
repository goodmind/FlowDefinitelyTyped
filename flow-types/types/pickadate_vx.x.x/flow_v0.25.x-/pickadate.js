declare module "pickadate" {
  declare interface Pickadate$KlassOptions {
    input?: string;
    active?: string;
    picker?: string;
    opened?: string;
    focused?: string;
    holder?: string;
    frame?: string;
    wrap?: string;
    box?: string;
    disabled?: string;
    selected?: string;
    highlighted?: string;
    now?: string;
    buttonClear?: string;
  }

  declare type Pickadate$DateKlassOptions = {
    header?: string,
    navPrev?: string,
    navNext?: string,
    navDisabled?: string,
    month?: string,
    year?: string,
    selectMonth?: string,
    selectYear?: string,
    table?: string,
    weekdays?: string,
    day?: string,
    infocus?: string,
    outfocus?: string,
    footer?: string,
    buttonClose?: string,
    buttonToday?: string
  } & Pickadate$KlassOptions;

  declare type Pickadate$TimeKlassOptions = {
    picker?: string,
    list?: string,
    listItem?: string,
    viewset?: string
  } & Pickadate$KlassOptions;

  declare interface Pickadate$Options {
    /**
     * Set the clear button text.
     * Defaults to 'Clear'
     */
    clear?: string;

    /**
     * The human-friendly display format.
     * Escape any "rule" characters with an exclamation mark (!).
     * Defaults to 'd mmmm, yyyy'
     */
    format?: string;

    /**
     * An alternate format to submit to the server.
     * Defaults to undefined.
     */
    formatSubmit?: string;

    /**
     * An optional name prefix for the new hidden input element used
     * when a custom human-friendly display format is specified.
     * Defaults to undefined.
     */
    hiddenPrefix?: string;

    /**
     * An optional name suffix for the new hidden input element used
     * when a custom human-friendly display format is specified.
     * Defaults to '_submit'
     */
    hiddenSuffix?: string;

    /**
     * A majority of the time, the value that needs to be sent to the server
     * is just the hidden value and not the visible one. To make this happen,
     * use the hiddenName option. This essentially nullifies the hiddenPrefix
     * and hiddenSuffix, strips the name attribute from the source input, and
     * then sets it as the name of the hidden input. Defaults to undefined.
     */
    hiddenName?: boolean;

    /**
     * By default, typing into the input is disabled by giving it a readOnly
     * attribute. Setting the editable option to true allows the input field
     * to be edited directly.
     */
    editable?: boolean;

    /**
     * Specify where to insert the picker's root element by passing any
     * valid CSS selector to this option. Defaults to undefined.
     */
    container?: string | JQuery;

    /**
     * The hidden input container.
     * Defaults to undefined.
     */
    containerHidden?: string;

    /**
     * Whether or not to close the picker when a date is selected.
     * Defaults to `true`.
     */
    closeOnSelect?: boolean;

    /**
     * Whether or not to close the picker when the "clear" button is pressed.
     * Defaults to `true`.
     */
    closeOnClear?: boolean;
    onStart?: (event: any) => void;
    onRender?: (event: any) => void;
    onOpen?: (event: any) => void;
    onClose?: (event: any) => void;
    onSet?: (event: any) => void;
    onStop?: (event: any) => void;
  }

  declare type Pickadate$MinOrMaxDateOption =
    | Date
    | [number, number, number]
    | number
    | boolean;

  declare type Pickadate$MinOrMaxTimeOption =
    | Date
    | [number, number]
    | number
    | boolean;

  declare export type Pickadate$DateOptions = {
    monthsFull?: string[],
    monthsShort?: string[],
    weekdaysFull?: string[],
    weekdaysShort?: string[],
    showMonthsShort?: boolean,
    showWeekdaysFull?: boolean,
    today?: string,
    close?: string,
    labelMonthNext?: string,
    labelMonthPrev?: string,
    labelMonthSelect?: string,
    labelYearSelect?: string,

    /**
     * True enables the dropdown selector and false replaces it with text.
     * You can also specify the number of years to show in the dropdown
     * using an even integer - half before and half after the year in focus.
     * If true the value will default to 10.
     */
    selectYears?: boolean | number,

    /**
     * True enables the dropdown selector and false replaces it with text
     */
    selectMonths?: boolean,

    /**
     * The first day of the week can be set to either Sunday or Monday.
     * True or 1 sets it as Monday and false or 0 as Sunday.
     */
    firstDay?: boolean | number,

    /**
     * Set the minimum selectable date on the picker. Accepts a Date object,
     * array formatted as [YEAR, MONTH, DATE], a positive or negative integer
     * for a date relative to today, or a boolean (`true` sets it to today,
     * `false` removes any limit).
     */
    min?: Pickadate$MinOrMaxDateOption,

    /**
     * Set the maximum selectable date on the picker.
     * Accepts the same values as the `min` property.
     */
    max?: Pickadate$MinOrMaxDateOption,

    /**
     * Disable a specific or arbitrary set of dates selectable on the
     * picker. Accepts an array of Date objects, arrays formatted as
     * [YEAR, MONTH, DATE], integers representing days of the week
     * (from 1 to 7), or objects with a range of dates. Switch to a
     * whitelist by setting `true` as the first item in the collection.
     * Enable dates that fall within a range of disabled dates by
     * adding an `inverted` parameter to the item within the collection.
     */
    disable?: any[],
    klass?: Pickadate$DateKlassOptions
  } & Pickadate$Options;

  declare export type Pickadate$TimeOptions = {
    /**
     * The formatLabel option is unique. It can contain HTML and it can
     * also be a function if you want to create the label during run-time.
     */
    formatLabel?: string | ((time: Pickadate$TimeItem) => string),

    /**
     * Choose the interval in minutes between each time in the list.
     * Default is 30.
     */
    interval?: number,

    /**
     * Set the minimum selectable time on the picker. Accepts a Date object,
     * array formatted as [HOUR, MINUTE], a positive or negative integer
     * for a time relative to now, or a boolean (`true` sets it to now, and
     * `false` removes any limit).
     */
    min?: Pickadate$MinOrMaxTimeOption,

    /**
     * Set the maximum selectable time on the picker.
     * Accepts the same values as the `min` property.
     */
    max?: Pickadate$MinOrMaxTimeOption,

    /**
     * Disable a specific or arbitrary set of times selectable on the picker.
     * Accepts an array of Date objects, arrays formatted as [HOUR, MINUTE],
     * integers representing hours (from 0 to 23), or objects with a range of
     * times. Switch to a whitelist by setting `true` as the first item in the
     * collection. Enable times that fall within a range of disabled times by
     * adding an `inverted` parameter to the item within the collection.
     */
    disable?: any[],
    klass?: Pickadate$TimeKlassOptions
  } & Pickadate$Options;

  declare interface Pickadate$Item {
    /**
     * The "pick" value used for comparisons.
     */
    pick: number;
  }

  declare export type Pickadate$DateItem = {
    /**
     * The full year.
     */
    year: number,

    /**
     * The month with zero-as-index.
     */
    month: number,

    /**
     * The date of the month.
     */
    date: number,

    /**
     * The day of the week with zero-as-index.
     */
    day: number,

    /**
     * The underlying JavaScript Date object.
     */
    obj: Date
  } & Pickadate$Item;

  declare export type Pickadate$TimeItem = {
    /**
     * Hour of the day from 0 to 23.
     */
    hour: number,

    /**
     * The minutes of the hour from 0 to 59 (based on the interval).
     */
    mins: number
  } & Pickadate$Item;

  declare export interface Pickadate$CallbackObject {
    open?: () => void;
    close?: () => void;
    render?: () => void;
    start?: () => void;
    stop?: () => void;
    set?: (thingSet: any) => void;
  }

  declare export interface Pickadate$SetObject {
    clear?: any;
    select?: any;
    highlight?: any;
    view?: any;
    min?: any;
    max?: any;
    disable?: any;
    enable?: any;
  }

  declare export type Pickadate$TimeSetObject = {
    /**
     * Choose the minutes interval between each time in the list.
     * Defaults to 30.
     */
    interval?: number
  } & Pickadate$SetObject;

  declare export interface Pickadate$SetOptions {
    /**
     * By default, any callbacks bound with the on method will be fired
     * when its relevant thing is set. To silently set a thing, pass an
     * options object with the muted parameter set to true.
     */
    muted?: boolean;
    format?: string;
  }

  declare interface Pickadate$Picker<
    TPickerObject,
    TItemObject: Pickadate$Item,
    TOptions: Pickadate$SetObject
  > {
    /**
     * The picker's relative input element wrapped as a jQuery object.
     */
    $node: JQuery;

    /**
     * The picker's relative root holder element wrapped as a jQuery object.
     */
    $root: JQuery;

    /**
     * This is the picker’s relative hidden element, which is undefined if
     * there’s no formatSubmit option. There should be no reason to use this
     * – it's mostly for internal use. If you have a valid reason for using
     * this, please mention it in the issues.
     */
    _hidden: HTMLInputElement;
    open(withoutFocus?: boolean): TPickerObject;
    close(withFocus?: boolean): TPickerObject;

    /**
     * Rebuild the picker.
     */
    start(): TPickerObject;

    /**
     * Destroy the picker.
     */
    stop(): TPickerObject;

    /**
     * Refresh the picker box after adding something to the holder.
     * By default, only the "face" of the picker (i.e. the box element)
     * has it’s contents re-rendered. To render the entire picker from
     * the root up, pass true as the first argument.
     */
    render(entirePicker?: boolean): TPickerObject;

    /**
     * Clear the value in the picker's input element.
     */
    clear(): TPickerObject;

    /**
     * Short for picker.get('value')
     */
    get(): string;

    /**
     * Get the properties, objects, and states that make up the current
     * state of the picker.
     */
    get(thing: string): any;

    /**
     * Returns the string value of the picker's input element.
     */
    get(thing: "value"): string;

    /**
     * Returns the item object that is visually selected.
     */
    get(thing: "select"): TItemObject;

    /**
     * Returns the item object that is visually highlighted.
     */
    get(thing: "highlight"): TItemObject;

    /**
     * Returns the item object that sets the current view.
     */
    get(thing: "view"): TItemObject;

    /**
     * Returns the item object that limits the picker's lower range.
     */
    get(thing: "min"): TItemObject;

    /**
     * Returns the item object that limits the picker's upper range.
     */
    get(thing: "max"): TItemObject;

    /**
     * Returns a boolean value of whether the picker is open or not.
     */
    get(thing: "open"): boolean;

    /**
     * Returns a boolean value of whether the picker has started or not.
     */
    get(thing: "start"): boolean;

    /**
     * Returns a unique 9-digit integer that is the ID of the picker.
     */
    get(thing: "id"): number;

    /**
     * Returns an array of items that determine which item objects to
     * disable on the picker.
     */
    get(thing: "disable"): any[];

    /**
     * Returns a formatted string for the item object specified by `thing`
     */
    get(thing: string, format: string): string;

    /**
     * Set the properties, objects, and states to change the state of the picker.
     */
    set(
      thing: string,
      value?: any,
      options?: Pickadate$SetOptions
    ): TPickerObject;
    set(things: TOptions, options?: Pickadate$SetOptions): TPickerObject;

    /**
     * Bind callbacks to get fired off when the relative picker method is called.
     */
    on(methodName: string, callback: (data?: any) => void): TPickerObject;

    /**
     * Bind multiple callbacks at once to get fired off when the relative
     * picker method is called.
     */
    on(callbackObject: Pickadate$CallbackObject): TPickerObject;

    /**
     * Unbind callbacks that are bound using the on method.
     */
    off(...methodName: string[]): TPickerObject;

    /**
     * Trigger callbacks that have been queued up using the the on method.
     */
    trigger(event: string, data?: any): TPickerObject;
  }

  declare export type Pickadate$DatePicker = {} & Pickadate$Picker<
    Pickadate$DatePicker,
    Pickadate$DateItem,
    Pickadate$SetObject
  >;

  declare export type Pickadate$TimePicker = {} & Pickadate$Picker<
    Pickadate$TimePicker,
    Pickadate$TimeItem,
    Pickadate$TimeSetObject
  >;

  declare interface Pickadate$Pickadate {
    defaults: Pickadate$DateOptions;

    /**
     * Access the API object on an initialized date picker element.
     */
    (keyword: "picker"): Pickadate$Pickadate.Pickadate$DatePicker;
    (objectName: "$node"): JQuery;
    (objectName: "$root"): JQuery;
    (objectName: "_hidden"): HTMLInputElement;

    /**
     * Invoke API methods after date picker initialization.
     */
    (methodName: string, ...arguments: any[]): any;

    /**
     * Initialize a date picker.
     */
    (options?: Pickadate$Pickadate.Pickadate$DateOptions): JQuery;
  }

  declare interface Pickadate$Pickatime {
    defaults: Pickadate$TimeOptions;

    /**
     * Access the API object on an initialized time picker element.
     */
    (keyword: "picker"): Pickadate$Pickadate.Pickadate$TimePicker;
    (objectName: "$node"): JQuery;
    (objectName: "$root"): JQuery;
    (objectName: "_hidden"): HTMLInputElement;

    /**
     * Invoke API methods after time picker initialization.
     */
    (methodName: string, ...arguments: any[]): any;

    /**
     * Initialize a time picker.
     */
    (options?: Pickadate$Pickadate.Pickadate$TimeOptions): JQuery;
  }
  declare interface JQuery {
    pickadate: Pickadate$Pickadate.Pickadate$Pickadate;
    pickatime: Pickadate$Pickadate.Pickadate$Pickatime;
  }
}
