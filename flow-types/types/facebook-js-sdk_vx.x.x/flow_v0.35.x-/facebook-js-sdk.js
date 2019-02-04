declare module 'facebook-js-sdk' {
        declare var FB: fb.facebook$FacebookStatic;
	declare interface facebook$FacebookStatic {
api: any,
AppEvents: any,
Canvas: any,
Event: any,

/**
 * The method FB.getAuthResponse() is a synchronous accessor for the current authResponse.
 * The synchronous nature of this method is what sets it apart from the other login methods.
 * 
 * This method is similar in nature to FB.getLoginStatus(), but it returns just the authResponse object.
 */
getAuthResponse(): facebook$AuthResponse | null,

/**
 * FB.getLoginStatus() allows you to determine if a user is
 * logged in to Facebook and has authenticated your app.
 * @param callback function to handle the response.
 * @param roundtrip force a roundtrip to Facebook - effectively refreshing the cache of the response object
 */
getLoginStatus(
callback: (response: facebook$StatusResponse) => void,
roundtrip?: boolean): void,

/**
 * The method FB.init() is used to initialize and setup the SDK.
 * @param params params for the initialization.
 */
init(params: facebook$InitParams): void,

/**
 * Use this function to log the user in
 * 
 * Calling FB.login() results in the JS SDK attempting to open a popup window.
 * As such, this method should only be called after a user click event, otherwise
 * the popup window will be blocked by most browsers.
 * @param callback function to handle the response.
 * @param options optional ILoginOption to add params such as scope.
 */
login(
callback: (response: facebook$StatusResponse) => void,
options?: facebook$LoginOptions): void,

/**
 * Use this function to log the user in
 * 
 * Calling FB.login() results in the JS SDK attempting to open a popup window.
 * As such, this method should only be called after a user click event, otherwise
 * the popup window will be blocked by most browsers.
 * @param options optional ILoginOption to add params such as scope.
 */
login(options?: facebook$LoginOptions): void,

/**
 * The method FB.logout() logs the user out of your site and, in some cases, Facebook.
 * @param callback optional function to handle the response
 */
logout(callback?: (response: facebook$StatusResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/sharing/reference/share-dialog
 */
ui(
params: facebook$ShareDialogParams,
callback?: (response: facebook$ShareDialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/sharing/reference/share-dialog
 */
ui(
params: facebook$ShareOpenGraphDialogParams,
callback?: (response: facebook$ShareOpenGraphDialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/pages/page-tab-dialog
 */
ui(
params: facebook$AddPageTabDialogParams,
callback?: (response: facebook$DialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/games/services/gamerequests
 */
ui(
params: facebook$GameRequestDialogParams,
callback?: (response: facebook$GameRequestDialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/payments/reference/paydialog
 */
ui(
params: facebook$PayDialogParams,
callback?: (response: facebook$PayDialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/games_payments/payments_lite
 */
ui(
params: facebook$PaymentsLiteDialogParams,
callback?: (response: facebook$PaymentsLiteDialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/videos/live-video/exploring-live#golivedialog
 */
ui(
params: facebook$LiveDialogParams,
callback?: (response: facebook$LiveDialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/sharing/reference/send-dialog
 */
ui(
params: facebook$SendDialogParams,
callback?: (response: facebook$DialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/marketing-api/guides/offer-ads/#create-offer-dialog
 */
ui(
params: facebook$CreateOfferDialogParams,
callback?: (response: facebook$CreateOfferDialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/marketing-api/guides/lead-ads/create#create-leadgen-dialog
 */
ui(
params: facebook$LeadgenDialogParams,
callback?: (response: facebook$LeadgenDialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/marketing-api/guides/canvas-ads#canvas-ads-dialog
 */
ui(
params: facebook$InstantExperiencesAdsDialogParams,
callback?: (response: facebook$InstantExperiencesAdsDialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/marketing-api/guides/canvas-ads#canvas-preview-dialog
 */
ui(
params: facebook$InstantExperiencesPreviewDialogParams,
callback?: (response: facebook$DialogResponse) => void): void,

/**
 * @see https://developers.facebook.com/docs/marketing-api/guides/collection#collection-ads-dialog
 */
ui(
params: facebook$CollectionAdsDialogParams,
callback?: (response: facebook$CollectionAdsDialogResponse) => void): void,
XFBML: any
} 

declare interface facebook$InitParams {
appId: string,
version?: string,
cookie?: boolean,
status?: boolean,
xfbml?: boolean,
frictionlessRequests?: boolean,
hideFlashCallback?: boolean,
autoLogAppEvents?: boolean
} 

declare interface facebook$LoginOptions {
auth_type?: "rerequest",
scope?: string,
return_scopes?: boolean,
enable_profile_selector?: boolean,
profile_selector_ids?: string
} 

declare interface facebook$DialogParams {
app_id?: string,
redirect_uri?: string,
display?: "page" | "iframe" | "async" | "popup"
} 

declare type facebook$ShareDialogParams = {
method: "share",
href: string,
hashtag?: string,
quote?: string,
mobile_iframe?: boolean
} & facebook$DialogParams


declare type facebook$ShareOpenGraphDialogParams = {
method: "share_open_graph",
action_type: string,
action_properties: {
[property: string]: any
},
href: string,
hashtag?: string,
quote?: string,
mobile_iframe?: false
} & facebook$DialogParams


declare type facebook$AddPageTabDialogParams = {
method: "pagetab",
redirect_uri: string
} & facebook$DialogParams


declare type facebook$GameRequestDialogParams = {
method: "apprequests",
message: string,
action_type?: "send" | "askfor" | "turn",
data?: string,
exclude_ids?: string[],
filters?: "app_users" | "app_non_users" | Array<{
name: string,
user_ids: string[]
}>,
max_recipients?: number,
object_id?: string,
suggestions?: string[],
title?: string,
to?: string | number
} & facebook$DialogParams


declare type facebook$SendDialogParams = {
method: "send",
to?: string,
link: string
} & facebook$DialogParams


declare type facebook$PayDialogParams = {
method: "pay",
action: "purchaseitem",
product: string,
quantity?: number,
quantity_min?: number,
quantity_max?: number,
pricepoint_id?: string,
request_id?: string,
test_currency?: string
} & facebook$DialogParams


declare type facebook$PaymentsLiteDialogParams = {
method: "pay",
action: "purchaseiap",
product_id: string,
developer_payload?: string,
quantity?: number
} & facebook$DialogParams


declare type facebook$LiveDialogParams = {
method: "live_broadcast",
display: "popup" | "iframe",
phase: "create" | "publish",
broadcast_data?: facebook$LiveDialogResponse
} & facebook$DialogParams


declare type facebook$CreateOfferDialogParams = {
account_id: string,
display: "popup",
method: "create_offer",
objective: "APP_INSTALLS"
| "CONVERSIONS"
| "LINK_CLICKS"
| "OFFER_CLAIMS"
| "PRODUCT_CATALOG_SALES"
| "STORE_VISITS",
page_id: string
} & facebook$DialogParams


declare type facebook$LeadgenDialogParams = {
account_id: string,
display: "popup",
method: "lead_gen",
page_id: string
} & facebook$DialogParams


declare type facebook$InstantExperiencesAdsDialogParams = {
display: "popup",
method: "canvas_editor",
business_id: string,
page_id: string,
canvas_id?: string
} & facebook$DialogParams


declare type facebook$InstantExperiencesPreviewDialogParams = {
display: "popup",
method: "canvas_preview",
canvas_id: string
} & facebook$DialogParams


declare type facebook$CollectionAdsDialogParams = {
account_id: string,
canvas_id?: void,
template_id: string,
product_catalog_id?: string,
product_set_id?: string
} & facebook$InstantExperiencesAdsDialogParams


declare interface facebook$AuthResponse {
accessToken: string,
expiresIn: number,
signedRequest: string,
userID: string,
grantedScopes?: string,
reauthorize_required_in?: number
} 

declare interface facebook$StatusResponse {
status: "authorization_expired" | "connected" | "not_authorized" | "unknown",
authResponse: facebook$AuthResponse
} 

declare interface facebook$DialogResponse {
error_code?: number,
error_message?: string
} 

declare type facebook$ShareDialogResponse = {
post_id: string
} & facebook$DialogResponse


declare type facebook$ShareOpenGraphDialogResponse = {
post_id: string
} & facebook$DialogResponse


declare type facebook$GameRequestDialogResponse = {
request: string,
to: string[]
} & facebook$DialogResponse


declare type facebook$PayDialogResponse = {
payment_id: string,
amount: string,
currency: string,
quantity: string,
request_id?: string,
status: "completed" | "initiated",
signed_request: string
} & facebook$DialogResponse


declare type facebook$PaymentsLiteDialogResponse = {
app_id: number,
developer_payload?: string,
payment_id: number,
product_id: string,
purchase_time: number,
purchase_token: string,
signed_request: string
} & facebook$DialogResponse


declare type facebook$LiveDialogResponse = {
id: string,
stream_url: string,
secure_stream_url: string,
status: string
} & facebook$DialogResponse


declare type facebook$CreateOfferDialogResponse = {
id: string,
success: boolean
} & facebook$DialogResponse


declare type facebook$LeadgenDialogResponse = {
formID: string,
success: boolean
} & facebook$DialogResponse


declare type facebook$InstantExperiencesAdsDialogResponse = {
id: string,
success: boolean
} & facebook$DialogResponse


declare type facebook$CollectionAdsDialogResponse = {} & facebook$InstantExperiencesAdsDialogResponse

    }
