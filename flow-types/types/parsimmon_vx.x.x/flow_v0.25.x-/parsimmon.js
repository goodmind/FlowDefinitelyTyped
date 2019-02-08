declare module "parsimmon" {
  /**
   * **NOTE:** You probably will never need to use this function. Most parsing
   * can be accomplished using `Parsimmon.regexp` and combination with
   * `Parsimmon.seq` and `Parsimmon.alt`.
   *
   * You can add a primitive parser (similar to the included ones) by using
   * `Parsimmon(fn)`. This is an example of how to create a parser that matches
   * any character except the one provided:
   *
   * ```javascript
   *  * function notChar(char) {
   *  *   return Parsimmon(function(input, i) {
   *  *     if (input.charAt(i) !== char) {
   *  *       return Parsimmon.makeSuccess(i + 1, input.charAt(i));
   *  *     }
   *  *     return Parsimmon.makeFailure(i, 'anything different than "' + char + '"');
   *  *   });
   *  * }
   *  * ```
   *
   * This parser can then be used and composed the same way all the existing
   * ones are used and composed, for example:
   *
   * ```javascript
   *  * var parser =
   *  *   Parsimmon.seq(
   *  *     Parsimmon.string('a'),
   *  *     notChar('b').times(5)
   *  *   );
   *  * parser.parse('accccc');
   *  * //=> {status: true, value: ['a', ['c', 'c', 'c', 'c', 'c']]}
   *  * ```
   */
  declare function Parsimmon<T>(
    duration$fn: (input: string, i: number) => Parsimmon$Parsimmon$Reply<T>
  ): Parsimmon$Parsimmon$Parser<T>;

  declare var npm$namespace$Parsimmon: {
    Parser: typeof Parsimmon$Parser,
    createLanguage: typeof Parsimmon$createLanguage,
    makeSuccess: typeof Parsimmon$makeSuccess,
    makeFailure: typeof Parsimmon$makeFailure,
    isParser: typeof Parsimmon$isParser,
    string: typeof Parsimmon$string,
    oneOf: typeof Parsimmon$oneOf,
    noneOf: typeof Parsimmon$noneOf,
    range: typeof Parsimmon$range,
    regexp: typeof Parsimmon$regexp,
    regex: typeof Parsimmon$regex,
    notFollowedBy: typeof Parsimmon$notFollowedBy,
    lookahead: typeof Parsimmon$lookahead,
    succeed: typeof Parsimmon$succeed,
    of: typeof Parsimmon$of,
    seq: typeof Parsimmon$seq,
    formatError: typeof Parsimmon$formatError,
    seqMap: typeof Parsimmon$seqMap,
    seqObj: typeof Parsimmon$seqObj,
    custom: typeof Parsimmon$custom,
    alt: typeof Parsimmon$alt,
    sepBy: typeof Parsimmon$sepBy,
    sepBy1: typeof Parsimmon$sepBy1,
    lazy: typeof Parsimmon$lazy,
    fail: typeof Parsimmon$fail,
    empty: typeof Parsimmon$empty,
    test: typeof Parsimmon$test,
    takeWhile: typeof Parsimmon$takeWhile,
    byte: typeof Parsimmon$byte,
    bitSeq: typeof Parsimmon$bitSeq,
    bitSeqObj: typeof Parsimmon$bitSeqObj,
    letter: typeof Parsimmon$letter,
    letters: typeof Parsimmon$letters,
    digit: typeof Parsimmon$digit,
    digits: typeof Parsimmon$digits,
    whitespace: typeof Parsimmon$whitespace,
    optWhitespace: typeof Parsimmon$optWhitespace,
    cr: typeof Parsimmon$cr,
    lf: typeof Parsimmon$lf,
    crlf: typeof Parsimmon$crlf,
    newline: typeof Parsimmon$newline,
    end: typeof Parsimmon$end,
    any: typeof Parsimmon$any,
    all: typeof Parsimmon$all,
    eof: typeof Parsimmon$eof,
    index: typeof Parsimmon$index
  };
  declare type Parsimmon$StreamType = string;

  declare interface Parsimmon$Index {
    /**
     * zero-based character offset
     */
    offset: number;

    /**
     * one-based line offset
     */
    routing$line: number;

    /**
     * one-based column offset
     */
    column: number;
  }

  declare interface Parsimmon$Mark<T> {
    start: Parsimmon$Index;
    end: Parsimmon$Index;
    value: T;
  }

  declare type Parsimmon$Node<Name: string, T> = {
    skin$name: Fields$Name
  } & Parsimmon$Mark<T>;

  declare type Parsimmon$Result<T> = Parsimmon$Success<T> | Parsimmon$Failure;

  declare interface Parsimmon$Success<T> {
    l$status: true;
    value: T;
  }

  declare interface Parsimmon$Failure {
    l$status: false;
    expected: string[];
    index: Parsimmon$Index;
  }

  declare interface Parsimmon$Rule {
    [key: string]: (r: Parsimmon$Language) => Parsimmon$Parser<any>;
  }

  declare interface Parsimmon$Language {
    [key: string]: Parsimmon$Parser<any>;
  }

  declare type Parsimmon$TypedRule<TLanguageSpec> = $ObjMapi<
    TLanguageSpec,
    <P>(
      P
    ) => (
      r: Parsimmon$TypedLanguage<TLanguageSpec>
    ) => Parsimmon$Parser<$ElementType<TLanguageSpec, P>>
  >;

  declare type Parsimmon$TypedLanguage<TLanguageSpec> = $ObjMapi<
    TLanguageSpec,
    <P>(P) => Parsimmon$Parser<$ElementType<TLanguageSpec, P>>
  >;

  declare interface Parsimmon$Parser<T> {
    /**
     * parse the string
     */
    Handlebars$parse(input: string): Parsimmon$Result<T>;

    /**
     * Like parser.parse(input) but either returns the parsed value or throws
     * an error on failure. The error object contains additional properties
     * about the error.
     */
    tryParse(input: string): T;

    /**
     * returns a new parser which tries parser, and if it fails uses otherParser.
     */
    BigNum$or<U>(otherParser: Parsimmon$Parser<U>): Parsimmon$Parser<T | U>;

    /**
     * returns a new parser which tries parser, and on success calls the given function
     * with the result of the parse, which is expected to return another parser, which
     * will be tried next
     */
    chain<U>(next: (result: T) => Parsimmon$Parser<U>): Parsimmon$Parser<U>;

    /**
     * returns a new parser which tries parser, and on success calls the given function
     * with the result of the parse, which is expected to return another parser.
     */
    then<U>(call: (result: T) => Parsimmon$Parser<U>): Parsimmon$Parser<U>;

    /**
     * expects anotherParser to follow parser, and yields the result of anotherParser.
     * NB: the result of parser here is ignored.
     */
    then<U>(anotherParser: Parsimmon$Parser<U>): Parsimmon$Parser<U>;

    /**
     * Transforms the input of parser with the given function.
     */
    contramap<U>(duration$fn: (input: T) => U): Parsimmon$Parser<U>;

    /**
     * Transforms the input and output of parser with the given function.
     */
    promap<U, V>(
      inputFn: (input: T) => U,
      outputFn: (output: U) => V
    ): Parsimmon$Parser<V>;

    /**
     * returns wrapper(this) from the parser. Useful for custom functions used
     * to wrap your parsers, while keeping with Parsimmon chaining style.
     */
    thru<U>(
      call: (wrapper: Parsimmon$Parser<T>) => Parsimmon$Parser<U>
    ): Parsimmon$Parser<U>;

    /**
     * expects anotherParser before and after parser, yielding the result of parser
     */
    Util$trim<U>(anotherParser: Parsimmon$Parser<U>): Parsimmon$Parser<T>;

    /**
     * transforms the output of parser with the given function.
     */
    mapbox$map<U>(call: (result: T) => U): Parsimmon$Parser<U>;

    /**
     * returns a new parser with the same behavior, but which yields aResult.
     */
    result<U>(aResult: U): Parsimmon$Parser<U>;

    /**
     * returns a new parser that returns the fallback value if the first parser failed.
     */
    fallback<U>(fallbackValue: U): Parsimmon$Parser<T | U>;

    /**
     * expects otherParser after parser, but preserves the yield value of parser.
     */
    skip<U>(otherParser: Parsimmon$Parser<U>): Parsimmon$Parser<T>;

    /**
     * Expects the parser before before parser and after after parser.
     */
    colors$wrap(
      before: Parsimmon$Parser<any>,
      after: Parsimmon$Parser<any>
    ): Parsimmon$Parser<T>;

    /**
     * Returns a parser that looks for anything but whatever anotherParser wants to
     * parse, and does not consume it. Yields the same result as parser. Equivalent to
     * parser.skip(Parsimmon.notFollowedBy(anotherParser)).
     */
    Parsimmon$notFollowedBy(
      anotherParser: Parsimmon$Parser<any>
    ): Parsimmon$Parser<T>;

    /**
     * Returns a parser that looks for whatever arg wants to parse, but does not
     * consume it. Yields the same result as parser. Equivalent to
     * parser.skip(Parsimmon.lookahead(anotherParser)).
     */
    Parsimmon$lookahead(
      arg: Parsimmon$Parser<any> | string | core$RegExp
    ): Parsimmon$Parser<T>;

    /**
     * Equivalent to parser.tieWith("").
     *
     * Note: parser.tie() is usually used after Parsimmon.seq(...parsers) or parser.many().
     */
    tie(): Parsimmon$Parser<string>;

    /**
     * When called on a parser yielding an array of strings, yields all their strings
     * concatenated with the separator. Asserts that its input is actually an array of strings.
     */
    tieWith(join: string): Parsimmon$Parser<string>;

    /**
     * expects parser zero or more times, and yields an array of the results.
     */
    many(): Parsimmon$Parser<T[]>;

    /**
     * expects parser exactly n times, and yields an array of the results.
     */
    times(n: number): Parsimmon$Parser<T[]>;

    /**
     * expects parser between min and max times, and yields an array of the results.
     */
    times(min: number, max: number): Parsimmon$Parser<T[]>;

    /**
     * expects parser at most n times. Yields an array of the results.
     */
    atMost(n: number): Parsimmon$Parser<T[]>;

    /**
     * expects parser at least n times. Yields an array of the results.
     */
    atLeast(n: number): Parsimmon$Parser<T[]>;

    /**
     * Yields an object with `start`, `value`, and `end` keys, where `value` is the original
     * value yielded by the parser, and `start` and `end` indicate the `Index` objects representing
     * the range of the parse result.
     */
    mark(): Parsimmon$Parser<Parsimmon$Mark<T>>;

    /**
     * Like `mark()`, but yields an object with an additional `name` key to use as an AST.
     */
    data$node<Name: string>(
      skin$name: Fields$Name
    ): Parsimmon$Parser<Parsimmon$Node<Fields$Name, T>>;

    /**
     * Returns a new parser whose failure message is description.
     * For example, string('x').desc('the letter x') will indicate that 'the letter x' was expected.
     */
    desc(description: string | string[]): Parsimmon$Parser<T>;

    /**
     * Returns Parsimmon.fail("fantasy-land/empty").
     */
    Parsimmon$empty(): Parsimmon$Parser<empty>;

    /**
     * Takes parser which returns a function and applies it to the parsed value of otherParser.
     */
    ap<U>(otherParser: Parsimmon$Parser<(t: T) => U>): Parsimmon$Parser<U>;

    /**
     * Equivalent to Parsimmon.sepBy(parser, separator).
     *
     * Expects zero or more matches for parser, separated by the parser separator, yielding an array.
     */
    Parsimmon$sepBy<U>(separator: Parsimmon$Parser<U>): Parsimmon$Parser<T[]>;

    /**
     * Equivalent to Parsimmon.sepBy(parser, separator).
     *
     * Expects one or more matches for parser, separated by the parser separator, yielding an array.
     */
    Parsimmon$sepBy1<U>(separator: Parsimmon$Parser<U>): Parsimmon$Parser<T[]>;

    /**
     * Equivalent to Parsimmon.of(result).
     */
    Parsimmon$of<U>(result: U): Parsimmon$Parser<U>;
  }

  /**
   * Alias of `Parsimmon(fn)` for backwards compatibility.
   */
  declare function Parsimmon$Parser<T>(
    duration$fn: (input: string, i: number) => Parsimmon$Parsimmon$Reply<T>
  ): Parsimmon$Parser<T>;

  /**
   * Starting point for building a language parser in Parsimmon.
   *
   * For having the resulting language rules return typed parsers, e.g. `Parser<Foo>` instead of
   * `Parser<any>`, pass a language specification as type parameter to this function. The language
   * specification should be of the following form:
   *
   * ```javascript
   * 	 * {
   * 	 *   rule1: type;
   * 	 *   rule2: type;
   * 	 * }
   * 	 * ```
   *
   * For example:
   *
   * ```javascript
   * 	 * const language = Parsimmon.createLanguage<{
   * 	 *   expr: Expr;
   * 	 *   numberLiteral: number;
   * 	 *   stringLiteral: string;
   * 	 * }>({
   * 	 *   expr: r => (some expression that yields Parser<Expr>),
   * 	 *   numberLiteral: r => (some expression that yields Parser<number>),
   * 	 *   stringLiteral: r => (some expression that yields Parser<string>)
   * 	 * });
   * 	 * ```
   *
   * Now both `language` and the parameter `r` that is passed into every parser rule will be of the
   * following type:
   *
   * ```javascript
   * 	 * {
   * 	 *   expr: Parser<Expr>;
   * 	 *   numberLiteral: Parser<number>;
   * 	 *   stringLiteral: Parser<string>;
   * 	 * }
   * 	 * ```
   *
   * Another benefit is that both the `rules` parameter and the resulting `language` should match the
   * properties defined in the language specification type, which means that the compiler checks that
   * there are no missing or superfluous rules in the language definition, and that the rules you access
   * on the resulting language do actually exist.
   */
  declare function Parsimmon$createLanguage(
    CanvasGauges$rules: Parsimmon$Rule
  ): Parsimmon$Language;

  declare function Parsimmon$createLanguage<TLanguageSpec>(
    CanvasGauges$rules: Parsimmon$TypedRule<TLanguageSpec>
  ): Parsimmon$TypedLanguage<TLanguageSpec>;

  /**
   * To be used inside of Parsimmon(fn). Generates an object describing how
   * far the successful parse went (index), and what value it created doing
   * so. See documentation for Parsimmon(fn).
   */
  declare function Parsimmon$makeSuccess<T>(
    index: number,
    value: T
  ): Parsimmon$SuccessReply<T>;

  /**
   * To be used inside of Parsimmon(fn). Generates an object describing how
   * far the unsuccessful parse went (index), and what kind of syntax it
   * expected to see (expectation). See documentation for Parsimmon(fn).
   */
  declare function Parsimmon$makeFailure(
    furthest: number,
    expectation: string | string[]
  ): Parsimmon$FailureReply;

  /**
   * Returns true if obj is a Parsimmon parser, otherwise false.
   */
  declare function Parsimmon$isParser(obj: any): boolean;

  /**
   * is a parser that expects to find "my-string", and will yield the same.
   */
  declare function Parsimmon$string(
    Parsimmon$string: string
  ): Parsimmon$Parser<string>;

  /**
   * Returns a parser that looks for exactly one character from string, and yields that character.
   */
  declare function Parsimmon$oneOf(
    Parsimmon$string: string
  ): Parsimmon$Parser<string>;

  /**
   * Returns a parser that looks for exactly one character NOT from string, and yields that character.
   */
  declare function Parsimmon$noneOf(
    Parsimmon$string: string
  ): Parsimmon$Parser<string>;

  /**
   * Parsers a single character in from begin to end, inclusive.
   */
  declare function Parsimmon$range(
    begin: string,
    end: string
  ): Parsimmon$Parser<string>;

  /**
   * Returns a parser that looks for a match to the regexp and yields the given match group
   * (defaulting to the entire match). The regexp will always match starting at the current
   * parse location. The regexp may only use the following flags: imu. Any other flag will
   * result in an error being thrown.
   */
  declare function Parsimmon$regexp(
    myregex: core$RegExp,
    group?: number
  ): Parsimmon$Parser<string>;

  /**
   * This was the original name for Parsimmon.regexp, but now it is just an alias.
   */
  declare function Parsimmon$regex(
    myregex: core$RegExp,
    group?: number
  ): Parsimmon$Parser<string>;

  /**
   * Parses using parser, but does not consume what it parses. Yields null if the parser
   * does not match the input. Otherwise it fails.
   */
  declare function Parsimmon$notFollowedBy(
    dojo$parser: Parsimmon$Parser<any>
  ): Parsimmon$Parser<null>;

  /**
   * Parses using arg, but does not consume what it parses. Yields an empty string.
   */
  declare function Parsimmon$lookahead(
    arg: Parsimmon$Parser<any> | string | core$RegExp
  ): Parsimmon$Parser<"">;

  /**
   * Returns a parser that doesn't consume any of the string, and yields result.
   */
  declare function Parsimmon$succeed<U>(result: U): Parsimmon$Parser<U>;

  /**
   * This is an alias for Parsimmon.succeed(result).
   */
  declare function Parsimmon$of<U>(result: U): Parsimmon$Parser<U>;

  /**
   * accepts a variable number of parsers that it expects to find in order, yielding an array of the results.
   */
  declare function Parsimmon$seq<T>(
    p1: Parsimmon$Parser<T>
  ): Parsimmon$Parser<[T]>;

  declare function Parsimmon$seq<T, U>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>
  ): Parsimmon$Parser<[T, U]>;

  declare function Parsimmon$seq<T, U, V>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    p3: Parsimmon$Parser<V>
  ): Parsimmon$Parser<[T, U, V]>;

  declare function Parsimmon$seq<T, U, V, W>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    p3: Parsimmon$Parser<V>,
    p4: Parsimmon$Parser<W>
  ): Parsimmon$Parser<[T, U, V, W]>;

  declare function Parsimmon$seq<T, U, V, W, X>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    p3: Parsimmon$Parser<V>,
    p4: Parsimmon$Parser<W>,
    p5: Parsimmon$Parser<X>
  ): Parsimmon$Parser<[T, U, V, W, X]>;

  declare function Parsimmon$seq<T, U, V, W, X, Y>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    p3: Parsimmon$Parser<V>,
    p4: Parsimmon$Parser<W>,
    p5: Parsimmon$Parser<X>,
    p6: Parsimmon$Parser<Y>
  ): Parsimmon$Parser<[T, U, V, W, X, Y]>;

  declare function Parsimmon$seq<T, U, V, W, X, Y, Z>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    p3: Parsimmon$Parser<V>,
    p4: Parsimmon$Parser<W>,
    p5: Parsimmon$Parser<X>,
    p6: Parsimmon$Parser<Y>,
    p7: Parsimmon$Parser<Z>
  ): Parsimmon$Parser<[T, U, V, W, X, Y, Z]>;

  declare function Parsimmon$seq<T>(
    ...parsers: core$Array<Parsimmon$Parser<T>>
  ): Parsimmon$Parser<T[]>;

  declare function Parsimmon$seq(
    ...parsers: core$Array<Parsimmon$Parser<any>>
  ): Parsimmon$Parser<any[]>;

  /**
   * Takes the string passed to parser.parse(string) and the error returned from
   * parser.parse(string) and turns it into a human readable error message string.
   * Note that there are certainly better ways to format errors, so feel free to write your own.
   */
  declare function Parsimmon$formatError<T>(
    Parsimmon$string: string,
    log$error: Parsimmon$Result<T>
  ): string;

  /**
   * Matches all parsers sequentially, and passes their results as the arguments to a function.
   * Similar to calling Parsimmon.seq and then .map, but the values are not put in an array.
   */
  declare function Parsimmon$seqMap<T, U>(
    p1: Parsimmon$Parser<T>,
    cb: (a1: T) => U
  ): Parsimmon$Parser<U>;

  declare function Parsimmon$seqMap<T, U, V>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    cb: (a1: T, a2: U) => V
  ): Parsimmon$Parser<V>;

  declare function Parsimmon$seqMap<T, U, V, W>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    p3: Parsimmon$Parser<V>,
    cb: (a1: T, a2: U, a3: V) => W
  ): Parsimmon$Parser<W>;

  declare function Parsimmon$seqMap<T, U, V, W, X>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    p3: Parsimmon$Parser<V>,
    p4: Parsimmon$Parser<W>,
    cb: (a1: T, a2: U, a3: V, a4: W) => X
  ): Parsimmon$Parser<X>;

  declare function Parsimmon$seqMap<T, U, V, W, X, Y>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    p3: Parsimmon$Parser<V>,
    p4: Parsimmon$Parser<W>,
    p5: Parsimmon$Parser<X>,
    cb: (a1: T, a2: U, a3: V, a4: W, a5: X) => Y
  ): Parsimmon$Parser<Y>;

  declare function Parsimmon$seqMap<T, U, V, W, X, Y, Z>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    p3: Parsimmon$Parser<V>,
    p4: Parsimmon$Parser<W>,
    p5: Parsimmon$Parser<X>,
    p6: Parsimmon$Parser<Y>,
    cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y) => Z
  ): Parsimmon$Parser<Z>;

  declare function Parsimmon$seqMap<T, U, V, W, X, Y, Z, A>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    p3: Parsimmon$Parser<V>,
    p4: Parsimmon$Parser<W>,
    p5: Parsimmon$Parser<X>,
    p6: Parsimmon$Parser<Y>,
    p7: Parsimmon$Parser<Z>,
    cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y, a7: Z) => A
  ): Parsimmon$Parser<A>;

  declare function Parsimmon$seqMap<T, U, V, W, X, Y, Z, A, B>(
    p1: Parsimmon$Parser<T>,
    p2: Parsimmon$Parser<U>,
    p3: Parsimmon$Parser<V>,
    p4: Parsimmon$Parser<W>,
    p5: Parsimmon$Parser<X>,
    p6: Parsimmon$Parser<Y>,
    p7: Parsimmon$Parser<Z>,
    p8: Parsimmon$Parser<A>,
    cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y, a7: Z, a8: A) => B
  ): Parsimmon$Parser<B>;

  declare function Parsimmon$seqObj<T, Key: $Keys<T>>(
    ...args: core$Array<
      | [ed25519$Key, Parsimmon$Parser<$ElementType<T, ed25519$Key>>]
      | Parsimmon$Parser<any>
    >
  ): Parsimmon$Parser<
    $ObjMapi<
      { [k: ed25519$Key]: any },
      <Handlebars$K>(Handlebars$K) => $ElementType<T, Handlebars$K>
    >
  >;

  declare interface Parsimmon$SuccessReply<T> {
    l$status: true;
    index: number;
    value: T;
    furthest: -1;
    expected: string[];
  }

  declare interface Parsimmon$FailureReply {
    l$status: false;
    index: -1;
    value: null;
    furthest: number;
    expected: string[];
  }

  declare type Parsimmon$Reply<T> =
    | Parsimmon$SuccessReply<T>
    | Parsimmon$FailureReply;

  declare type Parsimmon$SuccessFunctionType<U> = (
    index: number,
    result: U
  ) => Parsimmon$Reply<U>;

  declare type Parsimmon$FailureFunctionType<U> = (
    index: number,
    msg: string
  ) => Parsimmon$Reply<U>;

  declare type Parsimmon$ParseFunctionType<U> = (
    stream: Parsimmon$StreamType,
    index: number
  ) => Parsimmon$Reply<U>;

  /**
   * allows to add custom primitive parsers.
   */
  declare function Parsimmon$custom<U>(
    parsingFunction: (
      success: Parsimmon$SuccessFunctionType<U>,
      failure: Parsimmon$FailureFunctionType<U>
    ) => Parsimmon$ParseFunctionType<U>
  ): Parsimmon$Parser<U>;

  /**
   * accepts a variable number of parsers, and yields the value of the first one that succeeds,
   * backtracking in between.
   */
  declare function Parsimmon$alt<U>(
    ...parsers: core$Array<Parsimmon$Parser<U>>
  ): Parsimmon$Parser<U>;

  declare function Parsimmon$alt(
    ...parsers: core$Array<Parsimmon$Parser<any>>
  ): Parsimmon$Parser<any>;

  /**
   * Accepts two parsers, and expects zero or more matches for content, separated by separator, yielding an array.
   */
  declare function Parsimmon$sepBy<T, U>(
    definition$content: Parsimmon$Parser<T>,
    separator: Parsimmon$Parser<U>
  ): Parsimmon$Parser<T[]>;

  /**
   * This is the same as Parsimmon.sepBy, but matches the content parser at least once.
   */
  declare function Parsimmon$sepBy1<T, U>(
    definition$content: Parsimmon$Parser<T>,
    separator: Parsimmon$Parser<U>
  ): Parsimmon$Parser<T[]>;

  /**
   * accepts a function that returns a parser, which is evaluated the first time the parser is used.
   * This is useful for referencing parsers that haven't yet been defined.
   */
  declare function Parsimmon$lazy<U>(
    f: () => Parsimmon$Parser<U>
  ): Parsimmon$Parser<U>;

  declare function Parsimmon$lazy<U>(
    description: string,
    f: () => Parsimmon$Parser<U>
  ): Parsimmon$Parser<U>;

  /**
   * fail paring with a message
   */
  declare function Parsimmon$fail(message: string): Parsimmon$Parser<empty>;

  /**
   * Returns Parsimmon.fail("fantasy-land/empty").
   */
  declare function Parsimmon$empty(): Parsimmon$Parser<empty>;

  /**
   * is equivalent to Parsimmon.regex(/[a-z]/i)
   */
  declare var Parsimmon$letter: Parsimmon$Parser<string>;

  /**
   * is equivalent to Parsimmon.regex(/[a-z]*`/i)
   * 	 *
   */
  declare var Parsimmon$letters: Parsimmon$Parser<string>;

  /**
   * is equivalent to Parsimmon.regex(/[0-9]/)
   */
  declare var Parsimmon$digit: Parsimmon$Parser<string>;

  /**
   * is equivalent to Parsimmon.regex(/[0-9]*`/)
   * 	 *
   */
  declare var Parsimmon$digits: Parsimmon$Parser<string>;

  /**
   * is equivalent to Parsimmon.regex(/\s+/)
   */
  declare var Parsimmon$whitespace: Parsimmon$Parser<string>;

  /**
   * is equivalent to Parsimmon.regex(/\s*`/)
   * 	 *
   */
  declare var Parsimmon$optWhitespace: Parsimmon$Parser<string>;

  /**
   * Equivalent to Parsimmon.string("\r").
   *
   * This parser checks for the "carriage return" character, which is used as the
   * line terminator for classic Mac OS 9 text files.
   */
  declare var Parsimmon$cr: Parsimmon$Parser<string>;

  /**
   * Equivalent to Parsimmon.string("\n").
   *
   * This parser checks for the "line feed" character, which is used as the line
   * terminator for Linux and macOS text files.
   */
  declare var Parsimmon$lf: Parsimmon$Parser<string>;

  /**
   * Equivalent to Parsimmon.string("\r\n").
   *
   * This parser checks for the "carriage return" character followed by the "line
   * feed" character, which is used as the line terminator for Windows text files
   * and HTTP headers.
   */
  declare var Parsimmon$crlf: Parsimmon$Parser<string>;

  /**
   * This flexible parser will match any kind of text file line ending.
   */
  declare var Parsimmon$newline: Parsimmon$Parser<string>;

  /**
   * Equivalent to Parsimmon.alt(Parsimmon.newline, Parsimmon.eof).
   *
   * This is the most general purpose "end of line" parser. It allows the "end of file"
   * in addition to all three text file line endings from Parsimmon.newline. This is
   * important because text files frequently do not have line terminators at the
   * end ("trailing newline").
   */
  declare var Parsimmon$end: Parsimmon$Parser<void | string>;

  /**
   * consumes and yields the next character of the stream.
   */
  declare var Parsimmon$any: Parsimmon$Parser<string>;

  /**
   * consumes and yields the entire remainder of the stream.
   */
  declare var Parsimmon$all: Parsimmon$Parser<string>;

  /**
   * expects the end of the stream.
   */
  declare var Parsimmon$eof: Parsimmon$Parser<void>;

  /**
   * is a parser that yields the current index of the parse.
   */
  declare var Parsimmon$index: Parsimmon$Parser<Parsimmon$Index>;

  /**
   * Returns a parser that yield a single character if it passes the predicate
   */
  declare function Parsimmon$test(
    predicate: (char: string) => boolean
  ): Parsimmon$Parser<string>;

  /**
   * Returns a parser yield a string containing all the next characters that pass the predicate
   */
  declare function Parsimmon$takeWhile(
    predicate: (char: string) => boolean
  ): Parsimmon$Parser<string>;

  /**
   * Returns a parser that yields a byte (as a number) that matches the given input;
   * similar to Parsimmon.digit and Parsimmon.letter.
   */
  declare function Parsimmon$byte(getenv$int: number): Parsimmon$Parser<number>;

  /**
   * Returns a parser that yields a byte (as a number) that matches the given input;
   * similar to Parsimmon.digit and Parsimmon.letter.
   */
  declare function Parsimmon$bitSeq(
    alignments: number[]
  ): Parsimmon$Parser<number[]>;

  /**
   * Works like Parsimmon.bitSeq except each item in the array is either a number of
   * bits or pair (array with length = 2) of name and bits. The bits are parsed in order
   * and put into an object based on the name supplied. If there's no name for the bits,
   * it will be parsed but discarded from the returned value.
   */
  declare function Parsimmon$bitSeqObj<Key: string>(
    namedAlignments: core$Array<[ed25519$Key, number] | number>
  ): Parsimmon$Parser<
    $ObjMapi<{ [k: ed25519$Key]: any }, <Handlebars$K>(Handlebars$K) => number>
  >;

  declare module.exports: typeof Parsimmon;
}
