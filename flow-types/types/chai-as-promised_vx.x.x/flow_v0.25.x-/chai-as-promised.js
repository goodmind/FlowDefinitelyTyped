declare module "chai-as-promised" {
  declare function chaiAsPromised(chai: any, utils: any): void;

  declare var npm$namespace$chaiAsPromised: {
    transferPromiseness: typeof chaiAsPromised$transferPromiseness,
    transformAsserterArgs: typeof chaiAsPromised$transformAsserterArgs
  };
  declare function chaiAsPromised$transferPromiseness(
    assertion: Chai$PromisedAssertion,
    promise: PromiseLike<any>
  ): void;

  declare function chaiAsPromised$transformAsserterArgs(values: any[]): any;

  declare export default typeof chaiAsPromised;
}
declare type Chai$Assertion = {
  eventually: Chai$PromisedAssertion,
  become(expected: any): Chai$PromisedAssertion,
  fulfilled: Chai$PromisedAssertion,
  rejected: Chai$PromisedAssertion,
  rejectedWith: Chai$PromisedThrow,
  notify(fn: Function): Chai$PromisedAssertion
} & LanguageChains &
  NumericComparison &
  TypeComparison;

declare type Chai$Eventually = {
  become(expected: any): Chai$PromisedAssertion,
  fulfilled: Chai$PromisedAssertion,
  rejected: Chai$PromisedAssertion,
  rejectedWith: Chai$PromisedThrow,
  notify(fn: Function): Chai$PromisedAssertion,
  not: Chai$PromisedAssertion,
  deep: Chai$PromisedDeep,
  ordered: Chai$PromisedOrdered,
  nested: Chai$PromisedNested,
  any: Chai$PromisedKeyFilter,
  all: Chai$PromisedKeyFilter,
  a: Chai$PromisedTypeComparison,
  an: Chai$PromisedTypeComparison,
  include: Chai$PromisedInclude,
  contain: Chai$PromisedInclude,
  ok: Chai$PromisedAssertion,
  true: Chai$PromisedAssertion,
  false: Chai$PromisedAssertion,
  null: Chai$PromisedAssertion,
  undefined: Chai$PromisedAssertion,
  NaN: Chai$PromisedAssertion,
  exist: Chai$PromisedAssertion,
  empty: Chai$PromisedAssertion,
  arguments: Chai$PromisedAssertion,
  Arguments: Chai$PromisedAssertion,
  equal: Chai$PromisedEqual,
  equals: Chai$PromisedEqual,
  eq: Chai$PromisedEqual,
  eql: Chai$PromisedEqual,
  eqls: Chai$PromisedEqual,
  property: Chai$PromisedProperty,
  ownProperty: Chai$PromisedOwnProperty,
  haveOwnProperty: Chai$PromisedOwnProperty,
  ownPropertyDescriptor: Chai$PromisedOwnPropertyDescriptor,
  haveOwnPropertyDescriptor: Chai$PromisedOwnPropertyDescriptor,
  length: Chai$PromisedLength,
  lengthOf: Chai$PromisedLength,
  match: Chai$PromisedMatch,
  matches: Chai$PromisedMatch,
  string(string: string, message?: string): Chai$PromisedAssertion,
  keys: Chai$PromisedKeys,
  key(string: string): Chai$PromisedAssertion,
  throw: Chai$PromisedThrow,
  throws: Chai$PromisedThrow,
  Throw: Chai$PromisedThrow,
  respondTo: Chai$PromisedRespondTo,
  respondsTo: Chai$PromisedRespondTo,
  itself: Chai$PromisedAssertion,
  satisfy: Chai$PromisedSatisfy,
  satisfies: Chai$PromisedSatisfy,
  closeTo: Chai$PromisedCloseTo,
  approximately: Chai$PromisedCloseTo,
  members: Chai$PromisedMembers,
  increase: Chai$PromisedPropertyChange,
  increases: Chai$PromisedPropertyChange,
  decrease: Chai$PromisedPropertyChange,
  decreases: Chai$PromisedPropertyChange,
  change: Chai$PromisedPropertyChange,
  changes: Chai$PromisedPropertyChange,
  extensible: Chai$PromisedAssertion,
  sealed: Chai$PromisedAssertion,
  frozen: Chai$PromisedAssertion,
  oneOf(list: any[], message?: string): Chai$PromisedAssertion
} & PromisedLanguageChains &
  PromisedNumericComparison &
  PromisedTypeComparison;

