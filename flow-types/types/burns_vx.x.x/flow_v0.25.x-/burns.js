declare module "burns" {
  declare var _Burns: Burns;

  /**
   * Function type for handling events
   */
  declare type HandlerFn = (payload?: any) => any;

  /**
   * This Type is an alias to the multiple
   * parameter types the `registerEvent` method accepts
   */
  declare type Handlers = string | HandlerFn | HandlerFn[];

  /**
   * Type Alias for event handlers
   */
  declare type EventHandler = Handlers | Record<string, Handlers>;

  /**
   * Burns configuration settings
   */
  declare interface Config {
    defaultHandler?: HandlerFn;
    broadcaster?: string | null;
    pusher?: Record<string, any>;
  }

  /**
   * Burns
   */
  declare class Burns {
    configure(config?: Config): this;
    registerEvents(newEvents: Record<string, EventHandler>): this;
    dispatch(
      eventName: string,
      eventData?: Record<string, any>,
      exclude?: {
        exclude?: any
      }
    ): this;
  }
  declare export default typeof _Burns;
}
