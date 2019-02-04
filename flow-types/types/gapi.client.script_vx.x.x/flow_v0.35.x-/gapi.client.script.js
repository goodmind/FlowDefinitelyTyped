declare module 'gapi.client.script' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        scripts: typeof client$scripts,
      }

/**
 * Load Google Apps Script Execution API v1
 */
declare function client$load(name: "script", version: "v1"): PromiseLike<void>


declare function client$load(name: "script", version: "v1", callback: () => any): void


declare var client$scripts: script$script$ScriptsResource;

declare interface script$ExecutionError {

/**
 * The error message thrown by Apps Script, usually localized into the user's
 * language.
 */
errorMessage?: string,

/**
 * The error type, for example `TypeError` or `ReferenceError`. If the error
 * type is unavailable, this field is not included.
 */
errorType?: string,

/**
 * An array of objects that provide a stack trace through the script to show
 * where the execution failed, with the deepest call first.
 */
scriptStackTraceElements?: script$ScriptStackTraceElement[]
} 

declare interface script$ExecutionRequest {

/**
 * If `true` and the user is an owner of the script, the script runs at the
 * most recently saved version rather than the version deployed for use with
 * the Execution API. Optional; default is `false`.
 */
devMode?: boolean,

/**
 * The name of the function to execute in the given script. The name does not
 * include parentheses or parameters.
 */
function?: string,

/**
 * The parameters to be passed to the function being executed. The object type
 * for each parameter should match the expected type in Apps Script.
 * Parameters cannot be Apps Script-specific object types (such as a
 * `Document` or a `Calendar`); they can only be primitive types such as
 * `string`, `number`, `array`, `object`, or `boolean`. Optional.
 */
parameters?: any[],

/**
 * For Android add-ons only. An ID that represents the user's current session
 * in the Android app for Google Docs or Sheets, included as extra data in the
 * [`Intent`](https://developer.android.com/guide/components/intents-filters.html)
 * that launches the add-on. When an Android add-on is run with a session
 * state, it gains the privileges of a
 * [bound](https://developers.google.com/apps-script/guides/bound) script &mdash;
 * that is, it can access information like the user's current cursor position
 * (in Docs) or selected cell (in Sheets). To retrieve the state, call
 * `Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState")`.
 * Optional.
 */
sessionState?: string
} 

declare interface script$ExecutionResponse {

/**
 * The return value of the script function. The type matches the object type
 * returned in Apps Script. Functions called through the Execution API cannot
 * return Apps Script-specific objects (such as a `Document` or a `Calendar`);
 * they can only return primitive types such as a `string`, `number`, `array`,
 * `object`, or `boolean`.
 */
result?: any
} 

declare interface script$Operation {

/**
 * This field is only used with asynchronous executions and indicates whether or not the script execution has completed. A completed execution has a
 * populated response field containing the `ExecutionResponse` from function that was executed.
 */
done?: boolean,

/**
 * If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, this field will contain a `Status` object. The `Status`
 * object's `details` field will contain an array with a single `ExecutionError` object that provides information about the nature of the error.
 */
error?: script$Status,

/**
 * This field is not used.
 */
metadata?: Record<string, any>,

/**
 * If the script function returns successfully, this field will contain an `ExecutionResponse` object with the function's return value as the object's
 * `result` field.
 */
response?: Record<string, any>
} 

declare interface script$ScriptStackTraceElement {

/**
 * The name of the function that failed.
 */
function?: string,

/**
 * The line number where the script failed.
 */
lineNumber?: number
} 

declare interface script$Status {

/**
 * The status code. For this API, this value will always be 3, corresponding to an <code>INVALID_ARGUMENT</code> error.
 */
code?: number,

/**
 * An array that contains a single `ExecutionError` object that provides information about the nature of the error.
 */
details?: Array<Record<string, any>>,

/**
 * A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the
 * [`google.rpc.Status.details`](google.rpc.Status.details) field, or localized by the client.
 */
message?: string
} 

declare interface script$ScriptsResource {

/**
 * Runs a function in an Apps Script project. The project must be deployed
 * for use with the Apps Script Execution API.
 * 
 * This method requires authorization with an OAuth 2.0 token that includes at
 * least one of the scopes listed in the [Authorization](#authorization)
 * section; script projects that do not require authorization cannot be
 * executed through this API. To find the correct scopes to include in the
 * authentication token, open the project in the script editor, then select
 * &#42;&#42;File > Project properties&#42;&#42; and click the &#42;&#42;Scopes&#42;&#42; tab.
 */
run(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The script ID of the script to be executed. To find the script ID, open
 * the project in the script editor and select &#42;&#42;File > Project properties&#42;&#42;.
 */
scriptId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<script$Operation>
} 
    }
