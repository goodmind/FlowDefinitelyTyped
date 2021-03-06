declare interface Express$ErrorCallback {
  (err?: any): void;
}

export interface Express$Session {
  login(callback: Function): void;
  login(extend: Object, callback: Express$ErrorCallback): void;
  login(role: string, callback: Express$ErrorCallback): void;
  login(role: string, extend: Object, callback: Express$ErrorCallback): void;
  logout(callback: Express$ErrorCallback): void;
  isLoggedIn(role?: string): boolean;
  isGuest(): boolean;
  isFresh(): boolean;
  setRole(role: string): Express$Session;
  getRole(): string;
  hasRole(role: string): boolean;
}
declare module "easy-session" {
  declare interface SessionOptions {
    ipCheck?: boolean;
    uaCheck?: boolean;
    freshTimeout?: number;
    maxFreshTimeout?: number;
  }
  declare export function main(
    session: any,
    options?: SessionOptions
  ): express.RequestHandler;

  declare export function isLoggedIn(
    errorCallback?: Function
  ): express.RequestHandler;

  declare export function isFresh(
    errorCallback?: Function
  ): express.RequestHandler;

  declare export function checkRole(
    role: string,
    errorCallback?: Function
  ): express.RequestHandler;
}
