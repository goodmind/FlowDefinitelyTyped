declare module "wheel" {
  /**
   * Adds a callback to receive mouse wheel events from the given element.
   */
  declare function wheel(
    element: GlobalEventHandlers,
    callback: (event: WheelEvent) => void,
    useCapture?: boolean
  ): void;

  declare var npm$namespace$wheel: {
    addWheelListener: typeof wheel$addWheelListener,
    removeWheelListener: typeof wheel$removeWheelListener
  };

  /**
   * Adds a callback to receive mouse wheel events from the given element.
   */
  declare function wheel$addWheelListener(
    element: GlobalEventHandlers,
    callback: (event: WheelEvent) => void,
    useCapture?: boolean
  ): void;

  /**
   * Removes a previously added wheel listener callback.
   */
  declare function wheel$removeWheelListener(
    element: GlobalEventHandlers,
    callback: (event: WheelEvent) => void,
    useCapture?: boolean
  ): void;

  declare module.exports: typeof wheel;
}
