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
    exception: typeof java$exception,

    array: typeof npm$namespace$java$array
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

  declare var npm$namespace$java$array: {
    Boolean: typeof java$array$Boolean,
    boolean: typeof java$array$boolean,
    Integer: typeof java$array$Integer,
    int: typeof java$array$int,
    short: typeof java$array$short,
    Short: typeof java$array$Short,
    byte: typeof java$array$byte,
    Byte: typeof java$array$Byte,
    long: typeof java$array$long,
    Long: typeof java$array$Long,
    double: typeof java$array$double,
    Double: typeof java$array$Double,
    float: typeof java$array$float,
    Float: typeof java$array$Float,
    char: typeof java$array$char,
    chars: typeof java$array$chars,
    String: typeof java$array$String,
    Character: typeof java$array$Character,
    List: typeof java$array$List,
    Set: typeof java$array$Set,
    Iterator: typeof java$array$Iterator,
    HashMap: typeof java$array$HashMap,
    Map: typeof java$array$Map,
    Enumeration: typeof java$array$Enumeration,
    Dictionary: typeof java$array$Dictionary,
    Class: typeof java$array$Class,
    Locale: typeof java$array$Locale,
    BigDecimal: typeof java$array$BigDecimal,
    Currency: typeof java$array$Currency
  };
  declare function java$array$Boolean(value: boolean[]): { [key: string]: any };

  declare function java$array$boolean(value: boolean[]): { [key: string]: any };

  declare function java$array$Integer(value: number[]): { [key: string]: any };

  declare function java$array$int(value: number[]): { [key: string]: any };

  declare function java$array$short(value: number[]): { [key: string]: any };

  declare function java$array$Short(value: number[]): { [key: string]: any };

  declare function java$array$byte(value: number[]): { [key: string]: any };

  declare function java$array$Byte(value: number[]): { [key: string]: any };

  declare function java$array$long(value: number[]): { [key: string]: any };

  declare function java$array$Long(value: number[]): { [key: string]: any };

  declare function java$array$double(value: number[]): { [key: string]: any };

  declare function java$array$Double(value: number[]): { [key: string]: any };

  declare function java$array$float(value: number[]): { [key: string]: any };

  declare function java$array$Float(value: number[]): { [key: string]: any };

  declare function java$array$char(value: string[]): { [key: string]: any };

  declare function java$array$chars(value: string[]): { [key: string]: any };

  declare function java$array$String(value: string[]): { [key: string]: any };

  declare function java$array$Character(
    value: string[]
  ): { [key: string]: any };

  declare function java$array$List<T>(value: T[]): { [key: string]: any };

  declare function java$array$Set(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function java$array$Iterator(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function java$array$HashMap(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function java$array$Map(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function java$array$Enumeration(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function java$array$Dictionary(
    value: { [key: string]: any }[]
  ): { [key: string]: any };

  declare function java$array$Class(
    className: string[]
  ): { [key: string]: any };

  declare function java$array$Locale(
    locale: string[],
    handle: string
  ): { [key: string]: any };

  declare function java$array$BigDecimal(val: string[]): { [key: string]: any };

  declare function java$array$Currency(
    value: null[] | string[] | java$array$Currency[]
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

  declare export default typeof java;
}
