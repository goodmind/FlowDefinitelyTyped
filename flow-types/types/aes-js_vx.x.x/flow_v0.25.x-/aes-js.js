declare module "aes-js" {
  declare export type ByteSource = ArrayBuffer | Uint8Array | number[];
  declare export class AES {
    /**
     * Create a new AES block cipher.
     * @param key The cipher key.
     */
    constructor(key: ByteSource): this;
    encrypt(v: ByteSource): ByteSource;
  }

  /**
   * Create a new Counter state for CTR cipher mode.
   * @param initialValue The Counter initial value.
   */
  declare export class Counter {
    constructor(initialValue: number): this;
    setValue(value: number): void;
    setBytes(bytes: ByteSource): void;
    increment(): void;
  }

  declare var npm$namespace$ModeOfOperation: {
    ecb: typeof ModeOfOperation$ecb,
    cbc: typeof ModeOfOperation$cbc,
    cfb: typeof ModeOfOperation$cfb,
    ofb: typeof ModeOfOperation$ofb,
    ctr: typeof ModeOfOperation$ctr
  };
  declare class ModeOfOperation$ModeOfOperationECB {
    /**
     * Create a new ECB stream cipher.
     * @param key The cipher key.
     */
    constructor(key: ByteSource): this;
    encrypt(v: ByteSource): Uint8Array;
    decrypt(v: ByteSource): Uint8Array;
  }

  declare class ModeOfOperation$ModeOfOperationCBC {
    /**
     * Create a new CBC stream cipher.
     * @param key The cipher key.
     * @param iv The cipher initialization vector.
     */
    constructor(key: ByteSource, iv: ByteSource): this;
    encrypt(v: ByteSource): Uint8Array;
    decrypt(v: ByteSource): Uint8Array;
  }

  declare class ModeOfOperation$ModeOfOperationCFB {
    /**
     * Create a new CFB stream cipher.
     * @param key The cipher key.
     * @param iv The cipher initialization vector.
     * @param segmentSize The cipher segment size.
     */
    constructor(key: ByteSource, iv: ByteSource, segmentSize: number): this;
    encrypt(v: ByteSource): Uint8Array;
    decrypt(v: ByteSource): Uint8Array;
  }

  declare class ModeOfOperation$ModeOfOperationOFB {
    /**
     * Create a new OFB stream cipher.
     * @param key The cipher key.
     * @param iv The cipher initialization vector.
     */
    constructor(key: ByteSource, iv: ByteSource): this;
    encrypt(v: ByteSource): Uint8Array;
    decrypt(v: ByteSource): Uint8Array;
  }

  declare class ModeOfOperation$ModeOfOperationCTR {
    /**
     * Create a new CTR stream cipher.
     * @param key The cipher key.
     * @param counter The cipher counter state.
     */
    constructor(key: ByteSource, counter?: Counter): this;
    encrypt(v: ByteSource): Uint8Array;
    decrypt(v: ByteSource): Uint8Array;
  }

  declare var ModeOfOperation$ecb: typeof ModeOfOperationECB;

  declare var ModeOfOperation$cbc: typeof ModeOfOperationCBC;

  declare var ModeOfOperation$cfb: typeof ModeOfOperationCFB;

  declare var ModeOfOperation$ofb: typeof ModeOfOperationOFB;

  declare var ModeOfOperation$ctr: typeof ModeOfOperationCTR;

  declare var npm$namespace$utf8: {
    toBytes: typeof utf8$toBytes,
    fromBytes: typeof utf8$fromBytes
  };

  /**
   * Convert a UTF8 encoded string to a Uint8Array.
   * @param data The input string.
   */
  declare function utf8$toBytes(data: string): Uint8Array;

  /**
   * Convert an array-like object containing UTF8 data to a string.
   * @param data The input data.
   */
  declare function utf8$fromBytes(data: ByteSource): string;

  declare var npm$namespace$hex: {
    toBytes: typeof hex$toBytes,
    fromBytes: typeof hex$fromBytes
  };

  /**
   * Convert a hexadecimal string to a Uint8Array.
   * @param data The input string.
   */
  declare function hex$toBytes(data: string): Uint8Array;

  /**
   * Convert an array-like object to a hexadecimal string.
   * @param data The input data.
   */
  declare function hex$fromBytes(data: ByteSource): string;

  declare var npm$namespace$pkcs7: {
    pad: typeof pkcs7$pad,
    strip: typeof pkcs7$strip
  };

  /**
   * Add standard PKCS7 padding to an array.
   * @param data The input data.
   */
  declare function pkcs7$pad(data: ByteSource): Uint8Array;

  /**
   * Remove standard PKCS7 padding from an array.
   * @param data The input data.
   */
  declare function pkcs7$strip(data: ByteSource): Uint8Array;
}
