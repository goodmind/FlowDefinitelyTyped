declare module "onesignal-cordova-plugin" {
  declare interface Window {
    plugins: CordovaPlugins;
  }
  declare interface CordovaPlugins {
    OneSignal: OneSignalCordovaPlugin$OneSignalCordovaPlugin.OneSignalCordovaPlugin$OneSignalCordovaPlugin;
  }
  declare interface OneSignalCordovaPlugin$OneSignalCordovaPlugin {
    startInit(appId: string): OneSignalCordovaPlugin$OneSignalBuilder;
    promptForPushNotificationsWithUserResponse(
      callback: (accepted: boolean) => void
    ): void;
    getPermissionSubscriptionState(
      callback: (
        status: OneSignalCordovaPlugin$OSPermissionSubscriptionState
      ) => void
    ): void;
    addPermissionObserver(
      callback: (state: OneSignalCordovaPlugin$OSPermissionState) => void
    ): void;
    addSubscriptionObserver(
      callback: (state: OneSignalCordovaPlugin$OSSubscriptionState) => void
    ): void;
    getTags(callback: (tags: any) => void): void;
    sendTag(key: string, value: string): void;
    sendTags(tags: {
      [key: string]: string
    }): void;
    deleteTag(key: string): void;
    deleteTags(keys: string[]): void;
    promptLocation(): void;
    syncHashedEmail(email: string): void;
    postNotification(
      notificationObj: any,
      onSuccess: (json: any) => void,
      onFailure: (json: any) => void
    ): void;
    clearOneSignalNotifications(): void;
    setSubscription(enable: boolean): void;
    enableVibrate(enable: boolean): void;
    enableSound(enable: boolean): void;
    setLogLevel(logLevel: {
      logLevel: number,
      visualLevel: number
    }): void;
    getIds(
      callback: (id: {
        userId: string,
        pushToken: string
      }) => void
    ): void;
    registerForPushNotifications(): void;
  }

  declare interface OneSignalCordovaPlugin$OneSignalBuilder {
    handleNotificationReceived(
      callback: (json: OneSignalCordovaPlugin$OSNotification) => void
    ): OneSignalCordovaPlugin$OneSignalBuilder;
    handleNotificationOpened(
      callback: (
        json: OneSignalCordovaPlugin$OSNotificationOpenedResult
      ) => void
    ): OneSignalCordovaPlugin$OneSignalBuilder;
    inFocusDisplaying(
      displayOption: OneSignalCordovaPlugin$OSDisplayType
    ): OneSignalCordovaPlugin$OneSignalBuilder;
    iOSSettings(settings: {
      kOSSettingsKeyAutoPrompt: boolean,
      kOSSettingsKeyInAppLaunchURL: boolean
    }): OneSignalCordovaPlugin$OneSignalBuilder;
    endInit(): void;
  }

  declare interface OneSignalCordovaPlugin$OSNotification {
    isAppInFocus: boolean;
    shown: boolean;
    androidNotificationId?: number;
    payload: OneSignalCordovaPlugin$OSNotificationPayload;
    displayType: OneSignalCordovaPlugin$OSDisplayType;
    groupedNotifications?: OneSignalCordovaPlugin$OSNotificationPayload[];
    app_id?: string;
    contents: any;
    headings?: any;
    isIos?: boolean;
    isAndroid?: boolean;
    isWP?: boolean;
    isWP_WNS?: boolean;
    isAdm?: boolean;
    isChrome?: boolean;
    isChromeWeb?: boolean;
    isSafari?: boolean;
    isAnyWeb?: boolean;
    included_segments?: string[];
    excluded_segments?: string[];
    include_player_ids?: string[];
    include_ios_tokens?: string[];
    include_android_reg_ids?: string[];
    include_wp_uris?: string[];
    include_wp_wns_uris?: string[];
    include_amazon_reg_ids?: string[];
    include_chrome_reg_ids?: string[];
    include_chrome_web_reg_ids?: string[];
    app_ids?: string[];
    tags?: any[];
    ios_badgeType?: string;
    ios_badgeCount?: number;
    ios_sound?: string;
    android_sound?: string;
    adm_sound?: string;
    wp_sound?: string;
    wp_wns_sound?: string;
    data?: any;
    buttons?: any;
    small_icon?: string;
    large_icon?: string;
    big_picture?: string;
    adm_small_icon?: string;
    adm_large_icon?: string;
    adm_big_picture?: string;
    chrome_icon?: string;
    chrome_big_picture?: string;
    chrome_web_icon?: string;
    firefox_icon?: string;
    url?: string;
    send_after?: string;
    delayed_option?: string;
    delivery_time_of_day?: string;
    android_led_color?: string;
    android_accent_color?: string;
    android_visibility?: number;
    content_available?: boolean;
    amazon_background_data?: boolean;
    template_id?: string;
    android_group?: string;
    android_group_message?: any;
    adm_group?: string;
    adm_group_message?: any;
    ttl?: number;
    priority?: number;
    ios_category?: string;
  }

  declare interface OneSignalCordovaPlugin$OSNotificationPayload {
    notificationID: string;
    title: string;
    body: string;
    additionalData?: any;
    smallIcon?: string;
    largeIcon?: string;
    bigPicture?: string;
    smallIconAccentColor?: string;
    launchURL?: string;
    sound: string;
    ledColor?: string;
    lockScreenVisibility?: OneSignalCordovaPlugin$OSLockScreenVisibility;
    groupKey?: string;
    groupMessage?: string;
    actionButtons: OneSignalCordovaPlugin$OSActionButton[];
    fromProjectNumber?: string;
    backgroundImageLayout?: OneSignalCordovaPlugin$OSBackgroundImageLayout;
    priority?: number;
    rawPayload: string;
  }

  declare interface OneSignalCordovaPlugin$OSActionButton {
    id: string;
    text: string;
    icon: string;
  }

  declare interface OneSignalCordovaPlugin$OSPermissionState {
    hasPrompted: boolean;
    status: OneSignalCordovaPlugin$OSNotificationPermission;
  }

  declare interface OneSignalCordovaPlugin$OSSubscriptionState {
    subscribed: boolean;
    userSubscriptionSetting: any;
    userId: any;
    pushToken: any;
  }

  declare interface OneSignalCordovaPlugin$OSPermissionSubscriptionState {
    permissionStatus: OneSignalCordovaPlugin$OSPermissionState;
    subscriptionStatus: OneSignalCordovaPlugin$OSSubscriptionState;
  }

  declare interface OneSignalCordovaPlugin$OSBackgroundImageLayout {
    image: string;
    titleTextColor: string;
    bodyTextColor: string;
  }

  declare interface OneSignalCordovaPlugin$OSNotificationOpenedResult {
    action: {
      type: OneSignalCordovaPlugin$OSActionType,
      actionID?: string
    };
    notification: OneSignalCordovaPlugin$OSNotification;
  }

  declare class OneSignalCordovaPlugin$OSLockScreenVisibility {
    constructor(...args: empty): mixed;
    static +Public: Class<OneSignalCordovaPlugin$OSLockScreenVisibility__Public> &
      OneSignalCordovaPlugin$OSLockScreenVisibility__Public &
      1; // 1
    static +Private: Class<OneSignalCordovaPlugin$OSLockScreenVisibility__Private> &
      OneSignalCordovaPlugin$OSLockScreenVisibility__Private &
      0; // 0
    static +Secret: Class<OneSignalCordovaPlugin$OSLockScreenVisibility__Secret> &
      OneSignalCordovaPlugin$OSLockScreenVisibility__Secret &
      -1; // -1
  }

  declare class OneSignalCordovaPlugin$OSLockScreenVisibility__Public
    mixins OneSignalCordovaPlugin$OSLockScreenVisibility {}
  declare class OneSignalCordovaPlugin$OSLockScreenVisibility__Private
    mixins OneSignalCordovaPlugin$OSLockScreenVisibility {}
  declare class OneSignalCordovaPlugin$OSLockScreenVisibility__Secret
    mixins OneSignalCordovaPlugin$OSLockScreenVisibility {}

  declare class OneSignalCordovaPlugin$OSDisplayType {
    constructor(...args: empty): mixed;
    static +None: Class<OneSignalCordovaPlugin$OSDisplayType__None> &
      OneSignalCordovaPlugin$OSDisplayType__None &
      0; // 0
    static +InAppAlert: Class<OneSignalCordovaPlugin$OSDisplayType__InAppAlert> &
      OneSignalCordovaPlugin$OSDisplayType__InAppAlert &
      1; // 1
    static +Notification: Class<OneSignalCordovaPlugin$OSDisplayType__Notification> &
      OneSignalCordovaPlugin$OSDisplayType__Notification &
      2; // 2
  }

  declare class OneSignalCordovaPlugin$OSDisplayType__None
    mixins OneSignalCordovaPlugin$OSDisplayType {}
  declare class OneSignalCordovaPlugin$OSDisplayType__InAppAlert
    mixins OneSignalCordovaPlugin$OSDisplayType {}
  declare class OneSignalCordovaPlugin$OSDisplayType__Notification
    mixins OneSignalCordovaPlugin$OSDisplayType {}

  declare class OneSignalCordovaPlugin$OSActionType {
    constructor(...args: empty): mixed;
    static +Opened: Class<OneSignalCordovaPlugin$OSActionType__Opened> &
      OneSignalCordovaPlugin$OSActionType__Opened &
      0; // 0
    static +ActionTake: Class<OneSignalCordovaPlugin$OSActionType__ActionTake> &
      OneSignalCordovaPlugin$OSActionType__ActionTake &
      1; // 1
  }

  declare class OneSignalCordovaPlugin$OSActionType__Opened
    mixins OneSignalCordovaPlugin$OSActionType {}
  declare class OneSignalCordovaPlugin$OSActionType__ActionTake
    mixins OneSignalCordovaPlugin$OSActionType {}

  declare class OneSignalCordovaPlugin$OSInFocusDisplayOption {
    constructor(...args: empty): mixed;
    static +None: Class<OneSignalCordovaPlugin$OSInFocusDisplayOption__None> &
      OneSignalCordovaPlugin$OSInFocusDisplayOption__None &
      0; // 0
    static +InAppAlert: Class<OneSignalCordovaPlugin$OSInFocusDisplayOption__InAppAlert> &
      OneSignalCordovaPlugin$OSInFocusDisplayOption__InAppAlert &
      1; // 1
    static +Notification: Class<OneSignalCordovaPlugin$OSInFocusDisplayOption__Notification> &
      OneSignalCordovaPlugin$OSInFocusDisplayOption__Notification &
      2; // 2
  }

  declare class OneSignalCordovaPlugin$OSInFocusDisplayOption__None
    mixins OneSignalCordovaPlugin$OSInFocusDisplayOption {}
  declare class OneSignalCordovaPlugin$OSInFocusDisplayOption__InAppAlert
    mixins OneSignalCordovaPlugin$OSInFocusDisplayOption {}
  declare class OneSignalCordovaPlugin$OSInFocusDisplayOption__Notification
    mixins OneSignalCordovaPlugin$OSInFocusDisplayOption {}

  declare class OneSignalCordovaPlugin$OSNotificationPermission {
    constructor(...args: empty): mixed;
    static +NotDetermined: Class<OneSignalCordovaPlugin$OSNotificationPermission__NotDetermined> &
      OneSignalCordovaPlugin$OSNotificationPermission__NotDetermined &
      0; // 0
    static +Authorized: Class<OneSignalCordovaPlugin$OSNotificationPermission__Authorized> &
      OneSignalCordovaPlugin$OSNotificationPermission__Authorized &
      1; // 1
    static +Denied: Class<OneSignalCordovaPlugin$OSNotificationPermission__Denied> &
      OneSignalCordovaPlugin$OSNotificationPermission__Denied &
      2; // 2
  }

  declare class OneSignalCordovaPlugin$OSNotificationPermission__NotDetermined
    mixins OneSignalCordovaPlugin$OSNotificationPermission {}
  declare class OneSignalCordovaPlugin$OSNotificationPermission__Authorized
    mixins OneSignalCordovaPlugin$OSNotificationPermission {}
  declare class OneSignalCordovaPlugin$OSNotificationPermission__Denied
    mixins OneSignalCordovaPlugin$OSNotificationPermission {}
}
