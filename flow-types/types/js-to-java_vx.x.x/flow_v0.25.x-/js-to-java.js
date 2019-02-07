declare module "js-to-java" {
  declare interface Currency {
    currencyCode: string;
    [k: string]: any;
  }

  declare var npm$namespace$java: {
    combine: typeof java$combine,
    array: typeof java$array,
    Boolean: typeof java$Boolean,
    boolean: typeof java$boolean,
    Integer: typeof java$Integer,
    int: typeof java$int,
    short: typeof java$short,
    Short: typeof java$Short,
    byte: typeof java$byte,
    Byte: typeof java$Byte,
    long: typeof java$long,
    Long: typeof java$Long,
    double: typeof java$double,
    Double: typeof java$Double,
    float: typeof java$float,
    Float: typeof java$Float,
    char: typeof java$char,
    chars: typeof java$chars,
    String: typeof java$String,
    Character: typeof java$Character,
    List: typeof java$List,
    Set: typeof java$Set,
    Iterator: typeof java$Iterator,
    HashMap: typeof java$HashMap,
    Map: typeof java$Map,
    Enumeration: typeof java$Enumeration,
    Dictionary: typeof java$Dictionary,
    abstract: typeof java$abstract,
    Class: typeof java$Class,
    Locale: typeof java$Locale,
    BigDecimal: typeof java$BigDecimal,
    Currency: typeof java$Currency,
    revert: typeof java$revert,
    exception: typeof java$exception
  };
  declare function java$combine(
    className: string,
    value: any
  ): { [key: string]: any };

  declare function java$array(
    className: string,
    value: any[]
  ): { [key: string]: any };

  declare function java$Boolean(value: boolean): { [key: string]: any };

  declare function java$boolean(value: boolean): { [key: string]: any };

  declare function java$Integer(value: number): { [key: string]: any };

  declare function java$int(value: number): { [key: string]: any };

  declare function java$short(value: number): { [key: string]: any };

  declare function java$Short(value: number): { [key: string]: any };

  declare function java$byte(value: number): { [key: string]: any };

  declare function java$Byte(value: number): { [key: string]: any };

  declare function java$long(value: number): { [key: string]: any };

  declare function java$Long(value: number): { [key: string]: any };

  declare function java$double(value: number): { [key: string]: any };

  declare function java$Double(value: number): { [key: string]: any };

  declare function java$float(value: number): { [key: string]: any };

  declare function java$Float(value: number): { [key: string]: any };

  declare function java$char(value: string): { [key: string]: any };

  declare function java$chars(value: string): { [key: string]: any };

  declare function java$String(value: string): { [key: string]: any };

  declare function java$Character(value: string): { [key: string]: any };

  declare function java$List<T>(value: T[]): { [key: string]: any };

  declare function java$Set(value: { [key: string]: any }): {
    [key: string]: any
  };

  declare function java$Iterator(value: { [key: string]: any }): {
    [key: string]: any
  };

  declare function java$HashMap(value: { [key: string]: any }): {
    [key: string]: any
  };

  declare function java$Map(value: { [key: string]: any }): {
    [key: string]: any
  };

  declare function java$Enumeration(value: { [key: string]: any }): {
    [key: string]: any
  };

  declare function java$Dictionary(value: { [key: string]: any }): {
    [key: string]: any
  };

  declare var npm$namespace$array: {
    Boolean: typeof array$Boolean,
    boolean: typeof array$boolean,
    Integer: typeof array$Integer,
    int: typeof array$int,
    short: typeof array$short,
    Short: typeof array$Short,
    byte: typeof array$byte,
    Byte: typeof array$Byte,
    long: typeof array$long,
    Long: typeof array$Long,
    double: typeof array$double,
    Double: typeof array$Double,
    float: typeof array$float,
    Float: typeof array$Float,
    char: typeof array$char,
    chars: typeof array$chars,
    String: typeof array$String,
    Character: typeof array$Character,
    List: typeof array$List,
    Set: typeof array$Set,
    Iterator: typeof array$Iterator,
    HashMap: typeof array$HashMap,
    Map: typeof array$Map,
    Enumeration: typeof array$Enumeration,
    Dictionary: typeof array$Dictionary,
    Class: typeof array$Class,
    Locale: typeof array$Locale,
    BigDecimal: typeof array$BigDecimal,
    Currency: typeof array$Currency
  };
  declare function array$Boolean(value: boolean[]): { [key: string]: any };

  declare function array$boolean(value: boolean[]): { [key: string]: any };

  declare function array$Integer(value: number[]): { [key: string]: any };

  declare function array$int(value: number[]): { [key: string]: any };

  declare function array$short(value: number[]): { [key: string]: any };

  declare function array$Short(value: number[]): { [key: string]: any };

  declare function array$byte(value: number[]): { [key: string]: any };

  declare function array$Byte(value: number[]): { [key: string]: any };

  declare function array$long(value: number[]): { [key: string]: any };

  declare function array$Long(value: number[]): { [key: string]: any };

  declare function array$double(value: number[]): { [key: string]: any };

  declare function array$Double(value: number[]): { [key: string]: any };

  declare function array$float(value: number[]): { [key: string]: any };

  declare function array$Float(value: number[]): { [key: string]: any };

  declare function array$char(value: string[]): { [key: string]: any };

  declare function array$chars(value: string[]): { [key: string]: any };

  declare function array$String(value: string[]): { [key: string]: any };

  declare function array$Character(value: string[]): { [key: string]: any };

  declare function array$List<T>(value: T[]): { [key: string]: any };

  declare function array$Set(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function array$Iterator(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function array$HashMap(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function array$Map(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function array$Enumeration(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function array$Dictionary(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function array$Class(className: string[]): { [key: string]: any };

  declare function array$Locale(
    locale: string[],
    handle: string
  ): { [key: string]: any };

  declare function array$BigDecimal(val: string[]): { [key: string]: any };

  declare function array$Currency(
    value: null[] | string[] | array$Currency[]
  ): { [key: string]: any };

  declare function java$abstract(
    abstractClassName: string,
    className: string,
    value: any
  ): { [key: string]: any };

  declare function java$Class(className: string): { [key: string]: any };

  declare function java$Locale(
    locale: string,
    handle: string
  ): { [key: string]: any };

  declare function java$BigDecimal(val: string): { [key: string]: any };

  declare function java$Currency(
    value: null | string | java$Currency
  ): { [key: string]: any };

  declare function java$revert(javaObject: { [key: string]: any }): any;

  declare function java$exception(
    error: Error,
    className: string
  ): { [key: string]: any };

  declare function java(className: string, value: any): { [key: string]: any };

  declare module.exports: typeof java;
}
