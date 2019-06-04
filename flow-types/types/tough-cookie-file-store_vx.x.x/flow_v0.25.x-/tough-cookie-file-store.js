declare module "tough-cookie-file-store" {
  import typeof * as tough from "tough-cookie";

  declare export default typeof FileCookieStore;

  declare class FileCookieStore mixins tough.Store {
    idx: {
      [domain: string]: {
        [path: string]: {
          [key: string]: tough.Cookie
        }
      }
    };
    filePath: string;
    synchronous: boolean;
    constructor(filePath: string): this;
    checkExpired(
      domain: string | null,
      path: string | null,
      key: string | null
    ): boolean;
    findCookie(
      domain: string,
      path: string,
      key: string,
      cb: (err: null, cookie: tough.Cookie | null) => void
    ): void;
    findCookies(
      domain: string,
      path: string,
      cb: (err: null, cookies: tough.Cookie[]) => void
    ): void;
    getAllCookies(
      cb: (err: Error | null, cookies: tough.Cookie[]) => void
    ): void;
    inspect(): string;
    isEmpty(): boolean;
    isExpired(): boolean;
    putCookie(cookie: tough.Cookie, cb: (err: Error | null) => void): void;
    removeCookie(
      domain: string,
      path: string,
      key: string,
      cb: (err: Error | null) => void
    ): void;
    removeCookies(
      domain: string,
      path: string,
      cb: (err: Error | null) => void
    ): void;
    updateCookie(
      oldCookie: tough.Cookie,
      newCookie: tough.Cookie,
      cb: (err: Error | null) => void
    ): void;
  }
}
