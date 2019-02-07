declare module "lime-js" {
  declare module.exports: typeof Lime;

  declare interface Lime$Envelope {
    id?: string;
    from?: string;
    to?: string;
    pp?: string;
    metadata?: any;
  }

  declare interface Lime$Reason {
    code: number;
    description?: string;
  }

  declare type Lime$Message = {
    type: string,
    content: any
  } & Lime$Envelope;

  declare type Lime$Notification = {
    event: string,
    reason?: Lime$Reason
  } & Lime$Envelope;

  declare class Lime$NotificationEvent {
    static accepted: string;
    static validated: string;
    static authorized: string;
    static dispatched: string;
    static received: string;
    static consumed: string;
  }

  declare type Lime$Command = {
    uri?: string,
    type?: string,
    resource?: any,
    method: string,
    status?: string,
    reason?: Lime$Reason
  } & Lime$Envelope;

  declare class Lime$CommandMethod {
    static get: string;
    static set: string;
    static delete: string;
    static observe: string;
    static subscribe: string;
  }

  declare class Lime$CommandStatus {
    static success: string;
    static failure: string;
  }

  declare type Lime$Session = {
    state: string,
    encryptionOptions?: string[],
    encryption?: string,
    compressionOptions?: string[],
    compression?: string,
    scheme?: string,
    authentication?: any,
    reason?: Lime$Reason
  } & Lime$Envelope;

  declare class Lime$SessionState {
    static new: string;
    static negotiating: string;
    static authenticating: string;
    static established: string;
    static finishing: string;
    static finished: string;
    static failed: string;
  }

  declare class Lime$SessionEncryption {
    static none: string;
    static tls: string;
  }

  declare class Lime$SessionCompression {
    static none: string;
    static gzip: string;
  }

  declare class Lime$Authentication {
    scheme: string;
    static guest: string;
    static plain: string;
    static transport: string;
    static key: string;
  }

  declare class Lime$GuestAuthentication mixins Lime$Authentication {
    scheme: string;
  }

  declare class Lime$TransportAuthentication mixins Lime$Authentication {
    scheme: string;
  }

  declare class Lime$PlainAuthentication mixins Lime$Authentication {
    scheme: string;
    password: string;
  }

  declare class Lime$KeyAuthentication mixins Lime$Authentication {
    scheme: string;
    key: string;
  }

  declare class Lime$Channel {
    constructor(
      transport: Lime$Transport,
      autoReplyPings: boolean,
      autoNotifyReceipt: boolean
    ): this;
    sendMessage(message: Lime$Message): void;
    onMessage(message: Lime$Message): void;
    sendCommand(command: Lime$Command): void;
    onCommand(command: Lime$Command): void;
    sendNotification(notification: Lime$Notification): void;
    onNotification(notification: Lime$Notification): void;
    sendSession(session: Lime$Session): void;
    onSession(session: Lime$Session): void;
    transport: Lime$Transport;
    remoteNode: string;
    localNode: string;
    sessionId: string;
    state: string;
  }

  declare class Lime$ClientChannel mixins Lime$Channel {
    constructor(
      transport: Lime$Transport,
      autoReplyPings?: boolean,
      autoNotifyReceipt?: boolean
    ): this;
    startNewSession(): void;
    negotiateSession(
      sessionCompression: string,
      sessionEncryption: string
    ): void;
    authenticateSession(
      identity: string,
      authentication: Lime$Authentication,
      instance: string
    ): void;
    sendFinishingSession(): void;
    onSessionNegotiating(session: Lime$Session): void;
    onSessionAuthenticating(session: Lime$Session): void;
    onSessionEstablished(session: Lime$Session): void;
    onSessionFinished(session: Lime$Session): void;
    onSessionFailed(session: Lime$Session): void;
  }

  declare class Lime$ClientChannelExtensions {
    static establishSession(
      clientChannel: Lime$ClientChannel,
      compression: string,
      encryption: string,
      identity: string,
      authentication: Lime$Authentication,
      instance: string,
      callback: (error: Error, session: Lime$Session) => any
    ): void;
  }

  declare interface Lime$IMessageChannel {
    sendMessage(message: Lime$Message): void;
    onMessage: (message: Lime$Message) => any;
  }

  declare interface Lime$ICommandChannel {
    sendCommand(command: Lime$Command): void;
    onCommand: (command: Lime$Command) => any;
  }

  declare interface Lime$INotificationChannel {
    sendNotification(notification: Lime$Notification): void;
    onNotification: (notification: Lime$Notification) => any;
  }

  declare interface Lime$ISessionChannel {
    sendSession(session: Lime$Session): void;
    onSession: (session: Lime$Session) => any;
  }

  declare interface Lime$ISessionListener {
    (session: Lime$Session): void;
  }

  declare type Lime$Transport = {
    send(envelope: Lime$Envelope): void,
    onEnvelope: (envelope: Lime$Envelope) => any,
    open(uri: string): void,
    close(): void,
    getSupportedCompression(): string[],
    setCompression(compression: string): void,
    compression: string,
    getSupportedEncryption(): string[],
    setEncryption(encryption: string): void,
    encryption: string
  } & Lime$ITransportStateListener;

  declare interface Lime$ITransportEnvelopeListener {
    (envelope: Lime$Envelope): void;
  }

  declare interface Lime$ITransportStateListener {
    onOpen: () => void;
    onClose: () => void;
    onError: (error: string) => void;
  }

  declare class Lime$WebSocketTransport mixins Lime$Transport {
    webSocket: WebSocket;
    constructor(traceEnabled?: boolean): this;
    send(envelope: Lime$Envelope): void;
    onEnvelope(envelope: Lime$Envelope): void;
    open(uri: string): void;
    close(): void;
    getSupportedCompression(): string[];
    setCompression(compression: string): void;
    compression: string;
    getSupportedEncryption(): string[];
    setEncryption(encryption: string): void;
    encryption: string;
    onOpen(): void;
    onClose(): void;
    onError(error: string): void;
  }
}
