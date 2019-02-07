declare module "react-redux-i18n" {
  import typeof * as react from "react";

  import typeof * as redux from "redux";

  /**
   * Helper methods
   */
  declare interface I18n {
    t(code: string, options?: any): string;
    l(timestamp: number, options?: any): string;
  }
  declare export var I18n: I18n;
  declare type SubTranslationObject =
    | string
    | {
        [key: string]: SubTranslationObject
      };
  declare type TranslationObjects = {
    [lang: string]: SubTranslationObject
  };
  declare type DispatchCallback<S: redux.Action> = {
    (dispatch?: redux.Dispatch<S>, getState?: () => S): any
  };
  declare type I18nState = {
    translations: TranslationObjects,
    locale: string
  };
  declare type TranslateProps = {
    className?: string,
    dangerousHTML?: boolean,
    style?: React.CSSProperties,
    tag?: React.ReactType,
    value: string,
    [prop: string]: any
  };
  declare type LocalizeProps = {
    className?: string,
    dangerousHTML?: boolean,
    dateFormat?: string,
    options?: Object,
    style?: React.CSSProperties,
    tag?: React.ReactType,
    value: string | number | { [key: string]: any }
  };

  /**
   * React components
   */
  declare export class Translate mixins react.Component<TranslateProps> {}
  declare export class Localize mixins react.Component<LocalizeProps> {}

  /**
   * Reducer
   */
  declare export function i18nReducer(
    state?: any,
    options?: any
  ): redux.Reducer<I18nState>;

  /**
   * Reducer init
   */
  declare export function syncTranslationWithStore(
    store: redux.Store<any>
  ): void;

  /**
   * Redux Actions
   */
  declare export function loadTranslations(
    translationsObject: TranslationObjects
  ): DispatchCallback<any>;

  declare export function setLocale(locale: string): DispatchCallback<any>;
}
