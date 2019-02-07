declare module "__ScrollIntoView" {
  declare interface Settings {
    time?: number;
    ease?: (value: number) => number;
    validTarget?: (target: HTMLElement, parentsScrolled: number) => boolean;
    align?: Alignment;
  }
  declare interface Alignment {
    /**
     * 0 to 1, default 0.5 (center)
     */
    top?: number;

    /**
     * 0 to 1, default 0.5 (center)
     */
    left?: number;
  }

  /**
   * type will be 'complete' if the scroll completed or 'canceled' if the current scroll was canceled by a new scroll
   */
  declare type callbackParameterType = "complete" | "canceled";
  declare type Callback = (type: callbackParameterType) => void;
  declare interface ScrollIntoView {
    (target: HTMLElement, callback?: __ScrollIntoView.Callback): void;
    (
      target: HTMLElement,
      settings: __ScrollIntoView.Settings,
      callback?: __ScrollIntoView.Callback
    ): void;
  }
}
declare module "scroll-into-view" {
  declare var scrollIntoView: __ScrollIntoView.ScrollIntoView;
  declare module.exports: typeof scrollIntoView;
}
