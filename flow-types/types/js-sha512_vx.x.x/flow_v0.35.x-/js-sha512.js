declare module 'js-sha512' {
        declare interface Hash {
update(messageToHash: string): Hash,
hex(): string,
array(): number[],
digest(): number[],
arrayBuffer(): ArrayBuffer
} 
	declare interface HashStatic {
(messageToHash: string): string,
hex(messageToHash: string): string,
array(messageToHash: string): number[],
digest(messageToHash: string): number[],
arrayBuffer(messageToHash: string): ArrayBuffer,
create(): Hash,
update(messageToHash: string): Hash,
hmac: HmacStatic
} 
	declare type JSSha512Static = {
sha512: HashStatic,
sha384: HashStatic,
sha512_224: HashStatic,
sha512_256: HashStatic,
create(): Hash
} & HashStatic

	declare interface HmacStatic {
(key: string, messageToHash: string): string,
create(key: string): Hash,
update(key: string, messageToHash: string): Hash
} 
	declare var jsSha512: JSSha512Static;
	declare module.exports: typeof jsSha512

    }
