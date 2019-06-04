declare module "dkim-signer" {
  import typeof * as crypto from "crypto";

  declare export interface DKIMSignOptions {
    /**
     * Header fields to sign (ie: 'from:to:cc:subject')
     */
    headerFieldNames?: string;

    /**
     * DKIM private key
     */
    privateKey: crypto.SignPrivateKeyInput | crypto.KeyLike;

    /**
     * Domain name to use for signing (ie: 'domain.com')
     */
    domainName: string;

    /**
     * Selector for the DKMI public key (ie. 'dkim' if you have set up a TXT record for 'dkim._domainkey.domain.com')
     */
    keySelector: string;
  }

  /**
   * Sign an email with provided DKIM key, uses RSA-SHA256.
   */
  declare export function DKIMSign(
    email: Buffer | string,
    options: DKIMSignOptions
  ): string;

  /**
   * Generates a DKIM-Signature header field without the signature part ('b=' is empty)
   */
  declare export function generateDKIMHeader(
    domainName: string,
    keySelector: string,
    headerFieldNames: string,
    headers: string,
    body: string
  ): string;

  /**
   * Generates a SHA-256 hash
   */
  declare export function sha256(
    str: string,
    encoding?: crypto.HexBase64Latin1Encoding
  ): string;

  declare var DKIMCanonicalizer: typeof npm$namespace$DKIMCanonicalizer;

  declare var npm$namespace$DKIMCanonicalizer: {
    simpleBody: typeof DKIMCanonicalizer$simpleBody,
    relaxedBody: typeof DKIMCanonicalizer$relaxedBody,
    relaxedHeaders: typeof DKIMCanonicalizer$relaxedHeaders,
    relaxedHeaderLine: typeof DKIMCanonicalizer$relaxedHeaderLine
  };

  /**
   * Simple body canonicalization by rfc4871 #3.4.3
   */
  declare function DKIMCanonicalizer$simpleBody(body: string): string;

  /**
   * Relaxed body canonicalization by rfc4871 #3.4.4
   */
  declare function DKIMCanonicalizer$relaxedBody(body: string): string;

  /**
   * Relaxed headers canonicalization by rfc4871 #3.4.2 with filtering
   */
  declare function DKIMCanonicalizer$relaxedHeaders(
    headers: string,
    fieldNames?: string
  ): {
    headers: string,
    fieldNames: string
  };

  /**
   * Relaxed header canonicalization for single header line
   */
  declare function DKIMCanonicalizer$relaxedHeaderLine(
    line: string
  ): {
    key: string,
    value: string
  };
}
