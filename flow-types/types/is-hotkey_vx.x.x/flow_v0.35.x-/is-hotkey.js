declare module 'is-hotkey' {
        declare export interface HotKeyOptions {
byKey: boolean
} 
	declare export interface HotKey {
which?: number,
key?: string,
altKey: boolean,
ctrlKey: boolean,
metaKey: boolean,
shiftKey: boolean
} 
	
/**
 * Is hotkey?
 */
declare export function isHotkey(
hotkey: string | $ReadOnlyArray<string>,
options?: HotKeyOptions): (event: KeyboardEvent) => boolean

	declare export function isHotkey(
hotkey: string | $ReadOnlyArray<string>,
options?: HotKeyOptions | KeyboardEvent,
event?: KeyboardEvent): boolean

	declare export function isCodeHotkey(hotkey: string | $ReadOnlyArray<string>): (event: KeyboardEvent) => boolean

	declare export function isCodeHotkey(hotkey: string | $ReadOnlyArray<string>, event: KeyboardEvent): boolean

	declare export function isKeyHotkey(hotkey: string | $ReadOnlyArray<string>): (event: KeyboardEvent) => boolean

	declare export function isKeyHotkey(hotkey: string | $ReadOnlyArray<string>, event: KeyboardEvent): boolean

	
/**
 * Parse.
 */
declare export function parseHotkey(hotkey: string, options?: HotKeyOptions): HotKey

	
/**
 * Compare.
 */
declare export function compareHotkey(object: HotKey, event: KeyboardEvent): boolean

	
/**
 * Utils.
 */
declare export function toKeyCode(name: string): number

	declare export function toKeyName(name: string): string

	declare export default typeof isHotkey

    }
