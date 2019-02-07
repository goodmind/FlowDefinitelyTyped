declare module "socketio-jwt" {
  /**
   * This function returns a middleware function for use with Socket.IO that authenticates a new connection.
   * @param options is an object literal that contains options.
   * @param callback function - not implemented
   */
  declare export function authorize(
    options: JwtAuthOptions,
    callback?: JwtAuthorizeCallback
  ): (socket: SocketIO.Socket) => void;

  /**
   * This is an object literal that contains options.
   */
  declare export interface JwtAuthOptions {
    secret: string | JwtSecretFunc;
    timeout?: number;
    callback?: boolean;
    decodedPropertyName: string;
    handshake?: boolean;
  }
  declare export interface JwtData {
    message: string;
    code: string;
    type: string;
  }

  /**
   * An Error Object used by the package.
   */
  declare export class UnauthorizedError mixins Error {
    constructor(code: string, error: Error): this;
    message: string;
    inner: Error;
    data: JwtData;
  }

  /**
   * This is a function with two args payload, and done.
   *
   * `request` is the original request
   * `payload` is the decoded JWT payload
   * `callback` is an error-first callback defined below
   */
  declare export type JwtSecretFunc = (
    request: any,
    payload: any,
    callback: JwtSecretFuncCallback
  ) => void;

  /**
   * If JwtAuthOptions.secret is a function, then this is the signature of the callback function provided to that function
   */
  declare export type JwtSecretFuncCallback = (
    err: Error | null,
    secret: string
  ) => void;

  /**
   * socketio-jwt contains an optional second argument, that contains no implementation usage.
   */
  declare export type JwtAuthorizeCallback = () => void;
}
