declare module "stellar-base" {
  declare export {};

  declare export class Account {
    constructor(accountId: string, sequence: string | number): this;
    accountId(): string;
    sequenceNumber(): string;
    incrementSequenceNumber(): void;
  }
  declare type AssetType$native = "native";

  declare type AssetType$credit4 = "credit_alphanum4";

  declare type AssetType$credit12 = "credit_alphanum12";
  declare export type AssetType =
    | AssetType$native
    | AssetType$credit4
    | AssetType$credit12;
  declare export class Asset {
    static native(): xdr$Asset;
    static fromOperation(xdr: xdr$Asset): xdr$Asset;
    constructor(code: string, issuer: string): this;
    getCode(): string;
    getIssuer(): string;
    getAssetType(): AssetType;
    isNative(): boolean;
    equals(other: xdr$Asset): boolean;
    toXDRObject(): xdr$Asset;
    code: string;
    issuer: string;
  }
  declare export var FastSigning: boolean;
  declare export type KeypairType = "ed25519";
  declare export class Keypair {
    static fromRawEd25519Seed(secretSeed: Buffer): Keypair;
    static fromBase58Seed(secretSeed: string): Keypair;
    static fromSecret(secretKey: string): Keypair;
    static master(): Keypair;
    static fromPublicKey(publicKey: string): Keypair;
    static random(): Keypair;
    constructor(
      keys:
        | {
            type: KeypairType,
            secretKey: string,
            publicKey?: string
          }
        | {
            type: KeypairType,
            publicKey: string
          }
    ): this;
    type: KeypairType;
    publicKey(): string;
    secret(): string;
    rawPublicKey(): Buffer;
    rawSecretKey(): Buffer;
    canSign(): boolean;
    sign(data: Buffer): xdr$Signature;
    signDecorated(data: Buffer): xdr$DecoratedSignature;
    signatureHint(): xdr$SignatureHint;
    verify(data: Buffer, signature: xdr$Signature): boolean;
  }
  declare export var MemoNone: any; // "none";
  declare export var MemoID: any; // "id";
  declare export var MemoText: any; // "text";
  declare export var MemoHash: any; // "hash";
  declare export var MemoReturn: any; // "return";
  declare type MemoType$None = typeof MemoNone;

  declare type MemoType$ID = typeof MemoID;

  declare type MemoType$Text = typeof MemoText;

  declare type MemoType$Hash = typeof MemoHash;

  declare type MemoType$Return = typeof MemoReturn;
  declare export type MemoType =
    | MemoType$None
    | MemoType$ID
    | MemoType$Text
    | MemoType$Hash
    | MemoType$Return;
  declare export type MemoValue = null | string | Buffer;
  declare export class Memo<T: MemoType = MemoType> {
    static fromXDRObject(memo: xdr$Memo): xdr$Memo;
    static hash(hash: string): xdr$Memo<MemoType$Hash>;
    static id(id: string): xdr$Memo<MemoType$ID>;
    static none(): xdr$Memo<MemoType$None>;
    static return(hash: string): xdr$Memo<MemoType$Return>;
    static text(text: string): xdr$Memo<MemoType$Text>;
    constructor(type: MemoType$None, value?: null): this;
    constructor(type: MemoType$Hash | MemoType$Return, value: Buffer): this;
    constructor(
      type: MemoType$Hash | MemoType$Return | MemoType$ID | MemoType$Text,
      value: string
    ): this;
    constructor(type: T, value: MemoValue): this;
    type: T;
    value: "There was Conditional Type, use $Call utility type";
    toXDRObject(): xdr$Memo;
  }

  declare export var Networks: {|
    +PUBLIC: "Public Global Stellar Network ; September 2015", // "Public Global Stellar Network ; September 2015"
    +TESTNET: "Test SDF Network ; September 2015" // "Test SDF Network ; September 2015"
  |};

  declare export class Network {
    static use(network: Network): void;
    static usePublicNetwork(): void;
    static useTestNetwork(): void;
    static current(): Network;
    constructor(passphrase: string): this;
    networkPassphrase(): string;
    networkId(): string;
  }
  declare export var AuthRequiredFlag: 1;
  declare export var AuthRevocableFlag: 2;
  declare export var AuthImmutableFlag: 4;
  declare type AuthFlag$required = typeof AuthRequiredFlag;

