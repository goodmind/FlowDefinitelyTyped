declare module "xregexp" {
  declare function OuterXRegExp(pattern: string, flags?: string): RegExp;

  declare function OuterXRegExp(pattern: RegExp): RegExp;

  declare var npm$namespace$OuterXRegExp: {
    XRegExp: typeof OuterXRegExp$XRegExp,
    addToken: typeof OuterXRegExp$addToken,
    build: typeof OuterXRegExp$build,
    cache: typeof OuterXRegExp$cache,
    escape: typeof OuterXRegExp$escape,
    exec: typeof OuterXRegExp$exec,
    forEach: typeof OuterXRegExp$forEach,
    globalize: typeof OuterXRegExp$globalize,
    install: typeof OuterXRegExp$install,
    isInstalled: typeof OuterXRegExp$isInstalled,
    isRegExp: typeof OuterXRegExp$isRegExp,
    match: typeof OuterXRegExp$match,
    matchChain: typeof OuterXRegExp$matchChain,
    matchRecursive: typeof OuterXRegExp$matchRecursive,
    replace: typeof OuterXRegExp$replace,
    replaceEach: typeof OuterXRegExp$replaceEach,
    split: typeof OuterXRegExp$split,
    test: typeof OuterXRegExp$test,
    uninstall: typeof OuterXRegExp$uninstall,
    union: typeof OuterXRegExp$union,
    version: typeof OuterXRegExp$version,

    XRegExp: typeof npm$namespace$OuterXRegExp$XRegExp
  };
  declare interface OuterXRegExp$TokenOpts {
    scope?: string;
    trigger?: () => boolean;
    customFlags?: string;
  }

  declare function OuterXRegExp$XRegExp(
    pattern: string,
    flags?: string
  ): RegExp;

  declare function OuterXRegExp$XRegExp(pattern: RegExp): RegExp;

  declare function OuterXRegExp$addToken(
    regex: RegExp,
    handler: (matchArr: RegExpExecArray, scope: string) => string,
    options?: OuterXRegExp$TokenOpts
  ): void;

  declare function OuterXRegExp$build(
    pattern: string,
    subs: string[],
    flags?: string
  ): RegExp;

  declare function OuterXRegExp$cache(pattern: string, flags?: string): RegExp;

  declare function OuterXRegExp$escape(str: string): string;

  declare function OuterXRegExp$exec(
    str: string,
    regex: RegExp,
    pos?: number,
    sticky?: boolean
  ): RegExpExecArray;

  declare function OuterXRegExp$forEach(
    str: string,
    regex: RegExp,
    callback: (
      matchArr: RegExpExecArray,
      index: number,
      input: string,
      regexp: RegExp
    ) => void
  ): any;

  declare function OuterXRegExp$globalize(regex: RegExp): RegExp;

  declare function OuterXRegExp$install(options: string): void;

  declare function OuterXRegExp$install(options: Object): void;

  declare function OuterXRegExp$isInstalled(feature: string): boolean;

  declare function OuterXRegExp$isRegExp(value: any): boolean;

  declare function OuterXRegExp$match(
    str: string,
    regex: RegExp,
    scope: string
  ): any;

  declare function OuterXRegExp$match(
    str: string,
    regex: RegExp,
    scope: "one"
  ): string;

  declare function OuterXRegExp$match(
    str: string,
    regex: RegExp,
    scope: "all"
  ): string[];

  declare function OuterXRegExp$match(str: string, regex: RegExp): string[];

  declare function OuterXRegExp$matchChain(
    str: string,
    chain: RegExp[]
  ): string[];

  declare function OuterXRegExp$matchChain(
    str: string,
    chain: {
      regex: RegExp,
      backref: string
    }[]
  ): string[];

  declare function OuterXRegExp$matchChain(
    str: string,
    chain: {
      regex: RegExp,
      backref: number
    }[]
  ): string[];

  declare function OuterXRegExp$matchRecursive(
    str: string,
    left: string,
    right: string,
    flags?: string,
    options?: Object
  ): string[];

  declare function OuterXRegExp$replace(
    str: string,
    search: string,
    replacement: string,
    scope?: string
  ): string;

  declare function OuterXRegExp$replace(
    str: string,
    search: string,
    replacement: Function,
    scope?: string
  ): string;

  declare function OuterXRegExp$replace(
    str: string,
    search: RegExp,
    replacement: string,
    scope?: string
  ): string;

  declare function OuterXRegExp$replace(
    str: string,
    search: RegExp,
    replacement: Function,
    scope?: string
  ): string;

  declare function OuterXRegExp$replaceEach(
    str: string,
    replacements: Array<RegExp | string>[]
  ): string;

  declare function OuterXRegExp$split(
    str: string,
    separator: string,
    limit?: number
  ): string[];

  declare function OuterXRegExp$split(
    str: string,
    separator: RegExp,
    limit?: number
  ): string[];

  declare function OuterXRegExp$test(
    str: string,
    regex: RegExp,
    pos?: number,
    sticky?: boolean
  ): boolean;

  declare function OuterXRegExp$uninstall(options: Object): void;

  declare function OuterXRegExp$uninstall(options: string): void;

  declare function OuterXRegExp$union(
    patterns: (string | RegExp)[],
    flags?: string
  ): RegExp;

  declare var OuterXRegExp$version: string;

  declare var npm$namespace$OuterXRegExp$XRegExp: {
    addToken: typeof OuterXRegExp$XRegExp$addToken,
    build: typeof OuterXRegExp$XRegExp$build,
    cache: typeof OuterXRegExp$XRegExp$cache,
    escape: typeof OuterXRegExp$XRegExp$escape,
    exec: typeof OuterXRegExp$XRegExp$exec,
    forEach: typeof OuterXRegExp$XRegExp$forEach,
    globalize: typeof OuterXRegExp$XRegExp$globalize,
    install: typeof OuterXRegExp$XRegExp$install,
    isInstalled: typeof OuterXRegExp$XRegExp$isInstalled,
    isRegExp: typeof OuterXRegExp$XRegExp$isRegExp,
    match: typeof OuterXRegExp$XRegExp$match,
    matchChain: typeof OuterXRegExp$XRegExp$matchChain,
    matchRecursive: typeof OuterXRegExp$XRegExp$matchRecursive,
    replace: typeof OuterXRegExp$XRegExp$replace,
    replaceEach: typeof OuterXRegExp$XRegExp$replaceEach,
    split: typeof OuterXRegExp$XRegExp$split,
    test: typeof OuterXRegExp$XRegExp$test,
    uninstall: typeof OuterXRegExp$XRegExp$uninstall,
    union: typeof OuterXRegExp$XRegExp$union,
    version: typeof OuterXRegExp$XRegExp$version
  };
  declare function OuterXRegExp$XRegExp$addToken(
    regex: RegExp,
    handler: (matchArr: RegExpExecArray, scope: string) => string,
    options?: OuterXRegExp$TokenOpts
  ): void;

  declare function OuterXRegExp$XRegExp$build(
    pattern: string,
    subs: string[],
    flags?: string
  ): RegExp;

  declare function OuterXRegExp$XRegExp$cache(
    pattern: string,
    flags?: string
  ): RegExp;

  declare function OuterXRegExp$XRegExp$escape(str: string): string;

  declare function OuterXRegExp$XRegExp$exec(
    str: string,
    regex: RegExp,
    pos?: number,
    sticky?: boolean
  ): RegExpExecArray;

  declare function OuterXRegExp$XRegExp$forEach(
    str: string,
    regex: RegExp,
    callback: (
      matchArr: RegExpExecArray,
      index: number,
      input: string,
      regexp: RegExp
    ) => void
  ): any;

  declare function OuterXRegExp$XRegExp$globalize(regex: RegExp): RegExp;

  declare function OuterXRegExp$XRegExp$install(options: string): void;

  declare function OuterXRegExp$XRegExp$install(options: Object): void;

  declare function OuterXRegExp$XRegExp$isInstalled(feature: string): boolean;

  declare function OuterXRegExp$XRegExp$isRegExp(value: any): boolean;

  declare function OuterXRegExp$XRegExp$match(
    str: string,
    regex: RegExp,
    scope: string
  ): any;

  declare function OuterXRegExp$XRegExp$match(
    str: string,
    regex: RegExp,
    scope: "one"
  ): string;

  declare function OuterXRegExp$XRegExp$match(
    str: string,
    regex: RegExp,
    scope: "all"
  ): string[];

  declare function OuterXRegExp$XRegExp$match(
    str: string,
    regex: RegExp
  ): string[];

  declare function OuterXRegExp$XRegExp$matchChain(
    str: string,
    chain: RegExp[]
  ): string[];

  declare function OuterXRegExp$XRegExp$matchChain(
    str: string,
    chain: {
      regex: RegExp,
      backref: string
    }[]
  ): string[];

  declare function OuterXRegExp$XRegExp$matchChain(
    str: string,
    chain: {
      regex: RegExp,
      backref: number
    }[]
  ): string[];

  declare function OuterXRegExp$XRegExp$matchRecursive(
    str: string,
    left: string,
    right: string,
    flags?: string,
    options?: Object
  ): string[];

  declare function OuterXRegExp$XRegExp$replace(
    str: string,
    search: string,
    replacement: string,
    scope?: string
  ): string;

  declare function OuterXRegExp$XRegExp$replace(
    str: string,
    search: string,
    replacement: Function,
    scope?: string
  ): string;

  declare function OuterXRegExp$XRegExp$replace(
    str: string,
    search: RegExp,
    replacement: string,
    scope?: string
  ): string;

  declare function OuterXRegExp$XRegExp$replace(
    str: string,
    search: RegExp,
    replacement: Function,
    scope?: string
  ): string;

  declare function OuterXRegExp$XRegExp$replaceEach(
    str: string,
    replacements: Array<RegExp | string>[]
  ): string;

  declare function OuterXRegExp$XRegExp$split(
    str: string,
    separator: string,
    limit?: number
  ): string[];

  declare function OuterXRegExp$XRegExp$split(
    str: string,
    separator: RegExp,
    limit?: number
  ): string[];

  declare function OuterXRegExp$XRegExp$test(
    str: string,
    regex: RegExp,
    pos?: number,
    sticky?: boolean
  ): boolean;

  declare function OuterXRegExp$XRegExp$uninstall(options: Object): void;

  declare function OuterXRegExp$XRegExp$uninstall(options: string): void;

  declare function OuterXRegExp$XRegExp$union(
    patterns: (string | RegExp)[],
    flags?: string
  ): RegExp;

  declare var OuterXRegExp$XRegExp$version: string;
  declare export default typeof OuterXRegExp;
}
