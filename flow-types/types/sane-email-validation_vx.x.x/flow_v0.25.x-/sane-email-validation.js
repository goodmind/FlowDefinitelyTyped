declare module "sane-email-validation" {
  declare function isEmail(email: string): boolean;

  declare var npm$namespace$isEmail: {
    isNotEmail: typeof isEmail$isNotEmail
  };
  declare function isEmail$isNotEmail(email: string): boolean;

  declare module.exports: typeof isEmail;
}
