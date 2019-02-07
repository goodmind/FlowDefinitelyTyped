declare module "gettext.js" {
  declare export type PluralForm = (n: number) => number;
  declare export type GettextStatic = (options?: GettextOptions) => Gettext;
  declare export interface GettextOptions {
    domain?: string;
    locale?: string;
    plural_func?: PluralForm;
    ctxt_delimiter?: string;
  }
  declare export interface JsonDataHeader {
    locale: string;
    "plural-forms": string;
  }
  declare export interface JsonDataMessages {
    [key: string]: string | string[] | JsonDataHeader;
  }
  declare export type JsonData = {
    "": JsonDataHeader
  } & JsonDataMessages;

  declare export interface Gettext {
    setMessages(
      domain: string,
      locale: string,
      messages: JsonDataMessages,
      plural_forms?: PluralForm
    ): Gettext;
    loadJSON(jsonData: JsonData, domain?: string): Gettext;
    setLocale(locale: string): Gettext;
    getLocale(): string;
    textdomain(domain?: string): Gettext | string;
    gettext(msgid: string, ...args: any[]): string;
    ngettext(
      msgid: string,
      msgid_plural: string,
      n: number,
      ...args: any[]
    ): string;
    pgettext(msgctxt: string, msgid: string, ...args: any[]): string;
    dcnpgettext(
      domain: string,
      msgctxt: string,
      msgid: string,
      msgid_plural: string,
      n: number,
      ...args: any[]
    ): string;
    __(msgid: string, ...args: any[]): string;
    _n(msgid: string, msgid_plural: string, n: number, ...args: any[]): string;
    _p(msgctxt: string, msgid: string, ...args: any[]): string;
  }
  declare export var i18n: GettextStatic;
}
