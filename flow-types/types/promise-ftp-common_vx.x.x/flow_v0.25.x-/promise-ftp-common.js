declare module "promise-ftp-common" {
  declare export class STATUSES {
    constructor(...args: empty): mixed;
    static +NOT_YET_CONNECTED: Class<STATUSES__NOT_YET_CONNECTED> &
      STATUSES__NOT_YET_CONNECTED &
      "not yet connected"; // "not yet connected"
    static +CONNECTING: Class<STATUSES__CONNECTING> &
      STATUSES__CONNECTING &
      "connecting"; // "connecting"
    static +CONNECTED: Class<STATUSES__CONNECTED> &
      STATUSES__CONNECTED &
      "connected"; // "connected"
    static +LOGGING_OUT: Class<STATUSES__LOGGING_OUT> &
      STATUSES__LOGGING_OUT &
      "logging out"; // "logging out"
    static +DISCONNECTING: Class<STATUSES__DISCONNECTING> &
      STATUSES__DISCONNECTING &
      "disconnecting"; // "disconnecting"
    static +DISCONNECTED: Class<STATUSES__DISCONNECTED> &
      STATUSES__DISCONNECTED &
      "disconnected"; // "disconnected"
    static +RECONNECTING: Class<STATUSES__RECONNECTING> &
      STATUSES__RECONNECTING &
      "reconnecting"; // "reconnecting"
  }

  declare class STATUSES__NOT_YET_CONNECTED mixins STATUSES {}
  declare class STATUSES__CONNECTING mixins STATUSES {}
  declare class STATUSES__CONNECTED mixins STATUSES {}
  declare class STATUSES__LOGGING_OUT mixins STATUSES {}
  declare class STATUSES__DISCONNECTING mixins STATUSES {}
  declare class STATUSES__DISCONNECTED mixins STATUSES {}
  declare class STATUSES__RECONNECTING mixins STATUSES {}

  declare export class FtpConnectionError mixins Error {}
  declare export class FtpReconnectError mixins Error {
    constructor(
      disconnectError?: string | Error,
      connectError?: string | Error,
      onCwd?: boolean
    ): this;
    connectError: string | Error;
    disconnectError: string | Error;
  }
}
