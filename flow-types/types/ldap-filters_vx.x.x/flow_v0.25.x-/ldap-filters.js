declare module "ldap-filters" {
  declare interface Filter {
    toString(indent?: boolean | number): string;
    simplify(): Filter;
    match(data: { [key: string]: any }): boolean;
  }

  declare var npm$namespace$Filter: {
    escape: typeof Filter$escape,
    unescape: typeof Filter$unescape,
    parse: typeof Filter$parse,
    matchString: typeof Filter$matchString,
    matchSubstring: typeof Filter$matchSubstring,
    matchApprox: typeof Filter$matchApprox,
    matchGTE: typeof Filter$matchGTE,
    matchLTE: typeof Filter$matchLTE,
    attribute: typeof Filter$attribute,
    AND: typeof Filter$AND,
    OR: typeof Filter$OR,
    NOT: typeof Filter$NOT,
    escape_chars: typeof Filter$escape_chars,
    indent: typeof Filter$indent,
    indent_char: typeof Filter$indent_char,
    collapse_not: typeof Filter$collapse_not
  };
  declare var Filter$escape_chars: string[];

  declare var Filter$indent: number;

  declare var Filter$indent_char: string;

  declare var Filter$collapse_not: boolean;

  declare function Filter$escape(value: string): string;

  declare function Filter$unescape(value: string): string;

  declare function Filter$parse(input: string): Filter;

  declare function Filter$matchString(
    data: string | string[],
    filter: Filter
  ): boolean;

  declare function Filter$matchSubstring(
    data: string | string[],
    filter: Filter
  ): boolean;

  declare function Filter$matchApprox(
    data: string | string[],
    filter: Filter
  ): boolean;

  declare function Filter$matchGTE(
    data: string | string[],
    filter: Filter
  ): boolean;

  declare function Filter$matchLTE(
    data: string | string[],
    filter: Filter
  ): boolean;

  declare function Filter$attribute(name: string): Filter$Attribute;

  declare function Filter$AND(filters: Filter[]): Filter$Group;

  declare function Filter$OR(filters: Filter[]): Filter$Group;

  declare function Filter$NOT(filter: Filter): Filter$GroupNot;

  declare interface Filter$Group {
    type: string;
    comp: string;
    filters: Filter[];
    toString(Filter$indent?: boolean | number): string;
    match(data: { [key: string]: any }): boolean;
  }

  declare type Filter$GroupNot = {
    simplify(): Filter
  } & Filter$Group;

  declare interface Filter$Attribute {
    name: string;
    escapeChars: string[];
    Filter$escape(value: string): string;
    present(): Filter;
    raw(value: string): Filter;
    equalTo(value: string): Filter;
    endsWith(value: string): Filter;
    startsWith(value: string): Filter;
    contains(value: string): Filter;
    approx(value: string): Filter;
    lte(value: string): Filter;
    gte(value: string): Filter;
  }
  declare module.exports: typeof Filter;
}