declare type Chai$PromisedAssertion = {} & Eventually & PromiseLike<any>;

declare interface Chai$PromisedLanguageChains {
  eventually: Chai$Eventually;
  to: Chai$PromisedAssertion;
  be: Chai$PromisedAssertion;
  been: Chai$PromisedAssertion;
  is: Chai$PromisedAssertion;
  that: Chai$PromisedAssertion;
  which: Chai$PromisedAssertion;
  and: Chai$PromisedAssertion;
  has: Chai$PromisedAssertion;
  have: Chai$PromisedAssertion;
  with: Chai$PromisedAssertion;
  at: Chai$PromisedAssertion;
  of: Chai$PromisedAssertion;
  same: Chai$PromisedAssertion;
  but: Chai$PromisedAssertion;
  does: Chai$PromisedAssertion;
}

declare interface Chai$PromisedNumericComparison {
  above: Chai$PromisedNumberComparer;
  gt: Chai$PromisedNumberComparer;
  greaterThan: Chai$PromisedNumberComparer;
  least: Chai$PromisedNumberComparer;
  gte: Chai$PromisedNumberComparer;
  below: Chai$PromisedNumberComparer;
  lt: Chai$PromisedNumberComparer;
  lessThan: Chai$PromisedNumberComparer;
  most: Chai$PromisedNumberComparer;
  lte: Chai$PromisedNumberComparer;
  within(
    start: number,
    finish: number,
    message?: string
  ): Chai$PromisedAssertion;
}

declare interface Chai$PromisedNumberComparer {
  (value: number, message?: string): Chai$PromisedAssertion;
}

declare interface Chai$PromisedTypeComparison {
  (type: string, message?: string): Chai$PromisedAssertion;
  instanceof: Chai$PromisedInstanceOf;
  instanceOf: Chai$PromisedInstanceOf;
}

declare interface Chai$PromisedInstanceOf {
  (constructor: Object, message?: string): Chai$PromisedAssertion;
}

declare interface Chai$PromisedCloseTo {
  (expected: number, delta: number, message?: string): Chai$PromisedAssertion;
}

declare interface Chai$PromisedNested {
  include: Chai$PromisedInclude;
  property: Chai$PromisedProperty;
  members: Chai$PromisedMembers;
}

declare interface Chai$PromisedDeep {
  equal: Chai$PromisedEqual;
  equals: Chai$PromisedEqual;
  eq: Chai$PromisedEqual;
  include: Chai$PromisedInclude;
  property: Chai$PromisedProperty;
  members: Chai$PromisedMembers;
  ordered: Chai$PromisedOrdered;
}

declare interface Chai$PromisedOrdered {
  members: Chai$PromisedMembers;
}

declare interface Chai$PromisedKeyFilter {
  keys: Chai$PromisedKeys;
}

declare interface Chai$PromisedEqual {
  (value: any, message?: string): Chai$PromisedAssertion;
}

declare interface Chai$PromisedProperty {
  (name: string, value?: any, message?: string): Chai$PromisedAssertion;
}

declare interface Chai$PromisedOwnProperty {
  (name: string, message?: string): Chai$PromisedAssertion;
}

declare interface Chai$PromisedOwnPropertyDescriptor {
  (
    name: string,
    descriptor: PropertyDescriptor,
    message?: string
  ): Chai$PromisedAssertion;
  (name: string, message?: string): Chai$PromisedAssertion;
}

declare type Chai$PromisedLength = {
  (length: number, message?: string): Chai$PromisedAssertion
} & PromisedLanguageChains &
  PromisedNumericComparison;

