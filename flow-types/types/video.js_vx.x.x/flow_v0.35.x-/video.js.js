declare module 'video.js' {
        
/**
 * Doubles as the main function for users to create a inplayer instance and also
 * the main library object.
 * The `videojs` function can be used to initialize or retrieve a player.
 * @param id Video element or video element ID
 * @param options Optional options object for config/settings
 * @param ready Optional ready callback
 * @return A player instance
 */
declare function videojs(
id: any,
options?: videojs$videojs$PlayerOptions,
ready?: () => void): videojs$videojs$Player

	declare export default typeof videojs

	
      declare var npm$namespace$videojs: {
        addLanguage: typeof videojs$addLanguage,
bind: typeof videojs$bind,
createTimeRanges: typeof videojs$createTimeRanges,
formatTime: typeof videojs$formatTime,
getAllPlayers: typeof videojs$getAllPlayers,
getPlayer: typeof videojs$getPlayer,
getPlayers: typeof videojs$getPlayers,
hook: typeof videojs$hook,
hookOnce: typeof videojs$hookOnce,
hooks: typeof videojs$hooks,
isCrossOrigin: typeof videojs$isCrossOrigin,
mergeOptions: typeof videojs$mergeOptions,
parseUrl: typeof videojs$parseUrl,
off: typeof videojs$off,
on: typeof videojs$on,
one: typeof videojs$one,
resetFormatTime: typeof videojs$resetFormatTime,
setFormatTime: typeof videojs$setFormatTime,
removeHook: typeof videojs$removeHook,
trigger: typeof videojs$trigger,
use: typeof videojs$use,
        browser: typeof videojs$browser,
dom: typeof videojs$dom,
getComponent: typeof videojs$getComponent,
getPlugin: typeof videojs$getPlugin,
getPlugins: typeof videojs$getPlugins,
getPluginVersion: typeof videojs$getPluginVersion,
getTech: typeof videojs$getTech,
hooks_: typeof videojs$hooks_,
log: typeof videojs$log,
middleware: typeof videojs$middleware,
options: typeof videojs$options,
plugin: typeof videojs$plugin,
registerComponent: typeof videojs$registerComponent,
registerPlugin: typeof videojs$registerPlugin,
registerTech: typeof videojs$registerTech,
TOUCH_ENABLED: typeof videojs$TOUCH_ENABLED,
VERSION: typeof videojs$VERSION,
xhr: typeof videojs$xhr,
AudioTrack: typeof videojs$AudioTrack,
AudioTrackButton: typeof videojs$AudioTrackButton,
AudioTrackMenuItem: typeof videojs$AudioTrackMenuItem,
BigPlayButton: typeof videojs$BigPlayButton,
Button: typeof videojs$Button,
CaptionsButton: typeof videojs$CaptionsButton,
CaptionsSettingsMenuItem: typeof videojs$CaptionsSettingsMenuItem,
ChaptersButton: typeof videojs$ChaptersButton,
ChaptersTrackMenuItem: typeof videojs$ChaptersTrackMenuItem,
ClickableComponent: typeof videojs$ClickableComponent,
CloseButton: typeof videojs$CloseButton,
Component: typeof videojs$Component,
ControlBar: typeof videojs$ControlBar,
CurrentTimeDisplay: typeof videojs$CurrentTimeDisplay,
CustomControlSpacer: typeof videojs$CustomControlSpacer,
DescriptionsButton: typeof videojs$DescriptionsButton,
DurationDisplay: typeof videojs$DurationDisplay,
ErrorDisplay: typeof videojs$ErrorDisplay,
EventTarget: typeof videojs$EventTarget,
FullscreenToggle: typeof videojs$FullscreenToggle,
HTMLTrackElementList: typeof videojs$HTMLTrackElementList,
MediaError: typeof videojs$MediaError,
Menu: typeof videojs$Menu,
MenuButton: typeof videojs$MenuButton,
MenuItem: typeof videojs$MenuItem,
ModalDialog: typeof videojs$ModalDialog,
MouseTimeDisplay: typeof videojs$MouseTimeDisplay,
Player: typeof videojs$Player,
Plugin: typeof videojs$Plugin,
ProgressControl: typeof videojs$ProgressControl,
SeekBar: typeof videojs$SeekBar,
Slider: typeof videojs$Slider,
Spacer: typeof videojs$Spacer,
Tech: typeof videojs$Tech,
TextTrackButton: typeof videojs$TextTrackButton,
TextTrackCueList: typeof videojs$TextTrackCueList,
TextTrackMenuItem: typeof videojs$TextTrackMenuItem,
TextTrackSettings: typeof videojs$TextTrackSettings,
TextTrack: typeof videojs$TextTrack,
TextTrackList: typeof videojs$TextTrackList,
TimeDisplay: typeof videojs$TimeDisplay,
TimeToolTip: typeof videojs$TimeToolTip,
Track: typeof videojs$Track,
TrackButton: typeof videojs$TrackButton,
TrackList: typeof videojs$TrackList,
VolumeBar: typeof videojs$VolumeBar,
VolumeControl: typeof videojs$VolumeControl,
VolumeLevel: typeof videojs$VolumeLevel,
VolumePanel: typeof videojs$VolumePanel,
      }

/**
 * Adding languages so that they're available to all players.
 * Example: `addLanguage('es', { 'Hello': 'Hola' });`
 * @param code The language code or dictionary property
 * @param data The data values to be translated
 * @return The resulting language dictionary object
 */
declare function videojs$addLanguage(code: string, data: videojs$LanguageTranslations): videojs$LanguageTranslations



/**
 * Bind (a.k.a proxy or Context). A simple method for changing the context of a function
 * It also stores a unique id on the function so it can be easily removed from events.
 * @param context The object to bind as scope.
 * @param fn The function to be bound to a scope.
 * @param uid An optional unique ID for the function to be set
 * @return The new function that will be bound into the context given
 */
declare function videojs$bind<F: (() => any)>(context: any, fn: F, uid?: number): F



/**
 * Should create a fake `TimeRange` object which mimics an HTML5 time range instance.
 * @param start The start of a single range or an array of ranges
 * @param end The end of a single range.
 */
declare function videojs$createTimeRanges(start?: number | videojs$TimeRange[], end?: number): videojs$TimeRange



/**
 * A suite of browser and device tests from {@link browser}.
 */
declare var videojs$browser: videojs$Browser;

declare var videojs$dom: videojs$Dom;


/**
 * Format seconds as a time string, H:MM:SS or M:SS. Supplying a guide (in seconds)
 * will force a number of leading zeros to cover the length of the guide.
 * @param seconds Number of seconds to be turned into a string
 * @param guide Number (in seconds) to model the string after
 * @return Time formatted as H:MM:SS or M:SS
 */
declare function videojs$formatTime(seconds: number, guide: number): string



/**
 * Returns an array of all current players.
 * @return An array of all players. The array will be in the order that
`Object.keys` provides, which could potentially vary between
JavaScript engines.
 */
declare function videojs$getAllPlayers(): videojs$Player[]



/**
 * Get a component class object by name
 * @borrows Component.getComponent as getComponent
 */
declare var videojs$getComponent: typeof undefined;


/**
 * Get a single player based on an ID or DOM element.
 * 
 * This is useful if you want to check if an element or ID has an associated
 * Video.js player, but not create one if it doesn't.
 * @param id An HTML element - `<video>`, `<audio>`, or `<video-js>` -
or a string matching the `id` of such an element.
 * @return A player instance or `undefined` if there is no player instance
matching the argument.
 */
declare function videojs$getPlayer(id: string): videojs$Player



/**
 * Get an object with the currently created players, keyed by player ID
 * @return The created players
 */
declare function videojs$getPlayers(): {
[key: string]: videojs$Player
}



/**
 * Gets a plugin by name if it exists.
 * @param name The name of a plugin.
 * @return The plugin (or `undefined`).
 */
declare var videojs$getPlugin: typeof undefined;


/**
 * Gets an object containing multiple Video.js plugins.
 * @param names If provided, should be an array of plugin names. Defaults to _all_
plugin names.
 * @return An object containing plugin(s) associated with their name(s) or
`undefined` if no matching plugins exist).
 */
declare var videojs$getPlugins: typeof undefined;


/**
 * Gets a plugin's version, if available
 * @param name The name of a plugin.
 * @return The plugin's version or an empty string.
 */
declare var videojs$getPluginVersion: typeof undefined;


/**
 * Get a Tech class object by name
 * @borrows Tech.getTech as getTech
 */
declare var videojs$getTech: typeof undefined;


/**
 * Add a function hook to a specific videojs lifecycle.
 * @param type the lifecycle to hook the function to.
 * @param fn The function or array of functions to attach.
 */
declare function videojs$hook(type: "setup", fn: Hook$Hook$Setup | Hook$Hook$Setup[]): void


declare function videojs$hook(type: "beforesetup", fn: Hook$Hook$BeforeSetup | Hook$Hook$BeforeSetup[]): void



/**
 * Add a function hook that will only run once to a specific videojs lifecycle.
 * @param type the lifecycle to hook the function to.
 * @param fn The function or array of functions to attach.
 */
declare function videojs$hookOnce(type: string, fn?: (() => any) | Array<() => any>): void



/**
 * Get a list of hooks for a specific lifecycle
 * @param type the lifecycle to get hooks from
 * @param fn Optionally add a hook (or hooks) to the lifecycle that your are getting.
 * @return an array of hooks, or an empty array if there are none.
 */
declare function videojs$hooks(type: string, fn?: (() => any) | Array<() => any>): void



/**
 * Returns whether the url passed is a cross domain request or not.
 * @param url The url to check.
 * @return Whether it is a cross domain request or not.
 */
declare function videojs$isCrossOrigin(url: string): boolean



/**
 * An Object that contains lifecycle hooks as keys which point to an array
 * of functions that are run when a lifecycle is triggered
 */
declare var videojs$hooks_: {
[type: string]: (() => any)
};


/**
 * Log messages
 * @borrows log:log as log
 */
declare var videojs$log: videojs$Log;


/**
 * Deep-merge one or more options objects, recursively merging **only** plain
 * object properties.
 * @param sources One or more objects to merge into a new object.
 * @return A new object that is the merged result of all sources.
 */
declare function videojs$mergeOptions<A, B, C, D, E, F>(
option: A,
option2?: B,
option3?: C,
option4?: D,
option5?: E,
option6?: F): A & B & C & D & E & F



/**
 * Resolve and parse the elements of a URL.
 * @param url The url to parse
 * @return An object of url details
 */
declare function videojs$parseUrl(url: string): url$url$URLObject



/**
 * An object that can be returned by a middleware to signify
 * that the middleware is being terminated.
 */
declare var videojs$middleware: {
TERMINATOR: {}
};


/**
 * Removes event listeners from an element
 * @param elem Object to remove listeners from.
 * @param type Type of listener to remove. Don't include to remove all events from element.
 * @param fn Specific listener to remove. Don't include to remove listeners for an event
type.
 */
declare function videojs$off(
elem: Element,
type: string | string,
fn: videojs$EventTarget.EventTarget$EventListener): void



/**
 * Add an event listener to element
 * It stores the handler function in a separate cache object
 * and adds a generic handler to the element's event,
 * along with a unique id (guid) to the element.
 * @param elem Element or object to bind listeners to
 * @param type Type of event to bind to.
 * @param fn Event listener.
 */
declare function videojs$on(
elem: Element,
type: string | string[],
fn: videojs$EventTarget.EventTarget$EventListener): void



/**
 * Trigger a listener only once for an event
 * @param elem Element or object to bind to.
 * @param type Name/type of event
 * @param fn Event Listener function
 */
declare function videojs$one(
elem: Element,
type: string | string[],
fn: videojs$EventTarget.EventTarget$EventListener): void



/**
 * The global options object. These are the settings that take effect
 * if no overrides are specified when the player is created.
 */
declare var videojs$options: videojs$PlayerOptions;


/**
 * Deprecated method to register a plugin with Video.js
 * @deprecated plugin() is deprecated; use registerPlugin() instead
 * @param name The plugin name
 * @param plugin The plugin sub-class or function
 */
declare var videojs$plugin: typeof undefined;


/**
 * Register a component so it can referred to by name. Used when adding to other
 * components, either through addChild `component.addChild('myComponent')` or through
 * @default children options  `{ children: ['myComponent'] }`.

> NOTE: You could also just initialize the component before adding.
`component.addChild(new MyComponent());`
 * @param name The class name of the component
 * @param comp The component class
 * @return The newly registered component
 */
declare var videojs$registerComponent: typeof undefined;


/**
 * Register a Video.js plugin.
 * @borrows plugin:registerPlugin as registerPlugin
 * @param name The name of the plugin to be registered. Must be a string and
must not match an existing plugin or a method on the `Player`
prototype.
 * @param plugin A sub-class of `Plugin` or a function for basic plugins.
 * @return For advanced plugins, a factory function for that plugin. For
basic plugins, a wrapper function that initializes the plugin.
 */
declare var videojs$registerPlugin: typeof undefined;


/**
 * Register a Tech so it can referred to by name.
 * This is used in the tech order for the player.
 * @borrows Tech.registerTech as registerTech
 */
declare var videojs$registerTech: typeof undefined;


/**
 * Resets formatTime to the default implementation.
 */
declare function videojs$resetFormatTime(): void



/**
 * Replaces the default formatTime implementation with a custom implementation.
 * @param customImplementation A function which will be used in place of the default formatTime implementation.
Will receive the current time in seconds and the guide (in seconds) as arguments.
 */
declare function videojs$setFormatTime(customImplementation: (seconds: number, guide: number) => string): void



/**
 * Remove a hook from a specific videojs lifecycle.
 * @param type the lifecycle that the function hooked to
 * @param fn The hooked function to remove
 * @return The function that was removed or undef
 */
declare function videojs$removeHook(type: string, fn: (() => any)): boolean



/**
 * Trigger an event for an element
 * @param elem Element to trigger an event on
 * @param event A string (the type) or an event object with a type attribute
 * @param hash data hash to pass along with the event
 * @return - Returns the opposite of `defaultPrevented` if default was prevented
- Otherwise returns undefined
 */
declare function videojs$trigger(
elem: Element,
event: videojs$EventTarget.EventTarget$Event | string,
hash?: any): boolean | void



/**
 * Whether or not the browser supports touch events. Included for backward
 * compatibility with 4.x, but deprecated. Use `browser.TOUCH_ENABLED`
 * instead going forward.
 * @deprecated since version 5.0
 */
declare var videojs$TOUCH_ENABLED: boolean;


/**
 * Register a middleware to a source type.
 * @param type A string representing a MIME type.
 * @param middleware A middleware factory that takes a player.
 */
declare function videojs$use(
type: string,
videojs$middleware: (player: videojs$Player) => videojs$Middleware): void



/**
 * Current software version. Follows semver.
 */
declare var videojs$VERSION: string;


/**
 * A cross-browser XMLHttpRequest wrapper. Here's a simple example:
 * @param options settings for the request.
 * @return The request object.
 * @see https://github.com/Raynos/xhr
 */
declare var videojs$xhr: videojs$XhrObject;

declare type Hook$BeforeSetup = (element: HTMLVideoElement, videojs$options: any) => any;

declare type Hook$Setup = (player: videojs$Player) => void;


/**
 * A representation of a single `AudioTrack`. If it is part of an {@link AudioTrackList}
 * only one `AudioTrack` in the list will be enabled at a time.
 * @see [Spec]{@link https://html.spec.whatwg.org/multipage/embedded-content.html#audiotrack}
 */
declare var videojs$AudioTrack: {
prototype: videojs$Track,

/**
 * Create an instance of this class.
 * @param options Object of option names and values
 * @param A valid audio track kind
 * @param A unique id for this AudioTrack.
 * @param The menu label for this track.
 * @param A valid two character language code.
 * @param If this track is the one that is currently playing. If this track is part of
an {@link AudioTrackList}, only one {@link AudioTrack} will be enabled.
 */
new (videojs$options?: videojs$AudioTrackOptions): videojs$Track
};


/**
 * Object of option names and values
 * @param A valid audio track kind
 * @param A unique id for this AudioTrack.
 * @param The menu label for this track.
 * @param A valid two character language code.
 * @param If this track is the one that is currently playing. If this track is part of
an {@link AudioTrackList}, only one {@link AudioTrack} will be enabled.
 */
declare interface videojs$AudioTrackOptions {
kind?: videojs$AudioTrack.TextTrack$Kind,
id?: string,
label?: string,
language?: string,
enabled?: boolean
} 


/**
 * All possible `AudioTrackKind`s
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-audiotrack-kind
 */
declare type AudioTrack$Kind = "alternative"
| "descriptions"
| "main"
| "main-desc"
| "translation"
| "commentary";


/**
 * The base class for buttons that toggle specific {@link AudioTrack} types.
 */
declare type videojs$AudioTrackButton = {

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Allow sub components to stack CSS class names for the wrapper element
 * @return The constructed wrapper DOM `className`
 */
buildWrapperCSSClass(): string,

/**
 * Create a menu item for each audio track
 * @param items An array of existing menu items to use.
 * @return An array of menu items
 */
createItems(items?: videojs$AudioTrackMenuItem[]): videojs$AudioTrackMenuItem[]
} & videojs$MenuButton


declare var videojs$AudioTrackButton: {
prototype: videojs$AudioTrackButton,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$TrackButtonOptions): videojs$AudioTrackButton
};


/**
 * An {@link AudioTrack} {@link MenuItem}
 */
