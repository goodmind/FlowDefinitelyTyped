declare module "client-sessions" {
  import typeof * as cookies from "cookies";

  declare type client_sessions$NextFunction = (err?: Error) => void;

  declare type client_sessions$RequestHandler = (
    req: any,
    res: any,
    next: client_sessions$NextFunction
  ) => any;

  declare interface client_sessions$SessionOptions {
    /**
     * encryption secret for the session.
     * required
     */
    secret: string;

    /**
     * session cookie name.
     * Default: 'session_state'
     */
    cookieName?: string;

    /**
     * how long the session will stay valid in ms.
     * Default: 24 hours
     */
    duration?: number;

    /**
     * if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds.
     * Default: 5 minutes
     */
    activeDuration?: number;

    /**
     * session accessor on the request object.
     * Default: 'session'
     */
    requestKey?: string;
    cookie?: cookies.IOptions;
  }

  declare interface client_sessions$DecodeResult {
    content: any;
    createdAt: number;
    duration: number;
  }

  declare interface client_sessions$ComputeHmacOptions {
    signatureAlgorithm: string;
    signatureKey: Buffer;
  }

  declare interface client_sessions$Util {
    computeHmac(
      options: any,
      iv: string,
      ciphertext: string,
      duration: number,
      createdAt: number
    ): Buffer;
    encode(
      options: client_sessions$SessionOptions,
      content: any,
      duration?: number,
      createdAt?: number
    ): string;
    decode(
      options: client_sessions$SessionOptions,
      encoded: string
    ): client_sessions$DecodeResult;
  }

  declare interface client_sessions$Sessions {
    (options: client_sessions$SessionOptions): client_sessions$RequestHandler;
    util: client_sessions$Util;
  }
  declare var client_sessions: client_sessions$client_sessions$Sessions;
  declare module.exports: typeof client_sessions;
}
