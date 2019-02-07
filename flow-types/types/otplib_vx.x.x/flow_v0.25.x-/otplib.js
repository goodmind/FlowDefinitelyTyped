declare module "otplib" {
  declare var npm$namespace$authenticator: {
    generateSecret: typeof authenticator$generateSecret,
    generate: typeof authenticator$generate,
    check: typeof authenticator$check,
    verify: typeof authenticator$verify
  };
  declare interface authenticator$VerifyOptions {
    token: string;
    secret: string;
  }

  declare function authenticator$generateSecret(): string;

  declare function authenticator$generate(secret: string): string;

  declare function authenticator$check(token: string, secret: string): boolean;

  declare function authenticator$verify(
    options: authenticator$VerifyOptions
  ): boolean;
}