declare type videojs$AudioTrackMenuItem = {

/**
 * Handle any {@link AudioTrack} change.
 * @param event The {@link AudioTrackList#change} event that caused this to run.
 * @listens AudioTrackList#change
 */
handleTracksChange(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$MenuItem


declare var videojs$AudioTrackMenuItem: {
prototype: videojs$AudioTrackMenuItem,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$AudioTrackMenuItemOptions): videojs$AudioTrackMenuItem
};

declare type videojs$AudioTrackMenuItemOptions = {
track?: videojs$AudioTrack
} & videojs$MenuItemOptions



/**
 * The initial play button that shows before the video has played. The hiding of the
 * `BigPlayButton` get done via CSS and `Player` states.
 */
declare type videojs$BigPlayButton = {

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object. Always returns 'vjs-big-play-button'.
 */
buildCSSClass(): string,

/**
 * This gets called when a `BigPlayButton` "clicked". See {@link ClickableComponent}
 * for more detailed information on what a click can be.
 * @param event The `keydown`, `tap`, or `click` event that caused this function to be
called.
 * @listens tap
 * @listens click
 */
handleClick(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Called when this BigPlayButton has focus and a key gets pressed down. By
 * default it will call `this.handleClick` when the key is space or enter.
 * @param event The `keydown` event that caused this function to be called.
 * @listens keydown
 */
handleKeyPress(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Called when this BigPlayButton gets mouse pressed down
 * @param event The `keydown` event that caused this function to be called.
 * @listens mousedown
 */
handleMouseDown(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$Button


declare var videojs$BigPlayButton: {
prototype: videojs$BigPlayButton,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions): videojs$BigPlayButton
};

declare interface videojs$Browser {
ANDROID_VERSION: number | null,
CHROME_VERSION: number,
IS_ANDROID: boolean,
IS_ANY_SAFARI: boolean,
IS_CHROME: boolean,
IS_EDGE: boolean,
IS_NATIVE_ANDROID: boolean,
IS_IPAD: boolean,
IS_IPHONE: boolean,
IS_IPOD: boolean,
IS_IOS: boolean,
IS_SAFARI: boolean,
IE_VERSION: number,
IOS_VERSION: number | null,
videojs$TOUCH_ENABLED: boolean
} 


/**
 * Base class for all buttons.
 */
declare type videojs$Button = {
options_: videojs$ComponentOptions,

/**
 * Create the `Button`s DOM element.
 * @param tag The element's node type. This argument is IGNORED: no matter what
is passed, it will always create a `button` element.
 * @param props An object of properties that should be set on the element.
 * @param attributes An object of attributes that should be set on the element.
 * @return The element that gets created.
 */
createEl(tag: string, props?: any, attributes?: any): HTMLButtonElement,

/**
 * Add a child `Component` inside of this `Button`.
 * @param child The name or instance of a child to add.
 * @param options The key/value store of options that will get passed to children of
the child.
 * @return The `Component` that gets added as a child. When using a string the
`Component` will get created by this process.
 * @deprecated since version 5
 */
addChild(component: string, optionsopt?: any, indexopt?: number): videojs$Component,
addChild(component: Element, optionsopt?: any, indexopt?: number): Element,
addChild<T: videojs$Component>(child: string | T, videojs$options?: any): T,

/**
 * Enable the `Button` element so that it can be activated or clicked. Use this with
 * {@link Button#disable}.
 */
enable(): void,

/**
 * Disable the `Button` element so that it cannot be activated or clicked. Use this with
 * {@link Button#enable}.
 */
disable(): void,

/**
 * This gets called when a `Button` has focus and `keydown` is triggered via a key
 * press.
 * @param event The event that caused this function to get called.
 * @listens keydown
 */
handleKeyPress(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$ClickableComponent


declare var videojs$Button: {
prototype: videojs$Button,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions): videojs$Button
};


/**
 * The button component for toggling and selecting captions
 */
declare type videojs$CaptionsButton = {

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Allow sub components to stack CSS class names for the wrapper element
 * @return The constructed wrapper DOM `className`
 */
buildWrapperCSSClass(): string,

/**
 * Create caption menu items
 * @return The array of current menu items.
 */
createItems(): videojs$CaptionSettingsMenuItem[]
} & videojs$TextTrackButton


declare var videojs$CaptionsButton: {
prototype: videojs$CaptionsButton,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 * @param ready The function to call when this function is ready.
 */
new (
player: videojs$Player,
videojs$options?: videojs$TrackButtonOptions,
ready?: videojs$Component.Component$ReadyCallback): videojs$CaptionsButton
};


/**
 * The menu item for caption track settings menu
 */
declare type videojs$CaptionSettingsMenuItem = {

/**
 * This gets called when an `CaptionSettingsMenuItem` is "clicked". See
 * {@link ClickableComponent} for more detailed information on what a click can be.
 * @param event The `keydown`, `tap`, or `click` event that caused this function to be
called.
 * @listens tap
 * @listens click
 */
handleClick(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$TextTrackMenuItem


declare var videojs$CaptionsSettingsMenuItem: {
prototype: videojs$CaptionSettingsMenuItem,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$CaptionSettingsMenuItemOptions): videojs$CaptionSettingsMenuItem
};

declare type videojs$CaptionSettingsMenuItemOptions = {
kind: videojs$TextTrack.AudioTrack$Kind
} & videojs$TextTrackMenuItemOptions



/**
 * The button component for toggling and selecting chapters
 * Chapters act much differently than other text tracks
 * Cues are navigation vs. other tracks of alternative languages
 */
declare type videojs$ChaptersButton = {

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Allow sub components to stack CSS class names for the wrapper element
 * @return The constructed wrapper DOM `className`
 */
buildWrapperCSSClass(): string,

/**
 * Create a menu item for each text track
 * @return Array of menu items
 */
createItems(): videojs$TextTrackMenuItem[],

/**
 * Create menu from chapter track
 * @return New menu for the chapter buttons
 */
createMenu(): videojs$Menu,

/**
 * Find the track object that is currently in use by this ChaptersButton
 * @return The current track or undefined if none was found.
 */
findChaptersTrack(): videojs$TextTrack | void,

/**
 * Get the caption for the ChaptersButton based on the track label. This will also
 * use the current tracks localized kind as a fallback if a label does not exist.
 * @return The tracks current label or the localized track kind.
 */
getMenuCaption(): string,

/**
 * Set the currently selected track for the chapters button.
 * @param track The new track to select. Nothing will change if this is the currently selected
track.
 */
setTrack(track: videojs$TextTrack): void,

/**
 * Update the menu based on the current state of its items.
 * @param event An event that triggered this function to run.
 * @listens TextTrackList#addtrack
 * @listens TextTrackList#removetrack
 * @listens TextTrackList#change
 */
update(event?: videojs$EventTarget.EventTarget$Event): void
} & videojs$TextTrackButton


declare var videojs$ChaptersButton: {
prototype: videojs$ChaptersButton,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 * @param ready The function to call when this function is ready.
 */
new (
player: videojs$Player,
videojs$options?: videojs$TrackButtonOptions,
ready?: videojs$Component.Component$ReadyCallback): videojs$ChaptersButton
};


/**
 * The chapter track menu item
 */
declare type videojs$ChaptersTrackMenuItem = {
track: videojs$TextTrack,
cue: videojs$TextTrackCueList.TextTrackCueList$TextTrackCue,

/**
 * This gets called when an `ChaptersTrackMenuItem` is "clicked". See
 * {@link ClickableComponent} for more detailed information on what a click can be.
 * @param event The `keydown`, `tap`, or `click` event that caused this function to be
called.
 * @listens tap
 * @listens click
 */
handleClick(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Update chapter menu item
 * @param event The `cuechange` event that caused this function to run.
 * @listens TextTrack#cuechange
 */
update(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$MenuItem


declare var videojs$ChaptersTrackMenuItem: {
prototype: videojs$ChaptersTrackMenuItem,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ChaptersTrackMenuItemOptions): videojs$ChaptersTrackMenuItem
};

declare type videojs$ChaptersTrackMenuItemOptions = {
track: videojs$TextTrack,
cue: videojs$TextTrackCueList.TextTrackCueList$TextTrackCue
} & videojs$MenuItemOptions


declare type videojs$Child = string | {
name: string,
children?: videojs$Child[]
};


/**
 * Clickable Component which is clickable or keyboard actionable,
 * but is not a native HTML button.
 */
declare type videojs$ClickableComponent = {
options_: videojs$ComponentOptions,

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Create the `Component`s DOM element.
 * @param tag The element's node type.
 * @param props An object of properties that should be set on the element.
 * @param attributes An object of attributes that should be set on the element.
 * @return The element that gets created.
 */
createEl(tag: string, props?: any, attributes?: any): Element,

/**
 * Get the localize text to use for the controls on the `Component`.
 * @return - The control text when getting
 */
controlText(): string,

/**
 * Set the localize text to use for the controls on the `Component`.
 * @param text Control text for element.
 * @param el Element to set the title on.
 */
controlText(text: string, el?: Element): void,

/**
 * Create a control text element on this `Component`
 * @param el Parent element for the control text.
 * @return The control text element that gets created.
 */
createControlTextEl(el?: Element): Element,

/**
 * Disable this `Component`s element.
 */
disable(): void,

/**
 * Enable this `Component`s element.
 */
enable(): void,

/**
 * This gets called when a `ClickableComponent` gets:
 * - Clicked (via the `click` event, listening starts in the constructor)
 * - Tapped (via the `tap` event, listening starts in the constructor)
 * - The following things happen in order:
 *    1. {@link ClickableComponent#handleFocus} is called via a `focus` event on the
 *       `ClickableComponent`.
 *    2. {@link ClickableComponent#handleFocus} adds a listener for `keydown` on using
 *       {@link ClickableComponent#handleKeyPress}.
 *    3. `ClickableComponent` has not had a `blur` event (`blur` means that focus was lost). The user presses
 *       the space or enter key.
 *    4. {@link ClickableComponent#handleKeyPress} calls this function with the `keydown`
 *       event as a parameter.
 * @param event The `keydown`, `tap`, or `click` event that caused this function to be
called.
 * @listens tap
 * @listens click
 */
handleClick(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * This gets called when a `ClickableComponent` gains focus via a `focus` event.
 * Turns on listening for `keydown` events. When they happen it
 * calls `this.handleKeyPress`.
 * @param event The `focus` event that caused this function to be called.
 * @listens focus
 */
handleFocus(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Called when this ClickableComponent has focus and a key gets pressed down. By
 * default it will call `this.handleClick` when the key is space or enter.
 * @param event The `keydown` event that caused this function to be called.
 * @listens keydown
 */
handleKeyPress(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Called when a `ClickableComponent` loses focus. Turns off the listener for
 * `keydown` events. Which Stops `this.handleKeyPress` from getting called.
 * @param event The `blur` event that caused this function to be called.
 * @listens blur
 */
handleBlur(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$Component


declare var videojs$ClickableComponent: {
prototype: videojs$ClickableComponent,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions): videojs$ClickableComponent
};


/**
 * The `CloseButton` is a `{@link Button}` that fires a `close` event when
 * it gets clicked.
 */
declare type videojs$CloseButton = {
options_: videojs$CloseButtonOptions,

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * This gets called when a `CloseButton` gets clicked. See
 * {@link ClickableComponent#handleClick} for more information on when this will be
 * triggered
 * @param event The `keydown`, `tap`, or `click` event that caused this function to be
called.
 * @listens tap
 * @listens click
 * @fires CloseButton#close
 */
handleClick(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$Button


declare var videojs$CloseButton: {
prototype: videojs$CloseButton,

/**
 * Creates an instance of the this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$CloseButtonOptions): videojs$CloseButton
};

declare type videojs$CloseButtonOptions = {
controlText?: string
} & videojs$ComponentOptions



/**
 * Base class for all UI Components.
 * Components are UI objects which represent both a javascript object and an element
 * in the DOM. They can be children of other components, and can have
 * children themselves.
 * 
 * Components can also use methods from {@link EventTarget}
 */
declare type videojs$Component = {
options_: videojs$ComponentOptions,
player_: videojs$Player,
children_: videojs$Component[],

/**
 * Find a single DOM element matching a `selector`. This can be within the `Component`s
 * `contentEl()` or another custom context.
 * @param selector A valid CSS selector, which will be passed to `querySelector`.
 * @param context A DOM element within which to query. Can also be a selector string in
which case the first matching element will get used as context. If
missing `this.contentEl()` gets used. If  `this.contentEl()` returns
nothing it falls back to `document`.
 * @return the dom element that was found, or null
 * @see [Information on CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)
 */
$(selector: string, context?: string | Element): Element,

/**
 * Finds all DOM element matching a `selector`. This can be within the `Component`s
 * `contentEl()` or another custom context.
 * @param selector A valid CSS selector, which will be passed to `querySelectorAll`.
 * @param context A DOM element within which to query. Can also be a selector string in
which case the first matching element will get used as context. If
missing `this.contentEl()` gets used. If  `this.contentEl()` returns
nothing it falls back to `document`.
 * @return a list of dom elements that were found
 * @see [Information on CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)
 */
$$(selector: string, context?: string | Element): NodeList,

/**
 * Add a child `Component` inside the current `Component`.
 * @param child The name or instance of a child to add.
 * @param options The key/value store of options that will get passed to children of
the child.
 * @param index The index to attempt to add a child into.
 * @return The `Component` that gets added as a child. When using a string the
`Component` will get created by this process.
 */
addChild(component: string, optionsopt?: any, indexopt?: number): videojs$Component,
addChild(component: Element, optionsopt?: any, indexopt?: number): Element,
addChild<T: videojs$Component>(
child: string | T,
videojs$options?: any,
index?: number): T,

/**
 * Add a CSS class name to the `Component`s element.
 * @param classToAdd CSS class name to add
 */
addClass(classToAdd: string): void,

/**
 * Remove the focus from this component
 */
blur(): void,

/**
 * Builds the default DOM class name. Should be overriden by sub-components.
 * @return The DOM class name for this object.
 */
buildCSSClass(): string,

/**
 * Cancels a queued callback passed to {@link Component#requestAnimationFrame}
 * (rAF).
 * 
 * If you queue an rAF callback via {@link Component#requestAnimationFrame},
 * use this function instead of `window.cancelAnimationFrame`. If you don't,
 * your dispose listener will not get cleaned up until {@link Component#dispose}!
 * @param id The rAF ID to clear. The return value of {@link Component#requestAnimationFrame}.
 * @return Returns the rAF ID that was cleared.
 * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/window/cancelAnimationFrame}
 */
cancelAnimationFrame(id: number): number,

/**
 * Get an array of all child components
 * @return The children
 */
children(): videojs$Component[],

/**
 * Clears an interval that gets created via `window.setInterval` or
 * {@link Component#setInterval}. If you set an inteval via {@link Component#setInterval}
 * use this function instead of `window.clearInterval`. If you don't your dispose
 * listener will not get cleaned up until {@link Component#dispose}!
 * @param intervalId The id of the interval to clear. The return value of
{@link Component#setInterval} or `window.setInterval`.
 * @return Returns the interval id that was cleared.
 * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval}
 */
clearInterval(intervalId: number): number,

/**
 * Clears a timeout that gets created via `window.setTimeout` or
 * {@link Component#setTimeout}. If you set a timeout via {@link Component#setTimeout}
 * use this function instead of `window.clearTimout`. If you don't your dispose
 * listener will not get cleaned up until {@link Component#dispose}!
 * @param timeoutId The id of the timeout to clear. The return value of
{@link Component#setTimeout} or `window.setTimeout`.
 * @return Returns the timeout id that was cleared.
 * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearTimeout}
 */
clearTimeout(timeoutId: number): number,

/**
 * Return the `Component`s DOM element. This is where children get inserted.
 * This will usually be the the same as the element returned in {@link Component#el}.
 * @return The content element for this `Component`.
 */
contentEl(): Element,
controlText(key: string): string,

/**
 * Create the `Component`s DOM element.
 * @param tagName Element's DOM node type. e.g. 'div'
 * @param properties An object of properties that should be set.
 * @param attributes An object of attributes that should be set.
 * @return The element that gets created.
 */
createEl(tagName?: string, properties?: any, attributes?: any): Element,

/**
 * Get the width or the height of the `Component` elements computed style. Uses
 * `window.getComputedStyle`.
 * @param widthOrHeight A string containing 'width' or 'height'. Whichever one you want to get.
 * @return The dimension that gets asked for or 0 if nothing was set
for that dimension.
 */
currentDimension(widthOrHeight: "width" | "height"): number,

/**
 * Get an object that contains width and height values of the `Component`s
 * computed style.
 * @return The dimensions of the components element
 */
currentDimensions(): videojs$Component.Component$DimensionObject,

/**
 * Get the height of the `Component`s computed style. Uses `window.getComputedStyle`.
 * @return height
   The height of the `Component`s computed style.
 */
currentHeight(): number,

/**
 * Get the width of the `Component`s computed style. Uses `window.getComputedStyle`.
 * @return width
   The width of the `Component`s computed style.
 */
currentWidth(): number,

/**
 * Get or set width or height of the `Component` element. This is the shared code
 * for the {@link Component#width} and {@link Component#height}.
 * 
 * Things to know:
 * - If the width or height in an number this will return the number postfixed with 'px'.
 * - If the width/height is a percent this will return the percent postfixed with '%'
 * - Hidden elements have a width of 0 with `window.getComputedStyle`. This function
 *    defaults to the `Component`s `style.width` and falls back to `window.getComputedStyle`.
 *    See [this]{@link http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/}
 *    for more information
 * - If you want the computed style of the component, use {@link Component#currentWidth}
 *    and {@link {Component#currentHeight}
 * @fires Component#componentresize
 * @param widthOrHeight 'width' or 'height'
 * @param num New dimension
 * @param skipListeners Skip componentresize event trigger
 * @return The dimension when getting or 0 if unset
 */
dimension(
widthOrHeight: "width" | "height",
num: string | number,
skipListeners?: boolean): void,
dimension(widthOrHeight: "width" | "height"): number,

/**
 * Set both the width and height of the `Component` element at the same time.
 * @param width Width to set the `Component`s element to.
 * @param height Height to set the `Component`s element to.
 */
dimensions(width: string | number, height: string | number): void,

/**
 * Dispose of the `Component` and all child components.
 * @fires Component#dispose
 */
dispose(): void,

/**
 * Get the `Component`s DOM element
 * @return The DOM element for this `Component`.
 */
el(): Element,

/**
 * Emit a 'tap' events when touch event support gets detected. This gets used to
 * support toggling the controls through a tap on the video. They get enabled
 * because every sub-component would have extra overhead otherwise.
 * @fires Component#tap
 * @listens Component#touchstart
 * @listens Component#touchmove
 * @listens Component#touchleave
 * @listens Component#touchcancel
 * @listens Component#touchend
 */
emitTapEvents(): void,

/**
 * This function reports user activity whenever touch events happen. This can get
 * turned off by any sub-components that wants touch events to act another way.
 * 
 * Report user touch activity when touch events occur. User activity gets used to
 * determine when controls should show/hide. It is simple when it comes to mouse
 * events, because any mouse event should show the controls. So we capture mouse
 * events that bubble up to the player and report activity when that happens.
 * With touch events it isn't as easy as `touchstart` and `touchend` toggle player
 * controls. So touch events can't help us at the player level either.
 * 
 * User activity gets checked asynchronously. So what could happen is a tap event
 * on the video turns the controls off. Then the `touchend` event bubbles up to
 * the player. Which, if it reported user activity, would turn the controls right
 * back on. We also don't want to completely block touch events from bubbling up.
 * Furthermore a `touchmove` event and anything other than a tap, should not turn
 * controls back on.
 * @listens Component#touchstart
 * @listens Component#touchmove
 * @listens Component#touchend
 * @listens Component#touchcancel
 */
enableTouchActivity(): void,

/**
 * Set the focus to this component
 */
focus(): void,

/**
 * Get the value of an attribute on the `Component`s element.
 * @param attribute Name of the attribute to get the value from.
 * @return - The value of the attribute that was asked for.
- Can be an empty string on some browsers if the attribute does not exist
  or has no value
- Most browsers will return null if the attibute does not exist or has
  no value.
 * @see [DOM API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute}
 */
getAttribute(attribute: string): string | null,

/**
 * Returns the child `Component` with the given `name`.
 * @param name The name of the child `Component` to get.
 * @return The child `Component` with the given `name` or undefined.
 */
getChild(name: string): videojs$Component | void,

/**
 * Returns the child `Component` with the given `id`.
 * @param id The id of the child `Component` to get.
 * @return The child `Component` with the given `id` or undefined.
 */
getChildById(id: string): videojs$Component | void,

/**
 * Check if a component's element has a CSS class name.
 * @param classToCheck CSS class name to check.
 * @return - True if the `Component` has the class.
- False if the `Component` does not have the class`
		 *
 */
hasClass(classToCheck: string): boolean,

/**
 * Get or set the height of the component based upon the CSS styles.
 * See {@link Component#dimension} for more detailed information.
 * @param num The height that you want to set postfixed with '%', 'px' or nothing.
 * @param skipListeners Skip the componentresize event trigger
 * @return The width when getting, zero if there is no width. Can be a string
postpixed with '%' or 'px'.
 */
height(num: number | string, skipListeners?: boolean): void,
height(): number | string,

/**
 * Hide the `Component`s element if it is currently showing by adding the
 * 'vjs-hidden` class name to it.
 * 		 *
 */
hide(): void,

/**
 * Get this `Component`s ID
 * @return The id of this `Component`
 */
id(): string,

/**
 * Add and initialize default child `Component`s based upon options.
 */
initChildren(): void,

/**
 * Localize a string given the string in english.
 * 
 * If tokens are provided, it'll try and run a simple token replacement on the provided string.
 * The tokens it looks for look like `{1}` with the index being 1-indexed into the tokens array.
 * 
 * If a `defaultValue` is provided, it'll use that over `string`,
 * if a value isn't found in provided language files.
 * This is useful if you want to have a descriptive key for token replacement
 * but have a succinct localized string and not require `en.json` to be included.
 * 
 * Currently, it is used for the progress bar timing.
 * ```js
 * 		 * {
 * 		 *   "progress bar timing: currentTime={1} duration={2}": "{1} of {2}"
 * 		 * }
 * 		 * ```
 * It is then used like so:
 * ```js
 * 		 * this.localize('progress bar timing: currentTime={1} duration{2}',
 * 		 *               [this.player_.currentTime(), this.player_.duration()],
 * 		 *               '{1} of {2}');
 * 		 * ```
 * 
 * Which outputs something like: `01:23 of 24:56`.
 * @param string The string to localize and the key to lookup in the language files.
 * @param tokens If the current item has token replacements, provide the tokens here.
 * @param defaultValue Defaults to `string`. Can be a default value to use for token replacement
if the lookup key is needed to be separate.
 * @return The localized string or if no localization exists the english string.
 */
localize(string: string, tokens?: string[], defaultValue?: string): string,

/**
 * Lock a `Component`s element in its visible state by adding the 'vjs-lock-showing'
 * class name to it. Used during fadeIn/fadeOut.
 */
lockShowing(): void,

/**
 * Get the `Component`s name. The name gets used to reference the `Component`
 * and is set during registration.
 * @return The name of this `Component`.
 */
name(): string,

/**
 * Deep merge of options objects with new options.
 * > Note: When both `obj` and `options` contain properties whose values are objects.
 *          The two properties get merged using {@link module:mergeOptions}
 * @param obj The object that contains new options.
 * @return A new object of `this.options_` and `obj` merged together.
 * @deprecated since version 5
 */
options(obj: any): any,
played(): TimeRanges,

/**
 * Return the {@link Player} that the `Component` has attached to.
 * @return The player that this `Component` has attached to.
 */
player(): videojs$Player,

/**
 * Bind a listener to the component's ready state.
 * Different from event listeners in that if the ready event has already happened
 * it will trigger the function immediately.
 * @return Returns itself; method can be chained.
 */
ready(callback: () => void): this,

/**
 * Remove an attribute from the `Component`s element.
 * @param attribute Name of the attribute to remove.
 * @see [DOM API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute}
 */
removeAttribute(attribute: string): void,

/**
 * Remove a child `Component` from this `Component`s list of children. Also removes
 * the child `Component`s element from this `Component`s element.
 * @param component The child `Component` to remove.
 */
removeChild(component: videojs$Component): void,

/**
 * Remove a CSS class name from the `Component`s element.
 * @param classToRemove CSS class name to remove
 */
removeClass(classToRemove: string): void,

/**
 * Queues up a callback to be passed to requestAnimationFrame (rAF), but
 * with a few extra bonuses:
 * 
 * - Supports browsers that do not support rAF by falling back to
 *    {@link Component#setTimeout}.
 * 
 * - The callback is turned into a {@link Component~GenericCallback} (i.e.
 *    bound to the component).
 * 
 * - Automatic cancellation of the rAF callback is handled if the component
 *    is disposed before it is called.
 * @param fn A function that will be bound to this component and executed just
before the browser's next repaint.
 * @return Returns an rAF ID that gets used to identify the timeout. It can
also be used in {@link Component#cancelAnimationFrame} to cancel
the animation frame callback.
 * @listens Component#dispose
 * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame}
 */
requestAnimationFrame(fn: videojs$Component.Component$GenericCallback): number,

/**
 * Set the value of an attribute on the `Component`'s element
 * @param attribute Name of the attribute to set.
 * @param value Value to set the attribute to.
 * @see [DOM API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute}
 */
setAttribute(attribute: string, value: string): void,

/**
 * Creates a function that gets run every `x` milliseconds. This function is a wrapper
 * around `window.setInterval`. There are a few reasons to use this one instead though.
 * 1. It gets cleared via  {@link Component#clearInterval} when
 *     {@link Component#dispose} gets called.
 * 2. The function callback will be a {@link Component~GenericCallback}
 * @param fn The function to run every `x` seconds.
 * @param interval Execute the specified function every `x` milliseconds.
 * @return Returns an id that can be used to identify the interval. It can also be be used in
{@link Component#clearInterval} to clear the interval.
 * @listens Component#dispose
 * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval}
 */
setInterval(fn: videojs$Component.Component$GenericCallback, interval: number): number,

/**
 * Creates a function that runs after an `x` millisecond timeout. This function is a
 * wrapper around `window.setTimeout`. There are a few reasons to use this one
 * instead though:
 * 1. It gets cleared via  {@link Component#clearTimeout} when
 *     {@link Component#dispose} gets called.
 * 2. The function callback will gets turned into a {@link Component~GenericCallback}
 * 
 * > Note: You can't use `window.clearTimeout` on the id returned by this function. This
 *          will cause its dispose listener not to get cleaned up! Please use
 *          {@link Component#clearTimeout} or {@link Component#dispose} instead.
 * @param fn The function that will be run after `timeout`.
 * @param timeout Timeout in milliseconds to delay before executing the specified function.
 * @return Returns a timeout ID that gets used to identify the timeout. It can also
get used in {@link Component#clearTimeout} to clear the timeout that
was set.
 * @listens Component#dispose
 * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout}
 */
setTimeout(fn: videojs$Component.Component$GenericCallback, timeout: number): number,

/**
 * Show the `Component`s element if it is hidden by removing the
 * 'vjs-hidden' class name from it.
 */
show(): void,

/**
 * Add or remove a CSS class name from the component's element.
 * - `classToToggle` gets added when {@link Component#hasClass} would return false.
 * - `classToToggle` gets removed when {@link Component#hasClass} would return true.
 * @param classToToggle The class to add or remove based on (
 * @link Component#hasClass}
 * @param predicate An {@link Dom~predicate} function or a boolean
 */
toggleClass(classToToggle: string, predicate?: boolean | videojs$Dom.Dom$Predicate): void,

/**
 * Trigger all the ready listeners for this `Component`.
 * @fires Component#ready
 */
triggerReady(): void,

/**
 * Unlock a `Component`s element from its visible state by removing the 'vjs-lock-showing'
 * class name from it. Used during fadeIn/fadeOut.
 */
unlockShowing(): void,

/**
 * Get or set the width of the component based upon the CSS styles.
 * See {@link Component#dimension} for more detailed information.
 * @param num The width that you want to set postfixed with '%', 'px' or nothing.
 * @param skipListeners Skip the componentresize event trigger
 * @return The width when getting, zero if there is no width. Can be a string
postpixed with '%' or 'px'.
 */
width(num: number, skipListeners?: number): void,
width(): string | number
} & videojs$EventedMixin


declare var videojs$Component: {
prototype: videojs$Component,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 * @param An array of children objects to intialize this component with. Children objects have
a name property that will be used if more than one component of the same type needs to be
added.
 * @param ready Function that gets called when the `Component` is ready.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions,
ready?: videojs$Component.Component$ReadyCallback): videojs$Component,

/**
 * Get a `Component` based on the name it was registered with.
 * @param name The Name of the component to get.
 * @return The `Component` that got registered under the given name.
 * @deprecated In `videojs` 6 this will not return `Component`s that were not
registered using {@link Component.registerComponent}. Currently we
check the global `videojs` object for a `Component` name and
return that if it exists.
 */
getComponent(name: "Button" | "button"): typeof Button,
getComponent(name: "ClickableComponent" | "clickablecomponent"): typeof ClickableComponent,
getComponent(name: "ModalDialog" | "modaldialog"): typeof ModalDialog,
getComponent(name: "Menu" | "menu"): typeof Menu,
getComponent(name: "MenuButton" | "menubutton"): typeof MenuButton,
getComponent(name: "MenuItem" | "menuitem"): typeof MenuItem,
getComponent(name: "MouseTimeDisplay" | "mouseTimeDisplay"): typeof MouseTimeDisplay,
getComponent(name: "Spacer" | "spacer"): typeof Spacer,
getComponent(name: "Player" | "player"): typeof Player,
getComponent(name: "timeTooltip" | "TimeTooltip"): typeof TimeToolTip,
getComponent(name: "Component" | "component" | string): typeof Component,

/**
 * Register a `Component` with `videojs` given the name and the component.
 * 
 * > NOTE: {@link Tech}s should not be registered as a `Component`. {@link Tech}s
 *          should be registered using {@link Tech.registerTech} or
 *          {@link videojs:videojs.registerTech}.
 * 
 * > NOTE: This function can also be seen on videojs as
 *          {@link videojs:videojs.registerComponent}.
 * @param name The name of the `Component` to register.
 * @param ComponentToRegister The `Component` class to register.
 * @return The `Component` that was registered.
 */
registerComponent(name: string, ComponentToRegister: any): any
};

declare interface videojs$ComponentOptions {
children?: videojs$Child[]
} 


/**
 * A callback that is called when a component is ready. Does not have any
 * parameters and any callback value will be ignored.
 */
declare type Component$ReadyCallback = () => void;


/**
 * A callback that has no parameters and is bound into `Component`s context.
 */
declare type Component$GenericCallback = () => void;


/**
 * An object that contains width and height values of the `Component`s
 * computed style. Uses `window.getComputedStyle`.
 */
declare interface Component$DimensionObject {
width: number,
height: number
} 

declare type videojs$Content = string | Element | Node | (() => (string | Element | Node));


/**
 * Container of main controls.
 */
declare type videojs$ControlBar = {
options_: videojs$ControlBarOptions,

/**
 * Create the `Component`'s DOM element
 * @return The element that was created.
 */
createEl(): HTMLDivElement
} & videojs$Component


declare var videojs$ControlBar: {
prototype: videojs$ControlBar,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ControlBarOptions): videojs$ControlBar
};

declare type videojs$ControlBarOptions = {
volumePanel?: videojs$VolumePanelOptions
} & videojs$ComponentOptions



/**
 * Displays the current time
 */
declare type videojs$CurrentTimeDisplay = {

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Update current time display
 * @param event The `timeupdate` event that caused this function to run.
 * @listens Player#timeupdate
 */
updateContent(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * When the player fires ended there should be no time left. Sadly
 * this is not always the case, lets make it seem like that is the case
 * for users.
 * @param event The `ended` event that caused this to run.
 * @listens Player#ended
 */
handleEnded(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$TimeDisplay


declare var videojs$CurrentTimeDisplay: {
prototype: videojs$CurrentTimeDisplay,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options: videojs$ComponentOptions): videojs$CurrentTimeDisplay
};


/**
 * Spacer specifically meant to be used as an insertion point for new plugins, etc.
 */
declare type videojs$CustomControlSpacer = {

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Create the `Component`'s DOM element
 * @return The element that was created.
 */
createEl(): HTMLDivElement
} & videojs$Spacer


declare var videojs$CustomControlSpacer: {
prototype: videojs$CustomControlSpacer,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 * @param ready Function that gets called when the `Component` is ready.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions,
ready?: videojs$Component.Component$ReadyCallback): videojs$CustomControlSpacer
};


/**
 * The button component for toggling and selecting descriptions
 */
declare type videojs$DescriptionsButton = {

/**
 * Handle text track change
 * @param event The event that caused this function to run
 * @listens TextTrackList#change
 */
handleTracksChange(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Allow sub components to stack CSS class names for the wrapper element
 * @return The constructed wrapper DOM `className`
 */
buildWrapperCSSClass(): string
} & videojs$TextTrackButton


declare var videojs$DescriptionsButton: {
prototype: videojs$DescriptionsButton,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 * @param ready The function to call when this component is ready.
 */
new (
player: videojs$Player,
videojs$options?: videojs$TrackButtonOptions,
ready?: videojs$Component.Component$ReadyCallback): videojs$DescriptionsButton
};


/**
 * Displays the duration
 */
declare type videojs$DurationDisplay = {

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Update duration time display.
 * @param event The `durationchange`, `timeupdate`, or `loadedmetadata` event that caused
this function to be called.
 * @listens Player#durationchange
 * @listens Player#timeupdate
 * @listens Player#loadedmetadata
 */
updateContent(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$TimeDisplay


declare var videojs$DurationDisplay: {
prototype: videojs$DurationDisplay,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options: videojs$ComponentOptions): videojs$DurationDisplay
};


/**
 * A display that indicates an error has occurred. This means that the video
 * is unplayable.
 */
declare type videojs$ErrorDisplay = {

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 * @deprecated Since version 5.
 */
buildCSSClass(): string,

/**
 * Gets the localized error message based on the `Player`s error.
 * @return The `Player`s error message localized or an empty string.
 */
content(): string
} & videojs$ModalDialog


declare var videojs$ErrorDisplay: {
prototype: videojs$ErrorDisplay,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ModalDialogOptions): videojs$ErrorDisplay
};

declare interface videojs$Dom {

/**
 * Finds a single DOM element matching `selector` within the optional
 * `context` of another DOM element (defaulting to `document`).
 * @param selector A valid CSS selector, which will be passed to `querySelector`.
 * @param context A DOM element within which to query. Can also be a selector
string in which case the first matching element will be used
as context. If missing (or no element matches selector), falls
back to `document`.
 * @return The element that was found or null.
 */
$(selector: string, context?: string | Element): Element,

/**
 * Finds a all DOM elements matching `selector` within the optional
 * `context` of another DOM element (defaulting to `document`).
 * @param selector A valid CSS selector, which will be passed to `querySelectorAll`.
 * @param context A DOM element within which to query. Can also be a selector
string in which case the first matching element will be used
as context. If missing (or no element matches selector), falls
back to `document`.
 * @return A element list of elements that were found. Will be empty if none were found.
 */
$$(selector: string, context?: string | Element): NodeList,

/**
 * Add a CSS class name to an element
 * @param element Element to add class name to.
 * @param classToAdd Class name to add.
 * @return The dom element with the added class name.
 */
addClass(element: Element, classToAdd: string): Element,

/**
 * Normalizes and appends content to an element.
 * @param el Element to append normalized content to.
 * @param content See the `content` argument of {@link dom:normalizeContent}
 * @return The element with appended normalized content.
 */
appendContent(el: Element, content: videojs$Content | videojs$Content[]): Element,

/**
 * Attempt to block the ability to select text while dragging controls
 */
blockTextSelection(): void,

/**
 * Creates an element and applies properties.
 * @param tagName Name of tag to be created.
 * @param properties Element properties to be applied.
 * @param attributes Element attributes to be applied.
 * @param content Contents for the element (see: {@link dom:normalizeContent})
 * @return The element that was created.
 */
createEl(
tagName: "canvas",
properties?: any,
attributes?: any,
content?: any): HTMLCanvasElement,
createEl(
tagName: "form",
properties?: any,
attributes?: any,
content?: any): HTMLFormElement,
createEl(
tagName: "img",
properties?: any,
attributes?: any,
content?: any): HTMLImageElement,
createEl(
tagName: "input",
properties?: any,
attributes?: any,
content?: any): HTMLInputElement,
createEl(
tagName: "option",
properties?: any,
attributes?: any,
content?: any): HTMLOptionElement,
createEl(
tagName: "select",
properties?: any,
attributes?: any,
content?: any): HTMLSelectElement,
createEl(
tagName: "textarea",
properties?: any,
attributes?: any,
content?: any): HTMLTextAreaElement,
createEl(tagName?: string, properties?: any, attributes?: any, content?: any): Element,

/**
 * Empties the contents of an element.
 * @param el The element to empty children from
 * @return The element with no children
 */
emptyEl(el: Element): Element,

/**
 * Offset Left.
 * getBoundingClientRect technique from
 * John Resig
 * @see http://ejohn.org/blog/getboundingclientrect-is-awesome/
 * @param el Element from which to get offset
 * @return The position of the element that was passed in.
 */
findPosition(el: Element): Dom$Position,

/**
 * Get the value of an element's attribute
 * @param el A DOM element
 * @param attribute Attribute to get the value of
 * @return value of the attribute
 */
getAttribute(el: Element, attribute: string): string,

/**
 * Get an element's attribute values, as defined on the HTML tag
 * Attributes are not the same as properties. They're defined on the tag
 * or with setAttribute (which shouldn't be used with HTML)
 * This will return true or false for boolean attributes.
 * @param tag Element from which to get tag attributes.
 * @return All attributes of the element.
 */
getAttributes(tag: Element): any,

/**
 * Identical to the native `getBoundingClientRect` function, but ensures that
 * the method is supported at all (it is in all browsers we claim to support)
 * and that the element is in the DOM before continuing.
 * 
 * This wrapper function also shims properties which are not provided by some
 * older browsers (namely, IE8).
 * 
 * Additionally, some browsers do not support adding properties to a
 * `ClientRect`/`DOMRect` object; so, we shallow-copy it with the standard
 * properties (except `x` and `y` which are not widely supported). This helps
 * avoid implementations where keys are non-enumerable.
 * @param el Element whose `ClientRect` we want to calculate.
 * @return Always returns a plain
 */
getBoundingClientRect(el: Element): ClientRect,

/**
 * Get pointer position in element
 * Returns an object with x and y coordinates.
 * The base on the coordinates are the bottom left of the element.
 * @param el Element on which to get the pointer position on
 * @param event Event object
 * @return A Coordinates object corresponding to the mouse position.
 */
getPointerPosition(el: Element, event: EventTarget$Event): videojs$Dom.Dom$Coordinates,

/**
 * Check if an element has a CSS class
 * @param element Element to check
 * @param classToCheck Class name to check for
 * @return - True if the element had the class
- False otherwise.
 * @throws {Error}
Throws an error if `classToCheck` has white space.
 */
hasClass(element: Element, classToCheck: string): boolean,

/**
 * Normalizes and inserts content into an element; this is identical to
 * `appendContent()`, except it empties the element first.
 * @param el Element to insert normalized content into.
 * @param content See the `content` argument of {@link dom:normalizeContent}
 * @return The element with inserted normalized content.
 */
insertContent(el: Element, content: string | Element | (() => any)): Element,

/**
 * Determines, via duck typing, whether or not a value is a DOM element.
 * @param value The thing to check
 * @return - True if it is a DOM element
- False otherwise
 */
isEl(value: any): boolean,

/**
 * Determines if the current DOM is embedded in an iframe.
 * @return
 */
isInFrame(): boolean,

/**
 * Whether the current DOM interface appears to be real.
 * @return
 */
isReal(): boolean,

/**
 * Check if event was a single left click
 * @param event Event object
 * @return - True if a left click
- False if not a left click
 */
isSingleLeftClick(event: videojs$EventTarget.EventTarget$Event): boolean,

/**
 * Determines, via duck typing, whether or not a value is a text node.
 * @param value Check if this value is a text node.
 * @return - True if it is a text node
- False otherwise
 */
isTextNode(value: any): boolean,

/**
 * Normalizes content for eventual insertion into the DOM.
 * 
 * This allows a wide range of content definition methods, but protects
 * from falling into the trap of simply writing to `innerHTML`, which is
 * an XSS concern.
 * 
 * The content for an element can be passed in multiple types and
 * combinations, whose behavior is as follows:
 * @param content - String: Normalized into a text node.
- Element/TextNode: Passed through.
- Array: A one-dimensional array of strings, elements, nodes, or functions
(which return single strings, elements, or nodes).
- Function: If the sole argument, is expected to produce a string, element,
node, or array as defined above.
 * @return All of the content that was passed in normalized.
 */
normalizeContent(content: videojs$Content | videojs$Content[]): videojs$Content[],

/**
 * Insert an element as the first child node of another
 * @param child Element to insert
 * @param parent Element to insert child into
 */
prependTo(child: Element, parent: Element): void,

/**
 * Remove an element's attribute
 * @param el A DOM element
 * @param attribute Attribute to remove
 */
removeAttribute(el: Element, attribute: string): void,

/**
 * Remove a CSS class name from an element
 * @param element Element to remove a class name from.
 * @param classToRemove Class name to remove
 * @return The dom element with class name removed.
 */
removeClass(element: Element, classToRemove: string): Element,

/**
 * Set the value of an element's attribute
 * @param el A DOM element
 * @param attribute Attribute to set
 * @param value Value to set the attribute to
 */
setAttribute(el: Element, attribute: string, value: string): void,

/**
 * Apply attributes to an HTML element.
 * @param el Element to add attributes to.
 * @param attributes Attributes to be applied.
 */
setAttributes(el: Element, attributes: any): void,

/**
 * Injects text into an element, replacing any existing contents entirely.
 * @param el The element to add text content into
 * @param text The text content to add.
 * @return The element with added text content.
 */
textContent(el: Element, text: string): Element,

/**
 * Adds or removes a CSS class name on an element depending on an optional
 * condition or the presence/absence of the class name.
 * @param element The element to toggle a class name on.
 * @param classToToggle The class that should be toggled
 * @param predicate See the return value for {@link Dom~PredicateCallback}
 * @return The element with a class that has been toggled.
 */
toggleClass(
element: Element,
classToToggle: string,
predicate: videojs$Dom.Dom$Predicate): Element,

/**
 * Turn off text selection blocking
 */
unblockTextSelection(): void
} 


/**
 * x and y coordinates for a dom element or mouse pointer
 */
declare interface Dom$Coordinates {

/**
 * x coordinate in pixels
 */
x: number,

/**
 * y coordinate in pixels
 */
y: number
} 


/**
 * The callback definition for toggleElClass.
 * @param element The DOM element of the Component.
 * @param classToToggle The `className` that wants to be toggled
 * @return - If true the `classToToggle` will get added to `element`.
- If false the `classToToggle` will get removed from `element`.
- If undefined this callback will be ignored
 */
declare type Dom$Predicate = (element: Element, classToToggle: string) => boolean;


/**
 * The postion of a DOM element on the page.
 */
declare interface Dom$Position {

/**
 * Pixels on top
 */
top: number,

/**
 * Pixels to the left
 */
left: number
} 


/**
 * Contains methods that provide event capabilities to an object which is passed
 * to {@link module:evented|evented}.
 */
declare interface videojs$EventedMixin {

/**
 * Removes listener(s) from event(s) on an evented object.
 * @param targetOrType If this is a string or array, it represents the event type(s).

Another evented object can be passed here instead, in which case
ALL 3 arguments are _required_.
 * @param typeOrListener If the first argument was a string or array, this may be the
listener function. Otherwise, this is a string or array of event
type(s).
 * @param listener If the first argument was another evented object, this will be
the listener function; otherwise, _all_ listeners bound to the
event type(s) will be removed.
 */
off(
target?: videojs$Component | Element,
type?: string | string[],
listener?: (...args: any[]) => void): void,
off(type?: string | string[], listener?: (...args: any[]) => void): void,

/**
 * Add a listener to an event (or events) on this object or another evented
 * object.
 * @param targetOrType If this is a string or array, it represents the event type(s)
that will trigger the listener.

Another evented object can be passed here instead, which will
cause the listener to listen for events on _that_ object.

In either case, the listener's `this` value will be bound to
this object.
 * @param typeOrListener If the first argument was a string or array, this should be the
listener function. Otherwise, this is a string or array of event
type(s).
 * @param listener If the first argument was another evented object, this will be
the listener function.
 */
on(
target?: videojs$Component | Element,
type?: string | string[],
listener?: (...args: any[]) => void): void,
on(type?: string | string[], listener?: (...args: any[]) => void): void,

/**
 * Add a listener to an event (or events) on this object or another evented
 * object. The listener will only be called once and then removed.
 * @param targetOrType If this is a string or array, it represents the event type(s)
that will trigger the listener.

Another evented object can be passed here instead, which will
cause the listener to listen for events on _that_ object.

In either case, the listener's `this` value will be bound to
this object.
 * @param typeOrListener If the first argument was a string or array, this should be the
listener function. Otherwise, this is a string or array of event
type(s).
 * @param listener If the first argument was another evented object, this will be
the listener function.
 */
one(
target?: videojs$Component | Element,
type?: string | string[],
listener?: (...args: any[]) => void): void,
one(type?: string | string[], listener?: (...args: any[]) => void): void,

/**
 * Fire an event on this evented object, causing its listeners to be called.
 * @param event An event type or an object with a type property.
 * @param hash An additional object to pass along to listeners.
 * @return Whether or not the default behavior was prevented.
 */
trigger(event: any, hash?: any): boolean
} 


/**
 * `EventTarget` is a class that can have the same API as the DOM `EventTarget`. It
 * adds shorthand functions that wrap around lengthy functions. For example:
 * the `on` function is a wrapper around `addEventListener`.
 * @see [EventTarget Spec]{@link https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget}
 */
declare interface videojs$EventTarget {

/**
 * An alias of {@link EventTarget#on}. Allows `EventTarget` to mimic
 * the standard DOM API.
 * @param type An event name or an array of event names.
 * @param fn The function to call with `EventTarget`s
 * @see {@link EventTarget#on}
 */
addEventListener(
type: string | string[],
fn: videojs$EventTarget.EventTarget$EventListener): void,

/**
 * An alias of {@link EventTarget#trigger}. Allows `EventTarget` to mimic
 * the standard DOM API.
 * @param event The name of the event, an `Event`, or an object with a key of type set to
an event name.
 * @see {@link EventTarget#trigger}
 */
dispatchEvent(event: string | EventTarget$Event): void,

/**
 * Removes an `event listener` for a specific event from an instance of `EventTarget`.
 * This makes it so that the `event listener` will no longer get called when the
 * named event happens.
 * @param type An event name or an array of event names.
 * @param fn The function to remove.
 */
off(
type: string | string[],
fn: videojs$EventTarget.EventTarget$EventListener): void,

/**
 * Adds an `event listener` to an instance of an `EventTarget`. An `event listener` is a
 * function that will get called when an event with a certain name gets triggered.
 * @param type An event name or an array of event names.
 * @param fn The function to call with `EventTarget`s
 */
on(
type: string | string[],
fn: videojs$EventTarget.EventTarget$EventListener): void,

/**
 * This function will add an `event listener` that gets triggered only once. After the
 * first trigger it will get removed. This is like adding an `event listener`
 * with {@link EventTarget#on} that calls {@link EventTarget#off} on itself.
 * @param type An event name or an array of event names.
 * @param fn The function to be called once for each event name.
 */
one(
type: string | string[],
fn: videojs$EventTarget.EventTarget$EventListener): void,

/**
 * An alias of {@link EventTarget#off}. Allows `EventTarget` to mimic
 * the standard DOM API.
 * @param type An event name or an array of event names.
 * @param fn The function to remove.
 * @see {@link EventTarget#off}
 */
removeEventListener(
type: string | string[],
fn: videojs$EventTarget.EventTarget$EventListener): void,

/**
 * This function causes an event to happen. This will then cause any `event listeners`
 * that are waiting for that event, to get called. If there are no `event listeners`
 * for an event then nothing will happen.
 * 
 * If the name of the `Event` that is being triggered is in `EventTarget.allowedEvents_`.
 * Trigger will also call the `on` + `uppercaseEventName` function.
 * 
 * Example:
 * 'click' is in `EventTarget.allowedEvents_`, so, trigger will attempt to call
 * `onClick` if it exists.
 * @param event The name of the event, an `Event`, or an object with a key of type set to
an event name.
 */
trigger(event: string | videojs$EventTarget.EventTarget$Event): void
} 

declare var videojs$EventTarget: {
prototype: videojs$EventTarget,
new (): videojs$EventTarget
};


/**
 * A Custom DOM event.
 * @see [Properties]{@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent}
 */
declare type EventTarget$Event = {
[key: string]: any
} & CustomEvent



/**
 * All event listeners should follow the following format.
 * @param event the event that triggered this function
 * @param hash hash of data sent during the event
 */
declare type EventTarget$EventListener = ((e: EventTarget$Event, data?: any) => void);


/**
 * Toggle fullscreen video
 */
declare type videojs$FullscreenToggle = {

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Handles fullscreenchange on the player and change control text accordingly.
 * @param event The {@link Player#fullscreenchange} event that caused this function to be
called.
 * @listens Player#fullscreenchange
 */
handleFullscreenChange(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * This gets called when an `FullscreenToggle` is "clicked". See
 * {@link ClickableComponent} for more detailed information on what a click can be.
 * @param event The `keydown`, `tap`, or `click` event that caused this function to be
called.
 * @listens tap
 * @listens click
 */
handleClick(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$Button


declare var videojs$FullscreenToggle: {
prototype: videojs$FullscreenToggle,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions): videojs$FullscreenToggle
};


/**
 * The current list of {@link HtmlTrackElement}s.
 */
declare interface videojs$HTMLTrackElementList {
[index: number]: HTMLTrackElement,

/**
 * The current number of `Track`s in the this Trackist.
 */
length: number
} 

declare var videojs$HTMLTrackElementList: {
prototype: videojs$HTMLTrackElementList,

/**
 * Create an instance of this class.
 * @param tracks A list of `HtmlTrackElement` to instantiate the list with.
 */
new (tracks?: HTMLTrackElement[]): videojs$HTMLTrackElementList
};

declare interface videojs$LanguageTranslations {
[language: string]: string
} 


/**
 * @file log.js
 */
declare interface videojs$Log {

/**
 * Logs plain debug messages. Similar to `console.log`.
 * @param args One or more messages or objects that should be logged.
 */
(...args: any[]): void,

/**
 * Logs debug messages. Similar to `console.debug`, but may also act as a comparable
 * log if `console.debug` is not available
 * @param args One or more messages or objects that should be logged as debug.
 */
debug(...args: any[]): void,

/**
 * Logs error messages. Similar to `console.error`.
 * @param args One or more messages or objects that should be logged as an error
 */
error(...args: any[]): void,
history: {

/**
 * Returns an array containing everything that has been logged to the history.
 * 
 * This array is a shallow clone of the internal history record. However, its
 * contents are _not_ cloned; so, mutating objects inside this array will
 * mutate them in history.
 * @return
 */
(): any[],

/**
 * Clears the internal history tracking, but does not prevent further history
 * tracking.
 */
clear(): void,

/**
 * Disable history tracking if it is currently enabled.
 */
disable(): void,

/**
 * Enable history tracking if it is currently disabled.
 */
enable(): void
},

/**
 * Get or set the current logging level. If a string matching a key from
 * {@link log.levels} is provided, acts as a setter. Regardless of argument,
 * returns the current logging level.
 * @param lvl Pass to set a new logging level.
 * @return The current logging level.
 */
level(lvl: string): string,

/**
 * Enumeration of available logging levels, where the keys are the level names
 * and the values are `|`-separated strings containing logging methods allowed
 * in that logging level. These strings are used to create a regular expression
 * matching the function name being called.
 * 
 * Levels provided by video.js are:
 * 
 * - `off`: Matches no calls. Any value that can be cast to `false` will have
 *    this effect. The most restrictive.
 * - `all`: Matches only Video.js-provided functions (`debug`, `log`,
 *    `log.warn`, and `log.error`).
 * - `debug`: Matches `log.debug`, `log`, `log.warn`, and `log.error` calls.
 * - `info` (default): Matches `log`, `log.warn`, and `log.error` calls.
 * - `warn`: Matches `log.warn` and `log.error` calls.
 * - `error`: Matches only `log.error` calls.
 */
levels: {
all: string,
videojs$off: string,
debug: string,
info: string,
warn: string,
error: string,
DEFAULT: string
},

/**
 * Logs warning messages. Similar to `console.warn`.
 * @param args One or more messages or objects that should be logged as a warning.
 */
warn(...args: any[]): void
} 


/**
 * A Custom `MediaError` class which mimics the standard HTML5 `MediaError` class.
 * @see [MediaError Spec]{@link https://dev.w3.org/html5/spec-author-view/video.html#mediaerror}
 * @see [Encrypted MediaError Spec]{@link https://www.w3.org/TR/2013/WD-encrypted-media-20130510/#error-codes}
 */
declare interface videojs$MediaError {

/**
 * The error code that refers two one of the defined `MediaError` types
 */
code: number,

/**
 * W3C error code for any custom error.
 * @default 0
 */
MEDIA_ERR_CUSTOM: 0,

/**
 * W3C error code for media error aborted.
 * @default 1
 */
MEDIA_ERR_ABORTED: 1,

/**
 * W3C error code for any network error.
 * @default 2
 */
MEDIA_ERR_NETWORK: 2,

/**
 * W3C error code for any decoding error.
 * @default 3
 */
MEDIA_ERR_DECODE: 3,

/**
 * W3C error code for any time that a source is not supported.
 * @default 4
 */
MEDIA_ERR_SRC_NOT_SUPPORTED: 4,

/**
 * W3C error code for any time that a source is encrypted.
 * @default 5
 */
MEDIA_ERR_ENCRYPTED: 5,

/**
 * An optional message that to show with the error. Message is not part of the HTML5
 * video spec but allows for more informative custom errors.
 */
message: string,

/**
 * An optional status code that can be set by plugins to allow even more detail about
 * the error. For example a plugin might provide a specific HTTP status code and an
 * error message for that code. Then when the plugin gets that error this class will
 * know how to display an error message for it. This allows a custom message to show
 * up on the `Player` error overlay.
 */
status: any[]
} 

declare var videojs$MediaError: {
prototype: videojs$MediaError,

/**
 * Create an instance of this class.
 * @param value This can be of multiple types:
- number: should be a standard error code
- string: an error message (the code will be 0)
- Object: arbitrary properties
- `MediaError` (native): used to populate a video.js `MediaError` object
- `MediaError` (video.js): will return itself if it's already a
video.js `MediaError` object.
 */
new (
value: number | string | {
[key: string]: any
} | videojs$MediaError): videojs$MediaError,

/**
 * The default `MediaError` messages based on the {@link MediaError.errorTypes}.
 */
defaultMessages: string[],

/**
 * Errors indexed by the W3C standard. The order **CANNOT CHANGE**! See the
 * specification listed under {@link MediaError} for more information.
 * 
 * 0 - MEDIA_ERR_CUSTOM
 * 1 - MEDIA_ERR_CUSTOM
 * 2 - MEDIA_ERR_ABORTED
 * 3 - MEDIA_ERR_NETWORK
 * 4 - MEDIA_ERR_SRC_NOT_SUPPORTED
 * 5 - MEDIA_ERR_ENCRYPTED
 */
+errorTypes: string[],

/**
 * W3C error code for any custom error.
 * @default 0
 */
MEDIA_ERR_CUSTOM: 0,

/**
 * W3C error code for media error aborted.
 * @default 1
 */
MEDIA_ERR_ABORTED: 1,

/**
 * W3C error code for any network error.
 * @default 2
 */
MEDIA_ERR_NETWORK: 2,

/**
 * W3C error code for any decoding error.
 * @default 3
 */
MEDIA_ERR_DECODE: 3,

/**
 * W3C error code for any time that a source is not supported.
 * @default 4
 */
MEDIA_ERR_SRC_NOT_SUPPORTED: 4,

/**
 * W3C error code for any time that a source is encrypted.
 * @default 5
 */
MEDIA_ERR_ENCRYPTED: 5
};


/**
 * The Menu component is used to build popup menus, including subtitle and
 * captions selection menus.
 */
declare type videojs$Menu = {
options_: videojs$MenuOptions,
menuButton_: videojs$MenuButton,

/**
 * Add a {@link MenuItem} to the menu.
 * @param component The name or instance of the `MenuItem` to add.
 */
addItem(component: string | videojs$MenuItem): void,

/**
 * Create the `Menu`s DOM element.
 * @return the element that was created
 */
createEl(): HTMLDivElement,
dispose(): void,

/**
 * Set focus on a {@link MenuItem} in the `Menu`.
 * @param item Index of child item set focus on.
 */
focus(item?: any): void,

/**
 * Handle a `keydown` event on this menu. This listener is added in the constructor.
 * @param event A `keydown` event that happened on the menu.
 * @listens keydown
 */
handleKeyPress(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Move to previous (higher) menu item for keyboard users.
 */
stepBack(): void,

/**
 * Move to next (lower) menu item for keyboard users.
 */
stepForward(): void
} & videojs$Component


declare var videojs$Menu: {
prototype: videojs$Menu,

/**
 * Create an instance of this class.
 * @param player the player that this component should attach to
 * @param options Object of option names and values
 */
new (player: videojs$Player, videojs$options?: videojs$MenuOptions): videojs$Menu
};

declare type videojs$MenuOptions = {
menuButton: videojs$MenuButton
} & videojs$ComponentOptions



/**
 * A `MenuButton` class for any popup {@link Menu}.
 */
declare type videojs$MenuButton = {
options_: videojs$MenuButtonOptions,
menu: videojs$Menu,
menuButton_: videojs$Button,

/**
 * Remove the focus from the actual button, not this element
 */
blur(): void,

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Allow sub components to stack CSS class names for the wrapper element
 * @return The constructed wrapper DOM `className`
 */
buildWrapperCSSClass(): string,

/**
 * Get or set the localized control text that will be used for accessibility.
 * 
 * > NOTE: This will come from the internal `menuButton_` element.
 * @param text Control text for element.
 * @param el Element to set the title on.
 * @return - The control text when getting
 */
controlText(text?: string, el?: Element): string,

/**
 * Create the `MenuButtons`s DOM element.
 * @return The element that gets created.
 */
createEl(): Element,

/**
 * Create the list of menu items. Specific to each subclass.
 */
createItems(): videojs$MenuItem[],

/**
 * Create the menu and add all items to it.
 * @return The constructed menu
 */
createMenu(): videojs$Menu,

/**
 * Disable the `MenuButton`. Don't allow it to be clicked.
 */
disable(): void,

/**
 * Enable the `MenuButton`. Allow it to be clicked.
 */
enable(): void,

/**
 * Set the focus to the actual button, not to this element
 */
focus(): void,

/**
 * Called when a `MenuButton` loses focus. Turns off the listener for
 * `keydown` events. Which Stops `this.handleKeyPress` from getting called.
 * @param event The `blur` event that caused this function to be called.
 * @listens blur
 */
handleBlur(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle a click on a `MenuButton`.
 * See {@link ClickableComponent#handleClick} for instances where this is called.
 * @param event The `keydown`, `tap`, or `click` event that caused this function to be
called.
 * @listens tap
 * @listens click
 */
handleClick(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * This gets called when a `MenuButton` gains focus via a `focus` event.
 * Turns on listening for `keydown` events. When they happen it
 * calls `this.handleKeyPress`.
 * @param event The `focus` event that caused this function to be called.
 * @listens focus
 */
handleFocus(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle tab, escape, down arrow, and up arrow keys for `MenuButton`. See
 * {@link ClickableComponent#handleKeyPress} for instances where this is called.
 * @param event The `keydown` event that caused this function to be called.
 * @listens keydown
 */
handleKeyPress(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle a `keydown` event on a sub-menu. The listener for this is added in
 * the constructor.
 * @param event Key press event
 * @listens keydown
 */
handleSubmenuKeyPress(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Put the current `MenuButton` into a pressed state.
 */
pressButton(): void,

/**
 * Take the current `MenuButton` out of a pressed state.
 */
unpressButton(): void,

/**
 * Update the menu based on the current state of its items.
 */
update(): void
} & videojs$Component


declare var videojs$MenuButton: {
prototype: videojs$MenuButton,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$MenuButtonOptions): videojs$MenuButton
};

declare type videojs$MenuButtonOptions = {
title?: string,
iniChildren?: boolean
} & videojs$ComponentOptions



/**
 * The component for a menu item. `<li>`
 */
declare type videojs$MenuItem = {
options_: videojs$MenuItemOptions,

/**
 * Create the `MenuItem's DOM element
 * 		 *
 * 		 * @param [type=li]
 * 		 *        Element's node type, not actually used, always set to `li`.
 * 		 *
 * 		 * @param [props={}]
 * 		 *        An object of properties that should be set on the element
 * 		 *
 * 		 * @param [attrs={}]
 * 		 *        An object of attributes that should be set on the element
 * 		 *
 * 		 * @return The element that gets created.
 * 		 *
 */
createEl(type: string, props?: any, attrs?: any): HTMLLIElement,

/**
 * Any click on a `MenuItem` puts it into the selected state.
 * See {@link ClickableComponent#handleClick} for instances where this is called.
 * @param event The `keydown`, `tap`, or `click` event that caused this function to be
called.
 * @listens tap
 * @listens click
 */
handleClick(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Set the state for this menu item as selected or not.
 * @param selected if the menu item is selected or not
 */
selected(selected: boolean): void
} & videojs$ClickableComponent


declare var videojs$MenuItem: {
prototype: videojs$MenuItem,

/**
 * Creates an instance of the this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$MenuItemOptions): videojs$MenuItem
};

declare type videojs$MenuItemOptions = {
label?: string,
multiSelectable?: boolean,
selectable?: boolean,
selected?: boolean
} & videojs$ComponentOptions


declare interface videojs$Middleware {

/**
 * @param src
 * @param next
 */
setSource: (
src: videojs$Tech.Tech$SourceObject,
next: (err: any, next: (src: videojs$Tech.Tech$SourceObject) => void) => void) => void
} 


/**
 * The `ModalDialog` displays over the video and its controls, which blocks
 * interaction with the player until it is closed.
 * 
 * Modal dialogs include a "Close" button and will close when that button
 * is activated - or when ESC is pressed anywhere.
 */
declare type videojs$ModalDialog = {
options_: videojs$ModalDialogOptions,
closeable_: boolean,

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Closes the modal, does nothing if the `ModalDialog` is
 * not open.
 * @fires ModalDialog#beforemodalclose
 * @fires ModalDialog#modalclose
 */
close(): void,

/**
 * Check to see if the `ModalDialog` is closeable via the UI.
 * @param value If given as a boolean, it will set the `closeable` option.
 * @return Returns the final value of the closable option.
 */
closeable(value: boolean): boolean,

/**
 * Gets or sets the modal content, which gets normalized before being
 * rendered into the DOM.
 * 
 * This does not update the DOM or fill the modal, but it is called during
 * that process.
 * @param value If defined, sets the internal content value to be used on the
next call(s) to `fill`. This value is normalized before being
inserted. To "clear" the internal content value, pass `null`.
 * @return The current content of the modal dialog
 */
content(value?: videojs$Content): any,

/**
 * Create the `ModalDialog`'s DOM element
 * @return The DOM element that gets created.
 */
createEl(): HTMLDivElement,

/**
 * Returns the description string for this modal. Primarily used for
 * accessibility.
 * @return The localized or raw description of this modal.
 */
description(): string,
dispose(): void,

/**
 * Empties the content element. This happens anytime the modal is filled.
 * @fires ModalDialog#beforemodalempty
 * @fires ModalDialog#modalempty
 */
empty(): void,

/**
 * Fill the modal's content element with the modal's "content" option.
 * The content element will be emptied before this change takes place.
 */
fill(): void,

/**
 * Fill the modal's content element with arbitrary content.
 * The content element will be emptied before this change takes place.
 * @fires ModalDialog#beforemodalfill
 * @fires ModalDialog#modalfill
 * @param content The same rules apply to this as apply to the `content` option.
 */
fillWith(content?: videojs$Content): void,

/**
 * Keydown handler. Attached when modal is focused.
 * @listens keydown
 */
handleKeyDown(): void,

/**
 * Handles `keydown` events on the document, looking for ESC, which closes
 * the modal.
 * @param e The keypress that triggered this event.
 * @listens keydown
 */
handleKeyPress(e: videojs$EventTarget.EventTarget$Event): void,

/**
 * Returns the label string for this modal. Primarily used for accessibility.
 * @return the localized or raw label of this modal.
 */
label(): string,

/**
 * Opens the modal.
 * @fires ModalDialog#beforemodalopen
 * @fires ModalDialog#modalopen
 */
open(): void,

/**
 * If the `ModalDialog` is currently open or closed.
 * @param value If given, it will open (`true`) or close (`false`) the modal.
 * @return the current open state of the modaldialog
 */
opened(value?: boolean): boolean
} & videojs$Component


declare var videojs$ModalDialog: {
prototype: videojs$ModalDialog,

/**
 * Create an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ModalDialogOptions): videojs$ModalDialog
};


/**
 * Options for this class
 * @param content Provide customized content for this modal.
 * @param description A text description for the modal, primarily for accessibility.
 * @param fillAlways Normally, modals are automatically filled only the first time
they open. This tells the modal to refresh its content
every time it opens.
 * @param label A text label for the modal, primarily for accessibility.
 * @param temporary If `true`, the modal can only be opened once; it will be
disposed as soon as it's closed.
 * @param uncloseable If `true`, the user will not be able to close the modal
through the UI in the normal ways. Programmatic closing is
still possible.
 */
declare type videojs$ModalDialogOptions = {
content?: any,
description?: string,
fillAlways?: boolean,
label?: string,
temporary?: boolean,
uncloseable?: boolean
} & videojs$ComponentOptions



/**
 * The {@link MouseTimeDisplay} component tracks mouse movement over the
 * {@link ProgressControl}. It displays an indicator and a {@link TimeTooltip}
 * indicating the time which is represented by a given point in the
 * {@link ProgressControl}.
 */
declare type videojs$MouseTimeDisplay = {

/**
 * Create the DOM element for this class.
 * @return The element that was created.
 */
createEl(): HTMLDivElement,

/**
 * Enqueues updates to its own DOM as well as the DOM of its
 * {@link TimeTooltip} child.
 * @param seekBarRect The `ClientRect` for the {@link SeekBar} element.
 * @param seekBarPoint A number from 0 to 1, representing a horizontal reference point
from the left edge of the {@link SeekBar}
 */
update(seekBarRect: ClientRect, seekBarPoint: number): void
} & videojs$Component


declare var videojs$MouseTimeDisplay: {
prototype: videojs$MouseTimeDisplay,

/**
 * Creates an instance of this class.
 * @param player The {@link Player} that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions): videojs$MouseTimeDisplay
};


/**
 * An instance of the `Player` class is created when any of the Video.js setup methods
 * are used to initialize a video.
 * 
 * After an instance has been created it can be accessed globally in two ways:
 * 1. By calling `videojs('example_video_1');`
 * 2. By using it directly via  `videojs.players.example_video_1;`
 */
declare type videojs$Player = {
bigPlayButton: videojs$Button,
controlBar: videojs$ControlBar,
errorDisplay: videojs$ModalDialog,
loadingSpinner: videojs$Component,
options_: videojs$PlayerOptions,
userActivity_: boolean,
userActive_: boolean,

/**
 * A getter/setter for the `Player`'s aspect ratio.
 * @param ratio The value to set the `Player's aspect ratio to.
		 *
		 * @return - The current aspect ratio of the `Player` when getting.
		 *         - undefined when setting
		 *
 */
aspectRatio(ratio: string): void,
aspectRatio(): string,

/**
 * Get or set the autoplay option. When this is a boolean it will
 * modify the attribute on the tech. When this is a string the attribute on
 * the tech will be removed and `Player` will handle autoplay on loadstarts.
 * @param value - true: autoplay using the browser behavior
- false: do not autoplay
- 'play': call play() on every loadstart
- 'muted': call muted() then play() on every loadstart
- 'any': call play() on every loadstart. if that fails call muted() then play().
- *: values other than those listed here will be set `autoplay` to true
 * @return The current value of autoplay when getting
 */
autoplay(value?: boolean | string): void,
autoplay(): boolean | string,

/**
 * Get the remote {@link TextTrackList}
 * @return The current remote text track list
 */
textTracks(): videojs$TextTrackList,

/**
 * Get the remote {@link TextTrackList}
 * @return The current remote text track list
 */
remoteTextTracks(): videojs$TextTrackList,

/**
 * Create a remote {@link TextTrack} and an {@link HTMLTrackElement}. It will
 * automatically removed from the video element whenever the source changes, unless
 * manualCleanup is set to false.
 * @param options Options to pass to {@link HTMLTrackElement} during creation. See
{@link HTMLTrackElement} for object properties that you should use.
 * @param manualCleanup if set to false, the TextTrack will be
 * @return the HTMLTrackElement that was created and added
to the HtmlTrackElementList and the remote
TextTrackList
 */
addRemoteTextTrack(
videojs$options: videojs$TextTrackOptions,
manualCleanup: boolean): HTMLTrackElement,

/**
 * A helper method for adding a {@link TextTrack} to our
 * {@link TextTrackList}.
 * 
 * In addition to the W3C settings we allow adding additional info through options.
 * @see http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-addtexttrack
 * @param kind the kind of TextTrack you are adding
 * @param label the label to give the TextTrack label
 * @param language the language to set on the TextTrack
 * @return the TextTrack that was added or undefined
if there is no tech
 */
addTextTrack(kind?: string, label?: string, language?: string): void,

/**
 * Get a TimeRange object with an array of the times of the video
 * that have been downloaded. If you just want the percent of the
 * video that's been downloaded, use bufferedPercent.
 * @see [Buffered Spec]{@link http://dev.w3.org/html5/spec/video.html#dom-media-buffered}
 * @return A mock TimeRange object (following HTML spec)
 */
buffered(): videojs$TimeRange,

/**
 * Get the ending time of the last buffered time range
 * This is used in the progress bar to encapsulate all time ranges.
 * @return The end of the last buffered time range
 */
bufferedEnd(): number,

/**
 * Get the percent (as a decimal) of the video that's been downloaded.
 * This method is not a part of the native HTML video API.
 * @return A decimal between 0 and 1 representing the percent
that is buffered 0 being 0% and 1 being 100%
 */
bufferedPercent(): number,

/**
 * Check whether the player can play a given mimetype
 * @see https://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-navigator-canplaytype
 * @param type The mimetype to check
 * @return 'probably', 'maybe', or '' (empty string)
 */
canPlayType(type: string): "probably" | "maybe" | "",
cancelFullScreen(): videojs$Player,

/**
 * Get or set whether or not the controls are showing.
 * @fires Player#controlsenabled
 * @param bool - true to turn controls on
- false to turn controls off
 * @return The current value of controls when getting
 */
controls(bool?: boolean): void,
controls(): boolean,

/**
 * Create the `Player`'s DOM element.
 * @return The DOM element that gets created.
 */
createEl(): Element,

/**
 * Creates a simple modal dialog (an instance of the {@link ModalDialog}
 * component) that immediately overlays the player with arbitrary
 * content and removes itself when closed.
 * @param content Same as {@link ModalDialog#content}'s param of the same name.
The most straight-forward usage is to provide a string or DOM
element.
 * @param options Extra options which will be passed on to the {@link ModalDialog}.
 * @check
 * @return the {@link ModalDialog} that was created
 */
createModal(
content: string | (() => any) | Element | any[],
videojs$options: any): videojs$ModalDialog,

/**
 * Returns the current source object.
 * @return The current source object
 */
currentSource(): videojs$Tech.Tech$SourceObject,

/**
 * Returns all of the current source objects.
 * @return The current source objects
 */
currentSources(): videojs$Tech.Tech$SourceObject[],

/**
 * Returns the fully qualified URL of the current source value e.g. http://mysite.com/video.mp4
 * Can be used in conjunction with `currentType` to assist in rebuilding the current source object.
 * @return The current source
 */
currentSrc(): string,

/**
 * Get or set the current time (in seconds)
 * @param seconds The time to seek to in seconds
 * @return - the current time in seconds when getting
 */
currentTime(seconds: number): void,
currentTime(): number,

/**
 * Get the current source type e.g. video/mp4
 * This can allow you rebuild the current source object so that you could load the same
 * source and tech later
 * @return The source MIME type
 */
currentType(): string,

/**
 * Get the current defaultMuted state, or turn defaultMuted on or off. defaultMuted
 * indicates the state of muted on initial playback.
 * 
 * ```js
 * 		 *   var myPlayer = videojs('some-player-id');
 * 		 *
 * 		 *   myPlayer.src("http://www.example.com/path/to/video.mp4");
 * 		 *
 * 		 *   // get, should be false
 * 		 *   console.log(myPlayer.defaultMuted());
 * 		 *   // set to true
 * 		 *   myPlayer.defaultMuted(true);
 * 		 *   // get should be true
 * 		 *   console.log(myPlayer.defaultMuted());
 * 		 * ```
 * @param defaultMuted - true to mute
- false to unmute
 * @return - true if defaultMuted is on and getting
- false if defaultMuted is off and getting
- A reference to the current player when setting
 */
defaultMuted(defaultMuted: boolean): void,
defaultMuted(): boolean,

/**
 * Gets or sets the current default playback rate. A default playback rate of
 * 1.0 represents normal speed and 0.5 would indicate half-speed playback, for instance.
 * defaultPlaybackRate will only represent what the initial playbackRate of a video was, not
 * not the current playbackRate.
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-defaultplaybackrate
 * @param rate New default playback rate to set.
 * @return - The default playback rate when getting or 1.0
- the player when setting
 */
defaultPlaybackRate(rate: number): videojs$Player,
defaultPlaybackRate(): boolean,

/**
 * A getter/setter for the `Player`'s width & height.
 * @param dimension This string can be:
- 'width'
- 'height'
 * @param value Value for dimension specified in the first argument.
 * @return The dimension arguments value when getting (width/height).
 */
dimension(dimension: "width" | "height", value: number): void,
dimension(dimension: "width" | "height"): number,

/**
 * An instance of the `Player` class is created when any of the Video.js setup methods
 * are used to initialize a video.
 * 
 * After an instance has been created it can be accessed globally in two ways:
 * 1. By calling `videojs('example_video_1');`
 * 2. By using it directly via  `videojs.players.example_video_1;`
 */
dispose(): void,

/**
 * Normally gets the length in time of the video in seconds;
 * in all but the rarest use cases an argument will NOT be passed to the method
 * 
 * > **NOTE**: The video must have started loading before the duration can be
 * known, and in the case of Flash, may not be known until the video starts
 * playing.
 * @fires Player#durationchange
 * @param seconds The duration of the video to set in seconds
 * @return - The duration of the video in seconds when getting
 */
duration(seconds: number): void,
duration(): number,

/**
 * A getter/setter/toggler for the vjs-fluid `className` on the `Player`.
 * @param bool - A value of true adds the class.
- A value of false removes the class.
- No value will toggle the fluid class.
 * @return - The value of fluid when getting.
- `undefined` when setting.
 */
fluid(bool: boolean): void,
fluid(): boolean,

/**
 * Get object for cached values.
 * @return get the current object cache
 */
getCache(): any,

/**
 * Gets available media playback quality metrics as specified by the W3C's Media
 * Playback Quality API.
 * @see [Spec]{@link https://wicg.github.io/media-playback-quality}
 * @return An object with supported media playback quality metrics or undefined if there
is no tech or the tech does not support it.
 */
getVideoPlaybackQuality(): any,

/**
 * Get the value of `ended` from the media element. `ended` indicates whether
 * the media has reached the end or not.
 * @return - The value of `ended` from the media element.
- True indicates that the media has ended.
- False indicates that the media has not ended.
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-ended}
 */
ended(): boolean,

/**
 * When fullscreen isn't supported we can stretch the
 * video container to as wide as the browser will let us.
 * @fires Player#enterFullWindow
 */
enterFullWindow(): void,

/**
 * Set or get the current MediaError
 * @fires Player#error
 * @param err A MediaError or a string/number to be turned
into a MediaError
 * @return The current MediaError when getting (or null)
 */
error(err: videojs$MediaError | string | number | null): void,
error(): videojs$MediaError | null,

/**
 * Return the video to its normal size after having been in full screen mode
 * @fires Player#fullscreenchange //noinspection JSUnresolvedVariable
 */
exitFullscreen(): videojs$Player,

/**
 * Exit full window
 * @fires Player#exitFullWindow
 */
exitFullWindow(): void,

/**
 * Reports whether or not a player has a plugin available.
 * 
 * This does not report whether or not the plugin has ever been initialized
 * on this player. For that, [usingPlugin]{@link Player#usingPlugin}.
 * @param name The name of a plugin.
 * @return Whether or not this player has the requested plugin available.
 */
hasPlugin(name: string): boolean,

/**
 * Add/remove the vjs-has-started class
 * @fires Player#firstplay
 * @param request - true: adds the class
- false: remove the class
 * @return the boolean value of hasStarted_
 */
hasStarted(request: boolean): void,
hasStarted(): boolean,

/**
 * A getter/setter for the `Player`'s height. Returns the player's configured value.
 * To get the current height use `currentheight()`.
 * @param value The value to set the `Player`'s heigth to.
 * @return The current height of the `Player` when getting.
 */
height(value: number): void,
height(): number,

/**
 * Gets or sets the audio flag
 * @param bool - true signals that this is an audio player
- false signals that this is not an audio player
 * @return The current value of isAudio when getting
 */
isAudio(bool: boolean): void,
isAudio(): boolean,

/**
 * Check if the player is in fullscreen mode or tell the player that it
 * is or is not in fullscreen mode.
 * 
 * > NOTE: As of the latest HTML5 spec, isFullscreen is no longer an official
 * property and instead document.fullscreenElement is used. But isFullscreen is
 * still a valuable property for internal player workings.
 * @param isFS Set the players current fullscreen state
 * @return - true if fullscreen is on and getting
- false if fullscreen is off and getting
 */
isFullscreen(isFS: boolean): void,
isFullscreen(): boolean,

/**
 * The player's language code
 * NOTE: The language should be set in the player options if you want the
 * the controls to be built with a specific language. Changing the language
 * later will not update controls text.
 * @param code the language code to set the player to
 * @return The current language code when getting
 */
language(code: string): void,
language(): string,

/**
 * Get the player's language dictionary
 * Merge every time, because a newly added plugin might call videojs.addLanguage() at any time
 * Languages specified directly in the player options have precedence
 * @return An array of of supported languages
 */
languages(): string[],
languageSwitch(videojs$options: any): void,

/**
 * Begin loading the src data.
 */
load(): void,

/**
 * Get or set the loop attribute on the video element.
 * @param value - true means that we should loop the video
- false means that we should not loop the video
 * @return The current value of loop when getting
 */
loop(value?: boolean): void,
loop(): string,

/**
 * Get the current muted state, or turn mute on or off
 * @param muted - true to mute
- false to unmute
 * @return - true if mute is on and getting
- false if mute is off and getting
 */
muted(muted: boolean): void,
muted(): boolean,

/**
 * Pause the video playback
 * @check
 * @return A reference to the player object this function was called on
 */
pause(): videojs$Player,

/**
 * Check if the player is paused or has yet to play
 * @return - false: if the media is currently playing
- true: if media is not currently playing
 */
paused(): boolean,

/**
 * Attempt to begin playback at the first opportunity.
 * @check
 * @return Returns a `Promise` only if the browser returns one and the player
is ready to begin playback. For some browsers and all non-ready
situations, this will return `undefined`.
 */
play(): Promise<void> | void,

/**
 * Gets or sets the current playback rate. A playback rate of
 * 1.0 represents normal speed and 0.5 would indicate half-speed
 * playback, for instance.
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-playbackrate
 * @param rate New playback rate to set.
 * @return The current playback rate when getting or 1.0
 */
playbackRate(rate?: number): void,
playbackRate(): number,

/**
 * Get a TimeRange object representing the current ranges of time that the user
 * has played.
 * @check
 * @return A time range object that represents all the increments of time that have
been played.
 */
played(): any,

/**
 * Set or unset the playsinline attribute.
 * Playsinline tells the browser that non-fullscreen playback is preferred.
 * @param value - true means that we should try to play inline by default
- false means that we should use the browser's default playback mode,
which in most cases is inline. iOS Safari is a notable exception
and plays fullscreen by default.
 * @return - the current value of playsinline
- the player when setting
 * @see [Spec]{@link https://html.spec.whatwg.org/#attr-video-playsinline}
 */
playsinline(value: boolean): videojs$Player,
playsinline(): string,

/**
 * Get or set the poster image source url
 * @fires Player#posterchange
 * @param src Poster image source URL
 * @return The current value of poster when getting
 */
poster(src: string): void,
poster(): string,

/**
 * Get or set the preload attribute
 * @param value - true means that we should preload
- false means that we should not preload
 * @return The preload attribute value when getting
 */
preload(value?: boolean): string,

/**
 * Calculates how much time is left in the video. Not part
 * of the native video API.
 * @return The time remaining in seconds
 */
remainingTime(): number,

/**
 * A remaining time function that is intented to be used when
 * the time is to be displayed directly to the user.
 * @return The rounded time remaining in seconds
 */
remainingTimeDisplay(): number,

/**
 * Remove a remote {@link TextTrack} from the respective
 * {@link TextTrackList} and {@link HtmlTrackElementList}.
 * @param track Remote {@link TextTrack} to remove
 * @return does not return anything
 */
removeRemoteTextTrack(track: HTMLTrackElement): void,

/**
 * Increase the size of the video to full screen
 * In some browsers, full screen is not supported natively, so it enters
 * "full window mode", where the video fills the browser window.
 * In browsers and devices that support native full screen, sometimes the
 * browser's default controls will be shown, and not the Video.js custom skin.
 * This includes most mobile devices (iOS, Android) and older versions of
 * Safari.
 * @fires Player#fullscreenchange
 */
requestFullscreen(): videojs$Player,

/**
 * Report user activity
 * @param event Event object
 */
reportUserActivity(event: any): void,

/**
 * Reset the player. Loads the first tech in the techOrder,
 * and calls `reset` on the tech`.
 * 		 *
 */
reset(): void,

/**
 * Returns whether or not the player is in the "seeking" state.
 * @return boolean True if the player is in the seeking state, false if not.
 */
seeking(): boolean,

/**
 * Returns the TimeRanges of the media that are currently available for seeking to.
 * @return TimeRanges Returns the TimeRanges of the media that are currently available for seeking to.
 */
seekable(): TimeRanges,

/**
 * Select source based on tech-order or source-order
 * Uses source-order selection if `options.sourceOrder` is truthy. Otherwise,
 * defaults to tech-order selection
 * @param sources The sources for a media asset
 * @return Object of source and tech order or false
 */
selectSource(sources: any[]): any,

/**
 * Returns whether or not the user is "scrubbing". Scrubbing is
 * when the user has clicked the progress bar handle and is
 * dragging it along the progress bar.
 * @param isScrubbing whether the user is or is not scrubbing
 * @return The value of scrubbing when getting
 */
scrubbing(isScrubbing: boolean): void,
scrubbing(): boolean,

/**
 * Get or set the video source.
 * @param source A SourceObject, an array of SourceObjects, or a string referencing
a URL to a media source. It is _highly recommended_ that an object
or array of objects is used here, so that source selection
algorithms can take the `type` into account.

If not provided, this method acts as a getter.
 * @return If the `source` argument is missing, returns the current source
URL. Otherwise, returns nothing/undefined.
 */
src(
source: string | videojs$Tech.Tech$SourceObject | videojs$Tech.Tech$SourceObject[]): void,
src(): string,

/**
 * Check if current tech can support native fullscreen
 * (e.g. with built in controls like iOS, so not our flash swf)
 * @return if native fullscreen is supported
 */
supportsFullScreen(): boolean,

/**
 * Return a reference to the current {@link Tech}.
 * It will print a warning by default about the danger of using the tech directly
 * but any argument that is passed in will silence the warning.
 * @param safety Anything passed in to silence the warning
 * @return The Tech
 */
tech(safety?: any): videojs$Tech,

/**
 * returns a JavaScript object reperesenting the current track
 * information. **DOES not return it as JSON**
 * @return Object representing the current of track info
 */
toJSON(): any,

/**
 * Get/set if user is active
 * @fires Player#useractive
 * @fires Player#userinactive
 * @param bool - true if the user is active
- false if the user is inactive
 * @return The current value of userActive when getting
 */
userActive(bool: boolean): void,
userActive(): boolean,

/**
 * Toggle native controls on/off. Native controls are the controls built into
 * devices (e.g. default iPhone controls), Flash, or other techs
 * (e.g. Vimeo Controls)
 * **This should only be set by the current tech, because only the tech knows
 * if it can support native controls**
 * @fires Player#usingnativecontrols
 * @fires Player#usingcustomcontrols
 * @param bool - true to turn native controls on
- false to turn native controls off
 * @return The current value of native controls when getting
 */
usingNativeControls(bool: boolean): void,
usingNativeControls(): boolean,

/**
 * Reports whether or not a player is using a plugin by name.
 * 
 * For basic plugins, this only reports whether the plugin has _ever_ been
 * initialized on this player.
 * @param name The name of a plugin.
 * @return Whether or not this player is using the requested plugin.
 */
usingPlugin(name: string): boolean,

/**
 * Get video height
 * @return current video height
 */
videoHeight(): number,

/**
 * Get video width
 * @return current video width
 */
videoWidth(): number,

/**
 * Get or set the current volume of the media
 * @param percentAsDecimal The new volume as a decimal percent:
- 0 is muted/0%/off
- 1.0 is 100%/full
- 0.5 is half volume or 50%
 * @return The current volume as a percent when getting
 */
volume(percentAsDecimal: number): videojs$TimeRange,
volume(): number,

/**
 * A getter/setter for the `Player`'s width. Returns the player's configured value.
 * To get the current width use `currentWidth()`.
 * @param value The value to set the `Player`'s width to.
 * @return The current width of the `Player` when getting.
 */
width(value: number): void,
width(): number
} & videojs$Component


declare var videojs$Player: {
prototype: videojs$Player,

/**
 * An instance of the `Player` class is created when any of the Video.js setup methods
 * are used to initialize a video.
 * 
 * After an instance has been created it can be accessed globally in two ways:
 * 1. By calling `videojs('example_video_1');`
 * 2. By using it directly via  `videojs.players.example_video_1;`
 */
new (
player: videojs$Player,
videojs$options?: videojs$PlayerOptions): videojs$Player,

/**
 * Gets tag settings
 * @param tag The player tag
 * @check
 * @return An object containing all of the settings
for a player tag
 */
getTagSettings(tag: Element): any
};

declare type videojs$PlayerOptions = {
aspectRatio?: string,
autoplay?: boolean | string,
controlBar?: videojs$ControlBarOptions | false,
textTrackSettings?: videojs$TextTrackSettingsOptions,
controls?: boolean,
defaultVolume?: number,
fluid?: boolean,
height?: number,
html5?: any,
language?: string,
languages?: {
[code: string]: videojs$LanguageTranslations
},
loop?: boolean,
muted?: boolean,
nativeControlsForTouch?: boolean,
notSupportedMessage?: string,
playbackRates?: number[],
plugins?: any,
poster?: string,
preload?: string,
sourceOrder?: boolean,
sources?: videojs$Tech.Tech$SourceObject[],
src?: string,
techOrder?: string[],
tracks?: videojs$TextTrackOptions[],
width?: number
} & videojs$ComponentOptions



/**
 * Parent class for all advanced plugins.
 * @fires Player#beforepluginsetup
 * @fires Player#beforepluginsetup:$name
 * @fires Player#pluginsetup
 * @fires Player#pluginsetup:$name
 * @listens Player#dispose
 * @throws {Error}
If attempting to instantiate the base {@link Plugin} class
directly instead of via a sub-class.
 */
declare type videojs$Plugin = {
player: videojs$Player,

/**
 * Disposes a plugin.
 * 
 * Subclasses can override this if they want, but for the sake of safety,
 * it's probably best to subscribe the "dispose" event.
 * @fires Plugin#dispose
 */
dispose(): void,

/**
 * Each event triggered by plugins includes a hash of additional data with
 * conventional properties.
 * 
 * This returns that object or mutates an existing hash.
 * @param hash An object to be used as event an event hash.
 * @return An event hash object with provided properties mixed-in.
 */
getEventHash(hash?: any): videojs$Plugin.Plugin$PluginEventHash,

/**
 * Handles "statechanged" events on the plugin. No-op by default, override by
 * subclassing.
 * @param e An event object provided by a "statechanged" event.
 * @param An object describing changes that occurred with the "statechanged"
event.
 */
handleStateChanged(e: EventTarget$Event): void,

/**
 * Get the version of the plugin that was set on <pluginName>.VERSION
 */
version(): string,

/**
 * Triggers an event on the plugin object and overrides
 * {@link module:evented~EventedMixin.trigger|EventedMixin.trigger}.
 * @param event An event type or an object with a type property.
 * @param hash Additional data hash to merge with a
{@link Plugin~PluginEventHash|PluginEventHash}.
 * @return Whether or not default was prevented.
 */
trigger(event: any, hash?: any): boolean
} & videojs$EventedMixin


declare var videojs$Plugin: {
prototype: videojs$Plugin,

/**
 * The name of the base plugin class as it is registered.
 */
BASE_PLUGIN_NAME: string,

/**
 * Creates an instance of this class.
 * 
 * Sub-classes should call `super` to ensure plugins are properly initialized.
 * @param player A Video.js player instance.
 */
new (player: videojs$Player): videojs$Plugin,

/**
 * De-register a Video.js plugin.
 * @param name The name of the plugin to be deregistered.
 */
deregisterPlugin(name: string): void,

/**
 * Gets a plugin by name if it exists.
 * @param name The name of a plugin.
 * @return The plugin (or `undefined`).
 */
getPlugin(name: string): typeof Plugin,

/**
 * Gets a plugin's version, if available
 * @param name The name of a plugin.
 * @return The plugin's version or an empty string.
 */
getPluginVersion(name: string): string,

/**
 * Gets an object containing multiple Video.js plugins.
 * @param names If provided, should be an array of plugin names. Defaults to _all_
plugin names.
 * @return An object containing plugin(s) associated with their name(s) or
`undefined` if no matching plugins exist).
 * @check returning type
 */
getPlugins(names?: string[]): {
[name: string]: videojs$Plugin
},

/**
 * Determines if a plugin is a basic plugin (i.e. not a sub-class of `Plugin`).
 * @param plugin If a string, matches the name of a plugin. If a function, will be
tested directly.
 * @return Whether or not a plugin is a basic plugin.
 */
isBasic(videojs$plugin: string | (() => any)): boolean,

/**
 * Register a Video.js plugin.
 * @param name The name of the plugin to be registered. Must be a string and
must not match an existing plugin or a method on the `Player`
prototype.
 * @param plugin A sub-class of `Plugin` or a function for basic plugins.
 * @return For advanced plugins, a factory function for that plugin. For
basic plugins, a wrapper function that initializes the plugin.
 */
registerPlugin<T, K>(
name: string,
videojs$plugin: (...videojs$options: K[]) => T): (...videojs$options: K[]) => T,
registerPlugin<T: typeof Plugin>(name: string, videojs$plugin: T): () => T
};

declare interface Plugin$PluginEventHash {

/**
 * For basic plugins, the return value of the plugin function. For
 * advanced plugins, the plugin instance on which the event is fired.
 */
instance: videojs$Plugin,

/**
 * The name of the plugin.
 */
name: string,

/**
 * For basic plugins, the plugin function. For advanced plugins, the
 * plugin class/constructor.
 */
videojs$plugin: string
} 

declare type videojs$ProgressControl = {

/**
 * Create the `Component`'s DOM element
 * @return The element that was created.
 */
createEl(): HTMLDivElement,

/**
 * Disable all controls on the progress control and its children
 */
disable(): void,

/**
 * Enable all controls on the progress control and its children
 */
enable(): void,

/**
 * Are controls are currently enabled for this progress control.
 * @return true if controls are enabled, false otherwise
 */
enabled(): boolean,

/**
 * Handle `mousedown` or `touchstart` events on the `ProgressControl`.
 * @param event `mousedown` or `touchstart` event that triggered this function
 * @listens mousedown
 * @listens touchstart
 */
handleMouseDown(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * When the mouse moves over the `ProgressControl`, the pointer position
 * gets passed down to the `MouseTimeDisplay` component.
 * @param event The `mousemove` event that caused this function to run.
 * @listen mousemove
 */
handleMouseMove(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle `mousemove` or `touchmove` events on the `ProgressControl`.
 * @param event `mousedown` or `touchstart` event that triggered this function
 * @listens mousemove
 * @listens touchmove
 */
handleMouseSeek(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle `mouseup` or `touchend` events on the `ProgressControl`.
 * @param event `mouseup` or `touchend` event that triggered this function.
 * @listens touchend
 * @listens mouseup
 */
handleMouseUp(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$Component


declare var videojs$ProgressControl: {
prototype: videojs$ProgressControl,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions): videojs$ProgressControl
};

declare interface videojs$Representation {
id: string,
width: number,
height: number,
bitrate: number,
enabled(): boolean,
enabled(enabled: boolean): void
} 


/**
 * Seek bar and container for the progress bars. Uses {@link PlayProgressBar}
 * as its `bar`.
 */
declare type videojs$SeekBar = {

/**
 * Create the `Component`'s DOM element
 * @return The element that was created.
 */
createEl(): HTMLDivElement,

/**
 * Disable controls for this slider if they are enabled
 */
disable(): void,

/**
 * Enable controls for this slider if they are disabled
 */
enable(): void,

/**
 * Toggles the playback state of the player
 * This gets called when enter or space is used on the seekbar
 * @param event The `keydown` event that caused this function to be called
 */
handleAction(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * We want the seek bar to be full on ended
 * no matter what the actual internal values are. so we force it.
 * @param event The `timeupdate` or `ended` event that caused this to run.
 * @listens Player#ended
 */
handleEnded(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Called when this SeekBar has focus and a key gets pressed down. By
 * default it will call `this.handleAction` when the key is space or enter.
 * @param event The `keydown` event that caused this function to be called.
 * @listens keydown
 */
handleKeyPress(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle mouse down on seek bar
 * @param event The `mousedown` event that caused this to run.
 * @listens mousedown
 */
handleMouseDown(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle mouse move on seek bar
 * @param event The `mousemove` event that caused this to run.
 * @listens mousemove
 */
handleMouseMove(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle mouse up on seek bar
 * @param event The `mouseup` event that caused this to run.
 * @listens mouseup
 */
handleMouseUp(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Get the percentage of media played so far.
 * @return The percentage of media played so far (0 to 1).
 */
getPercent(): number,

/**
 * Move more quickly fast forward for keyboard-only users
 */
stepForward(): void,

/**
 * Move more quickly rewind for keyboard-only users
 */
stepBack(): void,

/**
 * Update the seek bar's UI.
 * @listens Player#timeupdate
 * @return The current percent at a number from 0-1
 */
update(): number
} & videojs$Slider


declare var videojs$SeekBar: {
prototype: videojs$SeekBar,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$SliderOptions): videojs$SeekBar
};


/**
 * The base functionality for a slider. Can be vertical or horizontal.
 * For instance the volume bar or the seek bar on a video is a slider.
 */
declare type videojs$Slider = {
options_: videojs$SliderOptions,

/**
 * Enable controls for this slider if they are disabled
 */
enable(): void,

/**
 * Are controls are currently enabled for this slider or not.
 * @return true if controls are enabled, false otherwise
 */
enabled(): boolean,

/**
 * Disable controls for this slider if they are enabled
 */
disable(): void,

/**
 * Create the `Slider`s DOM element.
 * @param type Type of element to create.
 * @param props List of properties in Object form.
 * @param attributes list of attributes in Object form.
 * @return The element that gets created.
 */
createEl(type: string, props?: any, attributes?: any): Element,

/**
 * Handle `mousedown` or `touchstart` events on the `Slider`.
 * @param event `mousedown` or `touchstart` event that triggered this function
 * @listens mousedown
 * @listens touchstart
 * @fires Slider#slideractive
 */
handleMouseDown(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle the `mousemove`, `touchmove`, and `mousedown` events on this `Slider`.
 * The `mousemove` and `touchmove` events will only only trigger this function during
 * `mousedown` and `touchstart`. This is due to {@link Slider#handleMouseDown} and
 * {@link Slider#handleMouseUp}.
 * @param event `mousedown`, `mousemove`, `touchstart`, or `touchmove` event that triggered
this function
 * @listens mousemove
 * @listens touchmove
 */
handleMouseMove(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle `mouseup` or `touchend` events on the `Slider`.
 * @param event The `mouseup` event that caused this to run.
 * @listens touchend
 * @listens mouseup
 * @fires Slider#sliderinactive
 */
handleMouseUp(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Update the progress bar of the `Slider`.
 * @return The percentage of progress the progress bar represents as a
  number from 0 to 1.
 */
update(): number,

/**
 * Calculate distance for slider
 * @param event The event that caused this function to run.
 * @return The current position of the Slider.
- position.x for vertical `Slider`s
- position.y for horizontal `Slider`s
 */
calculateDistance(event: videojs$EventTarget.EventTarget$Event): number,

/**
 * Handle a `focus` event on this `Slider`.
 * @listens focus
 */
handleFocus(): void,

/**
 * Handle a `focus` event on this `Slider`.
 * @listens focus
 */
handleFocus(): void,

/**
 * Handle a `blur` event on this `Slider`.
 * @listens blur
 */
handleBlur(): void,

/**
 * Listener for click events on slider, used to prevent clicks
 *    from bubbling up to parent elements like button menus.
 * @param event Event that caused this object to run
 */
handleClick(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Get/set if slider is horizontal for vertical
 * @param bool - true if slider is vertical,
- false is horizontal
 * @return - true if slider is vertical, and getting
- false if the slider is horizontal, and getting
 */
vertical(bool: boolean): void,
vertical(): boolean
} & videojs$Component


declare var videojs$Slider: {
prototype: videojs$Slider,

/**
 * Create an instance of this class
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$SliderOptions): videojs$Slider
};

declare type videojs$SliderOptions = {

/**
 * Set property names to bar to match with the child Slider class is looking for
 */
barName?: string,

/**
 * Set a horizontal or vertical class on the slider depending on the slider type
 */
vertical?: boolean
} & videojs$ComponentOptions



/**
 * Just an empty spacer element that can be used as an append point for plugins, etc.
 * Also can be used to create space between elements when necessary.
 */
declare type videojs$Spacer = {

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Create the `Component`'s DOM element
 * @return The element that was created.
 */
createEl(): HTMLDivElement
} & videojs$Component


declare var videojs$Spacer: {
prototype: videojs$Spacer,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 * @param ready Function that gets called when the `Component` is ready.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions,
ready?: videojs$Component.Component$ReadyCallback): videojs$Spacer
};

declare type videojs$Tech = {

/**
 * Boolean indicating whether the `Tech` supports fullscreen resize control.
 * Resizing plugins using request fullscreen reloads the plugin
 * @default
 */
featuresFullscreenResize: boolean,

/**
 * Boolean indicating whether the `Tech` supports muting volume.
 * @default
 */
featuresMuteControl: boolean,

/**
 * Boolean indicating whether the `Tech` supports the native `TextTrack`s.
 * This will help us integrate with native `TextTrack`s if the browser supports them.
 * @default
 */
featuresNativeTextTracks: boolean,

/**
 * Boolean indicating whether the `Tech` supports changing the speed at which the video
 * plays. Examples:
 *    - Set player to play 2x (twice) as fast
 *    - Set player to play 0.5x (half) as fast
 * @default
 */
featuresPlaybackRate: boolean,

/**
 * Boolean indicating whether the `Tech` supports the `progress` event. This is currently
 * not triggered by video-js-swf. This will be used to determine if
 * {@link Tech#manualProgressOn} should be called.
 * @default
 */
featuresProgressEvents: boolean,

/**
 * Boolean indicating whether the `Tech` supports the `sourceset` event.
 * 
 * A tech should set this to `true` and then use {@link Tech#triggerSourceset}
 * to trigger a {@link Tech#event:sourceset} at the earliest time after getting
 * a new source.
 * @default
 */
featuresSourceset: boolean,

/**
 * Boolean indicating whether the `Tech` supports the `timeupdate` event. This is currently
 * not triggered by video-js-swf. This will be used to determine if
 * {@link Tech#manualTimeUpdates} should be called.
 * @default
 */
featuresTimeupdateEvents: boolean,

/**
 * Boolean indicating whether the `Tech` supports volume control.
 * @default
 */
featuresVolumeControl: boolean,

/**
 * Creates a remote text track object and returns an html track element.
 * 
 * > Note: This can be an emulated {@link HTMLTrackElement} or a native one.
 * @param options See {@link Tech#createRemoteTextTrack} for more detailed properties.
 * @param manualCleanup - When false: the TextTrack will be automatically removed from the video
element whenever the source changes
- When True: The TextTrack will have to be cleaned up manually
 * @return An Html Track Element.
 * @deprecated The default functionality for this function will be equivalent
to "manualCleanup=false" in the future. The manualCleanup parameter will
also be removed.
 */
addRemoteTextTrack(
videojs$options: videojs$TextTrackOptions,
manualCleanup: true): HTMLTrackElement,

/**
 * Create and returns a remote {@link TextTrack} object.
 * @param kind `TextTrack` kind (subtitles, captions, descriptions, chapters, or metadata)
 * @param label Label to identify the text track
 * @param language Two letter language abbreviation
 * @return The TextTrack that gets created.
 */
addTextTrack(kind: string, label: string, language: string): videojs$TextTrack,

/**
 * Emulate TextTracks using vtt.js if necessary
 * @fires Tech#vttjsloaded
 * @fires Tech#vttjserror
 */
addWebVttScript_(): void,

/**
 * Get the {@link AudioTrackList}
 * @return Tech.prototype.audioTracks
 */
audioTracks(): videojs$TrackList,

/**
 * Get and create a `TimeRange` object for buffering.
 * @return The time range object that was created.
 */
buffered(): any,

/**
 * Get the percentage of the current video that is currently buffered.
 * @return A number from 0 to 1 that represents the decimal percentage of the
video that is buffered.
 */
bufferedPercent(): number,

/**
 * Check if the tech can support the given mime-type.
 * 
 * The base tech does not support any type, but source handlers might
 * overwrite this.
 * @param type The mimetype to check for support
 * @return 'probably', 'maybe', or empty string
 * @see [Spec]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType}
 */
canPlayType(type: string): string,

/**
 * Remove any TextTracks added via addRemoteTextTrack that are
 * flagged for automatic garbage collection
 */
cleanupAutoTextTracks(): void,

/**
 * Clear out a single `TrackList` or an array of `TrackLists` given their names.
 * 
 * > Note: Techs without source handlers should call this between sources for `video`
 *          & `audio` tracks. You don't want to use them between tracks!
 * @param types TrackList names to clear, valid names are `video`, `audio`, and
`text`.
 */
clearTracks(types: string | string[]): void,

/**
 * Create an emulated TextTrack for use by addRemoteTextTrack
 * 
 * This is intended to be overridden by classes that inherit from
 * Tech in order to create native or custom TextTracks.
 * @param options The object should contain the options to initialize the TextTrack with.
 * @param `TextTrack` kind (subtitles, captions, descriptions, chapters, or metadata).
 * @param .
Label to identify the text track
 * @param Two letter language abbreviation.
 * @return The track element that gets created.
 */
createRemoteTextTrack(videojs$options: videojs$TextTrackOptions): HTMLTextAreaElement,

/**
 * Turn off all event polyfills, clear the `Tech`s {@link AudioTrackList},
 * {@link VideoTrackList}, and {@link TextTrackList}, and dispose of this Tech.
 * @fires Component#dispose
 */
dispose(): void,

/**
 * Emulate texttracks
 */
emulateTextTracks(): void,

/**
 * Get or set an error on the Tech.
 * @param err Error to set on the Tech
 * @return The current error object on the tech, or null if there isn't one.
 */
error(err: videojs$MediaError): videojs$MediaError | null,

/**
 * Gets available media playback quality metrics as specified by the W3C's Media
 * Playback Quality API.
 * @see [Spec]{@link https://wicg.github.io/media-playback-quality}
 * @return An object with supported media playback quality metrics
 */
getVideoPlaybackQuality(): any,

/**
 * Turn on listeners for {@link VideoTrackList}, {@link {AudioTrackList}, and
 * {@link TextTrackList} events.
 * 
 * This adds {@link EventTarget~EventListeners} for `addtrack`, and  `removetrack`.
 * @fires Tech#audiotrackchange
 * @fires Tech#videotrackchange
 * @fires Tech#texttrackchange
 */
initTrackListeners(): void,
manualProgressOff(): void,

/**
 * Polyfill the `progress` event for browsers that don't support it natively.
 * @see {@link Tech#trackProgress}
 */
manualProgressOn(): void,

/**
 * Turn off the polyfill for `progress` events that was created in
 * {@link Tech#manualProgressOn}
 */
manualTimeUpdatesOff(): void,

/**
 * Polyfill the `timeupdate` event for browsers that don't support it.
 * @see {@link Tech#trackCurrentTime}
 */
manualTimeUpdatesOn(): void,

/**
 * Update our internal duration on a `durationchange` event by calling
 * {@link Tech#duration}.
 * @param event The `durationchange` event that caused this to run.
 * @listens Tech#durationchange
 */
onDurationChange(event: EventTarget$Event): void,

/**
 * Attempt to force override of native audio tracks.
 * @param override - If set to true native audio will be overridden,
otherwise native audio will potentially be used.
 */
overrideNativeAudioTracks(override: boolean): void,

/**
 * Attempt to force override of native video tracks.
 * @param override - If set to true native video will be overridden,
otherwise native video will potentially be used.
 */
overrideNativeVideoTracks(override: boolean): void,

/**
 * Returns the `TimeRange`s that have been played through for the current source.
 * 
 * > NOTE: This implementation is incomplete. It does not track the played `TimeRange`.
 *          It only checks whether the source has played at all or not.
 * @return - A single time range if this video has played
- An empty set of ranges if not.
 */
played(): any,

/**
 * A method to check for the presence of the 'playsinline' <video> attribute.
 */
playsinline(): any,

/**
 * Get the remote element {@link HTMLTrackElementList}
 */
remoteTextTrackEls(): videojs$HTMLTrackElementList,

/**
 * Get the remote element {@link TextTrackList}
 */
remoteTextTracks(): videojs$TextTrackList,

/**
 * Remove a remote text track from the remote `TextTrackList`.
 * @param track `TextTrack` to remove from the `TextTrackList`
 */
removeRemoteTextTrack(track: videojs$TextTrack): void,

/**
 * Reset the tech, which will removes all sources and reset the internal readyState.
 */
reset(): void,

/**
 * Causes a manual time update to occur if {@link Tech#manualTimeUpdatesOn} was
 * previously called.
 * @fires Tech#timeupdate
 */
setCurrentTime(): void,

/**
 * A method to set or unset the 'playsinline' <video> attribute.
 */
setPlaysinline(): void,

/**
 * A method to set a poster from a `Tech`.
 */
setPoster(): void,

/**
 * Stop the interval function created in {@link Tech#trackCurrentTime} so that the
 * `timeupdate` event is no longer triggered.
 * @listens {Tech#pause}
 */
stopTrackingCurrentTime(): void,

/**
 * Turn off the polyfill for `progress` events that was created in
 * {@link Tech#manualProgressOn}
 * Stop manually tracking progress events by clearing the interval that was set in
 * {@link Tech#trackProgress}.
 */
stopTrackingProgress(): void,

/**
 * Get the {@link TextTrackList}
 */
textTracks(): videojs$TextTrackList,

/**
 * Sets up an interval function to track current time and trigger `timeupdate` every
 * 250 milliseconds.
 * @listens Tech#play
 * @triggers Tech#timeupdate
 */
trackCurrentTime(): void,

/**
 * This is used to trigger a `progress` event when the buffered percent changes. It
 * sets an interval function that will be called every 500 milliseconds to check if the
 * buffer end percent has changed.
 * 
 * > This function is called by {@link Tech#manualProgressOn}
 * @param event The `ready` event that caused this to run.
 * @listens Tech#ready
 * @fires Tech#progress
 */
trackProgress(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * A special function to trigger source set in a way that will allow player
 * to re-trigger if the player or tech are not ready yet.
 * @fires Tech#sourceset
 * @param src The source string at the time of the source changing.
 */
triggerSourceset(src: string): void,

/**
 * Get the {@link VideoTrackList}
 */
videoTracks(): videojs$TrackList
} & videojs$Component


declare var videojs$Tech: {
prototype: videojs$Tech,

/**
 * Create an instance of this Tech.
 * @param options The key/value store of player options.
 * @param ready Callback function to call when the `HTML5` Tech is ready.
 */
new (
videojs$options?: any,
ready?: videojs$Component.Component$ReadyCallback): videojs$Tech,

/**
 * Check if the tech can support the given source
 * @param srcObj The source object
 * @param options The options passed to the tech
 * @return 'probably', 'maybe', or '' (empty string)
 */
canPlaySource(srcObj: any, videojs$options: any): "problably" | "maybe" | "",

/**
 * Check if the type is supported by this tech.
 * 
 * The base tech does not support any type, but source handlers might
 * overwrite this.
 * @param type The media type to check
 * @return Returns the native video element's response
 */
canPlayType(type: string): string,

/**
 * Get a `Tech` from the shared list by name.
 * @param name `camelCase` or `TitleCase` name of the Tech to get
 * @return The `Tech` or undefined if there was no tech with the name requested.
 */
getTech(name: string): videojs$Tech | void,

/**
 * Return whether the argument is a Tech or not.
 * Can be passed either a Class like `Html5` or a instance like `player.tech_`
 * @param component The item to check
 * @return Whether it is a tech or not
- True if it is a tech
- False if it is not
 */
isTech(component: any): boolean,

/**
 * Registers a `Tech` into a shared list for videojs.
 * @param name Name of the `Tech` to register.
 * @param tech The `Tech` class to register.
 */
registerTech(name: string, tech: any): void,

/**
 * A functional mixin for techs that want to use the Source Handler pattern.
 * Source handlers are scripts for handling specific formats.
 * The source handler pattern is used for adaptive formats (HLS, DASH) that
 * manually load video data and feed it into a Source Buffer (Media Source Extensions)
 * Example: `Tech.withSourceHandlers.call(MyTech);`
 * @param tech The tech to add source handler functions to.
 */
withSourceHandlers(tech: typeof Tech): void
};


/**
 * An Object containing a structure like: `{src: 'url', type: 'mimetype'}` or string
 * that just contains the src url alone.
 * `var SourceObject = {src: 'http://ex.com/video.mp4', type: 'video/mp4'};`
 * `var SourceString = 'http://example.com/some-video.mp4';`
 */
declare interface Tech$SourceObject {

/**
 * The url to the source
 */
src: string,

/**
 * The mime type of the source
 */
type?: string
} 


/**
 * The base class for buttons that toggle specific text track types (e.g. subtitles)
 */
declare type videojs$TextTrackButton = {

/**
 * Create a menu item for each text track
 * @param items Existing array of items to use during creation
 * @param TrackMenuItem Existing array of items to use during creation
 * @return Array of menu items that were created
 */
createItems(
items?: videojs$TextTrackMenuItem[],
TrackMenuItem?: typeof TextTrackMenuItem): videojs$TextTrackMenuItem[]
} & videojs$MenuButton


declare var videojs$TextTrackButton: {
prototype: videojs$TextTrackButton,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$TrackButtonOptions): videojs$TextTrackButton
};


/**
 * A List of TextTrackCues.
 * @see [Spec]{@link https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackcuelist}
 */
declare interface videojs$TextTrackCueList {

/**
 * Index getters for the cues.
 * @param index
 */
[index: number]: videojs$TextTrackCueList.TextTrackCueList$TextTrackCue,

/**
 * The current number of `TextTrackCue`s in the TextTrackCueList.
 */
length: number,

/**
 * Get a `TextTrackCue` that is currently in the `TextTrackCueList` by id.
 * @param id The id of the cue that should be searched for.
 * @return A single cue or null if none was found.
 */
getCueById(id: string): videojs$TextTrackCueList.TextTrackCueList$TextTrackCue
} 

declare var videojs$TextTrackCueList: {
prototype: videojs$TextTrackCueList,

/**
 * Create an instance of this class..
 * @param cues A list of cues to be initialized with
 */
new (
cues: videojs$TextTrackCueList.TextTrackCueList$TextTrackCue[]): videojs$TextTrackCueList
};


/**
 * @see [Spec]{@link https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackcue}
 */
declare interface TextTrackCueList$TextTrackCue {

/**
 * The unique id for this text track cue
 */
id: string,

/**
 * The start time for this text track cue
 */
startTime: number,

/**
 * The end time for this text track cue
 */
endTime: number,

/**
 * The text this cue is holding
 */
text: string,

/**
 * Pause when the end time is reached if true.
 */
pauseOnExit: boolean
} 


/**
 * The specific menu item type for selecting a language within a text track kind
 */
declare type videojs$TextTrackMenuItem = {

/**
 * This gets called when an `TextTrackMenuItem` is "clicked". See
 * {@link ClickableComponent} for more detailed information on what a click can be.
 * @param event The `keydown`, `tap`, or `click` event that caused this function to be
called.
 * @listens tap
 * @listens click
 */
handleClick(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle text track list change
 * @param event The `change` event that caused this function to be called.
 * @listens TextTrackList#change
 */
handleTracksChange(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle selected language change
 * @param event The `change` event that caused this function to be called.
 */
handleSelectedLanguageChange(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$MenuItem


declare var videojs$TextTrackMenuItem: {
prototype: videojs$TextTrackMenuItem,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$TextTrackMenuItemOptions): videojs$TextTrackMenuItem
};

declare type videojs$TextTrackMenuItemOptions = {
track: videojs$TextTrack
} & videojs$MenuItemOptions



/**
 * Manipulate Text Tracks settings.
 */
declare type videojs$TextTrackSettings = {

/**
 * Gets or sets the modal content, which gets normalized before being
 * rendered into the DOM.
 * 
 * This does not update the DOM or fill the modal, but it is called during
 * that process.
 * @return The current content of the modal dialog
 */
content(): Element[],

/**
 * Returns the label string for this modal. Primarily used for accessibility.
 * @return the localized or raw label of this modal.
 */
label(): string,

/**
 * Returns the description string for this modal. Primarily used for
 * accessibility.
 * @return The localized or raw description of this modal.
 */
description(): string,

/**
 * Builds the default DOM `className`.
 * @return The DOM `className` for this object.
 */
buildCSSClass(): string,

/**
 * Gets an object of text track settings (or null).
 * @return An object with config values parsed from the DOM or localStorage.
 */
getValues(): any,

/**
 * Sets text track settings from an object of values.
 * @param values An object with config values parsed from the DOM or localStorage.
 */
setValues(values: any): void,

/**
 * Sets all `<select>` elements to their default values.
 */
setDefaults(): void,

/**
 * Restore texttrack settings from localStorage
 */
restoreSettings(): void,

/**
 * Save text track settings to localStorage
 */
saveSettings(): void,

/**
 * Update display of text track settings
 */
updateDisplay(): void
} & videojs$ModalDialog


declare var videojs$TextTrackSettings: {
prototype: videojs$TextTrackSettings,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options: videojs$TextTrackSettingsOptions): videojs$TextTrackSettings
};

declare type videojs$TextTrackSettingsOptions = {
persistTextTrackSettings?: boolean
} & videojs$ModalDialogOptions



/**
 * Create an instance of this class.
 * @param options ={}
Object of option names and values
 * @param A reference to the tech that owns this TextTrack.
 * @param A valid text track kind.
 * @param A valid text track mode.
 * @param A unique id for this TextTrack.
 * @param The menu label for this track.
 * @param A valid two character language code.
 * @param A valid two character language code. An alternative, but deprioritized
version of `options.language`
 * @param A url to TextTrack cues.
 * @param If this track should default to on or off.
 */
declare type videojs$TextTrack = {

/**
 * The list text track cues that are currently active for this TextTrack.
 */
activeCues: videojs$TextTrackCueList,

/**
 * @The text track cue list for this TextTrack.
 */
cues: videojs$TextTrackCueList,

/**
 * If this track was set to be on or off by default. Cannot be changed after creation.
 */
+default: boolean,

/**
 * Set the mode of this TextTrack to a valid {@link TextTrack~Mode}. Will
 * not be set if setting to an invalid mode.
 * @fires TextTrack#modechange
 */
mode: videojs$TextTrack.TextTrack$Mode,

/**
 * Add a cue to the internal list of cues.
 * @param cue The cue to add to our internal list
 */
addCue(cue: videojs$TextTrackCueList.TextTrackCueList$TextTrackCue): void,

/**
 * Remove a cue from our internal list
 * @param cue The cue to remove from our internal list
 */
removeCue(cue: videojs$TextTrackCueList.TextTrackCueList$TextTrackCue): void
} & videojs$Track


declare var videojs$TextTrack: {
prototype: videojs$TextTrack,

/**
 * Create an instance of this class.
 * @param options ={}
Object of option names and values
 * @param A reference to the tech that owns this TextTrack.
 * @param A valid text track kind.
 * @param A valid text track mode.
 * @param A unique id for this TextTrack.
 * @param The menu label for this track.
 * @param A valid two character language code.
 * @param A valid two character language code. An alternative, but deprioritized
version of `options.language`
 * @param A url to TextTrack cues.
 * @param If this track should default to on or off.
 */
new (videojs$options: videojs$TextTrackOptions): videojs$TextTrack
};

declare type videojs$TextTrackOptions = {
tech?: videojs$Tech,
kind?: videojs$TextTrack.AudioTrack$Kind,
mode?: videojs$TextTrack.TextTrack$Mode,
srclang?: string,
src?: string,
default?: boolean
} & videojs$TrackOptions



/**
 * All possible `AudioTrackKind`s
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-audiotrack-kind
 */
declare type TextTrack$Kind = "alternative"
| "descriptions"
| "main"
| "main-desc"
| "translation"
| "commentary";

declare type TextTrack$Mode = "disabled" | "hidden" | "showing";


/**
 * The current list of {@link TextTrack} for a media file.
 * @see [Spec]{@link https://html.spec.whatwg.org/multipage/embedded-content.html#texttracklist}
 */
declare type videojs$TextTrackList = {
[index: number]: videojs$TextTrack,

/**
 * Add a {@link TextTrack} to the `TextTrackList`
 * @param track The text track to add to the list.
 * @fires TrackList#addtrack
 */
addTrack(track: videojs$TextTrack): void
} & videojs$TrackList


declare var videojs$TextTrackList: {
prototype: videojs$TextTrackList,

/**
 * Create an instance of this class
 * @param tracks A list of tracks to initialize the list with.
 */
new (tracks?: videojs$TextTrack[]): videojs$TextTrackList
};


/**
 * An object that contains ranges of time for various reasons.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges
 */
declare interface videojs$TimeRange {

/**
 * The number of time ranges represented by this Object
 */
+length: number,

/**
 * Returns the time offset at which a specified time range ends.
 * @param index The range number to return the time for.
 * @return The time that offset at the specified index.
 */
end(index: number): number,

/**
 * Returns the time offset at which a specified time range begins.
 * @param index The range number to return the time for.
 * @return The time that offset at the specified index.
 */
start(index: number): number
} 


/**
 * Displays the time left in the video
 */
declare type videojs$TimeDisplay = {

/**
 * Create the `Component`'s DOM element
 * @return The element that was created.
 */
createEl(): HTMLDivElement,

/**
 * Dispose of the `TimeDisplay` and all child components.
 * @fires Component#dispose
 */
dispose(): void,

/**
 * To be filled out in the child class, should update the displayed time
 * in accordance with the fact that the current time has changed.
 * @param event The `timeupdate`  event that caused this to run.
 * @listens Player#timeupdate
 */
updateContent(event?: videojs$EventTarget.EventTarget$Event): void
} & videojs$Component


declare var videojs$TimeDisplay: {
prototype: videojs$TimeDisplay,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions): videojs$TimeDisplay
};


/**
 * Time tooltips display a time above the progress bar.
 */
declare type videojs$TimeToolTip = {

/**
 * Create the time tooltip DOM element
 * @return The element that was created.
 */
createEl(): HTMLDivElement,

/**
 * Updates the position of the time tooltip relative to the `SeekBar`.
 * @param seekBarRect The `ClientRect` for the {@link SeekBar} element.
 * @param seekBarPoint A number from 0 to 1, representing a horizontal reference point
from the left edge of the {@link SeekBar}
 * @param content
 */
update(seekBarRect: ClientRect, seekBarPoint: number, content: string): void
} & videojs$Component


declare var videojs$TimeToolTip: {
prototype: videojs$TimeToolTip,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions): videojs$TimeToolTip
};


/**
 * A Track class that contains all of the common functionality for {@link AudioTrack},
 * {@link VideoTrack}, and {@link TextTrack}.
 * 
 * > Note: This class should not be used directly
 * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html}
 */
declare type videojs$Track = {

/**
 * The id of this track. Cannot be changed after creation.
 */
+id: string,

/**
 * The kind of track that this is. Cannot be changed after creation.
 */
+kind: string,

/**
 * The label of this track. Cannot be changed after creation.
 */
+label: string,

/**
 * The two letter language code for this track. Cannot be changed after creation.
 */
+language: string
} & videojs$EventTarget


declare var videojs$Track: {
prototype: videojs$Track,

/**
 * Create an instance of this class.
 * @param options Object of option names and values
 * @param A valid kind for the track type you are creating.
 * @param A unique id for this AudioTrack.
 * @param The menu label for this track.
 * @param A valid two character language code.
 */
new (videojs$options?: videojs$TrackOptions): videojs$Track
};

declare interface videojs$TrackOptions {
id?: string,
kind?: string,
label?: string,
language?: string
} 


/**
 * The base class for buttons that toggle specific  track types (e.g. subtitles).
 */
declare var videojs$TrackButton: {
prototype: videojs$MenuButton,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$TrackButtonOptions): videojs$MenuButton
};

declare type videojs$TrackButtonOptions = {
track: videojs$Track[]
} & videojs$MenuButtonOptions



/**
 * Common functionaliy between {@link TextTrackList}, {@link AudioTrackList}, and
 * {@link VideoTrackList}
 */
declare type videojs$TrackList = {
[index: number]: videojs$Track,

/**
 * The current number of `Track`s in the this Trackist.
 */
length: number,

/**
 * Add a {@link Track} to the `TrackList`
 * @param track The audio, video, or text track to add to the list.
 * @fires TrackList#addtrack
 */
addTrack(track: videojs$Track): void,

/**
 * Remove a {@link Track} from the `TrackList`
 * @param track The audio, video, or text track to remove from the list.
 * @fires TrackList#removetrack
 */
removeTrack(track: videojs$Track): void
} & videojs$EventTarget


declare var videojs$TrackList: {
prototype: videojs$TrackList,

/**
 * Create an instance of this class
 * @param tracks A list of tracks to initialize the list with.
 */
new (tracks?: videojs$Track[]): videojs$TrackList
};


/**
 * The bar that contains the volume level and can be clicked on to adjust the level
 */
declare type videojs$VolumeBar = {

/**
 * If the player is muted unmute it.
 */
checkMuted(): void,

/**
 * Create the `Component`'s DOM element
 * @return The element that was created.
 */
createEl(): HTMLDivElement,

/**
 * Handle mouse down on volume bar
 * @param event The `mousedown` event that caused this to run.
 * @listens mousedown
 */
handleMouseDown(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Get percent of volume level
 * @return Volume level percent as a decimal number.
 */
getPercent(): number,

/**
 * Decrease volume level for keyboard users
 */
stepBack(): void,

/**
 * Increase volume level for keyboard users
 */
stepForward(): void,

/**
 * Update ARIA accessibility attributes
 * @param event The `volumechange` event that caused this function to run.
 * @listens Player#volumechange
 */
updateARIAAttributes(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$Slider


declare var videojs$VolumeBar: {
prototype: videojs$VolumeBar,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$SliderOptions): videojs$VolumeBar
};


/**
 * The component for controlling the volume level
 */
declare type videojs$VolumeControl = {

/**
 * Create the `Component`'s DOM element
 * @return The element that was created.
 */
createEl(): HTMLDivElement,

/**
 * Handle `mousedown` or `touchstart` events on the `VolumeControl`.
 * @param event `mousedown` or `touchstart` event that triggered this function
 * @listens mousedown
 * @listens touchstart
 */
handleMouseDown(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle `mouseup` or `touchend` events on the `VolumeControl`.
 * @param event `mouseup` or `touchend` event that triggered this function.
 * @listens touchend
 * @listens mouseup
 */
handleMouseUp(event: videojs$EventTarget.EventTarget$Event): void,

/**
 * Handle `mousedown` or `touchstart` events on the `VolumeControl`.
 * @param event `mousedown` or `touchstart` event that triggered this function
 * @listens mousedown
 * @listens touchstart
 */
handleMouseMove(event: videojs$EventTarget.EventTarget$Event): void
} & videojs$Component


declare var videojs$VolumeControl: {
prototype: videojs$VolumeControl,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$VolumeControlOptions): videojs$VolumeControl
};

declare type videojs$VolumeControlOptions = {
volumeBar?: videojs$VolumeBar,
vertical?: boolean
} & videojs$ComponentOptions



/**
 * Shows volume level
 */
declare type videojs$VolumeLevel = {

/**
 * Create the `Component`'s DOM element
 * @return The element that was created.
 */
createEl(): HTMLDivElement
} & videojs$Component


declare var videojs$VolumeLevel: {
prototype: videojs$VolumeLevel,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 * @param An array of children objects to intialize this component with. Children objects have
a name property that will be used if more than one component of the same type needs to be
added.
 * @param ready Function that gets called when the `Component` is ready.
 */
new (
player: videojs$Player,
videojs$options?: videojs$ComponentOptions,
ready?: videojs$Component.Component$ReadyCallback): videojs$VolumeLevel
};


/**
 * A Component to contain the MuteToggle and VolumeControl so that
 * they can work together.
 */
declare type videojs$VolumePanel = {

/**
 * Create the `Component`'s DOM element
 * @return The element that was created.
 */
createEl(): HTMLDivElement
} & videojs$Component


declare var videojs$VolumePanel: {
prototype: videojs$VolumePanel,

/**
 * Creates an instance of this class.
 * @param player The `Player` that this class should be attached to.
 * @param options The key/value store of player options.
 */
new (
player: videojs$Player,
videojs$options?: videojs$VolumePanel): videojs$VolumePanel
};

declare type videojs$VolumePanelOptions = {
inline?: boolean,
volumeControl?: videojs$VolumeControlOptions
} & videojs$ComponentOptions


declare interface url$URLObject {

/**
 * The protocol of the url that was parsed.
 */
protocol: string,

/**
 * The hostname of the url that was parsed.
 */
hostname: string,

/**
 * The port of the url that was parsed.
 */
port: string,

/**
 * The pathname of the url that was parsed.
 */
pathname: string,

/**
 * The search query of the url that was parsed.
 */
search: string,

/**
 * The hash of the url that was parsed.
 */
hash: string,

/**
 * The host of the url that was parsed.
 */
host: string
} 

declare type videojs$XhrObject = {
del: videojs$Xhr,
get: videojs$Xhr,
head: videojs$Xhr,
patch: videojs$Xhr,
post: videojs$Xhr,
put: videojs$Xhr
} & videojs$Xhr


declare type videojs$XhrCallback = (error?: Error, response?: videojs$XhrResponse, body?: any) => void;

declare interface videojs$Xhr {
(url: string | videojs$XhrOptions, callback: videojs$XhrCallback): any,
(url: string, videojs$options: videojs$XhrOptions, callback: videojs$XhrCallback): any
} 

declare interface videojs$XhrOptions {
beforeSend?: (xhrObject: XMLHttpRequest) => void,
body?: any,
headers?: any,
json?: boolean,
method?: "DELETE"
| "GET"
| "HEAD"
| "OPTIONS"
| "POST"
| "PUT",
password?: string,
responseType?: ""
| "arraybuffer"
| "blob"
| "document"
| "json"
| "text",
sync?: boolean,
timeout?: number,
uri?: string,
url?: string,
username?: string,
useXDR?: boolean,
videojs$xhr?: XMLHttpRequest,
withCredentials?: boolean
} 

declare interface videojs$XhrResponse {
body: any,
statusCode: number,
method: string,
headers: any,
url: string,
rawRequest: XMLHttpRequest
} 
    }
