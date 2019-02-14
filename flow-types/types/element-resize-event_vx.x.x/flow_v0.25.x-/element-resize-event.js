declare module "element-resize-event" {
  declare export default typeof element_resize_event;

  declare function element_resize_event(
    omNode: Element,
    callback: () => void
  ): void;

  declare var npm$namespace$element_resize_event: {
    unbind: typeof element_resize_event$unbind
  };
  declare function element_resize_event$unbind(
    omNode: Element,
    callback: () => void
  ): void;
}
