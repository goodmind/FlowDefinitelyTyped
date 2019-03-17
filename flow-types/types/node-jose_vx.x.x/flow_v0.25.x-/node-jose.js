declare module "node-jose" {
  declare export function canYouSee(
    ks: JWK$Key | JWK$KeyStore,
    opts: { [key: string]: any }
  ): JWS$Verifier;

  declare var JWA: typeof npm$namespace$JWA;

  declare var npm$namespace$JWA: {
    decrypt: typeof JWA$decrypt,
    derive: typeof JWA$derive,
    digest: typeof JWA$digest,
    encrypt: typeof JWA$encrypt,
    sign: typeof JWA$sign,
    verify: typeof JWA$verify
  };
  declare interface JWA$DecryptEncryptOptions {
    aad?: Buffer;
    adata?: Buffer;
    iv?: Buffer;
    tag?: Buffer;
    mac?: Buffer;
    epu?: Buffer;
    epv?: Buffer;
    kdata?: Buffer;
    epk?: Buffer;
    enc?: string;
    alg?: string;
    apu?: Buffer;
    apv?: Buffer;
    p2s?: Buffer;
    p2c?: number;
  }

  declare interface JWA$DeriveOptions {
    length?: number;
    otherInfo?: Buffer;
    public?: Buffer;
    hash?: Buffer;
    salt?: Buffer;
    info?: Buffer;
  }

  declare interface JWA$EncryptReturn {
    data: Buffer;
    tag?: Buffer;
  }

  declare interface JWA$SignReturn {
    data: Buffer;
    mac: Buffer;
  }

  declare interface JWA$SignVerifyOptions {
    loose?: boolean;
  }

  declare interface JWA$VerifyReturn {
    data: Buffer;
    mac: Buffer;
    valid: boolean;
  }

  declare function JWA$decrypt(
    alg: string,
    key: string | Buffer,
    cdata: string | Buffer,
    props?: JWA$DecryptEncryptOptions
  ): Promise<Buffer>;

  declare function JWA$derive(
    alg: string,
    key: string | Buffer,
    props?: JWA$DeriveOptions
  ): Promise<Buffer>;

  declare function JWA$digest(
    alg: string,
    data: string | Buffer,
    props?: any
  ): Promise<Buffer>;

  declare function JWA$encrypt(
    alg: string,
    key: string | Buffer,
    pdata: string | Buffer,
    props?: JWA$DecryptEncryptOptions
  ): Promise<JWA$EncryptReturn>;

  declare function JWA$sign(
    alg: string,
    key: string | Buffer,
    pdata: string | Buffer,
    props: JWA$SignVerifyOptions
  ): Promise<JWA$SignReturn>;

  declare function JWA$verify(
    alg: string,
    key: string | Buffer,
    pdata: string | Buffer,
    mac: string | Buffer,
    props: JWA$SignVerifyOptions
  ): Promise<JWA$VerifyReturn>;

  declare var JWE: typeof npm$namespace$JWE;

  declare var npm$namespace$JWE: {
    createEncrypt: typeof JWE$createEncrypt,
    createDecrypt: typeof JWE$createDecrypt
  };
  declare function JWE$createEncrypt(keys: JWK$Key | JWK$Key[]): JWE$Encryptor;

  declare function JWE$createEncrypt(
    options: {
      format?: "compact" | "flattened",
      zip?: boolean,
      fields?: { [key: string]: any }
    },
    key: JWK$Key
  ): JWE$Encryptor;

  declare function JWE$createDecrypt(
    key: JWK$Key | JWK$KeyStore,
    opts?: any
  ): JWE$Decryptor;

  declare interface JWE$Encryptor {
    update(input: any): this;
    final(): Promise<string>;
  }

  declare interface JWE$Decryptor {
    decrypt(input: string): Promise<JWE$DecryptResult>;
  }

  declare interface JWE$DecryptResult {
    /**
     * an array of the member names from the "protected" member
     */
    protected: string[];

    /**
     * the decrypted content (alternate)
     */
    plaintext: Buffer;
  }
  declare var JWK: typeof npm$namespace$JWK;

  declare var npm$namespace$JWK: {
    asKey: typeof JWK$asKey,
    asKeyStore: typeof JWK$asKeyStore,
    createKey: typeof JWK$createKey,
    createKeyStore: typeof JWK$createKeyStore,
    isKey: typeof JWK$isKey,
    isKeyStore: typeof JWK$isKeyStore,
    MODE_DECRYPT: typeof JWK$MODE_DECRYPT,
    MODE_ENCRYPT: typeof JWK$MODE_ENCRYPT,
    MODE_SIGN: typeof JWK$MODE_SIGN,
    MODE_UNWRAP: typeof JWK$MODE_UNWRAP,
    MODE_VERIFY: typeof JWK$MODE_VERIFY,
    MODE_WRAP: typeof JWK$MODE_WRAP
  };
  declare var JWK$MODE_DECRYPT: string;

  declare var JWK$MODE_ENCRYPT: string;

  declare var JWK$MODE_SIGN: string;

  declare var JWK$MODE_UNWRAP: string;

  declare var JWK$MODE_VERIFY: string;

  declare var JWK$MODE_WRAP: string;

  declare function JWK$asKey(
    key: string | Buffer | { [key: string]: any } | JWK$RawKey,
    form?:
      | "json"
      | "private"
      | "pkcs8"
      | "public"
      | "spki"
      | "pkix"
      | "x509"
      | "pem"
  ): Promise<JWK$Key>;

  /**
   * To import a JWK-set as a keystore
   */
  declare function JWK$asKeyStore(
    ks: { [key: string]: any } | string
  ): Promise<JWK$KeyStore>;

  declare function JWK$createKey(
    kty: any,
    size: any,
    props: any
  ): Promise<JWK$Key>;

  /**
   * To create an empty keystore
   */
  declare function JWK$createKeyStore(): JWK$KeyStore;

  declare function JWK$isKey(input: any): boolean;

  declare function JWK$isKeyStore(input: any): boolean;

  declare type JWK$KeyUse = "sig" | "enc" | "desc";

  declare interface JWK$JWEEncryptor {
    update(input: any): this;
    final(): Promise<string>;
  }

  declare interface JWK$RawKey {
    alg: string;
    kty: string;
    use: JWK$KeyUse;
    e: string;
    n: string;
  }

  declare interface JWK$KeyStoreGetFilter {
    kty?: string;
    use?: JWK$KeyUse;
    alg?: string;
  }

  declare type JWK$KeyStoreGetOptions = {
    kid: string
  } & JWK$KeyStoreGetFilter;

  declare interface JWK$KeyStore {
    /**
     * To export the public keys of a keystore as a JWK-set
     */
    toJSON(exportPrivateKeys?: boolean): { [key: string]: any };

    /**
     * To retrieve a key from a keystore
     */
    get(kid: string, filter?: JWK$KeyStoreGetFilter): JWK$RawKey;
    get(options: JWK$KeyStoreGetOptions): JWK$RawKey;
    all(options?: $Shape<JWK$KeyStoreGetOptions>): JWK$RawKey[];
    add(key: JWK$RawKey): Promise<JWK$Key>;

    /**
     * @param key String serialization of a JSON JWK/(base64-encoded) PEM/(binary-encoded) DER
     * Buffer of a JSON JWK/(base64-encoded) PEM/(binary-encoded) DER
     * @param form is either a:
     * - "json" for a JSON stringified JWK
     * - "private" for a DER encoded 'raw' private key
     * - "pkcs8" for a DER encoded (unencrypted!) PKCS8 private key
     * - "public" for a DER encoded SPKI public key (alternate to 'spki')
     * - "spki" for a DER encoded SPKI public key
     * - "pkix" for a DER encoded PKIX X.509 certificate
     * - "x509" for a DER encoded PKIX X.509 certificate
     * - "pem" for a PEM encoded of PKCS8 / SPKI / PKIX
     */
    add(
      key: string | Buffer | JWK$Key | { [key: string]: any },
      form?:
        | "json"
        | "private"
        | "pkcs8"
        | "public"
        | "spki"
        | "pkix"
        | "x509"
        | "pem"
    ): Promise<JWK$Key>;
    generate(
      kty: string,
      size?: string | number,
      props?: any
    ): Promise<JWK$Key>;
    remove(key: JWK$Key): void;
  }

  declare interface JWK$Key {
    keystore: JWK$KeyStore;
    length: number;
    kty: string;
    kid: string;
    use: JWK$KeyUse;
    alg: string;
    toPEM(isPrivate?: boolean): string;
    toJSON(isPrivate?: boolean, excluded?: string[]): { [key: string]: any };
    thumbprint(hash?: string): Promise<string>;
  }
  declare var JWS: typeof npm$namespace$JWS;

  declare var npm$namespace$JWS: {
    createSign: typeof JWS$createSign,
    createVerify: typeof JWS$createVerify
  };
  declare function JWS$createSign(keys: JWK$Key | JWK$Key[]): JWS$Signer;

  declare function JWS$createSign(
    options: {
      format?: "compact" | "flattened",
      alg?: string,
      compact?: boolean,
      fields?: { [key: string]: any }
    },
    key: JWK$Key | JWK$Key[]
  ): JWS$Signer;

  /**
   * Using a keystore.
   */
  declare function JWS$createVerify(
    input?: string | JWK$Key | JWK$KeyStore | { [key: string]: any },
    opts?: {
      allowEmbeddedKey?: boolean,
      algorithms?: string[],
      handlers?: any
    }
  ): JWS$Verifier;

  declare interface JWS$CreateSignResult {
    signResult: { [key: string]: any };
  }

  declare interface JWS$Signer {
    update(input: Buffer | string, encoding?: string): this;
    final(): Promise<JWS$CreateSignResult>;
  }

  declare interface JWS$BaseResult {
    /**
     * the combined 'protected' and 'unprotected' header members
     */
    header: { [key: string]: any };

    /**
     * the signed content
     */
    payload: Buffer;

    /**
     * The key used to verify the signature
     */
    key: JWK$Key;
    protected: string[];
  }

  declare type JWS$VerificationResult = {
    /**
     * the verified signature
     */
    signature: Buffer | string
  } & JWS$BaseResult;

  declare interface JWS$Verifier {
    verify(
      input: string,
      opts?: {
        allowEmbeddedKey?: boolean
      }
    ): Promise<JWS$VerificationResult>;
  }

  declare interface JWS$Exp {
    complete(jws: any): any;
  }

  declare interface JWS$VerifyOptions {
    allowEmbeddedKey?: boolean;
    algorithms?: string[];
    handlers: {
      exp: boolean | JWS$Exp
    };
  }
  declare export function parse(
    input: Buffer | string | { [key: string]: any }
  ): parse$ParseReturn;

  declare var parse: typeof npm$namespace$parse;

  declare var npm$namespace$parse: {
    compact: typeof parse$compact,
    json: typeof parse$json
  };
  declare interface parse$ParseReturn {
    type: "JWS" | "JWE";
    format: "compact" | "json";
    input: Buffer | string | { [key: string]: any };
    header: { [key: string]: any };
    perform: (
      ks: JWK$KeyStore
    ) => Promise<JWE$DecryptResult> | Promise<JWS$VerificationResult>;
  }

  declare function parse$compact(
    input: Buffer | string | { [key: string]: any }
  ): parse$ParseReturn;

  declare function parse$json(
    input: Buffer | string | { [key: string]: any }
  ): parse$ParseReturn;

  declare var util: typeof npm$namespace$util;

  declare var npm$namespace$util: {
    asBuffer: typeof util$asBuffer,
    randomBytes: typeof util$randomBytes,

    base64url: typeof npm$namespace$util$base64url,
    utf8: typeof npm$namespace$util$utf8
  };
  declare function util$asBuffer(
    input: string | Buffer,
    encoding?: string
  ): Buffer;

  declare function util$randomBytes(len: number): Buffer;

  declare var npm$namespace$util$base64url: {
    decode: typeof util$base64url$decode,
    encode: typeof util$base64url$encode
  };
  declare function util$base64url$decode(base64url: string): string;

  declare function util$base64url$encode(
    buffer: string | Buffer,
    encoding?: string
  ): string;

  declare var npm$namespace$util$utf8: {
    decode: typeof util$utf8$decode,
    encode: typeof util$utf8$encode
  };
  declare function util$utf8$decode(input: string): string;

  declare function util$utf8$encode(input: string): string;
}
