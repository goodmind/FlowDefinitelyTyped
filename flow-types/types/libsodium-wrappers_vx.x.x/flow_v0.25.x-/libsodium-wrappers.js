declare module "libsodium-wrappers" {
  declare export type Uint8ArrayOutputFormat = "uint8array";
  declare export type StringOutputFormat = "text" | "hex" | "base64";
  declare export type KeyType = "curve25519" | "ed25519" | "x25519";
  declare export class base64_variants {
    constructor(...args: empty): mixed;
    static +ORIGINAL: Class<base64_variants__ORIGINAL> &
      base64_variants__ORIGINAL &
      0; // 0
    static +ORIGINAL_NO_PADDING: Class<base64_variants__ORIGINAL_NO_PADDING> &
      base64_variants__ORIGINAL_NO_PADDING &
      1; // 1
    static +URLSAFE: Class<base64_variants__URLSAFE> &
      base64_variants__URLSAFE &
      2; // 2
    static +URLSAFE_NO_PADDING: Class<base64_variants__URLSAFE_NO_PADDING> &
      base64_variants__URLSAFE_NO_PADDING &
      3; // 3
  }

  declare class base64_variants__ORIGINAL mixins base64_variants {}
  declare class base64_variants__ORIGINAL_NO_PADDING mixins base64_variants {}
  declare class base64_variants__URLSAFE mixins base64_variants {}
  declare class base64_variants__URLSAFE_NO_PADDING mixins base64_variants {}

  declare export interface CryptoBox {
    ciphertext: Uint8Array;
    mac: Uint8Array;
  }
  declare export interface StringCryptoBox {
    ciphertext: string;
    mac: string;
  }
  declare export interface CryptoKX {
    sharedRx: Uint8Array;
    sharedTx: Uint8Array;
  }
  declare export interface StringCryptoKX {
    sharedRx: string;
    sharedTx: string;
  }
  declare export interface KeyPair {
    keyType: KeyType;
    privateKey: Uint8Array;
    publicKey: Uint8Array;
  }
  declare export interface StringKeyPair {
    keyType: KeyType;
    privateKey: string;
    publicKey: string;
  }
  declare export interface SecretBox {
    cipher: Uint8Array;
    mac: Uint8Array;
  }
  declare export interface StringSecretBox {
    cipher: string;
    mac: string;
  }
  declare export interface generichash_state_address {
    name: string;
  }
  declare export interface onetimeauth_state_address {
    name: string;
  }
  declare export interface state_address {
    name: string;
  }
  declare export interface secretstream_xchacha20poly1305_state_address {
    name: string;
  }
  declare export interface sign_state_address {
    name: string;
  }
  declare export var SODIUM_LIBRARY_VERSION_MAJOR: number;
  declare export var SODIUM_LIBRARY_VERSION_MINOR: number;
  declare export var SODIUM_VERSION_STRING: string;
  declare export var crypto_aead_chacha20poly1305_ABYTES: number;
  declare export var crypto_aead_chacha20poly1305_KEYBYTES: number;
  declare export var crypto_aead_chacha20poly1305_MESSAGEBYTES_MAX: number;
  declare export var crypto_aead_chacha20poly1305_NPUBBYTES: number;
  declare export var crypto_aead_chacha20poly1305_NSECBYTES: number;
  declare export var crypto_aead_chacha20poly1305_ietf_ABYTES: number;
  declare export var crypto_aead_chacha20poly1305_ietf_KEYBYTES: number;
  declare export var crypto_aead_chacha20poly1305_ietf_MESSAGEBYTES_MAX: number;
  declare export var crypto_aead_chacha20poly1305_ietf_NPUBBYTES: number;
  declare export var crypto_aead_chacha20poly1305_ietf_NSECBYTES: number;
  declare export var crypto_aead_xchacha20poly1305_ietf_ABYTES: number;
  declare export var crypto_aead_xchacha20poly1305_ietf_KEYBYTES: number;
  declare export var crypto_aead_xchacha20poly1305_ietf_MESSAGEBYTES_MAX: number;
  declare export var crypto_aead_xchacha20poly1305_ietf_NPUBBYTES: number;
  declare export var crypto_aead_xchacha20poly1305_ietf_NSECBYTES: number;
  declare export var crypto_auth_BYTES: number;
  declare export var crypto_auth_KEYBYTES: number;
  declare export var crypto_box_BEFORENMBYTES: number;
  declare export var crypto_box_MACBYTES: number;
  declare export var crypto_box_MESSAGEBYTES_MAX: number;
  declare export var crypto_box_NONCEBYTES: number;
  declare export var crypto_box_PUBLICKEYBYTES: number;
  declare export var crypto_box_SEALBYTES: number;
  declare export var crypto_box_SECRETKEYBYTES: number;
  declare export var crypto_box_SEEDBYTES: number;
  declare export var crypto_core_hchacha20_CONSTBYTES: number;
  declare export var crypto_core_hchacha20_INPUTBYTES: number;
  declare export var crypto_core_hchacha20_KEYBYTES: number;
  declare export var crypto_core_hchacha20_OUTPUTBYTES: number;
  declare export var crypto_generichash_BYTES: number;
  declare export var crypto_generichash_BYTES_MAX: number;
  declare export var crypto_generichash_BYTES_MIN: number;
  declare export var crypto_generichash_KEYBYTES: number;
  declare export var crypto_generichash_KEYBYTES_MAX: number;
  declare export var crypto_generichash_KEYBYTES_MIN: number;
  declare export var crypto_hash_BYTES: number;
  declare export var crypto_kdf_BYTES_MAX: number;
  declare export var crypto_kdf_BYTES_MIN: number;
  declare export var crypto_kdf_CONTEXTBYTES: number;
  declare export var crypto_kdf_KEYBYTES: number;
  declare export var crypto_kx_PUBLICKEYBYTES: number;
  declare export var crypto_kx_SECRETKEYBYTES: number;
  declare export var crypto_kx_SEEDBYTES: number;
  declare export var crypto_kx_SESSIONKEYBYTES: number;
  declare export var crypto_pwhash_ALG_ARGON2I13: number;
  declare export var crypto_pwhash_ALG_ARGON2ID13: number;
  declare export var crypto_pwhash_ALG_DEFAULT: number;
  declare export var crypto_pwhash_BYTES_MAX: number;
  declare export var crypto_pwhash_BYTES_MIN: number;
  declare export var crypto_pwhash_MEMLIMIT_INTERACTIVE: number;
  declare export var crypto_pwhash_MEMLIMIT_MAX: number;
  declare export var crypto_pwhash_MEMLIMIT_MIN: number;
  declare export var crypto_pwhash_MEMLIMIT_MODERATE: number;
  declare export var crypto_pwhash_MEMLIMIT_SENSITIVE: number;
  declare export var crypto_pwhash_OPSLIMIT_INTERACTIVE: number;
  declare export var crypto_pwhash_OPSLIMIT_MAX: number;
  declare export var crypto_pwhash_OPSLIMIT_MIN: number;
  declare export var crypto_pwhash_OPSLIMIT_MODERATE: number;
  declare export var crypto_pwhash_OPSLIMIT_SENSITIVE: number;
  declare export var crypto_pwhash_PASSWD_MAX: number;
  declare export var crypto_pwhash_PASSWD_MIN: number;
  declare export var crypto_pwhash_SALTBYTES: number;
  declare export var crypto_pwhash_STRBYTES: number;
  declare export var crypto_pwhash_STRPREFIX: string;
  declare export var crypto_pwhash_STR_VERIFY: number;
  declare export var crypto_scalarmult_BYTES: number;
  declare export var crypto_scalarmult_SCALARBYTES: number;
  declare export var crypto_secretbox_KEYBYTES: number;
  declare export var crypto_secretbox_MACBYTES: number;
  declare export var crypto_secretbox_MESSAGEBYTES_MAX: number;
  declare export var crypto_secretbox_NONCEBYTES: number;
  declare export var crypto_secretstream_xchacha20poly1305_ABYTES: number;
  declare export var crypto_secretstream_xchacha20poly1305_HEADERBYTES: number;
  declare export var crypto_secretstream_xchacha20poly1305_KEYBYTES: number;
  declare export var crypto_secretstream_xchacha20poly1305_MESSAGEBYTES_MAX: number;
  declare export var crypto_secretstream_xchacha20poly1305_MESSAGESBYTES_MAX: number;
  declare export var crypto_secretstream_xchacha20poly1305_NPUBBYTES: number;
  declare export var crypto_secretstream_xchacha20poly1305_TAG_FINAL: number;
  declare export var crypto_secretstream_xchacha20poly1305_TAG_MESSAGE: number;
  declare export var crypto_secretstream_xchacha20poly1305_TAG_PUSH: number;
  declare export var crypto_secretstream_xchacha20poly1305_TAG_REKEY: number;
  declare export var crypto_shorthash_BYTES: number;
  declare export var crypto_shorthash_KEYBYTES: number;
  declare export var crypto_sign_BYTES: number;
  declare export var crypto_sign_MESSAGEBYTES_MAX: number;
  declare export var crypto_sign_PUBLICKEYBYTES: number;
  declare export var crypto_sign_SECRETKEYBYTES: number;
  declare export var crypto_sign_SEEDBYTES: number;
  declare export var crypto_stream_MESSAGEBYTES_MAX: number;
  declare export var crypto_stream_chacha20_ietf_MESSAGEBYTES_MAX: number;
  declare export var crypto_stream_xchacha20_MESSAGEBYTES_MAX: number;
  declare export var randombytes_SEEDBYTES: number;
  declare export var ready: Promise<void>;
  declare export function add(a: Uint8Array, b: Uint8Array): void;

  declare export function compare(b1: Uint8Array, b2: Uint8Array): number;

  declare export function crypto_aead_chacha20poly1305_decrypt(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_chacha20poly1305_decrypt(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_aead_chacha20poly1305_decrypt_detached(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    mac?: Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_chacha20poly1305_decrypt_detached(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    mac?: Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_aead_chacha20poly1305_encrypt(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_chacha20poly1305_encrypt(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_aead_chacha20poly1305_encrypt_detached(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): CryptoBox;

  declare export function crypto_aead_chacha20poly1305_encrypt_detached(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): StringCryptoBox;

  declare export function crypto_aead_chacha20poly1305_ietf_decrypt(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_chacha20poly1305_ietf_decrypt(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_aead_chacha20poly1305_ietf_decrypt_detached(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    mac?: Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_chacha20poly1305_ietf_decrypt_detached(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    mac?: Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_aead_chacha20poly1305_ietf_encrypt(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_chacha20poly1305_ietf_encrypt(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_aead_chacha20poly1305_ietf_encrypt_detached(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): CryptoBox;

  declare export function crypto_aead_chacha20poly1305_ietf_encrypt_detached(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): StringCryptoBox;

  declare export function crypto_aead_chacha20poly1305_ietf_keygen(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_chacha20poly1305_ietf_keygen(
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_aead_chacha20poly1305_keygen(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_chacha20poly1305_keygen(
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_aead_xchacha20poly1305_ietf_decrypt(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_xchacha20poly1305_ietf_decrypt(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_aead_xchacha20poly1305_ietf_decrypt_detached(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    mac?: Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_xchacha20poly1305_ietf_decrypt_detached(
    secret_nonce?: string | Uint8Array | null,
    ciphertext?: string | Uint8Array,
    mac?: Uint8Array,
    additional_data?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_aead_xchacha20poly1305_ietf_encrypt(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_xchacha20poly1305_ietf_encrypt(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_aead_xchacha20poly1305_ietf_encrypt_detached(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): CryptoBox;

  declare export function crypto_aead_xchacha20poly1305_ietf_encrypt_detached(
    message?: string | Uint8Array,
    additional_data?: string | Uint8Array | null,
    secret_nonce?: string | Uint8Array | null,
    public_nonce?: Uint8Array,
    key?: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): StringCryptoBox;

  declare export function crypto_aead_xchacha20poly1305_ietf_keygen(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_aead_xchacha20poly1305_ietf_keygen(
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_auth(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_auth(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_auth_keygen(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_auth_keygen(
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_auth_verify(
    tag: Uint8Array,
    message: string | Uint8Array,
    key: Uint8Array
  ): boolean;

  declare export function crypto_box_beforenm(
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_box_beforenm(
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_box_detached(
    message: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): CryptoBox;

  declare export function crypto_box_detached(
    message: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): StringCryptoBox;

  declare export function crypto_box_easy(
    message: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_box_easy(
    message: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_box_easy_afternm(
    message: string | Uint8Array,
    nonce: Uint8Array,
    sharedKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_box_easy_afternm(
    message: string | Uint8Array,
    nonce: Uint8Array,
    sharedKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_box_keypair(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): KeyPair;

  declare export function crypto_box_keypair(
    outputFormat?: StringOutputFormat | null
  ): StringKeyPair;

  declare export function crypto_box_open_detached(
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_box_open_detached(
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_box_open_easy(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_box_open_easy(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_box_open_easy_afternm(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    sharedKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_box_open_easy_afternm(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    sharedKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_box_seal(
    message: string | Uint8Array,
    publicKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_box_seal(
    message: string | Uint8Array,
    publicKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_box_seal_open(
    ciphertext: string | Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_box_seal_open(
    ciphertext: string | Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_box_seed_keypair(
    seed: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): KeyPair;

  declare export function crypto_box_seed_keypair(
    seed: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): StringKeyPair;

  declare export function crypto_generichash(
    hash_length?: number,
    message?: string | Uint8Array,
    key?: string | Uint8Array | null,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_generichash(
    hash_length?: number,
    message?: string | Uint8Array,
    key?: string | Uint8Array | null,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_generichash_final(
    state_address: generichash_state_address,
    hash_length: number,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_generichash_final(
    state_address: generichash_state_address,
    hash_length: number,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_generichash_init(
    key?: string | Uint8Array | null,
    hash_length?: number
  ): state_address;

  declare export function crypto_generichash_keygen(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_generichash_keygen(
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_generichash_update(
    state_address: generichash_state_address,
    message_chunk: string | Uint8Array
  ): void;

  declare export function crypto_hash(
    message: string | Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_hash(
    message: string | Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_kdf_derive_from_key(
    subkey_len: number,
    subkey_id: number,
    ctx: string,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_kdf_derive_from_key(
    subkey_len: number,
    subkey_id: number,
    ctx: string,
    key: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_kdf_keygen(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_kdf_keygen(
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_kx_client_session_keys(
    clientPublicKey: Uint8Array,
    clientSecretKey: Uint8Array,
    serverPublicKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): CryptoKX;

  declare export function crypto_kx_client_session_keys(
    clientPublicKey: Uint8Array,
    clientSecretKey: Uint8Array,
    serverPublicKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): StringCryptoKX;

  declare export function crypto_kx_keypair(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): KeyPair;

  declare export function crypto_kx_keypair(
    outputFormat?: StringOutputFormat | null
  ): StringKeyPair;

  declare export function crypto_kx_seed_keypair(
    seed: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): KeyPair;

  declare export function crypto_kx_seed_keypair(
    seed: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): StringKeyPair;

  declare export function crypto_kx_server_session_keys(
    serverPublicKey: Uint8Array,
    serverSecretKey: Uint8Array,
    clientPublicKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): CryptoKX;

  declare export function crypto_kx_server_session_keys(
    serverPublicKey: Uint8Array,
    serverSecretKey: Uint8Array,
    clientPublicKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): StringCryptoKX;

  declare export function crypto_pwhash(
    keyLength: number,
    password: string | Uint8Array,
    salt: Uint8Array,
    opsLimit: number,
    memLimit: number,
    algorithm: number,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_pwhash(
    keyLength: number,
    password: string | Uint8Array,
    salt: Uint8Array,
    opsLimit: number,
    memLimit: number,
    algorithm: number,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_pwhash_str(
    password: string | Uint8Array,
    opsLimit: number,
    memLimit: number
  ): string;

  declare export function crypto_pwhash_str_verify(
    hashed_password: string,
    password: string | Uint8Array
  ): boolean;

  declare export function crypto_scalarmult(
    privateKey: Uint8Array,
    publicKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_scalarmult(
    privateKey: Uint8Array,
    publicKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_scalarmult_base(
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_scalarmult_base(
    privateKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_secretbox_detached(
    message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): SecretBox;

  declare export function crypto_secretbox_detached(
    message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): StringSecretBox;

  declare export function crypto_secretbox_easy(
    message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_secretbox_easy(
    message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_secretbox_keygen(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_secretbox_keygen(
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_secretbox_open_detached(
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_secretbox_open_detached(
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_secretbox_open_easy(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_secretbox_open_easy(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_secretstream_xchacha20poly1305_init_pull(
    header: Uint8Array,
    key: Uint8Array
  ): state_address;

  declare export function crypto_secretstream_xchacha20poly1305_init_push(
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): {
    state: state_address,
    header: Uint8Array
  };

  declare export function crypto_secretstream_xchacha20poly1305_init_push(
    key: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): {
    state: state_address,
    header: string
  };

  declare export function crypto_secretstream_xchacha20poly1305_keygen(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_secretstream_xchacha20poly1305_keygen(
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_secretstream_xchacha20poly1305_pull(
    state_address: secretstream_xchacha20poly1305_state_address,
    cipher: string | Uint8Array,
    ad?: string | Uint8Array | null,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): {
    message: Uint8Array,
    tag: number
  };

  declare export function crypto_secretstream_xchacha20poly1305_pull(
    state_address: secretstream_xchacha20poly1305_state_address,
    cipher: string | Uint8Array,
    ad?: string | Uint8Array | null,
    outputFormat?: StringOutputFormat | null
  ): {
    message: string,
    tag: number
  };

  declare export function crypto_secretstream_xchacha20poly1305_push(
    state_address: secretstream_xchacha20poly1305_state_address,
    message_chunk: string | Uint8Array,
    ad?: string | Uint8Array | null,
    tag?: number,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_secretstream_xchacha20poly1305_push(
    state_address: secretstream_xchacha20poly1305_state_address,
    message_chunk: string | Uint8Array,
    ad?: string | Uint8Array | null,
    tag?: number,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_secretstream_xchacha20poly1305_rekey(
    state_address: secretstream_xchacha20poly1305_state_address
  ): true;

  declare export function crypto_shorthash(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_shorthash(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_shorthash_keygen(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_shorthash_keygen(
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_sign(
    message: string | Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_sign(
    message: string | Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_sign_detached(
    message: string | Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_sign_detached(
    message: string | Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_sign_ed25519_pk_to_curve25519(
    edPk: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_sign_ed25519_pk_to_curve25519(
    edPk: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_sign_ed25519_sk_to_curve25519(
    edSk: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_sign_ed25519_sk_to_curve25519(
    edSk: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_sign_final_create(
    state_address: sign_state_address,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_sign_final_create(
    state_address: sign_state_address,
    privateKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_sign_final_verify(
    state_address: sign_state_address,
    signature: Uint8Array,
    publicKey: Uint8Array
  ): boolean;

  declare export function crypto_sign_init(): state_address;

  declare export function crypto_sign_keypair(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): KeyPair;

  declare export function crypto_sign_keypair(
    outputFormat?: StringOutputFormat | null
  ): StringKeyPair;

  declare export function crypto_sign_open(
    signedMessage: string | Uint8Array,
    publicKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_sign_open(
    signedMessage: string | Uint8Array,
    publicKey: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function crypto_sign_seed_keypair(
    seed: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): KeyPair;

  declare export function crypto_sign_seed_keypair(
    seed: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): StringKeyPair;

  declare export function crypto_sign_update(
    state_address: sign_state_address,
    message_chunk: string | Uint8Array
  ): void;

  declare export function crypto_sign_verify_detached(
    signature: Uint8Array,
    message: string | Uint8Array,
    publicKey: Uint8Array
  ): boolean;

  declare export function crypto_stream_keygen(
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function crypto_stream_keygen(
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function from_base64(
    input: string,
    variant?: base64_variants
  ): Uint8Array;

  declare export function from_hex(input: string): Uint8Array;

  declare export function from_string(str: string): Uint8Array;

  declare export function increment(bytes: Uint8Array): void;

  declare export function is_zero(bytes: Uint8Array): boolean;

  declare export function memcmp(b1: Uint8Array, b2: Uint8Array): boolean;

  declare export function memzero(bytes: Uint8Array): void;

  declare export function pad(buf: Uint8Array, blocksize: number): Uint8Array;

  declare export function randombytes_buf(
    length: number,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function randombytes_buf(
    length: number,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function randombytes_buf_deterministic(
    length: number,
    seed: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null
  ): Uint8Array;

  declare export function randombytes_buf_deterministic(
    length: number,
    seed: Uint8Array,
    outputFormat?: StringOutputFormat | null
  ): string;

  declare export function randombytes_close(): void;

  declare export function randombytes_random(): number;

  declare export function randombytes_set_implementation(
    implementation: Uint8Array
  ): void;

  declare export function randombytes_stir(): void;

  declare export function randombytes_uniform(upper_bound: number): number;

  declare export function sodium_version_string(): string;

  declare export function symbols(): string[];

  declare export function to_base64(
    input: string | Uint8Array,
    variant?: base64_variants
  ): string;

  declare export function to_hex(input: string | Uint8Array): string;

  declare export function to_string(bytes: Uint8Array): string;

  declare export function unpad(buf: Uint8Array, blocksize: number): Uint8Array;
}
