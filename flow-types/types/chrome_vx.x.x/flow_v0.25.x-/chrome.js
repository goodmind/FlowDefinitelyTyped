declare interface Window {
  chrome: typeof chrome;
}
declare var chrome: typeof npm$namespace$chrome;

declare var npm$namespace$chrome: {
  accessibilityFeatures: typeof npm$namespace$chrome$accessibilityFeatures,
  alarms: typeof npm$namespace$chrome$alarms,
  browser: typeof npm$namespace$chrome$browser,
  bookmarks: typeof npm$namespace$chrome$bookmarks,
  browserAction: typeof npm$namespace$chrome$browserAction,
  browsingData: typeof npm$namespace$chrome$browsingData,
  commands: typeof npm$namespace$chrome$commands,
  contentSettings: typeof npm$namespace$chrome$contentSettings,
  contextMenus: typeof npm$namespace$chrome$contextMenus,
  cookies: typeof npm$namespace$chrome$cookies,
  _debugger: typeof npm$namespace$chrome$_debugger,
  declarativeContent: typeof npm$namespace$chrome$declarativeContent,
  declarativeWebRequest: typeof npm$namespace$chrome$declarativeWebRequest,
  desktopCapture: typeof npm$namespace$chrome$desktopCapture,
  devtools: typeof npm$namespace$chrome$devtools,
  documentScan: typeof npm$namespace$chrome$documentScan,
  downloads: typeof npm$namespace$chrome$downloads,
  enterprise: typeof npm$namespace$chrome$enterprise,
  extension: typeof npm$namespace$chrome$extension,
  fileBrowserHandler: typeof npm$namespace$chrome$fileBrowserHandler,
  fileSystemProvider: typeof npm$namespace$chrome$fileSystemProvider,
  fontSettings: typeof npm$namespace$chrome$fontSettings,
  gcm: typeof npm$namespace$chrome$gcm,
  history: typeof npm$namespace$chrome$history,
  i18n: typeof npm$namespace$chrome$i18n,
  identity: typeof npm$namespace$chrome$identity,
  idle: typeof npm$namespace$chrome$idle,
  input: typeof npm$namespace$chrome$input,
  management: typeof npm$namespace$chrome$management,
  networking: typeof npm$namespace$chrome$networking,
  notifications: typeof npm$namespace$chrome$notifications,
  omnibox: typeof npm$namespace$chrome$omnibox,
  pageAction: typeof npm$namespace$chrome$pageAction,
  pageCapture: typeof npm$namespace$chrome$pageCapture,
  permissions: typeof npm$namespace$chrome$permissions,
  platformKeys: typeof npm$namespace$chrome$platformKeys,
  power: typeof npm$namespace$chrome$power,
  printerProvider: typeof npm$namespace$chrome$printerProvider,
  privacy: typeof npm$namespace$chrome$privacy,
  proxy: typeof npm$namespace$chrome$proxy,
  serial: typeof npm$namespace$chrome$serial,
  runtime: typeof npm$namespace$chrome$runtime,
  scriptBadge: typeof npm$namespace$chrome$scriptBadge,
  sessions: typeof npm$namespace$chrome$sessions,
  storage: typeof npm$namespace$chrome$storage,
  socket: typeof npm$namespace$chrome$socket,
  system: typeof npm$namespace$chrome$system,
  tabCapture: typeof npm$namespace$chrome$tabCapture,
  tabs: typeof npm$namespace$chrome$tabs,
  topSites: typeof npm$namespace$chrome$topSites,
  tts: typeof npm$namespace$chrome$tts,
  ttsEngine: typeof npm$namespace$chrome$ttsEngine,
  vpnProvider: typeof npm$namespace$chrome$vpnProvider,
  wallpaper: typeof npm$namespace$chrome$wallpaper,
  webNavigation: typeof npm$namespace$chrome$webNavigation,
  webRequest: typeof npm$namespace$chrome$webRequest,
  webstore: typeof npm$namespace$chrome$webstore,
  windows: typeof npm$namespace$chrome$windows
};

declare var npm$namespace$chrome$accessibilityFeatures: {
  spokenFeedback: typeof chrome$accessibilityFeatures$spokenFeedback,
  largeCursor: typeof chrome$accessibilityFeatures$largeCursor,
  stickyKeys: typeof chrome$accessibilityFeatures$stickyKeys,
  highContrast: typeof chrome$accessibilityFeatures$highContrast,
  screenMagnifier: typeof chrome$accessibilityFeatures$screenMagnifier,
  autoclick: typeof chrome$accessibilityFeatures$autoclick,
  virtualKeyboard: typeof chrome$accessibilityFeatures$virtualKeyboard,
  animationPolicy: typeof chrome$accessibilityFeatures$animationPolicy
};
export interface chrome$accessibilityFeatures$AccessibilityFeaturesGetArg {
  /**
   * Optional. Whether to return the value that applies to the incognito session (default false).
   */
  incognito?: boolean;
}

export interface chrome$accessibilityFeatures$AccessibilityFeaturesCallbackArg {
  /**
   * The value of the setting.
   */
  value: any;

  /**
   * One of
   * • not_controllable: cannot be controlled by any extension
   * • controlled_by_other_extensions: controlled by extensions with higher precedence
   * • controllable_by_this_extension: can be controlled by this extension
   * • controlled_by_this_extension: controlled by this extension
   */
  levelOfControl: string;

  /**
   * Optional. Whether the effective value is specific to the incognito session. This property will only be present if the incognito property in the details parameter of get() was true.
   */
  incognitoSpecific?: boolean;
}

export interface chrome$accessibilityFeatures$AccessibilityFeaturesSetArg {
  /**
   * The value of the setting.
   * Note that every setting has a specific value type, which is described together with the setting. An extension should not set a value of a different type.
   */
  value: any;

  /**
   * Optional.
   *  The scope of the ChromeSetting. One of
   * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
   * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
   * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
   * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
   */
  scope?: string;
}

export interface chrome$accessibilityFeatures$AccessibilityFeaturesClearArg {
  /**
   * Optional.
   *  The scope of the ChromeSetting. One of
   * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
   * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
   * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
   * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
   */
  scope?: string;
}

export interface chrome$accessibilityFeatures$AccessibilityFeaturesSetting {
  /**
   * Gets the value of a setting.
   * @param details Which setting to consider.
   * @param callback The callback parameter should be a function that looks like this:
   * function(object details) {...};
   */
  get(
    details: chrome$accessibilityFeatures$AccessibilityFeaturesGetArg,
    callback: (
      details: chrome$accessibilityFeatures$AccessibilityFeaturesCallbackArg
    ) => void
  ): void;

  /**
   * Sets the value of a setting.
   * @param details Which setting to change.
   * @param callback Called at the completion of the set operation.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function() {...};
   */
  set(
    details: chrome$accessibilityFeatures$AccessibilityFeaturesSetArg,
    callback?: () => void
  ): void;

  /**
   * Clears the setting, restoring any default value.
   * @param details Which setting to clear.
   * @param callback Called at the completion of the clear operation.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function() {...};
   */
  clear(
    details: chrome$accessibilityFeatures$AccessibilityFeaturesClearArg,
    callback?: () => void
  ): void;
}

declare export var chrome$accessibilityFeatures$spokenFeedback: chrome$accessibilityFeatures$AccessibilityFeaturesSetting;

declare export var chrome$accessibilityFeatures$largeCursor: chrome$accessibilityFeatures$AccessibilityFeaturesSetting;

declare export var chrome$accessibilityFeatures$stickyKeys: chrome$accessibilityFeatures$AccessibilityFeaturesSetting;

declare export var chrome$accessibilityFeatures$highContrast: chrome$accessibilityFeatures$AccessibilityFeaturesSetting;

declare export var chrome$accessibilityFeatures$screenMagnifier: chrome$accessibilityFeatures$AccessibilityFeaturesSetting;

declare export var chrome$accessibilityFeatures$autoclick: chrome$accessibilityFeatures$AccessibilityFeaturesSetting;

declare export var chrome$accessibilityFeatures$virtualKeyboard: chrome$accessibilityFeatures$AccessibilityFeaturesSetting;

declare export var chrome$accessibilityFeatures$animationPolicy: chrome$accessibilityFeatures$AccessibilityFeaturesSetting;

declare var npm$namespace$chrome$alarms: {
  create: typeof chrome$alarms$create,
  getAll: typeof chrome$alarms$getAll,
  clearAll: typeof chrome$alarms$clearAll,
  clear: typeof chrome$alarms$clear,
  get: typeof chrome$alarms$get,
  onAlarm: typeof chrome$alarms$onAlarm
};
export interface chrome$alarms$AlarmCreateInfo {
  /**
   * Optional. Length of time in minutes after which the onAlarm event should fire.
   */
  delayInMinutes?: number;

  /**
   * Optional. If set, the onAlarm event should fire every periodInMinutes minutes after the initial event specified by when or delayInMinutes. If not set, the alarm will only fire once.
   */
  periodInMinutes?: number;

  /**
   * Optional. Time at which the alarm should fire, in milliseconds past the epoch (e.g. Date.now() + n).
   */
  when?: number;
}

export interface chrome$alarms$Alarm {
  /**
   * Optional. If not null, the alarm is a repeating alarm and will fire again in periodInMinutes minutes.
   */
  periodInMinutes?: number;

  /**
   * Time at which this alarm was scheduled to fire, in milliseconds past the epoch (e.g. Date.now() + n). For performance reasons, the alarm may have been delayed an arbitrary amount beyond this.
   */
  scheduledTime: number;

  /**
   * Name of this alarm.
   */
  name: string;
}

export type chrome$alarms$AlarmEvent = {} & chrome$events$Event<
  (alarm: chrome$alarms$Alarm) => void
>;

/**
 * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
 * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
 * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
 * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
 */
declare export function chrome$alarms$create(
  alarmInfo: chrome$alarms$AlarmCreateInfo
): void;

/**
 * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
 * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
 * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
 * @param name Optional name to identify this alarm. Defaults to the empty string.
 * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
 */
declare export function chrome$alarms$create(
  name: string,
  alarmInfo: chrome$alarms$AlarmCreateInfo
): void;

/**
 * Gets an array of all the alarms.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of Alarm alarms) {...};
 */
declare export function chrome$alarms$getAll(
  callback: (alarms: chrome$alarms$Alarm[]) => void
): void;

/**
 * Clears all alarms.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean wasCleared) {...};
 */
declare export function chrome$alarms$clearAll(
  callback?: (wasCleared: boolean) => void
): void;

/**
 * Clears the alarm with the given name.
 * @param name The name of the alarm to clear. Defaults to the empty string.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean wasCleared) {...};
 */
declare export function chrome$alarms$clear(
  name?: string,
  callback?: (wasCleared: boolean) => void
): void;

/**
 * Clears the alarm without a name.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean wasCleared) {...};
 */
declare export function chrome$alarms$clear(
  callback: (wasCleared: boolean) => void
): void;

/**
 * Retrieves details about the specified alarm.
 * @param callback The callback parameter should be a function that looks like this:
 * function( Alarm alarm) {...};
 */
declare export function chrome$alarms$get(
  callback: (alarm: chrome$alarms$Alarm) => void
): void;

/**
 * Retrieves details about the specified alarm.
 * @param name The name of the alarm to get. Defaults to the empty string.
 * @param callback The callback parameter should be a function that looks like this:
 * function( Alarm alarm) {...};
 */
declare export function chrome$alarms$get(
  name: string,
  callback: (alarm: chrome$alarms$Alarm) => void
): void;

/**
 * Fired when an alarm has elapsed. Useful for event pages.
 */
declare export var chrome$alarms$onAlarm: chrome$alarms$AlarmEvent;

declare var npm$namespace$chrome$browser: {
  openTab: typeof chrome$browser$openTab
};
export interface chrome$browser$Options {
  /**
   * The URL to navigate to when the new tab is initially opened.
   */
  url: string;
}

/**
 * Opens a new tab in a browser window associated with the current application
 * and Chrome profile. If no browser window for the Chrome profile is opened,
 * a new one is opened prior to creating the new tab.
 * @param options Configures how the tab should be opened.
 * @param callback Called when the tab was successfully
 * created, or failed to be created. If failed, runtime.lastError will be set.
 */
declare export function chrome$browser$openTab(
  options: chrome$browser$Options,
  callback: () => void
): void;

/**
 * Opens a new tab in a browser window associated with the current application
 * and Chrome profile. If no browser window for the Chrome profile is opened,
 * a new one is opened prior to creating the new tab. Since Chrome 42 only.
 * @param options Configures how the tab should be opened.
 */
declare export function chrome$browser$openTab(
  options: chrome$browser$Options
): void;

declare var npm$namespace$chrome$bookmarks: {
  search: typeof chrome$bookmarks$search,
  getTree: typeof chrome$bookmarks$getTree,
  getRecent: typeof chrome$bookmarks$getRecent,
  get: typeof chrome$bookmarks$get,
  create: typeof chrome$bookmarks$create,
  move: typeof chrome$bookmarks$move,
  update: typeof chrome$bookmarks$update,
  remove: typeof chrome$bookmarks$remove,
  getChildren: typeof chrome$bookmarks$getChildren,
  getSubTree: typeof chrome$bookmarks$getSubTree,
  removeTree: typeof chrome$bookmarks$removeTree,
  MAX_WRITE_OPERATIONS_PER_HOUR: typeof chrome$bookmarks$MAX_WRITE_OPERATIONS_PER_HOUR,
  MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: typeof chrome$bookmarks$MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE,
  onRemoved: typeof chrome$bookmarks$onRemoved,
  onImportEnded: typeof chrome$bookmarks$onImportEnded,
  onImportBegan: typeof chrome$bookmarks$onImportBegan,
  onChanged: typeof chrome$bookmarks$onChanged,
  onMoved: typeof chrome$bookmarks$onMoved,
  onCreated: typeof chrome$bookmarks$onCreated,
  onChildrenReordered: typeof chrome$bookmarks$onChildrenReordered
};

/**
 * A node (either a bookmark or a folder) in the bookmark tree. Child nodes are ordered within their parent folder.
 */
export interface chrome$bookmarks$BookmarkTreeNode {
  /**
   * Optional. The 0-based position of this node within its parent folder.
   */
  index?: number;

  /**
   * Optional. When this node was created, in milliseconds since the epoch (new Date(dateAdded)).
   */
  dateAdded?: number;

  /**
   * The text displayed for the node.
   */
  title: string;

  /**
   * Optional. The URL navigated to when a user clicks the bookmark. Omitted for folders.
   */
  url?: string;

  /**
   * Optional. When the contents of this folder last changed, in milliseconds since the epoch.
   */
  dateGroupModified?: number;

  /**
   * The unique identifier for the node. IDs are unique within the current profile, and they remain valid even after the browser is restarted.
   */
  id: string;

  /**
   * Optional. The id of the parent folder. Omitted for the root node.
   */
  parentId?: string;

  /**
   * Optional. An ordered list of children of this node.
   */
  children?: chrome$bookmarks$BookmarkTreeNode[];

  /**
   * Optional.
   *  Since Chrome 37.
   * Indicates the reason why this node is unmodifiable. The managed value indicates that this node was configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user and the extension (default).
   */
  unmodifiable?: any;
}

export interface chrome$bookmarks$BookmarkRemoveInfo {
  index: number;
  parentId: string;
  node: chrome$bookmarks$BookmarkTreeNode;
}

export interface chrome$bookmarks$BookmarkMoveInfo {
  index: number;
  oldIndex: number;
  parentId: string;
  oldParentId: string;
}

export interface chrome$bookmarks$BookmarkChangeInfo {
  url?: string;
  title: string;
}

export interface chrome$bookmarks$BookmarkReorderInfo {
  childIds: string[];
}

export type chrome$bookmarks$BookmarkRemovedEvent = {} & chrome$events$Event<
  (id: string, removeInfo: chrome$bookmarks$BookmarkRemoveInfo) => void
>;

export type chrome$bookmarks$BookmarkImportEndedEvent = {} & chrome$events$Event<
  () => void
>;

export type chrome$bookmarks$BookmarkMovedEvent = {} & chrome$events$Event<
  (id: string, moveInfo: chrome$bookmarks$BookmarkMoveInfo) => void
>;

export type chrome$bookmarks$BookmarkImportBeganEvent = {} & chrome$events$Event<
  () => void
>;

export type chrome$bookmarks$BookmarkChangedEvent = {} & chrome$events$Event<
  (id: string, changeInfo: chrome$bookmarks$BookmarkChangeInfo) => void
>;

export type chrome$bookmarks$BookmarkCreatedEvent = {} & chrome$events$Event<
  (id: string, bookmark: chrome$bookmarks$BookmarkTreeNode) => void
>;

export type chrome$bookmarks$BookmarkChildrenReordered = {} & chrome$events$Event<
  (id: string, reorderInfo: chrome$bookmarks$BookmarkReorderInfo) => void
>;

export interface chrome$bookmarks$BookmarkSearchQuery {
  query?: string;
  url?: string;
  title?: string;
}

export interface chrome$bookmarks$BookmarkCreateArg {
  /**
   * Optional. Defaults to the Other Bookmarks folder.
   */
  parentId?: string;
  index?: number;
  title?: string;
  url?: string;
}

export interface chrome$bookmarks$BookmarkDestinationArg {
  parentId?: string;
  index?: number;
}

export interface chrome$bookmarks$BookmarkChangesArg {
  title?: string;
  url?: string;
}

/**
 * @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome.
 */
declare export var chrome$bookmarks$MAX_WRITE_OPERATIONS_PER_HOUR: number;

/**
 * @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome.
 */
declare export var chrome$bookmarks$MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;

/**
 * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
 * @param query A string of words and quoted phrases that are matched against bookmark URLs and titles.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of BookmarkTreeNode results) {...};
 */
declare export function chrome$bookmarks$search(
  query: string,
  callback: (results: chrome$bookmarks$BookmarkTreeNode[]) => void
): void;

/**
 * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
 * @param query An object with one or more of the properties query, url, and title specified. Bookmarks matching all specified properties will be produced.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of BookmarkTreeNode results) {...};
 */
declare export function chrome$bookmarks$search(
  query: chrome$bookmarks$BookmarkSearchQuery,
  callback: (results: chrome$bookmarks$BookmarkTreeNode[]) => void
): void;

/**
 * Retrieves the entire Bookmarks hierarchy.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of BookmarkTreeNode results) {...};
 */
declare export function chrome$bookmarks$getTree(
  callback: (results: chrome$bookmarks$BookmarkTreeNode[]) => void
): void;

/**
 * Retrieves the recently added bookmarks.
 * @param numberOfItems The maximum number of items to return.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of BookmarkTreeNode results) {...};
 */
declare export function chrome$bookmarks$getRecent(
  numberOfItems: number,
  callback: (results: chrome$bookmarks$BookmarkTreeNode[]) => void
): void;

/**
 * Retrieves the specified BookmarkTreeNode.
 * @param id A single string-valued id
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of BookmarkTreeNode results) {...};
 */
declare export function chrome$bookmarks$get(
  id: string,
  callback: (results: chrome$bookmarks$BookmarkTreeNode[]) => void
): void;

/**
 * Retrieves the specified BookmarkTreeNode.
 * @param idList An array of string-valued ids
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of BookmarkTreeNode results) {...};
 */
declare export function chrome$bookmarks$get(
  idList: string[],
  callback: (results: chrome$bookmarks$BookmarkTreeNode[]) => void
): void;

/**
 * Creates a bookmark or folder under the specified parentId. If url is NULL or missing, it will be a folder.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function( BookmarkTreeNode result) {...};
 */
declare export function chrome$bookmarks$create(
  bookmark: chrome$bookmarks$BookmarkCreateArg,
  callback?: (result: chrome$bookmarks$BookmarkTreeNode) => void
): void;

/**
 * Moves the specified BookmarkTreeNode to the provided location.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function( BookmarkTreeNode result) {...};
 */
declare export function chrome$bookmarks$move(
  id: string,
  destination: chrome$bookmarks$BookmarkDestinationArg,
  callback?: (result: chrome$bookmarks$BookmarkTreeNode) => void
): void;

/**
 * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified properties will be left unchanged. Note: Currently, only 'title' and 'url' are supported.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function( BookmarkTreeNode result) {...};
 */
declare export function chrome$bookmarks$update(
  id: string,
  changes: chrome$bookmarks$BookmarkChangesArg,
  callback?: (result: chrome$bookmarks$BookmarkTreeNode) => void
): void;

/**
 * Removes a bookmark or an empty bookmark folder.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$bookmarks$remove(
  id: string,
  callback?: Function
): void;

/**
 * Retrieves the children of the specified BookmarkTreeNode id.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of BookmarkTreeNode results) {...};
 */
declare export function chrome$bookmarks$getChildren(
  id: string,
  callback: (results: chrome$bookmarks$BookmarkTreeNode[]) => void
): void;

/**
 * Since Chrome 14.
 * Retrieves part of the Bookmarks hierarchy, starting at the specified node.
 * @param id The ID of the root of the subtree to retrieve.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of BookmarkTreeNode results) {...};
 */
declare export function chrome$bookmarks$getSubTree(
  id: string,
  callback: (results: chrome$bookmarks$BookmarkTreeNode[]) => void
): void;

/**
 * Recursively removes a bookmark folder.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$bookmarks$removeTree(
  id: string,
  callback?: Function
): void;

/**
 * Fired when a bookmark or folder is removed. When a folder is removed recursively, a single notification is fired for the folder, and none for its contents.
 */
declare export var chrome$bookmarks$onRemoved: chrome$bookmarks$BookmarkRemovedEvent;

/**
 * Fired when a bookmark import session is ended.
 */
declare export var chrome$bookmarks$onImportEnded: chrome$bookmarks$BookmarkImportEndedEvent;

/**
 * Fired when a bookmark import session is begun. Expensive observers should ignore onCreated updates until onImportEnded is fired. Observers should still handle other notifications immediately.
 */
declare export var chrome$bookmarks$onImportBegan: chrome$bookmarks$BookmarkImportBeganEvent;

/**
 * Fired when a bookmark or folder changes. Note: Currently, only title and url changes trigger this.
 */
declare export var chrome$bookmarks$onChanged: chrome$bookmarks$BookmarkChangedEvent;

/**
 * Fired when a bookmark or folder is moved to a different parent folder.
 */
declare export var chrome$bookmarks$onMoved: chrome$bookmarks$BookmarkMovedEvent;

/**
 * Fired when a bookmark or folder is created.
 */
declare export var chrome$bookmarks$onCreated: chrome$bookmarks$BookmarkCreatedEvent;

/**
 * Fired when the children of a folder have changed their order due to the order being sorted in the UI. This is not called as a result of a move().
 */
declare export var chrome$bookmarks$onChildrenReordered: chrome$bookmarks$BookmarkChildrenReordered;

declare var npm$namespace$chrome$browserAction: {
  enable: typeof chrome$browserAction$enable,
  setBadgeBackgroundColor: typeof chrome$browserAction$setBadgeBackgroundColor,
  setBadgeText: typeof chrome$browserAction$setBadgeText,
  setTitle: typeof chrome$browserAction$setTitle,
  getBadgeText: typeof chrome$browserAction$getBadgeText,
  setPopup: typeof chrome$browserAction$setPopup,
  disable: typeof chrome$browserAction$disable,
  getTitle: typeof chrome$browserAction$getTitle,
  getBadgeBackgroundColor: typeof chrome$browserAction$getBadgeBackgroundColor,
  getPopup: typeof chrome$browserAction$getPopup,
  setIcon: typeof chrome$browserAction$setIcon,
  onClicked: typeof chrome$browserAction$onClicked
};
export interface chrome$browserAction$BadgeBackgroundColorDetails {
  /**
   * An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is [255, 0, 0, 255]. Can also be a string with a CSS value, with opaque red being #FF0000 or #F00.
   */
  color: string | chrome$browserAction$ColorArray;

  /**
   * Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.
   */
  tabId?: number;
}

export interface chrome$browserAction$BadgeTextDetails {
  /**
   * Any number of characters can be passed, but only about four can fit in the space.
   */
  text: string;

  /**
   * Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.
   */
  tabId?: number;
}

export type chrome$browserAction$ColorArray = [number, number, number, number];

export interface chrome$browserAction$TitleDetails {
  /**
   * The string the browser action should display when moused over.
   */
  title: string;

  /**
   * Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.
   */
  tabId?: number;
}

export interface chrome$browserAction$TabDetails {
  /**
   * Optional. Specify the tab to get the information. If no tab is specified, the non-tab-specific information is returned.
   */
  tabId?: number;
}

export interface chrome$browserAction$TabIconDetails {
  /**
   * Optional. Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
   */
  path?: any;

  /**
   * Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.
   */
  tabId?: number;

  /**
   * Optional. Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
   */
  imageData?:
    | ImageData
    | {
        [index: number]: ImageData
      };
}

export interface chrome$browserAction$PopupDetails {
  /**
   * Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.
   */
  tabId?: number;

  /**
   * The html file to show in a popup. If set to the empty string (''), no popup is shown.
   */
  popup: string;
}

export type chrome$browserAction$BrowserClickedEvent = {} & chrome$events$Event<
  (tab: chrome$tabs$Tab) => void
>;

/**
 * Since Chrome 22.
 * Enables the browser action for a tab. By default, browser actions are enabled.
 * @param tabId The id of the tab for which you want to modify the browser action.
 * @param callback Supported since Chrome 67
 */
declare export function chrome$browserAction$enable(
  tabId?: number,
  callback?: () => void
): void;

/**
 * Sets the background color for the badge.
 * @param callback Supported since Chrome 67
 */
declare export function chrome$browserAction$setBadgeBackgroundColor(
  details: chrome$browserAction$BadgeBackgroundColorDetails,
  callback?: () => void
): void;

/**
 * Sets the badge text for the browser action. The badge is displayed on top of the icon.
 * @param callback Supported since Chrome 67
 */
declare export function chrome$browserAction$setBadgeText(
  details: chrome$browserAction$BadgeTextDetails,
  callback?: () => void
): void;

/**
 * Sets the title of the browser action. This shows up in the tooltip.
 * @param callback Supported since Chrome 67
 */
declare export function chrome$browserAction$setTitle(
  details: chrome$browserAction$TitleDetails,
  callback?: () => void
): void;

/**
 * Since Chrome 19.
 * Gets the badge text of the browser action. If no tab is specified, the non-tab-specific badge text is returned.
 * @param callback Supported since Chrome 67
 */
declare export function chrome$browserAction$getBadgeText(
  details: chrome$browserAction$TabDetails,
  callback: (result: string) => void
): void;

/**
 * Sets the html document to be opened as a popup when the user clicks on the browser action's icon.
 * @param callback Supported since Chrome 67
 */
declare export function chrome$browserAction$setPopup(
  details: chrome$browserAction$PopupDetails,
  callback?: () => void
): void;

/**
 * Since Chrome 22.
 * Disables the browser action for a tab.
 * @param tabId The id of the tab for which you want to modify the browser action.
 * @param callback Supported since Chrome 67
 */
declare export function chrome$browserAction$disable(
  tabId?: number,
  callback?: () => void
): void;

/**
 * Since Chrome 19.
 * Gets the title of the browser action.
 * @param callback The callback parameter should be a function that looks like this:
 * function(string result) {...};
 */
declare export function chrome$browserAction$getTitle(
  details: chrome$browserAction$TabDetails,
  callback: (result: string) => void
): void;

/**
 * Since Chrome 19.
 * Gets the background color of the browser action.
 * @param callback The callback parameter should be a function that looks like this:
 * function( ColorArray result) {...};
 */
declare export function chrome$browserAction$getBadgeBackgroundColor(
  details: chrome$browserAction$TabDetails,
  callback: (result: chrome$browserAction$ColorArray) => void
): void;

/**
 * Since Chrome 19.
 * Gets the html document set as the popup for this browser action.
 * @param callback The callback parameter should be a function that looks like this:
 * function(string result) {...};
 */
declare export function chrome$browserAction$getPopup(
  details: chrome$browserAction$TabDetails,
  callback: (result: string) => void
): void;

/**
 * Sets the icon for the browser action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the path or the imageData property must be specified.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browserAction$setIcon(
  details: chrome$browserAction$TabIconDetails,
  callback?: Function
): void;

/**
 * Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup.
 */
declare export var chrome$browserAction$onClicked: chrome$browserAction$BrowserClickedEvent;

declare var npm$namespace$chrome$browsingData: {
  settings: typeof chrome$browsingData$settings,
  removePluginData: typeof chrome$browsingData$removePluginData,
  removeFormData: typeof chrome$browsingData$removeFormData,
  removeFileSystems: typeof chrome$browsingData$removeFileSystems,
  remove: typeof chrome$browsingData$remove,
  removePasswords: typeof chrome$browsingData$removePasswords,
  removeCookies: typeof chrome$browsingData$removeCookies,
  removeWebSQL: typeof chrome$browsingData$removeWebSQL,
  removeAppcache: typeof chrome$browsingData$removeAppcache,
  removeDownloads: typeof chrome$browsingData$removeDownloads,
  removeLocalStorage: typeof chrome$browsingData$removeLocalStorage,
  removeCache: typeof chrome$browsingData$removeCache,
  removeHistory: typeof chrome$browsingData$removeHistory,
  removeIndexedDB: typeof chrome$browsingData$removeIndexedDB
};
export interface chrome$browsingData$OriginTypes {
  /**
   * Optional. Websites that have been installed as hosted applications (be careful!).
   */
  protectedWeb?: boolean;

  /**
   * Optional. Extensions and packaged applications a user has installed (be _really_ careful!).
   */
  extension?: boolean;

  /**
   * Optional. Normal websites.
   */
  unprotectedWeb?: boolean;
}

/**
 * Options that determine exactly what data will be removed.
 */
export interface chrome$browsingData$RemovalOptions {
  /**
   * Optional.
   *  Since Chrome 21.
   * An object whose properties specify which origin types ought to be cleared. If this object isn't specified, it defaults to clearing only "unprotected" origins. Please ensure that you really want to remove application data before adding 'protectedWeb' or 'extensions'.
   */
  originTypes?: chrome$browsingData$OriginTypes;

  /**
   * Optional. Remove data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the getTime method of the JavaScript Date object). If absent, defaults to 0 (which would remove all browsing data).
   */
  since?: number;
}

/**
 * Since Chrome 27.
 * A set of data types. Missing data types are interpreted as false.
 */
export interface chrome$browsingData$DataTypeSet {
  /**
   * Optional. Websites' WebSQL data.
   */
  webSQL?: boolean;

  /**
   * Optional. Websites' IndexedDB data.
   */
  indexedDB?: boolean;

  /**
   * Optional. The browser's cookies.
   */
  cookies?: boolean;

  /**
   * Optional. Stored passwords.
   */
  passwords?: boolean;

  /**
   * Optional. Server-bound certificates.
   */
  serverBoundCertificates?: boolean;

  /**
   * Optional. The browser's download list.
   */
  downloads?: boolean;

  /**
   * Optional. The browser's cache. Note: when removing data, this clears the entire cache: it is not limited to the range you specify.
   */
  cache?: boolean;

  /**
   * Optional. Websites' appcaches.
   */
  appcache?: boolean;

  /**
   * Optional. Websites' file systems.
   */
  fileSystems?: boolean;

  /**
   * Optional. Plugins' data.
   */
  pluginData?: boolean;

  /**
   * Optional. Websites' local storage data.
   */
  localStorage?: boolean;

  /**
   * Optional. The browser's stored form data.
   */
  formData?: boolean;

  /**
   * Optional. The browser's history.
   */
  history?: boolean;

  /**
   * Optional.
   *  Since Chrome 39.
   * Service Workers.
   */
  serviceWorkers?: boolean;
}

export interface chrome$browsingData$SettingsCallback {
  options: chrome$browsingData$RemovalOptions;

  /**
   * All of the types will be present in the result, with values of true if they are both selected to be removed and permitted to be removed, otherwise false.
   */
  dataToRemove: chrome$browsingData$DataTypeSet;

  /**
   * All of the types will be present in the result, with values of true if they are permitted to be removed (e.g., by enterprise policy) and false if not.
   */
  dataRemovalPermitted: chrome$browsingData$DataTypeSet;
}

/**
 * Since Chrome 26.
 * Reports which types of data are currently selected in the 'Clear browsing data' settings UI. Note: some of the data types included in this API are not available in the settings UI, and some UI settings control more than one data type listed here.
 * @param callback The callback parameter should be a function that looks like this:
 * function(object result) {...};
 */
declare export function chrome$browsingData$settings(
  callback: (result: chrome$browsingData$SettingsCallback) => void
): void;

/**
 * Clears plugins' data.
 * @param callback Called when plugins' data has been cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removePluginData(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

/**
 * Clears the browser's stored form data (autofill).
 * @param callback Called when the browser's form data has been cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removeFormData(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

/**
 * Clears websites' file system data.
 * @param callback Called when websites' file systems have been cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removeFileSystems(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

/**
 * Clears various types of browsing data stored in a user's profile.
 * @param dataToRemove The set of data types to remove.
 * @param callback Called when deletion has completed.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$remove(
  options: chrome$browsingData$RemovalOptions,
  dataToRemove: chrome$browsingData$DataTypeSet,
  callback?: () => void
): void;

/**
 * Clears the browser's stored passwords.
 * @param callback Called when the browser's passwords have been cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removePasswords(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

/**
 * Clears the browser's cookies and server-bound certificates modified within a particular timeframe.
 * @param callback Called when the browser's cookies and server-bound certificates have been cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removeCookies(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

/**
 * Clears websites' WebSQL data.
 * @param callback Called when websites' WebSQL databases have been cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removeWebSQL(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

/**
 * Clears websites' appcache data.
 * @param callback Called when websites' appcache data has been cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removeAppcache(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

/**
 * Clears the browser's list of downloaded files (not the downloaded files themselves).
 * @param callback Called when the browser's list of downloaded files has been cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removeDownloads(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

/**
 * Clears websites' local storage data.
 * @param callback Called when websites' local storage has been cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removeLocalStorage(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

/**
 * Clears the browser's cache.
 * @param callback Called when the browser's cache has been cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removeCache(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

/**
 * Clears the browser's history.
 * @param callback Called when the browser's history has cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removeHistory(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

/**
 * Clears websites' IndexedDB data.
 * @param callback Called when websites' IndexedDB data has been cleared.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$browsingData$removeIndexedDB(
  options: chrome$browsingData$RemovalOptions,
  callback?: () => void
): void;

declare var npm$namespace$chrome$commands: {
  getAll: typeof chrome$commands$getAll,
  onCommand: typeof chrome$commands$onCommand
};
export interface chrome$commands$Command {
  /**
   * Optional. The name of the Extension Command
   */
  name?: string;

  /**
   * Optional. The Extension Command description
   */
  description?: string;

  /**
   * Optional. The shortcut active for this command, or blank if not active.
   */
  shortcut?: string;
}

export type chrome$commands$CommandEvent = {} & chrome$events$Event<
  (command: string) => void
>;

/**
 * Returns all the registered extension commands for this extension and their shortcut (if active).
 * @param callback Called to return the registered commands.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(array of Command commands) {...};
 */
declare export function chrome$commands$getAll(
  callback: (commands: chrome$commands$Command[]) => void
): void;

/**
 * Fired when a registered command is activated using a keyboard shortcut.
 */
declare export var chrome$commands$onCommand: chrome$commands$CommandEvent;

declare var npm$namespace$chrome$contentSettings: {
  cookies: typeof chrome$contentSettings$cookies,
  popups: typeof chrome$contentSettings$popups,
  javascript: typeof chrome$contentSettings$javascript,
  notifications: typeof chrome$contentSettings$notifications,
  plugins: typeof chrome$contentSettings$plugins,
  images: typeof chrome$contentSettings$images,
  location: typeof chrome$contentSettings$location,
  fullscreen: typeof chrome$contentSettings$fullscreen,
  mouselock: typeof chrome$contentSettings$mouselock,
  microphone: typeof chrome$contentSettings$microphone,
  camera: typeof chrome$contentSettings$camera,
  unsandboxedPlugins: typeof chrome$contentSettings$unsandboxedPlugins,
  automaticDownloads: typeof chrome$contentSettings$automaticDownloads
};
declare type chrome$contentSettings$ScopeEnum =
  | "regular"
  | "incognito_session_only";

export interface chrome$contentSettings$ClearDetails {
  /**
   * Optional.
   *  Where to clear the setting (default: regular).
   * The scope of the ContentSetting. One of
   * * regular: setting for regular profile (which is inherited by the incognito profile if not overridden elsewhere),
   * * incognito_session_only: setting for incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular settings).
   */
  scope?: chrome$contentSettings$ScopeEnum;
}

export interface chrome$contentSettings$SetDetails {
  /**
   * Optional. The resource identifier for the content type.
   */
  resourceIdentifier?: chrome$contentSettings$ResourceIdentifier;

  /**
   * The setting applied by this rule. See the description of the individual ContentSetting objects for the possible values.
   */
  setting: any;

  /**
   * Optional. The pattern for the secondary URL. Defaults to matching all URLs. For details on the format of a pattern, see Content Setting Patterns.
   */
  secondaryPattern?: string;

  /**
   * Optional. Where to set the setting (default: regular).
   */
  scope?: chrome$contentSettings$ScopeEnum;

  /**
   * The pattern for the primary URL. For details on the format of a pattern, see Content Setting Patterns.
   */
  primaryPattern: string;
}

export type chrome$contentSettings$CookieSetDetails = {
  setting: "allow" | "block" | "session_only"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$ImagesSetDetails = {
  setting: "allow" | "block"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$JavascriptSetDetails = {
  setting: "allow" | "block"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$LocationSetDetails = {
  setting: "allow" | "block" | "ask"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$PluginsSetDetails = {
  setting: "allow" | "block" | "detect_important_content"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$PopupsSetDetails = {
  setting: "allow" | "block"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$NotificationsSetDetails = {
  setting: "allow" | "block" | "ask"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$FullscreenSetDetails = {
  setting: "allow"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$MouselockSetDetails = {
  setting: "allow"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$MicrophoneSetDetails = {
  setting: "allow" | "block" | "ask"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$CameraSetDetails = {
  setting: "allow" | "block" | "ask"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$PpapiBrokerSetDetails = {
  setting: "allow" | "block" | "ask"
} & chrome$contentSettings$SetDetails;

export type chrome$contentSettings$MultipleAutomaticDownloadsSetDetails = {
  setting: "allow" | "block" | "ask"
} & chrome$contentSettings$SetDetails;

export interface chrome$contentSettings$GetDetails {
  /**
   * Optional. The secondary URL for which the content setting should be retrieved. Defaults to the primary URL. Note that the meaning of a secondary URL depends on the content type, and not all content types use secondary URLs.
   */
  secondaryUrl?: string;

  /**
   * Optional. A more specific identifier of the type of content for which the settings should be retrieved.
   */
  resourceIdentifier?: chrome$contentSettings$ResourceIdentifier;

  /**
   * Optional. Whether to check the content settings for an incognito session. (default false)
   */
  incognito?: boolean;

  /**
   * The primary URL for which the content setting should be retrieved. Note that the meaning of a primary URL depends on the content type.
   */
  primaryUrl: string;
}

export interface chrome$contentSettings$ReturnedDetails {
  /**
   * The content setting. See the description of the individual ContentSetting objects for the possible values.
   */
  setting: any;
}

export interface chrome$contentSettings$ContentSetting {
  /**
   * Clear all content setting rules set by this extension.
   * @param callback If you specify the callback parameter, it should be a function that looks like this:
   * function() {...};
   */
  clear(
    details: chrome$contentSettings$ClearDetails,
    callback?: () => void
  ): void;

  /**
   * Applies a new content setting rule.
   * @param callback If you specify the callback parameter, it should be a function that looks like this:
   * function() {...};
   */
  set(details: chrome$contentSettings$SetDetails, callback?: () => void): void;

  /**
   * @param callback The callback parameter should be a function that looks like this:
   * function(array of ResourceIdentifier resourceIdentifiers) {...};
   * Parameter resourceIdentifiers: A list of resource identifiers for this content type, or undefined if this content type does not use resource identifiers.
   */
  getResourceIdentifiers(
    callback: (
      resourceIdentifiers?: chrome$contentSettings$ResourceIdentifier[]
    ) => void
  ): void;

  /**
   * Gets the current content setting for a given pair of URLs.
   * @param callback The callback parameter should be a function that looks like this:
   * function(object details) {...};
   */
  get(
    details: chrome$contentSettings$GetDetails,
    callback: (details: chrome$contentSettings$ReturnedDetails) => void
  ): void;
}

export type chrome$contentSettings$CookieContentSetting = {
  set(
    details: chrome$contentSettings$CookieSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$PopupsContentSetting = {
  set(
    details: chrome$contentSettings$PopupsSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$JavascriptContentSetting = {
  set(
    details: chrome$contentSettings$JavascriptSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$NotificationsContentSetting = {
  set(
    details: chrome$contentSettings$NotificationsSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$PluginsContentSetting = {
  set(
    details: chrome$contentSettings$PluginsSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$ImagesContentSetting = {
  set(
    details: chrome$contentSettings$ImagesSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$LocationContentSetting = {
  set(
    details: chrome$contentSettings$LocationSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$FullscreenContentSetting = {
  set(
    details: chrome$contentSettings$FullscreenSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$MouselockContentSetting = {
  set(
    details: chrome$contentSettings$MouselockSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$MicrophoneContentSetting = {
  set(
    details: chrome$contentSettings$MicrophoneSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$CameraContentSetting = {
  set(
    details: chrome$contentSettings$CameraSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$PpapiBrokerContentSetting = {
  set(
    details: chrome$contentSettings$PpapiBrokerSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

export type chrome$contentSettings$MultipleAutomaticDownloadsContentSetting = {
  set(
    details: chrome$contentSettings$MultipleAutomaticDownloadsSetDetails,
    callback?: () => void
  ): void
} & chrome$contentSettings$ContentSetting;

/**
 * The only content type using resource identifiers is contentSettings.plugins. For more information, see Resource Identifiers.
 */
export interface chrome$contentSettings$ResourceIdentifier {
  /**
   * The resource identifier for the given content type.
   */
  id: string;

  /**
   * Optional. A human readable description of the resource.
   */
  description?: string;
}

/**
 * Whether to allow cookies and other local data to be set by websites. One of
 * allow: Accept cookies,
 * block: Block cookies,
 * session_only: Accept cookies only for the current session.
 * Default is allow.
 * The primary URL is the URL representing the cookie origin. The secondary URL is the URL of the top-level frame.
 */
declare export var chrome$contentSettings$cookies: chrome$contentSettings$CookieContentSetting;

/**
 * Whether to allow sites to show pop-ups. One of
 * allow: Allow sites to show pop-ups,
 * block: Don't allow sites to show pop-ups.
 * Default is block.
 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
 */
declare export var chrome$contentSettings$popups: chrome$contentSettings$PopupsContentSetting;

/**
 * Whether to run JavaScript. One of
 * allow: Run JavaScript,
 * block: Don't run JavaScript.
 * Default is allow.
 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
 */
declare export var chrome$contentSettings$javascript: chrome$contentSettings$JavascriptContentSetting;

/**
 * Whether to allow sites to show desktop notifications. One of
 * allow: Allow sites to show desktop notifications,
 * block: Don't allow sites to show desktop notifications,
 * ask: Ask when a site wants to show desktop notifications.
 * Default is ask.
 * The primary URL is the URL of the document which wants to show the notification. The secondary URL is not used.
 */
declare export var chrome$contentSettings$notifications: chrome$contentSettings$NotificationsContentSetting;

/**
 * Whether to run plugins. One of
 * allow: Run plugins automatically,
 * block: Don't run plugins automatically,
 * detect_important_content: Only run automatically those plugins that are detected as the website's main content.
 * Default is allow.
 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
 */
declare export var chrome$contentSettings$plugins: chrome$contentSettings$PluginsContentSetting;

/**
 * Whether to show images. One of
 * allow: Show images,
 * block: Don't show images.
 * Default is allow.
 * The primary URL is the URL of the top-level frame. The secondary URL is the URL of the image.
 */
declare export var chrome$contentSettings$images: chrome$contentSettings$ImagesContentSetting;

/**
 * Since Chrome 42.
 * Whether to allow Geolocation. One of
 * allow: Allow sites to track your physical location,
 * block: Don't allow sites to track your physical location,
 * ask: Ask before allowing sites to track your physical location.
 * Default is ask.
 * The primary URL is the URL of the document which requested location data. The secondary URL is the URL of the top-level frame (which may or may not differ from the requesting URL).
 */
declare export var chrome$contentSettings$location: chrome$contentSettings$LocationContentSetting;

/**
 * Since Chrome 42.
 * Whether to allow sites to toggle the fullscreen mode. One of
 * allow: Allow sites to toggle the fullscreen mode,
 * ask: Ask when a site wants to toggle the fullscreen mode.
 * Default is ask.
 * The primary URL is the URL of the document which requested to toggle the fullscreen mode. The secondary URL is the URL of the top-level frame (which may or may not differ from the requesting URL).
 */
declare export var chrome$contentSettings$fullscreen: chrome$contentSettings$FullscreenContentSetting;

/**
 * Since Chrome 42.
 * Whether to allow sites to disable the mouse cursor. One of
 * allow: Allow sites to disable the mouse cursor,
 * block: Don't allow sites to disable the mouse cursor,
 * ask: Ask when a site wants to disable the mouse cursor.
 * Default is ask.
 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
 */
declare export var chrome$contentSettings$mouselock: chrome$contentSettings$MouselockContentSetting;

/**
 * Since Chrome 46.
 * Whether to allow sites to access the microphone. One of
 * allow: Allow sites to access the microphone,
 * block: Don't allow sites to access the microphone,
 * ask: Ask when a site wants to access the microphone.
 * Default is ask.
 * The primary URL is the URL of the document which requested microphone access. The secondary URL is not used.
 * NOTE: The 'allow' setting is not valid if both patterns are ''.
 */
declare export var chrome$contentSettings$microphone: chrome$contentSettings$MicrophoneContentSetting;

/**
 * Since Chrome 46.
 * Whether to allow sites to access the camera. One of
 * allow: Allow sites to access the camera,
 * block: Don't allow sites to access the camera,
 * ask: Ask when a site wants to access the camera.
 * Default is ask.
 * The primary URL is the URL of the document which requested camera access. The secondary URL is not used.
 * NOTE: The 'allow' setting is not valid if both patterns are ''.
 */
declare export var chrome$contentSettings$camera: chrome$contentSettings$CameraContentSetting;

/**
 * Since Chrome 42.
 * Whether to allow sites to run plugins unsandboxed. One of
 * allow: Allow sites to run plugins unsandboxed,
 * block: Don't allow sites to run plugins unsandboxed,
 * ask: Ask when a site wants to run a plugin unsandboxed.
 * Default is ask.
 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
 */
declare export var chrome$contentSettings$unsandboxedPlugins: chrome$contentSettings$PpapiBrokerContentSetting;

/**
 * Since Chrome 42.
 * Whether to allow sites to download multiple files automatically. One of
 * allow: Allow sites to download multiple files automatically,
 * block: Don't allow sites to download multiple files automatically,
 * ask: Ask when a site wants to download files automatically after the first file.
 * Default is ask.
 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
 */
declare export var chrome$contentSettings$automaticDownloads: chrome$contentSettings$MultipleAutomaticDownloadsContentSetting;

declare var npm$namespace$chrome$contextMenus: {
  removeAll: typeof chrome$contextMenus$removeAll,
  create: typeof chrome$contextMenus$create,
  update: typeof chrome$contextMenus$update,
  remove: typeof chrome$contextMenus$remove,
  ACTION_MENU_TOP_LEVEL_LIMIT: typeof chrome$contextMenus$ACTION_MENU_TOP_LEVEL_LIMIT,
  onClicked: typeof chrome$contextMenus$onClicked
};
export interface chrome$contextMenus$OnClickData {
  /**
   * Optional.
   *  Since Chrome 35.
   * The text for the context selection, if any.
   */
  selectionText?: string;

  /**
   * Optional.
   *  Since Chrome 35.
   * A flag indicating the state of a checkbox or radio item after it is clicked.
   */
  checked?: boolean;

  /**
   * Since Chrome 35.
   * The ID of the menu item that was clicked.
   */
  menuItemId: any;

  /**
   * Optional.
   * Since Chrome 35.
   * The ID of the frame of the element where the context menu was
   * clicked, if it was in a frame.
   */
  frameId?: number;

  /**
   * Optional.
   *  Since Chrome 35.
   * The URL of the frame of the element where the context menu was clicked, if it was in a frame.
   */
  frameUrl?: string;

  /**
   * Since Chrome 35.
   * A flag indicating whether the element is editable (text input, textarea, etc.).
   */
  editable: boolean;

  /**
   * Optional.
   *  Since Chrome 35.
   * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
   */
  mediaType?: string;

  /**
   * Optional.
   *  Since Chrome 35.
   * A flag indicating the state of a checkbox or radio item before it was clicked.
   */
  wasChecked?: boolean;

  /**
   * Since Chrome 35.
   * The URL of the page where the menu item was clicked. This property is not set if the click occured in a context where there is no current page, such as in a launcher context menu.
   */
  pageUrl: string;

  /**
   * Optional.
   *  Since Chrome 35.
   * If the element is a link, the URL it points to.
   */
  linkUrl?: string;

  /**
   * Optional.
   *  Since Chrome 35.
   * The parent ID, if any, for the item clicked.
   */
  parentMenuItemId?: any;

  /**
   * Optional.
   *  Since Chrome 35.
   * Will be present for elements with a 'src' URL.
   */
  srcUrl?: string;
}

export interface chrome$contextMenus$CreateProperties {
  /**
   * Optional. Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see Match Patterns.
   */
  documentUrlPatterns?: string[];

  /**
   * Optional. The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.
   */
  checked?: boolean;

  /**
   * Optional. The text to be displayed in the item; this is required unless type is 'separator'. When the context is 'selection', you can use %s within the string to show the selected text. For example, if this parameter's value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the selection is "Translate 'cool' to Pig Latin".
   */
  title?: string;

  /**
   * Optional. List of contexts this menu item will appear in. Defaults to ['page'] if not specified.
   */
  contexts?: string[];

  /**
   * Optional.
   *  Since Chrome 20.
   * Whether this context menu item is enabled or disabled. Defaults to true.
   */
  enabled?: boolean;

  /**
   * Optional. Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.
   */
  targetUrlPatterns?: string[];

  /**
   * Optional.
   *  A function that will be called back when the menu item is clicked. Event pages cannot use this; instead, they should register a listener for chrome.contextMenus.onClicked.
   * @param info Information sent when a context menu item is clicked.
   * @param tab The details of the tab where the click took place. Note: this parameter only present for extensions.
   */
  onclick?: (
    info: chrome$contextMenus$OnClickData,
    tab: chrome$tabs$Tab
  ) => void;

  /**
   * Optional. The ID of a parent menu item; this makes the item a child of a previously added item.
   */
  parentId?: any;

  /**
   * Optional. The type of menu item. Defaults to 'normal' if not specified.
   */
  type?: string;

  /**
   * Optional.
   *  Since Chrome 21.
   * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
   */
  id?: string;

  /**
   * Optional.
   * Since Chrome 62.
   * Whether the item is visible in the menu.
   */
  visible?: boolean;
}

export interface chrome$contextMenus$UpdateProperties {
  documentUrlPatterns?: string[];
  checked?: boolean;
  title?: string;
  contexts?: string[];

  /**
   * Optional. Since Chrome 20.
   */
  enabled?: boolean;
  targetUrlPatterns?: string[];
  onclick?: Function;

  /**
   * Optional. Note: You cannot change an item to be a child of one of its own descendants.
   */
  parentId?: any;
  type?: string;
}

export type chrome$contextMenus$MenuClickedEvent = {} & chrome$events$Event<
  (info: chrome$contextMenus$OnClickData, tab?: chrome$tabs$Tab) => void
>;

/**
 * Since Chrome 38.
 * The maximum number of top level extension items that can be added to an extension action context menu. Any items beyond this limit will be ignored.
 */
declare export var chrome$contextMenus$ACTION_MENU_TOP_LEVEL_LIMIT: number;

/**
 * Removes all context menu items added by this extension.
 * @param callback Called when removal is complete.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$contextMenus$removeAll(
  callback?: () => void
): void;

/**
 * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).
 * @param callback Called when the item has been created in the browser. If there were any problems creating the item, details will be available in chrome.runtime.lastError.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$contextMenus$create(
  createProperties: chrome$contextMenus$CreateProperties,
  callback?: () => void
): void;

/**
 * Updates a previously created context menu item.
 * @param id The ID of the item to update.
 * @param updateProperties The properties to update. Accepts the same values as the create function.
 * @param callback Called when the context menu has been updated.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$contextMenus$update(
  id: string,
  updateProperties: chrome$contextMenus$UpdateProperties,
  callback?: () => void
): void;

/**
 * Updates a previously created context menu item.
 * @param id The ID of the item to update.
 * @param updateProperties The properties to update. Accepts the same values as the create function.
 * @param callback Called when the context menu has been updated.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$contextMenus$update(
  id: number,
  updateProperties: chrome$contextMenus$UpdateProperties,
  callback?: () => void
): void;

/**
 * Removes a context menu item.
 * @param menuItemId The ID of the context menu item to remove.
 * @param callback Called when the context menu has been removed.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$contextMenus$remove(
  menuItemId: string,
  callback?: () => void
): void;

/**
 * Removes a context menu item.
 * @param menuItemId The ID of the context menu item to remove.
 * @param callback Called when the context menu has been removed.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$contextMenus$remove(
  menuItemId: number,
  callback?: () => void
): void;

/**
 * Since Chrome 21.
 * Fired when a context menu item is clicked.
 */
declare export var chrome$contextMenus$onClicked: chrome$contextMenus$MenuClickedEvent;

declare var npm$namespace$chrome$cookies: {
  getAllCookieStores: typeof chrome$cookies$getAllCookieStores,
  getAll: typeof chrome$cookies$getAll,
  set: typeof chrome$cookies$set,
  remove: typeof chrome$cookies$remove,
  get: typeof chrome$cookies$get,
  onChanged: typeof chrome$cookies$onChanged
};

/**
 * Represents information about an HTTP cookie.
 */
export interface chrome$cookies$Cookie {
  /**
   * The domain of the cookie (e.g. "www.google.com", "example.com").
   */
  domain: string;

  /**
   * The name of the cookie.
   */
  name: string;

  /**
   * The ID of the cookie store containing this cookie, as provided in getAllCookieStores().
   */
  storeId: string;

  /**
   * The value of the cookie.
   */
  value: string;

  /**
   * True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date.
   */
  session: boolean;

  /**
   * True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie).
   */
  hostOnly: boolean;

  /**
   * Optional. The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies.
   */
  expirationDate?: number;

  /**
   * The path of the cookie.
   */
  path: string;

  /**
   * True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts).
   */
  httpOnly: boolean;

  /**
   * True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS).
   */
  secure: boolean;
}

/**
 * Represents a cookie store in the browser. An incognito mode window, for instance, uses a separate cookie store from a non-incognito window.
 */
export interface chrome$cookies$CookieStore {
  /**
   * The unique identifier for the cookie store.
   */
  id: string;

  /**
   * Identifiers of all the browser tabs that share this cookie store.
   */
  tabIds: number[];
}

export interface chrome$cookies$GetAllDetails {
  /**
   * Optional. Restricts the retrieved cookies to those whose domains match or are subdomains of this one.
   */
  domain?: string;

  /**
   * Optional. Filters the cookies by name.
   */
  name?: string;

  /**
   * Optional. Restricts the retrieved cookies to those that would match the given URL.
   */
  url?: string;

  /**
   * Optional. The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be used.
   */
  storeId?: string;

  /**
   * Optional. Filters out session vs. persistent cookies.
   */
  session?: boolean;

  /**
   * Optional. Restricts the retrieved cookies to those whose path exactly matches this string.
   */
  path?: string;

  /**
   * Optional. Filters the cookies by their Secure property.
   */
  secure?: boolean;
}

export interface chrome$cookies$SetDetails {
  /**
   * Optional. The domain of the cookie. If omitted, the cookie becomes a host-only cookie.
   */
  domain?: string;

  /**
   * Optional. The name of the cookie. Empty by default if omitted.
   */
  name?: string;

  /**
   * The request-URI to associate with the setting of the cookie. This value can affect the default domain and path values of the created cookie. If host permissions for this URL are not specified in the manifest file, the API call will fail.
   */
  url: string;

  /**
   * Optional. The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current execution context's cookie store.
   */
  storeId?: string;

  /**
   * Optional. The value of the cookie. Empty by default if omitted.
   */
  value?: string;

  /**
   * Optional. The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie becomes a session cookie.
   */
  expirationDate?: number;

  /**
   * Optional. The path of the cookie. Defaults to the path portion of the url parameter.
   */
  path?: string;

  /**
   * Optional. Whether the cookie should be marked as HttpOnly. Defaults to false.
   */
  httpOnly?: boolean;

  /**
   * Optional. Whether the cookie should be marked as Secure. Defaults to false.
   */
  secure?: boolean;
}

export interface chrome$cookies$Details {
  name: string;
  url: string;
  storeId?: string;
}

export interface chrome$cookies$CookieChangeInfo {
  /**
   * Information about the cookie that was set or removed.
   */
  cookie: chrome$cookies$Cookie;

  /**
   * True if a cookie was removed.
   */
  removed: boolean;

  /**
   * Since Chrome 12.
   * The underlying reason behind the cookie's change.
   */
  cause: string;
}

export type chrome$cookies$CookieChangedEvent = {} & chrome$events$Event<
  (changeInfo: chrome$cookies$CookieChangeInfo) => void
>;

/**
 * Lists all existing cookie stores.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of CookieStore cookieStores) {...};
 * Parameter cookieStores: All the existing cookie stores.
 */
declare export function chrome$cookies$getAllCookieStores(
  callback: (cookieStores: chrome$cookies$CookieStore[]) => void
): void;

/**
 * Retrieves all cookies from a single cookie store that match the given information. The cookies returned will be sorted, with those with the longest path first. If multiple cookies have the same path length, those with the earliest creation time will be first.
 * @param details Information to filter the cookies being retrieved.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of Cookie cookies) {...};
 * Parameter cookies: All the existing, unexpired cookies that match the given cookie info.
 */
declare export function chrome$cookies$getAll(
  details: chrome$cookies$GetAllDetails,
  callback: (cookies: chrome$cookies$Cookie[]) => void
): void;

/**
 * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
 * @param details Details about the cookie being set.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function( Cookie cookie) {...};
 * Optional parameter cookie: Contains details about the cookie that's been set. If setting failed for any reason, this will be "null", and "chrome.runtime.lastError" will be set.
 */
declare export function chrome$cookies$set(
  details: chrome$cookies$SetDetails,
  callback?: (cookie: chrome$cookies$Cookie | null) => void
): void;

/**
 * Deletes a cookie by name.
 * @param details Information to identify the cookie to remove.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(object details) {...};
 */
declare export function chrome$cookies$remove(
  details: chrome$cookies$Details,
  callback?: (details: chrome$cookies$Details) => void
): void;

/**
 * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned.
 * @param details Details to identify the cookie being retrieved.
 * @param callback The callback parameter should be a function that looks like this:
 * function( Cookie cookie) {...};
 * Parameter cookie: Contains details about the cookie. This parameter is null if no such cookie was found.
 */
declare export function chrome$cookies$get(
  details: chrome$cookies$Details,
  callback: (cookie: chrome$cookies$Cookie | null) => void
): void;

/**
 * Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is implemented as a two step process: the cookie to be updated is first removed entirely, generating a notification with "cause" of "overwrite" . Afterwards, a new cookie is written with the updated values, generating a second notification with "cause" "explicit".
 */
declare export var chrome$cookies$onChanged: chrome$cookies$CookieChangedEvent;

declare var npm$namespace$chrome$_debugger: {
  attach: typeof chrome$_debugger$attach,
  detach: typeof chrome$_debugger$detach,
  sendCommand: typeof chrome$_debugger$sendCommand,
  getTargets: typeof chrome$_debugger$getTargets,
  onDetach: typeof chrome$_debugger$onDetach,
  onEvent: typeof chrome$_debugger$onEvent
};

/**
 * Debuggee identifier. Either tabId or extensionId must be specified
 */
export interface chrome$_debugger$Debuggee {
  /**
   * Optional. The id of the tab which you intend to debug.
   */
  tabId?: number;

  /**
   * Optional.
   * Since Chrome 27.
   * The id of the extension which you intend to debug. Attaching to an extension background page is only possible when 'silent-debugger-extension-api' flag is enabled on the target browser.
   */
  extensionId?: string;

  /**
   * Optional.
   * Since Chrome 28.
   * The opaque id of the debug target.
   */
  targetId?: string;
}

/**
 * Since Chrome 28.
 * Debug target information
 */
export interface chrome$_debugger$TargetInfo {
  /**
   * Target type.
   */
  type: string;

  /**
   * Target id.
   */
  id: string;

  /**
   * Optional.
   * Since Chrome 30.
   * The tab id, defined if type == 'page'.
   */
  tabId?: number;

  /**
   * Optional.
   * Since Chrome 30.
   * The extension id, defined if type = 'background_page'.
   */
  extensionId?: string;

  /**
   * True if debugger is already attached.
   */
  attached: boolean;

  /**
   * Target page title.
   */
  title: string;

  /**
   * Target URL.
   */
  url: string;

  /**
   * Optional. Target favicon URL.
   */
  faviconUrl?: string;
}

export type chrome$_debugger$DebuggerDetachedEvent = {} & chrome$events$Event<
  (source: _debugger$Debuggee, reason: string) => void
>;

export type chrome$_debugger$DebuggerEventEvent = {} & chrome$events$Event<
  (source: _debugger$Debuggee, method: string, params?: Object) => void
>;

/**
 * Attaches debugger to the given target.
 * @param target Debugging target to which you want to attach.
 * @param requiredVersion Required debugging protocol version ("0.1"). One can only attach to the debuggee with matching major version and greater or equal minor version. List of the protocol versions can be obtained in the documentation pages.
 * @param callback Called once the attach operation succeeds or fails. Callback receives no arguments. If the attach fails, runtime.lastError will be set to the error message.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$_debugger$attach(
  target: _debugger$Debuggee,
  requiredVersion: string,
  callback?: () => void
): void;

/**
 * Detaches debugger from the given target.
 * @param target Debugging target from which you want to detach.
 * @param callback Called once the detach operation succeeds or fails. Callback receives no arguments. If the detach fails, runtime.lastError will be set to the error message.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$_debugger$detach(
  target: _debugger$Debuggee,
  callback?: () => void
): void;

/**
 * Sends given command to the debugging target.
 * @param target Debugging target to which you want to send the command.
 * @param method Method name. Should be one of the methods defined by the remote debugging protocol.
 * @param commandParams Since Chrome 22.
 * JSON object with request parameters. This object must conform to the remote debugging params scheme for given method.
 * @param callback Response body. If an error occurs while posting the message, the callback will be called with no arguments and runtime.lastError will be set to the error message.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(object result) {...};
 */
declare export function chrome$_debugger$sendCommand(
  target: _debugger$Debuggee,
  method: string,
  commandParams?: Object,
  callback?: (result?: Object) => void
): void;

/**
 * Since Chrome 28.
 * Returns the list of available debug targets.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of TargetInfo result) {...};
 * Parameter result: Array of TargetInfo objects corresponding to the available debug targets.
 */
declare export function chrome$_debugger$getTargets(
  callback: (result: _debugger$TargetInfo[]) => void
): void;

/**
 * Fired when browser terminates debugging session for the tab. This happens when either the tab is being closed or Chrome DevTools is being invoked for the attached tab.
 */
declare export var _debugger$onDetach: _debugger$DebuggerDetachedEvent;

/**
 * Fired whenever debugging target issues instrumentation event.
 */
declare export var _debugger$onEvent: _debugger$DebuggerEventEvent;

declare export { _debugger as debugger };

declare var npm$namespace$chrome$declarativeContent: {
  onPageChanged: typeof chrome$declarativeContent$onPageChanged,

  PageStateMatcherProperties: typeof chrome$declarativeContent$PageStateMatcherProperties,
  PageStateMatcher: typeof chrome$declarativeContent$PageStateMatcher,
  ShowPageAction: typeof chrome$declarativeContent$ShowPageAction
};
export interface chrome$declarativeContent$PageStateUrlDetails {
  /**
   * Optional. Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.
   */
  hostContains?: string;

  /**
   * Optional. Matches if the host name of the URL is equal to a specified string.
   */
  hostEquals?: string;

  /**
   * Optional. Matches if the host name of the URL starts with a specified string.
   */
  hostPrefix?: string;

  /**
   * Optional. Matches if the host name of the URL ends with a specified string.
   */
  hostSuffix?: string;

  /**
   * Optional. Matches if the path segment of the URL contains a specified string.
   */
  pathContains?: string;

  /**
   * Optional. Matches if the path segment of the URL is equal to a specified string.
   */
  pathEquals?: string;

  /**
   * Optional. Matches if the path segment of the URL starts with a specified string.
   */
  pathPrefix?: string;

  /**
   * Optional. Matches if the path segment of the URL ends with a specified string.
   */
  pathSuffix?: string;

  /**
   * Optional. Matches if the query segment of the URL contains a specified string.
   */
  queryContains?: string;

  /**
   * Optional. Matches if the query segment of the URL is equal to a specified string.
   */
  queryEquals?: string;

  /**
   * Optional. Matches if the query segment of the URL starts with a specified string.
   */
  queryPrefix?: string;

  /**
   * Optional. Matches if the query segment of the URL ends with a specified string.
   */
  querySuffix?: string;

  /**
   * Optional. Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.
   */
  urlContains?: string;

  /**
   * Optional. Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.
   */
  urlEquals?: string;

  /**
   * Optional. Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.
   */
  urlMatches?: string;

  /**
   * Optional. Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.
   */
  originAndPathMatches?: string;

  /**
   * Optional. Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.
   */
  urlPrefix?: string;

  /**
   * Optional. Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.
   */
  urlSuffix?: string;

  /**
   * Optional. Matches if the scheme of the URL is equal to any of the schemes specified in the array.
   */
  schemes?: string[];

  /**
   * Optional. Matches if the port of the URL is contained in any of the specified port lists. For example [80, 443, [1000, 1200]] matches all requests on port 80, 443 and in the range 1000-1200.
   */
  ports?: (number | number[])[];
}

declare export class chrome$declarativeContent$PageStateMatcherProperties {
  /**
   * Optional. Filters URLs for various criteria. See event filtering. All criteria are case sensitive.
   */
  pageUrl: chrome$declarativeContent$PageStateUrlDetails;

  /**
   * Optional. Matches if all of the CSS selectors in the array match displayed elements in a frame with the same origin as the page's main frame. All selectors in this array must be compound selectors to speed up matching. Note that listing hundreds of CSS selectors or CSS selectors that match hundreds of times per page can still slow down web sites.
   */
  css: string[];

  /**
   * Optional.
   *  Since Chrome 45. Warning: this is the current Beta channel. More information available on the API documentation pages.
   * Matches if the bookmarked state of the page is equal to the specified value. Requres the bookmarks permission.
   */
  isBookmarked: boolean;
}

/**
 * Matches the state of a web page by various criteria.
 */
declare export class chrome$declarativeContent$PageStateMatcher {
  constructor(
    options: chrome$declarativeContent$PageStateMatcherProperties
  ): this;
}

/**
 * Declarative event action that shows the extension's page action while the corresponding conditions are met.
 */
declare export class chrome$declarativeContent$ShowPageAction {}

/**
 * Provides the Declarative Event API consisting of addRules, removeRules, and getRules.
 */
export type chrome$declarativeContent$PageChangedEvent = {} & chrome$events$Event<
  () => void
>;

declare export var chrome$declarativeContent$onPageChanged: chrome$declarativeContent$PageChangedEvent;

declare var npm$namespace$chrome$declarativeWebRequest: {
  onRequest: typeof chrome$declarativeWebRequest$onRequest
};
export interface chrome$declarativeWebRequest$HeaderFilter {
  nameEquals?: string;
  valueContains?: any;
  nameSuffix?: string;
  valueSuffix?: string;
  valuePrefix?: string;
  nameContains?: any;
  valueEquals?: string;
  namePrefix?: string;
}

export interface chrome$declarativeWebRequest$AddResponseHeader {
  name: string;
  value: string;
}

export interface chrome$declarativeWebRequest$RemoveResponseCookie {
  filter: chrome$declarativeWebRequest$ResponseCookie;
}

export interface chrome$declarativeWebRequest$RemoveResponseHeader {
  name: string;
  value?: string;
}

export interface chrome$declarativeWebRequest$RequestMatcher {
  contentType?: string[];
  url?: chrome$events$UrlFilter;
  excludeContentType?: string[];
  excludeResponseHeader?: chrome$declarativeWebRequest$HeaderFilter[];
  resourceType?: string;
  responseHeaders?: chrome$declarativeWebRequest$HeaderFilter[];
}

export interface chrome$declarativeWebRequest$IgnoreRules {
  lowerPriorityThan: number;
}

export interface chrome$declarativeWebRequest$RedirectToEmptyDocument {}

export interface chrome$declarativeWebRequest$RedirectRequest {
  redirectUrl: string;
}

export interface chrome$declarativeWebRequest$ResponseCookie {
  domain?: string;
  name?: string;
  expires?: string;
  maxAge?: number;
  value?: string;
  path?: string;
  httpOnly?: string;
  secure?: string;
}

export interface chrome$declarativeWebRequest$AddResponseCookie {
  cookie: chrome$declarativeWebRequest$ResponseCookie;
}

export interface chrome$declarativeWebRequest$EditResponseCookie {
  filter: chrome$declarativeWebRequest$ResponseCookie;
  modification: chrome$declarativeWebRequest$ResponseCookie;
}

export interface chrome$declarativeWebRequest$CancelRequest {}

export interface chrome$declarativeWebRequest$RemoveRequestHeader {
  name: string;
}

export interface chrome$declarativeWebRequest$EditRequestCookie {
  filter: chrome$declarativeWebRequest$RequestCookie;
  modification: chrome$declarativeWebRequest$RequestCookie;
}

export interface chrome$declarativeWebRequest$SetRequestHeader {
  name: string;
  value: string;
}

export interface chrome$declarativeWebRequest$RequestCookie {
  name?: string;
  value?: string;
}

export interface chrome$declarativeWebRequest$RedirectByRegEx {
  to: string;
  from: string;
}

export interface chrome$declarativeWebRequest$RedirectToTransparentImage {}

export interface chrome$declarativeWebRequest$AddRequestCookie {
  cookie: chrome$declarativeWebRequest$RequestCookie;
}

export interface chrome$declarativeWebRequest$RemoveRequestCookie {
  filter: chrome$declarativeWebRequest$RequestCookie;
}

export type chrome$declarativeWebRequest$RequestedEvent = {} & chrome$events$Event<Function>;

declare export var chrome$declarativeWebRequest$onRequest: chrome$declarativeWebRequest$RequestedEvent;

declare var npm$namespace$chrome$desktopCapture: {
  chooseDesktopMedia: typeof chrome$desktopCapture$chooseDesktopMedia,
  cancelChooseDesktopMedia: typeof chrome$desktopCapture$cancelChooseDesktopMedia
};

/**
 * Shows desktop media picker UI with the specified set of sources.
 * @param sources Set of sources that should be shown to the user.
 * @param callback The callback parameter should be a function that looks like this:
 * function(string streamId) {...};
 * Parameter streamId: An opaque string that can be passed to getUserMedia() API to generate media stream that corresponds to the source selected by the user. If user didn't select any source (i.e. canceled the prompt) then the callback is called with an empty streamId. The created streamId can be used only once and expires after a few seconds when it is not used.
 */
declare export function chrome$desktopCapture$chooseDesktopMedia(
  sources: string[],
  callback: (streamId: string) => void
): number;

/**
 * Shows desktop media picker UI with the specified set of sources.
 * @param sources Set of sources that should be shown to the user.
 * @param targetTab Optional tab for which the stream is created. If not specified then the resulting stream can be used only by the calling extension. The stream can only be used by frames in the given tab whose security origin matches tab.url.
 * @param callback The callback parameter should be a function that looks like this:
 * function(string streamId) {...};
 * Parameter streamId: An opaque string that can be passed to getUserMedia() API to generate media stream that corresponds to the source selected by the user. If user didn't select any source (i.e. canceled the prompt) then the callback is called with an empty streamId. The created streamId can be used only once and expires after a few seconds when it is not used.
 */
declare export function chrome$desktopCapture$chooseDesktopMedia(
  sources: string[],
  targetTab: chrome$tabs$Tab,
  callback: (streamId: string) => void
): number;

/**
 * Hides desktop media picker dialog shown by chooseDesktopMedia().
 * @param desktopMediaRequestId Id returned by chooseDesktopMedia()
 */
declare export function chrome$desktopCapture$cancelChooseDesktopMedia(
  desktopMediaRequestId: number
): void;

declare var npm$namespace$chrome$devtools: {
  inspectedWindow: typeof npm$namespace$chrome$devtools$inspectedWindow,
  network: typeof npm$namespace$chrome$devtools$network,
  panels: typeof npm$namespace$chrome$devtools$panels
};

declare var npm$namespace$chrome$devtools$inspectedWindow: {
  reload: typeof chrome$devtools$inspectedWindow$reload,
  eval: typeof chrome$devtools$inspectedWindow$eval,
  getResources: typeof chrome$devtools$inspectedWindow$getResources,
  tabId: typeof chrome$devtools$inspectedWindow$tabId,
  onResourceAdded: typeof chrome$devtools$inspectedWindow$onResourceAdded,
  onResourceContentCommitted: typeof chrome$devtools$inspectedWindow$onResourceContentCommitted
};

/**
 * A resource within the inspected page, such as a document, a script, or an image.
 */
export interface chrome$devtools$inspectedWindow$Resource {
  /**
   * The URL of the resource.
   */
  url: string;

  /**
   * Gets the content of the resource.
   * @param callback A function that receives resource content when the request completes.
   * The callback parameter should be a function that looks like this:
   * function(string content, string encoding) {...};
   * Parameter content: Content of the resource (potentially encoded).
   * Parameter encoding: Empty if content is not encoded, encoding name otherwise. Currently, only base64 is supported.
   */
  getContent(callback: (content: string, encoding: string) => void): void;

  /**
   * Sets the content of the resource.
   * @param content New content of the resource. Only resources with the text type are currently supported.
   * @param commit True if the user has finished editing the resource, and the new content of the resource should be persisted; false if this is a minor change sent in progress of the user editing the resource.
   * @param callback A function called upon request completion.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function(object error) {...};
   * Optional parameter error: Set to undefined if the resource content was set successfully; describes error otherwise.
   */
  setContent(
    content: string,
    commit: boolean,
    callback?: (error: Object) => void
  ): void;
}

export interface chrome$devtools$inspectedWindow$ReloadOptions {
  /**
   * Optional. If specified, the string will override the value of the User-Agent HTTP header that's sent while loading the resources of the inspected page. The string will also override the value of the navigator.userAgent property that's returned to any scripts that are running within the inspected page.
   */
  userAgent?: string;

  /**
   * Optional. When true, the loader will ignore the cache for all inspected page resources loaded before the load event is fired. The effect is similar to pressing Ctrl+Shift+R in the inspected window or within the Developer Tools window.
   */
  ignoreCache?: boolean;

  /**
   * Optional. If specified, the script will be injected into every frame of the inspected page immediately upon load, before any of the frame's scripts. The script will not be injected after subsequent reloads—for example, if the user presses Ctrl+R.
   */
  injectedScript?: string;

  /**
   * Optional.
   *  If specified, this script evaluates into a function that accepts three string arguments: the source to preprocess, the URL of the source, and a function name if the source is an DOM event handler. The preprocessorerScript function should return a string to be compiled by Chrome in place of the input source. In the case that the source is a DOM event handler, the returned source must compile to a single JS function.
   * @deprecated Deprecated since Chrome 41. Please avoid using this parameter, it will be removed soon.
   */
  preprocessorScript?: string;
}

export interface chrome$devtools$inspectedWindow$EvaluationExceptionInfo {
  /**
   * Set if the error occurred on the DevTools side before the expression is evaluated.
   */
  isError: boolean;

  /**
   * Set if the error occurred on the DevTools side before the expression is evaluated.
   */
  code: string;

  /**
   * Set if the error occurred on the DevTools side before the expression is evaluated.
   */
  description: string;

  /**
   * Set if the error occurred on the DevTools side before the expression is evaluated, contains the array of the values that may be substituted into the description string to provide more information about the cause of the error.
   */
  details: any[];

  /**
   * Set if the evaluated code produces an unhandled exception.
   */
  isException: boolean;

  /**
   * Set if the evaluated code produces an unhandled exception.
   */
  value: string;
}

export type chrome$devtools$inspectedWindow$ResourceAddedEvent = {} & chrome$events$Event<
  (resource: chrome$devtools$inspectedWindow$Resource) => void
>;

export type chrome$devtools$inspectedWindow$ResourceContentCommittedEvent = {} & chrome$events$Event<
  (resource: chrome$devtools$inspectedWindow$Resource, content: string) => void
>;

/**
 * The ID of the tab being inspected. This ID may be used with chrome.tabs.* API.
 */
declare export var chrome$devtools$inspectedWindow$tabId: number;

/**
 * Reloads the inspected page.
 */
declare export function chrome$devtools$inspectedWindow$reload(
  reloadOptions: chrome$devtools$inspectedWindow$ReloadOptions
): void;

/**
 * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the result parameter of the callback is undefined. In the case of a DevTools-side error, the isException parameter is non-null and has isError set to true and code set to an error code. In the case of a JavaScript error, isException is set to true and value is set to the string value of thrown object.
 * @param expression An expression to evaluate.
 * @param callback A function called when evaluation completes.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(object result, object exceptionInfo) {...};
 * Parameter result: The result of evaluation.
 * Parameter exceptionInfo: An object providing details if an exception occurred while evaluating the expression.
 */
declare export function chrome$devtools$inspectedWindow$eval<T>(
  expression: string,
  callback?: (
    result: T,
    exceptionInfo: chrome$devtools$inspectedWindow$EvaluationExceptionInfo
  ) => void
): void;

/**
 * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the result parameter of the callback is undefined. In the case of a DevTools-side error, the isException parameter is non-null and has isError set to true and code set to an error code. In the case of a JavaScript error, isException is set to true and value is set to the string value of thrown object.
 * @param expression An expression to evaluate.
 * @param options The options parameter can contain one or more options.
 * @param callback A function called when evaluation completes.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(object result, object exceptionInfo) {...};
 * Parameter result: The result of evaluation.
 * Parameter exceptionInfo: An object providing details if an exception occurred while evaluating the expression.
 */
declare export function chrome$devtools$inspectedWindow$eval<T>(
  expression: string,
  options: chrome$devtools$inspectedWindow$EvalOptions,
  callback?: (
    result: T,
    exceptionInfo: chrome$devtools$inspectedWindow$EvaluationExceptionInfo
  ) => void
): void;

/**
 * Retrieves the list of resources from the inspected page.
 * @param callback A function that receives the list of resources when the request completes.
 * The callback parameter should be a function that looks like this:
 * function(array of Resource resources) {...};
 */
declare export function chrome$devtools$inspectedWindow$getResources(
  callback: (resources: chrome$devtools$inspectedWindow$Resource[]) => void
): void;

/**
 * Fired when a new resource is added to the inspected page.
 */
declare export var chrome$devtools$inspectedWindow$onResourceAdded: chrome$devtools$inspectedWindow$ResourceAddedEvent;

/**
 * Fired when a new revision of the resource is committed (e.g. user saves an edited version of the resource in the Developer Tools).
 */
declare export var chrome$devtools$inspectedWindow$onResourceContentCommitted: chrome$devtools$inspectedWindow$ResourceContentCommittedEvent;

export interface chrome$devtools$inspectedWindow$EvalOptions {
  /**
   * If specified, the expression is evaluated on the iframe whose URL matches the one specified. By default, the expression is evaluated in the top frame of the inspected page.
   */
  frameURL?: string;

  /**
   * Evaluate the expression in the context of the content script of the calling extension, provided that the content script is already injected into the inspected page. If not, the expression is not evaluated and the callback is invoked with the exception parameter set to an object that has the isError field set to true and the code field set to E_NOTFOUND.
   */
  useContentScriptContext?: boolean;

  /**
   * Evaluate the expression in the context of a content script of an extension that matches the specified origin. If given, contextSecurityOrigin overrides the 'true' setting on userContentScriptContext.
   */
  contextSecurityOrigin?: string;
}

declare var npm$namespace$chrome$devtools$network: {
  getHAR: typeof chrome$devtools$network$getHAR,
  onRequestFinished: typeof chrome$devtools$network$onRequestFinished,
  onNavigated: typeof chrome$devtools$network$onNavigated
};

/**
 * Represents a network request for a document resource (script, image and so on). See HAR Specification for reference.
 */
export interface chrome$devtools$network$Request {
  /**
   * Returns content of the response body.
   * @param callback A function that receives the response body when the request completes.
   * The callback parameter should be a function that looks like this:
   * function(string content, string encoding) {...};
   * Parameter content: Content of the response body (potentially encoded).
   * Parameter encoding: Empty if content is not encoded, encoding name otherwise. Currently, only base64 is supported.
   */
  getContent(callback: (content: string, encoding: string) => void): void;
}

export type chrome$devtools$network$RequestFinishedEvent = {} & chrome$events$Event<
  (request: chrome$devtools$network$Request) => void
>;

export type chrome$devtools$network$NavigatedEvent = {} & chrome$events$Event<
  (url: string) => void
>;

/**
 * Returns HAR log that contains all known network requests.
 * @param callback A function that receives the HAR log when the request completes.
 * The callback parameter should be a function that looks like this:
 * function(object harLog) {...};
 * Parameter harLog: A HAR log. See HAR specification for details.
 */
declare export function chrome$devtools$network$getHAR(
  callback: (harLog: Object) => void
): void;

/**
 * Fired when a network request is finished and all request data are available.
 */
declare export var chrome$devtools$network$onRequestFinished: chrome$devtools$network$RequestFinishedEvent;

/**
 * Fired when the inspected window navigates to a new page.
 */
declare export var chrome$devtools$network$onNavigated: chrome$devtools$network$NavigatedEvent;

declare var npm$namespace$chrome$devtools$panels: {
  create: typeof chrome$devtools$panels$create,
  setOpenResourceHandler: typeof chrome$devtools$panels$setOpenResourceHandler,
  openResource: typeof chrome$devtools$panels$openResource,
  elements: typeof chrome$devtools$panels$elements,
  sources: typeof chrome$devtools$panels$sources
};
export type chrome$devtools$panels$PanelShownEvent = {} & chrome$events$Event<
  (window: windows$Window) => void
>;

export type chrome$devtools$panels$PanelHiddenEvent = {} & chrome$events$Event<
  () => void
>;

export type chrome$devtools$panels$PanelSearchEvent = {} & chrome$events$Event<
  (action: string, queryString?: string) => void
>;

/**
 * Represents a panel created by extension.
 */
export interface chrome$devtools$panels$ExtensionPanel {
  /**
   * Appends a button to the status bar of the panel.
   * @param iconPath Path to the icon of the button. The file should contain a 64x24-pixel image composed of two 32x24 icons. The left icon is used when the button is inactive; the right icon is displayed when the button is pressed.
   * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button.
   * @param disabled Whether the button is disabled.
   */
  createStatusBarButton(
    iconPath: string,
    tooltipText: string,
    disabled: boolean
  ): chrome$devtools$panels$Button;

  /**
   * Fired when the user switches to the panel.
   */
  onShown: chrome$devtools$panels$PanelShownEvent;

  /**
   * Fired when the user switches away from the panel.
   */
  onHidden: chrome$devtools$panels$PanelHiddenEvent;

  /**
   * Fired upon a search action (start of a new search, search result navigation, or search being canceled).
   */
  onSearch: chrome$devtools$panels$PanelSearchEvent;
}

export type chrome$devtools$panels$ButtonClickedEvent = {} & chrome$events$Event<
  () => void
>;

/**
 * A button created by the extension.
 */
export interface chrome$devtools$panels$Button {
  /**
   * Updates the attributes of the button. If some of the arguments are omitted or null, the corresponding attributes are not updated.
   * @param iconPath Path to the new icon of the button.
   * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button.
   * @param disabled Whether the button is disabled.
   */
  update(
    iconPath?: string | null,
    tooltipText?: string | null,
    disabled?: boolean | null
  ): void;

  /**
   * Fired when the button is clicked.
   */
  onClicked: chrome$devtools$panels$ButtonClickedEvent;
}

export type chrome$devtools$panels$SelectionChangedEvent = {} & chrome$events$Event<
  () => void
>;

/**
 * Represents the Elements panel.
 */
export interface chrome$devtools$panels$ElementsPanel {
  /**
   * Creates a pane within panel's sidebar.
   * @param title Text that is displayed in sidebar caption.
   * @param callback A callback invoked when the sidebar is created.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function( ExtensionSidebarPane result) {...};
   * Parameter result: An ExtensionSidebarPane object for created sidebar pane.
   */
  createSidebarPane(
    title: string,
    callback?: (result: chrome$devtools$panels$ExtensionSidebarPane) => void
  ): void;

  /**
   * Fired when an object is selected in the panel.
   */
  onSelectionChanged: chrome$devtools$panels$SelectionChangedEvent;
}

/**
 * Since Chrome 41.
 * Represents the Sources panel.
 */
export interface chrome$devtools$panels$SourcesPanel {
  /**
   * Creates a pane within panel's sidebar.
   * @param title Text that is displayed in sidebar caption.
   * @param callback A callback invoked when the sidebar is created.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function( ExtensionSidebarPane result) {...};
   * Parameter result: An ExtensionSidebarPane object for created sidebar pane.
   */
  createSidebarPane(
    title: string,
    callback?: (result: chrome$devtools$panels$ExtensionSidebarPane) => void
  ): void;

  /**
   * Fired when an object is selected in the panel.
   */
  onSelectionChanged: chrome$devtools$panels$SelectionChangedEvent;
}

export type chrome$devtools$panels$ExtensionSidebarPaneShownEvent = {} & chrome$events$Event<
  (window: chrome$windows$Window) => void
>;

export type chrome$devtools$panels$ExtensionSidebarPaneHiddenEvent = {} & chrome$events$Event<
  () => void
>;

/**
 * A sidebar created by the extension.
 */
export interface chrome$devtools$panels$ExtensionSidebarPane {
  /**
   * Sets the height of the sidebar.
   * @param height A CSS-like size specification, such as '100px' or '12ex'.
   */
  setHeight(height: string): void;

  /**
   * Sets an expression that is evaluated within the inspected page. The result is displayed in the sidebar pane.
   * @param expression An expression to be evaluated in context of the inspected page. JavaScript objects and DOM nodes are displayed in an expandable tree similar to the console/watch.
   * @param rootTitle An optional title for the root of the expression tree.
   * @param callback A callback invoked after the sidebar pane is updated with the expression evaluation results.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function() {...};
   */
  setExpression(
    expression: string,
    rootTitle?: string,
    callback?: () => void
  ): void;

  /**
   * Sets an expression that is evaluated within the inspected page. The result is displayed in the sidebar pane.
   * @param expression An expression to be evaluated in context of the inspected page. JavaScript objects and DOM nodes are displayed in an expandable tree similar to the console/watch.
   * @param callback A callback invoked after the sidebar pane is updated with the expression evaluation results.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function() {...};
   */
  setExpression(expression: string, callback?: () => void): void;

  /**
   * Sets a JSON-compliant object to be displayed in the sidebar pane.
   * @param jsonObject An object to be displayed in context of the inspected page. Evaluated in the context of the caller (API client).
   * @param rootTitle An optional title for the root of the expression tree.
   * @param callback A callback invoked after the sidebar is updated with the object.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function() {...};
   */
  setObject(
    jsonObject: Object,
    rootTitle?: string,
    callback?: () => void
  ): void;

  /**
   * Sets a JSON-compliant object to be displayed in the sidebar pane.
   * @param jsonObject An object to be displayed in context of the inspected page. Evaluated in the context of the caller (API client).
   * @param callback A callback invoked after the sidebar is updated with the object.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function() {...};
   */
  setObject(jsonObject: Object, callback?: () => void): void;

  /**
   * Sets an HTML page to be displayed in the sidebar pane.
   * @param path Relative path of an extension page to display within the sidebar.
   */
  setPage(path: string): void;

  /**
   * Fired when the sidebar pane becomes visible as a result of user switching to the panel that hosts it.
   */
  onShown: chrome$devtools$panels$ExtensionSidebarPaneShownEvent;

  /**
   * Fired when the sidebar pane becomes hidden as a result of the user switching away from the panel that hosts the sidebar pane.
   */
  onHidden: chrome$devtools$panels$ExtensionSidebarPaneHiddenEvent;
}

/**
 * Elements panel.
 */
declare export var chrome$devtools$panels$elements: chrome$devtools$panels$ElementsPanel;

/**
 * Since Chrome 38.
 * Sources panel.
 */
declare export var chrome$devtools$panels$sources: chrome$devtools$panels$SourcesPanel;

/**
 * Creates an extension panel.
 * @param title Title that is displayed next to the extension icon in the Developer Tools toolbar.
 * @param iconPath Path of the panel's icon relative to the extension directory.
 * @param pagePath Path of the panel's HTML page relative to the extension directory.
 * @param callback A function that is called when the panel is created.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function( ExtensionPanel panel) {...};
 * Parameter panel: An ExtensionPanel object representing the created panel.
 */
declare export function chrome$devtools$panels$create(
  title: string,
  iconPath: string,
  pagePath: string,
  callback?: (panel: chrome$devtools$panels$ExtensionPanel) => void
): void;

/**
 * Specifies the function to be called when the user clicks a resource link in the Developer Tools window. To unset the handler, either call the method with no parameters or pass null as the parameter.
 * @param callback A function that is called when the user clicks on a valid resource link in Developer Tools window. Note that if the user clicks an invalid URL or an XHR, this function is not called.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function( devtools.inspectedWindow.Resource resource) {...};
 * Parameter resource: A devtools.inspectedWindow.Resource object for the resource that was clicked.
 */
declare export function chrome$devtools$panels$setOpenResourceHandler(
  callback?: (resource: chrome$devtools$inspectedWindow$Resource) => void
): void;

/**
 * Since Chrome 38.
 * Requests DevTools to open a URL in a Developer Tools panel.
 * @param url The URL of the resource to open.
 * @param lineNumber Specifies the line number to scroll to when the resource is loaded.
 * @param callback A function that is called when the resource has been successfully loaded.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$devtools$panels$openResource(
  url: string,
  lineNumber: number,
  callback: () => void
): void;

declare var npm$namespace$chrome$documentScan: {
  scan: typeof chrome$documentScan$scan
};
export interface chrome$documentScan$DocumentScanOptions {
  /**
   * Optional. The MIME types that are accepted by the caller.
   */
  mimeTypes?: string[];

  /**
   * Optional. The number of scanned images allowed (defaults to 1).
   */
  maxImages?: number;
}

export interface chrome$documentScan$DocumentScanCallbackArg {
  /**
   * The data image URLs in a form that can be passed as the "src" value to an image tag.
   */
  dataUrls: string[];

  /**
   * The MIME type of dataUrls.
   */
  mimeType: string;
}

/**
 * Performs a document scan. On success, the PNG data will be sent to the callback.
 * @param options Object containing scan parameters.
 * @param callback Called with the result and data from the scan.
 * The callback parameter should be a function that looks like this:
 * function(object result) {...};
 */
declare export function chrome$documentScan$scan(
  options: chrome$documentScan$DocumentScanOptions,
  callback: (result: chrome$documentScan$DocumentScanCallbackArg) => void
): void;

declare var npm$namespace$chrome$downloads: {
  search: typeof chrome$downloads$search,
  pause: typeof chrome$downloads$pause,
  getFileIcon: typeof chrome$downloads$getFileIcon,
  resume: typeof chrome$downloads$resume,
  cancel: typeof chrome$downloads$cancel,
  download: typeof chrome$downloads$download,
  open: typeof chrome$downloads$open,
  show: typeof chrome$downloads$show,
  showDefaultFolder: typeof chrome$downloads$showDefaultFolder,
  erase: typeof chrome$downloads$erase,
  removeFile: typeof chrome$downloads$removeFile,
  acceptDanger: typeof chrome$downloads$acceptDanger,
  drag: typeof chrome$downloads$drag,
  setShelfEnabled: typeof chrome$downloads$setShelfEnabled,
  onChanged: typeof chrome$downloads$onChanged,
  onCreated: typeof chrome$downloads$onCreated,
  onErased: typeof chrome$downloads$onErased,
  onDeterminingFilename: typeof chrome$downloads$onDeterminingFilename
};
export interface chrome$downloads$HeaderNameValuePair {
  /**
   * Name of the HTTP header.
   */
  name: string;

  /**
   * Value of the HTTP header.
   */
  value: string;
}

export interface chrome$downloads$DownloadOptions {
  /**
   * Optional. Post body.
   */
  body?: string;

  /**
   * Optional. Use a file-chooser to allow the user to select a filename regardless of whether filename is set or already exists.
   */
  saveAs?: boolean;

  /**
   * The URL to download.
   */
  url: string;

  /**
   * Optional. A file path relative to the Downloads directory to contain the downloaded file, possibly containing subdirectories. Absolute paths, empty paths, and paths containing back-references ".." will cause an error. onDeterminingFilename allows suggesting a filename after the file's MIME type and a tentative filename have been determined.
   */
  filename?: string;

  /**
   * Optional. Extra HTTP headers to send with the request if the URL uses the HTTP[s] protocol. Each header is represented as a dictionary containing the keys name and either value or binaryValue, restricted to those allowed by XMLHttpRequest.
   */
  headers?: chrome$downloads$HeaderNameValuePair[];

  /**
   * Optional. The HTTP method to use if the URL uses the HTTP[S] protocol.
   */
  method?: string;

  /**
   * Optional. The action to take if filename already exists.
   */
  conflictAction?: string;
}

export interface chrome$downloads$DownloadDelta {
  /**
   * The id of the DownloadItem that changed.
   */
  id: number;

  /**
   * Optional. The change in danger, if any.
   */
  danger?: chrome$downloads$StringDelta;

  /**
   * Optional. The change in url, if any.
   */
  url?: chrome$downloads$StringDelta;

  /**
   * Optional. The change in finalUrl, if any.
   * @since Since Chrome 54.
   */
  finalUrl: chrome$downloads$StringDelta;

  /**
   * Optional. The change in totalBytes, if any.
   */
  totalBytes?: chrome$downloads$DoubleDelta;

  /**
   * Optional. The change in filename, if any.
   */
  filename?: chrome$downloads$StringDelta;

  /**
   * Optional. The change in paused, if any.
   */
  paused?: chrome$downloads$BooleanDelta;

  /**
   * Optional. The change in state, if any.
   */
  state?: chrome$downloads$StringDelta;

  /**
   * Optional. The change in mime, if any.
   */
  mime?: chrome$downloads$StringDelta;

  /**
   * Optional. The change in fileSize, if any.
   */
  fileSize?: chrome$downloads$DoubleDelta;

  /**
   * Optional. The change in startTime, if any.
   */
  startTime?: chrome$downloads$StringDelta;

  /**
   * Optional. The change in error, if any.
   */
  error?: chrome$downloads$StringDelta;

  /**
   * Optional. The change in endTime, if any.
   */
  endTime?: chrome$downloads$StringDelta;

  /**
   * Optional. The change in canResume, if any.
   */
  canResume?: chrome$downloads$BooleanDelta;

  /**
   * Optional. The change in exists, if any.
   */
  exists?: chrome$downloads$BooleanDelta;
}

export interface chrome$downloads$BooleanDelta {
  current?: boolean;
  previous?: boolean;
}

/**
 * Since Chrome 34.
 */
export interface chrome$downloads$DoubleDelta {
  current?: number;
  previous?: number;
}

export interface chrome$downloads$StringDelta {
  current?: string;
  previous?: string;
}

export interface chrome$downloads$DownloadItem {
  /**
   * Number of bytes received so far from the host, without considering file compression.
   */
  bytesReceived: number;

  /**
   * Indication of whether this download is thought to be safe or known to be suspicious.
   */
  danger: string;

  /**
   * The absolute URL that this download initiated from, before any redirects.
   */
  url: string;

  /**
   * The absolute URL that this download is being made from, after all redirects.
   * @since Since Chrome 54.
   */
  finalUrl: string;

  /**
   * Number of bytes in the whole file, without considering file compression, or -1 if unknown.
   */
  totalBytes: number;

  /**
   * Absolute local path.
   */
  filename: string;

  /**
   * True if the download has stopped reading data from the host, but kept the connection open.
   */
  paused: boolean;

  /**
   * Indicates whether the download is progressing, interrupted, or complete.
   */
  state: string;

  /**
   * The file's MIME type.
   */
  mime: string;

  /**
   * Number of bytes in the whole file post-decompression, or -1 if unknown.
   */
  fileSize: number;

  /**
   * The time when the download began in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){console.log(new Date(item.startTime))})})
   */
  startTime: string;

  /**
   * Optional. Why the download was interrupted. Several kinds of HTTP errors may be grouped under one of the errors beginning with SERVER_. Errors relating to the network begin with NETWORK_, errors relating to the process of writing the file to the file system begin with FILE_, and interruptions initiated by the user begin with USER_.
   */
  error?: string;

  /**
   * Optional. The time when the download ended in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){if (item.endTime) console.log(new Date(item.endTime))})})
   */
  endTime?: string;

  /**
   * An identifier that is persistent across browser sessions.
   */
  id: number;

  /**
   * False if this download is recorded in the history, true if it is not recorded.
   */
  incognito: boolean;

  /**
   * Absolute URL.
   */
  referrer: string;

  /**
   * Optional. Estimated time when the download will complete in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){if (item.estimatedEndTime) console.log(new Date(item.estimatedEndTime))})})
   */
  estimatedEndTime?: string;

  /**
   * True if the download is in progress and paused, or else if it is interrupted and can be resumed starting from where it was interrupted.
   */
  canResume: boolean;

  /**
   * Whether the downloaded file still exists. This information may be out of date because Chrome does not automatically watch for file removal. Call search() in order to trigger the check for file existence. When the existence check completes, if the file has been deleted, then an onChanged event will fire. Note that search() does not wait for the existence check to finish before returning, so results from search() may not accurately reflect the file system. Also, search() may be called as often as necessary, but will not check for file existence any more frequently than once every 10 seconds.
   */
  exists: boolean;

  /**
   * Optional. The identifier for the extension that initiated this download if this download was initiated by an extension. Does not change once it is set.
   */
  byExtensionId?: string;

  /**
   * Optional. The localized name of the extension that initiated this download if this download was initiated by an extension. May change if the extension changes its name or if the user changes their locale.
   */
  byExtensionName?: string;
}

export interface chrome$downloads$GetFileIconOptions {
  /**
   * Optional. * The size of the returned icon. The icon will be square with dimensions size * size pixels. The default and largest size for the icon is 32x32 pixels. The only supported sizes are 16 and 32. It is an error to specify any other size.
   */
  size?: number;
}

export interface chrome$downloads$DownloadQuery {
  /**
   * Optional. Set elements of this array to DownloadItem properties in order to sort search results. For example, setting orderBy=['startTime'] sorts the DownloadItem by their start time in ascending order. To specify descending order, prefix with a hyphen: '-startTime'.
   */
  orderBy?: string[];

  /**
   * Optional. Limits results to DownloadItem whose url matches the given regular expression.
   */
  urlRegex?: string;

  /**
   * Optional. Limits results to DownloadItem that ended before the time in ISO 8601 format.
   */
  endedBefore?: string;

  /**
   * Optional. Limits results to DownloadItem whose totalBytes is greater than the given integer.
   */
  totalBytesGreater?: number;

  /**
   * Optional. Indication of whether this download is thought to be safe or known to be suspicious.
   */
  danger?: string;

  /**
   * Optional. Number of bytes in the whole file, without considering file compression, or -1 if unknown.
   */
  totalBytes?: number;

  /**
   * Optional. True if the download has stopped reading data from the host, but kept the connection open.
   */
  paused?: boolean;

  /**
   * Optional. Limits results to DownloadItem whose filename matches the given regular expression.
   */
  filenameRegex?: string;

  /**
   * Optional. This array of search terms limits results to DownloadItem whose filename or url contain all of the search terms that do not begin with a dash '-' and none of the search terms that do begin with a dash.
   */
  query?: string[];

  /**
   * Optional. Limits results to DownloadItem whose totalBytes is less than the given integer.
   */
  totalBytesLess?: number;

  /**
   * Optional. The id of the DownloadItem to query.
   */
  id?: number;

  /**
   * Optional. Number of bytes received so far from the host, without considering file compression.
   */
  bytesReceived?: number;

  /**
   * Optional. Limits results to DownloadItem that ended after the time in ISO 8601 format.
   */
  endedAfter?: string;

  /**
   * Optional. Absolute local path.
   */
  filename?: string;

  /**
   * Optional. Indicates whether the download is progressing, interrupted, or complete.
   */
  state?: string;

  /**
   * Optional. Limits results to DownloadItem that started after the time in ISO 8601 format.
   */
  startedAfter?: string;

  /**
   * Optional. The file's MIME type.
   */
  mime?: string;

  /**
   * Optional. Number of bytes in the whole file post-decompression, or -1 if unknown.
   */
  fileSize?: number;

  /**
   * Optional. The time when the download began in ISO 8601 format.
   */
  startTime?: string;

  /**
   * Optional. Absolute URL.
   */
  url?: string;

  /**
   * Optional. Limits results to DownloadItem that started before the time in ISO 8601 format.
   */
  startedBefore?: string;

  /**
   * Optional. The maximum number of matching DownloadItem returned. Defaults to 1000. Set to 0 in order to return all matching DownloadItem. See search for how to page through results.
   */
  limit?: number;

  /**
   * Optional. Why a download was interrupted.
   */
  error?: number;

  /**
   * Optional. The time when the download ended in ISO 8601 format.
   */
  endTime?: string;

  /**
   * Optional. Whether the downloaded file exists;
   */
  exists?: boolean;
}

export interface chrome$downloads$DownloadFilenameSuggestion {
  /**
   * The DownloadItem's new target DownloadItem.filename, as a path relative to the user's default Downloads directory, possibly containing subdirectories. Absolute paths, empty paths, and paths containing back-references ".." will be ignored.
   */
  filename: string;

  /**
   * Optional. The action to take if filename already exists.
   */
  conflictAction?: string;
}

export type chrome$downloads$DownloadChangedEvent = {} & chrome$events$Event<
  (downloadDelta: chrome$downloads$DownloadDelta) => void
>;

export type chrome$downloads$DownloadCreatedEvent = {} & chrome$events$Event<
  (downloadItem: chrome$downloads$DownloadItem) => void
>;

export type chrome$downloads$DownloadErasedEvent = {} & chrome$events$Event<
  (downloadId: number) => void
>;

export type chrome$downloads$DownloadDeterminingFilenameEvent = {} & chrome$events$Event<
  (
    downloadItem: chrome$downloads$DownloadItem,
    suggest: (suggestion?: chrome$downloads$DownloadFilenameSuggestion) => void
  ) => void
>;

/**
 * Find DownloadItem. Set query to the empty object to get all DownloadItem. To get a specific DownloadItem, set only the id field. To page through a large number of items, set orderBy: ['-startTime'], set limit to the number of items per page, and set startedAfter to the startTime of the last item from the last page.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of DownloadItem results) {...};
 */
declare export function chrome$downloads$search(
  query: chrome$downloads$DownloadQuery,
  callback: (results: chrome$downloads$DownloadItem[]) => void
): void;

/**
 * Pause the download. If the request was successful the download is in a paused state. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active.
 * @param downloadId The id of the download to pause.
 * @param callback Called when the pause request is completed.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$downloads$pause(
  downloadId: number,
  callback?: () => void
): void;

/**
 * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, runtime.lastError will contain an error message.
 * @param downloadId The identifier for the download.
 * @param callback A URL to an image that represents the download.
 * The callback parameter should be a function that looks like this:
 * function(string iconURL) {...};
 */
declare export function chrome$downloads$getFileIcon(
  downloadId: number,
  callback: (iconURL: string) => void
): void;

/**
 * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, runtime.lastError will contain an error message.
 * @param downloadId The identifier for the download.
 * @param callback A URL to an image that represents the download.
 * The callback parameter should be a function that looks like this:
 * function(string iconURL) {...};
 */
declare export function chrome$downloads$getFileIcon(
  downloadId: number,
  options: chrome$downloads$GetFileIconOptions,
  callback: (iconURL: string) => void
): void;

/**
 * Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active.
 * @param downloadId The id of the download to resume.
 * @param callback Called when the resume request is completed.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$downloads$resume(
  downloadId: number,
  callback?: () => void
): void;

/**
 * Cancel a download. When callback is run, the download is cancelled, completed, interrupted or doesn't exist anymore.
 * @param downloadId The id of the download to cancel.
 * @param callback Called when the cancel request is completed.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$downloads$cancel(
  downloadId: number,
  callback?: () => void
): void;

/**
 * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set for its hostname. If both filename and saveAs are specified, then the Save As dialog will be displayed, pre-populated with the specified filename. If the download started successfully, callback will be called with the new DownloadItem's downloadId. If there was an error starting the download, then callback will be called with downloadId=undefined and runtime.lastError will contain a descriptive string. The error strings are not guaranteed to remain backwards compatible between releases. Extensions must not parse it.
 * @param options What to download and how.
 * @param callback Called with the id of the new DownloadItem.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(integer downloadId) {...};
 */
declare export function chrome$downloads$download(
  options: chrome$downloads$DownloadOptions,
  callback?: (downloadId: number) => void
): void;

/**
 * Open the downloaded file now if the DownloadItem is complete; otherwise returns an error through runtime.lastError. Requires the "downloads.open" permission in addition to the "downloads" permission. An onChanged event will fire when the item is opened for the first time.
 * @param downloadId The identifier for the downloaded file.
 */
declare export function chrome$downloads$open(downloadId: number): void;

/**
 * Show the downloaded file in its folder in a file manager.
 * @param downloadId The identifier for the downloaded file.
 */
declare export function chrome$downloads$show(downloadId: number): void;

/**
 * Show the default Downloads folder in a file manager.
 */
declare export function chrome$downloads$showDefaultFolder(): void;

/**
 * Erase matching DownloadItem from history without deleting the downloaded file. An onErased event will fire for each DownloadItem that matches query, then callback will be called.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(array of integer erasedIds) {...};
 */
declare export function chrome$downloads$erase(
  query: chrome$downloads$DownloadQuery,
  callback: (erasedIds: number[]) => void
): void;

/**
 * Remove the downloaded file if it exists and the DownloadItem is complete; otherwise return an error through runtime.lastError.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$downloads$removeFile(
  downloadId: number,
  callback?: () => void
): void;

/**
 * Prompt the user to accept a dangerous download. Can only be called from a visible context (tab, window, or page/browser action popup). Does not automatically accept dangerous downloads. If the download is accepted, then an onChanged event will fire, otherwise nothing will happen. When all the data is fetched into a temporary file and either the download is not dangerous or the danger has been accepted, then the temporary file is renamed to the target filename, the |state| changes to 'complete', and onChanged fires.
 * @param downloadId The identifier for the DownloadItem.
 * @param callback Called when the danger prompt dialog closes.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$downloads$acceptDanger(
  downloadId: number,
  callback: () => void
): void;

/**
 * Initiate dragging the downloaded file to another application. Call in a javascript ondragstart handler.
 */
declare export function chrome$downloads$drag(downloadId: number): void;

/**
 * Enable or disable the gray shelf at the bottom of every window associated with the current browser profile. The shelf will be disabled as long as at least one extension has disabled it. Enabling the shelf while at least one other extension has disabled it will return an error through runtime.lastError. Requires the "downloads.shelf" permission in addition to the "downloads" permission.
 */
declare export function chrome$downloads$setShelfEnabled(
  enabled: boolean
): void;

/**
 * When any of a DownloadItem's properties except bytesReceived and estimatedEndTime changes, this event fires with the downloadId and an object containing the properties that changed.
 */
declare export var chrome$downloads$onChanged: chrome$downloads$DownloadChangedEvent;

/**
 * This event fires with the DownloadItem object when a download begins.
 */
declare export var chrome$downloads$onCreated: chrome$downloads$DownloadCreatedEvent;

/**
 * Fires with the downloadId when a download is erased from history.
 */
declare export var chrome$downloads$onErased: chrome$downloads$DownloadErasedEvent;

/**
 * During the filename determination process, extensions will be given the opportunity to override the target DownloadItem.filename. Each extension may not register more than one listener for this event. Each listener must call suggest exactly once, either synchronously or asynchronously. If the listener calls suggest asynchronously, then it must return true. If the listener neither calls suggest synchronously nor returns true, then suggest will be called automatically. The DownloadItem will not complete until all listeners have called suggest. Listeners may call suggest without any arguments in order to allow the download to use downloadItem.filename for its filename, or pass a suggestion object to suggest in order to override the target filename. If more than one extension overrides the filename, then the last extension installed whose listener passes a suggestion object to suggest wins. In order to avoid confusion regarding which extension will win, users should not install extensions that may conflict. If the download is initiated by download and the target filename is known before the MIME type and tentative filename have been determined, pass filename to download instead.
 */
declare export var chrome$downloads$onDeterminingFilename: chrome$downloads$DownloadDeterminingFilenameEvent;

declare var npm$namespace$chrome$enterprise: {
  platformKeys: typeof npm$namespace$chrome$enterprise$platformKeys,
  deviceAttributes: typeof npm$namespace$chrome$enterprise$deviceAttributes
};

declare var npm$namespace$chrome$enterprise$platformKeys: {
  getToken: typeof chrome$enterprise$platformKeys$getToken,
  getCertificates: typeof chrome$enterprise$platformKeys$getCertificates,
  importCertificate: typeof chrome$enterprise$platformKeys$importCertificate,
  removeCertificate: typeof chrome$enterprise$platformKeys$removeCertificate
};
export interface chrome$enterprise$platformKeys$Token {
  /**
   * Uniquely identifies this Token.
   * Static IDs are "user" and "system", referring to the platform's user-specific and the system-wide hardware token, respectively. Any other tokens (with other identifiers) might be returned by enterprise.platformKeys.getTokens.
   */
  id: string;

  /**
   * Implements the WebCrypto's SubtleCrypto interface. The cryptographic operations, including key generation, are hardware-backed.
   * Only non-extractable RSASSA-PKCS1-V1_5 keys with modulusLength up to 2048 can be generated. Each key can be used for signing data at most once.
   * Keys generated on a specific Token cannot be used with any other Tokens, nor can they be used with window.crypto.subtle. Equally, Key objects created with window.crypto.subtle cannot be used with this interface.
   */
  subtleCrypto: SubtleCrypto;
}

/**
 * Returns the available Tokens. In a regular user's session the list will always contain the user's token with id "user". If a system-wide TPM token is available, the returned list will also contain the system-wide token with id "system". The system-wide token will be the same for all sessions on this device (device in the sense of e.g. a Chromebook).
 * @param callback Invoked by getTokens with the list of available Tokens.
 * The callback parameter should be a function that looks like this:
 * function(array of Token tokens) {...};
 * Parameter tokens: The list of available tokens.
 */
declare export function chrome$enterprise$platformKeys$getToken(
  callback: (tokens: chrome$enterprise$platformKeys$Token[]) => void
): void;

/**
 * Returns the list of all client certificates available from the given token. Can be used to check for the existence and expiration of client certificates that are usable for a certain authentication.
 * @param tokenId The id of a Token returned by getTokens.
 * @param callback Called back with the list of the available certificates.
 * The callback parameter should be a function that looks like this:
 * function(array of ArrayBuffer certificates) {...};
 * Parameter certificates: The list of certificates, each in DER encoding of a X.509 certificate.
 */
declare export function chrome$enterprise$platformKeys$getCertificates(
  tokenId: string,
  callback: (certificates: ArrayBuffer) => void
): void;

/**
 * Imports certificate to the given token if the certified key is already stored in this token. After a successful certification request, this function should be used to store the obtained certificate and to make it available to the operating system and browser for authentication.
 * @param tokenId The id of a Token returned by getTokens.
 * @param certificate The DER encoding of a X.509 certificate.
 * @param callback Called back when this operation is finished.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$enterprise$platformKeys$importCertificate(
  tokenId: string,
  certificate: ArrayBuffer,
  callback?: () => void
): void;

/**
 * Removes certificate from the given token if present. Should be used to remove obsolete certificates so that they are not considered during authentication and do not clutter the certificate choice. Should be used to free storage in the certificate store.
 * @param tokenId The id of a Token returned by getTokens.
 * @param certificate The DER encoding of a X.509 certificate.
 * @param callback Called back when this operation is finished.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$enterprise$platformKeys$removeCertificate(
  tokenId: string,
  certificate: ArrayBuffer,
  callback?: () => void
): void;

declare var npm$namespace$chrome$enterprise$deviceAttributes: {
  getDirectoryDeviceId: typeof chrome$enterprise$deviceAttributes$getDirectoryDeviceId,
  getDeviceSerialNumber: typeof chrome$enterprise$deviceAttributes$getDeviceSerialNumber,
  getDeviceAssetId: typeof chrome$enterprise$deviceAttributes$getDeviceAssetId,
  getDeviceAnnotatedLocation: typeof chrome$enterprise$deviceAttributes$getDeviceAnnotatedLocation
};

/**
 * @description Fetches the value of the device identifier of the directory API, that is generated by the server and identifies the cloud record of the device for querying in the cloud directory API.
 * @export
 * @param callback Called with the device identifier of the directory API when received.
 * The callback parameter should be a function that looks like this:
 * function(string deviceId) {...};
 */
declare export function chrome$enterprise$deviceAttributes$getDirectoryDeviceId(
  callback: (deviceId: string) => void
): void;

/**
 * @since Chrome 66.
 * @description Fetches the device's serial number.
 * Please note the purpose of this API is to administrate the device
 * (e.g. generating Certificate Sign Requests for device-wide certificates).
 * This API may not be used for tracking devices without the consent of the device's administrator.
 * If the current user is not affiliated, returns an empty string.
 * @param callback Called with the serial number of the device.
 */
declare export function chrome$enterprise$deviceAttributes$getDeviceSerialNumber(
  callback: (serialNumber: string) => void
): void;

/**
 * @since Chrome 66.
 * @description Fetches the administrator-annotated Asset Id.
 * If the current user is not affiliated or no Asset Id has been set by the administrator, returns an empty string.
 * @param callback Called with the Asset ID of the device.
 */
declare export function chrome$enterprise$deviceAttributes$getDeviceAssetId(
  callback: (assetId: string) => void
): void;

/**
 * @since Chrome 66.
 * @description Fetches the administrator-annotated Location.
 * If the current user is not affiliated or no Annotated Location has been set by the administrator, returns an empty string.
 * @param callback Called with the Annotated Location of the device.
 */
declare export function chrome$enterprise$deviceAttributes$getDeviceAnnotatedLocation(
  callback: (annotatedLocation: string) => void
): void;

/**
 * Filters URLs for various criteria. See event filtering. All criteria are case sensitive.
 */
export interface chrome$events$UrlFilter {
  /**
   * Optional. Matches if the scheme of the URL is equal to any of the schemes specified in the array.
   */
  schemes?: string[];

  /**
   * Optional.
   *  Since Chrome 23.
   * Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.
   */
  urlMatches?: string;

  /**
   * Optional. Matches if the path segment of the URL contains a specified string.
   */
  pathContains?: string;

  /**
   * Optional. Matches if the host name of the URL ends with a specified string.
   */
  hostSuffix?: string;

  /**
   * Optional. Matches if the host name of the URL starts with a specified string.
   */
  hostPrefix?: string;

  /**
   * Optional. Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.
   */
  hostContains?: string;

  /**
   * Optional. Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.
   */
  urlContains?: string;

  /**
   * Optional. Matches if the query segment of the URL ends with a specified string.
   */
  querySuffix?: string;

  /**
   * Optional. Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.
   */
  urlPrefix?: string;

  /**
   * Optional. Matches if the host name of the URL is equal to a specified string.
   */
  hostEquals?: string;

  /**
   * Optional. Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.
   */
  urlEquals?: string;

  /**
   * Optional. Matches if the query segment of the URL contains a specified string.
   */
  queryContains?: string;

  /**
   * Optional. Matches if the path segment of the URL starts with a specified string.
   */
  pathPrefix?: string;

  /**
   * Optional. Matches if the path segment of the URL is equal to a specified string.
   */
  pathEquals?: string;

  /**
   * Optional. Matches if the path segment of the URL ends with a specified string.
   */
  pathSuffix?: string;

  /**
   * Optional. Matches if the query segment of the URL is equal to a specified string.
   */
  queryEquals?: string;

  /**
   * Optional. Matches if the query segment of the URL starts with a specified string.
   */
  queryPrefix?: string;

  /**
   * Optional. Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.
   */
  urlSuffix?: string;

  /**
   * Optional. Matches if the port of the URL is contained in any of the specified port lists. For example [80, 443, [1000, 1200]] matches all requests on port 80, 443 and in the range 1000-1200.
   */
  ports?: any[];

  /**
   * Optional.
   *  Since Chrome 28.
   * Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.
   */
  originAndPathMatches?: string;
}

/**
 * An object which allows the addition and removal of listeners for a Chrome event.
 */
export interface chrome$events$Event<T: Function> {
  /**
   * Registers an event listener callback to an event.
   * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
   * The callback parameter should be a function that looks like this:
   * function() {...};
   */
  addListener(callback: T): void;

  /**
   * Returns currently registered rules.
   * @param callback Called with registered rules.
   * The callback parameter should be a function that looks like this:
   * function(array of Rule rules) {...};
   * Parameter rules: Rules that were registered, the optional parameters are filled with values.
   */
  getRules(callback: (rules: chrome$events$Rule[]) => void): void;

  /**
   * Returns currently registered rules.
   * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are returned.
   * @param callback Called with registered rules.
   * The callback parameter should be a function that looks like this:
   * function(array of Rule rules) {...};
   * Parameter rules: Rules that were registered, the optional parameters are filled with values.
   */
  getRules(
    ruleIdentifiers: string[],
    callback: (rules: chrome$events$Rule[]) => void
  ): void;

  /**
   * @param callback Listener whose registration status shall be tested.
   */
  hasListener(callback: T): boolean;

  /**
   * Unregisters currently registered rules.
   * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are unregistered.
   * @param callback Called when rules were unregistered.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function() {...};
   */
  removeRules(ruleIdentifiers?: string[], callback?: () => void): void;

  /**
   * Unregisters currently registered rules.
   * @param callback Called when rules were unregistered.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function() {...};
   */
  removeRules(callback?: () => void): void;

  /**
   * Registers rules to handle events.
   * @param rules Rules to be registered. These do not replace previously registered rules.
   * @param callback Called with registered rules.
   * If you specify the callback parameter, it should be a function that looks like this:
   * function(array of Rule rules) {...};
   * Parameter rules: Rules that were registered, the optional parameters are filled with values.
   */
  addRules(
    rules: chrome$events$Rule[],
    callback?: (rules: chrome$events$Rule[]) => void
  ): void;

  /**
   * Deregisters an event listener callback from an event.
   * @param callback Listener that shall be unregistered.
   * The callback parameter should be a function that looks like this:
   * function() {...};
   */
  removeListener(callback: T): void;
  hasListeners(): boolean;
}

/**
 * Description of a declarative rule for handling events.
 */
export interface chrome$events$Rule {
  /**
   * Optional. Optional priority of this rule. Defaults to 100.
   */
  priority?: number;

  /**
   * List of conditions that can trigger the actions.
   */
  conditions: any[];

  /**
   * Optional. Optional identifier that allows referencing this rule.
   */
  id?: string;

  /**
   * List of actions that are triggered if one of the condtions is fulfilled.
   */
  actions: any[];

  /**
   * Optional.
   *  Since Chrome 28.
   * Tags can be used to annotate rules and perform operations on sets of rules.
   */
  tags?: string[];
}

declare var npm$namespace$chrome$extension: {
  getBackgroundPage: typeof chrome$extension$getBackgroundPage,
  getURL: typeof chrome$extension$getURL,
  setUpdateUrlData: typeof chrome$extension$setUpdateUrlData,
  getViews: typeof chrome$extension$getViews,
  isAllowedFileSchemeAccess: typeof chrome$extension$isAllowedFileSchemeAccess,
  isAllowedIncognitoAccess: typeof chrome$extension$isAllowedIncognitoAccess,
  sendRequest: typeof chrome$extension$sendRequest,
  getExtensionTabs: typeof chrome$extension$getExtensionTabs,
  inIncognitoContext: typeof chrome$extension$inIncognitoContext,
  lastError: typeof chrome$extension$lastError,
  onRequest: typeof chrome$extension$onRequest,
  onRequestExternal: typeof chrome$extension$onRequestExternal
};
export interface chrome$extension$FetchProperties {
  /**
   * Optional. The window to restrict the search to. If omitted, returns all views.
   */
  windowId?: number;

  /**
   * Optional. The type of view to get. If omitted, returns all views (including background pages and tabs). Valid values: 'tab', 'notification', 'popup'.
   */
  type?: string;
}

export interface chrome$extension$LastError {
  /**
   * Description of the error that has taken place.
   */
  message: string;
}

export type chrome$extension$OnRequestEvent = {} & chrome$events$Event<
  | ((
      request: any,
      sender: chrome$runtime$MessageSender,
      sendResponse: (response: any) => void
    ) => void)
  | ((
      sender: chrome$runtime$MessageSender,
      sendResponse: (response: any) => void
    ) => void)
>;

/**
 * Since Chrome 7.
 * True for content scripts running inside incognito tabs, and for extension pages running inside an incognito process. The latter only applies to extensions with 'split' incognito_behavior.
 */
declare export var chrome$extension$inIncognitoContext: boolean;

/**
 * Set for the lifetime of a callback if an ansychronous extension api has resulted in an error. If no error has occured lastError will be undefined.
 */
declare export var chrome$extension$lastError: chrome$extension$LastError;

/**
 * Returns the JavaScript 'window' object for the background page running inside the current extension. Returns null if the extension has no background page.
 */
declare export function chrome$extension$getBackgroundPage(): windows$Window | null;

/**
 * Converts a relative path within an extension install directory to a fully-qualified URL.
 * @param path A path to a resource within an extension expressed relative to its install directory.
 */
declare export function chrome$extension$getURL(path: string): string;

/**
 * Sets the value of the ap CGI parameter used in the extension's update URL. This value is ignored for extensions that are hosted in the Chrome Extension Gallery.
 * Since Chrome 9.
 */
declare export function chrome$extension$setUpdateUrlData(data: string): void;

/**
 * Returns an array of the JavaScript 'window' objects for each of the pages running inside the current extension.
 */
declare export function chrome$extension$getViews(
  fetchProperties?: chrome$extension$FetchProperties
): windows$Window[];

/**
 * Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled 'Allow access to File URLs' checkbox.
 * Since Chrome 12.
 * @param callback The callback parameter should be a function that looks like this:
 * function(boolean isAllowedAccess) {...};
 * Parameter isAllowedAccess: True if the extension can access the 'file://' scheme, false otherwise.
 */
declare export function chrome$extension$isAllowedFileSchemeAccess(
  callback: (isAllowedAccess: boolean) => void
): void;

/**
 * Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed in Incognito' checkbox.
 * Since Chrome 12.
 * @param callback The callback parameter should be a function that looks like this:
 * function(boolean isAllowedAccess) {...};
 * Parameter isAllowedAccess: True if the extension has access to Incognito mode, false otherwise.
 */
declare export function chrome$extension$isAllowedIncognitoAccess(
  callback: (isAllowedAccess: boolean) => void
): void;

/**
 * Sends a single request to other listeners within the extension. Similar to runtime.connect, but only sends a single request with an optional response. The extension.onRequest event is fired in each page of the extension.
 * @deprecated Deprecated since Chrome 33. Please use runtime.sendMessage.
 * @param extensionId The extension ID of the extension you want to connect to. If omitted, default is your own extension.
 * @param responseCallback If you specify the responseCallback parameter, it should be a function that looks like this:
 * function(any response) {...};
 * Parameter response: The JSON response object sent by the handler of the request. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
 */
declare export function chrome$extension$sendRequest(
  extensionId: string,
  request: any,
  responseCallback?: (response: any) => void
): void;

/**
 * Sends a single request to other listeners within the extension. Similar to runtime.connect, but only sends a single request with an optional response. The extension.onRequest event is fired in each page of the extension.
 * @deprecated Deprecated since Chrome 33. Please use runtime.sendMessage.
 * @param responseCallback If you specify the responseCallback parameter, it should be a function that looks like this:
 * function(any response) {...};
 * Parameter response: The JSON response object sent by the handler of the request. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
 */
declare export function chrome$extension$sendRequest(
  request: any,
  responseCallback?: (response: any) => void
): void;

/**
 * Returns an array of the JavaScript 'window' objects for each of the tabs running inside the current extension. If windowId is specified, returns only the 'window' objects of tabs attached to the specified window.
 * @deprecated Deprecated since Chrome 33. Please use extension.getViews {type: "tab"}.
 */
declare export function chrome$extension$getExtensionTabs(
  windowId?: number
): windows$Window[];

/**
 * Fired when a request is sent from either an extension process or a content script.
 * @deprecated Deprecated since Chrome 33. Please use runtime.onMessage.
 */
declare export var chrome$extension$onRequest: chrome$extension$OnRequestEvent;

/**
 * Fired when a request is sent from another extension.
 * @deprecated Deprecated since Chrome 33. Please use runtime.onMessageExternal.
 */
declare export var chrome$extension$onRequestExternal: chrome$extension$OnRequestEvent;

declare var npm$namespace$chrome$fileBrowserHandler: {
  selectFile: typeof chrome$fileBrowserHandler$selectFile,
  onExecute: typeof chrome$fileBrowserHandler$onExecute
};
export interface chrome$fileBrowserHandler$SelectionParams {
  /**
   * Optional.
   *  List of file extensions that the selected file can have. The list is also used to specify what files to be shown in the select file dialog. Files with the listed extensions are only shown in the dialog. Extensions should not include the leading '.'. Example: ['jpg', 'png']
   * Since Chrome 23.
   */
  allowedFileExtensions?: string[];

  /**
   * Suggested name for the file.
   */
  suggestedName: string;
}

export interface chrome$fileBrowserHandler$SelectionResult {
  /**
   * Optional. Selected file entry. It will be null if a file hasn't been selected.
   */
  entry?: Object | null;

  /**
   * Whether the file has been selected.
   */
  success: boolean;
}

/**
 * Event details payload for fileBrowserHandler.onExecute event.
 */
export interface chrome$fileBrowserHandler$FileHandlerExecuteEventDetails {
  /**
   * Optional. The ID of the tab that raised this event. Tab IDs are unique within a browser session.
   */
  tab_id?: number;

  /**
   * Array of Entry instances representing files that are targets of this action (selected in ChromeOS file browser).
   */
  entries: any[];
}

export type chrome$fileBrowserHandler$FileBrowserHandlerExecuteEvent = {} & chrome$events$Event<
  (
    id: string,
    details: chrome$fileBrowserHandler$FileHandlerExecuteEventDetails
  ) => void
>;

/**
 * Prompts user to select file path under which file should be saved. When the file is selected, file access permission required to use the file (read, write and create) are granted to the caller. The file will not actually get created during the function call, so function caller must ensure its existence before using it. The function has to be invoked with a user gesture.
 * Since Chrome 21.
 * @param selectionParams Parameters that will be used while selecting the file.
 * @param callback Function called upon completion.
 * The callback parameter should be a function that looks like this:
 * function(object result) {...};
 * Parameter result: Result of the method.
 */
declare export function chrome$fileBrowserHandler$selectFile(
  selectionParams: chrome$fileBrowserHandler$SelectionParams,
  callback: (result: chrome$fileBrowserHandler$SelectionResult) => void
): void;

/**
 * Fired when file system action is executed from ChromeOS file browser.
 */
declare export var chrome$fileBrowserHandler$onExecute: chrome$fileBrowserHandler$FileBrowserHandlerExecuteEvent;

declare var npm$namespace$chrome$fileSystemProvider: {
  mount: typeof chrome$fileSystemProvider$mount,
  unmount: typeof chrome$fileSystemProvider$unmount,
  getAll: typeof chrome$fileSystemProvider$getAll,
  get: typeof chrome$fileSystemProvider$get,
  notify: typeof chrome$fileSystemProvider$notify,
  onUnmountRequested: typeof chrome$fileSystemProvider$onUnmountRequested,
  onGetMetadataRequested: typeof chrome$fileSystemProvider$onGetMetadataRequested,
  onReadDirectoryRequested: typeof chrome$fileSystemProvider$onReadDirectoryRequested,
  onOpenFileRequested: typeof chrome$fileSystemProvider$onOpenFileRequested,
  onCloseFileRequested: typeof chrome$fileSystemProvider$onCloseFileRequested,
  onReadFileRequested: typeof chrome$fileSystemProvider$onReadFileRequested,
  onCreateDirectoryRequested: typeof chrome$fileSystemProvider$onCreateDirectoryRequested,
  onDeleteEntryRequested: typeof chrome$fileSystemProvider$onDeleteEntryRequested,
  onCreateFileRequested: typeof chrome$fileSystemProvider$onCreateFileRequested,
  onCopyEntryRequested: typeof chrome$fileSystemProvider$onCopyEntryRequested,
  onMoveEntryRequested: typeof chrome$fileSystemProvider$onMoveEntryRequested,
  onTruncateRequested: typeof chrome$fileSystemProvider$onTruncateRequested,
  onWriteFileRequested: typeof chrome$fileSystemProvider$onWriteFileRequested,
  onAbortRequested: typeof chrome$fileSystemProvider$onAbortRequested,
  onConfigureRequested: typeof chrome$fileSystemProvider$onConfigureRequested,
  onMountRequested: typeof chrome$fileSystemProvider$onMountRequested,
  onAddWatcherRequested: typeof chrome$fileSystemProvider$onAddWatcherRequested,
  onRemoveWatcherRequested: typeof chrome$fileSystemProvider$onRemoveWatcherRequested
};
export interface chrome$fileSystemProvider$OpenedFileInfo {
  /**
   * A request ID to be be used by consecutive read/write and close requests.
   */
  openRequestId: number;

  /**
   * The path of the opened file.
   */
  filePath: string;

  /**
   * Whether the file was opened for reading or writing.
   */
  mode: string;
}

export interface chrome$fileSystemProvider$FileWatchersInfo {
  /**
   * The path of the entry being observed.
   */
  entryPath: string;

  /**
   * Whether watching should include all child entries recursively. It can be true for directories only.
   */
  recursive: boolean;

  /**
   * Optional. Tag used by the last notification for the watcher.
   */
  lastTag?: string;
}

export interface chrome$fileSystemProvider$EntryMetadata {
  /**
   * True if it is a directory.
   */
  isDirectory: boolean;

  /**
   * Name of this entry (not full path name). Must not contain '/'. For root it must be empty.
   */
  name: string;

  /**
   * File size in bytes.
   */
  size: number;

  /**
   * The last modified time of this entry.
   */
  modificationTime: Date;

  /**
   * Optional. Mime type for the entry.
   */
  mimeType?: string;

  /**
   * Optional. Thumbnail image as a data URI in either PNG, JPEG or WEBP format, at most 32 KB in size. Optional, but can be provided only when explicitly requested by the onGetMetadataRequested event.
   */
  thumbnail?: string;
}

export interface chrome$fileSystemProvider$FileSystemInfo {
  /**
   * The identifier of the file system.
   */
  fileSystemId: string;

  /**
   * A human-readable name for the file system.
   */
  displayName: string;

  /**
   * Whether the file system supports operations which may change contents of the file system (such as creating, deleting or writing to files).
   */
  writable: boolean;

  /**
   * The maximum number of files that can be opened at once. If 0, then not limited.
   * @since Since Chrome 42.
   */
  openedFilesLimit: number;

  /**
   * List of currently opened files.
   * @since Since Chrome 42.
   */
  openedFiles: chrome$fileSystemProvider$OpenedFileInfo[];

  /**
   * Optional.
   *  Whether the file system supports the tag field for observing directories.
   * @since Since Chrome 45. Warning: this is the current Beta channel.
   */
  supportsNotifyTag?: boolean;

  /**
   * List of watchers.
   * @since Since Chrome 45. Warning: this is the current Beta channel.
   */
  watchers: chrome$fileSystemProvider$FileWatchersInfo[];
}

/**
 * @since Since Chrome 45. Warning: this is the current Beta channel.
 */
export interface chrome$fileSystemProvider$GetActionsRequestedOptions {
  /**
   * The identifier of the file system related to this operation.
   */
  fileSystemId: string;

  /**
   * The unique identifier of this request.
   */
  requestId: number;

  /**
   * The path of the entry to return the list of actions for.
   */
  entryPath: string;
}

/**
 * @since Since Chrome 45. Warning: this is the current Beta channel.
 */
export interface chrome$fileSystemProvider$Action {
  /**
   * The identifier of the action. Any string or CommonActionId for common actions.
   */
  id: string;

  /**
   * Optional. The title of the action. It may be ignored for common actions.
   */
  title?: string;
}

/**
 * @since Since Chrome 45. Warning: this is the current Beta channel.
 */
export interface chrome$fileSystemProvider$ExecuteActionRequestedOptions {
  /**
   * The identifier of the file system related to this operation.
   */
  fileSystemId: string;

  /**
   * The unique identifier of this request.
   */
  requestId: number;

  /**
   * The path of the entry to be used for the action.
   */
  entryPath: string;

  /**
   * The identifier of the action to be executed.
   */
  actionId: string;
}

export interface chrome$fileSystemProvider$MountOptions {
  /**
   * The string indentifier of the file system. Must be unique per each extension.
   */
  fileSystemId: string;

  /**
   * A human-readable name for the file system.
   */
  displayName: string;

  /**
   * Optional. Whether the file system supports operations which may change contents of the file system (such as creating, deleting or writing to files).
   */
  writable?: boolean;

  /**
   * Optional.
   *  The maximum number of files that can be opened at once. If not specified, or 0, then not limited.
   * @since Since Chrome 41.
   */
  openedFilesLimit?: number;

  /**
   * Optional.
   *  Whether the file system supports the tag field for observed directories.
   * @since Since Chrome 45. Warning: this is the current Beta channel.
   */
  supportsNotifyTag?: boolean;
}

export interface chrome$fileSystemProvider$UnmountOptions {
  /**
   * The identifier of the file system to be unmounted.
   */
  fileSystemId: string;
}

export interface chrome$fileSystemProvider$NotificationChange {
  /**
   * The path of the changed entry.
   */
  entryPath: string;

  /**
   * The type of the change which happened to the entry.
   */
  changeType: string;
}

export interface chrome$fileSystemProvider$NotificationOptions {
  /**
   * The identifier of the file system related to this change.
   */
  fileSystemId: string;

  /**
   * The path of the observed entry.
   */
  observedPath: string;

  /**
   * Mode of the observed entry.
   */
  recursive: boolean;

  /**
   * The type of the change which happened to the observed entry. If it is DELETED, then the observed entry will be automatically removed from the list of observed entries.
   */
  changeType: string;

  /**
   * Optional. List of changes to entries within the observed directory (including the entry itself)
   */
  changes?: chrome$fileSystemProvider$NotificationChange[];

  /**
   * Optional. Tag for the notification. Required if the file system was mounted with the supportsNotifyTag option. Note, that this flag is necessary to provide notifications about changes which changed even when the system was shutdown.
   */
  tag?: string;
}

export interface chrome$fileSystemProvider$RequestedEventOptions {
  /**
   * The identifier of the file system related to this operation.
   */
  fileSystemId: string;

  /**
   * The unique identifier of this request.
   */
  requestId: number;
}

export type chrome$fileSystemProvider$EntryPathRequestedEventOptions = {
  /**
   * The path of the entry to which this operation is related to.
   */
  entryPath: string
} & chrome$fileSystemProvider$RequestedEventOptions;

export type chrome$fileSystemProvider$MetadataRequestedEventOptions = {
  /**
   * Set to true if the thumbnail is requested.
   */
  thumbnail: boolean
} & chrome$fileSystemProvider$EntryPathRequestedEventOptions;

export type chrome$fileSystemProvider$DirectoryPathRequestedEventOptions = {
  /**
   * The path of the directory which is to be operated on.
   */
  directoryPath: string
} & chrome$fileSystemProvider$RequestedEventOptions;

export type chrome$fileSystemProvider$FilePathRequestedEventOptions = {
  /**
   * The path of the entry for the operation
   */
  filePath: string
} & chrome$fileSystemProvider$RequestedEventOptions;

export type chrome$fileSystemProvider$OpenFileRequestedEventOptions = {
  /**
   * Whether the file will be used for reading or writing.
   */
  mode: string
} & chrome$fileSystemProvider$FilePathRequestedEventOptions;

export type chrome$fileSystemProvider$OpenedFileRequestedEventOptions = {
  /**
   * A request ID used to open the file.
   */
  openRequestId: number
} & chrome$fileSystemProvider$RequestedEventOptions;

export type chrome$fileSystemProvider$OpenedFileOffsetRequestedEventOptions = {
  /**
   * Position in the file (in bytes) to start reading from.
   */
  offset: number,

  /**
   * Number of bytes to be returned.
   */
  length: number
} & chrome$fileSystemProvider$OpenedFileRequestedEventOptions;

export type chrome$fileSystemProvider$DirectoryPathRecursiveRequestedEventOptions = {
  /**
   * Whether the operation is recursive (for directories only).
   */
  recursive: boolean
} & chrome$fileSystemProvider$DirectoryPathRequestedEventOptions;

export type chrome$fileSystemProvider$EntryPathRecursiveRequestedEventOptions = {
  /**
   * Whether the operation is recursive (for directories only).
   */
  recursive: boolean
} & chrome$fileSystemProvider$EntryPathRequestedEventOptions;

export type chrome$fileSystemProvider$SourceTargetPathRequestedEventOptions = {
  /**
   * The source path for the operation.
   */
  sourcePath: string,

  /**
   * The destination path for the operation.
   */
  targetPath: string
} & chrome$fileSystemProvider$RequestedEventOptions;

export type chrome$fileSystemProvider$FilePathLengthRequestedEventOptions = {
  /**
   * Number of bytes to be retained after the operation completes.
   */
  length: number
} & chrome$fileSystemProvider$FilePathRequestedEventOptions;

export type chrome$fileSystemProvider$OpenedFileIoRequestedEventOptions = {
  /**
   * Position in the file (in bytes) to start operating from.
   */
  offset: number,

  /**
   * Buffer of bytes to be operated on the file.
   */
  data: ArrayBuffer
} & chrome$fileSystemProvider$OpenedFileRequestedEventOptions;

export type chrome$fileSystemProvider$OperationRequestedEventOptions = {
  /**
   * An ID of the request to which this operation is related.
   */
  operationRequestId: number
} & chrome$fileSystemProvider$RequestedEventOptions;

export type chrome$fileSystemProvider$RequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$RequestedEventOptions,
    successCallback: Function,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$MetadataRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$MetadataRequestedEventOptions,
    successCallback: (
      metadata: chrome$fileSystemProvider$EntryMetadata
    ) => void,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$DirectoryPathRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$DirectoryPathRequestedEventOptions,
    successCallback: (
      entries: chrome$fileSystemProvider$EntryMetadata[],
      hasMore: boolean
    ) => void,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$OpenFileRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$OpenFileRequestedEventOptions,
    successCallback: Function,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$OpenedFileRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$OpenedFileRequestedEventOptions,
    successCallback: Function,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$OpenedFileOffsetRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$OpenedFileOffsetRequestedEventOptions,
    successCallback: (data: ArrayBuffer, hasMore: boolean) => void,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$DirectoryPathRecursiveRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$DirectoryPathRecursiveRequestedEventOptions,
    successCallback: Function,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$EntryPathRecursiveRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$EntryPathRecursiveRequestedEventOptions,
    successCallback: Function,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$FilePathRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$FilePathRequestedEventOptions,
    successCallback: Function,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$SourceTargetPathRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$SourceTargetPathRequestedEventOptions,
    successCallback: Function,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$FilePathLengthRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$FilePathLengthRequestedEventOptions,
    successCallback: Function,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$OpenedFileIoRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$OpenedFileIoRequestedEventOptions,
    successCallback: Function,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$OperationRequestedEvent = {} & chrome$events$Event<
  (
    options: chrome$fileSystemProvider$OperationRequestedEventOptions,
    successCallback: Function,
    errorCallback: (error: string) => void
  ) => void
>;

export type chrome$fileSystemProvider$OptionlessRequestedEvent = {} & chrome$events$Event<
  (successCallback: Function, errorCallback: (error: string) => void) => void
>;

/**
 * Mounts a file system with the given fileSystemId and displayName. displayName will be shown in the left panel of Files.app. displayName can contain any characters including '/', but cannot be an empty string. displayName must be descriptive but doesn't have to be unique. The fileSystemId must not be an empty string.
 * Depending on the type of the file system being mounted, the source option must be set appropriately.
 * In case of an error, runtime.lastError will be set with a corresponding error code.
 * @param callback A generic result callback to indicate success or failure.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$fileSystemProvider$mount(
  options: chrome$fileSystemProvider$MountOptions,
  callback?: () => void
): void;

/**
 * Unmounts a file system with the given fileSystemId. It must be called after onUnmountRequested is invoked. Also, the providing extension can decide to perform unmounting if not requested (eg. in case of lost connection, or a file error).
 * In case of an error, runtime.lastError will be set with a corresponding error code.
 * @param callback A generic result callback to indicate success or failure.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$fileSystemProvider$unmount(
  options: chrome$fileSystemProvider$UnmountOptions,
  callback?: () => void
): void;

/**
 * Returns all file systems mounted by the extension.
 * @param callback Callback to receive the result of getAll function.
 * The callback parameter should be a function that looks like this:
 * function(array of FileSystemInfo fileSystems) {...};
 */
declare export function chrome$fileSystemProvider$getAll(
  callback: (fileSystems: chrome$fileSystemProvider$FileSystemInfo[]) => void
): void;

/**
 * Returns information about a file system with the passed fileSystemId.
 * @since Since Chrome 42.
 * @param callback Callback to receive the result of get function.
 * The callback parameter should be a function that looks like this:
 * function(FileSystemInfo fileSystem) {...};
 */
declare export function chrome$fileSystemProvider$get(
  fileSystemId: string,
  callback: (fileSystem: chrome$fileSystemProvider$FileSystemInfo) => void
): void;

/**
 * Notifies about changes in the watched directory at observedPath in recursive mode. If the file system is mounted with supportsNofityTag, then tag must be provided, and all changes since the last notification always reported, even if the system was shutdown. The last tag can be obtained with getAll.
 * To use, the file_system_provider.notify manifest option must be set to true.
 * Value of tag can be any string which is unique per call, so it's possible to identify the last registered notification. Eg. if the providing extension starts after a reboot, and the last registered notification's tag is equal to "123", then it should call notify for all changes which happened since the change tagged as "123". It cannot be an empty string.
 * Not all providers are able to provide a tag, but if the file system has a changelog, then the tag can be eg. a change number, or a revision number.
 * Note that if a parent directory is removed, then all descendant entries are also removed, and if they are watched, then the API must be notified about the fact. Also, if a directory is renamed, then all descendant entries are in fact removed, as there is no entry under their original paths anymore.
 * In case of an error, runtime.lastError will be set will a corresponding error code.
 * @param callback A generic result callback to indicate success or failure.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$fileSystemProvider$notify(
  options: chrome$fileSystemProvider$NotificationOptions,
  callback: () => void
): void;

/**
 * Raised when unmounting for the file system with the fileSystemId identifier is requested. In the response, the unmount API method must be called together with successCallback. If unmounting is not possible (eg. due to a pending operation), then errorCallback must be called.
 */
declare export var chrome$fileSystemProvider$onUnmountRequested: chrome$fileSystemProvider$RequestedEvent;

/**
 * Raised when metadata of a file or a directory at entryPath is requested. The metadata must be returned with the successCallback call. In case of an error, errorCallback must be called.
 */
declare export var chrome$fileSystemProvider$onGetMetadataRequested: chrome$fileSystemProvider$MetadataRequestedEvent;

/**
 * Raised when contents of a directory at directoryPath are requested. The results must be returned in chunks by calling the successCallback several times. In case of an error, errorCallback must be called.
 */
declare export var chrome$fileSystemProvider$onReadDirectoryRequested: chrome$fileSystemProvider$DirectoryPathRequestedEvent;

/**
 * Raised when opening a file at filePath is requested. If the file does not exist, then the operation must fail. Maximum number of files opened at once can be specified with MountOptions.
 */
declare export var chrome$fileSystemProvider$onOpenFileRequested: chrome$fileSystemProvider$OpenFileRequestedEvent;

/**
 * Raised when opening a file previously opened with openRequestId is requested to be closed.
 */
declare export var chrome$fileSystemProvider$onCloseFileRequested: chrome$fileSystemProvider$OpenedFileRequestedEvent;

/**
 * Raised when reading contents of a file opened previously with openRequestId is requested. The results must be returned in chunks by calling successCallback several times. In case of an error, errorCallback must be called.
 */
declare export var chrome$fileSystemProvider$onReadFileRequested: chrome$fileSystemProvider$OpenedFileOffsetRequestedEvent;

/**
 * Raised when creating a directory is requested. The operation must fail with the EXISTS error if the target directory already exists. If recursive is true, then all of the missing directories on the directory path must be created.
 */
declare export var chrome$fileSystemProvider$onCreateDirectoryRequested: chrome$fileSystemProvider$DirectoryPathRecursiveRequestedEvent;

/**
 * Raised when deleting an entry is requested. If recursive is true, and the entry is a directory, then all of the entries inside must be recursively deleted as well.
 */
declare export var chrome$fileSystemProvider$onDeleteEntryRequested: chrome$fileSystemProvider$EntryPathRecursiveRequestedEvent;

/**
 * Raised when creating a file is requested. If the file already exists, then errorCallback must be called with the "EXISTS" error code.
 */
declare export var chrome$fileSystemProvider$onCreateFileRequested: chrome$fileSystemProvider$FilePathRequestedEvent;

/**
 * Raised when copying an entry (recursively if a directory) is requested. If an error occurs, then errorCallback must be called.
 */
declare export var chrome$fileSystemProvider$onCopyEntryRequested: chrome$fileSystemProvider$SourceTargetPathRequestedEvent;

/**
 * Raised when moving an entry (recursively if a directory) is requested. If an error occurs, then errorCallback must be called.
 */
declare export var chrome$fileSystemProvider$onMoveEntryRequested: chrome$fileSystemProvider$SourceTargetPathRequestedEvent;

/**
 * Raised when truncating a file to a desired length is requested. If an error occurs, then errorCallback must be called.
 */
declare export var chrome$fileSystemProvider$onTruncateRequested: chrome$fileSystemProvider$FilePathLengthRequestedEvent;

/**
 * Raised when writing contents to a file opened previously with openRequestId is requested.
 */
declare export var chrome$fileSystemProvider$onWriteFileRequested: chrome$fileSystemProvider$OpenedFileIoRequestedEvent;

/**
 * Raised when aborting an operation with operationRequestId is requested. The operation executed with operationRequestId must be immediately stopped and successCallback of this abort request executed. If aborting fails, then errorCallback must be called. Note, that callbacks of the aborted operation must not be called, as they will be ignored. Despite calling errorCallback, the request may be forcibly aborted.
 */
declare export var chrome$fileSystemProvider$onAbortRequested: chrome$fileSystemProvider$OperationRequestedEvent;

/**
 * Raised when showing a configuration dialog for fileSystemId is requested. If it's handled, the file_system_provider.configurable manfiest option must be set to true.
 * @since Since Chrome 44.
 */
declare export var chrome$fileSystemProvider$onConfigureRequested: chrome$fileSystemProvider$RequestedEvent;

/**
 * Raised when showing a dialog for mounting a new file system is requested. If the extension/app is a file handler, then this event shouldn't be handled. Instead app.runtime.onLaunched should be handled in order to mount new file systems when a file is opened. For multiple mounts, the file_system_provider.multiple_mounts manifest option must be set to true.
 * @since Since Chrome 44.
 */
declare export var chrome$fileSystemProvider$onMountRequested: chrome$fileSystemProvider$OptionlessRequestedEvent;

/**
 * Raised when setting a new directory watcher is requested. If an error occurs, then errorCallback must be called.
 * @since Since Chrome 45. Warning: this is the current Beta channel.
 */
declare export var chrome$fileSystemProvider$onAddWatcherRequested: chrome$fileSystemProvider$EntryPathRecursiveRequestedEvent;

/**
 * Raised when the watcher should be removed. If an error occurs, then errorCallback must be called.
 * @since Since Chrome 45. Warning: this is the current Beta channel.
 */
declare export var chrome$fileSystemProvider$onRemoveWatcherRequested: chrome$fileSystemProvider$EntryPathRecursiveRequestedEvent;

declare var npm$namespace$chrome$fontSettings: {
  setDefaultFontSize: typeof chrome$fontSettings$setDefaultFontSize,
  getFont: typeof chrome$fontSettings$getFont,
  getDefaultFontSize: typeof chrome$fontSettings$getDefaultFontSize,
  getMinimumFontSize: typeof chrome$fontSettings$getMinimumFontSize,
  setMinimumFontSize: typeof chrome$fontSettings$setMinimumFontSize,
  getDefaultFixedFontSize: typeof chrome$fontSettings$getDefaultFixedFontSize,
  clearDefaultFontSize: typeof chrome$fontSettings$clearDefaultFontSize,
  setDefaultFixedFontSize: typeof chrome$fontSettings$setDefaultFixedFontSize,
  clearFont: typeof chrome$fontSettings$clearFont,
  setFont: typeof chrome$fontSettings$setFont,
  clearMinimumFontSize: typeof chrome$fontSettings$clearMinimumFontSize,
  getFontList: typeof chrome$fontSettings$getFontList,
  clearDefaultFixedFontSize: typeof chrome$fontSettings$clearDefaultFixedFontSize,
  onDefaultFixedFontSizeChanged: typeof chrome$fontSettings$onDefaultFixedFontSizeChanged,
  onDefaultFontSizeChanged: typeof chrome$fontSettings$onDefaultFontSizeChanged,
  onMinimumFontSizeChanged: typeof chrome$fontSettings$onMinimumFontSizeChanged,
  onFontChanged: typeof chrome$fontSettings$onFontChanged
};

/**
 * Represents a font name.
 */
export interface chrome$fontSettings$FontName {
  /**
   * The display name of the font.
   */
  displayName: string;

  /**
   * The font ID.
   */
  fontId: string;
}

export interface chrome$fontSettings$DefaultFontSizeDetails {
  /**
   * The font size in pixels.
   */
  pixelSize: number;
}

export interface chrome$fontSettings$FontDetails {
  /**
   * The generic font family for the font.
   */
  genericFamily: string;

  /**
   * Optional. The script for the font. If omitted, the global script font setting is affected.
   */
  script?: string;
}

export interface chrome$fontSettings$FullFontDetails {
  /**
   * The generic font family for which the font setting has changed.
   */
  genericFamily: string;

  /**
   * The level of control this extension has over the setting.
   */
  levelOfControl: string;

  /**
   * Optional. The script code for which the font setting has changed.
   */
  script?: string;

  /**
   * The font ID. See the description in getFont.
   */
  fontId: string;
}

export interface chrome$fontSettings$FontDetailsResult {
  /**
   * The level of control this extension has over the setting.
   */
  levelOfControl: string;

  /**
   * The font ID. Rather than the literal font ID preference value, this may be the ID of the font that the system resolves the preference value to. So, fontId can differ from the font passed to setFont, if, for example, the font is not available on the system. The empty string signifies fallback to the global script font setting.
   */
  fontId: string;
}

export interface chrome$fontSettings$FontSizeDetails {
  /**
   * The font size in pixels.
   */
  pixelSize: number;

  /**
   * The level of control this extension has over the setting.
   */
  levelOfControl: string;
}

export interface chrome$fontSettings$SetFontSizeDetails {
  /**
   * The font size in pixels.
   */
  pixelSize: number;
}

export type chrome$fontSettings$SetFontDetails = {
  /**
   * The font ID. The empty string means to fallback to the global script font setting.
   */
  fontId: string
} & chrome$fontSettings$FontDetails;

export type chrome$fontSettings$DefaultFixedFontSizeChangedEvent = {} & chrome$events$Event<
  (details: chrome$fontSettings$FontSizeDetails) => void
>;

export type chrome$fontSettings$DefaultFontSizeChangedEvent = {} & chrome$events$Event<
  (details: chrome$fontSettings$FontSizeDetails) => void
>;

export type chrome$fontSettings$MinimumFontSizeChangedEvent = {} & chrome$events$Event<
  (details: chrome$fontSettings$FontSizeDetails) => void
>;

export type chrome$fontSettings$FontChangedEvent = {} & chrome$events$Event<
  (details: chrome$fontSettings$FullFontDetails) => void
>;

/**
 * Sets the default font size.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$fontSettings$setDefaultFontSize(
  details: chrome$fontSettings$DefaultFontSizeDetails,
  callback?: Function
): void;

/**
 * Gets the font for a given script and generic font family.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(object details) {...};
 */
declare export function chrome$fontSettings$getFont(
  details: chrome$fontSettings$FontDetails,
  callback?: (details: chrome$fontSettings$FontDetailsResult) => void
): void;

/**
 * Gets the default font size.
 * @param details This parameter is currently unused.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(object details) {...};
 */
declare export function chrome$fontSettings$getDefaultFontSize(
  details?: Object,
  callback?: (options: chrome$fontSettings$FontSizeDetails) => void
): void;

/**
 * Gets the minimum font size.
 * @param details This parameter is currently unused.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(object details) {...};
 */
declare export function chrome$fontSettings$getMinimumFontSize(
  details?: chrome$fontSettings$FontSizeDetails,
  callback?: (options: chrome$fontSettings$FontSizeDetails) => void
): void;

/**
 * Sets the minimum font size.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$fontSettings$setMinimumFontSize(
  details: chrome$fontSettings$SetFontSizeDetails,
  callback?: Function
): void;

/**
 * Gets the default size for fixed width fonts.
 * @param details This parameter is currently unused.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(object details) {...};
 */
declare export function chrome$fontSettings$getDefaultFixedFontSize(
  details?: Object,
  callback?: (details: chrome$fontSettings$FontSizeDetails) => void
): void;

/**
 * Clears the default font size set by this extension, if any.
 * @param details This parameter is currently unused.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$fontSettings$clearDefaultFontSize(
  details?: Object,
  callback?: Function
): void;

/**
 * Sets the default size for fixed width fonts.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$fontSettings$setDefaultFixedFontSize(
  details: chrome$fontSettings$SetFontSizeDetails,
  callback?: Function
): void;

/**
 * Clears the font set by this extension, if any.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$fontSettings$clearFont(
  details: chrome$fontSettings$FontDetails,
  callback?: Function
): void;

/**
 * Sets the font for a given script and generic font family.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(object details) {...};
 */
declare export function chrome$fontSettings$setFont(
  details: chrome$fontSettings$SetFontDetails,
  callback?: Function
): void;

/**
 * Clears the minimum font size set by this extension, if any.
 * @param details This parameter is currently unused.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$fontSettings$clearMinimumFontSize(
  details?: Object,
  callback?: Function
): void;

/**
 * Gets a list of fonts on the system.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of FontName results) {...};
 */
declare export function chrome$fontSettings$getFontList(
  callback: (results: chrome$fontSettings$FontName[]) => void
): void;

/**
 * Clears the default fixed font size set by this extension, if any.
 * @param details This parameter is currently unused.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$fontSettings$clearDefaultFixedFontSize(
  details: Object,
  callback?: Function
): void;

/**
 * Fired when the default fixed font size setting changes.
 */
declare export var chrome$fontSettings$onDefaultFixedFontSizeChanged: chrome$fontSettings$DefaultFixedFontSizeChangedEvent;

/**
 * Fired when the default font size setting changes.
 */
declare export var chrome$fontSettings$onDefaultFontSizeChanged: chrome$fontSettings$DefaultFontSizeChangedEvent;

/**
 * Fired when the minimum font size setting changes.
 */
declare export var chrome$fontSettings$onMinimumFontSizeChanged: chrome$fontSettings$MinimumFontSizeChangedEvent;

/**
 * Fired when a font setting changes.
 */
declare export var chrome$fontSettings$onFontChanged: chrome$fontSettings$FontChangedEvent;

declare var npm$namespace$chrome$gcm: {
  register: typeof chrome$gcm$register,
  unregister: typeof chrome$gcm$unregister,
  send: typeof chrome$gcm$send,
  MAX_MESSAGE_SIZE: typeof chrome$gcm$MAX_MESSAGE_SIZE,
  onMessage: typeof chrome$gcm$onMessage,
  onMessagesDeleted: typeof chrome$gcm$onMessagesDeleted,
  onSendError: typeof chrome$gcm$onSendError
};
export interface chrome$gcm$OutgoingMessage {
  /**
   * The ID of the server to send the message to as assigned by Google API Console.
   */
  destinationId: string;

  /**
   * The ID of the message. It must be unique for each message in scope of the applications. See the Cloud Messaging documentation for advice for picking and handling an ID.
   */
  messageId: string;

  /**
   * Optional. Time-to-live of the message in seconds. If it is not possible to send the message within that time, an onSendError event will be raised. A time-to-live of 0 indicates that the message should be sent immediately or fail if it's not possible. The maximum and a default value of time-to-live is 86400 seconds (1 day).
   */
  timeToLive?: number;

  /**
   * Message data to send to the server. Case-insensitive goog. and google, as well as case-sensitive collapse_key are disallowed as key prefixes. Sum of all key/value pairs should not exceed gcm.MAX_MESSAGE_SIZE.
   */
  data: Object;
}

export interface chrome$gcm$IncomingMessage {
  /**
   * The message data.
   */
  data: Object;

  /**
   * Optional.
   * The sender who issued the message.
   * @since Since Chrome 41.
   */
  from?: string;

  /**
   * Optional.
   * The collapse key of a message. See Collapsible Messages section of Cloud Messaging documentation for details.
   */
  collapseKey?: string;
}

export interface chrome$gcm$GcmError {
  /**
   * The error message describing the problem.
   */
  errorMessage: string;

  /**
   * Optional. The ID of the message with this error, if error is related to a specific message.
   */
  messageId?: string;

  /**
   * Additional details related to the error, when available.
   */
  detail: Object;
}

export type chrome$gcm$MessageReceptionEvent = {} & chrome$events$Event<
  (message: chrome$gcm$IncomingMessage) => void
>;

export type chrome$gcm$MessageDeletionEvent = {} & chrome$events$Event<
  () => void
>;

export type chrome$gcm$GcmErrorEvent = {} & chrome$events$Event<
  (error: chrome$gcm$GcmError) => void
>;

/**
 * The maximum size (in bytes) of all key/value pairs in a message.
 */
declare export var chrome$gcm$MAX_MESSAGE_SIZE: number;

/**
 * Registers the application with GCM. The registration ID will be returned by the callback. If register is called again with the same list of senderIds, the same registration ID will be returned.
 * @param senderIds A list of server IDs that are allowed to send messages to the application. It should contain at least one and no more than 100 sender IDs.
 * @param callback Function called when registration completes. It should check runtime.lastError for error when registrationId is empty.
 * The callback parameter should be a function that looks like this:
 * function(string registrationId) {...};
 * Parameter registrationId: A registration ID assigned to the application by the GCM.
 */
declare export function chrome$gcm$register(
  senderIds: string[],
  callback: (registrationId: string) => void
): void;

/**
 * Unregisters the application from GCM.
 * @param callback A function called after the unregistration completes. Unregistration was successful if runtime.lastError is not set.
 * The callback parameter should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$gcm$unregister(callback: () => void): void;

/**
 * Sends a message according to its contents.
 * @param message A message to send to the other party via GCM.
 * @param callback A function called after the message is successfully queued for sending. runtime.lastError should be checked, to ensure a message was sent without problems.
 * The callback parameter should be a function that looks like this:
 * function(string messageId) {...};
 * Parameter messageId: The ID of the message that the callback was issued for.
 */
declare export function chrome$gcm$send(
  message: chrome$gcm$OutgoingMessage,
  callback: (messageId: string) => void
): void;

/**
 * Fired when a message is received through GCM.
 */
declare export var chrome$gcm$onMessage: chrome$gcm$MessageReceptionEvent;

/**
 * Fired when a GCM server had to delete messages sent by an app server to the application. See Messages deleted event section of Cloud Messaging documentation for details on handling this event.
 */
declare export var chrome$gcm$onMessagesDeleted: chrome$gcm$MessageDeletionEvent;

/**
 * Fired when it was not possible to send a message to the GCM server.
 */
declare export var chrome$gcm$onSendError: chrome$gcm$GcmErrorEvent;

declare var npm$namespace$chrome$history: {
  search: typeof chrome$history$search,
  addUrl: typeof chrome$history$addUrl,
  deleteRange: typeof chrome$history$deleteRange,
  deleteAll: typeof chrome$history$deleteAll,
  getVisits: typeof chrome$history$getVisits,
  deleteUrl: typeof chrome$history$deleteUrl,
  onVisited: typeof chrome$history$onVisited,
  onVisitRemoved: typeof chrome$history$onVisitRemoved
};

/**
 * An object encapsulating one visit to a URL.
 */
export interface chrome$history$VisitItem {
  /**
   * The transition type for this visit from its referrer.
   */
  transition: string;

  /**
   * Optional. When this visit occurred, represented in milliseconds since the epoch.
   */
  visitTime?: number;

  /**
   * The unique identifier for this visit.
   */
  visitId: string;

  /**
   * The visit ID of the referrer.
   */
  referringVisitId: string;

  /**
   * The unique identifier for the item.
   */
  id: string;
}

/**
 * An object encapsulating one result of a history query.
 */
export interface chrome$history$HistoryItem {
  /**
   * Optional. The number of times the user has navigated to this page by typing in the address.
   */
  typedCount?: number;

  /**
   * Optional. The title of the page when it was last loaded.
   */
  title?: string;

  /**
   * Optional. The URL navigated to by a user.
   */
  url?: string;

  /**
   * Optional. When this page was last loaded, represented in milliseconds since the epoch.
   */
  lastVisitTime?: number;

  /**
   * Optional. The number of times the user has navigated to this page.
   */
  visitCount?: number;

  /**
   * The unique identifier for the item.
   */
  id: string;
}

export interface chrome$history$HistoryQuery {
  /**
   * A free-text query to the history service. Leave empty to retrieve all pages.
   */
  text: string;

  /**
   * Optional. The maximum number of results to retrieve. Defaults to 100.
   */
  maxResults?: number;

  /**
   * Optional. Limit results to those visited after this date, represented in milliseconds since the epoch.
   */
  startTime?: number;

  /**
   * Optional. Limit results to those visited before this date, represented in milliseconds since the epoch.
   */
  endTime?: number;
}

export interface chrome$history$Url {
  /**
   * The URL for the operation. It must be in the format as returned from a call to history.search.
   */
  url: string;
}

export interface chrome$history$Range {
  /**
   * Items added to history before this date, represented in milliseconds since the epoch.
   */
  endTime: number;

  /**
   * Items added to history after this date, represented in milliseconds since the epoch.
   */
  startTime: number;
}

export interface chrome$history$RemovedResult {
  /**
   * True if all history was removed. If true, then urls will be empty.
   */
  allHistory: boolean;

  /**
   * Optional.
   */
  urls?: string[];
}

export type chrome$history$HistoryVisitedEvent = {} & chrome$events$Event<
  (result: chrome$history$HistoryItem) => void
>;

export type chrome$history$HistoryVisitRemovedEvent = {} & chrome$events$Event<
  (removed: chrome$history$RemovedResult) => void
>;

/**
 * Searches the history for the last visit time of each page matching the query.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of HistoryItem results) {...};
 */
declare export function chrome$history$search(
  query: chrome$history$HistoryQuery,
  callback: (results: chrome$history$HistoryItem[]) => void
): void;

/**
 * Adds a URL to the history at the current time with a transition type of "link".
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$history$addUrl(
  details: chrome$history$Url,
  callback?: () => void
): void;

/**
 * Removes all items within the specified date range from the history. Pages will not be removed from the history unless all visits fall within the range.
 * @param callback The callback parameter should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$history$deleteRange(
  range: chrome$history$Range,
  callback: () => void
): void;

/**
 * Deletes all items from the history.
 * @param callback The callback parameter should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$history$deleteAll(callback: () => void): void;

/**
 * Retrieves information about visits to a URL.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of VisitItem results) {...};
 */
declare export function chrome$history$getVisits(
  details: chrome$history$Url,
  callback: (results: chrome$history$VisitItem[]) => void
): void;

/**
 * Removes all occurrences of the given URL from the history.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$history$deleteUrl(
  details: chrome$history$Url,
  callback?: () => void
): void;

/**
 * Fired when a URL is visited, providing the HistoryItem data for that URL. This event fires before the page has loaded.
 */
declare export var chrome$history$onVisited: chrome$history$HistoryVisitedEvent;

/**
 * Fired when one or more URLs are removed from the history service. When all visits have been removed the URL is purged from history.
 */
declare export var chrome$history$onVisitRemoved: chrome$history$HistoryVisitRemovedEvent;

declare var npm$namespace$chrome$i18n: {
  getAcceptLanguages: typeof chrome$i18n$getAcceptLanguages,
  getMessage: typeof chrome$i18n$getMessage,
  getUILanguage: typeof chrome$i18n$getUILanguage,
  detectLanguage: typeof chrome$i18n$detectLanguage
};

/**
 * Holds detected ISO language code and its percentage in the input string
 */
export interface chrome$i18n$DetectedLanguage {
  /**
   * An ISO language code such as 'en' or 'fr'.
   * For a complete list of languages supported by this method, see  [kLanguageInfoTable]{@link https://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc}.
   * For an unknown language, 'und' will be returned, which means that [percentage] of the text is unknown to CLD
   */
  language: string;

  /**
   * The percentage of the detected language
   */
  percentage: number;
}

/**
 * Holds detected language reliability and array of DetectedLanguage
 */
export interface chrome$i18n$LanguageDetectionResult {
  /**
   * CLD detected language reliability
   */
  isReliable: boolean;

  /**
   * Array of detectedLanguage
   */
  languages: chrome$i18n$DetectedLanguage[];
}

/**
 * Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the locale, use i18n.getUILanguage.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of string languages) {...};
 * Parameter languages: Array of the accept languages of the browser, such as en-US,en,zh-CN
 */
declare export function chrome$i18n$getAcceptLanguages(
  callback: (languages: string[]) => void
): void;

/**
 * Gets the localized string for the specified message. If the message is missing, this method returns an empty string (''). If the format of the getMessage() call is wrong — for example, messageName is not a string or the substitutions array has more than 9 elements — this method returns undefined.
 * @param messageName The name of the message, as specified in the messages.json file.
 * @param substitutions Optional. Up to 9 substitution strings, if the message requires any.
 */
declare export function chrome$i18n$getMessage(
  messageName: string,
  substitutions?: any
): string;

/**
 * Gets the browser UI language of the browser. This is different from i18n.getAcceptLanguages which returns the preferred user languages.
 * @since Chrome 35.
 */
declare export function chrome$i18n$getUILanguage(): string;

/**
 * Detects the language of the provided text using CLD.
 * @param text User input string to be translated.
 * @param callback The callback parameter should be a function that looks like this: function(object result) {...};
 */
declare export function chrome$i18n$detectLanguage(
  text: string,
  callback: (result: chrome$i18n$LanguageDetectionResult) => void
): void;

declare var npm$namespace$chrome$identity: {
  getAccounts: typeof chrome$identity$getAccounts,
  getAuthToken: typeof chrome$identity$getAuthToken,
  getProfileUserInfo: typeof chrome$identity$getProfileUserInfo,
  removeCachedAuthToken: typeof chrome$identity$removeCachedAuthToken,
  launchWebAuthFlow: typeof chrome$identity$launchWebAuthFlow,
  getRedirectURL: typeof chrome$identity$getRedirectURL,
  onSignInChanged: typeof chrome$identity$onSignInChanged
};

/**
 * @since Chrome 32.
 */
export interface chrome$identity$AccountInfo {
  /**
   * A unique identifier for the account. This ID will not change for the lifetime of the account.
   */
  id: string;
}

export interface chrome$identity$TokenDetails {
  /**
   * Optional.
   * Fetching a token may require the user to sign-in to Chrome, or approve the application's requested scopes. If the interactive flag is true, getAuthToken will prompt the user as necessary. When the flag is false or omitted, getAuthToken will return failure any time a prompt would be required.
   */
  interactive?: boolean;

  /**
   * Optional.
   * The account ID whose token should be returned. If not specified, the primary account for the profile will be used.
   * account is only supported when the "enable-new-profile-management" flag is set.
   * @since Chrome 37.
   */
  account?: chrome$identity$AccountInfo;

  /**
   * Optional.
   * A list of OAuth2 scopes to request.
   * When the scopes field is present, it overrides the list of scopes specified in manifest.json.
   * @since Chrome 37.
   */
  scopes?: string[];
}

export interface chrome$identity$UserInfo {
  /**
   * An email address for the user account signed into the current profile. Empty if the user is not signed in or the identity.email manifest permission is not specified.
   */
  email: string;

  /**
   * A unique identifier for the account. This ID will not change for the lifetime of the account. Empty if the user is not signed in or (in M41+) the identity.email manifest permission is not specified.
   */
  id: string;
}

export interface chrome$identity$TokenInformation {
  /**
   * The specific token that should be removed from the cache.
   */
  token: string;
}

export interface chrome$identity$WebAuthFlowOptions {
  /**
   * The URL that initiates the auth flow.
   */
  url: string;

  /**
   * Optional.
   * Whether to launch auth flow in interactive mode.
   * Since some auth flows may immediately redirect to a result URL, launchWebAuthFlow hides its web view until the first navigation either redirects to the final URL, or finishes loading a page meant to be displayed.
   * If the interactive flag is true, the window will be displayed when a page load completes. If the flag is false or omitted, launchWebAuthFlow will return with an error if the initial navigation does not complete the flow.
   */
  interactive?: boolean;
}

export type chrome$identity$SignInChangeEvent = {} & chrome$events$Event<
  (account: chrome$identity$AccountInfo, signedIn: boolean) => void
>;

/**
 * Retrieves a list of AccountInfo objects describing the accounts present on the profile.
 * getAccounts is only supported on dev channel.
 * Dev channel only.
 */
declare export function chrome$identity$getAccounts(
  callback: (accounts: chrome$identity$AccountInfo[]) => void
): void;

/**
 * Gets an OAuth2 access token using the client ID and scopes specified in the oauth2 section of manifest.json.
 * The Identity API caches access tokens in memory, so it's ok to call getAuthToken non-interactively any time a token is required. The token cache automatically handles expiration.
 * For a good user experience it is important interactive token requests are initiated by UI in your app explaining what the authorization is for. Failing to do this will cause your users to get authorization requests, or Chrome sign in screens if they are not signed in, with with no context. In particular, do not use getAuthToken interactively when your app is first launched.
 * @param details Token options.
 * @param callback Called with an OAuth2 access token as specified by the manifest, or undefined if there was an error.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(string token) {...};
 */
declare export function chrome$identity$getAuthToken(
  details: chrome$identity$TokenDetails,
  callback?: (token: string) => void
): void;

/**
 * Retrieves email address and obfuscated gaia id of the user signed into a profile.
 * This API is different from identity.getAccounts in two ways. The information returned is available offline, and it only applies to the primary account for the profile.
 * @since Chrome 37.
 */
declare export function chrome$identity$getProfileUserInfo(
  callback: (userInfo: chrome$identity$UserInfo) => void
): void;

/**
 * Removes an OAuth2 access token from the Identity API's token cache.
 * If an access token is discovered to be invalid, it should be passed to removeCachedAuthToken to remove it from the cache. The app may then retrieve a fresh token with getAuthToken.
 * @param details Token information.
 * @param callback Called when the token has been removed from the cache.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$identity$removeCachedAuthToken(
  details: chrome$identity$TokenInformation,
  callback?: () => void
): void;

/**
 * Starts an auth flow at the specified URL.
 * This method enables auth flows with non-Google identity providers by launching a web view and navigating it to the first URL in the provider's auth flow. When the provider redirects to a URL matching the pattern https://<app-id>.chromiumapp.org/*, the window will close, and the final redirect URL will be passed to the callback function.
 * For a good user experience it is important interactive auth flows are initiated by UI in your app explaining what the authorization is for. Failing to do this will cause your users to get authorization requests with no context. In particular, do not launch an interactive auth flow when your app is first launched.
 * @param details WebAuth flow options.
 * @param callback Called with the URL redirected back to your application.
 * The callback parameter should be a function that looks like this:
 * function(string responseUrl) {...};
 */
declare export function chrome$identity$launchWebAuthFlow(
  details: chrome$identity$WebAuthFlowOptions,
  callback: (responseUrl?: string) => void
): void;

/**
 * Generates a redirect URL to be used in launchWebAuthFlow.
 * The generated URLs match the pattern https://<app-id>.chromiumapp.org/*.
 * @since Chrome 33.
 * @param path Optional. The path appended to the end of the generated URL.
 */
declare export function chrome$identity$getRedirectURL(path?: string): string;

/**
 * Fired when signin state changes for an account on the user's profile.
 * @since Chrome 33.
 */
declare export var chrome$identity$onSignInChanged: chrome$identity$SignInChangeEvent;

declare var npm$namespace$chrome$idle: {
  queryState: typeof chrome$idle$queryState,
  setDetectionInterval: typeof chrome$idle$setDetectionInterval,
  onStateChanged: typeof chrome$idle$onStateChanged
};
export type chrome$idle$IdleStateChangedEvent = {} & chrome$events$Event<
  (newState: string) => void
>;

/**
 * Returns "locked" if the system is locked, "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
 * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have elapsed since the last user input detected.
 * Since Chrome 25.
 * @param callback The callback parameter should be a function that looks like this:
 * function( IdleState newState) {...};
 */
declare export function chrome$idle$queryState(
  detectionIntervalInSeconds: number,
  callback: (newState: string) => void
): void;

/**
 * Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events. The default interval is 60 seconds.
 * @since Chrome 25.
 * @param intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state.
 */
declare export function chrome$idle$setDetectionInterval(
  intervalInSeconds: number
): void;

/**
 * Fired when the system changes to an active, idle or locked state. The event fires with "locked" if the screen is locked or the screensaver activates, "idle" if the system is unlocked and the user has not generated any input for a specified number of seconds, and "active" when the user generates input on an idle system.
 */
declare export var chrome$idle$onStateChanged: chrome$idle$IdleStateChangedEvent;

declare var npm$namespace$chrome$input: {
  ime: typeof npm$namespace$chrome$input$ime
};

declare var npm$namespace$chrome$input$ime: {
  setMenuItems: typeof chrome$input$ime$setMenuItems,
  commitText: typeof chrome$input$ime$commitText,
  setCandidates: typeof chrome$input$ime$setCandidates,
  setComposition: typeof chrome$input$ime$setComposition,
  updateMenuItems: typeof chrome$input$ime$updateMenuItems,
  setCandidateWindowProperties: typeof chrome$input$ime$setCandidateWindowProperties,
  clearComposition: typeof chrome$input$ime$clearComposition,
  setCursorPosition: typeof chrome$input$ime$setCursorPosition,
  sendKeyEvents: typeof chrome$input$ime$sendKeyEvents,
  hideInputView: typeof chrome$input$ime$hideInputView,
  deleteSurroundingText: typeof chrome$input$ime$deleteSurroundingText,
  keyEventHandled: typeof chrome$input$ime$keyEventHandled,
  onBlur: typeof chrome$input$ime$onBlur,
  onCandidateClicked: typeof chrome$input$ime$onCandidateClicked,
  onKeyEvent: typeof chrome$input$ime$onKeyEvent,
  onDeactivated: typeof chrome$input$ime$onDeactivated,
  onInputContextUpdate: typeof chrome$input$ime$onInputContextUpdate,
  onActivate: typeof chrome$input$ime$onActivate,
  onFocus: typeof chrome$input$ime$onFocus,
  onMenuItemActivated: typeof chrome$input$ime$onMenuItemActivated,
  onSurroundingTextChanged: typeof chrome$input$ime$onSurroundingTextChanged,
  onReset: typeof chrome$input$ime$onReset
};

/**
 * See http://www.w3.org/TR/DOM-Level-3-Events/#events-KeyboardEvent
 */
export interface chrome$input$ime$KeyboardEvent {
  /**
   * Optional.
   * Whether or not the SHIFT key is pressed.
   */
  shiftKey?: boolean;

  /**
   * Optional.
   * Whether or not the ALT key is pressed.
   */
  altKey?: boolean;

  /**
   * The ID of the request.
   */
  requestId: string;

  /**
   * Value of the key being pressed
   */
  key: string;

  /**
   * Optional.
   * Whether or not the CTRL key is pressed.
   */
  ctrlKey?: boolean;

  /**
   * One of keyup or keydown.
   */
  type: string;

  /**
   * Optional.
   * The extension ID of the sender of this keyevent.
   * @since Chrome 34.
   */
  extensionId?: string;

  /**
   * Optional.
   * Value of the physical key being pressed. The value is not affected by current keyboard layout or modifier state.
   * @since Chrome 26.
   */
  code: string;

  /**
   * Optional.
   * The deprecated HTML keyCode, which is system- and implementation-dependent numerical code signifying the unmodified identifier associated with the key pressed.
   * @since Chrome 37.
   */
  keyCode?: number;

  /**
   * Optional.
   * Whether or not the CAPS_LOCK is enabled.
   * @since Chrome 29.
   */
  capsLock?: boolean;
}

/**
 * Describes an input Context
 */
export interface chrome$input$ime$InputContext {
  /**
   * This is used to specify targets of text field operations. This ID becomes invalid as soon as onBlur is called.
   */
  contextID: number;

  /**
   * Type of value this text field edits, (Text, Number, URL, etc)
   */
  type: string;

  /**
   * Whether the text field wants auto-correct.
   * @since Chrome 40.
   */
  autoCorrect: boolean;

  /**
   * Whether the text field wants auto-complete.
   * @since Chrome 40.
   */
  autoComplete: boolean;

  /**
   * Whether the text field wants spell-check.
   * @since Chrome 40.
   */
  spellCheck: boolean;
}

/**
 * A menu item used by an input method to interact with the user from the language menu.
 * @since Chrome 30.
 */
export interface chrome$input$ime$MenuItem {
  /**
   * String that will be passed to callbacks referencing this MenuItem.
   */
  id: string;

  /**
   * Optional. Text displayed in the menu for this item.
   */
  label?: string;

  /**
   * Optional. The type of menu item.
   */
  style?: string;

  /**
   * Optional. Indicates this item is visible.
   */
  visible?: boolean;

  /**
   * Indicates this item should be drawn with a check.
   */
  checked?: boolean;

  /**
   * Indicates this item is enabled.
   */
  enabled?: boolean;
}

export interface chrome$input$ime$ImeParameters {
  /**
   * MenuItems to use.
   */
  items: chrome$input$ime$MenuItem[];

  /**
   * ID of the engine to use
   */
  engineID: string;
}

export interface chrome$input$ime$CommitTextParameters {
  /**
   * The text to commit
   */
  text: string;

  /**
   * ID of the context where the text will be committed
   */
  contextID: number;
}

export interface chrome$input$ime$CandidateUsage {
  /**
   * The title string of details description.
   */
  title: string;

  /**
   * The body string of detail description.
   */
  body: string;
}

export interface chrome$input$ime$CandidateTemplate {
  /**
   * The candidate
   */
  candidate: string;

  /**
   * The candidate's id
   */
  id: number;

  /**
   * Optional.
   * The id to add these candidates under
   */
  parentId?: number;

  /**
   * Optional.
   * Short string displayed to next to the candidate, often the shortcut key or index
   */
  label?: string;

  /**
   * Optional.
   * Additional text describing the candidate
   */
  annotation?: string;

  /**
   * Optional.
   * The usage or detail description of word.
   */
  usage?: chrome$input$ime$CandidateUsage;
}

export interface chrome$input$ime$CandidatesParameters {
  /**
   * ID of the context that owns the candidate window.
   */
  contextID: number;

  /**
   * List of candidates to show in the candidate window
   */
  candidates: chrome$input$ime$CandidateTemplate[];
}

export interface chrome$input$ime$CompositionParameterSegment {
  /**
   * Index of the character to start this segment at
   */
  start: number;

  /**
   * Index of the character to end this segment after.
   */
  end: number;

  /**
   * The type of the underline to modify this segment.
   */
  style: string;
}

export interface chrome$input$ime$CompositionParameters {
  /**
   * ID of the context where the composition text will be set
   */
  contextID: number;

  /**
   * Text to set
   */
  text: string;

  /**
   * Optional. List of segments and their associated types.
   */
  segments: chrome$input$ime$CompositionParameterSegment[];

  /**
   * Position in the text of the cursor.
   */
  cursor: number;

  /**
   * Optional. Position in the text that the selection starts at.
   */
  selectionStart?: number;

  /**
   * Optional. Position in the text that the selection ends at.
   */
  selectionEnd?: number;
}

export interface chrome$input$ime$MenuItemParameters {
  items: Object[];
  engineId: string;
}

export interface chrome$input$ime$CandidateWindowParameterProperties {
  /**
   * Optional.
   * True to show the cursor, false to hide it.
   */
  cursorVisible?: boolean;

  /**
   * Optional.
   * True if the candidate window should be rendered vertical, false to make it horizontal.
   */
  vertical?: boolean;

  /**
   * Optional.
   * The number of candidates to display per page.
   */
  pageSize?: number;

  /**
   * Optional.
   * True to display the auxiliary text, false to hide it.
   */
  auxiliaryTextVisible?: boolean;

  /**
   * Optional.
   * Text that is shown at the bottom of the candidate window.
   */
  auxiliaryText?: string;

  /**
   * Optional.
   * True to show the Candidate window, false to hide it.
   */
  visible?: boolean;

  /**
   * Optional.
   * Where to display the candidate window.
   * @since Chrome 28.
   */
  windowPosition?: string;
}

export interface chrome$input$ime$CandidateWindowParameter {
  /**
   * ID of the engine to set properties on.
   */
  engineID: string;
  properties: chrome$input$ime$CandidateWindowParameterProperties;
}

export interface chrome$input$ime$ClearCompositionParameters {
  /**
   * ID of the context where the composition will be cleared
   */
  contextID: number;
}

export interface chrome$input$ime$CursorPositionParameters {
  /**
   * ID of the candidate to select.
   */
  candidateID: number;

  /**
   * ID of the context that owns the candidate window.
   */
  contextID: number;
}

export interface chrome$input$ime$SendKeyEventParameters {
  /**
   * ID of the context where the key events will be sent, or zero to send key events to non-input field.
   */
  contextID: number;

  /**
   * Data on the key event.
   */
  keyData: chrome$input$ime$KeyboardEvent[];
}

export interface chrome$input$ime$DeleteSurroundingTextParameters {
  /**
   * ID of the engine receiving the event.
   */
  engineID: string;

  /**
   * ID of the context where the surrounding text will be deleted.
   */
  contextID: number;

  /**
   * The offset from the caret position where deletion will start. This value can be negative.
   */
  offset: number;

  /**
   * The number of characters to be deleted
   */
  length: number;
}

export interface chrome$input$ime$SurroundingTextInfo {
  /**
   * The text around cursor.
   */
  text: string;

  /**
   * The ending position of the selection. This value indicates caret position if there is no selection.
   */
  focus: number;

  /**
   * The beginning position of the selection. This value indicates caret position if is no selection.
   */
  anchor: number;
}

export type chrome$input$ime$BlurEvent = {} & chrome$events$Event<
  (contextID: number) => void
>;

export type chrome$input$ime$CandidateClickedEvent = {} & chrome$events$Event<
  (engineID: string, candidateID: number, button: string) => void
>;

export type chrome$input$ime$KeyEventEvent = {} & chrome$events$Event<
  (engineID: string, keyData: chrome$input$ime$KeyboardEvent) => void
>;

export type chrome$input$ime$DeactivatedEvent = {} & chrome$events$Event<
  (engineID: string) => void
>;

export type chrome$input$ime$InputContextUpdateEvent = {} & chrome$events$Event<
  (context: chrome$input$ime$InputContext) => void
>;

export type chrome$input$ime$ActivateEvent = {} & chrome$events$Event<
  (engineID: string, screen: string) => void
>;

export type chrome$input$ime$FocusEvent = {} & chrome$events$Event<
  (context: chrome$input$ime$InputContext) => void
>;

export type chrome$input$ime$MenuItemActivatedEvent = {} & chrome$events$Event<
  (engineID: string, name: string) => void
>;

export type chrome$input$ime$SurroundingTextChangedEvent = {} & chrome$events$Event<
  (
    engineID: string,
    surroundingInfo: chrome$input$ime$SurroundingTextInfo
  ) => void
>;

export type chrome$input$ime$InputResetEvent = {} & chrome$events$Event<
  (engineID: string) => void
>;

/**
 * Adds the provided menu items to the language menu when this IME is active.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$input$ime$setMenuItems(
  parameters: chrome$input$ime$ImeParameters,
  callback?: () => void
): void;

/**
 * Commits the provided text to the current input.
 * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean success) {...};
 */
declare export function chrome$input$ime$commitText(
  parameters: chrome$input$ime$CommitTextParameters,
  callback?: (success: boolean) => void
): void;

/**
 * Sets the current candidate list. This fails if this extension doesn't own the active IME
 * @param callback Called when the operation completes.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean success) {...};
 */
declare export function chrome$input$ime$setCandidates(
  parameters: chrome$input$ime$CandidatesParameters,
  callback?: (success: boolean) => void
): void;

/**
 * Set the current composition. If this extension does not own the active IME, this fails.
 * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean success) {...};
 */
declare export function chrome$input$ime$setComposition(
  parameters: chrome$input$ime$CompositionParameters,
  callback?: (success: boolean) => void
): void;

/**
 * Updates the state of the MenuItems specified
 * @param callback Called when the operation completes
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$input$ime$updateMenuItems(
  parameters: chrome$input$ime$MenuItemParameters,
  callback?: () => void
): void;

/**
 * Sets the properties of the candidate window. This fails if the extension doesn't own the active IME
 * @param callback Called when the operation completes.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean success) {...};
 */
declare export function chrome$input$ime$setCandidateWindowProperties(
  parameters: chrome$input$ime$CandidateWindowParameter,
  callback?: (success: boolean) => void
): void;

/**
 * Clear the current composition. If this extension does not own the active IME, this fails.
 * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean success) {...};
 */
declare export function chrome$input$ime$clearComposition(
  parameters: chrome$input$ime$ClearCompositionParameters,
  callback?: (success: boolean) => void
): void;

/**
 * Set the position of the cursor in the candidate window. This is a no-op if this extension does not own the active IME.
 * @param callback Called when the operation completes
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean success) {...};
 */
declare export function chrome$input$ime$setCursorPosition(
  parameters: chrome$input$ime$CursorPositionParameters,
  callback?: (success: boolean) => void
): void;

/**
 * Sends the key events. This function is expected to be used by virtual keyboards. When key(s) on a virtual keyboard is pressed by a user, this function is used to propagate that event to the system.
 * @since Chrome 33.
 * @param callback Called when the operation completes.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$input$ime$sendKeyEvents(
  parameters: chrome$input$ime$SendKeyEventParameters,
  callback?: () => void
): void;

/**
 * Hides the input view window, which is popped up automatically by system. If the input view window is already hidden, this function will do nothing.
 * @since Chrome 34.
 */
declare export function chrome$input$ime$hideInputView(): void;

/**
 * Deletes the text around the caret.
 * @since Chrome 27.
 */
declare export function chrome$input$ime$deleteSurroundingText(
  parameters: chrome$input$ime$DeleteSurroundingTextParameters,
  callback?: () => void
): void;

/**
 * Indicates that the key event received by onKeyEvent is handled. This should only be called if the onKeyEvent listener is asynchronous.
 * @since Chrome 25.
 * @param requestId Request id of the event that was handled. This should come from keyEvent.requestId
 * @param response True if the keystroke was handled, false if not
 */
declare export function chrome$input$ime$keyEventHandled(
  requestId: string,
  response: boolean
): void;

/**
 * This event is sent when focus leaves a text box. It is sent to all extensions that are listening to this event, and enabled by the user.
 */
declare export var chrome$input$ime$onBlur: chrome$input$ime$BlurEvent;

/**
 * This event is sent if this extension owns the active IME.
 */
declare export var chrome$input$ime$onCandidateClicked: chrome$input$ime$CandidateClickedEvent;

/**
 * This event is sent if this extension owns the active IME.
 */
declare export var chrome$input$ime$onKeyEvent: chrome$input$ime$KeyEventEvent;

/**
 * This event is sent when an IME is deactivated. It signals that the IME will no longer be receiving onKeyPress events.
 */
declare export var chrome$input$ime$onDeactivated: chrome$input$ime$DeactivatedEvent;

/**
 * This event is sent when the properties of the current InputContext change, such as the the type. It is sent to all extensions that are listening to this event, and enabled by the user.
 */
declare export var chrome$input$ime$onInputContextUpdate: chrome$input$ime$InputContextUpdateEvent;

/**
 * This event is sent when an IME is activated. It signals that the IME will be receiving onKeyPress events.
 */
declare export var chrome$input$ime$onActivate: chrome$input$ime$ActivateEvent;

/**
 * This event is sent when focus enters a text box. It is sent to all extensions that are listening to this event, and enabled by the user.
 */
declare export var chrome$input$ime$onFocus: chrome$input$ime$FocusEvent;

/**
 * Called when the user selects a menu item
 */
declare export var chrome$input$ime$onMenuItemActivated: chrome$input$ime$MenuItemActivatedEvent;

/**
 * Called when the editable string around caret is changed or when the caret position is moved. The text length is limited to 100 characters for each back and forth direction.
 * @since Chrome 27.
 */
declare export var chrome$input$ime$onSurroundingTextChanged: chrome$input$ime$SurroundingTextChangedEvent;

/**
 * This event is sent when chrome terminates ongoing text input session.
 * @since Chrome 29.
 */
declare export var chrome$input$ime$onReset: chrome$input$ime$InputResetEvent;

declare var npm$namespace$chrome$management: {
  setEnabled: typeof chrome$management$setEnabled,
  getPermissionWarningsById: typeof chrome$management$getPermissionWarningsById,
  get: typeof chrome$management$get,
  getAll: typeof chrome$management$getAll,
  getPermissionWarningsByManifest: typeof chrome$management$getPermissionWarningsByManifest,
  launchApp: typeof chrome$management$launchApp,
  uninstall: typeof chrome$management$uninstall,
  getSelf: typeof chrome$management$getSelf,
  uninstallSelf: typeof chrome$management$uninstallSelf,
  createAppShortcut: typeof chrome$management$createAppShortcut,
  setLaunchType: typeof chrome$management$setLaunchType,
  generateAppForLink: typeof chrome$management$generateAppForLink,
  onDisabled: typeof chrome$management$onDisabled,
  onUninstalled: typeof chrome$management$onUninstalled,
  onInstalled: typeof chrome$management$onInstalled,
  onEnabled: typeof chrome$management$onEnabled
};

/**
 * Information about an installed extension, app, or theme.
 */
export interface chrome$management$ExtensionInfo {
  /**
   * Optional.
   * A reason the item is disabled.
   * @since Chrome 17.
   */
  disabledReason?: string;

  /**
   * Optional. The launch url (only present for apps).
   */
  appLaunchUrl?: string;

  /**
   * The description of this extension, app, or theme.
   * @since Chrome 9.
   */
  description: string;

  /**
   * Returns a list of API based permissions.
   * @since Chrome 9.
   */
  permissions: string[];

  /**
   * Optional.
   * A list of icon information. Note that this just reflects what was declared in the manifest, and the actual image at that url may be larger or smaller than what was declared, so you might consider using explicit width and height attributes on img tags referencing these images. See the manifest documentation on icons for more details.
   */
  icons?: chrome$management$IconInfo[];

  /**
   * Returns a list of host based permissions.
   * @since Chrome 9.
   */
  hostPermissions: string[];

  /**
   * Whether it is currently enabled or disabled.
   */
  enabled: boolean;

  /**
   * Optional.
   * The URL of the homepage of this extension, app, or theme.
   * @since Chrome 11.
   */
  homepageUrl?: string;

  /**
   * Whether this extension can be disabled or uninstalled by the user.
   * @since Chrome 12.
   */
  mayDisable: boolean;

  /**
   * How the extension was installed.
   * @since Chrome 22.
   */
  installType: string;

  /**
   * The version of this extension, app, or theme.
   */
  version: string;

  /**
   * The extension's unique identifier.
   */
  id: string;

  /**
   * Whether the extension, app, or theme declares that it supports offline.
   * @since Chrome 15.
   */
  offlineEnabled: boolean;

  /**
   * Optional.
   * The update URL of this extension, app, or theme.
   * @since Chrome 16.
   */
  updateUrl?: string;

  /**
   * The type of this extension, app, or theme.
   * @since Chrome 23.
   */
  type: string;

  /**
   * The url for the item's options page, if it has one.
   */
  optionsUrl: string;

  /**
   * The name of this extension, app, or theme.
   */
  name: string;

  /**
   * A short version of the name of this extension, app, or theme.
   * @since Chrome 31.
   */
  shortName: string;

  /**
   * True if this is an app.
   * @deprecated since Chrome 33. Please use management.ExtensionInfo.type.
   */
  isApp: boolean;

  /**
   * Optional.
   * The app launch type (only present for apps).
   * @since Chrome 37.
   */
  launchType?: string;

  /**
   * Optional.
   * The currently available launch types (only present for apps).
   * @since Chrome 37.
   */
  availableLaunchTypes?: string[];
}

/**
 * Information about an icon belonging to an extension, app, or theme.
 */
export interface chrome$management$IconInfo {
  /**
   * The URL for this icon image. To display a grayscale version of the icon (to indicate that an extension is disabled, for example), append ?grayscale=true to the URL.
   */
  url: string;

  /**
   * A number representing the width and height of the icon. Likely values include (but are not limited to) 128, 48, 24, and 16.
   */
  size: number;
}

export interface chrome$management$UninstallOptions {
  /**
   * Optional.
   * Whether or not a confirm-uninstall dialog should prompt the user. Defaults to false for self uninstalls. If an extension uninstalls another extension, this parameter is ignored and the dialog is always shown.
   */
  showConfirmDialog?: boolean;
}

export type chrome$management$ManagementDisabledEvent = {} & chrome$events$Event<
  (info: chrome$management$ExtensionInfo) => void
>;

export type chrome$management$ManagementUninstalledEvent = {} & chrome$events$Event<
  (id: string) => void
>;

export type chrome$management$ManagementInstalledEvent = {} & chrome$events$Event<
  (info: chrome$management$ExtensionInfo) => void
>;

export type chrome$management$ManagementEnabledEvent = {} & chrome$events$Event<
  (info: chrome$management$ExtensionInfo) => void
>;

/**
 * Enables or disables an app or extension.
 * @param id This should be the id from an item of management.ExtensionInfo.
 * @param enabled Whether this item should be enabled or disabled.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$management$setEnabled(
  id: string,
  enabled: boolean,
  callback?: () => void
): void;

/**
 * Returns a list of permission warnings for the given extension id.
 * @since Chrome 15.
 * @param id The ID of an already installed extension.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(array of string permissionWarnings) {...};
 */
declare export function chrome$management$getPermissionWarningsById(
  id: string,
  callback?: (permissionWarnings: string[]) => void
): void;

/**
 * Returns information about the installed extension, app, or theme that has the given ID.
 * @since Chrome 9.
 * @param id The ID from an item of management.ExtensionInfo.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function( ExtensionInfo result) {...};
 */
declare export function chrome$management$get(
  id: string,
  callback?: (result: chrome$management$ExtensionInfo) => void
): void;

/**
 * Returns a list of information about installed extensions and apps.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(array of ExtensionInfo result) {...};
 */
declare export function chrome$management$getAll(
  callback?: (result: chrome$management$ExtensionInfo[]) => void
): void;

/**
 * Returns a list of permission warnings for the given extension manifest string. Note: This function can be used without requesting the 'management' permission in the manifest.
 * @since Chrome 15.
 * @param manifestStr Extension manifest JSON string.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(array of string permissionWarnings) {...};
 */
declare export function chrome$management$getPermissionWarningsByManifest(
  manifestStr: string,
  callback?: (permissionwarnings: string[]) => void
): void;

/**
 * Launches an application.
 * @param id The extension id of the application.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$management$launchApp(
  id: string,
  callback?: () => void
): void;

/**
 * Uninstalls a currently installed app or extension.
 * @since Chrome 21.
 * @param id This should be the id from an item of management.ExtensionInfo.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$management$uninstall(
  id: string,
  options?: chrome$management$UninstallOptions,
  callback?: () => void
): void;

/**
 * Uninstalls a currently installed app or extension.
 * @deprecated since Chrome 21. The options parameter was added to this function.
 * @param id This should be the id from an item of management.ExtensionInfo.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$management$uninstall(
  id: string,
  callback?: () => void
): void;

/**
 * Returns information about the calling extension, app, or theme. Note: This function can be used without requesting the 'management' permission in the manifest.
 * @since Chrome 39.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function( ExtensionInfo result) {...};
 */
declare export function chrome$management$getSelf(
  callback?: (result: chrome$management$ExtensionInfo) => void
): void;

/**
 * Uninstalls the calling extension.
 * Note: This function can be used without requesting the 'management' permission in the manifest.
 * @since Chrome 26.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$management$uninstallSelf(
  options?: chrome$management$UninstallOptions,
  callback?: () => void
): void;

/**
 * Uninstalls the calling extension.
 * Note: This function can be used without requesting the 'management' permission in the manifest.
 * @since Chrome 26.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$management$uninstallSelf(
  callback?: () => void
): void;

/**
 * Display options to create shortcuts for an app. On Mac, only packaged app shortcuts can be created.
 * @since Chrome 37.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$management$createAppShortcut(
  id: string,
  callback?: () => void
): void;

/**
 * Set the launch type of an app.
 * @since Chrome 37.
 * @param id This should be the id from an app item of management.ExtensionInfo.
 * @param launchType The target launch type. Always check and make sure this launch type is in ExtensionInfo.availableLaunchTypes, because the available launch types vary on different platforms and configurations.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$management$setLaunchType(
  id: string,
  launchType: string,
  callback?: () => void
): void;

/**
 * Generate an app for a URL. Returns the generated bookmark app.
 * @since Chrome 37.
 * @param url The URL of a web page. The scheme of the URL can only be "http" or "https".
 * @param title The title of the generated app.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function( ExtensionInfo result) {...};
 */
declare export function chrome$management$generateAppForLink(
  url: string,
  title: string,
  callback?: (result: chrome$management$ExtensionInfo) => void
): void;

/**
 * Fired when an app or extension has been disabled.
 */
declare export var chrome$management$onDisabled: chrome$management$ManagementDisabledEvent;

/**
 * Fired when an app or extension has been uninstalled.
 */
declare export var chrome$management$onUninstalled: chrome$management$ManagementUninstalledEvent;

/**
 * Fired when an app or extension has been installed.
 */
declare export var chrome$management$onInstalled: chrome$management$ManagementInstalledEvent;

/**
 * Fired when an app or extension has been enabled.
 */
declare export var chrome$management$onEnabled: chrome$management$ManagementEnabledEvent;

declare var npm$namespace$chrome$networking: {
  config: typeof npm$namespace$chrome$networking$config
};

declare var npm$namespace$chrome$networking$config: {
  setNetworkFilter: typeof chrome$networking$config$setNetworkFilter,
  finishAuthentication: typeof chrome$networking$config$finishAuthentication,
  onCaptivePortalDetected: typeof chrome$networking$config$onCaptivePortalDetected
};
export interface chrome$networking$config$NetworkInfo {
  /**
   * Currently only WiFi supported.
   */
  Type: string;

  /**
   * Optional. A unique identifier of the network.
   */
  GUID?: string;

  /**
   * Optional. A hex-encoded byte sequence.
   */
  HexSSID?: string;

  /**
   * Optional. The decoded SSID of the network (default encoding is UTF-8). To filter for non-UTF-8 SSIDs, use HexSSID instead.
   */
  SSID?: string;

  /**
   * Optional. The basic service set identification (BSSID) uniquely identifying the basic service set. BSSID is represented as a human readable, hex-encoded string with bytes separated by colons, e.g. 45:67:89:ab:cd:ef.
   */
  BSSID?: string;

  /**
   * Optional. Identifier indicating the security type of the network. Valid values are None, WEP-PSK, WPA-PSK and WPA-EAP.
   */
  Security?: string;
}

export type chrome$networking$config$CaptivePorttalDetectedEvent = {} & chrome$events$Event<
  (networkInfo: chrome$networking$config$NetworkInfo) => void
>;

/**
 * Allows an extension to define network filters for the networks it can handle. A call to this function will remove all filters previously installed by the extension before setting the new list.
 * @param networks Network filters to set. Every NetworkInfo must either have the SSID or HexSSID set. Other fields will be ignored.
 * @param callback Called back when this operation is finished.
 * The callback parameter should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$networking$config$setNetworkFilter(
  networks: chrome$networking$config$NetworkInfo[],
  callback: () => void
): void;

/**
 * Called by the extension to notify the network config API that it finished a captive portal authentication attempt and hand over the result of the attempt. This function must only be called with the GUID of the latest onCaptivePortalDetected event.
 * @param GUID Unique network identifier obtained from onCaptivePortalDetected.
 * @param result The result of the authentication attempt.
 * unhandled: The extension does not handle this network or captive portal (e.g. server end-point not found or not compatible).
 * succeeded: The extension handled this network and authenticated successfully.
 * rejected: The extension handled this network, tried to authenticate, however was rejected by the server.
 * failed: The extension handled this network, tried to authenticate, however failed due to an unspecified error.
 * @param callback Called back when this operation is finished.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$networking$config$finishAuthentication(
  GUID: string,
  result: string,
  callback?: () => void
): void;

/**
 * This event fires everytime a captive portal is detected on a network matching any of the currently registered network filters and the user consents to use the extension for authentication. Network filters may be set using the setNetworkFilter. Upon receiving this event the extension should start its authentication attempt with the captive portal. When the extension finishes its attempt, it must call finishAuthentication with the GUID received with this event and the appropriate authentication result.
 */
declare export var chrome$networking$config$onCaptivePortalDetected: chrome$networking$config$CaptivePorttalDetectedEvent;

declare var npm$namespace$chrome$notifications: {
  create: typeof chrome$notifications$create,
  update: typeof chrome$notifications$update,
  clear: typeof chrome$notifications$clear,
  getAll: typeof chrome$notifications$getAll,
  getPermissionLevel: typeof chrome$notifications$getPermissionLevel,
  onClosed: typeof chrome$notifications$onClosed,
  onClicked: typeof chrome$notifications$onClicked,
  onButtonClicked: typeof chrome$notifications$onButtonClicked,
  onPermissionLevelChanged: typeof chrome$notifications$onPermissionLevelChanged,
  onShowSettings: typeof chrome$notifications$onShowSettings
};
export interface chrome$notifications$ButtonOptions {
  title: string;
  iconUrl?: string;
}

export interface chrome$notifications$ItemOptions {
  /**
   * Title of one item of a list notification.
   */
  title: string;

  /**
   * Additional details about this item.
   */
  message: string;
}

export interface chrome$notifications$NotificationOptions {
  /**
   * Optional. Which type of notification to display. Required for notifications.create method.
   */
  type?: string;

  /**
   * Optional.
   * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
   * URLs can be a data URL, a blob URL, or a URL relative to a resource within this extension's .crx file Required for notifications.create method.
   */
  iconUrl?: string;

  /**
   * Optional. Title of the notification (e.g. sender name for email). Required for notifications.create method.
   */
  title?: string;

  /**
   * Optional. Main notification content. Required for notifications.create method.
   */
  message?: string;

  /**
   * Optional.
   * Alternate notification content with a lower-weight font.
   * @since Chrome 31.
   */
  contextMessage?: string;

  /**
   * Optional. Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero is default.
   */
  priority?: number;

  /**
   * Optional. A timestamp associated with the notification, in milliseconds past the epoch (e.g. Date.now() + n).
   */
  eventTime?: number;

  /**
   * Optional. Text and icons for up to two notification action buttons.
   */
  buttons?: chrome$notifications$ButtonOptions[];

  /**
   * Optional. Items for multi-item notifications.
   */
  items?: chrome$notifications$ItemOptions[];

  /**
   * Optional.
   * Current progress ranges from 0 to 100.
   * @since Chrome 30.
   */
  progress?: number;

  /**
   * Optional.
   * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
   * @since Chrome 32.
   */
  isClickable?: boolean;

  /**
   * Optional.
   * A URL to the app icon mask. URLs have the same restrictions as iconUrl. The app icon mask should be in alpha channel, as only the alpha channel of the image will be considered.
   * @since Chrome 38.
   */
  appIconMaskUrl?: string;

  /**
   * Optional. A URL to the image thumbnail for image-type notifications. URLs have the same restrictions as iconUrl.
   */
  imageUrl?: string;

  /**
   * Indicates that the notification should remain visible on screen until the user activates or dismisses the notification.
   * This defaults to false.
   * @since Chrome 50
   */
  requireInteraction?: boolean;
}

export type chrome$notifications$NotificationClosedEvent = {} & chrome$events$Event<
  (notificationId: string, byUser: boolean) => void
>;

export type chrome$notifications$NotificationClickedEvent = {} & chrome$events$Event<
  (notificationId: string) => void
>;

export type chrome$notifications$NotificationButtonClickedEvent = {} & chrome$events$Event<
  (notificationId: string, buttonIndex: number) => void
>;

export type chrome$notifications$NotificationPermissionLevelChangedEvent = {} & chrome$events$Event<
  (level: string) => void
>;

export type chrome$notifications$NotificationShowSettingsEvent = {} & chrome$events$Event<
  () => void
>;

/**
 * The notification closed, either by the system or by user action.
 */
declare export var chrome$notifications$onClosed: chrome$notifications$NotificationClosedEvent;

/**
 * The user clicked in a non-button area of the notification.
 */
declare export var chrome$notifications$onClicked: chrome$notifications$NotificationClickedEvent;

/**
 * The user pressed a button in the notification.
 */
declare export var chrome$notifications$onButtonClicked: chrome$notifications$NotificationButtonClickedEvent;

/**
 * The user changes the permission level.
 * @since Chrome 32.
 */
declare export var chrome$notifications$onPermissionLevelChanged: chrome$notifications$NotificationPermissionLevelChangedEvent;

/**
 * The user clicked on a link for the app's notification settings.
 * @since Chrome 32.
 */
declare export var chrome$notifications$onShowSettings: chrome$notifications$NotificationShowSettingsEvent;

/**
 * Creates and displays a notification.
 * @param notificationId Identifier of the notification. If not set or empty, an ID will automatically be generated. If it matches an existing notification, this method first clears that notification before proceeding with the create operation.
 * The notificationId parameter is required before Chrome 42.
 * @param options Contents of the notification.
 * @param callback Returns the notification id (either supplied or generated) that represents the created notification.
 * The callback is required before Chrome 42.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(string notificationId) {...};
 */
declare export function chrome$notifications$create(
  notificationId: string,
  options: chrome$notifications$NotificationOptions,
  callback?: (notificationId: string) => void
): void;

/**
 * Creates and displays a notification.
 * @param notificationId Identifier of the notification. If not set or empty, an ID will automatically be generated. If it matches an existing notification, this method first clears that notification before proceeding with the create operation.
 * The notificationId parameter is required before Chrome 42.
 * @param options Contents of the notification.
 * @param callback Returns the notification id (either supplied or generated) that represents the created notification.
 * The callback is required before Chrome 42.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(string notificationId) {...};
 */
declare export function chrome$notifications$create(
  options: chrome$notifications$NotificationOptions,
  callback?: (notificationId: string) => void
): void;

/**
 * Updates an existing notification.
 * @param notificationId The id of the notification to be updated. This is returned by notifications.create method.
 * @param options Contents of the notification to update to.
 * @param callback Called to indicate whether a matching notification existed.
 * The callback is required before Chrome 42.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean wasUpdated) {...};
 */
declare export function chrome$notifications$update(
  notificationId: string,
  options: chrome$notifications$NotificationOptions,
  callback?: (wasUpdated: boolean) => void
): void;

/**
 * Clears the specified notification.
 * @param notificationId The id of the notification to be cleared. This is returned by notifications.create method.
 * @param callback Called to indicate whether a matching notification existed.
 * The callback is required before Chrome 42.
 * If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean wasCleared) {...};
 */
declare export function chrome$notifications$clear(
  notificationId: string,
  callback?: (wasCleared: boolean) => void
): void;

/**
 * Retrieves all the notifications.
 * @since Chrome 29.
 * @param callback Returns the set of notification_ids currently in the system.
 * The callback parameter should be a function that looks like this:
 * function(object notifications) {...};
 */
declare export function chrome$notifications$getAll(
  callback: (notifications: Object) => void
): void;

/**
 * Retrieves whether the user has enabled notifications from this app or extension.
 * @since Chrome 32.
 * @param callback Returns the current permission level.
 * The callback parameter should be a function that looks like this:
 * function( PermissionLevel level) {...};
 */
declare export function chrome$notifications$getPermissionLevel(
  callback: (level: string) => void
): void;

declare var npm$namespace$chrome$omnibox: {
  setDefaultSuggestion: typeof chrome$omnibox$setDefaultSuggestion,
  onInputEntered: typeof chrome$omnibox$onInputEntered,
  onInputChanged: typeof chrome$omnibox$onInputChanged,
  onInputStarted: typeof chrome$omnibox$onInputStarted,
  onInputCancelled: typeof chrome$omnibox$onInputCancelled,
  onDeleteSuggestion: typeof chrome$omnibox$onDeleteSuggestion
};

/**
 * A suggest result.
 */
export interface chrome$omnibox$SuggestResult {
  /**
   * The text that is put into the URL bar, and that is sent to the extension when the user chooses this entry.
   */
  content: string;

  /**
   * The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim' (for dim helper text). The styles can be nested, eg. dimmed match. You must escape the five predefined entities to display them as text: stackoverflow.com/a/1091953/89484
   */
  description: string;
}

export interface chrome$omnibox$Suggestion {
  /**
   * The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim' (for dim helper text). The styles can be nested, eg. dimmed match.
   */
  description: string;
}

/**
 * The window disposition for the omnibox query. This is the recommended context to display results.
 */
export type chrome$omnibox$OnInputEnteredDisposition =
  | "currentTab"
  | "newForegroundTab"
  | "newBackgroundTab";

export type chrome$omnibox$OmniboxInputEnteredEvent = {} & chrome$events$Event<
  (text: string, disposition: chrome$omnibox$OnInputEnteredDisposition) => void
>;

export type chrome$omnibox$OmniboxInputChangedEvent = {} & chrome$events$Event<
  (
    text: string,
    suggest: (suggestResults: chrome$omnibox$SuggestResult[]) => void
  ) => void
>;

export type chrome$omnibox$OmniboxInputStartedEvent = {} & chrome$events$Event<
  () => void
>;

export type chrome$omnibox$OmniboxInputCancelledEvent = {} & chrome$events$Event<
  () => void
>;

export type chrome$omnibox$OmniboxSuggestionDeletedEvent = {} & chrome$events$Event<
  (text: string) => void
>;

/**
 * Sets the description and styling for the default suggestion. The default suggestion is the text that is displayed in the first suggestion row underneath the URL bar.
 * @param suggestion A partial SuggestResult object, without the 'content' parameter.
 */
declare export function chrome$omnibox$setDefaultSuggestion(
  suggestion: chrome$omnibox$Suggestion
): void;

/**
 * User has accepted what is typed into the omnibox.
 */
declare export var chrome$omnibox$onInputEntered: chrome$omnibox$OmniboxInputEnteredEvent;

/**
 * User has changed what is typed into the omnibox.
 */
declare export var chrome$omnibox$onInputChanged: chrome$omnibox$OmniboxInputChangedEvent;

/**
 * User has started a keyword input session by typing the extension's keyword. This is guaranteed to be sent exactly once per input session, and before any onInputChanged events.
 */
declare export var chrome$omnibox$onInputStarted: chrome$omnibox$OmniboxInputStartedEvent;

/**
 * User has ended the keyword input session without accepting the input.
 */
declare export var chrome$omnibox$onInputCancelled: chrome$omnibox$OmniboxInputCancelledEvent;

/**
 * User has deleted a suggested result
 * @since Chrome 63.
 */
declare export var chrome$omnibox$onDeleteSuggestion: chrome$omnibox$OmniboxSuggestionDeletedEvent;

declare var npm$namespace$chrome$pageAction: {
  hide: typeof chrome$pageAction$hide,
  show: typeof chrome$pageAction$show,
  setTitle: typeof chrome$pageAction$setTitle,
  setPopup: typeof chrome$pageAction$setPopup,
  getTitle: typeof chrome$pageAction$getTitle,
  getPopup: typeof chrome$pageAction$getPopup,
  setIcon: typeof chrome$pageAction$setIcon,
  onClicked: typeof chrome$pageAction$onClicked
};
export type chrome$pageAction$PageActionClickedEvent = {} & chrome$events$Event<
  (tab: chrome$tabs$Tab) => void
>;

export interface chrome$pageAction$TitleDetails {
  /**
   * The id of the tab for which you want to modify the page action.
   */
  tabId: number;

  /**
   * The tooltip string.
   */
  title: string;
}

export interface chrome$pageAction$GetDetails {
  /**
   * Specify the tab to get the title from.
   */
  tabId: number;
}

export interface chrome$pageAction$PopupDetails {
  /**
   * The id of the tab for which you want to modify the page action.
   */
  tabId: number;

  /**
   * The html file to show in a popup. If set to the empty string (''), no popup is shown.
   */
  popup: string;
}

export interface chrome$pageAction$IconDetails {
  /**
   * The id of the tab for which you want to modify the page action.
   */
  tabId: number;

  /**
   * Optional.
   * @deprecated This argument is ignored.
   */
  iconIndex?: number;

  /**
   * Optional.
   * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
   */
  imageData?:
    | ImageData
    | {
        [index: number]: ImageData
      };

  /**
   * Optional.
   * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
   */
  path?: any;
}

/**
 * Shows the page action. The page action is shown whenever the tab is selected.
 * @param tabId The id of the tab for which you want to modify the page action.
 * @param callback Supported since Chrome 67
 */
declare export function chrome$pageAction$hide(
  tabId: number,
  callback?: () => void
): void;

/**
 * Shows the page action. The page action is shown whenever the tab is selected.
 * @param tabId The id of the tab for which you want to modify the page action.
 * @param callback Supported since Chrome 67
 */
declare export function chrome$pageAction$show(
  tabId: number,
  callback?: () => void
): void;

/**
 * Sets the title of the page action. This is displayed in a tooltip over the page action.
 * @param callback Supported since Chrome 67
 */
declare export function chrome$pageAction$setTitle(
  details: chrome$pageAction$TitleDetails,
  callback?: () => void
): void;

/**
 * Sets the html document to be opened as a popup when the user clicks on the page action's icon.
 * @param callback Supported since Chrome 67
 */
declare export function chrome$pageAction$setPopup(
  details: chrome$pageAction$PopupDetails,
  callback?: () => void
): void;

/**
 * Gets the title of the page action.
 * @since Chrome 19.
 * @param callback The callback parameter should be a function that looks like this:
 * function(string result) {...};
 */
declare export function chrome$pageAction$getTitle(
  details: chrome$pageAction$GetDetails,
  callback: (result: string) => void
): void;

/**
 * Gets the html document set as the popup for this page action.
 * @since Chrome 19.
 * @param callback The callback parameter should be a function that looks like this:
 * function(string result) {...};
 */
declare export function chrome$pageAction$getPopup(
  details: chrome$pageAction$GetDetails,
  callback: (result: string) => void
): void;

/**
 * Sets the icon for the page action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the path or the imageData property must be specified.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$pageAction$setIcon(
  details: chrome$pageAction$IconDetails,
  callback?: () => void
): void;

/**
 * Fired when a page action icon is clicked. This event will not fire if the page action has a popup.
 */
declare export var chrome$pageAction$onClicked: chrome$pageAction$PageActionClickedEvent;

declare var npm$namespace$chrome$pageCapture: {
  saveAsMHTML: typeof chrome$pageCapture$saveAsMHTML
};
export interface chrome$pageCapture$SaveDetails {
  /**
   * The id of the tab to save as MHTML.
   */
  tabId: number;
}

/**
 * Saves the content of the tab with given id as MHTML.
 * @param callback Called when the MHTML has been generated.
 * The callback parameter should be a function that looks like this:
 * function(binary mhtmlData) {...};
 * Parameter mhtmlData: The MHTML data as a Blob.
 */
declare export function chrome$pageCapture$saveAsMHTML(
  details: chrome$pageCapture$SaveDetails,
  callback: (mhtmlData: any) => void
): void;

declare var npm$namespace$chrome$permissions: {
  contains: typeof chrome$permissions$contains,
  getAll: typeof chrome$permissions$getAll,
  request: typeof chrome$permissions$request,
  remove: typeof chrome$permissions$remove,
  onRemoved: typeof chrome$permissions$onRemoved,
  onAdded: typeof chrome$permissions$onAdded
};
export interface chrome$permissions$Permissions {
  /**
   * Optional.
   * List of named permissions (does not include hosts or origins). Anything listed here must appear in the optional_permissions list in the manifest.
   */
  origins?: string[];

  /**
   * Optional.
   * List of origin permissions. Anything listed here must be a subset of a host that appears in the optional_permissions list in the manifest. For example, if http://*.example.com/ or http://* appears in optional_permissions, you can request an origin of http://help.example.com/. Any path is ignored.
   */
  permissions?: string[];
}

export interface chrome$permissions$PermissionsRemovedEvent {
  /**
   * @param callback The callback parameter should be a function that looks like this:
   * function( Permissions permissions) {...};
   * Parameter permissions: The permissions that have been removed.
   */
  addListener(
    callback: (permissions: chrome$permissions$Permissions) => void
  ): void;
}

export interface chrome$permissions$PermissionsAddedEvent {
  /**
   * @param callback The callback parameter should be a function that looks like this:
   * function( Permissions permissions) {...};
   * Parameter permissions: The newly acquired permissions.
   */
  addListener(
    callback: (permissions: chrome$permissions$Permissions) => void
  ): void;
}

/**
 * Checks if the extension has the specified permissions.
 * @param callback The callback parameter should be a function that looks like this:
 * function(boolean result) {...};
 * Parameter result: True if the extension has the specified permissions.
 */
declare export function chrome$permissions$contains(
  permissions: chrome$permissions$Permissions,
  callback: (result: boolean) => void
): void;

/**
 * Gets the extension's current set of permissions.
 * @param callback The callback parameter should be a function that looks like this:
 * function( Permissions permissions) {...};
 * Parameter permissions: The extension's active permissions.
 */
declare export function chrome$permissions$getAll(
  callback: (permissions: chrome$permissions$Permissions) => void
): void;

/**
 * Requests access to the specified permissions. These permissions must be defined in the optional_permissions field of the manifest. If there are any problems requesting the permissions, runtime.lastError will be set.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean granted) {...};
 * Parameter granted: True if the user granted the specified permissions.
 */
declare export function chrome$permissions$request(
  permissions: chrome$permissions$Permissions,
  callback?: (granted: boolean) => void
): void;

/**
 * Removes access to the specified permissions. If there are any problems removing the permissions, runtime.lastError will be set.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
 * function(boolean removed) {...};
 * Parameter removed: True if the permissions were removed.
 */
declare export function chrome$permissions$remove(
  permissions: chrome$permissions$Permissions,
  callback?: (removed: boolean) => void
): void;

/**
 * Fired when access to permissions has been removed from the extension.
 */
declare export var chrome$permissions$onRemoved: chrome$permissions$PermissionsRemovedEvent;

/**
 * Fired when the extension acquires new permissions.
 */
declare export var chrome$permissions$onAdded: chrome$permissions$PermissionsAddedEvent;

declare var npm$namespace$chrome$platformKeys: {
  selectClientCertificates: typeof chrome$platformKeys$selectClientCertificates,
  getKeyPair: typeof chrome$platformKeys$getKeyPair,
  subtleCrypto: typeof chrome$platformKeys$subtleCrypto,
  verifyTLSServerCertificate: typeof chrome$platformKeys$verifyTLSServerCertificate
};
export interface chrome$platformKeys$Match {
  /**
   * The DER encoding of a X.509 certificate.
   */
  certificate: ArrayBuffer;

  /**
   * The  KeyAlgorithm of the certified key. This contains algorithm parameters that are inherent to the key of the certificate (e.g. the key length). Other parameters like the hash function used by the sign function are not included.
   */
  keyAlgorithm: KeyAlgorithm;
}

export interface chrome$platformKeys$ClientCertificateSelectRequestDetails {
  /**
   * This field is a list of the types of certificates requested, sorted in order of the server's preference. Only certificates of a type contained in this list will be retrieved. If certificateTypes is the empty list, however, certificates of any type will be returned.
   */
  certificateTypes: string[];

  /**
   * List of distinguished names of certificate authorities allowed by the server. Each entry must be a DER-encoded X.509 DistinguishedName.
   */
  certificateAuthorities: ArrayBuffer[];
}

export interface chrome$platformKeys$ClientCertificateSelectDetails {
  /**
   * Only certificates that match this request will be returned.
   */
  request: chrome$platformKeys$ClientCertificateSelectRequestDetails;

  /**
   * Optional.
   * If given, the selectClientCertificates operates on this list. Otherwise, obtains the list of all certificates from the platform's certificate stores that are available to this extensions. Entries that the extension doesn't have permission for or which doesn't match the request, are removed.
   */
  clientCerts?: ArrayBuffer[];

  /**
   * If true, the filtered list is presented to the user to manually select a certificate and thereby granting the extension access to the certificate(s) and key(s). Only the selected certificate(s) will be returned. If is false, the list is reduced to all certificates that the extension has been granted access to (automatically or manually).
   */
  interactive: boolean;
}

export interface chrome$platformKeys$ServerCertificateVerificationDetails {
  /**
   * Each chain entry must be the DER encoding of a X.509 certificate, the first entry must be the server certificate and each entry must certify the entry preceding it.
   */
  serverCertificateChain: ArrayBuffer[];

  /**
   * The hostname of the server to verify the certificate for, e.g. the server that presented the serverCertificateChain.
   */
  hostname: string;
}

export interface chrome$platformKeys$ServerCertificateVerificationResult {
  /**
   * The result of the trust verification: true if trust for the given verification details could be established and false if trust is rejected for any reason.
   */
  trusted: boolean;

  /**
   * If the trust verification failed, this array contains the errors reported by the underlying network layer. Otherwise, this array is empty.
   * Note: This list is meant for debugging only and may not contain all relevant errors. The errors returned may change in future revisions of this API, and are not guaranteed to be forwards or backwards compatible.
   */
  debug_errors: string[];
}

/**
 * This function filters from a list of client certificates the ones that are known to the platform, match request and for which the extension has permission to access the certificate and its private key. If interactive is true, the user is presented a dialog where he can select from matching certificates and grant the extension access to the certificate. The selected/filtered client certificates will be passed to callback.
 * @param callback The callback parameter should be a function that looks like this:
 * function(array of Match matches) {...};
 * Parameter matches: The list of certificates that match the request, that the extension has permission for and, if interactive is true, that were selected by the user.
 */
declare export function chrome$platformKeys$selectClientCertificates(
  details: chrome$platformKeys$ClientCertificateSelectDetails,
  callback: (matches: chrome$platformKeys$Match[]) => void
): void;

/**
 * Passes the key pair of certificate for usage with platformKeys.subtleCrypto to callback.
 * @param certificate The certificate of a Match returned by selectClientCertificates.
 * @param parameters Determines signature/hash algorithm parameters additionally to the parameters fixed by the key itself. The same parameters are   accepted as by WebCrypto's importKey function, e.g. RsaHashedImportParams for a RSASSA-PKCS1-v1_5 key. For RSASSA-PKCS1-v1_5 keys, additionally the parameters { 'hash': { 'name': 'none' } } are supported. The sign function will then apply PKCS#1 v1.5 padding and but not hash the given data.
 * @param callback The public and private CryptoKey of a certificate which can only be used with platformKeys.subtleCrypto.
 * The callback parameter should be a function that looks like this:
 * function(object publicKey, object privateKey) {...};
 * Optional parameter privateKey: Might be null if this extension does not have access to it.
 */
declare export function chrome$platformKeys$getKeyPair(
  certificate: ArrayBuffer,
  parameters: Object,
  callback: (publicKey: CryptoKey, privateKey: CryptoKey | null) => void
): void;

/**
 * An implementation of WebCrypto's  SubtleCrypto that allows crypto operations on keys of client certificates that are available to this extension.
 */
declare export function chrome$platformKeys$subtleCrypto(): SubtleCrypto;

/**
 * Checks whether details.serverCertificateChain can be trusted for details.hostname according to the trust settings of the platform. Note: The actual behavior of the trust verification is not fully specified and might change in the future. The API implementation verifies certificate expiration, validates the certification path and checks trust by a known CA. The implementation is supposed to respect the EKU serverAuth and to support subject alternative names.
 * @param callback The callback parameter should be a function that looks like this:
 * function(object result) {...};
 */
declare export function chrome$platformKeys$verifyTLSServerCertificate(
  details: chrome$platformKeys$ServerCertificateVerificationDetails,
  callback: (
    result: chrome$platformKeys$ServerCertificateVerificationResult
  ) => void
): void;

declare var npm$namespace$chrome$power: {
  requestKeepAwake: typeof chrome$power$requestKeepAwake,
  releaseKeepAwake: typeof chrome$power$releaseKeepAwake
};

/**
 * Requests that power management be temporarily disabled. |level| describes the degree to which power management should be disabled. If a request previously made by the same app is still active, it will be replaced by the new request.
 */
declare export function chrome$power$requestKeepAwake(level: string): void;

/**
 * Releases a request previously made via requestKeepAwake().
 */
declare export function chrome$power$releaseKeepAwake(): void;

declare var npm$namespace$chrome$printerProvider: {
  onGetPrintersRequested: typeof chrome$printerProvider$onGetPrintersRequested,
  onGetUsbPrinterInfoRequested: typeof chrome$printerProvider$onGetUsbPrinterInfoRequested,
  onGetCapabilityRequested: typeof chrome$printerProvider$onGetCapabilityRequested,
  onPrintRequested: typeof chrome$printerProvider$onPrintRequested
};
export interface chrome$printerProvider$PrinterInfo {
  /**
   * Unique printer ID.
   */
  id: string;

  /**
   * Printer's human readable name.
   */
  name: string;

  /**
   * Optional. Printer's human readable description.
   */
  description?: string;
}

export interface chrome$printerProvider$PrinterCapabilities {
  /**
   * Device capabilities in CDD format.
   */
  capabilities: any;
}

export interface chrome$printerProvider$PrintJob {
  /**
   * ID of the printer which should handle the job.
   */
  printerId: string;

  /**
   * The print job title.
   */
  title: string;

  /**
   * Print ticket in  CJT format.
   */
  ticket: Object;

  /**
   * The document content type. Supported formats are "application/pdf" and "image/pwg-raster".
   */
  contentType: string;

  /**
   * Blob containing the document data to print. Format must match |contentType|.
   */
  document: Blob;
}

export type chrome$printerProvider$PrinterRequestedEvent = {} & chrome$events$Event<
  (
    resultCallback: (printerInfo: chrome$printerProvider$PrinterInfo[]) => void
  ) => void
>;

export type chrome$printerProvider$PrinterInfoRequestedEvent = {} & chrome$events$Event<
  (
    device: any,
    resultCallback: (printerInfo?: chrome$printerProvider$PrinterInfo) => void
  ) => void
>;

export type chrome$printerProvider$CapabilityRequestedEvent = {} & chrome$events$Event<
  (
    printerId: string,
    resultCallback: (
      capabilities: chrome$printerProvider$PrinterCapabilities
    ) => void
  ) => void
>;

export type chrome$printerProvider$PrintRequestedEvent = {} & chrome$events$Event<
  (
    printJob: chrome$printerProvider$PrintJob,
    resultCallback: (result: string) => void
  ) => void
>;

/**
 * Event fired when print manager requests printers provided by extensions.
 */
declare export var chrome$printerProvider$onGetPrintersRequested: chrome$printerProvider$PrinterRequestedEvent;

/**
 * Event fired when print manager requests information about a USB device that may be a printer.
 * Note: An application should not rely on this event being fired more than once per device. If a connected device is supported it should be returned in the onGetPrintersRequested event.
 * @since Chrome 45.
 */
declare export var chrome$printerProvider$onGetUsbPrinterInfoRequested: chrome$printerProvider$PrinterInfoRequestedEvent;

/**
 * Event fired when print manager requests printer capabilities.
 */
declare export var chrome$printerProvider$onGetCapabilityRequested: chrome$printerProvider$CapabilityRequestedEvent;

/**
 * Event fired when print manager requests printing.
 */
declare export var chrome$printerProvider$onPrintRequested: chrome$printerProvider$PrintRequestedEvent;

declare var npm$namespace$chrome$privacy: {
  services: typeof chrome$privacy$services,
  network: typeof chrome$privacy$network,
  websites: typeof chrome$privacy$websites
};
export interface chrome$privacy$Services {
  /**
   * since Chrome 20.
   */
  spellingServiceEnabled: chrome$types$ChromeSetting;
  searchSuggestEnabled: chrome$types$ChromeSetting;
  instantEnabled: chrome$types$ChromeSetting;
  alternateErrorPagesEnabled: chrome$types$ChromeSetting;
  safeBrowsingEnabled: chrome$types$ChromeSetting;
  autofillEnabled: chrome$types$ChromeSetting;
  translationServiceEnabled: chrome$types$ChromeSetting;

  /**
   * @since Chrome 38.
   */
  passwordSavingEnabled: chrome$types$ChromeSetting;

  /**
   * @since Chrome 42.
   */
  hotwordSearchEnabled: chrome$types$ChromeSetting;

  /**
   * @since Chrome 42.
   */
  safeBrowsingExtendedReportingEnabled: chrome$types$ChromeSetting;
}

export interface chrome$privacy$Network {
  networkPredictionEnabled: chrome$types$ChromeSetting;

  /**
   * @since Chrome 42.
   */
  webRTCMultipleRoutesEnabled: chrome$types$ChromeSetting;

  /**
   * @since Chrome 47. Warning: this is the current Dev channel.
   */
  webRTCNonProxiedUdpEnabled: chrome$types$ChromeSetting;
}

export interface chrome$privacy$Websites {
  thirdPartyCookiesAllowed: chrome$types$ChromeSetting;
  referrersEnabled: chrome$types$ChromeSetting;
  hyperlinkAuditingEnabled: chrome$types$ChromeSetting;

  /**
   * @since Chrome 21.
   */
  protectedContentEnabled: chrome$types$ChromeSetting;
}

/**
 * Settings that enable or disable features that require third-party network services provided by Google and your default search provider.
 */
declare export var chrome$privacy$services: chrome$privacy$Services;

/**
 * Settings that influence Chrome's handling of network connections in general.
 */
declare export var chrome$privacy$network: chrome$privacy$Network;

/**
 * Settings that determine what information Chrome makes available to websites.
 */
declare export var chrome$privacy$websites: chrome$privacy$Websites;

declare var npm$namespace$chrome$proxy: {
  settings: typeof chrome$proxy$settings,
  onProxyError: typeof chrome$proxy$onProxyError
};

/**
 * An object holding proxy auto-config information. Exactly one of the fields should be non-empty.
 */
export interface chrome$proxy$PacScript {
  /**
   * Optional. URL of the PAC file to be used.
   */
  url?: string;

  /**
   * Optional. If true, an invalid PAC script will prevent the network stack from falling back to direct connections. Defaults to false.
   */
  mandatory?: boolean;

  /**
   * Optional. A PAC script.
   */
  data?: string;
}

/**
 * An object encapsulating a complete proxy configuration.
 */
export interface chrome$proxy$ProxyConfig {
  /**
   * Optional. The proxy rules describing this configuration. Use this for 'fixed_servers' mode.
   */
  rules?: chrome$proxy$ProxyRules;

  /**
   * Optional. The proxy auto-config (PAC) script for this configuration. Use this for 'pac_script' mode.
   */
  pacScript?: chrome$proxy$PacScript;

  /**
   * 'direct' = Never use a proxy
   * 'auto_detect' = Auto detect proxy settings
   * 'pac_script' = Use specified PAC script
   * 'fixed_servers' = Manually specify proxy servers
   * 'system' = Use system proxy settings
   */
  mode: string;
}

/**
 * An object encapsulating a single proxy server's specification.
 */
export interface chrome$proxy$ProxyServer {
  /**
   * The URI of the proxy server. This must be an ASCII hostname (in Punycode format). IDNA is not supported, yet.
   */
  host: string;

  /**
   * Optional. The scheme (protocol) of the proxy server itself. Defaults to 'http'.
   */
  scheme?: string;

  /**
   * Optional. The port of the proxy server. Defaults to a port that depends on the scheme.
   */
  port?: number;
}

/**
 * An object encapsulating the set of proxy rules for all protocols. Use either 'singleProxy' or (a subset of) 'proxyForHttp', 'proxyForHttps', 'proxyForFtp' and 'fallbackProxy'.
 */
export interface chrome$proxy$ProxyRules {
  /**
   * Optional. The proxy server to be used for FTP requests.
   */
  proxyForFtp?: chrome$proxy$ProxyServer;

  /**
   * Optional. The proxy server to be used for HTTP requests.
   */
  proxyForHttp?: chrome$proxy$ProxyServer;

  /**
   * Optional. The proxy server to be used for everthing else or if any of the specific proxyFor... is not specified.
   */
  fallbackProxy?: chrome$proxy$ProxyServer;

  /**
   * Optional. The proxy server to be used for all per-URL requests (that is http, https, and ftp).
   */
  singleProxy?: chrome$proxy$ProxyServer;

  /**
   * Optional. The proxy server to be used for HTTPS requests.
   */
  proxyForHttps?: chrome$proxy$ProxyServer;

  /**
   * Optional. List of servers to connect to without a proxy server.
   */
  bypassList?: string[];
}

export interface chrome$proxy$ErrorDetails {
  /**
   * Additional details about the error such as a JavaScript runtime error.
   */
  details: string;

  /**
   * The error description.
   */
  error: string;

  /**
   * If true, the error was fatal and the network transaction was aborted. Otherwise, a direct connection is used instead.
   */
  fatal: boolean;
}

export type chrome$proxy$ProxyErrorEvent = {} & chrome$events$Event<
  (details: chrome$proxy$ErrorDetails) => void
>;

declare export var chrome$proxy$settings: chrome$types$ChromeSetting;

/**
 * Notifies about proxy errors.
 */
declare export var chrome$proxy$onProxyError: chrome$proxy$ProxyErrorEvent;

declare var npm$namespace$chrome$serial: {
  getDevices: typeof chrome$serial$getDevices,
  connect: typeof chrome$serial$connect,
  update: typeof chrome$serial$update,
  disconnect: typeof chrome$serial$disconnect,
  setPaused: typeof chrome$serial$setPaused,
  getInfo: typeof chrome$serial$getInfo,
  getConnections: typeof chrome$serial$getConnections,
  send: typeof chrome$serial$send,
  flush: typeof chrome$serial$flush,
  getControlSignals: typeof chrome$serial$getControlSignals,
  setControlSignals: typeof chrome$serial$setControlSignals,
  setBreak: typeof chrome$serial$setBreak,
  clearBreak: typeof chrome$serial$clearBreak,
  DataBits: typeof chrome$serial$DataBits,
  ParityBit: typeof chrome$serial$ParityBit,
  StopBits: typeof chrome$serial$StopBits,

  onReceive: typeof npm$namespace$chrome$serial$onReceive,
  onReceiveError: typeof npm$namespace$chrome$serial$onReceiveError
};
declare export var chrome$serial$DataBits: {
  SEVEN: "seven",
  EIGHT: "eight"
};

declare export var chrome$serial$ParityBit: {
  NO: "no",
  ODD: "odd",
  EVEN: "even"
};

declare export var chrome$serial$StopBits: {
  ONE: "one",
  TWO: "two"
};

export interface chrome$serial$DeviceInfo {
  /**
   * The device's system path. This should be passed as the path argument to chrome.serial.connect in order to connect to this device.
   */
  path: string;

  /**
   * Optional. A PCI or USB vendor ID if one can be determined for the underlying device.
   */
  vendorId?: number;

  /**
   * Optional. A USB product ID if one can be determined for the underlying device.
   */
  productId?: number;

  /**
   * Optional. A human-readable display name for the underlying device if one can be queried from the host driver.
   */
  displayName?: number;
}

export interface chrome$serial$ConnectionInfo {
  /**
   * The id of the serial port connection.
   */
  connectionId?: number;

  /**
   * Flag indicating whether the connection is blocked from firing onReceive events.
   */
  paused: boolean;

  /**
   * See ConnectionOptions.persistent
   */
  peristent: boolean;

  /**
   * See ConnectionOptions.name
   */
  name: string;

  /**
   * See ConnectionOptions.bufferSize
   */
  bufferSize: number;

  /**
   * See ConnectionOptions.receiveTimeout
   */
  receiveTimeout?: number;

  /**
   * See ConnectionOptions.sendTimeout
   */
  sendTimeout?: number;

  /**
   * Optional. See ConnectionOptions.bitrate.
   * This field may be omitted or inaccurate if a non-standard bitrate is in use, or if an error occurred while querying the underlying device.
   */
  bitrate?: number;

  /**
   * Optional. See ConnectionOptions.dataBits. This field may be omitted if an error occurred while querying the underlying device.
   */
  dataBits?: $ElementType<
    typeof chrome$serial$DataBits,
    $Keys<typeof chrome$serial$DataBits>
  >;

  /**
   * Optional. See ConnectionOptions.parityBit. This field may be omitted if an error occurred while querying the underlying device.
   */
  parityBit?: $ElementType<
    typeof chrome$serial$ParityBit,
    $Keys<typeof chrome$serial$ParityBit>
  >;

  /**
   * Optional. See ConnectionOptions.stopBits. This field may be omitted if an error occurred while querying the underlying device.
   */
  stopBits?: $ElementType<
    typeof chrome$serial$StopBits,
    $Keys<typeof chrome$serial$StopBits>
  >;

  /**
   * Optional. Flag indicating whether or not to enable RTS/CTS hardware flow control. Defaults to false.
   */
  ctsFlowControl?: boolean;
}

export interface chrome$serial$ConnectionOptions {
  /**
   * Optional. Flag indicating whether or not the connection should be left open when the application is suspended (see Manage App Lifecycle: https://developer.chrome.com/apps/app_lifecycle).
   * The default value is "false." When the application is loaded, any serial connections previously opened with persistent=true can be fetched with getConnections.
   */
  peristent?: boolean;

  /**
   * Optional. An application-defined string to associate with the connection.
   */
  name?: string;

  /**
   * Optional. The size of the buffer used to receive data. The default value is 4096.
   */
  bufferSize?: number;

  /**
   * Optional. The requested bitrate of the connection to be opened.
   * For compatibility with the widest range of hardware, this number should match one of commonly-available bitrates,
   * such as 110, 300, 1200, 2400, 4800, 9600, 14400, 19200, 38400, 57600, 115200.
   * There is no guarantee, of course, that the device connected to the serial port will support the requested bitrate, even if the port itself supports that bitrate.
   * 9600 will be passed by default.
   */
  bitrate?: number;

  /**
   * Optional. "eight" will be passed by default.
   */
  dataBits?: $ElementType<
    typeof chrome$serial$DataBits,
    $Keys<typeof chrome$serial$DataBits>
  >;

  /**
   * Optional. "no" will be passed by default.
   */
  parityBit?: $ElementType<
    typeof chrome$serial$ParityBit,
    $Keys<typeof chrome$serial$ParityBit>
  >;

  /**
   * Optional. "one" will be passed by default.
   */
  stopBits?: $ElementType<
    typeof chrome$serial$StopBits,
    $Keys<typeof chrome$serial$StopBits>
  >;

  /**
   * Optional. Flag indicating whether or not to enable RTS/CTS hardware flow control. Defaults to false.
   */
  ctsFlowControl?: boolean;

  /**
   * Optional. The maximum amount of time (in milliseconds) to wait for new data before raising an onReceiveError event with a "timeout" error.
   * If zero, receive timeout errors will not be raised for the connection.
   * Defaults to 0.
   */
  receiveTimeout?: number;

  /**
   * Optional. The maximum amount of time (in milliseconds) to wait for a send operation to complete before calling the callback with a "timeout" error.
   * If zero, send timeout errors will not be triggered.
   * Defaults to 0.
   */
  sendTimeout?: number;
}

/**
 * @since Chrome 33.
 * @description Returns information about available serial devices on the system. The list is regenerated each time this method is called.
 * @export
 * @param callback Called with the list of DeviceInfo objects.
 * The callback parameter should be a function that looks like this:
 * function(array of object ports) {...};
 */
declare export function chrome$serial$getDevices(
  callback: (ports: chrome$serial$DeviceInfo[]) => void
): void;

/**
 * @since Chrome 33.
 * @description Connects to a given serial port.
 * @export
 * @param path The system path of the serial port to open.
 * @param options Port configuration options.
 * @param callback Called when the connection has been opened.
 * The callback parameter should be a function that looks like this:
 * function( ConnectionInfo connectionInfo) {...};
 */
declare export function chrome$serial$connect(
  path: string,
  options: chrome$serial$ConnectionOptions,
  callback: (connectionInfo: chrome$serial$ConnectionInfo) => void
): void;

/**
 * @since Chrome 33.
 * @description Update the option settings on an open serial port connection.
 * @export
 * @param connectionId The id of the opened connection.
 * @param options Port configuration options.
 * @param callback Called when the configuation has completed.
 * The callback parameter should be a function that looks like this:
 * function(boolean result) {...};
 */
declare export function chrome$serial$update(
  connectionId: number,
  options: chrome$serial$ConnectionOptions,
  callback: (result: boolean) => void
): void;

/**
 * @since Chrome 33.
 * @description Disconnects from a serial port.
 * @export
 * @param connectionId The id of the opened connection.
 * @param callback Called when the connection has been closed.
 * The callback parameter should be a function that looks like this:
 * function(boolean result) {...};
 */
declare export function chrome$serial$disconnect(
  connectionId: number,
  callback: (result: boolean) => void
): void;

/**
 * @since Chrome 33.
 * @description Pauses or unpauses an open connection.
 * @export
 * @param connectionId The id of the opened connection.
 * @param paused Flag to indicate whether to pause or unpause.
 * @param callback Called when the connection has been successfully paused or unpaused.
 * The callback parameter should be a function that looks like this:
 * function() {...};
 */
declare export function chrome$serial$setPaused(
  connectionId: number,
  paused: boolean,
  callback: () => void
): void;

/**
 * @since Chrome 33.
 * @description Retrieves the state of a given connection.
 * @export
 * @param callback Called with connection state information when available.
 * The callback parameter should be a function that looks like this:
 * function( ConnectionInfo connectionInfo) {...};
 */
declare export function chrome$serial$getInfo(
  callback: (connectionInfos: chrome$serial$ConnectionInfo[]) => void
): void;

/**
 * @since Chrome 33.
 * @description Retrieves the list of currently opened serial port connections owned by the application.
 * @export
 * @param callback Called with the list of connections when available.
 * The callback parameter should be a function that looks like this:
 * function(array of ConnectionInfo connectionInfos) {...};
 */
declare export function chrome$serial$getConnections(
  callback: (connectionInfos: chrome$serial$ConnectionInfo[]) => void
): void;

/**
 * @since Chrome 33.
 * @description Writes data to the given connection.
 * @export
 * @param connectionId The id of the connection.
 * @param data The data to send.
 * @param callback Called when the operation has completed.
 * The callback parameter should be a function that looks like this:
 * function(object sendInfo) {...};
 */
declare export function chrome$serial$send(
  connectionId: number,
  data: ArrayBuffer,
  callback: (sendInfo: { [key: string]: any }) => void
): void;

/**
 * @description Flushes all bytes in the given connection's input and output buffers.
 * @export
 * @param connectionId The id of the connection.
 * @param callback The callback parameter should be a function that looks like this:
 * function(boolean result) {...};
 */
declare export function chrome$serial$flush(
  connectionId: number,
  callback: (result: boolean) => void
): void;

/**
 * @description Retrieves the state of control signals on a given connection.
 * @export
 * @param connectionId The id of the connection.
 * @param callback Called when the control signals are available.
 * The callback parameter should be a function that looks like this:
 * function(object signals) {...};
 */
declare export function chrome$serial$getControlSignals(
  connectionId: number,
  callback: (signals: { [key: string]: any }) => void
): void;

/**
 * @description Sets the state of control signals on a given connection.
 * @export
 * @param connectionId The id of the connection.
 * @param signals The set of signal changes to send to the device:
 * boolean:	(optional) dtr - DTR (Data Terminal Ready).
 * boolean:	(optional) rts - RTS (Request To Send).
 * @param callback Called once the control signals have been set.
 * The callback parameter should be a function that looks like this:
 * function(boolean result) {...};
 */
declare export function chrome$serial$setControlSignals(
  connectionId: number,
  signals: { [key: string]: any },
  callback: (result: boolean) => void
): void;

/**
 * @since Chrome 45.
 * @description Suspends character transmission on a given connection and places the transmission line in a break state until the clearBreak is called.
 * @export
 * @param connectionId The id of the connection.
 * @param callback The callback parameter should be a function that looks like this:
 * function(boolean result) {...};
 */
declare export function chrome$serial$setBreak(
  connectionId: number,
  callback: (result: boolean) => void
): void;

/**
 * @since Chrome 45.
 * @description Restore character transmission on a given connection and place the transmission line in a nonbreak state.
 * @export
 * @param connectionId The id of the connection.
 * @param callback The callback parameter should be a function that looks like this:
 * function(boolean result) {...};
 */
declare export function chrome$serial$clearBreak(
  connectionId: number,
  callback: (result: boolean) => void
): void;

declare var npm$namespace$chrome$serial$onReceive: {
  addListener: typeof chrome$serial$onReceive$addListener
};
export interface chrome$serial$onReceive$OnReceiveInfo {
  /**
   * The connection identifier.
   */
  connectionId: number;

  /**
   * The data received.
   */
  data: ArrayBuffer;
}

/**
 * @since Chrome 33.
 * @description Event raised when data has been read from the connection.
 * @export
 * @param callback The callback parameter should be a function that looks like this:
 * function(OnReceiveInfo info) {...};
 */
declare export function chrome$serial$onReceive$addListener(
  callback: (info: chrome$serial$onReceive$OnReceiveInfo) => void
): void;

declare var npm$namespace$chrome$serial$onReceiveError: {
  addListener: typeof chrome$serial$onReceiveError$addListener,
  OnReceiveErrorEnum: typeof chrome$serial$onReceiveError$OnReceiveErrorEnum
};
declare export var chrome$serial$onReceiveError$OnReceiveErrorEnum: {
  disconnected: "disconnected",
  timeout: "timeout",
  device_lost: "device_lost",
  break: "break",
  frame_error: "frame_error",
  overrun: "overrun",
  buffer_overflow: "buffer_overflow",
  parity_error: "parity_error",
  system_error: "system_error"
};

export interface chrome$serial$onReceiveError$OnReceiveErrorInfo {
  /**
   * The connection identifier.
   */
  connectionId: number;

  /**
   * The data received.
   */
  error: ArrayBuffer;
}

/**
 * @since Chrome 33.
 * @description Event raised when an error occurred while the runtime was waiting for data on the serial port.
 * Once this event is raised, the connection may be set to paused. A "timeout" error does not pause the connection.
 * @export
 * @param callback The callback parameter should be a function that looks like this:
 * function(OnReceiveErrorInfo info) {...};
 */
declare export function chrome$serial$onReceiveError$addListener(
  callback: (info: chrome$serial$onReceiveError$OnReceiveErrorInfo) => void
): void;

declare var npm$namespace$chrome$runtime: {
  connect: typeof chrome$runtime$connect,
  connectNative: typeof chrome$runtime$connectNative,
  getBackgroundPage: typeof chrome$runtime$getBackgroundPage,
  getManifest: typeof chrome$runtime$getManifest,
  getPackageDirectoryEntry: typeof chrome$runtime$getPackageDirectoryEntry,
  getPlatformInfo: typeof chrome$runtime$getPlatformInfo,
  getURL: typeof chrome$runtime$getURL,
  reload: typeof chrome$runtime$reload,
  requestUpdateCheck: typeof chrome$runtime$requestUpdateCheck,
  restart: typeof chrome$runtime$restart,
  sendMessage: typeof chrome$runtime$sendMessage,
  sendNativeMessage: typeof chrome$runtime$sendNativeMessage,
  setUninstallURL: typeof chrome$runtime$setUninstallURL,
  openOptionsPage: typeof chrome$runtime$openOptionsPage,
  lastError: typeof chrome$runtime$lastError,
  id: typeof chrome$runtime$id,
  onConnect: typeof chrome$runtime$onConnect,
  onConnectExternal: typeof chrome$runtime$onConnectExternal,
  onSuspend: typeof chrome$runtime$onSuspend,
  onStartup: typeof chrome$runtime$onStartup,
  onInstalled: typeof chrome$runtime$onInstalled,
  onSuspendCanceled: typeof chrome$runtime$onSuspendCanceled,
  onMessage: typeof chrome$runtime$onMessage,
  onMessageExternal: typeof chrome$runtime$onMessageExternal,
  onRestartRequired: typeof chrome$runtime$onRestartRequired,
  onUpdateAvailable: typeof chrome$runtime$onUpdateAvailable,
  onBrowserUpdateAvailable: typeof chrome$runtime$onBrowserUpdateAvailable
};

/**
 * This will be defined during an API method callback if there was an error
 */
declare export var chrome$runtime$lastError: chrome$runtime$LastError | void;

/**
 * The ID of the extension/app.
 */
declare export var chrome$runtime$id: string;

export interface chrome$runtime$LastError {
  /**
   * Optional. Details about the error which occurred.
   */
  message?: string;
}

export interface chrome$runtime$ConnectInfo {
  name?: string;
  includeTlsChannelId?: boolean;
}

export interface chrome$runtime$InstalledDetails {
  /**
   * The reason that this event is being dispatched.
   * One of: "install", "update", "chrome_update", or "shared_module_update"
   */
  reason: string;

  /**
   * Optional.
   * Indicates the previous version of the extension, which has just been updated. This is present only if 'reason' is 'update'.
   */
  previousVersion?: string;

  /**
   * Optional.
   * Indicates the ID of the imported shared module extension which updated. This is present only if 'reason' is 'shared_module_update'.
   * @since Chrome 29.
   */
  id?: string;
}

export interface chrome$runtime$MessageOptions {
  /**
   * Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the connection event.
   */
  includeTlsChannelId?: boolean;
}

/**
 * An object containing information about the script context that sent a message or request.
 * @since Chrome 26.
 */
export interface chrome$runtime$MessageSender {
  /**
   * The ID of the extension or app that opened the connection, if any.
   */
  id?: string;

  /**
   * The tabs.Tab which opened the connection, if any. This property will only be present when the connection was opened from a tab (including content scripts), and only if the receiver is an extension, not an app.
   */
  tab?: chrome$tabs$Tab;

  /**
   * The frame that opened the connection. 0 for top-level frames, positive for child frames. This will only be set when tab is set.
   * @since Chrome 41.
   */
  frameId?: number;

  /**
   * The URL of the page or frame that opened the connection. If the sender is in an iframe, it will be iframe's URL not the URL of the page which hosts it.
   * @since Chrome 28.
   */
  url?: string;

  /**
   * The TLS channel ID of the page or frame that opened the connection, if requested by the extension or app, and if available.
   * @since Chrome 32.
   */
  tlsChannelId?: string;
}

/**
 * An object containing information about the current platform.
 * @since Chrome 36.
 */
export interface chrome$runtime$PlatformInfo {
  /**
   * The operating system chrome is running on.
   * One of: "mac", "win", "android", "cros", "linux", or "openbsd"
   */
  os: string;

  /**
   * The machine's processor architecture.
   * One of: "arm", "x86-32", or "x86-64"
   */
  arch: string;

  /**
   * The native client architecture. This may be different from arch on some platforms.
   * One of: "arm", "x86-32", or "x86-64"
   */
  nacl_arch: string;
}

/**
 * An object which allows two way communication with other pages.
 * @since Chrome 26.
 */
export interface chrome$runtime$Port {
  postMessage: (message: Object) => void;
  disconnect: () => void;

  /**
   * Optional.
   * This property will only be present on ports passed to onConnect/onConnectExternal listeners.
   */
  sender?: chrome$runtime$MessageSender;

  /**
   * An object which allows the addition and removal of listeners for a Chrome event.
   */
  onDisconnect: chrome$runtime$PortDisconnectEvent;

  /**
   * An object which allows the addition and removal of listeners for a Chrome event.
   */
  onMessage: chrome$runtime$PortMessageEvent;
  name: string;
}

export interface chrome$runtime$UpdateAvailableDetails {
  /**
   * The version number of the available update.
   */
  version: string;
}

export interface chrome$runtime$UpdateCheckDetails {
  /**
   * The version of the available update.
   */
  version: string;
}

/**
 * Result of the update check.
 */
export type chrome$runtime$RequestUpdateCheckStatus =
  | "throttled"
  | "no_update"
  | "update_available";

export type chrome$runtime$PortDisconnectEvent = {} & chrome$events$Event<
  (port: chrome$runtime$Port) => void
>;

export type chrome$runtime$PortMessageEvent = {} & chrome$events$Event<
  (message: any, port: chrome$runtime$Port) => void
>;

export type chrome$runtime$ExtensionMessageEvent = {} & chrome$events$Event<
  (
    message: any,
    sender: chrome$runtime$MessageSender,
    sendResponse: (response?: any) => void
  ) => void
>;

export type chrome$runtime$ExtensionConnectEvent = {} & chrome$events$Event<
  (port: chrome$runtime$Port) => void
>;

export type chrome$runtime$RuntimeInstalledEvent = {} & chrome$events$Event<
  (details: chrome$runtime$InstalledDetails) => void
>;

export type chrome$runtime$RuntimeEvent = {} & chrome$events$Event<() => void>;

export type chrome$runtime$RuntimeRestartRequiredEvent = {} & chrome$events$Event<
  (reason: string) => void
>;

export type chrome$runtime$RuntimeUpdateAvailableEvent = {} & chrome$events$Event<
  (details: chrome$runtime$UpdateAvailableDetails) => void
>;

export interface chrome$runtime$ManifestIcons {
  [size: number]: string;
}

export interface chrome$runtime$ManifestAction {
  default_icon?: chrome$runtime$ManifestIcons;
  default_title?: string;
  default_popup?: string;
}

export interface chrome$runtime$SearchProvider {
  name?: string;
  keyword?: string;
  favicon_url?: string;
  search_url: string;
  encoding?: string;
  suggest_url?: string;
  instant_url?: string;
  image_url?: string;
  search_url_post_params?: string;
  suggest_url_post_params?: string;
  instant_url_post_params?: string;
  image_url_post_params?: string;
  alternate_urls?: string[];
  prepopulated_id?: number;
  is_default?: boolean;
}

export interface chrome$runtime$Manifest {
  manifest_version: number;
  name: string;
  version: string;
  default_locale?: string;
  description?: string;
  icons?: chrome$runtime$ManifestIcons;
  browser_action?: chrome$runtime$ManifestAction;
  page_action?: chrome$runtime$ManifestAction;
  author?: any;
  automation?: any;
  background?: {
    scripts?: string[],
    page?: string,
    persistent?: boolean
  };
  background_page?: string;
  chrome_settings_overrides?: {
    homepage?: string,
    search_provider?: chrome$runtime$SearchProvider,
    startup_pages?: string[]
  };
  chrome_ui_overrides?: {
    bookmarks_ui?: {
      remove_bookmark_shortcut?: boolean,
      remove_button?: boolean
    }
  };
  chrome_url_overrides?: {
    bookmarks?: string,
    history?: string,
    newtab?: string
  };
  commands?: {
    [name: string]: {
      suggested_key?: {
        default?: string,
        windows?: string,
        mac?: string,
        chromeos?: string,
        linux?: string
      },
      description?: string,
      global?: boolean
    }
  };
  content_capabilities?: {
    matches?: string[],
    permissions?: string[]
  };
  content_scripts?: {
    matches?: string[],
    exclude_matches?: string[],
    css?: string[],
    js?: string[],
    run_at?: string,
    all_frames?: boolean,
    include_globs?: string[],
    exclude_globs?: string[]
  }[];
  content_security_policy?: string;
  converted_from_user_script?: boolean;
  copresence?: any;
  current_locale?: string;
  devtools_page?: string;
  event_rules?: {
    event?: string,
    actions?: {
      type: string
    }[],
    conditions?: chrome$declarativeContent$PageStateMatcherProperties[]
  }[];
  externally_connectable?: {
    ids?: string[],
    matches?: string[],
    accepts_tls_channel_id?: boolean
  };
  file_browser_handlers?: {
    id?: string,
    default_title?: string,
    file_filters?: string[]
  }[];
  file_system_provider_capabilities?: {
    configurable?: boolean,
    watchable?: boolean,
    multiple_mounts?: boolean,
    source?: string
  };
  homepage_url?: string;
  import?: {
    id: string,
    minimum_version?: string
  }[];
  export?: {
    whitelist?: string[]
  };
  incognito?: string;
  input_components?: {
    name?: string,
    type?: string,
    id?: string,
    description?: string,
    language?: string,
    layouts?: any[]
  }[];
  key?: string;
  minimum_chrome_version?: string;
  nacl_modules?: {
    path: string,
    mime_type: string
  }[];
  oauth2?: {
    client_id: string,
    scopes?: string[]
  };
  offline_enabled?: boolean;
  omnibox?: {
    keyword: string
  };
  optional_permissions?: string[];
  options_page?: string;
  options_ui?: {
    page?: string,
    chrome_style?: boolean,
    open_in_tab?: boolean
  };
  permissions?: string[];
  platforms?: {
    nacl_arch?: string,
    sub_package_path: string
  }[];
  plugins?: {
    path: string
  }[];
  requirements?: {
    "3D"?: {
      features?: string[]
    },
    plugins?: {
      npapi?: boolean
    }
  };
  sandbox?: {
    pages: string[],
    content_security_policy?: string
  };
  short_name?: string;
  signature?: any;
  spellcheck?: {
    dictionary_language?: string,
    dictionary_locale?: string,
    dictionary_format?: string,
    dictionary_path?: string
  };
  storage?: {
    managed_schema: string
  };
  system_indicator?: any;
  tts_engine?: {
    voices: {
      voice_name: string,
      lang?: string,
      gender?: string,
      event_types?: string[]
    }[]
  };
  update_url?: string;
  version_name?: string;
  web_accessible_resources?: string[];
  [key: string]: any;
}

/**
 * Attempts to connect to connect listeners within an extension/app (such as the background page), or other extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension communication, and web messaging. Note that this does not connect to any listeners in a content script. Extensions may connect to content scripts embedded in tabs via tabs.connect.
 * @since Chrome 26.
 */
declare export function chrome$runtime$connect(
  connectInfo?: chrome$runtime$ConnectInfo
): chrome$runtime$Port;

/**
 * Attempts to connect to connect listeners within an extension/app (such as the background page), or other extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension communication, and web messaging. Note that this does not connect to any listeners in a content script. Extensions may connect to content scripts embedded in tabs via tabs.connect.
 * @since Chrome 26.
 * @param extensionId Optional.
 * The ID of the extension or app to connect to. If omitted, a connection will be attempted with your own extension. Required if sending messages from a web page for web messaging.
 */
declare export function chrome$runtime$connect(
  extensionId: string,
  connectInfo?: chrome$runtime$ConnectInfo
): chrome$runtime$Port;

/**
 * Connects to a native application in the host machine.
 * @since Chrome 28.
 * @param application The name of the registered application to connect to.
 */
declare export function chrome$runtime$connectNative(
  application: string
): chrome$runtime$Port;

/**
 * Retrieves the JavaScript 'window' object for the background page running inside the current extension/app. If the background page is an event page, the system will ensure it is loaded before calling the callback. If there is no background page, an error is set.
 */
declare export function chrome$runtime$getBackgroundPage(
  callback: (backgroundPage?: windows$Window) => void
): void;

/**
 * Returns details about the app or extension from the manifest. The object returned is a serialization of the full manifest file.
 * @returns The manifest details.
 */
declare export function chrome$runtime$getManifest(): chrome$runtime$Manifest;

/**
 * Returns a DirectoryEntry for the package directory.
 * @since Chrome 29.
 */
declare export function chrome$runtime$getPackageDirectoryEntry(
  callback: (directoryEntry: DirectoryEntry) => void
): void;

/**
 * Returns information about the current platform.
 * @since Chrome 29.
 * @param callback Called with results
 */
declare export function chrome$runtime$getPlatformInfo(
  callback: (platformInfo: chrome$runtime$PlatformInfo) => void
): void;

/**
 * Converts a relative path within an app/extension install directory to a fully-qualified URL.
 * @param path A path to a resource within an app/extension expressed relative to its install directory.
 */
declare export function chrome$runtime$getURL(path: string): string;

/**
 * Reloads the app or extension.
 * @since Chrome 25.
 */
declare export function chrome$runtime$reload(): void;

/**
 * Requests an update check for this app/extension.
 * @since Chrome 25.
 * @param callback Parameter status: Result of the update check. One of: "throttled", "no_update", or "update_available"
 * Optional parameter details: If an update is available, this contains more information about the available update.
 */
declare export function chrome$runtime$requestUpdateCheck(
  callback: (
    status: chrome$runtime$RequestUpdateCheckStatus,
    details?: chrome$runtime$UpdateCheckDetails
  ) => void
): void;

/**
 * Restart the ChromeOS device when the app runs in kiosk mode. Otherwise, it's no-op.
 * @since Chrome 32.
 */
declare export function chrome$runtime$restart(): void;

/**
 * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
 * @since Chrome 26.
 * @param responseCallback Optional
 * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
 */
declare export function chrome$runtime$sendMessage(
  message: any,
  responseCallback?: (response: any) => void
): void;

/**
 * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
 * @since Chrome 32.
 * @param responseCallback Optional
 * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
 */
declare export function chrome$runtime$sendMessage(
  message: any,
  options: chrome$runtime$MessageOptions,
  responseCallback?: (response: any) => void
): void;

/**
 * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
 * @since Chrome 26.
 * @param extensionId The ID of the extension/app to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for web messaging.
 * @param responseCallback Optional
 * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
 */
declare export function chrome$runtime$sendMessage(
  extensionId: string,
  message: any,
  responseCallback?: (response: any) => void
): void;

/**
 * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
 * @since Chrome 32.
 * @param extensionId The ID of the extension/app to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for web messaging.
 * @param responseCallback Optional
 * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
 */
declare export function chrome$runtime$sendMessage(
  extensionId: string,
  message: any,
  options: chrome$runtime$MessageOptions,
  responseCallback?: (response: any) => void
): void;

/**
 * Send a single message to a native application.
 * @since Chrome 28.
 * @param application The of the native messaging host.
 * @param message The message that will be passed to the native messaging host.
 * @param responseCallback Optional.
 * Parameter response: The response message sent by the native messaging host. If an error occurs while connecting to the native messaging host, the callback will be called with no arguments and runtime.lastError will be set to the error message.
 */
declare export function chrome$runtime$sendNativeMessage(
  application: string,
  message: Object,
  responseCallback?: (response: any) => void
): void;

/**
 * Sets the URL to be visited upon uninstallation. This may be used to clean up server-side data, do analytics, and implement surveys. Maximum 255 characters.
 * @since Chrome 41.
 * @param url Since Chrome 34.
 * URL to be opened after the extension is uninstalled. This URL must have an http: or https: scheme. Set an empty string to not open a new tab upon uninstallation.
 * @param callback Called when the uninstall URL is set. If the given URL is invalid, runtime.lastError will be set.
 */
declare export function chrome$runtime$setUninstallURL(
  url: string,
  callback?: () => void
): void;

/**
 * Open your Extension's options page, if possible.
 * The precise behavior may depend on your manifest's options_ui or options_page key, or what Chrome happens to support at the time. For example, the page may be opened in a new tab, within chrome://extensions, within an App, or it may just focus an open options page. It will never cause the caller page to reload.
 * If your Extension does not declare an options page, or Chrome failed to create one for some other reason, the callback will set lastError.
 * @since Chrome 42.
 */
declare export function chrome$runtime$openOptionsPage(
  callback?: () => void
): void;

/**
 * Fired when a connection is made from either an extension process or a content script.
 * @since Chrome 26.
 */
declare export var chrome$runtime$onConnect: chrome$runtime$ExtensionConnectEvent;

/**
 * Fired when a connection is made from another extension.
 * @since Chrome 26.
 */
declare export var chrome$runtime$onConnectExternal: chrome$runtime$ExtensionConnectEvent;

/**
 * Sent to the event page just before it is unloaded. This gives the extension opportunity to do some clean up. Note that since the page is unloading, any asynchronous operations started while handling this event are not guaranteed to complete. If more activity for the event page occurs before it gets unloaded the onSuspendCanceled event will be sent and the page won't be unloaded.
 */
declare export var chrome$runtime$onSuspend: chrome$runtime$RuntimeEvent;

/**
 * Fired when a profile that has this extension installed first starts up. This event is not fired when an incognito profile is started, even if this extension is operating in 'split' incognito mode.
 * @since Chrome 23.
 */
declare export var chrome$runtime$onStartup: chrome$runtime$RuntimeEvent;

/**
 * Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.
 */
declare export var chrome$runtime$onInstalled: chrome$runtime$RuntimeInstalledEvent;

/**
 * Sent after onSuspend to indicate that the app won't be unloaded after all.
 */
declare export var chrome$runtime$onSuspendCanceled: chrome$runtime$RuntimeEvent;

/**
 * Fired when a message is sent from either an extension process or a content script.
 * @since Chrome 26.
 */
declare export var chrome$runtime$onMessage: chrome$runtime$ExtensionMessageEvent;

/**
 * Fired when a message is sent from another extension/app. Cannot be used in a content script.
 * @since Chrome 26.
 */
declare export var chrome$runtime$onMessageExternal: chrome$runtime$ExtensionMessageEvent;

/**
 * Fired when an app or the device that it runs on needs to be restarted. The app should close all its windows at its earliest convenient time to let the restart to happen. If the app does nothing, a restart will be enforced after a 24-hour grace period has passed. Currently, this event is only fired for Chrome OS kiosk apps.
 * @since Chrome 29.
 */
declare export var chrome$runtime$onRestartRequired: chrome$runtime$RuntimeRestartRequiredEvent;

/**
 * Fired when an update is available, but isn't installed immediately because the app is currently running. If you do nothing, the update will be installed the next time the background page gets unloaded, if you want it to be installed sooner you can explicitly call chrome.runtime.reload(). If your extension is using a persistent background page, the background page of course never gets unloaded, so unless you call chrome.runtime.reload() manually in response to this event the update will not get installed until the next time chrome itself restarts. If no handlers are listening for this event, and your extension has a persistent background page, it behaves as if chrome.runtime.reload() is called in response to this event.
 * @since Chrome 25.
 */
declare export var chrome$runtime$onUpdateAvailable: chrome$runtime$RuntimeUpdateAvailableEvent;

/**
 * @deprecated since Chrome 33. Please use chrome.runtime.onRestartRequired.
 * Fired when a Chrome update is available, but isn't installed immediately because a browser restart is required.
 */
declare export var chrome$runtime$onBrowserUpdateAvailable: chrome$runtime$RuntimeEvent;

declare var npm$namespace$chrome$scriptBadge: {
  getPopup: typeof chrome$scriptBadge$getPopup,
  getAttention: typeof chrome$scriptBadge$getAttention,
  setPopup: typeof chrome$scriptBadge$setPopup,
  onClicked: typeof chrome$scriptBadge$onClicked
};
export interface chrome$scriptBadge$GetPopupDetails {
  tabId: number;
}

export interface chrome$scriptBadge$AttentionDetails {
  tabId: number;
}

export interface chrome$scriptBadge$SetPopupDetails {
  tabId: number;
  popup: string;
}

export type chrome$scriptBadge$ScriptBadgeClickedEvent = {} & chrome$events$Event<
  (tab: chrome$tabs$Tab) => void
>;

declare export function chrome$scriptBadge$getPopup(
  details: chrome$scriptBadge$GetPopupDetails,
  callback: Function
): void;

declare export function chrome$scriptBadge$getAttention(
  details: chrome$scriptBadge$AttentionDetails
): void;

declare export function chrome$scriptBadge$setPopup(
  details: chrome$scriptBadge$SetPopupDetails
): void;

declare export var chrome$scriptBadge$onClicked: chrome$scriptBadge$ScriptBadgeClickedEvent;

declare var npm$namespace$chrome$sessions: {
  getRecentlyClosed: typeof chrome$sessions$getRecentlyClosed,
  getDevices: typeof chrome$sessions$getDevices,
  restore: typeof chrome$sessions$restore,
  MAX_SESSION_RESULTS: typeof chrome$sessions$MAX_SESSION_RESULTS,
  onChanged: typeof chrome$sessions$onChanged
};
export interface chrome$sessions$Filter {
  /**
   * Optional.
   * The maximum number of entries to be fetched in the requested list. Omit this parameter to fetch the maximum number of entries (sessions.MAX_SESSION_RESULTS).
   */
  maxResults?: number;
}

export interface chrome$sessions$Session {
  /**
   * The time when the window or tab was closed or modified, represented in milliseconds since the epoch.
   */
  lastModified: number;

  /**
   * Optional.
   * The tabs.Tab, if this entry describes a tab. Either this or sessions.Session.window will be set.
   */
  tab?: chrome$tabs$Tab;

  /**
   * Optional.
   * The windows.Window, if this entry describes a window. Either this or sessions.Session.tab will be set.
   */
  window?: chrome$windows$Window;
}

export interface chrome$sessions$Device {
  /**
   * The name of the foreign device.
   */
  deviceName: string;

  /**
   * A list of open window sessions for the foreign device, sorted from most recently to least recently modified session.
   */
  sessions: chrome$sessions$Session[];
}

export type chrome$sessions$SessionChangedEvent = {} & chrome$events$Event<
  () => void
>;

/**
 * The maximum number of sessions.Session that will be included in a requested list.
 */
declare export var chrome$sessions$MAX_SESSION_RESULTS: number;

/**
 * Gets the list of recently closed tabs and/or windows.
 * @param callback Parameter sessions: The list of closed entries in reverse order that they were closed (the most recently closed tab or window will be at index 0). The entries may contain either tabs or windows.
 */
declare export function chrome$sessions$getRecentlyClosed(
  filter: chrome$sessions$Filter,
  callback: (sessions: chrome$sessions$Session[]) => void
): void;

/**
 * Gets the list of recently closed tabs and/or windows.
 * @param callback Parameter sessions: The list of closed entries in reverse order that they were closed (the most recently closed tab or window will be at index 0). The entries may contain either tabs or windows.
 */
declare export function chrome$sessions$getRecentlyClosed(
  callback: (sessions: chrome$sessions$Session[]) => void
): void;

/**
 * Retrieves all devices with synced sessions.
 * @param callback Parameter devices: The list of sessions.Device objects for each synced session, sorted in order from device with most recently modified session to device with least recently modified session. tabs.Tab objects are sorted by recency in the windows.Window of the sessions.Session objects.
 */
declare export function chrome$sessions$getDevices(
  filter: chrome$sessions$Filter,
  callback: (devices: chrome$sessions$Device[]) => void
): void;

/**
 * Retrieves all devices with synced sessions.
 * @param callback Parameter devices: The list of sessions.Device objects for each synced session, sorted in order from device with most recently modified session to device with least recently modified session. tabs.Tab objects are sorted by recency in the windows.Window of the sessions.Session objects.
 */
declare export function chrome$sessions$getDevices(
  callback: (devices: chrome$sessions$Device[]) => void
): void;

/**
 * Reopens a windows.Window or tabs.Tab, with an optional callback to run when the entry has been restored.
 * @param sessionId Optional.
 * The windows.Window.sessionId, or tabs.Tab.sessionId to restore. If this parameter is not specified, the most recently closed session is restored.
 * @param callback Optional.
 * Parameter restoredSession: A sessions.Session containing the restored windows.Window or tabs.Tab object.
 */
declare export function chrome$sessions$restore(
  sessionId?: string,
  callback?: (restoredSession: chrome$sessions$Session) => void
): void;

/**
 * Fired when recently closed tabs and/or windows are changed. This event does not monitor synced sessions changes.
 */
declare export var chrome$sessions$onChanged: chrome$sessions$SessionChangedEvent;

declare var npm$namespace$chrome$storage: {
  local: typeof chrome$storage$local,
  sync: typeof chrome$storage$sync,
  managed: typeof chrome$storage$managed,
  onChanged: typeof chrome$storage$onChanged
};
export interface chrome$storage$StorageArea {
  /**
   * Gets the amount of space (in bytes) being used by one or more items.
   * @param callback Callback with the amount of space being used by storage, or on failure (in which case runtime.lastError will be set).
   * Parameter bytesInUse: Amount of space being used in storage, in bytes.
   */
  getBytesInUse(callback: (bytesInUse: number) => void): void;

  /**
   * Gets the amount of space (in bytes) being used by one or more items.
   * @param keys A single key or list of keys to get the total usage for. An empty list will return 0. Pass in null to get the total usage of all of storage.
   * @param callback Callback with the amount of space being used by storage, or on failure (in which case runtime.lastError will be set).
   * Parameter bytesInUse: Amount of space being used in storage, in bytes.
   */
  getBytesInUse(
    keys: string | string[] | null,
    callback: (bytesInUse: number) => void
  ): void;

  /**
   * Removes all items from storage.
   * @param callback Optional.
   * Callback on success, or on failure (in which case runtime.lastError will be set).
   */
  clear(callback?: () => void): void;

  /**
   * Sets multiple items.
   * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected.
   * Primitive values such as numbers will serialize as expected. Values with a typeof "object" and "function" will typically serialize to {}, with the exception of Array (serializes as expected), Date, and Regex (serialize using their String representation).
   * @param callback Optional.
   * Callback on success, or on failure (in which case runtime.lastError will be set).
   */
  set(items: Object, callback?: () => void): void;

  /**
   * Removes one or more items from storage.
   * @param A single key or a list of keys for items to remove.
   * @param callback Optional.
   * Callback on success, or on failure (in which case runtime.lastError will be set).
   */
  remove(keys: string | string[], callback?: () => void): void;

  /**
   * Gets one or more items from storage.
   * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
   * Parameter items: Object with items in their key-value mappings.
   */
  get(
    callback: (items: {
      [key: string]: any
    }) => void
  ): void;

  /**
   * Gets one or more items from storage.
   * @param keys A single key to get, list of keys to get, or a dictionary specifying default values.
   * An empty list or object will return an empty result object. Pass in null to get the entire contents of storage.
   * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
   * Parameter items: Object with items in their key-value mappings.
   */
  get(
    keys: string | string[] | Object | null,
    callback: (items: {
      [key: string]: any
    }) => void
  ): void;
}

export interface chrome$storage$StorageChange {
  /**
   * Optional. The new value of the item, if there is a new value.
   */
  newValue?: any;

  /**
   * Optional. The old value of the item, if there was an old value.
   */
  oldValue?: any;
}

export type chrome$storage$LocalStorageArea = {
  /**
   * The maximum amount (in bytes) of data that can be stored in local storage, as measured by the JSON stringification of every value plus every key's length. This value will be ignored if the extension has the unlimitedStorage permission. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
   */
  QUOTA_BYTES: number
} & chrome$storage$StorageArea;

export type chrome$storage$SyncStorageArea = {
  /**
   * @deprecated since Chrome 40. The storage.sync API no longer has a sustained write operation quota.
   */
  MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number,

  /**
   * The maximum total amount (in bytes) of data that can be stored in sync storage, as measured by the JSON stringification of every value plus every key's length. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
   */
  QUOTA_BYTES: number,

  /**
   * The maximum size (in bytes) of each individual item in sync storage, as measured by the JSON stringification of its value plus its key length. Updates containing items larger than this limit will fail immediately and set runtime.lastError.
   */
  QUOTA_BYTES_PER_ITEM: number,

  /**
   * The maximum number of items that can be stored in sync storage. Updates that would cause this limit to be exceeded will fail immediately and set runtime.lastError.
   */
  MAX_ITEMS: number,

  /**
   * The maximum number of set, remove, or clear operations that can be performed each hour. This is 1 every 2 seconds, a lower ceiling than the short term higher writes-per-minute limit.
   * Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
   */
  MAX_WRITE_OPERATIONS_PER_HOUR: number,

  /**
   * The maximum number of set, remove, or clear operations that can be performed each minute. This is 2 per second, providing higher throughput than writes-per-hour over a shorter period of time.
   * Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
   * @since Chrome 40.
   */
  MAX_WRITE_OPERATIONS_PER_MINUTE: number
} & chrome$storage$StorageArea;

export type chrome$storage$StorageChangedEvent = {} & chrome$events$Event<
  (
    changes: {
      [key: string]: chrome$storage$StorageChange
    },
    areaName: string
  ) => void
>;

/**
 * Items in the local storage area are local to each machine.
 */
declare export var chrome$storage$local: chrome$storage$LocalStorageArea;

/**
 * Items in the sync storage area are synced using Chrome Sync.
 */
declare export var chrome$storage$sync: chrome$storage$SyncStorageArea;

/**
 * Items in the managed storage area are set by the domain administrator, and are read-only for the extension; trying to modify this namespace results in an error.
 * @since Chrome 33.
 */
declare export var chrome$storage$managed: chrome$storage$StorageArea;

/**
 * Fired when one or more items change.
 */
declare export var chrome$storage$onChanged: chrome$storage$StorageChangedEvent;

declare var npm$namespace$chrome$socket: {
  create: typeof chrome$socket$create,
  destroy: typeof chrome$socket$destroy,
  connect: typeof chrome$socket$connect,
  bind: typeof chrome$socket$bind,
  disconnect: typeof chrome$socket$disconnect,
  read: typeof chrome$socket$read,
  write: typeof chrome$socket$write,
  recvFrom: typeof chrome$socket$recvFrom,
  sendTo: typeof chrome$socket$sendTo,
  listen: typeof chrome$socket$listen,
  accept: typeof chrome$socket$accept,
  setKeepAlive: typeof chrome$socket$setKeepAlive,
  setNoDelay: typeof chrome$socket$setNoDelay,
  getInfo: typeof chrome$socket$getInfo,
  getNetworkList: typeof chrome$socket$getNetworkList
};
export interface chrome$socket$CreateInfo {
  socketId: number;
}

export interface chrome$socket$AcceptInfo {
  resultCode: number;
  socketId?: number;
}

export interface chrome$socket$ReadInfo {
  resultCode: number;
  data: ArrayBuffer;
}

export interface chrome$socket$WriteInfo {
  bytesWritten: number;
}

export interface chrome$socket$RecvFromInfo {
  resultCode: number;
  data: ArrayBuffer;
  port: number;
  address: string;
}

export interface chrome$socket$SocketInfo {
  socketType: string;
  localPort?: number;
  peerAddress?: string;
  peerPort?: number;
  localAddress?: string;
  connected: boolean;
}

export interface chrome$socket$NetworkInterface {
  name: string;
  address: string;
}

declare export function chrome$socket$create(
  type: string,
  options?: Object,
  callback?: (createInfo: chrome$socket$CreateInfo) => void
): void;

declare export function chrome$socket$destroy(socketId: number): void;

declare export function chrome$socket$connect(
  socketId: number,
  hostname: string,
  port: number,
  callback: (result: number) => void
): void;

declare export function chrome$socket$bind(
  socketId: number,
  address: string,
  port: number,
  callback: (result: number) => void
): void;

declare export function chrome$socket$disconnect(socketId: number): void;

declare export function chrome$socket$read(
  socketId: number,
  bufferSize?: number,
  callback?: (readInfo: chrome$socket$ReadInfo) => void
): void;

declare export function chrome$socket$write(
  socketId: number,
  data: ArrayBuffer,
  callback?: (writeInfo: chrome$socket$WriteInfo) => void
): void;

declare export function chrome$socket$recvFrom(
  socketId: number,
  bufferSize?: number,
  callback?: (recvFromInfo: chrome$socket$RecvFromInfo) => void
): void;

declare export function chrome$socket$sendTo(
  socketId: number,
  data: ArrayBuffer,
  address: string,
  port: number,
  callback?: (writeInfo: chrome$socket$WriteInfo) => void
): void;

declare export function chrome$socket$listen(
  socketId: number,
  address: string,
  port: number,
  backlog?: number,
  callback?: (result: number) => void
): void;

declare export function chrome$socket$accept(
  socketId: number,
  callback?: (acceptInfo: chrome$socket$AcceptInfo) => void
): void;

declare export function chrome$socket$setKeepAlive(
  socketId: number,
  enable: boolean,
  delay?: number,
  callback?: (result: boolean) => void
): void;

declare export function chrome$socket$setNoDelay(
  socketId: number,
  noDelay: boolean,
  callback?: (result: boolean) => void
): void;

declare export function chrome$socket$getInfo(
  socketId: number,
  callback: (result: chrome$socket$SocketInfo) => void
): void;

declare export function chrome$socket$getNetworkList(
  callback: (result: chrome$socket$NetworkInterface[]) => void
): void;

declare var npm$namespace$chrome$system: {
  cpu: typeof npm$namespace$chrome$system$cpu,
  memory: typeof npm$namespace$chrome$system$memory,
  storage: typeof npm$namespace$chrome$system$storage,
  display: typeof npm$namespace$chrome$system$display
};

declare var npm$namespace$chrome$system$cpu: {
  getInfo: typeof chrome$system$cpu$getInfo
};
export interface chrome$system$cpu$ProcessorUsage {
  /**
   * The cumulative time used by userspace programs on this processor.
   */
  user: number;

  /**
   * The cumulative time used by kernel programs on this processor.
   */
  kernel: number;

  /**
   * The cumulative time spent idle by this processor.
   */
  idle: number;

  /**
   * The total cumulative time for this processor. This value is equal to user + kernel + idle.
   */
  total: number;
}

export interface chrome$system$cpu$ProcessorInfo {
  /**
   * Cumulative usage info for this logical processor.
   */
  usage: chrome$system$cpu$ProcessorUsage;
}

export interface chrome$system$cpu$CpuInfo {
  /**
   * The number of logical processors.
   */
  numOfProcessors: number;

  /**
   * The architecture name of the processors.
   */
  archName: string;

  /**
   * The model name of the processors.
   */
  modelName: string;

  /**
   * A set of feature codes indicating some of the processor's capabilities.
   * The currently supported codes are "mmx", "sse", "sse2", "sse3", "ssse3", "sse4_1", "sse4_2", and "avx".
   */
  features: string[];

  /**
   * Information about each logical processor.
   */
  processors: chrome$system$cpu$ProcessorInfo[];
}

/**
 * Queries basic CPU information of the system.
 */
declare export function chrome$system$cpu$getInfo(
  callback: (info: chrome$system$cpu$CpuInfo) => void
): void;

declare var npm$namespace$chrome$system$memory: {
  getInfo: typeof chrome$system$memory$getInfo
};
export interface chrome$system$memory$MemoryInfo {
  /**
   * The total amount of physical memory capacity, in bytes.
   */
  capacity: number;

  /**
   * The amount of available capacity, in bytes.
   */
  availableCapacity: number;
}

/**
 * Get physical memory information.
 */
declare export function chrome$system$memory$getInfo(
  callback: (info: chrome$system$memory$MemoryInfo) => void
): void;

declare var npm$namespace$chrome$system$storage: {
  getInfo: typeof chrome$system$storage$getInfo,
  ejectDevice: typeof chrome$system$storage$ejectDevice,
  getAvailableCapacity: typeof chrome$system$storage$getAvailableCapacity,
  onAttached: typeof chrome$system$storage$onAttached,
  onDetached: typeof chrome$system$storage$onDetached
};
export interface chrome$system$storage$StorageUnitInfo {
  /**
   * The transient ID that uniquely identifies the storage device. This ID will be persistent within the same run of a single application. It will not be a persistent identifier between different runs of an application, or between different applications.
   */
  id: string;

  /**
   * The name of the storage unit.
   */
  name: string;

  /**
   * The media type of the storage unit.
   * fixed: The storage has fixed media, e.g. hard disk or SSD.
   * removable: The storage is removable, e.g. USB flash drive.
   * unknown: The storage type is unknown.
   */
  type: string;

  /**
   * The total amount of the storage space, in bytes.
   */
  capacity: number;
}

export interface chrome$system$storage$StorageCapacityInfo {
  /**
   * A copied |id| of getAvailableCapacity function parameter |id|.
   */
  id: string;

  /**
   * The available capacity of the storage device, in bytes.
   */
  availableCapacity: number;
}

export type chrome$system$storage$SystemStorageAttachedEvent = {} & chrome$events$Event<
  (info: chrome$system$storage$StorageUnitInfo) => void
>;

export type chrome$system$storage$SystemStorageDetachedEvent = {} & chrome$events$Event<
  (id: string) => void
>;

/**
 * Get the storage information from the system. The argument passed to the callback is an array of StorageUnitInfo objects.
 */
declare export function chrome$system$storage$getInfo(
  callback: (info: chrome$system$storage$StorageUnitInfo[]) => void
): void;

/**
 * Ejects a removable storage device.
 * @param callback Parameter result: success: The ejection command is successful -- the application can prompt the user to remove the device; in_use: The device is in use by another application. The ejection did not succeed; the user should not remove the device until the other application is done with the device; no_such_device: There is no such device known. failure: The ejection command failed.
 */
declare export function chrome$system$storage$ejectDevice(
  id: string,
  callback: (result: string) => void
): void;

/**
 * Get the available capacity of a specified |id| storage device. The |id| is the transient device ID from StorageUnitInfo.
 * @since Dev channel only.
 */
declare export function chrome$system$storage$getAvailableCapacity(
  id: string,
  callback: (info: chrome$system$storage$StorageCapacityInfo) => void
): void;

/**
 * Fired when a new removable storage is attached to the system.
 */
declare export var chrome$system$storage$onAttached: chrome$system$storage$SystemStorageAttachedEvent;

/**
 * Fired when a removable storage is detached from the system.
 */
declare export var chrome$system$storage$onDetached: chrome$system$storage$SystemStorageDetachedEvent;

declare var npm$namespace$chrome$system$display: {
  getInfo: typeof chrome$system$display$getInfo,
  getDisplayLayout: typeof chrome$system$display$getDisplayLayout,
  setDisplayProperties: typeof chrome$system$display$setDisplayProperties,
  setDisplayLayout: typeof chrome$system$display$setDisplayLayout,
  enableUnifiedDesktop: typeof chrome$system$display$enableUnifiedDesktop,
  overscanCalibrationStart: typeof chrome$system$display$overscanCalibrationStart,
  overscanCalibrationAdjust: typeof chrome$system$display$overscanCalibrationAdjust,
  overscanCalibrationReset: typeof chrome$system$display$overscanCalibrationReset,
  overscanCalibrationComplete: typeof chrome$system$display$overscanCalibrationComplete,
  showNativeTouchCalibration: typeof chrome$system$display$showNativeTouchCalibration,
  startCustomTouchCalibration: typeof chrome$system$display$startCustomTouchCalibration,
  completeCustomTouchCalibration: typeof chrome$system$display$completeCustomTouchCalibration,
  clearTouchCalibration: typeof chrome$system$display$clearTouchCalibration,
  setMirrorMode: typeof chrome$system$display$setMirrorMode,
  DisplayPosition: typeof chrome$system$display$DisplayPosition,
  MirrorMode: typeof chrome$system$display$MirrorMode,
  onDisplayChanged: typeof chrome$system$display$onDisplayChanged
};
declare export var chrome$system$display$DisplayPosition: {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left"
};

declare export var chrome$system$display$MirrorMode: {
  OFF: "off",
  NORMAL: "normal",
  MIXED: "mixed"
};

export interface chrome$system$display$Bounds {
  /**
   * The x-coordinate of the upper-left corner.
   */
  left: number;

  /**
   * The y-coordinate of the upper-left corner.
   */
  top: number;

  /**
   * The width of the display in pixels.
   */
  width: number;

  /**
   * The height of the display in pixels.
   */
  height: number;
}

export interface chrome$system$display$Insets {
  /**
   * The x-axis distance from the left bound.
   */
  left: number;

  /**
   * The y-axis distance from the top bound.
   */
  top: number;

  /**
   * The x-axis distance from the right bound.
   */
  right: number;

  /**
   * The y-axis distance from the bottom bound.
   */
  bottom: number;
}

/**
 * @since Chrome 57
 */
export interface chrome$system$display$Point {
  /**
   * The x-coordinate of the point.
   */
  x: number;

  /**
   * The y-coordinate of the point.
   */
  y: number;
}

/**
 * @since Chrome 57
 */
export interface chrome$system$display$TouchCalibrationPair {
  /**
   * The coordinates of the display point.
   */
  displayPoint: chrome$system$display$Point;

  /**
   * The coordinates of the touch point corresponding to the display point.
   */
  touchPoint: chrome$system$display$Point;
}

/**
 * @since Chrome 52
 */
export interface chrome$system$display$DisplayMode {
  /**
   * The display mode width in device independent (user visible) pixels.
   */
  width: number;

  /**
   * The display mode height in device independent (user visible) pixels.
   */
  height: number;

  /**
   * The display mode width in native pixels.
   */
  widthInNativePixels: number;

  /**
   * The display mode height in native pixels.
   */
  heightInNativePixels: number;

  /**
   * @deprecated Deprecated since Chrome 70. Use `displayZoomFactor`
   * @description The display mode UI scale factor.
   */
  uiScale: number;

  /**
   * The display mode device scale factor.
   */
  deviceScaleFactor: number;

  /**
   * The display mode refresh rate in hertz.
   * @since Chrome 67
   */
  refreshRate: number;

  /**
   * True if the mode is the display's native mode.
   */
  isNative: boolean;

  /**
   * True if the display mode is currently selected.
   */
  isSelected: boolean;
}

/**
 * @since Chrome 53
 */
export interface chrome$system$display$DisplayLayout {
  /**
   * The unique identifier of the display.
   */
  id: string;

  /**
   * The unique identifier of the parent display. Empty if this is the root.
   */
  parentId: string;

  /**
   * The layout position of this display relative to the parent.
   * This will be ignored for the root.
   * @see enum
   */
  position: $ElementType<
    typeof chrome$system$display$DisplayPosition,
    $Keys<typeof chrome$system$display$DisplayPosition>
  >;

  /**
   * The offset of the display along the connected edge. 0 indicates that the topmost or leftmost corners are aligned.
   */
  offset: number;
}

/**
 * The pairs of point used to calibrate the display.
 */
export interface chrome$system$display$TouchCalibrationPairs {
  /**
   * First pair of touch and display point required for touch calibration.
   */
  pair1: chrome$system$display$TouchCalibrationPair;

  /**
   * Second pair of touch and display point required for touch calibration.
   */
  pair2: chrome$system$display$TouchCalibrationPair;

  /**
   * Third pair of touch and display point required for touch calibration.
   */
  pair3: chrome$system$display$TouchCalibrationPair;

  /**
   * Fourth pair of touch and display point required for touch calibration.
   */
  pair4: chrome$system$display$TouchCalibrationPair;
}

/**
 * Representation of info data to be used in chrome.system.display.setDisplayProperties()
 */
export interface chrome$system$display$DisplayPropertiesInfo {
  /**
   * @requires (CrOS) Chrome OS only.
   * @description If set to true, changes the display mode to unified desktop.
   * If set to false, unified desktop mode will be disabled.
   * This is only valid for the primary display.
   * If provided, mirroringSourceId must not be provided and other properties may not apply.
   * This is has no effect if not provided.
   * @see (See `enableUnifiedDesktop` for details).
   * @since Chrome 59
   */
  isUnified?: boolean;

  /**
   * @requires (CrOS) Chrome OS only.
   * @deprecated Deprecated since Chrome 68. Use ´setMirrorMode´
   * @see setMirrorMode
   * @description If set and not empty, enables mirroring for this display.
   * Otherwise disables mirroring for this display.
   * This value should indicate the id of the source display to mirror,
   * which must not be the same as the id passed to setDisplayProperties.
   * If set, no other property may be set.
   */
  mirroringSourceId?: string;

  /**
   * If set to true, makes the display primary.
   * No-op if set to false.
   */
  isPrimary?: boolean;

  /**
   * If set, sets the display's overscan insets to the provided values.
   * Note that overscan values may not be negative or larger than a half of the screen's size.
   * Overscan cannot be changed on the internal monitor. It's applied after isPrimary parameter.
   */
  overscan?: chrome$system$display$Insets;

  /**
   * If set, updates the display's rotation.
   * Legal values are [0, 90, 180, 270].
   * The rotation is set clockwise, relative to the display's vertical position.
   * It's applied after overscan parameter.
   */
  rotation?: 0 | 90 | 180 | 270;

  /**
   * If set, updates the display's logical bounds origin along x-axis.
   * Applied together with boundsOriginY, if boundsOriginY is set.
   * Note that, when updating the display origin, some constraints will be applied,
   * so the final bounds origin may be different than the one set.
   * The final bounds can be retrieved using getInfo. The bounds origin is applied
   * after rotation. The bounds origin cannot be changed on the primary display.
   * Note that is also invalid to set bounds origin values if isPrimary is also set
   * (as isPrimary parameter is applied first).
   */
  boundsOriginX?: number;

  /**
   * If set, updates the display's logical bounds origin along y-axis.
   * @see [See documentation for boundsOriginX parameter.]
   */
  boundsOriginY: number;

  /**
   * If set, updates the display mode to the mode matching this value.
   * @since Chrome 52
   */
  displayMode?: chrome$system$display$DisplayMode;

  /**
   * @since Chrome 65.
   * @description If set, updates the zoom associated with the display.
   * This zoom performs re-layout and repaint thus resulting
   * in a better quality zoom than just performing
   * a pixel by pixel stretch enlargement.
   */
  displayZoomFactor?: number;
}

/**
 * Options affecting how the information is returned.
 * @since Chrome 59
 */
export interface chrome$system$display$DisplayInfoFlags {
  /**
   * If set to true, only a single DisplayUnitInfo will be returned by getInfo when in unified desktop mode.
   * @see [enableUnifiedDesktop]
   * @default false
   */
  singleUnified?: boolean;
}

/**
 * Information about display properties.
 */
export interface chrome$system$display$DisplayInfo {
  /**
   * The unique identifier of the display.
   */
  id: string;

  /**
   * The user-friendly name (e.g. 'HP LCD monitor').
   */
  name: string;

  /**
   * @requires (CrOS Kiosk app) Only available in Chrome OS Kiosk apps
   */
  edid?: {
    /**
     * 3 character manufacturer code.
     */
    manufacturerId: string,

    /**
     * 2 byte manufacturer-assigned code.
     */
    productId: string,

    /**
     * Year of manufacturer.
     */
    yearOfManufacture?: string
  };

  /**
   * @requires (CrOS) Only working properly on Chrome OS.
   * Identifier of the display that is being mirrored on the display unit.
   * If mirroring is not in progress, set to an empty string
   * Currently exposed only on ChromeOS.
   * Will be empty string on other platforms.
   */
  mirroringSourceId: string;

  /**
   * @requires (CrOS) Only available on Chrome OS.
   * Identifiers of the displays to which the source display is being mirrored.
   * Empty if no displays are being mirrored. This will be set to the same value
   * for all displays.
   * ❗ This must not include *mirroringSourceId*. ❗
   */
  mirroringDestinationIds: string[];

  /**
   * True if this is the primary display.
   */
  isPrimary: boolean;

  /**
   * True if this is an internal display.
   */
  isInternal: boolean;

  /**
   * True if this display is enabled.
   */
  isEnabled: boolean;

  /**
   * The number of pixels per inch along the x-axis.
   */
  dpiX: number;

  /**
   * The number of pixels per inch along the y-axis.
   */
  dpiY: number;

  /**
   * The display's clockwise rotation in degrees relative to the vertical position. Currently exposed only on ChromeOS. Will be set to 0 on other platforms.
   */
  rotation: number;

  /**
   * The display's logical bounds.
   */
  bounds: chrome$system$display$Bounds;

  /**
   * The display's insets within its screen's bounds. Currently exposed only on ChromeOS. Will be set to empty insets on other platforms.
   */
  overscan: chrome$system$display$Insets;

  /**
   * The usable work area of the display within the display bounds. The work area excludes areas of the display reserved for OS, for example taskbar and launcher.
   */
  workArea: chrome$system$display$Bounds;

  /**
   * @requires (CrOS) Only available on Chrome OS.
   * The list of available display modes.
   * The current mode will have isSelected=true.
   * Only available on Chrome OS.
   * Will be set to an empty array on other platforms.
   */
  modes: chrome$system$display$DisplayMode[];

  /**
   * True if this display has a touch input device associated with it.
   */
  hasTouchSupport: boolean;

  /**
   * A list of zoom factor values that can be set for the display.
   */
  availableDisplayZoomFactors: number[];

  /**
   * The ratio between the display's current and default zoom.
   * For example, value 1 is equivalent to 100% zoom, and value 1.5 is equivalent to 150% zoom.
   */
  displayZoomFactor: number;
}

export interface chrome$system$display$MirrorModeInfo {
  /**
   * The mirror mode that should be set.
   * **off**
   * Use the default mode (extended or unified desktop).
   * **normal**
   * The default source display will be mirrored to all other displays.
   * **mixed**
   * The specified source display will be mirrored to the provided destination displays. All other connected displays will be extended.
   */
  mode?: "off" | "normal" | "mixed";
}

export type chrome$system$display$MirrorModeInfoMixed = {
  mode: "mixed",
  mirroringSourceId?: string,

  /**
   * The ids of the mirroring destination displays.
   */
  mirroringDestinationIds?: string[]
} & chrome$system$display$MirrorModeInfo;

/**
 * Requests the information for all attached display devices.
 * @param callback The callback to invoke with the results.
 */
declare export function chrome$system$display$getInfo(
  callback: (info: chrome$system$display$DisplayInfo[]) => void
): void;

/**
 * Requests the information for all attached display devices.
 * @since Chrome 59
 * @param flags Options affecting how the information is returned.
 * @param callback The callback to invoke with the results.
 */
declare export function chrome$system$display$getInfo(
  flags: chrome$system$display$DisplayInfoFlags,
  callback: (info: chrome$system$display$DisplayInfo[]) => void
): void;

/**
 * @requires (CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
 * @description Requests the layout info for all displays.
 * @since Chrome 53
 * @export
 * @param callback The callback to invoke with the results.
 */
declare export function chrome$system$display$getDisplayLayout(
  callback: (layouts: chrome$system$display$DisplayLayout[]) => void
): void;

/**
 * @requires (CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
 * @description Updates the properties for the display specified by **id**,
 * according to the information provided in **info**.
 * On failure, runtime.lastError will be set.
 * @param {string} id The display's unique identifier.
 * @param {chrome$system$display$DisplayPropertiesInfo} info The information about display properties that should be changed. A property will be changed only if a new value for it is specified in |info|.
 * @param {() => void} callback Empty function called when the function finishes. To find out whether the function succeeded, runtime.lastError should be queried.
 */
declare export function chrome$system$display$setDisplayProperties(
  id: string,
  info: chrome$system$display$DisplayPropertiesInfo,
  callback?: () => void
): void;

/**
 * @requires (CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
 * @description Set the layout for all displays.
 * Any display not included will use the default layout.
 * If a layout would overlap or be otherwise invalid it will be adjusted to a valid layout.
 * After layout is resolved, an onDisplayChanged event will be triggered.
 * @since Chrome 53
 * @param layouts The layout information, required for all displays except the primary display.
 * @param callback Empty function called when the function finishes. To find out whether the function succeeded, runtime.lastError should be queried.
 */
declare export function chrome$system$display$setDisplayLayout(
  layouts: chrome$system$display$DisplayLayout[],
  callback?: () => void
): void;

/**
 * @requires (CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
 * @description Enables/disables the unified desktop feature.
 * Note that this simply enables the feature, but will not change the actual desktop mode.
 * (That is, if the desktop is in mirror mode, it will stay in mirror mode)
 * @since Chrome 46
 * @param {boolean} enabled True if unified desktop should be enabled.
 */
declare export function chrome$system$display$enableUnifiedDesktop(
  enabled: boolean
): void;

/**
 * Starts overscan calibration for a display.
 * This will show an overlay on the screen indicating the current overscan insets.
 * If overscan calibration for display **id** is in progress this will reset calibration.
 * @since Chrome 53
 * @param id The display's unique identifier.
 */
declare export function chrome$system$display$overscanCalibrationStart(
  id: string
): void;

/**
 * Adjusts the current overscan insets for a display.
 * Typically this should etiher move the display along an axis (e.g. left+right have the same value)
 * or scale it along an axis (e.g. top+bottom have opposite values).
 * Each Adjust call is cumulative with previous calls since Start.
 * @since Chrome 53
 * @param id The display's unique identifier.
 * @param delta The amount to change the overscan insets.
 */
declare export function chrome$system$display$overscanCalibrationAdjust(
  id: string,
  delta: chrome$system$display$Insets
): void;

/**
 * Resets the overscan insets for a display to the last saved value (i.e before Start was called).
 * @since Chrome 53
 * @param id The display's unique identifier.
 */
declare export function chrome$system$display$overscanCalibrationReset(
  id: string
): void;

/**
 * Complete overscan adjustments for a display by saving the current values and hiding the overlay.
 * @since Chrome 53
 * @param id The display's unique identifier.
 */
declare export function chrome$system$display$overscanCalibrationComplete(
  id: string
): void;

/**
 * Displays the native touch calibration UX for the display with **id** as display id.
 * This will show an overlay on the screen with required instructions on how to proceed.
 * The callback will be invoked in case of successful calibraion only.
 * If the calibration fails, this will throw an error.
 * @since Chrome 57
 * @param id The display's unique identifier.
 * @param callback Optional callback to inform the caller that the touch calibration has ended. The argument of the callback informs if the calibration was a success or not.
 */
declare export function chrome$system$display$showNativeTouchCalibration(
  id: string,
  callback: (success: boolean) => void
): void;

/**
 * Starts custom touch calibration for a display.
 * This should be called when using a custom UX for collecting calibration data.
 * If another touch calibration is already in progress this will throw an error.
 * @since Chrome 57
 * @param id The display's unique identifier.
 */
declare export function chrome$system$display$startCustomTouchCalibration(
  id: string
): void;

/**
 * Sets the touch calibration pairs for a display.
 * These **pairs** would be used to calibrate the touch screen for display with **id** called in startCustomTouchCalibration().
 * Always call **startCustomTouchCalibration** before calling this method.
 * If another touch calibration is already in progress this will throw an error.
 * @since Chrome 57
 * @param pairs The pairs of point used to calibrate the display.
 * @param bounds Bounds of the display when the touch calibration was performed. |bounds.left| and |bounds.top| values are ignored.
 * @throws Error
 */
declare export function chrome$system$display$completeCustomTouchCalibration(
  pairs: chrome$system$display$TouchCalibrationPairs,
  bounds: chrome$system$display$Bounds
): void;

/**
 * Resets the touch calibration for the display and brings it back to its default state by clearing any touch calibration data associated with the display.
 * @since Chrome 57
 * @param id The display's unique identifier.
 */
declare export function chrome$system$display$clearTouchCalibration(
  id: string
): void;

/**
 * @requires (CrOS Kiosk app) Chrome OS Kiosk apps only
 * @since Chrome 65.
 * @description Sets the display mode to the specified mirror mode.
 * Each call resets the state from previous calls.
 * Calling setDisplayProperties() will fail for the
 * mirroring destination displays.
 */
declare export function chrome$system$display$setMirrorMode(
  info:
    | chrome$system$display$MirrorModeInfo
    | chrome$system$display$MirrorModeInfoMixed,
  callback: () => void
): void;

/**
 * Fired when anything changes to the display configuration.
 */
declare export var chrome$system$display$onDisplayChanged: chrome$events$Event<
  () => void
>;

declare var npm$namespace$chrome$tabCapture: {
  capture: typeof chrome$tabCapture$capture,
  getCapturedTabs: typeof chrome$tabCapture$getCapturedTabs,
  onStatusChanged: typeof chrome$tabCapture$onStatusChanged
};
export interface chrome$tabCapture$CaptureInfo {
  /**
   * The id of the tab whose status changed.
   */
  tabId: number;

  /**
   * The new capture status of the tab.
   * One of: "pending", "active", "stopped", or "error"
   */
  status: string;

  /**
   * Whether an element in the tab being captured is in fullscreen mode.
   */
  fullscreen: boolean;
}

export interface chrome$tabCapture$CaptureOptions {
  /**
   * Optional.
   */
  audio?: boolean;

  /**
   * Optional.
   */
  video?: boolean;

  /**
   * Optional.
   */
  audioConstraints?: MediaStreamConstraints;

  /**
   * Optional.
   */
  videoConstraints?: MediaStreamConstraints;
}

export type chrome$tabCapture$CaptureStatusChangedEvent = {} & chrome$events$Event<
  (info: chrome$tabCapture$CaptureInfo) => void
>;

/**
 * Captures the visible area of the currently active tab. Capture can only be started on the currently active tab after the extension has been invoked. Capture is maintained across page navigations within the tab, and stops when the tab is closed, or the media stream is closed by the extension.
 * @param options Configures the returned media stream.
 * @param callback Callback with either the tab capture stream or null.
 */
declare export function chrome$tabCapture$capture(
  options: chrome$tabCapture$CaptureOptions,
  callback: (stream: MediaStream | null) => void
): void;

/**
 * Returns a list of tabs that have requested capture or are being captured, i.e. status != stopped and status != error. This allows extensions to inform the user that there is an existing tab capture that would prevent a new tab capture from succeeding (or to prevent redundant requests for the same tab).
 * @param callback Callback invoked with CaptureInfo[] for captured tabs.
 */
declare export function chrome$tabCapture$getCapturedTabs(
  callback: (result: chrome$tabCapture$CaptureInfo[]) => void
): void;

/**
 * Event fired when the capture status of a tab changes. This allows extension authors to keep track of the capture status of tabs to keep UI elements like page actions in sync.
 */
declare export var chrome$tabCapture$onStatusChanged: chrome$tabCapture$CaptureStatusChangedEvent;

declare var npm$namespace$chrome$tabs: {
  executeScript: typeof chrome$tabs$executeScript,
  get: typeof chrome$tabs$get,
  getAllInWindow: typeof chrome$tabs$getAllInWindow,
  getCurrent: typeof chrome$tabs$getCurrent,
  getSelected: typeof chrome$tabs$getSelected,
  create: typeof chrome$tabs$create,
  move: typeof chrome$tabs$move,
  update: typeof chrome$tabs$update,
  remove: typeof chrome$tabs$remove,
  captureVisibleTab: typeof chrome$tabs$captureVisibleTab,
  reload: typeof chrome$tabs$reload,
  duplicate: typeof chrome$tabs$duplicate,
  sendMessage: typeof chrome$tabs$sendMessage,
  sendRequest: typeof chrome$tabs$sendRequest,
  connect: typeof chrome$tabs$connect,
  insertCSS: typeof chrome$tabs$insertCSS,
  highlight: typeof chrome$tabs$highlight,
  query: typeof chrome$tabs$query,
  detectLanguage: typeof chrome$tabs$detectLanguage,
  setZoom: typeof chrome$tabs$setZoom,
  getZoom: typeof chrome$tabs$getZoom,
  setZoomSettings: typeof chrome$tabs$setZoomSettings,
  getZoomSettings: typeof chrome$tabs$getZoomSettings,
  discard: typeof chrome$tabs$discard,
  onHighlighted: typeof chrome$tabs$onHighlighted,
  onRemoved: typeof chrome$tabs$onRemoved,
  onUpdated: typeof chrome$tabs$onUpdated,
  onAttached: typeof chrome$tabs$onAttached,
  onMoved: typeof chrome$tabs$onMoved,
  onDetached: typeof chrome$tabs$onDetached,
  onCreated: typeof chrome$tabs$onCreated,
  onActivated: typeof chrome$tabs$onActivated,
  onReplaced: typeof chrome$tabs$onReplaced,
  onSelectionChanged: typeof chrome$tabs$onSelectionChanged,
  onActiveChanged: typeof chrome$tabs$onActiveChanged,
  onHighlightChanged: typeof chrome$tabs$onHighlightChanged,
  onZoomChange: typeof chrome$tabs$onZoomChange,
  TAB_ID_NONE: typeof chrome$tabs$TAB_ID_NONE
};

/**
 * Tab muted state and the reason for the last state change.
 * @since Chrome 46. Warning: this is the current Beta channel.
 */
export interface chrome$tabs$MutedInfo {
  /**
   * Whether the tab is prevented from playing sound (but hasn't necessarily recently produced sound). Equivalent to whether the muted audio indicator is showing.
   */
  muted: boolean;

  /**
   * Optional.
   * The reason the tab was muted or unmuted. Not set if the tab's mute state has never been changed.
   * "user": A user input action has set/overridden the muted state.
   * "capture": Tab capture started, forcing a muted state change.
   * "extension": An extension, identified by the extensionId field, set the muted state.
   */
  reason?: string;

  /**
   * Optional.
   * The ID of the extension that changed the muted state. Not set if an extension was not the reason the muted state last changed.
   */
  extensionId?: string;
}

export interface chrome$tabs$Tab {
  /**
   * Optional.
   * Either loading or complete.
   */
  status?: string;

  /**
   * The zero-based index of the tab within its window.
   */
  index: number;

  /**
   * Optional.
   * The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists.
   * @since Chrome 18.
   */
  openerTabId?: number;

  /**
   * Optional.
   * The title of the tab. This property is only present if the extension's manifest includes the "tabs" permission.
   */
  title?: string;

  /**
   * Optional.
   * The URL the tab is displaying. This property is only present if the extension's manifest includes the "tabs" permission.
   */
  url?: string;

  /**
   * Whether the tab is pinned.
   * @since Chrome 9.
   */
  pinned: boolean;

  /**
   * Whether the tab is highlighted.
   * @since Chrome 16.
   */
  highlighted: boolean;

  /**
   * The ID of the window the tab is contained within.
   */
  windowId: number;

  /**
   * Whether the tab is active in its window. (Does not necessarily mean the window is focused.)
   * @since Chrome 16.
   */
  active: boolean;

  /**
   * Optional.
   * The URL of the tab's favicon. This property is only present if the extension's manifest includes the "tabs" permission. It may also be an empty string if the tab is loading.
   */
  favIconUrl?: string;

  /**
   * Optional.
   * The ID of the tab. Tab IDs are unique within a browser session. Under some circumstances a Tab may not be assigned an ID, for example when querying foreign tabs using the sessions API, in which case a session ID may be present. Tab ID can also be set to chrome.tabs.TAB_ID_NONE for apps and devtools windows.
   */
  id?: number;

  /**
   * Whether the tab is in an incognito window.
   */
  incognito: boolean;

  /**
   * Whether the tab is selected.
   * @deprecated since Chrome 33. Please use tabs.Tab.highlighted.
   */
  selected: boolean;

  /**
   * Optional.
   * Whether the tab has produced sound over the past couple of seconds (but it might not be heard if also muted). Equivalent to whether the speaker audio indicator is showing.
   * @since Chrome 45.
   */
  audible?: boolean;

  /**
   * Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
   * @since Chrome 54.
   */
  discarded: boolean;

  /**
   * Whether the tab can be discarded automatically by the browser when resources are low.
   * @since Chrome 54.
   */
  autoDiscardable: boolean;

  /**
   * Optional.
   * Current tab muted state and the reason for the last state change.
   * @since Chrome 46. Warning: this is the current Beta channel.
   */
  mutedInfo?: chrome$tabs$MutedInfo;

  /**
   * Optional. The width of the tab in pixels.
   * @since Chrome 31.
   */
  width?: number;

  /**
   * Optional. The height of the tab in pixels.
   * @since Chrome 31.
   */
  height?: number;

  /**
   * Optional. The session ID used to uniquely identify a Tab obtained from the sessions API.
   * @since Chrome 31.
   */
  sessionId?: string;
}

/**
 * Defines how zoom changes in a tab are handled and at what scope.
 * @since Chrome 38.
 */
export interface chrome$tabs$ZoomSettings {
  /**
   * Optional.
   * Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page; defaults to "automatic".
   * "automatic": Zoom changes are handled automatically by the browser.
   * "manual": Overrides the automatic handling of zoom changes. The onZoomChange event will still be dispatched, and it is the responsibility of the extension to listen for this event and manually scale the page. This mode does not support per-origin zooming, and will thus ignore the scope zoom setting and assume per-tab.
   * "disabled": Disables all zooming in the tab. The tab will revert to the default zoom level, and all attempted zoom changes will be ignored.
   */
  mode?: string;

  /**
   * Optional.
   * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to per-origin when in automatic mode, and per-tab otherwise.
   * "per-origin": Zoom changes will persist in the zoomed page's origin, i.e. all other tabs navigated to that same origin will be zoomed as well. Moreover, per-origin zoom changes are saved with the origin, meaning that when navigating to other pages in the same origin, they will all be zoomed to the same zoom factor. The per-origin scope is only available in the automatic mode.
   * "per-tab": Zoom changes only take effect in this tab, and zoom changes in other tabs will not affect the zooming of this tab. Also, per-tab zoom changes are reset on navigation; navigating a tab will always load pages with their per-origin zoom factors.
   */
  scope?: string;

  /**
   * Optional.
   * Used to return the default zoom level for the current tab in calls to tabs.getZoomSettings.
   * @since Chrome 43.
   */
  defaultZoomFactor?: number;
}

export interface chrome$tabs$InjectDetails {
  /**
   * Optional.
   * If allFrames is true, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's false and is only injected into the top frame.
   */
  allFrames?: boolean;

  /**
   * Optional. JavaScript or CSS code to inject.
   * Warning: Be careful using the code parameter. Incorrect use of it may open your extension to cross site scripting attacks.
   */
  code?: string;

  /**
   * Optional. The soonest that the JavaScript or CSS will be injected into the tab.
   * One of: "document_start", "document_end", or "document_idle"
   * @since Chrome 20.
   */
  runAt?: string;

  /**
   * Optional. JavaScript or CSS file to inject.
   */
  file?: string;

  /**
   * Optional.
   * The frame where the script or CSS should be injected. Defaults to 0 (the top-level frame).
   * @since Chrome 39.
   */
  frameId?: number;

  /**
   * Optional.
   * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is false.
   * @since Chrome 39.
   */
  matchAboutBlank?: boolean;

  /**
   * Optional. The origin of the CSS to inject. This may only be specified for CSS, not JavaScript. Defaults to "author".
   * One of: "author", or "user"
   * @since Chrome 66.
   */
  cssOrigin?: string;
}

export interface chrome$tabs$CreateProperties {
  /**
   * Optional. The position the tab should take in the window. The provided value will be clamped to between zero and the number of tabs in the window.
   */
  index?: number;

  /**
   * Optional.
   * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab.
   * @since Chrome 18.
   */
  openerTabId?: number;

  /**
   * Optional.
   * The URL to navigate the tab to initially. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.
   */
  url?: string;

  /**
   * Optional. Whether the tab should be pinned. Defaults to false
   * @since Chrome 9.
   */
  pinned?: boolean;

  /**
   * Optional. The window to create the new tab in. Defaults to the current window.
   */
  windowId?: number;

  /**
   * Optional.
   * Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see windows.update). Defaults to true.
   * @since Chrome 16.
   */
  active?: boolean;

  /**
   * Optional. Whether the tab should become the selected tab in the window. Defaults to true
   * @deprecated since Chrome 33. Please use active.
   */
  selected?: boolean;
}

export interface chrome$tabs$MoveProperties {
  /**
   * The position to move the window to. -1 will place the tab at the end of the window.
   */
  index: number;

  /**
   * Optional. Defaults to the window the tab is currently in.
   */
  windowId?: number;
}

export interface chrome$tabs$UpdateProperties {
  /**
   * Optional. Whether the tab should be pinned.
   * @since Chrome 9.
   */
  pinned?: boolean;

  /**
   * Optional. The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
   * @since Chrome 18.
   */
  openerTabId?: number;

  /**
   * Optional. A URL to navigate the tab to.
   */
  url?: string;

  /**
   * Optional. Adds or removes the tab from the current selection.
   * @since Chrome 16.
   */
  highlighted?: boolean;

  /**
   * Optional. Whether the tab should be active. Does not affect whether the window is focused (see windows.update).
   * @since Chrome 16.
   */
  active?: boolean;

  /**
   * Optional. Whether the tab should be selected.
   * @deprecated since Chrome 33. Please use highlighted.
   */
  selected?: boolean;

  /**
   * Optional. Whether the tab should be muted.
   * @since Chrome 45.
   */
  muted?: boolean;

  /**
   * Optional. Whether the tab should be discarded automatically by the browser when resources are low.
   * @since Chrome 54.
   */
  autoDiscardable?: boolean;
}

export interface chrome$tabs$CaptureVisibleTabOptions {
  /**
   * Optional.
   * When format is "jpeg", controls the quality of the resulting image. This value is ignored for PNG images. As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store it will decrease.
   */
  quality?: number;

  /**
   * Optional. The format of an image.
   * One of: "jpeg", or "png"
   */
  format?: string;
}

export interface chrome$tabs$ReloadProperties {
  /**
   * Optional. Whether using any local cache. Default is false.
   */
  bypassCache?: boolean;
}

export interface chrome$tabs$ConnectInfo {
  /**
   * Optional. Will be passed into onConnect for content scripts that are listening for the connection event.
   */
  name?: string;

  /**
   * Open a port to a specific frame identified by frameId instead of all frames in the tab.
   * @since Chrome 41.
   */
  frameId?: number;
}

export interface chrome$tabs$MessageSendOptions {
  /**
   * Optional. Send a message to a specific frame identified by frameId instead of all frames in the tab.
   */
  frameId?: number;
}

export interface chrome$tabs$HighlightInfo {
  /**
   * One or more tab indices to highlight.
   */
  tabs: number | number[];

  /**
   * Optional. The window that contains the tabs.
   */
  windowId?: number;
}

export interface chrome$tabs$QueryInfo {
  /**
   * Optional. Whether the tabs have completed loading.
   * One of: "loading", or "complete"
   */
  status?: "loading" | "complete";

  /**
   * Optional. Whether the tabs are in the last focused window.
   * @since Chrome 19.
   */
  lastFocusedWindow?: boolean;

  /**
   * Optional. The ID of the parent window, or windows.WINDOW_ID_CURRENT for the current window.
   */
  windowId?: number;

  /**
   * Optional. The type of window the tabs are in.
   * One of: "normal", "popup", "panel", "app", or "devtools"
   */
  windowType?: "normal" | "popup" | "panel" | "app" | "devtools";

  /**
   * Optional. Whether the tabs are active in their windows.
   */
  active?: boolean;

  /**
   * Optional. The position of the tabs within their windows.
   * @since Chrome 18.
   */
  index?: number;

  /**
   * Optional. Match page titles against a pattern.
   */
  title?: string;

  /**
   * Optional. Match tabs against one or more URL patterns. Note that fragment identifiers are not matched.
   */
  url?: string | string[];

  /**
   * Optional. Whether the tabs are in the current window.
   * @since Chrome 19.
   */
  currentWindow?: boolean;

  /**
   * Optional. Whether the tabs are highlighted.
   */
  highlighted?: boolean;

  /**
   * Optional.
   * Whether the tabs are discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
   * @since Chrome 54.
   */
  discarded?: boolean;

  /**
   * Optional.
   * Whether the tabs can be discarded automatically by the browser when resources are low.
   * @since Chrome 54.
   */
  autoDiscardable?: boolean;

  /**
   * Optional. Whether the tabs are pinned.
   */
  pinned?: boolean;

  /**
   * Optional. Whether the tabs are audible.
   * @since Chrome 45.
   */
  audible?: boolean;

  /**
   * Optional. Whether the tabs are muted.
   * @since Chrome 45.
   */
  muted?: boolean;
}

export interface chrome$tabs$TabHighlightInfo {
  windowId: number;
  tabIds: number[];
}

export interface chrome$tabs$TabRemoveInfo {
  /**
   * The window whose tab is closed.
   * @since Chrome 25.
   */
  windowId: number;

  /**
   * True when the tab is being closed because its window is being closed.
   */
  isWindowClosing: boolean;
}

export interface chrome$tabs$TabAttachInfo {
  newPosition: number;
  newWindowId: number;
}

export interface chrome$tabs$TabChangeInfo {
  /**
   * Optional. The status of the tab. Can be either loading or complete.
   */
  status?: string;

  /**
   * The tab's new pinned state.
   * @since Chrome 9.
   */
  pinned?: boolean;

  /**
   * Optional. The tab's URL if it has changed.
   */
  url?: string;

  /**
   * The tab's new audible state.
   * @since Chrome 45.
   */
  audible?: boolean;

  /**
   * The tab's new discarded state.
   * @since Chrome 54.
   */
  discarded?: boolean;

  /**
   * The tab's new auto-discardable
   * @since Chrome 54.
   */
  autoDiscardable?: boolean;

  /**
   * The tab's new muted state and the reason for the change.
   * @since Chrome 46. Warning: this is the current Beta channel.
   */
  mutedInfo?: chrome$tabs$MutedInfo;

  /**
   * The tab's new favicon URL.
   * @since Chrome 27.
   */
  favIconUrl?: string;

  /**
   * The tab's new title.
   * @since Chrome 48.
   */
  title?: string;
}

export interface chrome$tabs$TabMoveInfo {
  toIndex: number;
  windowId: number;
  fromIndex: number;
}

export interface chrome$tabs$TabDetachInfo {
  oldWindowId: number;
  oldPosition: number;
}

export interface chrome$tabs$TabActiveInfo {
  /**
   * The ID of the tab that has become active.
   */
  tabId: number;

  /**
   * The ID of the window the active tab changed inside of.
   */
  windowId: number;
}

export interface chrome$tabs$TabWindowInfo {
  /**
   * The ID of the window of where the tab is located.
   */
  windowId: number;
}

export interface chrome$tabs$ZoomChangeInfo {
  tabId: number;
  oldZoomFactor: number;
  newZoomFactor: number;
  zoomSettings: chrome$tabs$ZoomSettings;
}

export type chrome$tabs$TabHighlightedEvent = {} & chrome$events$Event<
  (highlightInfo: chrome$tabs$TabHighlightInfo) => void
>;

export type chrome$tabs$TabRemovedEvent = {} & chrome$events$Event<
  (tabId: number, removeInfo: chrome$tabs$TabRemoveInfo) => void
>;

export type chrome$tabs$TabUpdatedEvent = {} & chrome$events$Event<
  (
    tabId: number,
    changeInfo: chrome$tabs$TabChangeInfo,
    tab: chrome$tabs$Tab
  ) => void
>;

export type chrome$tabs$TabAttachedEvent = {} & chrome$events$Event<
  (tabId: number, attachInfo: chrome$tabs$TabAttachInfo) => void
>;

export type chrome$tabs$TabMovedEvent = {} & chrome$events$Event<
  (tabId: number, moveInfo: chrome$tabs$TabMoveInfo) => void
>;

export type chrome$tabs$TabDetachedEvent = {} & chrome$events$Event<
  (tabId: number, detachInfo: chrome$tabs$TabDetachInfo) => void
>;

export type chrome$tabs$TabCreatedEvent = {} & chrome$events$Event<
  (tab: chrome$tabs$Tab) => void
>;

export type chrome$tabs$TabActivatedEvent = {} & chrome$events$Event<
  (activeInfo: chrome$tabs$TabActiveInfo) => void
>;

export type chrome$tabs$TabReplacedEvent = {} & chrome$events$Event<
  (addedTabId: number, removedTabId: number) => void
>;

export type chrome$tabs$TabSelectedEvent = {} & chrome$events$Event<
  (tabId: number, selectInfo: chrome$tabs$TabWindowInfo) => void
>;

export type chrome$tabs$TabZoomChangeEvent = {} & chrome$events$Event<
  (ZoomChangeInfo: chrome$tabs$ZoomChangeInfo) => void
>;

/**
 * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
 * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
 * @param callback Optional. Called after all the JavaScript has been executed.
 * Parameter result: The result of the script in every injected frame.
 */
declare export function chrome$tabs$executeScript(
  details: chrome$tabs$InjectDetails,
  callback?: (result: any[]) => void
): void;

/**
 * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
 * @param tabId Optional. The ID of the tab in which to run the script; defaults to the active tab of the current window.
 * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
 * @param callback Optional. Called after all the JavaScript has been executed.
 * Parameter result: The result of the script in every injected frame.
 */
declare export function chrome$tabs$executeScript(
  tabId: number,
  details: chrome$tabs$InjectDetails,
  callback?: (result: any[]) => void
): void;

/**
 * Retrieves details about the specified tab.
 */
declare export function chrome$tabs$get(
  tabId: number,
  callback: (tab: chrome$tabs$Tab) => void
): void;

/**
 * Gets details about all tabs in the specified window.
 * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
 */
declare export function chrome$tabs$getAllInWindow(
  callback: (tab: chrome$tabs$Tab) => void
): void;

/**
 * Gets details about all tabs in the specified window.
 * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
 * @param windowId Optional. Defaults to the current window.
 */
declare export function chrome$tabs$getAllInWindow(
  windowId: number,
  callback: (tab: chrome$tabs$Tab) => void
): void;

/**
 * Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for example: a background page or popup view).
 */
declare export function chrome$tabs$getCurrent(
  callback: (tab?: chrome$tabs$Tab) => void
): void;

/**
 * Gets the tab that is selected in the specified window.
 * @deprecated since Chrome 33. Please use tabs.query {active: true}.
 */
declare export function chrome$tabs$getSelected(
  callback: (tab: chrome$tabs$Tab) => void
): void;

/**
 * Gets the tab that is selected in the specified window.
 * @deprecated since Chrome 33. Please use tabs.query {active: true}.
 * @param windowId Optional. Defaults to the current window.
 */
declare export function chrome$tabs$getSelected(
  windowId: number,
  callback: (tab: chrome$tabs$Tab) => void
): void;

/**
 * Creates a new tab.
 * @param callback Optional.
 * Parameter tab: Details about the created tab. Will contain the ID of the new tab.
 */
declare export function chrome$tabs$create(
  createProperties: chrome$tabs$CreateProperties,
  callback?: (tab: chrome$tabs$Tab) => void
): void;

/**
 * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
 * @param tabId The tab to move.
 * @param callback Optional.
 * Parameter tab: Details about the moved tab.
 */
declare export function chrome$tabs$move(
  tabId: number,
  moveProperties: chrome$tabs$MoveProperties,
  callback?: (tab: chrome$tabs$Tab) => void
): void;

/**
 * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
 * @param tabIds The tabs to move.
 * @param callback Optional.
 * Parameter tabs: Details about the moved tabs.
 */
declare export function chrome$tabs$move(
  tabIds: number[],
  moveProperties: chrome$tabs$MoveProperties,
  callback?: (tabs: chrome$tabs$Tab[]) => void
): void;

/**
 * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
 * @param callback Optional.
 * Optional parameter tab: Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
 */
declare export function chrome$tabs$update(
  updateProperties: chrome$tabs$UpdateProperties,
  callback?: (tab?: chrome$tabs$Tab) => void
): void;

/**
 * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
 * @param tabId Defaults to the selected tab of the current window.
 * @param callback Optional.
 * Optional parameter tab: Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
 */
declare export function chrome$tabs$update(
  tabId: number,
  updateProperties: chrome$tabs$UpdateProperties,
  callback?: (tab?: chrome$tabs$Tab) => void
): void;

/**
 * Closes a tab.
 * @param tabId The tab to close.
 */
declare export function chrome$tabs$remove(
  tabId: number,
  callback?: Function
): void;

/**
 * Closes several tabs.
 * @param tabIds The list of tabs to close.
 */
declare export function chrome$tabs$remove(
  tabIds: number[],
  callback?: Function
): void;

/**
 * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
 * @param callback Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
 */
declare export function chrome$tabs$captureVisibleTab(
  callback: (dataUrl: string) => void
): void;

/**
 * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
 * @param windowId Optional. The target window. Defaults to the current window.
 * @param callback Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
 */
declare export function chrome$tabs$captureVisibleTab(
  windowId: number,
  callback: (dataUrl: string) => void
): void;

/**
 * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
 * @param options Optional. Details about the format and quality of an image.
 * @param callback Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
 */
declare export function chrome$tabs$captureVisibleTab(
  options: chrome$tabs$CaptureVisibleTabOptions,
  callback: (dataUrl: string) => void
): void;

/**
 * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
 * @param windowId Optional. The target window. Defaults to the current window.
 * @param options Optional. Details about the format and quality of an image.
 * @param callback Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
 */
declare export function chrome$tabs$captureVisibleTab(
  windowId: number,
  options: chrome$tabs$CaptureVisibleTabOptions,
  callback: (dataUrl: string) => void
): void;

/**
 * Reload a tab.
 * @since Chrome 16.
 * @param tabId The ID of the tab to reload; defaults to the selected tab of the current window.
 */
declare export function chrome$tabs$reload(
  tabId: number,
  reloadProperties?: chrome$tabs$ReloadProperties,
  callback?: () => void
): void;

/**
 * Reload the selected tab of the current window.
 * @since Chrome 16.
 */
declare export function chrome$tabs$reload(
  reloadProperties: chrome$tabs$ReloadProperties,
  callback?: () => void
): void;

/**
 * Reload the selected tab of the current window.
 * @since Chrome 16.
 */
declare export function chrome$tabs$reload(callback?: () => void): void;

/**
 * Duplicates a tab.
 * @since Chrome 23.
 * @param tabId The ID of the tab which is to be duplicated.
 * @param callback Optional.
 * Optional parameter tab: Details about the duplicated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
 */
declare export function chrome$tabs$duplicate(
  tabId: number,
  callback?: (tab?: chrome$tabs$Tab) => void
): void;

/**
 * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
 * @since Chrome 20.
 */
declare export function chrome$tabs$sendMessage(
  tabId: number,
  message: any,
  responseCallback?: (response: any) => void
): void;

/**
 * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
 * @since Chrome 41.
 * @param responseCallback Optional.
 * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the specified tab, the callback will be called with no arguments and runtime.lastError will be set to the error message.
 */
declare export function chrome$tabs$sendMessage(
  tabId: number,
  message: any,
  options: chrome$tabs$MessageSendOptions,
  responseCallback?: (response: any) => void
): void;

/**
 * Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The extension.onRequest event is fired in each content script running in the specified tab for the current extension.
 * @deprecated since Chrome 33. Please use runtime.sendMessage.
 * @param responseCallback Optional.
 * Parameter response: The JSON response object sent by the handler of the request. If an error occurs while connecting to the specified tab, the callback will be called with no arguments and runtime.lastError will be set to the error message.
 */
declare export function chrome$tabs$sendRequest(
  tabId: number,
  request: any,
  responseCallback?: (response: any) => void
): void;

/**
 * Connects to the content script(s) in the specified tab. The runtime.onConnect event is fired in each content script running in the specified tab for the current extension.
 */
declare export function chrome$tabs$connect(
  tabId: number,
  connectInfo?: chrome$tabs$ConnectInfo
): chrome$runtime$Port;

/**
 * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
 * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
 * @param callback Optional. Called when all the CSS has been inserted.
 */
declare export function chrome$tabs$insertCSS(
  details: chrome$tabs$InjectDetails,
  callback?: Function
): void;

/**
 * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
 * @param tabId Optional. The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
 * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
 * @param callback Optional. Called when all the CSS has been inserted.
 */
declare export function chrome$tabs$insertCSS(
  tabId: number,
  details: chrome$tabs$InjectDetails,
  callback?: Function
): void;

/**
 * Highlights the given tabs.
 * @since Chrome 16.
 * @param callback Optional.
 * Parameter window: Contains details about the window whose tabs were highlighted.
 */
declare export function chrome$tabs$highlight(
  highlightInfo: chrome$tabs$HighlightInfo,
  callback?: (window: chrome$windows$Window) => void
): void;

/**
 * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
 * @since Chrome 16.
 */
declare export function chrome$tabs$query(
  queryInfo: chrome$tabs$QueryInfo,
  callback: (result: chrome$tabs$Tab[]) => void
): void;

/**
 * Detects the primary language of the content in a tab.
 * @param callback Parameter language: An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
 */
declare export function chrome$tabs$detectLanguage(
  callback: (language: string) => void
): void;

/**
 * Detects the primary language of the content in a tab.
 * @param tabId Optional. Defaults to the active tab of the current window.
 * @param callback Parameter language: An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
 */
declare export function chrome$tabs$detectLanguage(
  tabId: number,
  callback: (language: string) => void
): void;

/**
 * Zooms a specified tab.
 * @since Chrome 42.
 * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
 * @param callback Optional. Called after the zoom factor has been changed.
 */
declare export function chrome$tabs$setZoom(
  zoomFactor: number,
  callback?: () => void
): void;

/**
 * Zooms a specified tab.
 * @since Chrome 42.
 * @param tabId Optional. The ID of the tab to zoom; defaults to the active tab of the current window.
 * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
 * @param callback Optional. Called after the zoom factor has been changed.
 */
declare export function chrome$tabs$setZoom(
  tabId: number,
  zoomFactor: number,
  callback?: () => void
): void;

/**
 * Gets the current zoom factor of a specified tab.
 * @since Chrome 42.
 * @param callback Called with the tab's current zoom factor after it has been fetched.
 * Parameter zoomFactor: The tab's current zoom factor.
 */
declare export function chrome$tabs$getZoom(
  callback: (zoomFactor: number) => void
): void;

/**
 * Gets the current zoom factor of a specified tab.
 * @since Chrome 42.
 * @param tabId Optional. The ID of the tab to get the current zoom factor from; defaults to the active tab of the current window.
 * @param callback Called with the tab's current zoom factor after it has been fetched.
 * Parameter zoomFactor: The tab's current zoom factor.
 */
declare export function chrome$tabs$getZoom(
  tabId: number,
  callback: (zoomFactor: number) => void
): void;

/**
 * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
 * @since Chrome 42.
 * @param zoomSettings Defines how zoom changes are handled and at what scope.
 * @param callback Optional. Called after the zoom settings have been changed.
 */
declare export function chrome$tabs$setZoomSettings(
  zoomSettings: chrome$tabs$ZoomSettings,
  callback?: () => void
): void;

/**
 * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
 * @since Chrome 42.
 * @param tabId Optional. The ID of the tab to change the zoom settings for; defaults to the active tab of the current window.
 * @param zoomSettings Defines how zoom changes are handled and at what scope.
 * @param callback Optional. Called after the zoom settings have been changed.
 */
declare export function chrome$tabs$setZoomSettings(
  tabId: number,
  zoomSettings: chrome$tabs$ZoomSettings,
  callback?: () => void
): void;

/**
 * Gets the current zoom settings of a specified tab.
 * @since Chrome 42.
 * @param callback Called with the tab's current zoom settings.
 * Paramater zoomSettings: The tab's current zoom settings.
 */
declare export function chrome$tabs$getZoomSettings(
  callback: (zoomSettings: chrome$tabs$ZoomSettings) => void
): void;

/**
 * Gets the current zoom settings of a specified tab.
 * @since Chrome 42.
 * @param tabId Optional. The ID of the tab to get the current zoom settings from; defaults to the active tab of the current window.
 * @param callback Called with the tab's current zoom settings.
 * Paramater zoomSettings: The tab's current zoom settings.
 */
declare export function chrome$tabs$getZoomSettings(
  tabId: number,
  callback: (zoomSettings: chrome$tabs$ZoomSettings) => void
): void;

/**
 * Discards a tab from memory. Discarded tabs are still visible on the tab strip and are reloaded when activated.
 * @since Chrome 54.
 * @param tabId Optional. The ID of the tab to be discarded. If specified, the tab will be discarded unless it's active or already discarded. If omitted, the browser will discard the least important tab. This can fail if no discardable tabs exist.
 * @param callback Called after the operation is completed.
 */
declare export function chrome$tabs$discard(
  tabId?: number,
  callback?: (tab: chrome$tabs$Tab) => void
): void;

/**
 * Fired when the highlighted or selected tabs in a window changes.
 * @since Chrome 18.
 */
declare export var chrome$tabs$onHighlighted: chrome$tabs$TabHighlightedEvent;

/**
 * Fired when a tab is closed.
 */
declare export var chrome$tabs$onRemoved: chrome$tabs$TabRemovedEvent;

/**
 * Fired when a tab is updated.
 */
declare export var chrome$tabs$onUpdated: chrome$tabs$TabUpdatedEvent;

/**
 * Fired when a tab is attached to a window, for example because it was moved between windows.
 */
declare export var chrome$tabs$onAttached: chrome$tabs$TabAttachedEvent;

/**
 * Fired when a tab is moved within a window. Only one move event is fired, representing the tab the user directly moved. Move events are not fired for the other tabs that must move in response. This event is not fired when a tab is moved between windows. For that, see tabs.onDetached.
 */
declare export var chrome$tabs$onMoved: chrome$tabs$TabMovedEvent;

/**
 * Fired when a tab is detached from a window, for example because it is being moved between windows.
 */
declare export var chrome$tabs$onDetached: chrome$tabs$TabDetachedEvent;

/**
 * Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set.
 */
declare export var chrome$tabs$onCreated: chrome$tabs$TabCreatedEvent;

/**
 * Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set.
 * @since Chrome 18.
 */
declare export var chrome$tabs$onActivated: chrome$tabs$TabActivatedEvent;

/**
 * Fired when a tab is replaced with another tab due to prerendering or instant.
 * @since Chrome 26.
 */
declare export var chrome$tabs$onReplaced: chrome$tabs$TabReplacedEvent;

/**
 * @deprecated since Chrome 33. Please use tabs.onActivated.
 * Fires when the selected tab in a window changes.
 */
declare export var chrome$tabs$onSelectionChanged: chrome$tabs$TabSelectedEvent;

/**
 * @deprecated since Chrome 33. Please use tabs.onActivated.
 * Fires when the selected tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to tabs.onUpdated events to be notified when a URL is set.
 */
declare export var chrome$tabs$onActiveChanged: chrome$tabs$TabSelectedEvent;

/**
 * @deprecated since Chrome 33. Please use tabs.onHighlighted.
 * Fired when the highlighted or selected tabs in a window changes.
 */
declare export var chrome$tabs$onHighlightChanged: chrome$tabs$TabHighlightedEvent;

/**
 * Fired when a tab is zoomed.
 * @since Chrome 38.
 */
declare export var chrome$tabs$onZoomChange: chrome$tabs$TabZoomChangeEvent;

/**
 * An ID which represents the absence of a browser tab.
 * @since Chrome 46.
 */
declare export var chrome$tabs$TAB_ID_NONE: -1;

declare var npm$namespace$chrome$topSites: {
  get: typeof chrome$topSites$get
};

/**
 * An object encapsulating a most visited URL, such as the URLs on the new tab page.
 */
export interface chrome$topSites$MostVisitedURL {
  /**
   * The most visited URL.
   */
  url: string;

  /**
   * The title of the page
   */
  title: string;
}

/**
 * Gets a list of top sites.
 */
declare export function chrome$topSites$get(
  callback: (data: chrome$topSites$MostVisitedURL[]) => void
): void;

declare var npm$namespace$chrome$tts: {
  isSpeaking: typeof chrome$tts$isSpeaking,
  stop: typeof chrome$tts$stop,
  getVoices: typeof chrome$tts$getVoices,
  speak: typeof chrome$tts$speak,
  pause: typeof chrome$tts$pause,
  resume: typeof chrome$tts$resume
};

/**
 * An event from the TTS engine to communicate the status of an utterance.
 */
export interface chrome$tts$TtsEvent {
  /**
   * Optional. The index of the current character in the utterance.
   */
  charIndex?: number;

  /**
   * Optional. The error description, if the event type is 'error'.
   */
  errorMessage?: string;

  /**
   * The type can be 'start' as soon as speech has started, 'word' when a word boundary is reached, 'sentence' when a sentence boundary is reached, 'marker' when an SSML mark element is reached, 'end' when the end of the utterance is reached, 'interrupted' when the utterance is stopped or interrupted before reaching the end, 'cancelled' when it's removed from the queue before ever being synthesized, or 'error' when any other error occurs. When pausing speech, a 'pause' event is fired if a particular utterance is paused in the middle, and 'resume' if an utterance resumes speech. Note that pause and resume events may not fire if speech is paused in-between utterances.
   * One of: "start", "end", "word", "sentence", "marker", "interrupted", "cancelled", "error", "pause", or "resume"
   */
  type: string;
}

/**
 * A description of a voice available for speech synthesis.
 */
export interface chrome$tts$TtsVoice {
  /**
   * Optional. The language that this voice supports, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'.
   */
  lang?: string;

  /**
   * Optional. This voice's gender.
   * One of: "male", or "female"
   */
  gender?: string;

  /**
   * Optional. The name of the voice.
   */
  voiceName?: string;

  /**
   * The ID of the extension providing this voice.
   */
  extensionsId?: string;

  /**
   * All of the callback event types that this voice is capable of sending.
   */
  eventTypes?: string[];

  /**
   * If true, the synthesis engine is a remote network resource. It may be higher latency and may incur bandwidth costs.
   * @since Chrome 33.
   */
  remote?: boolean;
}

export interface chrome$tts$SpeakOptions {
  /**
   * Optional. Speaking volume between 0 and 1 inclusive, with 0 being lowest and 1 being highest, with a default of 1.0.
   */
  volume?: number;

  /**
   * Optional.
   * If true, enqueues this utterance if TTS is already in progress. If false (the default), interrupts any current speech and flushes the speech queue before speaking this new utterance.
   */
  enqueue?: boolean;

  /**
   * Optional.
   * Speaking rate relative to the default rate for this voice. 1.0 is the default rate, normally around 180 to 220 words per minute. 2.0 is twice as fast, and 0.5 is half as fast. Values below 0.1 or above 10.0 are strictly disallowed, but many voices will constrain the minimum and maximum rates further—for example a particular voice may not actually speak faster than 3 times normal even if you specify a value larger than 3.0.
   */
  rate?: number;

  /**
   * Optional. This function is called with events that occur in the process of speaking the utterance.
   * @param event The update event from the text-to-speech engine indicating the status of this utterance.
   */
  onEvent?: (event: chrome$tts$TtsEvent) => void;

  /**
   * Optional.
   * Speaking pitch between 0 and 2 inclusive, with 0 being lowest and 2 being highest. 1.0 corresponds to a voice's default pitch.
   */
  pitch?: number;

  /**
   * Optional. The language to be used for synthesis, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'.
   */
  lang?: string;

  /**
   * Optional. The name of the voice to use for synthesis. If empty, uses any available voice.
   */
  voiceName?: string;

  /**
   * Optional. The extension ID of the speech engine to use, if known.
   */
  extensionId?: string;

  /**
   * Optional. Gender of voice for synthesized speech.
   * One of: "male", or "female"
   */
  gender?: string;

  /**
   * Optional. The TTS event types the voice must support.
   */
  requiredEventTypes?: string[];

  /**
   * Optional. The TTS event types that you are interested in listening to. If missing, all event types may be sent.
   */
  desiredEventTypes?: string[];
}

/**
 * Checks whether the engine is currently speaking. On Mac OS X, the result is true whenever the system speech engine is speaking, even if the speech wasn't initiated by Chrome.
 */
declare export function chrome$tts$isSpeaking(
  callback?: (speaking: boolean) => void
): void;

/**
 * Stops any current speech and flushes the queue of any pending utterances. In addition, if speech was paused, it will now be un-paused for the next call to speak.
 */
declare export function chrome$tts$stop(): void;

/**
 * Gets an array of all available voices.
 */
declare export function chrome$tts$getVoices(
  callback?: (voices: chrome$tts$TtsVoice[]) => void
): void;

/**
 * Speaks text using a text-to-speech engine.
 * @param utterance The text to speak, either plain text or a complete, well-formed SSML document. Speech engines that do not support SSML will strip away the tags and speak the text. The maximum length of the text is 32,768 characters.
 * @param callback Optional. Called right away, before speech finishes. Check chrome.runtime.lastError to make sure there were no errors. Use options.onEvent to get more detailed feedback.
 */
declare export function chrome$tts$speak(
  utterance: string,
  callback?: Function
): void;

/**
 * Speaks text using a text-to-speech engine.
 * @param utterance The text to speak, either plain text or a complete, well-formed SSML document. Speech engines that do not support SSML will strip away the tags and speak the text. The maximum length of the text is 32,768 characters.
 * @param options Optional. The speech options.
 * @param callback Optional. Called right away, before speech finishes. Check chrome.runtime.lastError to make sure there were no errors. Use options.onEvent to get more detailed feedback.
 */
declare export function chrome$tts$speak(
  utterance: string,
  options: chrome$tts$SpeakOptions,
  callback?: Function
): void;

/**
 * Pauses speech synthesis, potentially in the middle of an utterance. A call to resume or stop will un-pause speech.
 * @since Chrome 29.
 */
declare export function chrome$tts$pause(): void;

/**
 * If speech was paused, resumes speaking where it left off.
 * @since Chrome 29.
 */
declare export function chrome$tts$resume(): void;

declare var npm$namespace$chrome$ttsEngine: {
  onSpeak: typeof chrome$ttsEngine$onSpeak,
  onStop: typeof chrome$ttsEngine$onStop,
  onPause: typeof chrome$ttsEngine$onPause,
  onResume: typeof chrome$ttsEngine$onResume
};
export interface chrome$ttsEngine$SpeakOptions {
  /**
   * Optional. The language to be used for synthesis, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'.
   */
  lang?: string;

  /**
   * Optional. The name of the voice to use for synthesis.
   */
  voiceName?: string;

  /**
   * Optional. Gender of voice for synthesized speech.
   * One of: "male", or "female"
   */
  gender?: string;

  /**
   * Optional. Speaking volume between 0 and 1 inclusive, with 0 being lowest and 1 being highest, with a default of 1.0.
   */
  volume?: number;

  /**
   * Optional.
   * Speaking rate relative to the default rate for this voice. 1.0 is the default rate, normally around 180 to 220 words per minute. 2.0 is twice as fast, and 0.5 is half as fast. This value is guaranteed to be between 0.1 and 10.0, inclusive. When a voice does not support this full range of rates, don't return an error. Instead, clip the rate to the range the voice supports.
   */
  rate?: number;

  /**
   * Optional. Speaking pitch between 0 and 2 inclusive, with 0 being lowest and 2 being highest. 1.0 corresponds to this voice's default pitch.
   */
  pitch?: number;
}

export type chrome$ttsEngine$TtsEngineSpeakEvent = {} & chrome$events$Event<
  (
    utterance: string,
    options: chrome$ttsEngine$SpeakOptions,
    sendTtsEvent: (event: chrome$tts$TtsEvent) => void
  ) => void
>;

/**
 * Called when the user makes a call to tts.speak() and one of the voices from this extension's manifest is the first to match the options object.
 */
declare export var chrome$ttsEngine$onSpeak: chrome$ttsEngine$TtsEngineSpeakEvent;

/**
 * Fired when a call is made to tts.stop and this extension may be in the middle of speaking. If an extension receives a call to onStop and speech is already stopped, it should do nothing (not raise an error). If speech is in the paused state, this should cancel the paused state.
 */
declare export var chrome$ttsEngine$onStop: chrome$events$Event<() => void>;

/**
 * Optional: if an engine supports the pause event, it should pause the current utterance being spoken, if any, until it receives a resume event or stop event. Note that a stop event should also clear the paused state.
 * @since Chrome 29.
 */
declare export var chrome$ttsEngine$onPause: chrome$events$Event<() => void>;

/**
 * Optional: if an engine supports the pause event, it should also support the resume event, to continue speaking the current utterance, if any. Note that a stop event should also clear the paused state.
 * @since Chrome 29.
 */
declare export var chrome$ttsEngine$onResume: chrome$events$Event<() => void>;

export interface chrome$types$ChromeSettingClearDetails {
  /**
   * Optional.
   * The scope of the ChromeSetting. One of
   * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
   * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
   * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
   * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
   */
  scope?: string;
}

export type chrome$types$ChromeSettingSetDetails = {
  /**
   * The value of the setting.
   * Note that every setting has a specific value type, which is described together with the setting. An extension should not set a value of a different type.
   */
  value: any,

  /**
   * Optional.
   * The scope of the ChromeSetting. One of
   * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
   * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
   * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
   * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
   */
  scope?: string
} & chrome$types$ChromeSettingClearDetails;

export interface chrome$types$ChromeSettingGetDetails {
  /**
   * Optional. Whether to return the value that applies to the incognito session (default false).
   */
  incognito?: boolean;
}

/**
 * @param details Details of the currently effective value.
 */
export type chrome$types$DetailsCallback = (
  details: chrome$types$ChromeSettingGetResultDetails
) => void;

export interface chrome$types$ChromeSettingGetResultDetails {
  /**
   * One of
   * • not_controllable: cannot be controlled by any extension
   * • controlled_by_other_extensions: controlled by extensions with higher precedence
   * • controllable_by_this_extension: can be controlled by this extension
   * • controlled_by_this_extension: controlled by this extension
   */
  levelOfControl: string;

  /**
   * The value of the setting.
   */
  value: any;

  /**
   * Optional.
   * Whether the effective value is specific to the incognito session.
   * This property will only be present if the incognito property in the details parameter of get() was true.
   */
  incognitoSpecific?: boolean;
}

export type chrome$types$ChromeSettingChangedEvent = {} & chrome$events$Event<chrome$types$DetailsCallback>;

/**
 * An interface that allows access to a Chrome browser setting. See accessibilityFeatures for an example.
 */
export interface chrome$types$ChromeSetting {
  /**
   * Sets the value of a setting.
   * @param details Which setting to change.
   * @param callback Optional. Called at the completion of the set operation.
   */
  set(details: chrome$types$ChromeSettingSetDetails, callback?: Function): void;

  /**
   * Gets the value of a setting.
   * @param details Which setting to consider.
   */
  get(
    details: chrome$types$ChromeSettingGetDetails,
    callback?: chrome$types$DetailsCallback
  ): void;

  /**
   * Clears the setting, restoring any default value.
   * @param details Which setting to clear.
   * @param callback Optional. Called at the completion of the clear operation.
   */
  clear(
    details: chrome$types$ChromeSettingClearDetails,
    callback?: Function
  ): void;

  /**
   * Fired after the setting changes.
   */
  onChange: chrome$types$ChromeSettingChangedEvent;
}

declare var npm$namespace$chrome$vpnProvider: {
  createConfig: typeof chrome$vpnProvider$createConfig,
  destroyConfig: typeof chrome$vpnProvider$destroyConfig,
  setParameters: typeof chrome$vpnProvider$setParameters,
  sendPacket: typeof chrome$vpnProvider$sendPacket,
  notifyConnectionStateChanged: typeof chrome$vpnProvider$notifyConnectionStateChanged,
  onPlatformMessage: typeof chrome$vpnProvider$onPlatformMessage,
  onPacketReceived: typeof chrome$vpnProvider$onPacketReceived,
  onConfigRemoved: typeof chrome$vpnProvider$onConfigRemoved,
  onConfigCreated: typeof chrome$vpnProvider$onConfigCreated,
  onUIEvent: typeof chrome$vpnProvider$onUIEvent
};
export interface chrome$vpnProvider$VpnSessionParameters {
  /**
   * IP address for the VPN interface in CIDR notation. IPv4 is currently the only supported mode.
   */
  address: string;

  /**
   * Optional. Broadcast address for the VPN interface. (default: deduced from IP address and mask)
   */
  broadcastAddress?: string;

  /**
   * Optional. MTU setting for the VPN interface. (default: 1500 bytes)
   */
  mtu?: string;

  /**
   * Exclude network traffic to the list of IP blocks in CIDR notation from the tunnel. This can be used to bypass traffic to and from the VPN server. When many rules match a destination, the rule with the longest matching prefix wins. Entries that correspond to the same CIDR block are treated as duplicates. Such duplicates in the collated (exclusionList + inclusionList) list are eliminated and the exact duplicate entry that will be eliminated is undefined.
   */
  exclusionList: string[];

  /**
   * Include network traffic to the list of IP blocks in CIDR notation to the tunnel. This parameter can be used to set up a split tunnel. By default no traffic is directed to the tunnel. Adding the entry "0.0.0.0/0" to this list gets all the user traffic redirected to the tunnel. When many rules match a destination, the rule with the longest matching prefix wins. Entries that correspond to the same CIDR block are treated as duplicates. Such duplicates in the collated (exclusionList + inclusionList) list are eliminated and the exact duplicate entry that will be eliminated is undefined.
   */
  inclusionList: string[];

  /**
   * Optional. A list of search domains. (default: no search domain)
   */
  domainSearch?: string[];

  /**
   * A list of IPs for the DNS servers.
   */
  dnsServer: string[];
}

export type chrome$vpnProvider$VpnPlatformMessageEvent = {} & chrome$events$Event<
  (id: string, message: string, error: string) => void
>;

export type chrome$vpnProvider$VpnPacketReceptionEvent = {} & chrome$events$Event<
  (data: ArrayBuffer) => void
>;

export type chrome$vpnProvider$VpnConfigRemovalEvent = {} & chrome$events$Event<
  (id: string) => void
>;

export type chrome$vpnProvider$VpnConfigCreationEvent = {} & chrome$events$Event<
  (id: string, name: string, data: Object) => void
>;

export type chrome$vpnProvider$VpnUiEvent = {} & chrome$events$Event<
  (event: string, id?: string) => void
>;

/**
 * Creates a new VPN configuration that persists across multiple login sessions of the user.
 * @param name The name of the VPN configuration.
 * @param callback Called when the configuration is created or if there is an error.
 * Parameter id: A unique ID for the created configuration, empty string on failure.
 */
declare export function chrome$vpnProvider$createConfig(
  name: string,
  callback: (id: string) => void
): void;

/**
 * Destroys a VPN configuration created by the extension.
 * @param id ID of the VPN configuration to destroy.
 * @param callback Optional. Called when the configuration is destroyed or if there is an error.
 */
declare export function chrome$vpnProvider$destroyConfig(
  id: string,
  callback?: Function
): void;

/**
 * Sets the parameters for the VPN session. This should be called immediately after "connected" is received from the platform. This will succeed only when the VPN session is owned by the extension.
 * @param parameters The parameters for the VPN session.
 * @param callback Called when the parameters are set or if there is an error.
 */
declare export function chrome$vpnProvider$setParameters(
  parameters: chrome$vpnProvider$VpnSessionParameters,
  callback: Function
): void;

/**
 * Sends an IP packet through the tunnel created for the VPN session. This will succeed only when the VPN session is owned by the extension.
 * @param data The IP packet to be sent to the platform.
 * @param callback Optional. Called when the packet is sent or if there is an error.
 */
declare export function chrome$vpnProvider$sendPacket(
  data: ArrayBuffer,
  callback?: Function
): void;

/**
 * Notifies the VPN session state to the platform. This will succeed only when the VPN session is owned by the extension.
 * @param state The VPN session state of the VPN client.
 * connected: VPN connection was successful.
 * failure: VPN connection failed.
 * @param callback Optional. Called when the notification is complete or if there is an error.
 */
declare export function chrome$vpnProvider$notifyConnectionStateChanged(
  state: string,
  callback?: Function
): void;

/**
 * Triggered when a message is received from the platform for a VPN configuration owned by the extension.
 */
declare export var chrome$vpnProvider$onPlatformMessage: chrome$vpnProvider$VpnPlatformMessageEvent;

/**
 * Triggered when an IP packet is received via the tunnel for the VPN session owned by the extension.
 */
declare export var chrome$vpnProvider$onPacketReceived: chrome$vpnProvider$VpnPacketReceptionEvent;

/**
 * Triggered when a configuration created by the extension is removed by the platform.
 */
declare export var chrome$vpnProvider$onConfigRemoved: chrome$vpnProvider$VpnConfigRemovalEvent;

/**
 * Triggered when a configuration is created by the platform for the extension.
 */
declare export var chrome$vpnProvider$onConfigCreated: chrome$vpnProvider$VpnConfigCreationEvent;

/**
 * Triggered when there is a UI event for the extension. UI events are signals from the platform that indicate to the app that a UI dialog needs to be shown to the user.
 */
declare export var chrome$vpnProvider$onUIEvent: chrome$vpnProvider$VpnUiEvent;

declare var npm$namespace$chrome$wallpaper: {
  setWallpaper: typeof chrome$wallpaper$setWallpaper
};
export interface chrome$wallpaper$WallpaperDetails {
  /**
   * Optional. The jpeg or png encoded wallpaper image.
   */
  data?: any;

  /**
   * Optional. The URL of the wallpaper to be set.
   */
  url?: string;

  /**
   * The supported wallpaper layouts.
   * One of: "STRETCH", "CENTER", or "CENTER_CROPPED"
   */
  layout: string;

  /**
   * The file name of the saved wallpaper.
   */
  filename: string;

  /**
   * Optional. True if a 128x60 thumbnail should be generated.
   */
  thumbnail?: boolean;
}

/**
 * Sets wallpaper to the image at url or wallpaperData with the specified layout
 * @param callback Optional parameter thumbnail: The jpeg encoded wallpaper thumbnail. It is generated by resizing the wallpaper to 128x60.
 */
declare export function chrome$wallpaper$setWallpaper(
  details: chrome$wallpaper$WallpaperDetails,
  callback: (thumbnail: any) => void
): void;

declare var npm$namespace$chrome$webNavigation: {
  getFrame: typeof chrome$webNavigation$getFrame,
  getAllFrames: typeof chrome$webNavigation$getAllFrames,
  onReferenceFragmentUpdated: typeof chrome$webNavigation$onReferenceFragmentUpdated,
  onCompleted: typeof chrome$webNavigation$onCompleted,
  onHistoryStateUpdated: typeof chrome$webNavigation$onHistoryStateUpdated,
  onCreatedNavigationTarget: typeof chrome$webNavigation$onCreatedNavigationTarget,
  onTabReplaced: typeof chrome$webNavigation$onTabReplaced,
  onBeforeNavigate: typeof chrome$webNavigation$onBeforeNavigate,
  onCommitted: typeof chrome$webNavigation$onCommitted,
  onDOMContentLoaded: typeof chrome$webNavigation$onDOMContentLoaded,
  onErrorOccurred: typeof chrome$webNavigation$onErrorOccurred
};
export interface chrome$webNavigation$GetFrameDetails {
  /**
   * The ID of the process runs the renderer for this tab.
   * @since Chrome 22.
   * @deprecated since Chrome 49. Frames are now uniquely identified by their tab ID and frame ID; the process ID is no longer needed and therefore ignored.
   */
  processId?: number;

  /**
   * The ID of the tab in which the frame is.
   */
  tabId: number;

  /**
   * The ID of the frame in the given tab.
   */
  frameId: number;
}

export interface chrome$webNavigation$GetFrameResultDetails {
  /**
   * The URL currently associated with this frame, if the frame identified by the frameId existed at one point in the given tab. The fact that an URL is associated with a given frameId does not imply that the corresponding frame still exists.
   */
  url: string;

  /**
   * True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired.
   */
  errorOccurred: boolean;

  /**
   * ID of frame that wraps the frame. Set to -1 of no parent frame exists.
   */
  parentFrameId: number;
}

export interface chrome$webNavigation$GetAllFrameDetails {
  /**
   * The ID of the tab.
   */
  tabId: number;
}

export type chrome$webNavigation$GetAllFrameResultDetails = {
  /**
   * The ID of the process runs the renderer for this tab.
   */
  processId: number,

  /**
   * The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a subframe.
   */
  frameId: number
} & chrome$webNavigation$GetFrameResultDetails;

export interface chrome$webNavigation$WebNavigationCallbackDetails {
  /**
   * The ID of the tab in which the navigation is about to occur.
   */
  tabId: number;

  /**
   * The time when the browser was about to start the navigation, in milliseconds since the epoch.
   */
  timeStamp: number;
}

export type chrome$webNavigation$WebNavigationUrlCallbackDetails = {
  url: string
} & chrome$webNavigation$WebNavigationCallbackDetails;

export type chrome$webNavigation$WebNavigationReplacementCallbackDetails = {
  /**
   * The ID of the tab that was replaced.
   */
  replacedTabId: number
} & chrome$webNavigation$WebNavigationCallbackDetails;

export type chrome$webNavigation$WebNavigationFramedCallbackDetails = {
  /**
   * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique for a given tab and process.
   */
  frameId: number,

  /**
   * The ID of the process runs the renderer for this tab.
   * @since Chrome 22.
   */
  processId: number
} & chrome$webNavigation$WebNavigationUrlCallbackDetails;

export type chrome$webNavigation$WebNavigationFramedErrorCallbackDetails = {
  /**
   * The error description.
   */
  error: string
} & chrome$webNavigation$WebNavigationFramedCallbackDetails;

export type chrome$webNavigation$WebNavigationSourceCallbackDetails = {
  /**
   * The ID of the tab in which the navigation is triggered.
   */
  sourceTabId: number,

  /**
   * The ID of the process runs the renderer for the source tab.
   * @since Chrome 22.
   */
  sourceProcessId: number,

  /**
   * The ID of the frame with sourceTabId in which the navigation is triggered. 0 indicates the main frame.
   */
  sourceFrameId: number
} & chrome$webNavigation$WebNavigationUrlCallbackDetails;

export type chrome$webNavigation$WebNavigationParentedCallbackDetails = {
  /**
   * ID of frame that wraps the frame. Set to -1 of no parent frame exists.
   * @since Chrome 24.
   */
  parentFrameId: number
} & chrome$webNavigation$WebNavigationFramedCallbackDetails;

export type chrome$webNavigation$WebNavigationTransitionCallbackDetails = {
  /**
   * Cause of the navigation.
   * One of: "link", "typed", "auto_bookmark", "auto_subframe", "manual_subframe", "generated", "start_page", "form_submit", "reload", "keyword", or "keyword_generated"
   */
  transitionType: string,

  /**
   * A list of transition qualifiers.
   * Each element one of: "client_redirect", "server_redirect", "forward_back", or "from_address_bar"
   */
  transitionQualifiers: string[]
} & chrome$webNavigation$WebNavigationFramedCallbackDetails;

export interface chrome$webNavigation$WebNavigationEventFilter {
  /**
   * Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of UrlFilter are ignored for this event.
   */
  url: chrome$events$UrlFilter[];
}

export type chrome$webNavigation$WebNavigationEvent<
  T: chrome$webNavigation$WebNavigationCallbackDetails
> = {
  addListener(
    callback: (details: T) => void,
    filters?: chrome$webNavigation$WebNavigationEventFilter
  ): void
} & chrome$events$Event<(details: T) => void>;

export type chrome$webNavigation$WebNavigationFramedEvent = {} & chrome$webNavigation$WebNavigationEvent<chrome$webNavigation$WebNavigationFramedCallbackDetails>;

export type chrome$webNavigation$WebNavigationFramedErrorEvent = {} & chrome$webNavigation$WebNavigationEvent<chrome$webNavigation$WebNavigationFramedErrorCallbackDetails>;

export type chrome$webNavigation$WebNavigationSourceEvent = {} & chrome$webNavigation$WebNavigationEvent<chrome$webNavigation$WebNavigationSourceCallbackDetails>;

export type chrome$webNavigation$WebNavigationParentedEvent = {} & chrome$webNavigation$WebNavigationEvent<chrome$webNavigation$WebNavigationParentedCallbackDetails>;

export type chrome$webNavigation$WebNavigationTransitionalEvent = {} & chrome$webNavigation$WebNavigationEvent<chrome$webNavigation$WebNavigationTransitionCallbackDetails>;

export type chrome$webNavigation$WebNavigationReplacementEvent = {} & chrome$webNavigation$WebNavigationEvent<chrome$webNavigation$WebNavigationReplacementCallbackDetails>;

/**
 * Retrieves information about the given frame. A frame refers to an <iframe> or a <frame> of a web page and is identified by a tab ID and a frame ID.
 * @param details Information about the frame to retrieve information about.
 * @param callback Optional parameter details: Information about the requested frame, null if the specified frame ID and/or tab ID are invalid.
 */
declare export function chrome$webNavigation$getFrame(
  details: chrome$webNavigation$GetFrameDetails,
  callback: (details: chrome$webNavigation$GetFrameResultDetails | null) => void
): void;

/**
 * Retrieves information about all frames of a given tab.
 * @param details Information about the tab to retrieve all frames from.
 * @param callback Optional parameter details: A list of frames in the given tab, null if the specified tab ID is invalid.
 */
declare export function chrome$webNavigation$getAllFrames(
  details: chrome$webNavigation$GetAllFrameDetails,
  callback: (
    details: chrome$webNavigation$GetAllFrameResultDetails[] | null
  ) => void
): void;

/**
 * Fired when the reference fragment of a frame was updated. All future events for that frame will use the updated URL.
 */
declare export var chrome$webNavigation$onReferenceFragmentUpdated: chrome$webNavigation$WebNavigationTransitionalEvent;

/**
 * Fired when a document, including the resources it refers to, is completely loaded and initialized.
 */
declare export var chrome$webNavigation$onCompleted: chrome$webNavigation$WebNavigationFramedEvent;

/**
 * Fired when the frame's history was updated to a new URL. All future events for that frame will use the updated URL.
 * @since Chrome 22.
 */
declare export var chrome$webNavigation$onHistoryStateUpdated: chrome$webNavigation$WebNavigationTransitionalEvent;

/**
 * Fired when a new window, or a new tab in an existing window, is created to host a navigation.
 */
declare export var chrome$webNavigation$onCreatedNavigationTarget: chrome$webNavigation$WebNavigationSourceEvent;

/**
 * Fired when the contents of the tab is replaced by a different (usually previously pre-rendered) tab.
 * @since Chrome 22.
 */
declare export var chrome$webNavigation$onTabReplaced: chrome$webNavigation$WebNavigationReplacementEvent;

/**
 * Fired when a navigation is about to occur.
 */
declare export var chrome$webNavigation$onBeforeNavigate: chrome$webNavigation$WebNavigationParentedEvent;

/**
 * Fired when a navigation is committed. The document (and the resources it refers to, such as images and subframes) might still be downloading, but at least part of the document has been received from the server and the browser has decided to switch to the new document.
 */
declare export var chrome$webNavigation$onCommitted: chrome$webNavigation$WebNavigationTransitionalEvent;

/**
 * Fired when the page's DOM is fully constructed, but the referenced resources may not finish loading.
 */
declare export var chrome$webNavigation$onDOMContentLoaded: chrome$webNavigation$WebNavigationFramedEvent;

/**
 * Fired when an error occurs and the navigation is aborted. This can happen if either a network error occurred, or the user aborted the navigation.
 */
declare export var chrome$webNavigation$onErrorOccurred: chrome$webNavigation$WebNavigationFramedErrorEvent;

declare var npm$namespace$chrome$webRequest: {
  handlerBehaviorChanged: typeof chrome$webRequest$handlerBehaviorChanged,
  MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: typeof chrome$webRequest$MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES,
  onBeforeRequest: typeof chrome$webRequest$onBeforeRequest,
  onBeforeSendHeaders: typeof chrome$webRequest$onBeforeSendHeaders,
  onSendHeaders: typeof chrome$webRequest$onSendHeaders,
  onHeadersReceived: typeof chrome$webRequest$onHeadersReceived,
  onAuthRequired: typeof chrome$webRequest$onAuthRequired,
  onResponseStarted: typeof chrome$webRequest$onResponseStarted,
  onBeforeRedirect: typeof chrome$webRequest$onBeforeRedirect,
  onCompleted: typeof chrome$webRequest$onCompleted,
  onErrorOccurred: typeof chrome$webRequest$onErrorOccurred
};

/**
 * How the requested resource will be used.
 */
export type chrome$webRequest$ResourceType =
  | "main_frame"
  | "sub_frame"
  | "stylesheet"
  | "script"
  | "image"
  | "font"
  | "object"
  | "xmlhttprequest"
  | "ping"
  | "csp_report"
  | "media"
  | "websocket"
  | "other";

export interface chrome$webRequest$AuthCredentials {
  username: string;
  password: string;
}

/**
 * An HTTP Header, represented as an object containing a key and either a value or a binaryValue.
 */
export interface chrome$webRequest$HttpHeader {
  name: string;
  value?: string;
  binaryValue?: ArrayBuffer;
}

/**
 * Returns value for event handlers that have the 'blocking' extraInfoSpec applied. Allows the event handler to modify network requests.
 */
export interface chrome$webRequest$BlockingResponse {
  /**
   * Optional. If true, the request is cancelled. Used in onBeforeRequest, this prevents the request from being sent.
   */
  cancel?: boolean;

  /**
   * Optional.
   * Only used as a response to the onBeforeRequest and onHeadersReceived events. If set, the original request is prevented from being sent/completed and is instead redirected to the given URL. Redirections to non-HTTP schemes such as data: are allowed. Redirects initiated by a redirect action use the original request method for the redirect, with one exception: If the redirect is initiated at the onHeadersReceived stage, then the redirect will be issued using the GET method.
   */
  redirectUrl?: string;

  /**
   * Optional.
   * Only used as a response to the onHeadersReceived event. If set, the server is assumed to have responded with these response headers instead. Only return responseHeaders if you really want to modify the headers in order to limit the number of conflicts (only one extension may modify responseHeaders for each request).
   */
  responseHeaders?: chrome$webRequest$HttpHeader[];

  /**
   * Optional. Only used as a response to the onAuthRequired event. If set, the request is made using the supplied credentials.
   */
  authCredentials?: chrome$webRequest$AuthCredentials;

  /**
   * Optional.
   * Only used as a response to the onBeforeSendHeaders event. If set, the request is made with these request headers instead.
   */
  requestHeaders?: chrome$webRequest$HttpHeader[];
}

/**
 * An object describing filters to apply to webRequest events.
 */
export interface chrome$webRequest$RequestFilter {
  /**
   * Optional.
   */
  tabId?: number;

  /**
   * A list of request types. Requests that cannot match any of the types will be filtered out.
   */
  types?: chrome$webRequest$ResourceType[];

  /**
   * A list of URLs or URL patterns. Requests that cannot match any of the URLs will be filtered out.
   */
  urls: string[];

  /**
   * Optional.
   */
  windowId?: number;
}

/**
 * Contains data uploaded in a URL request.
 * @since Chrome 23.
 */
export interface chrome$webRequest$UploadData {
  /**
   * Optional. An ArrayBuffer with a copy of the data.
   */
  bytes?: ArrayBuffer;

  /**
   * Optional. A string with the file's path and name.
   */
  file?: string;
}

export interface chrome$webRequest$WebRequestBody {
  /**
   * Optional. Errors when obtaining request body data.
   */
  error?: string;

  /**
   * Optional.
   * If the request method is POST and the body is a sequence of key-value pairs encoded in UTF8, encoded as either multipart/form-data, or application/x-www-form-urlencoded, this dictionary is present and for each key contains the list of all values for that key. If the data is of another media type, or if it is malformed, the dictionary is not present. An example value of this dictionary is {'key': ['value1', 'value2']}.
   */
  formData?: {
    [key: string]: string[]
  };

  /**
   * Optional.
   * If the request method is PUT or POST, and the body is not already parsed in formData, then the unparsed request body elements are contained in this array.
   */
  raw?: chrome$webRequest$UploadData[];
}

export interface chrome$webRequest$WebAuthChallenger {
  host: string;
  port: number;
}

export interface chrome$webRequest$ResourceRequest {
  url: string;

  /**
   * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
   */
  requestId: string;

  /**
   * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (type is main_frame or sub_frame), frameId indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
   */
  frameId: number;

  /**
   * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
   */
  parentFrameId: number;

  /**
   * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
   */
  tabId: number;

  /**
   * How the requested resource will be used.
   */
  type: chrome$webRequest$ResourceType;

  /**
   * The time when this signal is triggered, in milliseconds since the epoch.
   */
  timeStamp: number;

  /**
   * The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used.
   * @since Since Chrome 63.
   */
  initiator?: string;
}

export type chrome$webRequest$WebRequestDetails = {
  /**
   * Standard HTTP method.
   */
  method: string
} & chrome$webRequest$ResourceRequest;

export type chrome$webRequest$WebRequestHeadersDetails = {
  /**
   * Optional. The HTTP request headers that are going to be sent out with this request.
   */
  requestHeaders?: chrome$webRequest$HttpHeader[]
} & chrome$webRequest$WebRequestDetails;

export type chrome$webRequest$WebRequestBodyDetails = {
  /**
   * Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'.
   * @since Chrome 23.
   */
  requestBody: chrome$webRequest$WebRequestBody
} & chrome$webRequest$WebRequestDetails;

export type chrome$webRequest$WebRequestFullDetails = {} & chrome$webRequest$WebRequestHeadersDetails &
  chrome$webRequest$WebRequestBodyDetails;

export type chrome$webRequest$WebResponseDetails = {
  /**
   * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line).
   */
  statusLine: string,

  /**
   * Standard HTTP status code returned by the server.
   * @since Chrome 43.
   */
  statusCode: number
} & chrome$webRequest$ResourceRequest;

export type chrome$webRequest$WebResponseHeadersDetails = {
  /**
   * Optional. The HTTP response headers that have been received with this response.
   */
  responseHeaders?: chrome$webRequest$HttpHeader[],
  method: string
} & chrome$webRequest$WebResponseDetails;

export type chrome$webRequest$WebResponseCacheDetails = {
  /**
   * Optional.
   * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
   */
  ip?: string,

  /**
   * Indicates if this response was fetched from disk cache.
   */
  fromCache: boolean
} & chrome$webRequest$WebResponseHeadersDetails;

export type chrome$webRequest$WebRedirectionResponseDetails = {
  /**
   * The new URL.
   */
  redirectUrl: string
} & chrome$webRequest$WebResponseCacheDetails;

export type chrome$webRequest$WebAuthenticationChallengeDetails = {
  /**
   * The authentication scheme, e.g. Basic or Digest.
   */
  scheme: string,

  /**
   * The authentication realm provided by the server, if there is one.
   */
  realm?: string,

  /**
   * The server requesting authentication.
   */
  challenger: chrome$webRequest$WebAuthChallenger,

  /**
   * True for Proxy-Authenticate, false for WWW-Authenticate.
   */
  isProxy: boolean
} & chrome$webRequest$WebResponseHeadersDetails;

export type chrome$webRequest$WebResponseErrorDetails = {
  /**
   * The error description. This string is not guaranteed to remain backwards compatible between releases. You must not parse and act based upon its content.
   */
  error: string
} & chrome$webRequest$WebResponseCacheDetails;

export type chrome$webRequest$WebRequestBodyEvent = {
  addListener(
    callback: (details: chrome$webRequest$WebRequestBodyDetails) => void,
    filter?: chrome$webRequest$RequestFilter,
    opt_extraInfoSpec?: string[]
  ): void
} & chrome$events$Event<
  (details: chrome$webRequest$WebRequestBodyDetails) => void
>;

export type chrome$webRequest$WebRequestHeadersEvent = {
  addListener(
    callback: (details: chrome$webRequest$WebRequestHeadersDetails) => void,
    filter?: chrome$webRequest$RequestFilter,
    opt_extraInfoSpec?: string[]
  ): void
} & chrome$events$Event<
  (details: chrome$webRequest$WebRequestHeadersDetails) => void
>;

export type chrome$webRequest$_WebResponseHeadersEvent<
  T: chrome$webRequest$WebResponseHeadersDetails
> = {
  addListener(
    callback: (details: T) => void,
    filter?: chrome$webRequest$RequestFilter,
    opt_extraInfoSpec?: string[]
  ): void
} & chrome$events$Event<(details: T) => void>;

export type chrome$webRequest$WebResponseHeadersEvent = {} & chrome$webRequest$_WebResponseHeadersEvent<chrome$webRequest$WebResponseHeadersDetails>;

export type chrome$webRequest$WebResponseCacheEvent = {} & chrome$webRequest$_WebResponseHeadersEvent<chrome$webRequest$WebResponseCacheDetails>;

export type chrome$webRequest$WebRedirectionResponseEvent = {} & chrome$webRequest$_WebResponseHeadersEvent<chrome$webRequest$WebRedirectionResponseDetails>;

export type chrome$webRequest$WebAuthenticationChallengeEvent = {
  addListener(
    callback: (
      details: chrome$webRequest$WebAuthenticationChallengeDetails,
      callback?: (response: chrome$webRequest$BlockingResponse) => void
    ) => void,
    filter?: chrome$webRequest$RequestFilter,
    opt_extraInfoSpec?: string[]
  ): void
} & chrome$events$Event<
  (
    details: chrome$webRequest$WebAuthenticationChallengeDetails,
    callback?: (response: chrome$webRequest$BlockingResponse) => void
  ) => void
>;

export type chrome$webRequest$WebResponseErrorEvent = {} & chrome$webRequest$_WebResponseHeadersEvent<chrome$webRequest$WebResponseErrorDetails>;

/**
 * The maximum number of times that handlerBehaviorChanged can be called per 10 minute sustained interval. handlerBehaviorChanged is an expensive function call that shouldn't be called often.
 * @since Chrome 23.
 */
declare export var chrome$webRequest$MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

/**
 * Needs to be called when the behavior of the webRequest handlers has changed to prevent incorrect handling due to caching. This function call is expensive. Don't call it often.
 */
declare export function chrome$webRequest$handlerBehaviorChanged(
  callback?: Function
): void;

/**
 * Fired when a request is about to occur.
 */
declare export var chrome$webRequest$onBeforeRequest: chrome$webRequest$WebRequestBodyEvent;

/**
 * Fired before sending an HTTP request, once the request headers are available. This may occur after a TCP connection is made to the server, but before any HTTP data is sent.
 */
declare export var chrome$webRequest$onBeforeSendHeaders: chrome$webRequest$WebRequestHeadersEvent;

/**
 * Fired just before a request is going to be sent to the server (modifications of previous onBeforeSendHeaders callbacks are visible by the time onSendHeaders is fired).
 */
declare export var chrome$webRequest$onSendHeaders: chrome$webRequest$WebRequestHeadersEvent;

/**
 * Fired when HTTP response headers of a request have been received.
 */
declare export var chrome$webRequest$onHeadersReceived: chrome$webRequest$WebResponseHeadersEvent;

/**
 * Fired when an authentication failure is received. The listener has three options: it can provide authentication credentials, it can cancel the request and display the error page, or it can take no action on the challenge. If bad user credentials are provided, this may be called multiple times for the same request.
 */
declare export var chrome$webRequest$onAuthRequired: chrome$webRequest$WebAuthenticationChallengeEvent;

/**
 * Fired when the first byte of the response body is received. For HTTP requests, this means that the status line and response headers are available.
 */
declare export var chrome$webRequest$onResponseStarted: chrome$webRequest$WebResponseCacheEvent;

/**
 * Fired when a server-initiated redirect is about to occur.
 */
declare export var chrome$webRequest$onBeforeRedirect: chrome$webRequest$WebRedirectionResponseEvent;

/**
 * Fired when a request is completed.
 */
declare export var chrome$webRequest$onCompleted: chrome$webRequest$WebResponseCacheEvent;

/**
 * Fired when an error occurs.
 */
declare export var chrome$webRequest$onErrorOccurred: chrome$webRequest$WebResponseErrorEvent;

declare var npm$namespace$chrome$webstore: {
  install: typeof chrome$webstore$install,
  onInstallStageChanged: typeof chrome$webstore$onInstallStageChanged,
  onDownloadProgress: typeof chrome$webstore$onDownloadProgress
};

/**
 * @param url Optional. If you have more than one <link> tag on your page with the chrome-webstore-item relation, you can choose which item you'd like to install by passing in its URL here. If it is omitted, then the first (or only) link will be used. An exception will be thrown if the passed in URL does not exist on the page.
 * @param successCallback Optional. This function is invoked when inline installation successfully completes (after the dialog is shown and the user agrees to add the item to Chrome). You may wish to use this to hide the user interface element that prompted the user to install the app or extension.
 * @param failureCallback Optional. This function is invoked when inline installation does not successfully complete. Possible reasons for this include the user canceling the dialog, the linked item not being found in the store, or the install being initiated from a non-verified site.
 * Parameter error: The failure detail. You may wish to inspect or log this for debugging purposes, but you should not rely on specific strings being passed back.
 * Optional parameter errorCode: The error code from the stable set of possible errors.
 * * Enum of the possible install results, including error codes sent back in the event that an inline installation has failed.
 * * * "otherError": An uncommon, unrecognized, or unexpected error. In some cases, the readable error string can provide more information.
 * * * "aborted": The operation was aborted as the requestor is no longer alive.
 * * * "installInProgress": An installation of the same extension is in progress.
 * * * "notPermitted": The installation is not permitted.
 * * * "invalidId": Invalid Chrome Web Store item ID.
 * * * "webstoreRequestError": Failed to retrieve extension metadata from the Web Store.
 * * * "invalidWebstoreResponse": The extension metadata retrieved from the Web Store was invalid.
 * * * "invalidManifest": An error occurred while parsing the extension manifest retrieved from the Web Store.
 * * * "iconError": Failed to retrieve the extension's icon from the Web Store, or the icon was invalid.
 * * * "userCanceled": The user canceled the operation.
 * * * "blacklisted": The extension is blacklisted.
 * * * "missingDependencies": Unsatisfied dependencies, such as shared modules.
 * * * "requirementViolations": Unsatisfied requirements, such as webgl.
 * * * "blockedByPolicy": The extension is blocked by management policies.
 * * * "launchFeatureDisabled": The launch feature is not available.
 * * * "launchUnsupportedExtensionType": The launch feature is not supported for the extension type.
 * * * "launchInProgress": A launch of the same extension is in progress.
 */
declare export function chrome$webstore$install(
  url: string,
  successCallback?: Function,
  failureCallback?: (error: string, errorCode?: string) => void
): void;

/**
 * @param successCallback Optional. This function is invoked when inline installation successfully completes (after the dialog is shown and the user agrees to add the item to Chrome). You may wish to use this to hide the user interface element that prompted the user to install the app or extension.
 * @param failureCallback Optional. This function is invoked when inline installation does not successfully complete. Possible reasons for this include the user canceling the dialog, the linked item not being found in the store, or the install being initiated from a non-verified site.
 * Parameter error: The failure detail. You may wish to inspect or log this for debugging purposes, but you should not rely on specific strings being passed back.
 * Optional parameter errorCode: The error code from the stable set of possible errors.
 * * Enum of the possible install results, including error codes sent back in the event that an inline installation has failed.
 * * * "otherError": An uncommon, unrecognized, or unexpected error. In some cases, the readable error string can provide more information.
 * * * "aborted": The operation was aborted as the requestor is no longer alive.
 * * * "installInProgress": An installation of the same extension is in progress.
 * * * "notPermitted": The installation is not permitted.
 * * * "invalidId": Invalid Chrome Web Store item ID.
 * * * "webstoreRequestError": Failed to retrieve extension metadata from the Web Store.
 * * * "invalidWebstoreResponse": The extension metadata retrieved from the Web Store was invalid.
 * * * "invalidManifest": An error occurred while parsing the extension manifest retrieved from the Web Store.
 * * * "iconError": Failed to retrieve the extension's icon from the Web Store, or the icon was invalid.
 * * * "userCanceled": The user canceled the operation.
 * * * "blacklisted": The extension is blacklisted.
 * * * "missingDependencies": Unsatisfied dependencies, such as shared modules.
 * * * "requirementViolations": Unsatisfied requirements, such as webgl.
 * * * "blockedByPolicy": The extension is blocked by management policies.
 * * * "launchFeatureDisabled": The launch feature is not available.
 * * * "launchUnsupportedExtensionType": The launch feature is not supported for the extension type.
 * * * "launchInProgress": A launch of the same extension is in progress.
 */
declare export function chrome$webstore$install(
  successCallback: Function,
  failureCallback?: (error: string, errorCode?: string) => void
): void;

/**
 * @param failureCallback Optional. This function is invoked when inline installation does not successfully complete. Possible reasons for this include the user canceling the dialog, the linked item not being found in the store, or the install being initiated from a non-verified site.
 * Parameter error: The failure detail. You may wish to inspect or log this for debugging purposes, but you should not rely on specific strings being passed back.
 * Optional parameter errorCode: The error code from the stable set of possible errors.
 * * Enum of the possible install results, including error codes sent back in the event that an inline installation has failed.
 * * * "otherError": An uncommon, unrecognized, or unexpected error. In some cases, the readable error string can provide more information.
 * * * "aborted": The operation was aborted as the requestor is no longer alive.
 * * * "installInProgress": An installation of the same extension is in progress.
 * * * "notPermitted": The installation is not permitted.
 * * * "invalidId": Invalid Chrome Web Store item ID.
 * * * "webstoreRequestError": Failed to retrieve extension metadata from the Web Store.
 * * * "invalidWebstoreResponse": The extension metadata retrieved from the Web Store was invalid.
 * * * "invalidManifest": An error occurred while parsing the extension manifest retrieved from the Web Store.
 * * * "iconError": Failed to retrieve the extension's icon from the Web Store, or the icon was invalid.
 * * * "userCanceled": The user canceled the operation.
 * * * "blacklisted": The extension is blacklisted.
 * * * "missingDependencies": Unsatisfied dependencies, such as shared modules.
 * * * "requirementViolations": Unsatisfied requirements, such as webgl.
 * * * "blockedByPolicy": The extension is blocked by management policies.
 * * * "launchFeatureDisabled": The launch feature is not available.
 * * * "launchUnsupportedExtensionType": The launch feature is not supported for the extension type.
 * * * "launchInProgress": A launch of the same extension is in progress.
 */
declare export function chrome$webstore$install(
  failureCallback?: (error: string, errorCode?: string) => void
): void;

export type chrome$webstore$InstallationStageEvent = {} & chrome$events$Event<
  (stage: string) => void
>;

export type chrome$webstore$DownloadProgressEvent = {} & chrome$events$Event<
  (percentDownloaded: number) => void
>;

/**
 * Fired when an inline installation enters a new InstallStage. In order to receive notifications about this event, listeners must be registered before the inline installation begins.
 * @since Chrome 35.
 */
declare export var chrome$webstore$onInstallStageChanged: chrome$webstore$InstallationStageEvent;

/**
 * Fired periodically with the download progress of an inline install. In order to receive notifications about this event, listeners must be registered before the inline installation begins.
 * @since Chrome 35.
 */
declare export var chrome$webstore$onDownloadProgress: chrome$webstore$DownloadProgressEvent;

declare var npm$namespace$chrome$windows: {
  get: typeof chrome$windows$get,
  getCurrent: typeof chrome$windows$getCurrent,
  create: typeof chrome$windows$create,
  getAll: typeof chrome$windows$getAll,
  update: typeof chrome$windows$update,
  remove: typeof chrome$windows$remove,
  getLastFocused: typeof chrome$windows$getLastFocused,
  WINDOW_ID_CURRENT: typeof chrome$windows$WINDOW_ID_CURRENT,
  WINDOW_ID_NONE: typeof chrome$windows$WINDOW_ID_NONE,
  onRemoved: typeof chrome$windows$onRemoved,
  onCreated: typeof chrome$windows$onCreated,
  onFocusChanged: typeof chrome$windows$onFocusChanged
};
export interface chrome$windows$Window {
  /**
   * Array of tabs.Tab objects representing the current tabs in the window.
   */
  tabs?: chrome$tabs$Tab[];

  /**
   * Optional. The offset of the window from the top edge of the screen in pixels. Under some circumstances a Window may not be assigned top property, for example when querying closed windows from the sessions API.
   */
  top?: number;

  /**
   * Optional. The height of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned height property, for example when querying closed windows from the sessions API.
   */
  height?: number;

  /**
   * Optional. The width of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned width property, for example when querying closed windows from the sessions API.
   */
  width?: number;

  /**
   * The state of this browser window.
   * One of: "normal", "minimized", "maximized", "fullscreen", or "docked"
   * @since Chrome 17.
   */
  state: string;

  /**
   * Whether the window is currently the focused window.
   */
  focused: boolean;

  /**
   * Whether the window is set to be always on top.
   * @since Chrome 19.
   */
  alwaysOnTop: boolean;

  /**
   * Whether the window is incognito.
   */
  incognito: boolean;

  /**
   * The type of browser window this is.
   * One of: "normal", "popup", "panel", "app", or "devtools"
   */
  type: string;

  /**
   * Optional. The ID of the window. Window IDs are unique within a browser session. Under some circumstances a Window may not be assigned an ID, for example when querying windows using the sessions API, in which case a session ID may be present.
   */
  id: number;

  /**
   * Optional. The offset of the window from the left edge of the screen in pixels. Under some circumstances a Window may not be assigned left property, for example when querying closed windows from the sessions API.
   */
  left?: number;

  /**
   * The session ID used to uniquely identify a Window obtained from the sessions API.
   * @since Chrome 31.
   */
  sessionId?: string;
}

export interface chrome$windows$GetInfo {
  /**
   * Optional.
   * If true, the windows.Window object will have a tabs property that contains a list of the tabs.Tab objects. The Tab objects only contain the url, title and favIconUrl properties if the extension's manifest file includes the "tabs" permission.
   */
  populate?: boolean;

  /**
   * If set, the windows.Window returned will be filtered based on its type. If unset the default filter is set to ['app', 'normal', 'panel', 'popup'], with 'app' and 'panel' window types limited to the extension's own windows.
   * Each one of: "normal", "popup", "panel", "app", or "devtools"
   * @since Chrome 46. Warning: this is the current Beta channel.
   */
  windowTypes?: string[];
}

export interface chrome$windows$CreateData {
  /**
   * Optional. The id of the tab for which you want to adopt to the new window.
   * @since Chrome 10.
   */
  tabId?: number;

  /**
   * Optional.
   * A URL or array of URLs to open as tabs in the window. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.
   */
  url?: string | string[];

  /**
   * Optional.
   * The number of pixels to position the new window from the top edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels.
   */
  top?: number;

  /**
   * Optional.
   * The height in pixels of the new window, including the frame. If not specified defaults to a natural height.
   */
  height?: number;

  /**
   * Optional.
   * The width in pixels of the new window, including the frame. If not specified defaults to a natural width.
   */
  width?: number;

  /**
   * Optional. If true, opens an active window. If false, opens an inactive window.
   * @since Chrome 12.
   */
  focused?: boolean;

  /**
   * Optional. Whether the new window should be an incognito window.
   */
  incognito?: boolean;

  /**
   * Optional. Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup unless the '--enable-panels' flag is set.
   * One of: "normal", "popup", "panel", or "detached_panel"
   */
  type?: string;

  /**
   * Optional.
   * The number of pixels to position the new window from the left edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels.
   */
  left?: number;

  /**
   * Optional. The initial state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top', 'width' or 'height'.
   * One of: "normal", "minimized", "maximized", "fullscreen", or "docked"
   * @since Chrome 44.
   */
  state?: string;
}

export interface chrome$windows$UpdateInfo {
  /**
   * Optional. The offset from the top edge of the screen to move the window to in pixels. This value is ignored for panels.
   */
  top?: number;

  /**
   * Optional. If true, causes the window to be displayed in a manner that draws the user's attention to the window, without changing the focused window. The effect lasts until the user changes focus to the window. This option has no effect if the window already has focus. Set to false to cancel a previous draw attention request.
   * @since Chrome 14.
   */
  drawAttention?: boolean;

  /**
   * Optional. The height to resize the window to in pixels. This value is ignored for panels.
   */
  height?: number;

  /**
   * Optional. The width to resize the window to in pixels. This value is ignored for panels.
   */
  width?: number;

  /**
   * Optional. The new state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top', 'width' or 'height'.
   * One of: "normal", "minimized", "maximized", "fullscreen", or "docked"
   * @since Chrome 17.
   */
  state?: string;

  /**
   * Optional. If true, brings the window to the front. If false, brings the next window in the z-order to the front.
   * @since Chrome 8.
   */
  focused?: boolean;

  /**
   * Optional. The offset from the left edge of the screen to move the window to in pixels. This value is ignored for panels.
   */
  left?: number;
}

export interface chrome$windows$WindowEventFilter {
  /**
   * Conditions that the window's type being created must satisfy. By default it will satisfy ['app', 'normal', 'panel', 'popup'], with 'app' and 'panel' window types limited to the extension's own windows.
   * Each one of: "normal", "popup", "panel", "app", or "devtools"
   */
  windowTypes: string[];
}

export type chrome$windows$WindowIdEvent = {} & chrome$events$Event<
  (windowId: number, filters?: chrome$windows$WindowEventFilter) => void
>;

export type chrome$windows$WindowReferenceEvent = {} & chrome$events$Event<
  (
    window: chrome$windows$Window,
    filters?: chrome$windows$WindowEventFilter
  ) => void
>;

/**
 * The windowId value that represents the current window.
 * @since Chrome 18.
 */
declare export var chrome$windows$WINDOW_ID_CURRENT: number;

/**
 * The windowId value that represents the absence of a chrome browser window.
 * @since Chrome 6.
 */
declare export var chrome$windows$WINDOW_ID_NONE: number;

/**
 * Gets details about a window.
 */
declare export function chrome$windows$get(
  windowId: number,
  callback: (window: chrome$windows$Window) => void
): void;

/**
 * Gets details about a window.
 * @since Chrome 18.
 */
declare export function chrome$windows$get(
  windowId: number,
  getInfo: chrome$windows$GetInfo,
  callback: (window: chrome$windows$Window) => void
): void;

/**
 * Gets the current window.
 */
declare export function chrome$windows$getCurrent(
  callback: (window: chrome$windows$Window) => void
): void;

/**
 * Gets the current window.
 * @since Chrome 18.
 */
declare export function chrome$windows$getCurrent(
  getInfo: chrome$windows$GetInfo,
  callback: (window: chrome$windows$Window) => void
): void;

/**
 * Creates (opens) a new browser with any optional sizing, position or default URL provided.
 * @param callback Optional parameter window: Contains details about the created window.
 */
declare export function chrome$windows$create(
  callback?: (window?: chrome$windows$Window) => void
): void;

/**
 * Creates (opens) a new browser with any optional sizing, position or default URL provided.
 * @param callback Optional parameter window: Contains details about the created window.
 */
declare export function chrome$windows$create(
  createData: chrome$windows$CreateData,
  callback?: (window?: chrome$windows$Window) => void
): void;

/**
 * Gets all windows.
 */
declare export function chrome$windows$getAll(
  callback: (windows: chrome$windows$Window[]) => void
): void;

/**
 * Gets all windows.
 * @since Chrome 18.
 */
declare export function chrome$windows$getAll(
  getInfo: chrome$windows$GetInfo,
  callback: (windows: chrome$windows$Window[]) => void
): void;

/**
 * Updates the properties of a window. Specify only the properties that you want to change; unspecified properties will be left unchanged.
 */
declare export function chrome$windows$update(
  windowId: number,
  updateInfo: chrome$windows$UpdateInfo,
  callback?: (window: chrome$windows$Window) => void
): void;

/**
 * Removes (closes) a window, and all the tabs inside it.
 */
declare export function chrome$windows$remove(
  windowId: number,
  callback?: Function
): void;

/**
 * Gets the window that was most recently focused — typically the window 'on top'.
 */
declare export function chrome$windows$getLastFocused(
  callback: (window: chrome$windows$Window) => void
): void;

/**
 * Gets the window that was most recently focused — typically the window 'on top'.
 * @since Chrome 18.
 */
declare export function chrome$windows$getLastFocused(
  getInfo: chrome$windows$GetInfo,
  callback: (window: chrome$windows$Window) => void
): void;

/**
 * Fired when a window is removed (closed).
 */
declare export var chrome$windows$onRemoved: chrome$windows$WindowIdEvent;

/**
 * Fired when a window is created.
 */
declare export var chrome$windows$onCreated: chrome$windows$WindowReferenceEvent;

/**
 * Fired when the currently focused window changes. Will be chrome.windows.WINDOW_ID_NONE if all chrome windows have lost focus.
 * Note: On some Linux window managers, WINDOW_ID_NONE will always be sent immediately preceding a switch from one chrome window to another.
 */
declare export var chrome$windows$onFocusChanged: chrome$windows$WindowIdEvent;
