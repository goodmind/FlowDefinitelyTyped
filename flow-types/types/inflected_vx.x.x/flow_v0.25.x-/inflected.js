declare module "inflected" {
  declare interface Options$Humanize {
    capitalize: boolean;
  }

  declare interface Options$Transliterate {
    locale: string;
    replacement: string;
  }

  declare interface Options$Parameterize {
    separator: string;
  }
  declare interface Inflected {
    pluralize(word: string, locale?: string): string;
    singularize(word: string, locale?: string): string;
    camelize(term: string, uppercaseFirstLetter?: boolean): string;
    underscore(camelCaseWord: string): string;
    humanize(
      lowerCaseAndUnderscoredWord: string,
      options?: Options$Options$Humanize
    ): string;
    titleize(sentence: string): string;
    tableize(className: string): string;
    classify(tableName: string): string;
    dasherize(underscoredWord: string): string;
    foreignKey(
      className: string,
      separateClassNameAndIdWithUnderscore?: boolean
    ): string;
    ordinal(number: number): string;
    ordinalize(number: number): string;
    transliterate(
      sentence: string,
      options?: Options$Options$Transliterate
    ): string;
    parameterize(
      sentence: string,
      options?: Options$Options$Parameterize
    ): string;
  }
  declare var Inflector: Inflected;
  declare module.exports: typeof Inflector;
}
