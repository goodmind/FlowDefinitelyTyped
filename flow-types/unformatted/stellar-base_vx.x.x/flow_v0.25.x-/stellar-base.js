declare module 'stellar-base' {
        declare export {
        
      }

	declare export class Account  {
constructor(accountId: string, sequence: string | number): this;
accountId(): string;
sequenceNumber(): string;
incrementSequenceNumber(): void
}
	declare type AssetType$native = "native";

declare type AssetType$credit4 = "credit_alphanum4";

declare type AssetType$credit12 = "credit_alphanum12";
	declare export type AssetType = AssetType$AssetType$native | AssetType$AssetType$credit4 | AssetType$AssetType$credit12;
	declare export class Asset  {
static native(): xdr$Asset;
static fromOperation(xdr: xdr$xdr$Asset): xdr$Asset;
constructor(code: string, issuer: string): this;
getCode(): string;
getIssuer(): string;
getAssetType(): AssetType;
isNative(): boolean;
equals(other: xdr$Asset): boolean;
toXDRObject(): xdr$xdr$Asset;
code: string;
issuer: string
}
	declare export var FastSigning: boolean;
	declare export type KeypairType = "ed25519";
	declare export class Keypair  {
static fromRawEd25519Seed(secretSeed: Buffer): Keypair;
static fromBase58Seed(secretSeed: string): Keypair;
static fromSecret(secretKey: string): Keypair;
static master(): Keypair;
static fromPublicKey(publicKey: string): Keypair;
static random(): Keypair;
constructor(keys: {
type: KeypairType,
secretKey: string,
publicKey?: string
} | {
type: KeypairType,
publicKey: string
}): this;
type: KeypairType;
publicKey(): string;
secret(): string;
rawPublicKey(): Buffer;
rawSecretKey(): Buffer;
canSign(): boolean;
sign(data: Buffer): xdr$xdr$Signature;
signDecorated(data: Buffer): xdr$xdr$DecoratedSignature;
signatureHint(): xdr$xdr$SignatureHint;
verify(data: Buffer, signature: xdr$xdr$Signature): boolean
}
	declare export var MemoNone: ;
	declare export var MemoID: ;
	declare export var MemoText: ;
	declare export var MemoHash: ;
	declare export var MemoReturn: ;
	declare type MemoType$None = typeof MemoNone;

declare type MemoType$ID = typeof MemoID;

declare type MemoType$Text = typeof MemoText;

declare type MemoType$Hash = typeof MemoHash;

declare type MemoType$Return = typeof MemoReturn;
	declare export type MemoType = MemoType$MemoType$None
| MemoType$MemoType$ID
| MemoType$MemoType$Text
| MemoType$MemoType$Hash
| MemoType$MemoType$Return;
	declare export type MemoValue = null | string | Buffer;
	declare export class Memo<T: MemoType= MemoType>  {
static fromXDRObject(memo: xdr$xdr$Memo): xdr$Memo;
static hash(hash: string): xdr$Memo<MemoType$MemoType$Hash>;
static id(id: string): xdr$Memo<MemoType$MemoType$ID>;
static none(): xdr$Memo<MemoType$MemoType$None>;
static return(hash: string): xdr$Memo<MemoType$MemoType$Return>;
static text(text: string): xdr$Memo<MemoType$MemoType$Text>;
constructor(type: MemoType$MemoType$None, value?: null): this;
constructor(type: MemoType$MemoType$Hash | MemoType$MemoType$Return, value: Buffer): this;
constructor(type: MemoType$MemoType$Hash | MemoType$MemoType$Return | MemoType$MemoType$ID | MemoType$MemoType$Text, value: string): this;
constructor(type: T, value: MemoValue): this;
type: T;
value: "There was Conditional Type, use $Call utility type";
toXDRObject(): xdr$xdr$Memo
}
	declare export  class Networks {
  constructor(...args: empty): mixed;
static +PUBLIC: Class<Networks__PUBLIC> & Networks__PUBLIC & "Public Global Stellar Network ; September 2015";// "Public Global Stellar Network ; September 2015"
static +TESTNET: Class<Networks__TESTNET> & Networks__TESTNET & "Test SDF Network ; September 2015";// "Test SDF Network ; September 2015"

}

declare class Networks__PUBLIC mixins Networks {}
declare class Networks__TESTNET mixins Networks {}

	declare export class Network  {
static use(network: Network): void;
static usePublicNetwork(): void;
static useTestNetwork(): void;
static current(): Network;
constructor(passphrase: string): this;
networkPassphrase(): string;
networkId(): string
}
	declare export var AuthRequiredFlag: 1;
	declare export var AuthRevocableFlag: 2;
	declare export var AuthImmutableFlag: 4;
	declare type AuthFlag$required = typeof AuthRequiredFlag;

declare type AuthFlag$revocable = typeof AuthRevocableFlag;

declare type AuthFlag$rmmutable = typeof AuthImmutableFlag;
	declare export type AuthFlag = AuthFlag$AuthFlag$required | AuthFlag$AuthFlag$revocable | AuthFlag$AuthFlag$rmmutable;
	declare interface Signer$Ed25519PublicKey {
ed25519PublicKey: string,
weight: number | void,
ed25519PublicKey: string,
weight?: number | string
} 

declare interface Signer$Sha256Hash {
sha256Hash: Buffer,
weight: number | void,
sha256Hash: Buffer | string,
weight?: number | string
} 

declare interface Signer$PreAuthTx {
preAuthTx: Buffer,
weight: number | void,
preAuthTx: Buffer | string,
weight?: number | string
} 
	declare export type Signer = Signer$Signer$Ed25519PublicKey | Signer$Signer$Sha256Hash | Signer$Signer$PreAuthTx;
	declare interface SignerOptions$Ed25519PublicKey {
ed25519PublicKey: string,
weight: number | void,
ed25519PublicKey: string,
weight?: number | string
} 

declare interface SignerOptions$Sha256Hash {
sha256Hash: Buffer,
weight: number | void,
sha256Hash: Buffer | string,
weight?: number | string
} 

declare interface SignerOptions$PreAuthTx {
preAuthTx: Buffer,
weight: number | void,
preAuthTx: Buffer | string,
weight?: number | string
} 
	declare export type SignerOptions = SignerOptions$SignerOptions$Ed25519PublicKey | SignerOptions$SignerOptions$Sha256Hash | SignerOptions$SignerOptions$PreAuthTx;
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
	declare export type OperationType = OperationType$OperationType$CreateAccount
| OperationType$OperationType$Payment
| OperationType$OperationType$PathPayment
| OperationType$OperationType$CreatePassiveOffer
| OperationType$OperationType$ManageOffer
| OperationType$OperationType$SetOptions
| OperationType$OperationType$ChangeTrust
| OperationType$OperationType$AllowTrust
| OperationType$OperationType$AccountMerge
| OperationType$OperationType$Inflation
| OperationType$OperationType$ManageData
| OperationType$OperationType$BumpSequence;
	declare interface OperationOptions$BaseOptions {
source?: string
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
	declare export type OperationOptions = OperationOptions$OperationOptions$CreateAccount
| OperationOptions$OperationOptions$Payment
| OperationOptions$OperationOptions$PathPayment
| OperationOptions$OperationOptions$CreatePassiveOffer
| OperationOptions$OperationOptions$ManageOffer
| OperationOptions$OperationOptions$SetOptions
| OperationOptions$OperationOptions$ChangeTrust
| OperationOptions$OperationOptions$AllowTrust
| OperationOptions$OperationOptions$AccountMerge
| OperationOptions$OperationOptions$Inflation
| OperationOptions$OperationOptions$ManageData
| OperationOptions$OperationOptions$BumpSequence;
	
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
fromXDRObject: typeof Operation$fromXDRObject,
        
      }
declare interface Operation$BaseOperation<T: OperationType= OperationType> {
type: T,
source?: string
} 

declare type Operation$AccountMerge = "accountMerge";

declare function Operation$accountMerge(
options: OperationOptions$Operation$AccountMerge): xdr$Operation<Operation$AccountMerge>


declare type Operation$AllowTrust = "allowTrust";

declare function Operation$allowTrust(
options: OperationOptions$Operation$AllowTrust): xdr$Operation<Operation$AllowTrust>


declare type Operation$ChangeTrust = "changeTrust";

declare function Operation$changeTrust(
options: OperationOptions$Operation$ChangeTrust): xdr$Operation<Operation$ChangeTrust>


declare type Operation$CreateAccount = "createAccount";

declare function Operation$createAccount(
options: OperationOptions$Operation$CreateAccount): xdr$Operation<Operation$CreateAccount>


declare type Operation$CreatePassiveOffer = "createPassiveOffer";

declare function Operation$createPassiveOffer(
options: OperationOptions$Operation$CreatePassiveOffer): xdr$Operation<Operation$CreatePassiveOffer>


declare type Operation$Inflation = "inflation";

declare function Operation$inflation(
options: OperationOptions$Operation$Inflation): xdr$Operation<Operation$Inflation>


declare type Operation$ManageData = "manageData";

declare function Operation$manageData(
options: OperationOptions$Operation$ManageData): xdr$Operation<Operation$ManageData>


declare type Operation$ManageOffer = "manageOffer";

declare function Operation$manageOffer(
options: OperationOptions$Operation$ManageOffer): xdr$Operation<Operation$ManageOffer>


declare type Operation$PathPayment = "pathPayment";

declare function Operation$pathPayment(
options: OperationOptions$Operation$PathPayment): xdr$Operation<Operation$PathPayment>


declare type Operation$Payment = "payment";

declare function Operation$payment(options: OperationOptions$Operation$Payment): xdr$Operation<Operation$Payment>


declare type Operation$SetOptions = "setOptions";

declare function Operation$setOptions<T: SignerOptions= empty>(
options: OperationOptions$Operation$SetOptions<T>): xdr$Operation<Operation$SetOptions<T>>


declare type Operation$BumpSequence = "bumpSequence";

declare function Operation$bumpSequence(
options: OperationOptions$Operation$BumpSequence): xdr$Operation<Operation$BumpSequence>


declare function Operation$fromXDRObject<T: Operation= Operation>(xdrOperation: xdr$Operation<T>): T

	declare export type Operation = Operation$Operation$CreateAccount
| Operation$Operation$Payment
| Operation$Operation$PathPayment
| Operation$Operation$CreatePassiveOffer
| Operation$Operation$ManageOffer
| Operation$Operation$SetOptions
| Operation$Operation$ChangeTrust
| Operation$Operation$AllowTrust
| Operation$Operation$AccountMerge
| Operation$Operation$Inflation
| Operation$Operation$ManageData
| Operation$Operation$BumpSequence;
	
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
decodeSha256Hash: typeof StrKey$decodeSha256Hash,
        
      }
