declare module "firefox-webext-browser" {
  declare interface WebExtEventBase<
    TAddListener: (...args: any[]) => any,
    TCallback
  > {
    addListener: TAddListener;
    removeListener(cb: TCallback): void;
    hasListener(cb: TCallback): boolean;
  }
  declare type WebExtEvent<
    TCallback: (...args: any[]) => any
  > = WebExtEventBase<(callback: TCallback) => void, TCallback>;
  declare interface Window {
    browser: typeof browser;
  }

  declare var npm$namespace$browser: {
    alarms: typeof npm$namespace$browser$alarms,
    browserSettings: typeof npm$namespace$browser$browserSettings,
    clipboard: typeof npm$namespace$browser$clipboard,
    contentScripts: typeof npm$namespace$browser$contentScripts,
    contextualIdentities: typeof npm$namespace$browser$contextualIdentities,
    cookies: typeof npm$namespace$browser$cookies,
    dns: typeof npm$namespace$browser$dns,
    downloads: typeof npm$namespace$browser$downloads,
    extension: typeof npm$namespace$browser$extension,
    i18n: typeof npm$namespace$browser$i18n,
    identity: typeof npm$namespace$browser$identity,
    idle: typeof npm$namespace$browser$idle,
    management: typeof npm$namespace$browser$management,
    notifications: typeof npm$namespace$browser$notifications,
    permissions: typeof npm$namespace$browser$permissions,
    proxy: typeof npm$namespace$browser$proxy,
    runtime: typeof npm$namespace$browser$runtime,
    storage: typeof npm$namespace$browser$storage,
    telemetry: typeof npm$namespace$browser$telemetry,
    theme: typeof npm$namespace$browser$theme,
    topSites: typeof npm$namespace$browser$topSites,
    userScripts: typeof npm$namespace$browser$userScripts,
    webNavigation: typeof npm$namespace$browser$webNavigation,
    webRequest: typeof npm$namespace$browser$webRequest,
    bookmarks: typeof npm$namespace$browser$bookmarks,
    browserAction: typeof npm$namespace$browser$browserAction,
    browsingData: typeof npm$namespace$browser$browsingData,
    commands: typeof npm$namespace$browser$commands,
    find: typeof npm$namespace$browser$find,
    geckoProfiler: typeof npm$namespace$browser$geckoProfiler,
    history: typeof npm$namespace$browser$history,
    contextMenus: typeof npm$namespace$browser$contextMenus,
    menus: typeof npm$namespace$browser$menus,
    omnibox: typeof npm$namespace$browser$omnibox,
    pageAction: typeof npm$namespace$browser$pageAction,
    pkcs11: typeof npm$namespace$browser$pkcs11,
    search: typeof npm$namespace$browser$search,
    sessions: typeof npm$namespace$browser$sessions,
    sidebarAction: typeof npm$namespace$browser$sidebarAction,
    tabs: typeof npm$namespace$browser$tabs,
    windows: typeof npm$namespace$browser$windows
  };

  declare var npm$namespace$browser$alarms: {
    create: typeof browser$alarms$create,
    get: typeof browser$alarms$get,
    getAll: typeof browser$alarms$getAll,
    clear: typeof browser$alarms$clear,
    clearAll: typeof browser$alarms$clearAll,
    onAlarm: typeof browser$alarms$onAlarm
  };
  declare interface browser$alarms$Alarm {
    /**
     * Name of this alarm.
     */
    name: string;

    /**
     * Time when the alarm is scheduled to fire, in milliseconds past the epoch.
     */
    scheduledTime: number;

    /**
     * When present, signals that the alarm triggers periodically after so many minutes.
     */
    periodInMinutes?: number;
  }

  /**
   * Creates an alarm. After the delay is expired, the onAlarm event is fired. If there is another alarm with the
   * same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
   * @param alarmInfo Details about the alarm. The alarm first fires either at 'when' milliseconds past the epoch (if
   * 'when' is provided), after 'delayInMinutes' minutes from the current time (if 'delayInMinutes' is provided
   * instead), or after 'periodInMinutes' minutes from the current time (if only 'periodInMinutes' is provided).
   * Users should never provide both 'when' and 'delayInMinutes'. If 'periodInMinutes' is provided, then the
   * alarm recurs repeatedly after that many minutes.
   */
  declare function browser$alarms$create(alarmInfo: {
    /**
     * Time when the alarm is scheduled to first fire, in milliseconds past the epoch.
     */
    when?: number,

    /**
     * Number of minutes from the current time after which the alarm should first fire.
     */
    delayInMinutes?: number,

    /**
     * Number of minutes after which the alarm should recur repeatedly.
     */
    periodInMinutes?: number
  }): void;

  /**
   * Creates an alarm. After the delay is expired, the onAlarm event is fired. If there is another alarm with the
   * same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
   * @param name Optional name to identify this alarm. Defaults to the empty string.
   * @param alarmInfo Details about the alarm. The alarm first fires either at 'when' milliseconds past the epoch (if
   * 'when' is provided), after 'delayInMinutes' minutes from the current time (if 'delayInMinutes' is provided
   * instead), or after 'periodInMinutes' minutes from the current time (if only 'periodInMinutes' is provided).
   * Users should never provide both 'when' and 'delayInMinutes'. If 'periodInMinutes' is provided, then the
   * alarm recurs repeatedly after that many minutes.
   */
  declare function browser$alarms$create(
    name: string,
    alarmInfo: {
      /**
       * Time when the alarm is scheduled to first fire, in milliseconds past the epoch.
       */
      when?: number,

      /**
       * Number of minutes from the current time after which the alarm should first fire.
       */
      delayInMinutes?: number,

      /**
       * Number of minutes after which the alarm should recur repeatedly.
       */
      periodInMinutes?: number
    }
  ): void;

  /**
   * Retrieves details about the specified alarm.
   * @param name The name of the alarm to get. Defaults to the empty string.
   */
  declare function browser$alarms$get(
    name?: string
  ): Promise<browser$alarms$Alarm>;

  /**
   * Gets an array of all the alarms.
   */
  declare function browser$alarms$getAll(): Promise<browser$alarms$Alarm[]>;

  /**
   * Clears the alarm with the given name.
   * @param name The name of the alarm to clear. Defaults to the empty string.
   */
  declare function browser$alarms$clear(name?: string): Promise<boolean>;

  /**
   * Clears all alarms.
   */
  declare function browser$alarms$clearAll(): Promise<boolean>;

  /**
   * Fired when an alarm has expired. Useful for transient background pages.
   * @param name The alarm that has expired.
   */
  declare var browser$alarms$onAlarm: WebExtEvent<
    (name: browser$alarms$Alarm) => void
  >;

  declare type browser$_manifest$OptionalPermission = _manifest$_OptionalPermission;

  declare type browser$_manifest$Permission =
    | string
    | browser$_manifest$OptionalPermission
    | _manifest$_Permission;

  /**
   * Represents a WebExtension manifest.json file
   */
  declare interface browser$_manifest$WebExtensionManifest {
    experiment_apis?: browser$experiments$ExperimentAPI;

    /**
     * A list of protocol handler definitions.
     */
    protocol_handlers?: _manifest$ProtocolHandler[];
    default_locale?: string;
    minimum_chrome_version?: string;
    minimum_opera_version?: string;
    icons?: {
      [key: number]: string
    };
    incognito?: _manifest$_WebExtensionManifestIncognito;
    background?:
      | {
          page: _manifest$ExtensionURL,
          persistent?: _manifest$PersistentBackgroundProperty
        }
      | {
          scripts: _manifest$ExtensionURL[],
          persistent?: _manifest$PersistentBackgroundProperty
        };
    options_ui?: {
      page: _manifest$ExtensionURL,
      browser_style?: boolean,
      chrome_style?: boolean,
      open_in_tab?: boolean
    };
    content_scripts?: _manifest$ContentScript[];
    content_security_policy?: string;
    permissions?: _manifest$PermissionOrOrigin[];
    optional_permissions?: _manifest$OptionalPermissionOrOrigin[];
    web_accessible_resources?: string[];
    developer?: {
      name?: string,
      url?: string
    };
    hidden?: boolean;
    theme_experiment?: _manifest$ThemeExperiment;
    user_scripts?: {
      api_script?: _manifest$ExtensionURL
    };
    browser_action?: {
      default_title?: string,
      default_icon?: _manifest$IconPath,

      /**
       * Specifies icons to use for dark and light themes
       */
      theme_icons?: _manifest$ThemeIcons[],
      default_popup?: string,
      browser_style?: boolean,

      /**
       * Defines the location the browserAction will appear by default. The default location is navbar.
       */
      default_area?: _manifest$_WebExtensionManifestBrowserActionDefaultArea
    };
    chrome_settings_overrides?: {
      homepage?: string,
      search_provider?: {
        name: string,
        keyword?: string,
        search_url: string,
        favicon_url?: string,
        suggest_url?: string,

        /**
         * @deprecated Unsupported on Firefox at this time.
         */
        instant_url?: string,

        /**
         * @deprecated Unsupported on Firefox at this time.
         */
        image_url?: string,

        /**
         * POST parameters to the search_url as a query string.
         */
        search_url_post_params?: string,

        /**
         * POST parameters to the suggest_url as a query string.
         */
        suggest_url_post_params?: string,

        /**
         * @deprecated Unsupported on Firefox at this time.
         */
        instant_url_post_params?: string,

        /**
         * @deprecated Unsupported on Firefox at this time.
         */
        image_url_post_params?: string,

        /**
         * @deprecated Unsupported on Firefox at this time.
         */
        alternate_urls?: string[],

        /**
         * @deprecated Unsupported on Firefox.
         */
        prepopulated_id?: number,

        /**
         * Encoding of the search term.
         */
        encoding?: string,

        /**
         * Sets the default engine to a built-in engine only.
         */
        is_default?: boolean,

        /**
         * A list of optional search url parameters. This allows the additon of search url parameters based on
         * how the search is performed in Firefox.
         */
        params?: Array<{
          /**
           * A url parameter name
           */
          name: string,

          /**
           * The type of param can be either "purpose" or "pref".
           */
          condition?: _manifest$_WebExtensionManifestChromeSettingsOverridesSearchProviderParamsCondition,

          /**
           * The preference to retreive the value from.
           */
          pref?: string,

          /**
           * The context that initiates a search, required if condition is "purpose".
           */
          purpose?: _manifest$_WebExtensionManifestChromeSettingsOverridesSearchProviderParamsPurpose,

          /**
           * A url parameter value.
           */
          value?: string
        }>
      }
    };
    commands?: {
      suggested_key?: {
        default?: _manifest$KeyName,
        mac?: _manifest$KeyName,
        linux?: _manifest$KeyName,
        windows?: _manifest$KeyName,
        chromeos?: string,
        android?: string,
        ios?: string,

        /**
         * @deprecated Unknown platform name
         */
        additionalProperties?: string
      },
      description?: string
    };
    devtools_page?: _manifest$ExtensionURL;
    omnibox?: {
      keyword: string
    };
    page_action?: {
      default_title?: string,
      default_icon?: _manifest$IconPath,
      default_popup?: string,
      browser_style?: boolean,
      show_matches?: _manifest$MatchPattern[],
      hide_matches?: _manifest$MatchPatternRestricted[],
      pinned?: boolean
    };
    sidebar_action?: {
      default_title?: string,
      default_icon?: _manifest$IconPath,
      browser_style?: boolean,
      default_panel: string,

      /**
       * Whether or not the sidebar is opened at install. Default is `true`.
       */
      open_at_install?: boolean
    };
    chrome_url_overrides?: {
      newtab?: _manifest$ExtensionURL,

      /**
       * @deprecated Unsupported on Firefox at this time.
       */
      bookmarks?: _manifest$ExtensionURL,

      /**
       * @deprecated Unsupported on Firefox at this time.
       */
      history?: _manifest$ExtensionURL
    };
    manifest_version: number;
    applications?: {
      gecko?: _manifest$FirefoxSpecificProperties
    };
    browser_specific_settings?: {
      gecko?: _manifest$FirefoxSpecificProperties
    };
    name: string;
    short_name?: string;
    description?: string;
    author?: string;
    version: string;
    homepage_url?: string;
  }

  /**
   * Represents a protocol handler definition.
   */
  declare interface browser$_manifest$ProtocolHandler {
    /**
     * A user-readable title string for the protocol handler. This will be displayed to the user in interface
     * objects as needed.
     */
    name: string;

    /**
     * The protocol the site wishes to handle, specified as a string. For example, you can register to handle SMS
     * text message links by registering to handle the "sms" scheme.
     */
    protocol: string | _manifest$_ProtocolHandlerProtocol;

    /**
     * The URL of the handler, as a string. This string should include "%s" as a placeholder which will be replaced
     * with the escaped URL of the document to be handled. This URL might be a true URL, or it could be a phone
     * number, email address, or so forth.
     */
    uriTemplate: _manifest$ExtensionURL | _manifest$HttpURL;
  }

  /**
   * Common properties for all manifest.json files
   */
  declare interface browser$_manifest$ManifestBase {
    manifest_version: number;
    applications?: {
      gecko?: _manifest$FirefoxSpecificProperties
    };
    browser_specific_settings?: {
      gecko?: _manifest$FirefoxSpecificProperties
    };
    name: string;
    short_name?: string;
    description?: string;
    author?: string;
    version: string;
    homepage_url?: string;
  }

  /**
   * Represents a WebExtension language pack manifest.json file
   */
  declare interface browser$_manifest$WebExtensionLangpackManifest {
    homepage_url?: string;
    langpack_id: string;
    languages: {
      [key: string]: {
        chrome_resources: {
          [key: string]:
            | _manifest$ExtensionURL
            | {
                [key: string]: _manifest$ExtensionURL
              }
        },
        version: string
      }
    };
    sources?: {
      [key: string]: {
        base_path: _manifest$ExtensionURL,
        paths?: string[]
      }
    };
    manifest_version: number;
    applications?: {
      gecko?: _manifest$FirefoxSpecificProperties
    };
    browser_specific_settings?: {
      gecko?: _manifest$FirefoxSpecificProperties
    };
    name: string;
    short_name?: string;
    description?: string;
    author?: string;
    version: string;
  }

  /**
   * Represents a WebExtension dictionary manifest.json file
   */
  declare interface browser$_manifest$WebExtensionDictionaryManifest {
    homepage_url?: string;
    dictionaries: {
      [key: string]: string
    };
    manifest_version: number;
    applications?: {
      gecko?: _manifest$FirefoxSpecificProperties
    };
    browser_specific_settings?: {
      gecko?: _manifest$FirefoxSpecificProperties
    };
    name: string;
    short_name?: string;
    description?: string;
    author?: string;
    version: string;
  }

  declare interface browser$_manifest$ThemeIcons {
    /**
     * A light icon to use for dark themes
     */
    light: _manifest$ExtensionURL;

    /**
     * The dark icon to use for light themes
     */
    dark: _manifest$ExtensionURL;

    /**
     * The size of the icons
     */
    size: number;
  }

  declare type browser$_manifest$OptionalPermissionOrOrigin =
    | browser$_manifest$OptionalPermission
    | _manifest$MatchPattern;

  declare type browser$_manifest$PermissionOrOrigin =
    | browser$_manifest$Permission
    | _manifest$MatchPattern;

  declare type browser$_manifest$HttpURL = string;

  declare type browser$_manifest$ExtensionURL = string;

  declare type browser$_manifest$ImageDataOrExtensionURL = string;

  declare type browser$_manifest$ExtensionID = string;

  declare interface browser$_manifest$FirefoxSpecificProperties {
    id?: browser$_manifest$ExtensionID;
    update_url?: string;
    strict_min_version?: string;
    strict_max_version?: string;
  }

  declare type browser$_manifest$MatchPattern =
    | _manifest$MatchPatternRestricted
    | _manifest$MatchPatternUnestricted
    | _manifest$_MatchPattern;

  /**
   * Same as MatchPattern above, but excludes<all_urls></all_urls>
   */
  declare type browser$_manifest$MatchPatternRestricted = string;

  /**
   * Mostly unrestricted match patterns for privileged add-ons. This should technically be rejected for unprivileged
   * add-ons, but, reasons. The MatchPattern class will still refuse privileged schemes for those extensions.
   */
  declare type browser$_manifest$MatchPatternUnestricted = string;

  /**
   * Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be
   * set at the same time. Based on InjectDetails, but using underscore rather than camel case naming conventions.
   */
  declare interface browser$_manifest$ContentScript {
    matches: browser$_manifest$MatchPattern[];
    exclude_matches?: browser$_manifest$MatchPattern[];
    include_globs?: string[];
    exclude_globs?: string[];

    /**
     * The list of CSS files to inject
     */
    css?: browser$_manifest$ExtensionURL[];

    /**
     * The list of JS files to inject
     */
    js?: browser$_manifest$ExtensionURL[];

    /**
     * If allFrames is `true`, implies that the JavaScript or CSS should be injected into all frames of current
     * page. By default, it's `false` and is only injected into the top frame.
     */
    all_frames?: boolean;

    /**
     * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your
     * extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default
     * it is `false`.
     */
    match_about_blank?: boolean;

    /**
     * The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle".
     */
    run_at?: browser$extensionTypes$RunAt;
  }

  declare type browser$_manifest$IconPath =
    | {
        [key: number]: browser$_manifest$ExtensionURL
      }
    | browser$_manifest$ExtensionURL;

  declare type browser$_manifest$IconImageData =
    | {
        [key: number]: _manifest$ImageData
      }
    | _manifest$ImageData;

  declare type browser$_manifest$ImageData = any;

  /**
   * @deprecated An unexpected property was found in the WebExtension manifest.
   */
  declare type browser$_manifest$UnrecognizedProperty = any;

  /**
   * @deprecated Event pages are not currently supported. This will run as a persistent background page.
   */
  declare type browser$_manifest$PersistentBackgroundProperty = boolean;

  /**
   * Represents a native manifest file
   */
  declare type browser$_manifest$NativeManifest =
    | {
        name: string,
        description: string,
        path: string,
        type: "pkcs11" | "stdio",
        allowed_extensions: browser$_manifest$ExtensionID[]
      }
    | {
        name: browser$_manifest$ExtensionID,
        description: string,
        data: any,
        type: "storage"
      };

  declare type browser$_manifest$ThemeColor =
    | string
    | [number, number, number]
    | [number, number, number, number];

  declare interface browser$_manifest$ThemeExperiment {
    stylesheet?: browser$_manifest$ExtensionURL;
    images?: string;
    colors?: string;
    properties?: string;
  }

  declare interface browser$_manifest$ThemeType {
    images?: {
      additional_backgrounds?: browser$_manifest$ImageDataOrExtensionURL[],

      /**
       * @deprecated Please use _theme.images.theme_frame_, this alias will be removed in Firefox 69.
       */
      headerURL?: browser$_manifest$ImageDataOrExtensionURL,
      theme_frame?: browser$_manifest$ImageDataOrExtensionURL
    };
    colors?: {
      tab_selected?: browser$_manifest$ThemeColor,

      /**
       * @deprecated Please use _theme.colors.frame_, this alias will be removed in Firefox 69.
       */
      accentcolor?: browser$_manifest$ThemeColor,
      frame?: browser$_manifest$ThemeColor,
      frame_inactive?: browser$_manifest$ThemeColor,

      /**
       * @deprecated Please use _theme.colors.tab_background_text_, this alias will be removed in Firefox 69.
       */
      textcolor?: browser$_manifest$ThemeColor,
      tab_background_text?: browser$_manifest$ThemeColor,
      tab_background_separator?: browser$_manifest$ThemeColor,
      tab_loading?: browser$_manifest$ThemeColor,
      tab_text?: browser$_manifest$ThemeColor,
      tab_line?: browser$_manifest$ThemeColor,
      toolbar?: browser$_manifest$ThemeColor,

      /**
       * @deprecated Please use _theme.colors.bookmark_text_, this alias will be removed in Firefox 69.
       */
      toolbar_text?: browser$_manifest$ThemeColor,
      bookmark_text?: browser$_manifest$ThemeColor,
      toolbar_field?: browser$_manifest$ThemeColor,
      toolbar_field_text?: browser$_manifest$ThemeColor,
      toolbar_field_border?: browser$_manifest$ThemeColor,
      toolbar_field_separator?: browser$_manifest$ThemeColor,
      toolbar_top_separator?: browser$_manifest$ThemeColor,
      toolbar_bottom_separator?: browser$_manifest$ThemeColor,
      toolbar_vertical_separator?: browser$_manifest$ThemeColor,
      icons?: browser$_manifest$ThemeColor,
      icons_attention?: browser$_manifest$ThemeColor,
      button_background_hover?: browser$_manifest$ThemeColor,
      button_background_active?: browser$_manifest$ThemeColor,
      popup?: browser$_manifest$ThemeColor,
      popup_text?: browser$_manifest$ThemeColor,
      popup_border?: browser$_manifest$ThemeColor,
      toolbar_field_focus?: browser$_manifest$ThemeColor,
      toolbar_field_text_focus?: browser$_manifest$ThemeColor,
      toolbar_field_border_focus?: browser$_manifest$ThemeColor,
      popup_highlight?: browser$_manifest$ThemeColor,
      popup_highlight_text?: browser$_manifest$ThemeColor,
      ntp_background?: browser$_manifest$ThemeColor,
      ntp_text?: browser$_manifest$ThemeColor,
      sidebar?: browser$_manifest$ThemeColor,
      sidebar_border?: browser$_manifest$ThemeColor,
      sidebar_text?: browser$_manifest$ThemeColor,
      sidebar_highlight?: browser$_manifest$ThemeColor,
      sidebar_highlight_text?: browser$_manifest$ThemeColor
    };
    icons?: {
      back?: browser$_manifest$ExtensionURL,
      forward?: browser$_manifest$ExtensionURL,
      reload?: browser$_manifest$ExtensionURL,
      stop?: browser$_manifest$ExtensionURL,
      bookmark_star?: browser$_manifest$ExtensionURL,
      bookmark_menu?: browser$_manifest$ExtensionURL,
      downloads?: browser$_manifest$ExtensionURL,
      home?: browser$_manifest$ExtensionURL,
      app_menu?: browser$_manifest$ExtensionURL,
      cut?: browser$_manifest$ExtensionURL,
      copy?: browser$_manifest$ExtensionURL,
      paste?: browser$_manifest$ExtensionURL,
      new_window?: browser$_manifest$ExtensionURL,
      new_private_window?: browser$_manifest$ExtensionURL,
      save_page?: browser$_manifest$ExtensionURL,
      print?: browser$_manifest$ExtensionURL,
      history?: browser$_manifest$ExtensionURL,
      full_screen?: browser$_manifest$ExtensionURL,
      find?: browser$_manifest$ExtensionURL,
      options?: browser$_manifest$ExtensionURL,
      addons?: browser$_manifest$ExtensionURL,
      developer?: browser$_manifest$ExtensionURL,
      synced_tabs?: browser$_manifest$ExtensionURL,
      open_file?: browser$_manifest$ExtensionURL,
      sidebars?: browser$_manifest$ExtensionURL,
      subscribe?: browser$_manifest$ExtensionURL,
      text_encoding?: browser$_manifest$ExtensionURL,
      email_link?: browser$_manifest$ExtensionURL,
      forget?: browser$_manifest$ExtensionURL,
      pocket?: browser$_manifest$ExtensionURL,
      getmsg?: browser$_manifest$ExtensionURL,
      newmsg?: browser$_manifest$ExtensionURL,
      address?: browser$_manifest$ExtensionURL,
      reply?: browser$_manifest$ExtensionURL,
      replyall?: browser$_manifest$ExtensionURL,
      replylist?: browser$_manifest$ExtensionURL,
      forwarding?: browser$_manifest$ExtensionURL,
      delete?: browser$_manifest$ExtensionURL,
      junk?: browser$_manifest$ExtensionURL,
      file?: browser$_manifest$ExtensionURL,
      nextUnread?: browser$_manifest$ExtensionURL,
      prevUnread?: browser$_manifest$ExtensionURL,
      mark?: browser$_manifest$ExtensionURL,
      tag?: browser$_manifest$ExtensionURL,
      compact?: browser$_manifest$ExtensionURL,
      archive?: browser$_manifest$ExtensionURL,
      chat?: browser$_manifest$ExtensionURL,
      nextMsg?: browser$_manifest$ExtensionURL,
      prevMsg?: browser$_manifest$ExtensionURL,
      QFB?: browser$_manifest$ExtensionURL,
      conversation?: browser$_manifest$ExtensionURL,
      newcard?: browser$_manifest$ExtensionURL,
      newlist?: browser$_manifest$ExtensionURL,
      editcard?: browser$_manifest$ExtensionURL,
      newim?: browser$_manifest$ExtensionURL,
      send?: browser$_manifest$ExtensionURL,
      spelling?: browser$_manifest$ExtensionURL,
      attach?: browser$_manifest$ExtensionURL,
      security?: browser$_manifest$ExtensionURL,
      save?: browser$_manifest$ExtensionURL,
      quote?: browser$_manifest$ExtensionURL,
      buddy?: browser$_manifest$ExtensionURL,
      join_chat?: browser$_manifest$ExtensionURL,
      chat_accounts?: browser$_manifest$ExtensionURL,
      calendar?: browser$_manifest$ExtensionURL,
      tasks?: browser$_manifest$ExtensionURL,
      synchronize?: browser$_manifest$ExtensionURL,
      newevent?: browser$_manifest$ExtensionURL,
      newtask?: browser$_manifest$ExtensionURL,
      editevent?: browser$_manifest$ExtensionURL,
      today?: browser$_manifest$ExtensionURL,
      category?: browser$_manifest$ExtensionURL,
      complete?: browser$_manifest$ExtensionURL,
      priority?: browser$_manifest$ExtensionURL,
      saveandclose?: browser$_manifest$ExtensionURL,
      attendees?: browser$_manifest$ExtensionURL,
      privacy?: browser$_manifest$ExtensionURL,
      status?: browser$_manifest$ExtensionURL,
      freebusy?: browser$_manifest$ExtensionURL,
      timezones?: browser$_manifest$ExtensionURL
    };
    properties?: {
      additional_backgrounds_alignment?: _manifest$_ThemeTypeAdditionalBackgroundsAlignment[],
      additional_backgrounds_tiling?: _manifest$_ThemeTypeAdditionalBackgroundsTiling[]
    };
  }

  /**
   * Contents of manifest.json for a static theme
   */
  declare interface browser$_manifest$ThemeManifest {
    theme: browser$_manifest$ThemeType;
    default_locale?: string;
    theme_experiment?: browser$_manifest$ThemeExperiment;
    icons?: {
      [key: number]: string
    };
  }

  declare type browser$_manifest$KeyName = string;

  declare type browser$_manifest$_OptionalPermission =
    | "browserSettings"
    | "cookies"
    | "downloads"
    | "downloads.open"
    | "clipboardRead"
    | "clipboardWrite"
    | "geolocation"
    | "idle"
    | "notifications"
    | "topSites"
    | "webNavigation"
    | "webRequest"
    | "webRequestBlocking"
    | "bookmarks"
    | "find"
    | "history"
    | "menus.overrideContext"
    | "search"
    | "activeTab"
    | "tabs"
    | "tabHide";

  declare type browser$_manifest$_Permission =
    | "contextualIdentities"
    | "dns"
    | "identity"
    | "management"
    | "alarms"
    | "mozillaAddons"
    | "storage"
    | "unlimitedStorage"
    | "privacy"
    | "proxy"
    | "nativeMessaging"
    | "telemetry"
    | "theme"
    | "browsingData"
    | "devtools"
    | "geckoProfiler"
    | "menus"
    | "contextMenus"
    | "pkcs11"
    | "sessions";

  declare type browser$_manifest$_WebExtensionManifestIncognito = "spanning";

  /**
   * Defines the location the browserAction will appear by default. The default location is navbar.
   */
  declare type browser$_manifest$_WebExtensionManifestBrowserActionDefaultArea =
    | "navbar"
    | "menupanel"
    | "tabstrip"
    | "personaltoolbar";

  /**
   * The type of param can be either "purpose" or "pref".
   */
  declare type browser$_manifest$_WebExtensionManifestChromeSettingsOverridesSearchProviderParamsCondition =
    | "purpose"
    | "pref";

  /**
   * The context that initiates a search, required if condition is "purpose".
   */
  declare type browser$_manifest$_WebExtensionManifestChromeSettingsOverridesSearchProviderParamsPurpose =
    | "contextmenu"
    | "searchbar"
    | "homepage"
    | "keyword"
    | "newtab";

  declare type browser$_manifest$_ProtocolHandlerProtocol =
    | "bitcoin"
    | "dat"
    | "dweb"
    | "geo"
    | "gopher"
    | "im"
    | "ipfs"
    | "ipns"
    | "irc"
    | "ircs"
    | "magnet"
    | "mailto"
    | "mms"
    | "news"
    | "nntp"
    | "sip"
    | "sms"
    | "smsto"
    | "ssb"
    | "ssh"
    | "tel"
    | "urn"
    | "webcal"
    | "wtai"
    | "xmpp";

  declare type browser$_manifest$_MatchPattern = "<all_urls>";

  declare type browser$_manifest$_ThemeTypeAdditionalBackgroundsAlignment =
    | "bottom"
    | "center"
    | "left"
    | "right"
    | "top"
    | "center bottom"
    | "center center"
    | "center top"
    | "left bottom"
    | "left center"
    | "left top"
    | "right bottom"
    | "right center"
    | "right top";

  declare type browser$_manifest$_ThemeTypeAdditionalBackgroundsTiling =
    | "no-repeat"
    | "repeat"
    | "repeat-x"
    | "repeat-y";

  declare var npm$namespace$browser$browserSettings: {
    allowPopupsForUserEvents: typeof browser$browserSettings$allowPopupsForUserEvents,
    cacheEnabled: typeof browser$browserSettings$cacheEnabled,
    closeTabsByDoubleClick: typeof browser$browserSettings$closeTabsByDoubleClick,
    contextMenuShowEvent: typeof browser$browserSettings$contextMenuShowEvent,
    homepageOverride: typeof browser$browserSettings$homepageOverride,
    imageAnimationBehavior: typeof browser$browserSettings$imageAnimationBehavior,
    newTabPageOverride: typeof browser$browserSettings$newTabPageOverride,
    newTabPosition: typeof browser$browserSettings$newTabPosition,
    openBookmarksInNewTabs: typeof browser$browserSettings$openBookmarksInNewTabs,
    openSearchResultsInNewTabs: typeof browser$browserSettings$openSearchResultsInNewTabs,
    openUrlbarResultsInNewTabs: typeof browser$browserSettings$openUrlbarResultsInNewTabs,
    webNotificationsDisabled: typeof browser$browserSettings$webNotificationsDisabled,
    overrideDocumentColors: typeof browser$browserSettings$overrideDocumentColors,
    useDocumentFonts: typeof browser$browserSettings$useDocumentFonts
  };

  /**
   * How images should be animated in the browser.
   */
  declare type browser$browserSettings$ImageAnimationBehavior =
    | "normal"
    | "none"
    | "once";

  /**
   * After which mouse event context menus should popup.
   */
  declare type browser$browserSettings$ContextMenuMouseEvent =
    | "mouseup"
    | "mousedown";

  /**
   * Allows or disallows pop-up windows from opening in response to user events.
   */
  declare var browser$browserSettings$allowPopupsForUserEvents: browser$types$Setting;

  /**
   * Enables or disables the browser cache.
   */
  declare var browser$browserSettings$cacheEnabled: browser$types$Setting;

  /**
   * This boolean setting controls whether the selected tab can be closed with a double click.
   */
  declare var browser$browserSettings$closeTabsByDoubleClick: browser$types$Setting;

  /**
   * Controls after which mouse event context menus popup. This setting's value is of type ContextMenuMouseEvent,
   * which has possible values of `mouseup` and `mousedown`.
   */
  declare var browser$browserSettings$contextMenuShowEvent: browser$types$Setting;

  /**
   * Returns the value of the overridden home page. Read-only.
   */
  declare var browser$browserSettings$homepageOverride: browser$types$Setting;

  /**
   * Controls the behaviour of image animation in the browser. This setting's value is of type
   * ImageAnimationBehavior, defaulting to `normal`.
   */
  declare var browser$browserSettings$imageAnimationBehavior: browser$types$Setting;

  /**
   * Returns the value of the overridden new tab page. Read-only.
   */
  declare var browser$browserSettings$newTabPageOverride: browser$types$Setting;

  /**
   * Controls where new tabs are opened. `afterCurrent` will open all new tabs next to the current tab,
   * `relatedAfterCurrent` will open only related tabs next to the current tab, and `atEnd` will open all tabs at the
   * end of the tab strip. The default is `relatedAfterCurrent`.
   */
  declare var browser$browserSettings$newTabPosition: browser$types$Setting;

  /**
   * This boolean setting controls whether bookmarks are opened in the current tab or in a new tab.
   */
  declare var browser$browserSettings$openBookmarksInNewTabs: browser$types$Setting;

  /**
   * This boolean setting controls whether search results are opened in the current tab or in a new tab.
   */
  declare var browser$browserSettings$openSearchResultsInNewTabs: browser$types$Setting;

  /**
   * This boolean setting controls whether urlbar results are opened in the current tab or in a new tab.
   */
  declare var browser$browserSettings$openUrlbarResultsInNewTabs: browser$types$Setting;

  /**
   * Disables webAPI notifications.
   */
  declare var browser$browserSettings$webNotificationsDisabled: browser$types$Setting;

  /**
   * This setting controls whether the user-chosen colors override the page's colors.
   */
  declare var browser$browserSettings$overrideDocumentColors: browser$types$Setting;

  /**
   * This setting controls whether the document's fonts are used.
   */
  declare var browser$browserSettings$useDocumentFonts: browser$types$Setting;

  declare var npm$namespace$browser$clipboard: {
    setImageData: typeof browser$clipboard$setImageData
  };
  declare type browser$clipboard$ArrayBuffer = any;

  /**
   * The type of imageData.
   */
  declare type browser$clipboard$_SetImageData = "jpeg" | "png";

  /**
   * Copy an image to the clipboard. The image is re-encoded before it is written to the clipboard. If the image is
   * invalid, the clipboard is not modified.
   * @param imageData The image data to be copied.
   * @param imageType The type of imageData.
   */
  declare function browser$clipboard$setImageData(
    imageData: browser$clipboard$ArrayBuffer,
    imageType: browser$clipboard$_SetImageData
  ): Promise<void>;

  declare var npm$namespace$browser$contentScripts: {
    register: typeof browser$contentScripts$register
  };

  /**
   * Details of a content script registered programmatically
   */
  declare interface browser$contentScripts$RegisteredContentScriptOptions {
    matches: browser$_manifest$MatchPattern[];
    excludeMatches?: browser$_manifest$MatchPattern[];
    includeGlobs?: string[];
    excludeGlobs?: string[];

    /**
     * The list of CSS files to inject
     */
    css?: browser$extensionTypes$ExtensionFileOrCode[];

    /**
     * The list of JS files to inject
     */
    js?: browser$extensionTypes$ExtensionFileOrCode[];

    /**
     * If allFrames is `true`, implies that the JavaScript or CSS should be injected into all frames of current
     * page. By default, it's `false` and is only injected into the top frame.
     */
    allFrames?: boolean;

    /**
     * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your
     * extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default
     * it is `false`.
     */
    matchAboutBlank?: boolean;

    /**
     * The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle".
     */
    runAt?: browser$extensionTypes$RunAt;
  }

  /**
   * An object that represents a content script registered programmatically
   */
  declare interface browser$contentScripts$RegisteredContentScript {
    /**
     * Unregister a content script registered programmatically
     */
    unregister(): Promise<any>;
  }

  /**
   * Register a content script programmatically
   */
  declare function browser$contentScripts$register(
    contentScriptOptions: browser$contentScripts$RegisteredContentScriptOptions
  ): Promise<browser$contentScripts$RegisteredContentScript>;

  declare var npm$namespace$browser$contextualIdentities: {
    get: typeof browser$contextualIdentities$get,
    query: typeof browser$contextualIdentities$query,
    create: typeof browser$contextualIdentities$create,
    update: typeof browser$contextualIdentities$update,
    remove: typeof browser$contextualIdentities$remove,
    onUpdated: typeof browser$contextualIdentities$onUpdated,
    onCreated: typeof browser$contextualIdentities$onCreated,
    onRemoved: typeof browser$contextualIdentities$onRemoved
  };

  /**
   * Represents information about a contextual identity.
   */
  declare interface browser$contextualIdentities$ContextualIdentity {
    /**
     * The name of the contextual identity.
     */
    name: string;

    /**
     * The icon name of the contextual identity.
     */
    icon: string;

    /**
     * The icon url of the contextual identity.
     */
    iconUrl: string;

    /**
     * The color name of the contextual identity.
     */
    color: string;

    /**
     * The color hash of the contextual identity.
     */
    colorCode: string;

    /**
     * The cookie store ID of the contextual identity.
     */
    cookieStoreId: string;
  }

  /**
   * Retrieves information about a single contextual identity.
   * @param cookieStoreId The ID of the contextual identity cookie store.
   */
  declare function browser$contextualIdentities$get(
    cookieStoreId: string
  ): Promise<browser$contextualIdentities$ContextualIdentity>;

  /**
   * Retrieves all contextual identities
   * @param details Information to filter the contextual identities being retrieved.
   */
  declare function browser$contextualIdentities$query(details: {
    /**
     * Filters the contextual identity by name.
     */
    name?: string
  }): Promise<browser$contextualIdentities$ContextualIdentity[]>;

