declare module 'openpgp' {
        declare export interface UserId {
name?: string,
email?: string
} 
	declare export interface SessionKey {
data: Uint8Array,
algorithm: string
} 
	declare export interface EncryptOptions {
message: message$message$Message,
publicKeys?: key$key$Key | key$key$Key[],
privateKeys?: key$key$Key | key$key$Key[],
passwords?: string | string[],
sessionKey?: SessionKey,
enums$compression?: enums$enums$compression,
enums$armor?: boolean,
streaming?: "web" | "node" | false,
detached?: boolean,
signature?: Signature,
returnSessionKey?: boolean,
wildcard?: boolean,
date?: Date,
fromUserId?: UserId,
toUserId?: UserId
} 
	declare export interface EncryptedMessage {
data?: string,
message?: message$message$Message,
signature?: string | ReadableStream | Signature,
sessionKey?: SessionKey
} 
	declare export interface DecryptOptions {
message: message$message$Message,
privateKeys?: key$key$Key | key$key$Key[],
passwords?: string | string[],
sessionKeys?: SessionKey | SessionKey[],
publicKeys?: key$key$Key | key$key$Key[],
format?: string,
streaming?: "web" | "node" | false,
signature?: Signature,
date?: Date
} 
	declare export interface SignOptions {
message: message$message$Message,
privateKeys?: key$key$Key | key$key$Key[],
enums$armor?: boolean,
streaming?: "web" | "node" | false,
detached?: boolean,
date?: Date,
fromUserIds?: UserId[]
} 
	declare export interface SignedMessage {
signature?: string | ReadableStream | Signature,
data?: string | ReadableStream,
message?: message$message$Message
} 
	declare export interface KeyContainer {
key: key$key$Key
} 
	declare export type KeyPair = {
privateKeyArmored: string,
publicKeyArmored: string,
revocationCertificate: string
} & KeyContainer

