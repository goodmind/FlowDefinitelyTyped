declare module "jwt-client" {
  declare interface JWTHeader {
    typ: string;
    alg: string;
  }
  declare interface JWTObject {
    header: JWTHeader;
    claim: any;
    signature: string;
  }

  /**
   * Read a string value (normally an HTTP header)
   * from JSON Web Token to an Object
   */
  declare function read(header: string): JWTObject;

  /**
   * Given a JWT object, stringify it back to
   * its JWT representation.
   */
  declare function write(value: JWTObject): string;

  declare function keep(value: JWTObject, key?: any, storate?: any): void;

  declare function remember(): void;

  declare function forget(): void;

  declare function get(): string;

  declare function validate(
    value: JWTObject,
    issuer?: any,
    audience?: any
  ): boolean;
}
