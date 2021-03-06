declare module "gapi.client.identitytoolkit" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    relyingparty: typeof gapi$client$relyingparty
  };

  /**
   * Load Google Identity Toolkit API v3
   */
  declare function gapi$client$load(
    name: "identitytoolkit",
    version: "v3"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "identitytoolkit",
    version: "v3",
    callback: () => any
  ): void;

  declare var gapi$client$relyingparty: identitytoolkit$RelyingpartyResource;

  declare interface gapi$client$identitytoolkit$CreateAuthUriResponse {
    /**
     * all providers the user has once used to do federated login
     */
    allProviders?: string[];

    /**
     * The URI used by the IDP to authenticate the user.
     */
    authUri?: string;

    /**
     * True if captcha is required.
     */
    captchaRequired?: boolean;

    /**
     * True if the authUri is for user's existing provider.
     */
    forExistingProvider?: boolean;

    /**
     * The fixed string identitytoolkit#CreateAuthUriResponse".
     */
    kind?: string;

    /**
     * The provider ID of the auth URI.
     */
    providerId?: string;

    /**
     * Whether the user is registered if the identifier is an email.
     */
    registered?: boolean;

    /**
     * Session ID which should be passed in the following verifyAssertion request.
     */
    sessionId?: string;

    /**
     * All sign-in methods this user has used.
     */
    signinMethods?: string[];
  }

  declare interface gapi$client$identitytoolkit$DeleteAccountResponse {
    /**
     * The fixed string "identitytoolkit#DeleteAccountResponse".
     */
    kind?: string;
  }

  declare interface gapi$client$identitytoolkit$DownloadAccountResponse {
    /**
     * The fixed string "identitytoolkit#DownloadAccountResponse".
     */
    kind?: string;

    /**
     * The next page token. To be used in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;

    /**
     * The user accounts data.
     */
    users?: identitytoolkit$UserInfo[];
  }

  declare interface gapi$client$identitytoolkit$EmailLinkSigninResponse {
    /**
     * The user's email.
     */
    email?: string;

    /**
     * Expiration time of STS id token in seconds.
     */
    expiresIn?: string;

    /**
     * The STS id token to login the newly signed in user.
     */
    idToken?: string;

    /**
     * Whether the user is new.
     */
    isNewUser?: boolean;

    /**
     * The fixed string "identitytoolkit#EmailLinkSigninResponse".
     */
    kind?: string;

    /**
     * The RP local ID of the user.
     */
    localId?: string;

    /**
     * The refresh token for the signed in user.
     */
    refreshToken?: string;
  }

  declare interface gapi$client$identitytoolkit$EmailTemplate {
    /**
     * Email body.
     */
    body?: string;

    /**
     * Email body format.
     */
    format?: string;

    /**
     * From address of the email.
     */
    from?: string;

    /**
     * From display name.
     */
    fromDisplayName?: string;

    /**
     * Reply-to address.
     */
    replyTo?: string;

    /**
     * Subject of the email.
     */
    subject?: string;
  }

  declare interface gapi$client$identitytoolkit$GetAccountInfoResponse {
    /**
     * The fixed string "identitytoolkit#GetAccountInfoResponse".
     */
    kind?: string;

    /**
     * The info of the users.
     */
    users?: identitytoolkit$UserInfo[];
  }

  declare interface gapi$client$identitytoolkit$GetOobConfirmationCodeResponse {
    /**
     * The email address that the email is sent to.
     */
    email?: string;

    /**
     * The fixed string "identitytoolkit#GetOobConfirmationCodeResponse".
     */
    kind?: string;

    /**
     * The code to be send to the user.
     */
    oobCode?: string;
  }

  declare interface gapi$client$identitytoolkit$GetRecaptchaParamResponse {
    /**
     * The fixed string "identitytoolkit#GetRecaptchaParamResponse".
     */
    kind?: string;

    /**
     * Site key registered at recaptcha.
     */
    recaptchaSiteKey?: string;

    /**
     * The stoken field for the recaptcha widget, used to request captcha challenge.
     */
    recaptchaStoken?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyCreateAuthUriRequest {
    /**
     * The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS.
     */
    appId?: string;

    /**
     * Explicitly specify the auth flow type. Currently only support "CODE_FLOW" type. The field is only used for Google provider.
     */
    authFlowType?: string;

    /**
     * The relying party OAuth client ID.
     */
    clientId?: string;

    /**
     * The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
     */
    context?: string;

    /**
     * The URI to which the IDP redirects the user after the federated login flow.
     */
    continueUri?: string;

    /**
     * The query parameter that client can customize by themselves in auth url. The following parameters are reserved for server so that they cannot be
     * customized by clients: client_id, response_type, scope, redirect_uri, state, oauth_token.
     */
    customParameter?: Record<string, string>;

    /**
     * The hosted domain to restrict sign-in to accounts at that domain for Google Apps hosted accounts.
     */
    hostedDomain?: string;

    /**
     * The email or federated ID of the user.
     */
    identifier?: string;

    /**
     * The developer's consumer key for OpenId OAuth Extension
     */
    oauthConsumerKey?: string;

    /**
     * Additional oauth scopes, beyond the basid user profile, that the user would be prompted to grant
     */
    oauthScope?: string;

    /**
     * Optional realm for OpenID protocol. The sub string "scheme://domain:port" of the param "continueUri" is used if this is not set.
     */
    openidRealm?: string;

    /**
     * The native app package for OTA installation.
     */
    otaApp?: string;

    /**
     * The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP
     * identifier.
     */
    providerId?: string;

    /**
     * The session_id passed by client.
     */
    sessionId?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyDeleteAccountRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;

    /**
     * The GITKit token or STS id token of the authenticated user.
     */
    idToken?: string;

    /**
     * The local ID of the user.
     */
    localId?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyDownloadAccountRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;

    /**
     * The max number of results to return in the response.
     */
    maxResults?: number;

    /**
     * The token for the next page. This should be taken from the previous response.
     */
    nextPageToken?: string;

    /**
     * Specify which project (field value is actually project id) to operate. Only used when provided credential.
     */
    targetProjectId?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyEmailLinkSigninRequest {
    /**
     * The email address of the user.
     */
    email?: string;

    /**
     * Token for linking flow.
     */
    idToken?: string;

    /**
     * The confirmation code.
     */
    oobCode?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyGetAccountInfoRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;

    /**
     * The list of emails of the users to inquiry.
     */
    email?: string[];

    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string;

    /**
     * The list of local ID's of the users to inquiry.
     */
    localId?: string[];

    /**
     * Privileged caller can query users by specified phone number.
     */
    phoneNumber?: string[];
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyGetProjectConfigResponse {
    /**
     * Whether to allow password user sign in or sign up.
     */
    allowPasswordUser?: boolean;

    /**
     * Browser API key, needed when making http request to Apiary.
     */
    apiKey?: string;

    /**
     * Authorized domains.
     */
    authorizedDomains?: string[];

    /**
     * Change email template.
     */
    changeEmailTemplate?: gapi$client$identitytoolkit$EmailTemplate;
    dynamicLinksDomain?: string;

    /**
     * Whether anonymous user is enabled.
     */
    enableAnonymousUser?: boolean;

    /**
     * OAuth2 provider configuration.
     */
    idpConfig?: identitytoolkit$IdpConfig[];

    /**
     * Legacy reset password email template.
     */
    legacyResetPasswordTemplate?: gapi$client$identitytoolkit$EmailTemplate;

    /**
     * Project ID of the relying party.
     */
    projectId?: string;

    /**
     * Reset password email template.
     */
    resetPasswordTemplate?: gapi$client$identitytoolkit$EmailTemplate;

    /**
     * Whether to use email sending provided by Firebear.
     */
    useEmailSending?: boolean;

    /**
     * Verify email template.
     */
    verifyEmailTemplate?: gapi$client$identitytoolkit$EmailTemplate;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyGetPublicKeysResponse {
    [key: string]: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyResetPasswordRequest {
    /**
     * The email address of the user.
     */
    email?: string;

    /**
     * The new password inputted by the user.
     */
    newPassword?: string;

    /**
     * The old password inputted by the user.
     */
    oldPassword?: string;

    /**
     * The confirmation code.
     */
    oobCode?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartySendVerificationCodeRequest {
    /**
     * Receipt of successful app token validation with APNS.
     */
    iosReceipt?: string;

    /**
     * Secret delivered to iOS app via APNS.
     */
    iosSecret?: string;

    /**
     * The phone number to send the verification code to in E.164 format.
     */
    phoneNumber?: string;

    /**
     * Recaptcha solution.
     */
    recaptchaToken?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartySendVerificationCodeResponse {
    /**
     * Encrypted session information
     */
    sessionInfo?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartySetAccountInfoRequest {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string;

    /**
     * Response to the captcha.
     */
    captchaResponse?: string;

    /**
     * The timestamp when the account is created.
     */
    createdAt?: string;

    /**
     * The custom attributes to be set in the user's id token.
     */
    customAttributes?: string;

    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;

    /**
     * The attributes users request to delete.
     */
    deleteAttribute?: string[];

    /**
     * The IDPs the user request to delete.
     */
    deleteProvider?: string[];

    /**
     * Whether to disable the user.
     */
    disableUser?: boolean;

    /**
     * The name of the user.
     */
    displayName?: string;

    /**
     * The email of the user.
     */
    email?: string;

    /**
     * Mark the email as verified or not.
     */
    emailVerified?: boolean;

    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string;

    /**
     * Instance id token of the app.
     */
    instanceId?: string;

    /**
     * Last login timestamp.
     */
    lastLoginAt?: string;

    /**
     * The local ID of the user.
     */
    localId?: string;

    /**
     * The out-of-band code of the change email request.
     */
    oobCode?: string;

    /**
     * The new password of the user.
     */
    password?: string;

    /**
     * Privileged caller can update user with specified phone number.
     */
    phoneNumber?: string;

    /**
     * The photo url of the user.
     */
    photoUrl?: string;

    /**
     * The associated IDPs of the user.
     */
    provider?: string[];

    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean;

    /**
     * Mark the user to upgrade to federated login.
     */
    upgradeToFederatedLogin?: boolean;

    /**
     * Timestamp in seconds for valid login token.
     */
    validSince?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartySetProjectConfigRequest {
    /**
     * Whether to allow password user sign in or sign up.
     */
    allowPasswordUser?: boolean;

    /**
     * Browser API key, needed when making http request to Apiary.
     */
    apiKey?: string;

    /**
     * Authorized domains for widget redirect.
     */
    authorizedDomains?: string[];

    /**
     * Change email template.
     */
    changeEmailTemplate?: gapi$client$identitytoolkit$EmailTemplate;

    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;

    /**
     * Whether to enable anonymous user.
     */
    enableAnonymousUser?: boolean;

    /**
     * Oauth2 provider configuration.
     */
    idpConfig?: identitytoolkit$IdpConfig[];

    /**
     * Legacy reset password email template.
     */
    legacyResetPasswordTemplate?: gapi$client$identitytoolkit$EmailTemplate;

    /**
     * Reset password email template.
     */
    resetPasswordTemplate?: gapi$client$identitytoolkit$EmailTemplate;

    /**
     * Whether to use email sending provided by Firebear.
     */
    useEmailSending?: boolean;

    /**
     * Verify email template.
     */
    verifyEmailTemplate?: gapi$client$identitytoolkit$EmailTemplate;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartySetProjectConfigResponse {
    /**
     * Project ID of the relying party.
     */
    projectId?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartySignOutUserRequest {
    /**
     * Instance id token of the app.
     */
    instanceId?: string;

    /**
     * The local ID of the user.
     */
    localId?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartySignOutUserResponse {
    /**
     * The local ID of the user.
     */
    localId?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartySignupNewUserRequest {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string;

    /**
     * Response to the captcha.
     */
    captchaResponse?: string;

    /**
     * Whether to disable the user. Only can be used by service account.
     */
    disabled?: boolean;

    /**
     * The name of the user.
     */
    displayName?: string;

    /**
     * The email of the user.
     */
    email?: string;

    /**
     * Mark the email as verified or not. Only can be used by service account.
     */
    emailVerified?: boolean;

    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string;

    /**
     * Instance id token of the app.
     */
    instanceId?: string;

    /**
     * Privileged caller can create user with specified user id.
     */
    localId?: string;

    /**
     * The new password of the user.
     */
    password?: string;

    /**
     * Privileged caller can create user with specified phone number.
     */
    phoneNumber?: string;

    /**
     * The photo url of the user.
     */
    photoUrl?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyUploadAccountRequest {
    /**
     * Whether allow overwrite existing account when user local_id exists.
     */
    allowOverwrite?: boolean;
    blockSize?: number;

    /**
     * The following 4 fields are for standard scrypt algorithm.
     */
    cpuMemCost?: number;

    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;
    dkLen?: number;

    /**
     * The password hash algorithm.
     */
    hashAlgorithm?: string;

    /**
     * Memory cost for hash calculation. Used by scrypt similar algorithms.
     */
    memoryCost?: number;
    parallelization?: number;

    /**
     * Rounds for hash calculation. Used by scrypt and similar algorithms.
     */
    rounds?: number;

    /**
     * The salt separator.
     */
    saltSeparator?: string;

    /**
     * If true, backend will do sanity check(including duplicate email and federated id) when uploading account.
     */
    sanityCheck?: boolean;

    /**
     * The key for to hash the password.
     */
    signerKey?: string;

    /**
     * Specify which project (field value is actually project id) to operate. Only used when provided credential.
     */
    targetProjectId?: string;

    /**
     * The account info to be stored.
     */
    users?: identitytoolkit$UserInfo[];
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyVerifyAssertionRequest {
    /**
     * When it's true, automatically creates a new account if the user doesn't exist. When it's false, allows existing user to sign in normally and throws
     * exception if the user doesn't exist.
     */
    autoCreate?: boolean;

    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;

    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string;

    /**
     * Instance id token of the app.
     */
    instanceId?: string;

    /**
     * The GITKit token for the non-trusted IDP pending to be confirmed by the user.
     */
    pendingIdToken?: string;

    /**
     * The post body if the request is a HTTP POST.
     */
    postBody?: string;

    /**
     * The URI to which the IDP redirects the user back. It may contain federated login result params added by the IDP.
     */
    requestUri?: string;

    /**
     * Whether return 200 and IDP credential rather than throw exception when federated id is already linked.
     */
    returnIdpCredential?: boolean;

    /**
     * Whether to return refresh tokens.
     */
    returnRefreshToken?: boolean;

    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean;

    /**
     * Session ID, which should match the one in previous createAuthUri request.
     */
    sessionId?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyVerifyCustomTokenRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;

    /**
     * Instance id token of the app.
     */
    instanceId?: string;

    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean;

    /**
     * The custom token to verify
     */
    token?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyVerifyPasswordRequest {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string;

    /**
     * Response to the captcha.
     */
    captchaResponse?: string;

    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;

    /**
     * The email of the user.
     */
    email?: string;

    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string;

    /**
     * Instance id token of the app.
     */
    instanceId?: string;

    /**
     * The password inputed by the user.
     */
    password?: string;

    /**
     * The GITKit token for the non-trusted IDP, which is to be confirmed by the user.
     */
    pendingIdToken?: string;

    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest {
    code?: string;
    idToken?: string;
    operation?: string;
    phoneNumber?: string;

    /**
     * The session info previously returned by IdentityToolkit-SendVerificationCode.
     */
    sessionInfo?: string;
    temporaryProof?: string;
    verificationProof?: string;
  }

  declare interface gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse {
    expiresIn?: string;
    idToken?: string;
    isNewUser?: boolean;
    localId?: string;
    phoneNumber?: string;
    refreshToken?: string;
    temporaryProof?: string;
    temporaryProofExpiresIn?: string;
    verificationProof?: string;
    verificationProofExpiresIn?: string;
  }

  declare interface gapi$client$identitytoolkit$IdpConfig {
    /**
     * OAuth2 client ID.
     */
    clientId?: string;

    /**
     * Whether this IDP is enabled.
     */
    enabled?: boolean;

    /**
     * Percent of users who will be prompted/redirected federated login for this IDP.
     */
    experimentPercent?: number;

    /**
     * OAuth2 provider.
     */
    provider?: string;

    /**
     * OAuth2 client secret.
     */
    secret?: string;

    /**
     * Whitelisted client IDs for audience check.
     */
    whitelistedAudiences?: string[];
  }

  declare interface gapi$client$identitytoolkit$Relyingparty {
    /**
     * whether or not to install the android app on the device where the link is opened
     */
    androidInstallApp?: boolean;

    /**
     * minimum version of the app. if the version on the device is lower than this version then the user is taken to the play store to upgrade the app
     */
    androidMinimumVersion?: string;

    /**
     * android package name of the android app to handle the action code
     */
    androidPackageName?: string;

    /**
     * whether or not the app can handle the oob code without first going to web
     */
    canHandleCodeInApp?: boolean;

    /**
     * The recaptcha response from the user.
     */
    captchaResp?: string;

    /**
     * The recaptcha challenge presented to the user.
     */
    challenge?: string;

    /**
     * The url to continue to the Gitkit app
     */
    continueUrl?: string;

    /**
     * The email of the user.
     */
    email?: string;

    /**
     * iOS app store id to download the app if it's not already installed
     */
    iOSAppStoreId?: string;

    /**
     * the iOS bundle id of iOS app to handle the action code
     */
    iOSBundleId?: string;

    /**
     * The user's Gitkit login token for email change.
     */
    idToken?: string;

    /**
     * The fixed string "identitytoolkit#relyingparty".
     */
    kind?: string;

    /**
     * The new email if the code is for email change.
     */
    newEmail?: string;

    /**
     * The request type.
     */
    requestType?: string;

    /**
     * The IP address of the user.
     */
    userIp?: string;
  }

  declare interface gapi$client$identitytoolkit$ResetPasswordResponse {
    /**
     * The user's email. If the out-of-band code is for email recovery, the user's original email.
     */
    email?: string;

    /**
     * The fixed string "identitytoolkit#ResetPasswordResponse".
     */
    kind?: string;

    /**
     * If the out-of-band code is for email recovery, the user's new email.
     */
    newEmail?: string;

    /**
     * The request type.
     */
    requestType?: string;
  }

  declare interface gapi$client$identitytoolkit$SetAccountInfoResponse {
    /**
     * The name of the user.
     */
    displayName?: string;

    /**
     * The email of the user.
     */
    email?: string;

    /**
     * If email has been verified.
     */
    emailVerified?: boolean;

    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string;

    /**
     * The Gitkit id token to login the newly sign up user.
     */
    idToken?: string;

    /**
     * The fixed string "identitytoolkit#SetAccountInfoResponse".
     */
    kind?: string;

    /**
     * The local ID of the user.
     */
    localId?: string;

    /**
     * The new email the user attempts to change to.
     */
    newEmail?: string;

    /**
     * The user's hashed password.
     */
    passwordHash?: string;

    /**
     * The photo url of the user.
     */
    photoUrl?: string;

    /**
     * The user's profiles at the associated IdPs.
     */
    providerUserInfo?: Array<{
      /**
       * The user's display name at the IDP.
       */
      displayName?: string,

      /**
       * User's identifier at IDP.
       */
      federatedId?: string,

      /**
       * The user's photo url at the IDP.
       */
      photoUrl?: string,

      /**
       * The IdP ID. For whitelisted IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP
       * identifier.
       */
      providerId?: string
    }>;

    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string;
  }

  declare interface gapi$client$identitytoolkit$SignupNewUserResponse {
    /**
     * The name of the user.
     */
    displayName?: string;

    /**
     * The email of the user.
     */
    email?: string;

    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string;

    /**
     * The Gitkit id token to login the newly sign up user.
     */
    idToken?: string;

    /**
     * The fixed string "identitytoolkit#SignupNewUserResponse".
     */
    kind?: string;

    /**
     * The RP local ID of the user.
     */
    localId?: string;

    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string;
  }

  declare interface gapi$client$identitytoolkit$UploadAccountResponse {
    /**
     * The error encountered while processing the account info.
     */
    error?: Array<{
      /**
       * The index of the malformed account, starting from 0.
       */
      index?: number,

      /**
       * Detailed error message for the account info.
       */
      message?: string
    }>;

    /**
     * The fixed string "identitytoolkit#UploadAccountResponse".
     */
    kind?: string;
  }

  declare interface gapi$client$identitytoolkit$UserInfo {
    /**
     * User creation timestamp.
     */
    createdAt?: string;

    /**
     * The custom attributes to be set in the user's id token.
     */
    customAttributes?: string;

    /**
     * Whether the user is authenticated by the developer.
     */
    customAuth?: boolean;

    /**
     * Whether the user is disabled.
     */
    disabled?: boolean;

    /**
     * The name of the user.
     */
    displayName?: string;

    /**
     * The email of the user.
     */
    email?: string;

    /**
     * Whether the email has been verified.
     */
    emailVerified?: boolean;

    /**
     * last login timestamp.
     */
    lastLoginAt?: string;

    /**
     * The local ID of the user.
     */
    localId?: string;

    /**
     * The user's hashed password.
     */
    passwordHash?: string;

    /**
     * The timestamp when the password was last updated.
     */
    passwordUpdatedAt?: number;

    /**
     * User's phone number.
     */
    phoneNumber?: string;

    /**
     * The URL of the user profile photo.
     */
    photoUrl?: string;

    /**
     * The IDP of the user.
     */
    providerUserInfo?: Array<{
      /**
       * The user's display name at the IDP.
       */
      displayName?: string,

      /**
       * User's email at IDP.
       */
      email?: string,

      /**
       * User's identifier at IDP.
       */
      federatedId?: string,

      /**
       * User's phone number.
       */
      phoneNumber?: string,

      /**
       * The user's photo url at the IDP.
       */
      photoUrl?: string,

      /**
       * The IdP ID. For white listed IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP
       * identifier.
       */
      providerId?: string,

      /**
       * User's raw identifier directly returned from IDP.
       */
      rawId?: string,

      /**
       * User's screen name at Twitter or login name at Github.
       */
      screenName?: string
    }>;

    /**
     * The user's plain text password.
     */
    rawPassword?: string;

    /**
     * The user's password salt.
     */
    salt?: string;

    /**
     * User's screen name at Twitter or login name at Github.
     */
    screenName?: string;

    /**
     * Timestamp in seconds for valid login token.
     */
    validSince?: string;

    /**
     * Version of the user's password.
     */
    version?: number;
  }

  declare interface gapi$client$identitytoolkit$VerifyAssertionResponse {
    /**
     * The action code.
     */
    action?: string;

    /**
     * URL for OTA app installation.
     */
    appInstallationUrl?: string;

    /**
     * The custom scheme used by mobile app.
     */
    appScheme?: string;

    /**
     * The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
     */
    context?: string;

    /**
     * The birth date of the IdP account.
     */
    dateOfBirth?: string;

    /**
     * The display name of the user.
     */
    displayName?: string;

    /**
     * The email returned by the IdP. NOTE: The federated login user may not own the email.
     */
    email?: string;

    /**
     * It's true if the email is recycled.
     */
    emailRecycled?: boolean;

    /**
     * The value is true if the IDP is also the email provider. It means the user owns the email.
     */
    emailVerified?: boolean;

    /**
     * Client error code.
     */
    errorMessage?: string;

    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string;

    /**
     * The unique ID identifies the IdP account.
     */
    federatedId?: string;

    /**
     * The first name of the user.
     */
    firstName?: string;

    /**
     * The full name of the user.
     */
    fullName?: string;

    /**
     * The ID token.
     */
    idToken?: string;

    /**
     * It's the identifier param in the createAuthUri request if the identifier is an email. It can be used to check whether the user input email is different
     * from the asserted email.
     */
    inputEmail?: string;

    /**
     * True if it's a new user sign-in, false if it's a returning user.
     */
    isNewUser?: boolean;

    /**
     * The fixed string "identitytoolkit#VerifyAssertionResponse".
     */
    kind?: string;

    /**
     * The language preference of the user.
     */
    language?: string;

    /**
     * The last name of the user.
     */
    lastName?: string;

    /**
     * The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
     */
    localId?: string;

    /**
     * Whether the assertion is from a non-trusted IDP and need account linking confirmation.
     */
    needConfirmation?: boolean;

    /**
     * Whether need client to supply email to complete the federated login flow.
     */
    needEmail?: boolean;

    /**
     * The nick name of the user.
     */
    nickName?: string;

    /**
     * The OAuth2 access token.
     */
    oauthAccessToken?: string;

    /**
     * The OAuth2 authorization code.
     */
    oauthAuthorizationCode?: string;

    /**
     * The lifetime in seconds of the OAuth2 access token.
     */
    oauthExpireIn?: number;

    /**
     * The OIDC id token.
     */
    oauthIdToken?: string;

    /**
     * The user approved request token for the OpenID OAuth extension.
     */
    oauthRequestToken?: string;

    /**
     * The scope for the OpenID OAuth extension.
     */
    oauthScope?: string;

    /**
     * The OAuth1 access token secret.
     */
    oauthTokenSecret?: string;

    /**
     * The original email stored in the mapping storage. It's returned when the federated ID is associated to a different email.
     */
    originalEmail?: string;

    /**
     * The URI of the public accessible profiel picture.
     */
    photoUrl?: string;

    /**
     * The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. If the "providerId" param is set to OpenID
     * OP identifer other than the whilte listed IdPs the OP identifier is returned. If the "identifier" param is federated ID in the createAuthUri request.
     * The domain part of the federated ID is returned.
     */
    providerId?: string;

    /**
     * Raw IDP-returned user info.
     */
    rawUserInfo?: string;

    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string;

    /**
     * The screen_name of a Twitter user or the login name at Github.
     */
    screenName?: string;

    /**
     * The timezone of the user.
     */
    timeZone?: string;

    /**
     * When action is 'map', contains the idps which can be used for confirmation.
     */
    verifiedProvider?: string[];
  }

  declare interface gapi$client$identitytoolkit$VerifyCustomTokenResponse {
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string;

    /**
     * The GITKit token for authenticated user.
     */
    idToken?: string;

    /**
     * True if it's a new user sign-in, false if it's a returning user.
     */
    isNewUser?: boolean;

    /**
     * The fixed string "identitytoolkit#VerifyCustomTokenResponse".
     */
    kind?: string;

    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string;
  }

  declare interface gapi$client$identitytoolkit$VerifyPasswordResponse {
    /**
     * The name of the user.
     */
    displayName?: string;

    /**
     * The email returned by the IdP. NOTE: The federated login user may not own the email.
     */
    email?: string;

    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string;

    /**
     * The GITKit token for authenticated user.
     */
    idToken?: string;

    /**
     * The fixed string "identitytoolkit#VerifyPasswordResponse".
     */
    kind?: string;

    /**
     * The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
     */
    localId?: string;

    /**
     * The OAuth2 access token.
     */
    oauthAccessToken?: string;

    /**
     * The OAuth2 authorization code.
     */
    oauthAuthorizationCode?: string;

    /**
     * The lifetime in seconds of the OAuth2 access token.
     */
    oauthExpireIn?: number;

    /**
     * The URI of the user's photo at IdP
     */
    photoUrl?: string;

    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string;

    /**
     * Whether the email is registered.
     */
    registered?: boolean;
  }

  declare interface gapi$client$identitytoolkit$RelyingpartyResource {
    /**
     * Creates the URI used by the IdP to authenticate the user.
     */
    createAuthUri(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$CreateAuthUriResponse>;

    /**
     * Delete user account.
     */
    deleteAccount(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$DeleteAccountResponse>;

    /**
     * Batch download user accounts.
     */
    downloadAccount(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$DownloadAccountResponse>;

    /**
     * Reset password for a user.
     */
    emailLinkSignin(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$EmailLinkSigninResponse>;

    /**
     * Returns the account info.
     */
    getAccountInfo(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$GetAccountInfoResponse>;

    /**
     * Get a code for user action confirmation.
     */
    getOobConfirmationCode(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$GetOobConfirmationCodeResponse>;

    /**
     * Get project configuration.
     */
    getProjectConfig(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Delegated GCP project number of the request.
       */
      delegatedProjectNumber?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * GCP project number of the request.
       */
      projectNumber?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyGetProjectConfigResponse>;

    /**
     * Get token signing public key.
     */
    getPublicKeys(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<{}>;

    /**
     * Get recaptcha secure param.
     */
    getRecaptchaParam(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$GetRecaptchaParamResponse>;

    /**
     * Reset password for a user.
     */
    resetPassword(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$ResetPasswordResponse>;

    /**
     * Send SMS verification code.
     */
    sendVerificationCode(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$IdentitytoolkitRelyingpartySendVerificationCodeResponse>;

    /**
     * Set account info for a user.
     */
    setAccountInfo(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$SetAccountInfoResponse>;

    /**
     * Set project configuration.
     */
    setProjectConfig(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$IdentitytoolkitRelyingpartySetProjectConfigResponse>;

    /**
     * Sign out user.
     */
    signOutUser(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$IdentitytoolkitRelyingpartySignOutUserResponse>;

    /**
     * Signup new user.
     */
    signupNewUser(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$SignupNewUserResponse>;

    /**
     * Batch upload existing user accounts.
     */
    uploadAccount(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$UploadAccountResponse>;

    /**
     * Verifies the assertion returned by the IdP.
     */
    verifyAssertion(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$VerifyAssertionResponse>;

    /**
     * Verifies the developer asserted ID token.
     */
    verifyCustomToken(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$VerifyCustomTokenResponse>;

    /**
     * Verifies the user entered password.
     */
    verifyPassword(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$VerifyPasswordResponse>;

    /**
     * Verifies ownership of a phone number and creates/updates the user account accordingly.
     */
    verifyPhoneNumber(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$identitytoolkit$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>;
  }
}
