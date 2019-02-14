declare module "node-forge" {
  declare type Byte = number;
  declare type Bytes = string;
  declare type Hex = string;
  declare type Base64 = string;
  declare type Utf8 = string;
  declare type OID = string;
  declare type Encoding = "raw" | "utf8";

  declare var npm$namespace$jsbn: {
    BigInteger: typeof jsbn$BigInteger
  };
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
    oids: typeof pki$oids,

    rsa: typeof npm$namespace$pki$rsa
  };
  declare type pki$PEM = string;

  declare type pki$PublicKey = rsa$PublicKey | ed25519$Key;

  declare type pki$PrivateKey = rsa$PrivateKey | ed25519$Key;

  declare interface pki$KeyPair {
    publicKey: pki$PublicKey;
    privateKey: pki$PrivateKey;
    publicKey: pki$PublicKey;
    privateKey: pki$PrivateKey;
  }

  declare function pki$pemToDer(pem: pki$PEM): util$ByteStringBuffer;

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
    certs?: $ReadOnlyArray<pki$Certificate | pki$PEM>
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

  declare var npm$namespace$pki$ed25519: {
    generateKeyPair: typeof pki$ed25519$generateKeyPair,
    publicKeyFromPrivateKey: typeof pki$ed25519$publicKeyFromPrivateKey,
    sign: typeof pki$ed25519$sign,
    verify: typeof pki$ed25519$verify,

    constants: typeof npm$namespace$pki$ed25519$constants
  };
  declare type pki$ed25519$Key = ArrayBuffer;

  declare type pki$ed25519$NativeBuffer = Buffer | Uint8Array;

  declare var npm$namespace$pki$ed25519$constants: {
    PUBLIC_KEY_BYTE_LENGTH: typeof pki$ed25519$constants$PUBLIC_KEY_BYTE_LENGTH,
    PRIVATE_KEY_BYTE_LENGTH: typeof pki$ed25519$constants$PRIVATE_KEY_BYTE_LENGTH,
    SEED_BYTE_LENGTH: typeof pki$ed25519$constants$SEED_BYTE_LENGTH,
    SIGN_BYTE_LENGTH: typeof pki$ed25519$constants$SIGN_BYTE_LENGTH,
    HASH_BYTE_LENGTH: typeof pki$ed25519$constants$HASH_BYTE_LENGTH
  };
  declare var pki$ed25519$constants$PUBLIC_KEY_BYTE_LENGTH: any; // 32;

  declare var pki$ed25519$constants$PRIVATE_KEY_BYTE_LENGTH: any; // 64;

  declare var pki$ed25519$constants$SEED_BYTE_LENGTH: any; // 32;

  declare var pki$ed25519$constants$SIGN_BYTE_LENGTH: any; // 64;

  declare var pki$ed25519$constants$HASH_BYTE_LENGTH: any; // 64;

  declare function pki$ed25519$generateKeyPair(options?: {
    seed?: Buffer | Uint8Array | string
  }): {
    publicKey: pki$ed25519$NativeBuffer,
    privateKey: pki$ed25519$NativeBuffer
  };

  declare function pki$ed25519$publicKeyFromPrivateKey(options: {
    privateKey: pki$ed25519$NativeBuffer
  }): pki$ed25519$NativeBuffer;

  declare function pki$ed25519$sign(options: {
    message: string,
    encoding: string,
    privateKey: pki$ed25519$NativeBuffer
  }): pki$ed25519$NativeBuffer;

  declare function pki$ed25519$verify(options: {
    message: string,
    encoding: string,
    signature: Buffer | Uint8Array | util$ByteBuffer | string,
    publicKey: pki$ed25519$NativeBuffer
  }): boolean;

  declare var npm$namespace$pki$rsa: {
    setPublicKey: typeof pki$rsa$setPublicKey,
    generateKeyPair: typeof pki$rsa$generateKeyPair
  };
  declare type pki$rsa$EncryptionScheme =
    | "RSAES-PKCS1-V1_5"
    | "RSA-OAEP"
    | "RAW"
    | "NONE"
    | null;

  declare type pki$rsa$SignatureScheme =
    | "RSASSA-PKCS1-V1_5"
    | pss$PSS
    | "NONE"
    | null;

  declare type pki$rsa$PublicKey = rsa$PublicKey | ed25519$Key;

  declare type pki$rsa$PrivateKey = rsa$PrivateKey | ed25519$Key;

  declare interface pki$rsa$KeyPair {
    publicKey: pki$rsa$PublicKey;
    privateKey: pki$rsa$PrivateKey;
    publicKey: pki$rsa$PublicKey;
    privateKey: pki$rsa$PrivateKey;
  }

  declare interface pki$rsa$GenerateKeyPairOptions {
    bits?: number;
    e?: number;
    workerScript?: string;
    workers?: number;
    workLoad?: number;
    prng?: any;
    algorithm?: string;
  }

  declare function pki$rsa$setPublicKey(n: any, e: any): any;

  declare function pki$rsa$generateKeyPair(
    bits?: number,
    e?: number,
    callback?: (err: Error, keypair: pki$rsa$KeyPair) => void
  ): pki$rsa$KeyPair;

  declare function pki$rsa$generateKeyPair(
    options?: pki$rsa$GenerateKeyPairOptions,
    callback?: (err: Error, keypair: pki$rsa$KeyPair) => void
  ): pki$rsa$KeyPair;

  declare interface pki$CertificateFieldOptions {
    name?: string;
    type?: string;
    shortName?: string;
  }

  declare type pki$CertificateField = {
    valueConstructed?: boolean,
    valueTagClass?: asn1$Class,
    value?: any[] | string,
    extensions?: any[]
  } & CertificateFieldOptions;

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
    privateKey: pki$rsa$PrivateKey;
    publicKey: pki$rsa$PublicKey;
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
     * name the name to use.
     * id the id to use.
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
    sign(key: pki$PrivateKey, md?: md$MessageDigest): void;

    /**
     * Attempts verify the signature on the passed certificate using this
     * certificate's public key.
     * @param child the certificate to verify.
     * @return true if verified, false if not.
     */
    verify(child: pki$Certificate): boolean;
  }

  declare interface pki$CAStore {
    addCertificate(cert: pki$Certificate | string): void;
    hasCertificate(cert: pki$Certificate | string): boolean;
    removeCertificate(cert: pki$Certificate | string): pki$Certificate | null;
    listAllCertificates(): pki$Certificate[];
    getIssuer(subject: pki$Certificate): pki$Certificate | null;
    getBySubject(subject: string): pki$Certificate | null;
  }

  declare function pki$certificateFromAsn1(
    obj: asn1$Asn1,
    computeHash?: boolean
  ): pki$Certificate;

  declare function pki$decryptRsaPrivateKey(
    pem: pki$PEM,
    passphrase?: string
  ): pki$rsa$PrivateKey;

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

  declare function pki$publicKeyToAsn1(publicKey: pki$rsa$PublicKey): any;

  declare function pki$publicKeyToRSAPublicKey(
    publicKey: pki$rsa$PublicKey
  ): any;

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
    md?: md$MessageDigest;
  }

  /**
   * @description Encodes a private RSA key as an OpenSSH file
   */
  declare function ssh$privateKeyToOpenSSH(
    privateKey: pki$PrivateKey,
    passphrase?: string
  ): string;

  /**
   * @description Encodes (and optionally encrypts) a private RSA key as a Putty PPK file
   */
  declare function ssh$privateKeyToPutty(
    privateKey: pki$PrivateKey,
    passphrase?: string,
    comment?: string
  ): string;

  /**
   * @description Encodes a public RSA key as an OpenSSH file
   */
  declare function ssh$publicKeyToOpenSSH(
    publicKey: pki$PublicKey,
    comment?: string
  ): string | pki$PEM;

  /**
   * @description Gets the SSH fingerprint for the given public key
   */
  declare function ssh$getPublicKeyFingerprint(
    publicKey: pki$PublicKey,
    options?: ssh$FingerprintOptions
  ): util$ByteStringBuffer | Hex | string;

  declare var npm$namespace$asn1: {
    create: typeof asn1$create,
    fromDer: typeof asn1$fromDer,
    toDer: typeof asn1$toDer,
    oidToDer: typeof asn1$oidToDer,
    derToOid: typeof asn1$derToOid,

    Class: typeof asn1$Class,
    Type: typeof asn1$Type
  };

  declare var asn1$Class: {|
    +UNIVERSAL: 0, // 0
    +APPLICATION: 64, // 64
    +CONTEXT_SPECIFIC: 128, // 128
    +PRIVATE: 192 // 192
  |};

  declare var asn1$Type: {|
    +NONE: 0, // 0
    +BOOLEAN: 1, // 1
    +INTEGER: 2, // 2
    +BITSTRING: 3, // 3
    +OCTETSTRING: 4, // 4
    +NULL: 5, // 5
    +OID: 6, // 6
    +ODESC: 7, // 7
    +EXTERNAL: 8, // 8
    +REAL: 9, // 9
    +ENUMERATED: 10, // 10
    +EMBEDDED: 11, // 11
    +UTF8: 12, // 12
    +ROID: 13, // 13
    +SEQUENCE: 16, // 16
    +SET: 17, // 17
    +PRINTABLESTRING: 19, // 19
    +IA5STRING: 22, // 22
    +UTCTIME: 23, // 23
    +GENERALIZEDTIME: 24, // 24
    +BMPSTRING: 30 // 30
  |};

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
    bytes: Bytes | util$ByteBuffer,
    strict?: boolean
  ): asn1$Asn1;

  declare function asn1$toDer(obj: asn1$Asn1): util$ByteBuffer;

  declare function asn1$oidToDer(oid: OID): util$ByteStringBuffer;

  declare function asn1$derToOid(der: util$ByteStringBuffer): OID;

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
    createBuffer: typeof util$createBuffer,

    ByteStringBuffer: typeof util$ByteStringBuffer,
    binary: typeof npm$namespace$util$binary,
    text: typeof npm$namespace$util$text
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

  declare var npm$namespace$util$binary: {
    raw: typeof npm$namespace$util$binary$raw,
    hex: typeof npm$namespace$util$binary$hex,
    base64: typeof npm$namespace$util$binary$base64
  };

  declare var npm$namespace$util$binary$raw: {
    encode: typeof util$binary$raw$encode,
    decode: typeof util$binary$raw$decode
  };
  declare function util$binary$raw$encode(x: Uint8Array): Bytes;

  declare function util$binary$raw$decode(
    str: Bytes,
    output?: Uint8Array,
    offset?: number
  ): Uint8Array;

  declare var npm$namespace$util$binary$hex: {
    encode: typeof util$binary$hex$encode,
    decode: typeof util$binary$hex$decode
  };
  declare function util$binary$hex$encode(
    bytes: Bytes | ArrayBuffer | util$ArrayBufferView | util$ByteStringBuffer
  ): Hex;

  declare function util$binary$hex$decode(
    hex: Hex,
    output?: Uint8Array,
    offset?: number
  ): Uint8Array;

  declare var npm$namespace$util$binary$base64: {
    encode: typeof util$binary$base64$encode,
    decode: typeof util$binary$base64$decode
  };
  declare function util$binary$base64$encode(
    input: Uint8Array,
    maxline?: number
  ): Base64;

  declare function util$binary$base64$decode(
    input: Base64,
    output?: Uint8Array,
    offset?: number
  ): Uint8Array;

  declare var npm$namespace$util$text: {
    utf8: typeof npm$namespace$util$text$utf8,
    utf16: typeof npm$namespace$util$text$utf16
  };

  declare var npm$namespace$util$text$utf8: {
    encode: typeof util$text$utf8$encode,
    decode: typeof util$text$utf8$decode
  };
  declare function util$text$utf8$encode(
    str: string,
    output?: Uint8Array,
    offset?: number
  ): Uint8Array;

  declare function util$text$utf8$decode(bytes: Uint8Array): Utf8;

  declare var npm$namespace$util$text$utf16: {
    encode: typeof util$text$utf16$encode,
    decode: typeof util$text$utf16$decode
  };
  declare function util$text$utf16$encode(
    str: string,
    output?: Uint8Array,
    offset?: number
  ): Uint8Array;

  declare function util$text$utf16$decode(bytes: Uint8Array): string;

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
    key?: pki$PrivateKey;
    cert?: pki$Certificate;
    asn1: asn1$Asn1;
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
    key: pki$PrivateKey,
    cert: pki$Certificate | pki$Certificate[],
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
  ): asn1$Asn1;

  declare function pkcs12$generateKey(
    password: string | null | void,
    salt: util$ByteBuffer,
    id: Byte,
    iter: number,
    n: number,
    md?: md$MessageDigest
  ): util$ByteBuffer;

  declare var npm$namespace$pkcs7: {
    createSignedData: typeof pkcs7$createSignedData
  };
  declare interface pkcs7$PkcsSignedData {
    content?: string | util$ByteBuffer;
    contentInfo?: {
      value: any[]
    };
    addCertificate(certificate: pki$Certificate): void;
    addSigner(options: {
      key: string,
      certificate: pki$Certificate,
      digestAlgorithm: string,
      authenticatedAttributes: {
        type: string,
        value?: string
      }[]
    }): void;
    sign(options?: {
      detached?: boolean
    }): void;
    toAsn1(): asn1$Asn1;
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

  declare var npm$namespace$md: {
    sha1: typeof npm$namespace$md$sha1,
    sha256: typeof npm$namespace$md$sha256,
    sha512: typeof npm$namespace$md$sha512,
    md5: typeof npm$namespace$md$md5
  };
  declare interface md$MessageDigest {
    update(msg: string, encoding?: Encoding): md$MessageDigest;
    digest(): util$ByteStringBuffer;
  }

  declare var npm$namespace$md$sha1: {
    create: typeof md$sha1$create
  };
  declare function md$sha1$create(): md$MessageDigest;

  declare var npm$namespace$md$sha256: {
    create: typeof md$sha256$create
  };
  declare function md$sha256$create(): md$MessageDigest;

  declare var npm$namespace$md$sha512: {
    create: typeof md$sha512$create
  };
  declare function md$sha512$create(): md$MessageDigest;

  declare var npm$namespace$md$md5: {
    create: typeof md$md5$create
  };
  declare function md$md5$create(): md$MessageDigest;

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
    payload: util$ByteBuffer | Bytes
  ): cipher$BlockCipher;

  declare function cipher$createDecipher(
    algorithm: cipher$Algorithm,
    payload: util$ByteBuffer | Bytes
  ): cipher$BlockCipher;

  declare interface cipher$StartOptions {
    iv?: Bytes;
    tag?: util$ByteStringBuffer;
    tagLength?: number;
    additionalData?: string;
  }

  declare interface cipher$BlockCipher {
    start: (options?: cipher$StartOptions) => void;
    update: (payload: util$ByteBuffer) => void;
    finish: () => boolean;
    output: util$ByteStringBuffer;
    mode: cipher$Mode;
  }

  declare interface cipher$Mode {
    tag: util$ByteStringBuffer;
  }

  declare var npm$namespace$pss: {
    create: typeof pss$create
  };
  declare type pss$PSS = any;

  declare function pss$create(any: any): pss$PSS;

  declare var npm$namespace$mgf: {
    mgf1: typeof npm$namespace$mgf$mgf1
  };

  declare var npm$namespace$mgf$mgf1: {
    create: typeof mgf$mgf1$create
  };
  declare function mgf$mgf1$create(any: any): any;

  declare var npm$namespace$tls: {
    createSessionCache: typeof tls$createSessionCache,
    createConnection: typeof tls$createConnection,
    prf_tls1: typeof tls$prf_tls1,
    hmac_sha1: typeof tls$hmac_sha1,
    Versions: typeof tls$Versions,
    SupportedVersions: typeof tls$SupportedVersions,
    Version: typeof tls$Version,
    MaxFragment: typeof tls$MaxFragment,
    CipherSuites: typeof tls$CipherSuites,
    ConnectionEnd: typeof tls$ConnectionEnd,
    PRFAlgorithm: typeof tls$PRFAlgorithm,
    BulkCipherAlgorithm: typeof tls$BulkCipherAlgorithm,
    CipherType: typeof tls$CipherType,
    MACAlgorithm: typeof tls$MACAlgorithm,
    CompressionMethod: typeof tls$CompressionMethod,
    ContentType: typeof tls$ContentType,
    HandshakeType: typeof tls$HandshakeType,
    HeartbeatMessageType: typeof tls$HeartbeatMessageType,

    Alert: typeof npm$namespace$tls$Alert
  };
  declare interface tls$ProtocolVersion {
    major: Byte;
    minor: Byte;
  }

  declare var tls$Versions: tls$ProtocolVersion[];

  declare var tls$SupportedVersions: tls$ProtocolVersion[];

  declare var tls$Version: tls$ProtocolVersion;

  declare var tls$MaxFragment: number;

  declare var tls$ConnectionEnd: {|
    +server: 0, // 0
    +client: 1 // 1
  |};

  declare var tls$PRFAlgorithm: {|
    +tls_prf_sha256: 0 // 0
  |};

  declare var tls$BulkCipherAlgorithm: {|
    +rc4: 0, // 0
    +des3: 1, // 1
    +aes: 2 // 2
  |};

  declare var tls$CipherType: {|
    +stream: 0, // 0
    +block: 1, // 1
    +aead: 2 // 2
  |};

  declare var tls$MACAlgorithm: {|
    +hmac_md5: 0, // 0
    +hmac_sha1: 1, // 1
    +hmac_sha256: 2, // 2
    +hmac_sha384: 3, // 3
    +hmac_sha512: 4 // 4
  |};

  declare var tls$CompressionMethod: {|
    +none: 0, // 0
    +deflate: 1 // 1
  |};

  declare var tls$ContentType: {|
    +change_cipher_spec: 20, // 20
    +alert: 21, // 21
    +handshake: 22, // 22
    +application_data: 23, // 23
    +heartbeat: 24 // 24
  |};

  declare var tls$HandshakeType: {|
    +hello_request: 0, // 0
    +client_hello: 1, // 1
    +server_hello: 2, // 2
    +certificate: 11, // 11
    +server_key_exchange: 12, // 12
    +certificate_request: 13, // 13
    +server_hello_done: 14, // 14
    +certificate_verify: 15, // 15
    +client_key_exchange: 16, // 16
    +finished: 20 // 20
  |};

  declare var npm$namespace$tls$Alert: {
    Level: typeof tls$Alert$Level,
    Description: typeof tls$Alert$Description
  };

  declare var tls$Alert$Level: {|
    +warning: 1, // 1
    +fatal: 2 // 2
  |};

  declare var tls$Alert$Description: {|
    +close_notify: 0, // 0
    +unexpected_message: 10, // 10
    +bad_record_mac: 20, // 20
    +decryption_failed: 21, // 21
    +record_overflow: 22, // 22
    +decompression_failure: 30, // 30
    +handshake_failure: 40, // 40
    +bad_certificate: 42, // 42
    +unsupported_certificate: 43, // 43
    +certificate_revoked: 44, // 44
    +certificate_expired: 45, // 45
    +certificate_unknown: 46, // 46
    +illegal_parameter: 47, // 47
    +unknown_ca: 48, // 48
    +access_denied: 49, // 49
    +decode_error: 50, // 50
    +decrypt_error: 51, // 51
    +export_restriction: 60, // 60
    +protocol_version: 70, // 70
    +insufficient_security: 71, // 71
    +internal_error: 80, // 80
    +user_canceled: 90, // 90
    +no_renegotiation: 100 // 100
  |};

  declare var tls$HeartbeatMessageType: {|
    +heartbeat_request: 1, // 1
    +heartbeat_response: 2 // 2
  |};

  declare interface tls$CipherSuite {
    id: [Byte, Byte];
    name: string;
  }

  declare var tls$CipherSuites: {
    [name: string]: tls$CipherSuite
  };

  declare interface tls$CertificateRequest {
    certificate_types: util$ByteBuffer;
    certificate_authorities: util$ByteBuffer;
  }

  declare type tls$ConnectionState = any;

  declare interface tls$Connection {
    version: tls$ProtocolVersion;
    entity: tls$ConnectionEnd;
    sessionId: Bytes | null;
    caStore: pki$CAStore;
    sessionCache: tls$SessionCache | null;
    cipherSuites: tls$CipherSuite[];
    connected(conn: tls$Connection): void;
    virtualHost: string | null;
    verifyClient: boolean;
    verify(
      conn: tls$Connection,
      verified: tls$Verified,
      depth: number,
      certs: pki$Certificate[]
    ): tls$Verified;
    getCertificate:
      | ((
          conn: tls$Connection,
          hint: tls$CertificateRequest | string[]
        ) => pki$PEM | $ReadOnlyArray<pki$PEM>)
      | null;
    getPrivateKey:
      | ((conn: tls$Connection, certificate: pki$Certificate) => pki$PEM)
      | null;
    getSignature:
      | ((
          conn: tls$Connection,
          bytes: Bytes,
          callback: (conn: tls$Connection, bytes: Bytes) => void
        ) => void)
      | null;
    input: util$ByteBuffer;
    tlsData: util$ByteBuffer;
    data: util$ByteBuffer;
    tlsDataReady(conn: tls$Connection): void;
    dataReady(conn: tls$Connection): void;
    heartbeatReceived:
      | ((conn: tls$Connection, payload: util$ByteBuffer) => void)
      | void;
    closed(conn: tls$Connection): void;
    error(conn: tls$Connection, error: tls$TLSError): void;
    deflate: ((inBytes: Bytes) => Bytes) | null;
    inflate: ((inBytes: Bytes) => Bytes) | null;
    reset(clearFail?: boolean): void;
    record: tls$Record | null;
    session: tls$Session | null;
    peerCertificate: pki$Certificate | null;
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
      payload: Bytes | util$ByteBuffer,
      payloadLength?: number
    ): boolean;
    close(clearFail?: boolean): tls$Connection;
  }

  declare interface tls$Record {
    type: tls$ContentType;
    version: tls$ProtocolVersion;
    length: number;
    fragment: util$ByteBuffer;
    ready?: boolean;
  }

  declare interface tls$Session {
    version: tls$ProtocolVersion | null;
    extensions: {
      [_: string]: { [key: string]: any }
    };
    cipherSuite: tls$CipherSuite | null;
    compressionMethod: tls$CompressionMethod | null;
    serverCertificate: pki$Certificate | null;
    clientCertificate: pki$Certificate | null;
    md5: md$MessageDigest;
    sha1: md$MessageDigest;
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
    level: Alert$Level;
    description: Alert$Description;
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
        alert?: Alert$Description
      };

  declare function tls$createConnection(options: {
    server?: boolean,
    sessionId?: Bytes | null,
    caStore?: pki$CAStore | $ReadOnlyArray<pki$Certificate>,
    sessionCache?:
      | tls$SessionCache
      | {
          [key: string]: tls$Session
        },
    cipherSuites?: tls$CipherSuite[],
    connected(conn: tls$Connection): void,
    virtualHost?: string,
    verifyClient?: boolean,
    verify?: (
      conn: tls$Connection,
      verified: tls$Verified,
      depth: number,
      certs: pki$Certificate[]
    ) => tls$Verified,
    getCertificate?: (
      conn: tls$Connection,
      hint: tls$CertificateRequest | string[]
    ) => pki$PEM | $ReadOnlyArray<pki$PEM>,
    getPrivateKey?: (
      conn: tls$Connection,
      certificate: pki$Certificate
    ) => pki$PEM,
    getSignature?: (
      conn: tls$Connection,
      bytes: Bytes,
      callback: (conn: tls$Connection, bytes: Bytes) => void
    ) => void,
    tlsDataReady(conn: tls$Connection): void,
    dataReady(conn: tls$Connection): void,
    heartbeatReceived?: (
      conn: tls$Connection,
      payload: util$ByteBuffer
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
  ): util$ByteBuffer;

  declare function tls$hmac_sha1(
    key: string | $ReadOnlyArray<Byte> | util$ByteBuffer,
    seqNum: [number, number],
    record: tls$Record
  ): Bytes;
}
