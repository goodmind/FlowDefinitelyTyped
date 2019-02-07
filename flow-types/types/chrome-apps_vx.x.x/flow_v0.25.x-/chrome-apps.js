declare module "chrome-apps" {
  declare var npm$namespace$chrome: {
    csi: typeof chrome$csi,
    loadTimes: typeof chrome$loadTimes,
    serial: typeof chrome$serial,
    experimental: typeof chrome$experimental,
    Event: typeof chrome$Event
  };

  /**
   * @deprecated Could be used, if e.g. deprecated recently
   */
  declare type chrome$deprecatedButUsable = any;

  /**
   * @deprecated Should never be used, used to guide migrations.
   */
  declare type chrome$deprecated = empty;

  /**
   * Convert constant and variables that function as enums to string literals.
   * Makes it possible to use both the enum and string.
   * String enums are a combination of 'enum type' and string literal type.
   */
  declare type chrome$IDict<
    T,
    K,
    F = "There was Conditional Type, use $Call utility type"
  > = F;

  declare type chrome$ToStringLiteral<
    C: Object,
    K = $Keys<C>,
    V = "There was Conditional Type, use $Call utility type"
  > = chrome$IDict<C, V>;

  /**
   * Integer
   * -
   * Chrome uses JS number, but internally requires an integer or double.
   * This is a helper type to prevent mixup.
   */
  declare type chrome$integer = number;

  /**
   * Double
   * -
   * Chrome uses JS number, but internally requires an integer or double.
   * This is a helper type to prevent mixup.
   */
  declare type chrome$double = number;

  declare var npm$namespace$accessibilityFeatures: {
    spokenFeedback: typeof accessibilityFeatures$spokenFeedback,
    largeCursor: typeof accessibilityFeatures$largeCursor,
    stickyKeys: typeof accessibilityFeatures$stickyKeys,
    highContrast: typeof accessibilityFeatures$highContrast,
    screenMagnifier: typeof accessibilityFeatures$screenMagnifier,
    autoclick: typeof accessibilityFeatures$autoclick,
    virtualKeyboard: typeof accessibilityFeatures$virtualKeyboard,
    caretHighlight: typeof accessibilityFeatures$caretHighlight,
    cursorHighlight: typeof accessibilityFeatures$cursorHighlight,
    focusHighlight: typeof accessibilityFeatures$focusHighlight,
    selectToSpeak: typeof accessibilityFeatures$selectToSpeak,
    switchAccess: typeof accessibilityFeatures$switchAccess,
    animationPolicy: typeof accessibilityFeatures$animationPolicy
  };
  declare interface accessibilityFeatures$AccessibilityFeaturesGetArg {
    /**
     * Whether to return the value that applies to the incognito session (default false).
     */
    incognito?: boolean;
  }

  declare type accessibilityFeatures$LevelOfControl =
    | "not_controllable"
    | "controlled_by_other_extensions"
    | "controllable_by_this_extension"
    | "controlled_by_this_extension";

  declare interface accessibilityFeatures$AccessibilityFeaturesCallbackArg {
    /**
     * The value of the setting.
     */
    value: any;

    /**
     * One of
     * • not_controllable: cannot be controlled by any extension
     * • controlled_by_other_extensions: controlled by extensions with higher precedence
     * • controllable_by_this_extension: can be controlled by this app
     * • controlled_by_this_extension: controlled by this app
     */
    levelOfControl: accessibilityFeatures$LevelOfControl;

    /**
     * Whether the effective value is specific to the incognito session. This property will only be present if the incognito property in the details parameter of get() was true.
     */
    incognitoSpecific?: boolean;
  }

  declare type accessibilityFeatures$Scope =
    | "regular"
    | "regular_only"
    | "incognito_persistent"
    | "incognito_session_only";

  declare interface accessibilityFeatures$AccessibilityFeaturesSetArg {
    /**
     * The value of the setting.
     * Note that every setting has a specific value type, which is described together with the setting. An extension should not set a value of a different type.
     */
    value: any;

    /**
     * The scope of the ChromeSetting. One of
     * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
     * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
     * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
     * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
     */
    scope?: accessibilityFeatures$Scope;
  }

  declare interface accessibilityFeatures$AccessibilityFeaturesClearArg {
    /**
     * The scope of the ChromeSetting. One of
     * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
     * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
     * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
     * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
     */
    scope?: accessibilityFeatures$Scope;
  }

  declare interface accessibilityFeatures$AccessibilityFeaturesSetting {
    /**
 * Gets the value of a setting.
 * @param details Which setting to consider.
 * @param callback The callback parameter should be a function that looks like this:
function(object details) {...};
 */
    signedInDevices$get(
      details: accessibilityFeatures$AccessibilityFeaturesGetArg,
      callback: (
        details: accessibilityFeatures$AccessibilityFeaturesCallbackArg
      ) => void
    ): void;

    /**
 * Sets the value of a setting.
 * @param details Which setting to change.
 * @param callback Called at the completion of the set operation.
If you specify the callback parameter, it should be a function that looks like this:
function() {...};
 */
    set(
      details: accessibilityFeatures$AccessibilityFeaturesSetArg,
      callback?: () => void
    ): void;

    /**
 * Clears the setting, restoring any default value.
 * @param details Which setting to clear.
 * @param callback Called at the completion of the clear operation.
If you specify the callback parameter, it should be a function that looks like this:
function() {...};
 */
    notifications$clear(
      details: accessibilityFeatures$AccessibilityFeaturesClearArg,
      callback?: () => void
    ): void;
  }

  /**
   * Spoken feedback (text-to-speech). The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   */
  declare var accessibilityFeatures$spokenFeedback: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * Enlarged cursor. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   */
  declare var accessibilityFeatures$largeCursor: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * Sticky modifier keys (like shift or alt). The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   */
  declare var accessibilityFeatures$stickyKeys: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * High contrast rendering mode. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   */
  declare var accessibilityFeatures$highContrast: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * Full screen magnification. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   */
  declare var accessibilityFeatures$screenMagnifier: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * Auto mouse click after mouse stops moving. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   */
  declare var accessibilityFeatures$autoclick: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * Virtual on-screen keyboard. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   */
  declare var accessibilityFeatures$virtualKeyboard: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * Caret highlighting. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   * @since Chrome 51.
   */
  declare var accessibilityFeatures$caretHighlight: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * Cursor highlighting. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   * @since Chrome 51.
   */
  declare var accessibilityFeatures$cursorHighlight: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * Focus highlighting. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   * @since Chrome 51.
   */
  declare var accessibilityFeatures$focusHighlight: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * Select-to-speak. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   * @since Chrome 51.
   */
  declare var accessibilityFeatures$selectToSpeak: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * Switch access. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   * @since Chrome 51.
   */
  declare var accessibilityFeatures$switchAccess: accessibilityFeatures$AccessibilityFeaturesSetting;

  /**
   * get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
   * @since Chrome 42.
   */
  declare var accessibilityFeatures$animationPolicy: accessibilityFeatures$AccessibilityFeaturesSetting;

  declare var npm$namespace$alarms: {
    create: typeof alarms$create,
    getAll: typeof alarms$getAll,
    clearAll: typeof alarms$clearAll,
    clear: typeof alarms$clear,
    get: typeof alarms$get,
    onAlarm: typeof alarms$onAlarm
  };
  declare interface alarms$AlarmCreateInfo {
    /**
     * Length of time in minutes after which the onAlarm event should fire.
     */
    delayInMinutes?: chrome$integer;

    /**
     * If set, the onAlarm event should fire every periodInMinutes minutes after the initial event specified by when or delayInMinutes. If not set, the alarm will only fire once.
     */
    periodInMinutes?: chrome$integer;

    /**
     * Time at which the alarm should fire, in milliseconds past the epoch (e.g. Date.now() + n).
     */
    when?: chrome$integer;
  }

  declare interface alarms$Alarm {
    /**
     * If not null, the alarm is a repeating alarm and will fire again in periodInMinutes minutes.
     */
    periodInMinutes?: chrome$integer;

    /**
     * Time at which this alarm was scheduled to fire, in milliseconds past the epoch (e.g. Date.now() + n). For performance reasons, the alarm may have been delayed an arbitrary amount beyond this.
     */
    scheduledTime: chrome$integer;

    /**
     * Name of this alarm.
     */
    name: string;
  }

  declare type alarms$AlarmEvent = {} & undefined.events$Event<
    (alarm: alarms$Alarm) => void
  >;

  /**
   * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
   * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more.
   * That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning.
   * `when` can be set to less than 1 minute after 'now' without warning but won't actually cause the alarm to fire for at least 1 minute.
   * To help you debug your app, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
   * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
   */
  declare function alarms$create(alarmInfo: alarms$AlarmCreateInfo): void;

  /**
   * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired.
   * If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
   * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more.
   * That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning.
   * `when` can be set to less than 1 minute after 'now' without warning but won't actually cause the alarm to fire for at least 1 minute.
   * To help you debug your app, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
   * @param name Optional name to identify this alarm. Defaults to the empty string.
   * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
   */
  declare function alarms$create(
    name: string,
    alarmInfo: alarms$AlarmCreateInfo
  ): void;

  /**
   * Gets an array of all the alarms.
   * @param callback The callback parameter should be a function that looks like this:
   * @example function(array of Alarm alarms) {...};
   */
  declare function alarms$getAll(
    callback: (alarms: alarms$Alarm[]) => void
  ): void;

  /**
   * Clears all alarms.
   * @param callback If you specify the callback parameter, it should be a function that looks like this:
   * @example function(boolean wasCleared) {...};
   */
  declare function alarms$clearAll(
    callback?: (wasCleared: boolean) => void
  ): void;

  /**
   * Clears the alarm with the given name.
   * @param name The name of the alarm to clear. Defaults to the empty string.
   * @param callback If you specify the callback parameter, it should be a function that looks like this:
   * @example function(boolean wasCleared) {...};
   */
  declare function alarms$clear(
    name?: string,
    callback?: (wasCleared: boolean) => void
  ): void;

  /**
   * Clears the alarm without a name.
   * @param callback If you specify the callback parameter, it should be a function that looks like this:
   * @example function(boolean wasCleared) {...};
   */
  declare function alarms$clear(callback: (wasCleared: boolean) => void): void;

  /**
   * Retrieves details about the specified alarm.
   * @param callback The callback parameter should be a function that looks like this:
   * @example function( Alarm alarm) {...};
   */
  declare function alarms$get(callback: (alarm: alarms$Alarm) => void): void;

  /**
   * Retrieves details about the specified alarm.
   * @param name The name of the alarm to get. Defaults to the empty string.
   * @param callback The callback parameter should be a function that looks like this:
   * @example function( Alarm alarm) {...};
   */
  declare function alarms$get(
    name: string,
    callback: (alarm: alarms$Alarm) => void
  ): void;

  /**
   * Fired when an alarm has elapsed. Useful for event pages.
   */
  declare var alarms$onAlarm: alarms$AlarmEvent;

  declare var npm$namespace$app: {
    _State: typeof app$_State,
    window: typeof app$window
  };

  declare var npm$namespace$runtime: {
    PlayStoreStatus: typeof runtime$PlayStoreStatus,
    ActionType: typeof runtime$ActionType,
    LaunchSource: typeof runtime$LaunchSource,
    onEmbedRequested: typeof runtime$onEmbedRequested,
    onLaunched: typeof runtime$onLaunched,
    onRestarted: typeof runtime$onRestarted
  };

  /**
   * @enum {}
   */
  declare var runtime$PlayStoreStatus: {
    ENABLED: "enabled",
    AVAILABLE: "available",
    UNKNOWN: "unknown"
  };

  /**
   * @enum {}
   */
  declare var runtime$ActionType: {
    NEW_NOTE: "new_note"
  };

  /**
   * @enum {}
   */
  declare var runtime$LaunchSource: {
    ABOUT_PAGE: "about_page",
    APP_LAUNCHER: "app_launcher",
    BACKGROUND: "background",
    CHROME_INTERNAL: "chrome_internal",
    COMMAND_LINE: "command_line",
    CONTEXT_MENU: "context_menu",
    EPHEMERAL_APP: "ephemeral_app",
    EXTENSIONS_PAGE: "extensions_page",
    FILE_HANDLER: "file_handler",
    INSTALLED_NOTIFICATION: "installed_notification",
    KEYBOARD: "keyboard",
    KIOSK: "kiosk",
    LOAD_AND_LAUNCH: "load_and_launch",
    MANAGEMENT_API: "management_api",
    NEW_TAB_PAGE: "new_tab_page",
    RELOAD: "reload",
    RESTART: "restart",
    SYSTEM_TRAY: "system_tray",
    TEST: "test",
    UNTRACKED: "untracked",
    URL_HANDLER: "url_handler"
  };

  declare interface runtime$LaunchData {
    /**
     * The ID of the file or URL handler that the app is being invoked with.
     * Handler IDs are the top-level keys in the file_handlers and/or url_handlers dictionaries in the manifest.
     */
    id?: string;

    /**
     * The file entries for the onLaunched event triggered by a matching file handler in the file_handlers manifest key.
     */
    items?: runtime$LaunchDataItem[];

    /**
     * The URL for the onLaunched event triggered by a matching URL handler in the url_handlers manifest key.
     */
    url?: string;

    /**
     * The referrer URL for the onLaunched event triggered by a matching URL handler in the url_handlers manifest key.
     */
    referrerUrl?: string;

    /**
     * Whether the app is being launched in a Chrome OS kiosk session.
     */
    isKioskSession?: boolean;

    /**
     * Whether the app is being launched in a Chrome OS public session.
     * @since Chrome 47.
     */
    isPublicSession?: boolean;

    /**
     * Where the app is launched from.
     * @see enum LaunchSource
     */
    source?: chrome$ToStringLiteral<typeof LaunchSource>;

    /**
     * Contains data that specifies the ActionType this app was launched with. This is null if the app was not launched with a specific action intent.
     *   ______________________________________________________________________________
     * | type of 'new_note' | actionType | new_note                                   |
     * |                    |            | The user wants to quickly take a new note. |
     * |____________________|____________|____________________________________________|
     * @since Chrome 54.
     */
    actionData?: chrome$ToStringLiteral<typeof ActionType>;
  }

  declare interface runtime$LaunchDataItem {
    /**
     * Entry for the item
     */
    entry: FileEntry;

    /**
     * The MIME type of the file.
     */
    type?: string;
  }

  /**
   * Fired when an embedding app requests to embed this app.
   * @since Chrome 43.
   * @see [Documentation]{@link https://developer.chrome.com/apps/tags/appview}
   */
  declare var runtime$onEmbedRequested: chrome$events.events$Event<
    (permissions$request: AppView$AppView$EmbedRequest) => void
  >;

  /**
   * Fired when an app is launched from the launcher.
   */
  declare var runtime$onLaunched: chrome$events.events$Event<
    (launchData: runtime$LaunchData) => void
  >;

  /**
   * Fired at Chrome startup to apps that were running when Chrome last shut down,
   * or when apps have been requested to restart from their previous state for other reasons
   * (e.g. when the user revokes access to an app's retained files the runtime will restart the app).
   * In these situations if apps do not have an onRestarted handler they will be sent an onLaunched event instead.
   */
  declare var runtime$onRestarted: chrome$events.events$Event<() => void>;

  declare interface app$ContentBounds {
    left?: chrome$integer;
    top?: chrome$integer;
    width?: chrome$integer;
    height?: chrome$integer;
  }

  /**
   * @enum {}
   * @internal
   * @private
   */
  declare var app$_State: {
    NORMAL: "normal",
    FULLSCREEN: "fullscreen",
    MAXIMIZED: "maximized",
    MINIMIZED: "minimized"
  };

  declare interface app$BoundsSpecification {
    /**
     * The X coordinate of the content or window.
     */
    left?: chrome$integer;

    /**
     * The Y coordinate of the content or window.
     */
    top?: chrome$integer;

    /**
     * The width of the content or window.
     */
    width?: chrome$integer;

    /**
     * The height of the content or window.
     */
    height?: chrome$integer;

    /**
     * The minimum width of the content or window.
     */
    minWidth?: chrome$integer;

    /**
     * The minimum height of the content or window.
     */
    minHeight?: chrome$integer;

    /**
     * The maximum width of the content or window.
     */
    maxWidth?: chrome$integer;

    /**
     * The maximum height of the content or window.
     */
    maxHeight?: chrome$integer;
  }

  declare interface app$Bounds {
    /**
     * This property can be used to read or write the current X coordinate of the content or window.
     */
    left: chrome$integer;

    /**
     * This property can be used to read or write the current Y coordinate of the content or window.
     */
    top: chrome$integer;

    /**
     * This property can be used to read or write the current width of the content or window.
     */
    width: chrome$integer;

    /**
     * This property can be used to read or write the current height of the content or window.
     */
    height: chrome$integer;

    /**
     * This property can be used to read or write the current minimum width of the content or window. A value of null indicates 'unspecified'.
     */
    minWidth?: chrome$integer | null;

    /**
     * This property can be used to read or write the current minimum height of the content or window. A value of null indicates 'unspecified'.
     */
    minHeight?: chrome$integer | null;

    /**
     * This property can be used to read or write the current maximum width of the content or window. A value of null indicates 'unspecified'.
     */
    maxWidth?: chrome$integer | null;

    /**
     * This property can be used to read or write the current maximum height of the content or window. A value of null indicates 'unspecified'.
     */
    maxHeight?: chrome$integer | null;

    /**
     * Set the left and top position of the content or window.
     */
    setPosition(left: chrome$integer, top: chrome$integer): void;

    /**
     * Set the width and height of the content or window.
     */
    setSize(width: chrome$integer, height: chrome$integer): void;

    /**
     * Set the minimum size constraints of the content or window.
     * The minimum width or height can be set to null to remove the constraint.
     * A value of undefined will leave a constraint unchanged.
     */
    setMinimumSize(
      minWidth: chrome$integer | null | void,
      minHeight: chrome$integer | null | void
    ): void;

    /**
     * Set the maximum size constraints of the content or window.
     * The maximum width or height can be set to null to remove the constraint.
     * A value of undefined will leave a constraint unchanged.
     */
    setMaximumSize(
      maxWidth: chrome$integer | null | void,
      maxHeight: chrome$integer | null | void
    ): void;

    /**
     * The x-coordinate of the upper-left corner.
     */
    left: chrome$integer;

    /**
     * The y-coordinate of the upper-left corner.
     */
    top: chrome$integer;

    /**
     * The width of the display in pixels.
     */
    width: chrome$integer;

    /**
     * The height of the display in pixels.
     */
    height: chrome$integer;
  }

  declare interface app$FrameOptions {
    /**
     * Frame type: none or chrome (defaults to chrome).
     *
     * For none, the -webkit-app-region CSS property can be used to apply draggability to the app's window.
     * -webkit-app-region: drag can be used to mark regions draggable. no-drag can be used to disable this style on nested elements.
     */
    type: "none";

    /**
     * @requires (dev) Chrome dev only
     * @requires Permissions: 'app.window.alpha'
     * @description Enable alpha on frame 'none'
     */
    alphaEnabled?: boolean;
  }

  declare interface app$FrameOptionsChrome {
    /**
     * Frame type: none or chrome (defaults to chrome).
     *
     * For none, the -webkit-app-region CSS property can be used to apply draggability to the app's window.
     * -webkit-app-region: drag can be used to mark regions draggable. no-drag can be used to disable this style on nested elements.
     */
    type: "chrome";

    /**
     * Allows the frame color to be set. Frame coloring is only available if the frame type is chrome.
     * @since Frame coloring is new in Chrome 36.
     */
    color?: string;

    /**
     * Allows the frame color of the window when active to be set. Frame coloring is only available if the frame type is chrome.
     * Frame coloring is only available if the frame type is chrome.
     * @since Frame coloring is new in Chrome 36.
     */
    activeColor?: string;

    /**
     * Allows the frame color of the window when inactive to be set differently to the active color. Frame coloring is only available if the frame type is chrome.
     * inactiveColor must be used in conjunction with color.
     * @since Frame coloring is new in Chrome 36.
     */
    inactiveColor?: string;
  }

  declare type app$CreateWindowOptions = {
    /**
     * Id to identify the window.
     *
     * This will be used to remember the size and position of the window and restore that geometry when a window with the same id is later opened.
     * If a window with a given id is created while another window with the same id already exists,
     * the currently opened window will be focused instead of creating a new window.
     */
    id?: string,

    /**
     * Used to specify the initial position, initial size and constraints of the window's content (excluding window decorations).
     * If an id is also specified and a window with a matching id has been shown before, the remembered bounds will be used instead.
     * Note that the padding between the inner and outer bounds is determined by the OS.
     * Therefore setting the same bounds property for both the innerBounds and outerBounds will result in an error.
     * @since This property is new in Chrome 36.
     */
    innerBounds?: app$BoundsSpecification,

    /**
     * Used to specify the initial position, initial size and constraints of the window (including window decorations such as the title bar and frame).
     * If an id is also specified and a window with a matching id has been shown before, the remembered bounds will be used instead.
     * Note that the padding between the inner and outer bounds is determined by the OS.
     * Therefore setting the same bounds property for both the innerBounds and outerBounds will result in an error.
     * @since This property is new in Chrome 36.
     */
    outerBounds?: app$BoundsSpecification,

    /**
     * Minimum width of the window.
     * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
     */
    minWidth?: chrome$integer,

    /**
     * Minimum height of the window.
     * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
     */
    minHeight?: chrome$integer,

    /**
     * Maximum width of the window.
     * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
     */
    maxWidth?: chrome$integer,

    /**
     * Maximum height of the window.
     * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
     */
    maxHeight?: chrome$integer,

    /**
     * @deprecated Deprecated since Chrome 69. All app windows use the 'shell' window type.
     * @description Type of window to create
     */
    type?: "shell",

    /**
     * If true, the window will have its own shelf icon.
     * Otherwise the window will be grouped in the shelf with other windows that are associated with the app.
     * If showInShelf is set to true you need to specify an id for the window.
     * @default false
     * @since Chrome 54.
     */
    showInShelf?: boolean,

    /**
     * URL of the window icon.
     * A window can have its own icon when showInShelf is set to true.
     * The URL should be a global or an app's local URL.
     * @since Chrome 54.
     */
    icon?: string,

    /**
     * Frame type: none or chrome (defaults to chrome).
     * For none, the -webkit-app-region CSS property can be used to apply draggability to the app's window.
     * -webkit-app-region: drag can be used to mark regions draggable. no-drag can be used to disable this style on nested elements.
     * @since Use of FrameOptions is new in M36.
     */
    frame?: "none" | "chrome" | app$FrameOptions | app$FrameOptionsChrome,

    /**
     * @requires (dev) Chrome dev only
     * @requires Permissions: 'app.window.alpha'
     * @description Enable alpha on frame 'none'
     */
    alphaEnabled?: boolean,

    /**
     * @requires frame = 'none'
     * @requires Permissions: 'app.window.ime'
     * @description Windows API - ime (No fullscreen window in kiosk mode)
     */
    ime?: boolean,

    /**
     * Size and position of the content in the window (excluding the titlebar).
     * If an id is also specified and a window with a matching id has been shown before,
     * the remembered bounds of the window will be used instead.
     * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
     */
    bounds?: app$ContentBounds,

    /**
     * The initial state of the window, allowing it to be created already fullscreen, maximized, or minimized. Defaults to 'normal'.
     */
    state?: chrome$ToStringLiteral<typeof _State>,

    /**
     * If true, the window will be created in a hidden state. Call show() on the window to show it once it has been created. Defaults to false.
     */
    hidden?: boolean,

    /**
     * If true, the window will be resizable by the user. Defaults to true.
     */
    resizable?: boolean,

    /**
 * @deprecated Deprecated since Chrome 34. Multiple windows with the same id is no longer supported.
By default if you specify an id for the window,
the window will only be created if another window with the same id doesn't already exist.
If a window with the same id already exists that window is activated instead.
If you do want to create multiple windows with the same id, you can set this property to false.
 */
    singleton?: boolean,

    /**
 * @requires Permissions: 'alwaysOnTopWindows' or 'app.window.alwaysOnTop'
 * @description If true, the window will stay above most other windows.
If there are multiple windows of this kind, the currently focused window will be in the foreground.
Call setAlwaysOnTop() on the window to change this property after creation.
 * @default false
 */
    alwaysOnTop?: boolean,

    /**
     * If true, the window will be focused when created. Defaults to true.
     */
    focused?: boolean,

    /**
     * If true, and supported by the platform, the window will be visible on all workspaces.
     * @since Chrome 39.
     */
    visibleOnAllWorkspaces?: boolean
  } & app$ContentBounds;

  declare interface app$AppWindow {
    /**
     * Focus the window.
     */
    focus: () => void;

    /**
 * Fullscreens the window.
 * The user will be able to restore the window by pressing ESC.
 * An application can prevent the fullscreen state to be left when ESC is pressed by requesting the
 * app.window.fullscreen.overrideEsc permission and canceling the event by calling .preventDefault(),
 * in the keydown and keyup handlers, like this:
 * @example window.onkeydown = window.onkeyup = function(e) { if (e.keyCode == 27 <<--``ESC``) { e.preventDefault(); }
Note window.fullscreen() will cause the entire window to become fullscreen and does not require a user gesture.
The HTML5 fullscreen API can also be used to enter fullscreen mode(see Web APIs for more details).
 */
    fullscreen: () => void;

    /**
     * Is the window fullscreen? This will be true if the window has been created fullscreen or was made fullscreen via the AppWindow or HTML5 fullscreen APIs.
     */
    isFullscreen: () => boolean;

    /**
     * Minimize the window.
     */
    minimize: () => void;

    /**
     * Is the window minimized?
     */
    isMinimized: () => boolean;

    /**
     * Maximize the window.
     */
    maximize: () => void;

    /**
     * Is the window maximized?
     */
    isMaximized: () => boolean;

    /**
     * Restore the window, exiting a maximized, minimized, or fullscreen state.
     */
    restore: () => void;

    /**
     * Move the window to the position (|left|, |top|).
     * @deprecated Deprecated since Chrome 43. Use outerBounds.
     */
    moveTo: (left: chrome$integer, top: chrome$integer) => void;

    /**
     * Resize the window to |width|x|height| pixels in size.
     * @deprecated Deprecated since Chrome 43. Use outerBounds.
     */
    resizeTo: (width: chrome$integer, height: chrome$integer) => void;

    /**
     * Draw attention to the window.
     */
    drawAttention: () => void;

    /**
     * Clear attention to the window.
     */
    clearAttention: () => void;

    /**
     * Close the window.
     */
    udp$close: () => void;

    /**
     * Show the window. Does nothing if the window is already visible. Focus the window if |focused| is set to true or omitted.
     */
    show: (focused?: boolean) => void;

    /**
     * Hide the window. Does nothing if the window is already hidden.
     */
    hide: () => void;

    /**
 * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
Get the window's inner bounds as a ContentBounds object.
 */
    getBounds: () => app$ContentBounds;

    /**
     * Set the window's inner bounds.
     * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
     */
    setBounds: (bounds: app$ContentBounds) => void;

    /**
     * Is the window always on top?
     */
    isAlwaysOnTop: () => boolean;

    /**
     * Set whether the window should stay above most other windows. Requires the alwaysOnTopWindows permission.
     */
    setAlwaysOnTop: (alwaysOnTop: boolean) => void;

    /**
     * Set whether the window is visible on all workspaces. (Only for platforms that support this).
     */
    setVisibleOnAllWorkspaces: (alwaysVisible: boolean) => void;

    /**
 * @requires Permission: 'app.window.shape'
Set window shape
 */
    setShape: (rects: app$ContentBounds[]) => void;

    /**
     * The JavaScript 'window' object for the created child.
     */
    contentWindow: Window;

    /**
     * The id the window was created with.
     */
    id: string;

    /**
     * The position, size and constraints of the window's content, which does not include window decorations.
     * @since This property is new in Chrome 36.
     */
    innerBounds: app$Bounds;

    /**
     * The position, size and constraints of the window, which includes window decorations, such as the title bar and frame.
     * @since This property is new in Chrome 36.
     */
    outerBounds: app$Bounds;

    /**
     * Fired when the window is resized.
     */
    onBoundsChanged: app$WindowEvent;

    /**
     * Fired when the window is closed.
     * Note, this should be listened to from a window other than the window being closed, for example from the background page.
     * This is because the window being closed will be in the process of being torn down when the event is fired,
     * which means not all APIs in the window's script context will be functional.
     */
    onClosed: app$WindowEvent;

    /**
     * Fired when the window is fullscreened (either via the AppWindow or HTML5 APIs).
     */
    onFullscreened: app$WindowEvent;

    /**
     * Fired when the window is maximized.
     */
    onMaximized: app$WindowEvent;

    /**
     * Fired when the window is minimized.
     */
    onMinimized: app$WindowEvent;

    /**
     * Fired when the window is restored from being minimized or maximized.
     */
    onRestored: app$WindowEvent;
  }

  declare type app$WindowEvent = {} & undefined.events$Event<() => void>;

  declare type app$WindowParams = {
    id: string,
    frameId?: chrome$integer,
    existingWindow?: boolean,
    [key: string]: any
  } & app$AppWindow;

  declare type app$ChromeAppWindow = {
    /**
     * @enum {Window} state enum
     */
    +State: typeof _State,
    +WindowType: {
      SHELL: "shell",
      PANEL: "panel"
    },

    /**
     * The size and position of a window can be specified in a number of different ways. The most simple option is not specifying anything at all, in which case a default size and platform dependent position will be used.
     * To set the position, size and constraints of the window, use the innerBounds or outerBounds properties. Inner bounds do not include window decorations. Outer bounds include the window's title bar and frame. Note that the padding between the inner and outer bounds is determined by the OS. Therefore setting the same property for both inner and outer bounds is considered an error (for example, setting both innerBounds.left and outerBounds.left).
     * To automatically remember the positions of windows you can give them ids. If a window has an id, This id is used to remember the size and position of the window whenever it is moved or resized. This size and position is then used instead of the specified bounds on subsequent opening of a window with the same id. If you need to open a window with an id at a location other than the remembered default, you can create it hidden, move it to the desired location, then show it.
     * @param url
     * @param options
     * @param callback Called in the creating window (parent) before the load event is called in the created window (child). The parent can set fields or functions on the child usable from onload. E.g. background.js: function(createdWindow) { createdWindow.contentWindow.foo = function () { }; }; window.js: window.onload = function () { foo(); } If you specify the callback parameter, it should be a function that looks like this: function(AppWindow createdWindow) {...};
     */
    alarms$create(
      url: string,
      options?: app$CreateWindowOptions,
      callback?: (created_window: app$AppWindow) => void
    ): void,

    /**
     * Returns an AppWindow object for the current script context (ie JavaScript 'window' object). This can also be called on a handle to a script context for another page, for example: otherWindow.chrome.app.window.current().
     */
    current(): app$AppWindow,

    /**
     * Gets an AppWindow with the given id. If no window with the given id exists null is returned. This method is new in Chrome 33.
     */
    alarms$get(id: string): app$AppWindow,

    /**
     * Gets an array of all currently created app windows. This method is new in Chrome 33.
     */
    alarms$getAll(): app$AppWindow[],

    /**
     * Whether the current platform supports windows being visible on all workspaces.
     */
    canSetVisibleOnAllWorkspaces(): boolean
  } & app$AppWindow;

  declare var app$window: app$ChromeAppWindow;

  declare var npm$namespace$audio: {
    getDevices: typeof audio$getDevices,
    setDevices: typeof audio$setDevices,
    setProperties: typeof audio$setProperties,
    getMute: typeof audio$getMute,
    setMute: typeof audio$setMute,
    onLevelChanged: typeof audio$onLevelChanged,
    onMuteChanged: typeof audio$onMuteChanged,
    onDeviceListChanged: typeof audio$onDeviceListChanged
  };
  declare type audio$StreamType = "INPUT" | "OUTPUT";

  declare type audio$DeviceType =
    | "HEADPHONE"
    | "MIC"
    | "USB"
    | "BLUETOOTH"
    | "HDMI"
    | "INTERNAL_SPEAKER"
    | "INTERNAL_MIC"
    | "FRONT_MIC"
    | "REAR_MIC"
    | "KEYBOARD_MIC"
    | "HOTWORD"
    | "LINEOUT"
    | "POST_MIX_LOOPBACK"
    | "POST_DSP_LOOPBACK"
    | "OTHER";

  declare interface audio$AudioDeviceInfo {
    /**
     * The unique identifier of the audio device.
     */
    id: string;

    /**
     * Stream type associated with this device.
     */
    streamType: audio$StreamType;

    /**
     * Type of the device.
     */
    deviceType: audio$DeviceType;

    /**
     * The user-friendly name (e.g. 'USB Microphone').
     */
    displayName: string;

    /**
     * Device name.
     */
    deviceName: string;

    /**
     * True if this is the current active device.
     */
    isActive: boolean;

    /**
     * The sound level of the device, volume for output, gain for input.
     */
    level: chrome$integer;

    /**
     * The stable/persisted device id string when available.
     */
    stableDeviceId?: string;
  }

  declare interface audio$DeviceIdLists {
    /**
     * List of input devices specified by their ID.
     * To indicate input devices should be unaffected, leave this property unset.
     */
    input?: string[];

    /**
     * List of output devices specified by their ID.
     * To indicate output devices should be unaffected, leave this property unset.
     */
    output?: string[];
  }

  declare interface audio$SetDeviceProperties {
    /**
     * The audio device's desired sound level. Defaults to the device's current sound level.
     * If used with audio input device, represents audio device gain.
     * If used with audio output device, represents audio device volume.
     */
    level?: chrome$integer;
  }

  /**
   * Device properties by which to filter the list of returned audio devices.
   * If the filter is not set or set to {}, returned device list will contain all available audio devices.
   */
  declare interface audio$Filter {
    /**
     * If set, only audio devices whose stream type is included in this list will satisfy the filter.
     */
    streamTypes?: audio$StreamType[];

    /**
     * If set, only audio devices whose active state matches this value will satisfy the filter.
     */
    isActive?: boolean;

    /**
     * The type of networks to return.
     */
    networkType: onc$NetworkType;

    /**
     * If true, only include visible (physically connected or in-range) networks.
     * @default false
     */
    visible?: boolean;

    /**
     * If true, only include configured (saved) networks.
     * @default false
     */
    configured?: boolean;

    /**
     * Maximum number of networks to return.
     * Use 0 for no limit
     * @default 1000 if unspecified.
     */
    limit?: chrome$integer;
  }

  /**
   * Gets a list of audio devices filtered based on |filter|.
   */
  declare function audio$getDevices(
    filter: audio$Filter,
    callback: (devices: audio$AudioDeviceInfo[]) => void
  ): void;

  declare function audio$getDevices(
    callback: (devices: audio$AudioDeviceInfo[]) => void
  ): void;

  /**
   * Sets lists of active input and/or output devices.
   */
  declare function audio$setDevices(
    ids: audio$DeviceIdLists[] | string[],
    callback: () => void
  ): void;

  /**
   * Sets the properties for the input or output device.
   */
  declare function audio$setProperties(
    id: string,
    properties: audio$SetDeviceProperties,
    callback: () => void
  ): void;

  /**
   * Gets the system-wide mute state for the specified stream type.
   * @param streamType Stream type for which mute state should be fetched.
   * @param callback Callback reporting whether mute is set or not for specified stream type.
   */
  declare function audio$getMute(
    streamType: audio$StreamType,
    callback: (value: boolean) => void
  ): void;

  /**
   * Sets mute state for a stream type. The mute state will apply to all audio devices with the specified audio stream type.
   * @param streamType Stream type for which mute state should be set.
   * @param isMuted New mute value.
   * @param callback If you specify the callback parameter, it should be a function that looks like this: function() {...};
   */
  declare function audio$setMute(
    streamType: audio$StreamType,
    isMuted: boolean,
    callback?: () => void
  ): void;

  /**
   * Fired when sound level changes for an active audio device.
   */
  declare var audio$onLevelChanged: chrome$events.events$Event<
    (deviceId: string, level: chrome$integer) => void
  >;

  /**
   * Fired when the mute state of the audio input or output changes.
   * Note that mute state is system-wide and the new value applies to
   * every audio device with specified stream type.
   */
  declare var audio$onMuteChanged: chrome$events.events$Event<
    (streamType: audio$StreamType[], isMuted: boolean) => void
  >;

  /**
   * Fired when audio devices change, either new devices being added,
   * or existing devices being removed.
   * callback `devices` contains a list of all present audio devices after the change.
   */
  declare var audio$onDeviceListChanged: chrome$events.events$Event<
    (devices: audio$AudioDeviceInfo[]) => void
  >;

  declare var npm$namespace$bluetooth: {
    getAdapterState: typeof bluetooth$getAdapterState,
    getDevice: typeof bluetooth$getDevice,
    getDevices: typeof bluetooth$getDevices,
    startDiscovery: typeof bluetooth$startDiscovery,
    stopDiscovery: typeof bluetooth$stopDiscovery,
    onAdapterStateChanged: typeof bluetooth$onAdapterStateChanged,
    onDeviceAdded: typeof bluetooth$onDeviceAdded,
    onDeviceChanged: typeof bluetooth$onDeviceChanged,
    onDeviceRemoved: typeof bluetooth$onDeviceRemoved
  };
  declare interface bluetooth$AdapterState {
    /**
     * The address of the adapter, in the format 'XX:XX:XX:XX:XX:XX'.
     */
    address: string;

    /**
     * The human-readable name of the adapter.
     */
    name: string;

    /**
     * Indicates whether or not the adapter has power.
     */
    powered: boolean;

    /**
     * Indicates whether or not the adapter is available (i.e. enabled).
     */
    available: boolean;

    /**
     * Indicates whether or not the adapter is currently discovering.
     */
    discovering: boolean;
  }

  declare type bluetooth$DeviceType =
    | "HEADPHONE"
    | "MIC"
    | "USB"
    | "BLUETOOTH"
    | "HDMI"
    | "INTERNAL_SPEAKER"
    | "INTERNAL_MIC"
    | "FRONT_MIC"
    | "REAR_MIC"
    | "KEYBOARD_MIC"
    | "HOTWORD"
    | "LINEOUT"
    | "POST_MIX_LOOPBACK"
    | "POST_DSP_LOOPBACK"
    | "OTHER";

  declare type bluetooth$DeviceVendorIdSource = "bluetooth" | "usb";

  declare interface bluetooth$Device {
    /**
     * The address of the device, in the format 'XX:XX:XX:XX:XX:XX'.
     */
    address: string;

    /**
     * The human-readable name of the device.
     */
    name?: string;

    /**
     * The class of the device, a bit-field defined by http://www.bluetooth.org/en-us/specification/assigned-numbers/baseband.
     */
    deviceClass?: chrome$integer;

    /**
     * The Device ID record of the device, where available.
     */
    vendorIdSource?: bluetooth$DeviceVendorIdSource;
    vendorId?: chrome$integer;
    productId?: chrome$integer;
    deviceId?: chrome$integer;

    /**
     * The type of the device, if recognized by Chrome.
     * This is obtained from the |deviceClass| field and only represents a small fraction of the possible device types.
     * When in doubt you should use the |deviceClass| field directly.
     */
    type?: bluetooth$DeviceType;

    /**
     * Indicates whether or not the device is paired with the system.
     */
    paired?: boolean;

    /**
     * Indicates whether the device is currently connected to the system.
     */
    connected?: boolean;

    /**
     * Indicates whether the device is currently connecting to the system.
     * @since Chrome 48
     */
    connecting?: boolean;

    /**
     * Indicates whether the device is connectable.
     * @since Chrome 48
     */
    connectable?: boolean;

    /**
     * UUIDs of protocols, profiles and services advertised by the device.
     * For classic Bluetooth devices, this list is obtained from EIR data and SDP tables.
     * For Low Energy devices, this list is obtained from AD and GATT primary services.
     * For dual mode devices this may be obtained from both.
     */
    uuids?: string[];

    /**
     * The received signal strength, in dBm. This field is avaliable and valid only during discovery. Outside of discovery it's value is not specified.
     * @since Chrome 44
     */
    inquiryRssi: chrome$integer;

    /**
     * The transmitted power level. This field is avaliable only for LE devices that include this field in AD. It is avaliable and valid only during discovery.
     * @since Chrome 44
     */
    inquiryTxPower: chrome$integer;

    /**
     * An opaque ID for the USB device. It remains unchanged until the device is unplugged.
     * @since Chrome 31.
     */
    device: chrome$integer;

    /**
     * The vendor ID.
     */
    vendorId: chrome$integer;

    /**
     * The product ID.
     */
    productId: chrome$integer;

    /**
     * The device version (bcdDevice field).
     * @since Chrome 46.
     */
    version: chrome$integer;

    /**
     * The iProduct string read from the device, if available.
     * @since Chrome 46.
     */
    productName: string;

    /**
     * The iManufacturer string read from the device, if available.
     * @since Chrome 46.
     */
    manufacturerName: string;

    /**
     * The iSerialNumber string read from the device, if available.
     * @since Chrome 46.
     */
    serialNumber: string;
  }

  declare interface bluetooth$BluetoothEvent<T> {
    addListener(callback: (event: T) => void): void;
  }

  declare type bluetooth$DeviceFilterType = "all" | "known";

  /**
   * Some criteria to filter the list of returned bluetooth devices. If the filter is not set or set to {}, returned device list will contain all bluetooth devices. Right now this is only supported in ChromeOS, for other platforms, a full list is returned.
   */
  declare interface bluetooth$DeviceFilter {
    /**
     * Type of filter to apply to the device list. Default is all.
     */
    filterType?: bluetooth$DeviceFilterType;

    /**
     * Maximum number of bluetoth devices to return. Default is 0 (no limit) if unspecified.
     */
    limit?: chrome$integer;

    /**
     * Device vendor ID.
     */
    vendorId?: chrome$integer;

    /**
     * Device product ID, only checked only if the vendor ID matches.
     */
    productId?: chrome$integer;

    /**
     * HID usage page identifier.
     */
    usagePage?: chrome$integer;

    /**
     * HID usage identifier, checked only if the HID usage page matches.
     */
    usage?: chrome$integer;
  }

  /**
   * Get information about the Bluetooth adapter.
   */
  declare function bluetooth$getAdapterState(
    callback: (adapterInfo: bluetooth$AdapterState) => void
  ): void;

  /**
   * Get information about a Bluetooth device known to the system.
   */
  declare function bluetooth$getDevice(
    deviceAddress: string,
    callback: (deviceInfo: bluetooth$Device) => void
  ): void;

  /**
   * Get a list of Bluetooth devices known to the system, including paired and recently discovered devices.
   * @param callback Called when the search is completed.
   */
  declare function bluetooth$getDevices(
    callback: (devices: bluetooth$Device[]) => void
  ): void;

  /**
   * @since Chrome 67.
   * @description Get a list of Bluetooth devices known to the system, including paired and recently discovered devices.
   * @param filter Some criteria to filter the list of returned bluetooth devices. If the filter is not set or set to {}, returned device list will contain all bluetooth devices. Right now this is only supported in ChromeOS, for other platforms, a full list is returned.
   * @param callback Called when the search is completed.
   */
  declare function bluetooth$getDevices(
    filter: bluetooth$DeviceFilter,
    callback: (devices: bluetooth$Device[]) => void
  ): void;

  /**
   * Start discovery. Newly discovered devices will be returned via the onDeviceAdded event. Previously discovered devices already known to the adapter must be obtained using getDevices and will only be updated using the |onDeviceChanged| event if information about them changes.
   * Discovery will fail to start if this application has already called startDiscovery. Discovery can be resource intensive: stopDiscovery should be called as soon as possible.
   */
  declare function bluetooth$startDiscovery(callback: () => void): void;

  /**
   * Stop discovery.
   */
  declare function bluetooth$stopDiscovery(callback: () => void): void;

  /**
   * Fired when the state of the Bluetooth adapter changes.
   */
  declare var bluetooth$onAdapterStateChanged: bluetooth$BluetoothEvent<bluetooth$AdapterState>;

  /**
   * Fired when information about a new Bluetooth device is available.
   */
  declare var bluetooth$onDeviceAdded: bluetooth$BluetoothEvent<bluetooth$Device>;

  /**
   * Fired when information about a known Bluetooth device has changed.
   */
  declare var bluetooth$onDeviceChanged: bluetooth$BluetoothEvent<bluetooth$Device>;

  /**
   * Fired when a Bluetooth device that was previously discovered has been out of range for long enough to be considered unavailable again, and when a paired device is removed.
   */
  declare var bluetooth$onDeviceRemoved: bluetooth$BluetoothEvent<bluetooth$Device>;

  declare var npm$namespace$bluetoothLowEnergy: {
    connect: typeof bluetoothLowEnergy$connect,
    disconnect: typeof bluetoothLowEnergy$disconnect,
    getService: typeof bluetoothLowEnergy$getService,
    createService: typeof bluetoothLowEnergy$createService,
    getServices: typeof bluetoothLowEnergy$getServices,
    getCharacteristic: typeof bluetoothLowEnergy$getCharacteristic,
    createCharacteristic: typeof bluetoothLowEnergy$createCharacteristic,
    getCharacteristics: typeof bluetoothLowEnergy$getCharacteristics,
    getIncludedServices: typeof bluetoothLowEnergy$getIncludedServices,
    getDescriptor: typeof bluetoothLowEnergy$getDescriptor,
    createDescriptor: typeof bluetoothLowEnergy$createDescriptor,
    getDescriptors: typeof bluetoothLowEnergy$getDescriptors,
    readCharacteristicValue: typeof bluetoothLowEnergy$readCharacteristicValue,
    writeCharacteristicValue: typeof bluetoothLowEnergy$writeCharacteristicValue,
    startCharacteristicNotifications: typeof bluetoothLowEnergy$startCharacteristicNotifications,
    stopCharacteristicNotifications: typeof bluetoothLowEnergy$stopCharacteristicNotifications,
    notifyCharacteristicValueChanged: typeof bluetoothLowEnergy$notifyCharacteristicValueChanged,
    readDescriptorValue: typeof bluetoothLowEnergy$readDescriptorValue,
    writeDescriptorValue: typeof bluetoothLowEnergy$writeDescriptorValue,
    registerService: typeof bluetoothLowEnergy$registerService,
    unregisterService: typeof bluetoothLowEnergy$unregisterService,
    removeService: typeof bluetoothLowEnergy$removeService,
    registerAdvertisement: typeof bluetoothLowEnergy$registerAdvertisement,
    unregisterAdvertisement: typeof bluetoothLowEnergy$unregisterAdvertisement,
    resetAdvertising: typeof bluetoothLowEnergy$resetAdvertising,
    setAdvertisingInterval: typeof bluetoothLowEnergy$setAdvertisingInterval,
    sendRequestResponse: typeof bluetoothLowEnergy$sendRequestResponse,
    onServiceAdded: typeof bluetoothLowEnergy$onServiceAdded,
    onServiceChanged: typeof bluetoothLowEnergy$onServiceChanged,
    onServiceRemoved: typeof bluetoothLowEnergy$onServiceRemoved,
    onCharacteristicValueChanged: typeof bluetoothLowEnergy$onCharacteristicValueChanged,
    onDescriptorValueChanged: typeof bluetoothLowEnergy$onDescriptorValueChanged,
    onCharacteristicReadRequest: typeof bluetoothLowEnergy$onCharacteristicReadRequest,
    onCharacteristicWriteRequest: typeof bluetoothLowEnergy$onCharacteristicWriteRequest,
    onDescriptorReadRequest: typeof bluetoothLowEnergy$onDescriptorReadRequest,
    onDescriptorWriteRequest: typeof bluetoothLowEnergy$onDescriptorWriteRequest
  };
  declare interface bluetoothLowEnergy$Service {
    /**
     * The UUID of the service, e.g. 0000180d-0000-1000-8000-00805f9b34fb.
     */
    uuid: string;

    /**
     * Indicates whether the type of this service is primary or secondary.
     */
    isPrimary: boolean;

    /**
     * Returns the identifier assigned to this service.
     * Use the instance ID to distinguish between services from a peripheral with the same UUID and to make function calls that take in a service identifier.
     * Present, if this instance represents a remote service.
     */
    instanceId?: string;

    /**
     * The device address of the remote peripheral that the GATT service belongs to.
     * Present, if this instance represents a remote service.
     */
    deviceAddress?: string;

    /**
     * The service name of an mDNS advertised service, ..
     */
    serviceName: string;

    /**
     * The host:port pair of an mDNS advertised service.
     */
    serviceHostPort: string;

    /**
     * The IP address of an mDNS advertised service.
     */
    ipAddress: string;

    /**
     * Metadata for an mDNS advertised service.
     */
    serviceData: string[];
  }

  declare type bluetoothLowEnergy$CharacteristicProperties =
    | "broadcast"
    | "read"
    | "writeWithoutResponse"
    | "write"
    | "notify"
    | "indicate"
    | "authenticatedSignedWrites"
    | "extendedProperties"
    | "reliableWrite"
    | "writableAuxiliaries"
    | "encryptRead"
    | "encryptWrite"
    | "encryptAuthenticatedRead"
    | "encryptAuthenticatedWrite";

  declare interface bluetoothLowEnergy$Characteristic {
    /**
     * The UUID of the characteristic, e.g. 00002a37-0000-1000-8000-00805f9b34fb.
     */
    uuid: string;

    /**
     * The GATT service this characteristic belongs to.
     */
    service?: bluetoothLowEnergy$Service;

    /**
     * The properties of this characteristic.
     */
    properties: bluetoothLowEnergy$CharacteristicProperties[];

    /**
     * Returns the identifier assigned to this characteristic. Use the instance ID to distinguish between characteristics from a peripheral with the same UUID and to make function calls that take in a characteristic identifier. Present, if this instance represents a remote characteristic.
     */
    instanceId?: string;

    /**
     * The currently cached characteristic value. This value gets updated when the value of the characteristic is read or updated via a notification or indication.
     */
    value?: ArrayBuffer;
  }

  declare type bluetoothLowEnergy$DescriptorPermissions =
    | "read"
    | "write"
    | "encryptedRead"
    | "encryptedWrite"
    | "encryptedAuthenticatedRead"
    | "encryptedAuthenticatedWrite";

  declare interface bluetoothLowEnergy$Descriptor {
    /**
     * The UUID of the characteristic descriptor, e.g. 00002902-0000-1000-8000-00805f9b34fb.
     */
    uuid: string;

    /**
     * The GATT characteristic this descriptor belongs to.
     */
    characteristic?: bluetoothLowEnergy$Characteristic;

    /**
     * The permissions of this descriptor.
     * @since Chrome 52.
     */
    permissions: bluetoothLowEnergy$DescriptorPermissions[];

    /**
     * Returns the identifier assigned to this descriptor. Use the instance ID to distinguish between descriptors from a peripheral with the same UUID and to make function calls that take in a descriptor identifier. Present, if this instance represents a remote characteristic.
     */
    instanceId?: string;

    /**
     * The currently cached descriptor value. This value gets updated when the value of the descriptor is read.
     */
    value?: ArrayBuffer;
  }

  declare interface bluetoothLowEnergy$RequestDevice {
    /**
     * The address of the device, in the format 'XX:XX:XX:XX:XX:XX'.
     */
    address: string;

    /**
     * The human-readable name of the device.
     */
    name?: string;

    /**
     * The class of the device, a bit - field defined by:
     * @see [Specs]{@link http://www.bluetooth.org/en-us/specification/assigned-numbers/baseband}
     */
    deviceClass?: chrome$integer;
  }

  declare interface bluetoothLowEnergy$Request {
    /**
     * Unique ID for this request. Use this ID when responding to this request.
     */
    requestId: chrome$integer;

    /**
     * Device that send this request.
     */
    device: bluetoothLowEnergy$RequestDevice;

    /**
     * Value to write (if this is a write request).
     */
    value?: ArrayBuffer;
  }

  declare interface bluetoothLowEnergy$IProperties {
    /**
     * Flag indicating whether a connection to the device is left open when the event page of the application is unloaded. The default value is false.
     * @see [HowToManageAppLifecycle]{@link https://developer.chrome.com/apps/app_lifecycle}
     * @default false
     */
    persistent: boolean;
  }

  declare interface bluetoothLowEnergy$INotification {
    /**
     * New value of the characteristic.
     */
    value: ArrayBuffer;

    /**
     * Optional flag for sending an indication instead of a notification.
     */
    shouldIndicate: boolean;
  }

  declare type bluetoothLowEnergy$AdvertisementType =
    | "broadcast"
    | "peripheral";

  declare interface bluetoothLowEnergy$Advertisement {
    /**
     * Type of advertisement.
     */
    type: bluetoothLowEnergy$AdvertisementType;

    /**
     * List of UUIDs to include in the 'Service UUIDs' field of the Advertising Data. These UUIDs can be of the 16bit, 32bit or 128 formats.
     */
    serviceUuids?: string[];

    /**
     * List of manufacturer specific data to be included in 'Manufacturer Specific Data' fields of the advertising data.
     */
    manufacturerData?: {
      id: chrome$integer,
      data: chrome$integer[]
    };

    /**
     * List of UUIDs to include in the 'Solicit UUIDs' field of the Advertising Data. These UUIDs can be of the 16bit, 32bit or 128 formats.
     */
    solicitUuids?: string[];

    /**
     * List of service data to be included in 'Service Data' fields of the advertising data.
     */
    serviceData: {
      uuid: string,
      data: chrome$integer[]
    };
  }

  declare interface bluetoothLowEnergy$IResponse {
    /**
     * Id of the request this is a response to.
     */
    requestId: chrome$integer;

    /**
     * If this is an error response, this should be true.
     */
    isError: boolean;

    /**
     * Response value. Write requests and error responses will ignore this parameter.
     */
    value?: ArrayBuffer;
  }

  /**
   * Establishes a connection between the application and the device with the given address. A device may be already connected and its GATT services available without calling connect, however, an app that wants to access GATT services of a device should call this function to make sure that a connection to the device is maintained. If the device is not connected, all GATT services of the device will be discovered after a successful call to connect.
   * @param deviceAddress The Bluetooth address of the remote device to which a GATT connection should be opened.
   * @param callback Called when the connect request has completed.
   */
  declare function bluetoothLowEnergy$connect(
    deviceAddress: string,
    callback: () => void
  ): void;

  /**
   * Establishes a connection between the application and the device with the given address. A device may be already connected and its GATT services available without calling connect, however, an app that wants to access GATT services of a device should call this function to make sure that a connection to the device is maintained. If the device is not connected, all GATT services of the device will be discovered after a successful call to connect.
   * @param deviceAddress The Bluetooth address of the remote device to which a GATT connection should be opened.
   * @param properties Connection properties (optional).
   * @param callback Called when the connect request has completed.
   */
  declare function bluetoothLowEnergy$connect(
    deviceAddress: string,
    properties: bluetoothLowEnergy$IProperties,
    callback: () => void
  ): void;

  /**
   * Closes the app's connection to the device with the given address. Note that this will not always destroy the physical link itself, since there may be other apps with open connections.
   * @param deviceAddress The Bluetooth address of the remote device.
   * @param callback Called when the disconnect request has completed.
   */
  declare function bluetoothLowEnergy$disconnect(
    deviceAddress: string,
    callback?: () => void
  ): void;

  /**
   * Get the GATT service with the given instance ID.
   * @param serviceId The instance ID of the requested GATT service.
   * @param callback Called with the requested Service object.
   */
  declare function bluetoothLowEnergy$getService(
    serviceId: string,
    callback: (result: bluetoothLowEnergy$Service) => void
  ): void;

  /**
   * Create a locally hosted GATT service. This service can be registered to be available on a local GATT server. This function is only available if the app has both the bluetooth:low_energy and the bluetooth:peripheral permissions set to true. The peripheral permission may not be available to all apps.
   * @since Chrome 52.
   * @param service The service to create.
   * @param callback Called with the created services's unique ID.
   */
  declare function bluetoothLowEnergy$createService(
    service: bluetoothLowEnergy$Service,
    callback: () => void
  ): void;

  /**
   * Get all the GATT services that were discovered on the remote device with the given device address.
   * Note: If service discovery is not yet complete on the device, this API will return a subset (possibly empty) of services. A work around is to add a time based delay and/or call repeatedly until the expected number of services is returned.
   * @param deviceAddress The Bluetooth address of the remote device whose GATT services should be returned.
   * @param callback Called with the list of requested Service objects.
   */
  declare function bluetoothLowEnergy$getServices(
    deviceAddress: string,
    callback: (result: bluetoothLowEnergy$Service[]) => void
  ): void;

  /**
   * Get the GATT characteristic with the given instance ID that belongs to the given GATT service, if the characteristic exists.
   * @param characteristicId The instance ID of the requested GATT characteristic.
   * @param callback Called with the requested Characteristic object.
   */
  declare function bluetoothLowEnergy$getCharacteristic(
    characteristicId: string,
    callback: (result: bluetoothLowEnergy$Characteristic) => void
  ): void;

  /**
   * Create a locally hosted GATT characteristic. This characteristic must be hosted under a valid service. If the service ID is not valid, the lastError will be set. This function is only available if the app has both the bluetooth:low_energy and the bluetooth:peripheral permissions set to true. The peripheral permission may not be available to all apps.
   * @since Chrome 52.
   * @param characteristic The characteristic to create.
   * @param serviceId ID of the service to create this characteristic for.
   * @param callback Called with the created characteristic's unique ID.
   */
  declare function bluetoothLowEnergy$createCharacteristic(
    characteristic: bluetoothLowEnergy$Characteristic,
    serviceId: string,
    callback: (characteristicId: string) => void
  ): void;

  /**
   * Get a list of all discovered GATT characteristics that belong to the given service.
   * @param serviceId The instance ID of the GATT service whose characteristics should be returned.
   * @param callback Called with the list of characteristics that belong to the given service.
   */
  declare function bluetoothLowEnergy$getCharacteristics(
    serviceId: string,
    callback: (result: bluetoothLowEnergy$Characteristic[]) => void
  ): void;

  /**
   * Get a list of GATT services that are included by the given service.
   * @param serviceId The instance ID of the GATT service whose included services should be returned.
   * @param callback Called with the list of GATT services included from the given service.
   */
  declare function bluetoothLowEnergy$getIncludedServices(
    serviceId: string,
    callback: (result: bluetoothLowEnergy$Service[]) => void
  ): void;

  /**
   * Get the GATT characteristic descriptor with the given instance ID.
   * @param descriptorId The instance ID of the requested GATT characteristic descriptor.
   * @param callback Called with the requested Descriptor object.
   */
  declare function bluetoothLowEnergy$getDescriptor(
    descriptorId: string,
    callback: (result: bluetoothLowEnergy$Descriptor) => void
  ): void;

  /**
   * Create a locally hosted GATT descriptor. This descriptor must be hosted under a valid characteristic. If the characteristic ID is not valid, the lastError will be set. This function is only available if the app has both the bluetooth:low_energy and the bluetooth:peripheral permissions set to true. The peripheral permission may not be available to all apps.
   * @since Chrome 52.
   * @param descriptor The descriptor to create.
   * @param characteristicId ID of the characteristic to create this descriptor for.
   * @param callback Called with the created desciptor's unique ID.
   */
  declare function bluetoothLowEnergy$createDescriptor(
    descriptor: bluetoothLowEnergy$Descriptor,
    characteristicId: string,
    callback: (descriptorId: string) => void
  ): void;

  /**
   * Get a list of GATT characteristic descriptors that belong to the given characteristic.
   * @param characteristicId The instance ID of the GATT characteristic whose descriptors should be returned.
   * @param callback Called with the list of descriptors that belong to the given characteristic.
   */
  declare function bluetoothLowEnergy$getDescriptors(
    characteristicId: string,
    callback: (result: bluetoothLowEnergy$Descriptor[]) => void
  ): void;

  /**
   * Retrieve the value of a specified characteristic from a remote peripheral.
   * @param characteristicId The instance ID of the GATT characteristic whose value should be read from the remote device.
   * @param callback Called with the Characteristic object whose value was requested. The value field of the returned Characteristic object contains the result of the read request.
   */
  declare function bluetoothLowEnergy$readCharacteristicValue(
    characteristicId: string,
    callback: (result: bluetoothLowEnergy$Characteristic) => void
  ): void;

  /**
   * Write the value of a specified characteristic from a remote peripheral.
   * @param characteristicId The instance ID of the GATT characteristic whose value should be written to.
   * @param value The value that should be sent to the remote characteristic as part of the write request.
   * @param callback Called when the write request has completed.
   */
  declare function bluetoothLowEnergy$writeCharacteristicValue(
    characteristicId: string,
    value: ArrayBuffer,
    callback: () => void
  ): void;

  /**
   * Enable value notifications/indications from the specified characteristic. Once enabled, an application can listen to notifications using the onCharacteristicValueChanged event.
   * @see onCharacteristicValueChanged
   * @param characteristicId The instance ID of the GATT characteristic that notifications should be enabled on.
   * @param callback Called when the request has completed.
   */
  declare function bluetoothLowEnergy$startCharacteristicNotifications(
    characteristicId: string,
    callback: () => void
  ): void;

  /**
   * Enable value notifications/indications from the specified characteristic. Once enabled, an application can listen to notifications using the onCharacteristicValueChanged event.
   * @see onCharacteristicValueChanged
   * @param characteristicId The instance ID of the GATT characteristic that notifications should be enabled on.
   * @param properties Notification session properties (optional).
   * @param callback Called when the request has completed.
   */
  declare function bluetoothLowEnergy$startCharacteristicNotifications(
    characteristicId: string,
    properties: bluetoothLowEnergy$IProperties,
    callback: () => void
  ): void;

  /**
   * Disable value notifications/indications from the specified characteristic. After a successful call, the application will stop receiving notifications/indications from this characteristic.
   * @param characteristicId The instance ID of the GATT characteristic on which this app's notification session should be stopped.
   * @param callback Called when the request has completed (optional).
   */
  declare function bluetoothLowEnergy$stopCharacteristicNotifications(
    characteristicId: string,
    callback?: () => void
  ): void;

  /**
   * Notify a remote device of a new value for a characteristic.
   * If the shouldIndicate flag in the notification object is true, an indication will be sent instead of a notification.
   * Note, the characteristic needs to correctly set the 'notify' or 'indicate' property during creation for this call to succeed.
   * This function is only available if the app has both the bluetooth:low_energy and the bluetooth:peripheral permissions set to true.
   * The peripheral permission may not be available to all apps.
   * @since Chrome 52.
   * @param characteristicId The characteristic to send the notication for.
   * @param notification Notification object
   * @param callback Callback called once the notification or indication has been sent successfully.
   */
  declare function bluetoothLowEnergy$notifyCharacteristicValueChanged(
    characteristicId: string,
    notification: bluetoothLowEnergy$INotification,
    callback: () => void
  ): void;

  /**
   * Retrieve the value of a specified characteristic descriptor from a remote peripheral.
   * @param descriptorId The instance ID of the GATT characteristic descriptor whose value should be read from the remote device.
   * @param callback Called with the Descriptor object whose value was requested. The value field of the returned Descriptor object contains the result of the read request.
   */
  declare function bluetoothLowEnergy$readDescriptorValue(
    descriptorId: string,
    callback: (result: bluetoothLowEnergy$Descriptor) => void
  ): void;

  /**
   * Write the value of a specified characteristic descriptor from a remote peripheral.
   * @param descriptorId The instance ID of the GATT characteristic descriptor whose value should be written to.
   * @param value The value that should be sent to the remote descriptor as part of the write request.
   * @param callback Called when the write request has completed.
   */
  declare function bluetoothLowEnergy$writeDescriptorValue(
    descriptorId: string,
    value: ArrayBuffer,
    callback: () => void
  ): void;

  /**
   * Register the given service with the local GATT server.
   * If the service ID is invalid, the lastError will be set.
   * This function is only available if the app has both
   *    the bluetooth:low_energy and the bluetooth:peripheral permissions set to true.
   * The peripheral permission may not be available to all apps.
   * @since Chrome 52.
   * @param serviceId Unique ID of a created service.
   * @param callback Callback with the result of the register operation.
   */
  declare function bluetoothLowEnergy$registerService(
    serviceId: string,
    callback: (result: any) => void
  ): void;

  /**
   * Unregister the given service with the local GATT server.
   * If the service ID is invalid, the lastError will be set.
   * This function is only available if the app has both
   *    the bluetooth:low_energy and the bluetooth:peripheral permissions set to true.
   * The peripheral permission may not be available to all apps.
   * @since Chrome 52.
   * @param serviceId Unique ID of a current registered service.
   * @param callback Callback with the result of the register operation.
   */
  declare function bluetoothLowEnergy$unregisterService(
    serviceId: string,
    callback: (result: any) => void
  ): void;

  /**
   * Remove the specified service, unregistering it if it was registered.
   * If the service ID is invalid, the lastError will be set.
   * This function is only available if the app has both
   *    the bluetooth:low_energy and the bluetooth:peripheral permissions set to true.
   * The peripheral permission may not be available to all apps.
   * @since Chrome 52.
   * @param serviceId Unique ID of a current registered service.
   * @param callback Callback called once the service is removed.
   */
  declare function bluetoothLowEnergy$removeService(
    serviceId: string,
    callback?: () => void
  ): void;

  /**
   * Create an advertisement and register it for advertising.
   * To call this function, the app must have
   *   the bluetooth:low_energy and bluetooth:peripheral permissions set to true.
   * Additionally this API is only available to auto launched apps in Kiosk Mode
   *   of by setting the 'enable-ble-advertising-in-apps' flag.
   *   See https://developer.chrome.com/apps/manifest/bluetooth
   * Note: On some hardware, central and peripheral modes at the same time
   *   is supported but on hardware that doesn't support this,
   *   making this call will switch the device to peripheral mode.
   * In the case of hardware which does not support both central and peripheral mode,
   *   attempting to use the device in both modes will lead to undefined behavior
   *   or prevent other central-role applications from behaving correctly
   *   (including the discovery of Bluetooth Low Energy devices).
   * @since Chrome 47.
   * @param advertisement The advertisement to advertise.
   * @param callback Called once the registeration is done and we've started advertising. Returns the id of the created advertisement.
   */
  declare function bluetoothLowEnergy$registerAdvertisement(
    advertisement: bluetoothLowEnergy$Advertisement,
    callback: (advertisementId: chrome$integer) => void
  ): void;

  /**
   * Unregisters an advertisement and stops its advertising.
   * If the advertisement fails to unregister the only way
   *   to stop advertising might be to restart the device.
   * @since Chrome 47.
   * @param advertisementId Id of the advertisement to unregister.
   * @param callback Called once the advertisement is unregistered and is no longer being advertised.
   */
  declare function bluetoothLowEnergy$unregisterAdvertisement(
    advertisementId: chrome$integer,
    callback: () => void
  ): void;

  /**
   * Resets advertising on the current device. It will unregister and stop all existing advertisements.
   * @since Chrome 61.
   * @param callback Called once the advertisements are reset.
   */
  declare function bluetoothLowEnergy$resetAdvertising(
    callback: () => void
  ): void;

  /**
   * Set's the interval betweeen two consecutive advertisements.
   * Note: This is a best effort.
   * The actual interval may consty non-trivially from the requested intervals.
   * On some hardware, there is a minimum interval of 100ms.
   * The minimum and maximum values cannot exceed the the range allowed by the Bluetooth 4.2 specification.
   * @since Chrome 55.
   * @param minInterval Minimum interval between advertisments (in milliseconds). This cannot be lower than 20ms (as per the spec).
   * @param maxInterval Maximum interval between advertisments (in milliseconds). This cannot be more than 10240ms (as per the spec).
   * @param callback Called once the interval has been set.
   */
  declare function bluetoothLowEnergy$setAdvertisingInterval(
    minInterval: chrome$integer,
    maxInterval: chrome$integer,
    callback: () => void
  ): void;

  /**
   * Sends a response for a characteristic or descriptor read/write request. This function is only available if the app has both the bluetooth:low_energy and the bluetooth:peripheral permissions set to true. The peripheral permission may not be available to all apps.
   * @since Chrome 52.
   * @param response The response to the request.
   */
  declare function bluetoothLowEnergy$sendRequestResponse(
    response: bluetoothLowEnergy$IResponse
  ): void;

  /**
   * Fired whan a new GATT service has been discovered on a remote device.
   */
  declare var bluetoothLowEnergy$onServiceAdded: chrome$events.events$Event<
    (service: bluetoothLowEnergy$Service) => void
  >;

  /**
   * Fired when the state of a remote GATT service changes.
   * This involves any characteristics and/or descriptors
   *    that get added or removed from the service, as well as
   *    'ServiceChanged' notifications from the remote device.
   */
  declare var bluetoothLowEnergy$onServiceChanged: chrome$events.events$Event<
    (service: bluetoothLowEnergy$Service) => void
  >;

  /**
   * Fired when a GATT service that was previously discovered on a remote device has been removed.
   */
  declare var bluetoothLowEnergy$onServiceRemoved: chrome$events.events$Event<
    (service: bluetoothLowEnergy$Service) => void
  >;

  /**
   * Fired when the value of a remote GATT characteristic changes,
   *    either as a result of a read request,
   *    or a value change notification/indication.
   * This event will only be sent if the app has enabled notifications
   *    by calling startCharacteristicNotifications.
   */
  declare var bluetoothLowEnergy$onCharacteristicValueChanged: chrome$events.events$Event<
    (characteristic: bluetoothLowEnergy$Characteristic) => void
  >;

  /**
   * Fired when the value of a remote GATT characteristic descriptor changes,
   *    usually as a result of a read request.
   * This event exists mostly for convenience and will always be sent after
   *    a successful call to readDescriptorValue.
   */
  declare var bluetoothLowEnergy$onDescriptorValueChanged: chrome$events.events$Event<
    (descriptor: bluetoothLowEnergy$Descriptor) => void
  >;

  /**
   * Fired when a connected central device requests to read the value of
   *    a characteristic registered on the local GATT server.
   * Not responding to this request for a long time may lead to a disconnection.
   * This event is only available if the app has both the bluetooth:low_energy
   *    and the bluetooth:peripheral permissions set to true.
   * The peripheral permission may not be available to all apps.
   * @since Chrome 52.
   */
  declare var bluetoothLowEnergy$onCharacteristicReadRequest: chrome$events.events$Event<
    (characteristic: bluetoothLowEnergy$Characteristic) => void
  >;

  /**
   * Fired when a connected central device requests to write the value of
   *    a characteristic registered on the local GATT server.
   * Not responding to this request for a long time may lead to a disconnection.
   * This event is only available if the app has both the bluetooth:low_energy
   *    and the bluetooth:peripheral permissions set to true.
   * The peripheral permission may not be available to all apps.
   * @since Chrome 52.
   */
  declare var bluetoothLowEnergy$onCharacteristicWriteRequest: chrome$events.events$Event<
    (characteristic: bluetoothLowEnergy$Characteristic) => void
  >;

  /**
   * Fired when a connected central device requests to read the value of
   *    a descriptor registered on the local GATT server.
   * Not responding to this request for a long time may lead to a disconnection.
   * This event is only available if the app has both the bluetooth:low_energy
   *    and the bluetooth:peripheral permissions set to true.
   * The peripheral permission may not be available to all apps.
   * @since Chrome 52.
   */
  declare var bluetoothLowEnergy$onDescriptorReadRequest: chrome$events.events$Event<
    (descriptor: bluetoothLowEnergy$Descriptor) => void
  >;

  /**
   * Fired when a connected central device requests to write the value of
   *    a descriptor registered on the local GATT server.
   * Not responding to this request for a long time may lead to a disconnection.
   * This event is only available if the app has both the bluetooth:low_energy
   *    and the bluetooth:peripheral permissions set to true.
   * The peripheral permission may not be available to all apps.
   */
  declare var bluetoothLowEnergy$onDescriptorWriteRequest: chrome$events.events$Event<
    (descriptor: bluetoothLowEnergy$Descriptor) => void
  >;

  declare var npm$namespace$bluetoothSocket: {
    create: typeof bluetoothSocket$create,
    update: typeof bluetoothSocket$update,
    setPaused: typeof bluetoothSocket$setPaused,
    listenUsingRfcomm: typeof bluetoothSocket$listenUsingRfcomm,
    listenUsingL2cap: typeof bluetoothSocket$listenUsingL2cap,
    connect: typeof bluetoothSocket$connect,
    disconnect: typeof bluetoothSocket$disconnect,
    close: typeof bluetoothSocket$close,
    send: typeof bluetoothSocket$send,
    getInfo: typeof bluetoothSocket$getInfo,
    getSockets: typeof bluetoothSocket$getSockets,
    onAccept: typeof bluetoothSocket$onAccept,
    onAcceptError: typeof bluetoothSocket$onAcceptError,
    onReceive: typeof bluetoothSocket$onReceive,
    onReceiveError: typeof bluetoothSocket$onReceiveError
  };
  declare interface bluetoothSocket$SocketProperties {
    /**
     * Flag indicating whether the socket is left open when
     * the event page of the application is unloaded
     * (see Manage App Lifecycle). The default value is false.
     * When the application is loaded, any sockets previously
     * opened with persistent=true can be fetched with $ref:getSockets.
     */
    persistent?: boolean;

    /**
     * An application-defined string associated with the socket.
     */
    name?: string;

    /**
     * @default 4096
     * @description The size of the buffer used to receive data.
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating if the socket is left open when the event page of the
     * application is unloaded. When the application is loaded, any sockets
     * previously opened with persistent=true can be fetched with *getSockets*.
     * @default false
     */
    persistent?: boolean;

    /**
     * An application-defined string associated with the socket.
     */
    name?: string;

    /**
     * The size of the buffer used to receive data.
     * @default : 4096
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating if the socket remains open when the event page of the
     * application is unloaded. The default value is 'false.' When the
     * application is loaded, any sockets previously opened with
     * persistent=true can be fetched with getSockets.
     * @see http://developer.chrome.com/apps/app_lifecycle.html
     */
    persistent?: boolean;

    /**
     * An application-defined string associated with the socket.
     */
    name?: string;
  }

  declare interface bluetoothSocket$ListenOptions {
    /**
     * The RFCOMM Channel used by listenUsingRfcomm.
     * If specified, this channel must not be previously
     * in use or the method call will fail. When not specified,
     * an unused channel will be automatically allocated.
     */
    channel?: chrome$integer;

    /**
     * The L2CAP PSM used by listenUsingL2cap.
     * If specified, this PSM must not be previously
     * in use or the method call with fail. When not specified,
     * an unused PSM will be automatically allocated.
     */
    psm?: chrome$integer;

    /**
     * Length of the socket's listen queue.
     * The default value depends on the operating system's host subsystem.
     */
    backlog?: chrome$integer;
  }

  declare interface bluetoothSocket$SocketInfo {
    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * Flag indicating if the socket remains
     * open when the event page of the application
     * is unloaded (see SocketProperties.persistent).
     * The default value is 'false'.
     */
    persistent: boolean;

    /**
     * Application-defined string associated with the socket.
     */
    name?: string;

    /**
     * The size of the buffer used to receive data.
     * If no buffer size has been specified explictly,
     * the value is not provided.
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating whether a connected socket
     * blocks its peer from sending more data, or
     * whether connection requests on a listening
     * socket are dispatched through the onAccept
     * event or queued up in the listen queue backlog.
     * See setPaused. The default value is 'false'.
     */
    paused: boolean;

    /**
     * Flag indicating whether the socket is connected to a remote peer.
     */
    connected: boolean;

    /**
     * If the underlying socket is connected,
     * contains the Bluetooth address of the device it is connected to.
     */
    address?: string;

    /**
     * If the underlying socket is connected,
     * contains information about the service
     * UUID it is connected to, otherwise if
     * the underlying socket is listening,
     * contains information about the service
     * UUID it is listening on.
     */
    uuid?: string;

    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * Flag indicating whether the socket is left open when the application is suspended (see SocketProperties.persistent).
     */
    persistent: boolean;

    /**
     * Application-defined string associated with the socket.
     */
    name?: string;

    /**
     * The size of the buffer used to receive data. If no buffer size has been specified explictly, the value is not provided.
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating whether a connected socket blocks its peer from sending more data (see setPaused).
     */
    paused: boolean;

    /**
     * Flag indicating whether the socket is connected to a remote peer.
     */
    connected: boolean;

    /**
     * If the underlying socket is connected, contains its local IPv4/6 address.
     */
    localAddress?: string;

    /**
     * If the underlying socket is connected, contains its local port.
     */
    localPort?: chrome$integer;

    /**
     * If the underlying socket is connected, contains the peer/ IPv4/6 address.
     */
    peerAddress?: string;

    /**
     * If the underlying socket is connected, contains the peer port.
     */
    peerPort?: chrome$integer;

    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * Flag indicating if the socket remains open when the event page of the
     * application is unloaded (see SocketProperties.persistent). The
     * default value is 'false'.
     */
    persistent: boolean;

    /**
     * Application-defined string associated with the socket.
     */
    name?: string;

    /**
     * Flag indicating whether connection requests on a listening socket are
     * dispatched through the onAccept event or queued up in the listen
     * queue backlog. See setPaused. The default value is 'false'
     */
    paused: boolean;

    /**
     * If the socket is listening, contains its local IPv4/6 address.
     */
    localAddress?: string;

    /**
     * If the socket is listening, contains its local port.
     */
    localPort?: chrome$integer;
  }

  declare interface bluetoothSocket$CreateInfo {
    /**
     * The ID of the newly created socket.
     * Note that socket IDs created from this
     * API are not compatible with socket IDs
     * created from other APIs, such as the
     * sockets.tcp API.
     */
    socketId: chrome$integer;

    /**
     * The ID of the newly created socket.
     * Note that socket IDs created from this API are
     * **not compatible** with socket IDs created from
     * other APIs, such as the deprecated socket API.
     */
    socketId: chrome$integer;
  }

  declare interface bluetoothSocket$OnAcceptInfoData {
    /**
     * The server socket identifier.
     */
    socketId: chrome$integer;

    /**
     * The client socket identifier, i.e. the socket
     * identifier of the newly established connection.
     * This socket identifier should be used only with
     * functions from the chrome.bluetoothSocket namespace.
     * Note the client socket is initially paused and must
     * be explictly un-paused by the application to start
     * receiving data.
     */
    clientSocketId: chrome$integer;
  }

  declare type bluetoothSocket$OnAcceptErrorCode =
    | "system_error"
    | "not_listening";

  declare interface bluetoothSocket$OnAcceptErrorEventData {
    /**
     * The server socket identifier.
     */
    socketId: chrome$integer;

    /**
     * The error message
     */
    errorMessage: string;

    /**
     * An error code indicating what went wrong.
     *
     * system_error
     *   > A system error occurred and the connection may be unrecoverable.
     * not_listening
     *   > The socket is not listening.
     */
    error: bluetoothSocket$OnAcceptErrorCode;
  }

  declare interface bluetoothSocket$OnReceiveEventData {
    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * The data received, with a maxium size of bufferSize.
     */
    data: ArrayBuffer;
  }

  declare type bluetoothSocket$OnReceiveErrorCode =
    | "disconnected"
    | "system_error"
    | "not_connected";

  declare interface bluetoothSocket$OnReceiveErrorEventData {
    /**
     * The server socket identifier.
     */
    socketId: chrome$integer;

    /**
     * The error message
     */
    errorMessage: string;

    /**
     * An error code indicating what went wrong.
     *
     * disconnected
     *   > The connection was disconnected.
     * system_error
     *   > A system error occurred and the connection may be unrecoverable.
     * not_connected
     *   > The socket has not been connected.
     */
    error: bluetoothSocket$OnAcceptErrorCode;
  }

  declare type bluetoothSocket$OnAcceptEvent = {} & undefined.events$Event<
    (info: bluetoothSocket$OnAcceptInfoData) => void
  >;

  declare type bluetoothSocket$OnAcceptErrorEvent = {} & undefined.events$Event<
    (info: bluetoothSocket$OnAcceptErrorEventData) => void
  >;

  declare type bluetoothSocket$OnReceiveEvent = {} & undefined.events$Event<
    (info: bluetoothSocket$OnReceiveEventData) => void
  >;

  declare type bluetoothSocket$OnReceiveErrorEvent = {} & undefined.events$Event<
    (info: bluetoothSocket$OnReceiveErrorEventData) => void
  >;

  /**
   * Creates a Bluetooth socket.
   * @param callback Called when the socket has been created
   */
  declare function bluetoothSocket$create(
    callback: (createInfo: bluetoothSocket$CreateInfo) => void
  ): void;

  /**
   * Creates a Bluetooth socket.
   * @param properties The socket properties (optional)
   * @param callback Called when the socket has been created
   */
  declare function bluetoothSocket$create(
    properties: bluetoothSocket$SocketProperties,
    callback: (createInfo: bluetoothSocket$CreateInfo) => void
  ): void;

  /**
   * Updates the socket properties.
   * @param socketId The socket identifier.
   * @param properties The properties to update.
   * @param callback Called when the properties are updated.
   */
  declare function bluetoothSocket$update(
    socketId: chrome$integer,
    properties: bluetoothSocket$SocketProperties,
    callback?: () => void
  ): void;

  /**
 * Enables or disables a connected socket from
 * receiving messages from its peer, or a listening
 * socket from accepting new connections. The default
 * value is 'false'. Pausing a connected socket is
 * typically used by an application to throttle data
 * sent by its peer. When a connected socket is paused,
 * no onReceiveevent is raised. When a socket is connected
 * and un-paused, onReceive events are raised again when
 * messages are received. When a listening socket is paused,
 * new connections are accepted until its backlog is full
 * then additional connection requests are refused.
 * onAccept events are raised only when the socket is un-paused.
 * @param socketId The socket identifier.
 * @param paused Flag indicating whether a connected socket
blocks its peer from sending more data, or
whether connection requests on a listening
socket are dispatched through the onAccept
event or queued up in the listen queue backlog.
See setPaused. The default value is 'false'.
 * @param callback Callback from the setPaused method.
 */
  declare function bluetoothSocket$setPaused(
    socketId: chrome$integer,
    paused: boolean,
    callback?: () => void
  ): void;

  /**
   * Listen for connections using the RFCOMM protocol.
   * @param socketId The socket identifier.
   * @param uuid Service UUID to listen on.
   * @param callback Called when listen operation completes.
   */
  declare function bluetoothSocket$listenUsingRfcomm(
    socketId: chrome$integer,
    uuid: string,
    callback: () => void
  ): void;

  /**
   * Listen for connections using the RFCOMM protocol.
   * @param socketId The socket identifier.
   * @param uuid Service UUID to listen on.
   * @param options Optional additional options for the service.
   * @param callback Called when listen operation completes.
   */
  declare function bluetoothSocket$listenUsingRfcomm(
    socketId: chrome$integer,
    uuid: string,
    options: bluetoothSocket$ListenOptions,
    callback: () => void
  ): void;

  /**
   * Listen for connections using the L2CAP protocol.
   * @param socketId The socket identifier.
   * @param uuid Service UUID to listen on.
   * @param callback Called when listen operation completes.
   */
  declare function bluetoothSocket$listenUsingL2cap(
    socketId: chrome$integer,
    uuid: string,
    callback: () => void
  ): void;

  /**
   * Listen for connections using the L2CAP protocol.
   * @param socketId The socket identifier.
   * @param uuid Service UUID to listen on.
   * @param options Optional additional options for the service.
   * @param callback Called when listen operation completes.
   */
  declare function bluetoothSocket$listenUsingL2cap(
    socketId: chrome$integer,
    uuid: string,
    options: bluetoothSocket$ListenOptions,
    callback: () => void
  ): void;

  /**
   * Connects the socket to a remote Bluetooth device.
   * When the connect operation completes successfully,
   * onReceive events are raised when data is received
   * from the peer. If a network error occur while the
   * runtime is receiving packets, a onReceiveError
   * event is raised, at which point no more onReceive
   * event will be raised for this socket until the
   * setPaused(false) method is called.
   * @param socketId The socket identifier.
   * @param address The address of the Bluetooth device.
   * @param uuid The UUID of the service to connect to.
   * @param callback Called when the connect attempt is complete.
   */
  declare function bluetoothSocket$connect(
    socketId: chrome$integer,
    address: string,
    uuid: string,
    callback: () => void
  ): void;

  /**
   * Disconnects the socket. The socket identifier remains valid.
   * @param socketId The socket identifier.
   * @param callback Called when the disconnect attempt is complete.
   */
  declare function bluetoothSocket$disconnect(
    socketId: chrome$integer,
    callback?: () => void
  ): void;

  /**
   * Disconnects and destroys the socket.
   * Each socket created should be closed after use.
   * The socket id is no longer valid as soon at the
   * function is called. However, the socket is guaranteed
   * to be closed only when the callback is invoked.
   * @param socketId The socket identifier.
   * @param callback Called when the `close` operation completes
   */
  declare function bluetoothSocket$close(
    socketId: chrome$integer,
    callback: () => void
  ): void;

  /**
   * Sends data on the given Bluetooth socket.
   * @param socketId The socket identifier.
   * @param data The data to send.
   * @param callback Called with the number of bytes sent.
   */
  declare function bluetoothSocket$send(
    socketId: chrome$integer,
    data: ArrayBuffer,
    callback?: (bytesSent: chrome$integer) => void
  ): void;

  /**
 * Retrieves the state of the given socket.
 * @param socketId The socket identifier.
 * @param callback Called when the socket state is available.
Callback returning object containing the socket information.
 */
  declare function bluetoothSocket$getInfo(
    socketId: chrome$integer,
    callback: (socketInfo: bluetoothSocket$SocketInfo) => void
  ): void;

  /**
 * Retrieves the list of currently opened sockets owned by the application.
 * @param callback Called when the list of sockets is available.
Returns an array of socket info.
 */
  declare function bluetoothSocket$getSockets(
    callback: (sockets: bluetoothSocket$SocketInfo[]) => void
  ): void;

  /**
   * Event raised when a connection has been established
   * for a given socket.
   */
  declare var bluetoothSocket$onAccept: bluetoothSocket$OnAcceptEvent;

  /**
   * Event raised when a network error occurred while the
   * runtime was waiting for new connections on the given
   * socket. Once this event is raised, the socket is set
   * to paused and no more onAccept events are raised for
   * this socket.
   */
  declare var bluetoothSocket$onAcceptError: bluetoothSocket$OnAcceptErrorEvent;

  /**
   * Event raised when data has been received for a given socket.
   */
  declare var bluetoothSocket$onReceive: bluetoothSocket$OnReceiveEvent;

  /**
   * Event raised when a network error occured while the runtime
   * was waiting for data on the socket. Once this event is raised,
   * the socket is set to paused and no more onReceive events are
   * raised for this socket.
   */
  declare var bluetoothSocket$onReceiveError: bluetoothSocket$OnReceiveErrorEvent;

  declare var npm$namespace$browser: {
    openTab: typeof browser$openTab
  };
  declare interface browser$Options {
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
created, or failed to be created. If failed, runtime.lastError will be set.
 */
  declare function browser$openTab(
    options: browser$Options,
    callback: () => void
  ): void;

  /**
   * Opens a new tab in a browser window associated with the current application
   * and Chrome profile. If no browser window for the Chrome profile is opened,
   * a new one is opened prior to creating the new tab. Since Chrome 42 only.
   * @param options Configures how the tab should be opened.
   */
  declare function browser$openTab(options: browser$Options): void;

  declare var npm$namespace$certificateProvider: {
    requestPin: typeof certificateProvider$requestPin,
    stopPinRequest: typeof certificateProvider$stopPinRequest,
    PinRequestType: typeof certificateProvider$PinRequestType,
    PinRequestErrorType: typeof certificateProvider$PinRequestErrorType,
    onCertificatesRequested: typeof certificateProvider$onCertificatesRequested,
    onSignDigestRequested: typeof certificateProvider$onSignDigestRequested
  };

  /**
   * Hash type
   */
  declare type certificateProvider$Hash =
    | "MD5_SHA1"
    | "SHA1"
    | "SHA256"
    | "SHA384"
    | "SHA512";

  /**
   * The type of code being requested by the extension with requestPin function.
   * @enum {}
   */
  declare var certificateProvider$PinRequestType: {
    PIN: "PIN",
    PUK: "PUK"
  };

  /**
   * The types of errors that can be presented to the user through the requestPin function.
   * @enum {}
   */
  declare var certificateProvider$PinRequestErrorType: {
    INVALID_PIN: "INVALID_PIN",
    INVALID_PUK: "INVALID_PUK",
    MAX_ATTEMPTS_EXCEEDED: "MAX_ATTEMPTS_EXCEEDED",
    UNKNOWN_ERROR: "UNKNOWN_ERROR"
  };

  declare interface certificateProvider$CertificateInfo {
    /**
     * Must be the DER encoding of a X.509 certificate. Currently, only
     * certificates of RSA keys are supported.
     */
    certificate?: ArrayBuffer;

    /**
     * Must be set to all hashes supported for this certificate. This app
     * will only be asked for signatures of digests calculated with one of these
     * hash algorithms. This should be in order of decreasing hash preference.
     * @see Hash
     */
    supportedHashes?: certificateProvider$Hash[];
  }

  declare interface certificateProvider$SignRequest {
    /**
     * The unique ID to be used by the app should it need to call a method
     * that requires it, e.g. requestPin.
     */
    signRequestId: chrome$integer;

    /**
     * The digest that must be signed
     */
    digest: ArrayBuffer;

    /**
     * Refers to the hash algorithm that was used to create *digest*.
     */
    hash: certificateProvider$Hash;

    /**
     * The DER encoding of a X.509 certificate. The app must sign
     * *digest* using the associated private key.
     */
    certificate: ArrayBuffer;
  }

  declare interface certificateProvider$RequestPinDetails {
    /**
     * The ID given by Chrome in SignRequest.
     */
    signRequestId: number;

    /**
     * The type of code requested. Default is PIN.
     * @see PinRequestType
     */
    requestType?: chrome$ToStringLiteral<typeof PinRequestType>;

    /**
     * The error template displayed to the user. This should be set if the
     * previous request failed, to notify the user of the failure reason.
     * @see PinRequestErrorType
     */
    errorType?: chrome$ToStringLiteral<typeof PinRequestErrorType>;

    /**
     * The number of attempts left. This is provided so that any UI can present
     * this information to the user. Chrome is not expected to enforce this,
     * instead stopPinRequest should be called by the app with
     * errorType = MAX_ATTEMPTS_EXCEEDED when the number of pin requests is
     * exceeded.
     */
    attemptsLeft?: number;
  }

  declare interface certificateProvider$StopRequestPinDetails {
    /**
     * The ID given by Chrome in SignRequest
     */
    signRequestId: number;

    /**
     * The error template. If present it is displayed to user. Intended to
     * contain the reason for stopping the flow if it was caused by an error,
     * e.g. MAX_ATTEMPTS_EXCEEDED.
     * @see PinRequestErrorType
     */
    errorType?: chrome$ToStringLiteral<typeof PinRequestErrorType>;
  }

  declare interface certificateProvider$PinResponseDetails {
    userInput?: string;
  }

  /**
 * Requests the PIN from the user. Only one ongoing request at a time is
 * allowed. The requests issued while another flow is ongoing are rejected.
 * It's the apps's responsibility to try again later if another flow is
 * in progress.
 * @param details Contains the details about the requested dialog.
 * @param callback Is called when the dialog is resolved with the user input, or
when the dialog request finishes unsuccessfully (e.g. the dialog was
canceled by the user or was not allowed to be shown).
 */
  declare function certificateProvider$requestPin(
    details: certificateProvider$RequestPinDetails,
    callback: (details?: certificateProvider$PinResponseDetails) => void
  ): void;

  /**
 * @description Stops the pin request started by the *requestPin* function.
 * @param details Contains the details about the reason for stopping the request flow.
 * @param callback To be used by Chrome to send to the app the status from
their request to close PIN dialog for user.
 */
  declare function certificateProvider$stopPinRequest(
    details: certificateProvider$StopRequestPinDetails,
    callback: () => void
  ): void;

  /**
   * This event fires every time the browser requests the current list of
   * certificates provided by this app. The app must call *reportCallback*
   * exactly once with the current list of certificates.
   */
  declare var certificateProvider$onCertificatesRequested: chrome$events.events$Event<
    (
      certificates: certificateProvider$CertificateInfo[],
      callback: (rejectedCertificates: ArrayBuffer[]) => void
    ) => any
  >;

  /**
   * This event fires every time the browser needs to sign
   * a message using a certificate provided by this app
   * in reply to an *onCertificatesRequested* event.
   *
   * The app must sign the data in *request* using the
   * appropriate algorithm and private key and return it by calling
   * *reportCallback*. *reportCallback* must be called exactly once.
   * @param request : Contains the details about the sign request.
   */
  declare var certificateProvider$onSignDigestRequested: chrome$events.events$Event<
    (
      signRequest: certificateProvider$SignRequest,
      signCallback: (signature?: ArrayBuffer) => void
    ) => any
  >;

  declare var npm$namespace$clipboard: {
    setImageData: typeof clipboard$setImageData,
    DataItemType: typeof clipboard$DataItemType,
    onClipboardDataChanged: typeof clipboard$onClipboardDataChanged
  };

  /**
   * Image type
   */
  declare type clipboard$ImageType = "png" | "jpeg";

  /**
   * @enum {}
   */
  declare var clipboard$DataItemType: {
    TEXT_PLAIN: "textPlain",
    TEXT_HTML: "textHtml"
  };

  declare interface clipboard$AdditionalItems {
    /**
     * Type of the additional data item.
     * @see DataItemType
     */
    type: chrome$ToStringLiteral<typeof DataItemType>;

    /**
     * Content of the additional data item.
     * Either the plain text string if *type* is 'textPlain' or
     * markup string if *type* is 'textHtml'.
     * The data can not exceed 2MB.
     */
    data: string;
  }

  /**
 * **Dev channel only.**
 * Sets image data to clipboard
 * @param imageData The encoded image data. *Since Chrome 71. Warning: this is the current Dev channel.*
 * @param type The type of image being passed. *Since Chrome 71. Warning: this is the current Dev channel.*
 * @param additionalItems Additional data items for describing image data.
The callback is called with chrome.runtime.lastError set to error code if there is an error.
Requires clipboard and clipboardWrite permissions.
*Since Chrome 71. Warning: this is the current Dev channel.*
 * @param callback
 */
  declare function clipboard$setImageData(
    imageData: ArrayBuffer,
    type: clipboard$ImageType,
    additionalItems?: clipboard$AdditionalItems,
    callback?: () => void
  ): void;

  /**
   * **Dev channel only.**
   * Fired when clipboard data changes.
   * Requires clipboard and clipboardRead permissions for adding listener to
   * chrome.clipboard.onClipboardDataChanged event. After this event fires, the
   * clipboard data is available by calling document.execCommand('paste').
   */
  declare var clipboard$onClipboardDataChanged: chrome$events.events$Event<
    () => void
  >;

  declare var npm$namespace$commands: {
    getAll: typeof commands$getAll,
    onCommand: typeof commands$onCommand
  };
  declare interface commands$Command {
    /**
     * The name of the command
     */
    name?: string;

    /**
     * The command description
     */
    description?: string;

    /**
     * The shortcut active for this command, or blank if not active.
     */
    shortcut?: string;
  }

  declare type commands$CommandEvent = {} & undefined.events$Event<
    (command: string) => void
  >;

  /**
   * Returns all the registered commands for this app and their shortcut (if active).
   * @param callback Called to return the registered commands.
   */
  declare function commands$getAll(
    callback: (commands: commands$Command[]) => void
  ): void;

  /**
   * Fired when a registered command is activated using a keyboard shortcut.
   */
  declare var commands$onCommand: commands$CommandEvent;

  declare var npm$namespace$contextMenus: {
    create: typeof contextMenus$create,
    update: typeof contextMenus$update,
    remove: typeof contextMenus$remove,
    removeAll: typeof contextMenus$removeAll,
    ACTION_MENU_TOP_LEVEL_LIMIT: typeof contextMenus$ACTION_MENU_TOP_LEVEL_LIMIT,
    ContextType: typeof contextMenus$ContextType,
    ItemType: typeof contextMenus$ItemType,
    onClicked: typeof contextMenus$onClicked
  };

  /**
 * @since Chrome 38.
 * @default 6
 * @description The maximum number of top level extension items that
can be added to an app's action context menu.
Any items beyond this limit will be ignored.
 */
  declare var contextMenus$ACTION_MENU_TOP_LEVEL_LIMIT: chrome$integer;

  /**
   * The different contexts a menu can appear in.
   * Specifying 'all' is equivalent to the combination of all other contexts except for 'launcher'.
   * The 'launcher' context is only supported by apps and is used to add menu items to the context menu that appears when clicking on the app icon in the launcher/taskbar/dock/etc.
   * Different platforms might put limitations on what is actually supported in a launcher context menu.
   */
  declare var contextMenus$ContextType: {
    ALL: "all",
    PAGE: "page",
    FRAME: "frame",
    SELECTION: "selection",
    LINK: "link",
    EDITABLE: "editable",
    IMAGE: "image",
    VIDEO: "video",
    AUDIO: "audio",
    LAUNCHER: "launcher",
    BROWSER_ACTION: "browser_action",
    PAGE_ACTION: "page_action"
  };

  /**
   * The type of menu item.
   */
  declare var contextMenus$ItemType: {
    NORMAL: "normal",
    CHECKBOX: "checkbox",
    RADIO: "radio",
    SEPARATOR: "separator"
  };

  declare type contextMenus$MediaType = "image" | "video" | "audio";

  declare interface contextMenus$OnClickData {
    /**
     * The ID of the menu item that was clicked.
     * @since Chrome 35.
     */
    menuItemId: chrome$integer | string;

    /**
     * The parent ID, if any, for the item clicked.
     * @since Chrome 35.
     */
    parentMenuItemId?: chrome$integer | string;

    /**
     * One of 'image', 'video', or 'audio' if the context menu was
     * activated on one of these types of elements.
     * @since Chrome 35.
     */
    mediaType?: contextMenus$MediaType;

    /**
     * If the element is a link, the URL it points to.
     * @since Chrome 35.
     */
    linkUrl?: string;

    /**
     * Will be present for elements with a 'src' URL.
     * @since Chrome 35.
     */
    srcUrl?: string;

    /**
     * The URL of the page where the menu item was clicked.
     * This property is not set if the click occured in a
     * context where there is no current page, such as in
     * a launcher context menu.
     * @since Chrome 35.
     */
    pageUrl: string;

    /**
     * The URL of the frame of the element where the context menu was clicked,
     * if it was in a frame.
     * @since Chrome 35.
     */
    frameUrl?: string;

    /**
     * The ID of the frame of the element where the context menu was clicked,
     * if it was in a frame.
     * @since Chrome 35.
     */
    frameId?: chrome$integer;

    /**
     * The text for the context selection, if any.
     * @since Chrome 35.
     */
    selectionText?: string;

    /**
     * A flag indicating whether the element is editable (text input, textarea, etc.).
     * @since Chrome 35.
     */
    editable: boolean;

    /**
     * A flag indicating the state of a checkbox or radio item before it was clicked.
     * @since Chrome 35.
     */
    wasChecked?: boolean;

    /**
     * A flag indicating the state of a checkbox or radio item after it is clicked.
     * @since Chrome 35.
     */
    checked?: boolean;
  }

  declare interface contextMenus$CreateProperties {
    /**
     * The type of menu item.
     * @default 'normal' - Defaults to 'normal' if not specified.
     * @see ItemType
     */
    type?: chrome$ToStringLiteral<typeof ItemType>;

    /**
     * The unique ID to assign to this item.
     * Mandatory for event pages.
     * Cannot be the same as another ID for this app.
     */
    id?: string;

    /**
     * The text to be displayed in the item;
     * this is required unless type is 'separator'.
     * When the context is 'selection', you can use
     * %s within the string to show the selected text.
     * For example, if this parameter's value is
     * 'Translate '%s' to Pig Latin' and the user
     * selects the word 'cool', the context menu
     * item for the selection is 'Translate 'cool'
     * to Pig Latin'.
     */
    title?: string;

    /**
     * The initial state of a checkbox or radio item:
     * true for selected and false for unselected.
     * Only one radio item can be selected at a time
     * in a given group of radio items.
     */
    checked?: boolean;

    /**
     * List of contexts this menu item will appear in.
     * @default ['page'] - Defaults to ['page'] if not specified.
     * @see ContextType
     */
    contexts?: chrome$ToStringLiteral<typeof ContextType>[];

    /**
     * Whether the item is visible in the menu.
     * @since Chrome 62.
     */
    visible?: boolean;

    /**
     * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead, they should register a listener for chrome.contextMenus.onClicked.
     * @param info Information sent when a context menu item is clicked.
     */
    onclick?: (info: contextMenus$OnClickData) => void;

    /**
     * The ID of a parent menu item; this makes the item a child of a previously added item.
     */
    parentId?: chrome$integer | string;

    /**
     * Lets you restrict the item to apply only to documents whose URL
     * matches one of the given patterns. (This applies to frames as well.)
     * For details on the format of a pattern, see Match Patterns.
     */
    documentUrlPatterns?: string[];

    /**
     * Similar to documentUrlPatterns,
     * but lets you filter based on the src attribute
     * of img/audio/video tags and the href of anchor tags.
     */
    targetUrlPatterns?: string[];

    /**
     * Whether this context menu item is enabled or disabled.
     * @default true
     */
    enabled?: boolean;
  }

  declare interface contextMenus$UpdateProperties {
    /**
     * @see ItemType
     */
    type?: chrome$ToStringLiteral<typeof ItemType>;
    title?: string;
    checked?: boolean;

    /**
     * @see ContextType
     */
    contexts?: chrome$ToStringLiteral<typeof ContextType>[];

    /**
     * Whether the item is visible in the menu.
     * @since Chrome 62.
     */
    visible?: boolean;

    /**
     * Information sent when a context menu item is clicked.
     * @since Chrome 44
     */
    onclick?: (info: contextMenus$OnClickData) => void;

    /**
     * Note: You cannot change an item to be a child of one of its own descendants.
     */
    parentId?: chrome$integer | string;
    documentUrlPatterns?: string[];
    targetUrlPatterns?: string[];
    enabled?: boolean;
  }

  declare type contextMenus$MenuClickedEvent = {} & undefined.events$Event<
    (info: contextMenus$OnClickData) => void
  >;

  /**
   * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).
   * @param callback Called when the item has been created in the browser. If there were any problems creating the item, details will be available in chrome.runtime.lastError.
   */
  declare function contextMenus$create(
    createProperties: contextMenus$CreateProperties,
    callback?: () => void
  ): void;

  /**
   * Updates a previously created context menu item.
   * @param id The ID of the item to update.
   * @param updateProperties The properties to update. Accepts the same values as the create function.
   * @param callback Called when the context menu has been updated.
   */
  declare function contextMenus$update(
    id: chrome$integer | string,
    updateProperties: contextMenus$UpdateProperties,
    callback?: () => void
  ): void;

  /**
   * Removes a context menu item.
   * @param menuItemId The ID of the context menu item to remove.
   * @param callback Called when the context menu has been removed.
   */
  declare function contextMenus$remove(
    menuItemId: chrome$integer | string,
    callback?: () => void
  ): void;

  /**
   * Removes all context menu items added by this app.
   * @param callback Called when removal is complete.
   */
  declare function contextMenus$removeAll(callback?: () => void): void;

  /**
   * Fired when a context menu item is clicked.
   */
  declare var contextMenus$onClicked: contextMenus$MenuClickedEvent;

  declare var npm$namespace$desktopCapture: {
    chooseDesktopMedia: typeof desktopCapture$chooseDesktopMedia,
    cancelChooseDesktopMedia: typeof desktopCapture$cancelChooseDesktopMedia,
    DesktopCaptureSourceType: typeof desktopCapture$DesktopCaptureSourceType
  };
  declare var desktopCapture$DesktopCaptureSourceType: {
    SCREEN: "screen",
    WINDOW: "window",
    TAB: "tab",
    AUDIO: "audio"
  };

  /**
 * Shows desktop media picker UI with the specified set of sources.
 * @param sources Set of sources that should be shown to the user.
 * @param callback Provides an opaque string that can be passed to getUserMedia() API to generate media stream that corresponds to the source selected by the user.
If user didn't select any source (i.e. canceled the prompt) then the callback is called with an empty streamId.
The created streamId can be used only once and expires after a few seconds when it is not used.
 * @return Request ID to be used by cancelChooseDesktopMedia
 */
  declare function desktopCapture$chooseDesktopMedia(
    sources: chrome$ToStringLiteral<typeof DesktopCaptureSourceType>[],
    callback: (streamId: string) => void
  ): chrome$integer;

  /**
   * Hides desktop media picker dialog shown by chooseDesktopMedia().
   * @param desktopMediaRequestId Id returned by chooseDesktopMedia()
   */
  declare function desktopCapture$cancelChooseDesktopMedia(
    desktopMediaRequestId: chrome$integer
  ): void;

  declare var npm$namespace$diagnostics: {
    sendPacket: typeof diagnostics$sendPacket
  };

  /**
   * @todo TODO PROPER DOCS
   */
  declare function diagnostics$sendPacket(
    options: Object,
    callback: () => void
  ): void;

  declare var npm$namespace$displaySource: {
    ErrorType: typeof displaySource$ErrorType,
    SinkState: typeof displaySource$SinkState,
    AuthenticationMethod: typeof displaySource$AuthenticationMethod,
    getAvailableSinks: typeof displaySource$getAvailableSinks,
    requestAuthentication: typeof displaySource$requestAuthentication,
    startSession: typeof displaySource$startSession,
    terminateSession: typeof displaySource$terminateSession,
    onSinksUpdated: typeof displaySource$onSinksUpdated,
    onSessionTerminated: typeof displaySource$onSessionTerminated,
    onSessionErrorOccured: typeof displaySource$onSessionErrorOccured
  };

  /**
 * @enum {}
 * @description *'connection_error'**
The connection with sink cannot be established or has dropped unexpectedly.

**'capabilities_negotiation_error'**
The capabilities of this Display Source and the connected
sink do not fit (e.g. the sink cannot play the media content of
the formats given by the source).

**'media_pipeline_error'**
There was an error in media pipeline: while encoding, packetizing or
sending the media content.

**'timeout_error'**
The sink became unresponsive.

**'unknown_error'**
Unspecified error.
 */
  declare var displaySource$ErrorType: {
    CONNECTION_ERROR: "connection_error",
    CAPABILITIES_NEGOTIATION_ERROR: "capabilities_negotiation_error",
    MEDIA_PIPELINE_ERROR: "media_pipeline_error",
    TIMEOUT_ERROR: "timeout_error",
    UNKNOWN_ERROR: "unknown_error"
  };

  /**
 * @enum {}
 * @description *'connected'**
Connected using this Display Source (i.e., there is an active session)

**'connecting'**
In process of connection to this Display Source

**'disconnected'**
Disconnected from this Display Source
 */
  declare var displaySource$SinkState: {
    CONNECTED: "Connected",
    CONNECTING: "Connecting",
    DISCONNECTED: "Disconnected"
  };

  /**
 * @enum {}
 * @description *'PBC'**
Push Button Config authentication method.

**'PIN'**
PIN authentication method.
 */
  declare var displaySource$AuthenticationMethod: {
    PBC: "PBC",
    PIN: "PIN"
  };

  declare interface displaySource$ErrorInfo {
    /**
     * @see ErrorType
     */
    type: chrome$ToStringLiteral<typeof ErrorType>;
    description?: string;
  }

  declare interface displaySource$SinkInfo {
    /**
     * Id of the sink. It is guaranteed to be unique during the browser session.
     */
    id: chrome$integer;

    /**
     * Human readable name of the sink.
     */
    name: string;

    /**
     * State of the sink.
     * @see SinkState
     */
    state: chrome$ToStringLiteral<typeof SinkState>;
  }

  declare interface displaySource$AuthenticationInfo {
    /**
     * Authentication method.
     * @see AuthenticationMethod
     */
    method?: chrome$ToStringLiteral<typeof AuthenticationMethod>;

    /**
     * Authentication data (e.g. PIN value).
     */
    data?: string;
  }

  declare interface displaySource$StartSessionInfo {
    sinkId: chrome$integer;
    authenticationInfo?: displaySource$AuthenticationInfo;
    audioTrack?: { [key: string]: any };
    videoTrack?: { [key: string]: any };
  }

  declare var displaySource$getAvailableSinks: Function;

  declare var displaySource$requestAuthentication: Function;

  declare var displaySource$startSession: Function;

  declare var displaySource$terminateSession: Function;

  declare var displaySource$onSinksUpdated: chrome$events.events$Event<any>;

  declare var displaySource$onSessionTerminated: chrome$events.events$Event<any>;

  declare var displaySource$onSessionErrorOccured: chrome$events.events$Event<any>;

  declare var npm$namespace$dns: {
    resolve: typeof dns$resolve
  };
  declare interface dns$ResolveCallbackResolveInfo {
    /**
     * The result code. Zero indicates success.
     */
    resultCode: chrome$integer;

    /**
     * A string representing the IP address literal.
     * Supplied only if resultCode indicates success.
     * Note that we presently return only IPv4 addresses.
     */
    address?: string;
  }

  /**
   * Resolves the given hostname or IP address literal.
   * @param hostname The hostname to resolve.
   * @param callback Called when the resolution operation completes.
   */
  declare function dns$resolve(
    hostname: string,
    callback: (resolveInfo: dns$ResolveCallbackResolveInfo) => void
  ): void;

  declare var npm$namespace$documentScan: {
    scan: typeof documentScan$scan
  };
  declare interface documentScan$DocumentScanOptions {
    /**
     * The MIME types that are accepted by the caller.
     */
    mimeTypes?: string[];

    /**
     * The number of scanned images allowed (defaults to 1).
     */
    maxImages?: chrome$integer;
  }

  declare interface documentScan$DocumentScanCallbackArg {
    /**
     * The data image URLs in a form that can be passed as the 'src' value to an image tag.
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
   */
  declare function documentScan$scan(
    options: documentScan$DocumentScanOptions,
    callback: (result: documentScan$DocumentScanCallbackArg) => void
  ): void;

  declare var npm$namespace$deviceAttributes: {
    getDirectoryDeviceId: typeof deviceAttributes$getDirectoryDeviceId,
    getDeviceSerialNumber: typeof deviceAttributes$getDeviceSerialNumber,
    getDeviceAssetId: typeof deviceAttributes$getDeviceAssetId,
    getDeviceAnnotatedLocation: typeof deviceAttributes$getDeviceAnnotatedLocation
  };

  /**
 * @description Fetches the value of the device identifier of the directory API,
that is generated by the server and identifies the cloud record
of the device for querying in the cloud directory API.
If the current user is not affiliated, returns an empty string.
 * @param callback Called with the device identifier of the directory API when received.
 */
  declare function deviceAttributes$getDirectoryDeviceId(
    callback: (deviceId: string) => void
  ): void;

  /**
 * @since Chrome 66.
 * @description Fetches the device's serial number.
Please note the purpose of this API is to administrate the device
(e.g. generating Certificate Sign Requests for device-wide certificates).
This API may not be used for tracking devices without the consent of the device's administrator.
If the current user is not affiliated, returns an empty string.
 * @param callback Called with the serial number of the device.
 */
  declare function deviceAttributes$getDeviceSerialNumber(
    callback: (serialNumber: string) => void
  ): void;

  /**
 * @since Chrome 66.
 * @description Fetches the administrator-annotated Asset Id.
If the current user is not affiliated or no Asset Id has been set by the administrator, returns an empty string.
 * @param callback Called with the Asset ID of the device.
 */
  declare function deviceAttributes$getDeviceAssetId(
    callback: (assetId: string) => void
  ): void;

  /**
 * @since Chrome 66.
 * @description Fetches the administrator-annotated Location.
If the current user is not affiliated or no Annotated Location has been set by the administrator, returns an empty string.
 * @param callback Called with the Annotated Location of the device.
 */
  declare function deviceAttributes$getDeviceAnnotatedLocation(
    callback: (annotatedLocation: string) => void
  ): void;

  declare var npm$namespace$platformKeys: {
    getTokens: typeof platformKeys$getTokens,
    getCertificates: typeof platformKeys$getCertificates,
    importCertificate: typeof platformKeys$importCertificate,
    removeCertificate: typeof platformKeys$removeCertificate,
    challengeMachineKey: typeof platformKeys$challengeMachineKey,
    challengeUserKey: typeof platformKeys$challengeUserKey
  };
  declare interface platformKeys$Token {
    /**
     * Uniquely identifies this Token.
     * Static IDs are 'user' and 'system', referring to the platform's user-specific and the system-wide hardware token, respectively.
     * Any other tokens (with other identifiers) might be returned by enterprise.platformKeys.getTokens.
     */
    id: string;

    /**
     * Implements the WebCrypto's SubtleCrypto interface.
     * The cryptographic operations, including key generation, are hardware-backed.
     * Only non-extractable RSASSA-PKCS1-V1_5 keys with modulusLength up to 2048 can be generated.
     * Each key can be used for signing data at most once.
     * Keys generated on a specific Token cannot be used with any other Tokens,
     * nor can they be used with window.crypto.subtle. Equally,
     * Key objects created with window.crypto.subtle cannot be used with this interface.
     */
    platformKeys$subtleCrypto: SubtleCrypto;
  }

  /**
   * Returns the available Tokens.
   * In a regular user's session the list will always contain the user's token with id 'user'.
   * If a system-wide TPM token is available, the returned list will also contain the system-wide token with id 'system'.
   * The system-wide token will be the same for all sessions on this device (device in the sense of e.g. a Chromebook).
   * @param callback Invoked by getTokens with the list of available Tokens.
   */
  declare function platformKeys$getTokens(
    callback: (tokens: platformKeys$Token[]) => void
  ): void;

  /**
   * Returns the list of all client certificates available from the given token.
   * Can be used to check for the existence and expiration of client certificates that are usable for a certain authentication.
   * @param tokenId The id of a Token returned by getTokens.
   * @param callback Called back with the list of the available certificates.
   */
  declare function platformKeys$getCertificates(
    tokenId: string,
    callback: (certificates: ArrayBuffer[]) => void
  ): void;

  /**
   * Imports certificate to the given token if the certified key is already stored in this token.
   * After a successful certification request, this function should be used to store the obtained
   * certificate and to make it available to the operating system and browser for authentication.
   * @param tokenId The id of a Token returned by getTokens.
   * @param certificate The DER encoding of a X.509 certificate.
   * @param callback Called back when this operation is finished.
   */
  declare function platformKeys$importCertificate(
    tokenId: string,
    certificate: ArrayBuffer,
    callback: () => void
  ): void;

  /**
   * Removes certificate from the given token if present.
   * Should be used to remove obsolete certificates so that they are not
   * considered during authentication and do not clutter the certificate choice.
   * Should be used to free storage in the certificate store.
   * @param tokenId The id of a Token returned by getTokens.
   * @param certificate The DER encoding of a X.509 certificate.
   * @param callback Called back when this operation is finished.
   */
  declare function platformKeys$removeCertificate(
    tokenId: string,
    certificate: ArrayBuffer,
    callback: () => void
  ): void;

  /**
 * @since Chrome 50.
 * @description Challenges a hardware-backed Enterprise Machine Key and emits the response as part of a remote attestation protocol.
Only useful on Chrome OS and in conjunction with the Verified Access Web API which both issues challenges and verifies responses.
A successful verification by the Verified Access Web API is a strong signal of all of the following:
- The current device is a legitimate Chrome OS device.
- The current device is managed by the domain specified during verification.
- The current signed-in user is managed by the domain specified during verification.
- The current device state complies with enterprise device policy.
For example, a policy may specify that the device must not be in developer mode.
- Any device identity emitted by the verification is tightly bound to the hardware of the current device.
This function is highly restricted and will fail if the current device is not managed,
the current user is not managed, or if this operation has not explicitly been enabled
for the caller by enterprise device policy. The Enterprise Machine Key does not reside
in the 'system' token and is not accessible by any other API.
 * @param challenge A challenge as emitted by the Verified Access Web API.
 * @param callback Called back with the challenge response.
 */
  declare function platformKeys$challengeMachineKey(
    challenge: ArrayBuffer,
    callback: (response: ArrayBuffer) => void
  ): void;

  /**
 * @since *Since Chrome 59.** - Note: the parameter 'registerKey' requires at least Chrome 59
 * @description Challenges a hardware-backed Enterprise Machine Key and emits the response as part of a remote attestation protocol.
Only useful on Chrome OS and in conjunction with the Verified Access Web API which both issues challenges and verifies responses.
A successful verification by the Verified Access Web API is a strong signal of all of the following:
- The current device is a legitimate Chrome OS device.
- The current device is managed by the domain specified during verification.
- The current signed-in user is managed by the domain specified during verification.
- The current device state complies with enterprise device policy.
For example, a policy may specify that the device must not be in developer mode.
- Any device identity emitted by the verification is tightly bound to the hardware of the current device.
This function is highly restricted and will fail if the current device is not managed,
the current user is not managed, or if this operation has not explicitly been enabled
for the caller by enterprise device policy. The Enterprise Machine Key does not reside
in the 'system' token and is not accessible by any other API.
 * @param challenge A challenge as emitted by the Verified Access Web API.
 * @param registerKey If set, the current Enterprise Machine Key is registered with the 'system' token and relinquishes the Enterprise Machine Key role.
The key can then be associated with a certificate and used like any other signing key. This key is 2048-bit RSA.
Subsequent calls to this function will then generate a new Enterprise Machine Key.
 * @param callback Called back with the challenge response.
 */
  declare function platformKeys$challengeMachineKey(
    challenge: ArrayBuffer,
    registerKey: boolean,
    callback: (response: ArrayBuffer) => void
  ): void;

  /**
 * @since Chrome 50.
Challenges a hardware-backed Enterprise User Key and emits the response as part of a remote attestation protocol.
Only useful on Chrome OS and in conjunction with the Verified Access Web API which both issues challenges and verifies responses.
A successful verification by the Verified Access Web API is a strong signal of all of the following:
- The current device is a legitimate Chrome OS device.
- The current device is managed by the domain specified during verification.
- The current signed-in user is managed by the domain specified during verification.
- The current device state complies with enterprise user policy.
For example, a policy may specify that the device must not be in developer mode.
- The public key emitted by the verification is tightly bound to the hardware of the current device and to the current signed-in user.
This function is highly restricted and will fail if the current device is not managed, the current user is not managed,
or if this operation has not explicitly been enabled for the caller by enterprise user policy.
The Enterprise User Key does not reside in the 'user' token and is not accessible by any other API.
 * @param challenge A challenge as emitted by the Verified Access Web API.
 * @param registerKey If set, the current Enterprise User Key is registered with the 'user' token and relinquishes the Enterprise User Key role.
The key can then be associated with a certificate and used like any other signing key.
This key is 2048-bit RSA. Subsequent calls to this function will then generate a new Enterprise User Key.
 * @param callback Called back with the challenge response.
 */
  declare function platformKeys$challengeUserKey(
    challenge: ArrayBuffer,
    registerKey: boolean,
    callback: (response: ArrayBuffer) => void
  ): void;

  /**
   * Filters URLs for constious criteria. See event filtering. All criteria are case sensitive.
   */
  declare interface events$UrlFilter {
    /**
     * Matches if the host name of the URL contains a specified string.
     * To test whether a host name component has a prefix 'foo',
     * use hostContains: '.foo'. This matches 'www.foobar.com' and
     * 'foo.com', because an implicit dot is added at the beginning of
     * the host name. Similarly, hostContains can be used to match
     * against component suffix ('foo.') and to exactly match against
     * components ('.foo.'). Suffix- and exact-matching for the last
     * components need to be done separately using hostSuffix, because
     * no implicit dot is added at the end of the host name.
     */
    hostContains?: string;

    /**
     * Matches if the host name of the URL is equal to a specified string.
     */
    hostEquals?: string;

    /**
     * Matches if the host name of the URL starts with a specified string.
     */
    hostPrefix?: string;

    /**
     * Matches if the host name of the URL ends with a specified string.
     */
    hostSuffix?: string;

    /**
     * Matches if the path segment of the URL contains a specified string.
     */
    pathContains?: string;

    /**
     * Matches if the path segment of the URL starts with a specified string.
     */
    pathEquals?: string;

    /**
     * Matches if the path segment of the URL ends with a specified string.
     */
    pathPrefix?: string;

    /**
     * Matches if the path segment of the URL is equal to a specified string.
     */
    pathSuffix?: string;

    /**
     * Matches if the query segment of the URL contains a specified string.
     */
    queryContains?: string;

    /**
     * Matches if the query segment of the URL is equal to a specified string.
     */
    queryEquals?: string;

    /**
     * Matches if the query segment of the URL starts with a specified string.
     */
    queryPrefix?: string;

    /**
     * Matches if the query segment of the URL ends with a specified string.
     */
    querySuffix?: string;

    /**
     * Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.
     */
    urlContains?: string;

    /**
     * Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.
     */
    urlEquals?: string;

    /**
     * Matches if the URL (without fragment identifier) matches a specified regular expression.
     * Port numbers are stripped from the URL if they match the default port number.
     * The regular expressions use the RE2 syntax.
     * @see [RE2 syntax docs]{@link https://github.com/google/re2/blob/master/doc/syntax.txt}
     */
    urlMatches?: string;

    /**
     * Matches if the URL without query segment and fragment identifier matches a specified regular expression.
     * Port numbers are stripped from the URL if they match the default port number.
     * The regular expressions use the RE2 syntax.
     * @see [RE2 syntax docs]{@link https://github.com/google/re2/blob/master/doc/syntax.txt}
     * @since Chrome 28.
     */
    originAndPathMatches?: string;

    /**
     * Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.
     */
    urlPrefix?: string;

    /**
     * Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.
     */
    urlSuffix?: string;

    /**
     * Matches if the scheme of the URL is equal to any of the schemes specified in the array.
     */
    schemes?: string[];

    /**
     * Matches if the port of the URL is contained in any of the specified port lists.
     * For example [80, 443, [1000, 1200]] matches all requests on port 80, 443 and in the range 1000-1200.
     */
    ports?: Array<chrome$integer | chrome$integer[]>;
  }

  /**
   * An object which allows the addition and removal of listeners for a Chrome event.
   */
  declare interface events$Event<T: Function> {
    /**
     * Registers an event listener callback to an event.
     * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
     */
    addListener(callback: T): void;

    /**
 * Returns currently registered rules.
 * @param callback Called with registered rules.
Parameter *rules*: Rules that were registered, the optional parameters are filled with values.
 */
    getRules(callback: (rules: events$Rule[]) => void): void;

    /**
 * Returns currently registered rules.
 * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are returned.
 * @param callback Called with registered rules.
Parameter *rules*: Rules that were registered, the optional parameters are filled with values.
 */
    getRules(
      ruleIdentifiers: string[],
      callback: (rules: events$Rule[]) => void
    ): void;

    /**
     * Has this event this provided listener?
     * @param listener Listener whose registration status shall be tested.
     * @return If it has the provided listener
     */
    hasListener(callback: T | Function): boolean;

    /**
 * Unregisters currently registered rules.
 * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are unregistered.
 * @param callback Called when rules were unregistered.
If you specify the callback parameter, it should be a function that looks like this:
function() {...};
 */
    removeRules(ruleIdentifiers?: string[], callback?: () => void): void;

    /**
     * Unregisters currently registered rules.
     * @param callback Called when rules were unregistered.
     */
    removeRules(callback?: () => void): void;

    /**
 * Registers rules to handle events.
 * @param rules Rules to be registered. These do not replace previously registered rules.
 * @param callback Called with registered rules.
Parameter rules: Rules that were registered, the optional parameters are filled with values.
 */
    addRules(
      rules: events$Rule[],
      callback?: (rules: events$Rule[]) => void
    ): void;

    /**
     * Deregisters an event listener callback from an event.
     * @param callback Listener that shall be unregistered.
     */
    removeListener(callback: T): void;

    /**
     * Has this event listeners?
     */
    hasListeners(): boolean;
  }

  declare interface events$EventFilter {
    [key: string]: string;
  }

  /**
   * An object which allows the addition and removal of listeners for a Chrome event.
   * Also provides the possibility to provide a filter
   * @template Callback function.
   * @template Filter interface, leave this for default
   */
  declare type events$FilteredEvent<T: Function, F = events$EventFilter> = {
    /**
     * Registers an event listener callback to an event.
     * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
     * @param filter Optional key/value dictionary you can provide to filter the events
     */
    addListener(callback: T, filter?: F): void
  } & events$Event<T>;

  /**
   * Description of a declarative rule for handling events.
   * @template Type for conditions array, default: any.
   * @template Type for actions array, default: any.
   */
  declare interface events$Rule<
    T: { [key: string]: any } = any,
    K: { [key: string]: any } = any
  > {
    /**
     * Identifier that allows referencing this rule.
     */
    id?: string;

    /**
     * Tags can be used to annotate rules and perform operations on sets of rules.
     * @since Chrome 28.
     */
    tags?: string[];

    /**
     * List of conditions that can trigger the actions.
     */
    conditions: T[];

    /**
     * List of actions that are triggered if one of the condtions is fulfilled.
     */
    actions: K[];

    /**
     * Optional priority of this rule.
     * @default 100
     */
    priority?: chrome$integer;
  }

  declare interface extensionTypes$ImageDetailsPng {
    /**
     * The format of the resulting image.
     * @default 'jpeg'
     */
    format?: "jpeg";

    /**
     * Controls the quality of the resulting image.
     * As quality is decreased, the resulting image
     * will have more visual artifacts, and the number
     * of bytes needed to store it will decrease.
     */
    quality?: chrome$integer;
  }

  declare interface extensionTypes$ImageDetailsJpeg {
    /**
     * The format of the resulting image.
     */
    format?: "png";
  }

  /**
   * Details about the format and quality of an image.
   */
  declare type extensionTypes$ImageDetails =
    | extensionTypes$ImageDetailsJpeg
    | extensionTypes$ImageDetailsPng;

  /**
   * The soonest that the JavaScript or CSS will be injected into the tab.
   */
  declare type extensionTypes$RunAt =
    | "document_start"
    | "document_end"
    | "document_idle";

  /**
   * @since Chrome 66.
   * @description The origin of injected CSS.
   */
  declare type extensionTypes$CSSOrigin = "author" | "user";

  /**
   * Partial, use these interfaces instead:
   * @see InjectCodeDetails
   * @see InjectFileDetails
   */
  declare interface _internal_$InjectDetailsBase {
    /**
     * If allFrames is true, implies that the JavaScript or CSS should be
     * injected into all frames of current page. By default, it's false
     * and is only injected into the top frame. If true and frameId is set,
     * then the code is inserted in the selected frame and all of its child frames.
     */
    allFrames?: boolean;

    /**
     * The frame where the script or CSS should be injected. Defaults to 0 (the top-level frame).
     * @see [frame ref]{@link https://developer.chrome.com/apps/webNavigation#frame_ids}
     * @since Chrome 50.
     */
    frameId?: chrome$integer;

    /**
     * If matchAboutBlank is true, then the code is also injected in about:blank
     * and about:srcdoc frames if your extension has access to its parent document.
     * Code cannot be inserted in top-level about:-frames. By default it is false.
     */
    matchAboutBlank?: boolean;

    /**
     * The soonest that the JavaScript or CSS will be injected into the tab.
     * @default 'document_idle'
     */
    runAt: extensionTypes$RunAt;

    /**
     * The origin of the CSS to inject.
     * This may only be specified for CSS, not JavaScript.
     * @default 'author'
     * @since Chrome 66.
     */
    cssOrigin: extensionTypes$CSSOrigin;
  }

  declare type extensionTypes$InjectFileDetails = {
    /**
     * JavaScript or CSS file to inject.
     */
    file: string
  } & _internal_$_internal_$InjectDetailsBase;

  declare type extensionTypes$InjectCodeDetails = {
    /**
     * JavaScript or CSS code to inject.
     * **⚠ Warning**
     * Be careful using the code parameter.
     * Incorrect use of it may open your app
     * to cross site scripting attacks.
     * @see [More information]{@link https://en.wikipedia.org/wiki/Cross-site_scripting}
     */
    code: string
  } & _internal_$_internal_$InjectDetailsBase;

  declare var npm$namespace$fileBrowserHandler: {
    selectFile: typeof fileBrowserHandler$selectFile,
    onExecute: typeof fileBrowserHandler$onExecute
  };
  declare type fileBrowserHandler$FileBrowserHandleExecuteId =
    | "ReadOnly"
    | "ReadWrite";

  declare interface fileBrowserHandler$SelectFileParameters {
    /**
     * Suggested name for the file.
     */
    suggestedName: string;

    /**
     * List of file extensions that the selected file can have.
     * The list is also used to specify what files to be shown in the select file dialog.
     * Files with the listed extensions are only shown in the dialog.
     * Extensions should not include the leading '.'.
     * @example ['jpg', 'png']
     */
    allowedFileExtensions?: string[];
  }

  declare interface fileBrowserHandler$SelectionResult {
    /**
     * Selected file entry. It will be null if a file hasn't been selected.
     */
    entry: FileEntry | null;

    /**
     * Whether the file has been selected.
     */
    success: boolean;
  }

  /**
   * Prompts user to select file path under which file should be saved.
   * When the file is selected, file access permission required to use
   * the file (read, write and create) are granted to the caller.
   * The file will not actually get created during the function call,
   * so function caller must ensure its existence before using it.
   * The function has to be invoked with a user gesture.
   * @param params Parameters that will be used while selecting the file.
   * @param callback Function called upon completion.
   */
  declare function fileBrowserHandler$selectFile(
    params: fileBrowserHandler$SelectFileParameters,
    callback: (result: fileBrowserHandler$SelectionResult) => void
  ): void;

  /**
   * Fired when file system action is executed from ChromeOS file browser.
   */
  declare var fileBrowserHandler$onExecute: chrome$events.events$Event<
    (
      id: fileBrowserHandler$FileBrowserHandleExecuteId,
      details: {
        entries: FileEntry[]
      }
    ) => void
  >;

  declare var npm$namespace$fileSystem: {
    getDisplayPath: typeof fileSystem$getDisplayPath,
    getWritableEntry: typeof fileSystem$getWritableEntry,
    isWritableEntry: typeof fileSystem$isWritableEntry,
    chooseEntry: typeof fileSystem$chooseEntry,
    restoreEntry: typeof fileSystem$restoreEntry,
    isRestorable: typeof fileSystem$isRestorable,
    retainEntry: typeof fileSystem$retainEntry,
    requestFileSystem: typeof fileSystem$requestFileSystem,
    getVolumeList: typeof fileSystem$getVolumeList,
    ChildChangeType: typeof fileSystem$ChildChangeType,
    ChooseEntryType: typeof fileSystem$ChooseEntryType,
    onVolumeListChanged: typeof fileSystem$onVolumeListChanged
  };

  /**
   * @enum {}
   */
  declare var fileSystem$ChildChangeType: {
    CREATED: "created",
    REMOVED: "removed",
    CHANGED: "changed"
  };

  /**
   * **openFile**
   *   - Prompts the user to open an existing file and returns a FileEntry on success.
   *     From Chrome 31 onwards, the FileEntry will be writable if the application has
   *     the 'write' permission under 'fileSystem'; otherwise, the FileEntry will be read-only.
   * **openWritableFile**
   *   - Prompts the user to open an existing file and returns a writable FileEntry on success.
   *     Calls using this type will fail with a runtime error if the application doesn't have the
   *     'write' permission under 'fileSystem'.
   * **saveFile**
   *   - Prompts the user to open an existing file or a new file and returns a writable FileEntry
   *     on success. Calls using this type will fail with a runtime error if the application doesn't
   *     have the 'write' permission under 'fileSystem'.
   * **openDirectory**
   *   - Prompts the user to open a directory and returns a DirectoryEntry on success. Calls using
   *     this type will fail with a runtime error if the application doesn't have the 'directory'
   *     permission under 'fileSystem'. If the application has the 'write' permission under
   *     'fileSystem', the returned DirectoryEntry will be writable; otherwise it will be read-only.
   *     New in Chrome 31.
   * @enum {}
   */
  declare var fileSystem$ChooseEntryType: {
    OPEN_FILE: "openFile",
    OPEN_WRITABLE_FILE: "openWritableFile",
    SAVE_FILE: "saveFile",
    OPEN_DIRECTORY: "openDirectory"
  };

  declare interface fileSystem$AcceptOptions {
    /**
     * This is the optional text description for this option.
     * If not present, a description will be automatically generated;
     * typically containing an expanded list of valid extensions (e.g. 'text/html' may expand to '*.html, *.htm').
     */
    description?: string;

    /**
     * Mime-types to accept, e.g. 'image/jpeg' or 'audio/*'. One of mimeTypess must contain at least one valid element.
     */
    mimeTypes?: string[];

    /**
     * Extensions to accept, e.g. 'jpg', 'gif', 'crx'.
     */
    extensions?: string[];
  }

  declare interface fileSystem$ChooseEntryOptionsBase {
    /**
     * Type of the prompt to show.
     * @default 'openFile'
     * @see ChooseEntryType
     * The suggested file name that will be presented to the user as the default name to read or write.
     */
    suggestedName?: string;

    /**
     * The optional list of accept options for this file opener.
     * Each option will be presented as a unique group to the end-user.
     */
    accepts?: fileSystem$AcceptOptions[];

    /**
     * Whether to accept all file types, in addition to the options specified in the accepts argument.
     * If the accepts field is unset or contains no valid entries, this will always be reset to true.
     * @default true
     */
    acceptsAllTypes?: boolean;
  }

  declare type fileSystem$ChooseSaveFileEntryOptions = {
    type: "saveFile"
  } & fileSystem$ChooseEntryOptionsBase;

  declare type fileSystem$ChooseFileEntryOptions = {
    type: "openFile" | "openWritableFile",

    /**
     * Whether to accept multiple files. This is only supported for openFile and openWritableFile.
     * The callback to chooseEntry will be called with a list of entries if this is set to true.
     * Otherwise it will be called with a single Entry.
     * @default false
     * @since Chrome 30.
     */
    acceptsMultiple?: false
  } & fileSystem$ChooseEntryOptionsBase;

  declare type fileSystem$ChooseMultipleFilesEntryOptions = {
    type: "openFile" | "openWritableFile",

    /**
     * Whether to accept multiple files. This is only supported for openFile and openWritableFile.
     * The callback to chooseEntry will be called with a list of entries if this is set to true.
     * Otherwise it will be called with a single Entry.
     * @default false
     * @since Chrome 30.
     */
    acceptsMultiple: true
  } & fileSystem$ChooseEntryOptionsBase;

  declare type fileSystem$ChooseDirectoryEntryOptions = {
    type: "openDirectory"
  } & fileSystem$ChooseEntryOptionsBase;

  declare type fileSystem$ChooseEntryOptions =
    | fileSystem$ChooseFileEntryOptions
    | fileSystem$ChooseSaveFileEntryOptions
    | fileSystem$ChooseMultipleFilesEntryOptions
    | fileSystem$ChooseDirectoryEntryOptions
    | fileSystem$ChooseEntryOptionsBase;

  /**
   * @since Chrome 44.
   */
  declare interface fileSystem$Volume {
    /**
     * The ID of the requested volume.
     */
    volumeId: string;

    /**
     * Whether the requested file system should be writable. The default is read-only.
     * @default false
     */
    writable?: boolean;
  }

  /**
   * @private
   */
  declare type fileSystem$FileEntryCallback<
    T: fileSystem$ChooseEntryOptions,
    E = "There was Conditional Type, use $Call utility type"
  > = (selectedEntries: E) => void;

  /**
   * Get the display path of an Entry object.
   * The display path is based on the full path of the file or directory on the local file system, but may be made more readable for display purposes.
   */
  declare function fileSystem$getDisplayPath(
    entry: FileEntry | DirectoryEntry,
    callback: (displayPath: string) => void
  ): void;

  /**
   * Get a writable Entry from another Entry. This call will fail with a runtime error if the application does not have the 'write' permission under 'fileSystem'.
   * If entry is a DirectoryEntry, this call will fail if the application does not have the 'directory' permission under 'fileSystem'.
   */
  declare function fileSystem$getWritableEntry<T: FileEntry | DirectoryEntry>(
    entry: T,
    callback: (entry: T) => void
  ): void;

  /**
   * Gets whether this Entry is writable or not.
   */
  declare function fileSystem$isWritableEntry(
    entry: FileEntry | DirectoryEntry,
    callback: (isWritable: boolean) => void
  ): void;

  /**
   * Ask the user to choose a file or directory.
   */
  declare function fileSystem$chooseEntry(
    callback: fileSystem$FileEntryCallback<fileSystem$ChooseFileEntryOptions>
  ): void;

  /**
   * Ask the user to choose a file or directory.
   */
  declare function fileSystem$chooseEntry(
    options: fileSystem$ChooseEntryOptionsBase,
    callback: fileSystem$FileEntryCallback<fileSystem$ChooseEntryOptionsBase>
  ): void;

  declare function fileSystem$chooseEntry(
    options: fileSystem$ChooseFileEntryOptions,
    callback: fileSystem$FileEntryCallback<fileSystem$ChooseFileEntryOptions>
  ): void;

  declare function fileSystem$chooseEntry(
    options: fileSystem$ChooseSaveFileEntryOptions,
    callback: fileSystem$FileEntryCallback<fileSystem$ChooseSaveFileEntryOptions>
  ): void;

  declare function fileSystem$chooseEntry(
    options: fileSystem$ChooseMultipleFilesEntryOptions,
    callback: fileSystem$FileEntryCallback<fileSystem$ChooseMultipleFilesEntryOptions>
  ): void;

  declare function fileSystem$chooseEntry(
    options: fileSystem$ChooseDirectoryEntryOptions,
    callback: fileSystem$FileEntryCallback<fileSystem$ChooseDirectoryEntryOptions>
  ): void;

  /**
   * Returns the file entry with the given id if it can be restored. This call will fail with a runtime error otherwise.
   */
  declare function fileSystem$restoreEntry(
    id: string,
    callback: (entry: FileEntry) => void
  ): void;

  /**
   * Returns whether the app has permission to restore the entry with the given id.
   * @since Chrome 29.
   */
  declare function fileSystem$isRestorable(
    id: string,
    callback: (fileSystem$isRestorable: boolean) => void
  ): void;

  /**
   * Returns an id that can be passed to restoreEntry to regain access to a given file entry.
   * Only the 500 most recently used entries are retained, where calls to retainEntry and restoreEntry count as use.
   * If the app has the 'retainEntries' permission under 'fileSystem', entries are retained indefinitely.
   * Otherwise, entries are retained only while the app is running and across restarts.
   * @since Chrome 29.
   */
  declare function fileSystem$retainEntry(
    entry: FileEntry | DirectoryEntry
  ): string;

  /**
 * @requires (Kiosk) Kiosk mode only
 * @requires Permissions: The writable option requires the 'fileSystem': {'write'} permission in the manifest.
Requests access to a file system for a volume represented by options.volumeId.
If options.writable is set to true, then the file system will be writable.
Otherwise, it will be read-only.
For manual-launch kiosk mode, a confirmation dialog will be shown on top of the active app window.
In case of an error, fileSystem will be undefined, and chrome.runtime.lastError will be set.
 * @since Chrome 44.
 */
  declare function fileSystem$requestFileSystem(
    options: fileSystem$Volume,
    callback: (fileSystem: FileSystem) => void
  ): void;

  /**
 * @requires (Kiosk) Chrome OS Kiosk mode only
 * @requires Permissions: The 'fileSystem': {'requestFileSystem'} manifest permission is required.
Returns a list of volumes available for requestFileSystem().
Available to kiosk apps running in the kiosk session only.
In case of an error, volumes will be undefined, and chrome.runtime.lastError will be set.
 * @since Chrome 44.
 */
  declare function fileSystem$getVolumeList(
    callback: (volumes: fileSystem$Volume[]) => void
  ): void;

  /**
   * Called when a list of available volumes is changed.
   * @since Chrome 44.
   */
  declare var fileSystem$onVolumeListChanged: chrome$events.events$Event<
    (object: fileSystem$Volume[]) => void
  >;

  declare var npm$namespace$fileSystemProvider: {
    mount: typeof fileSystemProvider$mount,
    unmount: typeof fileSystemProvider$unmount,
    getAll: typeof fileSystemProvider$getAll,
    get: typeof fileSystemProvider$get,
    notify: typeof fileSystemProvider$notify,
    ProviderError: typeof fileSystemProvider$ProviderError,
    OpenFileMode: typeof fileSystemProvider$OpenFileMode,
    ChangeType: typeof fileSystemProvider$ChangeType,
    CommonActionId: typeof fileSystemProvider$CommonActionId,
    onUnmountRequested: typeof fileSystemProvider$onUnmountRequested,
    onGetMetadataRequested: typeof fileSystemProvider$onGetMetadataRequested,
    onGetActionsRequested: typeof fileSystemProvider$onGetActionsRequested,
    onReadDirectoryRequested: typeof fileSystemProvider$onReadDirectoryRequested,
    onOpenFileRequested: typeof fileSystemProvider$onOpenFileRequested,
    onCloseFileRequested: typeof fileSystemProvider$onCloseFileRequested,
    onReadFileRequested: typeof fileSystemProvider$onReadFileRequested,
    onCreateDirectoryRequested: typeof fileSystemProvider$onCreateDirectoryRequested,
    onDeleteEntryRequested: typeof fileSystemProvider$onDeleteEntryRequested,
    onCreateFileRequested: typeof fileSystemProvider$onCreateFileRequested,
    onCopyEntryRequested: typeof fileSystemProvider$onCopyEntryRequested,
    onMoveEntryRequested: typeof fileSystemProvider$onMoveEntryRequested,
    onTruncateRequested: typeof fileSystemProvider$onTruncateRequested,
    onWriteFileRequested: typeof fileSystemProvider$onWriteFileRequested,
    onAbortRequested: typeof fileSystemProvider$onAbortRequested,
    onConfigureRequested: typeof fileSystemProvider$onConfigureRequested,
    onMountRequested: typeof fileSystemProvider$onMountRequested,
    onAddWatcherRequested: typeof fileSystemProvider$onAddWatcherRequested,
    onRemoveWatcherRequested: typeof fileSystemProvider$onRemoveWatcherRequested,
    onExecuteActionRequested: typeof fileSystemProvider$onExecuteActionRequested
  };

  /**
   * Error codes used by providing extensions in response to requests
   * as well as in case of errors when calling methods of the API.
   * For success, 'OK' must be used.
   */
  declare var fileSystemProvider$ProviderError: {
    OK: "OK",
    FAILED: "FAILED",
    IN_USE: "IN_USE",
    EXISTS: "EXISTS",
    NOT_FOUND: "NOT_FOUND",
    ACCESS_DENIED: "ACCESS_DENIED",
    TOO_MANY_OPENED: "TOO_MANY_OPENED",
    NO_MEMORY: "NO_MEMORY",
    NO_SPACE: "NO_SPACE",
    NOT_A_DIRECTORY: "NOT_A_DIRECTORY",
    INVALID_OPERATION: "INVALID_OPERATION",
    SECURITY: "SECURITY",
    ABORT: "ABORT",
    NOT_A_FILE: "NOT_A_FILE",
    NOT_EMPTY: "NOT_EMPTY",
    INVALID_URL: "INVALID_URL",
    IO: "IO"
  };

  /**
   * Mode of opening a file. Used by onOpenFileRequested.
   */
  declare var fileSystemProvider$OpenFileMode: {
    READ: "READ",
    WRITE: "WRITE"
  };

  /**
   * Type of a change detected on the observed directory.
   */
  declare var fileSystemProvider$ChangeType: {
    CHANGED: "CHANGED",
    DELETED: "DELETED"
  };

  /**
   * List of common actions. 'SHARE' is for sharing files with others.
   * 'SAVE_FOR_OFFLINE' for pinning (saving for offline access).
   * 'OFFLINE_NOT_NECESSARY' for notifying that the file doesn't
   * need to be stored for offline access anymore.
   * Used by onGetActionsRequested and onExecuteActionRequested.
   */
  declare var fileSystemProvider$CommonActionId: {
    SAVE_FOR_OFFLINE: "SAVE_FOR_OFFLINE",
    OFFLINE_NOT_NECESSARY: "OFFLINE_NOT_NECESSARY",
    SHARE: "SHARE"
  };

  declare interface fileSystemProvider$EntryMetadata {
    /**
     * True if it is a directory. Must be provided if requested in options
     */
    isDirectory?: boolean;

    /**
     * Name of this entry (not full path name).
     * Must not contain '/'.
     * For root it must be empty.
     * Must be provided if requested in options.
     */
    name?: string;

    /**
     * File size in bytes. Must be provided if requested in options.
     */
    size?: chrome$double;

    /**
     * The last modified time of this entry.
     */
    modificationTime?: Date;

    /**
     * Mime type for the entry.
     */
    mimeType?: string;

    /**
     * Thumbnail image as a data URI in either PNG, JPEG or WEBP format, at most 32 KB in size.
     * Optional, but can be provided only when explicitly requested
     * by the onGetMetadataRequested event.
     */
    thumbnail?: string;
  }

  declare interface fileSystemProvider$FileSystemInfo {
    /**
     * The identifier of the file system.
     */
    fileSystemId: string;

    /**
     * A human-readable name for the file system.
     */
    displayName: string;

    /**
     * Whether the file system supports operations which may
     * change contents of the file system (such as creating, deleting or writing to files).
     */
    writable: boolean;

    /**
     * The maximum number of files that can be opened at once. If 0, then not limited.
     * @since Chrome 42.
     */
    openedFilesLimit: chrome$integer;

    /**
     * List of currently opened files.
     * @since Chrome 42.
     */
    openedFiles: fileSystemProvider$OpenedFileInfo[];

    /**
     * Whether the file system supports the tag field for observing directories.
     * @since Chrome 45.
     */
    supportsNotifyTag?: boolean;

    /**
     * List of watchers.
     * @since Chrome 45.
     */
    watchers: fileSystemProvider$FileWatchersInfo[];
  }

  declare interface fileSystemProvider$OpenedFileInfo {
    /**
     * A request ID to be be used by consecutive read/write and close requests.
     */
    openRequestId: chrome$integer;

    /**
     * The path of the opened file.
     */
    filePath: string;

    /**
     * Whether the file was opened for reading or writing.
     * @see OpenFileMode
     */
    mode: chrome$ToStringLiteral<typeof OpenFileMode>;
  }

  declare interface fileSystemProvider$FileWatchersInfo {
    /**
     * The path of the entry being observed.
     */
    entryPath: string;

    /**
     * Whether watching should include all child entries recursively.
     * It can be true for directories only.
     */
    recursive: boolean;

    /**
     * Tag used by the last notification for the watcher.
     */
    lastTag?: string;
  }

  /**
   * @since Chrome 45.
   */
  declare interface fileSystemProvider$GetActionsRequestedOptions {
    /**
     * The identifier of the file system related to this operation.
     */
    fileSystemId: string;

    /**
     * The unique identifier of this request.
     */
    requestId: chrome$integer;

    /**
     * The path of the entry to return the list of actions for.
     */
    entryPath: string;
  }

  declare interface fileSystemProvider$Action {
    /**
     * The identifier of the action.
     * Any string or CommonActionId for common actions.
     * @see CommonActionId
     */
    id: chrome$ToStringLiteral<typeof CommonActionId> | string;

    /**
     * The title of the action. It may be ignored for common actions.
     */
    title?: string;
  }

  /**
   * @since Chrome 45.
   */
  declare interface fileSystemProvider$ExecuteActionRequestedOptions {
    /**
     * The identifier of the file system related to this operation.
     */
    fileSystemId: string;

    /**
     * The unique identifier of this request.
     */
    requestId: chrome$integer;

    /**
     * The path of the entry to be used for the action.
     */
    entryPath: string;

    /**
     * The identifier of the action to be executed.
     */
    actionId: string;
  }

  declare interface fileSystemProvider$MountOptions {
    /**
     * The string indentifier of the file system. Must be unique per each extension.
     */
    fileSystemId: string;

    /**
     * A human-readable name for the file system.
     */
    displayName: string;

    /**
     * Whether the file system supports operations which may change contents
     * of the file system (such as creating, deleting or writing to files).
     */
    writable?: boolean;

    /**
     * The maximum number of files that can be opened at once. If not specified, or 0, then not limited.
     * @since Chrome 41.
     */
    openedFilesLimit?: chrome$integer;

    /**
     * Whether the file system supports the tag field for observed directories.
     * @since Chrome 45.
     */
    supportsNotifyTag?: boolean;

    /**
     * Whether the framework should resume the file system at the next sign-in session.
     * @default true
     * @since Chrome 64.
     */
    persistent?: boolean;
  }

  declare interface fileSystemProvider$UnmountOptions {
    /**
     * The identifier of the file system to be unmounted.
     */
    fileSystemId: string;
  }

  declare interface fileSystemProvider$NotificationChange {
    /**
     * The path of the changed entry.
     */
    entryPath: string;

    /**
     * The type of the change which happened to the entry.
     * @see ChangeType
     */
    changeType: chrome$ToStringLiteral<typeof ChangeType>;
  }

  declare interface fileSystemProvider$NotificationOptions {
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
     * The type of the change which happened to the observed entry.
     * If it is DELETED, then the observed entry will be automatically
     * removed from the list of observed entries.
     * @see ChangeType
     */
    changeType: chrome$ToStringLiteral<typeof ChangeType>;

    /**
     * List of changes to entries within the observed directory (including the entry itself)
     */
    changes?: fileSystemProvider$NotificationChange[];

    /**
     * Tag for the notification.
     * Required if the file system was mounted with the supportsNotifyTag option.
     * Note, that this flag is necessary to provide notifications about changes
     * which changed even when the system was shutdown.
     */
    tag?: string;

    /**
     * Which type of notification to display. Required for notifications.create method.
     * @see enum TemplateType
     */
    type: chrome$ToStringLiteral<typeof TemplateType>;

    /**
     * Optional.
     * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
     * URLs can be a data URL, a blob URL, or a URL relative to a resource within this app's .crx file Required for notifications.create method.
     */
    iconUrl: string;

    /**
 * @deprecated since Chrome 59. The app icon mask is not visible for Mac OS X users.
A URL to the app icon mask. URLs have the same restrictions as iconUrl.
The app icon mask should be in alpha channel,
as only the alpha channel of the image will be considered.
 */
    appIconMaskUrl?: string;

    /**
     * Title of the notification (e.g. sender name for email). Required for notifications.create method.
     */
    title: string;

    /**
     * Main notification content. Required for notifications.create method.
     */
    message: string;

    /**
     * Alternate notification content with a lower-weight font.
     * @since Chrome 31.
     */
    contextMessage?: string;

    /**
     * Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest.
     * On platforms that don't support a notification center (Windows, Linux & Mac),
     * -2 and -1 result in an error as notifications with those priorities will not be shown at all.
     * @default 0
     */
    priority?: -2 | -1 | 0 | 1 | 2;

    /**
     * A timestamp associated with the notification, in milliseconds past the epoch (e.g. Date.now() + n).
     */
    eventTime?: chrome$double;

    /**
     * Text and icons for up to two notification action buttons.
     */
    buttons?: notifications$ButtonOptions[];

    /**
 * @deprecated Deprecated since Chrome 59. The image is not visible for Mac OS X users.
A URL to the image thumbnail for image-type notifications.
URLs have the same restrictions as iconUrl.
 */
    imageUrl?: string;

    /**
     * Items for multi-item notifications.
     * Items for multi-item notifications. Users on Mac OS X only see the first item.
     */
    items?: notifications$ItemOptions[];

    /**
     * Current progress ranges from 0 to 100.
     * @since Chrome 30.
     */
    progress?: chrome$integer;

    /**
     * @deprecated Deprecated since Chrome 67. This UI hint is ignored as of Chrome 67
     * @description Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
     */
    isClickable?: boolean;

    /**
     * Indicates that the notification should remain visible
     * on screen until the user activates or dismisses the notification.
     * This defaults to false.
     * @since Chrome 50
     */
    requireInteraction?: boolean;

    /**
     * @since Chrome 70.
     * @description Indicates that no sounds or vibrations should be made when the notification is being shown.
     * @default false
     */
    silent?: boolean;
  }

  /**
   * @private
   * @internal
   */
  declare interface _internal_$RequestedEventOptions {
    /**
     * The identifier of the file system related to this operation.
     */
    fileSystemId: string;

    /**
     * The unique identifier of this request.
     */
    requestId: chrome$integer;
  }

  /**
   * @private
   * @internal
   */
  declare type _internal_$EntryPathRequestedEventOptions = {
    /**
     * The path of the entry to which this operation is related to.
     */
    entryPath: string
  } & _internal_$RequestedEventOptions;

  /**
   * @private
   * @internal
   */
  declare type _internal_$FilePathRequestedEventOptions = {
    /**
     * The path of the entry for the operation
     */
    filePath: string
  } & _internal_$RequestedEventOptions;

  declare type fileSystemProvider$UnmountRequestedEventOptions = {} & _internal_$_internal_$RequestedEventOptions;

  declare type fileSystemProvider$MetadataRequestedEventOptions = {
    /**
     * Set to true if is_directory value is requested
     * @since Chrome 49.
     */
    isDirectory: boolean,

    /**
     * Set to true if is_directory value is requested.
     * @since Chrome 49.
     */
    name: boolean,

    /**
     * Set to true if size value is requested.
     * @since Chrome 49.
     */
    size: boolean,

    /**
     * Set to true if modificationTime value is requested
     * @since Chrome 49.
     */
    modificationTime: boolean,

    /**
     * Set to true if mimeType value is requested.
     * @since Chrome 49.
     */
    mimeType: boolean,

    /**
     * Set to true if the thumbnail is requested.
     */
    thumbnail: boolean
  } & _internal_$_internal_$EntryPathRequestedEventOptions;

  declare type fileSystemProvider$GetActionsRequestedEventOptions = {
    /**
     * The path of the entry to which this operation is related to.
     */
    entryPaths: string[]
  } & _internal_$_internal_$RequestedEventOptions;

  declare type fileSystemProvider$ReadDirectoryRequestedEventOptions = {
    /**
     * The path of the directory which is to be operated on.
     */
    directoryPath: string,

    /**
     * Set to true if is_directory value is requested
     * @since Chrome 49.
     */
    isDirectory: boolean,

    /**
     * Set to true if is_directory value is requested.
     * @since Chrome 49.
     */
    name: boolean,

    /**
     * Set to true if size value is requested.
     * @since Chrome 49.
     */
    size: boolean,

    /**
     * Set to true if modificationTime value is requested
     * @since Chrome 49.
     */
    modificationTime: boolean,

    /**
     * Set to true if mimeType value is requested.
     * @since Chrome 49.
     */
    mimeType: boolean,

    /**
     * Set to true if the thumbnail is requested.
     */
    thumbnail: boolean
  } & _internal_$_internal_$RequestedEventOptions;

  declare type fileSystemProvider$OpenFileRequestedEventOptions = {
    /**
     * Whether the file will be used for reading or writing.
     * @see ChangeType
     */
    mode: chrome$ToStringLiteral<typeof OpenFileMode>
  } & _internal_$_internal_$FilePathRequestedEventOptions;

  declare type fileSystemProvider$CloseFileRequestedEventOptions = {
    /**
     * A request ID used to open the file.
     */
    openRequestId: chrome$integer
  } & _internal_$_internal_$RequestedEventOptions;

  declare type fileSystemProvider$ReadFileRequestedEventOptions = {
    /**
     * A request ID used to open the file.
     */
    openRequestId: chrome$integer,

    /**
     * Position in the file (in bytes) to start reading from.
     */
    offset: chrome$double,

    /**
     * Number of bytes to be returned.
     */
    length: chrome$double
  } & _internal_$_internal_$RequestedEventOptions;

  declare type fileSystemProvider$CreateDirectoryRequestedEventOptions = {
    /**
     * The path of the directory which is to be operated on.
     */
    directoryPath: string,

    /**
     * Whether the operation is recursive (for directories only).
     */
    recursive: boolean
  } & _internal_$_internal_$RequestedEventOptions;

  declare type fileSystemProvider$DeleteEntryRequestedEventOptions = {
    /**
     * Whether the operation is recursive (for directories only).
     */
    recursive: boolean
  } & _internal_$_internal_$EntryPathRequestedEventOptions;

  declare type fileSystemProvider$CreateFileRequestedEventOptions = {} & _internal_$_internal_$FilePathRequestedEventOptions;

  declare type fileSystemProvider$CopyEntryRequestedEventOptions = {
    /**
     * The source path for the operation.
     */
    sourcePath: string,

    /**
     * The destination path for the operation.
     */
    targetPath: string
  } & _internal_$_internal_$RequestedEventOptions;

  declare type fileSystemProvider$MoveEntryRequestedEventOptions = {} & fileSystemProvider$CopyEntryRequestedEventOptions;

  declare type fileSystemProvider$TruncateRequestedEventOptions = {
    /**
     * Number of bytes to be retained after the operation completes.
     */
    length: chrome$double
  } & _internal_$_internal_$FilePathRequestedEventOptions;

  declare type fileSystemProvider$WriteFileRequestedEventOptions = {
    /**
     * A request ID used to open the file.
     */
    openRequestId: chrome$integer,

    /**
     * Position in the file (in bytes) to start operating from.
     */
    offset: chrome$integer,

    /**
     * Buffer of bytes to be operated on the file.
     */
    data: ArrayBuffer
  } & _internal_$_internal_$RequestedEventOptions;

  declare type fileSystemProvider$AbortRequestedEventOptions = {
    /**
     * An ID of the request to which this operation is related.
     */
    operationRequestId: chrome$integer
  } & _internal_$_internal_$RequestedEventOptions;

  declare type fileSystemProvider$ConfigureRequestedEventOptions = {} & _internal_$_internal_$RequestedEventOptions;

  declare type fileSystemProvider$WatcherRequestedEventOptions = {
    /**
     * Mode of the watcher.
     * Whether observing should include all child entries recursively.
     * It can be true for directories only.
     */
    recursive: boolean
  } & _internal_$_internal_$EntryPathRequestedEventOptions;

  declare type fileSystemProvider$ExecuteActionRequestedEventOptions = {
    /**
     * The identifier of the action to be executed.
     */
    actionId: string
  } & fileSystemProvider$GetActionsRequestedEventOptions;

  /**
   * Mounts a file system with the given fileSystemId and displayName.
   * displayName will be shown in the left panel of the Files app.
   * displayName can contain any characters including '/', but cannot be an empty string.
   * displayName must be descriptive but doesn't have to be unique.
   * The fileSystemId must not be an empty string.
   *
   * Depending on the type of the file system being mounted, the source option must be set appropriately.
   *
   * In case of an error, runtime.lastError will be set with a corresponding error code.
   * @param callback A generic result callback to indicate success or failure.
   */
  declare function fileSystemProvider$mount(
    options: fileSystemProvider$MountOptions,
    callback?: () => void
  ): void;

  /**
   * Unmounts a file system with the given fileSystemId.
   * It must be called after onUnmountRequested is invoked.
   * Also, the providing extension can decide to perform unmounting if not requested
   * (eg. in case of lost connection, or a file error).
   *
   * In case of an error, runtime.lastError will be set with a corresponding error code.
   * @param callback A generic result callback to indicate success or failure.
   */
  declare function fileSystemProvider$unmount(
    options: fileSystemProvider$UnmountOptions,
    callback?: () => void
  ): void;

  /**
   * Returns all file systems mounted by the app.
   * @param callback Callback to receive the result of getAll function.
   */
  declare function fileSystemProvider$getAll(
    callback: (fileSystems: fileSystemProvider$FileSystemInfo[]) => void
  ): void;

  /**
   * Returns information about a file system with the passed fileSystemId.
   * @since Chrome 42.
   * @param callback Callback to receive the result of get function.
   */
  declare function fileSystemProvider$get(
    fileSystemId: string,
    callback: (fileSystem: fileSystemProvider$FileSystemInfo) => void
  ): void;

  /**
 * @requires Manifest: 'file_system_provider.notify' = true
 * @description Notifies about changes in the watched directory at observedPath in recursive mode.
If the file system is mounted with supportsNofityTag, then tag must be provided,
and all changes since the last notification always reported, even if the system was shutdown.
The last tag can be obtained with getAll.

Value of tag can be any string which is unique per call,
so it's possible to identify the last registered notification.
Eg. if the providing app starts after a reboot,
and the last registered notification's tag is equal to '123',
then it should call notify for all changes which happened since
the change tagged as '123'. It cannot be an empty string.

Not all providers are able to provide a tag, but if the file system has a changelog,
then the tag can be eg. a change number, or a revision number.

Note that if a parent directory is removed, then all descendant entries are also removed,
and if they are watched, then the API must be notified about the fact.
Also, if a directory is renamed, then all descendant entries are in fact removed,
as there is no entry under their original paths anymore.

In case of an error, runtime.lastError will be set will a corresponding error code.
 * @param callback A generic result callback to indicate success or failure.
 * @since Chrome 45.
 */
  declare function fileSystemProvider$notify(
    options: fileSystemProvider$NotificationOptions,
    callback: () => void
  ): void;

  /**
   * Raised when unmounting for the file system with the fileSystemId identifier is requested.
   * In the response, the unmount API method must be called together with successCallback.
   * If unmounting is not possible (eg. due to a pending operation), then errorCallback must be called.
   * @see ProviderError
   */
  declare var fileSystemProvider$onUnmountRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$UnmountRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when metadata of a file or a directory at entryPath is requested.
   * The metadata must be returned with the successCallback call.
   * In case of an error, errorCallback must be called.
   * @see ProviderError
   */
  declare var fileSystemProvider$onGetMetadataRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$MetadataRequestedEventOptions,
      successCallback: (metadata: fileSystemProvider$EntryMetadata) => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when a list of actions for a set of files or directories at entryPaths is requested.
   * All of the returned actions must be applicable to each entry.
   * If there are no such actions, an empty array should be returned.
   * The actions must be returned with the successCallback call.
   * In case of an error, errorCallback must be called.
   * @see ProviderError
   * @since Chrome 48.
   */
  declare var fileSystemProvider$onGetActionsRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$GetActionsRequestedEventOptions,
      successCallback: (actions: fileSystemProvider$Action[]) => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when contents of a directory at directoryPath are requested.
   * The results must be returned in chunks by calling the successCallback several times.
   * In case of an error, errorCallback must be called.
   * @see ProviderError
   */
  declare var fileSystemProvider$onReadDirectoryRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$ReadDirectoryRequestedEventOptions,
      successCallback: (
        entries: fileSystemProvider$EntryMetadata[],
        hasMore: boolean
      ) => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when opening a file at filePath is requested.
   * If the file does not exist, then the operation must fail.
   * Maximum number of files opened at once can be specified with MountOptions.
   * @see ProviderError
   */
  declare var fileSystemProvider$onOpenFileRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$OpenFileRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when opening a file previously opened
   * with openRequestId is requested to be closed.
   * @see ProviderError
   */
  declare var fileSystemProvider$onCloseFileRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$CloseFileRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when reading contents of a file opened previously with openRequestId is requested.
   * The results must be returned in chunks by calling successCallback several times.
   * In case of an error, errorCallback must be called.
   * @see ProviderError
   */
  declare var fileSystemProvider$onReadFileRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$ReadFileRequestedEventOptions,
      successCallback: (data: ArrayBuffer, hasMore: boolean) => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when creating a directory is requested.
   * The operation must fail with the EXISTS error if the target directory already exists.
   * If recursive is true, then all of the missing directories on the directory path must be created.
   * @see ProviderError
   */
  declare var fileSystemProvider$onCreateDirectoryRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$CreateDirectoryRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when deleting an entry is requested.
   * If recursive is true, and the entry is a directory,
   * then all of the entries inside must be recursively deleted as well.
   * @see ProviderError
   */
  declare var fileSystemProvider$onDeleteEntryRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$DeleteEntryRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when creating a file is requested.
   * If the file already exists, then errorCallback must be called with the 'EXISTS' error code.
   * @see ProviderError
   */
  declare var fileSystemProvider$onCreateFileRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$CreateFileRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when copying an entry (recursively if a directory) is requested.
   * If an error occurs, then errorCallback must be called.
   * @see ProviderError
   */
  declare var fileSystemProvider$onCopyEntryRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$CopyEntryRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when moving an entry (recursively if a directory) is requested.
   * If an error occurs, then errorCallback must be called.
   * @see ProviderError
   */
  declare var fileSystemProvider$onMoveEntryRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$MoveEntryRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when truncating a file to a desired length is requested.
   * If an error occurs, then errorCallback must be called.
   * @see ProviderError
   */
  declare var fileSystemProvider$onTruncateRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$TruncateRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when writing contents to a file opened previously with openRequestId is requested.
   * @see ProviderError
   */
  declare var fileSystemProvider$onWriteFileRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$WriteFileRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when aborting an operation with operationRequestId is requested.
   * The operation executed with operationRequestId must be immediately stopped
   * and successCallback of this abort request executed. If aborting fails,
   * then errorCallback must be called. Note, that callbacks of the aborted
   * operation must not be called, as they will be ignored. Despite calling
   * errorCallback, the request may be forcibly aborted.
   * @see ProviderError
   */
  declare var fileSystemProvider$onAbortRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$AbortRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when showing a configuration dialog for fileSystemId is requested.
   * If it's handled, the *file_system_provider.configurable* manfiest option must be set to true.
   * @requires Manifest: 'file_system_provider.configurable' = true
   * @see ProviderError
   * @since Chrome 44.
   */
  declare var fileSystemProvider$onConfigureRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$ConfigureRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when showing a dialog for mounting a new file system is requested.
   * If the app is a file handler, then this event shouldn't be handled.
   * Instead app.runtime.onLaunched should be handled in order to mount new file systems when a file is opened.
   * @requires Manifest (for multiple mounts): 'file_system_provider.multiple_mounts' = true
   * @see ProviderError
   * @since Chrome 44.
   */
  declare var fileSystemProvider$onMountRequested: chrome$events.events$Event<
    (
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when setting a new directory watcher is requested.
   * If an error occurs, then errorCallback must be called.
   * @see ProviderError
   * @since Chrome 45.
   */
  declare var fileSystemProvider$onAddWatcherRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$WatcherRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when the watcher should be removed.
   * If an error occurs, then errorCallback must be called.
   * @see ProviderError
   * @since Chrome 45.
   */
  declare var fileSystemProvider$onRemoveWatcherRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$WatcherRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  /**
   * Raised when executing an action for a set of files or directories is requested.
   * After the action is completed, successCallback must be called.
   * On error, errorCallback must be called.
   * @see ProviderError
   * @since Chrome 48.
   */
  declare var fileSystemProvider$onExecuteActionRequested: chrome$events.events$Event<
    (
      options: fileSystemProvider$ExecuteActionRequestedEventOptions,
      successCallback: () => void,
      errorCallback: (
        error: chrome$ToStringLiteral<typeof ProviderError>
      ) => void
    ) => void
  >;

  declare var npm$namespace$gcm: {
    register: typeof gcm$register,
    unregister: typeof gcm$unregister,
    send: typeof gcm$send,
    MAX_MESSAGE_SIZE: typeof gcm$MAX_MESSAGE_SIZE,
    onMessage: typeof gcm$onMessage,
    onMessagesDeleted: typeof gcm$onMessagesDeleted,
    onSendError: typeof gcm$onSendError
  };

  /**
   * The maximum size (in bytes) of all key/value pairs in a message.
   * @default 4096
   */
  declare var gcm$MAX_MESSAGE_SIZE: chrome$integer;

  declare type gcm$DisallowedKeys =
    | "collapse_key"
    | "goog"
    | "goog."
    | "GOOG"
    | "GOOG."
    | "google"
    | "GOOGLE";

  declare type gcm$IGCMDataSend = Record<
    Exclude<gcm$DisallowedKeys, string>,
    any
  >;

  declare type gcm$IGCMDataReceive = Record<string, any>;

  declare interface gcm$OutgoingMessage {
    /**
     * The ID of the server to send the message to as assigned by Google API Console.
     */
    destinationId: string;

    /**
     * The ID of the message. It must be unique for each message in scope of the applications. See the Cloud Messaging documentation for advice for picking and handling an ID.
     */
    messageId: string;

    /**
     * Time-to-live of the message in seconds. If it is not possible to send the message within that time, an onSendError event will be raised. A time-to-live of 0 indicates that the message should be sent immediately or fail if it's not possible. The maximum and a default value of time-to-live is 86400 seconds (1 day).
     */
    timeToLive?: chrome$integer;

    /**
     * Message data to send to the server.
     *
     * Case-insensitive goog. and google,
     * as well as case-sensitive collapse_key
     * are disallowed as key prefixes.
     *
     * Sum of all key/value pairs should not exceed gcm.MAX_MESSAGE_SIZE.
     */
    data: gcm$IGCMDataSend;
  }

  declare interface gcm$IncomingMessage {
    /**
     * The message data.
     */
    data: gcm$IGCMDataReceive;

    /**
     * Optional.
     * The sender who issued the message.
     * @since Chrome 41.
     */
    from?: string;

    /**
     * Optional.
     * The collapse key of a message. See Collapsible Messages section of Cloud Messaging documentation for details.
     */
    collapseKey?: string;
  }

  declare interface gcm$GcmError {
    /**
     * The error message describing the problem.
     */
    errorMessage: string;

    /**
     * The ID of the message with this error, if error is related to a specific message.
     */
    messageId?: string;

    /**
     * Additional details related to the error, when available.
     */
    detail: Object;
  }

  /**
 * Registers the application with GCM. The registration ID will be returned by the callback. If register is called again with the same list of senderIds, the same registration ID will be returned.
 * @param senderIds A list of server IDs that are allowed to send messages to the application. It should contain at least one and no more than 100 sender IDs.
 * @param callback Function called when registration completes. It should check runtime.lastError for error when registrationId is empty.
The callback parameter should be a function that looks like this:
function(string registrationId) {...};
Parameter registrationId: A registration ID assigned to the application by the GCM.
 */
  declare function gcm$register(
    senderIds: string[],
    callback: (registrationId: string) => void
  ): void;

  /**
 * Unregisters the application from GCM.
 * @param callback A function called after the unregistration completes. Unregistration was successful if runtime.lastError is not set.
The callback parameter should be a function that looks like this:
function() {...};
 */
  declare function gcm$unregister(callback: () => void): void;

  /**
 * Sends a message according to its contents.
 * @param message A message to send to the other party via GCM.
 * @param callback A function called after the message is successfully queued for sending. runtime.lastError should be checked, to ensure a message was sent without problems.
The callback parameter should be a function that looks like this:
function(string messageId) {...};
Parameter messageId: The ID of the message that the callback was issued for.
 */
  declare function gcm$send(
    message: gcm$OutgoingMessage,
    callback: (messageId: string) => void
  ): void;

  /**
   * Fired when a message is received through GCM.
   */
  declare var gcm$onMessage: chrome$events.events$Event<
    (message: gcm$IncomingMessage) => void
  >;

  /**
   * Fired when a GCM server had to delete messages sent by an app server to the application. See Messages deleted event section of Cloud Messaging documentation for details on handling this event.
   */
  declare var gcm$onMessagesDeleted: chrome$events.events$Event<() => void>;

  /**
   * Fired when it was not possible to send a message to the GCM server.
   */
  declare var gcm$onSendError: chrome$events.events$Event<
    (error: gcm$GcmError) => void
  >;

  declare var npm$namespace$hid: {
    getDevices: typeof hid$getDevices,
    getUserSelectedDevices: typeof hid$getUserSelectedDevices,
    connect: typeof hid$connect,
    disconnect: typeof hid$disconnect,
    receive: typeof hid$receive,
    send: typeof hid$send,
    receiveFeatureReport: typeof hid$receiveFeatureReport,
    sendFeatureReport: typeof hid$sendFeatureReport,
    onDeviceAdded: typeof hid$onDeviceAdded,
    onDeviceRemoved: typeof hid$onDeviceRemoved
  };
  declare interface hid$Collection {
    /**
     * HID usage page identifier.
     */
    usagePage: chrome$integer;

    /**
     * Page-defined usage identifier.
     */
    usage: chrome$integer;

    /**
     * Report IDs which belong to the collection and to its children.
     */
    reportIds: chrome$integer[];
  }

  declare interface hid$HidDeviceInfo {
    /**
     * Opaque device ID.
     */
    deviceId: chrome$integer;

    /**
     * Vendor ID.
     */
    vendorId: chrome$integer;

    /**
     * Product ID.
     */
    productId: chrome$integer;

    /**
     * The product name read from the device, if available.
     * @since Chrome 46
     */
    productName: string;

    /**
     * The serial number read from the device, if available.
     * @since Chrome 46
     */
    serialNumber: string;

    /**
     * Top-level collections from this device's report descriptors.
     */
    collections: hid$Collection[];

    /**
     * Top-level collection's maximum input report size.
     */
    maxInputReportSize: chrome$integer;

    /**
     * Top-level collection's maximum output report size.
     */
    maxOutputReportSize: chrome$integer;

    /**
     * Top-level collection's maximum feature report size.
     */
    maxFeatureReportSize: chrome$integer;

    /**
     * Raw device report descriptor (not available on Windows).
     * @since Chrome 42
     */
    reportDescriptor: ArrayBuffer;
  }

  /**
   * Some criteria to filter the list of returned bluetooth devices. If the filter is not set or set to {}, returned device list will contain all bluetooth devices. Right now this is only supported in ChromeOS, for other platforms, a full list is returned.
   */
  declare interface hid$DeviceFilter {
    /**
     * Type of filter to apply to the device list. Default is all.
     */
    filterType?: bluetooth$DeviceFilterType;

    /**
     * Maximum number of bluetoth devices to return. Default is 0 (no limit) if unspecified.
     */
    limit?: chrome$integer;

    /**
     * Device vendor ID.
     */
    vendorId?: chrome$integer;

    /**
     * Device product ID, only checked only if the vendor ID matches.
     */
    productId?: chrome$integer;

    /**
     * HID usage page identifier.
     */
    usagePage?: chrome$integer;

    /**
     * HID usage identifier, checked only if the HID usage page matches.
     */
    usage?: chrome$integer;
  }

  declare interface hid$DeviceOptions {
    /**
     * Equivalent to setting DeviceFilter.vendorId.
     * @deprecated Deprecated since Chrome 39
     */
    vendorId?: chrome$chrome$deprecated;

    /**
     * Equivalent to setting DeviceFilter.productId.
     * @deprecated Deprecated since Chrome 39.
     */
    productId?: chrome$chrome$deprecated;

    /**
     * A device matching any given filter will be returned.
     * An empty filter list will return all devices the app has permission for.
     * @since Chrome 39
     */
    filters?: hid$DeviceFilter[];
  }

  declare interface hid$UserSelectedDevicePickerOptions {
    /**
     * Allow the user to select multiple devices.
     */
    multiple?: boolean;

    /**
     * Filter the list of devices presented to the user.
     * If multiple filters are provided devices matching any filter will be displayed.
     */
    filters?: hid$DeviceFilter[];
  }

  /**
   * Enumerate connected HID devices.
   * @param options The properties to search for on target devices.
   * @param callback
   */
  declare function hid$getDevices(
    options: hid$DeviceOptions,
    callback: (devices: hid$HidDeviceInfo[]) => void
  ): void;

  /**
 * @requires (dev) **Dev channel only!**
 * @see [Learn more]{@link https://developer.chrome.com/apps/api_index#dev_apis}
 * @description Presents a device picker to the user and returns
HidDeviceInfo objects for the devices selected. If the user
cancels the picker devices will be empty. A user gesture is
required for the dialog to display. Without a user gesture,
the callback will run as though the user cancelled. If multiple
filters are provided devices matching any filter will be displayed.
 * @param callback Invoked with a list of chosen Devices.
 */
  declare function hid$getUserSelectedDevices(
    callback: (devices: hid$HidDeviceInfo) => void
  ): void;

  /**
 * @since Chrome 45.
 * @requires (dev) **Dev channel only!**
 * @see [Learn more]{@link https://developer.chrome.com/apps/api_index#dev_apis}
Presents a device picker to the user and returns
HidDeviceInfo objects for the devices selected. If the user
cancels the picker devices will be empty. A user gesture is
required for the dialog to display. Without a user gesture,
the callback will run as though the user cancelled. If multiple
filters are provided devices matching any filter will be displayed.
 * @param options Configuration of the device picker dialog box.
 * @param callback Invoked with a list of chosen Devices.
 */
  declare function hid$getUserSelectedDevices(
    options: hid$UserSelectedDevicePickerOptions,
    callback: (devices: hid$HidDeviceInfo) => void
  ): void;

  /**
 * Open a connection to an HID device for communication.
 * @param deviceId The HidDeviceInfo.deviceId of the device to open.
 * @param callback The callback function returns an object, containing the connectionId.
The connectionId is the opaque ID used to identify this connection in all other functions.
 */
  declare function hid$connect(
    deviceId: chrome$integer,
    callback: (connection: {
      connectionId: chrome$integer
    }) => void
  ): void;

  /**
   * Disconnect from a device.
   * Invoking operations on a device after calling this is safe but has no effect.
   * @param connectionId The connectionId returned by connect.
   * @param callback
   */
  declare function hid$disconnect(
    connectionId: chrome$integer,
    callback?: () => void
  ): void;

  /**
   * Receive the next input report from the device.
   * @param connectionId The connectionId returned by connect.
   * @param callback The callback will return these parameters:
   * reportId - The report ID or 0 if none.
   * data - The report data, the report ID prefix (if present) is removed.
   */
  declare function hid$receive(
    connectionId: chrome$integer,
    callback: (reportId: chrome$integer, data: ArrayBuffer) => void
  ): void;

  /**
   * Send an output report to the device.
   * Note: Do not include a report ID prefix in data. It will be added if necessary.
   * @param connectionId The connectionId returned by connect.
   * @param reportId reportId - The report ID or 0 if none.
   * @param data The report data.
   * @param callback
   */
  declare function hid$send(
    connectionId: chrome$integer,
    reportId: chrome$integer,
    data: ArrayBuffer,
    callback: () => void
  ): void;

  /**
   * Request a feature report from the device.
   * @param connectionId The connectionId returned by connect.
   * @param reportId The report ID, or 0 if none.
   * @param callback Will provide `data` which contain the report data, including a report ID prefix if one is sent by the device.
   */
  declare function hid$receiveFeatureReport(
    connectionId: chrome$integer,
    reportId: chrome$integer,
    callback: (data: ArrayBuffer) => void
  ): void;

  /**
   * Send a feature report to the device.
   * Note: Do not include a report ID prefix in data. It will be added if necessary.
   * @param connectionId The connectionId returned by connect.
   * @param reportId The report ID to use, or 0 if none.
   * @param data The report data.
   * @param callback
   */
  declare function hid$sendFeatureReport(
    connectionId: chrome$integer,
    reportId: chrome$integer,
    data: ArrayBuffer,
    callback: () => void
  ): void;

  /**
   * Event generated when a device is added to the system.
   * Events are only broadcast to apps that
   * have permission to access the device. Permission may
   * have been granted at install time or when the user
   * accepted an optional permission.
   * @since Chrome 41.
   * @see [permissions.request]{@link https://developer.chrome.com/apps/permissions#method-request}
   */
  declare var hid$onDeviceAdded: chrome$events.events$Event<
    (device: hid$HidDeviceInfo) => void
  >;

  /**
   * Event generated when a device is removed from the system.
   * The callback will contain the deviceId property of the device passed to onDeviceAdded.
   * @since Chrome 41.
   * @see [See onDeviceAdded for which events are delivered]{@link https://developer.chrome.com/apps/hid#event-onDeviceAdded}.
   */
  declare var hid$onDeviceRemoved: chrome$events.events$Event<
    (deviceId: chrome$integer) => void
  >;

  declare var npm$namespace$i18n: {
    getAcceptLanguages: typeof i18n$getAcceptLanguages,
    getMessage: typeof i18n$getMessage,
    getUILanguage: typeof i18n$getUILanguage,
    detectLanguage: typeof i18n$detectLanguage
  };

  /**
   * An ISO language code such as en or fr.
   * For a complete list of languages supported by this method, see kLanguageInfoTable.
   * For an unknown language, und will be returned,
   * which means that [percentage] of the text is unknown to CLD
   * @since Chrome 47.
   */
  declare type i18n$LanguageCode = i18n$kLanguageInfoTable | "und";

  /**
   * @see [Source]{@link https://github.com/chromium/chromium/blob/master/ui/base/l10n/l10n_util.cc}
   */
  declare type i18n$kLanguageInfoTable =
    | "af"
    | "am"
    | "an"
    | "ar"
    | "ast"
    | "az"
    | "be"
    | "bg"
    | "bh"
    | "bn"
    | "br"
    | "bs"
    | "ca"
    | "ceb"
    | "ckb"
    | "co"
    | "cs"
    | "cy"
    | "da"
    | "de"
    | "de-AT"
    | "de-CH"
    | "de-DE"
    | "de-LI"
    | "el"
    | "en"
    | "en-AU"
    | "en-CA"
    | "en-GB"
    | "en-IN"
    | "en-NZ"
    | "en-US"
    | "en-ZA"
    | "eo"
    | "es"
    | "es-419"
    | "es-AR"
    | "es-CL"
    | "es-CO"
    | "es-CR"
    | "es-ES"
    | "es-HN"
    | "es-MX"
    | "es-PE"
    | "es-US"
    | "es-UY"
    | "es-VE"
    | "et"
    | "eu"
    | "fa"
    | "fi"
    | "fil"
    | "fo"
    | "fr"
    | "fr-CA"
    | "fr-CH"
    | "fr-FR"
    | "fy"
    | "ga"
    | "gd"
    | "gl"
    | "gn"
    | "gu"
    | "ha"
    | "haw"
    | "he"
    | "hi"
    | "hmn"
    | "hr"
    | "ht"
    | "hu"
    | "hy"
    | "ia"
    | "id"
    | "ig"
    | "is"
    | "it"
    | "it-CH"
    | "it-IT"
    | "ja"
    | "jv"
    | "ka"
    | "kk"
    | "km"
    | "kn"
    | "ko"
    | "ku"
    | "ky"
    | "la"
    | "lb"
    | "ln"
    | "lo"
    | "lt"
    | "lv"
    | "mg"
    | "mi"
    | "mk"
    | "ml"
    | "mn"
    | "mo"
    | "mr"
    | "ms"
    | "mt"
    | "my"
    | "nb"
    | "ne"
    | "nl"
    | "nn"
    | "no"
    | "ny"
    | "oc"
    | "om"
    | "or"
    | "pa"
    | "pl"
    | "ps"
    | "pt"
    | "pt-BR"
    | "pt-PT"
    | "qu"
    | "rm"
    | "ro"
    | "ru"
    | "sd"
    | "sh"
    | "si"
    | "sk"
    | "sl"
    | "sm"
    | "sn"
    | "so"
    | "sq"
    | "sr"
    | "st"
    | "su"
    | "sv"
    | "sw"
    | "ta"
    | "te"
    | "tg"
    | "th"
    | "ti"
    | "tk"
    | "to"
    | "tr"
    | "tt"
    | "tw"
    | "ug"
    | "uk"
    | "ur"
    | "uz"
    | "vi"
    | "wa"
    | "xh"
    | "yi"
    | "yo"
    | "zh"
    | "zh-CN"
    | "zh-HK"
    | "zh-TW"
    | "zu"
    | "ar_001"
    | "en_001"
    | "en_150"
    | "zh_hans_cn"
    | "zh_hant_hk"
    | "zh_hant_mo"
    | "zh_hans_sg"
    | "zh_hant_tw";

  /**
   * Allow array of strings with length 1 to 9
   */
  declare type i18n$StringSubstitutions =
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string];

  /**
   * Holds detected ISO language code and its percentage in the input string
   */
  declare interface i18n$DetectedLanguage {
    /**
 * An ISO language code such as 'en' or 'fr'.
 * For a complete list of languages supported by this method:
 * @see [kLanguageInfoTable]{@link https://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc}.
For an unknown language, 'und' will be returned, which means that [percentage] of the text is unknown to CLD
 */
    language: i18n$kLanguageInfoTable;

    /**
     * The percentage of the detected language
     */
    percentage: chrome$integer;
  }

  /**
   * Holds detected language reliability and array of DetectedLanguage
   */
  declare interface i18n$LanguageDetectionResult {
    /**
     * CLD detected language reliability
     */
    isReliable: boolean;

    /**
     * Array of DetectedLanguage
     */
    languages: i18n$DetectedLanguage[];
  }

  /**
   * Gets the accept-languages of the browser.
   * This is different from the locale used by the browser;
   * to get the locale, use i18n.getUILanguage.
   */
  declare function i18n$getAcceptLanguages(
    callback: (languages: i18n$LanguageCode[]) => void
  ): void;

  /**
   * Gets the localized string for the specified message.
   * If the message is missing, this method returns an empty string ('').
   * If the format of the getMessage() call is wrong — for example,
   * messageName is not a string or the substitutions array has
   * more than 9 elements — this method returns undefined.
   * @param messageName The name of the message, as specified in the messages.json file.
   * @param substitutions Up to 9 substitution strings, if the message requires any.
   */
  declare function i18n$getMessage(
    messageName: string,
    substitutions?: i18n$StringSubstitutions
  ): string | void;

  /**
   * Gets the browser UI language of the browser.
   * This is different from i18n.getAcceptLanguages which returns the preferred user languages.
   * @since Chrome 35.
   */
  declare function i18n$getUILanguage(): string;

  /**
   * Detects the language of the provided text using CLD.
   * @param text User input string to be translated.
   * @param callback
   * @since Chrome 47.
   */
  declare function i18n$detectLanguage(
    text: string,
    callback: (result: i18n$LanguageDetectionResult) => void
  ): void;

  declare var npm$namespace$identity: {
    getAccounts: typeof identity$getAccounts,
    getAuthToken: typeof identity$getAuthToken,
    getProfileUserInfo: typeof identity$getProfileUserInfo,
    removeCachedAuthToken: typeof identity$removeCachedAuthToken,
    launchWebAuthFlow: typeof identity$launchWebAuthFlow,
    getRedirectURL: typeof identity$getRedirectURL,
    onSignInChanged: typeof identity$onSignInChanged
  };

  /**
   * @since Chrome 32.
   */
  declare interface identity$AccountInfo {
    /**
     * A unique identifier for the account.
     * This ID will not change for the lifetime of the account.
     */
    id: string;
  }

  declare interface identity$TokenDetails {
    /**
     * Fetching a token may require the user to sign-in to Chrome,
     * or approve the application's requested scopes.
     * If the interactive flag is true, getAuthToken will prompt the user as necessary.
     * When the flag is false or omitted, getAuthToken will return failure any time
     * a prompt would be required.
     */
    interactive?: boolean;

    /**
     * Optional.
     * The account ID whose token should be returned.
     * If not specified, the primary account for the profile will be used.
     * account is only supported when the 'enable-new-profile-management' flag is set.
     * @since Chrome 37.
     */
    account?: identity$AccountInfo;

    /**
     * Optional.
     * A list of OAuth2 scopes to request.
     * When the scopes field is present, it overrides the list of scopes specified in manifest.json.
     * @since Chrome 37.
     */
    scopes?: string[];
  }

  declare interface identity$UserInfo {
    /**
     * An email address for the user account signed into the current profile.
     * Empty if the user is not signed in or the identity.email manifest permission is not specified.
     */
    email: string;

    /**
     * A unique identifier for the account.
     * This ID will not change for the lifetime of the account.
     * Empty if the user is not signed in or (in M41+) the identity.email
     * manifest permission is not specified.
     */
    id: string;
  }

  declare interface identity$TokenInformation {
    /**
     * The specific token that should be removed from the cache.
     */
    token: string;
  }

  declare interface identity$WebAuthFlowOptions {
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

  /**
 * @requires (dev) **Dev channel only.**
 * @description Retrieves a list of AccountInfo objects describing the accounts present on the profile.
getAccounts is only supported on dev channel.
 */
  declare function identity$getAccounts(
    callback: (accounts: identity$AccountInfo[]) => void
  ): void;

  /**
 * Gets an OAuth2 access token using the client ID and
 * scopes specified in the oauth2 section of manifest.json.
 * 
 * The Identity API caches access tokens in memory,
 * so it's ok to call getAuthToken non-interactively any time a token is required.
 * The token cache automatically handles expiration.
 * 
 * For a good user experience it is important interactive token requests are initiated by
 * UI in your app explaining what the authorization is for. Failing to do this will cause
 * your users to get authorization requests, or Chrome sign in screens if they are not
 * signed in, with with no context. In particular, do not use getAuthToken interactively
 * when your app is first launched.
 * @param details Token options.
 * @param callback Called with an OAuth2 access token as specified by the manifest,
or undefined if there was an error.
 */
  declare function identity$getAuthToken(
    details: identity$TokenDetails,
    callback?: (token: string) => void
  ): void;

  /**
   * Retrieves email address and obfuscated gaia id of the user signed into a profile.
   * This API is different from identity.getAccounts in two ways.
   * The information returned is available offline, and it only applies to the primary account for the profile.
   * @since Chrome 37.
   */
  declare function identity$getProfileUserInfo(
    callback: (userInfo: identity$UserInfo) => void
  ): void;

  /**
   * Removes an OAuth2 access token from the Identity API's token cache.
   * If an access token is discovered to be invalid,
   * it should be passed to removeCachedAuthToken to remove it from the cache.
   * The app may then retrieve a fresh token with getAuthToken.
   * @param details Token information.
   * @param callback Called when the token has been removed from the cache.
   */
  declare function identity$removeCachedAuthToken(
    details: identity$TokenInformation,
    callback?: () => void
  ): void;

  /**
 * Starts an auth flow at the specified URL.
 * This method enables auth flows with non-Google identity providers by launching
 * a web view and navigating it to the first URL in the provider's auth flow.
 * When the provider redirects to a URL matching the pattern https://<app-id>.chromiumapp.org/*,
 * the window will close, and the final redirect URL will be passed to the callback function.
 * For a good user experience it is important interactive auth flows are initiated by UI in
 * your app explaining what the authorization is for. Failing to do this will cause your
 * users to get authorization requests with no context.
 * In particular, do not launch an interactive auth flow when your app is first launched.
 * @param details WebAuth flow options.
 * @param callback Called with the URL redirected back to your application.
The callback parameter should be a function that looks like this:
function(string responseUrl) {...};
 */
  declare function identity$launchWebAuthFlow(
    details: identity$WebAuthFlowOptions,
    callback: (responseUrl?: string) => void
  ): void;

  /**
   * Generates a redirect URL to be used in launchWebAuthFlow.
   * The generated URLs match the pattern https://<app-id>.chromiumapp.org/*.
   * @since Chrome 33.
   * @param path The path appended to the end of the generated URL.
   */
  declare function identity$getRedirectURL(path?: string): string;

  /**
   * Fired when signin state changes for an account on the user's profile.
   * @since Chrome 33.
   */
  declare var identity$onSignInChanged: chrome$events.events$Event<
    (account: identity$AccountInfo, signedIn: boolean) => void
  >;

  declare var npm$namespace$idle: {
    queryState: typeof idle$queryState,
    setDetectionInterval: typeof idle$setDetectionInterval,
    onStateChanged: typeof idle$onStateChanged
  };
  declare type idle$IdleState = "active" | "idle" | "locked";

  /**
 * Returns 'locked' if the system is locked, 'idle' if the user has not generated any input for a specified number of seconds, or 'active' otherwise.
 * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have elapsed since the last user input detected.
Since Chrome 25.
 * @param callback The callback parameter should be a function that looks like this:
function( IdleState newState) {...};
 */
  declare function idle$queryState(
    detectionIntervalInSeconds: chrome$integer,
    callback: (newState: idle$IdleState) => void
  ): void;

  /**
   * Sets the interval, in seconds, used to determine when the system is in an idle state for
   * onStateChanged events.
   * The default interval is 60 seconds.
   * @since Chrome 25.
   * @param intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state.
   */
  declare function idle$setDetectionInterval(
    intervalInSeconds: chrome$integer
  ): void;

  /**
   * Fired when the system changes to an active, idle or locked state.
   * The event fires with 'locked' if the screen is locked or the screensaver activates,
   * 'idle' if the system is unlocked and the user has not generated any input for a
   * specified number of seconds, and 'active' when the user generates input on an idle system.
   */
  declare var idle$onStateChanged: chrome$events.events$Event<
    (newState: idle$IdleState) => void
  >;

  declare var npm$namespace$instanceID: {
    getID: typeof instanceID$getID,
    getCreationTime: typeof instanceID$getCreationTime,
    getToken: typeof instanceID$getToken,
    deleteToken: typeof instanceID$deleteToken,
    deleteID: typeof instanceID$deleteID,
    onTokenRefresh: typeof instanceID$onTokenRefresh
  };
  declare interface instanceID$TokenParams {
    /**
     * Identifies the entity that is authorized to access resources associated with this Instance ID.
     * It can be a project ID from Google developer console.
     */
    authorizedEntity: string;

    /**
     * Identifies authorized actions that the authorized entity can take.
     * E.g. for sending GCM messages, GCM scope should be used.
     */
    scope: string;

    /**
     * Allows including a small number of string key/value pairs that will
     * be associated with the token and may be used in processing the request.
     */
    options?: {
      [key: string]: string
    };
  }

  declare interface instanceID$DeleteTokenParams {
    /**
     * The authorized entity that is used to obtain the token.
     */
    authorizedEntity: string;

    /**
     * The scope that is used to obtain the token.
     */
    scope: string;
  }

  /**
 * Retrieves an identifier for the app instance.
 * The instance ID will be returned by the callback.
 * The same ID will be returned as long as the application
 * identity has not been revoked or expired.
 * @param callback Function called when the retrieval completes.
It should check runtime.lastError for error when instanceID is empty.
Will be provided with instanceID: An Instance ID assigned to the app instance.
 */
  declare function instanceID$getID(
    callback: (instanceId: string) => void
  ): void;

  /**
 * Retrieves the time when the InstanceID has been generated.
 * The creation time will be returned by the callback.
 * @param callback Function called when the retrieval completes.
It should check runtime.lastError for error when creationTime is zero.
Provides `creationTime` (double)
  > The time when the Instance ID has been generated, represented in milliseconds since the epoch.
 */
  declare function instanceID$getCreationTime(
    callback: (creationTime: chrome$integer) => void
  ): void;

  /**
   * Return a token that allows the authorized entity to access the service defined by scope.
   * @param getTokenParams Parameters for getToken.
   * @param callback Function called when the retrieval completes. It should check runtime.lastError for error when token is empty.
   */
  declare function instanceID$getToken(
    getTokenParams: instanceID$TokenParams,
    callback: (token: string) => void
  ): void;

  /**
 * Revokes a granted token.
 * @param deleteTokenParams Parameters for deleteToken.
 * @param callback Function called when the token deletion completes.
The token was revoked successfully if runtime.lastError is not set.
 */
  declare function instanceID$deleteToken(
    deleteTokenParams: instanceID$DeleteTokenParams,
    callback: () => void
  ): void;

  /**
 * Fired when all the granted tokens need to be refreshed.
 * @param callback Function called when the deletion completes.
The instance identifier was revoked successfully if runtime.lastError is not set.
 */
  declare function instanceID$deleteID(callback: () => void): void;

  /**
   * Fired when all the granted tokens need to be refreshed.
   */
  declare var instanceID$onTokenRefresh: chrome$events.events$Event<() => void>;

  declare var npm$namespace$management: {
    getPermissionWarningsByManifest: typeof management$getPermissionWarningsByManifest,
    getSelf: typeof management$getSelf,
    uninstallSelf: typeof management$uninstallSelf,
    ExtensionDisabledReason: typeof management$ExtensionDisabledReason,
    ExtensionInstallType: typeof management$ExtensionInstallType,
    ExtensionType: typeof management$ExtensionType,
    LaunchType: typeof management$LaunchType
  };
  declare var management$ExtensionDisabledReason: {
    UNKNOWN: "unknown",
    PERMISSIONS_INCREASE: "permissions_increase"
  };

  declare var management$ExtensionInstallType: {
    ADMIN: "admin",
    DEVELOPMENT: "development",
    NORMAL: "normal",
    SIDELOAD: "sideload",
    OTHER: "other"
  };

  declare var management$ExtensionType: {
    EXTENSION: "extension",
    HOSTED_APP: "hosted_app",
    PACKAGED_APP: "packaged_app",
    LEGACY_PACKAGED_APP: "legacy_packaged_app",
    THEME: "theme"
  };

  declare var management$LaunchType: {
    OPEN_AS_REGULAR_TAB: "OPEN_AS_REGULAR_TAB",
    OPEN_AS_PINNED_TAB: "OPEN_AS_PINNED_TAB",
    OPEN_AS_WINDOW: "OPEN_AS_WINDOW",
    OPEN_FULL_SCREEN: "OPEN_FULL_SCREEN"
  };

  /**
   * Information about an installed extension, app, or theme.
   */
  declare interface management$ExtensionInfo {
    /**
     * A reason the item is disabled.
     * @since Chrome 17.
     * @see enum ExtensionDisabledReason
     */
    disabledReason?: chrome$ToStringLiteral<typeof ExtensionDisabledReason>;

    /**
     * The launch url.
     */
    appLaunchUrl?: string;

    /**
     * The description of this app.
     */
    description: string;

    /**
     * Returns a list of API based permissions.
     */
    permissions: chrome$runtime.runtime$Permission[];

    /**
     * A list of icon information.
     * Note that this just reflects what was declared in the manifest,
     * and the actual image at that url may be larger or smaller than what was declared,
     * so you might consider using explicit width and height attributes on img tags
     * referencing these images. See the manifest documentation on icons for more details.
     */
    icons?: management$IconInfo[];

    /**
     * Returns a list of host based permissions.
     * Permissions regarding url access.
     */
    hostPermissions: string[];

    /**
     * Whether it is currently enabled or disabled.
     */
    enabled: boolean;

    /**
     * The URL of the homepage of this app.
     * @since Chrome 11.
     */
    homepageUrl?: string;

    /**
     * Whether this app can be disabled or uninstalled by the user.
     */
    mayDisable: boolean;

    /**
     * How the app was installed.
     * @since Chrome 22.
     */
    installType: chrome$ToStringLiteral<typeof ExtensionInstallType>;

    /**
     * The version of this app.
     */
    version: string;

    /**
     * This app's version name
     */
    versionName: string;

    /**
     * The extension's unique identifier.
     */
    id: string;

    /**
     * Whether the app declares that it supports offline.
     * @since Chrome 15.
     */
    offlineEnabled: boolean;

    /**
     * The update URL of this app.
     * @since Chrome 16.
     */
    updateUrl?: string;

    /**
     * The type of this app.
     * @since Chrome 23.
     */
    type: "packaged_app";

    /**
     * The name of this app.
     */
    name: string;

    /**
     * A short version of the name of this app.
     * @since Chrome 31.
     */
    shortName: string;

    /**
     * True if this is an app, which it will be till this is removed.
     * @deprecated since Chrome 33. Please use management.ExtensionInfo.type.
     */
    isApp?: true;

    /**
     * The app launch type.
     * @since Chrome 37.
     */
    launchType?: chrome$ToStringLiteral<typeof LaunchType>;

    /**
     * The currently available launch types.
     * @since Chrome 37.
     */
    availableLaunchTypes?: chrome$ToStringLiteral<typeof LaunchType>[];
  }

  /**
   * Information about an icon belonging to an extension, app, or theme.
   */
  declare interface management$IconInfo {
    /**
     * The URL for this icon image.
     * To display a grayscale version of the icon (to indicate that an extension is disabled, for example),
     * append ?grayscale=true to the URL.
     */
    url: string;

    /**
     * A number representing the width and height of the icon. Likely values include (but are not limited to) 128, 48, 24, and 16.
     */
    size: chrome$integer;
  }

  declare interface management$UninstallOptions {
    /**
     * Whether or not a confirm-uninstall dialog should prompt the user. Defaults to false for self uninstalls.
     * If an extension uninstalls another extension, this parameter is ignored and the dialog is always shown.
     */
    showConfirmDialog?: boolean;
  }

  /**
   * Returns a list of permission warnings for the given extension manifest string.
   * @param manifestStr Extension manifest JSON string. See example
   * @param callback Permissions warnings as string array
   * @example chrome.management.getPermissionWarningsByManifest(JSON.stringify(chrome.runtime.getManifest()), (warnings) => { *Do something here* });
   */
  declare function management$getPermissionWarningsByManifest(
    manifestStr: string,
    callback?: (permissionWarnings: string[]) => void
  ): void;

  /**
 * Returns information about the calling extension, app, or theme. Note: This function can be used without requesting the 'management' permission in the manifest.
 * @since Chrome 39.
 * @param callback If you specify the callback parameter, it should be a function that looks like this:
function( ExtensionInfo result) {...};
 */
  declare function management$getSelf(
    callback?: (result: management$ExtensionInfo) => void
  ): void;

  /**
   * Uninstalls the calling extension.
   * Note: This function can be used without requesting the 'management' permission in the manifest.
   * @since Chrome 26.
   * @param options Optional unstall options
   * @param callback
   */
  declare function management$uninstallSelf(
    options?: management$UninstallOptions,
    callback?: () => void
  ): void;

  declare var npm$namespace$mdns: {
    forceDiscovery: typeof mdns$forceDiscovery,
    MAX_SERVICE_INSTANCES_PER_EVENT: typeof mdns$MAX_SERVICE_INSTANCES_PER_EVENT,
    onServiceList: typeof mdns$onServiceList
  };
  declare interface mdns$Service {
    /**
     * The UUID of the service, e.g. 0000180d-0000-1000-8000-00805f9b34fb.
     */
    uuid: string;

    /**
     * Indicates whether the type of this service is primary or secondary.
     */
    isPrimary: boolean;

    /**
     * Returns the identifier assigned to this service.
     * Use the instance ID to distinguish between services from a peripheral with the same UUID and to make function calls that take in a service identifier.
     * Present, if this instance represents a remote service.
     */
    instanceId?: string;

    /**
     * The device address of the remote peripheral that the GATT service belongs to.
     * Present, if this instance represents a remote service.
     */
    deviceAddress?: string;

    /**
     * The service name of an mDNS advertised service, ..
     */
    serviceName: string;

    /**
     * The host:port pair of an mDNS advertised service.
     */
    serviceHostPort: string;

    /**
     * The IP address of an mDNS advertised service.
     */
    ipAddress: string;

    /**
     * Metadata for an mDNS advertised service.
     */
    serviceData: string[];
  }

  /**
   * Locked to this because it's the only one that can be used.
   *
   * const char kEventFilterServiceTypeKey[] = "serviceType";
   * @see [Source: event_matcher.cc, line 19]{@link https://github.com/chromium/chromium/tree/master/extensions/common/event_matcher.cc}
   */
  declare type mdns$ValidServiceTypes = "serviceType";

  /**
   * Dictionary
   * [key in ValidServiceTypes]: string
   */
  declare type mdns$ServiceTypes = Record<mdns$ValidServiceTypes, string>;

  /**
   * The maximum number of service instances that will be
   * included in onServiceList events. If more instances
   * are available, they may be truncated from the
   * onServiceList event.
   * @default 2048
   * @since Chrome 44.
   */
  declare var mdns$MAX_SERVICE_INSTANCES_PER_EVENT: chrome$integer;

  /**
   * Immediately issues a multicast DNS query for all service types.
   * |callback| is invoked immediately.
   * At a later time, queries will be sent,
   * and any service events will be fired.
   * @since Chrome 45.
   * @param callback Callback invoked after ForceDiscovery() has started.
   */
  declare function mdns$forceDiscovery(callback: () => void): void;

  /**
 * Event fired to inform clients of the current complete
 * set of known available services. Clients should only
 * need to store the list from the most recent event.
 * The service type that the extension is interested in
 * discovering should be specified as the event filter
 * with the 'serviceType' key. Not specifying an event
 * filter will not start any discovery listeners.
 * @example Filter example:
chrome.mdns.onServiceList.addListener(() => { },
{ 'serviceType': 'definitelyTyped._tcp.local' });
 */
  declare var mdns$onServiceList: chrome$events.events$FilteredEvent<
    (services: mdns$Service[]) => void,
    mdns$ServiceTypes
  >;

  declare var npm$namespace$mediaGalleries: {
    getMediaFileSystems: typeof mediaGalleries$getMediaFileSystems,
    addUserSelectedFolder: typeof mediaGalleries$addUserSelectedFolder,
    dropPermissionForMediaFileSystem: typeof mediaGalleries$dropPermissionForMediaFileSystem,
    startMediaScan: typeof mediaGalleries$startMediaScan,
    cancelMediaScan: typeof mediaGalleries$cancelMediaScan,
    addScanResults: typeof mediaGalleries$addScanResults,
    getMediaFileSystemMetadata: typeof mediaGalleries$getMediaFileSystemMetadata,
    getAllMediaFileSystemMetadata: typeof mediaGalleries$getAllMediaFileSystemMetadata,
    getMetadata: typeof mediaGalleries$getMetadata,
    addGalleryWatch: typeof mediaGalleries$addGalleryWatch,
    removeGalleryWatch: typeof mediaGalleries$removeGalleryWatch,
    getAllGalleryWatch: typeof mediaGalleries$getAllGalleryWatch,
    removeAllGalleryWatch: typeof mediaGalleries$removeAllGalleryWatch,
    onGalleryChanged: typeof mediaGalleries$onGalleryChanged,
    onScanProgress: typeof mediaGalleries$onScanProgress
  };
  declare type mediaGalleries$Interactive = "no" | "yes" | "if_needed";

  declare interface mediaGalleries$MediaFileSystemsOptions {
    /**
     * Whether to prompt the user for permission to additional media galleries before returning
     * the permitted set. Default is silent. If the value 'yes' is passed, or if the application
     * has not been granted access to any media galleries and the value 'if_needed' is passed,
     * then the media gallery configuration dialog will be displayed.
     *
     * **no**
     * Do not act interactively.
     * **yes**
     * Ask the user to manage permitted media galleries.
     * **if_needed**
     * Ask the user to manage permitted galleries only if the return set would otherwise be empty.
     */
    interactive?: mediaGalleries$Interactive;
  }

  declare interface mediaGalleries$MediaFileSystemMetadata {
    /**
     * The name of the file system.
     */
    name: string;

    /**
     * A unique and persistent id for the media gallery.
     */
    galleryId: string;

    /**
     * If the media gallery is on a removable device, a unique id for the device while the device is online.
     */
    deviceId?: string;

    /**
     * True if the media gallery is on a removable device.
     */
    isRemovable: boolean;

    /**
     * True if the device the media gallery is on was detected as a media device. i.e. a PTP or MTP device, or a DCIM directory is present.
     */
    isMediaDevice: boolean;

    /**
     * True if the device is currently available.
     */
    isAvailable: boolean;
  }

  declare type mediaGalleries$MetadataOptionsType =
    | "all"
    | "mimeTypeAndTags"
    | "mimeTypeOnly";

  declare interface mediaGalleries$MetadataOptions {
    metadataType: mediaGalleries$MetadataOptionsType;
  }

  declare interface mediaGalleries$RawTag {
    /**
     * Describes format of container or codec of stream, i.e. 'mp3' | 'h264'.
     */
    type: string;

    /**
     * An unfiltered string->string interface of tags for the stream.
     */
    tags: {
      [name: string]: string
    };
  }

  declare interface mediaGalleries$Metadata {
    /**
     * The browser sniffed mime type.
     */
    mimeType: string;

    /**
     * Defined for images and video. In pixels.
     */
    height?: chrome$integer;
    width?: chrome$integer;

    /**
     * Defined for audio and video. In seconds.
     */
    duration?: chrome$integer;

    /**
     * Defined for images and video. In degrees.
     */
    rotation?: chrome$integer;

    /**
     * Defined for audio and video only.
     */
    album?: string;
    artist?: string;
    comment?: string;
    copyright?: string;
    disc?: chrome$integer;
    genre?: string;
    language?: string;
    title?: string;
    track?: chrome$integer;

    /**
     * All the metadata in the media file.
     * For formats with multiple streams, stream order will be preserved.
     * Container metadata is the first element.
     */
    rawTags: mediaGalleries$RawTag[];

    /**
     * The images embedded in the media file's metadata.
     * This is most often used for album art or video thumbnails.
     */
    attachedImages: Blob[];
  }

  declare interface mediaGalleries$GalleryWatchResult {
    galleryId: string;
    success: boolean;
  }

  declare type mediaGalleries$GalleryChangedType =
    | "contents_changed"
    | "watch_dropped";

  declare interface mediaGalleries$GalleryChangedEventArgs {
    type: mediaGalleries$GalleryChangedType;
    galleryId: string;
  }

  declare type mediaGalleries$ScanProgressType =
    | "start"
    | "cancel"
    | "finish"
    | "error";

  declare interface mediaGalleries$ScanProgressEventArgs {
    /**
     * The type of progress event, i.e. start, finish, etc.
     */
    type: mediaGalleries$ScanProgressType;

    /**
     * The number of Galleries found.
     */
    galleryCount?: chrome$integer;

    /**
     * Appoximate number of media files found;
     * some file types can be either audio or video
     * and are included in both counts.
     */
    audioCount?: chrome$integer;
    imageCount?: chrome$integer;
    videoCount?: chrome$integer;
  }

  /**
   * Get the media galleries configured in this user agent.
   * If none are configured or available, the callback will receive an empty array.
   */
  declare function mediaGalleries$getMediaFileSystems(
    callback: (mediaFileSystems: FileSystem[]) => void
  ): void;

  /**
   * Get the media galleries configured in this user agent.
   * If none are configured or available, the callback will receive an empty array.
   */
  declare function mediaGalleries$getMediaFileSystems(
    options: mediaGalleries$MediaFileSystemsOptions,
    callback: (mediaFileSystems: FileSystem[]) => void
  ): void;

  /**
   * Present a directory picker to the user and add the selected directory as a gallery.
   * If the user cancels the picker, selectedFileSystemName will be empty.
   * A user gesture is required for the dialog to display.
   * Without a user gesture, the callback will run as though the user canceled.
   * @since Chrome 34.
   */
  declare function mediaGalleries$addUserSelectedFolder(
    callback: (
      mediaFileSystems: FileSystem[],
      selectedFileSystemName: string
    ) => void
  ): void;

  /**
   * @deprecated Deprecated since Chrome 51. The user can manually drop access to galleries via the permissions dialog.
   * @description Give up access to a given media gallery.
   */
  declare function mediaGalleries$dropPermissionForMediaFileSystem(
    galleryId: string,
    callback?: () => void
  ): void;

  /**
 * @deprecated Deprecated since Chrome 51. The mediaGalleries API no longer supports scanning.
 * @description Start a scan of the user's hard disks for directories containing media.
The scan may take a long time so progress and completion is communicated by events.
No permission is granted as a result of the scan, see addScanResults.
 */
  declare function mediaGalleries$startMediaScan(): void;

  /**
 * @deprecated Deprecated since Chrome 51. The mediaGalleries API no longer supports scanning.
 * @description Cancel any pending media scan.
Well behaved apps should provide a way for the user to cancel scans they start.
 */
  declare function mediaGalleries$cancelMediaScan(): void;

  /**
 * @deprecated Deprecated since Chrome 51. The mediaGalleries API no longer supports scanning.
 * @description Show the user the scan results and let them add any or all of them as galleries.
This should be used after the 'finish' onScanProgress() event has happened.
All galleries the app has access to are returned, not just the newly added galleries.
 */
  declare function mediaGalleries$addScanResults(
    callback: (mediaFileSystems: FileSystem[]) => void
  ): void;

  /**
   * Get metadata about a specific media file system
   * @since Chrome 26.
   */
  declare function mediaGalleries$getMediaFileSystemMetadata(
    mediaFileSystem: FileSystem
  ): mediaGalleries$MediaFileSystemMetadata;

  /**
 * @deprecated Deprecated since Chrome 51. Use getMediaFileSystemMetadata instead
Get metadata for all available media galleries.
 */
  declare function mediaGalleries$getAllMediaFileSystemMetadata(
    callback: (metadatas: mediaGalleries$MediaFileSystemMetadata[]) => void
  ): void;

  /**
   * Gets the media-specific metadata for a media file.
   * This should work for files in media galleries as well as other DOM filesystems.
   * @since Chrome 38.
   */
  declare function mediaGalleries$getMetadata(
    mediaFile: Blob,
    callback: (metadata: mediaGalleries$Metadata) => void
  ): void;

  /**
   * Gets the media-specific metadata for a media file.
   * This should work for files in media galleries as well as other DOM filesystems.
   * @since Chrome 38.
   */
  declare function mediaGalleries$getMetadata(
    mediaFile: Blob,
    options: mediaGalleries$MetadataOptions,
    callback: (metadata: mediaGalleries$Metadata) => void
  ): void;

  /**
   * Adds a gallery watch for the gallery with the specified gallery ID.
   * The given callback is then fired with a success or failure result.
   * @since Chrome 39.
   */
  declare function mediaGalleries$addGalleryWatch(
    galleryId: string,
    callback: (result: mediaGalleries$GalleryWatchResult) => void
  ): void;

  /**
   * Removes a gallery watch for the gallery with the specified gallery ID.
   * @since Chrome 39.
   */
  declare function mediaGalleries$removeGalleryWatch(galleryId: string): void;

  /**
 * @deprecated Deprecated since Chrome 51. Applications should store their own gallery watches as they are added.
Notifies which galleries are being watched via the given callback.
 */
  declare function mediaGalleries$getAllGalleryWatch(
    callback: (galleryIds: string[]) => void
  ): void;

  /**
 * @deprecated Deprecated since Chrome 51. Use removeGalleryWatch instead.
Removes all gallery watches.
 */
  declare function mediaGalleries$removeAllGalleryWatch(): void;

  /**
   * Fired when a media gallery is changed or a gallery watch is dropped
   * @since Chrome 38.
   */
  declare var mediaGalleries$onGalleryChanged: chrome$events.events$Event<
    (args: mediaGalleries$GalleryChangedEventArgs) => void
  >;

  /**
 * @deprecated Deprecated since Chrome 51. The mediaGalleries API no longer supports scanning.
The pending media scan has changed state. See details for more information.
 */
  declare var mediaGalleries$onScanProgress: chrome$events.events$Event<
    (args: mediaGalleries$ScanProgressEventArgs) => void
  >;

  declare var npm$namespace$config: {
    setNetworkFilter: typeof config$setNetworkFilter,
    finishAuthentication: typeof config$finishAuthentication,
    NetworkType: typeof config$NetworkType,
    AuthenticationResult: typeof config$AuthenticationResult,
    onCaptivePortalDetected: typeof config$onCaptivePortalDetected
  };

  /**
   * Indicator for the type of network used
   */
  declare var config$NetworkType: {
    WI_FI: "WiFi"
  };

  /**
   * Argument to finishAuthentication indicating the result of the captive portal authentication attempt.
   * **'unhandled':** - The extension does not handle this network or captive portal (e.g. server end-point not found or not compatible).
   * **'succeeded':** - The extension handled this network and authenticated successfully.
   * **'rejected':** - The extension handled this network, tried to authenticate, however was rejected by the server.
   * **'failed':** - The extension handled this network, tried to authenticate, however failed due to an unspecified error.
   */
  declare var config$AuthenticationResult: {
    UNHANDLED: "unhandled",
    SUCCEEDED: "succeeded",
    REJECTED: "rejected",
    FAILED: "failed"
  };

  declare interface config$NetworkInfo {
    /**
     * Currently only WiFi supported.
     */
    Type: chrome$ToStringLiteral<typeof NetworkType>;

    /**
     * A unique identifier of the network.
     */
    GUID?: string;

    /**
     * A hex-encoded byte sequence.
     */
    HexSSID?: string;

    /**
     * The decoded SSID of the network (default encoding is UTF-8).
     * To filter for non-UTF-8 SSIDs, use HexSSID instead.
     */
    SSID?: string;

    /**
     * The basic service set identification (BSSID) uniquely identifying the
     * basic service set. *BSSID* is represented as a human readable,
     * hex-encoded string with bytes separated by colons, e.g.
     * 45:67:89:ab:cd:ef.
     */
    BSSID?: string;

    /**
     * Identifier indicating the security type of the network.
     */
    Security?: "None" | "WEP-PSK" | "WPA-PSK" | "WPA-EAP";
  }

  declare interface config$NetworkInfoFilterHexSSID {
    /**
     * A hex-encoded byte sequence.
     */
    HexSSID?: string;
  }

  declare interface config$NetworkInfoFilterSSID {
    /**
     * The decoded SSID of the network (default encoding is UTF-8).
     * To filter for non-UTF-8 SSIDs, use HexSSID instead.
     */
    SSID?: string;
  }

  /**
   * Allows an extension to define network filters for the networks it can handle.
   * A call to this function will remove all filters previously
   * installed by the extension before setting the new list.
   * @param networks Network filters to set. Array of objects with either HexSSID or SSID set.
   * @param callback Called back when this operation is finished.
   */
  declare function config$setNetworkFilter(
    networks: Array<
      config$NetworkInfoFilterHexSSID | config$NetworkInfoFilterSSID
    >,
    callback: () => void
  ): void;

  /**
   * Called by the app to notify the network config API that it finished
   * a captive portal authentication attempt and hand over the result of the attempt.
   * This function must only be called with the GUID of the latest *onCaptivePortalDetected* event.
   * @param GUID Unique network identifier obtained from *onCaptivePortalDetected*.
   * @param result The result of the authentication attempt.
   * @param callback Called back when this operation is finished.
   */
  declare function config$finishAuthentication(
    GUID: string,
    result: chrome$ToStringLiteral<typeof AuthenticationResult>,
    callback?: () => void
  ): void;

  /**
   * This event fires everytime a captive portal is detected on a network
   * matching any of the currently registered network filters and the user
   * consents to use the extension for authentication. Network filters may be
   * set using the *setNetworkFilter*.
   * Upon receiving this event the extension should start its authentication
   * attempt with the captive portal. When the extension finishes its attempt,
   * it must call *finishAuthentication* with the *GUID*.
   * received with this event and the appropriate authentication result.
   * @param networkInfo Information about the network on which a captive portal was detected.
   */
  declare var config$onCaptivePortalDetected: chrome$events.events$Event<
    (networkInfo: config$NetworkInfo) => void
  >;

  declare var npm$namespace$onc: {
    getProperties: typeof onc$getProperties,
    getManagedProperties: typeof onc$getManagedProperties,
    getState: typeof onc$getState,
    setProperties: typeof onc$setProperties,
    createNetwork: typeof onc$createNetwork,
    forgetNetwork: typeof onc$forgetNetwork,
    getNetworks: typeof onc$getNetworks,
    getDeviceStates: typeof onc$getDeviceStates,
    enableNetworkType: typeof onc$enableNetworkType,
    disableNetworkType: typeof onc$disableNetworkType,
    requestNetworkScan: typeof onc$requestNetworkScan,
    startConnect: typeof onc$startConnect,
    startDisconnect: typeof onc$startDisconnect,
    getCaptivePortalStatus: typeof onc$getCaptivePortalStatus,
    getGlobalPolicy: typeof onc$getGlobalPolicy,
    onNetworksChanged: typeof onc$onNetworksChanged,
    onNetworkListChanged: typeof onc$onNetworkListChanged,
    onDeviceStateListChanged: typeof onc$onDeviceStateListChanged,
    onPortalDetectionCompleted: typeof onc$onPortalDetectionCompleted
  };
  declare type onc$ActivationStateType =
    | "Activated"
    | "Activating"
    | "NotActivated"
    | "PartiallyActivated";

  declare type onc$CaptivePortalStatus =
    | "Unknown"
    | "Offline"
    | "Online"
    | "Portal"
    | "ProxyAuthRequired";

  declare type onc$ConnectionStateType =
    | "Connected"
    | "Connecting"
    | "NotConnected";

  declare type onc$IPConfigType = "DHCP" | "Static";

  declare type onc$NetworkType =
    | "All"
    | "Cellular"
    | "Ethernet"
    | "VPN"
    | "Wireless"
    | "WiFi"
    | "WiMAX";

  declare type onc$ProxySettingsType = "Direct" | "Manual" | "PAC" | "WPAD";

  declare type _internal_$ObjectFunction = "unknown" | "getter" | "setter";

  declare interface _internal_$NetworkConfigBase<
    M: onc$ManagedObject = "unmanaged",
    IF: onc$InterfaceType = "full",
    OF: _internal_$ObjectFunction = "unknown"
  > {
    /**
     * For cellular networks, cellular network properties.
     */
    Cellular?: "There was Conditional Type, use $Call utility type";

    /**
     * For Ethernet networks, the Ethernet network properties.
     */
    Ethernet?: "There was Conditional Type, use $Call utility type";

    /**
     * The network GUID.
     */
    GUID?: string;

    /**
     * The network's IP address configuration type.
     */
    IPAddressConfigType?: "There was Conditional Type, use $Call utility type";

    /**
     * A user friendly network name.
     */
    Name?: "There was Conditional Type, use $Call utility type";

    /**
     * The IP configuration type for the name servers used by the network.
     */
    NameServersConfigType?: "There was Conditional Type, use $Call utility type";

    /**
     * The network priority.
     */
    Priority?: "There was Conditional Type, use $Call utility type";

    /**
     * The network type.
     */
    Type?: onc$NetworkType;

    /**
     * For VPN networks, the network VPN properties.
     */
    VPN?: "There was Conditional Type, use $Call utility type";

    /**
     * For WiFi networks, the network WiFi properties.
     */
    WiFi?: "There was Conditional Type, use $Call utility type";

    /**
     * For WiMAX networks, the network WiMAX properties.
     */
    WiMAX?: "There was Conditional Type, use $Call utility type";
  }

  declare interface onc$ManagedType<T> {
    /**
     * The active value currently used by the network configuration manager (e.g. Shill).
     */
    Active?: T;

    /**
     * The source from which the effective property value was determined.
     */
    Effective?: string;

    /**
     * The property value provided by the user policy.
     */
    UserPolicy?: T;

    /**
     * The property value provided by the device policy.
     */
    DevicePolicy?: T;

    /**
     * The property value set by the logged in user. Only provided if *UserEditable* is true.
     */
    UserSetting?: T;

    /**
     * The value set for all users of the device. Only provided if *DeviceEditiable* is true.
     */
    SharedSetting?: T;

    /**
     * Whether a UserPolicy for the property exists and allows the property
     * to be edited (i.e. the policy set recommended property value).
     * @default false
     */
    UserEditable?: boolean;

    /**
     * Whether a DevicePolicy for the property exists and allows the property
     * to be edited (i.e. the policy set recommended property value).
     * @default false
     */
    DeviceEditable?: boolean;
  }

  declare type onc$ManagedBoolean = {} & onc$ManagedType<boolean>;

  declare type onc$ManagedLong = {} & onc$ManagedType<chrome$integer>;

  declare type onc$ManagedDOMString = {} & onc$ManagedType<string>;

  declare type onc$ManagedDOMStringList = {} & onc$ManagedType<string[]>;

  declare type onc$ManagedIPConfigType = {} & onc$ManagedType<
    onc$IPConfigType[]
  >;

  declare interface onc$CellularProviderProperties {
    /**
     * The operator name.
     */
    Name: string;

    /**
     * Cellular network ID as a simple concatenation of the network's MCC (Mobile Country Code) and MNC (Mobile Network Code).
     */
    Code: string;

    /**
     * The two-letter country code.
     */
    Country?: string;
  }

  declare interface onc$IssuerSubjectPattern {
    /**
     * If set, the value against which to match the certificate subject's common name.
     */
    CommonName?: string;

    /**
     * If set, the value against which to match the certificate subject's common location.
     */
    Locality?: string;

    /**
     * If set, the value against which to match the certificate subject's organizations.
     * At least one organization should match the value.
     */
    Organization?: string;

    /**
     * If set, the value against which to match the certificate subject's organizational units.
     * At least one organizational unit should match the value.
     */
    OrganizationalUnit?: string;
  }

  declare interface onc$CertPattern {
    /**
     * List of URIs to which the user can be directed in case
     * no certificates that match this pattern are found.
     */
    EnrollmentURI?: string[];

    /**
     * If set, pattern against which X.509 issuer settings should be matched.
     */
    Issuer?: onc$IssuerSubjectPattern;

    /**
     * List of certificate issuer CA certificates.
     * A certificate must be signed by one of them in order to match this pattern.
     */
    IssuerCARef?: string[];

    /**
     * If set, pattern against which X.509 subject settings should be matched.
     */
    onc$IssuerSubjectPattern?: onc$IssuerSubjectPattern;
  }

  declare type onc$ClientCertType = "Ref" | "Pattern";

  declare interface onc$EAPProperties {
    AnonymousIdentity?: string;
    ClientCertPattern?: onc$CertPattern;

    /**
     * @since Chrome 60.
     */
    ClientCertPKCS11Id?: string;
    ClientCertRef?: string;
    onc$ClientCertType?: onc$ClientCertType;
    Identity?: string;
    Inner?: string;

    /**
     * The outer EAP type. Required by ONC, but may not be provided when translating from Shill.
     */
    Outer?: string;
    Password?: string;
    SaveCredentials?: boolean;
    ServerCAPEMs?: string[];
    ServerCARefs?: string[];

    /**
     * @since Chrome 60.
     */
    SubjectMatch?: onc$ManagedDOMString;
    UseProactiveKeyCaching?: boolean;
    UseSytemCAs?: boolean;
  }

  declare interface onc$FoundNetworkProperties {
    /**
     * Network availability.
     */
    Status: string;

    /**
     * Network ID.
     */
    NetworkId: string;

    /**
     * Access technology used by the network.
     */
    Technology: string;

    /**
     * The network operator's short-format name.
     */
    ShortName?: string;

    /**
     * The network operator's long-format name.
     */
    LongName?: string;
  }

  declare type onc$IPConfigurationType = "IPv4" | "IPv6";

  declare interface onc$IPConfigProperties<
    M: onc$ManagedObject = "unmanaged",
    B = "There was Conditional Type, use $Call utility type",
    S = "There was Conditional Type, use $Call utility type",
    SL = "There was Conditional Type, use $Call utility type",
    L = "There was Conditional Type, use $Call utility type"
  > {
    /**
     * Gateway address used for the IP configuration.
     */
    Gateway?: S;

    /**
     * The IP address for a connection. Can be IPv4 or IPv6 address, depending on value of Type.
     */
    IPAddress?: S;

    /**
     * Array of addresses used for name servers.
     */
    NameServers?: SL;

    /**
     * The routing prefix.
     */
    RoutingPrefix?: L;

    /**
     * The IP configuration type. Can be IPv4 or IPv6.
     */
    Type?: "There was Conditional Type, use $Call utility type";

    /**
     * The URL for WEb Proxy Auto-Discovery, as reported over DHCP.
     */
    WebProxyAutoDiscoveryUrl?: S;
  }

  declare interface onc$PaymentPortalPost {
    /**
     * The HTTP method to use for the payment portal.
     */
    Method: "POST";

    /**
     * The post data to send to the payment portal.
     */
    PostData?: string;

    /**
     * The payment portal URL.
     */
    Url?: string;
  }

  declare interface onc$PaymentPortal {
    /**
     * The HTTP method to use for the payment portal.
     */
    Method: string;

    /**
     * The payment portal URL.
     */
    Url?: string;
  }

  declare interface onc$ProxyLocation {
    /**
     * The proxy IP address host.
     */
    Host?: string;

    /**
     * The port to use for the proxy
     */
    runtime$Port?: chrome$integer;
  }

  declare interface onc$ManagedProxyLocation {
    /**
     * The proxy IP address host.
     */
    Host?: onc$ManagedDOMString;

    /**
     * The port to use for the proxy
     */
    runtime$Port?: onc$ManagedLong;
  }

  declare interface onc$ManualProxySettings<
    M,
    P = "There was Conditional Type, use $Call utility type"
  > {
    /**
     * Settings for HTTP proxy.
     */
    HTTPProxy?: P;

    /**
     * Settings for secure HTTP proxy.
     */
    SecureHTTPProxy?: P;

    /**
     * Settings for FTP proxy.
     */
    FTPProxy?: P;

    /**
     * Settings for SOCKS proxy.
     */
    SOCKS?: P;
  }

  declare interface onc$ProxySettings<
    M = "unmanaged",
    S = "There was Conditional Type, use $Call utility type",
    SL = "There was Conditional Type, use $Call utility type"
  > {
    /**
     * The type of proxy settings.
     */
    Type: "There was Conditional Type, use $Call utility type";

    /**
     * Manual proxy settings - used only for *Manual* proxy settings.
     */
    Manual?: onc$ManualProxySettings<M>;

    /**
     * Domains and hosts for which manual proxy settings are excluded.
     */
    ExcludeDomains?: SL;

    /**
     * URL for proxy auto-configuration file.
     */
    PAC?: S;
  }

  declare interface onc$SIMLockStatus {
    /**
     * The status of SIM lock - possible values are 'sim-pin', 'sim-puk' and ''.
     */
    LockType: "sim-pin" | "sim-puk" | "";

    /**
     * Whether SIM lock is enabled.
     */
    LockEnabled: boolean;

    /**
     * Number of PIN lock tries allowed before PUK is required to unlock the SIM.
     */
    RetriesLeft?: chrome$integer;
  }

  declare interface onc$ThirdPartyVPNProperties {
    /**
     * ID of the third-party VPN provider extension.
     */
    ExtensionID: string;

    /**
     * The VPN provider name.
     */
    ProviderName?: string;
  }

  declare interface onc$ManagedThirdPartyVPNProperties {
    /**
     * ID of the third-party VPN provider extension.
     */
    ExtensionID: onc$ManagedDOMString;

    /**
     * The VPN provider name.
     */
    ProviderName?: string;
  }

  declare interface onc$CellularBase {
    /**
     * Carrier account activation state.
     */
    ActivationState?: onc$ActivationStateType;

    /**
     * If the modem is registered on a network, the network technology currently in use.
     */
    NetworkTechnology?: string;

    /**
     * The roaming state of the cellular modem on the current network.
     */
    RoamingState?: string;

    /**
     * Whether a SIM card is present.
     */
    SIMPresent?: boolean;

    /**
     * The current network signal strength.
     */
    SignalStrength?: chrome$integer;
  }

  declare type onc$CellularProperties<M: onc$ManagedObject = "unmanaged"> = {
    /**
     * Whether the cellular network should be connected automatically (when in range).
     */
    AutoConnect?: "There was Conditional Type, use $Call utility type",

    /**
     * The cellular network activation type.
     */
    ActivationType?: string,

    /**
     * Whether roaming is allowed for the network.
     */
    AllowRoaming?: boolean,

    /**
     * The name of the carrier for which the cellular device is configured.
     */
    Carrier?: "There was Conditional Type, use $Call utility type",

    /**
     * Cellular device technology family - CDMA or GSM.
     */
    Family?: "CDMA" | "GSM",

    /**
     * The firmware revision loaded in the cellular modem.
     */
    FirmwareRevision?: string,

    /**
     * The list of networks found during the most recent network scan.
     */
    FoundNetworks?: onc$FoundNetworkProperties[],

    /**
     * The cellular modem hardware revision.
     */
    HardwareRevision?: string,

    /**
     * Information about the operator that issued the SIM card currently installed in the modem.
     */
    HomeProvider?: onc$CellularProviderProperties,

    /**
     * The cellular modem manufacturer.
     */
    MAnufacturer?: string,

    /**
     * The cellular modem model ID.
     */
    ModelID?: string,

    /**
     * Online payment portal a user can use to sign-up for or modify a mobile data plan.
     */
    onc$PaymentPortal?: onc$PaymentPortal | onc$PaymentPortalPost,

    /**
     * The revision of the Preferred Roaming List loaded in the modem.
     */
    PRLVersion?: chrome$integer,

    /**
 * @since Chrome 63.
True when a cellular network scan is in progress.
 */
    Scanning?: boolean,

    /**
     * Information about the operator on whose network the modem is currently registered.
     */
    ServingOperator?: onc$CellularProviderProperties,

    /**
     * The state of SIM lock for GSM family networks.
     */
    onc$SIMLockStatus?: onc$SIMLockStatus,

    /**
     * Whether the cellular network supports scanning.
     */
    SupportNetworkScan?: boolean,

    /**
     * A list of supported carriers.
     */
    SupportedCarriers?: string[]
  } & onc$CellularBase;

  declare type onc$EthernetAuthenticationType = "None" | "8021X";

  declare interface onc$EthernetProperties<M: onc$ManagedObject = "unmanaged"> {
    /**
     * Whether the Ethernet network should be connected automatically.
     */
    AutoConnect?: "There was Conditional Type, use $Call utility type";

    /**
     * The authentication used by the Ethernet network. Possible values are None and 8021X.
     */
    Authentication?: "There was Conditional Type, use $Call utility type";

    /**
     * Network's EAP settings. Required for 8021X authentication.
     */
    EAP?: onc$EAPProperties;
  }

  declare interface onc$VPNProperties<
    M: onc$ManagedObject = "unmanaged",
    B = "There was Conditional Type, use $Call utility type",
    S = "There was Conditional Type, use $Call utility type"
  > {
    /**
     * Whether the VPN network should be connected automatically.
     */
    AutoConnect?: B;

    /**
     * The VPN host.
     */
    Host?: S;

    /**
     * The VPN type.
     * This cannot be an enum because of 'L2TP-IPSec'.
     * This is optional for NetworkConfigProperties which is passed to
     * *setProperties* which may be used to set only specific properties.
     */
    Type?: S;
  }

  declare interface onc$WiFiPropertiesBase<
    M: onc$ManagedObject = "unmanaged",
    S = "There was Conditional Type, use $Call utility type"
  > {
    /**
     * The BSSID of the associated access point..
     */
    BSSID?: string;

    /**
     * The WiFi service operating frequency in MHz.
     * For connected networks, the current frequency on which the network is connected.
     * Otherwise, the frequency of the best available BSS.
     */
    Frequency?: chrome$integer;

    /**
     * HEX-encoded copy of the network SSID.
     */
    HexSSID?: S;

    /**
     * The network security type.
     */
    Security?: S;

    /**
     * The network SSID.
     */
    SSID?: S;

    /**
     * The network signal strength.
     */
    SignalStrength?: chrome$integer;

    /**
     * @since Chrome 70
     * @description The tethering state associated with the connection.
     */
    TetheringState?: string;
  }

  declare type onc$WiFiProperties<
    M: onc$ManagedObject = "unmanaged",
    OF: _internal_$_internal_$ObjectFunction = "getter",
    B = "There was Conditional Type, use $Call utility type",
    S = "There was Conditional Type, use $Call utility type",
    L = "There was Conditional Type, use $Call utility type"
  > = {
    /**
     * Whether ARP polling of default gateway is allowed.
     * @default true
     */
    AllowGatewayARPPolling?: B,

    /**
     * Whether the WiFi network should be connected automatically when in range.
     */
    AutoConnect?: B,

    /**
     * The network EAP properties. Required for WEP-8021X and WPA-EAP networks.
     */
    EAP?: onc$EAPProperties,

    /**
     * Contains all operating frequency recently seen for the WiFi network.
     */
    FrequencyList?: chrome$integer[],

    /**
     * Whether the network SSID will be broadcast.
     */
    HiddenSSID?: B,

    /**
     * Signal-to-noise value (in dB) below which roaming to a new network should be attempted.
     */
    RoamTreshold?: L,

    /**
 * @since Chrome 66.
The passphrase for WEP/WPA/WPA2 connections.
*This property can only be set!*
 */
    Passphrase?: "There was Conditional Type, use $Call utility type"
  } & onc$WiFiPropertiesBase<M>;

  declare interface onc$WiMAXProperties<
    M: onc$ManagedObject = "unmanaged",
    B = "There was Conditional Type, use $Call utility type"
  > {
    /**
     * Whether the network should be connected automatically.
     */
    AutoConnect?: B;

    /**
     * The network EAP properties.
     */
    EAP?: onc$EAPProperties;

    /**
     * The network signal strength.
     */
    SignalStrength?: chrome$integer;
  }

  declare type onc$ManagedObject = "managed" | "unmanaged";

  declare type onc$InterfaceType = "partial" | "full";

  declare type onc$NetworkConfigProperties<
    OF: _internal_$_internal_$ObjectFunction = "unknown"
  > = {} & _internal_$_internal_$NetworkConfigBase<"unmanaged", "full", OF>;

  declare type onc$NetworkProperties<
    M: onc$ManagedObject = "unmanaged",
    IF: onc$InterfaceType = "full"
  > = {
    /**
     * Whether the network is connectable.
     */
    Connectable?: boolean,

    /**
     * The network's current connection state.
     */
    ConnectionState?: onc$ConnectionStateType,

    /**
     * The last recorded network error state.
     */
    ErrorState?: string,

    /**
     * The network's IP configuration.
     */
    IPConfigs?: onc$IPConfigProperties[],

    /**
     * The network's MAC address.
     */
    MacAddress?: string,

    /**
     * The network's proxy settings.
     */
    onc$ProxySettings?: onc$ProxySettings,

    /**
     * For a connected network, whether the network connectivity to the Internet is limited,
     * e.g. if the network is behind a portal, or a cellular network is not activated.
     */
    RestrictedConnectivity?: boolean,

    /**
     * The network's static IP configuration.
     */
    StaticIPConfig?: onc$IPConfigProperties<M>,

    /**
     * IP configuration that was received from the DHCP server before applying static IP configuration.
     */
    SavedIPConfig?: onc$IPConfigProperties,

    /**
     * Indicates whether and how the network is configured.
     * 'None' conflicts with extension code generation,
     * so we must use a string for 'Source' instead of a SourceType enum.
     */
    Source?: "Device" | "DevicePolicy" | "User" | "UserPolicy" | "None"
  } & _internal_$_internal_$NetworkConfigBase<M, IF, "getter">;

  declare type onc$ManagedProperties = {} & onc$NetworkProperties<"managed">;

  declare type onc$NetworkStateProperties = {} & onc$NetworkProperties<
    "unmanaged",
    "partial"
  >;

  /**
   * Device properties by which to filter the list of returned audio devices.
   * If the filter is not set or set to {}, returned device list will contain all available audio devices.
   */
  declare interface onc$Filter {
    /**
     * If set, only audio devices whose stream type is included in this list will satisfy the filter.
     */
    streamTypes?: audio$StreamType[];

    /**
     * If set, only audio devices whose active state matches this value will satisfy the filter.
     */
    isActive?: boolean;

    /**
     * The type of networks to return.
     */
    networkType: onc$NetworkType;

    /**
     * If true, only include visible (physically connected or in-range) networks.
     * @default false
     */
    visible?: boolean;

    /**
     * If true, only include configured (saved) networks.
     * @default false
     */
    configured?: boolean;

    /**
     * Maximum number of networks to return.
     * Use 0 for no limit
     * @default 1000 if unspecified.
     */
    limit?: chrome$integer;
  }

  declare type onc$DeviceState =
    | "Uninitialized"
    | "Disabled"
    | "Enabling"
    | "Enabled"
    | "Prohibited";

  /**
   * A list of devices and their state.
   */
  declare interface onc$DeviceStates {
    /**
     * Set if the device is enabled. True if the device is currently scanning.
     */
    Scanning?: boolean;

    /**
     * The SIM lock status if Type = Cellular and SIMPresent = True.
     */
    onc$SIMLockStatus?: onc$SIMLockStatus;

    /**
     * Set to the SIM present state if the device type is Cellular.
     */
    SIMPresent?: boolean;

    /**
     * The current state of the device.
     *
     * **Uninitialized**
     *   - Device is available but not initialized.
     * **Disabled**
     *   - Device is initialized but not enabled.
     * **Enabling**
     *   - Enabled state has been requested but has not completed.
     * **Enabled**
     *   - Device is enabled.
     * **Prohibited**
     *   - Device is prohibited.
     */
    State: onc$DeviceState;

    /**
     * The network type associated with the device (Cellular, Ethernet, WiFi, or WiMAX).
     */
    Type: onc$NetworkType;
  }

  declare interface onc$GlobalPolicy {
    /**
     * If true, only policy networks may auto connect.
     * @default false
     */
    AllowOnlyPolicyNetworksToAutoconnect?: boolean;

    /**
     * If true, only policy networks may be connected to
     * and no new networks may be added or configured.
     * @default false
     */
    AllowOnlyPolicyNetworksToConnect?: boolean;

    /**
     * List of blacklisted networks.
     * Connections to blacklisted networks are prohibited.
     * Networks can be whitelisted again by specifying an explicit network configuration.
     * @default []
     */
    BlacklistedHexSSIDs?: string[];
  }

  /**
   * Gets all the properties of the network with id *networkGuid*.
   * Includes all properties of the network (read-only and read/write values).
   * @param networkGuid The GUID of the network to get properties for.
   * @param callback Called with the network properties when received.
   */
  declare function onc$getProperties(
    networkGuid: string,
    callback: (result: onc$NetworkProperties) => void
  ): void;

  /**
   * Gets the merged properties of the network with id networkGuid from the sources:
   * User settings, shared settings, user policy, device policy and the currently active settings.
   * @param networkGuid The GUID of the network to get properties for.
   * @param callback Called with the managed network properties when received.
   */
  declare function onc$getManagedProperties(
    networkGuid: string,
    callback: (result: onc$ManagedProperties) => void
  ): void;

  /**
   * Gets the cached read-only properties of the network with id *networkGuid*.
   * This is meant to be a higher performance function than *getProperties*,
   * which requires a round trip to query the networking subsystem.
   * The following properties are returned for all networks:
   * GUID, Type, Name, WiFi.Security.
   * Additional properties are provided for visible networks:
   * ConnectionState, ErrorState, WiFi.SignalStrength,
   * Cellular.NetworkTechnology, Cellular.ActivationState, Cellular.RoamingState.
   * @param networkGuid The GUID of the network to get properties for.
   * @param callback Called immediately with the network state properties.
   */
  declare function onc$getState(
    networkGuid: string,
    callback: (result: onc$NetworkStateProperties) => void
  ): void;

  /**
   * Sets the properties of the network with id *networkGuid*.
   * This is only valid for configured networks (Source != None).
   * Unconfigured visible networks should use **createNetwork** instead.
   * **In kiosk sessions, calling this method on a shared network will fail.**
   * @param networkGuid The GUID of the network to set properties for.
   * @param properties The properties to set.
   * @param callback Called when the operation has completed.
   */
  declare function onc$setProperties(
    networkGuid: string,
    properties: onc$NetworkConfigProperties<"setter">,
    callback?: () => void
  ): void;

  /**
 * Creates a new network configuration from properties.
 * If a matching configured network already exists, this will fail.
 * Otherwise returns the GUID of the new network.
 * @param shared If true, share this network configuration with other users.
Note: This option is exposed only to Chrome's Web UI.
When called by apps, false is the only allowed value.
 * @param properties The properties to configure the new network with.
 * @param callback Called with the GUID for the new network configuration once the network has been created.
 */
  declare function onc$createNetwork(
    shared: false,
    properties: onc$NetworkConfigProperties<"setter">,
    callback?: () => void
  ): void;

  /**
   * Forgets a network configuration by clearing any configured properties for the network with GUID networkGuid.
   * This may also include any other networks with matching identifiers (e.g. WiFi SSID and Security).
   * If no such configuration exists, an error will be set and the operation will fail.
   * **In kiosk sessions, this method will not be able to forget shared network configurations.**
   * @param networkGuid The GUID of the network to forget.
   * @param callback Called when the operation has completed.
   */
  declare function onc$forgetNetwork(
    networkGuid: string,
    callback?: () => void
  ): void;

  /**
   * Returns a list of network objects with the same properties provided by *getState*.
   * A filter is provided to specify the type of networks returned and to limit the number of networks.
   * Networks are ordered by the system based on their priority, with connected or connecting networks listed first.
   * @param callback Called with a interface of networks and their state properties when received.
   */
  declare function onc$getNetworks(
    filter: onc$Filter,
    callback: (result: onc$NetworkStateProperties[]) => void
  ): void;

  /**
   * Returns states of available networking devices.
   * @param callback Called with a list of devices and their state.
   */
  declare function onc$getDeviceStates(
    callback: (result: onc$DeviceStates[]) => void
  ): void;

  /**
   * Enables any devices matching the specified network type.
   * Note, the type might represent multiple network types (e.g. 'Wireless').
   * @param networkType The type of network to enable.
   */
  declare function onc$enableNetworkType(networkType: onc$NetworkType): void;

  /**
   * Disables any devices matching the specified network type.
   * Note, the type might represent multiple network types (e.g. 'Wireless').
   * @param networkType The type of network to disable.
   */
  declare function onc$disableNetworkType(networkType: onc$NetworkType): void;

  /**
   * Requests that the networking subsystem scan for new networks and update the list returned by *getVisibleNetworks*.
   * This is only a request: the network subsystem can choose to ignore it.
   * If the list is updated, then the *onNetworkListChanged* event will be fired.
   */
  declare function onc$requestNetworkScan(): void;

  /**
   * Requests that the networking subsystem scan for new networks and update the list returned by *getVisibleNetworks*.
   * This is only a request: the network subsystem can choose to ignore it.
   * If the list is updated, then the *onNetworkListChanged* event will be fired.
   * @param networkType If provided, requests a scan specific to the type. For Cellular a mobile network scan will be requested if supported.
   * @since Chrome 63.
   */
  declare function onc$requestNetworkScan(networkType: onc$NetworkType): void;

  /**
 * @description Starts a connection to the network with networkGuid.
 * @param networkGuid The GUID of the network to connect to.
 * @param callback Creates a new network configuration from properties.
If a matching configured network already exists, this will fail.
Otherwise returns the GUID of the new network.
 */
  declare function onc$startConnect(
    networkGuid: string,
    callback?: () => void
  ): void;

  /**
   * @description Starts a disconnect from the network with networkGuid.
   * @param networkGuid The GUID of the network to connect to.
   * @param callback Called when the disconnect request has been sent. See note for *startConnect*.
   */
  declare function onc$startDisconnect(
    networkGuid: string,
    callback?: () => void
  ): void;

  /**
   * Returns captive portal status for the network matching 'networkGuid'.
   * @param networkGuid The GUID of the network to get captive portal status for.
   * @param callback A callback function that returns the results of the query for network captive portal status.
   */
  declare function onc$getCaptivePortalStatus(
    networkGuid: string,
    callback: (result: onc$CaptivePortalStatus) => void
  ): void;

  /**
   * Gets the global policy properties.
   * These properties are not expected to change during a session.
   */
  declare function onc$getGlobalPolicy(
    callback: (result: onc$GlobalPolicy) => void
  ): void;

  /**
   * Fired when the properties change on any of the networks.
   * Sends a list of GUIDs for networks whose properties have changed.
   */
  declare var onc$onNetworksChanged: chrome$events.events$Event<
    (changes: string[]) => void
  >;

  /**
   * Fired when the list of networks has changed. Sends a complete list of GUIDs for all the current networks.
   */
  declare var onc$onNetworkListChanged: chrome$events.events$Event<
    (changes: string[]) => void
  >;

  /**
   * Fired when the list of devices has changed or any device state properties have changed.
   */
  declare var onc$onDeviceStateListChanged: chrome$events.events$Event<
    () => void
  >;

  /**
   * Fired when a portal detection for a network completes.
   * Sends the GUID of the network and the corresponding captive portal status.
   */
  declare var onc$onPortalDetectionCompleted: chrome$events.events$Event<
    (networkGuid: string, status: onc$CaptivePortalStatus) => void
  >;

  declare var npm$namespace$notifications: {
    create: typeof notifications$create,
    update: typeof notifications$update,
    clear: typeof notifications$clear,
    getAll: typeof notifications$getAll,
    getPermissionLevel: typeof notifications$getPermissionLevel,
    TemplateType: typeof notifications$TemplateType,
    PermissionLevel: typeof notifications$PermissionLevel,
    onClosed: typeof notifications$onClosed,
    onClicked: typeof notifications$onClicked,
    onButtonClicked: typeof notifications$onButtonClicked,
    onPermissionLevelChanged: typeof notifications$onPermissionLevelChanged,
    onShowSettings: typeof notifications$onShowSettings
  };

  /**
   * @enum {}
   * @prop BASIC - icon, title, message, expandedMessage, up to two buttons.
   * @prop IMAGE - icon, title, message, expandedMessage, image, up to two buttons.
   * @prop LIST - icon, title, message, items, up to two buttons. Users on Mac OS X only see the first item.
   * @prop PROGRESS - icon, title, message, progress, up to two buttons.
   */
  declare var notifications$TemplateType: {
    BASIC: "basic",
    IMAGE: "image",
    LIST: "list",
    PROGRESS: "progress"
  };

  /**
   * @enum {}
   * @property GRANTED - User has elected to show notifications from the app . This is the default at install time.
   * @property DENIED - User has elected not to show notifications from the app.
   */
  declare var notifications$PermissionLevel: {
    GRANTED: "granted",
    DENIED: "denied"
  };

  declare interface notifications$ButtonOptions {
    title: string;
    iconUrl?: string;
  }

  declare interface notifications$ItemOptions {
    /**
     * Title of one item of a list notification.
     */
    title: string;

    /**
     * Additional details about this item.
     */
    message: string;
  }

  declare interface notifications$NotificationOptions {
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
     * The type of the change which happened to the observed entry.
     * If it is DELETED, then the observed entry will be automatically
     * removed from the list of observed entries.
     * @see ChangeType
     */
    changeType: chrome$ToStringLiteral<typeof ChangeType>;

    /**
     * List of changes to entries within the observed directory (including the entry itself)
     */
    changes?: fileSystemProvider$NotificationChange[];

    /**
     * Tag for the notification.
     * Required if the file system was mounted with the supportsNotifyTag option.
     * Note, that this flag is necessary to provide notifications about changes
     * which changed even when the system was shutdown.
     */
    tag?: string;

    /**
     * Which type of notification to display. Required for notifications.create method.
     * @see enum TemplateType
     */
    type: chrome$ToStringLiteral<typeof TemplateType>;

    /**
     * Optional.
     * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
     * URLs can be a data URL, a blob URL, or a URL relative to a resource within this app's .crx file Required for notifications.create method.
     */
    iconUrl: string;

    /**
 * @deprecated since Chrome 59. The app icon mask is not visible for Mac OS X users.
A URL to the app icon mask. URLs have the same restrictions as iconUrl.
The app icon mask should be in alpha channel,
as only the alpha channel of the image will be considered.
 */
    appIconMaskUrl?: string;

    /**
     * Title of the notification (e.g. sender name for email). Required for notifications.create method.
     */
    title: string;

    /**
     * Main notification content. Required for notifications.create method.
     */
    message: string;

    /**
     * Alternate notification content with a lower-weight font.
     * @since Chrome 31.
     */
    contextMessage?: string;

    /**
     * Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest.
     * On platforms that don't support a notification center (Windows, Linux & Mac),
     * -2 and -1 result in an error as notifications with those priorities will not be shown at all.
     * @default 0
     */
    priority?: -2 | -1 | 0 | 1 | 2;

    /**
     * A timestamp associated with the notification, in milliseconds past the epoch (e.g. Date.now() + n).
     */
    eventTime?: chrome$double;

    /**
     * Text and icons for up to two notification action buttons.
     */
    buttons?: notifications$ButtonOptions[];

    /**
 * @deprecated Deprecated since Chrome 59. The image is not visible for Mac OS X users.
A URL to the image thumbnail for image-type notifications.
URLs have the same restrictions as iconUrl.
 */
    imageUrl?: string;

    /**
     * Items for multi-item notifications.
     * Items for multi-item notifications. Users on Mac OS X only see the first item.
     */
    items?: notifications$ItemOptions[];

    /**
     * Current progress ranges from 0 to 100.
     * @since Chrome 30.
     */
    progress?: chrome$integer;

    /**
     * @deprecated Deprecated since Chrome 67. This UI hint is ignored as of Chrome 67
     * @description Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
     */
    isClickable?: boolean;

    /**
     * Indicates that the notification should remain visible
     * on screen until the user activates or dismisses the notification.
     * This defaults to false.
     * @since Chrome 50
     */
    requireInteraction?: boolean;

    /**
     * @since Chrome 70.
     * @description Indicates that no sounds or vibrations should be made when the notification is being shown.
     * @default false
     */
    silent?: boolean;
  }

  /**
   * The notification closed, either by the system or by user action.
   */
  declare var notifications$onClosed: chrome$events.events$Event<
    (notificationId: string, byUser: boolean) => void
  >;

  /**
   * The user clicked in a non-button area of the notification.
   */
  declare var notifications$onClicked: chrome$events.events$Event<
    (notificationId: string) => void
  >;

  /**
   * The user pressed a button in the notification.
   */
  declare var notifications$onButtonClicked: chrome$events.events$Event<
    (notificationId: string, buttonIndex: chrome$integer) => void
  >;

  /**
   * The user changes the permission level.
   * @since Chrome 32.
   */
  declare var notifications$onPermissionLevelChanged: chrome$events.events$Event<
    (level: string) => void
  >;

  /**
 * @deprecated Deprecated since Chrome 65. Custom notification settings button is no longer supported.
 * @description The user clicked on a link for the app's notification settings.
As of Chrome 47, only ChromeOS has UI that dispatches this event.
As of Chrome 65, that UI has been removed from ChromeOS, too.
 */
  declare var notifications$onShowSettings: chrome$events.events$Event<
    () => void
  >;

  /**
 * Creates and displays a notification.
 * @param notificationId Identifier of the notification.
If not set or empty, an ID will automatically be generated.
If it matches an existing notification, this method first
clears that notification before proceeding with the create operation.
The notificationId parameter is required before Chrome 42.
 * @param options Contents of the notification.
 * @param callback Returns the notification id (either supplied or generated) that represents the created notification.
 */
  declare function notifications$create(
    notificationId: string,
    options: notifications$NotificationOptions,
    callback?: (notificationId: string) => void
  ): void;

  /**
   * Creates and displays a notification.
   * @param notificationId Identifier of the notification.
   * @param options Contents of the notification.
   * @param callback Returns the notification id (either supplied or generated) that represents the created notification.
   */
  declare function notifications$create(
    options: notifications$NotificationOptions,
    callback?: (notificationId: string) => void
  ): void;

  /**
   * Updates an existing notification.
   * @param notificationId The id of the notification to be updated. This is returned by notifications.create method.
   * @param options Contents of the notification to update to.
   * @param callback Called to indicate whether a matching notification existed.
   */
  declare function notifications$update(
    notificationId: string,
    options: $Shape<notifications$NotificationOptions>,
    callback?: (wasUpdated: boolean) => void
  ): void;

  /**
   * Clears the specified notification.
   * @param notificationId The id of the notification to be cleared. This is returned by notifications.create method.
   * @param callback Called to indicate whether a matching notification existed.
   */
  declare function notifications$clear(
    notificationId: string,
    callback?: (wasCleared: boolean) => void
  ): void;

  /**
 * Retrieves all the active notifications.
 * @since Chrome 29.
 * @param callback Returns the set of notification_ids currently in the system.
Get list of notifications ids using Object.keys();
 * @example getAll((result) => {
console.log('Active notifications:', Object.keys(result));
});
 */
  declare function notifications$getAll(
    callback: (notifications: {
      [notificationId: string]: true
    }) => void
  ): void;

  /**
   * Retrieves whether the user has enabled notifications from this app .
   * @since Chrome 32.
   * @param callback Returns the current permission level.
   * @see enum PermissionLevel
   */
  declare function notifications$getPermissionLevel(
    callback: (level: chrome$ToStringLiteral<typeof PermissionLevel>) => void
  ): void;

  declare var npm$namespace$permissions: {
    contains: typeof permissions$contains,
    getAll: typeof permissions$getAll,
    request: typeof permissions$request,
    remove: typeof permissions$remove,
    onRemoved: typeof permissions$onRemoved,
    onAdded: typeof permissions$onAdded
  };
  declare interface permissions$Permissions {
    /**
     * List of named permissions (does not include hosts or origins).
     * Anything listed here must appear in the optional_permissions list in the manifest.
     */
    permissions?: chrome$runtime.runtime$OptionalPermission[];

    /**
     * List of origin permissions.
     * Anything listed here must be a subset of a host that appears in the
     * optional_permissions list in the manifest. For example, if
     * http://*.example.com/ or http://* appears in optional_permissions,
     * you can request an origin of http://help.example.com/.
     * Any path is ignored.
     */
    origins?: chrome$runtime.runtime$UrlMatches[] | string[];
  }

  declare type permissions$PermissionEvent = {} & undefined.events$Event<
    (permissions: permissions$Permissions) => void
  >;

  /**
   * Checks if the app has the specified permissions.
   * @param callback Parameter *result*: True if the app has the specified permissions.
   */
  declare function permissions$contains(
    permissions: permissions$Permissions,
    callback: (result: boolean) => void
  ): void;

  /**
   * Gets the app's current set of permissions.
   * @param callback Parameter *permissions*: The app's active permissions.
   */
  declare function permissions$getAll(
    callback: (permissions: permissions$Permissions) => void
  ): void;

  /**
   * Requests access to the specified permissions.
   * These permissions must be defined in the optional_permissions field of the manifest.
   * If there are any problems requesting the permissions, runtime.lastError will be set.
   * @param callback Parameter *granted*: True if the user granted the specified permissions.
   */
  declare function permissions$request(
    permissions: permissions$Permissions,
    callback?: (granted: boolean) => void
  ): void;

  /**
   * Removes access to the specified permissions. If there are any problems removing the permissions, runtime.lastError will be set.
   * @param callback Parameter *removed*: True if the permissions were removed.
   */
  declare function permissions$remove(
    permissions: permissions$Permissions,
    callback?: (removed: boolean) => void
  ): void;

  /**
   * Fired when access to permissions has been removed from the app.
   */
  declare var permissions$onRemoved: permissions$PermissionEvent;

  /**
   * Fired when the app acquires new permissions.
   */
  declare var permissions$onAdded: permissions$PermissionEvent;

  declare var npm$namespace$platformKeys: {
    selectClientCertificates: typeof platformKeys$selectClientCertificates,
    getKeyPair: typeof platformKeys$getKeyPair,
    subtleCrypto: typeof platformKeys$subtleCrypto,
    verifyTLSServerCertificate: typeof platformKeys$verifyTLSServerCertificate,
    ClientCertificateType: typeof platformKeys$ClientCertificateType
  };

  /**
   * @enum {}
   */
  declare var platformKeys$ClientCertificateType: {
    RSA_SIGN: "rsaSign",
    ECDSA_SIGN: "ecdsaSign"
  };

  declare interface platformKeys$Match {
    /**
     * The DER encoding of a X.509 certificate.
     */
    certificate: ArrayBuffer;

    /**
 * @see [KeyAlgorithm]{@link http://www.w3.org/TR/WebCryptoAPI/#key-algorithm-interface}
 * @description The KeyAlgorithm of the certified key. This contains algorithm
parameters that are inherent to the key of the certificate (e.g. the key
length). Other parameters like the hash function used by the sign
function are not included.
 */
    keyAlgorithm: KeyAlgorithm;
  }

  /**
   * Analogous to TLS1.1's CertificateRequest.
   * @see {@link http://tools.ietf.org/html/rfc4346#section-7.4.4}
   */
  declare interface platformKeys$ClientCertificateRequest {
    /**
     * This field is a list of the types of certificates requested, sorted in
     * order of the server's preference. Only certificates of a type contained
     * in this list will be retrieved. If *certificateTypes* is the
     * empty list, however, certificates of any type will be returned.
     * @see ClientCertificateType
     */
    certificateTypes: chrome$ToStringLiteral<typeof ClientCertificateType>[];

    /**
     * List of distinguished names of certificate authorities allowed by the
     * server. Each entry must be a DER-encoded X.509 DistinguishedName.
     */
    certificateAuthorities: ArrayBuffer[];
  }

  declare interface platformKeys$SelectDetails {
    /**
     * Only certificates that match this request will be returned.
     */
    permissions$request: platformKeys$ClientCertificateRequest;

    /**
     * If given, the *selectClientCertificates* operates on this
     * list. Otherwise, obtains the list of all certificates from the platform's
     * certificate stores that are available to this extensions.
     * Entries that the extension doesn't have permission for or which doesn't
     * match the request, are removed.
     */
    clientCerts?: ArrayBuffer[];

    /**
     * If true, the filtered list is presented to the user to manually select a
     * certificate and thereby granting the extension access to the
     * certificate(s) and key(s).Only the selected certificate(s) will be
     * returned. If is false, the list is reduced to all certificates that the
     * extension has been granted access to (automatically or manually).
     */
    interactive: boolean;
  }

  declare interface platformKeys$VerificationDetails {
    serverCertificateChain: ArrayBuffer[];
    hostname: string;
  }

  declare interface platformKeys$VerificationResult {
    /**
     * The result of the trust verification: true if trust for the given
     * verification details could be established and false if trust is rejected
     * for any reason*
     */
    trusted: boolean;

    /**
     * If the trust verification failed, this array contains the errors reported
     * by the underlying network layer. Otherwise, this array is empty.
     * **Note:** This list is meant for debugging only and may not
     * contain all relevant errors. The errors returned may change in future
     * revisions of this API, and are not guaranteed to be forwards or backwards
     * compatible.
     */
    debug_errors: string[];
  }

  /**
 * This function filters from a list of client certificates the ones that
 * are known to the platform, match *request* and for which the
 * app has permission to access the certificate and its private key.
 * If *interactive* is true, the user is presented a dialog where
 * they can select from matching certificates and grant the app access
 * to the certificate.
 * The selected / filtered client certificates will be passed to *callback*.
 * @param callback Will provide *matches*: The list of certificates that match the request, that the
app has permission for and, if *interactive* is true, that were selected by the user.
 */
  declare function platformKeys$selectClientCertificates(
    details: platformKeys$SelectDetails,
    callback: (matches: platformKeys$Match[]) => void
  ): void;

  /**
 * @description Passes the key pair of *certificate* for usage with
platformKeys.subtleCrypto to *callback*.

❗ Note:
Currently, this function only supports the "RSASSA-PKCS1-v1_5"
algorithm with one of the hashing algorithms "none", "SHA-1", "SHA-256",
"SHA-384", and "SHA-512"
 * @param certificate The certificate of a *Match* returned by *selectClientCertificates*.
 * @param parameters Determines signature/hash algorithm parameters additionally to the parameters fixed by the key itself.
The same parameters are accepted as by WebCrypto's importKey (see docs).
function, e.g. *RsaHashedImportParams* for a RSASSA-PKCS1-v1_5
key. For RSASSA-PKCS1-v1_5 keys, additionally the parameters *{
"hash": { "name": "none" } }* are supported. The sign function will
then apply PKCS#1 v1.5 padding and but not hash the given data.
 * @param callback The public and private CryptoKey of a certificate which can only be used with *subleCrypto*.
 * @param Might be *null* if this app does not have access to it.
 * @param
 * @see [WebCrypto's importKey docs]{@link http://www.w3.org/TR/WebCryptoAPI/#SubtleCrypto-method-importKey}
 * @see [CryptoKey docs]{@link http://www.w3.org/TR/WebCryptoAPI/#dfn-CryptoKey}
 */
  declare function platformKeys$getKeyPair(
    certificate: ArrayBuffer,
    parameters: { [key: string]: any },
    callback: (publicKey: CryptoKey, privateKey: CryptoKey | null) => void
  ): void;

  /**
   * An implementation of WebCrypto's SubtleCrypto
   * that allows crypto operations on keys of client
   * certificates that are available to this app.
   * @see [SubtleCrypto]{@link http://www.w3.org/TR/WebCryptoAPI/#subtlecrypto-interface}
   */
  declare function platformKeys$subtleCrypto(): SubtleCrypto;

  /**
   * Checks whether *details.serverCertificateChain* can be trusted
   * for *details.hostname* according to the trust settings of the
   * platform.
   * Note: The actual behavior of the trust verification is not fully
   * specified and might change in the future.
   * The API implementation verifies certificate expiration, validates the
   * certification path and checks trust by a known CA.
   * The implementation is supposed to respect the EKU serverAuth and to
   * support subject alternative names.
   */
  declare function platformKeys$verifyTLSServerCertificate(
    details: platformKeys$VerificationDetails,
    callback: (result: platformKeys$VerificationResult) => void
  ): void;

  declare var npm$namespace$power: {
    requestKeepAwake: typeof power$requestKeepAwake,
    releaseKeepAwake: typeof power$releaseKeepAwake,
    Level: typeof power$Level
  };

  /**
   * @enum {}
   * @property SYSTEM - Prevent the system from sleeping in response to user inactivity.
   * @property DISPLAY - Prevent the display from being turned off or dimmed or the system from sleeping in response to user inactivity.
   */
  declare var power$Level: {
    SYSTEM: "system",
    DISPLAY: "display"
  };

  /**
 * Requests that power management be temporarily disabled.
 * @param level Level describes the degree to which power management should be disabled.
If a request previously made by the same app is still active, it will be replaced by the new request.
 * @see Enum: chrome.power.Level
 */
  declare function power$requestKeepAwake(
    level: chrome$ToStringLiteral<typeof Level>
  ): void;

  /**
   * Releases a request previously made via requestKeepAwake().
   */
  declare function power$releaseKeepAwake(): void;

  declare var npm$namespace$printerProvider: {
    onGetPrintersRequested: typeof printerProvider$onGetPrintersRequested,
    onGetUsbPrinterInfoRequested: typeof printerProvider$onGetUsbPrinterInfoRequested,
    onGetCapabilityRequested: typeof printerProvider$onGetCapabilityRequested,
    onPrintRequested: typeof printerProvider$onPrintRequested
  };
  declare interface printerProvider$PrinterInfo {
    /**
     * Unique printer ID.
     */
    id: string;

    /**
     * Printer's human readable name.
     */
    name: string;

    /**
     * Printer's human readable description.
     */
    description?: string;
  }

  declare interface printerProvider$PrinterCapabilities {
    /**
     * Device capabilities in CDD format.
     */
    capabilities: any;
  }

  declare interface printerProvider$PrintJob {
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
     * The document content type. Supported formats are 'application/pdf' and 'image/pwg-raster'.
     */
    contentType: string;

    /**
     * Blob containing the document data to print. Format must match |contentType|.
     */
    document: Blob;
  }

  /**
   * Event fired when print manager requests printers provided by extensions.
   */
  declare var printerProvider$onGetPrintersRequested: chrome$events.events$Event<
    (
      resultCallback: (printerInfo: printerProvider$PrinterInfo[]) => void
    ) => void
  >;

  /**
   * Event fired when print manager requests information about a USB device that may be a printer.
   * Note: An application should not rely on this event being fired more than once per device. If a connected device is supported it should be returned in the onGetPrintersRequested event.
   * @since Chrome 45.
   */
  declare var printerProvider$onGetUsbPrinterInfoRequested: chrome$events.events$Event<
    (
      device: any,
      resultCallback: (printerInfo?: printerProvider$PrinterInfo) => void
    ) => void
  >;

  /**
   * Event fired when print manager requests printer capabilities.
   */
  declare var printerProvider$onGetCapabilityRequested: chrome$events.events$Event<
    (
      printerId: string,
      resultCallback: (
        capabilities: printerProvider$PrinterCapabilities
      ) => void
    ) => void
  >;

  /**
   * Event fired when print manager requests printing.
   */
  declare var printerProvider$onPrintRequested: chrome$events.events$Event<
    (
      printJob: printerProvider$PrintJob,
      resultCallback: (result: string) => void
    ) => void
  >;

  declare var npm$namespace$runtime: {
    connect: typeof runtime$connect,
    connectNative: typeof runtime$connectNative,
    getBackgroundPage: typeof runtime$getBackgroundPage,
    getManifest: typeof runtime$getManifest,
    getPackageDirectoryEntry: typeof runtime$getPackageDirectoryEntry,
    getPlatformInfo: typeof runtime$getPlatformInfo,
    getURL: typeof runtime$getURL,
    reload: typeof runtime$reload,
    requestUpdateCheck: typeof runtime$requestUpdateCheck,
    restart: typeof runtime$restart,
    sendMessage: typeof runtime$sendMessage,
    sendNativeMessage: typeof runtime$sendNativeMessage,
    setUninstallURL: typeof runtime$setUninstallURL,
    OnInstalledReason: typeof runtime$OnInstalledReason,
    OnRestartRequiredReason: typeof runtime$OnRestartRequiredReason,
    PlatformArch: typeof runtime$PlatformArch,
    PlatformNaclArch: typeof runtime$PlatformNaclArch,
    PlatformOs: typeof runtime$PlatformOs,
    RequestUpdateCheckStatus: typeof runtime$RequestUpdateCheckStatus,
    lastError: typeof runtime$lastError,
    id: typeof runtime$id,
    onConnect: typeof runtime$onConnect,
    onConnectExternal: typeof runtime$onConnectExternal,
    onSuspend: typeof runtime$onSuspend,
    onStartup: typeof runtime$onStartup,
    onInstalled: typeof runtime$onInstalled,
    onSuspendCanceled: typeof runtime$onSuspendCanceled,
    onMessage: typeof runtime$onMessage,
    onMessageExternal: typeof runtime$onMessageExternal,
    onRestartRequired: typeof runtime$onRestartRequired,
    onUpdateAvailable: typeof runtime$onUpdateAvailable,
    onBrowserUpdateAvailable: typeof runtime$onBrowserUpdateAvailable
  };
  declare var runtime$OnInstalledReason: {
    INSTALL: "install",
    UPDATE: "update",
    CHROME_UPDATE: "chrome_update",
    SHARED_MODULE_UPDATE: "shared_module_update"
  };

  declare var runtime$OnRestartRequiredReason: {
    APP_UPDATE: "app_update",
    OS_UPDATE: "os_update",
    PERIODIC: "periodic"
  };

  declare var runtime$PlatformArch: {
    ARM: "arm",
    X86_32: "x86-32",
    X86_64: "x86-64",
    MIPS: "mips",
    MIPS64: "mips64"
  };

  declare var runtime$PlatformNaclArch: typeof PlatformArch;

  declare var runtime$PlatformOs: {
    ANDROID: "android",
    CROS: "cros",
    LINUX: "linux",
    MAC: "mac",
    OPENBSD: "openbsd",
    WIN: "win"
  };

  declare var runtime$RequestUpdateCheckStatus: {
    THROTTLED: "throttled",
    NO_UPDATE: "no_update",
    UPDATE_AVAILABLE: "update_available"
  };

  /**
   * This will be defined during an API method callback if there was an error
   */
  declare var runtime$lastError: runtime$LastError | void;

  /**
   * The ID of the app.
   */
  declare var runtime$id: string;

  declare interface runtime$LastError {
    /**
     * Details about the error which occurred.
     */
    message?: string;
  }

  declare interface runtime$ConnectInfo {
    name?: string;
  }

  declare interface runtime$InstalledDetails {
    /**
     * The reason that this event is being dispatched.
     * @see enum OnInstalledReason
     */
    reason: chrome$ToStringLiteral<typeof OnInstalledReason>;

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
    runtime$id?: string;
  }

  declare interface runtime$MessageOptions {
    /**
     * Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the connection event.
     */
    includeTlsChannelId?: boolean;
  }

  /**
   * An object containing information about the script context that sent a message or request.
   * @since Chrome 26.
   */
  declare interface runtime$MessageSender {
    /**
     * The ID of the app that opened the connection, if any.
     */
    runtime$id?: string;

    /**
     * The frame that opened the connection. 0 for top-level frames, positive for child frames. This will only be set when tab is set.
     * @since Chrome 41.
     */
    frameId?: chrome$integer;

    /**
     * The URL of the page or frame that opened the connection. If the sender is in an iframe, it will be iframe's URL not the URL of the page which hosts it.
     * @since Chrome 28.
     */
    url?: string;

    /**
     * The TLS channel ID of the page or frame that opened the connection, if requested by the app, and if available.
     * @since Chrome 32.
     */
    tlsChannelId?: string;
  }

  /**
   * An object containing information about the current platform.
   * @since Chrome 36.
   */
  declare interface runtime$PlatformInfo {
    /**
     * The operating system chrome is running on.
     * @see enum PlatformOs
     */
    os: chrome$ToStringLiteral<typeof PlatformOs>;

    /**
     * The machine's processor architecture.
     * @see enum PlatformArch
     */
    arch: chrome$ToStringLiteral<typeof PlatformArch>;

    /**
     * The native client architecture. This may be different from arch on some platforms.
     * @see enum PlatformNaclArch
     */
    nacl_arch: chrome$ToStringLiteral<typeof PlatformNaclArch>;
  }

  /**
   * An object which allows two way communication with other pages.
   * @since Chrome 26.
   */
  declare interface runtime$Port {
    postMessage: (message: Object) => void;
    hid$disconnect: () => void;

    /**
     * Optional.
     * This property will only be present on ports passed to onConnect/onConnectExternal listeners.
     */
    sender?: runtime$MessageSender;

    /**
     * An object which allows the addition and removal of listeners for a Chrome event.
     */
    onDisconnect: chrome$events.events$Event<(port: runtime$Port) => void>;

    /**
     * An object which allows the addition and removal of listeners for a Chrome event.
     */
    gcm$onMessage: chrome$events.events$Event<
      (message: any, port: runtime$Port) => void
    >;
    name: string;
  }

  declare interface runtime$UpdateAvailableDetails {
    /**
     * The version number of the available update.
     */
    version: string;
  }

  declare interface runtime$UpdateCheckDetails {
    /**
     * The version of the available update.
     */
    version: string;
  }

  declare interface runtime$ManifestIcons {
    /**
 * @example {
'16': 'icon16.png',
'48': 'icon48.png',
'128': 'icon128.png'
}
 */
    [size: number]: string;
  }

  declare interface runtime$ManifestAction {
    default_icon?: runtime$ManifestIcons;
    default_title?: string;
    default_popup?: string;
  }

  declare interface runtime$SearchProvider {
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
    prepopulated_id?: chrome$integer;
    is_default?: boolean;
  }

  declare type runtime$UrlMatches =
    | "https://www.google-analytics.com/*"
    | "https://www.googleapis.com/*"
    | "<all_urls>"
    | "http://*/*"
    | "https://*/*"
    | "file:///*/*"
    | "chrome://favicon/";

  declare type runtime$ChromeOSOnlyPermissions =
    | "certificateProvider"
    | "clipboard"
    | "dns"
    | "documentScan"
    | "enterprise.platformKeys"
    | "enterprise.deviceAttributes"
    | "fileBrowserHandler"
    | "fileSystemProvider"
    | "networking.config"
    | "platformKeys"
    | "vpnProvider"
    | "wallpaper"
    | runtime$FileSystemPermission;

  declare type runtime$DevOnly =
    | "app.window.alpha"
    | "diagnostics"
    | "displaySource"
    | "signedInDevices";

  declare type runtime$KioskOnlyPermissions =
    | "audio"
    | "networking.onc"
    | "system.powerSource"
    | "virtualKeyboard";

  /**
   * Undocumented but used permissions
   */
  declare type runtime$UndocumentedPermissions =
    | "app.window.ime"
    | "fullscreen"
    | "overrideEscFullscreen";

  declare type runtime$NotAllowedAsOptionalPermissions =
    | "debugger"
    | "experimental"
    | "geolocation"
    | "mdns"
    | "proxy"
    | "tts"
    | "wallpaper";

  /**
   * Optional permissions
   * @see NotAllowedAsOptionalPermissions for permissions that you're not allowed to set on demand.
   */
  declare type runtime$OptionalPermission = Exclude<
    runtime$Permission,
    runtime$NotAllowedAsOptionalPermissions
  >;

  declare type runtime$Permission =
    | "alarms"
    | "appview"
    | "audio"
    | "alwaysOnTopWindows"
    | "app.window.alwaysOnTop"
    | "app.window.fullscreen"
    | "app.window.fullscreen.overrideEsc"
    | "app.window.shape"
    | "audioCapture"
    | "background"
    | "browser"
    | "clipboardRead"
    | "clipboardWrite"
    | "contextMenus"
    | "desktopCapture"
    | "experimental"
    | "fileSystem"
    | "gcm"
    | "geolocation"
    | "hid"
    | "identity"
    | "idle"
    | "mdns"
    | "mediaGalleries"
    | "nativeMessaging"
    | "notifications"
    | "pointerLock"
    | "power"
    | "printerProvider"
    | "runtime"
    | "serial"
    | "storage"
    | "syncFileSystem"
    | "system.cpu"
    | "system.display"
    | "system.memory"
    | "system.network"
    | "system.storage"
    | "tts"
    | "unlimitedStorage"
    | "usb"
    | "usbDevices"
    | "videoCapture"
    | "webview"
    | runtime$ChromeOSOnlyPermissions
    | runtime$KioskOnlyPermissions
    | runtime$MediaGalleriesPermission
    | runtime$SocketPermission
    | runtime$UrlMatches
    | runtime$USBDevicesPermission;

  declare interface runtime$MediaGalleriesPermission {
    mediaGalleries: Array<"read" | "allAutoDetected">;
  }

  declare interface runtime$USBDevicesPermission {
    usbDevices: {
      vendorId: chrome$integer,
      productId: chrome$integer
    }[];
  }

  declare interface runtime$FileSystemPermission {
    /**
     * @enum {string}
     * @requires (CrOS) 'requestFileSystem' is only for ChromeOS
     */
    fileSystem: Array<
      "write" | "retainEntries" | "directory" | "requestFileSystem"
    >;
  }

  declare interface runtime$SocketPermission {
    /**
     * **Possible values includes:**
     * 'tcp-connect',
     * 'udp-send-to',
     * 'udp-send-to::*'
     * 'udp-bind',
     * 'udp-multicast-membership',
     * 'resolve-host',
     * 'network-state'
     */
    socket: string[];
  }

  declare type runtime$JSONBasicTypes = "integer" | "string" | "number";

  declare interface runtime$JSONSchemaBasicType {
    type: runtime$JSONBasicTypes;
  }

  declare interface runtime$JSONSchemaRefType {
    $ref: string;
  }

  declare interface runtime$JSONSchemaObjectType {
    /**
     * An 'object' can have known properties listed as 'properties', and can
     * optionally have 'additionalProperties' indicating a schema to apply to
     * keys that aren't found in 'properties'.
     */
    type: "object";
    properties?: {
      [key: string]: runtime$JSONSchemaBasicType | runtime$JSONSchemaRefType
    };
    additionalProperties?: runtime$JSONSchemaObjectType;
  }

  declare interface runtime$JSONSchemaArrayType {
    type: "array";
    runtime$id?: string;
    items:
      | runtime$JSONSchemaBasicType
      | runtime$JSONSchemaObjectType
      | runtime$JSONSchemaRefType;
  }

  declare interface runtime$SocketTcpPermission {
    /**
     * The host:port pattern for connect operations.
     * *:* are allowed
     */
    hid$connect?: string | string[];
  }

  declare interface runtime$SocketTcpServerPermission {
    /**
     * The host:port pattern for listen operations.
     * *:* are allowed
     */
    tcpServer$listen?: string | string[];
  }

  declare interface runtime$SocketUdpPermission {
    /**
     * The host:port pattern for bind operations.
     * *:* are allowed
     */
    udp$bind?: string | string[];

    /**
     * The host:port pattern for joinGroup operations.
     * *:* are allowed
     */
    multicastMembership?: string | string[];

    /**
     * The host:port pattern for send operations.
     * *:* are allowed
     */
    hid$send?: string | string[];
  }

  declare interface runtime$WebViewPartition {
    name: string;

    /**
 * Path to files, relative, absolute or pattern
 * @example ['local_*.html', '*.png', '*.js']
['img/epic.html']
 */
    accessible_resources: string[];
  }

  /**
   * The top-level object can't have additionalProperties.
   * The properties declared are the policies for this app.
   */
  declare interface runtime$ManagedSchema {
    /**
     * Each schema must have either a $ref value or exactly one type.
     */
    $ref?: string;

    /**
     * The top-level schema must have type object.
     */
    type: "object";

    /**
     * 'properties' maps an optional key of this object to its schema. At the
     * top-level object, these keys are the policy names supported.
     */
    properties?: {
      [key: string]:
        | runtime$JSONSchemaBasicType
        | runtime$JSONSchemaArrayType
        | runtime$JSONSchemaObjectType
        | runtime$JSONSchemaRefType
    };
  }

  declare interface runtime$AutomationDesktop {
    desktop: true;
    interact?: true;
  }

  declare interface runtime$AutomationNonInteractive {
    interact: false;
    desktop?: false;

    /**
     * Patterns for matching, use chrome url pattern
     */
    matches?: runtime$UrlMatches[] | string[];
  }

  declare type runtime$AutomationOptions =
    | boolean
    | runtime$AutomationDesktop
    | runtime$AutomationNonInteractive;

  declare interface runtime$PartialManifest {
    /**
     * Used by packaged apps to specify the app's background scripts.
     * Also used by hosted apps to specify the URLs that the app uses.
     * @required
     */
    app: {
      background: {
        scripts?: string[]
      }
    };

    /**
     * One integer specifying the version of the manifest file format your package requires.
     * As of Chrome 18, developers should specify 2 (without quotes).
     * @see [Manifest Version Info]{@link https://developer.chrome.com/apps/manifest/manifest_version}
     * @required
     */
    manifest_version: 2;

    /**
     * The *name* (maximum of 45 characters) is the primary identifier
     * of the app and is a required field.
     * It is displayed in the following locations:
     *   - Install dialog
     *   - Extension management UI
     *   - Chrome Web Store
     *
     * You can specify locale-specific strings, see Internationalization docs:
     * @see [Internationalization]{
     * @see https://developer.chrome.com/extensions/i18n}
     * @required
     * @requires string - Maximum 45 characters!
     */
    name: string;

    /**
     * One to four dot-separated integers identifying the version of this app.
     * A couple of rules apply to the integers: they must be between 0 and 65535, inclusive,
     * and non-zero integers can't start with 0. For example, 99999 and 032 are both invalid.
     * A missing integer is equal to zero. For example, 1.1.9.9999 is newer than 1.1.
     * @see [Manifest- Version Docs]{@link https://developer.chrome.com/apps/manifest/version}
     * @required
     */
    version: string;

    /**
     * Specifies the subdirectory of _locales that contains the default strings for this app.
     * This field is required in apps that have a _locales directory; it must be absent in
     * apps that have no _locales directory. For details, see Internationalization:
     * @see [Internationalization]{
     * @see https://developer.chrome.com/extensions/i18n}
     */
    default_locale?: string;

    /**
     * A plain text string (no HTML or other formatting; no more than 132 characters)
     * that describes the extension. The description should be suitable for both the
     * browser's extension management UI and the Chrome Web Store. You can specify
     * locale-specific strings for this field; see Internationalization for details.
     * @see [Internationalization]{
     * @see https://developer.chrome.com/extensions/i18n}
     */
    description?: string;

    /**
 * One or more icons that represent the extension, app, or theme.
 * You should always provide a 128x128 icon; it's used during
 * installation and by the Chrome Web Store. Extensions should
 * also provide a 48x48 icon, which is used in the extensions
 * management page (chrome://extensions). You can also specify
 * a 16x16 icon to be used as the favicon for an extension's pages.
 * 
 * Icons should generally be in PNG format, because PNG has the best support for transparency.
 * They can, however, be in any format supported by WebKit, including BMP, GIF, ICO, and JPEG.
 * 
 * You may provide icons of any other size you wish, and Chrome will attempt to use the best size
 * where appropriate. For example, Windows often requires 32-pixel icons, and if the app includes
 * a 32-pixel icon, Chrome will choose that instead of shrinking a 48-pixel icon down. However,
 * you should ensure that all of your icons are square, or unexpected behavior may result.
 * @example 'icons': { '16': 'icon16.png',
'48': 'icon48.png',
'128': 'icon128.png' },
 */
    icons?: runtime$ManifestIcons;

    /**
 * @requires (CrOS) **Will only work on Chrome OS.**
 * @description The action_handlers manifest property declares which user actions or intents the
application supports; these can serve as alternate launch points for your application.
This list contains one or more of the ActionType values specified
in the ActionType entry of app.runtime.onLaunched.
 * @example 'action_handlers': ['new_note']
 */
    action_handlers?: chrome$ToStringLiteral<typeof undefined>[];

    /**
     * App author information
     * @see [Not implemented anywhere in code]{@link https://github.com/chromium/chromium/blob/master/chrome/browser/chromeos/extensions/device_local_account_management_policy_provider.cc#L46}
     */
    author?:
      | {
          name: string,
          email: string
        }
      | any;

    /**
     * Allows inspection of page contents, not enabled on stable anyways except for whitelist.
     * @see [Docs]{@link https://github.com/chromium/chromium/blob/master/extensions/common/manifest_handlers/automation.cc}
     */
    automation?: runtime$AutomationOptions | boolean;

    /**
     * Note: The 'bluetooth' manifest permission is used by the
     * chrome.bluetooth, chrome.bluetoothSocket and
     * chrome.bluetoothLowEnergy APIs.
     * @requires Platforms: Chrome OS, Windows and Mac
     */
    bluetooth?: {
      uuids?: string[],
      socket?: boolean,
      low_energy?: boolean,
      peripheral?: boolean
    };

    /**
     * Use the commands API to add keyboard shortcuts that trigger actions in your app.
     * E.g. an action to open the browser action or send a command to the app.
     */
    commands?: {
      [name: string]: {
        /**
 * Keys can be provided matching this pattern:
 * ^(Ctrl|Command|MacCtrl|Alt|Option)\\+(Shift\\+)?[A-Z]
 * @example 'suggested_key': {
'default': 'Ctrl+Shift+Y',
'mac': 'Command+Shift+Y'
},
 */
        suggested_key?: {
          default?: string,
          windows?: string,
          mac?: string,
          chromeos?: string,
          linux?: string
        },

        /**
         * Command description
         */
        description?: string,

        /**
         * Global scope?
         */
        global?: boolean
      }
    };

    /**
     * An implementation detail (actually written by Chrome, not the app author).
     */
    +current_locale?: string;

    /**
     * Restricted to whitelist
     */
    display_in_launcher?: boolean;

    /**
     * Restricted to whitelist
     */
    display_in_new_tab_page?: boolean;

    /**
     * The *event_rules* manifest property provides a mechanism to add rules that
     * intercept, block, or modify web requests in-flight using **declarativeWebRequest**
     * or take actions depending on the content of a page, without requiring permission
     * to read the page's content using **declarativeContent**.
     * @see [event_rules docs]{@link https://developer.chrome.com/extensions/manifest/event_rules}
     */
    event_rules?: {
      /**
       * Event name
       */
      event?: chrome$webViewRequest.webViewRequest$DeclarativeWebRequestEventList,
      actions?: {
        /**
         * Action type
         */
        type: chrome$webViewRequest.webViewRequest$DeclarativeWebRequestActionsList
      }[],
      conditions?: {
        /**
         * Condition
         */
        type: chrome$webViewRequest.webViewRequest$DeclarativeWebRequestConditionsList,

        /**
         * Arguments, see original condition docs in chrome.webViewRequest
         */
        [key: string]: any | any[]
      }[]
    }[];

    /**
     * Declares which extensions, apps, and web pages can connect
     * to your extension via runtime.connect and runtime.sendMessage.
     */
    externally_connectable: {
      /**
       * The IDs of extensions or apps that are allowed to connect.
       * If left empty or unspecified, no extensions or apps can connect.
       * The wildcard '*' will allow all extensions and apps to connect.
       */
      runtime$id: string[],

      /**
       * The URL patterns for web pages that are allowed to connect.
       * This does not affect content scripts.
       * If left empty or unspecified, no web pages can connect.
       */
      matches: string[],

      /**
       * Determines if messages sent via `runtime.connect` or `runtime.sendMessage`
       * are allowed to set `runtime.MessageSender.tlsChannelId`.
       */
      accept_tls_channel_id?: boolean
    };

    /**
 * @requires Permissions: 'fileBrowserHandle'
 * @requires Location': 'component'
You can specify locale-specific strings for the value of 'default_title'
 */
    file_browser_handlers?: {
      /**
       * Handler id
       */
      runtime$id: string,

      /**
       * What the button will display
       */
      default_title: string,

      /**
       * Icon
       */
      default_icon: string,

      /**
       * To match all files, use 'filesystem:*.*'
       */
      file_filters: string[],

      /**
       * ['read'] = read only mode
       */
      file_access?: ["read"] | string[]
    }[];

    /**
     * Triggers a launch of the app when one of these files are handled.
     */
    file_handlers?: {
      [key: string]: {
        extensions?: Array<
          | "*"
          | string
          | {
              include_directories: boolean
            }
        >,

        /**
         * File types to handle
         */
        types?: Array<
          | "*"
          | string
          | {
              include_directories: boolean
            }
        >
      }
    };

    /**
     * Files app uses above information in order to render related UI elements approprietly.
     */
    file_system_provider_capabilities?: {
      /**
       * For example, if *configurable* is set to **true**,
       * then a menu item for configuring volumes will be rendered.
       */
      configurable?: boolean,

      /**
       * If *multiple_mounts* is set to **true**, then *Files app*
       * will allow to add more than one mount points from the UI.
       */
      multiple_mounts?: boolean,

      /**
       * If *watchable* is **false**, then a refresh button will be rendered.
       * Note, that if possible you should add support for watchers, so changes
       * on the file system can be reflected immediately and automatically.
       */
      watchable?: boolean,
      source?: "network"
    };

    /**
     * Import resources from another extension / app.
     * @see [Shared modules]{@link https://developer.chrome.com/apps/shared_modules}
     */
    import?: {
      runtime$id: string
    }[];

    /**
     * This value can be used to control the unique ID of an app when it is loaded during development.
     */
    key?: string;

    /**
     * The minimum version of Chrome that your app, if any.
     * @example 'minimum_chrome_version': '33.0.1715.0'
     */
    minimum_chrome_version?: string;

    /**
     * One or more mappings from MIME types to the Native Client module that handles each type.
     */
    nacl_modules?: {
      /**
       * The location of a Native Client manifest (a .nmf file) within the app's directory.
       */
      path: string,

      /**
       * The MIME type for which the Native Client module will be registered as content handler.
       */
      mime_type: string
    }[];

    /**
     * Use the Chrome Identity API to authenticate users:
     * the getAuthToken for users logged into their Google Account
     * and the launchWebAuthFlow for users logged into a non-Google account.
     */
    oauth2?: {
      /**
       * You need to register your app in the Google APIs Console to get the client ID.
       */
      client_id: string,

      /**
       * Applies to these scopes
       */
      scopes: string[]
    };

    /**
     * Whether the app is expected to work offline.
     * When Chrome detects that it is offline, apps with this field set to true will be highlighted on the New Tab page.
     */
    offline_enabled?: boolean;

    /**
     * Use the chrome.permissions API to request declared optional permissions
     * at run time rather than install time, so users understand why the
     * permissions are needed and grant only those that are necessary.
     */
    optional_permissions?:
      | runtime$OptionalPermission[]
      | Array<runtime$OptionalPermission | chrome$runtime.runtime$UrlMatches[]>
      | Array<
          | runtime$OptionalPermission
          | chrome$runtime.runtime$UrlMatches[]
          | string
        >;

    /**
     * Permissions help to limit damage if your app is compromised by malware.
     * Some permissions are also displayed to users before installation,
     * as detailed in Permission Warnings.
     */
    permissions?: runtime$Permission[] | Array<runtime$Permission | string>;

    /**
     * Native Client
     * @see [NDK Docs]{@link https://github.com/crosswalk-project/chromium-crosswalk/blob/af36cc3ce3f5fcb8033f16236725718f8012abfe/native_client_sdk/src/doc/devguide/distributing.rst}
     * @see [Chromium Source]{@link https://github.com/crosswalk-project/chromium-crosswalk/blob/af36cc3ce3f5fcb8033f16236725718f8012abfe/native_client_sdk/src/tools/fix_manifest.py}
     */
    platforms?: {
      nacl_arch: chrome$ToStringLiteral<typeof undefined>,
      sub_package_path: string
    }[];

    /**
     * Technologies required by the app. Hosting sites such
     * as the Chrome Web Store may use this list to dissuade
     * users from installing appss that will not
     * work on their computer. Supported requirements currently
     * include '3D' and 'plugins'; additional requirements checks
     * may be added in the future.
     */
    requirements?: {
      /**
 * The '3D' requirement denotes GPU hardware acceleration.
 * 
 * The 'webgl' requirement refers to the WebGL API.
 * For more information on Chrome 3D graphics support,
 * see the help article on WebGL and 3D graphics.
 * You can list the 3D-related features your app requires,
 * as demonstrated in the following example:
 * @example 'requirements': {
'3D': {
'features': ['webgl']
}
}
 */
      "3D"?: {
        /**
         * List of the 3D-related features your app requires.
         */
        features: ["webgl"]
      },

      /**
 * The 'plugins' requirement indicates if an app requires NPAPI to run.
 * 
 * This requirement is enabled by default when the manifest includes the 'plugins' field.
 * For apps that still work when plugins aren't available,
 * you can disable this requirement by setting NPAPI to false.
 * You can also enable this requirement manually,
 * by setting NPAPI to true as shown in this example:
 * @example 'requirements': {
'plugins': {
'npapi': true
}
}
 */
      plugins?: {
        /**
         * @default true
         */
        npapi: boolean
      }
    };

    /**
 * @deprecated Warning: Starting in version 57, Chrome will no longer allow external web content
(including embedded frames and scripts) inside sandboxed pages.
Please use a webview instead.
 */
    sandbox?: {
      pages: string[],

      /**
       * @default 'sandbox allow-scripts allow-forms'
       */
      content_security_policy?: string
    };

    /**
     * The short_name (maximum of 12 characters recommended) is
     * a short version of the app's name. It is an optional field
     * and if not specified, the name will be used, though it will
     * likely be truncated. The short name is typically used where
     * there is insufficient space to display the full name, such as:
     * - App launcher
     * - New Tab page
     *
     * You can specify locale-specific strings, see Internationalization docs:
     * @see [Internationalization]{
     * @see https://developer.chrome.com/extensions/i18n}
     */
    short_name?: string;

    /**
     * Doc missing. Declared as a feature, but unused.
     */
    signature?: any;

    /**
     * The sockets manifest property declares which permissions are available
     * for the sockets.udp, sockets.tcp and sockets.tcpServer APIs.
     */
    sockets?: {
      /**
       * The tcp manifest property declares which sockets.tcp operations an app can issue.
       */
      sockets$tcp?: runtime$SocketTcpPermission,

      /**
       * The tcpServer manifest property declares which sockets.tcpServer operations an app can issue.
       */
      sockets$tcpServer?: runtime$SocketTcpServerPermission,

      /**
       * The udp manifest property declares which sockets.udp operations an app can issue.
       */
      sockets$udp?: runtime$SocketUdpPermission
    };

    /**
     * Unlike the local and sync storage areas,
     * the managed storage area requires its structure
     * to be declared as JSON Schema and is strictly validated by Chrome.
     * This schema must be stored in a file indicated by the 'managed_schema'
     * property of the 'storage' manifest key and declares the enterprise
     * policies supported by the app. Policies are analogous to options
     * but are configured by a system administrator instead of the user,
     * allowing the app to be preconfigured for all users of an organization.
     *
     * After declaring the policies they can be read from the storage.managed API.
     * It's up to the app to enforce the policies configured by the administrator.
     */
    system$storage?: {
      /**
       * The storage.managed_schema property indicates a file within the app that contains the policy schema.
       * @see ManagedSchema for schema content typings
       * @see [Docs and Schema Format]{@link https://developer.chrome.com/apps/manifest/storage}
       */
      managed_schema: string
    };

    /**
 * If you publish using the Chrome Developer Dashboard, ignore this field.
 * If you host your own app: URL to an update manifest XML file.
 * **⚠ Warning**
 * As of M33, Windows stable / beta channel users can only
 * download apps hosted in the Chrome Web Store
 * @requires (not Windows)
(
 * @see [Protecting Windows users from malicious extensions]{@link http://blog.chromium.org/2013/11/protecting-windows-users-from-malicious.html}).
 * @see [Documentation]{@link https://developer.chrome.com/apps/autoupdate}
 */
    update_url?: string;

    /**
 * Used by packaged apps to specify URL patterns the app wants to intercept and handle.
 * An app can define multiple URL handlers under this manifest entry,
 * each having an identifier, a URL pattern, and a title.
 * Here's an example of how to specify url_handlers:
 * @example 'view_foobar_presentation': {
'matches': [
'https://www.foobar.com/presentation/view/*'
],
'title': 'View FooBar presentation'
}
 * @see [Documentation]{@link https://developer.chrome.com/apps/manifest/url_handlers}
 */
    url_handlers?: {
      [name: string]: {
        /**
         * URLs to match and handle
         */
        matches: string[],

        /**
         * The title field is reserved for future use in all relevant UI elements.
         * It should describe the action that the app performs when launched with this type of URL handler.
         */
        title?: string
      }
    };

    /**
     * The usbPrinters manifest property declares which USB printers are supported by an app using the printerProvider API.
     */
    usb_printers?: {
      /**
       * A list of USB device filters matching supported devices.
       * A device only needs to match one of the provided filters.
       * A vendorId is required and only one of productId or interfaceClass may be provided.
       */
      filters: chrome$usb.usb$DeviceFilterStrict[]
    };

    /**
 * version_name can be set to a descriptive version string and will be used for display purposes if present.
 * If no version_name is present, the version field will be used for display purposes as well.
 * @example 'version_name': '0.8 beta'
'version_name': 'build rc3'
'version_name': 'Gold Edition'
 */
    version_name?: string;

    /**
     * By default, webviews are prevented from loading any resources packaged with the app.
     * However, webview partitions may be granted access to these resources via a webview.partitions
     * section in the app manifest. Partitions may be granted access to a set of files by
     * matching partition name patterns with file name patterns. Both sorts of patterns may
     * contain the * wildcard.
     * @see [Accessing packaged resources]{@link https://developer.chrome.com/apps/tags/webview#local_resources}
     */
    webview?: {
      /**
       * Webview partition list
       */
      partitions: runtime$WebViewPartition[]
    };
  }

  /**
   * Manifest for Chrome OS Kiosk apps
   * @requires (CrOS Kiosk App) **Only for Chrome OS Kiosk Apps.**
   */
  declare type runtime$ValidKioskManifest = {
    /**
     * Enable this app to be used as a kiosk app.
     */
    kiosk_enabled: true,

    /**
     * Kiosk settings
     */
    kiosk?: {
      /**
       * If the key is specified and its value is true, it allows the app to
       * be always updated regardless of whether the underlying platform is
       * compliant or not. If the value is false or the key is not specified,
       * the required platform version is respected and the app update is
       * deferred until the underlying platform becomes compliant.
       */
      always_update?: boolean,
      required_platform_version?: string
    },

    /**
     * This app can only be used as a kiosk app on Chrome OS
     */
    kiosk_only?: boolean,

    /**
     * Not useful since it will prevent app from running.
     * @see [Source]{@link https://github.com/chromium/chromium/blob/master/chrome/browser/chromeos/extensions/device_local_account_management_policy_provider.cc#L155}
     */
    kiosk_secondary_apps?: any
  } & runtime$PartialManifest;

  declare type runtime$ValidNonKioskManifest = {
    kiosk_enabled?: false
  } & runtime$PartialManifest;

  declare type runtime$InvalidManifest = {
    /**
     * Not for packaged apps
     */
    options_ui?: empty,

    /**
     * Not for packaged apps
     */
    options_page?: empty,

    /**
     * Not for packaged apps
     */
    browser_action?: empty,

    /**
     * Not for packaged apps
     * Only for extensions and legacy packaged apps
     */
    content_security_policy?: empty,

    /**
     * Not for packaged apps
     * Only for extensions and legacy packaged apps
     */
    chrome_url_overrides?: empty
  } & runtime$PartialManifest;

  declare type runtime$Manifest =
    | runtime$ValidKioskManifest
    | runtime$ValidNonKioskManifest
    | runtime$InvalidManifest;

  /**
   * Attempts to connect to connect listeners within an app (such as the background page), or other apps.
   * This is useful for content scripts connecting to their extension processes, inter-app communication, and web messaging.
   * Note that this does not connect to any listeners in a content script.
   * @since Chrome 26.
   */
  declare function runtime$connect(
    connectInfo?: runtime$ConnectInfo
  ): runtime$Port;

  /**
 * Attempts to connect to connect listeners within an app (such as the background page), or other apps.
 * This is useful for content scripts connecting to their extension processes, inter-app communication, and web messaging.
 * Note that this does not connect to any listeners in a content script.
 * @since Chrome 26.
 * @param extensionId Optional; ID of the extension.
The ID of the extension or app to connect to.
If omitted, a connection will be attempted with your own app.
Required if sending messages from a web page for web messaging.
 */
  declare function runtime$connect(
    extensionId: string,
    connectInfo?: runtime$ConnectInfo
  ): runtime$Port;

  /**
   * Connects to a native application in the host machine.
   * @since Chrome 28.
   * @param application The name of the registered application to connect to.
   */
  declare function runtime$connectNative(application: string): runtime$Port;

  /**
   * Retrieves the JavaScript 'window' object for the background page running inside the current app.
   * If the background page is an event page, the system will ensure it is loaded before calling the callback.
   * If there is no background page, an error is set.
   */
  declare function runtime$getBackgroundPage(
    callback: (backgroundPage?: Window) => void
  ): void;

  /**
   * Returns details about the app from the manifest.
   * The object returned is a serialization of the full manifest file.
   * @returns The manifest details.
   */
  declare function runtime$getManifest(): runtime$Manifest;

  /**
   * Returns a DirectoryEntry for the package directory.
   * @since Chrome 29.
   */
  declare function runtime$getPackageDirectoryEntry(
    callback: (directoryEntry: DirectoryEntry) => void
  ): void;

  /**
   * Returns information about the current platform.
   * @since Chrome 29.
   * @param callback Called with results
   */
  declare function runtime$getPlatformInfo(
    callback: (platformInfo: runtime$PlatformInfo) => void
  ): void;

  /**
   * Converts a relative path within an app install directory to a fully-qualified URL.
   * @param path A path to a resource within an app expressed relative to its install directory.
   */
  declare function runtime$getURL(path: string): string;

  /**
   * Reloads the app .
   * @since Chrome 25.
   */
  declare function runtime$reload(): void;

  /**
 * Requests an update check for this app.
 * @since Chrome 25.
 * @param callback Parameter status: Result of the update check. See enum RequestUpdateCheckStatus.
Optional parameter details: If an update is available, this contains more information about the available update.
 */
  declare function runtime$requestUpdateCheck(
    callback: (
      status: chrome$ToStringLiteral<typeof RequestUpdateCheckStatus>,
      details?: runtime$UpdateCheckDetails
    ) => void
  ): void;

  /**
   * Restart the ChromeOS device when the app runs in kiosk mode. Otherwise, it's no-op.
   * @since Chrome 32.
   */
  declare function runtime$restart(): void;

  /**
   * Sends a single message to event listeners within your app or a different app. Similar to runtime.connect but only sends a single message, with an optional response.
   * If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension.
   * Note that extensions cannot send messages to content scripts using this method.
   * @since Chrome 26.
   * @param responseCallback Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
   */
  declare function runtime$sendMessage(
    message: any,
    responseCallback?: (response: any) => void
  ): void;

  /**
   * Sends a single message to event listeners within your app or a different app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method.
   * @since Chrome 32.
   * @param responseCallback Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
   */
  declare function runtime$sendMessage(
    message: any,
    options?: runtime$MessageOptions | null,
    responseCallback?: (response: any) => void
  ): void;

  /**
   * Sends a single message to event listeners within your app or a different app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method.
   * @since Chrome 32.
   * @param extensionId The ID of the app to send the message to. If omitted, the message will be sent to your own app. Required if sending messages from a web page for web messaging.
   * @param responseCallback Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
   */
  declare function runtime$sendMessage(
    extensionId: string,
    message: any,
    options?: runtime$MessageOptions | null,
    responseCallback?: (response: any) => void
  ): void;

  /**
 * Send a single message to a native application.
 * @since Chrome 28.
 * @param application The of the native messaging host.
 * @param message The message that will be passed to the native messaging host.
 * @param responseCallback Optional.
Parameter response: The response message sent by the native messaging host. If an error occurs while connecting to the native messaging host, the callback will be called with no arguments and runtime.lastError will be set to the error message.
 */
  declare function runtime$sendNativeMessage(
    application: string,
    message: Object,
    responseCallback?: (response: any) => void
  ): void;

  /**
 * Sets the URL to be visited upon uninstallation. This may be used to clean up server-side data, do analytics, and implement surveys. Maximum 255 characters.
 * @since Chrome 41.
 * @param url Since Chrome 34.
URL to be opened after the extension is uninstalled. This URL must have an http: or https: scheme. Set an empty string to not open a new tab upon uninstallation.
 * @param callback Called when the uninstall URL is set. If the given URL is invalid, runtime.lastError will be set.
 */
  declare function runtime$setUninstallURL(
    url: string,
    callback?: () => void
  ): void;

  declare type runtime$ExtensionMessageEvent = {} & undefined.events$Event<
    (
      message: any,
      sender: runtime$MessageSender,
      sendResponse: (response: any) => void
    ) => void
  >;

  declare type runtime$ExtensionConnectEvent = {} & undefined.events$Event<
    (port: runtime$Port) => void
  >;

  declare type runtime$RuntimeEvent = {} & undefined.events$Event<() => void>;

  /**
   * Fired when a connection is made from either an extension process or a content script.
   * @since Chrome 26.
   */
  declare var runtime$onConnect: runtime$ExtensionConnectEvent;

  /**
   * Fired when a connection is made from another extension.
   * @since Chrome 26.
   */
  declare var runtime$onConnectExternal: runtime$ExtensionConnectEvent;

  /**
   * Sent to the event page just before it is unloaded. This gives the extension opportunity to do some clean up. Note that since the page is unloading, any asynchronous operations started while handling this event are not guaranteed to complete. If more activity for the event page occurs before it gets unloaded the onSuspendCanceled event will be sent and the page won't be unloaded.
   */
  declare var runtime$onSuspend: runtime$RuntimeEvent;

  /**
   * Fired when a profile that has this app installed first starts up. This event is not fired when an incognito profile is started, even if this app is operating in 'split' incognito mode.
   * @since Chrome 23.
   */
  declare var runtime$onStartup: runtime$RuntimeEvent;

  /**
   * Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.
   */
  declare var runtime$onInstalled: chrome$events.events$Event<
    (details: runtime$InstalledDetails) => void
  >;

  /**
   * Sent after onSuspend to indicate that the app won't be unloaded after all.
   */
  declare var runtime$onSuspendCanceled: runtime$RuntimeEvent;

  /**
   * Fired when a message is sent from either an extension process or a content script.
   * @since Chrome 26.
   */
  declare var runtime$onMessage: runtime$ExtensionMessageEvent;

  /**
   * Fired when a message is sent from another app. Cannot be used in a content script.
   * @since Chrome 26.
   */
  declare var runtime$onMessageExternal: runtime$ExtensionMessageEvent;

  /**
 * @required (Chrome OS Kiosk app) Currently, this event is only fired for Chrome OS kiosk apps.
Fired when an app or the device that it runs on needs to be restarted.
The app should close all its windows at its earliest convenient time to let the restart to happen.
If the app does nothing, a restart will be enforced after a 24-hour grace period has passed.
 * @since Chrome 29.
 */
  declare var runtime$onRestartRequired: chrome$events.events$Event<
    (reason: chrome$ToStringLiteral<typeof OnRestartRequiredReason>) => void
  >;

  /**
   * Fired when an update is available, but isn't installed immediately because the app is currently running.
   * If you do nothing, the update will be installed the next time the background page gets unloaded,
   * if you want it to be installed sooner you can explicitly call chrome.runtime.reload().
   * If your extension is using a persistent background page, the background page of course never gets unloaded,
   * so unless you call chrome.runtime.reload() manually in response to this event the update
   * will not get installed until the next time chrome itself restarts. If no handlers are listening for this event,
   * and your extension has a persistent background page, it behaves as if chrome.runtime.reload()
   * is called in response to this event.
   * @since Chrome 25.
   */
  declare var runtime$onUpdateAvailable: chrome$events.events$Event<
    (details: runtime$UpdateAvailableDetails) => void
  >;

  /**
 * @deprecated since Chrome 33. Please use **chrome.runtime.onRestartRequired**.
Fired when a Chrome update is available, but isn't installed immediately because a browser restart is required.
 */
  declare var runtime$onBrowserUpdateAvailable: runtime$RuntimeEvent;

  /**
 * Use the chrome.socket API to send and receive data over the network using TCP and UDP connections.
 * @deprecated Note: Starting with Chrome 33,
this API is deprecated in favor of the
sockets.udp, sockets.tcp and sockets.tcpServer APIs.
 * @since Chrome 23
 */
  declare var chrome$serial: chrome$chrome$deprecated;

  declare var npm$namespace$signedInDevices: {
    get: typeof signedInDevices$get,
    onDeviceInfoChange: typeof signedInDevices$onDeviceInfoChange
  };
  declare type signedInDevices$OS =
    | "win"
    | "mac"
    | "linux"
    | "chrome_os"
    | "android"
    | "ios"
    | "unknown";

  declare type signedInDevices$DeviceType =
    | "HEADPHONE"
    | "MIC"
    | "USB"
    | "BLUETOOTH"
    | "HDMI"
    | "INTERNAL_SPEAKER"
    | "INTERNAL_MIC"
    | "FRONT_MIC"
    | "REAR_MIC"
    | "KEYBOARD_MIC"
    | "HOTWORD"
    | "LINEOUT"
    | "POST_MIX_LOOPBACK"
    | "POST_DSP_LOOPBACK"
    | "OTHER";

  declare interface signedInDevices$DeviceInfo {
    /**
     * Name of the device.
     * This name is usually set by the user when setting up a device.
     */
    name: string;

    /**
     * Unique Id for this device.
     * Note: The id is meaningful only in the current device.
     * This id cannot be used to refer to the same device from
     * another device or extension.
     */
    runtime$id: string;

    /**
     * The OS of the device.
     */
    os: signedInDevices$OS;

    /**
     * Device type
     */
    type: signedInDevices$DeviceType;

    /**
     * Version of chrome running in this device.
     */
    chromeVersion: string;
  }

  /**
 * Gets the array of signed in devices, signed into the same account as the current profile.
 * @param isLocal If true only return the information for the local device.
If false or omitted return the list of all devices including the local device.
 * @param callback The callback to be invoked with the array of DeviceInfo objects.
 */
  declare function signedInDevices$get(
    isLocal: boolean,
    callback: (devices: signedInDevices$DeviceInfo[]) => void
  ): void;

  /**
   * Gets the array of signed in devices, signed into the same account as the current profile.
   * @param callback The callback to be invoked with the array of DeviceInfo objects.
   */
  declare function signedInDevices$get(
    callback: (devices: signedInDevices$DeviceInfo[]) => void
  ): void;

  /**
   * Fired when the DeviceInfo object of any of the signed in devices
   * changes, or when a device is added or removed.
   * Provides *devices*:
   * The array of all signed in devices.
   */
  declare var signedInDevices$onDeviceInfoChange: chrome$events.events$Event<
    (devices: signedInDevices$DeviceInfo[]) => void
  >;

  declare interface sockets$CreateInfo {
    /**
     * The ID of the newly created socket.
     * Note that socket IDs created from this
     * API are not compatible with socket IDs
     * created from other APIs, such as the
     * sockets.tcp API.
     */
    socketId: chrome$integer;

    /**
     * The ID of the newly created socket.
     * Note that socket IDs created from this API are
     * **not compatible** with socket IDs created from
     * other APIs, such as the deprecated socket API.
     */
    socketId: chrome$integer;
  }

  declare interface sockets$SendInfo {
    /**
     * The result code returned from the underlying network call. A negative value indicates an error.
     */
    resultCode: chrome$integer;

    /**
     * The number of bytes sent (if result == 0)
     */
    bytesSent?: chrome$integer;
  }

  declare interface sockets$ReceiveEventArgs {
    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * The data received, with a maxium size of *bufferSize*.
     */
    data: ArrayBuffer;
  }

  declare type sockets$AcceptEventArgs = {} & sockets$ReceiveEventArgs;

  declare interface sockets$ReceiveErrorEventArgs {
    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * The result code returned from the underlying network call.
     */
    resultCode: chrome$integer;
  }

  declare type sockets$AcceptErrorEventArgs = {} & sockets$ReceiveErrorEventArgs;

  declare interface sockets$SocketProperties {
    /**
     * Flag indicating whether the socket is left open when
     * the event page of the application is unloaded
     * (see Manage App Lifecycle). The default value is false.
     * When the application is loaded, any sockets previously
     * opened with persistent=true can be fetched with $ref:getSockets.
     */
    persistent?: boolean;

    /**
     * An application-defined string associated with the socket.
     */
    name?: string;

    /**
     * @default 4096
     * @description The size of the buffer used to receive data.
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating if the socket is left open when the event page of the
     * application is unloaded. When the application is loaded, any sockets
     * previously opened with persistent=true can be fetched with *getSockets*.
     * @default false
     */
    persistent?: boolean;

    /**
     * An application-defined string associated with the socket.
     */
    name?: string;

    /**
     * The size of the buffer used to receive data.
     * @default : 4096
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating if the socket remains open when the event page of the
     * application is unloaded. The default value is 'false.' When the
     * application is loaded, any sockets previously opened with
     * persistent=true can be fetched with getSockets.
     * @see http://developer.chrome.com/apps/app_lifecycle.html
     */
    persistent?: boolean;

    /**
     * An application-defined string associated with the socket.
     */
    name?: string;
  }

  declare interface sockets$SocketInfo {
    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * Flag indicating if the socket remains
     * open when the event page of the application
     * is unloaded (see SocketProperties.persistent).
     * The default value is 'false'.
     */
    persistent: boolean;

    /**
     * Application-defined string associated with the socket.
     */
    name?: string;

    /**
     * The size of the buffer used to receive data.
     * If no buffer size has been specified explictly,
     * the value is not provided.
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating whether a connected socket
     * blocks its peer from sending more data, or
     * whether connection requests on a listening
     * socket are dispatched through the onAccept
     * event or queued up in the listen queue backlog.
     * See setPaused. The default value is 'false'.
     */
    paused: boolean;

    /**
     * Flag indicating whether the socket is connected to a remote peer.
     */
    connected: boolean;

    /**
     * If the underlying socket is connected,
     * contains the Bluetooth address of the device it is connected to.
     */
    address?: string;

    /**
     * If the underlying socket is connected,
     * contains information about the service
     * UUID it is connected to, otherwise if
     * the underlying socket is listening,
     * contains information about the service
     * UUID it is listening on.
     */
    uuid?: string;

    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * Flag indicating whether the socket is left open when the application is suspended (see SocketProperties.persistent).
     */
    persistent: boolean;

    /**
     * Application-defined string associated with the socket.
     */
    name?: string;

    /**
     * The size of the buffer used to receive data. If no buffer size has been specified explictly, the value is not provided.
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating whether a connected socket blocks its peer from sending more data (see setPaused).
     */
    paused: boolean;

    /**
     * Flag indicating whether the socket is connected to a remote peer.
     */
    connected: boolean;

    /**
     * If the underlying socket is connected, contains its local IPv4/6 address.
     */
    localAddress?: string;

    /**
     * If the underlying socket is connected, contains its local port.
     */
    localPort?: chrome$integer;

    /**
     * If the underlying socket is connected, contains the peer/ IPv4/6 address.
     */
    peerAddress?: string;

    /**
     * If the underlying socket is connected, contains the peer port.
     */
    peerPort?: chrome$integer;

    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * Flag indicating if the socket remains open when the event page of the
     * application is unloaded (see SocketProperties.persistent). The
     * default value is 'false'.
     */
    persistent: boolean;

    /**
     * Application-defined string associated with the socket.
     */
    name?: string;

    /**
     * Flag indicating whether connection requests on a listening socket are
     * dispatched through the onAccept event or queued up in the listen
     * queue backlog. See setPaused. The default value is 'false'
     */
    paused: boolean;

    /**
     * If the socket is listening, contains its local IPv4/6 address.
     */
    localAddress?: string;

    /**
     * If the socket is listening, contains its local port.
     */
    localPort?: chrome$integer;
  }

  declare var npm$namespace$tcp: {
    create: typeof tcp$create,
    update: typeof tcp$update,
    setPaused: typeof tcp$setPaused,
    setKeepAlive: typeof tcp$setKeepAlive,
    setNoDelay: typeof tcp$setNoDelay,
    connect: typeof tcp$connect,
    disconnect: typeof tcp$disconnect,
    secure: typeof tcp$secure,
    send: typeof tcp$send,
    close: typeof tcp$close,
    getInfo: typeof tcp$getInfo,
    getSockets: typeof tcp$getSockets,
    onReceive: typeof tcp$onReceive,
    onReceiveError: typeof tcp$onReceiveError
  };
  declare interface tcp$SecureOptions {
    /**
     * The minimum and maximum acceptable versions of TLS.
     * These will be tls1, tls1.1, or tls1.2.
     * *Note*
     * tls1.3 should be supported from Chrome 67.
     * @see [TLS Info and support table]{@link https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_1.3}
     */
    tlsVersion?: {
      min?: "tls1" | "tls1.1" | "tls1.2" | "tls1.3",
      max?: "tls1" | "tls1.1" | "tls1.2" | "tls1.3"
    };
  }

  /**
   * Creates a TCP socket.
   */
  declare function tcp$create(
    callback: (createInfo: sockets$CreateInfo) => void
  ): void;

  /**
   * Creates a TCP socket.
   * @param properties The socket properties (optional).
   */
  declare function tcp$create(
    properties: sockets$SocketProperties,
    callback: (createInfo: sockets$CreateInfo) => void
  ): void;

  /**
   * Updates the socket properties.
   */
  declare function tcp$update(
    socketId: chrome$integer,
    properties: sockets$SocketProperties,
    callback?: () => void
  ): void;

  /**
   * Enables or disables the application from receiving messages from its peer.
   * The default value is 'false'. Pausing a socket is typically used by an
   * application to throttle data sent by its peer. When a socket is paused,
   * no onReceive event is raised. When a socket is connected and un-paused,
   * onReceive events are raised again when messages are received.
   */
  declare function tcp$setPaused(
    socketId: chrome$integer,
    paused: boolean,
    callback?: () => void
  ): void;

  /**
   * @description Enables or disables the keep-alive functionality for a TCP connection.
   * @param socketId The socket identifier.
   * @param enable If true, enable keep-alive functionality.
   * @param callback Provides the result code returned from the underlying network call. A negative value indicates an error.
   */
  declare function tcp$setKeepAlive(
    socketId: chrome$integer,
    enable: boolean,
    callback: (result: chrome$integer) => void
  ): void;

  /**
   * @description Enables or disables the keep-alive functionality for a TCP connection.
   * @param socketId The socket identifier.
   * @param enable If true, enable keep-alive functionality.
   * @param delay Set the delay seconds between the last data packet received and the first keepalive probe. Default is 0.
   * @param callback Provides the result code returned from the underlying network call. A negative value indicates an error.
   */
  declare function tcp$setKeepAlive(
    socketId: chrome$integer,
    enable: boolean,
    delay: chrome$integer,
    callback: (result: chrome$integer) => void
  ): void;

  /**
 * Sets or clears TCP_NODELAY for a TCP connection.
 * Nagle's algorithm will be disabled when TCP_NODELAY is set.
 * @param socketId The socket identifier.
 * @param noDelay If true, disables Nagle's algorithm.
 * @param callback Called when the setNoDelay attempt is complete. Provides the result code returned
from the underlying network call. A negative value indicates an error.
 */
  declare function tcp$setNoDelay(
    socketId: chrome$integer,
    noDelay: boolean,
    callback: (result: chrome$integer) => void
  ): void;

  /**
 * Connects the socket to a remote machine.
 * When the connect operation completes successfully,
 * onReceive events are raised when data is received from the peer.
 * If a network error occurs while the runtime is receiving packets,
 * a onReceiveError event is raised, at which point no more onReceive
 * event will be raised for this socket until the resume method is called.
 * @param socketId The socket identifier.
 * @param peerAddress The address of the remote machine. DNS name, IPv4 and IPv6 formats are supported.
 * @param peerPort The port of the remote machine.
 * @param callback Called when the connect attempt is complete.
The result code returned from the underlying network call.
A negative value indicates an error.
 */
  declare function tcp$connect(
    socketId: chrome$integer,
    peerAddress: string,
    peerPort: chrome$integer,
    callback: (result: chrome$integer) => void
  ): void;

  /**
   * @description Disconnects the socket.
   * @param socketId The socket identifier.
   * @param callback Called when the disconnect attempt is complete.
   */
  declare function tcp$disconnect(
    socketId: chrome$integer,
    callback?: () => void
  ): void;

  /**
   * Start a TLS client connection over the connected TCP client socket.
   * @since Chrome 38.
   * @param socketId The existing, connected socket to use.
   * @param callback Called when the connection attempt is complete.
   */
  declare function tcp$secure(
    socketId: chrome$integer,
    callback: (result: chrome$integer) => void
  ): void;

  /**
   * Start a TLS client connection over the connected TCP client socket.
   * @since Chrome 38.
   * @param socketId The existing, connected socket to use.
   * @param options Constraints and parameters for the TLS connection.
   * @param callback Called when the connection attempt is complete.
   */
  declare function tcp$secure(
    socketId: chrome$integer,
    options: tcp$SecureOptions,
    callback: (result: chrome$integer) => void
  ): void;

  /**
   * @description Sends data on the given TCP socket.
   * @param socketId The socket identifier.
   * @param data The data to send.
   * @param callback Called when the send operation completes.
   */
  declare function tcp$send(
    socketId: chrome$integer,
    data: ArrayBuffer,
    callback: (sendInfo: sockets$SendInfo) => void
  ): void;

  /**
   * Closes the socket and releases the address/port the socket is bound to.
   * Each socket created should be closed after use. The socket id is no longer
   * valid as soon at the function is called. However, the socket is guaranteed
   * to be closed only when the callback is invoked.
   * @param socketId The socket identifier.
   * @param callback Called when the close operation completes.
   */
  declare function tcp$close(
    socketId: chrome$integer,
    callback?: () => void
  ): void;

  /**
   * Retrieves the state of the given socket.
   * @param socketId The socket identifier.
   * @param callback Called when the socket state is available. Provides an object containing the socket information.
   */
  declare function tcp$getInfo(
    socketId: chrome$integer,
    callback: (socketInfo: sockets$SocketInfo) => void
  ): void;

  /**
   * @description Retrieves the list of currently opened sockets owned by the application.
   * @param callback Called when the list of sockets is available. Provides an array of socket info.
   */
  declare function tcp$getSockets(
    callback: (socketInfos: sockets$SocketInfo[]) => void
  ): void;

  /**
   * Event raised when data has been received for a given socket.
   */
  declare var tcp$onReceive: chrome$events.events$Event<
    (args: sockets$ReceiveEventArgs) => void
  >;

  /**
   * Event raised when a network error occured while the runtime was
   * waiting for data on the socket address and port. Once this event
   * is raised, the socket is set to paused and no more onReceive
   * events are raised for this socket.
   */
  declare var tcp$onReceiveError: chrome$events.events$Event<
    (args: sockets$ReceiveErrorEventArgs) => void
  >;

  declare var npm$namespace$tcpServer: {
    create: typeof tcpServer$create,
    update: typeof tcpServer$update,
    setPaused: typeof tcpServer$setPaused,
    listen: typeof tcpServer$listen,
    disconnect: typeof tcpServer$disconnect,
    close: typeof tcpServer$close,
    getInfo: typeof tcpServer$getInfo,
    getSockets: typeof tcpServer$getSockets,
    onAccept: typeof tcpServer$onAccept,
    onAcceptError: typeof tcpServer$onAcceptError
  };
  declare interface tcpServer$SocketProperties {
    /**
     * Flag indicating whether the socket is left open when
     * the event page of the application is unloaded
     * (see Manage App Lifecycle). The default value is false.
     * When the application is loaded, any sockets previously
     * opened with persistent=true can be fetched with $ref:getSockets.
     */
    persistent?: boolean;

    /**
     * An application-defined string associated with the socket.
     */
    name?: string;

    /**
     * @default 4096
     * @description The size of the buffer used to receive data.
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating if the socket is left open when the event page of the
     * application is unloaded. When the application is loaded, any sockets
     * previously opened with persistent=true can be fetched with *getSockets*.
     * @default false
     */
    persistent?: boolean;

    /**
     * An application-defined string associated with the socket.
     */
    name?: string;

    /**
     * The size of the buffer used to receive data.
     * @default : 4096
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating if the socket remains open when the event page of the
     * application is unloaded. The default value is 'false.' When the
     * application is loaded, any sockets previously opened with
     * persistent=true can be fetched with getSockets.
     * @see http://developer.chrome.com/apps/app_lifecycle.html
     */
    persistent?: boolean;

    /**
     * An application-defined string associated with the socket.
     */
    name?: string;
  }

  declare interface tcpServer$SocketInfo {
    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * Flag indicating if the socket remains
     * open when the event page of the application
     * is unloaded (see SocketProperties.persistent).
     * The default value is 'false'.
     */
    persistent: boolean;

    /**
     * Application-defined string associated with the socket.
     */
    name?: string;

    /**
     * The size of the buffer used to receive data.
     * If no buffer size has been specified explictly,
     * the value is not provided.
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating whether a connected socket
     * blocks its peer from sending more data, or
     * whether connection requests on a listening
     * socket are dispatched through the onAccept
     * event or queued up in the listen queue backlog.
     * See setPaused. The default value is 'false'.
     */
    paused: boolean;

    /**
     * Flag indicating whether the socket is connected to a remote peer.
     */
    connected: boolean;

    /**
     * If the underlying socket is connected,
     * contains the Bluetooth address of the device it is connected to.
     */
    address?: string;

    /**
     * If the underlying socket is connected,
     * contains information about the service
     * UUID it is connected to, otherwise if
     * the underlying socket is listening,
     * contains information about the service
     * UUID it is listening on.
     */
    uuid?: string;

    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * Flag indicating whether the socket is left open when the application is suspended (see SocketProperties.persistent).
     */
    persistent: boolean;

    /**
     * Application-defined string associated with the socket.
     */
    name?: string;

    /**
     * The size of the buffer used to receive data. If no buffer size has been specified explictly, the value is not provided.
     */
    bufferSize?: chrome$integer;

    /**
     * Flag indicating whether a connected socket blocks its peer from sending more data (see setPaused).
     */
    paused: boolean;

    /**
     * Flag indicating whether the socket is connected to a remote peer.
     */
    connected: boolean;

    /**
     * If the underlying socket is connected, contains its local IPv4/6 address.
     */
    localAddress?: string;

    /**
     * If the underlying socket is connected, contains its local port.
     */
    localPort?: chrome$integer;

    /**
     * If the underlying socket is connected, contains the peer/ IPv4/6 address.
     */
    peerAddress?: string;

    /**
     * If the underlying socket is connected, contains the peer port.
     */
    peerPort?: chrome$integer;

    /**
     * The socket identifier.
     */
    socketId: chrome$integer;

    /**
     * Flag indicating if the socket remains open when the event page of the
     * application is unloaded (see SocketProperties.persistent). The
     * default value is 'false'.
     */
    persistent: boolean;

    /**
     * Application-defined string associated with the socket.
     */
    name?: string;

    /**
     * Flag indicating whether connection requests on a listening socket are
     * dispatched through the onAccept event or queued up in the listen
     * queue backlog. See setPaused. The default value is 'false'
     */
    paused: boolean;

    /**
     * If the socket is listening, contains its local IPv4/6 address.
     */
    localAddress?: string;

    /**
     * If the socket is listening, contains its local port.
     */
    localPort?: chrome$integer;
  }

  /**
   * Creates a TCP server socket.
   * @see https://developer.chrome.com/apps/sockets_tcpServer#method-create
   * @param callback Called when the socket has been created.
   */
  declare function tcpServer$create(
    callback: (createInfo: sockets$CreateInfo) => void
  ): void;

  /**
   * Creates a TCP server socket.
   * @see https://developer.chrome.com/apps/sockets_tcpServer#method-create
   * @param properties The socket properties.
   * @param callback Called when the socket has been created.
   */
  declare function tcpServer$create(
    properties: tcpServer$SocketProperties,
    callback: (createInfo: sockets$CreateInfo) => void
  ): void;

  /**
   * Updates the socket properties.
   * @see https://developer.chrome.com/apps/sockets_tcpServer#method-update
   * @param socketId The socket identifier.
   * @param properties The properties to update.
   * @param callback Called when the properties are updated.
   */
  declare function tcpServer$update(
    socketId: chrome$integer,
    properties: tcpServer$SocketProperties,
    callback?: () => void
  ): void;

  /**
   * Enables or disables a listening socket from accepting new connections.
   * When paused, a listening socket accepts new connections until its backlog
   * (see listen function) is full then refuses additional connection
   * requests. onAccept events are raised only when the socket is un-paused.
   * @see https://developer.chrome.com/apps/sockets_tcpServer#method-setPaused
   * @param callback Callback from the setPaused method.
   */
  declare function tcpServer$setPaused(
    socketId: chrome$integer,
    paused: boolean,
    callback?: () => void
  ): void;

  /**
 * Listens for connections on the specified port and address. If the
 * port/address is in use, the callback indicates a failure.
 * @see https://developer.chrome.com/apps/sockets_tcpServer#method-listen
 * @param socketId The socket identifier.
 * @param address The address of the local machine.
 * @param port The port of the local machine. When set to 0, a free port
is chosen dynamically. The dynamically allocated port can
be found by calling getInfo.
 * @param backlog Length of the socket's listen queue. The default value
depends on the Operating System (SOMAXCONN), which
ensures a reasonable queue length for most applications.
 * @param callback Called when listen operation completes.
 */
  declare function tcpServer$listen(
    socketId: chrome$integer,
    address: string,
    port: chrome$integer,
    backlog: chrome$integer,
    callback: (result: chrome$integer) => void
  ): void;

  /**
 * Listens for connections on the specified port and address. If the
 * port/address is in use, the callback indicates a failure.
 * @see https://developer.chrome.com/apps/sockets_tcpServer#method-listen
 * @param socketId The socket identifier.
 * @param address The address of the local machine.
 * @param port The port of the local machine. When set to 0, a free port
is chosen dynamically. The dynamically allocated port can
be found by calling getInfo.
 * @param callback Called when listen operation completes.
 */
  declare function tcpServer$listen(
    socketId: chrome$integer,
    address: string,
    port: chrome$integer,
    callback: (result: chrome$integer) => void
  ): void;

  /**
   * Disconnects the listening socket, i.e. stops accepting new connections
   * and releases the address/port the socket is bound to. The socket
   * identifier remains valid, e.g. it can be used with listen to accept
   * connections on a new port and address.
   * @see https://developer.chrome.com/apps/sockets_tcpServer#method-disconnect
   * @param socketId The socket identifier.
   * @param callback Called when the disconnect attempt is complete.
   */
  declare function tcpServer$disconnect(
    socketId: chrome$integer,
    callback?: () => void
  ): void;

  /**
   * Disconnects and destroys the socket. Each socket created should be closed
   * after use. The socket id is no longer valid as soon at the function is
   * called. However, the socket is guaranteed to be closed only when the
   * callback is invoked.
   * @see https://developer.chrome.com/apps/sockets_tcpServer#method-close
   * @param socketId The socket identifier.
   * @param callback Called when the close operation completes.
   */
  declare function tcpServer$close(
    socketId: chrome$integer,
    callback?: () => void
  ): void;

  /**
   * Retrieves the state of the given socket.
   * @see https://developer.chrome.com/apps/sockets_tcpServer#method-getInfo
   * @param socketId The socket identifier.
   * @param callback Called when the socket state is available.
   */
  declare function tcpServer$getInfo(
    socketId: chrome$integer,
    callback: (socketInfo: tcpServer$SocketInfo) => void
  ): void;

  /**
   * Retrieves the list of currently opened sockets owned by the application.
   * @see https://developer.chrome.com/apps/sockets_tcpServer#method-getSockets
   * @param callback Called when the list of sockets is available.
   */
  declare function tcpServer$getSockets(
    callback: (socketInfos: tcpServer$SocketInfo[]) => void
  ): void;

  /**
   * Event raised when a connection has been made to the server socket.
   * @see https://developer.chrome.com/apps/sockets_tcpServer#event-onAccept
   */
  declare var tcpServer$onAccept: chrome$events.events$Event<
    (args: sockets$AcceptEventArgs) => void
  >;

  /**
   * Event raised when a network error occured while the runtime was waiting
   * for new connections on the socket address and port. Once this event is
   * raised, the socket is set to paused and no more onAccept events are
   * raised for this socket until the socket is resumed.
   * @see https://developer.chrome.com/apps/sockets_tcpServer#event-onAcceptError
   */
  declare var tcpServer$onAcceptError: chrome$events.events$Event<
    (args: sockets$AcceptErrorEventArgs) => void
  >;

  declare var npm$namespace$udp: {
    create: typeof udp$create,
    update: typeof udp$update,
    setPaused: typeof udp$setPaused,
    bind: typeof udp$bind,
    send: typeof udp$send,
    close: typeof udp$close,
    getInfo: typeof udp$getInfo,
    getSockets: typeof udp$getSockets,
    joinGroup: typeof udp$joinGroup,
    leaveGroup: typeof udp$leaveGroup,
    setMulticastTimeToLive: typeof udp$setMulticastTimeToLive,
    setMulticastLoopbackMode: typeof udp$setMulticastLoopbackMode,
    getJoinedGroups: typeof udp$getJoinedGroups,
    setBroadcast: typeof udp$setBroadcast,
    onReceive: typeof udp$onReceive,
    onReceiveError: typeof udp$onReceiveError
  };

  /**
   * Creates a UDP socket with default properties.
   * @see https://developer.chrome.com/apps/sockets_udp#method-create
   * @param The ID of the newly created socket.
   */
  declare function udp$create(
    callback: (createInfo: sockets$CreateInfo) => void
  ): void;

  /**
   * Creates a UDP socket with the given properties.
   * @see https://developer.chrome.com/apps/sockets_udp#method-create
   * @param properties The socket properties.
   * @param The ID of the newly created socket.
   */
  declare function udp$create(
    properties: tcpServer$SocketProperties,
    callback: (createInfo: sockets$CreateInfo) => void
  ): void;

  /**
   * Updates the socket properties.
   * @see https://developer.chrome.com/apps/sockets_udp#method-update
   * @param socketId The socket ID.
   * @param properties The properties to update.
   * @param callback Called when the properties are updated.
   */
  declare function udp$update(
    socketId: chrome$integer,
    properties: tcpServer$SocketProperties,
    callback?: () => void
  ): void;

  /**
 * Pauses or unpauses a socket. A paused socket is blocked from firing
 * onReceive events.
 * @see https://developer.chrome.com/apps/sockets_udp#method-setPaused
 * @param socketId The socket ID.
 * @param paused Flag to indicate whether to pause or unpause.
 * @param callback Called when the socket has been successfully paused or
unpaused.
 */
  declare function udp$setPaused(
    socketId: chrome$integer,
    paused: boolean,
    callback?: () => void
  ): void;

  /**
 * Binds the local address and port for the socket. For a client socket, it
 * is recommended to use port 0 to let the platform pick a free port.
 * 
 * Once the bind operation completes successfully, onReceive events are
 * raised when UDP packets arrive on the address/port specified -- unless
 * the socket is paused.
 * @see https://developer.chrome.com/apps/sockets_udp#method-bind
 * @param socketId The socket ID.
 * @param address The address of the local machine. DNS name, IPv4 and IPv6
formats are supported. Use '0.0.0.0' to accept packets
from all local available network interfaces.
 * @param port The port of the local machine. Use '0' to bind to a free
port.
 * @param callback Called when the bind operation completes.
 */
  declare function udp$bind(
    socketId: chrome$integer,
    address: string,
    port: chrome$integer,
    callback: (result: chrome$integer) => void
  ): void;

  /**
   * Sends data on the given socket to the given address and port. The socket
   * must be bound to a local port before calling this method.
   * @see https://developer.chrome.com/apps/sockets_udp#method-send
   * @param socketId The socket ID.
   * @param data The data to send.
   * @param address The address of the remote machine.
   * @param port The port of the remote machine.
   * @param callback Called when the send operation completes.
   */
  declare function udp$send(
    socketId: chrome$integer,
    data: ArrayBuffer,
    address: string,
    port: chrome$integer,
    callback: (sendInfo: sockets$SendInfo) => void
  ): void;

  /**
   * Closes the socket and releases the address/port the socket is bound to.
   * Each socket created should be closed after use. The socket id is no
   * longer valid as soon at the function is called. However, the socket is
   * guaranteed to be closed only when the callback is invoked.
   * @see https://developer.chrome.com/apps/sockets_udp#method-close
   * @param socketId The socket ID.
   * @param callback Called when the close operation completes.
   */
  declare function udp$close(
    socketId: chrome$integer,
    callback?: () => void
  ): void;

  /**
   * Retrieves the state of the given socket.
   * @see https://developer.chrome.com/apps/sockets_udp#method-getInfo
   * @param socketId The socket ID.
   * @param callback Called when the socket state is available.
   */
  declare function udp$getInfo(
    socketId: chrome$integer,
    callback: (socketInfo: tcpServer$SocketInfo) => void
  ): void;

  /**
   * Retrieves the list of currently opened sockets owned by the application.
   * @see https://developer.chrome.com/apps/sockets_udp#method-getSockets
   * @param callback Called when the list of sockets is available.
   */
  declare function udp$getSockets(
    callback: (socketInfos: tcpServer$SocketInfo[]) => void
  ): void;

  /**
   * Joins the multicast group and starts to receive packets from that group.
   * The socket must be bound to a local port before calling this method.
   * @see https://developer.chrome.com/apps/sockets_udp#method-joinGroup
   * @param socketId The socket ID.
   * @param address The group address to join. Domain names are not supported.
   * @param callback Called when the joinGroup operation completes.
   */
  declare function udp$joinGroup(
    socketId: chrome$integer,
    address: string,
    callback: (result: chrome$integer) => void
  ): void;

  /**
 * Leaves the multicast group previously joined using joinGroup. This is
 * only necessary to call if you plan to keep using the socket afterwards,
 * since it will be done automatically by the OS when the socket is closed.
 * 
 * Leaving the group will prevent the router from sending multicast
 * datagrams to the local host, presuming no other process on the host is
 * still joined to the group.
 * @see https://developer.chrome.com/apps/sockets_udp#method-leaveGroup
 * @param socketId The socket ID.
 * @param address The group address to leave. Domain names are not
supported.
 * @param callback Called when the leaveGroup operation completes.
 */
  declare function udp$leaveGroup(
    socketId: chrome$integer,
    address: string,
    callback: (result: chrome$integer) => void
  ): void;

  /**
   * Sets the time-to-live of multicast packets sent to the multicast group.
   *
   * Calling this method does not require multicast permissions.
   * @see https://developer.chrome.com/apps/sockets_udp#method-setMulticastTimeToLive
   * @param socketId The socket ID.
   * @param ttl The time-to-live value.
   * @param callback Called when the configuration operation completes.
   */
  declare function udp$setMulticastTimeToLive(
    socketId: chrome$integer,
    ttl: chrome$integer,
    callback: (result: chrome$integer) => void
  ): void;

  /**
 * Sets whether multicast packets sent from the host to the multicast group
 * will be looped back to the host.
 * 
 * Note: the behavior of setMulticastLoopbackMode is slightly different
 * between Windows and Unix-like systems. The inconsistency happens only
 * when there is more than one application on the same host joined to the
 * same multicast group while having different settings on multicast
 * loopback mode. On Windows, the applications with loopback off will not
 * receive the loopback packets; while on Unix-like systems, the
 * applications with loopback off will not SEND the loopback packets to
 * other applications on the same host.
 * @see [MSDN]{@link http://goo.gl/6vqbj}

Calling this method does not require multicast permissions.
 * @see https://developer.chrome.com/apps/sockets_udp#method-setMulticastLoopbackMode
 * @param socketId The socket ID.
 * @param enabled Indicate whether to enable loopback mode.
 * @param callback Called when the configuration operation completes.
 */
  declare function udp$setMulticastLoopbackMode(
    socketId: chrome$integer,
    enabled: boolean,
    callback: (result: chrome$integer) => void
  ): void;

  /**
   * Gets the multicast group addresses the socket is currently joined to.
   * @see https://developer.chrome.com/apps/sockets_udp#method-getJoinedGroups
   * @param socketId The socket ID.
   * @param callback Called with an array of strings of the result.
   */
  declare function udp$getJoinedGroups(
    socketId: chrome$integer,
    callback: (groups: string[]) => void
  ): void;

  /**
   * Enables or disables broadcast packets on this socket.
   * @since Chrome 44
   * @see https://developer.chrome.com/apps/sockets_udp#method-setBroadcast
   * @param socketId The socket ID.
   * @param enabled true to enable broadcast packets, false to disable them.
   * @param callback Callback from the setBroadcast method.
   */
  declare function udp$setBroadcast(
    socketId: chrome$integer,
    enabled: boolean,
    callback?: (result: chrome$integer) => void
  ): void;

  /**
   * Event raised when a UDP packet has been received for the given socket.
   * @see https://developer.chrome.com/apps/sockets_udp#event-onReceive
   */
  declare var udp$onReceive: chrome$events.events$Event<
    (args: sockets$ReceiveEventArgs) => void
  >;

  /**
   * Event raised when a network error occured while the runtime was waiting
   * for data on the socket address and port. Once this event is raised, the
   * socket is paused and no more onReceive events will be raised for this
   * socket until the socket is resumed.
   * @see https://developer.chrome.com/apps/sockets_udp#event-onReceiveError
   */
  declare var udp$onReceiveError: chrome$events.events$Event<
    (args: sockets$ReceiveErrorEventArgs) => void
  >;

  declare var npm$namespace$storage: {
    local: typeof storage$local,
    sync: typeof storage$sync,
    managed: typeof storage$managed,
    onChanged: typeof storage$onChanged
  };
  declare interface storage$StorageAreaRead {
    /**
 * Gets one or more items from storage.
 * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
Parameter items: Object with items in their key-value mappings.
 */
    signedInDevices$get(
      callback: (items: {
        [key: string]: any
      }) => void
    ): void;

    /**
 * Gets one or more items from storage.
 * @param keys A single key to get, list of keys to get, or a interface specifying default values.
An empty list or object will return an empty result object. Pass in null to get the entire contents of storage.
 * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
Parameter items: Object with items in their key-value mappings.
 */
    signedInDevices$get(
      keys: string | string[] | Object | null,
      callback: (items: {
        [key: string]: any
      }) => void
    ): void;

    /**
 * Gets the amount of space (in bytes) being used by one or more items.
 * @param callback Callback with the amount of space being used by storage, or on failure (in which case runtime.lastError will be set).
Parameter bytesInUse: Amount of space being used in storage, in bytes.
 */
    getBytesInUse(callback: (bytesInUse: chrome$integer) => void): void;

    /**
 * Gets the amount of space (in bytes) being used by one or more items.
 * @param keys A single key or list of keys to get the total usage for. An empty list will return 0. Pass in null to get the total usage of all of storage.
 * @param callback Callback with the amount of space being used by storage, or on failure (in which case runtime.lastError will be set).
Parameter bytesInUse: Amount of space being used in storage, in bytes.
 */
    getBytesInUse(
      keys: string | string[] | null,
      callback: (bytesInUse: chrome$integer) => void
    ): void;
  }

  declare interface storage$StorageAreaWrite {
    /**
 * Removes all items from storage.
 * @param callback Optional.
Callback on success, or on failure (in which case runtime.lastError will be set).
 */
    notifications$clear(callback?: () => void): void;

    /**
 * Sets multiple items.
 * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected.
Primitive values such as numbers will serialize as expected. Values with a typeof 'object' and 'function' will typically serialize to {}, with the exception of Array (serializes as expected), Date, and Regex (serialize using their String representation).
 * @param callback Optional.
Callback on success, or on failure (in which case runtime.lastError will be set).
 */
    set(items: Object, callback?: () => void): void;

    /**
 * Removes one or more items from storage.
 * @param A single key or a list of keys for items to remove.
 * @param callback Optional.
Callback on success, or on failure (in which case runtime.lastError will be set).
 */
    permissions$remove(keys: string | string[], callback?: () => void): void;
  }

  declare type storage$StorageArea = {} & storage$StorageAreaRead &
    storage$StorageAreaWrite;

  declare interface storage$StorageChange {
    /**
     * The new value of the item, if there is a new value.
     */
    newValue?: any;

    /**
     * The old value of the item, if there was an old value.
     */
    oldValue?: any;
  }

  declare type storage$LocalStorageArea = {
    /**
     * The maximum amount (in bytes) of data that can be stored in local storage,
     * as measured by the JSON stringification of every value plus every key's length.
     * This value will be ignored if the extension has the unlimitedStorage permission.
     * Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
     * @see Permissions: 'unlimitedStorage'
     * @default 5242880
     */
    +QUOTA_BYTES: 5242880
  } & storage$StorageArea;

  declare type storage$SyncStorageArea = {
    /**
     * The maximum total amount (in bytes) of data that can be stored in
     * sync storage, as measured by the JSON stringification of every value
     * plus every key's length. Updates that would cause this limit to be
     * exceeded fail immediately and set runtime.lastError.
     */
    +QUOTA_BYTES: 102400,

    /**
     * The maximum size (in bytes) of each individual item in sync storage,
     * as measured by the JSON stringification of its value plus its key length.
     * Updates containing items larger than this limit will fail immediately and
     * set runtime.lastError.
     */
    +QUOTA_BYTES_PER_ITEM: 8192,

    /**
     * The maximum number of items that can be stored in sync storage.
     * Updates that would cause this limit to be exceeded will fail immediately
     * and set runtime.lastError.
     */
    +MAX_ITEMS: 512,

    /**
     * The maximum number of set, remove, or clear operations that can be performed each hour.
     * This is 1 every 2 seconds, a lower ceiling than the short term higher writes-per-minute limit.
     * Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
     */
    +MAX_WRITE_OPERATIONS_PER_HOUR: 1800,

    /**
     * The maximum number of set, remove, or clear operations that can be performed each minute.
     * This is 2 per second, providing higher throughput than writes-per-hour over a shorter period of time.
     * Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
     * @since Chrome 40.
     */
    +MAX_WRITE_OPERATIONS_PER_MINUTE: 120,

    /**
 * @deprecated since Chrome 40.
The storage.sync API no longer has a sustained write operation quota.
 */
    +MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: chrome$chrome$deprecated
  } & storage$StorageArea;

  declare type storage$ManagedStorageArea = {} & storage$StorageAreaRead;

  declare type storage$StorageAreas = "local" | "sync" | "managed";

  /**
   * Items in the local storage area are local to each machine.
   */
  declare var storage$local: storage$LocalStorageArea;

  /**
   * Items in the sync storage area are synced using Chrome Sync.
   */
  declare var storage$sync: storage$SyncStorageArea;

  /**
   * Items in the managed storage area are set by the domain administrator,
   * and are read-only for the extension; trying to modify this namespace
   * results in an error.
   * @since Chrome 33.
   */
  declare var storage$managed: storage$ManagedStorageArea;

  /**
   * Fired when one or more items change.
   */
  declare var storage$onChanged: chrome$events.events$Event<
    (
      changes: {
        [key: string]: storage$StorageChange
      },
      areaName: storage$StorageAreas
    ) => void
  >;

  declare var npm$namespace$syncFileSystem: {
    requestFileSystem: typeof syncFileSystem$requestFileSystem,
    setConflictResolutionPolicy: typeof syncFileSystem$setConflictResolutionPolicy,
    getConflictResolutionPolicy: typeof syncFileSystem$getConflictResolutionPolicy,
    getUsageAndQuota: typeof syncFileSystem$getUsageAndQuota,
    getFileStatus: typeof syncFileSystem$getFileStatus,
    getFileStatuses: typeof syncFileSystem$getFileStatuses,
    getServiceStatus: typeof syncFileSystem$getServiceStatus,
    ServiceStatus: typeof syncFileSystem$ServiceStatus,
    FileStatus: typeof syncFileSystem$FileStatus,
    ConflictResolutionPolicy: typeof syncFileSystem$ConflictResolutionPolicy,
    SyncAction: typeof syncFileSystem$SyncAction,
    SyncDirection: typeof syncFileSystem$SyncDirection,
    onServiceStatusChanged: typeof syncFileSystem$onServiceStatusChanged,
    onFileStatusChanged: typeof syncFileSystem$onFileStatusChanged
  };

  /**
 * @enum {} 'initializing'
- The sync service is being initialized (e.g. restoring data from the database, checking connectivity and authenticating to the service etc).
'running'
- The sync service is up and running.
'authentication_required'
- The sync service is not synchronizing files because the remote service needs to be authenticated by the user to proceed.
'temporary_unavailable'
- The sync service is not synchronizing files because the remote service is (temporarily) unavailable due to some recoverable errors, e.g. network is offline, the remote service is down or not reachable etc. More details should be given by |description| parameter in OnServiceInfoUpdated (which could contain service-specific details).
'disabled'
- The sync service is disabled and the content will never sync. (E.g. this could happen when the user has no account on the remote service or the sync service has had an unrecoverable error.)
 */
  declare var syncFileSystem$ServiceStatus: {
    INITIALIZING: "initializing",
    RUNNING: "running",
    AUTHENTICATION_REQUIRED: "authentication_required",
    TEMPORARY_UNAVAILABLE: "temporary_unavailable",
    DISABLED: "disabled"
  };

  /**
 * @enum {} 'synced'
- Not conflicting and has no pending local changes.
'pending'
- Has one or more pending local changes that haven't been synchronized.
'conflicting'
- File conflicts with remote version and must be resolved manually.
 */
  declare var syncFileSystem$FileStatus: {
    SYNCED: "synced",
    PENDING: "pending",
    CONFLICTING: "conflicting"
  };

  declare var syncFileSystem$ConflictResolutionPolicy: {
    LAST_WRITE_WIN: "last_write_win",
    MANUAL: "manual"
  };

  declare var syncFileSystem$SyncAction: {
    ADDED: "added",
    UPDATED: "updated",
    DELETED: "deleted"
  };

  declare var syncFileSystem$SyncDirection: {
    LOCAL_TO_REMOTE: "local_to_remote",
    REMOTE_TO_LOCAL: "remote_to_local"
  };

  declare interface syncFileSystem$FileStatusInfo {
    /**
     * One of the Entry's originally given to getFileStatuses.
     */
    fileEntry: FileEntry;

    /**
     * Status value
     * @see FileStatus
     */
    status: chrome$ToStringLiteral<typeof FileStatus>;

    /**
     * Optional error that is only returned if there was a problem retrieving the FileStatus for the given file.
     */
    error?: string;
  }

  declare interface syncFileSystem$FileStatusChangedDetail {
    /**
     * fileEntry for the target file whose status has changed.
     * Contains name and path information of synchronized file.
     * On file deletion, fileEntry information will still be
     * available but file will no longer exist.
     */
    fileEntry: FileEntry;

    /**
     * Resulting file status after onFileStatusChanged event.
     * @see FileStatus
     */
    status: chrome$ToStringLiteral<typeof FileStatus>;

    /**
     * Sync action taken to fire onFileStatusChanged event.
     * Only applies if status is 'synced'.
     * @see SyncAction
     */
    action?: chrome$ToStringLiteral<typeof SyncAction>;

    /**
     * Sync direction for the onFileStatusChanged event.
     * Only applies if status is 'synced'.
     * @see SyncDirection
     */
    direction?: chrome$ToStringLiteral<typeof SyncDirection>;
  }

  /**
 * Returns a syncable filesystem backed by Google Drive.
 * The returned DOMFileSystem instance can be operated on
 * in the same way as the Temporary and Persistant file systems
 * @see [More information]{@link http://dev.w3.org/2009/dap/file-system/file-dir-sys.html}
 * @description Calling this multiple times from the same app will return the same handle to the same file system.
Note this call can fail.
For example, if the user is not signed in to Chrome
or if there is no network operation. To handle these
errors it is important chrome.runtime.lastError is
checked in the callback.
 * @param callback A callback type for requestFileSystem.
 */
  declare function syncFileSystem$requestFileSystem(
    callback: (fileSystem: FileSystem) => void
  ): void;

  /**
   * Sets the default conflict resolution policy for the 'syncable' file storage
   * for the app. By default it is set to 'last_write_win'. When conflict resolution
   * policy is set to 'last_write_win' conflicts for existing files are automatically
   * resolved next time the file is updated. |callback| can be optionally given to
   * know if the request has succeeded or not.
   * @param policy Policy
   * @see ConflictResolutionPolicy
   * @param callback A generic result callback to indicate success or failure.
   */
  declare function syncFileSystem$setConflictResolutionPolicy(
    policy: chrome$ToStringLiteral<typeof ConflictResolutionPolicy>,
    callback?: () => void
  ): void;

  /**
   * Gets the current conflict resolution policy.
   * @see ConflictResolutionPolicy
   */
  declare function syncFileSystem$getConflictResolutionPolicy(
    callback: (
      policy: chrome$ToStringLiteral<typeof ConflictResolutionPolicy>
    ) => void
  ): void;

  /**
   * Returns the current usage and quota in bytes for the 'syncable' file storage for the app.
   * @param fileSystem
   * @param callback
   */
  declare function syncFileSystem$getUsageAndQuota(
    fileSystem: FileSystem,
    callback: (info: {
      usageBytes: chrome$integer,
      quotaBytes: chrome$integer
    }) => void
  ): void;

  /**
   * Returns the FileStatus for the given fileEntry.
   * Note that 'conflicting' state only happens when
   * the service's conflict resolution policy is set to 'manual'.
   * @see FileStatus
   */
  declare function syncFileSystem$getFileStatus(
    fileEntry: FileEntry,
    callback: (status: chrome$ToStringLiteral<typeof FileStatus>) => void
  ): void;

  /**
   * Returns each FileStatus for the given fileEntry array. Typically called with the result from dirReader.readEntries().
   */
  declare function syncFileSystem$getFileStatuses(
    fileEntries: FileEntry[],
    callback: (status: syncFileSystem$FileStatusInfo[]) => void
  ): void;

  /**
   * Returns the current sync backend status.
   * @since Chrome 31.
   * @param callback
   * @see ServiceStatus
   */
  declare function syncFileSystem$getServiceStatus(
    callback: (status: chrome$ToStringLiteral<typeof ServiceStatus>) => void
  ): void;

  /**
   * Fired when an error or other status change has happened in the sync backend
   * (for example, when the sync is temporarily disabled due to network or authentication error).
   * @see ServiceStatus
   */
  declare var syncFileSystem$onServiceStatusChanged: chrome$events.events$Event<
    (detail: {
      state: chrome$ToStringLiteral<typeof ServiceStatus>,
      description: string
    }) => void
  >;

  /**
   * Fired when a file has been updated by the background sync service.
   */
  declare var syncFileSystem$onFileStatusChanged: chrome$events.events$Event<
    (detail: syncFileSystem$FileStatusChangedDetail) => void
  >;

  declare var npm$namespace$cpu: {
    getInfo: typeof cpu$getInfo
  };
  declare interface cpu$ProcessorUsage {
    /**
     * The cumulative time used by userspace programs on this processor.
     */
    user: chrome$double;

    /**
     * The cumulative time used by kernel programs on this processor.
     */
    kernel: chrome$double;

    /**
     * The cumulative time spent idle by this processor.
     */
    idle: chrome$double;

    /**
     * The total cumulative time for this processor. This value is equal to user + kernel + idle.
     */
    total: chrome$double;
  }

  declare interface cpu$ProcessorInfo {
    /**
     * Cumulative usage info for this logical processor.
     */
    usage: cpu$ProcessorUsage;
  }

  declare interface cpu$CpuInfo {
    /**
     * The number of logical processors.
     */
    numOfProcessors: chrome$integer;

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
     * The currently supported codes are 'mmx', 'sse', 'sse2', 'sse3', 'ssse3', 'sse4_1', 'sse4_2', and 'avx'.
     */
    features:
      | "mmx"
      | "sse"
      | "sse2"
      | "sse3"
      | "ssse3"
      | "sse4_1"
      | "sse4_2"
      | "avx";

    /**
     * Information about each logical processor.
     */
    processors: cpu$ProcessorInfo[];

    /**
 * @requires (CrOS) Currently supported on Chrome OS only.
 * @description List of CPU temperature readings from each thermal zone of the CPU.
Temperatures are in degrees Celsius.
 */
    temperatures?: chrome$double[];
  }

  /**
   * Queries basic CPU information of the system.
   */
  declare function cpu$getInfo(callback: (info: cpu$CpuInfo) => void): void;

  declare var npm$namespace$display: {
    getInfo: typeof display$getInfo,
    getDisplayLayout: typeof display$getDisplayLayout,
    setDisplayProperties: typeof display$setDisplayProperties,
    setDisplayLayout: typeof display$setDisplayLayout,
    enableUnifiedDesktop: typeof display$enableUnifiedDesktop,
    overscanCalibrationStart: typeof display$overscanCalibrationStart,
    overscanCalibrationAdjust: typeof display$overscanCalibrationAdjust,
    overscanCalibrationReset: typeof display$overscanCalibrationReset,
    overscanCalibrationComplete: typeof display$overscanCalibrationComplete,
    showNativeTouchCalibration: typeof display$showNativeTouchCalibration,
    startCustomTouchCalibration: typeof display$startCustomTouchCalibration,
    completeCustomTouchCalibration: typeof display$completeCustomTouchCalibration,
    clearTouchCalibration: typeof display$clearTouchCalibration,
    setMirrorMode: typeof display$setMirrorMode,
    DisplayPosition: typeof display$DisplayPosition,
    MirrorMode: typeof display$MirrorMode,
    onDisplayChanged: typeof display$onDisplayChanged
  };
  declare var display$DisplayPosition: {
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  };

  declare var display$MirrorMode: {
    OFF: "off",
    NORMAL: "normal",
    MIXED: "mixed"
  };

  declare interface display$Bounds {
    /**
     * This property can be used to read or write the current X coordinate of the content or window.
     */
    left: chrome$integer;

    /**
     * This property can be used to read or write the current Y coordinate of the content or window.
     */
    top: chrome$integer;

    /**
     * This property can be used to read or write the current width of the content or window.
     */
    width: chrome$integer;

    /**
     * This property can be used to read or write the current height of the content or window.
     */
    height: chrome$integer;

    /**
     * This property can be used to read or write the current minimum width of the content or window. A value of null indicates 'unspecified'.
     */
    minWidth?: chrome$integer | null;

    /**
     * This property can be used to read or write the current minimum height of the content or window. A value of null indicates 'unspecified'.
     */
    minHeight?: chrome$integer | null;

    /**
     * This property can be used to read or write the current maximum width of the content or window. A value of null indicates 'unspecified'.
     */
    maxWidth?: chrome$integer | null;

    /**
     * This property can be used to read or write the current maximum height of the content or window. A value of null indicates 'unspecified'.
     */
    maxHeight?: chrome$integer | null;

    /**
     * Set the left and top position of the content or window.
     */
    setPosition(left: chrome$integer, top: chrome$integer): void;

    /**
     * Set the width and height of the content or window.
     */
    setSize(width: chrome$integer, height: chrome$integer): void;

    /**
     * Set the minimum size constraints of the content or window.
     * The minimum width or height can be set to null to remove the constraint.
     * A value of undefined will leave a constraint unchanged.
     */
    setMinimumSize(
      minWidth: chrome$integer | null | void,
      minHeight: chrome$integer | null | void
    ): void;

    /**
     * Set the maximum size constraints of the content or window.
     * The maximum width or height can be set to null to remove the constraint.
     * A value of undefined will leave a constraint unchanged.
     */
    setMaximumSize(
      maxWidth: chrome$integer | null | void,
      maxHeight: chrome$integer | null | void
    ): void;

    /**
     * The x-coordinate of the upper-left corner.
     */
    left: chrome$integer;

    /**
     * The y-coordinate of the upper-left corner.
     */
    top: chrome$integer;

    /**
     * The width of the display in pixels.
     */
    width: chrome$integer;

    /**
     * The height of the display in pixels.
     */
    height: chrome$integer;
  }

  declare interface display$Insets {
    /**
     * The x-axis distance from the left bound.
     */
    left: chrome$integer;

    /**
     * The y-axis distance from the top bound.
     */
    top: chrome$integer;

    /**
     * The x-axis distance from the right bound.
     */
    right: chrome$integer;

    /**
     * The y-axis distance from the bottom bound.
     */
    bottom: chrome$integer;
  }

  /**
   * @since Chrome 57
   */
  declare interface display$Point {
    /**
     * The x-coordinate of the point.
     */
    x: chrome$integer;

    /**
     * The y-coordinate of the point.
     */
    y: chrome$integer;
  }

  /**
   * @since Chrome 57
   */
  declare interface display$TouchCalibrationPair {
    /**
     * The coordinates of the display point.
     */
    displayPoint: display$Point;

    /**
     * The coordinates of the touch point corresponding to the display point.
     */
    touchPoint: display$Point;
  }

  /**
   * @since Chrome 52
   */
  declare interface display$DisplayMode {
    /**
     * The display mode width in device independent (user visible) pixels.
     */
    width: chrome$integer;

    /**
     * The display mode height in device independent (user visible) pixels.
     */
    height: chrome$integer;

    /**
     * The display mode width in native pixels.
     */
    widthInNativePixels: chrome$integer;

    /**
     * The display mode height in native pixels.
     */
    heightInNativePixels: chrome$integer;

    /**
     * @deprecated Deprecated since Chrome 70. Use `displayZoomFactor`
     * @description The display mode UI scale factor.
     */
    uiScale: chrome$integer;

    /**
     * The display mode device scale factor.
     */
    deviceScaleFactor: chrome$integer;

    /**
     * The display mode refresh rate in hertz.
     * @since Chrome 67
     */
    refreshRate: chrome$double;

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
  declare interface display$DisplayLayout {
    /**
     * The unique identifier of the display.
     */
    runtime$id: string;

    /**
     * The unique identifier of the parent display. Empty if this is the root.
     */
    parentId: string;

    /**
     * The layout position of this display relative to the parent.
     * This will be ignored for the root.
     * @see enum DisplayPosition
     */
    position: chrome$ToStringLiteral<typeof DisplayPosition>;

    /**
     * The offset of the display along the connected edge. 0 indicates that the topmost or leftmost corners are aligned.
     */
    offset: chrome$integer;
  }

  /**
   * The pairs of point used to calibrate the display.
   */
  declare interface display$TouchCalibrationPairs {
    /**
     * First pair of touch and display point required for touch calibration.
     */
    pair1: display$TouchCalibrationPair;

    /**
     * Second pair of touch and display point required for touch calibration.
     */
    pair2: display$TouchCalibrationPair;

    /**
     * Third pair of touch and display point required for touch calibration.
     */
    pair3: display$TouchCalibrationPair;

    /**
     * Fourth pair of touch and display point required for touch calibration.
     */
    pair4: display$TouchCalibrationPair;
  }

  /**
   * Representation of info data to be used in chrome.system.display.setDisplayProperties()
   */
  declare interface display$DisplayPropertiesInfo {
    /**
 * @requires (CrOS) Chrome OS only.
 * @description If set to true, changes the display mode to unified desktop.
If set to false, unified desktop mode will be disabled.
This is only valid for the primary display.
If provided, mirroringSourceId must not be provided and other properties may not apply.
This is has no effect if not provided.
 * @see (See `enableUnifiedDesktop` for details).
 * @since Chrome 59
 */
    isUnified?: boolean;

    /**
 * @requires (CrOS) Chrome OS only.
 * @deprecated Deprecated since Chrome 68. Use ´setMirrorMode´
 * @see setMirrorMode
 * @description If set and not empty, enables mirroring for this display.
Otherwise disables mirroring for this display.
This value should indicate the id of the source display to mirror,
which must not be the same as the id passed to setDisplayProperties.
If set, no other property may be set.
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
    overscan?: display$Insets;

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
    boundsOriginX?: chrome$integer;

    /**
     * If set, updates the display's logical bounds origin along y-axis.
     * @see [See documentation for boundsOriginX parameter.]
     */
    boundsOriginY: chrome$integer;

    /**
     * If set, updates the display mode to the mode matching this value.
     * @since Chrome 52
     */
    displayMode?: display$DisplayMode;

    /**
 * @since Chrome 65.
 * @description If set, updates the zoom associated with the display.
This zoom performs re-layout and repaint thus resulting
in a better quality zoom than just performing
a pixel by pixel stretch enlargement.
 */
    displayZoomFactor?: chrome$double;
  }

  /**
   * Options affecting how the information is returned.
   * @since Chrome 59
   */
  declare interface display$DisplayInfoFlags {
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
  declare interface display$DisplayInfo {
    /**
     * The unique identifier of the display.
     */
    runtime$id: string;

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
Identifier of the display that is being mirrored on the display unit.
If mirroring is not in progress, set to an empty string
Currently exposed only on ChromeOS.
Will be empty string on other platforms.
 */
    mirroringSourceId: string;

    /**
 * @requires (CrOS) Only available on Chrome OS.
Identifiers of the displays to which the source display is being mirrored.
Empty if no displays are being mirrored. This will be set to the same value
for all displays.
❗ This must not include *mirroringSourceId*. ❗
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
    dpiX: chrome$integer;

    /**
     * The number of pixels per inch along the y-axis.
     */
    dpiY: chrome$integer;

    /**
     * The display's clockwise rotation in degrees relative to the vertical position. Currently exposed only on ChromeOS. Will be set to 0 on other platforms.
     */
    rotation: chrome$integer;

    /**
     * The display's logical bounds.
     */
    bounds: display$Bounds;

    /**
     * The display's insets within its screen's bounds. Currently exposed only on ChromeOS. Will be set to empty insets on other platforms.
     */
    overscan: display$Insets;

    /**
     * The usable work area of the display within the display bounds. The work area excludes areas of the display reserved for OS, for example taskbar and launcher.
     */
    workArea: display$Bounds;

    /**
 * @requires (CrOS) Only available on Chrome OS.
The list of available display modes.
The current mode will have isSelected=true.
Only available on Chrome OS.
Will be set to an empty array on other platforms.
 */
    modes: display$DisplayMode[];

    /**
     * True if this display has a touch input device associated with it.
     */
    hasTouchSupport: boolean;

    /**
     * A list of zoom factor values that can be set for the display.
     */
    availableDisplayZoomFactors: chrome$double[];

    /**
     * The ratio between the display's current and default zoom.
     * For example, value 1 is equivalent to 100% zoom, and value 1.5 is equivalent to 150% zoom.
     */
    displayZoomFactor: chrome$double;
  }

  declare interface display$MirrorModeInfo {
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

  declare type display$MirrorModeInfoMixed = {
    mode: "mixed",
    mirroringSourceId?: string,

    /**
     * The ids of the mirroring destination displays.
     */
    mirroringDestinationIds?: string[]
  } & display$MirrorModeInfo;

  /**
   * Requests the information for all attached display devices.
   * @param callback The callback to invoke with the results.
   */
  declare function display$getInfo(
    callback: (info: display$DisplayInfo[]) => void
  ): void;

  /**
   * Requests the information for all attached display devices.
   * @since Chrome 59
   * @param flags Options affecting how the information is returned.
   * @param callback The callback to invoke with the results.
   */
  declare function display$getInfo(
    flags: display$DisplayInfoFlags,
    callback: (info: display$DisplayInfo[]) => void
  ): void;

  /**
   * @requires (CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
   * @description Requests the layout info for all displays.
   * @since Chrome 53
   * @export
   * @param callback The callback to invoke with the results.
   */
  declare function display$getDisplayLayout(
    callback: (layouts: display$DisplayLayout[]) => void
  ): void;

  /**
 * @requires (CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
 * @description Updates the properties for the display specified by **id**,
according to the information provided in **info**.
On failure, runtime.lastError will be set.
 * @param {string} id The display's unique identifier.
 * @param {display$DisplayPropertiesInfo} info The information about display properties that should be changed. A property will be changed only if a new value for it is specified in |info|.
 * @param {() => void} callback Empty function called when the function finishes. To find out whether the function succeeded, runtime.lastError should be queried.
 */
  declare function display$setDisplayProperties(
    runtime$id: string,
    info: display$DisplayPropertiesInfo,
    callback?: () => void
  ): void;

  /**
 * @requires (CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
 * @description Set the layout for all displays.
Any display not included will use the default layout.
If a layout would overlap or be otherwise invalid it will be adjusted to a valid layout.
After layout is resolved, an onDisplayChanged event will be triggered.
 * @since Chrome 53
 * @param layouts The layout information, required for all displays except the primary display.
 * @param callback Empty function called when the function finishes. To find out whether the function succeeded, runtime.lastError should be queried.
 */
  declare function display$setDisplayLayout(
    layouts: display$DisplayLayout[],
    callback?: () => void
  ): void;

  /**
 * @requires (CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
 * @description Enables/disables the unified desktop feature.
Note that this simply enables the feature, but will not change the actual desktop mode.
(That is, if the desktop is in mirror mode, it will stay in mirror mode)
 * @since Chrome 46
 * @param {boolean} enabled True if unified desktop should be enabled.
 */
  declare function display$enableUnifiedDesktop(enabled: boolean): void;

  /**
   * Starts overscan calibration for a display.
   * This will show an overlay on the screen indicating the current overscan insets.
   * If overscan calibration for display **id** is in progress this will reset calibration.
   * @since Chrome 53
   * @param id The display's unique identifier.
   */
  declare function display$overscanCalibrationStart(runtime$id: string): void;

  /**
   * Adjusts the current overscan insets for a display.
   * Typically this should etiher move the display along an axis (e.g. left+right have the same value)
   * or scale it along an axis (e.g. top+bottom have opposite values).
   * Each Adjust call is cumulative with previous calls since Start.
   * @since Chrome 53
   * @param id The display's unique identifier.
   * @param delta The amount to change the overscan insets.
   */
  declare function display$overscanCalibrationAdjust(
    runtime$id: string,
    delta: display$Insets
  ): void;

  /**
   * Resets the overscan insets for a display to the last saved value (i.e before Start was called).
   * @since Chrome 53
   * @param id The display's unique identifier.
   */
  declare function display$overscanCalibrationReset(runtime$id: string): void;

  /**
   * Complete overscan adjustments for a display by saving the current values and hiding the overlay.
   * @since Chrome 53
   * @param id The display's unique identifier.
   */
  declare function display$overscanCalibrationComplete(
    runtime$id: string
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
  declare function display$showNativeTouchCalibration(
    runtime$id: string,
    callback: (success: boolean) => void
  ): void;

  /**
   * Starts custom touch calibration for a display.
   * This should be called when using a custom UX for collecting calibration data.
   * If another touch calibration is already in progress this will throw an error.
   * @since Chrome 57
   * @param id The display's unique identifier.
   */
  declare function display$startCustomTouchCalibration(
    runtime$id: string
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
  declare function display$completeCustomTouchCalibration(
    pairs: display$TouchCalibrationPairs,
    bounds: display$Bounds
  ): void;

  /**
   * Resets the touch calibration for the display and brings it back to its default state by clearing any touch calibration data associated with the display.
   * @since Chrome 57
   * @param id The display's unique identifier.
   */
  declare function display$clearTouchCalibration(runtime$id: string): void;

  /**
 * @requires (CrOS Kiosk app) Chrome OS Kiosk apps only
 * @since Chrome 65.
 * @description Sets the display mode to the specified mirror mode.
Each call resets the state from previous calls.
Calling setDisplayProperties() will fail for the
mirroring destination displays.
 */
  declare function display$setMirrorMode(
    info: display$MirrorModeInfo | display$MirrorModeInfoMixed,
    callback: () => void
  ): void;

  /**
   * Fired when anything changes to the display configuration.
   */
  declare var display$onDisplayChanged: chrome$events.events$Event<() => void>;

  declare var npm$namespace$memory: {
    getInfo: typeof memory$getInfo
  };
  declare interface memory$MemoryInfo {
    /**
     * The total amount of physical memory capacity, in bytes.
     */
    capacity: chrome$double;

    /**
     * The amount of available capacity, in bytes.
     */
    availableCapacity: chrome$double;
  }

  /**
   * Get physical memory information.
   */
  declare function memory$getInfo(
    callback: (info: memory$MemoryInfo) => void
  ): void;

  declare var npm$namespace$network: {
    getNetworkInterfaces: typeof network$getNetworkInterfaces
  };
  declare interface network$NetworkInterface {
    /**
     * The underlying name of the adapter. On *nix, this will typically be "eth0", "wlan0", etc.
     */
    name: string;

    /**
     * The available IPv4/6 address.
     */
    address: string;

    /**
     * The prefix length
     */
    prefixLength: chrome$integer;
  }

  /**
   * Retrieves information about local adapters on this system.
   */
  declare function network$getNetworkInterfaces(
    callback: (networkInterfaces: network$NetworkInterface[]) => void
  ): void;

  declare var npm$namespace$powerSource: {
    getPowerSourceInfo: typeof powerSource$getPowerSourceInfo,
    requestStatusUpdate: typeof powerSource$requestStatusUpdate,
    onPowerChanged: typeof powerSource$onPowerChanged
  };
  declare class powerSource$PowerSourceType {
    constructor(...args: empty): mixed;
    static +unknown: Class<powerSource$PowerSourceType__unknown> &
      powerSource$PowerSourceType__unknown &
      "unknown"; // "unknown"
    static +mains: Class<powerSource$PowerSourceType__mains> &
      powerSource$PowerSourceType__mains &
      "mains"; // "mains"
    static +usb: Class<powerSource$PowerSourceType__usb> &
      powerSource$PowerSourceType__usb &
      "usb"; // "usb"
  }

  declare class powerSource$PowerSourceType__unknown
    mixins powerSource$PowerSourceType {}
  declare class powerSource$PowerSourceType__mains
    mixins powerSource$PowerSourceType {}
  declare class powerSource$PowerSourceType__usb
    mixins powerSource$PowerSourceType {}

  declare interface powerSource$PowerSourceInfo {
    /**
     * Type of power source
     * @see PowerSourceType
     */
    type: $Keys<typeof PowerSourceType> | powerSource$PowerSourceType;

    /**
     * Maximum power this source is capable of delivering if known.
     * Reported in watts, rounded to two significant digits.
     */
    maxPower?: chrome$double;

    /**
     * Whether this power source is connected to the device.
     */
    active: boolean;
  }

  /**
   * Requests information on attached power sources.
   * @param callback The callback to invoke with the results or undefined if the power source information is not known.
   */
  declare function powerSource$getPowerSourceInfo(
    callback: (powerSourceInfo?: powerSource$PowerSourceInfo[]) => void
  ): void;

  /**
   * Requests a power source status update.
   * Resulting power source status updates are observable using *onPowerChanged*.
   */
  declare function powerSource$requestStatusUpdate(): void;

  /**
   * Event for changes in the set of connected power sources.
   */
  declare var powerSource$onPowerChanged: chrome$events.events$Event<
    (powerSourceInfo: powerSource$PowerSourceInfo[]) => void
  >;

  declare var npm$namespace$storage: {
    getInfo: typeof storage$getInfo,
    ejectDevice: typeof storage$ejectDevice,
    getAvailableCapacity: typeof storage$getAvailableCapacity,
    StorageUnitType: typeof storage$StorageUnitType,
    EjectDeviceResultCode: typeof storage$EjectDeviceResultCode,
    onAttached: typeof storage$onAttached,
    onDetached: typeof storage$onDetached
  };
  declare var storage$StorageUnitType: {
    FIXED: "fixed",
    REMOVABLE: "removable",
    UNKNOWN: "unknown"
  };

  declare var storage$EjectDeviceResultCode: {
    SUCCESS: "success",
    IN_USE: "in_use",
    NO_SUCH_DEVICE: "no_such_device",
    FAILURE: "failure"
  };

  declare interface storage$StorageUnitInfo {
    /**
     * The transient ID that uniquely identifies the storage device.
     * This ID will be persistent within the same run of a single application.
     * It will not be a persistent identifier between different runs of an application, or between different applications.
     */
    runtime$id: string;

    /**
     * The name of the storage unit.
     */
    name: string;

    /**
     * The media type of the storage unit.
     * fixed: The storage has fixed media, e.g. hard disk or SSD.
     * removable: The storage is removable, e.g. USB flash drive.
     * unknown: The storage type is unknown.
     * @see enum StorageUnitType
     */
    type: chrome$ToStringLiteral<typeof StorageUnitType>;

    /**
     * The total amount of the storage space, in bytes.
     */
    capacity: chrome$integer;
  }

  declare interface storage$StorageCapacityInfo {
    /**
     * A copied **id** of getAvailableCapacity function parameter **id**.
     */
    runtime$id: string;

    /**
     * The available capacity of the storage device, in bytes.
     */
    availableCapacity: chrome$integer;
  }

  /**
   * Get the storage information from the system. The argument passed to the callback is an array of StorageUnitInfo objects.
   */
  declare function storage$getInfo(
    callback: (info: storage$StorageUnitInfo[]) => void
  ): void;

  /**
 * Ejects a removable storage device.
 * @param callback Parameter **result**:

**success:** The ejection command is successful -- the application can prompt the user to remove the device;

**in_use:** The device is in use by another application. The ejection did not succeed;
the user should not remove the device until the other application is done with the device;

**no_such_device:** There is no such device known.

**failure:** The ejection command failed.
 */
  declare function storage$ejectDevice(
    runtime$id: string,
    callback: (
      result: chrome$ToStringLiteral<typeof EjectDeviceResultCode>
    ) => void
  ): void;

  /**
   * Get the available capacity of a specified |id| storage device. The |id| is the transient device ID from StorageUnitInfo.
   * @since Dev channel only.
   */
  declare function storage$getAvailableCapacity(
    runtime$id: string,
    callback: (info: storage$StorageCapacityInfo) => void
  ): void;

  /**
   * Fired when a new removable storage is attached to the system.
   */
  declare var storage$onAttached: chrome$events.events$Event<
    (info: storage$StorageUnitInfo) => void
  >;

  /**
   * Fired when a removable storage is detached from the system.
   */
  declare var storage$onDetached: chrome$events.events$Event<
    (runtime$id: string) => void
  >;

  declare var npm$namespace$tts: {
    isSpeaking: typeof tts$isSpeaking,
    stop: typeof tts$stop,
    getVoices: typeof tts$getVoices,
    speak: typeof tts$speak,
    pause: typeof tts$pause,
    resume: typeof tts$resume
  };

  /**
   * An event from the TTS engine to communicate the status of an utterance.
   */
  declare interface tts$TtsEvent {
    /**
     * The index of the current character in the utterance.
     */
    charIndex?: chrome$integer;

    /**
     * The error description, if the event type is 'error'.
     */
    errorMessage?: string;

    /**
     * The type can be 'start' as soon as speech has started, 'word' when a word boundary is reached, 'sentence' when a sentence boundary is reached, 'marker' when an SSML mark element is reached, 'end' when the end of the utterance is reached, 'interrupted' when the utterance is stopped or interrupted before reaching the end, 'cancelled' when it's removed from the queue before ever being synthesized, or 'error' when any other error occurs. When pausing speech, a 'pause' event is fired if a particular utterance is paused in the middle, and 'resume' if an utterance resumes speech. Note that pause and resume events may not fire if speech is paused in-between utterances.
     * One of: 'start', 'end', 'word', 'sentence', 'marker', 'interrupted', 'cancelled', 'error', 'pause', or 'resume'
     */
    type: string;
  }

  /**
   * A description of a voice available for speech synthesis.
   */
  declare interface tts$TtsVoice {
    /**
     * The language that this voice supports, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'.
     */
    lang?: string;

    /**
     * @deprecated Deprecated since Chrome 70. Gender is deprecated and will be ignored.
     * @description This voice's gender.
     */
    gender?: "male" | "female";

    /**
     * The name of the voice.
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

  declare interface tts$SpeakOptions {
    /**
     * Speaking volume between 0 and 1 inclusive, with 0 being lowest and 1 being highest, with a default of 1.0.
     */
    volume?: chrome$integer;

    /**
     * Optional.
     * If true, enqueues this utterance if TTS is already in progress. If false (the default), interrupts any current speech and flushes the speech queue before speaking this new utterance.
     */
    enqueue?: boolean;

    /**
     * Optional.
     * Speaking rate relative to the default rate for this voice. 1.0 is the default rate, normally around 180 to 220 words per minute. 2.0 is twice as fast, and 0.5 is half as fast. Values below 0.1 or above 10.0 are strictly disallowed, but many voices will constrain the minimum and maximum rates further—for example a particular voice may not actually speak faster than 3 times normal even if you specify a value larger than 3.0.
     */
    rate?: chrome$integer;

    /**
     * This function is called with events that occur in the process of speaking the utterance.
     * @param event The update event from the text-to-speech engine indicating the status of this utterance.
     */
    onEvent?: (event: tts$TtsEvent) => void;

    /**
     * Optional.
     * Speaking pitch between 0 and 2 inclusive, with 0 being lowest and 2 being highest. 1.0 corresponds to a voice's default pitch.
     */
    pitch?: chrome$integer;

    /**
     * The language to be used for synthesis, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'.
     */
    lang?: string;

    /**
     * The name of the voice to use for synthesis. If empty, uses any available voice.
     */
    voiceName?: string;

    /**
     * The extension ID of the speech engine to use, if known.
     */
    extensionId?: string;

    /**
     * @deprecated Deprecated since Chrome 70. Gender is deprecated and will be ignored.
     * @description Gender of voice for synthesized speech.
     */
    gender?: "male" | "female";

    /**
     * The TTS event types the voice must support.
     */
    requiredEventTypes?: string[];

    /**
     * The TTS event types that you are interested in listening to. If missing, all event types may be sent.
     */
    desiredEventTypes?: string[];
  }

  /**
   * Checks whether the engine is currently speaking. On Mac OS X, the result is true whenever the system speech engine is speaking, even if the speech wasn't initiated by Chrome.
   */
  declare function tts$isSpeaking(callback?: (speaking: boolean) => void): void;

  /**
   * Stops any current speech and flushes the queue of any pending utterances. In addition, if speech was paused, it will now be un-paused for the next call to speak.
   */
  declare function tts$stop(): void;

  /**
   * Gets an array of all available voices.
   */
  declare function tts$getVoices(
    callback?: (voices: tts$TtsVoice[]) => void
  ): void;

  /**
   * Speaks text using a text-to-speech engine.
   * @param utterance The text to speak, either plain text or a complete, well-formed SSML document. Speech engines that do not support SSML will strip away the tags and speak the text. The maximum length of the text is 32,768 characters.
   * @param callback Called right away, before speech finishes. Check chrome.runtime.lastError to make sure there were no errors. Use options.onEvent to get more detailed feedback.
   */
  declare function tts$speak(utterance: string, callback?: Function): void;

  /**
   * Speaks text using a text-to-speech engine.
   * @param utterance The text to speak, either plain text or a complete, well-formed SSML document. Speech engines that do not support SSML will strip away the tags and speak the text. The maximum length of the text is 32,768 characters.
   * @param options The speech options.
   * @param callback Called right away, before speech finishes. Check chrome.runtime.lastError to make sure there were no errors. Use options.onEvent to get more detailed feedback.
   */
  declare function tts$speak(
    utterance: string,
    options: tts$SpeakOptions,
    callback?: Function
  ): void;

  /**
   * Pauses speech synthesis, potentially in the middle of an utterance. A call to resume or stop will un-pause speech.
   * @since Chrome 29.
   */
  declare function tts$pause(): void;

  /**
   * If speech was paused, resumes speaking where it left off.
   * @since Chrome 29.
   */
  declare function tts$resume(): void;

  /**
   * The scope of the ChromeSetting. One of
   * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
   * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
   * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
   * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted
   *      when the incognito session ends (overrides regular and incognito_persistent preferences).
   */
  declare type types$ChromeSettingScope =
    | "regular"
    | "regular_only"
    | "incognito_persistent"
    | "incognito_session_only";

  declare type types$LevelOfControl =
    | "not_controllable"
    | "controlled_by_other_extensions"
    | "controllable_by_this_extension"
    | "controlled_by_this_extension";

  declare interface types$ChromeSettingClearDetails {
    /**
     * The scope of the ChromeSetting. One of
     * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
     * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
     * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
     * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted
     *      when the incognito session ends (overrides regular and incognito_persistent preferences).
     */
    scope?: types$ChromeSettingScope;
  }

  declare type types$ChromeSettingSetDetails = {
    /**
     * The value of the setting.
     * Note that every setting has a specific value type,
     * which is described together with the setting.
     * An app should not set a value of a different type.
     */
    value: any,

    /**
     * The scope of the ChromeSetting. One of
     * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
     * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
     * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
     * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted
     *      when the incognito session ends (overrides regular and incognito_persistent preferences).
     */
    scope?: types$ChromeSettingScope
  } & types$ChromeSettingClearDetails;

  declare interface types$ChromeSettingGetDetails {
    /**
     * Whether to return the value that applies to the incognito session (default false).
     */
    incognito?: boolean;
  }

  /**
   * @param details Details of the currently effective value.
   */
  declare type types$DetailsCallback = (
    details: types$ChromeSettingGetResultDetails
  ) => void;

  declare interface types$ChromeSettingGetResultDetails {
    /**
     * The value of the setting.
     */
    value: any;

    /**
     * One of
     * • not_controllable: cannot be controlled by any extension
     * • controlled_by_other_extensions: controlled by extensions with higher precedence
     * • controllable_by_this_extension: can be controlled by this app
     * • controlled_by_this_extension: controlled by this app
     */
    levelOfControl: string;

    /**
     * Whether the effective value is specific to the incognito session.
     * This property will only be present if the incognito property in the details parameter of get() was true.
     */
    incognitoSpecific?: boolean;
  }

  declare type types$ChromeSettingChangedEvent = {} & undefined.events$Event<types$DetailsCallback>;

  /**
   * An interface that allows access to a Chrome browser setting. See accessibilityFeatures for an example.
   */
  declare interface types$ChromeSetting {
    /**
     * Sets the value of a setting.
     * @param details Which setting to change.
     * @param callback Called at the completion of the set operation.
     */
    set(details: types$ChromeSettingSetDetails, callback?: () => void): void;

    /**
     * Gets the value of a setting.
     * @param details Which setting to consider.
     */
    signedInDevices$get(
      details: types$ChromeSettingGetDetails,
      callback?: types$DetailsCallback
    ): void;

    /**
     * Clears the setting, restoring any default value.
     * @param details Which setting to clear.
     * @param callback Called at the completion of the clear operation.
     */
    notifications$clear(
      details: types$ChromeSettingClearDetails,
      callback?: () => void
    ): void;

    /**
     * Fired after the setting changes.
     */
    onChange: types$ChromeSettingChangedEvent;
  }

  declare var npm$namespace$usb: {
    getDevices: typeof usb$getDevices,
    getUserSelectedDevices: typeof usb$getUserSelectedDevices,
    getConfigurations: typeof usb$getConfigurations,
    requestAccess: typeof usb$requestAccess,
    openDevice: typeof usb$openDevice,
    findDevices: typeof usb$findDevices,
    closeDevice: typeof usb$closeDevice,
    setConfiguration: typeof usb$setConfiguration,
    getConfiguration: typeof usb$getConfiguration,
    listInterfaces: typeof usb$listInterfaces,
    claimInterface: typeof usb$claimInterface,
    releaseInterface: typeof usb$releaseInterface,
    setInterfaceAlternateSetting: typeof usb$setInterfaceAlternateSetting,
    controlTransfer: typeof usb$controlTransfer,
    bulkTransfer: typeof usb$bulkTransfer,
    interruptTransfer: typeof usb$interruptTransfer,
    isochronousTransfer: typeof usb$isochronousTransfer,
    resetDevice: typeof usb$resetDevice,
    Direction: typeof usb$Direction,
    Recipient: typeof usb$Recipient,
    RequestType: typeof usb$RequestType,
    TransferType: typeof usb$TransferType,
    SynchronizationType: typeof usb$SynchronizationType,
    UsageType: typeof usb$UsageType,
    onDeviceAdded: typeof usb$onDeviceAdded,
    onDeviceRemoved: typeof usb$onDeviceRemoved
  };

  /**
   * Direction, Recipient, RequestType, and TransferType all map to their namesakes within the USB specification.
   */
  declare var usb$Direction: {
    IN: "in",
    OUT: "out"
  };

  /**
   * Direction, Recipient, RequestType, and TransferType all map to their namesakes within the USB specification.
   */
  declare var usb$Recipient: {
    DEVICE: "device",
    INTERFACE: "interface",
    ENDPOINT: "endpoint",
    OTHER: "other"
  };

  /**
   * Direction, Recipient, RequestType, and TransferType all map to their namesakes within the USB specification.
   */
  declare var usb$RequestType: {
    STANDARD: "standard",
    CLASS: "class",
    VENDOR: "vendor",
    RESERVED: "reserved"
  };

  /**
   * Direction, Recipient, RequestType, and TransferType all map to their namesakes within the USB specification.
   */
  declare var usb$TransferType: {
    CONTROL: "control",
    INTERRUPT: "interrupt",
    ISOCHRONOUS: "isochronous",
    BULK: "bulk"
  };

  declare var usb$SynchronizationType: {
    ASYNCHRONOUS: "asynchronous",
    ADAPTIVE: "adaptive",
    SYNCHRONOUS: "synchronous"
  };

  declare var usb$UsageType: {
    DATA: "data",
    FEEDBACK: "feedback",
    EXPLICIT_FEEDBACK: "explicitFeedback",
    PERIODIC: "periodic",
    NOTIFICATION: "notification"
  };

  declare interface usb$Device {
    /**
     * The address of the device, in the format 'XX:XX:XX:XX:XX:XX'.
     */
    address: string;

    /**
     * The human-readable name of the device.
     */
    name?: string;

    /**
     * The class of the device, a bit-field defined by http://www.bluetooth.org/en-us/specification/assigned-numbers/baseband.
     */
    deviceClass?: chrome$integer;

    /**
     * The Device ID record of the device, where available.
     */
    vendorIdSource?: bluetooth$DeviceVendorIdSource;
    vendorId?: chrome$integer;
    productId?: chrome$integer;
    deviceId?: chrome$integer;

    /**
     * The type of the device, if recognized by Chrome.
     * This is obtained from the |deviceClass| field and only represents a small fraction of the possible device types.
     * When in doubt you should use the |deviceClass| field directly.
     */
    type?: signedInDevices$DeviceType;

    /**
     * Indicates whether or not the device is paired with the system.
     */
    paired?: boolean;

    /**
     * Indicates whether the device is currently connected to the system.
     */
    connected?: boolean;

    /**
     * Indicates whether the device is currently connecting to the system.
     * @since Chrome 48
     */
    connecting?: boolean;

    /**
     * Indicates whether the device is connectable.
     * @since Chrome 48
     */
    connectable?: boolean;

    /**
     * UUIDs of protocols, profiles and services advertised by the device.
     * For classic Bluetooth devices, this list is obtained from EIR data and SDP tables.
     * For Low Energy devices, this list is obtained from AD and GATT primary services.
     * For dual mode devices this may be obtained from both.
     */
    uuids?: string[];

    /**
     * The received signal strength, in dBm. This field is avaliable and valid only during discovery. Outside of discovery it's value is not specified.
     * @since Chrome 44
     */
    inquiryRssi: chrome$integer;

    /**
     * The transmitted power level. This field is avaliable only for LE devices that include this field in AD. It is avaliable and valid only during discovery.
     * @since Chrome 44
     */
    inquiryTxPower: chrome$integer;

    /**
     * An opaque ID for the USB device. It remains unchanged until the device is unplugged.
     * @since Chrome 31.
     */
    device: chrome$integer;

    /**
     * The vendor ID.
     */
    vendorId: chrome$integer;

    /**
     * The product ID.
     */
    productId: chrome$integer;

    /**
     * The device version (bcdDevice field).
     * @since Chrome 46.
     */
    version: chrome$integer;

    /**
     * The iProduct string read from the device, if available.
     * @since Chrome 46.
     */
    productName: string;

    /**
     * The iManufacturer string read from the device, if available.
     * @since Chrome 46.
     */
    manufacturerName: string;

    /**
     * The iSerialNumber string read from the device, if available.
     * @since Chrome 46.
     */
    serialNumber: string;
  }

  /**
   * Since Chrome 31.
   */
  declare interface usb$ConnectionHandle {
    /**
     * An opaque handle representing this connection to the USB device
     * and all associated claimed interfaces and pending transfers.
     * A new handle is created each time the device is opened.
     * The connection handle is different from Device.device.
     */
    handle: chrome$integer;

    /**
     * The device vendor ID.
     */
    vendorId: chrome$integer;

    /**
     * The product ID.
     */
    productId: chrome$integer;
  }

  /**
   * Since Chrome 29.
   */
  declare interface usb$EndpointDescriptor {
    /**
     * Transfer type.
     */
    address: chrome$integer;

    /**
     * Transfer type.
     * @see TransferType
     */
    type: chrome$ToStringLiteral<typeof TransferType>;

    /**
     * Transfer direction.
     * @see Direction
     */
    direction: chrome$ToStringLiteral<typeof Direction>;

    /**
     * Maximum packet size.
     */
    maximumPacketSize: chrome$integer;

    /**
     * Transfer synchronization mode (isochronous only).
     * @see SynchronizationType
     */
    synchronization?: chrome$ToStringLiteral<typeof SynchronizationType>;

    /**
     * Endpoint usage hint
     * @see UsageType
     */
    usage?: chrome$ToStringLiteral<typeof UsageType>;

    /**
     * Polling interval (interrupt and isochronous only).
     */
    pollingInterval?: chrome$integer;

    /**
     * Extra descriptor data associated with this endpoint.
     * @since Chrome 39.
     */
    extra_data: ArrayBuffer;
  }

  /**
   * @since Chrome 29.
   */
  declare interface usb$InterfaceDescriptor {
    /**
     * The interface number
     */
    interfaceNumber: chrome$integer;

    /**
     * The interface alternate setting number.
     * @default 0
     */
    alternateSetting: chrome$integer;

    /**
     * The USB interface class.
     */
    interfaceClass: chrome$integer;

    /**
     * The USB interface sub-class.
     */
    interfaceSubclass: chrome$integer;

    /**
     * The USB interface protocol.
     */
    interfaceProtocol: chrome$integer;

    /**
     * Description of the interface
     */
    description?: string;

    /**
     * Available endpoints.
     */
    endpoints: usb$EndpointDescriptor[];

    /**
     * Extra descriptor data associated with this interface.
     * @since Chrome 39.
     */
    extra_data: ArrayBuffer;
  }

  /**
   * @since Chrome 39.
   */
  declare interface usb$ConfigDescriptor {
    /**
     * Is this the active configuration?
     * @since Chrome 47.
     */
    active: boolean;

    /**
     * The configuration number.
     */
    configurationValue: chrome$integer;

    /**
     * Description of the configuration.
     */
    description?: string;

    /**
     * The device is self-powered.
     */
    selfPowered: boolean;

    /**
     * The device supports remote wakeup.
     */
    remoteWakeup: boolean;

    /**
     * The maximum power needed by this device in milliamps (mA).
     */
    maxPower: chrome$integer;

    /**
     * Available interfaces.
     */
    interfaces: usb$InterfaceDescriptor[];

    /**
     * Extra descriptor data associated with this configuration.
     */
    extra_data: ArrayBuffer;
  }

  declare interface usb$GenericTransferInfo {
    /**
     * The transfer direction ('in' or 'out').
     * @see Direction
     */
    direction: chrome$ToStringLiteral<typeof Direction>;

    /**
     * The target endpoint address. The interface containing this endpoint must be claimed.
     */
    endpoint: chrome$integer;

    /**
     * The maximum number of bytes to receive (required only by input transfers).
     */
    length?: chrome$integer;

    /**
     * The data to transmit (required only by output transfers).
     */
    data?: ArrayBuffer;

    /**
     * Request timeout (in milliseconds).
     * The default value 0 indicates no timeout.
     * @default 0
     */
    timeout?: chrome$integer;
  }

  declare interface usb$TransferResultInfo {
    /**
     * A value of 0 indicates that the transfer was a success. Other values indicate failure.
     */
    resultCode?: chrome$integer;

    /**
     * The data returned by an input transfer. undefined for output transfers.
     */
    data?: ArrayBuffer;
  }

  declare interface usb$DeviceFilterStrict {
    /**
     * Device vendor ID.
     */
    vendorId: chrome$integer;

    /**
     * Device product ID, checked only if the vendor ID matches.
     */
    productId?: chrome$integer;

    /**
     * USB interface class, matches any interface on the device.
     */
    interfaceClass?: chrome$integer;

    /**
     * USB interface sub-class, checked only if the interface class matches.
     */
    interfaceSubclass?: chrome$integer;

    /**
     * USB interface protocol, checked only if the interface sub-class matches.
     */
    interfaceProtocol?: chrome$integer;
  }

  /**
   * Some criteria to filter the list of returned bluetooth devices. If the filter is not set or set to {}, returned device list will contain all bluetooth devices. Right now this is only supported in ChromeOS, for other platforms, a full list is returned.
   */
  declare interface usb$DeviceFilter {
    /**
     * Type of filter to apply to the device list. Default is all.
     */
    filterType?: bluetooth$DeviceFilterType;

    /**
     * Maximum number of bluetoth devices to return. Default is 0 (no limit) if unspecified.
     */
    limit?: chrome$integer;

    /**
     * Device vendor ID.
     */
    vendorId?: chrome$integer;

    /**
     * Device product ID, only checked only if the vendor ID matches.
     */
    productId?: chrome$integer;

    /**
     * HID usage page identifier.
     */
    usagePage?: chrome$integer;

    /**
     * HID usage identifier, checked only if the HID usage page matches.
     */
    usage?: chrome$integer;
  }

  declare interface usb$TransferInfo {
    /**
     * The transfer direction ('in' or 'out').
     * @see Direction
     */
    direction: chrome$ToStringLiteral<typeof Direction>;

    /**
     * The transfer target.
     * The target given by index must be claimed if 'interface' or 'endpoint'.
     * @see Recipient
     */
    recipient: chrome$ToStringLiteral<typeof Recipient>;

    /**
     * The request type.
     * @see RequestType
     */
    requestType: chrome$ToStringLiteral<typeof RequestType>;

    /**
     * The bRequest field, see *Universal Serial Bus Specification Revision 1.1 § 9.3.*
     */
    permissions$request: chrome$integer;

    /**
     * The wValue field, see *Ibid*.
     */
    value: chrome$integer;

    /**
     * The wIndex field, see *Ibid*.
     */
    index: chrome$integer;

    /**
     * The maximum number of bytes to receive(required only by input transfers).
     */
    length?: chrome$integer;

    /**
     * The data to transmit (required only by output transfers).
     */
    data?: ArrayBuffer;

    /**
 * @since Chrome 43.
Request timeout (in milliseconds).
The default value 0 indicates no timeout.
 * @default 0
 */
    timeout?: chrome$integer;
  }

  declare interface usb$IsochronousTransferInfo {
    /**
     * Transfer parameters.
     * The transfer length or data buffer specified in this parameter block is split
     * along packetLength boundaries to form the individual packets of the transfer.
     */
    transferInfo: usb$GenericTransferInfo;

    /**
     * The total number of packets in this transfer.
     */
    packets: chrome$integer;

    /**
     * The length of each of the packets in this transfer.
     */
    packetLength: chrome$integer;
  }

  /**
   * @description Enumerates connected USB devices.
   * @since Chrome 39.
   * @param options The properties to search for on target devices.
   * @param callback
   */
  declare function usb$getDevices(
    options: {
      filters?: usb$DeviceFilter[]
    },
    callback: (devices: usb$Device[]) => void
  ): void;

  /**
 * Presents a device picker to the user and returns the Devices selected.
 * If the user cancels the picker devices will be empty.
 * A user gesture is required for the dialog to display. Without a user gesture,
 * the callback will run as though the user cancelled.
 * @since Chrome 40.
 * @param options Configuration of the device picker dialog box.
- multiple: Allow the user to select multiple devices.
- filters: Filter the list of devices presented to the user.
   If multiple filters are provided, devices matching any filter will be displayed.
 * @param callback Invoked with a list of chosen Devices.
 */
  declare function usb$getUserSelectedDevices(
    options: {
      multiple?: boolean,
      filters?: usb$DeviceFilter[]
    },
    callback: (devices: usb$Device[]) => void
  ): void;

  /**
   * Returns the full set of device configuration descriptors.
   * @since Chrome 47.
   * @param device The Device to fetch descriptors from.
   * @param callback
   */
  declare function usb$getConfigurations(
    device: usb$Device,
    callback: (configs: usb$ConfigDescriptor[]) => void
  ): void;

  /**
   * @deprecated Since Chrome 40.
   * @requires (CrOS) Chrome OS specific. This operation is now implicitly performed as a part of *openDevice*.
   */
  declare function usb$requestAccess(
    device: usb$Device,
    interfaceId: chrome$integer,
    callback: (success: boolean) => void
  ): void;

  /**
   * Opens a USB device returned by *getDevices*
   * @since Chrome 31.
   * @param device The device to open.
   * @param callback
   */
  declare function usb$openDevice(
    device: usb$Device,
    callback: (handle: usb$ConnectionHandle) => void
  ): void;

  /**
 * Finds USB devices specified by the vendor, product and (optionally) interface IDs and if permissions allow opens them for use.
 * If the access request is rejected or the device fails to be opened a connection handle will not be created or returned.
 * Calling this method is equivalent to calling *getDevices* followed by *openDevice* for each device.
 * @param options The properties to search for on target devices.
   - vendorId: The device vendor ID.
   - productId: The product ID.
 * @param callback
 */
  declare function usb$findDevices(
    options: {
      vendorId: chrome$integer,
      productId: chrome$integer
    },
    callback: (handles: usb$ConnectionHandle[]) => void
  ): void;

  /**
 * Finds USB devices specified by the vendor, product and (optionally) interface IDs and if permissions allow opens them for use.
 * If the access request is rejected or the device fails to be opened a connection handle will not be created or returned.
 * Calling this method is equivalent to calling *getDevices* followed by *openDevice* for each device.
 * @param options The properties to search for on target devices.
   - vendorId: The device vendor ID.
   - productId: The product ID.
   - The interface ID to request access to. Only available on Chrome OS. It has no effect on other platforms.
 * @requires (CrOS) Chrome OS if you specify *interfaceId*
 * @param callback
 */
  declare function usb$findDevices(
    options: {
      vendorId: chrome$integer,
      productId: chrome$integer,
      interfaceId?: chrome$integer
    },
    callback: (handles: usb$ConnectionHandle[]) => void
  ): void;

  /**
   * Closes a connection handle.
   * Invoking operations on a handle after it has been closed is a safe operation but causes no action to be taken.
   * @param handle The ConnectionHandle to close.
   * @param callback
   */
  declare function usb$closeDevice(
    handle: usb$ConnectionHandle,
    callback?: () => void
  ): void;

  /**
   * Select a device configuration.
   * This function effectively resets the device by selecting one of the
   * device's available configurations. Only configuration values greater
   * than 0 are valid however some buggy devices have a working
   * configuration 0 and so this value is allowed.
   * @since Chrome 42.
   * @param handle An open connection to the device.
   * @param configurationValue
   * @param callback
   */
  declare function usb$setConfiguration(
    handle: usb$ConnectionHandle,
    configurationValue: chrome$integer,
    callback: () => void
  ): void;

  /**
   * Gets the configuration descriptor for the currently selected configuration.
   * @since Chrome 39.
   * @param handle An open connection to the device.
   * @param callback
   */
  declare function usb$getConfiguration(
    handle: usb$ConnectionHandle,
    callback: (config: usb$ConfigDescriptor) => void
  ): void;

  /**
   * @description Lists all interfaces on a USB device.
   * @param handle An open connection to the device.
   * @param callback
   */
  declare function usb$listInterfaces(
    handle: usb$ConnectionHandle,
    callback: (descriptors: usb$InterfaceDescriptor[]) => void
  ): void;

  /**
   * Claims an interface on a USB device.
   * Before data can be transfered to an interface or associated endpoints the interface must be claimed.
   * Only one connection handle can claim an interface at any given time.
   * If the interface is already claimed, this call will fail.
   *
   * **releaseInterface** should be called when the interface is no longer needed.
   * @param handle An open connection to the device.
   * @param interfaceNumber The interface to be claimed.
   * @param callback
   */
  declare function usb$claimInterface(
    handle: usb$ConnectionHandle,
    interfaceNumber: chrome$integer,
    callback: () => void
  ): void;

  /**
   * @description Releases a claimed interface.
   * @param handle An open connection to the device.
   * @param interfaceNumber The interface to be released.
   * @param callback
   */
  declare function usb$releaseInterface(
    handle: usb$ConnectionHandle,
    interfaceNumber: chrome$integer,
    callback: () => void
  ): void;

  /**
   * @description Selects an alternate setting on a previously claimed interface.
   * @param handle An open connection to the device where this interface has been claimed.
   * @param interfaceNumber The interface to configure.
   * @param alternateSetting The alternate setting to configure.
   * @param callback
   */
  declare function usb$setInterfaceAlternateSetting(
    handle: usb$ConnectionHandle,
    interfaceNumber: chrome$integer,
    alternateSetting: chrome$integer,
    callback: () => void
  ): void;

  /**
   * Performs a control transfer on the specified device.
   * Control transfers refer to either the device, an interface or an endpoint.
   * Transfers to an interface or endpoint require the interface to be claimed.
   * @param handle An open connection to the device.
   * @param transferInfo Transfer info
   * @param callback
   */
  declare function usb$controlTransfer(
    handle: usb$ConnectionHandle,
    transferInfo: usb$TransferInfo,
    callback: (info: usb$TransferResultInfo) => void
  ): void;

  /**
   * @description Performs a bulk transfer on the specified device.
   * @param handle An open connection to the device.
   * @param transferInfo The transfer parameters.
   * @param callback
   */
  declare function usb$bulkTransfer(
    handle: usb$ConnectionHandle,
    transferInfo: usb$GenericTransferInfo,
    callback: (info: usb$TransferResultInfo) => void
  ): void;

  /**
   * @description Performs an interrupt transfer on the specified device.
   * @param handle An open connection to the device.
   * @param transferInfo The transfer parameters.
   * @param callback
   */
  declare function usb$interruptTransfer(
    handle: usb$ConnectionHandle,
    transferInfo: usb$GenericTransferInfo,
    callback: (info: usb$TransferResultInfo) => void
  ): void;

  /**
   * @description Performs an isochronous transfer on the specific device.
   * @param handle An open connection to the device.
   * @param transferInfo
   * @param callback
   */
  declare function usb$isochronousTransfer(
    handle: usb$ConnectionHandle,
    transferInfo: usb$IsochronousTransferInfo,
    callback: (info: usb$TransferResultInfo) => void
  ): void;

  /**
   * Tries to reset the USB device. If the reset fails, the given connection handle will be closed
   * and the USB device will appear to be disconnected then reconnected.
   * In this case **getDevices** or **findDevices** must be called again to acquire the device.
   * @param handle A connection handle to reset.
   * @param callback
   */
  declare function usb$resetDevice(
    handle: usb$ConnectionHandle,
    callback: (success: boolean) => void
  ): void;

  declare type usb$DeviceEvent = {} & undefined.events$Event<
    (device: usb$Device) => void
  >;

  /**
   * Event generated when a device is added to the system.
   * Events are only broadcast to apps that have permission to access the device.
   * Permission may have been granted at install time, when the user accepted an optional permission
   * (@see[permissions.request]{https://developer.chrome.com/apps/permissions#method-request}),
   * or through **getUserSelectedDevices**.
   * @since Chrome 42.
   */
  declare var usb$onDeviceAdded: usb$DeviceEvent;

  /**
   * Event generated when a device is removed from the system.
   * See **onDeviceAdded** for which events are delivered.
   * @since Chrome 42.
   */
  declare var usb$onDeviceRemoved: usb$DeviceEvent;

  declare var npm$namespace$virtualKeyboard: {
    restrictFeatures: typeof virtualKeyboard$restrictFeatures
  };

  /**
   * Determines whether advanced virtual keyboard features should be enabled or not.
   * They are enabled by default.
   *
   * On **Chrome 58** all properties are expected to have the same value.
   *
   * From **Chrome 63** the properties can be distinct and are optional.
   * If omitted, the current value is preserved.
   */
  declare interface virtualKeyboard$FeatureRestrictions {
    /**
     * Whether virtual keyboards can provide auto-complete.
     */
    autoCompleteEnabled?: boolean;

    /**
     * Whether virtual keyboards can provide auto-correct.
     */
    autoCorrectEnabled?: boolean;

    /**
     * Whether virtual keyboards can provide input via handwriting recognition.
     */
    handwritingEnabled?: boolean;

    /**
     * Whether virtual keyboards can provide spell-check.
     */
    spellCheckEnabled?: boolean;

    /**
     * Whether virtual keyboards can provide voice input.
     */
    voiceInputEnabled?: boolean;
  }

  /**
   * Sets restrictions on features provided by the virtual keyboard.
   * @param restrictions the preferences to enabled/disabled virtual keyboard features.
   * @param callback Invoked with the values which were updated.
   */
  declare function virtualKeyboard$restrictFeatures(
    restrictions: virtualKeyboard$FeatureRestrictions,
    callback?: (udp$update: virtualKeyboard$FeatureRestrictions) => void
  ): void;

  declare var npm$namespace$vpnProvider: {
    createConfig: typeof vpnProvider$createConfig,
    destroyConfig: typeof vpnProvider$destroyConfig,
    setParameters: typeof vpnProvider$setParameters,
    sendPacket: typeof vpnProvider$sendPacket,
    notifyConnectionStateChanged: typeof vpnProvider$notifyConnectionStateChanged,
    PlatformMessage: typeof vpnProvider$PlatformMessage,
    VpnConnectionState: typeof vpnProvider$VpnConnectionState,
    UIEvent: typeof vpnProvider$UIEvent,
    onPlatformMessage: typeof vpnProvider$onPlatformMessage,
    onPacketReceived: typeof vpnProvider$onPacketReceived,
    onConfigRemoved: typeof vpnProvider$onConfigRemoved,
    onConfigCreated: typeof vpnProvider$onConfigCreated,
    onUIEvent: typeof vpnProvider$onUIEvent
  };

  /**
   * The enum is used by the platform to notify the client of the VPN session status.
   *
   * **'connected'**
   * VPN configuration connected.
   * **'disconnected'**
   * VPN configuration disconnected.
   * **'error'**
   * An error occurred in VPN connection, for example a timeout. A description
   * of the error is given as the error argument to *onPlatformMessage*.
   * **'linkDown'**
   * The default physical network connection is down.
   * **'linkUp'**
   * The default physical network connection is back up.
   * **'linkChanged'**
   * The default physical network connection changed, e.g. wifi->mobile.
   * **'suspend'**
   * The OS is preparing to suspend, so the VPN should drop its connection.
   * The extension is not guaranteed to receive this event prior to suspending.
   * **'resume'**
   * The OS has resumed and the user has logged back in, so the VPN should try to reconnect.
   * @enum {}
   */
  declare var vpnProvider$PlatformMessage: {
    CONNECTED: "connected",
    DISCONNECTED: "disconnected",
    ERROR: "error",
    LINK_DOWN: "linkDown",
    LINK_UP: "linkUp",
    LINK_CHANGED: "linkChanged",
    SUSPEND: "suspend",
    RESUME: "resume"
  };

  /**
   * The enum is used by the VPN client to inform the platform of its current state.
   * This helps provide meaningful messages to the user.
   *
   * **'connected'**
   * VPN connection was successful.
   * **'failure'**
   * VPN connection failed.
   * @enum {}
   */
  declare var vpnProvider$VpnConnectionState: {
    CONNECTED: "connected",
    FAILURE: "failure"
  };

  /**
   * The enum is used by the platform to indicate the event that triggered *onUIEvent*
   *
   * **'showAddDialog'**
   * Request the VPN client to show add configuration dialog to the user.
   * **'showConfigureDialog'**
   * Request the VPN client to show configuration settings dialog to the user.
   * @enum {}
   */
  declare var vpnProvider$UIEvent: {
    SHOW_ADD_DIALOG: "showAddDialog",
    SHOW_CONFIGURE_DIALOG: "showConfigureDialog"
  };

  declare interface vpnProvider$VpnSessionParameters {
    /**
     * IP address for the VPN interface in CIDR notation.
     * IPv4 is currently the only supported mode.
     */
    address: string;

    /**
     * Broadcast address for the VPN interface.
     * (default: deduced from IP address and mask)
     */
    broadcastAddress?: string;

    /**
     * MTU setting for the VPN interface (default 1500 bytes).
     * @default '1500'
     */
    mtu?: string;

    /**
     * Exclude network traffic to the list of IP blocks in CIDR notation from the tunnel.
     * This can be used to bypass traffic to and from the VPN server.
     * When many rules match a destination, the rule with the longest matching prefix wins.
     * Entries that correspond to the same CIDR block are treated as duplicates.
     * Such duplicates in the collated (exclusionList + inclusionList) list
     * are eliminated and the exact duplicate entry that will be eliminated is undefined.
     */
    exclusionList: string[];

    /**
     * Include network traffic to the list of IP blocks in CIDR notation to the tunnel.
     * This parameter can be used to set up a split tunnel.
     * By default no traffic is directed to the tunnel.
     * Adding the entry '0.0.0.0/0' to this list gets all the user traffic redirected to the tunnel.
     * When many rules match a destination, the rule with the longest matching prefix wins.
     * Entries that correspond to the same CIDR block are treated as duplicates.
     * Such duplicates in the collated (exclusionList + inclusionList) list are
     * eliminated and the exact duplicate entry that will be eliminated is undefined.
     */
    inclusionList: string[];

    /**
     * A list of search domains. (default: no search domain)
     */
    domainSearch?: string[];

    /**
     * A list of IPs for the DNS servers.
     */
    dnsServers: string[];

    /**
 * @since Chrome 51.
Whether or not the VPN extension implements auto-reconnection.
If true, the *linkDown*, *linkUp*, *linkChanged*, *suspend*, and *resume*
platform messages will be used to signal the respective events.

If false, the system will forcibly disconnect the VPN if the network
topology changes, and the user will need to reconnect manually.

This property is new in Chrome 51; it will generate an exception in
earlier versions. try/catch can be used to conditionally enable the
feature based on browser support.
 * @default false
 */
    reconnect: boolean;
  }

  /**
 * Creates a new VPN configuration that persists across multiple login sessions of the user.
 * @param name The name of the VPN configuration.
 * @param callback Called when the configuration is created or if there is an error.
Parameter id: A unique ID for the created configuration, empty string on failure.
 */
  declare function vpnProvider$createConfig(
    name: string,
    callback: (runtime$id: string) => void
  ): void;

  /**
   * Destroys a VPN configuration created by the extension.
   * @param id ID of the VPN configuration to destroy.
   * @param callback Called when the configuration is destroyed or if there is an error.
   */
  declare function vpnProvider$destroyConfig(
    runtime$id: string,
    callback?: () => void
  ): void;

  /**
   * Sets the parameters for the VPN session. This should be called immediately after 'connected' is received from the platform. This will succeed only when the VPN session is owned by the extension.
   * @param parameters The parameters for the VPN session.
   * @param callback Called when the parameters are set or if there is an error.
   */
  declare function vpnProvider$setParameters(
    parameters: vpnProvider$VpnSessionParameters,
    callback: () => void
  ): void;

  /**
   * Sends an IP packet through the tunnel created for the VPN session. This will succeed only when the VPN session is owned by the extension.
   * @param data The IP packet to be sent to the platform.
   * @param callback Called when the packet is sent or if there is an error.
   */
  declare function vpnProvider$sendPacket(
    data: ArrayBuffer,
    callback?: () => void
  ): void;

  /**
 * Notifies the VPN session state to the platform. This will succeed only when the VPN session is owned by the extension.
 * @param state The VPN session state of the VPN client.
connected: VPN connection was successful.
failure: VPN connection failed.
 * @see enum VpnConnectionState
 * @param callback Called when the notification is complete or if there is an error.
 */
  declare function vpnProvider$notifyConnectionStateChanged(
    state: chrome$ToStringLiteral<typeof VpnConnectionState>,
    callback?: () => void
  ): void;

  /**
   * Triggered when a message is received from the platform for a VPN configuration owned by the extension.
   */
  declare var vpnProvider$onPlatformMessage: chrome$events.events$Event<
    (
      runtime$id: string,
      message: chrome$ToStringLiteral<typeof PlatformMessage>,
      error: string
    ) => void
  >;

  /**
   * Triggered when an IP packet is received via the tunnel for the VPN session owned by the extension.
   */
  declare var vpnProvider$onPacketReceived: chrome$events.events$Event<
    (data: ArrayBuffer) => void
  >;

  /**
   * Triggered when a configuration created by the extension is removed by the platform.
   */
  declare var vpnProvider$onConfigRemoved: chrome$events.events$Event<
    (runtime$id: string) => void
  >;

  /**
   * Triggered when a configuration is created by the platform for the extension.
   */
  declare var vpnProvider$onConfigCreated: chrome$events.events$Event<
    (runtime$id: string, name: string, data: Object) => void
  >;

  /**
   * Triggered when there is a UI event for the extension.
   * UI events are signals from the platform that indicate to the app that a UI dialog needs to be shown to the user.
   */
  declare var vpnProvider$onUIEvent: chrome$events.events$Event<
    (event: chrome$ToStringLiteral<typeof UIEvent>, runtime$id?: string) => void
  >;

  declare var npm$namespace$wallpaper: {
    setWallpaper: typeof wallpaper$setWallpaper
  };
  declare class wallpaper$WallpaperLayout {
    constructor(...args: empty): mixed;
    static +STRETCH: Class<wallpaper$WallpaperLayout__STRETCH> &
      wallpaper$WallpaperLayout__STRETCH &
      "STRETCH"; // "STRETCH"
    static +CENTER: Class<wallpaper$WallpaperLayout__CENTER> &
      wallpaper$WallpaperLayout__CENTER &
      "CENTER"; // "CENTER"
    static +CENTER_CROPPED: Class<wallpaper$WallpaperLayout__CENTER_CROPPED> &
      wallpaper$WallpaperLayout__CENTER_CROPPED &
      "CENTER_CROPPED"; // "CENTER_CROPPED"
  }

  declare class wallpaper$WallpaperLayout__STRETCH
    mixins wallpaper$WallpaperLayout {}
  declare class wallpaper$WallpaperLayout__CENTER
    mixins wallpaper$WallpaperLayout {}
  declare class wallpaper$WallpaperLayout__CENTER_CROPPED
    mixins wallpaper$WallpaperLayout {}

  declare type wallpaper$WallpaperLayoutType =
    | "STRETCH"
    | "CENTER"
    | "CENTER_CROPPED";

  declare interface wallpaper$WallpaperDetails {
    /**
     * The jpeg or png encoded wallpaper image.
     */
    data?: ArrayBuffer;

    /**
     * The URL of the wallpaper to be set.
     */
    url?: string;

    /**
     * The supported wallpaper layouts.
     * @see WallpaperLayout
     */
    layout: wallpaper$WallpaperLayout | wallpaper$WallpaperLayoutType;

    /**
     * The file name of the saved wallpaper.
     */
    filename: string;

    /**
     * True if a 128x60 thumbnail should be generated.
     */
    thumbnail?: boolean;
  }

  /**
   * Sets wallpaper to the image at url or wallpaperData with the specified layout
   * @param callback Contains the optional parameter thumbnail: The jpeg encoded wallpaper thumbnail. It is generated by resizing the wallpaper to 128x60.
   */
  declare function wallpaper$setWallpaper(
    details: wallpaper$WallpaperDetails,
    callback: (thumbnail?: string) => void
  ): void;

  declare type webRequest$ResourceType =
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

  declare type webViewRequest$Stage =
    | "onBeforeRequest"
    | "onBeforeSendHeaders"
    | "onHeadersReceived"
    | "onAuthRequired";

  declare type webViewRequest$DeclarativeWebRequestEventList =
    | "declarativeContent.onBeforeRequest"
    | "declarativeContent.onBeforeSendHeaders"
    | "declarativeContent.onSendHeaders"
    | "declarativeContent.onHeadersReceived"
    | "declarativeContent.onAuthRequired"
    | "declarativeContent.onResponseStarted"
    | "declarativeContent.onBeforeRedirect"
    | "declarativeContent.onCompleted"
    | "declarativeContent.onErrorOccured"
    | "declarativeContent.onRequest"
    | "declarativeContent.onMessage";

  declare type webViewRequest$DeclarativeWebRequestConditionsList =
    "declarativeContent.PageStateMatcher";

  declare type webViewRequest$DeclarativeWebRequestActionsList =
    | "declarativeWebRequest.AddRequestCookie"
    | "declarativeWebRequest.AddResponseCookie"
    | "declarativeWebRequest.AddResponseHeader"
    | "declarativeWebRequest.CancelRequest"
    | "declarativeWebRequest.EditRequestCookie"
    | "declarativeWebRequest.EditResponseCookie"
    | "declarativeWebRequest.RedirectRequest"
    | "declarativeWebRequest.RedirectToTransparentImage"
    | "declarativeWebRequest.RedirectToEmptyDocument"
    | "declarativeWebRequest.RedirectByRegEx"
    | "declarativeWebRequest.RemoveRequestCookie"
    | "declarativeWebRequest.RemoveResponseCookie"
    | "declarativeWebRequest.RemoveRequestHeader"
    | "declarativeWebRequest.RemoveResponseHeader"
    | "declarativeWebRequest.SetRequestHeader"
    | "declarativeWebRequest.SendMessageToExtension"
    | "declarativeWebRequest.IgnoreRules";

  declare interface webViewRequest$HeaderFilter {
    /**
     * Matches if the header name starts with the specified string.
     */
    namePrefix?: string;

    /**
     * Matches if the header name ends with the specified string.
     */
    nameSuffix?: string;

    /**
     * Matches if the header name contains all of the specified strings.
     */
    nameContains?: string | string[];

    /**
     * Matches if the header name is equal to the specified string.
     */
    nameEquals?: string;

    /**
     * Matches if the header value starts with the specified string.
     */
    valuePrefix?: string;

    /**
     * Matches if the header value ends with the specified string.
     */
    valueSuffix?: string;

    /**
     * Matches if the header value contains all of the specified strings.
     */
    valueContains?: string | string[];

    /**
     * Matches if the header value is equal to the specified string.
     */
    valueEquals?: string;
  }

  declare interface webViewRequest$RequestMatcherFields {
    /**
     * Matches if the conditions of the UrlFilter are fulfilled for the URL of the request.
     */
    url?: chrome$events.events$UrlFilter;

    /**
     * Matches if the conditions of the UrlFilter are fulfilled for the
     * 'first party' URL of the request. The 'first party' URL of a request,
     * when present, can be different from the request's target URL, and
     * describes what is considered 'first party' for the sake of third-party
     * checks for cookies.
     */
    firstPartyForCookiesUrl?: chrome$events.events$UrlFilter;

    /**
     * Matches if the request type of a request is contained in the list.
     * Requests that cannot match any of the types will be filtered out.
     */
    resourceType?: webRequest$webRequest$ResourceType[];

    /**
     * Matches if the MIME media type of a response
     * (from the HTTP Content-Type header)
     * is contained in the list.
     */
    contentType?: string[];

    /**
     * Matches if the MIME media type of a response
     * (from the HTTP Content-Type header) is not contained in the list.
     */
    excludeContentType?: string[];

    /**
     * Matches if some of the request headers is matched by one of the HeaderFilters.
     */
    requestHeaders?: webViewRequest$HeaderFilter[];

    /**
     * Matches if none of the request headers is matched by any of the HeaderFilters.
     */
    excludeRequestHeaders?: webViewRequest$HeaderFilter[];

    /**
     * Matches if some of the response headers is matched by one of the HeaderFilters.
     */
    responseHeaders?: webViewRequest$HeaderFilter[];

    /**
     * Matches if none of the response headers is matched by any of the HeaderFilters.
     */
    excludeResponseHeaders?: webViewRequest$HeaderFilter[];

    /**
     * If set to true, matches requests that are subject to third-party cookie policies.
     * If set to false, matches all other requests.
     */
    thirdPartyForCookies?: boolean;

    /**
     * Contains a list of strings describing stages.
     * If this attribute is present, then it limits the applicable stages to those listed.
     * Note that the whole condition is only applicable in stages compatible with all attributes.
     */
    stages?: webViewRequest$Stage[];
  }

  /**
   * @description Matches network events by various criteria.
   */
  declare class webViewRequest$RequestMatcher {
    typeGuard: "RequestMatcher";
    constructor(parameters?: webViewRequest$RequestMatcherFields): this;
    instanceType: string;
  }

  /**
   * Declarative event action that cancels a network request.
   */
  declare class webViewRequest$CancelRequest {
    typeGuard: "CancelRequest";
    instanceType: string;
  }

  declare interface webViewRequest$RedirectRequestParams {
    /**
     * Destination to where the request is redirected.
     */
    redirectUrl: string;
  }

  /**
   * Declarative event action that redirects a network request.
   */
  declare class webViewRequest$RedirectRequest {
    typeGuard: "RedirectRequest";
    constructor(parameters: webViewRequest$RedirectRequestParams): this;
    instanceType: string;
  }

  /**
   * Declarative event action that redirects a network request to a transparent image.
   */
  declare class webViewRequest$RedirectToTransparentImage {
    typeGuard: "RedirectToTransparentImage";
    instanceType: string;
  }

  /**
   * Declarative event action that redirects a network request to an empty document.
   */
  declare class webViewRequest$RedirectToEmptyDocument {
    typeGuard: "RedirectToEmptyDocument";
    instanceType: string;
  }

  declare interface webViewRequest$RedirectByRegExParams {
    /**
     * A match pattern that may contain capture groups.
     * Capture groups are referenced in the Perl syntax ($1, $2, ...)
     * instead of the RE2 syntax (\1, \2, ...) in order to be closer
     * to JavaScript Regular Expressions.
     */
    from: string;

    /**
     * Destination pattern. @see from
     */
    to: string;
  }

  /**
   * Redirects a request by applying a regular expression on the URL.
   * The regular expressions use the RE2 syntax.
   * @see [RE2 syntax]{@link https://github.com/google/re2/blob/master/doc/syntax.txt}
   */
  declare class webViewRequest$RedirectByRegEx {
    typeGuard: "RedirectByRegEx";
    constructor(parameters: webViewRequest$RedirectByRegExParams): this;
    instanceType: string;
  }

  declare interface webViewRequest$SetRequestHeaderParams {
    /**
     * HTTP request header name
     */
    name: string;

    /**
     * HTTP request header value
     */
    value: string;
  }

  /**
   * Sets the request header of the specified name to the specified value.
   * If a header with the specified name did not exist before, a new one is created.
   * Header name comparison is always case-insensitive.
   * Each request header name occurs only once in each request.
   */
  declare class webViewRequest$SetRequestHeader {
    typeGuard: "SetRequestHeader";
    constructor(parameters: webViewRequest$SetRequestHeaderParams): this;
    instanceType: string;
  }

  declare interface webViewRequest$RemoveRequestHeaderParams {
    /**
     * HTTP request header name (case-insensitive)
     */
    name: string;
  }

  /**
   * Removes the request header of the specified name.
   * Do not use SetRequestHeader and RemoveRequestHeader with
   * the same header name on the same request.
   * Each request header name occurs only once in each request.
   */
  declare class webViewRequest$RemoveRequestHeader {
    typeGuard: "RemoveRequestHeader";
    constructor(parameters: webViewRequest$RemoveRequestHeaderParams): this;
    instanceType: string;
  }

  declare interface webViewRequest$AddResponseHeaderParams {
    /**
     * HTTP response header name
     */
    name: string;

    /**
     * HTTP response header value
     */
    value: string;
  }

  /**
   * Adds the response header to the response of this web request.
   * As multiple response headers may share the same name,
   * you need to first remove and then add a new
   * response header in order to replace one.
   */
  declare class webViewRequest$AddResponseHeader {
    typeGuard: "AddResponseHeader";
    constructor(parameters: webViewRequest$AddResponseHeaderParams): this;
    instanceType: string;
  }

  declare interface webViewRequest$RemoveResponseHeaderParams {
    /**
     * HTTP request header name (case-insensitive).
     */
    name: string;

    /**
     * HTTP request header value (case-insensitive).
     */
    value?: string;
  }

  /**
   * Removes all response headers of the specified names and values.
   */
  declare class webViewRequest$RemoveResponseHeader {
    typeGuard: "RemoveResponseHeader";
    constructor(parameters: webViewRequest$RemoveResponseHeaderParams): this;
    instanceType: string;
  }

  declare interface webViewRequest$IgnoreRulesParams {
    /**
     * If set, rules with a lower priority than the specified value are ignored.
     * This boundary is not persisted, it affects only rules and their actions
     * of the same network request stage.
     */
    lowerPriorityThan?: chrome$integer;

    /**
     * If set, rules with the specified tag are ignored. This ignoring is not persisted,
     * it affects only rules and their actions of the same network request stage.
     * Note that rules are executed in descending order of their priorities.
     * This action affects rules of lower priority than the current rule.
     * Rules with the same priority may or may not be ignored.
     */
    hasTag?: string;
  }

  /**
   * Masks all rules that match the specified criteria.
   */
  declare class webViewRequest$IgnoreRules {
    typeGuard: "IgnoreRules";
    constructor(parameters: webViewRequest$IgnoreRulesParams): this;
    instanceType: string;
  }

  declare interface webViewRequest$SendMessageParams {
    /**
     * The value that will be passed in the message attribute
     * of the interface that is passed to the event handler.
     */
    message: string;
  }

  /**
   * Triggers the webviewWebRequest.*OnMessageEvent* event which are used in webviews.
   */
  declare class webViewRequest$SendMessageToExtension {
    typeGuard: "SendMessageToExtension";
    constructor(parameters: webViewRequest$SendMessageParams): this;
    instanceType: string;
  }

  /**
   * A filter or specification of a cookie in HTTP Requests.
   */
  declare interface webViewRequest$RequestCookie {
    /**
     * Name of a cookie.
     */
    name?: string;

    /**
     * Value of a AddRequestCookie, may be padded in double-quotes.
     */
    value?: string;
  }

  /**
   * A specification of a cookie in HTTP Responses.
   */
  declare interface webViewRequest$ResponseCookie {
    /**
     * Name of a cookie.
     */
    name?: string;

    /**
     * Value of a cookie, may be padded in double-quotes.
     */
    value?: string;

    /**
     * Value of the Expires cookie attribute.
     */
    expires?: string;

    /**
     * Value of the Max-Age cookie attribute
     */
    maxAge?: chrome$integer;

    /**
     * Value of the Domain cookie attribute.
     */
    domain?: string;

    /**
     * Value of the Path cookie attribute.
     */
    path?: string;

    /**
     * Existence of the Secure cookie attribute.
     */
    tcp$secure?: string;

    /**
     * Existence of the HttpOnly cookie attribute.
     */
    httpOnly?: string;
  }

  /**
   * A filter of a cookie in HTTP Responses.
   */
  declare interface webViewRequest$FilterResponseCookie {
    /**
     * Name of a cookie.
     */
    name?: string;

    /**
     * Value of a cookie, may be padded in double-quotes.
     */
    value?: string;

    /**
     * Value of the Expires cookie attribute.
     */
    expires?: string;

    /**
     * Value of the Max-Age cookie attribute
     */
    maxAge?: chrome$double;

    /**
     * Value of the Domain cookie attribute.
     */
    domain?: string;

    /**
     * Value of the Path cookie attribute.
     */
    path?: string;

    /**
     * Existence of the Secure cookie attribute.
     */
    tcp$secure?: string;

    /**
     * Existence of the HttpOnly cookie attribute
     */
    httpOnly?: string;

    /**
     * Inclusive upper bound on the cookie lifetime (specified in seconds after current time).
     * Only cookies whose expiration date-time is in the interval [now, now + ageUpperBound]
     * fulfill this criterion. Session cookies and cookies whose expiration date-time is
     * in the past do not meet the criterion of this filter. The cookie lifetime is calculated
     * from either 'max-age' or 'expires' cookie attributes. If both are specified, 'max-age'
     * is used to calculate the cookie lifetime.
     */
    ageUpperBound?: chrome$integer;

    /**
     * Inclusive lower bound on the cookie lifetime (specified in seconds after current time).
     * Only cookies whose expiration date-time is set to 'now + ageLowerBound' or later fulfill
     * this criterion. Session cookies do not meet the criterion of this filter. The cookie
     * lifetime is calculated from either 'max-age' or 'expires' cookie attributes. If both
     * are specified, 'max-age' is used to calculate the cookie lifetime.
     */
    ageLowerBound?: chrome$integer;

    /**
     * Filters session cookies.
     * Session cookies have no lifetime specified in any of 'max-age' or 'expires' attributes.
     */
    sessionCookie?: boolean;
  }

  /**
   * @private
   * @template Type of cookie
   */
  declare interface webViewRequest$AddCookie<T> {
    /**
     * Cookie to be added to the request.
     * No field may be undefined.
     * The name and value need to be specified.
     */
    cookie: T;
  }

  /**
   * Adds a cookie to the request or overrides a cookie, in case another cookie of the same name exists already.
   * Note that it is preferred to use the Cookies API because this is computationally less expensive.
   */
  declare class webViewRequest$AddRequestCookie {
    typeGuard: "AddRequestCookie";
    constructor(
      parameters: webViewRequest$AddCookie<webViewRequest$RequestCookie>
    ): this;
    instanceType: string;
  }

  /**
   * Adds a cookie to the response or overrides a cookie, in case another cookie of the same name exists already.
   * Note that it is preferred to use the Cookies API because this is computationally less expensive.
   */
  declare class webViewRequest$AddResponseCookie {
    typeGuard: "AddResponseCookie";
    constructor(
      parameters: webViewRequest$AddCookie<webViewRequest$ResponseCookie>
    ): this;
    instanceType: string;
  }

  /**
   * @private
   * @template First parameter type
   * @template Second parameter type
   */
  declare interface webViewRequest$EditCookieParams<T, K> {
    /**
     * Filter for cookies that will be modified.
     * All empty entries are ignored.
     */
    filter: T;

    /**
     * Attributes that shall be overridden in cookies that machted the filter
     * Attributes that are set to an empty string are removed.
     */
    modification: K;
  }

  /**
   * Edits one or more cookies of request.
   * Note that it is preferred to use the Cookies API because this is computationally less expensive.
   */
  declare class webViewRequest$EditRequestCookie {
    typeGuard: "EditRequestCookie";

    /**
 * @param filter
 * @param modification Attributes that shall be overridden in cookies that machted the filter.
Attributes that are set to an empty string are removed.
 */
    constructor(
      parameters: webViewRequest$EditCookieParams<
        webViewRequest$RequestCookie,
        webViewRequest$RequestCookie
      >
    ): this;
    instanceType: string;
  }

  /**
   * Edits one or more cookies of response.
   * Note that it is preferred to use the Cookies API because this is computationally less expensive.
   */
  declare class webViewRequest$EditResponseCookie {
    typeGuard: "EditResponseCookie";

    /**
     * @param filter Filter for cookies that will be modified.All empty entries are ignored.
     * @param modification
     */
    constructor(
      parameter: webViewRequest$EditCookieParams<
        webViewRequest$FilterResponseCookie,
        webViewRequest$ResponseCookie
      >
    ): this;
    instanceType: string;
  }

  /**
   * Removes one or more cookies of request.
   * Note that it is preferred to use the Cookies API because this is computationally less expensive.
   */
  declare class webViewRequest$RemoveRequestCookie {
    typeGuard: "RemoveRequestCookie";
    constructor(
      parameters: webViewRequest$RemoveCookieParams<webViewRequest$RequestCookie>
    ): this;
    instanceType: string;
  }

  /**
   * @private
   * @template Filter type
   */
  declare interface webViewRequest$RemoveCookieParams<T> {
    /**
     * Filter for cookies that will be removed.
     * All empty entries are ignored.
     */
    filter: T;
  }

  /**
   * Removes one or more cookies of response.
   * Note that it is preferred to use the Cookies API because this is computationally less expensive.
   */
  declare class webViewRequest$RemoveResponseCookie {
    typeGuard: "RemoveResponseCookie";
    constructor(
      parameters: webViewRequest$RemoveCookieParams<webViewRequest$FilterResponseCookie>
    ): this;
    instanceType: string;
  }

  /**
   * Supported conditions
   */
  declare type webViewRequest$OnRequestConditions = webViewRequest$RequestMatcher;

  /**
   * Supported actions
   */
  declare type webViewRequest$OnRequestActions =
    | webViewRequest$AddRequestCookie
    | webViewRequest$AddResponseCookie
    | webViewRequest$AddResponseHeader
    | webViewRequest$CancelRequest
    | webViewRequest$EditRequestCookie
    | webViewRequest$EditResponseCookie
    | webViewRequest$RedirectRequest
    | webViewRequest$RedirectToTransparentImage
    | webViewRequest$RedirectToEmptyDocument
    | webViewRequest$RedirectByRegEx
    | webViewRequest$RemoveRequestCookie
    | webViewRequest$RemoveResponseCookie
    | webViewRequest$RemoveRequestHeader
    | webViewRequest$RemoveResponseHeader
    | webViewRequest$SetRequestHeader
    | webViewRequest$SendMessageToExtension
    | webViewRequest$IgnoreRules;

  /**
   * Description of a declarative rule for handling events.
   * With correct types for the onRequest event.
   */
  declare type webViewRequest$OnRequestRule = {} & undefined.events$Rule<
    webViewRequest$OnRequestConditions,
    webViewRequest$OnRequestActions
  >;

  /**
   * Provides the Declarative Event API consisting of addRules, removeRules, and getRules.
   */
  declare interface webViewRequest$OnRequestEvent {
    /**
     * Registers rules to handle events.
     * @param rules Rules to be registered. These do not replace previously registered rules.
     * @param callback Called with registered rules.
     */
    addRules(
      rules: webViewRequest$OnRequestRule[],
      callback?: (rules: webViewRequest$OnRequestRule[]) => void
    ): void;

    /**
     * Returns currentlt registered rules.
     * @param callback Called with registered rules.
     */
    getRules(callback: (rules: webViewRequest$OnRequestRule[]) => void): void;

    /**
     * Returns currentlt registered rules.
     * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are returned.
     * @param callback Called with registered rules.
     */
    getRules(
      ruleIdentifiers: string[],
      callback: (rules: webViewRequest$OnRequestRule[]) => void
    ): void;

    /**
     * Unregisters currently registered rules.
     * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are unregistered.
     * @param callback Called when rules were unregistered.
     */
    removeRules(ruleIdentifiers?: string[], callback?: () => void): void;
  }

  declare interface webViewRequest$OnMessageEventDetails {
    /**
     * The message sent by the calling script.
     */
    message: string;

    /**
     * The stage of the network request during which the event was triggered.
     */
    stage: webViewRequest$Stage;

    /**
     * The ID of the request.
     * Request IDs are unique within a browser session.
     * As a result, they could be used to relate different events of the same request.
     */
    requestId: string;

    /**
     * URL
     */
    url: string;

    /**
     * Standard HTTP method.
     */
    method: string;

    /**
     * The value 0 indicates that the request happens in the main frame;
     * a positive value indicates the ID of a subframe in which the request happens.
     * If the document of a (sub-)frame is loaded (type is main_frame or sub_frame),
     * frameId indicates the ID of this frame, not the ID of the outer frame.
     * Frame IDs are unique within a tab.
     */
    frameId: chrome$integer;

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */
    parentFrameId: chrome$integer;

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */
    tabId: chrome$integer;

    /**
     * How the requested resource will be used.
     */
    type: webRequest$webRequest$ResourceType;

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */
    timeStamp: chrome$double;
  }

  /**
   * Fired when a message is sent via **declarativeWebRequest.SendMessageToExtension**
   * from an action of the declarative web request API.
   */
  declare type webViewRequest$OnMessageEvent = {} & undefined.events$Event<
    (details: webViewRequest$OnMessageEventDetails) => void
  >;

  /**
   * Chrome experimental apis may be using this namespace.
   * Please consult the official documentation.
   * @see [Documentation]{@link https://developer.chrome.com/apps/experimental}
   */
  declare var chrome$experimental: any;

  /**
   * New Chrome Event
   * @constructor
   */
  declare var chrome$Event: {
    new<T: Function>(): chrome$events.chrome$Event<T>
  };

  /**
   * Different page speed and load metrics
   */
  declare function chrome$csi(): {
    onloadT: chrome$integer,
    pageT: chrome$integer,
    startE: chrome$integer,
    tran: chrome$integer
  };

  /**
 * @deprecated Deprecated in Chrome 64.
chrome.loadTimes() is a non-standard API that exposes loading metrics
and network information to developers in order to help them better
understand their site's performance in the real world.
 * @see [Use this instead]{@link https://www.w3.org/TR/navigation-timing-2/}
 * @see [Deprecation article]{@link https://developers.google.com/web/updates/2017/12/chrome-loadtimes-deprecated}
 */
  declare function chrome$loadTimes(): chrome$chrome$deprecatedButUsable;

  /**
   * Use the appview tag to embed other Chrome Apps within your Chrome App.
   * The appview runs in a separate process from your app,
   * it doesn't inherit the same permissions and is only allowed
   * to interact with your app through asynchronous APIs.
   * Not all apps can be embedded; apps have to explicitly allow themselves to be embedded.
   * @since Chrome 43.
   * @requires Permissions: 'appview'
   * @see [Documentation]{@link https://developer.chrome.com/apps/tags/appview}
   */
  declare class HTMLAppViewElement mixins HTMLElement {
    /**
     * Create a new AppView tag
     */
    constructor(): this;

    /**
     * Requests another app to be embedded.
     * @param app The extension id of the app to be embedded.
     * @param data Optional developer specified data that the app to be embedded can use when making an embedding decision.
     * @param callback Optional callback when the embedding request is completed. Will provide the result.
     */
    connect(
      app: string,
      data?: any,
      callback?: (success: boolean) => void
    ): void;
  }
  declare interface AppView$EmbedRequest {
    /**
     * The ID of the app that sent the embedding request.
     */
    embedderId: string;

    /**
     * Optional developer specified data that the app to be embedded can use when making an embedding decision.
     */
    data?: any;

    /**
     * Allows the embedding request
     * @param url Specifies the content to be embedded.
     */
    allow(url: string): void;

    /**
     * Prevents the embedding request
     */
    deny(): void;
  }
  declare interface Document {
    createElement(element: "appview"): HTMLAppViewElement;
    createElement(element: "webview"): HTMLWebViewElement;

    /**
     * ❗ document.cookie is not available in packaged apps. ❗
     * Packaged app pages are not rendered on the server, so there is no need to use these.
     */
    cookie: string;

    /**
     * ❗ document.close is not available in packaged apps. ❗
     */
    udp$close(): void;

    /**
     * ❗ document.open is not available in packaged apps. ❗
     */
    open(
      url?: string,
      name?: string,
      features?: string,
      replace?: boolean
    ): Document;

    /**
     * ❗ document.write is not available in packaged apps. ❗
     */
    write(...content: string[]): void;
  }
  declare interface Window {
    AppView: typeof AppView;
    WebView: typeof WebView;
    chrome: typeof chrome;
  }
  declare var AppView: typeof HTMLAppViewElement;
  declare interface HTMLElementTagNameMap {
    appview: HTMLAppViewElement;
    webview: HTMLWebViewElement;
  }

  /**
   * Use the webview tag to actively load live content from the web over the network and embed it in your Chrome App.
   * Your app can control the appearance of the *webview* and interact with the web content, initiate navigations in
   * an embedded web page, react to error events that happen within it.
   */
  declare class HTMLWebViewElement mixins HTMLElement {
    /**
     * If present, portions of the embedder could be visible through the webview,
     * where the contents are transparent. Without allowtransparency enabled,
     * no part of the embedder will be shown through the webview,
     * even if elements exist that are specified as transparent.
     * This does not affect transparency within the contents of the webview itself.
     */
    allowtransparency: boolean;

    /**
     * If 'on', the webview container will automatically resize within the bounds specified by the attributes minwidth, minheight, maxwidth, and maxheight.
     * These constraints do not impact the webview UNLESS autosize is enabled.
     * When autosize is enabled, the webview container size cannot be less than the minimum values or greater than the maximum.
     */
    autosize: "on" | boolean;

    /**
     * Similar to chrome's ContextMenus API, but applies to webview instead of browser.
     *  Use the webview.contextMenus API to add items to webview's context menu.
     *  You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.
     */
    contextMenus: WebView$WebView$ContextMenus;

    /**
     * Object reference which can be used to post messages into the guest page.
     */
    contentWindow: WebView$WebView$ContentWindow;

    /**
     * This sets the guest content's window.name object.*
     */
    name: string;

    /**
     * Storage partition ID used by the webview tag.
     * If the storage partition ID starts with persist: (partition='persist:googlepluswidgets'),
     * the webview will use a persistent storage partition available to all guests in the app with the same storage partition ID.
     * If the ID is unset or if there is no 'persist': prefix, the webview will use an in-memory storage partition.
     * his value can only be modified before the first navigation, since the storage partition of an active renderer process cannot change.
     * Subsequent attempts to modify the value will fail with a DOM exception.
     * By assigning the same partition ID, multiple webviews can share the same storage partition.
     */
    partition: string;

    /**
     * Interface which provides access to webRequest events on the guest page.
     */
    permissions$request: WebView$WebView$WebRequestEventInterface;

    /**
     * Returns the visible URL. Mirrors the logic in the browser's omnibox: either returning a pending new navigation if initiated by the embedder page, or the last committed navigation. Writing to this attribute initiates top-level navigation.
     * Assigning src its own value will reload the current page.
     * The src attribute cannot be cleared or removed once it has been set, unless the webview is removed from the DOM.
     * The src attribute can also accept data URLs, such as 'data:text/plain,Hello, world!'.
     */
    src: string;

    /**
     * Create a new element
     */
    constructor(): this;

    /**
     * Queries audio state.
     * @since Chrome 62.
     */
    getAudioState(callback: (audible: boolean) => void): void;

    /**
     * Sets audio mute state of the webview.
     * @param mute Mute audio value
     * @since Chrome 62.
     */
    setAudioMuted(mute: boolean): void;

    /**
     * Queries whether audio is muted.
     * @since Chrome 62.
     */
    isAudioMuted(callback: (muted: boolean) => void): void;

    /**
 * Captures the visible region of the webview.
 * @param callback Provides a data URL which encodes an image of the visible area of the captured webview.
May be assigned to the 'src' property of an HTML Image element for display.
 * @since Chrome 50.
 */
    captureVisibleRegion(callback: (dataUrl: string) => void): void;

    /**
 * Captures the visible region of the webview.
 * @param options Extension type
 * @param callback Provides a data URL which encodes an image of the visible area of the captured webview.
May be assigned to the 'src' property of an HTML Image element for display.
 * @since Chrome 50.
 */
    captureVisibleRegion(
      options: chrome$extensionTypes.extensionTypes$ImageDetails,
      callback: (dataUrl: string) => void
    ): void;

    /**
 * Adds content script injection rules to the webview.
 * When the webview navigates to a page matching one or more rules, the associated scripts will be injected.
 * You can programmatically add rules or update existing rules.
 * The following example adds two rules to the webview: 'myRule' and 'anotherRule'.
 * @example webview.addContentScripts([
{
name: 'myRule',
matches: ['http://www.foo.com/*'],
css: { files: ['mystyles.css'] },
js: { files: ['jquery.js', 'myscript.js'] },
run_at: 'document_start'
},
{
name: 'anotherRule',
matches: ['http://www.bar.com/*'],
js: { code: 'document.body.style.backgroundColor = 'red';' },
run_at: 'document_end'
}]);
...
// Navigates webview.
webview.src = 'http://www.foo.com';
 * @description You can defer addContentScripts call until you needs to inject scripts.
The following example shows how to overwrite an existing rule.
 * @example webview.addContentScripts([{
name: 'rule',
matches: ['http://www.foo.com/*'],
js: { files: ['scriptA.js'] },
run_at: 'document_start'}]);

// Do something.
webview.src = 'http://www.foo.com/*';
...
// Overwrite 'rule' defined before.
webview.addContentScripts([{
name: 'rule',
matches: ['http://www.bar.com/*'],
js: { files: ['scriptB.js'] },
run_at: 'document_end'}]);
 * @description If webview has been naviagted to the origin (e.g., foo.com) and
calls webview.addContentScripts to add 'myRule',
you need to wait for next navigation to make the scripts injected.
If you want immediate injection, executeScript will do the right thing.
Rules are preserved even if the guest process crashes
or is killed or even if the webview is reparented.
Refer to the /extensions/content_scripts documentation for more details.
 * @param contentScriptList Details of the content scripts to add.
 * @since Chrome 44.
 */
    addContentScripts(
      contentScriptList: WebView$WebView$ContentScriptDetails[]
    ): void;

    /**
     * Navigates backward one history entry if possible.
     * Equivalent to go(-1).
     * @param callback Called after the navigation has either failed or completed successfully. Success parameter indicates whether the navigation was successful.
     */
    back(callback?: (success: boolean) => void): void;

    /**
     * Indicates whether or not it is possible to navigate backward through history.
     * The state of this function is cached, and updated before each loadcommit,
     * so the best place to call it is on loadcommit.
     */
    canGoBack(): void;

    /**
     * Indicates whether or not it is possible to navigate forward through history.
     * The state of this function is cached, and updated before each loadcommit,
     * so the best place to call it is on loadcommit.
     */
    canGoForward(): void;

    /**
     * Clears browsing data for the webview partition.
     * @param options Options determining which data to clear.
     * @param types The types of data to be cleared.
     * @param callback Called after the data has been successfully cleared.
     * @since Chrome 33.
     */
    clearData(
      options: WebView$WebView$ClearDataOptions,
      types: WebView$WebView$ClearDataTypeSet,
      callback?: () => void
    ): void;

    /**
     * Injects JavaScript code into the guest page.
     * The following sample code uses script injection
     * to set the guest page's background color to red:
     * @example webview.executeScript({ code: 'document.body.style.backgroundColor = 'red'' });
     * @param details Details of the script to run.
     * @param callback Called after all the JavaScript has been executed.
     */
    executeScript(
      details: WebView$WebView$InjectDetails,
      callback?: (result?: any[]) => void
    ): void;

    /**
 * Initiates a find-in-page request.
 * @param searchText The string to find in the page.
 * @param options Options for the find request.
 * @param callback Called after all find results have been returned for this find request.
Provides optionally:
results: Contains all of the results of the find request.
results can be omitted if it is not utilized in the callback function body;
e.g. if the callback is only used to discern when the find request has completed.
 */
    find(
      searchText: string,
      options?: WebView$WebView$FindOptions,
      callback?: (results?: WebView$WebView$FindCallbackResults) => void
    ): void;

    /**
 * Navigates forward one history entry if possible. Equivalent to go(1).
 * @param callback Called after the navigation has either failed or completed successfully.
  Provides *success* which indicates whether the navigation was successful.
 */
    forward(callback?: (success: boolean) => void): void;

    /**
     * Returns Chrome's internal process ID for the guest web page's current process,
     * allowing embedders to know how many guests would be affected by terminating
     * the process. Two guests will share a process only if they belong to the same
     * app and have the same **storage partition ID**. The call is synchronous and returns
     * the embedder's cached notion of the current process ID. The process ID isn't
     * the same as the operating system's process ID.
     */
    getProcessId(): chrome$chrome$integer;

    /**
     * Returns the user agent string used by the webview for guest page requests.
     * @since Chrome 33.
     */
    getUserAgent(): string;

    /**
     * Gets the current zoom factor.
     * @param callback Called after the current zoom factor is retrieved. Provides the current zoom factor.
     * @since Chrome 36.
     */
    getZoom(callback: (zoomFactor: chrome$chrome$double) => void): void;

    /**
     * Gets the current zoom mode.
     * @param callback Called with the webview's current zoom mode.
     * @since Chrome 43.
     */
    getZoomMode(
      callback: (WebView$ZoomMode: WebView$WebView$ZoomMode) => void
    ): void;

    /**
 * Navigates to a history entry using a history index relative to the current navigation.
 * If the requested navigation is impossible, this method has no effect.
 * @param relativeIndex Relative history index to which the webview should be navigated.
For example, a value of 2 will navigate forward 2 history entries if possible;
   a value of -3 will navigate backward 3 entries.
 * @param callback Called after the navigation has either failed or completed successfully.
Provides a boolean, *success*, which indicates whether the navigation was successful.
 */
    go(
      relativeIndex: chrome$chrome$integer,
      callback?: (success: boolean) => void
    ): void;

    /**
     * Injects CSS into the guest page.
     * @param details Details of the CSS to insert.
     * @param callback Called after the CSS has been inserted.
     */
    insertCSS(
      details: WebView$WebView$InjectDetails,
      callback?: () => void
    ): void;

    /**
     * Indicates whether or not the webview's user agent string has been overridden by *setUserAgentOverride*.
     * @since Chrome 33.
     */
    isUserAgentOverridden(): void;

    /**
     * Prints the contents of the webview.
     * This is equivalent to calling scripted print function from the webview itself.
     * @since Chrome 38.
     */
    print(): void;

    /**
     * Reloads the current top-level page.
     */
    reload(): void;

    /**
 * Removes content scripts from a webview.
 * The following example removes 'myRule' which was added before.
 * @example webview.removeContentScripts(['myRule']);
 * @description You can remove all the rules by calling:
 * @example webview.removeContentScripts();
 * @param scriptNameList A list of names of content scripts that will be removed.
If the list is empty, all the content scripts added to the webview will be removed.
 * @since Chrome 44.
 */
    removeContentScripts(scriptNameList?: string[]): void;

    /**
     * Set an attribute
     */
    setAttribute(attributeName: string, value: string | number | boolean): void;

    /**
     * Override the user agent string used by the webview for guest page requests.
     * @param userAgent The user agent string to use.
     * @since Chrome 33.
     */
    setUserAgentOverride(userAgent: string): void;

    /**
     * Changes the zoom factor of the page.
     * The scope and persistence of this change
     * are determined by the webview's current zoom mode.
     * @param zoomFactor The new zoom factor.
     * @param callback Called after the page has been zoomed.
     * @since Chrome 36.
     */
    setZoom(zoomFactor: chrome$chrome$double, callback?: () => void): void;

    /**
     * Sets the zoom mode of the webview.
     * @param ZoomMode Defines how zooming is handled in the webview.
     * @param callback Called after the zoom mode has been changed.
     * @since Chrome 43.
     */
    setZoomMode(
      WebView$ZoomMode: WebView$WebView$ZoomMode,
      callback?: () => void
    ): void;

    /**
     * Stops loading the current webview navigation if in progress.
     */
    stop(): void;

    /**
 * Ends the current find session (clearing all highlighting)
 * and cancels all find requests in progress.
 * @param action Determines what to do with the active match after the find session has ended.
*clear* will clear the highlighting over the active match;
keep will keep the active match highlighted;
activate will keep the active match highlighted and simulate a user click on that match.
The default action is keep.
 * @since Chrome 35.
 */
    stopFinding(action?: "clear" | "keep" | "activate"): void;

    /**
     * Loads a data URL with a specified base URL used for relative links.
     * Optionally, a virtual URL can be provided to be shown to the user instead of the data URL.
     * @param dataUrl The data URL to load.
     * @param baseUrl The base URL that will be used for relative links.
     * @param virtualUrl The URL that will be displayed to the user (in the address bar).
     * @since Chrome 40.
     */
    loadDataWithBaseUrl(
      dataUrl: string,
      baseUrl: string,
      virtualUrl?: string
    ): void;

    /**
     * @since Chrome 71
     * @description Sets spatial navigation state of the webview.
     * @param enabled Spatial navigation state value.
     */
    setSpatialNavigationEnabled(enabled: boolean): void;

    /**
     * @since Chrome 71
     * @description Queries whether spatial navigation is enabled for the webview.
     * @param callback Callback that will provide the value of the spatial navigation state.
     */
    isSpatialNavigationEnabled(callback: (enabled: boolean) => void): void;

    /**
     * Forcibly kills the guest web page's renderer process.
     * This may affect multiple webview tags in the current app if they share the same process,
     * but it will not affect webview tags in other apps.
     */
    terminate(): void;

    /**
     * Fired when the guest window logs a console message.
     */
    onconsolemessage:
      | ((ev: WebView$Events.Events$ConsoleMessageEvent) => any)
      | null;

    /**
     * Fired when the guest window fires a load event, i.e.,
     * when a new document is loaded. This does not include
     * page navigation within the current document or
     * asynchronous resource loads.
     */
    oncontentload: ((ev: WebView$Events.Events$ContentLoadEvent) => any) | null;

    /**
     * Fired when the guest window attempts to open a modal dialog via
     * window.alert, window.confirm, or window.prompt.
     * Handling this event will block the guest process until each event listener
     * returns or the dialog object becomes unreachable
     * (if preventDefault() was called.)
     */
    ondialog: ((ev: WebView$Events.Events$DialogEvent) => any) | null;

    /**
     * Fired when the process rendering the guest web content has exited.
     */
    onexit: ((ev: WebView$Events.Events$ExitEvent) => any) | null;

    /**
     * Fired when new find results are available for an active find request.
     * This might happen multiple times for a single find request as matches are found.
     */
    onfindupdate: ((ev: WebView$Events.Events$FindUpdateEvent) => any) | null;

    /**
     * Fired when a top-level load has aborted without committing.
     * An error message will be printed to the console unless the
     * event is default-prevented.
     *
     * Note: When a resource load is aborted, a loadabort event will
     * eventually be followed by a loadstop event, even if all
     * committed loads since the last loadstop event (if any) were aborted.
     *
     * Note: When the load of either an about URL or a JavaScript URL is aborted,
     * loadabort will be fired and then the webview will be navigated to 'about:blank'.
     */
    onloadabort: ((ev: WebView$Events.Events$LoadAbortEvent) => any) | null;

    /**
     * Fired when a load has committed. This includes navigation within the current document
     * as well as subframe document-level loads, but does not include asynchronous resource loads.
     */
    onloadcommit: ((ev: WebView$Events.Events$LoadCommitEvent) => any) | null;

    /**
     * Fired when a top-level load request has redirected to a different URL.
     */
    onloadredirect:
      | ((ev: WebView$Events.Events$LoadRedirectEvent) => any)
      | null;

    /**
     * Fired when all frame-level loads in a guest page (including all its subframes)
     * have completed. This includes navigation within the current document as well
     * as subframe document-level loads, but does not include asynchronous resource
     * loads. This event fires every time the number of document-level loads
     * transitions from one (or more) to zero. For example, if a page that has
     * already finished loading (i.e., loadstop already fired once) creates a new
     * iframe which loads a page, then a second loadstop will fire when the iframe
     * page load completes. This pattern is commonly observed on pages that load ads.
     *
     * Note: When a committed load is aborted, a loadstop event will eventually
     * follow a loadabort event, even if all committed loads since the last loadstop
     * event (if any) were aborted.
     */
    onloadstop: ((ev: WebView$Events.Events$LoadStopEvent) => any) | null;

    /**
     * Fired when the guest page attempts to open a new browser window.
     */
    onnewwwindow: ((ev: WebView$Events.Events$NewWindowEvent) => any) | null;

    /**
     * Fired when the guest page needs to request special permission from the embedder.
     */
    onpermissionrequest:
      | ((ev: WebView$Events.Events$PermissionRequestEvent) => any)
      | null;

    /**
     * Fired when the process rendering the guest web content has become responsive again after being unresponsive.
     */
    onresponsive: ((ev: WebView$Events.Events$ResponsiveEvent) => any) | null;

    /**
 * @requires autosize: enabled
Fired when the embedded web content has been resized via autosize.
Only fires if autosize is enabled.
 */
    onsizechanged: ((ev: WebView$Events.Events$SizeChangedEvent) => any) | null;

    /**
     * Fired when the process rendering the guest web content has become unresponsive.
     * This event will be generated once with a matching responsive event if the guest
     * begins to respond again.
     */
    onunresponsive:
      | ((ev: WebView$Events.Events$UnresponsiveEvent) => any)
      | null;

    /**
     * Fired when the page's zoom changes.
     */
    onzoomchange: ((ev: WebView$Events.Events$ZoomChangeEvent) => any) | null;
    addEventListener<K: $Keys<WebView$Events.Events$WebViewElementEventMap>>(
      type: K,
      listener: (
        ev: $ElementType<WebView$Events.Events$WebViewElementEventMap, K>
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K: $Keys<WebView$Events.Events$WebViewElementEventMap>>(
      type: K,
      listener: (
        ev: $ElementType<WebView$Events.Events$WebViewElementEventMap, K>
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;

    /**
     * Maximum height
     */
    maxheight: number;

    /**
     * Minimum height
     */
    minheight: number;

    /**
     * Maximum width
     */
    maxwidth: number;

    /**
     * Minimum width
     */
    minwidth: number;

    /**
     * Allow scaling?
     * @default false
     */
    allowscaling: boolean;
  }
  declare type Events$WebViewElementEventMap = {
    close: Events$CloseEvent,
    consolemessage: Events$ConsoleMessageEvent,
    contentload: Events$ContentLoadEvent,
    dialog: Events$DialogEvent,
    exit: Events$ExitEvent,
    findupdate: Events$FindUpdateEvent,
    loadabort: Events$LoadAbortEvent,
    loadcommit: Events$LoadCommitEvent,
    loadredirect: Events$LoadRedirectEvent,
    loadstart: Events$LoadStartEvent,
    loadstop: Events$LoadStopEvent,
    newwindow: Events$NewWindowEvent,
    permissionrequest: Events$PermissionRequestEvent,
    responsive: Events$ResponsiveEvent,
    sizechanged: Events$SizeChangedEvent,
    unresponsive: Events$UnresponsiveEvent,
    zoomchange: Events$ZoomChangeEvent
  } & HTMLElementEventMap;

  /**
   * Fired when the guest window attempts to close itself.
   * The following example code navigates the webview to about:blank when the guest attempts to close itself.
   */
  declare type Events$CloseEvent = {} & chrome$Event;

  declare type Events$ConsoleMessageLevel = -1 | 0 | 1 | 2;

  /**
   * Fired when the guest window logs a console message.
   * The following example code forwards all log messages to the embedder's console without regard for log level or other properties.
   */
  declare type Events$ConsoleMessageEvent = {
    /**
     * The severity level of the log message.
     * Ranges from -1 to 2.
     * LOG_VERBOSE (console.debug) = -1
     * LOG_INFO (console.log, console.info) = 0
     * LOG_WARNING (console.warn) = 1
     * LOG_ERROR (console.error) = 2
     */
    level: Events$ConsoleMessageLevel,

    /**
     * The logged message contents.
     */
    message: string,

    /**
     * The line number of the message source.
     */
    line: chrome$chrome$integer,

    /**
     * A string identifying the resource which logged the message.
     */
    sourceId: string
  } & chrome$Event;

  /**
 * Fired when the guest window fires a load event, i.e., when a new document is loaded. This does not include page navigation within the current document or asynchronous resource loads.
 * The following example code modifies the default font size of the guest's body element after the page loads:
 * @example webview.addEventListener('contentload', function() {
webview.executeScript({ code: 'document.body.style.fontSize = '42px'' })
});
 */
  declare type Events$ContentLoadEvent = {} & chrome$Event;

  /**
   * String indicating what type of abort occurred.
   * This string is *not* guaranteed to remain backwards compatible between releases.
   * You must not parse and act based upon its content. It is also possible that,
   * in some cases, an error not listed here could be reported.
   */
  declare type Events$LoadAbortReason =
    | "ERR_ABORTED"
    | "ERR_INVALID_URL"
    | "ERR_DISALLOWED_URL_SCHEME"
    | "ERR_BLOCKED_BY_CLIENT"
    | "ERR_ADDRESS_UNREACHABLE"
    | "ERR_EMPTY_RESPONSE"
    | "ERR_FILE_NOT_FOUND"
    | "ERR_UNKNOWN_URL_SCHEME";

  /**
   * The type of modal dialog requested by the guest.
   */
  declare type Events$DialogMessageType = "alert" | "confirm" | "prompt";

  /**
   * Fired when the guest window attempts to open a modal dialog via window.alert, window.confirm, or window.prompt.
   * Handling this event will block the guest process until each event listener returns or the dialog object becomes unreachable (if preventDefault() was called.)
   * The default behavior is to cancel the dialog.
   */
  declare type Events$DialogEvent = {
    /**
     * The type of modal dialog requested by the guest.
     */
    messageType: Events$DialogMessageType,

    /**
     * The text the guest attempted to display in the modal dialog.
     */
    messageText: string,

    /**
     * An interface that can be used to respond to the guest's modal request.
     */
    dialog: WebView$DialogController
  } & chrome$Event;

  /**
   * String indicating the reason for the exit.
   */
  declare type Events$ExitEventReason =
    | "normal"
    | "abnormal"
    | "crash"
    | "kill";

  /**
   * Fired when the process rendering the guest web content has exited.
   */
  declare type Events$ExitEvent = {
    /**
     * Chrome's internal ID of the process that exited.
     */
    processID: chrome$chrome$integer,

    /**
     * String indicating the reason for the exit.
     */
    reason: Events$ExitEventReason
  } & chrome$Event;

  /**
   * Fired when new find results are available for an active find request.
   * This might happen multiple times for a single find request as matches are found.
   */
  declare type Events$FindUpdateEvent = {
    /**
     * The string that is being searched for in the page.
     */
    searchText: string,

    /**
     * The number of matches found for searchText on the page so far.
     */
    numberOfMatches: chrome$chrome$integer,

    /**
     * The ordinal number of the current active match,
     * if it has been found. This will be 0 until then.
     */
    activeMatchOrdinal: chrome$chrome$integer,

    /**
     * Describes a rectangle around the active match,
     * if it has been found, in screen coordinates.
     */
    selectionRect: WebView$SelectionRect,

    /**
     * Indicates whether the find request was canceled.
     */
    canceled: boolean,

    /**
     * Indicates that all find requests have completed
     * and that no more findupdate events will be fired
     * until more find requests are made.
     */
    finalUpdate: string
  } & chrome$Event;

  /**
   * Fired when a top-level load has aborted without committing.
   * An error message will be printed to the console unless the event is default-prevented.
   *
   * **Note:**
   * When a resource load is aborted, a loadabort event will eventually be followed by a loadstop event,
   * even if all committed loads since the last loadstop event (if any) were aborted.
   *
   * **Note:**
   * When the load of either an about URL or a JavaScript URL is aborted,
   * loadabort will be fired and then the webview will be navigated to 'about:blank'.
   */
  declare type Events$LoadAbortEvent = {
    /**
     * Requested URL.
     */
    url: string,

    /**
     * Whether the load was top-level or in a subframe.
     */
    isTopLevel: boolean,

    /**
     * Unique chrome.integer ID for the type of abort.
     * Note that this ID is `not` guaranteed to
     * remain backwards compatible between releases.
     * You must not act based upon this specific chrome.integer.
     */
    code: chrome$chrome$integer,

    /**
     * String indicating what type of abort occurred.
     * This string is `not` guaranteed to remain
     * backwards compatible between releases.
     * You must not parse and act based upon its content.
     * It is also possible that, in some cases,
     * an error not listed here could be reported.
     */
    reason: Events$LoadAbortReason
  } & chrome$Event;

  /**
   * Fired when a load has committed. This includes navigation within the current document as well as subframe document-level loads, but does not include asynchronous resource loads.
   */
  declare type Events$LoadCommitEvent = {
    /**
     * The URL that committed.
     */
    url: string,

    /**
     * Whether the load is top-level or in a subframe.
     */
    isTopLevel: boolean
  } & chrome$Event;

  /**
   * Fired when a top-level load request has redirected to a different URL.
   */
  declare interface Events$LoadRedirectEvent {
    /**
     * The requested URL before the redirect.
     */
    oldUrl: string;

    /**
     * The new URL after the redirect.
     */
    newUrl: string;

    /**
     * Whether or not the redirect happened at top-level or in a subframe.
     */
    isTopLevel: boolean;
  }

  /**
   * Fired when a load has begun.
   */
  declare type Events$LoadStartEvent = {
    /**
     * Requested URL.
     */
    url: string,

    /**
     * Whether the load is top-level or in a subframe.
     */
    isTopLevel: boolean
  } & chrome$Event;

  /**
   * Fired when all frame-level loads in a guest page (including all its subframes) have completed.
   * This includes navigation within the current document as well as subframe document-level loads,
   * but does not include asynchronous resource loads.
   *
   * This event fires every time the number of document-level loads transitions from one (or more) to zero.
   * For example, if a page that has already finished loading (i.e., loadstop already fired once) creates
   * a new iframe which loads a page, then a second loadstop will fire when the iframe page load completes.
   *
   * This pattern is commonly observed on pages that load ads.
   *
   * **Note:**
   * When a committed load is aborted, a loadstop event will eventually follow a loadabort event,
   * even if all committed loads since the last loadstop event (if any) were aborted.
   */
  declare type Events$LoadStopEvent = {} & chrome$Event;

  /**
   * The requested disposition of the new window.
   */
  declare type Events$WindowOpenDisposition =
    | "ignore"
    | "save_to_disk"
    | "current_tab"
    | "new_background_tab"
    | "new_foreground_tab"
    | "new_window"
    | "new_popup";

  /**
 * Fired when the guest page attempts to open a new browser window.
 * The following example code will create and navigate a new webview in the embedder for each requested new window:
 * @example webview.addEventListener('newwindow', function(e) {
const newWebview = document.createElement('webview');
document.body.appendChild(newWebview);
e.window.attach(newWebview);
});
 */
  declare type Events$NewWindowEvent = {
    /**
     * An interface that can be used to either attach the requested
     * target page to an existing webview element or explicitly
     * discard the request.
     */
    app$window: WebView$NewWindow,

    /**
     * The target URL requested for the new window.
     */
    targetUrl: string,

    /**
     * The initial width requested for the new window.
     */
    initialWidth: chrome$chrome$integer,

    /**
     * The initial height requested for the new window.
     */
    initialHeight: chrome$chrome$integer,

    /**
     * The requested name of the new window.
     */
    name: string,

    /**
     * The requested disposition of the new window.
     */
    windowOpenDisposition: Events$WindowOpenDisposition
  } & chrome$Event;

  declare type Events$RequestedPermission =
    | "media"
    | "geolocation"
    | "pointerLock"
    | "download"
    | "loadplugin"
    | "filesystem"
    | "fullscreen";

  /**
 * @requires `Permissions:` `audioCapture` and/or `videoCapture`
 * @description Fired when the guest page needs to request special permission from the embedder.

The following example code will grant the guest page access to the `webkitGetUserMedia` API.
Note that an app using this example code must itself specify `audioCapture` and/or `videoCapture`
manifest permissions:
 * @example webview.addEventListener('permissionrequest', (e) => { if (e.permission === 'media') e.request.allow(); });
 */
  declare type Events$PermissionRequestEvent = {
    /**
     * The type of permission being requested.
     */
    permission: Events$RequestedPermission,

    /**
     * An object which holds details of the requested permission.
     */
    permissions$request: WebView$PermissionRequestHandler
  } & chrome$Event;

  /**
 * Fired when the process rendering the guest web content has become responsive again
 * after being unresponsive.
 * 
 * The following example code will fade the `webview` element in or out as it becomes
 * responsive or unresponsive:
 * @example webview.style.webkitTransition = 'opacity 250ms';
webview.addEventListener('unresponsive', () => {
webview.style.opacity = '0.5';
});
webview.addEventListener('responsive', () => {
webview.style.opacity = '1';
});
 */
  declare type Events$ResponsiveEvent = {
    /**
     * Chrome's internal ID of the process that became responsive.
     */
    processID: chrome$chrome$integer
  } & chrome$Event;

  /**
   * Fired when the embedded web content has been resized via autosize.
   * Only fires if autosize is enabled.
   */
  declare type Events$SizeChangedEvent = {
    /**
     * Old width of embedded web content.
     */
    oldWidth: chrome$chrome$integer,

    /**
     * Old height of embedded web content.
     */
    oldHeight: chrome$chrome$integer,

    /**
     * New width of embedded web content.
     */
    newWidth: chrome$chrome$integer,

    /**
     * New height of embedded web content.
     */
    newHeight: chrome$chrome$integer
  } & chrome$Event;

  /**
   * Fired when the process rendering the guest web content has become unresponsive.
   * This event will be generated once with a matching responsive event if the guest begins to respond again.
   */
  declare type Events$UnresponsiveEvent = {
    /**
     * Chrome's internal ID of the process that has become unresponsive.
     */
    processID: chrome$chrome$integer
  } & chrome$Event;

  /**
   * Fired when the page's zoom changes.
   */
  declare type Events$ZoomChangeEvent = {
    /**
     * The page's previous zoom factor.
     */
    oldzoomFactor: chrome$chrome$double,

    /**
     * The new zoom factor that the page was zoomed to.
     */
    newzoomFactor: chrome$chrome$double
  } & chrome$Event;

  /**
   * Options that determine what data should be cleared by *clearData*
   */
  declare interface WebView$ClearDataOptions {
    /**
     * Clear data accumulated on or after this date,
     * represented in milliseconds since the epoch
     * (accessible via the getTime method of the JavaScript Date object).
     * If absent, defaults to 0 (which would remove all browsing data).
     * @default 0
     */
    since?: chrome$chrome$integer;
  }

  /**
   * Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
   */
  declare interface WebView$InjectDetails {
    /**
     * JavaScript or CSS code to inject.
     *
     * **Warning**
     * Be careful using the *code* parameter.
     * Incorrect use of it may open your app to
     * cross site scripting attacks.
     * @see [More information]{@link https://en.wikipedia.org/wiki/Cross-site_scripting}
     */
    code?: string;

    /**
     * JavaScript or CSS file to inject.
     */
    file?: string;

    /**
     * JavaScript or CSS code to inject.
     * Warning: Be careful using the code parameter.
     * Incorrect use of it may open your app to xss attacks.
     */
    code?: string;

    /**
     * JavaScript or CSS file to inject.
     */
    file?: string;
  }

  /**
   * WebView element from html
   * A set of data types. Missing properties are interpreted as false.
   */
  declare interface WebView$ClearDataTypeSet {
    /**
     * Websites' appcaches.
     */
    appcache?: boolean;

    /**
     * The browser's cache. Note: when removing data, this clears the entire cache; it is not limited to the range you specify.
     * @since Chrome 43.
     */
    cache?: boolean;

    /**
     * The partition's cookies.
     */
    cookies?: boolean;

    /**
     * The partition's session cookies.
     */
    sessionCookies?: boolean;

    /**
     * The partition's persistent cookies.
     */
    persistentCookies?: boolean;

    /**
     * Websites' filesystems.
     */
    fileSystems?: boolean;

    /**
     * Websites' IndexedDB data.
     */
    indexedDB?: boolean;

    /**
     * Websites' local storage data.
     */
    localStorage?: boolean;

    /**
     * Websites' WebSQL data.
     */
    webSQL?: boolean;
  }

  /**
   * The different contexts a menu can appear in.
   * Specifying 'all' is equivalent to the combination of all other contexts.
   */
  declare type WebView$ContextType =
    | "all"
    | "page"
    | "frame"
    | "selection"
    | "link"
    | "editable"
    | "image"
    | "video"
    | "audio";

  /**
   * The type of injection item: code or a set of files.
   */
  declare interface WebView$InjectionItems {
    /**
     * JavaScript code or CSS to be injected into matching pages.
     */
    code?: string;

    /**
     * The list of JavaScript or CSS files to be injected into matching pages.
     * These are injected in the order they appear in this array.
     */
    files?: any[];
  }

  /**
   * Details of the content script to inject. *
   */
  declare interface WebView$ContentScriptDetails {
    /**
     * The name of the content script to inject.
     */
    name: string;

    /**
     * Specifies which pages this content script will be injected into.
     */
    matches: string[];

    /**
     * Excludes pages that this content script would otherwise be injected into.
     */
    exclude_matches?: string[];

    /**
     * JavaScript code or CSS to be injected into matching pages.
     */
    code?: string;

    /**
     * Whether to insert the content script on about:blank and about:srcdoc.
     * Content scripts will only be injected on pages when their inherit URL
     * is matched by one of the declared patterns in the matches field.
     * The inherit URL is the URL of the document that created the frame or window.
     * Content scripts cannot be inserted in sandboxed frames.
     */
    match_about_blank?: boolean;

    /**
     * The CSS code or a list of CSS files to be injected into matching pages.
     * These are injected in the order they appear,
     * before any DOM is constructed or displayed for the page.
     */
    css?: WebView$InjectionItems;

    /**
     * The JavaScript code or a list of JavaScript files to be injected into matching pages.
     * These are injected in the order they appear.
     */
    js?: WebView$InjectionItems;

    /**
     * The soonest that the JavaScript or CSS will be injected into the tab.
     * Defaults to 'document_idle'.
     */
    run_at?: chrome$extensionTypes.extensionTypes$RunAt;

    /**
     * If all_frames is true, this implies that the JavaScript or CSS should be injected into all frames of current page.
     * By default, all_frames is false and the JavaScript or CSS is only injected into the top frame.
     * @default false
     */
    all_frames?: boolean;

    /**
     * Applied after matches to include only those URLs that also match this glob.
     * Intended to emulate the @include Greasemonkey keyword.
     */
    include_globs?: string[];

    /**
     * Applied after matches to exclude URLs that match this glob.
     * Intended to emulate the @exclude Greasemonkey keyword.
     */
    exclude_globs?: string[];
  }

  declare interface WebView$ContextMenuCreateProperties {
    /**
     * The type of menu item. Defaults to 'normal' if not specified.
     */
    type?: chrome$chrome$ToStringLiteral<typeof undefined>;

    /**
     * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
     */
    runtime$id?: string;

    /**
     * The text to be displayed in the item; this is -required- unless type is 'separator'.
     * When the context is 'selection', you can use %s within the string to show the selected text.
     * For example, if this parameter's value is 'Translate '%s' to Pig Latin' and the user selects
     * the word 'cool', the context menu item for the selection is 'Translate 'cool' to Pig Latin'.
     */
    title?: string;

    /**
     * The initial state of a checkbox or radio item:
     * true for selected and false for unselected.
     * Only one radio item can be selected at a time in a given group of radio items.
     */
    checked?: boolean;

    /**
     * List of contexts this menu item will appear in.
     * Defaults to ['page'] if not specified.
     */
    contexts?: any[];

    /**
     * A function that will be called back when the menu item is clicked.
     */
    onclick?: (info: any) => void;

    /**
     * The ID of a parent menu item; this makes the item a child of a previously added item.
     */
    parentId?: chrome$chrome$integer | string;

    /**
     * Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see <a href='match_patterns'>Match Patterns</a>.
     */
    documentUrlPatterns?: any[];

    /**
     * Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.
     */
    targetUrlPatterns?: any[];

    /**
     * Whether this context menu item is enabled or disabled. Defaults to true.
     */
    enabled?: boolean;
  }

  declare interface WebView$ContextMenuUpdateProperties {
    /**
     * The type of menu item.
     */
    type?: WebView$WebView$ContextType;

    /**
     * The text to be displayed in the item
     */
    title?: string;

    /**
     * The state of a checkbox or radio item: true for selected and false for unselected.
     * Only one radio item can be selected at a time in a given group of radio items.
     */
    checked?: boolean;

    /**
     * List of contexts this menu item will appear in.
     */
    contexts?: any[];

    /**
     * A function that will be called back when the menu item is clicked.
     * @param callback
     */
    onclick?: (info: any) => void;

    /**
     * The ID of a parent menu item; this makes the item a child of a previously added item. <em>Note:</em> You cannot change an item to be a child of one of its own descendants.
     */
    parentId?: chrome$chrome$integer | string;

    /**
     * Lets you restrict the item to apply only to documents whose URL matches one of the given patterns.
     * (This applies to frames as well.)
     */
    documentUrlPatterns?: any[];

    /**
     * Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.
     */
    targetUrlPatterns?: any[];

    /**
     * Whether this context menu item is enabled or disabled.
     */
    enabled?: boolean;
  }

  declare interface WebView$OnShowEvent {
    /**
     * Call this to prevent showing the context menu.
     */
    preventDefault: () => void;
  }

  declare interface WebView$ContextMenus {
    /**
     * Creates a new context menu item. Note that if an error occurs during creation,
     * you may not find out until the creation callback fires
     * (the details will be in chrome.runtime.lastError).
     * @param createProperties The properties used to create the item
     * @param callback
     */
    udp$create(
      createProperties: { [key: string]: any },
      callback?: () => void
    ): void;

    /**
     * Updates a previously created context menu item.
     * @param id The ID of the item to update.
     * @param updateProperties The properties to update. Accepts the same values as the create function.
     * @param callback
     */
    udp$update(
      runtime$id: chrome$chrome$integer | string,
      updateProperties: { [key: string]: any },
      callback?: () => void
    ): void;

    /**
     * Removes a context menu item.
     * @param menuItemId The ID of the context menu item to remove.
     * @param callback
     */
    permissions$remove(
      menuItemId: chrome$chrome$integer | string,
      callback?: () => void
    ): void;

    /**
     * Removes all context menu items added to this webview.
     * @param callback
     */
    contextMenus$removeAll(callback?: () => void): void;

    /**
     * Fired before showing a context menu on this webview.
     * Can be used to disable this context menu by calling event.preventDefault().
     */
    onShow: chrome$events.chrome$Event<(event: WebView$OnShowEvent) => void>;
  }

  /**
   * Messaging handle to a guest window.
   */
  declare interface WebView$ContentWindow {
    /**
     * Posts a message to the embedded web content as long as the embedded
     * content is displaying a page from the target origin. This method is
     * available once the page has completed loading. Listen for the
     * contentload event and then call the method.
     *
     * The guest will be able to send replies to the embedder by posting message
     * to event.source on the message event it receives.
     *
     * This API is identical to the HTML5 postMessage API for communication
     * between web pages. The embedder may listen for replies by adding
     * a message event listener to its own frame.
     * @param message Message object to send to the guest.
     * @param targetOrigin Specifies what the origin of the guest window must be for the event to be dispatched.
     */
    postMessage(message: any, targetOrigin: string): void;
  }

  /**
   * Interface attached to dialog DOM events.
   */
  declare interface WebView$DialogController {
    /**
     * Accept the dialog. Equivalent to clicking OK in an alert, confirm, or prompt dialog.
     * @param response The response string to provide to the guest when accepting a prompt dialog.
     */
    ok(response?: string): void;

    /**
     * Reject the dialog. Equivalent to clicking Cancel in a confirm or prompt dialog.
     */
    cancel(): void;
  }

  /**
   * Contains all of the results of the find request.
   */
  declare interface WebView$FindCallbackResults {
    /**
     * The number of times searchText was matched on the page.
     */
    numberOfMatches: chrome$chrome$integer;

    /**
     * The ordinal number of the current match.
     */
    activeMatchOrdinal: chrome$chrome$integer;

    /**
     * Describes a rectangle around the active match in screen coordinates.
     */
    selectionRect: WebView$SelectionRect;

    /**
     * Indicates whether this find request was canceled.
     */
    canceled: boolean;
  }

  declare interface WebView$FindOptions {
    /**
     * Flag to find matches in reverse order.
     * @default false
     */
    backward?: boolean;

    /**
     * Flag to match with case-sensitivity.
     * @default false
     */
    matchCase?: boolean;
  }

  declare interface WebView$NewWindow {
    /**
     * Attach the requested target page to an existing webview element.
     * @param webview The webview element to which the target page should be attached.
     */
    attach(webview: HTMLWebViewElement): void;

    /**
     * Cancel the new window request.
     */
    discard(): void;
  }

  declare interface WebView$PermissionRequestHandler {
    /**
     * Allow the permission request.
     */
    allow(): void;

    /**
     * Deny the permission request. This is the default behavior if allow is not called.
     */
    deny(): void;
  }

  /**
   * Describes a rectangle in screen coordinates.
   * The containment semantics are array-like; that is, the coordinate (left, top) is considered to be contained by the rectangle,
   * but the coordinate (left + width, top) is not.
   */
  declare interface WebView$SelectionRect {
    /**
     * Distance from the left edge of the screen to the left edge of the rectangle.
     */
    left: chrome$chrome$integer;

    /**
     * Distance from the top edge of the screen to the top edge of the rectangle.
     */
    top: chrome$chrome$integer;

    /**
     * Width of the rectangle.
     */
    width: chrome$chrome$integer;

    /**
     * Height of the rectangle.
     */
    height: chrome$chrome$integer;
  }

  /**
   * An HTTP Header, represented as an object containing a key and either a value or a binaryValue.
   */
  declare interface WebView$HttpHeader {
    name: string;
    value?: string;
    binaryValue?: ArrayBuffer;
  }

  declare interface WebView$ResourceRequest {
    url: string;

    /**
     * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
     */
    requestId: string;

    /**
     * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (type is main_frame or sub_frame), frameId indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
     */
    frameId: chrome$chrome$integer;

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */
    parentFrameId: chrome$chrome$integer;

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */
    tabId: chrome$chrome$integer;

    /**
     * How the requested resource will be used.
     */
    type: chrome$webRequest.webRequest$ResourceType;

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */
    timeStamp: chrome$chrome$double;

    /**
     * The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used.
     * @since Chrome 63.
     */
    initiator?: string;
  }

  declare type WebView$WebRequestDetails = {
    /**
     * Standard HTTP method.
     */
    method: string
  } & WebView$ResourceRequest;

  declare type WebView$WebRequestHeadersDetails = {
    /**
     * Optional. The HTTP request headers that are going to be sent out with this request.
     */
    requestHeaders?: WebView$HttpHeader[]
  } & WebView$WebRequestDetails;

  declare type WebView$WebRequestBodyDetails = {
    /**
     * Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'.
     * @since Chrome 23.
     */
    requestBody: WebView$WebRequestBody
  } & WebView$WebRequestDetails;

  /**
   * Contains data uploaded in a URL request.
   * @since Chrome 23.
   */
  declare interface WebView$UploadData {
    /**
     * Optional. An ArrayBuffer with a copy of the data.
     */
    bytes?: ArrayBuffer;

    /**
     * Optional. A string with the file's path and name.
     */
    file?: string;
  }

  declare interface WebView$WebRequestBody {
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
    raw?: WebView$UploadData[];
  }

  declare type WebView$WebRequestFullDetails = {} & WebView$WebRequestHeadersDetails &
    WebView$WebRequestBodyDetails;

  declare type WebView$WebResponseDetails = {
    /**
     * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line).
     */
    statusLine: string,

    /**
     * Standard HTTP status code returned by the server.
     * @since Chrome 43.
     */
    statusCode: chrome$chrome$integer
  } & WebView$ResourceRequest;

  declare type WebView$WebResponseHeadersDetails = {
    /**
     * Optional. The HTTP response headers that have been received with this response.
     */
    responseHeaders?: WebView$HttpHeader[],

    /**
     * standard HTTP method i.e. GET, POST, PUT, etc.
     */
    method: string
  } & WebView$WebResponseDetails;

  declare type WebView$WebResponseCacheDetails = {
    /**
     * Optional.
     * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
     */
    ip?: string,

    /**
     * Indicates if this response was fetched from disk cache.
     */
    fromCache: boolean
  } & WebView$WebResponseHeadersDetails;

  declare type WebView$WebRedirectionResponseDetails = {
    /**
     * The new URL.
     */
    redirectUrl: string
  } & WebView$WebResponseCacheDetails;

  /**
   * An object describing filters to apply to webRequest events.
   */
  declare interface WebView$RequestFilter {
    /**
     * Optional.
     */
    tabId?: chrome$chrome$integer;

    /**
     * A list of request types. Requests that cannot match any of the types will be filtered out.
     */
    types?: chrome$webRequest.webRequest$ResourceType[];

    /**
     * A list of URLs or URL patterns. Requests that cannot match any of the URLs will be filtered out.
     */
    urls: string[];

    /**
     * Optional.
     */
    windowId?: chrome$chrome$integer;
  }

  declare interface WebView$AuthCredentials {
    username: string;
    password: string;
  }

  /**
   * Returns value for event handlers that have the 'blocking' extraInfoSpec applied. Allows the event handler to modify network requests.
   */
  declare interface WebView$BlockingResponse {
    /**
     * If true, the request is cancelled.
     * Used in onBeforeRequest, this prevents the request from being sent.
     */
    cancel?: boolean;

    /**
     * Only used as a response to the onBeforeRequest and onHeadersReceived events.
     * If set, the original request is prevented from being sent/completed and is
     * instead redirected to the given URL. Redirections to non-HTTP schemes such
     * as data: are allowed. Redirects initiated by a redirect action use the
     * original request method for the redirect, with one exception: If the
     * redirect is initiated at the onHeadersReceived stage, then the redirect
     * will be issued using the GET method.
     */
    redirectUrl?: string;

    /**
     * Only used as a response to the onHeadersReceived event.
     * If set, the server is assumed to have responded with these
     * response headers instead. Only return responseHeaders if you really
     * want to modify the headers in order to limit the number of conflicts
     * (only one extension may modify responseHeaders for each request).
     */
    responseHeaders?: WebView$HttpHeader[];

    /**
     * Only used as a response to the onAuthRequired event.
     * If set, the request is made using the supplied credentials.
     */
    authCredentials?: WebView$AuthCredentials;

    /**
     * Only used as a response to the onBeforeSendHeaders event.
     * If set, the request is made with these request headers instead.
     */
    requestHeaders?: WebView$HttpHeader[];
  }

  declare type WebView$WebAuthenticationChallengeDetails = {
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
    challenger: WebView$WebAuthChallenger,

    /**
     * True for Proxy-Authenticate, false for WWW-Authenticate.
     */
    isProxy: boolean
  } & WebView$WebResponseHeadersDetails;

  declare type WebView$WebRequestBodyEvent = {
    addListener(
      callback: (details: WebView$WebRequestBodyDetails) => void,
      filter?: WebView$RequestFilter,
      opt_extraInfoSpec?: string[]
    ): void
  } & undefined.chrome$Event<(details: WebView$WebRequestBodyDetails) => void>;

  declare type WebView$WebRequestHeadersEvent = {
    addListener(
      callback: (details: WebView$WebRequestHeadersDetails) => void,
      filter?: WebView$RequestFilter,
      opt_extraInfoSpec?: string[]
    ): void
  } & undefined.chrome$Event<
    (details: WebView$WebRequestHeadersDetails) => void
  >;

  declare type WebView$_WebResponseHeadersEvent<
    T: WebView$WebResponseHeadersDetails
  > = {
    addListener(
      callback: (details: T) => void,
      filter?: WebView$RequestFilter,
      opt_extraInfoSpec?: string[]
    ): void
  } & undefined.chrome$Event<(details: T) => void>;

  declare type WebView$WebResponseHeadersEvent = {} & WebView$_WebResponseHeadersEvent<WebView$WebResponseHeadersDetails>;

  declare type WebView$WebResponseCacheEvent = {} & WebView$_WebResponseHeadersEvent<WebView$WebResponseCacheDetails>;

  declare type WebView$WebRedirectionResponseEvent = {} & WebView$_WebResponseHeadersEvent<WebView$WebRedirectionResponseDetails>;

  declare type WebView$WebAuthenticationChallengeEvent = {
    addListener(
      callback: (
        details: WebView$WebAuthenticationChallengeDetails,
        callback?: (response: WebView$BlockingResponse) => void
      ) => void,
      filter?: WebView$RequestFilter,
      opt_extraInfoSpec?: string[]
    ): void
  } & undefined.chrome$Event<
    (
      details: WebView$WebAuthenticationChallengeDetails,
      callback?: (response: WebView$BlockingResponse) => void
    ) => void
  >;

  declare type WebView$WebResponseErrorEvent = {} & WebView$_WebResponseHeadersEvent<WebView$WebResponseErrorDetails>;

  declare type WebView$WebResponseErrorDetails = {
    /**
     * The error description. This string is not guaranteed to remain backwards compatible between releases. You must not parse and act based upon its content.
     */
    error: string
  } & WebView$WebResponseCacheDetails;

  declare interface WebView$WebAuthChallenger {
    host: string;
    port: chrome$chrome$integer;
  }

  /**
 * Interface which provides access to webRequest events on the guest page.
 * @see [chrome.webRequest]{@link http://developer.chrome.com/extensions/webRequest}
extensions API for details on webRequest life cycle and related concepts.

To illustrate how usage differs from the extensions webRequest API,
consider the following example code which blocks any guest requests
for URLs which match *://www.evil.com/*:
 * @example webview.request.onBeforeRequest.addListener(
function(details) { return {cancel: true}; }, {urls: ['*://www.evil.com/*']}, ['blocking']);
 * @description Additionally, this interface supports declarative webRequest rules through onRequest and onMessage events.
 * @see [Docs]{@link http://developer.chrome.com/extensions/declarativeWebRequest.htmldeclarativeWebRequest}
 * @description Note that conditions and actions for declarative webview webRequests should be instantiated
from their chrome.webViewRequest.* counterparts. The following example code declaratively
blocks all requests to 'example.com' on the webview myWebview:
 * @example const rule = { conditions: [ new chrome.webViewRequest.RequestMatcher({ url: { hostSuffix: 'example.com' } }) ], actions: [ new chrome.webViewRequest.CancelRequest() ] }; myWebview.request.onRequest.addRules([rule]);
 */
  declare interface WebView$WebRequestEventInterface {
    /**
     * Fired when a request is about to occur.
     */
    onBeforeRequest: WebView$WebRequestBodyEvent;

    /**
     * Fired before sending an HTTP request, once the request headers are available.
     * This may occur after a TCP connection is made to the server, but before any HTTP data is sent.
     */
    onBeforeSendHeaders: WebView$WebRequestHeadersEvent;

    /**
     * Fired just before a request is going to be sent to the server
     * (modifications of previous onBeforeSendHeaders callbacks
     * are visible by the time onSendHeaders is fired).
     */
    onSendHeaders: WebView$WebRequestHeadersEvent;

    /**
     * Fired when HTTP response headers of a request have been received.
     */
    onHeadersReceived: WebView$WebResponseHeadersEvent;

    /**
     * Fired when an authentication failure is received.
     * The listener has three options: it can provide authentication credentials,
     * it can cancel the request and display the error page, or it can take no
     * action on the challenge. If bad user credentials are provided, this may be
     * called multiple times for the same request.
     */
    onAuthRequired: WebView$WebAuthenticationChallengeEvent;

    /**
     * Fired when the first byte of the response body is received.
     * For HTTP requests, this means that the status line and
     * response headers are available.
     */
    onResponseStarted: WebView$WebResponseCacheEvent;

    /**
     * Fired when a server-initiated redirect is about to occur.
     */
    onBeforeRedirect: WebView$WebRedirectionResponseEvent;

    /**
     * Fired when a request is completed.
     */
    onCompleted: WebView$WebResponseCacheEvent;

    /**
     * Fired when an error occurs.
     */
    onErrorOccured: WebView$WebResponseErrorEvent;

    /**
     * Provides the Declarative Event API consisting of addRules, removeRules, and getRules.
     * This interface supports declarative webRequest rules through
     * **onRequest** and **onMessage** events.
     * @see [See declarativeWebRequest for API details.]{@link http://developer.chrome.com/extensions/declarativeWebRequest.html}
     */
    onRequest: chrome$webViewRequest.webViewRequest$OnRequestEvent;

    /**
     * This interface supports declarative webRequest rules through
     * **onRequest** and **onMessage** events.
     * @see [See declarativeWebRequest for API details.]{@link http://developer.chrome.com/extensions/declarativeWebRequest.html}
     */
    runtime$onMessage: chrome$webViewRequest.webViewRequest$OnMessageEvent;
  }

  /**
   * Defines the how zooming is handled in the webview.
   * Enum values:
   * 'per-origin'
   *    > Zoom changes will persist in the zoomed page's origin,
   *      i.e. all other webviews in the same partition that are
   *      navigated to that same origin will be zoomed as well.
   *      Moreover, per-origin zoom changes are saved with the origin,
   *      meaning that when navigating to other pages in the same origin,
   *      they will all be zoomed to the same zoom factor.
   * 'per-view'
   *    > Zoom changes only take effect in this webview,
   *      and zoom changes in other webviews will not affect
   *      the zooming of this webview. Also, per-view zoom
   *      changes are reset on navigation; navigating a webview
   *      will always load pages with their per-origin zoom factors
   *      (within the scope of the partition).
   * 'disabled'
   *    > Disables all zooming in the webview.
   *      The content will revert to the default zoom level,
   *      and all attempted zoom changes will be ignored.
   */
  declare type WebView$ZoomMode = "per-origin" | "per-view" | "disabled";
  declare var WebView: typeof HTMLWebViewElement;

  /**
   * Only warnings since:
   *   1. It's not possible as of now to override or remove something from *Window* or *Document*.
   *   2. It may also cause other unforseen consequences if it's removed (and if it was possible).
   * @see [Disallowed]
   * Chrome app - Web APIs
   * @see [Docs]{@link https://developer.chrome.com/apps/api_other}
   */
  declare interface ChromeWindow {
    /**
     * ❗ alert is not available in packaged apps. ❗
     * Work-around: Use a custom lightbox / popup.
     */
    alert(message?: any): void;

    /**
     * ❗ confirm is not available in packaged apps. ❗
     * Work-around: Use a custom lightbox / popup.
     */
    confirm(message?: string): boolean;

    /**
     * ❗ window.localStorage is not available in packaged apps. Use chrome.storage.local instead. ❗
     * ❗ window.location is not available in packaged apps. ❗
     * Links open up with the system web browser.
     */
    location: Location;

    /**
     * ❗ window.history is not available in packaged apps. ❗
     * Links open up with the system web browser.
     */
    +history: History;
    AudioContext: typeof AudioContext;
  }

  /**
   * ❗ iframes are not available in packaged apps, use webviews instead. ❗
   */
  declare interface HTMLIFrameElement {}

  /**
   * ❗ Modal dialogs are not available in packaged apps, use lightbox/popup instead. ❗
   */
  declare interface HTMLDialogElement {}
  declare interface HTMLElement {
    /**
 * @requires Permissions: 'app.window.fullscreen', 'app.window.fullscreen.overrideEsc'
 * @description In Chrome Apps, fullscreen is entered without prompting the user or providing
exit instructions. HTML5 fullscreen requires the app.window.fullscreen permission
in the manifest. In normal webpages, the browser intercepts the ESC key to exit
pointer lock ensuring a consistent escape method for users. That is also the
behavior in Chrome Apps unless the app.window.fullscreen.overrideEsc permission
is used to enable the app to call preventDefault on keydown and keyup events.

Then to exit fullscreen, the document exposes a method for that:
 * @example document.webkitExitFullscreen();
 */
    webkitRequestFullscreen(): void;

    /**
     * ❗ Unprefixed version are not available as of Chrome 68, in Chrome apps ❗
     */
    requestFullscreen(): Promise<void>;

    /**
     * ❗ Unprefixed version are not available as of Chrome 68, in Chrome apps ❗
     */
    exitrequestFullscreen(): void;

    /**
     * @requires Permissions: 'pointerLock'
     */
    requestPointerLock(): void;

    /**
     * @requires Permissions: 'pointerLock'
     */
    exitPointerLock(): void;
  }
  declare interface Navigator {
    /**
     * If you provide the 'geolocation' in your Chrome app it will allow the app to
     * use the proposed HTML5 geolocation API without prompting the user for permission.
     * @see Permissions: 'geolocation'
     */
    +geolocation: Geolocation;
  }
}
