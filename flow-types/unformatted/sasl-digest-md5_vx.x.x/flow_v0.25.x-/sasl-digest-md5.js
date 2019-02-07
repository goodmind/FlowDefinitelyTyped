declare module 'sasl-digest-md5' {
        import type {
          Mechanism
        } from 'saslmechanisms';

	declare module.exports: typeof DigestMd5Mechanism

	declare class DigestMd5Mechanism mixins Mechanism {
static Mechanism: typeof DigestMd5Mechanism;
static prototype: {
name: "DIGEST-MD5",
clientFirst: false
};
name: "DIGEST-MD5";
clientFirst: false;
constructor(options?: DigestMd5Mechanism$DigestMd5Mechanism$Options): this;
response(cred: DigestMd5Mechanism$DigestMd5Mechanism$Credentials): string;
challenge(chal: string): this
}
	declare interface DigestMd5Mechanism$Options {
genNonce?: () => number
} 

declare interface DigestMd5Mechanism$Credentials {
serviceType: string,
host: string,
username: string,
password: string,
serviceName?: string,
realm?: string,
authzid?: string
} 
    }
