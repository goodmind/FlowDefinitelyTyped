declare module "node-gettext" {
  declare module.exports: typeof GetText;

  declare class GetText {
    constructor(options?: {
      debug: boolean
    }): this;
    addTranslations(
      locale: string,
      domain: string,
      translations: { [key: string]: any }
    ): void;
    dgettext(domain: string, msgid: string): string;
    dngettext(
      domain: string,
      msgid: string,
      msgidPlural: string,
      count: number
    ): string;
    dnpgettext(
      domain: string,
      msgctxt: string,
      msgid: string,
      msgidPlural: string,
      count: number
    ): string;
    dpgettext(domain: string, msgctxt: string, msgid: string): string;
    emit(eventName: string, eventData: any): void;
    getComment(
      domain: string,
      msgctxt: string,
      msgid: string
    ): { [key: string]: any } | boolean;
    gettext(msgid: string): string;
    ngettext(msgid: string, msgidPlural: string, count: number): string;
    npgettext(
      msgctxt: string,
      msgid: string,
      msgidPlural: string,
      count: number
    ): string;
    off(eventName: string, callback: (params: any) => void): string;
    on(eventName: string, callback: (params: any) => void): void;
    pgettext(msgctxt: string, msgid: string): string;
    setLocale(locale: string): void;
    setTextDomain(domain: string): void;
    static getLanguageCode(locale: string): string;
    textdomain(domain: string): void;
    warn(message: string): void;
  }
}