  declare type AuthFlag$revocable = typeof AuthRevocableFlag;

  declare type AuthFlag$rmmutable = typeof AuthImmutableFlag;
  declare export type AuthFlag =
    | AuthFlag$required
    | AuthFlag$revocable
    | AuthFlag$rmmutable;
  declare interface Signer$Ed25519PublicKey {
    ed25519PublicKey: string;
    weight: number | void;
    ed25519PublicKey: string;
    weight?: number | string;
  }

  declare interface Signer$Sha256Hash {
    sha256Hash: Buffer;
    weight: number | void;
    sha256Hash: Buffer | string;
    weight?: number | string;
  }

  declare interface Signer$PreAuthTx {
    preAuthTx: Buffer;
    weight: number | void;
    preAuthTx: Buffer | string;
    weight?: number | string;
  }
  declare export type Signer =
    | Signer$Ed25519PublicKey
    | Signer$Sha256Hash
    | Signer$PreAuthTx;
  declare interface SignerOptions$Ed25519PublicKey {
    ed25519PublicKey: string;
    weight: number | void;
    ed25519PublicKey: string;
    weight?: number | string;
  }

  declare interface SignerOptions$Sha256Hash {
    sha256Hash: Buffer;
    weight: number | void;
    sha256Hash: Buffer | string;
    weight?: number | string;
  }

  declare interface SignerOptions$PreAuthTx {
    preAuthTx: Buffer;
    weight: number | void;
    preAuthTx: Buffer | string;
    weight?: number | string;
  }
  declare export type SignerOptions =
    | SignerOptions$Ed25519PublicKey
    | SignerOptions$Sha256Hash
    | SignerOptions$PreAuthTx;
  declare type OperationType$CreateAccount = "createAccount";

  declare type OperationType$Payment = "payment";

  declare type OperationType$PathPayment = "pathPayment";

  declare type OperationType$CreatePassiveOffer = "createPassiveOffer";

  declare type OperationType$ManageOffer = "manageOffer";

  declare type OperationType$SetOptions = "setOptions";

  declare type OperationType$ChangeTrust = "changeTrust";

  declare type OperationType$AllowTrust = "allowTrust";

  declare type OperationType$AccountMerge = "accountMerge";

  declare type OperationType$Inflation = "inflation";

  declare type OperationType$ManageData = "manageData";

  declare type OperationType$BumpSequence = "bumpSequence";
  declare export type OperationType =
    | OperationType$CreateAccount
    | OperationType$Payment
    | OperationType$PathPayment
    | OperationType$CreatePassiveOffer
    | OperationType$ManageOffer
    | OperationType$SetOptions
    | OperationType$ChangeTrust
    | OperationType$AllowTrust
    | OperationType$AccountMerge
    | OperationType$Inflation
    | OperationType$ManageData
    | OperationType$BumpSequence;
  declare interface OperationOptions$BaseOptions {
    source?: string;
  }

  declare type OperationOptions$AccountMerge = "accountMerge";

  declare type OperationOptions$AllowTrust = "allowTrust";

  declare type OperationOptions$ChangeTrust = "changeTrust";

  declare type OperationOptions$CreateAccount = "createAccount";

  declare type OperationOptions$CreatePassiveOffer = "createPassiveOffer";

  declare type OperationOptions$ManageOffer = "manageOffer";

  declare type OperationOptions$Inflation = "inflation";

  declare type OperationOptions$ManageData = "manageData";

  declare type OperationOptions$PathPayment = "pathPayment";

  declare type OperationOptions$Payment = "payment";

  declare type OperationOptions$SetOptions = "setOptions";

  declare type OperationOptions$BumpSequence = "bumpSequence";
  declare export type OperationOptions =
    | OperationOptions$CreateAccount
    | OperationOptions$Payment
    | OperationOptions$PathPayment
    | OperationOptions$CreatePassiveOffer
    | OperationOptions$ManageOffer
    | OperationOptions$SetOptions
    | OperationOptions$ChangeTrust
    | OperationOptions$AllowTrust
    | OperationOptions$AccountMerge
    | OperationOptions$Inflation
    | OperationOptions$ManageData
    | OperationOptions$BumpSequence;

