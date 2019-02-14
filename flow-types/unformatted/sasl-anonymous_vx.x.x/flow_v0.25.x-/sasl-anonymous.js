declare module 'sasl-anonymous' {
        import type {
          Mechanism
        } from 'saslmechanisms';

	declare export default typeof AnonymousMechanism

	declare class AnonymousMechanism mixins Mechanism {
static Mechanism: typeof AnonymousMechanism;
static prototype: {
name: "ANONYMOUS",
clientFirst: true
};
name: "ANONYMOUS";
clientFirst: true;
response(cred: AnonymousMechanism$Credentials): string;
challenge(chal: string): void
}
	declare interface AnonymousMechanism$Credentials {
trace?: string
} 
    }
