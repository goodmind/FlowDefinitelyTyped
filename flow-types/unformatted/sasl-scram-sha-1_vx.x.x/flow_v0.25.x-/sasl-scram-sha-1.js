declare module 'sasl-scram-sha-1' {
        import type {
          Mechanism
        } from 'saslmechanisms';

	declare module.exports: typeof ScramSha1Mechanism

	declare class ScramSha1Mechanism mixins Mechanism {
static Mechanism: typeof ScramSha1Mechanism;
static prototype: {
name: "SCRAM-SHA-1",
clientFirst: true
};
name: "SCRAM-SHA-1";
clientFirst: true;
constructor(options?: ScramSha1Mechanism$ScramSha1Mechanism$Options): this;
response(cred: ScramSha1Mechanism$ScramSha1Mechanism$Credentials): string;
challenge(chal: string): this
}
	declare interface ScramSha1Mechanism$Options {
genNonce?: () => number
} 

declare interface ScramSha1Mechanism$Credentials {
authzid?: string,
username?: string,
password?: string,
salt?: string,
saltedPassword?: string,
clientKey?: string,
serverKey?: string
} 
    }
