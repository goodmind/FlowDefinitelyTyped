declare module "amplifier" {
  declare interface amplifier$RequestSettings {
    resourceId: string;
    data?: any;
    success?: (...args: any[]) => void;
    error?: (...args: any[]) => void;
  }

  declare type amplifier$Decoder = (
    data?: any,
    status?: string,
    xhr?: JQueryXHR,
    success?: (...args: any[]) => void,
    error?: (...args: any[]) => void
  ) => void;

  declare interface amplifier$Decoders {
    [decoderName: string]: amplifier$Decoder;
    jsSend: amplifier$Decoder;
  }

  declare type amplifier$AjaxSettings = {
    cache?: any,
    dataMap?: {} | ((data: any) => {}),
    decoder?: any
  } & JQueryAjaxSettings;

  declare interface amplifier$Request {
    /**
     * *
     * Request a resource.
     * resourceId: Identifier string for the resource.
     * data: A set of key/value pairs of data to be sent to the resource.
     * callback: A function to invoke if the resource is retrieved successfully.
     */
    (resourceId: string, hash?: any, callback?: (...args: any[]) => any): void;

    /**
     * *
     * Request a resource.
     * settings: A set of key/value pairs of settings for the request.
     * resourceId: Identifier string for the resource.
     * data (optional): Data associated with the request.
     * success (optional): Function to invoke on success.
     * error (optional): Function to invoke on error.
     */
    (settings: amplifier$RequestSettings): any;

    /**
     * *
     * Define a resource.
     * resourceId: Identifier string for the resource.
     * requestType: The type of data retrieval method from the server. See the request types sections for more information.
     * settings: A set of key/value pairs that relate to the server communication technology. The following settings are available:
     * Any settings found in jQuery.ajax().
     * cache: See the cache section for more details.
     * decoder: See the decoder section for more details.
     */
    define(
      resourceId: string,
      requestType: string,
      settings?: amplifier$AjaxSettings
    ): void;

    /**
     * *
     * Define a custom request.
     * resourceId: Identifier string for the resource.
     * resource: Function to handle requests. Receives a hash with the following properties:
     * resourceId: Identifier string for the resource.
     * data: Data provided by the user.
     * success: Callback to invoke on success.
     * error: Callback to invoke on error.
     */
    define(
      resourceId: string,
      resource: (settings: amplifier$RequestSettings) => void
    ): void;
    decoders: amplifier$Decoders;
    cache: any;
  }

  declare interface amplifier$Subscribe {
    /**
     * *
     * Subscribe to a message.
     * topic: Name of the message to subscribe to.
     * callback: Function to invoke when the message is published.
     * [priority]: Priority relative to other subscriptions for the same message. Lower values have higher priority. Default is 10.
     */
    (topic: string, callback: (...args: any[]) => any, priority?: number): void;

    /**
     * *
     * Subscribe to a message.
     * topic: Name of the message to subscribe to.
     * context: What this will be when the callback is invoked.
     * callback: Function to invoke when the message is published.
     * [priority]: Priority relative to other subscriptions for the same message. Lower values have higher priority. Default is 10.
     */
    (
      topic: string,
      context: any,
      callback: (...args: any[]) => any,
      priority?: number
    ): void;
  }

  declare interface amplifier$StorageTypeStore {
    /**
     * *
     * Stores a value for a given key using the default storage type.
     *
     * key: Identifier for the value being stored.
     * value: The value to store. The value can be anything that can be serialized as JSON.
     * [options]: A set of key/value pairs that relate to settings for storing the value.
     */
    (key: string, value: any, options?: any): void;

    /**
     * *
     * Gets a stored value based on the key of a hash of all stored values.
     */
    (key?: string): any;
  }

  declare type amplifier$Store = {
    /**
     * *
     * IE 8+, Firefox 3.5+, Safari 4+, Chrome, Opera 10.5+, iPhone 2+, Android 2+
     */
    localStorage: amplifier$StorageTypeStore,

    /**
     * *
     * IE 8+, Firefox 2+, Safari 4+, Chrome, Opera 10.5+, iPhone 2+, Android 2+
     */
    sessionStorage: amplifier$StorageTypeStore,

    /**
     * *
     * Firefox 2+
     */
    globalStorage: amplifier$StorageTypeStore,

    /**
     * *
     * IE 5 - 7
     */
    userData: amplifier$StorageTypeStore,

    /**
     * *
     * An in-memory store is provided as a fallback if none of the other storage types are available.
     */
    memory: amplifier$StorageTypeStore
  } & amplifier$StorageTypeStore;

  declare interface amplifier$Static {
    subscribe: amplifier$Subscribe;

    /**
     * *
     * Remove a subscription.
     * topic: The topic being unsubscribed from.
     * callback: The callback that was originally subscribed.
     */
    unsubscribe(topic: string, callback: (...args: any[]) => any): void;

    /**
     * *
     * Publish a message.
     * topic: The name of the message to publish.
     * Any additional parameters will be passed to the subscriptions.
     * amplifier.publish returns a boolean indicating whether any subscriptions returned false.
     * The return value is true if none of the subscriptions returned false, and false otherwise.
     * Note that only one subscription can return false because doing so will prevent additional subscriptions from being invoked.
     */
    publish(topic: string, ...args: any[]): boolean;
    store: amplifier$Store;
    request: amplifier$Request;
  }
  declare var amplifier: amplifier$Static;
  declare export default typeof amplifier;
}