	declare export interface KeyOptions {
userIds?: UserId[],
passphrase?: string,
numBits?: number,
keyExpirationTime?: number,
curve?: string,
date?: Date,
subkeys?: KeyOptions[]
} 
	declare export interface Keyid {
bytes: string
} 
	declare export interface Signature {
keyid: Keyid,
valid: boolean,
verified?: boolean
} 
	declare export interface VerifyOptions {
message: message$message$Message,
publicKeys: key$key$Key | key$key$Key[],
streaming?: "web" | "node" | false,
signature?: Signature,
date?: Date
} 
	declare export interface VerifiedMessage {
data: Uint8Array | string | ReadableStream,
signatures: Array<Signature>
} 
	declare export interface DecryptedMessage {
data: Uint8Array | string | ReadableStream,
signatures: Array<Signature>,
filename: string
} 
	declare export interface OpenPGPWorker {
randomCallback(): void,
configure(config: any): void,
seedRandom(buffer: ArrayBuffer): void,
delegate(id: number, method: string, options: any): void,
response(event: any): void
} 
	declare export interface WorkerOptions {
path?: string,
n?: number,
workers?: OpenPGPWorker[],
config?: any
} 
	declare export class AsyncProxy  {
constructor(options: WorkerOptions): this;
getId(): number;
seedRandom(workerId: number, size: number): Promise<void>;
terminate(): void;
delegate(method: string, options: any): void;
workers: OpenPGPWorker[]
}
	
/**
 * Set the path for the web worker script and create an instance of the async proxy
 * @param {String} path relative path to the worker scripts, default: 'openpgp.worker.js'
 * @param {Number} n number of workers to initialize
 * @param {Array<Object>} workers alternative to path parameter: web workers initialized with 'openpgp.worker.js'
 */
declare export function initWorker(options: WorkerOptions): boolean

	
/**
 * Returns a reference to the async proxy if the worker was initialized with openpgp.initWorker()
 * @returns {module} :worker/async_proxy.AsyncProxy|null} the async proxy or null if not initialized
 */
declare export function getWorker(): AsyncProxy

	
/**
 * Cleanup the current instance of the web worker.
 */
declare export function destroyWorker(): void

	
/**
 * Encrypts message text/data with public keys, passwords or both at once. At least either public keys or passwords
 *    must be specified. If private keys are specified, those will be used to sign the message.
 * @param {message$Message} message message to be encrypted as created by openpgp.message.fromText or openpgp.message.fromBinary
 * @param {key$Key | Array<key$Key>} publicKeys (optional) array of keys or single key, used to encrypt the message
 * @param {key$Key | Array<key$Key>} privateKeys (optional) private keys for signing. If omitted message will not be signed
 * @param {String | Array<String>} passwords (optional) array of passwords or a single password to encrypt the message
 * @param {Object} sessionKey (optional) session key in the form: { data:Uint8Array, algorithm:String }
 * @param {module} :enums.compression} compression (optional) which compression algorithm to compress the message with, defaults to what is specified in config
 * @param {Boolean} armor (optional) if the return values should be ascii armored or the message/signature objects
 * @param {"web" | "node" | false} streaming (optional) whether to return data as a stream. Defaults to the type of stream `message` was created from, if any.
 * @param {Boolean} detached (optional) if the signature should be detached (if true, signature will be added to returned object)
 * @param {Signature} signature (optional) a detached signature to add to the encrypted message
 * @param {Boolean} returnSessionKey (optional) if the unencrypted session key should be added to returned object
 * @param {Boolean} wildcard (optional) use a key ID of 0 instead of the public key IDs
 * @param {Date} date (optional) override the creation date of the message signature
 * @param {Object} fromUserId (optional) user ID to sign with, e.g. { name:'Steve Sender', email:'steve
 * @openpgp .org' }
 * @param {Object} toUserId (optional) user ID to encrypt for, e.g. { name:'Robert Receiver', email:'robert
 * @openpgp .org' }
 * @returns {Promise<Object>} Object containing encrypted (and optionally signed) message in the form:

{
data: String|ReadableStream<String>|NodeStream, (if `armor` was true, the default)
message: Message, (if `armor` was false)
signature: String|ReadableStream<String>|NodeStream, (if `detached` was true and `armor` was true)
signature: Signature (if `detached` was true and `armor` was false)
sessionKey: { data, algorithm, aeadAlgorithm } (if `returnSessionKey` was true)
}
 * @async
 * @static
 */
declare export function encrypt(options: EncryptOptions): Promise<EncryptedMessage>

	
/**
 * Decrypts a message with the user's private key, a session key or a password. Either a private key,
 *    a session key or a password must be specified.
 * @param {message$Message} message the message object with the encrypted data
 * @param {key$Key | Array<key$Key>} privateKeys (optional) private keys with decrypted secret key data or session key
 * @param {String | Array<String>} passwords (optional) passwords to decrypt the message
 * @param {Object | Array<Object>} sessionKeys (optional) session keys in the form: { data:Uint8Array, algorithm:String }
 * @param {key$Key | Array<key$Key>} publicKeys (optional) array of public keys or single key, to verify signatures
 * @param {String} format (optional) return data format either as 'utf8' or 'binary'
 * @param {"web" | "node" | false} streaming (optional) whether to return data as a stream. Defaults to the type of stream `message` was created from, if any.
 * @param {Signature} signature (optional) detached signature for verification
 * @param {Date} date (optional) use the given date for verification instead of the current time
 * @returns {Promise<Object>} Object containing decrypted and verified message in the form:

{
data: String|ReadableStream<String>|NodeStream, (if format was 'utf8', the default)
data: Uint8Array|ReadableStream<Uint8Array>|NodeStream, (if format was 'binary')
filename: String,
signatures: [
{
keyid: module:type/keyid,
verified: Promise<Boolean>,
valid: Boolean (if streaming was false)
}, ...
]
}
 * @async
 * @static
 */
declare export function decrypt(options: DecryptOptions): Promise<DecryptedMessage>

	
/**
 * Signs a cleartext message.
 * @param {cleartext$CleartextMessage | message$Message} message (cleartext) message to be signed
 * @param {key$Key | Array<key$Key>} privateKeys array of keys or single key with decrypted secret key data to sign cleartext
 * @param {Boolean} armor (optional) if the return value should be ascii armored or the message object
 * @param {"web" | "node" | false} streaming (optional) whether to return data as a stream. Defaults to the type of stream `message` was created from, if any.
 * @param {Boolean} detached (optional) if the return value should contain a detached signature
 * @param {Date} date (optional) override the creation date of the signature
 * @param {Array} fromUserIds (optional) array of user IDs to sign with, one per key in `privateKeys`, e.g. [{ name:'Steve Sender', email:'steve
 * @openpgp .org' }]
 * @returns {Promise<Object>} Object containing signed message in the form:

{
data: String|ReadableStream<String>|NodeStream, (if `armor` was true, the default)
message: Message (if `armor` was false)
}

Or, if `detached` was true:

{
signature: String|ReadableStream<String>|NodeStream, (if `armor` was true, the default)
signature: Signature (if `armor` was false)
}
 * @async
 * @static
 */
declare export function sign(options: SignOptions): Promise<SignedMessage>

	
/**
 * Verifies signatures of cleartext signed message
 * @param {key$Key | Array<key$Key>} publicKeys array of publicKeys or single key, to verify signatures
 * @param {cleartext$CleartextMessage | message$Message} message (cleartext) message object with signatures
 * @param {"web" | "node" | false} streaming (optional) whether to return data as a stream. Defaults to the type of stream `message` was created from, if any.
 * @param {Signature} signature (optional) detached signature for verification
 * @param {Date} date (optional) use the given date for verification instead of the current time
 * @returns {Promise<Object>} Object containing verified message in the form:

{
data: String|ReadableStream<String>|NodeStream, (if `message` was a CleartextMessage)
data: Uint8Array|ReadableStream<Uint8Array>|NodeStream, (if `message` was a Message)
signatures: [
{
keyid: module:type/keyid,
verified: Promise<Boolean>,
valid: Boolean (if `streaming` was false)
}, ...
]
}
 * @async
 * @static
 */
declare export function verify(options: VerifyOptions): Promise<VerifiedMessage>

	
/**
 * Generates a new OpenPGP key pair. Supports RSA and ECC keys. Primary and subkey will be of same type.
 * @param {Array<Object>} userIds array of user IDs e.g. [{ name:'Phil Zimmermann', email:'phil
 * @openpgp .org' }]
 * @param {String} passphrase (optional) The passphrase used to encrypt the resulting private key
 * @param {Number} numBits (optional) number of bits for RSA keys: 2048 or 4096.
 * @param {Number} keyExpirationTime (optional) The number of seconds after the key creation time that the key expires
 * @param {String} curve (optional) elliptic curve for ECC keys:
       curve25519, p256, p384, p521, secp256k1,
       brainpoolP256r1, brainpoolP384r1, or brainpoolP512r1.
 * @param {Date} date (optional) override the creation date of the key and the key signatures
 * @param {Array<Object>} subkeys (optional) options for each subkey, default to main key options. e.g. [{sign: true, passphrase: '123'}]
     sign parameter defaults to false, and indicates whether the subkey should sign rather than encrypt
 * @returns {Promise<Object>} The generated key object in the form:
   { key:Key, privateKeyArmored:String, publicKeyArmored:String, revocationCertificate:String }
 * @async
 * @static
 */
declare export function generateKey(options: KeyOptions): Promise<KeyPair>

	
/**
 * Reformats signature packets for a key and rewraps key object.
 * @param {key$Key} privateKey private key to reformat
 * @param {Array<Object>} userIds array of user IDs e.g. [{ name:'Phil Zimmermann', email:'phil
 * @openpgp .org' }]
 * @param {String} passphrase (optional) The passphrase used to encrypt the resulting private key
 * @param {Number} keyExpirationTime (optional) The number of seconds after the key creation time that the key expires
 * @param {Boolean} revocationCertificate (optional) Whether the returned object should include a revocation certificate to revoke the public key
 * @returns {Promise<Object>} The generated key object in the form:
     { key:Key, privateKeyArmored:String, publicKeyArmored:String, revocationCertificate:String }
 * @async
 * @static
 */
declare export function reformatKey(
options: {
privateKey: key$key$Key,
userIds?: UserId[],
passphrase?: string,
keyExpirationTime?: number,
revocationCertificate?: boolean
}): Promise<KeyPair>

	
/**
 * Revokes a key. Requires either a private key or a revocation certificate.
 *    If a revocation certificate is passed, the reasonForRevocation parameters will be ignored.
 * @param {key$Key} key (optional) public or private key to revoke
 * @param {String} revocationCertificate (optional) revocation certificate to revoke the key with
 * @param {Object} reasonForRevocation (optional) object indicating the reason for revocation
 * @param {module} :enums.reasonForRevocation} reasonForRevocation.flag (optional) flag indicating the reason for revocation
 * @param {String} (optional) string explaining the reason for revocation
 * @returns {Promise<Object>} The revoked key object in the form:
      { privateKey:Key, privateKeyArmored:String, publicKey:Key, publicKeyArmored:String }
      (if private key is passed) or { publicKey:Key, publicKeyArmored:String } (otherwise)
 * @static
 */
declare export function revokeKey(
options: {
key?: key$key$Key,
revocationCertificate?: string,
enums$reasonForRevocation?: {
flag: enums$enums$reasonForRevocation,
"string": string
}
}): Promise<KeyPair>

	
/**
 * Unlock a private key with your passphrase.
 * @param {key$Key} privateKey the private key that is to be decrypted
 * @param {String | Array<String>} passphrase the user's passphrase(s) chosen during key generation
 * @returns {Promise<Object>} the unlocked key object in the form: { key:Key }
 * @async
 */
declare export function decryptKey(
options: {
privateKey: key$key$Key,
passphrase?: string | string[]
}): Promise<KeyContainer>

	
/**
 * Lock a private key with your passphrase.
 * @param {key$Key} privateKey the private key that is to be decrypted
 * @param {String | Array<String>} passphrase the user's passphrase(s) chosen during key generation
 * @returns {Promise<Object>} the locked key object in the form: { key:Key }
 * @async
 */
declare export function encryptKey(
options: {
privateKey: key$key$Key,
passphrase?: string | string[]
}): Promise<KeyContainer>

	
      declare var npm$namespace$armor: {
        armor: typeof armor$armor,
dearmor: typeof armor$dearmor,
        
      }

/**
 * Armor an OpenPGP binary packet block
 * @param messagetype type of the message
 * @param body
 * @param partindex
 * @param parttotal
 */
declare function armor$armor(
messagetype: enums$armor$armor,
body: Object,
partindex: number,
parttotal: number): string



/**
 * DeArmor an OpenPGP armored message; verify the checksum and return the encoded bytes
 * @param text OpenPGP armored message
 */
declare function armor$dearmor(text: string): Object

	
      declare var npm$namespace$cleartext: {
        fromText: typeof cleartext$fromText,
readArmored: typeof cleartext$readArmored,
        
      }

/**
 * Class that represents an OpenPGP cleartext signed message.
 */
declare interface cleartext$CleartextMessage {

/**
 * Returns ASCII armored text of cleartext signed message
 */
armor(): string,

/**
 * Returns the key IDs of the keys that signed the cleartext message
 */
getSigningKeyIds(): Array<Keyid>,

/**
 * Get cleartext
 */
getText(): string,

/**
 * Sign the cleartext message
 * @param privateKeys private keys with decrypted secret key data for signing
 */
sign(privateKeys: Array<key$key$Key>): void,

/**
 * Verify signatures of cleartext signed message
 * @param keys array of keys to verify signatures
 */
verify(keys: Array<key$key$Key>): Array<VerifiedMessage>
} 


/**
 * creates new message object from text
 * @param text
 */
declare function cleartext$fromText(text: string): cleartext$CleartextMessage


declare function cleartext$readArmored(armoredText: string): Promise<cleartext$CleartextMessage>

	
      declare var npm$namespace$config: {
        
        prefer_hash_algorithm: typeof config$prefer_hash_algorithm,
encryption_cipher: typeof config$encryption_cipher,
compression: typeof config$compression,
show_version: typeof config$show_version,
show_comment: typeof config$show_comment,
integrity_protect: typeof config$integrity_protect,
keyserver: typeof config$keyserver,
debug: typeof config$debug,
      }
declare var config$prefer_hash_algorithm: enums$enums$hash;

declare var config$encryption_cipher: enums$enums$symmetric;

declare var config$compression: enums$config$compression;

declare var config$show_version: boolean;

declare var config$show_comment: boolean;

declare var config$integrity_protect: boolean;

declare var config$keyserver: string;

declare var config$debug: boolean;
	
