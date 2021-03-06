declare module "fhir-js-client" {
  declare var npm$namespace$FHIR: {
    client: typeof FHIR$client,
    oauth2: typeof FHIR$oauth2
  };

  /**
   * FHIR API instance which can be used to make API calls to the FHIR server.
   * This exposes all the methods implemented by jqFhir.js adapter of fhir.js client library
   * https://github.com/FHIR/fhir.js
   */
  declare interface FHIR$SMART$Api {
    /**
     * GET BASEURL/metadata
     * @param input : An override to the base config object or just an empty object {}
     */
    conformance(input: any): Promise<SMART$Response>;

    /**
     * POST BASEURL/{resourceType} BODY: {entry without id}
     * @param entry : A valid FHIR entry containing the resource.
     */
    create(entry: SMART$Entry): Promise<SMART$Response>;

    /**
     * DELETE BASEURL/{resourceType} BODY {entry with id}
     * @param entry : A valid FHIR entry object containing the resource object
     * or an object containing the id property(id of the resource to be deleted)
     */
    delete(entry: SMART$Entry): Promise<SMART$Response>;

    /**
     * POST BASEURL/Document
     * @param document
     */
    document(document: SMART$Entry): Promise<SMART$Response>;

    /**
     * GET BASEURL/{resourceType}?searchParams
     * Fetch all the resources based on the search parameter (keeps on calling next method to gett all the pages)
     * and process the result set of each page
     * @param params Search Parameter, same as parameter of the Search method
     * @param process Function called by passing the result set of each page fetched.
     * @param done Function called once all the resources are fetched
     * @param fail Function called when an error occurs in the process
     */
    drain(
      params: SMART$SearchParams,
      process: (entries: SMART$Entry[]) => any,
      done: () => any,
      fail: (error: any) => any
    ): void;

    /**
     * GET BASEURL/{resourceType}?searchParams
     * Fetch all the resources of a particular resource type and that meets the search filter.
     * @param params Search Parameter, same as parameter of the Search method
     * Returns a promise
     * Resolve: (entries:any[]) => { console.log(entries); }
     * Reject: (error:any) => { console.log(error); }
     */
    fetchAll(params: SMART$SearchParams): Promise<SMART$Entry[]>;

    /**
     * GET BASEURL/{resourceType}?searchParams
     * GET BASEURL/{referencedType} referencedType based on the resolveParams
     * @param params Search Parameter, same as parameter of the Search method
     * @param resolveParams Resolve Parameter, an array of string containing the each parameter in the format TargetResourceType.TargetElement
     * eg. ['Observation.subject',Observation.context']
     * Returns a promise.
     * Resolve: (entries:Entry[],resolvedReferences:[index: string]: Resource) => { console.log(entries); console.log(resolvedReferences);}
     * Reject: (error:any) => { console.log(error); }
     */
    fetchAllWithReferences(
      params: SMART$SearchParams,
      resolveParams: string[]
    ): any;

    /**
     * GET BASEURL/_history?historyParams
     * Calls the _history API with the parameters specified
     * @param params
     */
    history(params: SMART$HistoryParams): Promise<SMART$Response>;

    /**
     * GET BASEURL/_getpages=XXXX : Next link in the bundle
     * Fetches the next page based on the input bundle resource's next link.
     * @param bundle Input bundle resource containing the next link.
     */
    nextPage(bundle: SMART$Bundle): Promise<SMART$Response>;

    /**
     * GET BASEURL/_getpages=XXXX : Prev link in the bundle
     * Fetches the previous page based on the input bundle resource's previous link.
     * @param bundle Input bundle resource containing the previous link
     */
    prevPage(bundle: SMART$Bundle): Promise<SMART$Response>;

    /**
     * GET BASEURL/Profile/{resourceType}
     * @param resourceType
     */
    profile(resourceType: SMART$ResourceType): Promise<SMART$Response>;

    /**
     * GET BASEURL/{resourceType}/{id}
     * @param params An object with id and resourceType property
     */
    read(params: SMART$ReadParams): Promise<SMART$Response>;

    /**
     * Pass the node containing the property reference, which needs to be resolved. eg. myObservation.resource.subject
     * The resource node should be present if the reference is contained within the resource.
     * If a bundle resource is passed, will try to resolve within that bundle first before querying the server
     * @param params The reference node to be resolved along with the resource and the bundle to be searched if the reference is a contained one.
     */
    resolve(params: SMART$ResolveParams): Promise<SMART$Response>;

    /**
     * GET BASEURL/{resourceType}/{id}/_history?otherHistoryParams
     * @param params Should provide, resourceType and id either through id and type properties or the resource property
     */
    resourceHistory(params: SMART$HistoryParams): Promise<SMART$Response>;

    /**
     * GET BASEURL/{resourceType}?searchParams
     * @param searchParams Filters to be applied to the API call
     */
    search(params: SMART$SearchParams): Promise<SMART$Response>;

    /**
     * POST BASEURL Body: Bundle with entries containing a node 'request': { 'method': 'POST' }. The value of 'method' can be DELETE,POST,PUT or GET.
     * @param bundle
     */
    transaction(bundle: SMART$Bundle): Promise<SMART$Response>;

    /**
     * GET BASEURL/{resourceType}/_history?historyParams
     * @param params
     */
    typeHistory(params: SMART$HistoryParams): Promise<SMART$Response>;

    /**
     * PUT BASEURL/{resourceType}/{id}
     * @param entry : Entry containing the Resource to be updated
     */
    update(entry: SMART$Entry): Promise<SMART$Response>;

    /**
     * POST BASEURL/{resourceType}/_validate BODY: Resource to be validated
     * PS: Cannot find the _validate endpoint on the SMART on FHIR open server. But $validate exists.
     * @param entry
     */
    validate(entry: SMART$Entry): Promise<SMART$Response>;

    /**
     * GET BASEURL/{resourceType}/{id}/_history/{versionId}
     * Fetches the specific historic version of the resource.
     * @param params ResourceType, ResourceId and the VersionId
     */
    vread(params: SMART$VersionReadParams): Promise<SMART$Response>;
  }

  /**
   * Reference within a resource
   */
  declare interface FHIR$SMART$Reference {
    reference: string;
  }

  /**
   * Funtion type returned by the fetchAllWithReferences method
   */
  declare type FHIR$SMART$ResolveFn = (
    resource: SMART$Resource,
    reference: FHIR$SMART$Reference
  ) => SMART$Resource;

  /**
   * Represents the parameter to be passed to the resolve api method
   */
  declare interface FHIR$SMART$ResolveParams {
    /**
     * Represents a reference within a resource. It can be a contained one(within the resource or a bundle) or a remote resource(eg {ResourceType}/{id})
     */
    reference: FHIR$SMART$Reference;

    /**
     * The resource in which the reference will be resolved if the reference is a contained one.
     */
    resource?: SMART$Resource;

    /**
     * The Bundle resource in which the reference will be resolved if the reference is a contained one within the bundle.
     */
    bundle?: SMART$Resource;
  }

  declare interface FHIR$SMART$CommonQueryFilters {
    /**
     * Number of return records requested. The server is not bound to return the number requested, but cannot return more
     */
    count?: number;

    /**
     * Only include resource versions that were created at or after the given instant in time
     *
     * Type: instant An instant in time - known at least to the second and always includes a time zone.
     * Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them,
     * use date and dateTime. instant is a more constrained dateTime xs:dateTime A JSON string - an xs:dateTime
     * Note: This type is for system times, not human times (see date and dateTime below).
     */
    since?: string;

    /**
     * Addition filters to be applied on the history query. The object will be converted into query string parameters.
     */
    params?: {
      /**
       * To specify alternative response formats by their MIME-types.
       * This parameter allows a client to override the accept header value when it is unable to set it correctly due to internal limitations
       * (e.g. XSLT usage). For the _format parameter, the values xml, text/xml, application/xml, and application/fhir+xml SHALL be interpreted
       * to mean the XML format, the codes json, application/json and application/fhir+json SHALL be interpreted
       * to mean the JSON format, and the codes ttl and text/turtle SHALL be interpreted to mean the Turtle RDF format.
       * In addition, the values html and text/html are allowed.
       */
      _format?: string,

      /**
       * Type: dateTime	Only include resource versions that were current at some point during the time period specified
       * in the date time value (may be more than one)
       */
      _at?: string,

      /**
       * Making this interface extendable so that we can add more custom filter parameters
       */
      [propName: string]: any
    };
  }

  declare type FHIR$SMART$HistoryParams = {
    /**
     * Resource ID,  if the history to be fetched is resource specific.
     */
    id?: string,

    /**
     * Type of the resource,  if the history to be fetched is resource specific.
     */
    type?: string
  } & CommonQueryFilters;

  /**
   * FHIR Search parameter : The parameter used to by the FHIR api methods to perform search on a particular resource.
   */
  declare type FHIR$SMART$SearchParams = {
    /**
     * The name of the resource type on which the query is performed
     */
    type: string,

    /**
     * The Search filter query object
     * This object syntaxs adopts mongodb-like query syntax ([see](http://docs.mongodb.org/manual/tutorial/query-documents/)
     * eg:
     * {name: 'maud'}
     * //=> name=maud
     *
     * {name: {$exact: 'maud'}}
     * //=> name:exact=maud
     *
     * {name: {$or: ['maud','dave']}}
     * //=> name=maud,dave
     *
     * {name: {$and: ['maud',{$exact: 'dave'}]}}
     * //=> name=maud&name:exact=Dave
     *
     * {birthDate: {$gt: '1970', $lte: '1980'}}
     * //=> birthDate=gt1970&birthDate=lte1980
     *
     * {subject: {$type: 'Patient', name: 'maud', birthDate: {$gt: '1970'}}}
     * //=> subject:Patient.name=maud&subject:Patient.birthDate=gt1970
     *
     * {'subject.name': {$exact: 'maud'}}
     * //=> subject.name:exact=maud
     */
    query?: any,

    /**
     * The patient id. If provided, will make the search query patient specific by adding the patien query parameter
     */
    patient?: string
  } & CommonQueryFilters;

  /**
   * Used to specify the type of Resource which needs to be considered for the API call
   */
  declare interface FHIR$SMART$ResourceType {
    type: string;
  }

  /**
   * Represents a FHIR entry
   */
  declare interface FHIR$SMART$Entry {
    /**
     * Version Stamp of resource
     */
    versionId?: string;

    /**
     * FHIR Resource type name
     */
    type?: string;

    /**
     * FHIR Resource
     */
    resource: SMART$Resource;

    /**
     * Making this interface extendable since this is not a complete type definition of FHIR Entry
     */
    [propName: string]: any;
  }

  /**
   * Represents a FHIR resource
   */
  declare interface FHIR$SMART$Resource {
    /**
     * The type of resource. All FHIR resources must have a resource type.
     */
    resourceType: string;

    /**
     * Making this interface extendable since this is not a complete type definition of FHIR Resource
     */
    [propName: string]: any;
  }

  /**
   * Represents a FHIR bundle
   */
  declare interface FHIR$SMART$Bundle {
    /**
     * The actual FHIR bundle, which is a FHIR resource itself with resourceType: 'Bundle'
     */
    bundle: FHIR$SMART$Resource;
  }

  /**
   * Parameter to be passed to the read API method
   */
  declare interface FHIR$SMART$ReadParams {
    /**
     * Type of the FHIR resource
     */
    type: string;

    /**
     * ID of the FHIR resource
     */
    id: string;
  }

  /**
   * Parameter to be passed to the vread API method
   */
  declare type FHIR$SMART$VersionReadParams = {
    /**
     * Version ID of the resource to be fetched
     */
    versionId: string
  } & ReadParams;

  /**
   * Structure of the response from the FHIR server
   */
  declare interface FHIR$SMART$Response {
    /**
     * Data returned from the FHIR server
     */
    data?: any;

    /**
     * HTTP Status code string
     */
    status?: any;

    /**
     * HTTP Response headers
     */
    headers?: any;

    /**
     * Contains state information. Url, type, server configuration used, Id etc
     */
    config?: any;

    /**
     * Error object returned by the client library.
     */
    error?: any;
  }

  /**
   * The Patient in context
   */
  declare interface FHIR$SMART$Patient {
    /**
     * Patient ID
     */
    id: string;

    /**
     * Patient scoped fhir.js FHIR API interface. This will ensure that the 'patient' query parameter is passed
     * along with all the API calls which needs a patient context.
     */
    api: FHIR$SMART$Api;

    /**
     * Get the Patient resource in context
     * GET BASEURL/Patient/{id}
     */
    read(): Promise<FHIR$SMART$Response>;
  }

  /**
   * Authorization Context which needs to be passed to create a SMART client directly
   */
  declare interface FHIR$SMART$AuthContext {
    /**
     * Type of Authorization 'none' | 'basic' | 'bearer'
     */
    type: string;

    /**
     * Username if the type of authorization in 'basic'
     */
    username?: string;

    /**
     * Password if the type of authorization in 'basic'
     */
    password?: string;

    /**
     * Access token to be set if the type of authorization is 'bearer'
     */
    token?: string;
  }

  /**
   * Context passed to create a SMART client directly without completing the SMART on FHIR OAuth2 authorization workflow
   */
  declare interface FHIR$SMART$Context {
    /**
     * FHIR service base url
     */
    serviceUrl: string;

    /**
     * Authorization context
     */
    auth?: FHIR$SMART$AuthContext;

    /**
     * Patient in context
     */
    patientId?: string;

    /**
     * User in context
     */
    userId?: string;
  }

  /**
   * Represents a Resource type with ID
   * Used by the get method
   */
  declare interface FHIR$SMART$ResourceParameter {
    /**
     * Name of the resource type
     */
    resource: string;

    /**
     * Resource ID
     */
    id?: string;
  }

  /**
   * User in context
   */
  declare interface FHIR$SMART$User {
    /**
     * Fetch the current user information from server. The library expects the userId to be of the format "ResourceType/Id"
     */
    read(): Promise<FHIR$SMART$Response>;
  }

  declare type FHIR$SMART$SMARTClient = {
    /**
     * Method to add the authorization headers based on the type of authorization Basic or Authorization
     * @param input Returns: The object populated with Authorization header
     */
    authenticated(input: any): any,

    /**
     * OAuth2 configuration used in context
     */
    state: SMART$OAuth2Configuration,

    /**
     * OAuth2 Access Token response
     */
    tokenResponse?: any
  } & Client;

  declare interface FHIR$SMART$Client {
    /**
     * fhir.js FHIR API interface
     */
    api: FHIR$SMART$Api;

    /**
     * Fetch a resource as Binary/Blob
     * @param path Absolute or relative path to the resource to be fetched
     */
    fetchBinary(path: string): Promise<Blob>;

    /**
     * Get the resources based on the resource type and id
     * @param params Resource type and id
     */
    get(params: FHIR$SMART$ResourceParameter): Promise<FHIR$SMART$Response>;

    /**
     * Fetch a resource as Binary/Blob (Same as fetchBinary)
     * @param path Absolute url of the resource to be fetched
     */
    getBinary(path: string): Promise<Blob>;

    /**
     * Current server, user and patient in context
     */
    server: FHIR$SMART$Context;

    /**
     * Patient in context and interface to perform FHIR API calls within its context
     */
    patient?: FHIR$SMART$Patient;

    /**
     * Id of the user in context
     */
    userId?: string;

    /**
     * User in context and exposes a method 'read' to get information.
     */
    user: FHIR$SMART$User;

    /**
     * Split a set of observations based on codable concept properties. eg. code
     * @param observations Observation resources
     * @param property The name of the property which is a codable concept
     * Returns a function to which you can pass code values and get a filtered array of observations.
     */
    byCodes(
      observations: FHIR$SMART$Resource | FHIR$SMART$Resource[],
      ...property: string[]
    ): (...codes: string[]) => FHIR$SMART$Resource[];

    /**
     * Split a set of observations based on codable concept properties. eg. code
     * @param observations Observation resources
     * @param property The name of the property which is a codable concept
     * Returns an object with code values as index and array of observations as values
     */
    byCode(
      observations: FHIR$SMART$Resource | FHIR$SMART$Resource[],
      property: string
    ): SMART$ObservationsByCode;

    /**
     * Helper method to convert units
     */
    units: {
      /**
       * Converts the valueQuantity passed into cm based on the code
       */
      cm(valueQuantity: any): number,

      /**
       * Converts the valueQuantity passed into kg based on the code
       */
      kg(valueQuantity: any): number,

      /**
       * Returns the valueQuantity value as number. (As it is)
       */
      any(valueQuantity: any): number
    };
  }

  /**
   * Indexable type used to represent Observation FHIR resources indexed based on codes.
   */
  declare interface FHIR$SMART$ObservationsByCode {
    [index: string]: FHIR$SMART$Resource[];
  }

  /**
   * SMART client settings for browser behaviour
   */
  declare interface FHIR$SMART$Settings {
    /**
     * Replaces the browser's current URL using window.history.replaceState API.
     * Default to true
     */
    replaceBrowserHistory: boolean;

    /**
     * When set to true, this variable will fully utilize HTML5 sessionStorage API.
     * Default to true
     * This variable can be overriden to false by setting FHIR.oauth2.settings.fullSessionStorageSupport = false.
     * When set to false, the sessionStorage will be keyed by a state variable. This is to allow the embedded IE browser
     * instances instantiated on a single thread to continue to function without having sessionStorage data shared
     * across the embedded IE instances.
     */
    fullSessionStorageSupport: boolean;
  }

  /**
   * Client or application specific settings provided on the FHIR server during the client/application registration.
   */
  declare interface FHIR$SMART$OAuth2ClientSettings {
    /**
     * Unique ID representing the client or application
     */
    client_id: string;

    /**
     * URI to which the code is sent via query string during the OAuth2 authorization workflow. Defaults to the applications base url.
     */
    redirect_uri?: string;

    /**
     * Scopes based on the access required by the application
     */
    scope?: string;

    /**
     * If the application registered is a confidential application, the client_secret needs to be provided during the Token workflow. (Not recommended for public applications)
     */
    secret?: string;

    /**
     * Override the state parameter set by the SMART JS Client library. The library generates a random string as state.
     */
    state?: string;
  }

  /**
   * The OAuth2 endpoints (Registration URI, Authorize URI, Token URI)
   */
  declare interface FHIR$SMART$OAuth2Endpoints {
    /**
     * OAuth2 Registration URI
     */
    registration_uri?: string;

    /**
     * OAuth2 Authorize URI
     */
    authorize_uri?: string;

    /**
     * OAuth2 Token URI
     */
    token_uri?: string;
  }

  /**
   * OAuth2 Provider information. If provided during the Authorize call, the library skips the conformance statement introspection
   */
  declare interface FHIR$SMART$OAuth2Provider {
    /**
     * FHIR Service URL
     */
    url: string;

    /**
     * Unique name for the provider
     */
    name?: string;

    /**
     * Description about the provider
     */
    description?: string;

    /**
     * The OAuth2 endpoints (Registration URI, Authorize URI, Token URI)
     */
    oauth2?: FHIR$SMART$OAuth2Endpoints;
  }

  /**
   * OAuth2 Configuration of the SMART on FHIR Server
   */
  declare interface FHIR$SMART$OAuth2Configuration {
    /**
     * Set the response type based on the Authorization Grant eg. code(Authorization Code Grant), token(Implicit Grant)
     */
    response_type?: string;

    /**
     * Client or application specific settings provided on the FHIR server during the client/application registration.
     */
    client?: FHIR$SMART$OAuth2ClientSettings;

    /**
     * FHIR Service URL
     */
    server?: string;

    /**
     * Fake Access Token Response. Should contain the patient property to set the patient context.
     */
    fake_token_response?: any;

    /**
     * OAuth2 Provider information. If provided during the Authorize call, the library skips the conformance statement introspection
     */
    provider?: FHIR$SMART$OAuth2Provider;
  }

  /**
   * SMART on FHIR OAuth2 authorization helper methods and settings
   */
  declare interface FHIR$SMART$OAuth2 {
    /**
     * Settings to drive the JS client browser behaviour
     */
    settings: FHIR$SMART$Settings;

    /**
     * Handles the OAuth2 redirect
     * If the URL contains the code parameter, it will complete the token call and pass the SMART client to the callback method
     * @param callback Called once the SMART client is ready to be used.
     * @param errback Called when either the OAuth2 workflow has not been started on an error occured during the OAuth2 workflow.
     */
    ready(
      callback?: (smart: FHIR$SMART$SMARTClient) => void,
      errback?: (...args: any[]) => void
    ): void;

    /**
     * Initiate the OAuth2 authorization workflow
     * @param params OAuth2 Configuration
     * @param errback Method which is triggered when an error occurs during the OAuth2 authorization workflow
     */
    authorize(
      params: FHIR$SMART$OAuth2Configuration,
      errback?: (...args: any[]) => void
    ): void;

    /**
     * Resolves the Authorization type of the FHIR server. Can be used to identify if a server supports SMART on FHIR.
     * @param fhirServiceUrl FHIR Server Base URL
     * @param callback Callled once the authorization type is retrieved from the conformance statement.
     * @param errBack Called when an error occured while trying to fetch the conformance statement.
     */
    resolveAuthType(
      fhirServiceUrl: string,
      callback?: (type: string) => void,
      errBack?: (type: string) => void
    ): void;
  }

  /**
   * Construct the SMART client directly without using the Oauth2 workflow
   * @param context Context required to construct the client.
   */
  declare function FHIR$client(context: SMART$Context): SMART$Client;

  /**
   * Property which exposes the OAUth2 specific workflow helpers
   */
  declare var FHIR$oauth2: SMART$OAuth2;
}