  /**
   * Creates a contextual identity with the given data.
   * @param details Details about the contextual identity being created.
   */
  declare function browser$contextualIdentities$create(details: {
    /**
     * The name of the contextual identity.
     */
    name: string,

    /**
     * The color of the contextual identity.
     */
    color: string,

    /**
     * The icon of the contextual identity.
     */
    icon: string
  }): Promise<browser$contextualIdentities$ContextualIdentity>;

  /**
   * Updates a contextual identity with the given data.
   * @param cookieStoreId The ID of the contextual identity cookie store.
   * @param details Details about the contextual identity being created.
   */
  declare function browser$contextualIdentities$update(
    cookieStoreId: string,
    details: {
      /**
       * The name of the contextual identity.
       */
      name?: string,

      /**
       * The color of the contextual identity.
       */
      color?: string,

      /**
       * The icon of the contextual identity.
       */
      icon?: string
    }
  ): Promise<browser$contextualIdentities$ContextualIdentity>;

  /**
   * Deletes a contetual identity by its cookie Store ID.
   * @param cookieStoreId The ID of the contextual identity cookie store.
   */
  declare function browser$contextualIdentities$remove(
    cookieStoreId: string
  ): Promise<browser$contextualIdentities$ContextualIdentity>;

  /**
   * Fired when a container is updated.
   */
  declare var browser$contextualIdentities$onUpdated: WebExtEvent<
    (changeInfo: {
      /**
       * Contextual identity that has been updated
       */
      contextualIdentity: browser$contextualIdentities$ContextualIdentity
    }) => void
  >;

  /**
   * Fired when a new container is created.
   */
  declare var browser$contextualIdentities$onCreated: WebExtEvent<
    (changeInfo: {
      /**
       * Contextual identity that has been created
       */
      contextualIdentity: browser$contextualIdentities$ContextualIdentity
    }) => void
  >;

  /**
   * Fired when a container is removed.
   */
  declare var browser$contextualIdentities$onRemoved: WebExtEvent<
    (changeInfo: {
      /**
       * Contextual identity that has been removed
       */
      contextualIdentity: browser$contextualIdentities$ContextualIdentity
    }) => void
  >;

  declare var npm$namespace$browser$cookies: {
    get: typeof browser$cookies$get,
    getAll: typeof browser$cookies$getAll,
    set: typeof browser$cookies$set,
    remove: typeof browser$cookies$remove,
    getAllCookieStores: typeof browser$cookies$getAllCookieStores,
    onChanged: typeof browser$cookies$onChanged
  };

  /**
   * A cookie's 'SameSite' state (https://tools.ietf.org/html/draft-west-first-party-cookies). 'no_restriction'
   * corresponds to a cookie set without a 'SameSite' attribute, 'lax' to 'SameSite=Lax', and 'strict' to
   * 'SameSite=Strict'.
   */
  declare type browser$cookies$SameSiteStatus =
    | "no_restriction"
    | "lax"
    | "strict";

  /**
   * Represents information about an HTTP cookie.
   */
  declare interface browser$cookies$Cookie {
    /**
     * The name of the cookie.
     */
    name: string;

    /**
     * The value of the cookie.
     */
    value: string;

    /**
     * The domain of the cookie (e.g. "www.google.com", "example.com").
     */
    domain: string;

    /**
     * True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie).
     */
    hostOnly: boolean;

    /**
     * The path of the cookie.
     */
    path: string;

    /**
     * True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS).
     */
    secure: boolean;

    /**
     * True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts).
     */
    httpOnly: boolean;

    /**
     * The cookie's same-site status (i.e. whether the cookie is sent with cross-site requests).
     */
    sameSite: browser$cookies$SameSiteStatus;

    /**
     * True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date.
     */
    session: boolean;

    /**
     * The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session
     * cookies.
     */
    expirationDate?: number;

    /**
     * The ID of the cookie store containing this cookie, as provided in getAllCookieStores().
     */
    storeId: string;

    /**
     * The first-party domain of the cookie.
     */
    firstPartyDomain: string;
  }

  /**
   * Represents a cookie store in the browser. An incognito mode window, for instance, uses a separate cookie store
   * from a non-incognito window.
   */
  declare interface browser$cookies$CookieStore {
    /**
     * The unique identifier for the cookie store.
     */
    id: string;

    /**
     * Identifiers of all the browser tabs that share this cookie store.
     */
    tabIds: number[];

    /**
     * Indicates if this is an incognito cookie store
     */
    incognito: boolean;
  }

  /**
   * The underlying reason behind the cookie's change. If a cookie was inserted, or removed via an explicit call to
   * `cookies.remove`, "cause" will be "explicit". If a cookie was automatically removed due to expiry, "cause" will
   * be "expired". If a cookie was removed due to being overwritten with an already-expired expiration date, "cause"
   * will be set to "expired_overwrite". If a cookie was automatically removed due to garbage collection, "cause"
   * will be "evicted". If a cookie was automatically removed due to a "set" call that overwrote it, "cause" will be
   * "overwrite". Plan your response accordingly.
   */
  declare type browser$cookies$OnChangedCause =
    | "evicted"
    | "expired"
    | "explicit"
    | "expired_overwrite"
    | "overwrite";

  /**
   * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL,
   * the one with the longest path will be returned. For cookies with the same path length, the cookie with the
   * earliest creation time will be returned.
   * @param details Details to identify the cookie being retrieved.
   */
  declare function browser$cookies$get(details: {
    /**
     * The URL with which the cookie to retrieve is associated. This argument may be a full URL, in which case any
     * data following the URL path (e.g. the query string) is simply ignored. If host permissions for this URL are
     * not specified in the manifest file, the API call will fail.
     */
    url: string,

    /**
     * The name of the cookie to retrieve.
     */
    name: string,

    /**
     * The ID of the cookie store in which to look for the cookie. By default, the current execution context's
     * cookie store will be used.
     */
    storeId?: string,

    /**
     * The first-party domain which the cookie to retrieve is associated. This attribute is required if First-Party
     * Isolation is enabled.
     */
    firstPartyDomain?: string
  }): Promise<browser$cookies$Cookie>;

  /**
   * Retrieves all cookies from a single cookie store that match the given information. The cookies returned will be
   * sorted, with those with the longest path first. If multiple cookies have the same path length, those with the
   * earliest creation time will be first.
   * @param details Information to filter the cookies being retrieved.
   */
  declare function browser$cookies$getAll(details: {
    /**
     * Restricts the retrieved cookies to those that would match the given URL.
     */
    url?: string,

    /**
     * Filters the cookies by name.
     */
    name?: string,

    /**
     * Restricts the retrieved cookies to those whose domains match or are subdomains of this one.
     */
    domain?: string,

    /**
     * Restricts the retrieved cookies to those whose path exactly matches this string.
     */
    path?: string,

    /**
     * Filters the cookies by their Secure property.
     */
    secure?: boolean,

    /**
     * Filters out session vs. persistent cookies.
     */
    session?: boolean,

    /**
     * The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be
     * used.
     */
    storeId?: string,

    /**
     * Restricts the retrieved cookies to those whose first-party domains match this one. This attribute is
     * required if First-Party Isolation is enabled. To not filter by a specific first-party domain, use `null` or
     * `undefined`.
     */
    firstPartyDomain?: string
  }): Promise<browser$cookies$Cookie[]>;

  /**
   * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
   * @param details Details about the cookie being set.
   */
  declare function browser$cookies$set(details: {
    /**
     * The request-URI to associate with the setting of the cookie. This value can affect the default domain and
     * path values of the created cookie. If host permissions for this URL are not specified in the manifest file,
     * the API call will fail.
     */
    url: string,

    /**
     * The name of the cookie. Empty by default if omitted.
     */
    name?: string,

    /**
     * The value of the cookie. Empty by default if omitted.
     */
    value?: string,

    /**
     * The domain of the cookie. If omitted, the cookie becomes a host-only cookie.
     */
    domain?: string,

    /**
     * The path of the cookie. Defaults to the path portion of the url parameter.
     */
    path?: string,

    /**
     * Whether the cookie should be marked as Secure. Defaults to false.
     */
    secure?: boolean,

    /**
     * Whether the cookie should be marked as HttpOnly. Defaults to false.
     */
    httpOnly?: boolean,

    /**
     * The cookie's same-site status.
     */
    sameSite?: browser$cookies$SameSiteStatus,

    /**
     * The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie
     * becomes a session cookie.
     */
    expirationDate?: number,

    /**
     * The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current
     * execution context's cookie store.
     */
    storeId?: string,

    /**
     * The first-party domain of the cookie. This attribute is required if First-Party Isolation is enabled.
     */
    firstPartyDomain?: string
  }): Promise<browser$cookies$Cookie | void>;

  /**
   * Deletes a cookie by name.
   * @param details Information to identify the cookie to remove.
   */
  declare function browser$cookies$remove(details: {
    /**
     * The URL associated with the cookie. If host permissions for this URL are not specified in the manifest file,
     * the API call will fail.
     */
    url: string,

    /**
     * The name of the cookie to remove.
     */
    name: string,

    /**
     * The ID of the cookie store to look in for the cookie. If unspecified, the cookie is looked for by default in
     * the current execution context's cookie store.
     */
    storeId?: string,

    /**
     * The first-party domain associated with the cookie. This attribute is required if First-Party Isolation is
     * enabled.
     */
    firstPartyDomain?: string
  }): Promise<{
    /**
     * The URL associated with the cookie that's been removed.
     */
    url: string,

    /**
     * The name of the cookie that's been removed.
     */
    name: string,

    /**
     * The ID of the cookie store from which the cookie was removed.
     */
    storeId: string,

    /**
     * The first-party domain associated with the cookie that's been removed.
     */
    firstPartyDomain: string
  } | void>;

  /**
   * Lists all existing cookie stores.
   */
  declare function browser$cookies$getAllCookieStores(): Promise<
    browser$cookies$CookieStore[]
  >;

  /**
   * Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is
   * implemented as a two step process: the cookie to be updated is first removed entirely, generating a notification
   * with "cause" of "overwrite" . Afterwards, a new cookie is written with the updated values, generating a second
   * notification with "cause" "explicit".
   */
  declare var browser$cookies$onChanged: WebExtEvent<
    (changeInfo: {
      /**
       * True if a cookie was removed.
       */
      removed: boolean,

      /**
       * Information about the cookie that was set or removed.
       */
      cookie: browser$cookies$Cookie,

      /**
       * The underlying reason behind the cookie's change.
       */
      cause: browser$cookies$OnChangedCause
    }) => void
  >;

  declare var npm$namespace$browser$dns: {
    resolve: typeof browser$dns$resolve
  };

  /**
   * An object encapsulating a DNS Record.
   */
  declare interface browser$dns$DNSRecord {
    /**
     * The canonical hostname for this record. this value is empty if the record was not fetched with the
     * 'canonical_name' flag.
     */
    canonicalName?: string;

    /**
     * Record retreived with TRR.
     */
    isTRR: string;
    addresses: string[];
  }

  declare type browser$dns$ResolveFlags = dns$_ResolveFlags[];

  declare type browser$dns$_ResolveFlags =
    | "allow_name_collisions"
    | "bypass_cache"
    | "canonical_name"
    | "disable_ipv4"
    | "disable_ipv6"
    | "disable_trr"
    | "offline"
    | "priority_low"
    | "priority_medium"
    | "speculate";

  /**
   * Resolves a hostname to a DNS record.
   */
  declare function browser$dns$resolve(
    hostname: string,
    flags?: browser$dns$ResolveFlags
  ): Promise<browser$dns$DNSRecord>;

  declare var npm$namespace$browser$downloads: {
    download: typeof browser$downloads$download,
    search: typeof browser$downloads$search,
    pause: typeof browser$downloads$pause,
    resume: typeof browser$downloads$resume,
    cancel: typeof browser$downloads$cancel,
    getFileIcon: typeof browser$downloads$getFileIcon,
    open: typeof browser$downloads$open,
    show: typeof browser$downloads$show,
    showDefaultFolder: typeof browser$downloads$showDefaultFolder,
    erase: typeof browser$downloads$erase,
    removeFile: typeof browser$downloads$removeFile,
    acceptDanger: typeof browser$downloads$acceptDanger,
    drag: typeof browser$downloads$drag,
    setShelfEnabled: typeof browser$downloads$setShelfEnabled,
    onCreated: typeof browser$downloads$onCreated,
    onErased: typeof browser$downloads$onErased,
    onChanged: typeof browser$downloads$onChanged
  };
  declare type browser$downloads$FilenameConflictAction =
    | "uniquify"
    | "overwrite"
    | "prompt";

  declare type browser$downloads$InterruptReason =
    | "FILE_FAILED"
    | "FILE_ACCESS_DENIED"
    | "FILE_NO_SPACE"
    | "FILE_NAME_TOO_LONG"
    | "FILE_TOO_LARGE"
    | "FILE_VIRUS_INFECTED"
    | "FILE_TRANSIENT_ERROR"
    | "FILE_BLOCKED"
    | "FILE_SECURITY_CHECK_FAILED"
    | "FILE_TOO_SHORT"
    | "NETWORK_FAILED"
    | "NETWORK_TIMEOUT"
    | "NETWORK_DISCONNECTED"
    | "NETWORK_SERVER_DOWN"
    | "NETWORK_INVALID_REQUEST"
    | "SERVER_FAILED"
    | "SERVER_NO_RANGE"
    | "SERVER_BAD_CONTENT"
    | "SERVER_UNAUTHORIZED"
    | "SERVER_CERT_PROBLEM"
    | "SERVER_FORBIDDEN"
    | "USER_CANCELED"
    | "USER_SHUTDOWN"
    | "CRASH";

  /**
   * *file*:
   *    The download's filename is suspicious.
   * *url*:
   *    The download's URL is known to be malicious.
   * *content*:
   *    The downloaded file is known to be malicious.
   * *uncommon*:
   *    The download's URL is not commonly downloaded and could be dangerous.
   * *safe*:
   *    The download presents no known danger to the user's computer.
   *
   * These string constants will never change, however the set of DangerTypes may change.
   */
  declare type browser$downloads$DangerType =
    | "file"
    | "url"
    | "content"
    | "uncommon"
    | "host"
    | "unwanted"
    | "safe"
    | "accepted";

  /**
   * *in_progress*:
   *    The download is currently receiving data from the server.
   * *interrupted*:
   *    An error broke the connection with the file host.
   * *complete*:
   *    The download completed successfully.
   *
   * These string constants will never change, however the set of States may change.
   */
  declare type browser$downloads$State =
    | "in_progress"
    | "interrupted"
    | "complete";

  declare interface browser$downloads$DownloadItem {
    /**
     * An identifier that is persistent across browser sessions.
     */
    id: number;

    /**
     * Absolute URL.
     */
    url: string;
    referrer?: string;

    /**
     * Absolute local path.
     */
    filename: string;

    /**
     * False if this download is recorded in the history, true if it is not recorded.
     */
    incognito: boolean;

    /**
     * Indication of whether this download is thought to be safe or known to be suspicious.
     */
    danger: browser$downloads$DangerType;

    /**
     * The file's MIME type.
     */
    mime: string;

    /**
     * Number of milliseconds between the unix epoch and when this download began.
     */
    startTime: string;

    /**
     * Number of milliseconds between the unix epoch and when this download ended.
     */
    endTime?: string;
    estimatedEndTime?: string;

    /**
     * Indicates whether the download is progressing, interrupted, or complete.
     */
    state: browser$downloads$State;

    /**
     * True if the download has stopped reading data from the host, but kept the connection open.
     */
    paused: boolean;
    canResume: boolean;

    /**
     * Number indicating why a download was interrupted.
     */
    error?: browser$downloads$InterruptReason;

    /**
     * Number of bytes received so far from the host, without considering file compression.
     */
    bytesReceived: number;

    /**
     * Number of bytes in the whole file, without considering file compression, or -1 if unknown.
     */
    totalBytes: number;

    /**
     * Number of bytes in the whole file post-decompression, or -1 if unknown.
     */
    fileSize: number;
    exists: boolean;
    byExtensionId?: string;
    byExtensionName?: string;
  }

  declare interface browser$downloads$StringDelta {
    current?: string;
    previous?: string;
  }

  declare interface browser$downloads$DoubleDelta {
    current?: number;
    previous?: number;
  }

  declare interface browser$downloads$BooleanDelta {
    current?: boolean;
    previous?: boolean;
  }

  /**
   * A time specified as a Date object, a number or string representing milliseconds since the epoch, or an ISO 8601
   * string
   */
  declare type browser$downloads$DownloadTime =
    | string
    | browser$extensionTypes$Date;

  /**
   * Parameters that combine to specify a predicate that can be used to select a set of downloads. Used for example
   * in search() and erase()
   */
  declare interface browser$downloads$DownloadQuery {
    /**
     * This array of search terms limits results to DownloadItems whose `filename` or `url` contain all of the
     * search terms that do not begin with a dash '-' and none of the search terms that do begin with a dash.
     */
    query?: string[];

    /**
     * Limits results to downloads that started before the given ms since the epoch.
     */
    startedBefore?: browser$downloads$DownloadTime;

    /**
     * Limits results to downloads that started after the given ms since the epoch.
     */
    startedAfter?: browser$downloads$DownloadTime;

    /**
     * Limits results to downloads that ended before the given ms since the epoch.
     */
    endedBefore?: browser$downloads$DownloadTime;

    /**
     * Limits results to downloads that ended after the given ms since the epoch.
     */
    endedAfter?: browser$downloads$DownloadTime;

    /**
     * Limits results to downloads whose totalBytes is greater than the given integer.
     */
    totalBytesGreater?: number;

    /**
     * Limits results to downloads whose totalBytes is less than the given integer.
     */
    totalBytesLess?: number;

    /**
     * Limits results to DownloadItems whose `filename` matches the given regular expression.
     */
    filenameRegex?: string;

    /**
     * Limits results to DownloadItems whose `url` matches the given regular expression.
     */
    urlRegex?: string;

    /**
     * Setting this integer limits the number of results. Otherwise, all matching DownloadItems will be returned.
     */
    limit?: number;

    /**
     * Setting elements of this array to DownloadItem properties in order to sort the search results. For example,
     * setting `orderBy='startTime'` sorts the DownloadItems by their start time in ascending order. To specify
     * descending order, prefix `orderBy` with a hyphen: '-startTime'.
     */
    orderBy?: string[];
    id?: number;

    /**
     * Absolute URL.
     */
    url?: string;

    /**
     * Absolute local path.
     */
    filename?: string;

    /**
     * Indication of whether this download is thought to be safe or known to be suspicious.
     */
    danger?: browser$downloads$DangerType;

    /**
     * The file's MIME type.
     */
    mime?: string;
    startTime?: string;
    endTime?: string;

    /**
     * Indicates whether the download is progressing, interrupted, or complete.
     */
    state?: browser$downloads$State;

    /**
     * True if the download has stopped reading data from the host, but kept the connection open.
     */
    paused?: boolean;

    /**
     * Why a download was interrupted.
     */
    error?: browser$downloads$InterruptReason;

    /**
     * Number of bytes received so far from the host, without considering file compression.
     */
    bytesReceived?: number;

    /**
     * Number of bytes in the whole file, without considering file compression, or -1 if unknown.
     */
    totalBytes?: number;

    /**
     * Number of bytes in the whole file post-decompression, or -1 if unknown.
     */
    fileSize?: number;
    exists?: boolean;
  }

  /**
   * The HTTP method to use if the URL uses the HTTP[S] protocol.
   */
  declare type browser$downloads$_DownloadMethod = "GET" | "POST";

  /**
   * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set
   * for its hostname. If both `filename` and `saveAs` are specified, then the Save As dialog will be displayed,
   * pre-populated with the specified `filename`. If the download started successfully, `callback` will be called
   * with the new DownloadItem's `downloadId`. If there was an error starting the download, then `callback` will be
   * called with `downloadId=undefined` and browser.extension.lastError will contain a descriptive string. The error
   * strings are not guaranteed to remain backwards compatible between releases. You must not parse it.
   * @param options What to download and how.
   */
  declare function browser$downloads$download(options: {
    /**
     * The URL to download.
     */
    url: string,

    /**
     * A file path relative to the Downloads directory to contain the downloaded file.
     */
    filename?: string,

    /**
     * Whether to associate the download with a private browsing session.
     */
    incognito?: boolean,
    conflictAction?: browser$downloads$FilenameConflictAction,

    /**
     * Use a file-chooser to allow the user to select a filename. If the option is not specified, the file chooser
     * will be shown only if the Firefox "Always ask you where to save files" option is enabled (i.e. the pref
     * `browser.download.useDownloadDir` is set to `false`).
     */
    saveAs?: boolean,

    /**
     * The HTTP method to use if the URL uses the HTTP[S] protocol.
     */
    method?: browser$downloads$_DownloadMethod,

    /**
     * Extra HTTP headers to send with the request if the URL uses the HTTP[s] protocol. Each header is represented
     * as a dictionary containing the keys `name` and either `value` or `binaryValue`, restricted to those allowed
     * by XMLHttpRequest.
     */
    headers?: Array<{
      /**
       * Name of the HTTP header.
       */
      name: string,

      /**
       * Value of the HTTP header.
       */
      value: string
    }>,

    /**
     * Post body.
     */
    body?: string
  }): Promise<number | void>;

  /**
   * Find DownloadItems. Set `query` to the empty object to get all DownloadItems. To get a specific DownloadItem,
   * set only the `id` field.
   */
  declare function browser$downloads$search(
    query: browser$downloads$DownloadQuery
  ): Promise<browser$downloads$DownloadItem[]>;

  /**
   * Pause the download. If the request was successful the download is in a paused state. Otherwise
   * browser.extension.lastError contains an error message. The request will fail if the download is not active.
   * @param downloadId The id of the download to pause.
   */
  declare function browser$downloads$pause(downloadId: number): Promise<void>;

  /**
   * Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise
   * browser.extension.lastError contains an error message. The request will fail if the download is not active.
   * @param downloadId The id of the download to resume.
   */
  declare function browser$downloads$resume(downloadId: number): Promise<void>;

  /**
   * Cancel a download. When `callback` is run, the download is cancelled, completed, interrupted or doesn't exist
   * anymore.
   * @param downloadId The id of the download to cancel.
   */
  declare function browser$downloads$cancel(downloadId: number): Promise<void>;

  /**
   * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated
   * event has been received. The image returned by this function while a download is in progress may be different
   * from the image returned after the download is complete. Icon retrieval is done by querying the underlying
   * operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a
   * number of factors including state of the download, platform, registered file types and visual theme. If a file
   * icon cannot be determined, browser.extension.lastError will contain an error message.
   * @param downloadId The identifier for the download.
   */
  declare function browser$downloads$getFileIcon(
    downloadId: number,
    options?: {
      /**
       * The size of the icon. The returned icon will be square with dimensions size * size pixels. The default size
       * for the icon is 32x32 pixels.
       */
      size?: number
    }
  ): Promise<string>;

  /**
   * Open the downloaded file.
   */
  declare function browser$downloads$open(downloadId: number): Promise<void>;

  /**
   * Show the downloaded file in its folder in a file manager.
   */
  declare function browser$downloads$show(
    downloadId: number
  ): Promise<boolean | void>;

  declare function browser$downloads$showDefaultFolder(): void;

  /**
   * Erase matching DownloadItems from history
   */
  declare function browser$downloads$erase(
    query: browser$downloads$DownloadQuery
  ): Promise<number[] | void>;

  declare function browser$downloads$removeFile(
    downloadId: number
  ): Promise<void>;

  /**
   * Prompt the user to either accept or cancel a dangerous download. `acceptDanger()` does not automatically accept
   * dangerous downloads.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$downloads$acceptDanger(
    downloadId: number
  ): Promise<void>;

  /**
   * Initiate dragging the file to another application.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$downloads$drag(downloadId: number): void;

  /**
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$downloads$setShelfEnabled(enabled: boolean): void;

  /**
   * This event fires with the DownloadItem object when a download begins.
   */
  declare var browser$downloads$onCreated: WebExtEvent<
    (downloadItem: browser$downloads$DownloadItem) => void
  >;

  /**
   * Fires with the `downloadId` when a download is erased from history.
   * @param downloadId The `id` of the DownloadItem that was erased.
   */
  declare var browser$downloads$onErased: WebExtEvent<
    (downloadId: number) => void
  >;

  /**
   * When any of a DownloadItem's properties except `bytesReceived` changes, this event fires with the `downloadId`
   * and an object containing the properties that changed.
   */
  declare var browser$downloads$onChanged: WebExtEvent<
    (downloadDelta: {
      /**
       * The `id` of the DownloadItem that changed.
       */
      id: number,

      /**
       * Describes a change in a DownloadItem's `url`.
       */
      url?: browser$downloads$StringDelta,

      /**
       * Describes a change in a DownloadItem's `filename`.
       */
      filename?: browser$downloads$StringDelta,

      /**
       * Describes a change in a DownloadItem's `danger`.
       */
      danger?: browser$downloads$StringDelta,

      /**
       * Describes a change in a DownloadItem's `mime`.
       */
      mime?: browser$downloads$StringDelta,

      /**
       * Describes a change in a DownloadItem's `startTime`.
       */
      startTime?: browser$downloads$StringDelta,

      /**
       * Describes a change in a DownloadItem's `endTime`.
       */
      endTime?: browser$downloads$StringDelta,

      /**
       * Describes a change in a DownloadItem's `state`.
       */
      state?: browser$downloads$StringDelta,
      canResume?: browser$downloads$BooleanDelta,

      /**
       * Describes a change in a DownloadItem's `paused`.
       */
      paused?: browser$downloads$BooleanDelta,

      /**
       * Describes a change in a DownloadItem's `error`.
       */
      error?: browser$downloads$StringDelta,

      /**
       * Describes a change in a DownloadItem's `totalBytes`.
       */
      totalBytes?: browser$downloads$DoubleDelta,

      /**
       * Describes a change in a DownloadItem's `fileSize`.
       */
      fileSize?: browser$downloads$DoubleDelta,
      exists?: browser$downloads$BooleanDelta
    }) => void
  >;

  /**
   * Description of a declarative rule for handling events.
   */
  declare interface browser$events$Rule {
    /**
     * Optional identifier that allows referencing this rule.
     */
    id?: string;

    /**
     * Tags can be used to annotate rules and perform operations on sets of rules.
     */
    tags?: string[];

    /**
     * List of conditions that can trigger the actions.
     */
    conditions: any[];

    /**
     * List of actions that are triggered if one of the condtions is fulfilled.
     */
    actions: any[];

    /**
     * Optional priority of this rule. Defaults to 100.
     */
    priority?: number;
  }

  /**
   * An object which allows the addition and removal of listeners for a Chrome event.
   */
  declare interface browser$events$Event {
    /**
     * Registers an event listener _callback_ to an event.
     * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
     */
    addListener(callback: () => void): void;

    /**
     * Deregisters an event listener _callback_ from an event.
     * @param callback Listener that shall be unregistered.
     */
    removeListener(callback: () => void): void;

    /**
     * @param callback Listener whose registration status shall be tested.
     * @returns True if _callback_ is registered to the event.
     */
    hasListener(callback: () => void): boolean;

    /**
     * @returns True if any event listeners are registered to the event.
     */
    hasListeners(): boolean;

    /**
     * Registers rules to handle events.
     * @param eventName Name of the event this function affects.
     * @param webViewInstanceId If provided, this is an integer that uniquely identfies the <webview> associated
     * with this function call.
     * @param rules Rules to be registered. These do not replace previously registered rules.
     * @deprecated Unsupported on Firefox at this time.
     */
    addRules?: (
      eventName: string,
      webViewInstanceId: number,
      rules: browser$events$Rule[]
    ) => Promise<browser$events$Rule[] | void>;

    /**
     * Returns currently registered rules.
     * @param eventName Name of the event this function affects.
     * @param webViewInstanceId If provided, this is an integer that uniquely identfies the <webview> associated
     * with this function call.
     * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are
     * returned.
     * @deprecated Unsupported on Firefox at this time.
     */
    getRules?: (
      eventName: string,
      webViewInstanceId: number,
      ruleIdentifiers?: string[]
    ) => Promise<browser$events$Rule[]>;

    /**
     * Unregisters currently registered rules.
     * @param eventName Name of the event this function affects.
     * @param webViewInstanceId If provided, this is an integer that uniquely identfies the <webview> associated
     * with this function call.
     * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are
     * unregistered.
     * @deprecated Unsupported on Firefox at this time.
     */
    removeRules?: (
      eventName: string,
      webViewInstanceId: number,
      ruleIdentifiers?: string[]
    ) => Promise<void>;
  }

  /**
   * Filters URLs for various criteria. See event filtering. All criteria are case sensitive.
   */
  declare interface browser$events$UrlFilter {
    /**
     * Matches if the host name of the URL contains a specified string. To test whether a host name component has a
     * prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot
     * is added at the beginning of the host name. Similarly, hostContains can be used to match against component
     * suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last
     * components need to be done separately using hostSuffix, because no implicit dot is added at the end of the
     * host name.
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
     * Matches if the path segment of the URL is equal to a specified string.
     */
    pathEquals?: string;

    /**
     * Matches if the path segment of the URL starts with a specified string.
     */
    pathPrefix?: string;

    /**
     * Matches if the path segment of the URL ends with a specified string.
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
     * Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from
     * the URL if they match the default port number.
     */
    urlContains?: string;

    /**
     * Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped
     * from the URL if they match the default port number.
     */
    urlEquals?: string;

    /**
     * Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are
     * stripped from the URL if they match the default port number. The regular expressions use the [RE2
     * syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
     */
    urlMatches?: string;

    /**
     * Matches if the URL without query segment and fragment identifier matches a specified regular expression.
     * Port numbers are stripped from the URL if they match the default port number. The regular expressions use
     * the [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
     */
    originAndPathMatches?: string;

    /**
     * Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped
     * from the URL if they match the default port number.
     */
    urlPrefix?: string;

    /**
     * Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped
     * from the URL if they match the default port number.
     */
    urlSuffix?: string;

    /**
     * Matches if the scheme of the URL is equal to any of the schemes specified in the array.
     */
    schemes?: string[];

    /**
     * Matches if the port of the URL is contained in any of the specified port lists. For example `[80, 443,
     *          * [1000, 1200]]` matches all requests on port 80, 443 and in the range 1000-1200.
     */
    ports?: Array<number | [number, number]>;
  }

  declare interface browser$experiments$ExperimentAPI {
    schema: experiments$ExperimentURL;
    parent?: {
      events?: experiments$APIEvents,
      paths?: experiments$APIPaths,
      script: experiments$ExperimentURL,
      scopes?: experiments$APIParentScope[]
    };
    child?: {
      paths: experiments$APIPaths,
      script: experiments$ExperimentURL,
      scopes: experiments$APIChildScope[]
    };
  }

  declare type browser$experiments$ExperimentURL = string;

  declare type browser$experiments$APIPaths = experiments$APIPath[];

  declare type browser$experiments$APIPath = string[];

  declare type browser$experiments$APIEvents = experiments$APIEvent[];

  declare type browser$experiments$APIEvent = "startup";

  declare type browser$experiments$APIParentScope =
    | "addon_parent"
    | "content_parent"
    | "devtools_parent";

  declare type browser$experiments$APIChildScope =
    | "addon_child"
    | "content_child"
    | "devtools_child";

  declare var npm$namespace$browser$extension: {
    getURL: typeof browser$extension$getURL,
    getViews: typeof browser$extension$getViews,
    getBackgroundPage: typeof browser$extension$getBackgroundPage,
    isAllowedIncognitoAccess: typeof browser$extension$isAllowedIncognitoAccess,
    isAllowedFileSchemeAccess: typeof browser$extension$isAllowedFileSchemeAccess,
    setUpdateUrlData: typeof browser$extension$setUpdateUrlData,
    lastError: typeof browser$extension$lastError,
    inIncognitoContext: typeof browser$extension$inIncognitoContext,
    onRequest: typeof browser$extension$onRequest,
    onRequestExternal: typeof browser$extension$onRequestExternal
  };

  /**
   * The type of extension view.
   */
  declare type browser$extension$ViewType = "tab" | "popup" | "sidebar";

  /**
   * Set for the lifetime of a callback if an ansychronous extension api has resulted in an error. If no error has
   * occured lastError will be `undefined`.
   */
  declare var browser$extension$lastError: {
    /**
     * Description of the error that has taken place.
     */
    message: string
  } | void;

  /**
   * True for content scripts running inside incognito tabs, and for extension pages running inside an incognito
   * process. The latter only applies to extensions with 'split' incognito_behavior.
   */
  declare var browser$extension$inIncognitoContext: boolean | void;

  /**
   * Converts a relative path within an extension install directory to a fully-qualified URL.
   * @param path A path to a resource within an extension expressed relative to its install directory.
   * @returns The fully-qualified URL to the resource.
   */
  declare function browser$extension$getURL(path: string): string;

  /**
   * Returns an array of the JavaScript 'window' objects for each of the pages running inside the current extension.
   * @returns Array of global objects
   */
  declare function browser$extension$getViews(fetchProperties?: {
    /**
     * The type of view to get. If omitted, returns all views (including background pages and tabs). Valid values:
     * 'tab', 'popup', 'sidebar'.
     */
    type?: browser$extension$ViewType,

    /**
     * The window to restrict the search to. If omitted, returns all views.
     */
    windowId?: number,

    /**
     * Find a view according to a tab id. If this field is omitted, returns all views.
     */
    tabId?: number
  }): windows$Window[];

  /**
   * Returns the JavaScript 'window' object for the background page running inside the current extension. Returns
   * null if the extension has no background page.
   */
  declare function browser$extension$getBackgroundPage(): windows$Window | void;

  /**
   * Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed
   * in Incognito' checkbox.
   */
  declare function browser$extension$isAllowedIncognitoAccess(): Promise<boolean>;

  /**
   * Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled
   * 'Allow access to File URLs' checkbox.
   */
  declare function browser$extension$isAllowedFileSchemeAccess(): Promise<boolean>;

  /**
   * Sets the value of the ap CGI parameter used in the extension's update URL. This value is ignored for extensions
   * that are hosted in the browser vendor's store.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$extension$setUpdateUrlData(data: string): void;

  /**
   * Fired when a request is sent from either an extension process or a content script.
   * @param request The request sent by the calling script.
   * @param sendResponse Function to call (at most once) when you have a response. The argument should be any
   * JSON-ifiable object, or undefined if there is no response. If you have more than one `onRequest` listener in
   * the same document, then only one may send a response.
   * @deprecated Please use `runtime.onMessage`.
   */
  declare var browser$extension$onRequest: WebExtEvent<
    (
      request: any,
      sender: browser$runtime$MessageSender,
      sendResponse: (response?: any) => void
    ) => void
  > | void;

  /**
   * Fired when a request is sent from another extension.
   * @param request The request sent by the calling script.
   * @param sendResponse Function to call when you have a response. The argument should be any JSON-ifiable object,
   * or undefined if there is no response.
   * @deprecated Please use `runtime.onMessageExternal`.
   */
  declare var browser$extension$onRequestExternal: WebExtEvent<
    (
      request: any,
      sender: browser$runtime$MessageSender,
      sendResponse: (response?: any) => void
    ) => void
  > | void;

  /**
   * The format of an image.
   */
  declare type browser$extensionTypes$ImageFormat = "jpeg" | "png";

  /**
   * Details about the format and quality of an image.
   */
  declare interface browser$extensionTypes$ImageDetails {
    /**
     * The format of the resulting image. Default is `"jpeg"`.
     */
    format?: browser$extensionTypes$ImageFormat;

    /**
     * When format is `"jpeg"`, controls the quality of the resulting image. This value is ignored for PNG images.
     * As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed
     * to store it will decrease.
     */
    quality?: number;
  }

  /**
   * The soonest that the JavaScript or CSS will be injected into the tab.
   */
  declare type browser$extensionTypes$RunAt =
    | "document_start"
    | "document_end"
    | "document_idle";

  /**
   * The origin of the CSS to inject, this affects the cascading order (priority) of the stylesheet.
   */
  declare type browser$extensionTypes$CSSOrigin = "user" | "author";

  /**
   * Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be
   * set at the same time.
   */
  declare interface browser$extensionTypes$InjectDetails {
    /**
     * JavaScript or CSS code to inject.
     *
     * **Warning:**
     * Be careful using the `code` parameter. Incorrect use of it may open your extension to [cross site
     * scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.
     */
    code?: string;

    /**
     * JavaScript or CSS file to inject.
     */
    file?: string;

    /**
     * If allFrames is `true`, implies that the JavaScript or CSS should be injected into all frames of current
     * page. By default, it's `false` and is only injected into the top frame.
     */
    allFrames?: boolean;

    /**
     * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your
     * extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default
     * it is `false`.
     */
    matchAboutBlank?: boolean;

    /**
     * The ID of the frame to inject the script into. This may not be used in combination with `allFrames`.
     */
    frameId?: number;

    /**
     * The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle".
     */
    runAt?: browser$extensionTypes$RunAt;

    /**
     * The css origin of the stylesheet to inject. Defaults to "author".
     */
    cssOrigin?: browser$extensionTypes$CSSOrigin;
  }

  declare type browser$extensionTypes$Date =
    | string
    | number
    | { [key: string]: any };

  declare type browser$extensionTypes$ExtensionFileOrCode =
    | {
        file: browser$_manifest$ExtensionURL
      }
    | {
        code: string
      };

  /**
   * A plain JSON value
   */
  declare type browser$extensionTypes$PlainJSONValue =
    | null
    | string
    | number
    | boolean
    | extensionTypes$_PlainJSONArray
    | extensionTypes$_PlainJSONObject;

