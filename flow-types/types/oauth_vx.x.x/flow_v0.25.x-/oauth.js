declare module "oauth" {
  import type {
    Agent,
    ClientRequest,
    IncomingMessage,
    OutgoingHttpHeaders,
    RequestOptions
  } from "http";

  import type { UrlWithStringQuery } from "url";

  declare export type oauth1tokenCallback = (
    err: {
      statusCode: number,
      data?: any
    },
    token: string,
    token_secret: string,
    parsedQueryString: any
  ) => any;
  declare export type oauth2tokenCallback = (
    err: {
      statusCode: number,
      data?: any
    },
    access_token: string,
    refresh_token: string,
    result: any
  ) => any;
  declare export type dataCallback = (
    err: {
      statusCode: number,
      data?: any
    },
    result?: string | Buffer,
    response?: IncomingMessage
  ) => any;
  declare export class OAuth {
    _isEcho: boolean;
    _requestUrl: string;
    _accessUrl: string;
    _consumerKey: string;
    _consumerSecret: string;
    _protectedKey: string;
    _version: string;
    _authorize_callback: string;
    _signatureMethod: string;
    _nonceSize: number;
    _headers: OutgoingHttpHeaders;
    _clientOptions: {
      requestTokenHttpMethod: string,
      accessTokenHttpMethod: string,
      followRedirects: boolean
    };
    _oauthParameterSeperator: string;
    _realm: string;
    _verifyCredentials: string;
    NONCE_CHARS: string[];
    constructor(
      requestUrl: string,
      accessUrl: string,
      consumerKey: string,
      consumerSecret: string,
      version: string,
      authorize_callback: string | null,
      signatureMethod: string,
      nonceSize?: number,
      customHeaders?: OutgoingHttpHeaders
    ): this;
    setClientOptions(options: {
      requestTokenHttpMethod: string,
      accessTokenHttpMethod: string,
      followRedirects: boolean
    }): void;
    getOAuthAccessToken(
      oauth_token: string,
      oauth_token_secret: string,
      oauth_verifier: string,
      callback: oauth1tokenCallback
    ): void;
    getOAuthAccessToken(
      oauth_token: string,
      oauth_token_secret: string,
      callback: oauth1tokenCallback
    ): void;
    getProtectedResource(
      url: string,
      method: string,
      oauth_token: string,
      oauth_token_secret: string,
      callback: dataCallback
    ): void;
    delete(
      url: string,
      oauth_token: string,
      oauth_token_secret: string,
      callback: dataCallback
    ): ClientRequest;
    get(
      url: string,
      oauth_token: string,
      oauth_token_secret: string,
      callback: dataCallback
    ): ClientRequest;
    put(
      url: string,
      oauth_token: string,
      oauth_token_secret: string,
      post_body?: any,
      post_content_type?: string,
      callback?: dataCallback
    ): ClientRequest;
    post(
      url: string,
      oauth_token: string,
      oauth_token_secret: string,
      post_body?: any,
      post_content_type?: string,
      callback?: dataCallback
    ): ClientRequest;
    getOAuthRequestToken(extraparams: any, callback: oauth1tokenCallback): void;
    getOAuthRequestToken(callback: oauth1tokenCallback): void;
    signUrl(
      url: string,
      oauth_token: string,
      oauth_token_secret: string,
      method?: string
    ): string;
    authHeader(
      url: string,
      oauth_token: string,
      oauth_token_secret: string,
      method?: string
    ): string;
    _getTimestamp(): number | string;
    _encodeData(toEncode: string): string;
    _decodeData(toDecode: string): string;
    _getSignature(
      method: string,
      url: string,
      parameters: string,
      tokenSecret: string
    ): string;
    _normalizeUrl(url: string): string;
    _isParameterNameAnOAuthParameter(parameter: string): boolean;
    _buildAuthorizationHeaders(orderedParameters: string[][]): string;
    _makeArrayOfArgumentsHash(argumentHash: {
      [key: string]: string | string[]
    }): string[][];
    _sortRequestParams(argument_pairs: string[][]): string[][];
    _normaliseRequestParams(args: string[][]): string;
    _createSignatureBase(
      method: string,
      url: string,
      parameters: string
    ): string;
    _createSignature(signatureBase: string, tokenSecret: string): string;
    _getNonce(nonceSize: number): string;
    _createClient(
      port?: number | string,
      hostname?: string,
      method?: string,
      path?: string,
      headers?: OutgoingHttpHeaders,
      sslEnabled?: boolean
    ): ClientRequest;
    _prepareParameters(
      oauth_token: string,
      oauth_token_secret: string,
      method: string,
      url: string,
      extra_params?: any
    ): string[][];
    _prepareParameters(
      oauth_token_secret: string,
      method: string,
      url: string,
      extra_params?: any
    ): string[][];
    _performSecureRequest(
      oauth_token: string,
      oauth_token_secret: string,
      method: string,
      url: string,
      extra_params?: any,
      post_body?: any,
      post_content_type?: string,
      callback?: dataCallback
    ): ClientRequest;
    _putOrPost(
      method: string,
      url: string,
      oauth_token: string,
      oauth_token_secret: string,
      post_body?: any,
      post_content_type?: string,
      callback?: dataCallback
    ): ClientRequest;
  }
  declare export class OAuthEcho mixins OAuth {
    constructor(
      realm: string,
      verify_credentials: string,
      consumerKey: string,
      consumerSecret: string,
      version: string,
      signatureMethod: string,
      nonceSize?: number,
      customHeaders?: OutgoingHttpHeaders
    ): this;
  }
  declare export class OAuth2 {
    _clientId: string;
    _clientSecret: string;
    _baseSite: string;
    _authorizeUrl: string;
    _accessTokenUrl: string;
    _accessTokenName: string;
    _authMethod: string;
    _customHeaders: OutgoingHttpHeaders;
    _useAuthorizationHeaderForGET: boolean;
    _agent: Agent | boolean;
    constructor(
      clientId: string,
      clientSecret: string,
      baseSite: string,
      authorizePath?: string,
      accessTokenPath?: string,
      customHeaders?: OutgoingHttpHeaders
    ): this;
    setAgent(agent: Agent | boolean): void;
    setAccessTokenName(name: string): void;
    setAuthMethod(authMethod: string): void;
    useAuthorizationHeaderforGET(useIt: boolean): void;
    buildAuthHeader(token: string): string;
    getAuthorizeUrl(params?: any): string;
    getOAuthAccessToken(
      code: string,
      params: any,
      callback: oauth2tokenCallback
    ): void;
    getOAuthAccessToken(code: string, callback: oauth2tokenCallback): void;
    getProtectedResource(
      url: string,
      access_token: string,
      callback: dataCallback
    ): void;
    get(url: string, access_token: string, callback: dataCallback): void;
    _getAccessTokenUrl(): string;
    _chooseHttpLibrary(parsedUrl: UrlWithStringQuery): string;
    _request(
      method: string,
      url: string,
      headers: OutgoingHttpHeaders | null,
      post_body: any,
      access_token: string | null,
      callback: dataCallback
    ): void;
    _executeRequest(
      http_library: string,
      options: RequestOptions,
      post_body: any,
      callback: dataCallback
    ): void;
    _executeRequest(
      http_library: string,
      options: RequestOptions,
      callback: dataCallback
    ): void;
  }
}
