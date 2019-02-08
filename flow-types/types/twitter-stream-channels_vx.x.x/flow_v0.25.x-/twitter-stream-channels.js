export interface StreamChannels$Channels {}

export interface StreamChannels$StreamChannelsOptions {
  track?: {};
  follow?: string;
  locations?: string;
  enableChannelsEvents?: boolean;
  enableRootChannelsEvent?: boolean;
  enableKeywordsEvents?: boolean;
}

declare export class TwitterStreamChannels$StreamChannels
  mixins NodeJS.EventEmitter {
  /**
   * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L25
   */
  constructor(
    apiClient: Twit,
    options: TwitterStreamChannels$StreamChannels.StreamChannels$StreamChannelsOptions
  ): this;

  /**
   * Call this function to restart the stream after you called `.stop()` on it.
   *
   * Note: there is no need to call `.start()` to begin streaming. ` TwitterStreamChannels.streamChannels` calls .start() for you.
   * @method start
   * @returns {TwitterStreamChannels$StreamChannels}
   * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L120
   */
  start(): TwitterStreamChannels$StreamChannels;

  /**
   * Closes the opened stream with Twitter
   * @method stop
   * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options
   * @returns {TwitterStreamChannels$StreamChannels}
   * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L120
   */
  stop(options?: {
    removeAllListeners: boolean
  }): TwitterStreamChannels$StreamChannels;

  /**
   * Returns your channel description
   * @method getChannels
   * @returns {TwitterStreamChannels$StreamChannels.channels}
   * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L145
   */
  getChannels(): TwitterStreamChannels$StreamChannels.StreamChannels$Channels;

  /**
   * Returns an array of the keywords you're tracking (duplicates were removed)
   * @method getTrackedKeywords
   * @returns {Array}
   * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L145
   */
  getTrackedKeywords(): Array<string>;

  /**
   * Returns an object key/value - key:your channels - value:the full text search RegExp for the keywords of this channel
   * @method getchannelsKeywordsLowerCasedRegExp
   * @returns {TwitterStreamChannels$StreamChannels.channels}
   * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L163
   */
  getChannelsKeywordsLowerCasedRegExp(): TwitterStreamChannels$StreamChannels.StreamChannels$Channels;
}
declare module "twitter-stream-channels" {
  import typeof * as Twit from "twit";

  /**
   * @class TwitterStreamChannels
   * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} credentials
   * @return {TwitterStreamChannels}
   */
  declare class TwitterStreamChannels {
    /**
     * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/TwitterStreamChannels.js#L69
     */
    constructor(config: {}): this;

    /**
     * Returns a Twitter API client on which you can do pretty much what you want.
     * More here https://github.com/ttezel/twit
     * @method getApiClient
     * @returns {Twit}
     * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/TwitterStreamChannels.js#L113
     */
    getApiClient(): Twit;

    /**
     * Opens a Twitter Stream and returns you an other one on which you'll be able to attach events for each channels
     * @method streamChannels
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options You can use the same filter options as described in the Twitter stream API for `statuses/filter` https://dev.twitter.com/docs/api/1.1/post/statuses/filter
     * @return {TwitterStreamChannels$StreamChannels}
     * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/TwitterStreamChannels.js#L131
     */
    streamChannels(
      options: TwitterStreamChannels$TwitterStreamChannels$StreamChannels.StreamChannels$StreamChannelsOptions
    ): TwitterStreamChannels$TwitterStreamChannels$StreamChannels;
  }
  declare export default typeof TwitterStreamChannels;
}
