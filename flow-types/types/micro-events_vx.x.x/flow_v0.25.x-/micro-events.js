declare module "micro-events" {
  /**
   * Event emitter class
   */
  declare class MicroEventEmitter {
    /**
     * Max listeners count
     */
    maxListeners: number;

    /**
     * Attach listener
     */
    on(
      type: string,
      handler: MicroEventEmitter$MicroEventEmitter$EventHandler
    ): MicroEventEmitter;

    /**
     * Detach listener
     */
    off(
      type: string,
      handler?: MicroEventEmitter$MicroEventEmitter$EventHandler
    ): MicroEventEmitter;

    /**
     * Trigger event
     */
    emit(type: string, ...arguments: any[]): MicroEventEmitter;
  }

  /**
   * Event handler function signature
   */
  declare type MicroEventEmitter$EventHandler = (...args: any[]) => any;
  declare module.exports: typeof MicroEventEmitter;
}
