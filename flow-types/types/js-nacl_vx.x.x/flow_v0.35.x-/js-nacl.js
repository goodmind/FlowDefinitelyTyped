declare module 'js-nacl' {
        declare export function instantiate(cb: NaclCallback, opts?: NaclOpts): void

	declare export type NaclCallback = (nacl: Nacl) => void;
	declare export interface NaclOpts {
[key: string]: any
} 
	declare export type SignerSecretKey = Uint8Array;
	declare export type SignerPublicKey = Uint8Array;
	declare export interface SignKeyPair {
signPk: SignerPublicKey,
signSk: SignerSecretKey
} 
	declare export type Message = Uint8Array;
	declare export type Signature = Uint8Array;
	declare export type MessageWithSignature = Uint8Array;
	declare export type BoxSecretKey = Uint8Array;
	declare export type BoxPublicKey = Uint8Array;
	declare export interface BoxKeyPair {
boxPk: BoxPublicKey,
boxSk: BoxSecretKey
} 
	declare export type Nonce = Uint8Array;
	declare export type CipherText = Uint8Array;
	declare export interface BoxSharedSecret {
boxK: Uint8Array
} 
	declare export type Stream = Uint8Array;
	declare export type StreamKey = Uint8Array;
	declare export interface Nacl {
to_hex: (arr: Uint8Array) => string,
from_hex: (hex: string) => Uint8Array,
encode_utf8: (utf8: string) => Uint8Array,
encode_latin1: (latin1: string) => Uint8Array,
decode_utf8: (arr: Uint8Array) => string,
decode_latin1: (arr: Uint8Array) => string,
crypto_hash: (raw: Uint8Array) => Uint8Array,
crypto_hash_sha256: (raw: Uint8Array) => Uint8Array,
crypto_sign_keypair: () => SignKeyPair,
crypto_sign: (msg: Message, sk: SignerSecretKey) => MessageWithSignature,
crypto_sign_open: (packet: MessageWithSignature, pk: SignerPublicKey) => Message | null,
crypto_sign_detached: (msg: Message, sk: SignerSecretKey) => Signature,
crypto_sign_verify_detached: (sig: Signature, msg: Message, pk: SignerPublicKey) => boolean,
crypto_box_keypair: () => BoxKeyPair,
crypto_box_random_nonce: () => Nonce,
crypto_box: (
msg: Message,
nonce: Nonce,
rcpt: BoxPublicKey,
sender: BoxSecretKey) => CipherText,
crypto_box_open: (
cipher: CipherText,
nonce: Nonce,
sender: BoxPublicKey,
rcpt: BoxSecretKey) => Message,
crypto_box_precompute: (sender: BoxPublicKey, rcpt: BoxSecretKey) => BoxSharedSecret,
crypto_box_precomputed: (msg: Message, nonce: Nonce, shared: BoxSharedSecret) => CipherText,
crypto_box_open_precomputed: (cipher: CipherText, nonce: Nonce, shared: BoxSharedSecret) => Message,
crypto_secretbox_random_nonce: () => Nonce,
crypto_secretbox: (msg: Message, nonce: Nonce, key: BoxSecretKey) => CipherText,
crypto_secretbox_open: (cipher: CipherText, nonce: Nonce, key: BoxSecretKey) => Message,
crypto_sign_seed_keypair: (seed: Uint8Array) => SignKeyPair,
crypto_box_seed_keypair: (seed: Uint8Array) => BoxKeyPair,
crypto_box_keypair_from_raw_sk: (seed: Uint8Array) => BoxKeyPair
} 
    }
