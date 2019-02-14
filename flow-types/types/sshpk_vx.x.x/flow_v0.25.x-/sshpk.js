declare module "sshpk" {
  declare class SshPK {}

  declare var npm$namespace$SshPK: {
    bufferSplit: typeof SshPK$bufferSplit,
    addRSAMissing: typeof SshPK$addRSAMissing,
    calculateDSAPublic: typeof SshPK$calculateDSAPublic,
    mpNormalize: typeof SshPK$mpNormalize,
    ecNormalize: typeof SshPK$ecNormalize,
    countZeros: typeof SshPK$countZeros,
    assertCompatible: typeof SshPK$assertCompatible,
    isCompatible: typeof SshPK$isCompatible,
    opensslKeyDeriv: typeof SshPK$opensslKeyDeriv,
    opensshCipherInfo: typeof SshPK$opensshCipherInfo,
    parseKey: typeof SshPK$parseKey,
    parseFingerprint: typeof SshPK$parseFingerprint,
    parseSignature: typeof SshPK$parseSignature,
    parsePrivateKey: typeof SshPK$parsePrivateKey,
    parseCertificate: typeof SshPK$parseCertificate,
    createSelfSignedCertificate: typeof SshPK$createSelfSignedCertificate,
    createCertificate: typeof SshPK$createCertificate,
    identityFromDN: typeof SshPK$identityFromDN,
    identityForHost: typeof SshPK$identityForHost,
    identityForUser: typeof SshPK$identityForUser,
    identityForEmail: typeof SshPK$identityForEmail,

    Algo: typeof SshPK$Algo,
    algInfo: typeof SshPK$algInfo,
    algPrivInfo: typeof SshPK$algPrivInfo,
    hashAlgs: typeof SshPK$hashAlgs,
    Curve: typeof SshPK$Curve,
    curves: typeof SshPK$curves,
    algs: typeof SshPK$algs,
    Certificate: typeof SshPK$Certificate,
    DiffieHellman: typeof SshPK$DiffieHellman,
    X9ECParameters: typeof SshPK$X9ECParameters,
    ECPublic: typeof SshPK$ECPublic,
    ECPrivate: typeof SshPK$ECPrivate,
    Verifier: typeof SshPK$Verifier,
    Signer: typeof SshPK$Signer,
    FingerprintFormatError: typeof SshPK$FingerprintFormatError,
    InvalidAlgorithmError: typeof SshPK$InvalidAlgorithmError,
    KeyParseError: typeof SshPK$KeyParseError,
    SignatureParseError: typeof SshPK$SignatureParseError,
    CertificateParseError: typeof SshPK$CertificateParseError,
    KeyEncryptedError: typeof SshPK$KeyEncryptedError,
    Fingerprint: typeof SshPK$Fingerprint,
    Identity: typeof SshPK$Identity,
    Format: typeof SshPK$Format,
    Formats: typeof SshPK$Formats,
    Verify: typeof SshPK$Verify,
    Key: typeof SshPK$Key,
    PrivateKey: typeof SshPK$PrivateKey,
    Signature: typeof SshPK$Signature,
    SSHPart: typeof SshPK$SSHPart,
    SSHBuffer: typeof SshPK$SSHBuffer,
    OpenSllKeyDeriv: typeof SshPK$OpenSllKeyDeriv,
    OpensshCipherInfo: typeof SshPK$OpensshCipherInfo
  };
  declare class SshPK$Algo {
    parts: string[];
    sizePart: string;
    normalize: boolean;
  }

  declare class SshPK$algInfo {
    dsa: SshPK$Algo;
    rsa: SshPK$Algo;
    ecdsa: SshPK$Algo;
    ed25519: SshPK$Algo;
    curve25519: SshPK$Algo;
  }

  declare class SshPK$algPrivInfo {
    dsa: SshPK$Algo;
    rsa: SshPK$Algo;
    ecdsa: SshPK$Algo;
    ed25519: SshPK$Algo;
    curve25519: SshPK$Algo;
  }

  declare class SshPK$hashAlgs {
    md5: boolean;
    sha1: boolean;
    sha256: boolean;
    sha384: boolean;
    sha512: boolean;
  }

  declare class SshPK$Curve {
    size: number;
    pkcs8oid: string;
    p: Buffer;
    a: Buffer;
    b: Buffer;
    s: Buffer;
    n: Buffer;
    G: Buffer;
  }

  declare class SshPK$curves {
    nistp256: SshPK$Curve;
    nistp384: SshPK$Curve;
    nistp512: SshPK$Curve;
  }

  declare class SshPK$algs {
    info: SshPK$algInfo;
    privInfo: SshPK$algPrivInfo;
    SshPK$hashAlgs: SshPK$hashAlgs;
    SshPK$curves: SshPK$curves;
  }

  declare class SshPK$Certificate {
    subjects: SshPK$Identity[];
    issuer: string;
    subjectKey: string;
    issuerKey: string;
    signatures: string;
    serial: string;
    validFrom: string;
    validUntil: string;
    static formats: SshPK$Formats;
    constructor(opts: any): this;
    toBuffer(format: string, options?: any): Buffer;
    toString(format: string, options?: any): string;
    fingerprint(algo: string): SshPK$Fingerprint;
    hash(algo: string): string;
    isExpired(when: Date): boolean;
    isSignedBy(issuerCert: SshPK$Certificate): boolean;
    isSignedByKey(issuerKey: SshPK$Key): boolean;
    signWith(key: SshPK$Key): void;
    static createSelfSigned(
      subjectOrSubjects: string,
      key: SshPK$Key,
      options: any
    ): SshPK$Certificate;
    static create(
      subjectOrSubjects: string,
      key: SshPK$Key,
      issuer: string,
      issuerKey: SshPK$PrivateKey,
      options: any
    ): SshPK$Certificate;
    static parse(
      data: string | Buffer,
      format: string,
      options: any
    ): SshPK$Certificate;
    static isCertificate(data: string | Buffer, ver: string): boolean;
  }

  declare class SshPK$DiffieHellman {
    constructor(key: SshPK$Key): this;
    getPublicKey(): SshPK$Key;
    getPrivateKey(): SshPK$PrivateKey;
    getKey(): SshPK$PrivateKey;
    setKey(key: SshPK$PrivateKey): void;
    setPrivateKey(key: SshPK$PrivateKey): void;
    computeSecret(otherpk: SshPK$PrivateKey): Buffer;
    generateKey(): SshPK$PrivateKey;
    generateKeys(): SshPK$PrivateKey;
  }

  declare class SshPK$X9ECParameters {
    G: any;
    g: any;
    n: any;
    h: any;
  }

  declare class SshPK$ECPublic {
    constructor(params: SshPK$X9ECParameters, buffer: Buffer): this;
  }

  declare class SshPK$ECPrivate {
    constructor(params: SshPK$X9ECParameters, buffer: Buffer): this;
    deriveSharedSecret(pk: SshPK$Key): Buffer;
  }

  declare class SshPK$Verifier {
    constructor(key: SshPK$Key, hashAlgo: string): this;
    update(chunk: string | Buffer): void;
    verify(signature: string): boolean;
  }

  declare class SshPK$Signer {
    constructor(key: SshPK$Key, hashAlgo: string): this;
    update(chunk: string | Buffer): void;
    sign(): SshPK$Signature;
  }

  declare class SshPK$FingerprintFormatError mixins Error {
    name: string;
    message: string;
    constructor(fp: SshPK$Fingerprint, format: string): this;
  }

  declare class SshPK$InvalidAlgorithmError mixins Error {
    name: string;
    message: string;
    constructor(algo: string): this;
  }

  declare class SshPK$KeyParseError mixins Error {
    name: string;
    message: string;
    constructor(name: string, format: string, innerErr: any): this;
  }

  declare class SshPK$SignatureParseError mixins Error {
    name: string;
    message: string;
    constructor(type: string, format: string, innerErr: any): this;
  }

  declare class SshPK$CertificateParseError mixins Error {
    name: string;
    message: string;
    constructor(name: string, format: string, innerErr: any): this;
  }

  declare class SshPK$KeyEncryptedError mixins Error {
    name: string;
    message: string;
    constructor(name: string, format: string): this;
  }

  declare class SshPK$Fingerprint {
    algorithm: string;
    hash: string;
    type: string;
    constructor(opts: any): this;
    toString(format?: string): string;
    matches(other: SshPK$Fingerprint): boolean;
    addColons(fp: string): string;
    base64Strip(fp: string): string;
    sshBase64Format(alg: string, h: string): string;
    isFingerprint(obj: string | Buffer, ver: string): boolean;
    static parse(fp: string, options: any): SshPK$Fingerprint;
  }

  declare class SshPK$Identity {
    cn: string;
    components: string[];
    componentLookup: any;
    type: string;
    hostname: string;
    uid: string;
    email: string;
    constructor(opts: any): this;
    toString(): string;
    toAsn1(der: Buffer | string, tag: string): void;
    equals(other: SshPK$Identity): boolean;
    static forHost(hostname: string): SshPK$Identity;
    static forUser(uid: string): SshPK$Identity;
    static forEmail(email: string): SshPK$Identity;
    static parseDN(dn: string): SshPK$Identity;
    static parseAsn1(dn: Buffer | string, top: string): SshPK$Identity;
    static isIdentity(dn: Buffer | string, ver: string): boolean;
  }

  declare class SshPK$Format {
    read: (buf: Buffer, options?: any) => Buffer;
    write: (key: SshPK$Key, options?: any) => Buffer;
  }

  declare class SshPK$Formats {
    auto: SshPK$Format;
    pem: SshPK$Format;
    pkcs1: SshPK$Format;
    pkcs8: SshPK$Format;
    rfc4253: SshPK$Format;
    ssh: SshPK$Format;
    "ssh-private": SshPK$Format;
    openssh: SshPK$Format;
  }

  declare class SshPK$Verify {
    verify(data: string, fmt: string): boolean;
  }

  declare class SshPK$Key {
    type: string;
    parts: string;
    part: string;
    comment: string;
    source: string;
    curve: string;
    size: number;
    constructor(opts: any): this;
    static formats: SshPK$Formats;
    toBuffer(format: string, options?: any): Buffer;
    toString(format: string, options?: any): string;
    hash(algo: string): Buffer;
    fingerprint(algo: string): SshPK$Fingerprint;
    defaultHashAlgorithm(): string;
    createVerify(algo: string): SshPK$Verify;
    createDiffieHellman(): SshPK$DiffieHellman;
    createDH(): SshPK$DiffieHellman;
    static parse(
      data: string | Buffer,
      format: string,
      options: any
    ): SshPK$Key;
    static isKey(obj: string | Buffer, ver: string): boolean;
  }

  declare class SshPK$PrivateKey {
    constructor(opts: any): this;
    static formats: SshPK$Formats;
    toBuffer(format: string, options: any): Buffer;
    hash(algo: string): Buffer;
    toPublic(): SshPK$Key;
    derive(newType: string, newSize: number): SshPK$PrivateKey;
    createVerify(hashAlgo: string): SshPK$Key;
    createSign(hashAlgo: string): SshPK$Signer;
    static parse(
      data: string | Buffer,
      format: string,
      options: any
    ): SshPK$PrivateKey;
    static isPrivateKey(data: string | Buffer, ver: string): boolean;
  }

  declare class SshPK$Signature {
    constructor(opts: any): this;
    toBuffer(format: string): Buffer;
    toString(format: string): string;
    static parse(
      data: string | Buffer,
      type: string,
      format: string
    ): SshPK$Signature;
    static isSignature(obj: string | Buffer, ver: string): boolean;
  }

  declare class SshPK$SSHPart {
    data: Buffer;
  }

  declare class SshPK$SSHBuffer {
    constructor(opts: any): this;
    toBuffer(): Buffer;
    atEnd(): boolean;
    remainder(): Buffer;
    skip(n: number): void;
    expand(): void;
    readPart(): SshPK$SSHPart;
    readBuffer(): Buffer;
    readString(): string;
    readInt(): number;
    readInt64(): Buffer;
    readChar(): string;
    writeBuffer(buf: Buffer): void;
    writeString(buf: string): void;
    writeCString(buf: string): void;
    writeInt(buf: number): void;
    writeInt64(buf: Buffer): void;
    writeChar(buf: string): void;
    writePart(buf: SshPK$SSHPart): void;
    write(buf: Buffer): void;
  }

  declare function SshPK$bufferSplit(buf: Buffer, chr: string): Buffer[];

  declare function SshPK$addRSAMissing(key: SshPK$PrivateKey): void;

  declare function SshPK$calculateDSAPublic(
    g: Buffer,
    p: Buffer,
    x: Buffer
  ): Buffer;

  declare function SshPK$mpNormalize(buf: Buffer): Buffer;

  declare function SshPK$ecNormalize(buf: Buffer, addZero: boolean): Buffer;

  declare function SshPK$countZeros(buf: Buffer): number;

  declare function SshPK$assertCompatible(
    obj: any,
    klass: any,
    needVer: string,
    name: string
  ): void;

  declare function SshPK$isCompatible(
    obj: any,
    klass: any,
    needVer: string
  ): boolean;

  declare class SshPK$OpenSllKeyDeriv {
    key: Buffer;
    iv: Buffer;
  }

  declare function SshPK$opensslKeyDeriv(
    cipher: string,
    salt: string,
    passphrase: string,
    count: number
  ): SshPK$OpenSllKeyDeriv;

  declare class SshPK$OpensshCipherInfo {
    keySize: number;
    blockSize: number;
    opensslName: string;
  }

  declare function SshPK$opensshCipherInfo(
    cipber: string
  ): SshPK$OpensshCipherInfo;

  declare function SshPK$parseKey(
    data: string | Buffer,
    format: string,
    options?: any
  ): SshPK$Key;

  declare function SshPK$parseFingerprint(
    fp: string,
    options?: any
  ): SshPK$Fingerprint;

  declare function SshPK$parseSignature(
    data: string | Buffer,
    type: string,
    format: string
  ): SshPK$Signature;

  declare function SshPK$parsePrivateKey(
    data: string | Buffer,
    format: string,
    options?: any
  ): SshPK$PrivateKey;

  declare function SshPK$parseCertificate(
    data: string | Buffer,
    format: string,
    options?: any
  ): SshPK$Certificate;

  declare function SshPK$createSelfSignedCertificate(
    subjectOrSubjects: string,
    key: SshPK$Key,
    options?: any
  ): SshPK$Certificate;

  declare function SshPK$createCertificate(
    subjectOrSubjects: string,
    key: SshPK$Key,
    issuer: string,
    issuerKey: SshPK$PrivateKey,
    options?: any
  ): SshPK$Certificate;

  declare function SshPK$identityFromDN(dn: string): SshPK$Identity;

  declare function SshPK$identityForHost(hostname: string): SshPK$Identity;

  declare function SshPK$identityForUser(uid: string): SshPK$Identity;

  declare function SshPK$identityForEmail(email: string): SshPK$Identity;

  declare export default typeof SshPK;
}