  declare var npm$namespace$Operation: {
    accountMerge: typeof Operation$accountMerge,
    allowTrust: typeof Operation$allowTrust,
    changeTrust: typeof Operation$changeTrust,
    createAccount: typeof Operation$createAccount,
    createPassiveOffer: typeof Operation$createPassiveOffer,
    inflation: typeof Operation$inflation,
    manageData: typeof Operation$manageData,
    manageOffer: typeof Operation$manageOffer,
    pathPayment: typeof Operation$pathPayment,
    payment: typeof Operation$payment,
    setOptions: typeof Operation$setOptions,
    bumpSequence: typeof Operation$bumpSequence,
    fromXDRObject: typeof Operation$fromXDRObject
  };
  declare interface Operation$BaseOperation<T: OperationType = OperationType> {
    type: T;
    source?: string;
  }

  declare type Operation$AccountMerge = "accountMerge";

  declare function Operation$accountMerge(
    options: OperationOptions$AccountMerge
  ): xdr$Operation<Operation$AccountMerge>;

  declare type Operation$AllowTrust = "allowTrust";

  declare function Operation$allowTrust(
    options: OperationOptions$AllowTrust
  ): xdr$Operation<Operation$AllowTrust>;

  declare type Operation$ChangeTrust = "changeTrust";

  declare function Operation$changeTrust(
    options: OperationOptions$ChangeTrust
  ): xdr$Operation<Operation$ChangeTrust>;

  declare type Operation$CreateAccount = "createAccount";

  declare function Operation$createAccount(
    options: OperationOptions$CreateAccount
  ): xdr$Operation<Operation$CreateAccount>;

  declare type Operation$CreatePassiveOffer = "createPassiveOffer";

  declare function Operation$createPassiveOffer(
    options: OperationOptions$CreatePassiveOffer
  ): xdr$Operation<Operation$CreatePassiveOffer>;

  declare type Operation$Inflation = "inflation";

  declare function Operation$inflation(
    options: OperationOptions$Inflation
  ): xdr$Operation<Operation$Inflation>;

  declare type Operation$ManageData = "manageData";

  declare function Operation$manageData(
    options: OperationOptions$ManageData
  ): xdr$Operation<Operation$ManageData>;

  declare type Operation$ManageOffer = "manageOffer";

  declare function Operation$manageOffer(
    options: OperationOptions$ManageOffer
  ): xdr$Operation<Operation$ManageOffer>;

  declare type Operation$PathPayment = "pathPayment";

  declare function Operation$pathPayment(
    options: OperationOptions$PathPayment
  ): xdr$Operation<Operation$PathPayment>;

  declare type Operation$Payment = "payment";

  declare function Operation$payment(
    options: OperationOptions$Payment
  ): xdr$Operation<Operation$Payment>;

  declare type Operation$SetOptions = "setOptions";

  declare function Operation$setOptions<T: SignerOptions>(
    options: OperationOptions$SetOptions<T>
  ): xdr$Operation<Operation$SetOptions<T>>;

  declare type Operation$BumpSequence = "bumpSequence";

  declare function Operation$bumpSequence(
    options: OperationOptions$BumpSequence
  ): xdr$Operation<Operation$BumpSequence>;

  declare function Operation$fromXDRObject<T: Operation>(
    xdrOperation: xdr$Operation<T>
  ): T;

  declare export type Operation =
    | Operation$CreateAccount
    | Operation$Payment
    | Operation$PathPayment
    | Operation$CreatePassiveOffer
    | Operation$ManageOffer
    | Operation$SetOptions
    | Operation$ChangeTrust
    | Operation$AllowTrust
    | Operation$AccountMerge
    | Operation$Inflation
    | Operation$ManageData
    | Operation$BumpSequence;

  declare var npm$namespace$StrKey: {
    encodeEd25519PublicKey: typeof StrKey$encodeEd25519PublicKey,
    decodeEd25519PublicKey: typeof StrKey$decodeEd25519PublicKey,
    isValidEd25519PublicKey: typeof StrKey$isValidEd25519PublicKey,
    encodeEd25519SecretSeed: typeof StrKey$encodeEd25519SecretSeed,
    decodeEd25519SecretSeed: typeof StrKey$decodeEd25519SecretSeed,
    isValidEd25519SecretSeed: typeof StrKey$isValidEd25519SecretSeed,
    encodePreAuthTx: typeof StrKey$encodePreAuthTx,
    decodePreAuthTx: typeof StrKey$decodePreAuthTx,
    encodeSha256Hash: typeof StrKey$encodeSha256Hash,
    decodeSha256Hash: typeof StrKey$decodeSha256Hash
  };
  declare function StrKey$encodeEd25519PublicKey(data: Buffer): string;

