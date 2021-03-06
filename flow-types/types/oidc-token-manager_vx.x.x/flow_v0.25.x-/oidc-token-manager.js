declare module "oidc-token-manager" {
  declare class Oidc$DefaultHttpRequest {
    getJSON(url: string, config: any): Oidc$DefaultPromise;
  }

  declare class Oidc$DefaultPromise {
    constructor(promise: any): this;
    then(
      successCallback: (value?: any) => void,
      errorCallback: (reason?: any) => void
    ): Oidc$DefaultPromise;
    catch(errorCallback: () => void): Oidc$DefaultPromise;
  }

  declare class Oidc$DefaultPromiseFactory {
    resolve(value: any): Oidc$DefaultPromise;
    reject(reason: any): Oidc$DefaultPromise;
    create(callback: any): Oidc$DefaultPromise;
  }

  declare interface Oidc$OidcClientSettings {
    request_state_key?: string;
    request_state_store?: any;
    load_user_profile?: boolean;
    filter_protocol_claims?: boolean;
    authority?: string;
    response_type?: string;
  }

  declare interface Oidc$OidcClient_Static {
    new(settings: Oidc$OidcClientSettings): Oidc$OidcTokenManager;
  }

  declare interface Oidc$OidcClient {
    isOidc: boolean;
    isOAuth: boolean;
    loadMetadataAsync(): Oidc$DefaultPromise;
    loadX509SigningKeyAsync(): Oidc$DefaultPromise;
    loadUserProfile(access_token: string): Oidc$DefaultPromise;
    loadAuthorizationEndpoint(): void;
    createTokenRequestAsync(): Oidc$DefaultPromise;
    createLogoutRequestAsync(id_token_hint: string): Oidc$DefaultPromise;
    validateIdTokenAsync(
      id_token: string,
      nonce: string,
      access_token: string
    ): Oidc$DefaultPromise;
    validateAccessTokenAsync(
      id_token_contents: string,
      access_token: string
    ): Oidc$DefaultPromise;
    validateIdTokenAndAccessTokenAsync(
      id_token: string,
      nonce: string,
      access_token: string
    ): Oidc$DefaultPromise;
    processResponseAsync(queryString: string): Oidc$DefaultPromise;
  }

  declare interface Oidc$OidcTokenManagerSettings {
    load_user_profile?: boolean;
    persist?: boolean;
    store?: Storage;
    persistKey?: string;
    client_id?: string;
    redirect_uri?: string;
    post_logout_redirect_uri?: string;
    response_type?: string;
    scope?: string;
    authority?: string;
    popup_redirect_uri?: string;
    silent_redirect_uri?: string;
    silent_renew?: boolean;
    request_state_store?: Storage;
    request_state_key?: string;
    metadata?: any;
    authorization_endpoint?: string;
    jwks_uri?: string;
    jwks?: any;
    userinfo_endpoint?: string;
    end_session_endpoint?: string;
  }

  declare interface Oidc$PopupSettings {
    features?: string;
    target?: string;
  }

  declare interface Oidc$OidcTokenManager_Static {
    new(settings?: Oidc$OidcTokenManagerSettings): Oidc$OidcTokenManager;
    setPromiseFactory(promiseFactory: Oidc$DefaultPromiseFactory): void;
    setHttpRequest(httpRequest: Oidc$DefaultHttpRequest): void;
  }

  declare interface Oidc$OidcToken {
    profile: string;
    id_token: string;
    access_token: string;
    expires_at: number;
    scope: string;
    scopes: string[];
    session_state: any;
    expired: boolean;
    expires_in: number;
    toJSON(): string;
  }

  declare interface Oidc$OidcTokenManager {
    profile: any;
    id_token: string;
    access_token: string;
    expired: boolean;
    expires_in: number;
    expires_at: number;
    scope: string;
    scopes: string[];
    session_state: any;
    saveToken(token: Oidc$OidcToken): void;
    addOnTokenRemoved(cb: () => void): void;
    addOnTokenObtained(cb: () => void): void;
    addOnTokenExpiring(cb: () => void): void;
    addOnTokenExpired(cb: () => void): void;
    addOnSilentTokenRenewFailed(cb: () => void): void;
    removeToken(): void;
    redirectForToken(): Oidc$DefaultPromise;
    redirectForLogout(): Oidc$DefaultPromise;
    processTokenCallbackAsync(queryString?: string): Oidc$DefaultPromise;
    renewTokenSilentAsync(): Oidc$DefaultPromise;
    processTokenCallbackSilent(hash?: string): void;
    openPopupForTokenAsync(
      popupSettings?: Oidc$PopupSettings
    ): Oidc$DefaultPromise;
    processTokenPopup(hash?: string): void;
  }
  declare var Oidc$OidcTokenManager: Oidc$Oidc$OidcTokenManager_Static;
  declare var Oidc$OidcClient: Oidc$Oidc$OidcClient_Static;
}
