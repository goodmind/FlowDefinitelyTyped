declare module "js.spec" {
  /**
   * A Spec provides a predicate that can test a value for conformance.
   */
  declare export interface Spec {
    /**
     * The name of the spec, displayed in explain() results.
     */
    +name: string;

    /**
     * Data necessary to check values for conformity.
     */
    +options: { [key: string]: any };

    /**
     * Returns the conformed value to this spec.
     * @param value the value to test for conformance
     * @returns if the value does not conform to the spec, or the value if it does.
     */
    conform(value: any): any;

    /**
     * Explain why a value does not conform to this spec.
     * @param path the path to the value
     * @param via the containing specs, if any
     * @param value the value to examine
     * @returns list of problems or null if none
     */
    explain(path: string[], via: string[], value: any): Problem[];

    /**
     * Describe the specification. Used in explain strings and Problems.
     * @returns the human-readable description of this spec
     */
    toString(): string;
  }

  /**
   * Predicate function definition to describe a predicate function.
   */
  declare export type PredFn = (value: any) => boolean;

  /**
   * Defines an input to a js.spec method. Can be a Spec instance or a predicate function.
   */
  declare export type SpecInput = PredFn | Spec;

  /**
   * An explanation of why a part of a value does not conform to a spec.
   */
  declare export interface Problem {
    /**
     * The path to the value.
     */
    +path: string[];

    /**
     * Pth to he Spec that applies.
     */
    +via: string[];

    /**
     * The value associated with the problem.
     */
    +value: any;

    /**
     * A predicate function to test new values for conformance.
     */
    +spec$predicate: PredFn;
  }

  /**
   * Given a Spec, tests the value for confomrance. If it passes, then returns true.
   * @param spec the spec to test with
   * @param value the value to test
   * @returns true if valid
   */
  declare export function valid(spec: SpecInput, value: any): boolean;

  /**
   * Returns the conformed value to this spec.
   * @param spec the spec to test with
   * @param value the value to test
   * @returns if the value does not conform to the spec, or the conformed value if it does.
   */
  declare export function conform(spec: SpecInput, value: any): any;

  /**
   * Like explain(), but returns Problems array.
   * @param spec the spec to test with
   * @param value the value to test
   * @returns list of problems or null if none
   */
  declare export function explainData(spec: SpecInput, value: any): Problem[];

  /**
   * Prints, to the console, reasons why the value did not conform to this spec.
   * @param spec the spec to test with
   * @param value the value to test
   */
  declare export function explain(spec: SpecInput, value: any): void;

  /**
   * Returns a multiline string with reasons why the value did not conform to this spec.
   * @param spec the spec to test with
   * @param value the value to test
   */
  declare export function explainStr(spec: SpecInput, value: any): string;

  /**
   * Returns a string with the problem statement from the given Problem.
   * @param problem the problem
   */
  declare export function problemStr(problem: Problem): string;

  /**
   * Tests if a value conforms to a spec, and if not, throws an Error.
   * @param spec the spec to test with
   * @param value the value to test
   */
  declare export function assert(spec: SpecInput, value: any): void;

  declare var npm$namespace$symbol: {
    invalid: typeof symbol$invalid,
    count: typeof symbol$count,
    maxCount: typeof symbol$maxCount,
    minCount: typeof symbol$minCount,
    optional: typeof symbol$optional
  };

  /**
   * Returned by conform() to indicate a value does not conform to a spec.
   */
  declare var symbol$invalid: Symbol;

  /**
   * Used as an option in collection() to specify the size of a collection.
   */
  declare var symbol$count: Symbol;

  /**
   * Used as an option in collection() to specify the maximum size of a collection.
   */
  declare var symbol$maxCount: Symbol;

  /**
   * Used as an option in collection() to specify the minimum size of a collection.
   */
  declare var symbol$minCount: Symbol;

  /**
   * Used as an option in map() to specify a key spec that is optional.
   */
  declare var symbol$optional: Symbol;

  declare var npm$namespace$spec: {
    and: typeof spec$and,
    or: typeof spec$or,
    nilable: typeof spec$nilable,
    collection: typeof spec$collection,
    tuple: typeof spec$tuple,
    map: typeof spec$map,
    oneOf: typeof spec$oneOf,
    predicate: typeof spec$predicate,
    int: typeof spec$int,
    integer: typeof spec$integer,
    finite: typeof spec$finite,
    number: typeof spec$number,
    odd: typeof spec$odd,
    even: typeof spec$even,
    positive: typeof spec$positive,
    negative: typeof spec$negative,
    zero: typeof spec$zero,
    str: typeof spec$str,
    string: typeof spec$string,
    fn: typeof spec$fn,
    sym: typeof spec$sym,
    symbol: typeof spec$symbol,
    nil: typeof spec$nil,
    bool: typeof spec$bool,
    boolean: typeof spec$boolean,
    date: typeof spec$date,
    obj: typeof spec$obj,
    object: typeof spec$object,
    array: typeof spec$array,
    set: typeof spec$set,
    coll: typeof spec$coll
  };

  /**
   * Data must conform to every provided spec.
   * @param name the name of the spec
   * @param specs the array of specs that must all match
   * @returns the constructed Spec
   */
  declare function spec$and(name: string, ...specs: SpecInput[]): Spec;

  /**
   * Data must conform to at least one provided spec. The order in which they are validated is not defined.
   * The conform() function returns matched branches along with input data.
   * @param name the name of the spec
   * @param alts map of alternative keys with their respective SpecInputs
   * @returns the constructed Spec
   */
  declare function spec$or(
    name: string,
    alts: {
      [key: string]: SpecInput
    }
  ): Spec;

  /**
   * By default no spec accepts null or undefined as valid input. Wrap your spec in nilable() to change this.
   * @param name the name of the spec
   * @param spec the spec to apply if a value is non-nil
   * @returns the constructed spec
   */
  declare function spec$nilable(name: string, spec: SpecInput): Spec;

  /**
   * Used to define collections with items of the same type. Works with Arrays and Sets.
   * Accepts an option map as optional second parameter.
   * NOTE: the keys in this option map are symbols but Typescript will not allow 'symbol' to be specified
   * as a key type but the TS compiler will allow it.
   * @param name the name of the spec
   * @param spec the spec to apply to values in the collection
   * @param options symbol.count or symbol.minCount / symbol.maxCount
   */
  declare function spec$collection(
    name: string,
    spec: SpecInput,
    options?: {
      [option: string]: number
    }
  ): Spec;

  /**
   * Used to define collections with items of possibly different types. Works only with arrays as order is important.
   * @param name the name of the spec
   * @param specs the specs to test the value array
   * @returns the constructed spec
   */
  declare function spec$tuple(name: string, ...specs: SpecInput[]): Spec;

  /**
   * Used to define the shape of maps. By default all keys are required. Use {symbol.optional} key to define
   * optional keys. Shape map can contain nested key specs.
   * @param name the name of the spec
   * @param shape the shape map with keys and associated specs
   * @returns the constructed spec
   */
  declare function spec$map(name: string, shape: { [key: string]: any }): Spec;

  /**
   * Used to define "one out of these values", like an enum. (It's called oneOf because enum is a reserved word.)
   * @param name the name of the spec
   * @param values the emum of values
   * @returns the constructed spec
   */
  declare function spec$oneOf(name: string, ...values: any[]): Spec;

  /**
   * Used to define a predicate function as a Spec.
   * @param name the name of the spec
   * @param predicate the predicate function
   * @returns the constructed spec
   */
  declare function spec$predicate(name: string, spec$predicate: PredFn): Spec;

  /**
   * Returns true if data is an integer.
   */
  declare var spec$int: PredFn;

  /**
   * Returns true if data is an integer.
   */
  declare var spec$integer: PredFn;

  /**
   * Returns true if data is a finite number.
   */
  declare var spec$finite: PredFn;

  /**
   * Returns true if data is a number (can be double or integer).
   */
  declare var spec$number: PredFn;

  /**
   * Returns true if data is an odd number.
   */
  declare var spec$odd: PredFn;

  /**
   * Returns true if data is an even number.
   */
  declare var spec$even: PredFn;

  /**
   * Returns true if data is a number greater than zero.
   */
  declare var spec$positive: PredFn;

  /**
   * Returns true if data is a number smaller than zero.
   */
  declare var spec$negative: PredFn;

  /**
   * Returns true if data is the number zero.
   * Why: To easily construct specs for >= 0.
   */
  declare var spec$zero: PredFn;

  /**
   * Returns true if data is a string.
   */
  declare var spec$str: PredFn;

  /**
   * Returns true if data is a string.
   */
  declare var spec$string: PredFn;

  /**
   * Returns true if data is a function.
   */
  declare var spec$fn: PredFn;

  /**
   * Returns true if data is a Symbol.
   */
  declare var spec$sym: PredFn;

  /**
   * Returns true if data is a Symbol.
   */
  declare var spec$symbol: PredFn;

  /**
   * Returns true if data is null or undefined.
   */
  declare var spec$nil: PredFn;

  /**
   * Returns true if data is a boolean.
   */
  declare var spec$bool: PredFn;

  /**
   * Returns true if data is a boolean.
   */
  declare var spec$boolean: PredFn;

  /**
   * Returns true if data is a Date.
   */
  declare var spec$date: PredFn;

  /**
   * Returns true if data is a plain object.
   */
  declare var spec$obj: PredFn;

  /**
   * Returns true if data is a plain object.
   */
  declare var spec$object: PredFn;

  /**
   * Returns true if data is an Array.
   */
  declare var spec$array: PredFn;

  /**
   * Returns true if data is a Set.
   */
  declare var spec$set: PredFn;

  /**
   * Returns true if data is an Array or Set.
   */
  declare var spec$coll: PredFn;
}
