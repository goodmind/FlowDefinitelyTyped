declare module 'sasl-external' {
        import type {
          Mechanism
        } from 'saslmechanisms';

	declare module.exports: typeof ExternalMechanism

	declare class ExternalMechanism mixins Mechanism {
static Mechanism: typeof ExternalMechanism;
static prototype: {
name: "EXTERNAL",
clientFirst: true
};
name: "EXTERNAL";
clientFirst: true;
response(cred: ExternalMechanism$ExternalMechanism$Credentials): string;
challenge(chal: string): void
}
	declare interface ExternalMechanism$Credentials {
authzid?: string
} 
    }
