declare module "exceljs" {
  import type { Writable, Stream } from "stream";

  declare export var RelationshipType: {|
    +None: 0, // 0
    +OfficeDocument: 1, // 1
    +Worksheet: 2, // 2
    +CalcChain: 3, // 3
    +SharedStrings: 4, // 4
    +Styles: 5, // 5
    +Theme: 6, // 6
    +Hyperlink: 7 // 7
  |};

  declare export var DocumentType: {|
    +Xlsx: 1 // 1
  |};

  declare export var PaperSize: {|
    +Legal: 5, // 5
    +Executive: 7, // 7
    +A4: 9, // 9
    +A5: 11, // 11
    +B5: 13, // 13
    +Envelope_10: 20, // 20
    +Envelope_DL: 27, // 27
    +Envelope_C5: 28, // 28
    +Envelope_B5: 34, // 34
    +Envelope_Monarch: 37, // 37
    +Double_Japan_Postcard_Rotated: 82, // 82
    +K16_197x273_mm: 119 // 119
  |};

  declare export interface WorksheetViewCommon {
    /**
     * Sets the worksheet view's orientation to right-to-left, `false` by default
     */
    rightToLeft?: boolean;

    /**
     * The currently selected cell
     */
    activeCell?: string;

    /**
     * Shows or hides the ruler in Page Layout, `true` by default
     */
    showRuler?: boolean;

    /**
     * Shows or hides the row and column headers (e.g. A1, B1 at the top and 1,2,3 on the left,
     * `true` by default
     */
    showRowColHeaders?: boolean;

    /**
     * Shows or hides the gridlines (shown for cells where borders have not been defined),
     * `true` by default
     */
    showGridLines?: boolean;

    /**
     * Percentage zoom to use for the view, `100` by default
     */
    zoomScale?: number;

    /**
     * Normal zoom for the view, `100` by default
     */
    zoomScaleNormal?: number;
  }
  declare export interface WorksheetViewNormal {
    /**
     * Controls the view state
     */
    state?: "normal";

    /**
     * Presentation style
     */
    style?: "pageBreakPreview" | "pageLayout";
  }
  declare export interface WorksheetViewFrozen {
    /**
     * Where a number of rows and columns to the top and left are frozen in place.
     * Only the bottom left section will scroll
     */
    state: "frozen";

    /**
     * Presentation style
     */
    style?: "pageBreakPreview";

    /**
     * How many columns to freeze. To freeze rows only, set this to 0 or undefined
     */
    xSplit?: number;

    /**
     * How many rows to freeze. To freeze columns only, set this to 0 or undefined
     */
    ySplit?: number;

    /**
     * Which cell will be top-left in the bottom-right pane. Note: cannot be a frozen cell.
     * Defaults to first unfrozen cell
     */
    topLeftCell?: string;
  }
  declare export interface WorksheetViewSplit {
    /**
     * Where the view is split into 4 sections, each semi-independently scrollable.
     */
    state: "split";

    /**
     * Presentation style
     */
    style?: "pageBreakPreview" | "pageLayout";

    /**
     * How many points from the left to place the splitter.
     * To split vertically, set this to 0 or undefined
     */
    xSplit?: number;

    /**
     * How many points from the top to place the splitter.
     * To split horizontally, set this to 0 or undefined
     */
    ySplit?: number;

    /**
     * Which cell will be top-left in the bottom-right pane
     */
    topLeftCell?: string;

    /**
     * Which pane will be active
     */
    activePane?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  }
  declare export type WorksheetView = WorksheetViewCommon &
    (WorksheetViewNormal | WorksheetViewFrozen | WorksheetViewSplit);
  declare export interface WorkbookView {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    firstSheet?: number;
    activeTab?: number;
    visibility?: string;
  }
  declare export type FillPatterns =
    | "none"
    | "solid"
    | "darkVertical"
    | "darkHorizontal"
    | "darkGrid"
    | "darkTrellis"
    | "darkDown"
    | "darkUp"
    | "lightVertical"
    | "lightHorizontal"
    | "lightGrid"
    | "lightTrellis"
    | "lightDown"
    | "lightUp"
    | "darkGray"
    | "mediumGray"
    | "lightGray"
    | "gray125"
    | "gray0625";
  declare export interface FillPattern {
    type: "pattern";
    pattern: FillPatterns;
    fgColor?: Color;
    bgColor?: Color;
  }
  declare export interface GradientStop {
    position: number;
    color: Color;
  }
  declare export interface FillGradientAngle {
    type: "gradient";
    gradient: "angle";

