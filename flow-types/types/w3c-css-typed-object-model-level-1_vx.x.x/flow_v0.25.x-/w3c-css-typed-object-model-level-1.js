declare module "w3c-css-typed-object-model-level-1" {
  declare class CSSStyleValue {
    static parse(property: string, cssText: string): CSSStyleValue;
    static parseAll(property: string, cssText: string): CSSStyleValue[];
    toString(): string;
  }
  declare class CSSVariableReferenceValue {
    constructor(variable: string, fallback?: CSSUnparsedValue): this;
    variable: string;
    fallback: CSSUnparsedValue;
  }
  declare type CSSUnparsedSegment = string | CSSVariableReferenceValue;
  declare class CSSUnparsedValue mixins CSSStyleValue {
    constructor(members: CSSUnparsedSegment[]): this;
    undefined(): IterableIterator<CSSUnparsedSegment>;
    length: number;
    [idx: number]: CSSUnparsedSegment;
  }
  declare class CSSKeywordValue mixins CSSStyleValue {
    constructor(value: string): this;
    value: string;
  }
  declare type CSSNumberish = number | CSSNumericValue;
  declare class CSSNumericBaseType {
    constructor(...args: empty): mixed;
    static +length: Class<CSSNumericBaseType__length> &
      CSSNumericBaseType__length &
      0; // 0
    static +angle: Class<CSSNumericBaseType__angle> &
      CSSNumericBaseType__angle &
      1; // 1
    static +time: Class<CSSNumericBaseType__time> &
      CSSNumericBaseType__time &
      2; // 2
    static +frequency: Class<CSSNumericBaseType__frequency> &
      CSSNumericBaseType__frequency &
      3; // 3
    static +resolution: Class<CSSNumericBaseType__resolution> &
      CSSNumericBaseType__resolution &
      4; // 4
    static +flex: Class<CSSNumericBaseType__flex> &
      CSSNumericBaseType__flex &
      5; // 5
    static +percent: Class<CSSNumericBaseType__percent> &
      CSSNumericBaseType__percent &
      6; // 6
  }

  declare class CSSNumericBaseType__length mixins CSSNumericBaseType {}
  declare class CSSNumericBaseType__angle mixins CSSNumericBaseType {}
  declare class CSSNumericBaseType__time mixins CSSNumericBaseType {}
  declare class CSSNumericBaseType__frequency mixins CSSNumericBaseType {}
  declare class CSSNumericBaseType__resolution mixins CSSNumericBaseType {}
  declare class CSSNumericBaseType__flex mixins CSSNumericBaseType {}
  declare class CSSNumericBaseType__percent mixins CSSNumericBaseType {}

  declare interface CSSNumericType {
    length: number;
    angle: number;
    time: number;
    frequency: number;
    resolution: number;
    flex: number;
    percent: number;
    percentHint: CSSNumericBaseType;
  }
  declare class CSSNumericValue mixins CSSStyleValue {
    add(...values: CSSNumberish[]): CSSNumericValue;
    sub(...values: CSSNumberish[]): CSSNumericValue;
    mul(...values: CSSNumberish[]): CSSNumericValue;
    div(...values: CSSNumberish[]): CSSNumericValue;
    min(...values: CSSNumberish[]): CSSNumericValue;
    max(...values: CSSNumberish[]): CSSNumericValue;
    equals(...values: CSSNumberish[]): boolean;
    to(unit: string): CSSUnitValue;
    toSum(...units: string[]): CSSMathSum;
    type(): CSSNumericType;
    static parse(cssText: string): CSSNumericValue;
  }
  declare class CSSUnitValue mixins CSSNumericValue {
    constructor(value: number, unit: string): this;
    value: number;
    unit: string;
  }
  declare class CSSMathValue mixins CSSNumericValue {
    operator: CSSMathOperator;
  }
  declare class CSSMathSum mixins CSSMathValue {
    constructor(...args: CSSNumberish[]): this;
    values: CSSNumericArray;
  }
  declare class CSSMathProduct mixins CSSMathValue {
    constructor(...args: CSSNumberish[]): this;
    values: CSSNumericArray;
  }
  declare class CSSMathNegate mixins CSSMathValue {
    constructor(arg: CSSNumberish): this;
    value: CSSNumericValue;
  }
  declare class CSSMathInvert mixins CSSMathValue {
    constructor(arg: CSSNumberish): this;
    value: CSSNumericValue;
  }
  declare class CSSMathMin mixins CSSMathValue {
    constructor(...args: CSSNumberish[]): this;
    values: CSSNumericArray;
  }
  declare class CSSMathMax mixins CSSMathValue {
    constructor(...args: CSSNumberish[]): this;
    values: CSSNumericArray;
  }
  declare class CSSNumericArray {
    undefined(): IterableIterator<CSSNumericValue>;
    length: number;
    [index: number]: CSSNumericValue;
  }
  declare class CSSMathOperator {
    constructor(...args: empty): mixed;
    static +sum: Class<CSSMathOperator__sum> & CSSMathOperator__sum & 0; // 0
    static +product: Class<CSSMathOperator__product> &
      CSSMathOperator__product &
      1; // 1
    static +negate: Class<CSSMathOperator__negate> &
      CSSMathOperator__negate &
      2; // 2
    static +invert: Class<CSSMathOperator__invert> &
      CSSMathOperator__invert &
      3; // 3
    static +min: Class<CSSMathOperator__min> & CSSMathOperator__min & 4; // 4
    static +max: Class<CSSMathOperator__max> & CSSMathOperator__max & 5; // 5
    static +clamp: Class<CSSMathOperator__clamp> & CSSMathOperator__clamp & 6; // 6
  }

  declare class CSSMathOperator__sum mixins CSSMathOperator {}
  declare class CSSMathOperator__product mixins CSSMathOperator {}
  declare class CSSMathOperator__negate mixins CSSMathOperator {}
  declare class CSSMathOperator__invert mixins CSSMathOperator {}
  declare class CSSMathOperator__min mixins CSSMathOperator {}
  declare class CSSMathOperator__max mixins CSSMathOperator {}
  declare class CSSMathOperator__clamp mixins CSSMathOperator {}

  declare class CSSTransformValue mixins CSSStyleValue {
    constructor(transforms: CSSTransformComponent[]): this;
    undefined(): IterableIterator<CSSTransformComponent>;
    length: number;
    [index: number]: CSSTransformComponent;
    is2D: boolean;
    toMatrix(): DOMMatrix;
  }
  declare class CSSTransformComponent {
    is2D: boolean;
    toMatrix(): DOMMatrix;
    toString(): string;
  }
  declare class CSSTranslate mixins CSSTransformComponent {
    constructor(
      x: CSSNumericValue,
      y: CSSNumericValue,
      z?: CSSNumericValue
    ): this;
    x: CSSNumericValue;
    y: CSSNumericValue;
    z: CSSNumericValue;
  }
  declare class CSSRotate mixins CSSTransformComponent {
    constructor(angle: CSSNumericValue): this;
    constructor(
      x: CSSNumberish,
      y: CSSNumberish,
      z: CSSNumberish,
      angle: CSSNumericValue
    ): this;
    x: CSSNumberish;
    y: CSSNumberish;
    z: CSSNumberish;
    angle: CSSNumericValue;
  }
  declare class CSSScale mixins CSSTransformComponent {
    constructor(x: CSSNumberish, y: CSSNumberish, z?: CSSNumberish): this;
    x: CSSNumberish;
    y: CSSNumberish;
    z: CSSNumberish;
  }
  declare class CSSSkew mixins CSSTransformComponent {
    constructor(ax: CSSNumericValue, ay: CSSNumericValue): this;
    ax: CSSNumericValue;
    ay: CSSNumericValue;
  }
  declare class CSSSkewX mixins CSSTransformComponent {
    constructor(ax: CSSNumericValue): this;
    ax: CSSNumericValue;
  }
  declare class CSSSkewY mixins CSSTransformComponent {
    constructor(ay: CSSNumericValue): this;
    ay: CSSNumericValue;
  }
  declare class CSSPerspective mixins CSSTransformComponent {
    constructor(length: CSSNumericValue): this;
    length: CSSNumericValue;
  }
  declare class CSSMatrixComponent mixins CSSTransformComponent {
    constructor(
      matrix: DOMMatrixReadOnly,
      options?: CSSMatrixComponentOptions
    ): this;
    matrix: DOMMatrix;
  }
  declare interface CSSMatrixComponentOptions {
    is2D: boolean;
  }
  declare class CSSImageValue mixins CSSStyleValue {}
  declare class StylePropertyMapReadOnly {
    undefined(): IterableIterator<[string, CSSStyleValue[]]>;
    get(property: string): CSSStyleValue | void;
    getAll(property: string): CSSStyleValue[];
    has(property: string): boolean;
    size: number;
  }
  declare class StylePropertyMap mixins StylePropertyMapReadOnly {
    set(property: string, ...values: Array<CSSStyleValue | string>): void;
    append(property: string, ...values: Array<CSSStyleValue | string>): void;
    delete(property: string): void;
    clear(): void;
  }
  declare interface Element {
    computedStyleMap(): StylePropertyMapReadOnly;
  }
  declare interface CSSStyleRule {
    +styleMap: StylePropertyMap;
  }
  declare interface ElementCSSInlineStyle {
    +attributeStyleMap: StylePropertyMap;
  }
  declare interface CSS {
    number(value: number): CSSUnitValue;
    percent(value: number): CSSUnitValue;
    em(value: number): CSSUnitValue;
    ex(value: number): CSSUnitValue;
    ch(value: number): CSSUnitValue;
    ic(value: number): CSSUnitValue;
    rem(value: number): CSSUnitValue;
    lh(value: number): CSSUnitValue;
    rlh(value: number): CSSUnitValue;
    vw(value: number): CSSUnitValue;
    vh(value: number): CSSUnitValue;
    vi(value: number): CSSUnitValue;
    vb(value: number): CSSUnitValue;
    vmin(value: number): CSSUnitValue;
    vmax(value: number): CSSUnitValue;
    cm(value: number): CSSUnitValue;
    mm(value: number): CSSUnitValue;
    Q(value: number): CSSUnitValue;
    in(value: number): CSSUnitValue;
    pt(value: number): CSSUnitValue;
    pc(value: number): CSSUnitValue;
    px(value: number): CSSUnitValue;
    deg(value: number): CSSUnitValue;
    grad(value: number): CSSUnitValue;
    rad(value: number): CSSUnitValue;
    turn(value: number): CSSUnitValue;
    s(value: number): CSSUnitValue;
    ms(value: number): CSSUnitValue;
    Hz(value: number): CSSUnitValue;
    kHz(value: number): CSSUnitValue;
    dpi(value: number): CSSUnitValue;
    dpcm(value: number): CSSUnitValue;
    dppx(value: number): CSSUnitValue;
    fr(value: number): CSSUnitValue;
  }
  declare var CSS: CSS;
}
