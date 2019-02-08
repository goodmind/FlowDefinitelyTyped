/**
 * Extensions to KO to provide a command, editable and sortable patterns
 * - available at http://www.nuget.org/packages/ko.plus/
 *
 * (requires TypeScript version 1.4 or higher)
 *
 * Version 1.0 - initial commit
 *
 * Version 1.1 - fixed bug - makeEditable is now a function on .editable
 *                also refactored how the Editable classes inherit to simplify
 *
 * Version 1.2 - amended callback on commmand.fail() method - accepts response,
 *                status and message values
 *
 * Version 1.3 - added module declaration so it be used with node, requirejs etc.
 *                removed jquery reference as it is not required
 */
declare interface KnockoutStatic {
  command: (
    param: Function | KoPlus$KoPlus$CommandOptions
  ) => KoPlus$KoPlus$Command;
  editable: KoPlus$KoPlus$EditableStatic;
  editableArray: KoPlus$KoPlus$EditableArrayStatic;
}
declare interface KnockoutObservableArray<T> {
  sortKey: KnockoutObservable<string>;
  sortDescending: KnockoutObservable<boolean>;
  setSourceKey: (key: string) => void;
}
declare interface KnockoutBindingHandlers {
  loadingWhen: KnockoutBindingHandler;
  command: KnockoutBindingHandler;
  sortBy: KnockoutBindingHandler;
}
export interface KoPlus$Command {
  (): void;
  isRunning: KnockoutObservable<boolean>;
  canExecute: KnockoutComputed<boolean>;
  failed: KnockoutObservable<boolean>;
  completed: KnockoutObservable<boolean>;
  done: (callback: (data: any) => void) => KoPlus$Command;
  fail: (
    callback: (response: any, status?: string, statusText?: string) => void
  ) => KoPlus$Command;
  always: (callback: Function) => KoPlus$Command;
  then: (resolve: Function, reject: Function) => KoPlus$Command;
}

export interface KoPlus$CommandOptions {
  action: Function;
  canExecute?: () => boolean;
  context?: any;
}

export type KoPlus$EditableStatic = {
  <T>(value?: T): KoPlus$Editable<T>,
  makeEditable(target: any): void
} & KnockoutObservableStatic;

export type KoPlus$EditableArrayStatic = {
  <T>(value?: Array<T>): KoPlus$EditableArray<T>,
  makeEditable(target: any): void
} & KnockoutObservableArrayStatic;

export interface KoPlus$EditableFunctions {
  isEditing: KnockoutObservable<boolean>;
  beginEdit(): void;
  endEdit(): void;
  cancelEdit(): void;
  rollback(): void;
}

export type KoPlus$Editable<T> = {} & KnockoutObservable<T> &
  KoPlus$EditableFunctions;

export type KoPlus$EditableArray<T> = {} & KnockoutObservableArray<T> &
  KoPlus$EditableFunctions;
declare var ko: KnockoutStatic;
declare module "ko.plus" {
  declare export default typeof ko;
}