    /**
     * For 'angle' gradient, specifies the direction of the gradient. 0 is from the left to the right.
     * Values from 1 - 359 rotates the direction clockwise
     */
    degree: number;

    /**
     * Specifies the gradient colour sequence. Is an array of objects containing position and
     * color starting with position 0 and ending with position 1.
     * Intermediary positions may be used to specify other colours on the path.
     */
    stops: GradientStop[];
  }
  declare export interface FillGradientPath {
    type: "gradient";
    gradient: "path";

    /**
     * For 'path' gradient. Specifies the relative coordinates for the start of the path.
     * 'left' and 'top' values range from 0 to 1
     */
    center: {
      left: number,
      top: number
    };

    /**
     * Specifies the gradient colour sequence. Is an array of objects containing position and
     * color starting with position 0 and ending with position 1.
     * Intermediary positions may be used to specify other colours on the path.
     */
    stops: GradientStop[];
  }
  declare export type Fill = FillPattern | FillGradientAngle | FillGradientPath;
  declare export interface Font {
    name?: string;
    size?: number;
    family?: number;
    scheme?: "minor" | "major" | "none";
    charset?: number;
    color?: Color;
    bold?: boolean;
    italic?: boolean;
    underline?:
      | boolean
      | "none"
      | "single"
      | "double"
      | "singleAccounting"
      | "doubleAccounting";
    strike?: boolean;
    outline?: boolean;
  }
  declare export type BorderStyle =
    | "thin"
    | "dotted"
    | "hair"
    | "medium"
    | "double"
    | "thick"
    | "dashDot"
    | "dashDotDot"
    | "slantDashDot"
    | "mediumDashed"
    | "mediumDashDotDot"
    | "mediumDashDot";
  declare export interface Color {
    /**
     * Hex string for alpha-red-green-blue e.g. FF00FF00
     */
    argb?: string;

    /**
     * Choose a theme by index
     */
    theme?: number;
  }
  declare export interface Border {
    style?: BorderStyle;
    color?: Color;
  }
  declare export type BorderDiagonal = {
    up?: boolean,
    down?: boolean
  } & Border;

  declare export interface Borders {
    top?: Border;
    left?: Border;
    bottom?: Border;
    right?: Border;
    diagonal?: BorderDiagonal;
  }
  declare export interface Margins {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
    header?: number;
    footer?: number;
  }

  declare export var ReadingOrder: {|
    +LeftToRight: 1, // 1
    +RightToLeft: 2 // 2
  |};

  declare export interface Alignment {
    horizontal?:
      | "left"
      | "center"
      | "right"
      | "fill"
      | "justify"
      | "centerContinuous"
      | "distributed";
    vertical?: "top" | "middle" | "bottom" | "distributed" | "justify";
    wrapText?: boolean;
    indent?: number;
    readingOrder?: "rtl" | "ltr";
    textRotation?: number | "vertical";
  }
  declare export interface Style {
    numFmt?: string;
    font?: Font;
    alignment?: Alignment;
    border?: Borders;
    fill?: Fill;
  }
  declare export type DataValidationOperator =
    | "between"
    | "notBetween"
    | "equal"
    | "notEqual"
    | "greaterThan"
    | "lessThan"
    | "greaterThanOrEqual"
    | "lessThanOrEqual";
  declare export interface DataValidation {
    type: "list" | "whole" | "decimal" | "date" | "textLength" | "custom";
    formulae: any[];
    allowBlank?: boolean;
    operator?: DataValidationOperator;
    error?: string;
    errorTitle?: string;
    errorStyle?: string;
    prompt?: string;
    promptTitle?: string;
    showErrorMessage?: boolean;
    showInputMessage?: boolean;
  }
  declare export interface CellErrorValue {
    error:
      | "#N/A"
      | "#REF!"
      | "#NAME?"
      | "#DIV/0!"
      | "#NULL!"
      | "#VALUE!"
      | "#NUM!";
  }
  declare export interface RichText {
    text: string;
    font?: Font;
  }
  declare export interface CellRichTextValue {
    richText: RichText[];
  }
  declare export interface CellHyperlinkValue {
    text: string;
    hyperlink: string;
  }
  declare export interface CellFormulaValue {
    formula: string;
    result: number | string | Date;
  }
  declare export interface CellSharedFormulaValue {
    sharedFormula: string;
    +formula?: string;
    result: number | string | Date;
  }

