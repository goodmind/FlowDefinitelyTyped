declare interface ExternalMechanism$Credentials {
authzid?: string
} declare module 'sasl-external' {
        import type {
          Mechanism
        } from 'saslmechanisms';

	declare export default typeof ExternalMechanism

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
    }
