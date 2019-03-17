declare module "lil-uri" {
  declare export default typeof uri;

  /**
   * Parses the given URI string
   * @param the URI string to parse.
   */
  declare function uri(uri?: string): uri$URI;

  /**
   * Provides access to URI component values and parser/builder functions.
   */
  declare interface uri$URI {
    /**
     * Parses the given URI string
     * @param uri the URI to parse
     */
    parse(uri: string): uri$URIParts;

    /**
     * Builds URI components into a URI string
     */
    build(): string;

    /**
     * Builds URI components into a URI string
     */
    toString(): string;

    /**
     * Builds URI components into a URI string
     */
    valueOf(): string;

    /**
     * Gets the protocol value
     */
    protocol(): string;

    /**
     * Sets the protocol
     * @param protocol the protocol
     * @return this object
     */
    protocol(protocol: string): uri$URI;

    /**
     * Gets the host value
     */
    host(): string;

    /**
     * Sets the host
     * @param host the host
     * @return this object
     */
    host(host: string): uri$URI;

    /**
     * Gets the hostname value
     */
    hostname(): string;

    /**
     * Sets the hostname
     * @param hostname the hostname
     * @return this object
     */
    hostname(hostname: string): uri$URI;

    /**
     * Gets the port value
     */
    port(): number;

    /**
     * Sets the port
     * @param port the port
     * @return this object
     */
    port(port: string): uri$URI;

    /**
     * Gets the auth value
     */
    auth(): uri$Credentials;

    /**
     * Sets the auth
     * @param auth the auth
     * @return this object
     */
    auth(auth: string): uri$URI;

    /**
     * Gets the user value
     */
    user(): string;

    /**
     * Sets the user
     * @param user the user
     * @return this object
     */
    user(user: string): uri$URI;

    /**
     * Gets the password value
     */
    password(): string;

    /**
     * Sets the password
     * @param password the password
     * @return this object
     */
    password(password: string): uri$URI;

    /**
     * Gets the path value
     */
    path(): string;

    /**
     * Sets the path
     * @param path the path
     * @return this object
     */
    path(path: string): uri$URI;

    /**
     * Gets the search value
     */
    search(): string;

    /**
     * Sets the search
     * @param search the search
     * @return this object
     */
    search(search: string): uri$URI;

    /**
     * Gets the query value
     */
    query(): uri$QueryString;

    /**
     * Sets the query
     * @param query the query
     * @return this object
     */
    query(query: uri$QueryString): uri$URI;

    /**
     * Gets the hash value
     */
    hash(): string;

    /**
     * Sets the hash
     * @param hash the hash
     * @return this object
     */
    hash(hash: string): uri$URI;
  }

  /**
   * URI parts
   */
  declare interface uri$URIParts {
    uri: string;
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    auth: string;
    user: string;
    password: string;
    path: string;
    search: string;
    query: uri$QueryString;
    hash: string;
  }

  /**
   * Map of query string keys and values
   */
  declare interface uri$QueryString {
    [key: string]: string | string[];
  }

  /**
   * Credentials map
   */
  declare interface uri$Credentials {
    user: string;
    password: string;
  }
}