  declare export var ValueType: {|
    +Null: 0, // 0
    +Merge: 1, // 1
    +Number: 2, // 2
    +String: 3, // 3
    +Date: 4, // 4
    +Hyperlink: 5, // 5
    +Formula: 6, // 6
    +SharedString: 7, // 7
    +RichText: 8, // 8
    +Boolean: 9, // 9
    +Error: 10 // 10
  |};

  declare export var FormulaType: {|
    +None: 0, // 0
    +Master: 1, // 1
    +Shared: 2 // 2
  |};

  declare export type CellValue =
    | null
    | number
    | string
    | boolean
    | Date
    | CellErrorValue
    | CellRichTextValue
    | CellHyperlinkValue
    | CellFormulaValue
    | CellSharedFormulaValue;
  declare export type Cell = {
    /**
     * Assign (or get) a name for a cell (will overwrite any other names that cell had)
     */
    name?: string,

    /**
     * Assign (or get) an array of names for a cell (cells can have more than one name)
     */
    names?: string[],

    /**
     * Cells can define what values are valid or not and provide
     * prompting to the user to help guide them.
     */
    dataValidation?: DataValidation,

    /**
     * Value of the cell
     */
    value: CellValue,

    /**
     * convenience getter to access the formula
     */
    +formula: string,

    /**
     * convenience getter to access the formula result
     */
    +result: number | string | Date,

    /**
     * The type of the cell's value
     */
    +type: ValueType,

    /**
     * The type of the cell's formula
     */
    +formulaType: FormulaType,

    /**
     * The master cell when the current cell is a merge cell
     */
    master?: Cell,

    /**
     * The styles of the cell
     */
    style: Style,

    /**
     * Remove a name from a cell
     */
    removeName(name: string): void
  } & Style;

  declare export type Row = {
    /**
     * Set a specific row height
     */
    height: number,

    /**
     * Make row hidden
     */
    hidden: boolean,

    /**
     * Get a row as a sparse array
     */
    values: any[] | any,

    /**
     * Set an outline level for rows
     */
    outlineLevel?: number,

    /**
     * The row number
     */
    +number: number,

    /**
     * Indicate the collapsed state based on outlineLevel
     */
    +collapsed: boolean,

    /**
     * Number of non-empty cells
     */
    +cellCount: number,

    /**
     * Number of cells including empty ones
     */
    +actualCellCount: number,

    /**
     * Get cell by number, column letter or column key
     */
    getCell(indexOrKey: number | string): Cell,

    /**
     * Iterate over all non-null cells in a row
     */
    eachCell(callback: (cell: Cell, colNumber: number) => void): void,

    /**
     * Iterate over all cells in a row (including empty cells)
     */
    eachCell(
      opt: {
        includeEmpty: boolean
      },
      callback: (cell: Cell, colNumber: number) => void
    ): void,

    /**
     * Cut one or more cells (cells to the right are shifted left)
     *
     * Note: this operation will not affect other rows
     */
    splice(start: number, count: number, ...insert: any[]): void,

    /**
     * Commit a completed row to stream
     */
    commit(): void
  } & Style;

  declare export interface Column {
    /**
     * Can be a string to set one row high header or an array to set multi-row high header
     */
    header?: string | string[];

    /**
     * The name of the properties associated with this column in each row
     */
    key?: string;

    /**
     * The width of the column
     */
    width?: number;

    /**
     * Set an outline level for columns
     */
    outlineLevel?: number;

