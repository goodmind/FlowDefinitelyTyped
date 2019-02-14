/**
 * Defines an Element object.
 */
declare interface Element {
  winControl: any;
}
/**
 * Utility class for easy access to operations on application folders
 */
declare interface IOHelper {
  /**
   * Determines whether the specified file exists in the folder.
   * @param filename The name of the file.
   * @returns A promise that completes with a value of either true (if the file exists) or false.
   */
  exists(filename: string): WinJS$Promise<boolean>;

  /**
   * Reads the specified file. If the file doesn't exist, the specified default value is returned.
   * @param fileName The file to read from.
   * @param def The default value to be returned if the file failed to open.
   * @returns A promise that completes with a value that is either the contents of the file, or the specified default value.
   */
  readText(fileName: string, def?: string): WinJS$Promise<string>;

  /**
   * Deletes a file from the folder.
   * @param fileName The file to be deleted.
   * @returns A promise that is fulfilled when the file has been deleted.
   */
  remove(fileName: string): WinJS$Promise<void>;

  /**
   * Writes the specified text to the specified file.
   * @param fileName The name of the file.
   * @param text The content to be written to the file.
   * @returns A promise that is completed when the file has been written.
   */
  writeText(fileName: string, text: string): WinJS$Promise<number>;

  /**
   * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
   */
  storage: any;
}
declare var npm$namespace$WinJS: {
  log: typeof WinJS$log,
  xhr: typeof WinJS$xhr,
  validation: typeof WinJS$validation,

  ErrorFromName: typeof WinJS$ErrorFromName,
  Promise: typeof WinJS$Promise,
  Application: typeof npm$namespace$WinJS$Application,
  Binding: typeof npm$namespace$WinJS$Binding,
  Class: typeof npm$namespace$WinJS$Class,
  Namespace: typeof npm$namespace$WinJS$Namespace,
  Navigation: typeof npm$namespace$WinJS$Navigation,
  Resources: typeof npm$namespace$WinJS$Resources,
  UI: typeof npm$namespace$WinJS$UI,
  Utilities: typeof npm$namespace$WinJS$Utilities
};

declare var npm$namespace$WinJS$Application: {
  addEventListener: typeof WinJS$Application$addEventListener,
  checkpoint: typeof WinJS$Application$checkpoint,
  queueEvent: typeof WinJS$Application$queueEvent,
  removeEventListener: typeof WinJS$Application$removeEventListener,
  start: typeof WinJS$Application$start,
  stop: typeof WinJS$Application$stop,
  onactivated: typeof WinJS$Application$onactivated,
  oncheckpoint: typeof WinJS$Application$oncheckpoint,
  onerror: typeof WinJS$Application$onerror,
  onloaded: typeof WinJS$Application$onloaded,
  onready: typeof WinJS$Application$onready,
  onsettings: typeof WinJS$Application$onsettings,
  onunload: typeof WinJS$Application$onunload,
  onbackclick: typeof WinJS$Application$onbackclick,
  local: typeof WinJS$Application$local,
  roaming: typeof WinJS$Application$roaming,
  temp: typeof WinJS$Application$temp,
  sessionState: typeof WinJS$Application$sessionState
};

/**
 * The local storage of the application.
 */
declare var WinJS$Application$local: IOHelper;

/**
 * The roaming storage of the application.
 */
declare var WinJS$Application$roaming: IOHelper;

/**
 * The temp storage of the application.
 */
declare var WinJS$Application$temp: IOHelper;

/**
 * An object used for storing app information that can be used to restore the app's state after it has been suspended and then resumed. Data that can usefully be contained in this object includes the current navigation page or any information the user has added to the input controls on the page. You should not add information about customization (for example colors) or user-defined lists of content.
 */
declare var WinJS$Application$sessionState: any;

/**
 * Adds an event listener for application-level events: activated, checkpoint, error, loaded, ready, settings, and unload.
 * @param type The type (name) of the event. You can use any of the following:"activated", "checkpoint", "error", "loaded", "ready", "settings", and" unload".
 * @param listener The listener to invoke when the event is raised.
 * @param capture true to initiate capture, otherwise false.
 */
declare function WinJS$Application$addEventListener(
  type: string,
  listener: Function,
  capture?: boolean
): void;

/**
 * Queues a checkpoint event.
 */
declare function WinJS$Application$checkpoint(): void;

/**
 * Queues an event to be processed by the WinJS.Application event queue.
 * @param eventRecord The event object is expected to have a type property that is used as the event name when dispatching on the WinJS.Application event queue. The entire object is provided to event listeners in the detail property of the event.
 */
declare function WinJS$Application$queueEvent(eventRecord: any): void;

/**
 * Removes an event listener from the control.
 * @param type The type (name) of the event.
 * @param listener The listener to remove.
 * @param useCapture Specifies whether or not to initiate capture.
 */
declare function WinJS$Application$removeEventListener(
  type: string,
  listener: Function,
  useCapture?: any
): void;

/**
 * Starts dispatching application events (the activated, checkpoint, error, loaded, ready, settings, and unload events).
 */
declare function WinJS$Application$start(): void;

/**
 * Stops application event processing and resets WinJS.Application to its initial state. All WinJS.Application event listeners (for the activated, checkpoint, error, loaded, ready, settings, and unload events) are removed.
 */
declare function WinJS$Application$stop(): void;

declare type WinJS$Application$IPromiseEvent = {
  /**
   * Informs the application object that asynchronous work is being performed, and that this event handler should not be considered complete until the promise completes. This function can be set inside the handlers for all WinJS.Application events: onactivated oncheckpoint onerror onloaded onready onsettings onunload.
   * @param promise The promise that should complete before processing is complete.
   */
  setPromise(promise: WinJS$IPromise<any>): void
} & CustomEvent;

/**
 * Occurs when WinRT activation has occurred. The name of this event is "activated" (and also "mainwindowactivated"). This event occurs after the loaded event and before the ready event.
 * @param eventInfo An object that contains information about the event. For more information about event arguments, see the WinRT event argument classes: WebUICachedFileUpdaterActivatedEventArgs, WebUICameraSettingsActivatedEventArgs, WebUIContactPickerActivatedEventArgs, WebUIDeviceActivatedEventArgs, WebUIFileActivatedEventArgs, WebUIFileOpenPickerActivatedEventArgs, WebUIFileSavePickerActivatedEventArgs, WebUILaunchActivatedEventArgs, WebUIPrintTaskSettingsActivatedEventArgs, WebUIProtocolActivatedEventArgs, WebUISearchActivatedEventArgs, WebUIShareTargetActivatedEventArgs.
 */
declare function WinJS$Application$onactivated(
  eventInfo: WinJS$Application$IPromiseEvent
): void;

/**
 * Occurs when receiving PLM notification or when the checkpoint function is called.
 * @param eventInfo An object that contains information about the event. The detail property of this object includes the following subproperties: type, setPromise.
 */
declare function WinJS$Application$oncheckpoint(
  eventInfo: WinJS$Application$IPromiseEvent
): void;

/**
 * Occurs when an unhandled error has been raised.
 * @param eventInfo An object that contains information about the event.
 */
declare function WinJS$Application$onerror(
  eventInfo: WinJS$Application$IPromiseEvent
): void;

/**
 * Occurs after the DOMContentLoaded event, which fires after the page has been parsed but before all the resources are loaded. This event occurs before the activated event and the ready event.
 * @param eventInfo An object that contains information about the event. The detail property of this object includes the following subproperties: type, setPromise.
 */
declare function WinJS$Application$onloaded(
  eventInfo: WinJS$Application$IPromiseEvent
): void;

/**
 * Occurs when the application is ready. This event occurs after the loaded event and the activated event.
 * @param eventInfo An object that contains information about the event. The detail property of this object includes the following sub-properties: type, setPromise.
 */
declare function WinJS$Application$onready(
  eventInfo: WinJS$Application$IPromiseEvent
): void;

/**
 * Occurs when the settings charm is invoked.
 * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: type, applicationcommands.
 */
declare function WinJS$Application$onsettings(
  eventInfo: WinJS$Application$IPromiseEvent
): void;

/**
 * Occurs when the application is about to be unloaded.
 * @param eventInfo An object that contains information about the event. The detail property of this object includes the following sub-properties: type, setPromise.
 */
declare function WinJS$Application$onunload(
  eventInfo: WinJS$Application$IPromiseEvent
): void;

/**
 * Occurs whenever a user clicks the hardware backbutton.
 * @param eventInfo An object that contains information about the event. The detail property of this object includes the following sub-properties: type
 */
declare function WinJS$Application$onbackclick(
  eventInfo: WinJS$Application$IPromiseEvent
): void;

declare var npm$namespace$WinJS$Binding: {
  addClassOneTime: typeof WinJS$Binding$addClassOneTime,
  as: typeof WinJS$Binding$as,
  bind: typeof WinJS$Binding$bind,
  converter: typeof WinJS$Binding$converter,
  defaultBind: typeof WinJS$Binding$defaultBind,
  define: typeof WinJS$Binding$define,
  expandProperties: typeof WinJS$Binding$expandProperties,
  getValue: typeof WinJS$Binding$getValue,
  initializer: typeof WinJS$Binding$initializer,
  oneTime: typeof WinJS$Binding$oneTime,
  processAll: typeof WinJS$Binding$processAll,
  setAttribute: typeof WinJS$Binding$setAttribute,
  setAttributeOneTime: typeof WinJS$Binding$setAttributeOneTime,
  unwrap: typeof WinJS$Binding$unwrap,
  dynamicObservableMixin: typeof WinJS$Binding$dynamicObservableMixin,
  mixin: typeof WinJS$Binding$mixin,
  observableMixin: typeof WinJS$Binding$observableMixin,

  List: typeof WinJS$Binding$List,
  Template: typeof WinJS$Binding$Template
};

/**
 * Allows you to add bindable properties dynamically.
 */
