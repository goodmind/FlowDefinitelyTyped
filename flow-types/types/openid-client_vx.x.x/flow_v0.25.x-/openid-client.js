declare module "openid-client" {
  import type { IncomingMessage } from "http";

  declare export interface IssuerMetadata {
    +issuer?: string;
  }
  declare export class Issuer {
    static discover(issuer: string): Promise<Issuer>;
    metadata: IssuerMetadata;
    Client: typeof Client;
    keystore(forceReload?: boolean): Promise<mixed>;
  }
  declare export interface ClientMetadata {
    +client_id?: string;
    +client_secret?: string;
    +redirect_uris?: $ReadOnlyArray<string>;
    +response_types?: $ReadOnlyArray<string>;
    +post_logout_redirect_uris?: $ReadOnlyArray<string>;
  }
  declare export interface AuthorizationUrlParameters {
    +redirect_uri?: string;
    +response_type?: string;
    +scope?: string;
    +response_mode?: string;
    +nonce?: string;
    +resource?: string;
    +code_challenge?: string;
    +code_challenge_method?: string;
  }
  declare export interface EndSessionUrlParameters {
    +id_token_hint?: string | TokenSet;
    +post_logout_redirect_uri?: string;
    +state?: string;
  }
  declare export class Client {
    constructor(metadata: ClientMetadata): this;
    metadata: ClientMetadata;
    authorizationUrl(parameters?: AuthorizationUrlParameters): string;
    endSessionUrl(parameters?: EndSessionUrlParameters): string;
    callbackParams(input: string | IncomingMessage): {};
    callback(
      redirectUri: string,
      parameters: {},
      checks?: {
        +response_type?: string,
        +state?: string,
        +nonce?: string,
        +code_verifier?: string,
        +max_age?: number
      }
    ): Promise<TokenSet>;
    userinfo(
      accessToken: string | TokenSet
    ): Promise<{
      [name: string]: {} | null | void
    }>;
    grant(body: {
      +grant_type:
        | "authorization_code"
        | "client_credentials"
        | "password"
        | "refresh_token"
        | string,
      [name: string]: string | void
    }): Promise<TokenSet>;
    introspect(
      token: string,
      tokenTypeHint?: string,
      extras?: {
        +introspectBody?: {}
      }
    ): Promise<{
      [name: string]: {} | null | void
    }>;
  }
  declare export class TokenSet {
    access_token: string;
    token_type: string;
    id_token: string;
    refresh_token: string;
    expired(): boolean;
    claims(): {
      [name: string]: {} | null | void
    };
  }
  declare var generators: typeof npm$namespace$generators;

  declare var npm$namespace$generators: {
    random: typeof generators$random,
    state: typeof generators$state,
    nonce: typeof generators$nonce,
    codeVerifier: typeof generators$codeVerifier,
    codeChallenge: typeof generators$codeChallenge
  };
  declare function generators$random(bytes?: number): string;

  declare function generators$state(bytes?: number): string;

  declare function generators$nonce(bytes?: number): string;

  declare function generators$codeVerifier(bytes?: number): string;

  declare function generators$codeChallenge(verifier: string): string;
}
