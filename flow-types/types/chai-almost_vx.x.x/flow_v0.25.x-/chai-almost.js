declare interface ChaiAlmost$DeepAlmost {
  (value: any, toleranceOverride?: number): Chai$Assertion;
  equal: Equal;
  equals: Equal;
  eq: Equal;
}

declare type ChaiAlmost$Almost = {
  eql: Equal,
  eqls: Equal
} & ChaiAlmost$DeepAlmost;
declare interface Chai$Assertion {
  almost: ChaiAlmost$ChaiAlmost$Almost;
}

declare interface Chai$Deep {
  almost: ChaiAlmost$ChaiAlmost$DeepAlmost;
}
declare module "global" {
}
declare module "chai-almost" {
  declare function chaiAlmost(
    tolerance?: number
  ): (chai: any, utils: any) => void;

  declare module.exports: typeof chaiAlmost;
}
