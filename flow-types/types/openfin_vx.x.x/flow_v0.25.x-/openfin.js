declare module "openfin" {
  declare var npm$namespace$fin: {
    Application: typeof fin$Application,
    Clipboard: typeof fin$Clipboard,
    ExternalApplication: typeof fin$ExternalApplication,
    Frame: typeof fin$Frame,
    GlobalHotkey: typeof fin$GlobalHotkey,
    InterApplicationBus: typeof fin$InterApplicationBus,
    Notification: typeof fin$Notification,
    System: typeof fin$System,
    Window: typeof fin$Window,
    desktop: typeof fin$desktop
  };
  declare var fin$Application: $Exports<"./_v2/api/application/application">;

  declare var fin$Clipboard: $Exports<"./_v2/api/clipboard/clipboard">;

  declare var fin$ExternalApplication: $Exports<
    "./_v2/api/external-application/external-application"
  >;

  declare var fin$Frame: $Exports<"./_v2/api/frame/frame">;

  declare var fin$GlobalHotkey: $Exports<"./_v2/api/global-hotkey/index">;

  declare var fin$InterApplicationBus: $Exports<
    "./_v2/api/interappbus/interappbus"
  >;

  declare var fin$Notification: $Exports<"./_v2/api/notification/notification">;

  declare var fin$System: $Exports<"./_v2/api/system/system">;

  declare var fin$Window: $Exports<"./_v2/api/window/window">;

  declare type fin$Identity = $Exports<"./_v2/identity">;

  declare type fin$applicationLogInfo = $Exports<
    "./_v2/api/application/application"
  >;

  declare type fin$LaunchInfo = $Exports<"./_v2/api/application/application">;

  declare type fin$ShortCutConfig = $Exports<
    "./_v2/api/application/application"
  >;

  declare type fin$TrayInfo = $Exports<"./_v2/api/application/application">;

  declare type fin$ApplicationOption = $Exports<
    "./_v2/api/application/applicationOption"
  >;

  declare type fin$ExternalApplicationInfo = $Exports<
    "./_v2/api/external-application/external-application"
  >;

  declare type fin$ApplicationInfo = $Exports<"./_v2/api/system/application">;

  declare type fin$ClearCacheOption = $Exports<
    "./_v2/api/system/clearCacheOption"
  >;

  declare type fin$CookieInfo = $Exports<"./_v2/api/system/cookie">;

  declare type fin$CookieOption = $Exports<"./_v2/api/system/cookie">;

  declare type fin$CrashReporterOption = $Exports<
    "./_v2/api/system/crashReporterOption"
  >;

  declare type fin$AppAssetInfo = $Exports<"./_v2/api/system/download-asset">;

  declare type fin$AppAssetRequest = $Exports<
    "./_v2/api/system/download-asset"
  >;

  declare type fin$RuntimeDownloadOptions = $Exports<
    "./_v2/api/system/download-asset"
  >;

  declare type fin$RuntimeDownloadProgress = $Exports<
    "./_v2/api/system/download-asset"
  >;

  declare type fin$DownloadPreloadInfo = $Exports<
    "./_v2/api/system/download-preload"
  >;

  declare type fin$DownloadPreloadOption = $Exports<
    "./_v2/api/system/download-preload"
  >;

  declare type fin$EntityInfo = $Exports<"./_v2/api/system/entity">;

  declare type fin$ExternalProcessRequestType = $Exports<
    "./_v2/api/system/external-process"
  >;

  declare type fin$ExternalProcessInfo = $Exports<
    "./_v2/api/system/external-process"
  >;

  declare type fin$HostSpecs = $Exports<"./_v2/api/system/host-specs">;

  declare type fin$LogInfo = $Exports<"./_v2/api/system/log">;

  declare type fin$MonitorInfo = $Exports<"./_v2/api/system/monitor">;

  declare type fin$PointTopLeft = $Exports<"./_v2/api/system/point">;

  declare type fin$ProcessInfo = $Exports<"./_v2/api/system/process">;

  declare type fin$ProxyInfo = $Exports<"./_v2/api/system/proxy">;

  declare type fin$RegistryInfo = $Exports<"./_v2/api/system/registry-info">;

  declare type fin$RuntimeInfo = $Exports<"./_v2/api/system/runtime-info">;

  declare type fin$RVMInfo = $Exports<"./_v2/api/system/rvm">;

  declare type fin$WindowDetail = $Exports<"./_v2/api/system/window">;

  declare type fin$SystemWindowInfo = $Exports<"./_v2/api/system/window">;

  declare type fin$AnchorType = $Exports<"./_v2/api/window/anchor-type">;

  declare type fin$Bounds = $Exports<"./_v2/api/window/bounds">;

  declare type fin$Transition = $Exports<"./_v2/api/window/transition">;

  declare type fin$TransitionOptions = $Exports<"./_v2/api/window/transition">;

  declare type fin$WindowOption = $Exports<"./_v2/api/window/windowOption">;

  declare type fin$WindowInfo = $Exports<"./_v2/api/window/window">;

  declare type fin$FrameInfo = $Exports<"./_v2/api/window/window">;

  declare var fin$desktop: fin$OpenFinDesktop;

  declare interface fin$OpenFinDesktop {
    main(f: () => any): void;
    fin$Application: fin$OpenFinApplicationStatic;
    ExternalApp: fin$OpenFinExternalApplicationStatic;
    fin$GlobalHotkey: fin$OpenFinGlobalHotkey;
    fin$InterApplicationBus: fin$OpenFinInterApplicationBus;
    fin$Notification: fin$OpenFinNotificationStatic;
    fin$System: fin$OpenFinSystem;
    fin$Window: fin$OpenFinWindowStatic;
    fin$Frame: fin$OpenFinFrameStatic;
  }

  declare interface fin$OpenFinApplicationStatic {
    /**
     * Creates a new Application.
     * An object representing an application. Allows the developer to create, execute, show/close an application as well as listen to application events.
     */
    new(
      options: fin$ApplicationOption,
      callback?: (successObj: {
        httpResponseCode: number
      }) => void,
      errorCallback?: (reason: string, errorObj: fin$NetworkErrorInfo) => void
    ): fin$OpenFinApplication;

    /**
     * Launches the given Application manifest.
     */
    createFromManifest(
      manifestUrl: string,
      callback?: (app: fin$OpenFinApplication) => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Returns an Application object that represents an existing application.
     */
    getCurrent(): fin$OpenFinApplication;

    /**
     * Returns an Application object that represents an existing application.
     */
    wrap(uuid: string): fin$OpenFinApplication;
  }

  /**
   * Application
   * An object representing an application.Allows the developer to create, execute, show / close an application as well as listen to application events.
   */
  declare interface fin$OpenFinApplication {
    /**
     * Returns an instance of the main Window of the application
     */
    getWindow(): fin$OpenFinWindow;

    /**
     * Registers an event listener on the specified event.
     */
    addEventListener(
      type: fin$OpenFinApplicationEventType,
      listener: (
        event:
          | fin$ApplicationBaseEvent
          | fin$TrayIconClickedEvent
          | fin$WindowEvent
          | fin$WindowAlertRequestedEvent
          | fin$WindowAuthRequested
          | fin$WindowNavigationRejectedEvent
          | fin$WindowEndLoadEvent
      ) => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Closes the application and any child windows created by the application.
     */
    close(
      force?: boolean,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves an array of wrapped fin.desktop.Windows for each of the application's child windows.
     */
    getChildWindows(
      callback?: (children: fin$OpenFinWindow[]) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves an array of active window groups for all of the application's windows. Each group is represented as an array of wrapped fin.desktop.Windows.
     */
    getGroups(
      callback?: (groups: fin$OpenFinWindow[][]) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves information about the application.
     */
    getInfo(
      callback?: (info: fin$LaunchInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves the JSON manifest that was used to create the application. Invokes the error callback if the application was not created from a manifest.
     */
    getManifest(
      callback?: (manifest: any) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves UUID of the application that launches this application. Invokes the error callback if the application was created from a manifest.
     */
    getParentUuid(
      callback?: (uuid: string) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves current configuration of application's shortcuts.
     */
    getShortcuts(
      callback?: (config: fin$ShortCutConfig) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves information about the system tray.
     */
    getTrayIconInfo(
      callback?: (trayInfo: fin$TrayInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Returns the current zoom level of the application.
     */
    getZoomLevel(
      callback?: (level: number) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Determines if the application is currently running.
     */
    isRunning(
      callback?: (running: boolean) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Registers a username and an app name for licensing purposes.
     */
    registerUser(
      userName: string,
      appName: string,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Removes a previously registered event listener from the specified event.
     */
    removeEventListener(
      type: fin$OpenFinApplicationEventType,
      previouslyRegisteredListener: (
        event:
          | fin$ApplicationBaseEvent
          | fin$TrayIconClickedEvent
          | fin$WindowEvent
          | fin$WindowAlertRequestedEvent
          | fin$WindowAuthRequested
          | fin$WindowNavigationRejectedEvent
          | fin$WindowEndLoadEvent
      ) => any,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Removes the application's icon from the tray.
     */
    removeTrayIcon(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Restarts the application.
     */
    restart(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Runs the application. When the application is created, run must be called.
     */
    run(
      callback?: (successObj: fin$SuccessObj) => void,
      errorCallback?: (reason: string, errorObj: fin$NetworkErrorInfo) => void
    ): void;

    /**
     * Tells the rvm to relaunch the main application once upon a complete shutdown
     */
    scheduleRestart(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Sends a message to the RVM to upload the application's logs. On success, an object containing logId is returned.
     */
    sendApplicationLog(
      callback?: (logInfo: fin$applicationLogInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Sets an associated username with that app for Application Log Management use
     */
    setAppLogUsername(
      username: string,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Sets new shortcut configuration for current application.
     * Application has to be launched with a manifest and has to have shortcut configuration (icon url, name, etc.) in its manifest to
     * be able to change shortcut states.
     */
    setShortcuts(
      config: fin$ShortCutConfig,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Adds a customizable icon in the system tray and notifies the application when clicked.
     */
    setTrayIcon(
      iconUrl: string,
      listener: (clickInfo: fin$TrayIconClickedEvent) => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Sets the zoom level of the application. The original size is 0 and each increment above or below represents zooming 20%
     * larger or smaller to default limits of 300% and 50% of original size, respectively.
     */
    setZoomLevel(
      level: number,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Closes the application by terminating its process.
     */
    terminate(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Waits for a hanging application. This method can be called in response to an application "not-responding" to allow the application
     * to continue and to generate another "not-responding" message after a certain period of time.
     */
    wait(callback?: () => void, errorCallback?: (reason: string) => void): void;

    /**
     * The Application's uuid
     */
    uuid: string;
  }

  declare interface fin$SuccessObj {
    httpResponseCode: number;
  }

  declare type fin$NetworkErrorInfo = {
    networkErrorCode: number
  } & fin$ErrorInfo;

  declare interface fin$ErrorInfo {
    stack: string;
    message: string;
  }

  /**
   * Clipboard
   * Clipboard API allows reading and writting to the clipboard in multiple formats.
   */
  declare interface fin$OpenFinClipboard {
    /**
     * Reads available formats for the clipboard type
     */
    availableFormats(
      type: string | null,
      callback?: (formats: string[]) => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Reads available formats for the clipboard type
     */
    readHtml(
      type: string | null,
      callback?: (html: string) => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Read the content of the clipboard as Rtf
     */
    readRtf(
      type: string | null,
      callback?: (rtf: string) => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Read the content of the clipboard as plain text
     */
    readText(
      type: string | null,
      callback?: (text: string) => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Writes data into the clipboard
     */
    write(
      data: any,
      type: string | null,
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Writes data into the clipboard as Html
     */
    writeHtml(
      data: string,
      type: string | null,
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Writes data into the clipboard as Rtf
     */
    writeRtf(
      data: string,
      type: string | null,
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Writes data into the clipboard as plain text
     */
    writeText(
      data: string,
      type: string | null,
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;
  }

  declare interface fin$OpenFinExternalApplicationStatic {
    /**
     * Returns an External Application object that represents an existing external application.
     */
    wrap(uuid: string): fin$OpenFinExternalApplication;
  }

  /**
   * ExternalApplication
   * An object representing an application. Allows the developer to create, execute, show and close an application, as well as listen to application events.
   */
  declare interface fin$OpenFinExternalApplication {
    /**
     * Retrieves information about the application.
     */
    getInfo(
      callback?: (info: fin$ExternalApplicationInfo) => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Registers an event listener on the specified event.
     */
    addEventListener(
      type: fin$OpenFinExternalApplicationEventType,
      listener: () => void,
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Removes a previously registered event listener from the specified event.
     */
    removeEventListener(
      type: fin$OpenFinExternalApplicationEventType,
      listener: () => void,
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;
  }

  /**
   * GlobalHotkey
   * The Global Hotkey allows the registration and unregistration of given hotkeys at the OS level, meaning a Window/Application will receive the events regardless of focused state.
   */
  declare interface fin$OpenFinGlobalHotkey {
    /**
     * Registers an event listener on the specified event.
     */
    addEventListener(
      type: fin$OpenFinGlobalHotkeyEventType,
      listener: (event: fin$GlobalHotkeyEvent) => void,
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Checks if a given hotkey has been registered
     */
    isRegistered(
      hotkey: string,
      callback?: (registered: boolean) => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Registers a global hotkey with the operating system.
     */
    register(
      hotkey: string,
      listener: () => void,
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Removes a previously registered event listener from the specified event.
     */
    removeEventListener(
      type: fin$OpenFinGlobalHotkeyEventType,
      listener: (event: fin$GlobalHotkeyEvent) => void,
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Unregisters a global hotkey with the operating system.
     */
    unregister(
      hotkey: string,
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Unregisters all global hotkeys for the current application.
     */
    unregisterAll(
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;
  }

  /**
   * InterApplicationBus
   * A messaging bus that allows for pub/sub messaging between different applications.
   */
  declare interface fin$OpenFinInterApplicationBus {
    /**
     * Adds a listener that gets called when applications subscribe to the current application's messages.
     */
    addSubscribeListener(
      listener: (uuid: string, topic: string, name: string) => void
    ): void;

    /**
     * Adds a listener that gets called when applications unsubscribe to the current application's messages.
     */
    addUnsubscribeListener(
      listener: (uuid: string, topic: string, name: string) => void
    ): void;

    /**
     * Removes a previously registered subscribe listener.
     */
    removeSubscribeListener(
      listener: (uuid: string, topic: string, name: string) => void
    ): void;

    /**
     * Removes a previously registered unsubscribe listener.
     */
    removeUnsubscribeListener(
      listener: (uuid: string, topic: string, name: string) => void
    ): void;

    /**
     * Publishes a message to all applications running on OpenFin Runtime that are subscribed to the specified topic.
     */
    publish(
      topic: string,
      message: any,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Sends a message to a specific application on a specific topic.
     */
    send(
      destinationUuid: string,
      name: string,
      topic: string,
      message: any,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;
    send(
      destinationUuid: string,
      topic: string,
      message: any,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Subscribes to messages from the specified application on the specified topic. If the subscription is for a uuid, [name],
     * topic combination that has already been published to upon subscription you will receive the last 20 missed messages in the order they were published.
     */
    subscribe(
      senderUuid: string,
      name: string,
      topic: string,
      listener: (message: any, uuid: string, name: string) => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;
    subscribe(
      senderUuid: string,
      topic: string,
      listener: (message: any, uuid: string, name: string) => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Unsubscribes to messages from the specified application on the specified topic.
     */
    unsubscribe(
      senderUuid: string,
      name: string,
      topic: string,
      listener: (message: any, uuid: string, name: string) => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;
    unsubscribe(
      senderUuid: string,
      topic: string,
      listener: (message: any, uuid: string, name: string) => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;
  }

  declare interface fin$OpenFinNotificationStatic {
    /**
     * ctor
     */
    new(
      options: fin$NotificationOptions,
      callback?: () => void,
      errorCallback?: (reason: string, errorObj: fin$NetworkErrorInfo) => void
    ): fin$OpenFinNotification;

    /**
     * Gets an instance of the current notification. For use within a notification window to close the window or send a message back to its parent application.
     */
    getCurrent(): fin$OpenFinNotification;
  }

  /**
   * Notification
   * Notification represents a window on OpenFin Runtime which is shown briefly to the user on the bottom-right corner of the primary monitor.
   * A notification is typically used to alert the user of some important event which requires his or her attention.
   * Notifications are a child or your application that are controlled by the runtime.
   */
  declare interface fin$OpenFinNotification {
    /**
     * Closes the notification.
     */
    close(callback?: () => void): void;

    /**
     * Sends a message to the notification.
     */
    sendMessage(message: any, callback?: () => void): void;

    /**
     * Sends a message from the notification to the application that created the notification. The message is handled by the notification's onMessage callback.
     */
    sendMessageToApplication(message: any, callback?: () => void): void;
  }

  declare interface fin$NotificationOptions {
    /**
     * A boolean that will force dismissal even if the mouse is hovering over the notification
     */
    ignoreMouseOver?: boolean;

    /**
     * A message of any primitive or composite-primitive type to be passed to the notification upon creation.
     */
    message?: any;

    /**
     * The timeout for displaying a notification.Can be in milliseconds or "never".
     */
    timeout?: number | "never";

    /**
     * The url of the notification
     */
    url?: string;

    /**
     * A function that is called when a notification is clicked.
     */
    onClick?: (callback: () => void) => void;

    /**
     * Invoked when the notification is closed via .close() method on the created notification instance
     * or the by the notification itself via fin.desktop.Notification.getCurrent().close().
     * NOTE: this is not invoked when the notification is dismissed via a swipe. For the swipe dismissal callback see onDismiss
     */
    onClose?: (callback: () => void) => void;

    /**
     * Invoked when a the notification is dismissed by swiping it off the screen to the right. NOTE: this is no fired on a programmatic close.
     */
    onDismiss?: (callback: () => void) => void;

    /**
     * A function that is called when an error occurs.The reason for the error is passed as an argument.
     */
    onError?: (
      errorCallback: (reason: string, errorObj: fin$NetworkErrorInfo) => void
    ) => void;

    /**
     * The onMessage function will respond to messages sent from notification.sendMessageToApplication.
     * The function is passed the message, which can be of any primitive or composite-primitive type.
     */
    onMessage?: (callback: (message: any) => void) => void;

    /**
     * A function that is called when a notification is shown.
     */
    onShow?: (callback: (successObj: fin$SuccessObj) => void) => void;
  }

  /**
   * System
   * An object representing the core of OpenFin Runtime.
   * Allows the developer to perform system-level actions, such as accessing logs, viewing processes, clearing the cache and exiting the runtime.
   */
  declare interface fin$OpenFinSystem {
    fin$Clipboard: fin$OpenFinClipboard;

    /**
     * Registers an event listener on the specified event.
     */
    addEventListener(
      type: fin$OpenFinSystemEventType,
      listener: (
        event:
          | fin$SystemBaseEvent
          | fin$DesktopIconClickedEvent
          | fin$IdleStateChangedEvent
          | fin$MonitorInfoChangedEvent
          | fin$SessionChangedEvent
      ) => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Clears cached data containing window state/positions,
     * application resource files (images, HTML, JavaScript files), cookies, and items stored in the Local Storage.
     */
    clearCache(
      options: fin$ClearCacheOption,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Clears all cached data when OpenFin Runtime exits.
     */
    deleteCacheOnExit(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Downloads the given application asset
     */
    downloadAsset(
      assetObj: fin$AppAssetInfo,
      progressListener?: (progress: {
        downloadedBytes: number,
        totalBytes: number
      }) => void,
      callback?: (successObj: {
        path: string
      }) => void,
      errorCallback?: (reason: string, errorObj: fin$NetworkErrorInfo) => void
    ): void;

    /**
     * Download preload scripts from given URLs
     */
    downloadPreloadScripts(
      scripts: fin$DownloadPreloadOption[],
      callback?: (downloadInfo: fin$DownloadPreloadInfo[]) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Downloads the given OpenFin Runtime.
     */
    downloadRuntime(
      options: fin$RuntimeDownloadOptions,
      onProgress?: (progress: fin$RuntimeDownloadProgress) => void,
      onComplete?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Exits the Runtime.
     */
    exit(callback?: () => void, errorCallback?: (reason: string) => void): void;

    /**
     * Writes any unwritten cookies data to disk.
     */
    flushCookieStore(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves an array of data for all applications.
     */
    getAllApplications(
      callback?: (applicationInfoList: fin$ApplicationInfo[]) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves an array of data for all external applications.
     */
    getAllExternalApplications(
      callback?: (applicationInfoList: fin$ApplicationInfo[]) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves an array of data (name, ids, bounds) for all application windows.
     */
    getAllWindows(
      callback?: (windowInfoList: fin$SystemWindowInfo[]) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Returns information about the app asset.
     */
    getAppAssetInfo(
      options: fin$AppAssetRequest,
      callback?: (appAssetInfo: fin$AppAssetInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves the command line argument string that started OpenFin Runtime.
     */
    getCommandLineArguments(
      callback?: (args: string) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Get additional info of cookies.
     */
    getCookies(
      option: fin$CookieOption,
      callback?: (info: fin$CookieInfo[]) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Get the current state of the crash reporter.
     */
    getCrashReporterState(
      callback?: (state: fin$CrashReporterOption) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves the configuration object that started the OpenFin Runtime.
     */
    getDeviceId(
      callback?: (uuid: string) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Returns a hex encoded hash of the mac address and the currently logged in user name
     */
    getDeviceUserId(
      callback?: (id: string) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Returns an Entity info object relating to the entity specified by the uuid and name passed in. The possible types are 'window', 'iframe', 'external connection' or 'unknown'.
     */
    getEntityInfo(
      uuid: string,
      name: string,
      callback?: (info: fin$EntityInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Gets the value of a given environment variable on the computer on which the runtime is installed.
     */
    getEnvironmentVariable(
      envVar: string,
      callback?: (variable: string) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves currently focused window identity.
     */
    getFocusedWindow(
      callback?: (focusedWindowIdentity: fin$Identity) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves system information.
     */
    getHostSpecs(
      callback?: (info: fin$HostSpecs) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves the contents of the log with the specified filename.
     */
    getLog(
      logFileName: string,
      callback?: (variable: string) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves an array containing information for each log file.
     */
    getLogList(
      callback?: (logInfoList: fin$LogInfo[]) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Returns a unique identifier (UUID) provided by the machine.
     */
    getMachineId(
      callback?: (uuid: string) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves the minimum (inclusive) logging level that is currently being written to the logs.
     */
    getMinLogLevel(
      callback?: (logLevel: string) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves an object that contains data about the about the monitor setup of the computer that the runtime is running on.
     */
    getMonitorInfo(
      callback?: (monitorInfo: fin$MonitorInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Returns the mouse in virtual screen coordinates (left, top).
     */
    getMousePosition(
      callback?: (mousePosition: fin$PointTopLeft) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves an array of all of the runtime processes that are currently running.
     * Each element in the array is an object containing the uuid and the name of the application to which the process belongs.
     */
    getProcessList(
      callback?: (processInfoList: fin$ProcessInfo[]) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves the Proxy settings.
     */
    getProxySettings(
      callback?: (proxy: fin$ProxyInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Returns information about the running Runtime in an object.
     */
    getRuntimeInfo(
      callback?: (rvmInfo: fin$RuntimeInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Returns information about the running RVM in an object.
     */
    getRvmInfo(
      callback?: (rvmInfo: fin$RVMInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Returns the version of the runtime. The version contains the major, minor, build and revision numbers.
     */
    getVersion(
      callback?: (version: string) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Runs an executable or batch file.
     */
    launchExternalProcess(
      options: fin$ExternalProcessRequestType,
      callback?: (payload: {
        uuid: string
      }) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Writes the passed message into both the log file and the console.
     */
    log(
      level: "debug" | "info" | "warn" | "error",
      message: string,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Monitors a running process.
     */
    monitorExternalProcess(
      options: fin$ExternalProcessInfo,
      callback?: (payload: {
        uuid: string
      }) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Opens the passed URL in the default web browser.
     */
    openUrlWithBrowser(
      url: string,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Opens the passed URL in the default web browser.
     */
    readRegistryValue(
      rootKey: string,
      subkey: string,
      value: string,
      callback?: (info: fin$RegistryInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * This function call will register a unique id and produce a token. The token can be used to broker an external connection.
     */
    registerExternalConnection(
      uuid: string,
      callback?: (detail: {
        /**
         * this will be unique each time
         */
        token: string,

        /**
         * "remote-connection-uuid"
         */
        uuid: string
      }) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Removes the process entry for the passed UUID obtained from a prior call of fin.desktop.System.launchExternalProcess().
     */
    releaseExternalProcess(
      processUuid: string,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Removes a previously registered event listener from the specified event.
     */
    removeEventListener(
      type: fin$OpenFinSystemEventType,
      listener: (
        event:
          | fin$SystemBaseEvent
          | fin$DesktopIconClickedEvent
          | fin$IdleStateChangedEvent
          | fin$MonitorInfoChangedEvent
          | fin$SessionChangedEvent
      ) => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Set the minimum log level above which logs will be written to the OpenFin log
     */
    setMinLogLevel(
      logLevel: string,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Shows the Chrome Developer Tools for the specified window.
     */
    showDeveloperTools(
      uuid: string,
      name: string,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Start the crash reporter for the browser process if not already running.
     * You can optionally specify `diagnosticMode` to have the logs sent to
     * OpenFin on runtime close
     */
    startCrashReporter(
      options: fin$CrashReporterOption,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Attempt to close an external process. The process will be terminated if it has not closed after the elapsed timeout in milliseconds.
     */
    terminateExternalProcess(
      processUuid: string,
      timeout: number,
      killTree: boolean,
      callback?: (info: {
        result: "clean" | "terminated" | "failed"
      }) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Update the OpenFin Runtime Proxy settings.
     */
    updateProxySettings(
      type: string,
      address: string,
      port: number,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;
  }

  declare interface fin$OpenFinWindowStatic {
    /**
     * Class: Window
     *
     * new Window(options, callbackopt, errorCallbackopt)
     *
     * Creates a new OpenFin Window
     *
     * A basic window that wraps a native HTML window. Provides more fine-grained control over the window state such as the ability to minimize,
     * maximize, restore, etc. By default a window does not show upon instantiation; instead the window's show() method must be invoked manually.
     * The new window appears in the same process as the parent window.
     * @param options - The options of the window
     * @param callback - Called if the window creation was successful
     * @param - httpResponseCode
     */
    new(
      options: fin$WindowOption,
      callback?: (successObj: {
        httpResponseCode: number
      }) => void,
      errorCallback?: (reason: string, errorObj: fin$NetworkErrorInfo) => void
    ): fin$OpenFinWindow;

    /**
     * Returns an instance of the current window.
     * @returns Current window
     */
    getCurrent(): fin$OpenFinWindow;

    /**
     * Returns a Window object that wraps an existing window.
     */
    wrap(appUuid: string, windowName: string): fin$OpenFinWindow;
  }

  /**
   * Window
   * A basic window that wraps a native HTML window. Provides more fine-grained control over the window state such as the ability to minimize,
   * maximize, restore, etc. By default a window does not show upon instantiation; instead the window's show() method must be invoked manually.
   * The new window appears in the same process as the parent window.
   */
  declare interface fin$OpenFinWindow {
    /**
     * uuid of the application that the window belongs to.
     */
    uuid: string;

    /**
     * Name of window
     */
    name: string;

    /**
     * Returns the native JavaScript "window" object for the window. This method can only be used by the parent application or the window itself,
     * otherwise it will return undefined. The same Single-Origin-Policy (SOP) rules apply for child windows created by window.open(url) in that the
     * contents of the window object are only accessible if the URL has the same origin as the invoking window. See example below.
     * Also, will not work with fin.desktop.Window objects created with fin.desktop.Window.wrap().
     * @returns Native window
     */
    getNativeWindow(): fin$Window;

    /**
     * Gets the parent application.
     * @returns Parent application
     */
    getParentApplication(): fin$OpenFinApplication;

    /**
     * Gets the parent window.
     */
    getParentWindow(): fin$OpenFinWindow;

    /**
     * Registers an event listener on the specified event.
     */
    addEventListener(
      type: fin$OpenFinWindowEventType,
      listener: (
        event:
          | fin$WindowBaseEvent
          | fin$WindowAuthRequestedEvent
          | fin$WindowBoundsEvent
          | fin$WindowExternalProcessStartedEvent
          | fin$WindowExternalProcessExited
          | fin$WindowGroupChangedEvent
          | fin$WindowHiddenEvent
          | fin$Window_NavigationRejectedEvent
      ) => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Performs the specified window transitions
     */
    animate(
      transitions: fin$Transition,
      options: fin$TransitionOptions,
      callback?: (event: any) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Provides credentials to authentication requests
     */
    authenticate(
      userName: string,
      password: string,
      callback?: () => void,
      errorCallback?: (reason: string, error: fin$ErrorInfo) => void
    ): void;

    /**
     * Removes focus from the window.
     */
    blur(callback?: () => void, errorCallback?: (reason: string) => void): void;

    /**
     * Brings the window to the front of the OpenFin window stack.
     */
    bringToFront(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Closes the window.
     * @param Close will be prevented from closing when force is false and 'close-requested' has been subscribed to for application's main window.
     */
    close(
      force?: boolean,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Executes Javascript on the window, restricted to windows you own or windows owned by applications you have created.
     * @param code JavaScript code to be executed on the window.
     */
    executeJavaScript(
      code: string,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Prevents a user from changing a window's size/position when using the window's frame.
     * 'disabled-frame-bounds-changing' is generated at the start of and during a user move/size operation.
     * 'disabled-frame-bounds-changed' is generated after a user move/size operation.
     * The events provide the bounds that would have been applied if the frame was enabled.
     * 'frame-disabled' is generated when an enabled frame becomes disabled.
     */
    disableFrame(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Re-enables user changes to a window's size/position when using the window's frame.
     * 'disabled-frame-bounds-changing' is generated at the start of and during a user move/size operation.
     * 'disabled-frame-bounds-changed' is generated after a user move/size operation.
     * The events provide the bounds that would have been applied if the frame was enabled.
     * 'frame-enabled' is generated when a disabled frame has becomes enabled.
     */
    enableFrame(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Flashes the window's frame and taskbar icon until the window is activated.
     */
    flash(
      options?: any,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Gives focus to the window.
     */
    focus(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves an array of frame info objects representing the main frame and any
     * iframes that are currently on the page.
     */
    getAllFrames(
      callback?: (frames: fin$FrameInfo[]) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Gets the current bounds (top, left, width, height) of the window.
     */
    getBounds(
      callback?: (bounds: fin$Bounds) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Retrieves an array containing wrapped fin.desktop.Windows that are grouped with this window. If a window is not in a group an empty array is returned.
     * Please note that calling window is included in the result array.
     */
    getGroup(
      callback?: (group: fin$OpenFinWindow[]) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Gets an information object for the window.
     */
    getInfo(
      callback?: (info: fin$WindowInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Gets the current settings of the window.
     */
    getOptions(
      callback?: (options: fin$WindowOption) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Gets a base64 encoded PNG snapshot of the window.
     */
    getSnapshot(
      callback?: (base64Snapshot: string) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Gets the current state ("minimized", "maximized", or "normal") of the window.
     */
    getState(
      callback?: (state: "minimized" | "maximized" | "normal") => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Returns the zoom level of the window.
     */
    getZoomLevel(
      callback?: (level: number) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Hides the window.
     */
    hide(callback?: () => void, errorCallback?: (reason: string) => void): void;

    /**
     * Determines if the window is currently showing.
     */
    isShowing(
      callback?: (showing: boolean) => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Joins the same window group as the specified window.
     */
    joinGroup(
      target: fin$OpenFinWindow,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Leaves the current window group so that the window can be move independently of those in the group.
     */
    leaveGroup(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Maximizes the window.
     */
    maximize(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Merges the instance's window group with the same window group as the specified window
     */
    mergeGroups(
      target: fin$OpenFinWindow,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Minimizes the window.
     */
    minimize(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Moves the window by a specified amount.
     */
    moveBy(
      deltaLeft: number,
      deltaTop: number,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Moves the window to a specified location.
     */
    moveTo(
      left: number,
      top: number,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Navigates the window to a specified URL.
     */
    navigate(
      url: string,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Navigates the window back one page.
     */
    navigateBack(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Navigates the window forward one page.
     */
    navigateForward(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Reloads the window current page.
     */
    reload(
      ignoreCacheopt?: boolean,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Removes a previously registered event listener from the specified event.
     */
    removeEventListener(
      type: fin$OpenFinWindowEventType,
      listener: (
        event:
          | fin$WindowBaseEvent
          | fin$WindowAuthRequestedEvent
          | fin$WindowBoundsEvent
          | fin$WindowExternalProcessStartedEvent
          | fin$WindowExternalProcessExited
          | fin$WindowGroupChangedEvent
          | fin$WindowHiddenEvent
          | fin$Window_NavigationRejectedEvent
      ) => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Resizes the window by a specified amount.
     */
    resizeBy(
      deltaWidth: number,
      deltaHeight: number,
      anchor: fin$AnchorType,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Resizes the window by a specified amount.
     */
    resizeTo(
      width: number,
      height: number,
      anchor: fin$AnchorType,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Restores the window to its normal state (i.e., unminimized, unmaximized).
     */
    restore(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Will bring the window to the front of the entire stack and give it focus.
     */
    setAsForeground(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Sets the window's size and position
     */
    setBounds(
      left: number,
      top: number,
      width: number,
      height: number,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Sets the zoom level of the window.
     */
    setZoomLevel(
      level: number,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Shows the window if it is hidden.
     * @param Show will be prevented from closing when force is false and 'show-requested' has been subscribed to for application's main window.
     */
    show(
      force?: boolean,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Shows the window if it is hidden at the specified location. If the toggle parameter is set to true, the window will alternate between showing and hiding.
     */
    showAt(
      left: number,
      top: number,
      force?: boolean,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Stops the taskbar icon from flashing.
     */
    stopFlashing(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Stops any current navigation the window is performing.
     */
    stopNavigation(
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;

    /**
     * Updates the window using the passed options
     */
    updateOptions(
      options: fin$WindowOption,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;
  }

  declare interface fin$OpenFinFrameStatic {
    wrap(uuid: string, name: string): fin$OpenFinFrame;
    getCurrent(): fin$OpenFinFrame;
  }

  declare interface fin$OpenFinFrame {
    name: string;
    uuid: string;
    addEventListener(
      type: string,
      listener: () => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;
    getParentWindow(
      callback?: (entityInfo: fin$EntityInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;
    getInfo(
      callback?: (entityInfo: fin$EntityInfo) => void,
      errorCallback?: (reason: string) => void
    ): void;
    removeEventListener(
      type: string,
      listener: () => void,
      callback?: () => void,
      errorCallback?: (reason: string) => void
    ): void;
  }

  declare interface fin$ApplicationBaseEvent {
    topic: string;
    type: fin$OpenFinApplicationEventType;
    uuid: string;
  }

  declare type fin$TrayIconClickedEvent = {
    button: number,
    monitorInfo: fin$MonitorInfo,
    x: number,
    y: number
  } & fin$ApplicationBaseEvent;

  declare type fin$WindowEvent = {
    name: string
  } & fin$ApplicationBaseEvent;

  declare type fin$WindowAlertRequestedEvent = {
    message: string,
    url: string
  } & fin$WindowEvent;

  declare type fin$WindowAuthRequested = {
    authInfo: {
      host: string,
      isProxy: boolean,
      port: number,
      realm: string,
      scheme: string
    }
  } & fin$WindowEvent;

  declare type fin$WindowNavigationRejectedEvent = {
    sourceName: string,
    url: string
  } & fin$WindowEvent;

  declare type fin$WindowEndLoadEvent = {
    documentName: string,
    isMain: boolean
  } & fin$WindowEvent;

  declare type fin$MonitorInfoChangedEvent = {
    topic: "system",
    type: "monitor-info-changed"
  } & fin$MonitorInfo;

  declare interface fin$SystemBaseEvent {
    topic: string;
    type: fin$OpenFinSystemEventType;
    uuid: string;
  }

  declare interface fin$GlobalHotkeyEvent {
    topic: string;
    type: fin$OpenFinGlobalHotkeyEventType;

    /**
     * The Identity that has just registered the hotkey
     */
    identity: {
      name: string,
      uuid: string,
      parentFrame: string,
      entityType: string
    };
    hotkey: string;
  }

  declare interface fin$DesktopIconClickedEvent {
    mouse: {
      /**
       * the left virtual screen coordinate of the mouse
       */
      left: number,

      /**
       * the top virtual screen coordinate of the mouse
       */
      top: number
    };

    /**
     * the number of milliseconds that have elapsed since the system was started,
     */
    tickCount: number;
    topic: "system";
    type: "desktop-icon-clicked";
  }

  declare interface fin$IdleStateChangedEvent {
    /**
     * How long in milliseconds since the user has been idle.
     */
    elapsedTime: number;

    /**
     * true when the user is idle,false when the user has returned;
     */
    isIdle: boolean;
    topic: "system";
    type: "idle-state-changed";
  }

  declare interface fin$WindowBaseEvent {
    /**
     * the name of the window
     */
    name: string;

    /**
     * always window
     */
    topic: "window";

    /**
     * window event type
     */
    type: fin$OpenFinWindowEventType;

    /**
     * the UUID of the application the window belongs to
     */
    uuid: string;
  }

  declare type fin$WindowAuthRequestedEvent = {
    authInfo: {
      host: string,
      isProxy: boolean,
      port: number,
      realm: string,
      scheme: string
    }
  } & fin$WindowBaseEvent;

  declare type fin$WindowBoundsEvent = {
    /**
     * describes what kind of change occurred.
     * 0 means a change in position.
     * 1 means a change in size.
     * 2 means a change in position and size.
     */
    changeType: number,

    /**
     * true when pending changes have been applied to the window.
     */
    deferred: boolean,

    /**
     * the new height of the window.
     */
    height: number,

    /**
     * the left-most coordinate of the window.
     */
    left: number,

    /**
     * the top-most coordinate of the window.
     */
    top: number,
    type:
      | "bounds-changed"
      | "bounds-changing"
      | "disabled-frame-bounds-changed"
      | "disabled-frame-bounds-changing",

    /**
     * the new width of the window.
     */
    width: number
  } & fin$WindowBaseEvent;

  declare type fin$WindowExternalProcessStartedEvent = {
    /**
     * the process handle uuid
     */
    processUuid: string,
    type: "external-process-started"
  } & fin$WindowBaseEvent;

  declare type fin$WindowExternalProcessExited = {
    /**
     * the process exit code
     */
    exitCode: number,

    /**
     * the process handle uuid
     */
    processUuid: string,
    type: "external-process-exited"
  } & fin$WindowBaseEvent;

  declare type fin$WindowGroupChangedEvent = {
    /**
     * Which group array the window that the event listener was registered on is included in:
     * 'source' The window is included in sourceGroup.
     * 'target' The window is included in targetGroup.
     * 'nothing' The window is not included in sourceGroup nor targetGroup.
     */
    memberOf: "source" | "target" | "nothing",

    /**
     * The reason this event was triggered.
     * 'leave' A window has left the group due to a leave or merge with group.
     * 'join' A window has joined the group.
     * 'merge' Two groups have been merged together.
     * 'disband' There are no other windows in the group.
     */
    reason: "leave" | "join" | "merge" | "disband",

    /**
     * All the windows in the group the sourceWindow originated from.
     */
    sourceGroup: fin$WindowOfGroupInfo[],

    /**
     * The UUID of the application the sourceWindow belongs to The source window is the window in which (merge/join/leave)group(s) was called.
     */
    sourceWindowAppUuid: string,

    /**
     * the name of the sourcewindow.The source window is the window in which(merge / join / leave) group(s) was called.
     */
    sourceWindowName: string,

    /**
     * All the windows in the group the targetWindow orginated from
     */
    targetGroup: fin$WindowOfGroupInfo[],

    /**
     * The UUID of the application the targetWindow belongs to. The target window is the window that was passed into (merge/join) group(s).
     */
    targetWindowAppUuid: string,

    /**
     * The name of the targetWindow. The target window is the window that was passed into (merge/join) group(s).
     */
    targetWindowName: string,
    type: "group-changed"
  } & fin$WindowBaseEvent;

  declare interface fin$WindowOfGroupInfo {
    /**
     * The UUID of the application this window entry belongs to.
     */
    appUuid: string;

    /**
     * The name of this window entry.
     */
    windowName: string;
  }

  declare type fin$WindowHiddenEvent = {
    /**
     * What action prompted the close.
     * The reasons are: "hide", "hide-on-close"
     */
    reason: "hide" | "hide-on-close",
    type: "hidden"
  } & fin$WindowBaseEvent;

  declare interface fin$Window_NavigationRejectedEvent {
    name: string;

    /**
     * source of navigation window name
     */
    sourceName: string;
    topic: "navigation-rejected";

    /**
     * Url that was not reached "http://blocked-content.url"
     */
    url: string;

    /**
     * the UUID of the application the window belongs to.
     */
    uuid: string;
  }

  declare interface fin$SessionChangedEvent {
    /**
     * the action that triggered this event:
     */
    reason:
      | "lock"
      | "unlock"
      | "remote-connect"
      | "remote-disconnect"
      | "unknown";
    topic: "system";
    type: "session-changed";
  }

  declare type fin$OpenFinApplicationEventType =
    | "closed"
    | "connected"
    | "crashed"
    | "initialized"
    | "manifest-changed"
    | "not-responding"
    | "out-of-memory"
    | "responding"
    | "run-requested"
    | "started"
    | "tray-icon-clicked"
    | "window-alert-requested"
    | "window-auth-requested"
    | "window-closed"
    | "window-created"
    | "window-end-load"
    | "window-navigation-rejected"
    | "window-show-requested"
    | "window-start-load";

  declare type fin$OpenFinExternalApplicationEventType =
    | "connected"
    | "disconnected";

  declare type fin$OpenFinGlobalHotkeyEventType = "registered" | "unregistered";

  declare type fin$OpenFinSystemEventType =
    | "application-closed"
    | "application-crashed"
    | "application-created"
    | "application-started"
    | "desktop-icon-clicked"
    | "idle-state-changed"
    | "monitor-info-changed"
    | "session-changed";

  declare type fin$OpenFinWindowEventType =
    | "auth-requested"
    | "blurred"
    | "bounds-changed"
    | "bounds-changing"
    | "close-requested"
    | "closed"
    | "disabled-frame-bounds-changed"
    | "disabled-frame-bounds-changing"
    | "embedded"
    | "external-process-exited"
    | "external-process-started"
    | "focused"
    | "frame-disabled"
    | "frame-enabled"
    | "group-changed"
    | "hidden"
    | "initialized"
    | "maximized"
    | "minimized"
    | "navigation-rejected"
    | "restored"
    | "show-requested"
    | "shown";
}
