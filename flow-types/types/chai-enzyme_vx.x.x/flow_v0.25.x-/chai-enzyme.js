declare module "chaiEnzyMe" {
}
declare module "chai-enzyme" {
  import type { ShallowWrapper, ReactWrapper } from "enzyme";

  declare type DebugWrapper =
    | ShallowWrapper<any, any>
    | Cheerio
    | ReactWrapper<any, any>;
  declare function chaiEnzyMe(
    wrapper?: (debugWrapper: DebugWrapper) => string
  ): (chai: any) => void;

  declare module.exports: typeof chaiEnzyMe;
}
declare type Chai$EnzymeSelector =
  | string
  | React.StatelessComponent<any>
  | React.ComponentClass<any>
  | {
      [key: string]: any
    };

declare interface Chai$Match {
  /**
   * Assert that the wrapper matches given selector:
   * @param selector
   */
  (selector: Chai$EnzymeSelector): Chai$Assertion;
}

declare interface Chai$Include {
  /**
   * Assert that the wrapper contains a given node:
   * @param code
   */
  (selector: Chai$EnzymeSelector): Chai$Assertion;

  /**
   * Assert that the given wrapper has the supplied text:
   * @param str
   */
  text(str?: string): Chai$Assertion;
}

declare interface Chai$Assertion {
  /**
   * Assert that the given wrapper is checked:
   */
  checked(): Chai$Assertion;

  /**
   * Assert that the wrapper has a given class:
   * @param name
   */
  className(name: string): Chai$Assertion;

  /**
   * Assert that the wrapper contains a certain element:
   * @param selector
   */
  containMatchingElement(selector: Chai$EnzymeSelector): Chai$Assertion;

  /**
   * Assert that the wrapper contains a descendant matching the given selector:
   * @param selector
   */
  descendants(selector?: Chai$EnzymeSelector): Chai$Assertion;

  /**
   * Assert that the wrapper contains an exact amount of descendants matching the given selector:
   */
  exactly(count?: number): Chai$Assertion;

  /**
   * Assert that the given wrapper is disabled:
   */
  disabled(): Chai$Assertion;

  /**
   * Assert that the given wrapper is empty:
   */
  blank(): Chai$Assertion;

  /**
   * Assert that the given wrapper exists:
   */
  present(): Chai$Assertion;

  /**
   * Assert that the wrapper has given html:
   * @param str
   */
  html(str?: string): Chai$Assertion;

  /**
   * Assert that the wrapper has given ID attribute:
   * @param str
   */
  id(str: string): Chai$Assertion;

  /**
   * Assert that the wrapper has a given ref
   * @param key
   */
  ref(key: string): Chai$Assertion;

  /**
   * Assert that the given wrapper is selected:
   */
  selected(): Chai$Assertion;

  /**
   * Assert that the given wrapper has the tag name:
   * @param str
   */
  tagName(str: string): Chai$Assertion;

  /**
   * Assert that the given wrapper has the supplied text:
   * @param str
   */
  text(str?: string): Chai$Assertion;

  /**
   * Assert that the given wrapper has a given type:
   * @param func
   */
  type(func: Chai$EnzymeSelector): Chai$Assertion;

  /**
   * Assert that the given wrapper has given value:
   * @param str
   */
  value(str: string): Chai$Assertion;

  /**
   * Assert that the wrapper has given attribute [with value]:
   * @param key
   * @param val
   */
  attr(key: string, val?: string): Chai$Assertion;

  /**
   * Assert that the wrapper has a given data attribute [with value]:
   * @param key
   * @param val
   */
  data(key: string, val?: string): Chai$Assertion;

  /**
   * Assert that the wrapper has given style:
   * @param key
   * @param val
   */
  style(key: string, val?: string): Chai$Assertion;

  /**
   * Assert that the wrapper has given state [with value]:
   * @param key
   * @param val
   */
  state(key: string, val?: any): Chai$Assertion;

  /**
   * Assert that the wrapper has given prop [with value]:
   * @param key
   * @param val
   */
  prop(key: string, val?: any): Chai$Assertion;

  /**
   * Assert that the wrapper has given props [with values]:
   * @param keys
   */
  props(keys: string[]): Chai$Assertion;

  /**
   * Assert that the wrapper has given props [with values]:
   * @param props
   */
  props(props: Chai$EnzymeSelector): Chai$Assertion;
}