declare function StrKey$encodeEd25519PublicKey(data: Buffer): string


declare function StrKey$decodeEd25519PublicKey(data: string): Buffer


declare function StrKey$isValidEd25519PublicKey(Key: string): boolean


declare function StrKey$encodeEd25519SecretSeed(data: Buffer): string


declare function StrKey$decodeEd25519SecretSeed(data: string): Buffer


declare function StrKey$isValidEd25519SecretSeed(seed: string): boolean


declare function StrKey$encodePreAuthTx(data: Buffer): string


declare function StrKey$decodePreAuthTx(data: string): Buffer


declare function StrKey$encodeSha256Hash(data: Buffer): string


declare function StrKey$decodeSha256Hash(data: string): Buffer

	declare export class Transaction<TMemo: xdr$Memo= xdr$Memo, TOps: Operation[]= Operation[]>  {
constructor(envelope: string | xdr$xdr$TransactionEnvelope): this;
hash(): Buffer;
sign(...keypairs: Keypair[]): void;
signatureBase(): Buffer;
signHashX(preimage: Buffer | string): void;
toEnvelope(): xdr$xdr$TransactionEnvelope;
operations: TOps;
sequence: number;
fee: number;
source: string;
memo: TMemo;
signatures: xdr$xdr$DecoratedSignature[]
}
	declare export var TimeoutInfinite: ;
	declare export class TransactionBuilder  {
constructor(sourceAccount: Account, options?: TransactionBuilder$TransactionBuilder$TransactionBuilderOptions): this;
addOperation(operation: xdr$Operation): this;
addMemo(memo: xdr$Memo): this;
setTimeout(timeoutInSeconds: number): this;
build(): Transaction
}
	declare interface TransactionBuilder$TransactionBuilderOptions {
fee?: number,
timebounds?: {
minTime?: number | string,
maxTime?: number | string
},
memo?: xdr$Memo
} 
	declare class xdrHidden$Operation2<T: Operation= Operation> mixins xdr$xdr$XDRStruct {
static fromXDR(xdr: Buffer): xdr$Operation
}
	declare class xdr$XDRStruct  {
static fromXDR(xdr: Buffer): xdr$XDRStruct;
toXDR(base?: string): Buffer;
toXDR(encoding: string): string
}

declare class xdr$Asset mixins xdr$XDRStruct {
static fromXDR(xdr: Buffer): xdr$Asset
}

declare class xdr$Memo mixins xdr$XDRStruct {
static fromXDR(xdr: Buffer): xdr$Memo
}

declare class xdr$TransactionEnvelope mixins xdr$XDRStruct {
static fromXDR(xdr: Buffer): xdr$TransactionEnvelope
}

declare class xdr$DecoratedSignature mixins xdr$XDRStruct {
static fromXDR(xdr: Buffer): xdr$DecoratedSignature;
constructor(keys: {
hint: xdr$SignatureHint,
signature: xdr$Signature
}): this;
hint(): xdr$SignatureHint;
signature(): Buffer
}

declare type xdr$SignatureHint = Buffer;

declare type xdr$Signature = Buffer;

declare class xdr$TransactionResult mixins xdr$XDRStruct {
static fromXDR(xdr: Buffer): xdr$TransactionResult
}
	declare export function hash(data: Buffer): Buffer

	declare export function sign(data: Buffer, rawSecret: Buffer): xdr$xdr$Signature

	declare export function verify(data: Buffer, signature: xdr$xdr$Signature, rawPublicKey: Buffer): boolean

    }
