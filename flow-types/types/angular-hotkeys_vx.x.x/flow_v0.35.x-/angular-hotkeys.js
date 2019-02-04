declare module 'angular-hotkeys' {
        import typeof * as ng from 'angular';

	declare export type HotkeysProvider = ng.hotkeys.hotkeys$HotkeysProvider;
	declare export type HotkeysProviderChained = ng.hotkeys.hotkeys$HotkeysProviderChained;
	declare export type Hotkey = ng.hotkeys.hotkeys$Hotkey;
	declare module 'angular' {
        declare interface hotkeys$HotkeysProvider {

/**
 * Configurable setting to disable the cheatsheet entirely.
 * @default true
 */
includeCheatSheet: boolean,

/**
 * Configurable setting to disable ngRoute hooks.
 */
useNgRoute: boolean,

/**
 * Configurable setting for the cheat sheet title
 * @default 'Keyboard Shortcuts'
 */
templateTitle: string,

/**
 * Configurable settings for the cheat sheet header in HTML.
 * This overrides the normal title if specified.
 * @default null
 */
templateHeader: string | null,

/**
 * Configurable settings for the cheat sheet footer in HTML.
 * @default null
 */
templateFooter: string | null,

/**
 * Cheat sheet template in the event you want to totally customize it.
 */
template: string,

/**
 * Configurable setting for the cheat sheet hotkey.
 * @default '?'
 */
cheatSheetHotkey: string,

/**
 * Configurable setting for the cheat sheet description.
 * @default 'Show / hide this help menu'
 */
cheatSheetDescription: string,

/**
 * Creates a new Hotkey and creates the Mousetrap binding.
 */
add(
combo: string | string[],
description?: string,
callback?: (event: Event, hotkey: hotkeys$Hotkey) => void,
action?: string,
allowIn?: string[],
persistent?: boolean): hotkeys$Hotkey,

/**
 * Creates a new Hotkey and creates the Mousetrap binding.
 */
add(hotkeyObj: hotkeys$Hotkey): hotkeys$Hotkey,

/**
 * Binds the hotkey to a particular scope.
 * Useful if the scope is destroyed, we can automatically destroy the hotkey binding.
 * @param scope The scope to bind to
 */
bindTo(scope: IScope): hotkeys$HotkeysProviderChained,

/**
 * Removes and unbinds a hotkey
 * @param combo The keyboard combo (shortcut) or the HotKey object
 */
del(combo: string | string[] | hotkeys$Hotkey): void,

/**
 * Returns the Hotkey object
 * @param combo The keyboard combo (shortcut)
 */
get(combo: string | string[]): hotkeys$Hotkey,

/**
 * Toggles the help menu element's visiblity
 */
toggleCheatSheet(): void,

/**
 * Purges all non-persistent hotkeys (such as those defined in routes)
 * 
 * Without this, the same hotkey would get recreated everytime
 * the route is accessed.
 */
purgeHotkeys(): void
} 

declare interface hotkeys$HotkeysProviderChained {
add(
combo: string | string[],
description: string,
callback: (event: Event, hotkeys: hotkeys$Hotkey) => void): hotkeys$HotkeysProviderChained,
add(hotkeyObj: hotkeys$Hotkey): hotkeys$HotkeysProviderChained
} 

declare interface hotkeys$Hotkey {

/**
 * They keyboard combo (shortcut) you want to bind to.
 */
combo: string | string[],

/**
 * The description for what the combo does and is only used for the Cheat Sheet.
 * If it is not supplied, it will not show up, and in effect, allows you to have unlisted hotkeys.
 */
description?: string,

/**
 * The function to execute when the key(s) are pressed. Passes along two arguments, event and hotkey
 */
callback(event: Event, hotkey: hotkeys$Hotkey): void,

/**
 * The type of event to listen for, such as keypress, keydown or keyup.
 * Usage of this parameter is discouraged as the underlying library will pick the most suitable option automatically.
 * This should only be necessary in advanced situations.
 */
action?: string,

/**
 * An array of tag names to allow this combo in ('INPUT', 'SELECT', and/or 'TEXTAREA')
 */
allowIn?: Array<"INPUT" | "SELECT" | "TEXTAREA">,

/**
 * Whether the hotkey persists navigation events
 */
persistent?: boolean
} 
    }

    }