    /**
     * Hides the column
     */
    hidden?: boolean;

    /**
     * Styles applied to the column
     */
    style?: Style;
  }
  declare export type ColumnExtension = {
    /**
     * indicate the collapsed state based on outlineLevel
     */
    +collapsed: boolean,

    /**
     * Iterate over all current cells in this column
     */
    eachCell(callback: (cell: Cell, rowNumber: number) => void): void,

    /**
     * Iterate over all current cells in this column including empty cells
     */
    eachCell(
      opt: {
        includeEmpty: boolean
      },
      callback: (cell: Cell, rowNumber: number) => void
    ): void
  } & Style;

  declare export interface PageSetup {
    /**
     * Whitespace on the borders of the page. Units are inches.
     */
    margins?: Margins;

    /**
     * Orientation of the page - i.e. taller (`'portrait'`) or wider (`'landscape'`).
     *
     * `'portrait'` by default
     */
    orientation?: "portrait" | "landscape";

    /**
     * Horizontal Dots per Inch. Default value is 4294967295
     */
    horizontalDpi?: number;

    /**
     * Vertical Dots per Inch. Default value is 4294967295
     */
    verticalDpi?: number;

    /**
     * Whether to use fitToWidth and fitToHeight or scale settings.
     *
     * Default is based on presence of these settings in the pageSetup object - if both are present,
     * scale wins (i.e. default will be false)
     */
    fitToPage?: boolean;

    /**
     * How many pages wide the sheet should print on to. Active when fitToPage is true
     *
     * Default is 1
     */
    fitToWidth?: number;

    /**
     * How many pages high the sheet should print on to. Active when fitToPage is true
     *
     * Default is 1
     */
    fitToHeight?: number;

    /**
     * Percentage value to increase or reduce the size of the print. Active when fitToPage is false
     *
     * Default is 100
     */
    scale?: number;

    /**
     * Which order to print the pages.
     *
     * Default is `downThenOver`
     */
    pageOrder?: "downThenOver" | "overThenDown";

    /**
     * Print without colour
     *
     * false by default
     */
    blackAndWhite?: boolean;

    /**
     * Print with less quality (and ink)
     *
     * false by default
     */
    draft?: boolean;

    /**
     * Where to place comments
     *
     * Default is `None`
     */
    cellComments?: "atEnd" | "asDisplayed" | "None";

    /**
     * Where to show errors
     *
     * Default is `displayed`
     */
    errors?: "dash" | "blank" | "NA" | "displayed";

    /**
     * What paper size to use (see below)
     *
     * | Name                          | Value       |
     * | ----------------------------- | ---------   |
     * | Letter                        | `undefined` |
     * | Legal                         |  `5`        |
     * | Executive                     |  `7`        |
     * | A4                            |  `9`        |
     * | A5                            |  `11`       |
     * | B5 (JIS)                      |  `13`       |
     * | Envelope #10                  |  `20`       |
     * | Envelope DL                   |  `27`       |
     * | Envelope C5                   |  `28`       |
     * | Envelope B5                   |  `34`       |
     * | Envelope Monarch              |  `37`       |
     * | Double Japan Postcard Rotated |  `82`       |
     * | 16K 197x273 mm                |  `119`      |
     */
    paperSize?: PaperSize;

    /**
     * Whether to show the row numbers and column letters, `false` by default
     */
    showRowColHeaders?: boolean;

    /**
     * Whether to show grid lines, `false` by default
     */
    showGridLines?: boolean;

    /**
     * Which number to use for the first page
     */
    firstPageNumber?: number;

    /**
     * Whether to center the sheet data horizontally, `false` by default
     */
    horizontalCentered?: boolean;

    /**
     * Whether to center the sheet data vertically, `false` by default
     */
    verticalCentered?: boolean;

    /**
     * Set Print Area for a sheet, e.g. `'A1:G20'`
     */
    printArea?: string;

