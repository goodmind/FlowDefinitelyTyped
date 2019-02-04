declare module 'eth-lightwallet' {
        declare export interface ECSignatureBuffer {
v: number,
r: Buffer,
s: Buffer
} 
	
      declare var npm$namespace$signing: {
        signTx: typeof signing$signTx,
signMsg: typeof signing$signMsg,
signMsgHash: typeof signing$signMsgHash,
concatSig: typeof signing$concatSig,
        
      }
declare function signing$signTx(
keystore: keystore,
pwDerivedKey: Uint8Array,
rawTx: string,
signingAddress: string): string


declare function signing$signMsg(
keystore: keystore,
pwDerivedKey: Uint8Array,
rawMsg: string,
signingAddress: string): ECSignatureBuffer


declare function signing$signMsgHash(
keystore: keystore,
pwDerivedKey: Uint8Array,
msgHash: string,
signingAddress: string): ECSignatureBuffer


declare function signing$concatSig(signature: any): string

	declare export class keystore  {
static createVault(options: any, callback?: (error: Error, keystore: keystore) => void): keystore;
static generateRandomSeed(): string;
static isSeedValid(seed: string): boolean;
static deserialize(keystore: string): keystore;
serialize(): string;
keyFromPassword(
password: string,
callback?: (error: Error, pwDerivedKey: Uint8Array) => void): Uint8Array;
isDerivedKeyCorrect(pwDerivedKey: Uint8Array): boolean;
generateNewAddress(pwDerivedKey: Uint8Array, numberOfAddresses: number): void;
getSeed(pwDerivedKey: Uint8Array): string;
exportPrivateKey(address: string, pwDerivedKey: Uint8Array): string;
getAddresses(): string[]
}
	declare export interface VaultOptions {
password: string,
seedPhrase: string,
salt?: string,
hdPathString: string
} 
    }