      declare var npm$namespace$crypto: {
        generateSessionKey: typeof crypto$generateSessionKey,
getPrefixRandom: typeof crypto$getPrefixRandom,
getPrivateMpiCount: typeof crypto$getPrivateMpiCount,
publicKeyDecrypt: typeof crypto$publicKeyDecrypt,
publicKeyEncrypt: typeof crypto$publicKeyEncrypt,
        
      }
declare interface crypto$Mpi {
data: number,
read(input: string): number,
write(): string
} 


/**
 * Generating a session key for the specified symmetric algorithm
 * @param algo Algorithm to use
 */
declare function crypto$generateSessionKey(algo: enums$enums$symmetric): string



/**
 * generate random byte prefix as string for the specified algorithm
 * @param algo Algorithm to use
 */
declare function crypto$getPrefixRandom(algo: enums$enums$symmetric): string



/**
 * Returns the number of integers comprising the private key of an algorithm
 * @param algo The public key algorithm
 */
declare function crypto$getPrivateMpiCount(algo: enums$enums$symmetric): number



/**
 * Decrypts data using the specified public key multiprecision integers of the private key, the specified secretMPIs of the private key and the specified algorithm.
 * @param algo Algorithm to be used
 * @param publicMPIs Algorithm dependent multiprecision integers of the public key part of the private key
 * @param secretMPIs Algorithm dependent multiprecision integers of the private key used
 * @param data Data to be encrypted as MPI
 */
declare function crypto$publicKeyDecrypt(
algo: enums$enums$publicKey,
publicMPIs: Array<crypto$Mpi>,
secretMPIs: Array<crypto$Mpi>,
data: crypto$Mpi): crypto$Mpi



/**
 * Encrypts data using the specified public key multiprecision integers and the specified algorithm.
 * @param algo Algorithm to be used
 * @param publicMPIs Algorithm dependent multiprecision integers
 * @param data Data to be encrypted as MPI
 */
declare function crypto$publicKeyEncrypt(
algo: enums$enums$publicKey,
publicMPIs: Array<crypto$Mpi>,
data: crypto$Mpi): Array<crypto$Mpi>