    /**
     * Repeat specific rows on every printed page, e.g. `'1:3'`
     */
    printTitlesRow?: string;
  }
  declare export type AutoFilter =
    | string
    | {
        from:
          | string
          | {
              row: number,
              column: number
            },
        to:
          | string
          | {
              row: number,
              column: number
            }
      };
  declare export interface Image {
    extension: "jpeg" | "png" | "gif";
    filename?: string;
    buffer?: Buffer;
  }
  declare export interface ImageRange {
    tl: {
      col: number,
      row: number
    };
    br: {
      col: number,
      row: number
    };
  }
  declare export interface Worksheet {
    /**
     * Contains information related to how a worksheet is printed
     */
    pageSetup: PageSetup;

    /**
     * Worksheet Properties
     */
    properties: WorksheetProperties;

    /**
     * Open panes representing the sheet
     */
    views: WorksheetView[];

    /**
     * Apply an auto filter to your worksheet.
     */
    autoFilter?: AutoFilter;

    /**
     * Add column headers and define column keys and widths.
     *
     * Note: these column structures are a workbook-building convenience only,
     * apart from the column width, they will not be fully persisted.
     */
    columns?: Column[];

    /**
     * The total row size of the document. Equal to the row number of the last row that has values.
     */
    +rowCount: number;

    /**
     * A count of the number of rows that have values. If a mid-document row is empty, it will not be included in the count.
     */
    +actualRowCount: number;

    /**
     * The total column size of the document. Equal to the maximum cell count from all of the rows
     */
    +columnCount: number;

    /**
     * A count of the number of columns that have values.
     */
    +actualColumnCount: number;

    /**
     * Get the last editable row in a worksheet (or undefined if there are none)
     */
    +lastRow: Row | void;

    /**
     * Access an individual columns by key, letter and 1-based column number
     */
    getColumn(indexOrKey: number | string): Column & ColumnExtension;

    /**
     * Cut one or more columns (columns to the right are shifted left)
     * and optionally insert more
     *
     * If column properties have been definde, they will be cut or moved accordingly
     *
     * Known Issue: If a splice causes any merged cells to move, the results may be unpredictable
     *
     * Also: If the worksheet has more rows than values in the colulmn inserts,
     * the rows will still be shifted as if the values existed
     */
    spliceColumns(start: number, count: number, ...insert: any[][]): void;

    /**
     * Cut one or more rows (rows below are shifted up)
     * and optionally insert more
     *
     * Known Issue: If a splice causes any merged cells to move, the results may be unpredictable
     */
    spliceRows(start: number, count: number, ...insert: any[][]): void;

    /**
     * Add a couple of Rows by key-value, after the last current row, using the column keys,
     * or add a row by contiguous Array (assign to columns A, B & C)
     */
    addRow(data: any[] | any): Row;

    /**
     * Add multiple rows by providing an array of arrays or key-value pairs
     */
    addRows(rows: any[]): void;

    /**
     * Get or create row by 0-based index
     */
    getRow(index: number): Row;

    /**
     * Iterate over all rows that have values in a worksheet
     */
    eachRow(callback: (row: Row, rowNumber: number) => void): void;

    /**
     * Iterate over all rows (including empty rows) in a worksheet
     */
    eachRow(
      opt: {
        includeEmpty: boolean
      },
      callback: (row: Row, rowNumber: number) => void
    ): void;

    /**
     * Get or create cell
     */
    getCell(ref: string): Cell;

    /**
     * Merge cells, either:
     *
     * tlbr string, e.g. `'A4:B5'`
     *
     * tl string, br string, e.g. `'G10', 'H11'`
     *
     * t, l, b, r numbers, e.g. `10,11,12,13`
     */
    mergeCells(
      a: number | string,
      b?: number | string,
      c?: number,
      d?: number
    ): void;

    /**
     * unmerging the cells breaks the style links
     */
    unMergeCells(cell: string): void;

    /**
     * Using the image id from `Workbook.addImage`, set the background to the worksheet
     */
    addBackgroundImage(imageId: string): void;

    /**
     * Using the image id from `Workbook.addImage`,
     * embed an image within the worksheet to cover a range
     */
    addImage(imageId: string, range: string | ImageRange): void;

    /**
     * Commit a completed worksheet to stream
     */
    commit(): void;
  }
  declare export interface WorksheetProperties {
    /**
     * Color of the tab
     */
    tabColor?: Color;