  declare function StrKey$decodeEd25519PublicKey(data: string): Buffer;

  declare function StrKey$isValidEd25519PublicKey(Key: string): boolean;

  declare function StrKey$encodeEd25519SecretSeed(data: Buffer): string;

  declare function StrKey$decodeEd25519SecretSeed(data: string): Buffer;

  declare function StrKey$isValidEd25519SecretSeed(seed: string): boolean;

  declare function StrKey$encodePreAuthTx(data: Buffer): string;

  declare function StrKey$decodePreAuthTx(data: string): Buffer;

  declare function StrKey$encodeSha256Hash(data: Buffer): string;

  declare function StrKey$decodeSha256Hash(data: string): Buffer;

  declare export class Transaction<
    TMemo: xdr$Memo = xdr$Memo,
    TOps: Operation[] = Operation[]
  > {
    constructor(envelope: string | xdr$TransactionEnvelope): this;
    hash(): Buffer;
    sign(...keypairs: Keypair[]): void;
    signatureBase(): Buffer;
    signHashX(preimage: Buffer | string): void;
    toEnvelope(): xdr$TransactionEnvelope;
    operations: TOps;
    sequence: number;
    fee: number;
    source: string;
    memo: TMemo;
    signatures: xdr$DecoratedSignature[];
  }
  declare export var TimeoutInfinite: any; // 0;
  declare export class TransactionBuilder {
    constructor(
      sourceAccount: Account,
      options?: TransactionBuilder$TransactionBuilderOptions
    ): this;
    addOperation(operation: xdr$Operation): this;
    addMemo(memo: xdr$Memo): this;
    setTimeout(timeoutInSeconds: number): this;
    build(): Transaction;
  }
  declare interface TransactionBuilder$TransactionBuilderOptions {
    fee?: number;
    timebounds?: {
      minTime?: number | string,
      maxTime?: number | string
    };
    memo?: xdr$Memo;
  }

  declare var npm$namespace$xdrHidden: {
    Operation2: typeof xdrHidden$Operation2
  };
  declare class xdrHidden$Operation2<T: Operation = Operation>
    mixins xdr$XDRStruct {
    static fromXDR(xdr: Buffer): xdr$Operation;
  }

  declare var npm$namespace$xdr: {
    XDRStruct: typeof xdr$XDRStruct,
    Asset: typeof xdr$Asset,
    Memo: typeof xdr$Memo,
    TransactionEnvelope: typeof xdr$TransactionEnvelope,
    DecoratedSignature: typeof xdr$DecoratedSignature,
    TransactionResult: typeof xdr$TransactionResult
  };
  declare class xdr$XDRStruct {
    static fromXDR(xdr: Buffer): xdr$XDRStruct;
    toXDR(base?: string): Buffer;
    toXDR(encoding: string): string;
  }

  declare class xdr$Asset mixins XDRStruct {
    static fromXDR(xdr: Buffer): xdr$Asset;
  }

  declare class xdr$Memo mixins XDRStruct {
    static fromXDR(xdr: Buffer): xdr$Memo;
  }

  declare class xdr$TransactionEnvelope mixins XDRStruct {
    static fromXDR(xdr: Buffer): xdr$TransactionEnvelope;
  }

  declare class xdr$DecoratedSignature mixins XDRStruct {
    static fromXDR(xdr: Buffer): xdr$DecoratedSignature;
    constructor(keys: {
      hint: xdr$SignatureHint,
      signature: xdr$Signature
    }): this;
    hint(): xdr$SignatureHint;
    signature(): Buffer;
  }

  declare type xdr$SignatureHint = Buffer;

  declare type xdr$Signature = Buffer;

  declare class xdr$TransactionResult mixins XDRStruct {
    static fromXDR(xdr: Buffer): xdr$TransactionResult;
  }
  declare export function hash(data: Buffer): Buffer;

  declare export function sign(data: Buffer, rawSecret: Buffer): xdr$Signature;

  declare export function verify(
    data: Buffer,
    signature: xdr$Signature,
    rawPublicKey: Buffer
  ): boolean;
}
