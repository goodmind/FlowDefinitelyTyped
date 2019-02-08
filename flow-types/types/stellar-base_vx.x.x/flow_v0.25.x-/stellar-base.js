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
    | AssetTypeAssetType$native
    | AssetTypeAssetType$credit4
    | AssetTypeAssetType$credit12;
  declare export class Asset {
    static native(): xdr$Asset;
    static fromOperation(xdr: xdrxdr$Asset): xdr$Asset;
    constructor(code: string, issuer: string): this;
    getCode(): string;
    getIssuer(): string;
    getAssetType(): AssetType;
    isNative(): boolean;
    equals(other: xdr$Asset): boolean;
    toXDRObject(): xdrxdr$Asset;
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
    sign(data: Buffer): xdrxdr$Signature;
    signDecorated(data: Buffer): xdrxdr$DecoratedSignature;
    signatureHint(): xdrxdr$SignatureHint;
    verify(data: Buffer, signature: xdrxdr$Signature): boolean;
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
    | MemoTypeMemoType$None
    | MemoTypeMemoType$ID
    | MemoTypeMemoType$Text
    | MemoTypeMemoType$Hash
    | MemoTypeMemoType$Return;
  declare export type MemoValue = null | string | Buffer;
  declare export class Memo<T: MemoType = MemoType> {
    static fromXDRObject(memo: xdrxdr$Memo): xdr$Memo;
    static hash(hash: string): xdr$Memo<MemoTypeMemoType$Hash>;
    static id(id: string): xdr$Memo<MemoTypeMemoType$ID>;
    static none(): xdr$Memo<MemoTypeMemoType$None>;
    static return(hash: string): xdr$Memo<MemoTypeMemoType$Return>;
    static text(text: string): xdr$Memo<MemoTypeMemoType$Text>;
    constructor(type: MemoTypeMemoType$None, value?: null): this;
    constructor(
      type: MemoTypeMemoType$Hash | MemoTypeMemoType$Return,
      value: Buffer
    ): this;
    constructor(
      type:
        | MemoTypeMemoType$Hash
        | MemoTypeMemoType$Return
        | MemoTypeMemoType$ID
        | MemoTypeMemoType$Text,
      value: string
    ): this;
    constructor(type: T, value: MemoValue): this;
    type: T;
    value: "There was Conditional Type, use $Call utility type";
    toXDRObject(): xdrxdr$Memo;
  }
  declare export class Networks {
    constructor(...args: empty): mixed;
    static +PUBLIC: Class<Networks__PUBLIC> &
      Networks__PUBLIC &
      "Public Global Stellar Network ; September 2015"; // "Public Global Stellar Network ; September 2015"
    static +TESTNET: Class<Networks__TESTNET> &
      Networks__TESTNET &
      "Test SDF Network ; September 2015"; // "Test SDF Network ; September 2015"
  }

  declare class Networks__PUBLIC mixins Networks {}
  declare class Networks__TESTNET mixins Networks {}

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
    | AuthFlagAuthFlag$required
    | AuthFlagAuthFlag$revocable
    | AuthFlagAuthFlag$rmmutable;
  declare interface Signer$Ed25519PublicKey {
    ed25519PublicKey: string;
    weight: number | void;
  }

  declare interface Signer$Sha256Hash {
    sha256Hash: Buffer;
    weight: number | void;
  }

  declare interface Signer$PreAuthTx {
    preAuthTx: Buffer;
    weight: number | void;
  }
  declare export type Signer =
    | SignerSigner$Ed25519PublicKey
    | SignerSigner$Sha256Hash
    | SignerSigner$PreAuthTx;
  declare interface SignerOptions$Ed25519PublicKey {
    ed25519PublicKey: string;
    weight?: number | string;
  }

  declare interface SignerOptions$Sha256Hash {
    sha256Hash: Buffer | string;
    weight?: number | string;
  }

  declare interface SignerOptions$PreAuthTx {
    preAuthTx: Buffer | string;
    weight?: number | string;
  }
  declare export type SignerOptions =
    | SignerOptionsSignerOptions$Ed25519PublicKey
    | SignerOptionsSignerOptions$Sha256Hash
    | SignerOptionsSignerOptions$PreAuthTx;
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
    | OperationTypeOperationType$CreateAccount
    | OperationTypeOperationType$Payment
    | OperationTypeOperationType$PathPayment
    | OperationTypeOperationType$CreatePassiveOffer
    | OperationTypeOperationType$ManageOffer
    | OperationTypeOperationType$SetOptions
    | OperationTypeOperationType$ChangeTrust
    | OperationTypeOperationType$AllowTrust
    | OperationTypeOperationType$AccountMerge
    | OperationTypeOperationType$Inflation
    | OperationTypeOperationType$ManageData
    | OperationTypeOperationType$BumpSequence;
  declare interface OperationOptions$BaseOptions {
    source?: string;
  }

  declare type OperationOptions$AccountMerge = {
    destination: string
  } & OperationOptions$BaseOptions;

  declare type OperationOptions$AllowTrust = {
    trustor: string,
    assetCode: string,
    authorize?: boolean
  } & OperationOptions$BaseOptions;

  declare type OperationOptions$ChangeTrust = {
    asset: xdr$Asset,
    limit?: string
  } & OperationOptions$BaseOptions;

  declare type OperationOptions$CreateAccount = {
    destination: string,
    startingBalance: string
  } & OperationOptions$BaseOptions;

  declare type OperationOptions$CreatePassiveOffer = {
    selling: xdr$Asset,
    buying: xdr$Asset,
    amount: string,
    price: number | string | { [key: string]: any }
  } & OperationOptions$BaseOptions;

  declare type OperationOptions$ManageOffer = {
    offerId?: number | string
  } & OperationOptions$CreatePassiveOffer;

  declare type OperationOptions$Inflation = {} & OperationOptions$BaseOptions;

  declare type OperationOptions$ManageData = {
    name: string,
    value: string | Buffer
  } & OperationOptions$BaseOptions;

  declare type OperationOptions$PathPayment = {
    sendAsset: xdr$Asset,
    sendMax: string,
    destination: string,
    destAsset: xdr$Asset,
    destAmount: string,
    path?: xdr$Asset[]
  } & OperationOptions$BaseOptions;

  declare type OperationOptions$Payment = {
    amount: string,
    asset: xdr$Asset,
    destination: string
  } & OperationOptions$BaseOptions;

  declare type OperationOptions$SetOptions<T: SignerOptions = empty> = {
    inflationDest?: string,
    clearFlags?: AuthFlag,
    setFlags?: AuthFlag,
    masterWeight?: number | string,
    lowThreshold?: number | string,
    medThreshold?: number | string,
    highThreshold?: number | string,
    homeDomain?: string,
    signer?: T
  } & OperationOptions$BaseOptions;

  declare type OperationOptions$BumpSequence = {
    bumpTo: string
  } & OperationOptions$BaseOptions;

  declare export type OperationOptions =
    | OperationOptionsOperationOptions$CreateAccount
    | OperationOptionsOperationOptions$Payment
    | OperationOptionsOperationOptions$PathPayment
    | OperationOptionsOperationOptions$CreatePassiveOffer
    | OperationOptionsOperationOptions$ManageOffer
    | OperationOptionsOperationOptions$SetOptions
    | OperationOptionsOperationOptions$ChangeTrust
    | OperationOptionsOperationOptions$AllowTrust
    | OperationOptionsOperationOptions$AccountMerge
    | OperationOptionsOperationOptions$Inflation
    | OperationOptionsOperationOptions$ManageData
    | OperationOptionsOperationOptions$BumpSequence;

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

  declare type Operation$AccountMerge = {
    destination: string
  } & Operation$BaseOperation<OperationTypeOperation$AccountMerge>;

  declare function Operation$accountMerge(
    options: OperationOptionsOperation$AccountMerge
  ): xdrOperation<Operation$AccountMerge>;

  declare type Operation$AllowTrust = {
    trustor: string,
    assetCode: string,
    authorize: boolean | void
  } & Operation$BaseOperation<OperationTypeOperation$AllowTrust>;

  declare function Operation$allowTrust(
    options: OperationOptionsOperation$AllowTrust
  ): xdrOperation<Operation$AllowTrust>;

  declare type Operation$ChangeTrust = {
    line: xdr$Asset,
    limit: string
  } & Operation$BaseOperation<OperationTypeOperation$ChangeTrust>;

  declare function Operation$changeTrust(
    options: OperationOptionsOperation$ChangeTrust
  ): xdrOperation<Operation$ChangeTrust>;

  declare type Operation$CreateAccount = {
    destination: string,
    startingBalance: string
  } & Operation$BaseOperation<OperationTypeOperation$CreateAccount>;

  declare function Operation$createAccount(
    options: OperationOptionsOperation$CreateAccount
  ): xdrOperation<Operation$CreateAccount>;

  declare type Operation$CreatePassiveOffer = {
    selling: xdr$Asset,
    buying: xdr$Asset,
    amount: string,
    price: string
  } & Operation$BaseOperation<OperationTypeOperation$CreatePassiveOffer>;

  declare function Operation$createPassiveOffer(
    options: OperationOptionsOperation$CreatePassiveOffer
  ): xdrOperation<Operation$CreatePassiveOffer>;

  declare type Operation$Inflation = {} & Operation$BaseOperation<OperationTypeOperation$Inflation>;

  declare function Operation$inflation(
    options: OperationOptionsOperation$Inflation
  ): xdrOperation<Operation$Inflation>;

  declare type Operation$ManageData = {
    name: string,
    value: Buffer
  } & Operation$BaseOperation<OperationTypeOperation$ManageData>;

  declare function Operation$manageData(
    options: OperationOptionsOperation$ManageData
  ): xdrOperation<Operation$ManageData>;

  declare type Operation$ManageOffer = {
    selling: xdr$Asset,
    buying: xdr$Asset,
    amount: string,
    price: string,
    offerId: string
  } & Operation$BaseOperation<OperationTypeOperation$ManageOffer>;

  declare function Operation$manageOffer(
    options: OperationOptionsOperation$ManageOffer
  ): xdrOperation<Operation$ManageOffer>;

  declare type Operation$PathPayment = {
    sendAsset: xdr$Asset,
    sendMax: string,
    destination: string,
    destAsset: xdr$Asset,
    destAmount: string,
    path: xdr$Asset[]
  } & Operation$BaseOperation<OperationTypeOperation$PathPayment>;

  declare function Operation$pathPayment(
    options: OperationOptionsOperation$PathPayment
  ): xdrOperation<Operation$PathPayment>;

  declare type Operation$Payment = {
    amount: string,
    asset: xdr$Asset,
    destination: string
  } & Operation$BaseOperation<OperationTypeOperation$Payment>;

  declare function Operation$payment(
    options: OperationOptionsOperation$Payment
  ): xdrOperation<Operation$Payment>;

  declare type Operation$SetOptions<T: SignerOptions = SignerOptions> = {
    inflationDest?: string,
    clearFlags?: AuthFlag,
    setFlags?: AuthFlag,
    masterWeight?: number,
    lowThreshold?: number,
    medThreshold?: number,
    highThreshold?: number,
    homeDomain?: string,
    signer: "There was Conditional Type, use $Call utility type"
  } & Operation$BaseOperation<OperationTypeOperation$SetOptions>;

  declare function Operation$setOptions<T: SignerOptions>(
    options: OperationOptionsOperation$SetOptions<T>
  ): xdrOperation<Operation$SetOptions<T>>;

  declare type Operation$BumpSequence = {
    bumpTo: string
  } & Operation$BaseOperation<OperationTypeOperation$BumpSequence>;

  declare function Operation$bumpSequence(
    options: OperationOptionsOperation$BumpSequence
  ): xdrOperation<Operation$BumpSequence>;

  declare function Operation$fromXDRObject<T: Operation>(
    xdrOperation: xdrOperation<T>
  ): T;

  declare export type Operation =
    | OperationOperation$CreateAccount
    | OperationOperation$Payment
    | OperationOperation$PathPayment
    | OperationOperation$CreatePassiveOffer
    | OperationOperation$ManageOffer
    | OperationOperation$SetOptions
    | OperationOperation$ChangeTrust
    | OperationOperation$AllowTrust
    | OperationOperation$AccountMerge
    | OperationOperation$Inflation
    | OperationOperation$ManageData
    | OperationOperation$BumpSequence;

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
    constructor(envelope: string | xdrxdr$TransactionEnvelope): this;
    hash(): Buffer;
    sign(...keypairs: Keypair[]): void;
    signatureBase(): Buffer;
    signHashX(preimage: Buffer | string): void;
    toEnvelope(): xdrxdr$TransactionEnvelope;
    operations: TOps;
    sequence: number;
    fee: number;
    source: string;
    memo: TMemo;
    signatures: xdrxdr$DecoratedSignature[];
  }
  declare export var TimeoutInfinite: any; // 0;
  declare export class TransactionBuilder {
    constructor(
      sourceAccount: Account,
      options?: TransactionBuilderTransactionBuilder$TransactionBuilderOptions
    ): this;
    addOperation(operation: xdrOperation): this;
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
  declare class xdrHidden$Operation2<T: Operation = Operation>
    mixins xdr$xdr$XDRStruct {
    static fromXDR(xdr: Buffer): xdrOperation;
  }
  declare class xdr$XDRStruct {
    static fromXDR(xdr: Buffer): xdr$XDRStruct;
    toXDR(base?: string): Buffer;
    toXDR(encoding: string): string;
  }

  declare class xdr$Asset mixins xdr$XDRStruct {
    static fromXDR(xdr: Buffer): xdr$Asset;
  }

  declare class xdr$Memo mixins xdr$XDRStruct {
    static fromXDR(xdr: Buffer): xdr$Memo;
  }

  declare class xdr$TransactionEnvelope mixins xdr$XDRStruct {
    static fromXDR(xdr: Buffer): xdr$TransactionEnvelope;
  }

  declare class xdr$DecoratedSignature mixins xdr$XDRStruct {
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

  declare class xdr$TransactionResult mixins xdr$XDRStruct {
    static fromXDR(xdr: Buffer): xdr$TransactionResult;
  }
  declare export function hash(data: Buffer): Buffer;

  declare export function sign(
    data: Buffer,
    rawSecret: Buffer
  ): xdrxdr$Signature;

  declare export function verify(
    data: Buffer,
    signature: xdrxdr$Signature,
    rawPublicKey: Buffer
  ): boolean;
}
