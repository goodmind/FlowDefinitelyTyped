declare module 'trezor-connect' {
        declare interface Error {
success: false,
payload: {
error: string
}
} 
	declare interface Success<T> {
id: number,
success: true,
payload: T
} 
	declare export type ResponseMessage<T> = Error | Success<T>;
	declare export interface Message {
message: string
} 
	declare export interface Bundle<T> {
bundle: T[]
} 
	declare interface CommonParams {
device?: {
path: string,
state?: string,
instance?: number
},
useEmptyPassphrase?: boolean,
allowSeedlessDevice?: boolean,
keepSession?: boolean
} 
	declare export type GetPublicKeyParams = {
path: string,
coin?: string,
crossChain?: boolean
} & CommonParams

	declare export interface PublicKey {
path: number[],
serializedPath: string,
xpub: string,
xpubSegwit?: string,
chainCode: string,
childNum: number,
publicKey: string,
fingerprint: number,
depth: number
} 
	declare export type GetAccountInfoParams = {
path?: number[],
xpub?: string,
coin: string
} & CommonParams

	declare export interface AccountInfo {
id: number,
path: number[],
serializedPath: string,
xpub: string,
balance: number,
confirmed: number,
address: string,
addressIndex: number,
addressPath: number[],
addressSerializedPath: string
} 
	declare export interface Features {
vendor: string,
major_version: number,
minor_version: number,
patch_version: number,
bootloader_mode: boolean | null,
device_id: string,
pin_protection: boolean,
passphrase_protection: boolean,
language: string | null,
label: string | null,
initialized: true,
revision: string,
bootloader_hash: string,
imported: boolean,
pin_cached: boolean,
passphrase_cached: boolean,
firmware_present: boolean | null,
needs_backup: false,
flags: number,
model: string,
fw_major: number,
fw_minor: number,
fw_patch: number,
fw_vendor: string,
fw_vendor_keys: string,
unfinished_backup: boolean,
no_backup: boolean
} 
	declare interface LoginChallenge {
challengeHidden: string,
challengeVisual: string
} 
	declare export type RequestLoginParams = CommonParams & {
callback: () => LoginChallenge
} | LoginChallenge;
	declare export interface LoginDetails {
address: string,
publicKey: string,
signature: string
} 
	declare export type CipherKeyValueParams = {
path: string | number[],
key?: string,
value?: string,
askOnEncrypt?: true,
askOnDecrypt?: true
} & CommonParams

	declare export type CipherKeyValue = {
value: string
} & CommonParams

	declare export type ResetDeviceParams = {
strength?: number,
label?: string,
u2fCounter?: number,
pinProtection?: boolean,
passphraseProtection?: boolean,
skipBackup?: boolean,
noBackup?: boolean
} & CommonParams

	declare export type GetAddressParams = {
path: string | number[],
showOnTrezor?: boolean,
coin?: string,
crossChain?: boolean
} & CommonParams

	declare export interface Address {
address: string,
path: number[],
serializedPath: string
} 
	declare export type ComposeTransactionParams = {
outputs: Output[],
coin: string,
push?: boolean
} & CommonParams

	declare export interface Transaction {
signatures: string[],
serializedTx: string,
txid?: string
} 
	declare export type VerifyMessageParams = {
address: string,
message: string,
signature: string,
coin: string
} & CommonParams

	declare export type SignMessageParams = {
path: string | number[],
message: string,
coin?: string
} & CommonParams

	declare export interface SignedMessage {
address: string,
signature: string
} 
	declare export type DeviceStatus = "available" | "occupied" | "used";
	declare export type DeviceMode = "normal" | "bootloader" | "initialize" | "seedless";
	declare export type DeviceFirmwareStatus = "valid" | "outdated" | "required";
	declare export type Device = {
type: "acquired",
path: string,
label: string,
firmware: DeviceFirmwareStatus,
status: DeviceStatus,
mode: DeviceMode,
state: string | null,
features: Features
} | {
type: "unacquired",
path: string,
label: string
} | {
type: "unreadable",
path: string,
label: string
};
	declare export interface SignedTransaction {
signatures: string[],
serializedTx: string,
txId?: string
} 
	declare export interface Settings {
debug: boolean | {
[k: string]: boolean
},
configSrc?: string,
origin?: string,
hostLabel?: string,
hostIcon?: string,
priority?: number,
trustedHost?: boolean,
connectSrc?: string,
iframeSrc?: string,
popup?: boolean,
popupSrc?: string,
webusbSrc?: string,
transportReconnect?: boolean,
webusb?: boolean,
pendingTransportEvent?: boolean,
supportedBrowser?: boolean,
extension?: string
} 
	declare export interface Input {
address_n: number[],
prev_index: number,
prev_hash: string,
amount: string,
script_type: string
} 
	declare export interface RegularOutput {
address: string,
amount: string,
script_type: string
} 
	declare export interface SendMaxOutput {
type: "send-max",
address: string
} 
	declare export interface OpReturnOutput {
type: "opreturn",
dataHex: string
} 
	declare export type Output = RegularOutput | SendMaxOutput | OpReturnOutput;
	declare export type SignTransactionParams = {
inputs: Input[],
outputs: Output[],
coin: string,
push?: boolean
} & CommonParams

	declare export type PushTransactionParams = {
tx: string,
coin: string
} & CommonParams

	declare export interface TransactionID {
txid: string
} 
	
      declare var npm$namespace$TrezorConnect: {
        init: typeof TrezorConnect$init,
getPublicKey: typeof TrezorConnect$getPublicKey,
requestLogin: typeof TrezorConnect$requestLogin,
getFeatures: typeof TrezorConnect$getFeatures,
cipherKeyValue: typeof TrezorConnect$cipherKeyValue,
wipeDevice: typeof TrezorConnect$wipeDevice,
resetDevice: typeof TrezorConnect$resetDevice,
getAddress: typeof TrezorConnect$getAddress,
getAccountInfo: typeof TrezorConnect$getAccountInfo,
composeTransaction: typeof TrezorConnect$composeTransaction,
signTransaction: typeof TrezorConnect$signTransaction,
pushTransaction: typeof TrezorConnect$pushTransaction,
signMessage: typeof TrezorConnect$signMessage,
verifyMessage: typeof TrezorConnect$verifyMessage,
dispose: typeof TrezorConnect$dispose,
cancel: typeof TrezorConnect$cancel,
        
      }

/**
 * Initializes TrezorConnect.
 */
declare function TrezorConnect$init(settings: Settings): void



/**
 * Retrieves BIP32 extended public derived by given BIP32 path.
 * User is presented with a description of the requested key and asked to
 * confirm the export.
 */
declare function TrezorConnect$getPublicKey(params: GetPublicKeyParams): Promise<ResponseMessage<PublicKey>>


declare function TrezorConnect$getPublicKey(params: Bundle<GetPublicKeyParams>): Promise<ResponseMessage<PublicKey[]>>



/**
 * Challenge-response authentication via Trezor.
 * To protect against replay attacks you should use a server-side generated
 * and randomized challengeHidden for every attempt. You can also provide a
 * visual challenge that will be shown on the device.
 */
declare function TrezorConnect$requestLogin(params: RequestLoginParams): Promise<LoginDetails>



/**
 * Retrieves the set of features associated with the device.
 */
declare function TrezorConnect$getFeatures(params?: CommonParams): Promise<ResponseMessage<Features>>



/**
 * Asks device to encrypt value using the private key derived by given BIP32
 * path and the given key. IV is always computed automatically.
 */
declare function TrezorConnect$cipherKeyValue(params: CipherKeyValueParams): Promise<ResponseMessage<CipherKeyValue>>


declare function TrezorConnect$cipherKeyValue(
params: Bundle<CipherKeyValueParams>): Promise<ResponseMessage<CipherKeyValue[]>>



/**
 * Resets device to factory defaults and removes all private data.
 */
declare function TrezorConnect$wipeDevice(): Promise<ResponseMessage<Message>>



/**
 * Performs device setup and generates a new seed.
 */
declare function TrezorConnect$resetDevice(params: ResetDeviceParams): Promise<ResponseMessage<Message>>



/**
 * Display requested address derived by given BIP32 path on device and
 * returns it to caller. User is asked to confirm the export on Trezor.
 */
declare function TrezorConnect$getAddress(params: GetAddressParams): Promise<ResponseMessage<Address>>


declare function TrezorConnect$getAddress(params: Bundle<GetAddressParams>): Promise<ResponseMessage<Address[]>>



/**
 * Gets an info of specified account.
 */
declare function TrezorConnect$getAccountInfo(params: GetAccountInfoParams): Promise<ResponseMessage<AccountInfo>>



/**
 * Requests a payment from the users wallet to a set of given outputs.
 * Internally a BIP-0044 account discovery is performed and user is presented
 * with a list of accounts. After account selection user is presented with
 * list of fee selection. After selecting a fee transaction is signed and
 * returned in hexadecimal format. Change output is added automatically, if
 * needed.
 */
declare function TrezorConnect$composeTransaction(params: ComposeTransactionParams): Promise<ResponseMessage<Transaction>>



/**
 * Asks device to sign given inputs and outputs of pre-composed transaction.
 * User is asked to confirm all transaction details on Trezor.
 */
declare function TrezorConnect$signTransaction(params: SignTransactionParams): Promise<ResponseMessage<SignedTransaction>>



/**
 * Broadcasts the transaction to the selected network.
 */
declare function TrezorConnect$pushTransaction(params: PushTransactionParams): Promise<ResponseMessage<TransactionID>>



/**
 * Asks device to sign a message using the private key derived by given BIP32
 * path.
 */
declare function TrezorConnect$signMessage(params: SignMessageParams): Promise<ResponseMessage<SignedMessage>>



/**
 * Asks device to verify a message using the signer address and signature.
 */
declare function TrezorConnect$verifyMessage(params: VerifyMessageParams): Promise<ResponseMessage<Message>>


declare function TrezorConnect$dispose(): void


declare function TrezorConnect$cancel(): void

	declare export default typeof TrezorConnect

    }
