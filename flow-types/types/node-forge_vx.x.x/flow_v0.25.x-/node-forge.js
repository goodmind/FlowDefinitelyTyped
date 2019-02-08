declare module "node-forge" {
  declare type Byte = number;
  declare type Bytes = string;
  declare type Hex = string;
  declare type Base64 = string;
  declare type Utf8 = string;
  declare type OID = string;
  declare type Encoding = "raw" | "utf8";
  declare class jsbn$BigInteger {
    data: number[];
    t: number;
    s: number;
    toString(): string;
  }

  declare var npm$namespace$pem: {
    encode: typeof pem$encode,
    decode: typeof pem$decode
  };
  declare interface pem$EncodeOptions {
    maxline?: number;
  }

  declare interface pem$ObjectPEM {
    type: string;
    body: Bytes;
    procType?: any;
    contentDomain?: any;
    dekInfo?: any;
    headers?: any[];
  }

  declare function pem$encode(
    msg: pem$ObjectPEM,
    options?: pem$EncodeOptions
  ): string;

  declare function pem$decode(str: string): pem$ObjectPEM[];

  declare var npm$namespace$pki: {
    pemToDer: typeof pki$pemToDer,
    privateKeyToPem: typeof pki$privateKeyToPem,
    privateKeyInfoToPem: typeof pki$privateKeyInfoToPem,
    publicKeyToPem: typeof pki$publicKeyToPem,
    publicKeyFromPem: typeof pki$publicKeyFromPem,
    privateKeyFromPem: typeof pki$privateKeyFromPem,
    certificateToPem: typeof pki$certificateToPem,
    certificateFromPem: typeof pki$certificateFromPem,
    createCaStore: typeof pki$createCaStore,
    verifyCertificateChain: typeof pki$verifyCertificateChain,
    certificateFromAsn1: typeof pki$certificateFromAsn1,
    decryptRsaPrivateKey: typeof pki$decryptRsaPrivateKey,
    createCertificate: typeof pki$createCertificate,
    certificationRequestToPem: typeof pki$certificationRequestToPem,
    certificationRequestFromPem: typeof pki$certificationRequestFromPem,
    createCertificationRequest: typeof pki$createCertificationRequest,
    publicKeyToAsn1: typeof pki$publicKeyToAsn1,
    publicKeyToRSAPublicKey: typeof pki$publicKeyToRSAPublicKey,
    oids: typeof pki$oids
  };
  declare type pki$PEM = string;

  declare type pki$PublicKey = rsapki$PublicKey | ed25519ed25519$Key;

  declare type pki$PrivateKey = rsapki$PrivateKey | ed25519ed25519$Key;

  declare interface pki$KeyPair {
    publicKey: pki$PublicKey;
    privateKey: pki$PrivateKey;
  }

  declare function pki$pemToDer(pem: pki$PEM): utilutil$ByteStringBuffer;

  declare function pki$privateKeyToPem(
    key: pki$PrivateKey,
    maxline?: number
  ): pki$PEM;

  declare function pki$privateKeyInfoToPem(
    key: Bytes,
    maxline?: number
  ): pki$PEM;

  declare function pki$publicKeyToPem(
    key: pki$PublicKey,
    maxline?: number
  ): pki$PEM;

  declare function pki$publicKeyFromPem(pem: pki$PEM): pki$PublicKey;

  declare function pki$privateKeyFromPem(pem: pki$PEM): pki$PrivateKey;

  declare function pki$certificateToPem(
    cert: pki$Certificate,
    maxline?: number
  ): pki$PEM;

  declare function pki$certificateFromPem(
    pem: pki$PEM,
    computeHash?: boolean,
    strict?: boolean
  ): pki$Certificate;

  declare function pki$createCaStore(
    certs?: $ReadOnlyArray<pki$Certificate | pkipki$PEM>
  ): pki$CAStore;

  declare function pki$verifyCertificateChain(
    caStore: pki$CAStore,
    chain: pki$Certificate[],
    customVerifyCallback?: (
      verified: boolean | string,
      depth: number,
      chain: pki$Certificate[]
    ) => boolean
  ): boolean;

  declare interface pki$oids {
    [key: string]: string;
  }

  declare var pki$oids: pki$oids;

  declare var npm$namespace$ed25519: {
    generateKeyPair: typeof ed25519$generateKeyPair,
    publicKeyFromPrivateKey: typeof ed25519$publicKeyFromPrivateKey,
    sign: typeof ed25519$sign,
    verify: typeof ed25519$verify
  };
  declare type ed25519$Key = ArrayBuffer;

  declare type ed25519$NativeBuffer = Buffer | Uint8Array;

  declare var npm$namespace$constants: {
    PUBLIC_KEY_BYTE_LENGTH: typeof constants$PUBLIC_KEY_BYTE_LENGTH,
    PRIVATE_KEY_BYTE_LENGTH: typeof constants$PRIVATE_KEY_BYTE_LENGTH,
    SEED_BYTE_LENGTH: typeof constants$SEED_BYTE_LENGTH,
    SIGN_BYTE_LENGTH: typeof constants$SIGN_BYTE_LENGTH,
    HASH_BYTE_LENGTH: typeof constants$HASH_BYTE_LENGTH
  };
  declare var constants$PUBLIC_KEY_BYTE_LENGTH: any; // 32;

  declare var constants$PRIVATE_KEY_BYTE_LENGTH: any; // 64;

  declare var constants$SEED_BYTE_LENGTH: any; // 32;

  declare var constants$SIGN_BYTE_LENGTH: any; // 64;

  declare var constants$HASH_BYTE_LENGTH: any; // 64;

  declare function ed25519$generateKeyPair(options?: {
    seed?: Buffer | Uint8Array | string
  }): {
    publicKey: ed25519$NativeBuffer,
    privateKey: ed25519$NativeBuffer
  };

  declare function ed25519$publicKeyFromPrivateKey(options: {
    privateKey: ed25519$NativeBuffer
  }): ed25519$NativeBuffer;

  declare function ed25519$sign(options: {
    message: string,
    encoding: string,
    privateKey: ed25519$NativeBuffer
  }): ed25519$NativeBuffer;

  declare function ed25519$verify(options: {
    message: string,
    encoding: string,
    signature: Buffer | Uint8Array | utilutil$ByteBuffer | string,
    publicKey: ed25519$NativeBuffer
  }): boolean;

  declare var npm$namespace$rsa: {
    setPublicKey: typeof rsa$setPublicKey,
    generateKeyPair: typeof rsa$generateKeyPair
  };
  declare type rsa$EncryptionScheme =
    | "RSAES-PKCS1-V1_5"
    | "RSA-OAEP"
    | "RAW"
    | "NONE"
    | null;

  declare type rsa$SignatureScheme =
    | "RSASSA-PKCS1-V1_5"
    | psspss$PSS
    | "NONE"
    | null;

  declare interface rsa$PublicKey {
    n: jsbnjsbn$BigInteger;
    e: jsbnjsbn$BigInteger;
    encrypt(
      data: Bytes,
      scheme?: rsa$EncryptionScheme,
      schemeOptions?: any
    ): Bytes;
    ed25519$verify(
      digest: Bytes,
      signature: Bytes,
      scheme?: rsa$SignatureScheme
    ): boolean;
  }

  declare interface rsa$PrivateKey {
    n: jsbnjsbn$BigInteger;
    e: jsbnjsbn$BigInteger;
    d: jsbnjsbn$BigInteger;
    p: jsbnjsbn$BigInteger;
    q: jsbnjsbn$BigInteger;
    dP: jsbnjsbn$BigInteger;
    dQ: jsbnjsbn$BigInteger;
    qInv: jsbnjsbn$BigInteger;
    decrypt(
      data: Bytes,
      scheme?: rsa$EncryptionScheme,
      schemeOptions?: any
    ): Bytes;
    ed25519$sign(md: mdmd$MessageDigest, scheme?: rsa$SignatureScheme): Bytes;
  }

  declare interface rsa$KeyPair {
    publicKey: rsa$PublicKey;
    privateKey: rsa$PrivateKey;
  }

  declare interface rsa$GenerateKeyPairOptions {
    bits?: number;
    e?: number;
    workerScript?: string;
    workers?: number;
    workLoad?: number;
    prng?: any;
    algorithm?: string;
  }

  declare function rsa$setPublicKey(n: any, e: any): any;

  declare function rsa$generateKeyPair(
    bits?: number,
    e?: number,
    callback?: (err: Error, keypair: rsa$KeyPair) => void
  ): rsa$KeyPair;

  declare function rsa$generateKeyPair(
    options?: rsa$GenerateKeyPairOptions,
    callback?: (err: Error, keypair: rsa$KeyPair) => void
  ): rsa$KeyPair;

  declare interface pki$CertificateFieldOptions {
    name?: string;
    type?: string;
    shortName?: string;
  }

  declare type pki$CertificateField = {
    valueConstructed?: boolean,
    valueTagClass?: asn1asn1$Class,
    value?: any[] | string,
    extensions?: any[]
  } & pki$CertificateFieldOptions;

  declare interface pki$Certificate {
    version: number;
    serialNumber: string;
    signature: any;
    siginfo: any;
    validity: {
      notBefore: Date,
      notAfter: Date
    };
    issuer: {
      getField(sn: string | pki$CertificateFieldOptions): any,
      addField(attr: pki$CertificateField): void,
      attributes: any[],
      hash: any
    };
    subject: {
      getField(sn: string | pki$CertificateFieldOptions): any,
      addField(attr: pki$CertificateField): void,
      attributes: any[],
      hash: any
    };
    extensions: any[];
    privateKey: rsa$PrivateKey;
    publicKey: rsa$PublicKey;
    md: any;

    /**
     * Sets the subject of this certificate.
     * @param attrs the array of subject attributes to use.
     * @param uniqueId an optional a unique ID to use.
     */
    setSubject(attrs: pki$CertificateField[], uniqueId?: string): void;

    /**
     * Sets the issuer of this certificate.
     * @param attrs the array of subject attributes to use.
     * @param uniqueId an optional a unique ID to use.
     */
    setIssuer(attrs: pki$CertificateField[], uniqueId?: string): void;

    /**
     * Sets the extensions of this certificate.
     * @param exts the array of extensions to use.
     */
    setExtensions(exts: any[]): void;

    /**
 * Gets an extension by its name or id.
 * @param options the name to use or an object with:
name the name to use.
id the id to use.
 * @return the extension or null if not found.
 */
    getExtension(
      options:
        | string
        | {
            name: string
          }
        | {
            id: number
          }
    ): {} | void;

    /**
     * Signs this certificate using the given private key.
     * @param key the private key to sign with.
     * @param md the message digest object to use (defaults to forge.md.sha1).
     */
    ed25519$sign(key: pkirsa$PrivateKey, md?: mdmd$MessageDigest): void;

    /**
     * Attempts verify the signature on the passed certificate using this
     * certificate's public key.
     * @param child the certificate to verify.
     * @return true if verified, false if not.
     */
    ed25519$verify(child: pki$Certificate): boolean;
  }

  declare interface pki$CAStore {
    addCertificate(cert: pki$Certificate | string): void;
    hasCertificate(cert: pki$Certificate | string): boolean;
    removeCertificate(cert: pki$Certificate | string): pki$Certificate | null;
    listAllCertificates(): pkipki$Certificate[];
    getIssuer(subject: pki$Certificate): pki$Certificate | null;
    getBySubject(subject: string): pki$Certificate | null;
  }

  declare function pki$certificateFromAsn1(
    obj: asn1asn1$Asn1,
    computeHash?: boolean
  ): pki$Certificate;

  declare function pki$decryptRsaPrivateKey(
    pem: pki$PEM,
    passphrase?: string
  ): rsa$PrivateKey;

  declare function pki$createCertificate(): pki$Certificate;

  declare function pki$certificationRequestToPem(
    cert: pki$Certificate,
    maxline?: number
  ): pki$PEM;

  declare function pki$certificationRequestFromPem(
    pem: pki$PEM,
    computeHash?: boolean,
    strict?: boolean
  ): pki$Certificate;

  declare function pki$createCertificationRequest(): pki$Certificate;

  declare function pki$publicKeyToAsn1(publicKey: rsa$PublicKey): any;

  declare function pki$publicKeyToRSAPublicKey(publicKey: rsa$PublicKey): any;

  declare var npm$namespace$random: {
    getBytes: typeof random$getBytes,
    getBytesSync: typeof random$getBytesSync,
    createInstance: typeof random$createInstance
  };
  declare function random$getBytes(
    count: number,
    callback?: (bytes: Bytes) => any
  ): Bytes;

  declare function random$getBytesSync(count: number): Bytes;

  declare type random$CB = (_: any, seed: string) => void;

  declare interface random$Random {
    seedFileSync: (needed: number) => string;
    seedFile: (needed: number, cb: random$CB) => void;
  }

  declare function random$createInstance(): random$Random;

  declare var npm$namespace$ssh: {
    privateKeyToOpenSSH: typeof ssh$privateKeyToOpenSSH,
    privateKeyToPutty: typeof ssh$privateKeyToPutty,
    publicKeyToOpenSSH: typeof ssh$publicKeyToOpenSSH,
    getPublicKeyFingerprint: typeof ssh$getPublicKeyFingerprint
  };
  declare interface ssh$FingerprintOptions {
    /**
     * @description the delimiter to use between bytes for `hex` encoded output
     */
    delimiter?: string;

    /**
     * @description if not specified, the function will return `ByteStringBuffer`
     */
    encoding?: "hex" | "binary";

    /**
     * @description if not specified defaults to `md.md5`
     */
    md?: mdmd$MessageDigest;
  }

  /**
   * @description Encodes a private RSA key as an OpenSSH file
   */
  declare function ssh$privateKeyToOpenSSH(
    privateKey: pkirsa$PrivateKey,
    passphrase?: string
  ): string;

  /**
   * @description Encodes (and optionally encrypts) a private RSA key as a Putty PPK file
   */
  declare function ssh$privateKeyToPutty(
    privateKey: pkirsa$PrivateKey,
    passphrase?: string,
    comment?: string
  ): string;

  /**
   * @description Encodes a public RSA key as an OpenSSH file
   */
  declare function ssh$publicKeyToOpenSSH(
    publicKey: pkirsa$PublicKey,
    comment?: string
  ): string | pkipki$PEM;

  /**
   * @description Gets the SSH fingerprint for the given public key
   */
  declare function ssh$getPublicKeyFingerprint(
    publicKey: pkirsa$PublicKey,
    options?: ssh$FingerprintOptions
  ): utilutil$ByteStringBuffer | Hex | string;

  declare var npm$namespace$asn1: {
    create: typeof asn1$create,
    fromDer: typeof asn1$fromDer,
    toDer: typeof asn1$toDer,
    oidToDer: typeof asn1$oidToDer,
    derToOid: typeof asn1$derToOid
  };
  declare class asn1$Class {
    constructor(...args: empty): mixed;
    static +UNIVERSAL: Class<asn1$Class__UNIVERSAL> & asn1$Class__UNIVERSAL & 0; // 0
    static +APPLICATION: Class<asn1$Class__APPLICATION> &
      asn1$Class__APPLICATION &
      64; // 64
    static +CONTEXT_SPECIFIC: Class<asn1$Class__CONTEXT_SPECIFIC> &
      asn1$Class__CONTEXT_SPECIFIC &
      128; // 128
    static +PRIVATE: Class<asn1$Class__PRIVATE> & asn1$Class__PRIVATE & 192; // 192
  }

  declare class asn1$Class__UNIVERSAL mixins asn1$Class {}
  declare class asn1$Class__APPLICATION mixins asn1$Class {}
  declare class asn1$Class__CONTEXT_SPECIFIC mixins asn1$Class {}
  declare class asn1$Class__PRIVATE mixins asn1$Class {}

  declare class asn1$Type {
    constructor(...args: empty): mixed;
    static +NONE: Class<asn1$Type__NONE> & asn1$Type__NONE & 0; // 0
    static +BOOLEAN: Class<asn1$Type__BOOLEAN> & asn1$Type__BOOLEAN & 1; // 1
    static +INTEGER: Class<asn1$Type__INTEGER> & asn1$Type__INTEGER & 2; // 2
    static +BITSTRING: Class<asn1$Type__BITSTRING> & asn1$Type__BITSTRING & 3; // 3
    static +OCTETSTRING: Class<asn1$Type__OCTETSTRING> &
      asn1$Type__OCTETSTRING &
      4; // 4
    static +NULL: Class<asn1$Type__NULL> & asn1$Type__NULL & 5; // 5
    static +OID: Class<asn1$Type__OID> & asn1$Type__OID & 6; // 6
    static +ODESC: Class<asn1$Type__ODESC> & asn1$Type__ODESC & 7; // 7
    static +EXTERNAL: Class<asn1$Type__EXTERNAL> & asn1$Type__EXTERNAL & 8; // 8
    static +REAL: Class<asn1$Type__REAL> & asn1$Type__REAL & 9; // 9
    static +ENUMERATED: Class<asn1$Type__ENUMERATED> &
      asn1$Type__ENUMERATED &
      10; // 10
    static +EMBEDDED: Class<asn1$Type__EMBEDDED> & asn1$Type__EMBEDDED & 11; // 11
    static +UTF8: Class<asn1$Type__UTF8> & asn1$Type__UTF8 & 12; // 12
    static +ROID: Class<asn1$Type__ROID> & asn1$Type__ROID & 13; // 13
    static +SEQUENCE: Class<asn1$Type__SEQUENCE> & asn1$Type__SEQUENCE & 16; // 16
    static +SET: Class<asn1$Type__SET> & asn1$Type__SET & 17; // 17
    static +PRINTABLESTRING: Class<asn1$Type__PRINTABLESTRING> &
      asn1$Type__PRINTABLESTRING &
      19; // 19
    static +IA5STRING: Class<asn1$Type__IA5STRING> & asn1$Type__IA5STRING & 22; // 22
    static +UTCTIME: Class<asn1$Type__UTCTIME> & asn1$Type__UTCTIME & 23; // 23
    static +GENERALIZEDTIME: Class<asn1$Type__GENERALIZEDTIME> &
      asn1$Type__GENERALIZEDTIME &
      24; // 24
    static +BMPSTRING: Class<asn1$Type__BMPSTRING> & asn1$Type__BMPSTRING & 30; // 30
  }

  declare class asn1$Type__NONE mixins asn1$Type {}
  declare class asn1$Type__BOOLEAN mixins asn1$Type {}
  declare class asn1$Type__INTEGER mixins asn1$Type {}
  declare class asn1$Type__BITSTRING mixins asn1$Type {}
  declare class asn1$Type__OCTETSTRING mixins asn1$Type {}
  declare class asn1$Type__NULL mixins asn1$Type {}
  declare class asn1$Type__OID mixins asn1$Type {}
  declare class asn1$Type__ODESC mixins asn1$Type {}
  declare class asn1$Type__EXTERNAL mixins asn1$Type {}
  declare class asn1$Type__REAL mixins asn1$Type {}
  declare class asn1$Type__ENUMERATED mixins asn1$Type {}
  declare class asn1$Type__EMBEDDED mixins asn1$Type {}
  declare class asn1$Type__UTF8 mixins asn1$Type {}
  declare class asn1$Type__ROID mixins asn1$Type {}
  declare class asn1$Type__SEQUENCE mixins asn1$Type {}
  declare class asn1$Type__SET mixins asn1$Type {}
  declare class asn1$Type__PRINTABLESTRING mixins asn1$Type {}
  declare class asn1$Type__IA5STRING mixins asn1$Type {}
  declare class asn1$Type__UTCTIME mixins asn1$Type {}
  declare class asn1$Type__GENERALIZEDTIME mixins asn1$Type {}
  declare class asn1$Type__BMPSTRING mixins asn1$Type {}

  declare interface asn1$Asn1 {
    tagClass: asn1$Class;
    type: asn1$Type;
    constructed: boolean;
    composed: boolean;
    value: Bytes | asn1$Asn1[];
  }

  declare function asn1$create(
    tagClass: asn1$Class,
    type: asn1$Type,
    constructed: boolean,
    value: Bytes | asn1$Asn1[]
  ): asn1$Asn1;

  declare function asn1$fromDer(
    bytes: Bytes | utilutil$ByteBuffer,
    strict?: boolean
  ): asn1$Asn1;

  declare function asn1$toDer(obj: asn1$Asn1): utilutil$ByteBuffer;

  declare function asn1$oidToDer(oid: OID): utilutil$ByteStringBuffer;

  declare function asn1$derToOid(der: utilutil$ByteStringBuffer): OID;

  declare var npm$namespace$util: {
    isArray: typeof util$isArray,
    isArrayBuffer: typeof util$isArrayBuffer,
    isArrayBufferView: typeof util$isArrayBufferView,
    fillString: typeof util$fillString,
    xorBytes: typeof util$xorBytes,
    hexToBytes: typeof util$hexToBytes,
    bytesToHex: typeof util$bytesToHex,
    int32ToBytes: typeof util$int32ToBytes,
    encode64: typeof util$encode64,
    decode64: typeof util$decode64,
    encodeUtf8: typeof util$encodeUtf8,
    decodeUtf8: typeof util$decodeUtf8,
    createBuffer: typeof util$createBuffer
  };
  declare function util$isArray(x: any): boolean;

  declare function util$isArrayBuffer(x: any): boolean;

  declare function util$isArrayBufferView(x: any): boolean;

  declare interface util$ArrayBufferView {
    buffer: ArrayBuffer;
    byteLength: number;
  }

  declare type util$ByteBuffer = util$ByteStringBuffer;

  declare class util$ByteStringBuffer {
    constructor(
      bytes?: Bytes | ArrayBuffer | util$ArrayBufferView | util$ByteStringBuffer
    ): this;
    data: string;
    read: number;
    length(): number;
    isEmpty(): boolean;
    putByte(byte: Byte): util$ByteStringBuffer;
    fillWithByte(byte: Byte, n: number): util$ByteStringBuffer;
    putBytes(bytes: Bytes): util$ByteStringBuffer;
    putString(str: string): util$ByteStringBuffer;
    putInt16(int: number): util$ByteStringBuffer;
    putInt24(int: number): util$ByteStringBuffer;
    putInt32(int: number): util$ByteStringBuffer;
    putInt16Le(int: number): util$ByteStringBuffer;
    putInt24Le(int: number): util$ByteStringBuffer;
    putInt32Le(int: number): util$ByteStringBuffer;
    putInt(int: number, numOfBits: number): util$ByteStringBuffer;
    putSignedInt(int: number, numOfBits: number): util$ByteStringBuffer;
    putBuffer(buffer: util$ByteStringBuffer): util$ByteStringBuffer;
    getByte(): number;
    getInt16(): number;
    getInt24(): number;
    getInt32(): number;
    getInt16Le(): number;
    getInt24Le(): number;
    getInt32Le(): number;
    getInt(numOfBits: number): number;
    getSignedInt(numOfBits: number): number;
    getBytes(count?: number): Bytes;
    bytes(count?: number): Bytes;
    at(index: number): Byte;
    setAt(index: number, byte: number): util$ByteStringBuffer;
    last(): Byte;
    copy(): util$ByteStringBuffer;
    compact(): util$ByteStringBuffer;
    clear(): util$ByteStringBuffer;
    truncate(): util$ByteStringBuffer;
    toHex(): Hex;
    toString(): string;
  }

  declare function util$fillString(char: string, count: number): string;

  declare function util$xorBytes(
    bytes1: string,
    bytes2: string,
    count: number
  ): string;

  declare function util$hexToBytes(hex: Hex): Bytes;

  declare function util$bytesToHex(bytes: Bytes): Hex;

  declare function util$int32ToBytes(int: number): Bytes;

  declare function util$encode64(bytes: Bytes, maxline?: number): Base64;

  declare function util$decode64(encoded: Base64): Bytes;

  declare function util$encodeUtf8(str: string): Utf8;

  declare function util$decodeUtf8(encoded: Utf8): string;

  declare function util$createBuffer(): util$ByteBuffer;

  declare function util$createBuffer(
    input: Bytes | ArrayBuffer | util$ArrayBufferView | util$ByteStringBuffer,
    encoding?: Encoding
  ): util$ByteBuffer;

  declare var npm$namespace$raw: {
    encode: typeof raw$encode,
    decode: typeof raw$decode
  };
  declare function raw$encode(x: Uint8Array): Bytes;

  declare function raw$decode(
    str: Bytes,
    output?: Uint8Array,
    offset?: number
  ): Uint8Array;

  declare var npm$namespace$hex: {
    encode: typeof hex$encode,
    decode: typeof hex$decode
  };
  declare function hex$encode(
    bytes: Bytes | ArrayBuffer | util$ArrayBufferView | util$ByteStringBuffer
  ): Hex;

  declare function hex$decode(
    hex: Hex,
    output?: Uint8Array,
    offset?: number
  ): Uint8Array;

  declare var npm$namespace$base64: {
    encode: typeof base64$encode,
    decode: typeof base64$decode
  };
  declare function base64$encode(input: Uint8Array, maxline?: number): Base64;

  declare function base64$decode(
    input: Base64,
    output?: Uint8Array,
    offset?: number
  ): Uint8Array;

  declare var npm$namespace$utf8: {
    encode: typeof utf8$encode,
    decode: typeof utf8$decode
  };
  declare function utf8$encode(
    str: string,
    output?: Uint8Array,
    offset?: number
  ): Uint8Array;

  declare function utf8$decode(bytes: Uint8Array): Utf8;

  declare var npm$namespace$utf16: {
    encode: typeof utf16$encode,
    decode: typeof utf16$decode
  };
  declare function utf16$encode(
    str: string,
    output?: Uint8Array,
    offset?: number
  ): Uint8Array;

  declare function utf16$decode(bytes: Uint8Array): string;

  declare var npm$namespace$pkcs12: {
    pkcs12FromAsn1: typeof pkcs12$pkcs12FromAsn1,
    toPkcs12Asn1: typeof pkcs12$toPkcs12Asn1,
    generateKey: typeof pkcs12$generateKey
  };
  declare interface pkcs12$BagsFilter {
    localKeyId?: string;
    localKeyIdHex?: string;
    friendlyName?: string;
    bagType?: string;
  }

  declare interface pkcs12$Bag {
    type: string;
    attributes: any;
    key?: pkirsa$PrivateKey;
    cert?: pkipki$Certificate;
    asn1: asn1asn1$Asn1;
  }

  declare interface pkcs12$Pkcs12Pfx {
    version: string;
    safeContents: [
      {
        encrypted: boolean,
        safeBags: pkcs12$Bag[]
      }
    ];
    getBags: (
      filter: pkcs12$BagsFilter
    ) => {
      [key: string]: pkcs12$Bag[] | void,
      localKeyId?: pkcs12$Bag[],
      friendlyName?: pkcs12$Bag[]
    };
    getBagsByFriendlyName: (
      fiendlyName: string,
      bagType: string
    ) => pkcs12$Bag[];
    getBagsByLocalKeyId: (localKeyId: string, bagType: string) => pkcs12$Bag[];
  }

  declare function pkcs12$pkcs12FromAsn1(
    obj: any,
    strict?: boolean,
    password?: string
  ): pkcs12$Pkcs12Pfx;

  declare function pkcs12$pkcs12FromAsn1(
    obj: any,
    password?: string
  ): pkcs12$Pkcs12Pfx;

  declare function pkcs12$toPkcs12Asn1(
    key: pkirsa$PrivateKey,
    cert: pkipki$Certificate | pkipki$Certificate[],
    password: string | null,
    options?: {
      algorithm?: "aes128" | "aes192" | "aes256" | "3des",
      count?: number,
      saltSize?: number,
      useMac?: boolean,
      localKeyId?: Hex,
      friendlyName?: string,
      generateLocalKeyId?: boolean
    }
  ): asn1asn1$Asn1;

  declare function pkcs12$generateKey(
    password: string | null | void,
    salt: utilutil$ByteBuffer,
    id: Byte,
    iter: number,
    n: number,
    md?: mdmd$MessageDigest
  ): utilutil$ByteBuffer;

  declare var npm$namespace$pkcs7: {
    createSignedData: typeof pkcs7$createSignedData
  };
  declare interface pkcs7$PkcsSignedData {
    content?: string | utilutil$ByteBuffer;
    contentInfo?: {
      value: any[]
    };
    addCertificate(certificate: pkipki$Certificate): void;
    addSigner(options: {
      key: string,
      certificate: pkipki$Certificate,
      digestAlgorithm: string,
      authenticatedAttributes: {
        type: string,
        value?: string
      }[]
    }): void;
    ed25519$sign(options?: {
      detached?: boolean
    }): void;
    toAsn1(): asn1asn1$Asn1;
  }

  declare function pkcs7$createSignedData(): pkcs7$PkcsSignedData;

  declare var npm$namespace$pkcs5: {
    pbkdf2: typeof pkcs5$pbkdf2
  };
  declare function pkcs5$pbkdf2(
    password: string,
    salt: string,
    iterations: number,
    keySize: number
  ): string;

  declare interface md$MessageDigest {
    update(msg: string, encoding?: Encoding): md$MessageDigest;
    digest(): utilutil$ByteStringBuffer;
  }

  declare var npm$namespace$sha1: {
    create: typeof sha1$create
  };
  declare function sha1$create(): md$MessageDigest;

  declare var npm$namespace$sha256: {
    create: typeof sha256$create
  };
  declare function sha256$create(): md$MessageDigest;

  declare var npm$namespace$sha512: {
    create: typeof sha512$create
  };
  declare function sha512$create(): md$MessageDigest;

  declare var npm$namespace$md5: {
    create: typeof md5$create
  };
  declare function md5$create(): md$MessageDigest;

  declare var npm$namespace$cipher: {
    createCipher: typeof cipher$createCipher,
    createDecipher: typeof cipher$createDecipher
  };
  declare type cipher$Algorithm =
    | "AES-ECB"
    | "AES-CBC"
    | "AES-CFB"
    | "AES-OFB"
    | "AES-CTR"
    | "AES-GCM"
    | "3DES-ECB"
    | "3DES-CBC"
    | "DES-ECB"
    | "DES-CBC";

  declare function cipher$createCipher(
    algorithm: cipher$Algorithm,
    payload: utilutil$ByteBuffer | Bytes
  ): cipher$BlockCipher;

  declare function cipher$createDecipher(
    algorithm: cipher$Algorithm,
    payload: utilutil$ByteBuffer | Bytes
  ): cipher$BlockCipher;

  declare interface cipher$StartOptions {
    iv?: Bytes;
    tag?: utilutil$ByteStringBuffer;
    tagLength?: number;
    additionalData?: string;
  }

  declare interface cipher$BlockCipher {
    start: (options?: cipher$StartOptions) => void;
    update: (payload: utilutil$ByteBuffer) => void;
    finish: () => boolean;
    output: utilutil$ByteStringBuffer;
    mode: cipher$Mode;
  }

  declare interface cipher$Mode {
    tag: utilutil$ByteStringBuffer;
  }

  declare var npm$namespace$pss: {
    create: typeof pss$create
  };
  declare type pss$PSS = any;

  declare function pss$create(any: any): pss$PSS;

  declare var npm$namespace$mgf1: {
    create: typeof mgf1$create
  };
  declare function mgf1$create(any: any): any;

  declare var npm$namespace$tls: {
    createSessionCache: typeof tls$createSessionCache,
    createConnection: typeof tls$createConnection,
    prf_tls1: typeof tls$prf_tls1,
    hmac_sha1: typeof tls$hmac_sha1,
    Versions: typeof tls$Versions,
    SupportedVersions: typeof tls$SupportedVersions,
    Version: typeof tls$Version,
    MaxFragment: typeof tls$MaxFragment,
    CipherSuites: typeof tls$CipherSuites
  };
  declare interface tls$ProtocolVersion {
    major: Byte;
    minor: Byte;
  }

  declare var tls$Versions: tls$ProtocolVersion[];

  declare var tls$SupportedVersions: tls$ProtocolVersion[];

  declare var tls$Version: tls$ProtocolVersion;

  declare var tls$MaxFragment: number;

  declare class tls$ConnectionEnd {
    constructor(...args: empty): mixed;
    static +server: Class<tls$ConnectionEnd__server> &
      tls$ConnectionEnd__server &
      0; // 0
    static +client: Class<tls$ConnectionEnd__client> &
      tls$ConnectionEnd__client &
      1; // 1
  }

  declare class tls$ConnectionEnd__server mixins tls$ConnectionEnd {}
  declare class tls$ConnectionEnd__client mixins tls$ConnectionEnd {}

  declare class tls$PRFAlgorithm {
    constructor(...args: empty): mixed;
    static +tls_prf_sha256: Class<tls$PRFAlgorithm__tls_prf_sha256> &
      tls$PRFAlgorithm__tls_prf_sha256 &
      0; // 0
  }

  declare class tls$PRFAlgorithm__tls_prf_sha256 mixins tls$PRFAlgorithm {}

  declare class tls$BulkCipherAlgorithm {
    constructor(...args: empty): mixed;
    static +rc4: Class<tls$BulkCipherAlgorithm__rc4> &
      tls$BulkCipherAlgorithm__rc4 &
      0; // 0
    static +des3: Class<tls$BulkCipherAlgorithm__des3> &
      tls$BulkCipherAlgorithm__des3 &
      1; // 1
    static +aes: Class<tls$BulkCipherAlgorithm__aes> &
      tls$BulkCipherAlgorithm__aes &
      2; // 2
  }

  declare class tls$BulkCipherAlgorithm__rc4 mixins tls$BulkCipherAlgorithm {}
  declare class tls$BulkCipherAlgorithm__des3 mixins tls$BulkCipherAlgorithm {}
  declare class tls$BulkCipherAlgorithm__aes mixins tls$BulkCipherAlgorithm {}

  declare class tls$CipherType {
    constructor(...args: empty): mixed;
    static +stream: Class<tls$CipherType__stream> & tls$CipherType__stream & 0; // 0
    static +block: Class<tls$CipherType__block> & tls$CipherType__block & 1; // 1
    static +aead: Class<tls$CipherType__aead> & tls$CipherType__aead & 2; // 2
  }

  declare class tls$CipherType__stream mixins tls$CipherType {}
  declare class tls$CipherType__block mixins tls$CipherType {}
  declare class tls$CipherType__aead mixins tls$CipherType {}

  declare class tls$MACAlgorithm {
    constructor(...args: empty): mixed;
    static +hmac_md5: Class<tls$MACAlgorithm__hmac_md5> &
      tls$MACAlgorithm__hmac_md5 &
      0; // 0
    static +hmac_sha1: Class<tls$MACAlgorithm__hmac_sha1> &
      tls$MACAlgorithm__hmac_sha1 &
      1; // 1
    static +hmac_sha256: Class<tls$MACAlgorithm__hmac_sha256> &
      tls$MACAlgorithm__hmac_sha256 &
      2; // 2
    static +hmac_sha384: Class<tls$MACAlgorithm__hmac_sha384> &
      tls$MACAlgorithm__hmac_sha384 &
      3; // 3
    static +hmac_sha512: Class<tls$MACAlgorithm__hmac_sha512> &
      tls$MACAlgorithm__hmac_sha512 &
      4; // 4
  }

  declare class tls$MACAlgorithm__hmac_md5 mixins tls$MACAlgorithm {}
  declare class tls$MACAlgorithm__hmac_sha1 mixins tls$MACAlgorithm {}
  declare class tls$MACAlgorithm__hmac_sha256 mixins tls$MACAlgorithm {}
  declare class tls$MACAlgorithm__hmac_sha384 mixins tls$MACAlgorithm {}
  declare class tls$MACAlgorithm__hmac_sha512 mixins tls$MACAlgorithm {}

  declare class tls$CompressionMethod {
    constructor(...args: empty): mixed;
    static +none: Class<tls$CompressionMethod__none> &
      tls$CompressionMethod__none &
      0; // 0
    static +deflate: Class<tls$CompressionMethod__deflate> &
      tls$CompressionMethod__deflate &
      1; // 1
  }

  declare class tls$CompressionMethod__none mixins tls$CompressionMethod {}
  declare class tls$CompressionMethod__deflate mixins tls$CompressionMethod {}

  declare class tls$ContentType {
    constructor(...args: empty): mixed;
    static +change_cipher_spec: Class<tls$ContentType__change_cipher_spec> &
      tls$ContentType__change_cipher_spec &
      20; // 20
    static +alert: Class<tls$ContentType__alert> & tls$ContentType__alert & 21; // 21
    static +handshake: Class<tls$ContentType__handshake> &
      tls$ContentType__handshake &
      22; // 22
    static +application_data: Class<tls$ContentType__application_data> &
      tls$ContentType__application_data &
      23; // 23
    static +heartbeat: Class<tls$ContentType__heartbeat> &
      tls$ContentType__heartbeat &
      24; // 24
  }

  declare class tls$ContentType__change_cipher_spec mixins tls$ContentType {}
  declare class tls$ContentType__alert mixins tls$ContentType {}
  declare class tls$ContentType__handshake mixins tls$ContentType {}
  declare class tls$ContentType__application_data mixins tls$ContentType {}
  declare class tls$ContentType__heartbeat mixins tls$ContentType {}

  declare class tls$HandshakeType {
    constructor(...args: empty): mixed;
    static +hello_request: Class<tls$HandshakeType__hello_request> &
      tls$HandshakeType__hello_request &
      0; // 0
    static +client_hello: Class<tls$HandshakeType__client_hello> &
      tls$HandshakeType__client_hello &
      1; // 1
    static +server_hello: Class<tls$HandshakeType__server_hello> &
      tls$HandshakeType__server_hello &
      2; // 2
    static +certificate: Class<tls$HandshakeType__certificate> &
      tls$HandshakeType__certificate &
      11; // 11
    static +server_key_exchange: Class<tls$HandshakeType__server_key_exchange> &
      tls$HandshakeType__server_key_exchange &
      12; // 12
    static +certificate_request: Class<tls$HandshakeType__certificate_request> &
      tls$HandshakeType__certificate_request &
      13; // 13
    static +server_hello_done: Class<tls$HandshakeType__server_hello_done> &
      tls$HandshakeType__server_hello_done &
      14; // 14
    static +certificate_verify: Class<tls$HandshakeType__certificate_verify> &
      tls$HandshakeType__certificate_verify &
      15; // 15
    static +client_key_exchange: Class<tls$HandshakeType__client_key_exchange> &
      tls$HandshakeType__client_key_exchange &
      16; // 16
    static +finished: Class<tls$HandshakeType__finished> &
      tls$HandshakeType__finished &
      20; // 20
  }

  declare class tls$HandshakeType__hello_request mixins tls$HandshakeType {}
  declare class tls$HandshakeType__client_hello mixins tls$HandshakeType {}
  declare class tls$HandshakeType__server_hello mixins tls$HandshakeType {}
  declare class tls$HandshakeType__certificate mixins tls$HandshakeType {}
  declare class tls$HandshakeType__server_key_exchange
    mixins tls$HandshakeType {}
  declare class tls$HandshakeType__certificate_request
    mixins tls$HandshakeType {}
  declare class tls$HandshakeType__server_hello_done mixins tls$HandshakeType {}
  declare class tls$HandshakeType__certificate_verify
    mixins tls$HandshakeType {}
  declare class tls$HandshakeType__client_key_exchange
    mixins tls$HandshakeType {}
  declare class tls$HandshakeType__finished mixins tls$HandshakeType {}

  declare class Alert$Level {
    constructor(...args: empty): mixed;
    static +warning: Class<Alert$Level__warning> & Alert$Level__warning & 1; // 1
    static +fatal: Class<Alert$Level__fatal> & Alert$Level__fatal & 2; // 2
  }

  declare class Alert$Level__warning mixins Alert$Level {}
  declare class Alert$Level__fatal mixins Alert$Level {}

  declare class Alert$Description {
    constructor(...args: empty): mixed;
    static +close_notify: Class<Alert$Description__close_notify> &
      Alert$Description__close_notify &
      0; // 0
    static +unexpected_message: Class<Alert$Description__unexpected_message> &
      Alert$Description__unexpected_message &
      10; // 10
    static +bad_record_mac: Class<Alert$Description__bad_record_mac> &
      Alert$Description__bad_record_mac &
      20; // 20
    static +decryption_failed: Class<Alert$Description__decryption_failed> &
      Alert$Description__decryption_failed &
      21; // 21
    static +record_overflow: Class<Alert$Description__record_overflow> &
      Alert$Description__record_overflow &
      22; // 22
    static +decompression_failure: Class<Alert$Description__decompression_failure> &
      Alert$Description__decompression_failure &
      30; // 30
    static +handshake_failure: Class<Alert$Description__handshake_failure> &
      Alert$Description__handshake_failure &
      40; // 40
    static +bad_certificate: Class<Alert$Description__bad_certificate> &
      Alert$Description__bad_certificate &
      42; // 42
    static +unsupported_certificate: Class<Alert$Description__unsupported_certificate> &
      Alert$Description__unsupported_certificate &
      43; // 43
    static +certificate_revoked: Class<Alert$Description__certificate_revoked> &
      Alert$Description__certificate_revoked &
      44; // 44
    static +certificate_expired: Class<Alert$Description__certificate_expired> &
      Alert$Description__certificate_expired &
      45; // 45
    static +certificate_unknown: Class<Alert$Description__certificate_unknown> &
      Alert$Description__certificate_unknown &
      46; // 46
    static +illegal_parameter: Class<Alert$Description__illegal_parameter> &
      Alert$Description__illegal_parameter &
      47; // 47
    static +unknown_ca: Class<Alert$Description__unknown_ca> &
      Alert$Description__unknown_ca &
      48; // 48
    static +access_denied: Class<Alert$Description__access_denied> &
      Alert$Description__access_denied &
      49; // 49
    static +decode_error: Class<Alert$Description__decode_error> &
      Alert$Description__decode_error &
      50; // 50
    static +decrypt_error: Class<Alert$Description__decrypt_error> &
      Alert$Description__decrypt_error &
      51; // 51
    static +export_restriction: Class<Alert$Description__export_restriction> &
      Alert$Description__export_restriction &
      60; // 60
    static +protocol_version: Class<Alert$Description__protocol_version> &
      Alert$Description__protocol_version &
      70; // 70
    static +insufficient_security: Class<Alert$Description__insufficient_security> &
      Alert$Description__insufficient_security &
      71; // 71
    static +internal_error: Class<Alert$Description__internal_error> &
      Alert$Description__internal_error &
      80; // 80
    static +user_canceled: Class<Alert$Description__user_canceled> &
      Alert$Description__user_canceled &
      90; // 90
    static +no_renegotiation: Class<Alert$Description__no_renegotiation> &
      Alert$Description__no_renegotiation &
      100; // 100
  }

  declare class Alert$Description__close_notify mixins Alert$Description {}
  declare class Alert$Description__unexpected_message
    mixins Alert$Description {}
  declare class Alert$Description__bad_record_mac mixins Alert$Description {}
  declare class Alert$Description__decryption_failed mixins Alert$Description {}
  declare class Alert$Description__record_overflow mixins Alert$Description {}
  declare class Alert$Description__decompression_failure
    mixins Alert$Description {}
  declare class Alert$Description__handshake_failure mixins Alert$Description {}
  declare class Alert$Description__bad_certificate mixins Alert$Description {}
  declare class Alert$Description__unsupported_certificate
    mixins Alert$Description {}
  declare class Alert$Description__certificate_revoked
    mixins Alert$Description {}
  declare class Alert$Description__certificate_expired
    mixins Alert$Description {}
  declare class Alert$Description__certificate_unknown
    mixins Alert$Description {}
  declare class Alert$Description__illegal_parameter mixins Alert$Description {}
  declare class Alert$Description__unknown_ca mixins Alert$Description {}
  declare class Alert$Description__access_denied mixins Alert$Description {}
  declare class Alert$Description__decode_error mixins Alert$Description {}
  declare class Alert$Description__decrypt_error mixins Alert$Description {}
  declare class Alert$Description__export_restriction
    mixins Alert$Description {}
  declare class Alert$Description__protocol_version mixins Alert$Description {}
  declare class Alert$Description__insufficient_security
    mixins Alert$Description {}
  declare class Alert$Description__internal_error mixins Alert$Description {}
  declare class Alert$Description__user_canceled mixins Alert$Description {}
  declare class Alert$Description__no_renegotiation mixins Alert$Description {}

  declare class tls$HeartbeatMessageType {
    constructor(...args: empty): mixed;
    static +heartbeat_request: Class<tls$HeartbeatMessageType__heartbeat_request> &
      tls$HeartbeatMessageType__heartbeat_request &
      1; // 1
    static +heartbeat_response: Class<tls$HeartbeatMessageType__heartbeat_response> &
      tls$HeartbeatMessageType__heartbeat_response &
      2; // 2
  }

  declare class tls$HeartbeatMessageType__heartbeat_request
    mixins tls$HeartbeatMessageType {}
  declare class tls$HeartbeatMessageType__heartbeat_response
    mixins tls$HeartbeatMessageType {}

  declare interface tls$CipherSuite {
    id: [Byte, Byte];
    name: string;
  }

  declare var tls$CipherSuites: {
    [name: string]: tls$CipherSuite
  };

  declare interface tls$CertificateRequest {
    certificate_types: utilutil$ByteBuffer;
    certificate_authorities: utilutil$ByteBuffer;
  }

  declare type tls$ConnectionState = any;

  declare interface tls$Connection {
    version: tls$ProtocolVersion;
    entity: tls$ConnectionEnd;
    sessionId: Bytes | null;
    caStore: pkipki$CAStore;
    sessionCache: tls$SessionCache | null;
    cipherSuites: tls$CipherSuite[];
    connected(conn: tls$Connection): void;
    virtualHost: string | null;
    verifyClient: boolean;
    ed25519$verify(
      conn: tls$Connection,
      verified: tls$Verified,
      depth: number,
      certs: pkipki$Certificate[]
    ): tls$Verified;
    getCertificate:
      | ((
          conn: tls$Connection,
          hint: tls$CertificateRequest | string[]
        ) => pkipki$PEM | $ReadOnlyArray<pkipki$PEM>)
      | null;
    getPrivateKey:
      | ((conn: tls$Connection, certificate: pkipki$Certificate) => pkipki$PEM)
      | null;
    getSignature:
      | ((
          conn: tls$Connection,
          bytes: Bytes,
          callback: (conn: tls$Connection, bytes: Bytes) => void
        ) => void)
      | null;
    input: utilutil$ByteBuffer;
    tlsData: utilutil$ByteBuffer;
    data: utilutil$ByteBuffer;
    tlsDataReady(conn: tls$Connection): void;
    dataReady(conn: tls$Connection): void;
    heartbeatReceived:
      | ((conn: tls$Connection, payload: utilutil$ByteBuffer) => void)
      | void;
    closed(conn: tls$Connection): void;
    error(conn: tls$Connection, error: tls$TLSError): void;
    deflate: ((inBytes: Bytes) => Bytes) | null;
    inflate: ((inBytes: Bytes) => Bytes) | null;
    reset(clearFail?: boolean): void;
    record: tls$Record | null;
    session: tls$Session | null;
    peerCertificate: pkipki$Certificate | null;
    state: {
      pending: tls$ConnectionState | null,
      current: tls$ConnectionState
    };
    expect: number;
    fragmented: tls$Record | null;
    records: tls$Record[];
    open: boolean;
    handshakes: number;
    handshaking: boolean;
    isConnected: boolean;
    fail: boolean;
    handshake(sessionId?: Bytes | null): void;
    process(data: Bytes): number;
    prepare(data: Bytes): boolean;
    prepareHeartbeatRequest(
      payload: Bytes | utilutil$ByteBuffer,
      payloadLength?: number
    ): boolean;
    close(clearFail?: boolean): tls$Connection;
  }

  declare interface tls$Record {
    type: tls$ContentType;
    version: tls$ProtocolVersion;
    length: number;
    fragment: utilutil$ByteBuffer;
    ready?: boolean;
  }

  declare interface tls$Session {
    version: tls$ProtocolVersion | null;
    extensions: {
      [_: string]: { [key: string]: any }
    };
    cipherSuite: tls$CipherSuite | null;
    compressionMethod: tls$CompressionMethod | null;
    serverCertificate: pkipki$Certificate | null;
    clientCertificate: pkipki$Certificate | null;
    md5: mdmd$MessageDigest;
    sha1: mdmd$MessageDigest;
  }

  declare interface tls$SessionCache {
    cache: {
      [key: string]: tls$Session
    };
    capacity: number;
    order: [Hex];
    getSession(sessionId: Bytes): tls$Session;
    setSession(sessionId: Bytes, session: tls$Session): void;
  }

  declare function tls$createSessionCache(
    cache?:
      | tls$SessionCache
      | {
          [key: string]: tls$Session
        },
    capacity?: number
  ): tls$SessionCache;

  declare interface tls$Alert {
    level: tls$AlertAlert$Level;
    description: tls$AlertAlert$Description;
  }

  declare type tls$TLSError = {
    message: string,
    send: boolean,
    origin: "server" | "client",
    alert: tls$Alert
  } & Error;

  declare type tls$Verified =
    | true
    | {
        message?: string,
        alert?: tls$AlertAlert$Description
      };

  declare function tls$createConnection(options: {
    server?: boolean,
    sessionId?: Bytes | null,
    caStore?: pkipki$CAStore | $ReadOnlyArray<pkipki$Certificate>,
    sessionCache?:
      | tls$SessionCache
      | {
          [key: string]: tls$Session
        },
    cipherSuites?: tls$CipherSuite[],
    connected(conn: tls$Connection): void,
    virtualHost?: string,
    verifyClient?: boolean,
    ed25519$verify?: (
      conn: tls$Connection,
      verified: tls$Verified,
      depth: number,
      certs: pkipki$Certificate[]
    ) => tls$Verified,
    getCertificate?: (
      conn: tls$Connection,
      hint: tls$CertificateRequest | string[]
    ) => pkipki$PEM | $ReadOnlyArray<pkipki$PEM>,
    getPrivateKey?: (
      conn: tls$Connection,
      certificate: pkipki$Certificate
    ) => pkipki$PEM,
    getSignature?: (
      conn: tls$Connection,
      bytes: Bytes,
      callback: (conn: tls$Connection, bytes: Bytes) => void
    ) => void,
    tlsDataReady(conn: tls$Connection): void,
    dataReady(conn: tls$Connection): void,
    heartbeatReceived?: (
      conn: tls$Connection,
      payload: utilutil$ByteBuffer
    ) => void,
    closed(conn: tls$Connection): void,
    error(conn: tls$Connection, error: tls$TLSError): void,
    deflate?: (inBytes: Bytes) => Bytes,
    inflate?: (inBytes: Bytes) => Bytes
  }): tls$Connection;

  declare function tls$prf_tls1(
    secret: string,
    label: string,
    seed: string,
    length: number
  ): utilutil$ByteBuffer;

  declare function tls$hmac_sha1(
    key: string | $ReadOnlyArray<Byte> | utilutil$ByteBuffer,
    seqNum: [number, number],
    record: tls$Record
  ): Bytes;
}
