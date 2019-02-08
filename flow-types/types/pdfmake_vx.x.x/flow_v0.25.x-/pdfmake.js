declare module "pdfmake/build/pdfmake" {
  declare var vfs: TFontFamily;
  declare var fonts: {
    [name: string]: TFontFamilyTypes
  };
  declare function createPdf(
    documentDefinitions: TDocumentDefinitions
  ): TCreatedPdf;

  declare class PageSize {
    constructor(...args: empty): mixed;
    static +A0_x_4: Class<PageSize__A0_x_4> & PageSize__A0_x_4 & "4A0"; // "4A0"
    static +A0_x_2: Class<PageSize__A0_x_2> & PageSize__A0_x_2 & "2A0"; // "2A0"
    static +AO: Class<PageSize__AO> & PageSize__AO & "A0"; // "A0"
    static +A1: Class<PageSize__A1> & PageSize__A1 & "A1"; // "A1"
    static +A2: Class<PageSize__A2> & PageSize__A2 & "A2"; // "A2"
    static +A3: Class<PageSize__A3> & PageSize__A3 & "A3"; // "A3"
    static +A4: Class<PageSize__A4> & PageSize__A4 & "A4"; // "A4"
    static +A5: Class<PageSize__A5> & PageSize__A5 & "A5"; // "A5"
    static +A6: Class<PageSize__A6> & PageSize__A6 & "A6"; // "A6"
    static +A7: Class<PageSize__A7> & PageSize__A7 & "A7"; // "A7"
    static +A8: Class<PageSize__A8> & PageSize__A8 & "A8"; // "A8"
    static +A9: Class<PageSize__A9> & PageSize__A9 & "A9"; // "A9"
    static +A1O: Class<PageSize__A1O> & PageSize__A1O & "A10"; // "A10"
    static +BO: Class<PageSize__BO> & PageSize__BO & "B0"; // "B0"
    static +B1: Class<PageSize__B1> & PageSize__B1 & "B1"; // "B1"
    static +B2: Class<PageSize__B2> & PageSize__B2 & "B2"; // "B2"
    static +B3: Class<PageSize__B3> & PageSize__B3 & "B3"; // "B3"
    static +B4: Class<PageSize__B4> & PageSize__B4 & "B4"; // "B4"
    static +B5: Class<PageSize__B5> & PageSize__B5 & "B5"; // "B5"
    static +B6: Class<PageSize__B6> & PageSize__B6 & "B6"; // "B6"
    static +B7: Class<PageSize__B7> & PageSize__B7 & "B7"; // "B7"
    static +B8: Class<PageSize__B8> & PageSize__B8 & "B8"; // "B8"
    static +B9: Class<PageSize__B9> & PageSize__B9 & "B9"; // "B9"
    static +B1O: Class<PageSize__B1O> & PageSize__B1O & "B10"; // "B10"
    static +CO: Class<PageSize__CO> & PageSize__CO & "C0"; // "C0"
    static +C1: Class<PageSize__C1> & PageSize__C1 & "C1"; // "C1"
    static +C2: Class<PageSize__C2> & PageSize__C2 & "C2"; // "C2"
    static +C3: Class<PageSize__C3> & PageSize__C3 & "C3"; // "C3"
    static +C4: Class<PageSize__C4> & PageSize__C4 & "C4"; // "C4"
    static +C5: Class<PageSize__C5> & PageSize__C5 & "C5"; // "C5"
    static +C6: Class<PageSize__C6> & PageSize__C6 & "C6"; // "C6"
    static +C7: Class<PageSize__C7> & PageSize__C7 & "C7"; // "C7"
    static +C8: Class<PageSize__C8> & PageSize__C8 & "C8"; // "C8"
    static +C9: Class<PageSize__C9> & PageSize__C9 & "C9"; // "C9"
    static +C1O: Class<PageSize__C1O> & PageSize__C1O & "C10"; // "C10"
    static +RA1: Class<PageSize__RA1> & PageSize__RA1 & "RA1"; // "RA1"
    static +RA2: Class<PageSize__RA2> & PageSize__RA2 & "RA2"; // "RA2"
    static +RA3: Class<PageSize__RA3> & PageSize__RA3 & "RA3"; // "RA3"
    static +RA4: Class<PageSize__RA4> & PageSize__RA4 & "RA4"; // "RA4"
    static +SRA1: Class<PageSize__SRA1> & PageSize__SRA1 & "SRA1"; // "SRA1"
    static +SRA2: Class<PageSize__SRA2> & PageSize__SRA2 & "SRA2"; // "SRA2"
    static +SRA3: Class<PageSize__SRA3> & PageSize__SRA3 & "SRA3"; // "SRA3"
    static +SRA4: Class<PageSize__SRA4> & PageSize__SRA4 & "SRA4"; // "SRA4"
    static +EXECUTIVE: Class<PageSize__EXECUTIVE> &
      PageSize__EXECUTIVE &
      "EXECUTIVE"; // "EXECUTIVE"
    static +FOLIO: Class<PageSize__FOLIO> & PageSize__FOLIO & "FOLIO"; // "FOLIO"
    static +LEGAL: Class<PageSize__LEGAL> & PageSize__LEGAL & "LEGAL"; // "LEGAL"
    static +LETTER: Class<PageSize__LETTER> & PageSize__LETTER & "LETTER"; // "LETTER"
    static +TABLOID: Class<PageSize__TABLOID> & PageSize__TABLOID & "TABLOID"; // "TABLOID"
  }

  declare class PageSize__A0_x_4 mixins PageSize {}
  declare class PageSize__A0_x_2 mixins PageSize {}
  declare class PageSize__AO mixins PageSize {}
  declare class PageSize__A1 mixins PageSize {}
  declare class PageSize__A2 mixins PageSize {}
  declare class PageSize__A3 mixins PageSize {}
  declare class PageSize__A4 mixins PageSize {}
  declare class PageSize__A5 mixins PageSize {}
  declare class PageSize__A6 mixins PageSize {}
  declare class PageSize__A7 mixins PageSize {}
  declare class PageSize__A8 mixins PageSize {}
  declare class PageSize__A9 mixins PageSize {}
  declare class PageSize__A1O mixins PageSize {}
  declare class PageSize__BO mixins PageSize {}
  declare class PageSize__B1 mixins PageSize {}
  declare class PageSize__B2 mixins PageSize {}
  declare class PageSize__B3 mixins PageSize {}
  declare class PageSize__B4 mixins PageSize {}
  declare class PageSize__B5 mixins PageSize {}
  declare class PageSize__B6 mixins PageSize {}
  declare class PageSize__B7 mixins PageSize {}
  declare class PageSize__B8 mixins PageSize {}
  declare class PageSize__B9 mixins PageSize {}
  declare class PageSize__B1O mixins PageSize {}
  declare class PageSize__CO mixins PageSize {}
  declare class PageSize__C1 mixins PageSize {}
  declare class PageSize__C2 mixins PageSize {}
  declare class PageSize__C3 mixins PageSize {}
  declare class PageSize__C4 mixins PageSize {}
  declare class PageSize__C5 mixins PageSize {}
  declare class PageSize__C6 mixins PageSize {}
  declare class PageSize__C7 mixins PageSize {}
  declare class PageSize__C8 mixins PageSize {}
  declare class PageSize__C9 mixins PageSize {}
  declare class PageSize__C1O mixins PageSize {}
  declare class PageSize__RA1 mixins PageSize {}
  declare class PageSize__RA2 mixins PageSize {}
  declare class PageSize__RA3 mixins PageSize {}
  declare class PageSize__RA4 mixins PageSize {}
  declare class PageSize__SRA1 mixins PageSize {}
  declare class PageSize__SRA2 mixins PageSize {}
  declare class PageSize__SRA3 mixins PageSize {}
  declare class PageSize__SRA4 mixins PageSize {}
  declare class PageSize__EXECUTIVE mixins PageSize {}
  declare class PageSize__FOLIO mixins PageSize {}
  declare class PageSize__LEGAL mixins PageSize {}
  declare class PageSize__LETTER mixins PageSize {}
  declare class PageSize__TABLOID mixins PageSize {}

  declare class PageOrientation {
    constructor(...args: empty): mixed;
    static +PORTRAIT: Class<PageOrientation__PORTRAIT> &
      PageOrientation__PORTRAIT &
      "PORTRAIT"; // "PORTRAIT"
    static +LANDSCAPE: Class<PageOrientation__LANDSCAPE> &
      PageOrientation__LANDSCAPE &
      "LANDSCAPE"; // "LANDSCAPE"
  }

  declare class PageOrientation__PORTRAIT mixins PageOrientation {}
  declare class PageOrientation__LANDSCAPE mixins PageOrientation {}

  declare var pdfMake: pdfMakeStatic;
  declare interface TFontFamily {
    [fontName: string]: string;
  }
  declare interface TFontFamilyTypes {
    normal?: string;
    bold?: string;
    italics?: string;
    bolditalics?: string;
  }
  declare interface TDocumentInformation {
    title?: string;
    author?: string;
    subject?: string;
    keywords?: string;
  }
  declare type TDocumentHeaderFooterFunction = (
    currentPage: number,
    pageCount: number
  ) => any;
  declare type Margins =
    | number
    | [number, number]
    | [number, number, number, number];
  declare type Alignment = "left" | "right" | "justify" | "center" | string;
  declare interface Style {
    font?: any;
    fontSize?: number;
    fontFeatures?: any;
    bold?: boolean;
    italics?: boolean;
    alignment?: Alignment;
    color?: string;
    columnGap?: any;
    fillColor?: string;
    decoration?: any;
    decorationany?: any;
    decorationColor?: string;
    background?: any;
    lineHeight?: number;
    characterSpacing?: number;
    noWrap?: boolean;
    markerColor?: string;
    leadingIndent?: any;
    [additionalProperty: string]: any;
  }
  declare type TableRowFunction = (row: number) => number;
  declare interface TableLayoutFunctions {
    hLineWidth?: (i: number, node: any) => number;
    vLineWidth?: (i: number, node: any) => number;
    hLineColor?: (i: number, node: any) => string;
    vLineColor?: (i: number, node: any) => string;
    fillColor?: (i: number, node: any) => string;
    paddingLeft?: (i: number, node: any) => number;
    paddingRight?: (i: number, node: any) => number;
    paddingTop?: (i: number, node: any) => number;
    paddingBottom?: (i: number, node: any) => number;
  }
  declare interface TableCell {
    text: string;
    rowSpan?: number;
    colSpan?: number;
    fillColor?: string;
    border?: [boolean, boolean, boolean, boolean];
  }
  declare interface Table {
    widths?: Array<string | number>;
    heights?: Array<string | number> | TableRowFunction;
    headerRows?: number;
    body: Content[][] | TableCell[][];
    layout?: string | TableLayoutFunctions;
  }
  declare interface Content {
    style?: "string";
    margin?: Margins;
    text?: string | string[] | Content[];
    columns?: Content[];
    stack?: Content[];
    image?: string;
    width?: string | number;
    height?: string | number;
    fit?: [number, number];
    pageBreak?: "before" | "after";
    alignment?: Alignment;
    table?: Table;
    ul?: Content[];
    ol?: Content[];
    [additionalProperty: string]: any;
  }
  declare interface TDocumentDefinitions {
    info?: TDocumentInformation;
    compress?: boolean;
    header?: TDocumentHeaderFooterFunction;
    footer?: TDocumentHeaderFooterFunction;
    content: string | Content;
    styles?: Style;
    pageSize?: PageSize;
    pageOrientation?: PageOrientation;
    pageMargins?: Margins;
    defaultStyle?: Style;
  }
  declare type CreatedPdfParams = (
    defaultFileName?: string,
    cb?: string,
    options?: string
  ) => void;
  declare interface TCreatedPdf {
    download: CreatedPdfParams;
    open: CreatedPdfParams;
    print: CreatedPdfParams;
  }
  declare interface pdfMakeStatic {
    vfs: TFontFamily;
    fonts: {
      [name: string]: TFontFamilyTypes
    };
    createPdf(documentDefinitions: TDocumentDefinitions): TCreatedPdf;
  }
}
declare module "pdfmake/build/vfs_fonts" {
  declare var pdfMake: {
    vfs: any,
    [name: string]: any
  };
}
declare module "pdfmake" {
}
