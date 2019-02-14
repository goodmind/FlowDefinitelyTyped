declare module "global" {
  declare var npm$namespace$firebase: {
    Analytics: typeof firebase$Analytics,
    Messaging: typeof firebase$Messaging,
    MessagingEvents: typeof firebase$MessagingEvents,
    MessageEvent: typeof firebase$MessageEvent
  };
  declare var firebase$Analytics: firebase$Analytics;

  declare var firebase$Messaging: firebase$Messaging;

  declare var firebase$MessagingEvents: firebase$MessagingEvents;

  declare var firebase$MessageEvent: firebase$MessageEvent;

  declare type firebase$AnalyticsProperties = $Shape<PropertyMixins$Analytics>;

  declare type firebase$Analytics = {
    logEvent(
      eventName: string,
      parameters?: {
        [key: string]: string
      }
    ): void,
    setUserProperty(propertyName: string, value: string): void,
    set(properties: firebase$AnalyticsProperties): this,
    set(property: string, value: any): this,
    analyticsCollectionEnabled: boolean,
    screenName: string,
    userId: string
  } & NativeObject &
    PropertyMixins$Analytics;

  declare type firebase$Messaging = {
    +instanceId: string,
    +token: string,
    +launchData: { [key: string]: any },
    resetInstanceId(): void,
    on(
      type: string,
      listener: (event: any) => void,
      context?: { [key: string]: any }
    ): this,
    on(listeners: firebase$MessagingEvents): this,
    off(
      type: string,
      listener: (event: any) => void,
      context?: { [key: string]: any }
    ): this,
    off(listeners: firebase$MessagingEvents): this,
    once(
      type: string,
      listener: (event: any) => void,
      context?: { [key: string]: any }
    ): this,
    once(listeners: firebase$MessagingEvents): this
  } & NativeObject;

  declare interface firebase$MessagingEvents {
    instanceIdChanged?: (
      event: PropertyChangedEvent<firebase$Messaging, string>
    ) => void;
    tokenChanged?: (
      event: PropertyChangedEvent<firebase$Messaging, string>
    ) => void;
    message?: (event: firebase$MessageEvent) => void;
  }

  declare type firebase$MessageEvent = {
    data: any
  } & EventObject<firebase$Messaging>;

  declare type firebase$PropertyMixins$Analytics = {
    logEvent(
      eventName: string,
      parameters?: {
        [key: string]: string
      }
    ): void,
    setUserProperty(propertyName: string, value: string): void,
    set(properties: firebase$AnalyticsProperties): this,
    set(property: string, value: any): this,
    analyticsCollectionEnabled: boolean,
    screenName: string,
    userId: string
  } & NativeObject &
    PropertyMixins$Analytics;
}
declare module "tabris-plugin-firebase" {
  declare interface EventObject<T> {
    +target: T;
    +timeStamp: number;
    +type: string;
  }

  /**
   * Base class for all objects with a native implementation.
   */
  declare class NativeObject {
    constructor(properties?: { [key: string]: any }): this;

    /**
     * Gets the current value of the given *property*.
     */
    get(property: string): any;

    /**
     * Removes all occurrences of *listener* that are bound to *type* and *context* from this widget.
     * @param type The type of events to remove listeners for.
     * @param listener The listener function to remove.
     * @param context The context of the bound listener to remove.
     */
    off(
      type: string,
      listener: (event: any) => void,
      context?: { [key: string]: any }
    ): this;

    /**
     * Removes all listeners in the given object from the event type indicated by their key.
     * @param listeners A key-value map where the keys are event types and the values are the listeners to deregister from these events, e.g. `{tap: onTap, scroll: onScroll}`.
     */
    off(listeners: { [key: string]: any }): this;

    /**
     * Registers a *listener* function to be notified of events of the given *type*.
     * @param type The type of events to listen for.
     * @param listener The listener function to register. This function will be called with an event object.
     * @param context In the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object.
     */
    on(
      type: string,
      listener: (event: any) => void,
      context?: { [key: string]: any }
    ): this;

    /**
     * Registers all listeners in the given object for the event type indicated by their key.
     * @param listeners A key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.
     */
    on(listeners: { [key: string]: any }): this;

    /**
     * Same as `on`, but removes the listener after it has been invoked by an event.
     * @param type The type of the event to listen for.
     * @param listener The listener function to register. This function will be called with an event object.
     * @param context In the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object.
     */
    once(
      type: string,
      listener: (event: any) => void,
      context?: { [key: string]: any }
    ): this;

    /**
     * Same as `on`, but removes the listener after it has been invoked by an event.
     * @param listeners A key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.
     */
    once(listeners: { [key: string]: any }): this;

    /**
     * Sets the given property.
     */
    set(property: string, value: any): this;

    /**
     * Sets all key-value pairs in the properties object as widget properties.
     */
    set(properties: { [key: string]: any }): this;

    /**
     * Notifies all registered listeners for the given *type* and passes the *event* object to the
     * listeners.
     * @param type The type of event to trigger
     * @param event The event object to pass to listener functions.
     */
    trigger(type: string, event: EventObject<this>): this;

    /**
     * An application-wide unique identifier automatically assigned to all native objects on creation.
     */
    static cid: string;
  }
  declare interface PropertyChangedEvent<T, U> {
    +target: T;
    +timeStamp: number;
    +type: string;
    +value: U;
  }
  declare export {};
}
