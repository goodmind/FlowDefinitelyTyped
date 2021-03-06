declare module "voca" {
  declare var v: v$v$VocaStatic;
  declare module.exports: typeof v;

  declare type v$CountPredicate = (
    character: string,
    index: number,
    str: string
  ) => boolean;

  declare type v$ReplacementFunction = (
    match?: string,
    ...groups: string[]
  ) => string;

  declare interface v$WordWrapOptions {
    width?: number;
    newLine?: string;
    indent?: string;
    cut?: boolean;
  }

  declare interface v$VocaStatic {
    camelCase(subject?: string): string;
    capitalize(subject?: string, restToLower?: boolean): string;
    decapitalize(subject?: string): string;
    kebabCase(subject?: string): string;
    lowerCase(subject?: string): string;
    snakeCase(subject?: string): string;
    swapCase(subject?: string): string;
    titleCase(subject?: string, ignoreWords?: string[]): string;
    upperCase(subject?: string): string;
    (subject: any): v$Chain;
    chain<T>(subject: T): v$ExplicitChain<T>;
    charAt(subject?: string, position?: number): string;
    codePointAt(subject?: string, position?: number): string;
    first(subject?: string, length?: number): string;
    graphemeAt(subject?: string, position?: number): string;
    last(subject?: string, length?: number): string;
    prune(subject?: string, length?: number, end?: string): string;
    slice(subject?: string, start?: number, end?: number): string;
    substr(subject?: string, start?: number, length?: number): string;
    substring(subject?: string, start?: number, end?: number): string;
    truncate(subject?: string, length?: number, end?: string): string;
    count(subject?: string): number;
    countGraphemes(subject?: string): number;
    countSubstrings(subject?: string, substring?: string): number;
    countWhere(
      subject?: string,
      predicate?: v$CountPredicate,
      context?: any
    ): number;
    countWords(
      subject?: string,
      pattern?: string | RegExp,
      flags?: string
    ): number;
    escapeHtml(subject?: string): string;
    escapeRegExp(subject?: string): string;
    unescapeHtml(subject?: string): string;
    sprintf(format?: string, ...replacements: any[]): string;
    vprintf(format?: string, ...replacements: any[]): string;
    indexOf(subject?: string, search?: string, fromIndex?: number): number;
    lastIndexOf(subject?: string, search?: string, fromIndex?: number): number;
    search(
      subject?: string,
      pattern?: string | RegExp,
      fromIndex?: number
    ): number;
    insert(subject?: string, toInsert?: string, position?: number): string;
    latinise(subject?: string): string;
    pad(subject?: string, length?: number, pad?: string): string;
    padLeft(subject?: string, length?: number, pad?: string): string;
    padRight(subject?: string, length?: number, pad?: string): string;
    repeat(subject?: string, times?: number): string;
    replace(
      subject?: string,
      pattern?: string | RegExp,
      replacement?: string | v$ReplacementFunction
    ): string;
    replaceAll(
      subject?: string,
      pattern?: string | RegExp,
      replacement?: string | v$ReplacementFunction
    ): string;
    reverse(subject?: string): string;
    reverseGrapheme(subject?: string): string;
    slugify(subject?: string): string;
    splice(
      subject?: string,
      start?: number,
      deleteCount?: number,
      toAdd?: string
    ): string;
    tr(subject?: string, from?: string, to?: string): string;
    tr(
      subject?: string,
      from?: {
        [key: string]: string
      }
    ): string;
    trim(subject?: string, whitespace?: string): string;
    trimLeft(subject?: string, whitespace?: string): string;
    trimRight(subject?: string, whitespace?: string): string;
    wordWrap(subject?: string, options?: v$WordWrapOptions): string;
    endsWith(subject?: string, end?: string, position?: number): boolean;
    includes(subject?: string, search?: string, position?: number): boolean;
    isAlpha(subject?: string): boolean;
    isAlphaDigit(subject?: string): boolean;
    isBlank(subject?: string): boolean;
    isDigit(subject?: string): boolean;
    isEmpty(subject?: string): boolean;
    isLowerCase(subject?: string): boolean;
    isNumeric(subject?: string): boolean;
    isString(subject?: any): boolean;
    isUpperCase(subject?: string): boolean;
    matches(
      subject?: string,
      pattern?: string | RegExp,
      flags?: string
    ): boolean;
    startsWith(subject?: string, start?: string, position?: number): boolean;
    chars(subject?: string): string[];
    codePoints(subject?: string): number[];
    graphemes(subject?: string): string[];
    split(
      subject?: string,
      separator?: string | RegExp,
      limit?: number
    ): string[];
    words(subject?: string, pattern?: string | RegExp, flag?: string): string[];
    stripBom(subject?: string): string;
    stripTags(
      subject?: string,
      allowbleTags?: string | string[],
      replacement?: string
    ): string;
    noConflict(): v$VocaStatic;
    version: string;
  }

  declare interface v$Chain {
    camelCase(): v$Chain;
    capitalize(restToLoweropt?: boolean): v$Chain;
    decapitalize(): v$Chain;
    kebabCase(): v$Chain;
    lowerCase(): v$Chain;
    snakeCase(): v$Chain;
    swapCase(): v$Chain;
    titleCase(ignoreWordsopt?: string[]): v$Chain;
    upperCase(): v$Chain;
    value(): string;
    chain(): v$ExplicitChain<string>;
    charAt(position?: number): v$Chain;
    codePointAt(position?: number): v$Chain;
    first(length?: number): v$Chain;
    graphemeAt(position?: number): v$Chain;
    last(length?: number): v$Chain;
    prune(length?: number, end?: string): v$Chain;
    slice(start?: number, end?: number): v$Chain;
    substr(start?: number, length?: number): v$Chain;
    substring(start?: number, end?: number): v$Chain;
    truncate(length?: number, end?: string): v$Chain;
    count(): number;
    countGraphemes(): number;
    countSubstrings(substring?: string): number;
    countWhere(predicate?: v$CountPredicate, context?: any): number;
    countWords(pattern?: string | RegExp, flags?: string): number;
    escapeHtml(): v$Chain;
    escapeRegExp(): v$Chain;
    unescapeHtml(): v$Chain;
    sprintf(...replacements: any[]): v$Chain;
    vprintf(...replacements: any[]): v$Chain;
    indexOf(search?: string, fromIndex?: number): number;
    lastIndexOf(search?: string, fromIndex?: number): number;
    search(pattern?: string | RegExp, fromIndex?: number): number;
    insert(toInsert?: string, position?: number): v$Chain;
    latinise(): v$Chain;
    pad(length?: number, pad?: string): v$Chain;
    padLeft(length?: number, pad?: string): v$Chain;
    padRight(length?: number, pad?: string): v$Chain;
    repeat(times?: number): v$Chain;
    replace(
      pattern?: string | RegExp,
      replacement?: string | v$ReplacementFunction
    ): v$Chain;
    replaceAll(
      pattern?: string | RegExp,
      replacement?: string | v$ReplacementFunction
    ): v$Chain;
    reverse(): v$Chain;
    reverseGrapheme(): v$Chain;
    slugify(): v$Chain;
    splice(start?: number, deleteCount?: number, toAdd?: string): v$Chain;
    tr(from?: string, to?: string): v$Chain;
    tr(from?: {
      [key: string]: string
    }): v$Chain;
    trim(whitespace?: string): v$Chain;
    trimLeft(whitespace?: string): v$Chain;
    trimRight(whitespace?: string): v$Chain;
    wordWrap(options?: v$WordWrapOptions): v$Chain;
    endsWith(end?: string, position?: number): boolean;
    includes(search?: string, position?: number): boolean;
    isAlpha(): boolean;
    isAlphaDigit(): boolean;
    isBlank(): boolean;
    isDigit(): boolean;
    isEmpty(): boolean;
    isLowerCase(): boolean;
    isNumeric(): boolean;
    isString(): boolean;
    isUpperCase(): boolean;
    matches(pattern?: string | RegExp, flags?: string): boolean;
    startsWith(start?: string, position?: number): boolean;
    chars(): string[];
    codePoints(): number[];
    graphemes(): string[];
    split(separator?: string | RegExp, limit?: number): string[];
    words(pattern?: string | RegExp, flag?: string): string[];
    stripBom(): v$Chain;
    stripTags(allowbleTags?: string | string[], replacement?: string): v$Chain;
  }

  declare interface v$ExplicitChain<T> {
    camelCase(): v$ExplicitChain<string>;
    capitalize(restToLoweropt?: boolean): v$ExplicitChain<string>;
    decapitalize(): v$ExplicitChain<string>;
    kebabCase(): v$ExplicitChain<string>;
    lowerCase(): v$ExplicitChain<string>;
    snakeCase(): v$ExplicitChain<string>;
    swapCase(): v$ExplicitChain<string>;
    titleCase(ignoreWordsopt?: string[]): v$ExplicitChain<string>;
    upperCase(): v$ExplicitChain<string>;
    value(): T;
    thru<U>(changer: (subjects: T) => U): v$ExplicitChain<U>;
    charAt(position?: number): v$ExplicitChain<string>;
    codePointAt(position?: number): v$ExplicitChain<string>;
    first(length?: number): v$ExplicitChain<string>;
    graphemeAt(position?: number): v$ExplicitChain<string>;
    last(length?: number): v$ExplicitChain<string>;
    prune(length?: number, end?: string): v$ExplicitChain<string>;
    slice(start?: number, end?: number): v$ExplicitChain<string>;
    substr(start?: number, length?: number): v$ExplicitChain<string>;
    substring(start?: number, end?: number): v$ExplicitChain<string>;
    truncate(length?: number, end?: string): v$ExplicitChain<string>;
    count(): v$ExplicitChain<number>;
    countGraphemes(): v$ExplicitChain<number>;
    countSubstrings(substring?: string): v$ExplicitChain<number>;
    countWhere(
      predicate?: v$CountPredicate,
      context?: any
    ): v$ExplicitChain<number>;
    countWords(
      pattern?: string | RegExp,
      flags?: string
    ): v$ExplicitChain<number>;
    escapeHtml(): v$ExplicitChain<string>;
    escapeRegExp(): v$ExplicitChain<string>;
    unescapeHtml(): v$ExplicitChain<string>;
    sprintf(...replacements: any[]): v$ExplicitChain<string>;
    vprintf(...replacements: any[]): v$ExplicitChain<string>;
    indexOf(search?: string, fromIndex?: number): v$ExplicitChain<number>;
    lastIndexOf(search?: string, fromIndex?: number): v$ExplicitChain<number>;
    search(
      pattern?: string | RegExp,
      fromIndex?: number
    ): v$ExplicitChain<number>;
    insert(toInsert?: string, position?: number): v$ExplicitChain<string>;
    latinise(): v$ExplicitChain<string>;
    pad(length?: number, pad?: string): v$ExplicitChain<string>;
    padLeft(length?: number, pad?: string): v$ExplicitChain<string>;
    padRight(length?: number, pad?: string): v$ExplicitChain<string>;
    repeat(times?: number): v$ExplicitChain<string>;
    replace(
      pattern?: string | RegExp,
      replacement?: string | v$ReplacementFunction
    ): v$ExplicitChain<string>;
    replaceAll(
      pattern?: string | RegExp,
      replacement?: string | v$ReplacementFunction
    ): v$ExplicitChain<string>;
    reverse(): v$ExplicitChain<string>;
    reverseGrapheme(): v$ExplicitChain<string>;
    slugify(): v$ExplicitChain<string>;
    splice(
      start?: number,
      deleteCount?: number,
      toAdd?: string
    ): v$ExplicitChain<string>;
    tr(from?: string, to?: string): v$ExplicitChain<string>;
    tr(from?: {
      [key: string]: string
    }): v$ExplicitChain<string>;
    trim(whitespace?: string): v$ExplicitChain<string>;
    trimLeft(whitespace?: string): v$ExplicitChain<string>;
    trimRight(whitespace?: string): v$ExplicitChain<string>;
    wordWrap(options?: v$WordWrapOptions): v$ExplicitChain<string>;
    endsWith(end?: string, position?: number): v$ExplicitChain<boolean>;
    includes(search?: string, position?: number): v$ExplicitChain<boolean>;
    isAlpha(): v$ExplicitChain<boolean>;
    isAlphaDigit(): v$ExplicitChain<boolean>;
    isBlank(): v$ExplicitChain<boolean>;
    isDigit(): v$ExplicitChain<boolean>;
    isEmpty(): v$ExplicitChain<boolean>;
    isLowerCase(): v$ExplicitChain<boolean>;
    isNumeric(): v$ExplicitChain<boolean>;
    isString(): v$ExplicitChain<boolean>;
    isUpperCase(): v$ExplicitChain<boolean>;
    matches(
      pattern?: string | RegExp,
      flags?: string
    ): v$ExplicitChain<boolean>;
    startsWith(start?: string, position?: number): v$ExplicitChain<boolean>;
    chars(): v$ExplicitChain<string[]>;
    codePoints(): v$ExplicitChain<number[]>;
    graphemes(): v$ExplicitChain<string[]>;
    split(
      separator?: string | RegExp,
      limit?: number
    ): v$ExplicitChain<string[]>;
    words(pattern?: string | RegExp, flag?: string): v$ExplicitChain<string[]>;
    stripBom(): v$ExplicitChain<string>;
    stripTags(
      allowbleTags?: string | string[],
      replacement?: string
    ): v$ExplicitChain<string>;
  }
}
