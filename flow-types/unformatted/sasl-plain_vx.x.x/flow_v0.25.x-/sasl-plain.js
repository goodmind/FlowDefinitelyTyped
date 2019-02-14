declare module 'sasl-plain' {
        import type {
          Mechanism
        } from 'saslmechanisms';

	declare export default typeof PlainMechanism

	declare class PlainMechanism mixins Mechanism {
static Mechanism: typeof PlainMechanism;
static prototype: {
name: "PLAIN",
clientFirst: true
};
name: "PLAIN";
clientFirst: true;
response(cred: PlainMechanism$Credentials): string;
challenge(chal: string): this
}
	declare interface PlainMechanism$Credentials {
authzid?: string,
username: string,
password: string
} 
    }