declare var WinJS$Binding$dynamicObservableMixin: {
  /**
   * Adds a property with change notification to this object, including a ECMAScript5 property definition.
   * @param name The name of the property to add.
   * @param value This object is returned.
   */
  addProperty(name: string, value: any): void,

  /**
   * Links the specified action to the property specified in the name parameter. This function is invoked when the value of the property may have changed. It is not guaranteed that the action will be called only when a value has actually changed, nor is it guaranteed that the action will be called for every value change. The implementation of this function coalesces change notifications, such that multiple updates to a property value may result in only a single call to the specified action.
   * @param name The name of the property to which to bind the action.
   * @param action The function to invoke asynchronously when the property may have changed.
   * @returns This object is returned.
   */
  bind(name: string, action: any): Function,

  /**
   * Gets a property value by name.
   * @param name The name of the property to get.
   * @returns The value of the property as an observable object.
   */
  getProperty(name: string): any,

  /**
   * Notifies listeners that a property value was updated.
   * @param name The name of the property that is being updated.
   * @param newValue The new value for the property.
   * @param oldValue The old value for the property.
   * @returns A promise that is completed when the notifications are complete.
   */
  notify(name: string, newValue: string, oldValue: string): WinJS$Promise<any>,

  /**
   * Removes a property value.
   * @param name The name of the property to remove.
   * @returns This object is returned.
   */
  removeProperty(name: string): any,

  /**
   * Updates a property value and notifies any listeners.
   * @param name The name of the property to update.
   * @param value The new value of the property.
   * @returns This object is returned.
   */
  setProperty(name: string, value: any): any,

  /**
   * Removes one or more listeners from the notification list for a given property.
   * @param name The name of the property to unbind. If this parameter is omitted, all listeners for all events are removed.
   * @param action The function to remove from the listener list for the specified property. If this parameter is omitted, all listeners are removed for the specific property.
   * @returns This object is returned.
   */
  unbind(name: string, action: Function): any,

  /**
   * Updates a property value and notifies any listeners.
   * @param name The name of the property to update.
   * @param value The new value of the property.
   * @returns A promise that completes when the notifications for this property change have been processed. If multiple notifications are coalesced, the promise may be canceled or the value of the promise may be updated. The fulfilled value of the promise is the new value of the property for which the notifications have been completed.
   */
  updateProperty(name: string, value: any): WinJS$Promise<any>
};

/**
 * Do not instantiate. A list returned by the createFiltered method.
 */
declare type WinJS$Binding$FilteredListProjection<T> = {
  /**
   * Returns a key/data pair for the specified index.
   * @param index The index of the value to retrieve.
   * @returns An object that has two properties: key and data.
   */
  getItem(index: number): Binding$IKeyDataPair<T>,

  /**
   * Returns the index of the first occurrence of a key in a list.
   * @param key The key to locate in the list.
   * @returns The index of the first occurrence of a key in a list, or -1 if not found.
   */
  indexOfKey(key: string): number,

  /**
   * Forces the list to send a itemmutated notification to any listeners for the value at the specified index.
   * @param index The index of the value that was mutated.
   */
  notifyMutated(index: number): void,

  /**
   * Replaces the value at the specified index with a new value.
   * @param index The index of the value that was replaced.
   * @param newValue The new value.
   */
  setAt(index: number, newValue: T): void,

  /**
   * The length of the list. Returns an integer value one higher than the highest element defined in an list.
   */
  length: number
} & ListProjection<T>;

/**
 * A list of groups.
 */
declare type WinJS$Binding$GroupsListProjection<T> = {
  /**
   * Gets a key/data pair for the specified index.
   * @param index The index of the value to retrieve.
   * @returns An object that has two properties: key and data.
   */
  getItem(index: number): Binding$IKeyDataPair<T>,

  /**
   * Gets a key/data pair for the specified key.
   * @param key The key of the value to retrieve.
   * @returns An object with two properties: key and data.
   */
  getItemFromKey(key: string): Binding$IKeyDataPair<T>,

  /**
   * Returns the index of the first occurrence of a key in a list.
   * @param key The key to locate in the list.
   * @returns The index of the first occurrence of a key in a list, or -1 if not found.
   */
  indexOfKey(key: string): number,

  /**
   * The length of the list. Returns an integer value one higher than the highest element defined in an list.
   */
  length: number
} & ListBase<T>;

/**
 * Do not instantiate. Sorts the underlying list by group key and within a group respects the position of the item in the underlying list. Returned by createGrouped.
 */
declare type WinJS$Binding$GroupedSortedListProjection<T, G> = {
  /**
   * Gets a List, which is a projection of the groups that were identified in this list.
   */
  groups: WinJS$Binding$GroupsListProjection<G>,

  /**
   * Returns a key/data pair for the specified index.
   * @param index The index of the value to retrieve.
   * @returns An object that has two properties: key and data.
   */
  getItem(index: number): Binding$IGroupKeyDataPair<T>
} & SortedListProjection<T>;

/**
 * Represents a list of objects that can be accessed by index or by a string key. Provides methods to search, sort, filter, and manipulate the data.
 */
declare class WinJS$Binding$List<T> mixins ListBaseWithMutators<T> {
  /**
   * Creates a List object.
   * @constructor
   * @param list The array containing the elements to initalize the list.
   * @param options You can set two Boolean options: binding and proxy. If options.binding is true, the list contains the result of calling as on the element values. If options.proxy is true, the list specified as the first parameter is used as the storage for the List. This option should be used with care, because uncoordinated edits to the data storage may result in errors.
   */
  constructor(list?: T[], options?: any): this;

  /**
   * An item in the list has changed its value.
   * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, newItem, newValue, oldItem, oldValue.
   */
  onitemchanged(eventInfo: CustomEvent): void;

  /**
   * A new item has been inserted into the list.
   * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
   */
  oniteminserted(eventInfo: CustomEvent): void;

  /**
   * An item has been changed locations in the list.
   * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
   */
  onitemmoved(eventInfo: CustomEvent): void;

  /**
   * An item has been mutated. This event occurs as a result of calling the notifyMutated method.
   * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
   */
  onitemmutated(eventInfo: CustomEvent): void;

  /**
   * An item has been removed from the list.
   * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
   */
  onitemremoved(eventInfo: CustomEvent): void;

  /**
   * The list has been refreshed. Any references to items in the list may be incorrect.
   * @param eventInfo An object that contains information about the event. The detail property of this object is null.
   */
  onreload(eventInfo: CustomEvent): void;

  /**
   * Adds an event listener to the control.
   * @param type The type (name) of the event.
   * @param listener The listener to invoke when the event gets raised.
   * @param useCapture If true, initiates capture, otherwise false.
   */
  addEventListener(
    type: string,
    listener: Function,
    useCapture?: boolean
  ): void;

  /**
   * Links the specified action to the property specified in the name parameter. This function is invoked when the value of the property may have changed. It is not guaranteed that the action will be called only when a value has actually changed, nor is it guaranteed that the action will be called for every value change. The implementation of this function coalesces change notifications, such that multiple updates to a property value may result in only a single call to the specified action.
   * @param name The name of the property to which to bind the action.
   * @param action The function to invoke asynchronously when the property may have changed.
   * @returns A reference to this observableMixin object.
   */
  bind(name: string, action: Function): any;

  /**
   * Returns a new list consisting of a combination of two arrays.
   * @param item Additional items to add to the end of the list.
   * @returns An array containing the concatenation of the list and any other supplied items.
   */
  concat(...item: T[]): T[];

  /**
   * Creates a live filtered projection over this list. As the list changes, the filtered projection reacts to those changes and may also change.
   * @param predicate A function that accepts a single argument. The createFiltered function calls the callback with each element in the list. If the function returns true, that element will be included in the filtered list. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
   * @returns A filtered projection over the list.
   */
  createFiltered(
    predicate: (x: T) => boolean
  ): WinJS$Binding$FilteredListProjection<T>;

  /**
   * Creates a live grouped projection over this list. As the list changes, the grouped projection reacts to those changes and may also change. The grouped projection sorts all the elements of the list to be in group-contiguous order. The grouped projection also contains a .groups property, which is a List representing the groups that were found in the list.
   * @param groupKey A function that accepts a single argument. The function is called with each element in the list, the function should return a string representing the group containing the element. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
   * @param groupData A function that accepts a single argument. The function is called once, on one element per group. It should return the value that should be set as the data of the .groups list element for this group. The data value usually serves as summary or header information for the group.
   * @param groupSorter A function that accepts two arguments. The function is called with pairs of group keys found in the list. It must return one of the following numeric values: negative if the first argument is less than the second (sorted before), zero if the two arguments are equivalent, positive if the first argument is greater than the second (sorted after).
   * @returns A grouped projection over the list.
   */
  createGrouped<G>(
    groupKey: (x: T) => string,
    groupData: (x: T) => G,
    groupSorter?: (left: string, right: string) => number
  ): WinJS$Binding$GroupedSortedListProjection<T, G>;

  /**
   * Creates a live sorted projection over this list. As the list changes, the sorted projection reacts to those changes and may also change.
   * @param sorter A function that accepts two arguments. The function is called with elements in the list. It must return one of the following numeric values: negative if the first argument is less than the second, zero if the two arguments are equivalent, positive if the first argument is greater than the second. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
   * @returns A sorted projection over the list.
   */
  createSorted(
    sorter: (left: T, right: T) => number
  ): Binding$SortedListProjection<T>;

  /**
   * Raises an event of the specified type and with the specified additional properties.
   * @param type The type (name) of the event.
   * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
   * @returns true if preventDefault was called on the event.
   */
  dispatchEvent(type: string, eventProperties: any): boolean;

