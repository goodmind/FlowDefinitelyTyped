declare module "pkijs/src/_x509" {
  declare export * from "pkijs/src/AccessDescription"

  declare export * from "pkijs/src/AlgorithmIdentifier"

  declare export * from "pkijs/src/AltName"

  declare export * from "pkijs/src/Attribute"

  declare export * from "pkijs/src/AttributeTypeAndValue"

  declare export * from "pkijs/src/AuthorityKeyIdentifier"

  declare export * from "pkijs/src/BasicConstraints"

  declare export * from "pkijs/src/Certificate"

  declare export * from "pkijs/src/CertificateChainValidationEngine"

  declare export * from "pkijs/src/CertificatePolicies"

  declare export * from "pkijs/src/CertificateRevocationList"

  declare export * from "pkijs/src/CertificationRequest"

  declare export * from "pkijs/src/CRLDistributionPoints"

  declare export * from "pkijs/src/DistributionPoint"

  declare export * from "pkijs/src/Extension"

  declare export * from "pkijs/src/Extensions"

  declare export * from "pkijs/src/ExtKeyUsage"

  declare export * from "pkijs/src/GeneralName"

  declare export * from "pkijs/src/GeneralNames"

  declare export * from "pkijs/src/GeneralSubtree"

  declare export * from "pkijs/src/InfoAccess"

  declare export * from "pkijs/src/IssuingDistributionPoint"

  declare export * from "pkijs/src/NameConstraints"

  declare export * from "pkijs/src/OtherPrimeInfo"

  declare export * from "pkijs/src/PolicyConstraints"

  declare export * from "pkijs/src/PolicyInformation"

  declare export * from "pkijs/src/PolicyMapping"

  declare export * from "pkijs/src/PolicyMappings"

  declare export * from "pkijs/src/PolicyQualifierInfo"

  declare export * from "pkijs/src/PrivateKeyInfo"

  declare export * from "pkijs/src/PrivateKeyUsagePeriod"

  declare export * from "pkijs/src/PublicKeyInfo"

  declare export * from "pkijs/src/RelativeDistinguishedNames"

  declare export * from "pkijs/src/RevokedCertificate"

  declare export * from "pkijs/src/RSAPrivateKey"

  declare export * from "pkijs/src/RSAPublicKey"

  declare export * from "pkijs/src/RSASSAPSSParams"

  declare export * from "pkijs/src/SubjectDirectoryAttributes"

  declare export * from "pkijs/src/Time"
}
declare module "pkijs/src/_ocsp_tsp" {
  declare export * from "pkijs/src/CertID"

  declare export * from "pkijs/src/Request"

  declare export * from "pkijs/src/TBSRequest"

  declare export * from "pkijs/src/Signature"

  declare export * from "pkijs/src/OCSPRequest"

  declare export * from "pkijs/src/ResponseBytes"

  declare export * from "pkijs/src/OCSPResponse"

  declare export * from "pkijs/src/SingleResponse"

  declare export * from "pkijs/src/ResponseData"

  declare export * from "pkijs/src/BasicOCSPResponse"

  declare export * from "pkijs/src/MessageImprint"

  declare export * from "pkijs/src/TimeStampReq"

  declare export * from "pkijs/src/Accuracy"

  declare export * from "pkijs/src/TSTInfo"

  declare export * from "pkijs/src/PKIStatusInfo"

  declare export * from "pkijs/src/TimeStampResp"
}
declare module "pkijs/src/_cms" {
  declare export * from "pkijs/src/ContentInfo"

  declare export * from "pkijs/src/OtherCertificateFormat"

  declare export * from "pkijs/src/OtherRevocationInfoFormat"

  declare export * from "pkijs/src/CertificateSet"

  declare export * from "pkijs/src/RevocationInfoChoices"

  declare export * from "pkijs/src/IssuerAndSerialNumber"

  declare export * from "pkijs/src/Attribute"

  declare export * from "pkijs/src/RSAESOAEPParams"

  declare export * from "pkijs/src/PBKDF2Params"

  declare export * from "pkijs/src/PBES2Params"

  declare export * from "pkijs/src/SignedAndUnsignedAttributes"

  declare export * from "pkijs/src/SignerInfo"

  declare export * from "pkijs/src/EncapsulatedContentInfo"

  declare export * from "pkijs/src/SignedData"

  declare export * from "pkijs/src/ECCCMSSharedInfo"

  declare export * from "pkijs/src/RecipientIdentifier"

  declare export * from "pkijs/src/KeyTransRecipientInfo"

  declare export * from "pkijs/src/OriginatorPublicKey"

  declare export * from "pkijs/src/OriginatorIdentifierOrKey"

  declare export * from "pkijs/src/OtherKeyAttribute"

  declare export * from "pkijs/src/RecipientKeyIdentifier"

  declare export * from "pkijs/src/KeyAgreeRecipientIdentifier"

  declare export * from "pkijs/src/RecipientEncryptedKey"

  declare export * from "pkijs/src/RecipientEncryptedKeys"

  declare export * from "pkijs/src/KeyAgreeRecipientInfo"

  declare export * from "pkijs/src/KEKIdentifier"

  declare export * from "pkijs/src/KEKRecipientInfo"

  declare export * from "pkijs/src/PasswordRecipientinfo"

  declare export * from "pkijs/src/OtherRecipientInfo"

  declare export * from "pkijs/src/RecipientInfo"

  declare export * from "pkijs/src/OriginatorInfo"

  declare export * from "pkijs/src/EncryptedContentInfo"

  declare export * from "pkijs/src/EnvelopedData"

  declare export * from "pkijs/src/EncryptedData"
}
declare module "pkijs/src/common" {
  import type { Sequence } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  declare interface Engine {
    name: string;
    crypto: Crypto;
    subtle: SubtleCrypto;
  }
  declare function setEngine(
    name: string,
    crypto: Crypto,
    subtle: SubtleCrypto
  ): void;

  declare function getEngine(): Engine;

  /**
   * Get crypto subtle from current "crypto engine" or "undefined"
   * @returns {(SubtleCrypto | void)}
   */
  declare function getCrypto(): SubtleCrypto | void;

  /**
   * Initialize input Uint8Array by random values (with help from current "crypto engine")
   * @param {ArrayBufferView} view
   * @returns {ArrayBufferView}
   */
  declare function getRandomValues(view: ArrayBufferView): ArrayBufferView;

  /**
   * Get OID for each specific WebCrypto algorithm
   * @param {Algorithm} algorithm
   * @returns {string}
   */
  declare function getOIDByAlgorithm(algorithm: Algorithm): string;

  /**
 * Get default algorithm parameters for each kind of operation
 * @param {string} algorithmName Algorithm name to get common parameters for
 * @param {string} operation Kind of operation: "sign", "encrypt", "generatekey", "importkey", "exportkey", "verify"
 * @returns {{
algorithm: Algorithm,
usages: string[]
}}
 */
  declare function getAlgorithmParameters(
    algorithmName: string,
    operation: string
  ): {
    algorithm: Algorithm,
    usages: string[]
  };

