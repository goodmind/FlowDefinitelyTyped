declare type ChaiXml$XmlAssertion = {
  valid(): ChaiXml$XmlAssertion,
  not: ChaiXml$XmlAssertion,
  to: ChaiXml$XmlAssertion,
  be: ChaiXml$XmlAssertion,
  been: ChaiXml$XmlAssertion,
  is: ChaiXml$XmlAssertion,
  that: ChaiXml$XmlAssertion,
  which: ChaiXml$XmlAssertion,
  and: ChaiXml$XmlAssertion,
  has: ChaiXml$XmlAssertion,
  have: ChaiXml$XmlAssertion,
  with: ChaiXml$XmlAssertion,
  at: ChaiXml$XmlAssertion,
  of: ChaiXml$XmlAssertion,
  same: ChaiXml$XmlAssertion
} & Chai$Chai$Assertion;
declare interface Chai$Assertion {
  xml: ChaiXml$ChaiXml$XmlAssertion;
}
declare module "global" {
}
declare module "chai-xml" {
  declare function chaiXml(chai: any, utils: any): void;

  declare module.exports: typeof chaiXml;
}
