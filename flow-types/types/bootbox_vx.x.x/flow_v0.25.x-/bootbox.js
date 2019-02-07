/**
 * Bootbox options shared by all modal types
 */
declare interface BootboxBaseOptions<T = any> {
  title?: string | Element;
  callback?: (result: T) => any;
  onEscape?: (() => any) | boolean;
  show?: boolean;
  backdrop?: boolean;
  closeButton?: boolean;
  animate?: boolean;
  className?: string;

  /**
   * All other values result in medium
   */
  size?: "small" | "large";
  buttons?: BootboxButtonMap;
}
/**
 * Bootbox options available for custom modals
 */
declare type BootboxDialogOptions<T = any> = {
  message:
    | JQuery
    | any[]
    | Element
    | DocumentFragment
    | Text
    | string
    | ((index: number, html: string) => string | Element | JQuery)
} & BootboxBaseOptions<T>;

/**
 * Bootbox options available for alert modals
 */
declare type BootboxAlertOptions = {
  callback?: () => any,
  buttons?: BootboxAlertButtonMap
} & BootboxDialogOptions<void>;

/**
 * Bootbox options available for confirm modals
 */
declare type BootboxConfirmOptions = {
  callback: (result: boolean) => any,
  buttons?: BootboxConfirmPromptButtonMap
} & BootboxDialogOptions<boolean>;

/**
 * Bootbox options available for prompt modals
 */
declare type BootboxPromptOptions = {
  title: string,
  value?: string,
  inputType?:
    | "text"
    | "textarea"
    | "email"
    | "select"
    | "checkbox"
    | "date"
    | "time"
    | "number"
    | "password",
  callback: (result: string) => any,
  buttons?: BootboxConfirmPromptButtonMap,
  inputOptions?: {
    text: string,
    value: string,
    group?: string
  }[]
} & BootboxBaseOptions<string>;

/**
 * Bootbox options available when setting defaults for modals
 */
declare interface BootboxDefaultOptions {
  locale?: string;
  show?: boolean;
  backdrop?: boolean;
  closeButton?: boolean;
  animate?: boolean;
  className?: string;
}
declare interface BootboxButton {
  label?: string;
  className?: string;
  callback?: () => any;
}
declare interface BootboxButtonMap {
  [key: string]: BootboxButton | Function;
}
/**
 * ButtonMap options for alerts modals
 */
declare type BootboxAlertButtonMap = {
  ok: BootboxButton | Function
} & BootboxButtonMap;

/**
 * ButtonMap options for confirm and prompt modals
 */
declare type BootboxConfirmPromptButtonMap = {
  confirm: BootboxButton | Function,
  cancel: BootboxButton | Function
} & BootboxButtonMap;
declare interface BootboxLocaleValues {
  OK: string;
  CANCEL: string;
  CONFIRM: string;
}
declare interface BootboxStatic {
  alert(message: string, callback?: () => void): JQuery;
  alert(options: BootboxAlertOptions): JQuery;
  confirm(message: string, callback: (result: boolean) => void): JQuery;
  confirm(options: BootboxConfirmOptions): JQuery;
  prompt(message: string, callback: (result: string) => void): JQuery;
  prompt(options: BootboxPromptOptions): JQuery;
  dialog(message: string, callback?: (result: string) => void): JQuery;
  dialog(options: BootboxDialogOptions<string>): JQuery;
  setDefaults(options: BootboxDefaultOptions): void;
  hideAll(): void;
  addLocale(name: string, values: BootboxLocaleValues): void;
  removeLocale(name: string): void;
  setLocale(name: string): void;
}
declare var bootbox: BootboxStatic;
declare module "bootbox" {
  declare module.exports: typeof bootbox;
}