    /**
     * The worksheet column outline level (default: 0)
     */
    outlineLevelCol?: number;

    /**
     * The worksheet row outline level (default: 0)
     */
    outlineLevelRow?: number;

    /**
     * Default row height (default: 15)
     */
    defaultRowHeight?: number;

    /**
     * default: 55
     */
    dyDescent?: number;
  }
  declare export interface AddWorksheetOptions {
    properties?: WorksheetProperties;
    pageSetup?: PageSetup;
    views?: WorksheetView[];
  }
  declare export interface WorkbookProperties {
    /**
     * Set workbook dates to 1904 date system
     */
    date1904: boolean;
  }
  declare export interface Xlsx {
    /**
     * read from a file
     */
    readFile(path: string): Promise<void>;

    /**
     * Create input stream for reading
     */
    createInputStream(): Writable;

    /**
     * write to a file
     */
    writeFile(path: string): Promise<void>;

    /**
     * write to a stream
     */
    write(stream: Stream): Promise<void>;
  }
  declare export interface CsvReadOptions {
    dateFormats?: string[];
    map?: (value: any, index: number) => any;
  }
  declare export interface CsvWriteOptions {
    dateFormat?: string;
  }
  declare export interface Csv {
    /**
     * read from a file
     */
    readFile(path: string, options?: CsvReadOptions): Promise<Worksheet>;

    /**
     * read from a stream
     */
    read(stream: Stream, options?: CsvReadOptions): Promise<Worksheet>;

    /**
     * Create input stream for reading
     */
    createInputStream(): Writable;

    /**
     * write to a file
     */
    writeFile(path: string, options?: CsvWriteOptions): Promise<void>;

    /**
     * write to a stream
     */
    write(stream: Stream, options?: CsvWriteOptions): Promise<void>;
  }
  declare export class Workbook {
    creator: string;
    lastModifiedBy: string;
    created: Date;
    modified: Date;
    lastPrinted: Date;
    properties: WorkbookProperties;

    /**
     * xlsx file format operations
     */
    stream$xlsx: Xlsx;

    /**
     * csv file format operations
     */
    csv: Csv;

    /**
     * The Workbook views controls how many separate windows Excel will open when viewing the workbook.
     */
    views: WorkbookView[];

    /**
     * The list of worksheets added to this workbook
     */
    worksheets: Worksheet[];

    /**
     * Add a new worksheet and return a reference to it
     */
    addWorksheet(name: string, options?: AddWorksheetOptions): Worksheet;

    /**
     * fetch sheet by name or id
     */
    getWorksheet(indexOrName: number | string): Worksheet;

    /**
     * Iterate over all sheets.
     *
     * Note: `workbook.worksheets.forEach` will still work but this is better.
     */
    eachSheet(callback: (worksheet: Worksheet, id: number) => void): void;

    /**
     * Add Image to Workbook and return the id
     */
    addImage(img: Image): string;

    /**
     * Commit a completed workbook to stream and close the stream
     */
    commit(): Promise<void>;
  }

  declare var npm$namespace$config: {
    setValue: typeof config$setValue
  };
  declare function config$setValue(key: "promise", promise: any): void;

  declare var npm$namespace$stream: {
    xlsx: typeof npm$namespace$stream$xlsx
  };

  declare var npm$namespace$stream$xlsx: {
    WorkbookWriter: typeof stream$xlsx$WorkbookWriter
  };
  declare interface stream$xlsx$WorkbookWriterOptions {
    /**
     * Specifies a writable stream to write the XLSX workbook to.
     */
    stream?: Stream;

    /**
     * If stream not specified, this field specifies the path to a file to write the XLSX workbook to.
     */
    filename?: string;

    /**
     * Specifies whether to use shared strings in the workbook. Default is false
     */
    useSharedStrings?: boolean;

    /**
     * Specifies whether to add style information to the workbook.
     * Styles can add some performance overhead. Default is false
     */
    useStyles?: boolean;
  }

  declare class stream$xlsx$WorkbookWriter mixins Workbook {
    constructor(options: stream$xlsx$WorkbookWriterOptions): this;
  }
}
