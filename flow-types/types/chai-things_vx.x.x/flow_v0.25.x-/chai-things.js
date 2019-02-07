declare interface Chai$ArrayAssertion {
  include: Chai$ArrayInclude;
  contain: Chai$ArrayInclude;
  not: Chai$ArrayAssertion;
  all: Assertion;
}

declare interface Chai$ArrayInclude {
  (item: any): any;
  a: Chai$Item;
  an: Chai$Item;
  one: Chai$Something;
  some: Chai$Something;
  something: Chai$Something;
  any: Chai$Anything;
}

declare interface Chai$Include {
  (item: any): any;
  a: Chai$Item;
  an: Chai$Item;
  one: Chai$Something;
  some: Chai$Something;
  something: Chai$Something;
}

declare type Chai$Anything = {
  (): any,
  that: Assertion,
  with: Assertion
} & Assertion;

declare type Chai$Something = {
  (): any,
  that: Assertion,
  with: Assertion
} & Assertion;

declare interface Chai$Item {
  item: Chai$Something;
  thing: Chai$Something;
}

declare interface Chai$Deep {
  equals: Equal;
}
declare interface Array<T> {
  should: Chai$Chai$ArrayAssertion;
}
declare module "chai-things" {
  declare function chaiThings(chai: any, utils: any): void;

  declare module.exports: typeof chaiThings;
}
