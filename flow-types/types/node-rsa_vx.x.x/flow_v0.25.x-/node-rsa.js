declare module "node-rsa" {
  declare class NodeRSA {
    /**
     * Generate new key with length specified.
     */
    constructor(key?: NodeRSA$NodeRSA$KeyBits): this;

    /**
     * Load key from string/buffer/components.
     */
    constructor(
      key: NodeRSA$NodeRSA$Key,
      format?: NodeRSA$NodeRSA$Format,
      options?: NodeRSA$NodeRSA$Options
    ): this;

    /**
     * Set and validate options for key instance.
     */
    setOptions(options: NodeRSA$NodeRSA$Options): void;

    /**
     * @param bits Key size in bits. 2048 by default.
     * @param exponent public exponent. 65537 by default.
     */
    generateKeyPair(bits?: number, exponent?: number): NodeRSA;

    /**
     * Import key from PEM string, PEM/DER Buffer or components.
     */
    importKey(
      key: NodeRSA$NodeRSA$Key,
      format?: NodeRSA$NodeRSA$Format
    ): NodeRSA;

    /**
     * Export key to PEM string, PEM/DER Buffer or components.
     */
    exportKey(format?: NodeRSA$NodeRSA$FormatPem): string;
    exportKey(format: NodeRSA$NodeRSA$FormatDer): Buffer;
    exportKey(
      format: NodeRSA$NodeRSA$FormatComponentsPrivate
    ): NodeRSA$NodeRSA$KeyComponentsPrivate;
    exportKey(
      format: NodeRSA$NodeRSA$FormatComponentsPublic
    ): NodeRSA$NodeRSA$KeyComponentsPublic;
    isPrivate(): boolean;

    /**
     * @param strict if true method will return false if key pair have private exponent. Default false.
     */
    isPublic(strict?: boolean): boolean;

    /**
     * Return true if key pair doesn't have any data.
     */
    isEmpty(): boolean;

    /**
     * Return key size in bits.
     */
    getKeySize(): number;

    /**
     * Return max data size for encrypt in bytes.
     */
    getMaxMessageSize(): number;
    encrypt(data: NodeRSA$NodeRSA$Data, encoding?: "buffer"): Buffer;
    encrypt(
      data: NodeRSA$NodeRSA$Data,
      encoding: NodeRSA$NodeRSA$Encoding
    ): string;
    encrypt(
      data: Buffer,
      encoding: "buffer",
      sourceEncoding?: NodeRSA$NodeRSA$Encoding
    ): Buffer;
    encrypt(
      data: Buffer,
      encoding: NodeRSA$NodeRSA$Encoding,
      sourceEncoding?: NodeRSA$NodeRSA$Encoding
    ): string;
    encryptPrivate(data: NodeRSA$NodeRSA$Data, encoding?: "buffer"): Buffer;
    encryptPrivate(
      data: NodeRSA$NodeRSA$Data,
      encoding: NodeRSA$NodeRSA$Encoding
    ): string;
    encryptPrivate(
      data: Buffer,
      encoding: "buffer",
      sourceEncoding?: NodeRSA$NodeRSA$Encoding
    ): Buffer;
    encryptPrivate(
      data: Buffer,
      encoding: NodeRSA$NodeRSA$Encoding,
      sourceEncoding?: NodeRSA$NodeRSA$Encoding
    ): string;
    decrypt(data: Buffer | string, encoding?: "buffer"): Buffer;
    decrypt(data: Buffer | string, encoding: NodeRSA$NodeRSA$Encoding): string;
    decrypt<T: { [key: string]: any }>(
      data: Buffer | string,
      encoding: "json"
    ): T;
    decryptPublic(data: Buffer | string, encoding?: "buffer"): Buffer;
    decryptPublic(
      data: Buffer | string,
      encoding: NodeRSA$NodeRSA$Encoding
    ): string;
    decryptPublic<T: { [key: string]: any }>(
      data: Buffer | string,
      encoding: "json"
    ): T;
    sign(data: NodeRSA$NodeRSA$Data, encoding?: "buffer"): Buffer;
    sign(
      data: NodeRSA$NodeRSA$Data,
      encoding: NodeRSA$NodeRSA$Encoding
    ): string;
    sign(
      data: Buffer,
      encoding: "buffer",
      sourceEncoding?: NodeRSA$NodeRSA$Encoding
    ): Buffer;
    sign(
      data: Buffer,
      encoding: NodeRSA$NodeRSA$Encoding,
      sourceEncoding?: NodeRSA$NodeRSA$Encoding
    ): string;
    verify(data: NodeRSA$NodeRSA$Data, signature: Buffer): boolean;
    verify(
      data: Buffer,
      signature: Buffer,
      sourceEncoding?: NodeRSA$NodeRSA$Encoding
    ): boolean;
    verify(
      data: Buffer,
      signature: string,
      sourceEncoding: NodeRSA$NodeRSA$Encoding,
      signatureEncoding: NodeRSA$NodeRSA$Encoding
    ): boolean;
    verify(
      data: NodeRSA$NodeRSA$Data,
      signature: string,
      sourceEncoding: void,
      signatureEncoding: NodeRSA$NodeRSA$Encoding
    ): boolean;
  }
  declare type NodeRSA$Key =
    | string
    | Buffer
    | NodeRSA$KeyComponentsPrivate
    | NodeRSA$KeyComponentsPublic;

  declare type NodeRSA$Data = string | { [key: string]: any } | any[];

  declare type NodeRSA$FormatPem =
    | "private"
    | "public"
    | "pkcs1"
    | "pkcs1-pem"
    | "pkcs1-private"
    | "pkcs1-private-pem"
    | "pkcs1-public"
    | "pkcs1-public-pem"
    | "pkcs8"
    | "pkcs8-pem"
    | "pkcs8-private"
    | "pkcs8-private-pem"
    | "pkcs8-public"
    | "pkcs8-public-pem";

  declare type NodeRSA$FormatDer =
    | "pkcs1-der"
    | "pkcs1-private-der"
    | "pkcs1-public-der"
    | "pkcs8-der"
    | "pkcs8-private-der"
    | "pkcs8-public-der";

  declare type NodeRSA$FormatComponentsPrivate =
    | "components"
    | "components-pem"
    | "components-der"
    | "components-private"
    | "components-private-pem"
    | "components-private-der";

  declare type NodeRSA$FormatComponentsPublic =
    | "components-public"
    | "components-public-pem"
    | "components-public-der";

  declare type NodeRSA$Format =
    | NodeRSA$FormatPem
    | NodeRSA$FormatDer
    | NodeRSA$FormatComponentsPrivate
    | NodeRSA$FormatComponentsPublic;

  declare type NodeRSA$EncryptionScheme = "pkcs1_oaep" | "pkcs1";

  declare type NodeRSA$HashingAlgorithm =
    | "ripemd160"
    | "md4"
    | "md5"
    | "sha1"
    | "sha224"
    | "sha256"
    | "sha384"
    | "sha512";

  declare type NodeRSA$SigningScheme = "pkcs1" | "pss";

  declare type NodeRSA$SigningSchemeHash =
    | "pkcs1-ripemd160"
    | "pkcs1-md4"
    | "pkcs1-md5"
    | "pkcs1-sha"
    | "pkcs1-sha1"
    | "pkcs1-sha224"
    | "pkcs1-sha256"
    | "pkcs1-sha384"
    | "pkcs1-sha512"
    | "pss-ripemd160"
    | "pss-md4"
    | "pss-md5"
    | "pss-sha"
    | "pss-sha1"
    | "pss-sha224"
    | "pss-sha256"
    | "pss-sha384"
    | "pss-sha512";

  declare type NodeRSA$Encoding =
    | "ascii"
    | "utf8"
    | "utf16le"
    | "ucs2"
    | "latin1"
    | "base64"
    | "hex"
    | "binary"
    | "buffer";

  declare interface NodeRSA$KeyComponentsPrivate {
    n: Buffer;
    e: Buffer | number;
    d: Buffer;
    p: Buffer;
    q: Buffer;
    dmp1: Buffer;
    dmq1: Buffer;
    coeff: Buffer;
  }

  declare interface NodeRSA$KeyComponentsPublic {
    n: Buffer;
    e: Buffer | number;
  }

  declare interface NodeRSA$KeyBits {
    /**
     * The length of the key in bits.
     */
    b: number;
  }

  declare interface NodeRSA$AdvancedEncryptionSchemePKCS1 {
    scheme: "pkcs1";
    padding: number;
  }

  declare interface NodeRSA$AdvancedEncryptionSchemePKCS1OAEP {
    scheme: "pkcs1_oaep";
    hash: NodeRSA$HashingAlgorithm;

    /**
     * Mask generation function.
     */
    mgf?: (
      data: Buffer,
      length: number,
      hash: NodeRSA$HashingAlgorithm
    ) => Buffer;
  }

  declare type NodeRSA$AdvancedEncryptionScheme =
    | NodeRSA$AdvancedEncryptionSchemePKCS1
    | NodeRSA$AdvancedEncryptionSchemePKCS1OAEP;

  declare interface NodeRSA$AdvancedSigningSchemePSS {
    scheme: "pss";
    hash: NodeRSA$HashingAlgorithm;
    saltLength: number;
  }

  declare interface NodeRSA$AdvancedSigningSchemePKCS1 {
    scheme: "pkcs1";
    hash: NodeRSA$HashingAlgorithm;
  }

  declare type NodeRSA$AdvancedSigningScheme =
    | NodeRSA$AdvancedSigningSchemePSS
    | NodeRSA$AdvancedSigningSchemePKCS1;

  declare interface NodeRSA$Options {
    /**
     * Working environment. (auto detects by default)
     */
    environment?: "browser" | "node";

    /**
     * Padding scheme for encrypt/decrypt. Default is 'pkcs1_oaep'.
     */
    encryptionScheme?:
      | NodeRSA$EncryptionScheme
      | NodeRSA$AdvancedEncryptionScheme;

    /**
     * scheme used for signing and verifying.. Default 'pkcs1-sha256', or, if chosen pss: 'pss-sha1'.
     */
    signingScheme?:
      | NodeRSA$SigningScheme
      | NodeRSA$SigningSchemeHash
      | NodeRSA$AdvancedSigningScheme;
  }
  declare module.exports: typeof NodeRSA;
}
