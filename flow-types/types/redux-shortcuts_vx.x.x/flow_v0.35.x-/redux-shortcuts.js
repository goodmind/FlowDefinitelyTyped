declare module 'redux-shortcuts' {
        import type {
          ActionCreator,Action,Dispatch
        } from 'redux';

	declare export {
          Mousetrap
        }

	declare export var mousetrap: MousetrapInstance;
	declare export function bindShortcut(
keys: KeyBindings,
actionCreator: ActionBindings,
preventDefault?: boolean): (dispatch: Dispatch<any>) => void

	declare export function bindShortcuts(...shortcut: ShortcutDefinition[]): (dispatch: Dispatch<any>) => void

	declare export type KeyBindings = string | string[];
	declare export type ActionBindings = ActionCreator<Action> | Array<ActionCreator<Action>>;
	declare export type ShortcutDefinition = BasicShortcutDefinition | ShortcutDefinitionWithPreventDefault;
	declare export type BasicShortcutDefinition = [KeyBindings, ActionBindings];
	declare export type ShortcutDefinitionWithPreventDefault = [KeyBindings, ActionBindings, boolean];
    }
