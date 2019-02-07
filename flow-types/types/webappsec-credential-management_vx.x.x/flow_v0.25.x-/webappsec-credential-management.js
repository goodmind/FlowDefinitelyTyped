declare module "webappsec-credential-management" {
  declare function fetch(
    input: Request | string,
    init?: RequestInit | CMRequestInit
  ): Promise<Response>;

  declare interface GlobalFetch {
    fetch(url: Request | string, init?: CMRequestInit): Promise<Response>;
  }
  declare interface WindowOrWorkerGlobalScope {
    fetch(url: Request | string, init?: CMRequestInit): Promise<Response>;
  }

  /**
   * Variant of TS 2.2 {@link RequestInit} that permits a
   * {@link PasswordCredential} to be used in the {@code credentials} property.
   * All other properties are identical to {@link RequestInit}.
   */
  declare interface CMRequestInit {
    method?: string;
    headers?: any;
    body?: any;
    referrer?: string;
    referrerPolicy?: string;
    mode?: string;
    credentials?: PasswordCredential | string;
    cache?: string;
    redirect?: string;
    integrity?: string;
    keepalive?: boolean;
    window?: any;
  }

  /**
   * Declaration merge for 'navigator' which adds the credential management
   * interface.
   */
  declare interface Navigator {
    credentials?: CredentialsContainer;
  }

  /**
   * @see {@link https://www.w3.org/TR/credential-management-1/#credentialscontainer}
   */
  declare interface CredentialsContainer {
    /**
 * Request a credential from the credential manager.
 * @param options Contains an object filled with type-specific sets of parameters
which will be used to select a particular {@link Credential} to
return.
 * @see {@link https://www.w3.org/TR/credential-management-1/#dom-credentialscontainer-get}
 */
    get(options?: CredentialRequestOptions): Promise<Credential | null>;

    /**
     * Ask the credential manager to store a {@link Credential} for the user.
     * Authors could call this method after a user successfully signs in, or
     * after a successful password change operation.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-credentialscontainer-store}
     */
    store(credential: Credential): Promise<Credential>;

    /**
     * Create a {@link Credential} asynchronously.
     * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dom-credentialscontainer-create}
     */
    create(options: CredentialCreationOptions): Promise<Credential | null>;

    /**
     * Ask the credential manager to require user mediation before returning
     * credentials for the origin in which the method is called. This might be
     * called after a user signs out of a website, for instance, in order to
     * ensure that they are not automatically signed back in next time they
     * visits.
     * @deprecated Use {@link preventSilentAccess} instead.
     * @see {@link https://www.w3.org/TR/2016/WD-credential-management-1-20160425/#dom-credentialscontainer-requireusermediation}
     */
    requireUserMediation(): Promise<void>;

    /**
     * Ask the credential manager to require user mediation before returning
     * credentials for the origin in which the method is called. This might be
     * called after a user signs out of a website, for instance, in order to
     * ensure that they are not automatically signed back in next time they
     * visits.
     * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dom-credentialscontainer-preventsilentaccess}
     */
    preventSilentAccess(): Promise<void>;
  }

  /**
   * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-credentialdata}
   */
  declare interface CredentialData {
    /**
     * The credential’s identifier. This might be a GUID, username, or email
     * address, for instance.
     */
    id: string;
  }
  declare type Credential =
    | PasswordCredential
    | FederatedCredential
    | PublicKeyCredential;

  /**
   * A generic and extensible Credential interface from which all credentials
   * will inherit.
   * @see {@link https://www.w3.org/TR/credential-management-1/#credential}
   */
  declare class CredentialBase {
    /**
     * The credential’s identifier. This might be a GUID, username, or email
     * address, for instance.
     */
    id: string;

    /**
     * The credential’s type.
     */
    type: string;
  }

  /**
   * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-siteboundcredentialdata}
   */
  declare type SiteBoundCredentialData = {
    /**
     * A name associated with the credential, intended as a human-understandable
     * public name.
     */
    name?: string,

    /**
     * A URL pointing to an image for the credential. This URL MUST be an
     * {@link
     * https://w3c.github.io/webappsec-mixed-content/#a-priori-authenticated-url|
     * a priori authenticated URL}.
     */
    iconURL?: string
  } & CredentialData;

  /**
   * Defines the specific attributes shared by any Credential persisted in user
   * agent’s credential
   * store.
   */
  declare class SiteBoundCredential mixins CredentialBase {
    /**
     * A name associated with the credential, intended as a human-understandable
     * public name.
     */
    name: string | null;

    /**
     * A URL pointing to an image for the credential. This URL MUST be an
     * {@link
     * https://w3c.github.io/webappsec-mixed-content/#a-priori-authenticated-url|
     * a priori authenticated URL}.
     */
    iconURL: string | null;
  }

  /**
   * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-passwordcredentialdata}
   */
  declare type PasswordCredentialData = {
    /**
     * The plain-text password.
     */
    password: string
  } & SiteBoundCredentialData;

  /**
   * @see {@link https://www.w3.org/TR/credential-management-1/#typedefdef-credentialbodytype}
   */
  declare type CredentialBodyType = FormData | URLSearchParams;

  /**
   * @see {@link https://www.w3.org/TR/credential-management-1/#passwordcredential}
   */
  declare class PasswordCredential mixins SiteBoundCredential {
    /**
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-passwordcredential-passwordcredential-data}
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-passwordcredential-passwordcredential}
     */
    constructor(data: PasswordCredentialData | HTMLFormElement): this;
    type: "password";

    /**
     * Represents the name which will be used for the ID field when submitting
     * the PasswordCredential to a remote endpoint via {@code fetch()}. It
     * defaults to "username", but can be overridden by a developer to match
     * whatever the backend service expects.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-passwordcredential-idname}
     */
    idName: string;

    /**
     * Represents the name which will be used for the ID field when submitting
     * the PasswordCredential to a remote endpoint via fetch(). It defaults to
     * "password", but can be overridden by a developer to match whatever the
     * backend service expects.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-passwordcredential-passwordname}
     */
    passwordName: string;

    /**
     * If the developer wishes to specify additional data to insert into the
     * request body when submitting the credential information to a remote
     * endpoint, they can do so by assigning a FormData or URLSearchParams
     * object to this attribute. The credential information will be
     * mixed into the object to produce the body. The value is {@code null}
     * unless otherwise specified.
     */
    additionalData: CredentialBodyType | null;

    /**
     * The plain-text password. Returned for implementation of the 08/04/2017
     * Working Draft of Credential Management, not returned before this.
     * @see {@link https://www.w3.org/TR/credential-management-1/#passwordcredential}
     */
    password: string;
  }

  /**
   * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-federatedcredentialdata}
   */
  declare type FederatedCredentialData = {
    provider: string,
    protocol?: string
  } & SiteBoundCredentialData;

  declare class FederatedCredential mixins SiteBoundCredential {
    constructor(data: FederatedCredentialData): this;
    type: "federated";

    /**
     * The credential’s federated identity provider. Must be a absolute,
     * hierarchical, https URI with no path (e.g. https://www.facebook.com).
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-federatedcredential-provider}
     */
    provider: string;

    /**
     * The credential’s federated identity provider’s protocol (e.g.
     * "openidconnect"). If this value is null, then the protocol can be
     * inferred from the provider.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-federatedcredential-protocol}
     */
    protocol: string | null;
  }

  /**
   * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#enumdef-credentialmediationrequirement}
   */
  declare type CredentialMediationRequirement =
    | "silent"
    | "optional"
    | "required";

  /**
   * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-credentialrequestoptions}
   */
  declare interface CredentialRequestOptions {
    /**
     * If set, the user agent will request {@link PasswordCredential} objects.
     * Defaults to {@code false}.
     */
    password?: boolean;

    /**
     * If set, the user agent will request {@link FederatedCredential} objects
     * for the providers and protocol types listed. Defaults to {@code null}.
     */
    federated?: FederatedCredentialRequestOptions;

    /**
     * If {@code true}, the user agent will only attempt to provide a Credential
     * without user interaction. Defaults to {@code false}.
     * @deprecated Use {@link mediation} instead.
     */
    unmediated?: boolean;

    /**
     * This property specifies the mediation requirements for a given credential
     * request.
     */
    mediation?: CredentialMediationRequirement;

    /**
     * This property specifies options for requesting a public-key signature.
     */
    publicKey?: PublicKeyCredentialRequestOptions;

    /**
     * This property lets the developer abort an ongoing get() operation.
     */
    signal?: AbortSignal;
  }

  /**
   * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#typedefdef-passwordcredentialinit}
   */
  declare type PasswordCredentialInit =
    | PasswordCredentialData
    | HTMLFormElement;

  /**
   * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dictdef-federatedcredentialinit}
   */
  declare type FederatedCredentialInit = FederatedCredentialData;

  /**
   * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dictdef-credentialcreationoptions}
   */
  declare interface CredentialCreationOptions {
    /**
     * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dictdef-federatedcredentialinit}
     */
    password?: PasswordCredentialInit;

    /**
     * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dom-credentialcreationoptions-federated}
     */
    federated?: FederatedCredentialInit;

    /**
     * @see {@link https://w3c.github.io/webauthn/#dictionary-makecredentialoptions}
     */
    publicKey?: PublicKeyCredentialCreationOptions;

    /**
     * @see {@link https://w3c.github.io/webappsec-credential-management/#dom-credentialrequestoptions-signal}
     */
    signal?: AbortSignal;
  }

  /**
   * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-federatedcredentialrequestoptions}
   */
  declare interface FederatedCredentialRequestOptions {
    /**
     * An array of federation identifiers.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-federatedcredentialrequestoptions-providers}
     */
    providers?: string[];

    /**
     * An array of protocol identifiers.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-federatedcredentialrequestoptions-protocols}
     */
    protocols?: string[];
  }

  /**
   * @see {@link https://w3c.github.io/webauthn/#enumdef-publickeycredentialtype}
   */
  declare type PublicKeyCredentialType = "public-key";

  /**
   * @see {@link https://w3c.github.io/webauthn/#enumdef-userverificationrequirement}
   */
  declare type UserVerificationRequirement =
    | "required"
    | "preferred"
    | "discouraged";

  /**
   * @see {@link https://w3c.github.io/webauthn/#dictdef-publickeycredentialrequestoptions}
   */
  declare interface PublicKeyCredentialRequestOptions {
    challenge: BufferSource;
    timeout?: number;
    rpId?: string;
    allowCredentials?: PublicKeyCredentialDescriptor[];
    userVerification?: UserVerificationRequirement;
    extensions?: any;
  }

  /**
   * @see {@link https://w3c.github.io/webauthn/#dictdef-publickeycredentialrpentity}
   */
  declare interface PublicKeyCredentialRpEntity {
    id: string;
    name: string;
  }

  /**
   * @see {@link https://w3c.github.io/webauthn/#dictdef-publickeycredentialuserentity}
   */
  declare interface PublicKeyCredentialUserEntity {
    id: BufferSource;
    name: string;
    displayName: string;
  }

  /**
   * @see {@link https://w3c.github.io/webauthn/#dictdef-publickeycredentialparameters}
   */
  declare interface PublicKeyCredentialParameters {
    type: PublicKeyCredentialType;
    alg: number;
  }

  /**
   * @see {@link https://w3c.github.io/webauthn/#transport}
   */
  declare type AuthenticatorTransport = "usb" | "nfc" | "ble" | "internal";

  /**
   * @see {@link https://w3c.github.io/webauthn/#dictdef-publickeycredentialdescriptor}
   */
  declare interface PublicKeyCredentialDescriptor {
    type: PublicKeyCredentialType;
    id: BufferSource;
    transports?: AuthenticatorTransport[];
  }

  /**
   * @see {@link https://w3c.github.io/webauthn/#attachment}
   */
  declare type AuthenticatorAttachment = "platform" | "cross-platform";

  /**
   * @see {@link https://w3c.github.io/webauthn/#dictdef-authenticatorselectioncriteria}
   */
  declare interface AuthenticatorSelectionCriteria {
    authenticatorAttachment?: AuthenticatorAttachment;
    requireResidentKey?: boolean;
    requireUserVerification?: UserVerificationRequirement;
  }

  /**
   * @see {@link https://w3c.github.io/webauthn/#attestation-convey}
   */
  declare type AttestationConveyancePreference = "none" | "indirect" | "direct";

  /**
   * @see {@link https://w3c.github.io/webauthn/#dictdef-makepublickeycredentialoptions}
   */
  declare interface PublicKeyCredentialCreationOptions {
    rp: PublicKeyCredentialRpEntity;
    user: PublicKeyCredentialUserEntity;
    challenge: BufferSource;
    pubKeyCredParams: PublicKeyCredentialParameters[];
    timeout?: number;
    excludeCredentials?: PublicKeyCredentialDescriptor[];
    authenticatorSelection?: AuthenticatorSelectionCriteria;
    attestation?: AttestationConveyancePreference;
    extensions?: any;
  }

  /**
   * @see {@link https://w3c.github.io/webauthn/#authenticatorresponse}
   */
  declare interface AuthenticatorResponse {
    +clientDataJSON: ArrayBuffer;
  }

  /**
   * @see {@link https://w3c.github.io/webauthn/#authenticatorattestationresponse}
   */
  declare type AuthenticatorAttestationResponse = {
    +attestationObject: ArrayBuffer
  } & AuthenticatorResponse;

  /**
   * @see {@link https://w3c.github.io/webauthn/#iface-authenticatorassertionresponse}
   */
  declare type AuthenticatorAssertionResponse = {
    +authenticatorData: ArrayBuffer,
    +signature: ArrayBuffer,
    +userHandle: ArrayBuffer
  } & AuthenticatorResponse;

  /**
   * @see {@link https://w3c.github.io/webauthn/#publickeycredential}
   */
  declare type PublicKeyCredential = {
    +type: PublicKeyCredentialType,
    +rawId: ArrayBuffer,
    +response: AuthenticatorAttestationResponse | AuthenticatorAssertionResponse
  } & CredentialData;
}
