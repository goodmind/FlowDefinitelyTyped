declare module "intl-locales-supported" {
  declare module.exports: typeof areIntlLocalesSupported;

  declare function areIntlLocalesSupported(locales: string | string[]): boolean;
}
