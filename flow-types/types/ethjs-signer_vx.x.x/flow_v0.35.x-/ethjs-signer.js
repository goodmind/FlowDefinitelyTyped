declare module 'ethjs-signer' {
        
/**
 * Signs a raw transaction and return it either as a serialized hex string or raw tx object.
 */
declare export function sign(
transaction: {[key: string]: any},
privateKey: string,
toObject?: false): string

	declare export function sign(transaction: {[key: string]: any}, privateKey: string, toObject: true): any[]

	
/**
 * Recovers a ECDSA public key from a raw transaction.
 */
declare export function recover(rawTx: string | Buffer, v: number, r: Buffer, s: Buffer): Buffer

    }