  declare type browser$extensionTypes$_PlainJSONArray = {} & Array<browser$extensionTypes$PlainJSONValue>;

  declare interface browser$extensionTypes$_PlainJSONObject {
    [key: string]: browser$extensionTypes$PlainJSONValue;
  }

  declare var npm$namespace$browser$i18n: {
    getAcceptLanguages: typeof browser$i18n$getAcceptLanguages,
    getMessage: typeof browser$i18n$getMessage,
    getUILanguage: typeof browser$i18n$getUILanguage,
    detectLanguage: typeof browser$i18n$detectLanguage
  };

  /**
   * An ISO language code such as `en` or `fr`. For a complete list of languages supported by this method, see
   * [kLanguageInfoTable](http://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc).
   * For an unknown language, `und` will be returned, which means that [percentage] of the text is unknown to CLD
   */
  declare type browser$i18n$LanguageCode = string;

  /**
   * Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the
   * locale, use `i18n.getUILanguage`.
   */
  declare function browser$i18n$getAcceptLanguages(): Promise<
    browser$i18n$LanguageCode[]
  >;

  /**
   * Gets the localized string for the specified message. If the message is missing, this method returns an empty
   * string (''). If the format of the `getMessage()` call is wrong — for example, _messageName_ is not a string or
   * the _substitutions_ array has more than 9 elements — this method returns `undefined`.
   * @param messageName The name of the message, as specified in the `messages.json` file.
   * @param substitutions Substitution strings, if the message requires any.
   * @returns Message localized for current locale.
   */
  declare function browser$i18n$getMessage(
    messageName: string,
    substitutions?: any
  ): string;

  /**
   * Gets the browser UI language of the browser. This is different from `i18n.getAcceptLanguages` which returns the
   * preferred user languages.
   * @returns The browser UI language code such as en-US or fr-FR.
   */
  declare function browser$i18n$getUILanguage(): string;

  /**
   * Detects the language of the provided text using CLD.
   * @param text User input string to be translated.
   */
  declare function browser$i18n$detectLanguage(
    text: string
  ): Promise<{
    /**
     * CLD detected language reliability
     */
    isReliable: boolean,

    /**
     * array of detectedLanguage
     */
    languages: Array<{
      language: browser$i18n$LanguageCode,

      /**
       * The percentage of the detected language
       */
      percentage: number
    }>
  }>;

  declare var npm$namespace$browser$identity: {
    getAccounts: typeof browser$identity$getAccounts,
    getAuthToken: typeof browser$identity$getAuthToken,
    getProfileUserInfo: typeof browser$identity$getProfileUserInfo,
    removeCachedAuthToken: typeof browser$identity$removeCachedAuthToken,
    launchWebAuthFlow: typeof browser$identity$launchWebAuthFlow,
    getRedirectURL: typeof browser$identity$getRedirectURL,
    onSignInChanged: typeof browser$identity$onSignInChanged
  };

  /**
   * An object encapsulating an OAuth account id.
   */
  declare interface browser$identity$AccountInfo {
    /**
     * A unique identifier for the account. This ID will not change for the lifetime of the account.
     */
    id: string;
  }

  /**
   * Retrieves a list of AccountInfo objects describing the accounts present on the profile.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$identity$getAccounts(): Promise<
    browser$identity$AccountInfo[]
  >;

  /**
   * Gets an OAuth2 access token using the client ID and scopes specified in the oauth2 section of manifest.json.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$identity$getAuthToken(details?: {
    interactive?: boolean,
    account?: browser$identity$AccountInfo,
    scopes?: string[]
  }): Promise<browser$identity$AccountInfo[] | void>;

  /**
   * Retrieves email address and obfuscated gaia id of the user signed into a profile.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$identity$getProfileUserInfo(): Promise<{
    email: string,
    id: string
  }>;

  /**
   * Removes an OAuth2 access token from the Identity API's token cache.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$identity$removeCachedAuthToken(details: {
    token: string
  }): Promise<{
    email: string,
    id: string
  } | void>;

  /**
   * Starts an auth flow at the specified URL.
   */
  declare function browser$identity$launchWebAuthFlow(details: {
    url: browser$_manifest$HttpURL,
    interactive?: boolean
  }): Promise<string>;

  /**
   * Generates a redirect URL to be used in |launchWebAuthFlow|.
   * @param path The path appended to the end of the generated URL.
   */
  declare function browser$identity$getRedirectURL(path?: string): string;

  /**
   * Fired when signin state changes for an account on the user's profile.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$identity$onSignInChanged: WebExtEvent<
    (account: browser$identity$AccountInfo, signedIn: boolean) => void
  > | void;

  declare var npm$namespace$browser$idle: {
    queryState: typeof browser$idle$queryState,
    setDetectionInterval: typeof browser$idle$setDetectionInterval,
    onStateChanged: typeof browser$idle$onStateChanged
  };
  declare type browser$idle$IdleState = "active" | "idle";

  /**
   * Returns "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
   * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have
   * elapsed since the last user input detected.
   */
  declare function browser$idle$queryState(
    detectionIntervalInSeconds: number
  ): Promise<browser$idle$IdleState>;

  /**
   * Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events.
   * The default interval is 60 seconds.
   * @param intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state.
   */
  declare function browser$idle$setDetectionInterval(
    intervalInSeconds: number
  ): void;

  /**
   * Fired when the system changes to an active or idle state. The event fires with "idle" if the the user has not
   * generated any input for a specified number of seconds, and "active" when the user generates input on an idle
   * system.
   */
  declare var browser$idle$onStateChanged: WebExtEvent<
    (newState: browser$idle$IdleState) => void
  >;

  declare var npm$namespace$browser$management: {
    getAll: typeof browser$management$getAll,
    get: typeof browser$management$get,
    install: typeof browser$management$install,
    getSelf: typeof browser$management$getSelf,
    uninstallSelf: typeof browser$management$uninstallSelf,
    setEnabled: typeof browser$management$setEnabled,
    onDisabled: typeof browser$management$onDisabled,
    onEnabled: typeof browser$management$onEnabled,
    onInstalled: typeof browser$management$onInstalled,
    onUninstalled: typeof browser$management$onUninstalled
  };

  /**
   * Information about an icon belonging to an extension.
   */
  declare interface browser$management$IconInfo {
    /**
     * A number representing the width and height of the icon. Likely values include (but are not limited to) 128,
     * 48, 24, and 16.
     */
    size: number;

    /**
     * The URL for this icon image. To display a grayscale version of the icon (to indicate that an extension is
     * disabled, for example), append `?grayscale=true` to the URL.
     */
    url: string;
  }

  /**
   * A reason the item is disabled.
   */
  declare type browser$management$ExtensionDisabledReason =
    | "unknown"
    | "permissions_increase";

  /**
   * The type of this extension, 'extension' or 'theme'.
   */
  declare type browser$management$ExtensionType = "extension" | "theme";

  /**
   * How the extension was installed. One of
   * `development`: The extension was loaded unpacked in developer mode,
   * `normal`: The extension was installed normally via an .xpi file,
   * `sideload`: The extension was installed by other software on the machine,
   * `other`: The extension was installed by other means.
   */
  declare type browser$management$ExtensionInstallType =
    | "development"
    | "normal"
    | "sideload"
    | "other";

  /**
   * Information about an installed extension.
   */
  declare interface browser$management$ExtensionInfo {
    /**
     * The extension's unique identifier.
     */
    id: string;

    /**
     * The name of this extension.
     */
    name: string;

    /**
     * A short version of the name of this extension.
     */
    shortName?: string;

    /**
     * The description of this extension.
     */
    description: string;

    /**
     * The version of this extension.
     */
    version: string;

    /**
     * The version name of this extension if the manifest specified one.
     */
    versionName?: string;

    /**
     * Whether this extension can be disabled or uninstalled by the user.
     */
    mayDisable: boolean;

    /**
     * Whether it is currently enabled or disabled.
     */
    enabled: boolean;

    /**
     * A reason the item is disabled.
     */
    disabledReason?: browser$management$ExtensionDisabledReason;

    /**
     * The type of this extension, 'extension' or 'theme'.
     */
    type: browser$management$ExtensionType;

    /**
     * The URL of the homepage of this extension.
     */
    homepageUrl?: string;

    /**
     * The update URL of this extension.
     */
    updateUrl?: string;

    /**
     * The url for the item's options page, if it has one.
     */
    optionsUrl: string;

    /**
     * A list of icon information. Note that this just reflects what was declared in the manifest, and the actual
     * image at that url may be larger or smaller than what was declared, so you might consider using explicit
     * width and height attributes on img tags referencing these images. See the manifest documentation on icons
     * for more details.
     */
    icons?: browser$management$IconInfo[];

    /**
     * Returns a list of API based permissions.
     */
    permissions?: string[];

    /**
     * Returns a list of host based permissions.
     */
    hostPermissions?: string[];

    /**
     * How the extension was installed.
     */
    installType: browser$management$ExtensionInstallType;
  }

  /**
   * Returns a list of information about installed extensions.
   */
  declare function browser$management$getAll(): Promise<
    browser$management$ExtensionInfo[] | void
  >;

  /**
   * Returns information about the installed extension that has the given ID.
   * @param id The ID from an item of `management.ExtensionInfo`.
   */
  declare function browser$management$get(
    id: browser$_manifest$ExtensionID
  ): Promise<browser$management$ExtensionInfo | void>;

  /**
   * Installs and enables a theme extension from the given url.
   */
  declare function browser$management$install(options: {
    /**
     * URL pointing to the XPI file on addons.mozilla.org or similar.
     */
    url: browser$_manifest$HttpURL,

    /**
     * A hash of the XPI file, using sha256 or stronger.
     */
    hash?: string
  }): Promise<{
    id: browser$_manifest$ExtensionID
  } | void>;

  /**
   * Returns information about the calling extension. Note: This function can be used without requesting the
   * 'management' permission in the manifest.
   */
  declare function browser$management$getSelf(): Promise<browser$management$ExtensionInfo | void>;

  /**
   * Uninstalls the calling extension. Note: This function can be used without requesting the 'management' permission
   * in the manifest.
   */
  declare function browser$management$uninstallSelf(options?: {
    /**
     * Whether or not a confirm-uninstall dialog should prompt the user. Defaults to false.
     */
    showConfirmDialog?: boolean,

    /**
     * The message to display to a user when being asked to confirm removal of the extension.
     */
    dialogMessage?: string
  }): Promise<void>;

  /**
   * Enables or disables the given add-on.
   * @param id ID of the add-on to enable/disable.
   * @param enabled Whether to enable or disable the add-on.
   */
  declare function browser$management$setEnabled(
    id: string,
    enabled: boolean
  ): Promise<void>;

  /**
   * Fired when an addon has been disabled.
   */
  declare var browser$management$onDisabled: WebExtEvent<
    (info: browser$management$ExtensionInfo) => void
  >;

  /**
   * Fired when an addon has been enabled.
   */
  declare var browser$management$onEnabled: WebExtEvent<
    (info: browser$management$ExtensionInfo) => void
  >;

  /**
   * Fired when an addon has been installed.
   */
  declare var browser$management$onInstalled: WebExtEvent<
    (info: browser$management$ExtensionInfo) => void
  >;

  /**
   * Fired when an addon has been uninstalled.
   */
  declare var browser$management$onUninstalled: WebExtEvent<
    (info: browser$management$ExtensionInfo) => void
  >;

  declare var npm$namespace$browser$notifications: {
    create: typeof browser$notifications$create,
    update: typeof browser$notifications$update,
    clear: typeof browser$notifications$clear,
    getAll: typeof browser$notifications$getAll,
    getPermissionLevel: typeof browser$notifications$getPermissionLevel,
    onClosed: typeof browser$notifications$onClosed,
    onClicked: typeof browser$notifications$onClicked,
    onButtonClicked: typeof browser$notifications$onButtonClicked,
    onPermissionLevelChanged: typeof browser$notifications$onPermissionLevelChanged,
    onShowSettings: typeof browser$notifications$onShowSettings,
    onShown: typeof browser$notifications$onShown
  };
  declare type browser$notifications$TemplateType =
    | "basic"
    | "image"
    | "list"
    | "progress";

  declare type browser$notifications$PermissionLevel = "granted" | "denied";

  declare interface browser$notifications$NotificationItem {
    /**
     * Title of one item of a list notification.
     */
    title: string;

    /**
     * Additional details about this item.
     */
    message: string;
  }

  declare interface browser$notifications$CreateNotificationOptions {
    /**
     * Which type of notification to display.
     */
    type: browser$notifications$TemplateType;

    /**
     * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
     */
    iconUrl?: string;

    /**
     * A URL to the app icon mask.
     */
    appIconMaskUrl?: string;

    /**
     * Title of the notification (e.g. sender name for email).
     */
    title: string;

    /**
     * Main notification content.
     */
    message: string;

    /**
     * Alternate notification content with a lower-weight font.
     */
    contextMessage?: string;

    /**
     * Priority ranges from -2 to 2\. -2 is lowest priority. 2 is highest. Zero is default.
     */
    priority?: number;

    /**
     * A timestamp associated with the notification, in milliseconds past the epoch.
     */
    eventTime?: number;

    /**
     * Text and icons for up to two notification action buttons.
     * @deprecated Unsupported on Firefox at this time.
     */
    buttons?: Array<{
      title: string,
      iconUrl?: string
    }>;

    /**
     * A URL to the image thumbnail for image-type notifications.
     */
    imageUrl?: string;

    /**
     * Items for multi-item notifications.
     */
    items?: browser$notifications$NotificationItem[];

    /**
     * Current progress ranges from 0 to 100.
     */
    progress?: number;

    /**
     * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
     */
    isClickable?: boolean;
  }

  declare interface browser$notifications$UpdateNotificationOptions {
    /**
     * Which type of notification to display.
     */
    type?: browser$notifications$TemplateType;

    /**
     * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
     */
    iconUrl?: string;

    /**
     * A URL to the app icon mask.
     */
    appIconMaskUrl?: string;

    /**
     * Title of the notification (e.g. sender name for email).
     */
    title?: string;

    /**
     * Main notification content.
     */
    message?: string;

    /**
     * Alternate notification content with a lower-weight font.
     */
    contextMessage?: string;

    /**
     * Priority ranges from -2 to 2\. -2 is lowest priority. 2 is highest. Zero is default.
     */
    priority?: number;

    /**
     * A timestamp associated with the notification, in milliseconds past the epoch.
     */
    eventTime?: number;

    /**
     * Text and icons for up to two notification action buttons.
     * @deprecated Unsupported on Firefox at this time.
     */
    buttons?: Array<{
      title: string,
      iconUrl?: string
    }>;

    /**
     * A URL to the image thumbnail for image-type notifications.
     */
    imageUrl?: string;

    /**
     * Items for multi-item notifications.
     */
    items?: browser$notifications$NotificationItem[];

    /**
     * Current progress ranges from 0 to 100.
     */
    progress?: number;

    /**
     * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
     */
    isClickable?: boolean;
  }

  /**
   * Creates and displays a notification.
   * @param options Contents of the notification.
   */
  declare function browser$notifications$create(
    options: browser$notifications$CreateNotificationOptions
  ): Promise<string | void>;

  /**
   * Creates and displays a notification.
   * @param notificationId Identifier of the notification. If it is empty, this method generates an id. If it matches
   * an existing notification, this method first clears that notification before proceeding with the create
   * operation.
   * @param options Contents of the notification.
   */
  declare function browser$notifications$create(
    notificationId: string,
    options: browser$notifications$CreateNotificationOptions
  ): Promise<string | void>;

  /**
   * Updates an existing notification.
   * @param notificationId The id of the notification to be updated.
   * @param options Contents of the notification to update to.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$notifications$update(
    notificationId: string,
    options: browser$notifications$UpdateNotificationOptions
  ): Promise<boolean | void>;

  /**
   * Clears an existing notification.
   * @param notificationId The id of the notification to be updated.
   */
  declare function browser$notifications$clear(
    notificationId: string
  ): Promise<boolean | void>;

  /**
   * Retrieves all the notifications.
   */
  declare function browser$notifications$getAll(): Promise<browser$notifications$CreateNotificationOptions>;

  /**
   * Retrieves whether the user has enabled notifications from this app or extension.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$notifications$getPermissionLevel(): Promise<browser$notifications$PermissionLevel>;

  /**
   * Fired when the notification closed, either by the system or by user action.
   * @param notificationId The notificationId of the closed notification.
   * @param byUser True if the notification was closed by the user.
   */
  declare var browser$notifications$onClosed: WebExtEvent<
    (notificationId: string, byUser: boolean) => void
  >;

  /**
   * Fired when the user clicked in a non-button area of the notification.
   * @param notificationId The notificationId of the clicked notification.
   */
  declare var browser$notifications$onClicked: WebExtEvent<
    (notificationId: string) => void
  >;

  /**
   * Fired when the user pressed a button in the notification.
   * @param notificationId The notificationId of the clicked notification.
   * @param buttonIndex The index of the button clicked by the user.
   */
  declare var browser$notifications$onButtonClicked: WebExtEvent<
    (notificationId: string, buttonIndex: number) => void
  >;

  /**
   * Fired when the user changes the permission level.
   * @param level The new permission level.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$notifications$onPermissionLevelChanged: WebExtEvent<
    (level: browser$notifications$PermissionLevel) => void
  > | void;

  /**
   * Fired when the user clicked on a link for the app's notification settings.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$notifications$onShowSettings: WebExtEvent<
    () => void
  > | void;

  /**
   * Fired when the notification is shown.
   * @param notificationId The notificationId of the shown notification.
   */
  declare var browser$notifications$onShown: WebExtEvent<
    (notificationId: string) => void
  >;

  declare var npm$namespace$browser$permissions: {
    getAll: typeof browser$permissions$getAll,
    contains: typeof browser$permissions$contains,
    request: typeof browser$permissions$request,
    remove: typeof browser$permissions$remove,
    onAdded: typeof browser$permissions$onAdded,
    onRemoved: typeof browser$permissions$onRemoved
  };
  declare interface browser$permissions$Permissions {
    permissions?: browser$_manifest$OptionalPermission[];
    origins?: browser$_manifest$MatchPattern[];
  }

  declare interface browser$permissions$AnyPermissions {
    permissions?: browser$_manifest$Permission[];
    origins?: browser$_manifest$MatchPattern[];
  }

  /**
   * Get a list of all the extension's permissions.
   */
  declare function browser$permissions$getAll(): Promise<browser$permissions$AnyPermissions>;

  /**
   * Check if the extension has the given permissions.
   */
  declare function browser$permissions$contains(
    permissions: browser$permissions$AnyPermissions
  ): Promise<boolean>;

  /**
   * Request the given permissions.
   *
   * Not allowed in: Devtools pages
   */
  declare function browser$permissions$request(
    permissions: browser$permissions$Permissions
  ): Promise<boolean>;

  /**
   * Relinquish the given permissions.
   */
  declare function browser$permissions$remove(
    permissions: browser$permissions$Permissions
  ): Promise<void>;

  /**
   * Fired when the extension acquires new permissions.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$permissions$onAdded: WebExtEvent<
    (permissions: browser$permissions$Permissions) => void
  > | void;

  /**
   * Fired when permissions are removed from the extension.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$permissions$onRemoved: WebExtEvent<
    (permissions: browser$permissions$Permissions) => void
  > | void;

  declare var npm$namespace$browser$privacy: {
    network: typeof npm$namespace$browser$privacy$network,
    services: typeof npm$namespace$browser$privacy$services,
    websites: typeof npm$namespace$browser$privacy$websites
  };

  declare var npm$namespace$browser$privacy$network: {
    networkPredictionEnabled: typeof browser$privacy$network$networkPredictionEnabled,
    peerConnectionEnabled: typeof browser$privacy$network$peerConnectionEnabled,
    webRTCIPHandlingPolicy: typeof browser$privacy$network$webRTCIPHandlingPolicy
  };

  /**
   * The IP handling policy of WebRTC.
   */
  declare type browser$privacy$network$IPHandlingPolicy =
    | "default"
    | "default_public_and_private_interfaces"
    | "default_public_interface_only"
    | "disable_non_proxied_udp";

  /**
   * If enabled, the browser attempts to speed up your web browsing experience by pre-resolving DNS entries,
   * prerendering sites (`<link rel='prefetch' ...>`), and preemptively opening TCP and SSL connections to servers.
   * This preference's value is a boolean, defaulting to `true`.
   */
  declare var browser$privacy$network$networkPredictionEnabled: browser$types$Setting;

  /**
   * Allow users to enable and disable RTCPeerConnections (aka WebRTC).
   */
  declare var browser$privacy$network$peerConnectionEnabled: browser$types$Setting;

  /**
   * Allow users to specify the media performance/privacy tradeoffs which impacts how WebRTC traffic will be routed
   * and how much local address information is exposed. This preference's value is of type IPHandlingPolicy,
   * defaulting to `default`.
   */
  declare var browser$privacy$network$webRTCIPHandlingPolicy: browser$types$Setting;

  declare var npm$namespace$browser$privacy$services: {
    passwordSavingEnabled: typeof browser$privacy$services$passwordSavingEnabled
  };

  /**
   * If enabled, the password manager will ask if you want to save passwords. This preference's value is a boolean,
   * defaulting to `true`.
   */
  declare var browser$privacy$services$passwordSavingEnabled: browser$types$Setting;

  declare var npm$namespace$browser$privacy$websites: {
    thirdPartyCookiesAllowed: typeof browser$privacy$websites$thirdPartyCookiesAllowed,
    hyperlinkAuditingEnabled: typeof browser$privacy$websites$hyperlinkAuditingEnabled,
    referrersEnabled: typeof browser$privacy$websites$referrersEnabled,
    resistFingerprinting: typeof browser$privacy$websites$resistFingerprinting,
    firstPartyIsolate: typeof browser$privacy$websites$firstPartyIsolate,
    protectedContentEnabled: typeof browser$privacy$websites$protectedContentEnabled,
    trackingProtectionMode: typeof browser$privacy$websites$trackingProtectionMode,
    cookieConfig: typeof browser$privacy$websites$cookieConfig
  };

  /**
   * The mode for tracking protection.
   */
  declare type browser$privacy$websites$TrackingProtectionModeOption =
    | "always"
    | "never"
    | "private_browsing";

  /**
   * The settings for cookies.
   */
  declare interface browser$privacy$websites$CookieConfig {
    /**
     * The type of cookies to allow.
     */
    behavior?: websites$_CookieConfigBehavior;

    /**
     * Whether to create all cookies as nonPersistent (i.e., session) cookies.
     */
    nonPersistentCookies?: boolean;
  }

  /**
   * The type of cookies to allow.
   */
  declare type browser$privacy$websites$_CookieConfigBehavior =
    | "allow_all"
    | "reject_all"
    | "reject_third_party"
    | "allow_visited"
    | "reject_trackers";

  /**
   * If disabled, the browser blocks third-party sites from setting cookies. The value of this preference is of type
   * boolean, and the default value is `true`.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$privacy$websites$thirdPartyCookiesAllowed: browser$types$Setting | void;

  /**
   * If enabled, the browser sends auditing pings when requested by a website (`<a ping>`). The value of this
   * preference is of type boolean, and the default value is `true`.
   */
  declare var browser$privacy$websites$hyperlinkAuditingEnabled: browser$types$Setting;

  /**
   * If enabled, the browser sends `referer` headers with your requests. Yes, the name of this preference doesn't
   * match the misspelled header. No, we're not going to change it. The value of this preference is of type boolean,
   * and the default value is `true`.
   */
  declare var browser$privacy$websites$referrersEnabled: browser$types$Setting;

  /**
   * If enabled, the browser attempts to appear similar to other users by reporting generic information to websites.
   * This can prevent websites from uniquely identifying users. Examples of data that is spoofed include number of
   * CPU cores, precision of JavaScript timers, the local timezone, and disabling features such as GamePad support,
   * and the WebSpeech and Navigator APIs. The value of this preference is of type boolean, and the default value is
   * `false`.
   */
  declare var browser$privacy$websites$resistFingerprinting: browser$types$Setting;

  /**
   * If enabled, the browser will associate all data (including cookies, HSTS data, cached images, and more) for any
   * third party domains with the domain in the address bar. This prevents third party trackers from using directly
   * stored information to identify you across different websites, but may break websites where you login with a
   * third party account (such as a Facebook or Google login.) The value of this preference is of type boolean, and
   * the default value is `false`.
   */
  declare var browser$privacy$websites$firstPartyIsolate: browser$types$Setting;

  /**
   * **Available on Windows and ChromeOS only**: If enabled, the browser provides a unique ID to plugins in order to
   * run protected content. The value of this preference is of type boolean, and the default value is `true`.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$privacy$websites$protectedContentEnabled: browser$types$Setting | void;

  /**
   * Allow users to specify the mode for tracking protection. This setting's value is of type
   * TrackingProtectionModeOption, defaulting to `private_browsing_only`.
   */
  declare var browser$privacy$websites$trackingProtectionMode: browser$types$Setting;

  /**
   * Allow users to specify the default settings for allowing cookies, as well as whether all cookies should be
   * created as non-persistent cookies. This setting's value is of type CookieConfig.
   */
  declare var browser$privacy$websites$cookieConfig: browser$types$Setting;

  declare var npm$namespace$browser$proxy: {
    register: typeof browser$proxy$register,
    unregister: typeof browser$proxy$unregister,
    registerProxyScript: typeof browser$proxy$registerProxyScript,
    settings: typeof browser$proxy$settings,
    onRequest: typeof browser$proxy$onRequest,
    onError: typeof browser$proxy$onError,
    onProxyError: typeof browser$proxy$onProxyError
  };

  /**
   * An object which describes proxy settings.
   */
  declare interface browser$proxy$ProxyConfig {
    /**
     * The type of proxy to use.
     */
    proxyType?: proxy$_ProxyConfigProxyType;

    /**
     * The address of the http proxy, can include a port.
     */
    http?: string;

    /**
     * Use the http proxy server for all protocols.
     */
    httpProxyAll?: boolean;

    /**
     * The address of the ftp proxy, can include a port.
     */
    ftp?: string;

    /**
     * The address of the ssl proxy, can include a port.
     */
    ssl?: string;

    /**
     * The address of the socks proxy, can include a port.
     */
    socks?: string;

    /**
     * The version of the socks proxy.
     */
    socksVersion?: number;

    /**
     * A list of hosts which should not be proxied.
     */
    passthrough?: string;

    /**
     * A URL to use to configure the proxy.
     */
    autoConfigUrl?: string;

    /**
     * Do not prompt for authentication if password is saved.
     */
    autoLogin?: boolean;

    /**
     * Proxy DNS when using SOCKS v5.
     */
    proxyDNS?: boolean;
  }

  /**
   * The type of proxy to use.
   */
  declare type browser$proxy$_ProxyConfigProxyType =
    | "none"
    | "autoDetect"
    | "system"
    | "manual"
    | "autoConfig";

  declare type browser$proxy$_ProxyOnRequestEvent<
    T = (details: {
      requestId: string,
      url: string,

      method: string,

      frameId: number,

      parentFrameId: number,

      originUrl?: string,

      documentUrl?: string,

      tabId: number,

      type: browser$webRequest$ResourceType,

      timeStamp: number,

      ip?: string,

      fromCache: boolean,

      requestHeaders?: browser$webRequest$HttpHeaders
    }) => void

    /**
     * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
     * relate different events of the same request.
     */

    /**
     * Standard HTTP method.
     */

    /**
     * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
     * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
     * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
     * within a tab.
     */

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */

    /**
     * URL of the resource that triggered this request.
     */

    /**
     * URL of the page into which the requested resource will be loaded.
     */

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */

    /**
     * How the requested resource will be used.
     */

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */

    /**
     * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
     */

    /**
     * Indicates if this response was fetched from disk cache.
     */

    /**
     * The HTTP request headers that are going to be sent out with this request.
     */
  > = WebExtEventBase<
    (
      callback: T,
      filter: browser$webRequest$RequestFilter,
      extraInfoSpec?: Array<"requestHeaders">
    ) => void,
    T
  >;

  /**
   * Configures proxy settings. This setting's value is an object of type ProxyConfig.
   */
  declare var browser$proxy$settings: browser$types$Setting;

  /**
   * Registers the proxy script for the extension.
   */
  declare function browser$proxy$register(url: string): Promise<void>;

  /**
   * Unregisters the proxy script for the extension.
   */
  declare function browser$proxy$unregister(): Promise<void>;

  /**
   * Registers the proxy script for the extension.
   * @deprecated Please use `proxy.register`
   */
  declare function browser$proxy$registerProxyScript(url: string): Promise<any>;

  /**
   * Fired when proxy data is needed for a request.
   */
  declare var browser$proxy$onRequest: browser$proxy$_ProxyOnRequestEvent<>;

  /**
   * Notifies about proxy script errors.
   */
  declare var browser$proxy$onError: WebExtEvent<
    (error: { [key: string]: any }) => void
  >;

  /**
   * Please use `proxy.onError`.
   */
  declare var browser$proxy$onProxyError: WebExtEvent<
    (error: { [key: string]: any }) => void
  >;

  declare var npm$namespace$browser$runtime: {
    getBackgroundPage: typeof browser$runtime$getBackgroundPage,
    openOptionsPage: typeof browser$runtime$openOptionsPage,
    getManifest: typeof browser$runtime$getManifest,
    getURL: typeof browser$runtime$getURL,
    setUninstallURL: typeof browser$runtime$setUninstallURL,
    reload: typeof browser$runtime$reload,
    requestUpdateCheck: typeof browser$runtime$requestUpdateCheck,
    restart: typeof browser$runtime$restart,
    connect: typeof browser$runtime$connect,
    connectNative: typeof browser$runtime$connectNative,
    sendMessage: typeof browser$runtime$sendMessage,
    sendNativeMessage: typeof browser$runtime$sendNativeMessage,
    getBrowserInfo: typeof browser$runtime$getBrowserInfo,
    getPlatformInfo: typeof browser$runtime$getPlatformInfo,
    getPackageDirectoryEntry: typeof browser$runtime$getPackageDirectoryEntry,
    lastError: typeof browser$runtime$lastError,
    id: typeof browser$runtime$id,
    onStartup: typeof browser$runtime$onStartup,
    onInstalled: typeof browser$runtime$onInstalled,
    onSuspend: typeof browser$runtime$onSuspend,
    onSuspendCanceled: typeof browser$runtime$onSuspendCanceled,
    onUpdateAvailable: typeof browser$runtime$onUpdateAvailable,
    onBrowserUpdateAvailable: typeof browser$runtime$onBrowserUpdateAvailable,
    onConnect: typeof browser$runtime$onConnect,
    onConnectExternal: typeof browser$runtime$onConnectExternal,
    onMessage: typeof browser$runtime$onMessage,
    onMessageExternal: typeof browser$runtime$onMessageExternal,
    onRestartRequired: typeof browser$runtime$onRestartRequired
  };

  /**
   * An object which allows two way communication with other pages.
   */
  declare interface browser$runtime$Port {
    name: string;
    disconnect: () => void;
    onDisconnect: browser$events$Event;
    onMessage: browser$events$Event;
    postMessage: (message: { [key: string]: any }) => void;

    /**
     * This property will **only** be present on ports passed to onConnect/onConnectExternal listeners.
     */
    sender?: runtime$MessageSender;
  }

  /**
   * An object containing information about the script context that sent a message or request.
   */
  declare interface browser$runtime$MessageSender {
    /**
     * The `tabs.Tab` which opened the connection, if any. This property will **only** be present when the
     * connection was opened from a tab (including content scripts), and **only** if the receiver is an extension,
     * not an app.
     */
    tab?: browser$tabs$Tab;

    /**
     * The frame that opened the connection. 0 for top-level frames, positive for child frames. This will only be
     * set when `tab` is set.
     */
    frameId?: number;

    /**
     * The ID of the extension or app that opened the connection, if any.
     */
    id?: string;

    /**
     * The URL of the page or frame that opened the connection. If the sender is in an iframe, it will be iframe's
     * URL not the URL of the page which hosts it.
     */
    url?: string;

    /**
     * The TLS channel ID of the page or frame that opened the connection, if requested by the extension or app,
     * and if available.
     * @deprecated Unsupported on Firefox at this time.
     */
    tlsChannelId?: string;
  }

  /**
   * The operating system the browser is running on.
   */
  declare type browser$runtime$PlatformOs =
    | "mac"
    | "win"
    | "android"
    | "cros"
    | "linux"
    | "openbsd";

  /**
   * The machine's processor architecture.
   */
  declare type browser$runtime$PlatformArch = "arm" | "x86-32" | "x86-64";

  /**
   * An object containing information about the current platform.
   */
  declare interface browser$runtime$PlatformInfo {
    /**
     * The operating system the browser is running on.
     */
    os: browser$runtime$PlatformOs;

    /**
     * The machine's processor architecture.
     */
    arch: browser$runtime$PlatformArch;

    /**
     * The native client architecture. This may be different from arch on some platforms.
     * @deprecated Unsupported on Firefox at this time.
     */
    nacl_arch?: runtime$PlatformNaclArch;
  }

  /**
   * An object containing information about the current browser.
   */
  declare interface browser$runtime$BrowserInfo {
    /**
     * The name of the browser, for example 'Firefox'.
     */
    name: string;

    /**
     * The name of the browser vendor, for example 'Mozilla'.
     */
    vendor: string;

    /**
     * The browser's version, for example '42.0.0' or '0.8.1pre'.
     */
    version: string;

    /**
     * The browser's build ID/date, for example '20160101'.
     */
    buildID: string;
  }

  /**
   * Result of the update check.
   */
  declare type browser$runtime$RequestUpdateCheckStatus =
    | "throttled"
    | "no_update"
    | "update_available";

  /**
   * The reason that this event is being dispatched.
   */
  declare type browser$runtime$OnInstalledReason =
    | "install"
    | "update"
    | "browser_update";

  /**
   * The reason that the event is being dispatched. 'app_update' is used when the restart is needed because the
   * application is updated to a newer version. 'os_update' is used when the restart is needed because the browser/OS
   * is updated to a newer version. 'periodic' is used when the system runs for more than the permitted uptime set in
   * the enterprise policy.
   */
  declare type browser$runtime$OnRestartRequiredReason =
    | "app_update"
    | "os_update"
    | "periodic";

  declare type browser$runtime$PlatformNaclArch = any;

  /**
   * This will be defined during an API method callback if there was an error
   */
  declare var browser$runtime$lastError: {
    /**
     * Details about the error which occurred.
     */
    message?: string
  } | void;

  /**
   * The ID of the extension/app.
   */
  declare var browser$runtime$id: string;

  /**
   * Retrieves the JavaScript 'window' object for the background page running inside the current extension/app. If
   * the background page is an event page, the system will ensure it is loaded before calling the callback. If there
   * is no background page, an error is set.
   */
  declare function browser$runtime$getBackgroundPage(): Promise<windows$Window>;

  /**
   * Open your Extension's options page, if possible.
   *
   * The precise behavior may depend on your manifest's `options_ui` or `options_page` key, or what the browser
   * happens to support at the time.
   *
   * If your Extension does not declare an options page, or the browser failed to create one for some other reason,
   * the callback will set `lastError`.
   */
  declare function browser$runtime$openOptionsPage(): Promise<void>;

  /**
   * Returns details about the app or extension from the manifest. The object returned is a serialization of the full
   * manifest file.
   */
  declare function browser$runtime$getManifest(): browser$_manifest$WebExtensionManifest;

  /**
   * Converts a relative path within an app/extension install directory to a fully-qualified URL.
   * @param path A path to a resource within an app/extension expressed relative to its install directory.
   * @returns The fully-qualified URL to the resource.
   */
  declare function browser$runtime$getURL(path: string): string;

  /**
   * Sets the URL to be visited upon uninstallation. This may be used to clean up server-side data, do analytics, and
   * implement surveys. Maximum 255 characters.
   * @param url URL to be opened after the extension is uninstalled. This URL must have an http: or https: scheme.
   * Set an empty string to not open a new tab upon uninstallation.
   */
  declare function browser$runtime$setUninstallURL(url: string): Promise<void>;

  /**
   * Reloads the app or extension.
   */
  declare function browser$runtime$reload(): void;

  /**
   * Requests an update check for this app/extension.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$runtime$requestUpdateCheck(): Promise<{
    [key: string]: any
  }>;

  /**
   * Restart the device when the app runs in kiosk mode. Otherwise, it's no-op.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$runtime$restart(): void;

  /**
   * Attempts to connect to connect listeners within an extension/app (such as the background page), or other
   * extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension
   * communication, and web messaging. Note that this does not connect to any listeners in a content script.
   * Extensions may connect to content scripts embedded in tabs via `tabs.connect`.
   * @param extensionId The ID of the extension or app to connect to. If omitted, a connection will be attempted
   * with your own extension. Required if sending messages from a web page for web messaging.
   * @returns Port through which messages can be sent and received. The port's `runtime.Port onDisconnect` event is
   * fired if the extension/app does not exist.
   */
  declare function browser$runtime$connect(
    extensionId?: string,
    connectInfo?: {
      /**
       * Will be passed into onConnect for processes that are listening for the connection event.
       */
      name?: string,

      /**
       * Whether the TLS channel ID will be passed into onConnectExternal for processes that are listening for the
       * connection event.
       */
      includeTlsChannelId?: boolean
    }
  ): browser$runtime$Port;

  /**
   * Connects to a native application in the host machine.
   * @param application The name of the registered application to connect to.
   * @returns Port through which messages can be sent and received with the application
   */
  declare function browser$runtime$connectNative(
    application: string
  ): browser$runtime$Port;

