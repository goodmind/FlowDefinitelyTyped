declare module "opentype.js" {
  /**
   * ****************************************
   * FONT
   * ****************************************
   */
  declare export class Font {
    names: FontNames;
    unitsPerEm: number;
    ascender: number;
    descender: number;
    createdTimestamp: number;
    tables: {
      [tableName: string]: Table
    };
    supported: boolean;
    glyphs: GlyphSet;
    encoding: Encoding;
    substitution: Substitution;
    defaultRenderOptions: RenderOptions;
    constructor(options: FontConstructorOptions): this;
    charToGlyph(c: string): Glyph;
    charToGlyphIndex(s: string): number;
    download(fileName?: string): void;
    draw(
      ctx: CanvasRenderingContext2D,
      text: string,
      x?: number,
      y?: number,
      fontSize?: number,
      options?: RenderOptions
    ): void;
    drawMetrics(
      ctx: CanvasRenderingContext2D,
      text: string,
      x?: number,
      y?: number,
      fontSize?: number,
      options?: RenderOptions
    ): void;
    drawPoints(
      ctx: CanvasRenderingContext2D,
      text: string,
      x?: number,
      y?: number,
      fontSize?: number,
      options?: RenderOptions
    ): void;
    forEachGlyph(
      text: string,
      x: number | void,
      y: number | void,
      fontSize: number | void,
      options: RenderOptions | void,
      callback: (
        glyph: Glyph,
        x: number,
        y: number,
        fontSize: number,
        options?: RenderOptions
      ) => void
    ): number;
    getAdvanceWidth(
      text: string,
      fontSize?: number,
      options?: RenderOptions
    ): number;
    getEnglishName(name: string): string;
    getKerningValue(
      leftGlyph: Glyph | number,
      rightGlyph: Glyph | number
    ): number;
    getPath(
      text: string,
      x: number,
      y: number,
      fontSize: number,
      options?: RenderOptions
    ): Path;
    getPaths(
      text: string,
      x: number,
      y: number,
      fontSize: number,
      options?: RenderOptions
    ): Path[];
    glyphIndexToName(gid: number): string;
    glyphNames: GlyphNames;
    hasChar(c: string): boolean;
    kerningPairs: KerningPairs;
    nameToGlyph(name: string): Glyph;
    nameToGlyphIndex(name: string): number;
    numberOfHMetrics: number;
    numGlyphs: number;
    outlinesFormat: string;
    stringToGlyphs(s: string): Glyph[];
    toArrayBuffer(): ArrayBuffer;
    toBuffer(): ArrayBuffer;
    toTables(): Table;
    validate(): void;
  }
  declare export type FontConstructorOptions = FontConstructorOptionsBase &
    $Shape<FontOptions> & {
      glyphs: Glyph[]
    };
  declare export interface FontOptions {
    empty?: boolean;
    familyName: string;
    styleName: string;
    fullName?: string;
    postScriptName?: string;
    designer?: string;
    designerURL?: string;
    manufacturer?: string;
    manufacturerURL?: string;
    license?: string;
    licenseURL?: string;
    version?: string;
    description?: string;
    copyright?: string;
    trademark?: string;
    unitsPerEm: number;
    ascender: number;
    descender: number;
    createdTimestamp: number;
    weightClass?: string;
    widthClass?: string;
    fsSelection?: string;
  }
  declare export interface FontConstructorOptionsBase {
    familyName: string;
    styleName: string;
    unitsPerEm: number;
    ascender: number;
    descender: number;
  }
  declare export interface FontNames {
    copyright: LocalizedName;
    description: LocalizedName;
    designer: LocalizedName;
    designerURL: LocalizedName;
    fontFamily: LocalizedName;
    fontSubfamily: LocalizedName;
    fullName: LocalizedName;
    license: LocalizedName;
    licenseURL: LocalizedName;
    manufacturer: LocalizedName;
    manufacturerURL: LocalizedName;
    postScriptName: LocalizedName;
    trademark: LocalizedName;
    version: LocalizedName;
  }
  declare export interface Table {
    [propName: string]: any;
    encode(): number[];
    fields: Field[];
    sizeOf(): number;
    tables: Table[];
    tableName: string;
  }
  declare export interface KerningPairs {
    [pair: string]: number;
  }
  declare export interface LocalizedName {
    [lang: string]: string;
  }
  declare export interface Field {
    name: string;
    type: string;
    value: any;
  }

  /**
   * ****************************************
   * GLYPH
   * ****************************************
   */
  declare export class Glyph {
    name: string;
    path: Path | (() => Path);
    unicode: number;
    unicodes: number[];
    advanceWidth: number;
    constructor(options: GlyphOptions): this;
    addUnicode(unicode: number): void;
    bindConstructorValues(options: GlyphOptions): void;
    draw(
      ctx: CanvasRenderingContext2D,
      x?: number,
      y?: number,
      fontSize?: number,
      options?: RenderOptions
    ): void;
    drawMetrics(
      ctx: CanvasRenderingContext2D,
      x?: number,
      y?: number,
      fontSize?: number,
      options?: RenderOptions
    ): void;
    drawPoints(
      ctx: CanvasRenderingContext2D,
      x?: number,
      y?: number,
      fontSize?: number,
      options?: RenderOptions
    ): void;
    getBoundingBox(): BoundingBox;
    getContours(): Contour;
    getMetrics(): Metrics;
    getPath(
      x?: number,
      y?: number,
      fontSize?: number,
      options?: RenderOptions,
      font?: Font
    ): Path;
  }
  declare export interface GlyphOptions {
    advanceWidth?: number;
    index?: number;
    font?: Font;
    name?: string;
    path?: Path;
    unicode?: number;
    unicodes?: number[];
    xMax?: number;
    xMin?: number;
    yMax?: number;
    yMin?: number;
  }
  declare export class GlyphNames {
    constructor(post: Post): this;
    glyphIndexToName(gid: number): string;
    nameToGlyphIndex(name: string): number;
  }
  declare export class GlyphSet {
    constructor(font: Font, glyphs: Glyph[] | Array<() => Glyph>): this;
    get(index: number): Glyph;
    length: number;
    push(index: number, loader: () => Glyph): void;
  }
  declare export interface Post {
    glyphNameIndex?: number[];
    isFixedPitch: number;
    italicAngle: number;
    maxMemType1: number;
    minMemType1: number;
    maxMemType42: number;
    minMemType42: number;
    names?: string[];
    numberOfGlyphs?: number;
    offset?: number[];
    underlinePosition: number;
    underlineThickness: number;
    version: number;
  }
  declare export interface RenderOptions {
    script?: string;
    language?: string;
    kerning?: boolean;
    xScale?: number;
    yScale?: number;
    features?: {
      [key: string]: boolean
    };
  }
  declare export interface Metrics {
    leftSideBearing: number;
    rightSideBearing?: number;
    xMax: number;
    xMin: number;
    yMax: number;
    yMin: number;
  }
  declare export type Contour = {} & Array<Point>;

  declare export interface Point {
    lastPointOfContour?: boolean;
  }

  /**
   * ****************************************
   * PATH
   * ****************************************
   */
  declare export class Path {
    constructor(): this;
    bezierCurveTo(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x: number,
      y: number
    ): void;
    close: () => void;
    closePath(): void;
    commands: PathCommand[];
    curveTo: (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x: number,
      y: number
    ) => void;
    draw(ctx: CanvasRenderingContext2D): void;
    extend(pathOrCommands: Path | PathCommand[] | BoundingBox): void;
    getBoundingBox(): BoundingBox;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(x1: number, y1: number, x: number, y: number): void;
    quadTo: (x1: number, y1: number, x: number, y: number) => void;
    toDOMElement(decimalPlaces: number): SVGPathElement;
    toPathData(decimalPlaces: number): string;
    toSVG(decimalPlaces: number): string;
    unitsPerEm: number;
  }
  declare export interface PathCommand {
    type: string;
    x?: number;
    y?: number;
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
  }

  /**
   * ****************************************
   * UTIL CLASSES
   * ****************************************
   */
  declare export class BoundingBox {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    isEmpty(): boolean;
    addPoint(x: number, y: number): void;
    addX(x: number): void;
    addY(y: number): void;
    addBezier(
      x0: number,
      y0: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x: number,
      y: number
    ): void;
    addQuad(
      x0: number,
      y0: number,
      x1: number,
      y1: number,
      x: number,
      y: number
    ): void;
  }
  declare export interface Encoding {
    charset: string;
    charToGlyphIndex(c: string): number;
    font: Font;
  }
  declare export type Substitution = (font: Font) => any;

  /**
   * ****************************************
   * STATIC
   * ****************************************
   */
  declare export function load(
    url: string,
    callback: (error: any, font?: Font) => void
  ): void;

  declare export function loadSync(url: string): Font;

  declare export function parse(buffer: any): Font;
}
