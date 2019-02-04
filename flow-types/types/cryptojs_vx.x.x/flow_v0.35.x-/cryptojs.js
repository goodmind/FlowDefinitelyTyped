declare module 'cryptojs' {
        declare var CryptoJS: CryptoJS$CryptoJS$CryptoJSStatic;
	declare type lib$SomeArray = ArrayBuffer
| Int8Array
| Int16Array
| Int32Array
| Uint8Array
| Uint16Array
| Uint32Array;

declare interface lib$Base {
extend(overrides: Object): Object,
init(...args: any[]): void,
create(...args: any[]): lib$Base,
mixIn(properties: Object): void,
clone(): lib$Base
} 

declare type lib$WordArray = {
words: number[],
sigBytes: number,
init(typedArray: lib$SomeArray): void,
init(words?: number[], sigBytes?: number): void,
create(typedArray: lib$SomeArray): lib$WordArray,
create(words?: number[], sigBytes?: number): lib$WordArray,
toString(encoder?: enc$enc$IEncoder): string,
concat(wordArray: lib$WordArray): lib$WordArray,
clamp(): void,
clone(): lib$WordArray,
random(nBytes: number): lib$WordArray,
words: x64$Word[],
sigBytes: number,
init(words?: x64$Word[], sigBytes?: number): void,
create(words?: x64$Word[], sigBytes?: number): lib$WordArray,
toX32(): lib$lib$WordArray,
clone(): lib$WordArray
} & lib$Base


declare type lib$BufferedBlockAlgorithm = {
reset(): void,
clone(): lib$BufferedBlockAlgorithm
} & lib$Base


declare type lib$IHasher<C> = {
cfg: C,
init(cfg?: C): void,
create(cfg?: C): lib$IHasher<C>,
update(messageUpdate: string): lib$Hasher,
update(messageUpdate: lib$WordArray): lib$Hasher,
finalize(messageUpdate?: string): lib$WordArray,
finalize(messageUpdate?: lib$WordArray): lib$WordArray,
blockSize: number,
_createHelper(hasher: lib$Hasher): lib$IHasherHelper<C>,
_createHmacHelper(hasher: lib$Hasher): lib$IHasherHmacHelper,
clone(): lib$IHasher<C>
} & lib$BufferedBlockAlgorithm


declare type lib$Hasher = {} & lib$IHasher<Object>


declare interface lib$IHasherHelper<C> {
(message: string, cfg?: C): lib$WordArray,
(message: lib$WordArray, cfg?: C): lib$WordArray
} 

declare type lib$HasherHelper = {} & lib$IHasherHelper<Object>


declare interface lib$IHasherHmacHelper {
(message: string, key: string): lib$WordArray,
(message: string, key: lib$WordArray): lib$WordArray,
(message: lib$WordArray, key: string): lib$WordArray,
(message: lib$WordArray, key: lib$WordArray): lib$WordArray
} 

declare type lib$ICipher<C> = {
cfg: C,
createEncryptor(key: lib$WordArray, cfg?: C): lib$ICipher<C>,
createDecryptor(key: lib$WordArray, cfg?: C): lib$ICipher<C>,
create(xformMode?: number, key?: lib$WordArray, cfg?: C): lib$ICipher<C>,
init(xformMode?: number, key?: lib$WordArray, cfg?: C): void,
process(dataUpdate: string): lib$WordArray,
process(dataUpdate: lib$WordArray): lib$WordArray,
finalize(dataUpdate?: string): lib$WordArray,
finalize(dataUpdate?: lib$WordArray): lib$WordArray,
keySize: number,
ivSize: number,
_createHelper(cipher: lib$Cipher): lib$ICipherHelper<C>,
clone(): lib$ICipher<C>
} & lib$BufferedBlockAlgorithm


declare type lib$Cipher = {} & lib$ICipher<Object>


declare type lib$IStreamCipher<C> = {
drop?: number,
createEncryptor(key: lib$WordArray, cfg?: C): lib$IStreamCipher<C>,
createDecryptor(key: lib$WordArray, cfg?: C): lib$IStreamCipher<C>,
create(xformMode?: number, key?: lib$WordArray, cfg?: C): lib$IStreamCipher<C>,
blockSize: number
} & lib$ICipher<C>


declare type lib$StreamCipher = {} & lib$IStreamCipher<Object>


declare type lib$BlockCipherMode = {
createEncryptor(cipher: lib$Cipher, iv: number[]): mode$mode$IBlockCipherEncryptor,
createDecryptor(cipher: lib$Cipher, iv: number[]): mode$mode$IBlockCipherDecryptor,
init(cipher?: lib$Cipher, iv?: number[]): void,
create(cipher?: lib$Cipher, iv?: number[]): lib$BlockCipherMode
} & lib$Base


declare type lib$BlockCipher = {} & lib$IStreamCipher<lib$IBlockCipherCfg>


declare interface lib$IBlockCipherCfg {
iv?: lib$WordArray,
mode?: mode$mode$IBlockCipherModeImpl,
padding?: pad$pad$IPaddingImpl
} 

declare interface lib$CipherParamsData {
ciphertext?: lib$lib$WordArray,
key?: lib$lib$WordArray,
iv?: lib$lib$WordArray,
salt?: lib$lib$WordArray,
algorithm?: lib$Cipher,
mode?: mode$mode$IBlockCipherModeImpl,
padding?: pad$pad$IPaddingImpl,
blockSize?: number,
formatter?: format$format$IFormatter
} 

declare type lib$CipherParams = {
init(cipherParams?: lib$CipherParamsData): void,
create(cipherParams?: lib$CipherParamsData): lib$CipherParams,
toString(formatter?: format$format$IFormatter): string
} & lib$Base & lib$CipherParamsData


declare type lib$ISerializableCipher<C: lib$ISerializableCipherCfg> = {
cfg: C,
encrypt(
cipher: lib$Cipher,
message: lib$WordArray,
key: lib$WordArray,
cfg?: C): lib$CipherParams,
encrypt(
cipher: lib$Cipher,
message: string,
key: lib$WordArray,
cfg?: C): lib$CipherParams,
decrypt(
cipher: lib$Cipher,
ciphertext: lib$CipherParamsData,
key: lib$WordArray,
cfg?: C): lib$WordArray,
decrypt(
cipher: lib$Cipher,
ciphertext: string,
key: lib$WordArray,
cfg?: C): lib$WordArray
} & lib$Base


declare type lib$SerializableCipher = {} & lib$ISerializableCipher<lib$ISerializableCipherCfg>


declare interface lib$ISerializableCipherCfg {
format?: format$format$IFormatter,
iv?: lib$WordArray,
mode?: mode$mode$IBlockCipherModeImpl,
padding?: pad$pad$IPaddingImpl
} 

declare type lib$IPasswordBasedCipher<C: lib$IPasswordBasedCipherCfg> = {
cfg: C,
encrypt(
cipher: lib$Cipher,
message: lib$WordArray,
password: string,
cfg?: C): lib$CipherParams,
encrypt(
cipher: lib$Cipher,
message: string,
password: string,
cfg?: C): lib$CipherParams,
decrypt(
cipher: lib$Cipher,
ciphertext: lib$CipherParamsData,
password: string,
cfg?: C): lib$WordArray,
decrypt(
cipher: lib$Cipher,
ciphertext: string,
password: string,
cfg?: C): lib$WordArray
} & lib$Base


declare type lib$PasswordBasedCipher = {} & lib$IPasswordBasedCipher<lib$IPasswordBasedCipherCfg>


declare type lib$IPasswordBasedCipherCfg = {
kdf?: kdf$kdf$IKdfImpl,
mode?: mode$mode$IBlockCipherModeImpl,
padding?: pad$pad$IPaddingImpl
} & lib$ISerializableCipherCfg



/**
 * see Cipher._createHelper
 */
declare interface lib$ICipherHelper<C> {
encrypt(message: string, password: string, cfg?: C): lib$CipherParams,
encrypt(message: string, key: lib$WordArray, cfg?: C): lib$CipherParams,
encrypt(message: lib$WordArray, password: string, cfg?: C): lib$CipherParams,
encrypt(message: lib$WordArray, key: lib$WordArray, cfg?: C): lib$CipherParams,
decrypt(ciphertext: string, password: string, cfg?: C): lib$WordArray,
decrypt(ciphertext: string, key: lib$WordArray, cfg?: C): lib$WordArray,
decrypt(ciphertext: lib$CipherParamsData, password: string, cfg?: C): lib$WordArray,
decrypt(ciphertext: lib$CipherParamsData, key: lib$WordArray, cfg?: C): lib$WordArray
} 

declare type lib$CipherHelper = {} & lib$ICipherHelper<Object>


declare interface lib$LibStatic {
lib$Base: lib$lib$Base,
lib$WordArray: lib$lib$WordArray,
lib$CipherParams: lib$lib$CipherParams,
lib$SerializableCipher: lib$lib$SerializableCipher,
lib$PasswordBasedCipher: lib$lib$PasswordBasedCipher
} 

declare interface enc$IEncoder {
stringify(wordArray: lib$lib$WordArray): string
} 

declare interface enc$IDecoder {
parse(s: string): lib$lib$WordArray
} 

declare type enc$ICoder = {} & enc$IEncoder & enc$IDecoder


declare interface enc$EncStatic {
Hex: enc$ICoder,
Latin1: enc$ICoder,
Utf8: enc$ICoder,
Base64: enc$ICoder,
Utf16: enc$ICoder,
Utf16BE: enc$ICoder,
Utf16LE: enc$ICoder
} 

declare interface kdf$KdfStatic {
OpenSSL: kdf$IKdfImpl
} 

declare interface kdf$IKdfImpl {
execute(
password: string,
keySize: number,
ivSize: number,
salt?: string): lib$lib$CipherParams,
execute(
password: string,
keySize: number,
ivSize: number,
salt?: lib$lib$WordArray): lib$lib$CipherParams
} 

declare interface format$FormatStatic {
OpenSSL: format$IFormatter,
Hex: format$IFormatter
} 

declare interface format$IFormatter {
stringify(cipherParams: lib$lib$CipherParamsData): string,
parse(s: string): lib$lib$CipherParams
} 

declare interface algo$AlgoStatic {
algo$AES: algo$algo$AES,
algo$DES: algo$algo$DES,
algo$TripleDES: algo$algo$TripleDES,
algo$RabbitLegacy: algo$algo$RabbitLegacy,
algo$Rabbit: algo$algo$Rabbit,
algo$RC4: algo$algo$RC4,
algo$MD5: algo$algo$MD5,
algo$RIPEMD160: algo$algo$RIPEMD160,
algo$SHA1: algo$algo$SHA1,
algo$SHA256: algo$algo$SHA256,
algo$SHA224: algo$algo$SHA224,
algo$SHA384: algo$algo$SHA384,
algo$SHA512: algo$algo$SHA512,
algo$SHA3: algo$algo$SHA3,
algo$HMAC: algo$algo$HMAC,
algo$EvpKDF: algo$algo$EvpKDF,
algo$PBKDF2: algo$algo$PBKDF2,
algo$RC4Drop: algo$algo$RC4Drop
} 

declare type algo$IBlockCipherImpl = {
encryptBlock(M: number[], offset: number): void,
decryptBlock(M: number[], offset: number): void,
createEncryptor(key: lib$lib$WordArray, cfg?: lib$lib$CipherParamsData): algo$IBlockCipherImpl,
createDecryptor(key: lib$lib$WordArray, cfg?: lib$lib$CipherParamsData): algo$IBlockCipherImpl,
create(
xformMode?: number,
key?: lib$lib$WordArray,
cfg?: lib$lib$IBlockCipherCfg): algo$IBlockCipherImpl
} & lib$lib$BlockCipher


declare type algo$AES = {} & algo$IBlockCipherImpl


declare type algo$DES = {} & algo$IBlockCipherImpl


declare type algo$TripleDES = {} & algo$IBlockCipherImpl


declare type algo$RabbitLegacy = {} & lib$lib$StreamCipher


declare type algo$Rabbit = {} & lib$lib$StreamCipher


declare type algo$RC4 = {} & lib$lib$StreamCipher


declare type algo$MD5 = {} & lib$lib$Hasher


declare type algo$RIPEMD160 = {} & lib$lib$Hasher


declare type algo$SHA1 = {} & lib$lib$Hasher


declare type algo$SHA256 = {} & lib$lib$Hasher


declare type algo$SHA224 = {} & lib$lib$Hasher


declare type algo$SHA384 = {} & lib$lib$Hasher


declare type algo$SHA512 = {} & lib$lib$Hasher


declare type algo$SHA3 = {} & lib$lib$IHasher<algo$ISHA3Cfg>


declare interface algo$ISHA3Cfg {
outputLength?: number
} 

declare type algo$HMAC = {
init(hasher?: lib$lib$Hasher, key?: string): void,
init(hasher?: lib$lib$Hasher, key?: lib$lib$WordArray): void,
create(hasher?: lib$lib$Hasher, key?: string): algo$HMAC,
create(hasher?: lib$lib$Hasher, key?: lib$lib$WordArray): algo$HMAC,
update(messageUpdate: string): algo$HMAC,
update(messageUpdate: lib$lib$WordArray): algo$HMAC,
finalize(messageUpdate?: string): lib$lib$WordArray,
finalize(messageUpdate?: lib$lib$WordArray): lib$lib$WordArray
} & lib$lib$Base


declare type algo$EvpKDF = {
cfg: algo$IEvpKDFCfg,
init(cfg?: algo$IEvpKDFCfg): void,
create(cfg?: algo$IEvpKDFCfg): algo$EvpKDF,
compute(password: string, salt: string): lib$lib$WordArray,
compute(password: string, salt: lib$lib$WordArray): lib$lib$WordArray,
compute(password: lib$lib$WordArray, salt: string): lib$lib$WordArray,
compute(password: lib$lib$WordArray, salt: lib$lib$WordArray): lib$lib$WordArray
} & lib$lib$Base


declare interface algo$IEvpKDFCfg {
keySize?: number,
hasher?: lib$lib$Hasher,
iterations?: number
} 

declare interface algo$IEvpKDFHelper {
(password: string, salt: string, cfg?: algo$IEvpKDFCfg): lib$lib$WordArray,
(password: string, salt: lib$lib$WordArray, cfg?: algo$IEvpKDFCfg): lib$lib$WordArray,
(password: lib$lib$WordArray, salt: string, cfg?: algo$IEvpKDFCfg): lib$lib$WordArray,
(password: lib$lib$WordArray, salt: lib$lib$WordArray, cfg?: algo$IEvpKDFCfg): lib$lib$WordArray
} 

declare type algo$PBKDF2 = {} & algo$EvpKDF


declare type algo$RC4Drop = {} & algo$RC4


declare interface mode$ModeStatic {
mode$CBC: mode$mode$CBC,
mode$CFB: mode$mode$CFB,
mode$CTR: mode$mode$CTR,
mode$CTRGladman: mode$mode$CTRGladman,
mode$ECB: mode$mode$ECB,
mode$OFB: mode$mode$OFB
} 

declare type mode$IBlockCipherEncryptor = {
processBlock(words: number[], offset: number): void
} & lib$lib$BlockCipherMode


declare type mode$IBlockCipherDecryptor = {
processBlock(words: number[], offset: number): void
} & lib$lib$BlockCipherMode


declare type mode$IBlockCipherModeImpl = {
Encryptor: mode$IBlockCipherEncryptor,
Decryptor: mode$IBlockCipherDecryptor
} & lib$lib$BlockCipherMode


declare type mode$CBC = {} & mode$IBlockCipherModeImpl


declare type mode$CFB = {} & mode$IBlockCipherModeImpl


declare type mode$CTR = {} & mode$IBlockCipherModeImpl


declare type mode$CTRGladman = {} & mode$IBlockCipherModeImpl


declare type mode$ECB = {} & mode$IBlockCipherModeImpl


declare type mode$OFB = {} & mode$IBlockCipherModeImpl


declare interface pad$PadStatic {
pad$Pkcs7: pad$pad$Pkcs7,
pad$AnsiX923: pad$pad$AnsiX923,
pad$Iso10126: pad$pad$Iso10126,
pad$Iso97971: pad$pad$Iso97971,
pad$ZeroPadding: pad$pad$ZeroPadding,
pad$NoPadding: pad$pad$NoPadding
} 

declare interface pad$IPaddingImpl {
pad(data: lib$lib$WordArray, blockSize: number): void,
unpad(data: lib$lib$WordArray): void
} 

declare type pad$Pkcs7 = {} & pad$IPaddingImpl


declare type pad$AnsiX923 = {} & pad$IPaddingImpl


declare type pad$Iso10126 = {} & pad$IPaddingImpl


declare type pad$Iso97971 = {} & pad$IPaddingImpl


declare type pad$ZeroPadding = {} & pad$IPaddingImpl


declare type pad$NoPadding = {} & pad$IPaddingImpl


declare interface x64$X64Static {
x64$Word: x64$x64$Word,
lib$WordArray: x64$lib$WordArray
} 

declare type x64$Word = {
high: number,
low: number,
init(high?: number, low?: number): void,
create(high?: number, low?: number): x64$Word
} & lib$lib$Base


declare type x64$WordArray = {
words: number[],
sigBytes: number,
init(typedArray: lib$SomeArray): void,
init(words?: number[], sigBytes?: number): void,
create(typedArray: lib$SomeArray): x64$WordArray,
create(words?: number[], sigBytes?: number): x64$WordArray,
toString(encoder?: enc$enc$IEncoder): string,
concat(wordArray: x64$WordArray): x64$WordArray,
clamp(): void,
clone(): x64$WordArray,
random(nBytes: number): x64$WordArray,
words: x64$Word[],
sigBytes: number,
init(words?: x64$Word[], sigBytes?: number): void,
create(words?: x64$Word[], sigBytes?: number): x64$WordArray,
toX32(): lib$x64$WordArray,
clone(): x64$WordArray
} & lib$Base


declare interface CryptoJS$CryptoJSStatic {
lib: lib$lib$LibStatic,
enc: enc$enc$EncStatic,
kdf: kdf$kdf$KdfStatic,
format: format$format$FormatStatic,
algo: algo$algo$AlgoStatic,
mode: mode$mode$ModeStatic,
pad: pad$pad$PadStatic,
x64: x64$x64$X64Static,
algo$AES: CryptoJS$lib.lib$ICipherHelper<CryptoJS$lib.lib$IBlockCipherCfg>,
algo$DES: CryptoJS$lib.lib$ICipherHelper<CryptoJS$lib.lib$IBlockCipherCfg>,
algo$TripleDES: CryptoJS$lib.lib$ICipherHelper<CryptoJS$lib.lib$IBlockCipherCfg>,
algo$RabbitLegacy: CryptoJS$lib.lib$CipherHelper,
algo$Rabbit: CryptoJS$lib.lib$CipherHelper,
algo$RC4: CryptoJS$lib.lib$CipherHelper,
algo$RC4Drop: CryptoJS$lib.lib$ICipherHelper<Object>,
algo$MD5: CryptoJS$lib.lib$HasherHelper,
HmacMD5: CryptoJS$lib.lib$IHasherHmacHelper,
algo$RIPEMD160: CryptoJS$lib.lib$HasherHelper,
HmacRIPEMD160: CryptoJS$lib.lib$IHasherHmacHelper,
algo$SHA1: CryptoJS$lib.lib$HasherHelper,
HmacSHA1: CryptoJS$lib.lib$IHasherHmacHelper,
algo$SHA256: CryptoJS$lib.lib$HasherHelper,
HmacSHA256: CryptoJS$lib.lib$IHasherHmacHelper,
algo$SHA224: CryptoJS$lib.lib$HasherHelper,
HmacSHA224: CryptoJS$lib.lib$IHasherHmacHelper,
algo$SHA512: CryptoJS$lib.lib$HasherHelper,
HmacSHA512: CryptoJS$lib.lib$IHasherHmacHelper,
algo$SHA384: CryptoJS$lib.lib$HasherHelper,
HmacSHA384: CryptoJS$lib.lib$IHasherHmacHelper,
algo$SHA3: CryptoJS$lib.lib$IHasherHelper<CryptoJS$algo.algo$ISHA3Cfg>,
HmacSHA3: CryptoJS$lib.lib$IHasherHmacHelper,
algo$EvpKDF: CryptoJS$algo.algo$IEvpKDFHelper,
algo$PBKDF2: CryptoJS$algo.algo$IEvpKDFHelper
} 
    }
