declare module "crypto-js" {
  declare module.exports: typeof CryptoJS;

  declare var CryptoJS: CryptoJS$CryptoJS$Hashes;
  declare interface CryptoJS$Base {
    create(): any;
  }

  declare type CryptoJS$BufferedBlockAlgorithm = {} & CryptoJS$Base;

  declare type CryptoJS$Hasher = {
    update(messageUpdate: CryptoJS$WordArray | string): CryptoJS$Hasher
  } & CryptoJS$BufferedBlockAlgorithm;

  declare type CryptoJS$Cipher = {
    createEncryptor(
      secretPassphrase: string,
      option?: CryptoJS$CipherOption
    ): CryptoJS$Encryptor,
    createDecryptor(
      secretPassphrase: string,
      option?: CryptoJS$CipherOption
    ): CryptoJS$Decryptor
  } & CryptoJS$BufferedBlockAlgorithm;

  declare type CryptoJS$BlockCipher = {} & CryptoJS$Cipher;

  declare type CryptoJS$StreamCipher = {} & CryptoJS$Cipher;

  declare interface CryptoJS$CipherHelper {
    encrypt(
      message: string | CryptoJS$LibWordArray,
      secretPassphrase: string | CryptoJS$WordArray,
      option?: CryptoJS$CipherOption
    ): CryptoJS$WordArray;
    decrypt(
      encryptedMessage: string | CryptoJS$WordArray,
      secretPassphrase: string | CryptoJS$WordArray,
      option?: CryptoJS$CipherOption
    ): CryptoJS$DecryptedMessage;
  }

  declare interface CryptoJS$Encryptor {
    process(messagePart: string): string;
    finalize(): string;
  }

  declare interface CryptoJS$Decryptor {
    process(messagePart: string): string;
    finalize(): string;
  }

  declare interface CryptoJS$LibWordArray {
    sigBytes: number;
    words: number[];
  }

  declare export interface CryptoJS$WordArray {
    iv: string;
    salt: string;
    ciphertext: string;
    key?: string;
    toString(encoder?: CryptoJS$Encoder): string;
  }

  declare export type CryptoJS$DecryptedMessage = {
    toString(encoder?: CryptoJS$Encoder): string
  };

  declare interface CryptoJS$CipherOption {
    iv?: string;
    mode?: CryptoJS$Mode;
    padding?: CryptoJS$Padding;
    [option: string]: any;
  }

  declare interface CryptoJS$Encoder {
    parse(encodedMessage: string): any;
    stringify(words: any): string;
  }

  declare interface CryptoJS$Mode {}

  declare interface CryptoJS$Padding {}

  declare export interface CryptoJS$Hashes {
    MD5(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    MD5(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA1(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA1(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA256(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA256(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA224(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA224(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA512(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA512(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA384(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA384(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA3(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    SHA3(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    RIPEMD160(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    RIPEMD160(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacMD5(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacMD5(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA1(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA1(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA256(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA256(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA224(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA224(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA512(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA512(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA384(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA384(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA3(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacSHA3(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacRIPEMD160(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    HmacRIPEMD160(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    PBKDF2(
      message: string | CryptoJS$LibWordArray,
      key?: string | CryptoJS$WordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    PBKDF2(
      message: string | CryptoJS$LibWordArray,
      ...options: any[]
    ): CryptoJS$WordArray;
    AES: CryptoJS$CipherHelper;
    DES: CryptoJS$CipherHelper;
    TripleDES: CryptoJS$CipherHelper;
    RC4: CryptoJS$CipherHelper;
    RC4Drop: CryptoJS$CipherHelper;
    Rabbit: CryptoJS$CipherHelper;
    RabbitLegacy: CryptoJS$CipherHelper;
    EvpKDF: CryptoJS$CipherHelper;
    algo: {
      AES: CryptoJS$BlockCipher,
      DES: CryptoJS$BlockCipher,
      TripleDES: CryptoJS$BlockCipher,
      RC4: CryptoJS$StreamCipher,
      RC4Drop: CryptoJS$StreamCipher,
      Rabbit: CryptoJS$StreamCipher,
      RabbitLegacy: CryptoJS$StreamCipher,
      EvpKDF: CryptoJS$Base,
      HMAC: CryptoJS$Base,
      PBKDF2: CryptoJS$Base,
      SHA1: CryptoJS$Hasher,
      SHA3: CryptoJS$Hasher,
      SHA256: CryptoJS$Hasher,
      SHA384: CryptoJS$Hasher,
      SHA512: CryptoJS$Hasher,
      MD5: CryptoJS$Hasher,
      RIPEMD160: CryptoJS$Hasher
    };
    format: {
      OpenSSL: any,
      Hex: any
    };
    enc: {
      Latin1: CryptoJS$Encoder,
      Utf8: CryptoJS$Encoder,
      Hex: CryptoJS$Encoder,
      Utf16: CryptoJS$Encoder,
      Utf16LE: CryptoJS$Encoder,
      Base64: CryptoJS$Encoder
    };
    lib: {
      CryptoJS$WordArray: {
        create: (v: any) => CryptoJS$LibWordArray,
        random: (v: number) => string
      }
    };
    mode: {
      CBC: CryptoJS$Mode,
      CFB: CryptoJS$Mode,
      CTR: CryptoJS$Mode,
      CTRGladman: CryptoJS$Mode,
      OFB: CryptoJS$Mode,
      ECB: CryptoJS$Mode
    };
    pad: {
      Pkcs7: CryptoJS$Padding,
      AnsiX923: CryptoJS$Padding,
      Iso10126: CryptoJS$Padding,
      Iso97971: CryptoJS$Padding,
      ZeroPadding: CryptoJS$Padding,
      NoPadding: CryptoJS$Padding
    };
  }
}
