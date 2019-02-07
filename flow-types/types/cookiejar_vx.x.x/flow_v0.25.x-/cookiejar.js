declare module "cookiejar" {
  declare export class CookieAccessInfo {
    /**
     * Class to determine matching qualities of a cookie
     * @param domain string domain to match
     * @param path string path to match
     * @param secure boolean access is secure (ssl generally)
     * @param script boolean access is from a script
     */
    constructor(
      domain: string,
      path?: string,
      secure?: boolean,
      script?: boolean
    ): this;
    static All: CookieAccessInfo;
    domain: string;
    path: string;
    secure: boolean;
    script: boolean;
  }
  declare export class Cookie {
    name: string;
    value: string;
    domain: string;
    explicit_domain: boolean;
    path: string;
    explicit_path: boolean;
    noscript: boolean;
    secure: boolean;
    expiration_date: number;

    /**
     * It turns input into a Cookie (singleton if given a Cookie), the
     * request_domain argument is used to default the domain if it is not
     * explicit in the cookie string, the request_path argument is used to set
     * the path if it is not explicit in a cookie String.
     *
     * Explicit domains/paths will cascade, implied domains/paths must exactly
     * match (see http://en.wikipedia.org/wiki/HTTP_cookie#Domain_and_Pat).
     * @param cookie string or a cookie to work on
     * @param requestDomain string argument is used to default the domain if it is not explicit in the cookie string
     * @param requestPath string argument is used to set the path if it is not explicit in a cookie String
     */
    constructor(
      cookie: string | Cookie,
      requestDomain?: string,
      requestPath?: string
    ): this;

    /**
     * the set-cookie: string for this cookie
     */
    toString(): string;

    /**
     * the cookie: string for this cookie
     */
    toValueString(): string;

    /**
     * parses the string onto this cookie or a new one if called directly
     * @param cookie string to be parsed into a Cookie
     * @param requestDomain string definind the requesting domain
     * @param requestPath string defining the requesting path
     */
    parse(cookie: string, requestDomain?: string, requestPath?: string): Cookie;

    /**
     * returns true if the access_info allows retrieval of this cookie
     * @param accessInfo CookieAccessInfo
     */
    matches(accessInfo: CookieAccessInfo): boolean;

    /**
     * returns true if the cookies cannot exist in the same space
     * (domain and path match)
     * @param cookie Cookie
     */
    collidesWith(cookie: Cookie): boolean;
  }
  declare export class CookieJar {
    /**
     * class to hold numerous cookies from multiple domains correctly
     */
    constructor(): this;

    /**
     * modify (or add if not already-existing) a cookie to the jar
     * @param cookie string | Cookie
     * @param requestDomain string argument is used to default the domain if it is not explicit in the cookie string
     * @param requestPath string argument is used to set the path if it is not explicit in a cookie String
     */
    setCookie(
      cookie: string | Cookie,
      requestDomain?: string,
      requestPath?: string
    ): Cookie | false;

    /**
     * modify (or add if not already-existing) a large number of cookies to the
     * jar
     * @param cookie string or list of strings defining cookies
     * @param requestDomain string argument is used to default the domain if it is not explicit in the cookie string
     * @param requestPath string argument is used to set the path if it is not explicit in a cookie String
     */
    setCookies(
      cookie: string | $ReadOnlyArray<string>,
      requestDomain?: string,
      requestPath?: string
    ): $ReadOnlyArray<Cookie> | false;

    /**
     * get a cookie with the name and access_info matching
     * @param cookieName string to be parsed into a Cookie
     * @param accessInfo CookieAccessInfo
     */
    getCookie(cookieName: string, accessInfo: CookieAccessInfo): Cookie;

    /**
     * grab all cookies matching this access_info
     * @param accessInfo CookieAccessInfo
     */
    getCookies(
      accessInfo: CookieAccessInfo
    ): $ReadOnlyArray<Cookie> & {
      toValueString(): string
    };
  }
}
