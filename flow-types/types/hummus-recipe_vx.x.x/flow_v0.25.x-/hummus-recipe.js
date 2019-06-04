declare module "hummus-recipe" {
  declare type Recipe$CommentOptionsFlag =
    | "invisible"
    | "hidden"
    | "print"
    | "nozoom"
    | "norotate"
    | "noview"
    | "readonly"
    | "locked"
    | "togglenoview";

  declare type Recipe$AnnotSubtype =
    | "Text"
    | "FreeText"
    | "Line"
    | "Square"
    | "Circle"
    | "Polygon"
    | "PolyLine"
    | "Highlight"
    | "Underline"
    | "Squiggly"
    | "StrikeOut"
    | "Stamp"
    | "Caret"
    | "Ink"
    | "FileAttachment"
    | "Sound";

  declare type Recipe$AnnotOptionsFlag =
    | "invisible"
    | "hidden"
    | "print"
    | "nozoom"
    | "norotate"
    | "noview"
    | "readonly"
    | "locked"
    | "togglenoview";

  declare type Recipe$AnnotOptionsIcon =
    | "Comment"
    | "Key"
    | "Note"
    | "Help"
    | "NewParagraph"
    | "Paragraph"
    | "Insert";

  declare interface Recipe$RecipeOptions {
    version?: number;
    author?: string;
    title?: string;
    subject?: string;
    keywords?: string[];
  }

  declare interface Recipe$CommentOptions {
    title?: string;
    date?: string;
    open?: boolean;
    richText?: boolean;
    flag?: Recipe$CommentOptionsFlag;
  }

  declare interface Recipe$AnnotOptions {
    title?: string;
    open?: boolean;
    richText?: boolean;
    flag?: Recipe$AnnotOptionsFlag;
    icon?: Recipe$AnnotOptionsIcon;
    width?: number;
    height?: number;
  }

  declare interface Recipe$EncryptOptions {
    password?: string;
    ownerPassword?: string;
    userProtectionFlag?: number;
  }

  declare interface Recipe$ImageOptions {
    width?: number;
    height?: number;
    scale?: number;
    keepAspectRatio?: boolean;
    opacity?: number;
    align?: string;
  }

  declare interface Recipe$InfoOptions {
    version?: string;
    author?: string;
    title?: string;
    subject?: string;
    keywords?: string[];
  }

  declare interface Recipe$OverlayOptions {
    scale?: number;
    keepAspectRatio?: boolean;
    fitWidth?: boolean;
    fitHeight?: boolean;
  }

  declare interface Recipe$TextBoxStyle {
    lineWidth?: number;
    stroke?: string | number[];
    dash?: number[];
    fill?: string | number[];
    opacity?: number;
  }

  declare interface Recipe$TextBox {
    width?: number;
    height?: number;
    minHeight?: number;
    padding?: number | number[];
    lineHeight?: number;
    textAlign?: string;
    style?: Recipe$TextBoxStyle;
  }

  declare interface Recipe$TextOptions {
    color?: string | number[];
    opacity?: number;
    rotation?: number;
    rotationOrigin?: number[];
    font?: string;
    size?: number;
    align?: string;
    highlight?: boolean;
    underline?: boolean;
    strikeOut?: boolean;
    textBox?: Recipe$TextBox;
  }

  declare interface Recipe$LineToOptions {
    color?: string | number[];
    stroke?: string | number[];
    fill?: string | number[];
    lineWidth?: number;
    opacity?: number;
    dash?: number[];
  }

  declare interface Recipe$LineOptions {
    color?: string | number[];
    stroke?: string | number[];
    lineWidth?: number;
    dash?: number[];
  }

  declare interface Recipe$PolygonOptions {
    color?: string | number[];
    stroke?: string | number[];
    fill?: string | number[];
    lineWidth?: number;
    opacity?: number;
    dash?: number[];
  }

  declare interface Recipe$CircleOptions {
    color?: string | number[];
    stroke?: string | number[];
    fill?: string | number[];
    lineWidth?: number;
    opacity?: number;
    dash?: number[];
  }

  declare interface Recipe$RectangleOptions {
    color?: string | number[];
    stroke?: string | number[];
    fill?: string | number[];
    lineWidth?: number;
    opacity?: number;
    dash?: number[];
    rotation?: number;
    rotationOrigin?: number[];
  }

  declare type Recipe$EndPDFCallback1 = () => any;

  declare type Recipe$EndPDFCallback2 = (buffer: Buffer) => any;

  declare type Recipe$EndPDFCallback =
    | Recipe$EndPDFCallback1
    | Recipe$EndPDFCallback2;
  declare class Recipe {
    constructor(
      src: string,
      output: string,
      options?: Recipe$RecipeOptions
    ): this;
    constructor(buffer: Buffer, options?: Recipe$RecipeOptions): this;
    comment(
      text: string,
      x: number,
      y: number,
      options?: Recipe$CommentOptions
    ): Recipe;
    annot(
      x: number,
      y: number,
      subtype: Recipe$AnnotSubtype,
      options?: Recipe$AnnotOptions
    ): Recipe;
    appendPage(pdfSrc: string, pages: number | number[]): Recipe;
    encrypt(options: Recipe$EncryptOptions): Recipe;
    registerFont(fontName: string, fontSrcPath: string): Recipe;
    image(
      imgSrc: string,
      x: number,
      y: number,
      options?: Recipe$ImageOptions
    ): Recipe;
    info(options?: Recipe$InfoOptions): Recipe;
    custom(key?: string, value?: string): Recipe;
    insertPage(
      afterPageNumber: number,
      pdfSrc: string,
      srcPageNumber: number
    ): Recipe;
    overlay(
      pdfSrc: string,
      x: number,
      y: number,
      options?: Recipe$OverlayOptions
    ): Recipe;
    createPage(pageWidth: number, pageHeight: number): Recipe;
    endPage(): Recipe;
    editPage(pageNumber: number): Recipe;
    pageInfo(pageNumber: number): Recipe;
    split(outputDir: string, prefix: string): Recipe;
    text(
      text: string,
      x: number,
      y: number,
      options?: Recipe$TextOptions
    ): Recipe;
    moveTo(x: number, y: number): Recipe;
    lineTo(x: number, y: number, options?: Recipe$LineToOptions): Recipe;
    line(coordinates: number[][], options?: Recipe$LineOptions): Recipe;
    polygon(coordinates: number[][], options?: Recipe$PolygonOptions): Recipe;
    circle(
      x: number,
      y: number,
      radius: number,
      options?: Recipe$CircleOptions
    ): Recipe;
    rectangle(
      x: number,
      y: number,
      width: number,
      height: number,
      options?: Recipe$RectangleOptions
    ): Recipe;
    endPDF(callback?: Recipe$EndPDFCallback): Recipe;
  }
  declare export default typeof Recipe;
}
