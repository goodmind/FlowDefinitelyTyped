declare module 'react-native-fbsdk' {
        import type {
          ComponentClass,Component
        } from 'react';

	import type {
          ViewStyle
        } from 'react-native';

	
/**
 * Commonly used Facebook permissions
 */
declare export type Permissions = "public_profile"
| "user_friends"
| "email"
| "user_about_me"
| "user_actions.books"
| "user_actions.fitness"
| "user_actions.music"
| "user_actions.news"
| "user_actions.video"
| "user_birthday"
| "user_education_history"
| "user_events"
| "user_games_activity"
| "user_hometown"
| "user_likes"
| "user_location"
| "user_managed_groups"
| "user_photos"
| "user_posts"
| "user_relationships"
| "user_relationship_details"
| "user_religion_politics"
| "user_tagged_places"
| "user_videos"
| "user_website"
| "user_work_history"
| "read_custom_friendlists"
| "read_insights"
| "read_audience_network_insights"
| "read_page_mailboxes"
| "manage_pages"
| "publish_pages"
| "publish_actions"
| "rsvp_event"
| "pages_show_list"
| "pages_manage_cta"
| "pages_manage_instant_articles"
| "ads_read"
| "ads_management"
| "business_management"
| "pages_messaging"
| "pages_messaging_subscriptions"
| "pages_messaging_payments"
| "pages_messaging_phone_number"
| string;
	
/**
 * Specifies the privacy of a group.
 */
declare export type AppGroupPrivacy = "Open" | "Closed";
	
/**
 * A model for app groups.
 */
declare export interface AppGroupCreationContent {

/**
 * The description of the group.
 */
description: string,

/**
 * The name of the group.
 */
name: string,

/**
 * The privacy for the group.
 */
privacy: AppGroupPrivacy
} 
	
/**
 * A model for app invites.
 */
declare export interface AppInviteContent {

/**
 * A URL to a preview image that will be displayed with the app invite.
 * This is optional. If you don't include it, a fallback image will be used.
 */
previewImageUrl?: string,

/**
 * An app link target that will be used as a target when the user accepts the invite.
 */
applinkUrl: string,

/**
 * Promotional code to be displayed while sending and receiving the invite.
 * This is optional. This can be between 0 and 10 characters long and can contain
 * alphanumeric characters only. To set a promo code, you need to set promo text.
 */
promotionCode?: string,

/**
 * Promotional text to be displayed while sending and receiving the invite.
 * This is optional. This can be between 0 and 80 characters long and can contain
 * alphanumeric and spaces only.
 */
promotionText?: string
} 
	declare export type GameRequestActionType = "send" | "askfor" | "turn";
	declare export type GameRequestFilters = "app_users" | "app_non_users";
	
/**
 * A model for a game request.
 */
declare export interface GameRequestContent {

/**
 * A plain-text message to be sent as part of the request.  Required.
 */
message: string,

/**
 * Used when defining additional context about the nature of the request.
 * The parameter 'objectID' is required if the action type is either 'send' or 'ask-for'.
 */
actionType?: GameRequestActionType,

/**
 * Additional freeform data you may pass for tracking. The maximum length is 255 characters.
 */
data?: string,

/**
 * Controls the set of friends someone sees if a multi-friend selector is shown.
 */
filters?: GameRequestFilters,

/**
 * The Open Graph object ID of the object being sent/asked for. This cannot be null for ActionType SEND and
 * ASKFOR.
 */
objectId?: string,

/**
 * An array of user IDs, usernames or invite tokens of people to send requests to.
 */
recipients?: string[],

/**
 * An array of user IDs that will be included in the dialog as the first suggested friends.
 * Can't be used together with filters.
 */
suggestions?: string[],

/**
 * The title for the dialog.
 */
title?: string
} 
	declare export type ObjectIdActionType = "unknown" | "open_graph" | "page";
	
/**
 * A base interface for content to be shared.
 */
declare export interface ObjectIdAndType {

/**
 * The object ID, this can be a URL or a Facebook ID.
 */
objectId: string,

/**
 * Encapsulates the valid values for the facebook:object_type
 * attribute for a LikeView
 */
objectType: ObjectIdActionType
} 
	declare export type ShareContent = ShareLinkContent | SharePhotoContent | ShareVideoContent | ShareOpenGraphContent;
	
/**
 * A base interface for content to be shared.
 */
declare export interface ShareContentCommonParameters {

/**
 * List of IDs for taggable people to tag with this content.
 */
peopleIds?: string[],

/**
 * The ID for a place to tag with this content.
 */
placeId?: string,

/**
 * A value to be added to the referrer URL when a person follows a link from
 * this shared content on feed.
 */
ref?: string,

/**
 * A hashtag to be added to the share interface. The hashtag must be 32 characters or less.
 */
hashtag?: string
} 
	
/**
 * A model for status and link content to be shared.
 */
declare export interface ShareLinkContent {

/**
 * The type of content to be shared is link.
 */
contentType: "link",

/**
 * Common parameters for share content;
 */
commonParameters?: ShareContentCommonParameters,

/**
 * URL for the content being shared.
 */
contentUrl: string,

/**
 * The Description of the link.
 * If not specified, this field is automatically populated by information scraped
 * from the contentURL,  typically the title of the page.
 * @deprecated `contentDescription` is deprecated from Graph API 2.9.
For more information, see https://developers.facebook.com/docs/apps/changelog#v2_9_deprecations.
 */
contentDescription?: string,

/**
 * The title to display for this link.
 * @deprecated `contentTitle` is deprecated from Graph API 2.9.
For more information, see https://developers.facebook.com/docs/apps/changelog#v2_9_deprecations.
 */
contentTitle?: string,

/**
 * The URL of a picture to attach to this comment.
 * @deprecated `imageUrl` is deprecated from Graph API 2.9.
For more information, see https://developers.facebook.com/docs/apps/changelog#v2_9_deprecations.
 */
imageUrl?: string,

/**
 * The predefined quote to attach to this comment.
 * If specified, the quote text will render with custom styling on top of the link.
 */
quote?: string
} 
	declare export interface OpenGraphProperties {
[key: string]: OpenGraphValue
} 
	declare export interface OpenGraphValue {
type: OpenGraphValueType,
value: any
} 
	declare export type OpenGraphValueType = "number" | "open-graph-object" | "photo" | "string";
	
/**
 * Represents an interface for adding and retrieving values to open graph objects and actions.
 */
declare export class ShareOpenGraphValueContainer  {
constructor(properties: OpenGraphProperties): this
}
	
/**
 * Represents an open graph action.
 */
declare export class ShareOpenGraphAction mixins ShareOpenGraphValueContainer {

/**
 * The action type.
 */
actionType: string;
constructor(actionType: string): this
}
	
/**
 * Represents a content object containing information about an Open Graph Action.
 */
declare export interface ShareOpenGraphContent {

/**
 * The type of content to be shared is open graph content.
 */
contentType: "open-graph",

/**
 * Common parameters for share content;
 */
commonParameters?: ShareContentCommonParameters,

/**
 * URL for the content being shared.
 */
contentUrl?: string,

/**
 * Open Graph Action to be shared.
 */
action: ShareOpenGraphAction,

/**
 * Property name that points to the primary Open Graph Object in the action.
 */
previewPropertyName: string
} 
	
/**
 * Represents an open graph object.
 */
declare export class ShareOpenGraphObject mixins ShareOpenGraphValueContainer {}
	
/**
 * A photo for sharing.
 */
declare export interface SharePhoto {

/**
 * The URL to the photo.
 * Note that when sharing SharePhotoContent with Share Button, the imageUrl
 * of a SharePhoto cannot be the Uri of an image on the web.
 */
imageUrl: string,

/**
 * Specifies whether the photo was generated by the user or the application.
 */
userGenerated?: boolean,

/**
 * The user generated caption for the photo.  Note that the 'caption' must
 * come from the user, as pre-filled content is forbidden by the platform
 * Policies (2.3).
 */
caption?: string
} 
	
/**
 * A model for photo content to be shared.
 */
declare export interface SharePhotoContent {

/**
 * The type of content to be shared is photo.
 */
contentType: "photo",

/**
 * Common parameters for share content;
 */
commonParameters?: ShareContentCommonParameters,

/**
 * URL for the content being shared.
 */
contentUrl?: string,

/**
 * Photos to be shared.
 */
photos: SharePhoto[]
} 
	
/**
 * A video for sharing.
 */
declare export interface ShareVideo {

/**
 * The URL to the video. Must point to the location of the video on disk.
 */
localUrl: string
} 
	
/**
 * A model for video content to be shared.
 */
declare export interface ShareVideoContent {

/**
 * The type of content to be shared is photo.
 */
contentType: "video",

/**
 * Common parameters for share content;
 */
commonParameters?: ShareContentCommonParameters,

/**
 * URL for the content being shared.
 */
contentUrl?: string,

/**
 * Video to be shared.
 */
video: ShareVideo,

/**
 * Description of the video.
 */
contentDescription?: string,

/**
 * Title of the video.
 */
contentTitle?: string,

/**
 * The photo that represents the video.
 */
previewPhoto?: SharePhoto
} 
	declare export interface AccessTokenMap {
accessToken: string,
applicationID: string,
userID: string,
permissions: Permissions[],
declinedPermissions: Permissions[],
accessTokenSource?: string,
expirationTime: number,
lastRefreshTime: number
} 
	
/**
 * Represents an immutable access token for using Facebook services.
 */
declare export class AccessToken  {

/**
 * The access token string.
 */
accessToken: string;

/**
 * The app ID.
 */
applicationID: string;

/**
 * The user ID.
 */
userID: string;

/**
 * The known granted permissions.
 */
permissions: Permissions[];

/**
 * The known declined permissions.
 */
declinedPermissions: Permissions[];

/**
 * The source of access token.
 * @platform android
 */
accessTokenSource: string;

/**
 * The expiration time of the access token.
 * The value is the number of milliseconds since Jan. 1, 1970, midnight GMT.
 */
expirationTime: number;

/**
 * The last refresh time of the access token.
 * The value is the number of milliseconds since Jan. 1, 1970, midnight GMT.
 */
lastRefreshTime: number;

/**
 * Getter for the access token that is current for the application.
 */
static getCurrentAccessToken(): Promise<AccessToken | null>;

/**
 * Setter for the access token that is current for the application.
 */
static setCurrentAccessToken(accessToken: AccessTokenMap): void;

/**
 * Updates the current access token with up to date permissions,
 * and extends the expiration date, if extension is possible.
 */
static refreshCurrentAccessTokenAsync(): Promise<any>;
constructor(tokenMap: AccessTokenMap): this;

/**
 * Gets the date at which the access token expires. The value is the number of
 * milliseconds since Jan. 1, 1970, midnight GMT.
 */
getExpires(): number;

/**
 * Get the list of permissions associated with this access token. Note that the most up-to-date
 * list of permissions is maintained by Facebook, so this list may be outdated if permissions
 * have been added or removed since the time the AccessToken object was created. See
 * https://developers.facebook.com/docs/reference/login/#permissions for details.
 */
getPermissions(): Permissions[];

/**
 * Gets the list of permissions declined by the user with this access token. It represents the
 * entire set of permissions that have been requested and declined. Note that the most
 * up-to-date list of permissions is maintained by Facebook, so this list may be outdated if
 * permissions have been granted or declined since the last time an AccessToken object was
 * created. See https://developers.facebook.com/docs/reference/login/#permissions for details.
 */
getDeclinedPermissions(): Permissions[];

/**
 * Gets the date at which the token was last refreshed. Since tokens expire, the Facebook SDK
 * will attempt to renew them periodically. The value is the number of milliseconds since
 * Jan. 1, 1970, midnight GMT.
 */
getLastRefresh(): number;

/**
 * Gets the ID of the Facebook Application associated with this access token.
 */
getApplicationId(): string;

/**
 * Gets user ID associated with this access token.
 */
getUserId(): string
}
	
/**
 * Controls when an AppEventsLogger sends log events to the server
 */
declare export type AppEventsFlushBehavior = "auto" | "explicitly-only";
	declare export interface Params {
[key: string]: string | number
} 
	
      declare var npm$namespace$AppEventsLogger: {
        setFlushBehavior: typeof AppEventsLogger$setFlushBehavior,
logEvent: typeof AppEventsLogger$logEvent,
logPurchase: typeof AppEventsLogger$logPurchase,
logPushNotificationOpen: typeof AppEventsLogger$logPushNotificationOpen,
flush: typeof AppEventsLogger$flush,
setPushNotificationsDeviceToken: typeof AppEventsLogger$setPushNotificationsDeviceToken,
setPushNotificationsRegistrationId: typeof AppEventsLogger$setPushNotificationsRegistrationId,
        
      }

/**
 * Sets the current event flushing behavior specifying when events
 * are sent back to Facebook servers.
 */
declare function AppEventsLogger$setFlushBehavior(flushBehavior: AppEventsFlushBehavior): void



/**
 * Logs an event with eventName and optional arguments.
 * This function supports the following usage:
 * logEvent(eventName: string);
 * logEvent(eventName: string, valueToSum: number);
 * logEvent(eventName: string, parameters: {[key:string]:string|number});
 * logEvent(eventName: string, valueToSum: number, parameters: {[key:string]:string|number});
 * See https://developers.facebook.com/docs/app-events/android for detail.
 */
declare function AppEventsLogger$logEvent(eventName: string, ...args: Array<number | Params>): void



/**
 * Logs a purchase. See http://en.wikipedia.org/wiki/ISO_4217 for currencyCode.
 */
declare function AppEventsLogger$logPurchase(
purchaseAmount: number,
currencyCode: string,
parameters?: {[key: string]: any}): void



/**
 * Logs an app event that tracks that the application was open via Push Notification.
 */
declare function AppEventsLogger$logPushNotificationOpen(payload?: {[key: string]: any}): void



/**
 * Explicitly kicks off flushing of events to Facebook.
 */
declare function AppEventsLogger$flush(): void



/**
 * For iOS only, sets and sends device token to register the current application for push notifications.
 * @platform ios
 */
declare function AppEventsLogger$setPushNotificationsDeviceToken(deviceToken: string): void



/**
 * For Android only, sets and sends registration id to register the current app for push notifications.
 * @platform Android
 */
declare function AppEventsLogger$setPushNotificationsRegistrationId(registrationId: string): void

	
      declare var npm$namespace$AppInviteDialog: {
        canShow: typeof AppInviteDialog$canShow,
show: typeof AppInviteDialog$show,
        
      }

/**
 * Check if the dialog can be shown.
 */
declare function AppInviteDialog$canShow(): Promise<any>



/**
 * Shows the dialog using the specified content.
 */
declare function AppInviteDialog$show(appInviteContent: AppInviteContent): Promise<any>

	
      declare var npm$namespace$GameRequestDialog: {
        canShow: typeof GameRequestDialog$canShow,
show: typeof GameRequestDialog$show,
        
      }

/**
 * Check if the dialog can be shown.
 */
declare function GameRequestDialog$canShow(): Promise<any>



/**
 * Shows the dialog using the specified content.
 */
declare function GameRequestDialog$show(gameRequestContent: GameRequestContent): Promise<any>

	declare export type GraphRequestCallback = (error?: {[key: string]: any}, result?: {[key: string]: any}) => void;
	declare export interface GraphRequestConfig {

/**
 * The httpMethod to use for the request, for example "GET" or "POST".
 */
httpMethod?: string,

/**
 * The Graph API version to use (e.g., "v2.0")
 */
version?: string,

/**
 * The request parameters.
 */
parameters?: GraphRequestParameters,

/**
 * The access token used by the request.
 */
accessToken?: string
} 
	declare export interface GraphRequestParameters {
[key: string]: {[key: string]: any}
} 
	
/**
 * Represents a Graph API request and provides batch request supports.
 */
declare export class GraphRequest  {

/**
 * The Graph API endpoint to use for the request, for example "me".
 */
graphPath: string;

/**
 * The optional config for the request.
 */
config: GraphRequestConfig;

/**
 * Called upon completion or failure of the request.
 */
callback: GraphRequestCallback;

/**
 * Constructs a new Graph API request.
 */
constructor(graphPath: string, config?: GraphRequestConfig | null, callback?: GraphRequestCallback): this;

/**
 * Adds a string parameter to the request.
 */
addStringParameter(paramString: string, key: string): void
}
	declare export class GraphRequestManager  {
requestBatch: GraphRequest[];
requestCallbacks: Array<GraphRequestCallback | null>;
batchCallback: GraphRequestCallback;
constructor(): this;

/**
 * Add a graph request.
 */
addRequest(request: GraphRequest): GraphRequestManager;

/**
 * Add call back to the GraphRequestManager. Only one callback can be added.
 * Note that invocation of the batch callback does not indicate success of every
 * graph request made, only that the entire batch has finished executing.
 */
addBatchCallback(callback: GraphRequestCallback): GraphRequestManager;

/**
 * Executes requests in a batch.
 * Note that when there's an issue with network connection the batch callback
 * behavior differs in Android and iOS.
 * On iOS, the batch callback returns an error if the batch fails with a network error.
 * On Android, the batch callback always returns {"result": "batch finished executing"}
 * after the batch time out. This is because detecting network status requires
 * extra permission and it's unncessary for the sdk. Instead, you can use the NetInfo module
 * in react-native to get the network status.
 */
start(timeout?: number): void
}
	declare export type AuxiliaryViewPosition = "top" | "bottom" | "inline";
	declare export type HorizontalAlignment = "center" | "left" | "right";
	declare export type LikeViewStyle = "button" | "standard" | "box_count";
	declare export interface LikeViewProps {

/**
 * The objectId and type for the object to like.
 */
objectIdAndType: ObjectIdAndType,

/**
 * The style to use for the receiver.  Distinct from React styling.
 */
likeViewStyle?: LikeViewStyle,

/**
 * The position for the auxiliary view for the receiver.
 */
auxiliaryViewPosition?: AuxiliaryViewPosition,

/**
 * The text alignment of the social sentence.
 */
horizontalAlignment?: HorizontalAlignment,

/**
 * The foreground color to use for the content of the receiver.
 */
foregroundColor?: number,

/**
 * If true, a sound is played when the receiver is toggled.
 */
soundEnabled?: boolean,

/**
 * View style, if any.
 */
style?: ViewStyle
} 
	declare export class LikeView mixins Component<LikeViewProps, any> {}
	declare export type TooltipBehaviorIOS = "auto" | "force_display" | "disable";
	declare export interface LoginButtonProps {

/**
 * Represents the read permissions to request when the login button
 * is pressed.
 */
readPermissions?: Permissions[],

/**
 * Represents the publish permissions to request when the login
 * button is pressed.
 */
publishPermissions?: Permissions[],

/**
 * The callback invoked upon error/completion of a login request.
 */
onLoginFinished(error: {[key: string]: any}, result: LoginResult): void,

/**
 * The callback invoked upon completion of a logout request.
 */
onLogoutFinished(): void,

/**
 * The behavior to use when attempting a login.
 * @platform android
 */
loginBehaviorAndroid?: LoginBehaviorAndroid,

/**
 * The behavior to use when attempting a login.
 * @platform ios
 */
loginBehaviorIOS?: LoginBehaviorIOS,

/**
 * The default audience to target when attempting a login.
 */
defaultAudience?: DefaultAudience,

/**
 * For iOS only, the desired tooltip behavior.
 * @platform ios
 */
tooltipBehaviorIOS?: TooltipBehaviorIOS,

/**
 * View style, if any.
 */
style?: ViewStyle
} 
	declare export class LoginButton mixins Component<LoginButtonProps, any> {}
	
/**
 * Indicates which default audience to use for sessions that post data to Facebook.
 */
declare export type DefaultAudience = "friends" | "everyone" | "only_me";
	declare export type LoginBehavior = LoginBehaviorIOS | LoginBehaviorAndroid;
	
/**
 * Indicate how Facebook Login should be attempted on Android.
 */
declare export type LoginBehaviorAndroid = "native_with_fallback" | "native_only" | "web_only";
	
/**
 * Indicate how Facebook Login should be attempted on iOS.
 */
declare export type LoginBehaviorIOS = "native" | "browser" | "system_account" | "web";
	
/**
 * Shows the results of a login operation.
 */
declare export interface LoginResult {
error: any,
isCancelled: boolean,
grantedPermissions?: Permissions[],
declinedPermissions?: Permissions[]
} 
	
      declare var npm$namespace$LoginManager: {
        logInWithReadPermissions: typeof LoginManager$logInWithReadPermissions,
logInWithPublishPermissions: typeof LoginManager$logInWithPublishPermissions,
getLoginBehavior: typeof LoginManager$getLoginBehavior,
setLoginBehavior: typeof LoginManager$setLoginBehavior,
getDefaultAudience: typeof LoginManager$getDefaultAudience,
setDefaultAudience: typeof LoginManager$setDefaultAudience,
logOut: typeof LoginManager$logOut,
        
      }

/**
 * Logs the user in with the requested read permissions.
 */
declare function LoginManager$logInWithReadPermissions(permissions: Permissions[]): Promise<LoginResult>



/**
 * Logs the user in with the requested publish permissions.
 */
declare function LoginManager$logInWithPublishPermissions(permissions: Permissions[]): Promise<LoginResult>



/**
 * Getter for the login behavior.
 */
declare function LoginManager$getLoginBehavior(): Promise<LoginBehavior>



/**
 * Setter for the login behavior.
 */
declare function LoginManager$setLoginBehavior(loginBehavior: LoginBehavior): void



/**
 * Getter for the default audience.
 */
declare function LoginManager$getDefaultAudience(): Promise<DefaultAudience>



/**
 * Setter for the default audience.
 */
declare function LoginManager$setDefaultAudience(defaultAudience: DefaultAudience): void



/**
 * Logs out the user.
 */
declare function LoginManager$logOut(): void

	
      declare var npm$namespace$MessageDialog: {
        canShow: typeof MessageDialog$canShow,
show: typeof MessageDialog$show,
setShouldFailOnDataError: typeof MessageDialog$setShouldFailOnDataError,
        
      }

/**
 * Check if the dialog can be shown.
 */
declare function MessageDialog$canShow(shareContent: ShareContent): Promise<boolean>



/**
 * Shows the dialog using the specified content.
 */
declare function MessageDialog$show(shareContent: ShareContent): Promise<any>



/**
 * Sets whether or not the native message dialog should fail when it encounters a data error.
 */
declare function MessageDialog$setShouldFailOnDataError(shouldFailOnDataError: boolean): void

	declare export interface SendButtonProps {

/**
 * Content to be shared.
 */
shareContent: ShareContent,

/**
 * View style, if any.
 */
style?: ViewStyle
} 
	declare export class SendButton mixins Component<SendButtonProps, any> {}
	
      declare var npm$namespace$ShareApi: {
        canShare: typeof ShareApi$canShare,
createOpenGraphObject: typeof ShareApi$createOpenGraphObject,
share: typeof ShareApi$share,
        
      }

/**
 * Check if the content can be shared via share api.
 */
declare function ShareApi$canShare(shareContent: ShareContent): Promise<boolean>



/**
 * For iOS only, creates a User Owned Open Graph object without an action.
 * NOTE: Only one share action can be performed at a time.
 * @platform ios
 */
declare function ShareApi$createOpenGraphObject(openGraphObject: ShareOpenGraphObject): Promise<any>



/**
 * Shares the specified content with a message.
 * NOTE: Only one share action can be performed at a time.
 */
declare function ShareApi$share(shareContent: ShareContent, graphNode: string, message: string): Promise<any>

	declare export interface ShareButtonProps {

/**
 * Content to be shared.
 */
shareContent: ShareContent,

/**
 * View style, if any.
 */
style?: ViewStyle
} 
	declare export class ShareButton mixins Component<ShareButtonProps, any> {}
	declare export type ShareDialogMode = ShareDialogModeIOS | ShareDialogModeAndroid;
	declare export type ShareDialogModeAndroid = "automatic" | "native" | "web" | "feed";
	declare export type ShareDialogModeIOS = "automatic" | "browser" | "webview";
	
      declare var npm$namespace$ShareDialog: {
        canShow: typeof ShareDialog$canShow,
show: typeof ShareDialog$show,
setMode: typeof ShareDialog$setMode,
setShouldFailOnDataError: typeof ShareDialog$setShouldFailOnDataError,
        
      }

/**
 * Check if the dialog can be shown.
 */
declare function ShareDialog$canShow(shareContent: ShareContent): Promise<boolean>



/**
 * Shows the dialog using the specified content.
 */
declare function ShareDialog$show(shareContent: ShareContent): Promise<any>



/**
 * Sets the mode for the share dialog.
 */
declare function ShareDialog$setMode(mode: ShareDialogMode): void



/**
 * Sets whether or not the native share dialog should fail when it encounters a data error.
 */
declare function ShareDialog$setShouldFailOnDataError(shouldFailOnDataError: boolean): void

    }