declare interface Chai$PromisedInclude {
  (value: Object, message?: string): Chai$PromisedAssertion;
  (value: string, message?: string): Chai$PromisedAssertion;
  (value: number, message?: string): Chai$PromisedAssertion;
  keys: Chai$PromisedKeys;
  deep: Chai$PromisedDeep;
  ordered: Chai$PromisedOrdered;
  members: Chai$PromisedMembers;
  any: Chai$PromisedKeyFilter;
  all: Chai$PromisedKeyFilter;
}

declare interface Chai$PromisedMatch {
  (regexp: RegExp | string, message?: string): Chai$PromisedAssertion;
}

declare interface Chai$PromisedKeys {
  (...keys: string[]): Chai$PromisedAssertion;
  (keys: any[]): Chai$PromisedAssertion;
  (keys: Object): Chai$PromisedAssertion;
}

declare interface Chai$PromisedThrow {
  (): Chai$PromisedAssertion;
  (expected: string, message?: string): Chai$PromisedAssertion;
  (expected: RegExp, message?: string): Chai$PromisedAssertion;
  (
    constructor: Error,
    expected?: string,
    message?: string
  ): Chai$PromisedAssertion;
  (
    constructor: Error,
    expected?: RegExp,
    message?: string
  ): Chai$PromisedAssertion;
  (
    constructor: Function,
    expected?: string,
    message?: string
  ): Chai$PromisedAssertion;
  (
    constructor: Function,
    expected?: RegExp,
    message?: string
  ): Chai$PromisedAssertion;
}

declare interface Chai$PromisedRespondTo {
  (method: string, message?: string): Chai$PromisedAssertion;
}

declare interface Chai$PromisedSatisfy {
  (matcher: Function, message?: string): Chai$PromisedAssertion;
}

declare interface Chai$PromisedMembers {
  (set: any[], message?: string): Chai$PromisedAssertion;
}

declare interface Chai$PromisedPropertyChange {
  (object: Object, property: string, message?: string): Chai$PromisedAssertion;
}

declare interface Chai$Assert {
  eventually: Chai$PromisedAssert;
  isFulfilled(promise: PromiseLike<any>, message?: string): PromiseLike<void>;
  becomes(
    promise: PromiseLike<any>,
    expected: any,
    message?: string
  ): PromiseLike<void>;
  doesNotBecome(
    promise: PromiseLike<any>,
    expected: any,
    message?: string
  ): PromiseLike<void>;
  isRejected(promise: PromiseLike<any>, message?: string): PromiseLike<void>;
  isRejected(
    promise: PromiseLike<any>,
    expected: any,
    message?: string
  ): PromiseLike<void>;
  isRejected(
    promise: PromiseLike<any>,
    match: RegExp,
    message?: string
  ): PromiseLike<void>;
  notify(fn: Function): PromiseLike<void>;
}