  /**
   * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to
   * `runtime.connect` but only sends a single message, with an optional response. If sending to your extension, the
   * `runtime.onMessage` event will be fired in each page, or `runtime.onMessageExternal`, if a different extension.
   * Note that extensions cannot send messages to content scripts using this method. To send messages to content
   * scripts, use `tabs.sendMessage`.
   *
   * Allowed in: Proxy scripts
   */
  declare function browser$runtime$sendMessage(
    message: any,
    options?: {
      /**
       * Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the
       * connection event.
       * @deprecated Unsupported on Firefox at this time.
       */
      includeTlsChannelId?: boolean,

      /**
       * If true, the message will be directed to the extension's proxy sandbox.
       */
      toProxyScript?: boolean
    }
  ): Promise<any>;

  /**
   * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to
   * `runtime.connect` but only sends a single message, with an optional response. If sending to your extension, the
   * `runtime.onMessage` event will be fired in each page, or `runtime.onMessageExternal`, if a different extension.
   * Note that extensions cannot send messages to content scripts using this method. To send messages to content
   * scripts, use `tabs.sendMessage`.
   *
   * Allowed in: Proxy scripts
   * @param extensionId The ID of the extension/app to send the message to. If omitted, the message will be sent to
   * your own extension/app. Required if sending messages from a web page for web messaging.
   */
  declare function browser$runtime$sendMessage(
    extensionId: string,
    message: any,
    options?: {
      /**
       * Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the
       * connection event.
       * @deprecated Unsupported on Firefox at this time.
       */
      includeTlsChannelId?: boolean,

      /**
       * If true, the message will be directed to the extension's proxy sandbox.
       */
      toProxyScript?: boolean
    }
  ): Promise<any>;

  /**
   * Send a single message to a native application.
   * @param application The name of the native messaging host.
   * @param message The message that will be passed to the native messaging host.
   */
  declare function browser$runtime$sendNativeMessage(
    application: string,
    message: any
  ): Promise<any>;

  /**
   * Returns information about the current browser.
   */
  declare function browser$runtime$getBrowserInfo(): Promise<browser$runtime$BrowserInfo>;

  /**
   * Returns information about the current platform.
   */
  declare function browser$runtime$getPlatformInfo(): Promise<browser$runtime$PlatformInfo>;

  /**
   * Returns a DirectoryEntry for the package directory.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$runtime$getPackageDirectoryEntry(): Promise<{
    [key: string]: any
  }>;

  /**
   * Fired when a profile that has this extension installed first starts up. This event is not fired for incognito
   * profiles.
   */
  declare var browser$runtime$onStartup: WebExtEvent<() => void>;

  /**
   * Fired when the extension is first installed, when the extension is updated to a new version, and when the
   * browser is updated to a new version.
   */
  declare var browser$runtime$onInstalled: WebExtEvent<
    (details: {
      /**
       * The reason that this event is being dispatched.
       */
      reason: browser$runtime$OnInstalledReason,

      /**
       * Indicates the previous version of the extension, which has just been updated. This is present only if
       * 'reason' is 'update'.
       */
      previousVersion?: string,

      /**
       * Indicates whether the addon is installed as a temporary extension.
       */
      temporary: boolean,

      /**
       * Indicates the ID of the imported shared module extension which updated. This is present only if 'reason' is
       * 'shared_module_update'.
       * @deprecated Unsupported on Firefox at this time.
       */
      id?: string
    }) => void
  >;

  /**
   * Sent to the event page just before it is unloaded. This gives the extension opportunity to do some clean up.
   * Note that since the page is unloading, any asynchronous operations started while handling this event are not
   * guaranteed to complete. If more activity for the event page occurs before it gets unloaded the onSuspendCanceled
   * event will be sent and the page won't be unloaded.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$runtime$onSuspend: WebExtEvent<() => void> | void;

  /**
   * Sent after onSuspend to indicate that the app won't be unloaded after all.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$runtime$onSuspendCanceled: WebExtEvent<() => void> | void;

  /**
   * Fired when an update is available, but isn't installed immediately because the app is currently running. If you
   * do nothing, the update will be installed the next time the background page gets unloaded, if you want it to be
   * installed sooner you can explicitly call `runtime.reload`. If your extension is using a persistent background
   * page, the background page of course never gets unloaded, so unless you call `runtime.reload` manually in
   * response to this event the update will not get installed until the next time the browser itself restarts. If no
   * handlers are listening for this event, and your extension has a persistent background page, it behaves as if
   * `runtime.reload` is called in response to this event.
   * @param details The manifest details of the available update.
   */
  declare var browser$runtime$onUpdateAvailable: WebExtEvent<
    (details: {
      /**
       * The version number of the available update.
       */
      version: string
    }) => void
  >;

  /**
   * Fired when an update for the browser is available, but isn't installed immediately because a browser restart is
   * required.
   * @deprecated Please use `runtime.onRestartRequired`.
   */
  declare var browser$runtime$onBrowserUpdateAvailable: WebExtEvent<
    () => void
  > | void;

  /**
   * Fired when a connection is made from either an extension process or a content script.
   */
  declare var browser$runtime$onConnect: WebExtEvent<
    (port: browser$runtime$Port) => void
  >;

  /**
   * Fired when a connection is made from another extension.
   */
  declare var browser$runtime$onConnectExternal: WebExtEvent<
    (port: browser$runtime$Port) => void
  >;

  /**
   * Fired when a message is sent from either an extension process or a content script.
   *
   * Allowed in: Proxy scripts
   * @param message The message sent by the calling script.
   * @param sendResponse Function to call (at most once) when you have a response. The argument should be any
   * JSON-ifiable object. If you have more than one `onMessage` listener in the same document, then only one may
   * send a response. This function becomes invalid when the event listener returns, unless you return true from
   * the event listener to indicate you wish to send a response asynchronously (this will keep the message
   * channel open to the other end until `sendResponse` is called).
   * @returns Return true from the event listener if you wish to call `sendResponse` after the event listener
   * returns.
   */
  declare var browser$runtime$onMessage: WebExtEvent<
    (
      message: any,
      sender: browser$runtime$MessageSender,
      sendResponse: (response?: any) => void
    ) => boolean | Promise<any> | void
  >;

  /**
   * Fired when a message is sent from another extension/app. Cannot be used in a content script.
   * @param message The message sent by the calling script.
   * @param sendResponse Function to call (at most once) when you have a response. The argument should be any
   * JSON-ifiable object. If you have more than one `onMessage` listener in the same document, then only one may
   * send a response. This function becomes invalid when the event listener returns, unless you return true from
   * the event listener to indicate you wish to send a response asynchronously (this will keep the message
   * channel open to the other end until `sendResponse` is called).
   * @returns Return true from the event listener if you wish to call `sendResponse` after the event listener
   * returns.
   */
  declare var browser$runtime$onMessageExternal: WebExtEvent<
    (
      message: any,
      sender: browser$runtime$MessageSender,
      sendResponse: (response?: any) => void
    ) => boolean | Promise<any> | void
  >;

  /**
   * Fired when an app or the device that it runs on needs to be restarted. The app should close all its windows at
   * its earliest convenient time to let the restart to happen. If the app does nothing, a restart will be enforced
   * after a 24-hour grace period has passed. Currently, this event is only fired for Chrome OS kiosk apps.
   * @param reason The reason that the event is being dispatched.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$runtime$onRestartRequired: WebExtEvent<
    (reason: browser$runtime$OnRestartRequiredReason) => void
  > | void;

  declare var npm$namespace$browser$storage: {
    sync: typeof browser$storage$sync,
    local: typeof browser$storage$local,
    managed: typeof browser$storage$managed,
    onChanged: typeof browser$storage$onChanged
  };
  declare interface browser$storage$StorageChange {
    /**
     * The old value of the item, if there was an old value.
     */
    oldValue?: any;

