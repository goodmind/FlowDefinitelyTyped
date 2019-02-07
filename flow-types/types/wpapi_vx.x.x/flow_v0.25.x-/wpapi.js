declare module "wpapi" {
  declare module.exports: typeof WPAPI;

  /**
   * REST API Client for WordPress
   * @see http://wp-api.org/node-wpapi/api-reference/wpapi/1.1.2/WPAPI.html
   */
  declare class WPAPI {
    /**
     * Construct a REST API client instance object to create
     * @param options An options hash to configure the instance
     */
    constructor(options?: WPAPI$WPAPI$WPAPIOptions): this;

    /**
     * Take an arbitrary WordPress site, deduce the WP REST API root endpoint,
     * query that endpoint, and parse the response JSON. Use the returned JSON
     * response to instantiate a WPAPI instance bound to the provided site.
     * @param url A URL within a REST API-enabled WordPress website
     */
    static discover(url: string): Promise<WPAPI>;

    /**
     * Start a request against /categories endpoint
     */
    categories(): WPAPI$WPAPI$WPRequest;

    /**
     * Start a request against /comments endpoints
     */
    comments(): WPAPI$WPAPI$WPRequest;

    /**
     * Start a request against /media endpoints
     */
    media(): WPAPI$WPAPI$WPRequest;

    /**
     * Start a request against /pages endpoints
     */
    pages(): WPAPI$WPAPI$WPRequest;

    /**
     * Start a request against /posts endpoints
     */
    posts(): WPAPI$WPAPI$WPRequest;

    /**
     * Start a request against /settings endpoints
     */
    settings(): WPAPI$WPAPI$WPRequest;

    /**
     * Start a request against /statuses endpoints
     */
    statuses(): WPAPI$WPAPI$WPRequest;

    /**
     * Start a request against /tags endpoints
     */
    tags(): WPAPI$WPAPI$WPRequest;

    /**
     * Start a request against /taxonomies endpoints
     */
    taxonomies(): WPAPI$WPAPI$WPRequest;

    /**
     * Start a request against /types endpoints
     */
    types(): WPAPI$WPAPI$WPRequest;

    /**
     * Start a request against /users endpoints
     */
    users(): WPAPI$WPAPI$WPRequest;

    /**
     * Set the authentication to use for a WPAPI site handler instance. Accepts
     * basic HTTP authentication credentials (string username & password) or a
     * Nonce (for cookie authentication) by default; may be overloaded to accept
     * OAuth credentials in the future.
     * @param credentials An authentication credentials object
     */
    auth(credentials?: WPAPI$WPAPI$Credentials): WPAPI;

    /**
 * Deduce request methods from a provided API root JSON response object's
 * routes dictionary, and assign those methods to the current instance. If
 * no routes dictionary is provided then the instance will be bootstrapped
 * with route handlers for the default API endpoints only.
 * 
 * This method is called automatically during WPAPI instance creation.
 * @param routes The "routes" object from the JSON object returned from the
root API endpoint of a WP site, which should be a dictionary of route
definition objects keyed by the route's regex pattern
 */
    bootstrap(routes: WPAPI$WPAPI$Routes): WPAPI;

    /**
     * Access API endpoint handlers from a particular API namespace object
     * @param namespace A namespace string
     */
    namespace(namespace: string): WPAPI;

    /**
     * Create and return a handler for an arbitrary WP REST API endpoint.
     * @param namespace A namespace string, e.g. 'myplugin/v1'
     * @param restBase A REST route string, e.g. '/author/(?P\d+)'
     * @param options An (optional) options object
     */
    registerRoute(
      namespace: string,
      restBase: string,
      options?: WPAPI$WPAPI$RegisterRouteOptions
    ): WPAPI$WPAPI$WPRequestFactory;

    /**
     * Set the default headers to use for all HTTP requests created from this
     * WPAPI site instance. Accepts a header name and its associated value as
     * two strings, or multiple headers as an object of name-value pairs.
     * @param headers
     */
    setHeaders(headers: WPAPI$WPAPI$HTTPHeaders): WPAPI;

    /**
 * Convenience method for making a new WPAPI instance
 * @param endpoint The URI for a WP-API endpoint
 * @param routes The "routes" object from the JSON object returned from the
root API endpoint of a WP site, which should be a dictionary of route
definition objects keyed by the route's regex pattern
 */
    site(endpoint: string, routes: WPAPI$WPAPI$Routes): WPAPI;

    /**
     * Set custom transport methods to use when making HTTP requests against the
     * API.
     *
     * Pass an object with a function for one or many of "get", "post", "put",
     * "delete" and "head" and that function will be called when making that
     * type of request. The provided transport functions should take a WPRequest
     * handler instance (e.g. the result of a wp.posts()... chain or any other
     * chaining request handler) as their first argument; a data object as their
     * second argument (for POST, PUT and DELETE requests); and an optional
     * callback as their final argument. Transport methods should invoke the
     * callback with the response data (or error, as appropriate), and should
     * also return a Promise.
     * @param transport A dictionary of HTTP transport methods
     */
    transport(transport: WPAPI$WPAPI$Transport): WPAPI;

    /**
     * Generate a query against an arbitrary path on the current endpoint. This
     * is useful for requesting resources at custom WP-API endpoints, such as
     * WooCommerce's /products.
     * @param relativePath An endpoint-relative path to which to bind the request
     */
    root(relativePath?: string): WPAPI$WPAPI$WPRequest;

    /**
     * Generate a request against a completely arbitrary endpoint, with no
     * assumptions about or mutation of path, filtering, or query parameters.
     * This request is not restricted to the endpoint specified during WPAPI
     * object instantiation.
     * @param url The URL to request
     */
    url(url: string): WPAPI$WPAPI$WPRequest;

    /**
     * An API client can define its parameter methods, like .authors(), .cart(),
     * .products(). They are usually decided by WPAPI namespaces configuration
     * object. They have WPRequest return type.
     */
    [customRoutesMethod: string]: any;
  }

  /**
   * The base WordPress API request
   * @see http://wp-api.org/node-wpapi/api-reference/wpapi/1.1.2/WPRequest.html
   */
  declare class WPAPI$WPRequest {
    /**
     * WPRequest is the base API request object constructor
     * @param options A hash of options for the WPRequest instance
     */
    constructor(options: WPAPI$WPAPIOptions): this;

    /**
     * Set a request to use authentication, and optionally provide auth
     * credentials. If auth credentials were already specified when the WPAPI
     * instance was created, calling .auth on the request chain will set
     * that request to use the existing credentials.
     * @param credentials An authentication credentials object
     */
    auth(credentials?: WPAPI$Credentials): WPAPI$WPRequest;

    /**
     * Set the context of the request. Used primarily to expose private
     * values on a request object by setting the context to "edit".
     * @param context The context to set on the request
     */
    context(context: string): WPAPI$WPRequest;

    /**
 * Create the specified resource with the provided data
 * 
 * This is the public interface for creating POST requests
 * @param data The data for the POST request
 * @param callback A callback to invoke with the results of the POST
request
 */
    create(data: any, callback?: WPAPI$WPRequestCallback): Promise<any>;

    /**
 * Delete the specified resource
 * @param data Data to send along with the DELETE request
 * @param callback A callback to invoke with the results of the DELETE
request
 */
    delete(data?: any, callback?: WPAPI$WPRequestCallback): Promise<any>;

    /**
     * Convenience wrapper for .context( 'edit' )
     */
    edit(): WPAPI$WPRequest;

    /**
     * Return embedded resources as part of the response payload.
     */
    embed(): WPAPI$WPRequest;

    /**
     * Exclude specific resource IDs in the response collection.
     * @param ids An ID or array of IDs to exclude
     */
    exclude(ids: number | number[]): WPAPI$WPRequest;

    /**
 * Specify a file or a file buffer to attach to the request, for use
 * when creating a new Media item
 * @param file A path to a file (in Node) or an file object (Node or
Browser) to attach to the request
 * @param name An (optional) filename to use for the file
 */
    file(file: string | File, name?: string): WPAPI$WPRequest;

    /**
 * Get the headers for the specified resource
 * @param callback A callback to invoke with the results of the HEAD
request
 */
    get(callback?: WPAPI$WPRequestCallback): Promise<any>;

    /**
     * Set the id of resource.
     * @param id An ID of item
     */
    id(id: number): WPAPI$WPRequest;

    /**
     * Include specific resource IDs in the response collection.
     * @param ids An ID or array of IDs to include
     */
    include(ids: number | number[]): WPAPI$WPRequest;

    /**
     * Set the namespace of the request, e.g. to specify the API root for
     * routes registered by wp core v2 ("wp/v2") or by any given plugin. Any
     * previously- set namespace will be overwritten by subsequent calls to
     * the method.
     * @param namespace A namespace string, e.g. "wp/v2"
     */
    namespace(namespace: string): WPAPI$WPRequest;

    /**
     * Set an arbitrary offset to retrieve items from a specific point in a
     * collection.
     * @param offsetNumber The number of items by which to offset the response
     */
    offset(offsetNumber: number): WPAPI$WPRequest;

    /**
     * Change the sort direction of a returned collection
     * @param direction The order to use when sorting the response
     */
    order(direction: "asc" | "desc"): WPAPI$WPRequest;

    /**
     * Order a collection by a specific field
     * @param field The field by which to order the response
     */
    orderby(field: string): WPAPI$WPRequest;

    /**
     * Set the pagination of a request. Use in conjunction with .perPage()
     * for explicit pagination handling. (The number of pages in a response
     * can be retrieved from the response's _paging.totalPages property.)
     * @param pageNumber The page number of results to retrieve
     */
    page(pageNumber: number): WPAPI$WPRequest;

    /**
 * Set a parameter to render into the final query URI.
 * @param props The name of the parameter to set, or an object containing
parameter keys and their corresponding values
 * @param value The value of the parameter being set
 */
    param(
      props:
        | string
        | {
            [name: string]: string | number | any[]
          },
      value?: string | number | any[]
    ): WPAPI$WPRequest;

    /**
 * Set the number of items to be returned in a page of responses.
 * @param itemsPerPage The number of items to return in one page of
results
 */
    perPage(itemsPerPage: number): WPAPI$WPRequest;

    /**
     * Filter results to those matching the specified search terms.
     * @param searchString A string to search for within post content
     */
    search(searchString: string): WPAPI$WPRequest;

    /**
 * Specify one or more headers to send with the dispatched HTTP request.
 * @param headers The name of the header to set, or an object of header
names and their associated string values
 * @param value The value of the header being set
 */
    setHeaders(
      headers:
        | string
        | {
            [name: string]: string
          },
      value?: string
    ): WPAPI$WPRequest;

    /**
     * Set a component of the resource URL itself (as opposed to a query
     * parameter)
     *
     * If a path component has already been set at this level, throw an
     * error: requests are meant to be transient, so any re-writing of a
     * previously-set path part value is likely to be a mistake.
     * @param level A "level" of the path to set, e.g. "1" or "2"
     * @param value The value to set at that path part level
     */
    setPathPart(
      level: number | string,
      value: number | string
    ): WPAPI$WPRequest;

    /**
     * Query a collection for members with a specific slug.
     * @param slug A post slug (slug), e.g. "hello-world"
     */
    slug(slug: string): WPAPI$WPRequest;

    /**
 * Calling .then on a query chain will invoke the query as a GET and
 * return a promise
 * @param successCallback A callback to handle the data returned from
the GET request
 * @param failureCallback A callback to handle any errors encountered
by the request
 */
    then(
      successCallback?: (data: any) => void,
      failureCallback?: (error: Error) => void
    ): Promise<any>;

    /**
     * Parse the request into a WordPress API request URI string
     */
    toString(): string;

    /**
 * Update the specified resource with the provided data
 * 
 * This is the public interface for creating PATCH requests
 * @param data The data for the PATCH request
 * @param callback A callback to invoke with the results of the PATCH
request
 */
    update(data: any, callback?: WPAPI$WPRequestCallback): Promise<any>;

    /**
     * Validate whether the specified path parts are valid for this endpoint
     *
     * "Path parts" are non-query-string URL segments, like "some" "path" in
     * the URL mydomain.com/some/path?and=a&query=string&too. Because a well
     * -formed path is necessary to execute a successful API request, we
     * throw an error if the user has omitted a value (such as /some/[missing
     * component]/url) or has provided a path part value that does not match
     * the regular expression the API uses to goven that segment.
     */
    validatePath(): WPAPI$WPRequest;

    /**
     * A request can define its parameter methods, like .id(), .date(),
     * .author(). They are usually decided by WPAPI routes configuration
     * object.
     */
    [customParamsMethod: string]: any;
  }

  declare type WPAPI$WPAPIOptions = {
    /**
     * The URI for a WP-API endpoint
     */
    endpoint: string,

    /**
     * A dictionary of API routes with which to bootstrap the WPAPI instance:
     * the instance will be initialized with default routes only if this
     * property is omitted
     */
    routes?: WPAPI$Routes,

    /**
     * An optional dictionary of HTTP transport methods (.get, .post, .put,
     * .delete, .head) to use instead of the defaults, e.g. to use a
     * different HTTP library than superagent
     */
    transport?: WPAPI$Transport
  } & WPAPI$Credentials;

  declare type WPAPI$WPRequestOptions = {
    /**
     * The URI for a WP-API endpoint
     */
    endpoint: string,

    /**
     * An dictionary of HTTP transport methods (.get, .post, .put,
     * .delete, .head) to use instead of the defaults, e.g. to use a
     * different HTTP library than superagent
     */
    transport?: WPAPI$Transport
  } & WPAPI$Credentials;

  declare type WPAPI$WPRequestFactory = () => WPAPI$WPRequest;

  declare type WPAPI$WPRequestCallback = (error: Error, data: any) => void;

  /**
   * Authentication credentials
   */
  declare interface WPAPI$Credentials {
    /**
     * A WP-API Basic HTTP Authentication username
     */
    username?: string;

    /**
     * A WP-API Basic HTTP Authentication password
     */
    password?: string;

    /**
     * A WP nonce for use with cookie authentication
     */
    nonce?: string;
  }

  declare interface WPAPI$Transport {
    get?: WPAPI$TransportFunction;
    post?: WPAPI$TransportFunction;
    put?: WPAPI$TransportFunction;
    delete?: WPAPI$TransportFunction;
    head?: WPAPI$TransportFunction;
  }

  declare type WPAPI$TransportFunction = (
    wpreq: WPAPI$WPRequest,
    cb?: WPAPI$WPRequestCallback
  ) => Promise<any>;

  declare interface WPAPI$Routes {
    [path: string]: WPAPI$Route;
  }

  declare interface WPAPI$Route {
    namespace: string;
    methods: WPAPI$HTTPMethod[];
    endpoints: WPAPI$HTTPEndpoint[];
    _links?: {
      self: string
    };
  }

  declare type WPAPI$HTTPMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

  declare interface WPAPI$HTTPEndpoint {
    methods: WPAPI$HTTPMethod[];
    args: {
      [arg: string]: WPAPI$HTTPArgument
    };
  }

  declare interface WPAPI$HTTPArgument {
    required: boolean;
    default?: string | number;
    enum?: string[];
    description?: string;
    type?: WPAPI$HTTPArgumentType;
    items?: {
      type: WPAPI$HTTPArgumentType
    };
  }

  declare type WPAPI$HTTPArgumentType =
    | "string"
    | "integer"
    | "number"
    | "boolean"
    | "object"
    | "array";

  declare interface WPAPI$HTTPHeaders {
    [key: string]: string;
  }

  declare interface WPAPI$RegisterRouteOptions {
    params?: string[];
    methods?: WPAPI$HTTPMethod[];
    mixins?: {
      [key: string]: (val: any) => any
    };
  }
}