      declare var npm$namespace$cfb: {
        decrypt: typeof cfb$decrypt,
encrypt: typeof cfb$encrypt,
mdc: typeof cfb$mdc,
        
      }

/**
 * This function decrypts a given plaintext using the specified blockcipher to decrypt a message
 * @param cipherfn the algorithm cipher class to decrypt data in one block_size encryption
 * @param key binary string representation of key to be used to decrypt the ciphertext. This will be passed to the cipherfn
 * @param ciphertext to be decrypted provided as a string
 * @param resync a boolean value specifying if a resync of the IV should be used or not. The encrypteddatapacket uses the "old" style with a resync. Decryption within an encryptedintegrityprotecteddata packet is not resyncing the IV.
 */
declare function cfb$decrypt(cipherfn: string, key: string, ciphertext: string, resync: boolean): string



/**
 * This function encrypts a given with the specified prefixrandom using the specified blockcipher to encrypt a message
 * @param prefixrandom random bytes of block_size length provided as a string to be used in prefixing the data
 * @param cipherfn the algorithm cipher class to encrypt data in one block_size encryption
 * @param plaintext data to be encrypted provided as a string
 * @param key binary string representation of key to be used to encrypt the plaintext. This will be passed to the cipherfn
 * @param resync a boolean value specifying if a resync of the IV should be used or not. The encrypteddatapacket uses the "old" style with a resync. Encryption within an encryptedintegrityprotecteddata packet is not resyncing the IV.
 */
declare function cfb$encrypt(
prefixrandom: string,
cipherfn: string,
plaintext: string,
key: string,
resync: boolean): string



/**
 * Decrypts the prefixed data for the Modification Detection Code (MDC) computation
 * @param cipherfn cipherfn.encrypt Cipher function to use
 * @param key binary string representation of key to be used to check the mdc This will be passed to the cipherfn
 * @param ciphertext The encrypted data
 */
declare function cfb$mdc(cipherfn: Object, key: string, ciphertext: string): string



