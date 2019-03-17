declare module "eth-sig-util" {
  /**
   * @returns a 0x-prefixed 130-byte signature.
   */
  declare export function concatSig(v: number, r: Buffer, s: Buffer): string;

  /**
   * @param input a number or a hex string (either 0x-prefixed or not).
   * @returns a 0x-prefixed hex string.
   */
  declare export function normalize(input: string | number): string;

  declare export interface MessageData<T = any> {
    data: T;
  }
  declare export type SignedMessageData<T = any> = {
    sig: string
  } & MessageData<T>;

  declare export function personalSign(
    privateKey: Buffer,
    message: MessageData<>
  ): string;

  declare export function recoverPersonalSignature(
    message: SignedMessageData<>
  ): string;

  declare export function extractPublicKey(
    message: SignedMessageData<>
  ): string;

  declare export interface EIP712LegacyField {
    type: string;
    name: string;
    value: any;
  }
  declare export type EIP712LegacyData = $ReadOnlyArray<EIP712LegacyField>;
  declare export function typedSignatureHash(data: EIP712LegacyData): string;

  declare export function signTypedDataLegacy(
    privateKey: Buffer,
    message: MessageData<EIP712LegacyData>
  ): string;

  declare export function recoverTypedSignatureLegacy(
    message: SignedMessageData<EIP712LegacyData>
  ): string;

  declare export type EncryptionType = "x25519-xsalsa20-poly1305";
  declare export interface EncryptedData {
    version: EncryptionType;
    nonce: string;
    ephemPublicKey: string;
    ciphertext: string;
  }

  /**
   * @param receiverPublicKey a 32-byte base64 string, e.g. from
   * @see `getEncryptionPublicKey`
   * @param data a utf-8 string to be encrypted
   * @param version one of the supported encryption schemes,
   * @see `EncryptionType`
   */
  declare export function encrypt(
    receiverPublicKey: string,
    data: MessageData<string>,
    version: EncryptionType
  ): EncryptedData;

  /**
   * Same as @see `encrypt`, but encrypts a JSON object.
   */
  declare export function encryptSafely(
    receiverPublicKey: string,
    data: MessageData<>,
    version: EncryptionType
  ): EncryptedData;

  /**
   * @param encryptedData result of
   * @see `encrypt`.
   * @param receiverPrivateKey should be a 32-byte Buffer or *not* 0x-prefixed hex string.
   */
  declare export function decrypt(
    encryptedData: EncryptedData,
    receiverPrivateKey: string | Buffer
  ): string;

  /**
   * @param encryptedData result of
   * @see `encryptSafely`.
   * @param receiverPrivateKey should be a 32-byte Buffer or *not* 0x-prefixed hex string.
   */
  declare export function decryptSafely(
    encryptedData: EncryptedData,
    receiverPrivateKey: string | Buffer
  ): any;

  /**
   * @param privateKey should be a 32-byte Buffer or *not* 0x-prefixed hex string.
   * @returns a 32-byte public key as a base64 string.
   */
  declare export function getEncryptionPublicKey(
    privateKey: string | Buffer
  ): string;

  declare export interface EIP712TypeProperty {
    name: string;
    type: string;
  }

  /**
   * Maps type name to an array describing its properties' types.
   * Should include the `EIP712Domain` struct description.
   */
  declare export interface EIP712Types {
    [name: string]: $ReadOnlyArray<EIP712TypeProperty>;
  }
  declare export interface EIP712Message {
    [key: string]: any;
  }

  /**
   * The standard requires to use at least one of these fields.
   * @see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md#definition-of-domainseparator
   */
  declare export interface EIP712Domain {
    name?: string;
    version?: string;
    chainId?: string | number;
    verifyingContract?: string;
    salt?: string;
  }
  declare export interface EIP712TypedData {
    types: EIP712Types;
    primaryType: string;
    domain: EIP712Domain;
    message: EIP712Message;
  }
  declare var TypedDataUtils: typeof npm$namespace$TypedDataUtils;

  declare var npm$namespace$TypedDataUtils: {
    encodeData: typeof TypedDataUtils$encodeData,
    encodeType: typeof TypedDataUtils$encodeType,
    findTypeDependencies: typeof TypedDataUtils$findTypeDependencies,
    hashStruct: typeof TypedDataUtils$hashStruct,
    hashType: typeof TypedDataUtils$hashType,
    sanitizeData: typeof TypedDataUtils$sanitizeData,
    sign: typeof TypedDataUtils$sign
  };
  declare function TypedDataUtils$encodeData(
    primaryType: string,
    data: EIP712Message,
    types: EIP712Types
  ): Buffer;

  declare function TypedDataUtils$encodeType(
    primaryType: string,
    types: EIP712Types
  ): string;

  declare function TypedDataUtils$findTypeDependencies(
    primaryType: string,
    types: EIP712Types
  ): string[];

  declare function TypedDataUtils$hashStruct(
    primaryType: string,
    data: EIP712Message,
    types: EIP712Types
  ): Buffer;

  declare function TypedDataUtils$hashType(
    primaryType: string,
    types: EIP712Types
  ): Buffer;

  declare function TypedDataUtils$sanitizeData(
    data: EIP712TypedData
  ): EIP712TypedData;

  /**
   * @returns hash of the typed data as defined by EIP712 (contrary to the function's name)
   * @see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md#specification
   */
  declare function TypedDataUtils$sign(data: EIP712TypedData): Buffer;

  /**
   * A JSON Schema object equivalent to the EIP712Message type.
   */
  declare export var TYPED_MESSAGE_SCHEMA: any;
  declare export function signTypedData(
    privateKey: Buffer,
    msgParams: MessageData<EIP712TypedData>
  ): string;

  declare export function recoverTypedSignature(
    msgParams: SignedMessageData<EIP712TypedData>
  ): string;
}
