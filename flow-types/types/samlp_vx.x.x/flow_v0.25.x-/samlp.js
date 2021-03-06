declare module "samlp" {
  import typeof * as express from "express";

  import typeof * as passport from "passport";

  declare export function auth(options: IdPOptions): express.Handler;

  declare export function logout(options: IdPOptions): express.Handler;

  declare export function parseRequest(
    req: express.Request,
    callback: (err: any, data: SamlRequest) => void
  ): void;

  declare export function getSamlResponse(
    options: IdPOptions,
    user: any,
    callback: (err: any, samlResponse: string) => void
  ): void;

  declare export function sendError(options: IdPOptions): express.Handler;

  declare export function metadata(
    options: IdPMetadataOptions
  ): express.Handler;

  declare export type DigestAlgorithmType = "sha1" | "sha256";
  declare export type SignatureAlgorithmType = "rsa-sha1" | "rsa-sha256";
  declare export interface IdPOptions {
    issuer: string;
    cert: string | Buffer;
    key: string | Buffer;
    audience?: string;
    recipient?: string;
    destination?: string;
    RelayState?: string;
    digestAlgorithm?: DigestAlgorithmType;
    signatureAlgorithm?: SignatureAlgorithmType;
    signResponse?: boolean;
    encryptionCert?: string | Buffer;
    encryptionPublicKey?: string | Buffer;
    encryptionAlgorithm?: string;
    keyEncryptionAlgorighm?: string;
    lifetimeInSeconds?: number;
    authnContextClassRef?: string;
    inResponseTo?: string;
    profileMapper?: ProfileMapperConstructor;
    getUserFromRequest?: (req: express.Request) => any;
    getPostURL: (
      audience: string,
      authnRequestDom: any,
      req: express.Request,
      callback: (err: any, url: string) => void
    ) => void;
  }
  declare export interface IdPMetadataOptions {
    issuer: string;
    cert: string | Buffer;
    profileMapper?: ProfileMapperConstructor;
    redirectEndpointPath?: string;
    postEndpointPath?: string;
    logoutEndpointPaths?: {
      redirect?: string,
      post?: string
    };
  }
  declare export interface SamlRequest {
    id?: string;
    issuer?: string;
    assertionConsumerServiceURL?: string;
    destination?: string;
    forceAuthn?: string;
  }
  declare export interface ProfileMapper {
    metadata: MetadataItem[];
    getClaims(): any;
    getNameIdentifier(): any;
  }
  declare export interface ProfileMapperConstructor {
    (pu: passport.Profile): ProfileMapper;
    prototype: ProfileMapper;
  }
  declare export var PassportProfileMapper: ProfileMapperConstructor;
  declare export interface MetadataItem {
    id: string;
    optional: boolean;
    displayName: string;
    description: string;
  }
}
