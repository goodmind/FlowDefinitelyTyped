declare module "date-utils" {
  declare type LanguageType = "es" | "fr" | "pt-BR";
  declare function language(lang: LanguageType): string;

  declare export default typeof language;
}