      declare var npm$namespace$hash: {
        digest: typeof hash$digest,
getHashByteLength: typeof hash$getHashByteLength,
        
      }

/**
 * Create a hash on the specified data using the specified algorithm
 * @param algo Hash algorithm type
 * @param data Data to be hashed
 */
declare function hash$digest(algo: enums$enums$hash, data: string): string



/**
 * Returns the hash size in bytes of the specified hash algorithm type
 * @param algo Hash algorithm type
 */
declare function hash$getHashByteLength(algo: enums$enums$hash): number



      declare var npm$namespace$random: {
        getRandomBigInteger: typeof random$getRandomBigInteger,
getRandomBytes: typeof random$getRandomBytes,
getRandomValues: typeof random$getRandomValues,
getSecureRandom: typeof random$getSecureRandom,
        
      }

/**
 * Create a secure random big integer of bits length
 * @param bits Bit length of the MPI to create
 */
declare function random$getRandomBigInteger(bits: number): number



/**
 * Retrieve secure random byte string of the specified length
 * @param length Length in bytes to generate
 */
declare function random$getRandomBytes(length: number): string



/**
 * Helper routine which calls platform specific crypto random generator
 * @param buf
 */
declare function random$getRandomValues(buf: Uint8Array): void



/**
 * Return a secure random number in the specified range
 * @param from Min of the random number
 * @param to Max of the random number (max 32bit)
 */
declare function random$getSecureRandom(from: number, to: number): number



      declare var npm$namespace$signature: {
        sign: typeof signature$sign,
verify: typeof signature$verify,
        
      }

/**
 * Create a signature on data using the specified algorithm
 * @param hash_algo hash Algorithm to use
 * @param algo Asymmetric cipher algorithm to use
 * @param publicMPIs Public key multiprecision integers of the private key
 * @param secretMPIs Private key multiprecision integers which is used to sign the data
 * @param data Data to be signed
 */
declare function signature$sign(
hash_algo: enums$enums$hash,
algo: enums$enums$publicKey,
publicMPIs: Array<crypto$Mpi>,
secretMPIs: Array<crypto$Mpi>,
data: string): crypto$Mpi



/**
 * @param algo public Key algorithm
 * @param hash_algo Hash algorithm
 * @param msg_MPIs Signature multiprecision integers
 * @param publickey_MPIs Public key multiprecision integers
 * @param data Data on where the signature was computed on
 */
declare function signature$verify(
algo: enums$enums$publicKey,
hash_algo: enums$enums$hash,
msg_MPIs: Array<crypto$Mpi>,
publickey_MPIs: Array<crypto$Mpi>,
data: string): boolean

