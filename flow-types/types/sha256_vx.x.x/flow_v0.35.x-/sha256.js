declare module 'sha256' {
        declare type Message = string | Buffer | number[];
	declare interface Sha256 {
(message: Message, options?: {
asString: true
}): string,
(message: Message, options: {
asBytes: true
}): number[]
} 
	declare type Sha256WithX2 = {
x2: Sha256
} & Sha256

	declare var sha256: Sha256WithX2;
	declare module.exports: typeof sha256

    }
