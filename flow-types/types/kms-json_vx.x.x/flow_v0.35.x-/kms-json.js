declare module 'kms-json' {
        declare interface KmsJson$KmsJsonOptions {
awsKmsSettings?: {[key: string]: any},
keyId: string,
encoding?: string
} 
	declare class KmsJson  {
constructor(options: KmsJson$KmsJson$KmsJsonOptions): this;
encrypt(inputJson: {[key: string]: any}): string;
decrypt(cipherText: string): {[key: string]: any}
}
	declare module.exports: typeof KmsJson

    }