    /**
     * The new value of the item, if there is a new value.
     */
    newValue?: any;
  }

  declare interface browser$storage$StorageArea {
    /**
     * Gets one or more items from storage.
     * @param keys A single key to get, list of keys to get, or a dictionary specifying default values (see
     * description of the object). An empty list or object will return an empty result object. Pass in `null`
     * to get the entire contents of storage.
     */
    get(keys?: string | string[] | { [key: string]: any }): Promise<any>;

    /**
     * Gets the amount of space (in bytes) being used by one or more items.
     * @param keys A single key or list of keys to get the total usage for. An empty list will return 0\. Pass in
     * `null` to get the total usage of all of storage.
     * @deprecated Unsupported on Firefox at this time.
     */
    getBytesInUse?: (keys?: string | string[]) => Promise<number>;

    /**
     * Sets multiple items.
     * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in
     * storage will not be affected.
     *
     * Primitive values such as numbers will serialize as expected. Values with a `typeof` `"object"` and
     * `"function"` will typically serialize to `{}`, with the exception of `Array` (serializes as expected),
     * `Date`, and `Regex` (serialize using their `String` representation).
     */
    set(items: any): Promise<void>;

    /**
     * Removes one or more items from storage.
     * @param keys A single key or a list of keys for items to remove.
     */
    remove(keys: string | string[]): Promise<void>;

    /**
     * Removes all items from storage.
     */
    clear(): Promise<void>;
  }

  /**
   * Items in the `sync` storage area are synced by the browser.
   */
  declare var browser$storage$sync: browser$storage$StorageArea;

  /**
   * Items in the `local` storage area are local to each machine.
   */
  declare var browser$storage$local: browser$storage$StorageArea;

  /**
   * Items in the `managed` storage area are set by administrators or native applications, and are read-only for the
   * extension; trying to modify this namespace results in an error.
   */
  declare var browser$storage$managed: browser$storage$StorageArea;

  /**
   * Fired when one or more items change.
   * @param changes Object mapping each key that changed to its corresponding `storage.StorageChange` for that item.
   * @param areaName The name of the storage area (`"sync"`, `"local"` or `"managed"`) the changes are for.
   */
  declare var browser$storage$onChanged: WebExtEvent<
    (changes: browser$storage$StorageChange, areaName: string) => void
  >;

  declare var npm$namespace$browser$telemetry: {
    submitPing: typeof browser$telemetry$submitPing,
    canUpload: typeof browser$telemetry$canUpload,
    scalarAdd: typeof browser$telemetry$scalarAdd,
    scalarSet: typeof browser$telemetry$scalarSet,
    scalarSetMaximum: typeof browser$telemetry$scalarSetMaximum,
    recordEvent: typeof browser$telemetry$recordEvent,
    registerScalars: typeof browser$telemetry$registerScalars,
    registerEvents: typeof browser$telemetry$registerEvents,
    setEventRecordingEnabled: typeof browser$telemetry$setEventRecordingEnabled
  };

  /**
   * Type of scalar: 'count' for numeric values, 'string' for string values, 'boolean' for boolean values. Maps to
   * `nsITelemetry.SCALAR_TYPE_*`.
   */
  declare type browser$telemetry$ScalarType = "count" | "string" | "boolean";

  /**
   * Represents registration data for a Telemetry scalar.
   */
  declare interface browser$telemetry$ScalarData {
    kind: browser$telemetry$ScalarType;

    /**
     * True if this is a keyed scalar.
     */
    keyed?: boolean;

    /**
     * True if this data should be recorded on release.
     */
    record_on_release?: boolean;

    /**
     * True if this scalar entry is expired. This allows recording it without error, but it will be discarded.
     */
    expired?: boolean;
  }

  /**
   * Represents registration data for a Telemetry event.
   */
  declare interface browser$telemetry$EventData {
    /**
     * List of methods for this event entry.
     */
    methods: string[];

    /**
     * List of objects for this event entry.
     */
    objects: string[];

    /**
     * List of allowed extra keys for this event entry.
     */
    extra_keys: string[];

    /**
     * True if this data should be recorded on release.
     */
    record_on_release?: boolean;

    /**
     * True if this event entry is expired. This allows recording it without error, but it will be discarded.
     */
    expired?: boolean;
  }

  /**
   * Submits a custom ping to the Telemetry back-end. See `submitExternalPing` inside TelemetryController.jsm for
   * more details.
   * @param type The type of the ping.
   * @param message The data payload for the ping.
   * @param options Options object.
   */
  declare function browser$telemetry$submitPing(
    type: string,
    message: any,
    options: {
      /**
       * True if the ping should contain the client id.
       */
      addClientId?: boolean,

      /**
       * True if the ping should contain the environment data.
       */
      addEnvironment?: boolean,

      /**
       * Set to override the environment data.
       */
      overrideEnvironment?: any,

      /**
       * If true, send the ping using the PingSender.
       */
      usePingSender?: boolean
    }
  ): Promise<any>;

  /**
   * Checks if Telemetry is enabled.
   */
  declare function browser$telemetry$canUpload(): Promise<any>;

  /**
   * Adds the value to the given scalar.
   * @param name The scalar name.
   * @param value The numeric value to add to the scalar. Only unsigned integers supported.
   */
  declare function browser$telemetry$scalarAdd(
    name: string,
    value: number
  ): Promise<any>;

  /**
   * Sets the named scalar to the given value. Throws if the value type doesn't match the scalar type.
   * @param name The scalar name
   * @param value The value to set the scalar to
   */
  declare function browser$telemetry$scalarSet(
    name: string,
    value: string | boolean | number | { [key: string]: any }
  ): Promise<any>;

  /**
   * Sets the scalar to the maximum of the current and the passed value
   * @param name The scalar name.
   * @param value The numeric value to set the scalar to. Only unsigned integers supported.
   */
  declare function browser$telemetry$scalarSetMaximum(
    name: string,
    value: number
  ): Promise<any>;

  /**
   * Record an event in Telemetry. Throws when trying to record an unknown event.
   * @param category The category name.
   * @param method The method name.
   * @param object The object name.
   * @param value An optional string value to record.
   * @param extra An optional object of the form (string -> string). It should only contain registered extra keys.
   */
  declare function browser$telemetry$recordEvent(
    category: string,
    method: string,
    object: string,
    value?: number,
    extra?: string
  ): Promise<any>;

  /**
   * Register new scalars to record them from addons. See nsITelemetry.idl for more details.
   * @param category The unique category the scalars are registered in.
   * @param data An object that contains registration data for multiple scalars. Each property name is the scalar
   * name, and the corresponding property value is an object of ScalarData type.
   */
  declare function browser$telemetry$registerScalars(
    category: string,
    data: browser$telemetry$ScalarData
  ): Promise<any>;

  /**
   * Register new events to record them from addons. See nsITelemetry.idl for more details.
   * @param category The unique category the events are registered in.
   * @param data An object that contains registration data for 1+ events. Each property name is the category name,
   * and the corresponding property value is an object of EventData type.
   */
  declare function browser$telemetry$registerEvents(
    category: string,
    data: browser$telemetry$EventData
  ): Promise<any>;

  /**
   * Enable recording of events in a category. Events default to recording disabled. This allows to toggle recording
   * for all events in the specified category.
   * @param category The category name.
   * @param enabled Whether recording is enabled for events in that category.
   */
  declare function browser$telemetry$setEventRecordingEnabled(
    category: string,
    enabled: boolean
  ): Promise<any>;

  declare var npm$namespace$browser$theme: {
    getCurrent: typeof browser$theme$getCurrent,
    update: typeof browser$theme$update,
    reset: typeof browser$theme$reset,
    onUpdated: typeof browser$theme$onUpdated
  };

  /**
   * Info provided in the onUpdated listener.
   */
  declare interface browser$theme$ThemeUpdateInfo {
    /**
     * The new theme after update
     */
    theme: { [key: string]: any };

    /**
     * The id of the window the theme has been applied to
     */
    windowId?: number;
  }

  /**
   * Returns the current theme for the specified window or the last focused window.
   * @param windowId The window for which we want the theme.
   */
  declare function browser$theme$getCurrent(
    windowId?: number
  ): Promise<browser$_manifest$ThemeType>;

  /**
   * Make complete updates to the theme. Resolves when the update has completed.
   * @param details The properties of the theme to update.
   */
  declare function browser$theme$update(
    details: browser$_manifest$ThemeType
  ): void;

  /**
   * Make complete updates to the theme. Resolves when the update has completed.
   * @param windowId The id of the window to update. No id updates all windows.
   * @param details The properties of the theme to update.
   */
  declare function browser$theme$update(
    windowId: number,
    details: browser$_manifest$ThemeType
  ): void;

  /**
   * Removes the updates made to the theme.
   * @param windowId The id of the window to reset. No id resets all windows.
   */
  declare function browser$theme$reset(windowId?: number): void;

  /**
   * Fired when a new theme has been applied
   * @param updateInfo Details of the theme update
   */
  declare var browser$theme$onUpdated: WebExtEvent<
    (updateInfo: browser$theme$ThemeUpdateInfo) => void
  >;

  declare var npm$namespace$browser$topSites: {
    get: typeof browser$topSites$get
  };

  /**
   * An object encapsulating a most visited URL, such as the URLs on the new tab page.
   */
  declare interface browser$topSites$MostVisitedURL {
    /**
     * The most visited URL.
     */
    url: string;

    /**
     * The title of the page.
     */
    title?: string;

    /**
     * Data URL for the favicon, if available.
     */
    favicon?: string;
  }

  /**
   * Gets a list of top sites.
   */
  declare function browser$topSites$get(options?: {
    /**
     * @deprecated Please use the other options to tune the results received from topSites.
     */
    providers?: string[],

    /**
     * The number of top sites to return, defaults to the value used by Firefox
     */
    limit?: number,

    /**
     * Limit the result to a single top site link per domain
     */
    onePerDomain?: boolean,

    /**
     * Include sites that the user has blocked from appearing on the Firefox new tab.
     */
    includeBlocked?: boolean,

    /**
     * Include sites favicon if available.
     */
    includeFavicon?: boolean
  }): Promise<browser$topSites$MostVisitedURL[]>;

  /**
   * The scope of the Setting. One of
   *
   * *   `regular`: setting for the regular profile (which is inherited by the incognito profile if not overridden
   * elsewhere),
   * *   `regular_only`: setting for the regular profile only (not inherited by the incognito profile),
   * *   `incognito_persistent`: setting for the incognito profile that survives browser restarts (overrides regular
   * preferences),
   * *   `incognito_session_only`: setting for the incognito profile that can only be set during an incognito session
   * and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
   *
   * Only `regular` is supported by Firefox at this time.
   */
  declare type browser$types$SettingScope =
    | "regular"
    | "regular_only"
    | "incognito_persistent"
    | "incognito_session_only";

  /**
   * One of
   *
   * *   `not_controllable`: cannot be controlled by any extension
   * *   `controlled_by_other_extensions`: controlled by extensions with higher precedence
   * *   `controllable_by_this_extension`: can be controlled by this extension
   * *   `controlled_by_this_extension`: controlled by this extension
   */
  declare type browser$types$LevelOfControl =
    | "not_controllable"
    | "controlled_by_other_extensions"
    | "controllable_by_this_extension"
    | "controlled_by_this_extension";

  declare interface browser$types$Setting {
    /**
     * Gets the value of a setting.
     * @param details Which setting to consider.
     */
    get(details: {
      /**
       * Whether to return the value that applies to the incognito session (default false).
       */
      incognito?: boolean
    }): Promise<{
      /**
       * The value of the setting.
       */
      value: any,

      /**
       * The level of control of the setting.
       */
      levelOfControl: browser$types$LevelOfControl,

      /**
       * Whether the effective value is specific to the incognito session.
       * This property will _only_ be present if the `incognito` property in the `details` parameter of `get()`
       * was true.
       */
      incognitoSpecific?: boolean
    }>;

    /**
     * Sets the value of a setting.
     * @param details Which setting to change.
     */
    set(details: {
      /**
       * The value of the setting.
       * Note that every setting has a specific value type, which is described together with the setting. An
       * extension should _not_ set a value of a different type.
       */
      value: any,

      /**
       * Where to set the setting (default: regular).
       */
      scope?: browser$types$SettingScope
    }): Promise<void>;

    /**
     * Clears the setting, restoring any default value.
     * @param details Which setting to clear.
     */
    clear(details: {
      /**
       * Where to clear the setting (default: regular).
       */
      scope?: browser$types$SettingScope
    }): Promise<void>;

    /**
     * Fired after the setting changes.
     * @deprecated Unsupported on Firefox at this time.
     */
    onChange: WebExtEvent<
      (details: {
        /**
         * The value of the setting after the change.
         */
        value: any,

        /**
         * The level of control of the setting.
         */
        levelOfControl: browser$types$LevelOfControl,

        /**
         * Whether the value that has changed is specific to the incognito session.
         * This property will _only_ be present if the user has enabled the extension in incognito mode.
         */
        incognitoSpecific?: boolean
      }) => void
    >;
  }

  declare var npm$namespace$browser$userScripts: {
    register: typeof browser$userScripts$register,
    onBeforeScript: typeof browser$userScripts$onBeforeScript
  };

  /**
   * Details of a user script
   */
  declare interface browser$userScripts$UserScriptOptions {
    /**
     * The list of JS files to inject
     */
    js?: browser$extensionTypes$ExtensionFileOrCode[];

    /**
     * An opaque user script metadata value
     */
    scriptMetadata?: browser$extensionTypes$PlainJSONValue;
    matches: browser$_manifest$MatchPattern[];
    excludeMatches?: browser$_manifest$MatchPattern[];
    includeGlobs?: string[];
    excludeGlobs?: string[];

    /**
     * If allFrames is `true`, implies that the JavaScript should be injected into all frames of current page. By
     * default, it's `false` and is only injected into the top frame.
     */
    allFrames?: boolean;

    /**
     * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your
     * extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default
     * it is `false`.
     */
    matchAboutBlank?: boolean;

    /**
     * The soonest that the JavaScript will be injected into the tab. Defaults to "document_idle".
     */
    runAt?: browser$extensionTypes$RunAt;
  }

  /**
   * An object that represents a user script registered programmatically
   */
  declare interface browser$userScripts$RegisteredUserScript {
    /**
     * Unregister a user script registered programmatically
     */
    unregister(): Promise<any>;
  }

  /**
   * Register a user script programmatically given its `userScripts.UserScriptOptions`, and resolves to a
   * `userScripts.RegisteredUserScript` instance
   */
  declare function browser$userScripts$register(
    userScriptOptions: browser$userScripts$UserScriptOptions
  ): Promise<browser$userScripts$RegisteredUserScript>;

  /**
   * Event called when a new userScript global has been created
   *
   * Allowed in: Content scripts only
   */
  declare var browser$userScripts$onBeforeScript: WebExtEvent<
    (userScript: {
      /**
       * The userScript metadata (as set in userScripts.register)
       */
      metadata: any,

      /**
       * The userScript global
       */
      global: any,

      /**
       * Exports all the properties of a given plain object as userScript globals
       * @param sourceObject A plain object whose properties are exported as userScript globals
       */
      defineGlobals: (sourceObject: { [key: string]: any }) => void,

      /**
       * Convert a given value to make it accessible to the userScript code
       * @param value A value to convert into an object accessible to the userScript
       */
      export: (value: any) => any
    }) => void
  >;

  declare var npm$namespace$browser$webNavigation: {
    getFrame: typeof browser$webNavigation$getFrame,
    getAllFrames: typeof browser$webNavigation$getAllFrames,
    onBeforeNavigate: typeof browser$webNavigation$onBeforeNavigate,
    onCommitted: typeof browser$webNavigation$onCommitted,
    onDOMContentLoaded: typeof browser$webNavigation$onDOMContentLoaded,
    onCompleted: typeof browser$webNavigation$onCompleted,
    onErrorOccurred: typeof browser$webNavigation$onErrorOccurred,
    onCreatedNavigationTarget: typeof browser$webNavigation$onCreatedNavigationTarget,
    onReferenceFragmentUpdated: typeof browser$webNavigation$onReferenceFragmentUpdated,
    onTabReplaced: typeof browser$webNavigation$onTabReplaced,
    onHistoryStateUpdated: typeof browser$webNavigation$onHistoryStateUpdated
  };

  /**
   * Cause of the navigation. The same transition types as defined in the history API are used. These are the same
   * transition types as defined in the history API except with `"start_page"` in place of `"auto_toplevel"` (for
   * backwards compatibility).
   */
  declare type browser$webNavigation$TransitionType =
    | "link"
    | "typed"
    | "auto_bookmark"
    | "auto_subframe"
    | "manual_subframe"
    | "generated"
    | "start_page"
    | "form_submit"
    | "reload"
    | "keyword"
    | "keyword_generated";

  declare type browser$webNavigation$TransitionQualifier =
    | "client_redirect"
    | "server_redirect"
    | "forward_back"
    | "from_address_bar";

  declare interface browser$webNavigation$EventUrlFilters {
    url: browser$events$UrlFilter[];
  }

  declare type browser$webNavigation$_WebNavigationOnBeforeNavigateEvent<
    T = (details: {
      tabId: number,
      url: string,

      processId?: number,

      frameId: number,

      parentFrameId: number,

      timeStamp: number
    }) => void

    /**
     * The ID of the tab in which the navigation is about to occur.
     */

    /**
     * The ID of the process runs the renderer for this tab.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
     * subframe. Frame IDs are unique for a given tab and process.
     */

    /**
     * ID of frame that wraps the frame. Set to -1 of no parent frame exists.
     */

    /**
     * The time when the browser was about to start the navigation, in milliseconds since the epoch.
     */
  > = WebExtEventBase<
    (callback: T, filters?: browser$webNavigation$EventUrlFilters) => void,
    T
  >;

  declare type browser$webNavigation$_WebNavigationOnCommittedEvent<
    T = (details: {
      tabId: number,
      url: string,

      processId?: number,

      frameId: number,

      transitionType?: browser$webNavigation$TransitionType,

      transitionQualifiers?: browser$webNavigation$TransitionQualifier[],

      timeStamp: number
    }) => void

    /**
     * The ID of the tab in which the navigation occurs.
     */

    /**
     * The ID of the process runs the renderer for this tab.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
     * subframe. Frame IDs are unique within a tab.
     */

    /**
     * Cause of the navigation.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * A list of transition qualifiers.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * The time when the navigation was committed, in milliseconds since the epoch.
     */
  > = WebExtEventBase<
    (callback: T, filters?: browser$webNavigation$EventUrlFilters) => void,
    T
  >;

  declare type browser$webNavigation$_WebNavigationOnDOMContentLoadedEvent<
    T = (details: {
      tabId: number,
      url: string,

      processId?: number,

      frameId: number,

      timeStamp: number
    }) => void

    /**
     * The ID of the tab in which the navigation occurs.
     */

    /**
     * The ID of the process runs the renderer for this tab.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
     * subframe. Frame IDs are unique within a tab.
     */

    /**
     * The time when the page's DOM was fully constructed, in milliseconds since the epoch.
     */
  > = WebExtEventBase<
    (callback: T, filters?: browser$webNavigation$EventUrlFilters) => void,
    T
  >;

  declare type browser$webNavigation$_WebNavigationOnCompletedEvent<
    T = (details: {
      tabId: number,
      url: string,

      processId?: number,

      frameId: number,

      timeStamp: number
    }) => void

    /**
     * The ID of the tab in which the navigation occurs.
     */

    /**
     * The ID of the process runs the renderer for this tab.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
     * subframe. Frame IDs are unique within a tab.
     */

    /**
     * The time when the document finished loading, in milliseconds since the epoch.
     */
  > = WebExtEventBase<
    (callback: T, filters?: browser$webNavigation$EventUrlFilters) => void,
    T
  >;

  declare type browser$webNavigation$_WebNavigationOnErrorOccurredEvent<
    T = (details: {
      tabId: number,
      url: string,

      processId?: number,

      frameId: number,

      error?: string,

      timeStamp: number
    }) => void

    /**
     * The ID of the tab in which the navigation occurs.
     */

    /**
     * The ID of the process runs the renderer for this tab.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
     * subframe. Frame IDs are unique within a tab.
     */

    /**
     * The error description.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * The time when the error occurred, in milliseconds since the epoch.
     */
  > = WebExtEventBase<
    (callback: T, filters?: browser$webNavigation$EventUrlFilters) => void,
    T
  >;

  declare type browser$webNavigation$_WebNavigationOnCreatedNavigationTargetEvent<
    T = (details: {
      sourceTabId: number,

      sourceProcessId: number,

      sourceFrameId: number,

      url: string,

      tabId: number,

      timeStamp: number
    }) => void

    /**
     * The ID of the tab in which the navigation is triggered.
     */

    /**
     * The ID of the process runs the renderer for the source tab.
     */

    /**
     * The ID of the frame with sourceTabId in which the navigation is triggered. 0 indicates the main frame.
     */

    /**
     * The URL to be opened in the new window.
     */

    /**
     * The ID of the tab in which the url is opened
     */

    /**
     * The time when the browser was about to create a new view, in milliseconds since the epoch.
     */
  > = WebExtEventBase<
    (callback: T, filters?: browser$webNavigation$EventUrlFilters) => void,
    T
  >;

  declare type browser$webNavigation$_WebNavigationOnReferenceFragmentUpdatedEvent<
    T = (details: {
      tabId: number,
      url: string,

      processId?: number,

      frameId: number,

      transitionType?: browser$webNavigation$TransitionType,

      transitionQualifiers?: browser$webNavigation$TransitionQualifier[],

      timeStamp: number
    }) => void

    /**
     * The ID of the tab in which the navigation occurs.
     */

    /**
     * The ID of the process runs the renderer for this tab.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
     * subframe. Frame IDs are unique within a tab.
     */

    /**
     * Cause of the navigation.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * A list of transition qualifiers.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * The time when the navigation was committed, in milliseconds since the epoch.
     */
  > = WebExtEventBase<
    (callback: T, filters?: browser$webNavigation$EventUrlFilters) => void,
    T
  >;

  declare type browser$webNavigation$_WebNavigationOnHistoryStateUpdatedEvent<
    T = (details: {
      tabId: number,
      url: string,

      processId?: number,

      frameId: number,

      transitionType?: browser$webNavigation$TransitionType,

      transitionQualifiers?: browser$webNavigation$TransitionQualifier[],

      timeStamp: number
    }) => void

    /**
     * The ID of the tab in which the navigation occurs.
     */

    /**
     * The ID of the process runs the renderer for this tab.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
     * subframe. Frame IDs are unique within a tab.
     */

    /**
     * Cause of the navigation.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * A list of transition qualifiers.
     * @deprecated Unsupported on Firefox at this time.
     */

    /**
     * The time when the navigation was committed, in milliseconds since the epoch.
     */
  > = WebExtEventBase<
    (callback: T, filters?: browser$webNavigation$EventUrlFilters) => void,
    T
  >;

  /**
   * Retrieves information about the given frame. A frame refers to an <iframe> or a <frame> of a web page and is
   * identified by a tab ID and a frame ID.
   * @param details Information about the frame to retrieve information about.
   */
  declare function browser$webNavigation$getFrame(details: {
    /**
     * The ID of the tab in which the frame is.
     */
    tabId: number,

    /**
     * The ID of the process runs the renderer for this tab.
     */
    processId?: number,

    /**
     * The ID of the frame in the given tab.
     */
    frameId: number
  }): Promise<{
    /**
     * True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired.
     */
    errorOccurred?: boolean,

    /**
     * The URL currently associated with this frame, if the frame identified by the frameId existed at one point in
     * the given tab. The fact that an URL is associated with a given frameId does not imply that the corresponding
     * frame still exists.
     */
    url: string,

    /**
     * The ID of the tab in which the frame is.
     */
    tabId: number,

    /**
     * The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a
     * subframe.
     */
    frameId: number,

    /**
     * ID of frame that wraps the frame. Set to -1 of no parent frame exists.
     */
    parentFrameId: number
  }>;

  /**
   * Retrieves information about all frames of a given tab.
   * @param details Information about the tab to retrieve all frames from.
   */
  declare function browser$webNavigation$getAllFrames(details: {
    /**
     * The ID of the tab.
     */
    tabId: number
  }): Promise<
    Array<{
      /**
       * True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired.
       */
      errorOccurred?: boolean,

      /**
       * The ID of the process runs the renderer for this tab.
       * @deprecated Unsupported on Firefox at this time.
       */
      processId?: number,

      /**
       * The ID of the tab in which the frame is.
       */
      tabId: number,

      /**
       * The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a
       * subframe.
       */
      frameId: number,

      /**
       * ID of frame that wraps the frame. Set to -1 of no parent frame exists.
       */
      parentFrameId: number,

      /**
       * The URL currently associated with this frame.
       */
      url: string
    }>
  >;

  /**
   * Fired when a navigation is about to occur.
   */
  declare var browser$webNavigation$onBeforeNavigate: browser$webNavigation$_WebNavigationOnBeforeNavigateEvent<>;

  /**
   * Fired when a navigation is committed. The document (and the resources it refers to, such as images and
   * subframes) might still be downloading, but at least part of the document has been received from the server and
   * the browser has decided to switch to the new document.
   */
  declare var browser$webNavigation$onCommitted: browser$webNavigation$_WebNavigationOnCommittedEvent<>;

  /**
   * Fired when the page's DOM is fully constructed, but the referenced resources may not finish loading.
   */
  declare var browser$webNavigation$onDOMContentLoaded: browser$webNavigation$_WebNavigationOnDOMContentLoadedEvent<>;

  /**
   * Fired when a document, including the resources it refers to, is completely loaded and initialized.
   */
  declare var browser$webNavigation$onCompleted: browser$webNavigation$_WebNavigationOnCompletedEvent<>;

  /**
   * Fired when an error occurs and the navigation is aborted. This can happen if either a network error occurred, or
   * the user aborted the navigation.
   */
  declare var browser$webNavigation$onErrorOccurred: browser$webNavigation$_WebNavigationOnErrorOccurredEvent<>;

  /**
   * Fired when a new window, or a new tab in an existing window, is created to host a navigation.
   */
  declare var browser$webNavigation$onCreatedNavigationTarget: browser$webNavigation$_WebNavigationOnCreatedNavigationTargetEvent<>;

  /**
   * Fired when the reference fragment of a frame was updated. All future events for that frame will use the updated
   * URL.
   */
  declare var browser$webNavigation$onReferenceFragmentUpdated: browser$webNavigation$_WebNavigationOnReferenceFragmentUpdatedEvent<>;

  /**
   * Fired when the contents of the tab is replaced by a different (usually previously pre-rendered) tab.
   */
  declare var browser$webNavigation$onTabReplaced: WebExtEvent<
    (details: {
      /**
       * The ID of the tab that was replaced.
       */
      replacedTabId: number,

      /**
       * The ID of the tab that replaced the old tab.
       */
      tabId: number,

      /**
       * The time when the replacement happened, in milliseconds since the epoch.
       */
      timeStamp: number
    }) => void
  >;

  /**
   * Fired when the frame's history was updated to a new URL. All future events for that frame will use the updated
   * URL.
   */
  declare var browser$webNavigation$onHistoryStateUpdated: browser$webNavigation$_WebNavigationOnHistoryStateUpdatedEvent<>;

  declare var npm$namespace$browser$webRequest: {
    handlerBehaviorChanged: typeof browser$webRequest$handlerBehaviorChanged,
    filterResponseData: typeof browser$webRequest$filterResponseData,
    getSecurityInfo: typeof browser$webRequest$getSecurityInfo,
    MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: typeof browser$webRequest$MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES,
    onBeforeRequest: typeof browser$webRequest$onBeforeRequest,
    onBeforeSendHeaders: typeof browser$webRequest$onBeforeSendHeaders,
    onSendHeaders: typeof browser$webRequest$onSendHeaders,
    onHeadersReceived: typeof browser$webRequest$onHeadersReceived,
    onAuthRequired: typeof browser$webRequest$onAuthRequired,
    onResponseStarted: typeof browser$webRequest$onResponseStarted,
    onBeforeRedirect: typeof browser$webRequest$onBeforeRedirect,
    onCompleted: typeof browser$webRequest$onCompleted,
    onErrorOccurred: typeof browser$webRequest$onErrorOccurred
  };
  declare type browser$webRequest$ResourceType =
    | "main_frame"
    | "sub_frame"
    | "stylesheet"
    | "script"
    | "image"
    | "object"
    | "object_subrequest"
    | "xmlhttprequest"
    | "xbl"
    | "xslt"
    | "ping"
    | "beacon"
    | "xml_dtd"
    | "font"
    | "media"
    | "websocket"
    | "csp_report"
    | "imageset"
    | "web_manifest"
    | "speculative"
    | "other";

  declare type browser$webRequest$OnBeforeRequestOptions =
    | "blocking"
    | "requestBody";

  declare type browser$webRequest$OnBeforeSendHeadersOptions =
    | "requestHeaders"
    | "blocking";

  declare type browser$webRequest$OnSendHeadersOptions = "requestHeaders";

  declare type browser$webRequest$OnHeadersReceivedOptions =
    | "blocking"
    | "responseHeaders";

  declare type browser$webRequest$OnAuthRequiredOptions =
    | "responseHeaders"
    | "blocking"
    | "asyncBlocking";

  declare type browser$webRequest$OnResponseStartedOptions = "responseHeaders";

  declare type browser$webRequest$OnBeforeRedirectOptions = "responseHeaders";

  declare type browser$webRequest$OnCompletedOptions = "responseHeaders";

  /**
   * An object describing filters to apply to webRequest events.
   */
  declare interface browser$webRequest$RequestFilter {
    /**
     * A list of URLs or URL patterns. Requests that cannot match any of the URLs will be filtered out.
     */
    urls: string[];

    /**
     * A list of request types. Requests that cannot match any of the types will be filtered out.
     */
    types?: browser$webRequest$ResourceType[];
    tabId?: number;
    windowId?: number;
  }

  /**
   * An array of HTTP headers. Each header is represented as a dictionary containing the keys `name` and either
   * `value` or `binaryValue`.
   */
  declare type browser$webRequest$HttpHeaders = Array<{
    /**
     * Name of the HTTP header.
     */
    name: string,

    /**
     * Value of the HTTP header if it can be represented by UTF-8.
     */
    value?: string,

    /**
     * Value of the HTTP header if it cannot be represented by UTF-8, stored as individual byte values (0..255).
     */
    binaryValue?: number[]
  }>;

  /**
   * Returns value for event handlers that have the 'blocking' extraInfoSpec applied. Allows the event handler to
   * modify network requests.
   */
  declare interface browser$webRequest$BlockingResponse {
    /**
     * If true, the request is cancelled. Used in onBeforeRequest, this prevents the request from being sent.
     */
    cancel?: boolean;

    /**
     * Only used as a response to the onBeforeRequest and onHeadersReceived events. If set, the original request is
     * prevented from being sent/completed and is instead redirected to the given URL. Redirections to non-HTTP
     * schemes such as data: are allowed. Redirects initiated by a redirect action use the original request method
     * for the redirect, with one exception: If the redirect is initiated at the onHeadersReceived stage, then the
     * redirect will be issued using the GET method.
     */
    redirectUrl?: string;

    /**
     * Only used as a response to the onBeforeRequest event. If set, the original request is prevented from being
     * sent/completed and is instead upgraded to a secure request. If any extension returns `redirectUrl` during
     * onBeforeRequest, `upgradeToSecure` will have no affect.
     */
    upgradeToSecure?: boolean;

    /**
     * Only used as a response to the onBeforeSendHeaders event. If set, the request is made with these request
     * headers instead.
     */
    requestHeaders?: browser$webRequest$HttpHeaders;

    /**
     * Only used as a response to the onHeadersReceived event. If set, the server is assumed to have responded with
     * these response headers instead. Only return `responseHeaders` if you really want to modify the headers in
     * order to limit the number of conflicts (only one extension may modify `responseHeaders` for each request).
     */
    responseHeaders?: browser$webRequest$HttpHeaders;

    /**
     * Only used as a response to the onAuthRequired event. If set, the request is made using the supplied
     * credentials.
     */
    authCredentials?: {
      username: string,
      password: string
    };
  }

  /**
   * Contains the certificate properties of the request if it is a secure request.
   */
  declare interface browser$webRequest$CertificateInfo {
    subject: string;
    issuer: string;

    /**
     * Contains start and end timestamps.
     */
    validity: {
      start: number,
      end: number
    };
    fingerprint: {
      sha1: string,
      sha256: string
    };
    serialNumber: string;
    isBuiltInRoot: boolean;
    subjectPublicKeyInfoDigest: {
      sha256: string
    };
    rawDER?: number[];
  }

  declare type browser$webRequest$CertificateTransparencyStatus =
    | "not_applicable"
    | "policy_compliant"
    | "policy_not_enough_scts"
    | "policy_not_diverse_scts";

  declare type browser$webRequest$TransportWeaknessReasons = "cipher";

  /**
   * Contains the security properties of the request (ie. SSL/TLS information).
   */
  declare interface browser$webRequest$SecurityInfo {
    state: webRequest$_SecurityInfoState;

    /**
     * Error message if state is "broken"
     */
    errorMessage?: string;

    /**
     * Protocol version if state is "secure"
     */
    protocolVersion?: webRequest$_SecurityInfoProtocolVersion;

    /**
     * The cipher suite used in this request if state is "secure".
     */
    cipherSuite?: string;

    /**
     * The key exchange algorithm used in this request if state is "secure".
     */
    keaGroupName?: string;

    /**
     * The signature scheme used in this request if state is "secure".
     */
    signatureSchemeName?: string;

    /**
     * Certificate data if state is "secure". Will only contain one entry unless `certificateChain` is passed as an
     * option.
     */
    certificates: browser$webRequest$CertificateInfo[];

    /**
     * The domain name does not match the certificate domain.
     */
    isDomainMismatch?: boolean;
    isExtendedValidation?: boolean;

    /**
     * The certificate is either expired or is not yet valid. See `CertificateInfo.validity` for start and end
     * dates.
     */
    isNotValidAtThisTime?: boolean;
    isUntrusted?: boolean;

    /**
     * Certificate transparency compliance per RFC 6962\. See `https://www.certificate-transparency.org/what-is-ct`
     * for more information.
     */
    certificateTransparencyStatus?: browser$webRequest$CertificateTransparencyStatus;

    /**
     * True if host uses Strict Transport Security and state is "secure".
     */
    hsts?: boolean;

    /**
     * True if host uses Public Key Pinning and state is "secure".
     */
    hpkp?: string;

    /**
     * list of reasons that cause the request to be considered weak, if state is "weak"
     */
    weaknessReasons?: browser$webRequest$TransportWeaknessReasons[];
  }

  /**
   * Contains data uploaded in a URL request.
   */
  declare interface browser$webRequest$UploadData {
    /**
     * An ArrayBuffer with a copy of the data.
     */
    bytes?: any;

    /**
     * A string with the file's path and name.
     */
    file?: string;
  }

  declare type browser$webRequest$_SecurityInfoState =
    | "insecure"
    | "weak"
    | "broken"
    | "secure";

  /**
   * Protocol version if state is "secure"
   */
  declare type browser$webRequest$_SecurityInfoProtocolVersion =
    | "TLSv1"
    | "TLSv1.1"
    | "TLSv1.2"
    | "TLSv1.3"
    | "unknown";

  declare type browser$webRequest$_WebRequestOnBeforeRequestEvent<
    T = (details: {
      requestId: string,
      url: string,

      method: string,

      frameId: number,

      parentFrameId: number,

      originUrl?: string,

      documentUrl?: string,

      requestBody?: {
        error?: string,

        formData?: { [key: string]: any },

        raw?: browser$webRequest$UploadData[]
      },

      tabId: number,

      type: browser$webRequest$ResourceType,

      timeStamp: number
    }) =>
      | browser$webRequest$BlockingResponse
      | Promise<browser$webRequest$BlockingResponse>
      | void

    /**
     * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
     * relate different events of the same request.
     */

    /**
     * Standard HTTP method.
     */

    /**
     * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
     * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
     * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
     * within a tab.
     */

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */

    /**
     * URL of the resource that triggered this request.
     */

    /**
     * URL of the page into which the requested resource will be loaded.
     */

    /**
     * Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'.
     */

    /**
     * Errors when obtaining request body data.
     */

    /**
     * If the request method is POST and the body is a sequence of key-value pairs encoded in UTF8, encoded as
     * either multipart/form-data, or application/x-www-form-urlencoded, this dictionary is present and for
     * each key contains the list of all values for that key. If the data is of another media type, or if it is
     * malformed, the dictionary is not present. An example value of this dictionary is {'key': ['value1',
     * 'value2']}.
     */

    /**
     * If the request method is PUT or POST, and the body is not already parsed in formData, then the unparsed
     * request body elements are contained in this array.
     */

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */

    /**
     * How the requested resource will be used.
     */

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */
  > = WebExtEventBase<
    (
      callback: T,
      filter: browser$webRequest$RequestFilter,
      extraInfoSpec?: browser$webRequest$OnBeforeRequestOptions[]
    ) => void,
    T
  >;

  declare type browser$webRequest$_WebRequestOnBeforeSendHeadersEvent<
    T = (details: {
      requestId: string,
      url: string,

      method: string,

      frameId: number,

      parentFrameId: number,

      originUrl?: string,

      documentUrl?: string,

      tabId: number,

      type: browser$webRequest$ResourceType,

      timeStamp: number,

      requestHeaders?: browser$webRequest$HttpHeaders
    }) =>
      | browser$webRequest$BlockingResponse
      | Promise<browser$webRequest$BlockingResponse>
      | void

    /**
     * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
     * relate different events of the same request.
     */

    /**
     * Standard HTTP method.
     */

    /**
     * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
     * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
     * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
     * within a tab.
     */

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */

    /**
     * URL of the resource that triggered this request.
     */

    /**
     * URL of the page into which the requested resource will be loaded.
     */

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */

    /**
     * How the requested resource will be used.
     */

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */

    /**
     * The HTTP request headers that are going to be sent out with this request.
     */
  > = WebExtEventBase<
    (
      callback: T,
      filter: browser$webRequest$RequestFilter,
      extraInfoSpec?: browser$webRequest$OnBeforeSendHeadersOptions[]
    ) => void,
    T
  >;

  declare type browser$webRequest$_WebRequestOnSendHeadersEvent<
    T = (details: {
      requestId: string,
      url: string,

      method: string,

      frameId: number,

      parentFrameId: number,

      originUrl?: string,

      documentUrl?: string,

      tabId: number,

      type: browser$webRequest$ResourceType,

      timeStamp: number,

      requestHeaders?: browser$webRequest$HttpHeaders
    }) => void

    /**
     * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
     * relate different events of the same request.
     */

    /**
     * Standard HTTP method.
     */

    /**
     * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
     * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
     * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
     * within a tab.
     */

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */

    /**
     * URL of the resource that triggered this request.
     */

    /**
     * URL of the page into which the requested resource will be loaded.
     */

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */

    /**
     * How the requested resource will be used.
     */

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */

    /**
     * The HTTP request headers that have been sent out with this request.
     */
  > = WebExtEventBase<
    (
      callback: T,
      filter: browser$webRequest$RequestFilter,
      extraInfoSpec?: browser$webRequest$OnSendHeadersOptions[]
    ) => void,
    T
  >;

  declare type browser$webRequest$_WebRequestOnHeadersReceivedEvent<
    T = (details: {
      requestId: string,
      url: string,

      method: string,

      frameId: number,

      parentFrameId: number,

      originUrl?: string,

      documentUrl?: string,

      tabId: number,

      type: browser$webRequest$ResourceType,

      timeStamp: number,

      statusLine: string,

      responseHeaders?: browser$webRequest$HttpHeaders,

      statusCode: number
    }) =>
      | browser$webRequest$BlockingResponse
      | Promise<browser$webRequest$BlockingResponse>
      | void

    /**
     * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
     * relate different events of the same request.
     */

    /**
     * Standard HTTP method.
     */

    /**
     * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
     * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
     * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
     * within a tab.
     */

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */

    /**
     * URL of the resource that triggered this request.
     */

    /**
     * URL of the page into which the requested resource will be loaded.
     */

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */

    /**
     * How the requested resource will be used.
     */

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */

    /**
     * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses
     * that lack a status line).
     */

    /**
     * The HTTP response headers that have been received with this response.
     */

    /**
     * Standard HTTP status code returned by the server.
     */
  > = WebExtEventBase<
    (
      callback: T,
      filter: browser$webRequest$RequestFilter,
      extraInfoSpec?: browser$webRequest$OnHeadersReceivedOptions[]
    ) => void,
    T
  >;

  declare type browser$webRequest$_WebRequestOnAuthRequiredEvent<
    T = (details: {
      requestId: string,
      url: string,

      method: string,

      frameId: number,

      parentFrameId: number,

      originUrl?: string,

      documentUrl?: string,

      tabId: number,

      type: browser$webRequest$ResourceType,

      timeStamp: number,

      scheme: string,

      realm?: string,

      challenger: {
        host: string,
        port: number
      },

      isProxy: boolean,

      responseHeaders?: browser$webRequest$HttpHeaders,

      statusLine: string,

      statusCode: number
    }) =>
      | browser$webRequest$BlockingResponse
      | Promise<browser$webRequest$BlockingResponse>
      | void

    /**
     * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
     * relate different events of the same request.
     */

    /**
     * Standard HTTP method.
     */

    /**
     * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
     * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
     * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
     * within a tab.
     */

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */

    /**
     * URL of the resource that triggered this request.
     */

    /**
     * URL of the page into which the requested resource will be loaded.
     */

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */

    /**
     * How the requested resource will be used.
     */

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */

    /**
     * The authentication scheme, e.g. Basic or Digest.
     */

    /**
     * The authentication realm provided by the server, if there is one.
     */

    /**
     * The server requesting authentication.
     */

    /**
     * True for Proxy-Authenticate, false for WWW-Authenticate.
     */

    /**
     * The HTTP response headers that were received along with this response.
     */

    /**
     * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses
     * that lack a status line) or an empty string if there are no headers.
     */

    /**
     * Standard HTTP status code returned by the server.
     */
  > = WebExtEventBase<
    (
      callback: T,
      filter: browser$webRequest$RequestFilter,
      extraInfoSpec?: browser$webRequest$OnAuthRequiredOptions[]
    ) => void,
    T
  >;

  declare type browser$webRequest$_WebRequestOnResponseStartedEvent<
    T = (details: {
      requestId: string,
      url: string,

      method: string,

      frameId: number,

      parentFrameId: number,

      originUrl?: string,

      documentUrl?: string,

      tabId: number,

      type: browser$webRequest$ResourceType,

      timeStamp: number,

      ip?: string,

      fromCache: boolean,

      statusCode: number,

      responseHeaders?: browser$webRequest$HttpHeaders,

      statusLine: string
    }) => void

    /**
     * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
     * relate different events of the same request.
     */

    /**
     * Standard HTTP method.
     */

    /**
     * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
     * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
     * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
     * within a tab.
     */

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */

    /**
     * URL of the resource that triggered this request.
     */

    /**
     * URL of the page into which the requested resource will be loaded.
     */

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */

    /**
     * How the requested resource will be used.
     */

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */

    /**
     * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
     */

    /**
     * Indicates if this response was fetched from disk cache.
     */

    /**
     * Standard HTTP status code returned by the server.
     */

    /**
     * The HTTP response headers that were received along with this response.
     */

    /**
     * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses
     * that lack a status line) or an empty string if there are no headers.
     */
  > = WebExtEventBase<
    (
      callback: T,
      filter: browser$webRequest$RequestFilter,
      extraInfoSpec?: browser$webRequest$OnResponseStartedOptions[]
    ) => void,
    T
  >;

  declare type browser$webRequest$_WebRequestOnBeforeRedirectEvent<
    T = (details: {
      requestId: string,
      url: string,

      method: string,

      frameId: number,

      parentFrameId: number,

      originUrl?: string,

      documentUrl?: string,

      tabId: number,

      type: browser$webRequest$ResourceType,

      timeStamp: number,

      ip?: string,

      fromCache: boolean,

      statusCode: number,

      redirectUrl: string,

      responseHeaders?: browser$webRequest$HttpHeaders,

      statusLine: string
    }) => void

    /**
     * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
     * relate different events of the same request.
     */

    /**
     * Standard HTTP method.
     */

    /**
     * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
     * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
     * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
     * within a tab.
     */

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */

    /**
     * URL of the resource that triggered this request.
     */

    /**
     * URL of the page into which the requested resource will be loaded.
     */

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */

    /**
     * How the requested resource will be used.
     */

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */

    /**
     * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
     */

    /**
     * Indicates if this response was fetched from disk cache.
     */

    /**
     * Standard HTTP status code returned by the server.
     */

    /**
     * The new URL.
     */

    /**
     * The HTTP response headers that were received along with this redirect.
     */

    /**
     * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses
     * that lack a status line) or an empty string if there are no headers.
     */
  > = WebExtEventBase<
    (
      callback: T,
      filter: browser$webRequest$RequestFilter,
      extraInfoSpec?: browser$webRequest$OnBeforeRedirectOptions[]
    ) => void,
    T
  >;

  declare type browser$webRequest$_WebRequestOnCompletedEvent<
    T = (details: {
      requestId: string,
      url: string,

      method: string,

      frameId: number,

      parentFrameId: number,

      originUrl?: string,

      documentUrl?: string,

      tabId: number,

      type: browser$webRequest$ResourceType,

      timeStamp: number,

      ip?: string,

      fromCache: boolean,

      statusCode: number,

      responseHeaders?: browser$webRequest$HttpHeaders,

      statusLine: string
    }) => void

    /**
     * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
     * relate different events of the same request.
     */

    /**
     * Standard HTTP method.
     */

    /**
     * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
     * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
     * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
     * within a tab.
     */

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */

    /**
     * URL of the resource that triggered this request.
     */

    /**
     * URL of the page into which the requested resource will be loaded.
     */

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */

    /**
     * How the requested resource will be used.
     */

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */

    /**
     * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
     */

    /**
     * Indicates if this response was fetched from disk cache.
     */

    /**
     * Standard HTTP status code returned by the server.
     */

    /**
     * The HTTP response headers that were received along with this response.
     */

    /**
     * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses
     * that lack a status line) or an empty string if there are no headers.
     */
  > = WebExtEventBase<
    (
      callback: T,
      filter: browser$webRequest$RequestFilter,
      extraInfoSpec?: browser$webRequest$OnCompletedOptions[]
    ) => void,
    T
  >;

  declare type browser$webRequest$_WebRequestOnErrorOccurredEvent<
    T = (details: {
      requestId: string,
      url: string,

      method: string,

      frameId: number,

      parentFrameId: number,

      originUrl?: string,

      documentUrl?: string,

      tabId: number,

      type: browser$webRequest$ResourceType,

      timeStamp: number,

      ip?: string,

      fromCache: boolean,

      error: string
    }) => void

    /**
     * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
     * relate different events of the same request.
     */

    /**
     * Standard HTTP method.
     */

    /**
     * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
     * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
     * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
     * within a tab.
     */

    /**
     * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
     */

    /**
     * URL of the resource that triggered this request.
     */

    /**
     * URL of the page into which the requested resource will be loaded.
     */

    /**
     * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
     */

    /**
     * How the requested resource will be used.
     */

    /**
     * The time when this signal is triggered, in milliseconds since the epoch.
     */

    /**
     * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
     */

    /**
     * Indicates if this response was fetched from disk cache.
     */

    /**
     * The error description. This string is _not_ guaranteed to remain backwards compatible between releases. You
     * must not parse and act based upon its content.
     */
  > = WebExtEventBase<
    (callback: T, filter: browser$webRequest$RequestFilter) => void,
    T
  >;

  /**
   * The maximum number of times that `handlerBehaviorChanged` can be called per 10 minute sustained interval.
   * `handlerBehaviorChanged` is an expensive function call that shouldn't be called often.
   */
  declare var browser$webRequest$MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

  /**
   * Needs to be called when the behavior of the webRequest handlers has changed to prevent incorrect handling due to
   * caching. This function call is expensive. Don't call it often.
   */
  declare function browser$webRequest$handlerBehaviorChanged(): Promise<void>;

  /**
   * ...
   */
  declare function browser$webRequest$filterResponseData(
    requestId: string
  ): { [key: string]: any };

  /**
   * Retrieves the security information for the request. Returns a promise that will resolve to a SecurityInfo object.
   */
  declare function browser$webRequest$getSecurityInfo(
    requestId: string,
    options?: {
      /**
       * Include the entire certificate chain.
       */
      certificateChain?: boolean,

      /**
       * Include raw certificate data for processing by the extension.
       */
      rawDER?: boolean
    }
  ): Promise<browser$webRequest$SecurityInfo>;

  /**
   * Fired when a request is about to occur.
   * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object
   * of this type.
   */
  declare var browser$webRequest$onBeforeRequest: browser$webRequest$_WebRequestOnBeforeRequestEvent<>;

  /**
   * Fired before sending an HTTP request, once the request headers are available. This may occur after a TCP
   * connection is made to the server, but before any HTTP data is sent.
   * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object
   * of this type.
   */
  declare var browser$webRequest$onBeforeSendHeaders: browser$webRequest$_WebRequestOnBeforeSendHeadersEvent<>;

  /**
   * Fired just before a request is going to be sent to the server (modifications of previous onBeforeSendHeaders
   * callbacks are visible by the time onSendHeaders is fired).
   */
  declare var browser$webRequest$onSendHeaders: browser$webRequest$_WebRequestOnSendHeadersEvent<>;

  /**
   * Fired when HTTP response headers of a request have been received.
   * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object
   * of this type.
   */
  declare var browser$webRequest$onHeadersReceived: browser$webRequest$_WebRequestOnHeadersReceivedEvent<>;

  /**
   * Fired when an authentication failure is received. The listener has three options: it can provide authentication
   * credentials, it can cancel the request and display the error page, or it can take no action on the challenge. If
   * bad user credentials are provided, this may be called multiple times for the same request.
   * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object
   * of this type.
   */
  declare var browser$webRequest$onAuthRequired: browser$webRequest$_WebRequestOnAuthRequiredEvent<>;

  /**
   * Fired when the first byte of the response body is received. For HTTP requests, this means that the status line
   * and response headers are available.
   */
  declare var browser$webRequest$onResponseStarted: browser$webRequest$_WebRequestOnResponseStartedEvent<>;

  /**
   * Fired when a server-initiated redirect is about to occur.
   */
  declare var browser$webRequest$onBeforeRedirect: browser$webRequest$_WebRequestOnBeforeRedirectEvent<>;

  /**
   * Fired when a request is completed.
   */
  declare var browser$webRequest$onCompleted: browser$webRequest$_WebRequestOnCompletedEvent<>;

  /**
   * Fired when an error occurs.
   */
  declare var browser$webRequest$onErrorOccurred: browser$webRequest$_WebRequestOnErrorOccurredEvent<>;

  declare var npm$namespace$browser$bookmarks: {
    get: typeof browser$bookmarks$get,
    getChildren: typeof browser$bookmarks$getChildren,
    getRecent: typeof browser$bookmarks$getRecent,
    getTree: typeof browser$bookmarks$getTree,
    getSubTree: typeof browser$bookmarks$getSubTree,
    search: typeof browser$bookmarks$search,
    create: typeof browser$bookmarks$create,
    move: typeof browser$bookmarks$move,
    update: typeof browser$bookmarks$update,
    remove: typeof browser$bookmarks$remove,
    removeTree: typeof browser$bookmarks$removeTree,
    onCreated: typeof browser$bookmarks$onCreated,
    onRemoved: typeof browser$bookmarks$onRemoved,
    onChanged: typeof browser$bookmarks$onChanged,
    onMoved: typeof browser$bookmarks$onMoved,
    onChildrenReordered: typeof browser$bookmarks$onChildrenReordered
  };

  /**
   * Indicates the reason why this node is unmodifiable. The `managed` value indicates that this node was configured
   * by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the
   * user and the extension (default).
   */
  declare type browser$bookmarks$BookmarkTreeNodeUnmodifiable = "managed";

  /**
   * Indicates the type of a BookmarkTreeNode, which can be one of bookmark, folder or separator.
   */
  declare type browser$bookmarks$BookmarkTreeNodeType =
    | "bookmark"
    | "folder"
    | "separator";

  /**
   * A node (either a bookmark or a folder) in the bookmark tree. Child nodes are ordered within their parent folder.
   */
  declare interface browser$bookmarks$BookmarkTreeNode {
    /**
     * The unique identifier for the node. IDs are unique within the current profile, and they remain valid even
     * after the browser is restarted.
     */
    id: string;

    /**
     * The `id` of the parent folder. Omitted for the root node.
     */
    parentId?: string;

    /**
     * The 0-based position of this node within its parent folder.
     */
    index?: number;

    /**
     * The URL navigated to when a user clicks the bookmark. Omitted for folders.
     */
    url?: string;

    /**
     * The text displayed for the node.
     */
    title: string;

    /**
     * When this node was created, in milliseconds since the epoch (`new Date(dateAdded)`).
     */
    dateAdded?: number;

    /**
     * When the contents of this folder last changed, in milliseconds since the epoch.
     */
    dateGroupModified?: number;

    /**
     * Indicates the reason why this node is unmodifiable. The `managed` value indicates that this node was
     * configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be
     * modified by the user and the extension (default).
     */
    unmodifiable?: browser$bookmarks$BookmarkTreeNodeUnmodifiable;

    /**
     * Indicates the type of the BookmarkTreeNode, which can be one of bookmark, folder or separator.
     */
    type?: browser$bookmarks$BookmarkTreeNodeType;

    /**
     * An ordered list of children of this node.
     */
    children?: browser$bookmarks$BookmarkTreeNode[];
  }

  /**
   * Object passed to the create() function.
   */
  declare interface browser$bookmarks$CreateDetails {
    /**
     * Defaults to the Other Bookmarks folder.
     */
    parentId?: string;
    index?: number;
    title?: string;
    url?: string;

    /**
     * Indicates the type of BookmarkTreeNode to create, which can be one of bookmark, folder or separator.
     */
    type?: browser$bookmarks$BookmarkTreeNodeType;
  }

  /**
   * Retrieves the specified BookmarkTreeNode(s).
   * @param idOrIdList A single string-valued id, or an array of string-valued ids
   */
  declare function browser$bookmarks$get(
    idOrIdList: string | string[]
  ): Promise<browser$bookmarks$BookmarkTreeNode[]>;

  /**
   * Retrieves the children of the specified BookmarkTreeNode id.
   */
  declare function browser$bookmarks$getChildren(
    id: string
  ): Promise<browser$bookmarks$BookmarkTreeNode[]>;

  /**
   * Retrieves the recently added bookmarks.
   * @param numberOfItems The maximum number of items to return.
   */
  declare function browser$bookmarks$getRecent(
    numberOfItems: number
  ): Promise<browser$bookmarks$BookmarkTreeNode[]>;

  /**
   * Retrieves the entire Bookmarks hierarchy.
   */
  declare function browser$bookmarks$getTree(): Promise<
    browser$bookmarks$BookmarkTreeNode[]
  >;

  /**
   * Retrieves part of the Bookmarks hierarchy, starting at the specified node.
   * @param id The ID of the root of the subtree to retrieve.
   */
  declare function browser$bookmarks$getSubTree(
    id: string
  ): Promise<browser$bookmarks$BookmarkTreeNode[]>;

  /**
   * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce
   * BookmarkTreeNodes matching all specified properties.
   * @param query Either a string of words and quoted phrases that are matched against bookmark URLs and titles, or
   * an object. If an object, the properties `query`, `url`, and `title` may be specified and bookmarks matching
   * all specified properties will be produced.
   */
  declare function browser$bookmarks$search(
    query:
      | string
      | {
          /**
           * A string of words and quoted phrases that are matched against bookmark URLs and titles.
           */
          query?: string,

          /**
           * The URL of the bookmark; matches verbatim. Note that folders have no URL.
           */
          url?: string,

          /**
           * The title of the bookmark; matches verbatim.
           */
          title?: string
        }
  ): Promise<browser$bookmarks$BookmarkTreeNode[]>;

  /**
   * Creates a bookmark or folder under the specified parentId. If url is NULL or missing, it will be a folder.
   */
  declare function browser$bookmarks$create(
    bookmark: browser$bookmarks$CreateDetails
  ): Promise<browser$bookmarks$BookmarkTreeNode | void>;

  /**
   * Moves the specified BookmarkTreeNode to the provided location.
   */
  declare function browser$bookmarks$move(
    id: string,
    destination: {
      parentId?: string,
      index?: number
    }
  ): Promise<browser$bookmarks$BookmarkTreeNode | void>;

  /**
   * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified
   * properties will be left unchanged. **Note:** Currently, only 'title' and 'url' are supported.
   */
  declare function browser$bookmarks$update(
    id: string,
    changes: {
      title?: string,
      url?: string
    }
  ): Promise<browser$bookmarks$BookmarkTreeNode | void>;

  /**
   * Removes a bookmark or an empty bookmark folder.
   */
  declare function browser$bookmarks$remove(id: string): Promise<void>;

  /**
   * Recursively removes a bookmark folder.
   */
  declare function browser$bookmarks$removeTree(id: string): Promise<void>;

  /**
   * Fired when a bookmark or folder is created.
   */
  declare var browser$bookmarks$onCreated: WebExtEvent<
    (id: string, bookmark: browser$bookmarks$BookmarkTreeNode) => void
  >;

  /**
   * Fired when a bookmark or folder is removed. When a folder is removed recursively, a single notification is fired
   * for the folder, and none for its contents.
   */
  declare var browser$bookmarks$onRemoved: WebExtEvent<
    (
      id: string,
      removeInfo: {
        parentId: string,
        index: number,
        node: browser$bookmarks$BookmarkTreeNode
      }
    ) => void
  >;

  /**
   * Fired when a bookmark or folder changes. **Note:** Currently, only title and url changes trigger this.
   */
  declare var browser$bookmarks$onChanged: WebExtEvent<
    (
      id: string,
      changeInfo: {
        title: string,
        url?: string
      }
    ) => void
  >;

  /**
   * Fired when a bookmark or folder is moved to a different parent folder.
   */
  declare var browser$bookmarks$onMoved: WebExtEvent<
    (
      id: string,
      moveInfo: {
        parentId: string,
        index: number,
        oldParentId: string,
        oldIndex: number
      }
    ) => void
  >;

  /**
   * Fired when the children of a folder have changed their order due to the order being sorted in the UI. This is
   * not called as a result of a move().
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$bookmarks$onChildrenReordered: WebExtEvent<
    (
      id: string,
      reorderInfo: {
        childIds: string[]
      }
    ) => void
  > | void;

  declare var npm$namespace$browser$browserAction: {
    setTitle: typeof browser$browserAction$setTitle,
    getTitle: typeof browser$browserAction$getTitle,
    setIcon: typeof browser$browserAction$setIcon,
    setPopup: typeof browser$browserAction$setPopup,
    getPopup: typeof browser$browserAction$getPopup,
    setBadgeText: typeof browser$browserAction$setBadgeText,
    getBadgeText: typeof browser$browserAction$getBadgeText,
    setBadgeBackgroundColor: typeof browser$browserAction$setBadgeBackgroundColor,
    getBadgeBackgroundColor: typeof browser$browserAction$getBadgeBackgroundColor,
    setBadgeTextColor: typeof browser$browserAction$setBadgeTextColor,
    getBadgeTextColor: typeof browser$browserAction$getBadgeTextColor,
    enable: typeof browser$browserAction$enable,
    disable: typeof browser$browserAction$disable,
    isEnabled: typeof browser$browserAction$isEnabled,
    openPopup: typeof browser$browserAction$openPopup,
    onClicked: typeof browser$browserAction$onClicked
  };

  /**
   * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab
   * nor window is specified, the global value is set or retrieved.
   */
  declare interface browser$browserAction$Details {
    /**
     * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab
     * navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the
     * window one will be inherited.
     */
    tabId?: number;

    /**
     * When setting a value, it will be specific to the specified window. When getting, specifies the window to get
     * the value from; if there is no window-specific value, the global one will be inherited.
     */
    windowId?: number;
  }

  declare type browser$browserAction$ColorArray = [
    number,
    number,
    number,
    number
  ];

  /**
   * Pixel data for an image. Must be an ImageData object (for example, from a `canvas` element).
   */
  declare type browser$browserAction$ImageDataType = { [key: string]: any };

  /**
   * An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red
   * is `[255, 0, 0, 255]`. Can also be a string with a CSS value, with opaque red being `#FF0000` or `#F00`.
   */
  declare type browser$browserAction$ColorValue =
    | string
    | browser$browserAction$ColorArray
    | null;

  /**
   * Sets the title of the browser action. This shows up in the tooltip.
   * @param details Specifies to which tab or window the value should be set, or from which one it should be
   * retrieved. If no tab nor window is specified, the global value is set or retrieved.
   */
  declare function browser$browserAction$setTitle(details: {
    /**
     * The string the browser action should display when moused over.
     */
    title: string | null,

    /**
     * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab
     * navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the
     * window one will be inherited.
     */
    tabId?: number,

    /**
     * When setting a value, it will be specific to the specified window. When getting, specifies the window to get
     * the value from; if there is no window-specific value, the global one will be inherited.
     */
    windowId?: number
  }): Promise<void>;

  /**
   * Gets the title of the browser action.
   */
  declare function browser$browserAction$getTitle(
    details: browser$browserAction$Details
  ): Promise<string>;

  /**
   * Sets the icon for the browser action. The icon can be specified either as the path to an image file or as the
   * pixel data from a canvas element, or as dictionary of either one of those. Either the **path** or the
   * **imageData** property must be specified.
   * @param details Specifies to which tab or window the value should be set, or from which one it should be
   * retrieved. If no tab nor window is specified, the global value is set or retrieved.
   */
  declare function browser$browserAction$setIcon(details: {
    /**
     * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is
     * specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the
     * number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19
     * will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified.
     * Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
     */
    imageData?:
      | browser$browserAction$ImageDataType
      | {
          [key: number]: browser$browserAction$ImageDataType
        },

    /**
     * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If
     * the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel
     * density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with
     * size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must
     * be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
     */
    path?:
      | string
      | {
          [key: number]: string
        },

    /**
     * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab
     * navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the
     * window one will be inherited.
     */
    tabId?: number,

    /**
     * When setting a value, it will be specific to the specified window. When getting, specifies the window to get
     * the value from; if there is no window-specific value, the global one will be inherited.
     */
    windowId?: number
  }): Promise<void>;

  /**
   * Sets the html document to be opened as a popup when the user clicks on the browser action's icon.
   * @param details Specifies to which tab or window the value should be set, or from which one it should be
   * retrieved. If no tab nor window is specified, the global value is set or retrieved.
   */
  declare function browser$browserAction$setPopup(details: {
    /**
     * The html file to show in a popup. If set to the empty string (''), no popup is shown.
     */
    popup: string | null,

    /**
     * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab
     * navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the
     * window one will be inherited.
     */
    tabId?: number,

    /**
     * When setting a value, it will be specific to the specified window. When getting, specifies the window to get
     * the value from; if there is no window-specific value, the global one will be inherited.
     */
    windowId?: number
  }): Promise<void>;

  /**
   * Gets the html document set as the popup for this browser action.
   */
  declare function browser$browserAction$getPopup(
    details: browser$browserAction$Details
  ): Promise<string>;

  /**
   * Sets the badge text for the browser action. The badge is displayed on top of the icon.
   * @param details Specifies to which tab or window the value should be set, or from which one it should be
   * retrieved. If no tab nor window is specified, the global value is set or retrieved.
   */
  declare function browser$browserAction$setBadgeText(details: {
    /**
     * Any number of characters can be passed, but only about four can fit in the space.
     */
    text: string | null,

    /**
     * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab
     * navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the
     * window one will be inherited.
     */
    tabId?: number,

    /**
     * When setting a value, it will be specific to the specified window. When getting, specifies the window to get
     * the value from; if there is no window-specific value, the global one will be inherited.
     */
    windowId?: number
  }): Promise<void>;

  /**
   * Gets the badge text of the browser action. If no tab nor window is specified is specified, the global badge text
   * is returned.
   */
  declare function browser$browserAction$getBadgeText(
    details: browser$browserAction$Details
  ): Promise<string>;

  /**
   * Sets the background color for the badge.
   * @param details Specifies to which tab or window the value should be set, or from which one it should be
   * retrieved. If no tab nor window is specified, the global value is set or retrieved.
   */
  declare function browser$browserAction$setBadgeBackgroundColor(details: {
    color: browser$browserAction$ColorValue,

    /**
     * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab
     * navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the
     * window one will be inherited.
     */
    tabId?: number,

    /**
     * When setting a value, it will be specific to the specified window. When getting, specifies the window to get
     * the value from; if there is no window-specific value, the global one will be inherited.
     */
    windowId?: number
  }): Promise<void>;

  /**
   * Gets the background color of the browser action badge.
   */
  declare function browser$browserAction$getBadgeBackgroundColor(
    details: browser$browserAction$Details
  ): Promise<browser$browserAction$ColorArray>;

  /**
   * Sets the text color for the badge.
   * @param details Specifies to which tab or window the value should be set, or from which one it should be
   * retrieved. If no tab nor window is specified, the global value is set or retrieved.
   */
  declare function browser$browserAction$setBadgeTextColor(details: {
    color: browser$browserAction$ColorValue,

    /**
     * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab
     * navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the
     * window one will be inherited.
     */
    tabId?: number,

    /**
     * When setting a value, it will be specific to the specified window. When getting, specifies the window to get
     * the value from; if there is no window-specific value, the global one will be inherited.
     */
    windowId?: number
  }): Promise<any>;

  /**
   * Gets the text color of the browser action badge.
   */
  declare function browser$browserAction$getBadgeTextColor(
    details: browser$browserAction$Details
  ): Promise<any>;

  /**
   * Enables the browser action for a tab. By default, browser actions are enabled.
   * @param tabId The id of the tab for which you want to modify the browser action.
   */
  declare function browser$browserAction$enable(tabId?: number): Promise<void>;

  /**
   * Disables the browser action for a tab.
   * @param tabId The id of the tab for which you want to modify the browser action.
   */
  declare function browser$browserAction$disable(tabId?: number): Promise<void>;

  /**
   * Checks whether the browser action is enabled.
   */
  declare function browser$browserAction$isEnabled(
    details: browser$browserAction$Details
  ): Promise<any>;

  /**
   * Opens the extension popup window in the active window.
   */
  declare function browser$browserAction$openPopup(): Promise<void>;

  /**
   * Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup.
   */
  declare var browser$browserAction$onClicked: WebExtEvent<
    (tab: browser$tabs$Tab) => void
  >;

  declare var npm$namespace$browser$browsingData: {
    settings: typeof browser$browsingData$settings,
    remove: typeof browser$browsingData$remove,
    removeAppcache: typeof browser$browsingData$removeAppcache,
    removeCache: typeof browser$browsingData$removeCache,
    removeCookies: typeof browser$browsingData$removeCookies,
    removeDownloads: typeof browser$browsingData$removeDownloads,
    removeFileSystems: typeof browser$browsingData$removeFileSystems,
    removeFormData: typeof browser$browsingData$removeFormData,
    removeHistory: typeof browser$browsingData$removeHistory,
    removeIndexedDB: typeof browser$browsingData$removeIndexedDB,
    removeLocalStorage: typeof browser$browsingData$removeLocalStorage,
    removePluginData: typeof browser$browsingData$removePluginData,
    removePasswords: typeof browser$browsingData$removePasswords,
    removeWebSQL: typeof browser$browsingData$removeWebSQL
  };

  /**
   * Options that determine exactly what data will be removed.
   */
  declare interface browser$browsingData$RemovalOptions {
    /**
     * Remove data accumulated on or after this date, represented in milliseconds since the epoch (accessible via
     * the `getTime` method of the JavaScript `Date` object). If absent, defaults to 0 (which would remove all
     * browsing data).
     */
    since?: browser$extensionTypes$Date;

    /**
     * Only remove data associated with these hostnames (only applies to cookies and localStorage).
     */
    hostnames?: string[];

    /**
     * An object whose properties specify which origin types ought to be cleared. If this object isn't specified,
     * it defaults to clearing only "unprotected" origins. Please ensure that you _really_ want to remove
     * application data before adding 'protectedWeb' or 'extensions'.
     */
    originTypes?: {
      /**
       * Normal websites.
       */
      unprotectedWeb?: boolean,

      /**
       * Websites that have been installed as hosted applications (be careful!).
       */
      protectedWeb?: boolean,

      /**
       * Extensions and packaged applications a user has installed (be _really_ careful!).
       */
      extension?: boolean
    };
  }

  /**
   * A set of data types. Missing data types are interpreted as `false`.
   */
  declare interface browser$browsingData$DataTypeSet {
    /**
     * The browser's cache. Note: when removing data, this clears the _entire_ cache: it is not limited to the
     * range you specify.
     */
    cache?: boolean;

    /**
     * The browser's cookies.
     */
    cookies?: boolean;

    /**
     * The browser's download list.
     */
    downloads?: boolean;

    /**
     * The browser's stored form data.
     */
    formData?: boolean;

    /**
     * The browser's history.
     */
    history?: boolean;

    /**
     * Websites' IndexedDB data.
     */
    indexedDB?: boolean;

    /**
     * Websites' local storage data.
     */
    localStorage?: boolean;

    /**
     * Server-bound certificates.
     */
    serverBoundCertificates?: boolean;

    /**
     * Stored passwords.
     */
    passwords?: boolean;

    /**
     * Plugins' data.
     */
    pluginData?: boolean;

    /**
     * Service Workers.
     */
    serviceWorkers?: boolean;
  }

  /**
   * Reports which types of data are currently selected in the 'Clear browsing data' settings UI. Note: some of the
   * data types included in this API are not available in the settings UI, and some UI settings control more than one
   * data type listed here.
   */
  declare function browser$browsingData$settings(): Promise<{
    options: browser$browsingData$RemovalOptions,

    /**
     * All of the types will be present in the result, with values of `true` if they are both selected to be
     * removed and permitted to be removed, otherwise `false`.
     */
    dataToRemove: browser$browsingData$DataTypeSet,

    /**
     * All of the types will be present in the result, with values of `true` if they are permitted to be removed
     * (e.g., by enterprise policy) and `false` if not.
     */
    dataRemovalPermitted: browser$browsingData$DataTypeSet
  }>;

  /**
   * Clears various types of browsing data stored in a user's profile.
   * @param dataToRemove The set of data types to remove.
   */
  declare function browser$browsingData$remove(
    options: browser$browsingData$RemovalOptions,
    dataToRemove: browser$browsingData$DataTypeSet
  ): Promise<void>;

  /**
   * Clears websites' appcache data.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$browsingData$removeAppcache(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  /**
   * Clears the browser's cache.
   */
  declare function browser$browsingData$removeCache(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  /**
   * Clears the browser's cookies and server-bound certificates modified within a particular timeframe.
   */
  declare function browser$browsingData$removeCookies(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  /**
   * Clears the browser's list of downloaded files (_not_ the downloaded files themselves).
   */
  declare function browser$browsingData$removeDownloads(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  /**
   * Clears websites' file system data.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$browsingData$removeFileSystems(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  /**
   * Clears the browser's stored form data (autofill).
   */
  declare function browser$browsingData$removeFormData(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  /**
   * Clears the browser's history.
   */
  declare function browser$browsingData$removeHistory(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  /**
   * Clears websites' IndexedDB data.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$browsingData$removeIndexedDB(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  /**
   * Clears websites' local storage data.
   */
  declare function browser$browsingData$removeLocalStorage(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  /**
   * Clears plugins' data.
   */
  declare function browser$browsingData$removePluginData(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  /**
   * Clears the browser's stored passwords.
   */
  declare function browser$browsingData$removePasswords(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  /**
   * Clears websites' WebSQL data.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$browsingData$removeWebSQL(
    options: browser$browsingData$RemovalOptions
  ): Promise<void>;

  declare var npm$namespace$browser$commands: {
    update: typeof browser$commands$update,
    reset: typeof browser$commands$reset,
    getAll: typeof browser$commands$getAll,
    onCommand: typeof browser$commands$onCommand
  };
  declare interface browser$commands$Command {
    /**
     * The name of the Extension Command
     */
    name?: string;

    /**
     * The Extension Command description
     */
    description?: string;

    /**
     * The shortcut active for this command, or blank if not active.
     */
    shortcut?: string;
  }

  /**
   * Update the details of an already defined command.
   * @param detail The new description for the command.
   */
  declare function browser$commands$update(detail: {
    /**
     * The name of the command.
     */
    name: string,

    /**
     * The new description for the command.
     */
    description?: string,
    shortcut?: browser$_manifest$KeyName
  }): Promise<void>;

  /**
   * Reset a command's details to what is specified in the manifest.
   * @param name The name of the command.
   */
  declare function browser$commands$reset(name: string): Promise<void>;

  /**
   * Returns all the registered extension commands for this extension and their shortcut (if active).
   */
  declare function browser$commands$getAll(): Promise<
    browser$commands$Command[] | void
  >;

  /**
   * Fired when a registered command is activated using a keyboard shortcut.
   */
  declare var browser$commands$onCommand: WebExtEvent<
    (command: string) => void
  >;

  declare var npm$namespace$browser$devtools: {
    inspectedWindow: typeof npm$namespace$browser$devtools$inspectedWindow,
    network: typeof npm$namespace$browser$devtools$network,
    panels: typeof npm$namespace$browser$devtools$panels
  };

  declare var npm$namespace$browser$devtools$inspectedWindow: {
    eval: typeof browser$devtools$inspectedWindow$eval,
    reload: typeof browser$devtools$inspectedWindow$reload,
    getResources: typeof browser$devtools$inspectedWindow$getResources,
    tabId: typeof browser$devtools$inspectedWindow$tabId,
    onResourceAdded: typeof browser$devtools$inspectedWindow$onResourceAdded,
    onResourceContentCommitted: typeof browser$devtools$inspectedWindow$onResourceContentCommitted
  };

  /**
   * A resource within the inspected page, such as a document, a script, or an image.
   */
  declare interface browser$devtools$inspectedWindow$Resource {
    /**
     * The URL of the resource.
     */
    url: string;

    /**
     * Gets the content of the resource.
     * @deprecated Unsupported on Firefox at this time.
     */
    getContent?: () => Promise<{ [key: string]: any }>;

    /**
     * Sets the content of the resource.
     * @param content New content of the resource. Only resources with the text type are currently supported.
     * @param commit True if the user has finished editing the resource, and the new content of the resource should
     * be persisted; false if this is a minor change sent in progress of the user editing the resource.
     * @deprecated Unsupported on Firefox at this time.
     */
    setContent?: (content: string, commit: boolean) => Promise<any>;
  }

  /**
   * The ID of the tab being inspected. This ID may be used with browser.tabs.* API.
   */
  declare var browser$devtools$inspectedWindow$tabId: number;

  /**
   * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must
   * evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a
   * DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the `result`
   * parameter of the callback is `undefined`. In the case of a DevTools-side error, the `isException` parameter is
   * non-null and has `isError` set to true and `code` set to an error code. In the case of a JavaScript error,
   * `isException` is set to true and `value` is set to the string value of thrown object.
   * @param expression An expression to evaluate.
   * @param options The options parameter can contain one or more options.
   */
  declare function browser$devtools$inspectedWindow$eval(
    expression: string,
    options?: {
      /**
       * If specified, the expression is evaluated on the iframe whose URL matches the one specified. By default, the
       * expression is evaluated in the top frame of the inspected page.
       * @deprecated Unsupported on Firefox at this time.
       */
      frameURL?: string,

      /**
       * Evaluate the expression in the context of the content script of the calling extension, provided that the
       * content script is already injected into the inspected page. If not, the expression is not evaluated and the
       * callback is invoked with the exception parameter set to an object that has the `isError` field set to true
       * and the `code` field set to `E_NOTFOUND`.
       * @deprecated Unsupported on Firefox at this time.
       */
      useContentScriptContext?: boolean,

      /**
       * Evaluate the expression in the context of a content script of an extension that matches the specified
       * origin. If given, contextSecurityOrigin overrides the 'true' setting on userContentScriptContext.
       * @deprecated Unsupported on Firefox at this time.
       */
      contextSecurityOrigin?: string
    }
  ): Promise<{ [key: string]: any } | void>;

  /**
   * Reloads the inspected page.
   */
  declare function browser$devtools$inspectedWindow$reload(reloadOptions?: {
    /**
     * When true, the loader will bypass the cache for all inspected page resources loaded before the `load` event
     * is fired. The effect is similar to pressing Ctrl+Shift+R in the inspected window or within the Developer
     * Tools window.
     */
    ignoreCache?: boolean,

    /**
     * If specified, the string will override the value of the `User-Agent` HTTP header that's sent while loading
     * the resources of the inspected page. The string will also override the value of the `navigator.userAgent`
     * property that's returned to any scripts that are running within the inspected page.
     */
    userAgent?: string,

    /**
     * If specified, the script will be injected into every frame of the inspected page immediately upon load,
     * before any of the frame's scripts. The script will not be injected after subsequent reloads—for example, if
     * the user presses Ctrl+R.
     */
    injectedScript?: string,

    /**
     * If specified, this script evaluates into a function that accepts three string arguments: the source to
     * preprocess, the URL of the source, and a function name if the source is an DOM event handler. The
     * preprocessorerScript function should return a string to be compiled by Chrome in place of the input source.
     * In the case that the source is a DOM event handler, the returned source must compile to a single JS
     * function.
     * @deprecated Please avoid using this parameter, it will be removed soon.
     */
    preprocessorScript?: string
  }): void;

  /**
   * Retrieves the list of resources from the inspected page.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$devtools$inspectedWindow$getResources(): Promise<
    browser$devtools$inspectedWindow$Resource[]
  >;

  /**
   * Fired when a new resource is added to the inspected page.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$devtools$inspectedWindow$onResourceAdded: WebExtEvent<
    (resource: browser$devtools$inspectedWindow$Resource) => void
  > | void;

  /**
   * Fired when a new revision of the resource is committed (e.g. user saves an edited version of the resource in the
   * Developer Tools).
   * @param content New content of the resource.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare var browser$devtools$inspectedWindow$onResourceContentCommitted: WebExtEvent<
    (
      resource: browser$devtools$inspectedWindow$Resource,
      content: string
    ) => void
  > | void;

  declare var npm$namespace$browser$devtools$network: {
    getHAR: typeof browser$devtools$network$getHAR,
    onRequestFinished: typeof browser$devtools$network$onRequestFinished,
    onNavigated: typeof browser$devtools$network$onNavigated
  };

  /**
   * Represents a network request for a document resource (script, image and so on). See HAR Specification for
   * reference.
   */
  declare interface browser$devtools$network$Request {
    /**
     * Returns content of the response body.
     */
    getContent(): Promise<{ [key: string]: any }>;
  }

  /**
   * Returns HAR log that contains all known network requests.
   */
  declare function browser$devtools$network$getHAR(): Promise<any>;

  /**
   * Fired when a network request is finished and all request data are available.
   * @param request Description of a network request in the form of a HAR entry. See HAR specification for details.
   */
  declare var browser$devtools$network$onRequestFinished: WebExtEvent<
    (request: browser$devtools$network$Request) => void
  >;

  /**
   * Fired when the inspected window navigates to a new page.
   * @param url URL of the new page.
   */
  declare var browser$devtools$network$onNavigated: WebExtEvent<
    (url: string) => void
  >;

  declare var npm$namespace$browser$devtools$panels: {
    create: typeof browser$devtools$panels$create,
    setOpenResourceHandler: typeof browser$devtools$panels$setOpenResourceHandler,
    openResource: typeof browser$devtools$panels$openResource,
    elements: typeof browser$devtools$panels$elements,
    sources: typeof browser$devtools$panels$sources,
    themeName: typeof browser$devtools$panels$themeName,
    onThemeChanged: typeof browser$devtools$panels$onThemeChanged
  };

  /**
   * Represents the Elements panel.
   */
  declare interface browser$devtools$panels$ElementsPanel {
    /**
     * Creates a pane within panel's sidebar.
     * @param title Text that is displayed in sidebar caption.
     * @param callback A callback invoked when the sidebar is created.
     */
    createSidebarPane(
      title: string,
      callback?: (result: panels$ExtensionSidebarPane) => void
    ): void;

    /**
     * Fired when an object is selected in the panel.
     */
    onSelectionChanged: WebExtEvent<() => void>;
  }

  /**
   * Represents the Sources panel.
   */
  declare interface browser$devtools$panels$SourcesPanel {
    /**
     * Creates a pane within panel's sidebar.
     * @param title Text that is displayed in sidebar caption.
     * @deprecated Unsupported on Firefox at this time.
     */
    createSidebarPane?: (
      title: string
    ) => Promise<panels$ExtensionSidebarPane | void>;

    /**
     * Fired when an object is selected in the panel.
     * @deprecated Unsupported on Firefox at this time.
     */
    onSelectionChanged: WebExtEvent<() => void>;
  }

  /**
   * Represents a panel created by extension.
   */
  declare interface browser$devtools$panels$ExtensionPanel {
    /**
     * Appends a button to the status bar of the panel.
     * @param iconPath Path to the icon of the button. The file should contain a 64x24-pixel image composed of two
     * 32x24 icons. The left icon is used when the button is inactive; the right icon is displayed when the
     * button is pressed.
     * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button.
     * @param disabled Whether the button is disabled.
     * @deprecated Unsupported on Firefox at this time.
     */
    createStatusBarButton?: (
      iconPath: string,
      tooltipText: string,
      disabled: boolean
    ) => panels$Button;

    /**
     * Fired upon a search action (start of a new search, search result navigation, or search being canceled).
     * @param action Type of search action being performed.
     * @param queryString Query string (only for 'performSearch').
     * @deprecated Unsupported on Firefox at this time.
     */
    onSearch: WebExtEvent<(action: string, queryString?: string) => void>;

    /**
     * Fired when the user switches to the panel.
     * @param window The JavaScript `window` object of panel's page.
     */
    onShown: WebExtEvent<(window: { [key: string]: any }) => void>;

    /**
     * Fired when the user switches away from the panel.
     */
    onHidden: WebExtEvent<() => void>;
  }

  /**
   * A sidebar created by the extension.
   */
  declare interface browser$devtools$panels$ExtensionSidebarPane {
    /**
     * Sets the height of the sidebar.
     * @param height A CSS-like size specification, such as `'100px'` or `'12ex'`.
     * @deprecated Unsupported on Firefox at this time.
     */
    setHeight?: (height: string) => void;

    /**
     * Sets an expression that is evaluated within the inspected page. The result is displayed in the sidebar pane.
     * @param expression An expression to be evaluated in context of the inspected page. JavaScript objects and DOM
     * nodes are displayed in an expandable tree similar to the console/watch.
     * @param rootTitle An optional title for the root of the expression tree.
     */
    setExpression(expression: string, rootTitle?: string): Promise<void>;

    /**
     * Sets a JSON-compliant object to be displayed in the sidebar pane.
     * @param jsonObject An object to be displayed in context of the inspected page. Evaluated in the context of
     * the caller (API client).
     * @param rootTitle An optional title for the root of the expression tree.
     */
    setObject(jsonObject: string, rootTitle?: string): Promise<void>;

    /**
     * Sets an HTML page to be displayed in the sidebar pane.
     * @param path Relative path of an extension page to display within the sidebar.
     */
    setPage(path: browser$_manifest$ExtensionURL): Promise<any>;

    /**
     * Fired when the sidebar pane becomes visible as a result of user switching to the panel that hosts it.
     * @param window The JavaScript `window` object of the sidebar page, if one was set with the `setPage()` method.
     */
    onShown: WebExtEvent<(window: { [key: string]: any }) => void>;

    /**
     * Fired when the sidebar pane becomes hidden as a result of the user switching away from the panel that hosts
     * the sidebar pane.
     */
    onHidden: WebExtEvent<() => void>;
  }

  /**
   * A button created by the extension.
   */
  declare interface browser$devtools$panels$Button {
    /**
     * Updates the attributes of the button. If some of the arguments are omitted or `null`, the corresponding
     * attributes are not updated.
     * @param iconPath Path to the new icon of the button.
     * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button.
     * @param disabled Whether the button is disabled.
     * @deprecated Unsupported on Firefox at this time.
     */
    update?: (
      iconPath?: string,
      tooltipText?: string,
      disabled?: boolean
    ) => void;

    /**
     * Fired when the button is clicked.
     * @deprecated Unsupported on Firefox at this time.
     */
    onClicked: WebExtEvent<() => void>;
  }

  declare type browser$devtools$panels$_Create = "";

  /**
   * Elements panel.
   */
  declare var browser$devtools$panels$elements: browser$devtools$panels$ElementsPanel;

  /**
   * Sources panel.
   */
  declare var browser$devtools$panels$sources: browser$devtools$panels$SourcesPanel;

  /**
   * The name of the current devtools theme.
   */
  declare var browser$devtools$panels$themeName: string;

  /**
   * Creates an extension panel.
   * @param title Title that is displayed next to the extension icon in the Developer Tools toolbar.
   * @param iconPath Path of the panel's icon relative to the extension directory, or an empty string to use the
   * default extension icon as the panel icon.
   * @param pagePath Path of the panel's HTML page relative to the extension directory.
   */
  declare function browser$devtools$panels$create(
    title: string,
    iconPath: browser$_manifest$ExtensionURL | browser$devtools$panels$_Create,
    pagePath: browser$_manifest$ExtensionURL
  ): Promise<browser$devtools$panels$ExtensionPanel | void>;

  /**
   * Specifies the function to be called when the user clicks a resource link in the Developer Tools window. To unset
   * the handler, either call the method with no parameters or pass null as the parameter.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$devtools$panels$setOpenResourceHandler(): Promise<browser$devtools$inspectedWindow$Resource | void>;

  /**
   * Requests DevTools to open a URL in a Developer Tools panel.
   * @param url The URL of the resource to open.
   * @param lineNumber Specifies the line number to scroll to when the resource is loaded.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$devtools$panels$openResource(
    url: string,
    lineNumber: number
  ): Promise<void>;

  /**
   * Fired when the devtools theme changes.
   * @param themeName The name of the current devtools theme.
   */
  declare var browser$devtools$panels$onThemeChanged: WebExtEvent<
    (themeName: string) => void
  >;

  declare var npm$namespace$browser$find: {
    find: typeof browser$find$find,
    highlightResults: typeof browser$find$highlightResults,
    removeHighlighting: typeof browser$find$removeHighlighting
  };

  /**
   * Search for text in document and store found ranges in array, in document order.
   * @param queryphrase The string to search for.
   * @param params Search parameters.
   */
  declare function browser$find$find(
    queryphrase: string,
    params?: {
      /**
       * Tab to query. Defaults to the active tab.
       */
      tabId?: number,

      /**
       * Find only ranges with case sensitive match.
       */
      caseSensitive?: boolean,

      /**
       * Find only ranges that match entire word.
       */
      entireWord?: boolean,

      /**
       * Return rectangle data which describes visual position of search results.
       */
      includeRectData?: boolean,

      /**
       * Return range data which provides range data in a serializable form.
       */
      includeRangeData?: boolean
    }
  ): Promise<{
    count: number,
    rangeData?: Array<{
      framePos: number,
      startTextNodePos: number,
      endTextNodePos: number,
      startOffset: number,
      endOffset: number
    }>,
    rectData?: Array<{
      rectsAndTexts: {
        rectList: Array<{
          top: number,
          left: number,
          bottom: number,
          right: number
        }>,
        textList: string[]
      },
      textList: string
    }>
  }>;

  /**
   * Highlight a range
   * @param params highlightResults parameters
   */
  declare function browser$find$highlightResults(params?: {
    /**
     * Found range to be highlighted. Default highlights all ranges.
     */
    rangeIndex?: number,

    /**
     * Tab to highlight. Defaults to the active tab.
     */
    tabId?: number,

    /**
     * Don't scroll to highlighted item.
     */
    noScroll?: boolean
  }): void;

  /**
   * Remove all highlighting from previous searches.
   * @param tabId Tab to highlight. Defaults to the active tab.
   */
  declare function browser$find$removeHighlighting(tabId?: number): void;

  declare var npm$namespace$browser$geckoProfiler: {
    start: typeof browser$geckoProfiler$start,
    stop: typeof browser$geckoProfiler$stop,
    pause: typeof browser$geckoProfiler$pause,
    resume: typeof browser$geckoProfiler$resume,
    getProfile: typeof browser$geckoProfiler$getProfile,
    getProfileAsArrayBuffer: typeof browser$geckoProfiler$getProfileAsArrayBuffer,
    getSymbols: typeof browser$geckoProfiler$getSymbols,
    onRunning: typeof browser$geckoProfiler$onRunning
  };
  declare type browser$geckoProfiler$ProfilerFeature =
    | "java"
    | "js"
    | "leaf"
    | "mainthreadio"
    | "memory"
    | "privacy"
    | "responsiveness"
    | "screenshots"
    | "seqstyle"
    | "stackwalk"
    | "tasktracer"
    | "threads"
    | "trackopts"
    | "jstracer";

  declare type browser$geckoProfiler$Supports = "windowLength";

  /**
   * Starts the profiler with the specified settings.
   */
  declare function browser$geckoProfiler$start(settings: {
    /**
     * The maximum size in bytes of the buffer used to store profiling data. A larger value allows capturing a
     * profile that covers a greater amount of time.
     */
    bufferSize: number,

    /**
     * The length of the window of time that's kept in the buffer. Any collected samples are discarded as soon as
     * they are older than the number of seconds specified in this setting. Zero means no duration restriction.
     */
    windowLength?: number,

    /**
     * Interval in milliseconds between samples of profiling data. A smaller value will increase the detail of the
     * profiles captured.
     */
    interval: number,

    /**
     * A list of active features for the profiler.
     */
    features: browser$geckoProfiler$ProfilerFeature[],

    /**
     * A list of thread names for which to capture profiles.
     */
    threads?: string[]
  }): Promise<any>;

  /**
   * Stops the profiler and discards any captured profile data.
   */
  declare function browser$geckoProfiler$stop(): Promise<any>;

  /**
   * Pauses the profiler, keeping any profile data that is already written.
   */
  declare function browser$geckoProfiler$pause(): Promise<any>;

  /**
   * Resumes the profiler with the settings that were initially used to start it.
   */
  declare function browser$geckoProfiler$resume(): Promise<any>;

  /**
   * Gathers the profile data from the current profiling session.
   */
  declare function browser$geckoProfiler$getProfile(): Promise<any>;

  /**
   * Gathers the profile data from the current profiling session. The returned promise resolves to an array buffer
   * that contains a JSON string.
   */
  declare function browser$geckoProfiler$getProfileAsArrayBuffer(): Promise<any>;

  /**
   * Gets the debug symbols for a particular library.
   * @param debugName The name of the library's debug file. For example, 'xul.pdb
   * @param breakpadId The Breakpad ID of the library
   */
  declare function browser$geckoProfiler$getSymbols(
    debugName: string,
    breakpadId: string
  ): Promise<any>;

  /**
   * Fires when the profiler starts/stops running.
   * @param isRunning Whether the profiler is running or not. Pausing the profiler will not affect this value.
   */
  declare var browser$geckoProfiler$onRunning: WebExtEvent<
    (isRunning: boolean) => void
  >;

  declare var npm$namespace$browser$history: {
    search: typeof browser$history$search,
    getVisits: typeof browser$history$getVisits,
    addUrl: typeof browser$history$addUrl,
    deleteUrl: typeof browser$history$deleteUrl,
    deleteRange: typeof browser$history$deleteRange,
    deleteAll: typeof browser$history$deleteAll,
    onVisited: typeof browser$history$onVisited,
    onVisitRemoved: typeof browser$history$onVisitRemoved,
    onTitleChanged: typeof browser$history$onTitleChanged
  };

  /**
   * The transition type for this visit from its referrer.
   */
  declare type browser$history$TransitionType =
    | "link"
    | "typed"
    | "auto_bookmark"
    | "auto_subframe"
    | "manual_subframe"
    | "generated"
    | "auto_toplevel"
    | "form_submit"
    | "reload"
    | "keyword"
    | "keyword_generated";

  /**
   * An object encapsulating one result of a history query.
   */
  declare interface browser$history$HistoryItem {
    /**
     * The unique identifier for the item.
     */
    id: string;

    /**
     * The URL navigated to by a user.
     */
    url?: string;

    /**
     * The title of the page when it was last loaded.
     */
    title?: string;

    /**
     * When this page was last loaded, represented in milliseconds since the epoch.
     */
    lastVisitTime?: number;

    /**
     * The number of times the user has navigated to this page.
     */
    visitCount?: number;

    /**
     * The number of times the user has navigated to this page by typing in the address.
     */
    typedCount?: number;
  }

  /**
   * An object encapsulating one visit to a URL.
   */
  declare interface browser$history$VisitItem {
    /**
     * The unique identifier for the item.
     */
    id: string;

    /**
     * The unique identifier for this visit.
     */
    visitId: string;

    /**
     * When this visit occurred, represented in milliseconds since the epoch.
     */
    visitTime?: number;

    /**
     * The visit ID of the referrer.
     */
    referringVisitId: string;

    /**
     * The transition type for this visit from its referrer.
     */
    transition: browser$history$TransitionType;
  }

  /**
   * Searches the history for the last visit time of each page matching the query.
   */
  declare function browser$history$search(query: {
    /**
     * A free-text query to the history service. Leave empty to retrieve all pages.
     */
    text: string,

    /**
     * Limit results to those visited after this date. If not specified, this defaults to 24 hours in the past.
     */
    startTime?: browser$extensionTypes$Date,

    /**
     * Limit results to those visited before this date.
     */
    endTime?: browser$extensionTypes$Date,

    /**
     * The maximum number of results to retrieve. Defaults to 100.
     */
    maxResults?: number
  }): Promise<browser$history$HistoryItem[]>;

  /**
   * Retrieves information about visits to a URL.
   */
  declare function browser$history$getVisits(details: {
    /**
     * The URL for which to retrieve visit information. It must be in the format as returned from a call to
     * history.search.
     */
    url: string
  }): Promise<browser$history$VisitItem[]>;

  /**
   * Adds a URL to the history with a default visitTime of the current time and a default transition type of "link".
   */
  declare function browser$history$addUrl(details: {
    /**
     * The URL to add. Must be a valid URL that can be added to history.
     */
    url: string,

    /**
     * The title of the page.
     */
    title?: string,

    /**
     * The transition type for this visit from its referrer.
     */
    transition?: browser$history$TransitionType,

    /**
     * The date when this visit occurred.
     */
    visitTime?: browser$extensionTypes$Date
  }): Promise<void>;

  /**
   * Removes all occurrences of the given URL from the history.
   */
  declare function browser$history$deleteUrl(details: {
    /**
     * The URL to remove.
     */
    url: string
  }): Promise<void>;

  /**
   * Removes all items within the specified date range from the history. Pages will not be removed from the history
   * unless all visits fall within the range.
   */
  declare function browser$history$deleteRange(range: {
    /**
     * Items added to history after this date.
     */
    startTime: browser$extensionTypes$Date,

    /**
     * Items added to history before this date.
     */
    endTime: browser$extensionTypes$Date
  }): Promise<void>;

  /**
   * Deletes all items from the history.
   */
  declare function browser$history$deleteAll(): Promise<void>;

  /**
   * Fired when a URL is visited, providing the HistoryItem data for that URL. This event fires before the page has
   * loaded.
   */
  declare var browser$history$onVisited: WebExtEvent<
    (result: browser$history$HistoryItem) => void
  >;

  /**
   * Fired when one or more URLs are removed from the history service. When all visits have been removed the URL is
   * purged from history.
   */
  declare var browser$history$onVisitRemoved: WebExtEvent<
    (removed: {
      /**
       * True if all history was removed. If true, then urls will be empty.
       */
      allHistory: boolean,
      urls: string[]
    }) => void
  >;

  /**
   * Fired when the title of a URL is changed in the browser history.
   */
  declare var browser$history$onTitleChanged: WebExtEvent<
    (changed: {
      /**
       * The URL for which the title has changed
       */
      url: string,

      /**
       * The new title for the URL.
       */
      title: string
    }) => void
  >;

  declare var npm$namespace$browser$contextMenus: {
    create: typeof browser$contextMenus$create,
    update: typeof browser$contextMenus$update,
    remove: typeof browser$contextMenus$remove,
    removeAll: typeof browser$contextMenus$removeAll,
    overrideContext: typeof browser$contextMenus$overrideContext,
    refresh: typeof browser$contextMenus$refresh,
    getTargetElement: typeof browser$contextMenus$getTargetElement,
    ACTION_MENU_TOP_LEVEL_LIMIT: typeof browser$contextMenus$ACTION_MENU_TOP_LEVEL_LIMIT,
    onClicked: typeof browser$contextMenus$onClicked,
    onShown: typeof browser$contextMenus$onShown,
    onHidden: typeof browser$contextMenus$onHidden
  };

  /**
   * The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other
   * contexts except for 'tab' and 'tools_menu'.
   */
  declare type browser$contextMenus$ContextType =
    | "all"
    | "page"
    | "frame"
    | "selection"
    | "link"
    | "editable"
    | "password"
    | "image"
    | "video"
    | "audio"
    | "launcher"
    | "bookmark"
    | "browser_action"
    | "page_action"
    | "tab";

  /**
   * The type of menu item.
   */
  declare type browser$contextMenus$ItemType =
    | "normal"
    | "checkbox"
    | "radio"
    | "separator";

  /**
   * Information sent when a context menu item is clicked.
   */
  declare interface browser$contextMenus$OnClickData {
    /**
     * The ID of the menu item that was clicked.
     */
    menuItemId: number | string;

    /**
     * The parent ID, if any, for the item clicked.
     */
    parentMenuItemId?: number | string;

    /**
     * The type of view where the menu is clicked. May be unset if the menu is not associated with a view.
     */
    viewType?: browser$extension$ViewType;

    /**
     * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
     */
    mediaType?: string;

    /**
     * If the element is a link, the text of that link.
     */
    linkText?: string;

    /**
     * If the element is a link, the URL it points to.
     */
    linkUrl?: string;

    /**
     * Will be present for elements with a 'src' URL.
     */
    srcUrl?: string;

    /**
     * The URL of the page where the menu item was clicked. This property is not set if the click occured in a
     * context where there is no current page, such as in a launcher context menu.
     */
    pageUrl?: string;

    /**
     * The id of the frame of the element where the context menu was clicked.
     */
    frameId?: number;

    /**
     * The URL of the frame of the element where the context menu was clicked, if it was in a frame.
     */
    frameUrl?: string;

    /**
     * The text for the context selection, if any.
     */
    selectionText?: string;

    /**
     * A flag indicating whether the element is editable (text input, textarea, etc.).
     */
    editable: boolean;

    /**
     * A flag indicating the state of a checkbox or radio item before it was clicked.
     */
    wasChecked?: boolean;

    /**
     * A flag indicating the state of a checkbox or radio item after it is clicked.
     */
    checked?: boolean;

    /**
     * The id of the bookmark where the context menu was clicked, if it was on a bookmark.
     */
    bookmarkId: string;

    /**
     * An array of keyboard modifiers that were held while the menu item was clicked.
     */
    modifiers: menus$_OnClickDataModifiers[];

    /**
     * An integer value of button by which menu item was clicked.
     */
    button?: number;

    /**
     * An identifier of the clicked element, if any. Use menus.getTargetElement in the page to find the
     * corresponding element.
     */
    targetElementId?: number;
  }

  declare type browser$contextMenus$_OnClickDataModifiers =
    | "Shift"
    | "Alt"
    | "Command"
    | "Ctrl"
    | "MacCtrl";

  /**
   * ContextType to override, to allow menu items from other extensions in the menu. Currently only 'bookmark' and
   * 'tab' are supported. showDefaults cannot be used with this option.
   */
  declare type browser$contextMenus$_OverrideContextContext =
    | "bookmark"
    | "tab";

  /**
   * The maximum number of top level extension items that can be added to an extension action context menu. Any items
   * beyond this limit will be ignored.
   */
  declare var browser$contextMenus$ACTION_MENU_TOP_LEVEL_LIMIT: number;

  /**
   * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the
   * creation callback fires (the details will be in `runtime.lastError`).
   * @param callback Called when the item has been created in the browser. If there were any problems creating the
   * item, details will be available in `runtime.lastError`.
   * @returns The ID of the newly created item.
   */
  declare function browser$contextMenus$create(
    createProperties: {
      /**
       * The type of menu item. Defaults to 'normal' if not specified.
       */
      type?: browser$contextMenus$ItemType,

      /**
       * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this
       * extension.
       */
      id?: string,
      icons?: {
        [key: number]: string
      },

      /**
       * The text to be displayed in the item; this is _required_ unless `type` is 'separator'. When the context is
       * 'selection', you can use `%s` within the string to show the selected text. For example, if this parameter's
       * value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the
       * selection is "Translate 'cool' to Pig Latin".
       */
      title?: string,

      /**
       * The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio
       * item can be selected at a time in a given group of radio items.
       */
      checked?: boolean,

      /**
       * List of contexts this menu item will appear in. Defaults to ['page'] if not specified.
       */
      contexts?: browser$contextMenus$ContextType[],

      /**
       * List of view types where the menu item will be shown. Defaults to any view, including those without a
       * viewType.
       */
      viewTypes?: browser$extension$ViewType[],

      /**
       * Whether the item is visible in the menu.
       */
      visible?: boolean,

      /**
       * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead,
       * they should register a listener for `contextMenus.onClicked`.
       * @param info Information about the item clicked and the context where the click happened.
       * @param tab The details of the tab where the click took place. Note: this parameter only present for
       * extensions.
       */
      onclick?: (
        info: browser$contextMenus$OnClickData,
        tab: browser$tabs$Tab
      ) => void,

      /**
       * The ID of a parent menu item; this makes the item a child of a previously added item.
       */
      parentId?: number | string,

      /**
       * Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This
       * applies to frames as well.) For details on the format of a pattern, see Match Patterns.
       */
      documentUrlPatterns?: string[],

      /**
       * Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and
       * the href of anchor tags.
       */
      targetUrlPatterns?: string[],

      /**
       * Whether this context menu item is enabled or disabled. Defaults to true.
       */
      enabled?: boolean,

      /**
       * Specifies a command to issue for the context click. Currently supports internal commands
       * _execute_page_action, _execute_browser_action and _execute_sidebar_action.
       */
      command?: string
    },
    callback?: () => void
  ): number | string;

  /**
   * Updates a previously created context menu item.
   * @param id The ID of the item to update.
   * @param updateProperties The properties to update. Accepts the same values as the create function.
   */
  declare function browser$contextMenus$update(
    id: number | string,
    updateProperties: {
      type?: browser$contextMenus$ItemType,
      icons?: {
        [key: number]: string
      },
      title?: string,
      checked?: boolean,
      contexts?: browser$contextMenus$ContextType[],
      viewTypes?: browser$extension$ViewType[],

      /**
       * Whether the item is visible in the menu.
       */
      visible?: boolean,

      /**
       * @param tab The details of the tab where the click took place. Note: this parameter only present for
       * extensions.
       */
      onclick?: (
        info: browser$contextMenus$OnClickData,
        tab: browser$tabs$Tab
      ) => void,

      /**
       * Note: You cannot change an item to be a child of one of its own descendants.
       */
      parentId?: number | string,
      documentUrlPatterns?: string[],
      targetUrlPatterns?: string[],
      enabled?: boolean
    }
  ): Promise<void>;

  /**
   * Removes a context menu item.
   * @param menuItemId The ID of the context menu item to remove.
   */
  declare function browser$contextMenus$remove(
    menuItemId: number | string
  ): Promise<void>;

  /**
   * Removes all context menu items added by this extension.
   */
  declare function browser$contextMenus$removeAll(): Promise<void>;

  /**
   * Show the matching menu items from this extension instead of the default menu. This should be called during a
   * 'contextmenu' DOM event handler, and only applies to the menu that opens after this event.
   */
  declare function browser$contextMenus$overrideContext(contextOptions: {
    /**
     * Whether to also include default menu items in the menu.
     */
    showDefaults?: boolean,

    /**
     * ContextType to override, to allow menu items from other extensions in the menu. Currently only 'bookmark'
     * and 'tab' are supported. showDefaults cannot be used with this option.
     */
    context?: browser$contextMenus$_OverrideContextContext,

    /**
     * Required when context is 'bookmark'. Requires 'bookmark' permission.
     */
    bookmarkId?: string,

    /**
     * Required when context is 'tab'. Requires 'tabs' permission.
     */
    tabId?: number
  }): void;

  /**
   * Updates the extension items in the shown menu, including changes that have been made since the menu was shown.
   * Has no effect if the menu is hidden. Rebuilding a shown menu is an expensive operation, only invoke this method
   * when necessary.
   */
  declare function browser$contextMenus$refresh(): Promise<any>;

  /**
   * Retrieve the element that was associated with a recent contextmenu event.
   * @param targetElementId The identifier of the clicked element, available as info.targetElementId in the
   * menus.onShown, onClicked or onclick event.
   */
  declare function browser$contextMenus$getTargetElement(
    targetElementId: number
  ): { [key: string]: any } | void;

  /**
   * Fired when a context menu item is clicked.
   * @param info Information about the item clicked and the context where the click happened.
   * @param tab The details of the tab where the click took place. If the click did not take place in a tab, this
   * parameter will be missing.
   */
  declare var browser$contextMenus$onClicked: WebExtEvent<
    (info: browser$contextMenus$OnClickData, tab?: browser$tabs$Tab) => void
  >;

  /**
   * Fired when a menu is shown. The extension can add, modify or remove menu items and call menus.refresh() to
   * update the menu.
   * @param info Information about the context of the menu action and the created menu items. For more information
   * about each property, see OnClickData. The following properties are only set if the extension has host
   * permissions for the given context: linkUrl, linkText, srcUrl, pageUrl, frameUrl, selectionText.
   * @param tab The details of the tab where the menu was opened.
   */
  declare var browser$contextMenus$onShown: WebExtEvent<
    (
      info: {
        /**
         * A list of IDs of the menu items that were shown.
         */
        menuIds: number | string[],

        /**
         * A list of all contexts that apply to the menu.
         */
        contexts: browser$contextMenus$ContextType[],
        viewType?: browser$extension$ViewType,
        editable: boolean,
        mediaType?: string,
        linkUrl?: string,
        linkText?: string,
        srcUrl?: string,
        pageUrl?: string,
        frameUrl?: string,
        selectionText?: string,
        targetElementId?: number
      },
      tab: browser$tabs$Tab
    ) => void
  >;

  /**
   * Fired when a menu is hidden. This event is only fired if onShown has fired before.
   */
  declare var browser$contextMenus$onHidden: WebExtEvent<() => void>;

  declare var npm$namespace$browser$menus: {
    create: typeof browser$menus$create,
    update: typeof browser$menus$update,
    remove: typeof browser$menus$remove,
    removeAll: typeof browser$menus$removeAll,
    overrideContext: typeof browser$menus$overrideContext,
    refresh: typeof browser$menus$refresh,
    getTargetElement: typeof browser$menus$getTargetElement,
    ACTION_MENU_TOP_LEVEL_LIMIT: typeof browser$menus$ACTION_MENU_TOP_LEVEL_LIMIT,
    onClicked: typeof browser$menus$onClicked,
    onShown: typeof browser$menus$onShown,
    onHidden: typeof browser$menus$onHidden
  };

  /**
   * The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other
   * contexts except for 'tab' and 'tools_menu'.
   */
  declare type browser$menus$ContextType =
    | "all"
    | "page"
    | "frame"
    | "selection"
    | "link"
    | "editable"
    | "password"
    | "image"
    | "video"
    | "audio"
    | "launcher"
    | "bookmark"
    | "browser_action"
    | "page_action"
    | "tab"
    | "tools_menu";

  /**
   * The type of menu item.
   */
  declare type browser$menus$ItemType =
    | "normal"
    | "checkbox"
    | "radio"
    | "separator";

  /**
   * Information sent when a context menu item is clicked.
   */
  declare interface browser$menus$OnClickData {
    /**
     * The ID of the menu item that was clicked.
     */
    menuItemId: number | string;

    /**
     * The parent ID, if any, for the item clicked.
     */
    parentMenuItemId?: number | string;

    /**
     * The type of view where the menu is clicked. May be unset if the menu is not associated with a view.
     */
    viewType?: browser$extension$ViewType;

    /**
     * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
     */
    mediaType?: string;

    /**
     * If the element is a link, the text of that link.
     */
    linkText?: string;

    /**
     * If the element is a link, the URL it points to.
     */
    linkUrl?: string;

    /**
     * Will be present for elements with a 'src' URL.
     */
    srcUrl?: string;

    /**
     * The URL of the page where the menu item was clicked. This property is not set if the click occured in a
     * context where there is no current page, such as in a launcher context menu.
     */
    pageUrl?: string;

    /**
     * The id of the frame of the element where the context menu was clicked.
     */
    frameId?: number;

    /**
     * The URL of the frame of the element where the context menu was clicked, if it was in a frame.
     */
    frameUrl?: string;

    /**
     * The text for the context selection, if any.
     */
    selectionText?: string;

    /**
     * A flag indicating whether the element is editable (text input, textarea, etc.).
     */
    editable: boolean;

    /**
     * A flag indicating the state of a checkbox or radio item before it was clicked.
     */
    wasChecked?: boolean;

    /**
     * A flag indicating the state of a checkbox or radio item after it is clicked.
     */
    checked?: boolean;

    /**
     * The id of the bookmark where the context menu was clicked, if it was on a bookmark.
     */
    bookmarkId: string;

    /**
     * An array of keyboard modifiers that were held while the menu item was clicked.
     */
    modifiers: browser$contextMenus$_OnClickDataModifiers[];

    /**
     * An integer value of button by which menu item was clicked.
     */
    button?: number;

    /**
     * An identifier of the clicked element, if any. Use menus.getTargetElement in the page to find the
     * corresponding element.
     */
    targetElementId?: number;
  }

  declare type browser$menus$_OnClickDataModifiers =
    | "Shift"
    | "Alt"
    | "Command"
    | "Ctrl"
    | "MacCtrl";

  /**
   * ContextType to override, to allow menu items from other extensions in the menu. Currently only 'bookmark' and
   * 'tab' are supported. showDefaults cannot be used with this option.
   */
  declare type browser$menus$_OverrideContextContext = "bookmark" | "tab";

  /**
   * The maximum number of top level extension items that can be added to an extension action context menu. Any items
   * beyond this limit will be ignored.
   */
  declare var browser$menus$ACTION_MENU_TOP_LEVEL_LIMIT: number;

  /**
   * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the
   * creation callback fires (the details will be in `runtime.lastError`).
   * @param callback Called when the item has been created in the browser. If there were any problems creating the
   * item, details will be available in `runtime.lastError`.
   * @returns The ID of the newly created item.
   */
  declare function browser$menus$create(
    createProperties: {
      /**
       * The type of menu item. Defaults to 'normal' if not specified.
       */
      type?: browser$menus$ItemType,

      /**
       * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this
       * extension.
       */
      id?: string,
      icons?: {
        [key: number]: string
      },

      /**
       * The text to be displayed in the item; this is _required_ unless `type` is 'separator'. When the context is
       * 'selection', you can use `%s` within the string to show the selected text. For example, if this parameter's
       * value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the
       * selection is "Translate 'cool' to Pig Latin".
       */
      title?: string,

      /**
       * The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio
       * item can be selected at a time in a given group of radio items.
       */
      checked?: boolean,

      /**
       * List of contexts this menu item will appear in. Defaults to ['page'] if not specified.
       */
      contexts?: browser$menus$ContextType[],

      /**
       * List of view types where the menu item will be shown. Defaults to any view, including those without a
       * viewType.
       */
      viewTypes?: browser$extension$ViewType[],

      /**
       * Whether the item is visible in the menu.
       */
      visible?: boolean,

      /**
       * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead,
       * they should register a listener for `contextMenus.onClicked`.
       * @param info Information about the item clicked and the context where the click happened.
       * @param tab The details of the tab where the click took place. Note: this parameter only present for
       * extensions.
       */
      onclick?: (
        info: browser$menus$OnClickData,
        tab: browser$tabs$Tab
      ) => void,

      /**
       * The ID of a parent menu item; this makes the item a child of a previously added item.
       */
      parentId?: number | string,

      /**
       * Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This
       * applies to frames as well.) For details on the format of a pattern, see Match Patterns.
       */
      documentUrlPatterns?: string[],

      /**
       * Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and
       * the href of anchor tags.
       */
      targetUrlPatterns?: string[],

      /**
       * Whether this context menu item is enabled or disabled. Defaults to true.
       */
      enabled?: boolean,

      /**
       * Specifies a command to issue for the context click. Currently supports internal commands
       * _execute_page_action, _execute_browser_action and _execute_sidebar_action.
       */
      command?: string
    },
    callback?: () => void
  ): number | string;

  /**
   * Updates a previously created context menu item.
   * @param id The ID of the item to update.
   * @param updateProperties The properties to update. Accepts the same values as the create function.
   */
  declare function browser$menus$update(
    id: number | string,
    updateProperties: {
      type?: browser$menus$ItemType,
      icons?: {
        [key: number]: string
      },
      title?: string,
      checked?: boolean,
      contexts?: browser$menus$ContextType[],
      viewTypes?: browser$extension$ViewType[],

      /**
       * Whether the item is visible in the menu.
       */
      visible?: boolean,

      /**
       * @param tab The details of the tab where the click took place. Note: this parameter only present for
       * extensions.
       */
      onclick?: (
        info: browser$menus$OnClickData,
        tab: browser$tabs$Tab
      ) => void,

      /**
       * Note: You cannot change an item to be a child of one of its own descendants.
       */
      parentId?: number | string,
      documentUrlPatterns?: string[],
      targetUrlPatterns?: string[],
      enabled?: boolean
    }
  ): Promise<void>;

  /**
   * Removes a context menu item.
   * @param menuItemId The ID of the context menu item to remove.
   */
  declare function browser$menus$remove(
    menuItemId: number | string
  ): Promise<void>;

  /**
   * Removes all context menu items added by this extension.
   */
  declare function browser$menus$removeAll(): Promise<void>;

  /**
   * Show the matching menu items from this extension instead of the default menu. This should be called during a
   * 'contextmenu' DOM event handler, and only applies to the menu that opens after this event.
   */
  declare function browser$menus$overrideContext(contextOptions: {
    /**
     * Whether to also include default menu items in the menu.
     */
    showDefaults?: boolean,

    /**
     * ContextType to override, to allow menu items from other extensions in the menu. Currently only 'bookmark'
     * and 'tab' are supported. showDefaults cannot be used with this option.
     */
    context?: browser$menus$_OverrideContextContext,

    /**
     * Required when context is 'bookmark'. Requires 'bookmark' permission.
     */
    bookmarkId?: string,

    /**
     * Required when context is 'tab'. Requires 'tabs' permission.
     */
    tabId?: number
  }): void;

  /**
   * Updates the extension items in the shown menu, including changes that have been made since the menu was shown.
   * Has no effect if the menu is hidden. Rebuilding a shown menu is an expensive operation, only invoke this method
   * when necessary.
   */
  declare function browser$menus$refresh(): Promise<any>;

  /**
   * Retrieve the element that was associated with a recent contextmenu event.
   * @param targetElementId The identifier of the clicked element, available as info.targetElementId in the
   * menus.onShown, onClicked or onclick event.
   */
  declare function browser$menus$getTargetElement(
    targetElementId: number
  ): { [key: string]: any } | void;

  /**
   * Fired when a context menu item is clicked.
   * @param info Information about the item clicked and the context where the click happened.
   * @param tab The details of the tab where the click took place. If the click did not take place in a tab, this
   * parameter will be missing.
   */
  declare var browser$menus$onClicked: WebExtEvent<
    (info: browser$menus$OnClickData, tab?: browser$tabs$Tab) => void
  >;

  /**
   * Fired when a menu is shown. The extension can add, modify or remove menu items and call menus.refresh() to
   * update the menu.
   * @param info Information about the context of the menu action and the created menu items. For more information
   * about each property, see OnClickData. The following properties are only set if the extension has host
   * permissions for the given context: linkUrl, linkText, srcUrl, pageUrl, frameUrl, selectionText.
   * @param tab The details of the tab where the menu was opened.
   */
  declare var browser$menus$onShown: WebExtEvent<
    (
      info: {
        /**
         * A list of IDs of the menu items that were shown.
         */
        menuIds: number | string[],

        /**
         * A list of all contexts that apply to the menu.
         */
        contexts: browser$menus$ContextType[],
        viewType?: browser$extension$ViewType,
        editable: boolean,
        mediaType?: string,
        linkUrl?: string,
        linkText?: string,
        srcUrl?: string,
        pageUrl?: string,
        frameUrl?: string,
        selectionText?: string,
        targetElementId?: number
      },
      tab: browser$tabs$Tab
    ) => void
  >;

  /**
   * Fired when a menu is hidden. This event is only fired if onShown has fired before.
   */
  declare var browser$menus$onHidden: WebExtEvent<() => void>;

  declare var npm$namespace$browser$omnibox: {
    setDefaultSuggestion: typeof browser$omnibox$setDefaultSuggestion,
    onInputStarted: typeof browser$omnibox$onInputStarted,
    onInputChanged: typeof browser$omnibox$onInputChanged,
    onInputEntered: typeof browser$omnibox$onInputEntered,
    onInputCancelled: typeof browser$omnibox$onInputCancelled
  };

  /**
   * The style type.
   */
  declare type browser$omnibox$DescriptionStyleType = "url" | "match" | "dim";

  /**
   * The window disposition for the omnibox query. This is the recommended context to display results. For example,
   * if the omnibox command is to navigate to a certain URL, a disposition of 'newForegroundTab' means the navigation
   * should take place in a new selected tab.
   */
  declare type browser$omnibox$OnInputEnteredDisposition =
    | "currentTab"
    | "newForegroundTab"
    | "newBackgroundTab";

  /**
   * A suggest result.
   */
  declare interface browser$omnibox$SuggestResult {
    /**
     * The text that is put into the URL bar, and that is sent to the extension when the user chooses this entry.
     */
    content: string;

    /**
     * The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags
     * are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim'
     * (for dim helper text). The styles can be nested, eg. <dim><match>dimmed match</match></dim>. You must escape
     * the five predefined entities to display them as text: stackoverflow.com/a/1091953/89484
     */
    description: string;

    /**
     * An array of style ranges for the description, as provided by the extension.
     * @deprecated Unsupported on Firefox at this time.
     */
    descriptionStyles?: Array<{
      offset: number,

      /**
       * The style type
       */
      type: browser$omnibox$DescriptionStyleType,
      length?: number
    }>;

    /**
     * An array of style ranges for the description, as provided by ToValue().
     * @deprecated Unsupported on Firefox at this time.
     */
    descriptionStylesRaw?: Array<{
      offset: number,
      type: number
    }>;
  }

  /**
   * A suggest result.
   */
  declare interface browser$omnibox$DefaultSuggestResult {
    /**
     * The text that is displayed in the URL dropdown.
     */
    description: string;

    /**
     * An array of style ranges for the description, as provided by the extension.
     * @deprecated Unsupported on Firefox at this time.
     */
    descriptionStyles?: Array<{
      offset: number,

      /**
       * The style type
       */
      type: browser$omnibox$DescriptionStyleType,
      length?: number
    }>;

    /**
     * An array of style ranges for the description, as provided by ToValue().
     * @deprecated Unsupported on Firefox at this time.
     */
    descriptionStylesRaw?: Array<{
      offset: number,
      type: number
    }>;
  }

  /**
   * Sets the description and styling for the default suggestion. The default suggestion is the text that is
   * displayed in the first suggestion row underneath the URL bar.
   * @param suggestion A partial SuggestResult object, without the 'content' parameter.
   */
  declare function browser$omnibox$setDefaultSuggestion(
    suggestion: browser$omnibox$DefaultSuggestResult
  ): void;

  /**
   * User has started a keyword input session by typing the extension's keyword. This is guaranteed to be sent
   * exactly once per input session, and before any onInputChanged events.
   */
  declare var browser$omnibox$onInputStarted: WebExtEvent<() => void>;

  /**
   * User has changed what is typed into the omnibox.
   * @param suggest A callback passed to the onInputChanged event used for sending suggestions back to the browser.
   */
  declare var browser$omnibox$onInputChanged: WebExtEvent<
    (
      text: string,
      suggest: (suggestResults: browser$omnibox$SuggestResult[]) => void
    ) => void
  >;

  /**
   * User has accepted what is typed into the omnibox.
   */
  declare var browser$omnibox$onInputEntered: WebExtEvent<
    (
      text: string,
      disposition: browser$omnibox$OnInputEnteredDisposition
    ) => void
  >;

  /**
   * User has ended the keyword input session without accepting the input.
   */
  declare var browser$omnibox$onInputCancelled: WebExtEvent<() => void>;

  declare var npm$namespace$browser$pageAction: {
    show: typeof browser$pageAction$show,
    hide: typeof browser$pageAction$hide,
    isShown: typeof browser$pageAction$isShown,
    setTitle: typeof browser$pageAction$setTitle,
    getTitle: typeof browser$pageAction$getTitle,
    setIcon: typeof browser$pageAction$setIcon,
    setPopup: typeof browser$pageAction$setPopup,
    getPopup: typeof browser$pageAction$getPopup,
    openPopup: typeof browser$pageAction$openPopup,
    onClicked: typeof browser$pageAction$onClicked
  };

  /**
   * Pixel data for an image. Must be an ImageData object (for example, from a `canvas` element).
   */
  declare type browser$pageAction$ImageDataType = { [key: string]: any };

  /**
   * Shows the page action. The page action is shown whenever the tab is selected.
   * @param tabId The id of the tab for which you want to modify the page action.
   */
  declare function browser$pageAction$show(tabId: number): Promise<void>;

  /**
   * Hides the page action.
   * @param tabId The id of the tab for which you want to modify the page action.
   */
  declare function browser$pageAction$hide(tabId: number): Promise<void>;

  /**
   * Checks whether the page action is shown.
   */
  declare function browser$pageAction$isShown(details: {
    /**
     * Specify the tab to get the shownness from.
     */
    tabId: number
  }): Promise<boolean>;

  /**
   * Sets the title of the page action. This is displayed in a tooltip over the page action.
   */
  declare function browser$pageAction$setTitle(details: {
    /**
     * The id of the tab for which you want to modify the page action.
     */
    tabId: number,

    /**
     * The tooltip string.
     */
    title: string | null
  }): void;

  /**
   * Gets the title of the page action.
   */
  declare function browser$pageAction$getTitle(details: {
    /**
     * Specify the tab to get the title from.
     */
    tabId: number
  }): Promise<string>;

  /**
   * Sets the icon for the page action. The icon can be specified either as the path to an image file or as the pixel
   * data from a canvas element, or as dictionary of either one of those. Either the **path** or the **imageData**
   * property must be specified.
   */
  declare function browser$pageAction$setIcon(details: {
    /**
     * The id of the tab for which you want to modify the page action.
     */
    tabId: number,

    /**
     * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is
     * specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the
     * number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19
     * will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified.
     * Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
     */
    imageData?:
      | browser$pageAction$ImageDataType
      | {
          [key: number]: browser$pageAction$ImageDataType
        },

    /**
     * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If
     * the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel
     * density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with
     * size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must
     * be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
     */
    path?:
      | string
      | {
          [key: number]: string
        }
  }): Promise<void>;

  /**
   * Sets the html document to be opened as a popup when the user clicks on the page action's icon.
   */
  declare function browser$pageAction$setPopup(details: {
    /**
     * The id of the tab for which you want to modify the page action.
     */
    tabId: number,

    /**
     * The html file to show in a popup. If set to the empty string (''), no popup is shown.
     */
    popup: string | null
  }): void;

  /**
   * Gets the html document set as the popup for this page action.
   */
  declare function browser$pageAction$getPopup(details: {
    /**
     * Specify the tab to get the popup from.
     */
    tabId: number
  }): Promise<string>;

  /**
   * Opens the extension page action in the active window.
   */
  declare function browser$pageAction$openPopup(): Promise<void>;

  /**
   * Fired when a page action icon is clicked. This event will not fire if the page action has a popup.
   */
  declare var browser$pageAction$onClicked: WebExtEvent<
    (tab: browser$tabs$Tab) => void
  >;

  declare var npm$namespace$browser$pkcs11: {
    isModuleInstalled: typeof browser$pkcs11$isModuleInstalled,
    installModule: typeof browser$pkcs11$installModule,
    uninstallModule: typeof browser$pkcs11$uninstallModule,
    getModuleSlots: typeof browser$pkcs11$getModuleSlots
  };

  /**
   * checks whether a PKCS#11 module, given by name, is installed
   */
  declare function browser$pkcs11$isModuleInstalled(
    name: string
  ): Promise<boolean>;

  /**
   * Install a PKCS#11 module with a given name
   */
  declare function browser$pkcs11$installModule(
    name: string,
    flags?: number
  ): Promise<void>;

  /**
   * Remove an installed PKCS#11 module from firefox
   */
  declare function browser$pkcs11$uninstallModule(name: string): Promise<void>;

  /**
   * Enumerate a module's slots, each with their name and whether a token is present
   */
  declare function browser$pkcs11$getModuleSlots(
    name: string
  ): Promise<{
    name: string,
    token?: {
      name: string,
      manufacturer: string,
      HWVersion: string,
      FWVersion: string,
      serial: string,
      isLoggedIn: string
    }
  }>;

  declare var npm$namespace$browser$search: {
    get: typeof browser$search$get,
    search: typeof browser$search$search
  };

  /**
   * An object encapsulating a search engine
   */
  declare interface browser$search$SearchEngine {
    name: string;
    isDefault: boolean;
    alias?: string;
    favIconUrl?: string;
  }

  /**
   * Gets a list of search engines.
   */
  declare function browser$search$get(): Promise<browser$search$SearchEngine[]>;

  /**
   * Perform a search.
   */
  declare function browser$search$search(searchProperties: {
    /**
     * Terms to search for.
     */
    query: string,

    /**
     * Search engine to use. Uses the default if not specified.
     */
    engine?: string,

    /**
     * The ID of the tab for the search results. If not specified, a new tab is created.
     */
    tabId?: number
  }): Promise<any>;

  declare var npm$namespace$browser$sessions: {
    forgetClosedTab: typeof browser$sessions$forgetClosedTab,
    forgetClosedWindow: typeof browser$sessions$forgetClosedWindow,
    getRecentlyClosed: typeof browser$sessions$getRecentlyClosed,
    getDevices: typeof browser$sessions$getDevices,
    restore: typeof browser$sessions$restore,
    setTabValue: typeof browser$sessions$setTabValue,
    getTabValue: typeof browser$sessions$getTabValue,
    removeTabValue: typeof browser$sessions$removeTabValue,
    setWindowValue: typeof browser$sessions$setWindowValue,
    getWindowValue: typeof browser$sessions$getWindowValue,
    removeWindowValue: typeof browser$sessions$removeWindowValue,
    MAX_SESSION_RESULTS: typeof browser$sessions$MAX_SESSION_RESULTS,
    onChanged: typeof browser$sessions$onChanged
  };
  declare interface browser$sessions$Filter {
    /**
     * The maximum number of entries to be fetched in the requested list. Omit this parameter to fetch the maximum
     * number of entries (`sessions.MAX_SESSION_RESULTS`).
     */
    maxResults?: number;
  }

  declare interface browser$sessions$Session {
    /**
     * The time when the window or tab was closed or modified, represented in milliseconds since the epoch.
     */
    lastModified: number;

    /**
     * The `tabs.Tab`, if this entry describes a tab. Either this or `sessions.Session.window` will be set.
     */
    tab?: browser$tabs$Tab;

    /**
     * The `windows.Window`, if this entry describes a window. Either this or `sessions.Session.tab` will be set.
     */
    window?: browser$windows$Window;
  }

  declare interface browser$sessions$Device {
    info: string;

    /**
     * The name of the foreign device.
     */
    deviceName: string;

    /**
     * A list of open window sessions for the foreign device, sorted from most recently to least recently modified
     * session.
     */
    sessions: browser$sessions$Session[];
  }

  /**
   * The maximum number of `sessions.Session` that will be included in a requested list.
   */
  declare var browser$sessions$MAX_SESSION_RESULTS: number;

  /**
   * Forget a recently closed tab.
   * @param windowId The windowId of the window to which the recently closed tab to be forgotten belongs.
   * @param sessionId The sessionId (closedId) of the recently closed tab to be forgotten.
   */
  declare function browser$sessions$forgetClosedTab(
    windowId: number,
    sessionId: string
  ): Promise<void>;

  /**
   * Forget a recently closed window.
   * @param sessionId The sessionId (closedId) of the recently closed window to be forgotten.
   */
  declare function browser$sessions$forgetClosedWindow(
    sessionId: string
  ): Promise<void>;

  /**
   * Gets the list of recently closed tabs and/or windows.
   */
  declare function browser$sessions$getRecentlyClosed(
    callback: (sessions: browser$sessions$Session[]) => void
  ): Promise<browser$sessions$Session[]>;

  /**
   * Gets the list of recently closed tabs and/or windows.
   */
  declare function browser$sessions$getRecentlyClosed(
    filter: browser$sessions$Filter,
    callback: (sessions: browser$sessions$Session[]) => void
  ): Promise<browser$sessions$Session[]>;

  /**
   * Retrieves all devices with synced sessions.
   * @deprecated Unsupported on Firefox at this time.
   */
  declare function browser$sessions$getDevices(
    filter?: browser$sessions$Filter
  ): Promise<browser$sessions$Device[]>;

  /**
   * Reopens a `windows.Window` or `tabs.Tab`, with an optional callback to run when the entry has been restored.
   * @param sessionId The `windows.Window.sessionId`, or `tabs.Tab.sessionId` to restore. If this parameter is not
   * specified, the most recently closed session is restored.
   */
  declare function browser$sessions$restore(
    sessionId?: string,
    callback?: (restoredSession: browser$sessions$Session) => void
  ): Promise<browser$sessions$Session>;

  /**
   * Set a key/value pair on a given tab.
   * @param tabId The id of the tab that the key/value pair is being set on.
   * @param key The key which corresponds to the value being set.
   * @param value The value being set.
   */
  declare function browser$sessions$setTabValue(
    tabId: number,
    key: string,
    value: any
  ): Promise<void>;

  /**
   * Retrieve a value that was set for a given key on a given tab.
   * @param tabId The id of the tab whose value is being retrieved from.
   * @param key The key which corresponds to the value.
   */
  declare function browser$sessions$getTabValue(
    tabId: number,
    key: string
  ): Promise<string | { [key: string]: any } | void>;

  /**
   * Remove a key/value pair that was set on a given tab.
   * @param tabId The id of the tab whose key/value pair is being removed.
   * @param key The key which corresponds to the value.
   */
  declare function browser$sessions$removeTabValue(
    tabId: number,
    key: string
  ): Promise<void>;

  /**
   * Set a key/value pair on a given window.
   * @param windowId The id of the window that the key/value pair is being set on.
   * @param key The key which corresponds to the value being set.
   * @param value The value being set.
   */
  declare function browser$sessions$setWindowValue(
    windowId: number,
    key: string,
    value: any
  ): Promise<void>;

  /**
   * Retrieve a value that was set for a given key on a given window.
   * @param windowId The id of the window whose value is being retrieved from.
   * @param key The key which corresponds to the value.
   */
  declare function browser$sessions$getWindowValue(
    windowId: number,
    key: string
  ): Promise<string | { [key: string]: any } | void>;

  /**
   * Remove a key/value pair that was set on a given window.
   * @param windowId The id of the window whose key/value pair is being removed.
   * @param key The key which corresponds to the value.
   */
  declare function browser$sessions$removeWindowValue(
    windowId: number,
    key: string
  ): Promise<void>;

  /**
   * Fired when recently closed tabs and/or windows are changed. This event does not monitor synced sessions changes.
   */
  declare var browser$sessions$onChanged: WebExtEvent<() => void>;

  declare var npm$namespace$browser$sidebarAction: {
    setTitle: typeof browser$sidebarAction$setTitle,
    getTitle: typeof browser$sidebarAction$getTitle,
    setIcon: typeof browser$sidebarAction$setIcon,
    setPanel: typeof browser$sidebarAction$setPanel,
    getPanel: typeof browser$sidebarAction$getPanel,
    open: typeof browser$sidebarAction$open,
    close: typeof browser$sidebarAction$close,
    isOpen: typeof browser$sidebarAction$isOpen
  };

  /**
   * Pixel data for an image. Must be an ImageData object (for example, from a `canvas` element).
   */
  declare type browser$sidebarAction$ImageDataType = { [key: string]: any };

  /**
   * Sets the title of the sidebar action. This shows up in the tooltip.
   */
  declare function browser$sidebarAction$setTitle(details: {
    /**
     * The string the sidebar action should display when moused over.
     */
    title: string | null,

    /**
     * Sets the sidebar title for the tab specified by tabId. Automatically resets when the tab is closed.
     */
    tabId?: number,

    /**
     * Sets the sidebar title for the window specified by windowId.
     */
    windowId?: number
  }): Promise<void>;

  /**
   * Gets the title of the sidebar action.
   */
  declare function browser$sidebarAction$getTitle(details: {
    /**
     * Specify the tab to get the title from. If no tab nor window is specified, the global title is returned.
     */
    tabId?: number,

    /**
     * Specify the window to get the title from. If no tab nor window is specified, the global title is returned.
     */
    windowId?: number
  }): Promise<string>;

  /**
   * Sets the icon for the sidebar action. The icon can be specified either as the path to an image file or as the
   * pixel data from a canvas element, or as dictionary of either one of those. Either the **path** or the
   * **imageData** property must be specified.
   */
  declare function browser$sidebarAction$setIcon(details: {
    /**
     * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is
     * specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the
     * number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19
     * will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified.
     * Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
     */
    imageData?:
      | browser$sidebarAction$ImageDataType
      | {
          [key: number]: browser$sidebarAction$ImageDataType
        },

    /**
     * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If
     * the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel
     * density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with
     * size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must
     * be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
     */
    path?: string,

    /**
     * Sets the sidebar icon for the tab specified by tabId. Automatically resets when the tab is closed.
     */
    tabId?: number,

    /**
     * Sets the sidebar icon for the window specified by windowId.
     */
    windowId?: number
  }): Promise<void>;

  /**
   * Sets the url to the html document to be opened in the sidebar when the user clicks on the sidebar action's icon.
   */
  declare function browser$sidebarAction$setPanel(details: {
    /**
     * Sets the sidebar url for the tab specified by tabId. Automatically resets when the tab is closed.
     */
    tabId?: number,

    /**
     * Sets the sidebar url for the window specified by windowId.
     */
    windowId?: number,

    /**
     * The url to the html file to show in a sidebar. If set to the empty string (''), no sidebar is shown.
     */
    panel: string | null
  }): Promise<void>;

  /**
   * Gets the url to the html document set as the panel for this sidebar action.
   */
  declare function browser$sidebarAction$getPanel(details: {
    /**
     * Specify the tab to get the panel from. If no tab nor window is specified, the global panel is returned.
     */
    tabId?: number,

    /**
     * Specify the window to get the panel from. If no tab nor window is specified, the global panel is returned.
     */
    windowId?: number
  }): Promise<string>;

  /**
   * Opens the extension sidebar in the active window.
   */
  declare function browser$sidebarAction$open(): Promise<void>;

  /**
   * Closes the extension sidebar in the active window if the sidebar belongs to the extension.
   */
  declare function browser$sidebarAction$close(): Promise<void>;

  /**
   * Checks whether the sidebar action is open.
   */
  declare function browser$sidebarAction$isOpen(details: {
    /**
     * Specify the window to get the openness from.
     */
    windowId?: number
  }): Promise<boolean>;

  declare var npm$namespace$browser$tabs: {
    get: typeof browser$tabs$get,
    getCurrent: typeof browser$tabs$getCurrent,
    connect: typeof browser$tabs$connect,
    sendRequest: typeof browser$tabs$sendRequest,
    sendMessage: typeof browser$tabs$sendMessage,
    getSelected: typeof browser$tabs$getSelected,
    getAllInWindow: typeof browser$tabs$getAllInWindow,
    create: typeof browser$tabs$create,
    duplicate: typeof browser$tabs$duplicate,
    query: typeof browser$tabs$query,
    highlight: typeof browser$tabs$highlight,
    update: typeof browser$tabs$update,
    move: typeof browser$tabs$move,
    reload: typeof browser$tabs$reload,
    remove: typeof browser$tabs$remove,
    discard: typeof browser$tabs$discard,
    detectLanguage: typeof browser$tabs$detectLanguage,
    toggleReaderMode: typeof browser$tabs$toggleReaderMode,
    captureTab: typeof browser$tabs$captureTab,
    captureVisibleTab: typeof browser$tabs$captureVisibleTab,
    executeScript: typeof browser$tabs$executeScript,
    insertCSS: typeof browser$tabs$insertCSS,
    removeCSS: typeof browser$tabs$removeCSS,
    setZoom: typeof browser$tabs$setZoom,
    getZoom: typeof browser$tabs$getZoom,
    setZoomSettings: typeof browser$tabs$setZoomSettings,
    getZoomSettings: typeof browser$tabs$getZoomSettings,
    print: typeof browser$tabs$print,
    printPreview: typeof browser$tabs$printPreview,
    saveAsPDF: typeof browser$tabs$saveAsPDF,
    show: typeof browser$tabs$show,
    hide: typeof browser$tabs$hide,
    moveInSuccession: typeof browser$tabs$moveInSuccession,
    TAB_ID_NONE: typeof browser$tabs$TAB_ID_NONE,
    onCreated: typeof browser$tabs$onCreated,
    onUpdated: typeof browser$tabs$onUpdated,
    onMoved: typeof browser$tabs$onMoved,
    onSelectionChanged: typeof browser$tabs$onSelectionChanged,
    onActiveChanged: typeof browser$tabs$onActiveChanged,
    onActivated: typeof browser$tabs$onActivated,
    onHighlightChanged: typeof browser$tabs$onHighlightChanged,
    onHighlighted: typeof browser$tabs$onHighlighted,
    onDetached: typeof browser$tabs$onDetached,
    onAttached: typeof browser$tabs$onAttached,
    onRemoved: typeof browser$tabs$onRemoved,
    onReplaced: typeof browser$tabs$onReplaced,
    onZoomChange: typeof browser$tabs$onZoomChange
  };

  /**
   * An event that caused a muted state change.
   */
  declare type browser$tabs$MutedInfoReason = "user" | "capture" | "extension";

  /**
   * Tab muted state and the reason for the last state change.
   */
  declare interface browser$tabs$MutedInfo {
    /**
     * Whether the tab is prevented from playing sound (but hasn't necessarily recently produced sound). Equivalent
     * to whether the muted audio indicator is showing.
     */
    muted: boolean;

    /**
     * The reason the tab was muted or unmuted. Not set if the tab's mute state has never been changed.
     */
    reason?: browser$tabs$MutedInfoReason;

    /**
     * The ID of the extension that changed the muted state. Not set if an extension was not the reason the muted
     * state last changed.
     */
    extensionId?: string;
  }

  /**
   * Tab sharing state for screen, microphone and camera.
   */
  declare interface browser$tabs$SharingState {
    /**
     * If the tab is sharing the screen the value will be one of "Screen", "Window", or "Application", or undefined
     * if not screen sharing.
     */
    screen?: string;

    /**
     * True if the tab is using the camera.
     */
    camera: boolean;

    /**
     * True if the tab is using the microphone.
     */
    microphone: boolean;
  }

  declare interface browser$tabs$Tab {
    /**
     * The ID of the tab. Tab IDs are unique within a browser session. Under some circumstances a Tab may not be
     * assigned an ID, for example when querying foreign tabs using the `sessions` API, in which case a session ID
     * may be present. Tab ID can also be set to `tabs.TAB_ID_NONE` for apps and devtools windows.
     */
    id?: number;

    /**
     * The zero-based index of the tab within its window.
     */
    index: number;

    /**
     * The ID of the window the tab is contained within.
     */
    windowId?: number;

    /**
     * The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists.
     */
    openerTabId?: number;

    /**
     * Whether the tab is selected.
     * @deprecated Please use `tabs.Tab.highlighted`.
     */
    selected?: boolean;

    /**
     * Whether the tab is highlighted. Works as an alias of active
     */
    highlighted: boolean;

    /**
     * Whether the tab is active in its window. (Does not necessarily mean the window is focused.)
     */
    active: boolean;

    /**
     * Whether the tab is pinned.
     */
    pinned: boolean;

    /**
     * The last time the tab was accessed as the number of milliseconds since epoch.
     */
    lastAccessed?: number;

    /**
     * Whether the tab has produced sound over the past couple of seconds (but it might not be heard if also
     * muted). Equivalent to whether the speaker audio indicator is showing.
     */
    audible?: boolean;

    /**
     * Current tab muted state and the reason for the last state change.
     */
    mutedInfo?: browser$tabs$MutedInfo;

    /**
     * The URL the tab is displaying. This property is only present if the extension's manifest includes the
     * `"tabs"` permission.
     */
    url?: string;

    /**
     * The title of the tab. This property is only present if the extension's manifest includes the `"tabs"`
     * permission.
     */
    title?: string;

    /**
     * The URL of the tab's favicon. This property is only present if the extension's manifest includes the
     * `"tabs"` permission. It may also be an empty string if the tab is loading.
     */
    favIconUrl?: string;

    /**
     * Either _loading_ or _complete_.
     */
    status?: string;

    /**
     * True while the tab is not loaded with content.
     */
    discarded?: boolean;

    /**
     * Whether the tab is in an incognito window.
     */
    incognito: boolean;

    /**
     * The width of the tab in pixels.
     */
    width?: number;

    /**
     * The height of the tab in pixels.
     */
    height?: number;

    /**
     * True if the tab is hidden.
     */
    hidden?: boolean;

    /**
     * The session ID used to uniquely identify a Tab obtained from the `sessions` API.
     */
    sessionId?: string;

    /**
     * The CookieStoreId used for the tab.
     */
    cookieStoreId?: string;

    /**
     * Whether the document in the tab can be rendered in reader mode.
     */
    isArticle?: boolean;

    /**
     * Whether the document in the tab is being rendered in reader mode.
     */
    isInReaderMode?: boolean;

    /**
     * Current tab sharing state for screen, microphone and camera.
     */
    sharingState?: browser$tabs$SharingState;

    /**
     * Whether the tab is drawing attention.
     */
    attention?: boolean;

    /**
     * The ID of this tab's successor, if any; `tabs.TAB_ID_NONE` otherwise.
     */
    successorTabId?: number;
  }

  /**
   * Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page;
   * defaults to `automatic`.
   */
  declare type browser$tabs$ZoomSettingsMode =
    | "automatic"
    | "manual"
    | "disabled";

  /**
   * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to
   * `per-origin` when in `automatic` mode, and `per-tab` otherwise.
   */
  declare type browser$tabs$ZoomSettingsScope = "per-origin" | "per-tab";

  /**
   * Defines how zoom changes in a tab are handled and at what scope.
   */
  declare interface browser$tabs$ZoomSettings {
    /**
     * Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page;
     * defaults to `automatic`.
     */
    mode?: browser$tabs$ZoomSettingsMode;

    /**
     * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults
     * to `per-origin` when in `automatic` mode, and `per-tab` otherwise.
     */
    scope?: browser$tabs$ZoomSettingsScope;

    /**
     * Used to return the default zoom level for the current tab in calls to tabs.getZoomSettings.
     */
    defaultZoomFactor?: number;
  }

  /**
   * The page settings including: orientation, scale, background, margins, headers, footers.
   */
  declare interface browser$tabs$PageSettings {
    /**
     * The page size unit: 0 = inches, 1 = millimeters. Default: 0.
     */
    paperSizeUnit?: number;

    /**
     * The paper width in paper size units. Default: 8.5.
     */
    paperWidth?: number;

    /**
     * The paper height in paper size units. Default: 11.0.
     */
    paperHeight?: number;

    /**
     * The page content orientation: 0 = portrait, 1 = landscape. Default: 0.
     */
    orientation?: number;

    /**
     * The page content scaling factor: 1.0 = 100% = normal size. Default: 1.0.
     */
    scaling?: number;

    /**
     * Whether the page content should shrink to fit the page width (overrides scaling). Default: true.
     */
    shrinkToFit?: boolean;

    /**
     * Whether the page background colors should be shown. Default: false.
     */
    showBackgroundColors?: boolean;

    /**
     * Whether the page background images should be shown. Default: false.
     */
    showBackgroundImages?: boolean;

    /**
     * The spacing between the left header/footer and the left edge of the paper (inches). Default: 0.
     */
    edgeLeft?: number;

    /**
     * The spacing between the right header/footer and the right edge of the paper (inches). Default: 0.
     */
    edgeRight?: number;

    /**
     * The spacing between the top of the headers and the top edge of the paper (inches). Default: 0
     */
    edgeTop?: number;

    /**
     * The spacing between the bottom of the footers and the bottom edge of the paper (inches). Default: 0.
     */
    edgeBottom?: number;

    /**
     * The margin between the page content and the left edge of the paper (inches). Default: 0.5.
     */
    marginLeft?: number;

    /**
     * The margin between the page content and the right edge of the paper (inches). Default: 0.5.
     */
    marginRight?: number;

    /**
     * The margin between the page content and the top edge of the paper (inches). Default: 0.5.
     */
    marginTop?: number;

    /**
     * The margin between the page content and the bottom edge of the paper (inches). Default: 0.5.
     */
    marginBottom?: number;

    /**
     * The text for the page's left header. Default: '&T'.
     */
    headerLeft?: string;

    /**
     * The text for the page's center header. Default: ''.
     */
    headerCenter?: string;

    /**
     * The text for the page's right header. Default: '&U'.
     */
    headerRight?: string;

    /**
     * The text for the page's left footer. Default: '&PT'.
     */
    footerLeft?: string;

    /**
     * The text for the page's center footer. Default: ''.
     */
    footerCenter?: string;

    /**
     * The text for the page's right footer. Default: '&D'.
     */
    footerRight?: string;
  }

  /**
   * Whether the tabs have completed loading.
   */
  declare type browser$tabs$TabStatus = "loading" | "complete";

  /**
   * The type of window.
   */
  declare type browser$tabs$WindowType =
    | "normal"
    | "popup"
    | "panel"
    | "app"
    | "devtools";

  /**
   * Event names supported in onUpdated.
   */
  declare type browser$tabs$UpdatePropertyName =
    | "attention"
    | "audible"
    | "discarded"
    | "favIconUrl"
    | "hidden"
    | "isarticle"
    | "isArticle"
    | "mutedInfo"
    | "pinned"
    | "sharingState"
    | "status"
    | "title";

  /**
   * An object describing filters to apply to tabs.onUpdated events.
   */
  declare interface browser$tabs$UpdateFilter {
    /**
     * A list of URLs or URL patterns. Events that cannot match any of the URLs will be filtered out. Filtering
     * with urls requires the `"tabs"` or `"activeTab"` permission.
     */
    urls?: string[];

    /**
     * A list of property names. Events that do not match any of the names will be filtered out.
     */
    properties?: browser$tabs$UpdatePropertyName[];
    tabId?: number;
    windowId?: number;
  }

  declare type browser$tabs$_QueryScreen = "Screen" | "Window" | "Application";

  declare type browser$tabs$_TabsOnUpdatedEvent<
    T = (
      tabId: number,
      changeInfo: {
        attention?: boolean,

        audible?: boolean,

        discarded?: boolean,

        favIconUrl?: string,

        hidden?: boolean,

        isArticle?: boolean,

        mutedInfo?: browser$tabs$MutedInfo,

        pinned?: boolean,

        sharingState?: browser$tabs$SharingState,

        status?: string,

        title?: string,

        url?: string
      },
      tab: browser$tabs$Tab
    ) => void

    /**
     * The tab's new attention state.
     */

    /**
     * The tab's new audible state.
     */

    /**
     * True while the tab is not loaded with content.
     */

    /**
     * The tab's new favicon URL. This property is only present if the extension's manifest includes the `"tabs"`
     * permission.
     */

    /**
     * The tab's new hidden state.
     */

    /**
     * Whether the document in the tab can be rendered in reader mode.
     */

    /**
     * The tab's new muted state and the reason for the change.
     */

    /**
     * The tab's new pinned state.
     */

    /**
     * The tab's new sharing state for screen, microphone and camera.
     */

    /**
     * The status of the tab. Can be either _loading_ or _complete_.
     */

    /**
     * The title of the tab if it has changed. This property is only present if the extension's manifest includes
     * the `"tabs"` permission.
     */

    /**
     * The tab's URL if it has changed. This property is only present if the extension's manifest includes the
     * `"tabs"` permission.
     */
  > = WebExtEventBase<
    (callback: T, filter?: browser$tabs$UpdateFilter) => void,
    T
  >;

  /**
   * An ID which represents the absence of a browser tab.
   */
  declare var browser$tabs$TAB_ID_NONE: number;

  /**
   * Retrieves details about the specified tab.
   */
  declare function browser$tabs$get(tabId: number): Promise<browser$tabs$Tab>;

  /**
   * Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for
   * example: a background page or popup view).
   */
  declare function browser$tabs$getCurrent(): Promise<browser$tabs$Tab>;

  /**
   * Connects to the content script(s) in the specified tab. The `runtime.onConnect` event is fired in each content
   * script running in the specified tab for the current extension. For more details, see Content Script Messaging.
   * @returns A port that can be used to communicate with the content scripts running in the specified tab. The
   * port's `runtime.Port` event is fired if the tab closes or does not exist.
   */
  declare function browser$tabs$connect(
    tabId: number,
    connectInfo?: {
      /**
       * Will be passed into onConnect for content scripts that are listening for the connection event.
       */
      name?: string,

      /**
       * Open a port to a specific frame identified by `frameId` instead of all frames in the tab.
       */
      frameId?: number
    }
  ): browser$runtime$Port;

  /**
   * Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a
   * response is sent back. The `extension.onRequest` event is fired in each content script running in the specified
   * tab for the current extension.
   * @deprecated Please use `runtime.sendMessage`.
   */
  declare function browser$tabs$sendRequest(
    tabId: number,
    request: any,
    responseCallback?: (response: any) => void
  ): void;

  /**
   * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a
   * response is sent back. The `runtime.onMessage` event is fired in each content script running in the specified
   * tab for the current extension.
   */
  declare function browser$tabs$sendMessage(
    tabId: number,
    message: any,
    options?: {
      /**
       * Send a message to a specific frame identified by `frameId` instead of all frames in the tab.
       */
      frameId?: number
    }
  ): Promise<any>;

  /**
   * Gets the tab that is selected in the specified window.
   * @param windowId Defaults to the current window.
   * @deprecated Please use `tabs.query` `{active: true}`.
   */
  declare function browser$tabs$getSelected(
    windowId?: number
  ): Promise<browser$tabs$Tab>;

  /**
   * Gets details about all tabs in the specified window.
   * @param windowId Defaults to the current window.
   * @deprecated Please use `tabs.query` `{windowId: windowId}`.
   */
  declare function browser$tabs$getAllInWindow(
    windowId?: number
  ): Promise<browser$tabs$Tab[]>;

  /**
   * Creates a new tab.
   */
  declare function browser$tabs$create(createProperties: {
    /**
     * The window to create the new tab in. Defaults to the current window.
     */
    windowId?: number,

    /**
     * The position the tab should take in the window. The provided value will be clamped to between zero and the
     * number of tabs in the window.
     */
    index?: number,

    /**
     * The URL to navigate the tab to initially. Fully-qualified URLs must include a scheme (i.e.
     * 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within
     * the extension. Defaults to the New Tab Page.
     */
    url?: string,

    /**
     * Whether the tab should become the active tab in the window. Does not affect whether the window is focused
     * (see `windows.update`). Defaults to `true`.
     */
    active?: boolean,

    /**
     * Whether the tab should become the selected tab in the window. Defaults to `true`
     * @deprecated Please use _active_.
     */
    selected?: boolean,

    /**
     * Whether the tab should be pinned. Defaults to `false`
     */
    pinned?: boolean,

    /**
     * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly
     * created tab.
     */
    openerTabId?: number,

    /**
     * The CookieStoreId for the tab that opened this tab.
     */
    cookieStoreId?: string,

    /**
     * Whether the document in the tab should be opened in reader mode.
     */
    openInReaderMode?: boolean,

    /**
     * Whether the tab is marked as 'discarded' when created.
     */
    discarded?: boolean,

    /**
     * The title used for display if the tab is created in discarded mode.
     */
    title?: string
  }): Promise<browser$tabs$Tab | void>;

  /**
   * Duplicates a tab.
   * @param tabId The ID of the tab which is to be duplicated.
   */
  declare function browser$tabs$duplicate(
    tabId: number
  ): Promise<browser$tabs$Tab | void>;

  /**
   * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
   */
  declare function browser$tabs$query(queryInfo: {
    /**
     * Whether the tabs are active in their windows.
     */
    active?: boolean,

    /**
     * Whether the tabs are drawing attention.
     */
    attention?: boolean,

    /**
     * Whether the tabs are pinned.
     */
    pinned?: boolean,

    /**
     * Whether the tabs are audible.
     */
    audible?: boolean,

    /**
     * Whether the tabs are muted.
     */
    muted?: boolean,

    /**
     * Whether the tabs are highlighted. Works as an alias of active.
     */
    highlighted?: boolean,

    /**
     * Whether the tabs are in the current window.
     */
    currentWindow?: boolean,

    /**
     * Whether the tabs are in the last focused window.
     */
    lastFocusedWindow?: boolean,

    /**
     * Whether the tabs have completed loading.
     */
    status?: browser$tabs$TabStatus,

    /**
     * True while the tabs are not loaded with content.
     */
    discarded?: boolean,

    /**
     * True while the tabs are hidden.
     */
    hidden?: boolean,

    /**
     * Match page titles against a pattern.
     */
    title?: string,

    /**
     * Match tabs against one or more URL patterns. Note that fragment identifiers are not matched.
     */
    url?: string | string[],

    /**
     * The ID of the parent window, or `windows.WINDOW_ID_CURRENT` for the current window.
     */
    windowId?: number,

    /**
     * The type of window the tabs are in.
     */
    windowType?: browser$tabs$WindowType,

    /**
     * The position of the tabs within their windows.
     */
    index?: number,

    /**
     * The CookieStoreId used for the tab.
     */
    cookieStoreId?: string,

    /**
     * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
     */
    openerTabId?: number,

    /**
     * True for any screen sharing, or a string to specify type of screen sharing.
     */
    screen?: boolean | browser$tabs$_QueryScreen,

    /**
     * True if the tab is using the camera.
     */
    camera?: boolean,

    /**
     * True if the tab is using the microphone.
     */
    microphone?: boolean
  }): Promise<browser$tabs$Tab[]>;

  /**
   * Highlights the given tabs.
   */
  declare function browser$tabs$highlight(highlightInfo: {
    /**
     * The window that contains the tabs.
     */
    windowId?: number,

    /**
     * If true, the `windows.Window` returned will have a `tabs` property that contains a list of the `tabs.Tab`
     * objects. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if the extension's
     * manifest file includes the `"tabs"` permission. If false, the `windows.Window` won't have the `tabs`
     * property.
     */
    populate?: boolean,

    /**
     * One or more tab indices to highlight.
     */
    tabs: number[] | number
  }): Promise<browser$windows$Window | void>;

  /**
   * Modifies the properties of a tab. Properties that are not specified in `updateProperties` are not modified.
   */
  declare function browser$tabs$update(updateProperties: {
    /**
     * A URL to navigate the tab to.
     */
    url?: string,

    /**
     * Whether the tab should be active. Does not affect whether the window is focused (see `windows.update`).
     */
    active?: boolean,

    /**
     * Adds or removes the tab from the current selection.
     */
    highlighted?: boolean,

    /**
     * Whether the tab should be selected.
     * @deprecated Please use _highlighted_.
     */
    selected?: boolean,

    /**
     * Whether the tab should be pinned.
     */
    pinned?: boolean,

    /**
     * Whether the tab should be muted.
     */
    muted?: boolean,

    /**
     * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
     */
    openerTabId?: number,

    /**
     * Whether the load should replace the current history entry for the tab.
     */
    loadReplace?: boolean,

    /**
     * The ID of this tab's successor. If specified, the successor tab must be in the same window as this tab.
     */
    successorTabId?: number
  }): Promise<browser$tabs$Tab | void>;

  /**
   * Modifies the properties of a tab. Properties that are not specified in `updateProperties` are not modified.
   * @param tabId Defaults to the selected tab of the current window.
   */
  declare function browser$tabs$update(
    tabId: number,
    updateProperties: {
      /**
       * A URL to navigate the tab to.
       */
      url?: string,

      /**
       * Whether the tab should be active. Does not affect whether the window is focused (see `windows.update`).
       */
      active?: boolean,

      /**
       * Adds or removes the tab from the current selection.
       */
      highlighted?: boolean,

      /**
       * Whether the tab should be selected.
       * @deprecated Please use _highlighted_.
       */
      selected?: boolean,

      /**
       * Whether the tab should be pinned.
       */
      pinned?: boolean,

      /**
       * Whether the tab should be muted.
       */
      muted?: boolean,

      /**
       * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
       */
      openerTabId?: number,

      /**
       * Whether the load should replace the current history entry for the tab.
       */
      loadReplace?: boolean,

      /**
       * The ID of this tab's successor. If specified, the successor tab must be in the same window as this tab.
       */
      successorTabId?: number
    }
  ): Promise<browser$tabs$Tab | void>;

  /**
   * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved
   * to and from normal (window.type === "normal") windows.
   * @param tabIds The tab or list of tabs to move.
   */
  declare function browser$tabs$move(
    tabIds: number | number[],
    moveProperties: {
      /**
       * Defaults to the window the tab is currently in.
       */
      windowId?: number,

      /**
       * The position to move the window to. -1 will place the tab at the end of the window.
       */
      index: number
    }
  ): Promise<browser$tabs$Tab | browser$tabs$Tab[] | void>;

  /**
   * Reload a tab.
   * @param tabId The ID of the tab to reload; defaults to the selected tab of the current window.
   */
  declare function browser$tabs$reload(
    tabId?: number,
    reloadProperties?: {
      /**
       * Whether using any local cache. Default is false.
       */
      bypassCache?: boolean
    }
  ): Promise<void>;

  /**
   * Closes one or more tabs.
   * @param tabIds The tab or list of tabs to close.
   */
  declare function browser$tabs$remove(
    tabIds: number | number[]
  ): Promise<void>;

  /**
   * discards one or more tabs.
   * @param tabIds The tab or list of tabs to discard.
   */
  declare function browser$tabs$discard(
    tabIds: number | number[]
  ): Promise<void>;

  /**
   * Detects the primary language of the content in a tab.
   * @param tabId Defaults to the active tab of the current window.
   */
  declare function browser$tabs$detectLanguage(tabId?: number): Promise<string>;

  /**
   * Toggles reader mode for the document in the tab.
   * @param tabId Defaults to the active tab of the current window.
   */
  declare function browser$tabs$toggleReaderMode(tabId?: number): Promise<void>;

  /**
   * Captures the visible area of a specified tab. You must have <all_urls> permission to use this method.
   * @param tabId The tab to capture. Defaults to the active tab of the current window.
   */
  declare function browser$tabs$captureTab(
    tabId?: number,
    options?: browser$extensionTypes$ImageDetails
  ): Promise<string>;

  /**
   * Captures the visible area of the currently active tab in the specified window. You must have <all_urls>
   * permission to use this method.
   * @param windowId The target window. Defaults to the current window.
   */
  declare function browser$tabs$captureVisibleTab(
    windowId?: number,
    options?: browser$extensionTypes$ImageDetails
  ): Promise<string>;

  /**
   * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts
   * doc.
   * @param details Details of the script to run.
   */
  declare function browser$tabs$executeScript(
    details: browser$extensionTypes$InjectDetails
  ): Promise<any[] | void>;

  /**
   * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts
   * doc.
   * @param tabId The ID of the tab in which to run the script; defaults to the active tab of the current window.
   * @param details Details of the script to run.
   */
  declare function browser$tabs$executeScript(
    tabId: number,
    details: browser$extensionTypes$InjectDetails
  ): Promise<any[] | void>;

  /**
   * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
   * @param details Details of the CSS text to insert.
   */
  declare function browser$tabs$insertCSS(
    details: browser$extensionTypes$InjectDetails
  ): Promise<void>;

  /**
   * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
   * @param tabId The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
   * @param details Details of the CSS text to insert.
   */
  declare function browser$tabs$insertCSS(
    tabId: number,
    details: browser$extensionTypes$InjectDetails
  ): Promise<void>;

  /**
   * Removes injected CSS from a page. For details, see the programmatic injection section of the content scripts doc.
   * @param details Details of the CSS text to remove.
   */
  declare function browser$tabs$removeCSS(
    details: browser$extensionTypes$InjectDetails
  ): Promise<void>;

  /**
   * Removes injected CSS from a page. For details, see the programmatic injection section of the content scripts
   * doc.
   * @param tabId The ID of the tab from which to remove the injected CSS; defaults to the active tab of the current
   * window.
   * @param details Details of the CSS text to remove.
   */
  declare function browser$tabs$removeCSS(
    tabId: number,
    details: browser$extensionTypes$InjectDetails
  ): Promise<void>;

  /**
   * Zooms a specified tab.
   * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor.
   * Values greater than zero specify a (possibly non-default) zoom factor for the tab.
   */
  declare function browser$tabs$setZoom(zoomFactor: number): Promise<void>;

  /**
   * Zooms a specified tab.
   * @param tabId The ID of the tab to zoom; defaults to the active tab of the current window.
   * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor.
   * Values greater than zero specify a (possibly non-default) zoom factor for the tab.
   */
  declare function browser$tabs$setZoom(
    tabId: number,
    zoomFactor: number
  ): Promise<void>;

  /**
   * Gets the current zoom factor of a specified tab.
   * @param tabId The ID of the tab to get the current zoom factor from; defaults to the active tab of the current
   * window.
   */
  declare function browser$tabs$getZoom(tabId?: number): Promise<number>;

  /**
   * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset
   * to defaults upon navigating the tab.
   * @param zoomSettings Defines how zoom changes are handled and at what scope.
   */
  declare function browser$tabs$setZoomSettings(
    zoomSettings: browser$tabs$ZoomSettings
  ): Promise<void>;

  /**
   * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset
   * to defaults upon navigating the tab.
   * @param tabId The ID of the tab to change the zoom settings for; defaults to the active tab of the current
   * window.
   * @param zoomSettings Defines how zoom changes are handled and at what scope.
   */
  declare function browser$tabs$setZoomSettings(
    tabId: number,
    zoomSettings: browser$tabs$ZoomSettings
  ): Promise<void>;

  /**
   * Gets the current zoom settings of a specified tab.
   * @param tabId The ID of the tab to get the current zoom settings from; defaults to the active tab of the
   * current window.
   */
  declare function browser$tabs$getZoomSettings(
    tabId?: number
  ): Promise<browser$tabs$ZoomSettings>;

  /**
   * Prints page in active tab.
   */
  declare function browser$tabs$print(): void;

  /**
   * Shows print preview for page in active tab.
   */
  declare function browser$tabs$printPreview(): Promise<void>;

  /**
   * Saves page in active tab as a PDF file.
   * @param pageSettings The page settings used to save the PDF file.
   */
  declare function browser$tabs$saveAsPDF(
    pageSettings: browser$tabs$PageSettings
  ): Promise<string | void>;

  /**
   * Shows one or more tabs.
   * @param tabIds The TAB ID or list of TAB IDs to show.
   */
  declare function browser$tabs$show(tabIds: number | number[]): Promise<void>;

  /**
   * Hides one or more tabs. The `"tabHide"` permission is required to hide tabs. Not all tabs are hidable. Returns
   * an array of hidden tabs.
   * @param tabIds The TAB ID or list of TAB IDs to hide.
   */
  declare function browser$tabs$hide(
    tabIds: number | number[]
  ): Promise<number[]>;

  /**
   * Removes an array of tabs from their lines of succession and prepends or appends them in a chain to another tab.
   * @param tabIds An array of tab IDs to move in the line of succession. For each tab in the array, the tab's
   * current predecessors will have their successor set to the tab's current successor, and each tab will then be
   * set to be the successor of the previous tab in the array. Any tabs not in the same window as the tab
   * indicated by the second argument (or the first tab in the array, if no second argument) will be skipped.
   * @param tabId The ID of a tab to set as the successor of the last tab in the array, or `tabs.TAB_ID_NONE` to
   * leave the last tab without a successor. If options.append is true, then this tab is made the predecessor of
   * the first tab in the array instead.
   */
  declare function browser$tabs$moveInSuccession(
    tabIds: number[],
    tabId?: number,
    options?: {
      /**
       * Whether to move the tabs before (false) or after (true) tabId in the succession. Defaults to false.
       */
      append?: boolean,

      /**
       * Whether to link up the current predecessors or successor (depending on options.append) of tabId to the other
       * side of the chain after it is prepended or appended. If true, one of the following happens: if
       * options.append is false, the first tab in the array is set as the successor of any current predecessors of
       * tabId; if options.append is true, the current successor of tabId is set as the successor of the last tab in
       * the array. Defaults to false.
       */
      insert?: boolean
    }
  ): Promise<any>;

  /**
   * Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired, but you can
   * listen to onUpdated events to be notified when a URL is set.
   * @param tab Details of the tab that was created.
   */
  declare var browser$tabs$onCreated: WebExtEvent<
    (tab: browser$tabs$Tab) => void
  >;

  /**
   * Fired when a tab is updated.
   * @param changeInfo Lists the changes to the state of the tab that was updated.
   * @param tab Gives the state of the tab that was updated.
   */
  declare var browser$tabs$onUpdated: browser$tabs$_TabsOnUpdatedEvent<>;

  /**
   * Fired when a tab is moved within a window. Only one move event is fired, representing the tab the user directly
   * moved. Move events are not fired for the other tabs that must move in response. This event is not fired when a
   * tab is moved between windows. For that, see `tabs.onDetached`.
   */
  declare var browser$tabs$onMoved: WebExtEvent<
    (
      tabId: number,
      moveInfo: {
        windowId: number,
        fromIndex: number,
        toIndex: number
      }
    ) => void
  >;

  /**
   * Fires when the selected tab in a window changes.
   * @param tabId The ID of the tab that has become active.
   * @deprecated Please use `tabs.onActivated`.
   */
  declare var browser$tabs$onSelectionChanged: WebExtEvent<
    (
      tabId: number,
      selectInfo: {
        /**
         * The ID of the window the selected tab changed inside of.
         */
        windowId: number
      }
    ) => void
  > | void;

  /**
   * Fires when the selected tab in a window changes. Note that the tab's URL may not be set at the time this event
   * fired, but you can listen to `tabs.onUpdated` events to be notified when a URL is set.
   * @param tabId The ID of the tab that has become active.
   * @deprecated Please use `tabs.onActivated`.
   */
  declare var browser$tabs$onActiveChanged: WebExtEvent<
    (
      tabId: number,
      selectInfo: {
        /**
         * The ID of the window the selected tab changed inside of.
         */
        windowId: number
      }
    ) => void
  > | void;

  /**
   * Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event
   * fired, but you can listen to onUpdated events to be notified when a URL is set.
   */
  declare var browser$tabs$onActivated: WebExtEvent<
    (activeInfo: {
      /**
       * The ID of the tab that has become active.
       */
      tabId: number,

      /**
       * The ID of the tab that was previously active, if that tab is still open.
       */
      previousTabId?: number,

      /**
       * The ID of the window the active tab changed inside of.
       */
      windowId: number
    }) => void
  >;

  /**
   * Fired when the highlighted or selected tabs in a window changes.
   * @deprecated Please use `tabs.onHighlighted`.
   */
  declare var browser$tabs$onHighlightChanged: WebExtEvent<
    (selectInfo: {
      /**
       * The window whose tabs changed.
       */
      windowId: number,

      /**
       * All highlighted tabs in the window.
       */
      tabIds: number[]
    }) => void
  > | void;

  /**
   * Fired when the highlighted or selected tabs in a window changes.
   */
  declare var browser$tabs$onHighlighted: WebExtEvent<
    (highlightInfo: {
      /**
       * The window whose tabs changed.
       */
      windowId: number,

      /**
       * All highlighted tabs in the window.
       */
      tabIds: number[]
    }) => void
  >;

  /**
   * Fired when a tab is detached from a window, for example because it is being moved between windows.
   */
  declare var browser$tabs$onDetached: WebExtEvent<
    (
      tabId: number,
      detachInfo: {
        oldWindowId: number,
        oldPosition: number
      }
    ) => void
  >;

  /**
   * Fired when a tab is attached to a window, for example because it was moved between windows.
   */
  declare var browser$tabs$onAttached: WebExtEvent<
    (
      tabId: number,
      attachInfo: {
        newWindowId: number,
        newPosition: number
      }
    ) => void
  >;

  /**
   * Fired when a tab is closed.
   */
  declare var browser$tabs$onRemoved: WebExtEvent<
    (
      tabId: number,
      removeInfo: {
        /**
         * The window whose tab is closed.
         */
        windowId: number,

        /**
         * True when the tab is being closed because its window is being closed.
         */
        isWindowClosing: boolean
      }
    ) => void
  >;

  /**
   * Fired when a tab is replaced with another tab due to prerendering or instant.
   */
  declare var browser$tabs$onReplaced: WebExtEvent<
    (addedTabId: number, removedTabId: number) => void
  >;

  /**
   * Fired when a tab is zoomed.
   */
  declare var browser$tabs$onZoomChange: WebExtEvent<
    (ZoomChangeInfo: {
      tabId: number,
      oldZoomFactor: number,
      newZoomFactor: number,
      zoomSettings: browser$tabs$ZoomSettings
    }) => void
  >;

  declare var npm$namespace$browser$windows: {
    get: typeof browser$windows$get,
    getCurrent: typeof browser$windows$getCurrent,
    getLastFocused: typeof browser$windows$getLastFocused,
    getAll: typeof browser$windows$getAll,
    create: typeof browser$windows$create,
    update: typeof browser$windows$update,
    remove: typeof browser$windows$remove,
    WINDOW_ID_NONE: typeof browser$windows$WINDOW_ID_NONE,
    WINDOW_ID_CURRENT: typeof browser$windows$WINDOW_ID_CURRENT,
    onCreated: typeof browser$windows$onCreated,
    onRemoved: typeof browser$windows$onRemoved,
    onFocusChanged: typeof browser$windows$onFocusChanged
  };

  /**
   * The type of browser window this is. Under some circumstances a Window may not be assigned type property, for
   * example when querying closed windows from the `sessions` API.
   */
  declare type browser$windows$WindowType =
    | "normal"
    | "popup"
    | "panel"
    | "app"
    | "devtools";

  /**
   * The state of this browser window. Under some circumstances a Window may not be assigned state property, for
   * example when querying closed windows from the `sessions` API.
   */
  declare type browser$windows$WindowState =
    | "normal"
    | "minimized"
    | "maximized"
    | "fullscreen"
    | "docked";

  declare interface browser$windows$Window {
    /**
     * The ID of the window. Window IDs are unique within a browser session. Under some circumstances a Window may
     * not be assigned an ID, for example when querying windows using the `sessions` API, in which case a session
     * ID may be present.
     */
    id?: number;

    /**
     * Whether the window is currently the focused window.
     */
    focused: boolean;

    /**
     * The offset of the window from the top edge of the screen in pixels. Under some circumstances a Window may
     * not be assigned top property, for example when querying closed windows from the `sessions` API.
     */
    top?: number;

    /**
     * The offset of the window from the left edge of the screen in pixels. Under some circumstances a Window may
     * not be assigned left property, for example when querying closed windows from the `sessions` API.
     */
    left?: number;

    /**
     * The width of the window, including the frame, in pixels. Under some circumstances a Window may not be
     * assigned width property, for example when querying closed windows from the `sessions` API.
     */
    width?: number;

    /**
     * The height of the window, including the frame, in pixels. Under some circumstances a Window may not be
     * assigned height property, for example when querying closed windows from the `sessions` API.
     */
    height?: number;

    /**
     * Array of `tabs.Tab` objects representing the current tabs in the window.
     */
    tabs?: browser$tabs$Tab[];

    /**
     * Whether the window is incognito.
     */
    incognito: boolean;

    /**
     * The type of browser window this is.
     */
    type?: browser$windows$WindowType;

    /**
     * The state of this browser window.
     */
    state?: browser$windows$WindowState;

    /**
     * Whether the window is set to be always on top.
     */
    alwaysOnTop: boolean;

    /**
     * The session ID used to uniquely identify a Window obtained from the `sessions` API.
     */
    sessionId?: string;

    /**
     * The title of the window. Read-only.
     */
    title?: string;
  }

  /**
   * Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup unless
   * the '--enable-panels' flag is set.
   */
  declare type browser$windows$CreateType =
    | "normal"
    | "popup"
    | "panel"
    | "detached_panel";

  /**
   * Specifies whether the `windows.Window` returned should contain a list of the `tabs.Tab` objects.
   */
  declare interface browser$windows$GetInfo {
    /**
     * If true, the `windows.Window` returned will have a `tabs` property that contains a list of the `tabs.Tab`
     * objects. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if the extension's
     * manifest file includes the `"tabs"` permission.
     */
    populate?: boolean;

    /**
     * `windowTypes` is deprecated and ignored on Firefox.
     * @deprecated `windowTypes` is deprecated and ignored on Firefox.
     */
    windowTypes?: browser$windows$WindowType[];
  }

  /**
   * The windowId value that represents the absence of a browser window.
   */
  declare var browser$windows$WINDOW_ID_NONE: number;

  /**
   * The windowId value that represents the current window.
   */
  declare var browser$windows$WINDOW_ID_CURRENT: number;

  /**
   * Gets details about a window.
   */
  declare function browser$windows$get(
    windowId: number,
    getInfo?: browser$windows$GetInfo
  ): Promise<browser$windows$Window>;

  /**
   * Gets the current window.
   */
  declare function browser$windows$getCurrent(
    getInfo?: browser$windows$GetInfo
  ): Promise<browser$windows$Window>;

  /**
   * Gets the window that was most recently focused — typically the window 'on top'.
   */
  declare function browser$windows$getLastFocused(
    getInfo?: browser$windows$GetInfo
  ): Promise<browser$windows$Window>;

  /**
   * Gets all windows.
   * @param getInfo Specifies properties used to filter the `windows.Window` returned and to determine whether they
   * should contain a list of the `tabs.Tab` objects.
   */
  declare function browser$windows$getAll(getInfo?: {
    /**
     * If set, the `windows.Window` returned will be filtered based on its type. If unset the default filter is set
     * to `['app', 'normal', 'panel', 'popup']`, with `'app'` and `'panel'` window types limited to the extension's
     * own windows.
     * @deprecated If set, the `windows.Window` returned will be filtered based on its type. If unset the default
     * filter is set to `['app', 'normal', 'panel', 'popup']`, with `'app'` and `'panel'` window types limited
     * to the extension's own windows.
     */
    windowTypes?: browser$windows$WindowType[],

    /**
     * If true, the `windows.Window` returned will have a `tabs` property that contains a list of the `tabs.Tab`
     * objects. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if the extension's
     * manifest file includes the `"tabs"` permission.
     */
    populate?: boolean
  }): Promise<browser$windows$Window[]>;

  /**
   * Creates (opens) a new browser with any optional sizing, position or default URL provided.
   */
  declare function browser$windows$create(createData?: {
    /**
     * A URL or array of URLs to open as tabs in the window. Fully-qualified URLs must include a scheme (i.e.
     * 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within
     * the extension. Defaults to the New Tab Page.
     */
    url?: string | string[],

    /**
     * The id of the tab for which you want to adopt to the new window.
     */
    tabId?: number,

    /**
     * The number of pixels to position the new window from the left edge of the screen. If not specified, the new
     * window is offset naturally from the last focused window. This value is ignored for panels.
     */
    left?: number,

    /**
     * The number of pixels to position the new window from the top edge of the screen. If not specified, the new
     * window is offset naturally from the last focused window. This value is ignored for panels.
     */
    top?: number,

    /**
     * The width in pixels of the new window, including the frame. If not specified defaults to a natural width.
     */
    width?: number,

    /**
     * The height in pixels of the new window, including the frame. If not specified defaults to a natural height.
     */
    height?: number,

    /**
     * If true, opens an active window. If false, opens an inactive window.
     * @deprecated Unsupported on Firefox at this time.
     */
    focused?: boolean,

    /**
     * Whether the new window should be an incognito window.
     */
    incognito?: boolean,

    /**
     * Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup
     * unless the '--enable-panels' flag is set.
     */
    type?: browser$windows$CreateType,

    /**
     * The initial state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined
     * with 'left', 'top', 'width' or 'height'.
     */
    state?: browser$windows$WindowState,

    /**
     * Allow scripts to close the window.
     */
    allowScriptsToClose?: boolean,

    /**
     * The CookieStoreId to use for all tabs that were created when the window is opened.
     */
    cookieStoreId?: string,

    /**
     * A string to add to the beginning of the window title.
     */
    titlePreface?: string
  }): Promise<browser$windows$Window | void>;

  /**
   * Updates the properties of a window. Specify only the properties that you want to change; unspecified properties
   * will be left unchanged.
   */
  declare function browser$windows$update(
    windowId: number,
    updateInfo: {
      /**
       * The offset from the left edge of the screen to move the window to in pixels. This value is ignored for
       * panels.
       */
      left?: number,

      /**
       * The offset from the top edge of the screen to move the window to in pixels. This value is ignored for panels.
       */
      top?: number,

      /**
       * The width to resize the window to in pixels. This value is ignored for panels.
       */
      width?: number,

      /**
       * The height to resize the window to in pixels. This value is ignored for panels.
       */
      height?: number,

      /**
       * If true, brings the window to the front. If false, brings the next window in the z-order to the front.
       */
      focused?: boolean,

      /**
       * If true, causes the window to be displayed in a manner that draws the user's attention to the window,
       * without changing the focused window. The effect lasts until the user changes focus to the window. This
       * option has no effect if the window already has focus. Set to false to cancel a previous draw attention
       * request.
       */
      drawAttention?: boolean,

      /**
       * The new state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with
       * 'left', 'top', 'width' or 'height'.
       */
      state?: browser$windows$WindowState,

      /**
       * A string to add to the beginning of the window title.
       */
      titlePreface?: string
    }
  ): Promise<browser$windows$Window | void>;

  /**
   * Removes (closes) a window, and all the tabs inside it.
   */
  declare function browser$windows$remove(windowId: number): Promise<void>;

  /**
   * Fired when a window is created.
   * @param window Details of the window that was created.
   */
  declare var browser$windows$onCreated: WebExtEvent<
    (window: browser$windows$Window) => void
  >;

  /**
   * Fired when a window is removed (closed).
   * @param windowId ID of the removed window.
   */
  declare var browser$windows$onRemoved: WebExtEvent<
    (windowId: number) => void
  >;

  /**
   * Fired when the currently focused window changes. Will be `windows.WINDOW_ID_NONE` if all browser windows have
   * lost focus. Note: On some Linux window managers, WINDOW_ID_NONE will always be sent immediately preceding a
   * switch from one browser window to another.
   * @param windowId ID of the newly focused window.
   */
  declare var browser$windows$onFocusChanged: WebExtEvent<
    (windowId: number) => void
  >;
}
