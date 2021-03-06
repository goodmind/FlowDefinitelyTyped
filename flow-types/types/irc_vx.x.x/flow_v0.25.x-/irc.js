declare module "irc" {
  import typeof * as events from "events";

  import typeof * as crypto from "crypto";

  import typeof * as net from "net";

  declare var npm$namespace$NodeIRC: {
    CommandType: typeof NodeIRC$CommandType,
    Client: typeof NodeIRC$Client,
    colors: typeof npm$namespace$NodeIRC$colors
  };

  /**
   * A nick connect to an IRC server.
   */
  declare export class NodeIRC$Client mixins events.EventEmitter {
    /**
     * Socket to the server. Rarely, if ever needed. Use Client#send
     * instead.
     */
    conn: net.Socket;

    /**
     * Channels joined. Includes channel modes, user list, and topic
     * information. Only updated after the server recognizes the join.
     */
    chans: {
      [index: string]: {
        key: string,
        serverName: string,
        users: {
          [index: string]: string
        },
        mode: string,
        created: string
      }
    };

    /**
     * Features supported by the server
     */
    supported: {
      channel: {
        idlength: string[],
        length: number,
        limit: string[],
        modes: {
          [index: string]: string
        },
        types: string
      },
      kicklength: number,
      maxlist: number[],
      maxtargets: string[],
      modes: number,
      nicklength: number,
      topiclength: number,
      usermodes: string
    };

    /**
     * The current nick of the client. Updated if the nick changes
     */
    nick: string;

    /**
     * Channel listing data.
     */
    channellist: NodeIRC$IChannel[];

    /**
     * IRC server MOTD
     */
    motd: string;

    /**
     * Maximum line length
     */
    maxLineLength: number;

    /**
     * Bot options
     */
    opt: NodeIRC$IClientOpts;

    /**
     * Host mask
     */
    hostMask: string;

    /**
     * Connect to an IRC server
     * @param server - server hostname
     * @param nick - nickname
     * @param opts
     */
    constructor(server: string, nick: string, opts?: NodeIRC$IClientOpts): this;

    /**
     * Send a raw message to the server; generally speaking, it’s best
     * not to use this method unless you know what you’re doing.
     * @param command - irc command
     * @param args - command arguments (splat)
     */
    send(command: string, ...args: string[]): void;

    /**
     * Join the specified channel
     * @param channel - channel to join
     * @param callback
     */
    join(channel: string, callback?: NodeIRC$handlers$IJoinChannel): void;

    /**
     * Part the specified channel
     * @param channel - channel to part
     * @param message - optional message to send
     * @param callback
     */
    part(
      channel: string,
      message: string,
      callback: NodeIRC$handlers$IPartChannel
    ): void;

    /**
     * Send a message to the specified target
     * @param target - nick or channel
     * @param message - message to send
     */
    say(target: string, message: string): void;

    /**
     * Send a CTCP message to the specified target
     * @param target - nick or channel
     * @param type - "privmsg" for PRIVMSG, anything else for NOTICE
     * @param text - CTCP message
     */
    ctcp(target: string, type: string, text: string): void;

    /**
     * Send an action to the specified target
     * @param target - target
     * @param message - message
     */
    action(target: string, message: string): void;

    /**
     * Send a notice to the specified target.
     * @param target - nick or channel
     * @param message - message to send
     */
    notice(target: string, message: string): void;

    /**
     * Request a whois for the specified nick
     * @param nick - nickname
     * @param callback
     */
    whois(nick: string, callback: NodeIRC$handlers$IWhois): void;

    /**
     * Request a channel listing from the server. The arguments for this
     * are farily server specific, this method passes them as specified.
     *
     * Responses from the server are available via `channellist_start`,
     * `channellist_item`, and `channellist` events.
     * @param args - arguments
     */
    list(...args: string[]): void;

    /**
     * Connect to the server. Use when `autoConnect` is false.
     * @param retryCount - times to retry
     * @param callback
     */
    connect(
      retryCount?: number | NodeIRC$handlers$IRaw,
      callback?: NodeIRC$handlers$IRaw
    ): void;

    /**
     * Disconnect from the IRC server
     * @param message - message to send
     * @param callback
     */
    disconnect(message: string, callback: () => void): void;

    /**
     * Activate flood protection “after the fact”. You can also use
     * floodProtection while instantiating the Client to enable flood
     * protection, and floodProtectionDelay to set the default message
     * interval.
     * @param interval - ms to wait between messages
     */
    activateFloodProtection(interval: number): void;
  }

  /**
   * Client options object
   */
  declare export interface NodeIRC$IClientOpts {
    /**
     * IRC username
     * @default 'nodebot'
     */
    userName?: string;

    /**
     * IRC username
     * @default ''
     */
    password?: string;

    /**
     * IRC "real name"
     * @default 'nodeJS IRC client'
     */
    realName?: string;

    /**
     * IRC connection port. See
     * https://nodejs.org/api/net.html#net_socket_remoteport
     * @default 6667
     */
    port?: number;

    /**
     * Local interface to bind to for network connections. See
     * https://nodejs.org/api/net.html#net_socket_localaddress
     */
    localAddress?: string;

    /**
     * Should we output debug messages to STDOUT?
     * @default false
     */
    debug?: boolean;

    /**
     * Should we output IRC errors?
     * @default false
     */
    showErrors?: boolean;

    /**
     * Should we auto-rejoin channels?
     * @default false
     */
    autoRejoin?: boolean;

    /**
     * Should we auto-reconnect to networks?
     * @default true
     */
    autoConnect?: boolean;

    /**
     * Channels to join
     * @default []
     */
    channels?: string[];

    /**
     * Should SSL be used? Can either be true or crypto credentials.
     * @default false
     */
    secure?: boolean | crypto.Credentials;

    /**
     * Should we accept self-signed certificates?
     * @default false
     */
    selfSigned?: boolean;

    /**
     * Should we accept expired certificates?
     * @default false
     */
    certExpired?: boolean;

    /**
     * Should we queue our messages to ensure we don't get kicked?
     * @default false
     */
    floodProtection?: boolean;

    /**
     * Delay between messages when flood protection is active
     * @default 1000
     */
    floodProtectionDelay?: number;

    /**
     * Should we use SASL authentication?
     * @default false
     */
    sasl?: boolean;

    /**
     * Should we strip mIRC colors from the output messages?
     * @default false
     */
    stripColors?: boolean;

    /**
     * Channel prefix
     * @default '&#'
     */
    channelPrefixes?: string;

    /**
     * Characters to split a message at.
     * @default 512
     */
    messageSplit?: number;

    /**
     * Encoding to use. See
     * https://nodejs.org/api/stream.html#stream_readable_setencoding_encoding
     * @default 'utf-8'
     */
    encoding?: string;
  }

  /**
   * Command types
   */

  declare export var NodeIRC$CommandType: {|
    +normal: 0, // 0
    +reply: 1, // 1
    +error: 2 // 2
  |};

  /**
   * Parsed IRC message.
   */
  declare export interface NodeIRC$IMessage {
    /**
     * Prefix
     */
    prefix?: string;

    /**
     * Mapped IRC command
     */
    command: string;

    /**
     * Raw IRC command
     */
    rawCommand: string;

    /**
     * Command type
     */
    commandType: $Values<typeof NodeIRC$CommandType>;

    /**
     * Command arguments
     */
    args: string[];
  }

  /**
   * Whois data
   */
  declare export interface NodeIRC$IWhoisData {
    /**
     * Nickname
     */
    nick: string;

    /**
     * Username
     */
    user: string;

    /**
     * Hostnamej
     */
    host: string;

    /**
     * Real name"
     */
    realname: string;

    /**
     * Channels
     */
    channels: string[];

    /**
     * Server
     */
    server: string;

    /**
     * Server description string
     */
    serverinfo: string;

    /**
     * Is this user an operator?
     */
    operator: string;
  }

  /**
   * A channel returned by a channel listing.
   */
  declare export interface NodeIRC$IChannel {
    /**
     * Channel name
     */
    name: string;

    /**
     * User count
     */
    users: string;

    /**
     * Topic string
     */
    topic: string;
  }

  /**
   * 'registered': Emitted when the server sends the initial 001 line,
   * indicating you’ve connected to the server. See the raw event for
   * details on the message object.
   */
  declare export interface NodeIRC$handlers$IRegistered {
    /**
     * @param message - raw message
     */
    (message: NodeIRC$IMessage): void;
  }

  /**
   * 'motd': Emitted when the server sends the message of the day to
   * clients.
   */
  declare export interface NodeIRC$handlers$IMotd {
    /**
     * @param motd - motd string
     */
    (motd: string): void;
  }

  /**
   * 'names': Emitted when the server sends a list of nicks for a channel
   * (which happens immediately after joining and on request. The nicks
   * object passed to the callback is keyed by nick names, and has
   * values ‘’, ‘+’, or ‘@’ depending on the level of that nick in the
   * channel.
   */
  declare export interface NodeIRC$handlers$INames {
    /**
     * @param channel - channel name
     * @param nicks - nicks list
     */
    (channel: string, nicks: string[]): void;
  }

  /**
   * 'names#*' As per ‘names’ event but only emits for the subscribed
   * channel.
   */
  declare export interface NodeIRC$handlers$INamesChannel {
    /**
     * @param channel - channel name
     * @param nicks - nicks list
     */
    (nicks: string[]): void;
  }

  /**
   * 'topic': Emitted when the server sends the channel topic on joining
   * a channel, or when a user changes the topic on a channel. See the
   * raw event for details on the message object.
   */
  declare export interface NodeIRC$handlers$ITopic {
    /**
     * @param channel - channel name
     * @param topic - topic
     * @param nick - nick
     * @param message - raw message
     */
    (
      channel: string,
      topic: string,
      nick: string,
      message: NodeIRC$IMessage
    ): void;
  }

  /**
   * 'join': Emitted when a user joins a channel (including when the
   * client itself joins a channel). See the raw event for details on the
   * message object.
   */
  declare export interface NodeIRC$handlers$IJoin {
    /**
     * @param channel - channel name
     * @param nick - who joined
     * @param message - raw message
     */
    (channel: string, nick: string, message: NodeIRC$IMessage): void;
  }

  /**
   * 'join#*': As per ‘join’ event but only emits for the subscribed
   * channel. See the raw event for details on the message object.
   */
  declare export interface NodeIRC$handlers$IJoinChannel {
    /**
     * @param nick - who joined
     * @param message - raw message
     */
    (nick: string, message: NodeIRC$IMessage): void;
  }

  /**
   * 'part': Emitted when a user parts a channel (including when the
   * client itself parts a channel). See the raw event for details on the
   * message object.
   */
  declare export interface NodeIRC$handlers$IPart {
    /**
     * @param channel - channel name
     * @param nick - who parted
     * @param reason - part reason
     * @param message - raw message
     */
    (
      channel: string,
      nick: string,
      reason: string,
      message: NodeIRC$IMessage
    ): void;
  }

  /**
   * 'part': As per ‘part’ event but only emits for the subscribed
   * channel. See the raw event for details on the message object.
   */
  declare export interface NodeIRC$handlers$IPartChannel {
    /**
     * @param nick - who parted
     * @param reason - part reason
     * @param message - raw message
     */
    (nick: string, reason: string, message: NodeIRC$IMessage): void;
  }

  /**
   * 'kick': Emitted when a user is kicked from a channel. See the raw
   * event for details on the message object.
   */
  declare export interface NodeIRC$handlers$IKick {
    /**
     * @param channel - channel name
     * @param nick - who was kicked
     * @param by - kicker
     * @param reason - kick reason
     * @param message - raw message
     */
    (
      channel: string,
      nick: string,
      by: string,
      reason: string,
      message: NodeIRC$IMessage
    ): void;
  }

  /**
   * 'kick#*': Emitted when a user is kicked from a channel. See the raw
   * event for details on the message object.
   */
  declare export interface NodeIRC$handlers$IKickChannel {
    /**
     * @param nick - who was kicked
     * @param by - kicker
     * @param reason - kick reason
     * @param message - raw message
     */
    (nick: string, by: string, reason: string, message: NodeIRC$IMessage): void;
  }

  /**
   * 'message': Emitted when a message is sent. to can be either a nick
   * (which is most likely this clients nick and means a private message),
   * or a channel (which means a message to that channel). See the raw
   * event for details on the message object.
   */
  declare export interface NodeIRC$handlers$IRecievedMessage {
    /**
     * @param nick - who sent the message
     * @param to - to whom was the message sent
     * @param text - message text
     * @param message - raw message
     */
    (nick: string, to: string, text: string, message: NodeIRC$IMessage): void;
  }

  /**
   * 'message#': Emitted when a message is sent to any channel (i.e.
   * exactly the same as the message event but excluding private
   * messages. See the raw event for details on the message object.
   */
  declare export interface NodeIRC$handlers$IMessageAllChannels {
    /**
     * @param nick - who sent the message
     * @param to - to whom was the message sent
     * @param text - message text
     * @param message - raw message
     */
    (nick: string, to: string, text: string, message: NodeIRC$IMessage): void;
  }

  /**
   * 'message#*': As per ‘message’ event but only emits for the
   * subscribed channel. See the raw event for details on the message
   * object.
   */
  declare export interface NodeIRC$handlers$IMessageChannel {
    /**
     * @param nick - who sent the message
     * @param text - message text
     * @param message - raw message
     */
    (nick: string, text: string, message: NodeIRC$IMessage): void;
  }

  /**
   * 'selfMessage': Emitted when a message is sent from the client.
   * `to` is who the message was sent to. It can be either a nick
   * (which most likely means a private message), or a channel (which
   * means a message to that channel).
   */
  declare export interface NodeIRC$handlers$ISelfMessage {
    (to: string, text: string): void;
  }

  /**
   * 'notice': Emitted when a notice is sent. to can be either a nick
   * (which is most likely this clients nick and means a private
   * message), or a channel (which means a message to that channel). nick
   * is either the senders nick or null which means that the notice comes
   * from the server. See the raw event for details on the message object.
   */
  declare export interface NodeIRC$handlers$INotice {
    /**
     * @param nick - from
     * @param to - to
     * @param text - text
     * @param message - raw message
     */
    (nick: string, to: string, text: string, message: NodeIRC$IMessage): void;
  }

  /**
   * 'ping': Emitted when a server PINGs the client. The client will
   * automatically send a PONG request just before this is emitted.
   */
  declare export interface NodeIRC$handlers$IPing {
    /**
     * @param server - server that adiministered the ping
     */
    (server: string): void;
  }

  /**
   * 'pm': As per ‘message’ event but only emits when the message is
   * direct to the client. See the raw event for details on the message
   * object.
   */
  declare export interface NodeIRC$handlers$IPm {
    /**
     * @param nick - sender
     * @param text - message text
     * @param message - raw message
     */
    (nick: string, text: string, message: NodeIRC$IMessage): void;
  }

  /**
   * 'ctcp': Emitted when a CTCP notice or privmsg was received (type
   * is either ‘notice’ or ‘privmsg’). See the raw event for details
   * on the message object.
   */
  declare export interface NodeIRC$handlers$ICtcp {
    /**
     * @param from - sender
     * @param to - recievier
     * @param text - ctcp text
     * @param type - ctcp type
     * @param message - raw message
     */
    (
      from: string,
      to: string,
      text: string,
      type: string,
      message: NodeIRC$IMessage
    ): void;
  }

  /**
   * 'ctcp-*': Emitted when a specific type of CTCP request was
   * recieved.
   */
  declare export interface NodeIRC$handlers$ICtcpSpecific {
    /**
     * @param from - sender
     * @param to - recievier
     * @param message - raw message
     */
    (from: string, to: string, text: string, message: NodeIRC$IMessage): void;
    (
      from: string,
      to: string,
      text: string,
      type: string,
      message: NodeIRC$IMessage
    ): void;
  }

  /**
   * 'nick': Emitted when a user changes nick along with the channels
   * the user is in. See the raw event for details on the message
   * object.
   */
  declare export interface NodeIRC$handlers$INick {
    /**
     * @param oldnick - old nickname
     * @param newnick - new nickname
     * @param channels - channels the nick changed in
     * @param message - raw message
     */
    (
      oldnick: string,
      newnick: string,
      channels: string[],
      message: NodeIRC$IMessage
    ): void;
  }

  /**
   * 'invite': Emitted when the client receives an /invite. See the
   * raw event for details on the message object.
   */
  declare export interface NodeIRC$handlers$IInvite {
    /**
     * @param channel - channel user was invited to
     * @param from - user who invited
     * @param message - raw message
     */
    (channel: string, from: string, message: NodeIRC$IMessage): void;
  }

  /**
   * '+mode'/'-mode': Emitted when a mode is added or removed from a user or
   * channel. channel is the channel which the mode is being set on/in
   * . by is the user setting the mode. mode is the single character
   * mode identifier. If the mode is being set on a user, argument is
   * the nick of the user. If the mode is being set on a channel,
   * argument is the argument to the mode. If a channel mode doesn’t
   * have any arguments, argument will be ‘undefined’. See the raw
   * event for details on the message object.
   */
  declare export interface NodeIRC$handlers$IModeChange {
    /**
     * @param channel - channel
     * @param by - nick that changed mode
     * @param mode - single character mode identifier
     * @param argument - mode argument
     * @param message - raw message
     */
    (
      channel: string,
      by: string,
      mode: string,
      argument: string,
      message: NodeIRC$IMessage
    ): void;
  }

  /**
   * 'whois': Emitted whenever the server finishes outputting a WHOIS
   * response.
   */
  declare export interface NodeIRC$handlers$IWhois {
    (info: NodeIRC$IWhoisData): void;
  }

  /**
   * 'channellist': Emitted when the server has finished returning a
   * channel list. The channel_list array is simply a list of the
   * objects that were returned in the intervening channellist_item
   * events.
   *
   * This data is also available via the Client.channellist property
   * after this event has fired.
   */
  declare export interface NodeIRC$handlers$IChannelList {
    /**
     * @param list - channels
     */
    (list: NodeIRC$IChannel[]): void;
  }

  /**
   * 'raw': Emitted when ever the client receives a “message” from
   * the server. A message is a parsed line from the server.
   */
  declare export interface NodeIRC$handlers$IRaw {
    /**
     * @param message - raw message
     */
    (message: NodeIRC$IMessage): void;
  }

  /**
   * 'error': Emitted when ever the server responds with an error-type message. The message parameter is exactly as in the ‘raw’ event.
   */
  declare export interface NodeIRC$handlers$IError {
    /**
     * @param message - raw message
     */
    (message: NodeIRC$IMessage): void;
  }

  /**
   * 'action': Emitted whenever a user performs an action
   * (e.g. /me waves).
   */
  declare export interface NodeIRC$handlers$IAction {
    /**
     * @param from - sender
     * @param to - reciever
     * @param text - text
     * @param message - raw message
     */
    (from: string, to: string, text: string, message: NodeIRC$IMessage): void;
  }

  declare var npm$namespace$NodeIRC$colors: {
    wrap: typeof NodeIRC$colors$wrap,
    codes: typeof NodeIRC$colors$codes
  };

  /**
   * Takes a color by name, text, and optionally what color to return.
   * @param color - name of color
   * @param text - text to color
   * @param reset_color - color to set after text
   */
  declare export function NodeIRC$colors$wrap(
    color: string,
    text: string,
    reset_color?: string
  ): string;

  /**
   * This contains the set of colors available and a function to wrap
   * text in a color.
   */
  declare export var NodeIRC$colors$codes: {
    [index: string]: string
  };
  declare export default typeof NodeIRC;
}
