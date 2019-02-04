declare module 'jpm' {
        declare module 'sdk/base64' {
        
/**
 * Creates a base-64 encoded ASCII string from a string of binary data
 * @param data the data to encode
 * @param charset The charset of the string to encode (optional). The only accepted value is "utf-8".
In order to encode and decode Unicode strings, the charset parameter needs to be set
 */
declare export function encode(data: string, charset?: string): string

	
/**
 * @param data the encoded data
 * @param charset
 */
declare export function decode(data: string, charset?: string): string

    }

	declare module 'sdk/clipboard' {
        
/**
 * get the contents of the system clipboard
 * @param datatype [text|html|image] Retrieve the clipboard contents only if matching this type
 */
declare export function get(datatype?: "text" | "html" | "image"): string

	
/**
 * Replace the contents of the user's clipboard with the provided data
 * @param data The data to put on the clipboard
 * @param datatype [text|html|image] The type of the data
 */
declare export function set(data: string, datatype?: "text" | "html" | "image"): void

    }

	declare module 'sdk/context-menu' {
        
/**
 * The context determines when the menu item will be visible
 */
declare interface Context {} 
	
/**
 * The page context occurs when the user invokes the context menu on a non-interactive portion of the page
 */
declare export var PageContext: PageContext;
	declare type PageContext = {
(): Object
} & Context

	
/**
 * This context occurs when the menu is invoked on a page in which the user has made a selection
 */
declare export var SelectionContext: SelectionContext;
	declare type SelectionContext = {
(): Object
} & Context

	
/**
 * This context occurs when the menu is invoked on a node that either matches selector, a CSS selector,
 * or has an ancestor that matches
 * @param selector may include multiple selectors separated by commas, e.g., "a[href], img"
 */
declare export var SelectorContext: SelectorContext;
	declare type SelectorContext = {
(selector: string): Object
} & Context

	
/**
 * This context occurs when the menu is invoked on pages with particular URLs
 * also see {@link sdk/page-mod} module which uses a similar match pattern
 * @param matchPattern pattern string or an array of match pattern strings
 */
declare export var URLContext: URLContext;
	declare type URLContext = {
(matchPattern: string): Object
} & Context

	
/**
 * This context occurs when the function returns a true value
 * @param predicateFunction The function is passed an object with properties describing the menu invocation context
 */
declare export var PredicateContext: PredicateContext;
	declare type PredicateContext = {
(predicateFunction: (
context: {
documentType: string,
documentURL: string,
targetName: string,
targetID?: string,
isEditable: boolean,
selectionText?: string,
srcURL?: string,
linkURL?: string,
value?: string
}) => boolean): Object
} & Context

	declare type ItemContext = {
add: (context: Context) => void,
remove: (context: Context) => void
} & Array<Context>

	declare interface Item {
context: ItemContext,
destroy: () => void,
label: string,
image: string | URL,
data: any,
parentMenu?: Menu,
contentScript?: string | string[],
contentScriptFile?: string | string[]
} 
	
/**
 * A menu item
 * @constructor
 */
declare export function Item(
options: {
label: string,
image?: string,
accessKey?: string,
context?: Context | Context[],
contentScript?: string,
contentScriptFile?: string,
data?: any,
onMessage?: (message?: any) => any
}): Item

	
/**
 * @constructor A menu separator
 */
declare export function Separator(): Separator

	declare interface Separator {
parentMenu: Menu,
destroy: () => void
} 
	declare interface Menu {
addItem: (item: ItemMenuSeparator) => void,
removeItem: (item: ItemMenuSeparator) => void,
destroy: () => void,
label: string,
items: ItemMenuSeparator[],
image: string | URL,
context: ItemContext,
parentMenu?: Menu,
contentScript: string | string[],
contentScriptFile: string | string[]
} 
	declare type ItemMenuSeparator = Item | Menu | Separator;
	
/**
 * A labeled menu item that expands into a submenu
 * @contructor
 * @param options
 */
declare export function Menu(
options: {
label: string,
items: ItemMenuSeparator[],
image?: string,
context?: Context[],
contentScript?: string | string[],
contentScriptFile?: string | string[],
onMessage: (message?: any) => void
}): Menu

    }

	declare module 'sdk/hotkeys' {
        declare interface Hotkey {
destroy: () => void
} 
	
/**
 * @contructor Hotkey
Used to define a hotkey combination passing it the combination and a function to be called when the user 
presses that combination
 */
declare export function Hotkey(options: {
combo: string,
onPress: () => void
}): Hotkey

    }

	declare module 'sdk/indexed-db' {
        declare interface IndexedImpl {
indexedDB: IDBFactory,
IDBKeyRange: IDBKeyRange,
DOMException: DOMException
} 
	declare module.exports: typeof IndexedImpl

    }

	declare module 'sdk/l10n' {
        
/**
 * This function takes a string parameter which it uses as an identifier to look up and return a localized string in
 * the locale currently set for Firefox. Localized strings are supplied by the add-on developer in .properties
 * files stored in the add-ons "locale" directory
 * See {@link https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/l10n}
 * @param identifier An identifier for the localization of a particular string in the current locale
 * @param count If you're supplying different localizations for a string for singular or plural forms,
this parameter is the number of items there are in this case
 * @param placeholder If you do not include the count parameter, you can supply one or more placeholder strings that
are to be inserted into the translated string at locations defined by the translator
 */
declare export function get(identifier: string, count?: number, ...placeholder: string[]): string

    }

	declare module 'sdk/notifications' {
        
/**
 * @param options
 * @param A string to display as the message's title
 * @param A string to display as the body of the message
 * @param The URL of an icon to display inside the message. It may be a remote URL, a data URI,
or a URL returned by the {@link sdk/self} module
 * @param A function to be called when the user clicks the message. It will be passed the value of data
 * @param A string that will be passed to onClick
 */
declare export function notify(
options: {
title?: string,
text?: string,
iconURL?: string,
onClick?: (data: string) => any,
data?: string
}): void

    }

	declare module 'sdk/page-mod' {
        
/**
 * @constructor
 * @param
 * @param Lists stylesheets to attach, supplied as strings
 * @param Lists stylesheets to attach, supplied in separate files
 * @param Defines read-only values accessible to content scripts
 * @param Controls whether to attach scripts to tabs that were already open when the page-mod
was created, and whether to attach scripts to iframes as well as the topmost document
 * @param Controls the point during document load at which content scripts are attached
 * @param Has the same syntax as include, but specifies the URLs to which content scripts should not
be attached, even if they match include: so it's a way of excluding a subset of the URLs
that include specifies. The exclude option is new in Firefox 32
 * @param This event is emitted when the page-mod's content scripts are attached to a document
whose URL matches the page-mod's include pattern
 * @param This event is emitted when an uncaught runtime error occurs in one of the page-mod's content scripts
 */
declare export function PageMod(
options: {
include: string | string[] | RegExp | RegExp[],
contentScript?: string | string[],
contentScriptFile?: string | string[],
contentStyle?: string | string[],
contentStyleFile?: string | string[],
contentScriptOptions?: any,
attachTo?: attachmentMode | attachmentMode[],
contentScriptWhen?: "start" | "ready" | "end",
exclude?: string | string[],
onAttach?: (worker: FFAddonSDK$FFAddonSDK$ContentWorker) => any,
onError?: (error: Error) => any
}): PageMod

	declare type attachmentMode = "existing" | "top" | "frame";
	declare interface PageMod {
destroy: () => void,
include: string | string[] | RegExp | RegExp[]
} 
    }

	declare module 'sdk/page-worker' {
        
/**
 * @constructor
 * @param The URL of the content to load in the worker
 * @param A string or an array of strings containing the texts of content scripts to load.
Content scripts specified by this option are loaded after those specified by the
contentScriptFile option.
 * @param A local file URL or an array of local file URLs of content scripts to load
Content scripts specified by this option are loaded before those specified
by the contentScript option
 * @param This is useful when your page worker loads a page which will redirect to other pages.
These define the documents to which the page-worker's content worker applies
 * @param When to load the content scripts
"start": load content scripts immediately after the document element for the page
is inserted into the DOM, but before the DOM content itself has been loaded
"ready": load content scripts once DOM content has been loaded, corresponding
to the DOMContentLoaded event
"end": load content scripts once all the content (DOM, JS, CSS, images) for the
page has been loaded, at the time the window.onload event fires
 * @param Read-only value exposed to content scripts under self.options property
 */
declare export function Page(
options: {
contentURL?: string,
contentScript?: string | string[],
contentScriptFile?: string | string[],
contentScriptWhen?: "start" | "ready" | "end",
onMessage?: (message: string) => any,
allow?: {
script: boolean
},
contentScriptOptions?: any,
include?: string | string[] | RegExp | RegExp[]
}): PageWorker

	declare interface PageWorker {
port: FFAddonSDK$FFAddonSDK$Port,
contentURL?: string,
destroy: () => void,
postMessage: (message: string) => void,
on: (event: "message" | "error", handler: (arg?: "message" | Error) => any) => void,
removeListener: (event: string, listener: Function) => void,
allow?: {
script: boolean
},
include?: string | string[] | RegExp | RegExp[],
contentScriptFile?: string | string[],
contentScript?: string | string[]
} 
    }

	declare module 'sdk/panel' {
        
/**
 * @constructor
 * @param The URL of the content to load in the panel. That is, they can't refer to remote scripts
 * @param The width of the panel in pixels
 * @param The height of the panel in pixels
 * @param A string or an array of strings containing the texts of content scripts to load.
Content scripts specified by this property are loaded after those specified by the
contentScriptFile property
 * @param A URL or an array of URLs. The URLs point to scripts to load into the panel
 * @param
 * @param A string or an array of strings containing the texts of stylesheets to load.
Stylesheets specified by this property are loaded after those specified by the
contentStyleFile property
 * @param A URL or an array of URLs. The URLs point to CSS stylesheets to load into the panel
 * @param The position of the panel. Ignored if the panel is opened by a widget.
This may be one of three things:
1. a toggle button. If this is supplied the panel will be shown attached to the button
2. a widget object. If this is supplied the panel will be shown attached to the widget.
3. an object which specifies where in the window the panel should be shown
 * @param Set to false to prevent taking the focus away when the panel is shown.
Only turn this off if necessary, to prevent accessibility issues
 * @param An optional object describing permissions for the content. It should contain a single key
named script whose value is a boolean that indicates whether or not to execute script in the content
 * @param Whether to show a context menu when the user context-clicks in the panel.
The context menu will be the same one that's displayed in web pages
 */
declare export function Panel(
options: {
contentURL?: string | URL,
width?: number,
height?: number,
contentScript?: string | string[],
contentScriptFile?: string | string[],
contentScriptWhen?: "start" | "ready" | "end",
contentScriptOptions?: any,
contentStyle?: string | string[],
contentStyleFile?: string | string[],
position?: PanelPosition,
allow?: {
script?: boolean
},
focus?: boolean,
contextMenu?: boolean,
onMessage?: (message: string) => any,
onShow?: () => any,
onHide?: () => any,
onError?: (error: Error) => any
}): Panel

	declare interface Panel {
show: (
options?: {
width?: number,
height?: number,
position?: PanelPosition,
focus?: boolean
}) => void,
hide: () => void,
resize: (width: number, height: number) => void,
destroy: () => void,
postMessage: (message: string) => void,
on: (
event: "show" | "hide" | "message" | "error",
handler: (arg?: Error | any) => any) => void,
removeListener: (event: string, listener: Function) => void,
port: FFAddonSDK$FFAddonSDK$Port,
isShowing: boolean,
height: number,
width: number,
focus: boolean,
contentURL?: string | URL,
allow?: {
script: boolean
},
contentScriptFile?: string | string[],
contentScript?: string | string[],
contentScriptWhen: "start" | "ready" | "end",
contentScriptOptions?: any
} 
	declare type PanelPosition = FFAddonSDK$FFAddonSDK$ToggleButton | FFAddonSDK$FFAddonSDK$Widget | {
top?: number,
right?: number,
bottom?: number,
left?: number
};
    }

	declare module 'sdk/passwords' {
        
/**
 * This function is used to retrieve a credential, or a list of credentials, stored in the Password Manager
 * @param The callback function that is called once the function completes successfully
 */
declare export function search(
options: {
onComplete: (credentials: Credential[]) => any,
username?: string,
data$url?: string,
password?: string,
formSubmitURL?: string,
realm?: string,
usernameField?: string,
passwordField?: string,
onError?: (error: FFAddonSDK$FFAddonSDK$NSIException) => any
}): void

	
/**
 * This function is used to store a credential in the Password Manager.
 * It takes an options object as an argument: this contains all the properties for the new credential.
 * As different sorts of credentials contain different properties, the appropriate options differ depending
 * on the sort of credential being stored
 */
declare export function store(
options: Credential & {
onComplete?: () => any,
onError?: (error: FFAddonSDK$FFAddonSDK$NSIException) => any
}): void

	
/**
 * Removes a stored credential
 */
declare export function remove(
options: Credential & {
onComplete?: () => any,
onError?: (error: FFAddonSDK$FFAddonSDK$NSIException) => any
}): void

	declare interface Credential {
username: string,
password: string,
data$url?: string,
formSubmitURL?: string,
realm?: string,
usernameField?: string,
passwordField?: string
} 
    }

	declare module 'sdk/private-browsing' {
        declare export function isPrivate(
object: FFAddonSDK$FFAddonSDK$Tab | FFAddonSDK$FFAddonSDK$ContentWorker | FFAddonSDK$FFAddonSDK$BrowserWindow): boolean

    }

	declare module 'sdk/querystring' {
        
/**
 * Utility functions for working with query strings
 * Serializes an object containing name:value pairs into a query string
 * @param {Object} object The data to convert to a query string
 * @param separator The string to use as a separator between each name:value pair
 * @param assignment The string to use between each name and its corresponding value
 */
declare export function stringify(object: Object, separator?: string, assignment?: string): string

	
/**
 * Parse a query string into an object containing name:value pairs
 */
declare export function parse(querystring: string, separator?: string, assignment?: string): Object

	
/**
 * The escape function used by stringify to encodes a string safely matching RFC 3986 for
 * application/x-www-form-urlencoded
 */
declare export function escape(query: string): string

	
/**
 * The unescape function used by parse to decode a string safely
 */
declare export function unescape(query: string): string

    }

	declare module 'sdk/request' {
        
/**
 * This constructor creates a request object that can be used to make network requests
 * @param This is the url to which the request will be made
 * @param This function will be called when the request has received a response
(or in terms of XHR, when readyState == 4)
 * @param An unordered collection of name/value pairs representing headers to send with the request
 * @param The content to send to the server. If content is a string, it should be URL-encoded
(use encodeURIComponent). If content is an object, it should be a collection of name/value pairs.
Nested objects & arrays should encode safely.
For GET and HEAD requests, the query string (content) will be appended to the URL.
For POST and PUT requests, it will be sent as the body of the request
 * @param The type of content to send to the server
This explicitly sets the Content-Type header
 * @param Use this string to override the MIME type returned by the server in the response's
Content-Type header. You can use this to treat the content as a different MIME type,
or to force text to be interpreted using a specific character
 * @param If true, the request will be sent without cookies or authentication headers
 * @constructor
 */
declare export function Request(
options: {
data$url?: string | FFAddonSDK$FFAddonSDK$SDKURL,
onComplete?: (response: Response) => any,
headers?: Object,
content?: string | Object,
contentType?: string,
anonymous?: boolean,
overrideMimeType?: string
}): Request

	declare export function Request<ResponseType>(
options: {
data$url?: string | FFAddonSDK$FFAddonSDK$SDKURL,
onComplete?: (response: STResponse<ResponseType>) => any,
headers?: Object,
content?: string | Object,
contentType?: string,
anonymous?: boolean,
overrideMimeType?: string
}): STRequest<ResponseType>

	declare interface BaseRequest {
get: () => void,
post: () => void,
head: () => void,
put: () => void,
delete: () => void,
data$url: string | FFAddonSDK$FFAddonSDK$SDKURL,
headers: Object,
content: string,
contentType: string
} 
	declare type Request = {
response: Response
} & BaseRequest

	declare type STRequest<ResponseType> = {
response: STResponse<ResponseType>
} & BaseRequest

	declare interface BaseResponse {
data$url: string,
text: string,
status: number,
statusText: string,
headers: Object,
anonymous: boolean
} 
	declare type Response = {
json: Object
} & BaseResponse

	declare interface STResponse<T> {
json: T
} 
    }

	declare module 'sdk/selection' {
        declare export function on(event: "select" | "select", handler: () => any): void

	declare export function removeListener(event: "select" | "select", handler: Function): void

	
/**
 * Gets or sets the current selection as plain text. Setting the selection removes all current selections,
 * inserts the specified text at the location of the first selection, and selects the new text.
 * Getting the selection when there is no current selection returns null.
 * Setting the selection when there is no current selection throws an exception
 * Getting the selection when isContiguous is true returns the text of the first selection
 */
declare export var text: string;
	
/**
 * Gets or sets the current selection as HTML. Setting the selection removes all current selections,
 * inserts the specified text at the location of the first selection, and selects the new text.
 * Getting the selection when there is no current selection returns null.
 * Setting the selection when there is no current selection throws an exception.
 * Getting the selection when isContiguous is true returns the text of the first selection
 */
declare export var html: string;
	
/**
 * true if the current selection is a single, contiguous selection,
 * and false if there are two or more discrete selections, each of which may or may not be spatially adjacent.
 */
declare export var isContiguous: boolean;
    }

	declare module 'sdk/self' {
        
/**
 * This property represents an add-on associated unique URI string
 * This URI can be used for APIs which require a valid URI string, such as the passwords module
 */
declare export var uri: string;
	
/**
 * This property is a printable string that is unique for each add-on.
 * It comes from the id property set in the package.json file in the main package (i.e. the package in which you run jpm xpi)
 * While not generally of use to add-on code directly, it can be used by internal API code to index local storage
 * and other resources that are associated with a particular add-on.
 */
declare export var id: string;
	
/**
 * This property contains the add-on's short name. It comes from the name property in the main package's package.json file
 */
declare export var name: string;
	
/**
 * This property contains the add-on's version string. It comes from the version property set in the package.json file in the main package
 */
declare export var version: string;
	
/**
 * A property that indicates why the addon was loaded
 */
declare export var loadReason: "install"
| "enable"
| "startup"
| "upgrade"
| "downgrade";
	
/**
 * This property indicates whether or not the add-on supports private browsing
 * It comes from the private-browsing key in the add-on's package.json file
 */
declare export var isPrivateBrowsingSupported: boolean;
	
      declare var npm$namespace$data: {
        load: typeof data$load,
url: typeof data$url,
        
      }

/**
 * The data.load() method returns the contents of an embedded data file, as a string.
 * It is most useful for data that will be modified or parsed in some way, such as JSON, XML, plain text,
 * or perhaps an HTML template. For data that can be displayed directly in a content frame, use data.url()
 * @param name The filename to be read, relative to the package's data directory.
Each package that uses the self module will see its own data directory
 */
declare export function data$load(name: string): string



/**
 * The data.url() method returns a resource:// url that points at an embedded data file.
 * It is most useful for data that can be displayed directly in a content frame.
 * The url can be passed to a content frame constructor, such as the {@link Panel}
 */
declare export function data$url(name: string): string

    }

	declare module 'sdk/simple-prefs' {
        
/**
 * Registers an event listener that will be called when a preference is changed
 * @param prefName The name of the preference to watch for changes. Empty name '' listens for all preferences
 * @param listener
 */
declare export function on(prefName: string, listener: (prefName: string) => any): void

	
/**
 * Unregisters an event listener for the specified preference
 */
declare export function removeListener(prefName: string, listener: Function): void

	declare export var prefs: Object;
    }

	declare module 'sdk/simple-storage' {
        declare export var storage: any;
	declare export var quotaUsage: number;
	declare export function on(event: "OverQuota" | "OverQuota", handler: () => any): void

    }

	declare module 'sdk/system' {
        
/**
 * Quits the host application with the specified code
 * @param code
 */
declare export function exit(code: number): void

	
/**
 * Firefox enables you to get the path to certain "special" directories, such as the desktop or the profile directory.
 * This function exposes that functionality to add-on authors
 * @param id see [
 * @link https://developer.mozilla.org/en-US/docs/Code_snippets/File_I_O#Getting_files_in_special_directories}
 */
declare export function pathFor(id: string): string

	
/**
 * This object provides access to environment variables
 */
declare export var env: any;
	
/**
 * The type of operating system you're running on
 */
declare export var platform: string;
	
/**
 * The type of processor architecture you're running on. This will be one of: "arm","ia32", or"x64"
 */
declare export var architecture: string;
	
/**
 * The type of compiler used to build the host application. For example: "msvc", "n32", "gcc2", "gcc3", "sunc", "ibmc"
 */
declare export var compiler: string;
	
/**
 * An identifier for the specific build, derived from the build date. This is useful if you're trying to target individual nightly builds
 */
declare export var build: string;
	
/**
 * The UUID for the host application. For example, "{ec8030f7-c20a-464f-9b0e-13a3a9e97384}" for Firefox
 */
declare export var id: string;
	
/**
 * The human-readable name for the host application. For example, "Firefox"
 */
declare export var name: string;
	
/**
 * The version of the host application
 */
declare export var version: string;
	
/**
 * The version of XULRunner that underlies the host application
 */
declare export var platformVersion: string;
	
/**
 * The name of the host application's vendor, for example: "Mozilla"
 */
declare export var vendor: string;
    }

	declare module 'sdk/tabs' {
        
/**
 * Opens a new tab. The new tab will open in the active window or in a new window, depending on the inNewWindow option
 * @param options String URL to be opened in the new tab or an options object
 * @param Determine whether the new tab should be private or not
If your add-on does not support private browsing this will have no effect
 * @param tab will be opened to the right of the active tab and will not be active
 * @param This event is emitted when a new tab is opened. This does not mean that the content has loaded,
only that the browser tab itself is fully visible to the user.
Properties relating to the tab's content (for example: title, favicon, and url) will not be
correct at this point. If you need to access these properties, listen for the ready event.
 * @param This event is emitted when a tab is closed. When a window is closed this event will be
emitted for each of the open tabs in that window
 * @param This event is emitted when the DOM for a tab's content is ready.
It is equivalent to the DOMContentLoaded event for the given content page.
A single tab will emit this event every time the DOM is loaded: so it will be emitted again
if the tab's location changes or the content is reloaded.
After this event has been emitted, all properties relating to the tab's content can be used.
 */
declare export function open(
options: string | {
data$url: string,
inNewWindow?: boolean,
inBackground?: boolean,
isPinned?: boolean,
onOpen?: (tab: FFAddonSDK$FFAddonSDK$Tab) => any,
onClose?: (tab: FFAddonSDK$FFAddonSDK$Tab) => any,
onReady?: (tab: FFAddonSDK$FFAddonSDK$Tab) => any,
onLoad?: (tab: FFAddonSDK$FFAddonSDK$Tab) => any,
onPageShow?: (tab: FFAddonSDK$FFAddonSDK$Tab) => any,
onActivate?: (tab: FFAddonSDK$FFAddonSDK$Tab) => any,
onDeactivate?: (tab: FFAddonSDK$FFAddonSDK$Tab) => any
}): void

	declare export function on(
event: "open"
| "close"
| "ready"
| "load"
| "pageshow"
| "activate"
| "deactivate",
handler: (tab: FFAddonSDK$FFAddonSDK$Tab) => any): void

	
/**
 * The currently active tab in the active window
 */
declare export var activeTab: FFAddonSDK$FFAddonSDK$Tab;
	
/**
 * The number of open tabs across all windows
 */
declare export var length: number;
    }

	declare module 'sdk/timers' {
        
/**
 * Schedules callback to be called in ms milliseconds. Any additional arguments are passed straight through to the callback
 */
declare export function setTimeout(callback: (...args: any[]) => any, timeoutMS: number): TIMEOUT_ID

	
/**
 * Given an ID returned from setTimeout(), prevents the callback with the ID from being called (if it hasn't yet been called)
 */
declare export function clearTimeout(timerID: TIMEOUT_ID): void

	
/**
 * Schedules callback to be called repeatedly every ms milliseconds
 * Any additional arguments are passed straight through to the callback
 */
declare export function setInterval(callback: (...args: any[]) => any, timeoutMS: number): INTERVAL_ID

	
/**
 * Given an ID returned from setInterval(), prevents the callback with the ID from being called again
 */
declare export function clearInterval(intervalID: INTERVAL_ID): void

	declare type TIMEOUT_ID = number;
	declare type INTERVAL_ID = number;
    }

	declare module 'sdk/ui/button/action' {
        
/**
 * Creates an action button
 * @constructor
 * @param The button's ID. This is used internally to keep track of this button
The ID must be unique within your add-on
 * @param The button's human-readable label. When the button is in the toolbar,
this appears in a tooltip, and when the button is in the menu,
it appears underneath the button as a legend
 * @param One or more icons for the button
 */
declare export function ActionButton(
options: {
id: string,
label: string,
icon: FFAddonSDK$FFAddonSDK$Icon,
onClick?: (state: FFAddonSDK$FFAddonSDK$ActionButton) => any,
onChange?: (state: FFAddonSDK$FFAddonSDK$ActionButtonState) => any,
disabled?: boolean,
badge?: string | number,
badgeColor?: string
}): FFAddonSDK$FFAddonSDK$ActionButton

    }

	declare module 'sdk/ui/button/toggle' {
        
/**
 * Creates a toggle button
 * @constructor
 * @param The button's ID. This is used internally to keep track of this button
The ID must be unique within your add-on
 * @param The button's human-readable label. When the button is in the toolbar,
this appears in a tooltip, and when the button is in the menu,
it appears underneath the button as a legend
 * @param One or more icons for the button
 */
declare export function ToggleButton(
options: {
id: string,
label: string,
icon: FFAddonSDK$FFAddonSDK$Icon,
onChange?: (state: FFAddonSDK$FFAddonSDK$ToggleButtonState) => any,
onClick?: (state: FFAddonSDK$FFAddonSDK$ToggleButtonState) => any,
badge?: string | number,
badgeColor?: string,
disabled?: boolean,
checked?: boolean
}): FFAddonSDK$FFAddonSDK$ToggleButton

    }

	declare module 'sdk/ui/frame' {
        
/**
 * Creates a frame. Once created, the frame needs to be added to a toolbar for it to be visible
 * @param A URL pointing to the HTML file specifying the frame's content.
The file must be bundled with the add-on under its "data" directory
 * @param The frame's name. This must be unique within your add-on.
This is used to generate an ID to to keep track of the frame. If you don't supply a name, the ID is derived from
the frame's URL, meaning that if you don't supply a name, you may not create two frames with the same URL
 * @param This event is emitted while a frame instance is being loaded, at the point where it becomes
possible to interact with the frame although sub-resources may still be in the process of loading
It's the equivalent of the point where the frame's document.readyState becomes "interactive"
 * @param This event is emitted whenever a new frame instance is constructed and the browser has
started to load its document: for example, when the user opens a new browser window, if that window has a
toolbar containing this frame. Since the event is dispatched asynchronously, the document may already be
loaded by the time the event is received.
At this point, you should not try to send messages to scripts hosted in the frame
because the frame scripts may not have been loaded
 * @param This event is emitted when a frame instance is unloaded: for example, when the user
closes a browser window, if that window has a toolbar containing this frame.
After receiving this message, you ahould not attempt to communicate with the frame scripts
 * @constructor
 */
declare export function Frame(
options: {
data$url: string,
name?: string,
onMessage?: (message: FFAddonSDK$FFAddonSDK$FrameEvent) => any,
onReady?: (event: FFAddonSDK$FFAddonSDK$FrameEvent) => any,
onLoad?: (event: FFAddonSDK$FFAddonSDK$FrameEvent) => any,
onAttach?: (event: FFAddonSDK$FFAddonSDK$FrameEvent) => any,
onDetach?: (event: FFAddonSDK$FFAddonSDK$FrameEvent) => any
}): FFAddonSDK$FFAddonSDK$Frame

    }

	declare module 'sdk/ui/toolbar' {
        
/**
 * @constructor
 * @param The toolbar's title. This appears as the name of the toolbar in the Firefox "Toolbars" menu
It must be unique
 * @param An array of items to appear in the toolbar. Each item in items must be an action button,
a toggle button, or a frame instance. Buttons each take up a fixed width.
If more than one frame is supplied here, the frames each occupy an equal vertical strip of the toolbar
 * @param This event is emitted when the toolbar is first loaded.
Note that since there is only one toolbar for the whole browser, opening another browser window does not
cause this event to be emitted again. After this event the toolbar's properties are available
 */
declare export function Toolbar(
options: {
title: string,
items: ToolbarItem[],
hidden?: boolean,
onAttach?: (toolbar: Toolbar) => any,
onDetach?: (toolbar: Toolbar) => any,
onShow?: (toolbar: Toolbar) => any,
onHide?: (toolbar: Toolbar) => any
}): Toolbar

	declare interface Toolbar {
title: string,
items: ToolbarItem[],
hidden: boolean,
on: (
event: "show" | "hide" | "attach" | "detach",
handler: (toolbar: Toolbar) => any) => void,
once: (
event: "show" | "hide" | "attach" | "detach",
handler: (toolbar: Toolbar) => any) => void,
removeListener: (event: "show" | "hide" | "attach" | "detach", handler: Function) => void,
off: (event: "show" | "hide" | "attach" | "detach", handler: Function) => void,
destroy: () => void
} 
	declare type ToolbarItem = FFAddonSDK$FFAddonSDK$Frame | FFAddonSDK$FFAddonSDK$ActionButton | FFAddonSDK$FFAddonSDK$ToggleButton;
    }

	declare module 'sdk/ui/sidebar' {
        
/**
 * @constructor
 * @param The id of the sidebar. This is used to identify this sidebar in its chrome window. It must be unique
 */
declare export function Sidebar(
options: {
id?: string,
title: string,
data$url: string,
onShow?: () => any,
onHide?: () => any,
onAttach?: (worker: SidebarWorker) => any,
onDetach?: () => any,
onReady?: (worker: SidebarWorker) => any
}): Sidebar

	declare interface Sidebar {
id: string,
title: string,
data$url: string,
show: (window?: FFAddonSDK$FFAddonSDK$BrowserWindow) => void,
hide: (window?: FFAddonSDK$FFAddonSDK$BrowserWindow) => void,
on: (
event: "show"
| "hide"
| "attach"
| "detach"
| "ready",
handler: (worker: SidebarWorker) => any) => void,
once: (
event: "show"
| "hide"
| "attach"
| "detach"
| "ready",
handler: (worker: SidebarWorker) => any) => void,
removeListener: (
event: "show"
| "hide"
| "attach"
| "detach"
| "ready",
handler: Function) => void,
dispose: () => void
} 
	declare interface SidebarWorker {
port: FFAddonSDK$FFAddonSDK$Port
} 
    }

	declare module 'sdk/url' {
        
/**
 * The URL constructor creates an object that represents a URL, verifying that the provided string is a valid URL in the process.
 * Any API in the SDK which has a URL parameter will accept URL objects, not raw strings, unless otherwise noted
 * @constructor
 * @param source A string to be converted into a URL. If source is not a valid URI, this constructor will throw an exception
 * @param base Used to resolve relative source URLs into absolute ones
 */
declare export function URL(source: string, base?: string): FFAddonSDK$FFAddonSDK$SDKURL

	
/**
 * The DataURL constructor creates an object that represents a data: URL,
 * verifying that the provided string is a valid data: URL in the process
 * @constructor
 * @param uri A string to be parsed as Data URL. If is not a valid URI, this constructor will throw an exception
 */
declare export function DataURL(uri: string): DataURL

	
/**
 * Attempts to convert the given URL to a native file path. This function will automatically attempt to resolve
 * non-file protocols, such as the resource: protocol, to their place on the file system.
 * An exception is raised if the URL can't be converted; otherwise, the native file path is returned as a string
 */
declare export function toFilename(data$url: FFAddonSDK$FFAddonSDK$SDKURL): string

	
/**
 * Converts the given native file path to a file: URL
 */
declare export function toFileName(data$url: string): string

	
/**
 * Checks the validity of a URI. isValidURI("http://mozilla.org") would return true,
 * whereas isValidURI("mozilla.org") would return false
 */
declare export function isValidURI(uri: string): boolean

	
/**
 * Returns the top-level domain for the given URL: that is, the highest-level domain under which individual domains may be registered
 */
declare export function getTLD(data$url: string): string

	declare interface DataURL {
function toString() { [native code] }: () => string,
mimeType: string,
parameters: Object,
base64: string,
data: string
} 
    }

	declare module 'sdk/windows' {
        declare export var browserWindows: BrowserWindows;
	declare type BrowserWindows = {

/**
 * Open a new window
 * @param determines whether the new window should be private or not
 */
open: (
options: string | {
data$url: string,
isPrivate?: boolean,
onOpen?: (window: FFAddonSDK$FFAddonSDK$BrowserWindow) => any,
onClose?: (window: FFAddonSDK$FFAddonSDK$BrowserWindow) => any,
onActivate?: (window: FFAddonSDK$FFAddonSDK$BrowserWindow) => any,
onDeactivate?: (window: FFAddonSDK$FFAddonSDK$BrowserWindow) => any
}) => FFAddonSDK$FFAddonSDK$BrowserWindow,
on: (
event: "open" | "close" | "activate" | "deactivate",
handler: (window: FFAddonSDK$FFAddonSDK$BrowserWindow) => any) => void,
activeWindow: FFAddonSDK$FFAddonSDK$BrowserWindow
} & Array<FFAddonSDK$FFAddonSDK$BrowserWindow>

    }

	declare interface FFAddonSDK$BrowserWindow {
title: string,
activate: () => void,
close: (callback?: () => void) => void,
tabs: FFAddonSDK$Tab[]
} 

declare interface FFAddonSDK$SDKURL {
scheme: string,
userPass: string,
host: string,
port: string,
path: string,
hostname: string,
pathname: string,
hash: string,
href: string,
origin: string,
protocol: string,
search: string,
function toString() { [native code] }: () => string,
toJSON: () => string
} 

declare interface FFAddonSDK$FrameEvent {
origin: string,
source: FFAddonSDK$Frame,
data?: any
} 

declare interface FFAddonSDK$Frame {
data$url: URL,
postMessage: (message: string, target: string) => void,
on: (
event: "attach"
| "detach"
| "load"
| "ready"
| "message",
handler: (event: FFAddonSDK$FrameEvent) => any) => void,
once: (
event: "attach"
| "detach"
| "load"
| "ready"
| "message",
handler: (event: FFAddonSDK$FrameEvent) => any) => void,
removeListener: (
event: "attach"
| "detach"
| "load"
| "ready"
| "message",
handler: Function) => void,
off: (
event: "attach"
| "detach"
| "load"
| "ready"
| "message",
handler: Function) => void,
destroy: () => void
} 

declare type FFAddonSDK$Icon = string | {
"16"?: string,
"32"?: string,
"64"?: string
};

declare interface FFAddonSDK$ToggleButtonState {
id: string,
label: string,
badge: string,
checked: boolean,
disabled: boolean
} 

declare type FFAddonSDK$ToggleButton = {
click: () => void,
on: (
event: "click" | "change",
handler: (state: FFAddonSDK$ToggleButtonState) => any) => void,
once: (
event: "click" | "change",
handler: (state: FFAddonSDK$ToggleButtonState) => any) => void,
removeListener: (event: string, handler: Function) => void,
state: (
target: "window"
| "tab"
| FFAddonSDK$Tab
| FFAddonSDK$BrowserWindow
| FFAddonSDK$ToggleButton,
state?: {
disabled?: boolean,
label?: string,
icon?: FFAddonSDK$Icon,
checked?: boolean,
badge?: string | number,
badgeColor?: string
}) => FFAddonSDK$ToggleButtonState,
destroy: () => void
} & FFAddonSDK$ToggleButtonState


declare interface FFAddonSDK$ActionButtonState {
id: string,
label: string,
disabled: boolean,
icon: FFAddonSDK$FFAddonSDK$Icon,
badge: string | number,
badgeColor: string
} 

declare type FFAddonSDK$ActionButton = {
state: (
target: FFAddonSDK$BrowserWindow
| FFAddonSDK$Tab
| FFAddonSDK$ActionButton
| "window"
| "tab",
state?: {
disabled?: boolean,
label?: string,
icon?: FFAddonSDK$Icon
}) => FFAddonSDK$ActionButtonState,
click: () => void,
destroy: () => void,
on: (
event: "click" | "click",
handler: (state: FFAddonSDK$ActionButtonState) => any) => void,
once: (
event: "click" | "click",
handler: (state: FFAddonSDK$ActionButtonState) => any) => void,
removeListener: (event: "click" | "click", handler: Function) => void
} & FFAddonSDK$ActionButtonState


declare interface FFAddonSDK$Tab {
title: string,
data$url: string,
id: string,
favicon: string,
contentType: string,
index: number,
isPinned: boolean,
window: FFAddonSDK$BrowserWindow,
readyState: "uninitialized" | "loading" | "interactive" | "complete",
on: (
event: "ready"
| "load"
| "pageshow"
| "activate"
| "deactivate"
| "close",
handler: (tab: FFAddonSDK$Tab) => any) => void,
attach: (
options: {
contentScript?: string | string[],
contentScriptFile?: string | string[],
contentScriptOptions?: Object,
onMessage?: (message: string) => any,
onError?: (error: Error) => any
}) => FFAddonSDK$ContentWorker,
activate: () => void,
pin: () => void,
unpin: () => void,
close: (afterClose?: () => any) => void,
reload: () => void,
getThumbnail: () => string
} 


/**
 * The SDK port API
 * @see [port API]{@link https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/using_port}
 */
declare interface FFAddonSDK$Port {
emit: (event: string, data?: any) => void,
on: (event: string, handler: (data?: any) => any) => void
} 

declare interface FFAddonSDK$ContentWorker {
new (
options: {
window: Window,
contentScript?: string | string[],
contentScriptFile?: string | string[],
onMessage: (data?: any) => any,
onError: (data?: any) => any
}): FFAddonSDK$ContentWorker,
data$url: URL,
port: FFAddonSDK$Port,
tab: FFAddonSDK$Tab,
on: (event: "detach" | "message" | "error", handler: () => any) => void,
postMessage: (data?: any) => void,
destroy: () => void
} 

declare interface FFAddonSDK$Widget {} 


/**
 * @see [nsIException]{@link https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIException}
 */
declare interface FFAddonSDK$NSIException {
lineNumber: number,
columnNumber: number,
data: any,
filename: string,
inner?: FFAddonSDK$NSIException,
location?: any,
message: string,
name: string,
result: any,
function toString() { [native code] }: () => string
} 
    }