	declare  class enums$armor {
  constructor(...args: empty): mixed;
static +multipart_section: Class<enums$armor__multipart_section> & enums$armor__multipart_section & 0;// 0
static +multipart_last: Class<enums$armor__multipart_last> & enums$armor__multipart_last & 1;// 1
static +signed: Class<enums$armor__signed> & enums$armor__signed & 2;// 2
static +message: Class<enums$armor__message> & enums$armor__message & 3;// 3
static +public_key: Class<enums$armor__public_key> & enums$armor__public_key & 4;// 4
static +private_key: Class<enums$armor__private_key> & enums$armor__private_key & 5;// 5

}

declare class enums$armor__multipart_section mixins enums$armor {}
declare class enums$armor__multipart_last mixins enums$armor {}
declare class enums$armor__signed mixins enums$armor {}
declare class enums$armor__message mixins enums$armor {}
declare class enums$armor__public_key mixins enums$armor {}
declare class enums$armor__private_key mixins enums$armor {}


declare  class enums$compression {
  constructor(...args: empty): mixed;
static +uncompressed: Class<enums$compression__uncompressed> & enums$compression__uncompressed & 0;// 0
static +zip: Class<enums$compression__zip> & enums$compression__zip & 1;// 1
static +zlib: Class<enums$compression__zlib> & enums$compression__zlib & 2;// 2
static +bzip2: Class<enums$compression__bzip2> & enums$compression__bzip2 & 3;// 3

}

declare class enums$compression__uncompressed mixins enums$compression {}
declare class enums$compression__zip mixins enums$compression {}
declare class enums$compression__zlib mixins enums$compression {}
declare class enums$compression__bzip2 mixins enums$compression {}


declare  class enums$hash {
  constructor(...args: empty): mixed;
static +md5: Class<enums$hash__md5> & enums$hash__md5 & 0;// 0
static +sha1: Class<enums$hash__sha1> & enums$hash__sha1 & 1;// 1
static +ripemd: Class<enums$hash__ripemd> & enums$hash__ripemd & 2;// 2
static +sha256: Class<enums$hash__sha256> & enums$hash__sha256 & 3;// 3
static +sha384: Class<enums$hash__sha384> & enums$hash__sha384 & 4;// 4
static +sha512: Class<enums$hash__sha512> & enums$hash__sha512 & 5;// 5
static +sha224: Class<enums$hash__sha224> & enums$hash__sha224 & 6;// 6

}

declare class enums$hash__md5 mixins enums$hash {}
declare class enums$hash__sha1 mixins enums$hash {}
declare class enums$hash__ripemd mixins enums$hash {}
declare class enums$hash__sha256 mixins enums$hash {}
declare class enums$hash__sha384 mixins enums$hash {}
declare class enums$hash__sha512 mixins enums$hash {}
declare class enums$hash__sha224 mixins enums$hash {}


declare  class enums$packet {
  constructor(...args: empty): mixed;
static +publicKeyEncryptedSessionKey: Class<enums$packet__publicKeyEncryptedSessionKey> & enums$packet__publicKeyEncryptedSessionKey & 0;// 0
static +signature: Class<enums$packet__signature> & enums$packet__signature & 1;// 1
static +symEncryptedSessionKey: Class<enums$packet__symEncryptedSessionKey> & enums$packet__symEncryptedSessionKey & 2;// 2
static +onePassSignature: Class<enums$packet__onePassSignature> & enums$packet__onePassSignature & 3;// 3
static +secretKey: Class<enums$packet__secretKey> & enums$packet__secretKey & 4;// 4
static +publicKey: Class<enums$packet__publicKey> & enums$packet__publicKey & 5;// 5
static +secretSubkey: Class<enums$packet__secretSubkey> & enums$packet__secretSubkey & 6;// 6
static +compressed: Class<enums$packet__compressed> & enums$packet__compressed & 7;// 7
static +symmetricallyEncrypted: Class<enums$packet__symmetricallyEncrypted> & enums$packet__symmetricallyEncrypted & 8;// 8
static +marker: Class<enums$packet__marker> & enums$packet__marker & 9;// 9
static +literal: Class<enums$packet__literal> & enums$packet__literal & 10;// 10
static +trust: Class<enums$packet__trust> & enums$packet__trust & 11;// 11
static +userid: Class<enums$packet__userid> & enums$packet__userid & 12;// 12
static +publicSubkey: Class<enums$packet__publicSubkey> & enums$packet__publicSubkey & 13;// 13
static +userAttribute: Class<enums$packet__userAttribute> & enums$packet__userAttribute & 14;// 14
static +symEncryptedIntegrityProtected: Class<enums$packet__symEncryptedIntegrityProtected> & enums$packet__symEncryptedIntegrityProtected & 15;// 15
static +modificationDetectionCode: Class<enums$packet__modificationDetectionCode> & enums$packet__modificationDetectionCode & 16;// 16

}

declare class enums$packet__publicKeyEncryptedSessionKey mixins enums$packet {}
declare class enums$packet__signature mixins enums$packet {}
declare class enums$packet__symEncryptedSessionKey mixins enums$packet {}
declare class enums$packet__onePassSignature mixins enums$packet {}
declare class enums$packet__secretKey mixins enums$packet {}
declare class enums$packet__publicKey mixins enums$packet {}
declare class enums$packet__secretSubkey mixins enums$packet {}
declare class enums$packet__compressed mixins enums$packet {}
declare class enums$packet__symmetricallyEncrypted mixins enums$packet {}
declare class enums$packet__marker mixins enums$packet {}
declare class enums$packet__literal mixins enums$packet {}
declare class enums$packet__trust mixins enums$packet {}
declare class enums$packet__userid mixins enums$packet {}
declare class enums$packet__publicSubkey mixins enums$packet {}
declare class enums$packet__userAttribute mixins enums$packet {}
declare class enums$packet__symEncryptedIntegrityProtected mixins enums$packet {}
declare class enums$packet__modificationDetectionCode mixins enums$packet {}


declare  class enums$publicKey {
  constructor(...args: empty): mixed;
static +rsa_encrypt_sign: Class<enums$publicKey__rsa_encrypt_sign> & enums$publicKey__rsa_encrypt_sign & 0;// 0
static +rsa_encrypt: Class<enums$publicKey__rsa_encrypt> & enums$publicKey__rsa_encrypt & 1;// 1
static +rsa_sign: Class<enums$publicKey__rsa_sign> & enums$publicKey__rsa_sign & 2;// 2
static +elgamal: Class<enums$publicKey__elgamal> & enums$publicKey__elgamal & 3;// 3
static +dsa: Class<enums$publicKey__dsa> & enums$publicKey__dsa & 4;// 4

}

declare class enums$publicKey__rsa_encrypt_sign mixins enums$publicKey {}
declare class enums$publicKey__rsa_encrypt mixins enums$publicKey {}
declare class enums$publicKey__rsa_sign mixins enums$publicKey {}
declare class enums$publicKey__elgamal mixins enums$publicKey {}
declare class enums$publicKey__dsa mixins enums$publicKey {}


declare  class enums$symmetric {
  constructor(...args: empty): mixed;
static +plaintext: Class<enums$symmetric__plaintext> & enums$symmetric__plaintext & 0;// 0
static +idea: Class<enums$symmetric__idea> & enums$symmetric__idea & 1;// 1
static +tripledes: Class<enums$symmetric__tripledes> & enums$symmetric__tripledes & 2;// 2
static +cast5: Class<enums$symmetric__cast5> & enums$symmetric__cast5 & 3;// 3
static +blowfish: Class<enums$symmetric__blowfish> & enums$symmetric__blowfish & 4;// 4
static +aes128: Class<enums$symmetric__aes128> & enums$symmetric__aes128 & 5;// 5
static +aes192: Class<enums$symmetric__aes192> & enums$symmetric__aes192 & 6;// 6
static +aes256: Class<enums$symmetric__aes256> & enums$symmetric__aes256 & 7;// 7
static +twofish: Class<enums$symmetric__twofish> & enums$symmetric__twofish & 8;// 8

}

declare class enums$symmetric__plaintext mixins enums$symmetric {}
declare class enums$symmetric__idea mixins enums$symmetric {}
declare class enums$symmetric__tripledes mixins enums$symmetric {}
declare class enums$symmetric__cast5 mixins enums$symmetric {}
declare class enums$symmetric__blowfish mixins enums$symmetric {}
declare class enums$symmetric__aes128 mixins enums$symmetric {}
declare class enums$symmetric__aes192 mixins enums$symmetric {}
declare class enums$symmetric__aes256 mixins enums$symmetric {}
declare class enums$symmetric__twofish mixins enums$symmetric {}


declare  class enums$keyStatus {
  constructor(...args: empty): mixed;
static +invalid: Class<enums$keyStatus__invalid> & enums$keyStatus__invalid & 0;// 0
static +expired: Class<enums$keyStatus__expired> & enums$keyStatus__expired & 1;// 1
static +revoked: Class<enums$keyStatus__revoked> & enums$keyStatus__revoked & 2;// 2
static +valid: Class<enums$keyStatus__valid> & enums$keyStatus__valid & 3;// 3
static +no_self_cert: Class<enums$keyStatus__no_self_cert> & enums$keyStatus__no_self_cert & 4;// 4

}

declare class enums$keyStatus__invalid mixins enums$keyStatus {}
declare class enums$keyStatus__expired mixins enums$keyStatus {}
declare class enums$keyStatus__revoked mixins enums$keyStatus {}
declare class enums$keyStatus__valid mixins enums$keyStatus {}
declare class enums$keyStatus__no_self_cert mixins enums$keyStatus {}


declare  class enums$reasonForRevocation {
  constructor(...args: empty): mixed;
static +no_reason: Class<enums$reasonForRevocation__no_reason> & enums$reasonForRevocation__no_reason & 0;// 0
static +key_superseded: Class<enums$reasonForRevocation__key_superseded> & enums$reasonForRevocation__key_superseded & 1;// 1
static +key_compromised: Class<enums$reasonForRevocation__key_compromised> & enums$reasonForRevocation__key_compromised & 2;// 2
static +key_retired: Class<enums$reasonForRevocation__key_retired> & enums$reasonForRevocation__key_retired & 3;// 3
static +userid_invalid: Class<enums$reasonForRevocation__userid_invalid> & enums$reasonForRevocation__userid_invalid & 4;// 4

}

declare class enums$reasonForRevocation__no_reason mixins enums$reasonForRevocation {}
declare class enums$reasonForRevocation__key_superseded mixins enums$reasonForRevocation {}
declare class enums$reasonForRevocation__key_compromised mixins enums$reasonForRevocation {}
declare class enums$reasonForRevocation__key_retired mixins enums$reasonForRevocation {}
declare class enums$reasonForRevocation__userid_invalid mixins enums$reasonForRevocation {}

	
      declare var npm$namespace$key: {
        generate: typeof key$generate,
readArmored: typeof key$readArmored,
        
      }
declare interface key$KeyResult {
keys: Array<key$Key>,
err: Array<Error>
} 


/**
 * Class that represents an OpenPGP key. Must contain a primary key. Can contain additional subkeys, signatures, user ids, user attributes.
 */
declare interface key$Key {
armor(): string,
decrypt(passphrase: string): boolean,
getExpirationTime(): Date,
getKeyIds(): Array<Keyid>,
getPreferredHashAlgorithm(): string,
getPrimaryUser(): any,
getUserIds(): Array<string>,
isPrivate(): boolean,
isPublic(): boolean,
primaryKey: enums$packet.packet$PublicKey,
toPublic(): key$Key,
update(key: key$Key): void,
verifyPrimaryKey(): enums$enums$keyStatus
} 


/**
 * Generates a new OpenPGP key. Currently only supports RSA keys. Primary and subkey will be of same type.
 * @param options
 */
declare function key$generate(options: KeyOptions): key$Key



/**
 * Reads an OpenPGP armored text and returns one or multiple key objects
 * @param armoredText text to be parsed
 */
declare function key$readArmored(armoredText: string): Promise<key$KeyResult>

	
      declare var npm$namespace$message: {
        fromBinary: typeof message$fromBinary,
fromText: typeof message$fromText,
readArmored: typeof message$readArmored,
read: typeof message$read,
        
      }

/**
 * Class that represents an OpenPGP message. Can be an encrypted message, signed message, compressed message or literal message
 */
declare interface message$Message {

/**
 * Returns ASCII armored text of message
 */
armor(): string,

/**
 * Decrypt the message
 * @param privateKey private key with decrypted secret data
 */
decrypt(privateKey: key$key$Key): Array<message$Message>,

/**
 * Encrypt the message
 * @param keys array of keys, used to encrypt the message
 */
encrypt(keys: Array<key$key$Key>): Array<message$Message>,

/**
 * Returns the key IDs of the keys to which the session key is encrypted
 */
getEncryptionKeyIds(): Array<Keyid>,

/**
 * Get literal data that is the body of the message
 */
getLiteralData(): string,

/**
 * Returns the key IDs of the keys that signed the message
 */
getSigningKeyIds(): Array<Keyid>,

/**
 * Get literal data as text
 */
getText(): string,

/**
 * Sign the message (the literal data packet of the message)
 * @param privateKey private keys with decrypted secret key data for signing
 */
sign(privateKey: Array<key$key$Key>): message$Message,

/**
 * Unwrap compressed message
 */
unwrapCompressed(): message$Message,

/**
 * Verify message signatures
 * @param keys array of keys to verify signatures
 */
verify(keys: Array<key$key$Key>): Array<Object>,
packets: {
write(): Uint8Array
}
} 


/**
 * creates new message object from binary data
 * @param bytes
 */
declare function message$fromBinary(bytes: Uint8Array | ReadableStream): message$Message



/**
 * creates new message object from text
 * @param text
 */
declare function message$fromText(text: string): message$Message



/**
 * reads an OpenPGP armored message and returns a message object
 * @param armoredText text to be parsed
 */
declare function message$readArmored(armoredText: string): Promise<message$Message>



/**
 * reads an OpenPGP message as byte array and returns a message object
 * @param {Uint8Array} input binary message
 * @returns {message$Message} new message object
 * @static
 */
declare function message$read(data: Uint8Array): Promise<message$Message>

	
      declare var npm$namespace$packet: {
        fromStructuredClone: typeof packet$fromStructuredClone,
newPacketFromTag: typeof packet$newPacketFromTag,
        
      }
declare interface packet$PublicKey {
algorithm: enums$enums$publicKey,
created: Date,
fingerprint: string,
getBitSize(): number,
getFingerprint(): string,
getKeyId(): string,
read(input: string): any,
write(): any
} 

declare type packet$SecretKey = {
read(bytes: string): void,
write(): string,
clearPrivateMPIs(str_passphrase: string): boolean,
encrypt(passphrase: string): void
} & packet$PublicKey



/**
 * Allocate a new packet from structured packet clone
 * @param packetClone packet clone
 */
declare function packet$fromStructuredClone(packetClone: Object): Object



/**
 * Allocate a new packet
 * @param property name from enums.packet
 */
declare function packet$newPacketFromTag(tag: string): Object

	
      declare var npm$namespace$util: {
        bin2str: typeof util$bin2str,
calc_checksum: typeof util$calc_checksum,
decode_utf8: typeof util$decode_utf8,
encode_utf8: typeof util$encode_utf8,
get_hashAlgorithmString: typeof util$get_hashAlgorithmString,
getWebCrypto: typeof util$getWebCrypto,
hex2bin: typeof util$hex2bin,
hexidump: typeof util$hexidump,
hexstrdump: typeof util$hexstrdump,
print_debug: typeof util$print_debug,
print_debug_hexstr_dump: typeof util$print_debug_hexstr_dump,
shiftRight: typeof util$shiftRight,
str2bin: typeof util$str2bin,
str2Uint8Array: typeof util$str2Uint8Array,
Uint8Array2str: typeof util$Uint8Array2str,
        
      }

/**
 * Convert an array of integers(0.255) to a string
 * @param bin An array of (binary) integers to convert
 */
declare function util$bin2str(bin: Array<number>): string



/**
 * Calculates a 16bit sum of a string by adding each character codes modulus 65535
 * @param text string to create a sum of
 */
declare function util$calc_checksum(text: string): number



/**
 * Convert a string of utf8 bytes to a native javascript string
 * @param utf8 A valid squence of utf8 bytes
 */
declare function util$decode_utf8(utf8: string): string



/**
 * Convert a native javascript string to a string of utf8 bytes
 * param str The string to convert
 */
declare function util$encode_utf8(str: string): string



/**
 * Return the algorithm type as string
 */
declare function util$get_hashAlgorithmString(): string



/**
 * Get native Web Cryptography api. The default configuration is to use the api when available. But it can also be deactivated with config.useWebCrypto
 */
declare function util$getWebCrypto(): Object



/**
 * Create binary string from a hex encoded string
 * @param str Hex string to convert
 */
declare function util$hex2bin(str: string): string



/**
 * Creating a hex string from an binary array of integers (0..255)
 * @param str Array of bytes to convert
 */
declare function util$hexidump(str: string): string



/**
 * Create hexstring from a binary
 * @param str string to convert
 */
declare function util$hexstrdump(str: string): string



/**
 * Helper function to print a debug message. Debug messages are only printed if
 * @param str string of the debug message
 */
declare function util$print_debug(str: string): void



/**
 * Helper function to print a debug message. Debug messages are only printed if
 * @param str string of the debug message
 */
declare function util$print_debug_hexstr_dump(str: string): void



/**
 * Shifting a string to n bits right
 * @param value The string to shift
 * @param bitcount Amount of bits to shift (MUST be smaller than 9)
 */
declare function util$shiftRight(value: string, bitcount: number): string



/**
 * Convert a string to an array of integers(0.255)
 * @param str string to convert
 */
declare function util$str2bin(str: string): Array<number>



/**
 * Convert a string to a Uint8Array
 * @param str string to convert
 */
declare function util$str2Uint8Array(str: string): Uint8Array



/**
 * Convert a Uint8Array to a string. This currently functions the same as bin2str.
 * @param bin An array of (binary) integers to convert
 */
declare function util$Uint8Array2str(bin: Uint8Array): string

    }
