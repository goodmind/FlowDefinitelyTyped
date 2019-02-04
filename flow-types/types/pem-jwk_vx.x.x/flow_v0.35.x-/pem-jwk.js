declare module 'pem-jwk' {
        declare export interface RSA_JWK {
kty: string,
n: string,
e: string,
d?: string,
p?: string,
q?: string,
dp?: string,
dq?: string,
qi?: string
} 
	declare export function pem2jwk(rsa_pem: string): RSA_JWK

	declare export function jwk2pem(rsa_jwk: RSA_JWK): string

    }
