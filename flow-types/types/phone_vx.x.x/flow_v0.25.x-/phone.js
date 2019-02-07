declare module "phone" {
  declare function phone(
    phoneNumber: string,
    countryCode?: string
  ): Array<string>;

  declare module.exports: typeof phone;
}
