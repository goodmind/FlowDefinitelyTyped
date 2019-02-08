declare module "global" {
  declare interface JQuery {
    mouseExit(options?: Options): JQuery;
    on(
      event: "mouseExit",
      handler: (
        event: JQuery.TriggeredEvent<HTMLElement>,
        data: FocusElements
      ) => void
    ): JQuery;
  }
}
declare module "jquery-mouse-exit" {
  declare export type Options = $Shape<{
    delay: number
  }>;
  declare export type FocusElements = $Shape<{
    lostFocus: HTMLElement,
    gainedFocus: HTMLElement
  }>;
}
