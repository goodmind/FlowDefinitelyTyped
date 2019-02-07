declare module "jquery-mousewheel" {
  declare type JQueryMousewheel$JQueryMousewheelEventObject = {
    deltaX: number,
    deltaY: number,
    deltaFactor: number,
    deltaMode: number,
    absDelta: number
  } & JQueryEventObject;

  declare interface JQuery {
    on(
      event: "mousewheel",
      handler: (
        eventObject: JQueryMousewheel$JQueryMousewheel$JQueryMousewheelEventObject,
        ...args: any[]
      ) => any
    ): JQuery;
    mousewheel(
      handler: (
        eventObject: JQueryMousewheel$JQueryMousewheel$JQueryMousewheelEventObject,
        ...args: any[]
      ) => any
    ): JQuery;
    unmousewheel(): JQuery;
  }
}