  /**
   * Create CMS ECDSA signature from WebCrypto ECDSA signature
   * @param {ArrayBuffer} signatureBuffer WebCrypto result of "sign" function
   * @returns {ArrayBuffer}
   */
  declare function createCMSECDSASignature(
    signatureBuffer: ArrayBuffer
  ): ArrayBuffer;

  /**
   * String preparation function. In a future here will be realization of algorithm from RFC4518
   * @param {string} inputString JavaScript string. As soon as for each ASN.1 string type we have a specific transformation function here we will work with pure JavaScript string
   * @returns {string} Formated string
   */
  declare function stringPrep(inputString: string): string;

  /**
   * Create a single ArrayBuffer from CMS ECDSA signature
   * @param {Sequence} cmsSignature ASN.1 SEQUENCE contains CMS ECDSA signature
   * @returns {ArrayBuffer}
   */
  declare function createECDSASignatureFromCMS(
    cmsSignature: Sequence
  ): ArrayBuffer;

  /**
   * Get WebCrypto algorithm by wel-known OID
   * @param {string} oid Wel-known OID to search for
   * @returns {Algorithm}
   */
  declare function getAlgorithmByOID(oid: string): Algorithm;

  /**
   * Getting hash algorithm by signature algorithm
   * @param {AlgorithmIdentifier} signatureAlgorithm Signature algorithm
   * @returns {string}
   */
  declare function getHashAlgorithm(
    signatureAlgorithm: AlgorithmIdentifier
  ): string;

  /**
   * ANS X9.63 Key Derivation Function having a "Counter" as a parameter
   * @param {string} hashFunction Used hash function
   * @param {ArrayBuffer} Zbuffer ArrayBuffer containing ECDH shared secret to derive from
   * @param {number} Counter
   * @param {ArrayBuffer} SharedInfo Usually DER encoded "ECC_CMS_SharedInfo" structure
   */
  declare function kdfWithCounter(
    hashFunction: string,
    Zbuffer: ArrayBuffer,
    Counter: number,
    SharedInfo: ArrayBuffer
  ): PromiseLike<{
    counter: number,
    result: ArrayBuffer
  }>;

  /**
   * ANS X9.63 Key Derivation Function
   * @param {string} hashFunction Used hash function
   * @param {ArrayBuffer} Zbuffer ArrayBuffer containing ECDH shared secret to derive from
   * @param {number} keydatalen Length (!!! in BITS !!!) of used kew derivation function
   * @param {ArrayBuffer} SharedInfo Usually DER encoded "ECC_CMS_SharedInfo" structure
   */
  declare function kdf(
    hashFunction: string,
    Zbuffer: ArrayBuffer,
    keydatalen: number,
    SharedInfo: ArrayBuffer
  ): PromiseLike<ArrayBuffer>;
}
declare module "pkijs/src/TSTInfo" {
  import type { Integer } from "asn1js";

  import typeof MessageImprint from "pkijs/src/MessageImprint";

  import typeof Accuracy from "pkijs/src/Accuracy";

  import typeof GeneralName from "pkijs/src/GeneralName";

  import typeof Extension from "pkijs/src/Extension";

  declare interface VerifyParams {
    data: BufferSource;
    notBefore?: Date;
    notAfter?: Date;
  }
  declare export default class TSTInfo {
    version: number;
    policy: string;
    messageImprint: MessageImprint;
    serialNumber: Integer;
    genTime: Date;
    accuracy: Accuracy;
    ordering: boolean;
    nonce: Integer;
    tsa: GeneralName;
    extensions: Extension[];

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    verify(params: VerifyParams): PromiseLike<boolean>;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/TimeStampResp" {
  import typeof ContentInfo from "pkijs/src/ContentInfo";

  import typeof PKIStatusInfo from "pkijs/src/PKIStatusInfo";

  import type { VerifyResult, VerifyParams } from "pkijs/src/SignedData";

  declare export default class TimeStampResp {
    status: PKIStatusInfo;
    timeStampToken: ContentInfo;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;

    /**
     * Sign current TSP Response
     * @param {CryptoKey} privateKey Private key for "subjectPublicKeyInfo" structure
     * @param {string} hashAlgorithm Hashing algorithm. Default SHA-1
     * @returns {Promise}
     */
    sign(
      privateKey: CryptoKey,
      hashAlgorithm?: string
    ): PromiseLike<ArrayBuffer>;

    /**
     * Verify current TSP Response
     * @param {VerifyParams} verificationParameters Input parameters for verification
     * @returns {Promise}
     */
    verify(verificationParameters: VerifyParams): PromiseLike<VerifyResult>;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/TimeStampReq" {
  import type { Integer } from "asn1js";

  import typeof MessageImprint from "pkijs/src/MessageImprint";

  import typeof Extension from "pkijs/src/Extension";

  declare export default class TimeStampReq {
    version: number;
    messageImprint: MessageImprint;
    reqPolicy: string;
    nonce: Integer;
    certReq: boolean;
    extensions: Extension[];

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/Time" {
  declare export default class Time {
    type: number;
    value: Date;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/TBSRequest" {
  import typeof GeneralName from "pkijs/src/GeneralName";

  import typeof Request from "pkijs/src/Request";

  import typeof Extension from "pkijs/src/Extension";

  declare export default class TBSRequest {
    tbs: ArrayBuffer;
    version: number;
    requestorName: GeneralName;
    requestList: Request[];
    requestExtensions: Extension;

    /**
     * Convert current object to asn1js object and set correct values
     * @param {boolean} encodeFlag
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
     */
    toSchema(encodeFlag?: boolean): any;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toJSON(): any;
  }
}
declare module "pkijs/src/SubjectDirectoryAttributes" {
  import typeof Attribute from "pkijs/src/Attribute";

