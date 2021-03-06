declare module "sjcl" {
  declare export default typeof sjcl;

  declare var npm$namespace$sjcl: {
    bn: typeof sjcl$bn,
    bitArray: typeof sjcl$bitArray,
    codec: typeof sjcl$codec,
    hash: typeof sjcl$hash,
    exception: typeof sjcl$exception,
    cipher: typeof sjcl$cipher,
    mode: typeof sjcl$mode,
    misc: typeof sjcl$misc,
    ecc: typeof sjcl$ecc,
    random: typeof sjcl$random,
    prng: typeof sjcl$prng,
    keyexchange: typeof sjcl$keyexchange,
    json: typeof sjcl$json,
    encrypt: typeof sjcl$encrypt,
    decrypt: typeof sjcl$decrypt,

    SjclPseudorandomFunctionFamily: typeof sjcl$SjclPseudorandomFunctionFamily,
    SjclECCPublicKey: typeof sjcl$SjclECCPublicKey,
    SjclECCSecretKey: typeof sjcl$SjclECCSecretKey,
    SjclElGamalPublicKey: typeof sjcl$SjclElGamalPublicKey,
    SjclElGamalSecretKey: typeof sjcl$SjclElGamalSecretKey,
    SjclEcdsaPublicKey: typeof sjcl$SjclEcdsaPublicKey,
    SjclEcdsaSecretKey: typeof sjcl$SjclEcdsaSecretKey
  };
  declare export var sjcl$bn: sjcl$BigNumberStatic;

  declare export var sjcl$bitArray: sjcl$BitArrayStatic;

  declare export var sjcl$codec: sjcl$SjclCodecs;

  declare export var sjcl$hash: sjcl$SjclHashes;

  declare export var sjcl$exception: sjcl$SjclExceptions;

  declare export var sjcl$cipher: sjcl$SjclCiphers;

  declare export var sjcl$mode: sjcl$SjclModes;

  declare export var sjcl$misc: sjcl$SjclMisc;

  declare export var sjcl$ecc: sjcl$SjclEllipticCurveCryptography;

  declare export var sjcl$random: sjcl$SjclRandom;

  declare export var sjcl$prng: sjcl$SjclRandomStatic;

  declare export var sjcl$keyexchange: sjcl$SjclKeyExchange;

  declare export var sjcl$json: sjcl$SjclJson;

  declare export var sjcl$encrypt: sjcl$SjclConveninceEncryptor;

  declare export var sjcl$decrypt: sjcl$SjclConveninceDecryptor;

  declare interface sjcl$BigNumber {
    radix: number;
    maxMul: number;
    copy(): sjcl$BigNumber;
    initWith: TypeHelpers$BigNumberBinaryOperator;
    equals(that: number): boolean;
    equals(that: sjcl$BigNumber): boolean;
    getLimb(index: number): number;
    greaterEquals(that: number): boolean;
    greaterEquals(that: sjcl$BigNumber): boolean;
    toString(): string;
    addM: TypeHelpers$BigNumberBinaryOperator;
    doubleM(): sjcl$BigNumber;
    halveM(): sjcl$BigNumber;
    subM: TypeHelpers$BigNumberBinaryOperator;
    mod: TypeHelpers$BigNumberBinaryOperator;
    inverseMod: TypeHelpers$BigNumberBinaryOperator;
    add: TypeHelpers$BigNumberBinaryOperator;
    sub: TypeHelpers$BigNumberBinaryOperator;
    mul: TypeHelpers$BigNumberBinaryOperator;
    square(): sjcl$BigNumber;
    power(n: number): sjcl$BigNumber;
    power(n: sjcl$BigNumber): sjcl$BigNumber;
    power(a: number[]): sjcl$BigNumber;
    mulmod: TypeHelpers$BigNumberTrinaryOperator;
    powermod: TypeHelpers$BigNumberTrinaryOperator;
    trim(): sjcl$BigNumber;
    reduce(): sjcl$BigNumber;
    fullReduce(): sjcl$BigNumber;
    normalize(): sjcl$BigNumber;
    cnormalize(): sjcl$BigNumber;
    toBits(len?: number): sjcl$BitArray;
    bitLength(): number;
  }

  declare interface sjcl$BigNumberStatic {
    new(): sjcl$BigNumber;
    new(n: string): sjcl$BigNumber;
    new(n: number): sjcl$BigNumber;
    new(n: sjcl$BigNumber): sjcl$BigNumber;
    fromBits(bits: sjcl$BitArray): sjcl$BigNumber;
    random: TypeHelpers$Bind1<number>;
    prime: {
      p127: sjcl$PseudoMersennePrimeStatic,
      p25519: sjcl$PseudoMersennePrimeStatic,
      p192k: sjcl$PseudoMersennePrimeStatic,
      p224k: sjcl$PseudoMersennePrimeStatic,
      p256k: sjcl$PseudoMersennePrimeStatic,
      p192: sjcl$PseudoMersennePrimeStatic,
      p224: sjcl$PseudoMersennePrimeStatic,
      p256: sjcl$PseudoMersennePrimeStatic,
      p384: sjcl$PseudoMersennePrimeStatic,
      p521: sjcl$PseudoMersennePrimeStatic
    };
    pseudoMersennePrime(
      exponent: number,
      coeff: number[][]
    ): sjcl$PseudoMersennePrimeStatic;
  }

  declare type sjcl$PseudoMersennePrime = {
    reduce(): sjcl$PseudoMersennePrime,
    fullReduce(): sjcl$PseudoMersennePrime,
    inverse(): sjcl$PseudoMersennePrime
  } & BigNumber;

  declare type sjcl$PseudoMersennePrimeStatic = {
    new(): sjcl$PseudoMersennePrime,
    new(n: string): sjcl$PseudoMersennePrime,
    new(n: number): sjcl$PseudoMersennePrime,
    new(n: sjcl$BigNumber): sjcl$PseudoMersennePrime
  } & BigNumberStatic;

  declare type sjcl$BitArray = {} & Array<number>;

  declare interface sjcl$BitArrayStatic {
    bitSlice(a: sjcl$BitArray, bstart: number, bend: number): sjcl$BitArray;
    extract(a: sjcl$BitArray, bstart: number, blenth: number): number;
    concat(a1: sjcl$BitArray, a2: sjcl$BitArray): sjcl$BitArray;
    bitLength(a: sjcl$BitArray): number;
    clamp(a: sjcl$BitArray, len: number): sjcl$BitArray;
    partial(len: number, x: number, _end?: number): number;
    getPartial(x: number): number;
    equal(a: sjcl$BitArray, b: sjcl$BitArray): boolean;
    _shiftRight(
      a: sjcl$BitArray,
      shift: number,
      carry?: number,
      out?: sjcl$BitArray
    ): sjcl$BitArray;
    _xor4(x: number[], y: number[]): number[];
  }

  declare interface sjcl$SjclCodec<T> {
    fromBits(bits: sjcl$BitArray): T;
    toBits(value: T): sjcl$BitArray;
  }

  declare interface sjcl$SjclCodecs {
    utf8String: sjcl$SjclCodec<string>;
    hex: sjcl$SjclCodec<string>;
    bytes: sjcl$SjclCodec<number[]>;
    base64: sjcl$SjclCodec<string>;
    base64url: sjcl$SjclCodec<string>;
  }

  declare interface sjcl$SjclHash {
    reset(): sjcl$SjclHash;
    update(data: string): sjcl$SjclHash;
    update(data: sjcl$BitArray): sjcl$SjclHash;
    finalize(): sjcl$BitArray;
  }

  declare interface sjcl$SjclHashStatic {
    new(hash?: sjcl$SjclHash): sjcl$SjclHash;
    hash(data: string): sjcl$BitArray;
    hash(data: sjcl$BitArray): sjcl$BitArray;
  }

  declare interface sjcl$SjclHashes {
    sha1: sjcl$SjclHashStatic;
    sha256: sjcl$SjclHashStatic;
    sha512: sjcl$SjclHashStatic;
  }

  declare interface sjcl$SjclExceptions {
    corrupt: sjcl$SjclExceptionFactory;
    invalid: sjcl$SjclExceptionFactory;
    bug: sjcl$SjclExceptionFactory;
    notReady: sjcl$SjclExceptionFactory;
  }

  declare interface sjcl$SjclExceptionFactory {
    new(message: string): Error;
  }

  declare interface sjcl$SjclCiphers {
    aes: sjcl$SjclCipherStatic;
  }

  declare interface sjcl$SjclCipher {
    encrypt(data: number[]): number[];
    decrypt(data: number[]): number[];
  }

  declare interface sjcl$SjclCipherStatic {
    new(key: number[]): sjcl$SjclCipher;
  }

  declare interface sjcl$SjclModes {
    gcm: sjcl$SjclGCMMode;
    ccm: sjcl$SjclCCMMode;
    ocb2: sjcl$SjclOCB2Mode;
    cbc: sjcl$SjclCBCMode;
  }

  declare interface sjcl$SjclGCMMode {
    encrypt(
      prp: sjcl$SjclCipher,
      plaintext: sjcl$BitArray,
      iv: sjcl$BitArray,
      adata?: sjcl$BitArray,
      tlen?: number
    ): sjcl$BitArray;
    decrypt(
      prp: sjcl$SjclCipher,
      ciphertext: sjcl$BitArray,
      iv: sjcl$BitArray,
      adata?: sjcl$BitArray,
      tlen?: number
    ): sjcl$BitArray;
  }

  declare interface sjcl$SjclCCMMode {
    encrypt(
      prp: sjcl$SjclCipher,
      plaintext: sjcl$BitArray,
      iv: sjcl$BitArray,
      adata?: sjcl$BitArray,
      tlen?: number
    ): sjcl$BitArray;
    decrypt(
      prp: sjcl$SjclCipher,
      ciphertext: sjcl$BitArray,
      iv: sjcl$BitArray,
      adata?: sjcl$BitArray,
      tlen?: number
    ): sjcl$BitArray;
  }

  declare interface sjcl$SjclOCB2Mode {
    encrypt(
      prp: sjcl$SjclCipher,
      plaintext: sjcl$BitArray,
      iv: sjcl$BitArray,
      adata?: sjcl$BitArray,
      tlen?: number,
      premac?: boolean
    ): sjcl$BitArray;
    decrypt(
      prp: sjcl$SjclCipher,
      ciphertext: sjcl$BitArray,
      iv: sjcl$BitArray,
      adata?: sjcl$BitArray,
      tlen?: number,
      premac?: boolean
    ): sjcl$BitArray;
    pmac(prp: sjcl$SjclCipher, adata: sjcl$BitArray): number[];
  }

  declare interface sjcl$SjclCBCMode {
    encrypt(
      prp: sjcl$SjclCipher,
      plaintext: sjcl$BitArray,
      iv: sjcl$BitArray,
      adata?: sjcl$BitArray
    ): sjcl$BitArray;
    decrypt(
      prp: sjcl$SjclCipher,
      ciphertext: sjcl$BitArray,
      iv: sjcl$BitArray,
      adata?: sjcl$BitArray
    ): sjcl$BitArray;
  }

  declare interface sjcl$Pbkdf2Params {
    iter?: number;
    salt?: sjcl$BitArray;
  }

  declare interface sjcl$SjclMisc {
    pbkdf2(
      password: string,
      salt: string,
      count?: number,
      length?: number,
      Prff?: sjcl$SjclPseudorandomFunctionFamilyStatic
    ): sjcl$BitArray;
    pbkdf2(
      password: sjcl$BitArray,
      salt: string,
      count?: number,
      length?: number,
      Prff?: sjcl$SjclPseudorandomFunctionFamilyStatic
    ): sjcl$BitArray;
    pbkdf2(
      password: sjcl$BitArray,
      salt: sjcl$BitArray,
      count?: number,
      length?: number,
      Prff?: sjcl$SjclPseudorandomFunctionFamilyStatic
    ): sjcl$BitArray;
    pbkdf2(
      password: string,
      salt: sjcl$BitArray,
      count?: number,
      length?: number,
      Prff?: sjcl$SjclPseudorandomFunctionFamilyStatic
    ): sjcl$BitArray;
    hmac: sjcl$SjclHmacStatic;
    cachedPbkdf2(
      password: string,
      obj?: sjcl$Pbkdf2Params
    ): {
      key: sjcl$BitArray,
      salt: sjcl$BitArray
    };
  }

  declare class sjcl$SjclPseudorandomFunctionFamily {
    encrypt(data: string): sjcl$BitArray;
    encrypt(data: sjcl$BitArray): sjcl$BitArray;
  }

  declare type sjcl$SjclHmac = {
    mac(data: string): sjcl$BitArray,
    mac(data: sjcl$BitArray): sjcl$BitArray,
    reset(): void,
    update(data: string): void,
    update(data: sjcl$BitArray): void,
    digest(): sjcl$BitArray
  } & SjclPseudorandomFunctionFamily;

  declare interface sjcl$SjclPseudorandomFunctionFamilyStatic {
    new(key: sjcl$BitArray): sjcl$SjclPseudorandomFunctionFamily;
  }

  declare interface sjcl$SjclHmacStatic {
    new(key: sjcl$BitArray, Hash?: sjcl$SjclHashStatic): sjcl$SjclHmac;
  }

  declare interface sjcl$SjclEllipticCurveCryptography {
    point: sjcl$SjclEllipticalPointStatic;
    pointJac: sjcl$SjclPointJacobianStatic;
    curve: sjcl$SjclEllipticalCurveStatic;
    curves: {
      c192: sjcl$SjclEllipticalCurve,
      c224: sjcl$SjclEllipticalCurve,
      c256: sjcl$SjclEllipticalCurve,
      c384: sjcl$SjclEllipticalCurve,
      k192: sjcl$SjclEllipticalCurve,
      k224: sjcl$SjclEllipticalCurve,
      k256: sjcl$SjclEllipticalCurve
    };
    basicKey: sjcl$SjclECCBasic;
    elGamal: sjcl$SjclElGamal;
    ecdsa: sjcl$SjclEcdsa;
  }

  declare interface sjcl$SjclEllipticalPoint {
    toJac(): sjcl$SjclPointJacobian;
    mult(k: sjcl$BigNumber): sjcl$SjclEllipticalPoint;
    mult2(
      k: sjcl$BigNumber,
      k2: sjcl$BigNumber,
      affine2: sjcl$SjclEllipticalPoint
    ): sjcl$SjclEllipticalPoint;
    multiples(): Array<sjcl$SjclEllipticalPoint>;
    isValid(): boolean;
    toBits(): sjcl$BitArray;
  }

  declare interface sjcl$SjclEllipticalPointStatic {
    new(
      curve: sjcl$SjclEllipticalCurve,
      x?: sjcl$BigNumber,
      y?: sjcl$BigNumber
    ): sjcl$SjclEllipticalPoint;
  }

  declare interface sjcl$SjclPointJacobian {
    add(T: sjcl$SjclEllipticalPoint): sjcl$SjclPointJacobian;
    doubl(): sjcl$SjclPointJacobian;
    toAffine(): sjcl$SjclEllipticalPoint;
    mult(
      k: sjcl$BigNumber,
      affine: sjcl$SjclEllipticalPoint
    ): sjcl$SjclPointJacobian;
    mult2(
      k1: sjcl$BigNumber,
      affine: sjcl$SjclEllipticalPoint,
      k2: sjcl$BigNumber,
      affine2: sjcl$SjclEllipticalPoint
    ): sjcl$SjclPointJacobian;
    isValid(): boolean;
  }

  declare interface sjcl$SjclPointJacobianStatic {
    new(
      curve: sjcl$SjclEllipticalCurve,
      x?: sjcl$BigNumber,
      y?: sjcl$BigNumber,
      z?: sjcl$BigNumber
    ): sjcl$SjclPointJacobian;
  }

  declare interface sjcl$SjclEllipticalCurve {
    fromBits(bits: sjcl$BitArray): sjcl$SjclEllipticalPoint;
  }

  declare interface sjcl$SjclEllipticalCurveStatic {
    new(
      Field: sjcl$BigNumber,
      r: sjcl$BigNumber,
      a: sjcl$BigNumber,
      b: sjcl$BigNumber,
      x: sjcl$BigNumber,
      y: sjcl$BigNumber
    ): sjcl$SjclEllipticalCurve;
  }

  declare interface sjcl$SjclKeyPair<
    P: sjcl$SjclECCPublicKey,
    S: sjcl$SjclECCSecretKey
  > {
    pub: P;
    sec: S;
  }

  declare interface sjcl$SjclKeysGenerator<
    P: sjcl$SjclECCPublicKey,
    S: sjcl$SjclECCSecretKey
  > {
    (
      curve: sjcl$SjclEllipticalCurve,
      paranoia: number,
      sec?: sjcl$BigNumber
    ): sjcl$SjclKeyPair<P, S>;
    (
      curve: number,
      paranoia: number,
      sec?: sjcl$BigNumber
    ): sjcl$SjclKeyPair<P, S>;
  }

  declare interface sjcl$SjclECCPublicKeyData {
    x: sjcl$BitArray;
    y: sjcl$BitArray;
  }

  declare class sjcl$SjclECCPublicKey {
    get(): sjcl$SjclECCPublicKeyData;
  }

  declare class sjcl$SjclECCSecretKey {
    get(): sjcl$BitArray;
  }

  declare interface sjcl$SjclECCPublicKeyFactory<T: sjcl$SjclECCPublicKey> {
    new(curve: sjcl$SjclEllipticalCurve, point: sjcl$SjclEllipticalPoint): T;
    new(curve: sjcl$SjclEllipticalCurve, point: sjcl$BitArray): T;
  }

  declare interface sjcl$SjclECCSecretKeyFactory<T: sjcl$SjclECCSecretKey> {
    new(curve: sjcl$SjclEllipticalCurve, exponent: sjcl$BigNumber): T;
  }

  declare interface sjcl$SjclECCBasic {
    publicKey: sjcl$SjclECCPublicKeyFactory<sjcl$SjclECCPublicKey>;
    secretKey: sjcl$SjclECCSecretKeyFactory<sjcl$SjclECCSecretKey>;
    generateKeys(
      cn: string
    ): sjcl$SjclKeysGenerator<sjcl$SjclECCPublicKey, sjcl$SjclECCSecretKey>;
  }

  declare class sjcl$SjclElGamalPublicKey mixins SjclECCPublicKey {
    kem(
      paranoia: number
    ): {
      key: sjcl$BitArray,
      tag: sjcl$BitArray
    };
  }

  declare class sjcl$SjclElGamalSecretKey mixins SjclECCSecretKey {
    unkem(tag: sjcl$BitArray): sjcl$BitArray;
    dh(pk: sjcl$SjclECCPublicKey): sjcl$BitArray;
  }

  declare interface sjcl$SjclElGamal {
    publicKey: sjcl$SjclECCPublicKeyFactory<sjcl$SjclElGamalPublicKey>;
    secretKey: sjcl$SjclECCSecretKeyFactory<sjcl$SjclElGamalSecretKey>;
    generateKeys: sjcl$SjclKeysGenerator<
      sjcl$SjclElGamalPublicKey,
      sjcl$SjclElGamalSecretKey
    >;
  }

  declare class sjcl$SjclEcdsaPublicKey mixins SjclECCPublicKey {
    verify(
      hash: sjcl$BitArray,
      rs: sjcl$BitArray,
      fakeLegacyVersion: boolean
    ): boolean;
  }

  declare class sjcl$SjclEcdsaSecretKey mixins SjclECCSecretKey {
    sign(
      hash: sjcl$BitArray,
      paranoia: number,
      fakeLegacyVersion: boolean,
      fixedKForTesting?: sjcl$BigNumber
    ): sjcl$BitArray;
  }

  declare interface sjcl$SjclEcdsa {
    publicKey: sjcl$SjclECCPublicKeyFactory<sjcl$SjclEcdsaPublicKey>;
    secretKey: sjcl$SjclECCSecretKeyFactory<sjcl$SjclEcdsaSecretKey>;
    generateKeys: sjcl$SjclKeysGenerator<
      sjcl$SjclEcdsaPublicKey,
      sjcl$SjclEcdsaSecretKey
    >;
  }

  declare interface sjcl$SjclRandom {
    randomWords(nwords: number, paranoia?: number): sjcl$BitArray;
    setDefaultParanoia(paranoia: number, allowZeroParanoia: string): void;
    addEntropy(data: number, estimatedEntropy: number, source: string): void;
    addEntropy(data: number[], estimatedEntropy: number, source: string): void;
    addEntropy(data: string, estimatedEntropy: number, source: string): void;
    isReady(paranoia?: number): boolean;
    getProgress(paranoia?: number): number;
    startCollectors(): void;
    stopCollectors(): void;
    addEventListener(name: string, cb: Function): void;
    removeEventListener(name: string, cb: Function): void;
  }

  declare interface sjcl$SjclRandomStatic {
    new(defaultParanoia: number): sjcl$SjclRandom;
  }

  declare interface sjcl$SjclKeyExchange {
    srp: sjcl$SecureRemotePassword;
  }

  declare interface sjcl$SjclSRPGroup {
    N: sjcl$BigNumber;
    g: sjcl$BigNumber;
  }

  declare interface sjcl$SecureRemotePassword {
    makeVerifier(
      username: string,
      password: string,
      salt: sjcl$BitArray,
      group: sjcl$SjclSRPGroup
    ): sjcl$BitArray;
    makeX(
      username: string,
      password: string,
      salt: sjcl$BitArray
    ): sjcl$BitArray;
    knownGroup(i: string): sjcl$SjclSRPGroup;
    knownGroup(i: number): sjcl$SjclSRPGroup;
  }

  declare interface sjcl$SjclCipherParams {
    v?: number;
    iter?: number;
    ks?: number;
    ts?: number;
    mode?: string;
    adata?: string;
    cipher?: string;
  }

  declare type sjcl$SjclCipherEncryptParams = {
    salt: sjcl$BitArray,
    iv: sjcl$BitArray
  } & SjclCipherParams;

  declare type sjcl$SjclCipherDecryptParams = {
    salt?: sjcl$BitArray,
    iv?: sjcl$BitArray
  } & SjclCipherParams;

  declare type sjcl$SjclCipherEncrypted = {
    kemtag?: sjcl$BitArray,
    ct: sjcl$BitArray
  } & SjclCipherEncryptParams;

  declare type sjcl$SjclCipherDecrypted = {
    key: sjcl$BitArray
  } & SjclCipherEncrypted;

  declare interface sjcl$SjclConveninceEncryptor {
    (
      password: string,
      plaintext: string,
      params?: sjcl$SjclCipherEncryptParams,
      rp?: sjcl$SjclCipherEncrypted
    ): sjcl$SjclCipherEncrypted;
    (
      password: sjcl$BitArray,
      plaintext: string,
      params?: sjcl$SjclCipherEncryptParams,
      rp?: sjcl$SjclCipherEncrypted
    ): sjcl$SjclCipherEncrypted;
    (
      password: sjcl$SjclElGamalPublicKey,
      plaintext: string,
      params?: sjcl$SjclCipherEncryptParams,
      rp?: sjcl$SjclCipherEncrypted
    ): sjcl$SjclCipherEncrypted;
  }

  declare interface sjcl$SjclConveninceDecryptor {
    (
      password: string,
      ciphertext: sjcl$SjclCipherEncrypted,
      params?: sjcl$SjclCipherDecryptParams,
      rp?: sjcl$SjclCipherDecrypted
    ): string;
    (
      password: string,
      ciphertext: string,
      params?: sjcl$SjclCipherDecryptParams,
      rp?: sjcl$SjclCipherDecrypted
    ): string;
    (
      password: sjcl$BitArray,
      ciphertext: sjcl$SjclCipherEncrypted,
      params?: sjcl$SjclCipherDecryptParams,
      rp?: sjcl$SjclCipherDecrypted
    ): string;
    (
      password: sjcl$SjclElGamalSecretKey,
      ciphertext: sjcl$SjclCipherEncrypted,
      params?: sjcl$SjclCipherDecryptParams,
      rp?: sjcl$SjclCipherDecrypted
    ): string;
  }

  declare interface sjcl$SjclJson {
    encrypt: sjcl$SjclConveninceEncryptor;
    decrypt: sjcl$SjclConveninceDecryptor;
    encode(obj: Object): string;
    decode(obj: string): Object;
  }

  declare interface sjcl$TypeHelpers$One<T> {
    (value: T): sjcl$BigNumber;
  }

  declare type sjcl$TypeHelpers$BigNumberBinaryOperator = {} & One<number> &
    One<string> &
    One<sjcl$BigNumber>;

  declare interface sjcl$TypeHelpers$Two<T1, T2> {
    (x: T1, N: T2): sjcl$BigNumber;
  }

  declare type sjcl$TypeHelpers$Bind1<T> = {} & Two<number, T> &
    Two<string, T> &
    Two<sjcl$BigNumber, T>;

  declare type sjcl$TypeHelpers$BigNumberTrinaryOperator = {} & Bind1<number> &
    Bind1<string> &
    Bind1<sjcl$BigNumber>;
}