  /**
   * Checks whether the specified callback function returns true for all elements in a list.
   * @param callback A function that accepts up to three arguments. This function is called for each element in the list until it returns false or the end of the list is reached.
   * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
   * @returns true if the callback returns true for all elements in the list.
   */
  every(
    callback: (value: T, index: number, array: T[]) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * Returns the elements of a list that meet the condition specified in a callback function.
   * @param callback A function that accepts up to three arguments. The function is called for each element in the list. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
   * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
   * @returns An array containing the elements that meet the condition specified in the callback function.
   */
  filter(
    callback: (value: T, index: number, array: T[]) => any,
    thisArg?: any
  ): T[];

  /**
   * Calls the specified callback function for each element in a list.
   * @param callback A function that accepts up to three arguments. The function is called for each element in the list. The arguments are as follows: value, index, array.
   * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
   */
  forEach(
    callback: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;

  /**
   * Gets the value at the specified index.
   * @param index The index of the value to get.
   * @returns The value at the specified index.
   */
  getAt(index: number): T;

  /**
   * Gets a key/data pair for the specified list index.
   * @param index The index of value to retrieve.
   * @returns An object with .key and .data properties.
   */
  getItem(index: number): Binding$IKeyDataPair<T>;

  /**
   * Gets a key/data pair for the list item key specified.
   * @param key The key of the value to retrieve.
   * @returns An object with .key and .data properties.
   */
  getItemFromKey(key: string): Binding$IKeyDataPair<T>;

  /**
   * Gets the index of the first occurrence of the specified value in a list.
   * @param searchElement The value to locate in the list.
   * @param fromIndex The index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   * @returns The index of the first occurrence of a value in a list or -1 if not found.
   */
  indexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Gets the index of the first occurrence of a key in a list.
   * @param key The key to locate in the list.
   * @returns The index of the first occurrence of a key in a list, or -1 if not found.
   */
  indexOfKey(key: string): number;

  /**
   * Returns a string consisting of all the elements of a list separated by the specified separator string.
   * @param separator A string used to separate the elements of a list. If this parameter is omitted, the list elements are separated with a comma.
   * @returns The elements of a list separated by the specified separator string.
   */
  join(separator?: string): string;

  /**
   * Gets the index of the last occurrence of the specified value in a list.
   * @param searchElement The value to locate in the list.
   * @param fromIndex The index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the list.
   * @returns The index of the last occurrence of a value in a list, or -1 if not found.
   */
  lastIndexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Calls the specified callback function on each element of a list, and returns an array that contains the results.
   * @param callback A function that accepts up to three arguments. The function is called for each element in the list.
   * @param thisArg n object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
   * @returns An array containing the result of calling the callback function on each element in the list.
   */
  map<G>(
    callback: (value: T, index: number, array: T[]) => G,
    thisArg?: any
  ): G[];

  /**
   * Moves the value at index to the specified position.
   * @param index The original index of the value.
   * @param newIndex The index of the value after the move.
   */
  move(index: number, newIndex: number): void;

  /**
   * Notifies listeners that a property value was updated.
   * @param name The name of the property that is being updated.
   * @param newValue The new value for the property.
   * @param oldValue The old value for the property.
   * @returns A promise that is completed when the notifications are complete.
   */
  notify(name: string, newValue: any, oldValue: any): WinJS$Promise<any>;

  /**
   * Forces the list to send a itemmutated notification to any listeners for the value at the specified index.
   * @param index The index of the value that was mutated.
   */
  notifyMutated(index: number): void;

  /**
   * Forces the list to send a reload notification to any listeners.
   */
  notifyReload(): void;

  /**
   * Removes the last element from a list and returns it.
   * @returns The last element from the list.
   */
  pop(): T;

  /**
   * Appends new element(s) to a list, and returns the new length of the list.
   * @param value The element to insert at the end of the list.
   * @returns The new length of the list.
   */
  push(value: T): number;
  push(...values: T[]): number;

  /**
   * Accumulates a single result by calling the specified callback function for all elements in a list. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callback A function that accepts up to four arguments. These arguments are: previousValue, currentValue, currentIndex, array. The function is called for each element in the list.
   * @param initiallValue If initialValue is specified, it is used as the value with which to start the accumulation. The first call to the function provides this value as an argument instead of a list value.
   * @returns The return value from the last call to the callback function.
   */
  reduce(
    callback: (
      previousValue: any,
      currentValue: any,
      currentIndex: number,
      array: T[]
    ) => T,
    initiallValue?: T
  ): T;

  /**
   * Accumulates a single result by calling the specified callback function for all elements in a list, starting with the last member of the list. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callback A function that accepts up to four arguments. These arguments are: previousValue, currentValue, currentIndex, array. The function is called for each element in the list.
   * @param initialValue If initialValue is specified, it is used as the value with which to start the accumulation. The first call to the callback function provides this value as an argument instead of a list value.
   * @returns The return value from the last call to callback function.
   */
  reduceRight(
    callback: (
      previousValue: any,
      currentValue: any,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue?: T
  ): T;

  /**
   * Removes an event listener from the control.
   * @param type The type (name) of the event.
   * @param listener The listener to remove.
   * @param useCapture true if capture is to be initiated, otherwise false.
   */
  removeEventListener(
    type: string,
    listener: Function,
    useCapture?: boolean
  ): void;

  /**
   * Returns a list with the elements reversed. This method reverses the elements of a list object in place. It does not create a new list object during execution.
   */
  reverse(): void;

  /**
   * Replaces the value at the specified index with a new value.
   * @param index The index of the value that was replaced.
   * @param newValue The new value.
   */
  setAt(index: number, newValue: T): void;

  /**
   * Removes the first element from a list and returns it.
   * @returns The first element from the list.
   */
  shift(): T;

  /**
   * Extracts a section of a list and returns a new list.
   * @param begin The index that specifies the beginning of the section.
   * @param end The index that specifies the end of the section.
   * @returns Returns a section of list.
   */
  slice(begin: number, end?: number): T[];

  /**
   * Checks whether the specified callback function returns true for any element of a list.
   * @param callback A function that accepts up to three arguments. The function is called for each element in the list until it returns true, or until the end of the list.
   * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
   * @returns true if callback returns true for any element in the list.
   */
  some(
    callback: (value: T, index: number, array: T[]) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * Returns a list with the elements sorted. This method sorts the elements of a list object in place. It does not create a new list object during execution.
   * @param sortFunction The function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
   */
  sort(sortFunction?: (left: T, right: T) => number): void;

  /**
   * Removes elements from a list and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the list from which to start removing elements.
   * @param howMany The number of elements to remove.
   * @param item The elements to insert into the list in place of the deleted elements.
   * @returns The deleted elements.
   */
  splice(start: number, howMany?: number, ...item: T[]): T[];

  /**
   * Removes one or more listeners from the notification list for a given property.
   * @param name The name of the property to unbind. If this parameter is omitted, all listeners for all events are removed.
   * @param action The function to remove from the listener list for the specified property. If this parameter is omitted, all listeners are removed for the specific property.
   * @returns This object is returned.
   */
  unbind(name: string, action: Function): any;

  /**
   * Appends new element(s) to a list, and returns the new length of the list.
   * @param value The element to insert at the start of the list.
   * @returns The new length of the list.
   */
  unshift(value: T): number;
  unshift(...values: T[]): number;

  /**
   * Gets the IListDataSource for the list. The only purpose of this property is to adapt a List to the data model that is used by ListView and FlipView.
   */
  dataSource: WinJS$UIIListDataSource<T>;

  /**
   * Gets or sets the length of the list, which is an integer value one higher than the highest element defined in the list.
   */
  length: number;

  /**
   * Indicates that the object is compatibile with declarative processing.
   */
  static supportedForProcessing: boolean;
}

/**
 * Represents a base class for lists.
 */
declare interface WinJS$Binding$ListBase<T> {
  /**
   * An item in the list has changed its value.
   * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, newItem, newValue, oldItem, oldValue.
   */
  onitemchanged(eventInfo: CustomEvent): void;

  /**
   * A new item has been inserted into the list.
   * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
   */
  oniteminserted(eventInfo: CustomEvent): void;

  /**
   * An item has been changed locations in the list.
   * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
   */
  onitemmoved(eventInfo: CustomEvent): void;

  /**
   * An item has been mutated. This event occurs as a result of calling the notifyMutated method.
   * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
   */
  onitemmutated(eventInfo: CustomEvent): void;

  /**
   * An item has been removed from the list.
   * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
   */
  onitemremoved(eventInfo: CustomEvent): void;

  /**
   * The list has been refreshed. Any references to items in the list may be incorrect.
   * @param eventInfo An object that contains information about the event. The detail property of this object is null.
   */
  onreload(eventInfo: CustomEvent): void;

  /**
   * Adds an event listener to the control.
   * @param type The type (name) of the event.
   * @param listener The listener to invoke when the event gets raised.
   * @param useCapture If true, initiates capture, otherwise false.
   */
  addEventListener(
    type: string,
    listener: Function,
    useCapture?: boolean
  ): void;

  /**
   * Links the specified action to the property specified in the name parameter. This function is invoked when the value of the property may have changed. It is not guaranteed that the action will be called only when a value has actually changed, nor is it guaranteed that the action will be called for every value change. The implementation of this function coalesces change notifications, such that multiple updates to a property value may result in only a single call to the specified action.
   * @param name The name of the property to which to bind the action.
   * @param action The function to invoke asynchronously when the property may have changed.
   * @returns A reference to this observableMixin object.
   */
  bind(name: string, action: Function): any;

  /**
   * Returns a new list consisting of a combination of two arrays.
   * @param item Additional items to add to the end of the list.
   * @returns An array containing the concatenation of the list and any other supplied items.
   */
  concat(...item: T[]): T[];

  /**
   * Creates a live filtered projection over this list. As the list changes, the filtered projection reacts to those changes and may also change.
   * @param predicate A function that accepts a single argument. The createFiltered function calls the callback with each element in the list. If the function returns true, that element will be included in the filtered list. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
   * @returns A filtered projection over the list.
   */
  createFiltered(
    predicate: (x: T) => boolean
  ): WinJS$Binding$FilteredListProjection<T>;

  /**
   * Creates a live grouped projection over this list. As the list changes, the grouped projection reacts to those changes and may also change. The grouped projection sorts all the elements of the list to be in group-contiguous order. The grouped projection also contains a .groups property, which is a List representing the groups that were found in the list.
   * @param groupKey A function that accepts a single argument. The function is called with each element in the list, the function should return a string representing the group containing the element. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
   * @param groupData A function that accepts a single argument. The function is called once, on one element per group. It should return the value that should be set as the data of the .groups list element for this group. The data value usually serves as summary or header information for the group.
   * @param groupSorter A function that accepts two arguments. The function is called with pairs of group keys found in the list. It must return one of the following numeric values: negative if the first argument is less than the second (sorted before), zero if the two arguments are equivalent, positive if the first argument is greater than the second (sorted after).
   * @returns A grouped projection over the list.
   */
  createGrouped<G>(
    groupKey: (x: T) => string,
    groupData: (x: T) => G,
    groupSorter?: (left: string, right: string) => number
  ): WinJS$Binding$GroupedSortedListProjection<T, G>;

  /**
   * Creates a live sorted projection over this list. As the list changes, the sorted projection reacts to those changes and may also change.
   * @param sorter A function that accepts two arguments. The function is called with elements in the list. It must return one of the following numeric values: negative if the first argument is less than the second, zero if the two arguments are equivalent, positive if the first argument is greater than the second. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
   * @returns A sorted projection over the list.
   */
  createSorted(
    sorter: (left: T, right: T) => number
  ): Binding$SortedListProjection<T>;

  /**
   * Raises an event of the specified type and with the specified additional properties.
   * @param type The type (name) of the event.
   * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
   * @returns true if preventDefault was called on the event.
   */
  dispatchEvent(type: string, eventProperties: any): boolean;

  /**
   * Checks whether the specified callback function returns true for all elements in a list.
   * @param callback A function that accepts up to three arguments. This function is called for each element in the list until it returns false or the end of the list is reached.
   * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
   * @returns true if the callback returns true for all elements in the list.
   */
  every(
    callback: (value: T, index: number, array: T[]) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * Returns the elements of a list that meet the condition specified in a callback function.
   * @param callback A function that accepts up to three arguments. The function is called for each element in the list. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
   * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
   * @returns An array containing the elements that meet the condition specified in the callback function.
   */
  filter(
    callback: (value: T, index: number, array: T[]) => any,
    thisArg?: any
  ): T[];

  /**
   * Calls the specified callback function for each element in a list.
   * @param callback A function that accepts up to three arguments. The function is called for each element in the list. The arguments are as follows: value, index, array.
   * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
   */
  forEach(
    callback: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;

  /**
   * Gets the value at the specified index.
   * @param index The index of the value to get.
   * @returns The value at the specified index.
   */
  getAt(index: number): T;

  /**
   * Gets the index of the first occurrence of the specified value in a list.
   * @param searchElement The value to locate in the list.
   * @param fromIndex The index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   * @returns The index of the first occurrence of a value in a list or -1 if not found.
   */
  indexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Returns a string consisting of all the elements of a list separated by the specified separator string.
   * @param separator A string used to separate the elements of a list. If this parameter is omitted, the list elements are separated with a comma.
   * @returns The elements of a list separated by the specified separator string.
   */
  join(separator?: string): string;

  /**
   * Gets the index of the last occurrence of the specified value in a list.
   * @param searchElement The value to locate in the list.
   * @param fromIndex The index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the list.
   * @returns The index of the last occurrence of a value in a list, or -1 if not found.
   */
  lastIndexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Calls the specified callback function on each element of a list, and returns an array that contains the results.
   * @param callback A function that accepts up to three arguments. The function is called for each element in the list.
   * @param thisArg n object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
   * @returns An array containing the result of calling the callback function on each element in the list.
   */
  map<G>(
    callback: (value: T, index: number, array: T[]) => G,
    thisArg?: any
  ): G[];

  /**
   * Notifies listeners that a property value was updated.
   * @param name The name of the property that is being updated.
   * @param newValue The new value for the property.
   * @param oldValue The old value for the property.
   * @returns A promise that is completed when the notifications are complete.
   */
  notify(name: string, newValue: any, oldValue: any): WinJS$Promise<any>;

  /**
   * Forces the list to send a reload notification to any listeners.
   */
  notifyReload(): void;

  /**
   * Accumulates a single result by calling the specified callback function for all elements in a list. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callback A function that accepts up to four arguments. These arguments are: previousValue, currentValue, currentIndex, array. The function is called for each element in the list.
   * @param initiallValue If initialValue is specified, it is used as the value with which to start the accumulation. The first call to the function provides this value as an argument instead of a list value.
   * @returns The return value from the last call to the callback function.
   */
  reduce(
    callback: (
      previousValue: any,
      currentValue: any,
      currentIndex: number,
      array: T[]
    ) => T,
    initiallValue?: T
  ): T;

  /**
   * Accumulates a single result by calling the specified callback function for all elements in a list, starting with the last member of the list. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callback A function that accepts up to four arguments. These arguments are: previousValue, currentValue, currentIndex, array. The function is called for each element in the list.
   * @param initialValue If initialValue is specified, it is used as the value with which to start the accumulation. The first call to the callback function provides this value as an argument instead of a list value.
   * @returns The return value from the last call to callback function.
   */
  reduceRight(
    callback: (
      previousValue: any,
      currentValue: any,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue?: T
  ): T;

  /**
   * Removes an event listener from the control.
   * @param type The type (name) of the event.
   * @param listener The listener to remove.
   * @param useCapture true if capture is to be initiated, otherwise false.
   */
  removeEventListener(
    type: string,
    listener: Function,
    useCapture?: boolean
  ): void;

  /**
   * Extracts a section of a list and returns a new list.
   * @param begin The index that specifies the beginning of the section.
   * @param end The index that specifies the end of the section.
   * @returns Returns a section of list.
   */
  slice(begin: number, end?: number): T[];

  /**
   * Checks whether the specified callback function returns true for any element of a list.
   * @param callback A function that accepts up to three arguments. The function is called for each element in the list until it returns true, or until the end of the list.
   * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
   * @returns true if callback returns true for any element in the list.
   */
  some(
    callback: (value: T, index: number, array: T[]) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * Removes one or more listeners from the notification list for a given property.
   * @param name The name of the property to unbind. If this parameter is omitted, all listeners for all events are removed.
   * @param action The function to remove from the listener list for the specified property. If this parameter is omitted, all listeners are removed for the specific property.
   * @returns This object is returned.
   */
  unbind(name: string, action: Function): any;

  /**
   * Gets the IListDataSource for the list. The only purpose of this property is to adapt a List to the data model that is used by ListView and FlipView.
   */
  dataSource: WinJS$UIIListDataSource<T>;
}

/**
 * Represents a base class for normal list modifying operations.
 */
declare type WinJS$Binding$ListBaseWithMutators<T> = {
  /**
   * Removes the last element from a list and returns it.
   * @returns The last element from the list.
   */
  pop(): T,

  /**
   * Appends new element(s) to a list, and returns the new length of the list.
   * @param value The element to insert at the end of the list.
   * @returns The new length of the list.
   */
  push(value: T): number,
  push(...values: T[]): number,

  /**
   * Removes the first element from a list and returns it.
   * @returns The first element from the list.
   */
  shift(): T,

  /**
   * Appends new element(s) to a list, and returns the new length of the list.
   * @param value The element to insert at the start of the list.
   * @returns The new length of the list.
   */
  unshift(value: T): number,
  unshift(...values: T[]): number
} & ListBase<T>;

/**
 * Represents a base class for list projections.
 */
declare type WinJS$Binding$ListProjection<T> = {
  /**
   * Disconnects a WinJS.Binding.List projection from its underlying WinJS.Binding.List. It's only important to call this method when the WinJS.Binding.List projection and the WinJS.Binding.List have different lifetimes. (Call this method on the WinJS.Binding.List projection, not the underlying WinJS.Binding.List.)
   */
  dispose(): void,

  /**
   * Gets a key/data pair for the specified key.
   * @param key The key of the value to retrieve.
   * @returns An object with two properties: key and data.
   */
  getItemFromKey(key: string): Binding$IKeyDataPair<T>,

  /**
   * Moves the value at index to position newIndex.
   * @param index The original index of the value.
   * @param newIndex The index of the value after the move.
   */
  move(index: number, newIndex: number): void,

  /**
   * Removes elements from a list and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the list from which to start removing elements.
   * @param howMany The number of elements to remove.
   * @param item The elements to insert into the list in place of the deleted elements.
   * @returns The deleted elements.
   */
  splice(start: number, howMany?: number, ...item: T[]): T[]
} & ListBaseWithMutators<T>;

/**
 * Provides a standard implementation of the bindable contract, as well as a basic storage mechanism that participates in change notification and an asynchronous notification implementation.
 */
declare var WinJS$Binding$mixin: {
  /**
   * Adds a property to the object. The property includes change notification and an ECMAScript 5 property definition .
   * @param name The name of the property to add.
   * @param value The value of the property.
   * @returns This object is returned.
   */
  addProperty(name: string, value: any): any,

  /**
   * Links the specified action to the property specified in the name parameter. This function is invoked when the value of the property may have changed. It is not guaranteed that the action will be called only when a value has actually changed, nor is it guaranteed that the action will be called for every value change. The implementation of this function coalesces change notifications, such that multiple updates to a property value may result in only a single call to the specified action.
   * @param name The name of the property to which to bind the action.
   * @param action The function to invoke asynchronously when the property may have changed.
   * @returns This object is returned.
   */
  bind(name: string, action: any): Function,

  /**
   * Gets a property value by name.
   * @param name The name of the property to get.
   * @returns The value of the property as an observable object.
   */
  getProperty(name: string): any,

  /**
   * Notifies listeners that a property value was updated.
   * @param name The name of the property that is being updated.
   * @param newValue The new value for the property.
   * @param oldValue The old value for the property.
   * @returns A promise that is completed when the notifications are complete.
   */
  notify(name: string, newValue: string, oldValue: string): WinJS$Promise<any>,

  /**
   * Removes a property value.
   * @param name The name of the property to remove.
   * @returns This object is returned.
   */
  removeProperty(name: string): any,

  /**
   * Updates a property value and notifies any listeners.
   * @param name The name of the property to update.
   * @param value The new value of the property.
   * @returns This object is returned.
   */
  setProperty(name: string, value: any): any,

  /**
   * Removes one or more listeners from the notification list for a given property.
   * @param name The name of the property to unbind. If this parameter is omitted, all listeners for all events are removed.
   * @param action The function to remove from the listener list for the specified property. If this parameter is omitted, all listeners are removed for the specific property.
   * @returns This object is returned.
   */
  unbind(name: string, action: Function): any,

  /**
   * Updates a property value and notifies any listeners.
   * @param name The name of the property to update.
   * @param value The new value of the property.
   * @returns A promise that completes when the notifications for this property change have been processed. If multiple notifications are coalesced, the promise may be canceled or the value of the promise may be updated. The fulfilled value of the promise is the new value of the property for which the notifications have been completed.
   */
  updateProperty(name: string, value: any): WinJS$Promise<any>
};

/**
 * Provides functions that can make an object observable.
 */
declare var WinJS$Binding$observableMixin: {
  /**
   * Links the specified action to the property specified in the name parameter. This function is invoked when the value of the property may have changed. It is not guaranteed that the action will be called only when a value has actually changed, nor is it guaranteed that the action will be called for every value change. The implementation of this function coalesces change notifications, such that multiple updates to a property value may result in only a single call to the specified action.
   * @param name The name of the property to which to bind the action.
   * @param action The function to invoke asynchronously when the property may have changed.
   * @returns A reference to this observableMixin object.
   */
  bind(name: string, action: Function): any,

  /**
   * Notifies listeners that a property value was updated.
   * @param name The name of the property that is being updated.
   * @param newValue The new value for the property.
   * @param oldValue The old value for the property.
   * @returns A promise that is completed when the notifications are complete.
   */
  notify(name: string, newValue: any, oldValue: any): WinJS$Promise<any>,

  /**
   * Removes one or more listeners from the notification list for a given property.
   * @param name The name of the property to unbind. If this parameter is omitted, all listeners for all events are removed.
   * @param action The function to remove from the listener list for the specified property. If this parameter is omitted, all listeners are removed for the specific property.
   * @returns This object is returned.
   */
  unbind(name: string, action: Function): any
};

/**
 * Do not instantiate. Returned by the createSorted method.
 */
declare type WinJS$Binding$SortedListProjection<T> = {
  /**
   * Returns a key/data pair for the specified index.
   * @param index The index of the value to retrieve.
   * @returns An object that has two properties: key and data.
   */
  getItem(index: number): Binding$IKeyDataPair<T>,

  /**
   * Returns the index of the first occurrence of a key.
   * @param key The key to locate in the list.
   * @returns The index of the first occurrence of a key in a list, or -1 if not found.
   */
  indexOfKey(key: string): number,

  /**
   * Forces the list to send a itemmutated notification to any listeners for the value at the specified index.
   * @param index The index of the value that was mutated.
   */
  notifyMutated(index: number): void,

  /**
   * Replaces the value at the specified index with a new value.
   * @param index The index of the value to be replaced.
   * @param newValue The new value.
   */
  setAt(index: number, newValue: T): void,

  /**
   * Gets or sets the length of the list. Returns an integer value one higher than the highest element defined in a list.
   */
  length: number
} & ListProjection<T>;

/**
 * Provides a reusable declarative binding element.
 */
declare class WinJS$Binding$Template {
  /**
   * Creates a template that provides a reusable declarative binding element.
   * @constructor
   * @param element The DOM element to convert to a template.
   * @param options If this parameter is supplied, the template is loaded from the URI and the content of the element parameter is ignored. You can add the following options: href.
   */
  constructor(element: HTMLElement, options?: any): this;

  /**
   * Binds values from the specified data context to elements that are descendants of the specified root element that have the declarative binding attributes specified (data-win-bind).
   * @param dataContext The object to use for default data binding.
   * @param container The element to which to add this rendered template. If this parameter is omitted, a new DIV is created.
   * @returns A Promise that will be completed after binding has finished. The value is either container or the created DIV. promise that is completed after binding has finished.
   */
  render(dataContext: any, container?: HTMLElement): WinJS$Promise<HTMLElement>;

  /**
   * This API supports the WinJS infrastructure and is not intended to be used directly from your code. Use render instead.
   */
  renderItem<T>(
    item: WinJS$Promise<T>,
    recyled: HTMLElement
  ): {
    element: WinJS$Promise<HTMLElement>,
    renderComplete: WinJS$Promise<any>
  };

  /**
   * Renders a template based on the specified URI (static method).
   * @param href The URI from which to load the template.
   * @param dataContext The object to use for default data binding.
   * @param container The element to which to add this rendered template. If this parameter is omitted, a new DIV is created.
   * @returns A promise that is completed after binding has finished. The value is either the object in the container parameter or the created DIV.
   */
  static render(
    href: string,
    dataContext: any,
    container?: HTMLElement
  ): WinJS$Promise<HTMLElement>;

  /**
   * Gets or sets the default binding initializer for the template.
   */
  bindingInitializer: any;

  /**
   * Gets or sets a value that specifies whether a debug break is inserted into the first rendering of each template. This property only has an effect when the app is in debug mode.
   */
  debugBreakOnRender: boolean;

  /**
   * This property is deprecated and might not be available in future versions of the WinJS. Gets or sets a value that specifies whether optimized template processing has been disabled.
   */
  disableOptimizedProcessing: boolean;

  /**
   * Gets the DOM element that is used as the template.
   */
  element: HTMLElement;

  /**
   * Gets a value that specifies whether templates should be instantiated without the creation of an additional child element.
   */
  extractChild: boolean;

  /**
   * Gets or sets the Number of milliseconds to delay instantiating declarative controls. Zero (0) will result in no delay, any negative number
   * will result in a setImmediate delay, any positive number will be treated as the number of milliseconds.
   */
  processTimeout: number;

  /**
   * Determines whether the Template contains declarative controls that must be processed separately. This property is always true. The controls that belong to a Template object's children are instantiated when a Template instance is rendered.
   */
  static isDeclarativeControlContainer: boolean;

  /**
   * Indicates that the object is compatibile with declarative processing.
   */
  static supportedForProcessing: boolean;
}

/**
 * Adds a CSS class from the specified path of the source object to a destination object.
 * @param source The source object that has the class to copy.
 * @param sourceProperties The path on the source object to the source class.
 * @param dest The destination object.
 */
declare function WinJS$Binding$addClassOneTime(
  source: any,
  sourceProperties: any[],
  dest: HTMLElement
): void;

/**
 * Returns an observable object. This may be an observable proxy for the specified object, an existing proxy, or the specified object itself if it directly supports observation.
 * @param data The object to observe.
 * @returns The observable object.
 */
declare function WinJS$Binding$as<U>(data: U): U;

/**
 * Binds to one or more properties on the observable object or or on child values of that object.
 * @param observable The object to bind to.
 * @param bindingDescriptor An object literal containing the binding declarations. Binding declarations take the form: { propertyName: (function | bindingDeclaration), ... }.
 * @returns An object that contains at least a "cancel" field, which is a function that removes all bindings associated with this bind request.
 */
declare function WinJS$Binding$bind(
  observable: any,
  bindingDescriptor: any
): any;

/**
 * Creates a default binding initializer for binding between a source property and a destination property with the specified converter function that is executed on the value of the source property.
 * @param convert The conversion function that takes the source property and produces a value that is set to the destination property. This function must be accessible from the global namespace.
 * @returns The binding initializer.
 */
declare function WinJS$Binding$converter(convert: Function): Function;

/**
 * Creates a one-way binding between the source object and the destination object. Warning Do not attempt to bind data to the ID of an HTML element.
 * @param source The source object.
 * @param sourceProperties The path on the source object to the source property.
 * @param dest The destination object.
 * @param destProperties The path on the destination object to the destination property.
 * @returns An object with a cancel method that is used to coalesce bindings.
 */
declare function WinJS$Binding$defaultBind(
  source: any,
  sourceProperties: any,
  dest: any,
  destProperties: any
): any;

/**
 * Creates a new constructor function that supports observability with the specified set of properties.
 * @param data The object to use as the pattern for defining the set of properties.
 * @returns A constructor function with 1 optional argument that is the initial state of the properties.
 */
declare function WinJS$Binding$define(data: any): Function;

/**
 * Wraps the specified object so that all its properties are instrumented for binding. This is meant to be used in conjunction with the binding mixin.
 * @param shape The specification for the bindable object.
 * @returns An object with a set of properties all of which are wired for binding.
 */
declare function WinJS$Binding$expandProperties(shape: any): any;

/**
 * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
 */
declare function WinJS$Binding$getValue(obj: any, path?: any): any;

/**
 * Marks a custom initializer function as being compatible with declarative data binding.
 * @param customInitializer The custom initializer to be marked as compatible with declarative data binding.
 * @returns The input customInitializer.
 */
declare function WinJS$Binding$initializer(
  customInitializer: Function
): Function;

/**
 * Sets the destination property to the value of the source property.
 * @param source The source object.
 * @param sourceProperties The path on the source object to the source property.
 * @param dest The destination object.
 * @param destProperties The path on the destination object to the destination property.
 * @returns An object with a cancel method that is used to coalesce bindings.
 */
declare function WinJS$Binding$oneTime(
  source: any,
  sourceProperties: any,
  dest: any,
  destProperties: any
): any;

/**
 * Binds the values of an object to the values of a DOM element that has the data-win-bind attribute. If multiple DOM elements are to be bound, you must set the attribute on all of them. See the example below for details.
 * @param rootElement Optional. The element at which to start traversing to find elements to bind to. If this parameter is omitted, the entire document is searched.
 * @param dataContext The object that contains the values to which the DOM element should be bound.
 * @param skipRoot If true, specifies that only the children of rootElement should be bound, otherwise rootElement should be bound as well.
 * @param bindingCache The cached binding data.
 * @param defaultInitializer The binding initializer to use in the case that one is not specified in a binding expression. If not provided, the behavior is the same as Binding.defaultBind.
 * @returns A Promise that completes when every item that contains the data-win-bind attribute has been processed and the update has started.
 */
declare function WinJS$Binding$processAll(
  rootElement?: Element,
  dataContext?: any,
  skipRoot?: boolean,
  bindingCache?: any,
  defaultInitializer?: Function
): WinJS$Promise<void>;

/**
 * Creates a one-way binding between the source object and an attribute on the destination element.
 * @param source The source object.
 * @param sourceProperties The path on the source object to the source property.
 * @param dest The destination object.
 * @param destProperties The path on the destination object to the destination property. This must be a single name.
 * @returns An object with a cancel() method that is used to coalesce bindings.
 */
declare function WinJS$Binding$setAttribute(
  source: any,
  sourceProperties: any[],
  dest: Element,
  destProperties: any[]
): any;

/**
 * Sets an attribute on the destination element to the value of the source property.
 * @param source The source object.
 * @param sourceProperties The path on the source object to the source property.
 * @param dest The destination object.
 * @param destProperties The path on the destination object to the destination property. This must be a single name.
 */
declare function WinJS$Binding$setAttributeOneTime(
  source: any,
  sourceProperties: any[],
  dest: Element,
  destProperties: any[]
): void;

/**
 * Returns the original (non-observable) object is returned if the specified object is an observable proxy,
 * @param data The object for which to retrieve the original value.
 * @returns If the specified object is an observable proxy, the original object is returned, otherwise the same object is returned.
 */
declare function WinJS$Binding$unwrap(data: any): any;

declare interface WinJS$Binding$IKeyDataPair<T> {
  key: string;
  data: T;
}

declare type WinJS$Binding$IGroupKeyDataPair<T> = {
  groupSize: number,
  firstItemIndexHint: number,
  firstItemKey: string
} & IKeyDataPair<T>;

declare var npm$namespace$WinJS$Class: {
  define: typeof WinJS$Class$define,
  derive: typeof WinJS$Class$derive,
  mix: typeof WinJS$Class$mix
};

/**
 * Defines a class using the given constructor and the specified instance members.
 * @param constructor A constructor function that is used to instantiate this type.
 * @param instanceMembers The set of instance fields, properties, and methods made available on the type.
 * @param staticMembers The set of static fields, properties, and methods made available on the type.
 * @returns The newly-defined type.
 */
declare function WinJS$Class$define(
  constructor?: Function,
  instanceMembers?: any,
  staticMembers?: any
): any;

/**
 * Creates a sub-class based on the specified baseClass parameter, using prototype inheritance.
 * @param baseClass The type to inherit from.
 * @param constructor A constructor function that is used to instantiate this type.
 * @param instanceMembers The set of instance fields, properties, and methods to be made available on the type.
 * @param staticMembers The set of static fields, properties, and methods to be made available on the type.
 * @returns The newly-defined type.
 */
declare function WinJS$Class$derive(
  baseClass: any,
  constructor: Function,
  instanceMembers?: any,
  staticMembers?: any
): any;

/**
 * Defines a class using the given constructor and the union of the set of instance members specified by all the mixin objects. The mixin parameter list is of variable length. For more information, see Adding functionality with WinJS mixins.
 * @param constructor A constructor function that will be used to instantiate this class.
 * @param mixin An object declaring the set of instance members. The mixin parameter list is of variable length.
 * @returns The newly defined class.
 */
declare function WinJS$Class$mix(constructor: Function, ...mixin: any[]): any;

/**
 * Can be set to show the results of a validation process.
 */
declare var WinJS$validation: boolean;

/**
 * An error object.
 */
declare class WinJS$ErrorFromName {
  /**
   * Creates an Error object with the specified name and message properties.
   * @constructor
   * @param name The name of this error. The name is meant to be consumed programmatically and should not be localized.
   * @param message The message for this error. The message is meant to be consumed by humans and should be localized.
   */
  constructor(name: string, message?: string): this;

  /**
   * Indicates that the object is compatibile with declarative processing.
   */
  static supportedForProcessing: boolean;
}

declare interface WinJS$IPromise<T> {
  cancel(): void;
  done<U>(
    onComplete?: (value: T) => any,
    onError?: (error: any) => any,
    onProgress?: (progress: any) => void
  ): void;
  then<U>(
    onComplete?: (value: T) => WinJS$IPromise<U>,
    onError?: (error: any) => WinJS$IPromise<U>,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;
  then<U>(
    onComplete?: (value: T) => WinJS$IPromise<U>,
    onError?: (error: any) => U,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;
  then<U>(
    onComplete?: (value: T) => WinJS$IPromise<U>,
    onError?: (error: any) => void,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;
  then<U>(
    onComplete?: (value: T) => U,
    onError?: (error: any) => WinJS$IPromise<U>,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;
  then<U>(
    onComplete?: (value: T) => U,
    onError?: (error: any) => U,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;
  then<U>(
    onComplete?: (value: T) => U,
    onError?: (error: any) => void,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;
  then<U>(
    onComplete?: (value: T) => void,
    onError?: (error: any) => WinJS$IPromise<U>,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;
  then<U>(
    onComplete?: (value: T) => void,
    onError?: (error: any) => U,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;
  then<U>(
    onComplete?: (value: T) => void,
    onError?: (error: any) => void,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;
}

/**
 * Provides a mechanism to schedule work to be done on a value that has not yet been computed. It is an abstraction for managing interactions with asynchronous APIs. For more information about asynchronous programming, see Asynchronous programming. For more information about promises in JavaScript, see Asynchronous programming in JavaScript. For more information about using promises, see the WinJS Promise sample.
 */
declare class WinJS$Promise<T> mixins IPromise<T> {
  /**
   * A promise provides a mechanism to schedule work to be done on a value that has not yet been computed. It is a convenient abstraction for managing interactions with asynchronous APIs. For more information about asynchronous programming, see Asynchronous programming. For more information about promises in JavaScript, see Asynchronous programming in JavaScript. For more information about using promises, see the WinJS Promise sample.
   * @constructor
   * @param init The function that is called during construction of the Promise that contains the implementation of the operation that the Promise will represent. This can be synchronous or asynchronous, depending on the nature of the operation. Note that placing code within this function does not automatically run it asynchronously; that must be done explicitly with other asynchronous APIs such as setImmediate, setTimeout, requestAnimationFrame, and the Windows Runtime asynchronous APIs. The init function is given three arguments: completeDispatch, errorDispatch, progressDispatch. This parameter is optional.
   * @param onCancel The function to call if a consumer of this promise wants to cancel its undone work. Promises are not required to support cancellation.
   */
  constructor(
    init?: (
      completeDispatch: any,
      errorDispatch: any,
      progressDispatch: any
    ) => void,
    onCancel?: Function
  ): this;

  /**
   * Occurs when there is an error in processing a promise.
   * @param eventInfo An object that contains information about the event.
   */
  static onerror(eventInfo: CustomEvent): void;

  /**
   * Adds an event listener for the promise.
   * @param type The type (name) of the event.
   * @param listener The listener to invoke when the event is raised.
   * @param capture true to initiate capture, otherwise false.
   */
  static addEventListener(
    type: string,
    listener: Function,
    capture?: boolean
  ): void;

  /**
   * Returns a promise that is fulfilled when one of the input promises has been fulfilled.
   * @param value An array that contains Promise objects or objects whose property values include Promise objects.
   * @returns A promise that on fulfillment yields the value of the input (complete or error).
   */
  static any(value: WinJS$IPromise<any>[]): WinJS$IPromise<any>;
  static any(value: any): WinJS$IPromise<any>;

  /**
   * Returns a promise. If the object is already a Promise it is returned; otherwise the object is wrapped in a Promise. You can use this function when you need to treat a non-Promise object like a Promise, for example when you are calling a function that expects a promise, but already have the value needed rather than needing to get it asynchronously.
   * @param value The value to be treated as a Promise.
   * @returns The promise.
   */
  static as<U>(value?: U): WinJS$IPromise<U>;

  /**
   * Attempts to cancel the fulfillment of a promised value. If the promise hasn't already been fulfilled and cancellation is supported, the promise enters the error state with a value of Error("Canceled").
   */
  cancel(): void;

  /**
   * Canceled promise value, can be returned from a promise completion handler to indicate cancelation of the promise chain.
   */
  static cancel: WinJS$IPromise<any>;

  /**
   * Raises an event of the specified type and properties.
   * @param type The type (name) of the event.
   * @param details The set of additional properties to be attached to the event object.
   * @returns true if preventDefault was called on the event; otherwise, false.
   */
  static dispatchEvent(type: string, details: any): boolean;

  /**
   * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. After the handlers have finished executing, this function throws any error that would have been returned from then as a promise in the error state. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
   * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The fulfilled value is passed as the single argument. If the value is null, the fulfilled value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while executing the function, the promise returned by then moves into the error state.
   * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. If it is null, the error is forwarded. The value returned from the function is the fulfilled value of the promise returned by then.
   * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
   */
  done<U>(
    onComplete?: (value: T) => any,
    onError?: (error: any) => any,
    onProgress?: (progress: any) => void
  ): void;

  /**
   * Determines whether a value fulfills the promise contract.
   * @param value A value that may be a promise.
   * @returns true if the object conforms to the promise contract (has a then function), otherwise false.
   */
  static is(value: any): boolean;

  /**
   * Creates a Promise that is fulfilled when all the values are fulfilled.
   * @param values An object whose members contain values, some of which may be promises.
   * @returns A Promise whose value is an object with the same field names as those of the object in the values parameter, where each field value is the fulfilled value of a promise.
   */
  static join(values: any): WinJS$IPromise<any>;

  /**
   * Removes an event listener from the control.
   * @param eventType The type (name) of the event.
   * @param listener The listener to remove.
   * @param capture Specifies whether or not to initiate capture.
   */
  static removeEventListener(
    eventType: string,
    listener: Function,
    capture?: boolean
  ): void;

  /**
   * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
   * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
   * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
   * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
   * @returns The promise whose value is the result of executing the onComplete function.
   */
  then<U>(
    onComplete?: (value: T) => WinJS$IPromise<U>,
    onError?: (error: any) => WinJS$IPromise<U>,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;

  /**
   * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
   * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
   * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
   * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
   * @returns The promise whose value is the result of executing the onComplete function.
   */
  then<U>(
    onComplete?: (value: T) => WinJS$IPromise<U>,
    onError?: (error: any) => U,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;

  /**
   * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
   * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
   * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
   * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
   * @returns The promise whose value is the result of executing the onComplete function.
   */
  then<U>(
    onComplete?: (value: T) => WinJS$IPromise<U>,
    onError?: (error: any) => void,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;

  /**
   * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
   * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
   * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
   * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
   * @returns The promise whose value is the result of executing the onComplete function.
   */
  then<U>(
    onComplete?: (value: T) => U,
    onError?: (error: any) => WinJS$IPromise<U>,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;

  /**
   * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
   * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
   * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
   * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
   * @returns The promise whose value is the result of executing the onComplete function.
   */
  then<U>(
    onComplete?: (value: T) => U,
    onError?: (error: any) => U,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;

  /**
   * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
   * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
   * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
   * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
   * @returns The promise whose value is the result of executing the onComplete function.
   */
  then<U>(
    onComplete?: (value: T) => U,
    onError?: (error: any) => void,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;

  /**
   * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
   * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
   * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
   * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
   * @returns The promise whose value is the result of executing the onComplete function.
   */
  then<U>(
    onComplete?: (value: T) => void,
    onError?: (error: any) => WinJS$IPromise<U>,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;

  /**
   * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
   * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
   * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
   * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
   * @returns The promise whose value is the result of executing the onComplete function.
   */
  then<U>(
    onComplete?: (value: T) => void,
    onError?: (error: any) => U,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;

  /**
   * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
   * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
   * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
   * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
   * @returns The promise whose value is the result of executing the onComplete function.
   */
  then<U>(
    onComplete?: (value: T) => void,
    onError?: (error: any) => void,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<U>;

  /**
   * A static helper that functions identically to then() off a promise instance.
   * @param promise The promise to chain from.
   * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
   * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
   * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
   * @returns The promise whose value is the result of executing the onComplete function.
   */
  static then(
    promise: WinJS$IPromise<any>,
    onComplete?: (value: any) => any,
    onError?: (error: any) => any,
    onProgress?: (progress: any) => void
  ): WinJS$IPromise<any>;

  /**
   * Performs an operation on all the input promises and returns a promise that has the shape of the input and contains the result of the operation that has been performed on each input.
   * @param values A set of values (which could be either an array or an object) of which some or all are promises..
   * @param complete The function to be called if the promise is fulfilled with a value. This function takes a single argument, which is the fulfilled value of the promise.
   * @param error The function to be called if the promise is fulfilled with an error. This function takes a single argument, which is the error value of the promise.
   * @param progress The function to be called if the promise reports progress. This function takes a single argument, which is the data about the progress of the promise. Promises are not required to support progress.
   * @returns A Promise that is the result of calling join on the values parameter.
   */
  static thenEach(
    values: any,
    complete?: (value: any) => void,
    error?: (error: any) => void,
    progress?: (progress: any) => void
  ): WinJS$IPromise<any>;

  /**
   * This method has two forms: WinJS.Promise.timeout(timeout) and WinJS.Promise.timeout(timeout, promise). WinJS.Promise.timeout(timeout) creates a promise that is completed asynchronously after the specified timeout, essentially wrapping a call to setTimeout within a promise. WinJS.Promise.timeout(timeout, promise) sets a timeout period for completion of the specified promise, automatically canceling the promise if it is not completed within the timeout period.
   * @param timeout The timeout period in milliseconds. If this value is zero or not specified, msSetImmediate is called, otherwise setTimeout is called.
   * @param promise Optional. A promise that will be canceled if it doesn't complete within the timeout period.
   * @returns If the promise parameter is omitted, returns a promise that will be fulfilled after the timeout period. If the promise paramater is provided, the same promise is returned.
   */
  static timeout(
    timeout?: number,
    promise?: WinJS$IPromise<any>
  ): WinJS$IPromise<any>;

  /**
   * Wraps a non-promise value in a promise. This method is like wrapError, which allows you to produce a Promise in error conditions, in that it allows you to return a Promise in success conditions.
   * @param value Some non-promise value to be wrapped in a promise.
   * @returns A promise that is successfully fulfilled with the specified value.
   */
  static wrap<U>(value?: U): WinJS$IPromise<U>;

  /**
   * Wraps a non-promise error value in a promise. You can use this function if you need to pass an error to a function that requires a promise.
   * @param error A non-promise error value to be wrapped in a promise.
   * @returns A promise that is in an error state with the specified value.
   */
  static wrapError<U>(error: U): WinJS$IPromise<U>;

  /**
   * Indicates that the object is compatibile with declarative processing.
   */
  static supportedForProcessing: boolean;
}

/**
 * You can provide an implementation of this method yourself, or use WinJS.Utilities.startLog to create one that logs to the JavaScript console.
 * @param message The message to log.
 * @param tags The tag or tags to categorize the message (winjs, winjs controls, etc.).
 * @param type The type of message (error, warning, info, etc.).
 */
declare function WinJS$log(message: string, tags?: string, type?: string): void;

declare function WinJS$log(
  message: () => string,
  tags?: string,
  type?: string
): void;

/**
 * Wraps calls to XMLHttpRequest in a promise.
 * @param options The options that are applied to the XMLHttpRequest object, as follows: type, url, user, password, responseType, headers, data, customRequestInitializer.
 * @returns A promise that returns the XMLHttpRequest object when it completes.
 */
declare function WinJS$xhr(
  options: WinJS$IXHROptions
): WinJS$Promise<XMLHttpRequest>;

declare interface WinJS$IXHROptions {
  type?: string;
  url: string;
  user?: string;
  password?: string;
  headers?: any;
  data?: any;
  responseType?: string;
  customRequestInitializer?: (request: XMLHttpRequest) => void;
}

declare var npm$namespace$WinJS$Namespace: {
  define: typeof WinJS$Namespace$define,
  defineWithParent: typeof WinJS$Namespace$defineWithParent
};

/**
 * Defines a new namespace with the specified name. For more information, see Organizing your code with WinJS.Namespace.
 * @param name The name of the namespace. This could be a dot-separated name for nested namespaces.
 * @param members The members of the new namespace.
 * @returns The newly-defined namespace.
 */
declare function WinJS$Namespace$define(name?: string, members?: any): any;

/**
 * Defines a new namespace with the specified name under the specified parent namespace. For more information, see Organizing your code with WinJS.Namespace.
 * @param parentNamespace The parent namespace.
 * @param name The name of the new namespace.
 * @param members The members of the new namespace.
 * @returns The newly-defined namespace.
 */
declare function WinJS$Namespace$defineWithParent(
  parentNamespace?: any,
  name?: string,
  members?: any
): any;

declare var npm$namespace$WinJS$Navigation: {
  addEventListener: typeof WinJS$Navigation$addEventListener,
  back: typeof WinJS$Navigation$back,
  forward: typeof WinJS$Navigation$forward,
  navigate: typeof WinJS$Navigation$navigate,
  removeEventListener: typeof WinJS$Navigation$removeEventListener,
  onbeforenavigate: typeof WinJS$Navigation$onbeforenavigate,
  onnavigated: typeof WinJS$Navigation$onnavigated,
  onnavigating: typeof WinJS$Navigation$onnavigating,
  canGoBack: typeof WinJS$Navigation$canGoBack,
  canGoForward: typeof WinJS$Navigation$canGoForward,
  history: typeof WinJS$Navigation$history,
  location: typeof WinJS$Navigation$location,
  state: typeof WinJS$Navigation$state
};

/**
 * Determines whether it is possible to navigate backwards.
 */
declare var WinJS$Navigation$canGoBack: boolean;

/**
 * Determines if it is possible to navigate forwards.
 */
declare var WinJS$Navigation$canGoForward: boolean;

/**
 * Gets or sets the navigation history.
 */
declare var WinJS$Navigation$history: any;

/**
 * Gets or sets the current location.
 */
declare var WinJS$Navigation$location: string;

/**
 * Gets or sets a user-defined object that represents the state associated with the current location.
 */
declare var WinJS$Navigation$state: any;

/**
 * Adds an event listener to the control.
 * @param eventType The type (name) of the event.
 * @param listener The listener to invoke when the event gets raised.
 * @param capture If true, specifies that capture should be initiated, otherwise false.
 */
declare function WinJS$Navigation$addEventListener(
  eventType: string,
  listener: Function,
  capture?: boolean
): void;

/**
 * Navigates backwards.
 * @param distance The number of entries to go back into the history.
 * @returns A promise that is completed with a value that indicates whether or not the navigation was successful.
 */
declare function WinJS$Navigation$back(
  distance?: number
): WinJS$Promise<boolean>;

/**
 * Navigates forwards.
 * @param distance The number of entries to go forward.
 * @returns A promise that is completed with a value that indicates whether or not the navigation was successful.
 */
declare function WinJS$Navigation$forward(
  distance?: number
): WinJS$Promise<boolean>;

/**
 * Navigates to a location.
 * @param location The location to navigate to. Generally the location is a string containing the URL, but it may be anything.
 * @param initialState A user-defined object that represents the navigation state that may be accessed through state.
 * @returns A promise that is completed with a value that indicates whether or not the navigation was successful (true if successful, otherwise false).
 */
declare function WinJS$Navigation$navigate(
  location: any,
  initialState?: any
): WinJS$Promise<boolean>;

/**
 * Removes an event listener from the control.
 * @param eventType The type (name) of the event.
 * @param listener The listener to remove.
 * @param useCapture Specifies whether or not to initiate capture.
 */
declare function WinJS$Navigation$removeEventListener(
  eventType: string,
  listener: Function,
  useCapture?: boolean
): void;

/**
 * Occurs before navigation.
 * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: location, state.
 */
declare function WinJS$Navigation$onbeforenavigate(
  eventInfo: CustomEvent
): void;

/**
 * Occurs after navigation has taken place.
 * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: location, state.
 */
declare function WinJS$Navigation$onnavigated(eventInfo: CustomEvent): void;

/**
 * Occurs when navigation is taking place.
 * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: location, state.
 */
declare function WinJS$Navigation$onnavigating(eventInfo: CustomEvent): void;

declare var npm$namespace$WinJS$Resources: {
  addEventListener: typeof WinJS$Resources$addEventListener,
  dispatchEvent: typeof WinJS$Resources$dispatchEvent,
  getString: typeof WinJS$Resources$getString,
  processAll: typeof WinJS$Resources$processAll,
  removeEventListener: typeof WinJS$Resources$removeEventListener,
  oncontextchanged: typeof WinJS$Resources$oncontextchanged
};

/**
 * Registers an event handler for the specified event. Use this method to register for events that are related to resources, such as when the app's language, scale, or contrast changes.
 * @param type The name of the event to handle.
 * @param listener The listener (event handler function) to associate with the event.
 * @param useCapture Set to true to register the listener for the capturing phase; otherwise, set to false to register the listener for the bubbling phase.
 */
declare function WinJS$Resources$addEventListener(
  type: string,
  listener: Function,
  useCapture?: boolean
): void;

/**
 * Raises an event of the specified type and with the specified additional properties.
 * @param type The name of the event to raise.
 * @param details The set of additional properties to attach to the event object.
 */
declare function WinJS$Resources$dispatchEvent(
  type: string,
  details: any
): void;

/**
 * Retrieves the resource string that has the specified resource identifier.
 * @param resourceId The resource ID of the string to retrieve.
 * @returns An object that can contain these properties: value, empty, lang.
 */
declare function WinJS$Resources$getString(
  resourceId: string
): {
  value: string,
  empty?: boolean,
  lang?: string
};

/**
 * Processes data-win-res attributes on elements and replaces attributes and properties with resource strings.
 * @param rootElement The element to process. The element and its child elements will be processed. If an element isn't specified, the entire document is processed.
 */
declare function WinJS$Resources$processAll(
  rootElement?: HTMLElement
): WinJS$Promise<void>;

/**
 * Removes an event listener that the addEventListener method registered.
 * @param type The name of the event that the event listener is registered for.
 * @param listener The listener (event handler function) to remove.
 * @param useCapture Set to true to remove the capturing phase listener; set to false to remove the bubbling phase listener.
 */
declare function WinJS$Resources$removeEventListener(
  type: string,
  listener: Function,
  useCapture?: boolean
): void;

/**
 * Occurs when the user changes the system's language or contrast, or the scale of the display, or when the user changes any of the items in the current context's qualifier values list. For more info about the current context's qualifier values list, see the Remarks section.
 * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.qualifier, detail.changed.
 */
declare function WinJS$Resources$oncontextchanged(eventInfo: CustomEvent): void;

declare var npm$namespace$WinJS$UI: {
  TrackTabBehavior: typeof npm$namespace$WinJS$UI$TrackTabBehavior
};

declare var npm$namespace$WinJS$UI$TrackTabBehavior: {
  attach: typeof WinJS$UI$TrackTabBehavior$attach,
  detach: typeof WinJS$UI$TrackTabBehavior$detach
};

/**
 * Sets the tab order for the specified element within its container.
 * @param element The element to update.
 * @param tabIndex The index value of the element within its container.
 */
declare function WinJS$UI$TrackTabBehavior$attach(
  element: HTMLElement,
  tabIndex: number
): void;

/**
 * Removes the tab order information from the specified element.
 * @param element The element to remove tab information from.
 */
declare function WinJS$UI$TrackTabBehavior$detach(element: HTMLElement): void;

declare var npm$namespace$WinJS$Utilities: {
  Scheduler: typeof npm$namespace$WinJS$Utilities$Scheduler
};

declare var npm$namespace$WinJS$Utilities$Scheduler: {
  createOwnerToken: typeof WinJS$Utilities$Scheduler$createOwnerToken,
  execHigh: typeof WinJS$Utilities$Scheduler$execHigh,
  retrieveState: typeof WinJS$Utilities$Scheduler$retrieveState,
  requestDrain: typeof WinJS$Utilities$Scheduler$requestDrain,
  schedule: typeof WinJS$Utilities$Scheduler$schedule,
  schedulePromiseAboveNormal: typeof WinJS$Utilities$Scheduler$schedulePromiseAboveNormal,
  schedulePromiseBelowNormal: typeof WinJS$Utilities$Scheduler$schedulePromiseBelowNormal,
  schedulePromiseHigh: typeof WinJS$Utilities$Scheduler$schedulePromiseHigh,
  schedulePromiseIdle: typeof WinJS$Utilities$Scheduler$schedulePromiseIdle,
  schedulePromiseNormal: typeof WinJS$Utilities$Scheduler$schedulePromiseNormal,
  currentPriority: typeof WinJS$Utilities$Scheduler$currentPriority,
  Priority: typeof WinJS$Utilities$Scheduler$Priority
};

/**
 * Represents a priority for a job managed by the Scheduler.
 */

declare var WinJS$Utilities$Scheduler$Priority: {|
  +aboveNormal: 0, // 0
  +belowNormal: 1, // 1
  +high: 2, // 2
  +idle: 3, // 3
  +max: 4, // 4
  +min: 5, // 5
  +normal: 6 // 6
|};

/**
 * Represents a work item that's executed by the Scheduler.
 */
declare interface WinJS$Utilities$Scheduler$IJob {
  /**
   * Cancels the job.
   */
  cancel(): void;

  /**
   * Pauses the job.
   */
  pause(): void;

  /**
   * Resumes the job.
   */
  resume(): void;

  /**
   * Gets a value that indicates whether the job has successfully completed.
   */
  completed: boolean;

  /**
   * Gets the unique numeric identifier assigned to the job.
   */
  id: number;

  /**
   * Gets or sets the name of the job.
   */
  name: string;

  /**
   * Gets or sets the owner of the job.
   */
  owner: Scheduler$IOwnerToken;

  /**
   * Gets or sets the priority of the job.
   */
  priority: WinJS$Utilities$Scheduler$Priority;
}

/**
 * Provides a control mechanism that allows a job to cooperatively yield. This object is passed to your work function when you schedule it.
 */
declare interface WinJS$Utilities$Scheduler$IJobInfo {
  /**
   * Uses a Promise to determine how long the scheduler should wait before rescheduling the job after it yields.
   * @param promise Once the work item yields, the scheduler will wait for this Promise to complete before rescheduling the job.
   */
  setPromise(promise: WinJS$Promise<any>): void;

  /**
   * Specifies the next unit of work to run once this job yields.
   * @param work The next unit of work to run once this job yields.
   */
  setWork(work: Function): void;

  /**
   * Gets the work item associated with this IJobInfo.
   */
  job: WinJS$Utilities$Scheduler$IJob;

  /**
   * Gets a value that specifies whether the job should yield.
   */
  shouldYield: boolean;
}

/**
 * Represents an object that owns jobs. You can use this object to cancel a set of jobs.
 */
declare interface WinJS$Utilities$Scheduler$IOwnerToken {
  /**
   * Synchronously cancels the job that this token owns, including paused and blocked jobs.
   */
  cancelAll(): void;
}

/**
 * Gets the current priority at which the caller is executing.
 */
declare var WinJS$Utilities$Scheduler$currentPriority: WinJS$Utilities$Scheduler$Priority;

/**
 * Creates and returns a new IOwnerToken which can be set to the owner property of one or more jobs.
 * @returns A new IOwnerToken which can be set to the owner property of one or more jobs.
 */
declare function WinJS$Utilities$Scheduler$createOwnerToken(): WinJS$Utilities$Scheduler$IOwnerToken;

/**
 * Runs the specified callback in a high priority context.
 * @param callback The callback to run in a high priority callback.
 * @returns The return value of the callback.
 */
declare function WinJS$Utilities$Scheduler$execHigh<U>(callback: () => U): U;

/**
 * Returns a string representation of the scheduler's state for diagnostic purposes. The jobs and drain requests are displayed in the order in which they are currently expected to be processed. The current job and drain request are marked by an asterisk.
 * @returns A string representation of the scheduler's state for diagnostic purposes. The jobs and drain requests are displayed in the order in which they are currently expected to be processed. The current job and drain request are marked by an asterisk.
 */
declare function WinJS$Utilities$Scheduler$retrieveState(): string;

/**
 * Runs jobs in the scheduler without timeslicing until all jobs at the specified priority and higher have executed.
 * @param priority The priority to which the scheduler should drain. The default is -15.
 * @param name An optional description of the drain request for diagnostics.
 * @returns A Promise which completes when the drain has finished. Canceling this Promise cancels the drain request. This Promise will never enter an error state.
 */
declare function WinJS$Utilities$Scheduler$requestDrain(
  priority?: WinJS$Utilities$Scheduler$Priority,
  name?: string
): WinJS$Promise<any>;

/**
 * Schedules the specified function to execute asynchronously.
 * @param work A function that represents the work item to be scheduled. When called the work item will receive as its first argument an object which allows the work item to ask the scheduler if it should yield cooperatively and if so allows the work item to either provide a function to be run as a continuation or a WinJS.Promise which will when complete provide a function to run as a continuation. Provide these fields for the object: shouldYield, setWork(work), setPromise(promise), job.
 * @param priority The priority of the work item. If you don't specify a priority, it defaults to WinJS.Utilities.Scheduler.Priority.normal.
 * @param thisArg A "this" instance to be bound to the work item. The default value is null.
 * @param name A description of the work item for diagnostics. The default value is an empty string.
 * @returns The job instance that represents this work item.
 */
declare function WinJS$Utilities$Scheduler$schedule(
  work: (jobInfo: WinJS$Utilities$Scheduler$IJobInfo) => any,
  priority?: WinJS$Utilities$Scheduler$Priority,
  thisArg?: any,
  name?: string
): WinJS$Utilities$Scheduler$IJob;

/**
 * Schedules a job to complete the returned Promise at WinJS.Utilities.Scheduler.Priority.aboveNormal priority.
 * @param promiseValue The value returned by the completed Promise.
 * @param jobName A string that describes the job for diagnostic purposes.
 * @returns A Promise that completes within a job of aboveNormal priority.
 */
declare function WinJS$Utilities$Scheduler$schedulePromiseAboveNormal<U>(
  promiseValue?: U,
  jobName?: string
): WinJS$Promise<U>;

/**
 * Schedules a job to complete the returned Promise at WinJS.Utilities.Scheduler.Priority.belowNormal priority.
 * @param promiseValue The value returned by the completed Promise.
 * @param jobName A string that describes the job for diagnostic purposes.
 * @returns A Promise that completes within a job of belowNormal priority.
 */
declare function WinJS$Utilities$Scheduler$schedulePromiseBelowNormal<U>(
  promiseValue?: U,
  jobName?: string
): WinJS$Promise<U>;

/**
 * Schedules a job to complete the returned Promise at WinJS.Utilities.Scheduler.Priority.high priority.
 * @param promiseValue The value returned by the completed Promise.
 * @param jobName A string that describes the job for diagnostic purposes.
 * @returns A Promise that completes within a job of high priority.
 */
declare function WinJS$Utilities$Scheduler$schedulePromiseHigh<U>(
  promiseValue?: U,
  jobName?: string
): WinJS$Promise<U>;

/**
 * Schedules a job to complete the returned Promise at WinJS.Utilities.Scheduler.Priority.Idle priority.
 * @param promiseValue The value returned by the completed Promise.
 * @param jobName A string that describes the job for diagnostic purposes.
 * @returns A Promise that completes within a job of idle priority.
 */
declare function WinJS$Utilities$Scheduler$schedulePromiseIdle<U>(
  promiseValue?: U,
  jobName?: string
): WinJS$Promise<U>;

/**
 * Schedules a job to complete the returned Promise at WinJS.Utilities.Scheduler.Priority.normal priority.
 * @param promiseValue The value returned by the completed Promise.
 * @param jobName A string that describes the job for diagnostic purposes.
 * @returns A Promise that completes within a job of normal priority.
 */
declare function WinJS$Utilities$Scheduler$schedulePromiseNormal<U>(
  promiseValue?: U,
  jobName?: string
): WinJS$Promise<U>;
declare module "winjs" {
  declare export default typeof WinJS;
}
