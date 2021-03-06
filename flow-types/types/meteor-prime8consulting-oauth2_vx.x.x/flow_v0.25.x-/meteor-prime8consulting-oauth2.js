declare module "meteor-prime8consulting-oauth2" {
  declare interface OAuth2Server$RefreshToken {
    refreshToken: string;
    clientId: string;
    userId: string;
    expires: Date;
  }

  declare interface OAuth2Server$AuthCode {
    authCode: string;
    clientId: string;
    userId: string;
    expires: Date;
  }

  declare interface OAuth2Server$AccessToken {
    accessToken: string;
    clientId: string;
    userId: string;
    expires: Date;
  }

  declare interface OAuth2Server$Client {
    clientId: string;
    active: boolean;
    redirectUri: string;
    clientSecret: string;
  }

  declare interface OAuth2Server$PubSubNames {
    /**
     * Constant string representing the auth codes pub/sub.
     */
    authCodes: string;

    /**
     * Constant string representing the refresh token pub/sub.
     */
    refreshTokens: string;
  }

  declare interface OAuth2Server$MethodNames {
    /**
     * Constant string representing th authCodeGran meteor method.
     */
    authCodeGrant: string;
  }

  declare interface OAuth2Server$Collections {
    /**
     * Collection of the refresh tokens.
     */
    refreshToken: Mongo.Collection<OAuth2Server$RefreshToken>;

    /**
     * Collection of the authorization codes.
     */
    authCode: Mongo.Collection<OAuth2Server$AuthCode>;

    /**
     * (server only) Collection of the access tokens.
     */
    accessToken: Mongo.Collection<OAuth2Server$AccessToken>;

    /**
     * (server only) Collection of the clients authorized to use the oauth2 service.
     */
    client: Mongo.Collection<OAuth2Server$Client>;
  }

  declare interface OAuth2Server$SubscribeTo {
    /**
     * Wrapper function to subscribe to the auth code subscription. Returns a standard subscription handle.
     */
    authCode(): Meteor.SubscriptionHandle;
  }

  declare interface OAuth2Server$AuthCodeGrantResult {
    success: boolean;
    error: any;
    authorizationCode: string;
    redirectToUri: string;
  }

  declare interface OAuth2Server$CallMethod {
    /**
     * Wrapper for Meteor.method to create an authorization code. This is an async function and a callback must be provided to be of any use.
     */
    authCodeGrant(
      client_id: string,
      redirect_uri: string,
      response_type: string,
      scope: string[],
      state: string,
      callback: (
        err: Meteor.Error,
        authCodeGrantResult: OAuth2Server$AuthCodeGrantResult
      ) => void
    ): void;
  }

  declare interface OAuth2Server$OAuth2Server {
    pubSubNames: OAuth2Server$PubSubNames;
    methodNames: OAuth2Server$MethodNames;
    collections: OAuth2Server$Collections;
    oauthserver: any;
    subscribeTo: OAuth2Server$SubscribeTo;
    callMethod: OAuth2Server$CallMethod;
  }
  declare var oAuth2Server: OAuth2Server$OAuth2Server.OAuth2Server$OAuth2Server;
}
