declare module "tough-cookie-filestore" {
  declare module.exports: typeof FileCookieStore;

  declare interface FileCookieStore$Cookie {
    domain: string;
    path: string;
    key: string;
  }
  declare class FileCookieStore {
    idx: {
      [domain: string]: {
        [path: string]: {
          [key: string]: FileCookieStore$FileCookieStore$Cookie
        }
      }
    };
    filePath: string;
    synchronous: boolean;
    constructor(filePath: string): this;
    inspect(): string;
    findCookie(
      domain: string,
      path: string,
      key: string,
      cb: (
        whatever: null,
        cookie: FileCookieStore$FileCookieStore$Cookie | null | void
      ) => void
    ): void;
    findCookies(
      domain: string,
      path: string,
      cb: (
        whatever: null,
        cookies: FileCookieStore$FileCookieStore$Cookie[]
      ) => void
    ): void;
    putCookie(
      cookie: FileCookieStore$FileCookieStore$Cookie,
      path: string,
      key: string,
      cb: (whatever: null) => void
    ): void;
    updateCookie(
      oldCookie: FileCookieStore$FileCookieStore$Cookie,
      newCookie: FileCookieStore$FileCookieStore$Cookie,
      cb: (whatever: null) => void
    ): void;
    removeCookie(
      domain: string,
      path: string,
      key: string,
      cb: (whatever: null) => void
    ): void;
    removeCookies(
      domain: string,
      path: string,
      cb: (whatever: null) => void
    ): void;
    saveToFile(filePath: string, data: any, cb: () => void): void;
    loadFromFile(filePath: string, cb: (data: any) => void): void;
  }
}