export interface Chai$PromisedAssert {
  fail(
    actual?: any,
    expected?: any,
    msg?: string,
    operator?: string
  ): PromiseLike<void>;
  isOk(val: any, msg?: string): PromiseLike<void>;
  ok(val: any, msg?: string): PromiseLike<void>;
  isNotOk(val: any, msg?: string): PromiseLike<void>;
  notOk(val: any, msg?: string): PromiseLike<void>;
  equal(act: any, exp: any, msg?: string): PromiseLike<void>;
  notEqual(act: any, exp: any, msg?: string): PromiseLike<void>;
  strictEqual(act: any, exp: any, msg?: string): PromiseLike<void>;
  notStrictEqual(act: any, exp: any, msg?: string): PromiseLike<void>;
  deepEqual(act: any, exp: any, msg?: string): PromiseLike<void>;
  notDeepEqual(act: any, exp: any, msg?: string): PromiseLike<void>;
  isAbove(val: number, above: number, msg?: string): PromiseLike<void>;
  isAtLeast(val: number, atLeast: number, msg?: string): PromiseLike<void>;
  isAtBelow(val: number, below: number, msg?: string): PromiseLike<void>;
  isAtMost(val: number, atMost: number, msg?: string): PromiseLike<void>;
  isTrue(val: any, msg?: string): PromiseLike<void>;
  isFalse(val: any, msg?: string): PromiseLike<void>;
  isNotTrue(val: any, msg?: string): PromiseLike<void>;
  isNotFalse(val: any, msg?: string): PromiseLike<void>;
  isNull(val: any, msg?: string): PromiseLike<void>;
  isNotNull(val: any, msg?: string): PromiseLike<void>;
  isNaN(val: any, msg?: string): PromiseLike<void>;
  isNotNaN(val: any, msg?: string): PromiseLike<void>;
  exists(val: any, msg?: string): PromiseLike<void>;
  notExists(val: any, msg?: string): PromiseLike<void>;
  isUndefined(val: any, msg?: string): PromiseLike<void>;
  isDefined(val: any, msg?: string): PromiseLike<void>;
  isFunction(val: any, msg?: string): PromiseLike<void>;
  isNotFunction(val: any, msg?: string): PromiseLike<void>;
  isObject(val: any, msg?: string): PromiseLike<void>;
  isNotObject(val: any, msg?: string): PromiseLike<void>;
  isArray(val: any, msg?: string): PromiseLike<void>;
  isNotArray(val: any, msg?: string): PromiseLike<void>;
  isString(val: any, msg?: string): PromiseLike<void>;
  isNotString(val: any, msg?: string): PromiseLike<void>;
  isNumber(val: any, msg?: string): PromiseLike<void>;
  isNotNumber(val: any, msg?: string): PromiseLike<void>;
  isBoolean(val: any, msg?: string): PromiseLike<void>;
  isNotBoolean(val: any, msg?: string): PromiseLike<void>;
  typeOf(val: any, type: string, msg?: string): PromiseLike<void>;
  notTypeOf(val: any, type: string, msg?: string): PromiseLike<void>;
  instanceOf(val: any, type: Function, msg?: string): PromiseLike<void>;
  notInstanceOf(val: any, type: Function, msg?: string): PromiseLike<void>;
  include(exp: string, inc: any, msg?: string): PromiseLike<void>;
  include(exp: any[], inc: any, msg?: string): PromiseLike<void>;
  notInclude(exp: string, inc: any, msg?: string): PromiseLike<void>;
  notInclude(exp: any[], inc: any, msg?: string): PromiseLike<void>;
  match(exp: any, re: RegExp, msg?: string): PromiseLike<void>;
  notMatch(exp: any, re: RegExp, msg?: string): PromiseLike<void>;
  property(obj: Object, prop: string, msg?: string): PromiseLike<void>;
  notProperty(obj: Object, prop: string, msg?: string): PromiseLike<void>;
  deepProperty(obj: Object, prop: string, msg?: string): PromiseLike<void>;
  notDeepProperty(obj: Object, prop: string, msg?: string): PromiseLike<void>;
  propertyVal(
    obj: Object,
    prop: string,
    val: any,
    msg?: string
  ): PromiseLike<void>;
  propertyNotVal(
    obj: Object,
    prop: string,
    val: any,
    msg?: string
  ): PromiseLike<void>;
  deepPropertyVal(
    obj: Object,
    prop: string,
    val: any,
    msg?: string
  ): PromiseLike<void>;
  deepPropertyNotVal(
    obj: Object,
    prop: string,
    val: any,
    msg?: string
  ): PromiseLike<void>;
  lengthOf(exp: any, len: number, msg?: string): PromiseLike<void>;
  throw(fn: Function, msg?: string): PromiseLike<void>;
  throw(fn: Function, regExp: RegExp): PromiseLike<void>;
  throw(fn: Function, errType: Function, msg?: string): PromiseLike<void>;
  throw(fn: Function, errType: Function, regExp: RegExp): PromiseLike<void>;
  throws(fn: Function, msg?: string): PromiseLike<void>;
  throws(fn: Function, regExp: RegExp): PromiseLike<void>;
  throws(fn: Function, errType: Function, msg?: string): PromiseLike<void>;
  throws(fn: Function, errType: Function, regExp: RegExp): PromiseLike<void>;
  Throw(fn: Function, msg?: string): PromiseLike<void>;
  Throw(fn: Function, regExp: RegExp): PromiseLike<void>;
  Throw(fn: Function, errType: Function, msg?: string): PromiseLike<void>;
  Throw(fn: Function, errType: Function, regExp: RegExp): PromiseLike<void>;
  doesNotThrow(fn: Function, msg?: string): PromiseLike<void>;
  doesNotThrow(fn: Function, regExp: RegExp): PromiseLike<void>;
  doesNotThrow(
    fn: Function,
    errType: Function,
    msg?: string
  ): PromiseLike<void>;
  doesNotThrow(
    fn: Function,
    errType: Function,
    regExp: RegExp
  ): PromiseLike<void>;
  operator(
    val: any,
    operator: string,
    val2: any,
    msg?: string
  ): PromiseLike<void>;
  closeTo(
    act: number,
    exp: number,
    delta: number,
    msg?: string
  ): PromiseLike<void>;
  approximately(
    act: number,
    exp: number,
    delta: number,
    msg?: string
  ): PromiseLike<void>;
  sameMembers(set1: any[], set2: any[], msg?: string): PromiseLike<void>;
  sameDeepMembers(set1: any[], set2: any[], msg?: string): PromiseLike<void>;
  sameOrderedMembers(set1: any[], set2: any[], msg?: string): PromiseLike<void>;
  notSameOrderedMembers(
    set1: any[],
    set2: any[],
    msg?: string
  ): PromiseLike<void>;
  sameDeepOrderedMembers(
    set1: any[],
    set2: any[],
    msg?: string
  ): PromiseLike<void>;
  notSameDeepOrderedMembers(
    set1: any[],
    set2: any[],
    msg?: string
  ): PromiseLike<void>;
  includeOrderedMembers(
    set1: any[],
    set2: any[],
    msg?: string
  ): PromiseLike<void>;
  notIncludeOrderedMembers(
    set1: any[],
    set2: any[],
    msg?: string
  ): PromiseLike<void>;
  includeDeepOrderedMembers(
    set1: any[],
    set2: any[],
    msg?: string
  ): PromiseLike<void>;
  notIncludeDeepOrderedMembers(
    set1: any[],
    set2: any[],
    msg?: string
  ): PromiseLike<void>;
  includeMembers(set1: any[], set2: any[], msg?: string): PromiseLike<void>;
  includeDeepMembers(set1: any[], set2: any[], msg?: string): PromiseLike<void>;
  oneOf(val: any, list: any[], msg?: string): PromiseLike<void>;
  changes(
    modifier: Function,
    obj: Object,
    property: string,
    msg?: string
  ): PromiseLike<void>;
  doesNotChange(
    modifier: Function,
    obj: Object,
    property: string,
    msg?: string
  ): PromiseLike<void>;
  increases(
    modifier: Function,
    obj: Object,
    property: string,
    msg?: string
  ): PromiseLike<void>;
  doesNotIncrease(
    modifier: Function,
    obj: Object,
    property: string,
    msg?: string
  ): PromiseLike<void>;
  decreases(
    modifier: Function,
    obj: Object,
    property: string,
    msg?: string
  ): PromiseLike<void>;
  doesNotDecrease(
    modifier: Function,
    obj: Object,
    property: string,
    msg?: string
  ): PromiseLike<void>;
  ifError(val: any, msg?: string): PromiseLike<void>;
  isExtensible(obj: Object, msg?: string): PromiseLike<void>;
  isNotExtensible(obj: Object, msg?: string): PromiseLike<void>;
  isSealed(obj: Object, msg?: string): PromiseLike<void>;
  sealed(obj: Object, msg?: string): PromiseLike<void>;
  isNotSealed(obj: Object, msg?: string): PromiseLike<void>;
  notSealed(obj: Object, msg?: string): PromiseLike<void>;
  isFrozen(obj: Object, msg?: string): PromiseLike<void>;
  frozen(obj: Object, msg?: string): PromiseLike<void>;
  isNotFrozen(obj: Object, msg?: string): PromiseLike<void>;
  notFrozen(obj: Object, msg?: string): PromiseLike<void>;
  isEmpty(val: any, msg?: string): PromiseLike<void>;
  isNotEmpty(val: any, msg?: string): PromiseLike<void>;
}
