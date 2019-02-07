declare module "binary-parser" {
  declare export interface Parser<O: { [key: string]: any } | void = void> {
    parse(
      buffer: Buffer,
      callback?: (err?: Error, result?: any) => void
    ): Parser$Parser$Parsed<O>;
    create(constructorFunction: ObjectConstructor): Parser;
    int8<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    uint8<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    int16<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    uint16<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    int16le<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    int16be<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    uint16le<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    uint16be<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    int32<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    uint32<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    int32le<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    int32be<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    uint32le<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    uint32be<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit1<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit2<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit3<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit4<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit5<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit6<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit7<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit8<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit9<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit10<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit11<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit12<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit13<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit14<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit15<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit16<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit17<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit18<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit19<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit20<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit21<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit22<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit23<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit24<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit25<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit26<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit27<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit28<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit29<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit30<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit31<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    bit32<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    float<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    floatle<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    floatbe<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    double<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    doublele<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    doublebe<N: string>(
      name: N,
      options?: Parser$Parser$Options
    ): Parser$Parser$Next<O, N, number>;
    string<N: string>(
      name: N,
      options?: Parser$Parser$StringOptions
    ): Parser$Parser$Next<O, N, string>;
    buffer<N: string>(
      name: N,
      options: Parser$Parser$BufferOptions
    ): Parser$Parser$Next<O, N, Buffer>;
    array<N: string, Q: Parser$Parser$ArrayOptions>(
      name: N,
      options: Q
    ): Parser$Parser$Next<
      O,
      N,
      "There was Conditional Type, use $Call utility type"
    >;
    choice<N: string, Q: Parser$Parser$ChoiceOptions>(
      name: N,
      options: Q
    ): Parser$Parser$Next<
      O,
      N,
      "There was Conditional Type, use $Call utility type"
    >;
    nest<N: string, Q: Parser$Parser$NestOptions>(
      name: N,
      options: Q
    ): Parser$Parser$Next<
      O,
      N,
      "There was Conditional Type, use $Call utility type"
    >;
    skip(length: number): Parser<O>;
    endianess(endianess: Parser$Parser$Endianness): Parser<O>;
    namely(alias: string): Parser<O>;
    compile(): void;
    getCode(): string;
  }
  declare export interface ParserConstructor {
    new(): Parser;
  }
  declare export var Parser: ParserConstructor;
  declare type Parser$Data =
    | number
    | string
    | Array<number | Parser<any>>
    | Parser<any>
    | Buffer;

  declare type Parser$Parsed<O: { [key: string]: any } | void> =
    "There was Conditional Type, use $Call utility type";

  declare interface Parser$Options {
    formatter?: (value: Parser$Data) => any;
    assert?: string | number | ((value: Parser$Data) => boolean);
  }

  declare type Parser$StringOptions = {
    encoding?: string,
    length?: number | string | (() => number),
    zeroTerminated?: boolean,
    greedy?: boolean,
    stripNull?: boolean
  } & Parser$Options;

  declare type Parser$BufferOptions = {
    clone?: boolean,
    length?: number | string | (() => number),
    readUntil?: string | ((item: number, buffer: Buffer) => boolean)
  } & Parser$Options;

  declare type Parser$ArrayOptions = {
    type: string | Parser<any>,
    length?: number | string | (() => number),
    lengthInBytes?: number | string | (() => number),
    readUntil?: string | ((item: number, buffer: Buffer) => boolean)
  } & Parser$Options;

  declare type Parser$ChoiceOptions = {
    tag: string | (() => number),
    choices: {
      [item: number]: Parser<any> | string
    },
    defaultChoice?: Parser<any> | string
  } & Parser$Options;

  declare type Parser$NestOptions = {
    type: Parser<any>
  } & Parser$Options;

  declare type Parser$Endianness = "little" | "big";

  declare type Parser$Valid<
    O: { [key: string]: any } | void,
    P: { [key: string]: any }
  > = "There was Conditional Type, use $Call utility type";

  declare type Parser$Next<
    O: { [key: string]: any } | void,
    N: string,
    T: any
  > = Parser<Parser$Valid<O, $ObjMapi<{ [k: N]: any }, <name>(name) => T>>>;
}
