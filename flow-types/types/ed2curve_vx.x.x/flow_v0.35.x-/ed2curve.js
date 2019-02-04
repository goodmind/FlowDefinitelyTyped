declare module 'ed2curve' {
        import type {
          BoxKeyPair,SignKeyPair
        } from 'tweetnacl';

	
/**
 * Converts Ed25519 public key to Curve25519 public key.
 * montgomeryX = (edwardsY + 1)*inverse(1 - edwardsY) mod p
 */
declare export function convertPublicKey(
publicKey: $ElementType<SignKeyPair, "publicKey">): $ElementType<BoxKeyPair, "publicKey"> | null

	
/**
 * Converts Ed25519 secret key to Curve25519 secret key.
 */
declare export function convertSecretKey(
secretKey: $ElementType<SignKeyPair, "secretKey">): $ElementType<BoxKeyPair, "secretKey">

	
/**
 * Converts Ed25519 key pair to Curve25519 key pair.
 */
declare export function convertKeyPair(keyPair: SignKeyPair): BoxKeyPair | null

    }
