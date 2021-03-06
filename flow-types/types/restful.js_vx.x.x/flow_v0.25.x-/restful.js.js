declare module "restful.js" {
  declare export interface Headers {
    [key: string]: any;
  }
  declare export type Api = {
    all(name: string): CollectionEndpoint,
    allUrl(name: string, url: string): CollectionEndpoint,
    one(name: string, id: any): MemberEndpoint,
    oneUrl(name: string, url: string): MemberEndpoint,
    protocol(protocol: string): Api,
    protocol(): string,
    baseUrl(protocol: string): Api,
    baseUrl(): string,
    port(port: number): Api,
    port(): number,
    prefixUrl(prefix: string): Api,
    prefixUrl(): string,
    customUrl(url: string): Api,
    customUrl(): string
  } & Endpoint<Api>;

  declare export type MemberEndpoint = {
    /**
     * Target a child collection name.
     * @param name
     */
    all(name: string): CollectionEndpoint,
    allUrl(name: string, url: string): CollectionEndpoint,

    /**
     * Target a child member in a collection name.
     * @param name
     * @param id
     */
    one(name: string, id: any): MemberEndpoint,
    oneUrl(name: string, url: string): MemberEndpoint,

    /**
     * Get a member. Returns a promise with an entity.
     * @param params
     * @param headers
     */
    get<T>(params?: any, headers?: Headers): Promise<MemberResponse<T>>,

    /**
     * Update a member. Returns a promise with the response.
     * @param data
     * @param headers
     */
    put<T>(data: any, headers?: Headers): Promise<MemberResponse<T>>,

    /**
     * Delete a member. Returns a promise with the response.
     * @param data
     * @param headers
     */
    delete<T>(data?: any, headers?: Headers): Promise<MemberResponse<T>>,

    /**
     * Patch a member. Returns a promise with the response.
     * @param data
     * @param headers
     */
    patch<T>(data: any, headers?: Headers): Promise<MemberResponse<T>>,

    /**
     * Perform a HEAD request on a member. Returns a promise with the response.
     * @param headers
     */
    head<T>(headers?: any): Promise<MemberResponse<T>>,
    customUrl(url: string): MemberEndpoint,
    customUrl(): string
  } & Endpoint<MemberEndpoint>;

  declare export type CollectionEndpoint = {
    /**
     * Get a member in a collection. Returns a promise with an entity.
     * @param id
     */
    get<T>(
      id: any,
      params?: any,
      headers?: Headers
    ): Promise<MemberResponse<T>>,

    /**
     * Get a full collection. Returns a promise with an array of entities.
     */
    getAll<T>(params?: any, headers?: Headers): Promise<CollectionResponse<T>>,

    /**
     * Create a member in a collection. Returns a promise with the response.
     */
    post<T>(data: any, headers?: Headers): Promise<MemberResponse<T>>,

    /**
     * Update a member in a collection. Returns a promise with the response.
     * @param id
     * @param data
     * @param headers
     */
    put<T>(id: any, data: any, headers?: Headers): Promise<MemberResponse<T>>,

    /**
     * Delete a member in a collection. Returns a promise with the response.
     * @param id
     * @param data
     * @param headers
     */
    delete<T>(
      id: any,
      data?: any,
      headers?: Headers
    ): Promise<MemberResponse<T>>,

    /**
     * Patch a member in a collection. Returns a promise with the response.
     * @param id
     * @param data
     * @param headers
     */
    patch<T>(id: any, data: any, headers?: Headers): Promise<MemberResponse<T>>,

    /**
     * Perform a HEAD request on a member in a collection. Returns a promise with the response.
     * @param id
     * @param headers
     */
    head<T>(id: any, headers?: Headers): Promise<MemberResponse<T>>
  } & Endpoint<CollectionEndpoint>;

  declare export interface Endpoint<Self> {
    /**
     * Get the url.
     */
    url(): string;

    /**
     * Add a response interceptor. You can only alter data and headers.
     */
    addResponseInterceptor(interceptor: ResponseInterceptor): Self;
    responseInterceptors(): ResponseInterceptor[];

    /**
     * Add a request interceptor.
     */
    addRequestInterceptor(interceptor: RequestInterceptor): Self;
    requestInterceptors(): RequestInterceptor[];

    /**
     * Add a full response interceptor. You can alter data and headers.
     */
    addFullResponseInterceptor(interceptor: ResponseInterceptor): Self;
    fullResponseInterceptors(): ResponseInterceptor[];

    /**
     * Add a full request interceptor. You can alter params, headers, data, method and url.
     */
    addFullRequestInterceptor(interceptor: FullRequestInterceptor): Self;
    fullRequestInterceptors(): FullRequestInterceptor[];

    /**
     * Add a header.
     * @param name
     * @param value
     */
    header(name: string, value: any): Self;
    headers(): Headers;
  }
  declare export type MemberResponse<T> = {
    (): {
      data: T,
      headers: Headers,
      status: number,
      statusText: string
    },
    body(): ResponseBody<T>
  } & ResponseBase;

  declare export type CollectionResponse<T> = {
    (): {
      data: T[],
      headers: Headers,
      status: number,
      statusText: string
    },
    body(): ResponseBody<T>[]
  } & ResponseBase;

  declare export interface ResponseBase {
    status(): number;
    headers(): Headers;
    config(): any;
  }
  declare export interface ResponseBody<T> {
    /**
     * Get the JS object unserialized from the response body (which must be in JSON)
     */
    data(): T;
    (): T;

    /**
     * Query a collection child of the entity.
     * @param entity
     */
    all(entity: string): CollectionEndpoint;

    /**
     * Query a member child of the entity.
     * @param entity
     * @param id
     */
    one(entity: string, id: any): MemberEndpoint;

    /**
     * Update the member link to the entity. Returns a promise with the response.
     * @param headers
     */
    save(headers?: Headers): void;

    /**
     * Delete the member link to the entity. Returns a promise with the response.
     */
    remove(headers?: Headers): void;

    /**
     * Get the entity url.
     */
    url(): string;

    /**
     * Get the id of the entity.
     */
    id(): any;
  }
  declare export interface RequestInterceptor {
    (data: any, headers: Headers, method: string, url: string): any;
  }
  declare export interface FullRequestInterceptor {
    (
      params: any,
      headers: Headers,
      data: any,
      method: string,
      url: string
    ): FullRequestInterceptorReturnValue;
  }
  declare export interface FullRequestInterceptorReturnValue {
    params?: any;
    headers?: Headers;
    data?: any;
    method?: string;
    url?: string;
  }
  declare export interface ResponseInterceptor {
    (
      data: any,
      headers: Headers,
      method: string,
      url: string
    ): ResponseInterceptorReturnValue;
  }
  declare export interface ResponseInterceptorReturnValue {
    headers?: Headers;
    data?: any;
    method?: string;
    url?: string;
  }
  declare export default function restful(endpoint: string): Api;
}