  declare export default class SubjectDirectoryAttributes {
    attributes: Attribute[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/SingleResponse" {
  import typeof CertID from "pkijs/src/CertID";

  import typeof Extension from "pkijs/src/Extension";

  declare export default class SingleResponse {
    certID: CertID;
    certStatus: any;
    thisUpdate: Date;
    nextUpdate: Date;
    singleExtensions: Extension[];

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/SignerInfo" {
  import type { OctetString } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof SignedAndUnsignedAttributes from "pkijs/src/SignedAndUnsignedAttributes";

  declare export default class SignerInfo {
    version: number;
    sid: any;
    digestAlgorithm: AlgorithmIdentifier;
    signedAttrs: SignedAndUnsignedAttributes;
    unsignedAttrs: SignedAndUnsignedAttributes;
    signatureAlgorithm: AlgorithmIdentifier;
    signature: OctetString;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/SignedData" {
  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof EncapsulatedContentInfo from "pkijs/src/EncapsulatedContentInfo";

  import typeof Certificate from "pkijs/src/Certificate";

  import typeof OtherCertificateFormat from "pkijs/src/OtherCertificateFormat";

  import typeof CertificateRevocationList from "pkijs/src/CertificateRevocationList";

  import typeof OtherRevocationInfoFormat from "pkijs/src/OtherRevocationInfoFormat";

  import typeof SignerInfo from "pkijs/src/SignerInfo";

  declare interface VerifyParams {
    signer?: number;
    data?: ArrayBuffer;
    trustedCerts?: Certificate[];
    checkDate?: Date;
    checkChain?: boolean;
    includeSignerCertificate?: boolean;
    extendedMode?: boolean;
  }
  declare interface VerifyResult {
    date: Date;
    code: number;
    message: string;
    signatureVerified?: boolean;
    signerCertificate?: Certificate;
    signerCertificateVerified?: boolean;
  }
  declare export default class SignedData {
    version: number;
    digestAlgorithms: AlgorithmIdentifier[];
    encapContentInfo: EncapsulatedContentInfo;
    certificates: Certificate[] | OtherCertificateFormat[];
    crls: CertificateRevocationList[] | OtherRevocationInfoFormat[];
    signerInfos: SignerInfo[];

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;

    /**
     * Convert current object to asn1js object and set correct values
     * @param {boolean} encodeFlag
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
     */
    toSchema(encodeFlag?: boolean): any;
    verify(options: VerifyParams): PromiseLike<VerifyResult>;

    /**
     * Signing current SignedData
     * @param {CryptoKey} privateKey Private key for "subjectPublicKeyInfo" structure
     * @param {number} signerIndex Index number (starting from 0) of signer index to make signature for
     * @param {string} hashAlgorithm Hashing algorithm. Default SHA-1
     * @param {BufferSource} data Detached data
     * @returns {ArrayBuffer}
     * @memberOf SignedData
     */
    sign(
      privateKey: CryptoKey,
      signerIndex: number,
      hashAlgorithm?: string,
      data?: BufferSource
    ): ArrayBuffer;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toJSON(): any;
  }
}
declare module "pkijs/src/SignedAndUnsignedAttributes" {
  import typeof Attribute from "pkijs/src/Attribute";

  declare export default class SignedAndUnsignedAttributes {
    type: string;
    attributes: Attribute[];
    encodedValue: ArrayBuffer;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/Signature" {
  import type { BitString } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof Certificate from "pkijs/src/Certificate";

  declare export default class Signature {
    signatureAlgorithm: AlgorithmIdentifier;
    signature: BitString;
    certs: Certificate[];

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RSASSAPSSParams" {
  import type { Integer } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  declare export default class RSASSAPSSParams {
    /**
     * Algorithms of hashing (DEFAULT sha1)
     * @type {AlgorithmIdentifier}
     * @memberOf RSASSAPSSParams
     */
    hashAlgorithm: AlgorithmIdentifier;

    /**
     * Algorithm of "mask generaion function (MGF)" (DEFAULT mgf1SHA1)
     * @type {AlgorithmIdentifier}
     * @memberOf RSASSAPSSParams
     */
    maskGenAlgorithm: AlgorithmIdentifier;

    /**
     * Salt length (DEFAULT 20)
     * @type {number}
     * @memberOf RSASSAPSSParams
     */
    saltLength: number;

    /**
     * (DEFAULT 1)
     * @type {number}
     * @memberOf RSASSAPSSParams
     */
    trailerField: number;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RSAPublicKey" {
  import type { Integer } from "asn1js";

  declare export default class RSAPublicKey {
    modulus: Integer;
    publicExponent: Integer;

    /**
     * Convert JSON value into current object
     * @param {JsonWebKey} json
     */
    fromJSON(json: JsonWebKey): void;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RSAPrivateKey" {
  import type { Integer } from "asn1js";

  import typeof OtherPrimeInfo from "pkijs/src/OtherPrimeInfo";

  declare export default class RSAPrivateKey {
    version: number;
    modulus: Integer;
    publicExponent: Integer;
    privateExponent: Integer;
    prime1: Integer;
    prime2: Integer;
    exponent1: Integer;
    exponent2: Integer;
    coefficient: Integer;
    otherPrimeInfos: OtherPrimeInfo[];

    /**
     * Convert JSON value into current object
     * @param {JsonWebKey} json
     */
    fromJSON(json: JsonWebKey): void;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RSAESOAEPParams" {
  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  declare export default class RSAESOAEPParams {
    hashAlgorithm: AlgorithmIdentifier;
    maskGenAlgorithm: AlgorithmIdentifier;
    pSourceAlgorithm: AlgorithmIdentifier;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RevokedCertificate" {
  import type { Integer } from "asn1js";

  import typeof Time from "pkijs/src/Time";

  import typeof Extensions from "pkijs/src/Extensions";

  declare export default class RevokedCertificate {
    userCertificate: Integer;
    revocationDate: Time;
    crlEntryExtensions: Extensions;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RevocationInfoChoices" {
  import typeof CertificateRevocationList from "pkijs/src/CertificateRevocationList";

  import typeof OtherRevocationInfoFormat from "pkijs/src/OtherRevocationInfoFormat";

  declare export default class RevocationInfoChoices {
    crls: CertificateRevocationList[];
    otherRevocationInfos: OtherRevocationInfoFormat[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/ResponseData" {
  import typeof Extension from "pkijs/src/Extension";

  import typeof SingleResponse from "pkijs/src/SingleResponse";

  declare export default class ResponseData {
    tds: ArrayBuffer;
    responderID: any;
    producedAt: Date;
    responses: SingleResponse[];
    responseExtensions: Extension[];

    /**
     * Convert current object to asn1js object and set correct values
     * @param {boolean} encodeFlag
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
     */
    toSchema(encodeFlag?: boolean): any;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toJSON(): any;
  }
}
declare module "pkijs/src/ResponseBytes" {
  import type { OctetString } from "asn1js";

  declare export default class ResponseBytes {
    responseType: string;
    response: OctetString;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/Request" {
  import typeof CertID from "pkijs/src/CertID";

  import typeof Extension from "pkijs/src/Extension";

  declare export default class Request {
    reqCert: CertID;
    singleRequestExtensions: Extension[];

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RelativeDistinguishedNames" {
  import typeof AttributeTypeAndValue from "pkijs/src/AttributeTypeAndValue";

  declare export default class RelativeDistinguishedNames {
    typesAndValues: AttributeTypeAndValue[];
    valueBeforeDecode: ArrayBuffer;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RecipientKeyIdentifier" {
  import type { GeneralizedTime, OctetString } from "asn1js";

  import typeof OtherKeyAttribute from "pkijs/src/OtherKeyAttribute";

  declare export default class RecipientKeyIdentifier {
    subjectKeyIdentifier: OctetString;
    date: GeneralizedTime;
    other: OtherKeyAttribute;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RecipientInfo" {
  declare export default class RecipientInfo {
    variant: number;
    value: any;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RecipientIdentifier" {
  declare export default class RecipientIdentifier {
    variant: number;
    value: any;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RecipientEncryptedKeys" {
  import typeof RecipientEncryptedKey from "pkijs/src/RecipientEncryptedKey";

  declare export default class RecipientEncryptedKeys {
    encryptedKeys: RecipientEncryptedKey[];

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/RecipientEncryptedKey" {
  import type { OctetString } from "asn1js";

  import typeof KeyAgreeRecipientIdentifier from "pkijs/src/KeyAgreeRecipientIdentifier";

  declare export default class RecipientEncryptedKey {
    rid: KeyAgreeRecipientIdentifier;
    encryptedKey: OctetString;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PublicKeyInfo" {
  import type { BitString } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof ECPublicKey from "pkijs/src/ECPublicKey";

  import typeof RSAPublicKey from "pkijs/src/RSAPublicKey";

  declare export default class PublicKeyInfo {
    algorithm: AlgorithmIdentifier;
    subjectPublicKey: BitString;
    parsedKey: ECPublicKey | RSAPublicKey;

    /**
     * Convert JSON value into current object
     * @param {JsonWebKey} json
     */
    fromJSON(json: JsonWebKey): void;
    importKey(publicKey: CryptoKey): PromiseLike<void>;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PrivateKeyUsagePeriod" {
  declare export default class PrivateKeyUsagePeriod {
    notBefore: Date;
    notAfter: Date;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PrivateKeyInfo" {
  import type { OctetString } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof Attribute from "pkijs/src/Attribute";

  import typeof RSAPrivateKey from "pkijs/src/RSAPrivateKey";

  import typeof ECPrivateKey from "pkijs/src/ECPrivateKey";

  declare export default class PrivateKeyInfo {
    version: number;
    privateKeyAlgorithm: AlgorithmIdentifier;
    privateKey: OctetString;
    attributes: Attribute[];
    parsedKey: ECPrivateKey | RSAPrivateKey;

    /**
     * Convert JSON value into current object
     * @param {JsonWebKey} json
     */
    fromJSON(json: JsonWebKey): void;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PolicyQualifierInfo" {
  declare export default class PolicyQualifierInfo {
    policyQualifierId: string;
    qualifier: any;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PolicyMappings" {
  import typeof PolicyMapping from "pkijs/src/PolicyMapping";

  declare export default class PolicyMappings {
    mappings: PolicyMapping[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PolicyMapping" {
  declare export default class PolicyMapping {
    issuerDomainPolicy: string;
    subjectDomainPolicy: string;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PolicyInformation" {
  import typeof PolicyQualifierInfo from "pkijs/src/PolicyQualifierInfo";

  declare export default class PolicyInformation {
    policyIdentifier: string;

    /**
     * Value of the TIME class
     */
    policyQualifiers: PolicyQualifierInfo[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PolicyConstraints" {
  declare export default class PolicyConstraints {
    requireExplicitPolicy: number;
    inhibitPolicyMapping: number;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PKIStatusInfo" {
  import type { Utf8String, BitString } from "asn1js";

  declare export default class PKIStatusInfo {
    status: number;
    statusStrings: Utf8String;
    failInfo: BitString;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PBKDF2Params" {
  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  declare export default class PBKDF2Params {
    salt: any;
    iterationCount: number;
    keyLength: number;
    prf: AlgorithmIdentifier;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PBES2Params" {
  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  declare export default class PBES2Params {
    keyDerivationFunc: AlgorithmIdentifier;
    encryptionScheme: AlgorithmIdentifier;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/PasswordRecipientinfo" {
  import type { OctetString } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  declare export default class PasswordRecipientinfo {
    version: number;
    keyDerivationAlgorithm: AlgorithmIdentifier;
    keyEncryptionAlgorithm: AlgorithmIdentifier;
    encryptedKey: OctetString;
    password: ArrayBuffer;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/OtherRevocationInfoFormat" {
  declare export default class OtherRevocationInfoFormat {
    otherRevInfoFormat: string;
    otherRevInfo: any;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/OtherRecipientInfo" {
  declare export default class OtherRecipientInfo {
    oriType: string;
    oriValue: any;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/OtherPrimeInfo" {
  import type { Integer } from "asn1js";

  declare export default class OtherPrimeInfo {
    prime: Integer;
    exponent: Integer;
    coefficient: Integer;

    /**
     * Convert JSON value into current object
     * @param {JsonOtherPrimeInfo} json
     */
    fromJSON(json: JsonOtherPrimeInfo): void;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/OtherKeyAttribute" {
  declare export default class OtherKeyAttribute {
    keyAttrId: string;
    keyAttr: any;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/OtherCertificateFormat" {
  declare export default class OtherCertificateFormat {
    otherCertFormat: string;
    otherCert: any;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/OriginatorPublicKey" {
  import type { BitString } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  declare export default class OriginatorPublicKey {
    algorithm: AlgorithmIdentifier;
    publicKey: BitString;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/OriginatorInfo" {
  import typeof CertificateSet from "pkijs/src/CertificateSet";

  import typeof RevocationInfoChoices from "pkijs/src/RevocationInfoChoices";

  declare export default class OriginatorInfo {
    certs: CertificateSet;
    crls: RevocationInfoChoices;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/OriginatorIdentifierOrKey" {
  declare export default class OriginatorIdentifierOrKey {
    variant: number;
    value: any;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/OCSPResponse" {
  import type { Enumerated } from "asn1js";

  import typeof ResponseBytes from "pkijs/src/ResponseBytes";

  import typeof Certificate from "pkijs/src/Certificate";

  import type { GetCertificateStatusResult } from "pkijs/src/BasicOCSPResponse";

  import type { CreateFroCertificateParams } from "pkijs/src/CertID";

  declare export default class OCSPResponse {
    responseStatus: Enumerated;
    responseBytes: ResponseBytes;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;

    /**
     * Get OCSP response status for specific certificate
     * @param {Certificate} certificate
     * @param {Certificate} issuerCertificate
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
     */
    getCertificateStatus(
      certificate: Certificate,
      issuerCertificate: Certificate
    ): PromiseLike<GetCertificateStatusResult>;

    /**
     * Making OCSP Request for specific certificate
     * @param {Certificate} certificate Certificate making OCSP Request for
     * @param {CreateFroCertificateParams} parameters Additional parameters
     * @returns {Promise}
     */
    createForCertificate(
      certificate: Certificate,
      parameters: CreateFroCertificateParams
    ): PromiseLike<void>;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/OCSPRequest" {
  import typeof TBSRequest from "pkijs/src/TBSRequest";

  import typeof Signature from "pkijs/src/Signature";

  declare export default class OCSPRequest {
    tbsRequest: TBSRequest;
    optionalSignature: Signature;

    /**
     * Convert current object to asn1js object and set correct values
     * @param {boolean} encodeFlag
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
     */
    toSchema(encodeFlag?: boolean): any;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toJSON(): any;
  }
}
declare module "pkijs/src/NameConstraints" {
  import typeof GeneralSubtree from "pkijs/src/GeneralSubtree";

  declare export default class NameConstraints {
    permittedSubtrees: GeneralSubtree[];
    excludedSubtrees: GeneralSubtree[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/MessageImprint" {
  import type { OctetString } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  declare export default class MessageImprint {
    hashAlgorithm: AlgorithmIdentifier;
    hashedMessage: OctetString;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/MacData" {
  import type { OctetString } from "asn1js";

  import typeof DigestInfo from "pkijs/src/DigestInfo";

  declare export default class MacData {
    mac: DigestInfo;
    macSalt: OctetString;
    iterations: number;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/KeyTransRecipientInfo" {
  import type { OctetString } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof RecipientIdentifier from "pkijs/src/RecipientIdentifier";

  import typeof Certificate from "pkijs/src/Certificate";

  declare export default class KeyTransRecipientInfo {
    version: number;
    rid: RecipientIdentifier;
    keyEncryptionAlgorithm: AlgorithmIdentifier;
    encryptedKey: OctetString;

    /**
     * For some reasons we need to store recipient's certificate here
     * @type {Certificate}
     * @memberOf KeyTransRecipientInfo
     */
    recipientCertificate: Certificate;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/KeyAgreeRecipientInfo" {
  import type { OctetString } from "asn1js";

  import typeof Certificate from "pkijs/src/Certificate";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof OriginatorIdentifierOrKey from "pkijs/src/OriginatorIdentifierOrKey";

  import typeof RecipientEncryptedKeys from "pkijs/src/RecipientEncryptedKeys";

  declare export default class KeyAgreeRecipientInfo {
    version: number;
    originator: OriginatorIdentifierOrKey;
    ukm: OctetString;
    keyEncryptionAlgorithm: AlgorithmIdentifier;
    recipientEncryptedKeys: RecipientEncryptedKeys;
    recipientCertificate: Certificate;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/KeyAgreeRecipientIdentifier" {
  declare export default class KeyAgreeRecipientIdentifier {
    variant: number;
    value: any;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/KEKRecipientInfo" {
  import type { OctetString } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof KEKIdentifier from "pkijs/src/KEKIdentifier";

  declare export default class KEKRecipientInfo {
    version: number;
    kekid: KEKIdentifier;
    keyEncryptionAlgorithm: AlgorithmIdentifier;
    encryptedKey: OctetString;
    preDefinedKEK: ArrayBuffer;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/KEKIdentifier" {
  import type { OctetString, GeneralizedTime } from "asn1js";

  import typeof OtherKeyAttribute from "pkijs/src/OtherKeyAttribute";

  declare export default class KEKIdentifier {
    keyIdentifier: OctetString;
    date: GeneralizedTime;
    other: OtherKeyAttribute;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/IssuingDistributionPoint" {
  import typeof GeneralName from "pkijs/src/GeneralName";

  import typeof RelativeDistinguishedNames from "pkijs/src/RelativeDistinguishedNames";

  declare export default class IssuingDistributionPoint {
    distributionPoint: GeneralName[] | RelativeDistinguishedNames;
    onlyContainsUserCerts: boolean;
    onlySomeReasons: number;
    indirectCRL: boolean;
    onlyContainsAttributeCerts: boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/IssuerAndSerialNumber" {
  import type { Integer } from "asn1js";

  import typeof RelativeDistinguishedNames from "pkijs/src/RelativeDistinguishedNames";

  declare export default class IssuerAndSerialNumber {
    issuer: RelativeDistinguishedNames;
    serialNumber: Integer;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/InfoAccess" {
  import typeof AccessDescription from "pkijs/src/AccessDescription";

  declare export default class InfoAccess {
    accessDescriptions: AccessDescription[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/GeneratorsDriver" {
  /**
   * Simple "generator's driver" inspired by "https://github.com/tj/co".
   * @param {Generator | GeneratorFunction} generatorInstance
   * @returns {Promise}
   */
  declare export default function generatorsDriver(
    generatorInstance: any
  ): PromiseLike<any>;
}
declare module "pkijs/src/GeneralSubtree" {
  import type { Integer } from "asn1js";

  import typeof GeneralName from "pkijs/src/GeneralName";

  declare export default class GeneralSubtree {
    base: GeneralName;
    minimum: number | Integer;
    maximum: number | Integer;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/Extensions" {
  import typeof Extension from "pkijs/src/Extension";

  declare export default class Extensions {
    extensions: Extension[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/Extension" {
  import type { OctetString } from "asn1js";

  declare export default class Extension {
    extnID: string;
    critical: boolean;
    extnValue: OctetString;
    parsedValue: any;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/ExtKeyUsage" {
  declare export default class ExtKeyUsage {
    keyPurposes: string[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/EnvelopedData" {
  import typeof Attribute from "pkijs/src/Attribute";

  import typeof Certificate from "pkijs/src/Certificate";

  import typeof EncryptedContentInfo from "pkijs/src/EncryptedContentInfo";

  import typeof RecipientInfo from "pkijs/src/RecipientInfo";

  import typeof OriginatorInfo from "pkijs/src/OriginatorInfo";

  declare export default class EnvelopedData {
    version: number;
    originatorInfo: OriginatorInfo;
    recipientInfos: RecipientInfo[];
    encryptedContentInfo: EncryptedContentInfo;
    unprotectedAttrs: Attribute[];

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;

    /**
     * Helpers function for filling "RecipientInfo" based on recipient's certificate.
     * Problem with WebCrypto is that for RSA certificates we have only one option - "key transport" and
     * for ECC certificates we also have one option - "key agreement". As soon as Google will implement
     * DH algorithm it would be possible to use "key agreement" also for RSA certificates.
     * @param {Certificate} certificate Recipient's certificate
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} parameters Additional parameters neccessary for "fine tunning" of encryption process
     * @param {number} variant Variant = 1 is for "key transport", variant = 2 is for "key agreement". In fact the "variant" is unneccessary now because Google has no DH algorithm implementation. Thus key encryption scheme would be choosen by certificate type only: "key transport" for RSA and "key agreement" for ECC certificates.
     */
    addRecipientByCertificate(
      certificate: Certificate,
      parameters: {
        oaepHashAlgorithm?: string,
        kdfAlgorithm?: string,
        kekEncryptionLength?: number
      },
      variant: number
    ): boolean;

    /**
     * Add recipient based on pre-defined data like password or KEK
     * @param {ArrayBuffer} preDefinedData ArrayBuffer with pre-defined data
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} parameters Additional parameters neccessary for "fine tunning" of encryption process
     * @param {number} variant Variant = 1 for pre-defined "key encryption key" (KEK). Variant = 2 for password-based encryption.
     */
    addRecipientByPreDefinedData(
      preDefinedData: ArrayBuffer,
      parameters: {
        keyIdentifier?: ArrayBuffer,
        hmacHashAlgorithm?: string,
        iterationCount?: number,
        keyEncryptionAlgorithm?: Algorithm,
        keyEncryptionAlgorithmParams?: any
      },
      variant: number
    ): boolean;

    /**
     * Create a new CMS Enveloped Data content with encrypted data
     * @param {Algorithm} contentEncryptionAlgorithm WebCrypto algorithm. For the moment here could be only "AES-CBC" or "AES-GCM" algorithms.
     * @param {ArrayBuffer} contentToEncrypt Content to encrypt
     * @returns {Promise}
     */
    encrypt(
      contentEncryptionAlgorithm: Algorithm,
      contentToEncrypt: ArrayBuffer
    ): PromiseLike<ArrayBuffer>;

    /**
     * Decrypt existing CMS Enveloped Data content
     * @param {number} recipientIndex Index of recipient
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} parameters Additional parameters
     * @returns {Promise}
     */
    decrypt(
      recipientIndex: number,
      parameters: {
        recipientCertificate: Certificate,
        recipientPrivateKey: ArrayBuffer
      }
    ): PromiseLike<ArrayBuffer>;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/EncryptedData" {
  import typeof EncryptedContentInfo from "pkijs/src/EncryptedContentInfo";

  import typeof Attribute from "pkijs/src/Attribute";

  declare export default class EncryptedData {
    version: number;
    encryptedContentInfo: EncryptedContentInfo;
    unprotectedAttrs: Attribute[];

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;

    /**
     * Create a new CMS Encrypted Data content
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} parameters Parameters neccessary for encryption
     * @returns {Promise}
     */
    encrypt(parameters: {
      password: string,
      contentEncryptionAlgorithm: Algorithm,
      hmacHashAlgorithm: string,
      iterationCount: number,
      contentToEncrypt: BufferSource
    }): PromiseLike<ArrayBuffer>;

    /**
     * Create a new CMS Encrypted Data content
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} parameters Parameters neccessary for encryption
     */
    decrypt(parameters: {
      password: string
    }): PromiseLike<ArrayBuffer>;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/EncryptedContentInfo" {
  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import type { OctetString } from "asn1js";

  declare export default class EncryptedContentInfo {
    eContentType: string;
    contentEncryptionAlgorithm: AlgorithmIdentifier;
    encryptedContent: OctetString;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/EncapsulatedContentInfo" {
  import type { OctetString } from "asn1js";

  declare export default class EncapsulatedContentInfo {
    eContentType: string;
    eContent: OctetString;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/ECPublicKey" {
  declare export default class ECPublicKey {
    x: ArrayBuffer;
    y: ArrayBuffer;
    namedCurve: string;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;

    /**
     * Convert JSON value into current object
     * @param {JsonWebKey} json
     */
    fromJSON(json: JsonWebKey): void;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/ECPrivateKey" {
  import type { OctetString } from "asn1js";

  import typeof ECPublicKey from "pkijs/src/ECPublicKey";

  declare export default class ECPrivateKey {
    version: number;
    privateKey: OctetString;
    namedCurve: string;
    publicKey: ECPublicKey;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;

    /**
     * Convert JSON value into current object
     * @param {JsonWebKey} json
     */
    fromJSON(json: JsonWebKey): void;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/ECCCMSSharedInfo" {
  import type { OctetString } from "asn1js";

  declare export default class ECCCMSSharedInfo {
    keyInfo: AlgorithmIdentifier;
    entityUInfo: OctetString;
    suppPubInfo: OctetString;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/DistributionPoint" {
  import type { BitString } from "asn1js";

  import typeof GeneralName from "pkijs/src/GeneralName";

  declare export default class DistributionPoint {
    distributionPoint: GeneralName[];
    reasons: BitString;
    cRLIssuer: GeneralName[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/DigestInfo" {
  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import type { OctetString } from "asn1js";

  declare export default class DigestInfo {
    digestAlgorithm: AlgorithmIdentifier;
    digest: OctetString;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/CryptoEngine" {
  declare export default class CryptoEngine mixins SubtleCrypto {
    crypto: SubtleCrypto;
    name: string;

    /**
     * Constructor for CryptoEngine class
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} parameters
     */
    constructor(parameters?: any): this;
    importKey(
      format: "jwk",
      keyData: JsonWebKey,
      algorithm:
        | string
        | RsaHashedImportParams
        | EcKeyImportParams
        | HmacImportParams
        | DhImportKeyParams,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<CryptoKey>;
    importKey(
      format: "raw" | "pkcs8" | "spki",
      keyData: BufferSource,
      algorithm:
        | string
        | RsaHashedImportParams
        | EcKeyImportParams
        | HmacImportParams
        | DhImportKeyParams,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<CryptoKey>;
    importKey(
      format: string,
      keyData: JsonWebKey | BufferSource,
      algorithm:
        | string
        | RsaHashedImportParams
        | EcKeyImportParams
        | HmacImportParams
        | DhImportKeyParams,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<CryptoKey>;
    exportKey(format: "jwk", key: CryptoKey): PromiseLike<JsonWebKey>;
    exportKey(
      format: "raw" | "pkcs8" | "spki",
      key: CryptoKey
    ): PromiseLike<ArrayBuffer>;
    exportKey(
      format: string,
      key: CryptoKey
    ): PromiseLike<JsonWebKey | ArrayBuffer>;

    /**
     * Convert WebCrypto keys between different export formats
     * @param {string} inputFormat
     * @param {string} outputFormat
     * @param {ArrayBuffer | JsonWebKey} keyData
     * @param {Algorithm} algorithm
     * @param {boolean} extractable
     * @param {Array} keyUsages
     * @returns {Promise}
     */
    convert(
      inputFormat: string,
      outputFormat: string,
      keyData: BufferSource | JsonWebKey,
      algorithm: Algorithm,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<BufferSource | JsonWebKey>;
    generateKey(
      algorithm: string,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<CryptoKeyPair | CryptoKey>;
    generateKey(
      algorithm: RsaHashedKeyGenParams | EcKeyGenParams | DhKeyGenParams,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<CryptoKeyPair>;
    generateKey(
      algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<CryptoKey>;
    importKey(
      format: "jwk",
      keyData: JsonWebKey,
      algorithm:
        | string
        | RsaHashedImportParams
        | EcKeyImportParams
        | HmacImportParams
        | DhImportKeyParams,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<CryptoKey>;
    importKey(
      format: "raw" | "pkcs8" | "spki",
      keyData: BufferSource,
      algorithm:
        | string
        | RsaHashedImportParams
        | EcKeyImportParams
        | HmacImportParams
        | DhImportKeyParams,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<CryptoKey>;
    importKey(
      format: string,
      keyData: JsonWebKey | BufferSource,
      algorithm:
        | string
        | RsaHashedImportParams
        | EcKeyImportParams
        | HmacImportParams
        | DhImportKeyParams,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<CryptoKey>;
    sign(
      algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams,
      key: CryptoKey,
      data: BufferSource
    ): PromiseLike<ArrayBuffer>;
    unwrapKey(
      format: string,
      wrappedKey: BufferSource,
      unwrappingKey: CryptoKey,
      unwrapAlgorithm: AlgorithmIdentifier,
      unwrappedKeyAlgorithm: AlgorithmIdentifier,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<CryptoKey>;
    verify(
      algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams,
      key: CryptoKey,
      signature: BufferSource,
      data: BufferSource
    ): PromiseLike<boolean>;
    wrapKey(
      format: string,
      key: CryptoKey,
      wrappingKey: CryptoKey,
      wrapAlgorithm: AlgorithmIdentifier
    ): PromiseLike<ArrayBuffer>;
    decrypt(
      algorithm:
        | string
        | RsaOaepParams
        | AesCtrParams
        | AesCbcParams
        | AesCmacParams
        | AesGcmParams
        | AesCfbParams,
      key: CryptoKey,
      data: BufferSource
    ): PromiseLike<ArrayBuffer>;
    deriveBits(
      algorithm:
        | string
        | EcdhKeyDeriveParams
        | DhKeyDeriveParams
        | ConcatParams
        | HkdfCtrParams
        | Pbkdf2Params,
      baseKey: CryptoKey,
      length: number
    ): PromiseLike<ArrayBuffer>;
    deriveKey(
      algorithm:
        | string
        | EcdhKeyDeriveParams
        | DhKeyDeriveParams
        | ConcatParams
        | HkdfCtrParams
        | Pbkdf2Params,
      baseKey: CryptoKey,
      derivedKeyType:
        | string
        | AesDerivedKeyParams
        | HmacImportParams
        | ConcatParams
        | HkdfCtrParams
        | Pbkdf2Params,
      extractable: boolean,
      keyUsages: string[]
    ): PromiseLike<CryptoKey>;
    digest(
      algorithm: AlgorithmIdentifier,
      data: BufferSource
    ): PromiseLike<ArrayBuffer>;
    encrypt(
      algorithm:
        | string
        | RsaOaepParams
        | AesCtrParams
        | AesCbcParams
        | AesCmacParams
        | AesGcmParams
        | AesCfbParams,
      key: CryptoKey,
      data: BufferSource
    ): PromiseLike<ArrayBuffer>;
  }
}
declare module "pkijs/src/ContentInfo" {
  declare export default class ContentInfo {
    contentType: string;
    content: any;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/CRLDistributionPoints" {
  import typeof DistributionPoint from "pkijs/src/DistributionPoint";

  declare export default class CRLDistributionPoints {
    distributionPoints: DistributionPoint[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/CertificationRequest" {
  import type { BitString, Sequence } from "asn1js";

  import typeof RelativeDistinguishedNames from "pkijs/src/RelativeDistinguishedNames";

  import typeof PublicKeyInfo from "pkijs/src/PublicKeyInfo";

  import typeof Certificate from "pkijs/src/Certificate";

  import typeof Attribute from "pkijs/src/Attribute";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  declare export default class CertificationRequest {
    tbs: ArrayBuffer;
    version: number;
    subject: RelativeDistinguishedNames;
    subjectPublicKeyInfo: PublicKeyInfo;
    attributes: Attribute[];
    signatureAlgorithm: AlgorithmIdentifier;
    signatureValue: BitString;

    /**
     * Convert current object to asn1js object and set correct values
     * @param {boolean} encodeFlag
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
     */
    toSchema(encodeFlag?: boolean): any;

    /**
     * Aux function making ASN1js Sequence from current TBS
     * @returns {Sequence}
     */
    encodeTBS(): Sequence;

    /**
     * Makes signature for currect certification request
     * @param {CryptoKey} privateKey WebCrypto private key
     * @param {string} hashAlgorithm String representing current hashing algorithm
     * @returns {PromiseLike<ArrayBuffer>}
     * @memberOf CertificationRequest
     */
    sign(
      privateKey: CryptoKey,
      hashAlgorithm?: string
    ): PromiseLike<ArrayBuffer>;

    /**
     * Verify existing certification request signature
     * @returns {PromiseLike<boolean>}
     * @memberOf CertificationRequest
     */
    verify(): PromiseLike<boolean>;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toJSON(): any;
  }
}
declare module "pkijs/src/CertificateSet" {
  import typeof Certificate from "pkijs/src/Certificate";

  declare export default class CertificateSet {
    certificates: Certificate[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/CertificateRevocationList" {
  import typeof RelativeDistinguishedNames from "pkijs/src/RelativeDistinguishedNames";

  import typeof RevokedCertificate from "pkijs/src/RevokedCertificate";

  import typeof Time from "pkijs/src/Time";

  import typeof Extension from "pkijs/src/Extension";

  import typeof PublicKeyInfo from "pkijs/src/PublicKeyInfo";

  import typeof Certificate from "pkijs/src/Certificate";

  import type { BitString, Sequence } from "asn1js";

  declare export default class CertificateRevocationList {
    tbs: ArrayBuffer;
    version: number;
    signature: AlgorithmIdentifier;
    issuer: RelativeDistinguishedNames;
    thisUpdate: Time;
    nextUpdate: Time;
    revokedCertificates: RevokedCertificate[];
    crlExtension: Extension[];
    signatureAlgorithm: AlgorithmIdentifier;
    signatureValue: BitString;

    /**
     * Convert current object to asn1js object and set correct values
     * @param {boolean} encodeFlag
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
     */
    toSchema(encodeFlag?: boolean): any;
    encodeTBS(): Sequence;
    isCertificateRevoked(certificate: Certificate): boolean;

    /**
     * Make a signature for existing CRL data
     * @param {CryptoKey} privateKey Private key for "subjectPublicKeyInfo" structure
     * @param {string} hashAlgorithm Hashing algorithm. Default SHA-1
     */
    sign(
      privateKey: CryptoKey,
      hashAlgorithm?: string
    ): PromiseLike<ArrayBuffer>;

    /**
 * Verify existing signature
 * @param {{
"NO PRINT IMPLEMENTED: ComputedPropertyName": Certificate,
"NO PRINT IMPLEMENTED: ComputedPropertyName": PublicKeyInfo
}} parameters
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
 */
    verify(parameters: {
      issuerCertificate?: Certificate,
      publicKeyInfo?: PublicKeyInfo
    }): PromiseLike<boolean>;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toJSON(): any;
  }
}
declare module "pkijs/src/CertificatePolicies" {
  import typeof PolicyInformation from "pkijs/src/PolicyInformation";

  declare export default class CertificatePolicies {
    certificatePolicies: PolicyInformation[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/CertificateChainValidationEngine" {
  import type { BitString } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof Certificate from "pkijs/src/Certificate";

  import typeof OCSPResponse from "pkijs/src/OCSPResponse";

  import typeof CertificateRevocationList from "pkijs/src/CertificateRevocationList";

  declare export default class CertificateChainValidationEngine {
    trustedCerts: Certificate[];
    certs: Certificate[];
    crls: CertificateRevocationList[];
    ocsp: OCSPResponse;
    checkDate: Date;

    /**
     * Constructor for CertificateChainValidationEngine class
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} parameters
     * @property {any} [schema] asn1js parsed value
     */
    constructor(parameters?: any): this;
    sort(): any;

    /**
 * Major verification function for certificate chain.
 * @param {{
initialPolicySet: any,
initialExplicitPolicy: any,
initialPolicyMappingInhibit: any,
initialInhibitPolicy: any,
initialPermittedSubtreesSet: any,
initialExcludedSubtreesSet: any,
initialRequiredNameForms: any
}} parameters
 * @returns {PromiseLike<any>}
 */
    verify(parameters?: any): PromiseLike<any>;
  }
}
declare module "pkijs/src/Certificate" {
  import type { OctetString, Integer, BitString, Sequence } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof PublicKeyInfo from "pkijs/src/PublicKeyInfo";

  import typeof RelativeDistinguishedNames from "pkijs/src/RelativeDistinguishedNames";

  import typeof Extension from "pkijs/src/Extension";

  import typeof Time from "pkijs/src/Time";

  declare export default class Certificate {
    tbs: ArrayBuffer;
    version: number;
    serialNumber: Integer;
    signature: AlgorithmIdentifier;
    issuer: RelativeDistinguishedNames;
    notBefore: Time;
    notAfter: Time;
    subject: RelativeDistinguishedNames;
    subjectPublicKeyInfo: PublicKeyInfo;
    issuerUniqueID: ArrayBuffer;
    subjectUniqueID: ArrayBuffer;
    extensions: Extension[];
    signatureAlgorithm: AlgorithmIdentifier;
    signatureValue: BitString;

    /**
     * Convert current object to asn1js object and set correct values
     * @param {boolean} encodeFlag
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
     */
    toSchema(encodeFlag?: boolean): any;

    /**
     * Create ASN.1 schema for existing values of TBS part for the certificate
     */
    encodeTBS(): Sequence;

    /**
     * Importing public key for current certificate
     */
    getPublicKey(parameters?: any): PromiseLike<CryptoKey>;

    /**
     * Get SHA-1 hash value for subject public key
     */
    getKeyHash(): PromiseLike<ArrayBuffer>;

    /**
     * Make a signature for current value from TBS section
     * @param {CryptoKey} privateKey Private key for "subjectPublicKeyInfo" structure
     * @param {string} hashAlgorithm Hashing algorithm
     */
    sign(
      privateKey: CryptoKey,
      hashAlgorithm?: string
    ): PromiseLike<ArrayBuffer>;
    verify(issuerCertificate?: Certificate): PromiseLike<boolean>;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toJSON(): any;
  }
}
declare module "pkijs/src/CertID" {
  import type { OctetString, Integer } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof Certificate from "pkijs/src/Certificate";

  declare interface CreateFroCertificateParams {
    hashAlgorithm: string;
    issuerCertificate: Certificate;
  }
  declare export default class CertID {
    hashAlgorithm: AlgorithmIdentifier;
    issuerNameHash: OctetString;
    issuerKeyHash: OctetString;
    serialNumber: Integer;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;

    /**
     * Check that two "CertIDs" are equal
     * @param {CertID} certificateID Identifier of the certificate to be checked
     * @returns {boolean}
     */
    isEqual(certificateID: CertID): boolean;

    /**
     * Making OCSP certificate identifier for specific certificate
     * @param {Certificate} certificate Certificate making OCSP Request for
     * @param {CreateFroCertificateParams} parameters Additional parameters
     * @returns {Promise}
     */
    createForCertificate(
      certificate: Certificate,
      parameters: CreateFroCertificateParams
    ): PromiseLike<void>;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/BasicOCSPResponse" {
  import type { BitString } from "asn1js";

  import typeof AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

  import typeof Certificate from "pkijs/src/Certificate";

  import typeof ResponseData from "pkijs/src/ResponseData";

  declare interface GetCertificateStatusResult {
    isForCertificate: boolean;

    /**
     * 0 = good, 1 = revoked, 2 = unknown
     * @type {number}
     * @memberOf GetCertificateStatusResult
     */
    status: number;
  }
  declare export default class BasicOCSPResponse {
    tbsResponseData: ResponseData;
    signatureAlgorithm: AlgorithmIdentifier;
    signature: BitString;
    certs: Certificate[];

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;

    /**
     * Get OCSP response status for specific certificate
     * @param {Certificate} certificate Certificate to be checked
     * @param {Certificate} issuerCertificate Certificate of issuer for certificate to be checked
     * @returns {PromiseLike<GetCertificateStatusResult>}
     */
    getCertificateStatus(
      certificate: Certificate,
      issuerCertificate: Certificate
    ): PromiseLike<GetCertificateStatusResult>;

    /**
     * Make signature for current OCSP Basic Response
     * @param {CryptoKey} privateKey Private key for "subjectPublicKeyInfo" structure
     * @param {string} hashAlgorithm Hashing algorithm. Default SHA-1
     * @returns {PromiseLike<ArrayBuffer>}
     */
    sign(
      privateKey: CryptoKey,
      hashAlgorithm?: string
    ): PromiseLike<ArrayBuffer>;

    /**
 * Verify existing OCSP Basic Response
 * @param {{
trustedCerts?: Certificate[]
}} parameters Additional parameters
 * @returns {PromiseLike<boolean>}
 */
    verify(parameters?: {
      trustedCerts?: Certificate[]
    }): PromiseLike<boolean>;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/BasicConstraints" {
  import type { Integer } from "asn1js";

  declare export default class BasicConstraints {
    cA: boolean;
    pathLenConstraint: number | Integer;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/AuthorityKeyIdentifier" {
  import typeof GeneralName from "pkijs/src/AccessDescription";

  import type { Integer, OctetString } from "asn1js";

  declare export default class AuthorityKeyIdentifier {
    keyIdentifier: OctetString;
    authorityCertIssuer: GeneralName[];
    authorityCertSerialNumber: Integer;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/AccessDescription" {
  import typeof GeneralName from "pkijs/src/AccessDescription";

  /**
   * Class from RFC5280
   * @export
   * @class AccessDescription
   */
  declare export default class AccessDescription {
    accessMethod: string;
    accessLocation: GeneralName;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/Accuracy" {
  declare export default class Accuracy {
    seconds: number;
    millis: number;
    micros: number;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
  }
}
declare module "pkijs/src/AlgorithmIdentifier" {
  declare export default class AlgorithmIdentifier {
    algorithmId: string;
    algorithmParams: any;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;

    /**
     * Check that two "AlgorithmIdentifiers" are equal
     * @param {AlgorithmIdentifier} algorithmIdentifier
     * @returns {boolean}
     */
    isEqual(algorithmIdentifier: AlgorithmIdentifier): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/GeneralNames" {
  import typeof GeneralName from "pkijs/src/GeneralName";

  declare export default class GeneralNames {
    names: GeneralName[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/GeneralName" {
  /**
   * @class
   * @description GeneralName
   */
  declare export default class GeneralName {
    /**
     * value type - from a tagged value (0 for "otherName", 1 for "rfc822Name" etc.)
     * @type {number}
     * @memberOf GeneralName
     */
    type: number;

    /**
     * asn1js object having GENERAL_NAME value (type depends on "type" value)
     * @type {"NO PRINT IMPLEMENTED: JSDocAllType"}
     * @memberOf GeneralName
     */
    value: any;

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} memberValue Value to compare with default value
     */
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/AltName" {
  import typeof GeneralName from "pkijs/src/GeneralName";

  /**
   * Class from RFC5280
   */
  declare export default class AltName {
    altNames: GeneralName[];
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/AttributeTypeAndValue" {
  import type { ObjectIdentifier } from "asn1js";

  declare export default class AttributeTypeAndValue {
    /**
     * @type {ObjectIdentifier}
     * @memberOf AttributeTypeAndValue
     */
    type: ObjectIdentifier;

    /**
     * @type {"NO PRINT IMPLEMENTED: JSDocAllType"}
     * @memberOf AttributeTypeAndValue
     */
    value: any;

    /**
     * Compare two AttributeTypeAndValue values, or AttributeTypeAndValue with ArrayBuffer value
     * @param {(AttributeTypeAndValue | ArrayBuffer)} compareTo The value compare to current
     * @returns {boolean}
     * @memberOf AttributeTypeAndValue
     */
    isEqual(compareTo: AttributeTypeAndValue | ArrayBuffer): boolean;
    constructor(params?: any): this;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs/src/Attribute" {
  declare export default class Attribute {
    type: string;
    value: Array<any>;
    constructor(params?: any): this;
    static compareWithDefault(memberName: string, memberValue: any): boolean;
    static defaultValues(memberName: string): any;
    static schema(parameters?: any): any;
    fromSchema(schema: any): void;
    toSchema(): any;
    toJSON(): any;
  }
}
declare module "pkijs" {
  declare interface JsonOtherPrimeInfo {
    r: string;
    d: string;
    t: string;
  }
}
