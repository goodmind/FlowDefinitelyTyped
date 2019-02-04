declare module 'mcrypt' {
        declare export function getAlgorithmNames(): string[]

	declare export function getModeNames(): string[]

	declare export class MCrypt  {
constructor(algorithm: string, mode: string): this;
open(key: string | Buffer, iv?: string | Buffer): void;
encrypt(plaintext: string | Buffer): Buffer;
decrypt(ciphertext: Buffer): Buffer;
generateIv(): Buffer;
validateKeySize(validate: boolean): void;
validateIvSize(validate: boolean): void;
selfTest(): boolean;
isBlockAlgorithmMode(): boolean;
isBlockAlgorithm(): boolean;
isBlockMode(): boolean;
getBlockSize(): number;
getKeySize(): number;
getSupportedKeySizes(): number[];
getIvSize(): number;
hasIv(): boolean;
getAlgorithmName(): string;
getModeName(): string
}
    }
