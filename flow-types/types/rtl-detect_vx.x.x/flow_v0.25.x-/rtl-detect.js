declare module "rtl-detect" {
  declare export function getLangDir(strLocale: string): "ltr" | "rtl";

  declare export function isRtlLang(strLocale: string): boolean | void;
}
